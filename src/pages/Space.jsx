import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSpace, coverOf, spaces } from "../data/spaces.js";
import site from "../data/site.js";
import Gallery from "../components/Gallery.jsx";
import BookingCard from "../components/BookingCard.jsx";
import StickyBar from "../components/StickyBar.jsx";
import SpaceCard from "../components/SpaceCard.jsx";
import NotFound from "./NotFound.jsx";

export default function Space() {
  const { slug } = useParams();
  const space = getSpace(slug);
  const ctaRef = useRef(null);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const el = ctaRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return undefined;
    const io = new IntersectionObserver(([entry]) => {
      setShowBar(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [slug]);

  if (!space) return <NotFound />;

  const cover = coverOf(space);
  const basics = (space.basics || []).filter((b) => b.value);
  const others = spaces.filter((s) => s.slug !== space.slug).slice(0, 3);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${site.name}, ${space.location}`
  )}`;

  return (
    <>
      <section className="space-hero">
        <div className="container space-hero__grid">
          <div className="space-hero__text stack">
            <Link to="/spaces" className="back">
              &larr; All spaces
            </Link>
            <h1 className="h1 h1--xl">{space.name.toLowerCase()}.</h1>
            <p className="space-hero__meta">
              {[space.sqft && `${space.sqft} sq ft`, space.location].filter(Boolean).join(" · ")}
            </p>
            {space.features?.length > 0 && (
              <div className="chips">
                {space.features.map((f) => (
                  <span key={f} className="chip">
                    {f}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="space-hero__photo">
            <img src={cover.src} alt={cover.alt} />
            {space.placeholder && <span className="photo-note">Photos coming soon</span>}
          </div>
        </div>
        <div className="container">
          <div className="hero-cta" ref={ctaRef}>
            <div className="hero-cta__price">
              <span className="muted small-strong">{space.price ? "Starting at" : "Pricing"}</span>
              <span className="hero-cta__amount">{space.price || "Request a quote"}</span>
            </div>
            <Link to={`/contact?space=${space.slug}`} className="btn btn--primary">
              Check availability
            </Link>
            <Link to={`/contact?type=visit&space=${space.slug}`} className="btn">
              Book a visit
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-body">
          <div className="stack stack--xl">
            {(space.summary || space.description?.length > 0) && (
              <div className="stack">
                <span className="label">About</span>
                <p className="statement">{space.summary}</p>
                {space.description?.map((p) => (
                  <p key={p.slice(0, 24)} className="body-text">
                    {p}
                  </p>
                ))}
              </div>
            )}

            {basics.length > 0 && (
              <div className="stack">
                <span className="label">The basics</span>
                <div className="basics">
                  {basics.map((b) => (
                    <div key={b.label} className="basic">
                      <span className="basic__label">{b.label}</span>
                      <span className="basic__value">{b.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {space.included?.length > 0 && (
              <div className="stack">
                <span className="label">What's included</span>
                <ul className="checklist">
                  {space.included.map((i) => (
                    <li key={i}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12.5l4.5 4.5L19 7.5" />
                      </svg>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {space.popularFor?.length > 0 && (
              <div className="stack">
                <span className="label">Popular for</span>
                <div className="chips">
                  {space.popularFor.map((u) => (
                    <span key={u} className="chip chip--solid chip--lg">
                      {u}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <BookingCard space={space} />
        </div>
      </section>

      {!space.placeholder && <Gallery images={space.images} limit={space.slug === "the-courtyard" ? space.images.length : undefined} />}

      <section className="section">
        <div className="container split">
          <div className="stack stack--lg">
            <h2 className="h2">Location</h2>
            <p className="lead">
              {site.name} &middot; {space.location}
            </p>
            <div>
              <a className="btn" href={mapsUrl} target="_blank" rel="noreferrer">
                Get directions
              </a>
            </div>
          </div>
          {space.faq?.length > 0 && (
            <div className="stack">
              <h2 className="h2">Good to know</h2>
              <div className="faq">
                {space.faq.map((f, i) => (
                  <details key={f.q} open={i === 0}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {others.length > 0 && (
        <section className="section">
          <div className="container stack stack--xl">
            <div className="section__head">
              <h2 className="h2">Other spaces</h2>
              <Link to="/spaces" className="text-link">
                See all {spaces.length} spaces
              </Link>
            </div>
            <div className="cards">
              {others.map((s) => (
                <SpaceCard key={s.slug} space={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="panel panel--cta">
            <div className="stack">
              <h2 className="h2 h2--lg">Want to see {space.name.replace(/^The /, "the ")} in person?</h2>
              <p className="light-muted lead">
                Book a visit, or tell us about your project and we'll check availability.
              </p>
            </div>
            <div className="btn-row">
              <Link to={`/contact?type=visit&space=${space.slug}`} className="btn btn--light">
                Book a visit
              </Link>
              <Link to={`/contact?space=${space.slug}`} className="btn btn--ghost-light">
                Send an inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StickyBar space={space} visible={showBar} />
    </>
  );
}
