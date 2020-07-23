<template>
    <div style="height:100vh;background-color:#F7F7F7;">
    <drawer
    width="200px;"
    :show.sync="drawerVisibility"
    :show-mode="showModeValue"
    :placement="showPlacementValue"
    :drawer-style="{'background-color':'#35495e', width: '200px'}">
      <!-- main content -->
      <view-box ref="viewBox">
        <nuxt keep-alive/>
        <tabbar class="vux-demo-tabbar" icon-class="vux-center" v-show="!isTabbarDemo && isShowBar" slot="bottom">
          <tabbar-item :link="{path:'/'}" :selected="route.path === '/'">
            <span class="iconfont icon-component" slot="icon" style="position:relative;top: -2px;"></span>
            <span slot="label">组件</span>
          </tabbar-item>
          <tabbar-item :link="{path:'/api'}" :selected="route.path === '/api'">
            <span class="iconfont icon-interface" slot="icon" style="position:relative;top: -2px;"></span>
            <span slot="label">接口</span>
          </tabbar-item>
          <tabbar-item :link="{path:'/scene'}" :selected="route.path === '/scene'">
            <span class="iconfont icon-scene" slot="icon" style="position:relative;top: -2px;"></span>
            <span slot="label">场景</span>
          </tabbar-item>
          <tabbar-item :link="{path:'/more'}" :selected="route.path === '/more'">
            <span class="iconfont icon-more" slot="icon"></span>
            <span slot="label">更多</span>
          </tabbar-item>
        </tabbar>
      </view-box>
    </drawer>
  </div>
</template>

<script>
import { Radio } from 'hae'
import { Group } from 'hae'
import { Cell } from 'hae'
import { Badge } from 'hae'
import { Drawer } from 'hae'
import { Actionsheet } from 'hae'
import { ButtonTab } from 'hae'
import { ButtonTabItem } from 'hae'
import { ViewBox } from 'hae'
import { XHeader } from 'hae'
import { Tabbar } from 'hae'
import { TabbarItem } from 'hae'
import { Loading } from 'hae'
import { TransferDom } from 'hae'
import { mapState, mapActions } from 'vuex'

export default {
  directives: {
    TransferDom
  },
  components: {
    Radio,
    Group,
    Cell,
    Badge,
    Drawer,
    ButtonTab,
    ButtonTabItem,
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
    Loading,
    Actionsheet
  },
  methods: {

  },
  mounted () {
    this.handler = () => {
      if (this.path === '/demo') {
        this.box = document.querySelector('#demo_list_box')
        this.updateDemoPosition(this.box.scrollTop)
      }
    }
  },
  beforeDestroy () {
    this.box && this.box.removeEventListener('scroll', this.handler, false)
  },
  computed: {
    ...mapState({
      route: state => state.route,
      path: state => state.route.path
    }),
    isShowBar () {
      if (this.entryUrl.indexOf('hide-tab-bar') > -1) {
        return false
      }
      return true
    },
    isShowNav () {
      if (this.entryUrl.indexOf('hide-nav') > -1) {
        return false
      }
      return true
    },
    isTabbarDemo () {
      return /tabbar/.test(this.route.path)
    }
  },
  data () {
    return {
      isLoading: false,
      entryUrl: document.location.href,
      drawerVisibility: false,
      showModeValue: 'push',
      showPlacementValue: 'left'
    }
  },
  mounted() {

  }
}
</script>

<style lang="less">
body {
  background-color: #fbf9fe;
}
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

.demo-icon-22 {
  font-family: 'vux-demo';
  font-size: 22px;
  color: #888;
}
.weui-tabbar.vux-demo-tabbar {
  /** backdrop-filter: blur(10px);
  background-color: none;
  background: rgba(247, 247, 250, 0.5);**/
}
.vux-demo-tabbar .weui-bar__item_on .demo-icon-22 {
  color: #F70968;
}
.vux-demo-tabbar .weui-tabbar_item.weui-bar__item_on .vux-demo-tabbar-icon-home {
  color: rgb(53, 73, 94);
}
.demo-icon-22:before {
  content: attr(icon);
}
.vux-demo-tabbar-component {
  background-color: #F70968;
  color: #fff;
  border-radius: 7px;
  padding: 0 4px;
  line-height: 14px;
}
.weui-tabbar__icon + .weui-tabbar__label {
  margin-top: 0!important;
}
.vux-demo-header-box {
  z-index: 100;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}

@font-face {
  font-family: 'vux-demo';  /* project id 70323 */
  src: url('//at.alicdn.com/t/font_70323_wlronpvr565yiudi.eot');
  src: url('//at.alicdn.com/t/font_70323_wlronpvr565yiudi.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_70323_wlronpvr565yiudi.woff') format('woff'),
  url('//at.alicdn.com/t/font_70323_wlronpvr565yiudi.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_70323_wlronpvr565yiudi.svg#iconfont') format('svg');
}

.demo-icon {
  font-family: 'vux-demo';
  font-size: 20px;
  color: #108ee9;
}

.demo-icon-big {
  font-size: 28px;
}

.demo-icon:before {
  content: attr(icon);
}

.router-view {
  width: 100%;
  top: 46px;
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  top: 46px;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.menu-title {
  color: #888;
}
</style>
