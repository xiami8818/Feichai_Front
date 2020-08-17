import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueParticles from "vue-particles";
Vue.use(VueParticles)
Vue.use(VueResource)
Vue.config.productionTip = false

// eslint-disable-next-line no-unused-vars
const routes = [
  {name: 'login',
    path: '/',
  }
]
new Vue({
  render: h => h(App),
}).$mount('#app')
