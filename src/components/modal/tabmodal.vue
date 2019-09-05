<template>
  <el-tabs type="border-card" class="tablist">
    <el-tab-pane label="报告内容">
      <el-collapse v-model="activeName" accordion class="collapse">
        <el-collapse-item title="前导信息" name="1">
          <el-row class="row">
            <el-col :span="4" class="label">
              任务来源：
            </el-col>
            <el-col :span="8" >
              <div>1</div>
            </el-col>
            <el-col :span="4" class="label">
              产品类别：
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
          </el-row>
           <el-row class="row">
            <el-col :span="4" class="label">
              检验检测类别:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
            <el-col :span="4" class="label">
              部门特定分类:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
          </el-row>
          <el-row class="row">
            <el-col :span="4" class="label">
              委托单位区域:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
            <el-col :span="4" class="label">
              委托单位区域:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
          </el-row>
             <el-row class="row">
            <el-col :span="4" class="label">
              检测检验机构:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
            <el-col :span="4" class="label">
              报告编号:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="产品信息" name="2">
          <el-row class="row">
            <el-col :span="4" class="label">
              样品名称:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
            <el-col :span="2" class="label">
              商标:
            </el-col>
            <el-col :span="4">
              <div>1</div>
            </el-col>
              <el-col :span="2" class="label">
              样品包装:
            </el-col>
            <el-col :span="4">
              <div>1</div>
            </el-col>
          </el-row>
               <el-row class="row">
            <el-col :span="4" class="label">
              型号规格:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
            <el-col :span="4" class="label">
              样品等级:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
          </el-row>
               <el-row class="row">
            <el-col :span="4" class="label">
              生产单位:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
            <el-col :span="4" class="label">
              委托单位地址:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
          </el-row>
             <el-row class="row">
            <el-col :span="4" class="label">
              生产日期:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
            <el-col :span="4" class="label">
              生产批号:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="环节信息" name="3">
            <el-row class="row">
            <el-col :span="4" class="label">
              受检单位:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
            <el-col :span="4" class="label">
              受检单位区域:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
          </el-row>
                <el-row class="row">
            <el-col :span="4" class="label">
              受检单位地址:
            </el-col>
            <el-col :span="20">
              <div>1</div>
            </el-col>
          </el-row>
               <el-row class="row">
            <el-col :span="4" class="label">
              受检环节:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
            <el-col :span="4" class="label">
              受检主体类别:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="抽样信息" name="4">
              <el-row class="row">
            <el-col :span="4" class="label">
              抽样送检单位:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
            <el-col :span="4" class="label">
              抽样送检地址:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
          </el-row>
            <el-row class="row">
            <el-col :span="4" class="label">
              抽样方法:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
            <el-col :span="4" class="label">
              抽（送）样人:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
          </el-row>
            <el-row class="row">
            <el-col :span="4" class="label">
              抽样地点:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
            <el-col :span="4" class="label">
              抽样日期:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
          </el-row>
          <el-row class="row">
            <el-col :span="4" class="label">
              抽样送检数量:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
            <el-col :span="4" class="label">
              抽样技术:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
          </el-row>
              <el-row class="row">
            <el-col :span="4" class="label">
              样品编号:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
            <el-col :span="4" class="label">
              收样日期:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
          </el-row>
              <el-row class="row">
            <el-col :span="4" class="label">
              抽样状态描述:
            </el-col>
            <el-col :span="20">
              <div>1</div>
            </el-col>
          </el-row>
          <el-row class="row">
            <el-col :span="4" class="label">
              检验检测依据:
            </el-col>
            <el-col :span="20">
              <div>1</div>
            </el-col>
          </el-row>
            <el-row class="row">
            <el-col :span="4" class="label">
              检验检测项目:
            </el-col>
            <el-col :span="20">
              <div>1</div>
            </el-col>
          </el-row>
            <el-row class="row">
            <el-col :span="4" class="label">
              主要仪器设备:
            </el-col>
            <el-col :span="20">
              <div>1</div>
            </el-col>
          </el-row>
            <el-row class="row">
            <el-col :span="4" class="label">
              实验环境条件:
            </el-col>
            <el-col :span="20">
              <div>1</div>
            </el-col>
          </el-row>
            <el-row class="row">
            <el-col :span="4" class="label">
              备注:
            </el-col>
            <el-col :span="20">
              <div>1</div>
            </el-col>
          </el-row>
            <el-row class="row">
            <el-col :span="4" class="label">
              检验检测地点:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
            <el-col :span="4" class="label">
              检测检验日期:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
          </el-row>
            <el-row class="row">
            <el-col :span="4" class="label">
              检测检验结论:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
            <el-col :span="4" class="label">
              编制人:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
          </el-row>
            <el-row class="row">
            <el-col :span="4" class="label">
              批准人:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
            <el-col :span="4" class="label">
              审核人:
            </el-col>
            <el-col :span="8">
              <div>1</div>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </el-tab-pane>
    <el-tab-pane label="检测目标">
      <detailtale></detailtale>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import detailtale from '../table/detailtable'
export default {
  data () {
    return {
      activeName: null
    }
  },
  components: {
    detailtale
  }
}
</script>
<style>
.tablist .el-collapse {
  border: 0;
}
.tablist .el-collapse-item__header {
  background-color: rgb(78, 129, 219);
  font-size: 2.5rem;
  height: 5rem;
  line-height: 5rem;
  color: rgba(255, 187, 0, 1);
  border-radius: 10px;
  display: block;
  text-align: center;
}
.tablist .el-collapse-item__content {
  font-size: 2rem;
  margin-top: 2rem
}
.tablist .el-collapse-item {
  padding: 1rem;
}
.tablist .el-collapse-item__arrow {
  height: 5rem;
  line-height: 5rem;
  float: right;
  color: #fff;
}
.tablist .el-collapse-item__wrap {
  background-color: rgb(10, 64, 150);
}
.tablist .label {
  margin-bottom: 0;
  margin-left: -2px;
  border-left: 2px solid rgba(240, 240, 240, 0.5);
  border-right: 2px solid rgba(240, 240, 240, 0.5);
  color: #fff;
  height: 5rem;
}
.tablist .collapse div {
  color: #fff;
  text-align: center
}
.tablist .collapse .row {
  border: 1px solid rgba(240, 240, 240, 0.5);
  border-left-width: 2px;
  border-right-width: 2px;
  height: 5rem;
  line-height: 5rem;
  margin-left: 5rem;
  margin-right: 5rem;
}
</style>
