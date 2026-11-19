import { useMemo, useState } from "react";
import Lightbox from "./Lightbox.jsx";

const DEFAULT_LIMIT = 7;

export default function Gallery({ images, title = "Photos", id, limit = DEFAULT_LIMIT }) {
  const areas = useMemo(
    () => [...new Set(images.map((i) => i.area).filter(Boolean))],
    [images]
  );
  const [tab, setTab] = useState("All");
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState(null);

  const filtered = tab === "All" ? images : images.filter((i) => i.area === tab);
  const visible = expanded ? filtered : filtered.slice(0, limit);
  const tabs = areas.length > 1 ? ["All", ...areas] : [];

  function pick(name) {
    setTab(name);
    setExpanded(false);
  }

  return (
    <section className="section" id={id}>
      <div className="container stack stack--lg">
        <div className="section__head">
          <h2 className="h2">{title}</h2>
          <span className="muted small-strong">{images.length} photos</span>
        </div>

        {tabs.length > 0 && (
          <div className="tabs" role="tablist" aria-label="Photo areas">
            {tabs.map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={tab === t}
                className={"tab" + (tab === t ? " tab--on" : "")}
                onClick={() => pick(t)}
              >
                {t}
              </button>
            ))}
          </div>
        )}

        <div className="gallery">
          {visible.map((img, i) => (
            <button
              key={img.src}
              type="button"
              className={"tile" + (i === 0 ? " tile--lead" : "")}
              aria-label={`Open photo ${i + 1}`}
              onClick={() => setActive(i)}
            >
              <img
                src={i === 0 ? img.src : img.thumb || img.src}
                alt={img.alt}
                loading={i < 2 ? "eager" : "lazy"}
              />
              {img.area && <span className="tile__tag">{img.area}</span>}
            </button>
          ))}
        </div>

        {!expanded && filtered.length > limit && (
          <div className="center">
            <button type="button" className="btn" onClick={() => setExpanded(true)}>
              View all {filtered.length} photos
            </button>
          </div>
        )}
      </div>

      {active !== null && (
        <Lightbox
          images={filtered}
          index={active}
          onClose={() => setActive(null)}
          onChange={setActive}
        />
      )}
    </section>
  );
}
