<template>
  <div class="container">
    <x-header style="background-color:#108ee9;">绩效管理</x-header>
    <div class="main-content">
      <flexbox>
        <flexbox-item>
          <div @click="viewAchievement('employeeList')" class="check-item emp">员工考核</div>
        </flexbox-item>
        <flexbox-item>
          <div @click="viewAchievement('myAchieve')" class="check-item user">我的绩效</div>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>
<script>
import { XHeader } from "hae";
import { Flexbox } from "hae";
import { FlexboxItem } from "hae";
export default {
  components: {
    XHeader,
    Flexbox,
    FlexboxItem,
  },
  methods: {
    viewAchievement(target) {
      this.$router.push(`/scenes/${target}`);
    }
  }
};
</script>
<style lang="css" scoped>
.emp {
  background-image: url(../../src/demo/static/employee.png);
}
.user {
    background-image: url(../../src/demo/static/jx.png);
}
.check-item {
  background-color: #00BCD4;
  border-radius: 10px;
  height: 120px;
  display: flex;
  background-repeat: no-repeat;
  background-size: 35% auto;
  background-position: right bottom;
  box-sizing: border-box;
  padding: 20px;
  font-size: 18px;
  color: #FFFFFF;
}
.main-content {
  padding: 8px;
}
</style>