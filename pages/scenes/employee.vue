<template>
  <div class="container">
    <x-header style="background-color:#108ee9;">员工考核</x-header>
    <div class="main-content">
      <cell title="迟到次数" value="1"></cell>
      <cell title="月度工作完成" value="95%"></cell>
      <cell title="完成质量" value="高"></cell>
      <cell title="同事评价" value="好"></cell>
      <x-input title="绩效奖金比例" :max="150" v-model="value" placeholder="请输入:50~150"></x-input>
      <div class="button-wrapper">
        <x-button @click.native="submitForm" type="primary">提交</x-button>
      </div>
    </div>
  </div>
</template>
<script>
import { XHeader } from "hae";
import { Cell } from "hae";
import { XInput } from "hae";
import { XButton } from "hae";
export default {
  data() {
    return {
      value: "",
    };
  },
  components: {
    XHeader,
    Cell,
    XInput,
    XButton,
  },
  methods: {
    submitForm() {
      if(isNaN(this.value) || this.value > 150 || this.value < 50) {
        hae.toast({
          title:'请输入50~150之间的数字'
        });
        return;
      }
      hae.showLoading('提交中');
      setTimeout(() => {
        hae.hideLoading();
        hae.toast({
          title:'提交成功'
        });
      }, 2000);
    },
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