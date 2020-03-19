<template>
  <div>
    <b-card
      class="text-center card-color"
      align="center"
      header-tag="header"
      :title="name + metric"
    >
      <span> {{ sliderValue }} </span>
      <b-card-body>
        <range-slider
          class="slider"
          :min="range[0]"
          :max="range[1]"
          :step="step"
          v-model="sliderValue"
        />
        <div>
          <b-button variant="primary"> Send!</b-button>
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import RangeSlider from "vue-range-slider";
import "vue-range-slider/dist/vue-range-slider.css";

export default {
  name: "ControlCard",
  props: ["range", "step", "name", "metric"],
  data() {
    return {
      sliderValue: null,
      button: "<b-button> Send! </b-button>"
    };
  },
  components: {
    RangeSlider
  }
};
</script>

<style scoped>
.card-color {
  background-color: #374e5880;
}
</style>
