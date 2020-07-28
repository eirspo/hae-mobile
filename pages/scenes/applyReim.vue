<template>
  <div class="holidy-scene">
    <p class="holidy-title">报销审批</p>
    <div class="holidy-wrapper">
        <group>
          <x-input v-model="name" title="姓名" placeholder="请输入姓名"></x-input>
          <x-input v-model="money" type="number" title="金额" placeholder="请输入金额"></x-input>
          <x-textarea v-model="reason" placeholder="请输入申请理由" autosize></x-textarea>
          <div class="upload-wrapper">
            <p class="upload-title">上传票据</p>
            <img-picker></img-picker>
          </div>
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
import {ImgPicker} from 'hae'
export default {
  data () {
    return {
      name:'',
      money:'',
      reason:'',
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
    ImgPicker,
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
      var regMoney = /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/
      if(!this.name.trim()) {
        hae.toast({
          title:'请输入姓名'
        });
        return;
      } 
      if(!regMoney.test(this.money)) {
        hae.toast({
          title:'金额输入有误'
        });
        return;
      }
      if(!this.reason.trim()) {
        hae.toast({
          title:'请输入申请理由'
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
  .upload-wrapper {
    padding: 10px 15px;
  }
  p.upload-title {
    padding: 10px 0;
    position: relative;
  }
  p.upload-title::before  {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    background-color: #D9D9D9;
    transform-origin: 0 0;
    transform: scaleY(0.5);
  }
</style>