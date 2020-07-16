import Vue from 'vue'
import { DatetimePlugin } from 'hae'
import {  CloseDialogsPlugin } from 'hae'
import {  ConfigPlugin } from 'hae'
import {  BusPlugin } from 'hae'
import {  LocalePlugin } from 'hae'
import {  AjaxPlugin } from 'hae'
import {  AppPlugin } from 'hae'
import {  DevicePlugin } from 'hae'
import {  TransferDom } from 'hae'
import {  WechatPlugin } from 'hae'
import {  LoadingPlugin } from 'hae'
import {  ToastPlugin } from 'hae'
import {  AlertPlugin } from 'hae'
import {  ConfirmPlugin } from 'hae'
Vue.use(DatetimePlugin)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)  
Vue.use(WechatPlugin)
Vue.use(BusPlugin)

Vue.directive('transfer-dom', TransferDom)

// global VUX config
Vue.use(ConfigPlugin, {
    $layout: 'VIEW_BOX' // global config for VUX, since v2.5.12
  })
  
  // plugins
  Vue.use(DevicePlugin)
  Vue.use(ToastPlugin)
  Vue.use(AlertPlugin)
  Vue.use(ConfirmPlugin)
  Vue.use(LoadingPlugin)
  Vue.use(WechatPlugin)
  Vue.use(AjaxPlugin)
  Vue.use(BusPlugin)
  Vue.use(DatetimePlugin)
  Vue.use(CloseDialogsPlugin)
  
  // test
  if (process.env.platform === 'app') {
    Vue.use(AppPlugin, store)
  }
  
  const wx = Vue.wechat
  const http = Vue.http
  
  /**
  * -------------------------- 微信分享 ----------------------
  * 请不要直接复制下面代码
  */
  
  if (process.env.NODE_ENV === 'production') {
    wx.ready(() => {
      console.log('wechat ready')
      wx.onMenuShareAppMessage({
        title: 'VUX', // 分享标题
        desc: '基于 WeUI 和 Vue 的移动端 UI 组件库',
        link: 'https://vux.li?x-page=wechat_share_message',
        imgUrl: 'https://static.vux.li/logo_520.png'
      })
  
      wx.onMenuShareTimeline({
        title: 'VUX', // 分享标题
        desc: '基于 WeUI 和 Vue 的移动端 UI 组件库',
        link: 'https://vux.li?x-page=wechat_share_timeline',
        imgUrl: 'https://static.vux.li/logo_520.png'
      })
    })
  
    const permissions = JSON.stringify(['onMenuShareTimeline', 'onMenuShareAppMessage'])
    const url = document.location.href
    http.post('https://vux.li/jssdk?url=' + encodeURIComponent(url.split('#')[0]) + '&jsApiList=' + permissions).then(res => {
      wx.config(res.data.data)
    })
  }
  
  const FastClick = require('fastclick')
  FastClick.attach(document.body)
  
//   Vue.use(CloseDialogsPlugin)