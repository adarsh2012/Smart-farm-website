<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;
import Chart from "chart.js";
import * as ChartAnnotation from "chartjs-plugin-annotation";
Chart.plugins.register([ChartAnnotation]);

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: {
    options: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
  watch: {
    options: {
      handler() {
        this.renderChart(this.chartData, this.options);
      },
      deep: true,
    },
  },
};
</script>
