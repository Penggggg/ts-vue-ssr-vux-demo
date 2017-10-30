"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vuex = require("vuex");
var vue_1 = require("vue");
var testModule_1 = require("./testModule");
vue_1.default.use(Vuex);
exports.createStore = function () {
    return new Vuex.Store({
        modules: {
            testModule: testModule_1.testModule
        }
    });
};
