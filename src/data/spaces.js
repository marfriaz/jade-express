// All of your spaces live here. To add one: drop its photos in public/images/<slug>/
// (01.jpg, 02.jpg, ... plus 01-sm.jpg, 02-sm.jpg small versions) and add an entry below.
//
// Fields you leave out (empty strings, null or empty lists) simply don't show up on the page.

// Builds the photo list for a folder with `count` photos.
// `areas` optionally maps a photo number to a gallery tab name, like { 1: "entry" }.
function photos(slug, count, altBase, areas = {}) {
  return Array.from({ length: count }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return {
      src: `/images/${slug}/${n}.jpg`,
      thumb: `/images/${slug}/${n}-sm.jpg`,
      alt: `${altBase}, photo ${i + 1}`,
      area: areas[i + 1] || null,
    };
  });
}

// Event photos from the courtyard (public/images/courtyard-events/NN.jpg + NN-sm.jpg), grouped by event:
// birthday party (01, 04, 05), April pop-up market (02, 06, 07), June pop-up market (03, 08, 09).
export const courtyardEventPhotos = [
  ["01", "pink balloon arches and striped tent at a birthday party in the courtyard"],
  ["04", "balloon installation and pink backdrop at a birthday party in the courtyard"],
  ["05", "birthday party tent and balloon arches set up in the courtyard"],
  ["02", "vendor booths at a pop-up market in the courtyard"],
  ["06", "vendors with plants and tables at a pop-up market in the courtyard"],
  ["07", "vendor tables at a pop-up market in the courtyard"],
  ["03", "shoppers browsing racks at a pop-up market in the courtyard"],
  ["08", "live DJ performing at a pop-up market in the courtyard"],
  ["09", "colorful vendor booth at a pop-up market in the courtyard"],
].map(([n, alt]) => ({
  src: `/images/courtyard-events/${n}.jpg`,
  thumb: `/images/courtyard-events/${n}-sm.jpg`,
  alt,
}));

function range(from, to, value) {
  const out = {};
  for (let i = from; i <= to; i++) out[i] = value;
  return out;
}

const loftAreas = {
  ...range(1, 2, "entry"),
  ...range(3, 5, "soundproof rooms"),
  ...range(6, 7, "main floor"),
  8: "hidden room",
  9: "kitchen + bar",
  ...range(10, 13, "main floor"),
  ...range(14, 15, "projection"),
  16: "main floor",
  ...range(17, 18, "projection"),
  ...range(19, 25, "main floor"),
  26: "kitchen + bar",
  27: "main floor",
  ...range(28, 30, "entry"),
};

