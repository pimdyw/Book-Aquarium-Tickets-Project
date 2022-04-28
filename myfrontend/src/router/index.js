import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Lobby',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/user/login',
    name: 'Login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/user/cart',
    name: 'Cart',
    component: () => import('../views/CartPage.vue')
  },
  {
    path: '/user/finish',
    name: 'Fisish',
    component: () => import('../views/PayfinishPage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router