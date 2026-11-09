/*
 * Foydalanuvchi qo'shgan story'lar va "ko'rilgan" holat brauzerda (localStorage) saqlanadi.
 * Haqiqiy loyihada bu API orqali serverga yoziladi — shu ikki funksiyani almashtirish kifoya.
 */

const USER_KEY = 'mm-user-stories'
const SEEN_KEY = 'mm-seen-stories'

export function loadUserStories() {
  try {
    const list = JSON.parse(localStorage.getItem(USER_KEY) || '[]')
    return Array.isArray(list) ? list : []
  } catch {
    return []
  }
}

/** @returns {boolean} saqlandi yoki joy yetmadi */
export function saveUserStories(list) {
  try {
    localStorage.setItem(USER_KEY, JSON.stringify(list))
    return true
  } catch {
    return false
  }
}

export function loadSeen() {
  try {
    return new Set(JSON.parse(localStorage.getItem(SEEN_KEY) || '[]'))
  } catch {
    return new Set()
  }
}

export function saveSeen(set) {
  try {
    localStorage.setItem(SEEN_KEY, JSON.stringify([...set]))
  } catch {
    /* muhim emas */
  }
}

/**
 * Rasmni siqib, data URL qaytaradi.
 * crop: [w, h] berilsa — markazdan aynan shu nisbatda kesiladi (muqova uchun),
 * aks holda max o'lchamga sig'diriladi (slaydlar uchun).
 */
export function compressImage(file, { crop, max = 1080, quality = 0.8 } = {}) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      const { naturalWidth: iw, naturalHeight: ih } = img
      let sx = 0, sy = 0, sw = iw, sh = ih, dw, dh
      if (crop) {
        const [cw, ch] = crop
        const target = cw / ch
        if (iw / ih > target) {
          sw = ih * target
          sx = (iw - sw) / 2
        } else {
          sh = iw / target
          sy = (ih - sh) / 2
        }
        dw = cw
        dh = ch
      } else {
        const k = Math.min(1, max / Math.max(iw, ih))
        dw = Math.round(iw * k)
        dh = Math.round(ih * k)
      }
      const canvas = document.createElement('canvas')
      canvas.width = dw
      canvas.height = dh
      const ctx = canvas.getContext('2d')
      ctx.imageSmoothingQuality = 'high'
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, dw, dh)
      URL.revokeObjectURL(url)
      resolve(canvas.toDataURL('image/jpeg', quality))
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('Rasmni o‘qib bo‘lmadi'))
    }
    img.src = url
  })
}
