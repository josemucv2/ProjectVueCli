<template>
  <header>
    <nav class="navbar navbar-dark bg-dark justify-content-center">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link class="style-link-nav" to="/">Home</router-link>
        </li>

        <li class="nav-item">
          <router-link class="style-link-nav" to="/Productos"
            >Catalogo</router-link
          >
        </li>

        <li class="nav-item">
          <router-link class="style-link-nav" to="/FormularioWeb"
            >Registro</router-link
          >
        </li>

        <li class="nav-item">
          <router-link class="style-link-nav" to="/login"
            >Iniciar Sesion</router-link
          >
        </li>

        <li class="nav-item">
          <router-link class="style-link-nav" to="/Cart"
            >Carrito<span class="numbarCart"></span
          ></router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavBar",

  computed: {
    ...mapGetters("user", ["GET_USUARIOS"]),
  },

  mounted() {
    console.log(this.GET_USUARIOS);
    this.getUsuarios()
  },

  methods: {
    getUsuarios(){
          this.$store.dispatch("user/GET_USUARIOS");

    }
  }
};
</script>

<style scoped>
.numbarCart {
  background-color: white;
  color: black;
  margin: 10px;
  padding: 2px;
  border: 1px solid black;
  border-radius: 1rem;
}
.style-link-nav {
  color: white;
  margin: 10px;
  padding: 5px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
}

.style-link-nav:hover {
  color: rgb(151, 151, 151);
  text-decoration: underline;
}
</style>
