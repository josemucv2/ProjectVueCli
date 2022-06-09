<template>
  <main class="direction-box-item">
    <button @click="$store.dispatch('productos/GetProductos')">
      solicitar
    </button>
    <div
      v-for="(productos, index) in listaProductos"
      :key="index"
      class="card card-manual"
    >
      <img :src="productos.Imagen" class="card-img-top padding-img" />
      <div class="card-body">
        <h5 class="card-title">{{ productos.Title }}</h5>
        <p class="card-text">{{ productos.description }}</p>
        <p class="card-title">Price: {{ productos.Price }}</p>
        <router-link :to="/Productos/ + productos.id" class="btn btn-secondary">
          Ver Detalles
        </router-link>

        <button class="btn btn-primary">Agregar al Carrito</button>
      </div>
    </div>
    <br />
  </main>
</template>

<script>
import printHook from "../../mixins/printHook";
import productos from "../../store/modules/productos.js";

import { mapActions ,mapState } from "vuex";
export default {
  
  mixins: [printHook],
  name: "ContentPrincipal",

  computed: {
    ...mapState("productos", ["listaProductos"]),},

  methods: {
    ...mapActions("productos", ["getlistaProductos"])
    
  },

  modules: {
    productos
  }
};
</script>

<style>
.direction-box-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.card-manual {
  height: 28rem;
  width: 18rem;
  margin: 20px;
  text-align: center;
  box-shadow: 5px 1px 10px 2px rgba(0, 0, 0, 0.425);
}

.card-manual:hover {
  transform: scale(1.1);
}

.padding-img {
  padding: 10px;
}
</style>
