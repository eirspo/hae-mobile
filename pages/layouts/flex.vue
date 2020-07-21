<template>
  <div>
    <divider> 水平 </divider>
    <flexbox>
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
    </flexbox>
    <br>
    <flexbox>
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
      <flexbox-item><div class="flex-demo">3</div></flexbox-item>
    </flexbox>
    <br>
    <flexbox>
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
      <flexbox-item><div class="flex-demo">3</div></flexbox-item>
      <flexbox-item><div class="flex-demo">4</div></flexbox-item>
    </flexbox>
    <br>
    <flexbox>
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
      <flexbox-item><div class="flex-demo">3</div></flexbox-item>
      <flexbox-item><div class="flex-demo">4</div></flexbox-item>
      <flexbox-item><div class="flex-demo">5</div></flexbox-item>
    </flexbox>
    <br>
    <flexbox>
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
      <flexbox-item><div class="flex-demo">3</div></flexbox-item>
      <flexbox-item><div class="flex-demo">4</div></flexbox-item>
      <flexbox-item><div class="flex-demo">5</div></flexbox-item>
      <flexbox-item><div class="flex-demo">6</div></flexbox-item>
    </flexbox>
    <br>
    <divider> 水平间隙 </divider>
    <flexbox :gutter="0">
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
      <flexbox-item><div class="flex-demo">3</div></flexbox-item>
      <flexbox-item><div class="flex-demo">4</div></flexbox-item>
    </flexbox>
    <br>
    <divider> 垂直 </divider>
    <flexbox orient="vertical">
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
    </flexbox>
    <br>
    <divider> 垂直无间隙 </divider>
    <flexbox orient="vertical" :gutter="0">
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
    </flexbox>
    <br>
    <divider> 支持12列 </divider>
    <flexbox>
      <flexbox-item :span="4"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2/3</div></flexbox-item>
    </flexbox>
    <br>
    <flexbox>
      <flexbox-item :span="6"><div class="flex-demo">6/12</div></flexbox-item>
      <flexbox-item :span="2"><div class="flex-demo">2/12</div></flexbox-item>
      <flexbox-item ><div class="flex-demo">rest</div></flexbox-item>
    </flexbox>
    <br>
    <divider>flex-wrap</divider>
    <flexbox :gutter="0" wrap="wrap">
      <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
    </flexbox>

  </div>
</template>

<script>
import { Flexbox } from 'hae'
import { FlexboxItem } from 'hae'
import { Divider } from 'hae'

export default {
  components: {
    Flexbox,
    FlexboxItem,
    Divider
  },
  mounted() {
    hae.request({
      url: 'https://www.baidu.com',
      type: 'post',
      params: {
        act: 'getJoke',
        page: 1,
        count: 10
      }
    }) 
  }
}
</script>

<style lang="less">
@import '~hae/src/styles/1px.less';

.flex-demo {
  text-align: center;
  color: #fff;
  background-color:#108ee9;
  border-radius: 4px;
  background-clip: padding-box;
}
</style>