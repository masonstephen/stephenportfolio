<script setup>
import { RouterLink } from 'vue-router'
import { ArrowLeft, Download } from 'lucide-vue-next'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { personalInfo } from '@/data/portfolio'
</script>

<template>
  <div>
    <Navbar />
    <main class="pb-16 pt-24">
      <div class="section-container">
        <RouterLink
          to="/"
          class="mb-8 inline-flex items-center gap-2 text-body-sm font-medium text-nav transition-colors hover:text-brand-blue"
        >
          <ArrowLeft class="h-4 w-4" aria-hidden="true" />
          Back to Home
        </RouterLink>

        <header class="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 class="section-heading">Resume</h1>
            <p class="mt-2 text-body text-muted">{{ personalInfo.name }} — {{ personalInfo.title }}</p>
          </div>
          <a
            :href="personalInfo.cvUrl"
            :download="personalInfo.cvFileName"
            class="btn-primary"
          >
            <Download class="h-4 w-4" aria-hidden="true" />
            Download PDF
          </a>
        </header>

        <div class="card overflow-hidden !p-0">
          <iframe
            :src="personalInfo.cvUrl"
            class="h-[75vh] w-full min-h-[480px] bg-white"
            title="Stephen Mason CV preview"
          />
        </div>

        <p class="mt-4 text-center text-body-sm text-muted">
          PDF not displaying?
          <a
            :href="personalInfo.cvUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="link-primary"
          >
            Open in a new tab
          </a>
        </p>
      </div>
    </main>
    <Footer />
  </div>
</template>
