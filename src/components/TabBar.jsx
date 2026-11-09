import { useEffect, useState } from 'react'
import { SearchIcon } from './Icons.jsx'

/* Ikkita tonli (bulk) ikonalar — `--tone-a` asosiy, `--tone-b` ikkinchi ton */
const HomeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <defs>
      <mask id="tb-home-m">
        <rect width="24" height="24" fill="#fff" />
        <rect x="11" y="13.6" width="2" height="4.6" rx="1" fill="#000" />
      </mask>
    </defs>
    <path
      mask="url(#tb-home-m)"
      fill="var(--tone-a)"
      d="M10.55 2.9a2.3 2.3 0 0 1 2.9 0l6.6 5.35c.6.48.95 1.2.95 1.97v8.48A2.3 2.3 0 0 1 18.7 21H5.3A2.3 2.3 0 0 1 3 18.7v-8.48c0-.77.35-1.49.95-1.97z"
    />
  </svg>
)

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <defs>
      <mask id="tb-chat-m">
        <rect width="24" height="24" fill="#fff" />
        <rect x="8" y="8.4" width="8" height="1.9" rx=".95" fill="#000" />
        <rect x="8" y="12.3" width="4.6" height="1.9" rx=".95" fill="#000" />
      </mask>
    </defs>
    <path
      mask="url(#tb-chat-m)"
      fill="var(--tone-a)"
      d="M12 2.6a9 9 0 1 1-4.1 17l-3.2.95a.9.9 0 0 1-1.12-1.12l.95-3.2A9 9 0 0 1 12 2.6z"
    />
  </svg>
)

const BellIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="var(--tone-a)"
      d="M12 2.4a6.6 6.6 0 0 0-6.6 6.6v3.5l-1.5 2.45A1.3 1.3 0 0 0 5 16.9h14a1.3 1.3 0 0 0 1.1-1.95l-1.5-2.45V9A6.6 6.6 0 0 0 12 2.4z"
    />
    <circle cx="12" cy="19.4" r="2" fill="none" stroke="var(--tone-b)" strokeWidth="1.8" />
  </svg>
)

const UserIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="7.2" r="4.2" fill="var(--tone-b)" />
    <path
      fill="var(--tone-a)"
      d="M4.2 18.2c0-2.75 3.5-4.6 7.8-4.6s7.8 1.85 7.8 4.6c0 1.45-1.1 2.4-2.5 2.4H6.7c-1.4 0-2.5-.95-2.5-2.4z"
    />
  </svg>
)

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 4.5v15M4.5 12h15" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
  </svg>
)

const tabs = [
  { id: 'home', label: 'Asosiy', href: '#top', Icon: HomeIcon },
  { id: 'chat', label: 'Chat', href: '#faq', Icon: ChatIcon },
  { id: 'news', label: 'Xabarlar', href: '#how', Icon: BellIcon },
  { id: 'account', label: 'Kabinet', href: '#plans', Icon: UserIcon },
]

export default function TabBar({ query, onQuery, watchId }) {
  const [active, setActive] = useState('home')
  const [showSearch, setShowSearch] = useState(false)

  // Tepadagi qidiruv ko'rinmay qolganda tab bar ichidagi qidiruvni ochamiz
  useEffect(() => {
    const el = document.getElementById(watchId)
    if (!el) return
    // React bir xil qiymatda qayta render qilmaydi, shuning uchun bu arzon
    const check = () => setShowSearch(el.getBoundingClientRect().bottom < 0)
    check()
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    return () => {
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [watchId])

  const go = (id, href) => (e) => {
    e.preventDefault()
    setActive(id)
    if (href === '#top') window.scrollTo({ top: 0, behavior: 'smooth' })
    else document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const left = tabs.slice(0, 2)
  const right = tabs.slice(2)

  const renderTab = ({ id, label, href, Icon }) => (
    <a
      key={id}
      href={href}
      onClick={go(id, href)}
      className={`tab ${active === id ? 'is-active' : ''}`}
      aria-current={active === id ? 'page' : undefined}
    >
      <span className="tab__icon">
        <Icon />
      </span>
      <span className="tab__label">{label}</span>
    </a>
  )

  return (
    <nav className="tabbar" aria-label="Asosiy navigatsiya">
      <div className={`tabbar__search-wrap ${showSearch ? 'is-open' : ''}`} aria-hidden={!showSearch}>
        <div className="tabbar__search-inner">
          <label className="tabbar__search">
            <SearchIcon className="tabbar__search-icon" />
            <input
              type="search"
              value={query}
              tabIndex={showSearch ? 0 : -1}
              onChange={(e) => onQuery(e.target.value)}
              onFocus={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              placeholder="Funksiya yoki tarif qidiring"
              aria-label="Qidirish"
            />
          </label>
        </div>
      </div>

      <div className="tabbar__row">
        {left.map(renderTab)}
        <a href="#start" className="tabbar__fab" onClick={go('start', '#start')} aria-label="Bepul boshlash">
          <PlusIcon />
        </a>
        {right.map(renderTab)}
      </div>
    </nav>
  )
}
