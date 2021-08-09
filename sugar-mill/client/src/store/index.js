import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {},

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
