# Portfolio

A static site built with Astro. Everything renders to plain HTML, so it hosts free anywhere.

## Running it

You need Node 18 or newer. Check with `node -v`; if you do not have it, install it from nodejs.org or with `brew install node`.

```bash
npm install
npm run dev
```

That serves the site at http://localhost:4321 and reloads when you save a file.

`npm run build` writes the finished site to `dist/`. That folder is what you upload to a host.

## Where things live

| File | What it holds |
| --- | --- |
| `src/data/site.js` | Your name, email, links, and the intro and about text |
| `src/data/projects.js` | Every project. Add and edit entries here |
| `src/pages/index.astro` | The home page: hero, project grid, about |
| `src/pages/projects/[slug].astro` | One template that generates every project page |
| `src/components/ProjectCard.astro` | A single tile in the grid |
| `src/styles/global.css` | Colours, type scale, spacing. Change the tokens at the top |
| `public/` | Files served as-is: screenshots, rendered notebooks, favicon |

Adding a project means adding one object to `src/data/projects.js`. The grid tile and the detail page both appear on their own.

## Adding a screenshot

Put the image in `public/shots/`, then reference it in the project's `images` array as `/shots/filename.png`. Write real alt text; it is read by screen readers and by search engines.

Export Power BI visuals at a high resolution and crop out anything confidential before saving.

## Adding a Tableau dashboard

Publish to Tableau Public, copy the share link, and paste it into the project's `embed.url`. If the embed feels slow, drop it and use a screenshot that links out instead.

## Adding a notebook

Render it with Quarto to a self-contained html file, put that file in `public/notebooks/`, and link to it from the project's `links` array.

## Changing the look

Start with the tokens at the top of `global.css`. Changing `--accent` alone will shift the whole site. The site follows the system light or dark setting; both palettes are defined there.

## Deploying

Push to GitHub, then connect the repo to Netlify, Vercel, or Cloudflare Pages. All three build Astro sites with no configuration and cost nothing at this size. Set `site` in `astro.config.mjs` to the live url once you have it.
