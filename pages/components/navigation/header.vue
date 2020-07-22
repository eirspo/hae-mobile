<template>
  <div>
    <br>
    <x-header>This is the page title.</x-header>
    <br>
    <x-header :left-options="{showBack: false}">do not show Back</x-header>
    <br>
    <x-header :left-options="{backText: ''}">set empty back text</x-header>
    <br>
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">with more menu</x-header>
    <br>
    <x-header style="background-color:#000;">custom background color</x-header>
  </div>
</template>

<script>
import { XHeader } from 'hae'
import { Actionsheet } from 'hae'
import { TransferDom } from 'hae'
import { ButtonTab } from 'hae'
import { ButtonTabItem } from 'hae'

export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem
  },
  data () {
    return {
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      showMenus: false
    }
  }
}
</script>

<style>
.overwrite-title-demo {
  margin-top: 5px;
}
</style>