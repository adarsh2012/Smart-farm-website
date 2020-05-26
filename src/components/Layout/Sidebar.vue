<template>
  <div class="side-wrapper">
    <div class="sidebar">
      <header>Farm app</header>
      <ul v-for="routes in tags" v-bind:key="routes.name">
        <li>
          <NavComponent
            v-bind:name="routes.name"
            v-bind:logoName="routes.logoName"
            v-bind:route="routes.route"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavComponent from "./NavComponent";
export default {
  name: "Sidebar",
  props: [],
  components: {
    NavComponent,
  },
  data() {
    return {
      tags: [
        {
          name: "Data",
          logoName: "table",
          route: "/",
        },
        {
          name: "Stats",
          logoName: "calculator",
          route: "/stats",
        },
        {
          name: "Video",
          logoName: "video",
          route: "/video",
        },
      ],
    };
  },
};
</script>

<style scoped>
.sidebar {
  font-family: "Times New Roman", Times, serif;
  background: #063146;
  margin: 5% 0;
}
.sidebar header {
  font-size: 22px;
  color: white;
  text-align: center;
  line-height: 70px;
  background: #0c587e;
  user-select: none;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
