<template>
  <div id="app">
    <view-box ref="viewBox">
      <transition mode="out-in">
        <router-view ></router-view>
      </transition>
      <tabbar>
        <tabbar-item link="/">
          <span slot="label">Home</span>
        </tabbar-item>
        <tabbar-item link="/Index">
          <span slot="label">Index</span>
        </tabbar-item>
        <tabbar-item>
          <span slot="label">Explore</span>
        </tabbar-item>
        <tabbar-item>
          <span slot="label">News</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
import { ViewBox, Tabbar, TabbarItem } from "vux";

export default {
  name: "app",
  components: {
    Tabbar,
    TabbarItem,
    ViewBox
  },
  methods: {
    itemClick(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

body {
  background-color: #fbf9fe;
}
html,
body,
div#app {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
</style>
