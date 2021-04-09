import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import("../views/Home")
  },
  {
    path: '/category',
    name: 'category',
    component: () => import("../views/Category")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
