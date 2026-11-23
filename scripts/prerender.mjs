// Runs after `vite build`. Writes a static HTML file per route (with the page's own title,
// description, share preview, structured data, and the rendered page content) so search
// engines and link previews don't depend on JavaScript. Also writes sitemap.xml.
// If the page-content rendering step ever fails, it still writes the head-only versions
// so the deploy never breaks.
import { build } from "vite";
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";
import { ORIGIN, routes, seoFor, headHtml } from "../src/seo.js";

const dist = path.resolve("dist");
const ssrDir = path.resolve("dist-ssr");

let render = null;
try {
  await build({
    logLevel: "warn",
    build: { ssr: "src/entry-server.jsx", outDir: ssrDir, emptyOutDir: true },
  });
  ({ render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href));
} catch (err) {
  console.warn("prerender: could not render page content, writing head-only pages.\n", err);
}

const template = await readFile(path.join(dist, "index.html"), "utf8");
const stripped = template
  .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
  .replace(/<meta\s+name="description"[\s\S]*?\/>\s*/i, "");

async function page(route, { fallback = false } = {}) {
  const seo = seoFor(route);
  let body = "";
  if (render && !fallback) {
    try {
      body = render(route);
    } catch (err) {
      console.warn(`prerender: ${route} failed, using empty shell.`, err.message);
    }
  }
  return stripped
    .replace("</head>", `    ${headHtml(seo)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

for (const route of routes) {
  const file = route === "/" ? "index.html" : path.join(route.slice(1), "index.html");
  await mkdir(path.dirname(path.join(dist, file)), { recursive: true });
  await writeFile(path.join(dist, file), await page(route));
}

// Unknown URLs still get the app (and a noindex tag) through the existing rewrite.
await writeFile(path.join(dist, "404.html"), await page("/__not-found__"));

const today = new Date().toISOString().slice(0, 10);
const urls = routes
  .map((r) => `  <url><loc>${ORIGIN}${r === "/" ? "/" : r}</loc><lastmod>${today}</lastmod></url>`)
  .join("\n");
await writeFile(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);

await rm(ssrDir, { recursive: true, force: true });
console.log(`prerender: wrote ${routes.length} pages + sitemap.xml${render ? "" : " (head-only)"}`);
