<template>
    <header>
        
        <nav  class="navbar navbar-dark bg-dark justify-content-center">
            
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <a class="style-link-nav" aria-current="page" href="#/">Home</a>
    
                    </li>
                
                <li class="nav-item">
                    <a class="style-link-nav" href="#/ContenPrincipal">Catalogo</a>
                </li>
                
                <li class="nav-item">
                    <a class="style-link-nav" href="#/Registro">Registro</a>
                </li>
                
                <li class="nav-item">
                    <a class="style-link-nav" href="#/Login">Iniciar Sesion</a>
                </li>
                
                <li class="nav-item">
                    <a href="#/Cart" class="style-link-nav">Carrito<span class="numbarCart">{{ productCart.length }}</span></a>

                </li>

             
            </ul>
        </nav>
        <componentes :is="ViewComponent"  @product-cart="addToCart" :productCart="productCart"/>
       
        
    </header>
    
</template>

<script>

import ProductCart from './ProductCart.vue'
import FormularioWeb from './FormularioWeb.vue'
import UserLogin from './UserLogin.vue'
import ContenPrincipal from './ContenPrincipal.vue'
import UserHome from './UserHome.vue'
const routes = {
  '/': UserHome,
  '/ContenPrincipal': ContenPrincipal,
  '/Registro': FormularioWeb,
  '/Login': UserLogin,
  '/Cart': ProductCart

}


export default {


    
    name: 'NavBar',
    components: {
        ProductCart,
        ContenPrincipal
    },
    
   data() {
       return {
           productCart: [],
           currentPath: window.location.hash,
           cantProduct : JSON.parse(localStorage.getItem("ProductCart"))
       }
   },
    methods:{
        addToCart(cart) {
          
            this.productCart.push(cart)
        }
      
    },

   computed: {
    ViewComponent() {
      return routes[this.currentPath.slice(1) || '/'] || UserHome;
    }
  
  } ,

  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  }


   
  
}
</script>

<style scoped>
.numbarCart{
    background-color: white;
    color: black;
    margin: 10px;
    padding: 2px;
    border: 1px solid black;
    border-radius: 1rem;

}
.style-link-nav{
  color:white;
  margin: 10px;
  padding: 2px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
}

.style-link-nav:hover{
  color:rgb(151, 151, 151);
  text-decoration: underline;
}
</style>

