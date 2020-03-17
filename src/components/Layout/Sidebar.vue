<template>
  <div class="side-wrapper">
    <div class="sidebar">
      <header>Farm app</header>
      <ul>
        <li>
          <a href="#"
            ><font-awesome-icon class="icon" :icon="['fas', 'table']" /> Data</a
          >
        </li>
        <li>
          <a href="#"
            ><font-awesome-icon
              class="icon"
              :icon="['fas', 'calculator']"
            />Stats</a
          >
        </li>
        <li>
          <a href="#"
            ><font-awesome-icon class="icon" :icon="['fas', 'cog']" />Control</a
          >
        </li>
        <li>
          <a href="#"
            ><font-awesome-icon class="icon" :icon="['fas', 'video']" />Video</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {}
};
</script>

<style scoped>
.sidebar {
  font-family: "Times New Roman", Times, serif;
  position: fixed;
  left: 0;
  width: 250px;
  height: 1000%;
  background: #063146;
  margin: 10px 10px 10px 10px;
}

.sidebar header {
  font-size: 22px;
  color: white;
  text-align: center;
  line-height: 70px;
  background: #0c587e;
  user-select: none;
}

.sidebar ul a {
  text-decoration: none;
  display: block;
  height: 100%;
  width: 100%;
  line-height: 65px;
  font-size: 20px;
  color: white;
  padding-left: 40px;
  box-sizing: border-box;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid black;
  transition: 0.4s;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

ul li:hover a {
  padding-left: 50px;
  background: #2dce89;
}

ul .icon {
  margin-right: 20px;
}
</style>
