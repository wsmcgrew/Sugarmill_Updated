import Vue from "vue";
import Vuex from "vuex";

import home from "./home";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home
  },

  state: {
    menuItems: [
      {
        id: 1,
        route: "/move-load",
        label: "Move Load"
      },
      {
        id: 2,
        route: "/check-load",
        label: "Check Load"
      }
    ]
  },

  mutations: {},
  actions: {}
});
