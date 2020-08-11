<template>
  <div class="container">
    <x-header style="background-color:#108ee9;">登录</x-header>
    <div class="main-content">
        <x-input type="text" title="用户名"></x-input>
        <x-input type="password" title="密码"></x-input>
      <div class="btn-wrapper">
        <x-button @click.native="login" type="primary">登录</x-button>
      </div>
      <div class="operate-wrapper">
        <router-link class="link register" to="/scenes/register">去注册</router-link>
        <router-link class="link forget" to="/scenes/forget">忘记密码？</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { XHeader } from "hae";
import { XInput } from "hae";
import { XButton } from "hae";
import { Group } from "hae";
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
    Group,
  },
  methods: {
    login () {
      hae.showLoading('登录中');
      setTimeout(() => {
        hae.hideLoading();
        hae.toast({
          title: '登录成功'
        });
      }, 1200);
    }
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
  align-items:center;
  justify-content: space-between;
}
.link {
  color: #333333;
  font-size: 14px;
}
</style>