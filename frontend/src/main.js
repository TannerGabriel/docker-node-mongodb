import Vue from 'vue'
import App from './App.vue'
const dotenv = require("dotenv");

dotenv.config();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')