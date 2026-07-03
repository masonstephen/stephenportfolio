<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Experience from '@/components/Experience.vue'
import Skills from '@/components/Skills.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

onMounted(() => {
  AOS.init({
    duration: 700,
    once: true,
    easing: 'ease-out-cubic',
    offset: 40,
  })
})
</script>

<template>
  <div>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
    <Footer />
  </div>
</template>
