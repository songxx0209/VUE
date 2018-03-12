<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 v-on:click="ss">Essential Links</h2>
    <input v-model="msg">
    <!-- <div style="height: 1600px; background: yellow;">sss</div> -->
    <a href="www.youtube.com">youtube</a>
  </div>
</template>

<script>
export default {
  name: 'child',
  data() {
    return {
      msg: 'Welcome Appssss',
    };
  },
  // components: {
  //   headTop,
  //   alertTip,
  // },
  methods: {
    ss() {
      console.log(this.msg);
    },
  },
};
</script>
