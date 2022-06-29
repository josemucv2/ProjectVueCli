<template>
  <div>
    <div
      v-for="(productos, index) in $store.state.listaProductos"
      :key="index"
      class="card card-manual"
      v-show="productos.id == detailsProducto"
    >
      <div>
        <img :src="productos.imagen" class="card-img-top padding-img" />
        <div class="card-body">
          <h5 class="card-title">{{ productos.title }}</h5>
          <p class="card-text">{{ productos.descripcion }}</p>
          <p class="card-title">Price: {{ productos.precio }}</p>
          <button class="btn btn-primary" @click="$store.dispatch('AddtoCart')">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsProductos",
 
};
</script>
