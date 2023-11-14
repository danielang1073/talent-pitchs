import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ProfileTab from "@/components/ProfileTab.vue";
import CarouselComponent from "@/views/CarouselComponent.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/perfil",
  },
  {
    path: "/perfil",
    name: "perfil",
    component: ProfileTab,
  },
  {
    path: "/vacantes",
    name: "vacantes",
    component: CarouselComponent,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: "/talent-pitchs",
  routes,
});

export default router;
