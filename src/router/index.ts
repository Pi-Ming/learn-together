import { createRouter, createWebHistory } from 'vue-router'
import loginRoutes from '@/views/login/routes'
import exceptionRoutes from '@/views/exception/routes'
import homeRoutes from '@/views/home/routes'
const router = createRouter({
  // @ts-ignore -- xxx
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:catchAll(.*)', redirect: '/' },
    ...exceptionRoutes,
    ...loginRoutes,
    ...homeRoutes
  ]
})

export default router
