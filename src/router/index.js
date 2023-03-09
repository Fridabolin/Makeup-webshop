import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login/Login.vue";
import Cart from "../views/Cart.vue";
import Shop from "../views/Shop/Shop.vue";
import ProductDetails from "../views/Shop/ProductDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Shop",
      name: "Shop",
      component: Shop,
    },
    {
      path: "/Shop/ProductDetails/:id",
      name: "ProductDetails",
      component: ProductDetails,
      props: true,
    },
    {
      path: "/Login",
      name: "Login",
      component: Login,
    },
    {
      path: "/Cart",
      name: "Cart",
      component: Cart,
    },
    {
      path: "/:catch",
      name: "NotFound",
      component: "NotFound",
    },
  ],
});

export default router;
