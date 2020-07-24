<template>
  <div>
    <x-button @click.native="showActionsheet">一般</x-button>
    <x-button @click.native="showActionsheet1">点击mask不关闭</x-button>
    <x-button @click.native="showActionsheet2">Android模式</x-button>
    <x-button @click.native="showActionsheet3">html嵌入模式</x-button>
    <x-button @click.native="showActionsheet4">不显示cancel</x-button>
  </div>
</template>
<script>
import {XButton} from 'hae'
export default {
  components: {
    XButton
  },
  methods: {
    showActionsheet () {
      hae.showActionsheet({
        cancelText: 'cancel',
        menus:['打篮球','打羽毛球'],
        onMenuClick: res => {
          
        }
      })
    },
    showActionsheet1 () {
      hae.showActionsheet({
        menus:['钓鱼','旅游'],
        closeOnClickMask: false,
        onMenuClick: res => {
          
        }
      })
    },
    showActionsheet2 () {
      hae.showActionsheet({
        menus:['打篮球','打羽毛球'],
        theme:'android',
        onMenuClick: res => {
          
        }
      })
    },
    showActionsheet3 () {
      hae.showActionsheet({
        menus:[{
          label:'<p style="color:red;">打篮球</p>'
        },
        '<p style="color:#108ee9;">踢足球</p>',
        {
          label: '禁用',
          type: 'disabled'
        }
        ],
        onMenuClick: res => {
          
        }
      })
    },
    showActionsheet4 () {
      hae.showActionsheet({
        showCancel: false,
        menus:[{
          label:'<p style="color:red;">打篮球</p>'
        },
        '<p style="color:#108ee9;">踢足球</p>',
        {
          label: '禁用',
          type: 'disabled'
        }
        ],
        onMenuClick: res => {
          
        }
      })
    }
  }
}
</script>