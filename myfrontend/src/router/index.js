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
    path: '/user/signup',
    name: 'Signup',
    component: () => import('../views/SignupPage.vue')
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
  {
    path: '/user/profile',
    name: 'Profile',
    component: () => import('../views/ProfilePage.vue')
  },
  {
    path: '/user/book',
    name: 'Booking',
    component: () => import('../views/BookingPage.vue')
  },
  {
    path: '/user/promotion',
    name: 'Promotion',
    component: () => import('../views/PromotionPage.vue')
  },
  {
    path: '/user/confirm',
    name: 'Confirm',
    component: () => import('../views/ConfirmPage.vue')
  },
  {
    path: '/user/edit',
    name: 'Edit',
    component: () => import('../views/EditPage.vue')
  },
  {
    path: '/user/order',
    name: 'AdminConfirm',
    component: () => import('../views/adminConfirm.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router