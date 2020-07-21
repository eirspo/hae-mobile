<template>
  <div>
    <group>
      <x-switch title="switch" v-model="value"></x-switch>
    </group>
  </div>
</template>

<script>
import { InlineXSwitch } from 'hae'
import { XSwitch } from 'hae'
import { Group } from 'hae'

export default {
  components: {
    InlineXSwitch,
    XSwitch,
    Group
  },
  data () {
    return {
      value: false
    }
  }
}
</script>