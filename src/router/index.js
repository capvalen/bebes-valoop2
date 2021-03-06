import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Principal',
    component: () => import('../views/Principal.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
	{
    path: '/buscador/:tipo',
    name: 'Buscador',
    component: () => import('../views/Buscador.vue')
  },
	{
    path: '/panel',
    name: 'Panel',
    component: () => import('../views/Panel.vue')
  },
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router 
