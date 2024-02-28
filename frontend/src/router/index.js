import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShowUserView from '@/views/users/ShowUsers.vue'
import CreateUserView from '@/views/users/CreateUser.vue'
import FindUserView from "@/views/users/FindUser.vue";
import ShowProjects from "@/views/projects/ShowProjects.vue";

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
    path: '/users/create',
    name: 'create',
    component: CreateUserView
  },
  {
    path: '/users/find',
    name: 'find',
    component: FindUserView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ShowProjects
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
