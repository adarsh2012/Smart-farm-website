<template>
  <div id="controlData">
    <div id="last-updated-control">
      <h5>
        Last updated: <b-badge variant="light">12/2/3 9:00:00 AM</b-badge>
      </h5>
    </div>
    <b-container fluid>
      <b-row class="mb-5" v-for="rowData in controlCardData" :key="rowData.row">
        <b-col v-for="data in rowData.data" :key="data.name">
          <ControlCard
            :name="data.name"
            :step="data.step"
            :range="data.range"
            :metric="data.metric"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ControlCard from "../components/ControlCard ";
export default {
  name: "Control",
  components: {
    ControlCard,
  },
  data() {
    return {
      controlCardData: [
        {
          row: 1,
          data: [
            { name: "EC", range: [5.5, 6.5], step: 0.1, metric: " (S/m)" },
            { name: "pH", range: [4.5, 5.5], step: 0.1, metric: "" },
            { name: "Water Level", range: [-5, 5], step: 1, metric: " (mm)" },
          ],
        },
        {
          row: 2,
          data: [
            { name: "Humidity", range: [80, 90], step: 0.1, metric: " (%)" },
            {
              name: "Temperature",
              range: [16, 22],
              step: 0.1,
              metric: " (°C)",
            },
            { name: "Light", range: [0, 1], step: 1, metric: " (On/Off)" },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.slider {
  /* overwrite slider styles */
  width: 200px;
}

#controlData {
  margin: 1% 0;
}
</style>
