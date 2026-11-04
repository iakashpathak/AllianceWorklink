// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to update contact details across the whole site.
// Every component reads from here — change it once, it updates
// the header, footer, WhatsApp button, and contact section.
// ─────────────────────────────────────────────────────────────

export const siteConfig = {
  companyName: "Alliance Worklink",
  shortName: "Worklink",
  tagline: "Every Job, One Link.",

  // Phone number shown to users (any readable format)
  phoneDisplay: "+91 7888598718",
  // Phone number used in tel: links — digits only, with country code
  phoneLink: "917888598718",

  // WhatsApp number — digits only, with country code, NO plus sign, NO spaces
  whatsappNumber: "917888598718",
  whatsappDefaultMessage:
    "Hi Alliance Worklink, I'd like to know more about job openings.",

  email: "allianceworklink2772004@gmail.com",

  address: {
    line1: "Industrial Area ,Sahnewal",
    line2: "Ludhiana, Punjab 141001",
    country: "India",
  },

  officeHours: "Mon – Sat, 9:30 AM – 7:00 PM",

  socials: {
    facebook: "https://facebook.com",
    instagram: "https://www.instagram.com/allianceworklink2772004/",
    linkedin: "https://linkedin.com",
  },
};

export const whatsappLink = (message) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message || siteConfig.whatsappDefaultMessage
  )}`;

export const emailLink = (subject = "Website Enquiry", body = "") =>
  `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(siteConfig.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;