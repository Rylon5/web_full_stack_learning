import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShowUserView from '@/views/users/ShowUsers.vue'
import ShowProjectsView from "@/views/projects/ShowProjects.vue";

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
    path: '/users',
    name: 'users',
    component: ShowUserView
  },
  {
    path: '/users/register',
    name: 'users/register',
    component: () => import('../views/users/CreateUser.vue')
  },
  {
    path: '/users/find',
    name: 'users/find',
    component: () => import('../views/users/FindUser.vue')
  },
  {
    path: '/users/login',
    name: 'users/login',
  },
  {
    path: '/projects',
    name: 'projects',
    component: ShowProjectsView
  },
  {
    path: '/projects/create',
    name: 'projects/create',
    component: () => import('../views/projects/CreateProject.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
