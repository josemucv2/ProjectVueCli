import Vue from "vue";

const getProductos = (template) => {
  return new Promise((resolve, reject) => {
    Vue.axios
      .get("/Productos", template)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => reject(err));
  });
};

export default {
  getProductos,
};
