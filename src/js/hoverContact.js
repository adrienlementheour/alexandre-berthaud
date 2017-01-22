var $ = require('jquery');
import TweenMax from 'gsap';

module.exports = function(){
	var blocContact = $('.bloc-contact'),
		dash = blocContact.find('.dash-contact');

	blocContact.on('mouseenter', function(){
		TweenMax.to(dash, 1, {scaleX: 1});
	}).on('mouseleave', function(){
		TweenMax.to(dash, 0.5, {scaleX: 0});
	});
}
