<template>
  <div>
    <group-title>2 列</group-title>
    <grid>
      <grid-item label="Grid" v-for="i in 2" :key="i">
        <img slot="icon" src="../../../static/grid_icon.png">
      </grid-item>
    </grid>
    <group-title>3 列</group-title>
    <grid :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item link="/component/cell" label="Go to Cell">
        <img slot="icon" src="../../../static/grid_icon.png">
      </grid-item>
      <grid-item :link="{ path: '/component/cell'}" label="Go to Cell">
        <img slot="icon" src="../../../static/grid_icon.png">
      </grid-item>
      <grid-item link="/component/cell" @on-item-click="onItemClick">
        <img slot="icon" src="../../../static/grid_icon.png">
        <span slot="label">Go to Cell</span>
      </grid-item>
    </grid>
    <group-title>4 列</group-title>
    <grid :show-lr-borders="false">
      <grid-item label="Grid')" v-for="i in 4" :key="i">
        <img slot="icon" src="../../../static/grid_icon.png">
      </grid-item>
    </grid>
    <group-title> 自定义内容 </group-title>
    <grid :show-vertical-dividers="false">
      <grid-item v-for="i in 5" :key="i">
        <span class="grid-center">{{i}}</span>
      </grid-item>
    </grid>
    <group-title>自定义列</group-title>
    <grid :cols="3" :show-lr-borders="false">
      <grid-item v-for="i in 6" :key="i">
        <span class="grid-center">{{i}}</span>
      </grid-item>
    </grid>
  </div>
</template>

<script>
import { Grid } from 'hae'
import { GridItem } from 'hae'
import { GroupTitle } from 'hae'

export default {
  components: {
    Grid,
    GridItem,
    GroupTitle
  },
  methods: {
    onItemClick () {
      console.log('on item click')
    }
  }
}
</script>

<style scoped>
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
.weui-grids {
  background-color: #fff;
}
</style>