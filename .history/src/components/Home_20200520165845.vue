<template>
  <div class="container">
    <view-box>
      <router-view />
      <router-link to="/index">to index</router-link>
      <tabbar>
        <tabbar-item>
          <span slot="label">Wechat</span>
        </tabbar-item>
        <tabbar-item show-dot>
          <span slot="label">Message</span>
        </tabbar-item>
        <tabbar-item selected link="/component/demo">
          <span slot="label">Explore</span>
        </tabbar-item>
        <tabbar-item badge="2">
          <span slot="label">News</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>
<script>
import { ViewBox, Tabbar, TabbarItem } from "vux";

export default {
  data() {
    return {};
  },
  components: {
    Tabbar,
    TabbarItem
  }
};
</script>
<style lang="stylus" scoped>

</style>