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

export default {
  getProductos,
};
