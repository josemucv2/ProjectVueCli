import Vue from "vue";

const getUsuarios = (template) => {
  return new Promise((resolve, reject) => {
    Vue.axios
      .get("/Usuarios", template)
      .then((data) => {
        console.log(data);
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default {
  getUsuarios,
};
