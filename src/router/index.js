import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "../view/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../components/User.vue"),

    children: [
      {
        path: "session",
        name: "Session",
        component: () => import("../components/Session.vue")
      },
      {
        path: "setting",
        name: "Setting",
        component: () => import("../components/Setting.vue")
      },
      {
        path: "email",
        name: "Email",
        component: () => import("../components/Email.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes
});

export default router;
