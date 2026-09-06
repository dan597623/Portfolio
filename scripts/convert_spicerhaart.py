"""Convert the supplied case-study markup without executing its scripts."""
from pathlib import Path
from bs4 import BeautifulSoup, Comment, NavigableString
from concurrent.futures import ThreadPoolExecutor
import ast, json, re, shutil, urllib.request

root = Path(__file__).resolve().parents[1]
source = Path(r'C:\Users\aurora\Downloads\Company logo\Streamlining property video for estate agency brands.html')
assets = source.with_name(source.stem + '_files')
soup = BeautifulSoup(source.read_text(encoding='utf-8'), 'html.parser')
destination = root / 'public/assets/spicerhaart'
destination.mkdir(parents=True, exist_ok=True)
for asset in assets.iterdir():
    if asset.suffix.lower() in {'.svg', '.png', '.jpg', '.jpeg', '.webp'}:
        shutil.copy2(asset, destination / asset.name)

# Reuse only the serializer definitions; never run the homepage conversion.
tree = ast.parse((root / 'scripts/convert_reference.py').read_text(encoding='utf-8'))
definitions = [node for node in tree.body if
    isinstance(node, ast.FunctionDef) and node.name == 'jsx' or
    isinstance(node, ast.Assign) and any(isinstance(t, ast.Name) and t.id in {'mapping','tags','booleans','void'} for t in node.targets)]
exec(compile(ast.Module(body=definitions, type_ignores=[]), '<serializer>', 'exec'))
mapping.update({'maskunits':'maskUnits','maskcontentunits':'maskContentUnits', 'filterunits':'filterUnits', 'stddeviation':'stdDeviation', 'flood-opacity':'floodOpacity','color-interpolation-filters':'colorInterpolationFilters'})
tags.update({'fegaussianblur':'feGaussianBlur','feflood':'feFlood','fecolormatrix':'feColorMatrix','fecomposite':'feComposite','feblend':'feBlend','feoffset':'feOffset'})
downloads = {}
def local(url):
    if '_files/' in url: return '/assets/spicerhaart/' + url.split('_files/')[-1]
    if '.svg' in url and 'geniusee.com/' in url:
        base, _, fragment = url.partition('#')
        name = base.split('/')[-1].split('?')[0]
        if not (root/'public/assets'/name).exists():
            downloads[name] = base.replace('https://geniusee.com/', 'https://ik.imagekit.io/geniusee/')
        return '/assets/' + name + ('#' + fragment if fragment else '')
    if url == 'https://geniusee.com/': return '/'
    if url.startswith('https://geniusee.com/#'): return url.replace('https://geniusee.com/', '')
    return url

sections = soup.main.find_all(recursive=False)
for node in sections[1].select('[data-target]'):
    node['id'] = re.sub(r'[^a-z0-9]+', '-', node.get_text(' ',strip=True).lower()).strip('-')
    node['class'] = [c for c in node.get('class', []) if c != 'active']
sidebar = sections[1].select_one('.post-index')
sidebar.clear()
sidebar['class'] = ['post-index']
placeholder = soup.new_tag('case-study-navigation')
sidebar.append(placeholder)
output = root/'src/components/spicerhaart'
output.mkdir(parents=True,exist_ok=True)
for name, node in zip(['CaseBanner','CaseContent','RelatedProjects'], sections[:3]):
    content = jsx(node).replace('<case-study-navigation></case-study-navigation>', '<CaseStudyNavigation />')
    imports = "import CaseStudyNavigation from './CaseStudyNavigation';\n" if name == 'CaseContent' else ''
    (output/f'{name}.jsx').write_text(imports+f'export default function {name}() {{\n return (\n{content}\n );\n}}\n',encoding='utf-8')

def fetch(item):
    name, url = item
    with urllib.request.urlopen(url, timeout=30) as response:
        (root/'public/assets'/name).write_bytes(response.read())
with ThreadPoolExecutor(max_workers=6) as pool: list(pool.map(fetch, downloads.items()))
print(f'Created 3 case-study components, copied {len(list(destination.iterdir()))} assets, resolved {len(downloads)} icons.')
