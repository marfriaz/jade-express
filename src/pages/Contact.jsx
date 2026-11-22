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
              looking for a space? tell us what you have in mind and we'll be in touch.
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
            {site.address && (
              <a className="text-link" href={site.mapUrl} target="_blank" rel="noreferrer">
                {site.address}
              </a>
            )}
            {site.instagram && (
              <a className="text-link" href={site.instagram} target="_blank" rel="noreferrer">
                {site.instagramHandle || "Instagram"}
              </a>
            )}
          </div>
          <InquiryForm dark />
        </div>
        {site.mapEmbed && (
          <div className="map">
            <iframe
              title="map of wilson & bay"
              src={site.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </section>
  );
}
