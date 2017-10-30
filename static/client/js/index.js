webpackJsonp([4],{

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(46);


/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(47);

var _a = Object(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* createApp */])(), app = _a.app, router = _a.router, store = _a.store;
router.onReady(function () {
    app.$mount('#app');
    if (window.__INITIAL_STATE__) {
        store.replaceState(window.__INITIAL_STATE__);
    }
});


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex_router_sync__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex_router_sync___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuex_router_sync__);




var Index = function () { return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 57)); };
var createApp = function () {
    var store = Object(__WEBPACK_IMPORTED_MODULE_1__store__["a" /* createStore */])();
    var router = Object(__WEBPACK_IMPORTED_MODULE_2__pages__["a" /* createRouter */])();
    Object(__WEBPACK_IMPORTED_MODULE_3_vuex_router_sync__["sync"])(store, router);
    var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
        store: store,
        router: router,
        /** 路由承放页 */
        render: function (h) { return h(Index); }
    });
    return { app: app, router: router, store: store };
};


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__testModule__ = __webpack_require__(49);



__WEBPACK_IMPORTED_MODULE_1_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_0_vuex__);
var createStore = function () {
    return new __WEBPACK_IMPORTED_MODULE_0_vuex__["Store"]({
        modules: {
            testModule: __WEBPACK_IMPORTED_MODULE_2__testModule__["a" /* testModule */]
        }
    });
};


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return testModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__action__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutation__ = __webpack_require__(52);



var testModule = {
    state: __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */],
    actions: __WEBPACK_IMPORTED_MODULE_1__action__["a" /* actions */],
    mutations: __WEBPACK_IMPORTED_MODULE_2__mutation__["a" /* mutations */]
};


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return state; });
var count = 0;
var state = Object.assign({}, {
    count: count
});


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actions; });
var fetchCount = function (_a) {
    var commit = _a.commit;
    return fetchData(0).then(function (count) {
        commit('setCount', count);
    });
};
var fetchData = function (time) { return new Promise(function (resolve) {
    setTimeout(function () {
        resolve(5);
    }, time);
}); };
var actions = Object.assign({}, {
    fetchCount: fetchCount
});


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mutations; });
var setCount = function (state, count) {
    state.count = count;
};
var addCount = function (state, count) {
    state.count += count;
};
var mutations = Object.assign({}, {
    setCount: setCount,
    addCount: addCount
});


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(8);


var App = function () { return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 54)); };
var Test = function () { return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 55)); };
var Home = function () { return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 56)); };
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);
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
var createRouter = function () {
    return new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
        routes: routes,
        mode: 'history'
    });
};


/***/ })

},[45]);