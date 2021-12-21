import Vue from 'vue'
import App from './App.vue'
import money from 'v-money'

Vue.config.productionTip = false
Vue.use(money, {precision: 4})
Vue.use(require('vue-moment'));

new Vue({
  render: h => h(App),
}).$mount('#app') //.use(money, {precision: 4})
