import { useEffect, useRef } from "react";
import site from "../data/site.js";

// Privacy policy popup, opened from the footer. Plain draft text: have it reviewed before relying on it.
export default function PrivacyPolicy({ open, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className="policy"
      aria-labelledby="policy-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      <div className="policy__inner">
        <div className="policy__head">
          <h2 id="policy-title" className="h2 h2--lg">privacy policy</h2>
          <button type="button" className="policy__close" onClick={onClose} aria-label="Close privacy policy">
            &times;
          </button>
        </div>
        <div className="policy__body">
          <p className="muted small">last updated: {new Date().getFullYear()}</p>
          <h3>what we collect</h3>
          <p>
            when you send an inquiry through this site, we collect the details you enter: your name, email
            address, the space you are interested in, an optional date and guest count, and your message.
          </p>
          <h3>how we use it</h3>
          <p>
            we use this information only to reply to your inquiry and to arrange visits, bookings or leases.
            we do not sell your information or use it for unrelated marketing.
          </p>
          <h3>third-party content</h3>
          <p>
            this site may show embedded content from other services, such as Instagram posts and maps. those
            services may set their own cookies or collect data under their own privacy policies.
          </p>
          <h3>sharing</h3>
          <p>
            we share your information only with service providers that help us run the site and receive your
            inquiries (for example, form and email services), or when required by law.
          </p>
          <h3>your choices</h3>
          <p>
            you can ask us to access, correct or delete the information you sent us at any time.
          </p>
          <h3>contact</h3>
          <p>
            questions about this policy? email <a className="text-link" href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </div>
    </dialog>
  );
}
