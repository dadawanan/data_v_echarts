<template>
  <div class="dialog_total">
    <el-dialog
    class="first"
      style="margin-top:20vh;margin: auto"
      :visible.sync="innerVisible"
      width="80%"
      :modal-append-to-body="false"
      :before-close="handleClose1"
      :destroy-on-close="true"
      center
    >
      <tabmodal></tabmodal>
    </el-dialog>
    <el-dialog
      class="dialog_table"
      :visible.sync="centerDialogVisible"
      width="100%"
      :modal-append-to-body="false"
      :before-close="handleClose"
      :destroy-on-close="true"
      center
    >
    <!-- <el-dialog
      :visible.sync="innerVisible"
      class="first"
      style="margin-top:20vh;height:90%;width:80%;margin: auto"
      append-to-body>
    </el-dialog> -->
      <detailtable></detailtable>
    </el-dialog>
    <el-dialog
      class="second listing"
      :visible.sync="centerDialogVisible1"
      :fullscreen="true"
      :modal-append-to-body="false"
      :before-close="handleClose"
      :destroy-on-close="true"
      center
    >
      <modal></modal>
    </el-dialog>
  </div>
</template>
<script>
import detailtable from '@/components/table/detailtable'
import modal from '@/components/modal'
import tabmodal from '@/components/modal/tabmodal'
export default {
  components: {
    detailtable,
    modal,
    tabmodal
  },
  computed: {
    centerDialogVisible () {
      return this.$store.state.centerDialogVisible
    },
    centerDialogVisible1 () {
      return this.$store.state.centerDialogVisible1
    },
    innerVisible: {
      get: function () {
        return this.$store.state.innerVisible
      },
      set: function (val) {
        this.$store.state.innerVisible = val
      }
    }
  },
  methods: {
    handleClose () {
      this.$store.state.centerDialogVisible = false
      this.$store.state.centerDialogVisible1 = false
    },
    handleClose1 () {
      this.$store.state.innerVisible = false
    }
  }
}
</script>
<style>
.dialog_total .el-dialog__headerbtn{
  font-size: 3rem;
  z-index: 100;
}
.dialog_total .el-dialog__headerbtn .el-dialog__close{
  color: #fff;
}
.dialog_table .el-dialog--center {
  background: rgba(9, 12, 27, 0.75);
  margin-top: 0;
  overflow: hidden;
  padding: 6rem 8rem 0;
}
.dialog_total .el-dialog__wrapper {
  overflow: hidden;
}
.dialog_table .el-dialog__header {
  padding: 0;
}
.dialog_table .el-dialog__body {
  padding: 0;
}
.dialog_table .el-dialog--center .el-dialog__body {
  padding: 0;
}
.second .el-dialog__body {
  height: 100%;
}
.second .el-dialog__header {
  padding: 0;
}
.second .el-dialog--center .el-dialog__body {
  padding: 0;
}
.second .el-dialog.is-fullscreen {
  background: rgba(5, 27, 62, 0.8);
  overflow: hidden;
}
.first .el-dialog__header{
  padding: 0
}
.first .el-dialog__body{
  padding: 0
}
.first .el-dialog--center .el-dialog__body{
  padding: 0
}
.first .el-tabs__item {
  height: 8rem;
  line-height: 8rem;
  font-size: 2.5rem;
  padding: 0 5rem
}
.first .el-tabs__nav-scroll{
  background: rgba(21, 69, 145, 0.8)
}
.first .el-tabs--border-card{
  border: 0
}
.first .el-tabs--border-card>.el-tabs__header .el-tabs__item{
    color: #fff;
    border: 0px
}
.first .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
  background-color: rgb(4,44,108);
  color: #fff;
}
.first .el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child{
  padding-left: 5rem;
  padding-right: 5rem
}
.first .el-tabs--border-card>.el-tabs__content{
  background-color: rgb(4,44,108);
}
.first .el-tabs--border-card>.el-tabs__header{
  border: 0
}
</style>
