<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{ currentUser.Users_Name }}</strong> Profile
      </h3>
    </header>
    <p>
      <strong>Id:</strong>
      {{ currentUser.id }}
    </p>
    <p>
      <strong>Email:</strong>
      {{ currentUser.EmailAddress }}
    </p>
    <strong>Authorities:</strong>
    <ul>
      <li v-for="(role, index) in currentUser.roles" :key="index">
        {{ role }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  }
};
</script>
