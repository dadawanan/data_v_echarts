<template>
  <!-- Y轴柱状图 -->
  <div ref="echart"  style="width:100%;height:100%" @click="routeto"></div>
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
      let len = new Array(this.optiondata.xdata.length)
      len.fill(1)
      let option = {
        'color': ['#3cefff'],
        tooltip: {
          show: false,
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          textStyle: {
            fontSize: 25
          }
        },
        grid: {
          top: '8%',
          left: '1%',
          right: '1%',
          bottom: '3%',
          containLabel: true
        },
        'xAxis': [{
          'type': 'category',
          'data': this.optiondata.xdata,
          'axisTick': {
            'alignWithLabel': true
          },
          offset: 20,
          'axisLine': {
            show: false,
            'lineStyle': {
              'color': '#82b0ec'
            }
          },
          nameGap: 20,
          'axisLabel': {
            'textStyle': {
              'color': '#fff',
              fontSize: 26
            },
            lineHeight: 35,
            interval: 0,
            formatter: function (val) {
              let strs = val.split('') // 字符串数组
              let str = ''
              // eslint-disable-next-line no-cond-assign
              for (let i = 0, s; s = strs[i++];) { // 遍历字符串数组
                str += s
                if (!(i % 3)) str += '\n' // 按需要求余
              }
              return str
            }
          }
        }],
        'yAxis': [{
          'type': 'value',
          'axisLabel': {
            'textStyle': {
              'color': 'rgba(237, 237, 237, 1)',
              fontSize: 26
            },
            'formatter': '{value}'
          },
          'splitLine': {
            'lineStyle': {
              'color': '#0c2c5a'
            }
          },
          'axisLine': {
            'show': false
          }
        }],
        'series': [ {
          'type': 'bar',
          'itemStyle': {
            'normal': {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(3, 199, 245, 0.38)' // 0% 处的颜色
              }, {
                offset: 1,
                color: 'rgba(3, 199, 245, 0)' // 100% 处的颜色
              }], false)
            }
          },
          'label': {
            'normal': {
              'show': true,
              'position': 'top',
              padding: 10,
              fontSize: 26,
              color: '#fff'
            }
          },
          stack: '总量',
          'barWidth': '50',
          'data': this.optiondata.seriesdata

        }, {
          'name': '',
          'type': 'bar',
          'symbolPosition': 'end',
          stack: '总量',
          'data': len
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
    routeto () {
      this.$store.state.centerDialogVisible = true
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
