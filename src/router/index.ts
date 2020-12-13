import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/views/Projects.vue')
  },
  {
    path: '/interest',
    name: 'interest',
    component: () => import('@/views/Interest.vue')
  },
  // {
  //   path:'/admin',
  //   name: 'admin',
  //   component: () => import('@/views/Admin/AdminContainer.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
