<template>
    <div ref="chartMap" class="chartMap" :style="{width:'100%',height:'100%'}"  ></div>
</template>

<script>
import ningbo from '../../../public/ningbo.json'
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入地图组件
require('echarts/lib/chart/map')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/visualMap')
export default {
  name: 'fast_map',
  data () {
    return {
      option: {
        tooltip: {
          trigger: 'item',
          textStyle: {
            fontSize: 26
          },
          formatter: '{b}<br/>不合格数：{c}'
        },
        grid: {
          left: '1%'
        },
        visualMap: {
          min: 1,
          show: false,
          max: 80,
          text: ['高', '低'],
          calculable: true,
          inRange: {
            color: ['rgba(57, 154, 255, 1)', 'rgb(26,107,177)', 'rgb(7,69,121)']
          }
        },
        series: [
          {
            name: '快检数据',
            type: 'map',
            map: 'ningbo',
            mapType: '宁波市',
            zoom: 1.2,
            itemStyle: {
              normal: {
                borderColor: 'rgba(50, 168, 238, 0.69)',
                borderWidth: 5,
                areaColor: 'rgba(6, 58, 122, 1)',
                fontWeightL: 700,
                label: { show: true }
              },
              emphasis: { label: { show: true } }
            },
            data: [],
            label: {
              normal: {
                textStyle: {
                  fontSize: 26,
                  color: '#fff'
                }
              }
            }
          }
        ]
      }
    }
  },
  props: {
    mapChart: {
      type: Object
    }
  },
  async mounted () {
    await setTimeout(() => {
      this.drawMap()
      // let that = this;
    }, 0)
  },
  methods: {
    drawMap () {
      this.chart = echarts.init(this.$refs.chartMap)
      echarts.registerMap('ningbo', ningbo)
      this.option.series[0].data = this.mapChart.data
      this.chart.setOption(this.option, true)
      let that = this
      window.addEventListener('resize', function () {
        that.chart.resize()
      })
    },
    resize () {
      this.chart.resize()
    }
  },
  computed: {
    centerDialogVisible1 () {
      return this.$store.state.centerDialogVisible1
    }
  },
  watch: {
    mapChart: {
      handler: function () {
        this.drawMap()
      },
      deep: true
      // immediate: true
    },
    centerDialogVisible1: {
      handler: function () {
        this.resize()
      }
    }
  }
}
</script>

<style>

</style>
