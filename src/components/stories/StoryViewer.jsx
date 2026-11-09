import { useCallback, useEffect, useRef, useState } from 'react'
import { CloseIcon } from '../Icons.jsx'
import StoryCover from './StoryCover.jsx'

const DURATION = 5000

const TrashIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 7h16M9.5 7V5.2c0-.7.5-1.2 1.2-1.2h2.6c.7 0 1.2.5 1.2 1.2V7M6.5 7l.8 11.6c.1 1 .9 1.9 2 1.9h5.4c1 0 1.9-.8 2-1.9L17.5 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function StoryViewer({ stories, startIndex, onClose, onSeen, onDelete }) {
  const [si, setSi] = useState(startIndex) // story index
  const [li, setLi] = useState(0) // slide index
  const [paused, setPaused] = useState(false)
  const holdRef = useRef(0)

  const story = stories[si]
  const slides = story?.slides?.length ? story.slides : [{ cover: story?.cover }]
  const slide = slides[li]

  useEffect(() => {
    if (story) onSeen(story.id)
  }, [story, onSeen])

  const next = useCallback(() => {
    if (li < slides.length - 1) setLi(li + 1)
    else if (si < stories.length - 1) {
      setSi(si + 1)
      setLi(0)
    } else onClose()
  }, [li, si, slides.length, stories.length, onClose])

  const prev = useCallback(() => {
    if (li > 0) setLi(li - 1)
    else if (si > 0) {
      const p = stories[si - 1]
      setSi(si - 1)
      setLi(Math.max(0, (p.slides?.length || 1) - 1))
    }
  }, [li, si, stories])

  // Avtomatik o'tish (pauzada to'xtaydi)
  useEffect(() => {
    if (paused) return
    const t = setTimeout(next, DURATION)
    return () => clearTimeout(t)
  }, [si, li, paused, next])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [next, prev, onClose])

  if (!story) return null

  // Bosib ushlash = pauza, qisqa bosish = oldinga/orqaga
  const down = () => {
    holdRef.current = Date.now()
    setPaused(true)
  }
  const up = (dir) => () => {
    setPaused(false)
    if (Date.now() - holdRef.current < 250) dir === 'next' ? next() : prev()
  }

  return (
    <div className="viewer" role="dialog" aria-modal="true" aria-label={slide.heading || story.cover?.title || 'Story'}>
      <div className={`viewer__card ${paused ? 'is-paused' : ''}`}>
        {/* Slayd foni */}
        <div className="viewer__media">
          {slide.photo ? (
            <img src={slide.photo} alt="" draggable="false" />
          ) : (
            <span className="viewer__cover">
              <StoryCover cover={slide.cover || story.cover} />
            </span>
          )}
        </div>
        <div className="viewer__fade" />

        {/* Progress */}
        <div className="viewer__bars">
          {slides.map((_, i) => (
            <span key={i} className="viewer__bar">
              <span
                key={`${si}-${li}`}
                className={i < li ? 'is-done' : i === li ? 'is-active' : ''}
                style={{ animationDuration: `${DURATION}ms` }}
              />
            </span>
          ))}
        </div>

        {/* Sarlavha qatori */}
        <div className="viewer__top">
          <span className="viewer__avatar">
            <StoryCover cover={story.cover} />
          </span>
          <span className="viewer__name">{story.user ? 'Sizning story' : 'MagicMenu'}</span>
          {story.user && (
            <button
              className="viewer__icon"
              aria-label="Story'ni o'chirish"
              onClick={() => {
                if (window.confirm("Bu story o'chirilsinmi?")) onDelete(story.id)
              }}
            >
              <TrashIcon />
            </button>
          )}
          <button className="viewer__icon" onClick={onClose} aria-label="Yopish">
            <CloseIcon />
          </button>
        </div>

        <button className="viewer__nav viewer__nav--prev" aria-label="Oldingi" onPointerDown={down} onPointerUp={up('prev')} onPointerLeave={() => setPaused(false)} />
        <button className="viewer__nav viewer__nav--next" aria-label="Keyingi" onPointerDown={down} onPointerUp={up('next')} onPointerLeave={() => setPaused(false)} />

        {(slide.heading || slide.text || !story.user) && (
          <div className="viewer__body">
            {slide.heading && <h2>{slide.heading}</h2>}
            {slide.text && <p>{slide.text}</p>}
            {!story.user && (
              <a className="btn btn--light" href="#start" onClick={onClose}>
                Bepul boshlash
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
