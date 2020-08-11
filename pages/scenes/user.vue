<template>
  <div class="container">
    <x-header style="background-color:#108ee9;">个人中心</x-header>
    <card>
      <div slot="content" class="user">
        <div class="company-wrapper">
          <div class="user-wrapper">
            <span class="company-name">阿里巴巴</span>
            <img src="../../src/demo/static/check.png" class="user-logo">
          </div>
          <div class="user-info">
            <p class="username">王小明</p>
            <p class="job">市场总监</p>
          </div>
        </div>
      </div>
    </card>
    <card>
      <div slot="content" class="operation-wrapper">
        <list :list="operation"></list>
      </div>
    </card>
  </div>
</template>
<script>
import { Card } from "hae";
import { List } from "hae";
import { XHeader } from "hae";
export default {
  components: {
    Card,
    List,
    XHeader
  },
  data () {
    return {
      operation: [{
        name: '通知',
        url: '/scenes/noticeList',
        icon: 'notice-bell',
        color: '#108ee9'
      },
      {
        name: '待办事项',
        url: '/scenes/todoList',
        icon: 'file',
        color: '#108ee9'
      },
      {
        name: '设置',
        url:'/scenes/setting',
        icon: 'setting',
        color: '#108ee9'
      }]
    }
  }
}
</script>
<style lang="css" scoped>
  .user {
    padding: 15px;
    background-color: transparent;
  }
  .user-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .user-logo {
    width: 60px;
    height: 60px;
    border-radius: 5px;
  }
  .user-info {
    padding-top: 20px;
  }
  .job {
    font-size: 12px;
    color: #ccc;
    padding-top: 10px;
  }
</style>