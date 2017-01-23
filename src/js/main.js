'use strict';

// var $ = require('./libs/jquery/dist/jquery.slim.min.js');
var $ = require('jquery');

import TweenMax from 'gsap';


$(function(){

    window.requestAnimFrame = require('./requestAnimFrame.js');
    var throttle = require('./throttle.js');

    var animateCircle = require('./animateCircle.js');
    var hoverContact = require('./hoverContact.js');
    var slider = require('./slider.js');
    var bgPage = require('./bgPage.js');

    var body = $('body');
    var windowWidth = $(window).outerWidth(), windowHeight = $(window).height();



    // isMobile.any ? body.addClass('is-mobile') : body.addClass('is-desktop');

    function resizeHandler(){
        windowWidth = $(window).outerWidth();
        windowHeight = $(window).height();
    }

    if($('#textCircle').length){
        animateCircle();
    }
    if($('.bloc-contact').length){
        hoverContact();
    }
    if($('.wrapper-sliders').length){
        slider();
    }
    if($('.bg-page').length){
        bgPage();
    }

    $(window).on('resize', throttle(
        requestAnimFrame(resizeHandler), 60)
    ).on('load', function(){

    });


    $(document).on('scroll', throttle(function(){

    }, 60));

});
