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

export default {
  Name: "TopMenu",
  data() {
    return {
      userName: "Ima Developer"
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/");
      this.toast.success("Logged out successfully");
    }
  }
};
</script>
