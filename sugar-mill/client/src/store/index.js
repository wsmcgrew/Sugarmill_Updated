import Vue from "vue";
import Vuex from "vuex";

import home from "./home";
import auth from "./auth";
import admin from "./admin";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    auth,
    admin
  },

  state: {
    menuItems: [
      {
        id: 1,
        route: "/add-user",
        label: "Add User"
      }
    ]
  },

  mutations: {},
  actions: {}
});
