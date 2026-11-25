import { Link } from "react-router-dom";
import site from "../data/site.js";
import { spaces } from "../data/spaces.js";
import SpaceCard from "../components/SpaceCard.jsx";
import InquiryForm from "../components/InquiryForm.jsx";
import ScaledEmbed from "../components/ScaledEmbed.jsx";

export default function Home() {
  const featured = spaces.filter((s) => s.featured);

  // 3 Instagram photos shown under the "life at wilson & bay" collage (numbers match instagramPosts order).
  const igPicks = (site.instagramHome || []).map((n) => site.instagramPosts?.[n - 1]).filter(Boolean);

  return (
    <>
      <section className="hero">
        <img
          className="hero__img"
          src="/images/home/hero.webp"
          alt="Exposed brick and timber loft with wood floors and built-in bookshelves"
        />
        <div className="hero__shade" />
        <div className="container hero__content">
          <div className="hero__grid">
            <div className="hero__lead">
              {site.hero.eyebrow && <span className="hero__eyebrow">{site.hero.eyebrow}</span>}
              <h1 className="hero__title">{site.hero.title}</h1>
            </div>
            <div className="stack">
              <p className="hero__text">{site.hero.text}</p>
              <div className="btn-row">
                <Link to="/spaces" className="btn btn--light">
                  view our spaces
                </Link>
                <Link to="/contact" className="btn btn--ghost-light">
                  get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--pad band--tight">
        <div className="container stack stack--xl">
          <span className="label label--light">what brings you here?</span>
          <div className="paths">
            {site.paths.map((p) => (
              <Link key={p.title} to={p.to} className="path">
                <img src={p.image} alt={p.alt} loading="lazy" />
                <h2 className="h2 h2--md">{p.title}</h2>
                <p className="light-muted">{p.text}</p>
                <span className="text-link text-link--caps">{p.cta} &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container stack stack--xl">
          <div className="section__head">
            <div className="stack">
              <h2 className="h2 h2--xl">featured spaces</h2>
              <p className="featured__note">spaces ranging from 1,100 to 15,000+ sq ft, with gated on-site parking available.</p>
            </div>
            <Link to="/spaces" className="text-link featured__top-link">
              view all spaces &rarr;
            </Link>
          </div>
          <div className="cards">
            {featured.map((s) => (
              <SpaceCard key={s.slug} space={s} showTags={false} />
            ))}
          </div>
          <div className="center featured__cta">
            <Link to="/spaces" className="btn btn--primary btn--wide">
              view all spaces
            </Link>
          </div>
        </div>
      </section>

      <section className="band band--pad band--tight">
        <div className="container stack stack--xl">
          <div className="section__head section__head--end">
            <div className="stack">
              <h2 className="h2 h2--xl">{site.life.title}</h2>
              <p className="light-muted lead">{site.life.text}</p>
            </div>
            <Link to="/gallery" className="text-link text-link--caps">
              Explore the gallery &rarr;
            </Link>
          </div>
          <div className="justified">
            {site.life.rows.map((row, r) => (
              <div
                className={"justified__row" + (row.every((n) => site.life.images[n - 1].embed) ? " justified__row--embeds" : "")}
                key={r}
              >
                {row.map((n) => {
                  const img = site.life.images[n - 1];
                  return (
                    <div
                      className={"justified__item" + (img.embed ? " justified__item--embed" : "")}
                      key={img.src || img.embed}
                      style={{ "--ratio": img.ratio }}
                    >
                      {img.embed ? (
                        <ScaledEmbed url={img.embed} title={img.alt} height={img.height} />
                      ) : (
                        <img src={img.src} alt={img.alt} loading="lazy" />
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          {site.instagram && igPicks.length > 0 && (
            <div className="life-insta">
              <div className={"life-insta__grid" + (igPicks.length > 3 ? " life-insta__grid--many" : "")}>
                {igPicks.map((p) => (
                  <a
                    key={p.src}
                    href={p.href || site.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="insta__tile"
                    aria-label={`${p.alt} (opens Instagram)`}
                  >
                    <img src={p.src} alt={p.alt} loading="lazy" />
                  </a>
                ))}
              </div>
              <a className="text-link text-link--caps" href={site.instagram} target="_blank" rel="noreferrer">
                More on Instagram {site.instagramHandle} &rarr;
              </a>
            </div>
          )}
        </div>
      </section>

      <section className="who">
        <img src="/images/home/who-we-are.webp" alt="" className="who__img" loading="lazy" />
        <div className="who__shade" />
        <div className="container who__content">
          <span className="label label--light">who we are</span>
          <p className="who__text">{site.whoWeAre}</p>
        </div>
      </section>

      <section className="section section--tight home-end" id="contact">
        <div className="container">
          <div className="panel">
            <div className="stack">
              <h2 className="h2 h2--xl">let's make something happen.</h2>
              <p className="light-muted lead">
                looking for a space? tell us what you have in mind and we'll be in touch.
              </p>
              {site.email && (
                <a className="text-link" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              )}
            </div>
            <InquiryForm dark />
          </div>
        </div>
      </section>
    </>
  );
}
