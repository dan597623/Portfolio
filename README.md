# Dan's portfolio

Personal portfolio built with the Next.js App Router and React Server Components. The existing responsive design, theme switcher, project carousels, and case studies are preserved.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. For a production build:

```sh
npm run build
npm start
```

## Structure

- `src/app`: server-rendered routes, metadata, root layout, shared template, and not-found page.
- `src/views`: project and contact page content.
- `src/components`: shared layout, portfolio sections, and case-study components.
- `src/styles`: existing global styles.
- `public`: publicly served images, fonts, and icons.

Routes include `/`, `/projects`, `/contact`, and ten `/projects/<slug>` case studies. Legacy portfolio URLs redirect to their current project routes.

Next.js generates `.next` during builds; `public` contains source assets, not a complete deployable application. Deploy using a Next.js-compatible host or run `npm start` after building. Vite and the old `dist` deployment workflow have been removed.

The contact form currently validates input and displays a preview response; it does not send email. LinkedIn and GitHub buttons await profile URLs.

## Verification

Run `npm run build`. With the production server on port 3100, run `node scripts/check-next-portfolio.mjs` to inspect all routes, local asset requests, and the homepage testimonial using Playwright and installed Microsoft Edge.

Internal page links use `next/link`, section navigation uses `next/navigation` without URL fragments, and hero images use `next/image`. Only interactive components use client boundaries.
