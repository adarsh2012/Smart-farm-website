<script>
import { Bar } from "vue-chartjs";
export default {
  extends: Bar,
  props: ["maxOpt", "minOpt", "current"],
  data: () => ({
    chartdata: {
      labels: ["Current"],
      datasets: [
        {
          backgroundColor: ["#90CAF9"],
          data: [12],
          fill: false,
        },
        {
          data: [13, 13, 13],
          fill: false,
          borderColor: "red",
          type: "line",
        },
        {
          data: [12, 12, 12],
          fill: false,
          borderColor: "red",
          type: "line",
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
  watch: {
    current: (newval) => {
      this.chartdata.datasets[0].data = newval;
      this.renderChart(this.renderChart, this.options);
    },
    maxOpt: (newval) => {
      this.chartdata.datasets[1].data = [newval, newval, newval];
    },
    minOpt: (newval) => {
      this.chartdata.datasets[2].data = [newval, newval, newval];
      this.renderChart(this.renderChart, this.options);
    },
  },
};
</script>
