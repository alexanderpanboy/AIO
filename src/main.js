import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import vuetify from "./plugins/vuetify";
import hardware from "./components/hardware.vue";
import software from "./components/software.vue";
import hi from "./components/Hi.vue";
import hello from "./components/hello.vue";

Vue.use(VueRouter);
const routes = [
  { path: "/hardware", component: hardware },
  { path: "/software", component: software },
  { path: "/hello", component: hello },
  { path: "/", component: hi },


];

const router = new VueRouter({
  routes
});
Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
