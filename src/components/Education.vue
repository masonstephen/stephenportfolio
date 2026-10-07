<script setup>
import { GraduationCap, BookOpen, Award } from 'lucide-vue-next'
import {
  education,
  researchPreparation,
  researchPreparationTotal,
  courseworkNote,
  certifications,
} from '@/data/portfolio'
</script>

<template>
  <section id="education" class="section-py section-alt" aria-labelledby="education-heading">
    <div class="section-container">
      <div data-aos="fade-up">
        <h2 id="education-heading" class="section-heading">Education</h2>
        <p class="section-subheading">
          Academic background and formal preparation for research in AI and data science.
        </p>
      </div>

      <div class="mt-16 grid gap-8 lg:grid-cols-2">
        <div class="card" data-aos="fade-up" data-aos-delay="100">
          <div class="flex items-start gap-4">
            <div class="bg-brand-gold/15 p-2">
              <GraduationCap class="h-5 w-5 text-brand-gold" aria-hidden="true" />
            </div>
            <div class="flex-1">
              <span class="badge-secondary">{{ education.status }}</span>
              <h3 class="mt-3 text-h3 text-heading">{{ education.degree }}</h3>
              <p class="mt-1 text-body font-medium text-brand-blue">
                {{ education.institution }} — {{ education.location }}
              </p>

              <dl class="mt-6 space-y-3">
                <div class="flex justify-between gap-4 border-b border-surface-border pb-3">
                  <dt class="text-body-sm text-muted">Expected completion</dt>
                  <dd class="text-body text-heading">{{ education.expectedCompletion }}</dd>
                </div>
                <div class="flex justify-between gap-4 border-b border-surface-border pb-3">
                  <dt class="text-body-sm text-muted">Graduation</dt>
                  <dd class="text-body text-heading">{{ education.graduation }}</dd>
                </div>
                <div class="flex justify-between gap-4 border-b border-surface-border pb-3">
                  <dt class="text-body-sm text-muted">GPA</dt>
                  <dd class="text-body text-heading">{{ education.academicStanding.gpa }}</dd>
                </div>
                <div class="flex justify-between gap-4 border-b border-surface-border pb-3">
                  <dt class="text-body-sm text-muted">
                    {{ education.academicStanding.label }}
                  </dt>
                  <dd class="text-body text-heading">
                    {{ education.academicStanding.classification }} ({{ education.academicStanding.grade }})
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div class="card" data-aos="fade-up" data-aos-delay="200">
          <div class="flex items-start gap-4">
            <div class="bg-brand-gold/15 p-2">
              <BookOpen class="h-5 w-5 text-brand-gold" aria-hidden="true" />
            </div>
            <div class="flex-1">
              <h3 class="text-h3 text-heading">Research Preparation</h3>
              <p class="mt-2 text-body leading-relaxed text-body">
                A formal project and research sequence completed as part of the IS programme.
                Projects were completed collaboratively in a group of four.
              </p>

              <ul class="mt-5 space-y-3">
                <li
                  v-for="item in researchPreparation"
                  :key="item.name"
                  class="border-b border-surface-border pb-3"
                >
                  <div class="flex flex-wrap items-baseline justify-between gap-2">
                    <span class="text-body font-medium text-heading">{{ item.name }}</span>
                    <span class="tag">{{ item.creditHours }}</span>
                  </div>
                  <p class="mt-1 text-body-sm leading-relaxed text-muted">{{ item.note }}</p>
                </li>
              </ul>

              <p class="mt-4 text-body-sm font-medium text-brand-blue">
                Total: {{ researchPreparationTotal }}
              </p>

              <p class="mt-4 text-body leading-relaxed text-body">{{ courseworkNote }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8" data-aos="fade-up" data-aos-delay="300">
        <div class="card">
          <div class="flex items-center gap-3">
            <Award class="h-5 w-5 text-brand-gold" aria-hidden="true" />
            <h3 class="text-h3 text-heading">Certifications</h3>
          </div>
          <ul class="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <li
              v-for="cert in certifications"
              :key="cert.name"
              class="flex items-start gap-3 border border-surface-border bg-surface-muted p-4"
            >
              <span class="mt-1.5 h-1.5 w-1.5 shrink-0 bg-brand-gold" aria-hidden="true" />
              <span>
                <span class="block text-body text-heading">{{ cert.name }}</span>
                <span class="mt-0.5 block text-body-sm text-muted">{{ cert.issuer }}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
