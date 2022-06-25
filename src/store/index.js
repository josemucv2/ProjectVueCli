import Vue  from 'vue';
import Vuex from 'vuex';
import user from './user/user.js';
import productos from './productos/productos.js';
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    productos
  },
  plugins: [createPersistedState()]
})
