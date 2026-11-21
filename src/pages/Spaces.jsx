import { Link, useSearchParams } from "react-router-dom";
import site from "../data/site.js";
import { spaces } from "../data/spaces.js";
import SpaceCard from "../components/SpaceCard.jsx";

const filters = [
  { key: "", label: "All spaces" },
  { key: "workspace", label: "Workspaces" },
  { key: "events", label: "Events & productions" },
];

export default function Spaces() {
  const [params, setParams] = useSearchParams();
  const use = params.get("use") || "";
  const list = use ? spaces.filter((s) => s.uses.includes(use)) : spaces;

  function pick(key) {
    if (key) setParams({ use: key });
    else setParams({});
  }

  return (
    <section className="section section--page">
      <div className="container stack stack--xl">
        <div className="stack">
          <h1 className="h1">spaces.</h1>
          <p className="lead muted">
            Studios, offices, and event spaces on the Wilson &amp; Bay campus.
          </p>
        </div>

        <div className="tabs" role="group" aria-label="Filter spaces">
          {filters.map((f) => (
            <button
              key={f.key || "all"}
              type="button"
              aria-pressed={use === f.key}
              className={"tab" + (use === f.key ? " tab--on" : "")}
              onClick={() => pick(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <SpaceInfo use={use} pick={pick} />

        <div className="cards">
          {list.map((s) => (
            <SpaceCard key={s.slug} space={s} />
          ))}
        </div>

        <div className="center">
          <Link to="/contact?type=visit" className="btn btn--primary btn--wide">
            Book a visit
          </Link>
        </div>
      </div>
    </section>
  );
}

// Explains what "Workspaces" and "Events & productions" mean, so visitors know which to pick.
function SpaceInfo({ use, pick }) {
  const { workspace, events } = site.spaceTypes;

  if (!use) {
    return (
      <div className="spaceinfo">
        {[
          ["workspace", workspace, "See workspaces"],
          ["events", events, "See event spaces"],
        ].map(([key, t, cta]) => (
          <div className="spaceinfo__card" key={key}>
            <span className="label">{t.kind}</span>
            <h2 className="h2 h2--md">{t.label}</h2>
            <p className="spaceinfo__text">{t.text}</p>
            <button type="button" className="text-link text-link--caps spaceinfo__link" onClick={() => pick(key)}>
              {cta} &rarr;
            </button>
          </div>
        ))}
      </div>
    );
  }

  if (use === "workspace") {
    return (
      <div className="spaceinfo spaceinfo--one">
        <div className="spaceinfo__card">
          <span className="label">{workspace.kind}</span>
          <h2 className="h2 h2--md">{workspace.title}</h2>
          <p className="spaceinfo__text">{workspace.text}</p>
          <dl className="facts-list">
            {site.leasing.facts.map((f) => (
              <div key={f.label} className="facts-list__row">
                <dt className="label">{f.label}</dt>
                <dd>{f.text}</dd>
              </div>
            ))}
          </dl>
          <div className="btn-row">
            <Link to="/contact?type=visit" className="btn btn--primary">
              Book a visit
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (use === "events") {
    return (
      <div className="spaceinfo spaceinfo--one">
        <div className="spaceinfo__card">
          <span className="label">{events.kind}</span>
          <h2 className="h2 h2--md">{events.title}</h2>
          <p className="spaceinfo__text">{events.text}</p>
          <div className="btn-row">
            <Link to="/contact" className="btn btn--primary">
              Request a booking
            </Link>
            {site.peerspaceUrl && (
              <a className="btn" href={site.peerspaceUrl} target="_blank" rel="noreferrer">
                Also on Peerspace
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
