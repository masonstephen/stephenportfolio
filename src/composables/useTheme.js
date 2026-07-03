import { ref } from 'vue'
import { applyTheme, getStoredTheme } from '@/utils/theme'

const isDark = ref(getStoredTheme() === 'dark')

export function useTheme() {
  function toggleTheme() {
    isDark.value = !isDark.value
    applyTheme(isDark.value)
  }

  return { isDark, toggleTheme }
}
