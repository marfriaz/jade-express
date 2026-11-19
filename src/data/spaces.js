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
    images: photos("courtyard", 17, "The Courtyard"),
  },

  // PHOTOS NEEDED: no Studio photos were in the Jade Express folder, so this space uses a
  // placeholder image. Add photos to public/images/the-studio/ (01.jpg, 01-sm.jpg, ...),
  // then replace the `images` line with: photos("the-studio", <count>, "The Studio")
  // and delete the `placeholder: true` line.
  {
    slug: "the-studio",
    name: "The Studio",
    featured: true,
    placeholder: true,
    uses: ["workspace", "events"],
    sqft: "5,000",
    location: "Arts District, Los Angeles",
    summary:
      "5,000 sq ft of open, light-filled space with high ceilings and a flexible layout.",
    description: [
      "A blank canvas that can be transformed for creative work, photo and video productions, intimate gatherings, and celebrations.",
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
    cover: 1,
    images: [{ src: "/images/placeholder.svg", alt: "Photo coming soon", area: null }],
  },

  // The names and descriptions for the next four are placeholders. Rename them, add
  // square footage in `sqft` and `basics`, and write a real `summary` / `description`.
  {
    slug: "suite-2g",
    name: "Suite 2G",
    featured: false,
    uses: ["workspace"],
    sqft: "",
    location: "Arts District, Los Angeles",
    summary:
      "Light-filled studio space with glass partitions, tall windows, and a timber ceiling.",
    description: [],
    basics: [
      { label: "Size", value: "" },
      { label: "Capacity", value: "" },
      { label: "Parking", value: "Gated on-site parking available" },
    ],
    features: ["Glass partitions", "Tall windows", "Kitchenette"],
    included: [],
    popularFor: ["Studios", "Offices"],
    price: "",
    faq: [],
    cover: 10,
    images: photos("suite-2g", 15, "Suite 2G"),
  },
  {
    slug: "unit-3",
    name: "Unit 3",
    featured: false,
    uses: ["workspace"],
    sqft: "",
    location: "Arts District, Los Angeles",
    summary:
      "Open, move-in-ready space with wood floors, a timber ceiling, and a green kitchenette.",
    description: [],
    basics: [
      { label: "Size", value: "" },
      { label: "Capacity", value: "" },
      { label: "Parking", value: "Gated on-site parking available" },
    ],
    features: ["Wood floors", "Kitchenette", "Glass partitions"],
    included: [],
    popularFor: ["Offices", "Creative teams"],
    price: "",
    faq: [],
    cover: 7,
    images: photos("unit-3", 12, "Unit 3"),
  },
  {
    slug: "unit-4",
    name: "Unit 4",
    featured: false,
    uses: ["workspace"],
    sqft: "",
    location: "Arts District, Los Angeles",
    summary:
      "Raw industrial space with tall columns, big windows, and room to make your own.",
    description: [],
    basics: [
      { label: "Size", value: "" },
      { label: "Capacity", value: "" },
      { label: "Parking", value: "Gated on-site parking available" },
    ],
    features: ["Industrial floors", "Tall columns", "Raw space"],
    included: [],
    popularFor: ["Studios", "Workshops"],
    price: "",
    faq: [],
    cover: 8,
    images: photos("unit-4", 16, "Unit 4"),
  },
  {
    slug: "unit-5",
    name: "Unit 5",
    featured: false,
    uses: ["workspace"],
    sqft: "",
    location: "Arts District, Los Angeles",
    summary: "Bright, compact studio with tall windows and a timber ceiling.",
    description: [],
    basics: [
      { label: "Size", value: "" },
      { label: "Capacity", value: "" },
      { label: "Parking", value: "Gated on-site parking available" },
    ],
    features: ["Tall windows", "Tile floors"],
    included: [],
    popularFor: ["Studios", "Small teams"],
    price: "",
    faq: [],
    cover: 1,
    images: photos("unit-5", 2, "Unit 5"),
  },

];

export function getSpace(slug) {
  return spaces.find((s) => s.slug === slug);
}

export function coverOf(space) {
  return space.images[(space.cover || 1) - 1] || space.images[0];
}
