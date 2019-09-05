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
          top: '8%',
          left: '1%',
          right: '1%',
          bottom: '3%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          textStyle: {
            fontSize: 25
          }
        },
        legend: {
          itemGap: 50,
          show: false,
          data: ['注册总量', '最新注册量'],
          textStyle: {
            color: '#f9f9f9',
            borderColor: '#fff'
          }
        },
        xAxis: [{
          type: 'category',
          boundaryGap: true,
          axisLine: { // 坐标轴轴线相关设置。数学上的x轴
            show: false,
            lineStyle: {
              color: 'rgba(60, 172, 246, 1)'
            }
          },
          axisLabel: { // 坐标轴刻度标签的相关设置
            textStyle: {
              color: '#d1e6eb',
              margin: 15
            },
            fontSize: 26
          },
          axisTick: {
            show: false
          },
          data: this.optiondata.xdata
        }],
        yAxis: [{
          type: 'value',
          min: 0,
          // max: 140,
          splitNumber: 7,
          splitLine: {
            show: false,
            lineStyle: {
              color: 'rgba(60, 172, 246, 1)'
            }
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            margin: 20,
            textStyle: {
              color: '#d1e6eb'
            },
            fontSize: 26
          },
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: '注册总量',
          type: 'line',
          showAllSymbol: true,
          symbol: 'emptyCircle',
          symbolSize: 6,
          lineStyle: {
            normal: {
              color: 'rgba(60, 172, 246, 1)' // 线条颜色
            },
            borderColor: '#f0f'
          },
          label: {
            show: false
          },
          itemStyle: {
            color: 'rgba(60, 172, 246, 1)',
            borderColor: 'rgba(60, 172, 246, 1)',
            borderWidth: 5
          },
          tooltip: {
            show: true
          },
          areaStyle: { // 区域填充样式
            normal: {
              // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(192, 50, 28, 0.28)'
              },
              {
                offset: 1,
                color: 'rgba(192, 50, 28, 0)'
              }
              ], false),
              shadowColor: 'rgba(192, 50, 28, 1)', // 阴影颜色
              shadowBlur: 20 // shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
          },
          data: this.optiondata.seriesdata
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
    optiondata: {
      handler (newvalue, oldvalue) {
        this.drawLine()
      },
      deep: true
    }
  }
}
</script>
