import { Link } from "react-router-dom";
import site from "../data/site.js";
import { getSpace } from "../data/spaces.js";
import SpaceCard from "../components/SpaceCard.jsx";
import SectionCta from "../components/SectionCta.jsx";
import CtaBand from "../components/CtaBand.jsx";

export default function Workspaces() {
  const page = site.workspacesPage;
  const list = page.order.map(getSpace).filter((s) => s && !s.placeholder);

  return (
    <>
      <section className="section section--page page-open">
        <div className="container">
          <div className="page-open__head">
            <span className="page-eyebrow">{page.eyebrow}</span>
            <h1 className="h1">{page.title}</h1>
            <p className="lead muted page-open__lead">{page.lead}</p>
            <Link to="/contact?type=workspace" className="text-link text-link--caps page-open__cta">
              {page.link} &rarr;
            </Link>
          </div>
          <div className="page-open__media page-open__media--pair">
            {page.images.map((img) => (
              <img key={img.src} src={img.src} alt={img.alt} style={{ objectPosition: img.pos }} />
            ))}
          </div>
        </div>
      </section>

      <section className="band highlights">
        <div className="container">
          <ul className="highlights__grid">
            {page.highlights.map((h) => (
              <li key={h.title}>
                <strong>{h.title}</strong>
                <span>{h.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tight page-spaces">
        <div className="container stack stack--xl">
          <div className="section__head section__head--end">
            <h2 className="h2 h2--xl h2-sec">available workspaces</h2>
            <SectionCta to="/spaces" placement="head">view all spaces</SectionCta>
          </div>
          <div className="cards">
            {list.map((s) => (
              <SpaceCard key={s.slug} space={s} showTags={false} />
            ))}
          </div>
          <SectionCta to="/spaces">view all spaces</SectionCta>
          <p className="page-note">{page.note}</p>
        </div>
      </section>

      <CtaBand {...page.cta} to="/contact?type=workspace" />
    </>
  );
}
