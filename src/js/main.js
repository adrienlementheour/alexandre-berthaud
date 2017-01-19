'use strict';

// var $ = require('./libs/jquery/dist/jquery.slim.min.js');
var $ = require('jquery');

var TweenMax = require('gsap');


$(function(){

    window.requestAnimFrame = require('./requestAnimFrame.js');
    var throttle = require('./throttle.js');

    var animateCircle = require('./animateCircle');

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

    $(window).on('resize', throttle(
        requestAnimFrame(resizeHandler), 60)
    ).on('load', function(){

    });


    $(document).on('scroll', throttle(function(){

    }, 60));

});
