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
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <div class="row">
          <div class="col">
            <strong> Mill Name: </strong>{{ tractData.Mill.Mill_Name }}
            <strong> CurrentTract: </strong> {{ tractData.TractName }}
            <strong> Id: </strong>{{ tractData.id }}
          </div>
        </div>
        <div class="col">
          <b-form-group id="input-group-1" label="Land" label-for="input-1">
            <!-- tractList should be computed property -->
            <b-form-select
              :options="tractsList"
              value-field="TractName"
              required
              v-model="selectedTract"
              text-field="TractName"
            ></b-form-select>
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
      selectedTract: {},
      selectedTractObj: [{ tractId: "TractId" }, { tractName: "TractName" }],
      tractObj: [
        { name: "id" },
        { name: "MillId" },
        { name: "TractId" },
        { name: "TractName" }
      ]
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
      //this.setTractIds();
      this.selectedTractObj.tractName = this.selectedTract;
      this.selectedTractObj.tractId = this.tractsList.find(
        tr => (this.selectedTract = tr.TractName)
      );
      console.log(this.selectedTractObj.tractId.TractId);
      console.log(this.selectedTractObj.tractName);

      let body = {
        lastUpdatedBy: "dbo",
        TractId: this.selectedTractObj.tractId.TractId,
        TractName: this.selectedTractObj.tractName,
        isAltered: 1
      };

      try {
        await axios.put(
          "http://localhost:5001/api/cane_loads/update/" + this.tractData.id,
          body
        );

        this.$nextTick(() => {
          this.$bvModal.hide("move-land-tract");
        });
        this.$toast.success("Tract moved successfully");
      } catch {
        this.$toast.success(
          "Unable to remove tract, please contact administrator"
        );
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
