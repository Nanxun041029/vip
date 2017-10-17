import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Shishang from '@/components/Shishang'
import Meizhuang from '@/components/Meizhuang'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/shishang',
      name: 'Shishang',
      component: Shishang
    },
      {
      path: '/meizhuang',
      name: 'Meizhuang',
      component: Meizhuang
    }
  ]
})
