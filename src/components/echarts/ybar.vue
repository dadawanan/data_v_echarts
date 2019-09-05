<template>
  <!-- Y轴柱状图 -->
  <div ref="echart"  style="width:100%;height:100%"></div>
</template>
<script>
import echarts from 'echarts'
import 'echarts/theme/macarons'
export default {
  name: 'barWarn',
  data () {
    return {
    }
  },
  mounted () {
    this.drawLine()
  },
  props: {
    ybardata: Object
  },
  methods: {
    drawLine () {
      let len = this.ybardata.xdata.length
      let font
      if (len > 15) {
        font = 20
      } else {
        font = 26
      }
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          textStyle: {
            fontSize: font
          }
        },
        grid: {
          left: '14%',
          top: '1%',
          bottom: '1%'
        },
        yAxis: [{
          type: 'category',
          data: this.ybardata.xdata,
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0.12)'
            }
          },
          axisLabel: {
            margin: 10,
            color: '#e2e9ff',
            textStyle: {
              fontSize: 24
            }
          }
        }],
        xAxis: [{
          axisLabel: {
            show: false,
            formatter: '{value}',
            color: '#e2e9ff'
          },
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0.12)'
            }
          }
        }],
        series: [{
          type: 'bar',
          data: this.ybardata.ydata,
          barWidth: '40%',
          itemStyle: {
            normal: {
              barBorderRadius: [0, 10, 10, 0],
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: 'rgb(14,50,172)' // 0% 处的颜色
              }, {
                offset: 1,
                color: 'rgb(32,160,206)' // 100% 处的颜色
              }], false),
              shadowColor: 'rgba(0,160,221,1)',
              shadowBlur: 4
            }
          }
        }]
      }

      this.myChart = echarts.init(this.$refs.echart)
      // 绘制图表
      this.myChart.setOption(option, true)
      let that = this
      window.addEventListener('resize', function () {
        that.myChart.resize()
      })
    }
  },
  watch: {
    ybardata: {
      handler (newvalue, oldvalue) {
        this.drawLine()
      },
      deep: true
    }
  }
}
</script>
