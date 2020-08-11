<template>
  <div class="container">
    <x-header style="background-color:#108ee9;">图表</x-header>
    <group>
      <div class="main-content">
        <v-chart :data="data">
          <v-scale x field="date" type="timeCat" mask="MM-DD" />
          <v-scale y field="value" :tick-count="4" :max="300" />
          <v-tooltip show-crosshairs show-value-in-legend />
          <v-area series-field="city" shape="smooth" adjust="stack" />
          <v-line series-field="city" shape="smooth" adjust="stack" />
        </v-chart>
      </div>
    </group>
    <group>
      <v-chart :data="data1">
        <v-bar />
        <v-tooltip :show-item-marker="false" />
      </v-chart>
    </group>
    <group>
      <v-chart :data="data2" prevent-default>
        <v-scale x :tick-count="3" />
        <v-tooltip :show-item-marker="false" show-x-value />
        <v-line />
      </v-chart>
    </group>
    <group>
      <v-chart :data="data3">
        <v-scale y :options="yOptions" />
        <v-tooltip disabled />
        <v-pie :radius="0.85" series-field="name" />
        <v-legend :options="legendOptions" />
      </v-chart>
    </group>
    <group>
      <v-chart :data="data4">
        <v-scale x type="timeCat" mask="MM/DD" :tick-count="3" />
        <v-scale y :min="0" alias="日均温度" :tick-count="5" />
        <v-point
          :style="{
          stroke: '#fff',
          lineWidth: 1
        }"
          shape="smooth"
        />
        <v-line shape="smooth" />
      </v-chart>
    </group>
  </div>
