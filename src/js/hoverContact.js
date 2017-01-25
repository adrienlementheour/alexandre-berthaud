var $ = require('jquery');
import TweenMax from 'gsap';
import CustomEase from 'gsap/plugins/CustomEase.js';

module.exports = function(){
	var blocContact = $('.wrapper-bloc-contact'),
		dash = blocContact.find('.dash-contact'),
		hoverIndic = blocContact.find('.hover-indic'),
		tweenEnter1, tweenEnter2, tweenEnter3, timelineEnter,
		arrowContact = blocContact.find('.icon');

	tweenEnter1 = TweenMax.to(hoverIndic, 0.2, {x: -10, y: 40});
	tweenEnter2 = TweenMax.to(hoverIndic, 0.0001, {zIndex: 1});
	tweenEnter3 = TweenMax.to(hoverIndic, 0.2, {x: 0, y: 0});
	timelineEnter = new TimelineMax({paused: true}).add(tweenEnter1).add(tweenEnter2).add(tweenEnter3);

	blocContact.on('mouseenter', function(){
		TweenMax.to(dash, 1.5, {scaleX: 1, ease: CustomEase.create('custom', 'M0,0 C0.126,0.382 0.048,0.368 0.206,0.516 0.29,0.595 0.649,0.621 0.78,0.664 0.946,0.718 0.897,1 1,1')});
		TweenMax.to(arrowContact, 1.5, {x: 0, y: '-50%', ease: CustomEase.create('custom', 'M0,0 C0.126,0.382 0.048,0.368 0.206,0.516 0.29,0.595 0.649,0.621 0.78,0.664 0.946,0.718 0.897,1 1,1')});
		timelineEnter.timeScale(1);
		timelineEnter.play();
	}).on('mouseleave', function(){
		TweenMax.to(dash, 0.5, {scaleX: 0});
		TweenMax.to(arrowContact, 1.5, {x: '-30px', y: '-50%'});
		timelineEnter.timeScale(2);
		timelineEnter.reverse();
	});
}
