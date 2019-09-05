<template>
  <div class="left">
     <div class="listing-section">
        <div class="listing-section-kernel">
          <div class="section-header position-absolute">
            <div class="section-title">统计数据</div>
            <div class="section-tip"></div>
          </div>
          <div class="section-chart" >
             <div class="section-data" :style="{backgroundImage: 'url(' + url + ')'}">
             <div class="statistics" @click="getdata(1)">
               <img  class="sta_img" ref="jianche" src="@/image/jianche.png">
               <div class="updown">
                 <span class="statis_jianche">检测统计</span>
                 <span class="statis_num" style="color: rgba(239, 123, 41, 1);">{{checkwarn}}</span>
               </div>
             </div>
             <div class="statistics" @click="getdata(2)">
               <img  class="sta_img" ref="kaohe" src="@/image/kaohe.png">
               <div class="updown">
                 <span class="statis_jianche">考核统计</span>
                 <span class="statis_num" style="color: rgba(49, 117, 233, 1)">{{gbnum}}</span>
               </div>
             </div>
             <div class="statistics" @click="getdata(3)">
               <img  class="sta_img" ref="yujin" src="@/image/yujin.png">
               <div class="updown">
                 <span class="statis_jianche">预警统计</span>
                 <span class="statis_num" style="color: rgba(30, 231, 201, 1);">{{staticwarn}}</span>
               </div>
             </div>
          </div>
            <ybar :ybardata="ybardata" style="position:absolute;top:16rem;height:25rem"></ybar>
          </div>
        </div>
      </div>
      <div class="listing-section">
        <div class="listing-section-kernel">
          <div class="section-header position-absolute">
            <div class="section-title">近5年检测合格率</div>
            <div class="section-tip"></div>
          </div>
          <div class="section-chart">
               <el-radio-group v-model="radio" @change="radiochange" size="mini" style="height:2rem;position:absolute;right:0;z-index:100">
      <el-radio-button label="0">批次数</el-radio-button>
      <el-radio-button label="1">项次数</el-radio-button>
      <el-radio-button label="2">合格率</el-radio-button>
    </el-radio-group>
            <redline :optiondata="linedata" style="height:90%;margin:2%"></redline>
          </div>
        </div>
      </div>
            <div class="listing-section">
        <div class="listing-section-kernel">
          <div class="section-header position-absolute">
            <div class="section-title">大宗食品不合格数统计</div>
            <div class="section-tip"></div>
          </div>
          <div class="section-chart">
            <unableunit :optiondata="fooddata"></unableunit>
          </div>
        </div>
      </div>

  </div>
</template>
<script>
import ybar from '../../components/echarts/ybar'
import unableunit from '../../components/echarts/unableunit'
import redline from '../../components/echarts/redline'
import { getDetectionStatistics, getDetectionStatisticsTimingRequest, getPopularFoodIsNotUpToStandard, getFiveYearEligibilityRate } from '@/api'
import { getLatyear } from '@/util'
export default {
  data () {
    return {
      url: '',
      radio: '0',
      ybardata: {
        xdata: ['报告总数', '当年报告总数', '当前任务数', '当年公布数'],
        ydata: []
      },
      querydata: [],
      fooddata: {
        xdata: [],
        seriesdata: []
      },
      linedata: {
        xdata: [],
        seriesdata: []
      },
      checkwarn: null,
      gbnum: null
    }
  },
  props: {
    number: Object
  },
  computed: {
    staticwarn () {
      return Object.values(this.number).reduce(function (a, b) {
        return parseInt(a) + parseInt(b)
      }, 0)
    }
  },
  mounted () {
    this.getdata(1)
    getPopularFoodIsNotUpToStandard('', getLatyear().start, getLatyear().end).then(res => {
      res.forEach(element => {
        this.fooddata.xdata.push(element.name)
        this.fooddata.seriesdata.push(element.count)
      })
    })
    getFiveYearEligibilityRate('', getLatyear().start, getLatyear().end).then(res => {
      this.querydata = res.list
      this.linedata.xdata = res.xAxisData
      this.linedata.seriesdata = res.list[0].data
    })
  },
  components: {
    ybar,
    unableunit,
    redline
  },
  methods: {
    getdata (params) {
      if (params === 1) {
        this.url = require('../../image/left.png')
        this.$refs.jianche.style.display = 'none'
        this.$refs.yujin.style.display = 'block'
        this.$refs.kaohe.style.display = 'block'
        this.getcheck()
      } else if (params === 2) {
        this.url = require('../../image/mid.png')
        this.$refs.kaohe.style.display = 'none'
        this.$refs.jianche.style.display = 'block'
        this.$refs.yujin.style.display = 'block'
      } else if (params === 3) {
        this.url = require('../../image/right.png')
        this.$refs.yujin.style.display = 'none'
        this.$refs.kaohe.style.display = 'block'
        this.$refs.jianche.style.display = 'block'
        this.setwarn()
      }
    },
    getcheck () {
      this.ybardata.xdata = ['报告总数', '当年报告总数', '当前任务数', '当年公布数']
      new Promise((resolve, reject) => {
        getDetectionStatisticsTimingRequest('', getLatyear().start, getLatyear().end).then(res => {
          this.checkwarn = res.counts
          this.ybardata.ydata = []
          this.ybardata.ydata.push(res.counts)
          this.ybardata.ydata.push(res.yearNumber)
        })
      }).then(getDetectionStatistics('', getLatyear().start, getLatyear().end).then(res => {
        this.gbnum = res.publish
        this.ybardata.ydata.push(res.task)
        this.ybardata.ydata.push(res.publish)
      }))
    },
    setwarn () {
      this.ybardata.xdata = ['检测预警', '舆情预警', '流通预警', '快检预警']
      this.ybardata.ydata = Object.values(this.number)
    },
    radiochange (value) {
      this.linedata.seriesdata = this.querydata[value].data
    }
  }
}
</script>
<style>
.section-chart .el-radio-button--mini .el-radio-button__inner{
  font-size: 2rem
}
.section-chart .el-radio-button__inner{
  color: #fff;
  background: rgba(0, 0, 0, 0)
}
</style>