</template>
<script>
import { XHeader } from "hae";
import { Group } from "hae";
import { VChart } from "hae";
import { VLine } from "hae";
import { VArea } from "hae";
import { VTooltip } from "hae";
import { VLegend } from "hae";
import { VScale } from "hae";
import { VBar } from "hae";
import { VPie } from "hae";
import { VPoint } from "hae";
const map = {
  芳华: "40%",
  妖猫传: "20%",
  机器之血: "18%",
  心理罪: "15%",
  寻梦环游记: "5%",
  其他: "2%",
};
export default {
  data() {
    return {
      data: [
        { value: 63.4, city: "New York", date: "2011-10-01" },
        { value: 62.7, city: "Alaska", date: "2011-10-01" },
        { value: 72.2, city: "Austin", date: "2011-10-01" },
        { value: 58, city: "New York", date: "2011-10-02" },
        { value: 59.9, city: "Alaska", date: "2011-10-02" },
        { value: 67.7, city: "Austin", date: "2011-10-02" },
        { value: 53.3, city: "New York", date: "2011-10-03" },
        { value: 59.1, city: "Alaska", date: "2011-10-03" },
        { value: 69.4, city: "Austin", date: "2011-10-03" },
        { value: 55.7, city: "New York", date: "2011-10-04" },
        { value: 58.8, city: "Alaska", date: "2011-10-04" },
        { value: 68, city: "Austin", date: "2011-10-04" },
        { value: 64.2, city: "New York", date: "2011-10-05" },
        { value: 58.7, city: "Alaska", date: "2011-10-05" },
        { value: 72.4, city: "Austin", date: "2011-10-05" },
        { value: 58.8, city: "New York", date: "2011-10-06" },
        { value: 57, city: "Alaska", date: "2011-10-06" },
        { value: 77, city: "Austin", date: "2011-10-06" },
        { value: 57.9, city: "New York", date: "2011-10-07" },
        { value: 56.7, city: "Alaska", date: "2011-10-07" },
        { value: 82.3, city: "Austin", date: "2011-10-07" },
        { value: 61.8, city: "New York", date: "2011-10-08" },
        { value: 56.8, city: "Alaska", date: "2011-10-08" },
        { value: 78.9, city: "Austin", date: "2011-10-08" },
        { value: 69.3, city: "New York", date: "2011-10-09" },
        { value: 56.7, city: "Alaska", date: "2011-10-09" },
        { value: 68.8, city: "Austin", date: "2011-10-09" },
        { value: 71.2, city: "New York", date: "2011-10-10" },
        { value: 60.1, city: "Alaska", date: "2011-10-10" },
        { value: 68.7, city: "Austin", date: "2011-10-10" },
        { value: 68.7, city: "New York", date: "2011-10-11" },
        { value: 61.1, city: "Alaska", date: "2011-10-11" },
        { value: 70.3, city: "Austin", date: "2011-10-11" },
        { value: 61.8, city: "New York", date: "2011-10-12" },
        { value: 61.5, city: "Alaska", date: "2011-10-12" },
        { value: 75.3, city: "Austin", date: "2011-10-12" },
        { value: 63, city: "New York", date: "2011-10-13" },
        { value: 64.3, city: "Alaska", date: "2011-10-13" },
        { value: 76.6, city: "Austin", date: "2011-10-13" },
        { value: 66.9, city: "New York", date: "2011-10-14" },
        { value: 67.1, city: "Alaska", date: "2011-10-14" },
        { value: 66.6, city: "Austin", date: "2011-10-14" },
        { value: 61.7, city: "New York", date: "2011-10-15" },
        { value: 64.6, city: "Alaska", date: "2011-10-15" },
        { value: 68, city: "Austin", date: "2011-10-15" },
        { value: 61.8, city: "New York", date: "2011-10-16" },
        { value: 61.6, city: "Alaska", date: "2011-10-16" },
        { value: 70.6, city: "Austin", date: "2011-10-16" },
        { value: 62.8, city: "New York", date: "2011-10-17" },
        { value: 61.1, city: "Alaska", date: "2011-10-17" },
        { value: 71.1, city: "Austin", date: "2011-10-17" },
        { value: 60.8, city: "New York", date: "2011-10-18" },
        { value: 59.2, city: "Alaska", date: "2011-10-18" },
        { value: 70, city: "Austin", date: "2011-10-18" },
        { value: 62.1, city: "New York", date: "2011-10-19" },
        { value: 58.9, city: "Alaska", date: "2011-10-19" },
        { value: 61.6, city: "Austin", date: "2011-10-19" },
        { value: 65.1, city: "New York", date: "2011-10-20" },
        { value: 57.2, city: "Alaska", date: "2011-10-20" },
        { value: 57.4, city: "Austin", date: "2011-10-20" },
        { value: 55.6, city: "New York", date: "2011-10-21" },
        { value: 56.4, city: "Alaska", date: "2011-10-21" },
        { value: 64.3, city: "Austin", date: "2011-10-21" },
        { value: 54.4, city: "New York", date: "2011-10-22" },
        { value: 60.7, city: "Alaska", date: "2011-10-22" },
        { value: 72.4, city: "Austin", date: "2011-10-22" },
        { value: 54.4, city: "New York", date: "2011-10-23" },
        { value: 65.1, city: "Alaska", date: "2011-10-23" },
        { value: 72.4, city: "Austin", date: "2011-10-23" },
        { value: 54.8, city: "New York", date: "2011-10-24" },
        { value: 60.9, city: "Alaska", date: "2011-10-24" },
        { value: 72.5, city: "Austin", date: "2011-10-24" },
        { value: 57.9, city: "New York", date: "2011-10-25" },
        { value: 56.1, city: "Alaska", date: "2011-10-25" },
        { value: 72.7, city: "Austin", date: "2011-10-25" },
        { value: 54.6, city: "New York", date: "2011-10-26" },
        { value: 54.6, city: "Alaska", date: "2011-10-26" },
        { value: 73.4, city: "Austin", date: "2011-10-26" },
        { value: 54.4, city: "New York", date: "2011-10-27" },
        { value: 56.1, city: "Alaska", date: "2011-10-27" },
        { value: 70.7, city: "Austin", date: "2011-10-27" },
        { value: 42.5, city: "New York", date: "2011-10-28" },
        { value: 58.1, city: "Alaska", date: "2011-10-28" },
        { value: 56.8, city: "Austin", date: "2011-10-28" },
        { value: 40.9, city: "New York", date: "2011-10-29" },
        { value: 57.5, city: "Alaska", date: "2011-10-29" },
        { value: 51, city: "Austin", date: "2011-10-29" },
        { value: 38.6, city: "New York", date: "2011-10-30" },
        { value: 57.7, city: "Alaska", date: "2011-10-30" },
        { value: 54.9, city: "Austin", date: "2011-10-30" },
        { value: 44.2, city: "New York", date: "2011-10-31" },
        { value: 55.1, city: "Alaska", date: "2011-10-31" },
        { value: 58.8, city: "Austin", date: "2011-10-31" },
        { value: 49.6, city: "New York", date: "2011-11-01" },
        { value: 57.9, city: "Alaska", date: "2011-11-01" },
        { value: 62.6, city: "Austin", date: "2011-11-01" },
        { value: 47.2, city: "New York", date: "2011-11-02" },
        { value: 64.6, city: "Alaska", date: "2011-11-02" },
        { value: 71, city: "Austin", date: "2011-11-02" },
      ],
      data1: [
        { year: "1951 年", sales: 38 },
        { year: "1952 年", sales: 52 },
        { year: "1956 年", sales: 61 },
        { year: "1957 年", sales: 145 },
        { year: "1958 年", sales: 48 },
        { year: "1959 年", sales: 38 },
        { year: "1960 年", sales: 38 },
        { year: "1962 年", sales: 38 },
      ],
      data2: [
        { date: "2017-06-05", value: 116 },
        { date: "2017-06-06", value: 129 },
        { date: "2017-06-07", value: 135 },
        { date: "2017-06-08", value: 86 },
        { date: "2017-06-09", value: 73 },
        { date: "2017-06-10", value: 85 },
        { date: "2017-06-11", value: 73 },
        { date: "2017-06-12", value: 68 },
        { date: "2017-06-13", value: 92 },
        { date: "2017-06-14", value: 130 },
        { date: "2017-06-15", value: 245 },
        { date: "2017-06-16", value: 139 },
        { date: "2017-06-17", value: 115 },
        { date: "2017-06-18", value: 111 },
        { date: "2017-06-19", value: 309 },
        { date: "2017-06-20", value: 206 },
        { date: "2017-06-21", value: 137 },
        { date: "2017-06-22", value: 128 },
        { date: "2017-06-23", value: 85 },
        { date: "2017-06-24", value: 94 },
        { date: "2017-06-25", value: 71 },
        { date: "2017-06-26", value: 106 },
        { date: "2017-06-27", value: 84 },
        { date: "2017-06-28", value: 93 },
        { date: "2017-06-29", value: 85 },
        { date: "2017-06-30", value: 73 },
        { date: "2017-07-01", value: 83 },
        { date: "2017-07-02", value: 125 },
        { date: "2017-07-03", value: 107 },
        { date: "2017-07-04", value: 82 },
        { date: "2017-07-05", value: 44 },
        { date: "2017-07-06", value: 72 },
        { date: "2017-07-07", value: 106 },
        { date: "2017-07-08", value: 107 },
        { date: "2017-07-09", value: 66 },
        { date: "2017-07-10", value: 91 },
        { date: "2017-07-11", value: 92 },
        { date: "2017-07-12", value: 113 },
        { date: "2017-07-13", value: 107 },
        { date: "2017-07-14", value: 131 },
        { date: "2017-07-15", value: 111 },
        { date: "2017-07-16", value: 64 },
        { date: "2017-07-17", value: 69 },
        { date: "2017-07-18", value: 88 },
        { date: "2017-07-19", value: 77 },
        { date: "2017-07-20", value: 83 },
        { date: "2017-07-21", value: 111 },
        { date: "2017-07-22", value: 57 },
        { date: "2017-07-23", value: 55 },
        { date: "2017-07-24", value: 60 },
      ],
      legendOptions: {
        position: "right",
        itemFormatter(val) {
          return val + "  " + map[val];
        },
      },
      yOptions: {
        formatter(val) {
          return val * 100 + "%";
        },
      },
      map,
      data3: [
        { name: "芳华", percent: 0.4, a: "1" },
        { name: "妖猫传", percent: 0.2, a: "1" },
        { name: "机器之血", percent: 0.18, a: "1" },
        { name: "心理罪", percent: 0.15, a: "1" },
        { name: "寻梦环游记", percent: 0.05, a: "1" },
        { name: "其他", percent: 0.02, a: "1" },
      ],
      data4: [
        { time: "2016-08-08 00:00:00", tem: 10 },
        { time: "2016-08-08 00:10:00", tem: 22 },
        { time: "2016-08-08 00:30:00", tem: 20 },
        { time: "2016-08-09 00:35:00", tem: 26 },
        { time: "2016-08-09 01:00:00", tem: 20 },
        { time: "2016-08-09 01:20:00", tem: 26 },
        { time: "2016-08-10 01:40:00", tem: 28 },
        { time: "2016-08-10 02:00:00", tem: 20 },
        { time: "2016-08-10 02:20:00", tem: 18 },
      ],
    };
  },
  components: {
    XHeader,
    VChart,
    VLine,
    VArea,
    VTooltip,
    VLegend,
    VScale,
    Group,
    VBar,
    VLine,
    VPie,
    VPoint,
  },
  methods: {},
};
</script>
<style lang="css" scoped>
</style>