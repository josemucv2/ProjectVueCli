
<script>

export default {
  name : 'UserRegister',

  data() {
    return {
      states: [
        'Amazonas',
        'Anzoátegui',
        'Apure',
        'Aragua',
        'Barinas',
        'Bolívar',
        'Carabobo',
        'Cojedes',
        'Delta Amacuro',
        'Distrito Capital',
        'Falcón',
        'Guárico',
        'Lara',
        'Mérida',
        'Miranda',
        'Monagas',
        'Nueva Esparta',
        'Portuguesa',
        'Sucre',
        'Táchira',
        'Trujillo',
        'Vargas',
        'Yaracuy',
        'Zulia'

      ]
    }
  }
}

</script>


<template>
    <div class="centrar-form">
      <form class="row g-3 fondo-manual">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Correo</label>
    <input type="email" class="form-control" id="inputEmail4">
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Contrasña</label>
    <input type="password" class="form-control" id="inputPassword4">
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Nombres</label>
    <input type="text" class="form-control" id="inputAddress">
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Apellidos</label>
    <input type="text" class="form-control" id="inputAddress2">
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Ciudad</label>
    <input type="text" class="form-control" id="inputCity">
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">Estado</label>
    <select id="inputState" class="form-select">
      <option selected>Seleccione Estado</option>
      <option v-for="(el, i) in states" :key="i" >{{ el }}</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">CUI</label>
    <input type="text" class="form-control" id="inputZip">
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Acepta los Terminos y condiciones
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Registrarse</button>
  </div>
</form>
    </div>
</template>


<style>

.centrar-form{
  display:flex;
  justify-content:center;
  align-items:center;
}

</style>


