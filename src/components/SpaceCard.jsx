import { Link } from "react-router-dom";
import { coverOf } from "../data/spaces.js";

export default function SpaceCard({ space, showTags = true }) {
  const cover = coverOf(space);
  return (
    <Link to={`/spaces/${space.slug}`} className="card">
      <img
        className="card__img"
        src={cover.thumb || cover.src}
        alt={cover.alt}
        loading="lazy"
      />
      <div className="card__head">
        <h3 className="h3">{space.name}</h3>
        {space.sqft && <span className="muted small-strong">{space.sqft} sq ft</span>}
      </div>
      {space.summary && <p className="card__text">{space.summary}</p>}
      {showTags && space.popularFor?.length > 0 && (
        <div className="chips">
          {space.popularFor.slice(0, 3).map((u) => (
            <span key={u} className="chip">
              {u}
            </span>
          ))}
        </div>
      )}
      <span className="text-link">explore {space.name.toLowerCase()} &raquo;</span>
    </Link>
  );
}
