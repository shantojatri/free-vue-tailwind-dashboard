import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      // component: Dashboard,
      component: () => import('../views/Dashboard.vue')
    },
    {
      path: '/products',
      name: 'products', 
      component: () => import('../views/Product.vue')
    }
  ]
})

export default router
