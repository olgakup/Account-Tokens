import Vue from 'vue'
import Router from 'vue-router'
import mainComponent from '@/components/mainComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tokens',
      component: mainComponent
    }
  ]
})
