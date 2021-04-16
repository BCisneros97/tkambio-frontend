import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/layout/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'Inicio',
        component: () => import('../views/Inicio.vue'),
        meta: { auth: true }
      },
      {
        path: 'tipo-cambio',
        name: 'TipoCambio',
        component: () => import('../views/TipoCambio.vue'),
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
