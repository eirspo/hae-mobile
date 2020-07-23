<template>
  <div>
    <x-button @click.native="showToast('text')">toast-text</x-button>
    <x-button @click.native="showToast('warn')">toast-warn</x-button>
    <x-button @click.native="showToast('success')">toast-success</x-button>
    <x-button @click.native="showToast('cancel')">toast-cancel</x-button>
  </div>
</template>
<script>
import {XButton} from 'hae'
export default {
  components: {
    XButton
  },
  methods: {
    showToast (type) {
      hae.toast({
        title:'ba',
        type: type
      });
    }
  }
}
</script>