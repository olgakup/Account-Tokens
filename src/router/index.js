/* Calling for MainComponent */
import Vue from 'vue'
import Router from 'vue-router'
import MainComponent from '@/components/mainComponent'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tokens',
      component: MainComponent
    }
  ]
})
