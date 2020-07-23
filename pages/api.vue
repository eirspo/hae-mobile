<template>
  <div>
    <accordion :type="type" :accordionList="accordionList"></accordion>
  </div>
</template>
<script>
import {Accordion} from 'hae'
export default {
  components: {
    Accordion
  },
  data () {
    return {
      type:'list',
      accordionList:[
        {
          title:'网络请求',
          content:[{
            title: 'haerequest',
            path: '/apis/request'
          },
          {
            title: 'hae.uploadFile',
            path: '/apis/upload'
          }]
        },
        {
          title:'界面交互',
          content:[
          {
            title: 'toast',
            path: '/apis/toast'
          },
          {
            title: 'loading',
            path: '/apis/loading'
          },
          {
            title: 'modal',
            path: '/apis/modal'
          }]
        },
        {
          title:'本地存储',
          content:[
          {
            title: 'localStorage',
            path: '/apis/localStorage'
          },
          {
            title: 'sessionStorage',
            path: '/apis/sessionStorage'
          }]
        }
      ]
    }
  }
}
</script>
<style lang="less">
  
</style>