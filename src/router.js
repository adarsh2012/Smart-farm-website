import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home.vue";
import Stats from "./views/stats.vue";
import Video from "./views/video.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/stats",
      name: "stats",
      component: Stats
    },
    {
      path: "/video",
      name: "video",
      component: Video
    }
  ]
});
