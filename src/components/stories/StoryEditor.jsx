import { useEffect, useRef, useState } from 'react'
import { CloseIcon } from '../Icons.jsx'
import StoryCover from './StoryCover.jsx'
import { compressImage } from './storage.js'

const BACKGROUNDS = [
  'linear-gradient(160deg, #d9f1ff 0%, #e9f8f0 55%, #f3fbd2 100%)',
  'radial-gradient(120% 90% at 70% 10%, #2e4fa3 0%, #182b66 45%, #0d1a40 100%)',
  'linear-gradient(160deg, #ffb36b 0%, #ff7a45 100%)',
  'linear-gradient(160deg, #ff9ec2 0%, #ff4f8b 100%)',
  'linear-gradient(160deg, #8fe39b 0%, #2fb86a 100%)',
  '#1f1f1f',
]
const LABEL_COLORS = ['#e4f46c', '#f7ef55', '#ffffff', '#ffd1e3', '#c9ecff']
const BADGE_COLORS = ['#ff4f8b', '#ff7f11', '#21b04b', '#3b6bff', '#1f1f1f']
const MAX_SLIDES = 5

// Muqova kartaning 4x o'lchamida (86×105 → 344×420) kesiladi
const COVER_CROP = [344, 420]

// Och fonlarda qora matn, qolganlarida oq
const textFor = (bg) => (bg === BACKGROUNDS[0] ? '#1f1f1f' : '#ffffff')

const empty = {
  photo: null,
  bg: BACKGROUNDS[0],
  title: '',
  font: 'text',
  color: textFor(BACKGROUNDS[0]),
  label: '',
  labelBg: LABEL_COLORS[0],
  labelPos: 'under',
  badge: '',
  badgeBg: BADGE_COLORS[0],
  number: '',
  sub: '',
  shade: true,
}

