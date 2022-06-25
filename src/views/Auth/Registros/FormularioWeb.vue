<template>
  <div class="container bg-manual">
    <form v-on:submit.prevent="sendUsers()">
      <div class="row">
        <div class="col col-12">
          <div class="center-img">
            <img src="@/assets/logo.png" alt="" class="logo-small" />
          </div>
          <br /><br />
          <label for="inputNombre" class="text-start">Tu nombre</label>
          <input
            type="text"
            class="form-control"
            id="inputNombre"
            placeholder="Nombre completo"
            v-model="usuarios.nombre"
          />
          <p>Vamos a validar el nombre {{ usuarios.nombre }}</p>
          <br />
          <label for="inputEdad" class="form-label text-start">Edad</label>
          <input
            type="number"
            class="form-control"
            id="inputEdad"
            placeholder="Edad"
            v-model="usuarios.edad"
            @keyup="validateEdad"
          />
          <br />
          <label for="inputEmail" class="form-label text-start">Email</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            placeholder="tu@email.com"
            v-model="usuarios.email"
          />
          <br />
          <div class="row">
            <h4>Selecciona tu curso</h4>
            <div class="col col-2">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Javascript"
                  id="Javascript"
                  v-model="usuarios.chequeados"
                />
                <label class="form-check-label" for="Javascript">
                  JavaScript
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="React"
                  id="React"
                  v-model="usuarios.chequeados"
                />
                <label class="form-check-label" for="React"> React </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Angular"
                  id="Angular"
                  v-model="usuarios.chequeados"
                />
                <label class="form-check-label text-start" for="Angular">
                  Angular
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Vue"
                  id="Vue"
                  v-model="usuarios.chequeados"
                />
                <label class="form-check-label" for="Vue"> Vue </label>
              </div>
              <div>confirmados: {{ usuarios.chequeados }}</div>
            </div>
          </div>
          <br />
          <select
            selected
            class="form-select"
            aria-label="Default select example"
            v-model="usuarios.PaisSeleccionado"
          >
            <option value="">Selecciona un país</option>
            <option
              v-for="pais in listPaises"
              :value="pais.pais"
              :key="pais.index"
            >
              {{ pais.pais }}
            </option>
          </select>
          <p>pais seleccionado: {{ usuarios.PaisSeleccionado }}</p>

          <hr />
          <div class="row">
            <br />
            <div class="col-10"></div>
            <br />
            <div class="col-2">
              <input type="submit" class="btn btn-primary" value="ENVIAR" />
            </div>
            <div>{{ mensajeError }}</div>
            <br />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormularioWeb",
  data() {
    return {
      usuarios: {
        nombre: "",
        edad: "",
        email: "",
        chequeados: [],
        PaisSeleccionado: "",
      },
      mensajeError: "",
      listPaises: [
        {
          id: "1",
          pais: "España",
        },
        {
          id: "2",
          pais: "Francia",
        },
        {
          id: "3",
          pais: "Italia",
        },
        {
          id: "4",
          pais: "Inglaterra",
        },
        {
          id: "5",
          pais: "Portugal",
        },
        {
          id: "6",
          pais: "Rusia",
        },
        {
          id: "7",
          pais: "China",
        },
        {
          id: "8",
          pais: "Japon",
        },
        {
          id: "9",
          pais: "Argentina",
        },
        {
          id: "10",
          pais: "Brasil",
        },
        {
          id: "11",
          pais: "Australia",
        },
        {
          id: "12",
          pais: "Canada",
        },
        {
          id: "13",
          pais: "Mexico",
        },
        {
          id: "14",
          pais: "Chile",
        },
        {
          id: "15",
          pais: "Colombia",
        },
        {
          id: "16",
          pais: "Peru",
        },
        {
          id: "17",
          pais: "Venezuela",
        },
        {
          id: "18",
          pais: "Uruguay",
        },
        {
          id: "19",
          pais: "Ecuador",
        },
        {
          id: "20",
          pais: "Paraguay",
        },
        {
          id: "21",
          pais: "Bolivia",
        },
        {
          id: "22",
          pais: "Cuba",
        },
        {
          id: "23",
          pais: "Panama",
        },
        {
          id: "24",
          pais: "Haiti",
        },
      ],
    };
  },

  methods: {
    sendUsers() {
      if (
        this.usuarios.nombre == "" ||
        this.usuarios.edad == "" ||
        this.usuarios.email == "" ||
        this.usuarios.chequeados == "" ||
        this.usuarios.PaisSeleccionado == ""
      ) {
        this.mensajeError = "El campo es Obligatorio";
      } else {
        this.mensajeError = "Guardado con exito";
        console.log(this.usuarios);
        return;
      }
    },

    validateEdad() {
      if (this.usuarios.edad < 18) {
        this.mensajeError = "Debes ser mayor de edad";
      } else {
        this.mensajeError = "";
      }
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
