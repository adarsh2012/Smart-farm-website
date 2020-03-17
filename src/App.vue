<template>
  <div id="app">
    <Sidebar />
    <PropertyCard />
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from "./components/Layout/Sidebar";
import PropertyCard from "./components/PropertyCard";
export default {
  name: "App",
  components: {
    Sidebar,
    PropertyCard
  }
};
</script>

<style>
body {
  /* background-color: #212529; */
  background-color: #1e1e2f;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
