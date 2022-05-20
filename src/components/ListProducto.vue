<script>

export default {
     name : "ListProducto",
     
      props : {
         id : {
             type : Number,
             required : true
         },
         titulo: {
             type: String,
             required: true
            
          }, 
          
          precio: {
              type: Number,
              required: true
           },
           
           descripcion: {
               type: String,
               required: true
            },
              
            imagen: {
                ype: String,
                required: true
            },
                
            destacado : {
                type: Boolean,
            }
      },
      
      methods: {
          getImgUrl() {
              return this.imagen
          },
          AddtoCart() {
              this.$emit("add-to-cart", this.id, this.titulo, this.precio, this.descripcion, this.imagen, this.destacado)
              let detailsCarrito = 
               {
                      id : this.id,
                      titile : this.titulo,
                      price: this.precio,
                      descripcion : this.descripcion,
                      img: this.imagen,
                      destacado : this.destacado

                  }
              

              let save = localStorage.getItem("ProductCart")
               
              if(!save) {
                  localStorage.setItem("ProductCart", JSON.stringify([detailsCarrito]))
              } else {
                  console.log(JSON.parse(save))
                  let details = JSON.parse(save)
          
                  
                  details.push(detailsCarrito)
                  localStorage.setItem("ProductCart", JSON.stringify(details))
              }
      

          }
        }
    }

 </script>
 <template>
    <div class="card card-manual ">
        <img :src ="getImgUrl()" class="card-img-top padding-img" >
        <div class="card-body">
            <h5 class="card-title">{{ titulo }}</h5>
            <p class="card-text">{{ descripcion }}</p>
            <p class="card-title">Price: {{precio}}</p>
            <button class="btn btn-primary" @click="AddtoCart()">Agregar al Carrito</button>
        </div>
    </div>

</template>
    

<style scoped>

.card-manual {
    height:28rem;
    width : 18rem ;
    margin:20px;
    text-align: center;
    box-shadow: 5px 1px 10px 2px rgba(0, 0, 0, 0.425); 
}

.card-manual:hover{
    transform: scale(1.1);
}
.padding-img{
    padding:10px;
}
</style>

