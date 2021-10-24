<template>
  <div>
    <!-- mobile menu -->
    <mobile-menu :items="menuItems"></mobile-menu>

    <!-- site wrapper -->
    <div class="wrapper">
      <!-- Sidebar -->
      <side-menu :items="menuItems"></side-menu>

      <!-- Page Content -->
      <div class="container-fluid">
        <top-menu></top-menu>
        <div class="row">
          <div class="col">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MobileMenu from "./components/MobileMenu";
import SideMenu from "./components/SideMenu";
import TopMenu from "./components/TopMenu";

export default {
  components: {
    MobileMenu,
    SideMenu,
    TopMenu
  },

  computed: {
    menuItems() {
      return this.$store.state.menuItems;
    },
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_ADMIN");
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_MODERATOR");
      }

      return false;
    }
  }
};
</script>

<style lang="scss">
@import "assets/css/layout.scss";
@import "assets/css/site.scss";
</style>
