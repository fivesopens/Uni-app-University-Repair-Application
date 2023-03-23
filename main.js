
// #ifndef VUE3
import Vue from 'vue'
import App from './App'

import {myRequest} from './untils/request.js'
Vue.prototype.$https = myRequest

//引入日期转换
import $mUtils from '@/untils/date.js'
Vue.prototype.$mUtils = $mUtils

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif