<template>
<div  style="display:flex;height:100%">
  <mapCity style="width:30%;height:100%" :mapChart="mapChart"></mapCity>
  <div  style="display:flex;flex-direction:column;width:70%">
    <div  style="height:30%">
        <div class="listing-section" style="height:90%" v-if='childdata.typeName==="检测预警"' key='1'>
        <div class="listing-section-kernel">
          <div class="section-header position-absolute">
            <div class="section-title">危害因子预警</div>
            <div class="section-tip"></div>
          </div>
          <div class="section-chart">
              <barwarn :optiondata="optiondata"></barwarn>
              <factorypie></factorypie>
          </div>
        </div>
      </div>
      <div class="listing-section" style="height:90%;display:flex" v-if='childdata.typeName==="网络流通预警"' key='2'>
        <div class="listing-section-kernel" style="width:50%">
          <div class="section-header position-absolute">
            <div class="section-title">危害因子预警</div>
            <div class="section-tip"></div>
          </div>
          <div class="section-chart">
              <ybarwarn :optiondata="ybardata"></ybarwarn>
          </div>
        </div>
        <div class="listing-section-kernel" style="width:50%">
          <div class="section-header position-absolute">
            <div class="section-title">危害因子预警</div>
            <div class="section-tip"></div>
          </div>
          <div class="section-chart">
              <ybarwarn :optiondata="ybardata"></ybarwarn>
          </div>
        </div>
      </div>
      <div class="listing-section" style="height:90%;display:flex" v-if='childdata.typeName==="快检预警"' key='3'>
        <div class="listing-section-kernel" style="width:50%">
          <div class="section-header position-absolute">
            <div class="section-title">快检区域预警</div>
            <div class="section-tip"></div>
          </div>
          <div class="section-chart">
              <ybarwarn :optiondata='ybardata1'></ybarwarn>
          </div>
        </div>
        <div class="listing-section-kernel" style="width:50%">
          <div class="section-header position-absolute">
            <div class="section-title">快检产品预警</div>
            <div class="section-tip"></div>
          </div>
          <div class="section-chart">
              <barwarn :optiondata="optiondata1"></barwarn>
          </div>
        </div>
      </div>
    </div>
    <detailtable style="height:70%"></detailtable>
  </div>
  <div style="height: 10rem;
    width: 23rem;
    position: absolute;
    top:18rem;
    left:48rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;">
    <span style="color:#fff;font-size:2.5rem">{{childdata.typeName}}</span>
    <odometer :num='106'></odometer>
  </div>
</div>
</template>
<script>
import mapCity from '../echarts/mapCity'
import detailtable from '../table/detailtable'
import factorypie from '../echarts/factorpie'
import barwarn from '../echarts/barwan'
import odometer from '../echarts/odometer'
import ybarwarn from '../echarts/yabrwarn'
export default {
  data () {
    return {
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
      },
      optiondata: {
        data: [10, 20, 30, 40, 50],
        titlename: ['一级', '二级', '三级', '四级', '标签'],
        color: ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6']
      },
      optiondata1: {
        data: [10, 20, 30, 40, 50],
        titlename: ['一级', '二级', '三级', '四级', '标签'],
        color: ['rgb(216,87,146)']
      },
      ybardata: {
        ydata: ['DZ0175', 'DZ6027', 'D83876', 'DZ1377', 'DZ8825'],
        seriesdata: [11, 33, 77, 39, 55],
        color: 'rgba(35, 44, 119, 0.5)'
      },
      ybardata1: {
        ydata: ['DZ0175', 'DZ6027', 'D83876', 'DZ1377', 'DZ8825'],
        seriesdata: [11, 33, 77, 39, 55],
        color: 'rgba(35, 44, 119, 0)'
      }
    }
  },
  components: {
    mapCity,
    detailtable,
    factorypie,
    barwarn,
    odometer,
    ybarwarn
  },
  mounted () {
  },
  methods: {
  },
  computed: {
    childdata () {
      return this.$store.state.optiondata
    }
  }
}
</script>
<style>

</style>
