<template>
  <main class="direction-box-item">
    <div
      v-for="(productos, index) in $store.getters.getListaProductos"
      :key="index"
      class="card card-manual"
    >
      <img :src="productos.imagen" class="card-img-top padding-img" />
      <div class="card-body">
        <h5 class="card-title">{{ productos.title }}</h5>
        <p class="card-text">{{ productos.descripcion }}</p>
        <p class="card-title">Price: {{ productos.precio }}</p>
        <router-link :to="/Productos/ + productos.id" class="btn btn-secondary">
          Ver Detalles
        </router-link>

        <button class="btn btn-primary" @click="$store.dispatch('AddtoCart')">
          Agregar al Carrito
        </button>
      </div>
    </div>
    <br/>
    
  </main>
</template>

<script>
import printHook from "../../mixins/printHook";
export default {
  mixins: [printHook],
  name: "ContentPrincipal",
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
