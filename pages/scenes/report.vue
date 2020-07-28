<template>
  <div>
    <x-table full-bordered style="background-color:#fff;">
      <thead>
        <tr>
          <td colspan="3">一季度项目收支情况</td>    
        </tr>
        <tr>
          <th>项目</th>
          <th>收入</th>
          <th>支出</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>项目一</td>
          <td>10000</td>
          <td>30000</td>
        </tr>
        <tr>
          <td>项目二</td>
          <td>100000</td>
          <td>50000</td>
        </tr>
      </tbody>
    </x-table>    
    <group>
      <div>
        <p class="chart-title">一季度项目收入情况</p>
        <v-chart :data="data">
          <v-scale y :options="yOptions" />
          <v-tooltip disabled />
          <v-pie :radius="0.85" series-field="name" />
          <v-legend :options="legendOptions" />
        </v-chart>
      </div>
    </group>
    <group>
      <div>
        <p class="chart-title">一季度项目支出情况</p>
        <v-chart :data="data2">
          <v-scale y :options="yOptions" />
          <v-tooltip disabled />
          <v-pie :radius="0.85" series-field="name" />
          <v-legend :options="legendOptions2" />
        </v-chart>
      </div>
    </group>
  </div>
</template>
<script>

import { XTable } from 'hae'
import { VChart } from 'hae'
import { VLine } from 'hae'
import { VArea } from 'hae'
import { VTooltip } from 'hae'
import { VLegend } from 'hae'
import { VBar } from 'hae'
import { VPie } from 'hae'
import { VScale } from 'hae'
import { Group } from 'hae'
const map = {
  '项目一': '9.1%',
  '项目二': '90.9%'
}
const map2 = {
  '项目一': '37.5%',
  '项目二': '62.5%'
}
export default {
  components: {
    XTable,
    VChart,
    VLine,
    VArea,
    VTooltip,
    VLegend,
    VBar,
    VPie,
    VScale,
    Group
  },
  data() {
    return {
      legendOptions: {
        position: 'right',
        itemFormatter (val) {
          return val + '  ' + map[val]
        }
      },
      legendOptions2: {
        position: 'right',
        itemFormatter (val) {
          return val + '  ' + map2[val]
        }
      },
      yOptions: {
        formatter (val) {
          return val * 100 + '%'
        }
      },
      map,
      data: [
        { name: '项目一', percent: 0.091, a: '1' },
        { name: '项目二', percent: 0.909, a: '1' }
      ],
      data2:[
        { name: '项目一', percent: 0.375, a: '1' },
        { name: '项目二', percent: 0.625, a: '1' }
      ]
    }
  }
}
</script>
<style lang="css" scoped>
  .chart-title {
    text-align: center;
    padding-top: 15px;
  }
</style>