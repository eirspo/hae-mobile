<template>
  <div>
    <tab>
      <tab-item :selected="currentIndex === 0" @on-item-click="onItemClick">场景</tab-item>
      <tab-item :selected="currentIndex === 1" @on-item-click="onItemClick">样例</tab-item>
    </tab>
    <div v-show="currentIndex === 0" class="scene-wrapper">
      <card>
        <div @click="getCheckList" slot="content" class="content">
          <div class="bg-wrapper lc"></div>
          <p class="scene-title">流程审批</p>
        </div>
      </card>
      <card>
        <div @click="viewAchieve" slot="content" class="content">
          <div class="bg-wrapper jx"></div>
          <p class="scene-title">绩效管理</p>
        </div>
      </card>
    </div>
    <div v-show="currentIndex === 1" class="sample-wrapper">
      <list :list="sampleList"></list>
    </div>
  </div>
</template>
<script>
import { Card } from "hae";
import { Tab } from "hae";
import { TabItem } from "hae";
import {List} from "hae";
export default {
  components: {
    Card,
    Tab,
    TabItem,
    List
  },
  data() {
    return {
      sampleList:[
        {
          name: '图表',
          url: '/scenes/chart'
        },
        {
          name: '个人中心',
          url: '/scenes/user'
        },
        {
          name: '登录',
          url: '/scenes/login'
        }
      ],
      currentIndex: 0
    };
  },
  methods: {
    getCheckList() {
      this.$router.push("/scenes/program");
    },
    viewAchieve() {
      this.$router.push("/scenes/achievement");
    },
    viewSamples() {
      this.$router.push("/scenes/samples");
    },
    onItemClick (index) {
      this.currentIndex = index;
    }
  },
};
</script>
<style lang="less" scoped>
.content {
  position: relative;
}
.lc {
  background-image: url(../src/demo/static/check.png);
}
.jx {
  background-image: url(../src/demo/static/jx.jpg);
}
.sample {
  background-image: url(../src/demo/static/sample.jpg);
}
.bg-wrapper {
  background-repeat: no-repeat;
  height: 200px;
  background-size: cover;
  background-position: center;
}
.scene-title {
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 15px;
  width: 100%;
  color: #ffffff;
}
.sample-wrapper {
  background-color: #FFFFFF;
}
</style>