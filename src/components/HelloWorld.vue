<template>
  <div class="hello">
    <h1 v-html="msg"></h1>
    <h2>Essential Links</h2>
    <input v-model="msg">
    <!-- <div style="height: 1600px; background: yellow;">sss</div> -->
    <p v-bind:class="{ 'a': isok, b: isb }">hello world</p>

    <a href="www.baidu.com">百度一下</a>
    <hr>
    <child-a></child-a>
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
    };
  },
  components: {
    childA,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import './index.scss';
  
</style>
