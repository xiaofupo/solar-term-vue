import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { DatetimePicker,Popup,Toast } from 'vant';

import './components/index'
Vue.use(DatetimePicker)
Vue.use(Popup)
Vue.use(Toast)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
