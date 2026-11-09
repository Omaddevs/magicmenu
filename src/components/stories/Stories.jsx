import { useCallback, useMemo, useState } from 'react'
import StoryCover from './StoryCover.jsx'
import StoryViewer from './StoryViewer.jsx'
import StoryEditor from './StoryEditor.jsx'
import { loadUserStories, saveUserStories, loadSeen, saveSeen } from './storage.js'

export default function Stories({ items }) {
  const [userStories, setUserStories] = useState(loadUserStories)
  const [seen, setSeen] = useState(loadSeen)
  const [active, setActive] = useState(null)
  const [editing, setEditing] = useState(false)

  // Yangi qo'shilganlar birinchi, keyin MagicMenu story'lari
  const all = useMemo(() => [...userStories, ...items], [userStories, items])

  const markSeen = useCallback((id) => {
    setSeen((prev) => {
      if (prev.has(id)) return prev
      const next = new Set(prev).add(id)
      saveSeen(next)
      return next
    })
  }, [])

  const close = useCallback(() => setActive(null), [])

  const add = (story) => {
    const next = [story, ...userStories]
    if (!saveUserStories(next)) return false
    setUserStories(next)
    setEditing(false)
    return true
  }

  const remove = useCallback(
    (id) => {
      const next = userStories.filter((s) => s.id !== id)
      saveUserStories(next)
      setUserStories(next)
      setActive(null)
    },
    [userStories]
  )

  return (
    <>
      <div className="stories scroller">
        <button className="story story--add" onClick={() => setEditing(true)} aria-label="Story qo'shish">
          <span className="cover cover--add">
            <span className="cover__plus" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
              </svg>
            </span>
            <span className="cover__add-label">Story qo'shish</span>
          </span>
        </button>

        {all.map((s, i) => (
          <button
            key={s.id}
            className={`story ${seen.has(s.id) ? 'is-seen' : ''}`}
            onClick={() => setActive(i)}
            aria-label={s.cover?.title || s.cover?.label || s.slides?.[0]?.heading || 'Story'}
          >
            <StoryCover cover={s.cover} />
          </button>
        ))}
      </div>

      {active !== null && (
        <StoryViewer stories={all} startIndex={active} onClose={close} onSeen={markSeen} onDelete={remove} />
      )}
      {editing && <StoryEditor onClose={() => setEditing(false)} onSave={add} />}
    </>
  )
}
