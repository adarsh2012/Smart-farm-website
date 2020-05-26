<template>
  <div>
    <div>
      <b-card-group deck>
        <div v-for="items in errItems" :key="items.id">
          <ErrCard
            :propName="items.name"
            :conds="getCond(items.id)"
            :allData="allCurrentData"
          />
        </div>
      </b-card-group>
    </div>
    <div v-for="items in errItems" :key="items.id">
      <GraphDisplay
        :propName="items.name"
        :conds="getCond(items.id)"
        :allData="allCurrentData"
        :borderColor="items.color"
        :backgroundColor="items.backgroundColor"
      />
    </div>
  </div>
</template>

<script>
import GraphDisplay from "../components/GraphDisplay";
import ErrCard from "../components/ErrCard";
export default {
  name: "Stats",
  components: { GraphDisplay, ErrCard },
  props: ["allData", "webdata", "propertyCondition"],
  data() {
    return {
      propertyDict: {
        1: "Temperature",
        2: "pH",
        3: "EC",
      },
      errItems: [
        {
          id: 1,
          name: "Temperature",
          color: "#90CAF9",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
        },
        {
          id: 2,
          name: "pH",
          color: "#90CAF9",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
        },
        {
          id: 3,
          name: "EC",
          color: "#90CAF9",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
        },
      ],
      allCurrentData: this.allData,
      modifiedCondJSON: {},
      errJSON: {},
    };
  },
  watch: {
    allData: function(newVal) {
      this.allCurrentData = newVal;
    },
    webdata: function(newVal) {
      var currentTimeStamp = this.allCurrentData[
        this.allCurrentData.length - 1
      ];
      if (newVal.currentTime > currentTimeStamp.currentTime) {
        console.log("adasdwads");
        this.allCurrentData.push(newVal);
      }
    },
  },
  methods: {
    getCond(propId) {
      for (var i = 0; i < this.propertyCondition.length; i++) {
        if (this.propertyCondition[i].idProperty == propId) {
          return this.propertyCondition[i];
        }
      }
    },
  },
};
</script>

<style scoped></style>
