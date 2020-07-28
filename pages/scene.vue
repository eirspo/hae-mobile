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
          title:'流程审批',
          content:[{
            title: '请假申请',
            path: '/scenes/applyHolidy'
          },
          {
            title: '报销审批',
            path: '/scenes/applyReim'
          }
          ]
        },
        {
          title: '财务',
          content:[
            {
              title: '财务报表',
              path: '/scenes/report'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="less">
  
</style>