<template>
  <div>
    <b-card class="text-center card-color" align="center">
      <template v-slot:header>
        <b-nav card-header tabs>
          <b-nav-item disabled>{{ CardName }}</b-nav-item>
          <b-nav-item active>Data</b-nav-item>
          <b-nav-item>Graph</b-nav-item>
          <b-nav-item>Log</b-nav-item>
        </b-nav>
      </template>
      <b-card-body></b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "DataCard",
  props: ["CardName"],
  components: {}
};
</script>

<style scoped>
.card-color {
  background-color: #374e5880;
  box-shadow: 2px coral;
}
</style>
