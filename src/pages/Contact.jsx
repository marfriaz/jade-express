import site from "../data/site.js";
import InquiryForm from "../components/InquiryForm.jsx";

export default function Contact() {
  return (
    <section className="section section--page">
      <div className="container">
        <div className="panel">
          <div className="stack">
            <h1 className="h1 h1--panel">let's make something happen.</h1>
            <p className="light-muted lead">
              Looking for a space? Tell us what you have in mind and we'll be in touch.
            </p>
            {site.email && (
              <a className="text-link" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            )}
            {site.phone && (
              <a className="text-link" href={`tel:${site.phone}`}>
                {site.phone}
              </a>
            )}
          </div>
          <InquiryForm dark />
        </div>
      </div>
    </section>
  );
}
