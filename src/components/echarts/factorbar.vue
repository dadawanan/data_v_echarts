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
      const data = this.optiondata.data
      var xData = []
      var yData = []
      data.map(function (a, b) {
        if (a.name) {
          xData.push(a.name)
          if (a.value === 0) {
            yData.push(a.value)
          } else {
            yData.push(a.value)
          }
        }
      })
      let bacData = new Array(xData.length)
      bacData.fill('100')
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            lineStyle: {
              opacity: 0
            }
          },
          textStyle: {
            fontSize: 26
          },
          formatter: function (prams) {
            return prams[0].axisValue + ':' + prams[0].data
          }
        },
        legend: {
          show: false
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          top: '7%',
          height: '85%',
          containLabel: true,
          z: 22
        },
        xAxis: [{
          type: 'category',
          gridIndex: 0,
          data: xData,
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {

            lineStyle: {
              color: '#0c3b71'
            }
          },
          axisLabel: {
            show: true,
            color: 'rgb(255,255,255)',
            fontSize: 28,
            lineHeight: 30,
            interval: 0,
            formatter: function (val) {
              let strs = val.split('') // 字符串数组
              let str = ''
              // eslint-disable-next-line no-cond-assign
              for (let i = 0, s; s = strs[i++];) { // 遍历字符串数组
                str += s
                if (!(i % 2)) str += '\n' // 按需要求余
              }
              return str
            }
          }
        }],
        yAxis: [{
          type: 'value',
          nameTextStyle: {
            color: 'rgb(170,170,170)'
          },
          gridIndex: 0,
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#0c3b71'
            }
          },
          axisLabel: {
            color: 'rgb(255,255,255)',
            formatter: '{value}',
            fontSize: 28
          }
        },
        {
          type: 'value',
          gridIndex: 0,
          splitNumber: 12,
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          }
        }
        ],
        series: [{
          name: '合格率',
          type: 'bar',
          barWidth: '30%',
          xAxisIndex: 0,
          yAxisIndex: 0,
          itemStyle: {
            normal: {
              barBorderRadius: 30,
              color: 'rgba(31, 125, 201, 1)'
            }
          },
          data: yData,
          zlevel: 11

        },
        {
          name: '背景',
          type: 'bar',
          barWidth: '30%',
          xAxisIndex: 0,
          yAxisIndex: 1,
          barGap: '-100%',
          data: bacData,
          itemStyle: {
            normal: {
              color: 'rgba(31, 168, 201, 0.2)'
            }
          },
          zlevel: 9
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
    optiondata: {
      handler (newvalue, oldvalue) {
        this.drawLine()
      },
      deep: true
    },
    centerDialogVisible1: {
      handler: function () {
        this.resize()
      }
    }
  }
}
</script>
