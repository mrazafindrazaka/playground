import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Crypto from '../views/Crypto'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/crypto',
    name: 'Crypto',
    component: Crypto
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
