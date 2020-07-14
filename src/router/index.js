import Vue from 'vue'
import Router from 'vue-router'
import ListUser from '../components/ListUser.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListUser',
      component: ListUser
    }
  ],
  mode: "history"
})
