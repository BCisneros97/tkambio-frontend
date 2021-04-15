import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/Admin.vue'
import Inicio from '../views/Inicio.vue'
import TipoCambio from '../views/TipoCambio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Admin,
    children: [
      {
        path: '',
        name: 'Inicio',
        component: Inicio
      },
      {
        path: 'tipo-cambio',
        name: 'TipoCambio',
        component: TipoCambio
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
