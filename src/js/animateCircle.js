var $ = require('jquery');
import {TweenMax, TimelineMax} from 'gsap';

module.exports = function(){
    var circle = $('#textCircle'),
    tlCircle = new TimelineMax({repeat: -1});

    tlCircle.to(circle, 20, {rotation: 360, ease: Power0.easeNone});
}
