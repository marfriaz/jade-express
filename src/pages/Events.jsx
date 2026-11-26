import { Link } from "react-router-dom";
import site from "../data/site.js";
import { getSpace } from "../data/spaces.js";
import SpaceCard from "../components/SpaceCard.jsx";
import SectionCta from "../components/SectionCta.jsx";
import CtaBand from "../components/CtaBand.jsx";

export default function Events() {
  const page = site.eventsPage;
  const list = page.order.map(getSpace).filter((s) => s && !s.placeholder);

  return (
    <>
      <section className="section section--page page-open">
        <div className="container">
          <div className="page-open__head">
            <span className="page-eyebrow">{page.eyebrow}</span>
            <h1 className="h1">{page.title}</h1>
            <p className="lead muted page-open__lead">{page.lead}</p>
            <Link to="/contact?type=events" className="text-link text-link--caps page-open__cta">
              {page.link} &rarr;
            </Link>
          </div>
          <div className="page-open__media">
            <img src={page.image.src} alt={page.image.alt} style={{ objectPosition: page.image.pos }} />
          </div>
        </div>
      </section>

      <section className="section section--tight possible">
        <div className="container stack stack--lg">
          <div className="section__head section__head--end">
            <h2 className="h2 h2--lg h2-sec">make it yours.</h2>
            <SectionCta to="/gallery" placement="head">explore the gallery</SectionCta>
          </div>
          <ul className="possible__grid">
            {page.possibilities.map((p) => (
              <li key={p.label}>
                <img src={p.src} alt={p.alt} loading="lazy" style={{ objectPosition: p.pos }} />
                <span>{p.label}</span>
              </li>
            ))}
          </ul>
          <SectionCta to="/gallery">explore the gallery</SectionCta>
        </div>
      </section>

      <section className="section section--tight page-spaces">
        <div className="container stack stack--xl">
          <div className="section__head section__head--end">
            <h2 className="h2 h2--xl h2-sec">explore the spaces</h2>
            <SectionCta to="/spaces" placement="head">view all spaces</SectionCta>
          </div>
          <div className="cards cards--two">
            {list.map((s) => (
              <SpaceCard key={s.slug} space={s} showTags={false} />
            ))}
          </div>
          <SectionCta to="/spaces">view all spaces</SectionCta>

          <div className="combo">
            <img
              className="combo__img"
              src={page.combo.image.src}
              alt={page.combo.image.alt}
              loading="lazy"
              style={{ objectPosition: page.combo.image.pos }}
            />
            <div className="combo__text stack">
              <h2 className="h2 h2--lg h2-sec">{page.combo.title}</h2>
              <p className="lead">{page.combo.text}</p>
              <p className="page-note">{page.combo.note}</p>
              <Link to="/contact?type=events" className="text-link text-link--caps">
                {page.combo.link} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand {...page.cta} to="/contact?type=events" />
    </>
  );
}
