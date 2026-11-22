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

      {galleryEvents.map((ev, evIndex) => {
        const stills = ev.photos.filter((p) => !p.video);
        return (
        <section key={ev.slug} className="section section--tight case" id={ev.slug}>
          <div className="container stack stack--xl">
            <div className="case__head stack">
              <span className="label">{ev.kind}</span>
              <h2 className="h2 h2--xl">{ev.title}</h2>
              <p className="lead case__text">{ev.text}</p>
            </div>

            <div className={"case__body" + (ev.instagram || ev.sideVideo ? " case__body--embed" : "")}>
              <div className="justified">
                {ev.rows.map((row, r) => (
                  <div className="justified__row" key={r}>
                    {row.map((n) => {
                      const img = ev.photos[n - 1];
                      const mobile = img.mobile === "full" ? " justified__item--wide" : "";
                      if (img.video) {
                        return (
                          <div
                            key={img.video}
                            className={"justified__item" + mobile}
                            style={{ "--ratio": img.ratio }}
                          >
                            <video
                              className="justified__video"
                              src={img.video}
                              poster={img.poster}
                              aria-label={img.alt}
                              style={img.pos ? { objectPosition: img.pos } : undefined}
                              autoPlay
                              muted
                              loop
                              playsInline
                              preload="metadata"
                            />
                          </div>
                        );
                      }
                      return (
                        <button
                          key={img.src}
                          type="button"
                          className={"justified__item justified__item--btn" + mobile}
                          style={{ "--ratio": img.ratio }}
                          aria-label={`Open ${ev.title} photo ${n} of ${ev.photos.length}`}
                          onClick={() => setActive({ event: evIndex, index: stills.indexOf(img) })}
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
              {ev.sideVideo && (
                <div className="embed">
                  <video
                    className="embed__video"
                    src={ev.sideVideo.src}
                    poster={ev.sideVideo.poster}
                    aria-label={ev.sideVideo.alt}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    preload="metadata"
                  />
                </div>
              )}
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
        );
      })}

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
          images={galleryEvents[active.event].photos.filter((p) => !p.video)}
          index={active.index}
          onClose={() => setActive(null)}
          onChange={(i) => setActive({ event: active.event, index: i })}
        />
      )}
    </>
  );
}