function Segmented({ value, options, onChange, label }) {
  return (
    <div className="seg" role="radiogroup" aria-label={label}>
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          role="radio"
          aria-checked={value === o.value}
          className={value === o.value ? 'is-on' : ''}
          onClick={() => onChange(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

function Swatches({ value, colors, onChange, label }) {
  return (
    <div className="swatches" role="radiogroup" aria-label={label}>
      {colors.map((c) => (
        <button
          key={c}
          type="button"
          role="radio"
          aria-checked={value === c}
          aria-label={c}
          className={value === c ? 'is-on' : ''}
          style={{ background: c }}
          onClick={() => onChange(c)}
        />
      ))}
    </div>
  )
}

export default function StoryEditor({ onClose, onSave }) {
  const [c, setC] = useState(empty)
  const [slides, setSlides] = useState([])
  const [heading, setHeading] = useState('')
  const [text, setText] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const coverInput = useRef(null)
  const slideInput = useRef(null)

  const set = (k) => (v) => setC((p) => ({ ...p, [k]: v?.target ? v.target.value : v }))

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const pickCover = async (e) => {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return
    setBusy(true)
    setError('')
    try {
      const photo = await compressImage(file, { crop: COVER_CROP, quality: 0.85 })
      setC((p) => ({ ...p, photo, color: '#ffffff' }))
    } catch (err) {
      setError(err.message)
    } finally {
      setBusy(false)
    }
  }

  const pickSlides = async (e) => {
    const files = [...(e.target.files || [])].slice(0, MAX_SLIDES - slides.length)
    e.target.value = ''
    if (!files.length) return
    setBusy(true)
    setError('')
    try {
      const out = []
      for (const f of files) out.push(await compressImage(f, { max: 1080, quality: 0.78 }))
      setSlides((s) => [...s, ...out])
    } catch (err) {
      setError(err.message)
    } finally {
      setBusy(false)
    }
  }

  const cover = {
    photo: c.photo,
    bg: c.photo ? undefined : c.bg,
    shade: c.photo && c.shade && (c.title || c.number) ? true : undefined,
    title: c.title.trim() || undefined,
    font: c.font,
    color: c.color,
    label: c.label.trim() || undefined,
    labelBg: c.labelBg,
    labelPos: c.labelPos,
    badge: c.badge.trim() || undefined,
    badgeBg: c.badgeBg,
    number: c.number.trim() || undefined,
    sub: c.sub.trim() || undefined,
  }

  const canSave = !busy && (c.photo || cover.title || cover.number || cover.label)

  const save = () => {
    if (!canSave) {
      setError("Muqova rasmini yuklang yoki sarlavha yozing")
      return
    }
    const h = heading.trim() || undefined
    const t = text.trim() || undefined
    const story = {
      id: `u${Date.now()}`,
      user: true,
      createdAt: Date.now(),
      cover,
      slides: slides.length
        ? slides.map((photo) => ({ photo, heading: h, text: t }))
        : [{ photo: c.photo || undefined, cover: c.photo ? undefined : cover, heading: h, text: t }],
    }
    const ok = onSave(story)
    if (ok === false) setError("Brauzer xotirasi to'ldi — kamroq yoki kichikroq rasm tanlang")
  }

  return (
    <div className="editor" role="dialog" aria-modal="true" aria-labelledby="editor-title" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="editor__panel">
        <header className="editor__head">
          <h2 id="editor-title">Story qo'shish</h2>
          <button className="editor__close" onClick={onClose} aria-label="Yopish">
            <CloseIcon />
          </button>
        </header>

        <div className="editor__grid">
          {/* Preview */}
          <div className="editor__preview">
            <div className="stories stories--preview">
              <span className="story">
                <StoryCover cover={cover} />
              </span>
            </div>
            <p className="editor__hint">Lentada aynan shunday ko'rinadi</p>
          </div>

          {/* Forma */}
          <div className="editor__form">
            <div className="field">
              <span className="field__label">Muqova rasmi</span>
              <div className="upload-row">
                <button type="button" className="upload" onClick={() => coverInput.current?.click()} disabled={busy}>
                  {c.photo ? 'Rasmni almashtirish' : '+ Rasm yuklash'}
                </button>
                {c.photo && (
                  <button type="button" className="link-btn" onClick={() => setC((p) => ({ ...p, photo: null, color: textFor(p.bg) }))}>
                    Olib tashlash
                  </button>
                )}
              </div>
              <input ref={coverInput} type="file" accept="image/*" hidden onChange={pickCover} />
              {!c.photo && (
                <>
                  <span className="field__label field__label--sub">yoki fon</span>
                  <Swatches value={c.bg} colors={BACKGROUNDS} onChange={(bg) => setC((p) => ({ ...p, bg, color: textFor(bg) }))} label="Fon" />
                </>
              )}
            </div>

            <div className="field">
              <label className="field__label" htmlFor="ed-title">Sarlavha</label>
              <textarea id="ed-title" rows={2} maxLength={40} value={c.title} onChange={set('title')} placeholder="Masalan: Yangi menyu" />
              <div className="field__row">
                <Segmented
                  label="Sarlavha uslubi"
                  value={c.font}
                  onChange={set('font')}
                  options={[
                    { value: 'text', label: 'Oddiy' },
                    { value: 'display', label: 'KATTA' },
                  ]}
                />
                <Segmented
                  label="Matn rangi"
                  value={c.color}
                  onChange={set('color')}
                  options={[
                    { value: '#ffffff', label: 'Oq' },
                    { value: '#1f1f1f', label: 'Qora' },
                  ]}
                />
              </div>
            </div>

            <div className="field">
              <label className="field__label" htmlFor="ed-label">Yorliq</label>
              <input id="ed-label" maxLength={22} value={c.label} onChange={set('label')} placeholder="Masalan: QR orqali" />
              <div className="field__row">
                <Swatches value={c.labelBg} colors={LABEL_COLORS} onChange={set('labelBg')} label="Yorliq rangi" />
                <Segmented
                  label="Yorliq joyi"
                  value={c.labelPos}
                  onChange={set('labelPos')}
                  options={[
                    { value: 'under', label: 'Tepada' },
                    { value: 'middle', label: "O'rtada" },
                  ]}
                />
              </div>
            </div>

            <div className="field field--2">
              <div>
                <label className="field__label" htmlFor="ed-badge">Stiker</label>
                <input id="ed-badge" maxLength={10} value={c.badge} onChange={set('badge')} placeholder="−30%" />
                <Swatches value={c.badgeBg} colors={BADGE_COLORS} onChange={set('badgeBg')} label="Stiker rangi" />
              </div>
              <div>
                <label className="field__label" htmlFor="ed-number">Katta raqam</label>
                <input id="ed-number" maxLength={6} value={c.number} onChange={set('number')} placeholder="30%" />
                <input aria-label="Raqam ostidagi matn" maxLength={18} value={c.sub} onChange={set('sub')} placeholder="ichimliklarga" />
              </div>
            </div>

            <div className="field">
              <span className="field__label">
                Slaydlar <small>({slides.length}/{MAX_SLIDES}, bo'lmasa muqova ko'rsatiladi)</small>
              </span>
              <div className="slides-row">
                {slides.map((s, i) => (
                  <span key={i} className="slide-thumb">
                    <img src={s} alt={`Slayd ${i + 1}`} />
                    <button type="button" aria-label="Slaydni olib tashlash" onClick={() => setSlides((x) => x.filter((_, j) => j !== i))}>
                      ×
                    </button>
                  </span>
                ))}
                {slides.length < MAX_SLIDES && (
                  <button type="button" className="slide-add" onClick={() => slideInput.current?.click()} disabled={busy}>
                    +
                  </button>
                )}
              </div>
              <input ref={slideInput} type="file" accept="image/*" multiple hidden onChange={pickSlides} />
              <input aria-label="Slayd sarlavhasi" maxLength={60} value={heading} onChange={(e) => setHeading(e.target.value)} placeholder="Slayd sarlavhasi (ixtiyoriy)" />
              <textarea aria-label="Slayd matni" rows={2} maxLength={180} value={text} onChange={(e) => setText(e.target.value)} placeholder="Qisqa matn (ixtiyoriy)" />
            </div>

            {error && <p className="editor__error" role="alert">{error}</p>}
          </div>
        </div>

        <footer className="editor__foot">
          <button type="button" className="btn btn--ghost" onClick={onClose}>
            Bekor qilish
          </button>
          <button type="button" className="btn btn--green" onClick={save} disabled={!canSave}>
            {busy ? 'Yuklanmoqda…' : 'Joylash'}
          </button>
        </footer>
      </div>
    </div>
  )
}
