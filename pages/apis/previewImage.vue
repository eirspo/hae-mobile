<template>
  <div>
    <x-button @click.native="previewImage">预览图片</x-button>
  </div>
</template>
<script>
import {XButton} from 'hae'
export default {
  components: {
    XButton
  },
  methods: {
    previewImage () {
      hae.previewImage({
        list: [
          {
            src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3462392350,62626007&fm=26&gp=0.jpg'
          },
          {
            src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595590176071&di=d613b5ac8bac7da6b8799b64a4dcd1d4&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F13%2F41%2F01300000201800122190411861466.jpg'
          }
        ]
      })
    }
  }
}
</script>