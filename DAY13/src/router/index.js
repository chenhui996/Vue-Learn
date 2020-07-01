import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cain from '../views/Cain.vue'
import Info from '../views/Info.vue'
import Myvideo from '../views/Myvideo.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/cain',
    name: 'cain',
    component: Cain,
    children:[
      {
        path:'info',
        name:'cain-info',
        component:Info
      },
      {
        path:'myvideo',
        name:'cain-myvideo',
        component:Myvideo
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
