import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layout/MainLayout.vue'


const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/fashion',
        name: 'fashion',
        component: () => import('../views/Fashion.vue')
      },
      {
        path: '/electronic',
        name: 'electronic',
        component: () => import('../views/Electronic.vue')
      },
      {
        path: '/jewellery',
        name: 'jewellery',
        component: () => import('../views/Jewellery.vue')
      }
    ]
  },
  {
    path: '/not-found',
    name: 'notfound',
    component: () => import('../views/404-not-found.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: 'not-found',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
