<template>
  <div class="right">
     <div class="listing-section">
        <div class="listing-section-kernel">
          <div class="section-header position-absolute">
            <div class="section-title">千人批次数</div>
            <div class="section-tip"></div>
          </div>
          <div class="section-chart">
            <ybar :ybardata='ybardata'></ybar>
          </div>
        </div>
      </div>
      <div class="listing-section" style="height:60%">
        <div class="listing-section-kernel">
          <div class="section-header position-absolute">
            <div class="section-title">主要危害因子数量统计</div>
            <div class="section-tip"></div>
          </div>
          <div class="section-chart">
            <div style="width:100%">
            <factorpie style="height:51%" :optiondata="factorpiedata"></factorpie>
            <factorbar style="height:51%" :optiondata="factorbardata"></factorbar>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import ybar from '../../components/echarts/ybar'
import factorpie from '../../components/echarts/factorpie'
import factorbar from '../../components/echarts/factorbar'
import { getThousandsOfBatches, gradeHazardDistribution, getHazardFactorStatistics } from '@/api'
import { getLatyear } from '@/util'
export default {
  data () {
    return {
      ybardata: {
        xdata: [],
        ydata: []
      },
      factorpiedata: {
        xdata: [],
        data: []
      },
      factorbardata: {
        xdata: [],
        data: []
      }
    }
  },
  components: {
    ybar,
    factorpie,
    factorbar
  },
  mounted () {
    getThousandsOfBatches('', getLatyear().start, getLatyear().end).then(res => {
      res.forEach(element => {
        this.ybardata.xdata.push(element.varName)
        this.ybardata.ydata.push(element.checkAvg)
      })
    })
    gradeHazardDistribution('', getLatyear().start, getLatyear().end).then(res => {
      this.factorpiedata.data = res.result.map(item => {
        this.factorpiedata.xdata.push(item.name)
        return {
          name: item.name,
          value: item.count
        }
      })
    })
    let date = { type: '', start: getLatyear().start, end: getLatyear().end }
    getHazardFactorStatistics(date, '2').then(res => {
      this.factorbardata.data = res.list.map(item => {
        return {
          name: item.names,
          value: item.counts
        }
      })
    })
  }
}
</script>
<style>
.section-list{
  display: flex;
  justify-content: space-between;
}
.section-bot{
  display: flex;
  color: #fff;
  flex-direction: column;
  background: rgb(2, 8, 18);
  justify-content: space-between;
  width: 20rem;
  height: 5rem;
}
.total{
  width: 35%;
  background:rgb(209,123, 73)
}
.unable{
  width: 35%;
  background:rgb(180,41, 61)
}
.able{
  width: 35%;
  background:rgb(64,201, 182)
}
</style>
