<template>
  <div class="holidy-scene">
    <p class="holidy-title">请假审批</p>
    <div class="holidy-wrapper">
        <group>
          <x-input v-model="name" title="姓名" placeholder="请输入姓名"></x-input>
          <x-textarea v-model="reason" placeholder="请输入申请理由" autosize></x-textarea>
          <calendar placeholder="placeholder" @on-change="onChangeStart" v-model="startDate" title="开始日期" popup-header-title="开始日期"></calendar>
          <calendar placeholder="placeholder" @on-change="onChangeEnd" v-model="endDate" title="截止日期" popup-header-title="截止日期"></calendar>
          <popup-picker show-name :columns="2" title="请选择审核人" :data="depList" v-model="depName"></popup-picker>
        </group>
        <group>
          <x-button @click.native="submitApply" type="primary">提交</x-button>
        </group>
    </div>
  </div>
</template>
<script>
import {XInput} from 'hae'
import {Group} from 'hae'
import { XTextarea } from 'hae'
import { Calendar } from 'hae'
import { PopupPicker } from 'hae'
import { XButton } from 'hae'
export default {
  data () {
    return {
      name:'',
      reason:'',
      startDate:'2020-07-22',
      endDate:'2020-08-02',
      depList:[{
        name: '市场部',
        value: '1',
        parent: 0
      },{
        name:'研发部',
        value:'2',
        parent:0
      },{
        name:'王小明',
        value:'11',
        parent:'1'
      },{
        name:'陈红',
        value:'21',
        parent:'2'
      }],
      depName:[]
    }
  },
  components: {
    XButton,
    XInput,
    Group,
    XTextarea,
    Calendar,
    PopupPicker
  },
  methods: {
    onChangeStart(value) {
      this.startDate = value
    },
    onChangeEnd(value) {
      this.endDate = value
    },
    submitApply() {
      if(!this.name.trim()) {
        hae.toast({
          title:'请输入姓名'
        });
        return;
      } 
      if(!this.reason.trim()) {
        hae.toast({
          title:'请输入申请理由'
        });
        return;
      }
      if(this.endDate < this.startDate) {
        hae.toast({
          title:'截止日期不能小于开始日期'
        });
        return;
      }
      if(!this.depName.length) {
        hae.toast({
          title:'请选择审核人'
        });
        return;
      }
      hae.showLoading('提交中')
      setTimeout(() => {
        hae.hideLoading()
        hae.toast({
          title:'提交成功'
        })
      },2000)
    }
  }
}
</script>
<style lang="css">
  p.holidy-title {
    padding: 8px;
    text-align: center;
    background: #108ee9;
    color: #FFFFFF;
  }
</style>