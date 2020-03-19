<template>
  <div>
    <router-link class="routeTag" v-bind:to="route">
      <font-awesome-icon class="icon" v-bind:icon="logoName" />{{ name }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavComponent",
  props: ["name", "logoName", "route"]
};
</script>

<style scoped>
.routeTag {
  text-decoration: none;
  display: block;
  height: 100%;
  width: 100%;
  line-height: 65px;
  font-size: 20px;
  color: white;
  padding-left: 30%;
  box-sizing: border-box;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid black;
  transition: 0.4s;
}

.routeTag:hover {
  padding-left: 35%;
  background: #2dce89;
}

.icon {
  margin-right: 20px;
}
</style>
