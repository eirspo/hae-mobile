<template>
  <div>
    <div v-for="src in list" style="text-align:center;">
      <span style="font-size:20px;">Loading</span>
      <x-img :src="src" :webp-src="`${src}`" @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
    </div>
  </div>
</template>

<script>
import { XImg } from 'hae'
export default {
  components: {
    XImg
  },
  methods: {
    success (src, ele) {
      console.log('success load', src)
      const span = ele.parentNode.querySelector('span')
      ele.parentNode.removeChild(span)
    },
    error (src, ele, msg) {
      console.log('error load', msg, src)
      const span = ele.parentNode.querySelector('span')
      span.innerText = 'load error'
    }
  },
  data () {
    return {
      list: [
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3008142408,2229729459&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595343953957&di=0e82d62f2608ef7ce0b4ec9eb02f0441&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F52%2F52%2F01200000169026136208529565374.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595343953957&di=f78905622a2a9a9aa55f6107033c3894&imgtype=0&src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0704%2Fe53c868ee9e8e7b28c424b56afe2066d.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595343953956&di=44aad6d000beb98ecd956f6397476a7f&imgtype=0&src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0829%2F372edfeb74c3119b666237bd4af92be5.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595343953955&di=b14a590fa4f9d6f9668727c01ae045bc&imgtype=0&src=http%3A%2F%2Ffile.digitaling.com%2FeImg%2Fuimages%2F20150824%2F1440412608821067.jpg'  
      ]
    }
  }
}
</script>

<style>
.ximg-demo {
  width: 100%;
  height: auto;
}
.ximg-error {
  background-color: yellow;
}
.ximg-error:after {
  content: '加载失败';
  color: red;
}
</style>