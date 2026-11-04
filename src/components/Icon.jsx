const iconPaths = {
  factory: (
    <>
      <path d="M3 21h18M5 21V10l5 4v-4l5 4V7h4v14M14 7V3h4v4" />
    </>
  ),
  tools: (
    <>
      <path d="m14.5 6.5 3 3M5 21l8.4-8.4M7.5 18.5l-2 2M14 4l2-2 5 5-2 2M12.5 10.5l-4-4a4 4 0 0 1 5-5l-2 2 3 3 2-2a4 4 0 0 1-4 6Z" />
    </>
  ),
  machine: (
    <>
      <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
      <path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.8 1l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.8-1l-1.7.7-1.4-2.4 1.4-1.1a7 7 0 0 1 0-2l-1.4-1.1 1.4-2.4 1.7.7a8 8 0 0 1 1.8-1l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.8 1l1.7-.7 1.4 2.4-1.4 1.1a7 7 0 0 1 0 2Z" />
    </>
  ),
  warehouse: (
    <>
      <path d="m3 10 9-7 9 7v11H3zM9 21v-6h6v6M7 11h.01M12 11h.01M17 11h.01" />
    </>
  ),
  office: (
    <>
      <path d="M3 4h18v13H3zM8 21h8M12 17v4M7 8h4M7 12h2M15 8h2M15 12h2" />
    </>
  ),
  team: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  fast: (
    <>
      <path d="m13 2-3 8h7l-6 12 1-9H6l7-11Z" />
    </>
  ),
  verified: (
    <>
      <path d="M9 12l2 2 4-4" />
      <circle cx="12" cy="12" r="9" />
    </>
  ),
  replacement: (
    <>
      <path d="M20 7v5h-5M4 17v-5h5" />
      <path d="M5.5 9a7 7 0 0 1 11.6-2L20 12M4 12l2.9 5a7 7 0 0 0 11.6-2" />
    </>
  ),
  phone: (
    <>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.7L7.1 10.3a16 16 0 0 0 6 6l1.9-1.9a2 2 0 0 1 1.7-.6l3 .5a2 2 0 0 1 2.3 2.6Z" />
    </>
  ),
};

export default function Icon({ name, size = 24, className }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
      viewBox="0 0 24 24"
      width={size}
    >
      {iconPaths[name]}
    </svg>
  );
}
