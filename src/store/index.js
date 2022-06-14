import Vue  from 'vue';
import Vuex from 'vuex';
import user from './user/user.js';
import product from './productos/productos.js';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    product
  }
})
