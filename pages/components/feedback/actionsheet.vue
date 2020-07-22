<template>
  <div>
    <group>
      <x-switch title="Basic Usage" v-model="show1"></x-switch>
      <x-switch title="Android Theme" v-model="show7"></x-switch>
      <x-switch title="Show cancel menu" v-model="show2"></x-switch>
      <x-switch title="Array menu" v-model="show5"></x-switch>
    </group>

    <group title="Prevent closing when clicking mask')">
      <x-switch title="Basic Usage" v-model="show4"></x-switch>
    </group>

    <group>
      <x-switch title="Menu as tips" v-model="show3"></x-switch>
      <x-switch title="Slot: header" v-model="show6"></x-switch>
      <x-switch title="Prevent auto closing" v-model="show8"></x-switch>
    </group>

    <actionsheet v-model="show4" :menus="menus1" :close-on-clicking-mask="false" show-cancel @on-click-mask="console('on click mask')"></actionsheet>

    <actionsheet
      v-model="show1"
      :menus="menus1"
      @on-click-menu="click"
      @on-after-hide="log('after hide')"
      @on-after-show="log('after show')"></actionsheet>

    <actionsheet v-model="show2" :menus="menus2" @on-click-menu="click" show-cancel></actionsheet>

    <actionsheet v-model="show3" :menus="menus3" @on-click-menu="click" @on-click-menu-delete="onDelete" show-cancel></actionsheet>

    <actionsheet v-model="show5" :menus="menus5" show-cancel @on-click-menu="click5"></actionsheet>

    <actionsheet v-model="show6" :menus="menus1">
      <p slot="header" v-html="'Actionsheet header'"></p>
    </actionsheet>

    <actionsheet
      v-model="show7"
      :menus="menu7"
      theme="android"
      @on-click-menu="click"
      @on-after-hide="log('after hide')"
      @on-after-show="log('after show')">
    </actionsheet>

    <toast v-model="showSuccess">Deleted</toast>

    <div v-transfer-dom>
      <actionsheet v-model="show8" :menus="menus8" @on-click-menu="demo8doClose" :close-on-clicking-mask="false" :close-on-clicking-menu="false">
      </actionsheet>
    </div>
  </div>
</template>

<script>
import { TransferDom } from 'hae'
import { Actionsheet } from 'hae'
import { Group } from 'hae'
import { XSwitch } from 'hae'
import { Toast } from 'hae'

export default {
  components: {
    Actionsheet,
    Group,
    XSwitch,
    Toast
  },
  directives: {
    TransferDom
  },
  data () {
    return {
      show1: false,
      menus1: {
        menu1: 'Share to friends',
        menu2: 'Share to timeline'
      },
      show2: false,
      menus2: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      menus5: [{
        label: 'Actionsheet header',
        type: 'info'
      }, {
        label: 'Primary',
        type: 'primary',
        value: 'primary',
        otherProp: 'hey'
      }, {
        label: 'Warn',
        type: 'warn'
      }, {
        label: 'Disabled',
        type: 'disabled'
      }, {
        label: 'Default'
      }],
      menu7: {
        menu1: '北京烤鸭',
        menu2: '陕西油泼面',
        menu3: '西安肉夹馍'
      },
      showSuccess: false,
      menus3: {
        'title.noop': 'Actionsheet header',
        delete: '<span style="color:red">Delete</span>'
      },
      menus8: {
        menu1: 'Close me',
        menu2: 'Close me'
      }
    }
  },
  methods: {
    log (str) {
      console.log(str)
    },
    demo8doClose () {
      this.show8 = false
    },
    console (msg) {
      console.log(msg)
    },
    click (key) {
      console.log(key)
    },
    click5 (key, item) {
      console.log(key, item)
    },
    onDelete () {
      this.showSuccess = true
    }
  }
}
</script>

<style>
.popup0 {
  padding-bottom:15px;
  height:200px;
}
.popup1 {
  width:100%;
  height:100%;
}
</style>