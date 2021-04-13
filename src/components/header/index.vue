<template>
    <div>
      <h1>PHICOMM</h1>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">修改密码</el-menu-item>
        <el-menu-item index="2">退出</el-menu-item>
        <el-menu-item index="0">头像</el-menu-item>
      </el-menu>
    </div>
</template>

<script>
export default {
    // name: 'my-header',
    data() {
        return {
            activeIndex: '0'
        };
    }
};
</script>

<style>
  .el-header {
    height: 60px;
    background-color: rgb(84, 92, 100);
  }
  .el-menu {
    border-right: none;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
  }
  .el-submenu .el-menu-item {
    height: 50px;
    line-height: 50px;
    padding: 0 45px;
    min-width: 180px;
  }
  .el-header h1 {
    float: left;
    color: rgb(255, 115, 0);
    margin: 0;
    padding-left: 10px;
    line-height: 60px;
  }
  .el-header .el-menu {
    float: right;
    margin-left: 21px
  }
  .el-header .el-input {
    width: 14%;
    line-height: 60px;
  }
  .el-input__inner {
    height: 30px;
  }
</style>
