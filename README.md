# jade-express

React site for Wilson & Bay: home, spaces, one page per space, gallery, about, and a contact / inquiry form.

Built with Vite + React + React Router. No backend; it builds to plain static files.

## Run it

Needs Node 20 or newer (tested versions of the tooling: Vite 6, React 19).

```bash
npm install
npm run dev        # local site at http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

Note: this project was written without being able to install packages or run a build,
so the first `npm install && npm run dev` is its first real run. If something errors, that's the place to look.

## Where things live

| What | Where |
| --- | --- |
| Email, phone, Instagram, form endpoint, home page copy | `src/data/site.js` |
| All spaces (names, descriptions, facts, photos) | `src/data/spaces.js` |
| Photos | `public/images/<space>/01.jpg` (full) and `01-sm.jpg` (small) |
| Look and feel (colors, type, spacing) | `src/styles.css` (colors are variables at the top) |
| Pages | `src/pages/` |
| Reusable pieces (gallery, form, booking card) | `src/components/` |

## Spaces and photos

Each space in `src/data/spaces.js` points at a folder in `public/images/`. Photos are numbered
`01.jpg`, `02.jpg`, ... each with a small `01-sm.jpg` twin (800px wide) used in grids.
Anything you leave blank on a space (price, capacity, hours, power) is simply hidden on the page.

To add a space: add photos to `public/images/<slug>/`, then add an entry to `spaces.js`.

### Photos still needed

- **The Studio**: no photos were in the Jade Express folder. It uses a placeholder for now.
- Real names, sizes and descriptions for **Suite 2G** and **Units 3, 4 and 5** (the folder names were the only clue).
- Optional: a floor plan for the Loft.

## Inquiry form

Right now the form opens the visitor's email app addressed to the email in `site.js`.
To get proper submissions by email, make a free form at formspree.io (or similar) and paste its URL into
`formEndpoint` in `src/data/site.js`.

## Deploy

Netlify, Cloudflare Pages or Vercel all work:

- Build command: `npm run build`
- Output directory: `dist`

`public/_redirects` handles page refreshes on Netlify and Cloudflare Pages.
