import { Logo, SearchIcon, FilterIcon } from './Icons.jsx'

export default function Header({ query, onQuery }) {
  return (
    <>
      <div className="brand">
        <Logo />
        <span className="brand__name">MagicMenu</span>
      </div>

      <div className="search-row" id="top-search">
        <label className="search">
          <SearchIcon className="search__icon" />
          <input
            type="search"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder="MagicMenu'da qidirish"
            aria-label="Qidirish"
          />
        </label>
        <button className="icon-btn" aria-label="Filtrlar">
          <FilterIcon />
        </button>
      </div>
    </>
  )
}
