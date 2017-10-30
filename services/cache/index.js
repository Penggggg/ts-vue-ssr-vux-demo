"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var LRU = require("lru-cache");
var inversify_1 = require("inversify");
var Cache = /** @class */ (function () {
    function Cache() {
        var _this = this;
        this.pagePrefix = 'page';
        this.pageOptions = {
            maxAge: 24 * 60 * 60 * 1000
        };
        this.getPage = function (key) {
            console.log(">>>>> Getting pageCache " + key + " <<<<<");
            return _this.pageCache.get(_this.pagePrefix + "-" + key);
        };
        this.setPage = function (key, value, maxAge) {
            console.log(">>>>> Setting pageCache " + key + " <<<<<");
            _this.pageCache.set(_this.pagePrefix + "-" + key, value, maxAge);
        };
        this.pageCache = LRU(this.pageOptions);
    }
    Cache = __decorate([
        inversify_1.injectable()
    ], Cache);
    return Cache;
}());
exports.Cache = Cache;
