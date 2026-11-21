// Gallery case studies. To add one: put resized photos in public/images/gallery/<slug>/
// as 01.jpg (1600px) + 01-sm.jpg (800px), then add an entry here.
// Each entry is [file number, alt text, collage size, crop focus (optional)].
// Sizes: "lg" = 2x2, "tall" = 1x2, "wide" = 2x1, "" = 1x1.
function photos(slug, list) {
  return list.map(([num, alt, span = "", pos]) => {
    const n = String(num).padStart(2, "0");
    return { src: `/images/gallery/${slug}/${n}.jpg`, thumb: `/images/gallery/${slug}/${n}-sm.jpg`, alt, span, pos };
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
      [1, "Crew and models on set in the bright, high-ceilinged Wilson Room", "lg"],
      [4, "Shoot underway in the courtyard beside the building", "tall"],
      [5, "Crew and model in the courtyard", "tall"],
      [2, "Photographer and crew working beside tall windows", "wide", "50% 78%"],
      [3, "Camera setup and styled shoot in the Wilson Room", "wide", "50% 88%"],
    ]),
  },
  {
    slug: "reposada",
    kind: "Dinner & live music",
    title: "Reposada",
    text: "Reposada, a dinner by Mando Fresco in collaboration with Patrón, recognizing Latin excellence. Long candlelit tables, live music and cocktails filled the Wilson Room.",
    spaces: [{ name: "Wilson Room" }],
    instagram: "https://www.instagram.com/p/DSqa678Eii7/",
    photos: photos("reposada", [
      [1, "Aerial view of the long dinner tables with a live trio performing", "lg"],
      [5, "The Reposada sign on a draped orange backdrop", "tall"],
      [2, "Guests raising a toast along the candlelit table", "wide", "50% 45%"],
      [3, "The host performing at the microphone", "", "50% 25%"],
      [6, "Smoking cocktails served in Patrón-labeled glasses"],
      [7, "Guests dancing after dinner"],
      [4, "A trio performing with guitars"],
    ]),
  },
];
