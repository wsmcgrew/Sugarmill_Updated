<template>
  <div>
    <div class="card mt-3">
      <div class="card-body">
        <strong class="card-title">
          <b-icon-person-circle class="mr-2"></b-icon-person-circle>
          <!--//crude, implied all items of array is same names -->
          Grower Name:
          <h1>{{ user.Users_Name }}</h1>
          Id:
          <h1>{{ user.id }}</h1>
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
              <!--

              -->
              <template #cell(show_details)="row">
                <b-button
                  size="sm"
                  variant="clear"
                  @click="row.toggleDetails"
                  class="mr-2"
                >
                  <b-icon-arrow-bar-down
                    v-if="!row.detailsShowing"
                  ></b-icon-arrow-bar-down>
                  <b-icon-arrow-bar-up
                    v-if="row.detailsShowing"
                  ></b-icon-arrow-bar-up>
                </b-button>
              </template>
              <template #row-details="row" style="background-color: orange">
                <b-col>
                  <b-table
                    striped
                    small
                    id="cane-loads"
                    stacked="lg"
                    responsive
                    head-variant="dark"
                    hover
                    :items="row.item.Cane_Loads"
                    :fields="rowDetail"
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
      rowDetail: [
        { key: "TractId", label: "Tract Id" },
        { key: "TractName", label: "Tract Name" },
        { key: "GrossWt", label: "Gross Wt" },
        { key: "LastUpdatedBy", label: "Last Updated" },
        { key: "actions", label: "Change Tract" }
      ],
      fields: [
        { key: "Mill_Name", label: "Mill Name" },
        { key: "id", label: "Mill Id" },
        //{ key: "actions", label: "Move Tract" },
        { key: "show_details", label: "" },
        { key: "show_details", label: "" }
      ]
    };
  },
  computed: {
    ...mapState("home", ["millList"]),
    ...mapState("auth", ["user"]),
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    this.getMillList(this.user.id);
  },
  methods: {
    ...mapActions("home", ["getMillList"]),

    extractDetails(row) {
      return row.Cane_Loads;
    },
    showTract(item) {
      console.log(item);
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
