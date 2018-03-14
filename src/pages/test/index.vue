<template>
  <div class="hello">
    <h1 v-html="msg"></h1>
    <h2>testing</h2>
    <input v-model="msg">
    <!-- <div style="height: 1600px; background: yellow;">sss</div> -->
    <p v-bind:class="{ 'a': isok, b: isb }">hello world</p>
    <a href="www.baidu.com">百度一下</a>
    <p>{{$store.state.count}}</p>
    <button @click="$store.commit('add', 10)">+</button>
    <button @click="$store.commit('reduce')">-</button>

    <hr>
    <child-a :namess="namess" :isok="isok" v-on:passData="gotoServer"></child-a>
  </div>
</template>

<script>
import childA from './child';
import store from '../../store';

export default {
  name: 'test',
  
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

  // 在实例初始化之后，数据观测和event/watcher时间配置之前被调用
  beforeCreate() {
    console.log('father beforeCreate');
  },
  created() {
    console.log('father created');
  },
  // 类似于react中的willmount
  beforeMount() {
    console.log('father beforeMount');
  },
  // 类似于react中didmount
  mounted() {
    console.log('father mounted', this);
  },
  // 组件更新（页面刷新）之前执行
  beforeUpdate() {
    console.log('father beforeUpdate');
  },
  // 组件更新（页面刷新）之后执行
  updated() {
    console.log('father updated');
  },
  activated(){
		console.log('father activated');
  },
  deactivated(){
		console.log('father deactivated');
  },
  // 销毁组件前调用
  beforeDestroy(){
		console.log('father beforeDestroy');
  },
  // 销毁组件后调用
  destroyed(){
		console.log('father destroyed');
	},
  store,
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
