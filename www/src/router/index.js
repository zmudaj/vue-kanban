import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import BoardsPage from '../components/BoardsPage'
import Board from '../components/Board'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/boards',
      name: 'Boards',
      component: BoardsPage
    },
    {
      path: '/boards/test',
      name: 'Boards',
      component: Board
    }
  ]
})
