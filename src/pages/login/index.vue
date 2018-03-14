<template>
  <div class="hello">
    <h1 v-bind:title="message">{{ msg }}</h1>
    <h2>Essential Links</h2>
    <br>
    <p>{{$store.state.count}}</p>
  </div>
</template>

<script>

import store from '../../store';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to phicomm',
      message: `页面加载于${new Date().toLocaleString()}`,
    };
  },
  mounted() {
    console.log(this);
  },
  store,
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
