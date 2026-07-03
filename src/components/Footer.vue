<script setup>
import { Github, Linkedin, Mail } from 'lucide-vue-next'
import { personalInfo } from '@/data/portfolio'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-surface-border bg-surface-card py-12" role="contentinfo">
    <div class="section-container">
      <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p class="text-body-sm text-muted">
          &copy; {{ year }} {{ personalInfo.name }}. All rights reserved.
        </p>

        <div class="flex items-center gap-4">
          <a
            :href="personalInfo.github"
            target="_blank"
            rel="noopener noreferrer"
            class="text-body-sm font-medium text-nav transition-colors hover:text-brand-blue"
            aria-label="GitHub"
          >
            <Github class="h-4 w-4" />
          </a>
          <a
            :href="personalInfo.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="text-body-sm font-medium text-nav transition-colors hover:text-brand-blue"
            aria-label="LinkedIn"
          >
            <Linkedin class="h-4 w-4" />
          </a>
          <a
            :href="`mailto:${personalInfo.email}`"
            class="text-body-sm font-medium text-nav transition-colors hover:text-brand-blue"
            aria-label="Email"
          >
            <Mail class="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
