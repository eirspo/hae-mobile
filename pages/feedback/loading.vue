<template>
  <div>
    <group>
      <x-switch title="Toggle" v-model="show1" @on-change="show1change"></x-switch>
      <x-switch title="No loading text" v-model="show2" @on-change="show2change"></x-switch>
    </group>
    <div v-transfer-dom>
      <loading :show="show1" :text="text1"></loading>
    </div>
    <div v-transfer-dom>
      <loading :show="show2" text=""></loading>
    </div>
  </div>
</template>
<script>
import { Loading } from 'hae'
import { Group } from 'hae'
import { XSwitch } from 'hae'
import { XButton } from 'hae'
import { TransferDomDirective as TransferDom } from 'hae'

export default {
  directives: {
    TransferDom
  },
  components: {
    Loading,
    Group,
    XSwitch,
    XButton
  },
  data () {
    return {
      show1: false,
      show2: false,
      text1: 'Processing'
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  methods: {
    show1change (val) {
      if (val) {
        tick(0, (percent) => {
          if (percent === 100) {
            this.show1 = false
            return
          }
          this.text1 = `${percent}%`
        })
      }
    },
    show2change (val) {
      if (val) {
        tick(0, (percent) => {
          if (percent === 100) {
            this.show2 = false
            return
          }
        })
      }
    }
  }
}

function tick (i, cb) {
  setTimeout(function () {
    i++
    cb(i)
    if (i < 100) {
      tick(i, cb)
    }
  }, 10)
}
</script>