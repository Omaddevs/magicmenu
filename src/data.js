// MagicMenu landing — kontent ma'lumotlari
// Story rasmlari: Unsplash (bepul litsenziya), fon olib tashlangan.

import smoothie from './assets/stories/smoothie.webp'
import juice from './assets/stories/juice.webp'
import coverPizza from './assets/stories/cover-pizza.webp'
import coverCoffee from './assets/stories/cover-coffee.webp'
import coverRamen from './assets/stories/cover-ramen.webp'
import coverBurger from './assets/stories/cover-burger.webp'
import slidePizza from './assets/stories/slide-pizza.webp'
import slideCoffee from './assets/stories/slide-coffee.webp'
import slideRamen from './assets/stories/slide-ramen.webp'
import slideBurger from './assets/stories/slide-burger.webp'
import slideSmoothie from './assets/stories/slide-smoothie.webp'
import slideJuice from './assets/stories/slide-juice.webp'
import pizza from './assets/banners/pizza.webp'
import ramenPhoto from './assets/banners/ramen.webp'
import steak from './assets/banners/steak.webp'
import pancakes from './assets/banners/pancakes.webp'

/*
 * Story = muqova (cover) + slaydlar (slides).
 *
 * cover maydonlari (hammasi ixtiyoriy):
 *   photo      — butun kartani qoplaydigan rasm
 *   bg         — fon (rang yoki gradient)
 *   images     — fonsiz rasmlar: { src, w, left|right, bottom, rotate } (% da)
 *   title      — sarlavha (\n bilan qatorga bo'linadi)
 *   font       — 'text' (oddiy) | 'display' (katta, BOSH HARF)
 *   color      — sarlavha rangi
 *   label      — yorliq (pill), labelBg — uning rangi, labelPos — 'under' | 'middle'
 *   badge      — stiker, badgeBg — uning rangi
 *   number     — katta raqam pastda (masalan '30%'), sub — uning ostidagi matn
 *   caption    — pastdagi mayda izoh
 */
export const stories = [
  {
    id: 'menu',
    cover: {
      bg: 'linear-gradient(160deg, #d9f1ff 0%, #e9f8f0 55%, #f3fbd2 100%)',
      images: [
        { src: juice, w: 30, right: 12, bottom: -6, rotate: 8 },
        { src: smoothie, w: 46, left: 8, bottom: -8, rotate: -6 },
      ],
      title: 'Sizning menyu',
      color: '#1f1f1f',
      label: 'QR orqali',
      labelBg: '#e4f46c',
      labelPos: 'under',
    },
    slides: [
      {
        photo: slideSmoothie,
        heading: 'QR menyu — 5 daqiqada',
        text: "Taomlaringizni yuklang, QR kodni stolga qo'ying. Mijoz telefoni bilan skanerlaydi va menyuni darhol ko'radi — ilovasiz.",
      },
    ],
  },
  {
    id: 'food',
    cover: {
      photo: coverPizza,
      title: 'Magic\nfood',
      font: 'display',
      color: '#fff',
      badge: '−30%',
      badgeBg: '#ff4f8b',
      caption: 'Aksiya 31.12 gacha · shartlari saytda',
    },
    slides: [
      {
        photo: slidePizza,
        heading: 'Birinchi 3 oyga −30%',
        text: "Hozir ulaning — Biznes tarifi 3 oy davomida 30% arzon. Karta kerak emas.",
      },
    ],
  },
  {
    id: 'drinks',
    cover: {
      bg: 'radial-gradient(120% 90% at 70% 10%, #2e4fa3 0%, #182b66 45%, #0d1a40 100%)',
      images: [{ src: juice, w: 52, right: 8, bottom: 22, rotate: 10 }],
      number: '30%',
      sub: 'ichimliklarga',
    },
    slides: [
      {
        photo: slideJuice,
        heading: 'Kombo va aksiyalar',
        text: "«Ichimliklarga 30%» kabi aksiyalarni bir bosishda yarating — menyuda avtomatik ko'rinadi.",
      },
    ],
  },
  {
    id: 'new',
    cover: {
      photo: coverCoffee,
      label: 'Yangi taomlar',
      labelBg: '#f7ef55',
      labelPos: 'middle',
    },
    slides: [
      {
        photo: slideCoffee,
        heading: "Yangi taomni 1 daqiqada qo'shing",
        text: "Rasm, narx va tarkib — menyu barcha stollarda bir zumda yangilanadi.",
      },
    ],
  },
  {
    id: 'order',
    cover: {
      photo: coverRamen,
      title: 'Onlayn\nbuyurtma',
      color: '#fff',
      shade: true,
    },
    slides: [
      {
        photo: slideRamen,
        heading: 'Onlayn buyurtma',
        text: "Mijoz stol yonidan yoki uydan buyurtma beradi, oshxona esa uni darhol ekranda ko'radi.",
      },
    ],
  },
  {
    id: 'delivery',
    cover: {
      photo: coverBurger,
      number: '0%',
      sub: 'komissiya',
    },
    slides: [
      {
        photo: slideBurger,
        heading: "O'z yetkazib berishingiz",
        text: "Agregatorlarga 30% komissiya to'lamang. O'z saytingiz va kuryerlaringiz orqali yetkazib bering.",
      },
    ],
  },
]

