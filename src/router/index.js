import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:  Home
  },
  {
    path: '/biography',
    name: 'Biography',
    component: () => import(/* webpackChunkName: "Biography" */'../views/Biography.vue')
  },
  {
    path: '/progress',
    name: 'Progress',
    component: () => import(/* webpackChunkName: "Progress" */'../views/Progress.vue')
  },
  {
    path: '/documentary',
    name: 'Documentary',
    component: () => import(/* webpackChunkName: "Documentary" */'../views/Documentary.vue')
  },
  {
    path: '/progress-details/:id',
    name: 'ProgressDetails',
    component: () => import(/* webpackChunkName: "PageDetails" */'../views/ProgressDetails.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
