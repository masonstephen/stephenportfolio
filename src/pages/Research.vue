<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import { RouterLink } from 'vue-router'
import {
  ArrowLeft,
  ArrowRight,
  Users,
  BookOpen,
  Target,
  FlaskConical,
  Scale,
  Search,
  AlertTriangle,
  Sparkles,
  Check,
  Clock,
  Compass,
  GraduationCap,
} from 'lucide-vue-next'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import {
  interests,
  researchPreparation,
  researchPreparationTotal,
  courseworkNote,
} from '@/data/portfolio'
import {
  researchIntro,
  researchProfile,
  libaiResearch,
  gitaruResearch,
  futureDirection,
} from '@/data/research'

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
    <main class="pb-16 pt-24">
      <div class="section-container">
        <RouterLink
          to="/"
          class="mb-8 inline-flex items-center gap-2 text-body-sm font-medium text-nav transition-colors hover:text-brand-blue"
        >
          <ArrowLeft class="h-4 w-4" aria-hidden="true" />
          Back to Home
        </RouterLink>

        <!-- ============ HERO / RESEARCH PROFILE INTRO ============ -->
        <header class="max-w-3xl" data-aos="fade-up">
          <span class="badge-secondary">Research</span>
          <h1 class="mt-4 section-heading">AI, Data Science &amp; Trustworthy AI Research</h1>
          <p class="mt-4 text-body-lg leading-relaxed text-body">{{ researchIntro }}</p>
        </header>

        <!-- ============ 1. RESEARCH PROFILE ============ -->
        <section class="mt-16" aria-labelledby="profile-heading" data-aos="fade-up">
          <h2
            id="profile-heading"
            class="mb-4 text-body-sm font-medium uppercase tracking-wider text-muted"
          >
            Research Profile
          </h2>
          <div class="grid gap-4 lg:grid-cols-3">
            <div
              v-for="strand in researchProfile"
              :key="strand.label"
              class="card flex flex-col !p-5"
            >
              <span class="text-body-sm font-medium uppercase tracking-wider text-brand-gold">
                {{ strand.label }}
              </span>
              <h3 class="mt-2 text-h3 text-heading">{{ strand.title }}</h3>
              <p class="mt-2 text-body leading-relaxed text-muted">{{ strand.detail }}</p>
            </div>
          </div>
        </section>

        <!-- ============ 2. RESEARCH INTERESTS ============ -->
        <section class="mt-16" aria-labelledby="interests-heading" data-aos="fade-up">
          <h2
            id="interests-heading"
            class="mb-4 text-body-sm font-medium uppercase tracking-wider text-muted"
          >
            Research Interests
          </h2>
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="interest in interests" :key="interest" class="card flex items-start gap-3 !p-4">
              <span class="mt-1.5 h-2 w-2 shrink-0 bg-brand-gold" aria-hidden="true" />
              <span class="text-body leading-snug text-body">{{ interest }}</span>
            </div>
          </div>
        </section>

        <!-- ============ 3. INDEPENDENT AI RESEARCH — LIBAI ============ -->
        <section
          class="mt-16 border border-surface-border bg-surface-card p-6 md:p-8"
          aria-labelledby="libai-card-heading"
          data-aos="fade-up"
        >
          <p class="text-body-sm font-medium uppercase tracking-wider text-muted">
            Independent AI Research
          </p>

          <div class="mt-4 flex flex-wrap items-start justify-between gap-4">
            <div class="max-w-3xl">
              <div class="flex flex-wrap items-center gap-3">
                <span class="badge-secondary">{{ libaiResearch.badge }}</span>
                <span class="text-body-sm text-muted">{{ libaiResearch.projectType }}</span>
                <span class="text-body-sm text-muted">Status: {{ libaiResearch.status }}</span>
                <span class="flex items-center gap-1.5 text-body-sm text-muted">
                  <BookOpen class="h-4 w-4" aria-hidden="true" />
                  {{ libaiResearch.context }}
                </span>
              </div>

              <h2 id="libai-card-heading" class="mt-4 text-h3 text-heading">
                {{ libaiResearch.shortTitle }}
                <span class="text-body-lg font-normal text-muted">
                  — {{ libaiResearch.tagline }}
                </span>
              </h2>

              <p class="mt-4 text-body-lg leading-relaxed text-body">
                {{ libaiResearch.description }}
              </p>
            </div>

            <RouterLink to="/research/libai" class="btn-primary group shrink-0">
              Explore LibAI Research
              <ArrowRight
                class="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </RouterLink>
          </div>

          <div class="mt-6 flex flex-wrap gap-1.5">
            <span v-for="area in libaiResearch.areas" :key="area" class="tag">{{ area }}</span>
          </div>

          <p class="mt-4 text-body-sm text-muted">
            Independent work — not a university final-year project, group project, or graduation
            requirement.
          </p>
        </section>

        <!-- ============ 4. ACADEMIC RESEARCH — GITARU ============ -->
        <section
          id="gitaru"
          class="card-elevated mt-16 scroll-mt-28"
          aria-labelledby="gitaru-heading"
          data-aos="fade-up"
        >
          <p class="text-body-sm font-medium uppercase tracking-wider text-muted">
            Academic Research
          </p>

          <div class="mt-4 flex flex-wrap items-center gap-3">
            <span class="badge-primary">{{ gitaruResearch.badge }}</span>
            <span class="badge-secondary">{{ gitaruResearch.presentation.badge }}</span>
            <span class="flex items-center gap-1.5 text-body-sm text-muted">
              <GraduationCap class="h-4 w-4" aria-hidden="true" />
              {{ gitaruResearch.institution }}
            </span>
          </div>

          <h2 id="gitaru-heading" class="mt-4 text-h3 text-heading">
            {{ gitaruResearch.title }}
          </h2>
          <p class="mt-1 text-body-lg text-muted">{{ gitaruResearch.subtitle }}</p>

          <div class="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-body-sm text-body">
            <span><span class="text-muted">Status:</span> {{ gitaruResearch.status }}</span>
            <span><span class="text-muted">Project format:</span> {{ gitaruResearch.format }}</span>
          </div>

          <p class="mt-4 text-body-lg leading-relaxed text-body">
            {{ gitaruResearch.description }}
          </p>
          <p class="mt-3 text-body leading-relaxed text-body">{{ gitaruResearch.aim }}</p>

          <!-- Team -->
          <div class="mt-6 border-t border-surface-border pt-5">
            <p class="flex items-center gap-2 text-body-sm font-medium uppercase tracking-wider text-muted">
              <Users class="h-4 w-4 text-brand-gold" aria-hidden="true" />
              Team — Group of Four
            </p>
            <div class="mt-3 flex flex-wrap gap-2">
              <span v-for="member in gitaruResearch.team" :key="member" class="tag">
                {{ member }}
              </span>
            </div>
            <p class="mt-3 text-body-sm text-muted">{{ gitaruResearch.submissionNote }}</p>
          </div>

          <div class="mt-6 border-t border-surface-border pt-5">
            <p class="text-body-sm text-muted">
              Presented as a collaborative final-year Information Systems project — individual
              contributions are not itemised on this site.
            </p>
          </div>
        </section>

        <!-- Gitaru: problem + objectives -->
        <div class="mt-8 grid gap-8 lg:grid-cols-2">
          <section class="card" aria-labelledby="gitaru-problem-heading" data-aos="fade-up">
            <div class="flex items-center gap-3">
              <Target class="h-5 w-5 text-brand-gold" aria-hidden="true" />
              <h3 id="gitaru-problem-heading" class="text-h3 text-heading">Research Problem</h3>
            </div>
            <p class="mt-4 text-body leading-relaxed text-body">{{ gitaruResearch.problem }}</p>
          </section>

          <section class="card" aria-labelledby="gitaru-objectives-heading" data-aos="fade-up">
            <div class="flex items-center gap-3">
              <Check class="h-5 w-5 text-brand-gold" aria-hidden="true" />
              <h3 id="gitaru-objectives-heading" class="text-h3 text-heading">Objectives</h3>
            </div>
            <ul class="mt-4 space-y-2">
              <li
                v-for="objective in gitaruResearch.objectives"
                :key="objective"
                class="flex gap-2 text-body leading-relaxed text-body"
              >
                <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-gold" aria-hidden="true" />
                {{ objective }}
              </li>
            </ul>
          </section>
        </div>

        <!-- Gitaru: methodology + stakeholders + data collection -->
        <div class="mt-8 grid gap-8 lg:grid-cols-3">
          <section class="card" aria-labelledby="gitaru-method-heading" data-aos="fade-up">
            <div class="flex items-center gap-3">
              <FlaskConical class="h-5 w-5 text-brand-gold" aria-hidden="true" />
              <h3 id="gitaru-method-heading" class="text-h3 text-heading">Methodology</h3>
            </div>
            <p class="mt-4 text-body-lg font-medium text-heading">
              {{ gitaruResearch.methodology.approach }}
            </p>
            <p class="mt-2 text-body leading-relaxed text-body">
              {{ gitaruResearch.methodology.description }}
            </p>
            <ol class="mt-4 flex flex-wrap gap-2">
              <li
                v-for="(step, idx) in gitaruResearch.methodology.steps"
                :key="step"
                class="tag"
              >
                {{ idx + 1 }}. {{ step }}
              </li>
            </ol>
          </section>

          <section class="card" aria-labelledby="gitaru-stakeholders-heading" data-aos="fade-up">
            <div class="flex items-center gap-3">
              <Scale class="h-5 w-5 text-brand-gold" aria-hidden="true" />
              <h3 id="gitaru-stakeholders-heading" class="text-h3 text-heading">Stakeholders</h3>
            </div>
            <p class="mt-4 text-body-sm font-medium uppercase tracking-wider text-muted">
              Primary
            </p>
            <div class="mt-2 flex flex-wrap gap-2">
              <span v-for="s in gitaruResearch.stakeholders.primary" :key="s" class="tag">
                {{ s }}
              </span>
            </div>
            <p class="mt-4 text-body-sm font-medium uppercase tracking-wider text-muted">
              Supporting
            </p>
            <div class="mt-2 flex flex-wrap gap-2">
              <span v-for="s in gitaruResearch.stakeholders.supporting" :key="s" class="tag">
                {{ s }}
              </span>
            </div>
            <ul class="mt-4 space-y-2">
              <li
                v-for="note in gitaruResearch.stakeholders.notes"
                :key="note"
                class="flex gap-2 text-body leading-relaxed text-body"
              >
                <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-blue" aria-hidden="true" />
                {{ note }}
              </li>
            </ul>
          </section>

          <section class="card" aria-labelledby="gitaru-data-heading" data-aos="fade-up">
            <div class="flex items-center gap-3">
              <Search class="h-5 w-5 text-brand-gold" aria-hidden="true" />
              <h3 id="gitaru-data-heading" class="text-h3 text-heading">Data Collection</h3>
            </div>
            <div class="mt-4 flex flex-wrap gap-2">
              <span v-for="method in gitaruResearch.dataCollection" :key="method" class="tag">
                {{ method }}
              </span>
            </div>
            <p class="mt-4 text-body leading-relaxed text-muted">
              {{ gitaruResearch.samplingNote }}
            </p>
          </section>
        </div>

        <!-- Gitaru: challenges + ideation -->
        <div class="mt-8 grid gap-8 lg:grid-cols-2">
          <section class="card" aria-labelledby="gitaru-challenges-heading" data-aos="fade-up">
            <div class="flex items-center gap-3">
              <AlertTriangle class="h-5 w-5 text-brand-gold" aria-hidden="true" />
              <h3 id="gitaru-challenges-heading" class="text-h3 text-heading">Key Challenges</h3>
            </div>
            <div class="mt-4 flex flex-wrap gap-2">
              <span v-for="challenge in gitaruResearch.challenges" :key="challenge" class="tag">
                {{ challenge }}
              </span>
            </div>
          </section>

          <section class="card" aria-labelledby="gitaru-ideation-heading" data-aos="fade-up">
            <div class="flex items-center gap-3">
              <Sparkles class="h-5 w-5 text-brand-gold" aria-hidden="true" />
              <h3 id="gitaru-ideation-heading" class="text-h3 text-heading">Ideation</h3>
            </div>
            <p class="mt-4 text-body leading-relaxed text-body">
              Major solution concepts documented during the ideation stage:
            </p>
            <div class="mt-3 flex flex-wrap gap-2">
              <span v-for="concept in gitaruResearch.ideation" :key="concept" class="tag">
                {{ concept }}
              </span>
            </div>
          </section>
        </div>

        <!-- Gitaru: selected solution + presentation -->
        <div class="mt-8 grid gap-8 lg:grid-cols-2">
          <section
            class="card border-l-4 border-l-brand-gold"
            aria-labelledby="gitaru-solution-heading"
            data-aos="fade-up"
          >
            <div class="flex items-center gap-3">
              <Check class="h-5 w-5 text-brand-gold" aria-hidden="true" />
              <h3 id="gitaru-solution-heading" class="text-h3 text-heading">Selected Solution</h3>
            </div>
            <p class="mt-4 text-h3 text-heading">
              {{ gitaruResearch.selectedSolution.title }}
            </p>
            <p class="mt-2 text-body leading-relaxed text-body">
              Selected for its potential to deliver:
            </p>
            <div class="mt-3 flex flex-wrap gap-2">
              <span
                v-for="r in gitaruResearch.selectedSolution.rationale"
                :key="r"
                class="tag"
              >
                {{ r }}
              </span>
            </div>
            <p class="mt-4 text-body-sm font-medium uppercase tracking-wider text-muted">
              Selection criteria
            </p>
            <div class="mt-2 flex flex-wrap gap-2">
              <span v-for="c in gitaruResearch.selectedSolution.criteria" :key="c" class="tag">
                {{ c }}
              </span>
            </div>
            <p class="mt-4 text-body-sm text-muted">{{ gitaruResearch.selectedSolution.note }}</p>
          </section>

          <section
            class="card-elevated border-l-4 border-l-brand-blue"
            aria-labelledby="gitaru-presentation-heading"
            data-aos="fade-up"
          >
            <div class="flex items-center gap-3">
              <Clock class="h-5 w-5 text-brand-blue" aria-hidden="true" />
              <h3 id="gitaru-presentation-heading" class="text-h3 text-heading">
                {{ gitaruResearch.presentation.label }}
              </h3>
            </div>
            <p class="mt-4 text-h3 text-heading">{{ gitaruResearch.presentation.date }}</p>
            <div class="mt-3 flex flex-wrap items-center gap-3">
              <span class="badge-primary">{{ gitaruResearch.presentation.badge }}</span>
              <span class="text-body-sm text-muted">{{ gitaruResearch.status }}</span>
            </div>
            <p class="mt-4 text-body leading-relaxed text-muted">
              {{ gitaruResearch.presentation.note }}
            </p>
          </section>
        </div>

        <!-- ============ 5. RESEARCH METHODS / ACADEMIC PREPARATION ============ -->
        <section class="mt-16" aria-labelledby="methods-heading" data-aos="fade-up">
          <div class="flex items-center gap-3">
            <FlaskConical class="h-5 w-5 text-brand-gold" aria-hidden="true" />
            <h2 id="methods-heading" class="text-h3 text-heading">
              Research Methods / Academic Preparation
            </h2>
          </div>

          <div class="mt-6 grid gap-4 sm:grid-cols-3">
            <div v-for="course in researchPreparation" :key="course.name" class="card !p-5">
              <h3 class="text-body-lg font-medium text-heading">{{ course.name }}</h3>
              <p class="mt-1 text-body-sm text-brand-blue">{{ course.creditHours }}</p>
              <p class="mt-2 text-body leading-relaxed text-muted">{{ course.note }}</p>
            </div>
          </div>

          <div class="mt-4 flex flex-wrap items-center gap-3">
            <span class="tag">{{ researchPreparationTotal }}</span>
            <span class="text-body-sm text-muted">{{ courseworkNote }}</span>
          </div>
        </section>

        <!-- ============ 6. FUTURE RESEARCH DIRECTION ============ -->
        <section
          class="card-elevated mt-16 border-l-4 border-l-brand-gold"
          aria-labelledby="direction-heading"
          data-aos="fade-up"
        >
          <div class="flex items-center gap-3">
            <Compass class="h-5 w-5 text-brand-gold" aria-hidden="true" />
            <h2 id="direction-heading" class="text-h3 text-heading">Future Research Direction</h2>
          </div>
          <p class="mt-4 text-body-lg leading-relaxed text-body">{{ futureDirection }}</p>
          <div class="mt-6 flex flex-wrap gap-3">
            <RouterLink to="/research/libai" class="btn-primary group">
              Explore LibAI Research
              <ArrowRight
                class="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </RouterLink>
            <RouterLink to="/#contact" class="btn-secondary">Get in Touch</RouterLink>
          </div>
        </section>
      </div>
    </main>
    <Footer />
  </div>
</template>
