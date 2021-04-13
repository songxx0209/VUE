import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Test from '../pages/test';
import Login from '../pages/login';
import Home from '../pages/home/index';
import Index from '../pages/index';
import backconfig from '../pages/backConfig';

import manageFood from '../pages/manageFood';
import addFood from '../pages/manageFood/addFood';
import foodList from '../pages/manageFood/foodList';

// const Home = r => require.ensure([], () => r(require('../pages/home')), 'home');

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/', component: Index,
      children: [
        {
          path: 'manage_food',
          name: 'manage_food',
          component: manageFood,
          children: [
            {
              path: '',
              name: 'foodList',
              component: foodList,
            },
            {
              path: 'add_food',
              name: 'add_food',
              component: addFood,
            },
          ]
        },
        {
          path: 'home',
          component: Home,
        },
        {
          path: 'home',
          component: Home,
        },
        {
          path: 'test',
          name: 'testurl',
          component: Test,
        },
        {
          path: 'backconfig',
          name: 'backconfig',
          component: backconfig,
        }
      ]
    },
    {
      path: '/login', component: Login,
    }
  ],
});
