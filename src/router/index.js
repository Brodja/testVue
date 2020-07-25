import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "create",
      component: () => import("../views/NoteCreate.vue"),
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: () => import("../views/NoteEdit.vue"),
    },
  ],
});
