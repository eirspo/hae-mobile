<template>
  <div>
    <group>
      <x-switch title="Toggle" v-model="show"></x-switch>
    </group>
    <group>
      <x-switch title="Toggle show-input" v-model="show3"></x-switch>
    </group>
    <group>
      <x-switch title="Set default input value" v-model="show5"></x-switch>
    </group>
    <group>
      <x-switch title="Toggle_android" v-model="show2"></x-switch>
    </group>
    <group>
      <x-switch title="closeOnConfirm=false" v-model="show4"></x-switch>
    </group>
    <group>
      <x-switch title="showCancelButton=false" v-model="show6"></x-switch>
    </group>
    <div v-transfer-dom>
      <confirm v-model="show"
      title="Confirm deleting the item"
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
      @on-show="onShow"
      @on-hide="onHide">
        <p style="text-align:center;">Are you sure?</p>
      </confirm>
    </div>
    <br>
    <div v-transfer-dom>
      <confirm v-model="show3"
      show-input
      title="Confirm deleting the item"
      :input-attrs="{type: 'number'}"
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
      @on-show="onShow"
      @on-hide="onHide">
      </confirm>
    </div>
    <br>
    <div v-transfer-dom>
      <confirm v-model="show5"
      show-input
      ref="confirm5"
      title="Confirm deleting the item"
      @on-cancel="onCancel"
      @on-confirm="onConfirm5"
      @on-show="onShow5"
      @on-hide="onHide">
      </confirm>
    </div>
    <br>
    <div v-transfer-dom>
      <confirm v-model="show2"
      title="Confirm deleting the item"
      theme="android"
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
      @on-show="onShow"
      @on-hide="onHide">
        <p style="text-align:center;">I miss u sunyi</p>
      </confirm>
    </div>
    <br>
    <div v-transfer-dom>
      <confirm
      v-model="show4"
      :close-on-confirm="false"
      title="Confirm deleting the item"
      @on-confirm="onConfirm4">
        <p style="text-align:center;">Are you sure?</p>
      </confirm>
    </div>
    <br>
    <div v-transfer-dom>
      <confirm
      v-model="show6"
      :show-cancel-button="false"
      title="Confirm deleting the item"
      @on-confirm="onConfirm">
        <p style="text-align:center;">Are you sure?</p>
      </confirm>
    </div>
  </div>
</template>

<script>
import { Confirm } from 'hae'
import { Group } from 'hae'
import { XSwitch } from 'hae'
import { XButton } from 'hae'
import { TransferDomDirective } from 'hae'
import { TransferDomDirective as TransferDom } from 'hae'
export default {
  directives: {
    TransferDom
  },
  components: {
    Confirm,
    Group,
    XSwitch,
    XButton
  },
  data () {
    return {
      show: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false
    }
  },
  methods: {
    onCancel () {
      console.log('on cancel')
    },
    onConfirm (msg) {
      console.log('on confirm')
      if (msg) {
        alert(msg)
      }
    },
    onConfirm4 () {
      this.show4 = false
    },
    onHide () {
      console.log('on hide')
    },
    onShow () {
      console.log('on show')
    },
    onShow5 () {
      this.$refs.confirm5.setInputValue('default')
    },
    onConfirm5 (value) {
      this.$refs.confirm5.setInputValue('')
    }
  }
}
</script>