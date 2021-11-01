<template>
  <div>
    <b-modal
      id="move-land-tract"
      size="lg"
      title="Move Tract"
      @ok="handleOk"
      @show="resetModal"
      @hidden="resetModal"
      ok-title="Save"
    >
      <b-form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="form.EmailAddress"
            type="email"
            placeholder="sampleEmail@email.com"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.Password"
            placeholder="password123"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.Users_Name"
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
            v-model="form.CompanyName"
            placeholder="ole south growers?"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Roles:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="form.roles"
            :options="roles"
            required
          ></b-form-select>
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";

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
      roles: ["admin", "moderator", "user"],
      show: true
    };
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
      //event.preventDefault();

      alert(JSON.stringify(this.form));

      let body = {
        EmailAddress: this.form.EmailAddress,
        Users_Name: this.form.Users_Name,
        Password: this.form.Password,
        CompanyName: this.form.CompanyName,
        roles: this.form.roles
      };

      await axios
        .post("http://localhost:5001/api/auth/signup", body)
        .then(response => {
          alert(`User ${this.form.Users_Name} was created`);
          console.log("User created" + response);
          router.push("/login");
        })
        .catch(err => {
          alert(err);
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
