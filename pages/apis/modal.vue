<template>
  <div>
    <x-button @click.native="showModal">点击</x-button>
    <x-button @click.native="showModal2">不显示cancel</x-button>
    <x-button @click.native="showModal3">显示input</x-button>
    <x-button @click.native="showModal4">显示placeholder</x-button>
  </div>
</template>
<script>
import {XButton} from 'hae'
export default {
  components: {
    XButton
  },
  methods: {
    showModal () {
      hae.showModal({
        content:'go'
      });
    },
    showModal2 () {
      hae.showModal({
        content:'not show cancel',
        showCancel: false
      });
    },
    showModal3 () {
      hae.showModal({
        content: 'show input',
        showInput: true
      });
    },
    showModal4 () {
      hae.showModal({
        content: 'show placeholder',
        showInput: true,
        placeholder: '请输入内容'
      });
    }
  }
}
</script>