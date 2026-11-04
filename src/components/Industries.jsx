import { industries } from "../data/content.js";

export default function Industries() {
  return (
    <section className="section industries" id="industries">
      <div className="container">
        <div className="industries__header">
          <div className="section-head">
            <span className="eyebrow">Industries Served</span>
            <h2>Workforce solutions across key industries</h2>
            <p>
              Connecting dependable people with opportunities across the
              sectors that keep businesses moving.
            </p>
          </div>
          <div className="industries__count">
            <strong>{String(industries.length).padStart(2, "0")}</strong>
            <span>Industry sectors</span>
          </div>
        </div>
        <div className="industry-grid">
          {industries.map((industry, index) => (
            <div className="industry-card" key={industry}>
              <span className="industry-card__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="industry-card__name">{industry}</span>
              <span className="industry-card__mark" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
