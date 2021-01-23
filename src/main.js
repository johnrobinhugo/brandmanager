import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI from '@vue/composition-api'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueCompositionAPI)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
}).$mount('#app')
