import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home.vue";
import Charts from "./views/charts.vue";
import Video from "./views/video.vue";
import Stats from "./views/stats.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/chart",
      name: "chart",
      component: Charts,
    },
    {
      path: "/video",
      name: "video",
      component: Video,
    },
    {
      path: "/stats",
      name: "Stats",
      component: Stats,
    },
  ],
});
