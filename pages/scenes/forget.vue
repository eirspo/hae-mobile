<template>
  <div class="container">
    <x-header style="background-color:#108ee9;">找回密码</x-header>
    <div class="main-content">
      <x-input type="text" title="用户名"></x-input>
      <div class="btn-wrapper">
        <x-button @click.native="next" type="primary">下一步</x-button>
      </div>
    </div>
  </div>
</template>
<script>
import { XHeader } from "hae";
import { XInput } from "hae";
import { XButton } from "hae";
import { Group } from "hae";
import { PopupPicker } from "hae";
export default {
  data() {
    return {
      value: "",
    };
  },
  components: {
    XHeader,
    XInput,
    XButton,
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
  padding-top: 20px;
}
.btn-wrapper {
  padding: 15px;
}
.operate-wrapper {
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.link {
  color: #333333;
  font-size: 14px;
}
</style>