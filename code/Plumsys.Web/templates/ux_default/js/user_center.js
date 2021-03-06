function loginMemue(e) {
    $("#au_login").show(),
    $("#un_login").hide(),
    -1 != e.indexOf("userOrderList") || -1 != e.indexOf("userInfo") || -1 != e.indexOf("userOrderDetail") || -1 != e.indexOf("userPassword") || -1 != e.indexOf("userCoupons") || -1 != e.indexOf("userTravel") ? $("#U_ROLE_USER").addClass("topbar_hover") : $("#U_ROLE_USER").addClass("widthB")
}
function getClientLanguage() {
    var e = navigator.userLanguage || navigator.language;
    switch (e.toLowerCase()) {
        case "zh-cn":
            return !1;
        case "zh-tw":
            return !0;
        default:
            return null
    }
}
function translate(e, t) {
    e = e.childNodes;
    for (var n, i = 0,
    r = e.length; r > i; i++) if (n = e.item(i), !("||BR|HR|TEXTAREA|".indexOf("|" + n.tagName + "|") > 0)) if (n.title && (n.title = t(n.title)), n.alt && (n.alt = t(n.alt)), "INPUT" == n.tagName) {
        if (n.getAttribute("api") && "1" == n.getAttribute("api")) continue;
        "INPUT" == n.tagName && "" != n.value && "text" != n.type && "hidden" != n.type && (n.value = t(n.value)),
        n.placeholder && (n.placeholder = t(n.placeholder)),
        n.getAttribute("cn") && n.setAttribute("cn", t(n.getAttribute("cn"))),
        n.getAttribute("data-name") && n.setAttribute("data-name", t(n.getAttribute("data-name")))
    } else if ("SELECT" == n.tagName) {
        if (n.getAttribute("api") && "1" == n.getAttribute("api")) continue;
        arguments.callee(n, t)
    } else 3 == n.nodeType ? "简体中文" != n.data && (n.data = t(n.data)) : arguments.callee(n, t)
}
function translateText(e, t) {
    if (null != e) {
        for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) n = e.charAt(a),
        i = t ? simplified.indexOf(n) : traditional.indexOf(n),
        r = t ? traditional.charAt(i) : simplified.charAt(i),
        o.push(-1 != i ? r : n);
        return o.join("")
    }
}
function initCurreny() {
    var e = Cookie.get("CurrencyType");
    null != e && "0" != e || $(".currenyTag").text("人民币"),
    "1" == e && $(".currenyTag").text("美元"),
    "2" == e && $(".currenyTag").text("欧元"),
    "3" == e && $(".currenyTag").text("英镑"),
    "9" == e && $(".currenyTag").text("港币"),
    "10" == e && $(".currenyTag").text("新元"),
    "12" == e && $(".currenyTag").text("台币")
}
function initLanguage() {
    var e = Cookie.get(cookieName);
    null == e && getClientLanguage() || "tw" == e ? ($(".languageTag").text("繁體中文"), document.title = traditionalized(document.title), translate(document.body, traditionalized)) : (null == e && !getClientLanguage() || "cn" == e) && $(".languageTag").text("简体中文")
}
function commom_dealString(e) {
    return e.replace(",", "")
}
function common_validateInput(e) {
    return "" == e ? !1 : "null" == e ? !1 : !(e.length > 200)
}
function common_number(e, t) {
    if (parseFloat(e) < 0) return 0;
    var n = "";
    if (-1 != e.indexOf(".")) {
        var i = e.split(".");
        i[1].length > 3 && (e = parseFloat(e).toFixed(2))
    }
    if (-1 != e.indexOf(".")) {
        var i = e.split(".");
        e = i[0],
        t && (n = i[1])
    }
    for (var r = e.length,
    o = "",
    a = 0; r / 3 + 1 > a; a++) 0 >= r - 3 * (a + 1) ? o = e.substring(0, r - 3 * a) + o : o += "," + e.substring(r - 3 * (a + 1), r - 3 * a);
    return t && "" != n ? n.length > 3 ? parseFloat(o + "." + n).toFixed(2) : o + "." + n : o
}
function common_ancho(e, t) {
    var n = $(e).offset().top;
    $("html,body").animate({
        scrollTop: n
    },
    t)
}
function common_isLetterOrNum(e) {
    var t = /^[a-zA-Z0-9]+$/;
    return !t.test(e)
}
function common_checkEmail(e) {
    return -1 != e.search(/^([a-zA-Z0-9]+[_|\-|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/)
}
function common_isChinese(e) {
    var t = /u4e00-u9fa5/;
    return !t.test(e)
}
function common_isEnglish(e) {
    var t = /^[A-Za-z]+$/;
    return !t.test(e)
}
function common_isTelphone(e) {
    return !! /^1[3|4|5|6|7|8|9][0-9]{1}[0-9]{8}$/.test(e)
}
function common_isPhone(e) {
    return !! /^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/.test(e)
}
function common_getParameterByName(e) {
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
    n = t.exec(location.search);
    return null == n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
}
function common_post(e, t) {
    var n = document.createElement("form");
    n.action = e,
    n.method = "post",
    n.style.display = "none";
    for (var i in t) {
        var r = document.createElement("textarea");
        r.name = i,
        r.value = t[i],
        n.appendChild(r)
    }
    return document.body.appendChild(n),
    n.submit(),
    n
}
function common_getAllCityJson() {
    var e;
    return $.ajax({
        type: "post",
        url: "/isThemeName",
        data: {},
        dataType: "json",
        async: !0,
        success: function (t) {
            e = t.data
        }
    }),
    e
}
function common_isnan(e) {
    return isNaN(e) ? 0 : e
}
function common_validatePostCode(e) {
    return !! /^[0-9]{6}$/.test(e)
}
function common_checkEndTime(e, t, n) {
    var i = new Date(e.replace("-", "/").replace("-", "/")),
    r = new Date(t.replace("-", "/").replace("-", "/")),
    o = new Date(n.replace("-", "/").replace("-", "/"));
    return i >= o && o > r ? 1 : 0
}
function common_checkPersonType(e, t) {
    return common_checkEndTime(t[8], t[9], e) ? ".visitor" : common_checkEndTime(t[0], t[1], e) ? ".adult" : common_checkEndTime(t[2], t[3], e) ? ".child" : common_checkEndTime(t[4], t[5], e) ? ".baby" : common_checkEndTime(t[6], t[7], e) ? ".old" : "none"
}
function common_checkPersonNum(e, t) {
    for (var n in e) if (e.hasOwnProperty(n) && common_checkEndTime(e[n].beginDate, e[n].endDate, t)) return e[n].personType;
    return !1
}
function common_returnZh(e) {
    return ".adult" == e ? "成人" : ".child" == e ? "儿童" : ".baby" == e ? "婴儿" : ".old" == e ? "老人" : ".visitor" == e ? "" : void 0
}
function common_returnInt(e) {
    return ".adult" == e ? 1 : ".child" == e ? 2 : ".baby" == e ? 3 : ".old" == e ? 4 : ".visitor" == e ? 5 : void 0
}
function common_compare(e, t) {
    var n = [];
    if (void 0 != e.adult_range && n.push(e.adult_range.split("-")[t]), void 0 != e.child_range && n.push(e.child_range.split("-")[t]), void 0 != e.baby_range && n.push(e.baby_range.split("-")[t]), void 0 != e.older_range && n.push(e.older_range.split("-")[t]), void 0 != e.visitor_range && n.push(e.visitor_range.split("-")[t]), 0 == t) {
        for (var i = parseInt(n[0]), r = 0; r < n.length; r++) i > parseInt(n[r]) && (i = parseInt(n[r]));
        return i
    }
    if (1 == t) {
        for (var o = parseInt(n[0]), r = 0; r < n.length; r++) o < parseInt(n[r]) && (o = parseInt(n[r]));
        return o
    }
}
function common_compare_array(e, t) {
    if (0 == t) {
        for (var n = parseInt(e[0]), i = 0; i < e.length; i++) n > parseInt(e[i]) && (n = parseInt(e[i]));
        return n
    }
    if (1 == t) {
        for (var r = parseInt(e[0]), i = 0; i < e.length; i++) r < parseInt(e[i]) && (r = parseInt(e[i]));
        return r
    }
}
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
function common_timegap(e, t) {
    var n = new Date(e),
    i = new Date(t),
    r = i.getTime() - n.getTime();
    return Math.floor(r / 864e5)
}
function addPickup(e, t, n, i, r, o, a) {
    var s = $.layer({
        bgcolor: "",
        type: 1,
        title: !1,
        offset: ["20%", "36%"],
        area: ["auto", "auto"],
        shade: [.6, "#000", !0],
        closeBtn: !1,
        border: [0, .9, "#000", !1],
        page: {
            dom: "#addPickupDiv"
        }
    });
    1 == e && ($("#meetAirportDiv").show(), $("#meetAirport").val("")),
    1 == t && ($("#seeOffAirportDiv").show(), $("#seeOffAirport").val("")),
    1 == n && ($("#meetHotelDiv").show(), $("#meetHotelName").val(""), $("#meetHotelAddressDiv").show(), $("#meetHotelAddress").val("")),
    1 == i && ($("#seeOffHotelDiv").show(), $("#seeOffHotelName").val(""), $("#seeOffHotelAddressDiv").show(), $("#seeOffHotelAddress").val("")),
    1 == r && ($("#mailDiv").show(), $("#mailingAdd").val("")),
    $("#btn_addPickup_no").click(function () {
        layer.close(s)
    }),
    $("#btn_addPickup_yes").click(function () {
        if (1 == e && !common_validateInput($("#meetAirport").val())) return void layer.tips("航班号为空", "#meetAirport", 1, 300, 1, ["background-color:#e10979; color:#fff", "#e10979"]);
        if (1 == t && !common_validateInput($("#seeOffAirport").val())) return void layer.tips("航班号为空", "#seeOffAirport", 1, 300, 1, ["background-color:#e10979; color:#fff", "#e10979"]);
        if (1 == n) {
            if (!common_validateInput($("#meetHotelName").val())) return void layer.tips("酒店名称为空", "#meetHotelName", 1, 300, 1, ["background-color:#e10979; color:#fff", "#e10979"]);
            if (!common_validateInput($("#meetHotelAddress").val())) return void layer.tips("酒店地址为空", "#meetHotelAddress", 1, 300, 1, ["background-color:#e10979; color:#fff", "#e10979"])
        }
        if (1 == i) {
            if (!common_validateInput($("#seeOffHotelName").val())) return void layer.tips("酒店名称为空", "#seeOffHotelName", 1, 300, 1, ["background-color:#e10979; color:#fff", "#e10979"]);
            if (!common_validateInput($("#seeOffHotelAddress").val())) return void layer.tips("酒店地址为空", "#seeOffHotelAddress", 1, 300, 1, ["background-color:#e10979; color:#fff", "#e10979"])
        }
        if (1 == r && !common_validateInput($("#mailingAddress").val())) return void layer.tips("邮递信息为空", "#mailingAddress", 1, 300, 1, ["background-color:#e10979; color:#fff", "#e10979"]);
        var l = $("#meetAirport").val(),
        u = $("#seeOffAirport").val(),
        c = $("#meetHotelName").val(),
        d = $("#meetHotelAddress").val(),
        h = $("#seeOffHotelName").val(),
        f = $("#seeOffHotelAddress").val(),
        p = $("#mailingAddress").val();
        $.ajax({
            type: "post",
            url: "/order/addPickupInfo",
            data: {
                meetAirportInfo: l,
                seeOffAirportInfo: u,
                meetHotelName: c,
                meetHotelAddress: d,
                seeOffHotelName: h,
                seeOffHotelAddress: f,
                mailName: p,
                sys_no: o,
                main_sys_no: a
            },
            dataType: "json",
            success: function (e) {
                200 == e.code ? (layer.close(s), layer.msg("添加成功", 2, 1,
                function () {
                    window.location.reload()
                })) : $.layer({
                    area: ["auto", "auto"],
                    dialog: {
                        msg: "操作失败:" + e.data,
                        type: 9
                    }
                })
            }
        })
    })
}
function charge() {
    $("#voucher").val(""),
    $(".AdviseGroup").show()
}
function orderList_calculateTotalNum(e) {
    for (var t = e.split("/"), n = 0, i = 0; i < t.length; i++) n += parseInt(t[i]);
    return n
}
function header_search(e) {
    var t = e;
    "" == t && (t = $("#defaultSearch").val());
    var n = searchLocationCountryUrl($.trim(t));
    return "" != n ? (window.location.href = n, !1) : void (-1 != AllLocationJson.indexOf('"' + t + '"') ? window.location.href = "/search/" + t + "_AllThemes.html" : -1 != AllThemesInJson.indexOf('"' + t + '"') ? window.location.href = "/search/AllCitys_" + t + ".html" : window.location.href = "/search/AllCitys_AllThemes.html?keyword=" + t)
}
function locationCountryUrl() { }
function searchLocationCountryUrl(e) {
    return ""
} !
function (e) {
    var t = "0.9.3",
    n = {
        isMsie: function () {
            var e = /(msie) ([\w.]+)/i.exec(navigator.userAgent);
            return e ? parseInt(e[2], 10) : !1
        },
        isBlankString: function (e) {
            return !e || /^\s*$/.test(e)
        },
        escapeRegExChars: function (e) {
            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        },
        isString: function (e) {
            return "string" == typeof e
        },
        isNumber: function (e) {
            return "number" == typeof e
        },
        isArray: e.isArray,
        isFunction: e.isFunction,
        isObject: e.isPlainObject,
        isUndefined: function (e) {
            return "undefined" == typeof e
        },
        bind: e.proxy,
        bindAll: function (t) {
            var n;
            for (var i in t) e.isFunction(n = t[i]) && (t[i] = e.proxy(n, t))
        },
        indexOf: function (e, t) {
            for (var n = 0; n < e.length; n++) if (e[n] === t) return n;
            return -1
        },
        each: e.each,
        map: e.map,
        filter: e.grep,
        every: function (t, n) {
            var i = !0;
            return t ? (e.each(t,
            function (e, r) {
                return (i = n.call(null, r, e, t)) ? void 0 : !1
            }), !!i) : i
        },
        some: function (t, n) {
            var i = !1;
            return t ? (e.each(t,
            function (e, r) {
                return (i = n.call(null, r, e, t)) ? !1 : void 0
            }), !!i) : i
        },
        mixin: e.extend,
        getUniqueId: function () {
            var e = 0;
            return function () {
                return e++
            }
        }(),
        defer: function (e) {
            setTimeout(e, 0)
        },
        debounce: function (e, t, n) {
            var i, r;
            return function () {
                var o, a, s = this,
                l = arguments;
                return o = function () {
                    i = null,
                    n || (r = e.apply(s, l))
                },
                a = n && !i,
                clearTimeout(i),
                i = setTimeout(o, t),
                a && (r = e.apply(s, l)),
                r
            }
        },
        throttle: function (e, t) {
            var n, i, r, o, a, s;
            return a = 0,
            s = function () {
                a = new Date,
                r = null,
                o = e.apply(n, i)
            },
            function () {
                var l = new Date,
                u = t - (l - a);
                return n = this,
                i = arguments,
                0 >= u ? (clearTimeout(r), r = null, a = l, o = e.apply(n, i)) : r || (r = setTimeout(s, u)),
                o
            }
        },
        tokenizeQuery: function (t) {
            return e.trim(t).toLowerCase().split(/[\s]+/)
        },
        tokenizeText: function (t) {
            return e.trim(t).toLowerCase().split(/[\s\-_]+/)
        },
        getProtocol: function () {
            return location.protocol
        },
        noop: function () { }
    },
    i = function () {
        var e = /\s+/;
        return {
            on: function (t, n) {
                var i;
                if (!n) return this;
                for (this._callbacks = this._callbacks || {},
                t = t.split(e) ; i = t.shift() ;) this._callbacks[i] = this._callbacks[i] || [],
                this._callbacks[i].push(n);
                return this
            },
            trigger: function (t, n) {
                var i, r;
                if (!this._callbacks) return this;
                for (t = t.split(e) ; i = t.shift() ;) if (r = this._callbacks[i]) for (var o = 0; o < r.length; o += 1) r[o].call(this, {
                    type: i,
                    data: n
                });
                return this
            }
        }
    }(),
    r = function () {
        function t(t) {
            t && t.el || e.error("EventBus initialized without el"),
            this.$el = e(t.el)
        }
        var i = "typeahead:";
        return n.mixin(t.prototype, {
            trigger: function (e) {
                var t = [].slice.call(arguments, 1);
                this.$el.trigger(i + e, t)
            }
        }),
        t
    }(),
    o = function () {
        function e(e) {
            this.prefix = ["__", e, "__"].join(""),
            this.ttlKey = "__ttl__",
            this.keyMatcher = new RegExp("^" + this.prefix)
        }
        function t() {
            return (new Date).getTime()
        }
        function i(e) {
            return JSON.stringify(n.isUndefined(e) ? null : e)
        }
        function r(e) {
            return JSON.parse(e)
        }
        var o, a;
        try {
            o = window.localStorage,
            o.setItem("~~~", "!"),
            o.removeItem("~~~")
        } catch (s) {
            o = null
        }
        return a = o && window.JSON ? {
            _prefix: function (e) {
                return this.prefix + e
            },
            _ttlKey: function (e) {
                return this._prefix(e) + this.ttlKey
            },
            get: function (e) {
                return this.isExpired(e) && this.remove(e),
                r(o.getItem(this._prefix(e)))
            },
            set: function (e, r, a) {
                return n.isNumber(a) ? o.setItem(this._ttlKey(e), i(t() + a)) : o.removeItem(this._ttlKey(e)),
                o.setItem(this._prefix(e), i(r))
            },
            remove: function (e) {
                return o.removeItem(this._ttlKey(e)),
                o.removeItem(this._prefix(e)),
                this
            },
            clear: function () {
                var e, t, n = [],
                i = o.length;
                for (e = 0; i > e; e++) (t = o.key(e)).match(this.keyMatcher) && n.push(t.replace(this.keyMatcher, ""));
                for (e = n.length; e--;) this.remove(n[e]);
                return this
            },
            isExpired: function (e) {
                var i = r(o.getItem(this._ttlKey(e)));
                return !!(n.isNumber(i) && t() > i)
            }
        } : {
            get: n.noop,
            set: n.noop,
            remove: n.noop,
            clear: n.noop,
            isExpired: n.noop
        },
        n.mixin(e.prototype, a),
        e
    }(),
    a = function () {
        function e(e) {
            n.bindAll(this),
            e = e || {},
            this.sizeLimit = e.sizeLimit || 10,
            this.cache = {},
            this.cachedKeysByAge = []
        }
        return n.mixin(e.prototype, {
            get: function (e) {
                return this.cache[e]
            },
            set: function (e, t) {
                var n;
                this.cachedKeysByAge.length === this.sizeLimit && (n = this.cachedKeysByAge.shift(), delete this.cache[n]),
                this.cache[e] = t,
                this.cachedKeysByAge.push(e)
            }
        }),
        e
    }(),
    s = function () {
        function t(e) {
            n.bindAll(this),
            e = n.isString(e) ? {
                url: e
            } : e,
            l = l || new a,
            s = n.isNumber(e.maxParallelRequests) ? e.maxParallelRequests : s || 6,
            this.url = e.url,
            this.wildcard = e.wildcard || "%QUERY",
            this.filter = e.filter,
            this.replace = e.replace,
            this.ajaxSettings = {
                type: "get",
                cache: e.cache,
                timeout: e.timeout,
                dataType: e.dataType || "json",
                beforeSend: e.beforeSend
            },
            this._get = (/^throttle$/i.test(e.rateLimitFn) ? n.throttle : n.debounce)(this._get, e.rateLimitWait || 300)
        }
        function i() {
            u++
        }
        function r() {
            u--
        }
        function o() {
            return s > u
        }
        var s, l, u = 0,
        c = {};
        return n.mixin(t.prototype, {
            _get: function (e, t) {
                function n(n) {
                    var r = i.filter ? i.filter(n) : n;
                    t && t(r),
                    l.set(e, n)
                }
                var i = this;
                o() ? this._sendRequest(e).done(n) : this.onDeckRequestArgs = [].slice.call(arguments, 0)
            },
            _sendRequest: function (t) {
                function n() {
                    r(),
                    c[t] = null,
                    o.onDeckRequestArgs && (o._get.apply(o, o.onDeckRequestArgs), o.onDeckRequestArgs = null)
                }
                var o = this,
                a = c[t];
                return a || (i(), a = c[t] = e.ajax(t, this.ajaxSettings).always(n)),
                a
            },
            get: function (e, t) {
                var i, r, o = this,
                a = encodeURIComponent(e || "");
                return t = t || n.noop,
                i = this.replace ? this.replace(this.url, a) : this.url.replace(this.wildcard, a),
                (r = l.get(i)) ? n.defer(function () {
                    t(o.filter ? o.filter(r) : r)
                }) : this._get(i, t),
                !!r
            }
        }),
        t
    }(),
    l = function () {
        function i(t) {
            n.bindAll(this),
            n.isString(t.template) && !t.engine && e.error("no template engine specified"),
            t.local || t.prefetch || t.remote || e.error("one of local, prefetch, or remote is required"),
            this.name = t.name || n.getUniqueId(),
            this.limit = t.limit || 5,
            this.minLength = t.minLength || 1,
            this.header = t.header,
            this.footer = t.footer,
            this.valueKey = t.valueKey || "value",
            this.template = r(t.template, t.engine, this.valueKey),
            this.local = t.local,
            this.prefetch = t.prefetch,
            this.remote = t.remote,
            this.itemHash = {},
            this.adjacencyList = {},
            this.storage = t.name ? new o(t.name) : null
        }
        function r(e, t, i) {
            var r, o;
            return n.isFunction(e) ? r = e : n.isString(e) ? (o = t.compile(e), r = n.bind(o.render, o)) : r = function (e) {
                return "<p>" + e[i] + "</p>"
            },
            r
        }
        var a = {
            thumbprint: "thumbprint",
            protocol: "protocol",
            itemHash: "itemHash",
            adjacencyList: "adjacencyList"
        };
        return n.mixin(i.prototype, {
            _processLocalData: function (e) {
                this._mergeProcessedData(this._processData(e))
            },
            _loadPrefetchData: function (i) {
                function r(e) {
                    var t = i.filter ? i.filter(e) : e,
                    r = h._processData(t),
                    o = r.itemHash,
                    s = r.adjacencyList;
                    h.storage && (h.storage.set(a.itemHash, o, i.ttl), h.storage.set(a.adjacencyList, s, i.ttl), h.storage.set(a.thumbprint, f, i.ttl), h.storage.set(a.protocol, n.getProtocol(), i.ttl)),
                    h._mergeProcessedData(r)
                }
                var o, s, l, u, c, d, h = this,
                f = t + (i.thumbprint || "");
                return this.storage && (o = this.storage.get(a.thumbprint), s = this.storage.get(a.protocol), l = this.storage.get(a.itemHash), u = this.storage.get(a.adjacencyList)),
                c = o !== f || s !== n.getProtocol(),
                i = n.isString(i) ? {
                    url: i
                } : i,
                i.ttl = n.isNumber(i.ttl) ? i.ttl : 864e5,
                l && u && !c ? (this._mergeProcessedData({
                    itemHash: l,
                    adjacencyList: u
                }), d = e.Deferred().resolve()) : d = e.getJSON(i.url).done(r),
                d
            },
            _transformDatum: function (e) {
                var t = n.isString(e) ? e : e[this.valueKey],
                i = e.tokens || n.tokenizeText(t),
                r = {
                    value: t,
                    tokens: i
                };
                return n.isString(e) ? (r.datum = {},
                r.datum[this.valueKey] = e) : r.datum = e,
                r.tokens = n.filter(r.tokens,
                function (e) {
                    return !n.isBlankString(e)
                }),
                r.tokens = n.map(r.tokens,
                function (e) {
                    return e.toLowerCase()
                }),
                r
            },
            _processData: function (e) {
                var t = this,
                i = {},
                r = {};
                return n.each(e,
                function (e, o) {
                    var a = t._transformDatum(o),
                    s = n.getUniqueId(a.value);
                    i[s] = a,
                    n.each(a.tokens,
                    function (e, t) {
                        var i = t.charAt(0),
                        o = r[i] || (r[i] = [s]); ! ~n.indexOf(o, s) && o.push(s)
                    })
                }),
                {
                    itemHash: i,
                    adjacencyList: r
                }
            },
            _mergeProcessedData: function (e) {
                var t = this;
                n.mixin(this.itemHash, e.itemHash),
                n.each(e.adjacencyList,
                function (e, n) {
                    var i = t.adjacencyList[e];
                    t.adjacencyList[e] = i ? i.concat(n) : n
                })
            },
            _getLocalSuggestions: function (e) {
                var t, i = this,
                r = [],
                o = [],
                a = [];
                return n.each(e,
                function (e, t) {
                    var i = t.charAt(0); ! ~n.indexOf(r, i) && r.push(i)
                }),
                n.each(r,
                function (e, n) {
                    var r = i.adjacencyList[n];
                    return r ? (o.push(r), void ((!t || r.length < t.length) && (t = r))) : !1
                }),
                o.length < r.length ? [] : (n.each(t,
                function (t, r) {
                    var s, l, u = i.itemHash[r];
                    s = n.every(o,
                    function (e) {
                        return ~n.indexOf(e, r)
                    }),
                    l = s && n.every(e,
                    function (e) {
                        return n.some(u.tokens,
                        function (t) {
                            return 0 === t.indexOf(e)
                        })
                    }),
                    l && a.push(u)
                }), a)
            },
            initialize: function () {
                var t;
                return this.local && this._processLocalData(this.local),
                this.transport = this.remote ? new s(this.remote) : null,
                t = this.prefetch ? this._loadPrefetchData(this.prefetch) : e.Deferred().resolve(),
                this.local = this.prefetch = this.remote = null,
                this.initialize = function () {
                    return t
                },
                t
            },
            getSuggestions: function (e, t) {
                function i(e) {
                    o = o.slice(0),
                    n.each(e,
                    function (e, t) {
                        var i, r = a._transformDatum(t);
                        return i = n.some(o,
                        function (e) {
                            return r.value === e.value
                        }),
                        !i && o.push(r),
                        o.length < a.limit
                    }),
                    t && t(o)
                }
                var r, o, a = this,
                s = !1;
                e.length < this.minLength || (r = n.tokenizeQuery(e), o = this._getLocalSuggestions(r).slice(0, this.limit), o.length < this.limit && this.transport && (s = this.transport.get(e, i)), !s && t && t(o))
            }
        }),
        i
    }(),
    u = function () {
        function t(t) {
            var i = this;
            n.bindAll(this),
            this.specialKeyCodeMap = {
                9: "tab",
                27: "esc",
                37: "left",
                39: "right",
                13: "enter",
                38: "up",
                40: "down"
            },
            this.$hint = e(t.hint),
            this.$input = e(t.input).on("blur.tt", this._handleBlur).on("focus.tt", this._handleFocus).on("keydown.tt", this._handleSpecialKeyEvent),
            n.isMsie() ? this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",
            function (e) {
                i.specialKeyCodeMap[e.which || e.keyCode] || n.defer(i._compareQueryToInputValue)
            }) : this.$input.on("input.tt", this._compareQueryToInputValue),
            this.query = this.$input.val(),
            this.$overflowHelper = r(this.$input)
        }
        function r(t) {
            return e("<span></span>").css({
                position: "absolute",
                left: "-9999px",
                visibility: "hidden",
                whiteSpace: "nowrap",
                fontFamily: t.css("font-family"),
                fontSize: t.css("font-size"),
                fontStyle: t.css("font-style"),
                fontVariant: t.css("font-variant"),
                fontWeight: t.css("font-weight"),
                wordSpacing: t.css("word-spacing"),
                letterSpacing: t.css("letter-spacing"),
                textIndent: t.css("text-indent"),
                textRendering: t.css("text-rendering"),
                textTransform: t.css("text-transform")
            }).insertAfter(t)
        }
        function o(e, t) {
            return e = (e || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " "),
            t = (t || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " "),
            e === t
        }
        return n.mixin(t.prototype, i, {
            _handleFocus: function () {
                this.trigger("focused")
            },
            _handleBlur: function () {
                this.trigger("blured")
            },
            _handleSpecialKeyEvent: function (e) {
                var t = this.specialKeyCodeMap[e.which || e.keyCode];
                t && this.trigger(t + "Keyed", e)
            },
            _compareQueryToInputValue: function () {
                var e = this.getInputValue(),
                t = o(this.query, e),
                n = t ? this.query.length !== e.length : !1;
                n ? this.trigger("whitespaceChanged", {
                    value: this.query
                }) : t || this.trigger("queryChanged", {
                    value: this.query = e
                })
            },
            destroy: function () {
                this.$hint.off(".tt"),
                this.$input.off(".tt"),
                this.$hint = this.$input = this.$overflowHelper = null
            },
            focus: function () {
                this.$input.focus()
            },
            blur: function () {
                this.$input.blur()
            },
            getQuery: function () {
                return this.query
            },
            setQuery: function (e) {
                this.query = e
            },
            getInputValue: function () {
                return this.$input.val()
            },
            setInputValue: function (e, t) {
                this.$input.val(e),
                !t && this._compareQueryToInputValue()
            },
            getHintValue: function () {
                return this.$hint.val()
            },
            setHintValue: function (e) {
                this.$hint.val(e)
            },
            getLanguageDirection: function () {
                return (this.$input.css("direction") || "ltr").toLowerCase()
            },
            isOverflow: function () {
                return this.$overflowHelper.text(this.getInputValue()),
                this.$overflowHelper.width() > this.$input.width()
            },
            isCursorAtEnd: function () {
                var e, t = this.$input.val().length,
                i = this.$input[0].selectionStart;
                return n.isNumber(i) ? i === t : document.selection ? (e = document.selection.createRange(), e.moveStart("character", -t), t === e.text.length) : !0
            }
        }),
        t
    }(),
    c = function () {
        function t(t) {
            n.bindAll(this),
            this.isOpen = !1,
            this.isEmpty = !0,
            this.isMouseOverDropdown = !1,
            this.$menu = e(t.menu).on("mouseenter.tt", this._handleMouseenter).on("mouseleave.tt", this._handleMouseleave).on("click.tt", ".tt-suggestion", this._handleSelection).on("mouseover.tt", ".tt-suggestion", this._handleMouseover)
        }
        function r(e) {
            return e.data("suggestion")
        }
        var o = {
            suggestionsList: '<span class="tt-suggestions"></span>'
        },
        a = {
            suggestionsList: {
                display: "block"
            },
            suggestion: {
                whiteSpace: "nowrap",
                cursor: "pointer"
            },
            suggestionChild: {
                whiteSpace: "normal"
            }
        };
        return n.mixin(t.prototype, i, {
            _handleMouseenter: function () {
                this.isMouseOverDropdown = !0
            },
            _handleMouseleave: function () {
                this.isMouseOverDropdown = !1
            },
            _handleMouseover: function (t) {
                var n = e(t.currentTarget);
                this._getSuggestions().removeClass("tt-is-under-cursor"),
                n.addClass("tt-is-under-cursor")
            },
            _handleSelection: function (t) {
                var n = e(t.currentTarget);
                this.trigger("suggestionSelected", r(n))
            },
            _show: function () {
                this.$menu.css("display", "block")
            },
            _hide: function () {
                this.$menu.hide()
            },
            _moveCursor: function (e) {
                var t, n, i, o;
                if (this.isVisible()) {
                    if (t = this._getSuggestions(), n = t.filter(".tt-is-under-cursor"), n.removeClass("tt-is-under-cursor"), i = t.index(n) + e, i = (i + 1) % (t.length + 1) - 1, -1 === i) return void this.trigger("cursorRemoved"); -1 > i && (i = t.length - 1),
                    o = t.eq(i).addClass("tt-is-under-cursor"),
                    this._ensureVisibility(o),
                    this.trigger("cursorMoved", r(o))
                }
            },
            _getSuggestions: function () {
                return this.$menu.find(".tt-suggestions > .tt-suggestion")
            },
            _ensureVisibility: function (e) {
                var t = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10),
                n = this.$menu.scrollTop(),
                i = e.position().top,
                r = i + e.outerHeight(!0);
                0 > i ? this.$menu.scrollTop(n + i) : r > t && this.$menu.scrollTop(n + (r - t))
            },
            destroy: function () {
                this.$menu.off(".tt"),
                this.$menu = null
            },
            isVisible: function () {
                return this.isOpen && !this.isEmpty
            },
            closeUnlessMouseIsOverDropdown: function () {
                this.isMouseOverDropdown || this.close()
            },
            close: function () {
                this.isOpen && (this.isOpen = !1, this.isMouseOverDropdown = !1, this._hide(), this.$menu.find(".tt-suggestions > .tt-suggestion").removeClass("tt-is-under-cursor"), this.trigger("closed"))
            },
            open: function () {
                this.isOpen || (this.isOpen = !0, !this.isEmpty && this._show(), this.trigger("opened"))
            },
            setLanguageDirection: function (e) { },
            moveCursorUp: function () {
                this._moveCursor(-1)
            },
            moveCursorDown: function () {
                this._moveCursor(1)
            },
            getSuggestionUnderCursor: function () {
                var e = this._getSuggestions().filter(".tt-is-under-cursor").first();
                return e.length > 0 ? r(e) : null
            },
            getFirstSuggestion: function () {
                var e = this._getSuggestions().first();
                return e.length > 0 ? r(e) : null
            },
            renderSuggestions: function (t, i) {
                var r, s, l, u, c, d = "tt-dataset-" + t.name,
                h = '<div class="tt-suggestion">%body</div>',
                f = this.$menu.find("." + d);
                0 === f.length && (s = e(o.suggestionsList).css(a.suggestionsList), f = e("<div></div>").addClass(d).append(t.header).append(s).append(t.footer).appendTo(this.$menu)),
                i.length > 0 ? (this.isEmpty = !1, this.isOpen && this._show(), l = document.createElement("div"), u = document.createDocumentFragment(), n.each(i,
                function (n, i) {
                    i.dataset = t.name,
                    r = t.template(i.datum),
                    l.innerHTML = h.replace("%body", r),
                    c = e(l.firstChild).css(a.suggestion).data("suggestion", i),
                    c.children().each(function () {
                        e(this).css(a.suggestionChild)
                    }),
                    u.appendChild(c[0])
                }), f.show().find(".tt-suggestions").html(u)) : this.clearSuggestions(t.name),
                this.trigger("suggestionsRendered")
            },
            clearSuggestions: function (e) {
                var t = e ? this.$menu.find(".tt-dataset-" + e) : this.$menu.find('[class^="tt-dataset-"]'),
                n = t.find(".tt-suggestions");
                t.hide(),
                n.empty(),
                0 === this._getSuggestions().length && (this.isEmpty = !0, this._hide())
            }
        }),
        t
    }(),
    d = function () {
        function t(e) {
            var t, i, o;
            n.bindAll(this),
            this.$node = r(e.input),
            this.datasets = e.datasets,
            this.dir = null,
            this.eventBus = e.eventBus,
            t = this.$node.find(".tt-dropdown-menu"),
            i = this.$node.find(".tt-query"),
            o = this.$node.find(".tt-hint"),
            this.dropdownView = new c({
                menu: t
            }).on("suggestionSelected", this._handleSelection).on("cursorMoved", this._clearHint).on("cursorMoved", this._setInputValueToSuggestionUnderCursor).on("cursorRemoved", this._setInputValueToQuery).on("cursorRemoved", this._updateHint).on("suggestionsRendered", this._updateHint).on("opened", this._updateHint).on("closed", this._clearHint).on("opened closed", this._propagateEvent),
            this.inputView = new u({
                input: i,
                hint: o
            }).on("focused", this._openDropdown).on("blured", this._closeDropdown).on("blured", this._setInputValueToQuery).on("enterKeyed tabKeyed", this._handleSelection).on("queryChanged", this._clearHint).on("queryChanged", this._clearSuggestions).on("queryChanged", this._getSuggestions).on("whitespaceChanged", this._updateHint).on("queryChanged whitespaceChanged", this._openDropdown).on("queryChanged whitespaceChanged", this._setLanguageDirection).on("escKeyed", this._closeDropdown).on("escKeyed", this._setInputValueToQuery).on("tabKeyed upKeyed downKeyed", this._managePreventDefault).on("upKeyed downKeyed", this._moveDropdownCursor).on("upKeyed downKeyed", this._openDropdown).on("tabKeyed leftKeyed rightKeyed", this._autocomplete)
        }
        function r(t) {
            var n = e(a.wrapper),
            i = e(a.dropdown),
            r = e(t),
            o = e(a.hint);
            n = n.css(s.wrapper),
            i = i.css(s.dropdown),
            o.css(s.hint).css({
                backgroundAttachment: r.css("background-attachment"),
                backgroundClip: r.css("background-clip"),
                backgroundColor: r.css("background-color"),
                backgroundImage: r.css("background-image"),
                backgroundOrigin: r.css("background-origin"),
                backgroundPosition: r.css("background-position"),
                backgroundRepeat: r.css("background-repeat"),
                backgroundSize: r.css("background-size")
            }),
            r.data("ttAttrs", {
                dir: r.attr("dir"),
                autocomplete: r.attr("autocomplete"),
                spellcheck: r.attr("spellcheck"),
                style: r.attr("style")
            }),
            r.addClass("tt-query").attr({
                autocomplete: "off",
                spellcheck: !1
            }).css(s.query);
            try {
                !r.attr("dir") && r.attr("dir", "auto")
            } catch (l) { }
            return r.wrap(n).parent().prepend(o).append(i)
        }
        function o(e) {
            var t = e.find(".tt-query");
            n.each(t.data("ttAttrs"),
            function (e, i) {
                n.isUndefined(i) ? t.removeAttr(e) : t.attr(e, i)
            }),
            t.detach().removeData("ttAttrs").removeClass("tt-query").insertAfter(e),
            e.remove()
        }
        var a = {
            wrapper: '<span class="twitter-typeahead"></span>',
            dropdown: '<span class="tt-dropdown-menu"></span>'
        },
        s = {
            wrapper: {
                position: "relative"
            },
            hint: {
                position: "absolute",
                top: "0",
                borderColor: "transparent",
                boxShadow: "none"
            },
            query: {
                position: "relative",
                backgroundColor: "transparent"
            },
            dropdown: {
                display: "none"
            }
        };
        return n.isMsie() && n.mixin(s.query, {
            backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
        }),
        n.isMsie() && n.isMsie() <= 7 && (n.mixin(s.wrapper, {
            display: "inline",
            zoom: "1"
        }), n.mixin(s.query, {
            marginTop: "-1px"
        })),
        n.mixin(t.prototype, i, {
            _managePreventDefault: function (e) {
                var t, n, i = e.data,
                r = !1;
                switch (e.type) {
                    case "tabKeyed":
                        t = this.inputView.getHintValue(),
                        n = this.inputView.getInputValue(),
                        r = t && t !== n;
                        break;
                    case "upKeyed":
                    case "downKeyed":
                        r = !i.shiftKey && !i.ctrlKey && !i.metaKey
                }
                r && i.preventDefault()
            },
            _setLanguageDirection: function () {
                var e = this.inputView.getLanguageDirection();
                e !== this.dir && (this.dir = e, this.$node.css("direction", e), this.dropdownView.setLanguageDirection(e))
            },
            _updateHint: function () {
                var e, t, i, r, o, a = this.dropdownView.getFirstSuggestion(),
                s = a ? a.value : null,
                l = this.dropdownView.isVisible(),
                u = this.inputView.isOverflow();
                s && l && !u && (e = this.inputView.getInputValue(), t = e.replace(/\s{2,}/g, " ").replace(/^\s+/g, ""), i = n.escapeRegExChars(t), r = new RegExp("^(?:" + i + ")(.*$)", "i"), o = r.exec(s), this.inputView.setHintValue(e + (o ? o[1] : "")))
            },
            _clearHint: function () {
                this.inputView.setHintValue("")
            },
            _clearSuggestions: function () {
                this.dropdownView.clearSuggestions()
            },
            _setInputValueToQuery: function () {
                this.inputView.setInputValue(this.inputView.getQuery())
            },
            _setInputValueToSuggestionUnderCursor: function (e) {
                var t = e.data;
                this.inputView.setInputValue(t.value, !0)
            },
            _openDropdown: function () {
                this.dropdownView.open()
            },
            _closeDropdown: function (e) {
                this.dropdownView["blured" === e.type ? "closeUnlessMouseIsOverDropdown" : "close"]()
            },
            _moveDropdownCursor: function (e) {
                var t = e.data;
                t.shiftKey || t.ctrlKey || t.metaKey || this.dropdownView["upKeyed" === e.type ? "moveCursorUp" : "moveCursorDown"]()
            },
            _handleSelection: function (e) {
                var t = "suggestionSelected" === e.type,
                i = t ? e.data : this.dropdownView.getSuggestionUnderCursor();
                i && (this.inputView.setInputValue(i.value), t ? this.inputView.focus() : e.data.preventDefault(), t && n.isMsie() ? n.defer(this.dropdownView.close) : this.dropdownView.close(), this.eventBus.trigger("selected", i.datum, i.dataset))
            },
            _getSuggestions: function () {
                var e = this,
                t = this.inputView.getQuery();
                t = t.replace(/(^\s*)|(\s*$)/g, ""),
                n.isBlankString(t) || n.each(this.datasets,
                function (n, i) {
                    i.getSuggestions(t,
                    function (n) {
                        t === e.inputView.getQuery() && e.dropdownView.renderSuggestions(i, n)
                    })
                })
            },
            _autocomplete: function (e) {
                var t, n, i, r, o; ("rightKeyed" !== e.type && "leftKeyed" !== e.type || (t = this.inputView.isCursorAtEnd(), n = "ltr" === this.inputView.getLanguageDirection() ? "leftKeyed" === e.type : "rightKeyed" === e.type, t && !n)) && (i = this.inputView.getQuery(), r = this.inputView.getHintValue(), "" !== r && i !== r && (o = this.dropdownView.getFirstSuggestion(), this.inputView.setInputValue(o.value), this.eventBus.trigger("autocompleted", o.datum, o.dataset)))
            },
            _propagateEvent: function (e) {
                this.eventBus.trigger(e.type)
            },
            destroy: function () {
                this.inputView.destroy(),
                this.dropdownView.destroy(),
                o(this.$node),
                this.$node = null
            },
            setQuery: function (e) {
                this.inputView.setQuery(e),
                this.inputView.setInputValue(e),
                this._clearHint(),
                this._clearSuggestions(),
                this._getSuggestions()
            }
        }),
        t
    }(); !
    function () {
        var t, i = {},
        o = "ttView";
        t = {
            initialize: function (t) {
                function a() {
                    var t, i = e(this),
                    a = new r({
                        el: i
                    });
                    t = n.map(s,
                    function (e) {
                        return e.initialize()
                    }),
                    i.data(o, new d({
                        input: i,
                        eventBus: a = new r({
                            el: i
                        }),
                        datasets: s
                    })),
                    e.when.apply(e, t).always(function () {
                        n.defer(function () {
                            a.trigger("initialized")
                        })
                    })
                }
                var s;
                return t = n.isArray(t) ? t : [t],
                0 === t.length && e.error("no datasets provided"),
                s = n.map(t,
                function (e) {
                    var t = i[e.name] ? i[e.name] : new l(e);
                    return e.name && (i[e.name] = t),
                    t
                }),
                this.each(a)
            },
            destroy: function () {
                function t() {
                    var t = e(this),
                    n = t.data(o);
                    n && (n.destroy(), t.removeData(o))
                }
                return this.each(t)
            },
            setQuery: function (t) {
                function n() {
                    var n = e(this).data(o);
                    n && n.setQuery(t)
                }
                return this.each(n)
            }
        },
        jQuery.fn.typeahead = function (e) {
            return t[e] ? t[e].apply(this, [].slice.call(arguments, 1)) : t.initialize.apply(this, arguments)
        }
    }()
}(window.jQuery);
var Hogan = {}; !
function (e, t) {
    function n(e) {
        return String(null === e || void 0 === e ? "" : e)
    }
    function i(e) {
        return e = n(e),
        u.test(e) ? e.replace(r, "&amp;").replace(o, "&lt;").replace(a, "&gt;").replace(s, "&#39;").replace(l, "&quot;") : e
    }
    e.Template = function (e, n, i, r) {
        this.r = e || this.r,
        this.c = i,
        this.options = r,
        this.text = n || "",
        this.buf = t ? [] : ""
    },
    e.Template.prototype = {
        r: function (e, t, n) {
            return ""
        },
        v: i,
        t: n,
        render: function (e, t, n) {
            return this.ri([e], t || {},
            n)
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
            for (var r = 0; r < i.length; r++) e.push(i[r]),
            n(e, t, this),
            e.pop()
        },
        s: function (e, t, n, i, r, o, a) {
            var s;
            return c(e) && 0 === e.length ? !1 : ("function" == typeof e && (e = this.ls(e, t, n, i, r, o, a)), s = "" === e || !!e, !i && s && t && t.push("object" == typeof e ? e : t[t.length - 1]), s)
        },
        d: function (e, t, n, i) {
            var r = e.split("."),
            o = this.f(r[0], t, n, i),
            a = null;
            if ("." === e && c(t[t.length - 2])) return t[t.length - 1];
            for (var s = 1; s < r.length; s++) o && "object" == typeof o && r[s] in o ? (a = o, o = o[r[s]]) : o = "";
            return i && !o ? !1 : (i || "function" != typeof o || (t.push(a), o = this.lv(o, t, n), t.pop()), o)
        },
        f: function (e, t, n, i) {
            for (var r = !1,
            o = null,
            a = !1,
            s = t.length - 1; s >= 0; s--) if (o = t[s], o && "object" == typeof o && e in o) {
                r = o[e],
                a = !0;
                break
            }
            return a ? (i || "function" != typeof r || (r = this.lv(r, t, n)), r) : i ? !1 : ""
        },
        ho: function (e, t, n, i, r) {
            var o = this.c,
            a = this.options;
            a.delimiters = r;
            var i = e.call(t, i);
            return i = null == i ? String(i) : i.toString(),
            this.b(o.compile(i, a).render(t, n)),
            !1
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
            return this.buf = [],
            e
        } : function () {
            var e = this.buf;
            return this.buf = "",
            e
        },
        ls: function (e, t, n, i, r, o, a) {
            var s = t[t.length - 1],
            l = null;
            if (!i && this.c && e.length > 0) return this.ho(e, s, n, this.text.substring(r, o), a);
            if (l = e.call(s), "function" == typeof l) {
                if (i) return !0;
                if (this.c) return this.ho(l, s, n, this.text.substring(r, o), a)
            }
            return l
        },
        lv: function (e, t, i) {
            var r = t[t.length - 1],
            o = e.call(r);
            return "function" == typeof o && (o = n(o.call(r)), this.c && ~o.indexOf("{{")) ? this.c.compile(o, this.options).render(r, i) : n(o)
        }
    };
    var r = /&/g,
    o = /</g,
    a = />/g,
    s = /\'/g,
    l = /\"/g,
    u = /[&<>\"\']/,
    c = Array.isArray ||
    function (e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
}("undefined" != typeof exports ? exports : Hogan),
function (e) {
    function t(e) {
        "}" === e.n.substr(e.n.length - 1) && (e.n = e.n.substring(0, e.n.length - 1))
    }
    function n(e) {
        return e.trim ? e.trim() : e.replace(/^\s*|\s*$/g, "")
    }
    function i(e, t, n) {
        if (t.charAt(n) != e.charAt(0)) return !1;
        for (var i = 1,
        r = e.length; r > i; i++) if (t.charAt(n + i) != e.charAt(i)) return !1;
        return !0
    }
    function r(e, t, n, i) {
        for (var s = [], l = null, u = null; e.length > 0;) if (u = e.shift(), "#" == u.tag || "^" == u.tag || o(u, i)) n.push(u),
        u.nodes = r(e, u.tag, n, i),
        s.push(u);
        else {
            if ("/" == u.tag) {
                if (0 === n.length) throw new Error("Closing tag without opener: /" + u.n);
                if (l = n.pop(), u.n != l.n && !a(u.n, l.n, i)) throw new Error("Nesting error: " + l.n + " vs. " + u.n);
                return l.end = u.i,
                s
            }
            s.push(u)
        }
        if (n.length > 0) throw new Error("missing closing tag: " + n.pop().n);
        return s
    }
    function o(e, t) {
        for (var n = 0,
        i = t.length; i > n; n++) if (t[n].o == e.n) return e.tag = "#",
        !0
    }
    function a(e, t, n) {
        for (var i = 0,
        r = n.length; r > i; i++) if (n[i].c == e && n[i].o == t) return !0
    }
    function s(e) {
        return e.replace(b, "\\\\").replace(v, '\\"').replace(y, "\\n").replace(x, "\\r")
    }
    function l(e) {
        return ~e.indexOf(".") ? "d" : "f"
    }
    function u(e) {
        for (var t = "",
        n = 0,
        i = e.length; i > n; n++) {
            var r = e[n].tag;
            "#" == r ? t += c(e[n].nodes, e[n].n, l(e[n].n), e[n].i, e[n].end, e[n].otag + " " + e[n].ctag) : "^" == r ? t += d(e[n].nodes, e[n].n, l(e[n].n)) : "<" == r || ">" == r ? t += h(e[n]) : "{" == r || "&" == r ? t += f(e[n].n, l(e[n].n)) : "\n" == r ? t += m('"\\n"' + (e.length - 1 == n ? "" : " + i")) : "_v" == r ? t += p(e[n].n, l(e[n].n)) : void 0 === r && (t += m('"' + s(e[n]) + '"'))
        }
        return t
    }
    function c(e, t, n, i, r, o) {
        return "if(_.s(_." + n + '("' + s(t) + '",c,p,1),c,p,0,' + i + "," + r + ',"' + o + '")){_.rs(c,p,function(c,p,_){' + u(e) + "});c.pop();}"
    }
    function d(e, t, n) {
        return "if(!_.s(_." + n + '("' + s(t) + '",c,p,1),c,p,1,0,0,"")){' + u(e) + "};"
    }
    function h(e) {
        return '_.b(_.rp("' + s(e.n) + '",c,p,"' + (e.indent || "") + '"));'
    }
    function f(e, t) {
        return "_.b(_.t(_." + t + '("' + s(e) + '",c,p,0)));'
    }
    function p(e, t) {
        return "_.b(_.v(_." + t + '("' + s(e) + '",c,p,0)));'
    }
    function m(e) {
        return "_.b(" + e + ");"
    }
    var g = /\S/,
    v = /\"/g,
    y = /\n/g,
    x = /\r/g,
    b = /\\/g,
    w = {
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
        function a() {
            for (var e = !0,
            t = _; t < y.length; t++) if (e = y[t].tag && w[y[t].tag] < w._v || !y[t].tag && null === y[t].match(g), !e) return !1;
            return e
        }
        function s(e, t) {
            if (o(), e && a()) for (var n, i = _; i < y.length; i++) y[i].tag || ((n = y[i + 1]) && ">" == n.tag && (n.indent = y[i].toString()), y.splice(i, 1));
            else t || y.push({
                tag: "\n"
            });
            x = !1,
            _ = y.length
        }
        function l(e, t) {
            var i = "=" + k,
            r = e.indexOf(i, t),
            o = n(e.substring(e.indexOf("=", t) + 1, r)).split(" ");
            return $ = o[0],
            k = o[1],
            r + i.length - 1
        }
        var u = e.length,
        c = 0,
        d = 1,
        h = 2,
        f = c,
        p = null,
        m = null,
        v = "",
        y = [],
        x = !1,
        b = 0,
        _ = 0,
        $ = "{{",
        k = "}}";
        for (r && (r = r.split(" "), $ = r[0], k = r[1]), b = 0; u > b; b++) f == c ? i($, e, b) ? (--b, o(), f = d) : "\n" == e.charAt(b) ? s(x) : v += e.charAt(b) : f == d ? (b += $.length - 1, m = w[e.charAt(b + 1)], p = m ? e.charAt(b + 1) : "_v", "=" == p ? (b = l(e, b), f = c) : (m && b++, f = h), x = b) : i(k, e, b) ? (y.push({
            tag: p,
            n: n(v),
            otag: $,
            ctag: k,
            i: "/" == p ? x - k.length : b + $.length
        }), v = "", b += k.length - 1, f = c, "{" == p && ("}}" == k ? b++ : t(y[y.length - 1]))) : v += e.charAt(b);
        return s(x, !0),
        y
    },
    e.generate = function (t, n, i) {
        var r = 'var _=this;_.b(i=i||"");' + u(t) + "return _.fl();";
        return i.asString ? "function(c,p,i){" + r + ";}" : new e.Template(new Function("c", "p", "i", r), n, e, i)
    },
    e.parse = function (e, t, n) {
        return n = n || {},
        r(e, "", [], n.sectionTags || [])
    },
    e.cache = {},
    e.compile = function (e, t) {
        t = t || {};
        var n = e + "||" + !!t.asString,
        i = this.cache[n];
        return i ? i : (i = this.generate(this.parse(this.scan(e, t.delimiters), e, t), e, t), this.cache[n] = i)
    }
}("undefined" != typeof exports ? exports : Hogan),
jQuery.cookie = function (e, t, n) {
    if ("undefined" == typeof t) {
        var i = null;
        if (document.cookie && "" != document.cookie) for (var r = document.cookie.split(";"), o = 0; o < r.length; o++) {
            var a = jQuery.trim(r[o]);
            if (a.substring(0, e.length + 1) == e + "=") {
                i = decodeURIComponent(a.substring(e.length + 1));
                break
            }
        }
        return i
    }
    n = n || {},
    null === t && (t = "", n.expires = -1);
    var s = "";
    if (n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
        var l;
        "number" == typeof n.expires ? (l = new Date, l.setTime(l.getTime() + 24 * n.expires * 60 * 60 * 1e3)) : l = n.expires,
        s = "; expires=" + l.toUTCString()
    }
    var u = n.path ? "; path=" + n.path : "",
    c = n.domain ? "; domain=" + n.domain : "",
    d = n.secure ? "; secure" : "";
    document.cookie = [e, "=", encodeURIComponent(t), s, u, c, d].join("")
},
function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function (e) {
    "use strict";
    function t(t) {
        var n = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(n))
    }
    function n(t) {
        var n = t.target,
        i = e(n);
        if (!i.is("[type=submit],[type=image]")) {
            var r = i.closest("[type=submit]");
            if (0 === r.length) return;
            n = r[0]
        }
        var o = this;
        if (o.clk = n, "image" == n.type) if (void 0 !== t.offsetX) o.clk_x = t.offsetX,
        o.clk_y = t.offsetY;
        else if ("function" == typeof e.fn.offset) {
            var a = i.offset();
            o.clk_x = t.pageX - a.left,
            o.clk_y = t.pageY - a.top
        } else o.clk_x = t.pageX - n.offsetLeft,
        o.clk_y = t.pageY - n.offsetTop;
        setTimeout(function () {
            o.clk = o.clk_x = o.clk_y = null
        },
        100)
    }
    function i() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }
    var r = {};
    r.fileapi = void 0 !== e("<input type='file'/>").get(0).files,
    r.formdata = void 0 !== window.FormData;
    var o = !!e.fn.prop;
    e.fn.attr2 = function () {
        if (!o) return this.attr.apply(this, arguments);
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    },
    e.fn.ajaxSubmit = function (t) {
        function n(n) {
            var i, r, o = e.param(n, t.traditional).split("&"),
            a = o.length,
            s = [];
            for (i = 0; a > i; i++) o[i] = o[i].replace(/\+/g, " "),
            r = o[i].split("="),
            s.push([decodeURIComponent(r[0]), decodeURIComponent(r[1])]);
            return s
        }
        function a(i) {
            for (var r = new FormData,
            o = 0; o < i.length; o++) r.append(i[o].name, i[o].value);
            if (t.extraData) {
                var a = n(t.extraData);
                for (o = 0; o < a.length; o++) a[o] && r.append(a[o][0], a[o][1])
            }
            t.data = null;
            var s = e.extend(!0, {},
            e.ajaxSettings, t, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: l || "POST"
            });
            t.uploadProgress && (s.xhr = function () {
                var n = e.ajaxSettings.xhr();
                return n.upload && n.upload.addEventListener("progress",
                function (e) {
                    var n = 0,
                    i = e.loaded || e.position,
                    r = e.total;
                    e.lengthComputable && (n = Math.ceil(i / r * 100)),
                    t.uploadProgress(e, i, r, n)
                },
                !1),
                n
            }),
            s.data = null;
            var u = s.beforeSend;
            return s.beforeSend = function (e, n) {
                t.formData ? n.data = t.formData : n.data = r,
                u && u.call(this, e, n)
            },
            e.ajax(s)
        }
        function s(n) {
            function r(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (n) {
                    i("cannot get iframe.contentWindow document: " + n)
                }
                if (t) return t;
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (n) {
                    i("cannot get iframe.contentDocument: " + n),
                    t = e.document
                }
                return t
            }
            function a() {
                function t() {
                    try {
                        var e = r(v).readyState;
                        i("state = " + e),
                        e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                    } catch (n) {
                        i("Server abort: ", n, " (", n.name, ")"),
                        s(T),
                        _ && clearTimeout(_),
                        _ = void 0
                    }
                }
                var n = d.attr2("target"),
                o = d.attr2("action"),
                a = "multipart/form-data",
                u = d.attr("enctype") || d.attr("encoding") || a;
                $.setAttribute("target", p),
                l && !/post/i.test(l) || $.setAttribute("method", "POST"),
                o != h.url && $.setAttribute("action", h.url),
                h.skipEncodingOverride || l && !/post/i.test(l) || d.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }),
                h.timeout && (_ = setTimeout(function () {
                    w = !0,
                    s(C)
                },
                h.timeout));
                var c = [];
                try {
                    if (h.extraData) for (var f in h.extraData) h.extraData.hasOwnProperty(f) && (e.isPlainObject(h.extraData[f]) && h.extraData[f].hasOwnProperty("name") && h.extraData[f].hasOwnProperty("value") ? c.push(e('<input type="hidden" name="' + h.extraData[f].name + '">').val(h.extraData[f].value).appendTo($)[0]) : c.push(e('<input type="hidden" name="' + f + '">').val(h.extraData[f]).appendTo($)[0]));
                    h.iframeTarget || g.appendTo("body"),
                    v.attachEvent ? v.attachEvent("onload", s) : v.addEventListener("load", s, !1),
                    setTimeout(t, 15);
                    try {
                        $.submit()
                    } catch (m) {
                        var y = document.createElement("form").submit;
                        y.apply($)
                    }
                } finally {
                    $.setAttribute("action", o),
                    $.setAttribute("enctype", u),
                    n ? $.setAttribute("target", n) : d.removeAttr("target"),
                    e(c).remove()
                }
            }
            function s(t) {
                if (!y.aborted && !j) {
                    if (D = r(v), D || (i("cannot access response document"), t = T), t === C && y) return y.abort("timeout"),
                    void k.reject(y, "timeout");
                    if (t == T && y) return y.abort("server abort"),
                    void k.reject(y, "error", "server abort");
                    if (D && D.location.href != h.iframeSrc || w) {
                        v.detachEvent ? v.detachEvent("onload", s) : v.removeEventListener("load", s, !1);
                        var n, o = "success";
                        try {
                            if (w) throw "timeout";
                            var a = "xml" == h.dataType || D.XMLDocument || e.isXMLDoc(D);
                            if (i("isXml=" + a), !a && window.opera && (null === D.body || !D.body.innerHTML) && --O) return i("requeing onLoad callback, DOM not available"),
                            void setTimeout(s, 250);
                            var l = D.body ? D.body : D.documentElement;
                            y.responseText = l ? l.innerHTML : null,
                            y.responseXML = D.XMLDocument ? D.XMLDocument : D,
                            a && (h.dataType = "xml"),
                            y.getResponseHeader = function (e) {
                                var t = {
                                    "content-type": h.dataType
                                };
                                return t[e.toLowerCase()]
                            },
                            l && (y.status = Number(l.getAttribute("status")) || y.status, y.statusText = l.getAttribute("statusText") || y.statusText);
                            var u = (h.dataType || "").toLowerCase(),
                            c = /(json|script|text)/.test(u);
                            if (c || h.textarea) {
                                var d = D.getElementsByTagName("textarea")[0];
                                if (d) y.responseText = d.value,
                                y.status = Number(d.getAttribute("status")) || y.status,
                                y.statusText = d.getAttribute("statusText") || y.statusText;
                                else if (c) {
                                    var p = D.getElementsByTagName("pre")[0],
                                    m = D.getElementsByTagName("body")[0];
                                    p ? y.responseText = p.textContent ? p.textContent : p.innerText : m && (y.responseText = m.textContent ? m.textContent : m.innerText)
                                }
                            } else "xml" == u && !y.responseXML && y.responseText && (y.responseXML = L(y.responseText));
                            try {
                                I = H(y, u, h)
                            } catch (x) {
                                o = "parsererror",
                                y.error = n = x || o
                            }
                        } catch (x) {
                            i("error caught: ", x),
                            o = "error",
                            y.error = n = x || o
                        }
                        y.aborted && (i("upload aborted"), o = null),
                        y.status && (o = y.status >= 200 && y.status < 300 || 304 === y.status ? "success" : "error"),
                        "success" === o ? (h.success && h.success.call(h.context, I, "success", y), k.resolve(y.responseText, "success", y), f && e.event.trigger("ajaxSuccess", [y, h])) : o && (void 0 === n && (n = y.statusText), h.error && h.error.call(h.context, y, o, n), k.reject(y, "error", n), f && e.event.trigger("ajaxError", [y, h, n])),
                        f && e.event.trigger("ajaxComplete", [y, h]),
                        f && !--e.active && e.event.trigger("ajaxStop"),
                        h.complete && h.complete.call(h.context, y, o),
                        j = !0,
                        h.timeout && clearTimeout(_),
                        setTimeout(function () {
                            h.iframeTarget ? g.attr("src", h.iframeSrc) : g.remove(),
                            y.responseXML = null
                        },
                        100)
                    }
                }
            }
            var u, c, h, f, p, g, v, y, x, b, w, _, $ = d[0],
            k = e.Deferred();
            if (k.abort = function (e) {
                y.abort(e)
            },
            n) for (c = 0; c < m.length; c++) u = e(m[c]),
            o ? u.prop("disabled", !1) : u.removeAttr("disabled");
            if (h = e.extend(!0, {},
            e.ajaxSettings, t), h.context = h.context || h, p = "jqFormIO" + (new Date).getTime(), h.iframeTarget ? (g = e(h.iframeTarget), b = g.attr2("name"), b ? p = b : g.attr2("name", p)) : (g = e('<iframe name="' + p + '" src="' + h.iframeSrc + '" />'), g.css({
                position: "absolute",
                top: "-1000px",
                left: "-1000px"
            })), v = g[0], y = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: "n/a",
                getAllResponseHeaders: function () { },
                getResponseHeader: function () { },
                setRequestHeader: function () { },
                abort: function (t) {
                    var n = "timeout" === t ? "timeout" : "aborted";
                    i("aborting upload... " + n),
                    this.aborted = 1;
                    try {
                        v.contentWindow.document.execCommand && v.contentWindow.document.execCommand("Stop")
            } catch (r) { }
                    g.attr("src", h.iframeSrc),
                    y.error = n,
                    h.error && h.error.call(h.context, y, n, t),
                    f && e.event.trigger("ajaxError", [y, h, n]),
                    h.complete && h.complete.call(h.context, y, n)
            }
            },
            f = h.global, f && 0 === e.active++ && e.event.trigger("ajaxStart"), f && e.event.trigger("ajaxSend", [y, h]), h.beforeSend && h.beforeSend.call(h.context, y, h) === !1) return h.global && e.active--,
            k.reject(),
            k;
            if (y.aborted) return k.reject(),
            k;
            x = $.clk,
            x && (b = x.name, b && !x.disabled && (h.extraData = h.extraData || {},
            h.extraData[b] = x.value, "image" == x.type && (h.extraData[b + ".x"] = $.clk_x, h.extraData[b + ".y"] = $.clk_y)));
            var C = 1,
            T = 2,
            A = e("meta[name=csrf-token]").attr("content"),
            S = e("meta[name=csrf-param]").attr("content");
            S && A && (h.extraData = h.extraData || {},
            h.extraData[S] = A),
            h.forceSync ? a() : setTimeout(a, 10);
            var I, D, j, O = 50,
            L = e.parseXML ||
            function (e, t) {
                return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"),
                t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
            },
            E = e.parseJSON ||
            function (e) {
                return window.eval("(" + e + ")")
            },
            H = function (t, n, i) {
                var r = t.getResponseHeader("content-type") || "",
                o = "xml" === n || !n && r.indexOf("xml") >= 0,
                a = o ? t.responseXML : t.responseText;
                return o && "parsererror" === a.documentElement.nodeName && e.error && e.error("parsererror"),
                i && i.dataFilter && (a = i.dataFilter(a, n)),
                "string" == typeof a && ("json" === n || !n && r.indexOf("json") >= 0 ? a = E(a) : ("script" === n || !n && r.indexOf("javascript") >= 0) && e.globalEval(a)),
                a
            };
            return k
        }
        if (!this.length) return i("ajaxSubmit: skipping submit process - no element selected"),
        this;
        var l, u, c, d = this;
        "function" == typeof t ? t = {
            success: t
        } : void 0 === t && (t = {}),
        l = t.type || this.attr2("method"),
        u = t.url || this.attr2("action"),
        c = "string" == typeof u ? e.trim(u) : "",
        c = c || window.location.href || "",
        c && (c = (c.match(/^([^#]+)/) || [])[1]),
        t = e.extend(!0, {
            url: c,
            success: e.ajaxSettings.success,
            type: l || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        },
        t);
        var h = {};
        if (this.trigger("form-pre-serialize", [this, t, h]), h.veto) return i("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),
        this;
        if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return i("ajaxSubmit: submit aborted via beforeSerialize callback"),
        this;
        var f = t.traditional;
        void 0 === f && (f = e.ajaxSettings.traditional);
        var p, m = [],
        g = this.formToArray(t.semantic, m);
        if (t.data && (t.extraData = t.data, p = e.param(t.data, f)), t.beforeSubmit && t.beforeSubmit(g, this, t) === !1) return i("ajaxSubmit: submit aborted via beforeSubmit callback"),
        this;
        if (this.trigger("form-submit-validate", [g, this, t, h]), h.veto) return i("ajaxSubmit: submit vetoed via form-submit-validate trigger"),
        this;
        var v = e.param(g, f);
        p && (v = v ? v + "&" + p : p),
        "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + v, t.data = null) : t.data = v;
        var y = [];
        if (t.resetForm && y.push(function () {
            d.resetForm()
        }), t.clearForm && y.push(function () {
            d.clearForm(t.includeHidden)
        }), !t.dataType && t.target) {
            var x = t.success ||
            function () { };
            y.push(function (n) {
                var i = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[i](n).each(x, arguments)
            })
        } else t.success && y.push(t.success);
        if (t.success = function (e, n, i) {
            for (var r = t.context || this,
            o = 0,
            a = y.length; a > o; o++) y[o].apply(r, [e, n, i || d, d])
        },
        t.error) {
            var b = t.error;
            t.error = function (e, n, i) {
                var r = t.context || this;
                b.apply(r, [e, n, i, d])
            }
        }
        if (t.complete) {
            var w = t.complete;
            t.complete = function (e, n) {
                var i = t.context || this;
                w.apply(i, [e, n, d])
            }
        }
        var _ = e("input[type=file]:enabled", this).filter(function () {
            return "" !== e(this).val()
        }),
        $ = _.length > 0,
        k = "multipart/form-data",
        C = d.attr("enctype") == k || d.attr("encoding") == k,
        T = r.fileapi && r.formdata;
        i("fileAPI :" + T);
        var A, S = ($ || C) && !T;
        t.iframe !== !1 && (t.iframe || S) ? t.closeKeepAlive ? e.get(t.closeKeepAlive,
        function () {
            A = s(g)
        }) : A = s(g) : A = ($ || C) && T ? a(g) : e.ajax(t),
        d.removeData("jqxhr").data("jqxhr", A);
        for (var I = 0; I < m.length; I++) m[I] = null;
        return this.trigger("form-submit-notify", [this, t]),
        this
    },
    e.fn.ajaxForm = function (r) {
        if (r = r || {},
        r.delegation = r.delegation && e.isFunction(e.fn.on), !r.delegation && 0 === this.length) {
            var o = {
                s: this.selector,
                c: this.context
            };
            return !e.isReady && o.s ? (i("DOM not ready, queuing ajaxForm"), e(function () {
                e(o.s, o.c).ajaxForm(r)
            }), this) : (i("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return r.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, n).on("submit.form-plugin", this.selector, r, t).on("click.form-plugin", this.selector, r, n), this) : this.ajaxFormUnbind().bind("submit.form-plugin", r, t).bind("click.form-plugin", r, n)
    },
    e.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin")
    },
    e.fn.formToArray = function (t, n) {
        var i = [];
        if (0 === this.length) return i;
        var o, a = this[0],
        s = this.attr("id"),
        l = t ? a.getElementsByTagName("*") : a.elements;
        if (l && !/MSIE 8/.test(navigator.userAgent) && (l = e(l).get()), s && (o = e(":input[form=" + s + "]").get(), o.length && (l = (l || []).concat(o))), !l || !l.length) return i;
        var u, c, d, h, f, p, m;
        for (u = 0, p = l.length; p > u; u++) if (f = l[u], d = f.name, d && !f.disabled) if (t && a.clk && "image" == f.type) a.clk == f && (i.push({
            name: d,
            value: e(f).val(),
            type: f.type
        }), i.push({
            name: d + ".x",
            value: a.clk_x
        },
        {
            name: d + ".y",
            value: a.clk_y
        }));
        else if (h = e.fieldValue(f, !0), h && h.constructor == Array) for (n && n.push(f), c = 0, m = h.length; m > c; c++) i.push({
            name: d,
            value: h[c]
        });
        else if (r.fileapi && "file" == f.type) {
            n && n.push(f);
            var g = f.files;
            if (g.length) for (c = 0; c < g.length; c++) i.push({
                name: d,
                value: g[c],
                type: f.type
            });
            else i.push({
                name: d,
                value: "",
                type: f.type
            })
        } else null !== h && "undefined" != typeof h && (n && n.push(f), i.push({
            name: d,
            value: h,
            type: f.type,
            required: f.required
        }));
        if (!t && a.clk) {
            var v = e(a.clk),
            y = v[0];
            d = y.name,
            d && !y.disabled && "image" == y.type && (i.push({
                name: d,
                value: v.val()
            }), i.push({
                name: d + ".x",
                value: a.clk_x
            },
            {
                name: d + ".y",
                value: a.clk_y
            }))
        }
        return i
    },
    e.fn.formSerialize = function (t) {
        return e.param(this.formToArray(t))
    },
    e.fn.fieldSerialize = function (t) {
        var n = [];
        return this.each(function () {
            var i = this.name;
            if (i) {
                var r = e.fieldValue(this, t);
                if (r && r.constructor == Array) for (var o = 0,
                a = r.length; a > o; o++) n.push({
                    name: i,
                    value: r[o]
                });
                else null !== r && "undefined" != typeof r && n.push({
                    name: this.name,
                    value: r
                })
            }
        }),
        e.param(n)
    },
    e.fn.fieldValue = function (t) {
        for (var n = [], i = 0, r = this.length; r > i; i++) {
            var o = this[i],
            a = e.fieldValue(o, t);
            null === a || "undefined" == typeof a || a.constructor == Array && !a.length || (a.constructor == Array ? e.merge(n, a) : n.push(a))
        }
        return n
    },
    e.fieldValue = function (t, n) {
        var i = t.name,
        r = t.type,
        o = t.tagName.toLowerCase();
        if (void 0 === n && (n = !0), n && (!i || t.disabled || "reset" == r || "button" == r || ("checkbox" == r || "radio" == r) && !t.checked || ("submit" == r || "image" == r) && t.form && t.form.clk != t || "select" == o && -1 == t.selectedIndex)) return null;
        if ("select" == o) {
            var a = t.selectedIndex;
            if (0 > a) return null;
            for (var s = [], l = t.options, u = "select-one" == r, c = u ? a + 1 : l.length, d = u ? a : 0; c > d; d++) {
                var h = l[d];
                if (h.selected) {
                    var f = h.value;
                    if (f || (f = h.attributes && h.attributes.value && !h.attributes.value.specified ? h.text : h.value), u) return f;
                    s.push(f)
                }
            }
            return s
        }
        return e(t).val()
    },
    e.fn.clearForm = function (t) {
        return this.each(function () {
            e("input,select,textarea", this).clearFields(t)
        })
    },
    e.fn.clearFields = e.fn.clearInputs = function (t) {
        var n = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var i = this.type,
            r = this.tagName.toLowerCase();
            n.test(i) || "textarea" == r ? this.value = "" : "checkbox" == i || "radio" == i ? this.checked = !1 : "select" == r ? this.selectedIndex = -1 : "file" == i ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(i) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    },
    e.fn.resetForm = function () {
        return this.each(function () {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    },
    e.fn.enable = function (e) {
        return void 0 === e && (e = !0),
        this.each(function () {
            this.disabled = !e
        })
    },
    e.fn.selected = function (t) {
        return void 0 === t && (t = !0),
        this.each(function () {
            var n = this.type;
            if ("checkbox" == n || "radio" == n) this.checked = t;
            else if ("option" == this.tagName.toLowerCase()) {
                var i = e(this).parent("select");
                t && i[0] && "select-one" == i[0].type && i.find("option").selected(!1),
                this.selected = t
            }
        })
    },
    e.fn.ajaxSubmit.debug = !1
}),
window.onerror = function (e, t, n, i, r) { },
$("#uloginout").click(function () {
    $.cookie("uloginflag", null, {
        path: "/"
    })
});
var thisPageUrl = window.location.href;
"true" == $.cookie("uloginflag") ? loginMemue(thisPageUrl) : $.ajax({
    type: "post",
    url: "/getLoginUserInfo?v=" + Math.random(),
    dataType: "json",
    async: !0,
    success: function (e) {
        200 == e.code ? ($.cookie("uloginflag", "true", {
            path: "/"
        }), loginMemue(thisPageUrl)) : ($("#au_login").hide(), $("#un_login").show())
    }
}),
1 == $.cookie("closeAppAd") ? $("#footer-app-download-div").hide() : $("#footer-app-download-div").show(),
$("#footer_app_phone_del").click(function () {
    var e = new Date;
    e.setTime(e.getTime() + 12096e5),
    $.cookie("closeAppAd", 1, {
        path: "/",
        expires: e
    }),
    $("#footer-app-download-div").hide()
}),
function (e) {
    e.fn.hoverIntent = function (t, n, i) {
        var r = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };
        r = "object" == typeof t ? e.extend(r, t) : e.isFunction(n) ? e.extend(r, {
            over: t,
            out: n,
            selector: i
        }) : e.extend(r, {
            over: t,
            out: t,
            selector: n
        });
        var o, a, s, l, u = function (e) {
            o = e.pageX,
            a = e.pageY
        },
        c = function (t, n) {
            return n.hoverIntent_t = clearTimeout(n.hoverIntent_t),
            Math.abs(s - o) + Math.abs(l - a) < r.sensitivity ? (e(n).off("mousemove.hoverIntent", u), n.hoverIntent_s = 1, r.over.apply(n, [t])) : (s = o, l = a, n.hoverIntent_t = setTimeout(function () {
                c(t, n)
            },
            r.interval), void 0)
        },
        d = function (e, t) {
            return t.hoverIntent_t = clearTimeout(t.hoverIntent_t),
            t.hoverIntent_s = 0,
            r.out.apply(t, [e])
        },
        h = function (t) {
            var n = jQuery.extend({},
            t),
            i = this;
            i.hoverIntent_t && (i.hoverIntent_t = clearTimeout(i.hoverIntent_t)),
            "mouseenter" == t.type ? (s = n.pageX, l = n.pageY, e(i).on("mousemove.hoverIntent", u), 1 != i.hoverIntent_s && (i.hoverIntent_t = setTimeout(function () {
                c(n, i)
            },
            r.interval))) : (e(i).off("mousemove.hoverIntent", u), 1 == i.hoverIntent_s && (i.hoverIntent_t = setTimeout(function () {
                d(n, i)
            },
            r.timeout)))
        };
        return this.on({
            "mouseenter.hoverIntent": h,
            "mouseleave.hoverIntent": h
        },
        r.selector)
    }
}(jQuery),
function (e) {
    "use strict";
    var t = function () {
        var t = {
            bcClass: "sf-breadcrumb",
            menuClass: "sf-js-enabled",
            anchorClass: "sf-with-ul",
            menuArrowClass: "sf-arrows"
        },
        n = function () {
            var t = /iPhone|iPad|iPod/i.test(navigator.userAgent);
            return t && e(window).load(function () {
                e("body").children().on("click", e.noop)
            }),
            t
        }(),
        i = function () {
            var e = document.documentElement.style;
            return "behavior" in e && "fill" in e && /iemobile/i.test(navigator.userAgent)
        }(),
        r = function (e, n) {
            var i = t.menuClass;
            n.cssArrows && (i += " " + t.menuArrowClass),
            e.toggleClass(i)
        },
        o = function (n, i) {
            return n.find("li." + i.pathClass).slice(0, i.pathLevels).addClass(i.hoverClass + " " + t.bcClass).filter(function () {
                return e(this).children(i.popUpSelector).hide().show().length
            }).removeClass(i.pathClass)
        },
        a = function (e) {
            e.children("a").toggleClass(t.anchorClass)
        },
        s = function (e) {
            var t = e.css("ms-touch-action");
            t = "pan-y" === t ? "auto" : "pan-y",
            e.css("ms-touch-action", t)
        },
        l = function (t, r) {
            var o = "li:has(" + r.popUpSelector + ")";
            e.fn.hoverIntent && !r.disableHI ? t.hoverIntent(c, d, o) : t.on("mouseenter.superfish", o, c).on("mouseleave.superfish", o, d);
            var a = "MSPointerDown.superfish";
            n || (a += " touchend.superfish"),
            i && (a += " mousedown.superfish"),
            t.on("focusin.superfish", "li", c).on("focusout.superfish", "li", d).on(a, "a", r, u)
        },
        u = function (t) {
            var n = e(this),
            i = n.siblings(t.data.popUpSelector);
            i.length > 0 && i.is(":hidden") && (n.one("click.superfish", !1), "MSPointerDown" === t.type ? n.trigger("focus") : e.proxy(c, n.parent("li"))())
        },
        c = function () {
            var t = e(this),
            n = p(t);
            clearTimeout(n.sfTimer),
            t.siblings().superfish("hide").end().superfish("show")
        },
        d = function () {
            var t = e(this),
            i = p(t);
            n ? e.proxy(h, t, i)() : (clearTimeout(i.sfTimer), i.sfTimer = setTimeout(e.proxy(h, t, i), i.delay))
        },
        h = function (t) {
            t.retainPath = e.inArray(this[0], t.$path) > -1,
            this.superfish("hide"),
            this.parents("." + t.hoverClass).length || (t.onIdle.call(f(this)), t.$path.length && e.proxy(c, t.$path)())
        },
        f = function (e) {
            return e.closest("." + t.menuClass)
        },
        p = function (e) {
            return f(e).data("sf-options")
        };
        return {
            hide: function (e) {
                if (this.length) {
                    var t = this,
                    n = p(t);
                    if (!n) return this;
                    var i = n.retainPath === !0 ? n.$path : "",
                    r = t.find("li." + n.hoverClass).add(this).not(i).removeClass(n.hoverClass).children(n.popUpSelector),
                    o = n.speedOut;
                    e && (r.show(), o = 0),
                    n.retainPath = !1,
                    n.onBeforeHide.call(r),
                    r.hide(0)
                }
                return this
            },
            show: function () {
                var e = p(this);
                if (!e) return this;
                if (e.hoverStyle) {
                    var t = this.parent().parent(),
                    n = this.children("ul"),
                    i = t.height(),
                    r = n.height();
                    if (r > i) {
                        var o = this.innerHeight(),
                        a = t.children().children().index(this),
                        s = o * a;
                        e.toTopMargin && (s += e.toTopMargin),
                        n.css({})
                    } else this.children("ul").css(e.hoverStyle)
                }
                var l = this.addClass(e.hoverClass),
                u = l.children(e.popUpSelector);
                return e.onBeforeShow.call(u),
                u.show(0),
                this
            },
            destroy: function () {
                return this.each(function () {
                    var n, i = e(this),
                    o = i.data("sf-options");
                    return o ? (n = i.find(o.popUpSelector).parent("li"), clearTimeout(o.sfTimer), r(i, o), a(n), s(i), i.off(".superfish").off(".hoverIntent"), n.children(o.popUpSelector).attr("style",
                    function (e, t) {
                        return t.replace(/display[^;]+;?/g, "")
                    }), o.$path.removeClass(o.hoverClass + " " + t.bcClass).addClass(o.pathClass), i.find("." + o.hoverClass).removeClass(o.hoverClass), o.onDestroy.call(i), void i.removeData("sf-options")) : !1
                })
            },
            init: function (n) {
                return this.each(function () {
                    var i = e(this);
                    if (i.data("sf-options")) return !1;
                    var u = e.extend({},
                    e.fn.superfish.defaults, n),
                    c = i.find(u.popUpSelector).parent("li");
                    u.$path = o(i, u),
                    i.data("sf-options", u),
                    r(i, u),
                    a(c),
                    s(i),
                    l(i, u),
                    c.not("." + t.bcClass).superfish("hide", !0),
                    u.onInit.call(this)
                })
            }
        }
    }();
    e.fn.superfish = function (n, i) {
        return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? e.error("Method " + n + " does not exist on jQuery.fn.superfish") : t.init.apply(this, arguments)
    },
    e.fn.superfish.defaults = {
        popUpSelector: "ul,.sf-mega",
        hoverClass: "sfHover",
        pathClass: "NavDefault",
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: "normal",
        speedOut: "normal",
        cssArrows: !0,
        disableHI: !1,
        onInit: e.noop,
        onBeforeShow: e.noop,
        onShow: e.noop,
        onBeforeHide: e.noop,
        onHide: e.noop,
        onIdle: e.noop,
        onDestroy: e.noop,
        toTopMargin: 16
    },
    e.fn.extend({
        hideSuperfishUl: t.hide,
        showSuperfishUl: t.show
    })
}(jQuery),
$("#dropdown_menu").superfish({
    speed: "fast",
    speedOut: "fast",
    delay: "100",
    disableHI: !0
}),
$("li #weixin_down").mouseenter(function () {
    $(this).parent().css("border-bottom", "none"),
    $(this).next().show(),
    $(this).addClass("wx-hover")
}),
$("#weixin_block").mouseleave(function () {
    $("#weixin_appear").hide(),
    $("#weixin_down").removeClass("wx-hover")
}),
$("#phone_down").mouseenter(function () {
    $(this).parent().css("border-bottom", "none"),
    $(this).next().show(),
    $(this).addClass("wx-hover")
}),
$("#phone_block").mouseleave(function () {
    $("#phone_appear").hide(),
    $("#phone_down").removeClass("wx-hover")
});
var moreSelected = !0,
$themeChildren = $(".header_themlist").children();
if ($themeChildren.each(function () {
    var e = $(this).find("a").attr("rel"),
    t = $("#themeEname").val();
    t && t === e && (moreSelected = !1, $themeChildren.removeClass("selected"), $(this).addClass("selected"))
}), moreSelected && $("#themeEname").length > 0 && ($themeChildren.removeClass("selected"), $(".moreitems").find(".more").addClass("selected")), $("#isHomeBander").val()) $themeChildren.eq(0).addClass("selected");
else {
    var $categorys = $(".categorys");
    $categorys.css("cursor", "pointer"),
    $categorys.addClass("down"),
    $categorys.mouseenter(function () {
        $(this).removeClass("down"),
        $(this).addClass("up"),
        $(this).find(".continents").show()
    }),
    $categorys.mouseleave(function () {
        $(this).addClass("down"),
        $(this).removeClass("up"),
        $(this).find(".continents").hide()
    })
} -1 != window.location.pathname.indexOf("sales.html") && ($themeChildren.removeClass("selected"), $themeChildren.removeClass("hover"), $(".header_themlist").find(".flashsales_hot").addClass("selected")),
$(".header_tel_top").mouseenter(function () {
    $(this).children().eq(0).addClass("tel-hover"),
    $(this).children().eq(1).show()
}),
$(".header_tel_top").mouseleave(function () {
    $(this).children().eq(0).removeClass("tel-hover"),
    $(this).children().eq(1).hide()
}),
$(".moreitems").mouseenter(function () {
    var e = $(this).children();
    e.eq(1).show(),
    e.eq(0).addClass("up")
}),
$(".moreitems").mouseleave(function () {
    var e = $(this).children();
    e.eq(1).hide(),
    e.eq(0).removeClass("up")
}),
$(".header_themlist").children().each(function () {
    var e = $(this).find(".navitems_content");
    $(this).on("mouseenter",
    function () {
        $(this).addClass("hover"),
        e.show()
    }),
    $(this).on("mouseleave",
    function () {
        e.hide(),
        $(this).removeClass("hover")
    })
}),
Array.prototype.indexOf || (Array.prototype.indexOf = function (e) {
    var t = this.length >>> 0,
    n = Number(arguments[1]) || 0;
    for (n = 0 > n ? Math.ceil(n) : Math.floor(n), 0 > n && (n += t) ; t > n; n++) if (n in this && this[n] === e) return n;
    return -1
}),
$("#weixin").mouseover(function () {
    $(".footer_wxin").fadeIn("slow")
}),
$("#weixin").mouseout(function () {
    $(".footer_wxin").fadeOut("slow")
}),
$("#KeFuBtn").mouseenter(function () {
    $(this).removeClass("KeFuBox"),
    $(this).addClass("KeFuBoxAct")
}),
$("#KeFuBtn").mouseleave(function () {
    $(this).removeClass("KeFuBoxAct"),
    $(this).addClass("KeFuBox")
}),
$(".BackToTop").click(function () {
    $("body,html").animate({
        scrollTop: 0
    },
    800)
}),
$(window).scroll(function () {
    $(window).scrollTop() < 300 ? $(".RightBox").hide() : $(".RightBox").show()
}),
$(".ACloseBtn").click(function () {
    $(".AdviseDone").hide(),
    $(".AdviseDoneThird").hide(),
    $(".AdviseDoneSecond").hide(),
    $(".AdviseUp").show(),
    $(".AdviseGroup").hide()
}),
$("#aSubmitBtn").click(function () {
    var e = $(".AdviseText").val().trim();
    return "" == e || void 0 == e ? ($(".VoidLimit").fadeIn(100), setTimeout(function () {
        $(".VoidLimit").hide()
    },
    1e3), !1) : e.length > 500 ? ($(".WordLimit").fadeIn(100), setTimeout(function () {
        $(".WordLimit").hide()
    },
    1e3), !1) : void $.ajax({
        url: "/user/addsuggestion?content=" + e,
        success: function (e) {
            var e = $.parseJSON(e),
            t = e.code;
            200 == t ? ($(".AdviseUp").hide(), $(".AdviseDone").show()) : 600 == t ? ($(".AdviseUp").hide(), $(".AdviseDoneThird").show()) : ($(".AdviseUp").hide(), $(".AdviseDoneSecond").show())
        }
    })
}),
$(".Advise").click(function () {
    $(".AdviseGroup").fadeIn(100)
}),
Function.prototype.delegate = function () {
    var e = this,
    t = this.scope,
    n = arguments,
    i = arguments.length,
    r = "function";
    return function () {
        for (var o = arguments.length,
        a = i > o ? i : o, s = 0; a > s; s++) arguments[s] && (n[s] = arguments[s]);
        n.length = a;
        for (var s = 0,
        l = n.length; l > s; s++) {
            var u = n[s];
            u && typeof u == r && 1 == u.late && (n[s] = u.apply(t || this, n))
        }
        return e.apply(t || this, n)
    }
};
var simplified = "啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸尽劲荆兢觉决诀绝均菌钧军君峻俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座",
traditional = "啊阿埃挨哎唉哀皚癌藹矮艾礙愛隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翺襖傲奧懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙壩霸罷爸白柏百擺佰敗拜稗斑班搬扳般頒板版扮拌伴瓣半辦絆邦幫梆榜膀綁棒磅蚌鎊傍謗苞胞包褒剝薄雹保堡飽寶抱報暴豹鮑爆杯碑悲卑北輩背貝鋇倍狽備憊焙被奔苯本笨崩繃甭泵蹦迸逼鼻比鄙筆彼碧蓖蔽畢斃毖幣庇痹閉敝弊必辟壁臂避陛鞭邊編貶扁便變卞辨辯辮遍標彪膘表鼈憋別癟彬斌瀕濱賓擯兵冰柄丙秉餅炳病並玻菠播撥缽波博勃搏鉑箔伯帛舶脖膊渤泊駁捕蔔哺補埠不布步簿部怖擦猜裁材才財睬踩采彩菜蔡餐參蠶殘慚慘燦蒼艙倉滄藏操糙槽曹草廁策側冊測層蹭插叉茬茶查碴搽察岔差詫拆柴豺攙摻蟬饞讒纏鏟産闡顫昌猖場嘗常長償腸廠敞暢唱倡超抄鈔朝嘲潮巢吵炒車扯撤掣徹澈郴臣辰塵晨忱沈陳趁襯撐稱城橙成呈乘程懲澄誠承逞騁秤吃癡持匙池遲弛馳恥齒侈尺赤翅斥熾充衝沖蟲崇寵抽酬疇躊稠愁籌仇綢瞅醜臭初出櫥廚躇鋤雛滁除楚礎儲矗搐觸處揣川穿椽傳船喘串瘡窗幢床闖創吹炊捶錘垂春椿醇唇淳純蠢戳綽疵茨磁雌辭慈瓷詞此刺賜次聰蔥囪匆從叢湊粗醋簇促躥篡竄摧崔催脆瘁粹淬翠村存寸磋撮搓措挫錯搭達答瘩打大呆歹傣戴帶殆代貸袋待逮怠耽擔丹單鄲撣膽旦氮但憚淡誕彈蛋當擋黨蕩檔刀搗蹈倒島禱導到稻悼道盜德得的蹬燈登等瞪凳鄧堤低滴迪敵笛狄滌翟嫡抵底地蒂第帝弟遞締顛掂滇碘點典靛墊電佃甸店惦奠澱殿碉叼雕凋刁掉吊釣調跌爹碟蝶叠諜疊丁盯叮釘頂鼎錠定訂丟東冬董懂動棟侗恫凍洞兜抖鬥陡豆逗痘都督毒犢獨讀堵睹賭杜鍍肚度渡妒端短鍛段斷緞堆兌隊對墩噸蹲敦頓囤鈍盾遁掇哆多奪垛躲朵跺舵剁惰墮蛾峨鵝俄額訛娥惡厄扼遏鄂餓恩而兒耳爾餌洱二貳發罰筏伐乏閥法琺藩帆番翻樊礬釩繁凡煩反返範販犯飯泛坊芳方肪房防妨仿訪紡放菲非啡飛肥匪誹吠肺廢沸費芬酚吩氛分紛墳焚汾粉奮份忿憤糞豐封楓蜂峰鋒風瘋烽逢馮縫諷奉鳳佛否夫敷膚孵扶拂輻幅氟符伏俘服浮涪福袱弗甫撫輔俯釜斧脯腑府腐赴副覆賦複傅付阜父腹負富訃附婦縛咐噶嘎該改概鈣蓋溉幹甘杆柑竿肝趕感稈敢贛岡剛鋼缸肛綱崗港杠篙臯高膏羔糕搞鎬稿告哥歌擱戈鴿胳疙割革葛格蛤閣隔鉻個各給根跟耕更庚羹埂耿梗工攻功恭龔供躬公宮弓鞏汞拱貢共鈎勾溝苟狗垢構購夠辜菇咕箍估沽孤姑鼓古蠱骨谷股故顧固雇刮瓜剮寡挂褂乖拐怪棺關官冠觀管館罐慣灌貫光廣逛瑰規圭矽歸龜閨軌鬼詭癸桂櫃跪貴劊輥滾棍鍋郭國果裹過哈骸孩海氦亥害駭酣憨邯韓含涵寒函喊罕翰撼捍旱憾悍焊汗漢夯杭航壕嚎豪毫郝好耗號浩呵喝荷菏核禾和何合盒貉閡河涸赫褐鶴賀嘿黑痕很狠恨哼亨橫衡恒轟哄烘虹鴻洪宏弘紅喉侯猴吼厚候後呼乎忽瑚壺葫胡蝴狐糊湖弧虎唬護互滬戶花嘩華猾滑畫劃化話槐徊懷淮壞歡環桓還緩換患喚瘓豢煥渙宦幻荒慌黃磺蝗簧皇凰惶煌晃幌恍謊灰揮輝徽恢蛔回毀悔慧卉惠晦賄穢會燴彙諱誨繪葷昏婚魂渾混豁活夥火獲或惑霍貨禍擊圾基機畸稽積箕肌饑迹激譏雞姬績緝吉極棘輯籍集及急疾汲即嫉級擠幾脊己薊技冀季伎祭劑悸濟寄寂計記既忌際妓繼紀嘉枷夾佳家加莢頰賈甲鉀假稼價架駕嫁殲監堅尖箋間煎兼肩艱奸緘繭檢柬堿鹼揀撿簡儉剪減薦檻鑒踐賤見鍵箭件健艦劍餞漸濺澗建僵姜將漿江疆蔣槳獎講匠醬降蕉椒礁焦膠交郊澆驕嬌嚼攪鉸矯僥腳狡角餃繳絞剿教酵轎較叫窖揭接皆稭街階截劫節莖睛晶鯨京驚精粳經井警景頸靜境敬鏡徑痙靖竟競淨炯窘揪究糾玖韭久灸九酒廄救舊臼舅咎就疚鞠拘狙疽居駒菊局咀矩舉沮聚拒據巨具距踞鋸俱句懼炬劇捐鵑娟倦眷卷絹撅攫抉掘倔爵桔傑捷睫竭潔結解姐戒藉芥界借介疥誡屆巾筋斤金今津襟緊錦僅謹進靳晉禁近燼浸盡勁荊兢覺決訣絕均菌鈞軍君峻俊竣浚郡駿喀咖卡咯開揩楷凱慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕顆科殼咳可渴克刻客課肯啃墾懇坑吭空恐孔控摳口扣寇枯哭窟苦酷庫褲誇垮挎跨胯塊筷儈快寬款匡筐狂框礦眶曠況虧盔巋窺葵奎魁傀饋愧潰坤昆捆困括擴廓闊垃拉喇蠟臘辣啦萊來賴藍婪欄攔籃闌蘭瀾讕攬覽懶纜爛濫琅榔狼廊郎朗浪撈勞牢老佬姥酪烙澇勒樂雷鐳蕾磊累儡壘擂肋類淚棱楞冷厘梨犁黎籬狸離漓理李裏鯉禮莉荔吏栗麗厲勵礫曆利傈例俐痢立粒瀝隸力璃哩倆聯蓮連鐮廉憐漣簾斂臉鏈戀煉練糧涼梁粱良兩輛量晾亮諒撩聊僚療燎寥遼潦了撂鐐廖料列裂烈劣獵琳林磷霖臨鄰鱗淋凜賃吝拎玲菱零齡鈴伶羚淩靈陵嶺領另令溜琉榴硫餾留劉瘤流柳六龍聾嚨籠窿隆壟攏隴樓婁摟簍漏陋蘆盧顱廬爐擄鹵虜魯麓碌露路賂鹿潞祿錄陸戮驢呂鋁侶旅履屢縷慮氯律率濾綠巒攣孿灤卵亂掠略掄輪倫侖淪綸論蘿螺羅邏鑼籮騾裸落洛駱絡媽麻瑪碼螞馬罵嘛嗎埋買麥賣邁脈瞞饅蠻滿蔓曼慢漫謾芒茫盲氓忙莽貓茅錨毛矛鉚卯茂冒帽貌貿麽玫枚梅酶黴煤沒眉媒鎂每美昧寐妹媚門悶們萌蒙檬盟錳猛夢孟眯醚靡糜迷謎彌米秘覓泌蜜密冪棉眠綿冕免勉娩緬面苗描瞄藐秒渺廟妙蔑滅民抿皿敏憫閩明螟鳴銘名命謬摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌謀牟某拇牡畝姆母墓暮幕募慕木目睦牧穆拿哪呐鈉那娜納氖乃奶耐奈南男難囊撓腦惱鬧淖呢餒內嫩能妮霓倪泥尼擬你匿膩逆溺蔫拈年碾攆撚念娘釀鳥尿捏聶孽齧鑷鎳涅您檸獰凝甯擰濘牛扭鈕紐膿濃農弄奴努怒女暖虐瘧挪懦糯諾哦歐鷗毆藕嘔偶漚啪趴爬帕怕琶拍排牌徘湃派攀潘盤磐盼畔判叛乓龐旁耪胖抛咆刨炮袍跑泡呸胚培裴賠陪配佩沛噴盆砰抨烹澎彭蓬棚硼篷膨朋鵬捧碰坯砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬篇偏片騙飄漂瓢票撇瞥拼頻貧品聘乒坪蘋萍平憑瓶評屏坡潑頗婆破魄迫粕剖撲鋪仆莆葡菩蒲埔樸圃普浦譜曝瀑期欺棲戚妻七淒漆柒沏其棋奇歧畦崎臍齊旗祈祁騎起豈乞企啓契砌器氣迄棄汽泣訖掐洽牽扡釺鉛千遷簽仟謙乾黔錢鉗前潛遣淺譴塹嵌欠歉槍嗆腔羌牆薔強搶橇鍬敲悄橋瞧喬僑巧鞘撬翹峭俏竅切茄且怯竊欽侵親秦琴勤芹擒禽寢沁青輕氫傾卿清擎晴氰情頃請慶瓊窮秋丘邱球求囚酋泅趨區蛆曲軀屈驅渠取娶齲趣去圈顴權醛泉全痊拳犬券勸缺炔瘸卻鵲榷確雀裙群然燃冉染瓤壤攘嚷讓饒擾繞惹熱壬仁人忍韌任認刃妊紉扔仍日戎茸蓉榮融熔溶容絨冗揉柔肉茹蠕儒孺如辱乳汝入褥軟阮蕊瑞銳閏潤若弱撒灑薩腮鰓塞賽三三傘散桑嗓喪搔騷掃嫂瑟色澀森僧莎砂殺刹沙紗傻啥煞篩曬珊苫杉山刪煽衫閃陝擅贍膳善汕扇繕墒傷商賞晌上尚裳梢捎稍燒芍勺韶少哨邵紹奢賒蛇舌舍赦攝射懾涉社設砷申呻伸身深娠紳神沈審嬸甚腎慎滲聲生甥牲升繩省盛剩勝聖師失獅施濕詩屍虱十石拾時什食蝕實識史矢使屎駛始式示士世柿事拭誓逝勢是嗜噬適仕侍釋飾氏市恃室視試收手首守壽授售受瘦獸蔬樞梳殊抒輸叔舒淑疏書贖孰熟薯暑曙署蜀黍鼠屬術述樹束戍豎墅庶數漱恕刷耍摔衰甩帥栓拴霜雙爽誰水睡稅吮瞬順舜說碩朔爍斯撕嘶思私司絲死肆寺嗣四伺似飼巳松聳慫頌送宋訟誦搜艘擻嗽蘇酥俗素速粟僳塑溯宿訴肅酸蒜算雖隋隨綏髓碎歲穗遂隧祟孫損筍蓑梭唆縮瑣索鎖所塌他它她塔獺撻蹋踏胎苔擡台泰酞太態汰坍攤貪癱灘壇檀痰潭譚談坦毯袒碳探歎炭湯塘搪堂棠膛唐糖倘躺淌趟燙掏濤滔縧萄桃逃淘陶討套特藤騰疼謄梯剔踢銻提題蹄啼體替嚏惕涕剃屜天添填田甜恬舔腆挑條迢眺跳貼鐵帖廳聽烴汀廷停亭庭挺艇通桐酮瞳同銅彤童桶捅筒統痛偷投頭透凸禿突圖徒途塗屠土吐兔湍團推頹腿蛻褪退吞屯臀拖托脫鴕陀馱駝橢妥拓唾挖哇蛙窪娃瓦襪歪外豌彎灣玩頑丸烷完碗挽晚皖惋宛婉萬腕汪王亡枉網往旺望忘妄威巍微危韋違桅圍唯惟爲濰維葦萎委偉僞尾緯未蔚味畏胃餵魏位渭謂尉慰衛瘟溫蚊文聞紋吻穩紊問嗡翁甕撾蝸渦窩我斡臥握沃巫嗚鎢烏汙誣屋無蕪梧吾吳毋武五捂午舞伍侮塢戊霧晤物勿務悟誤昔熙析西硒矽晰嘻吸錫犧稀息希悉膝夕惜熄烯溪汐犀檄襲席習媳喜銑洗系隙戲細瞎蝦匣霞轄暇峽俠狹下廈夏嚇掀鍁先仙鮮纖鹹賢銜舷閑涎弦嫌顯險現獻縣腺餡羨憲陷限線相廂鑲香箱襄湘鄉翔祥詳想響享項巷橡像向象蕭硝霄削哮囂銷消宵淆曉小孝校肖嘯笑效楔些歇蠍鞋協挾攜邪斜脅諧寫械卸蟹懈泄瀉謝屑薪芯鋅欣辛新忻心信釁星腥猩惺興刑型形邢行醒幸杏性姓兄凶胸匈洶雄熊休修羞朽嗅鏽秀袖繡墟戌需虛噓須徐許蓄酗敘旭序畜恤絮婿緒續軒喧宣懸旋玄選癬眩絢靴薛學穴雪血勳熏循旬詢尋馴巡殉汛訓訊遜迅壓押鴉鴨呀丫芽牙蚜崖衙涯雅啞亞訝焉咽閹煙淹鹽嚴研蜒岩延言顔閻炎沿奄掩眼衍演豔堰燕厭硯雁唁彥焰宴諺驗殃央鴦秧楊揚佯瘍羊洋陽氧仰癢養樣漾邀腰妖瑤搖堯遙窯謠姚咬舀藥要耀椰噎耶爺野冶也頁掖業葉曳腋夜液一壹醫揖銥依伊衣頤夷遺移儀胰疑沂宜姨彜椅蟻倚已乙矣以藝抑易邑屹億役臆逸肄疫亦裔意毅憶義益溢詣議誼譯異翼翌繹茵蔭因殷音陰姻吟銀淫寅飲尹引隱印英櫻嬰鷹應纓瑩螢營熒蠅迎贏盈影穎硬映喲擁傭臃癰庸雍踴蛹詠泳湧永恿勇用幽優悠憂尤由郵鈾猶油遊酉有友右佑釉誘又幼迂淤于盂榆虞愚輿余俞逾魚愉渝漁隅予娛雨與嶼禹宇語羽玉域芋郁籲遇喻峪禦愈欲獄育譽浴寓裕預豫馭鴛淵冤元垣袁原援轅園員圓猿源緣遠苑願怨院曰約越躍鑰嶽粵月悅閱耘雲鄖勻隕允運蘊醞暈韻孕匝砸雜栽哉災宰載再在咱攢暫贊贓髒葬遭糟鑿藻棗早澡蚤躁噪造皂竈燥責擇則澤賊怎增憎曾贈紮喳渣劄軋鍘閘眨柵榨咋乍炸詐摘齋宅窄債寨瞻氈詹粘沾盞斬輾嶄展蘸棧占戰站湛綻樟章彰漳張掌漲杖丈帳賬仗脹瘴障招昭找沼趙照罩兆肇召遮折哲蟄轍者鍺蔗這浙珍斟真甄砧臻貞針偵枕疹診震振鎮陣蒸掙睜征猙爭怔整拯正政幀症鄭證芝枝支吱蜘知肢脂汁之織職直植殖執值侄址指止趾只旨紙志摯擲至致置幟峙制智秩稚質炙痔滯治窒中盅忠鍾衷終種腫重仲衆舟周州洲謅粥軸肘帚咒皺宙晝驟珠株蛛朱豬諸誅逐竹燭煮拄矚囑主著柱助蛀貯鑄築住注祝駐抓爪拽專磚轉撰賺篆樁莊裝妝撞壯狀椎錐追贅墜綴諄准捉拙卓桌琢茁酌啄著灼濁茲咨資姿滋淄孜紫仔籽滓子自漬字鬃棕蹤宗綜總縱鄒走奏揍租足卒族祖詛阻組鑽纂嘴醉最罪尊遵昨左佐柞做作坐座",
traditionalized = translateText.delegate(null, !0),
simplized = translateText.delegate(null, !1),
cookieName = "language";
window.toChinese = function () {
    Cookie.set(cookieName, "tw"),
    window.location.reload()
},
window.toSimpleChinese = function () {
    Cookie.set(cookieName, "cn"),
    window.location.reload()
};
var Cookie = {
    set: function (e, t) {
        var n = new Date;
        n.setDate(n.getDate() + 6e5),
        document.cookie = e + "=" + escape(t) + ";path=/;expires=" + n.toGMTString()
    },
    del: function (e) {
        document.cookie = e + "=;path=/;expires=" + new Date(0).toGMTString()
    },
    get: function (e) {
        var t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
        return null != t ? unescape(t[2]) : null
    }
};
initCurreny(),
initLanguage(),
$(function () {
    initLanguage()
}),
$("#zh_cn").click(function () {
    window.toSimpleChinese()
}),
$("#zh_tw").click(function () {
    window.toChinese()
}),
$("#currency li a").each(function () {
    $(this).click(function () {
        var e = $(this).attr("data-val");
        $.cookie("CurrencyType", null, {
            path: "/"
        }),
        $.cookie("CurrencyType", e, {
            path: "/",
            expires: 365
        }),
        window.location.reload()
    })
}),
String.prototype.startWith = function (e) {
    var t = new RegExp("^" + e);
    return t.test(this)
},
String.prototype.replaceWith = function (e, t) {
    var n = new RegExp(e, "g"),
    i = this.replace(n, t);
    return i
},
String.prototype.Contain = function (e) {
    if (e) if (e.constructor == Array) for (var t = 0; t < e.length; t++) for (var n = 0; n < this.length; n++) {
        var i, r = e[t];
        if (r && (i = r.length > 1 ? this.substr(n, r.length) : this.substr(n, 1), r == i)) return !0
    } else if (e.constructor == String) {
        for (var t = 0; t < this.length; t++) if (this.length - t >= e.length && this.substr(t, e.length) == e) return !0
    } else layer.msg("参数有误！", 1, 8, "");
    return !1
},
String.prototype.endWith = function (e) {
    var t = new RegExp(e + "$");
    return t.test(this)
},
"function" != typeof String.prototype.trim && (String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "")
}),
!
function (e, t) {
    "use strict";
    var n, i, r = !1,
    o = "res/js/layer/",
    a = {
        hosts: function () {
            var e = location.href.match(/\:\d+/);
            return e = e ? e[0] : "",
            "//" + document.domain + e + "/"
        }(),
        getPath: function () {
            var e = document.scripts || n("script"),
            t = e[e.length - 1].src;
            return r ? t.substring(0, t.lastIndexOf("/") + 1) : this.hosts + o
        }
    };
    e.layer = {
        v: "1.7.0",
        ie6: !-[1] && !e.XMLHttpRequest,
        index: 0,
        path: a.getPath(),
        use: function (e, t) {
            var i = n("head")[0],
            e = e.replace(/\s/g, ""),
            r = /\.css$/.test(e),
            o = document.createElement(r ? "link" : "script"),
            a = e.replace(/\.|\//g, "");
            r && (o.setAttribute("type", "text/css"), o.setAttribute("rel", "stylesheet")),
            o.setAttribute(r ? "href" : "src", layer.path + e),
            o.setAttribute("id", a),
            n("#" + a)[0] || i.appendChild(o),
            n(o).ready(function () {
                t && t()
            })
        },
        ready: function (e) {
            return layer.use("skin/layer.css", e)
        },
        alert: function (e, t, i, r) {
            return n.layer({
                dialog: {
                    msg: e,
                    type: t,
                    yes: r
                },
                title: i,
                area: ["auto", "auto"]
            })
        },
        confirm: function (e, t, i, r) {
            return n.layer({
                dialog: {
                    msg: e,
                    type: 4,
                    btns: 2,
                    yes: t,
                    no: r
                },
                title: i
            })
        },
        msg: function (e, i, r, o) {
            var a, s = {
                title: !1,
                closeBtn: !1
            };
            return ("" == e || e == t) && (e = "&nbsp;"),
            i === t && (i = 2),
            "number" == typeof r ? a = r : (r = r || {},
            a = r.type, s.success = function () {
                layer.shift(r.rate)
            },
            s.shade = r.shade),
            s.time = i,
            s.dialog = {
                msg: e,
                type: a
            },
            s.end = "function" == typeof r ? r : o,
            n.layer(s)
        },
        load: function (e, t) {
            return "string" == typeof e ? this.msg(e, 0, 16) : n.layer({
                time: e,
                loading: {
                    type: t
                },
                bgcolor: t ? "#fff" : "",
                shade: [.1, "#000", !!t],
                border: [7, .3, "#000", !(3 === t || !t)],
                type: 3,
                title: ["", !1],
                closeBtn: [0, !1]
            })
        },
        tips: function (e, t, i, r, o, a) {
            var s = {
                type: 4,
                shade: !1,
                success: function (e) {
                    this.closeBtn || e.find(".xubox_tips").css({
                        "padding-right": 10
                    })
                },
                bgcolor: "",
                tips: {
                    msg: e,
                    follow: t
                }
            };
            return i = i || {},
            s.time = i.time || i,
            s.closeBtn = i.closeBtn || !1,
            s.maxWidth = i.maxWidth || r,
            s.tips.guide = i.guide || o,
            s.tips.style = i.style || a,
            n.layer(s)
        }
    };
    var s = function (e) {
        var t = this.config;
        layer.index++,
        this.index = layer.index,
        this.config = n.extend({},
        t, e),
        this.config.dialog = n.extend({},
        t.dialog, e.dialog),
        this.config.page = n.extend({},
        t.page, e.page),
        this.config.iframe = n.extend({},
        t.iframe, e.iframe),
        this.config.loading = n.extend({},
        t.loading, e.loading),
        this.config.tips = n.extend({},
        t.tips, e.tips),
        this.creat()
    };
    s.pt = s.prototype,
    s.pt.config = {
        type: 0,
        shade: [.3, "#000", !0],
        shadeClose: !1,
        fix: !0,
        move: [".xubox_title", !0],
        moveOut: !1,
        title: ["信息", !0],
        offset: ["200px", "50%"],
        area: ["310px", "auto"],
        closeBtn: [0, !0],
        time: 0,
        bgcolor: "#fff",
        border: [8, .3, "#000", !0],
        zIndex: 19891014,
        maxWidth: 400,
        dialog: {
            btns: 1,
            btn: ["确定", "取消"],
            type: 3,
            msg: "",
            yes: function (e) {
                layer.close(e)
            },
            no: function (e) {
                layer.close(e)
            }
        },
        page: {
            dom: "#xulayer",
            html: "",
            url: ""
        },
        iframe: {
            src: "http://sentsin.com"
        },
        loading: {
            type: 0
        },
        tips: {
            msg: "",
            follow: "",
            guide: 0,
            isGuide: !0,
            style: ["background-color:#FF9900; color:#fff;", "#FF9900"]
        },
        success: function (e) { },
        close: function (e) {
            layer.close(e)
        },
        end: function () { }
    },
    s.pt.type = ["dialog", "page", "iframe", "loading", "tips"],
    s.pt.space = function (e) {
        var e = e || "",
        t = this.index,
        n = this.config,
        i = n.dialog,
        r = this.dom,
        o = -1 === i.type ? "" : '<span class="xubox_msg xulayer_png32 xubox_msgico xubox_msgtype' + i.type + '"></span>',
        a = ['<div class="xubox_dialog">' + o + '<span class="xubox_msg xubox_text" style="' + (o ? "" : "padding-left:20px") + '">' + i.msg + "</span></div>", '<div class="xubox_page">' + e + "</div>", '<iframe allowtransparency="true" id="' + r.ifr + t + '" name="' + r.ifr + t + '" onload="$(this).removeClass(\'xubox_load\');" class="' + r.ifr + '" frameborder="0" src="' + n.iframe.src + '"></iframe>', '<span class="xubox_loading xubox_loading_' + n.loading.type + '"></span>', '<div class="xubox_tips" style="' + n.tips.style[0] + '"><div class="xubox_tipsMsg">' + n.tips.msg + '</div><i class="layerTipsG"></i></div>'],
        s = "",
        l = "",
        u = n.zIndex + t,
        c = "z-index:" + u + "; background-color:" + n.shade[1] + "; opacity:" + n.shade[0] + "; filter:alpha(opacity=" + 100 * n.shade[0] + ");";
        n.shade[2] && (s = '<div times="' + t + '" id="xubox_shade' + t + '" class="xubox_shade" style="' + c + '"></div>'),
        n.zIndex = u;
        var d = "",
        h = "",
        f = "z-index:" + (u - 1) + ";  background-color: " + n.border[2] + "; opacity:" + n.border[1] + "; filter:alpha(opacity=" + 100 * n.border[1] + "); top:-" + n.border[0] + "px; left:-" + n.border[0] + "px;";
        n.border[3] && (l = '<div id="xubox_border' + t + '" class="xubox_border" style="' + f + '"></div>'),
        n.closeBtn[1] && (h = '<a class="xubox_close xulayer_png32 xubox_close' + n.closeBtn[0] + '" href="javascript:;"></a>'),
        n.title[1] && (d = '<h2 class="xubox_title"><em>' + n.title[0] + "</em></h2>");
        var p = '<div times="' + t + '" showtime="' + n.time + '" style="z-index:' + u + '" id="' + r.lay + t + '" class="' + r.lay + '"><div style="background-color:' + n.bgcolor + "; z-index:" + u + '" class="xubox_main">' + a[n.type] + d + h + '<span class="xubox_botton"></span></div>' + l + "</div>";
        return [s, p]
    },
    s.pt.dom = {
        lay: "xubox_layer",
        ifr: "xubox_iframe"
    },
    s.pt.creat = function () {
        var e = this,
        t = "",
        r = this.config,
        o = r.dialog,
        a = e.config.title,
        s = e.dom,
        l = e.index;
        a.constructor === Array || (e.config.title = [a, !0]),
        a === !1 && (e.config.title = [a, !1]);
        var u = r.page,
        c = n("body"),
        d = function (n) {
            var n = n || "";
            t = e.space(n),
            c.append(t[0])
        };
        switch (r.type) {
            case 1:
                if ("" !== u.html) d('<div class="xuboxPageHtml">' + u.html + "</div>"),
                c.append(t[1]);
                else if ("" !== u.url) d('<div class="xuboxPageHtml" id="xuboxPageHtml' + l + '">' + u.html + "</div>"),
                c.append(t[1]),
                n.get(u.url,
                function (e) {
                    n("#xuboxPageHtml" + l).html(e),
                    u.ok && u.ok(e)
                });
                else {
                    if (0 != n(u.dom).parents(".xubox_page").length) return;
                    d(),
                    n(u.dom).show().wrap(t[1])
                }
                break;
            case 2:
                d(),
                c.append(t[1]);
                break;
            case 3:
                r.title = ["", !1],
                r.area = ["auto", "auto"],
                r.closeBtn = ["", !1],
                n(".xubox_loading")[0] && layer.close(n(".xubox_loading").parents("." + s.lay).attr("times")),
                d(),
                c.append(t[1]);
                break;
            case 4:
                r.title = ["", !1],
                r.area = ["auto", "auto"],
                r.fix = !1,
                r.border = !1,
                n(".xubox_tips")[0] && layer.close(n(".xubox_tips").parents("." + s.lay).attr("times")),
                d(),
                c.append(t[1]),
                n("#" + s.lay + l).find(".xubox_close").css({
                    top: 6,
                    right: 7
                });
                break;
            default:
                r.title[1] || (r.area = ["auto", "auto"]),
                n(".xubox_dialog")[0] && layer.close(n(".xubox_dialog").parents("." + s.lay).attr("times")),
                d(),
                c.append(t[1])
        }
        this.layerS = n("#xubox_shade" + l),
        this.layerB = n("#xubox_border" + l),
        this.layerE = n("#" + s.lay + l);
        var h = this.layerE;
        if (this.layerMian = h.find(".xubox_main"), this.layerTitle = h.find(".xubox_title"), this.layerText = h.find(".xubox_text"), this.layerPage = h.find(".xubox_page"), this.layerBtn = h.find(".xubox_botton"), -1 != r.offset[1].indexOf("px")) var f = parseInt(r.offset[1]);
        else if ("50%" == r.offset[1]) var f = r.offset[1];
        else var f = parseInt(r.offset[1]) / 100 * i.width();
        if (h.css({
            left: f + r.border[0],
            width: r.area[0],
            height: r.area[1]
        }), r.fix ? h.css({
            top: parseInt(r.offset[0]) + r.border[0]
        }) : h.css({
            top: parseInt(r.offset[0]) + i.scrollTop() + r.border[0],
            position: "absolute"
        }), 0 == r.type && r.title[1]) switch (o.btns) {
            case 0:
                e.layerBtn.html("").hide();
                break;
            case 2:
                e.layerBtn.html('<a href="javascript:;" class="xubox_yes xubox_botton2">' + o.btn[0] + '</a><a href="javascript:;" class="xubox_no xubox_botton3">' + o.btn[1] + "</a>");
                break;
            default:
                e.layerBtn.html('<a href="javascript:;" class="xubox_yes xubox_botton1">' + o.btn[0] + "</a>")
        }
        "auto" === h.css("left") ? (h.hide(), setTimeout(function () {
            h.show(),
            e.set(l)
        },
        500)) : e.set(l),
        r.time <= 0 || e.autoclose(),
        this.callback()
    },
    s.pt.set = function (e) {
        var t = this,
        r = t.layerE,
        o = t.config,
        a = (o.dialog, o.page),
        s = (o.loading, t.dom);
        switch (t.autoArea(e), o.title[1] ? layer.ie6 && t.layerTitle.css({
            width: r.outerWidth()
        }) : 4 != o.type && r.find(".xubox_close").addClass("xubox_close1"), r.attr({
            type: t.type[o.type]
        }), o.type) {
            case 1:
                r.find(a.dom).addClass("layer_pageContent"),
                o.shade[2] && r.css({
                    zIndex: o.zIndex + 1
                }),
                o.title[1] && t.layerPage.css({
                    top: t.layerTitle.outerHeight()
                });
                break;
            case 2:
                var l = r.find("." + s.ifr),
                u = r.height();
                l.addClass("xubox_load").css({
                    width: r.width()
                }),
                o.title[1] ? l.css({
                    top: t.layerTitle.height(),
                    height: u - t.layerTitle.height()
                }) : l.css({
                    top: 0,
                    height: u
                }),
                layer.ie6 && l.attr("src", o.iframe.src);
                break;
            case 3:
                break;
            case 4:
                var c = [0, r.outerHeight()],
                d = n(o.tips.follow),
                h = {
                    width: d.outerWidth(),
                    height: d.outerHeight(),
                    top: d.offset().top,
                    left: d.offset().left
                },
                f = r.find(".layerTipsG");
                o.tips.isGuide || f.remove(),
                r.outerWidth() > o.maxWidth && r.width(o.maxWidth),
                h.tipColor = o.tips.style[1],
                c[0] = r.outerWidth(),
                h.where = [function () {
                    h.tipLeft = h.left,
                    h.tipTop = h.top - c[1] - 10,
                    f.removeClass("layerTipsB").addClass("layerTipsT").css({
                        "border-right-color": h.tipColor
                    })
                },
                function () {
                    h.tipLeft = h.left + h.width + 10,
                    h.tipTop = h.top,
                    f.removeClass("layerTipsL").addClass("layerTipsR").css({
                        "border-bottom-color": h.tipColor
                    })
                },
                function () {
                    h.tipLeft = h.left,
                    h.tipTop = h.top + h.height + 10,
                    f.removeClass("layerTipsT").addClass("layerTipsB").css({
                        "border-right-color": h.tipColor
                    })
                },
                function () {
                    h.tipLeft = h.left - c[0] + 10,
                    h.tipTop = h.top,
                    f.removeClass("layerTipsR").addClass("layerTipsL").css({
                        "border-bottom-color": h.tipColor
                    })
                }],
                h.where[o.tips.guide](),
                0 === o.tips.guide ? h.top - (i.scrollTop() + c[1] + 16) < 0 && h.where[2]() : 1 === o.tips.guide ? i.width() - (h.left + h.width + c[0] + 16) > 0 || h.where[3]() : 2 === o.tips.guide ? h.top - i.scrollTop() + h.height + c[1] + 16 - i.height() > 0 && h.where[0]() : 3 === o.tips.guide && c[0] + 16 - h.left > 0 && h.where[1](),
                r.css({
                    left: h.tipLeft,
                    top: h.tipTop
                });
                break;
            default:
                t.layerMian.css({
                    "background-color":
                    "#fff"
                }),
                o.title[1] ? t.layerText.css({
                    paddingTop: 18 + t.layerTitle.outerHeight()
                }) : (r.find(".xubox_msgico").css({
                    top: 8
                }), t.layerText.css({
                    marginTop: 11
                }))
        }
        o.fadeIn && r.css({
            opacity: 0
        }).animate({
            opacity: 1
        },
        o.fadeIn),
        t.move()
    },
    s.pt.autoArea = function (e) {
        var t, i, r = this,
        o = r.layerE,
        a = r.config,
        s = a.page,
        l = r.layerMian,
        u = r.layerBtn,
        c = r.layerText,
        d = r.layerPage,
        h = r.layerB,
        f = 0,
        p = n(".xubox_loading");
        switch ("auto" === a.area[0] && l.outerWidth() >= a.maxWidth && o.css({
            width: a.maxWidth
        }), t = a.title[1] ? r.layerTitle.innerHeight() : 0, a.type) {
            case 0:
                var m = u.find("a");
                i = c.outerHeight() + 20,
                m.length > 0 && (f = m.outerHeight() + 20);
                break;
            case 1:
                i = n(s.dom).outerHeight(),
                "auto" === a.area[0] && o.css({
                    width: d.outerWidth()
                }),
                "" === s.html && "" === s.url || (i = d.outerHeight());
                break;
            case 3:
                i = p.outerHeight(),
                l.css({
                    width: p.width()
                })
        }
        "auto" === a.area[1] && l.css({
            height: t + i + f
        }),
        h.css({
            width: o.outerWidth() + 2 * a.border[0],
            height: o.outerHeight() + 2 * a.border[0]
        }),
        layer.ie6 && "auto" != a.area[0] && l.css({
            width: o.outerWidth()
        }),
        "50%" !== a.offset[1] && "" != a.offset[1] || 4 === a.type ? o.css({
            marginLeft: 0
        }) : o.css({
            marginLeft: -o.outerWidth() / 2
        })
    },
    s.pt.move = function () {
        var e = this,
        t = this.config,
        r = e.dom,
        o = {
            setY: 0,
            moveLayer: function () {
                if (0 == parseInt(o.layerE.css("margin-left"))) var e = parseInt(o.move.css("left"));
                else var e = parseInt(o.move.css("left")) + -parseInt(o.layerE.css("margin-left"));
                "fixed" !== o.layerE.css("position") && (e -= o.layerE.parent().offset().left, o.setY = 0),
                o.layerE.css({
                    left: e,
                    top: parseInt(o.move.css("top")) - o.setY
                })
            }
        };
        t.move[1] && e.layerE.find(t.move[0]).attr("move", "ok"),
        t.move[1] ? e.layerE.find(t.move[0]).css({
            cursor: "move"
        }) : e.layerE.find(t.move[0]).css({
            cursor: "auto"
        }),
        n(t.move[0]).on("mousedown",
        function (e) {
            if (e.preventDefault(), "ok" === n(this).attr("move")) {
                o.ismove = !0,
                o.layerE = n(this).parents("." + r.lay);
                var a = o.layerE.offset().left,
                s = o.layerE.offset().top,
                l = o.layerE.width() - 6,
                u = o.layerE.height() - 6;
                n("#xubox_moves")[0] || n("body").append('<div id="xubox_moves" class="xubox_moves" style="left:' + a + "px; top:" + s + "px; width:" + l + "px; height:" + u + 'px; z-index:2147483584"></div>'),
                o.move = n("#xubox_moves"),
                t.moveType && o.move.css({
                    opacity: 0
                }),
                o.moveX = e.pageX - o.move.position().left,
                o.moveY = e.pageY - o.move.position().top,
                "fixed" !== o.layerE.css("position") || (o.setY = i.scrollTop())
            }
        }),
        n(document).mousemove(function (e) {
            if (o.ismove) {
                var n = e.pageX - o.moveX,
                r = e.pageY - o.moveY;
                if (e.preventDefault(), !t.moveOut) {
                    o.setY = i.scrollTop();
                    var a = i.width() - o.move.outerWidth() - t.border[0],
                    s = t.border[0] + o.setY;
                    n < t.border[0] && (n = t.border[0]),
                    n > a && (n = a),
                    s > r && (r = s),
                    r > i.height() - o.move.outerHeight() - t.border[0] + o.setY && (r = i.height() - o.move.outerHeight() - t.border[0] + o.setY)
                }
                o.move.css({
                    left: n,
                    top: r
                }),
                t.moveType && o.moveLayer(),
                n = null,
                r = null,
                a = null,
                s = null
            }
        }).mouseup(function () {
            try {
                o.ismove && (o.moveLayer(), o.move.remove()),
                o.ismove = !1
            } catch (e) {
                o.ismove = !1
            }
            t.moveEnd && t.moveEnd()
        })
    },
    s.pt.autoclose = function () {
        var e = this,
        t = this.config.time,
        n = function () {
            t--,
            0 === t && (layer.close(e.index), clearInterval(e.autotime))
        };
        this.autotime = setInterval(n, 1e3)
    },
    a.config = {
        end: {}
    },
    s.pt.callback = function () {
        var e = this,
        t = e.layerE,
        n = e.config,
        i = n.dialog;
        e.openLayer(),
        e.config.success(t),
        layer.ie6 && e.IE6(),
        t.find(".xubox_close").off("click").on("click",
        function (t) {
            t.preventDefault(),
            n.close(e.index)
        }),
        t.find(".xubox_yes").off("click").on("click",
        function (t) {
            t.preventDefault(),
            i.yes(e.index)
        }),
        t.find(".xubox_no").off("click").on("click",
        function (t) {
            t.preventDefault(),
            i.no(e.index)
        }),
        this.layerS.off("click").on("click",
        function (t) {
            t.preventDefault(),
            e.config.shadeClose && layer.close(e.index)
        }),
        a.config.end[e.index] = n.end
    },
    s.pt.IE6 = function () {
        var e = this,
        t = e.layerE,
        r = n("select"),
        o = e.dom,
        a = t.offset().top;
        if (e.config.fix) var s = function () {
            t.css({
                top: n(document).scrollTop() + a
            })
        };
        else var s = function () {
            t.css({
                top: a
            })
        };
        s(),
        i.scroll(s),
        n.each(r,
        function (e, t) {
            var i = n(this);
            i.parents("." + o.lay)[0] || "none" == i.css("display") || i.attr({
                layer: "1"
            }).hide(),
            i = null
        }),
        e.reselect = function () {
            n.each(r,
            function (e, t) {
                var i = n(this);
                i.parents("." + o.lay)[0] || 1 == i.attr("layer") && n("." + o.lay).length < 1 && i.removeAttr("layer").show(),
                i = null
            })
        }
    },
    s.pt.openLayer = function () {
        var e = this,
        t = e.dom;
        layer.autoArea = function (t) {
            return e.autoArea(t)
        },
        layer.getIndex = function (e) {
            return n(e).parents("." + t.lay).attr("times")
        },
        layer.getChildFrame = function (e, i) {
            return i = i || n("." + t.ifr).parents("." + t.lay).attr("times"),
            n("#" + t.lay + i).find("." + t.ifr).contents().find(e)
        },
        layer.getFrameIndex = function (e) {
            return n(e ? "#" + e : "." + t.ifr).parents("." + t.lay).attr("times")
        },
        layer.iframeAuto = function (e) {
            e = e || n("." + t.ifr).parents("." + t.lay).attr("times");
            var i = this.getChildFrame("body", e).outerHeight(),
            r = n("#" + t.lay + e),
            o = r.find(".xubox_title"),
            a = 0; !o || (a = o.height()),
            r.css({
                height: i + a
            });
            var s = -parseInt(n("#xubox_border" + e).css("top"));
            n("#xubox_border" + e).css({
                height: i + 2 * s + a
            }),
            n("#" + t.ifr + e).css({
                height: i
            })
        },
        layer.close = function (i) {
            var r = n("#" + t.lay + i),
            o = n("#xubox_moves, #xubox_shade" + i);
            if (r.attr("type") == e.type[1]) if (r.find(".xuboxPageHtml")[0]) r.remove();
            else {
                r.find(".xubox_close,.xubox_botton,.xubox_title,.xubox_border").remove();
                for (var s = 0; 3 > s; s++) r.find(".layer_pageContent").unwrap().hide()
            } else document.all && r.find("#" + t.ifr + i).remove(),
            r.remove();
            o.remove(),
            layer.ie6 && e.reselect(),
            "function" == typeof a.config.end[i] && a.config.end[i](),
            delete a.config.end[i]
        },
        layer.loadClose = function () {
            var e = n(".xubox_loading").parents("." + t.lay),
            i = e.attr("times");
            layer.close(i)
        },
        layer.shift = function (t, n) {
            var r = e.config,
            o = layer.ie6,
            a = e.layerE,
            s = 0,
            l = i.width(),
            u = i.height();
            s = "50%" == r.offset[1] || "" == r.offset[1] ? a.outerWidth() / 2 : a.outerWidth();
            var c = {
                t: {
                    top: r.border[0]
                },
                b: {
                    top: u - a.outerHeight() - r.border[0]
                },
                cl: s + r.border[0],
                ct: -a.outerHeight(),
                cr: l - s - r.border[0],
                fn: function () {
                    o && e.IE6()
                }
            };
            switch (t) {
                case "left-top":
                    a.css({
                        left:
                        c.cl,
                        top: c.ct
                    }).animate(c.t, n, c.fn);
                    break;
                case "top":
                    a.css({
                        top:
                        c.ct
                    }).animate(c.t, n, c.fn);
                    break;
                case "right-top":
                    a.css({
                        left:
                        c.cr,
                        top: c.ct
                    }).animate(c.t, n, c.fn);
                    break;
                case "right-bottom":
                    a.css({
                        left:
                        c.cr,
                        top: u
                    }).animate(c.b, n, c.fn);
                    break;
                case "bottom":
                    a.css({
                        top:
                        u
                    }).animate(c.b, n, c.fn);
                    break;
                case "left-bottom":
                    a.css({
                        left:
                        c.cl,
                        top: u
                    }).animate(c.b, n, c.fn);
                    break;
                case "left":
                    a.css({
                        left:
                        -a.outerWidth(),
                        marginLeft: 0
                    }).animate({
                        left: c.t.top
                    },
                    n, c.fn)
            }
        },
        layer.setMove = function () {
            return e.move()
        },
        layer.area = function (i, r) {
            var o = [n("#" + t.lay + i), n("#xubox_border" + i)],
            a = o[0].attr("type"),
            s = o[0].find(".xubox_main"),
            l = o[0].find(".xubox_title");
            if (a === e.type[1] || a === e.type[2]) {
                if (o[0].css(r), o[1][0] && o[1].css({
                    width: r.width - 2 * parseInt(o[1].css("left")),
                    height: r.height - 2 * parseInt(o[1].css("top"))
                }), s.css({
                    height: r.height
                }), a === e.type[2]) {
                    var u = o[0].find("iframe");
                    u.css({
                        width: r.width,
                        height: l ? r.height - l.outerHeight() : r.height
                    })
                }
                "0px" !== o[0].css("margin-left") && (r.hasOwnProperty("top") && o[0].css({
                    top: r.top - (o[1][0] && parseInt(o[1].css("top")))
                }), r.hasOwnProperty("left") && o[0].css({
                    left: r.left + o[0].outerWidth() / 2 - (o[1][0] && parseInt(o[1].css("left")))
                }), o[0].css({
                    marginLeft: -o[0].outerWidth() / 2
                }))
            }
        },
        layer.closeAll = function () {
            var e = n("." + t.lay);
            n.each(e,
            function () {
                var e = n(this).attr("times");
                layer.close(e)
            })
        },
        layer.zIndex = e.config.zIndex,
        layer.setTop = function (e) {
            var t = function () {
                layer.zIndex++,
                e.css("z-index", layer.zIndex + 1)
            };
            return layer.zIndex = parseInt(e[0].style.zIndex),
            e.on("mousedown", t),
            layer.zIndex
        }
    },
    a.run = function () {
        n = jQuery,
        i = n(e),
        layer.use("skin/layer.css"),
        n.layer = function (e) {
            var t = new s(e);
            return t.index
        }
    };
    var l = "../../init/jquery";
    e.seajs ? define([l],
    function (t, n, i) {
        a.run(),
        n.layer = [e.layer, e.$.layer]
    }) : a.run()
}(window),
$(document).ready(function () {
    $("span.grade_circle").hover(function () {
        $("#old_explain").html($("div.explain").html());
        var e = $("div.star span").index($(this));
        $(this).siblings().removeClass("selected").addClass("hover"),
        $(this).removeClass("hover").addClass("selected"),
        $("div.star span:lt(" + e + ")").removeClass("hover").addClass("selected"),
        $("div.explain").html($(this).prop("title"))
    },
    function () {
        $("div.explain").html($("#old_explain").html());
        var e = $("#old_grade").html();
        if ("" == e) $("div.star span").removeClass("hover").removeClass("selected");
        else {
            var t = parseInt($("#old_grade").html()) - 1;
            $("div.star span").removeClass("hover").removeClass("selected"),
            $("div.star span:eq(" + t + ")").addClass("selected"),
            $("div.star span:lt(" + t + ")").addClass("selected")
        }
    }),
    $("span.grade_circle").click(function () {
        $("div.explain").html($(this).prop("title")),
        $("#old_explain").html($("div.explain").html()),
        $("#grade_point").val($("div.star span").index($(this)) + 1),
        $("#old_grade").html($("#grade_point").val())
    }),
    $("div.lft").height($("div.rgt").outerHeight())
}),
$(document).ready(function () {
    for (var e = $(".hidenTotalNum"), t = 0; t < e.length; t++) $(".totalNum").eq(t).text(orderList_calculateTotalNum(e.eq(t).val()));
    for (var n = $(".deleteOrder"), t = 0; t < n.length; t++) n.eq(t).click(function () {
        var e = $(this).prop("id"),
        t = $.layer({
            bgcolor: "",
            type: 1,
            title: !1,
            offset: ["20%", "36%"],
            shade: [.6, "#000", !0],
            closeBtn: !1,
            border: [0, .9, "#000", !1],
            page: {
                dom: "#confirmDeleDiv"
            }
        });
        $("#btn_no").click(function () {
            layer.close(t)
        }),
        $("#btn_yes").click(function () {
            $.ajax({
                type: "post",
                url: "/order/deleteOrder",
                data: {
                    orderNo: e
                },
                dataType: "json",
                success: function (e) {
                    200 == e.code ? (layer.close(t), layer.msg("删除成功", 2, 1,
                    function () {
                        window.location.reload()
                    })) : $.layer({
                        area: ["auto", "auto"],
                        dialog: {
                            msg: e.data,
                            type: 9
                        }
                    })
                }
            })
        })
    });
    for (var i = $(".cancelOrder"), t = 0; t < i.length; t++) i.eq(t).click(function () {
        var e = $(this).prop("id"),
        t = $.layer({
            bgcolor: "",
            type: 1,
            title: !1,
            offset: ["20%", "36%"],
            shade: [.6, "#000", !0],
            closeBtn: !1,
            border: [0, .9, "#000", !1],
            page: {
                dom: "#confirmCancelDiv"
            }
        });
        $("#btn_cancel_no").click(function () {
            layer.close(t)
        }),
        $("#btn_cancel_yes").click(function () {
            $.ajax({
                type: "post",
                url: "/order/cancelOrder",
                data: {
                    orderNo: e
                },
                dataType: "json",
                success: function (e) {
                    200 == e.code ? (layer.close(t), layer.msg("已取消", 2, 1,
                    function () {
                        window.location.reload()
                    })) : $.layer({
                        area: ["auto", "auto"],
                        dialog: {
                            msg: "取消失败",
                            type: 9
                        }
                    })
                }
            })
        })
    });
    for (var r = $(".refundOrder"), t = 0; t < r.length; t++) r.eq(t).click(function () {
        var e = $(this).prop("id"),
        t = $.layer({
            bgcolor: "",
            type: 1,
            title: !1,
            offset: ["20%", "36%"],
            shade: [.6, "#000", !0],
            closeBtn: !1,
            border: [0, .9, "#000", !1],
            page: {
                dom: "#confirmRefundDiv"
            }
        });
        $("#btn_refund_no").click(function () {
            layer.close(t)
        }),
        $("#btn_refund_yes").click(function () {
            $.ajax({
                type: "post",
                url: "/order/refundOrder",
                data: {
                    orderNo: e
                },
                dataType: "json",
                success: function (e) {
                    var n = Cookie.get("language");
                    200 == e.code ? (layer.close(t), layer.msg("已退款", 2, 1,
                    function () {
                        window.location.reload()
                    })) : 999 == e.code ? (layer.close(t), "tw" == n ? layer.msg("此產品不支持退款", 2, 1,
                    function () {
                        window.location.reload()
                    }) : layer.msg("此产品不支持退款", 2, 1,
                    function () {
                        window.location.reload()
                    })) : "tw" == n ? $.layer({
                        area: ["auto", "auto"],
                        dialog: {
                            msg: "退款失敗",
                            type: 9
                        }
                    }) : $.layer({
                        area: ["auto", "auto"],
                        dialog: {
                            msg: "退款失败",
                            type: 9
                        }
                    })
                }
            })
        })
    });
    for (var i = $(".cancelPay"), t = 0; t < i.length; t++) i.eq(t).click(function () {
        var e = $(this).prop("id"),
        t = $.layer({
            bgcolor: "",
            type: 1,
            title: !1,
            offset: ["20%", "36%"],
            shade: [.6, "#000", !0],
            closeBtn: !1,
            border: [0, .9, "#000", !1],
            page: {
                dom: "#confirmCancelpayDiv"
            }
        });
        $("#btn_cancelpay_no").click(function () {
            layer.close(t)
        }),
        $("#btn_cancelpay_yes").click(function () {
            $.ajax({
                type: "post",
                url: "/order/cancelPay",
                data: {
                    orderNo: e
                },
                dataType: "json",
                success: function (e) {
                    200 == e.code ? (layer.close(t), layer.msg("已取消", 2, 1,
                    function () {
                        window.location.reload()
                    })) : $.layer({
                        area: ["auto", "auto"],
                        dialog: {
                            msg: "取消失败",
                            type: 9
                        }
                    })
                }
            })
        })
    });
    $(".paymentBtn").click(function () {
        window.location.href = "/order/replayOrderBeta.html?sys_trade_no=" + $(this).prop("id")
    });
    var o = null;
    $(".addField").click(function () {
        var e = $(this).closest("td").find(".order_field");
        if (e.length > 0) {
            $("#addPickupDiv").attr("data-id", $(this).attr("data-id")),
            $("#addPickupDiv").attr("main-id", $(this).attr("main-id")),
            $("#addPickupDiv dl").remove();
            var t = null;
            e.each(function () {
                var e = null;
                if ($(this).attr("name").indexOf("日期") > 0) e = "<dl><dt>" + $(this).attr("name") + '：</dt><dd><input type="date" id="' + $(this).attr("id") + '" data-name="' + $(this).attr("name") + '" value="' + $(this).text() + '"/></dd></dl>';
                else if ("meetHotel" == $(this).attr("id")) {
                    var n = $(this).text().indexOf("|") > 0 ? $(this).text().split("|")[0] : $(this).text(),
                    i = $(this).text().indexOf("|") > 0 ? $(this).text().split("|")[1] : $(this).text();
                    e = '<dl><dt> 酒店名称(接)：</dt><dd><input type="text" id="' + $(this).attr("id") + 'Name" data-name="' + $(this).attr("name") + '" value="' + n + '"/></dd></dl>',
                    e += '<dl><dt> 酒店地址(接)：</dt><dd><input type="text" id="' + $(this).attr("id") + 'Address" data-name="' + $(this).attr("name") + '" value="' + i + '"/></dd></dl>'
                } else if ("seeOffHotel" == $(this).attr("id")) {
                    var n = $(this).text().indexOf("|") > 0 ? $(this).text().split("|")[0] : $(this).text(),
                    i = $(this).text().indexOf("|") > 0 ? $(this).text().split("|")[1] : $(this).text();
                    e = '<dl><dt> 酒店名称(送)：</dt><dd><input type="text" id="' + $(this).attr("id") + 'Name" data-name="' + $(this).attr("name") + '" value="' + n + '"/></dd></dl>',
                    e += '<dl><dt> 酒店地址(送) ：</dt><dd><input type="text" id="' + $(this).attr("id") + 'Address" data-name="' + $(this).attr("name") + '" value="' + i + '"/></dd></dl>'
                } else e = "<dl><dt>" + $(this).attr("name") + '：</dt><dd><input type="text" id="' + $(this).attr("id") + '" data-name="' + $(this).attr("name") + '" value="' + $(this).text() + '"/></dd></dl>';
                if (null == t) t = $(e),
                $("#addPickupDiv .btn").before(t);
                else {
                    var r = $(e);
                    2 == t.length && (t = t.last()),
                    t.after(r),
                    t = r
                }
            }),
            o = $.layer({
                bgcolor: "",
                type: 1,
                title: !1,
                offset: ["20%", "36%"],
                area: ["auto", "auto"],
                shade: [.6, "#000", !0],
                closeBtn: !1,
                border: [0, .9, "#000", !1],
                page: {
                    dom: "#addPickupDiv"
                }
            })
        }
    }),
    $("#btn_addPickup_yes").click(function () {
        var e = $("#addPickupDiv dl");
        if (0 != e.length) {
            var t = !1,
            n = {};
            e.each(function () {
                var e = $(this).find("input"),
                i = e.attr("id"),
                r = e.val();
                return n[i] = r,
                common_validateInput(r) ? void 0 : (layer.tips("请填写 “" + e.attr("data-name") + "”", e, {
                    style: ["background-color:#e10979; color:#fff", "#e10979"],
                    time: 1,
                    closeBtn: [0, !0]
                }), t = !0, !1)
            }),
            t || $.ajax({
                type: "post",
                url: "/order/addPickupInfo",
                data: {
                    sys_no: $("#addPickupDiv").attr("data-id"),
                    main_sys_no: $("#addPickupDiv").attr("main-id"),
                    has_order_fields: 1,
                    map: JSON.stringify(n)
                },
                dataType: "json",
                success: function (e) {
                    200 == e.code ? (layer.close(o), layer.msg("添加成功", 2, 1,
                    function () {
                        window.location.reload()
                    })) : $.layer({
                        area: ["auto", "auto"],
                        dialog: {
                            msg: "操作失败:" + e.data,
                            type: 9
                        }
                    })
                }
            })
        }
    }),
    $("#btn_addPickup_no").click(function () {
        layer.close(o)
    })
}),
$(function () {
    var e = {
        dataType: "json",
        beforeSerialize: function () {
            if ("" == $("#voucher").val()) return alert("请选择您要上传的图片！"),
            !1;
            if ("Microsoft Internet Explorer" == navigator.appName && "8." == navigator.appVersion.match(/8./i) || "9." == navigator.appVersion.match(/9./i));
            else {
                var e = document.getElementById("voucher").files,
                t = e[0],
                n = t.name.split(".");
                if (n = n[n.length - 1], "jpg" != n && "png" != n) return alert("凭证必须为jpg或png格式图片！"),
                !1;
                if (t.size > 512e3) return alert("文件大小不能超过500KB！"),
                !1
            }
        },
        success: function (e) {
            var t = e.Result;
            "success" == t ? (alert("上传成功！"), $("#filepath").text(""), $(".ACloseBtn").click()) : "error" == t ? alert("非图片文件，请上传图片！") : "exceeded" == t ? alert("文件大小超过500K！") : alert("上传失败，请稍后重试！")
        }
    };
    $("#form1").ajaxForm(e)
}),
$.ajax({
    type: "post",
    url: "/addsyslogs" + window.location.search,
    dataType: "json",
    data: {
        referer: document.referrer,
        url: window.location.href
    },
    async: !0
});
var AllLocationJson = {},
AllThemesInJson = {};
$.ajax({
    type: "post",
    url: "/header/queryCountry?v=" + Math.random(),
    dataType: "json",
    async: !1,
    success: function (e) {
        200 == e.code && (AllLocationJson = e.data.location, AllThemesInJson = e.data.themeList)
    }
}),
$("#header_search_box .typeahead").typeahead({
    limit: 9,
    minLength: 1,
    prefetch: "/res/data/city-hint9.json",
    template: "<p>{{value}}</p>",
    remote: {
        url: "/searchsuggestion.html?keyWord=%QUERY",
        filter: function (e) {
            return e.data
        }
    },
    engine: Hogan
}),
$("#header_search_button").click(function () {
    var e = $("#header_search_city_input").val();
    header_search(e)
}),
$(document).on("click", ".tt-suggestion",
function () {
    var e = $(this).find("p").html();
    header_search(e)
}),
$("#header_search_city_input").keyup(function (e) {
    if (13 == e.keyCode) {
        var t = $("#header_search_city_input").val();
        header_search(t)
    }
}),
locationCountryUrl();