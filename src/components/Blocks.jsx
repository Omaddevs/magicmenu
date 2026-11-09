import { useState } from 'react'
import { ChevronRight, PercentBadge } from './Icons.jsx'
import { formatPrice } from '../data.js'

export function PromoRow({ icon, children, href = '#promo' }) {
  return (
    <a className="promo" href={href}>
      <span className="promo__icon">{icon ?? <PercentBadge />}</span>
      <span className="promo__text">{children}</span>
      <ChevronRight className="promo__chev" />
    </a>
  )
}

export function Section({ id, title, action = 'Barchasi', children }) {
  return (
    <section className="sheet" id={id}>
      <div className="section-head">
        <h2>{title}</h2>
        {action && (
          <a className="pill" href={`#${id}`}>
            {action}
            <ChevronRight size={16} />
          </a>
        )}
      </div>
      {children}
    </section>
  )
}

export function ProductCard({ item }) {
  const [added, setAdded] = useState(false)
  return (
    <article className="card">
      <div className="card__media" style={{ background: item.bg }}>
        <span className="card__emoji">{item.emoji}</span>
        {item.discount ? <span className="badge">−{item.discount}%</span> : null}
        <button
          className={`card__add ${added ? 'is-added' : ''}`}
          onClick={() => setAdded((v) => !v)}
          aria-label={added ? 'Tanlangan' : "Qo'shish"}
        >
          {added ? '✓' : '+'}
        </button>
      </div>
      <div className="card__price">
        <span className={item.oldPrice ? 'price price--sale' : 'price'}>{formatPrice(item.price)}</span>
        {item.oldPrice && <s className="price-old">{formatPrice(item.oldPrice)}</s>}
      </div>
      <h3 className="card__title">{item.title}</h3>
      <p className="card__meta">{item.meta}</p>
    </article>
  )
}

export function CategoryGrid({ items }) {
  return (
    <div className="cats">
      {items.map((c) => (
        <a key={c.id} href="#start" className="cat" style={{ background: c.bg }}>
          <span className="cat__title">{c.title}</span>
          <span className="cat__emoji">{c.emoji}</span>
        </a>
      ))}
    </div>
  )
}

export function Faq({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq">
      {items.map((f, i) => (
        <div key={f.q} className={`faq__item ${open === i ? 'is-open' : ''}`}>
          <button className="faq__q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>{f.q}</span>
            <ChevronRight className="faq__chev" />
          </button>
          <div className="faq__a">
            <p>{f.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
