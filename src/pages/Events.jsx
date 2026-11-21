import { Link } from "react-router-dom";
import site from "../data/site.js";
import { spaces } from "../data/spaces.js";
import SpaceRow from "../components/SpaceRow.jsx";

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
          <div className="btn-row">
            <Link to="/contact" className="btn btn--primary">
              Request a booking
            </Link>
            {site.peerspaceUrl && (
              <a className="btn btn--outline" href={site.peerspaceUrl} target="_blank" rel="noreferrer">
                Book on Peerspace &#8599;
              </a>
            )}
          </div>
          <div className="stack">
            <span className="label">Popular for</span>
            <div className="chips">
              {page.popularFor.map((u) => (
                <span key={u} className="chip">
                  {u}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack stack--lg">
          <div className="section__head section__head--end">
            <h2 className="h2 h2--xl">event spaces</h2>
            <Link to="/gallery" className="text-link text-link--caps">
              See event photos &rarr;
            </Link>
          </div>
          <div className="rows">
            {list.map((s) => (
              <SpaceRow key={s.slug} space={s} />
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
            </div>
            <div className="btn-row">
              <Link to="/contact" className="btn btn--light">
                Request a booking
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
