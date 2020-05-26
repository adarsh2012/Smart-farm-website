<template>
  <div id="homeData">
    <div id="last-updated-home">
      <h5>
        Last updated:
        <b-badge v-if="this.webdata.currentTime !== undefined" variant="light">
          {{ epoch_to_Date(webdata.currentTime) }}
        </b-badge>
      </h5>
    </div>
    <b-container fluid>
      <b-row class="mb-5" v-for="row in data" :key="row.row">
        <b-col v-for="items in row.data" v-bind:key="items.name">
          <DataCard
            :Data="webdata[items.db_name]"
            :CardName="items.name"
            :Units="items.units"
            :Avg_val="webdata[items.avg_db]"
            :conds="getCond(items.propId)"
            :suggestions="getCriteria(items.propId)"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import DataCard from "../components/DataCard";
export default {
  name: "Home",
  components: {
    DataCard,
  },
  props: ["webdata", "propertySuggest", "propertyCondition"],
  data() {
    return {
      data: [
        {
          row: 1,
          data: [
            {
              propId: 3,
              name: "EC value",
              db_name: "EC",
              units: "S/m2/mole",
              avg_db: "avgEC",
            },
            {
              propId: 2,
              name: "pH value",
              db_name: "pH",
              units: "",
              avg_db: "avgpH",
            },
            {
              propId: 1,
              name: "Temperature",
              db_name: "Temperature",
              units: "°C",
              avg_db: "avgTemp",
            },
          ],
        },
      ],
    };
  },
  methods: {
    epoch_to_Date(epochTime) {
      var myDate = new Date(epochTime * 1000);
      return myDate;
    },
    getCond(propId) {
      for (var i = 0; i < this.propertyCondition.length; i++) {
        if (this.propertyCondition[i].idProperty == propId) {
          return this.propertyCondition[i];
        }
      }
    },
    getCriteria(propId) {
      for (var i = 0; i < this.propertySuggest.length; i++) {
        if (this.propertySuggest[i].idProperty_type == propId) {
          return this.propertySuggest[i];
        }
      }
    },
  },
};
</script>

<style scoped>
#homeData {
  margin: 1% 0;
}
</style>
