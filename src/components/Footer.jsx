import { siteConfig } from "../data/siteConfig.js";
import { placementCategories } from "../data/content.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <a href="#top" className="brand">
              <span className="brand__mark">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="9" width="8" height="6" rx="1.5" fill="#FFB800" />
                  <rect x="14" y="9" width="8" height="6" rx="1.5" fill="#FFB800" />
                  <rect x="9" y="10.5" width="6" height="3" fill="#FFB800" />
                </svg>
              </span>
              {siteConfig.companyName}
            </a>
            <p className="footer__blurb">
              Linking helpers, operators, technicians and office staff with
              verified employers across industries — fast, transparent, and free
              to apply.
            </p>
            <div className="footer__socials">
              {/* <a href={siteConfig.socials.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.6h2.6l.4-3H13.5V8.4c0-.9.2-1.5 1.6-1.5H16.6V4.2C16.3 4.2 15.3 4 14.2 4c-2.3 0-3.9 1.4-3.9 4v2.4H7.7v3h2.6V21h3.2z"/></svg>
              </a> */}
              <a href={siteConfig.socials.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c2.7 0 3 0 4 .1 1 .1 1.7.2 2.3.5.6.2 1.1.6 1.6 1.1.5.5.8 1 1.1 1.6.2.6.4 1.3.5 2.3.1 1 .1 1.3.1 4s0 3-.1 4c-.1 1-.2 1.7-.5 2.3-.2.6-.6 1.1-1.1 1.6-.5.5-1 .8-1.6 1.1-.6.2-1.3.4-2.3.5-1 .1-1.3.1-4 .1s-3 0-4-.1c-1-.1-1.7-.2-2.3-.5-.6-.2-1.1-.6-1.6-1.1-.5-.5-.8-1-1.1-1.6-.2-.6-.4-1.3-.5-2.3-.1-1-.1-1.3-.1-4s0-3 .1-4c.1-1 .2-1.7.5-2.3.2-.6.6-1.1 1.1-1.6.5-.5 1-.8 1.6-1.1.6-.2 1.3-.4 2.3-.5 1-.1 1.3-.1 4-.1zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2A3.2 3.2 0 1112 8.8a3.2 3.2 0 010 6.4zm5.2-8.4a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"/></svg>
              </a>
              {/* <a href={siteConfig.socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.9 8.6H3.6V20h3.3V8.6zM5.3 3.4a1.9 1.9 0 100 3.8 1.9 1.9 0 000-3.8zM20.4 20h-3.3v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V20H9.5V8.6h3.2v1.6h.1c.4-.8 1.5-1.7 3.2-1.7 3.4 0 4.4 2.3 4.4 5.3V20z"/></svg>
              </a> */}
            </div>
          </div>

          <div>
            <h4>Job Categories</h4>
            <ul>
              {placementCategories.slice(0, 5).map((j) => (
                <li key={j.title}><a href="#jobs">{j.title}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#employers">For Employers</a></li>
              <li><a href="#manpower">Request Manpower</a></li>
              <li><a href="#why-us">Why Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`tel:${siteConfig.phoneLink}`}>{siteConfig.phoneDisplay}</a></li>
              <li><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
              <li>{siteConfig.address.line1}, {siteConfig.address.line2}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} {siteConfig.companyName}. All rights reserved.</span>
          <span>Built with care for people looking for work.</span>
        </div>
      </div>
    </footer>
  );
}
