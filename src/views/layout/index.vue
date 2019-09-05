<template>
<div  class="bot_body listing">
  <left-content :number="number"></left-content>
  <mid-content :number="number"></mid-content>
  <right-content></right-content>
</div>
</template>

<script>
import leftContent from '@/views/layout/leftContent.vue'
import midContent from '@/views/layout/midContent.vue'
import rightContent from '@/views/layout/rightContent.vue'
import { getQuantitativeStatistics } from '@/api'
import { getLatyear } from '@/util'
export default {
  components: {
    leftContent,
    midContent,
    rightContent
  },
  data () {
    return {
      number: {
        countr: '0',
        countp: '0',
        countv: '0',
        countd: '0'
      }
    }
  },
  mounted () {
    getQuantitativeStatistics('', getLatyear().start, getLatyear().end).then(res => {
      this.number = res
    })
  }
}
</script>

<style>
</style>
