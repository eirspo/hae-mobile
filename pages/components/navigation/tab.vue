        this.index01 = index
<template>
  <div>
    <tab>
      <tab-item selected @on-item-click="onItemClick">已发货</tab-item>
      <tab-item @on-item-click="onItemClick">未发货</tab-item>
      <tab-item @on-item-click="onItemClick">全部订单</tab-item>
    </tab>
    <br/>
    <br/>
    <tab bar-position="top">
      <tab-item selected @on-item-click="onItemClick">已发货</tab-item>
      <tab-item @on-item-click="onItemClick">未发货</tab-item>
      <tab-item @on-item-click="onItemClick">全部订单</tab-item>
    </tab>
    <br/>
    <br/>
    <divider>定义bar固定宽度</divider>
    <tab :line-width="1" custom-bar-width="60px">
      <tab-item selected>已发货</tab-item>
      <tab-item>未发货</tab-item>
      <tab-item>全部订单</tab-item>
    </tab>
    <br/>
    <br/>
    <divider>使用函数定义bar宽度</divider>
    <tab :line-width="1" :custom-bar-width="getBarWidth">
      <tab-item selected>AA</tab-item>
      <tab-item>AAAA</tab-item>
      <tab-item>AAAAAAA</tab-item>
    </tab>
    <br/>
    <br/>
    <br/>
    <divider>no animation</divider>
    <tab :animate="false">
      <tab-item>已发货</tab-item>
      <tab-item selected>未发货</tab-item>
      <tab-item>全部订单</tab-item>
    </tab>
    <br/>
    <br/>
    <br/>
    <divider>disabled</divider>
    <tab>
      <tab-item selected>A</tab-item>
      <tab-item>B</tab-item>
      <tab-item disabled>Disabled</tab-item>
    </tab>
    <br/>
    <br/>
    <br/>

    <divider>scroll</divider>
    <tab>
      <tab-item v-for="n in 8" :key="n" :selected="n===1">已发货{{ n }}</tab-item>
    </tab>
    <br/>
    <br/>
    <br/>
    <div>
       <tab :line-width=2 active-color='#fc378c' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" height="100px" :show-dots="false">
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="tab-swiper vux-center">{{item}} Container</div>
        </swiper-item>
      </swiper>
    </div>

    <br/>
    <div class="box">
      <x-button @click.native="index=0" :disabled="index === 0" type="primary">go to 0</x-button>
      <x-button @click.native="index=1" :disabled="index === 1" type="primary">go to 1</x-button>

      <x-button @click.native="addTab" :disabled="list2.length === 5" type="primary">Add tab item</x-button>
      <x-button @click.native="removeTab" :disabled="list2.length <= 2" type="primary">Remove tab item</x-button>
    </div>

    <br/>
    <br/>
    <tab :line-width="2">
      <tab-item :selected="demo3 === item" v-for="(item, index) in list3" :class="{'vux-1px-r': index===0}" @click="demo3 = item" :key="index">{{item}}</tab-item>
    </tab>
    <br/>
    <br/>
    <br/>
    <sticky scroll-box="vux_view_box_body" :check-sticky-support="false" :offset="46">
      <tab :line-width=1>
        <tab-item :selected="demo4 === item" v-for="(item, index) in list4" @click="demo4 = item" :key="index">{{item}}</tab-item>
      </tab>
    </sticky>
    <br v-for="i in 40">
  </div>
</template>

<i18n>
set bar-active-color:
  zh-CN: 设置bar颜色
</i18n>

<script>
import { Tab } from 'hae'
import { TabItem } from 'hae'
import { Sticky } from 'hae'
import { Divider } from 'hae'
import { XButton } from 'hae'
import { Swiper } from 'hae'
import { SwiperItem } from 'hae'
const list = () => ['精选', '美食', '电影', '酒店', '外卖']

export default {
  components: {
    Tab,
    TabItem,
    Sticky,
    Divider,
    XButton,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      index01: 0,
      list2: list(),
      demo2: '美食',
      list3: ['收到的消息', '发出的消息'],
      demo3: '收到的消息',
      list4: ['正在放映', '即将上映'],
      demo4: '即将上映',
      demoDisabled: 'A',
      index: 0,
      getBarWidth: function (index) {
        return (index + 1) * 22 + 'px'
      }
    }
  },
  methods: {
    switchTabItem (index) {
      console.log('on-before-index-change', index)
      this.$vux.loading.show({
        text: 'loading'
      })
      setTimeout(() => {
        this.$vux.loading.hide()
        this.index01 = index
      }, 1000)
    },
    onItemClick (index) {
      console.log('on item click:', index)
    },
    addTab () {
      if (this.list2.length < 5) {
        this.list2 = list().slice(0, this.list2.length + 1)
      }
    },
    removeTab () {
      if (this.list2.length > 1) {
        this.list2 = list().slice(0, this.list2.length - 1)
      }
    },
    next () {
      if (this.index === this.list2.length - 1) {
        this.index = 0
      } else {
        ++this.index
      }
    },
    prev () {
      if (this.index === 0) {
        this.index = this.list2.length - 1
      } else {
        --this.index
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '~hae/src/styles/1px.less';
@import '~hae/src/styles/center.less';

.box {
  padding: 15px;
}
.active-6-1 {
  color: rgb(252, 55, 140) !important;
  border-color: rgb(252, 55, 140) !important;
}
.active-6-2 {
  color: #04be02 !important;
  border-color: #04be02 !important;
}
.active-6-3 {
  color: rgb(55, 174, 252) !important;
  border-color: rgb(55, 174, 252) !important;
}
.tab-swiper {
  background-color: #fff;
  height: 100px;
}
</style>