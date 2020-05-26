import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueYoutube from "vue-youtube";
import axios from "axios";
import VueAxios from "vue-axios";
import ToggleButton from "vue-js-toggle-button";
import {
  faVideo,
  faTable,
  faCalculator,
  faCog,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faVideo, faTable, faCalculator, faCog, faChartLine);
Vue.config.productionTip = false;

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(ToggleButton);
Vue.use(VueYoutube);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxios, axios);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
