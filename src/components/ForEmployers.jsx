import { employerPoints } from "../data/content.js";
import { siteConfig, whatsappLink } from "../data/siteConfig.js";

export default function ForEmployers() {
  return (
    <section className="section employers" id="employers">
      <div className="container">
        <div className="employers__inner">
          <div>
            <span className="eyebrow">For Employers</span>
            <h2>Need reliable staff on the floor by Monday?</h2>
            <p className="employers__sub">
              We handle sourcing, verification and scheduling so you can focus
              on production — from a single helper to a full shift roster.
            </p>
            <div className="employers__cta">
              <a href={whatsappLink("Hi, I'd like to request staff for my company.")} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Request Staff on WhatsApp
              </a>
              <a href={`tel:${siteConfig.phoneLink}`} className="btn btn-outline-light">Call {siteConfig.phoneDisplay}</a>
            </div>
          </div>

          <div className="employer-points">
            {employerPoints.map((p) => (
              <div className="employer-point" key={p.title}>
                <span className="employer-point__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                </span>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
