<template>
  <div class="iconfont-demo">
    <grid :cols="cols" :show-lr-borders="false" :show-vertical-dividers="true">
      <grid-item>
        <div slot="label">
          <icon name="close"></icon>
          <p>close</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="component"></icon>
          <p>component</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="more"></icon>
          <p>more</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="scene"></icon>
          <p>scene</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="interface"></icon>
          <p>interface</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="notice"></icon>
          <p>notice</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="checking"></icon>
          <p>checking</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="check-fail"></icon>
          <p>check-fail</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="check-succ"></icon>
          <p>check-succ</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="img"></icon>
          <p>img</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="file"></icon>
          <p>file</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="task-finshed"></icon>
          <p>task-finshed</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="task-all"></icon>
          <p>task-all</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="refresh"></icon>
          <p>refresh</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="notice-bell"></icon>
          <p>notice-bell</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="pc"></icon>
          <p>pc</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="menu"></icon>
          <p>menu</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="user"></icon>
          <p>user</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="chart"></icon>
          <p>chart</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="search"></icon>
          <p>search</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="check fill"></icon>
          <p>check fill</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="info fill"></icon>
          <p>info fill</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="warning"></icon>
          <p>warning</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="arrow-down"></icon>
          <p>arrow-down</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="arrow-right"></icon>
          <p>arrow-right</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="eye"></icon>
          <p>eye</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="message"></icon>
          <p>message</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="message dot"></icon>
          <p>message dot</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="clocker"></icon>
          <p>clocker</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="order"></icon>
          <p>order</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="edit"></icon>
          <p>edit</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="share"></icon>
          <p>share</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="setting"></icon>
          <p>setting</p>
        </div>
      </grid-item>
      <grid-item>
        <div slot="label">
          <icon name="check"></icon>
          <p>check</p>
        </div>
      </grid-item>
    </grid>
  </div>
</template>
<script>
  import {Grid} from 'hae'
  import {GridItem} from 'hae'
  import {Icon} from 'hae'
  export default {
    components: {
      Icon,
      Grid,
      GridItem
    },
    data () {
      return {
        cols: 3
      }
    }
  }

</script>
<style lang="less">
  .iconfont-demo .iconfont {
    font-size: 50px
  }

</style>
