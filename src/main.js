import Vue from 'vue'
import App from './App.vue'
// import './index.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import router from "./router";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
