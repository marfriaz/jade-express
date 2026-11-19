import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section section--page">
      <div className="container stack stack--lg">
        <h1 className="h1">page not found.</h1>
        <p className="lead muted">That page doesn't exist, or the space has moved.</p>
        <div>
          <Link to="/spaces" className="btn btn--primary">
            View all spaces
          </Link>
        </div>
      </div>
    </section>
  );
}
