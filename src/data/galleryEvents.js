// Gallery case studies. To add one: put resized photos in public/images/gallery/<slug>/
// as 01.jpg (1600px) + 01-sm.jpg (800px), then add an entry here.
//
// Each photo is [file number, alt text, ratio (width / height of how it's shown), crop focus (optional)].
// `rows` works like the "life at wilson & bay" collage on the home page: photo positions (1 = first
// photo in the list) left to right, one array per row. Photos in a row share the same height.
function photos(slug, list) {
  return list.map(([num, alt, ratio = 0.75, pos]) => {
    const n = String(num).padStart(2, "0");
    return { src: `/images/gallery/${slug}/${n}.jpg`, thumb: `/images/gallery/${slug}/${n}-sm.jpg`, alt, ratio, pos };
  });
}

export const galleryEvents = [
  {
    slug: "free-people",
    kind: "Brand photoshoot",
    title: "Free People",
    text: "A clothing-brand photoshoot for Free People, using the bright Wilson Room and the courtyard outside as backdrops.",
    spaces: [{ name: "Wilson Room" }, { name: "The Courtyard", to: "/spaces/the-courtyard" }],
    photos: photos("free-people", [
      [4, "Shoot underway in the courtyard beside the building"],
      [1, "Crew and models on set in the bright, high-ceilinged Wilson Room", 1.5, "50% 62%"],
      [5, "Crew and model in the courtyard"],
      [2, "Photographer and crew working beside tall windows", 1.5, "50% 78%"],
      [3, "Camera setup and styled shoot in the Wilson Room", 1.5, "50% 88%"],
    ]),
    rows: [
      [1, 2, 3],
      [4, 5],
    ],
  },
  {
    slug: "reposada",
    kind: "Dinner & live music",
    title: "Reposada",
    text: "Reposada, a dinner by Mando Fresco in collaboration with Patrón, recognizing Latin excellence. Long candlelit tables, live music and cocktails filled the Wilson Room.",
    spaces: [{ name: "Wilson Room" }],
    instagram: "https://www.instagram.com/p/DSqa678Eii7/",
    photos: photos("reposada", [
      [1, "Aerial view of the long dinner tables with a live trio performing", 0.85, "50% 55%"],
      [5, "The Reposada sign on a draped orange backdrop"],
      [3, "The host performing at the microphone"],
      [6, "Smoking cocktails served in Patrón-labeled glasses"],
      [2, "Guests raising a toast along the candlelit table", 0.85, "50% 45%"],
      [7, "Guests dancing after dinner"],
    ]),
    rows: [
      [1, 2, 3],
      [4, 5, 6],
    ],
  },
];
