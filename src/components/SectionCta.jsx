import { Link } from "react-router-dom";

// Section-level CTA ("view all spaces", "explore the gallery").
// placement="head": text link beside the section heading (desktop only).
// placement="foot": centered outlined button below the section's content (mobile only).
export default function SectionCta({ to, placement = "foot", children }) {
  if (placement === "head") {
    return (
      <Link to={to} className="text-link text-link--caps link--desktop">
        {children} &rarr;
      </Link>
    );
  }
  return (
    <div className="section-cta">
      <Link to={to} className="btn btn--sm section-cta__btn">
        {children} &rarr;
      </Link>
    </div>
  );
}
