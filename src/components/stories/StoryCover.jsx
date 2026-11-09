/*
 * Story muqovasi. Barcha o'lchamlar `--u` birligida (mobil: 1px, desktop: 1.62px),
 * shuning uchun bitta komponent kartada, muharrir preview'ida va viewer'da bir xil ko'rinadi.
 */

const LimeCoin = () => (
  <svg className="cover__coin" viewBox="0 0 20 20" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="#c8f23c" />
    <path d="M10 4.4c.6 3 1.8 4.2 4.8 4.8-3 .6-4.2 1.8-4.8 4.8-.6-3-1.8-4.2-4.8-4.8 3-.6 4.2-1.8 4.8-4.8z" fill="#17331a" />
  </svg>
)

export function CoverImages({ images = [] }) {
  return images.map((im, i) => (
    <img
      key={i}
      src={im.src}
      alt=""
      draggable="false"
      className="cover__cutout"
      style={{
        width: `${im.w}%`,
        left: im.left != null ? `${im.left}%` : undefined,
        right: im.right != null ? `${im.right}%` : undefined,
        bottom: `${im.bottom}%`,
        transform: `rotate(${im.rotate || 0}deg)`,
      }}
    />
  ))
}

export default function StoryCover({ cover }) {
  const c = cover || {}
  const hasHead = c.title || (c.label && c.labelPos !== 'middle')
  return (
    <span className="cover" style={{ background: c.bg || '#e9e8e6' }}>
      {c.photo && <img className="cover__photo" src={c.photo} alt="" draggable="false" />}
      {c.images && <CoverImages images={c.images} />}
      {c.shade && <span className="cover__shade" />}

      {hasHead && (
        <span className="cover__head">
          {c.title && (
            <span className={`cover__title cover__title--${c.font || 'text'}`} style={{ color: c.color || '#fff' }}>
              {c.title}
            </span>
          )}
          {c.label && c.labelPos !== 'middle' && (
            <span className="cover__label" style={{ background: c.labelBg || '#e4f46c' }}>
              {c.label}
            </span>
          )}
        </span>
      )}

      {c.label && c.labelPos === 'middle' && (
        <span className="cover__label cover__label--middle" style={{ background: c.labelBg || '#f7ef55' }}>
          {c.label}
        </span>
      )}

      {c.badge && (
        <span className="cover__badge" style={{ background: c.badgeBg || '#ff4f8b' }}>
          {c.badge}
        </span>
      )}

      {c.number && (
        <span className="cover__bottom">
          <span className="cover__number">
            {c.number}
            <LimeCoin />
          </span>
          {c.sub && <span className="cover__sub">{c.sub}</span>}
        </span>
      )}

      {c.caption && <span className="cover__caption">{c.caption}</span>}
    </span>
  )
}
