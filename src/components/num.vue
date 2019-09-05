<template>
  <div style="display:flex;flex-direction:column;cursor:pointer" @click="routeto">
      <span style="color:#fff;font-size:1.5rem;text-align:center">{{typeName}}</span>
      <p style="color:rgba(246, 188, 45, 1);font-size:4rem;font-weight:600;text-align:center">{{num}}</p>
  </div>
</template>
<script>
export default {
  props: {
    num: String,
    typeName: String
  },
  methods: {
    routeto () {
      if (this.typeName === '检测预警') {
        this.$store.state.optiondata.typeName = '检测预警'
        this.$store.state.centerDialogVisible1 = true
      } else if (this.typeName === '网络流通预警') {
        this.$store.state.optiondata.typeName = '网络流通预警'
        this.$store.state.centerDialogVisible1 = true
      } else if (this.typeName === '舆情预警') {
        this.$store.state.centerDialogVisible = true
      } else if (this.typeName === '快检预警') {
        this.$store.state.optiondata.typeName = '快检预警'
        this.$store.state.centerDialogVisible1 = true
      }
    }
  }
}
</script>
<style>

</style>
