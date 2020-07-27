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
          },
          {
            title: 'actionsheet',
            path: '/apis/actionsheet'
          }]
        },
        {
          title:'图片',
          content:[
            {
              title: 'previewImage',
              path: '/apis/previewImage'
            }
          ]
        },
        {
          title:'工具',
          content:[
            {
            title: 'pickerDate',
            path: '/apis/pickerDate'
          },
          {
            title: 'encrypte',
            path: '/apis/encrypte'
          },
          {
            title: 'copyData',
            path: '/apis/copyData'
          }
          ]
        },
        {
          title:'本地存储',
          content:[
          {
            title: 'localStorage',
            path: '/apis/localStorage'
          }]
        }
      ]
    }
  }
}
</script>
<style lang="less">
  
</style>