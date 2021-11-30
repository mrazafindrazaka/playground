import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import Crypto from '@/views/Crypto'
import ToDoList from "@/views/ToDoList";

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
  },
  {
    path: '/todolist',
    name: 'ToDoList',
    component: ToDoList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
