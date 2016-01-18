'use strict';
//this is the main game file
var $ = require('jquery');
var Rx = require('rx');
var actions = require("../client/client.actions.js");
var PIXI = require('pixi.js');

class gameMain{
	constructor(){
		this.actions = actions;
		actions.request$.subscribe(()=>{
			init();
		});
	}
}

function init(){
	console.log(PIXI);
}
module.exports = new gameMain();
