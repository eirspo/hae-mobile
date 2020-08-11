<template>
  <div class="container">
    <div class="wrapper">
      <h1>Hae Mobile</h1>
      <a class="block" href="https://github.com/eirspo/hae-mobile" target="_blank">github</a>
      <a class="block" href="https://github.com/eirspo/hae-mobile" target="_blank">Demo</a>
      <p class="des">Powered By <a href="https://www.eirspo.com/" target="_blank">方数科技</a></p>
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
  .container {
    height: calc(100vh - 50px);
    overflow: auto;
    background-color: #ffffff;
  }
  .wrapper {
    text-align: center;
    padding-top: 20%;
  }
  .cp-logo {
    width: 75%;
  }
  .des {
    color: #9E9E9E;
    font-size: 14px;
    padding: 8px 0;
  }
  h1 {
    color: #108ee9;
  }
  .block {
    display: block;
    padding: 8px 0;
  }
</style>