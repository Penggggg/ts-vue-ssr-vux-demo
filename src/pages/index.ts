import Vue from 'vue';
import Router from 'vue-router';

const App = ( ) => System.import('./app/app.vue');
const Test = ( ) => System.import('./test/index.vue');
const Home = ( ) => System.import('./home/index.vue');

Vue.use( Router );

const routes: any = [
  {
    /** 应用基页 */
    path: '/',
    component: App,
    redirect: '/home',
    children: [
      {
        /** 首面 */
        path: 'home',
        component: Home
      },
      {
        /** 测试页面 */
        path: 'test',
        component: Test
      }
    ]
  }
];

export const createRouter = ( ) => {
  return new Router({
    routes,
    mode: 'history'
  });
};