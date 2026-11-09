export const SearchIcon = (p) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}>
    <circle cx="10.2" cy="10.2" r="7.4" stroke="currentColor" strokeWidth="2.4" />
    <path d="M15.7 15.7 21.2 21.2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
  </svg>
)

export const FilterIcon = (p) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M3.5 7.5h8.2M18.6 7.5h1.9M3.5 16.5h1.9M12.3 16.5h8.2" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
    <circle cx="15.1" cy="7.5" r="2.9" stroke="currentColor" strokeWidth="2.1" />
    <circle cx="8.9" cy="16.5" r="2.9" stroke="currentColor" strokeWidth="2.1" />
  </svg>
)

export const ChevronRight = ({ size = 18, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...p}>
    <path d="m9 5 7 7-7 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const CloseIcon = (p) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
)

export const PercentBadge = () => (
  <svg width="48" height="48" viewBox="0 0 58 58">
    <defs>
      <linearGradient id="pb" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ff7a52" />
        <stop offset="1" stopColor="#f24b2e" />
      </linearGradient>
    </defs>
    <path
      d="M29 2l5.2 4.6 6.9-1 2.6 6.4 6.4 2.6-1 6.9L53.7 29l-4.6 5.2 1 6.9-6.4 2.6-2.6 6.4-6.9-1L29 55.7l-5.2-4.6-6.9 1-2.6-6.4-6.4-2.6 1-6.9L4.3 29l4.6-5.2-1-6.9 6.4-2.6 2.6-6.4 6.9 1z"
      fill="url(#pb)"
    />
    <text x="29" y="37.5" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="24" fill="#fff">%</text>
  </svg>
)

/*
 * MagicMenu logotipi: qizil nuqta + ko'k "m", ichida vilka va qoshiq (manfiy bo'shliq).
 * Koordinatalar asl 1024px logotipdan olingan.
 */
export const LOGO_BLUE = '#03a9f4'
export const LOGO_RED = '#ff1e1e'

export const LogoMark = ({ title = 'MagicMenu', ...p }) => (
  <svg viewBox="338 418 348 186" role="img" aria-label={title} {...p}>
    <defs>
      <mask id="mm-logo-cut" maskUnits="userSpaceOnUse" x="338" y="418" width="348" height="186">
        <rect x="338" y="418" width="348" height="186" fill="#fff" />
        {/* vilka */}
        <g fill="#000">
          <rect x="474" y="468" width="7" height="72" rx="3.5" />
          <rect x="489" y="468" width="7" height="72" rx="3.5" />
          <rect x="504" y="468" width="7" height="72" rx="3.5" />
          <rect x="519" y="468" width="7" height="72" rx="3.5" />
          <path d="M474 526H526V534C526 551 513 556 513 564V604H491V564C491 556 474 551 474 534Z" />
        </g>
        {/* qoshiq */}
        <g fill="#000">
          <ellipse cx="610" cy="512" rx="27" ry="44" />
          <rect x="599" y="536" width="22" height="68" />
        </g>
      </mask>
    </defs>
    <circle cx="369" cy="574" r="27" fill={LOGO_RED} />
    <path
      mask="url(#mm-logo-cut)"
      fill={LOGO_BLUE}
      d="M418 600V427h28c8 0 13 4 16 10 14-9 34-14 58-14h88c51 0 74 28 74 66v111z"
    />
  </svg>
)

export const Logo = LogoMark
