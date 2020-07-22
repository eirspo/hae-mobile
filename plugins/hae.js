import Vue from 'vue'
import axios from 'axios'
const Hae = {
  request: function(options) {
    axios({
      url: options.url || '',
      method: options.method || 'get',
      data: options.data || {},
      headers: options.header || { 'Content-Type':'application/xwww-form-urlencoded' },
      params: options.params || {}
    })
    .then(res => {
      if(res.status === 200) {
        if(options.success) {
          options.success(res.data);
        }
        else {
          if(options.fail) {
            options.fail(err);
          }
        }
      }
    })
    .catch(err => {
      if(options.fail) {
        options.fail(err);
      }
    });
  },
  uploadFile: function(file) {

  },
  setStorage: function(key, value) {
    switch (typeof value) {
      case 'object':
        localStorage.setItem(key, JSON.stringify({
          type: 'object',
          value: value
        }));
        break;
      case 'string':
        localStorage.setItem(key, {
          type: 'string',
          value: value
        });
        break;
      case 'undefined':
        localStorage.setItem(key, {
          type: 'undefined',
          value: undefined
        });
        break;
    }
  },
  getStorage: function(key) {
    const result = localStorage.getItem(key);
    switch (result.type) {
      case 'object':
        return JSON.parse(result.value);
      case 'string':
        return result.value;
      case 'undefined':
        return undefined;
    }
  }
};
if(window) {
  window.hae = Hae;
}
else {
  Vue.prototype.hae = Hae;
}
