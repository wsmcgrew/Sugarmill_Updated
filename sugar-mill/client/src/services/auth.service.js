import axios from "axios";
import authHeader from "../services/auth-header";

const API_URL = process.env.VUE_APP_NODE_API + "/auth/";

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "signin", {
        EmailAddress: user.EmailAddress,
        Password: user.Password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    return axios.post(API_URL + "signup", user, {
      headers: authHeader()
    });
  }

  delete(id) {
    return axios.delete(process.env.VUE_APP_NODE_API + "/api/growers/" + id, {
      headers: authHeader()
    });
  }
}

export default new AuthService();
