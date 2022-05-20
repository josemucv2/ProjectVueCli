<script>
export default {
    name: 'ProductCart',
    
    data() {
        return {
           localCart : localStorage.getItem("ProductCart")
        }
    },
   
   methods: {
       borrar(){
              localStorage.removeItem("ProductCart")
       }
   }
}

</script>

<template>
<div class="bg-manual">
    <div v-if="localCart">
    <div>Hay Productos en el localStorage</div>
    <button @click="borrar">Borrar lo que esta en el localStorage</button>
    </div>


<div v-else>
    No Hay Productos en el localStorage
</div>
</div>
    
</template>


<style scoped>
.bg-manual{
    height: 100vh;
    background-color: #564e4e;
    color: white;
}



</style>
