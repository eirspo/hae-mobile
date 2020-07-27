<template>
  <div>
    <x-button @click.native="encrypt('王小明')">base64加密：王小明</x-button>
    <p>加密结果：{{afterEncryptStr}}</p>
    <x-button @click.native="decrypt">base64解密：王小明</x-button>
    <p>解密结果：{{beforeEncryptStr}}</p>
  </div>
</template>
<script>
import {XButton} from 'hae'
export default {
  data () {
    return {
      afterEncryptStr: '',
      beforeEncryptStr: ''
    }
  },
  components: {
    XButton
  },
  methods: {
    encrypt(str) {
      this.afterEncryptStr = hae.encrypt('王小明')
    },
    decrypt(data) {
      this.beforeEncryptStr = hae.decrypt(this.afterEncryptStr)
    }
  }
}
</script>