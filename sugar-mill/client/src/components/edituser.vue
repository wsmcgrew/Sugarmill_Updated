<template>
  <div>
    <b-modal
      id="edit-user"
      size="lg"
      title="Edit User"
      @ok="handleOk"
      @show="resetModal"
      @hidden="resetModal"
      ok-title="Save"
    >
      <strong>Current User: </strong>{{ userData.Users_Name }}
      <strong>Current User Role: </strong>
      {{ this.$store.state.auth.user.roles }}

      <b-form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="userData.EmailAddress"
            type="email"
            placeholder="sampleEmail@email.com"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="userData.Users_Name"
            placeholder="Joe Dirt"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Company Name:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="userData.CompanyName"
            placeholder="ole south growers?"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Roles:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="userData.roles"
            :options="roles"
            required
          ></b-form-select>
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jsonForm: {},
      form: {
        EmailAddress: "",
        Users_Name: "",
        Password: "",
        CompanyName: "",
        roles: null
      },
      roles: ["admin", "user"],
      show: true
    };
  },
  props: {
    userData: {
      type: Object,
      defaultStatus: function() {
        return {};
      }
    }
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      return valid;
    },
    resetModal() {
      this.selectedTract = null;
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.handleSubmit();
    },
    async handleSubmit() {
      this.$toast.success("you getting the shit done!");
      let body = {
        EmailAddress: this.userData.EmailAddress,
        Users_Name: this.userData.Users_Name,
        CompanyName: this.userData.CompanyName,
        roles: [this.form.roles]
      };
      this.message = "";
      this.submitted = true;
      this.$validator.validate().then(isValid => {
        if (isValid) {
          this.$store.dispatch("admin/update", body).then(
            data => {
              this.message = data.message;
              this.successful = true;
              this.$toast.success(
                `User ${this.userData.Users_Name} has been altered`
              );
            },
            error => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
              this.successful = false;
            }
          );
        }
      });
      this.$nextTick(() => {
        this.$bvModal.hide("edit-user");
      });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.EmailAddress = "";
      this.form.Users_Name = "";
      this.form.Password = "";
      this.form.CompanyName = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
