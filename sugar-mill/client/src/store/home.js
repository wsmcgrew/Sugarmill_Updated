import axios from "axios";

export default {
    namespaced: true,
    state: {
        millList: {}
    },
    
    mutations: {
        SAVE_MILL_LIST(state, data) {
            state.millList = data;
        }
    },

    actions: {
        getMillList({ commit }) {
            return new Promise((resolve, reject) =>{
                axios.get("http://localhost:5001/api/Growers/2")
                .then(response => {
                    resolve(commit("SAVE_MILL_LIST", response.data));
                })
                .catch(error => {
                    reject(error.response.data);
                })
            });
        }
    },

    modules: {}
}