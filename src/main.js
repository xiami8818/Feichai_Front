import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueParticles from "vue-particles";
import router from './router';
import axios from 'axios';
Vue.use(VueParticles)
Vue.use(VueResource)
Vue.config.productionTip = false
axios.defaults.withCredentials = true
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
