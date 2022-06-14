import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import router from "../src/router/router.js";
import store from "./store/index.js";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

Vue.use(VueRouter);

// HTTP request interceptor
import axios from "axios"
import VueAxios from "vue-axios"
Vue.use(VueAxios, axios)

Vue.axios.defaults.baseURL = "https://629ec42b461f8173e4d90156.mockapi.io"

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
