/*
 * Plitkalar uchun "3D" ikonalar — gradient, qalinlik (orqa qatlam) va yaltiroq chiziq bilan.
 * Har bir ikonaning id'lari prefiksli, sahifada bir martadan ishlatiladi.
 */

export const Ticket3D = () => (
  <svg viewBox="0 0 80 80" aria-hidden="true">
    <defs>
      <linearGradient id="tk-face" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffc4cf" />
        <stop offset=".55" stopColor="#ff8fa6" />
        <stop offset="1" stopColor="#ff6f8c" />
      </linearGradient>
      <mask id="tk-cut">
        <rect width="80" height="80" fill="#fff" />
        <circle cx="16" cy="34" r="5" fill="#000" />
        <circle cx="64" cy="34" r="5" fill="#000" />
      </mask>
    </defs>
    <g transform="rotate(-24 40 40)">
      {/* qalinlik */}
      <rect x="19" y="9" width="46" height="66" rx="9" fill="#e5506f" mask="url(#tk-cut)" />
      {/* yuz */}
      <rect x="16" y="6" width="46" height="66" rx="9" fill="url(#tk-face)" mask="url(#tk-cut)" />
      <path d="M23 34h32" stroke="#fff" strokeOpacity=".55" strokeWidth="2" strokeDasharray="3 4" strokeLinecap="round" />
      <rect x="20" y="10" width="5" height="20" rx="2.5" fill="#fff" opacity=".45" />
      {/* % belgisi */}
      <g fill="none" stroke="#fff" strokeWidth="4.2" strokeLinecap="round">
        <path d="M32 63 47 43" />
        <circle cx="33.5" cy="46" r="3.6" />
        <circle cx="45.5" cy="60" r="3.6" />
      </g>
    </g>
  </svg>
)

export const Bag3D = () => (
  <svg viewBox="0 0 80 80" aria-hidden="true">
    <defs>
      <linearGradient id="bg-face" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#a8ec6c" />
        <stop offset=".5" stopColor="#6fd645" />
        <stop offset="1" stopColor="#3fb52c" />
      </linearGradient>
    </defs>
    <g transform="rotate(-8 40 44)">
      {/* tutqich */}
      <path d="M29 30v-6a11 11 0 0 1 22 0v6" fill="none" stroke="#3aa52a" strokeWidth="4.5" strokeLinecap="round" />
      {/* qalinlik */}
      <path d="M17 30h48l-3.5 40a7 7 0 0 1-7 6.4H27.5a7 7 0 0 1-7-6.4z" fill="#2f9a22" transform="translate(3 2)" />
      {/* yuz */}
      <path d="M15 28h48l-3.5 40a7 7 0 0 1-7 6.4H25.5a7 7 0 0 1-7-6.4z" fill="url(#bg-face)" />
      <path d="M19 32h4l-1.8 32" stroke="#fff" strokeOpacity=".45" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* savatcha */}
      <g fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M27 41h4l3.6 15h15.6l3-11H33" />
      </g>
      <circle cx="36" cy="62" r="2.6" fill="#fff" />
      <circle cx="48" cy="62" r="2.6" fill="#fff" />
    </g>
  </svg>
)

export const Check3D = () => (
  <svg viewBox="0 0 80 80" aria-hidden="true">
    <defs>
      <linearGradient id="ck-face" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffd27a" />
        <stop offset=".5" stopColor="#ffab3d" />
        <stop offset="1" stopColor="#ff8a12" />
      </linearGradient>
    </defs>
    <path d="M14 46 31 61 70 24" fill="none" stroke="#e9730a" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" transform="translate(3 4)" />
    <path d="M14 46 31 61 70 24" fill="none" stroke="url(#ck-face)" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 43.5 30 57" fill="none" stroke="#fff" strokeOpacity=".5" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
)

export const Coin = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" className="coin">
    <circle cx="10" cy="10" r="10" fill="#21b04b" />
    <path d="M10 4.2c.6 3.1 1.9 4.4 5 5-3.1.6-4.4 1.9-5 5-.6-3.1-1.9-4.4-5-5 3.1-.6 4.4-1.9 5-5z" fill="#fff" />
  </svg>
)

export const LockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4.5" y="10" width="15" height="11" rx="3" fill="#c4c5c9" />
    <path d="M8 10V7.5a4 4 0 0 1 8 0V10" fill="none" stroke="#c4c5c9" strokeWidth="2.4" />
    <rect x="11" y="13.5" width="2" height="4" rx="1" fill="#f2f2f3" />
  </svg>
)

export const InfoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
    <circle cx="8" cy="8" r="7" fill="currentColor" opacity=".45" />
    <rect x="7.1" y="7" width="1.8" height="5" rx=".9" fill="#fff" />
    <circle cx="8" cy="4.8" r="1.1" fill="#fff" />
  </svg>
)
