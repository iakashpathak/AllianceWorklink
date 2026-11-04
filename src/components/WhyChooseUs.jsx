import { whyUs } from "../data/content.js";

export default function WhyChooseUs() {
  return (
    <section className="section why-us" id="why-us">
      <div className="container">
        <div className="why-us__header">
          <div className="section-head">
            <span className="eyebrow">Why Alliance Worklink</span>
            <h2>Built for people who need work, and companies that need workers</h2>
          </div>
          <div className="why-us__credential">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2.5 19 5v6.2c0 4.5-2.9 8.3-7 10.3-4.1-2-7-5.8-7-10.3V5l7-2.5Z" />
              <path d="m8.8 11.8 2.1 2.1 4.5-4.6" />
            </svg>
            <span>MSME Certified</span>
          </div>
        </div>

        <div className="why-grid">
          {whyUs.map((w, i) => (
            <div className="why-card" key={w.title}>
              <span className="idx">0{i + 1}</span>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
