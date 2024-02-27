import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShowUserComponent from '@/components/user/ShowUser.vue'
import CreateUserComponent from '@/components/user/CreateUser.vue'
import FindUserComponent from "@/components/user/FindUser.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: ShowUserComponent
  },
  {
    path: '/user/create',
    name: 'create',
    component: CreateUserComponent
  },
  {
    path: '/user/find',
    name: 'find',
    component: FindUserComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
