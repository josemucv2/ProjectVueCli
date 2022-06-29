<template>
  <main class="direction-box-item">
    <div
      v-for="(productos, index) in GETTERS_PRODUCTOS"
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
import { mapGetters } from "vuex";

export default {
  name: "ContentPrincipal",

  computed: {
    ...mapGetters("productos", ["GETTERS_PRODUCTOS"]),
  },

  mounted() {
    this.getProductos();
    console.log('getters' , this.GETTERS_PRODUCTOS)
  },

  methods: {
    getProductos() {
      this.$store.dispatch("productos/GET_PRODUCTOS");
    },
  },
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
