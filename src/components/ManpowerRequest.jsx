import { useState } from "react";
import { emailLink, whatsappLink } from "../data/siteConfig.js";
import Icon from "./Icon.jsx";

const ROLE_OPTIONS = [
  "Helper / General Labour",
  "Machine Operator",
  "Skilled Technician (Electrician / Welder / Fitter)",
  "Warehouse & Logistics Staff",
  "Office & Back-Office Staff",
  "Supervisor / Team Lead",
  "Security Guard",
  "Housekeeping / Facility Staff",
  "Driver",
  "Other (specify in message)",
];

const URGENCY_OPTIONS = [
  "Immediately (within 3 days)",
  "Within 1 week",
  "Within 2 weeks",
  "Within a month",
  "Planning ahead",
];

const TYPE_OPTIONS = [
  "Permanent / Full-time",
  "Temporary / Contractual",
  "Temp-to-Hire",
  "Daily Wage",
  "On-call / Seasonal",
];

const WHY = [
  { icon: "fast", title: "Fast Deployment", desc: "First batch of candidates shared within 24–48 hrs of your request." },
  { icon: "verified", title: "Pre-Verified Profiles", desc: "ID, address & reference checks done before anyone reaches your floor." },
  { icon: "replacement", title: "Replacement Guarantee", desc: "Free replacement within the joining period if a candidate doesn't work out." },
  { icon: "phone", title: "Single Point of Contact", desc: "One dedicated account manager — no call centres, no runaround." },
];

export default function ManpowerRequest() {
  const [form, setForm] = useState({
    company: "",
    contact: "",
    phone: "",
    role: "",
    count: "",
    engagementType: "",
    location: "",
    urgency: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const msg =
      `*Manpower Request — ${form.company}*\n\n` +
      `Contact Person: ${form.contact}\n` +
      `Phone: ${form.phone}\n` +
      `Role Required: ${form.role}\n` +
      `No. of People: ${form.count}\n` +
      `Engagement Type: ${form.engagementType}\n` +
      `Work Location: ${form.location}\n` +
      `When Needed: ${form.urgency}\n` +
      `Additional Notes: ${form.notes || "—"}`;

    if (e.nativeEvent.submitter?.value === "email") {
      const body = msg.replaceAll("*", "");
      window.open(emailLink(`Manpower request from ${form.company}`, body), "_blank", "noopener,noreferrer");
      return;
    }

    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <section className="section mpx" id="manpower">
      <div className="container">

        {/* ── Section header ── */}
        <div className="section-head section-head--center">
          <span className="eyebrow">For Companies</span>
          <h2>Request Manpower</h2>
          <p>
            Tell us exactly who you need and how many — we'll have verified
            candidates at your door faster than any job portal.
          </p>
        </div>

        {/* ── Why us strip ── */}
        <div className="mpx__why">
          {WHY.map((w) => (
            <div className="mpx__why-item" key={w.title}>
              <span className="mpx__why-icon">
                <Icon name={w.icon} />
              </span>
              <div>
                <strong>{w.title}</strong>
                <p>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Request form ── */}
        <div className="mpx__body">
          <div className="mpx__intro">
            <h3>Fill the request form</h3>
            <p>
              Share your requirement below. We'll review it and call you back
              within a few hours. No commitment required at this stage.
            </p>
            <ul className="mpx__checklist">
              <li>Free to submit — no charges for enquiries</li>
              <li>Candidates sourced from our active database</li>
              <li>Bulk orders of 5 to 500+ handled</li>
              <li>Available across Punjab &amp; nearby states</li>
            </ul>
          </div>

          <div className="mpx__form-wrap">
            {submitted ? (
              <div className="form-success mpx__success">
                <Icon name="verified" size={28} className="mpx__success-icon" />
                <div>
                  <strong>Request sent!</strong>
                  <p>
                    WhatsApp should have opened with your details pre-filled. Hit
                    send there and our team will call you back shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form className="mpx__form" onSubmit={handleSubmit}>
                {/* Company info */}
                <div className="mpx__form-section-label">Company Details</div>
                <div className="form-two">
                  <div className="form-row">
                    <label htmlFor="mp-company">Company name *</label>
                    <input
                      id="mp-company" name="company" required
                      value={form.company} onChange={handleChange}
                      placeholder="e.g. Ramesh Industries Pvt. Ltd."
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="mp-contact">Contact person *</label>
                    <input
                      id="mp-contact" name="contact" required
                      value={form.contact} onChange={handleChange}
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label htmlFor="mp-phone">Mobile number *</label>
                  <input
                    id="mp-phone" name="phone" required
                    value={form.phone} onChange={handleChange}
                    placeholder="10-digit number we can call / WhatsApp"
                  />
                </div>

                {/* Requirement */}
                <div className="mpx__form-section-label" style={{ marginTop: 6 }}>Requirement Details</div>
                <div className="form-two">
                  <div className="form-row">
                    <label htmlFor="mp-role">Role required *</label>
                    <select
                      id="mp-role" name="role" required
                      value={form.role} onChange={handleChange}
                    >
                      <option value="">— Select role —</option>
                      {ROLE_OPTIONS.map((r) => (
                        <option key={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-row">
                    <label htmlFor="mp-count">Number of people *</label>
                    <input
                      id="mp-count" name="count" required type="number" min="1"
                      value={form.count} onChange={handleChange}
                      placeholder="e.g. 10"
                    />
                  </div>
                </div>
                <div className="form-two">
                  <div className="form-row">
                    <label htmlFor="mp-type">Engagement type *</label>
                    <select
                      id="mp-type" name="engagementType" required
                      value={form.engagementType} onChange={handleChange}
                    >
                      <option value="">— Select type —</option>
                      {TYPE_OPTIONS.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-row">
                    <label htmlFor="mp-urgency">When do you need them? *</label>
                    <select
                      id="mp-urgency" name="urgency" required
                      value={form.urgency} onChange={handleChange}
                    >
                      <option value="">— Select timeline —</option>
                      {URGENCY_OPTIONS.map((u) => (
                        <option key={u}>{u}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <label htmlFor="mp-location">Work location *</label>
                  <input
                    id="mp-location" name="location" required
                    value={form.location} onChange={handleChange}
                    placeholder="City / area / factory address"
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="mp-notes">Additional notes (optional)</label>
                  <textarea
                    id="mp-notes" name="notes"
                    value={form.notes} onChange={handleChange}
                    placeholder="Shift timings, specific skills, salary budget, or anything else..."
                  />
                </div>

                <div className="contact-form__actions">
                  <button type="submit" name="channel" value="whatsapp" className="btn btn-primary btn-block mpx__submit">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.5-1.8-.2-.3 0-.4.1-.6l.4-.5c.1-.1.2-.3.2-.4.1-.1 0-.3 0-.4-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.5h-.5c-.2 0-.4.1-.6.3-.2.3-.8.8-.8 1.9s.8 2.2.9 2.4c.1.1 1.7 2.6 4.1 3.6.6.2 1 .4 1.4.5.6.2 1.1.1 1.5.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.6 1.4 5.1L2 22l5.1-1.3C8.5 21.5 10.2 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                    </svg>
                    Send Request via WhatsApp
                  </button>
                  <button type="submit" name="channel" value="email" className="btn btn-outline btn-block mpx__submit">
                    Send Request via Email
                  </button>
                </div>
                <p className="form-note" style={{ textAlign: "center", marginTop: 10 }}>
                  Choose WhatsApp or email to send your request. Nothing is stored on this site.
                </p>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