const allSpaces = [
  {
    slug: "the-loft",
    name: "the loft",
    featured: true,
    uses: ["workspace", "events"],
    sqft: "7,000",
    location: "arts district, Los Angeles",
    summary:
      "a private loft with its own entrance and freight elevator, featuring exposed brick, timber beams, and original wood floors. the space flows through several connected areas, with soundproof rooms and a hidden room behind a bookshelf.",
    description: [],
    basics: [
      { label: "size", value: "7,000 sq ft" },
      { label: "floor", value: "second floor" },
      { label: "capacity", value: "" }, // e.g. "150 standing"
      { label: "hours", value: "" },
      { label: "parking", value: "gated on-site parking available" },
      { label: "power", value: "" },
    ],
    features: [
      "private entrance",
      "freight elevator",
      "kitchen + bar",
      "soundproof rooms",
      "built-in projection",
    ],
    included: [
      "private entrance",
      "freight elevator",
      "kitchen and bar area",
      "soundproof rooms",
      "hidden room behind a bookshelf",
      "built-in projection",
    ],
    details: [
      { label: "size", value: "7,000 sq ft" },
      { label: "floor", value: "second floor" },
      { label: "access", value: "private entrance, freight elevator" },
      { label: "facilities", value: "kitchen" },
      { label: "features", value: "soundproof rooms, hidden room behind a bookshelf" },
      { label: "parking", value: "on-site parking available" },
    ],
    popularFor: ["creative work", "productions", "gatherings"],
    price: "", // e.g. "$150 / hr". Empty shows "request a quote".
    faq: [
      {
        q: "how does load-in work?",
        a: "the loft has a private entrance and a freight elevator to the second floor. add truck access, load-in hours and dock details here.",
      },
    ],
    cover: 11,
    images: photos("loft", 30, "the loft", loftAreas),
  },

  {
    slug: "the-courtyard",
    name: "the courtyard",
    featured: true,
    uses: ["events"],
    sqft: "15,000+",
    location: "arts district, Los Angeles",
    summary:
      "a gated outdoor courtyard surrounded by brick buildings and industrial architecture, with an open layout for markets, brand activations, productions, and gatherings.",
    description: [],
    basics: [
      { label: "size", value: "15,000+ sq ft" },
      { label: "setting", value: "gated courtyard" },
      { label: "capacity", value: "" },
      { label: "hours", value: "" },
      { label: "parking", value: "gated on-site parking available" },
      { label: "power", value: "" },
    ],
    features: ["gated", "historic brick walls", "industrial architecture"],
    included: ["gated courtyard", "room for outdoor events and markets"],
    popularFor: ["outdoor events", "markets", "brand activations", "productions"],
    price: "",
    faq: [],
    cover: 1,
    // Best 9 of the 17 courtyard photos (the rest are near-duplicates), keeping their original numbers.
    images: [
      // First: the courtyard hero shot (public/images/courtyard/court.jpg + court-sm.jpg).
      {
        src: "/images/courtyard/court.jpg",
        thumb: "/images/courtyard/court-sm.jpg",
        alt: "Open courtyard with a tall brick wall and gray industrial buildings under a blue sky",
        area: null,
      },
      ...photos("courtyard", 17, "the courtyard").filter((_, i) =>
        [1, 2, 3, 5, 7, 9, 10, 12, 14].includes(i + 1)
      ),
      // Last: the best photo from each event (birthday party, April and June pop-up markets).
      ...[0, 3, 6].map((i) => courtyardEventPhotos[i]),
    ],
  },

  {
    slug: "the-studio",
    name: "the studio",
    featured: true,
    uses: ["workspace", "events"],
    sqft: "5,000",
    location: "arts district, Los Angeles",
    summary:
      "an open industrial space with high ceilings, concrete floors, and natural light. its flexible floor plan can accommodate creative work, productions, and gatherings.",
    description: [],
    basics: [
      { label: "size", value: "5,000 sq ft" },
      { label: "capacity", value: "" },
      { label: "hours", value: "" },
      { label: "parking", value: "gated on-site parking available" },
    ],
    features: ["high ceilings", "flexible layout", "natural light"],
    included: [],
    popularFor: ["creative work", "photo + video", "gatherings", "celebrations"],
    price: "",
    faq: [],
    cover: 2,
    images: photos("the-studio", 11, "the studio", {
      ...range(1, 4, "studio"),
      5: "exterior",
      ...range(6, 8, "studio"),
      ...range(9, 10, "exterior"),
      11: "studio",
    }),
  },

  // Leasable studio and office suites. Details come from the building's LoopNet listing.
  // Rates are the listed asking rates (modified gross, term negotiable); delete a
  // "lease rate" line below if you would rather not publish it.
  {
    slug: "studio-1a",
    name: "studio 1A",
    featured: false,
    uses: ["workspace"],
    sqft: "2,700",
    location: "arts district, Los Angeles",
    summary:
      "a ground-floor studio with 18-foot ceilings, concrete floors, and glass-enclosed rooms. the open layout offers flexibility for creative teams, offices, and production work.",
    description: [],
    basics: [
      { label: "size", value: "2,700 sq ft" },
      { label: "floor", value: "ground floor" },
      { label: "ceilings", value: "about 18 ft" },
      { label: "layout", value: "mostly open floor plan" },
      { label: "private offices", value: "4" },
      { label: "conference rooms", value: "1" },
      { label: "lease rate", value: "$30.00 / sq ft / yr, modified gross" },
      { label: "parking", value: "gated on-site parking available" },
      { label: "restrooms", value: "private" },
    ],
    features: ["18-ft ceilings", "direct gated parking access", "private offices", "conference room"],
    included: [
      "private offices",
      "conference room",
      "kitchen and break area",
      "private restrooms",
      "storage rooms",
      "air conditioning",
      "exposed ceiling",
      "recessed lighting",
      "wi-fi",
      "plug and play",
    ],
    popularFor: ["creative teams", "offices", "studios"],
    price: "",
    faq: [
      {
        q: "what are the lease terms?",
        a: "terms are negotiable. the listed rate is modified gross, plus about $0.25 / sq ft / month in common area charges. the suite is available now.",
      },
    ],
    cover: 8,
    images: photos("unit-4", 16, "studio 1A"),
  },
  // PHOTOS NEEDED: no photos yet for Studio 1D. Add them to public/images/studio-1d/ and
  // swap the `images` line for photos("studio-1d", <count>, "studio 1D"), then delete `placeholder: true`.
  {
    slug: "studio-1d",
    name: "studio 1D",
    featured: false,
    leased: true, // leased; hidden from the site until it's available again
    placeholder: true,
    uses: ["workspace"],
    sqft: "1,100",
    location: "arts district, Los Angeles",
    summary:
      "a ground-floor suite with street-facing windows, high ceilings and updated interiors. ideal for boutique creative, design, or consulting teams.",
    description: [
      "ground-floor creative office suite featuring high ceilings, street-facing windows, updated interior improvements, and a flexible workspace configuration. ideal for boutique creative, design, consulting, or professional office users.",
    ],
    basics: [
      { label: "size", value: "1,100 sq ft" },
      { label: "floor", value: "ground floor" },
      { label: "layout", value: "mostly open floor plan" },
      { label: "lease rate", value: "$33.00 / sq ft / yr, modified gross" },
      { label: "parking", value: "gated on-site parking available" },
      { label: "restrooms", value: "shared" },
    ],
    features: ["street-facing windows", "high ceilings", "green-screen capable"],
    included: [
      "updated interior and flooring",
      "hardwood floors",
      "air conditioning",
      "recessed lighting",
      "wi-fi",
      "plug and play",
    ],
    popularFor: ["boutique creative", "design", "consulting"],
    price: "",
    faq: [
      {
        q: "what are the lease terms?",
        a: "terms are negotiable. the listed rate is modified gross, plus about $0.27 / sq ft / month in common area charges. the suite is available now.",
      },
    ],
    cover: 1,
    images: [{ src: "/images/placeholder.svg", alt: "Photo coming soon", area: null }],
  },
  {
    slug: "studio-2d",
    name: "studio 2D",
    featured: false,
    uses: ["workspace"],
    sqft: "2,400",
    location: "arts district, Los Angeles",
    summary:
      "exposed timber ceilings, large windows, hardwood floors, and a mix of open workspace and enclosed rooms. a flexible layout for creative offices and studios.",
    description: [],
    basics: [
      { label: "size", value: "2,400 sq ft" },
      { label: "floor", value: "second floor" },
      { label: "layout", value: "mostly open floor plan" },
      { label: "lease rate", value: "$33.00 / sq ft / yr, modified gross" },
      { label: "parking", value: "gated on-site parking available" },
      { label: "restrooms", value: "shared" },
    ],
    features: ["exposed timber ceiling", "large windows", "dual entrances", "kitchenette"],
    included: [
      "conference room",
      "private office",
      "kitchenette",
      "HVAC",
      "hardwood floors",
      "exposed ceiling",
      "recessed lighting",
      "wi-fi",
      "plug and play",
    ],
    popularFor: ["creative teams", "offices", "studios"],
    price: "",
    faq: [
      {
        q: "what are the lease terms?",
        a: "terms are negotiable. the listed rate is modified gross, plus about $0.27 / sq ft / month in common area charges. the suite is available now.",
      },
    ],
    cover: 7,
    images: photos("unit-3", 12, "studio 2D"),
  },
  {
    slug: "studio-2g",
    name: "studio 2G",
    featured: false,
    uses: ["workspace"],
    sqft: "4,800",
    location: "arts district, Los Angeles",
    summary:
      "seven private offices, a large conference room, collaborative workspace, and a kitchenette, with exposed timber ceilings and large industrial windows.",
    description: [],
    basics: [
      { label: "size", value: "4,800 sq ft" },
      { label: "floor", value: "second floor" },
      { label: "layout", value: "mostly open floor plan" },
      { label: "private offices", value: "7" },
      { label: "conference rooms", value: "1" },
      { label: "lease rate", value: "$39.00 / sq ft / yr, modified gross" },
      { label: "parking", value: "gated on-site parking available" },
      { label: "restrooms", value: "shared" },
    ],
    features: ["7 private offices", "large conference room", "kitchen and gathering area", "high-speed internet ready"],
    included: [
      "private offices",
      "large conference room",
      "collaborative workspace",
      "kitchen and gathering area",
      "utility and storage",
      "air conditioning",
      "hardwood floors",
      "exposed ceiling",
      "recessed lighting",
      "wi-fi",
      "plug and play",
    ],
    popularFor: ["growing teams", "creative offices", "studios"],
    price: "",
    faq: [
      {
        q: "what are the lease terms?",
        a: "terms are negotiable. the listed rate is modified gross, plus about $0.32 / sq ft / month in common area charges. the suite is available now.",
      },
    ],
    cover: 7,
    images: photos("suite-2g", 15, "studio 2G"),
  },
  {
    slug: "studio-2h",
    name: "studio 2H",
    featured: false,
    uses: ["workspace"],
    sqft: "1,100",
    location: "arts district, Los Angeles",
    summary:
      "a second-floor studio with tall windows, timber ceilings, a private restroom, and a kitchenette. suited for a small team or independent business.",
    description: [],
    basics: [
      { label: "size", value: "1,100 sq ft" },
      { label: "floor", value: "second floor" },
      { label: "layout", value: "mostly open floor plan" },
      { label: "private offices", value: "1" },
      { label: "lease rate", value: "$36.00 / sq ft / yr, modified gross" },
      { label: "parking", value: "gated on-site parking available" },
      { label: "restrooms", value: "private" },
    ],
    features: ["private restroom", "kitchenette", "tall windows", "quiet and self-contained"],
    included: [
      "private restroom",
      "kitchenette",
      "air conditioning",
      "exposed ceiling",
      "hardwood floors",
      "recessed lighting",
      "wi-fi",
    ],
    popularFor: ["small teams", "studios", "independent practices"],
    price: "",
    faq: [
      {
        q: "what are the lease terms?",
        a: "terms are negotiable. the listed rate is modified gross, plus about $0.30 / sq ft / month in common area charges. the suite is available now.",
      },
    ],
    cover: 2,
    images: photos("unit-5", 2, "studio 2H"),
  },

];

// Leased spaces stay in the data above (flag them `leased: true`) but are left off the site.
export const spaces = allSpaces.filter((s) => !s.leased);

export function getSpace(slug) {
  return spaces.find((s) => s.slug === slug);
}

export function coverOf(space) {
  return space.images[(space.cover || 1) - 1] || space.images[0];
}
