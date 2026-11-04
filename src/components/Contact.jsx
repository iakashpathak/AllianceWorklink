import { useState } from "react";
import { emailLink, siteConfig, whatsappLink } from "../data/siteConfig.js";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", type: "Looking for a job", message: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const msg = `New enquiry from the website:\n\nName: ${form.name}\nPhone: ${form.phone}\nEnquiry type: ${form.type}\nMessage: ${form.message || "—"}`;

    if (e.nativeEvent.submitter?.value === "email") {
      const subject = `Website enquiry from ${form.name}`;
      const body = `Name: ${form.name}\nPhone: ${form.phone}\nEnquiry type: ${form.type}\nMessage: ${form.message || "—"}`;
      window.open(emailLink(subject, body), "_blank", "noopener,noreferrer");
      return;
    }

    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Get In Touch</span>
          <h2>Talk to us today</h2>
          <p>
            Whether you are looking for work or hiring a team, we are ready to
            help. Choose the contact method that works best for you.
          </p>
        </div>

        <div className="contact__inner">
          <div className="contact-card contact-card--details">
            <span className="contact-card__eyebrow">Contact details</span>
            <h3>We’re here to help</h3>
            <p className="contact-card__intro">
              Speak with our team directly by phone, WhatsApp, or email.
            </p>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <span className="contact-info-item__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z"/></svg>
                </span>
                <div>
                  <div className="label">Phone</div>
                  <div className="value"><a href={`tel:${siteConfig.phoneLink}`}>{siteConfig.phoneDisplay}</a></div>
                </div>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-item__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.5-1.8-.2-.3 0-.4.1-.6l.4-.5c.1-.1.2-.3.2-.4.1-.1 0-.3 0-.4-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.5h-.5c-.2 0-.4.1-.6.3-.2.3-.8.8-.8 1.9s.8 2.2.9 2.4c.1.1 1.7 2.6 4.1 3.6.6.2 1 .4 1.4.5.6.2 1.1.1 1.5.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.6 1.4 5.1L2 22l5.1-1.3C8.5 21.5 10.2 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
                </span>
                <div>
                  <div className="label">WhatsApp</div>
                  <div className="value">
                    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">{siteConfig.phoneDisplay}</a>
                  </div>
                </div>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-item__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </span>
                <div>
                  <div className="label">Email</div>
                  <div className="value">
                    <a href={emailLink()} target="_blank" rel="noopener noreferrer">{siteConfig.email}</a>
                  </div>
                </div>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-item__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z"/></svg>
                </span>
                <div>
                  <div className="label">Office</div>
                  <div className="value">{siteConfig.address.line1}<br />{siteConfig.address.line2}</div>
                </div>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-item__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 10.6l4 2.4-.8 1.3-4.7-2.8V6.5h1.5v6.1z"/></svg>
                </span>
                <div>
                  <div className="label">Office Hours</div>
                  <div className="value">{siteConfig.officeHours}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-card contact-card--form">
            <span className="contact-card__eyebrow">Send us a message</span>
            <h3>How can we help?</h3>
            <p className="contact-card__intro">
              Share a few details and send your enquiry by WhatsApp or email.
            </p>
            {submitted ? (
              <div className="form-success" style={{ marginTop: 20 }}>
                Thanks — WhatsApp should have opened with your details filled in. Just hit send there and we'll reply shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
                <div className="form-two">
                  <div className="form-row">
                    <label htmlFor="name">Full name</label>
                    <input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Your name" />
                  </div>
                  <div className="form-row">
                    <label htmlFor="phone">Phone number</label>
                    <input id="phone" name="phone" required value={form.phone} onChange={handleChange} placeholder="10-digit mobile number" />
                  </div>
                </div>
                <div className="form-row">
                  <label htmlFor="type">I am</label>
                  <select id="type" name="type" value={form.type} onChange={handleChange}>
                    <option>Looking for a job</option>
                    <option>Hiring for my company</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div className="form-row">
                  <label htmlFor="message">Message (optional)</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell us what you're looking for..." />
                </div>
                <div className="contact-form__actions">
                  <button type="submit" name="channel" value="whatsapp" className="btn btn-primary btn-block">Send via WhatsApp</button>
                  <button type="submit" name="channel" value="email" className="btn btn-outline btn-block">Send via Email</button>
                </div>
                <p className="form-note">Choose WhatsApp or email to send your enquiry with the details above.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
