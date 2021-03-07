import Vue from "vue";
import Router from "vue-router";


import Login from "./pages/Login.vue";
import Home from "./pages/Home.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { name: "login", path: "/login", component: Login },
    { name: "home", path: "/home", component: Home },
    // { path: "/stocks", component: Stocks },
  ],
});
