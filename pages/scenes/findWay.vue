<template>
  <div class="container">
    <x-header style="background-color:#108ee9;">找回方式</x-header>
    <div class="main-content">
      <list :list="wayList"></list>
    </div>
  </div>
</template>
<script>
import { XHeader } from "hae";
import { List } from "hae";
export default {
  data() {
    return {
      wayList: [
        {
          name: "密保问题",
          url: "/scenes/queWay",
        },
        {
          name: "注册手机",
          url: "/scenes/phoneWay",
        },
      ],
    };
  },
  components: {
    XHeader,
    List,
  },
  methods: {
    next() {
      hae.showLoading();
      setTimeout(() => {
        hae.hideLoading();
        this.$router.push("/scenes/findWay");
      }, 1200);
    },
  },
  created() {
    this.waitTime = this.totalTime;
  },
};
</script>
<style lang="css" scoped>
.main-content {
  background-color: #ffffff;
  height: calc(100vh - 96px);
  overflow: auto;
}
</style>