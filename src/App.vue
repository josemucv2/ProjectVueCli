<template>
  <div id="app">
    <NavBar />
    <router-view />

    <FooterComponent />
  </div>
</template>

<script>
import NavBar from "./components/SideNav/NavBar.vue";
import handleError from "@/mixins/handleError";

import FooterComponent from "./components/Footer/ContentFooter.vue";

export default {
  mixins: [handleError],
  name: "App",
  components: {
    NavBar,
    FooterComponent,
  },

  mounted() {
    this.handleError();
  },
};
</script>
