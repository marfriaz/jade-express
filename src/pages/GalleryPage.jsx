import { useState } from "react";
import { Link } from "react-router-dom";
import { galleryEvents } from "../data/galleryEvents.js";
import Lightbox from "../components/Lightbox.jsx";

export default function GalleryPage() {
  const [active, setActive] = useState(null); // { event, index }

  return (
    <>
      <section className="section section--page">
        <div className="container stack stack--xl">
          <div className="stack">
            <h1 className="h1">gallery.</h1>
            <p className="lead muted">A look at some of the events and productions we've hosted.</p>
          </div>
        </div>
      </section>

      {galleryEvents.map((ev, evIndex) => (
        <section key={ev.slug} className="section section--tight case" id={ev.slug}>
          <div className="container stack stack--xl">
            <div className="case__head">
              <div className="stack">
                <span className="label">{ev.kind}</span>
                <h2 className="h2 h2--xl">{ev.title}</h2>
              </div>
              <div className="stack">
                <p className="lead">{ev.text}</p>
                <div className="chips">
                  {ev.spaces.map((s) =>
                    s.to ? (
                      <Link key={s.name} to={s.to} className="chip chip--link">
                        {s.name}
                      </Link>
                    ) : (
                      <span key={s.name} className="chip">
                        {s.name}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className={"case__body" + (ev.instagram ? " case__body--embed" : "")}>
              <div className="justified">
                {ev.rows.map((row, r) => (
                  <div className="justified__row" key={r}>
                    {row.map((n) => {
                      const img = ev.photos[n - 1];
                      return (
                        <button
                          key={img.src}
                          type="button"
                          className={"justified__item justified__item--btn" + (img.ratio > 0.8 ? " justified__item--wide" : "")}
                          style={{ "--ratio": img.ratio }}
                          aria-label={`Open ${ev.title} photo ${n} of ${ev.photos.length}`}
                          onClick={() => setActive({ event: evIndex, index: n - 1 })}
                        >
                          <img
                            src={img.ratio > 0.8 ? img.src : img.thumb || img.src}
                            alt={img.alt}
                            style={img.pos ? { objectPosition: img.pos } : undefined}
                            loading="lazy"
                          />
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
              {ev.instagram && (
                <div className="embed">
                  <iframe
                    className="embed__frame"
                    src={`${ev.instagram}embed/`}
                    title={`${ev.title} on Instagram`}
                    loading="lazy"
                    scrolling="no"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      <section className="section section--tight">
        <div className="container">
          <div className="panel panel--cta">
            <div className="stack">
              <h2 className="h2 h2--lg">Planning something?</h2>
              <p className="light-muted lead">Tell us about your event or production and we'll be in touch.</p>
            </div>
            <div className="btn-row">
              <Link to="/contact" className="btn btn--light">
                Inquire
              </Link>
            </div>
          </div>
        </div>
      </section>

      {active && (
        <Lightbox
          images={galleryEvents[active.event].photos}
          index={active.index}
          onClose={() => setActive(null)}
          onChange={(i) => setActive({ event: active.event, index: i })}
        />
      )}
    </>
  );
}
