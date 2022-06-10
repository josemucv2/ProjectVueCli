const axios = require('axios');
const apiURL = process.env.VUE_APP_API_URL;
export default {
    namespaced: true,
    state: {
        listaProductos: [],
        Mensaje: 'realizando nuevos cambios en git login',
    },
    getters: {
        getlistaProductos: state => (length) => {
            return state.listaProductos.slice(0, length);
        },
    },

    mutations: {
      GetProductos(state, data) {
        state.listaProductos = data;
     
      
      }
    },
    actions:{
            async GetProductos({commit}) {
                let result = null;
                result = await axios.get(`${apiURL}/Productos`)
                    .then((response) => {
                        let result = response.data

                        .map(producto => {
                            console.log(producto)
                            return producto
                        })
                        console.log(result)
                        return result
                    })
                    
                    .catch((error) => console.log(error))
                    if(result != null){
                        commit('GetProductos', result)
                    }
            },
    }
    
}
