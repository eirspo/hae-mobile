<template>
  <div>
    <x-button @click.native="showLoading">showloading</x-button>
  </div>
</template>
<script>
import {XButton} from 'hae'
export default {
  components: {
    XButton
  },
  methods: {
    showLoading () {
      hae.showLoading();
      setTimeout(() => {
        hae.hideLoading();
      },2000);
    }
  }
}
</script>