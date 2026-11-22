// Site-wide settings and copy. Edit this file; no other code changes needed.
const site = {
  name: "Wilson & Bay",
  email: "932wilson@gmail.com",
  phone: "",
  // Location (same address and map link as the previous site).
  address: "932 Wilson Street, Los Angeles, CA 90021",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=932+Wilson+Street,+Los+Angeles,+CA+90021",
  mapEmbed: "https://www.google.com/maps?q=932+Wilson+Street,+Los+Angeles,+CA+90021&output=embed",
  instagram: "https://www.instagram.com/wilsonbay.dtla", // full URL. Leave empty to hide the links.
  instagramHandle: "@wilsonbay.dtla",

  // The "From Instagram" grid on the home page. These are saved copies of photos from the
  // feed, so refresh them by dropping new images into public/images/instagram/.
  // `href` can be a link to the exact post (instagram.com/p/...); it falls back to the profile.
  // Which posts (by position in the list below) appear under the "life at wilson & bay" collage.
  instagramHome: [9, 10, 12],
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
    { title: "since 1995", text: "family-owned and operated" },
    { title: "arts district", text: "downtown los angeles" },
    { title: "1,100 to 15,000+ sq ft", text: "offices to lease, spaces to rent by the day" },
    { title: "gated parking", text: "on-site spaces" },
  ],


  paths: [
    {
      title: "set up shop.",
      text: "studios, offices, creative spaces to call your own.",
      cta: "Explore workspaces",
      to: "/workspaces",
      image: "/images/suite-2g/10-sm.jpg",
      alt: "Open studio with large windows and wood floors",
    },
    {
      title: "plan something.",
      text: "events, productions, or whatever you have in mind.",
      cta: "Explore events & productions",
      to: "/events",
      image: "/images/home/plan-something.jpg",
      alt: "Friends gathered around a lounge area at an evening event",
    },
  ],

  whoWeAre:
    "Wilson & Bay is a creative campus at the corner of Wilson & Bay Streets in Downtown Los Angeles Arts District. Proudly family-owned and operated since 1995.",

  // Event photos for the gallery (public/images/events/NN.jpg + NN-sm.jpg).
  events: Array.from({ length: 29 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return {
      src: `/images/events/${n}.jpg`,
      thumb: `/images/events/${n}-sm.jpg`,
      alt: `Guests at an event in the loft, photo ${i + 1}`,
      space: "Events",
    };
  }),

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
      { embed: "https://www.instagram.com/p/DdNO9eKjY00/", alt: "Instagram post from Wilson & Bay", ratio: 0.74, height: 440 },
    ],
    rows: [
      [5, 7, 1, 6],
      [2, 3, 4],
    ],
  },

  // Peerspace listing, linked from the Events & productions description on the Spaces page.
  peerspaceUrl: "https://www.peerspace.com/pages/listings/66281ae02de482ca77c71015",

  // Content for the Workspaces and Events & Productions pages.
  workspacesPage: {
    title: "workspaces.",
    lead: "Studios, offices, and creative suites to lease for your business, team, or independent practice. Move-in-ready, with room to make it your own.",
    image: "/images/suite-2g/10.jpg",
    alt: "Open studio with large windows and wood floors",
    details: [
      { label: "Leasing", text: "Longer-term leases (modified gross, with negotiable terms). Move in now." },
      { label: "Sizes", text: "Move-in-ready suites from 1,100 to 4,800 sq ft, with private offices, conference rooms and kitchens." },
      { label: "Building", text: "A historic industrial warehouse with exposed structure, 14 to 18 ft ceilings and an oversized freight elevator. Suited to office, showroom, production, design and media." },
      { label: "Parking", text: "Gated on-site parking, 16 surface spaces, plus a freight elevator." },
      { label: "Location", text: "The Arts District in Downtown Los Angeles, five minutes from Little Tokyo and close to the 10, 5, 101 and 110 freeways." },
    ],
    steps: [
      { title: "Book a visit", text: "Come see the suites in person. Tell us what you do and how much room you need." },
      { title: "Pick your space", text: "We'll walk you through what's available, from compact offices to large studios." },
      { title: "Talk terms", text: "We'll go over lease terms with you and answer any questions." },
    ],
    cta: { title: "Want to see a suite in person?", text: "Book a visit and we'll show you what's available." },
  },

  eventsPage: {
    title: "events & productions.",
    lead: "Rent a space by the day or hour for your event, shoot, or pop-up. Pick a space, tell us your plans, and we'll confirm availability.",
    image: "/images/home/plan-something.jpg",
    alt: "Friends gathered around a lounge area at an evening event",
    popularFor: [
      "Photo & video shoots",
      "Pop-up markets",
      "Weddings & receptions",
      "Birthdays & baby showers",
      "Workshops & paint-and-sips",
      "Parties & dance nights",
      "Brand activations",
    ],
    steps: [
      { title: "Choose a space", text: "The Loft, the Courtyard, or the Studio, indoors or out. Each has its own look and size." },
      { title: "Tell us your plans", text: "Share your date, guest count, and what you're putting together." },
      { title: "We confirm", text: "We'll check availability and get back to you with next steps." },
    ],
    cta: { title: "Have an event in mind?", text: "Tell us the date and what you're planning and we'll be in touch." },
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
