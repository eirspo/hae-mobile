<template>
  <div class="container">
    <x-header style="background-color:#108ee9;">
      通知
    </x-header>
    <card :header="header">
      <p slot="content" class="card-padding">
        您的请假申请已经通过！<br>
        审核人：王小明<br>
        备注：通过<br>
        审核日期：2020-05-22
      </p>
    </card>
    <card :header="header">
      <p slot="content" class="card-padding">
        您的报销申请未通过！<br>
        审核人：陈红<br>
        备注：不在报销范围内<br>
        审核日期：2020-06-15<br>
      </p>
    </card>
  </div>
</template>
<script>
import { Card } from "hae";
import { XHeader } from "hae";
export default {
  data() {
    return {
      header: {
        title: "新通知",
      },
    };
  },
  components: {
    Card,
    XHeader
  },
};
</script>
<style lang="css" scoped>
.card-padding {
  padding: 15px;
}
</style>