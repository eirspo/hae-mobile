<template>
  <div>
    <group title="Normal Usage">
      <cell title="set default score = 5" inline-desc="total 5 stars if not specified">
        <rater v-model="data3"></rater>
      </cell>
      <cell title="change color">
        <rater v-model="data1" :max="6" active-color="#04BE02"></rater>
      </cell>
    </group>

  </div>
</template>

<script>
import { Rater } from 'hae'
import { Group } from 'hae'
import { Cell } from 'hae'
import { Range } from 'hae'

export default {
  components: {
    Rater,
    Group,
    Cell,
    Range
  },
  data () {
    return {
      data1: '5'
    }
  }
}
</script>