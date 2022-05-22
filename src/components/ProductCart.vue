<script>
export default {
    name: 'ProductCart',
    
    data() {
        return {
           localCart : JSON.parse(localStorage.getItem("ProductCart")),
           contador :0

           
        }
    },
   
   methods: {
       borrar(){
              localStorage.removeItem("ProductCart")
       },
        contadorsuma(){
           this.contador++
           this.condicion = false
        },
contadorResta(){ 
            if(this.contador >0) {
               this.contador--
              
            } else {
                this.condicion = true
                
            }

            return false
        }

      
   },

   
}
</script>

<template>
<div class="bg-manual">
    <div v-if="localCart">
    <div v-for="(pro, i) in localCart" :key="i">
        <div class="row">
           
                <div class="col-9">
                    <div class="card card-manual"> 
                    <img :src ="pro.img" class="card-img-top padding-img">
                    <div class="card-body">
                        <h5 class="card-title text-cart">{{ pro.titile }}</h5>
                        <p class="card-text text-cart">{{ pro.descripcion }}</p>
                        <p class="card-title text-cart">Price: {{pro.price}}</p>
                        
                        <div class="contador">
                            <button class="btn btn-primary" @click="contadorResta()">-</button>
                            <input type="text"  :value="contador" readonly class="numberContador">
                            <button class="btn btn-primary" @click="contadorsuma()">+</button>
                        </div>
                        <button class="btn btn-danger" @click="borrar()">Borrar</button>
                    </div>
                </div>

                </div>
       
        </div>
    </div>
</div>


<div v-else>
    No Hay Productos en el localStorage
</div>
</div>
    
</template>


<style scoped>

.numberContador{
    text-align: center;
    width: 160px;
}
.bg-manual{
    height: 100vh;
    background-color: #564e4e;
    color: white;
}

.contador{
    display: flex;
    justify-content: center;
}

.card-manual {
    height:28rem;
    width : 18rem ;
    margin:20px;
    text-align: center;
    box-shadow: 5px 1px 10px 2px rgba(0, 0, 0, 0.425); 
}
.padding-img{
    padding:10px;
}

.card-manual:hover{
    transform: scale(1.1);
}

.text-cart{
    color: black;
}

</style>
