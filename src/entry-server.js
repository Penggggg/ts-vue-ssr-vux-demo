"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
exports.default = function (context) { return new Promise(function (resolve, reject) {
    var _a = index_1.createApp(), app = _a.app, router = _a.router, store = _a.store;
    router.push(context.url);
    router.onReady(function () {
        /** 获取component */
        var matchedComponents = router.getMatchedComponents();
        if (!matchedComponents.length) {
            return reject({ code: 404 });
        }
        /** 调用asyncData */
        Promise.all(matchedComponents.map(function (Component) {
            var asyncData = Component.options.methods ? Component.options.methods.asyncData : null;
            if (asyncData) {
                return asyncData({
                    store: store,
                    route: router.currentRoute
                });
            }
        })).then(function () {
            context.state = store.state;
            resolve(app);
        }).catch(reject);
    }, reject);
}); };
