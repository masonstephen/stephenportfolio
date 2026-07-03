<script setup>
import { GraduationCap, Briefcase, FlaskConical } from 'lucide-vue-next'
import { interests } from '@/data/portfolio'
</script>

<template>
  <section id="about" class="section-py" aria-labelledby="about-heading">
    <div class="section-container">
      <div data-aos="fade-up">
        <h2 id="about-heading" class="section-heading">About</h2>
        <p class="section-subheading">
          Engineering technology that strengthens communities and accelerates Africa's digital future.
        </p>
      </div>

      <div class="mt-16 grid gap-8 lg:grid-cols-5">
        <div class="lg:col-span-3" data-aos="fade-up" data-aos-delay="100">
          <div class="card">
            <p class="text-body-lg leading-6 text-body">
              I am a final-year Bachelor of Business Information Technology student at
              <strong class="font-medium text-heading">Strathmore University</strong>, with hands-on
              experience building software products that address real challenges across African
              markets. My work spans digital public infrastructure, artificial intelligence, and
              blockchain — technologies I believe can transform how governments, businesses, and
              communities operate.
            </p>
            <p class="mt-4 text-body-lg leading-6 text-body">
              Currently serving as a
              <strong class="font-medium text-heading">Software Engineering Intern at iBiz Africa</strong>
              and a <strong class="font-medium text-heading">Lab Assistant at Strathmore University</strong>,
              I combine academic rigor with practical engineering to deliver solutions that are
              scalable, accessible, and purpose-built for the contexts they serve.
            </p>
            <p class="mt-4 text-body-lg leading-6 text-body">
              I am passionate about building technology that doesn't just work — it empowers. Whether
              developing AI tutoring platforms for Liberian students or researching blockchain land
              registries, my focus remains on creating digital solutions that drive meaningful impact
              across the continent.
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-4 lg:col-span-2" data-aos="fade-up" data-aos-delay="200">
          <div class="card flex items-start gap-4">
            <div class="bg-brand-gold/15 p-2">
              <GraduationCap class="h-5 w-5 text-brand-gold" aria-hidden="true" />
            </div>
            <div>
              <h3 class="text-h3 text-heading">Education</h3>
              <p class="mt-1 text-body text-muted">BBIT, Strathmore University — Final Year</p>
            </div>
          </div>

          <div class="card flex items-start gap-4">
            <div class="bg-brand-gold/15 p-2">
              <Briefcase class="h-5 w-5 text-brand-gold" aria-hidden="true" />
            </div>
            <div>
              <h3 class="text-h3 text-heading">Current Role</h3>
              <p class="mt-1 text-body text-muted">Software Engineering Intern, iBiz Africa</p>
            </div>
          </div>

          <div class="card flex items-start gap-4">
            <div class="bg-brand-gold/15 p-2">
              <FlaskConical class="h-5 w-5 text-brand-gold" aria-hidden="true" />
            </div>
            <div>
              <h3 class="text-h3 text-heading">Lab Assistant</h3>
              <p class="mt-1 text-body text-muted">Strathmore University IT Labs</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12" data-aos="fade-up" data-aos-delay="300">
        <h3 class="mb-4 text-body-sm font-medium uppercase tracking-wider text-muted">
          Areas of Interest
        </h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="interest in interests" :key="interest" class="interest-pill">
            {{ interest }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
