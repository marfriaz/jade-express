import { Link, useSearchParams } from "react-router-dom";
import { spaces } from "../data/spaces.js";
import SpaceCard from "../components/SpaceCard.jsx";

const filters = [
  { key: "", label: "all spaces" },
  { key: "workspace", label: "workspaces" },
  { key: "events", label: "events & productions" },
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
            explore our creative offices, studios, and spaces for events and productions in the arts district.
          </p>
        </div>

        <div className="tabs tabs--fit" role="group" aria-label="Filter spaces">
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
            <SpaceCard key={s.slug} space={s} showTags={false} />
          ))}
        </div>

        <div className="spaces-more">
          <h2 className="h2">looking for something else?</h2>
          <p className="muted">
            additional spaces may be available. get in touch for current leasing and rental availability.
          </p>
          <Link to="/contact" className="text-link">
            get in touch &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
