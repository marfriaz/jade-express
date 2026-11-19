import { Link } from "react-router-dom";
import site from "../data/site.js";
import { spaces } from "../data/spaces.js";
import SpaceCard from "../components/SpaceCard.jsx";
import Leasing from "../components/Leasing.jsx";
import InquiryForm from "../components/InquiryForm.jsx";

export default function Home() {
  const featured = spaces.filter((s) => s.featured);

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
            <h1 className="hero__title">{site.hero.title}</h1>
            <div className="stack">
              <p className="hero__text">{site.hero.text}</p>
              <div className="btn-row">
                <Link to="/spaces" className="btn btn--light">
                  View our spaces
                </Link>
                <Link to="/contact" className="btn btn--ghost-light">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="facts">
          {site.facts.map((f) => (
            <div key={f.title} className="fact">
              <span className="fact__title">{f.title}</span>
              <span className="fact__text">{f.text}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="band band--pad">
        <div className="container stack stack--xl">
          <span className="label label--light">What brings you here?</span>
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

      <section className="section">
        <div className="container stack stack--xl">
          <div className="section__head">
            <h2 className="h2 h2--xl">featured spaces</h2>
            <Link to="/spaces" className="text-link">
              View all spaces &rarr;
            </Link>
          </div>
          <div className="cards">
            {featured.map((s) => (
              <SpaceCard key={s.slug} space={s} />
            ))}
          </div>
          <div className="center">
            <Link to="/spaces" className="btn btn--primary btn--wide">
              View all spaces
            </Link>
          </div>
        </div>
      </section>

      <section className="band band--pad">
        <div className="container stack stack--xl">
          <div className="section__head section__head--end">
            <div className="stack">
              <h2 className="h2 h2--xl">{site.life.title}</h2>
              <p className="light-muted lead">{site.life.text}</p>
            </div>
            <Link to="/gallery" className="text-link text-link--caps">
              Explore the gallery &raquo;
            </Link>
          </div>
          <div className="justified">
            {site.life.rows.map((row, r) => (
              <div className="justified__row" key={r}>
                {row.map((n) => {
                  const img = site.life.images[n - 1];
                  return (
                    <div className="justified__item" key={img.src} style={{ "--ratio": img.ratio }}>
                      <img src={img.src} alt={img.alt} loading="lazy" />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="who">
        <img src="/images/home/who-we-are.webp" alt="" className="who__img" loading="lazy" />
        <div className="who__shade" />
        <div className="container who__content">
          <span className="label label--light">Who we are</span>
          <p className="who__text">{site.whoWeAre}</p>
        </div>
      </section>

      <Leasing />

      <section className="section" id="contact">
        <div className="container">
          <div className="panel">
            <div className="stack">
              <h2 className="h2 h2--xl">let's make something happen.</h2>
              <p className="light-muted lead">
                Looking for a space? Tell us what you have in mind and we'll be in touch.
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

      {site.instagram && site.instagramPosts?.length > 0 && (
        <section className="section insta">
          <div className="container stack stack--xl">
            <div className="section__head section__head--end">
              <h2 className="h2 h2--xl">from instagram</h2>
              <a className="text-link text-link--caps" href={site.instagram} target="_blank" rel="noreferrer">
                Follow {site.instagramHandle || "us"} &rarr;
              </a>
            </div>
            <div className="insta__grid">
              {site.instagramPosts.map((p) => (
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
          </div>
        </section>
      )}
    </>
  );
}
