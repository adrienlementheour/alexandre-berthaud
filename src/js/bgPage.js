var $ = require('jquery');
import TweenMax from 'gsap';

module.exports = function(){
	var bg = $('.bg-page'),
		containerWidth, windowWidth, bgWidth;
	
	windowWidth = $(window).outerWidth();
	containerWidth = $('.container').outerWidth();
	bgWidth = ((windowWidth-containerWidth)/2) + ((containerWidth*16.666667)/100) + 13;

	TweenMax.set(bg, {width: bgWidth+'px'});
}
