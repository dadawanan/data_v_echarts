<template>
  <div class="mid">
    <div class="top-section">
      <num :typeName='"检测预警"' :num='number.countr'></num>
      <num :typeName='"快检预警"' :num='number.countd'></num>
      <num :typeName='"网络流通预警"' :num='number.countv'></num>
      <num :typeName='"舆情预警"' :num='number.countp'></num>
      <num :typeName='"趋势预警"' num='0'></num>
    </div>
    <bMap  :mapChart="mapChart" style="height:90%;"></bMap>
    <div class="listing-section" style="position:absolute;bottom:15rem;right:-4rem;width:25%">
        <div class="listing-section-kernel">
          <div class="section-header" style="justify-content:flex-start">
            <div class="section-tip"></div>
          </div>
          <div class="section-yload">
            <div class="data_v">
              <img src="../../image/report.png">
              <div class="data_report">
                <span style="color:rgba(35, 133, 246, 1)">快检报告数</span>
                <countTo class="count_num" :startVal='0' :endVal='countnum.quickCheck' :duration='3000'></countTo>
              </div>
            </div>
             <div class="data_v">
              <img src="../../image/country.png">
              <div class="data_report">
                <span style="color:rgba(247, 181, 0, 1)">全国报告数</span>
                <countTo class="count_num" :startVal='0' :endVal='countnum.wholeCountry' :duration='3000'></countTo>
              </div>
            </div>
             <div class="data_v">
              <img src="../../image/net.png">
              <div class="data_report">
                <span style="color:rgba(31, 210, 206, 1)">互联网流通数</span>
                <countTo class="count_num" :startVal='0' :endVal='countnum.circulation' :duration='3000'></countTo>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="position:absolute;bottom:10rem;left:10rem;display:flex;flex-direction:column;align-items:center;height: 7rem;justify-content: space-around;">
        <div style="width:3rem;height:3rem;border-radius:3rem;background:rgba(239, 123, 41, 1)"></div>
        <span style="color:#fff;font-size:2rem">全国地图</span>
      </div>

  </div>
</template>
<script>
import countTo from 'vue-countup-v2'
import num from '../../components/num'
import bMap from '../../components/echarts/bMap'
import { getDataProfile } from '@/api'
import { getLatyear } from '@/util'
export default {
  data () {
    return {

      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      },
      countnum: {
        quickCheck: 0,
        wholeCountry: 0,
        circulation: 0
      },
      mapChart: {
        areaName: '',
        geoCoordMap: {},
        namearr: ['检查总数', '合格总数', '不合格总数', '合格率', '不合格率'],
        data: [
          { 'name': '海曙区', 'value': 2 },
          { 'name': '江北区', 'value': 50 },
          { 'name': '镇海区', 'value': 40 },
          { 'name': '北仑区', 'value': 14 },
          { 'name': '鄞州区', 'value': 60 },
          { 'name': '奉化区', 'value': 70 },
          { 'name': '余姚市', 'value': 50 },
          { 'name': '慈溪市', 'value': 40 },
          { 'name': '宁海县', 'value': 12 },
          { 'name': '象山县', 'value': 50 },
          { 'name': '杭州湾', 'value': 30 }, { 'name': '大榭', 'value': 60 },
          { 'name': '高新区', 'value': 10 }, { 'name': '东钱湖', 'value': 0 },
          { 'name': '保税区', 'value': 80 }]
      }
    }
  },
  props: {
    number: Object
  },
  components: {
    bMap,
    countTo,
    num
  },
  mounted () {
    getDataProfile('', getLatyear().start, getLatyear().end).then(res => {
      this.countnum = res
    })
  }
}
</script>
<style>
.section-yload{
  display: flex;
  flex-direction: column;
}
.data_v{
  display: flex;
  justify-content:center;
  align-items: center;
  padding: 1rem
}
.data_report{
  display: flex;
  flex-direction: column;
  width: 14rem;
  color: #ffffff;
  padding: 1rem;
  margin-left:1rem
}
.data_report span{
  font-size: 2rem
}
.data_report .count_num{
  font-size: 3rem
}
.top-section{
display:flex;
width:90%;
justify-content:space-around;
border: 1px solid rgba(2,23,65,0.34);
box-shadow: 0px 0px 7px 0px rgba(98,134,246,0.35);
border-radius: 4px;
align-items: center;
height: 7%;
margin-top: 4%;
}

</style>
