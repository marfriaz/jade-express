// Site-wide settings and copy. Edit this file; no other code changes needed.
const site = {
  name: "Wilson & Bay",
  email: "932wilson@gmail.com",
  phone: "",
  instagram: "", // full URL, e.g. "https://www.instagram.com/yourhandle". Leave empty to hide.

  // Inquiry form. Paste a form endpoint here (for example a Formspree URL like
  // "https://formspree.io/f/xxxxxxx") and submissions are emailed to you.
  // While this is empty, the form opens the visitor's email app addressed to
  // the email above.
  formEndpoint: "",

  hero: {
    title: "make room for something new",
    text: "a place to work, make things, bring people together, or all of the above.",
  },

  facts: [
    { title: "Since 1985", text: "Family-owned and operated" },
    { title: "Arts District", text: "Downtown Los Angeles" },
    { title: "From 1,100 sq ft", text: "Move-in-ready offices and studios" },
    { title: "Gated parking", text: "16 on-site spaces" },
  ],

  paths: [
    {
      title: "set up shop.",
      text: "studios, offices, creative spaces to call your own.",
      cta: "Explore workspaces",
      to: "/spaces?use=workspace",
      image: "/images/suite-2g/10-sm.jpg",
      alt: "Open studio with large windows and wood floors",
    },
    {
      title: "plan something.",
      text: "events, productions, or whatever you have in mind.",
      cta: "Explore events & productions",
      to: "/spaces?use=events",
      image: "/images/courtyard/03.jpg",
      alt: "Gated courtyard framed by industrial buildings",
    },
  ],

  whoWeAre:
    "Wilson & Bay is a creative campus at the corner of Wilson & Bay Streets in Downtown Los Angeles Arts District. Proudly family-owned and operated since 1985.",

  life: {
    title: "life at wilson & bay",
    text: "Workdays, shoots, markets, dinners, and everything in between.",
    images: [
      { src: "/images/home/life-1.webp", alt: "Life at Wilson & Bay" },
      { src: "/images/home/life-2.webp", alt: "Life at Wilson & Bay" },
      { src: "/images/home/life-3.webp", alt: "Life at Wilson & Bay" },
      { src: "/images/home/life-4.webp", alt: "Life at Wilson & Bay" },
      { src: "/images/home/life-5.webp", alt: "Life at Wilson & Bay" },
      { src: "/images/home/life-6.webp", alt: "Life at Wilson & Bay" },
    ],
  },

  leasing: {
    title: "Flexible spaces for creative businesses, teams, and independent practices.",
    text: "From move-in-ready offices to larger studios with room to make your own.",
    facts: [
      { label: "Leasing", text: "Modified gross leases with negotiable terms. Move in now." },
      { label: "Spaces", text: "Move-in-ready suites from 1,100 to 4,800 sq ft, with offices, conference rooms and kitchens." },
      { label: "Parking", text: "Gated on-site parking, 16 surface spaces, plus a freight elevator." },
    ],
    images: [
      { src: "/images/suite-2g/01-sm.jpg", alt: "Studio 2G with glass partitions" },
      { src: "/images/unit-3/07-sm.jpg", alt: "Studio 2D with timber ceiling" },
      { src: "/images/unit-4/08-sm.jpg", alt: "Studio 1A with glass partitions and columns" },
      { src: "/images/unit-5/01-sm.jpg", alt: "Studio 2H with tall windows" },
    ],
  },

  about: [
    "Wilson & Bay is a creative campus where people work, make things, and bring people together.",
    "The historic building sits between the Arts District, Fashion District, Little Tokyo and the Central Industrial District, with high ceilings, exposed structural elements, an oversized freight elevator, controlled access and gated parking. Easy access to the 10, 5, 101 and 60 freeways, near Soho House, ROW DTLA and Warner Music Group.",
  ],
};

export default site;
