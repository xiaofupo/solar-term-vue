import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from './store'
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
import { DatetimePicker,Popup,Toast } from 'vant';

Vue.config.productionTip = false

import './pages/common'
Vue.use(DatetimePicker)
Vue.use(Popup)
Vue.use(Toast)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
