<template>
  <div>
    <b-modal
      id="move-land-tract"
      size="lg"
      title="Move Tract"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
      ok-title="Save"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <div class="row">
          <div class="col">
            Mill Name: {{ tractData.Mill_Name }} CurrentTract:
            {{ tractData.TractName }}
          </div>
        </div>
        <div class="col">
          <b-form-group id="input-group-1" label="Land" label-for="input-1">
            <!-- tractList should be computed property -->
            <b-form-select
              :options="tractsList"
              required
              value-field="TractName"
              v-modal="selectedTract"
              text-field="TractName"
            ></b-form-select>
            {{ this.selectedTract }}
            <b-form-invalid-feedback id="input-1-live-feedback">
              This is a required field</b-form-invalid-feedback
            >
          </b-form-group>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import axios from "axios";

export default {
  Name: "ChangeTract",
  data() {
    return {
      selectedTract: {}
    };
  },
  props: {
    tractData: {
      type: Object,
      defaultStatus: function() {
        return {};
      }
    }
  },
  computed: {
    ...mapState("home", ["tractsList"])
  },
  mounted() {
    this.getTractsList();
  },
  methods: {
    ...mapActions("home", ["getTracts"]),

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
      console.log(this.selectedTract);
      this.$nextTick(() => {
        this.$bvModal.hide("move-land-tract");
      });

      try {
        await axios.put(
          "http://localhost:5001/Tracts" +
            this.selectedTract +
            "&LastUpdatedBy=jbwentworth" +
            "&IsAltered=1"
        );
      } catch {
        console.log("Error moving tract");
      }
    },
    async getTractsList() {
      try {
        await this.getTracts();
      } catch {
        console.log("error calling API");
      }
    }
  }
};
</script>
