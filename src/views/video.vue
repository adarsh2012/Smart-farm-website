<template>
  <div>
    <div id="video-wrapper">
      <h3>Live footage</h3>
      <youtube
        :video-id="videoId"
        :width="1000"
        :height="500"
        ref="youtube"
        @playing="playing"
      ></youtube>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoId: "jabmsmCn0n4",
    };
  },
  methods: {
    playVideo() {
      this.player.playVideo();
    },
    playing() {
      console.log("/ we are watching!!!");
    },
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
};
</script>

<style scoped>
#video-wrapper {
  text-align: center;
  margin: 1%;
}
h3 {
  color: red;
}
</style>
