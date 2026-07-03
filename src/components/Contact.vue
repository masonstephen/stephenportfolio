<script setup>
import { RouterLink } from 'vue-router'
import { FileText, Github, Linkedin, Mail, Phone, ArrowUpRight } from 'lucide-vue-next'
import { personalInfo } from '@/data/portfolio'
</script>

<template>
  <section id="contact" class="section-py section-alt" aria-labelledby="contact-heading">
    <div class="section-container">
      <div data-aos="fade-up">
        <h2 id="contact-heading" class="section-heading">Get in Touch</h2>
        <p class="section-subheading">
          Open to collaborations, internships, and opportunities to build technology for social
          impact across Africa and beyond.
        </p>
      </div>

      <div class="card-elevated relative mt-16 overflow-hidden" data-aos="fade-up" data-aos-delay="100">
        <div class="grid gap-8 md:grid-cols-2">
          <div>
            <h3 class="text-h3 text-heading">Let's build something meaningful.</h3>
            <p class="mt-3 text-body leading-relaxed text-body">
              Whether you're an organization driving digital transformation, a startup building for
              African markets, or a fellow engineer — I'd love to connect and explore how we can
              create impact together.
            </p>

            <RouterLink to="/resume" class="btn-primary mt-6">
              <FileText class="h-4 w-4" aria-hidden="true" />
              View CV
            </RouterLink>
          </div>

          <div class="flex flex-col gap-3">
            <a :href="`mailto:${personalInfo.email}`" class="contact-link group">
              <div class="bg-brand-gold/15 p-2">
                <Mail class="h-4 w-4 text-brand-gold" aria-hidden="true" />
              </div>
              <div class="flex-1">
                <p class="text-body-sm text-muted">Email</p>
                <p class="text-body text-emphasis">{{ personalInfo.email }}</p>
              </div>
              <ArrowUpRight
                class="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-blue"
                aria-hidden="true"
              />
            </a>

            <a :href="`tel:${personalInfo.phone}`" class="contact-link group">
              <div class="bg-brand-gold/15 p-2">
                <Phone class="h-4 w-4 text-brand-gold" aria-hidden="true" />
              </div>
              <div class="flex-1">
                <p class="text-body-sm text-muted">Phone</p>
                <p class="text-body text-emphasis">{{ personalInfo.phone }}</p>
              </div>
              <ArrowUpRight
                class="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-blue"
                aria-hidden="true"
              />
            </a>

            <a
              :href="personalInfo.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-link group"
            >
              <div class="bg-brand-gold/15 p-2">
                <Linkedin class="h-4 w-4 text-brand-gold" aria-hidden="true" />
              </div>
              <div class="flex-1">
                <p class="text-body-sm text-muted">LinkedIn</p>
                <p class="text-body text-emphasis">Connect professionally</p>
              </div>
              <ArrowUpRight
                class="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-blue"
                aria-hidden="true"
              />
            </a>

            <a
              :href="personalInfo.github"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-link group"
            >
              <div class="bg-brand-gold/15 p-2">
                <Github class="h-4 w-4 text-brand-gold" aria-hidden="true" />
              </div>
              <div class="flex-1">
                <p class="text-body-sm text-muted">GitHub</p>
                <p class="text-body text-emphasis">View open-source work</p>
              </div>
              <ArrowUpRight
                class="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-blue"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
