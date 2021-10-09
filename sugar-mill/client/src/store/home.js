import axios from "axios";

export default {
  namespaced: true,
  state: {
    millList: [],
    tractsList: []
  },

  mutations: {
    SAVE_MILL_LIST(state, data) {
      state.millList = data;
    },
    SAVE_TRACTS(state, data) {
      state.tractsList = data;
    }
  },

  actions: {
    getMillList({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("http://localhost:5001/api/cane_loads/2")
          .then(response => {
            resolve(commit("SAVE_MILL_LIST", response.data.data)); //this is fucking stupid, but sequalize 
          })
          .catch(error => {
            reject(error.response.data);
          });
      });
    },
    getTracts({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("http://localhost:5001/api/tracts")
          .then(response => {
            resolve(commit("SAVE_TRACTS", response.data.data));
          })
          .catch(error => {
            reject(error.response.data);
          });
      });
    }
  },

  modules: {}
};
