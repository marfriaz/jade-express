import { useEffect, useMemo, useRef, useState } from "react";
import Lightbox from "./Lightbox.jsx";

// Photo counts that make a complete grid; any other count is trimmed down to the next one that does.
const COMPLETE = [1, 2, 3, 4, 6, 7];
// Which preview tiles are "wide" (two columns on desktop, full width on phones), by photo count.
const WIDE = { 1: [0], 2: [0, 1], 3: [0], 4: [], 6: [0, 5], 7: [0] };

function trimToComplete(list) {
  let n = list.length;
  while (n > 1 && !COMPLETE.includes(n)) n -= 1;
  return list.slice(0, n);
}

// A curated preview of a space's photography (`preview` = 1-based photo numbers, best first), with
// "view all photos" opening the full set (grouped by area, when the photos have areas) and a lightbox.
export default function Gallery({ images, preview, title = "photos.", id }) {
  const picks = useMemo(() => {
    const chosen = (preview || []).map((n) => images[n - 1]).filter(Boolean);
    return trimToComplete(chosen.length ? chosen : images.slice(0, 6));
  }, [images, preview]);
  const wide = WIDE[picks.length] || [];

  const areas = useMemo(() => [...new Set(images.map((i) => i.area).filter(Boolean))], [images]);
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("all");
  const [box, setBox] = useState(null); // { list, index }
  const closeRef = useRef(null);

  const shown = tab === "all" ? images : images.filter((i) => i.area === tab);

  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open || box) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, box]);

  return (
    <section className="section gallery-section" id={id}>
      <div className="container stack stack--lg">
        <div className="section__head">
          <h2 className="h2">{title}</h2>
        </div>

        <div className={"sg sg--" + picks.length}>
          {picks.map((img, i) => (
            <button
              key={img.src}
              type="button"
              className={"sg__tile" + (wide.includes(i) ? " sg__tile--wide" : "")}
              aria-label={`Open photo ${i + 1}`}
              onClick={() => setBox({ list: images, index: images.indexOf(img) })}
            >
              <img
                src={wide.includes(i) ? img.src : img.thumb || img.src}
                alt={img.alt}
                loading={i < 2 ? "eager" : "lazy"}
              />
            </button>
          ))}
        </div>

        {images.length > picks.length && (
          <div className="center">
            <button type="button" className="btn" onClick={() => setOpen(true)}>
              view all photos
            </button>
          </div>
        )}
      </div>

      {open && (
        <div className="allphotos" role="dialog" aria-modal="true" aria-label="All photos">
          <div className="allphotos__bar">
            <span className="allphotos__title">all photos</span>
            <button
              ref={closeRef}
              type="button"
              className="allphotos__close"
              aria-label="Close all photos"
              onClick={() => setOpen(false)}
            >
              close &times;
            </button>
          </div>
          <div className="allphotos__body">
            {areas.length > 1 && (
              <div className="allphotos__tabs" role="group" aria-label="Photo areas">
                {["all", ...areas].map((t) => (
                  <button
                    key={t}
                    type="button"
                    aria-pressed={tab === t}
                    className={tab === t ? "is-on" : ""}
                    onClick={() => setTab(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}
            <div className="allphotos__grid">
              {shown.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  className="allphotos__tile"
                  aria-label={`Open photo ${i + 1}`}
                  onClick={() => setBox({ list: shown, index: i })}
                >
                  <img src={img.thumb || img.src} alt={img.alt} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {box && (
        <Lightbox
          images={box.list}
          index={box.index}
          onClose={() => setBox(null)}
          onChange={(index) => setBox({ list: box.list, index })}
        />
      )}
    </section>
  );
}
