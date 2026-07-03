<script setup>
import { RouterLink } from 'vue-router'
import { ArrowRight, FileText, Github, Linkedin, Mail } from 'lucide-vue-next'
import { personalInfo } from '@/data/portfolio'

const geoSquares = [
  { size: 16, top: '15%', left: '10%', delay: '0s', rotate: '12deg' },
  { size: 24, top: '25%', left: '75%', delay: '1s', rotate: '-8deg' },
  { size: 12, top: '60%', left: '85%', delay: '2s', rotate: '20deg' },
  { size: 20, top: '70%', left: '20%', delay: '0.5s', rotate: '-15deg' },
  { size: 32, top: '40%', left: '55%', delay: '1.5s', rotate: '5deg' },
  { size: 14, top: '80%', left: '60%', delay: '2.5s', rotate: '-20deg' },
]
</script>

<template>
  <section
    id="home"
    class="hero-section flex min-h-screen items-center pt-16"
    aria-labelledby="hero-heading"
  >
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div class="hero-grid absolute inset-0" />
      <div
        v-for="(sq, i) in geoSquares"
        :key="i"
        class="geo-square animate-float"
        :style="{
          width: `${sq.size}px`,
          height: `${sq.size}px`,
          top: sq.top,
          left: sq.left,
          animationDelay: sq.delay,
          transform: `rotate(${sq.rotate})`,
          opacity: 0.6 + (i % 3) * 0.15,
        }"
      />
    </div>

    <div class="section-container relative z-10 py-20 lg:py-80">
      <div class="max-w-3xl" data-aos="fade-up" data-aos-duration="800">
        <p class="pill-badge mb-6">
          <span class="h-2 w-2 bg-brand-gold" />
          Available for opportunities
        </p>

        <h1
          id="hero-heading"
          class="text-[32px] font-thin leading-none tracking-tight text-inverse md:text-display"
        >
          {{ personalInfo.headline }}
        </h1>

        <p class="mt-6 max-w-2xl text-body-lg leading-6 text-white/80">
          {{ personalInfo.subtitle }}
        </p>

        <div class="mt-10 flex flex-wrap items-center gap-4">
          <a href="#projects" class="btn-primary group">
            View Projects
            <ArrowRight
              class="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
          <RouterLink to="/resume" class="btn-secondary !border-white !bg-transparent !text-inverse hover:!bg-white/10">
            <FileText class="h-4 w-4" aria-hidden="true" />
            View CV
          </RouterLink>
        </div>

        <div class="mt-12 flex items-center gap-4">
          <span class="text-body-sm text-white/60">Connect</span>
          <div class="flex gap-2">
            <a
              :href="personalInfo.github"
              target="_blank"
              rel="noopener noreferrer"
              class="icon-btn"
              aria-label="GitHub profile"
            >
              <Github class="h-4 w-4" />
            </a>
            <a
              :href="personalInfo.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="icon-btn"
              aria-label="LinkedIn profile"
            >
              <Linkedin class="h-4 w-4" />
            </a>
            <a
              :href="`mailto:${personalInfo.email}`"
              class="icon-btn"
              aria-label="Send email"
            >
              <Mail class="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
