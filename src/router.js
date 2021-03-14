import Vue from "vue";
import Router from "vue-router";
import VueAlertify from "vue-alertify";

import Login from "./pages/Login.vue";
import Home from "./pages/Home.vue";
import Cadastro from "./pages/Cadastro.vue";
// import EsqueceuSenha from "./pages/EsqueceuSenha.vue";
import Perfil from "./pages/Perfil.vue";
import EnviarReceita from "./pages/EnviarReceita.vue";
import Receita from "./pages/VisualizarReceita.vue";


Vue.use(Router);
Vue.use(VueAlertify, {
  autoReset: true,
  basic: false,
  closable: true,
  closableByDimmer: true,
  frameless: false,
  maintainFocus: true,
  maximizable: true,
  modal: true,
  movable: true,
  moveBounded: false,
  overflow: true,
  padding: true,
  pinnable: true,
  pinned: true,
  preventBodyShift: false,
  resizable: true,
  startMaximized: false,
  transition: "pulse",
  notifier: {
    delay: 5,
    position: "top-right",
    closeButton: true,
  },
  glossary: {
    title: "AlertifyJS",
    ok: "OK",
    cancel: "Cancel",
  },
  theme: {
    input: "ajs-input",
    ok: "ajs-ok",
    cancel: "ajs-cancel",
  },
});

export default new Router({
  mode: "history",
  routes: [
    { name: "login", path: "/login", component: Login },
    { name: "home", path: "/", component: Home },
    { name: "cadastro", path: "/cadastro", component: Cadastro },
    // {
    //   name: "esqueceu-senha",
    //   path: "/esqueceu-senha",
    //   component: EsqueceuSenha,
    // },
    {
      name: "enviar-receita",
      path: "/enviar-receita",
      component: EnviarReceita,
    },
    { name: "perfil", path: "/perfil", component: Perfil },
    { name: "receita", path: "/receita", component: Receita }
  ],
});
