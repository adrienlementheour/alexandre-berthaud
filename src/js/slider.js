var $ = require('jquery');
import TweenMax from 'gsap';
import Draggable from 'gsap/Draggable';
import ThrowPropsPlugin from 'gsap/plugins/ThrowPropsPlugin.js';

module.exports = function(){
	var wrapperSliders = $('.wrapper-sliders'), wrapperSlider = $('.wrapper-slider'), sliderList, sliderElem,
		wrapperTitles = $('.wrapper-projects-titles'), titlesList, titlesElem, nbTitles, widthWrapperTitles,
		widthWrapper = [], heightWrapper, nbSlides,
		draggableElems = [],
		sliderTarget, wrapperSliderTarget, widthWrapperTarget, xPositionTarget, wrappersSlidersSiblings, widthSliderSiblings,
		wrapperOther = $('.wrapper-projects-other'),
		elemSlider = $('.elem-slider'), elemList, elemPart, elemPartWidth, tlElems,
		goingLeft = true, nbElems, nbElemsIn, currentNb, initialTimeoutSlides, timeoutSlides;


	function moveSlides(goingLeft){
		elemSlider.each(function(index){
			elemList = $(this).find('ul');
			elemPart = elemList.find('li');
			if($(this).hasClass('wrapper-projects-titles')){
				// rotated element
				elemPartWidth = elemPart.outerHeight();
			}else{
				elemPartWidth = elemPart.outerWidth();
			}
			if(goingLeft){
				TweenMax.to(elemList, 0.5, {x: '-='+elemPartWidth, ease: Power3.easeInOut});
			}else{
				TweenMax.to(elemList, 0.5, {x: '+='+elemPartWidth, ease: Power3.easeInOut});
			}
		});
	}

	function stopAnimSlider(){
		clearTimeout(initialTimeoutSlides);
		clearTimeout(timeoutSlides);
	}

	function animateSlides(){

		if(goingLeft){
			if(currentNb === 1){
				goingLeft = false;
			}
			currentNb--;
		}else if(!goingLeft){
			if(currentNb === nbElems-1){
				goingLeft = true;
			}
			currentNb++;
		}

		moveSlides(goingLeft);
		timeoutSlides = setTimeout(animateSlides, 5000);
	}

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

		wrapperOther.each(function(){
			titlesList = $(this).find('ul');
			if($(this).hasClass('wrapper-projects-titles')){
				// rotated element
				widthWrapperTitles = titlesList.find('li').outerHeight();
			}else{
				widthWrapperTitles = titlesList.find('li').outerWidth();
			}
			
			TweenMax.set(titlesList, {x: (xPositionTarget*widthWrapperTitles)/widthWrapperTarget});
		});
	}
	
	// Place slides
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
		    onDragStart: stopAnimSlider,
		    onDrag: updateSlider,
		    onThrowUpdate: updateSlider,
		    snap: {
		        x: function(endValue){
		            return Math.round(endValue / widthWrapper[indexSlider]) * widthWrapper[indexSlider];
		        }
		    }
		});
	});

	// Place project titles
	wrapperOther.each(function(){
		titlesList = $(this).find('ul');
		titlesElem = titlesList.find('li');
		nbTitles = titlesElem.length;
		if($(this).hasClass('wrapper-projects-titles')){
			widthWrapperTitles = titlesList.outerHeight();
		}else{
			widthWrapperTitles = titlesList.outerWidth();
		}
		TweenMax.set(titlesList, {width: nbTitles*widthWrapperTitles+'px'});
		TweenMax.set(titlesElem, {width: widthWrapperTitles+'px'});
		titlesElem.each(function(i){
			TweenMax.set($(this), {left: i*widthWrapperTitles+'px'});
		});
	});
	nbElems = elemSlider.length;
	nbElemsIn = elemSlider.first().find('li').length;
	currentNb = nbElemsIn;
	initialTimeoutSlides = setTimeout(animateSlides, 5000);
}
