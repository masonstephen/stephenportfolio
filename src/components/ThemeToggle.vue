<script setup>
import { Sun, Moon } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'

defineProps({
  onHero: {
    type: Boolean,
    default: false,
  },
})

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button
    type="button"
    class="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center border transition-colors duration-200"
    :class="
      onHero
        ? 'border-white/30 text-inverse hover:border-brand-gold hover:bg-brand-gold/10'
        : 'icon-btn-light'
    "
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggleTheme"
  >
    <Sun v-if="isDark" class="h-4 w-4" />
    <Moon v-else class="h-4 w-4" />
  </button>
</template>
