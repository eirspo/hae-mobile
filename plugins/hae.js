import Vue from 'vue'
import axios from 'axios'
import {Toast} from 'hae'
import {Loading} from 'hae'
import {Confirm} from 'hae'
const ToastConstructor = Vue.extend(Toast);
let $vmToast;
const LoadingConstructor = Vue.extend(Loading);
let $vmLoading;
const ModalConstructor = Vue.extend(Confirm);
let $vmModal;
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
            options.success(res.data);
          } else {
            if (options.fail) {
              options.fail(err);
            }
          }
        }
      })
      .catch(err => {
        if (options.fail) {
          options.fail(err);
        }
      });
  },
  uploadFile: function (options) {
    const formData = new FormData();
    formData.append(options.fileName, options.file);
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
    this.store(localStorage, key, value);
  },
  setSessionStorage: function (key, value) {
    this.store(sessionStorage, key, value);
  },
  /**
   * 存储公用函数
   * @param {object} storage localStorage或sessionStorage
   * @param {string} key 存储key值
   * @param {string | object} value 存储的值
   */
  store: function (storage, key, value) {
    switch (typeof value) {
      case 'object':
        storage.setItem(key, JSON.stringify({
          type: 'object',
          value: value
        }));
        break;
      case 'string':
        storage.setItem(key, {
          type: 'string',
          value: value
        });
        break;
      case 'undefined':
        storage.setItem(key, {
          type: 'undefined',
          value: undefined
        });
        break;
    }
  },
  /**
   * 获取本地存储
   * @param {string} key 获取内容的key值
   */
  getStorage: function (key) {
    return this.getStore(localStorage, key);
  },
  getSessionStorage: function (key) {
    return this.getStore(sessionStorage, key);
  },
  /**
   * 获取存储公用函数
   * @param {object} storage localStorage或sessionStorage
   * @param {string} key 获取值的key
   */
  getStore: function (storage, key) {
    const store = JSON.parse(storage.getItem(key));
    let res = '';
    switch (store.type) {
      case 'object':
        res = store.value;
        break;
      case 'string':
        res = store.value;
        break;
      case 'undefined':
        res = undefined;
        break;   
    }
    return res;
  },
  removeStorage: function(key) {
    this.removeStore(localStorage, key);
  },
  removeSessionStorage: function(key) {
    this.removeStore(sessionStorage, key);
  },
  removeStore: function(store, key) {
    store.removeItem(key);
  },
  clearStorage:function() {
    this.clearStore(localStorage);
  },
  clearStorage:function() {
    this.clearStore(sessionStorage);
  },
  clearStore:function(store) {
    store.clear();
  },
  toast: function(options) {
    $vmToast = new ToastConstructor({
      el: document.createElement('div')
    });
    document.body.appendChild($vmToast.$el);
    $vmToast.value = true;
    $vmToast.text = options.title || '';
    $vmToast.type = options.type || 'text';
    $vmToast.time = options.time || 1000;
  },
  showLoading: function(title) {
    if(!$vmLoading) {
      $vmLoading = new LoadingConstructor({
        el: document.createElement('div')
      });
      document.body.appendChild($vmLoading.$el);
    }
    $vmLoading.show = true;
    $vmLoading.text = title || '加载中';
  },
  hideLoading: function() {
    if($vmLoading) {
      $vmLoading.show = false;
    }
  },
  showModal: function(options = {}) {
    if(!$vmModal) {
      $vmModal = new ModalConstructor({
        el: document.createElement('div')
      });
      document.body.appendChild($vmModal.$el);
    }
    console.log(options.showCancel === undefined)
    $vmModal.value = true;
    $vmModal.showInput = options.showInput || false;
    $vmModal.placeholder = options.placeholder || '';
    $vmModal.title = options.title || '提示';
    $vmModal.content = options.content || '';
    $vmModal.confirmText = options.confirmText || '确定';
    $vmModal.cancelText = options.cancelText || '取消';
    $vmModal.showConfirmButton = options.showConfirm || true;
    $vmModal.showCancelButton = typeof options.showCancel === 'boolean' ? options.showCancel : true;
    $vmModal._onConfirm = function(value) {
      $vmModal.value = false;
      if(options.onConfirm) {
        options.onConfirm();
      }
    }
    $vmModal._onCancel = function() {
      $vmModal.value = false;
      if(options.onCancel) {
        options.onCancel();
      }
    }
  }
};
if (window) {
  window.hae = Hae;
} else {
  Vue.prototype.hae = Hae;
}
