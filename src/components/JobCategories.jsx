import { placementCategories } from "../data/content.js";
import { whatsappLink } from "../data/siteConfig.js";

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
            <a
              key={cat.title}
              className="cat-card"
              href={whatsappLink(`Hi, I'm looking for a ${cat.title} role. Can you help?`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="cat-card__icon">{cat.icon}</span>
              <h3>{cat.title}</h3>
              <p className="cat-card__desc">{cat.desc}</p>
              <span className="cat-card__highlight">{cat.highlight}</span>
              <span className="cat-card__cta">Enquire on WhatsApp →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
