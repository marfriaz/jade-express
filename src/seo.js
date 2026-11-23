// Behind-the-scenes search/share metadata. Nothing here appears on the page itself.
// Used by the build (scripts/prerender.mjs) and by the live site (Layout) so titles
// and share previews are right both for crawlers and when visitors navigate.
import site from "./data/site.js";
import { spaces, coverOf } from "./data/spaces.js";

export const ORIGIN = "https://wilsonandbay.com";
const BRAND = "Wilson & Bay";

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const titleCase = (s) =>
  s.replace(/\b[a-z]/g, (c) => c.toUpperCase()).replace(/\b(\d+)([a-z])\b/g, (_, n, l) => n + l.toUpperCase());
const sentences = (s) => s.replace(/(^|[.!?]\s+)([a-z])/g, (_, a, b) => a + b.toUpperCase());

function trim(text, max = 155) {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\-–]+$/, "") + "…";
}

const pages = {
  "/": {
    title: `${BRAND} | Creative Studios & Event Spaces in the Arts District, Los Angeles`,
    description:
      "A creative campus in the Arts District of Downtown Los Angeles. Studios, offices, and event spaces for rent.",
  },
  "/workspaces": {
    title: `Studios & Creative Offices for Lease, Arts District LA | ${BRAND}`,
    description:
      "Private studios and creative offices to lease on a family-owned campus in the Arts District of Downtown Los Angeles, from 1,100 to 15,000+ sq ft with gated parking.",
  },
  "/events": {
    title: `Event Venue & Production Space, Arts District LA | ${BRAND}`,
    description:
      "Rent a loft, courtyard, or studio for events, productions, pop-ups, and private dinners in the Arts District of Downtown Los Angeles.",
  },
  "/spaces": {
    title: `All Spaces | ${BRAND}`,
    description:
      "Browse every space at Wilson & Bay: the loft, courtyard, studio, and private studios for rent in the Arts District of Downtown Los Angeles.",
  },
  "/gallery": {
    title: `Gallery | ${BRAND}`,
    description:
      "Events, productions, and creative projects that have come to life at Wilson & Bay in the Arts District of Downtown Los Angeles.",
  },
  "/contact": {
    title: `Contact & Inquiries | ${BRAND}`,
    description: `Inquire about renting a space, scheduling a visit, or leasing a studio at Wilson & Bay, ${site.address}.`,
  },
};

export const routes = [...Object.keys(pages), ...spaces.map((s) => `/spaces/${s.slug}`)];

const orgId = `${ORIGIN}/#organization`;

function organization() {
  const [street, city, rest] = site.address.split(",").map((s) => s.trim());
  const [state, zip] = (rest || "").split(" ");
  return {
    "@type": ["LocalBusiness", "EventVenue"],
    "@id": orgId,
    name: BRAND,
    url: ORIGIN + "/",
    description: pages["/"].description,
    email: site.email,
    foundingDate: "1995",
    image: ORIGIN + coverOf(spaces[0]).src,
    address: {
      "@type": "PostalAddress",
      streetAddress: street,
      addressLocality: city,
      addressRegion: state,
      postalCode: zip,
      addressCountry: "US",
    },
    hasMap: site.mapUrl,
    sameAs: [site.instagram].filter(Boolean),
  };
}

function crumbs(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: ORIGIN + path,
    })),
  };
}

