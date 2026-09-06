# React website

The supplied Geniusee homepage converted into 13 React section components, with the original styles and local image assets.

The MyTutor case study is available at `/projects/my-tutor` (also `/my-tutor`). Its banner, case content, contents navigation, and related projects are in `src/components/mytutor`, with page composition in `src/pages/MyTutor.jsx`. Case-specific images are stored in `public/assets/mytutor`. The homepage's MyTutor links open this local page. When deploying, configure your static host to serve `index.html` for application routes so direct links work.

## Run

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

`src/components/sections` contains homepage sections; `src/components/layout` contains the header, footer, and background. Styles are in `src/styles`, local media in `public/assets`, and interactions in `src/hooks/usePageInteractions.js`.

The original site's other pages remain external links. Video testimonials require an internet connection. Contact forms validate locally and display a preview notice; no backend, analytics, live chat, or reCAPTCHA service is connected. Service filtering operates on the cards included in the saved homepage; industry-specific results from the original WordPress backend are not included.

`scripts/convert_reference.py` records the original one-time conversion process and requires Python and Beautiful Soup. It is not needed to run or build the React app.

The A&M case study is available at `/projects/alvarez-and-marsal`, linked from the homepage image and Case details button. Its React components are in `src/components/alvarez`, with original images in `public/assets/alvarez-and-marsal`. Both case studies retain support for their earlier `/portfolio/geniusee/...` URLs.

Imagine AI is available at `/projects/imagine-ai`, linked from its homepage card and Case details button. Its seven sections include the customer review, with components in `src/components/imagine` and local images in `public/assets/imagine-ai`.

Spicerhaart is available at `/projects/spicerhaart`, linked from its homepage card and Case details button. Its seven case-study sections are composed from `src/components/spicerhaart`, with local images in `public/assets/spicerhaart`.

xUnlocked is available at `/projects/xunlocked`, linked from its homepage card and Case details button. Its seven sections include the company overview and customer review. React components are in `src/components/xunlocked`, with local assets in `public/assets/xunlocked`.

Service First Permits (Permio) is available at `/projects/permio`, linked from its homepage card and Case details button. Its eight sections include implementation obstacles and their resolutions. Components are in `src/components/permio`, with local assets in `public/assets/permio`.

Forethought is available at `/projects/forethought`, linked from its homepage card and Case details button. Its seven sections include the Chrome extension. Components are in `src/components/forethought`, with local assets in `public/assets/forethought`.

Keep is available at `/projects/keep`, linked from its homepage card and Case details button. Its six sections use components in `src/components/keep`, with local assets in `public/assets/keep`.

Silibrain is available at `/projects/silibrain`, with a homepage carousel card. Its seven sections include the customer review. Components are in `src/components/silibrain`, with local assets in `public/assets/silibrain`.
# My_Portfolio
# My_Portfolio
