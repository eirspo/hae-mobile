<template>
  <div class="container">
    <x-header style="background-color:#108ee9;">注册</x-header>
    <div class="main-content">
      <x-input type="text" title="用户名"></x-input>
      <x-input type="password" title="密码"></x-input>
      <x-input type="password" title="确认密码"></x-input>
      <x-input type="text" title="手机号" :max="11"></x-input>
      <x-input title="验证码" class="weui-vcode">
        <x-button
          :disabled="isDisabled"
          @click.native="sendCode"
          slot="right"
          type="primary"
          mini
        >{{sendText}}</x-button>
      </x-input>
      <popup-picker
        title="密保问题"
        :data="question"
        placeholder="请选择"
        v-model="que"
      ></popup-picker>
      <x-input type="text" title="密保答案"></x-input>
      <div class="btn-wrapper">
        <x-button @click.native="register" type="primary">立即注册</x-button>
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
      isDisabled: false,
      sendText: "发送",
      totalTime: 60,
      waitTime: 0,
      interval: "",
      question: [['我的昵称？','我出生的城市？','我最喜欢的食物？']],
      que:[]
    };
  },
  components: {
    XHeader,
    XInput,
    XButton,
    Group,
    PopupPicker
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
    register() {
      hae.showLoading("注册中");
      setTimeout(() => {
        hae.hideLoading();
        hae.toast({
          title: "注册成功",
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