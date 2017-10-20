import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Shishang from '@/components/Shishang'
import Meizhuang from '@/components/Meizhuang'
import Detail from '@/components/Detail'
import Gw from '@/components/Gw'
import Jiaju from '@/components/Jiaju'
import Muying from '@/components/Muying'
import Guoji from '@/components/Guoji'
import Weipin from '@/components/Weipin'
import Shenghuo from '@/components/Shenghuo'
import Login from '@/components/Login'
import Zhuce from '@/components/Zhuce'

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
    },
      {
      path: '/detail/:fime_id',
      name: 'Detail',
      component: Detail
    },
      {
      path: '/gw',
      name: 'Gw',
      component: Gw
    },
      {
      path: '/jiaju',
      name: 'Jiaju',
      component: Jiaju
    },
      {
      path: '/muying',
      name: 'Muying',
      component: Muying
    },
      {
      path: '/guoji',
      name: 'Guoji',
      component: Guoji
    },
      {
      path: '/weipin',
      name: 'Weipin',
      component: Weipin
    },
      {
      path: '/shenghuo',
      name: 'Shenghuo',
      component: Shenghuo
    },
      {
      path: '/login',
      name: 'Login',
      component: Login
    },
      {
      path: '/zhuce',
      name: 'Zhuce',
      component: Zhuce
    }
  ]
})
