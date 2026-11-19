import { Link, useSearchParams } from "react-router-dom";
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
