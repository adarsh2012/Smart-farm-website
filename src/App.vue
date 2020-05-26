<template>
  <div id="app">
    <div id="app-wrapper">
      <div>
        <b-dropdown
          id="dropdown-2"
          text="Plants"
          class="m-md-2"
          variant="primary"
        >
          <b-dropdown-item
            v-on:click="currentPlant(plants.idPlant_type, plants.Plant_name)"
            v-for="plants in basicData.plantList"
            v-bind:key="plants.idPlant_type"
            >{{ plants.Plant_name }}</b-dropdown-item
          >
        </b-dropdown>
        <b-button variant="warning" @click="requestSwitchLight(1)"
          >Switch ON</b-button
        >
        <b-button variant="info" @click="requestSwitchLight(0)"
          >Switch OFF</b-button
        >
        <div style="float:right">
          <span class="font-weight-bold">Light status:</span>
          <div
            class="badge badge-primary text-wrap"
            style="width: 6rem; margin: 10px;"
          >
            {{
              Object.keys(currentData).length !== 0
                ? currentData.led_state == 1
                  ? "on"
                  : "off"
                : "Gathering information"
            }}
          </div>
          <span class="font-weight-bold">Plant:</span>
          <div
            class="badge badge-primary text-wrap"
            style="width: 6rem; margin: 10px;"
          >
            {{ selectedPlantData }}
          </div>
        </div>
        <!-- <toggle-button
          :value="true"
          :labels="{ checked: 'On', unchecked: 'Off' }"
        /> -->
      </div>
      <b-container fluid>
        <b-row>
          <b-col cols="2"><Sidebar id="sidebar"/></b-col>
          <b-col cols="10"
            ><router-view
              :webdata="currentData"
              :propertySuggest="basicData.propertyList"
              :propertyCondition="currentCriteria"
              :allData="allData"
          /></b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Layout/Sidebar";
export default {
  name: "App",
  components: {
    Sidebar,
  },
  data() {
    return {
      selectedPlantData: "",
      basicData: {},
      allData: {},
      currentData: {},
      currentCriteria: [],
    };
  },
  methods: {
    getCurrentData() {
      this.axios
        .get(
          "https://58x7pgj089.execute-api.us-east-1.amazonaws.com/TestStage/getrecentdata"
        )
        .then((response) => (this.currentData = response.data[0]));
    },
    //Both basic and all data are just called once, the stats page will then update the list (for all datas. Saving some memory)
    getBasicData() {
      this.axios
        .get(
          "https://58x7pgj089.execute-api.us-east-1.amazonaws.com/TestStage/getbasicdata"
        )
        .then((response) => {
          this.basicData = response.data;
          this.currentPlant(
            response.data.plantList[0].idPlant_type,
            response.data.plantList[0].Plant_name
          );
        });
    },
    getAllData() {
      this.axios
        .get(
          "https://58x7pgj089.execute-api.us-east-1.amazonaws.com/TestStage/getalldata"
        )
        .then((response) => {
          this.allData = response.data;
        });
    },
    pollData() {
      this.polling = setInterval(() => {
        this.getCurrentData();
      }, 5000);
    },
    currentPlant(plantType, plantName) {
      var finalList = [];
      this.selectedPlantData = plantName;
      for (var i = 0; i < this.basicData.limits.length; i++) {
        if (this.basicData.limits[i].idType == plantType) {
          finalList.push(this.basicData.limits[i]);
        }
      }
      this.currentCriteria = finalList;
    },
    requestSwitchLight(status) {
      this.axios
        .post(
          "https://58x7pgj089.execute-api.us-east-1.amazonaws.com/TestStage/requestchange",
          { led: status }
        )
        .then((response) => {
          console.log(response.data);
        });
    },
  },
  mounted() {
    this.getBasicData();
    this.getAllData();
  },
  beforeDestroy() {
    clearInterval(this.polling);
  },
  created() {
    this.pollData();
  },
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
</style>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* Below is from body */
  width: 100%;
  min-height: 100vh;
  background: #1e1e2f;
  color: #ffffff;
}

#ledStat {
  float: right;
  margin: 10px;
}
</style>
