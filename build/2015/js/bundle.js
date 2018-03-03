/**
 * Parallax ImageScroll - jQuery plugin
 * Author: Peder A. Nielsen
 * Created date: 04.12.13
 * Updated date: 05.02.15
 * Version: 0.2.0
 * Company: Making Waves
 * Licensed under the MIT license
 */
;
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(root.jQuery);
    }
}(this, function ($) {
    'use strict';

    var Plugin,
        defaults = {
            image: null,
            imageAttribute: 'image',
            holderClass: 'imageHolder',
            imgClass: 'img-holder-img',
            container: $('body'),
            windowObject: $(window),
            speed: 0.2,
            coverRatio: 0.75,
            holderMinHeight: 200,
            holderMaxHeight: null,
            extraHeight: 0,
            mediaWidth: 1600,
            mediaHeight: 900,
            parallax: true,
            touch: false
        },
        pluginName = 'imageScroll',
        dataKey = "plugin_" + pluginName,
        __bind = function (fn, me) {
            return function () {
                return fn.apply(me, arguments);
            };
        },
        ImageScrollModernizr = {},
        docElement = document.documentElement,
        mod = 'imageScrollModernizr',
        modElem = document.createElement(mod),
        mStyle = modElem.style,
        omPrefixes = 'Webkit Moz O ms',
        cssomPrefixes = omPrefixes.split(' '),
        domPrefixes = omPrefixes.toLowerCase().split(' '),
        tests = {},
        lastTickTime = 0,
        supportedFeature = '',
        transformProperty,
        injectElementWithStyles = function (rule, callback, nodes, testnames) {

            var style, ret, node, docOverflow,
                div = document.createElement('div'),
                body = document.body,
                fakeBody = body || document.createElement('body');

            if (parseInt(nodes, 10)) {
                while (nodes--) {
                    node = document.createElement('div');
                    node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
                    div.appendChild(node);
                }
            }

            style = ['&#173;', '<style id="s', mod, '">', rule, '</style>'].join('');
            div.id = mod;
            (body ? div : fakeBody).innerHTML += style;
            fakeBody.appendChild(div);
            if (!body) {
                fakeBody.style.background = '';
                fakeBody.style.overflow = 'hidden';
                docOverflow = docElement.style.overflow;
                docElement.style.overflow = 'hidden';
                docElement.appendChild(fakeBody);
            }

            ret = callback(div, rule);
            if (!body) {
                fakeBody.parentNode.removeChild(fakeBody);
                docElement.style.overflow = docOverflow;
            } else {
                div.parentNode.removeChild(div);
            }

            return !!ret;

        };

    function is(obj, type) {
        return typeof obj === type;
    }

    function contains(str, substr) {
        return !!~('' + str).indexOf(substr);
    }

    function testProps(props, prefixed) {
        for (var i in props) {
            var prop = props[i];
            if (!contains(prop, "-") && mStyle[prop] !== undefined) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }

    function testDOMProps(props, obj, elem) {
        for (var i in props) {
            var item = obj[props[i]];
            if (item !== undefined) {

                if (elem === false) return props[i];

                if (is(item, 'function')) {
                    return item.bind(elem || obj);
                }

                return item;
            }
        }
        return false;
    }

    function testPropsAll(prop, prefixed, elem) {
        var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
            props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

        if (is(prefixed, "string") || is(prefixed, "undefined")) {
            return testProps(props, prefixed);
        } else {
            props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
            return testDOMProps(props, prefixed, elem);
        }
    }

    tests['csstransforms'] = function () {
        return !!testPropsAll('transform');
    };

    tests['csstransforms3d'] = function () {

        var ret = !!testPropsAll('perspective');

        if (ret && 'webkitPerspective' in docElement.style) {

            injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#imageScrollModernizr{left:9px;position:absolute;height:3px;}}', function (node, rule) {
                ret = node.offsetLeft === 9 && node.offsetHeight === 3;
            });
        }
        return ret;
    };

    ImageScrollModernizr.prefixed = function (prop, obj, elem) {
        if (!obj) {
            return testPropsAll(prop, 'pfx');
        } else {
            return testPropsAll(prop, obj, elem);
        }
    };

    window.requestAnimationFrame = ImageScrollModernizr.prefixed('requestAnimationFrame', window) || function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTickTime));
        var id = window.setTimeout(function () {
                callback(currTime + timeToCall);
            },
            timeToCall);
        lastTickTime = currTime + timeToCall;
        return id;
    };

    if (tests['csstransforms3d']()) {
        supportedFeature = 'csstransforms3d';
    } else if (tests['csstransforms']()) {
        supportedFeature = 'csstransforms';
    }

    if (supportedFeature !== '') {
        transformProperty = ImageScrollModernizr.prefixed('transform');
    }

    // The actual plugin constructor
    Plugin = function (imageHolder, options) {
        this.$imageHolder = $(imageHolder);
        this.settings = $.extend({}, defaults, options);
        this.image = this.$imageHolder.data(this.settings.imageAttribute) || this.settings.image;
        this.mediaWidth = this.$imageHolder.data('width') || this.settings.mediaWidth;
        this.mediaHeight = this.$imageHolder.data('height') || this.settings.mediaHeight;
        this.coverRatio = this.$imageHolder.data('cover-ratio') || this.settings.coverRatio;
        this.holderMinHeight = this.$imageHolder.data('min-height') || this.settings.holderMinHeight;
        this.holderMaxHeight = this.$imageHolder.data('max-height') || this.settings.holderMaxHeight;
        this.extraHeight = this.$imageHolder.data('extra-height') || this.settings.extraHeight;
        this.ticking = false;
        this.refresh = __bind(this.refresh, this);
        this._onScroll = __bind(this._onScroll, this);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend(Plugin.prototype, {
        constructor: Plugin,
        init: function () {
            if (this.image) {
                this.$scrollingElement = $('<img/>', {
                    src: this.image
                }).addClass(this.settings.imgClass);
            } else {
                throw new Error('You need to provide either a data-img attr or an image option');
            }

            if (this.settings.touch === true) {
                this.$scrollingElement.css({maxWidth: '100%'}).prependTo(this.$imageHolder);
            } else if (this.settings.parallax === true) {
                this.$scrollerHolder = $('<div/>', {
                    html: this.$imageHolder.html()
                }).css({
                    top: 0,
                    visibility: 'hidden',
                    position: 'fixed',
                    overflow: 'hidden'
                }).addClass(this.settings.holderClass).prependTo(this.settings.container);
                this.$imageHolder.css('visibility', 'hidden').empty();
                this.$scrollingElement.css({
                    position: 'absolute',
                    visibility: 'hidden',
                    maxWidth: 'none'
                }).prependTo(this.$scrollerHolder);
            } else {
                this.$scrollerHolder = this.$imageHolder.css({overflow: 'hidden'});
                this.$scrollingElement.css({position: 'relative', overflow: 'hidden'}).prependTo(this.$imageHolder);
            }

            if (this.settings.touch === false) {
                this._bindEvents();
                this.refresh();
            }
        },
        _adjustImgHolderHeights: function () {
            var winHeight = this.settings.windowObject.height(),
                winWidth = this.settings.windowObject.width() - this.settings.container.offset().left,
                imgHolderHeight = this.coverRatio * winHeight,
                imgTopPos,
                imgLeftPos,
                fromY,
                imgScrollingDistance,
                travelDistance,
                imgWidth,
                imgHeight,
                fakedImgHeight,
                imageDiff;
            imgHolderHeight = this.holderMaxHeight === null || this.holderMaxHeight > imgHolderHeight ? Math.floor(imgHolderHeight) : this.holderMaxHeight;
            imgHolderHeight = this.holderMinHeight < imgHolderHeight ? Math.floor(imgHolderHeight) : this.holderMinHeight;
            imgHolderHeight += this.extraHeight;
            fakedImgHeight = Math.floor(winHeight - (winHeight - imgHolderHeight) * this.settings.speed);
            imgWidth = Math.round(this.mediaWidth * (fakedImgHeight / this.mediaHeight));

            if (imgWidth >= winWidth) {
                imgHeight = fakedImgHeight;
            } else {
                imgWidth = winWidth;
                imgHeight = Math.round(this.mediaHeight * (imgWidth / this.mediaWidth));
            }

            imageDiff = fakedImgHeight - imgHolderHeight;
            travelDistance = winHeight + imgHolderHeight;
            imgScrollingDistance = (((winHeight * 2) * (1 - this.settings.speed)) - imageDiff);
            imgTopPos = -((imageDiff / 2) + ((imgHeight - fakedImgHeight) / 2));
            imgLeftPos = Math.round((imgWidth - winWidth) * -0.5);
            fromY = imgTopPos - (imgScrollingDistance / 2);

            this.$scrollingElement.css({
                height: imgHeight,
                width: imgWidth
            });
            this.$imageHolder.height(imgHolderHeight);

            this.$scrollerHolder.css({
                height: imgHolderHeight,
                width: imgWidth
            });

            this.scrollingState = {
                winHeight: winHeight,
                fromY: fromY,
                imgTopPos: imgTopPos,
                imgLeftPos: imgLeftPos,
                imgHolderHeight: imgHolderHeight,
                imgScrollingDistance: imgScrollingDistance,
                travelDistance: travelDistance,
                holderDistanceFromTop: this.$imageHolder.offset().top - this.settings.windowObject.scrollTop()
            };
        },
        _bindEvents: function () {
            this.settings.windowObject.on('resize', this.refresh);
            if (this.settings.parallax === true) {
                this.settings.windowObject.on('scroll', this._onScroll);
            }
        },
        _unBindEvents: function () {
            this.settings.windowObject.off('resize', this.refresh);
            if (this.settings.parallax === true) {
                this.settings.windowObject.off('scroll', this._onScroll);
            }
        },
        _onScroll: function () {
            this.scrollingState.holderDistanceFromTop = this.$imageHolder.offset().top - this.settings.windowObject.scrollTop();
            this._requestTick();
        },
        _requestTick: function () {
            var self = this;
            if (!this.ticking) {
                this.ticking = true;
                requestAnimationFrame(function () {
                    self._updatePositions();
                });
            }
        },
        _updatePositions: function () {
            if (this.scrollingState.holderDistanceFromTop <= (this.scrollingState.winHeight) && this.scrollingState.holderDistanceFromTop >= -this.scrollingState.imgHolderHeight) {
                var distanceFromTopAddedWinHeight = this.scrollingState.holderDistanceFromTop + this.scrollingState.imgHolderHeight,
                    distanceInPercent = distanceFromTopAddedWinHeight / this.scrollingState.travelDistance,
                    currentImgYPosition = Math.round(this.scrollingState.fromY + (this.scrollingState.imgScrollingDistance * (1 - distanceInPercent))),
                    leftOffset = this.settings.container.offset().left;

                this.$scrollerHolder.css(this._getCSSObject({
                    transform: transformProperty,
                    left: leftOffset,
                    x: Math.ceil(this.scrollingState.imgLeftPos) + (supportedFeature === '' && leftOffset > 0 ? leftOffset : 0),
                    y: Math.round(this.scrollingState.holderDistanceFromTop),
                    visibility: 'visible'
                }));

                this.$scrollingElement.css(this._getCSSObject({
                    transform: transformProperty,
                    x: 0,
                    y: currentImgYPosition,
                    visibility: 'visible'
                }));
            } else {
                this.$scrollerHolder.css({visibility: 'hidden'});
                this.$scrollingElement.css({visibility: 'hidden'});
            }

            this.ticking = false;
        },
        _updateFallbackPositions: function () {
            this.$scrollerHolder.css({width: '100%'});
            this.$scrollingElement.css({
                top: this.scrollingState.imgTopPos,
                left: this.scrollingState.imgLeftPos
            });
        },
        _getCSSObject: function (options) {
            if (supportedFeature === "csstransforms3d") {
                options.transform = "translate3d(" + options.x + "px, " + options.y + "px, 0)";
            } else if (supportedFeature === "csstransforms") {
                options.transform = "translate(" + options.x + "px, " + options.y + "px)";
            } else {
                options.top = options.y;
                options.left = options.x;
            }
            return options;
        },
        enable: function () {
            if (this.settings.touch === false) {
                this._bindEvents();
                this.refresh();
            }
        },
        disable: function () {
            if (this.settings.touch === false) {
                this._unBindEvents();
            }
        },
        refresh: function () {
            if (this.settings.touch === false) {
                this._adjustImgHolderHeights();
                if (this.settings.parallax === true) {
                    this._requestTick();
                } else {
                    this._updateFallbackPositions();
                }
            }
        },
        destroy: function () {
            //clean up events
            if (this.settings.touch === false) {
                this._unBindEvents();
            }

            //restore initial html structure
            if (this.settings.touch === true) {
                this.$imageHolder.removeAttr('style');
                this.$scrollingElement.remove();
            } else if (this.settings.parallax === true) {
                this.$scrollerHolder.find('.' + this.settings.imgClass).remove();
                this.$imageHolder.css({visibility: 'visible', height: 'auto'}).html(this.$scrollerHolder.html());
                this.$scrollerHolder.remove();
            } else {
                this.$imageHolder.css({overflow: 'auto'}).removeAttr('style');
                this.$scrollingElement.remove();
            }

            // Remove data
            this.$imageHolder.removeData();
        }
    });

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
        if (options === undefined || typeof options === 'object') {
            return this.each(function () {
                if (!$.data(this, dataKey)) {
                    // Create a new instance for each element in the matched jQuery set
                    // Also save the instance so it can be accessed later to use methods/properties etc
                    // e.g.
                    //    var instance = $('.img-holder').data('plugin_imageScroll');
                    //    instance.refresh();
                    $.data(this, dataKey, new Plugin(this, options));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            // Invoke the specified method on each selected element
            return this.each(function () {
                var instance = $.data(this, dataKey);
                // e.g.
                //    var instance = $('.img-holder');
                //    instance.imageScroll('refresh');
                if (instance instanceof Plugin && typeof instance[options] === 'function') {
                    instance[options].apply(instance, Array.prototype.slice.call(arguments, 1));
                }
            });
        }
    };

    // Expose defaults and Constructor (allowing overriding of prototype methods for example)
    $.fn[pluginName].defaults = Plugin.defaults = defaults;
    $.fn[pluginName].Plugin = Plugin;

    return Plugin;
}));
$(document).ready( function(){

    //initialize a navbar that is going to fade to transparent
    $(".fader").css("background-color", "rgba(0, 0, 0, 0.0)");

	//navbar scroll color changing
	$(window).scroll( function(){

		var height = $(window).scrollTop();
		if( height < 600 && $("nav").hasClass("fader") ) //if at the top of the window
			$("nav").css("background-color", "rgba(0, 0, 0, 0.0)");
		else
			$("nav").css("background-color", "rgba(23, 23, 23, 1.0)");
	});




	//TODO: make so only the navbar links work
	$("nav a").on('click', function(e){
        if($(this).data("target")) {
            e.preventDefault();
        }

		var $target = $("#" + $(this).data("target"));
		// console.log($target);
		$.smoothScroll({
			scrollTarget: $target,
			offset: -65 //offset for navbar
		});
	});



	//
	$(".slick-container").slick({
        autoplay: true,
        autoplaySpeed: 3000,
		dots: false,
		arrows: false,
        fade: true
	});
	
	
	moveSched();



});


