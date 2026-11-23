import { Link, useParams } from "react-router-dom";
import { getSpace, coverOf, spaces } from "../data/spaces.js";
import Gallery from "../components/Gallery.jsx";
import SpaceCard from "../components/SpaceCard.jsx";
import NotFound from "./NotFound.jsx";

// The rows of the "details" table: an explicit `details` list when a space has one, otherwise its
// basics plus what's included (or its features).
function detailsOf(space) {
  if (space.details?.length) return space.details.filter((d) => d.value);
  const rows = (space.basics || []).filter((b) => b.value);
  const extra = space.included?.length ? space.included : space.features;
  if (extra?.length) rows.push({ label: space.included?.length ? "included" : "features", value: extra.join(", ") });
  return rows;
}

export default function Space() {
  const { slug } = useParams();
  const space = getSpace(slug);
  if (!space) return <NotFound />;

  const cover = coverOf(space);
  const rows = detailsOf(space);
  const half = Math.ceil(rows.length / 2);
  const columns = [rows.slice(0, half), rows.slice(half)].filter((c) => c.length > 0);
  const others = spaces.filter((s) => s.slug !== space.slug).slice(0, 3);

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
          <div className="space-top__text">
            {space.summary && <p className="statement">{space.summary}</p>}
            {space.description?.map((p) => (
              <p key={p.slice(0, 24)} className="body-text">
                {p}
              </p>
            ))}
            <Link to={`/contact?space=${space.slug}`} className="text-link space-top__cta">
              inquire about {space.name.replace(/^The /, "the ")}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {columns.length > 0 && (
        <section className="section">
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

      {!space.placeholder && <Gallery title="photos." images={space.images} limit={space.slug === "the-courtyard" ? space.images.length : undefined} />}

      {others.length > 0 && (
        <section className="section">
          <div className="container stack stack--xl">
            <div className="section__head">
              <h2 className="h2">other spaces</h2>
              <Link to="/spaces" className="text-link">
                see all {spaces.length} spaces
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
              <h2 className="h2 h2--lg">want to see {space.name.replace(/^The /, "the ")} in person?</h2>
              <p className="light-muted lead">
                tell us about your project and we'll check availability or set up a visit.
              </p>
            </div>
            <div className="btn-row">
              <Link to={`/contact?space=${space.slug}`} className="btn btn--light">
                inquire
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
