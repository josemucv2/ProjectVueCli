import productosAPI from "./productosAPI.js";

const GET_PRODUCTOS = (context, payload) => {
  return new Promise((resolve, reject) => {
    productosAPI
      .getProductos(payload)
      .then((data) => {
        context.commit("SET_PRODUCTOS", data);

        resolve(data);
      })
      .catch((err) => reject(err));
  });
};

export default {
  GET_PRODUCTOS,
};
