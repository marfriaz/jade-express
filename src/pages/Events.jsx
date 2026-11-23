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

      <section className="band band--pad band--tight">
        <div className="container stack stack--xl">
          <div className="stack">
            <span className="label label--light">popular for</span>
            <h2 className="h2">what people book us for.</h2>
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

      <section className="section section--tight">
        <div className="container stack stack--xl">
          <div className="section__head section__head--end">
            <h2 className="h2 h2--xl">event spaces</h2>
            <Link to="/spaces?use=events" className="text-link text-link--caps">
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
