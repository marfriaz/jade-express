// All of your spaces live here. To add one: drop its photos in public/images/<slug>/
// (01.jpg, 02.jpg, ... plus 01-sm.jpg, 02-sm.jpg small versions) and add an entry below.
//
// Each space page is built by one shared template (src/pages/Space.jsx) from these fields:
//   summary  one shared description used on the home page + spaces listing cards
//   intro    the (architecture-first) description at the top of the space's own page
//   specs    the details sheet. Only fields with a value are shown, always in the order of specFields below.
//   preview  photo numbers (1-based positions in `images`) for the curated preview gallery on the space
//            page, in order. 2, 3, 4, 6 or 7 numbers give a complete grid. Every photo stays reachable
//            through "view all photos".
//   related  slugs of up to three other spaces shown in "other spaces".

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
  9: "kitchen",
  ...range(10, 13, "main floor"),
  ...range(14, 15, "screening room"),
  16: "main floor",
  ...range(17, 18, "screening room"),
  ...range(19, 25, "main floor"),
  26: "kitchen",
  27: "main floor",
  ...range(28, 30, "entry"),
};

// The details sheet: master field order and labels. Spaces fill in `specs` using these keys.
export const specFields = [
  ["size", "size"],
  ["floor", "floor"],
  ["ceiling", "ceiling height"],
  ["layout", "layout"],
  ["access", "access"],
  ["amenities", "amenities"],
  ["restrooms", "restrooms"],
  ["climate", "climate control"],
  ["power", "power"],
  ["parking", "parking"],
  ["availability", "availability"],
];

export function specRowsOf(space) {
  return specFields
    .map(([key, label]) => ({ label, value: (space.specs?.[key] || "").trim() }))
    .filter((r) => r.value);
}

