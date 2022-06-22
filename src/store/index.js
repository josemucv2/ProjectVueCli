import Vue  from 'vue';
import Vuex from 'vuex';
import user from './user/user.js';
import productos from './productos/productos.js';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    productos
  }
})
