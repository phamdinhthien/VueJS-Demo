import Vue from 'vue'
import Router from 'vue-router'
import ListUser from '../components/ListUser.vue'
import TestTreeItem from '../components/TestTreeView.vue'
import TestTableView from '../components/TestTableView.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListUser',
      component: ListUser
    },
    {
      path: '/tree-item',
      name: 'TestTreeItem',
      component: TestTreeItem
    },
    {
      path: '/table-view',
      name: 'TestTableView',
      component: TestTableView
    }
  ],
  mode: "history"
})
