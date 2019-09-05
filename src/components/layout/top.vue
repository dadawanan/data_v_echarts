<template>
    <div class="topbar">
      <div class="topbar_font">宁波市食品安全风险分析预警中心</div>
      <div style="position:absolute;top:6.2rem;font-size:2rem;">
        <span class="font_num">{{year}}</span>
        <span>年</span>
        <span class="font_num">{{month}}</span>
        <span>月</span>
        <span class="font_num">{{day}}</span>
        <span>日</span>
        <span style="padding-left:1rem">星期</span>
        <span class="font_num">{{week}}</span>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      year: '',
      month: '',
      day: '',
      week: ''
    }
  },
  mounted () {
    let date = new Date()
    this.year = date.getFullYear()
    this.month = date.getMonth() + 1
    this.day = date.getDate()
    var showDay = ['日', '一', '二', '三', '四', '五', '六']
    this.week = showDay[date.getDay()]
  }
}
</script>
<style>

</style>
