import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Dynamic from "../views/Dynamic.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/dynamic",
    name: "Dynamic",
    component: Dynamic
  }
];

const router = new VueRouter({
  routes
});

export default router;
