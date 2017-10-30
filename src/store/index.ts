import * as Vuex from 'vuex';
import Vue from 'vue';
import { testModule } from './testModule';

Vue.use( Vuex );

export const createStore = ( ) => {
  return new Vuex.Store({
    modules: {
      testModule
    }
  });
};