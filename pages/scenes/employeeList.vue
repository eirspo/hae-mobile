<template>
  <div class="container">
    <x-header style="background-color:#108ee9;">员工列表</x-header>
    <div class="main-content">
      <list url="/scenes/employee" type="text" :list="list"></list>
    </div>
  </div>
</template>
<script>
import { XHeader } from "hae";
import { List } from "hae";
export default {
  data() {
    return {
      list: [{
        name: "王小明"
      }, {
        name: "张三"
      },{
        name: "李四"
      }],
    };
  },
  components: {
    XHeader,
    List,
  },
  methods: {},
};
</script>
<style lang="css" scoped>
.main-content {
  background-color: #ffffff;
}
</style>