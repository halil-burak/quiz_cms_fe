import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Language from '../views/Language.vue'
import Platform from '../views/Platform'
import Category from '../views/Category'
import Question from '../views/Question'
import Quiz from '../views/Quiz'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/language',
    name: 'Language',
    component: Language
  },
  {
    path: '/platform',
    name: 'Platform',
    component: Platform
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz
  },
  {
    path: '/question',
    name: 'Question',
    component: Question
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
