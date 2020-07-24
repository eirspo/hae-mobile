<template>
  <div>
    <x-button @click.native="setStorage">setStorage</x-button>
    <x-button @click.native="getStorage">getStorage</x-button>
    <x-button @click.native="removeStorage">removeStorage</x-button>
    <x-button @click.native="clearStorage">clearStorage</x-button>
  </div>
</template>
<script>
import {XButton} from 'hae'
export default {
  components: {
    XButton
  },
  methods: {
    setStorage () {
      hae.setStorage('user',{
        id: 0,
        name: 'jack'
      });
    },
    getStorage () {
      hae.showModal({
        showCancel: false,
        content: hae.getStorage('user')
      })
    },
    removeStorage () {
      hae.removeStorage('user');
    },
    clearStorage () {
      hae.clearStorage();
    }
  },
}
</script>