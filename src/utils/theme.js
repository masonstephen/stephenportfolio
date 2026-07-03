export function getStoredTheme() {
  if (typeof window === 'undefined') return 'light'
  return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
}

export function applyTheme(dark) {
  document.documentElement.classList.toggle('dark', dark)
  localStorage.setItem('theme', dark ? 'dark' : 'light')

  const meta = document.querySelector('meta[name="theme-color"]:not([media])')
  if (meta) meta.setAttribute('content', dark ? '#001A4D' : '#FFFFFF')
}

export function initTheme() {
  applyTheme(getStoredTheme() === 'dark')
}
