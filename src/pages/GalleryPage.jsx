import { useState } from "react";
import site from "../data/site.js";
import { spaces } from "../data/spaces.js";
import Lightbox from "../components/Lightbox.jsx";

export default function GalleryPage() {
  const [active, setActive] = useState(null);
  const life = site.life.images;
  const spacePhotos = spaces
    .filter((s) => !s.placeholder)
    .map((s) => ({ space: s.name, ...s.images[(s.cover || 1) - 1] }));
  const all = [...life, ...spacePhotos];

  return (
    <section className="section section--page">
      <div className="container stack stack--xl">
        <div className="stack">
          <h1 className="h1">gallery.</h1>
          <p className="lead muted">{site.life.text}</p>
        </div>
        <div className="mosaic mosaic--page">
          {all.map((img, i) => (
            <button
              key={img.src}
              type="button"
              className="tile"
              aria-label={`Open photo ${i + 1}`}
              onClick={() => setActive(i)}
            >
              <img src={img.thumb || img.src} alt={img.alt} loading="lazy" />
              {img.space && <span className="tile__tag">{img.space}</span>}
            </button>
          ))}
        </div>
      </div>
      {active !== null && (
        <Lightbox
          images={all.map((i) => ({ ...i, src: i.src }))}
          index={active}
          onClose={() => setActive(null)}
          onChange={setActive}
        />
      )}
    </section>
  );
}
