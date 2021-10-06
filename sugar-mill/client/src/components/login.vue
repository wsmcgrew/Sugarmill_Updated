<template>
  <div>
    <h2>Login</h2>
    <form v-on:submit="login">
      <input type="text" name="email" /><br />
      <input type="password" name="password" /><br />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";
export default {
  name: "Login",
  methods: {
    login: e => {
      e.preventDefault();
      let email = "user@email.com";
      let password = "password";
      let login = () => {
        let data = {
          email: email,
          password: password
        };
        axios
          .post("http://localhost:5001/api/login", data)
          .then(response => { //response
            console.log("Logged in *Front end *" + response)
            router.push("/home");
          })
          .catch(errors => {
            console.log("Cannot log in" + errors);
          });
      };
      login();
    }
  }
};
</script>
