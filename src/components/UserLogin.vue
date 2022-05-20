<script>
export default {
    name : 'UserLogin'
}


</script>


<template>
    <form class="container fondo-manual">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Correo Electronico</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text-red">Nunca compartiremos tu correo con nadie</div>
        </div>
            
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
            
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Acepta los terminos y condiciones</label>
        </div>
            
        <button type="submit" class="btn btn-primary">Iniciar Sesion</button>
    </form>
</template>

<style scoped>

.form-text-red{
    color: red;
    font-size: 14px;
}

</style>


