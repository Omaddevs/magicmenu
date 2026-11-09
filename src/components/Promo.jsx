import { ChevronRight } from './Icons.jsx'
import { Ticket3D, Bag3D, Check3D, Coin, LockIcon, InfoIcon } from './Icons3D.jsx'

const tileIcons = { ticket: Ticket3D, bag: Bag3D, check: Check3D }

export function Tiles({ items }) {
  return (
    <nav className="tiles" aria-label="Tezkor bo'limlar">
      {items.map((t) => {
        const Icon = tileIcons[t.icon]
        return (
          <a key={t.id} href={t.href} className="tile" style={{ background: t.bg }}>
            <span className="tile__title">{t.title}</span>
            <span className={`tile__icon tile__icon--${t.icon}`}>
              <Icon />
            </span>
          </a>
        )
      })}
    </nav>
  )
}

export function RewardRow({ data }) {
  return (
    <a className="sheet reward" href={data.href}>
      <span className="reward__lock">
        <LockIcon />
      </span>
      <span className="reward__body">
        <span className="reward__title">
          <b>{data.amount}</b>
          <Coin />
          <span>{data.title}</span>
        </span>
        <span className="reward__sub">{data.sub}</span>
      </span>
      <ChevronRight className="reward__chev" />
    </a>
  )
}

export function Banners({ items }) {
  return (
    <section className="sheet banners-sheet" aria-label="Aksiyalar">
      <div className="scroller banners">
        {items.map((b) => (
          <a key={b.id} href="#start" className="banner" style={{ background: b.bg }}>
            <div className="banner__text">
              <h3 className="banner__title">
                {b.title}
                {b.coin && (
                  <>
                    {' '}
                    <Coin size={17} />
                  </>
                )}
              </h3>
              <p className="banner__lead">{b.text}</p>
              <p className="banner__note">{b.note}</p>
            </div>
            <div className="banner__media">
              <img src={b.photo} alt="" loading="lazy" draggable="false" />
              <span className="banner__chip">
                {b.chip}
                <InfoIcon />
              </span>
            </div>
            <span className="banner__sticker">
              {b.sticker.pre && <small>{b.sticker.pre}</small>}
              {b.sticker.value}
              {b.sticker.post && <small>{b.sticker.post}</small>}
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
