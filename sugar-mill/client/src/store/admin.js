import AdminService from "../services/admin.service";

export default {
  namespaced: true,
  state: {
    user: JSON.parse(localStorage.getItem("user")),
    deleted: false,
    updated: false
  },

  mutations: {
    deleteUser(state) {
      state.deleted = state;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    updatedSuccess(state) {
      state.updated = state;
    }
  },

  actions: {
    register({ commit }, user) {
      return AdminService.register(user).then(response => {
        commit("registerSuccess");
        return Promise.resolve(response.data);
      });
    },
    delete({ commit }, id) {
      return AdminService.delete(id).then(response => {
        commit("deleteUser");
        return Promise.resolve(response.data);
      });
    },
    update({ commit }, user) {
      return AdminService.update(user).then(response => {
        commit("updatedSuccess");
        return Promise.resolve(response.data);
      });
    }
  },

  modules: {}
};
