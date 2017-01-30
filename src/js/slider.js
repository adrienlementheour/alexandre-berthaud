var $ = require('jquery');
import TweenMax from 'gsap';
import Draggable from 'gsap/Draggable';
import ThrowPropsPlugin from 'gsap/plugins/ThrowPropsPlugin.js';

module.exports = function(){
	var wrapperSliders = $('.wrapper-sliders'), wrapperSlider = $('.wrapper-slider'), sliderList, sliderElem,
		widthWrapper = [], heightWrapper, nbSlides,
		draggableElems = [],
		sliderTarget, wrapperSliderTarget, widthWrapperTarget, xPositionTarget, wrappersSlidersSiblings, widthSliderSiblings;

	function updateSlider(){
		xPositionTarget = this.x;
		sliderTarget = $(this.target);
		wrapperSliderTarget = sliderTarget.parents('.wrapper-slider');
		widthWrapperTarget = wrapperSliderTarget.outerWidth();

		wrappersSlidersSiblings = wrapperSliderTarget.siblings('.wrapper-slider');
		wrappersSlidersSiblings.each(function(){
			widthSliderSiblings = $(this).outerWidth();
			TweenMax.set($(this).find('ul'), {x: (xPositionTarget*widthSliderSiblings)/widthWrapperTarget});
		});
	}
	
	wrapperSlider.each(function(indexSlider){
		sliderList = $(this).find('ul');
		sliderElem = sliderList.find('li');
		nbSlides = sliderElem.length;
		widthWrapper[indexSlider] = $(this).outerWidth();
		TweenMax.set(sliderList, {width: nbSlides*widthWrapper[indexSlider]+'px'});
		TweenMax.set(sliderElem, {width: widthWrapper[indexSlider]+'px'});
		sliderElem.each(function(i){
			TweenMax.set($(this), {left: i*widthWrapper[indexSlider]+'px'});
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
		    onDrag: updateSlider,
		    onThrowUpdate: updateSlider,
		    snap: {
		        x: function(endValue){
		            return Math.round(endValue / widthWrapper[indexSlider]) * widthWrapper[indexSlider];
		        }
		    }
		});
	});
}
