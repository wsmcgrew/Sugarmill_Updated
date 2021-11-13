import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidate from "vee-validate";
import Vuelidate from "vuelidate";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faRibbon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

library.add(faRibbon);
library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);

Vue.component("font-awesome-icon", FontAwesomeIcon);

const options = {
  timeout: 2500,
  position: POSITION.TOP_CENTER
};

Vue.use(Toast, options);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VeeValidate);
Vue.use(Vuelidate);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
