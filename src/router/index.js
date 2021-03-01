import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Contact from '../views/contact.vue'
import About from '../views/about.vue'

const routes = [
    {
        path:'/',
        name: 'Home',
        component: Home
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
      path:'/about',
      name:'About',
      component: About
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
  })

export default router