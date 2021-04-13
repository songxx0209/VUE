<template>
  <div>
    <h1>hello infomation</h1>

    <button v-on:click="tiao()">跳转</button>
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
    // console.log(this);
  },
  store,
  methods: {
    tiao() {
      console.log(this);
      // this.$router.push({ name: 'testurl' });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
