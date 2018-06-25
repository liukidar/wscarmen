import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Registration from '../pages/Registration'
import Information from '../pages/Information'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/:target?',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog/:target?',
      component: Blog
    },
    {
      path: '/registration/:target?',
      component: Registration
    },
    {
      path: '/information/:target?',
      component: Information
    }
  ]
})
