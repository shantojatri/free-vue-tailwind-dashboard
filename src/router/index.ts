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
      path: '/tables',
      name: 'tables', 
      component: () => import('../views/Table.vue'),
      meta: {
        title: 'Tables',
      }
    },    
    {
      path: '/charts',
      name: 'charts', 
      component: () => import('../views/Chart.vue'),
      meta: {
        title: 'Charts',
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
      path: '/typography',
      name: 'typography', 
      component: () => import('../views/Typography.vue'),
      meta: {
        title: 'Typography',
      }
    },
    {
      path: '/profile',
      name: 'profile', 
      component: () => import('../views/users/Profile.vue'),
      meta: {
        title: 'Profile',
      }
    },  
    {
      path: '/update-password',
      name: 'update-password', 
      component: () => import('../views/users/UpdatePassword.vue'),
      meta: {
        title: 'Update Password',
      }
    },  
    {
      path: '/settings',
      name: 'settings', 
      component: () => import('../views/others/Settings.vue'),
      meta: {
        title: 'Settings',
      }
    },
    {
      path: '/teams',
      name: 'teams', 
      component: () => import('../views/others/Team.vue'),
      meta: {
        title: 'Teams',
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
        title: 'Forget Password',
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
