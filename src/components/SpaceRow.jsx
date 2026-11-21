import { Link } from "react-router-dom";
import { coverOf } from "../data/spaces.js";

// A compact, scannable row for a space: photo, name, one-line summary, size and floor.
export default function SpaceRow({ space }) {
  const cover = coverOf(space);
  const floor = space.basics?.find((b) => b.label === "Floor")?.value;
  return (
    <Link to={`/spaces/${space.slug}`} className="row">
      <img className="row__img" src={cover.thumb || cover.src} alt={cover.alt} loading="lazy" />
      <div className="row__main">
        <h3 className="h3">{space.name}</h3>
        {space.summary && <p className="row__text">{space.summary}</p>}
        {space.features?.length > 0 && (
          <div className="chips">
            {space.features.slice(0, 3).map((f) => (
              <span key={f} className="chip">
                {f}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="row__meta">
        {space.sqft && <span className="row__size">{space.sqft} sq ft</span>}
        {floor && <span className="muted small-strong">{floor}</span>}
        <span className="row__go">View &rarr;</span>
      </div>
    </Link>
  );
}
