import axios from "axios";
import authHeader from "../services/auth-header";

export default {
  namespaced: true,
  state: {
    millList: [],
    tractsList: [],
    allgrowers: []
  },

  mutations: {
    SAVE_MILL_LIST(state, data) {
      state.millList = data;
    },
    SAVE_TRACTS(state, data) {
      state.tractsList = data;
    },
    SAVE_GROWERS(state, data) {
      state.allgrowers = data;
    }
  },

  actions: {
    getMillList({ commit }, growerId) {
      return new Promise((resolve, reject) => {
        axios
          .get("http://localhost:5001/api/cane_loads/" + growerId, {
            headers: authHeader()
          })
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
    },
    getUsers({ commit }) {
      console.log( authHeader());
      return new Promise((resolve, reject) => {
        axios
          .get("http://localhost:5001/api/growers/", { headers: authHeader() })
          .then(response => {
            resolve(commit("SAVE_GROWERS", response.data.data)); //this is fucking stupid, but sequalize
          })
          .catch(error => {
            reject(error.response.data);
          });
      });
    }
  },

  modules: {}
};
