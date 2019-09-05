<template>
  <div class="table_info">
    <div class="table_title">大宗食品不合格数统计</div>
    <el-table
      :row-class-name="tableRowClassName"
      :data="tableData"
      height="1200"
      border
      :resizable="true"
      style="width: 100%"
    >
    <el-table-column type="index" align="center" :resizable="false" label="序号" width="100"></el-table-column>
    <template v-for="item in row">

        <el-table-column prop="address" label="操作" align="center" :resizable="false" v-if="item.cz" :key="item">
        <template>
          <div @click="$store.state.innerVisible= true" style="cursor:pointer">
            <i class="el-icon-search"></i>
            <span style="margin-left: 1.5rem">查看</span>
          </div>
        </template>
      </el-table-column>
       <el-table-column prop="address" label="操作" align="center" :resizable="false" v-else-if="item.url" :key="item">
        <template  slot-scope="scope">
          <div>
            <a :src="scope.row[item.url]">{{scope.row[item.prop]}}</a>
          </div>
        </template>
      </el-table-column>
      <el-table-column :prop="item.prop" :label="item.label" align="center" :resizable="false"  :key='item' v-else></el-table-column>
    </template>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total,  prev, pager, next"
      :total="400"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentPage: 1,
      row: [
        { label: '报告编号', prop: 'name' },
        { label: '样品名称', prop: 'ypmc' },
        { label: '委托单位', prop: 'wtdw' },
        { label: '生产单位', prop: 'scdw' },
        { label: '检测检验机构', prop: 'jyjg' },
        { label: '受检单位', prop: 'sjdw' },
        { label: '检测结果', prop: 'jcjg' },
        { label: '不合格项', prop: 'bhgx' },
        { label: '签发日期', prop: 'qfrq' },
        { label: '查看', prop: 'qfrq', cz: true },
        { label: '链接', prop: 'qfrq', url: 'qfrq' }
      ],
      tableData: [
        {
          name: '1606',
          ypmc: '土豆',
          wtdw: '宁波市江北区市场监督管理局',
          scdw: '浙江维康医药零售有限公司',
          jyjg: '余姚市食品检测检验中心',
          sjdw: '宁波东钱湖',
          jcjg: '不合格',
          bhgx: '百菌清',
          qfrq: '2019-03-18'
        }
      ]
    }
  },
  mounted () {
    for (var i = 0; i < 19; i++) {
      let cloneData = this.tableData[0]
      this.tableData.push(cloneData)
    }
  },
  methods: {
    tableRowClassName ({ row, rowIndex }) {
      if (rowIndex % 2 === 1) {
        return 'warning-row'
      } else if (rowIndex % 2 === 0) {
        return 'success-row'
      }
      return ''
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style>
.el-table .success-row {
  background: rgba(10, 44, 98, 0.9) !important;
}
.el-table .warning-row {
  background: rgba(5, 30, 70, 0.5) !important;
}
.el-pagination {
  margin-top: 5rem;
  height: 10rem;
  text-align: center;
  color: #fff;
}
.table_info .el-pagination__total {
  height: 3rem;
  line-height: 3rem;
  font-size: 2rem;
  color: #fff;
}
.table_info .el-pagination button,
.table_info .el-pagination span:not([class*="suffix"]) {
  font-size: 2rem;
  height: 3rem;
  line-height: 3rem;
  color: #fff;
}
.table_info .el-pager li {
  font-size: 2rem;
  height: 4rem;
  line-height: 4rem;
  padding: 0 15px;
}
.table_info .el-input--mini .el-input__inner {
  height: 3rem;
  line-height: 3rem;
}
.table_info .el-table td,
.table_info .el-table th {
  padding: 20px 0;
}
.table_info .el-pagination__sizes .el-input .el-input__inner {
  font-size: 2rem;
}
.table_info .el-pagination .el-select .el-input {
  width: 10rem;
}
.table_info .el-pagination__editor {
  height: 3rem;
  font-size: 2rem;
  line-height: 3rem;
}
.table_info .el-pagination__editor.el-input .el-input__inner {
  height: 3rem;
  line-height: 3rem;
}
.table_info .el-dialog,
.table_info .el-pager li {
  background: rgba(0, 0, 0, 0);
  color: #fff;
  border: 0.1rem solid;
  border-radius: 10px;
  margin-left: 1rem;
  margin-right: 1rem;
}
.table_info .el-pagination .btn-next,
.table_info .el-pagination .btn-prev {
  background: center center no-repeat rgba(0, 0, 0, 0);
}
.el-pagination button:disabled {
  background: rgba(0, 0, 0, 0);
}
.table_info .el-pager li.active + li {
  border-left: double;
}
</style>
