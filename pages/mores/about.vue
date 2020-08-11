<template>
  <div class="container">
    <x-header style="background-color:#108ee9;">
      关于我们
    </x-header>
    <div class="wrapper">
      <img src="../../src/demo/static/logo.png" class="cp-logo">
      <h2>Hae Mobile</h2>
      <p class="des">Powered By 方数科技</p>
      <p class="des">Version 0.9.0</p>
    </div>
  </div>
</template>
<script>
import { XHeader } from "hae";
export default {
  data() {
    return {
      
    };
  },
  methods: {
    
  },
  components: {
    XHeader
  },
};
</script>
<style lang="css" scoped>
  .wrapper {
    text-align: center;
    padding-top: 10%;
  }
  .cp-logo {
    width: 75%;
  }
  .des {
    color: #CCCCCC;
    font-size: 14px;
    padding: 5px 0;
  }
</style>