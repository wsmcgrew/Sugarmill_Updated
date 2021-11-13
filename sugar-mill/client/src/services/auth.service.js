import axios from "axios";
import authHeader from "../services/auth-header";

const API_URL = "http://localhost:5001/api/auth/";

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
    return axios.delete("http://localhost:5001/api/growers/" + id, {
      headers: authHeader()
    });
  }
}

export default new AuthService();
