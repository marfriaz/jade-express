import { useEffect, useLayoutEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import site from "../data/site.js";

const links = [
  { to: "/workspaces", label: "Workspaces" },
  { to: "/events", label: "Events & Productions" },
  { to: "/spaces", label: "Spaces" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // On every page change, jump straight to the top (or to the #section). The site's CSS uses smooth
  // scrolling, and on phones (iOS Safari especially) a smooth scroll gets cut short when the new
  // page's images load in, leaving the visitor stuck partway down. So switch smooth scrolling off
  // for this one jump; setting it directly works even where behavior: "instant" isn't supported.
  useLayoutEffect(() => {
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    const el = hash ? document.getElementById(hash.slice(1)) : null;
    if (el) el.scrollIntoView();
    else window.scrollTo(0, 0);
    root.style.scrollBehavior = previous;
  }, [pathname, hash]);

  return (
    <>
      <header className="header">
        <div className="container header__inner">
          <Link to="/" className="logo">
            {site.name}
          </Link>
          <nav className="nav" aria-label="Main">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to}>
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact?type=visit" className="btn btn--primary btn--sm">
              Book a visit
            </Link>
          </nav>
          <button
            type="button"
            className="menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
        {open && (
          <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to}>
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact?type=visit" className="btn btn--primary">
              Book a visit
            </Link>
          </nav>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <span className="footer__logo">{site.name}</span>
          <div className="footer__links">
            {site.instagram && (
              <a href={site.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            )}
            {site.address && (
              <a href={site.mapUrl} target="_blank" rel="noreferrer">
                {site.address}
              </a>
            )}
            {site.phone && <a href={`tel:${site.phone}`}>{site.phone}</a>}
            {site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}
          </div>
        </div>
      </footer>
    </>
  );
}
