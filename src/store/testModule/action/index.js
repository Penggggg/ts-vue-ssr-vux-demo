"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.actions = Object.assign({}, {
    fetchCount: fetchCount
});
