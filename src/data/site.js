// Site-wide settings and copy. Edit this file; no other code changes needed.
const site = {
  name: "wilson & bay",
  email: "932wilson@gmail.com",
  phone: "",
  // Location (same address and map link as the previous site).
  address: "932 Wilson Street, Los Angeles, CA 90021",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=932+Wilson+Street,+Los+Angeles,+CA+90021",
  mapEmbed: "https://www.google.com/maps?q=932+Wilson+Street,+Los+Angeles,+CA+90021&output=embed",
  instagram: "https://www.instagram.com/wilsonbay.dtla", // full URL. Leave empty to hide the links.
  instagramHandle: "@wilsonbay.dtla",

  // The "from Instagram" grid on the home page. These are saved copies of photos from the
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
    eyebrow: "Los Angeles Arts District",
    title: "make room for\nsomething new",
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
      cta: "explore workspaces",
      to: "/workspaces",
      image: "/images/home/set-up-shop.jpg",
      alt: "Open studio with timber ceilings, glass partition walls and dark wood floors",
    },
    {
      title: "plan something.",
      text: "events, productions, or whatever you have in mind.",
      cta: "explore events & productions",
      to: "/events",
      image: "/images/home/plan-something.jpg",
      alt: "Friends gathered around a lounge area at an evening event",
    },
  ],

  whoWeAre:
    "wilson & bay is a creative campus at the corner of wilson & bay streets in downtown Los Angeles arts district. proudly family-owned and operated since 1995.",

  // Event photos for the gallery (public/images/events/NN.jpg + NN-sm.jpg).
  events: Array.from({ length: 29 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return {
      src: `/images/events/${n}.jpg`,
      thumb: `/images/events/${n}-sm.jpg`,
      alt: `Guests at an event in the loft, photo ${i + 1}`,
      space: "events",
    };
  }),

  life: {
    title: "life at wilson & bay",
    text: "workdays, shoots, markets, dinners, and everything in between.",
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
  // Space cards on both pages come from src/data/spaces.js (same approved descriptions everywhere);
  // `order` is the list of space slugs shown, in that order.
  workspacesPage: {
    title: "workspaces.",
    eyebrow: "Los Angeles Arts District",
    lead: "studios, offices, and creative spaces for businesses, teams, and independent practices.",
    // Opening photos: two suites with contrasting architecture (studio 2D and studio 1A).
    images: [
      { src: "/images/unit-3/06.jpg", alt: "Studio 2D with a long exposed timber ceiling and wood floors", pos: "50% 55%" },
      { src: "/images/unit-4/12.jpg", alt: "Studio 1A with tall windows, high ceilings and concrete floors", pos: "50% 55%" },
    ],
    highlights: [
      { title: "flexible leases", text: "short- and long-term options" },
      { title: "1,100–7,000 sq\u00a0ft", text: "varied layouts" },
      { title: "gated parking", text: "available on-site" },
      { title: "historic character", text: "high ceilings, original details" },
    ],
    order: ["studio-1a", "studio-2d", "studio-2g", "studio-2h", "the-loft", "the-studio"],
    note: "availability is subject to change. contact us for current leasing opportunities.",
    link: "schedule a tour",
    cta: {
      title: "come take a look.",
      text: "tell us what you're looking for and we'll help you find the right space.",
      button: "schedule a tour",
    },
  },

  eventsPage: {
    title: "events & productions.",
    eyebrow: "Los Angeles Arts District",
    lead: "indoor and outdoor spaces for events, photo and film productions, brand activations, and creative projects.",
    // A past Wilson & Bay event in the loft.
    image: { src: "/images/events/daytime-staged-loft.jpg", alt: "The loft staged in daylight, with exposed brick, timber beams, pendant lamps and lounge furniture", pos: "50% 50%" },
    link: "inquire about a rental",
    possibilities: [
      { label: "photo & film", src: "/images/gallery/free-people/02.jpg", alt: "A photo shoot with crew in the studio", pos: "50% 45%" },
      { label: "markets & brand activations", src: "/images/gallery/manic-pixie/01.jpg", alt: "A branded banner and vendor tents at a pop-up market under a steel gantry", pos: "50% 50%" },
      { label: "private events", src: "/images/events/private-events.jpg", alt: "Guests gathered around a food spread at an evening event in the loft", pos: "50% 55%" },
      { label: "music & cultural events", src: "/images/gallery/manic-pixie/02.jpg", alt: "A live musical performance on the loading dock in the courtyard", pos: "50% 50%" },
    ],
    order: ["the-loft", "the-courtyard", "the-studio", "studio-1a"],
    combo: {
      title: "indoor + outdoor.",
      text: "the studio opens directly onto the courtyard. both spaces can be booked together for a combined indoor and outdoor footprint of 20,000+ sq ft.",
      note: "spaces are booked separately and are subject to availability.",
      link: "inquire about combined rentals",
      image: { src: "/images/the-studio/04.jpg", alt: "The studio's open doors looking out onto the courtyard", pos: "50% 50%" },
    },
    cta: {
      title: "what do you have in mind?",
      text: "tell us about your project, preferred dates, and space requirements.",
      button: "inquire about a rental",
    },
  },

  leasing: {
    title: "flexible spaces for creative businesses, teams, and independent practices.",
    text: "from move-in-ready offices to larger studios with room to make your own.",
    facts: [
      { label: "leasing", text: "modified gross leases with negotiable terms. move in now." },
      { label: "spaces", text: "move-in-ready suites from 1,100 to 4,800 sq ft, with offices, conference rooms and kitchens." },
      { label: "parking", text: "gated on-site parking, 16 surface spaces, plus a freight elevator." },
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
