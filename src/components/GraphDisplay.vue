<template>
  <div>
    <line-chart
      :chart-data="getChartData()"
      :options="getChartOptions()"
      :width="300"
      :height="300"
    />
  </div>
</template>

<script>
import LineChart from "./Chart/LineChart";
export default {
  name: "GraphDisplay",
  props: ["propName", "conds", "allData", "borderColor", "backgroundColor"],
  components: { LineChart },
  data() {
    return {
      chartData: this.getChartData(),
      chartoptions: {
        animation: {
          duration: 1, // general animation time
        },
        hover: {
          animationDuration: 1, // duration of animations when hovering an item
        },
        responsiveAnimationDuration: 1,
        responsive: true,
        maintainAspectRatio: false,
        tooltips: { intersect: false },
        scales: {
          xAxes: [
            {
              type: "time",
              distribution: "series",
              time: {
                unit: "minute",
              },
            },
          ],
        },
        annotation: {
          annotations: [
            {
              drawTime: "afterDatasetsDraw",
              id: "hline",
              type: "line",
              mode: "horizontal",
              scaleID: "y-axis-0",
              value: 3,
              borderColor: "red",
              borderWidth: 1,
              label: {
                yAdjust: -10,
                backgroundColor: "red",
                content: "Min Optimal",
                enabled: true,
              },
            },
            {
              drawTime: "afterDatasetsDraw",
              id: "hline-1",
              type: "line",
              mode: "horizontal",
              scaleID: "y-axis-0",
              value: 10,
              borderColor: "red",
              borderWidth: 1,
              label: {
                yAdjust: 10,
                backgroundColor: "red",
                content: "Max Optimal",
                enabled: true,
              },
            },
          ],
        },
      },
    };
  },
  watch: {
    allData: function() {
      this.chartData = this.getChartData();
    },
  },
  methods: {
    epoch_to_Date(epochTime) {
      var myDate = new Date(epochTime * 1000);
      return myDate;
    },
    getChartData() {
      var valList = [];
      var timeList = [];
      var amount = 200;
      var DataList = this.allData.slice(0).slice(-amount);
      for (var i = 0; i < DataList.length; i++) {
        valList.push(DataList[i][this.propName]);
        timeList.push(DataList[i].currentTime * 1000);
      }
      var chartdata = {
        labels: timeList,
        datasets: [
          {
            label: this.propName,
            data: valList,
            borderColor: this.borderColor,
            backgroundColor: this.backgroundColor,
          },
        ],
      };
      return chartdata;
    },
    getChartOptions() {
      this.chartoptions.annotation.annotations[0].value = this.conds.Min;
      this.chartoptions.annotation.annotations[1].value = this.conds.Max;
      console.log(this.chartoptions);
      return this.chartoptions;
    },
  },
};
</script>

<style scoped></style>
