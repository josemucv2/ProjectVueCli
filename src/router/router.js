import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home/UserHome.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login/UserLogin.vue"),
  },
  {
    path: "/FormularioWeb",
    name: "FormularioWeb",
    component: () => import("../views/Registros/FormularioWeb.vue"),
  },
  {
    path: "/Productos",
    name: "Productos",
    component: () => import("../views/Catalogo/ContenPrincipal.vue"),
  },
  {
    path: "/Cart",
    name: "Cart",
    component: () => import("../views/Carrito/ProductCart.vue"),
  },
  {
    path: "/Productos/:id",
    name: "DetailsProductos",
    component: () => import("../views/Catalogo/DetailsProductos.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  basse: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "activeLink",
});

export default router;
