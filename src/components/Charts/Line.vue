<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  data: () => ({
    chartdata: {
      labels: [2, 3, 4, 5, 6, 7, 8],
      datasets: [
        {
          label: "My First dataset",
          data: [2, 3, 4, 5, 6, 7, 8],
          fill: false
        },
        {
          label: "My Second dataset",
          fill: false,
          data: [10, 11, 12, 13, 14, 15, 16]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>

<style scoped></style>
