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
        }
      ]
    }
  }
}
</script>
<style lang="less">
  
</style>