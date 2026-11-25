import { Link } from "react-router-dom";
import { coverOf } from "../data/spaces.js";

// "other spaces" strip: up to three alternatives, image + name + size + link.
// Three columns on desktop, a swipeable row on phones.
export default function RelatedSpaces({ spaces }) {
  if (!spaces.length) return null;
  return (
    <section className="section related-section">
      <div className="container stack stack--lg">
        <div className="section__head">
          <h2 className="h2">other spaces</h2>
          <Link to="/spaces" className="text-link">
            view all spaces &rarr;
          </Link>
        </div>
        <ul className="related">
          {spaces.map((s) => {
            const cover = coverOf(s);
            return (
              <li key={s.slug} className="related__item">
                <Link to={`/spaces/${s.slug}`} className="related__card">
                  <img src={cover.thumb || cover.src} alt={cover.alt} loading="lazy" />
                  <span className="related__head">
                    <span className="h3">{s.name}</span>
                    {s.sqft && <span className="muted small-strong">{s.sqft} sq ft</span>}
                  </span>
                  <span className="text-link">explore {s.name} &rarr;</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
