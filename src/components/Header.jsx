import { useState } from "react";
import { siteConfig } from "../data/siteConfig.js";

const navLinks = [
  { label: "Job Categories", href: "#jobs" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Request Manpower", href: "#manpower" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__bar">
        <a href="#top" className="brand">
          <span className="brand__mark">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="9" width="8" height="6" rx="1.5" fill="#FFB800" />
              <rect x="14" y="9" width="8" height="6" rx="1.5" fill="#FFB800" />
              <rect x="9" y="10.5" width="6" height="3" fill="#FFB800" />
            </svg>
          </span>
          <span className="brand__copy">
            <span className="brand__name">
              {siteConfig.companyName.split(" ")[0]}{" "}
              <span className="accent">{siteConfig.companyName.split(" ")[1]}</span>
            </span>
            <span className="brand__descriptor">Recruitment &amp; Staffing</span>
          </span>
        </a>

        <nav className="nav" aria-label="Primary">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="header__actions">
          <a href={`tel:${siteConfig.phoneLink}`} className="header__phone header__phone-desktop">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z"/></svg>
            {siteConfig.phoneDisplay}
          </a>
          <a href={`tel:${siteConfig.phoneLink}`} className="header__call-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.7L7.1 10.3a16 16 0 0 0 6 6l1.9-1.9a2 2 0 0 1 1.7-.6l3 .5a2 2 0 0 1 2.3 2.6Z" />
            </svg>
            <span>Call Now</span>
          </a>
          <button
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
            )}
          </button>
        </div>
      </div>

      <nav id="mobile-navigation" className={`mobile-nav ${open ? "open" : ""}`} aria-label="Mobile">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a className="mobile-nav__call" href={`tel:${siteConfig.phoneLink}`} onClick={() => setOpen(false)}>
          Call {siteConfig.phoneDisplay}
        </a>
      </nav>
    </header>
  );
}
