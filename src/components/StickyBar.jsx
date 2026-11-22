import { Link } from "react-router-dom";

// Mobile-only bar that slides up once the visitor scrolls past the hero buttons.
export default function StickyBar({ space, visible }) {
  return (
    <div className={"sticky-bar" + (visible ? " sticky-bar--on" : "")} aria-hidden={!visible}>
      <div className="sticky-bar__price">
        <span className="small-strong sticky-bar__label">{space.price ? "starting at" : "pricing"}</span>
        <span className="sticky-bar__amount">{space.price || "request a quote"}</span>
      </div>
      <Link
        to={`/contact?space=${space.slug}`}
        className="btn btn--light"
        tabIndex={visible ? 0 : -1}
      >
        inquire
      </Link>
    </div>
  );
}
