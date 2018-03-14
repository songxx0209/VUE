import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Test from '../pages/test';
import Login from '../pages/login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
    },
  ],
});
