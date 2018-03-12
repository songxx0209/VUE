<template>
  <el-container style="width: 100%; position: absolute; top: 0; bottom: 0;">
    <el-header style="height: 50px;">Header</el-header>
    <el-container>
      <el-aside width="180px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"

          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>菜品信息管理</span>
            </template>

            <router-link to="/">
              <el-menu-item index="1-1">单个菜品信息维护</el-menu-item>
            </router-link>
            <router-link to="/test">
              <el-menu-item index="1-2">菜品信息批量维护</el-menu-item>
            </router-link>
            <el-submenu index="1-3">
              <template slot="title">选项4</template>
              <el-menu-item index="1-3-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>菜品图片管理</span>
            </template>

            <el-menu-item index="2-1">菜品信息核实</el-menu-item>
            <el-menu-item index="2-2">图片文件批量导出</el-menu-item>
            <el-submenu index="2-3">
              <template slot="title">上传图片查询</template>
              <el-menu-item index="2-3-1">根据时间查询</el-menu-item>
              <el-menu-item index="2-3-2">根据名字查询</el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>日志管理</span>
            </template>

            <el-menu-item index="3-1">用户操作日志</el-menu-item>
            <el-submenu index="3-2">
              <template slot="title">系统日志</template>
              <el-menu-item index="3-2-1">服务异常日志</el-menu-item>
              <el-menu-item index="3-2-2">服务启动/关闭日志</el-menu-item>
              <el-menu-item index="3-2-2">查询系统日志</el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>用户管理</span>
            </template>

            <el-menu-item index="4-1">用户管理</el-menu-item>
            <el-submenu index="4-2">
              <template slot="title">角色管理</template>
              <el-menu-item index="4-2-1">添加角色</el-menu-item>
              <el-menu-item index="4-2-2">删除角色</el-menu-item>
              <el-menu-item index="4-2-2">角色功能管理</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
  .el-header {
    background-color: #373d41;
  }
  .el-aside {
    background-color: #333744;
  }
  .el-main {
    background-color: #E9EEF3;
    padding: 0;
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
  .is-opened > div {
    background-color: rgb(67,74,80) !important;
  }
  .is-opened .is-opened > div {
    background-color: rgb(84,92,100) !important;
  }
</style>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
