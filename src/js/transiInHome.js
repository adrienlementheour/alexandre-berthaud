var $ = require('jquery');
import TweenMax from 'gsap';

var animateDrag = require('./animateDrag.js');

module.exports = function(){
	var tlTransiIn = new TimelineMax(),
		bgPage = $('.bg-page'), wrapperSlider = $('.wrapper-slider'), projectsTitles = $('.wrapper-projects-titles'), projectsNumbers = $('.wrapper-projects-numbers'), dragAnimation = $('.drag-animation'), sliderIndicator = $('.wrapper-slider-indicator');

	function showSlidersContent(){
		TweenMax.to([projectsTitles, projectsNumbers, wrapperSlider.find('.content-slider')], 0.3, {opacity: 1});
		TweenMax.to(dragAnimation, 0.3, {opacity: 1, delay: 0.5});
		animateDrag();
	}

 	TweenMax.to(bgPage, 0.5, {scaleX: 1});
 	TweenMax.staggerTo([wrapperSlider, sliderIndicator], 0.2, {scaleX: 1, delay: 0.2}, 0.2, showSlidersContent);
}
