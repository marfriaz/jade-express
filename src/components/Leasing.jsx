import { Link } from "react-router-dom";
import site from "../data/site.js";

export default function Leasing() {
  const { leasing } = site;
  return (
    <section className="section">
      <div className="container split">
        <div className="stack stack--lg">
          <span className="label">leasing</span>
          <h2 className="h2 h2--md">{leasing.title}</h2>
          <p className="lead">{leasing.text}</p>
          <dl className="facts-list">
            {leasing.facts.map((f) => (
              <div key={f.label} className="facts-list__row">
                <dt className="label">{f.label}</dt>
                <dd>{f.text}</dd>
              </div>
            ))}
          </dl>
          <div className="btn-row">
            <Link to="/contact?type=visit" className="btn btn--primary">
              book a visit
            </Link>
            <Link to="/spaces" className="btn">
              view all spaces
            </Link>
          </div>
        </div>
        <div className="photo-grid-2">
          {leasing.images.map((img) => (
            <img key={img.src} src={img.src} alt={img.alt} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}
