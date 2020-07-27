import Vue from 'vue'
import axios from 'axios'
import {Toast, base64} from 'hae'
import {Loading} from 'hae'
import {Confirm} from 'hae'
import {Actionsheet} from 'hae'
import {Previewer} from 'hae'
import {Datetime} from 'hae'
import {base64} from 'hae'
import ClipboardJS from 'clipboard'
const ToastConstructor = Vue.extend(Toast)
let $vmToast
const LoadingConstructor = Vue.extend(Loading)
let $vmLoading
const ModalConstructor = Vue.extend(Confirm)
let $vmModal
const ActionsheetConstructor = Vue.extend(Actionsheet)
let $vmActionsheet
const PreviewerConstructor = Vue.extend(Previewer)
let $vmPreview
const DatePickerConstructor = Vue.extend(Datetime)
let $vmPickerDate
let clipBoard = ''
let isClick = true
const Hae = {
  request: function (options) {
    axios({
        url: options.url || '',
        method: options.method || 'get',
        data: options.data || {},
        headers: options.header || {
          'Content-Type': 'application/xwww-form-urlencoded'
        },
        params: options.params || {}
      })
      .then(res => {
        if (res.status === 200) {
          if (options.success) {
            options.success(res.data)
          } else {
            if (options.fail) {
              options.fail(err)
            }
          }
        }
      })
      .catch(err => {
        if (options.fail) {
          options.fail(err)
        }
      })
  },
  uploadFile: function (options) {
    const formData = new FormData()
    formData.append(options.fileName, options.file)
    this.request({
      url: options.url,
      method: 'post',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      success: options.success,
      fail: options.fail
    })
  },
  /**
   * 本地存储函数
   * @param {string} key 需要存储的内容的key值
   * @param {string | object} value 需要存储的内容
   */
  setStorage: function (key, value) {
    switch (typeof value) {
      case 'object':
        localStorage.setItem(key, JSON.stringify({
          type: 'object',
          value: value
        }))
        break
      case 'string':
        localStorage.setItem(key, {
          type: 'string',
          value: value
        })
        break
      case 'undefined':
        localStorage.setItem(key, {
          type: 'undefined',
          value: undefined
        })
        break
    }
  },
  /**
   * 获取本地存储
   * @param {string} key 获取内容的key值
   */
  getStorage: function (key) {
    const store = JSON.parse(localStorage.getItem(key))
    let res = ''
    if(!store) {
      return res
    }
    switch (store.type) {
      case 'object':
        res = store.value
        break
      case 'string':
        res = store.value
        break
      case 'undefined':
        res = undefined
        break   
    }
    return res
  },
  /**
   * 删除指定key的本地存储内容
   * @param {string} key 
   */
  removeStorage: function(key) {
    localStorage.removeItem(key)
  },
  /**
   * 清空本地存储
   */
  clearStorage:function() {
    localStorage.clear()
  },
  /**
   * toast轻提示
   * @param {object} options 
   * options : {
   *  title {string} 显示的内容
   *  type {string} 类型：text->文本、success->成功、warn->警告、cancel->取消
   *  time {number} 显示时长，默认1000(ms)
   * }
   */
  toast: function(options) {
    if(!$vmToast) {
      $vmToast = new ToastConstructor({
        el: document.createElement('div')
      })
      document.body.appendChild($vmToast.$el)
    }
    $vmToast.value = true
    $vmToast.text = options.title || ''
    $vmToast.type = options.type || 'text'
    $vmToast.time = options.time || 1000
    $vmToast.$on('on-hide',() => {
      $vmToast.value = false
    })
  },
  /**
   * loading加载器
   * @param {string} title  加载提示文字
   */
  showLoading: function(title) {
    if(!$vmLoading) {
      $vmLoading = new LoadingConstructor({
        el: document.createElement('div')
      })
      $vmLoading.show = true
      $vmLoading.text = title || ''
      document.body.appendChild($vmLoading.$el)
    }
  },
  /**
   * 关闭加载loading
   */
  hideLoading: function() {
    if($vmLoading) {
      $vmLoading.show = false
    }
  },
  /**
   * alert提示框
   * @param {object} options 
   * options: {
   *  title {string} 标题
   *  content {string} 显示内容
   *  confirmText {string} 按钮文字
   *  onConfirm {function} 点击确认回调函数
   * }
   */
  alert: function(options) {
    this.showModal({
      title: options.title,
      content: options.content,
      showCancel: false,
      confirmText:options.confirmText,
      onConfirm: function() {
        if(options.onConfirm) {
          options.onConfirm()
        }
      }
    })
  },
  /**
   * 确认提示框
   * @param {object} options 
   * options: {
   *  title {string} 标题
   *  content {string} 显示内容
   *  confirmText {string} 确认按钮文字
   *  cancelText {string} 取消按钮文字
   *  onConfirm {function} 点击确认回调函数
   *  onCancel {function} 点击取消回调函数
   * }
   */
  confirm: function(options) {
    this.showModal({
      title: options.title,
      content: options.content,
      cancelText: options.cancelText,
      confirmText: options.confirmText,
      onConfirm: function() {
        if(options.onConfirm) {
          options.onConfirm()
        }
      },
      onCancel: function() {
        if(options.onCancel) {
          options.onCancel()
        }
      }
    })
  },
  /**
   * 带输入提示框
   * @param {object} options 
   * options: {
   *  title {string} 显示的标题
   *  placeholder {string} 输入框placeholder值
   *  onConfirm {function} 确认回调函数，返回输入的值
   *  onCancel {function} 取消回调函数
   * }
   */
  prompt: function(options) {
    this.showModal({
      title: options.title,
      showInput: true,
      placeholder: options.placeholder || '',
      cancelText:options.cancelText,
      confirmText:options.confirmText,
      onConfirm: function(res) {
        if(options.onConfirm) {
          options.onConfirm(res)
        }
      },
      onCancel: function() {
        if(options.onCancel) {
          options.onCancel()
        }
      }
    })
  },
  /**
   * 统一处理弹窗函数
   * @param {object} options 
   * object: {
   *  showInput {boolean} 是否显示输入框
   *  placeholder {string} 输入框placeholder值，showInput为true时有效
   *  title {string} 标题
   *  content {string} 内容
   *  confirmText {string} 确认按钮文字
   *  cancelText {string} 取消按钮文字
   *  showConfirmButton {boolean} 是否显示确认按钮
   *  showCancelButton {boolean} 是否显示取消按钮
   *  onConfirm {function} 确认回调函数
   *  onCancel {function} 取消回调函数
   * }
   */
  showModal: function(options = {}) {
    if(!$vmModal) {
      $vmModal = new ModalConstructor({
        el: document.createElement('div')
      })
      document.body.appendChild($vmModal.$el)
    }
    $vmModal.value = true
    $vmModal.showInput = options.showInput || false
    $vmModal.placeholder = options.placeholder || ''
    $vmModal.title = options.title || '提示'
    $vmModal.content = options.content || ''
    $vmModal.confirmText = options.confirmText || '确定'
    $vmModal.cancelText = options.cancelText || '取消'
    $vmModal.showConfirmButton = options.showConfirm || true
    $vmModal.showCancelButton = typeof options.showCancel === 'boolean' ? options.showCancel : true
    $vmModal._onConfirm = function() {
      console.log('confirm')
      $vmModal.value = false
      if(options.onConfirm) {
        options.onConfirm($vmModal.msg)
      }
    }
    $vmModal._onCancel = function() {
      $vmModal.value = false
      if(options.onCancel) {
        options.onCancel()
      }
    }
  },
  /**
   * 底部actionsheet
   * @param {object} options 
   * options: {
   *  theme {string} 显示主题类型 ios、android
   *  showCancel {boolean} 是否显示取消按钮
   *  cancelText {string} 取消按钮文字
   *  closeOnclickMask {boolean} 点击mask遮罩是否关闭actionsheet
   *  closeOnClickMask {boolean} 点击菜单按钮是否关闭actionsheet
   *  menus {array} 数据列表，形式： [{label:'text',type:'disabled'},'text',{label:'<p style="color:red;">text</p>'}]
   *  onClickMask {function} 点击mask遮罩回调
   *  onMenuClick {function} 点击菜单回调
   * }
   */
  showActionsheet: function(options) {
    if(!$vmActionsheet) {
      $vmActionsheet = new ActionsheetConstructor({
        el: document.createElement('div')
      })
      document.body.appendChild($vmActionsheet.$el)
    }
    $vmActionsheet.value = true
    $vmActionsheet.theme = options.theme || 'ios'
    $vmActionsheet.showCancel = typeof(options.showCancel) === 'boolean' ? options.showCancel : true
    $vmActionsheet.cancelText = options.cancelText || '取消'
    $vmActionsheet.closeOnclickingMas = typeof(options.closeOnClickMask) === 'boolean' ? options.closeOnClickMask : true
    $vmActionsheet.closeOnClickMenu = typeof(options.closeOnClickMenu) === 'boolean' ? options.closeOnClickMenu : true
    $vmActionsheet.menus = options.menus || []
    $vmActionsheet.onClickingMask = function() {
      if($vmActionsheet.closeOnclickingMas === true) {
        $vmActionsheet.value = false;
      }
      if(options.onClickMask) {
        options.onClickMask()
      }
    }
    $vmActionsheet.emitEvent = function(event, index, res) {
      $vmActionsheet.value = false
      if(options.onMenuClick) {
        if(index === undefined) {
          options.onMenuClick({
            type:'cancel',
            data: ''
          })
        }
        else {
          options.onMenuClick({
            type:'menu',
            data: {
              index: index,
              content: res
            }
          })
        }
      }
    }
  },
  /**
   * 图片预览
   * @param {object} options 
   * options : {
   *  list {array} 需要显示的图片数组 [{src: string, w: number, h: number}]
   *  index {number} 默认展示的图片index
   * }
   */
  previewImage: function(options) {
    let list = options.list.map(item => {
      return {
        src: item.src,
        w: item.w || 0,
        h: item.h || 0
      }
    })
    if(!$vmPreview) {
      $vmPreview = new PreviewerConstructor({
        el: document.createElement('div'),
        propsData: {
          list: list || []
        }
      })
      document.body.appendChild($vmPreview.$el)
    }
    $vmPreview.show(options.index || 0)
  },
  /**
   * 日期选择器
   * @param {object} options 
   */
  pickerDate: function(options) {
    $vmPickerDate = new DatePickerConstructor({
      el: document.createElement('div')
    })
    $vmPickerDate.format = options.format || 'YYYY-MM-DD'
    $vmPickerDate.clearText = options.title || '请选择'
    $vmPickerDate.value = options.value || ''
    $vmPickerDate.show = true
    $vmPickerDate.confirmText = options.confirmText || '确定'
    $vmPickerDate.cancelText = options.cancelText || '取消'
    $vmPickerDate.pickerOptions.onConfirm = function (value) {
      if(options.onConfirm) {
        options.onConfirm(value)
      }
    }
    $vmPickerDate.pickerOptions.onHide = function() {
      if(options.onHide) {
        options.onHide()
      }
    }
  },
/**
 * base64加密
 * @param {string} content 
 */
  encrypt: function(content) {
    return base64.encode(content)
  },
  /**
   * base64解密
   * @param {string} data 
   */
  decrypt:function(data) {
    return base64.decode(data)
  },
  copyData:function(el,data) {
    if (!isClick) {
      return;
    }
    if (clipBoard) {
      clipBoard.destroy();
    }
    clipBoard = new ClipboardJS(el, {
      text: function() {
        isClick = true;
        return data
      }
    })
    clipBoard.on('success', function(e) {
      hae.toast({
        title:'复制成功'
      })
    })
    
    clipBoard.on('error', function(e) {
      hae.toast({
        title:'复制失败'
      })
    })
    if (el) {
      isClick = false;
      el.click();
    }
  }
}
if (window) {
  window.hae = Hae
} else {
  Vue.prototype.hae = Hae
}
