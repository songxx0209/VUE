<template>
    <div>
      <router-view></router-view>
      <el-card class="box-card manage_food">
          <div slot="header" class="clearfix">
              <span>菜品管理</span>
          </div>
          <div>
              菜品名称<el-input placeholder="请输入菜品名称" v-model="inputMsg"></el-input>
              <el-button type="primary">查询</el-button>
              <el-button type="primary">
                <router-link to="/manage_food/add_food">添加菜品</router-link>
              </el-button>
              <el-button type="primary">批量导入</el-button>
          </div>
      </el-card>
      <el-card class="box-card info_food marginTop30">
          <div slot="header" class="clearfix">
              <span>菜品信息</span>
          </div>
          <div>
              <el-table
                  :data="tableData"
                  border
                  stripe
                  style="width: 100%">
                  <el-table-column
                  label="菜品名称"
                  width="180">
                      <template slot-scope="scope">
                          <span style="margin-left: 10px">{{ scope.row.date }}</span>
                      </template>
                  </el-table-column>
                  <el-table-column
                  label="菜品识别"
                  width="180">
                      <template slot-scope="scope">
                          <span style="margin-left: 10px">{{ scope.row.name }}</span>
                      </template>
                  </el-table-column>
                  <el-table-column
                  label="识别热度"
                  width="180">
                      <template slot-scope="scope">
                          <span style="margin-left: 10px">{{ scope.row.address }}</span>
                      </template>
                  </el-table-column>
                  <el-table-column
                  label="图片库数量"
                  width="180">
                      <template slot-scope="scope">
                          <span style="margin-left: 10px">{{ scope.row.num }}</span>
                      </template>
                  </el-table-column>
                  <el-table-column label="操作">
                      <template slot-scope="scope">
                          <el-button
                          size="mini"
                          type="success">查看</el-button>
                          <el-button
                          size="mini"
                          type="warning">修改</el-button>
                          <el-button
                          size="mini"
                          type="danger">删除</el-button>
                      </template>
                  </el-table-column>
              </el-table>
          </div>
      </el-card>
    </div>
</template>
<style scoped>
.marginTop30 {
  margin-top: 30px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.box-card {
  width: 100%;
}
.manage_food .el-input {
  width: 200px;
  margin: 0 40px 0 10px;
}
.manage_food .el-input > input {
  height: 40px;
}
.manage_food .el-button {
  margin: 0 30px;
}
table th .cell,
table td {
  text-align: center;
}
</style>
<script>
export default {
  data() {
    return {
      inputMsg: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "江路 1518 弄",
          num: 125
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上江路 1517 弄",
          num: 125
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上江路 1519 弄",
          num: 125
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上路 1516 弄",
          num: 125
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上路 1516 弄",
          num: 125
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上路 1516 弄",
          num: 125
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上路 1516 弄",
          num: 125
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上路 1516 弄",
          num: 125
        }
      ]
    };
  }
};
</script>
