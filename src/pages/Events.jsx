import { Link } from "react-router-dom";
import site from "../data/site.js";
import { spaces } from "../data/spaces.js";
import SpaceCard from "../components/SpaceCard.jsx";

export default function Events() {
  const page = site.eventsPage;
  const list = spaces.filter((s) => s.uses.includes("events") && !s.placeholder);

  return (
    <>
      <section className="section section--page">
        <div className="container stack stack--xl">
          <div className="stack">
            <h1 className="h1">{page.title}</h1>
            <p className="lead muted">{page.lead}</p>
          </div>
        </div>
      </section>

      <section className="band band--pad">
        <div className="container split">
          <div className="stack">
            <span className="label label--light">Popular for</span>
            <h2 className="h2">What people book us for.</h2>
          </div>
          <div className="chips">
            {page.popularFor.map((u) => (
              <span key={u} className="chip chip--light chip--lg">
                {u}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack stack--xl">
          <div className="section__head section__head--end">
            <h2 className="h2 h2--xl">event spaces</h2>
            <Link to="/spaces?use=events" className="text-link text-link--caps">
              See all in Spaces &rarr;
            </Link>
          </div>
          <div className="cards">
            {list.map((s) => (
              <SpaceCard key={s.slug} space={s} />
            ))}
          </div>
        </div>
      </section>


      <section className="section">
        <div className="container">
          <div className="panel panel--cta">
            <div className="stack">
              <h2 className="h2 h2--lg">{page.cta.title}</h2>
              <p className="light-muted lead">{page.cta.text}</p>
              {site.peerspaceUrl && (
                <a className="text-link" href={site.peerspaceUrl} target="_blank" rel="noreferrer">
                  Or book through Peerspace
                </a>
              )}
            </div>
            <div className="btn-row">
              <Link to="/contact" className="btn btn--light">
                Request a booking
              </Link>
              <Link to="/gallery" className="btn btn--ghost-light">
                See event photos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
