import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "@/assets/style/index.css"
import router from "./router/router";
import store from "./store";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

Vue.use(VueRouter);
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'



// HTTP request interceptor
import axios from "axios"
import VueAxios from "vue-axios"
Vue.use(VueAxios, axios)

Vue.axios.defaults.baseURL = "https://629ec42b461f8173e4d90156.mockapi.io"

Vue.use(Vuesax, {
  // options here
  colors: {
    primary: '#29BB89',
  }
})
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
