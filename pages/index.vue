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
            path: '/components/layouts/flex'
          },
          {
            title: 'grid',
            path: '/components/layouts/grid'
          }
          ]
        },
        {
          title: '表单',
          content:[
            {
              title: 'input',
              path: '/components/form/input'
            },
            {
              title: 'textarea',
              path: '/components/form/textarea'
            },
            {
              title: 'button',
              path: '/components/form/button'
            },
            {
              title: 'checker',
              path: '/components/form/checker'
            },
            {
              title: 'picker',
              path: '/components/form/picker'
            },
            {
              title: 'date-picker',
              path: '/components/form/date-picker'
            },
            {
              title: 'image-picker',
              path: '/components/form/image-picker'
            },
            {
              title: 'searchbar',
              path: '/components/form/searchbar'
            },
            {
              title: 'stepper',
              path: '/components/form/stepper'
            },
            {
              title: 'switch',
              path: '/components/form/switch'
            },
            {
              title: 'steps',
              path: '/components/form/steps'
            },
            {
              title: 'progress',
              path: '/components/form/progress'
            },
            {
              title: 'rate',
              path: '/components/form/rate'
            },
            {
              title: 'calendar',
              path: '/components/form/calendar'
            }
          ]
        },
        {
          title:'操作反馈',
          content:[
            {
              title: 'modal',
              path: '/components/feedback/modal'
            },
            {
              title: 'toast',
              path: '/components/feedback/toast'
            },
            {
              title: 'loading',
              path: '/components/feedback/loading'
            },
            {
              title: 'popup',
              path: '/components/feedback/popup'
            },
            {
              title: 'actionsheet',
              path: '/components/feedback/actionsheet'
            },
            {
              title: 'pull-refresh',
              path: '/components/feedback/pull-refresh'
            },
            {
              title: 'swiperaction',
              path: '/components/feedback/swiperaction'
            }
          ]
        },
        {
          title:'数据录入',
          content:[
            {
              title: 'slider',
              path: '/components/data/slider'
            },
            {
              title: 'range',
              path: '/components/data/range'
            }
          ]
        },
        {
          title:'数据展示',
          content:[
            {
              title: 'accordion',
              path: '/components/view/accordion'
            },
            {
              title: 'card',
              path: '/components/view/card'
            },
            {
              title: 'carousel',
              path: '/components/view/carousel'
            },
            {
              title: 'table',
              path: '/components/view/table'
            },
            {
              title: 'tag',
              path: '/components/view/tag'
            },
            {
              title: 'list',
              path: '/components/view/list'
            },
            {
              title: 'lazyload',
              path: '/components/view/lazyload'
            },
            {
              title: 'imgpreview',
              path: '/components/view/imgpreview'
            }
          ]
        },
        {
          title:'导航',
          content:[
            {
              title: 'tab',
              path: '/components/navigation/tab'
            },
            {
              title: 'tabbar',
              path: '/components/navigation/tabbar'
            },
            {
              title: 'header',
              path: '/components/navigation/header'
            },
            {
              title: 'menu',
              path: '/components/navigation/menu'
            },
            {
              title: 'pagination',
              path: '/components/navigation/pagination'
            }
          ]
        },
        {
          title:'辅助',
          content:[
            {
              title: 'badge',
              path: '/components/tools/badge'
            },
            {
              title: 'popover',
              path: '/components/tools/popover'
            },
            {
              title: 'icon',
              path: '/components/tools/icon'
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