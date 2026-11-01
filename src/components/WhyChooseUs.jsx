import { whyUs } from "../data/content.js";

export default function WhyChooseUs() {
  return (
    <section className="section" id="why-us">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Why Alliance Worklink</span>
          <h2>Built for people who need work, and companies that need workers</h2>
        </div>

        <div className="why-grid">
          {whyUs.map((w, i) => (
            <div className="why-card" key={w.title}>
              <span className="idx">{String(i + 1).padStart(2, "0")}</span>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
