<template>
  <div class="container">
    <x-header style="background-color:#108ee9;">手机验证</x-header>
    <div v-if="!isOk" class="main-content">
      <x-input type="text" title="注册手机" value="135***4586" readonly></x-input>
      <x-input title="验证码" class="weui-vcode">
        <x-button
          :disabled="isDisabled"
          @click.native="sendCode"
          slot="right"
          type="primary"
          mini
        >{{sendText}}</x-button>
      </x-input>
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
      isOk: false,
       sendText: "发送",
      totalTime: 60,
      waitTime: 0,
      interval: "",
      isDisabled: false
    };
  },
  components: {
    XHeader,
    XInput,
    XButton,
  },
  methods: {
        sendCode() {
      if (this.waitTime != this.totalTime) {
        return;
      }
      hae.showLoading("发送中");
      setTimeout(() => {
        hae.hideLoading();
        hae.toast({
          title: "发送成功",
        });
        this.isDisabled = true;
        this.sendText = `${this.waitTime}s`;
        this.interval = setInterval(() => {
          if (this.waitTime <= 1) {
            this.isDisabled = false;
            this.sendText = "发送";
            clearInterval(this.interval);
            this.interval = "";
            this.waitTime = this.totalTime;
            return;
          }
          this.waitTime -= 1;
          this.sendText = `${this.waitTime}s`;
        }, 1000);
      }, 1200);
    },
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