<template>
  <div>
    <accordion :mode="mode" :showIndex="showIndex" :type="type" :accordionList="accordionList"></accordion>
    <accordion :type="type2" :accordionList="accordionList2"></accordion>
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
      showIndex: [0],
      type:'list',
      mode: 'accordion',
      accordionList:[
        {
          title:'列表模式',
          content:[
            {
              title: 'go Home',
              path: '/'
            },
            {
              title: 'go Home',
              path: '/'
            }
          ]
        },
        {
          title:'列表模式',
          content:[
            {
              title: 'go Home',
              path: '/'
            },
            {
              title: 'go Home',
              path: '/'
            }
          ]
        }
      ],
      type2:'string',
      accordionList2:[
        {
          title:'文字模式',
          content:'展示的放大看脸色疯了'
        }
      ]
    }
  }
}
</script>
<style lang="less">
  
</style>