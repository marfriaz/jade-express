import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import site from "../data/site.js";
import { spaces } from "../data/spaces.js";

const interests = [
  "a workspace or studio",
  "an event or production",
  "booking a visit",
  "not sure yet",
];

export default function InquiryForm({ dark = false }) {
  const [params] = useSearchParams();
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error | mailto

  const type = params.get("type");
  const defaultInterest = type === "visit" ? "Booking a visit" : "";
  const defaultSpace = params.get("space") || "";
  const defaultDate = params.get("date") || "";
  const defaultGuests = params.get("guests") || "";

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_gotcha")) return; // spam trap

    if (site.formEndpoint) {
      setStatus("sending");
      try {
        const res = await fetch(site.formEndpoint, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        if (res.ok) {
          setStatus("sent");
          form.reset();
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
      return;
    }

    const lines = [
      `Name: ${data.get("first_name")} ${data.get("last_name")}`,
      `Email: ${data.get("email")}`,
      `Interested in: ${data.get("interest")}`,
      `Space: ${data.get("space") || "Not sure yet"}`,
      data.get("date") ? `Preferred date: ${data.get("date")}` : "",
      data.get("guests") ? `Guests: ${data.get("guests")}` : "",
      "",
      String(data.get("message") || ""),
    ].filter((l, i, arr) => l !== "" || i === arr.length - 2);
    window.location.href =
      `mailto:${site.email}?subject=${encodeURIComponent(
        `Inquiry for ${data.get("space") || "Wilson & Bay"} - ${data.get("first_name")} ${data.get("last_name")}`
      )}` +
      `&body=${encodeURIComponent(lines.join("\n"))}`;
    setStatus("mailto");
  }

  return (
    <form className={"form" + (dark ? " form--dark" : "")} onSubmit={onSubmit}>
      <div className="form__row">
        <label>
          first name
          <input name="first_name" type="text" required autoComplete="given-name" />
        </label>
        <label>
          last name
          <input name="last_name" type="text" required autoComplete="family-name" />
        </label>
      </div>
      <label>
        email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <div className="form__row">
        <label>
          what are you interested in?
          <select name="interest" required defaultValue={defaultInterest}>
            <option value="" disabled>
              select an option
            </option>
            {interests.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </label>
        <label>
          which space?
          <select name="space" defaultValue={defaultSpace}>
            <option value="">not sure yet</option>
            {spaces.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="form__row">
        <label>
          preferred date (optional)
          <input name="date" type="date" defaultValue={defaultDate} />
        </label>
        <label>
          guests (optional)
          <input name="guests" type="number" min="1" defaultValue={defaultGuests} />
        </label>
      </div>
      <label>
        tell us a bit more
        <textarea
          name="message"
          rows="4"
          required
          placeholder="what kind of space are you looking for? any dates, size requirements, or other details?"
        />
      </label>
      <input
        type="text"
        name="_gotcha"
        tabIndex="-1"
        autoComplete="off"
        className="visually-hidden"
        aria-hidden="true"
      />
      <div>
        <button type="submit" className={"btn " + (dark ? "btn--light" : "btn--primary")} disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send inquiry →"}
        </button>
      </div>
      <p className="form__status" role="status" aria-live="polite">
        {status === "sent" && "Thanks! We got your message and will be in touch."}
        {status === "error" && "Something went wrong. Please try again, or email us directly."}
        {status === "mailto" && "Opening your email app. If nothing opens, email us directly."}
      </p>
    </form>
  );
}
