"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var store_1 = require("./store");
var pages_1 = require("./pages");
var vuex_router_sync_1 = require("vuex-router-sync");
var Index = function () { return System.import('./pages/index/index.vue'); };
exports.createApp = function () {
    var store = store_1.createStore();
    var router = pages_1.createRouter();
    vuex_router_sync_1.sync(store, router);
    var app = new vue_1.default({
        store: store,
        router: router,
        /** 路由承放页 */
        render: function (h) { return h(Index); }
    });
    return { app: app, router: router, store: store };
};
