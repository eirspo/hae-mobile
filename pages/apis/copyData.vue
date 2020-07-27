<template>
  <div>
    <x-button @click.native="copy($event,'王小明')">复制：王小明</x-button>
    <x-button @click.native="copy($event,'朱小明')">复制：朱小明</x-button>
  </div>
</template>
<script>
import {XButton} from 'hae'
export default {
  components: {
    XButton
  },
  methods: {
    copy(e, data) {
      hae.copyData(e.target, data)
    }
  }
}
</script>