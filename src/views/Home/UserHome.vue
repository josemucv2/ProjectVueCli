<template>
  <div>{{ Mensaje }}</div>
</template>

<script>
import productos from "../../store/modules/productos.js";
import { mapState } from "vuex";

export default {
  name: "UserHome",
  computed: {
    ...mapState("productos", ["Mensaje"]),
  },

  modules: {
    productos,
  },
};
</script>
