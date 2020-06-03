import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Language from '../views/languages/Dashboard.vue'
import Platform from '../views/platforms/Dashboard.vue'
import Category from '../views/categories/Dashboard.vue'
import Question from '../views/questions/Dashboard.vue'
import Quiz from '../views/quizzes/Dashboard.vue'

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
