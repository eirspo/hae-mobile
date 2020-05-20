<template>
  <div class="container">
    <router-view  <view class="weui-panel">
      <view class="weui-panel__hd">文字列表附来源</view>
      <view class="weui-panel__bd">
        <view class="weui-media-box weui-media-box_text">
          <view class="weui-media-box__title weui-media-box__title_in-text">标题一</view>
          <view class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</view>
          <view class="weui-media-box__info">
            <view class="weui-media-box__info__meta">文字来源</view>
            <view class="weui-media-box__info__meta">时间</view>
            <view class="weui-media-box__info__meta weui-media-box__info__meta_extra">其它信息</view>
          </view>
        </view>
      </view>
    </view>
     />
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
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vux";

export default {
    data() {
        return {

        }
    },
    components:{
        Tabbar,
        TabbarItem
    }
};
</script>