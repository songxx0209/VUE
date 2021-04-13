<template>
  <el-menu
    :default-active="defaultIndex"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    :router="true"
    active-text-color="#ffd04b">

    <router-link to="/">
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
    </router-link>

    <router-link to="/manage_food">
      <el-menu-item index="/manage_food">
        <i class="el-icon-menu"></i>
        <span slot="title">菜品信息管理</span>
      </el-menu-item>
    </router-link>

    <router-link :to="{path: '/test', query: {userId: 222}}">
      <el-menu-item index="/test">
        <i class="el-icon-picture"></i>
        <span slot="title">图片管理</span>
      </el-menu-item>
    </router-link>

    <router-link to="/home">
      <el-menu-item index="/home">
        <i class="el-icon-tickets"></i>
        <span slot="title">日志管理</span>
      </el-menu-item>
    </router-link>

    <router-link :to="{name: 'testurl', params:{userId: 233}}">
      <el-menu-item index="4">
        <i class="el-icon-service"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
    </router-link>

    <router-link to="/backconfig">
      <el-menu-item index="/backconfig">
        <i class="el-icon-setting"></i>
        <span slot="title">后台配置</span>
      </el-menu-item>
    </router-link>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      defaultIndex: this.$route.path,
    }
  },
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
