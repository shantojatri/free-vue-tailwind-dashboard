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
  ],

  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("asfdawdfawd")
        resolve({ left: 0, top: 5, behavior: 'smooth' })
      }, 1000)
    }) 
  },
})

export default router
