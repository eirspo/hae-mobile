<template>
  <div class="range-wrapper">
    <div class="show-item">百分比：{{selectedRange}}</div>
    <range-area :type="type" @get-range="getRange"></range-area>
    <div class="show-item">数值：{{selectedRange2}}</div>
    <range-area :range="range" :type="type2" @get-range="getRange2"></range-area>
  </div>
</template>
<script>
import { RangeArea } from 'hae'
export default {
  data () {
    return {
      type: 'percent',
      type2: 'value',
      range: [0, 200],
      selectedRange: [],
      selectedRange2: []
    }
  },
  methods: {
    getRange (res) {
      // res:{type:String,value:Array} ，type为value或percent
      this.selectedRange = res.value;
    },
    getRange2 (res) {
      // res:{type:String,value:Array} ，type为value或percent
      this.selectedRange2 = res.value;
    }
  },
  components: {
    RangeArea
  }
}
</script>
<style lang="less">
  .show-item {
    padding:20px;
  }
</style>