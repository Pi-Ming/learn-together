export default [
  {
    path: '/401',
    name: '401',
    meta: { title: 'Excpetion.401' },
    component: () => import('./401.vue')
  },
  {
    path: '/404',
    name: '404',
    meta: { title: 'Excpetion.404' },
    component: () => import('./404.vue')
  },
  {
    path: '/500',
    name: '500',
    meta: { title: 'Excpetion.500' },
    component: () => import('./500.vue')
  }
]
