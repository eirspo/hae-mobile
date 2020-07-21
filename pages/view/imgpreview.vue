<template>
  <div>
    <img class="previewer-demo-img" v-for="(item, index) in list" :src="item.src" width="100" @click="show(index)">
    <div v-transfer-dom>
      <previewer :list="list" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
    </div>
  </div>
</template>

<script>
import { Previewer } from 'hae'
import { TransferDom } from 'hae'

export default {
  directives: {
    TransferDom
  },
  components: {
    Previewer
  },
  methods: {
    logIndexChange (arg) {
      console.log(arg)
    },
    show (index) {
      this.$refs.previewer.show(index)
    }
  },
  data () {
    return {
      list: [{
        msrc: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2604393858,3139102507&fm=26&gp=0.jpg',
        src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2604393858,3139102507&fm=26&gp=0.jpg',
        w: 800,
        h: 400
      },
      {
        msrc: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2368728252,2747551000&fm=26&gp=0.jpg',
        src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2368728252,2747551000&fm=26&gp=0.jpg',
        w: 1200,
        h: 900
      }, {
        msrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595323594542&di=a998e8819e1124d7fdf226d090ed2f99&imgtype=0&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D2298937151%2C1955154616%26fm%3D214%26gp%3D0.jpg',
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595323594542&di=a998e8819e1124d7fdf226d090ed2f99&imgtype=0&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D2298937151%2C1955154616%26fm%3D214%26gp%3D0.jpg'
      }],
      options: {
        getThumbBoundsFn (index) {
          // find thumbnail element
          let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
          // get window scroll Y
          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          // optionally get horizontal scroll
          // get position of element relative to viewport
          let rect = thumbnail.getBoundingClientRect()
          // w = width
          return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
          // Good guide on how to get element coordinates:
          // http://javascript.info/tutorial/coordinates
        }
      }
    }
  }
}
</script>
