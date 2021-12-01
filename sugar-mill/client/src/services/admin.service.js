import axios from "axios";
import authHeader from "../services/auth-header";

const API_URL = process.env.VUE_APP_NODE_API + "/growers/";

class AdminService {
  delete(id) {
    return axios.delete(API_URL + id, {
      headers: authHeader()
    });
  }

  update(user) {
    return axios.put(API_URL + user.GrowerId, user, {
      headers: authHeader()
    });
  }
}

export default new AdminService();
