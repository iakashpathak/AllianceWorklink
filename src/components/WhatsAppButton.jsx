import { emailLink, siteConfig, whatsappLink } from "../data/siteConfig.js";

export default function WhatsAppButton() {
  return (
    <div className="contact-float">
      <a
        href={emailLink("Website enquiry", `Hello ${siteConfig.companyName},\n\nI'd like to make an enquiry.\n\n`)}
        target="_blank"
        rel="noopener noreferrer"
        className="email-float"
        aria-label="Send us an email"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/><path d="m22 7-10 7L2 7"/></svg>
        <span className="label">Email Us</span>
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="pulse" aria-hidden="true" />
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.5-1.8-.2-.3 0-.4.1-.6l.4-.5c.1-.1.2-.3.2-.4.1-.1 0-.3 0-.4-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.5h-.5c-.2 0-.4.1-.6.3-.2.3-.8.8-.8 1.9s.8 2.2.9 2.4c.1.1 1.7 2.6 4.1 3.6.6.2 1 .4 1.4.5.6.2 1.1.1 1.5.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.6 1.4 5.1L2 22l5.1-1.3C8.5 21.5 10.2 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
        <span className="label">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
