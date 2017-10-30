"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
var App = function () { return System.import('./app/app.vue'); };
var Test = function () { return System.import('./test/index.vue'); };
var Home = function () { return System.import('./home/index.vue'); };
vue_1.default.use(vue_router_1.default);
var routes = [
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
exports.createRouter = function () {
    return new vue_router_1.default({
        routes: routes,
        mode: 'history'
    });
};
