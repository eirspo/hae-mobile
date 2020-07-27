<template>
  <div>
    <x-button @click.native="showPicker">选择日期</x-button>
  </div>
</template>
<script>
import {XButton} from 'hae'
export default {
  components: {
    XButton
  },
  methods: {
    showPicker () {
      hae.pickerDate({
        title: '日期',
        onConfirm: res => {
          console.log(res)
        },
        onHide: () => {
          console.log('onHide')
        }
      })
    }
  }
}
</script>