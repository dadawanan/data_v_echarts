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
    optiondata: Object
  },
  methods: {
    drawLine () {
      const option = {
        grid: {
          show: 'true',
          borderWidth: '0',
          height: '85%',
          width: '80%',
          x: '12%',
          top: '1%',
          bottom: '1%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: '{b0}: {c0}'
        },
        xAxis: {
          show: true, // 是否显示x轴
          type: 'value',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff', // y轴字体颜色
              fontSize: 28
            }
          },
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: 'rgba(54, 127, 252, 1)'
            }
          }//
        },
        yAxis: {
          type: 'category',
          inverse: false, // 让y轴数据逆向
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff', // y轴字体颜色
              fontSize: 28
            }
          },
          splitLine: { show: false }, // 横向的线
          axisTick: { show: false }, // y轴的端点
          axisLine: {
            show: true,
            symbol: ['none', 'arrow'],
            lineStyle: {
              color: 'rgba(54, 127, 252, 1)'
            }
          }, // y轴的线
          data: this.optiondata.ydata
        },
        series: [
          {
            name: '数据内框',
            type: 'bar',
            itemStyle: {
              normal: {
                barBorderRadius: [1, 30, 30, 1],
                color: 'rgba(0, 87, 254, 0.9)'
              }
            },

            barWidth: 30,
            data: this.optiondata.seriesdata
          },
          {
            name: '外框',
            type: 'bar',
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: this.optiondata.color // rgba设置透明度0.14
              }
            },
            barGap: '-100%',
            z: 0,
            barWidth: 30,
            data: [100, 100, 100, 100, 100]
          }
        ]
      }

      this.myChart = echarts.init(this.$refs.echart)
      // 绘制图表
      this.myChart.setOption(option, true)
      let that = this
      window.addEventListener('resize', function () {
        that.myChart.resize()
      })
    },
    resize () {
      this.myChart.resize()
    }
  },
  computed: {
    centerDialogVisible1 () {
      return this.$store.state.centerDialogVisible1
    }
  },
  watch: {
    centerDialogVisible1: {
      handler: function () {
        this.resize()
      }
    },
    optiondata: {
      handler (newvalue, oldvalue) {
        this.drawLine()
      },
      deep: true
    }
  }
}
</script>
