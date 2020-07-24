<template>
  <div>
    <x-button @click.native="alert">alert</x-button>
    <x-button @click.native="confirm">confirm</x-button>
    <x-button @click.native="prompt">prompt</x-button>
  </div>
</template>
<script>
import {XButton} from 'hae'
export default {
  components: {
    XButton
  },
  methods: {
    alert () {
      hae.alert({
        content:'go',
        confirmText:'哈哈哈'
      });
    },
    confirm () {
      hae.confirm({
        content:'确认删除吗？',
        cancelText: 'no way',
        confirmText: '可以'
      });
    },
    prompt () {
      hae.prompt({
        placeholder:'请输入年龄',
        cancelText: '保密',
        confirmText: '好的',
        onConfirm: res => {
          console.log(res)
        }
      });
    }
  }
}
</script>