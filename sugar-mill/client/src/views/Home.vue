<template>
  <div>
    <div class="card mt-3">
      <div class="card-body">
        <strong class="card-title">
          <b-icon-person-circle class="mr-2"></b-icon-person-circle>
          <!--//crude, implied all items of array is same names 
          Grower Name:
          <h1>{{ millList[0].GrowerName }}</h1>
          CompanyName:
          <h1>{{ millList[0].CompanyName }}</h1>-->
        </strong>
        <div class="row">
          <b-col>
            <b-table
              striped
              small
              id="cane-loads"
              stacked="lg"
              responsive
              head-variant="dark"
              hover
              :items="millList"
              :fields="fields"
            >
              <template #cell(actions)="row">
                <b-button
                  size="sm"
                  @click="showTract(row.item, row.index, $event.target)"
                  variant="primary"
                >
                  <b-icon-plus></b-icon-plus>
                  Process
                </b-button>
              </template>
            </b-table>
          </b-col>
        </div>
        <!-- end div for load seperation -->
      </div>
    </div>
    <!-- end class card -->
    <change-tract :tractData="tractData"></change-tract>
  </div>
</template>

<script>
import ChangeTract from "../components/ChangeTract.vue";
import router from "../router/index";
import axios from "axios";
import { mapActions, mapState } from "vuex";

export default {
  Name: "Home",
  components: {
    ChangeTract
  },
  data() {
    return {
      newTractName: "",
      tractData: {},
      fields: [
        { key: "Mill_Name", label: "Mill Name" },
        { key: "GrossTime", label: "Gross Time" },
        { key: "Mill_Name", label: "Mill Name" },
        { key: "HaulerName", label: "Driver Name" },
        { key: "NetWt", label: "Total weight" },
        { key: "OverWeight" },
        { key: "GrossWt", lable: "Load weight" },
        { key: "TractName", label: "Current Tract" },
        { key: "actions", label: "Move Tract" }
      ]
    };
  },
  computed: {
    ...mapState("home", ["millList"])
  },
  mounted() {
    this.getMillList();
    this.getUserData();
  },
  methods: {
    ...mapActions("home", ["getMillList"]),

    getUserData: function() {
      let self = this;
      axios
        .get("http://localhost:5001/api/user")
        .then(response => {
          console.log(response);
          self.$set(this, "user", response.data.user);
        })
        .catch(errors => {
          console.log(errors);
          router.push("/");
        });
    },
    showTract(item) {
      this.tractData = item;
      this.editMode = false;
      this.$bvModal.show("move-land-tract");
    },

    async getList() {
      try {
        await this.getMillList();
      } catch {
        console.log("Error calling api");
      }
    }
  }
};
</script>
