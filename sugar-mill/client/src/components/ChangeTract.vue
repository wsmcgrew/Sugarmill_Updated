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
            Mill Name: {{ tractData.Mill_Name }} CurrentTract:
            {{ tractData.TractName }} Tract Id: {{ tractData.id }}
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
    setTractIds() {
      this.tractsList.forEach(a => {
        if (a.TractName == this.selectedTract) {
          this.selectedTractObj.tractName = a.TractName;
          this.selectedTractObj.tractId = a.TractId;
        }
      });
    },
    async handleSubmit() {
      this.setTractIds();

      console.log(this.selectedTractObj.tractName);
      console.log(this.selectedTractObj.tractId);
      try {
        await axios.put(
          "http://localhost:5001/api/Tracts/" +
            this.tractData.id +
            "/" +
            "jbwentworth" +
            "/" +
            this.selectedTractObj.tractId +
            "/" +
            this.selectedTractObj.tractName
        );

        this.$nextTick(() => {
          this.$bvModal.hide("move-land-tract");
        });
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
