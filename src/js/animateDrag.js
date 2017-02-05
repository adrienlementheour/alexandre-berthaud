var $ = require('jquery');
import {TweenMax, TimelineMax} from 'gsap';

module.exports = function(){
    var dragAnimation = $('.drag-animation'), dragIndicator = $('.drag-indicator'), dragLabel = $('.drag-label'),
    	tlDrag = new TimelineMax({repeat: -1, delay: 1});

    tlDrag.to(dragLabel, 0.5, {x: '-100%'});
    tlDrag.to(dragIndicator, 0.5, {scaleX: 1}, 0);
    tlDrag.to(dragLabel, 2, {x: '100%'});
    tlDrag.to(dragIndicator, 1.2, {opacity: 0}, 0.5);

    TweenMax.to(dragAnimation, 0.5, {opacity: 0, delay: 10});
}
