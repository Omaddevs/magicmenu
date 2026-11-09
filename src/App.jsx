import { useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import Stories from './components/stories/Stories.jsx'
import TabBar from './components/TabBar.jsx'
import { Tiles, RewardRow, Banners } from './components/Promo.jsx'
import {
  PromoRow,
  Section,
  ProductCard,
  CategoryGrid,
  Faq,
} from './components/Blocks.jsx'
import { stories, tiles, reward, banners, features, plans, categories, steps, faq } from './data.js'

const match = (q) => (item) => item.title.toLowerCase().includes(q.trim().toLowerCase())

export default function App() {
  const [query, setQuery] = useState('')

  const shownFeatures = useMemo(() => features.filter(match(query)), [query])
  const shownPlans = useMemo(() => plans.filter(match(query)), [query])

  return (
    <div className="page">
      <main className="app">
        {/* Bosh blok */}
        <section className="sheet sheet--top" id="top">
          <Header query={query} onQuery={setQuery} />
          <Stories items={stories} />
          <Tiles items={tiles} />
        </section>

        <RewardRow data={reward} />

        <Banners items={banners} />

        {/* Sizga yoqadi */}
        <Section id="features" title="Sizga yoqadi">
          <div className="scroller cards">
            {shownFeatures.map((f) => (
              <ProductCard key={f.id} item={f} />
            ))}
            {shownFeatures.length === 0 && <p className="empty">Hech narsa topilmadi</p>}
          </div>
        </Section>

        {/* Kimlar uchun */}
        <Section id="for" title="Kimlar uchun" action={null}>
          <CategoryGrid items={categories} />
        </Section>

        {/* Qanday ishlaydi */}
        <Section id="how" title="Qanday ishlaydi" action={null}>
          <div className="steps">
            {steps.map((s) => (
              <PromoRow key={s.id} href="#start" icon={<span className="step-num">{s.num}</span>}>
                {s.title}
              </PromoRow>
            ))}
          </div>
        </Section>

        {/* Tariflar */}
        <Section id="plans" title="Tariflar">
          <div className="scroller cards">
            {shownPlans.map((p) => (
              <ProductCard key={p.id} item={p} />
            ))}
            {shownPlans.length === 0 && <p className="empty">Hech narsa topilmadi</p>}
          </div>
        </Section>

        {/* Savollar */}
        <Section id="faq" title="Ko'p so'raladi" action={null}>
          <Faq items={faq} />
        </Section>

        {/* CTA */}
        <section className="sheet cta" id="start">
          <h2>Menyuingizni sehrli qiling ✨</h2>
          <p>14 kun bepul. Karta kerak emas. Istalgan vaqtda bekor qilish mumkin.</p>
          <form className="cta__form" onSubmit={(e) => e.preventDefault()}>
            <input type="tel" placeholder="+998 __ ___ __ __" aria-label="Telefon raqam" />
            <button className="btn btn--primary" type="submit">
              Boshlash
            </button>
          </form>
        </section>

        <footer className="footer">
          <span>© {new Date().getFullYear()} MagicMenu</span>
          <span>Toshkent · hello@magicmenu.uz</span>
        </footer>
      </main>

      <TabBar query={query} onQuery={setQuery} watchId="top-search" />
    </div>
  )
}
