<script setup>
import ProjectCard from './ProjectCard.vue'
import { projects } from '@/data/portfolio'
</script>

<template>
  <section id="projects" class="section-py section-alt" aria-labelledby="projects-heading">
    <div class="section-container">
      <div data-aos="fade-up">
        <h2 id="projects-heading" class="section-heading">Featured Projects</h2>
        <p class="section-subheading">
          Digital products engineered for African contexts — from event ticketing to AI education and
          blockchain land governance.
        </p>
      </div>

      <div class="mt-16 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>
