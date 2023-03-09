import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import Unicon from "vue-unicons";
import {
  uniLayerGroupMonochrome,
  uniTrashAlt,
  uniShoppingBag,
} from "vue-unicons/dist/icons";

Unicon.add([uniLayerGroupMonochrome, uniTrashAlt, uniShoppingBag]);

const app = createApp(App);

app.use(router).use(store).use(Unicon);

app.mount("#app");
