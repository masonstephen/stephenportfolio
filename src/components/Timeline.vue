<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
  isLast: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="relative flex gap-6 pb-12 last:pb-0">
    <div class="flex flex-col items-center">
      <div
        class="z-10 flex h-10 w-10 shrink-0 items-center justify-center border-2 border-brand-gold bg-surface-card"
      >
        <div class="h-3 w-3 bg-brand-gold" />
      </div>
      <div
        v-if="!isLast"
        class="mt-2 w-px flex-1 bg-gradient-to-b from-brand-gold/40 to-surface-border"
      />
    </div>

    <div class="card flex-1 !p-5 hover:shadow-raised">
      <div class="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 class="text-h3 text-heading">{{ item.role }}</h3>
          <p class="mt-0.5 text-body font-medium text-brand-blue">{{ item.company }}</p>
        </div>
        <div class="text-right">
          <p class="text-body text-muted">{{ item.period }}</p>
          <p class="text-body-sm text-subtle">{{ item.location }}</p>
        </div>
      </div>

      <ul class="mt-4 space-y-2">
        <li
          v-for="(resp, idx) in item.responsibilities"
          :key="idx"
          class="flex gap-2 text-body leading-relaxed text-body"
        >
          <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-gold" />
          {{ resp }}
        </li>
      </ul>
    </div>
  </div>
</template>
