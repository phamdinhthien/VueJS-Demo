<template>
  <table-view :heroes="gridData" :columns="gridColumns" :filter-key="searchQuery"></table-view>
</template>

<script>
import TableView from "./TableView.vue";
export default {
  name: "test-table-view",
  data() {
    return {
      searchQuery: "",
      gridColumns: ["name", "power"],
      gridData: [
        { name: "Chuck Norris", power: Infinity },
        { name: "Bruce Lee", power: 9000 },
        { name: "Jackie Chan", power: 7000 },
        { name: "Jet Li", power: 8000 }
      ]
    };
  },
  components: {
      TableView
  }
};
</script>

<style scoped>
</style>