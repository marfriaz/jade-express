import { Link } from "react-router-dom";
import site from "../data/site.js";
import { spaces } from "../data/spaces.js";
import SpaceCard from "../components/SpaceCard.jsx";

export default function Workspaces() {
  const page = site.workspacesPage;
  const list = spaces.filter((s) => s.uses.includes("workspace") && !s.placeholder);

  return (
    <>
      <section className="section section--page">
        <div className="container stack stack--xl">
          <div className="stack">
            <h1 className="h1">{page.title}</h1>
            <p className="lead muted">{page.lead}</p>
          </div>
          <img className="wide-img" src={page.image} alt={page.alt} />
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
        <div className="container stack stack--xl">
          <div className="section__head section__head--end">
            <h2 className="h2 h2--xl">available spaces</h2>
            <Link to="/spaces?use=workspace" className="text-link text-link--caps">
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
            </div>
            <div className="btn-row">
              <Link to="/contact?type=visit" className="btn btn--light">
                Book a visit
              </Link>
              <Link to="/spaces?use=workspace" className="btn btn--ghost-light">
                View workspaces
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
