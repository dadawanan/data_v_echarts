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
      let sum = 0
      this.optiondata.data.forEach(item => {
        sum += parseInt(item.value)
      })
      const option = {
        tooltip: {
          trigger: 'item',
          textStyle: {
            fontSize: 26
          },
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: '5%',
          itemGap: 20,
          top: '15%',
          icon: 'circle',
          itemHeight: 30,
          itemWidth: 30,
          textStyle: {
            fontSize: 26,
            color: '#fff'
          },
          data: this.optiondata.xdata
        },
        calculable: true,
        series: [

          {
            name: '',
            type: 'pie',
            radius: [0, 220],
            center: ['35%', '50%'],
            roseType: 'area',
            label: {
              normal: {
                show: true,
                formatter: function (params) {
                  let percent = (params.value * 100 / sum).toFixed(1) + '%'
                  return percent
                },
                textStyle: {
                  fontSize: 26
                },
                position: 'outside'
              },
              emphasis: {
                show: true
              }
            },
            color: ['rgba(255, 165, 32, 1)', 'rgba(237, 97, 121, 1)', 'rgba(92, 188, 250, 1)', 'rgba(152, 96, 230, 1)', 'rgba(0, 204, 205, 1)', 'rgba(215, 215, 215, 1)'],
            data: this.optiondata.data
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
