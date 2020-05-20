<template>
  <div class="container">
    <view-box ref="viewBox">
      <router-link to="/index">to index</router-link>
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
    TabbarItem,
    ViewBox
  }
};
</script>
<style scoped>

</style>