export const tiles = [
  { id: 'promo', title: 'Aksiyalar', href: '#features', icon: 'ticket', bg: '#fff5d4' },
  { id: 'plans', title: 'Tariflar', href: '#plans', icon: 'bag', bg: '#f2f2f3' },
  { id: 'try', title: "Sinab ko'ring", href: '#start', icon: 'check', bg: '#f2f2f3' },
]

export const reward = {
  amount: '−30%',
  title: 'birinchi 3 oyga',
  sub: 'kafe va restoranlar uchun 31.12 gacha',
  href: '#start',
}

export const banners = [
  {
    id: 'cashback',
    title: 'MagicMenu keshbek beradi',
    coin: true,
    text: 'mijozlaringizga «Sodiqlik» moduli orqali',
    note: 'Har buyurtmadan 5% gacha bonus,\nsozlash atigi 2 daqiqa',
    sticker: { pre: '', value: '35%', post: 'gacha' },
    bg: 'linear-gradient(100deg, #ffe55c 0%, #ffd83d 100%)',
    photo: pizza,
    chip: 'Aksiya',
  },
  {
    id: 'kds',
    title: 'Oshxona ekrani bepul',
    text: 'Biznes tarifida birinchi oy',
    note: 'Istalgan planshetni oshxona\nekraniga aylantiring',
    sticker: { pre: '', value: '0', post: "so'm" },
    bg: 'linear-gradient(100deg, #e9e0ff 0%, #dccfff 100%)',
    photo: ramenPhoto,
    chip: 'Yangi',
  },
  {
    id: 'delivery',
    title: 'Yetkazib berish 0% komissiya',
    text: "agregatorlarsiz, o'z kuryerlaringiz bilan",
    note: "Mijoz to'g'ridan-to'g'ri sizdan\nbuyurtma qiladi",
    sticker: { pre: '', value: '0%', post: '' },
    bg: 'linear-gradient(100deg, #cdf5de 0%, #b4edcb 100%)',
    photo: steak,
    chip: 'Aksiya',
  },
  {
    id: 'breakfast',
    title: 'Nonushta menyusi avtomatik',
    text: 'vaqtga qarab menyu almashadi',
    note: 'Ertalab — nonushta, kechqurun —\nkechki ovqat',
    sticker: { pre: '', value: '−20%', post: '' },
    bg: 'linear-gradient(100deg, #ffe0cc 0%, #ffd0b3 100%)',
    photo: pancakes,
    chip: 'Aksiya',
  },
]

