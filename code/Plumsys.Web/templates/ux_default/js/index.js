function common_checkbrowse() {
    var e = navigator.userAgent.toLowerCase(),
		t = (e.match(/\b(chrome|opera|safari|msie|firefox)\b/) || ["", "mozilla"])[1],
		n = "(?:" + t + "|version)[\\/: ]([\\d.]+)",
		i = (e.match(new RegExp(n)) || [])[1];
    return {
        is: n,
        ver: i
    }
}
var Hogan = {};
!
function (e, t) {
    function n(e) {
        return String(null === e || void 0 === e ? "" : e)
    }
    function i(e) {
        return e = n(e), l.test(e) ? e.replace(r, "&amp;").replace(o, "&lt;").replace(s, "&gt;").replace(a, "&#39;").replace(u, "&quot;") : e
    }
    e.Template = function (e, n, i, r) {
        this.r = e || this.r, this.c = i, this.options = r, this.text = n || "", this.buf = t ? [] : ""
    }, e.Template.prototype = {
        r: function (e, t, n) {
            return ""
        },
        v: i,
        t: n,
        render: function (e, t, n) {
            return this.ri([e], t || {}, n)
        },
        ri: function (e, t, n) {
            return this.r(e, t, n)
        },
        rp: function (e, t, n, i) {
            var r = n[e];
            return r ? (this.c && "string" == typeof r && (r = this.c.compile(r, this.options)), r.ri(t, n, i)) : ""
        },
        rs: function (e, t, n) {
            var i = e[e.length - 1];
            if (!c(i)) return void n(e, t, this);
            for (var r = 0; r < i.length; r++) e.push(i[r]), n(e, t, this), e.pop()
        },
        s: function (e, t, n, i, r, o, s) {
            var a;
            return c(e) && 0 === e.length ? !1 : ("function" == typeof e && (e = this.ls(e, t, n, i, r, o, s)), a = "" === e || !!e, !i && a && t && t.push("object" == typeof e ? e : t[t.length - 1]), a)
        },
        d: function (e, t, n, i) {
            var r = e.split("."),
				o = this.f(r[0], t, n, i),
				s = null;
            if ("." === e && c(t[t.length - 2])) return t[t.length - 1];
            for (var a = 1; a < r.length; a++) o && "object" == typeof o && r[a] in o ? (s = o, o = o[r[a]]) : o = "";
            return i && !o ? !1 : (i || "function" != typeof o || (t.push(s), o = this.lv(o, t, n), t.pop()), o)
        },
        f: function (e, t, n, i) {
            for (var r = !1, o = null, s = !1, a = t.length - 1; a >= 0; a--) if (o = t[a], o && "object" == typeof o && e in o) {
                r = o[e], s = !0;
                break
            }
            return s ? (i || "function" != typeof r || (r = this.lv(r, t, n)), r) : i ? !1 : ""
        },
        ho: function (e, t, n, i, r) {
            var o = this.c,
				s = this.options;
            s.delimiters = r;
            var i = e.call(t, i);
            return i = null == i ? String(i) : i.toString(), this.b(o.compile(i, s).render(t, n)), !1
        },
        b: t ?
		function (e) {
		    this.buf.push(e)
		} : function (e) {
		    this.buf += e
		},
        fl: t ?
		function () {
		    var e = this.buf.join("");
		    return this.buf = [], e
		} : function () {
		    var e = this.buf;
		    return this.buf = "", e
		},
        ls: function (e, t, n, i, r, o, s) {
            var a = t[t.length - 1],
				u = null;
            if (!i && this.c && e.length > 0) return this.ho(e, a, n, this.text.substring(r, o), s);
            if (u = e.call(a), "function" == typeof u) {
                if (i) return !0;
                if (this.c) return this.ho(u, a, n, this.text.substring(r, o), s)
            }
            return u
        },
        lv: function (e, t, i) {
            var r = t[t.length - 1],
				o = e.call(r);
            return "function" == typeof o && (o = n(o.call(r)), this.c && ~o.indexOf("{{")) ? this.c.compile(o, this.options).render(r, i) : n(o)
        }
    };
    var r = /&/g,
		o = /</g,
		s = />/g,
		a = /\'/g,
		u = /\"/g,
		l = /[&<>\"\']/,
		c = Array.isArray ||
	function (e) {
	    return "[object Array]" === Object.prototype.toString.call(e)
	}
}("undefined" != typeof exports ? exports : Hogan), function (e) {
    function t(e) {
        "}" === e.n.substr(e.n.length - 1) && (e.n = e.n.substring(0, e.n.length - 1))
    }
    function n(e) {
        return e.trim ? e.trim() : e.replace(/^\s*|\s*$/g, "")
    }
    function i(e, t, n) {
        if (t.charAt(n) != e.charAt(0)) return !1;
        for (var i = 1, r = e.length; r > i; i++) if (t.charAt(n + i) != e.charAt(i)) return !1;
        return !0
    }
    function r(e, t, n, i) {
        for (var a = [], u = null, l = null; e.length > 0;) if (l = e.shift(), "#" == l.tag || "^" == l.tag || o(l, i)) n.push(l), l.nodes = r(e, l.tag, n, i), a.push(l);
        else {
            if ("/" == l.tag) {
                if (0 === n.length) throw new Error("Closing tag without opener: /" + l.n);
                if (u = n.pop(), l.n != u.n && !s(l.n, u.n, i)) throw new Error("Nesting error: " + u.n + " vs. " + l.n);
                return u.end = l.i, a
            }
            a.push(l)
        }
        if (n.length > 0) throw new Error("missing closing tag: " + n.pop().n);
        return a
    }
    function o(e, t) {
        for (var n = 0, i = t.length; i > n; n++) if (t[n].o == e.n) return e.tag = "#", !0
    }
    function s(e, t, n) {
        for (var i = 0, r = n.length; r > i; i++) if (n[i].c == e && n[i].o == t) return !0
    }
    function a(e) {
        return e.replace(_, "\\\\").replace(v, '\\"').replace(y, "\\n").replace(w, "\\r")
    }
    function u(e) {
        return ~e.indexOf(".") ? "d" : "f"
    }
    function l(e) {
        for (var t = "", n = 0, i = e.length; i > n; n++) {
            var r = e[n].tag;
            "#" == r ? t += c(e[n].nodes, e[n].n, u(e[n].n), e[n].i, e[n].end, e[n].otag + " " + e[n].ctag) : "^" == r ? t += h(e[n].nodes, e[n].n, u(e[n].n)) : "<" == r || ">" == r ? t += d(e[n]) : "{" == r || "&" == r ? t += f(e[n].n, u(e[n].n)) : "\n" == r ? t += g('"\\n"' + (e.length - 1 == n ? "" : " + i")) : "_v" == r ? t += p(e[n].n, u(e[n].n)) : void 0 === r && (t += g('"' + a(e[n]) + '"'))
        }
        return t
    }
    function c(e, t, n, i, r, o) {
        return "if(_.s(_." + n + '("' + a(t) + '",c,p,1),c,p,0,' + i + "," + r + ',"' + o + '")){_.rs(c,p,function(c,p,_){' + l(e) + "});c.pop();}"
    }
    function h(e, t, n) {
        return "if(!_.s(_." + n + '("' + a(t) + '",c,p,1),c,p,1,0,0,"")){' + l(e) + "};"
    }
    function d(e) {
        return '_.b(_.rp("' + a(e.n) + '",c,p,"' + (e.indent || "") + '"));'
    }
    function f(e, t) {
        return "_.b(_.t(_." + t + '("' + a(e) + '",c,p,0)));'
    }
    function p(e, t) {
        return "_.b(_.v(_." + t + '("' + a(e) + '",c,p,0)));'
    }
    function g(e) {
        return "_.b(" + e + ");"
    }
    var m = /\S/,
		v = /\"/g,
		y = /\n/g,
		w = /\r/g,
		_ = /\\/g,
		$ = {
		    "#": 1,
		    "^": 2,
		    "/": 3,
		    "!": 4,
		    ">": 5,
		    "<": 6,
		    "=": 7,
		    _v: 8,
		    "{": 9,
		    "&": 10
		};
    e.scan = function (e, r) {
        function o() {
            v.length > 0 && (y.push(new String(v)), v = "")
        }
        function s() {
            for (var e = !0, t = b; t < y.length; t++) if (e = y[t].tag && $[y[t].tag] < $._v || !y[t].tag && null === y[t].match(m), !e) return !1;
            return e
        }
        function a(e, t) {
            if (o(), e && s()) for (var n, i = b; i < y.length; i++) y[i].tag || ((n = y[i + 1]) && ">" == n.tag && (n.indent = y[i].toString()), y.splice(i, 1));
            else t || y.push({
                tag: "\n"
            });
            w = !1, b = y.length
        }
        function u(e, t) {
            var i = "=" + x,
				r = e.indexOf(i, t),
				o = n(e.substring(e.indexOf("=", t) + 1, r)).split(" ");
            return C = o[0], x = o[1], r + i.length - 1
        }
        var l = e.length,
			c = 0,
			h = 1,
			d = 2,
			f = c,
			p = null,
			g = null,
			v = "",
			y = [],
			w = !1,
			_ = 0,
			b = 0,
			C = "{{",
			x = "}}";
        for (r && (r = r.split(" "), C = r[0], x = r[1]), _ = 0; l > _; _++) f == c ? i(C, e, _) ? (--_, o(), f = h) : "\n" == e.charAt(_) ? a(w) : v += e.charAt(_) : f == h ? (_ += C.length - 1, g = $[e.charAt(_ + 1)], p = g ? e.charAt(_ + 1) : "_v", "=" == p ? (_ = u(e, _), f = c) : (g && _++, f = d), w = _) : i(x, e, _) ? (y.push({
            tag: p,
            n: n(v),
            otag: C,
            ctag: x,
            i: "/" == p ? w - x.length : _ + C.length
        }), v = "", _ += x.length - 1, f = c, "{" == p && ("}}" == x ? _++ : t(y[y.length - 1]))) : v += e.charAt(_);
        return a(w, !0), y
    }, e.generate = function (t, n, i) {
        var r = 'var _=this;_.b(i=i||"");' + l(t) + "return _.fl();";
        return i.asString ? "function(c,p,i){" + r + ";}" : new e.Template(new Function("c", "p", "i", r), n, e, i)
    }, e.parse = function (e, t, n) {
        return n = n || {}, r(e, "", [], n.sectionTags || [])
    }, e.cache = {}, e.compile = function (e, t) {
        t = t || {};
        var n = e + "||" + !!t.asString,
			i = this.cache[n];
        return i ? i : (i = this.generate(this.parse(this.scan(e, t.delimiters), e, t), e, t), this.cache[n] = i)
    }
}("undefined" != typeof exports ? exports : Hogan), function (e, t, n) {
    function i(i, r, o) {
        n++;
        var s, a, u, l, c, h = e(i),
			d = 0,
			f = h.children(),
			p = f.size(),
			g = parseFloat(o.speed),
			m = parseFloat(o.timeout),
			v = parseFloat(o.maxwidth),
			y = o.itemNum * (o.width + o.itemMargin + 1),
			w = o.namespace,
			_ = w + n,
			$ = w + "_nav " + _ + "_nav",
			b = w + "_here",
			C = _ + "_on",
			x = _ + "_s",
			A = e("<ul class='" + w + "_tabs " + _ + "_tabs' />"),
			T = {
			    "float": "left",
			    position: "relative",
			    opacity: 1,
			    zIndex: 2
			},
			S = {
			    "float": "none",
			    position: "absolute",
			    opacity: 0,
			    zIndex: 1
			},
			k = function (t) {
			    o.before(t), f.stop().fadeOut(g, function () {
			        e(this).removeClass(C).css(S).css("opacity", 1)
			    }).eq(t).fadeIn(g, function () {
			        e(this).addClass(C).css(T), o.after(t), d = t
			    })
			},
			I = function (e) {
			    f.removeClass(C);
			    var t = -e * o.width;
			    h.animate({
			        left: t
			    }, function () {
			        d = e, "last" === f.eq(e).attr("data-clone") ? (h.css({
			            left: -o.width
			        }), d = 1) : "first" === f.eq(e).attr("data-clone") && (h.css({
			            left: -o.width * (p - 2)
			        }), d = p - 2), f.eq(d).addClass(C)
			    })
			},
			D = function (e, t) {
			    f.removeClass(C), d = t ? e - o.itemNum : e + o.itemNum;
			    var n = -d * (o.width + o.itemMargin);
			    h.animate({
			        left: n
			    }, function () {
			        f.eq(d).addClass(C)
			    })
			};
        if ("slide" === o.animtype && 1 == o.itemNum && o.nav) {
            var V = f.eq(0).clone(),
				L = f.eq(p - 1).clone();
            V.attr({
                "data-clone": "last",
                "data-slide": 0
            }).appendTo(h).show(), L.attr({
                "data-clone": "first",
                "data-slide": 0
            }).prependTo(h).show(), f = h.children(), p = f.size()
        }
        if (o.itemNum > 1 && (f.css("margin-right", o.itemMargin), h.parent().css("width", y)), o.random && (f.sort(function () {
			return Math.round(Math.random()) - .5
        }), h.empty().append(f)), f.each(function (e) {
			this.id = x + e
        }), h.addClass(w + " " + _), r && r.maxwidth && h.css("max-width", v), "slide" === o.animtype) {
            f.css({
                width: o.width,
                height: o.height,
                "float": "left",
                position: "relative",
                display: "list-item"
            });
            var O = 0;
            1 == o.itemNum && (d = 1, O = -o.width), f.eq(d).addClass(C), h.css({
                width: o.width * (o.nav ? p + 2 : p),
                height: o.height,
                left: O,
                overflow: "hidden",
                position: "relative"
            })
        } else f.hide().css(S).eq(0).addClass(C).css(T).show();
        if (f.size() > 1) {
            if (g + 100 > m) return;
            if (o.pager && !o.manualControls) {
                var E = [];
                f.each(function (t) {
                    if (void 0 === e(this).attr("data-clone")) {
                        E += o.tabsEle ? "<li>" + o.tabsEle[t] + "</li>" : "<li></li>"
                    }
                }), A.append(E), r.navContainer ? e(o.navContainer).append(A) : h.after(A)
            }
            if (o.manualControls && (A = e(o.manualControls), A.addClass(w + "_tabs " + _ + "_tabs")), (o.pager || o.manualControls) && A.find("li").each(function (t) {
				e(this).addClass(x + (t + 1))
            }), (o.pager || o.manualControls) && (c = A.find("li"), s = function (e) {
				c.closest("li").removeClass(b).eq(e).addClass(b)
            }), o.auto && (a = function () {
				l = setInterval(function () {
					f.stop(!0, !0);
					var e = p > d + 1 ? d + 1 : 0,
						t = o.animtype;
					(o.pager || o.manualControls) && s("slide" === t ? d == p - 2 ? 0 : 0 == d ? p : d : e), "slide" === t ? I(e) : k(e)
            }, m)
            })(), u = function () {
				o.auto && (clearInterval(l), a())
            }, o.pause && h.hover(function () {
				clearInterval(l)
            }, function () {
				u()
            }), (o.pager || o.manualControls) && (h.parent().css("position", "relative"), c.bind("click", function (t) {
				t.preventDefault(), o.pauseControls || u();
				var n = c.index(this);
				if ("slide" === o.animtype) {
					if (h.queue("fx").length) return;
					s(n), I(n + 1)
            } else {
					if (d === n || e("." + C).queue("fx").length) return;
					s(n), k(n)
            }
            }).eq(0).closest("li").addClass(b), o.pauseControls && c.hover(function () {
				clearInterval(l)
            }, function () {
				u()
            })), o.nav) {
                var q = "<a href='#' class='" + $ + " prev' >" + o.prevText + "</a><a href='#' class='" + $ + " next' >" + o.nextText + "</a>";
                r.navContainer ? e(o.navContainer).append(q) : h.after(q);
                var U = e("." + _ + "_nav"),
					K = U.filter(".prev");
                if (o.hidenav) {
                    U.hide();
                    var B = U.parent();
                    B.on("mouseenter", function () {
                        U.show()
                    }).on("mouseleave", function () {
                        U.hide()
                    })
                }
                U.bind("click", function (t) {
                    t.preventDefault();
                    var n = e("." + C),
						i = 0;
                    if (i = "slide" == o.animtype ? h.queue("fx").length : n.queue("fx").length, !i) {
                        if (1 === o.itemNum) {
                            var r = f.index(n),
								a = r - 1,
								l = p > r + 1 ? d + 1 : 0;
                            "slide" === o.animtype ? (-1 == a && (a = p - 1), 0 == l && (l = 2), I(e(this)[0] === K[0] ? a : l)) : k(e(this)[0] === K[0] ? a : l)
                        } else {
                            var r = f.index(n),
								c = e(this)[0] === K[0];
                            if (c && 0 === r) return;
                            if (!c && p - r <= o.itemNum) return;
                            D(r, c)
                        } (o.pager || o.manualControls) && ("slide" === o.animtype ? (l == p - 1 && (l = 1), 0 == a && (a = p - 2), s(e(this)[0] === K[0] ? a - 1 : l - 1)) : s(e(this)[0] === K[0] ? a : l)), o.pauseControls || u()
                    }
                }), o.pauseControls && U.hover(function () {
                    clearInterval(l)
                }, function () {
                    u()
                })
            }
        }
        if ("undefined" == typeof document.body.style.maxWidth && r.maxwidth) {
            var M = function () {
                h.css("width", "100%"), h.width() > v && h.css("width", v)
            };
            M(), e(t).bind("resize", function () {
                M()
            })
        }
        r.height && h.css({
            height: r.height
        })
    }
    e.fn.responsiveSlides = function (t) {
        var n = e.extend({
            animtype: "fade",
            width: 700,
            height: 300,
            itemNum: 1,
            itemMargin: 5,
            auto: !0,
            speed: 500,
            timeout: 4e3,
            pager: !1,
            nav: !1,
            hidenav: !1,
            random: !1,
            pause: !1,
            pauseControls: !0,
            prevText: "Previous",
            nextText: "Next",
            maxwidth: "",
            navContainer: "",
            manualControls: "",
            namespace: "rslides",
            before: e.noop,
            after: e.noop,
            tabsEle: null
        }, t);
        i(this, t, n)
    }
}(jQuery, this, 0);
$("#KeFuBtn").mouseenter(function () {
    $(this).removeClass("KeFuBox"), $(this).addClass("KeFuBoxAct")
}), $("#KeFuBtn").mouseleave(function () {
    $(this).removeClass("KeFuBoxAct"), $(this).addClass("KeFuBox")
}), $(".BackToTop").click(function () {
    $("body,html").animate({
        scrollTop: 0
    }, 800)
}), $(window).scroll(function () {
    $(window).scrollTop() < 300 ? $(".RightBox").hide() : $(".RightBox").show()
}), $(".ACloseBtn").click(function () {
    $(".AdviseDone").hide(), $(".AdviseDoneThird").hide(), $(".AdviseDoneSecond").hide(), $(".AdviseUp").show(), $(".KeFuGroup").hide()
}),
$(".KeFu").click(function () {
    $(".KeFuGroup").fadeIn(100)
}), $(".KeFuBox").click(function () {
    $(".KeFuGroup").fadeIn(100)
}), Function.prototype.delegate = function () {
    var e = this,
		t = this.scope,
		n = arguments,
		i = arguments.length,
		r = "function";
    return function () {
        for (var o = arguments.length, s = i > o ? i : o, a = 0; s > a; a++) arguments[a] && (n[a] = arguments[a]);
        n.length = s;
        for (var a = 0, u = n.length; u > a; a++) {
            var l = n[a];
            l && typeof l == r && 1 == l.late && (n[a] = l.apply(t || this, n))
        }
        return e.apply(t || this, n)
    }
};
var public = common_checkbrowse(),
	showeffect = "";
if (showeffect = "msie" == public.is && public.ver < 8 ? "show" : "fadeIn", $("img.lazy_img").lazyload({
	event: "scroll",
    effect: showeffect,
    skip_invisible: !1,
    failure_limit: 12
}), $(".rslides").responsiveSlides({
    auto: !0,
    pager: !0,
    nav: !0,
    hidenav: !0,
    speed: 500,
    namespace: "homewrap",
    prevText: "",
    nextText: "",
    timeout: 8e3
}), $(".BestTripBox").mouseenter(function () {
	$(this).find(".ActBox").is(":animated") || $(this).find(".ActBox").fadeIn("fast")
}), $(".BestTripBox").mouseleave(function () {
	$(this).find(".ActBox").fadeOut("fast")
}), $(".nav .title").mouseenter(function () {
	$(this).find(".navitag").is(":animated") || $(this).find(".navitag").slideDown("fast")
}), $(".nav .title").mouseleave(function () {
	$(this).find(".navitag").slideUp("fast")
}),
    $(function () {
	$("#header_search_city_input").focus()
}));
