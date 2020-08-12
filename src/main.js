import Vue from 'vue'
import App from './App.vue'
import Login from './components/login/Login'
Vue.config.productionTip = false

// eslint-disable-next-line no-unused-vars
const routes = [
  {name: 'login',
    path: '/',
    components: Login
  }
]
new Vue({
  render: h => h(App),
}).$mount('#app')
