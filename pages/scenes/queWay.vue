<template>
  <div class="container">
    <x-header style="background-color:#108ee9;">密保验证</x-header>
    <div v-if="!isOk" class="main-content">
      <x-input type="text" title="密保问题" value="我最喜欢的食物是？" readonly></x-input>
      <x-input type="text" title="答案" placeholder="请输入答案"></x-input>
      <div class="btn-wrapper">
        <x-button @click.native="confirm" type="primary">确认</x-button>
      </div>
    </div>
    <div v-else class="main-content">
      <x-input type="password" title="密码"></x-input>
      <x-input type="password" title="确认密码"></x-input>
      <div class="btn-wrapper">
        <x-button @click.native="reset" type="primary">立即重置</x-button>
      </div>
    </div>
  </div>
</template>
<script>
import { XHeader } from "hae";
import { XInput } from "hae";
import { XButton } from "hae";
export default {
  data() {
    return {
      isOk: false
    };
  },
  components: {
    XHeader,
    XInput,
    XButton,
  },
  methods: {
    confirm() {
      hae.showLoading();
      setTimeout(() => {
        hae.hideLoading();
        hae.toast({
          title: '验证成功'
        });
        setTimeout(() => {
          this.isOk = true;
        }, 120);
      }, 1200);
    },
    reset() {
      hae.showLoading();
      setTimeout(() => {
        hae.hideLoading();
        hae.toast({
          title: '重置成功'
        });
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
.btn-wrapper {
  padding: 15px;
}
</style>