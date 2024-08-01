import { createRouter, createWebHistory } from 'vue-router'
import ViewHome from '../Views/ViewHome.vue'
const routes = [
    {
      path: '/',
      name: 'Home',
      component: ViewHome,
      meta:{
        layout:'main',
        auth:true
      }
    },
    {
      path: '/html',
      name: 'HTML',
      component: () => import('../Views/ViewHtml.vue'),
      meta:{
        layout:'main',
      }
    }
    ,
    {
      path: '/css',
      name: 'CSS',
      component: () => import('../Views/ViewCss.vue'),
      meta:{
        layout:'main',
        auth:true
      }
    }
]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass:'active',
    linkExactActiveClass:'active'
  })
  export default router
  