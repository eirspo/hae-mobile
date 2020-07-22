<template>
  <div>
    <tag content="默认"></tag>
    <tag content="不可关闭" :closable="closable"></tag>
    <tag content="禁用" :disableTag="disableTag"></tag>
  </div>
</template>
<script>
import { Tag } from 'hae'
export default {
  data () {
    return {
      closable: false,
      disableTag: true
    }
  },
  components: {
    Tag
  }
}
</script>