export const features = [
  {
    id: 'f1',
    emoji: '📲',
    bg: '#eef6ff',
    discount: 30,
    price: 139000,
    oldPrice: 199000,
    title: 'QR menyu Standart',
    meta: '1 filial · oyiga',
  },
  {
    id: 'f2',
    emoji: '🧾',
    bg: '#fff4ea',
    discount: 30,
    price: 209000,
    oldPrice: 299000,
    title: 'Onlayn buyurtma va to\'lov',
    meta: 'Click, Payme · oyiga',
  },
  {
    id: 'f3',
    emoji: '🛵',
    bg: '#effaf3',
    discount: 30,
    price: 279000,
    oldPrice: 399000,
    title: 'Yetkazib berish moduli',
    meta: 'Kuryer ilovasi · oyiga',
  },
  {
    id: 'f4',
    emoji: '👨‍🍳',
    bg: '#f5f1ff',
    discount: 30,
    price: 125000,
    oldPrice: 179000,
    title: 'Oshxona ekrani (KDS)',
    meta: 'Planshet uchun · oyiga',
  },
]

export const plans = [
  {
    id: 'start',
    emoji: '🌱',
    bg: '#f5f4f2',
    price: 0,
    title: 'Start',
    meta: 'QR menyu · 30 ta taom',
  },
  {
    id: 'biznes',
    emoji: '🚀',
    bg: '#f5f4f2',
    discount: 30,
    price: 349000,
    oldPrice: 499000,
    title: 'Biznes',
    meta: 'Hammasi · 1 filial',
  },
  {
    id: 'network',
    emoji: '🏢',
    bg: '#f5f4f2',
    discount: 30,
    price: 839000,
    oldPrice: 1199000,
    title: 'Tarmoq',
    meta: '5 tagacha filial',
  },
]

export const categories = [
  { id: 'c1', title: 'Oshxona', emoji: '🍲', bg: '#fff1e0' },
  { id: 'c2', title: 'Kafe', emoji: '☕', bg: '#f3ece6' },
  { id: 'c3', title: 'Fastfood', emoji: '🍔', bg: '#ffecea' },
  { id: 'c4', title: 'Restoran', emoji: '🍷', bg: '#f3eefe' },
  { id: 'c5', title: 'Choyxona', emoji: '🍵', bg: '#eaf7ef' },
  { id: 'c6', title: 'Pitsseriya', emoji: '🍕', bg: '#fff6dc' },
]

export const steps = [
  { id: 's1', num: '1', title: "Ro'yxatdan o'ting — 1 daqiqa" },
  { id: 's2', num: '2', title: 'Taomlar va narxlarni yuklang' },
  { id: 's3', num: '3', title: 'QR kodni chop eting va stollarga qo\'ying' },
]

export const faq = [
  {
    q: "Mijozga ilova o'rnatish kerakmi?",
    a: "Yo'q. Mijoz telefon kamerasi bilan QR kodni skanerlaydi va menyu brauzerda ochiladi.",
  },
  {
    q: 'Qanday to\'lov tizimlari ulanadi?',
    a: "Click, Payme, Uzum va naqd pul. To'lov to'g'ridan-to'g'ri sizning hisobingizga tushadi.",
  },
  {
    q: 'Bepul tarifda cheklov bormi?',
    a: "Start tarifida 30 tagacha taom va 1 ta filial. Istalgan vaqtda yuqori tarifga o'tishingiz mumkin.",
  },
  {
    q: "−30% chegirma qachongacha amal qiladi?",
    a: "Chegirma birinchi 3 oy uchun amal qiladi, yillik to'lovda esa qo'shimcha 2 oy bepul.",
  },
]

export const formatPrice = (n) =>
  n === 0 ? "Bepul" : n.toLocaleString('ru-RU').replace(/,/g, ' ') + " so'm"
