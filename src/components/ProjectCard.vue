<script setup>
import { RouterLink } from 'vue-router'
import { ArrowRight, ExternalLink, Github } from 'lucide-vue-next'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const statusStyles = {
  amber: 'badge-primary',
  violet: 'badge-secondary',
  emerald: 'badge-primary',
}
</script>

<template>
  <article class="card group flex flex-col hover:shadow-raised">
    <div class="flex items-start justify-between gap-4">
      <div>
        <h3 class="text-h3 text-heading transition-colors group-hover:text-brand-blue">
          {{ project.name }}
        </h3>
        <p class="mt-1 text-body-sm text-muted">{{ project.tagline }}</p>
      </div>
      <span class="status-badge shrink-0" :class="statusStyles[project.statusColor] || 'badge-secondary'">
        {{ project.status }}
      </span>
    </div>

    <div class="mt-4 flex flex-wrap gap-1.5">
      <span v-for="tech in project.stack" :key="tech" class="tag">{{ tech }}</span>
    </div>

    <div class="mt-5 flex-1 space-y-3">
      <div>
        <h4 class="text-body-sm font-medium uppercase tracking-wider text-muted">Problem</h4>
        <p class="mt-1 line-clamp-3 text-body leading-relaxed text-body">{{ project.problem }}</p>
      </div>
      <div>
        <h4 class="text-body-sm font-medium uppercase tracking-wider text-muted">Solution</h4>
        <p class="mt-1 line-clamp-3 text-body leading-relaxed text-body">{{ project.solution }}</p>
      </div>
    </div>

    <div class="mt-4">
      <h4 class="text-body-sm font-medium uppercase tracking-wider text-muted">Features</h4>
      <ul class="mt-2 grid grid-cols-2 gap-1">
        <li
          v-for="feature in project.features"
          :key="feature"
          class="flex items-center gap-1.5 text-body-sm text-body"
        >
          <span class="h-1.5 w-1.5 bg-brand-gold" />
          {{ feature }}
        </li>
      </ul>
    </div>

    <div class="mt-6 flex flex-wrap gap-2 border-t border-surface-border pt-5">
      <RouterLink
        :to="`/projects/${project.id}`"
        class="btn-primary group/btn !h-10 !px-6 !text-body"
      >
        View Details
        <ArrowRight
          class="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5"
          aria-hidden="true"
        />
      </RouterLink>
      <a
        v-if="project.github"
        :href="project.github"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-secondary !h-10 !px-6 !text-body"
      >
        <Github class="h-3 w-3" aria-hidden="true" />
        GitHub
      </a>
      <a
        v-if="project.liveDemo"
        :href="project.liveDemo"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-ghost !h-10 !px-6 !text-body"
      >
        <ExternalLink class="h-3 w-3" aria-hidden="true" />
        Live Demo
      </a>
    </div>
  </article>
</template>
