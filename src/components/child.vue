<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 @click="ss(121212)">Essential Links</h2>
    <input v-model="msg">
    <!-- <div style="height: 1600px; background: yellow;">sss</div> -->
    <a href="www.youtube.com">youtube</a>
  </div>
</template>

<script>
export default {
  name: 'child',
  props: ['namess', 'isok'],
  data() {
    return {
      msg: 'Welcome Appssss',
    };
  },

  // 在实例初始化之后，数据观测和event/watcher时间配置之前被调用
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  // 类似于react中的willmount
  beforeMount() {
    console.log('beforeMount');
  },
  // 类似于react中didmount
  mounted() {
    console.log('mounted');
  },
  // 组件更新（页面刷新）之前执行
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  // 组件更新（页面刷新）之后执行
  updated() {
    console.log('updated');
  },
  activated(){
		console.log('activated');
  },
  deactivated(){
		console.log('deactivated');
  },
  // 销毁组件前调用
  beforeDestroy(){
		console.log('beforeDestroy');
  },
  // 销毁组件后调用
  destroyed(){
		console.log('destroyed');
	},
  methods: {
    ss(item) {
      console.log('子组件方法走了' + item);  
      this.$emit('passData', item);
    },
  },
};
</script>
