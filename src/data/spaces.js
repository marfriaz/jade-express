// All of your spaces live here. To add one: drop its photos in public/images/<slug>/
// (01.jpg, 02.jpg, ... plus 01-sm.jpg, 02-sm.jpg small versions) and add an entry below.
//
// Fields you leave out (empty strings, null or empty lists) simply don't show up on the page.

// Builds the photo list for a folder with `count` photos.
// `areas` optionally maps a photo number to a gallery tab name, like { 1: "Entry" }.
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
  ["01", "Pink balloon arches and striped tent at a birthday party in the courtyard"],
  ["04", "Balloon installation and pink backdrop at a birthday party in the courtyard"],
  ["05", "Birthday party tent and balloon arches set up in the courtyard"],
  ["02", "Vendor booths at a pop-up market in the courtyard"],
  ["06", "Vendors with plants and tables at a pop-up market in the courtyard"],
  ["07", "Vendor tables at a pop-up market in the courtyard"],
  ["03", "Shoppers browsing racks at a pop-up market in the courtyard"],
  ["08", "Live DJ performing at a pop-up market in the courtyard"],
  ["09", "Colorful vendor booth at a pop-up market in the courtyard"],
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
  ...range(1, 2, "Entry"),
  ...range(3, 5, "Soundproof rooms"),
  ...range(6, 7, "Main floor"),
  8: "Hidden room",
  9: "Kitchen + bar",
  ...range(10, 13, "Main floor"),
  ...range(14, 15, "Projection"),
  16: "Main floor",
  ...range(17, 18, "Projection"),
  ...range(19, 25, "Main floor"),
  26: "Kitchen + bar",
  27: "Main floor",
  ...range(28, 30, "Entry"),
};

