import { emailLink, siteConfig, whatsappLink } from "../data/siteConfig.js";
import { stats } from "../data/content.js";

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Register",
    desc: "Share your skills & preferred role — takes 5 minutes on WhatsApp.",
  },
  {
    step: "02",
    title: "Get Matched",
    desc: "We shortlist live vacancies that fit your skills, location & salary.",
  },
  {
    step: "03",
    title: "Start Working",
    desc: "Walk in with your offer letter. Most placements happen within 3–5 days.",
  },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid" />
      <div className="container">
        <div className="hero__inner">
          <div>
            <span className="hero__eyebrow">Free to apply · Verified employers</span>
            <h1>
              Every job,<br />
              <span className="line2">one link.</span>
            </h1>
            <p className="hero__sub">
              {siteConfig.companyName} connects job seekers with verified roles
              and helps businesses hire dependable staff across manufacturing,
              warehousing, and office teams. Applying is free.
            </p>
            <div className="hero__cta">
              <a href="#jobs" className="btn btn-primary">Find a Job</a>
              <a
                href={whatsappLink("Hi, I'm an employer and I'd like to hire staff.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                Hire via WhatsApp
              </a>
              <a
                href={emailLink("Staff hiring enquiry", `Hello ${siteConfig.companyName},\n\nI'm hiring staff and would like to discuss my requirements.\n\n`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                Hire via Email
              </a>
            </div>

            <div className="hero__stats">
              {stats.map((s) => (
                <div className="hero__stat" key={s.label}>
                  <div className="num">{s.value}</div>
                  <div className="label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Permanent "How It Works" panel ── */}
          <div className="hero__panel">
            <div className="hero__panel-tag">How It Works</div>
            <h3>Placed in 3 Steps</h3>

            <div className="hero__steps">
              {HOW_IT_WORKS.map((item) => (
                <div className="hero__step" key={item.step}>
                  <span className="hero__step-num">{item.step}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="hero__panel-actions">
              <a
                href={whatsappLink("Hi, I want to register for a job.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__panel-btn"
              >
                Register via WhatsApp
              </a>
              <a
                href={emailLink("Job registration enquiry", `Hello ${siteConfig.companyName},\n\nI want to register for a job. Please let me know the next steps.\n\n`)}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__panel-btn hero__panel-btn--email"
              >
                Register via Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
