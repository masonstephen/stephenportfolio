<script setup>
import {
  Code,
  Layout,
  Server,
  Database,
  Brain,
  Link,
  Wrench,
} from 'lucide-vue-next'
import { skillCategories } from '@/data/portfolio'

const iconMap = {
  code: Code,
  layout: Layout,
  server: Server,
  database: Database,
  brain: Brain,
  link: Link,
  wrench: Wrench,
}
</script>

<template>
  <section id="skills" class="section-py" aria-labelledby="skills-heading">
    <div class="section-container">
      <div data-aos="fade-up">
        <h2 id="skills-heading" class="section-heading">Technical Skills</h2>
        <p class="section-subheading">
          A versatile toolkit spanning full-stack development, data, AI, and emerging blockchain
          technologies.
        </p>
      </div>

      <div class="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div
          v-for="(category, index) in skillCategories"
          :key="category.name"
          class="card group hover:shadow-raised"
          data-aos="fade-up"
          :data-aos-delay="index * 50"
        >
          <div class="mb-4 flex items-center gap-3">
            <div class="bg-brand-gold/15 p-2 transition-colors group-hover:bg-brand-gold/25">
              <component
                :is="iconMap[category.icon]"
                class="h-4 w-4 text-brand-gold"
                aria-hidden="true"
              />
            </div>
            <h3 class="text-body-lg font-medium text-heading">{{ category.name }}</h3>
          </div>

          <div class="flex flex-wrap gap-1.5">
            <span v-for="skill in category.skills" :key="skill" class="tag">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
