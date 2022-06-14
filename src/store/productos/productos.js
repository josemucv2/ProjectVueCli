import state from './productosState.js'
import mutations from './productosMutations.js'
import actions from './productosActions.js'
import getters from './productosGetters.js'

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
