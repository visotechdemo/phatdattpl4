!(function () {
    "use strict";
    var a = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
        t = "undefined" != typeof module && module.exports,
        i = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        n = (function () {
            for (
                var t,
                    e = [
                        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"],
                    ],
                    i = 0,
                    n = e.length,
                    s = {};
                i < n;
                i++
            )
                if ((t = e[i]) && t[1] in a) {
                    for (i = 0; i < t.length; i++) s[e[0][i]] = t[i];
                    return s;
                }
            return !1;
        })(),
        s = { change: n.fullscreenchange, error: n.fullscreenerror },
        e = {
            request: function (t) {
                var e = n.requestFullscreen;
                (t = t || a.documentElement), / Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent) ? t[e]() : t[e](i ? Element.ALLOW_KEYBOARD_INPUT : {});
            },
            exit: function () {
                a[n.exitFullscreen]();
            },
            toggle: function (t) {
                this.isFullscreen ? this.exit() : this.request(t);
            },
            onchange: function (t) {
                this.on("change", t);
            },
            onerror: function (t) {
                this.on("error", t);
            },
            on: function (t, e) {
                var i = s[t];
                i && a.addEventListener(i, e, !1);
            },
            off: function (t, e) {
                var i = s[t];
                i && a.removeEventListener(i, e, !1);
            },
            raw: n,
        };
    n
        ? (Object.defineProperties(e, {
              isFullscreen: {
                  get: function () {
                      return Boolean(a[n.fullscreenElement]);
                  },
              },
              element: {
                  enumerable: !0,
                  get: function () {
                      return a[n.fullscreenElement];
                  },
              },
              enabled: {
                  enumerable: !0,
                  get: function () {
                      return Boolean(a[n.fullscreenEnabled]);
                  },
              },
          }),
          t ? (module.exports = e) : (window.screenfull = e))
        : t
        ? (module.exports = !1)
        : (window.screenfull = !1);
})(),
    (function (t, n) {
        "use strict";
        "function" != typeof t.CustomEvent &&
            ((t.CustomEvent = function (t, e) {
                e = e || { bubbles: !1, cancelable: !1, detail: void 0 };
                var i = n.createEvent("CustomEvent");
                return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i;
            }),
            (t.CustomEvent.prototype = t.Event.prototype)),
            n.addEventListener("touchstart", i, !1),
            n.addEventListener("touchmove", s, !1),
            n.addEventListener("touchend", e, !1),
            n.addEventListener("mousedown", i, !1),
            n.addEventListener("mousemove", s, !1),
            n.addEventListener("mouseup", e, !1);
        var a = null,
            o = null,
            r = null,
            l = null,
            c = null,
            h = null;
        function e(t) {
            if (h === t.target) {
                var e = parseInt(h.getAttribute("data-swipe-threshold") || "20", 10),
                    i = parseInt(h.getAttribute("data-swipe-timeout") || "500", 10),
                    n = Date.now() - c,
                    s = "";
                Math.abs(r) > Math.abs(l) ? Math.abs(r) > e && n < i && (s = 0 < r ? "swipeleft" : "swiperight") : Math.abs(l) > e && n < i && (s = 0 < l ? "swipeup" : "swipedown"),
                    "" !== s && h.dispatchEvent(new CustomEvent(s, { bubbles: !0, cancelable: !0 })),
                    (c = o = a = null);
            }
        }
        function i(t) {
            "true" !== t.target.getAttribute("data-swipe-ignore") && ((h = t.target), (c = Date.now()), (a = t.touches ? t.touches[0].clientX : t.clientX), (o = t.touches ? t.touches[0].clientY : t.clientY), (l = r = 0));
        }
        function s(t) {
            if (a && o) {
                var e = t.touches ? t.touches[0].clientX : t.clientX,
                    i = t.touches ? t.touches[0].clientY : t.clientY;
                (r = a - e), (l = o - i);
            }
        }
    })(window, document),
    (function (o) {
        function e(t, e, i, n) {
            var s = t.text().split(e),
                a = "";
            s.length &&
                (o(s).each(function (t, e) {
                    a += '<span class="' + i + (t + 1) + '">' + e + "</span>" + n;
                }),
                t.empty().append(a));
        }
        var i = {
            init: function () {
                return this.each(function () {
                    e(o(this), "", "char", "");
                });
            },
            words: function () {
                return this.each(function () {
                    e(o(this), " ", "word", " ");
                });
            },
            lines: function () {
                return this.each(function () {
                    var t = "eefec303079ad17405c889e092e105b0";
                    e(o(this).children("br").replaceWith(t).end(), t, "line", "");
                });
            },
        };
        o.fn.lettering = function (t) {
            return t && i[t] ? i[t].apply(this, [].slice.call(arguments, 1)) : "letters" !== t && t ? (o.error("Method " + t + " does not exist on jQuery.lettering"), this) : i.init.apply(this, [].slice.call(arguments, 0));
        };
    })(jQuery),
    (function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? (module.exports = t) : t(jQuery);
    })(function (c) {
        var h,
            d,
            t = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            e = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            u = Array.prototype.slice;
        if (c.event.fixHooks) for (var i = t.length; i; ) c.event.fixHooks[t[--i]] = c.event.mouseHooks;
        var n = (c.event.special.mousewheel = {
            version: "3.1.9",
            setup: function () {
                if (this.addEventListener) for (var t = e.length; t; ) this.addEventListener(e[--t], s, !1);
                else this.onmousewheel = s;
                c.data(this, "mousewheel-line-height", n.getLineHeight(this)), c.data(this, "mousewheel-page-height", n.getPageHeight(this));
            },
            teardown: function () {
                if (this.removeEventListener) for (var t = e.length; t; ) this.removeEventListener(e[--t], s, !1);
                else this.onmousewheel = null;
            },
            getLineHeight: function (t) {
                return parseInt(c(t)["offsetParent" in c.fn ? "offsetParent" : "parent"]().css("fontSize"), 10);
            },
            getPageHeight: function (t) {
                return c(t).height();
            },
            settings: { adjustOldDeltas: !0 },
        });
        function s(t) {
            var e,
                i = t || window.event,
                n = u.call(arguments, 1),
                s = 0,
                a = 0,
                o = 0;
            if (
                (((t = c.event.fix(i)).type = "mousewheel"),
                "detail" in i && (o = -1 * i.detail),
                "wheelDelta" in i && (o = i.wheelDelta),
                "wheelDeltaY" in i && (o = i.wheelDeltaY),
                "wheelDeltaX" in i && (a = -1 * i.wheelDeltaX),
                "axis" in i && i.axis === i.HORIZONTAL_AXIS && ((a = -1 * o), (o = 0)),
                (s = 0 === o ? a : o),
                "deltaY" in i && (s = o = -1 * i.deltaY),
                "deltaX" in i && ((a = i.deltaX), 0 === o && (s = -1 * a)),
                0 !== o || 0 !== a)
            ) {
                if (1 === i.deltaMode) {
                    var r = c.data(this, "mousewheel-line-height");
                    (s *= r), (o *= r), (a *= r);
                } else if (2 === i.deltaMode) {
                    var l = c.data(this, "mousewheel-page-height");
                    (s *= l), (o *= l), (a *= l);
                }
                return (
                    (e = Math.max(Math.abs(o), Math.abs(a))),
                    (!d || e < d) && f(i, (d = e)) && (d /= 40),
                    f(i, e) && ((s /= 40), (a /= 40), (o /= 40)),
                    (s = Math[1 <= s ? "floor" : "ceil"](s / d)),
                    (a = Math[1 <= a ? "floor" : "ceil"](a / d)),
                    (o = Math[1 <= o ? "floor" : "ceil"](o / d)),
                    (t.deltaX = a),
                    (t.deltaY = o),
                    (t.deltaFactor = d),
                    (t.deltaMode = 0),
                    n.unshift(t, s, a, o),
                    h && clearTimeout(h),
                    (h = setTimeout(p, 200)),
                    (c.event.dispatch || c.event.handle).apply(this, n)
                );
            }
        }
        function p() {
            d = null;
        }
        function f(t, e) {
            return n.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0;
        }
        c.fn.extend({
            mousewheel: function (t) {
                return t ? this.bind("mousewheel", t) : this.trigger("mousewheel");
            },
            unmousewheel: function (t) {
                return this.unbind("mousewheel", t);
            },
        });
    }),
    (function (l) {
        "use strict";
        var t = "draptouch-active";
        window.requestAnimationFrame ||
            (window.requestAnimationFrame =
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (t, e) {
                    window.setTimeout(t, 1e3 / 60);
                }),
            (l.support = l.support || {}),
            l.extend(l.support, { touch: "ontouchend" in document });
        var i = function () {
                return !1;
            },
            a = function (t, e) {
                return (this.settings = e), (this.el = t), (this.$el = l(t)), this._initElements(), this;
            };
        (a.DATA_KEY = "draptouch"),
            (a.DEFAULTS = {
                cursor: "",
                decelerate: !0,
                triggerHardware: !1,
                threshold: 0,
                y: !0,
                x: !0,
                slowdown: 0.9,
                maxvelocity: 40,
                throttleFPS: 60,
                movingClass: { up: "draptouch-moving-up", down: "draptouch-moving-down", left: "draptouch-moving-left", right: "draptouch-moving-right" },
                deceleratingClass: { up: "draptouch-decelerating-up", down: "draptouch-decelerating-down", left: "draptouch-decelerating-left", right: "draptouch-decelerating-right" },
            }),
            (a.prototype.start = function (t) {
                (this.settings = l.extend(this.settings, t)), (this.velocity = t.velocity || this.velocity), (this.velocityY = t.velocityY || this.velocityY), (this.settings.decelerate = !1), this._move();
            }),
            (a.prototype.end = function () {
                this.settings.decelerate = !0;
            }),
            (a.prototype.stop = function () {
                (this.velocity = 0), (this.velocityY = 0), (this.settings.decelerate = !0), l.isFunction(this.settings.stopped) && this.settings.stopped.call(this);
            }),
            (a.prototype.detach = function () {
                this._detachListeners(), this.$el.removeClass(t).css("cursor", "");
            }),
            (a.prototype.attach = function () {
                this.$el.hasClass(t) || (this._attachListeners(this.$el), this.$el.addClass(t).css("cursor", this.settings.cursor));
            }),
            (a.prototype._initElements = function () {
                this.$el.addClass(t),
                    l.extend(this, { xpos: null, prevXPos: !1, ypos: null, prevYPos: !1, mouseDown: !1, throttleTimeout: 1e3 / this.settings.throttleFPS, lastMove: null, elementFocused: null }),
                    (this.velocity = 0),
                    (this.velocityY = 0),
                    l(document).mouseup(l.proxy(this._resetMouse, this)).click(l.proxy(this._resetMouse, this)),
                    this._initEvents(),
                    this.$el.css("cursor", this.settings.cursor),
                    this.settings.triggerHardware && this.$el.css({ "-webkit-transform": "translate3d(0,0,0)", "-webkit-perspective": "1000", "-webkit-backface-visibility": "hidden" });
            }),
            (a.prototype._initEvents = function () {
                var i = this;
                (this.settings.events = {
                    touchStart: function (t) {
                        var e;
                        i._useTarget(t.target, t) && ((e = t.originalEvent.touches[0]), (i.threshold = i._threshold(t.target, t)), i._start(e.clientX, e.clientY), t.stopPropagation());
                    },
                    touchMove: function (t) {
                        var e;
                        i.mouseDown && ((e = t.originalEvent.touches[0]), i._inputmove(e.clientX, e.clientY), t.preventDefault && t.preventDefault());
                    },
                    inputDown: function (t) {
                        i._useTarget(t.target, t) && ((i.threshold = i._threshold(t.target, t)), i._start(t.clientX, t.clientY), (i.elementFocused = t.target), "IMG" === t.target.nodeName && t.preventDefault(), t.stopPropagation());
                    },
                    inputEnd: function (t) {
                        i._useTarget(t.target, t) && (i._end(), (i.elementFocused = null), t.preventDefault && t.preventDefault());
                    },
                    inputMove: function (t) {
                        i.mouseDown && (i._inputmove(t.clientX, t.clientY), t.preventDefault && t.preventDefault());
                    },
                    scroll: function (t) {
                        l.isFunction(i.settings.moved) && i.settings.moved.call(i, i.settings), t.preventDefault && t.preventDefault();
                    },
                    inputClick: function (t) {
                        if (0 < Math.abs(i.velocity)) return t.preventDefault(), !1;
                    },
                    dragStart: function (t) {
                        if (i._useTarget(t.target, t) && i.elementFocused) return !1;
                    },
                }),
                    this._attachListeners(this.$el, this.settings);
            }),
            (a.prototype._inputmove = function (t, e) {
                var i = this.$el;
                this.el;
                if ((!this.lastMove || new Date() > new Date(this.lastMove.getTime() + this.throttleTimeout)) && ((this.lastMove = new Date()), this.mouseDown && (this.xpos || this.ypos))) {
                    var n = t - this.xpos,
                        s = e - this.ypos;
                    if (0 < this.threshold) {
                        var a = Math.sqrt(n * n + s * s);
                        if (this.threshold > a) return;
                        this.threshold = 0;
                    }
                    this.elementFocused && (l(this.elementFocused).blur(), (this.elementFocused = null), i.focus()), (this.settings.decelerate = !1), (this.velocity = this.velocityY = 0);
                    var o = this.scrollLeft(),
                        r = this.scrollTop();
                    this.scrollLeft(this.settings.x ? o - n : o),
                        this.scrollTop(this.settings.y ? r - s : r),
                        (this.prevXPos = this.xpos),
                        (this.prevYPos = this.ypos),
                        (this.xpos = t),
                        (this.ypos = e),
                        this._calculateVelocities(),
                        this._setMoveClasses(this.settings.movingClass),
                        l.isFunction(this.settings.moved) && this.settings.moved.call(this, this.settings);
                }
            }),
            (a.prototype._calculateVelocities = function () {
                (this.velocity = this._capVelocity(this.prevXPos - this.xpos, this.settings.maxvelocity)), (this.velocityY = this._capVelocity(this.prevYPos - this.ypos, this.settings.maxvelocity));
            }),
            (a.prototype._end = function () {
                this.xpos && this.prevXPos && !1 === this.settings.decelerate && ((this.settings.decelerate = !0), this._calculateVelocities(), (this.xpos = this.prevXPos = this.mouseDown = !1), this._move());
            }),
            (a.prototype._useTarget = function (t, e) {
                return !l.isFunction(this.settings.filterTarget) || !1 !== this.settings.filterTarget.call(this, t, e);
            }),
            (a.prototype._threshold = function (t, e) {
                return l.isFunction(this.settings.threshold) ? this.settings.threshold.call(this, t, e) : this.settings.threshold;
            }),
            (a.prototype._start = function (t, e) {
                (this.mouseDown = !0), (this.velocity = this.prevXPos = 0), (this.velocityY = this.prevYPos = 0), (this.xpos = t), (this.ypos = e);
            }),
            (a.prototype._resetMouse = function () {
                (this.xpos = !1), (this.ypos = !1), (this.mouseDown = !1);
            }),
            (a.prototype._decelerateVelocity = function (t, e) {
                return 0 === Math.floor(Math.abs(t)) ? 0 : t * e;
            }),
            (a.prototype._capVelocity = function (t, e) {
                var i = t;
                return 0 < t ? e < t && (i = e) : t < 0 - e && (i = 0 - e), i;
            }),
            (a.prototype._setMoveClasses = function (t) {
                var e = this.settings,
                    i = this.$el;
                i
                    .removeClass(e.movingClass.up)
                    .removeClass(e.movingClass.down)
                    .removeClass(e.movingClass.left)
                    .removeClass(e.movingClass.right)
                    .removeClass(e.deceleratingClass.up)
                    .removeClass(e.deceleratingClass.down)
                    .removeClass(e.deceleratingClass.left)
                    .removeClass(e.deceleratingClass.right),
                    0 < this.velocity && i.addClass(t.right),
                    this.velocity < 0 && i.addClass(t.left),
                    0 < this.velocityY && i.addClass(t.down),
                    this.velocityY < 0 && i.addClass(t.up);
            }),
            (a.prototype._move = function () {
                this.$el;
                var t = this.el,
                    e = this,
                    i = e.settings;
                i.x && 0 < t.scrollWidth
                    ? (this.scrollLeft(this.scrollLeft() + this.velocity), 0 < Math.abs(this.velocity) && (this.velocity = i.decelerate ? e._decelerateVelocity(this.velocity, i.slowdown) : this.velocity))
                    : (this.velocity = 0),
                    i.y && 0 < t.scrollHeight
                        ? (this.scrollTop(this.scrollTop() + this.velocityY), 0 < Math.abs(this.velocityY) && (this.velocityY = i.decelerate ? e._decelerateVelocity(this.velocityY, i.slowdown) : this.velocityY))
                        : (this.velocityY = 0),
                    e._setMoveClasses(i.deceleratingClass),
                    l.isFunction(i.moved) && i.moved.call(this, i),
                    0 < Math.abs(this.velocity) || 0 < Math.abs(this.velocityY)
                        ? this.moving ||
                          ((this.moving = !0),
                          window.requestAnimationFrame(function () {
                              (e.moving = !1), e._move();
                          }))
                        : e.stop();
            }),
            (a.prototype._getScroller = function () {
                var t = this.$el;
                return (this.$el.is("body") || this.$el.is("html")) && (t = l(window)), t;
            }),
            (a.prototype.scrollLeft = function (t) {
                var e = this._getScroller();
                if ("number" != typeof t) return e.scrollLeft();
                e.scrollLeft(t), (this.settings.scrollLeft = t);
            }),
            (a.prototype.scrollTop = function (t) {
                var e = this._getScroller();
                if ("number" != typeof t) return e.scrollTop();
                e.scrollTop(t), (this.settings.scrollTop = t);
            }),
            (a.prototype._attachListeners = function () {
                var t = this.$el,
                    e = this.settings;
                l.support.touch && t.bind("touchstart", e.events.touchStart).bind("touchend", e.events.inputEnd).bind("touchmove", e.events.touchMove),
                    t.mousedown(e.events.inputDown).mouseup(e.events.inputEnd).mousemove(e.events.inputMove),
                    t.click(e.events.inputClick).scroll(e.events.scroll).bind("selectstart", i).bind("dragstart", e.events.dragStart);
            }),
            (a.prototype._detachListeners = function () {
                var t = this.$el,
                    e = this.settings;
                l.support.touch && t.unbind("touchstart", e.events.touchStart).unbind("touchend", e.events.inputEnd).unbind("touchmove", e.events.touchMove),
                    t.unbind("mousedown", e.events.inputDown).unbind("mouseup", e.events.inputEnd).unbind("mousemove", e.events.inputMove),
                    t.unbind("click", e.events.inputClick).unbind("scroll", e.events.scroll).unbind("selectstart", i).unbind("dragstart", e.events.dragStart);
            }),
            (l.DrapTouch = a),
            (l.fn.draptouch = function (n, s) {
                return this.each(function () {
                    var t = l(this),
                        e = t.data(a.DATA_KEY),
                        i = l.extend({}, a.DEFAULTS, t.data(), "object" == typeof n && n);
                    e || t.data(a.DATA_KEY, (e = new a(this, i))), "string" == typeof n && e[n](s);
                });
            });
    })(window.jQuery || window.Zepto),
    (function (t, e) {
        if ("function" == typeof define && define.amd) define(["exports"], e);
        else if ("undefined" != typeof exports) e(exports);
        else {
            var i = {};
            e(i), (t.PinchZoom = i);
        }
    })(this, function (t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            "function" != typeof Object.assign &&
                Object.defineProperty(Object, "assign", {
                    value: function (t, e) {
                        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                        for (var i = Object(t), n = 1; n < arguments.length; n++) {
                            var s = arguments[n];
                            if (null != s) for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (i[a] = s[a]);
                        }
                        return i;
                    },
                    writable: !0,
                    configurable: !0,
                }),
            "function" != typeof Array.from &&
                (Array.from = function (t) {
                    return [].slice.call(t);
                });
        var a = function (t, e) {
                var i = document.createEvent("HTMLEvents");
                i.initEvent(e, !0, !1), t.dispatchEvent(i);
            },
            e = (function () {
                var t = function (t, e) {
                        (this.el = t),
                            (this.zoomFactor = 1),
                            (this.lastScale = 1),
                            (this.offset = { x: 0, y: 0 }),
                            (this.initialOffset = { x: 0, y: 0 }),
                            (this.options = Object.assign({}, this.defaults, e)),
                            this.setupMarkup(),
                            this.bindEvents(),
                            this.update(),
                            this.isImageLoaded(this.el) && (this.updateAspectRatio(), this.setupInitialOffset()),
                            this.enable();
                    },
                    e = function (t, e) {
                        return t + e;
                    };
                t.prototype = {
                    defaults: {
                        tapZoomFactor: 2,
                        zoomOutFactor: 1.3,
                        animationDuration: 300,
                        maxZoom: 6,
                        minZoom: 0.5,
                        draggableUnzoomed: !0,
                        lockDragAxis: !1,
                        use2d: !0,
                        zoomStartEventName: "pz_zoomstart",
                        zoomUpdateEventName: "pz_zoomupdate",
                        zoomEndEventName: "pz_zoomend",
                        dragStartEventName: "pz_dragstart",
                        dragUpdateEventName: "pz_dragupdate",
                        dragEndEventName: "pz_dragend",
                        doubleTapEventName: "pz_doubletap",
                        verticalPadding: 0,
                        horizontalPadding: 0,
                    },
                    handleDragStart: function (t) {
                        a(this.el, this.options.dragStartEventName), this.stopAnimation(), (this.lastDragPosition = !1), (this.hasInteraction = !0), this.handleDrag(t);
                    },
                    handleDrag: function (t) {
                        var e = this.getTouches(t)[0];
                        this.drag(e, this.lastDragPosition), (this.offset = this.sanitizeOffset(this.offset)), (this.lastDragPosition = e);
                    },
                    handleDragEnd: function () {
                        a(this.el, this.options.dragEndEventName), this.end();
                    },
                    handleZoomStart: function (t) {
                        a(this.el, this.options.zoomStartEventName), this.stopAnimation(), (this.lastScale = 1), (this.nthZoom = 0), (this.lastZoomCenter = !1), (this.hasInteraction = !0);
                    },
                    handleZoom: function (t, e) {
                        var i = this.getTouchCenter(this.getTouches(t)),
                            n = e / this.lastScale;
                        (this.lastScale = e), (this.nthZoom += 1), 3 < this.nthZoom && (this.scale(n, i), this.drag(i, this.lastZoomCenter)), (this.lastZoomCenter = i);
                    },
                    handleZoomEnd: function () {
                        a(this.el, this.options.zoomEndEventName), this.end();
                    },
                    handleDoubleTap: function (t) {
                        var e = this.getTouches(t)[0],
                            i = 1 < this.zoomFactor ? 1 : this.options.tapZoomFactor,
                            n = this.zoomFactor,
                            s = function (t) {
                                this.scaleTo(n + t * (i - n), e);
                            }.bind(this);
                        this.hasInteraction || ((this.isDoubleTap = !0), i < n && (e = this.getCurrentZoomCenter()), this.animate(this.options.animationDuration, s, this.swing), a(this.el, this.options.doubleTapEventName));
                    },
                    computeInitialOffset: function () {
                        this.initialOffset = {
                            x: -Math.abs(this.el.offsetWidth * this.getInitialZoomFactor() - this.container.offsetWidth) / 2,
                            y: -Math.abs(this.el.offsetHeight * this.getInitialZoomFactor() - this.container.offsetHeight) / 2,
                        };
                    },
                    isImageLoaded: function (t) {
                        return "IMG" === t.nodeName ? t.complete && 0 !== t.naturalHeight : Array.from(t.querySelectorAll("img")).every(this.isImageLoaded);
                    },
                    setupInitialOffset: function () {
                        this._initialOffsetSetup || ((this._initialOffsetSetup = !0), this.computeInitialOffset(), (this.offset.x = this.initialOffset.x), (this.offset.y = this.initialOffset.y));
                    },
                    sanitizeOffset: function (t) {
                        var e = this.el.offsetWidth * this.getInitialZoomFactor() * this.zoomFactor,
                            i = this.el.offsetHeight * this.getInitialZoomFactor() * this.zoomFactor,
                            n = e - this.getContainerX() + this.options.horizontalPadding,
                            s = i - this.getContainerY() + this.options.verticalPadding,
                            a = Math.max(n, 0),
                            o = Math.max(s, 0),
                            r = Math.min(n, 0) - this.options.horizontalPadding,
                            l = Math.min(s, 0) - this.options.verticalPadding;
                        return { x: Math.min(Math.max(t.x, r), a), y: Math.min(Math.max(t.y, l), o) };
                    },
                    scaleTo: function (t, e) {
                        this.scale(t / this.zoomFactor, e);
                    },
                    scale: function (t, e) {
                        (t = this.scaleZoomFactor(t)), this.addOffset({ x: (t - 1) * (e.x + this.offset.x), y: (t - 1) * (e.y + this.offset.y) }), a(this.el, this.options.zoomUpdateEventName);
                    },
                    scaleZoomFactor: function (t) {
                        var e = this.zoomFactor;
                        return (this.zoomFactor *= t), (this.zoomFactor = Math.min(this.options.maxZoom, Math.max(this.zoomFactor, this.options.minZoom))), this.zoomFactor / e;
                    },
                    canDrag: function () {
                        return this.options.draggableUnzoomed || ((t = this.zoomFactor), !((e = 1) - 0.01 < t && t < e + 0.01));
                        var t, e;
                    },
                    drag: function (t, e) {
                        e &&
                            (this.options.lockDragAxis
                                ? Math.abs(t.x - e.x) > Math.abs(t.y - e.y)
                                    ? this.addOffset({ x: -(t.x - e.x), y: 0 })
                                    : this.addOffset({ y: -(t.y - e.y), x: 0 })
                                : this.addOffset({ y: -(t.y - e.y), x: -(t.x - e.x) }),
                            a(this.el, this.options.dragUpdateEventName));
                    },
                    getTouchCenter: function (t) {
                        return this.getVectorAvg(t);
                    },
                    getVectorAvg: function (t) {
                        return {
                            x:
                                t
                                    .map(function (t) {
                                        return t.x;
                                    })
                                    .reduce(e) / t.length,
                            y:
                                t
                                    .map(function (t) {
                                        return t.y;
                                    })
                                    .reduce(e) / t.length,
                        };
                    },
                    addOffset: function (t) {
                        this.offset = { x: this.offset.x + t.x, y: this.offset.y + t.y };
                    },
                    sanitize: function () {
                        this.zoomFactor < this.options.zoomOutFactor ? this.zoomOutAnimation() : this.isInsaneOffset(this.offset) && this.sanitizeOffsetAnimation();
                    },
                    isInsaneOffset: function (t) {
                        var e = this.sanitizeOffset(t);
                        return e.x !== t.x || e.y !== t.y;
                    },
                    sanitizeOffsetAnimation: function () {
                        var e = this.sanitizeOffset(this.offset),
                            i = this.offset.x,
                            n = this.offset.y,
                            t = function (t) {
                                (this.offset.x = i + t * (e.x - i)), (this.offset.y = n + t * (e.y - n)), this.update();
                            }.bind(this);
                        this.animate(this.options.animationDuration, t, this.swing);
                    },
                    zoomOutAnimation: function () {
                        if (1 !== this.zoomFactor) {
                            var e = this.zoomFactor,
                                i = this.getCurrentZoomCenter(),
                                t = function (t) {
                                    this.scaleTo(e + t * (1 - e), i);
                                }.bind(this);
                            this.animate(this.options.animationDuration, t, this.swing);
                        }
                    },
                    updateAspectRatio: function () {
                        this.setContainerY(this.container.parentElement.offsetHeight);
                    },
                    getInitialZoomFactor: function () {
                        var t = this.container.offsetWidth / this.el.offsetWidth,
                            e = this.container.offsetHeight / this.el.offsetHeight;
                        return Math.min(t, e);
                    },
                    getAspectRatio: function () {
                        return this.el.offsetWidth / this.el.offsetHeight;
                    },
                    getCurrentZoomCenter: function () {
                        var t = this.offset.x - this.initialOffset.x,
                            e = -1 * this.offset.x - t / (1 / this.zoomFactor - 1),
                            i = this.offset.y - this.initialOffset.y;
                        return { x: e, y: -1 * this.offset.y - i / (1 / this.zoomFactor - 1) };
                    },
                    getTouches: function (t) {
                        var e = this.container.getBoundingClientRect(),
                            i = document.documentElement.scrollTop || document.body.scrollTop,
                            n = document.documentElement.scrollLeft || document.body.scrollLeft,
                            s = e.top + i,
                            a = e.left + n;
                        return Array.prototype.slice.call(t.touches).map(function (t) {
                            return { x: t.pageX - a, y: t.pageY - s };
                        });
                    },
                    animate: function (i, n, s, a) {
                        var o = new Date().getTime(),
                            r = function () {
                                if (this.inAnimation) {
                                    var t = new Date().getTime() - o,
                                        e = t / i;
                                    i <= t ? (n(1), a && a(), this.update(), this.stopAnimation(), this.update()) : (s && (e = s(e)), n(e), this.update(), requestAnimationFrame(r));
                                }
                            }.bind(this);
                        (this.inAnimation = !0), requestAnimationFrame(r);
                    },
                    stopAnimation: function () {
                        this.inAnimation = !1;
                    },
                    swing: function (t) {
                        return -Math.cos(t * Math.PI) / 2 + 0.5;
                    },
                    getContainerX: function () {
                        return this.container.offsetWidth;
                    },
                    getContainerY: function () {
                        return this.container.offsetHeight;
                    },
                    setContainerY: function (t) {
                        return (this.container.style.height = t + "px");
                    },
                    setupMarkup: function () {
                        var t, e;
                        (this.container = ((t = '<div class="pinch-zoom-container"></div>'), ((e = document.implementation.createHTMLDocument("")).body.innerHTML = t), Array.from(e.body.children)[0])),
                            this.el.parentNode.insertBefore(this.container, this.el),
                            this.container.appendChild(this.el),
                            (this.container.style.overflow = "hidden"),
                            (this.container.style.position = "relative"),
                            (this.el.style.webkitTransformOrigin = "0% 0%"),
                            (this.el.style.mozTransformOrigin = "0% 0%"),
                            (this.el.style.msTransformOrigin = "0% 0%"),
                            (this.el.style.oTransformOrigin = "0% 0%"),
                            (this.el.style.transformOrigin = "0% 0%"),
                            (this.el.style.position = "absolute");
                    },
                    end: function () {
                        (this.hasInteraction = !1), this.sanitize(), this.update();
                    },
                    bindEvents: function () {
                        var e = this;
                        i(this.container, this),
                            window.addEventListener("resize", this.update.bind(this)),
                            Array.from(this.el.querySelectorAll("img")).forEach(function (t) {
                                t.addEventListener("load", e.update.bind(e));
                            }),
                            "IMG" === this.el.nodeName && this.el.addEventListener("load", this.update.bind(this));
                    },
                    update: function (o) {
                        this.updatePlaned ||
                            ((this.updatePlaned = !0),
                            window.setTimeout(
                                function () {
                                    (this.updatePlaned = !1), this.updateAspectRatio(), o && "resize" === o.type && this.computeInitialOffset(), o && "load" === o.type && this.setupInitialOffset();
                                    var t = this.getInitialZoomFactor() * this.zoomFactor,
                                        e = -this.offset.x / t,
                                        i = -this.offset.y / t,
                                        n = "scale3d(" + t + ", " + t + ",1) translate3d(" + e + "px," + i + "px,0px)",
                                        s = "scale(" + t + ", " + t + ") translate(" + e + "px," + i + "px)",
                                        a = function () {
                                            this.clone && (this.clone.parentNode.removeChild(this.clone), delete this.clone);
                                        }.bind(this);
                                    !this.options.use2d || this.hasInteraction || this.inAnimation
                                        ? ((this.is3d = !0), a(), (this.el.style.webkitTransform = n), (this.el.style.mozTransform = s), (this.el.style.msTransform = s), (this.el.style.oTransform = s), (this.el.style.transform = n))
                                        : (this.is3d && ((this.clone = this.el.cloneNode(!0)), (this.clone.style.pointerEvents = "none"), this.container.appendChild(this.clone), window.setTimeout(a, 200)),
                                          (this.el.style.webkitTransform = s),
                                          (this.el.style.mozTransform = s),
                                          (this.el.style.msTransform = s),
                                          (this.el.style.oTransform = s),
                                          (this.el.style.transform = s),
                                          (this.is3d = !1));
                                }.bind(this),
                                0
                            ));
                    },
                    enable: function () {
                        this.enabled = !0;
                    },
                    disable: function () {
                        this.enabled = !1;
                    },
                };
                var i = function (t, s) {
                    var a = null,
                        i = 0,
                        n = null,
                        o = null,
                        e = function (t, e) {
                            if (a !== t) {
                                if (a && !t)
                                    switch (a) {
                                        case "zoom":
                                            s.handleZoomEnd(e);
                                            break;
                                        case "drag":
                                            s.handleDragEnd(e);
                                    }
                                switch (t) {
                                    case "zoom":
                                        s.handleZoomStart(e);
                                        break;
                                    case "drag":
                                        s.handleDragStart(e);
                                }
                            }
                            a = t;
                        },
                        r = function (t) {
                            2 === i ? e("zoom") : 1 === i && s.canDrag() ? e("drag", t) : e(null, t);
                        },
                        l = function (t) {
                            return Array.from(t).map(function (t) {
                                return { x: t.pageX, y: t.pageY };
                            });
                        },
                        c = function (t, e) {
                            var i, n;
                            return (i = t.x - e.x), (n = t.y - e.y), Math.sqrt(i * i + n * n);
                        },
                        h = function (t) {
                            t.stopPropagation(), t.preventDefault();
                        },
                        d = !0;
                    t.addEventListener("touchstart", function (t) {
                        s.enabled &&
                            ((d = !0),
                            (i = t.touches.length),
                            (function (t) {
                                var e = new Date().getTime();
                                if ((1 < i && (n = null), e - n < 300))
                                    switch ((h(t), s.handleDoubleTap(t), a)) {
                                        case "zoom":
                                            s.handleZoomEnd(t);
                                            break;
                                        case "drag":
                                            s.handleDragEnd(t);
                                    }
                                else s.isDoubleTap = !1;
                                1 === i && (n = e);
                            })(t));
                    }),
                        t.addEventListener("touchmove", function (t) {
                            if (s.enabled && !s.isDoubleTap) {
                                if (d) r(t), a && h(t), (o = l(t.touches));
                                else {
                                    switch (a) {
                                        case "zoom":
                                            s.handleZoom(t, ((e = o), (i = l(t.touches)), (n = c(e[0], e[1])), c(i[0], i[1]) / n));
                                            break;
                                        case "drag":
                                            s.handleDrag(t);
                                    }
                                    a && (h(t), s.update());
                                }
                                d = !1;
                            }
                            var e, i, n;
                        }),
                        t.addEventListener("touchend", function (t) {
                            s.enabled && ((i = t.touches.length), r(t));
                        });
                };
                return t;
            })();
        t.default = e;
    });