const allSpaces = [
  {
    slug: "the-loft",
    name: "the loft",
    featured: true,
    uses: ["workspace", "events"],
    sqft: "7,000",
    location: "arts district, Los Angeles",
    summary:
      "a private loft with its own entrance and freight elevator, exposed brick, timber beams, and original wood floors. connected open spaces, soundproof rooms, built-in projection, and a hidden room behind a bookshelf.",
    intro:
      "a second-floor loft with its own entrance and private freight elevator. exposed brick, timber beams, and original wood floors run through connected open areas, soundproof rooms, a screening room with a projection screen, and a hidden room behind a bookshelf.",
    specs: {
      size: "7,000 sq ft",
      floor: "second floor",
      layout:
        "connected open areas, soundproof rooms, a screening room, and a hidden room behind a bookshelf",
      access: "private entrance and private freight elevator",
      amenities:
        "kitchen area with refrigerator, island, and kegerator (no stovetop; keg not provided), projection screen (projector not provided), and lounge furniture",
      restrooms: "1 private restroom",
      climate: "heating and air conditioning",
      parking: "gated on-site parking available",
    },
    preview: [23, 16, 9, 8, 15, 3, 21],
    related: ["the-courtyard", "the-studio", "studio-1a"],
    popularFor: ["creative work", "productions", "gatherings"],
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
      "an expansive, gated outdoor courtyard framed by historic brick buildings and industrial architecture. its open layout offers ample room for large-scale installations, with the option to pair it with adjoining indoor spaces.",
    intro:
      "an expansive, gated outdoor courtyard framed by historic brick buildings and industrial architecture. the open layout leaves room for large-scale installations, and adjoining indoor spaces can be booked alongside it.",
    specs: {
      size: "15,000+ sq ft",
      layout: "open-air courtyard with a paved asphalt surface",
      access: "gated, street-level vehicle and loading access",
      amenities: "adjoining indoor spaces can be rented separately",
      restrooms: "available when booked with the studio; portable restrooms may be required",
      power: "available upon request; additional charges may apply for high-power-use productions and events",
      parking: "subject to rental configuration and availability",
      availability: "saturdays and sundays",
    },
    // positions in `images` below: 2 aerial, 3 deck + tables, 4 brick door, 8 open lot, 9 patio seating, 6 awning facade
    preview: [2, 3, 4, 8, 9, 6],
    related: ["the-studio", "the-loft", "studio-1a"],
    popularFor: ["outdoor events", "markets", "brand activations", "productions"],
    cover: 1,
    // Best 7 of the 17 courtyard photos (the rest are near-duplicates), keeping their original numbers.
    images: [
      // First: the courtyard hero shot (public/images/courtyard/court.jpg + court-sm.jpg).
      {
        src: "/images/courtyard/court.jpg",
        thumb: "/images/courtyard/court-sm.jpg",
        alt: "Open courtyard with a tall brick wall and gray industrial buildings under a blue sky",
        area: null,
      },
      // Second: aerial view (public/images/courtyard/court2.jpg + court2-sm.jpg).
      {
        src: "/images/courtyard/court2.jpg",
        thumb: "/images/courtyard/court2-sm.jpg",
        alt: "Aerial view of the courtyard and surrounding gray industrial buildings",
        area: null,
      },
      ...photos("courtyard", 17, "the courtyard").filter((_, i) =>
        [1, 2, 3, 5, 7, 9, 10].includes(i + 1)
      ),
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
      "an open industrial space with high ceilings, concrete floors, large windows, and natural light. a flexible floor plan with direct access to the outdoor courtyard.",
    intro:
      "an open industrial space with high ceilings, concrete floors, large windows, and natural light. the floor plan is flexible, and the studio opens directly onto the courtyard, which is booked separately.",
    specs: {
      size: "5,000 sq ft",
      floor: "ground floor",
      layout: "open floor plan",
      access:
        "street-level access, loading dock, and direct connection to the courtyard (booked separately)",
      restrooms: "available",
      climate: "heating and air conditioning",
      parking: "gated on-site parking available",
    },
    preview: [3, 4, 5, 8, 10, 11],
    related: ["the-courtyard", "the-loft", "studio-1a"],
    popularFor: ["creative work", "photo + video", "gatherings", "celebrations"],
    cover: 2,
    images: photos("the-studio", 11, "the studio", {
      ...range(1, 4, "studio"),
      5: "exterior",
      ...range(6, 8, "studio"),
      ...range(9, 10, "exterior"),
      11: "studio",
    }),
  },

  // Leasable studio and office suites. Specs follow the leasing brochure (LoopNet where it adds detail).
  // Rates are deliberately not published on the site.
  {
    slug: "studio-1a",
    name: "studio 1A",
    featured: false,
    uses: ["workspace", "events"],
    sqft: "2,700",
    location: "arts district, Los Angeles",
    summary:
      "a ground-floor studio with 18-foot ceilings, concrete floors, and direct access from the gated parking area. the layout includes four private offices, a conference room, a kitchen, and a private restroom.",
    intro:
      "a ground-floor studio with roughly 18-foot ceilings, concrete floors, and large windows that bring in natural light. it opens directly onto the gated parking area, with private offices and a conference room alongside the open workspace.",
    specs: {
      size: "2,700 sq ft",
      floor: "ground floor",
      ceiling: "approximately 18 ft",
      layout: "open workspace, 4 private offices, 1 conference room, and storage rooms",
      access: "direct access from the gated parking area",
      amenities: "kitchen and break area",
      restrooms: "private",
      climate: "heating and air conditioning",
      parking: "gated on-site parking available",
    },
    preview: [12, 5, 7, 16, 1, 9],
    related: ["the-studio", "studio-2g", "studio-2d"],
    popularFor: ["creative teams", "offices", "studios"],
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
    intro:
      "a ground-floor suite with street-facing windows, high ceilings, and refinished interiors, entered through the building's interior.",
    specs: {
      size: "1,100 sq ft",
      floor: "ground floor",
      restrooms: "shared",
      climate: "heating and air conditioning",
      parking: "gated on-site parking available",
    },
    preview: [1],
    related: ["studio-1a", "studio-2h", "studio-2d"],
    popularFor: ["boutique creative", "design", "consulting"],
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
      "a second-floor studio with exposed timber beams, large windows, and hardwood floors. the layout includes an open workspace, a private office, a conference room, a kitchenette, and dual entrances.",
    intro:
      "a second-floor studio with exposed timber beams, large windows, and hardwood floors, laid out as an open workspace with entrances at either end.",
    specs: {
      size: "2,400 sq ft",
      floor: "second floor",
      layout: "open workspace, 1 private office, and 1 conference room",
      access: "dual entrances and shared elevator",
      amenities: "kitchenette",
      restrooms: "shared",
      climate: "heating and air conditioning",
      parking: "gated on-site parking available",
    },
    preview: [6, 5, 1, 9, 4, 10],
    related: ["studio-2g", "studio-1a", "studio-2h"],
    popularFor: ["creative teams", "offices", "studios"],
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
      "a second-floor studio with exposed timber beams and large industrial windows. the layout includes multiple private offices, a conference room, a media room, open workspace, and a large kitchen and gathering area.",
    intro:
      "a second-floor studio with exposed timber beams, hardwood floors, and large industrial windows. a large suite that combines private offices, open workspace, and a kitchen and gathering area.",
    specs: {
      size: "4,800 sq ft",
      floor: "second floor",
      layout:
        "open workspace, 7 private offices, 1 large conference room, a media room, and utility and storage rooms",
      access: "shared elevator",
      amenities: "kitchen and gathering area",
      restrooms: "shared",
      climate: "heating and air conditioning",
      parking: "gated on-site parking available",
    },
    preview: [9, 10, 6, 8, 5, 3, 12],
    related: ["studio-2d", "studio-1a", "the-loft"],
    popularFor: ["growing teams", "creative offices", "studios"],
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
      "a second-floor studio with exposed timber beams and large windows. the layout includes an open workspace, a separate office, a kitchenette, and a private restroom.",
    intro:
      "a second-floor studio with exposed timber beams, hardwood floors, and large windows. a quiet, self-contained suite with its own restroom and kitchenette.",
    specs: {
      size: "1,100 sq ft",
      floor: "second floor",
      layout: "workspace with 1 private office",
      access: "shared elevator",
      amenities: "kitchenette",
      restrooms: "private",
      climate: "heating and air conditioning",
      parking: "gated on-site parking available",
    },
    preview: [1, 2],
    related: ["studio-2d", "studio-1a", "studio-2g"],
    popularFor: ["small teams", "studios", "independent practices"],
    cover: 1,
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
