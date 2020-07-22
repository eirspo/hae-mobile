<template>
  <div>
    <pagination :total="total"></pagination>
  </div>
</template>
<script>
import { Pagination } from 'hae'
export default {
  data () {
    return {
      total: 10
    }
  },
  components: {
    Pagination
  }
}
</script>