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
  const [draft, setDraft] = useState(""); // the email text, kept so it can be copied if no mail app opens
  const [copied, setCopied] = useState(false);

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draft);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = draft;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        /* nothing more to try */
      }
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const type = params.get("type");
  // ?type= preselects "what are you interested in?" (workspace / events from the landing pages).
  const defaultInterest =
    { visit: "booking a visit", workspace: "a workspace or studio", events: "an event or production" }[type] || "";
  // `?space=` carries a space's slug (e.g. "the-loft"); the form's options are the space names.
  const spaceParam = params.get("space") || "";
  const defaultSpace =
    spaces.find((s) => s.slug === spaceParam || s.name === spaceParam)?.name || "";
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
    const subject = `Inquiry for ${data.get("space") || "Wilson & Bay"} - ${data.get("first_name")} ${data.get("last_name")}`;
    const body = lines.join("\n");
    setDraft(`To: ${site.email}\nSubject: ${subject}\n\n${body}`);
    setCopied(false);
    window.location.href =
      `mailto:${site.email}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
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
        {status === "mailto" && (
          <>
            <span>Opening your email app. If nothing opens, email us directly.</span>
            <button type="button" className="form__copy" onClick={copyDraft}>
              {copied ? "copied" : "copy"}
            </button>
          </>
        )}
      </p>
    </form>
  );
}
