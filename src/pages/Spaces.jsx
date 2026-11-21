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

        <SpaceInfo use={use} />

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

// A short note on what "Workspaces" and "Events & productions" mean. Kept small so the spaces stay up top.
function SpaceInfo({ use }) {
  const { workspace, events } = site.spaceTypes;
  const shown = use === "workspace" ? [workspace] : use === "events" ? [events] : [workspace, events];

  return (
    <div className={"spaceinfo" + (shown.length === 1 ? " spaceinfo--one" : "")}>
      {shown.map((t) => (
        <p className="spaceinfo__item" key={t.label}>
          <strong>
            {t.label} <span className="spaceinfo__kind">· {t.kind}</span>
          </strong>
          <span className="spaceinfo__text">{t.text}</span>
          {use && t.details && <span className="spaceinfo__details">{t.details}</span>}
        </p>
      ))}
    </div>
  );
}
