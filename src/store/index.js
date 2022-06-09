import Vue from "vue";
import Vuex from "vuex";
import productos from './modules/productos';
import usuarios from './modules/usuarios';

Vue.use(Vuex);

export default new Vuex.Store({

  strict: true,
  state: {
    listaProductos: [
      {
        id: 1,
        titulo: "Producto 1",
        precio: 100,
        descripcion:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quisquam.",
        imagen: "https://dummyimage.com/600x400/000/fff",
        destacado: true,
        cantidad: 0,
      },
      {
        id: 2,
        titulo: "Producto 2",
        precio: 200,
        descripcion:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quisquam.",
        imagen: "https://dummyimage.com/601x400/000/fff",
        destacado: false,
        cantidad: 0,
      },
      {
        id: 3,
        titulo: "Producto 3",
        precio: 300,
        descripcion:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quisquam.",
        imagen: "https://dummyimage.com/602x400/000/fff",
        destacado: false,
        cantidad: 0,
      },
      {
        id: 4,
        titulo: "Producto 4",
        precio: 400,
        descripcion:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quisquam.",
        imagen: "https://dummyimage.com/603x400/000/fff",
        destacado: false,
        cantidad: 0,
      },
      {
        id: 5,
        titulo: "Producto 5",
        precio: 500,
        descripcion:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quisquam.",
        imagen: "https://dummyimage.com/604x400/000/fff",
        destacado: false,
        cantidad: 0,
      },
      {
        id: 6,
        titulo: "Producto 6",
        precio: 600,
        descripcion:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quisquam.",
        imagen: "https://dummyimage.com/605x400/000/fff",
        destacado: false,
        cantidad: 0,
      },
    ],

    carrito: [],
  },
  getters: {
    getListaProductos: (state) => state.listaProductos,
  },
  mutations: {
    AddtoCart(productos) {
      console.log(productos.listaProductos);
    },
  },

  actions: {
    AddtoCart() {
      this.commit("AddtoCart");
    },
  },
  modules: {
    productos,usuarios
  },
});
