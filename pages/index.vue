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
          title:'布局',
          content:[{
            title: 'flex',
            path: '/components/flex'
          },
          {
            title: 'grid',
            path: '/components/grid'
          }
          ]
        },
        {
          title: '表单',
          content:[
            {
              title: 'input',
              path: '/form/input'
            },
            {
              title: 'textarea',
              path: '/form/textarea'
            },
            {
              title: 'button',
              path: '/form/button'
            },
            {
              title: 'checker',
              path: '/form/checker'
            },
            {
              title: 'picker',
              path: '/form/picker'
            },
            {
              title: 'date-picker',
              path: '/form/date-picker'
            },
            {
              title: 'image-picker',
              path: '/form/image-picker'
            },
            {
              title: 'searchbar',
              path: '/form/searchbar'
            },
            {
              title: 'stepper',
              path: '/form/stepper'
            },
            {
              title: 'switch',
              path: '/form/switch'
            },
            {
              title: 'steps',
              path: '/form/steps'
            },
            {
              title: 'progress',
              path: '/form/progress'
            },
            {
              title: 'rate',
              path: '/form/rate'
            }
          ]
        },
        {
          title:'操作反馈',
          content:[
            {
              title: 'modal',
              path: '/feedback/modal'
            },
            {
              title: 'toast',
              path: '/feedback/toast'
            },
            {
              title: 'loading',
              path: '/feedback/loading'
            },
            {
              title: 'popup',
              path: '/feedback/popup'
            },
            {
              title: 'actionsheet',
              path: '/feedback/actionsheet'
            },
            {
              title: 'pull-refresh',
              path: '/feedback/pull-refresh'
            },
            {
              title: 'swiperaction',
              path: '/feedback/swiperaction'
            },
            {
              title: 'imgpreview',
              path: '/feedback/imgpreview'
            },
            {
              title: 'calendar',
              path: '/feedback/calendar'
            }
          ]
        },
        {
          title:'数据录入',
          content:[
            {
              title: 'slider',
              path: '/data/slider'
            },
            {
              title: 'range',
              path: '/data/range'
            }
          ]
        },
        {
          title:'数据展示',
          content:[
            {
              title: 'accordion',
              path: '/view/accordion'
            },
            {
              title: 'card',
              path: '/view/card'
            },
            {
              title: 'carsousel',
              path: '/view/carsousel'
            },
            {
              title: 'table',
              path: '/view/table'
            },
            {
              title: 'tag',
              path: '/view/tag'
            },
            {
              title: 'list',
              path: '/view/list'
            },
            {
              title: 'lazyload',
              path: '/feedback/lazyload'
            }
          ]
        },
        {
          title:'导航',
          content:[
            {
              title: 'tab',
              path: '/navigation/tab'
            },
            {
              title: 'tabbar',
              path: '/navigation/tabbar'
            },
            {
              title: 'header',
              path: '/navigation/header'
            },
            {
              title: 'menu',
              path: '/navigation/menu'
            },
            {
              title: 'pagination',
              path: '/navigation/pagination'
            }
          ]
        },
        {
          title:'辅助',
          content:[
            {
              title: 'badge',
              path: '/navigation/badge'
            },
            {
              title: 'popover',
              path: '/navigation/popover'
            },
            {
              title: 'icon',
              path: '/navigation/icon'
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