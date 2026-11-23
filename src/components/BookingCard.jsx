import { useNavigate } from "react-router-dom";

export default function BookingCard({ space }) {
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const q = new URLSearchParams({ space: space.slug });
    const date = data.get("date");
    const guests = data.get("guests");
    if (date) q.set("date", String(date));
    if (guests) q.set("guests", String(guests));
    navigate(`/contact?${q.toString()}`);
  }

  return (
    <aside className="booking" aria-label="Booking">
      <div className="booking__price">
        <span className="muted small-strong">{space.price ? "starting at" : "pricing"}</span>
        <span className="booking__amount">{space.price || "request a quote"}</span>
      </div>
      <form className="form" onSubmit={onSubmit}>
        <label>
          date
          <input name="date" type="date" />
        </label>
        <label>
          guests
          <input name="guests" type="number" min="1" placeholder="how many people?" />
        </label>
        <button type="submit" className="btn btn--primary btn--block">
          inquire
        </button>
      </form>
    </aside>
  );
}
