import { createRouter, createWebHistory } from 'vue-router'
import { updatePageSeo, applyGlobalStructuredData } from '@/utils/seo'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/Home.vue'),
    },
    {
      path: '/resume',
      name: 'Resume',
      component: () => import('@/pages/Resume.vue'),
    },
    {
      path: '/projects/:id',
      name: 'ProjectDetails',
      component: () => import('@/pages/ProjectDetails.vue'),
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 80 }
    }
    return { top: 0, behavior: 'smooth' }
  },
})

router.isReady().then(() => {
  applyGlobalStructuredData()
  updatePageSeo(router.currentRoute.value)
})

router.afterEach((to) => {
  updatePageSeo(to)
})

export default router
