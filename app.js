"use strict";
exports.__esModule = true;
require("reflect-metadata");
var Koa = require("koa");
var path = require("path");
var KoaLog = require("koa-logs-full");
var KoaServer = require("koa-static2");
var controller_1 = require("./controller");
var inversify_config_1 = require("./inversify.config");
var routing_controllers_1 = require("routing-controllers");
var app = new Koa();
app
    .use(KoaServer('static', __dirname + '/static'))
    .use(KoaLog(app, {
    logdir: path.join(__dirname, 'logs')
}));
routing_controllers_1.useContainer(inversify_config_1.ioc);
routing_controllers_1.useKoaServer(app, {
    controllers: controller_1["default"]
});
app.listen(9090);
console.log('running in 9090');
