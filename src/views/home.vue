<template>
  <div id="homeData">
    <b-container fluid>
      <b-row class="mb-5" v-for="row in data" :key="row.row">
        <b-col v-for="items in row.data" v-bind:key="items">
          <DataCard :CardName="items" />
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
    DataCard
  },
  props: [],
  data() {
    return {
      data: [
        { row: 1, data: ["EC value", "pH value", "Water level"] },
        { row: 2, data: ["Humidity", "Temperature", "Light"] }
      ]
    };
  }
};
</script>

<style scoped>
#homeData {
  color: rgb(255, 255, 255);
  margin: 1% 0;
}
</style>
