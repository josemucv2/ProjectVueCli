<template>
  <div>
    <div class="card card-manual">
      <div>
        <img :src="GETTERS_PRODUCTO.Imagen" class="card-img-top padding-img" />
        <div class="card-body">
          <h5 class="card-title">{{ GETTERS_PRODUCTO.Title }}</h5>
          <p class="card-text">{{ GETTERS_PRODUCTO.description }}</p>
          <p class="card-title">Price: {{ GETTERS_PRODUCTO.Price }}</p>
          <ButtonComponent
            class="btn btn-primary"
            :label="'Agregar Al Carrito'"
          ></ButtonComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/Button/ButtonComponent.vue";

import { mapGetters } from "vuex";
export default {
  name: "DetailsProductos",
  components: {
    ButtonComponent,
  },

  computed: {
    ...mapGetters("productos", ["GETTERS_PRODUCTO"]),
  },

  methods: {},
};
</script>
