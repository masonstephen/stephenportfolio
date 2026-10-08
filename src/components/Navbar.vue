<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Menu, X, FileText } from 'lucide-vue-next'
import ThemeToggle from './ThemeToggle.vue'
import { personalInfo } from '@/data/portfolio'

const route = useRoute()
const isScrolled = ref(false)
const isMobileOpen = ref(false)

const isOnHero = computed(() => route.path === '/' && !isScrolled.value)

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'Research', href: '/research' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
]

function isActive(href) {
  if (href === '/research') return route.path.startsWith('/research')
  return false
}

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

function closeMobile() {
  isMobileOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="isScrolled || !isOnHero ? 'scrolled-header' : 'bg-transparent'"
    role="banner"
  >
    <nav class="section-container flex h-14 items-center justify-between md:h-16" aria-label="Main navigation">
      <RouterLink
        to="/"
        class="text-body-lg font-medium tracking-tight transition-colors"
        :class="isOnHero && !isScrolled ? 'text-inverse hover:text-brand-gold' : 'text-heading hover:text-brand-blue'"
        @click="closeMobile"
      >
        {{ personalInfo.name }}
      </RouterLink>

      <div class="hidden items-center md:flex">
        <RouterLink
          v-for="link in navLinks"
          :key="link.href"
          :to="link.href"
          class="nav-link"
          :class="[
            isOnHero && !isScrolled ? '!text-white/70 hover:!text-white' : '',
            isActive(link.href) && !(isOnHero && !isScrolled) ? 'nav-link-active' : '',
          ]"
        >
          {{ link.label }}
        </RouterLink>
        <ThemeToggle class="ml-2" :on-hero="isOnHero && !isScrolled" />
        <RouterLink to="/resume" class="btn-primary ml-4 !h-10 !px-6 !text-body">
          <FileText class="h-4 w-4" aria-hidden="true" />
          Resume
        </RouterLink>
      </div>

      <div class="flex items-center gap-2 md:hidden">
        <ThemeToggle :on-hero="isOnHero && !isScrolled" />
        <button
          type="button"
          class="flex h-11 w-11 items-center justify-center"
          :class="isOnHero && !isScrolled ? 'text-inverse' : 'text-nav'"
          :aria-expanded="isMobileOpen"
          aria-label="Toggle menu"
          @click="isMobileOpen = !isMobileOpen"
        >
          <X v-if="isMobileOpen" class="h-5 w-5" />
          <Menu v-else class="h-5 w-5" />
        </button>
      </div>
    </nav>      <div v-if="isMobileOpen" class="mobile-menu md:hidden">
      <div class="section-container flex flex-col py-4">
        <RouterLink
          v-for="link in navLinks"
          :key="link.href"
          :to="link.href"
          class="nav-link !leading-normal py-3"
          :class="isActive(link.href) ? 'nav-link-active' : ''"
          @click="closeMobile"
        >
          {{ link.label }}
        </RouterLink>
        <RouterLink
          to="/resume"
          class="btn-primary mt-4 w-full justify-center"
          @click="closeMobile"
        >
          <FileText class="h-4 w-4" aria-hidden="true" />
          View Resume
        </RouterLink>
      </div>
    </div>
  </header>
</template>
