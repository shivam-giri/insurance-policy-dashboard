import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Compare from '../pages/Compare.vue'
import Calculator from '../pages/Calculator.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/compare', name: 'Compare', component: Compare },
  { path: '/calculator', name: 'Calculator', component: Calculator },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
