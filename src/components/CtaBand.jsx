import { Link } from "react-router-dom";

// Closing conversion band on the landing pages: olive background, heading, one line, one button.
export default function CtaBand({ title, text, button, to }) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <h2 className="h2 h2--md">{title}</h2>
        <p className="lead cta-band__text">{text}</p>
        <Link to={to} className="btn btn--light">
          {button} &rarr;
        </Link>
      </div>
    </section>
  );
}
