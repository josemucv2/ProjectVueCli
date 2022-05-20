<script>

import ListProducto from './ListProducto.vue'

export default {
    
    name: 'ContentPrincipal',
    components: {
        ListProducto,
        
    },
    
    data() {
        return {
                listaProductos : [
                    {
                        id: 1,
                        titulo: 'Producto 1',
                        precio: 100,
                        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quisquam.',
                        imagen: 'https://dummyimage.com/600x400/000/fff',
                        destacado: true
                    },
                    {
                        id: 2,
                        titulo: 'Producto 2',
                        precio: 200,
                        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quisquam.',
                        imagen: 'https://dummyimage.com/601x400/000/fff',
                        destacado: false
                    },
                    {
                        id: 3,
                        titulo: 'Producto 3',
                        precio: 300,
                        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quisquam.',
                        imagen: 'https://dummyimage.com/602x400/000/fff',
                        destacado: false
                    },
                    {
                        id: 4,
                        titulo: 'Producto 4',
                        precio: 400,
                        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quisquam.',
                        imagen: 'https://dummyimage.com/603x400/000/fff',
                        destacado: false
                    },
                    {
                        id: 5,
                        titulo: 'Producto 5',
                        precio: 500,
                        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quisquam.',
                        imagen: 'https://dummyimage.com/604x400/000/fff',  
                        destacado: false    },  
                        {
                        id: 6,
                        titulo: 'Producto 6',
                        precio: 600,
                        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quisquam.',
                        imagen: 'https://dummyimage.com/605x400/000/fff',
                        destacado: false
                        },
                        
                ],
                
            }
        } ,

        methods: {
            getImgUrl(imagen) {
                return imagen
            },
            AddtoCart(id) {
               let cart = this.listaProductos.find((prod) => {
                   return prod.id == id
                   
               })
              
              this.$emit("product-cart", cart)
               
            }

        }
    }
</script>

<template>
    <main class="direction-box-item">
        
        <ListProducto
        v-for="(item, index) in listaProductos"
        :key="index"
        :id="item.id"
        :titulo="item.titulo"
        :precio="item.precio"
        :descripcion="item.descripcion"
        :imagen="item.imagen"
        :destacado="item.destacado"
        @add-to-cart="AddtoCart"
        />
    </main>
</template>


<style scoped>

.direction-box-item{
    display:flex;
    flex-direction:row;
    justify-content: center;
    flex-wrap: wrap;
}


</style>
