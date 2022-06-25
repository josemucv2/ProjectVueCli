import productosAPI from "./productosAPI.js";

const GET_PRODUCTOS = (context, payload) => {
  console.log("productos api",productosAPI)
  console.log("payload" , payload)
  return new Promise((resolve, reject) => {
    productosAPI
      .getProductos(payload)
      .then((data) => {
        context.commit('SET_PRODUCTOS', data.data);
        resolve(data);
      
      })
      .catch((err) => reject(err));
  });
};

export default {
  GET_PRODUCTOS,
};
