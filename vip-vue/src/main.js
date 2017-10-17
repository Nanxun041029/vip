// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Child from './components/Child'
import Gx from './components/Gx'
import Shishang from './components/Shishang'
import Daohang from './components/Daohang'

Vue.component(Child.name,Child)
Vue.component(Daohang.name,Daohang)
Vue.component(Gx.name,Gx)
Vue.component(Shishang.name,Shishang)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
// Vue.use(InfiniteScroll);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
