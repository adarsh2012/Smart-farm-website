<template>
  <div>
    <b-card class="text-center card-color" align="center">
      <template v-slot:header>
        <b-nav card-header pills>
          <b-nav-item disabled>{{ CardName }}</b-nav-item>
          <b-nav-item
            :active="navstate[0].state"
            v-on:click="changeTo(navstate[0].name)"
            >Data</b-nav-item
          >
          <b-nav-item
            :active="navstate[1].state"
            v-on:click="changeTo(navstate[1].name)"
            >Visual</b-nav-item
          >
        </b-nav>
      </template>
      <b-card-body v-if="this.navstate[0].state">
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
              <b-th> Data: </b-th>
              <b-td> 23 </b-td>
            </b-tr>
            <b-tr>
              <b-th> Average (today): </b-th>
              <b-td> 23 </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-card-body>
      <b-card-body v-if="this.navstate[1].state">
        <Bar :width="300" :height="300" />
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import Bar from "./Chart/IBar";
export default {
  name: "DataCard",
  props: ["CardName"],
  components: { Bar },
  data() {
    return {
      navstate: [
        {
          name: "Data",
          state: true,
          htmlData: "<h1> asdsa </h1> <h2> shdah </h2>"
        },
        {
          name: "Graph",
          state: false,
          htmlData: "<h1> dadas </h1> <h2> shdadsdah </h2>"
        }
      ]
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
    }
  }
};
</script>

<style scoped>
.card-color {
  background-color: #374e5880;
}
</style>
