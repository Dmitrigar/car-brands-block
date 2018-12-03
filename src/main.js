import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import HomePage from "./HomePage.vue";
import BrandPage from "./BrandPage.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { name: 'home', path: "/", component: HomePage },
  { name: 'brand', path: "/brand/:id", component: BrandPage }
];

const router = new VueRouter({ routes });

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
