<template>
  <div>
    <img-picker :length="length"></img-picker>
  </div>
</template>
<script>
import { ImgPicker } from 'hae'
export default {
  components: {
    ImgPicker
  },
  data () {
    return {
      length: 4
    }
  }
}
</script>
<style lang="less">
  
</style>