export const spaces = [
  {
    slug: "the-loft",
    name: "The Loft",
    featured: true,
    uses: ["workspace", "events"],
    sqft: "7,000",
    location: "Arts District, Los Angeles",
    summary:
      "Exposed brick, timber beams, and original wood floors, with a private entrance, freight elevator, soundproof rooms, and a hidden space behind a bookshelf.",
    description: [
      "Spanning 7,000 sq ft on the second floor, the Loft unfolds across a series of expansive, connected spaces with exposed brick, timber beams, and original wood floors throughout. Smaller rooms are tucked within the layout, including soundproof rooms and a hidden room behind a bookshelf. With a private entrance, freight elevator, kitchen and bar area, and built-in projection, the Loft offers a versatile setting for creative work, productions, and gatherings.",
    ],
    basics: [
      { label: "Size", value: "7,000 sq ft" },
      { label: "Floor", value: "Second floor" },
      { label: "Capacity", value: "" }, // e.g. "150 standing"
      { label: "Hours", value: "" },
      { label: "Parking", value: "Gated on-site parking available" },
      { label: "Power", value: "" },
    ],
    features: [
      "Private entrance",
      "Freight elevator",
      "Kitchen + bar",
      "Soundproof rooms",
      "Built-in projection",
    ],
    included: [
      "Private entrance",
      "Freight elevator",
      "Kitchen and bar area",
      "Soundproof rooms",
      "Hidden room behind a bookshelf",
      "Built-in projection",
    ],
    popularFor: ["Creative work", "Productions", "Gatherings"],
    price: "", // e.g. "$150 / hr". Empty shows "Request a quote".
    faq: [
      {
        q: "How does load-in work?",
        a: "The Loft has a private entrance and a freight elevator to the second floor. Add truck access, load-in hours and dock details here.",
      },
    ],
    cover: 11,
    images: photos("loft", 30, "The Loft", loftAreas),
  },

  {
    slug: "the-courtyard",
    name: "The Courtyard",
    featured: true,
    uses: ["events"],
    sqft: "15,000+",
    location: "Arts District, Los Angeles",
    summary:
      "An expansive gated courtyard framed by historic brick walls and industrial architecture, with plenty of room to spread out and make it your own.",
    description: [
      "An expansive, 15,000+ sq ft gated courtyard framed by historic brick walls and industrial architecture. With plenty of room to spread out and make it your own, it's a flexible setting for outdoor events, markets, brand activations, and productions.",
    ],
    basics: [
      { label: "Size", value: "15,000+ sq ft" },
      { label: "Setting", value: "Gated courtyard" },
      { label: "Capacity", value: "" },
      { label: "Hours", value: "" },
      { label: "Parking", value: "Gated on-site parking available" },
      { label: "Power", value: "" },
    ],
    features: ["Gated", "Historic brick walls", "Industrial architecture"],
    included: ["Gated courtyard", "Room for outdoor events and markets"],
    popularFor: ["Outdoor events", "Markets", "Brand activations", "Productions"],
    price: "",
    faq: [],
    cover: 3,
    // Best 9 of the 17 courtyard photos (the rest are near-duplicates), keeping their original numbers.
    images: [
      ...photos("courtyard", 17, "The Courtyard").filter((_, i) =>
        [1, 2, 3, 5, 7, 9, 10, 12, 14].includes(i + 1)
      ),
      // Last: the best photo from each event (birthday party, April and June pop-up markets).
      ...[0, 3, 6].map((i) => courtyardEventPhotos[i]),
    ],
  },

  {
    slug: "the-studio",
    name: "The Studio",
    featured: true,
    uses: ["workspace", "events"],
    sqft: "5,000",
    location: "Arts District, Los Angeles",
    summary:
      "5,000 sq ft of open, light-filled space with high ceilings and a flexible layout.",
    description: [
      "5,000 sq ft of open, light-filled space with high ceilings and a flexible layout. A blank canvas that can be transformed for creative work, photo and video productions, intimate gatherings, and celebrations.",
    ],
    basics: [
      { label: "Size", value: "5,000 sq ft" },
      { label: "Capacity", value: "" },
      { label: "Hours", value: "" },
      { label: "Parking", value: "Gated on-site parking available" },
    ],
    features: ["High ceilings", "Flexible layout", "Natural light"],
    included: [],
    popularFor: ["Creative work", "Photo + video", "Gatherings", "Celebrations"],
    price: "",
    faq: [],
    cover: 2,
    images: photos("the-studio", 11, "The Studio", {
      ...range(1, 4, "Studio"),
      5: "Exterior",
      ...range(6, 8, "Studio"),
      ...range(9, 10, "Exterior"),
      11: "Studio",
    }),
  },

  // Leasable studio and office suites. Details come from the building's LoopNet listing.
  // Rates are the listed asking rates (modified gross, term negotiable); delete a
  // "Lease rate" line below if you would rather not publish it.
  {
    slug: "studio-1a",
    name: "Studio 1A",
    featured: false,
    uses: ["workspace"],
    sqft: "2,700",
    location: "Arts District, Los Angeles",
    summary:
      "A ground-floor, move-in-ready suite with 18-foot ceilings, private offices, a conference room, and direct access from the gated parking area.",
    description: [
      "Ground-floor creative office suite with direct access from the gated parking area, roughly 18-foot ceilings, abundant natural light, private restrooms, a conference room, a kitchen and break area, private offices, storage rooms, and open collaborative workspace. Move-in ready, with quality improvements throughout.",
    ],
    basics: [
      { label: "Size", value: "2,700 sq ft" },
      { label: "Floor", value: "Ground floor" },
      { label: "Ceilings", value: "About 18 ft" },
      { label: "Layout", value: "Mostly open floor plan" },
      { label: "Private offices", value: "4" },
      { label: "Conference rooms", value: "1" },
      { label: "Lease rate", value: "$30.00 / sq ft / yr, modified gross" },
      { label: "Parking", value: "Gated on-site parking available" },
    ],
    features: ["18-ft ceilings", "Direct gated parking access", "Private offices", "Conference room"],
    included: [
      "Private offices",
      "Conference room",
      "Kitchen and break area",
      "Private restrooms",
      "Storage rooms",
      "Air conditioning",
      "Exposed ceiling",
      "Recessed lighting",
      "Wi-Fi",
      "Plug and play",
    ],
    popularFor: ["Creative teams", "Offices", "Studios"],
    price: "",
    faq: [
      {
        q: "What are the lease terms?",
        a: "Terms are negotiable. The listed rate is modified gross, plus about $0.25 / sq ft / month in common area charges. The suite is available now.",
      },
    ],
    cover: 8,
    images: photos("unit-4", 16, "Studio 1A"),
  },
  // PHOTOS NEEDED: no photos yet for Studio 1D. Add them to public/images/studio-1d/ and
  // swap the `images` line for photos("studio-1d", <count>, "Studio 1D"), then delete `placeholder: true`.
  {
    slug: "studio-1d",
    name: "Studio 1D",
    featured: false,
    placeholder: true,
    uses: ["workspace"],
    sqft: "1,100",
    location: "Arts District, Los Angeles",
    summary:
      "A ground-floor suite with street-facing windows, high ceilings and updated interiors. Ideal for boutique creative, design, or consulting teams.",
    description: [
      "Ground-floor creative office suite featuring high ceilings, street-facing windows, updated interior improvements, and a flexible workspace configuration. Ideal for boutique creative, design, consulting, or professional office users.",
    ],
    basics: [
      { label: "Size", value: "1,100 sq ft" },
      { label: "Floor", value: "Ground floor" },
      { label: "Layout", value: "Mostly open floor plan" },
      { label: "Lease rate", value: "$33.00 / sq ft / yr, modified gross" },
      { label: "Parking", value: "Gated on-site parking available" },
    ],
    features: ["Street-facing windows", "High ceilings", "Green-screen capable"],
    included: [
      "Updated interior and flooring",
      "Hardwood floors",
      "Air conditioning",
      "Recessed lighting",
      "Wi-Fi",
      "Plug and play",
    ],
    popularFor: ["Boutique creative", "Design", "Consulting"],
    price: "",
    faq: [
      {
        q: "What are the lease terms?",
        a: "Terms are negotiable. The listed rate is modified gross, plus about $0.27 / sq ft / month in common area charges. The suite is available now.",
      },
    ],
    cover: 1,
    images: [{ src: "/images/placeholder.svg", alt: "Photo coming soon", area: null }],
  },
  {
    slug: "studio-2d",
    name: "Studio 2D",
    featured: false,
    uses: ["workspace"],
    sqft: "2,400",
    location: "Arts District, Los Angeles",
    summary:
      "Historic character with modern function: exposed timber, large windows, hardwood floors, a conference room, kitchenette, and dual entrances.",
    description: [
      "A creative office suite that blends historic character with modern functionality. It features exposed architectural elements, large windows, open workspace, a conference room, a private office, a kitchenette, HVAC, and dual entrances.",
    ],
    basics: [
      { label: "Size", value: "2,400 sq ft" },
      { label: "Layout", value: "Mostly open floor plan" },
      { label: "Lease rate", value: "$33.00 / sq ft / yr, modified gross" },
      { label: "Parking", value: "Gated on-site parking available" },
    ],
    features: ["Exposed timber ceiling", "Large windows", "Dual entrances", "Kitchenette"],
    included: [
      "Conference room",
      "Private office",
      "Kitchenette",
      "HVAC",
      "Hardwood floors",
      "Exposed ceiling",
      "Recessed lighting",
      "Wi-Fi",
      "Plug and play",
    ],
    popularFor: ["Creative teams", "Offices", "Studios"],
    price: "",
    faq: [
      {
        q: "What are the lease terms?",
        a: "Terms are negotiable. The listed rate is modified gross, plus about $0.27 / sq ft / month in common area charges. The suite is available now.",
      },
    ],
    cover: 7,
    images: photos("unit-3", 12, "Studio 2D"),
  },
  {
    slug: "studio-2g",
    name: "Studio 2G",
    featured: false,
    uses: ["workspace"],
    sqft: "4,800",
    location: "Arts District, Los Angeles",
    summary:
      "Our largest suite: seven private offices, a large conference room, collaborative workspace, and a kitchen and gathering area under a timber ceiling.",
    description: [
      "A creative office suite with multiple private offices, a creative office layout, a large conference room, collaborative workspace, a kitchen and gathering area, utility and storage space, modern lighting, and high-speed internet infrastructure. Well suited to growing teams seeking a move-in-ready creative office environment.",
    ],
    basics: [
      { label: "Size", value: "4,800 sq ft" },
      { label: "Layout", value: "Mostly open floor plan" },
      { label: "Private offices", value: "7" },
      { label: "Conference rooms", value: "1" },
      { label: "Lease rate", value: "$39.00 / sq ft / yr, modified gross" },
      { label: "Parking", value: "Gated on-site parking available" },
    ],
    features: ["7 private offices", "Large conference room", "Kitchen and gathering area", "High-speed internet ready"],
    included: [
      "Private offices",
      "Large conference room",
      "Collaborative workspace",
      "Kitchen and gathering area",
      "Utility and storage",
      "Air conditioning",
      "Hardwood floors",
      "Exposed ceiling",
      "Recessed lighting",
      "Wi-Fi",
      "Plug and play",
    ],
    popularFor: ["Growing teams", "Creative offices", "Studios"],
    price: "",
    faq: [
      {
        q: "What are the lease terms?",
        a: "Terms are negotiable. The listed rate is modified gross, plus about $0.32 / sq ft / month in common area charges. The suite is available now.",
      },
    ],
    cover: 10,
    images: photos("suite-2g", 15, "Studio 2G"),
  },
  {
    slug: "studio-2h",
    name: "Studio 2H",
    featured: false,
    uses: ["workspace"],
    sqft: "1,100",
    location: "Arts District, Los Angeles",
    summary:
      "A quiet, self-contained second-floor suite with tall windows, a timber ceiling, a private restroom, and a kitchenette.",
    description: [
      "A private second-floor office suite originally configured for owner occupancy. It features a private restroom, a kitchenette, efficient workspace separation, and a quiet, self-contained office environment.",
    ],
    basics: [
      { label: "Size", value: "1,100 sq ft" },
      { label: "Floor", value: "Second floor" },
      { label: "Layout", value: "Mostly open floor plan" },
      { label: "Private offices", value: "1" },
      { label: "Lease rate", value: "$36.00 / sq ft / yr, modified gross" },
      { label: "Parking", value: "Gated on-site parking available" },
    ],
    features: ["Private restroom", "Kitchenette", "Tall windows", "Quiet and self-contained"],
    included: [
      "Private restroom",
      "Kitchenette",
      "Air conditioning",
      "Exposed ceiling",
      "Hardwood floors",
      "Recessed lighting",
      "Wi-Fi",
    ],
    popularFor: ["Small teams", "Studios", "Independent practices"],
    price: "",
    faq: [
      {
        q: "What are the lease terms?",
        a: "Terms are negotiable. The listed rate is modified gross, plus about $0.30 / sq ft / month in common area charges. The suite is available now.",
      },
    ],
    cover: 1,
    images: photos("unit-5", 2, "Studio 2H"),
  },

];

export function getSpace(slug) {
  return spaces.find((s) => s.slug === slug);
}

export function coverOf(space) {
  return space.images[(space.cover || 1) - 1] || space.images[0];
}
