// Site-wide settings and copy. Edit this file; no other code changes needed.
const site = {
  name: "Wilson & Bay",
  email: "932wilson@gmail.com",
  phone: "",
  instagram: "https://www.instagram.com/wilsonbay.dtla", // full URL. Leave empty to hide the links.
  instagramHandle: "@wilsonbay.dtla",

  // The "From Instagram" grid on the home page. These are saved copies of photos from the
  // feed, so refresh them by dropping new images into public/images/instagram/.
  // `href` can be a link to the exact post (instagram.com/p/...); it falls back to the profile.
  instagramPosts: [
    { src: "/images/instagram/01.jpg", alt: "Photo shoot in the loft with natural light" },
    { src: "/images/instagram/02.jpg", alt: "Pop-up clothing market in the loft" },
    { src: "/images/instagram/03.jpg", alt: "Crowd browsing racks at a pop-up market" },
    { src: "/images/instagram/04.jpg", alt: "Brunch gathering with set tables" },
    { src: "/images/instagram/05.jpg", alt: "Couple in wedding attire in front of white drapes" },
    { src: "/images/instagram/06.jpg", alt: "Pink striped tent and pony rides in the courtyard" },
    { src: "/images/instagram/07.jpg", alt: "Pink balloon installation and tent in the courtyard" },
    { src: "/images/instagram/08.jpg", alt: "Blue-themed baby shower setup" },
    { src: "/images/instagram/09.jpg", alt: "Paint-and-sip event with easels" },
    { src: "/images/instagram/10.jpg", alt: "Blue balloon arch with neon sign" },
    { src: "/images/instagram/11.jpg", alt: "Guests mingling at an event", href: "https://www.instagram.com/p/DKfZOMwS0Yw/" },
    { src: "/images/instagram/12.jpg", alt: "DJ playing at an event" },
  ],

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
    // Photos shown in rows of equal height, like the Squarespace page. `ratio` is width / height.
    // `rows` lists photo numbers (1 = life-1.webp) left to right. Add a photo to a row, or start a new row.
    images: [
      { src: "/images/home/life-1.webp", alt: "Pop-up market in the courtyard", ratio: 1.5 },
      { src: "/images/home/life-2.webp", alt: "Event in the loft under timber beams", ratio: 0.75 },
      { src: "/images/home/life-3.webp", alt: "Guests gathered on couches at an evening event", ratio: 1.294 },
      { src: "/images/home/life-4.webp", alt: "Wedding portrait in front of white drapes", ratio: 1.5 },
      { src: "/images/home/life-5.webp", alt: "Sunlit loft with a photo shoot below", ratio: 0.75 },
      { src: "/images/home/life-6.webp", alt: "Long dinner tables seen from above", ratio: 0.75 },
    ],
    rows: [
      [5, 2, 1, 6],
      [3, 4],
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

};

export default site;
