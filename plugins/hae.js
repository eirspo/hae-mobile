import Vue from 'vue'
import axios from 'axios'
const Hae = {
  request: function(options) {
    axios({
      url: options.url || '',
      method: options.method || 'get',
      params: options.data || {},
      headers: options.header || { 'Content-Type':'application/xwww-form-urlencoded' }
    })
    .then(res => {

    })
    .catch(err => {

    });
  }
};
if(window) {
  window.hae = Hae;
}
else {
  Vue.prototype.hae = Hae;
}
