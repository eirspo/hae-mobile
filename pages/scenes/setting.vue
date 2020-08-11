<template>
  <div class="container">
    <x-header style="background-color:#108ee9;">
      设置
    </x-header>
    <div class="setting-wrapper">
      <group>
        <x-switch title="开启通知" v-model="notice"></x-switch>
      </group>
      <list :list="settingList" @click-item="triggerAction"></list>
    </div>
  </div>
</template>
<script>
import { XHeader } from "hae";
import { List } from "hae";
import {XSwitch} from "hae";
import {Group} from "hae";
export default {
  data() {
    return {
      notice: true,
      settingList: [
        {
          id: 1,
          name: '检查更新'
        }
      ]
    };
  },
  methods: {
    triggerAction (obj) {
      if(obj.id === 1) {
        hae.showLoading('正在检查更新');
        setTimeout(() => {
          hae.hideLoading();
          hae.toast({
            title: '已是最新版本'
          })
        }, 3000);
      } 
    }
  },
  components: {
    XHeader,
    XSwitch,
    Group,
    List
  },
};
</script>
<style lang="css" scoped>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .setting-wrapper {
    position: relative;
    background-color: #FFFFFF;
    top: -0.77em;
  }
</style>