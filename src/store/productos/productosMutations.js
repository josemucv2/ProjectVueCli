const SET_PRODUCTOS = (state, productos) => {
  console.log("productos mutacion",productos ,state.products);
  state.products = productos;
};

export default {
  SET_PRODUCTOS,
};
