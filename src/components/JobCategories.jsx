import { placementCategories } from "../data/content.js";
import { emailLink, siteConfig, whatsappLink } from "../data/siteConfig.js";

export default function JobCategories() {
  return (
    <section className="section" id="jobs">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What We Place</span>
          <h2>Every role, every floor, every shift</h2>
          <p>
            From the shop floor to the back office — we recruit across all
            skill levels and engagement types. Tell us what you're looking for
            and we'll match you within days.
          </p>
        </div>

        <div className="cat-grid">
          {placementCategories.map((cat) => (
            <article key={cat.title} className="cat-card">
              <h3>{cat.title}</h3>
              <p className="cat-card__desc">{cat.desc}</p>
              <span className="cat-card__highlight">{cat.highlight}</span>
              <div className="cat-card__actions">
                <a
                  className="cat-card__cta cat-card__cta--whatsapp"
                  href={whatsappLink(`Hi, I'm looking for a ${cat.title} role. Can you help?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20Zm4.4-6c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.5.1l-.8.9c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.3-.4.3-.4.8-1.3.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3a2.4 2.4 0 0 0-.8 1.8c0 1 .7 2 1 2.4.1.1 1.5 2.4 3.8 3.3 1.4.6 2 .6 2.7.5.4 0 1.4-.6 1.6-1.2.2-.6.2-1 .1-1.1-.1-.1-.2-.2-.5-.3Z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
                <a
                  className="cat-card__cta cat-card__cta--email"
                  href={emailLink(
                    `Enquiry about ${cat.title}`,
                    `Hello ${siteConfig.companyName},\n\nI'm looking for a ${cat.title} role. Can you help?\n\n`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                  <span>Email</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
