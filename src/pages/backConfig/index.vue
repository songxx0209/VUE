<template>
  <el-container>
    <el-header>
      <div>
        菜品名称<el-input placeholder="请输入菜品名称" v-model="inputMsg"></el-input>
        <el-button type="primary">查询</el-button>
        <el-button type="primary">添加菜品</el-button>
        <el-button type="primary">批量导入</el-button>
      </div>
    </el-header>
    <el-main>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header {
    background-color: #fff;
    /* color: #333;
    text-align: center;
    line-height: 60px; */
  }
  .el-main {
    background-color: #fff;
    padding: 0 20px;
  }
</style>

<script>
export default {
  name: 'backConfig',
  data() {
    return {
      inputMsg: "",
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    };
  },
  mounted() {
  },
  methods: {
  }
};
</script>
