import axios from "axios";
import authHeader from "../services/auth-header";

const API_URL = "http://localhost:5001/api/growers/";

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
