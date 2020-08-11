<template>
  <div class="holidy-scene">
    <x-header style="background-color:#108ee9;">
      审批
      <div slot="right" @click="viewNotice">
        <icon name="notice-bell"></icon>
      </div>
    </x-header>
    <div class="holidy-wrapper">
      <div class="content-wrapper">
        <popup-picker
          @on-change="changeEvent"
          show-name
          :columns="2"
          title="请选择审批项目"
          :data="eventList"
          v-model="eventName"
        ></popup-picker>
        <x-input v-model="name" title="姓名" placeholder="请输入姓名"></x-input>
        <x-textarea v-model="reason" placeholder="请输入申请理由" autosize></x-textarea>
        <template v-if="currentEvent === '2'">
          <x-input v-model="money" type="number" title="金额" placeholder="请输入金额"></x-input>
          <div class="upload-wrapper">
            <p class="upload-title">上传票据</p>
            <img-picker></img-picker>
          </div>
        </template>
        <calendar
          placeholder="placeholder"
          @on-change="onChangeStart"
          v-model="startDate"
          title="开始日期"
          popup-header-title="开始日期"
        ></calendar>
        <calendar
          placeholder="placeholder"
          @on-change="onChangeEnd"
          v-model="endDate"
          title="截止日期"
          popup-header-title="截止日期"
        ></calendar>
        <popup-picker show-name :columns="2" title="请选择审核人" :data="depList" v-model="depName"></popup-picker>
      </div>
      <div class="button-wrapper">
        <x-button @click.native="submitApply" type="primary">提交</x-button>
      </div>
    </div>
  </div>
</template>
<script>
import { XHeader } from "hae";
import { XInput } from "hae";
import { Group } from "hae";
import { XTextarea } from "hae";
import { Calendar } from "hae";
import { PopupPicker } from "hae";
import { XButton } from "hae";
import { ImgPicker } from "hae";
import { Icon } from "hae";
export default {
  data() {
    return {
      currentEvent: "",
      name: "",
      reason: "",
      startDate: "2020-07-22",
      endDate: "2020-08-02",
      eventName: [],
      money: "",
      eventList: [
        {
          name: "请假审批",
          value: "1",
        },
        {
          name: "报销审批",
          value: "2",
        },
      ],
      depList: [
        {
          name: "市场部",
          value: "1",
          parent: 0,
        },
        {
          name: "研发部",
          value: "2",
          parent: 0,
        },
        {
          name: "王小明",
          value: "11",
          parent: "1",
        },
        {
          name: "陈红",
          value: "21",
          parent: "2",
        },
      ],
      depName: [],
    };
  },
  components: {
    XButton,
    XInput,
    Group,
    XTextarea,
    Calendar,
    PopupPicker,
    XHeader,
    ImgPicker,
    Icon
  },
  methods: {
    onChangeStart(value) {
      this.startDate = value;
    },
    onChangeEnd(value) {
      this.endDate = value;
    },
    changeEvent(value) {
      this.currentEvent = value[0];
    },
    submitApply() {
      if (!this.eventName.length) {
        hae.toast({
          title: "请选择审核项目",
        });
        return;
      }
      if (!this.name.trim()) {
        hae.toast({
          title: "请输入姓名",
        });
        return;
      }
      if (!this.reason.trim()) {
        hae.toast({
          title: "请输入申请理由",
        });
        return;
      }
      if (this.currentEvent === "1") {
        if (this.endDate < this.startDate) {
          hae.toast({
            title: "截止日期不能小于开始日期",
          });
          return;
        }
      } else if (this.currentEvent === "2") {
        var regMoney = /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/;
        if (!regMoney.test(this.money)) {
          hae.toast({
            title: "金额输入有误",
          });
          return;
        }
      }
      if (!this.depName.length) {
        hae.toast({
          title: "请选择审核人",
        });
        return;
      }
      hae.showLoading("提交中");
      setTimeout(() => {
        hae.hideLoading();
        hae.toast({
          title: "提交成功",
        });
      }, 2000);
    },
    viewNotice() {
      this.$router.push('/scenes/noticeList')
    }
  },
  created() {
    this.currentEvent = this.eventList[0].value;
    console.log(this.currentEvent);
  },
  mounted() {
    console.log(this.currentEvent);
  },
};
</script>
<style scoped>
.content-wrapper,
.button-wrapper {
  background-color: #ffffff;
}
.button-wrapper {
  padding: 15px;
}
.upload-wrapper {
  padding: 10px 15px;
}
p.upload-title {
  padding: 10px 0;
  position: relative;
}
p.upload-title::before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  background-color: #d9d9d9;
  transform-origin: 0 0;
  transform: scaleY(0.5);
}
</style>