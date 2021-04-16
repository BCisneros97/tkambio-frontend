import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminLayout from '../views/layout/AdminLayout.vue'
import Inicio from '../views/Inicio.vue'
import TipoCambio from '../views/TipoCambio.vue'
import store from '../store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: AdminLayout,
    children: [
      {
        path: '',
        name: 'Inicio',
        component: Inicio,
        meta: { auth: true }
      },
      {
        path: 'tipo-cambio',
        name: 'TipoCambio',
        component: TipoCambio,
        meta: { auth: true }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: { auth: false }
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
	const userLogged = store.state.auth.user;

	if (to.meta.auth && !userLogged) {
			return next('/login');
	}

  if (!to.meta.auth && userLogged) {
    return next('/');
  }

  return next();
});

export default router
