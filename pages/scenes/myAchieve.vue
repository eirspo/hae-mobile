<template>
  <div class="container">
    <x-header style="background-color:#108ee9;">我的绩效</x-header>
    <div class="main-content">
      <cell title="迟到次数" value="0"></cell>
      <cell title="月度工作完成" value="98%"></cell>
      <cell title="完成质量" value="高"></cell>
      <cell title="同事评价" value="好"></cell>
      <cell title="绩效奖金" value="140"></cell>
    </div>
  </div>
</template>
<script>
import { XHeader } from "hae";
import { Cell } from "hae";
export default {
  data() {
    return {
      value: "",
    };
  },
  components: {
    XHeader,
    Cell
  },
  methods: {
  },
};
</script>
<style lang="css" scoped>
.main-content {
  background-color: #ffffff;
}
.button-wrapper {
  padding: 15px;
}
</style>