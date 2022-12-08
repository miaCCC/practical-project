import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import ListSearch from '../views/ListSearch.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/list/search',
    name: 'search',
    component: ListSearch
  },

]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
