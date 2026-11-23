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
        </div>
      </section>

      <section className="band band--pad band--tight">
        <div className="container stack stack--xl">
          <div className="stack">
            <span className="label label--light">leasing</span>
            <h2 className="h2">what to know.</h2>
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

      <section className="section section--tight">
        <div className="container stack stack--xl">
          <div className="section__head section__head--end">
            <h2 className="h2 h2--xl">available spaces</h2>
            <Link to="/spaces?use=workspace" className="text-link text-link--caps">
              see all in spaces &rarr;
            </Link>
          </div>
          <div className="cards">
            {list.map((s) => (
              <SpaceCard key={s.slug} space={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
