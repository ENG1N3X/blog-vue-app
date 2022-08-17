import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

import App from './App.vue'
import './assets/main.scss'

Vue.config.productionTip = false
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  render: h => h(App),
  pinia
}).$mount('#app')
