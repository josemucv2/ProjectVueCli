import usuariosApi from "./userApi.js";

const GET_USUARIOS = (context, payload) => {
  return new Promise((resolve, reject) => {
    usuariosApi
    .getUsuarios(payload)
    .then((data) => {
      context.commit("SET_USUARIOS", data.data.data);
      resolve(data);
    })
    .catch((err) => {
        reject(err)
    })
  });
};


export default {
    GET_USUARIOS
}
