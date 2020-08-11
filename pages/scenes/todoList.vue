<template>
  <div class="container">
    <x-header style="background-color:#108ee9;">
      待办事项
    </x-header>
    <list :list="todoList"></list>
  </div>
</template>
<script>
import { XHeader } from "hae";
import { List } from "hae";
export default {
  data() {
    return {
      todoList:[{
        name: '会议安排',
        icon: 'check',
        color: 'green'
      },
      {
        name: '会议笔记整理'
      },
      {
        name: '检查项目进度'
      },
      {
        name: '客户项目需求沟通'
      }]
    };
  },
  components: {
    XHeader,
    List
  },
};
</script>
<style lang="css" scoped>

</style>