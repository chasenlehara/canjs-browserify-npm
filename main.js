// main.js
var DefineMap = require("can-define/map/map");
var stache = require('can-stache/can-stache');

var data = new DefineMap({message: "Hello World"});
var template = stache('<h1>{{message}}</h1>');

document.body.appendChild(template(data));
