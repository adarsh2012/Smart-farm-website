<template>
  <b-card
    bg-variant="secondary"
    text-variant="white"
    :header="propName + ' performance'"
    class="text-center"
  >
    <b-card-text
      v-b-tooltip.hover
      title="Measures the % of data that were optimal"
      >{{ calculatedErr }}%</b-card-text
    >
  </b-card>
</template>

<script>
export default {
  name: "ErrCard",
  props: ["propName", "conds", "allData"],
  data() {
    return {
      calculatedErr: null,
    };
  },
  watch: {
    allData: function() {
      this.calculateErrMethod();
    },
    conds: function() {
      this.calculateErrMethod();
    },
  },
  methods: {
    calculateErrMethod() {
      var amount = 0;
      console.log(this.allData.length);
      for (var i = 0; i < this.allData.length; i++) {
        if (
          this.allData[i][this.propName] > this.conds.Max ||
          this.allData[i][this.propName] < this.conds.Min
        ) {
          amount += 1;
        }
      }
      amount = 100 * ((this.allData.length - amount) / this.allData.length);
      amount = Math.round(amount);
      this.calculatedErr = amount;
    },
  },
  mounted() {
    this.calculateErrMethod();
  },
};
</script>

<style scoped></style>
