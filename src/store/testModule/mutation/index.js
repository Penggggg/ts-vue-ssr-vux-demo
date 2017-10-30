"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var setCount = function (state, count) {
    state.count = count;
};
var addCount = function (state, count) {
    state.count += count;
};
exports.mutations = Object.assign({}, {
    setCount: setCount,
    addCount: addCount
});
