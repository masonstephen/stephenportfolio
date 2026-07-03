<script setup>
import Timeline from './Timeline.vue'
import { experience } from '@/data/portfolio'
</script>

<template>
  <section id="experience" class="section-py section-alt" aria-labelledby="experience-heading">
    <div class="section-container">
      <div data-aos="fade-up">
        <h2 id="experience-heading" class="section-heading">Experience</h2>
        <p class="section-subheading">
          A journey across education, innovation hubs, and community impact — building skills that
          translate into real-world engineering.
        </p>
      </div>

      <div class="mt-16 max-w-3xl">
        <Timeline
          v-for="(item, index) in experience"
          :key="item.id"
          :item="item"
          :is-last="index === experience.length - 1"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        />
      </div>
    </div>
  </section>
</template>
