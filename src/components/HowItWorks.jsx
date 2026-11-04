import { steps } from "../data/content.js";

export default function HowItWorks() {
  return (
    <section className="section section--tight process" id="how-it-works">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The Process</span>
          <h2>From application to your first shift</h2>
          <p>A straightforward four-step process — most candidates are placed within a week.</p>
        </div>

        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <span className="n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
