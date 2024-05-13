import { createRouter, createWebHistory } from 'vue-router'
// import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    {
      path: '/',
      name: 'dashboard',
      // component: Dashboard,
      component: () => import('../views/Dashboard.vue'),
      meta: {
        title: 'Dashboard',
      }
    },
    {
      path: '/products',
      name: 'products', 
      component: () => import('../views/Product.vue'),
      meta: {
        title: 'Products',
      }
    }
  ],

  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return new Promise((resolve, reject) => {
      setTimeout(() => { 
        resolve({ left: 0, top: 5, behavior: 'smooth' })
      }, 500)
    }) 
  },  
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | T-Dashboard`
  next()
})

export default router