export function seoFor(pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  let title = pages[path]?.title;
  let description = pages[path]?.description;
  let image = ORIGIN + coverOf(spaces[0]).src;
  const graph = [];

  if (path === "/") {
    graph.push(organization(), {
      "@type": "WebSite",
      "@id": `${ORIGIN}/#website`,
      url: ORIGIN + "/",
      name: BRAND,
      publisher: { "@id": orgId },
    });
  } else if (path.startsWith("/spaces/")) {
    const space = spaces.find((s) => `/spaces/${s.slug}` === path);
    if (space) {
      const label = titleCase(space.name);
      title = `${label}${space.sqft ? `, ${space.sqft} sq ft` : ""} | Arts District LA | ${BRAND}`;
      description = trim(sentences(space.summary));
      image = ORIGIN + coverOf(space).src;
      graph.push(
        {
          "@type": "Place",
          "@id": `${ORIGIN}${path}#place`,
          name: label,
          description,
          url: ORIGIN + path,
          image,
          ...(space.sqft && {
            floorSize: {
              "@type": "QuantitativeValue",
              value: Number(space.sqft.replace(/[^\d]/g, "")),
              unitCode: "FTK",
            },
          }),
          containedInPlace: { "@id": orgId },
        },
        crumbs([["Home", "/"], ["Spaces", "/spaces"], [label, path]])
      );
    }
  } else if (pages[path]) {
    const name = path.slice(1).split("/")[0];
    graph.push(crumbs([["Home", "/"], [cap(name), path]]));
  }

  return {
    path,
    title: title || `Page not found | ${BRAND}`,
    description: description || pages["/"].description,
    canonical: ORIGIN + (path === "/" ? "/" : path),
    image,
    robots: title ? null : "noindex",
    jsonLd: graph.length ? { "@context": "https://schema.org", "@graph": graph } : null,
  };
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// Head tags as a string (build time).
export function headHtml(seo) {
  const m = (attr, k, v) => `<meta ${attr}="${k}" content="${esc(v)}" />`;
  return [
    `<title>${esc(seo.title)}</title>`,
    m("name", "description", seo.description),
    seo.robots && m("name", "robots", seo.robots),
    !seo.robots && `<link rel="canonical" href="${esc(seo.canonical)}" />`,
    m("property", "og:site_name", BRAND),
    m("property", "og:type", "website"),
    m("property", "og:title", seo.title),
    m("property", "og:description", seo.description),
    m("property", "og:url", seo.canonical),
    m("property", "og:image", seo.image),
    m("name", "twitter:card", "summary_large_image"),
    m("name", "twitter:title", seo.title),
    m("name", "twitter:description", seo.description),
    m("name", "twitter:image", seo.image),
    seo.jsonLd &&
      `<script type="application/ld+json" id="ld-json">${JSON.stringify(seo.jsonLd).replace(/</g, "\\u003c")}</script>`,
  ]
    .filter(Boolean)
    .join("\n    ");
}

// Same tags, applied to the live document when visitors navigate (client only).
export function applySeo(seo) {
  const d = document;
  d.title = seo.title;
  const set = (sel, make, attr, value) => {
    let el = d.head.querySelector(sel);
    if (value == null) {
      el?.remove();
      return;
    }
    if (!el) {
      el = make();
      d.head.appendChild(el);
    }
    el.setAttribute(attr, value);
  };
  const meta = (attr, k) => () => {
    const el = d.createElement("meta");
    el.setAttribute(attr, k);
    return el;
  };
  const metaSet = (attr, k, v) => set(`meta[${attr}="${k}"]`, meta(attr, k), "content", v);
  metaSet("name", "description", seo.description);
  metaSet("name", "robots", seo.robots);
  metaSet("property", "og:title", seo.title);
  metaSet("property", "og:description", seo.description);
  metaSet("property", "og:url", seo.canonical);
  metaSet("property", "og:image", seo.image);
  metaSet("name", "twitter:title", seo.title);
  metaSet("name", "twitter:description", seo.description);
  metaSet("name", "twitter:image", seo.image);
  set(
    'link[rel="canonical"]',
    () => {
      const el = d.createElement("link");
      el.setAttribute("rel", "canonical");
      return el;
    },
    "href",
    seo.robots ? null : seo.canonical
  );
  let ld = d.getElementById("ld-json");
  if (!seo.jsonLd) ld?.remove();
  else {
    if (!ld) {
      ld = d.createElement("script");
      ld.type = "application/ld+json";
      ld.id = "ld-json";
      d.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify(seo.jsonLd);
  }
}
