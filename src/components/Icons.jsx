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

export const Logo = () => (
  <svg width="44" height="44" viewBox="0 0 64 64" aria-hidden="true">
    <defs>
      <linearGradient id="logo-g" x1="0" y1="0" x2="0.8" y2="1">
        <stop offset="0" stopColor="#5fd8f8" />
        <stop offset="0.55" stopColor="#2bb4f2" />
        <stop offset="1" stopColor="#1e96ea" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="15" fill="url(#logo-g)" />
    <path d="M32 11c2.2 10.5 6.5 14.8 17 17-10.5 2.2-14.8 6.5-17 17-2.2-10.5-6.5-14.8-17-17 10.5-2.2 14.8-6.5 17-17z" fill="#fff" />
    <circle cx="48" cy="47" r="3.2" fill="#fff" opacity=".85" />
  </svg>
)
