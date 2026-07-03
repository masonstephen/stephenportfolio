const FAVICON_CANDIDATES = [
  '/favicon.png',
  '/favicon.jpg',
  '/favicon.jpeg',
  '/favicon.webp',
  '/profile.png',
  '/profile.jpg',
  '/cv/favicon.png',
]

function getMimeType(url) {
  if (url.endsWith('.svg')) return 'image/svg+xml'
  if (url.endsWith('.jpg') || url.endsWith('.jpeg')) return 'image/jpeg'
  if (url.endsWith('.webp')) return 'image/webp'
  return 'image/png'
}

export function applyFavicon(url) {
  const type = getMimeType(url)

  let link = document.querySelector('link[rel="icon"]')
  if (!link) {
    link = document.createElement('link')
    link.rel = 'icon'
    document.head.appendChild(link)
  }
  link.href = url
  link.type = type

  let apple = document.querySelector('link[rel="apple-touch-icon"]')
  if (!apple) {
    apple = document.createElement('link')
    apple.rel = 'apple-touch-icon'
    document.head.appendChild(apple)
  }
  apple.href = url
}

function probeImage(url) {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(url)
    img.onerror = () => resolve(null)
    img.src = url
  })
}

export async function resolveFavicon(fallback = '/favicon.svg') {
  for (const url of FAVICON_CANDIDATES) {
    const found = await probeImage(url)
    if (found) return found
  }
  return fallback
}

export function setFavicon(url, fallback = '/favicon.svg') {
  probeImage(url).then((found) => applyFavicon(found || fallback))
}
