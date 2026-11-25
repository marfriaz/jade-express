import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSpace, coverOf, specRowsOf, spaces } from "../data/spaces.js";
import Gallery from "../components/Gallery.jsx";
import RelatedSpaces from "../components/RelatedSpaces.jsx";
import StickyBar from "../components/StickyBar.jsx";
import NotFound from "./NotFound.jsx";

// Splits the details rows into two columns of about equal height (by how much text each row holds),
// keeping the master field order. Short sheets stay in one column.
function balance(rows) {
  if (rows.length < 4) return [rows];
  const weight = (r) => 1 + Math.floor(r.value.length / 44);
  const total = rows.reduce((n, r) => n + weight(r), 0);
  let best = 1;
  let bestGap = Infinity;
  let run = 0;
  for (let i = 0; i < rows.length - 1; i++) {
    run += weight(rows[i]);
    const gap = Math.abs(total - 2 * run);
    if (gap < bestGap) {
      bestGap = gap;
      best = i + 1;
    }
  }
  return [rows.slice(0, best), rows.slice(best)];
}

export default function Space() {
  const { slug } = useParams();
  const space = getSpace(slug);
  const introRef = useRef(null);
  const [introGone, setIntroGone] = useState(false);
  const [footerIn, setFooterIn] = useState(false);

  // Phones and tablets: slide the fixed "inquire" bar up once the intro has scrolled out of view,
  // and tuck it away again when the footer arrives.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;
    const watchers = [];
    const intro = introRef.current;
    if (intro) {
      const io = new IntersectionObserver(([e]) =>
        setIntroGone(!e.isIntersecting && e.boundingClientRect.top < 0)
      );
      io.observe(intro);
      watchers.push(io);
    }
    const footer = document.querySelector("footer");
    if (footer) {
      const io = new IntersectionObserver(([e]) => setFooterIn(e.isIntersecting));
      io.observe(footer);
      watchers.push(io);
    }
    return () => watchers.forEach((io) => io.disconnect());
  }, [slug]);

  if (!space) return <NotFound />;

  const cover = coverOf(space);
  const columns = balance(specRowsOf(space));
  const related = (space.related || [])
    .map((s) => spaces.find((x) => x.slug === s))
    .filter((s) => s && s.slug !== space.slug)
    .slice(0, 3);
  const short = space.name.replace(/^The /, "the ");

  return (
    <>
      <section className="space-hero">
        <div className="container space-top">
          <Link to="/spaces" className="back">
            &larr; all spaces
          </Link>
          <h1 className="h1 h1--xl">{space.name.toLowerCase()}.</h1>
          <div className="space-top__photo">
            <img src={cover.src} alt={cover.alt} />
            {space.placeholder && <span className="photo-note">photos coming soon</span>}
          </div>
          <div className="space-top__text" ref={introRef}>
            {(space.intro || space.summary) && (
              <p className="space-intro">{space.intro || space.summary}</p>
            )}
            <Link to={`/contact?space=${space.slug}`} className="text-link space-top__cta">
              inquire about {short}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {columns[0].length > 0 && (
        <section className="section section--tight details-section">
          <div className="container">
            <div className="details">
              <h2 className="h2">details.</h2>
              <div className="details__grid">
                {columns.map((col, i) => (
                  <dl key={i} className="details__col">
                    {col.map((r) => (
                      <div key={r.label} className="details__row">
                        <dt>{r.label}</dt>
                        <dd>{r.value}</dd>
                      </div>
                    ))}
                  </dl>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {!space.placeholder && <Gallery title="photos." images={space.images} preview={space.preview} />}

      <RelatedSpaces spaces={related} />

      <StickyBar space={space} visible={introGone && !footerIn} />
    </>
  );
}
