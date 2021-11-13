<template>
  <div>
    <b-modal
      id="delete-user"
      size="lg"
      title="Delete User"
      @ok="handleOk"
      @show="resetModal"
      @hidden="resetModal"
      ok-title="Save"
    >
      <p>Are you sure you want to remove this user?</p>
      <b-form ref="form" @submit.stop.prevent="handleSubmit">
        <strong>User: </strong> {{ userData.Users_Name }}
        <br />
        <strong>Email Address: </strong> {{ userData.EmailAddress }}
        <br />
        <strong>Company Name: </strong> {{ userData.CompanyName }}
      </b-form>
    </b-modal>
  </div>
</template>

<script>
//import router from "../router";
//import axios from "axios";

export default {
  data() {
    return {
      jsonForm: {}
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
      this.message = "";
      this.submitted = true;
      this.$validator.validate().then(isValid => {
        if (isValid) {
          this.$store.dispatch("admin/delete", this.userData.GrowerId).then(
            data => {
              this.message = data.message;
              this.successful = true;
              this.$toast.success(
                `User ${this.userData.Users_Name} has been deleted`
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
        this.$bvModal.hide("delete-user");
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
