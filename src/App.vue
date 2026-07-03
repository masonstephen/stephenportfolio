<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { initTheme } from '@/utils/theme'
import { resolveFavicon, applyFavicon } from '@/utils/favicon'

onMounted(async () => {
  initTheme()
  applyFavicon(await resolveFavicon())
})
</script>

<template>
  <RouterView />
</template>
