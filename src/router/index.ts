import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    {
      path: '/',
      name: 'dashboard',
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
    },
    {
      path: '/profile',
      name: 'profile', 
      component: () => import('../views/Profile.vue'),
      meta: {
        title: 'Profile',
      }
    },
    {
      path: '/table',
      name: 'table', 
      component: () => import('../views/Table.vue'),
      meta: {
        title: 'Table',
      }
    },
    {
      path: '/settings',
      name: 'settings', 
      component: () => import('../views/pages/Settings.vue'),
      meta: {
        title: 'Settings',
      }
    },
    {
      path: '/team',
      name: 'team', 
      component: () => import('../views/pages/Team.vue'),
      meta: {
        title: 'Team',
      }
    },
    {
      path: '/icons',
      name: 'icons', 
      component: () => import('../views/Icon.vue'),
      meta: {
        title: 'Icons',
      }
    },
    {
      path: '/login',
      name: 'login', 
      component: () => import('../views/auth/Login.vue'),
      meta: {
        title: 'Login',
      }
    },
    {
      path: '/register',
      name: 'register', 
      component: () => import('../views/auth/Register.vue'),
      meta: {
        title: 'Register',
      }
    },
    {
      path: '/forget-password',
      name: 'forget-password', 
      component: () => import('../views/auth/ForgetPassword.vue'),
      meta: {
        title: 'ForgetPassword',
      }
    },    
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
