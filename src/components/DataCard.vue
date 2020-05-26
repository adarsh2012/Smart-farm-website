<template>
  <div class="datacard-anim">
    <b-card :bg-variant="checkRange()" align="center">
      <template v-slot:header>
        <b-nav card-header pills>
          <b-nav-item disabled>{{ CardName }}</b-nav-item>
          <b-nav-item
            class="dataNavButton"
            :active="navstate[0].state"
            v-on:click="changeTo(navstate[0].name)"
            >Data</b-nav-item
          >
          <b-nav-item
            class="VisualNavButton"
            :active="navstate[1].state"
            v-on:click="changeTo(navstate[1].name)"
            >Visual</b-nav-item
          >
        </b-nav>
      </template>
      <b-card-body v-if="this.navstate[0].state">
        <b-alert
          :show="checkRangeAlert()"
          variant="danger"
          v-b-tooltip.hover
          :title="alertSuggest"
          >WARNING {{ CardName }} TOO {{ alertMaxMin }}</b-alert
        >
        <b-table-simple
          hover
          small
          caption-top
          responsive
          table-variant="dark"
          table-responsive-sm
        >
          <b-tbody>
            <b-tr>
              <b-th> Data ({{ Units }}): </b-th>
              <b-td> {{ Data }} </b-td>
            </b-tr>
            <b-tr>
              <b-th> Average (Past 24 hours): </b-th>
              <b-td> {{ Avg_val }} </b-td>
            </b-tr>
            <b-tr>
              <b-th> Optimal range </b-th>
              <b-td> {{ conds.Min }} - {{ conds.Max }} </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-card-body>
      <b-card-body v-if="this.navstate[1].state">
        <Bar
          :width="300"
          :height="300"
          :current="Data"
          :maxOpt="conds.Max"
          :minOpt="conds.Min"
        />
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import Bar from "./Chart/IBar";
export default {
  name: "DataCard",
  props: ["CardName", "Data", "Units", "Avg_val", "conds", "suggestions"],
  components: { Bar },
  data() {
    return {
      alertSuggest: "",
      alertMaxMin: "",
      alertVariant: "dark",
      navstate: [
        {
          name: "Data",
          state: true,
        },
        {
          name: "Graph",
          state: false,
        },
      ],
    };
  },
  methods: {
    changeTo(text) {
      for (var i = 0; i < this.navstate.length; i++) {
        if (text == this.navstate[i].name) {
          this.navstate[i].state = true;
        } else {
          this.navstate[i].state = false;
        }
      }
    },
    checkRange() {
      if (this.Data > this.conds.Max || this.Data < this.conds.Min) {
        return "danger";
      }
      return "dark";
    },
    checkRangeAlert() {
      var finalText;
      if (this.Data > this.conds.Max) {
        finalText = this.suggestions.Max_suggest.trim();
        this.alertMaxMin = "HIGH";
        this.alertSuggest = finalText;
        return true;
      } else if (this.Data < this.conds.Min) {
        this.alertMaxMin = "LOW";
        finalText = this.suggestions.Min_suggest.trim();
        this.alertSuggest = finalText;
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.card-color {
  max-height: auto;
  background-color: #374e5880;
}
</style>
