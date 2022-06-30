<template>
  <div align="center">
    <InputComponent
      class="mt-5"
      :label="'Email'"
      :placeholder="'example@correo.com'"
      @value="email = $event"
      @action="register"
    ></InputComponent>
    <InputComponent
      class="mt-5"
      :type="'password'"
      :label="'Contraseña'"
      :placeholder="'**********'"
      @value="password = $event"
      @action="register"
    ></InputComponent>
    <InputComponent
      class="mt-5"
      :type="'password'"
      :label="'Repita su contraseña'"
      :placeholder="'**********'"
      @value="password2 = $event"
      @action="register"
    ></InputComponent>

    <ButtonComponent
      @action="register"
      :label="'Registrarse'"
    ></ButtonComponent>

    <div class="not-account mt-10">
      Ya tienes una cuenta?
      <span class="action-text" @click="goToLogin">Iniciar Sesion</span>
    </div>
  </div>
</template>

<script>
// Components
import InputComponent from "@/components/InputText/InputText.vue";
import ButtonComponent from "@/components/Button/ButtonComponent.vue";
//Mixin
import notifications from "@/mixins/notification";

export default {
  name: "FormularioWeb",
  mixins: [notifications],
  components: {
    InputComponent,
    ButtonComponent,
  },
  data: function () {
    return {
      email: "",
      password: "",
      password2: "",
    };
  },

  mounted() {
    console.log('notificacion' , notifications)
  },
  methods: {
   
    register() {
      const validation = this.validations();
      const passwordValidation = this.validationPassword();

      if (validation || passwordValidation) {
        return;
      }

      const body = {
        email: this.email,
        password: this.password,
      };

      this.$store.dispatch("auth/REGISTER_TO", body).then(() => {
        this.notification("dark", "Registro Existoso");
        // Se envia a Verificacion de codigo
        
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
    validationPassword() {
      if (this.password !== this.password2) {
        this.notification("dark", "Las contraseñas no coinciden");
        return true;
      } else {
        return false;
      }
    },
    goToLogin() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
label {
  margin-left: 0.5em !important;
}

.logo-small {
  margin-top: 0.5em;
  margin-bottom: 0;
  width: 15em;
}

.center-img {
  text-align: center;
}

.bg-manual {
  background-color: rgb(171, 171, 171);
}
</style>
