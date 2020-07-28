<template>
  <div>
    <v-chart
      ref="demo"
      :data="data">
      <v-bar />
      <v-tooltip :show-item-marker="false" />
    </v-chart>
  </div>
</template>

<script>
import { VChart } from 'hae'
import { VLine } from 'hae'
import { VArea } from 'hae'
import { VTooltip } from 'hae'
import { VLegend } from 'hae'
import { VBar } from 'hae'
import { XButton } from 'hae'

export default {
  components: {
    VChart,
    VLine,
    VArea,
    VTooltip,
    VLegend,
    VBar,
    XButton
  },
  data () {
    return {
      data: [
        { year: '1951 年', sales: 38 },
        { year: '1952 年', sales: 52 },
        { year: '1956 年', sales: 61 },
        { year: '1957 年', sales: 145 },
        { year: '1958 年', sales: 48 },
        { year: '1959 年', sales: 38 },
        { year: '1960 年', sales: 38 },
        { year: '1962 年', sales: 38 }
      ]
    }
  }
}
</script>

