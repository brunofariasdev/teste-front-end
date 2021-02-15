import Vue from 'vue'
import VueRouter from 'vue-router'
import hamburguer from '../views/hamburguer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'hamburguer',
    component: hamburguer
  },
  {
    path: '/pizza',
    name: 'Pizza',
    component: () => import(/* webpackChunkName: "about" */ '../views/pizza.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
