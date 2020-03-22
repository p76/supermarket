import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:  '/homePage'
  },
  {
    path: '/proFile',
    name: 'ProFile',
    component: () => import('../views/ProFile.vue')
  },
  {
    path: '/purchase',
    name: 'Purchase',
    component: () => import('../views/Purchase.vue')
  },
  {
    path: '/radio',
    name: 'Radio',
    component: () => import('../views/Radio.vue')
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: () => import('../views/HomePage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
