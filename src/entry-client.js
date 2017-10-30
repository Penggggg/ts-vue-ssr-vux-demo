"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var _a = index_1.createApp(), app = _a.app, router = _a.router, store = _a.store;
router.onReady(function () {
    app.$mount('#app');
    if (window.__INITIAL_STATE__) {
        store.replaceState(window.__INITIAL_STATE__);
    }
});
