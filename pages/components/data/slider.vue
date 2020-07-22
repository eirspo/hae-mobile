<template>
  <div>
    <group title="default range">
      <cell title="Default" :inline-desc="'value: '+data1" primary="content">
        <range v-model="data1" @on-change="onChange"></range>
      </cell>
      <cell title="allow decimals" :inline-desc="'value is: '+data2" primary="content">
        <range v-model="data2" decimal></range>
      </cell>
      <cell title="value=20" :inline-desc="'value is: '+data3" primary="content">
        <range v-model="data3"></range>
      </cell>
    </group>
    <group title="min and max">
      <cell title="min=8" :inline-desc="'value is: '+data4" primary="content">
        <range v-model="data4" :min="8"></range>
      </cell>
      <cell title="max=88" :inline-desc="'value is: '+data5" primary="content">
        <range v-model="data5" :max="88"></range>
      </cell>
      <cell title="min and max" :inline-desc="'value is: '+data6" primary="content">
        <range v-model="data6" :min="7" :max="77"></range>
      </cell>
      <cell title="change min and max" primary="content">
        <range v-model="dynamiValue" :min="min" :max="max" :step="step"></range>
      </cell>
      <cell title="current value" :value="dynamiValue + ''"></cell>
    </group>
  </div>
</template>

<script>
import { XButton } from 'hae'
import { Range } from 'hae'
import { Group } from 'hae'
import { GroupTitle } from 'hae'
import { Cell } from 'hae'

export default {
  components: {
    Range,
    Group,
    GroupTitle,
    Cell,
    XButton
  },
  mounted () {
    setTimeout(() => {
      this.showData13 = true
    }, 2000)
  },
  data () {
    return {
      data1: 0,
      data2: 0,
      data3: 20,
      data4: 18,
      data5: 28,
      data6: 37,
      showData13: false,
      min: 0,
      max: 100,
      step: 1,
      dynamiValue: 0
    }
  },
  methods: {
    onChange (val) {
      console.log('change', val)
    },
    update () {
      this.min = Math.floor(Math.random() * 30)
      this.max = Math.floor(50 + Math.random() * 100)
      this.step = 1 + Math.floor(Math.random() * 10)
    },
    onTouchstart (e) {
      console.log('touchstart')
    },
    onTouchend (e) {
      console.log('touchend')
    }
  }
}
</script>