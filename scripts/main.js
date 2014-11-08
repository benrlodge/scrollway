'use strict';

function Scrollway(callback){
	// this.el = options.el
	this.events();
	this.callback = callback;

}


Scrollway.prototype = {

	setPosition: function(){
		this.position = $(window).scrollTop();
	},

	getPosition: function(){
		return this.position;
	},

	down: function(){
		var p = this.getPosition();
		var scrolling = {
			direction: 'down',
			position: p
		};
		this.callback(scrolling);
	},

	up: function(){
		var p = this.getPosition();
		var scrolling = {
			direction: 'up',
			position: p
		};
		this.callback(scrolling);
	},

	events: function() {
		var that = this;
		var past = 0;
		$(window).on('scroll',function(){
			that.setPosition();
			past < that.getPosition() ? that.down() : that.up();
			past = that.getPosition();
		});
	}

};


new Scrollway(function(scroll){

	var stuff = false

	if (scroll.direction == 'down'){
		if(scroll.position > 40 && !stuff){
			$('.stuff').hide();
			stuff = true;
		}	
	}

	else{
		$('.stuff').show();
	}


});



