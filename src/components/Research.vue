<script setup>
import { RouterLink } from 'vue-router'
import { ArrowRight, Search, BookOpen } from 'lucide-vue-next'
import { interests } from '@/data/portfolio'
import { researchIntro, researchQuestions, libaiResearch } from '@/data/research'
</script>

<template>
  <section id="research" class="section-py" aria-labelledby="research-heading">
    <div class="section-container">
      <div data-aos="fade-up">
        <h2 id="research-heading" class="section-heading">Research</h2>
        <p class="section-subheading">{{ researchIntro }}</p>
      </div>

      <div class="mt-12" data-aos="fade-up" data-aos-delay="100">
        <h3 class="mb-4 text-body-sm font-medium uppercase tracking-wider text-muted">
          Research Interests
        </h3>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="interest in interests"
            :key="interest"
            class="card flex items-start gap-3 !p-4"
          >
            <span class="mt-1.5 h-2 w-2 shrink-0 bg-brand-gold" aria-hidden="true" />
            <span class="text-body leading-snug text-body">{{ interest }}</span>
          </div>
        </div>
      </div>

      <div class="card-elevated mt-12" data-aos="fade-up" data-aos-delay="150">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div class="max-w-3xl">
            <div class="flex flex-wrap items-center gap-3">
              <span class="badge-secondary">{{ libaiResearch.status }}</span>
              <span class="text-body-sm text-muted">Featured research project</span>
            </div>
            <h3 class="mt-4 text-h3 text-heading">{{ libaiResearch.title }}</h3>
            <p class="mt-3 text-body-lg leading-relaxed text-body">
              {{ libaiResearch.description }}
            </p>
            <p class="mt-3 text-body leading-relaxed text-muted">{{ libaiResearch.purpose }}</p>
          </div>
          <RouterLink to="/research/libai" class="btn-primary group shrink-0">
            View Research
            <ArrowRight
              class="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </RouterLink>
        </div>

        <div class="mt-6 flex flex-wrap gap-1.5">
          <span v-for="area in libaiResearch.areas" :key="area" class="tag">{{ area }}</span>
        </div>
      </div>

      <div class="mt-12" data-aos="fade-up" data-aos-delay="200">
        <div class="mb-6 flex items-center gap-3">
          <BookOpen class="h-5 w-5 text-brand-gold" aria-hidden="true" />
          <h3 class="text-h3 text-heading">Current Research Questions</h3>
        </div>
        <ol class="grid gap-4 lg:grid-cols-2">
          <li v-for="rq in researchQuestions" :key="rq.id" class="card flex gap-4 !p-5">
            <span class="text-body-sm font-medium text-brand-blue">{{ rq.id }}</span>
            <span class="text-body leading-relaxed text-body">{{ rq.text }}</span>
          </li>
        </ol>
        <p class="mt-6 flex items-center gap-2 text-body-sm text-muted">
          <Search class="h-4 w-4" aria-hidden="true" />
          Methodology, evaluation framework, and full project details are on the
          <RouterLink to="/research/libai" class="link-primary">LibAI research page</RouterLink>.
        </p>
      </div>
    </div>
  </section>
</template>
