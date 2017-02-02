var $ = require('jquery');
import TweenMax from 'gsap';

window.requestAnimFrame = require('./requestAnimFrame.js');
var throttle = require('./throttle.js');

module.exports = function(){
	var bg = $('.bg-page'),
		containerWidth, windowWidth, bgWidth,
		windowHeight = $(window).height(), windowWidth = $(window).width();
	
	function setBgWidth(){
		windowWidth = $(window).outerWidth();
		containerWidth = $('.container').outerWidth();
		bgWidth = ((windowWidth-containerWidth)/2) + ((containerWidth*16.666667)/100) + 13;

		TweenMax.set(bg, {width: bgWidth+'px'});
	}
	setBgWidth();

	$(window).on('resize', throttle(function(){
    	var nh = $(window).height(), nw = $(window).width();
    	if (nw != windowWidth){
			setBgWidth();
		}
		windowHeight = nh;
		windowWidth = nw;
	}, 60));
}
