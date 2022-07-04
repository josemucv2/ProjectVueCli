<template>
  <main class="direction-box-item">
    <div
      v-for="(element, index) in GETTERS_PRODUCTOS"
      :key="index"
      class="card card-manual"
    >
      <img :src="element.Imagen" class="card-img-top padding-img" />
      <div class="card-body">
        <h5 class="card-title">{{ element.Title }}</h5>
        <p class="card-text">{{ element.description }}</p>
        <p class="card-title">Price: {{ element.Price }}</p>
        <ButtonComponent
          class="btn btn-secondary"
          @action="selectProducto(element)"
          :label="'Ver Detalles'"
        >
        </ButtonComponent>
      </div>
    </div>
    <br />
  </main>
</template>

<script>
import ButtonComponent from "@/components/Button/ButtonComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "ContentPrincipal",
  components: {
    ButtonComponent,
  },

  computed: {
    ...mapGetters("productos", ["GETTERS_PRODUCTOS"]),
  },

  mounted() {
    this.getProductos();
  },

  methods: {
    getProductos() {
      this.$store.dispatch("productos/GET_PRODUCTOS");
    },

    selectProducto(value) {
      console.log("enviando producto", value);
      this.$store.dispatch("productos/GET_PRODUCT", value);
      this.$router.push({
        name: "DetailsProductos",
        params: { id: value.id },
      });
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
