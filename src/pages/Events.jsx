import { Link } from "react-router-dom";
import site from "../data/site.js";
import { getSpace } from "../data/spaces.js";
import SpaceCard from "../components/SpaceCard.jsx";
import CtaBand from "../components/CtaBand.jsx";

export default function Events() {
  const page = site.eventsPage;
  const list = page.order.map(getSpace).filter((s) => s && !s.placeholder);

  return (
    <>
      <section className="section section--page page-open">
        <div className="container stack stack--lg">
          <div className="stack">
            <span className="page-eyebrow">{page.eyebrow}</span>
            <h1 className="h1">{page.title}</h1>
            <p className="lead muted page-open__lead">{page.lead}</p>
          </div>
          <div className="open-wide">
            <img src={page.image.src} alt={page.image.alt} style={{ objectPosition: page.image.pos }} />
          </div>
        </div>
      </section>

      <section className="section section--tight possible">
        <div className="container stack stack--lg">
          <div className="section__head section__head--end">
            <h2 className="h2 h2--lg">make it yours.</h2>
            <Link to="/gallery" className="text-link text-link--caps">
              explore the gallery &rarr;
            </Link>
          </div>
          <ul className="possible__grid">
            {page.possibilities.map((p) => (
              <li key={p.label}>
                <img src={p.src} alt={p.alt} loading="lazy" style={{ objectPosition: p.pos }} />
                <span>{p.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tight page-spaces">
        <div className="container stack stack--xl">
          <div className="section__head section__head--end">
            <h2 className="h2 h2--xl">explore the spaces</h2>
            <Link to="/spaces" className="text-link text-link--caps">
              view all spaces &rarr;
            </Link>
          </div>
          <div className="cards cards--two">
            {list.map((s) => (
              <SpaceCard key={s.slug} space={s} showTags={false} />
            ))}
          </div>

          <div className="combo">
            <h2 className="h2 h2--lg">{page.combo.title}</h2>
            <div className="stack">
              <p className="lead">{page.combo.text}</p>
              <p className="page-note">{page.combo.note}</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand {...page.cta} to="/contact?type=events" />
    </>
  );
}
