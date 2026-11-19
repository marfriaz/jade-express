              {img.space && (filter === "All" || img.space !== img.group) && (
                <span className="tile__tag">{img.space}</span>
              )}
import { useMemo, useState } from "react";
import site from "../data/site.js";
import { spaces } from "../data/spaces.js";
import Lightbox from "../components/Lightbox.jsx";

const isSuite = (s) => /^Studio \d/.test(s.name);

// Every photo from every space, tagged with its group so the tabs can filter.
function spacePhotos(group, list) {
  return list
    .filter((s) => !s.placeholder)
    .flatMap((s) => s.images.map((img) => ({ ...img, space: s.name, group })));
}

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);

  const groups = useMemo(() => {
    const events = [
      ...site.life.images.map((i) => ({ ...i, space: "Events" })),
      ...site.events,
    ].map((i) => ({ ...i, group: "Events" }));
    const by = (slug) => spaces.filter((s) => s.slug === slug);
    return [
      ["Events", events],
      ["The Loft", spacePhotos("The Loft", by("the-loft"))],
      ["The Courtyard", spacePhotos("The Courtyard", by("the-courtyard"))],
      ["The Studio", spacePhotos("The Studio", by("the-studio"))],
      ["Suites", spacePhotos("Suites", spaces.filter(isSuite))],
    ].filter(([, list]) => list.length > 0);
  }, []);

  const shown = useMemo(() => {
    if (filter !== "All") return groups.find(([name]) => name === filter)?.[1] ?? [];
    // "All" mixes events first, then each space, so the page opens on people, not empty rooms.
    return groups.flatMap(([, list]) => list);
  }, [groups, filter]);

  return (
    <section className="section section--page">
      <div className="container stack stack--xl">
        <div className="stack">
          <h1 className="h1">gallery.</h1>
          <p className="lead muted">{site.life.text}</p>
        </div>
        <div className="tabs" role="tablist" aria-label="Filter photos">
          {["All", ...groups.map(([name]) => name)].map((name) => (
            <button
              key={name}
              type="button"
              role="tab"
              aria-selected={filter === name}
              className={`tab${filter === name ? " tab--on" : ""}`}
              onClick={() => {
                setFilter(name);
                setActive(null);
              }}
            >
              {name}
            </button>
          ))}
        </div>
        <div className="mosaic mosaic--page">
          {shown.map((img, i) => (
            <button
              key={img.src}
              type="button"
              className="tile"
              aria-label={`Open photo ${i + 1} of ${shown.length}`}
              onClick={() => setActive(i)}
            >
              <img src={img.thumb || img.src} alt={img.alt} loading="lazy" />
              {img.space && filter === "All" && <span className="tile__tag">{img.space}</span>}
              {img.space && filter !== "All" && groups.length > 0 && img.space !== filter && (
                <span className="tile__tag">{img.space}</span>
              )}
            </button>
          ))}
        </div>
      </div>
      {active !== null && (
        <Lightbox images={shown} index={active} onClose={() => setActive(null)} onChange={setActive} />
      )}
    </section>
  );
}
