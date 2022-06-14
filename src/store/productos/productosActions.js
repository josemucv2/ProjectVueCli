import productosApi from './productosApi.js'

const GET_PRODUCTOS = (state, payload) => {
    return new Promise((resolve, reject) => {
        productosApi.getProductos(payload)
            .then(response => {
                state.commit('SET_PRODUCTOS', response.data)
                resolve(response)
            })
            .catch(err => reject(err))
    })
}

export default {
    GET_PRODUCTOS
}





