<template>
  <div>
    <div class="card mt-3">
      <template v-if="checkAdmin">
        <div class="card-body">
          <strong class="card-title">
            <b-icon-person-circle class="mr-2"></b-icon-person-circle>
            <!--//crude, implied all items of array is same names -->
            Administration User:
            <strong>{{ user.Users_Name }}</strong>
          </strong>
          <div class="row">
            <b-col>
              <b-table
                striped
                small
                id="user-data"
                stacked="lg"
                responsive
                head-variant="dark"
                hover
                :items="allgrowers"
                :field="field"
              >
              </b-table>
            </b-col>
          </div>
          <template>
            <b-button size="sm" @click="showModal" variant="primary">
              <b-icon-plus></b-icon-plus>
              Add User
            </b-button>
          </template>
          <!-- end div for load seperation -->
        </div>
      </template>
      <template v-else>
        <h3>
          You do not have permission to view this page! Go home you're drunk!
        </h3>
      </template>
    </div>
    <!-- end class card -->
    <add-user></add-user>
  </div>
</template>

<script>
import AddUser from "../components/adduser.vue";
import { mapActions, mapState } from "vuex";

export default {
  Name: "Home",
  components: {
    AddUser
  },
  data() {
    return {
      newTractName: "",
      tractData: {},
      field: [
        { key: "EmailAddress", label: "Email Address" },
        { key: "Users_Name", label: "User Name" },
        { key: "CompanyName", label: "Company Name" },
        { key: "GrowerId", lable: "ID" },
        { key: "Password", label: "Password" }
      ]
    };
  },
  computed: {
    ...mapState("home", ["allgrowers"]),
    ...mapState("auth", ["user"]),
    currentUser() {
      return this.$store.state.auth.user;
    },
    checkAdmin() {
      return this.currentUser.roles.includes("ROLE_ADMIN");
    }
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    ...mapActions("home", ["getUsers"]),

    showModal(item) {
      this.userdata = item;
      this.editMode = false;
      this.$bvModal.show("add-user");
    }
  }
};
</script>
