import { Link } from "react-router-dom";
import site from "../data/site.js";
import { spaces } from "../data/spaces.js";
import SpaceRow from "../components/SpaceRow.jsx";

export default function Workspaces() {
  const page = site.workspacesPage;
  // Leasable suites: workspace spaces that carry a lease rate (excludes the event spaces).
  const list = spaces.filter(
    (s) => s.uses.includes("workspace") && !s.placeholder && s.basics?.some((b) => b.label === "Lease rate")
  );

  return (
    <>
      <section className="section section--page">
        <div className="container stack stack--xl">
          <div className="stack">
            <h1 className="h1">{page.title}</h1>
            <p className="lead muted">{page.lead}</p>
          </div>
          <div className="btn-row">
            <Link to="/contact?type=visit" className="btn btn--primary">
              Book a visit
            </Link>
            <Link to="#suites" className="btn btn--outline">
              Browse suites
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="suites">
        <div className="container stack stack--lg">
          <div className="section__head section__head--end">
            <h2 className="h2 h2--xl">available suites</h2>
            <span className="muted small-strong">Move-in ready</span>
          </div>
          <div className="rows">
            {list.map((s) => (
              <SpaceRow key={s.slug} space={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack stack--xl">
          <div className="stack">
            <span className="label">Leasing</span>
            <h2 className="h2">What to know.</h2>
          </div>
          <dl className="facts-list">
            {page.details.map((f) => (
              <div key={f.label} className="facts-list__row">
                <dt className="label">{f.label}</dt>
                <dd>{f.text}</dd>
              </div>
            ))}
          </dl>
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
              <Link to="/contact?type=visit" className="btn btn--light">
                Book a visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
