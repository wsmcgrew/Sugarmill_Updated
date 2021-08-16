<template>
  <div>
    <div class="card mt-3">
      <div class="card-body">
          <strong class="card-title">
          <b-icon-person-circle class="mr-2"></b-icon-person-circle>
          <!--//crude, implied all items of array is same names -->
          Grower Name: <h1>{{ millList[0].GrowerName }}</h1> CompanyName: <h1>{{ millList[0].CompanyName }} </h1>
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
              </b-table>
          </b-col>
        </div> <!-- end div for load seperation -->
      </div>
    </div> <!-- end class card -->
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  Name: "Home",
  components: {},
  data() {
    return {
     fields: [
       { key: "Mill_Name", label: "Mill Name" },      
       { key: "GrossTime", label: "Gross Time" },
       { key: "Mill_Name", label: "Mill Name" },
       //{ key: "GrowerName", label: "Grower Name" },
       { key: "HaulerName", label: "Driver Name" },
      // { key: "MillCr" },
       { key: "NetWt", label: "Total weight" },
       { key: "OverWeight" },
       { key: "GrossWt", lable: "Load weight"},
      // { key: "TareTime" },
      // { key: "TareWt" },
      // { key: "TruckId" },
       { key: "EmailAddress:", label: "Email Address"},
       { key: "TractName" },
       //{ key: "TrailerId" },
       //{ key: "TruckId" },
       //{ key: "Users_Name" },
     ]
    }
  },
  computed: {
    ...mapState("home", ["millList"])
  },
  mounted() {
    this.getMillList();
  },
  methods: {
    ...mapActions("home", ["getMillList"]),

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
