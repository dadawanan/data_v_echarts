<template>
  <!-- Y轴柱状图 -->
  <div ref="echart"  style="width:100%;height:100%"></div>
</template>
<script>
let echarts = require('echarts/lib/echarts')
// 引入饼图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
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
      // let _this = this;
      var data = this.optiondata.data
      var titlename = this.optiondata.titlename
      var myColor = this.optiondata.color
      const option = {
        grid: {
          right: '1%',
          left: '15%',
          top: '25%',
          bottom: '10%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            lineStyle: {
              opacity: 0
            }
          }
        },
        yAxis: {
          splitLine: {
            show: false,
            lineStyle: {
              color: '#40A1EA', // 网格横线颜色
              width: 1,
              type: 'solid'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#fff',
              fontSize: 28 // 坐标值得具体的颜色
            }
          },
          axisLine: {
            show: false
          }
        },
        xAxis: [{
          show: true,
          data: titlename,
          inverse: true,
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#fff',
              fontSize: 28 // 坐标值得具体的颜色
            }
          }

        }],
        series: [{
          name: '数量',
          type: 'bar',
          yAxisIndex: 0,
          data: data,
          barWidth: '15%',
          itemStyle: {
            normal: {
              barBorderRadius: 30,
              color: function (params) {
                var num = myColor.length
                return myColor[params.dataIndex % num]
              }
            }
          },
          label: {
            normal: {
              show: false,
              position: 'inside',
              formatter: '{c}%'
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
