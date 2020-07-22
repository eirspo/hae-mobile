<template>
  <div>
  <button @click="go">测试</button>
  </div>
</template>
<script>
export default {
  methods: {
    go () {
      hae.request({
        url: 'http://jsonplaceholder.typicode.com/posts',
        method: 'get',
        success:res=> {
          console.log(res)
        },
        fail:err=> {
          
        }
      }) 
    }
  }
}
</script>
<style lang="less">
  
</style>