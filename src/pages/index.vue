<template>
  <el-container style="width: 100%; position: absolute; top: 0; bottom: 0;">
    <el-header style="height: 60px;">
      <myHeader />
    </el-header>
    <el-container>
      <el-aside width="180px"><myAside /></el-aside>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script>
import myHeader from '../components/header/index';
import myAside from '../components/aside/index';

export default {
  data() {
    return {
      defaultIndex: this.$route.path,
    }
  },
  components: { myHeader, myAside },
  mounted() {
    // console.log(this);
  },
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
    background-color: rgb(84, 92, 100);
  }
  .el-main {
    background-color: #fff;
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
