<template>
  <div id="app">
    <div id="app-wrapper">
      <b-container fluid>
        <b-row>
          <b-col cols="2"><Sidebar /></b-col>
          <b-col cols="10"><router-view /></b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Layout/Sidebar";
export default {
  name: "App",
  components: {
    Sidebar
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  background: #1e1e2f;
  color: #ffffff;
}
</style>

<style scoped>
#app-wrapper {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