var _extends =
        Object.assign ||
        function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
            }
            return t;
        },
    _typeof =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                  return typeof t;
              }
            : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
              };
!(function (t, e) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define(e) : (t.LazyLoad = e());
})(this, function () {
    "use strict";
    var r = function (t, e) {
            return t.getAttribute("data-" + e);
        },
        s = function (t) {
            return t.filter(function (t) {
                return !r(t, "was-processed");
            });
        },
        a = function (t, e) {
            var i,
                n = "LazyLoad::Initialized",
                s = new t(e);
            try {
                i = new CustomEvent(n, { detail: { instance: s } });
            } catch (t) {
                (i = document.createEvent("CustomEvent")).initCustomEvent(n, !1, !1, { instance: s });
            }
            window.dispatchEvent(i);
        },
        l = function (t, e) {
            var i = e.data_src,
                n = e.data_srcset,
                s = t.tagName,
                a = r(t, i);
            if ("IMG" === s) {
                !(function (t, e) {
                    var i = e.data_srcset,
                        n = t.parentNode;
                    if (n && "PICTURE" === n.tagName)
                        for (var s, a = 0; (s = n.children[a]); a += 1)
                            if ("SOURCE" === s.tagName) {
                                var o = r(s, i);
                                o && s.setAttribute("srcset", o);
                            }
                })(t, e);
                var o = r(t, n);
                return o && t.setAttribute("srcset", o), void (a && t.setAttribute("src", a));
            }
            "IFRAME" !== s ? a && (t.style.backgroundImage = 'url("' + a + '")') : a && t.setAttribute("src", a);
        },
        t = "undefined" != typeof window,
        i = t && "IntersectionObserver" in window,
        o = t && "classList" in document.createElement("p"),
        c = function (t, e) {
            o ? t.classList.add(e) : (t.className += (t.className ? " " : "") + e);
        },
        h = function (t, e) {
            t && t(e);
        },
        d = function (t, e, i) {
            t.removeEventListener("load", e), t.removeEventListener("error", i);
        },
        u = function (t, e, i) {
            var n,
                s,
                a = t.target;
            (n = a),
                (s = i.class_loading),
                o
                    ? n.classList.remove(s)
                    : (n.className = n.className
                          .replace(new RegExp("(^|\\s+)" + s + "(\\s+|$)"), " ")
                          .replace(/^\s+/, "")
                          .replace(/\s+$/, "")),
                c(a, e ? i.class_loaded : i.class_error),
                h(e ? i.callback_load : i.callback_error, a);
        },
        p = function (t, e) {
            var i, n, s, a, o, r;
            h(e.callback_enter, t),
                -1 < ["IMG", "IFRAME"].indexOf(t.tagName) &&
                    ((n = e),
                    (s = function t(e) {
                        u(e, !0, n), d(i, t, a);
                    }),
                    (a = function t(e) {
                        u(e, !1, n), d(i, s, t);
                    }),
                    (i = t).addEventListener("load", s),
                    i.addEventListener("error", a),
                    c(t, e.class_loading)),
                l(t, e),
                (o = "was-processed"),
                (r = !0),
                t.setAttribute("data-" + o, r),
                h(e.callback_set, t);
        },
        e = function (t, e) {
            var i;
            (this._settings =
                ((i = {
                    elements_selector: "img",
                    container: document,
                    threshold: 300,
                    data_src: "src",
                    data_srcset: "srcset",
                    class_loading: "load-start",
                    class_loaded: "load-done",
                    class_error: "error",
                    callback_load: null,
                    callback_error: null,
                    callback_set: null,
                    callback_enter: null,
                }),
                _extends({}, i, t))),
                this._setObserver(),
                this.update(e);
        };
    e.prototype = {
        _setObserver: function () {
            var n = this;
            if (i) {
                var t = this._settings,
                    e = { root: t.container === document ? null : t.container, rootMargin: t.threshold + "px" };
                this._observer = new IntersectionObserver(function (t) {
                    t.forEach(function (t) {
                        if ((i = t).isIntersecting || 0 < i.intersectionRatio) {
                            var e = t.target;
                            p(e, n._settings), n._observer.unobserve(e);
                        }
                        var i;
                    }),
                        (n._elements = s(n._elements));
                }, e);
            }
        },
        update: function (t) {
            var e = this,
                i = this._settings,
                n = t || i.container.querySelectorAll(i.elements_selector);
            (this._elements = s(Array.prototype.slice.call(n))),
                this._observer
                    ? this._elements.forEach(function (t) {
                          e._observer.observe(t);
                      })
                    : (this._elements.forEach(function (t) {
                          p(t, i);
                      }),
                      (this._elements = s(this._elements)));
        },
        destroy: function () {
            var e = this;
            this._observer &&
                (s(this._elements).forEach(function (t) {
                    e._observer.unobserve(t);
                }),
                (this._observer = null)),
                (this._elements = null),
                (this._settings = null);
        },
    };
    var n = window.lazyLoadOptions;
    return (
        t &&
            n &&
            (function (t, e) {
                if (e.length) for (var i, n = 0; (i = e[n]); n += 1) a(t, i);
                else a(t, e);
            })(e, n),
        e
    );
}),
    (function (t, e) {
        "function" == typeof define && define.amd ? define(e) : "undefined" != typeof exports ? (module.exports = e()) : (t.canvallax = e());
    })(this, function () {
        "use strict";
        var i = window,
            n = document,
            t = (n.documentElement, n.body),
            e = Array.prototype,
            o = (i.canvallax = i.canvallax || {}),
            s =
                i.requestAnimationFrame ||
                i.webkitRequestAnimationFrame ||
                i.mozRequestAnimationFrame ||
                i.msRequestAnimationFrame ||
                function (t) {
                    i.setTimeout(t, 20);
                };
        if (!i.CanvasRenderingContext2D) return !1;
        i.clx = o;
        var a = Math.PI / 180,
            u = 2 * Math.PI,
            r = function () {},
            l = function (t) {
                return "function" == typeof t;
            };
        function c() {
            var t,
                e = arguments,
                i = e[0] || {},
                n = e.length,
                s = 1;
            for (1 === n && ((i = this), (s = 0)); s < n; s++) if (e[s]) for (t in e[s]) e[s].hasOwnProperty(t) && (i[t] = e[s][t]);
            return i;
        }
        function h(t, e, i) {
            (arguments.length <= 1 || "boolean" == typeof e) && ((i = e), (e = t), (t = this));
            var n = c({}, t, e),
                s = n.length,
                a = 0;
            if (s && i) for (n.children = [], n.length = 0; a < s; a++) n[a] && n[a].clone && ((n.children[a] = n[a].clone()), delete n[a]);
            return new t.constructor(n);
        }
        function d() {
            function a(t) {
                var e,
                    i = this,
                    n = arguments.length,
                    s = 0;
                if (i instanceof a) return 1 === n && c(i, t), (i.fn = a.fn), i.init && i.init.apply(i, arguments), i.playing && i.play && i.play(), i;
                for (e = new Array(n); s < n; s++) e[s] = arguments[s];
                return (function (t, e) {
                    function i() {
                        return t.apply(this, e);
                    }
                    return (i.prototype = t.prototype), new i();
                })(a, e);
            }
            for (var t, e = arguments.length, i = 0, n = { init: r, extend: c, clone: h }; i < e; i++) for (var s in ((t = arguments[i]).prototype && (t = t.prototype), t)) t.hasOwnProperty(s) && (n[s] = t[s]);
            return ((n.constructor = a).fn = a.prototype = n), a;
        }
        (o.extend = c), (o.clone = h), (o.createClass = d);
        var p = {
                length: 0,
                splice: e.splice,
                indexOf: e.indexOf,
                push: e.push,
                sort: e.sort,
                unshift: e.unshift,
                add: function (t) {
                    for (var e = t && -1 < t.length && Array.isArray(t) ? t : arguments, i = e.length, n = 0; n < i; n++) e[n] && this.push(e[n]);
                    return this;
                },
                each: function (t, e) {
                    for (var i, n = this.length, s = 0; s < n && ((i = e || this[s]), !1 !== t.call(i, this[s], s)); s++);
                    return this;
                },
                remove: function (t) {
                    for (var e, i = t && -1 < t.length && Array.isArray(t) ? t : arguments, n = i.length; n--; ) -1 < (e = this.indexOf(i[n])) && this.splice(e, 1);
                    return this;
                },
            },
            f = ["width", "height"],
            m = {
                x: 0,
                y: 0,
                z: 1,
                opacity: 1,
                scale: 1,
                rotation: 0,
                addTo: function (t) {
                    for (var e = t && -1 < t.length && Array.isArray(t) ? t : arguments, i = e.length, n = 0; n < i; n++) e[n] && e[n].add && e[n].add(this);
                    return this;
                },
                extend: c,
                set: c,
                render: function (t, e) {
                    if (t) {
                        var i,
                            n = this,
                            s = n.length,
                            a = 0;
                        if (
                            ((e = e || n.parent),
                            t.save(),
                            n.clearFrames && n.clear && n.clear(t, e),
                            0 < (i = t.globalAlpha * n.opacity) && (n.clip && n._clip(t, e), (t.globalAlpha = i), n.blend && (t.globalCompositeOperation = n.blend), (n.fixed || (e && e.transform(t, n.z))) && n.transform(t)))
                        ) {
                            for (n.preRender && n.preRender(t, e), n._render && n._render(t, e); a < s; a++) n[a].render(t, n);
                            n.postRender && n.postRender(t, e);
                        }
                        return t.restore(), n;
                    }
                },
                getCanvas: function () {
                    return this.canvas || (!!this.parent && this.parent.getCanvas());
                },
                transformOrigin: "center center",
                calcTransformPoint: function () {
                    for (var t, e, i = [0, 0], n = this.transformOrigin.split(" "), s = 0; s < 2; s++)
                        (e = "center" === (t = n[s]) ? 0.5 : "right" === t || "bottom" === t ? 1 : t.indexOf("%") ? parseFloat(t) / 100 : 0) && (i[s] = this[f[s]] * e);
                    return i;
                },
                getTransformPoint: function (t) {
                    var e = this,
                        i = e._transformPoint,
                        n = e.transformOrigin,
                        s = Array.isArray(n);
                    return s || e.width || e.height || !e.length || !e.parent
                        ? ((!t && i && e._transformOrigin === n) || ((i = s ? n : e.calcTransformPoint()), (e._transformOrigin = e.transformOrigin), (e._transformPoint = i)), i)
                        : e.parent.getTransformPoint();
                },
                getCoords: function (t) {
                    var e = this.x,
                        i = this.y,
                        n = this.offset,
                        s = this.parent,
                        a = !(this.fixed || !s || !s.getCoords) && s.getCoords(t);
                    return n && ((e += n.x || 0), (i += n.y || 0)), a && ((e += a[0]), (i += a[1])), s || void 0 === t || ((e *= t), (i *= t)), [e, i];
                },
                transform: function (t, e) {
                    var i,
                        n,
                        s = void 0 !== e ? e : this.scale;
                    return (
                        !(s <= 0) &&
                        ((1 === s && this.rotation % 360 == 0) ||
                            ((i = this.getCoords(e)), (n = this.getTransformPoint()), (i[0] += n[0]), (i[1] += n[1]), t.translate(i[0], i[1]), this.rotation && t.rotate(this.rotation * a), t.scale(s, s), t.translate(-i[0], -i[1])),
                        this)
                    );
                },
                _clip: function (t, e) {
                    var i = this;
                    t.beginPath(), i.clip.render ? ((i.clip.parent = e || i), i.clip.render(t, e)) : i.clip.call(i, t, e), t.clip();
                },
            },
            g = c({}, p, {
                animate: function () {
                    var t,
                        e = g.length;
                    if (g.playing && 0 !== e) for (g.frame = s(g.animate); e--; ) (t = g[e]) && t.playing && t.render && !t.render() && t.stop();
                    else g.stop();
                },
                play: function () {
                    (g.frame = g.frame || s(g.animate)), (g.playing = !0);
                },
                stop: function () {
                    (g.playing = !1), (g.frame = null);
                },
                kill: function () {
                    return g.stop(), g.splice(0);
                },
            });
        o.animations = g;
        var v = {
            play: function () {
                return (this.playing = !0), -1 == g.indexOf(this) && g[this.animateLast ? "unshift" : "push"](this), g.play(), this;
            },
            stop: function () {
                this.playing = !1;
                var t = g.indexOf(this);
                return -1 < t && g.splice(t, 1), this;
            },
        };
        function $(t, e, i, n) {
            if (!(this instanceof $)) return new $(t, e, i, n);
            var s,
                a = this;
            if ((c(a, n), (a.target = t), (a.to = i), !a.from)) for (s in ((a.from = {}), i)) a.from[s] = t[s];
            return a.duration(e), (a.ease = o.ease[a.ease] || a.ease), a.restart(), a;
        }
        function y(t, e) {
            return (t.zIndex === e.zIndex ? 0 : t.zIndex < e.zIndex ? -1 : 1) || (t.z === e.z ? 0 : t.z < e.z ? -1 : 1);
        }
        (o.ease = {
            linear: function (t) {
                return t;
            },
            inQuad: function (t) {
                return t * t;
            },
            outQuad: function (t) {
                return t * (2 - t);
            },
            inOutQuad: function (t) {
                return t < 0.5 ? 2 * t * t : (4 - 2 * t) * t - 1;
            },
            inCubic: function (t) {
                return t * t * t;
            },
            outCubic: function (t) {
                return --t * t * t + 1;
            },
            inOutCubic: function (t) {
                return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
            },
            inQuart: function (t) {
                return t * t * t * t;
            },
            outQuart: function (t) {
                return 1 - --t * t * t * t;
            },
            inOutQuart: function (t) {
                return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
            },
        }),
            ($.fn = $.prototype = c({}, v, {
                repeat: 0,
                ease: o.ease.inOutQuad,
                duration: function (t) {
                    if (!t) return this._d / 1e3;
                    this._d = 1e3 * t;
                },
                restart: function (t) {
                    var e = t ? this.repeatDelay : this.delay;
                    (this._s = Date.now() + (e ? 1e3 * e : 0)), (this._p = 0), this.onStart && this.onStart(), this.play();
                },
                pause: function () {
                    (this._p = this._p || Date.now()), (this.playing = !1);
                },
                reverse: function () {
                    (this.reversed = !this.reversed), this.restart();
                },
                render: function () {
                    var t,
                        e,
                        i,
                        n = this,
                        s = Date.now();
                    if (n.playing) {
                        if ((n._p && ((n._s += s - n._p), (n._p = 0)), s < n._s)) return !0;
                        for (i in (1 < (t = (s - n._s) / n._d) && (t = 1), (e = n.ease(n.reversed ? 1 - t : t)), n.to)) n.target[i] = n.from[i] + (n.to[i] - n.from[i]) * e;
                        if (n.onUpdate && !1 === n.onUpdate()) return !1;
                        if (1 === t) {
                            if ((n.onComplete && n.onComplete(), n.yoyo && (n.reversed = !n.reversed), 0 === n.repeat)) return !1;
                            0 < n.repeat && n.repeat--, n.restart(!0);
                        }
                        return !0;
                    }
                },
            })),
            ((o.Animate = $).from = function (t, e, i, n) {
                var s = {};
                for (var a in i) s[a] = t[a];
                return ((n = n || {}).from = i), new $(t, e, s, n);
            }),
            ($.fromTo = function (t, e, i, n, s) {
                return ((s = s || {}).from = i), new $(t, e, n, s);
            }),
            (m.to = m.animate = function (t, e, i) {
                return new $(this, t, e, i);
            }),
            (m.from = function (t, e, i) {
                return new $.from(this, t, e, i);
            }),
            (m.fromTo = function (t, e, i, n) {
                return new $.fromTo(this, t, e, i, n);
            }),
            (o.Group = d(m, p, {
                type: "group",
                add: function (t) {
                    for (var e = t && -1 < t.length && Array.isArray(t) ? t : arguments, i = e.length, n = 0; n < i; n++) e[n] && (e[n].parent = this).push(e[n]);
                    return this.sort(y);
                },
                init: function (t) {
                    t && t.children && this.add(t.children);
                },
            }));
        var b = "";
        (o.Scene = d(o.Group, v, {
            type: "scene",
            parentElement: t,
            className: "",
            fullscreen: !0,
            includeStyles: !0,
            playing: !0,
            animateLast: !0,
            clearFrames: !0,
            clear: function (t) {
                var e = this.fill;
                return e && (t.fillStyle = e), t[this.fill ? "fillRect" : "clearRect"](0, 0, this.width, this.height), this;
            },
            resize: function (t, e) {
                return (this.width = this.canvas.width = t || this.width), (this.height = this.canvas.height = e || this.height), this;
            },
            resizeFullscreen: function () {
                return this.resize(i.innerWidth, i.innerHeight), this;
            },
            init: function (t) {
                var e = this;
                e.canvas || ((e.canvas = n.createElement("canvas")), e.parentElement.insertBefore(e.canvas, e.parentElement.firstChild)),
                    (e.ctx = e.canvas.getContext("2d")),
                    (e.className += ""),
                    e.fullscreen
                        ? (e.resizeFullscreen(), i.addEventListener("resize", e.resizeFullscreen.bind(e)), b && e.includeStyles && (n.head.insertAdjacentHTML("afterbegin", b), (b = null)))
                        : e.resize(e.width || e.canvas.width, e.height || e.canvas.height),
                    (e.canvas.className += e.className),
                    t && t.children && e.add(t.children),
                    (e.render = e.render.bind(e, e.ctx, e));
            },
        })),
            (o.Element = d(m, {
                type: "element",
                lineWidth: 1,
                _render: function (t, e) {
                    var i = this;
                    i.draw && (t.beginPath(), i.draw(t, i.getCoords(i.z), e)),
                        i.fill && (l(i.fill) ? i.fill(t, e) : ((t.fillStyle = i.fill), t.fill())),
                        i.stroke && (i.lineWidth && (t.lineWidth = i.lineWidth), l(i.stroke) ? i.stroke(t, e) : ((t.strokeStyle = i.stroke), t.stroke()));
                },
            }));
        var w = (o.createElement = d.bind(null, o.Element)),
            x = function (t, e) {
                t.ellipse(e[0] + this.width / 2, e[1] + this.height / 2, this.width / 2, this.height / 2, 0, 0, u);
            };
        "function" == typeof document.createElement("canvas").getContext("2d").ellipse ||
            (x = function (t, e) {
                var i = this.width,
                    n = this.height,
                    s = e[0],
                    a = e[1];
                if (i === n) t.arc(s + i / 2, e[1] + i / 2, i / 2, 0, u);
                else {
                    var o = (i / 2) * 0.5522848,
                        r = (n / 2) * 0.5522848,
                        l = s + i,
                        c = a + n,
                        h = s + i / 2,
                        d = a + n / 2;
                    t.moveTo(s, d), t.bezierCurveTo(s, d - r, h - o, a, h, a), t.bezierCurveTo(h + o, a, l, d - r, l, d), t.bezierCurveTo(l, d + r, h + o, c, h, c), t.bezierCurveTo(h - o, c, s, d + r, s, d);
                }
            }),
            (o.Ellipse = w({ type: "ellipse", draw: x })),
            (o.Rectangle = w({
                type: "rectangle",
                draw: function (t, e) {
                    t.rect(e[0], e[1], this.width, this.height);
                },
            })),
            (o.Image = w({
                type: "image",
                onload: function (t) {
                    (t.width = t.width ? t.width : t.image.width), (t.height = t.height ? t.height : t.image.height);
                },
                onerror: function () {
                    this.removeAttribute("src");
                },
                init: function (t) {
                    var e = this.image;
                    (e = e && 1 === e.nodeType ? e : t && 1 === t.nodeType ? t : new Image()) instanceof HTMLCanvasElement || (e = e.cloneNode()),
                        (this.image = e),
                        this.onload(this),
                        (e.onload = this.onload.bind(null, this)),
                        (e.onerror = this.onerror),
                        (e.src = e.src || t.src || t);
                },
                draw: function (t, e) {
                    this.image && t.drawImage(this.image, e[0], e[1], this.width, this.height);
                },
            })),
            (o.Polygon = w({
                type: "polygon",
                points: 6,
                draw: function (t, e) {
                    var i,
                        n,
                        s,
                        a,
                        o = this.points,
                        r = o.length,
                        l = 0;
                    if (r) for (; l < r; l++) "close" === o[l] ? t.closePath() : t[0 === l ? "moveTo" : "lineTo"](e[0] + o[l][0], e[1] + o[l][1]);
                    else {
                        for (i = this.width / 2, n = this.height / 2, s = e[0] + i, a = e[1] + n, t.moveTo(s + i, a); l < o; l++) t.lineTo(s + i * Math.cos((l * u) / o), a + n * Math.sin((l * u) / o));
                        t.closePath();
                    }
                },
            })),
            (o.Tracker = d(p, v, {
                ease: 0,
                scale: 1,
                property: "offset",
                individual: !1,
                playing: !0,
                applyTracking: function (t, e) {
                    var i = this,
                        n = t[i.property] || {},
                        s = {};
                    if (!(e = e || i._render(t))) return !1;
                    for (var a in e)
                        (s[a] = i.scale * (!0 === i.invert || i.invert === "invert" + a ? e[a] : -e[a]) + (i.offset && !isNaN(i.offset[a]) ? i.offset[a] : isNaN(i.offset) ? 0 : i.offset)),
                            n[a] || (n[a] = 0),
                            (n[a] = i.ease <= 0 ? s[a] : n[a] + (s[a] - n[a]) / (i.ease + 1));
                    return (t[i.property] = n), this;
                },
                render: function () {
                    for (var t = this.length, e = 0, i = this.individual ? null : this._render(); e < t; e++) this.applyTracking(this[e], i);
                    return this;
                },
            }));
        var C = (o.createTracker = d.bind(null, o.Tracker)),
            _ = 0,
            k = 0,
            T = !1,
            z = function () {
                (_ = i.pageXOffset), (k = i.pageYOffset);
            };
        o.TrackScroll = C({
            init: function () {
                T || ((T = !0), z(), n.addEventListener("scroll", z));
            },
            _render: function () {
                var t = this.element;
                return { x: t ? t.scrollLeft : _, y: t ? t.scrollTop : k };
            },
        });
        var E = i.innerHeight,
            S = i.innerWidth,
            D = function () {
                (E = i.innerHeight), (S = i.innerWidth);
            },
            M = S / 2,
            O = E / 2,
            q = !1,
            L = function (t) {
                (M = t.touches ? t.touches[0].clientX : t.clientX), (O = t.touches ? t.touches[0].clientY : t.clientY);
            };
        (o.TrackPointer = o.createTracker({
            range: !1,
            init: function () {
                q || ((q = !0), n.addEventListener("mousemove", L), n.addEventListener("touchmove", L), n.addEventListener("touchstart", L)), D(), i.addEventListener("resize", D);
            },
            _render: function () {
                var t = -M,
                    e = -O,
                    i = this.range;
                return (i || 0 === i) && ((t = (M / S - 0.5) * -(i.x || i)), (e = (O / E - 0.5) * -(i.y || i))), { x: t, y: e };
            },
        })),
            (o.TrackElement = o.createTracker({
                init: function (t) {
                    var e = (t && t.element) || t;
                    this.element = "string" == typeof e ? document.querySelector(e) : e;
                },
                _render: function () {
                    var t = this.element.getBoundingClientRect();
                    return { x: -t.left, y: -t.top };
                },
            }));
        for (var A = r, P = i._clx || [], I = P.length, F = 0; F < I; F++) P[F](o);
        return (
            (A.push = function (t) {
                t(o);
            }),
            (i._clx = A),
            o
        );
    }),
    (function (l, i, s, a) {
        function c(t, e) {
            (this.settings = null),
                (this.options = l.extend({}, c.Defaults, e)),
                (this.$element = l(t)),
                (this._handlers = {}),
                (this._plugins = {}),
                (this._supress = {}),
                (this._current = null),
                (this._speed = null),
                (this._coordinates = []),
                (this._breakpoint = null),
                (this._width = null),
                (this._items = []),
                (this._clones = []),
                (this._mergers = []),
                (this._widths = []),
                (this._invalidated = {}),
                (this._pipe = []),
                (this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }),
                (this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }),
                l.each(
                    ["onResize", "onThrottledResize"],
                    l.proxy(function (t, e) {
                        this._handlers[e] = l.proxy(this[e], this);
                    }, this)
                ),
                l.each(
                    c.Plugins,
                    l.proxy(function (t, e) {
                        this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this);
                    }, this)
                ),
                l.each(
                    c.Workers,
                    l.proxy(function (t, e) {
                        this._pipe.push({ filter: e.filter, run: l.proxy(e.run, this) });
                    }, this)
                ),
                this.setup(),
                this.initialize();
        }
        (c.Defaults = {
            items: 5,
            loop: !1,
            center: !1,
            pagi: !1,
            rewind: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: i,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "slide-refresh",
            loadedClass: "slide-slidebox",
            loadingClass: "slide-loading",
            rtlClass: "slide-rtl",
            responsiveClass: "slide-responsive",
            dragClass: "slide-drag",
            itemClass: "slide-item",
            stageClass: "slide-wrapper",
            stageOuterClass: "slide-wrapper-outer",
            grabClass: "grabbing",
        }),
            (c.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
            (c.Type = { Event: "event", State: "state" }),
            (c.Plugins = {}),
            (c.Workers = [
                {
                    filter: ["width", "settings"],
                    run: function () {
                        this._width = this.$element.width();
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (t) {
                        t.current = this._items && this._items[this.relative(this._current)];
                    },
                },
                {
                    filter: ["items", "settings"],
                    run: function () {
                        this.$stage.children(".cloned").remove();
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (t) {
                        var e = this.settings.margin || "",
                            i = !this.settings.autoWidth,
                            n = this.settings.rtl,
                            s = { width: "auto", "margin-left": n ? e : "", "margin-right": n ? "" : e };
                        !i && this.$stage.children().css(s), (t.css = s);
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (t) {
                        var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                            i = null,
                            n = this._items.length,
                            s = !this.settings.autoWidth,
                            a = [];
                        for (t.items = { merge: !1, width: e }; n--; )
                            (i = this._mergers[n]), (i = (this.settings.mergeFit && Math.min(i, this.settings.items)) || i), (t.items.merge = 1 < i || t.items.merge), (a[n] = s ? e * i : this._items[n].width());
                        this._widths = a;
                    },
                },
                {
                    filter: ["items", "settings"],
                    run: function () {
                        var t = [],
                            e = this._items,
                            i = this.settings,
                            n = Math.max(2 * i.items, 4),
                            s = 2 * Math.ceil(e.length / 2),
                            a = i.loop && e.length ? (i.rewind ? n : Math.max(n, s)) : 0,
                            o = "",
                            r = "";
                        for (a /= 2; a--; ) t.push(this.normalize(t.length / 2, !0)), (o += e[t[t.length - 1]][0].outerHTML), t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)), (r = e[t[t.length - 1]][0].outerHTML + r);
                        (this._clones = t), l(o).addClass("cloned").appendTo(this.$stage), l(r).addClass("cloned").prependTo(this.$stage);
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function () {
                        for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, s = 0, a = []; ++i < e; )
                            (n = a[i - 1] || 0), (s = this._widths[this.relative(i)] + this.settings.margin), a.push(n + s * t);
                        this._coordinates = a;
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function () {
                        var t = this.settings.stagePadding,
                            e = this._coordinates,
                            i = { width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t, "padding-left": t || "", "padding-right": t || "" };
                        this.$stage.css(i);
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (t) {
                        var e = this._coordinates.length,
                            i = !this.settings.autoWidth,
                            n = this.$stage.children();
                        if (i && t.items.merge) for (; e--; ) (t.css.width = this._widths[this.relative(e)]), n.eq(e).css(t.css);
                        else i && ((t.css.width = t.items.width), n.css(t.css));
                    },
                },
                {
                    filter: ["items"],
                    run: function () {
                        this._coordinates.length < 1 && this.$stage.removeAttr("style");
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (t) {
                        (t.current = t.current ? this.$stage.children().index(t.current) : 0), (t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current))), this.reset(t.current);
                    },
                },
                {
                    filter: ["position"],
                    run: function () {
                        this.animate(this.coordinates(this._current));
                    },
                },
                {
                    filter: ["width", "position", "items", "settings"],
                    run: function () {
                        var t,
                            e,
                            i,
                            n,
                            s = this.settings.rtl ? 1 : -1,
                            a = 2 * this.settings.stagePadding,
                            o = this.coordinates(this.current()) + a,
                            r = o + this.width() * s,
                            l = [];
                        for (i = 0, n = this._coordinates.length; i < n; i++)
                            (t = this._coordinates[i - 1] || 0), (e = Math.abs(this._coordinates[i]) + a * s), ((this.op(t, "<=", o) && this.op(t, ">", r)) || (this.op(e, "<", o) && this.op(e, ">", r))) && l.push(i);
                        this.$stage.children(".active").removeClass("active"),
                            this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"),
                            this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center")),
                            this.settings.pagi && (this.$stage.children(".pagi").removeClass("pagi"), this.$stage.children().eq(this.current()).addClass("pagi"));
                    },
                },
            ]),
            (c.prototype.initialize = function () {
                var t, e, i;
                (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) &&
                    ((t = this.$element.find("img")), (e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : a), (i = this.$element.children(e).width()), t.length && i <= 0 && this.preloadAutoWidthImages(t));
                this.$element.addClass(this.options.loadingClass),
                    (this.$stage = l("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>')),
                    this.$element.append(this.$stage.parent()),
                    this.replace(this.$element.children().not(this.$stage.parent())),
                    this.$element.is(":visible") ? this.refresh() : this.invalidate("width"),
                    this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),
                    this.registerEventHandlers(),
                    this.leave("initializing"),
                    this.trigger("initialized");
            }),
            (c.prototype.setup = function () {
                var e = this.viewport(),
                    t = this.options.responsive,
                    i = -1,
                    n = null;
                t
                    ? (l.each(t, function (t) {
                          t <= e && i < t && (i = Number(t));
                      }),
                      delete (n = l.extend({}, this.options, t[i])).responsive,
                      n.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i)))
                    : (n = l.extend({}, this.options)),
                    (null !== this.settings && this._breakpoint === i) ||
                        (this.trigger("change", { property: { name: "settings", value: n } }),
                        (this._breakpoint = i),
                        (this.settings = n),
                        this.invalidate("settings"),
                        this.trigger("changed", { property: { name: "settings", value: this.settings } }));
            }),
            (c.prototype.optionsLogic = function () {
                this.settings.autoWidth && ((this.settings.stagePadding = !1), (this.settings.merge = !1));
            }),
            (c.prototype.prepare = function (t) {
                var e = this.trigger("prepare", { content: t });
                return (
                    e.data ||
                        (e.data = l("<" + this.settings.itemElement + "/>")
                            .addClass(this.options.itemClass)
                            .append(t)),
                    this.trigger("prepared", { content: e.data }),
                    e.data
                );
            }),
            (c.prototype.update = function () {
                for (
                    var t = 0,
                        e = this._pipe.length,
                        i = l.proxy(function (t) {
                            return this[t];
                        }, this._invalidated),
                        n = {};
                    t < e;

                )
                    (this._invalidated.all || 0 < l.grep(this._pipe[t].filter, i).length) && this._pipe[t].run(n), t++;
                (this._invalidated = {}), !this.is("valid") && this.enter("valid");
            }),
            (c.prototype.width = function (t) {
                switch ((t = t || c.Width.Default)) {
                    case c.Width.Inner:
                    case c.Width.Outer:
                        return this._width;
                    default:
                        return this._width - 2 * this.settings.stagePadding + this.settings.margin;
                }
            }),
            (c.prototype.refresh = function () {
                this.enter("refreshing"),
                    this.trigger("refresh"),
                    this.setup(),
                    this.optionsLogic(),
                    this.$element.addClass(this.options.refreshClass),
                    this.update(),
                    this.$element.removeClass(this.options.refreshClass),
                    this.leave("refreshing"),
                    this.trigger("refreshed");
            }),
            (c.prototype.onThrottledResize = function () {
                i.clearTimeout(this.resizeTimer), (this.resizeTimer = i.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate));
            }),
            (c.prototype.onResize = function () {
                return (
                    !!this._items.length &&
                    this._width !== this.$element.width() &&
                    !!this.$element.is(":visible") &&
                    (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
                );
            }),
            (c.prototype.registerEventHandlers = function () {
                l.support.transition && this.$stage.on(l.support.transition.end + ".btq.core", l.proxy(this.onTransitionEnd, this)),
                    !1 !== this.settings.responsive && this.on(i, "resize", this._handlers.onThrottledResize),
                    this.settings.mouseDrag &&
                        (this.$element.addClass(this.options.dragClass),
                        this.$stage.on("mousedown.btq.core", l.proxy(this.onDragStart, this)),
                        this.$stage.on("dragstart.btq.core selectstart.btq.core", function () {
                            return !1;
                        })),
                    this.settings.touchDrag && (this.$stage.on("touchstart.btq.core", l.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.btq.core", l.proxy(this.onDragEnd, this)));
            }),
            (c.prototype.onDragStart = function (t) {
                var e = null;
                3 !== t.which &&
                    ((e = l.support.transform
                        ? {
                              x: (e = this.$stage
                                  .css("transform")
                                  .replace(/.*\(|\)| /g, "")
                                  .split(","))[16 === e.length ? 12 : 4],
                              y: e[16 === e.length ? 13 : 5],
                          }
                        : ((e = this.$stage.position()), { x: this.settings.rtl ? e.left + this.$stage.width() - this.width() + this.settings.margin : e.left, y: e.top })),
                    this.is("animating") && (l.support.transform ? this.animate(e.x) : this.$stage.stop(), this.invalidate("position")),
                    this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type),
                    this.speed(0),
                    (this._drag.time = new Date().getTime()),
                    (this._drag.target = l(t.target)),
                    (this._drag.stage.start = e),
                    (this._drag.stage.current = e),
                    (this._drag.pointer = this.pointer(t)),
                    l(s).on("mouseup.btq.core touchend.btq.core", l.proxy(this.onDragEnd, this)),
                    l(s).one(
                        "mousemove.btq.core touchmove.btq.core",
                        l.proxy(function (t) {
                            t.preventDefault();
                            var e = this.difference(this._drag.pointer, this.pointer(t));
                            l(s).on("mousemove.btq.core touchmove.btq.core", l.proxy(this.onDragMove, this)), (Math.abs(e.x) < Math.abs(e.y) && this.is("valid")) || (this.enter("dragging"), this.trigger("drag"));
                        }, this)
                    ));
            }),
            (c.prototype.onDragMove = function (t) {
                var e = null,
                    i = null,
                    n = null,
                    s = this.difference(this._drag.pointer, this.pointer(t)),
                    a = this.difference(this._drag.stage.start, s);
                this.is("dragging") &&
                    (t.preventDefault(),
                    this.settings.loop
                        ? ((e = this.coordinates(this.minimum())), (i = this.coordinates(this.maximum() + 1) - e), (a.x = ((((a.x - e) % i) + i) % i) + e))
                        : ((e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum())),
                          (i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum())),
                          (n = this.settings.pullDrag ? (-1 * s.x) / 5 : 0),
                          (a.x = Math.max(Math.min(a.x, e + n), i + n))),
                    (this._drag.stage.current = a),
                    this.animate(a.x));
            }),
            (c.prototype.onDragEnd = function (t) {
                var e = this.difference(this._drag.pointer, this.pointer(t)),
                    i = this._drag.stage.current,
                    n = (0 < e.x) ^ this.settings.rtl ? "left" : "right";
                l(s).off(".btq.core"),
                    this.$element.removeClass(this.options.grabClass),
                    ((0 !== e.x && this.is("dragging")) || !this.is("valid")) &&
                        (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
                        this.current(this.closest(i.x, 0 !== e.x ? n : this._drag.direction)),
                        this.invalidate("position"),
                        this.update(),
                        (this._drag.direction = n),
                        (3 < Math.abs(e.x) || 300 < new Date().getTime() - this._drag.time) &&
                            this._drag.target.one("click.btq.core", function () {
                                return !1;
                            })),
                    this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
            }),
            (c.prototype.closest = function (i, n) {
                var s = -1,
                    a = this.width(),
                    o = this.coordinates();
                return (
                    this.settings.freeDrag ||
                        l.each(
                            o,
                            l.proxy(function (t, e) {
                                return (
                                    "left" === n && e - 30 < i && i < e + 30
                                        ? (s = t)
                                        : "right" === n && e - a - 30 < i && i < e - a + 30
                                        ? (s = t + 1)
                                        : this.op(i, "<", e) && this.op(i, ">", o[t + 1] || e - a) && (s = "left" === n ? t + 1 : t),
                                    -1 === s
                                );
                            }, this)
                        ),
                    this.settings.loop || (this.op(i, ">", o[this.minimum()]) ? (s = i = this.minimum()) : this.op(i, "<", o[this.maximum()]) && (s = i = this.maximum())),
                    s
                );
            }),
            (c.prototype.animate = function (t) {
                var e = 0 < this.speed();
                this.is("animating") && this.onTransitionEnd(),
                    e && (this.enter("animating"), this.trigger("translate")),
                    l.support.transform3d && l.support.transition
                        ? this.$stage.css({ transform: "translate3d(" + t + "px,0px,0px)", transition: this.speed() / 1e3 + "s" })
                        : e
                        ? this.$stage.animate({ left: t + "px" }, this.speed(), this.settings.fallbackEasing, l.proxy(this.onTransitionEnd, this))
                        : this.$stage.css({ left: t + "px" });
            }),
            (c.prototype.is = function (t) {
                return this._states.current[t] && 0 < this._states.current[t];
            }),
            (c.prototype.current = function (t) {
                if (t === a) return this._current;
                if (0 === this._items.length) return a;
                if (((t = this.normalize(t)), this._current !== t)) {
                    var e = this.trigger("change", { property: { name: "position", value: t } });
                    e.data !== a && (t = this.normalize(e.data)), (this._current = t), this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } });
                }
                return this._current;
            }),
            (c.prototype.invalidate = function (t) {
                return (
                    "string" === l.type(t) && ((this._invalidated[t] = !0), this.is("valid") && this.leave("valid")),
                    l.map(this._invalidated, function (t, e) {
                        return e;
                    })
                );
            }),
            (c.prototype.reset = function (t) {
                (t = this.normalize(t)) !== a && ((this._speed = 0), (this._current = t), this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]));
            }),
            (c.prototype.normalize = function (t, e) {
                var i = this._items.length,
                    n = e ? 0 : this._clones.length;
                return !this.isNumeric(t) || i < 1 ? (t = a) : (t < 0 || i + n <= t) && (t = ((((t - n / 2) % i) + i) % i) + n / 2), t;
            }),
            (c.prototype.relative = function (t) {
                return (t -= this._clones.length / 2), this.normalize(t, !0);
            }),
            (c.prototype.maximum = function (t) {
                var e,
                    i = this.settings,
                    n = this._coordinates.length,
                    s = Math.abs(this._coordinates[n - 1]) - this._width,
                    a = -1;
                if (i.loop) n = this._clones.length / 2 + this._items.length - 1;
                else if (i.autoWidth || i.merge) for (; 1 < n - a; ) Math.abs(this._coordinates[(e = (n + a) >> 1)]) < s ? (a = e) : (n = e);
                else n = i.center ? this._items.length - 1 : this._items.length - i.items;
                return t && (n -= this._clones.length / 2), Math.max(n, 0);
            }),
            (c.prototype.minimum = function (t) {
                return t ? 0 : this._clones.length / 2;
            }),
            (c.prototype.items = function (t) {
                return t === a ? this._items.slice() : ((t = this.normalize(t, !0)), this._items[t]);
            }),
            (c.prototype.mergers = function (t) {
                return t === a ? this._mergers.slice() : ((t = this.normalize(t, !0)), this._mergers[t]);
            }),
            (c.prototype.clones = function (i) {
                var e = this._clones.length / 2,
                    n = e + this._items.length,
                    s = function (t) {
                        return t % 2 == 0 ? n + t / 2 : e - (t + 1) / 2;
                    };
                return i === a
                    ? l.map(this._clones, function (t, e) {
                          return s(e);
                      })
                    : l.map(this._clones, function (t, e) {
                          return t === i ? s(e) : null;
                      });
            }),
            (c.prototype.speed = function (t) {
                return t !== a && (this._speed = t), this._speed;
            }),
            (c.prototype.coordinates = function (t) {
                var e,
                    i = 1,
                    n = t - 1;
                return t === a
                    ? l.map(
                          this._coordinates,
                          l.proxy(function (t, e) {
                              return this.coordinates(e);
                          }, this)
                      )
                    : (this.settings.center ? (this.settings.rtl && ((i = -1), (n = t + 1)), (e = this._coordinates[t]), (e += ((this.width() - e + (this._coordinates[n] || 0)) / 2) * i)) : (e = this._coordinates[n] || 0),
                      (e = Math.ceil(e)));
            }),
            (c.prototype.duration = function (t, e, i) {
                return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed);
            }),
            (c.prototype.to = function (t, e) {
                var i = this.current(),
                    n = null,
                    s = t - this.relative(i),
                    a = (0 < s) - (s < 0),
                    o = this._items.length,
                    r = this.minimum(),
                    l = this.maximum();
                this.settings.loop
                    ? (!this.settings.rewind && Math.abs(s) > o / 2 && (s += -1 * a * o), (n = (((((t = i + s) - r) % o) + o) % o) + r) !== t && n - s <= l && 0 < n - s && ((i = n - s), (t = n), this.reset(i)))
                    : (t = this.settings.rewind ? ((t % (l += 1)) + l) % l : Math.max(r, Math.min(l, t))),
                    this.speed(this.duration(i, t, e)),
                    this.current(t),
                    this.$element.is(":visible") && this.update();
            }),
            (c.prototype.next = function (t) {
                (t = t || !1), this.to(this.relative(this.current()) + 1, t);
            }),
            (c.prototype.prev = function (t) {
                (t = t || !1), this.to(this.relative(this.current()) - 1, t);
            }),
            (c.prototype.onTransitionEnd = function (t) {
                if (t !== a && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
                this.leave("animating"), this.trigger("translated");
            }),
            (c.prototype.viewport = function () {
                var t;
                if (this.options.responsiveBaseElement !== i) t = l(this.options.responsiveBaseElement).width();
                else if (i.innerWidth) t = i.innerWidth;
                else {
                    if (!s.documentElement || !s.documentElement.clientWidth) throw "Can not detect viewport width.";
                    t = s.documentElement.clientWidth;
                }
                return t;
            }),
            (c.prototype.replace = function (t) {
                this.$stage.empty(),
                    (this._items = []),
                    t && (t = t instanceof jQuery ? t : l(t)),
                    this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)),
                    t
                        .filter(function () {
                            return 1 === this.nodeType;
                        })
                        .each(
                            l.proxy(function (t, e) {
                                (e = this.prepare(e)), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").attr("data-merge") || 1);
                            }, this)
                        ),
                    this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
                    this.invalidate("items");
            }),
            (c.prototype.add = function (t, e) {
                var i = this.relative(this._current);
                (e = e === a ? this._items.length : this.normalize(e, !0)),
                    (t = t instanceof jQuery ? t : l(t)),
                    this.trigger("add", { content: t, position: e }),
                    (t = this.prepare(t)),
                    0 === this._items.length || e === this._items.length
                        ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[e - 1].after(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").attr("data-merge") || 1))
                        : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").attr("data-merge") || 1)),
                    this._items[i] && this.reset(this._items[i].index()),
                    this.invalidate("items"),
                    this.trigger("added", { content: t, position: e });
            }),
            (c.prototype.remove = function (t) {
                (t = this.normalize(t, !0)) !== a &&
                    (this.trigger("remove", { content: this._items[t], position: t }),
                    this._items[t].remove(),
                    this._items.splice(t, 1),
                    this._mergers.splice(t, 1),
                    this.invalidate("items"),
                    this.trigger("removed", { content: null, position: t }));
            }),
            (c.prototype.preloadAutoWidthImages = function (t) {
                t.each(
                    l.proxy(function (t, e) {
                        this.enter("pre-loading"),
                            (e = l(e)),
                            l(new Image())
                                .one(
                                    "load",
                                    l.proxy(function (t) {
                                        e.attr("src", t.target.src), e.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
                                    }, this)
                                )
                                .attr("src", e.attr("src") || e.attr("data-src") || e.attr("data-src-retina"));
                    }, this)
                );
            }),
            (c.prototype.destroy = function () {
                for (var t in (this.$element.off(".btq.core"),
                this.$stage.off(".btq.core"),
                l(s).off(".btq.core"),
                !1 !== this.settings.responsive && (i.clearTimeout(this.resizeTimer), this.off(i, "resize", this._handlers.onThrottledResize)),
                this._plugins))
                    this._plugins[t].destroy();
                this.$stage.children(".cloned").remove(),
                    this.$stage.unwrap(),
                    this.$stage.children().contents().unwrap(),
                    this.$stage.children().unwrap(),
                    this.$element
                        .removeClass(this.options.refreshClass)
                        .removeClass(this.options.loadingClass)
                        .removeClass(this.options.loadedClass)
                        .removeClass(this.options.rtlClass)
                        .removeClass(this.options.dragClass)
                        .removeClass(this.options.grabClass)
                        .attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), ""))
                        .removeData("btq.slidebox");
            }),
            (c.prototype.op = function (t, e, i) {
                var n = this.settings.rtl;
                switch (e) {
                    case "<":
                        return n ? i < t : t < i;
                    case ">":
                        return n ? t < i : i < t;
                    case ">=":
                        return n ? t <= i : i <= t;
                    case "<=":
                        return n ? i <= t : t <= i;
                }
            }),
            (c.prototype.on = function (t, e, i, n) {
                t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i);
            }),
            (c.prototype.off = function (t, e, i, n) {
                t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i);
            }),
            (c.prototype.trigger = function (t, e, i, n, s) {
                var a = { item: { count: this._items.length, index: this.current() } },
                    o = l.camelCase(
                        l
                            .grep(["on", t, i], function (t) {
                                return t;
                            })
                            .join("-")
                            .toLowerCase()
                    ),
                    r = l.Event([t, "btq", i || "slidebox"].join(".").toLowerCase(), l.extend({ relatedTarget: this }, a, e));
                return (
                    this._supress[t] ||
                        (l.each(this._plugins, function (t, e) {
                            e.onTrigger && e.onTrigger(r);
                        }),
                        this.register({ type: c.Type.Event, name: t }),
                        this.$element.trigger(r),
                        this.settings && "function" == typeof this.settings[o] && this.settings[o].call(this, r)),
                    r
                );
            }),
            (c.prototype.enter = function (t) {
                l.each(
                    [t].concat(this._states.tags[t] || []),
                    l.proxy(function (t, e) {
                        this._states.current[e] === a && (this._states.current[e] = 0), this._states.current[e]++;
                    }, this)
                );
            }),
            (c.prototype.leave = function (t) {
                l.each(
                    [t].concat(this._states.tags[t] || []),
                    l.proxy(function (t, e) {
                        this._states.current[e]--;
                    }, this)
                );
            }),
            (c.prototype.register = function (i) {
                if (i.type === c.Type.Event) {
                    if ((l.event.special[i.name] || (l.event.special[i.name] = {}), !l.event.special[i.name].btq)) {
                        var e = l.event.special[i.name]._default;
                        (l.event.special[i.name]._default = function (t) {
                            return !e || !e.apply || (t.namespace && -1 !== t.namespace.indexOf("btq")) ? t.namespace && -1 < t.namespace.indexOf("btq") : e.apply(this, arguments);
                        }),
                            (l.event.special[i.name].btq = !0);
                    }
                } else
                    i.type === c.Type.State &&
                        (this._states.tags[i.name] ? (this._states.tags[i.name] = this._states.tags[i.name].concat(i.tags)) : (this._states.tags[i.name] = i.tags),
                        (this._states.tags[i.name] = l.grep(
                            this._states.tags[i.name],
                            l.proxy(function (t, e) {
                                return l.inArray(t, this._states.tags[i.name]) === e;
                            }, this)
                        )));
            }),
            (c.prototype.suppress = function (t) {
                l.each(
                    t,
                    l.proxy(function (t, e) {
                        this._supress[e] = !0;
                    }, this)
                );
            }),
            (c.prototype.release = function (t) {
                l.each(
                    t,
                    l.proxy(function (t, e) {
                        delete this._supress[e];
                    }, this)
                );
            }),
            (c.prototype.pointer = function (t) {
                var e = { x: null, y: null };
                return (
                    (t = (t = t.originalEvent || t || i.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX
                        ? ((e.x = t.pageX), (e.y = t.pageY))
                        : ((e.x = t.clientX), (e.y = t.clientY)),
                    e
                );
            }),
            (c.prototype.isNumeric = function (t) {
                return !isNaN(parseFloat(t));
            }),
            (c.prototype.difference = function (t, e) {
                return { x: t.x - e.x, y: t.y - e.y };
            }),
            (l.fn.BTQSlider = function (e) {
                var n = Array.prototype.slice.call(arguments, 1);
                return this.each(function () {
                    var t = l(this),
                        i = t.data("btq.slidebox");
                    i ||
                        ((i = new c(this, "object" == typeof e && e)),
                        t.data("btq.slidebox", i),
                        l.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (t, e) {
                            i.register({ type: c.Type.Event, name: e }),
                                i.$element.on(
                                    e + ".btq.slidebox.core",
                                    l.proxy(function (t) {
                                        t.namespace && t.relatedTarget !== this && (this.suppress([e]), i[e].apply(this, [].slice.call(arguments, 1)), this.release([e]));
                                    }, i)
                                );
                        })),
                        "string" == typeof e && "_" !== e.charAt(0) && i[e].apply(i, n);
                });
            }),
            (l.fn.BTQSlider.Constructor = c);
    })(window.Zepto || window.jQuery, window, document),
    (function (e, i, t, n) {
        var s = function (t) {
            (this._core = t),
                (this._interval = null),
                (this._visible = null),
                (this._handlers = {
                    "initialized.btq.slidebox": e.proxy(function (t) {
                        t.namespace && this._core.settings.autoRefresh && this.watch();
                    }, this),
                }),
                (this._core.options = e.extend({}, s.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (s.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
            (s.prototype.watch = function () {
                this._interval || ((this._visible = this._core.$element.is(":visible")), (this._interval = i.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)));
            }),
            (s.prototype.refresh = function () {
                this._core.$element.is(":visible") !== this._visible &&
                    ((this._visible = !this._visible), this._core.$element.toggleClass("slide-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
            }),
            (s.prototype.destroy = function () {
                var t, e;
                for (t in (i.clearInterval(this._interval), this._handlers)) this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (e.fn.BTQSlider.Constructor.Plugins.AutoRefresh = s);
    })(window.Zepto || window.jQuery, window, document),
    (function (r, a, t, e) {
        var i = function (t) {
            (this._core = t),
                (this._loaded = []),
                (this._handlers = {
                    "initialized.btq.slidebox change.btq.slidebox resized.btq.slidebox": r.proxy(function (t) {
                        if (t.namespace && this._core.settings && this._core.settings.lazyLoad && ((t.property && "position" == t.property.name) || "initialized" == t.type)) {
                            var e = this._core.settings,
                                i = (e.center && Math.ceil(e.items / 2)) || e.items,
                                n = (e.center && -1 * i) || 0,
                                s = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + n,
                                a = this._core.clones().length,
                                o = r.proxy(function (t, e) {
                                    this.load(e);
                                }, this);
                            for (0 < e.lazyLoadEager && ((i += e.lazyLoadEager), e.loop && ((s -= e.lazyLoadEager), i++)); n++ < i; ) this.load(a / 2 + this._core.relative(s)), a && r.each(this._core.clones(this._core.relative(s)), o), s++;
                        }
                    }, this),
                }),
                (this._core.options = r.extend({}, i.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (i.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
            (i.prototype.load = function (t) {
                var e = this._core.$stage.children().children(),
                    i = this._core.$stage.children().eq(t),
                    n = i && i.find(".lazyload");
                !n ||
                    -1 < r.inArray(i.get(0), this._loaded) ||
                    (n &&
                        e.each(function (t, e) {
                            r(e).parent().addClass("loading");
                        }),
                    n.each(
                        r.proxy(function (t, e) {
                            var i,
                                n = r(e),
                                s = (1 < a.devicePixelRatio && n.attr("data-src-retina")) || n.attr("data-src") || n.attr("data-srcset");
                            this._core.trigger("load", { element: n, url: s }, "lazy"),
                                n.is("img")
                                    ? (n
                                          .one(
                                              "load.btq.lazy",
                                              r.proxy(function () {
                                                  n.css("opacity", 1), this._core.trigger("loaded", { element: n, url: s }, "lazy");
                                              }, this)
                                          )
                                          .attr("src", s),
                                      n.parent().parent().addClass("done"))
                                    : n.is("source")
                                    ? (n
                                          .one(
                                              "load.btq.lazy",
                                              r.proxy(function () {
                                                  this._core.trigger("loaded", { element: n, url: s }, "lazy");
                                              }, this)
                                          )
                                          .attr("srcset", s),
                                      n.parent().parent().addClass("done"))
                                    : (((i = new Image()).onload = r.proxy(function () {
                                          n.css({ "background-image": 'url("' + s + '")', opacity: "1" }), this._core.trigger("loaded", { element: n, url: s }, "lazy");
                                      }, this)),
                                      (i.src = s),
                                      n.parent().addClass("done"));
                        }, this)
                    ),
                    this._loaded.push(i.get(0)));
            }),
            (i.prototype.destroy = function () {
                var t, e;
                for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (r.fn.BTQSlider.Constructor.Plugins.Lazy = i);
    })(window.Zepto || window.jQuery, window, document),
    (function (o, i, t, e) {
        var n = function (t) {
            (this._core = t),
                (this._previousHeight = null),
                (this._handlers = {
                    "initialized.btq.slidebox refreshed.btq.slidebox": o.proxy(function (t) {
                        t.namespace && this._core.settings.autoHeight && this.update();
                    }, this),
                    "changed.btq.slidebox": o.proxy(function (t) {
                        t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update();
                    }, this),
                    "loaded.btq.lazy": o.proxy(function (t) {
                        t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
                    }, this),
                }),
                (this._core.options = o.extend({}, n.Defaults, this._core.options)),
                this._core.$element.on(this._handlers),
                (this._intervalId = null);
            var e = this;
            o(i).on("load", function () {
                e._core.settings.autoHeight && e.update();
            }),
                o(i).resize(function () {
                    e._core.settings.autoHeight &&
                        (null != e._intervalId && clearTimeout(e._intervalId),
                        (e._intervalId = setTimeout(function () {
                            e.update();
                        }, 250)));
                });
        };
        (n.Defaults = { autoHeight: !1, autoHeightClass: "autoheight" }),
            (n.prototype.update = function () {
                var t = this._core._current,
                    e = t + this._core.settings.items,
                    i = this._core.settings.lazyLoad,
                    n = this._core.$stage.children().toArray().slice(t, e),
                    s = [],
                    a = 0;
                o.each(n, function (t, e) {
                    s.push(o(e).height());
                }),
                    (a = Math.max.apply(null, s)) <= 1 && i && this._previousHeight && (a = this._previousHeight),
                    (this._previousHeight = a),
                    this._core.$stage.parent().height(a).addClass(this._core.settings.autoHeightClass);
            }),
            (n.prototype.destroy = function () {
                var t, e;
                for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (o.fn.BTQSlider.Constructor.Plugins.AutoHeight = n);
    })(window.Zepto || window.jQuery, window, document),
    (function (h, t, e, i) {
        var n = function (t) {
            (this._core = t),
                (this._videos = {}),
                (this._playing = null),
                (this._handlers = {
                    "initialized.btq.slidebox": h.proxy(function (t) {
                        t.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
                    }, this),
                    "resize.btq.slidebox": h.proxy(function (t) {
                        t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault();
                    }, this),
                    "refreshed.btq.slidebox": h.proxy(function (t) {
                        t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .slide-video-frame").remove();
                    }, this),
                    "changed.btq.slidebox": h.proxy(function (t) {
                        t.namespace && "position" === t.property.name && this._playing && this.stop();
                    }, this),
                    "prepared.btq.slidebox": h.proxy(function (t) {
                        if (t.namespace) {
                            var e = h(t.content).find(".slide-video");
                            e.length && (e.css("display", "none"), this.fetch(e, h(t.content)));
                        }
                    }, this),
                }),
                (this._core.options = h.extend({}, n.Defaults, this._core.options)),
                this._core.$element.on(this._handlers),
                this._core.$element.on(
                    "click.btq.video",
                    ".slide-video-play-icon",
                    h.proxy(function (t) {
                        this.play(t);
                    }, this)
                );
        };
        (n.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
            (n.prototype.fetch = function (t, e) {
                var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
                    n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                    s = t.attr("data-width") || this._core.settings.videoWidth,
                    a = t.attr("data-height") || this._core.settings.videoHeight,
                    o = t.attr("href");
                if (!o) throw new Error("Missing video URL.");
                if (
                    -1 <
                    (n = o.match(
                        /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                    ))[3].indexOf("youtu")
                )
                    i = "youtube";
                else if (-1 < n[3].indexOf("vimeo")) i = "vimeo";
                else {
                    if (!(-1 < n[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
                    i = "vzaar";
                }
                (n = n[6]), (this._videos[o] = { type: i, id: n, width: s, height: a }), e.attr("data-video", o), this.thumbnail(t, this._videos[o]);
            }),
            (n.prototype.thumbnail = function (e, t) {
                var i,
                    n,
                    s = t.width && t.height ? 'style="width:' + t.width + "px;height:" + t.height + 'px;"' : "",
                    a = e.find("img"),
                    o = "src",
                    r = "",
                    l = this._core.settings,
                    c = function (t) {
                        '<div class="slide-video-play-icon"></div>',
                            (i = l.lazyLoad ? '<div class="slide-video-tn ' + r + '" ' + o + '="' + t + '"></div>' : '<div class="slide-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>'),
                            e.after(i),
                            e.after('<div class="slide-video-play-icon"></div>');
                    };
                if ((e.wrap('<div class="slide-video-wrapper"' + s + "></div>"), this._core.settings.lazyLoad && ((o = "data-src"), (r = "lazyload")), a.length)) return c(a.attr(o)), a.remove(), !1;
                "youtube" === t.type
                    ? ((n = "//img.youtube.com/vi/" + t.id + "/sddefault.jpg"), c(n))
                    : "vimeo" === t.type
                    ? h.ajax({
                          type: "GET",
                          url: "//vimeo.com/api/v2/video/" + t.id + ".json",
                          jsonp: "callback",
                          dataType: "jsonp",
                          success: function (t) {
                              (n = t[0].thumbnail_large), c(n);
                          },
                      })
                    : "vzaar" === t.type &&
                      h.ajax({
                          type: "GET",
                          url: "//vzaar.com/api/videos/" + t.id + ".json",
                          jsonp: "callback",
                          dataType: "jsonp",
                          success: function (t) {
                              (n = t.framegrab_url), c(n);
                          },
                      });
            }),
            (n.prototype.stop = function () {
                this._core.trigger("stop", null, "video"),
                    this._playing.find(".slide-video-frame").remove(),
                    this._playing.removeClass("slide-video-playing"),
                    (this._playing = null),
                    this._core.leave("playing"),
                    this._core.trigger("stopped", null, "video");
            }),
            (n.prototype.play = function (t) {
                var e,
                    i = h(t.target).closest("." + this._core.settings.itemClass),
                    n = this._videos[i.attr("data-video")];
                n.width, n.height || this._core.$stage.height();
                this._playing ||
                    (this._core.enter("playing"),
                    this._core.trigger("play", null, "video"),
                    (i = this._core.items(this._core.relative(i.index()))),
                    this._core.reset(i.index()),
                    "youtube" === n.type
                        ? (e = '<iframe id="VYT" width="100%" height="100%" src="//www.youtube.com/embed/' + n.id + '?autoplay=1&enablejsapi=1&controls=1&loop=0&playsinline=1&color=white&rel=0" frameborder="0" allowfullscreen></iframe>')
                        : "vimeo" === n.type
                        ? (e = '<iframe src="//player.vimeo.com/video/' + n.id + '?autoplay=1" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
                        : "vzaar" === n.type && (e = '<iframe frameborder="0"height="100%"width="100%" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + n.id + '/player?autoplay=true"></iframe>'),
                    h('<div class="slide-video-frame">' + e + "</div>").insertAfter(i.find(".slide-video")),
                    (this._playing = i.addClass("slide-video-playing")));
            }),
            (n.prototype.isInFullScreen = function () {
                var t = e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement;
                return t && h(t).parent().hasClass("slide-video-frame");
            }),
            (n.prototype.destroy = function () {
                var t, e;
                for (t in (this._core.$element.off("click.btq.video"), this._handlers)) this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (h.fn.BTQSlider.Constructor.Plugins.Video = n);
    })(window.Zepto || window.jQuery, window, document),
    (function (o, t, e, i) {
        var n = function (t) {
            (this.core = t),
                (this.core.options = o.extend({}, n.Defaults, this.core.options)),
                (this.swapping = !0),
                (this.previous = void 0),
                (this.next = void 0),
                (this.handlers = {
                    "change.btq.slidebox": o.proxy(function (t) {
                        t.namespace && "position" == t.property.name && ((this.previous = this.core.current()), (this.next = t.property.value));
                    }, this),
                    "drag.btq.slidebox dragged.btq.slidebox translated.btq.slidebox": o.proxy(function (t) {
                        t.namespace && (this.swapping = "translated" == t.type);
                    }, this),
                    "translate.btq.slidebox": o.proxy(function (t) {
                        t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
                    }, this),
                }),
                this.core.$element.on(this.handlers);
        };
        (n.Defaults = { animateOut: !1, animateIn: !1 }),
            (n.prototype.swap = function () {
                if (1 === this.core.settings.items && o.support.animation && o.support.transition) {
                    this.core.speed(0);
                    var t,
                        e = o.proxy(this.clear, this),
                        i = this.core.$stage.children().eq(this.previous),
                        n = this.core.$stage.children().eq(this.next),
                        s = this.core.settings.animateIn,
                        a = this.core.settings.animateOut;
                    this.core.current() !== this.previous &&
                        (a &&
                            ((t = this.core.coordinates(this.previous) - this.core.coordinates(this.next)),
                            i
                                .one(o.support.animation.end, e)
                                .css({ left: t + "px" })
                                .addClass("animated animated-out")
                                .addClass(a)),
                        s && n.one(o.support.animation.end, e).addClass("animated animated-in").addClass(s));
                }
            }),
            (n.prototype.clear = function (t) {
                o(t.target).css({ left: "" }).removeClass("animated animated-out animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
            }),
            (n.prototype.destroy = function () {
                var t, e;
                for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (o.fn.BTQSlider.Constructor.Plugins.Animate = n);
    })(window.Zepto || window.jQuery, window, document),
    (function (i, n, s, t) {
        var e = function (t) {
            (this._core = t),
                (this._timeout = null),
                (this._paused = !1),
                (this._handlers = {
                    "changed.btq.slidebox": i.proxy(function (t) {
                        t.namespace && "settings" === t.property.name
                            ? this._core.settings.autoplay
                                ? this.play()
                                : this.stop()
                            : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval();
                    }, this),
                    "initialized.btq.slidebox": i.proxy(function (t) {
                        t.namespace && this._core.settings.autoplay && this.play();
                    }, this),
                    "play.btq.autoplay": i.proxy(function (t, e, i) {
                        t.namespace && this.play(e, i);
                    }, this),
                    "stop.btq.autoplay": i.proxy(function (t) {
                        t.namespace && this.stop();
                    }, this),
                    "mouseover.btq.autoplay": i.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                    }, this),
                    "mouseleave.btq.autoplay": i.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
                    }, this),
                    "touchstart.btq.core": i.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                    }, this),
                    "touchend.btq.core": i.proxy(function () {
                        this._core.settings.autoplayHoverPause && this.play();
                    }, this),
                }),
                this._core.$element.on(this._handlers),
                (this._core.options = i.extend({}, e.Defaults, this._core.options));
        };
        (e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }),
            (e.prototype.play = function (t, e) {
                (this._paused = !1), this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval());
            }),
            (e.prototype._getNextTimeout = function (t, e) {
                return (
                    this._timeout && n.clearTimeout(this._timeout),
                    n.setTimeout(
                        i.proxy(function () {
                            this._paused || this._core.is("busy") || this._core.is("interacting") || s.hidden || this._core.next(e || this._core.settings.autoplaySpeed);
                        }, this),
                        t || this._core.settings.autoplayTimeout
                    )
                );
            }),
            (e.prototype._setAutoPlayInterval = function () {
                this._timeout = this._getNextTimeout();
            }),
            (e.prototype.stop = function () {
                this._core.is("rotating") && (n.clearTimeout(this._timeout), this._core.leave("rotating"));
            }),
            (e.prototype.pause = function () {
                this._core.is("rotating") && (this._paused = !0);
            }),
            (e.prototype.destroy = function () {
                var t, e;
                for (t in (this.stop(), this._handlers)) this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (i.fn.BTQSlider.Constructor.Plugins.autoplay = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, t, e, i) {
        "use strict";
        var n = function (t) {
            (this._core = t),
                (this._initialized = !1),
                (this._pages = []),
                (this._controls = {}),
                (this._templates = []),
                (this.$element = this._core.$element),
                (this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }),
                (this._handlers = {
                    "prepared.btq.slidebox": a.proxy(function (t) {
                        t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
                    }, this),
                    "added.btq.slidebox": a.proxy(function (t) {
                        t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop());
                    }, this),
                    "remove.btq.slidebox": a.proxy(function (t) {
                        t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1);
                    }, this),
                    "changed.btq.slidebox": a.proxy(function (t) {
                        t.namespace && "position" == t.property.name && this.draw();
                    }, this),
                    "initialized.btq.slidebox": a.proxy(function (t) {
                        t.namespace &&
                            !this._initialized &&
                            (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), (this._initialized = !0), this._core.trigger("initialized", null, "navigation"));
                    }, this),
                    "refreshed.btq.slidebox": a.proxy(function (t) {
                        t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
                    }, this),
                }),
                (this._core.options = a.extend({}, n.Defaults, this._core.options)),
                this.$element.on(this._handlers);
        };
        (n.Defaults = {
            nav: !1,
            navText: ["", ""],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "slide-buttons",
            navClass: ["slide-prev", "slide-next"],
            slideBy: 1,
            dotClass: "slide-page",
            dotsClass: "slide-pagination",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
            dotNum: !1,
            dotSvg: !1,
        }),
            (n.prototype.initialize = function () {
                var t,
                    i = this._core.settings;
                for (t in ((this._controls.$relative = (i.navContainer ? a(i.navContainer) : a("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled")),
                (this._controls.$previous = a("<" + i.navElement + ">")
                    .addClass(i.navClass[0])
                    .html(i.navText[0])
                    .prependTo(this._controls.$relative)
                    .on(
                        "click",
                        a.proxy(function (t) {
                            this.prev(i.navSpeed);
                        }, this)
                    )),
                (this._controls.$next = a("<" + i.navElement + ">")
                    .addClass(i.navClass[1])
                    .html(i.navText[1])
                    .appendTo(this._controls.$relative)
                    .on(
                        "click",
                        a.proxy(function (t) {
                            this.next(i.navSpeed);
                        }, this)
                    )),
                i.dotsData || (this._templates = [a("<div>").addClass(i.dotClass).append(a("<span>")).prop("outerHTML")]),
                (this._controls.$absolute = (i.dotsContainer ? a(i.dotsContainer) : a("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled")),
                this._controls.$absolute.on(
                    "click",
                    "div",
                    a.proxy(function (t) {
                        var e = a(t.target).parent().is(this._controls.$absolute) ? a(t.target).index() : a(t.target).parent().index();
                        t.preventDefault(), this.to(e, i.dotsSpeed);
                    }, this)
                ),
                this._overrides))
                    this._core[t] = a.proxy(this[t], this);
            }),
            (n.prototype.destroy = function () {
                var t, e, i, n;
                for (t in this._handlers) this.$element.off(t, this._handlers[t]);
                for (e in this._controls) this._controls[e].remove();
                for (n in this.overides) this._core[n] = this._overrides[n];
                for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null);
            }),
            (n.prototype.update = function () {
                var t,
                    e,
                    i = this._core.clones().length / 2,
                    n = i + this._core.items().length,
                    s = this._core.maximum(!0),
                    a = this._core.settings,
                    o = a.center || a.autoWidth || a.dotsData ? 1 : a.dotsEach || a.items;
                if (("page" !== a.slideBy && (a.slideBy = Math.min(a.slideBy, a.items)), a.dots || "page" == a.slideBy))
                    for (this._pages = [], t = i, e = 0; t < n; t++) {
                        if (o <= e || 0 === e) {
                            if ((this._pages.push({ start: Math.min(s, t - i), end: t - i + o - 1 }), Math.min(s, t - i) === s)) break;
                            (e = 0), 0;
                        }
                        e += this._core.mergers(this._core.relative(t));
                    }
            }),
            (n.prototype.draw = function () {
                var t,
                    e = this._core.settings,
                    i = this._core.items().length <= e.items,
                    n = this._core.relative(this._core.current()),
                    s = e.loop || e.rewind;
                this._controls.$relative.toggleClass("disabled", !e.nav || i),
                    e.nav && (this._controls.$previous.toggleClass("disabled", !s && n <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !s && n >= this._core.maximum(!0))),
                    this._controls.$absolute.toggleClass("disabled", !e.dots || i),
                    e.dots &&
                        ((t = this._pages.length - this._controls.$absolute.children().length),
                        e.dotsData && 0 !== t
                            ? this._controls.$absolute.html(this._templates.join(""))
                            : 0 < t
                            ? this._controls.$absolute.append(new Array(t + 1).join(this._templates[0]))
                            : t < 0 && this._controls.$absolute.children().slice(t).remove(),
                        1 == e.dotNum &&
                            0 !== t &&
                            this._controls.$absolute.children().each(function (t, e) {
                                a(e).children().addClass("dot-number"),
                                    a(this)
                                        .children()
                                        .text(t + 1);
                            }),
                        e.dotSvg &&
                            0 !== t &&
                            this._controls.$absolute.children().each(function (t, e) {
                                a(e).children().append('<svg><circle class="circle-outer" cx="15" cy="15" r="12"/></svg>');
                            }),
                        this._controls.$absolute.find(".active").removeClass("active"),
                        this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
            }),
            (n.prototype.onTrigger = function (t) {
                var e = this._core.settings;
                t.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: e && (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items) };
            }),
            (n.prototype.current = function () {
                var i = this._core.relative(this._core.current());
                return a
                    .grep(
                        this._pages,
                        a.proxy(function (t, e) {
                            return t.start <= i && t.end >= i;
                        }, this)
                    )
                    .pop();
            }),
            (n.prototype.getPosition = function (t) {
                var e,
                    i,
                    n = this._core.settings;
                return (
                    "page" == n.slideBy
                        ? ((e = a.inArray(this.current(), this._pages)), (i = this._pages.length), t ? ++e : --e, (e = this._pages[((e % i) + i) % i].start))
                        : ((e = this._core.relative(this._core.current())), (i = this._core.items().length), t ? (e += n.slideBy) : (e -= n.slideBy)),
                    e
                );
            }),
            (n.prototype.next = function (t) {
                a.proxy(this._overrides.to, this._core)(this.getPosition(!0), t);
            }),
            (n.prototype.prev = function (t) {
                a.proxy(this._overrides.to, this._core)(this.getPosition(!1), t);
            }),
            (n.prototype.to = function (t, e, i) {
                var n;
                !i && this._pages.length ? ((n = this._pages.length), a.proxy(this._overrides.to, this._core)(this._pages[((t % n) + n) % n].start, e)) : a.proxy(this._overrides.to, this._core)(t, e);
            }),
            (a.fn.BTQSlider.Constructor.Plugins.Navigation = n);
    })(window.Zepto || window.jQuery, window, document),
    (function (n, s, t, e) {
        "use strict";
        var i = function (t) {
            (this._core = t),
                (this._hashes = {}),
                (this.$element = this._core.$element),
                (this._handlers = {
                    "initialized.btq.slidebox": n.proxy(function (t) {
                        t.namespace && "URLHash" === this._core.settings.startPosition && n(s).trigger("hashchange.btq.navigation");
                    }, this),
                    "prepared.btq.slidebox": n.proxy(function (t) {
                        if (t.namespace) {
                            var e = n(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                            if (!e) return;
                            this._hashes[e] = t.content;
                        }
                    }, this),
                    "changed.btq.slidebox": n.proxy(function (t) {
                        if (t.namespace && "position" === t.property.name) {
                            var i = this._core.items(this._core.relative(this._core.current())),
                                e = n
                                    .map(this._hashes, function (t, e) {
                                        return t === i ? e : null;
                                    })
                                    .join();
                            if (!e || s.location.hash.slice(1) === e) return;
                            s.location.hash = e;
                        }
                    }, this),
                }),
                (this._core.options = n.extend({}, i.Defaults, this._core.options)),
                this.$element.on(this._handlers),
                n(s).on(
                    "hashchange.btq.navigation",
                    n.proxy(function (t) {
                        var e = s.location.hash.substring(1),
                            i = this._core.$stage.children(),
                            n = this._hashes[e] && i.index(this._hashes[e]);
                        void 0 !== n && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0);
                    }, this)
                );
        };
        (i.Defaults = { URLhashListener: !1 }),
            (i.prototype.destroy = function () {
                var t, e;
                for (t in (n(s).off("hashchange.btq.navigation"), this._handlers)) this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (n.fn.BTQSlider.Constructor.Plugins.Hash = i);
    })(window.Zepto || window.jQuery, window, document),
    (function (s, t, e, a) {
        var o = s("<support>").get(0).style,
            r = "Webkit Moz O ms".split(" "),
            i = {
                transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } },
                animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } },
            },
            n = function () {
                return !!h("transform");
            },
            l = function () {
                return !!h("perspective");
            },
            c = function () {
                return !!h("animation");
            };
        function h(t, i) {
            var n = !1,
                e = t.charAt(0).toUpperCase() + t.slice(1);
            return (
                s.each((t + " " + r.join(e + " ") + e).split(" "), function (t, e) {
                    if (o[e] !== a) return (n = !i || e), !1;
                }),
                n
            );
        }
        function d(t) {
            return h(t, !0);
        }
        (function () {
            return !!h("transition");
        })() && ((s.support.transition = new String(d("transition"))), (s.support.transition.end = i.transition.end[s.support.transition])),
            c() && ((s.support.animation = new String(d("animation"))), (s.support.animation.end = i.animation.end[s.support.animation])),
            n() && ((s.support.transform = new String(d("transform"))), (s.support.transform3d = l()));
    })(window.Zepto || window.jQuery, window, document),
    (function (k, T) {
        (k.fn.impulse = function (t) {
            var s,
                a,
                o,
                r,
                e = k.extend({}, k.fn.impulse.default, t),
                i = k(T),
                n = this,
                l = k(e.target),
                c = {},
                h = [],
                d = {},
                u = [],
                p = [],
                f = [],
                m = [],
                g = "requestAnimationFrame",
                v = k.extend({ novel: g in T, turned: 0 }, e);
            return (
                (function () {
                    var t = k();
                    l.length || ((v.crux = !0), (l = n));
                    l.each(function () {
                        k.zenith(this)
                            ? v.main ||
                              (v.novel
                                  ? (v.main = T)
                                  : (v.main = (function () {
                                        var t = i.scrollTop();
                                        if (k("html").scrollTop()) var e = "html";
                                        else e = k("body").scrollTop() ? "body" : "html, body";
                                        return i.scrollTop(t), e;
                                    })()),
                              (t = t.add(v.main)))
                            : (t = t.add(this));
                    }),
                        (v.target = l = t),
                        l.each(function (t) {
                            k.zenith(this) ? (c[t] = "hub") : (c[t] = "sub");
                        }),
                        v.crux && v.main && (n = l);
                    _();
                })(),
                n.each(function (n) {
                    (v = k.extend({}, v)),
                        k(this)
                            .data("impulse", v)
                            .on("mousewheel", function (t, e) {
                                if (v.keen || t.mien) {
                                    if (t.mien) {
                                        (d = k.extend({}, v, e)), (v.annul = 1 == d.delay);
                                        var i = t.mien;
                                        d.fluid = !1;
                                    } else {
                                        if (v.annul) return;
                                        (d = v), (i = t.originalEvent.deltaY);
                                    }
                                    (i /= Math.abs(i)),
                                        v.crux ? ((s = k(this)), (u[0] = h[n])) : ((s = l), (u = h)),
                                        k.each({ range: "orbit", tempo: "pace" }, function (t, e) {
                                            "function" == typeof d[t] ? (d[e] = d[t]()) : (d[e] = d[t]);
                                        }),
                                        i != v.zeal || t.mien ? (v.turned = 1) : (v.turned = Math.min(v.curb, v.turned + 1)),
                                        (a = !d.delay && d.fluid && 1 == v.turned ? "curve" : d.effect),
                                        (o = i * d.orbit * Math.pow(v.leap, v.turned - 1)),
                                        (r = d.pace * Math.pow(v.sloth, v.turned - 1) || 1),
                                        (v.zeal = i),
                                        s.each(function (t) {
                                            (p[t] = k(this).scrollTop()), (m[t] = p[t] + o), (f[t] = b(this, t, p[t]));
                                        }),
                                        (v.waive = w()),
                                        o || (r = 1),
                                        v.novel
                                            ? (v.motion ? (cancelAnimationFrame(v.motion), (v.initial = v.present)) : (v.initial = Date.now()), (v.motion = T[g]($)))
                                            : s.each(function (i) {
                                                  f[i] ||
                                                      k(this)
                                                          .stop()
                                                          .animate(
                                                              { scrollTop: m[i] },
                                                              {
                                                                  duration: r,
                                                                  easing: a,
                                                                  progress: function (t, e) {
                                                                      y(this, i, e);
                                                                  },
                                                                  complete: x,
                                                              }
                                                          );
                                              });
                                }
                            }),
                        this.addEventListener(
                            "wheel",
                            function (t) {
                                if (v.keen) {
                                    if (v.annul) return C(t);
                                    1 != d.delay || v.waive || (v.annul = !0), (v.waive && v.occur) || C(t);
                                }
                            },
                            !!(function () {
                                var t = !1,
                                    e = function () {};
                                try {
                                    var i = Object.defineProperty({}, "passive", {
                                        get: function () {
                                            t = !0;
                                        },
                                    });
                                    T.addEventListener("test", e, i), T.removeEventListener("test", e, i);
                                } catch (t) {}
                                return t;
                            })() && { passive: !1 }
                        );
                }),
                (k.easing.curve = k.easing.easeInOutSine),
                i.resize(function () {
                    clearTimeout(v.bound), (v.bound = setTimeout(_, 100));
                }),
                this
            );
            function $() {
                v.present = Date.now();
                var e = Math.min(v.present - v.initial, r) / r,
                    i = k.easing[a](e);
                s.each(function (t) {
                    f[t] || (k(this).scrollTop(p[t] + i * o), y(this, t, e));
                }),
                    e < 1 && !v.waive ? (v.motion = T[g]($)) : x();
            }
            function y(t, e, i) {
                100 * i >= d.reset && (v.turned = 0), b(t, e) && ((f[e] = !0), v.novel || k(t).stop(!0, !0), (v.waive = w()));
            }
            function b(t, e, i) {
                var n = Math.round(i || k(t).scrollTop()),
                    s = m[e] < 0 && !n,
                    a = m[e] > u[e] && n == u[e] && 0 < d.orbit;
                return s || a;
            }
            function w() {
                return f.every(function (t) {
                    return t;
                });
            }
            function x() {
                v.turned = v.annul = v.motion = 0;
            }
            function C(t) {
                t.preventDefault(), t.stopPropagation();
            }
            function _() {
                l.each(function (t) {
                    if ("hub" == c[t]) var e = k(document).height() - i.height();
                    else e = this.scrollHeight - k(this).height();
                    h[t] = Math.round(e);
                });
            }
        }),
            (k.zenith = function (t) {
                var i,
                    e = [T, document, "HTML", "BODY"];
                return t
                    ? -1 < e.indexOf(t) || -1 < e.indexOf(t.tagName)
                    : (k.each(e, function (t, e) {
                          if ((i = k(e).data("impulse"))) return !1;
                      }),
                      i);
            }),
            (k.fn.impulse.default = { target: "", range: 135, leap: 1.35, tempo: 500, sloth: 1.1, curb: 5, reset: 85, effect: "easeOutSine", keen: !0, delay: !1, occur: !0, fluid: !0 }),
            (k.fn.demit = function () {
                return this.each(function () {
                    if (k.zenith(this)) var t = k.zenith();
                    else t = k(this).data("impulse");
                    t && (t.novel ? cancelAnimationFrame(t.motion) : t.target.stop(), (t.turned = t.annul = t.motion = 0));
                });
            }),
            (k.fn.amend = function (t) {
                return this.each(function () {
                    if (k.zenith(this)) var i = k.zenith();
                    else i = k(this).data("impulse");
                    i &&
                        k.each(t, function (t, e) {
                            t in i && (i[t] = e);
                        });
                });
            }),
            (k.fn.evoke = function (t) {
                var e,
                    i = k.Event("mousewheel", { mien: !0 });
                return this.each(function () {
                    k.zenith(this) ? e || ((e = k.zenith()) && k(e.main).trigger(i, t)) : k(this).trigger(i, t);
                });
            });
    })(jQuery, window),
    (function (i) {
        var n = {};
        i.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, t) {
            n[t] = function (t) {
                return Math.pow(t, e + 2);
            };
        }),
            i.extend(n, {
                Sine: function (t) {
                    return 1 - Math.cos((t * Math.PI) / 2);
                },
                Circ: function (t) {
                    return 1 - Math.sqrt(1 - t * t);
                },
                Elastic: function (t) {
                    return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin(((80 * (t - 1) - 7.5) * Math.PI) / 15);
                },
                Back: function (t) {
                    return t * t * (3 * t - 2);
                },
                Bounce: function (t) {
                    for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11; );
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2);
                },
            }),
            i.each(n, function (t, e) {
                (i.easing["easeIn" + t] = e),
                    (i.easing["easeOut" + t] = function (t) {
                        return 1 - e(1 - t);
                    }),
                    (i.easing["easeInOut" + t] = function (t) {
                        return t < 0.5 ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2;
                    });
            });
    })(jQuery);
var ios,
    android,
    blackBerry,
    UCBrowser,
    Operamini,
    firefox,
    windows,
    smartphone,
    tablet,
    touchscreen,
    all,
    ua = navigator.userAgent,
    versions = (match = ua.match("MSIE (.)")) && 1 < match.length ? match[1] : "unknown",
    isTouchDevice = "ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch) || 0 < navigator.msMaxTouchPoints || 0 < navigator.maxTouchPoints,
    isDesktop = 0 != $(window).width() && !isTouchDevice,
    IEMobile = ua.match(/IEMobile/i),
    isIE9 = /MSIE 9/i.test(ua),
    isIE10 = /MSIE 10/i.test(ua),
    isIE11 = !(!/rv:11.0/i.test(ua) || IEMobile),
    isEge = /Edge\/12./i.test(navigator.userAgent),
    isOpera = (!!window.opr && !!opr.addons) || !!window.opera || 0 <= ua.indexOf(" OPR/"),
    isFirefox = ua.match(/firefox|fxios/i),
    isIE = !!document.documentMode,
    isEdge = !isIE && !!window.StyleMedia && !isIE11,
    isChrome = -1 < ua.indexOf("Chrome") || (!!window.chrome && !!window.chrome.webstore),
    isBlink = (isChrome || isOpera) && !!window.CSS,
    isSafari = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") || (!isChrome && !isOpera && void 0 !== window.webkitAudioContext),
    AndroidVersion = parseFloat(ua.slice(ua.indexOf("Android") + 8)),
    Version = ua.match(/Android\s([0-9\.]*)/i),
    isMobile = {
        ios: ua.match(/iPhone|iPad|iPod/i),
        android: ua.match(/Android/i),
        blackBerry: ua.match(/BB10|Tablet|Mobile/i),
        UCBrowser: ua.match(/UCBrowser/i),
        Operamini: ua.match(/Opera Mini/i),
        windows: ua.match(/IEMobile/i),
        smartphone: ua.match(/Android|BlackBerry|Tablet|Mobile|iPhone|iPad|iPod|Opera Mini|IEMobile/i) && window.innerWidth <= 440 && window.innerHeight <= 740,
        tablet: ua.match(/Android|BlackBerry|Tablet|Mobile|iPhone|iPad|iPod|Opera Mini|IEMobile/i) && window.innerWidth <= 1366 && window.innerHeight <= 800,
        all: ua.match(/Android|BlackBerry|Tablet|Mobile|iPhone|iPad|iPod|Opera Mini|IEMobile/i),
    };
if ((isTouchDevice ? $("html").addClass("touch") : $("html").addClass("no-touch"), isTouchDevice && null !== isMobile.all)) var TouchLenght = !0;
else if ((isMobile.tablet && isFirefox) || (isMobile.smartphone && isFirefox)) TouchLenght = !0;
else TouchLenght = !1;
isMobile.Operamini && alert("Please disable Data Savings Mode");
var iOS = isMobile.ios,
    animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend webkitTransitionEnd mozTransitionEnd MSTransitionEnd otransitionend transitionend";
function changeUrl(t, e, i, n, s, a, o) {
    void 0 !== window.history.pushState && document.URL != t && "" != t && window.history.pushState({ path: t, dataName: s, title: e, keyword: n, description: i, titleog: a, descriptionog: o }, "", t);
    "" != e &&
        ($("#hdtitle").html(e),
        $('meta[property="og:description"]').remove(),
        $("#hdtitle").after('<meta property="og:description" content="' + o + '">'),
        $('meta[property="og:title"]').remove(),
        $("#hdtitle").after('<meta property="og:title" content="' + a + '">'),
        $('meta[property="og:url"]').remove(),
        $("#hdtitle").after('<meta property="og:url" content="' + t + '">'),
        $("meta[name=keywords]").remove(),
        $("#hdtitle").after('<meta name="keywords" content="' + n + '">'),
        $("meta[name=description]").remove(),
        $("#hdtitle").after('<meta name="description" content="' + i + '">')),
        $("#changlanguage_redirect").val(t);
}
var Time,
    timex,
    httptemplate = $(".httptemplate").text(),
    Loadx = 0;
function ResizeWindows() {
    $(window).height(), $(window).width(), $(window).height(), $(window).width();
    var t = $(window).width();
    $(window).height();
    t <= 1100
        ? ($(".slide-mask").css({ "-webkit-transform": "translate3d(0px, 0px, 0px)", transform: "translate3d(0px, 0px, 0px)" }),
          $(".news-text img, .details-text img, .pic-faci img, .project-picture .album-pic-center img").addClass("zoom-pic"),
          t <= 900 ? $(".bottom-link").addClass("fix-height") : $(".bottom-link").removeClass("fix-height"),
          $(".sub-project").addClass("show-height"))
        : 1100 < t && ($(".news-text img, .details-text img,.pic-faci img, .project-picture .album-pic-center img").removeClass("zoom-pic"), $(".bottom-link").removeClass("fix-height"), $(".sub-project").removeClass("show-height"));
}
function AnimationDelay() {
    var t = $(".nav li, .input-text, .input-area, .input-but, .list-item, .content-table tr"),
        e = $(".ani-more");
    $(t).each(function (t, e) {
        var i = 50 * Math.floor(t);
        $(e).css({ "-webkit-animation-delay": i + "ms", "animation-delay": i + "ms" });
    }),
        $(e).each(function (t, e) {
            var i = 60 * Math.floor(t);
            $(e).css({ "-webkit-animation-delay": i + "ms", "animation-delay": i + "ms" });
        });
}
function ScrollHoz() {
    var t = $(".scroll-slide");
    $(window).width() <= 1100 &&
        ($(t).css({ "-ms-touch-action": "auto", "-ms-overflow-style": "none", overflow: "-moz-scrollbars-none" }),
        $(t).animate({ scrollLeft: "0px" }),
        (0 != TouchLenght && isTouchDevice) ||
            ($(window).width() <= 1100 &&
                ($(t).mousewheel(function (t, e) {
                    t.preventDefault(), $(window).width() <= 1100 && (this.scrollLeft -= 40 * e);
                }),
                $(t).addClass("dragscroll"),
                $(".dragscroll").draptouch())));
}
function DrawLoad() {
    var t = $(".load-present"),
        e = $(t).find("path");
    $(e).each(function (t, e) {
        var i = this.getTotalLength();
        (isIE9 || isIE10 || isIE11 || isEdge) &&
            ($(this).css({ "stroke-dasharray": i + " " + i }),
            $(this).css({ "stroke-dashoffset": i, "stroke-dasharray": i + " " + i }),
            $(this)
                .stop()
                .animate({ "stroke-dashoffset": 0 }, 1200, "linear", function () {
                    $(this).stop().animate({ "stroke-dashoffset": i }, 1200, "linear");
                })),
            setTimeout(function () {
                $(".loadicon").addClass("show");
            }, 800);
    });
}
function Done() {
    ResizeWindows(),
        AnimationDelay(),
        SlidePicture(),
        (0 != TouchLenght && isTouchDevice) || ScrollHoz(),
        $("#investor-relation-page").length && selectHeader(),
        $(".mask").addClass("show"),
        $(".container")
            .stop()
            .animate({ opacity: 1 }, 600, "linear", function () {
                ContentLoad(), $(".youtube-video").length && $(".play-button").addClass("show start"), $(".header").addClass("hide");
            }),
        $(".loadicon")
            .stop()
            .animate({ opacity: 0 }, 300, "linear", function () {
                $(".stop-canvas").trigger("click"), $(".loadicon").remove();
            }),
        $(".pic-thumb-bg").length &&
            $(".pic-thumb-bg").each(function (t, e) {
                var i = $(e).find("img").attr("src");
                if (i) {
                    var n = i.replace(/(^url\()|(\)$|[\"\'])/g, "");
                    $(e).css({ "background-image": "url(" + n + ")" });
                }
            }),
        $("#map-canvas").length;
}
function ScrollBody() {
    $("body").hasClass("no-scroll") ? 1100 < $(window).width() && $("body").amend({ keen: !1 }) : 1100 < $(window).width() && $("body").impulse({ tempo: 450 });
}
function LoadCanvas(t) {
    function e(t, e) {
        return Math.random() * (e - t) + t;
    }
    var i = $(window).width(),
        n = $(window).height(),
        s = i / n,
        a = n,
        o = a * s;
    i < o && (a = (o = i) / s);
    var r,
        l = [];
    (l.width = o), (l.height = a);
    var c,
        h,
        d = 0.005 * Math.round(o + a);
    function u(t, e, i) {
        (this.y -= this.speed), this.y < -window.innerHeight / this.z && (this.y = window.innerHeight / this.z);
    }
    function p(t, e, i) {
        (this.y -= this.speed / 4), this.y < -window.innerHeight / this.z && (this.y = window.innerHeight / this.z);
    }
    if (
        ((canvallax.createGradient =
            ((c = document.createElement("canvas").getContext("2d")),
            (h = { x0: 200, y0: 0, x1: 200, y1: 0, size: 200, angle: 45, colors: ["#ed1c24", "#fff"] }),
            function (t) {
                for (var e = canvallax.extend({}, h, t), i = c.createLinearGradient(e.x0, e.y0, e.x1, e.y1), n = e.colors || [], s = n.length, a = 1 / s, o = 0; o < s; o++) i.addColorStop(o * a, n[o]);
                return i;
            })),
        $(".bg-menu").length)
    )
        for (var f = canvallax.Scene({ className: "bg-menu", parentElement: document.getElementById(t), fullscreen: !0, width: o, height: a, x: 0, y: 0 }), m = 0; m < d; m++)
            (r = e(0.1, 1)),
                (box1 = canvallax.Polygon({
                    points: [[30, 0],[90, 0],[120, 52],[90, 104],[30, 104],  [0, 52],"close"],
                    width: o / 4,
                    height: o / 4,
                    x: (m * (o / d)) / r,
                    y: e(-300, a),
                    z: r,
                    zIndex: 3 + 10 * r,
                    opacity: e(0.3, 1),
                    fill: canvallax.createGradient({ x0: 0, y0: 120, x1: 120, y1: 0, colors: ["#dc0d14", "#fff", "#ed1c24"] }),
                    speed: e(2, 5),
                    postRender: u,
                })),
                (box2 = canvallax.Polygon({
                    points: [[50, 0],[61, 35],[98, 35],  [68, 57],  [79, 91],  [50, 70],  [21, 91],[32, 57],  [2, 35],[39, 35],"close"],
                    width: o / 4.5,
                    height: o / 4.5,
                    x: (m * (o / d)) / r,
                    y: e(-300, a),
                    z: r,
                    fill: canvallax.createGradient({ x0: 0, y0: 100, x1: 100, y1: 0, colors: ["#ed1c24", "#fff"] }),
                    stroke: canvallax.createGradient({ x0: 0, y0: 100, x1: 100, y1: 0, colors: ["#fff", "#dc0d14"] }),
                    lineWidth: 1,
                    opacity: e(0.1, 0.8),
                    zIndex: 3 + 8 * r,
                    speed: e(4, 6),
                    postRender: p,
                })),
                l.push(box1),
                l.push(box2);
    window.requestAnimationFrame(function () {
        f.add(l), $(".navigation .bg-menu").addClass("ani-canvas"), 1 < $(".navigation .bg-menu canvas").length && $(".navigation .bg-menu canvas").last().remove();
    }),
        $(".play-canvas").on("click", function (t) {
            t.preventDefault(), f.play(l), $(".bg-menu  canvas").stop().fadeIn(600, "linear");
        }),
        $(".stop-canvas").on("click", function (t) {
            t.preventDefault(), f.stop(l), $(".bg-menu  canvas").stop().fadeOut(300, "linear");
        }),
        window.addEventListener("resize", function () {
            var t = $(window).width(),
                e = $(window).height(),
                i = t / e,
                n = e,
                s = n * i;
            t < s && (n = (s = t) / i), (box1.width = s / 4), (box1.height = s / 4), (box2.width = s / 4.5), (box2.height = s / 4.5), (l.width = s), (l.height = n), (f.width = s), (f.height = n);
        });
}
function initialize() {
    $(".httpserver").text();
    var t = $(".httptemplate").text(),
        e = $(".infobox-text-email").text(),
        i = $(".infobox-text-tel").text();
    $(".infobox-text-fax").text(), $(".infobox-text-address").text(), $(".infobox-text-address").text();
    (infoboxaddress_distribution = $(".infobox-address").text()),
        (infoboxlocationlat_distribution = $(".infobox-location-lat").text()),
        (infoboxlocationlng_distribution = $(".infobox-location-lng").text()),
        (infoboximage_distribution = $(".infobox-image").text()),
        (infoboximageicon_distribution = $(".infobox-image-icon").text()),
        (infoboxgooglemap_distribution = $(".infobox-googlemap").text()),
        (infoboxtitle_distribution = $(".infobox-name").text()),
        (infoboxphone_distribution = $(".infobox-phone").text()),
        (infoboxfax_distribution = $(".infobox-fax").text()),
        (infoboxphonetel_distribution = $(".infobox-phone-tel").text()),
        (infoboxemail_distribution = $(".infobox-email").text());
    var n,
        s = new google.maps.LatLng(infoboxlocationlat_distribution, infoboxlocationlng_distribution),
        a = [],
        o = new google.maps.StyledMapType(
            [
                { stylers: [{ hue: "#929292" }, { saturation: -100 }] },
                { featureType: "road", elementType: "geometry", stylers: [{ lightness: -5 }, { visibility: "simplified" }] },
                { featureType: "road", elementType: "labels", stylers: [{ visibility: "on" }] },
            ],
            { name: "Styled Map" }
        ),
        r = {
            center: s,
            zoom: 14,
            disableDefaultUI: !0,
            clickableIcons: !1,
            scrollwheel: !1,
            gestureHandling: "cooperative",
            mapTypeControlOptions: { mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"], position: google.maps.ControlPosition.TOP_RIGHT },
        },
        l = new google.maps.Map(document.getElementById("map-canvas"), r);
    l.mapTypes.set("map_style", o),
        l.setMapTypeId("map_style"),
        google.maps.event.addDomListener(window, "resize", function () {
            window.innerWidth <= 1100 && l.setOptions({ scrollwheel: !1 }), google.maps.event.trigger(l, "resize"), l.setCenter(s), l.setZoom(14);
        });
    var c = "";
    "" != infoboximage_distribution && (c = "<div class='pic-map'><img src='" + infoboximage_distribution + "' alt='" + infoboxtitle_distribution + "'></div>");
    var h = "";
    "" != infoboxphone_distribution && (h += i + " " + infoboxphone_distribution + "<br>"), "" != infoboxfax_distribution && (h = e + " " + infoboxemail_distribution + "<br>");
    var d = c + "<h3>" + infoboxtitle_distribution + "</h3><p>" + infoboxaddress_distribution + "<br>" + h + "</p>",
        u = (infoboxtitle_distribution, t + "default/images/marker.png"),
        p = new google.maps.InfoWindow(),
        f = "<div class='infobox'><div class='infobox-inner'>" + d + "</div><span class='close-box-map'></span></div>";
    function m(t) {
        (n = new google.maps.Marker({ map: l, animation: google.maps.Animation.DROP, position: t, icon: u, info: f, draggable: !1 })),
            a.push(n),
            google.maps.event.addListener(n, "click", function () {
                var t;
                p.setContent(this.info),
                    p.open(l, this),
                    l.setCenter(n.getPosition()),
                    l.setZoom(16),
                    null !== n.getAnimation() ? n.setAnimation(null) : n.setAnimation(google.maps.Animation.BOUNCE),
                    (t = l),
                    $("#map-canvas").on("click", ".close-box-map", function () {
                        p.close(t, this), n.setAnimation(null), t.setZoom(14);
                    });
            });
    }
    function g(t) {
        for (var e = 0; e < a.length; e++) a[e].setMap(t);
    }
    function v() {
        g(null), (a = []);
    }
    m(s),
        $(".put-show").on("click", function () {
            m(s), $(".googlemap").removeClass("empty");
        }),
        $(".put-hide").on("click", function () {
            v(), $(".googlemap").addClass("empty");
        }),
        ZoomControl(l, s);
}
function ZoomControl(e, t) {
    $(".zoom-control a").on("click", function () {
        var t = e.getZoom();
        switch ($(this).attr("id")) {
            case "zoom-full":
                $(".map-box").hasClass("full-screen") ? iOS || screenfull.exit() : iOS || screenfull.request($(".map-box")[0]);
                break;
            case "zoom-in":
                e.setZoom(++t);
                break;
            case "zoom-out":
                e.setZoom(--t);
        }
        return !1;
    }),
        screenfull.enabled &&
            screenfull.on("change", function () {
                screenfull.isFullscreen ? ($(".map-box").addClass("full-screen"), e.setOptions({ scrollwheel: !0 })) : ($(".map-box").removeClass("full-screen"), e.setOptions({ scrollwheel: !1 }), e.setCenter(t));
            });
}
if (
    ($(document).ready(function () {
        if (
            (ResizeWindows(),
            $(".title-rotate > h1, .title-rotate > h2").lettering("words").children("span").lettering().children("span").lettering(),
            $(".description h2").lettering("lines").children("span").lettering().children("span").lettering(),
            $(".loadicon").hasClass("loader") || ($(".loadicon").show(), $(".loadicon").addClass("loader"), DrawLoad()),
            1100 < $(window).width() && ($("#home-page, #about-page").length ? ($("body").addClass("hide"), BoxSlide()) : ScrollBody(), $("#about-page").length && ($(".footer").addClass("display-none"), $(".footer").remove())),
            $("#customer-service-page, #career-page").length && $(".container").addClass("show-head"),
            $("#project-details-page, #customer-service-page").length &&
                $(".sub-project").prepend(
                    '<a class="open-button" href="javascript:void(0)"><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70"><rect  fill="currentColor" x="15" y="45.9"  class="st0" width="40" height="5.1"/><rect  fill="currentColor" x="15" y="32.4" class="st0" width="40" height="5.1"/><rect  fill="currentColor" x="15" y="19" class="st0" width="40" height="5.1"/></svg></a>'
                ),
            isIE10 || isIE11 ? $("html").addClass("is-IE") : isEdge ? $("html").addClass("is-Edge") : iOS ? $("html").addClass("is-IOS") : isSafari ? $("html").addClass("is-Safari") : isChrome && $("html").addClass("is-Chrome"),
            $(".outer-nav").length)
        ) {
            (t = $(".outer-nav").clone()), $(".container").prepend(t), $(t).addClass("second");
        }
        var t;
        if (
            (1100 < $(window).width() &&
                $(".navigation .bg-menu").length &&
                $(".navigation .bg-menu").each(function (t, e) {
                    LoadCanvas($(e).attr("id"));
                }),
            $(".rotate-img .bg-menu").length &&
                $(".rotate-img .bg-menu").each(function (t, e) {
                    LoadCanvas($(e).attr("id"));
                }),
            $(".news-pic").length &&
                $(".news-pic").each(function (t, e) {
                    var i = $(e).find("img").attr("src");
                    if (i) {
                        var n = i.replace(/(^url\()|(\)$|[\"\'])/g, "");
                        $(e).css({ "background-image": "url(" + n + ")" });
                    }
                }),
            $(".pic-thumb").length)
        )
            new LazyLoad({
                threshold: 0,
                callback_enter: function (t) {
                    $(".pic-thumb").each(function (t, e) {
                        var i = $(e).find("img").attr("data-src");
                        if (i) {
                            var n = i.replace(/(^url\()|(\)$|[\"\'])/g, "");
                            $(e).css({ "background-image": "url(" + n + ")" });
                        }
                    });
                },
            });
    }),
    $(".youtube-video").length)
) {
    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var youTubeId,
        match,
        youTubeUrl = $(".youtube-video").attr("data-embed"),
        regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    youTubeId = (match = youTubeUrl.match(regExp)) && 11 == match[2].length ? match[2] : "no video found";
    var youTube = $(".youtube-video"),
        Source = "https://img.youtube.com/vi/" + youTubeId + "/sddefault.jpg";
    if (iOS)
        var SRC =
            '<iframe id="VYT" src="https://www.youtube.com/embed/' +
            youTubeId +
            "?autoplay=1&enablejsapi=1&controls=1&loop=0&playsinline=1&color=white&rel=0&cc_load_policy=1&playlist=" +
            youTubeId +
            '" frameborder="0"  allow="autoplay" allowfullscreen></iframe>';
    else
        SRC =
            '<iframe id="VYT" src="https://www.youtube.com/embed/' +
            youTubeId +
            "?autoplay=1&enablejsapi=1&controls=0&loop=0&playsinline=1&color=white&rel=0&cc_load_policy=1&playlist=" +
            youTubeId +
            '" frameborder="0"  allow="autoplay" allowfullscreen></iframe>';
    $(youTube).append(SRC);
    var BG = Source.replace(/(^url\()|(\)$|[\"\'])/g, "");
    function onYouTubeIframeAPIReady() {
        player = new YT.Player("VYT", { events: { onReady: onPlayerReady, onStateChange: onPlayerStateChange } });
    }
    function cleanTime() {
        return Math.round(player.getCurrentTime());
    }
    function updateTimerDisplay() {
        $("#current-time").text(formatTime(player.getCurrentTime())),
            $("#duration").text(formatTime(player.getDuration())),
            $("#duration").text() == $("#current-time").text() && (clearInterval(time_update), $(".bg-video").removeClass("hide"), $(".slide-mask").trigger("next.btq.slidebox"));
    }
    function formatTime(t) {
        t = Math.round(t);
        var e = Math.floor(t / 60),
            i = t - 60 * e;
        return e + ":" + (i = i < 10 ? "0" + i : i);
    }
    function updateProgressBar() {
        $("#progress-bar").val((player.getCurrentTime() / player.getDuration()) * 100);
    }
    function onPlayerReady(t) {
        t.target.mute(),
            $("#mutetoggle").attr("data-state", "unmute"),
            $(".pause-button").trigger("click"),
            updateTimerDisplay(),
            updateProgressBar(),
            clearInterval(time_update),
            (time_update = setInterval(function () {
                updateTimerDisplay(), updateProgressBar();
            }, 500));
    }
    function onPlayerStateChange(t) {
        switch (t.data) {
            case YT.PlayerState.PLAYING:
                $(".play-button").removeClass("show"), $("#playpause").attr("data-state", "pause");
                break;
            case YT.PlayerState.PAUSED:
                $(".play-button").addClass("show"), $("#playpause").attr("data-state", "play");
                break;
            case YT.PlayerState.ENDED:
        }
    }
    $(youTube)
        .parent()
        .append('<div class="bg-video" style="background-image:url(' + BG + ')"></div>'),
        (time_update = 0),
        $("#progress-bar").on("mouseup touchend", function (t) {
            var e = player.getDuration() * (t.target.value / 100);
            player.seekTo(e), $(".bg-video").hasClass("hide") || $(".bg-video").addClass("hide");
        }),
        $("#playpause").bind("click", function () {
            "play" == $(this).attr("data-state")
                ? (player.playVideo(), $(this).attr("data-state", "pause"), $(".bg-video").addClass("hide"), $(".play-button").removeClass("show"))
                : (player.pauseVideo(), $(this).attr("data-state", "play"), $(".play-button").addClass("show"), $(".bg-video").removeClass("hide"));
        }),
        $("#mutetoggle").bind("click", function () {
            "unmute" == $(this).attr("data-state") ? (player.unMute(), $(this).attr("data-state", "mute")) : (player.mute(), $(this).attr("data-state", "unmute"));
        }),
        $("#fullscreen").bind("click", function () {
            "go-fullscreen" == $(this).attr("data-state")
                ? ($(this).attr("data-state", "cancel-fullscreen"), $(".video-youtube-full").addClass("full-frame"), iOS || screenfull.request($(".video-youtube-full")[0]))
                : ($(this).attr("data-state", "go-fullscreen"), $(".video-youtube-full").removeClass("full-frame"), iOS || screenfull.exit());
        }),
        screenfull.enabled &&
            screenfull.on("change", function () {
                screenfull.isFullscreen
                    ? ($("#fullscreen").attr("data-state", "cancel-fullscreen"), $(".video-youtube-full").addClass("full-frame"))
                    : ($("#fullscreen").attr("data-state", "go-fullscreen"), $(".video-youtube-full").removeClass("full-frame"));
            }),
        $(".play-button").on("click", function (t) {
            t.preventDefault(), player.playVideo(), $(this).removeClass("show"), $("#playpause").attr("data-state", "pause"), $(".bg-video").addClass("hide");
        }),
        $(".pause-button").on("click", function (t) {
            t.preventDefault(), player.pauseVideo(), $(this).addClass("show"), $("#playpause").attr("data-state", "play");
        }),
        $(".youtube-video").on("click", function (t) {
            t.preventDefault(), $("#playpause").trigger("click");
        });
}
if (
    ($(window).on("beforeunload", function () {
        $(window).scrollTop(0);
    }),
    $(".ani-item").length)
) {
    var el = document.querySelector(".ani-item:not(.thumb-pic)");
    function hintBrowser() {
        this.style.willChange = "transform, opacity";
    }
    function removeHint() {
        this.style.willChange = "auto";
    }
    el.addEventListener("mouseenter", hintBrowser), el.addEventListener("animationEnd", removeHint);
}
!(function (t) {
    var a = { on: t.fn.on, bind: t.fn.bind };
    t.each(a, function (e) {
        t.fn[e] = function () {
            var i,
                t = [].slice.call(arguments),
                n = t.pop(),
                s = t.pop();
            return (
                t.push(function () {
                    var t = this,
                        e = arguments;
                    clearTimeout(i),
                        (i = setTimeout(function () {
                            s.apply(t, [].slice.call(e));
                        }, n));
                }),
                a[e].apply(this, isNaN(n) ? arguments : t)
            );
        };
    });
})(jQuery);
var Arrhash,
    player,
    News = 0,
    Details = 0,
    Videoload = 0,
    doWheel = !0,
    doTouch = !0,
    windscroll = $(document).scrollTop(),
    isFirst = 0;
function onScroll() {
    var t = $(".ani-item");
    $(t).each(function (t, e) {
        $(e).isInViewport() && $(e).addClass("on-show"), windscroll <= 150 && $(".pic-length").removeClass("on-show");
    });
}
function execSearch() {
    var t = $("#qsearch").val(),
        e = $("#href_search").val(),
        i = $("#defaultvalue").val(),
        n = ((i = $("#defaultvalue").val()), $("#errorsearch").val());
    if (t == i || "" == t) return !1;
    if (t.length <= 1) return $(".overlay-dark").after("<div  class='contact-success color-red'>" + n + "</div>"), setTimeout(hidemsg, 5e3), !1;
    if ("" != t) {
        var s = e + "?qsearch=" + encodeURIComponent(t);
        return (window.location = s), !1;
    }
}
function Search() {
    $(document).on("click", ".search-but", function (t) {
        $(this).hasClass("active")
            ? ($(".search-form, .search-but").removeClass("active"), execSearch())
            : ($(".search-form, .search-but").addClass("active"), document.getElementById("search").reset(), $(".nav-click").hasClass("active") && $(".nav-click").trigger("click"));
    }),
        $("#qsearch").keydown(function (t) {
            13 == t.keyCode && execSearch();
        });
}
function NavClick() {
    $(".nav-click").on("click", function () {
        return (
            $(".nav-click").hasClass("active")
                ? ($(".navigation").scrollTop(0),
                  $("html, body").removeClass("no-scroll"),
                  $(".nav-click").removeClass("active"),
                  $(".overlay-menu, .navigation").removeClass("show"),
                  $(".social-top, .logo").removeClass("fixed"),
                  $(".bg-menu  canvas").length && $(".stop-canvas").trigger("click"),
                  $(".details-content").length && $(".details-content").removeClass("hidden"),
                  ($('.group-central[data-name="client-home"]').hasClass("show-text") || $('.group-central[data-name="about-testimonial"]').hasClass("show-text")) &&
                      setTimeout(function () {
                          $(".play-canvas").trigger("click");
                      }, 500),
                  $(".slide-mask .slide-item").hasClass("ani-text") && $(".play").trigger("click"))
                : ($(".navigation").scrollTop(0),
                  $("html, body").addClass("no-scroll"),
                  $(".nav-click").addClass("active"),
                  $(".overlay-menu, .navigation").addClass("show"),
                  $(".social-top, .logo").addClass("fixed"),
                  $(".details-content").length && $(".details-content").addClass("hidden"),
                  $(".bg-menu  canvas").length && $(".play-canvas").trigger("click"),
                  $(".slide-mask .slide-item").hasClass("ani-text") && $(".stop").trigger("click")),
            ScrollBody(),
            !1
        );
    }),
        $(".overlay-menu").on("click", function () {
            $(".nav-click").hasClass("active") && $(".nav-click").trigger("click");
        }),
        $(".navigation").on("mousewheel", function () {
            if (1100 < $(window).width()) return !1;
        });
}
function BoxSlide() {
    var i = $(".group-central").length,
        s = $(".group-central").index(),
        a = !1;
    function o() {
        setTimeout(function () {
            TweenLite.set($(".group-central").not($(".group-central")[s]), { y: "100%" }), (a = !1);
        }, 1e3);
    }
    function n() {
        if (
            ((a = !0),
            TweenLite.set($(".group-central"), { zIndex: 2 }),
            $(".go-top").removeClass("show"),
            $(".wheel").addClass("show"),
            $(".stop-canvas").trigger("click"),
            $("#home-page").length && $(".stop").trigger("click"),
            TweenLite.fromTo(
                $(".group-central")[s],
                0.8,
                { zIndex: 5 },
                {
                    y: "0%",
                    ease: Quad.easeOut,
                    onComplete: function () {
                        $(".group-central").removeClass("show-text"),
                            $(".group-central").eq(s).addClass("show-text"),
                            $(".box-nav li").removeClass("current"),
                            $(".box-nav li").eq(s).addClass("current"),
                            $('.group-central[data-name="banner-home"]').hasClass("show-text") && ($(".slide-mask").trigger("next.btq.slidebox"), $(".play").trigger("click")),
                            ($('.group-central[data-name="client-home"]').hasClass("show-text") || $('.group-central[data-name="about-testimonial"]').hasClass("show-text")) && $(".play-canvas").trigger("click"),
                            $(".box-slider .group-central:last-child").hasClass("show-text") && ($(".go-top").addClass("show"), $(".wheel").removeClass("show")),
                            AniText(),
                            o();
                    },
                }
            ),
            !$("#home-page").length)
        ) {
            var t = $(".box-nav li").eq(s).find("span").attr("data-href"),
                e = $(".box-nav li").eq(s).find("span").attr("data-title"),
                i = $(".box-nav li").eq(s).find("span").attr("data-keyword"),
                n = $(".box-nav li").eq(s).find("span").attr("data-description");
            changeUrl(t, e, n, i, $(".box-nav li").eq(s).find("span").attr("data-page"), e, n);
        }
    }
    function r() {
        if (
            ((a = !0),
            TweenLite.set($(".group-central"), { zIndex: 2 }),
            $(".go-top").removeClass("show"),
            $(".wheel").addClass("show"),
            $(".stop-canvas").trigger("click"),
            $("#home-page").length && $(".stop").trigger("click"),
            TweenLite.fromTo(
                $(".group-central")[s],
                0.8,
                { y: "-100%", zIndex: 5 },
                {
                    y: "0%",
                    ease: Quad.easeOut,
                    onComplete: function () {
                        $(".group-central").removeClass("show-text"),
                            $(".group-central").eq(s).addClass("show-text"),
                            $(".box-nav li").removeClass("current"),
                            $(".box-nav li").eq(s).addClass("current"),
                            $('.group-central[data-name="banner-home"]').hasClass("show-text") && ($(".slide-mask").trigger("next.btq.slidebox"), $(".play").trigger("click")),
                            ($('.group-central[data-name="client-home"]').hasClass("show-text") || $('.group-central[data-name="about-testimonial"]').hasClass("show-text")) && $(".play-canvas").trigger("click"),
                            $(".box-slider .group-central:last-child").hasClass("show-text") && ($(".go-top").addClass("show"), $(".wheel").removeClass("show")),
                            AniText(),
                            o();
                    },
                }
            ),
            !$("#home-page").length)
        ) {
            var t = $(".box-nav li").eq(s).find("span").attr("data-href"),
                e = $(".box-nav li").eq(s).find("span").attr("data-title"),
                i = $(".box-nav li").eq(s).find("span").attr("data-keyword"),
                n = $(".box-nav li").eq(s).find("span").attr("data-description");
            changeUrl(t, e, n, i, $(".box-nav li").eq(s).find("span").attr("data-page"), e, n);
        }
    }
    TweenLite.set($(".group-central").not($(".group-central")[s]), { y: "100%" }),
        1100 < $(window).width() &&
            ($(".box-slider").on("mousewheel", function (t) {
                var e;
                !1 === a && (e = Math.max(-1, Math.min(1, t.wheelDelta || -t.deltaY || -t.detail))),
                    1100 < $(window).width() && (null != $(".group-central")[s] && 1 === parseInt(e) ? (i - 1 <= s ? (s = 0) : s++, n()) : null != $(".group-central")[s] && -1 === parseInt(e) && (s <= 0 ? (s = i - 1) : s--, r()));
            }),
            $(".box-slider")
                .on("swipeup", function (t, e) {
                    doTouch && ((doTouch = !1), 1100 < $(window).width() && !$("body").hasClass("fullmap") && ($(".box-nav li.current").next().trigger("click"), setTimeout(turnWheelTouch, 500)));
                })
                .on("swipedown", function (t) {
                    doTouch && ((doTouch = !1), 1100 < $(window).width() && !$("body").hasClass("fullmap") && ($(".box-nav li.current").prev().trigger("click"), setTimeout(turnWheelTouch, 500)));
                }));
    $(".box-nav li").length;
    $(".box-nav li").on("click", function () {
        var t = $(this).index();
        return a || (!a && s < t ? ((s = t), n()) : !a && t < s && ((s = t), r())), !1;
    }),
        i <= 1 && $(".box-nav, .wheel, .go-top").addClass("display-none"),
        setTimeout(function () {
            $(".group-central:first-child").addClass("show-text"), $(".box-nav li:first-child").addClass("current");
        }, 500);
}
function SlidePicture() {
    if ($(".slide-mask").length) {
        if (($(".slide-mask").addClass("show"), 1 < $(".slide-mask").children().length)) {
            var e = $(".slide-mask").attr("data-time");
            $(".stop").length || $(".slide-mask").parent().prepend('<div class="stop"></div><div class="play"></div>');
        } else e = !1;
        if ($(".youtube-video").length) var t = !0;
        else t = !1;
        $(".slide-mask")
            .BTQSlider({
                animateOut: "fade-Out",
                animateIn: "fade-In",
                mouseDrag: !1,
                touchDrag: !1,
                pullDrag: !1,
                rewind: !0,
                margin: 0,
                video: !1,
                autoplay: !0,
                autoplayTimeout: e,
                autoHeight: t,
                smartSpeed: 1e3,
                items: 1,
                nav: !0,
                dots: !0,
                dotNum: !0,
                dotSvg: !0,
                responsiveRefreshRate: 300,
            })
            .on(
                "initialize.btq.slidebox",
                (function () {
                    $(".slide-mask .slide-item.active").addClass("ani-text"),
                        $(".arrow").length ||
                            ($(".slide-mask .slide-next").append('<svg viewBox="0 0 60 60"><path class="arrow" fill="currentColor" d="M24.5,42 22.5,40.2 33.6,30 22.5,19.8 24.5,18 37.5,30z"></path></svg>'),
                            $(".slide-mask .slide-prev").append('<svg viewBox="0 0 60 60"><path class="arrow" fill="currentColor" d="M35.5,42 37.5,40.2 26.4,30 37.5,19.8 35.5,18 22.5,30z"></path></svg>'));
                    $(".circle-outer").css({ "-webkit-animation-duration": 7 * e + "ms", "animation-duration": 7 * e + "ms" }),
                        $(".youtube-video").length &&
                            ($(".slide-mask .slide-item:first-child").hasClass("ani-text")
                                ? ($(".slide-mask .slide-pagination").addClass("no-display"), $(".slide-mask").trigger("stop.btq.autoplay"))
                                : $(".slide-mask .slide-pagination").removeClass("no-display"));
                })()
            ),
            $(".slide-mask").on("translate.btq.slidebox", function (t) {
                $(".slide-mask .slide-item").removeClass("ani-text");
            }),
            $(".slide-mask").on("translated.btq.slidebox", function (t) {
                $(".slide-mask .slide-item.active").addClass("ani-text"),
                    $(".youtube-video").length &&
                        ($(".slide-mask .slide-item:first-child").hasClass("ani-text")
                            ? ($(".slide-mask .slide-pagination").addClass("no-display"), $(".play-button").trigger("click"), $(".slide-mask").trigger("stop.btq.autoplay"))
                            : ($(".slide-mask .slide-pagination").removeClass("no-display"), $(".pause-button").trigger("click"), $(".slide-mask").trigger("play.btq.autoplay", [e])));
            }),
            $(".slide-mask")
                .on("swipeleft", function (t, e) {
                    doTouch && ((doTouch = !1), 1 < $(".slide-mask .slide-item").children().length && $(".slide-mask").trigger("next.btq.slidebox"), setTimeout(turnWheelTouch, 500));
                })
                .on("swiperight", function (t) {
                    doTouch && ((doTouch = !1), 1 < $(".slide-mask .slide-item").children().length && $(".slide-mask").trigger("prev.btq.slidebox"), setTimeout(turnWheelTouch, 500));
                }),
            $(".play").on("click", function () {
                return (
                    $(".youtube-video").length && $(".slide-mask .slide-item:first-child").hasClass("ani-text") ? $(".bg-video").hasClass("hide") && $(".play-button").trigger("click") : $(".slide-mask").trigger("play.btq.autoplay", [e]), !1
                );
            }),
            $(".stop").on("click", function () {
                return $(".slide-mask").trigger("stop.btq.autoplay"), $(".youtube-video").length && $(".slide-mask .slide-item:first-child").hasClass("ani-text") && $(".bg-video").hasClass("hide") && $(".pause-button").trigger("click"), !1;
            });
    }
    if ($(".testimonial-slide").length) {
        if ($(".resource-pic").length)
            var i = !1,
                n = !1,
                s = !1,
                a = "fade-OutUp",
                o = "fade-InUp";
        else (i = !0), (n = !0), (s = !0), (a = !1), (o = !1);
        $(".testimonial-slide").BTQSlider({
            items: 1,
            smartSpeed: 500,
            responsiveRefreshRate: 300,
            margin: 20,
            animateOut: a,
            animateIn: o,
            mouseDrag: i,
            touchDrag: n,
            pullDrag: s,
            dots: !0,
            nav: !0,
            dotNum: !0,
            center: !0,
            autoHeight: !0,
            loop: !0,
            responsive: { 0: { nav: !1 }, 1e3: { nav: !1 }, 1100: { nav: !0 } },
        });
    }
    if (
        ($(".resource-pic").length &&
            $('.group-central[data-post="member"] .content-right')
                .on("swipeleft", function (t, e) {
                    doTouch && ((doTouch = !1), 1 < $(".testimonial-slide .slide-item").children().length && $(".testimonial-slide .slide-next").trigger("click"), setTimeout(turnWheelTouch, 500));
                })
                .on("swiperight", function (t) {
                    doTouch && ((doTouch = !1), 1 < $(".testimonial-slide .slide-item").children().length && $(".testimonial-slide .slide-prev").trigger("click"), setTimeout(turnWheelTouch, 500));
                }),
        $(".partner-slide").length &&
            $(".partner-slide").BTQSlider({
                items: 1,
                smartSpeed: 500,
                responsiveRefreshRate: 300,
                margin: 20,
                dots: !0,
                nav: !0,
                dotNum: !0,
                center: !0,
                autoHeight: !0,
                rewind: !0,
                responsive: { 0: { nav: !1 }, 1e3: { nav: !1 }, 1100: { nav: !0 } },
            }),
        $(".slide-library").length)
    ) {
        function r() {
            $(".pic-thumb-bg").each(function (t, e) {
                var i = $(e).find("img").attr("data-src") || $(e).find("img").attr("src");
                if (i) {
                    var n = i.replace(/(^url\()|(\)$|[\"\'])/g, "");
                    $(e).css({ "background-image": "url(" + n + ")" });
                }
            });
        }
        $(".slide-library").each(function (t, n) {
            var s = $(n).parent().find(".slide-pagi"),
                a = $(n).parent();
            $(n)
                .on("initialized.btq.slidebox", function () {
                    r();
                })
                .BTQSlider({ mouseDrag: !1, touchDrag: !1, pullDrag: !1, items: 1, smartSpeed: 500, responsiveRefreshRate: 300, margin: 20, dots: !1, nav: !0, center: !0, lazyLoad: !0, autoHeight: !0 }),
                $(n).on("translated.btq.slidebox", function (t) {
                    r(), $(s).find("div").removeClass("current");
                    var e = $(n).find(".slide-item.center").index() - 1,
                        i = $(n).find(".slide-item.center").index();
                    $(s).data("btq.slidebox").to(e, 300, !0),
                        $(s)
                            .find('div[data-slide="' + i + '"]')
                            .addClass("current");
                }),
                $(s).on("click", ".slide-item", function (t) {
                    t.preventDefault();
                    var e = $(this).index(),
                        i = $(a).offset().top - 150;
                    $("html, body")
                        .stop()
                        .animate({ scrollTop: i }, 300, "linear", function () {
                            $(n).data("btq.slidebox").to(e, 600, !0);
                        });
                });
        });
    }
    if (
        ($(".history-slide").length &&
            ($(".history-slide")
                .on("initialized.btq.slidebox", function () {
                    $(".history-slide .slide-item.active:first").addClass("highlight"), $(".history-slide").addClass("hide-border");
                })
                .BTQSlider({
                    smartSpeed: 500,
                    margin: 1,
                    rewind: !0,
                    dots: !0,
                    nav: !0,
                    dotNum: !0,
                    items: 1,
                    loop: !0,
                    responsiveRefreshRate: 300,
                    responsive: { 0: { nav: !1, dots: !0 }, 1e3: { nav: !1, dots: !0 }, 1100: { nav: !0, dots: !0 } },
                }),
            $(".history-slide").on("translate.btq.slidebox", function (t) {
                $(".history-slide .slide-item").removeClass("highlight"), $(".history-slide").removeClass("hide-border");
            }),
            $(".history-slide").on("translated.btq.slidebox", function (t) {
                $(".history-slide .slide-item.active:first").addClass("highlight"), $(".history-slide").addClass("hide-border");
            })),
        $(".project-picture").length)
    ) {
        $(".album-picture")
            .on("initialized.btq.slidebox", function () {
                if ($(".item-video").length) {
                    $(".album-picture").parent().prepend('<div class="pause-button"></div><div class="play-button"></div>');
                    var t = $(".item-video").find(".slide-video-tn").css("background-image");
                    t = t.replace(/.*\s?url\([\'\"]?/, "").replace(/[\'\"]?\).*/, "");
                    var e = $(".item-video").attr("data-video");
                    $(".thumb-item[data-thumb='" + e + "'] a").append('<img src ="' + t + '" alt="pic">');
                }
            })
            .BTQSlider({ items: 1, margin: 0, smartSpeed: 600, loop: !1, dots: !1, video: !0, autoHeight: !0, responsiveRefreshRate: 300 })
            .on("changed.btq.slidebox", function (t) {
                $(".thumbs").length &&
                    (function (t) {
                        var e = t.item.Count - 1,
                            i = t.item.index;
                        i < 0 && (i = e);
                        e < i && (i = 0);
                        $(".thumbs").find(".slide-item").removeClass("current").eq(i).addClass("current");
                        var n = $(".thumbs").find(".slide-item.active").length - 1,
                            s = $(".thumbs").find(".slide-item.active").first().index(),
                            a = $(".thumbs").find(".slide-item.active").last().index();
                        a - 1 <= i && $(".thumbs").data("btq.slidebox").to(i, 300, !0);
                        i <= s &&
                            $(".thumbs")
                                .data("btq.slidebox")
                                .to(i - n, 300, !0);
                    })(t);
            }),
            $(".thumbs")
                .on("initialized.btq.slidebox", function () {
                    $(".thumbs").find(".slide-item").eq(0).addClass("current");
                })
                .BTQSlider({ margin: 3, smartSpeed: 300, dots: !1, nav: !1, items: 5, slideBy: 5, responsiveRefreshRate: 300 }),
            $(".thumbs").on("click", ".slide-item", function (t) {
                t.preventDefault();
                var e = $(this).index();
                $(".album-picture").data("btq.slidebox").to(e, 600, !0);
            }),
            $(".item-video").length && LoadAPI(),
            $(".album-picture").on("click", ".slide-video-play-icon", function () {
                onYouTubePlayerAPIReady();
            });
    }
    $(".slide-pagi").length &&
        $(".slide-pagi").each(function (t, e) {
            if ($(".slide-library").length) var i = !0;
            else i = !1;
            $(e)
                .on("initialized.btq.slidebox", function () {
                    $(e).find(".slide-item").length <= 5 ? $(e).addClass("current-left") : $(e).removeClass("current-left "), $(".slide-library").length && $(".slide-item.pagi div").addClass("current");
                })
                .BTQSlider({ nav: !0, dots: !1, items: 5, margin: 2, dotNum: !1, autoWidth: !0, pagi: i });
        });
}
function videoSlide() {
    $(".video-center").parent().prepend('<div class="pause-button"></div><div class="play-button"></div>'),
        $(".video-center")
            .on("initialized.btq.slidebox", function () {
                $(".video-center").find(".slide-item.active").addClass("selected"),
                    $(".video-center .slide-item").each(function (t, e) {
                        var i = $(e).find(".slide-video-tn").css("background-image");
                        i = i.replace(/.*\s?url\([\'\"]?/, "").replace(/[\'\"]?\).*/, "");
                        var n = $(e).find(".item-video").attr("data-video");
                        $(".thumb-item[data-thumb='" + n + "'] a").append('<img src ="' + i + '" alt="pic">');
                    });
            })
            .BTQSlider({ items: 1, margin: 0, video: !0, center: !0, dots: !1, rewind: !0, nav: !0, responsive: { 0: { nav: !1 }, 1e3: { nav: !1 }, 1100: { nav: !0 } } })
            .on("changed.btq.slidebox", function (t) {
                $(".thumbs-video").length &&
                    (function (t) {
                        var e = t.item.Count - 1,
                            i = t.item.index;
                        i < 0 && (i = e);
                        e < i && (i = 0);
                        $(".thumbs-video").find(".slide-item").removeClass("current").eq(i).addClass("current");
                        var n = $(".thumbs-video").find(".slide-item.active").length - 1,
                            s = $(".thumbs-video").find(".slide-item.active").first().index(),
                            a = $(".thumbs-video").find(".slide-item.active").last().index();
                        a - 1 <= i && $(".thumbs-video").data("btq.slidebox").to(i, 300, !0);
                        i <= s &&
                            $(".thumbs-video")
                                .data("btq.slidebox")
                                .to(i - n, 300, !0);
                    })(t);
            })
            .on("translate.btq.slidebox", function (t) {
                $(".video-center").find(".slide-item").removeClass("selected");
            })
            .on("translated.btq.slidebox", function (t) {
                $(".video-center").find(".slide-item.active").addClass("selected");
            }),
        $(".thumbs-video")
            .on("initialized.btq.slidebox", function () {
                var t = $(".thumbs-video").find(".slide-item").length;
                600 <= $(window).width()
                    ? t <= 6
                        ? $(".thumbs-video").addClass("center-slidebox")
                        : $(".thumbs-video").removeClass("center-slidebox")
                    : t <= 3
                    ? $(".thumbs-video").addClass("center-slidebox")
                    : $(".thumbs-video").removeClass("center-slidebox"),
                    t <= 1 ? $(".thumbs-video").hide() : $(".thumbs-video").show(),
                    $(".thumbs-video").find(".slide-item").eq(0).addClass("current");
            })
            .BTQSlider({ margin: 5, smartSpeed: 300, dots: !1, nav: !1, responsiveRefreshRate: 300, responsive: { 0: { items: 3, slideBy: 3 }, 600: { items: 6, slideBy: 6 } } }),
        $(".thumbs-video").on("click", ".slide-item", function (t) {
            t.preventDefault();
            var e = $(this).index();
            $(".video-center").data("btq.slidebox").to(e, 600, !0);
        }),
        LoadAPI(),
        $(".video-center").on("click", ".slide-video-play-icon", function () {
            onYouTubePlayerAPIReady();
        });
}
function LoadAPI() {
    var t = document.createElement("script");
    t.src = "https://www.youtube.com/player_api";
    var e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(t, e);
}
function onYouTubePlayerAPIReady() {
    $(".slide-video-frame iframe").length &&
        (player = new YT.Player("VYT", {
            events: {
                onReady: function (t) {
                    $(".play-button").on("click", function (t) {
                        t.preventDefault(), player.playVideo();
                    }),
                        $(".pause-button").on("click", function (t) {
                            t.preventDefault(), player.pauseVideo();
                        });
                },
            },
        }));
}
function AniText() {
    $("#home-page, #about-page").length && ($(".title-rotate > h1 > span > span, .title-rotate > h2 > span > span").removeClass("move"), clearTimeout(timex)),
        $(".active .title-rotate h1, .active .title-rotate h2, .show-text .title-rotate h1, .show-text .title-rotate h2")
            .children()
            .children()
            .each(function (t) {
                var e = $(this);
                timex = setTimeout(function () {
                    $(e).addClass("move");
                }, 80 * (t + 1));
            });
}
function NewsLoad(t, e) {
    0 < $(e).children().length && $(e).children().remove(),
        $(".link-page.current").addClass("display-none"),
        $(".link-page.current").nextAll(".link-page:nth-child(n+6)").addClass("display-none"),
        $(".link-page.current").prevAll(".link-page:nth-child(n+6)").addClass("display-none"),
        $(".link-page:not(.display-none)").length <= 4
            ? ($(".link-page.current").nextAll(".link-page:nth-child(n+6)").removeClass("display-none"),
              $(".link-page.current").nextAll(".link-page:nth-child(n+5)").addClass("display-none"),
              $(".link-page:first-child").hasClass("current") ? $(".link-page.display-none").last().removeClass("display-none") : $(".link-page.display-none").first().removeClass("display-none"))
            : ($(".link-page.current").nextAll(".link-page:nth-child(n+4)").addClass("display-none"),
              $(".link-page.current").prevAll(".link-page:nth-child(n+4)").addClass("display-none"),
              $(".link-page.current").next().removeClass("display-none")),
        $.ajax({
            url: t,
            cache: !1,
            success: function (t) {
                $(e).append(t),
                    $(".load-text a, .load-text p a").click(function (t) {
                        t.preventDefault();
                        var e = $(this).attr("href");
                        return window.open(e, "_blank"), !1;
                    }),
                    $(".load-text img").addClass("zoom-pic"),
                    ZoomPic(),
                    PrintShare(),
                    $(e)
                        .stop()
                        .animate({ opacity: 1 }, 300, "linear", function () {
                            $(".news-link").removeClass("no-link"),
                                $(e).removeClass("normal-height"),
                                $(".loadx").fadeOut(400, "linear", function () {
                                    $(".loadx").remove();
                                }),
                                onScroll(),
                                (Details = 1),
                                $(".load-content").addClass("show"),
                                $('.group-central[data-post="news-related"]').addClass("show");
                        });
            },
        });
}
function NewsList(t) {
    0 < $(".load-news-list").children().length && $(".load-news-list").children().remove(),
        $.ajax({
            url: t,
            cache: !1,
            success: function (t) {
                $(".load-news-list").append(t),
                    $(".title-rotate > h2").lettering("words").children("span").lettering().children("span").lettering(),
                    $(".news-pic").length &&
                        $(".news-pic").each(function (t, e) {
                            var i = $(e).find("img").attr("src");
                            if (i) {
                                var n = i.replace(/(^url\()|(\)$|[\"\'])/g, "");
                                $(e).css({ "background-image": "url(" + n + ")" });
                            }
                        }),
                    $(".load-news-list")
                        .stop()
                        .animate({ opacity: 1 }, 300, "linear", function () {
                            $(".load-news-list").addClass("show set-post active"), (Details = 1), onScroll(), AniText();
                        }),
                    $(".loadx").fadeOut(300, "linear", function () {
                        $(".loadx").remove();
                    });
                var e = $(".slide-pagi a.current").parent().parent().index() - 1;
                setTimeout(function () {
                    $(".slide-pagi").data("btq.slidebox").to(e, 300, !0);
                }, 500),
                    LinkPage();
            },
        });
}
function ProgressList(t) {
    0 < $(".content-progress").children().length && $(".content-progress").children().remove(),
        $.ajax({
            url: t,
            cache: !1,
            success: function (t) {
                if (
                    ($(".content-progress").append(t),
                    $(".pic-progress").each(function (t, e) {
                        var i = $(e).find("img").attr("src");
                        if (i) {
                            var n = i.replace(/(^url\()|(\)$|[\"\'])/g, "");
                            $(e).css({ "background-image": "url(" + n + ")" });
                        }
                    }),
                    $(".content-progress")
                        .stop()
                        .animate({ opacity: 1 }, 300, "linear", function () {
                            $(".content-progress").addClass("show"), onScroll();
                        }),
                    $(".loadx").fadeOut(300, "linear", function () {
                        $(".loadx").remove();
                    }),
                    $(".group-central.current").length)
                ) {
                    var e = $(".group-central.current").offset().top;
                    $("html, body")
                        .stop()
                        .animate({ scrollTop: e - 80 }, 1e3, "linear", function () {}),
                        $(".group-central.current").removeClass("current");
                }
            },
        });
}
function VideoLoad(t, i, e) {
    $.ajax({
        url: t,
        cache: !1,
        success: function (t) {
            if (($(".allvideo").append(t), void 0 !== i)) {
                function e(t) {
                    (1 == TouchLenght || isTouchDevice) && (t.target.mute(), t.target.playVideo());
                }
                $(".video-wrap").append(i);
            }
            $(".loadx").fadeOut(400, "linear", function () {
                new YT.Player("VYT", { events: { onReady: e } }), $(".loadx").remove();
            }),
                $(".close-video").on("click", function () {
                    $(".allvideo").fadeOut(500, "linear", function () {
                        if (($(".overlay-dark").removeClass("show"), $(".allvideo .video-list").remove(), $("html, body").removeClass("no-scroll"), $(".to-scrollV").length)) {
                            var t = $(".to-scrollV").offset().top;
                            $(window).width() < 1100 && $("html, body").scrollTop(t), $(".to-scrollV").removeClass("to-scrollV");
                        }
                        ScrollBody();
                    });
                });
        },
    });
}
function popupLoad(t, e, i) {
    $.ajax({
        url: t,
        cache: !1,
        success: function (t) {
            $(".details-content").remove(),
                $("body").prepend(t),
                $(".slide-mask .slide-item").hasClass("ani-text") && $(".stop").trigger("click"),
                $(".testimonial").length &&
                    (SlidePicture(),
                    $(".pic-thumb-bg").length &&
                        $(".pic-thumb-bg").each(function (t, e) {
                            var i = $(e).find("img").attr("src");
                            if (i) {
                                var n = i.replace(/(^url\()|(\)$|[\"\'])/g, "");
                                $(e).css({ "background-image": "url(" + n + ")" });
                            }
                        }),
                    1100 < $(window).width() &&
                        $(".details-content .bg-menu").length &&
                        $(".details-content .bg-menu").each(function (t, e) {
                            LoadCanvas($(e).attr("id"));
                        })),
                $(".partner-slide").length &&
                    (SlidePicture(),
                    setTimeout(function () {
                        $(".partner-slide").data("btq.slidebox").to(e, 300, !0);
                    }, 1e3)),
                $(".details-content")
                    .stop()
                    .animate({ opacity: 1 }, 600, "linear", function () {
                        $(".details-center").addClass("fadein"),
                            $(".download-but").length &&
                                $(".download-but").each(function (t, e) {
                                    "" == $(e).find("a").attr("href") && $(e).addClass("display-none");
                                }),
                            $(".loadx").fadeOut(300, "linear", function () {
                                $(".details-center").innerHeight() > $(window).height() && $(".details-content").addClass("no-after"), $(".details-content").scrollTop(0), $(".details-content").impulse(), $(".loadx").remove();
                            }),
                            $("#investor-relation-page").length && Option(),
                            $("#home-page, #about-page").length ? $(".details-center h2.ani-item").addClass("on-show") : onScroll();
                    }),
                $(".close-popup, .details-content > span,.details-content .bg-menu").on("click", function () {
                    if ($("#about-page").length) {
                        var t = $(".box-nav li.current span").attr("data-href"),
                            e = $(".box-nav li.current span").attr("data-title"),
                            i = $(".box-nav li.current span").attr("data-keyword");
                        changeUrl(t, e, (n = $(".box-nav li.current span").attr("data-description")), i, $(".box-nav li.current span").attr("data-name"), e, n);
                    } else if ($("#career-page").length) {
                        (t = $(".nav li.current a").attr("href")), (e = $(".nav li.current a").attr("data-title")), (i = $(".nav li.current a").attr("data-keyword"));
                        changeUrl(t, e, (n = $(".nav li.current a").attr("data-description")), i, $(".nav li.current a").attr("data-name"), e, n);
                    } else if ($("#investor-relation-page").length) {
                        var n;
                        (t = $(".nav li.current a").attr("href")), (e = $(".nav li.current a").attr("data-title")), (i = $(".nav li.current a").attr("data-keyword"));
                        changeUrl(t, e, (n = $(".nav li.current a").attr("data-description")), i, $(".nav li.current a").attr("data-name"), e, n);
                    }
                    return (
                        $(".overlay-dark").on("transitionend", function () {
                            $(".overlay-dark").removeClass("gray");
                        }),
                        $(".details-content")
                            .stop()
                            .animate({ opacity: 0 }, 600, "linear", function () {
                                if (
                                    ($(".details-content").remove(),
                                    $(".overlay-dark").removeClass("show index-low"),
                                    $("html, body").removeClass("no-scroll"),
                                    ScrollBody(),
                                    1100 < $(window).width() && $(".slide-mask .slide-item").hasClass("ani-text") && $(".play").trigger("click"),
                                    window.location.hash.length && history.pushState("", document.title, location.href.replace(/#.*/, "")),
                                    $(".to-scrollZ").length)
                                ) {
                                    var t = $(".to-scrollZ").offset().top - ($(".slide-mask").innerHeight() + $(".header").height());
                                    $("html, body").scrollTop(t), $(".to-scrollZ").removeClass("to-scrollZ");
                                }
                            }),
                        !1
                    );
                });
        },
    });
}
function AlbumLoad(t, e) {
    $.ajax({
        url: t,
        cache: !1,
        success: function (t) {
            function e() {
                clearTimeout(timex),
                    $(".pic-name").removeClass("move"),
                    $(".pic-name h3").children().children().removeClass("move"),
                    $(".selected").find(".pic-name").addClass("move"),
                    $(".move h3")
                        .children()
                        .children()
                        .each(function (t) {
                            var e = $(this);
                            setTimeout(function () {
                                $(e).addClass("move");
                            }, 100 * (t + 1));
                        });
            }
            (0 != TouchLenght && isTouchDevice) || ($(".slide-slidebox").length && $(".slide-slidebox").trigger("stop.btq.autoplay")),
                $(".slide-video-playing").length && $(".pause-button").trigger("click"),
                $(".all-album").append(t),
                1 < $(".all-album .album-load").length && $(".all-album .album-load").last().remove(),
                $(".pic-name > h3").lettering("words").children("span").lettering().children("span").lettering(),
                $(".album-center")
                    .on("initialized.btq.slidebox", function () {
                        $(".container-zoom").each(function (t, e) {
                            new PinchZoom.default(e, { draggableUnzoomed: !1 });
                        }),
                            $(".album-center").find(".slide-item.active").addClass("selected"),
                            e();
                    })
                    .BTQSlider({ items: 1, margin: 0, smartSpeed: 600, loop: !1, dots: !0, nav: !0, responsiveRefreshRate: 300 })
                    .on("changed.btq.slidebox", function (t) {
                        $(".thumbs").length &&
                            (function (t) {
                                var e = t.item.Count - 1,
                                    i = t.item.index;
                                i < 0 && (i = e);
                                e < i && (i = 0);
                                $(".thumbs").find(".slide-item").removeClass("current").eq(i).addClass("current");
                                var n = $(".thumbs").find(".slide-item.active").length - 1,
                                    s = $(".thumbs").find(".slide-item.active").first().index(),
                                    a = $(".thumbs").find(".slide-item.active").last().index();
                                a - 1 <= i && $(".thumbs").data("btq.slidebox").to(i, 300, !0);
                                i <= s &&
                                    $(".thumbs")
                                        .data("btq.slidebox")
                                        .to(i - n, 300, !0);
                            })(t);
                    })
                    .on("translate.btq.slidebox", function (t) {
                        $(".album-center").find(".slide-item").removeClass("selected");
                    })
                    .on("translated.btq.slidebox", function (t) {
                        $(".album-center").find(".slide-item.active").addClass("selected"), e();
                    }),
                $(".thumbs")
                    .on("initialized.btq.slidebox", function () {
                        var t = $(".thumbs").find(".slide-item").length;
                        600 <= $(window).width()
                            ? t <= 6
                                ? $(".thumbs").addClass("center-slidebox")
                                : $(".thumbs").removeClass("center-slidebox")
                            : t <= 3
                            ? $(".thumbs").addClass("center-slidebox")
                            : $(".thumbs").removeClass("center-slidebox"),
                            $(".thumbs").find(".slide-item").eq(0).addClass("current");
                    })
                    .BTQSlider({ margin: 5, smartSpeed: 300, dots: !1, nav: !1, responsiveRefreshRate: 300, responsive: { 0: { items: 3, slideBy: 3 }, 600: { items: 6, slideBy: 6 } } }),
                $(".thumbs").on("click", ".slide-item", function (t) {
                    t.preventDefault();
                    var e = $(this).index();
                    $(".album-center").data("btq.slidebox").to(e, 1e3, !0);
                }),
                $(".all-album").on("mousewheel", ".album-center", function (t) {
                    if (0 < t.deltaY) {
                        if (!doWheel) return;
                        (doWheel = !1), $(".album-center").trigger("prev.btq.slidebox"), setTimeout(turnWheelTouch, 500);
                    } else {
                        if (!doWheel) return;
                        (doWheel = !1), $(".album-center").trigger("next.btq.slidebox"), setTimeout(turnWheelTouch, 500);
                    }
                    t.preventDefault();
                }),
                $(".album-load").animate({ opacity: 1 }, 100, "linear", function () {
                    $(".loadx").fadeOut(400, "linear", function () {
                        $(".loadx").remove();
                    });
                }),
                $(".close-album").on("click", function () {
                    return (
                        $(".all-album").fadeOut(500, "linear", function () {
                            $(".overlay-dark").removeClass("show"), $(".album-load").remove();
                        }),
                        (0 != TouchLenght && isTouchDevice) || ($(".slide-slidebox").length && $(".slide-slidebox").trigger("play.btq.autoplay")),
                        $("html, body").removeClass("no-scroll"),
                        ScrollBody(),
                        !1
                    );
                });
        },
    });
}
function FocusText() {
    $(".pass-mask").on("click", function () {
        $(this).addClass("hide"), $(this).next().focus();
    }),
        $("input, textarea")
            .focus(function (t) {
                $(this).attr("data-holder") == $(this).val() && $(this).val("");
            })
            .focusout(function (t) {
                "" == $(this).val() && ($(this).prev().removeClass("hide"), $(this).val($(this).attr("data-holder")));
            });
}
function LinkPage() {
    $(".link-home,.link-load, .go-inner,  .view-all, .box-pic a, .release li a, .go-back").on("click", function (t) {
        t.preventDefault(), $(window).width() <= 1100 && $(".overlay-menu").trigger("click");
        var e = $(this).attr("href");
        return (
            $(".go-top, .footer, .wheel, .header").removeClass("show"),
            $(".mask").removeClass("finish").removeClass("show"),
            $(".container").animate({ opacity: 1 }, 600, "linear", function () {
                window.location = e;
            }),
            !1
        );
    });
}
function subNav() {
    if (
        ($(".sub-nav li a:not(.link-popup):not(.link-blank)").on("click", function (t) {
            t.preventDefault();
            var e = $(this).attr("data-name");
            if (doWheel) {
                if (
                    ((doWheel = !1),
                    $(".sub-nav li").removeClass("current"),
                    $(".sub-nav li a[data-name='" + e + "']")
                        .parent()
                        .addClass("current"),
                    1100 < $(window).width())
                )
                    var i = $(".set-post[data-post='" + e + "']").offset().top - 50;
                else i = $(".set-post[data-post='" + e + "']").offset().top - ($(".header").height() + 30);
                return (
                    $("html, body")
                        .stop()
                        .animate({ scrollTop: i }, 1500, "linear", function () {
                            setTimeout(turnWheelTouch, 100);
                        }),
                    !1
                );
            }
        }),
        $(".sub-nav li.subcurrent").length)
    )
        setTimeout(function () {
            $(".sub-nav li.subcurrent a").trigger("click");
        }, 500);
    else {
        var t = $(".set-post").first().attr("data-post");
        $(".sub-nav li a[data-name='" + t + "']")
            .parent()
            .addClass("current");
    }
}
function selectHeader() {
    $(".select-header").bind("click", function () {
        $(".select-header").hasClass("onclick")
            ? ($(".select-header").removeClass("onclick"), $(this).next(".select-box").fadeOut(100, "linear"))
            : ($(this).addClass("onclick"),
              $(this).next(".select-box").fadeIn(100, "linear"),
              $(this)
                  .closest(".select-list")
                  .on("mouseleave", function () {
                      $(this).find(".select-box").fadeOut(100, "linear"), $(".select-header").removeClass("onclick");
                  }));
    }),
        $(".select-box li div, .select-box li a").on("click", function (t) {
            t.preventDefault(), $(".select-header").removeClass("onclick");
            var e = $(this).parent().parent().parent(),
                i = e.attr("data-report");
            e.find("li").removeClass("selected");
            var n = $(this).parent().parent().parent().parent().parent().find(".relation-box");
            $(this).parent().parent().parent().parent().find(".select-header h3").text($(this).text()),
                $(n).removeClass("on-show"),
                $(this).parent().addClass("selected"),
                $(this).closest(".select-box").fadeOut(100, "linear"),
                $(this).parent().parent().parent().parent().removeClass("onclick");
            var s = $(this).attr("data-target");
            return (
                $(".relation-box[data-report='" + i + "'] .list-box").addClass("hide"),
                "all" == s
                    ? $(".relation-box[data-report='" + i + "'] .list-box").removeClass("hide")
                    : $(".relation-box[data-report='" + i + "']")
                          .find('.list-box[data-target= "' + s + '"]')
                          .removeClass("hide"),
                $(n).addClass("on-show"),
                0 == Details
                    ? setTimeout(function () {
                          $(".relation-box[data-report='" + i + "']").removeClass("hide"), (Details = 1);
                      }, 100)
                    : $(".relation-box[data-report='" + i + "']").addClass("on-show"),
                !1
            );
        }),
        $(".select-list:not(.annual)").each(function (t, e) {
            $(e).find(".select-box li").length <= 2
                ? ($(e).find(".select-box li:last-child a, .select-box li:last-child div").trigger("click"), $(e).find(".select-box li:first-child").addClass("display-none"))
                : $(e).find(".select-box li:nth-child(2) a, .select-box li:nth-child(2) div").trigger("click"),
                $(e).parent().find(".relation-box").removeClass("on-show");
        }),
        $(".select-list.annual").find(".select-box li:first-child a, .select-box li:first-child div").trigger("click"),
        $(".select-list.annual").parent().find(".relation-box").removeClass("on-show");
}
function onChange(t) {
    $(".file-name").html(t.files[0].name);
}
function PrintShare() {
    var t = $(".save-but");
    $(t).on("click", function () {
        return (
            window.sidebar && window.sidebar.addPanel
                ? window.sidebar.addPanel(document.title, window.location.href, "")
                : window.external && "AddFavorite" in window.external
                ? window.external.AddFavorite(location.href, document.title)
                : alert("Nhấn " + (-1 != navigator.userAgent.toLowerCase().indexOf("mac") ? "Command/Cmd" : "CTRL") + " + D để tạo bookmark cho trang này."),
            !1
        );
    }),
        $(".share-but").on("mouseenter", function () {
            $(this).addClass("active");
        }),
        $(".save-but").on("mouseenter", function () {
            $(".share-but").removeClass("active");
        });
}
function ContentLoad() {
    LinkPage(), FocusText(), NavClick(), Search(), Option(), ZoomPic(), PrintShare();
    $(".container").attr("id");
    if (
        ($("#news-details-page").length
            ? ($(".nav li.current").addClass("active").removeClass("current"), $(".nav-second li.current").addClass("active").removeClass("current"), $(".title-group .desktop p.current").removeClass("current"))
            : $("#project-details-page").length
            ? ($(".nav li.current").addClass("active").removeClass("current"), $(".nav-second li.current").addClass("active").removeClass("current"), $(".title-group .desktop p.current").removeClass("current"))
            : $("#chart-page").length && $(".nav li.current").removeClass("current"),
        $("#home-page").length
            ? $(".link-home").addClass("current")
            : ($(".logo").css({ cursor: "pointer" }),
              $(".logo").on("click", function () {
                  $(".link-home").trigger("click");
              })),
        $(".mask").addClass("finish"),
        $(".box-bg, .right-header,.nav-second").addClass("show"),
        $(".youtube-video").length &&
            setTimeout(function () {
                $("#playpause").trigger("click");
            }, 2e3),
        $(".video-center").length && videoSlide(),
        $(".player").length)
    ) {
        var t = document.createElement("script");
        t.src = "https://www.youtube.com/player_api";
        var e = document.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(t, e);
    }
    if (
        (subNav(),
        $(".link-popup").length &&
            ($(".link-popup").on("click", function (t) {
                t.preventDefault();
                var e = $(this).attr("data-name");
                if ($("#home-page").length) var i = $(this).attr("data-href");
                else i = $(this).attr("href");
                var n = $(this).attr("data-number");
                if ($("#career-page").length) var s = $(this).text();
                if (void 0 !== e) {
                    var a = $(this).attr("href"),
                        o = $(this).attr("data-title"),
                        r = $(this).attr("data-keyword"),
                        l = $(this).attr("data-description");
                    changeUrl(a, o, l, r, $(this).attr("data-name"), o, l);
                }
                return (
                    0 == Details && ($(this).parent().addClass("to-scrollZ"), (Details = 1)),
                    $("html, body").addClass("no-scroll"),
                    ScrollBody(),
                    $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'),
                    popupLoad(i, n, s),
                    $(".overlay-dark").addClass("show index-low"),
                    !1
                );
            }),
            $(".link-popup.current").length && $(".link-popup.current").trigger("click"),
            1 < window.location.hash.length &&
                setTimeout(function () {
                    LocationHash();
                }, 1e3)),
        $(".title-footer").bind("click", function (t) {
            if ((t.preventDefault(), $(window).width() <= 900))
                if ($(".title-footer").hasClass("active")) $(".title-footer").removeClass("active"), $(".fix-height").height(0);
                else {
                    $(".title-footer").addClass("active");
                    var e = $(".fix-height").find(".bottom-group").innerHeight();
                    $(".fix-height").height(e);
                    var i = $(".fix-height").offset().top;
                    $("html, body")
                        .stop()
                        .animate({ scrollTop: i - 140 }, "slow");
                }
            return !1;
        }),
        $(".open-button").bind("click", function (t) {
            if ((t.preventDefault(), $(".open-button").hasClass("active"))) $(".open-button").removeClass("active"), $(".show-height").removeClass("show"), $(".show-height").height(50);
            else {
                var e = $(".title-list").innerHeight() * $(".title-list").length + $(".sub-project li").innerHeight() * $(".sub-project li").length - 100;
                $(".show-height").height(e), $(".open-button").addClass("active"), $(".show-height").addClass("show");
            }
            return !1;
        }),
        $(".content-main, .banner-inner").on("click", function () {
            $(".open-button").hasClass("active") && $(".open-button").trigger("click");
        }),
        $("#home-page").length && ($(".wheel").addClass("show"), $(".home-popup").length))
    ) {
        setTimeout(function () {
            var t = $(".home-popup").attr("data-href");
            return $("html, body").addClass("no-scroll"), $(".overlay-dark").addClass("show gray"), ScrollBody(), popupLoad(t), !1;
        }, 1e3);
    }
    if ($("#about-page").length)
        if (($(".wheel").addClass("grey show"), $(window).width() <= 1100)) {
            if ($(".group-central.current").length) {
                var i = $(".group-central.current").offset().top - 80;
                $("html, body")
                    .stop()
                    .animate({ scrollTop: i }, 1e3, "linear", function () {});
            }
        } else
            $(".box-nav li.current").length &&
                setTimeout(function () {
                    $(".box-nav li.current span").trigger("click");
                }, 500);
    if ($("#library-page").length && ($(".wheel").addClass("grey show"), $(".set-post:first").addClass("active"), $(".group-central.current").length)) {
        i = $(".group-central.current").offset().top - 80;
        $("html, body")
            .stop()
            .animate({ scrollTop: i }, 1e3, "linear", function () {});
    }
    if (
        ($("#thank-you-page").length && ($(".wheel").addClass("grey show"), $(".set-post:first").addClass("active")),
        $("#customer-service-page").length &&
            ($(".wheel").addClass("grey show"),
            $(".set-post:first").addClass("active"),
            $(".select-header").bind("click", function () {
                $(".select-header").hasClass("onclick")
                    ? ($(".select-header").removeClass("onclick"), $(this).next(".select-box").fadeOut(200, "linear"))
                    : ($(this).addClass("onclick"),
                      $(this).next(".select-box").fadeIn(200, "linear"),
                      $(this)
                          .closest(".select-list")
                          .on("mouseleave", function () {
                              $(this).find(".select-box").fadeOut(200, "linear"), $(".select-header").removeClass("onclick");
                          }));
            }),
            $(".select-box:not(.float) li a, .select-box:not(.float) li div").on("click", function (t) {
                return (
                    t.preventDefault(),
                    $(".select-header").removeClass("onclick"),
                    $(this).parent().parent().parent().find("li").removeClass("selected"),
                    $(this).parent().parent().parent().parent().find(".select-header h3").text($(this).text()),
                    $(this).parent().addClass("selected"),
                    $(this).closest(".select-box").fadeOut(100, "linear"),
                    $(this).parent().parent().parent().parent().removeClass("onclick"),
                    $("#subject").val($(this).attr("data-id")),
                    !1
                );
            }),
            $(".float li a, .float li div").on("click", function (t) {
                t.preventDefault(),
                    $(".select-header").removeClass("onclick"),
                    $(this).parent().parent().parent().find("li").removeClass("selected"),
                    $(this).parent().parent().parent().parent().parent().find(".select-header h3").text($(this).text()),
                    $(this).parent().addClass("selected"),
                    $(this).closest(".select-box").fadeOut(100, "linear"),
                    $(this).parent().parent().parent().parent().parent().removeClass("onclick");
                var e = $(this).attr("href");
                $(this).attr("data-target");
                if (1 == isFirst) {
                    var i = $(this).attr("href"),
                        n = $(this).attr("data-title"),
                        s = $(this).attr("data-keyword"),
                        a = $(this).attr("data-description");
                    changeUrl(i, n, a, s, $(this).attr("data-target"), n, a);
                }
                return (
                    $(".content-progress").removeClass("show"),
                    $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'),
                    $(".content-progress")
                        .stop()
                        .animate({ opacity: 0 }, 500, "linear", function () {
                            ProgressList(e);
                        }),
                    !1
                );
            }),
            $(".float li.current").length ? $(".float li.current a").trigger("click") : $(".float li:first").find("a").trigger("click"),
            (isFirst = 1),
            !$(".float li").length && $(".group-central.current").length))
    ) {
        i = $(".group-central.current").offset().top;
        $("html, body")
            .stop()
            .animate({ scrollTop: i - 80 }, 1e3, "linear", function () {});
    }
    if (
        ($("#project-page").length,
        $("#project-details-page").length && ($(".wheel").addClass("show"), $(".footer").addClass("large")),
        $("#career-page").length && ($(".wheel").addClass("grey show"), $(".set-post:first").addClass("active"), $(".group-central.current").length))
    ) {
        i = $(".group-central.current").offset().top;
        $("html, body")
            .stop()
            .animate({ scrollTop: i - 80 }, 1e3, "linear", function () {});
    }
    $("#news-page").length &&
        ($(".wheel").addClass("grey show"),
        $(".set-post:first").addClass("active"),
        $(".slide-pagi .slide-item").length <= 1 && $(".slide-pagi").css({ display: "none" }),
        $(".slide-pagi a").on("click", function (t) {
            t.preventDefault(),
                $(".load-news-list").removeClass("show set-post active"),
                $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'),
                $(".slide-pagi a").removeClass("current"),
                $(this).addClass("current");
            $(this).attr("data-number");
            var e = $(this).attr("href"),
                i = $(this).attr("data-title"),
                n = $(this).attr("data-keyword"),
                s = $(this).attr("data-description");
            changeUrl(e, i, s, n, $(this).attr("data-number"), i, s);
            var a = $(this).attr("href");
            if (1 == Details) {
                var o = $(".load-news-list").offset().top - 70;
                $("html, body")
                    .stop()
                    .animate({ scrollTop: o }, 1e3, "linear", function () {
                        $(".load-news-list")
                            .stop()
                            .animate({ opacity: 0 }, 500, "linear", function () {
                                NewsList(a);
                            });
                    });
            } else
                $(".load-news-list")
                    .stop()
                    .animate({ opacity: 0 }, 500, "linear", function () {
                        NewsList(a);
                    });
            return !1;
        }),
        $(".slide-pagi li.current").length ? $(".slide-pagi li.current").find("a").trigger("click") : $(".slide-pagi .slide-item:first").find("a").trigger("click")),
        $("#news-details-page").length &&
            ($(".set-post:first").addClass("active"),
            $(".link-page").on("click", function (t) {
                t.preventDefault(),
                    $(".news-link").addClass("no-link"),
                    $(".load-content").removeClass("show"),
                    $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'),
                    $(".link-page").removeClass("current"),
                    $(this).addClass("current"),
                    detectBut();
                var e = $(this).find("a").attr("href"),
                    i = ($(this).find("a").attr("data-details"), $(this).find("a").attr("href")),
                    n = $(this).find("a").attr("data-title"),
                    s = $(this).find("a").attr("data-keyword"),
                    a = $(this).find("a").attr("data-description");
                changeUrl(i, n, a, s, $(this).find("a").attr("data-details"), n, a);
                var o = $(".load-data");
                if (($(o).addClass("normal-height"), 1 == Details)) {
                    var r = $(".load-content").offset().top - 70;
                    $("html, body")
                        .stop()
                        .animate({ scrollTop: r }, 1e3, "linear", function () {
                            $(o)
                                .stop()
                                .animate({ opacity: 0 }, 500, "linear", function () {
                                    NewsLoad(e, o);
                                });
                        });
                } else
                    $(o)
                        .stop()
                        .animate({ opacity: 0 }, 500, "linear", function () {
                            NewsLoad(e, o);
                        });
                return !1;
            }),
            $(".link-page.current").length ? $(".link-page.current").trigger("click") : $(".news-link").find(".link-page").first().trigger("click")),
        $("#investor-relation-page").length &&
            ($(".set-post:first").addClass("active"),
            $(".wheel").addClass("grey show"),
            $(".newsletter h3").bind("click", function (t) {
                t.preventDefault(), $(".newsletter").hasClass("show") ? $(".newsletter").removeClass("show") : $(".newsletter").addClass("show");
            })),
        $("#chart-page").length && ($(".set-post:first").addClass("active"), $(".wheel").addClass("grey show")),
        $("#contact-page").length && ($(".wheel").addClass("grey show"), $(".set-post:first").addClass("active"), $(".footer").addClass("contact")),
        $("#home-page, #about-page").length || onScroll(),
        AniText();
}
function ZoomPic() {
    $("img").on("click", function () {
        if ($(this).hasClass("allowlink")) return !0;
        if ($(window).width() <= 1100 && $(this).hasClass("zoom-pic")) {
            $("html, body").addClass("no-scroll"),
                ScrollBody(),
                $(this).parent().addClass("to-scrollZ"),
                $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'),
                $(".all-pics").addClass("show"),
                $(".all-pics").append('<div class="full"  style="display:block"></div>'),
                $(".details-content").length ? $(".overlay-dark").addClass("level-index-in") : $(".overlay-dark").addClass("show");
            var t = $(this).attr("src");
            $(".all-pics")
                .find(".full")
                .append('<img src ="' + t + '" alt="pic">'),
                $(".all-pics").append('<div class="close-pics-small"></div>'),
                $(".all-pics img").on("load", function () {
                    $(".all-pics").addClass("show"),
                        0 != TouchLenght && isTouchDevice
                            ? ($(".full img").addClass("pinch-zoom"),
                              $(".pinch-zoom").each(function (t, e) {
                                  new PinchZoom.default(e, { draggableUnzoomed: !1 });
                              }))
                            : ($(".full").addClass("dragscroll"), $(".dragscroll").draptouch()),
                        1 < $(".full img").length && $(".full img").last().remove(),
                        $(".loadx").fadeOut(400, "linear", function () {
                            (0 != TouchLenght && isTouchDevice) || detectMargin(), $(".full img").addClass("fadein"), $(".loadx").remove();
                        });
                }),
                $(".close-pics-small").on("click", function () {
                    $(".loadx").remove(),
                        $(".full").fadeOut(300, "linear", function () {
                            if (($(".all-pics .full,  .all-pics .pinch-zoom-container").remove(), $(".close-pics-small").remove(), $(".all-pics").removeClass("show"), $(".details-content").length))
                                $(".overlay-dark").removeClass("level-index-in");
                            else if (($("html, body").removeClass("no-scroll"), ScrollBody(), $(".overlay-dark").removeClass("show"), $(".to-scrollZ").length)) {
                                var t = $(".to-scrollZ").offset().top;
                                $(window).width() < 1100 && $("html, body").scrollTop(t - 60), $(".to-scrollZ").removeClass("to-scrollZ");
                            }
                        });
                });
        }
        return !1;
    });
}
function Option() {
    $("a.link-pdf,  .download-pdf").on("click", function (t) {
        t.preventDefault();
        var e = $(this).attr("href");
        return window.open(e, "_blank"), !1;
    }),
        $(".library-thumb").on("click", function (t) {
            return t.preventDefault(), $(this).find("a").trigger("click"), !1;
        }),
        $(".view-album").on("click", function (t) {
            t.preventDefault();
            var e = $(this).attr("data-href");
            return (
                $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'),
                $("html, body").addClass("no-scroll"),
                ScrollBody(),
                $(".overlay-dark").addClass("show"),
                $(".all-album").fadeIn(300, "linear", function () {
                    AlbumLoad(e, 0);
                }),
                !1
            );
        }),
        $(".player").on("click", function (t) {
            t.preventDefault(), $(this).parent().addClass("to-scrollV");
            var e,
                i = $(this).attr("data-href"),
                n = $(this)
                    .attr("data-embed")
                    .match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/),
                s =
                    '<iframe id="VYT" src="https://www.youtube.com/embed/' +
                    (e = n && 11 == n[2].length ? n[2] : "no video found") +
                    "?autoplay=1&enablejsapi=1&controls=1&loop=0&playsinline=1&color=white&rel=0&cc_load_policy=1&playlist=" +
                    e +
                    '" frameborder="0"  allow="autoplay" allowfullscreen></iframe>';
            return (
                $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'),
                $("html, body").addClass("no-scroll"),
                ScrollBody(),
                $(".overlay-dark").addClass("show"),
                $(".allvideo").fadeIn(300, "linear", function () {
                    VideoLoad(i, s, e);
                }),
                !1
            );
        }),
        $(".zoom:not(.link-popup)").on("click", function () {
            $("html, body").addClass("no-scroll"),
                ScrollBody(),
                $(".container").addClass("blur-more"),
                $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'),
                $(".all-pics").addClass("show"),
                $(".all-pics").append('<div class="full"  style="display:block"></div>'),
                $("#investor-relation-page").length ? $(".overlay-dark").addClass("overlay-dark-2 show") : $(".overlay-dark").addClass("show");
            var t = $(this).parent().find("img").attr("src") || $(this).parent().find("img").attr("data-src") || $(this).attr("data-src"),
                e = $(this).parent().find("h3").text();
            return (
                1 <= e.length && $(".all-pics").prepend('<div class="text-length"><h3></h3></div>'),
                $(".all-pics")
                    .find(".full")
                    .append('<img src ="' + t + '" alt="pic" />'),
                $(".all-pics").find(".full").append("<span></span>"),
                $("body").append(
                    '<div class="close-pics"><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M50,54 27.2,76.8 23.2,72.8 46,50 23.2,27.2 27.2,23.2 50,46 72.8,23.2 76.8,27.2 54,50 76.8,72.8 72.8,76.8z"></path></svg></div>'
                ),
                $(".all-pics").append('<div class="close-pics-small"></div>'),
                $(".all-pics img").on("load", function () {
                    $(".text-length h3").text(e),
                        $(".all-pics").addClass("show"),
                        0 != TouchLenght && isTouchDevice
                            ? ($(".full img").addClass("pinch-zoom"),
                              $(".pinch-zoom").each(function (t, e) {
                                  new PinchZoom.default(e, { draggableUnzoomed: !1 });
                              }))
                            : ($(".full").addClass("dragscroll"), $(".dragscroll").draptouch()),
                        1 < $(".full img").length && $(".full img").last().remove(),
                        $(".loadx").fadeOut(400, "linear", function () {
                            (0 != TouchLenght && isTouchDevice) || detectMargin(), $(".full img, .text-length").addClass("fadein"), $(".loadx").remove();
                        });
                }),
                1100 < $(window).width() &&
                    $(".full span").on("click", function () {
                        $(".close-pics").trigger("click");
                    }),
                $(".close-pics, .close-pics-small").on("click", function () {
                    $(".full").fadeOut(300, "linear", function () {
                        $("#investor-relation-page").length ? $(".overlay-dark").removeClass("overlay-dark-2") : $(".overlay-dark").removeClass("show"),
                            $(".all-pics .full, .all-pics .text-length, .all-pics .pinch-zoom-container").remove(),
                            $(".close-pics, .close-pics-small").remove(),
                            $(".all-pics").removeClass("show"),
                            $(".container").removeClass("blur-more"),
                            $("html, body").removeClass("no-scroll"),
                            ScrollBody();
                    });
                }),
                !1
            );
        });
}
function turnWheelTouch() {
    doTouch = doWheel = !0;
}
function detectBut() {
    if ($(window).width() <= 1100 && $(".sub-nav li.current").length) {
        var t = $(".sub-nav ul").offset().left,
            e = $(".sub-nav li.current").offset().left,
            i = $(window).width() / 2 - $(".sub-nav li.current").width() / 2;
        $(".sub-nav")
            .stop()
            .animate({ scrollLeft: e - i - t }, "slow");
    }
    if ($(window).width() <= 1100 && $(".link-page").hasClass("current")) {
        var n = $(".link-page.current").parent().parent(),
            s = ((t = $(".news-link").offset().left), (e = $(".link-page.current").offset().left), $(".scroll-slide").width() / 2 - $(".link-page.current").width() / 2);
        $(n)
            .stop()
            .animate({ scrollLeft: e - s - t }, "slow");
    }
}
function detectMargin() {
    var t = $(".full img").width(),
        e = $(".full  img").height(),
        i = $(window).height(),
        n = $(window).width();
    t < n ? $(".full img").css({ "margin-left": n / 2 - t / 2 }) : $(".full img").css({ "margin-left": 0 }), e < i ? $(".full img").css({ "margin-top": i / 2 - e / 2 }) : $(".full img").css({ "margin-top": 0 });
}
function LocationHash() {
    var t = window.location.hash.slice(1);
    $(".link-page a[data-details='" + t + "']").trigger("click"),
        $(".link-popup[data-name='" + t + "']").trigger("click"),
        $(".slide-pagi a[data-number='" + t + "']").trigger("click"),
        $(".float li a[data-target='" + t + "']").trigger("click");
}
($.fn.isInViewport = function () {
    var t = $(this).offset().top + 150,
        e = t + $(this).outerHeight(),
        i = $(window).scrollTop(),
        n = i + ($(window).height() + 150);
    return i < e && t < n;
}),
    $(document).ready(function () {
        $("#contact_form").length && document.getElementById("contact_form").reset(),
            $("#recruitment-send").length && document.getElementById("recruitment-send").reset(),
            $(document).bind("scroll", function () {
                var i = $(document).scrollTop(),
                    n = $(".slide-mask").innerHeight(),
                    e = $(".header").innerHeight(),
                    s = $(".slide-mask"),
                    a = $(window).scrollTop();
                $(".slide-mask").innerHeight();
                window.requestAnimationFrame(function () {
                    if (
                        (i >= $(window).height() / 2
                            ? ($(".stop").trigger("click"),
                              $(".go-top").addClass("show"),
                              $("#news-page, #library-page, #career-page, #contact-page, #customer-service-page, #thank-you-page, #chart-page, #investor-relation-page").length && $(".wheel").removeClass("show"))
                            : ($(".play").trigger("click"),
                              $(".go-top").removeClass("show"),
                              $("#news-page, #library-page, #career-page, #contact-page, #customer-service-page, #thank-you-page, #chart-page, #investor-relation-page").length && $(".wheel").addClass("show")),
                        $(".outer-nav").length && (n - e <= i ? $(".outer-nav").addClass("fixed") : $(".outer-nav").removeClass("fixed")),
                        $(".set-post").each(function () {
                            var t = $(this).offset().top - n,
                                e = $(this).outerHeight();
                            e < $(window).height() && (e = $(window).height()),
                                t <= i &&
                                    i <= t + e &&
                                    ($(".set-post").removeClass("active"),
                                    $(this).addClass("active"),
                                    1 == doWheel &&
                                        ($(".sub-nav li").removeClass("current"),
                                        $('.sub-nav li a[data-name="' + $(this).attr("data-post") + '"]')
                                            .parent()
                                            .addClass("current")),
                                    detectBut()),
                                $("#contact-page").length &&
                                    ($('.group-central[data-post="google-map"]').hasClass("active")
                                        ? $("html").hasClass("is-Chrome") || ($(".googlemap").hasClass("empty") && $(".put-show").trigger("click"))
                                        : i < $(window).height() && ($("html").hasClass("is-Chrome") || $(".put-hide").trigger("click")));
                        }),
                        $(".slide-video-frame iframe").length && !$(".album-load").length)
                    ) {
                        var t = i - $(".video-center, .project-picture").offset().top;
                        t < 0 && (t = -t), $(".video-center, .project-picture").innerHeight() - 100 <= t ? $(".pause-button").trigger("click") : $(".play-button").trigger("click");
                    }
                    1100 < $(window).width() && ($(s).css({ "-webkit-transform": "translate3d(0," + 0.3 * a + "px, 0)", transform: "translate3d(0," + 0.3 * a + "px, 0)" }), AniText()), onScroll();
                }),
                    (windscroll = i);
            }),
            $(".go-top").on("click", function () {
                1100 < $(window).width() && $(".box-nav").length ? $(".box-nav li:first-child").trigger("click") : $("html, body").animate({ scrollTop: 0 }, "slow");
            }),
            $(".container").on("click", function () {
                1100 < $(window).width() && $(".search-but").hasClass("active") && $(".search-form, .search-but").removeClass("active");
            }),
            $("#home-page").length
                ? setTimeout(function () {
                      0 == Loadx && ((Loadx = 1), Done());
                  }, 1500)
                : setTimeout(function () {
                      0 == Loadx && ((Loadx = 1), Done());
                  }, 800);
    }),
    (window.onorientationchange = ResizeWindows),
    $(window).on("orientationchange", function () {
        $(window).width() <= 1100 && (ScrollHoz(), $("#news-page, #news-details-page").length && detectBut());
    }),
    $(window).resize(function () {
        ResizeWindows();
    }),
    $(window).on(
        "resize",
        function () {
            if ((ResizeWindows(), 1100 < $(window).width())) {
                $("#home-page,  #about-page").length && ($(".group-central").hasClass("show-text") || ($("body").addClass("hide"), BoxSlide())),
                    $(".full.dragscroll").length && !$(".img-chart").length && ($("html, body").removeClass("no-scroll"), ScrollBody(), $(".close-pics-small").trigger("click")),
                    $(".navigation .bg-menu, .rotate-img .bg-menu").length &&
                        ($(".navigation .bg-menu, .rotate-img .bg-menu").hasClass("ani-canvas") ||
                            $(".navigation .bg-menu, .rotate-img .bg-menu").each(function (t, e) {
                                LoadCanvas($(e).attr("id"));
                            })),
                    $(".dragscroll").length && (detectMargin(), $(".dragscroll").draptouch());
                var t = $(".scroll-slide, .sub-inner");
                $(t).hasClass("dragscroll") && ($(t).removeClass("dragscroll draptouch-active draptouch-moving-left draptouch-moving-down"), $(t).css({ overflow: "visible" }));
            } else {
                $(".dragscroll").length && (detectMargin(), $(".dragscroll").draptouch()),
                    (0 != TouchLenght && isTouchDevice) || (ScrollHoz(), $("#news-page, #news-details-page").length && detectBut()),
                    $(".navigation .bg-menu, .rotate-img .bg-menu").length &&
                        $(".navigation .bg-menu, .rotate-img .bg-menu").hasClass("ani-canvas") &&
                        ($(".navigation .bg-menu, .rotate-img .bg-menu").removeClass("ani-canvas"),
                        $(".navigation .bg-menu, .rotate-img .bg-menu").each(function (t, e) {
                            $(e).find("canvas").remove();
                        })),
                    $(".map-box").length && $(".googlemap").hasClass("empty") && $(".put-show").trigger("click"),
                    $(".map-box").hasClass("show") &&
                        ($("body").removeClass("fullmap"),
                        $("html, body").removeClass("no-scroll"),
                        $(".header, .footer, .go-top, .wheel, .box-nav").removeClass("headermap"),
                        $(".container").removeClass("mapshow"),
                        $(".map-box").removeClass("show"),
                        ScrollBody());
            }
            (900 < $(window).width() && ($(".bottom-link").removeAttr("style"), $(".title-footer").hasClass("active") && $(".title-footer").removeClass("active")),
            1100 < $(window).width() && ($(".sub-project").removeAttr("style"), $(".sub-project").hasClass("show") && ($(".sub-project").removeClass("show"), $(".open-button ").removeClass("active"))),
            $(".details-content").length) && ($(".details-center").innerHeight() > $(window).height() ? $(".details-content").addClass("no-after") : $(".details-content").removeClass("no-after"));
        },
        250
    ),
    (window.onpopstate = function (t) {
        t.preventDefault();
        var e = $(".httpserver").text();
        if (null !== history.state)
            var n = history.state.path,
                i = history.state.dataName,
                s = history.state.title;
        else document.URL;
        if (void 0 !== n) {
            n.replace(e, "").split("/");
            changeUrl(n, s, "", "", i, "", "");
        }
        $(".nav li a").each(function (t, e) {
            $(e).attr("href") == n && window.history.back();
        }),
            $(".box-nav li span").each(function (t, e) {
                $(e).attr("data-href") == n && $(e).trigger("click");
            }),
            $("#news-page").length &&
                $(".slide-pagi li a").each(function (t, e) {
                    $(e).attr("href") == n && $(e).trigger("click");
                }),
            $("#news-details-page").length &&
                ($(".go-back").attr("href") == n && (window.location = n),
                $(".link-page a").each(function (t, e) {
                    $(e).attr("href") == n && $(e).trigger("click");
                })),
            $("#customer-service-page").length &&
                ($(".group-central").each(function (t, e) {
                    if ($(e).attr("data-href") == n) {
                        var i = $(e).offset().top;
                        $("html, body")
                            .stop()
                            .animate({ scrollTop: i - 80 }, 1e3, "linear", function () {});
                    }
                }),
                $(".float li a").each(function (t, e) {
                    $(e).attr("href") == n && $(e).trigger("click");
                })),
            $("#about-page, #career-page, #investor-relation-page").length &&
                ($(".close-video").length && $(".close-video").trigger("click"),
                $(".close-album").length && $(".close-album").trigger("click"),
                $(".close-popup").length
                    ? $(".close-popup").trigger("click")
                    : ($("#career-page").length &&
                          $(".navigation li a").each(function (t, e) {
                              $(e).attr("href") == n && window.history.back();
                          }),
                      $(".link-popup").each(function (t, e) {
                          $(e).attr("href") == n &&
                              ($("#project-details-page").length
                                  ? setTimeout(function () {
                                        $(e).trigger("click");
                                    }, 1e3)
                                  : $(e).trigger("click"));
                      })));
    });
