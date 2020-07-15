<template>
  <tree-item class="item" :item="treeData"></tree-item>
</template>

<script>
import TreeItem from "./TreeView.vue";

export default {
  name: "test-tree-view",
  data() {
    return {
      treeData: {
        name: "My Tree",
        children: [
          { name: "hello" },
          { name: "wat" },
          {
            name: "child folder",
            children: [
              {
                name: "child folder",
                children: [{ name: "hello" }, { name: "wat" }]
              },
              { name: "hello" },
              { name: "wat" },
              {
                name: "child folder",
                children: [{ name: "hello" }, { name: "wat" }]
              }
            ]
          }
        ]
      }
    };
  },
  components: {
    TreeItem
  }
};
</script>

<style scoped>
</style>