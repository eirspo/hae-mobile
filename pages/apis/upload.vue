<template>
  <div>
    <input type="file" @change="startUploadFile">
  </div>
</template>
<script>
export default {
  methods: {
    startUploadFile(e) {
      hae.uploadFile({
        url: 'https://www.baidu.com',
        fileName: 'file',
        file: e.target.files[0],
        success: res => {

        },
        fail: err => {
          
        }
      })
    }
  }
}
</script>