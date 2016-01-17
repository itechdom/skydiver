'use strict';
//this is the main game file
var $ = require('jquery');
var Rx = require('rx');
var actions = require("../client/client.actions.js");

class gameMain{

	constructor(){
		this.actions = actions;
		actions.request$.subscribe(()=>{
			init();
		});
	}
}

function init(){

	var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

	var sprite;

	function preload() {

		//  37x45 is the size of each frame
		//  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
		//  blank frames at the end, so we tell the loader how many to load
		game.load.spritesheet('uniqueKey', 'dist/diver-pixel.png', 72, 72,2);
		game.load.image("background", "assets/sky-background.png");

	}
	function create() {
		var background = game.add.tileSprite(0, 0, 1000, 600, "background");

		var sprite = game.add.sprite(100, 200, 'uniqueKey');
		sprite.animations.add('walk');
		sprite.animations.play('walk', 2, true);
	}


}
module.exports = new gameMain();
