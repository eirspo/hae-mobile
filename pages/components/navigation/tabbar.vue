<template>
  <div>
    <tabbar>
      <tabbar-item link="/">
        <span class="iconfont icon-component" slot="icon" style="position:relative;top: -2px;"></span>
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot link="/">
        <span class="iconfont icon-component" slot="icon" style="position:relative;top: -2px;"></span>
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected link="/">
        <span class="iconfont icon-component" slot="icon" style="position:relative;top: -2px;"></span>
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/">
        <span class="iconfont icon-component" slot="icon" style="position:relative;top: -2px;"></span>
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar } from 'hae'
import { TabbarItem } from 'hae'
import { Group } from 'hae'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group
  },
  computed: {
    ...mapState({
      route: state => state.route,
      path: state => state.route.path,
      deviceready: state => state.app.deviceready
    })
  },
  mounted() {
    console.log(this.$store);
    console.log(this.$router)
  }
}
</script>