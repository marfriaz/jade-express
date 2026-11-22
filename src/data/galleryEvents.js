// Gallery case studies. To add one: put resized photos in public/images/gallery/<slug>/
// as 01.jpg (1600px) + 01-sm.jpg (800px), then add an entry here.
//
// Each photo is [file number, alt text, ratio (width / height of how it's shown), crop focus (optional)].
// `rows` works like the "life at wilson & bay" collage on the home page: photo positions (1 = first
// photo in the list) left to right, one array per row. Photos in a row share the same height.
// A fifth value of "full" makes that photo take a full row on phones (otherwise portrait photos pair up).
// A sixth value sets the order on phones only (order within the same row; default 0, or 1 for full-row photos).
// Instead of a file number you can pass { video, poster } for a muted, looping video tile.
function photos(slug, list) {
  return list.map(([num, alt, ratio = 0.75, pos, mobile, mobileOrder]) => {
    if (typeof num === "object") return { ...num, alt, ratio, pos, mobile, mobileOrder };
    const n = String(num).padStart(2, "0");
    return { src: `/images/gallery/${slug}/${n}.jpg`, thumb: `/images/gallery/${slug}/${n}-sm.jpg`, alt, ratio, pos, mobile, mobileOrder };
  });
}

export const galleryEvents = [
  {
    slug: "atras",
    kind: "EVENT",
    title: "atrás",
    text: "an intimate gathering in the loft, bringing together music, drinks and a community of creatives for an evening of connection and celebration.",
    photos: photos("atras", [
      [1, "Guests lounging on couches and chairs under warm light in the Loft", 1.3, undefined, "full", 1],
      [2, "Two friends talking on a green velvet sofa in front of exposed brick", 1.25, undefined, "full", 3],
      [3, "Friends posing at a photo booth against exposed brick", 0.8, undefined, undefined, 2],
      [4, "Florals, cake and cupcakes on a candlelit dessert table", 1.25, undefined, "full"],
      [5, "Guests mingling on the wood floor under pendant lights"],
      [6, "The warmly lit brick wall of the Loft with a film screening", 1.5, undefined, "full"],
    ]),
    rows: [
      [1, 2, 3],
      [4, 5, 6],
    ],
  },
  {
    slug: "reposada",
    kind: "PRIVATE DINNER",
    title: "reposada by mando fresko",
    text: "a dinner experience hosted by Mando Fresko in collaboration with Patrón, celebrating Latin excellence through food, live music, and cocktails.",
    instagram: "https://www.instagram.com/p/DSqa678Eii7/",
    photos: photos("reposada", [
      [1, "Aerial view of the long dinner tables with a live trio performing", 0.85, "50% 55%", "full"],
      [2, "A bartender shaking a cocktail behind the bar"],
      [3, "The host performing at the microphone", 0.75, undefined, undefined, -1],
      [4, "A trio performing with guitars on stage"],
      [5, "Guests raising a toast along the candlelit table", 0.85, "50% 45%", "full"],
      [6, "Guests dancing at the dinner"],
    ]),
    rows: [
      [1, 2, 3],
      [4, 5, 6],
    ],
  },
  {
    slug: "manic-pixie-dream-market",
    kind: "POP-UP MARKET",
    title: "manic pixie pop up market",
    text: "an outdoor pop-up market bringing together independent vendors, local creatives and shoppers into the courtyard.",
    // A vertical video sits to the right of the collage, like Free People.
    sideVideo: {
      src: "/videos/gallery/manic-pixie/feature.mp4",
      poster: "/videos/gallery/manic-pixie/feature.jpg",
      alt: "Shoppers and vendors at the Manic Pixie Dream Market in the courtyard",
    },
    // On phones the rows are flattened so a photo can swap places with one from another row.
    mobileFlat: true,
    photos: photos("manic-pixie", [
      [1, "The Manic Pixie Dream Market banner beside pink vendor tents", 1.15, undefined, "full", 1],
      [2, "A DJ playing on the loading dock above the market", 1.15, undefined, "full", 3],
      [3, "Racks of vintage clothing and shoes along the courtyard aisle", 1.15, undefined, "full", 2],
      [4, "Shoppers browsing vendor tents lining the courtyard", 1.15, undefined, "full", 4],
    ]),
    rows: [
      [1, 2],
      [3, 4],
    ],
  },
  {
    slug: "free-people",
    kind: "PHOTO PRODUCTION",
    title: "free people",
    text: "a fashion photoshoot for free people, using multiple spaces throughout the property as the backdrop for the brand's creative production.",
    // A vertical video sits to the right of the collage, like the Instagram post on Reposada.
    sideVideo: {
      src: "/videos/gallery/free-people/feature.mp4",
      poster: "/videos/gallery/free-people/feature.jpg",
      alt: "Behind the scenes on the Free People set in the Wilson Room",
    },
    photos: photos("free-people", [
      [1, "Model walking in a navy and lime Free People set against a blue-grey wall", 0.667],
      [2, "Photographer and crew working beside tall windows", 1.6, "50% 78%", "full"],
      [3, "Crew and model in the courtyard", 0.9],
      [4, "Model in a black top and grey pants leaning on a dark column", 0.9, "50% 30%"],
    ]),
    rows: [
      [1, 2],
      [3, 4],
    ],
  },
];
