var $ = require('jquery');
import TweenMax from 'gsap';
import Draggable from 'gsap/Draggable';
import ThrowPropsPlugin from 'gsap/plugins/ThrowPropsPlugin.js';

module.exports = function(){
	var wrapperSliders = $('.wrapper-sliders'), wrapperSlider = $('.wrapper-slider'), sliderList, sliderElem,
		widthWrapper, heightWrapper, nbSlides,
		draggableElems = [];
	
	wrapperSlider.each(function(indexSlider){
		sliderList = $(this).find('ul');
		sliderElem = sliderList.find('li');
		nbSlides = sliderElem.length;
		widthWrapper = $(this).outerWidth();
		TweenMax.set(sliderList, {width: nbSlides*widthWrapper+'px'});
		TweenMax.set(sliderElem, {width: widthWrapper+'px'});
		sliderElem.each(function(i){
			TweenMax.set($(this), {left: i*widthWrapper+'px'});
		});
		draggableElems[indexSlider] = Draggable.create(sliderList, {
		    type: 'x',
		    bounds: $(this),
		    zIndexBoost: false,
		    dragClickables: true,
		    dragResistance: 0.3,
		    edgeResistance: 0.65,
		    throwProps: true,
		    allowNativeTouchScrolling: true,
		    snap: {
		        x: function(endValue){
		            return Math.round(endValue / widthWrapper) * widthWrapper;
		        }
		    }
		});
	});
}
