"use strict";
exports.__esModule = true;
var inversify_1 = require("inversify");
var controller_1 = require("./controller");
var cache_1 = require("./services/cache");
exports.ioc = new inversify_1.Container();
/** controllers bind */
controller_1["default"].map(function (ctrl) { return exports.ioc.bind(ctrl).toSelf(); });
/** unique services bind */
exports.ioc.bind(cache_1.Cache).toConstantValue(new cache_1.Cache());
