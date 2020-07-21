<template>
  <div>
  <div class="vux-1px-t">
    
    <swipeout>

      <swipeout-item @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow">
        <div slot="right-menu">
          <swipeout-button @click.native="onButtonClick('fav')" type="primary">是的</swipeout-button>
          <swipeout-button @click.native="onButtonClick('delete')" type="warn">删除</swipeout-button>
        </div>
        <div slot="content" class="demo-content vux-1px-t">
        JavaScript is the best language
        </div>
      </swipeout-item>

      <swipeout-item :threshold=".5" underlay-color="#ccc">
        <div slot="right-menu">
          <swipeout-button @click.native="onButtonClick('fav')" background-color="#336DD6">收藏</swipeout-button>
          <swipeout-button @click.native="onButtonClick('delete')" background-color="#D23934">删除</swipeout-button>
        </div>
        <div slot="content" class="demo-content vux-1px-tb">
        threshold = 0.5
        </div>
      </swipeout-item>

      <swipeout-item :disabled="disabled" ref="swipeoutItem" :right-menu-width="210" :sensitivity="15">
        <div slot="right-menu">
          <swipeout-button @click.native="onButtonClick('fav')" type="primary" :width="70">收藏</swipeout-button>
          <swipeout-button @click.native="onButtonClick('delete')" type="warn" :width="70">删除</swipeout-button>
          <swipeout-button @click.native="onButtonClick('ignore')" type="default" :width="70">忽略</swipeout-button>
        </div>

        <div slot="left-menu">
          <swipeout-button @click.native="onButtonClick('fav')" type="primary">收藏</swipeout-button>
          <swipeout-button @click.native="onButtonClick('delete')" type="warn">删除</swipeout-button>
        </div>

        <div slot="content" class="demo-content vux-1px-b">

        now <span v-if="disabled">禁用</span>
        <span v-else="enabled">启用</span>
        </div>
      </swipeout-item>

    </swipeout>
  </div>

  </div>
</template>
<script>
import { GroupTitle } from 'hae'
import { Swipeout } from 'hae'
import { SwipeoutItem } from 'hae'
import { SwipeoutButton } from 'hae'
import { XButton } from 'hae'

export default {
  components: {
    GroupTitle,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    XButton
  },
  methods: {
    onButtonClick (type) {
      alert('on button click ' + type)
    },
    handleEvents (type) {
      console.log('event: ', type)
    }
  },
  data () {
    return {
      disabled: false
    }
  }
}
</script>

<style lang="less">
.demo-content {
  padding: 10px 10px;
}
</style>