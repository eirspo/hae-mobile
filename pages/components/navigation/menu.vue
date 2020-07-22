<template>
  <div class="menu-demo">
    <x-menu @get-result="getResult" :level="level" :dataList="dataList"></x-menu>
    <p>选中{{result}}</p>
  </div>
</template>
<script>
import {XMenu} from 'hae';
export default {
  components: {
    XMenu
  },
  data () {
    return {
      showKey: 'name',
      result: [],
      level: 3,
      dataList: [
        {
          id: 0,
          name: '江苏省',
          children: [
            {
              id: 1,
              name: '宿迁',
              children: [
                {
                  id: 1,
                  name: '泗阳'
                }
              ]
            },
            {
              id: 2,
              name: '淮安'
            }
          ]
        },
        {
          id: 1,
          name: '安徽省'
        },
        {
          id: 2,
          name: '山东省'
        }
      ]
    };
  },
  methods: {
    getResult (res) {
      this.result = res;
    }
  }
};
</script>