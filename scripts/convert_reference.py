from pathlib import Path
from bs4 import BeautifulSoup, Comment, NavigableString
import json, re, shutil, urllib.request
from concurrent.futures import ThreadPoolExecutor

root = Path(__file__).resolve().parents[1]
source = Path(r'C:\Users\aurora\Downloads\Company logo\Custom Software Development Company _ Geniusee.html')
assets = source.with_name(source.stem + '_files')
soup = BeautifulSoup(source.read_text(encoding='utf-8'), 'html.parser')
dest = root / 'public/assets'
dest.mkdir(parents=True, exist_ok=True)
for file in assets.iterdir():
    if file.suffix.lower() in ['.png', '.jpeg', '.jpg', '.svg', '.woff2']:
        shutil.copy2(file, dest / file.name)
downloads = {}
def local(url):
    if '_files/' in url:
        return '/assets/' + url.split('_files/')[-1]
    if 'geniusee.com/' in url and ('.svg' in url or '.woff2' in url):
        base, _, fragment = url.partition('#')
        name = base.split('/')[-1].split('?')[0]
        downloads[base] = dest / name
        return '/assets/' + name + ('#' + fragment if fragment else '')
    if url == 'https://geniusee.com/': return '/'
    if url.startswith('https://geniusee.com/#'): return url.replace('https://geniusee.com/', '')
    return url

css = (assets / 'main.css').read_text(encoding='utf-8')
css = re.sub(r'../../fonts/([^\)]+)', lambda m: local('https://geniusee.com/wp-content/themes/geniusee-theme/assets/fonts/' + m[1]), css)
css = css.replace('../quote-icon.svg', local('https://geniusee.com/wp-content/themes/geniusee-theme/assets/dist/quote-icon.svg'))
(root / 'src/styles/original.css').write_text(css, encoding='utf-8')
shutil.copy2(assets / 'vendors.css', root / 'src/styles/vendors.css')
(root / 'src/styles/blocks.css').write_text('\n'.join(x.get_text() for x in soup.head.select('style[id$="inline-css"]')), encoding='utf-8')

mapping = {'class':'className','for':'htmlFor','tabindex':'tabIndex','viewbox':'viewBox','preserveaspectratio':'preserveAspectRatio','gradientunits':'gradientUnits','gradienttransform':'gradientTransform','xlink:href':'href','xml:space':'xmlSpace','fill-rule':'fillRule','clip-rule':'clipRule','stroke-width':'strokeWidth','stroke-linecap':'strokeLinecap','stroke-linejoin':'strokeLinejoin','stop-color':'stopColor','stop-opacity':'stopOpacity','fill-opacity':'fillOpacity','stroke-opacity':'strokeOpacity','maxlength':'maxLength','readonly':'readOnly','autoplay':'autoPlay','playsinline':'playsInline','crossorigin':'crossOrigin','fetchpriority':'fetchPriority','colspan':'colSpan','rowspan':'rowSpan'}
tags = {'lineargradient':'linearGradient','radialgradient':'radialGradient','clippath':'clipPath'}
booleans = {'required','disabled','multiple','hidden','controls','loop','muted','autoPlay','playsInline','readOnly'}
void = {'img','input','br','hr','meta','link','source','wbr','area','embed','col','track'}
def jsx(node, level=0):
    if isinstance(node, Comment): return ''
    if isinstance(node, NavigableString):
        return '{' + json.dumps(str(node), ensure_ascii=False) + '}' if str(node).strip() else '\n'
    if node.name in ['script','noscript','iframe']: return ''
    attrs = []
    classes = node.get('class', [])
    for key, value in node.attrs.items():
        if key.startswith('on') or key in ['srcset','sizes','selected','novalidate','nonce','xlink:href'] or not re.match(r'^[\w:-]+$',key): continue
        if key in ['n']: continue
        if isinstance(value,list): value=' '.join(value)
        if key == 'class':
            value=' '.join(c for c in value.split() if c not in ['swiper-initialized','swiper-horizontal','swiper-backface-hidden','swiper-slide-active','swiper-slide-next','swiper-button-disabled','header--not-top'])
        if key == 'disabled' and 'swiper-button-prev' in classes: continue
        if key == 'style':
            if any(c in classes for c in ['swiper-wrapper','swiper-slide','swiper']): continue
            style={}
            for prop in value.split(';'):
                if ':' in prop:
                    k,v=prop.split(':',1); k=k.strip()
                    if k: style[k if k.startswith('--') else re.sub(r'-([a-z])',lambda m:m[1].upper(),k)] = v.strip()
            attrs.append('style={'+json.dumps(style)+'}'); continue
        key=mapping.get(key,key)
        if key in ['href','src','poster']: value=local(value)
        if key == 'value' and node.name in ['input','textarea']: key='defaultValue'
        if key == 'checked': key='defaultChecked'; value=True
        if key in booleans: attrs.append(key+'={true}'); continue
        attrs.append(key+'={'+json.dumps(value,ensure_ascii=False)+'}')
    if node.name=='select': attrs.append('defaultValue=""')
    name=tags.get(node.name,node.name)
    start='<'+name+(' '+' '.join(attrs) if attrs else '')
    if name in void: return start+' />\n'
    return start+'>'+''.join(jsx(c,level+1) for c in node.children)+'</'+name+'>\n'

# Repair malformed saved budget options and remove integration-only messages.
budget=soup.select_one('select[name="budget"]')
budget.clear()
for value,label in [('', 'Expected budget'),('< 30k','< 30k'),('30k - 100k','30k – 100k'),('100k - 200k','100k – 200k'),('> 200k','> 200k'),('N/A','N/A')]:
    option=soup.new_tag('option',value=value); option.string=label; budget.append(option)
for x in soup.select('.form-success-message, .form-note'): x.decompose()
names=['Hero','TrustedCompanies','FeaturedProjects','MoreProjects','Services','VideoTestimonials','Reviews','About','Certifications','Industries','Estimator','Blog','Contact']
imports=[]; components=[]
for name,node in [('Header',soup.header),*zip(names,soup.main.find_all(recursive=False)),('Footer',soup.footer),('Background',soup.select_one('.site-bg'))]:
    folder='layout' if name in ['Header','Footer','Background'] else 'sections'
    path=root/f'src/components/{folder}/{name}.jsx'
    path.write_text('export default function '+name+'() {\n  return (\n'+jsx(node)+'\n  );\n}\n',encoding='utf-8')
    imports.append(f"import {name} from './components/{folder}/{name}';")
    components.append(name)
(root/'src/App.jsx').write_text('\n'.join(imports)+"\nimport usePageInteractions from './hooks/usePageInteractions';\nexport default function App() {\n usePageInteractions();\n return <><Header/><main className=\"site-main\">"+''.join('<'+n+'/>' for n in names)+"</main><Footer/><Background/></>;\n}\n",encoding='utf-8')
def fetch(item):
    url,path=item
    try:
        if not path.exists():
            with urllib.request.urlopen(url,timeout=25) as r: path.write_bytes(r.read())
        return None
    except Exception as e: return url+': '+str(e)
with ThreadPoolExecutor(max_workers=8) as pool:
    errors=[e for e in pool.map(fetch,downloads.items()) if e]
print(json.dumps({'components':len(components),'assets':len(list(dest.iterdir())),'missing':errors},indent=2))
