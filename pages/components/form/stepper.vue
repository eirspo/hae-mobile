<template>
  <div>
    <group title="Default">
      <x-number name="Quantity" title="Quantity"></x-number>
    </group>

    <group title="listen">
      <x-number title="Quantity" v-model="changeValue" :min="minVal" @on-change="change"></x-number>
    </group>

    <group title="set width=100px">
      <x-number title="Quantity" width="100px"></x-number>
    </group>

    <group title="round style">
      <x-number title="Quantity" v-model="roundValue" button-style="round" :min="minVal" :max="5"></x-number>
    </group>

    <group title="set step=0.5">
      <x-number title="Quantity" :step="0.5"></x-number>
    </group>

    <group title="set value=1, min=-5 and max=8">
      <x-number title="Quantity" :min="-5" :max="maxVal" :value="1"></x-number>
    </group>

    <group title="fillable = true">
      <x-number :value="10" title="Quantity" fillable></x-number>
    </group>

  </div>
</template>

<script>
import { Group } from 'hae'
import { XNumber } from 'hae'
import { XSwitch } from 'hae'
import { Divider } from 'hae'

export default {
  components: {
    XNumber,
    Group,
    XSwitch,
    Divider
  },
  data () {
    return {
      changeValue: 0,
      roundValue: 0,
      minVal:0,
      maxVal:8
    }
  },
  methods: {
    change (val) {
      console.log('change', val)
    }
  }
}
</script>