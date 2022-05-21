<script>
export default {
    name: 'ProductCart',
    
    data() {
        return {
           localCart : JSON.parse(localStorage.getItem("ProductCart"))

           
        }
    },
   
   methods: {
       borrar(){
              localStorage.removeItem("ProductCart")
       },

      
   },

   
}

</script>

<template>
<div class="bg-manual">
    <div v-if="localCart">
    <div v-for="(pro, i) in localCart" :key="i">
        <div class="row">
            <div class="col-md-3">
                <img :src="pro.image" alt="">
            </div>
            <div class="col-md-9">
                <h3>{{pro.titile}}</h3>
                <p>{{pro.descripcion}}</p>
                <p>{{pro.price}}</p>
                <button class="btn btn-danger" @click="borrar()">Borrar</button>
            </div>
        </div>

    </div>
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
