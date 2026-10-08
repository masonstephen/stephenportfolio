<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import { RouterLink } from 'vue-router'
import {
  ArrowLeft,
  HelpCircle,
  Target,
  ListChecks,
  GitBranch,
  Database,
  Search,
  ShieldCheck,
  Ban,
  TrendingUp,
  Scale,
  Users,
  Cpu,
  FlaskConical,
  BookOpen,
  Clock,
  Sparkles,
  Compass,
  ArrowDown,
  Check,
} from 'lucide-vue-next'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import {
  researchQuestions,
  researchMethodology,
  libaiResearch as libai,
} from '@/data/research'

onMounted(() => {
  AOS.init({
    duration: 700,
    once: true,
    easing: 'ease-out-cubic',
    offset: 40,
  })
})

const stageIcon = {
  done: Check,
  ongoing: Clock,
  planned: ArrowDown,
}

const stageChipClass = {
  done: 'badge-success',
  ongoing: 'badge-primary',
  planned: 'badge-secondary',
}
</script>

<template>
  <div>
    <Navbar />
    <main class="pb-16 pt-24">
      <div class="section-container">
        <RouterLink
          to="/research"
          class="mb-8 inline-flex items-center gap-2 text-body-sm font-medium text-nav transition-colors hover:text-brand-blue"
        >
          <ArrowLeft class="h-4 w-4" aria-hidden="true" />
          Back to Research
        </RouterLink>

        <!-- ============ HEADER ============ -->
        <header class="max-w-3xl" data-aos="fade-up">
          <div class="flex flex-wrap items-center gap-3">
            <span class="badge-secondary">{{ libai.badge }} — {{ libai.status }}</span>
            <span class="text-body-sm text-muted">{{ libai.projectType }}</span>
            <span class="text-body-sm text-muted">{{ libai.context }}</span>
          </div>
          <h1 class="mt-4 section-heading">{{ libai.shortTitle }}</h1>
          <p class="mt-4 text-body-lg leading-relaxed text-body">{{ libai.subtitle }}</p>
          <p class="mt-3 text-body leading-relaxed text-muted">{{ libai.description }}</p>
        </header>

        <!-- ============ RESEARCH PROBLEM ============ -->
        <section class="card mt-12" aria-labelledby="problem-heading" data-aos="fade-up">
          <div class="flex items-center gap-3">
            <HelpCircle class="h-5 w-5 text-brand-gold" aria-hidden="true" />
            <h2 id="problem-heading" class="text-h3 text-heading">Research Problem</h2>
          </div>
          <p class="mt-4 text-body-lg leading-relaxed text-body">{{ libai.problem }}</p>

          <p class="mt-6 text-body leading-relaxed text-body">
            General-purpose LLMs can provide useful educational answers, but their responses may:
          </p>
          <ul class="mt-3 grid gap-2 sm:grid-cols-2">
            <li
              v-for="point in libai.problemPoints"
              :key="point"
              class="flex gap-2 text-body text-body"
            >
              <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-gold" aria-hidden="true" />
              {{ point }}
            </li>
          </ul>

          <p class="mt-6 text-body leading-relaxed text-muted">{{ libai.problemClosing }}</p>
        </section>

        <!-- ============ RESEARCH GAP ============ -->
        <section class="card mt-8" aria-labelledby="gap-heading" data-aos="fade-up">
          <div class="flex items-center gap-3">
            <Target class="h-5 w-5 text-brand-gold" aria-hidden="true" />
            <h2 id="gap-heading" class="text-h3 text-heading">Research Gap</h2>
          </div>
          <p class="mt-4 text-body-lg leading-relaxed text-body">{{ libai.gapLead }}</p>
          <p class="mt-4 text-body leading-relaxed text-body">{{ libai.gap }}</p>

          <p class="mt-6 text-body leading-relaxed text-body">
            The research investigates the integration of:
          </p>
          <ul class="mt-3 grid gap-2 sm:grid-cols-2">
            <li
              v-for="item in libai.gapIntegrations"
              :key="item"
              class="flex gap-2 text-body text-body"
            >
              <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-blue" aria-hidden="true" />
              {{ item }}
            </li>
          </ul>

          <p class="mt-6 text-body leading-relaxed text-muted">{{ libai.gapObjective }}</p>
        </section>

        <!-- ============ RESEARCH QUESTIONS ============ -->
        <section class="mt-12" aria-labelledby="rq-heading" data-aos="fade-up">
          <div class="flex items-center gap-3">
            <ListChecks class="h-5 w-5 text-brand-gold" aria-hidden="true" />
            <h2 id="rq-heading" class="text-h3 text-heading">Research Questions</h2>
          </div>
          <ol class="mt-6 grid gap-4 lg:grid-cols-2">
            <li v-for="rq in researchQuestions" :key="rq.id" class="card flex gap-4 !p-5">
              <span class="text-body-sm font-medium text-brand-blue">{{ rq.id }}</span>
              <span class="text-body leading-relaxed text-body">{{ rq.text }}</span>
            </li>
          </ol>
        </section>

        <!-- ============ RESEARCH APPROACH / PIPELINE ============ -->
        <section class="card mt-12" aria-labelledby="approach-heading" data-aos="fade-up">
          <div class="flex items-center gap-3">
            <GitBranch class="h-5 w-5 text-brand-gold" aria-hidden="true" />
            <h2 id="approach-heading" class="text-h3 text-heading">Research Approach</h2>
          </div>
          <p class="mt-4 text-body leading-relaxed text-body">{{ libai.architecture }}</p>

          <p class="mt-8 mb-4 text-body-sm font-medium uppercase tracking-wider text-muted">
            Conceptual pipeline
          </p>

          <!-- Vertical pipeline; stacks cleanly on mobile -->
          <ol class="mx-auto flex max-w-2xl flex-col items-stretch">
            <li
              v-for="(stage, idx) in libai.pipeline"
              :key="idx"
              class="flex flex-col items-stretch"
            >
              <!-- Single step -->
              <div
                v-if="stage.label"
                class="border border-surface-border bg-surface-muted px-4 py-3 text-center text-body text-heading"
              >
                {{ stage.label }}
              </div>

              <!-- Branch: grounded generation OR abstention -->
              <div v-else class="grid gap-3 sm:grid-cols-2">
                <div
                  v-for="(alt, altIdx) in stage.alternatives"
                  :key="alt"
                  class="border border-brand-gold bg-brand-gold/10 px-4 py-3 text-center text-body text-heading"
                >
                  <span class="block text-caption uppercase tracking-wider text-muted">
                    {{ altIdx === 0 ? 'If evidence is sufficient' : 'If evidence is insufficient' }}
                  </span>
                  {{ alt }}
                </div>
              </div>

              <div
                v-if="idx < libai.pipeline.length - 1"
                class="flex justify-center py-1"
                aria-hidden="true"
              >
                <ArrowDown class="h-4 w-4 text-muted" />
              </div>
            </li>
          </ol>

          <p class="mt-6 text-center text-body-sm text-muted">
            Conceptual pipeline derived from the research documentation — not a claim of completed
            implementation.
          </p>
        </section>

        <!-- ============ CURRICULUM KNOWLEDGE BASE ============ -->
        <section class="card mt-8" aria-labelledby="kb-heading" data-aos="fade-up">
          <div class="flex items-center gap-3">
            <Database class="h-5 w-5 text-brand-gold" aria-hidden="true" />
            <h2 id="kb-heading" class="text-h3 text-heading">Curriculum Knowledge Base</h2>
          </div>
          <p class="mt-4 text-body leading-relaxed text-body">{{ libai.knowledgeBase.intro }}</p>
          <div class="mt-5 flex flex-wrap gap-2">
            <span v-for="concept in libai.knowledgeBase.concepts" :key="concept" class="tag">
              {{ concept }}
            </span>
          </div>
        </section>

        <!-- ============ RETRIEVAL STRATEGY ============ -->
        <section class="card mt-8" aria-labelledby="retrieval-heading" data-aos="fade-up">
          <div class="flex items-center gap-3">
            <Search class="h-5 w-5 text-brand-gold" aria-hidden="true" />
            <h2 id="retrieval-heading" class="text-h3 text-heading">Retrieval Strategy</h2>
          </div>
          <p class="mt-4 text-body leading-relaxed text-body">
            The research compares lexical retrieval, dense retrieval, hybrid retrieval, and
            curriculum-aware / metadata-aware retrieval to investigate how retrieval configuration
            affects evidence quality.
          </p>
          <ul class="mt-4 grid gap-2 sm:grid-cols-2">
            <li
              v-for="item in libai.retrievalStrategy"
              :key="item"
              class="flex gap-2 text-body text-body"
            >
              <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-blue" aria-hidden="true" />
              {{ item }}
            </li>
          </ul>

          <div class="mt-6 border-t border-surface-border pt-5">
            <p class="text-body-sm font-medium uppercase tracking-wider text-muted">
              Planned evaluation metrics
            </p>
            <div class="mt-3 flex flex-wrap gap-2">
              <span v-for="metric in libai.retrievalMetrics" :key="metric" class="tag">
                {{ metric }}
              </span>
            </div>
            <p class="mt-3 text-body-sm text-muted">
              Evaluation metrics the research is designed to measure — no values are reported at
              this stage.
            </p>
          </div>
        </section>

        <!-- ============ EVIDENCE GROUNDING & VERIFICATION ============ -->
        <section class="card mt-8" aria-labelledby="grounding-heading" data-aos="fade-up">
          <div class="flex items-center gap-3">
            <ShieldCheck class="h-5 w-5 text-brand-gold" aria-hidden="true" />
            <h2 id="grounding-heading" class="text-h3 text-heading">
              Evidence Grounding &amp; Verification
            </h2>
          </div>
          <p class="mt-4 text-body leading-relaxed text-body">
            The research investigates whether generated answers are adequately supported by
            retrieved curriculum evidence, and evaluates the following dimensions:
          </p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="dim in libai.groundingDimensions" :key="dim" class="tag">{{ dim }}</span>
          </div>
          <ul class="mt-5 grid gap-2 sm:grid-cols-2">
            <li
              v-for="item in libai.evidenceGrounding"
              :key="item"
              class="flex gap-2 text-body text-body"
            >
              <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-gold" aria-hidden="true" />
              {{ item }}
            </li>
          </ul>
        </section>

        <!-- ============ ANSWERABILITY & ABSTENTION ============ -->
        <section class="card mt-8" aria-labelledby="answerability-heading" data-aos="fade-up">
          <div class="flex items-center gap-3">
            <Ban class="h-5 w-5 text-brand-gold" aria-hidden="true" />
            <h2 id="answerability-heading" class="text-h3 text-heading">
              Answerability &amp; Abstention
            </h2>
          </div>
          <p class="mt-4 text-body leading-relaxed text-body">
            The system distinguishes between questions that can be supported by the available
            curriculum evidence and questions that should not receive a confident answer. Possible
            outcomes:
          </p>
          <ol class="mt-4 grid gap-3 sm:grid-cols-3">
            <li
              v-for="(outcome, idx) in libai.answerabilityOutcomes"
              :key="outcome"
              class="border border-surface-border bg-surface-muted p-4"
            >
              <span class="text-caption font-medium text-brand-blue">{{ idx + 1 }}</span>
              <p class="mt-1 text-body leading-snug text-heading">{{ outcome }}</p>
            </li>
          </ol>

          <ul class="mt-5 space-y-2">
            <li
              v-for="item in libai.answerability"
              :key="item"
              class="flex gap-2 text-body text-body"
            >
              <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-blue" aria-hidden="true" />
              {{ item }}
            </li>
          </ul>

          <div class="mt-6 border-t border-surface-border pt-5">
            <p class="text-body-sm font-medium uppercase tracking-wider text-muted">Evaluation</p>
            <div class="mt-3 flex flex-wrap gap-2">
              <span v-for="m in libai.answerabilityEvaluation" :key="m" class="tag">{{ m }}</span>
            </div>
            <p class="mt-3 text-body leading-relaxed text-muted">
              {{ libai.answerabilityObjective }}
            </p>
          </div>
        </section>

        <!-- ============ EVALUATION FRAMEWORK ============ -->
        <section class="card-elevated mt-12" aria-labelledby="eval-heading" data-aos="fade-up">
          <div class="flex flex-wrap items-center gap-3">
            <TrendingUp class="h-5 w-5 text-brand-gold" aria-hidden="true" />
            <h2 id="eval-heading" class="text-h3 text-heading">Evaluation Framework</h2>
            <span class="badge-primary">Planned / Research Evaluation Framework</span>
          </div>
          <p class="mt-4 text-body leading-relaxed text-body">{{ libai.evaluationNote }}</p>

          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <div
              v-for="group in libai.evaluationGroups"
              :key="group.name"
              class="border border-surface-border bg-surface-card p-5"
            >
              <h3 class="text-body-sm font-medium uppercase tracking-wider text-heading">
                {{ group.name }}
              </h3>
              <ul class="mt-3 flex flex-wrap gap-1.5">
                <li v-for="metric in group.metrics" :key="metric" class="tag">{{ metric }}</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- ============ EXPERIMENTAL COMPARISONS ============ -->
        <section class="card mt-8" aria-labelledby="comparisons-heading" data-aos="fade-up">
          <div class="flex items-center gap-3">
            <Scale class="h-5 w-5 text-brand-gold" aria-hidden="true" />
            <h2 id="comparisons-heading" class="text-h3 text-heading">
              Experimental Comparisons
            </h2>
            <span class="badge-secondary">Planned</span>
          </div>

          <div class="mt-5 divide-y divide-surface-border border-y border-surface-border">
            <div
              v-for="row in libai.comparisons.baselines"
              :key="row.label"
              class="flex flex-wrap items-center justify-between gap-3 py-3"
            >
              <span class="text-body-sm font-medium uppercase tracking-wider text-muted">
                {{ row.label }}
              </span>
              <span
                class="text-body text-heading"
                :class="row.label === 'Proposed' ? 'font-medium' : ''"
              >
                {{ row.name }}
              </span>
            </div>
          </div>

          <p class="mt-5 text-body leading-relaxed text-body">{{ libai.comparisons.note }}</p>
          <p class="mt-3 text-body-sm text-muted">
            No numerical results are reported until experiments are actually completed.
          </p>
        </section>

        <!-- ============ EXPERT EVALUATION ============ -->
        <section class="card mt-8" aria-labelledby="expert-heading" data-aos="fade-up">
          <div class="flex items-center gap-3">
            <Users class="h-5 w-5 text-brand-gold" aria-hidden="true" />
            <h2 id="expert-heading" class="text-h3 text-heading">Expert Evaluation</h2>
            <span class="badge-secondary">Planned</span>
          </div>
          <p class="mt-4 text-body leading-relaxed text-body">
            {{ libai.expertEvaluation.description }}
          </p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="dim in libai.expertEvaluation.dimensions" :key="dim" class="tag">
              {{ dim }}
            </span>
          </div>
        </section>

        <!-- ============ RESOURCE-CONSCIOUS DESIGN ============ -->
        <section class="card mt-8" aria-labelledby="resource-heading" data-aos="fade-up">
          <div class="flex items-center gap-3">
            <Cpu class="h-5 w-5 text-brand-gold" aria-hidden="true" />
            <h2 id="resource-heading" class="text-h3 text-heading">Resource-Conscious Design</h2>
          </div>
          <p class="mt-4 text-body leading-relaxed text-body">
            The research considers bandwidth limitations, device constraints, connectivity
            interruptions, caching, efficient payloads, response latency, and graceful network
            failure. The system is designed to be resource-conscious, connectivity-aware, and
            low-bandwidth — offline AI inference is not claimed.
          </p>
          <ul class="mt-4 grid gap-2 sm:grid-cols-2">
            <li
              v-for="item in libai.deployment"
              :key="item"
              class="flex gap-2 text-body text-body"
            >
              <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-gold" aria-hidden="true" />
              {{ item }}
            </li>
          </ul>
        </section>

        <!-- ============ METHODOLOGY ============ -->
        <section class="card mt-8" aria-labelledby="methodology-heading" data-aos="fade-up">
          <div class="flex items-center gap-3">
            <FlaskConical class="h-5 w-5 text-brand-gold" aria-hidden="true" />
            <h2 id="methodology-heading" class="text-h3 text-heading">Methodology</h2>
          </div>
          <p class="mt-4 text-body-lg font-medium text-heading">Design Science Research</p>
          <p class="mt-2 text-body leading-relaxed text-body">{{ researchMethodology.description }}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="c in researchMethodology.components" :key="c" class="tag">{{ c }}</span>
          </div>
        </section>

        <!-- ============ RESEARCH ETHICS ============ -->
        <section class="card mt-8" aria-labelledby="ethics-heading" data-aos="fade-up">
          <div class="flex items-center gap-3">
            <BookOpen class="h-5 w-5 text-brand-gold" aria-hidden="true" />
            <h2 id="ethics-heading" class="text-h3 text-heading">Research Ethics</h2>
          </div>
          <ul class="mt-4 grid gap-2 sm:grid-cols-2">
            <li v-for="item in libai.ethics" :key="item" class="flex gap-2 text-body text-body">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-blue" aria-hidden="true" />
              {{ item }}
            </li>
          </ul>
          <div class="mt-4 flex flex-wrap gap-2">
            <span class="tag">Student privacy</span>
            <span class="tag">Consent where human participants are involved</span>
            <span class="tag">Educational safety</span>
            <span class="tag">Source and copyright compliance</span>
            <span class="tag">Transparency</span>
            <span class="tag">Responsible AI</span>
            <span class="tag">Appropriate handling of educational content</span>
          </div>
        </section>

        <!-- ============ CURRENT STATUS ============ -->
        <section class="card mt-8" aria-labelledby="status-heading" data-aos="fade-up">
          <div class="flex items-center gap-3">
            <Clock class="h-5 w-5 text-brand-gold" aria-hidden="true" />
            <h2 id="status-heading" class="text-h3 text-heading">Current Status</h2>
          </div>
          <ol class="mt-6 space-y-4 border-l border-surface-border pl-6">
            <li
              v-for="stage in libai.statusStages"
              :key="stage.label"
              class="relative flex flex-wrap items-center justify-between gap-3"
            >
              <span
                class="absolute -left-[27px] flex h-4 w-4 items-center justify-center rounded-full border border-surface-border bg-surface-card"
                aria-hidden="true"
              >
                <component
                  :is="stageIcon[stage.state]"
                  class="h-2.5 w-2.5"
                  :class="
                    stage.state === 'done'
                      ? 'text-emerald-600'
                      : stage.state === 'ongoing'
                        ? 'text-brand-gold'
                        : 'text-muted'
                  "
                />
              </span>
              <span class="text-body text-body">{{ stage.label }}</span>
              <span :class="stageChipClass[stage.state]">{{ stage.chip }}</span>
            </li>
          </ol>
          <p class="mt-5 text-body-sm text-muted">
            Stages are labelled Defined / Designed / Ongoing / Planned based on the current research
            documentation — no completion percentages are implied.
          </p>
        </section>

        <!-- ============ FUTURE RESEARCH ============ -->
        <section class="card mt-8" aria-labelledby="future-heading" data-aos="fade-up">
          <div class="flex items-center gap-3">
            <Sparkles class="h-5 w-5 text-brand-gold" aria-hidden="true" />
            <h2 id="future-heading" class="text-h3 text-heading">Future Research</h2>
          </div>
          <ul class="mt-4 grid gap-2 sm:grid-cols-2">
            <li
              v-for="item in libai.futureResearch"
              :key="item"
              class="flex gap-2 text-body text-body"
            >
              <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-blue" aria-hidden="true" />
              {{ item }}
            </li>
          </ul>
        </section>

        <!-- ============ RESEARCH DIRECTION ============ -->
        <section
          class="card-elevated mt-12 border-l-4 border-l-brand-gold"
          aria-labelledby="direction-heading"
          data-aos="fade-up"
        >
          <div class="flex items-center gap-3">
            <Compass class="h-5 w-5 text-brand-gold" aria-hidden="true" />
            <h2 id="direction-heading" class="text-h3 text-heading">Research Direction</h2>
          </div>
          <p class="mt-4 text-body-lg leading-relaxed text-body">{{ libai.researchDirection }}</p>
          <div class="mt-6 flex flex-wrap gap-3">
            <RouterLink to="/research" class="btn-secondary">
              <ArrowLeft class="h-4 w-4" aria-hidden="true" />
              All Research
            </RouterLink>
            <RouterLink to="/#contact" class="btn-primary">Get in Touch</RouterLink>
          </div>
        </section>
      </div>
    </main>
    <Footer />
  </div>
</template>
