import { industries } from "../data/content.js";

export default function Industries() {
  return (
    <section className="section section--tight" style={{ background: "var(--color-bg-alt)" }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Industries Served</span>
          <h2>Wherever your industry runs, we place people there</h2>
        </div>
        <div className="industry-chips">
          {industries.map((i) => (
            <span className="industry-chip" key={i}>{i}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
