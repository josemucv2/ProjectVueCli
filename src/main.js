import Vue from 'vue'
import App from './App.vue'
import  "bootstrap/dist/css/bootstrap.min.css";
import './style.css'
import router  from '../src/router/router.js'
import store from './store/index.js'
import VueRouter from 'vue-router'
Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({ 
    router,
    store,
    render: h => h(App),}).$mount('#app')
