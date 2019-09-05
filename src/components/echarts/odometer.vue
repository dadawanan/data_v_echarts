<template>
  <IOdometer class="iOdometer" :value="data" :format="d"/>
</template>

<script>
import IOdometer from 'vue-odometer'
import 'odometer/themes/odometer-theme-default.css'

export default {
  name: 'odometer',
  components: {
    IOdometer
  },
  data () {
    return {
      d: 'd',
      data: 0
    }
  },
  props: {
    num: {
      type: Number,
      default: 0
    }
  },
  mounted () {
  },
  beforeDestroy () {
    clearInterval(this.intervalId)
  },
  watch: {
    num: {
      handler (newName, oldName) {
        this.data = newName
        const self = this
        self.data = self.num
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style>
.iOdometer {
  height: 3rem;
}
.iOdometer .odometer-inside{
  height: 100%;
}
.iOdometer .odometer-digit{
  margin: 0 10px;
  background: #0d2e64;
  border-radius: 4px;
  border:2px solid #073975
}
.iOdometer .odometer-digit .odometer-digit-spacer,
.iOdometer .odometer-digit .odometer-value{
  color:#fde020;
  padding: 10px 20px;
  line-height: 100px;
  text-align: center;
  font-size: 80px;
  font-family: 'Impact'
}
</style>
