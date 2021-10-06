<template>
  <div class="row pt-2 pb-2 light">
    <div class="col-2"></div>
    <div class="col-10 text-right">
      <b-dropdown id="drops">
        <template #button-content>
          <b-icon-person></b-icon-person> {{ userName }}
        </template>
        <b-dropdown-item-button @click="logout()">
          Log out
        </b-dropdown-item-button>
      </b-dropdown>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import router from "../router/index";

export default {
  Name: "TopMenu",
  data() {
    return {
      userName: "Ima Developer"
    };
  },
  methods: {
    logout() {
      axios.get("http://localhost:5001/api/logout").then(() => {
        router.push("/");
      });
    }
  }
};
</script>
