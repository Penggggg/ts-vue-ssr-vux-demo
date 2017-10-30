import Vue from 'vue';
import * as Vuex from 'vuex';
import Router from 'vue-router';
import { createStore } from './store';
import { createRouter } from './pages';
import { sync } from 'vuex-router-sync';

const Index = ( ) => System.import('./pages/index/index.vue');

export const createApp = ( ) => {

  const store = createStore( );
  const router = createRouter( );

  sync( store, router );

  const app = new Vue({
    store,
    router,
    /** 路由承放页 */
    render: h => h( Index )
  });
  return { app, router, store };
};