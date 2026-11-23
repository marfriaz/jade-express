import { Link } from "react-router-dom";

// Phone/tablet-only bar fixed to the bottom of the screen; slides up once the visitor scrolls past the intro.
export default function StickyBar({ space, visible }) {
  const name = space.name.replace(/^The /, "the ");
  return (
    <div className={"sticky-bar" + (visible ? " sticky-bar--on" : "")} aria-hidden={!visible}>
      <Link
        to={`/contact?space=${space.slug}`}
        className="sticky-bar__link"
        tabIndex={visible ? 0 : -1}
      >
        inquire about {name}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </Link>
    </div>
  );
}
