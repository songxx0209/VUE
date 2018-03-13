<template>
  <div class="hello">
    <h1 v-html="msg"></h1>
    <h2>Essential Links</h2>
    <input v-model="msg">
    <!-- <div style="height: 1600px; background: yellow;">sss</div> -->
    <p v-bind:class="{ 'a': isok, b: isb }">hello world</p>

    <a href="www.baidu.com">百度一下</a>
    <hr>
    <p>看子组件传递上来的数据</p>
    <child-a :namess="namess" :isok="isok" v-on:passData="gotoServer"></child-a>
  </div>
</template>

<script>
import childA from './child';

export default {
  name: 'HelloWorld',
  
  data() {
    return {
      msg: 'Welcome <span style="color: red;">hello</span>',
      message: `页面加载于${new Date().toLocaleString()}`,
      isok: true,
      b: 'b',
      isb: true,
      namess: {
        x: 1,
        y: 2,
        z: 3,
      }
    };
  },
  components: {
    childA,
  },
  methods: {
    gotoServer(item) {
      console.log('son for father=', item);
      this.msg = item;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import './index.less';
  
</style>