function moveSched() {
	$('.day_btn').each(function(s){
		$(this).click(function(){
			schedPosition = s;
			$('#schedule_page').stop();
			$('#schedule_page').animate({'right' : $('.column').width() * schedPosition}, 300, 'swing');
			$('.day_btn').removeClass('day_current');
			$(this).addClass('day_current');
		});
	});
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS5pbWFnZVNjcm9sbC5qcyIsInphcHBsaWNhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUGFyYWxsYXggSW1hZ2VTY3JvbGwgLSBqUXVlcnkgcGx1Z2luXG4gKiBBdXRob3I6IFBlZGVyIEEuIE5pZWxzZW5cbiAqIENyZWF0ZWQgZGF0ZTogMDQuMTIuMTNcbiAqIFVwZGF0ZWQgZGF0ZTogMDUuMDIuMTVcbiAqIFZlcnNpb246IDAuMi4wXG4gKiBDb21wYW55OiBNYWtpbmcgV2F2ZXNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG47XG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmYWN0b3J5KHJvb3QualF1ZXJ5KTtcbiAgICB9XG59KHRoaXMsIGZ1bmN0aW9uICgkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIFBsdWdpbixcbiAgICAgICAgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgICAgIGltYWdlQXR0cmlidXRlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgaG9sZGVyQ2xhc3M6ICdpbWFnZUhvbGRlcicsXG4gICAgICAgICAgICBpbWdDbGFzczogJ2ltZy1ob2xkZXItaW1nJyxcbiAgICAgICAgICAgIGNvbnRhaW5lcjogJCgnYm9keScpLFxuICAgICAgICAgICAgd2luZG93T2JqZWN0OiAkKHdpbmRvdyksXG4gICAgICAgICAgICBzcGVlZDogMC4yLFxuICAgICAgICAgICAgY292ZXJSYXRpbzogMC43NSxcbiAgICAgICAgICAgIGhvbGRlck1pbkhlaWdodDogMjAwLFxuICAgICAgICAgICAgaG9sZGVyTWF4SGVpZ2h0OiBudWxsLFxuICAgICAgICAgICAgZXh0cmFIZWlnaHQ6IDAsXG4gICAgICAgICAgICBtZWRpYVdpZHRoOiAxNjAwLFxuICAgICAgICAgICAgbWVkaWFIZWlnaHQ6IDkwMCxcbiAgICAgICAgICAgIHBhcmFsbGF4OiB0cnVlLFxuICAgICAgICAgICAgdG91Y2g6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHBsdWdpbk5hbWUgPSAnaW1hZ2VTY3JvbGwnLFxuICAgICAgICBkYXRhS2V5ID0gXCJwbHVnaW5fXCIgKyBwbHVnaW5OYW1lLFxuICAgICAgICBfX2JpbmQgPSBmdW5jdGlvbiAoZm4sIG1lKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIEltYWdlU2Nyb2xsTW9kZXJuaXpyID0ge30sXG4gICAgICAgIGRvY0VsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICAgIG1vZCA9ICdpbWFnZVNjcm9sbE1vZGVybml6cicsXG4gICAgICAgIG1vZEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG1vZCksXG4gICAgICAgIG1TdHlsZSA9IG1vZEVsZW0uc3R5bGUsXG4gICAgICAgIG9tUHJlZml4ZXMgPSAnV2Via2l0IE1veiBPIG1zJyxcbiAgICAgICAgY3Nzb21QcmVmaXhlcyA9IG9tUHJlZml4ZXMuc3BsaXQoJyAnKSxcbiAgICAgICAgZG9tUHJlZml4ZXMgPSBvbVByZWZpeGVzLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKSxcbiAgICAgICAgdGVzdHMgPSB7fSxcbiAgICAgICAgbGFzdFRpY2tUaW1lID0gMCxcbiAgICAgICAgc3VwcG9ydGVkRmVhdHVyZSA9ICcnLFxuICAgICAgICB0cmFuc2Zvcm1Qcm9wZXJ0eSxcbiAgICAgICAgaW5qZWN0RWxlbWVudFdpdGhTdHlsZXMgPSBmdW5jdGlvbiAocnVsZSwgY2FsbGJhY2ssIG5vZGVzLCB0ZXN0bmFtZXMpIHtcblxuICAgICAgICAgICAgdmFyIHN0eWxlLCByZXQsIG5vZGUsIGRvY092ZXJmbG93LFxuICAgICAgICAgICAgICAgIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICAgICAgICAgIGJvZHkgPSBkb2N1bWVudC5ib2R5LFxuICAgICAgICAgICAgICAgIGZha2VCb2R5ID0gYm9keSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib2R5Jyk7XG5cbiAgICAgICAgICAgIGlmIChwYXJzZUludChub2RlcywgMTApKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKG5vZGVzLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmlkID0gdGVzdG5hbWVzID8gdGVzdG5hbWVzW25vZGVzXSA6IG1vZCArIChub2RlcyArIDEpO1xuICAgICAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdHlsZSA9IFsnJiMxNzM7JywgJzxzdHlsZSBpZD1cInMnLCBtb2QsICdcIj4nLCBydWxlLCAnPC9zdHlsZT4nXS5qb2luKCcnKTtcbiAgICAgICAgICAgIGRpdi5pZCA9IG1vZDtcbiAgICAgICAgICAgIChib2R5ID8gZGl2IDogZmFrZUJvZHkpLmlubmVySFRNTCArPSBzdHlsZTtcbiAgICAgICAgICAgIGZha2VCb2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgICAgICAgICBmYWtlQm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgICAgICAgICAgICAgZmFrZUJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICBkb2NPdmVyZmxvdyA9IGRvY0VsZW1lbnQuc3R5bGUub3ZlcmZsb3c7XG4gICAgICAgICAgICAgICAgZG9jRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgIGRvY0VsZW1lbnQuYXBwZW5kQ2hpbGQoZmFrZUJvZHkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXQgPSBjYWxsYmFjayhkaXYsIHJ1bGUpO1xuICAgICAgICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgICAgICAgICAgZmFrZUJvZHkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChmYWtlQm9keSk7XG4gICAgICAgICAgICAgICAgZG9jRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IGRvY092ZXJmbG93O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXYpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gISFyZXQ7XG5cbiAgICAgICAgfTtcblxuICAgIGZ1bmN0aW9uIGlzKG9iaiwgdHlwZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gdHlwZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb250YWlucyhzdHIsIHN1YnN0cikge1xuICAgICAgICByZXR1cm4gISF+KCcnICsgc3RyKS5pbmRleE9mKHN1YnN0cik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGVzdFByb3BzKHByb3BzLCBwcmVmaXhlZCkge1xuICAgICAgICBmb3IgKHZhciBpIGluIHByb3BzKSB7XG4gICAgICAgICAgICB2YXIgcHJvcCA9IHByb3BzW2ldO1xuICAgICAgICAgICAgaWYgKCFjb250YWlucyhwcm9wLCBcIi1cIikgJiYgbVN0eWxlW3Byb3BdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJlZml4ZWQgPT0gJ3BmeCcgPyBwcm9wIDogdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGVzdERPTVByb3BzKHByb3BzLCBvYmosIGVsZW0pIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBwcm9wcykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBvYmpbcHJvcHNbaV1dO1xuICAgICAgICAgICAgaWYgKGl0ZW0gIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGVsZW0gPT09IGZhbHNlKSByZXR1cm4gcHJvcHNbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAoaXMoaXRlbSwgJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uYmluZChlbGVtIHx8IG9iaik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRlc3RQcm9wc0FsbChwcm9wLCBwcmVmaXhlZCwgZWxlbSkge1xuICAgICAgICB2YXIgdWNQcm9wID0gcHJvcC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3Auc2xpY2UoMSksXG4gICAgICAgICAgICBwcm9wcyA9IChwcm9wICsgJyAnICsgY3Nzb21QcmVmaXhlcy5qb2luKHVjUHJvcCArICcgJykgKyB1Y1Byb3ApLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgaWYgKGlzKHByZWZpeGVkLCBcInN0cmluZ1wiKSB8fCBpcyhwcmVmaXhlZCwgXCJ1bmRlZmluZWRcIikpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXN0UHJvcHMocHJvcHMsIHByZWZpeGVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb3BzID0gKHByb3AgKyAnICcgKyAoZG9tUHJlZml4ZXMpLmpvaW4odWNQcm9wICsgJyAnKSArIHVjUHJvcCkuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIHJldHVybiB0ZXN0RE9NUHJvcHMocHJvcHMsIHByZWZpeGVkLCBlbGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRlc3RzWydjc3N0cmFuc2Zvcm1zJ10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAhIXRlc3RQcm9wc0FsbCgndHJhbnNmb3JtJyk7XG4gICAgfTtcblxuICAgIHRlc3RzWydjc3N0cmFuc2Zvcm1zM2QnXSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgcmV0ID0gISF0ZXN0UHJvcHNBbGwoJ3BlcnNwZWN0aXZlJyk7XG5cbiAgICAgICAgaWYgKHJldCAmJiAnd2Via2l0UGVyc3BlY3RpdmUnIGluIGRvY0VsZW1lbnQuc3R5bGUpIHtcblxuICAgICAgICAgICAgaW5qZWN0RWxlbWVudFdpdGhTdHlsZXMoJ0BtZWRpYSAodHJhbnNmb3JtLTNkKSwoLXdlYmtpdC10cmFuc2Zvcm0tM2QpeyNpbWFnZVNjcm9sbE1vZGVybml6cntsZWZ0OjlweDtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6M3B4O319JywgZnVuY3Rpb24gKG5vZGUsIHJ1bGUpIHtcbiAgICAgICAgICAgICAgICByZXQgPSBub2RlLm9mZnNldExlZnQgPT09IDkgJiYgbm9kZS5vZmZzZXRIZWlnaHQgPT09IDM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG5cbiAgICBJbWFnZVNjcm9sbE1vZGVybml6ci5wcmVmaXhlZCA9IGZ1bmN0aW9uIChwcm9wLCBvYmosIGVsZW0pIHtcbiAgICAgICAgaWYgKCFvYmopIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXN0UHJvcHNBbGwocHJvcCwgJ3BmeCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRlc3RQcm9wc0FsbChwcm9wLCBvYmosIGVsZW0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBJbWFnZVNjcm9sbE1vZGVybml6ci5wcmVmaXhlZCgncmVxdWVzdEFuaW1hdGlvbkZyYW1lJywgd2luZG93KSB8fCBmdW5jdGlvbiAoY2FsbGJhY2ssIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGlja1RpbWUpKTtcbiAgICAgICAgdmFyIGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGltZVRvQ2FsbCk7XG4gICAgICAgIGxhc3RUaWNrVGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH07XG5cbiAgICBpZiAodGVzdHNbJ2Nzc3RyYW5zZm9ybXMzZCddKCkpIHtcbiAgICAgICAgc3VwcG9ydGVkRmVhdHVyZSA9ICdjc3N0cmFuc2Zvcm1zM2QnO1xuICAgIH0gZWxzZSBpZiAodGVzdHNbJ2Nzc3RyYW5zZm9ybXMnXSgpKSB7XG4gICAgICAgIHN1cHBvcnRlZEZlYXR1cmUgPSAnY3NzdHJhbnNmb3Jtcyc7XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnRlZEZlYXR1cmUgIT09ICcnKSB7XG4gICAgICAgIHRyYW5zZm9ybVByb3BlcnR5ID0gSW1hZ2VTY3JvbGxNb2Rlcm5penIucHJlZml4ZWQoJ3RyYW5zZm9ybScpO1xuICAgIH1cblxuICAgIC8vIFRoZSBhY3R1YWwgcGx1Z2luIGNvbnN0cnVjdG9yXG4gICAgUGx1Z2luID0gZnVuY3Rpb24gKGltYWdlSG9sZGVyLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuJGltYWdlSG9sZGVyID0gJChpbWFnZUhvbGRlcik7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmltYWdlID0gdGhpcy4kaW1hZ2VIb2xkZXIuZGF0YSh0aGlzLnNldHRpbmdzLmltYWdlQXR0cmlidXRlKSB8fCB0aGlzLnNldHRpbmdzLmltYWdlO1xuICAgICAgICB0aGlzLm1lZGlhV2lkdGggPSB0aGlzLiRpbWFnZUhvbGRlci5kYXRhKCd3aWR0aCcpIHx8IHRoaXMuc2V0dGluZ3MubWVkaWFXaWR0aDtcbiAgICAgICAgdGhpcy5tZWRpYUhlaWdodCA9IHRoaXMuJGltYWdlSG9sZGVyLmRhdGEoJ2hlaWdodCcpIHx8IHRoaXMuc2V0dGluZ3MubWVkaWFIZWlnaHQ7XG4gICAgICAgIHRoaXMuY292ZXJSYXRpbyA9IHRoaXMuJGltYWdlSG9sZGVyLmRhdGEoJ2NvdmVyLXJhdGlvJykgfHwgdGhpcy5zZXR0aW5ncy5jb3ZlclJhdGlvO1xuICAgICAgICB0aGlzLmhvbGRlck1pbkhlaWdodCA9IHRoaXMuJGltYWdlSG9sZGVyLmRhdGEoJ21pbi1oZWlnaHQnKSB8fCB0aGlzLnNldHRpbmdzLmhvbGRlck1pbkhlaWdodDtcbiAgICAgICAgdGhpcy5ob2xkZXJNYXhIZWlnaHQgPSB0aGlzLiRpbWFnZUhvbGRlci5kYXRhKCdtYXgtaGVpZ2h0JykgfHwgdGhpcy5zZXR0aW5ncy5ob2xkZXJNYXhIZWlnaHQ7XG4gICAgICAgIHRoaXMuZXh0cmFIZWlnaHQgPSB0aGlzLiRpbWFnZUhvbGRlci5kYXRhKCdleHRyYS1oZWlnaHQnKSB8fCB0aGlzLnNldHRpbmdzLmV4dHJhSGVpZ2h0O1xuICAgICAgICB0aGlzLnRpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZWZyZXNoID0gX19iaW5kKHRoaXMucmVmcmVzaCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX29uU2Nyb2xsID0gX19iaW5kKHRoaXMuX29uU2Nyb2xsLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fZGVmYXVsdHMgPSBkZWZhdWx0cztcbiAgICAgICAgdGhpcy5fbmFtZSA9IHBsdWdpbk5hbWU7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIC8vIEF2b2lkIFBsdWdpbi5wcm90b3R5cGUgY29uZmxpY3RzXG4gICAgJC5leHRlbmQoUGx1Z2luLnByb3RvdHlwZSwge1xuICAgICAgICBjb25zdHJ1Y3RvcjogUGx1Z2luLFxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbWFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHNjcm9sbGluZ0VsZW1lbnQgPSAkKCc8aW1nLz4nLCB7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogdGhpcy5pbWFnZVxuICAgICAgICAgICAgICAgIH0pLmFkZENsYXNzKHRoaXMuc2V0dGluZ3MuaW1nQ2xhc3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBuZWVkIHRvIHByb3ZpZGUgZWl0aGVyIGEgZGF0YS1pbWcgYXR0ciBvciBhbiBpbWFnZSBvcHRpb24nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MudG91Y2ggPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzY3JvbGxpbmdFbGVtZW50LmNzcyh7bWF4V2lkdGg6ICcxMDAlJ30pLnByZXBlbmRUbyh0aGlzLiRpbWFnZUhvbGRlcik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2V0dGluZ3MucGFyYWxsYXggPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzY3JvbGxlckhvbGRlciA9ICQoJzxkaXYvPicsIHtcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogdGhpcy4kaW1hZ2VIb2xkZXIuaHRtbCgpXG4gICAgICAgICAgICAgICAgfSkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgICAgICAgICAgICAgIH0pLmFkZENsYXNzKHRoaXMuc2V0dGluZ3MuaG9sZGVyQ2xhc3MpLnByZXBlbmRUbyh0aGlzLnNldHRpbmdzLmNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgdGhpcy4kaW1hZ2VIb2xkZXIuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpLmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2Nyb2xsaW5nRWxlbWVudC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnbm9uZSdcbiAgICAgICAgICAgICAgICB9KS5wcmVwZW5kVG8odGhpcy4kc2Nyb2xsZXJIb2xkZXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzY3JvbGxlckhvbGRlciA9IHRoaXMuJGltYWdlSG9sZGVyLmNzcyh7b3ZlcmZsb3c6ICdoaWRkZW4nfSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2Nyb2xsaW5nRWxlbWVudC5jc3Moe3Bvc2l0aW9uOiAncmVsYXRpdmUnLCBvdmVyZmxvdzogJ2hpZGRlbid9KS5wcmVwZW5kVG8odGhpcy4kaW1hZ2VIb2xkZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy50b3VjaCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9iaW5kRXZlbnRzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIF9hZGp1c3RJbWdIb2xkZXJIZWlnaHRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd2luSGVpZ2h0ID0gdGhpcy5zZXR0aW5ncy53aW5kb3dPYmplY3QuaGVpZ2h0KCksXG4gICAgICAgICAgICAgICAgd2luV2lkdGggPSB0aGlzLnNldHRpbmdzLndpbmRvd09iamVjdC53aWR0aCgpIC0gdGhpcy5zZXR0aW5ncy5jb250YWluZXIub2Zmc2V0KCkubGVmdCxcbiAgICAgICAgICAgICAgICBpbWdIb2xkZXJIZWlnaHQgPSB0aGlzLmNvdmVyUmF0aW8gKiB3aW5IZWlnaHQsXG4gICAgICAgICAgICAgICAgaW1nVG9wUG9zLFxuICAgICAgICAgICAgICAgIGltZ0xlZnRQb3MsXG4gICAgICAgICAgICAgICAgZnJvbVksXG4gICAgICAgICAgICAgICAgaW1nU2Nyb2xsaW5nRGlzdGFuY2UsXG4gICAgICAgICAgICAgICAgdHJhdmVsRGlzdGFuY2UsXG4gICAgICAgICAgICAgICAgaW1nV2lkdGgsXG4gICAgICAgICAgICAgICAgaW1nSGVpZ2h0LFxuICAgICAgICAgICAgICAgIGZha2VkSW1nSGVpZ2h0LFxuICAgICAgICAgICAgICAgIGltYWdlRGlmZjtcbiAgICAgICAgICAgIGltZ0hvbGRlckhlaWdodCA9IHRoaXMuaG9sZGVyTWF4SGVpZ2h0ID09PSBudWxsIHx8IHRoaXMuaG9sZGVyTWF4SGVpZ2h0ID4gaW1nSG9sZGVySGVpZ2h0ID8gTWF0aC5mbG9vcihpbWdIb2xkZXJIZWlnaHQpIDogdGhpcy5ob2xkZXJNYXhIZWlnaHQ7XG4gICAgICAgICAgICBpbWdIb2xkZXJIZWlnaHQgPSB0aGlzLmhvbGRlck1pbkhlaWdodCA8IGltZ0hvbGRlckhlaWdodCA/IE1hdGguZmxvb3IoaW1nSG9sZGVySGVpZ2h0KSA6IHRoaXMuaG9sZGVyTWluSGVpZ2h0O1xuICAgICAgICAgICAgaW1nSG9sZGVySGVpZ2h0ICs9IHRoaXMuZXh0cmFIZWlnaHQ7XG4gICAgICAgICAgICBmYWtlZEltZ0hlaWdodCA9IE1hdGguZmxvb3Iod2luSGVpZ2h0IC0gKHdpbkhlaWdodCAtIGltZ0hvbGRlckhlaWdodCkgKiB0aGlzLnNldHRpbmdzLnNwZWVkKTtcbiAgICAgICAgICAgIGltZ1dpZHRoID0gTWF0aC5yb3VuZCh0aGlzLm1lZGlhV2lkdGggKiAoZmFrZWRJbWdIZWlnaHQgLyB0aGlzLm1lZGlhSGVpZ2h0KSk7XG5cbiAgICAgICAgICAgIGlmIChpbWdXaWR0aCA+PSB3aW5XaWR0aCkge1xuICAgICAgICAgICAgICAgIGltZ0hlaWdodCA9IGZha2VkSW1nSGVpZ2h0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbWdXaWR0aCA9IHdpbldpZHRoO1xuICAgICAgICAgICAgICAgIGltZ0hlaWdodCA9IE1hdGgucm91bmQodGhpcy5tZWRpYUhlaWdodCAqIChpbWdXaWR0aCAvIHRoaXMubWVkaWFXaWR0aCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWFnZURpZmYgPSBmYWtlZEltZ0hlaWdodCAtIGltZ0hvbGRlckhlaWdodDtcbiAgICAgICAgICAgIHRyYXZlbERpc3RhbmNlID0gd2luSGVpZ2h0ICsgaW1nSG9sZGVySGVpZ2h0O1xuICAgICAgICAgICAgaW1nU2Nyb2xsaW5nRGlzdGFuY2UgPSAoKCh3aW5IZWlnaHQgKiAyKSAqICgxIC0gdGhpcy5zZXR0aW5ncy5zcGVlZCkpIC0gaW1hZ2VEaWZmKTtcbiAgICAgICAgICAgIGltZ1RvcFBvcyA9IC0oKGltYWdlRGlmZiAvIDIpICsgKChpbWdIZWlnaHQgLSBmYWtlZEltZ0hlaWdodCkgLyAyKSk7XG4gICAgICAgICAgICBpbWdMZWZ0UG9zID0gTWF0aC5yb3VuZCgoaW1nV2lkdGggLSB3aW5XaWR0aCkgKiAtMC41KTtcbiAgICAgICAgICAgIGZyb21ZID0gaW1nVG9wUG9zIC0gKGltZ1Njcm9sbGluZ0Rpc3RhbmNlIC8gMik7XG5cbiAgICAgICAgICAgIHRoaXMuJHNjcm9sbGluZ0VsZW1lbnQuY3NzKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGltZ0hlaWdodCxcbiAgICAgICAgICAgICAgICB3aWR0aDogaW1nV2lkdGhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kaW1hZ2VIb2xkZXIuaGVpZ2h0KGltZ0hvbGRlckhlaWdodCk7XG5cbiAgICAgICAgICAgIHRoaXMuJHNjcm9sbGVySG9sZGVyLmNzcyh7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBpbWdIb2xkZXJIZWlnaHQsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGltZ1dpZHRoXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5zY3JvbGxpbmdTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICB3aW5IZWlnaHQ6IHdpbkhlaWdodCxcbiAgICAgICAgICAgICAgICBmcm9tWTogZnJvbVksXG4gICAgICAgICAgICAgICAgaW1nVG9wUG9zOiBpbWdUb3BQb3MsXG4gICAgICAgICAgICAgICAgaW1nTGVmdFBvczogaW1nTGVmdFBvcyxcbiAgICAgICAgICAgICAgICBpbWdIb2xkZXJIZWlnaHQ6IGltZ0hvbGRlckhlaWdodCxcbiAgICAgICAgICAgICAgICBpbWdTY3JvbGxpbmdEaXN0YW5jZTogaW1nU2Nyb2xsaW5nRGlzdGFuY2UsXG4gICAgICAgICAgICAgICAgdHJhdmVsRGlzdGFuY2U6IHRyYXZlbERpc3RhbmNlLFxuICAgICAgICAgICAgICAgIGhvbGRlckRpc3RhbmNlRnJvbVRvcDogdGhpcy4kaW1hZ2VIb2xkZXIub2Zmc2V0KCkudG9wIC0gdGhpcy5zZXR0aW5ncy53aW5kb3dPYmplY3Quc2Nyb2xsVG9wKClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIF9iaW5kRXZlbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLndpbmRvd09iamVjdC5vbigncmVzaXplJywgdGhpcy5yZWZyZXNoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnBhcmFsbGF4ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy53aW5kb3dPYmplY3Qub24oJ3Njcm9sbCcsIHRoaXMuX29uU2Nyb2xsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgX3VuQmluZEV2ZW50czogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy53aW5kb3dPYmplY3Qub2ZmKCdyZXNpemUnLCB0aGlzLnJlZnJlc2gpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MucGFyYWxsYXggPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLndpbmRvd09iamVjdC5vZmYoJ3Njcm9sbCcsIHRoaXMuX29uU2Nyb2xsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgX29uU2Nyb2xsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbGluZ1N0YXRlLmhvbGRlckRpc3RhbmNlRnJvbVRvcCA9IHRoaXMuJGltYWdlSG9sZGVyLm9mZnNldCgpLnRvcCAtIHRoaXMuc2V0dGluZ3Mud2luZG93T2JqZWN0LnNjcm9sbFRvcCgpO1xuICAgICAgICAgICAgdGhpcy5fcmVxdWVzdFRpY2soKTtcbiAgICAgICAgfSxcbiAgICAgICAgX3JlcXVlc3RUaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoIXRoaXMudGlja2luZykge1xuICAgICAgICAgICAgICAgIHRoaXMudGlja2luZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fdXBkYXRlUG9zaXRpb25zKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIF91cGRhdGVQb3NpdGlvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbGluZ1N0YXRlLmhvbGRlckRpc3RhbmNlRnJvbVRvcCA8PSAodGhpcy5zY3JvbGxpbmdTdGF0ZS53aW5IZWlnaHQpICYmIHRoaXMuc2Nyb2xsaW5nU3RhdGUuaG9sZGVyRGlzdGFuY2VGcm9tVG9wID49IC10aGlzLnNjcm9sbGluZ1N0YXRlLmltZ0hvbGRlckhlaWdodCkge1xuICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZUZyb21Ub3BBZGRlZFdpbkhlaWdodCA9IHRoaXMuc2Nyb2xsaW5nU3RhdGUuaG9sZGVyRGlzdGFuY2VGcm9tVG9wICsgdGhpcy5zY3JvbGxpbmdTdGF0ZS5pbWdIb2xkZXJIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlSW5QZXJjZW50ID0gZGlzdGFuY2VGcm9tVG9wQWRkZWRXaW5IZWlnaHQgLyB0aGlzLnNjcm9sbGluZ1N0YXRlLnRyYXZlbERpc3RhbmNlLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW1nWVBvc2l0aW9uID0gTWF0aC5yb3VuZCh0aGlzLnNjcm9sbGluZ1N0YXRlLmZyb21ZICsgKHRoaXMuc2Nyb2xsaW5nU3RhdGUuaW1nU2Nyb2xsaW5nRGlzdGFuY2UgKiAoMSAtIGRpc3RhbmNlSW5QZXJjZW50KSkpLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0T2Zmc2V0ID0gdGhpcy5zZXR0aW5ncy5jb250YWluZXIub2Zmc2V0KCkubGVmdDtcblxuICAgICAgICAgICAgICAgIHRoaXMuJHNjcm9sbGVySG9sZGVyLmNzcyh0aGlzLl9nZXRDU1NPYmplY3Qoe1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVByb3BlcnR5LFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBsZWZ0T2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICB4OiBNYXRoLmNlaWwodGhpcy5zY3JvbGxpbmdTdGF0ZS5pbWdMZWZ0UG9zKSArIChzdXBwb3J0ZWRGZWF0dXJlID09PSAnJyAmJiBsZWZ0T2Zmc2V0ID4gMCA/IGxlZnRPZmZzZXQgOiAwKSxcbiAgICAgICAgICAgICAgICAgICAgeTogTWF0aC5yb3VuZCh0aGlzLnNjcm9sbGluZ1N0YXRlLmhvbGRlckRpc3RhbmNlRnJvbVRvcCksXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJ1xuICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuJHNjcm9sbGluZ0VsZW1lbnQuY3NzKHRoaXMuX2dldENTU09iamVjdCh7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtUHJvcGVydHksXG4gICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IGN1cnJlbnRJbWdZUG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJ1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2Nyb2xsZXJIb2xkZXIuY3NzKHt2aXNpYmlsaXR5OiAnaGlkZGVuJ30pO1xuICAgICAgICAgICAgICAgIHRoaXMuJHNjcm9sbGluZ0VsZW1lbnQuY3NzKHt2aXNpYmlsaXR5OiAnaGlkZGVuJ30pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnRpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgX3VwZGF0ZUZhbGxiYWNrUG9zaXRpb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLiRzY3JvbGxlckhvbGRlci5jc3Moe3dpZHRoOiAnMTAwJSd9KTtcbiAgICAgICAgICAgIHRoaXMuJHNjcm9sbGluZ0VsZW1lbnQuY3NzKHtcbiAgICAgICAgICAgICAgICB0b3A6IHRoaXMuc2Nyb2xsaW5nU3RhdGUuaW1nVG9wUG9zLFxuICAgICAgICAgICAgICAgIGxlZnQ6IHRoaXMuc2Nyb2xsaW5nU3RhdGUuaW1nTGVmdFBvc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIF9nZXRDU1NPYmplY3Q6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAoc3VwcG9ydGVkRmVhdHVyZSA9PT0gXCJjc3N0cmFuc2Zvcm1zM2RcIikge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChcIiArIG9wdGlvbnMueCArIFwicHgsIFwiICsgb3B0aW9ucy55ICsgXCJweCwgMClcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydGVkRmVhdHVyZSA9PT0gXCJjc3N0cmFuc2Zvcm1zXCIpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiICsgb3B0aW9ucy54ICsgXCJweCwgXCIgKyBvcHRpb25zLnkgKyBcInB4KVwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnRvcCA9IG9wdGlvbnMueTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxlZnQgPSBvcHRpb25zLng7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgICAgfSxcbiAgICAgICAgZW5hYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy50b3VjaCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9iaW5kRXZlbnRzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnRvdWNoID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VuQmluZEV2ZW50cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZWZyZXNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy50b3VjaCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGp1c3RJbWdIb2xkZXJIZWlnaHRzKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MucGFyYWxsYXggPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVxdWVzdFRpY2soKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVGYWxsYmFja1Bvc2l0aW9ucygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9jbGVhbiB1cCBldmVudHNcbiAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnRvdWNoID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VuQmluZEV2ZW50cygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3Jlc3RvcmUgaW5pdGlhbCBodG1sIHN0cnVjdHVyZVxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MudG91Y2ggPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRpbWFnZUhvbGRlci5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHNjcm9sbGluZ0VsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2V0dGluZ3MucGFyYWxsYXggPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzY3JvbGxlckhvbGRlci5maW5kKCcuJyArIHRoaXMuc2V0dGluZ3MuaW1nQ2xhc3MpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGltYWdlSG9sZGVyLmNzcyh7dmlzaWJpbGl0eTogJ3Zpc2libGUnLCBoZWlnaHQ6ICdhdXRvJ30pLmh0bWwodGhpcy4kc2Nyb2xsZXJIb2xkZXIuaHRtbCgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRzY3JvbGxlckhvbGRlci5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaW1hZ2VIb2xkZXIuY3NzKHtvdmVyZmxvdzogJ2F1dG8nfSkucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRzY3JvbGxpbmdFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZW1vdmUgZGF0YVxuICAgICAgICAgICAgdGhpcy4kaW1hZ2VIb2xkZXIucmVtb3ZlRGF0YSgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBBIHJlYWxseSBsaWdodHdlaWdodCBwbHVnaW4gd3JhcHBlciBhcm91bmQgdGhlIGNvbnN0cnVjdG9yLFxuICAgIC8vIHByZXZlbnRpbmcgYWdhaW5zdCBtdWx0aXBsZSBpbnN0YW50aWF0aW9uc1xuICAgICQuZm5bcGx1Z2luTmFtZV0gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkLmRhdGEodGhpcywgZGF0YUtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIGZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIG1hdGNoZWQgalF1ZXJ5IHNldFxuICAgICAgICAgICAgICAgICAgICAvLyBBbHNvIHNhdmUgdGhlIGluc3RhbmNlIHNvIGl0IGNhbiBiZSBhY2Nlc3NlZCBsYXRlciB0byB1c2UgbWV0aG9kcy9wcm9wZXJ0aWVzIGV0Y1xuICAgICAgICAgICAgICAgICAgICAvLyBlLmcuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIHZhciBpbnN0YW5jZSA9ICQoJy5pbWctaG9sZGVyJykuZGF0YSgncGx1Z2luX2ltYWdlU2Nyb2xsJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIGluc3RhbmNlLnJlZnJlc2goKTtcbiAgICAgICAgICAgICAgICAgICAgJC5kYXRhKHRoaXMsIGRhdGFLZXksIG5ldyBQbHVnaW4odGhpcywgb3B0aW9ucykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJyAmJiBvcHRpb25zWzBdICE9PSAnXycgJiYgb3B0aW9ucyAhPT0gJ2luaXQnKSB7XG4gICAgICAgICAgICAvLyBJbnZva2UgdGhlIHNwZWNpZmllZCBtZXRob2Qgb24gZWFjaCBzZWxlY3RlZCBlbGVtZW50XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSAkLmRhdGEodGhpcywgZGF0YUtleSk7XG4gICAgICAgICAgICAgICAgLy8gZS5nLlxuICAgICAgICAgICAgICAgIC8vICAgIHZhciBpbnN0YW5jZSA9ICQoJy5pbWctaG9sZGVyJyk7XG4gICAgICAgICAgICAgICAgLy8gICAgaW5zdGFuY2UuaW1hZ2VTY3JvbGwoJ3JlZnJlc2gnKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2UgaW5zdGFuY2VvZiBQbHVnaW4gJiYgdHlwZW9mIGluc3RhbmNlW29wdGlvbnNdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlW29wdGlvbnNdLmFwcGx5KGluc3RhbmNlLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBFeHBvc2UgZGVmYXVsdHMgYW5kIENvbnN0cnVjdG9yIChhbGxvd2luZyBvdmVycmlkaW5nIG9mIHByb3RvdHlwZSBtZXRob2RzIGZvciBleGFtcGxlKVxuICAgICQuZm5bcGx1Z2luTmFtZV0uZGVmYXVsdHMgPSBQbHVnaW4uZGVmYXVsdHMgPSBkZWZhdWx0cztcbiAgICAkLmZuW3BsdWdpbk5hbWVdLlBsdWdpbiA9IFBsdWdpbjtcblxuICAgIHJldHVybiBQbHVnaW47XG59KSk7IiwiJChkb2N1bWVudCkucmVhZHkoIGZ1bmN0aW9uKCl7XG5cbiAgICAvL2luaXRpYWxpemUgYSBuYXZiYXIgdGhhdCBpcyBnb2luZyB0byBmYWRlIHRvIHRyYW5zcGFyZW50XG4gICAgJChcIi5mYWRlclwiKS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwicmdiYSgwLCAwLCAwLCAwLjApXCIpO1xuXG5cdC8vbmF2YmFyIHNjcm9sbCBjb2xvciBjaGFuZ2luZ1xuXHQkKHdpbmRvdykuc2Nyb2xsKCBmdW5jdGlvbigpe1xuXG5cdFx0dmFyIGhlaWdodCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblx0XHRpZiggaGVpZ2h0IDwgNjAwICYmICQoXCJuYXZcIikuaGFzQ2xhc3MoXCJmYWRlclwiKSApIC8vaWYgYXQgdGhlIHRvcCBvZiB0aGUgd2luZG93XG5cdFx0XHQkKFwibmF2XCIpLmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCJyZ2JhKDAsIDAsIDAsIDAuMClcIik7XG5cdFx0ZWxzZVxuXHRcdFx0JChcIm5hdlwiKS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwicmdiYSgyMywgMjMsIDIzLCAxLjApXCIpO1xuXHR9KTtcblxuXG5cblxuXHQvL1RPRE86IG1ha2Ugc28gb25seSB0aGUgbmF2YmFyIGxpbmtzIHdvcmtcblx0JChcIm5hdiBhXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBpZigkKHRoaXMpLmRhdGEoXCJ0YXJnZXRcIikpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG5cdFx0dmFyICR0YXJnZXQgPSAkKFwiI1wiICsgJCh0aGlzKS5kYXRhKFwidGFyZ2V0XCIpKTtcblx0XHQvLyBjb25zb2xlLmxvZygkdGFyZ2V0KTtcblx0XHQkLnNtb290aFNjcm9sbCh7XG5cdFx0XHRzY3JvbGxUYXJnZXQ6ICR0YXJnZXQsXG5cdFx0XHRvZmZzZXQ6IC02NSAvL29mZnNldCBmb3IgbmF2YmFyXG5cdFx0fSk7XG5cdH0pO1xuXG5cblxuXHQvL1xuXHQkKFwiLnNsaWNrLWNvbnRhaW5lclwiKS5zbGljayh7XG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuXHRcdGRvdHM6IGZhbHNlLFxuXHRcdGFycm93czogZmFsc2UsXG4gICAgICAgIGZhZGU6IHRydWVcblx0fSk7XG5cdFxuXHRcblx0bW92ZVNjaGVkKCk7XG5cblxuXG59KTtcblxuXG5mdW5jdGlvbiBtb3ZlU2NoZWQoKSB7XG5cdCQoJy5kYXlfYnRuJykuZWFjaChmdW5jdGlvbihzKXtcblx0XHQkKHRoaXMpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdFx0XHRzY2hlZFBvc2l0aW9uID0gcztcblx0XHRcdCQoJyNzY2hlZHVsZV9wYWdlJykuc3RvcCgpO1xuXHRcdFx0JCgnI3NjaGVkdWxlX3BhZ2UnKS5hbmltYXRlKHsncmlnaHQnIDogJCgnLmNvbHVtbicpLndpZHRoKCkgKiBzY2hlZFBvc2l0aW9ufSwgMzAwLCAnc3dpbmcnKTtcblx0XHRcdCQoJy5kYXlfYnRuJykucmVtb3ZlQ2xhc3MoJ2RheV9jdXJyZW50Jyk7XG5cdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdkYXlfY3VycmVudCcpO1xuXHRcdH0pO1xuXHR9KTtcbn07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9