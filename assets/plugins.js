// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());






// (function($){$.belowthefold=function(element,settings){var fold=$(window).height()+$(window).scrollTop();return fold<=$(element).offset().top-settings.threshold;};$.abovethetop=function(element,settings){var top=$(window).scrollTop();return top>=$(element).offset().top+$(element).height()-settings.threshold;};$.rightofscreen=function(element,settings){var fold=$(window).width()+$(window).scrollLeft();return fold<=$(element).offset().left-settings.threshold;};$.leftofscreen=function(element,settings){var left=$(window).scrollLeft();return left>=$(element).offset().left+$(element).width()-settings.threshold;};$.inviewport=function(element,settings){return!$.rightofscreen(element,settings)&&!$.leftofscreen(element,settings)&&!$.belowthefold(element,settings)&&!$.abovethetop(element,settings);};$.extend($.expr[':'],{"below-the-fold":function(a,i,m){return $.belowthefold(a,{threshold:0});},"above-the-top":function(a,i,m){return $.abovethetop(a,{threshold:0});},"left-of-screen":function(a,i,m){return $.leftofscreen(a,{threshold:0});},"right-of-screen":function(a,i,m){return $.rightofscreen(a,{threshold:0});},"in-viewport":function(a,i,m){return $.inviewport(a,{threshold:0});}});})(jQuery);

/**
 * jQuery Viewport Checker Plugin 1.7.4
 *
 * The MIT License (MIT)
 * Copyright (c) 2014 Dirk Groenen
 * 
 * @param  {Object} options
 * @return {Boolean}  
 */
(function($){
    $.fn.viewportChecker = function(useroptions){
        // Define options and extend with user
        var options = {
            classToAdd: 'viewport-in',
            classToRemove : 'viewport-out',
            offset: 100,
            repeat: false,
            invertBottomOffset: true,
            callbackFunction: function(elem, action){},
            scrollHorizontal: false
        };
        $.extend(options, useroptions);

        // Cache the given element and height of the browser
        var $elem = this,
            windowSize = {height: $(window).height(), width: $(window).width()},
            scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');

        /*
         * Main method that checks the elements and adds or removes the class(es)
         */
        this.checkElements = function(){
            var viewportStart, viewportEnd;

            // Set some vars to check with
            if(!options.scrollHorizontal){
                viewportStart = $(scrollElem).scrollTop();
                viewportEnd = (viewportStart + windowSize.height);
            }
            else{
                viewportStart = $(scrollElem).scrollLeft();
                viewportEnd = (viewportStart + windowSize.width);
            }

            // Loop through all given dom elements
            $elem.each(function(){
                var $obj = $(this),
                    objOptions = {},
                    attrOptions = {};

                //  Get any individual attribution data
                if ($obj.data('vp-add-class'))
                    attrOptions.classToAdd = $obj.data('vp-add-class');
                if ($obj.data('vp-remove-class'))
                    attrOptions.classToRemove = $obj.data('vp-remove-class');
                if ($obj.data('vp-offset'))
                    attrOptions.offset = $obj.data('vp-offset');
                if ($obj.data('vp-repeat'))
                    attrOptions.repeat = $obj.data('vp-repeat');
                if ($obj.data('vp-scrollHorizontal'))
                    attrOptions.scrollHorizontal = $obj.data('vp-scrollHorizontal');
                if ($obj.data('vp-invertBottomOffset'))
                    attrOptions.scrollHorizontal = $obj.data('vp-invertBottomOffset');

                // Extend objOptions with data attributes and default options
                $.extend(objOptions, options);
                $.extend(objOptions, attrOptions);

                // If class already exists; quit
                if ($obj.hasClass(objOptions.classToAdd) && !objOptions.repeat){
                    return;
                }

                // define the top position of the element and include the offset which makes is appear earlier or later
                var elemStart = (!objOptions.scrollHorizontal) ? Math.round( $obj.offset().top ) + objOptions.offset : Math.round( $obj.offset().left ) + objOptions.offset,
                    elemEnd = (!objOptions.scrollHorizontal) ? elemStart + $obj.height() : elemStart + $obj.width();

                if(objOptions.invertBottomOffset)
                    elemEnd -= (objOptions.offset * 2);

                // Add class if in viewport
                if ((elemStart < viewportEnd) && (elemEnd > viewportStart)){

                    // remove class
                    $obj.removeClass(objOptions.classToRemove);

                    $obj.addClass(objOptions.classToAdd);

                    // Do the callback function. Callback wil send the jQuery object as parameter
                    objOptions.callbackFunction($obj, "add");

                // Remove class if not in viewport and repeat is true
                } else if ($obj.hasClass(objOptions.classToAdd) && (objOptions.repeat)){
                    $obj.removeClass(objOptions.classToAdd);

                    // Do the callback function.
                    objOptions.callbackFunction($obj, "remove");
                }
            });

        };

        // Run checkelements on load and scroll
        $(window).bind("load scroll touchmove MSPointerMove", this.checkElements);

        // On resize change the height var
        $(window).resize(function(e){
            windowSize = {height: $(window).height(), width: $(window).width()},
            $elem.checkElements();
        });

        // trigger inital check if elements already visible
        this.checkElements();

        // Default jquery plugin behaviour
        return this;
    };
})(jQuery);







