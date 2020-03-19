<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ["Max", "Current", "Min"],
      datasets: [
        {
          label: "Data One",
          backgroundColor: ["#f87979", "#90CAF9", "#FFBD1D"],
          data: [90, 85, 80]
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>
