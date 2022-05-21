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
            
            <div class="col-md-9">
                <div class="card card-manual ">
        <img :src ="pro.img" class="card-img-top padding-img">
        <div class="card-body">
            <h5 class="card-title">{{ pro.title }}</h5>
            <p class="card-text">{{ pro.descripcion }}</p>
            <p class="card-title">Price: {{pro.price}}</p>
            <button class="btn btn-danger" @click="borrar()">Borrar</button>
        </div>
    </div>
                
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