/*
 * jQuery Easing Compatibility v1 - http://gsgd.co.uk/sandbox/jquery.easing.php
 *
 * Adds compatibility for applications that use the pre 1.2 easing names
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */
// jQuery.extend( jQuery.easing,
// {
//     def: 'easeOutQuad',
//     swing: function (x, t, b, c, d) {
//         //alert(jQuery.easing.default);
//         return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
//     },
//     easeInQuad: function (x, t, b, c, d) {
//         return c*(t/=d)*t + b;
//     },
//     easeOutQuad: function (x, t, b, c, d) {
//         return -c *(t/=d)*(t-2) + b;
//     },
//     easeInOutQuad: function (x, t, b, c, d) {
//         if ((t/=d/2) < 1) return c/2*t*t + b;
//         return -c/2 * ((--t)*(t-2) - 1) + b;
//     },
//     easeInCubic: function (x, t, b, c, d) {
//         return c*(t/=d)*t*t + b;
//     },
//     easeOutCubic: function (x, t, b, c, d) {
//         return c*((t=t/d-1)*t*t + 1) + b;
//     },
//     easeInOutCubic: function (x, t, b, c, d) {
//         if ((t/=d/2) < 1) return c/2*t*t*t + b;
//         return c/2*((t-=2)*t*t + 2) + b;
//     },
//     easeInQuart: function (x, t, b, c, d) {
//         return c*(t/=d)*t*t*t + b;
//     },
//     easeOutQuart: function (x, t, b, c, d) {
//         return -c * ((t=t/d-1)*t*t*t - 1) + b;
//     },
//     easeInOutQuart: function (x, t, b, c, d) {
//         if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
//         return -c/2 * ((t-=2)*t*t*t - 2) + b;
//     },
//     easeInQuint: function (x, t, b, c, d) {
//         return c*(t/=d)*t*t*t*t + b;
//     },
//     easeOutQuint: function (x, t, b, c, d) {
//         return c*((t=t/d-1)*t*t*t*t + 1) + b;
//     },
//     easeInOutQuint: function (x, t, b, c, d) {
//         if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
//         return c/2*((t-=2)*t*t*t*t + 2) + b;
//     },
//     easeInSine: function (x, t, b, c, d) {
//         return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
//     },
//     easeOutSine: function (x, t, b, c, d) {
//         return c * Math.sin(t/d * (Math.PI/2)) + b;
//     },
//     easeInOutSine: function (x, t, b, c, d) {
//         return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
//     },
//     easeInExpo: function (x, t, b, c, d) {
//         return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
//     },
//     easeOutExpo: function (x, t, b, c, d) {
//         return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
//     },
//     easeInOutExpo: function (x, t, b, c, d) {
//         if (t==0) return b;
//         if (t==d) return b+c;
//         if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
//         return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
//     },
//     easeInCirc: function (x, t, b, c, d) {
//         return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
//     },
//     easeOutCirc: function (x, t, b, c, d) {
//         return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
//     },
//     easeInOutCirc: function (x, t, b, c, d) {
//         if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
//         return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
//     },
//     easeInElastic: function (x, t, b, c, d) {
//         var s=1.70158;var p=0;var a=c;
//         if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
//         if (a < Math.abs(c)) { a=c; var s=p/4; }
//         else var s = p/(2*Math.PI) * Math.asin (c/a);
//         return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
//     },
//     easeOutElastic: function (x, t, b, c, d) {
//         var s=1.70158;var p=0;var a=c;
//         if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
//         if (a < Math.abs(c)) { a=c; var s=p/4; }
//         else var s = p/(2*Math.PI) * Math.asin (c/a);
//         return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
//     },
//     easeInOutElastic: function (x, t, b, c, d) {
//         var s=1.70158;var p=0;var a=c;
//         if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
//         if (a < Math.abs(c)) { a=c; var s=p/4; }
//         else var s = p/(2*Math.PI) * Math.asin (c/a);
//         if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
//         return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
//     },
//     easeInBack: function (x, t, b, c, d, s) {
//         if (s == undefined) s = 1.70158;
//         return c*(t/=d)*t*((s+1)*t - s) + b;
//     },
//     easeOutBack: function (x, t, b, c, d, s) {
//         if (s == undefined) s = 1.70158;
//         return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
//     },
//     easeInOutBack: function (x, t, b, c, d, s) {
//         if (s == undefined) s = 1.70158; 
//         if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
//         return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
//     },
//     easeInBounce: function (x, t, b, c, d) {
//         return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
//     },
//     easeOutBounce: function (x, t, b, c, d) {
//         if ((t/=d) < (1/2.75)) {
//             return c*(7.5625*t*t) + b;
//         } else if (t < (2/2.75)) {
//             return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
//         } else if (t < (2.5/2.75)) {
//             return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
//         } else {
//             return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
//         }
//     },
//     easeInOutBounce: function (x, t, b, c, d) {
//         if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
//         return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
//     }
// });
