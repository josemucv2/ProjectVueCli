<template>
  <div class="flex justify-center" align="center">
    <InputComponent
      class="mt-5"
      :label="'Email'"
      :placeholder="'example@correo.com'"
      @value="email = $event"
      @action="login"
    ></InputComponent>
    <InputComponent
      class="mt-5 mb-10"
      :type="'password'"
      :label="'Contraseña'"
      :placeholder="'**********'"
      @value="password = $event"
      @action="login"
    ></InputComponent>
    <ButtonComponent
      @action="login"
      :label="'Iniciar Sesión'"
    ></ButtonComponent>
    <div class="action-auth mt-5 flex justify-center" align="center">
      <div class="account"></div>
    </div>
    <div class="not-account mt-10">
      No tienes aun cuenta?
      <span class="action-text" @click="goToRegister">Registrate aqui</span>
    </div>
  </div>
</template>

<script>
// Components
import InputComponent from "@/components/InputText/InputText.vue";
import ButtonComponent from "@/components/Button/ButtonComponent.vue";
//Mixin
import Notifications from "@/mixins/notification";

export default {
  name: "LoginUser",
  mixins: [Notifications],
  components: {
    InputComponent,
    ButtonComponent,
  },
  data: function () {
    return {
      email: "",
      password: "",
    
    };
  },
  mounted() {
    this.$store.commit("auth/SET_DEFAULT_STATE");
  },

  methods: {
    openFile(value) {
      value === 0
        ? window.open(this.terms, "_blank")
        : window.open(this.politic, "_blank");
    },
    login() {
      const validation = this.validations();

      if (validation) {
        return;
      }

      const body = {
        email: this.email,
        password: this.password,
      };
      this.$store.commit("auth/SET_USER_INFO", body);
      this.$store.dispatch("auth/LOGIN_TO", body).then(() => {
        this.notification("dark", "Iniciando sesion", "Bienvenido a Central +");
        this.$router.push({ name: "Home" });
      });
    },
    validations() {
      if (this.email === "" || this.password === "") {
        this.notification("dark", "Faltan campos por llenar");
        return true;
      } else {
        return false;
      }
    },
    goToRegister() {
      this.$router.push({ name: "FormularioWeb" });
    },
    goToRecovery() {
      this.$router.push({ name: "Recovery" });
    },
  },
};
</script>

<style scoped>
.not-account {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  /* Fonts Gray */

  color: #585858;
}

.action-text {
  color: green;
  cursor: pointer;
}

.remember-container {
  display: flex;
  align-items: center;
}
</style>
