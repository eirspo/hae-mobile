<template>
<div class="list-demo">
  <p class="title">文字内容</p>
  <list type="text" :list="list1"></list>
  <p class="title">文字内容</p>
  <list type="html" :list="list2"></list>
</div>
</template>

<script>
import {
  List
} from 'hae'
export default {
  components: {
    List
  },
  data () {
    return {
      list1: ['内容1', '内容2', '内容3', '内容4', '内容5', '内容6'],
      list2: [
        '<p>这是第1项内容</p>',
        '<p>这是第2项内容</p>',
        '<p>这是第3项内容</p>',
        '<p>这是第4项内容</p>',
        '<p>这是第5项内容</p>',
        '<p>这是第6项内容</p>'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.list-demo {
  background-color: #FFFFFF;
  padding: 15px;
}
</style>
