<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Layers,
  AlertTriangle,
  Lightbulb,
  Rocket,
  Image,
} from 'lucide-vue-next'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { getProjectById } from '@/data/portfolio'

const route = useRoute()
const project = computed(() => getProjectById(route.params.id))

const statusStyles = {
  amber: 'badge-primary',
  violet: 'badge-secondary',
  emerald: 'badge-primary',
}
</script>

<template>
  <div v-if="project">
    <Navbar />
    <main class="pb-16 pt-24">
      <div class="section-container">
        <RouterLink
          to="/#projects"
          class="mb-8 inline-flex items-center gap-2 text-body-sm font-medium text-nav transition-colors hover:text-brand-blue"
        >
          <ArrowLeft class="h-4 w-4" aria-hidden="true" />
          Back to Projects
        </RouterLink>

        <header class="max-w-3xl">
          <span class="status-badge" :class="statusStyles[project.statusColor] || 'badge-secondary'">
            {{ project.status }}
          </span>
          <h1 class="mt-4 section-heading">{{ project.name }}</h1>
          <p class="mt-3 text-body-lg text-muted">{{ project.tagline }}</p>

          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="tech in project.stack" :key="tech" class="tag">{{ tech }}</span>
          </div>

          <div class="mt-6 flex flex-wrap gap-3">
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary"
            >
              <Github class="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
            <a
              v-if="project.liveDemo"
              :href="project.liveDemo"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary"
            >
              <ExternalLink class="h-4 w-4" aria-hidden="true" />
              Live Demo
            </a>
          </div>
        </header>

        <div class="mt-16 grid gap-8 lg:grid-cols-2">
          <section class="card" aria-labelledby="problem-heading">
            <h2 id="problem-heading" class="text-h3 text-heading">Problem</h2>
            <p class="mt-3 text-body leading-relaxed text-body">{{ project.problem }}</p>
          </section>

          <section class="card" aria-labelledby="solution-heading">
            <h2 id="solution-heading" class="text-h3 text-heading">Solution</h2>
            <p class="mt-3 text-body leading-relaxed text-body">{{ project.solution }}</p>
          </section>
        </div>

        <section class="card mt-8" aria-labelledby="architecture-heading">
          <div class="flex items-center gap-3">
            <Layers class="h-5 w-5 text-brand-gold" aria-hidden="true" />
            <h2 id="architecture-heading" class="text-h3 text-heading">Architecture</h2>
          </div>
          <p class="mt-3 text-body leading-relaxed text-body">{{ project.architecture }}</p>

          <div class="placeholder-box mt-6 h-48" role="img" aria-label="Architecture diagram placeholder">
            <div class="text-center">
              <Layers class="mx-auto h-8 w-8 text-muted" aria-hidden="true" />
              <p class="mt-2 text-body text-muted">Architecture Diagram</p>
              <p class="text-body-sm text-subtle">Coming soon</p>
            </div>
          </div>
        </section>

        <section class="mt-8" aria-labelledby="tech-stack-heading">
          <h2 id="tech-stack-heading" class="text-h3 text-heading">Tech Stack</h2>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="tech in project.stack" :key="tech" class="tag !px-3 !py-1.5">
              {{ tech }}
            </span>
          </div>
        </section>

        <div class="mt-8 grid gap-8 lg:grid-cols-3">
          <section class="card" aria-labelledby="challenges-heading">
            <div class="flex items-center gap-2">
              <AlertTriangle class="h-4 w-4 text-error" aria-hidden="true" />
              <h2 id="challenges-heading" class="text-body-lg font-medium text-heading">Challenges</h2>
            </div>
            <ul class="mt-4 space-y-2">
              <li
                v-for="(item, idx) in project.challenges"
                :key="idx"
                class="flex gap-2 text-body text-body"
              >
                <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-gold" />
                {{ item }}
              </li>
            </ul>
          </section>

          <section class="card" aria-labelledby="lessons-heading">
            <div class="flex items-center gap-2">
              <Lightbulb class="h-4 w-4 text-brand-gold" aria-hidden="true" />
              <h2 id="lessons-heading" class="text-body-lg font-medium text-heading">Lessons Learned</h2>
            </div>
            <ul class="mt-4 space-y-2">
              <li
                v-for="(item, idx) in project.lessonsLearned"
                :key="idx"
                class="flex gap-2 text-body text-body"
              >
                <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-blue" />
                {{ item }}
              </li>
            </ul>
          </section>

          <section class="card" aria-labelledby="future-heading">
            <div class="flex items-center gap-2">
              <Rocket class="h-4 w-4 text-brand-blue" aria-hidden="true" />
              <h2 id="future-heading" class="text-body-lg font-medium text-heading">Future Improvements</h2>
            </div>
            <ul class="mt-4 space-y-2">
              <li
                v-for="(item, idx) in project.futureImprovements"
                :key="idx"
                class="flex gap-2 text-body text-body"
              >
                <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-blue" />
                {{ item }}
              </li>
            </ul>
          </section>
        </div>

        <section class="card mt-8" aria-labelledby="gallery-heading">
          <div class="flex items-center gap-3">
            <Image class="h-5 w-5 text-brand-gold" aria-hidden="true" />
            <h2 id="gallery-heading" class="text-h3 text-heading">Gallery</h2>
          </div>
          <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="n in 3"
              :key="n"
              class="placeholder-box aspect-video"
              role="img"
              :aria-label="`Project screenshot placeholder ${n}`"
            >
              <div class="text-center">
                <Image class="mx-auto h-6 w-6 text-muted" aria-hidden="true" />
                <p class="mt-1 text-body-sm text-subtle">Screenshot {{ n }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    <Footer />
  </div>

  <div v-else class="flex min-h-screen items-center justify-center bg-surface">
    <div class="text-center">
      <h1 class="text-h3 text-heading">Project not found</h1>
      <RouterLink to="/" class="btn-primary mt-4 inline-flex">Go Home</RouterLink>
    </div>
  </div>
</template>
