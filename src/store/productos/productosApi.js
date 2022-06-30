import Vue from "vue";

const getProductos = template => {
  return new Promise((resolve, reject) => {
    Vue.axios
      .get('/Productos', template)
      .then(data => {
        console.log(data.data)
        resolve(data.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

const getProducto = template => {
  return new Promise((resolve, reject) => {
    Vue.axios
    .get(`/Productos/${template.id}` , template)
    .then(data => {
      resolve(data)
    })
    .catch(error => {
      reject(error)
    })
  })
}

export default {
  getProductos,
  getProducto
};
