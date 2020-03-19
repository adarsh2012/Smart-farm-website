<template>
  <div id="app">
    <div class="displayItems">
      <Sidebar class="MainNav gridElem" />
      <router-view class="Others gridElem" />
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
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  background-color: #1e1e2f;
}

.displayItems {
  display: grid;
  grid-template-columns: 20vw auto;
  grid-template-rows: 100vh;
}

.MainNav {
  font-family: "Times New Roman", Times, serif;
  left: 0;
  width: 75%;
  margin: 10px 10px 10px 10px;
  grid-row-start: 1;
  grid-column: 1;
}

.Others {
  grid-row: 1;
  grid-column: 2;
}
</style>
