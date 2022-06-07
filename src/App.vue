<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/ContentFoo.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },

  data() {
    return {
      usuario: false,
    };
  },
};
</script>

<template>
  <div id="app">
    <NavBar />
    <router-view />

    <Footer />
  </div>
</template>
