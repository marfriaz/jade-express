// Gallery case studies. To add one: put resized photos in public/images/gallery/<slug>/
// as 01.jpg (1600px) + 01-sm.jpg (800px), then add an entry here.
//
// Each photo is [file number, alt text, ratio (width / height of how it's shown), crop focus (optional)].
// `rows` works like the "life at wilson & bay" collage on the home page: photo positions (1 = first
// photo in the list) left to right, one array per row. Photos in a row share the same height.
// A fifth value of "full" makes that photo take a full row on phones (otherwise portrait photos pair up).
// Instead of a file number you can pass { video, poster } for a muted, looping video tile.
function photos(slug, list) {
  return list.map(([num, alt, ratio = 0.75, pos, mobile]) => {
    if (typeof num === "object") return { ...num, alt, ratio, pos, mobile };
    const n = String(num).padStart(2, "0");
    return { src: `/images/gallery/${slug}/${n}.jpg`, thumb: `/images/gallery/${slug}/${n}-sm.jpg`, alt, ratio, pos, mobile };
  });
}

export const galleryEvents = [
  {
    slug: "free-people",
    kind: "Brand photoshoot",
    title: "Free People",
    text: "A clothing-brand photoshoot for Free People, using the bright Wilson Room and the courtyard outside as backdrops.",
    // A vertical video sits to the right of the collage, like the Instagram post on Reposada.
    sideVideo: {
      src: "/videos/gallery/free-people/feature.mp4",
      poster: "/videos/gallery/free-people/feature.jpg",
      alt: "Behind the scenes on the Free People set in the Wilson Room",
    },
    photos: photos("free-people", [
      [1, "Crew and models on set in the bright, high-ceilinged Wilson Room", 1.6, "50% 62%", "full"],
      [2, "Photographer and crew working beside tall windows", 1.6, "50% 78%", "full"],
      [3, "Crew and model in the courtyard", 0.9],
      [
        { video: "/videos/gallery/free-people/tile.mp4", poster: "/videos/gallery/free-people/tile.jpg" },
        "Crew setting up lights in the Wilson Room",
        0.9,
      ],
    ]),
    rows: [
      [1, 2],
      [3, 4],
    ],
  },
  {
    slug: "reposada",
    kind: "Dinner & live music",
    title: "Reposada",
    text: "Reposada, a dinner by Mando Fresco in collaboration with Patrón, recognizing Latin excellence. Long candlelit tables, live music and cocktails filled the Wilson Room.",
    instagram: "https://www.instagram.com/p/DSqa678Eii7/",
    photos: photos("reposada", [
      [1, "Aerial view of the long dinner tables with a live trio performing", 0.85, "50% 55%", "full"],
      [5, "The Reposada sign on a draped orange backdrop"],
      [3, "The host performing at the microphone"],
      [6, "Smoking cocktails served in Patrón-labeled glasses"],
      [2, "Guests raising a toast along the candlelit table", 0.85, "50% 45%", "full"],
      [7, "Guests dancing after dinner"],
    ]),
    rows: [
      [1, 2, 3],
      [4, 5, 6],
    ],
  },
];
