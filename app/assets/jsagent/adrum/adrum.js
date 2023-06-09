; /* Version 390afaf42616833fafe738af3dd48b5e v:4.4.3.560, c:803257b4fc230f8e2aaf9ec7c320f318796c3545, b:4.4.3.560 n:INTERNAL-BUILD */
(function() {
    new function() {
        if (!window.ADRUM && !0 !== window["adrum-disable"]) {
            var g = window.ADRUM = {},
                x = window.console,
                z = x && "function" == typeof x.log ? x : {
                    log: function() {}
                };
            window["adrum-start-time"] = window["adrum-start-time"] || (new Date).getTime();
            var u = this && this.hh || function() {
                var a = Object.Sj || {
                    __proto__: []
                }
                instanceof Array && function(a, f) {
                    a.__proto__ = f
                } || function(a, f) {
                    for (var e in f) f.hasOwnProperty(e) && (a[e] = f[e])
                };
                return function(b, f) {
                    function e() {
                        this.constructor = b
                    }
                    a(b, f);
                    b.prototype = null === f ? Object.create(f) :
                        (e.prototype = f.prototype, new e)
                }
            }();
            (function(a) {
                (function(a) {
                    a.yc = function() {
                        for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
                        for (b = 0; b < a.length; b++) {
                            var c = a[b];
                            c && c.setUp()
                        }
                    }
                })(a.monitor || (a.monitor = {}))
            })(g || (g = {}));
            (function(a) {
                (function(b) {
                    function f(a) {
                        return b.Z.slice.apply(a, b.Z.slice.call(arguments, 1))
                    }

                    function e(a) {
                        return "undefined" !== typeof a && null !== a
                    }

                    function c(a) {
                        return "object" == typeof a && !b.isArray(a) && null !== a
                    }

                    function d(a) {
                        return "function" == typeof a || !1
                    }

                    function h(a) {
                        return "string" ==
                            typeof a
                    }

                    function n(a, d) {
                        for (var e in d) {
                            var h = d[e];
                            if (m(d, e)) {
                                var A = a[e];
                                c(h) && c(A) ? n(A, h) : b.isArray(A) && b.isArray(h) ? a[e] = A.concat(h) : a[e] = h
                            }
                        }
                        return a
                    }

                    function m(a, b) {
                        return Object.prototype.hasOwnProperty.call(a, b) && e(a[b])
                    }

                    function k(a) {
                        return h(a) ? a.replace(/^\s*/, "").replace(/\s*$/, "") : a
                    }

                    function q() {
                        return (new Date).getTime()
                    }

                    function g(a, b) {
                        var c = Array.prototype[a];
                        return c ? p(c) : s(a, b)
                    }

                    function p(a) {
                        return function(c) {
                            return a.apply(c, b.Z.slice.call(arguments, 1))
                        }
                    }

                    function s(a, b) {
                        return function(c,
                            h) {
                            if (!e(c)) throw new TypeError(a + " called on null or undefined");
                            if (!d(h)) throw new TypeError(h + " is not a function");
                            return b.apply(null, arguments)
                        }
                    }

                    function t(a, b, c) {
                        var d = Object(a),
                            e = d.length >>> 0,
                            h = 0;
                        if (3 > arguments.length) {
                            for (; h < e && !(h in d);) h++;
                            if (h >= e) throw new TypeError("Reduce of empty array with no initial value");
                            c = d[h++]
                        }
                        for (; h < e; h++) h in d && (c = b(c, d[h], h, d));
                        return c
                    }

                    function v(a, c, d) {
                        return b.reduce(a, function(a, b, e, h) {
                            a[e] = c.call(d, b, e, h);
                            return a
                        }, Array(a.length >>> 0))
                    }

                    function w(a,
                        c, d) {
                        return b.reduce(a, function(a, b, e, h) {
                            c.call(d, b, e, h) && a.push(b);
                            return a
                        }, [])
                    }

                    function C(a, b, c) {
                        a = Object(a);
                        for (var d = a.length >>> 0, e = 0; e < d; e++)
                            if (e in a && b.call(c, a[e], e, a)) return !0;
                        return !1
                    }

                    function l(a, c, d) {
                        return !b.some(a, function(a) {
                            return !c.call(d, a)
                        })
                    }

                    function A(a, c, d) {
                        b.reduce(a, function(a, b, e, h) {
                            c.call(d, b, e, h)
                        }, void 0)
                    }
                    b.Z = {
                        isArray: Array.isArray,
                        toString: Object.prototype.toString,
                        slice: Array.prototype.slice,
                        assign: Object.assign
                    };
                    b.Ha = window.setTimeout;
                    b.jb = window.setInterval;
                    b.Ab = f;
                    b.isDefined =
                        e;
                    b.isArray = d(b.Z.isArray) && d(b.Z.isArray.bind) ? b.Z.isArray.bind(Array) : function(a) {
                        return b.Z.toString.call(a) === b.Z.toString.call([])
                    };
                    b.isObject = c;
                    b.isFunction = d;
                    b.isString = h;
                    b.isNumber = function(a) {
                        return "number" == typeof a
                    };
                    b.isBoolean = function(a) {
                        return "boolean" == typeof a
                    };
                    b.max = function(a, b) {
                        return Math.max(isNaN(a) ? Number.NEGATIVE_INFINITY : a, isNaN(b) ? Number.NEGATIVE_INFINITY : b)
                    };
                    b.lb = function(a) {
                        b.Ha.call(window, a, 0)
                    };
                    b.ul = function(a, c) {
                        b.Ha.call(null, a, c || 1E4)
                    };
                    b.addEventListener = function(b,
                        c, d, e) {
                        function h() {
                            try {
                                return d.apply(this, f(arguments))
                            } catch (e) {
                                a.exception(e, "M1", c, b, e)
                            }
                        }
                        void 0 === e && (e = !1);
                        a.isDebug && a.log("M0", c, b);
                        h.tb = !0;
                        b.addEventListener ? b.addEventListener(c, h, e) : b.attachEvent && b.attachEvent("on" + c, h)
                    };
                    b.loadScriptAsync = function(b) {
                        var c = document.createElement("script");
                        c.type = "text/javascript";
                        c.async = !0;
                        c.src = b;
                        var d = document.getElementsByTagName("script")[0];
                        d ? (d.parentNode.insertBefore(c, d), a.log("M2", b)) : a.log("M3", b)
                    };
                    b.mergeJSON = n;
                    b.hasOwnPropertyDefined = m;
                    b.vk =
                        function(a) {
                            return e(a) ? b.isArray(a) ? a : [a] : []
                        };
                    b.zl = function(a, b) {
                        return null != a && a.slice(0, b.length) == b
                    };
                    b.generateGUID = function(a) {
                        return e(a) && d(a.getRandomValues) && function() {
                            function b(a) {
                                a = a.toString(16);
                                return "0000".substr(a.length) + a
                            }
                            var c = new Uint16Array(8);
                            a.getRandomValues(c);
                            return b(c[0]) + b(c[1]) + "_" + b(c[2]) + "_" + b(c[3]) + "_" + b(c[4]) + "_" + b(c[5]) + b(c[6]) + b(c[7])
                        }
                    }(window.crypto || window.msCrypto) || function() {
                        return "xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
                            var b = 16 *
                                Math.random() | 0;
                            return ("x" == a ? b : b & 3 | 8).toString(16)
                        })
                    };
                    b.uf = function(a) {
                        return a ? (a = a.stack) && "string" === typeof a ? a : null : null
                    };
                    b.trim = k;
                    b.sj = function(a) {
                        var b = {},
                            c, d;
                        if (!a) return b;
                        var e = a.split("\n");
                        for (d = 0; d < e.length; d++) {
                            var h = e[d];
                            c = h.indexOf(":");
                            a = k(h.substr(0, c)).toLowerCase();
                            c = k(h.substr(c + 1));
                            a && (b[a] = b[a] ? b[a] + (", " + c) : c)
                        }
                        return b
                    };
                    b.tryPeriodically = function(a, b, c, d) {
                        function e() {
                            if (b()) c && c();
                            else {
                                var n = a(++h);
                                0 < n ? setTimeout(e, n) : d && d()
                            }
                        }
                        var h = 0;
                        e()
                    };
                    b.Fd = function(a) {
                        return a.charAt(0).toUpperCase() +
                            a.slice(1)
                    };
                    b.Ke = function(a) {
                        for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
                        return function() {
                            for (var c = [], d = 0; d < arguments.length; d++) c[d] = arguments[d];
                            return a.apply(this, b.concat(c))
                        }
                    };
                    b.fl = function() {
                        return e(performance) && e(performance.now)
                    };
                    b.now = q;
                    b.Nd = function() {
                        var a = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance,
                            a = b.isObject(a) && b.isObject(a.timing) && b.isNumber(a.timing.navigationStart) ? a.timing.navigationStart : window["adrum-start-time"];
                        e(a) || (a = q());
                        return a
                    };
                    b.Sk = t;
                    b.reduce = g("reduce", t);
                    b.Rk = v;
                    b.map = g("map", v);
                    b.Pk = w;
                    b.filter = g("filter", w);
                    b.Tk = C;
                    b.some = g("some", C);
                    b.Ok = l;
                    b.every = g("every", l);
                    b.Qk = A;
                    b.forEach = g("forEach", A);
                    b.Kh = function(a) {
                        return b.filter(a, e)
                    };
                    b.Ah = function(a) {
                        return [].concat.apply([], a)
                    }
                })(a.utils || (a.utils = {}))
            })(g || (g = {}));
            (function(a) {
                var b = a.conf || (a.conf = {});
                b.userConf = window["adrum-config"] || {};
                b.useHTTPSAlways = !0 === b.userConf.useHTTPSAlways;
                b.spa2 = b.userConf.spa && b.userConf.spa.spa2 && !0 === b.userConf.spa.spa2;
                b.beaconUrlHttp = a.utils.isDefined(b.userConf.beaconUrlHttp) ? b.userConf.beaconUrlHttp : "http://col.eum-appdynamics.com";
                b.beaconUrlHttps = a.utils.isDefined(b.userConf.beaconUrlHttps) ? b.userConf.beaconUrlHttps : "https://col.eum-appdynamics.com";
                b.corsEndpointPath = "/eumcollector/beacons/browser" + (b.spa2 ? "/v2" : "/v1");
                b.imageEndpointPath = "/eumcollector/adrum.gif?";
                b.appKey = b.userConf.appKey || window["adrum-app-key"] || "APP_KEY_NOT_SET";
                a = b.useHTTPSAlways || "https:" === document.location.protocol;
                var f = b.userConf.adrumExtUrlHttp ||
                    "http://cdn.appdynamics.com",
                    e = b.userConf.adrumExtUrlHttps || "https://cdn.appdynamics.com";
                b.adrumExtUrl = (a ? e : f) + "/adrum-ext.390afaf42616833fafe738af3dd48b5e.js";
                b.adrumXdUrl = e + "/adrum-xd.390afaf42616833fafe738af3dd48b5e.html";
                b.agentVer = "4.4.3.560";
                b.sendImageBeacon = b.userConf.beacon && b.userConf.beacon.sendImageBeacon || window["adrum-send-image-beacon"];
                window["adrum-geo-resolver-url"] ? (f = window["adrum-geo-resolver-url"], e = f.indexOf("://"), -1 != e && (f = f.substring(e + 3)), f = (a ? "https://" : "http://") + f) :
                    (f = b.userConf.geoResolverUrlHttps || "", e = b.userConf.geoResolverUrlHttp || "", f = a ? f : e);
                b.geoResolverUrl = f;
                b.useStrictDomainCookies = !0 === window["adrum-use-strict-domain-cookies"];
                b.Ag = 10
            })(g || (g = {}));
            (function(a) {
                function b(b, c, d, e) {
                    b = a.conf.beaconUrlHttps + "/eumcollector/error.gif?version=1&appKey=" + d + "&msg=" + encodeURIComponent(b.substring(0, 500));
                    e && (b += "&stack=", b += encodeURIComponent(e.substring(0, 1500 - b.length)));
                    return b
                }

                function f(c, d) {
                    2 <= s || (document.createElement("img").src = b(c, 0, a.conf.appKey,
                        d), s++)
                }

                function e(a) {
                    return 0 <= a.location.search.indexOf("ADRUM_debug=true") || 0 <= a.cookie.search(/(^|;)\s*ADRUM_debug=true/)
                }

                function c(b) {
                    a.isDebug && g.push(n(arguments).join(" | "))
                }

                function d(a) {
                    p.push(n(arguments).join(" | "))
                }

                function h(a) {
                    var b = n(arguments).join(" | ");
                    c(b);
                    f(b, null)
                }
                var n = a.utils.Ab,
                    m = a.utils.reduce,
                    k = a.utils.isDefined;
                a.iDR = e;
                var q;
                (function(a) {
                    a[a.API_ERROR = 0] = "API_ERROR";
                    a[a.API_ERROR_INVALID_PARAMS = 1] = "API_ERROR_INVALID_PARAMS";
                    a[a.API_ERROR_INVALID_CONFIG = 2] = "API_ERROR_INVALID_CONFIG";
                    a[a.API_WARNING = 3] = "API_WARNING";
                    a[a.API_WARNING_INEFFECTIVE_CONFIG = 4] = "API_WARNING_INEFFECTIVE_CONFIG"
                })(q = a.I || (a.I = {}));
                a.Oa = ["JS Agent API Error:", "JS Agent API Error Invalid Parameters: ", "JS Agent API Error Invalid Configs: ", "JS Agent API Warning:", "JS Agent API Warning Ineffective Config:"];
                a.ta = " a constructor is called as a function. Don't forget keyword new.";
                a.isDebug = e(document);
                a.apiMessageConsoleOut = k(a.conf.userConf) && k(a.conf.userConf.log) && !0 === a.conf.userConf.log.apiMessageConsoleOut ?
                    !0 : !1;
                var g = [],
                    p = [];
                a.logMessages = g;
                a.apiMessages = p;
                a.log = c;
                a.ll = d;
                a.error = h;
                a.reportAPIMessage = function(b, c, e, h) {
                    var n = a.yj.apply(this, arguments);
                    d(n);
                    a.apiMessageConsoleOut && z.log(n);
                    return n
                };
                a.exception = function() {
                    if (!(1 > arguments.length)) {
                        var b = n(arguments),
                            d = a.utils.uf(b[0]),
                            b = b.slice(1).join(" | ");
                        c(b);
                        f(b, d)
                    }
                };
                a.assert = function(a, b) {
                    a || h("Assert fail: " + b)
                };
                a.dumpLog = a.isDebug ? function() {
                    return m(g, function(a, b) {
                        return a + b.replace(/\<br\/\>/g, "\n\t") + "\n"
                    }, "")
                } : function() {};
                a.yj = function(b,
                    c, d, e) {
                    var h = "",
                        h = "",
                        n = (new window.Error).stack,
                        m, n = a.utils.isString(n) ? n.substring(5) : n + "";
                    k(m) || (m = a.utils.map(e, function(a) {
                        return null === a ? "null" : void 0 == a ? "undefined" : "" === a ? "''" : a
                    }));
                    switch (b) {
                        case q.V:
                        case q.Ck:
                            h = a.Oa[b];
                            h = k(d) ? "" + h + c + "\n in " + d + "(" + m.join(", ") + ")\n" + n : "" + h + c + "\n" + n;
                            break;
                        case q.Pc:
                            h = a.Oa[b];
                            h = "" + h + c + "\nin " + d + "(" + m.join(", ") + ")\n" + n;
                            break;
                        case q.Nf:
                        case q.Of:
                            h = a.Oa[b];
                            h = "" + h + c + ", but " + d + "=" + m.join(", ") + "\n" + n;
                            break;
                        default:
                            h = a.Oa[q.V], h = "" + h + c + "\nin " + d + "(" + m.join(", ") +
                                ")\n" + n
                    }
                    return h
                };
                a.cIEBU = b;
                var s = 0;
                c("M4")
            })(g || (g = {}));
            (function(a) {
                var b = function() {
                        function a(b) {
                            this.max = b;
                            this.Gb = 0
                        }
                        a.prototype.yi = function() {
                            this.bb() || this.Gb++
                        };
                        a.prototype.bb = function() {
                            return this.Gb >= this.max
                        };
                        a.prototype.reset = function() {
                            this.Gb = 0
                        };
                        return a
                    }(),
                    f = function() {
                        function e() {
                            this.Ta = [];
                            this.Ac = new b(e.Lg);
                            this.bc = new b(e.Eg)
                        }
                        e.prototype.submit = function(b) {
                            this.push(b) && a.initEXTDone && this.processQ()
                        };
                        e.prototype.processQ = function() {
                            for (var b = this.Nh(), d = 0; d < b.length; d++) {
                                var e =
                                    b[d];
                                "function" === typeof a.commands[e[0]] ? (a.isDebug && a.log("M5", e[0], e.slice(1).join(", ")), a.commands[e[0]].apply(a, e.slice(1))) : a.error("M6", e[0])
                            }
                        };
                        e.prototype.Ri = function(a) {
                            return "reportXhr" === a || "reportPageError" === a
                        };
                        e.prototype.push = function(b) {
                            var d = b[0],
                                e = this.Ri(d),
                                n = e ? this.Ac : this.bc;
                            if (n.bb()) return a.log("M7", e ? "spontaneous" : "non spontaneous", d), !1;
                            this.Ta.push(b);
                            n.yi();
                            return !0
                        };
                        e.prototype.Nh = function() {
                            var a = this.Ta;
                            this.reset();
                            return a
                        };
                        e.prototype.size = function() {
                            return this.Ta.length
                        };
                        e.prototype.reset = function() {
                            this.Ta = [];
                            this.Ac.reset();
                            this.bc.reset()
                        };
                        e.prototype.isSpontaneousQueueDead = function() {
                            return this.Ac.bb()
                        };
                        e.prototype.isNonSpontaneousQueueDead = function() {
                            return this.bc.bb()
                        };
                        return e
                    }();
                f.Lg = 100;
                f.Eg = 100;
                a.Wf = f
            })(g || (g = {}));
            (function(a) {
                a.q = new a.Wf;
                a.command = function(b) {
                    for (var f = 1; f < arguments.length; f++);
                    a.isDebug && a.log("M8", b, Array.prototype.slice.call(arguments).slice(1).join(", "));
                    a.q.submit(Array.prototype.slice.call(arguments))
                }
            })(g || (g = {}));
            (function(a) {
                (function(a) {
                    var f =
                        function() {
                            function a() {
                                this.status = {}
                            }
                            a.prototype.setUp = function() {};
                            a.prototype.set = function(a, b) {
                                this.status[a] = b
                            };
                            return a
                        }();
                    a.Xc = f
                })(a.monitor || (a.monitor = {}))
            })(g || (g = {}));
            (function(a) {
                (function(b) {
                    var f = a.utils.Ab;
                    window.ADRUM.aop = b;
                    b.support = function(a) {
                        return !a || "apply" in a
                    };
                    b.around = function(e, c, d, h, n) {
                        a.assert(b.support(e), "aop.around called on a function which does not support interception");
                        e = e || function() {};
                        return function() {
                            a.isDebug && a.log("M9", h, f(arguments).join(", "));
                            var b = f(arguments),
                                k;
                            try {
                                c && (k = c.apply(this, b))
                            } catch (q) {
                                a.exception(q, "M10", h, q)
                            }
                            a.assert(!k || a.utils.isArray(k));
                            var g = void 0;
                            try {
                                g = e.apply(this, k || b)
                            } catch (p) {
                                throw n && n(p), p;
                            } finally {
                                try {
                                    d && d.apply(this, b)
                                } catch (s) {
                                    a.exception(s, "M11", h, s)
                                }
                            }
                            return g
                        }
                    };
                    b.before = function(a, c, d) {
                        return b.around(a, c, null, d)
                    };
                    b.after = function(a, c, d) {
                        return b.around(a, null, c, d)
                    }
                })(a.aop || (a.aop = {}))
            })(g || (g = {}));
            (function(a) {
                a = a.EventType || (a.EventType = {});
                a[a.PageView = 0] = "PageView";
                a[a.Ajax = 2] = "Ajax";
                a[a.VPageView = 3] = "VPageView";
                a[a.Error =
                    4] = "Error";
                a[a.IFRAME = 1] = "IFRAME";
                a[a.ABSTRACT = 100] = "ABSTRACT";
                a[a.ADRUM_XHR = 101] = "ADRUM_XHR";
                a[a.NG_VIRTUAL_PAGE = 102] = "NG_VIRTUAL_PAGE"
            })(g || (g = {}));
            (function(a) {
                var b = a.events || (a.events = {});
                b.G = {};
                b.G[a.EventType.ABSTRACT] = {
                    guid: "string",
                    url: "string",
                    parentGUID: "string",
                    parentUrl: "string",
                    parentType: "number",
                    timestamp: "number"
                };
                b.G[a.EventType.VPageView] = {
                    resTiming: "object"
                };
                b.G[a.EventType.NG_VIRTUAL_PAGE] = {
                    digestCount: "number"
                };
                b.G[a.EventType.Ajax] = {
                    method: "string",
                    parentPhase: "string",
                    parentPhaseId: "number",
                    error: "object",
                    parameter: "object",
                    xhrStatus: "number"
                };
                b.G[a.EventType.ADRUM_XHR] = {
                    allResponseHeaders: "string"
                };
                b.G[a.EventType.Error] = {
                    msg: "string",
                    line: "number",
                    stack: "string"
                }
            })(g || (g = {}));
            (function(a) {
                var b = function() {
                    function a() {
                        this.S = {}
                    }
                    a.prototype.mark = function(a, b) {
                        f.mark.apply(this, arguments)
                    };
                    a.prototype.getTiming = function(a) {
                        return (a = this.getEntryByName(a)) && a.startTime
                    };
                    a.prototype.measure = function(a, b, e) {
                        f.measure.apply(this, arguments)
                    };
                    a.prototype.getEntryByName = function(a) {
                        return f.getEntryByName.call(this,
                            a)
                    };
                    return a
                }();
                b.Fb = function(a) {
                    return f.Fb(a)
                };
                a.PerformanceTracker = b;
                var f;
                (function(b) {
                    var c = a.utils.hasOwnPropertyDefined,
                        d = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance,
                        h = a.utils.isObject(d) && a.utils.isObject(d.timing) && a.utils.isNumber(d.timing.navigationStart) ? d.timing.navigationStart : window["adrum-start-time"],
                        n = a.utils.now;
                    b.mark = function(b, c) {
                        this.S[b] = {
                            name: b,
                            entryType: "mark",
                            startTime: a.utils.isDefined(c) ? c : n(),
                            duration: 0
                        }
                    };
                    b.measure = function(b,
                        d, e) {
                        c(this.S, d) && c(this.S, e) ? this.S[b] = {
                            name: b,
                            entryType: "measure",
                            startTime: d ? this.S[d].startTime : h,
                            duration: (e ? this.S[e].startTime : n()) - (d ? this.S[d].startTime : h)
                        } : a.error("M12", c(this.S, d) ? e : d)
                    };
                    b.getEntryByName = function(a) {
                        return this.S[a] || null
                    };
                    b.Fb = function(a) {
                        return a + h
                    }
                })(f || (f = {}))
            })(g || (g = {}));
            (function(a) {
                (function(b) {
                    function f(b, c) {
                        b = b || {};
                        for (var e in b) c[e] = function() {
                            var c = e,
                                h = b[e];
                            return function(b) {
                                var d = "_" + c,
                                    e = this[d];
                                if (a.utils.isDefined(b))
                                    if (typeof b === h) this[d] = b;
                                    else throw d =
                                        "wrong type of " + c + " value, " + typeof b + " passed in but should be a " + h + ".", a.reportAPIMessage(a.I.Pc, d, "ADRUM.report", Array.prototype.slice.call(arguments)), TypeError(d);
                                return e
                            }
                        }()
                    }

                    function e(a) {
                        var b = {},
                            c;
                        for (c in a) {
                            var e = a[c];
                            b[e.start] = !0;
                            b[e.end] = !0
                        }
                        return b
                    }
                    var c = function() {
                        function b(c) {
                            this.perf = new a.PerformanceTracker;
                            "Object" === this.constructor.name && a.reportAPIMessage(a.I.V, a.ta);
                            this.timestamp(a.utils.now());
                            this.guid(a.utils.generateGUID());
                            this.url(document.URL);
                            this.ob(c)
                        }
                        b.prototype.type =
                            function() {
                                return a.EventType.ABSTRACT
                            };
                        b.prototype.ob = function(b) {
                            if (a.utils.isObject(b))
                                for (var c in b) {
                                    var d = this[c] || this["mark" + a.utils.Fd(c)];
                                    d && a.utils.isFunction(d) && d.call(this, b[c])
                                }
                        };
                        b.Bb = function(a, b, c) {
                            return {
                                guid: function() {
                                    return a
                                },
                                url: function() {
                                    return b
                                },
                                type: function() {
                                    return c
                                }
                            }
                        };
                        b.prototype.mi = function() {
                            return b.Bb(this.parentGUID(), this.parentUrl(), this.parentType())
                        };
                        b.prototype.parent = function(b) {
                            var c = this.mi();
                            a.utils.isDefined(b) && (a.utils.isFunction(b.guid) && a.utils.isFunction(b.url) &&
                                a.utils.isFunction(b.type) ? (this.parentGUID(b.guid()), this.parentUrl(b.url()), this.parentType(b.type())) : a.reportAPIMessage(a.I.V, "object is not a valid EventIdentifier", "EventTracker.parent", Array.prototype.slice.call(arguments)));
                            return c
                        };
                        return b
                    }();
                    b.EventTracker = c;
                    b.la = f;
                    b.Ad = function(b, c) {
                        b = b || {};
                        var n = e(b),
                            m;
                        for (m in n) n = a.utils.Fd(m), c["mark" + n] = a.utils.Ke(function(a, b) {
                            this.perf.mark(a, b)
                        }, m), c["get" + n] = a.utils.Ke(function(a) {
                            return this.perf.getTiming(a)
                        }, m)
                    };
                    f(b.G[a.EventType.ABSTRACT],
                        c.prototype)
                })(a.events || (a.events = {}))
            })(g || (g = {}));
            (function(a) {
                (function(b) {
                    var f = function(b) {
                        function c(d) {
                            d = b.call(this, d) || this;
                            d.constructor != c && a.reportAPIMessage(a.I.V, a.ta, "ADRUM.events.Error", []);
                            return d
                        }
                        u(c, b);
                        c.prototype.type = function() {
                            return a.EventType.Error
                        };
                        return c
                    }(b.EventTracker);
                    b.Error = f;
                    b.la(b.G[a.EventType.Error], f.prototype)
                })(a.events || (a.events = {}))
            })(g || (g = {}));
            (function(a) {
                (function(b) {
                    var f = function(b) {
                        function c() {
                            return null !== b && b.apply(this, arguments) || this
                        }
                        u(c,
                            b);
                        c.prototype.setUp = function() {
                            var c = this;
                            b.prototype.setUp.call(this);
                            a.listenForErrors = function() {
                                c.te()
                            };
                            this.te()
                        };
                        c.prototype.Ej = function() {
                            c.Nb = 0
                        };
                        c.prototype.Ye = function(b, e, n, m) {
                            c.Nb >= a.conf.Ag ? a.log("M13") : (m = a.utils.uf(m), a.command("reportPageError", new a.events.Error(a.utils.mergeJSON({
                                msg: b + "",
                                url: a.utils.isString(e) ? e : void 0,
                                line: a.utils.isNumber(n) ? n : void 0,
                                stack: m
                            }, this.status))), c.Nb++, c.hadErrors = !0)
                        };
                        c.prototype.te = function() {
                            var b = this;
                            a.aop.support(window.onerror) ? (window.onerror =
                                a.aop.around(window.onerror, function(a, e, m, k, f) {
                                    c.$b || (b.Ye(a, e, m, f), c.$b = !0)
                                }, function() {
                                    c.$b = !1
                                }, "onerror"), a.log("M14")) : a.log("M15")
                        };
                        return c
                    }(b.Xc);
                    f.$b = !1;
                    f.Nb = 0;
                    f.hadErrors = !1;
                    b.ErrorMonitor = f;
                    b.ma = new b.ErrorMonitor
                })(a.monitor || (a.monitor = {}))
            })(g || (g = {}));
            (function(a) {
                (function(b) {
                    var f = function() {
                        function b() {
                            this.hc = this.navTiming = this.resTiming = null
                        }
                        b.prototype.setUp = function() {
                            b.perf = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance;
                            a.utils.isObject(b.perf) &&
                                a.utils.isObject(b.perf.timing) || (b.perf = void 0);
                            this.setResourceTimingBufferSize();
                            this.Qj()
                        };
                        b.prototype.setResourceTimingBufferSize = function() {
                            var c = b.perf,
                                d = a.conf.userConf && a.conf.userConf.resTiming && a.conf.userConf.resTiming.bufSize;
                            !a.utils.isNumber(d) || 0 >= d ? a.log("M16") : c && a.utils.isFunction(c.setResourceTimingBufferSize) ? c.setResourceTimingBufferSize(d) : a.log("M17setResourceTimingBufferSize is not supported")
                        };
                        b.prototype.Qj = function() {
                            var c = b.perf;
                            a.utils.isDefined(c) && a.utils.isFunction(c.clearResourceTimings) &&
                                (this.hc = c.clearResourceTimings.bind(c))
                        };
                        b.prototype.Ch = function() {
                            var c = b.perf;
                            if (c = c && c.timing)
                                if (c.navigationStart && c.navigationStart <= c.loadEventEnd) {
                                    var d = {},
                                        h;
                                    for (h in c) {
                                        var n = c[h];
                                        "number" === typeof n && (d[h] = n)
                                    }
                                    this.navTiming = d
                                } else a.log("M19");
                            else a.log("M18")
                        };
                        b.prototype.ba = function() {
                            this.resTiming = this.Y()
                        };
                        b.prototype.Y = function() {
                            var c = b.perf,
                                d = [];
                            c && c.getEntriesByType && (c = c.getEntriesByType("resource")) && c.length && 0 < c.length && c.unshift && (d = c);
                            0 == d.length && a.log("M20");
                            return d
                        };
                        b.prototype.clearResourceTimings = function() {
                            a.utils.isFunction(this.hc) && this.hc()
                        };
                        return b
                    }();
                    f.perf = null;
                    b.PerformanceMonitor = f;
                    b.perfMonitor = new b.PerformanceMonitor
                })(a.monitor || (a.monitor = {}))
            })(g || (g = {}));
            (function(a) {
                (function(b) {
                    var f = function(e) {
                        function c() {
                            var a = e.call(this) || this;
                            a.Q = [];
                            a.Va = [];
                            a.fd = 500;
                            a.xb = 150;
                            a.Hj = 3E3;
                            return a
                        }
                        u(c, e);
                        c.prototype.setUp = function() {
                            e.prototype.setUp.call(this);
                            a.utils.isDefined(b.PerformanceMonitor.perf) && a.utils.isFunction(b.PerformanceMonitor.perf.getEntriesByType) ?
                                a.utils.isFunction(b.PerformanceMonitor.perf.addEventListener) ? b.PerformanceMonitor.perf.addEventListener("resourcetimingbufferfull", this.ba.bind(this)) : "onresourcetimingbufferfull" in b.PerformanceMonitor.perf ? a.utils.isFunction(b.PerformanceMonitor.perf.gc) ? b.PerformanceMonitor.perf.gc = a.aop.around(b.PerformanceMonitor.perf.gc, this.ba.bind(this)) : b.PerformanceMonitor.perf.gc = this.ba.bind(this) : a.utils.jb.call(window, this.Gj.bind(this), this.Hj) : a.log("ResTiming API is not available");
                            this.Vj();
                            this.Ij()
                        };
                        c.prototype.Vj = function() {
                            var c = a.conf.userConf && a.conf.userConf.resTiming && a.conf.userConf.resTiming.bufSize;
                            a.utils.isDefined(b.PerformanceMonitor.perf) && a.utils.isFunction(b.PerformanceMonitor.perf.setResourceTimingBufferSize) && a.utils.isNumber(c) && 0 < c && (this.xb = c)
                        };
                        c.prototype.Ij = function() {
                            var c = b.PerformanceMonitor.perf;
                            a.utils.isDefined(c) && (a.utils.isFunction(c.setResourceTimingBufferSize) && (c.setResourceTimingBufferSize = a.aop.around(c.setResourceTimingBufferSize, function() {
                                a.utils.isDefined(arguments) &&
                                    a.utils.isDefined(arguments[0]) && (this.xb = arguments[0])
                            }.bind(this))), a.utils.isFunction(c.clearResourceTimings) && (c.clearResourceTimings = a.aop.around(c.clearResourceTimings, function() {
                                this.ba()
                            }.bind(this))))
                        };
                        c.prototype.Bh = function() {
                            this.Va = this.Y()
                        };
                        c.prototype.ba = function() {
                            this.Q = this.Y()
                        };
                        c.prototype.Gj = function() {
                            e.prototype.Y.call(this).length >= this.xb && this.ba()
                        };
                        c.prototype.Y = function() {
                            var a = e.prototype.Y.call(this);
                            if (this.Q.length + a.length > this.fd) return z.debug("Cannot copy more resources. Resource buffer size exceeded"),
                                this.Q.concat(a.slice(0, this.fd - this.Q.length));
                            e.prototype.clearResourceTimings.call(this);
                            return this.Q.concat(a)
                        };
                        c.prototype.oi = function(b, c, e) {
                            return e ? a.utils.filter(this.Q, function(a) {
                                return b + a.startTime >= c && b + a.startTime <= e
                            }) : a.utils.filter(this.Q, function(a) {
                                return b + a.startTime >= c
                            })
                        };
                        c.prototype.be = function(a, b, c) {
                            this.Q = this.Q.concat(e.prototype.Y.call(this));
                            a = this.oi(a, b, c);
                            e.prototype.clearResourceTimings.call(this);
                            this.Q = [];
                            return a
                        };
                        return c
                    }(b.PerformanceMonitor);
                    b.Ug = f;
                    b.ga = new b.Ug
                })(a.monitor ||
                    (a.monitor = {}))
            })(g || (g = {}));
            (function(a) {
                (function(b) {
                    var f = function() {
                        function e() {
                            this.Ib = 5E3;
                            this.Ga = a.conf.userConf && a.conf.userConf.navComplete && a.conf.userConf.navComplete.maxResourceQuietTime ? a.conf.userConf.navComplete.maxResourceQuietTime : this.Ib
                        }
                        e.prototype.setUp = function(a) {
                            this.cc = this.n = 0;
                            this.na = a;
                            this.B = !1;
                            this.Fe = {};
                            this.He = {};
                            this.Ge = {};
                            this.Pd()
                        };
                        e.prototype.start = function(b) {
                            this.setUp(b);
                            b = null;
                            var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                            a.utils.isDefined(d) && (b = new d(function(a) {
                                for (var b = 0; b < a.length; b++) {
                                    var c = a[b];
                                    switch (c.type) {
                                        case "childList":
                                            this.Aj(c.addedNodes);
                                            break;
                                        case "attributes":
                                            this.P(c.target)
                                    }
                                }
                            }.bind(this)), b.observe(document.documentElement, {
                                childList: !0,
                                subtree: !0,
                                attributes: !0,
                                attributeFilter: ["src", "href"]
                            }));
                            this.c = b
                        };
                        e.prototype.Aj = function(a) {
                            for (var b = 0; b < a.length; b++) this.P(a[b])
                        };
                        e.prototype.sf = function(a) {
                            for (var b = 0; b < a.length; b++) {
                                var e = a[b];
                                this.P(e);
                                this.sf(e.childNodes)
                            }
                        };
                        e.prototype.P = function(b) {
                            if (/SCRIPT|IMG|LINK/.test(b.nodeName)) {
                                var d =
                                    b.attributes.getNamedItem("src") || b.attributes.getNamedItem("href");
                                a.utils.isDefined(d) && (d = d.value, !a.utils.isDefined(this.Fe[d]) && 0 < d.length && (this.n += 1, b.addEventListener("load", this.ue.bind(this), !1), b.addEventListener("error", this.Da.bind(this), !1), this.Fe[d] = !0))
                            }
                        };
                        e.prototype.ue = function(c) {
                            var d = this.de(c.target);
                            a.utils.isDefined(this.He[d]) || (this.n -= 1, this.He[d] = !0);
                            this.na = a.utils.now();
                            this.cc += 1;
                            1 == this.cc && (b.w.mf(), this.B = !0);
                            this.Xe(c.target)
                        };
                        e.prototype.Da = function(b) {
                            var d = this.de(b.target);
                            a.utils.isDefined(this.Ge[d]) || (this.n -= 1, this.Ge[d] = !0);
                            this.Xe(b.target)
                        };
                        e.prototype.de = function(a) {
                            var b = "";
                            a instanceof HTMLScriptElement ? b = a.src : a instanceof HTMLImageElement ? b = a.src : a instanceof HTMLLinkElement && (b = a.href);
                            return b
                        };
                        e.prototype.Vb = function(a) {
                            return 0 == this.n && this.B && a - this.na >= this.Ga ? (this.reset(), this.na) : -1
                        };
                        e.prototype.Xe = function(a) {
                            a.removeEventListener("load", this.ue, !1);
                            a.removeEventListener("error", this.Da, !1)
                        };
                        e.prototype.reset = function() {
                            this.B = !1;
                            this.n = 0;
                            this.Pd()
                        };
                        e.prototype.Pd = function() {
                            a.utils.isDefined(this.c) && (this.c.disconnect(), this.c = null)
                        };
                        return e
                    }();
                    b.Vg = f
                })(a.c || (a.c = {}))
            })(g || (g = {}));
            (function(a) {
                (function(b) {
                    var f = function(b) {
                        function c() {
                            return null !== b && b.apply(this, arguments) || this
                        }
                        u(c, b);
                        c.prototype.Tj = function() {
                            this.Ea(Element.prototype, "innerHTML", this.mc.bind(this));
                            this.Ea(HTMLElement.prototype, "innerHTML", this.mc.bind(this));
                            this.Ea(HTMLImageElement.prototype, "src", this.P.bind(this));
                            this.Ea(HTMLScriptElement.prototype, "src", this.P.bind(this));
                            this.Ea(HTMLLinkElement.prototype, "href", this.P.bind(this));
                            this.Bi();
                            this.Yb("append");
                            this.Yb("appendChild");
                            this.Yb("insertBefore")
                        };
                        c.prototype.setUp = function(a) {
                            b.prototype.setUp.call(this, a)
                        };
                        c.prototype.start = function(a) {
                            b.prototype.start.call(this, a);
                            this.Wb = !0
                        };
                        c.prototype.reset = function() {
                            b.prototype.reset.call(this);
                            this.Wb = !1
                        };
                        c.prototype.Ea = function(a, b, c) {
                            this.pj(a, b, Object.getOwnPropertyDescriptor(a, b), c)
                        };
                        c.prototype.pj = function(b, c, e, m) {
                            if (a.utils.isDefined(e) && a.utils.isDefined(e.set)) {
                                var k =
                                    this;
                                Object.defineProperty(b, c, {
                                    set: function(a) {
                                        var b;
                                        try {
                                            b = e.set.apply(this, arguments)
                                        } catch (c) {
                                            throw c;
                                        } finally {
                                            m.call(k, this)
                                        }
                                        return b
                                    }
                                })
                            }
                        };
                        c.prototype.P = function(a) {
                            (this.c || this.Wb) && b.prototype.P.call(this, a)
                        };
                        c.prototype.Bi = function() {
                            var b = Element.prototype,
                                c = this;
                            a.utils.isDefined(b.setAttribute) && (b.setAttribute = a.aop.around(b.setAttribute, null, function() {
                                c.P.call(c, this)
                            }))
                        };
                        c.prototype.Yb = function(b) {
                            var c = Element.prototype,
                                e = this;
                            a.utils.isDefined(c[b]) && (c[b] = a.aop.around(c[b], null,
                                function(a) {
                                    e.mc.call(e, a)
                                }))
                        };
                        c.prototype.mc = function(c) {
                            (this.c || this.Wb) && a.utils.isDefined(c) && a.utils.isDefined(c.childNodes) && (b.prototype.P.call(this, c), b.prototype.sf.call(this, c.childNodes))
                        };
                        return c
                    }(b.Vg);
                    b.ag = f
                })(a.c || (a.c = {}))
            })(g || (g = {}));
            (function(a) {
                (function(b) {
                    var f = function() {
                        function e() {
                            this.Ib = 3E3;
                            this.Ga = a.conf.userConf && a.conf.userConf.navComplete && a.conf.userConf.navComplete.maxXhrQuietTime ? a.conf.userConf.navComplete.maxXhrQuietTime : this.Ib
                        }
                        e.prototype.setUp = function(a) {
                            this.dc =
                                this.n = 0;
                            this.oa = a;
                            this.B = !1;
                            this.If = {};
                            this.Oc = {}
                        };
                        e.prototype.start = function(a) {
                            this.setUp(a)
                        };
                        e.prototype.lh = function(b) {
                            a.utils.isDefined(this.If[b]) || (this.n += 1, this.If[b] = !0)
                        };
                        e.prototype.sd = function(c) {
                            b.w.B && (a.utils.isDefined(this.Oc) && !a.utils.isDefined(this.Oc[c]) && (this.oa = a.utils.now(), this.n -= 1, this.Oc[c] = !0), this.dc += 1, 1 == this.dc && (b.w.mf(), this.B = !0))
                        };
                        e.prototype.Vb = function(a) {
                            return 0 == this.n && this.B && a - this.oa >= this.Ga ? (this.reset(), this.oa) : -1
                        };
                        e.prototype.reset = function() {
                            this.B = !1;
                            this.n = 0
                        };
                        return e
                    }();
                    b.gh = f
                })(a.c || (a.c = {}))
            })(g || (g = {}));
            (function(a) {
                var b = a.utils.generateGUID,
                    f = function() {
                        return function(c, e) {
                            this.start = a.utils.now();
                            this.parent = c;
                            this.sb = e;
                            this.guid = b()
                        }
                    }();
                a.Uc = f;
                var e = function() {
                    function b() {}
                    b.bl = function() {
                        return b.events
                    };
                    b.Se = function(e, h, n, m) {
                        var k;
                        b.nc(h);
                        try {
                            a.utils.isFunction(e) && (k = e.apply(n, m))
                        } catch (f) {
                            throw f;
                        } finally {
                            b.pa()
                        }
                        return k
                    };
                    b.Ef = function(a, e) {
                        if (e.tb) return e;
                        var n;
                        return function(m) {
                            var k = b.Ld(a, m, n);
                            return b.Se(e, k, this, arguments)
                        }
                    };
                    b.Ld = function(b, c, e) {
                        a.log("[JSA] Executing wrapped " + b + (e ? " whose parent is " + e.sb.action : ""));
                        a.utils.isDefined(c) ? (c = a.Wc.Zi(c.target || c.srcElement), c.action = b) : c = new a.za(b);
                        return new f(e, c)
                    };
                    b.Ff = function(e, h) {
                        if (h.tb) return h;
                        var n = b.Za(),
                            m = new a.za(e);
                        new f(n, m);
                        return function() {
                            var m = new a.za(e),
                                m = new f(n, m);
                            return b.Se(h, m, this, arguments)
                        }
                    };
                    b.El = function(a, e) {
                        return function() {
                            var n = e.apply(this, arguments);
                            b.Cd(a);
                            return n
                        }
                    };
                    b.Za = function() {
                        return 0 < b.events.length ? b.events[b.events.length -
                            1] : null
                    };
                    b.nc = function(a) {
                        b.events.push(a)
                    };
                    b.pa = function() {
                        b.events.pop()
                    };
                    b.Db = function(b, c) {
                        var e = b,
                            m = 1,
                            f = "";
                        if (!a.utils.isDefined(e)) return null;
                        for (; a.utils.isDefined(e.parent);) f = " -> " + e.sb.action + f, e = e.parent, m += 1;
                        var g = a.utils.now();
                        a.utils.isDefined(e.sb) && (f = e.sb.action + f + " -> " + c);
                        a.log("SPA2~ Causality Chain: " + f);
                        a.log("SPA2~ Transition started from " + e.start + ", and went through " + m + " functions");
                        a.log("SPA2~ Transition took " + (g - e.start) + " ms");
                        return e
                    };
                    b.Cd = function(a) {
                        return b.Db(b.Za(),
                            a)
                    };
                    b.setUp = function() {
                        b.events = [];
                        window.setTimeout = function(e, h) {
                            var n = b.Ff("setTimeout", e);
                            return a.utils.Ha.apply(this, [n, h])
                        };
                        window.setInterval = function(e, h) {
                            var n = b.Ff("setInterval", e);
                            return a.utils.jb.apply(this, [n, h])
                        }
                    };
                    return b
                }();
                e.events = [];
                a.l = e
            })(g || (g = {}));
            (function(a) {
                var b = window.addEventListener,
                    f = a.utils.isDefined(window.Yc) ? window.Yc.prototype.addEventListener : function() {},
                    e = function() {
                        return function(a, b, c, e, f, g, r, p) {
                            this.action = a || "";
                            this.ig = b || "";
                            this.className = c || "";
                            this.tagName =
                                e || "";
                            this.name = f || "";
                            this.text = g || "";
                            this.src = r;
                            this.item = p
                        }
                    }();
                a.za = e;
                var c = function() {
                    function c() {}
                    c.setUp = function() {
                        Array.prototype.push.apply(c.Jb, []);
                        c.wk();
                        a.utils.isDefined(window.Yc) ? c.xk() : c.kh()
                    };
                    c.ql = function() {
                        return []
                    };
                    c.Zi = function(b) {
                        var c = b.id || "",
                            d = b.className || "",
                            f = "",
                            g = new e;
                        b === document ? f = "document" : b === window ? f = "window" : b instanceof XMLHttpRequest ? (f = "xhr", g.src = a.utils.isObject(b._adrumAjaxT) ? b._adrumAjaxT.url() : "") : b instanceof WebSocket ? (f = "websocket", g.src = b.url) : b instanceof
                        HTMLScriptElement ? (f = "script", g.src = b.src) : b instanceof HTMLAnchorElement ? (f = "a", g.text = b.text.trim()) : b instanceof HTMLButtonElement ? (f = "button", g.name = b.name) : b instanceof HTMLDivElement ? (f = "div", g.text = b.title || b.innerText.trim()) : b instanceof HTMLImageElement ? (f = "img", g.src = b.src) : b instanceof HTMLLIElement ? (f = "li", g.item = b.value) : b instanceof HTMLUListElement ? f = "ul" : b instanceof HTMLFormElement ? f = "form" : b instanceof HTMLFrameElement ? (f = "frame", g.src = b.src) : b instanceof HTMLInputElement ? (f = "input",
                            g.name = b.name) : b instanceof HTMLTableElement ? f = "table" : b instanceof HTMLTableCaptionElement ? f = "tcap" : b instanceof HTMLTableCellElement ? (f = "td", g.text = a.utils.isDefined(b.innerText) ? b.innerText.trim() : "") : b instanceof HTMLTableRowElement ? f = "tr" : (f = a.utils.isDefined(b.tagName) ? b.tagName : "", a.log("SPA2~ Cannot find out what kind of event target it is: " + f));
                        g.ig = c;
                        g.className = d;
                        g.tagName = f;
                        g.text = a.utils.isDefined(b.innerText) ? b.innerText : "";
                        return g
                    };
                    c.wk = function() {
                        a.utils.forEach(c.Jb, function(c) {
                            b(c,
                                function(b) {
                                    b = b.target || b.srcElement;
                                    (b === document || b === window || b instanceof XMLHttpRequest || b instanceof HTMLElement) && null != b && b["on" + c] && (b["on" + c] = a.l.Ef(c, b["on" + c]), b["on" + c].tb = !0)
                                }, !0)
                        })
                    };
                    c.kh = function() {
                        a.utils.forEach(c.Jb, function(c) {
                            b(c, function(b) {
                                b = a.l.Ld(c, b, null);
                                a.l.nc(b)
                            }, !0);
                            b(c, function() {
                                a.l.pa()
                            }, !1)
                        })
                    };
                    c.xk = function() {
                        EventTarget.prototype.addEventListener = function(b, c, e) {
                            if (c && c.tb) return f.call(this, b, c, e);
                            var d = c;
                            switch (b) {
                                case "click":
                                case "dblclick":
                                case "auxclick":
                                case "mousedown":
                                case "mouseup":
                                case "drop":
                                case "keyup":
                                case "keydown":
                                case "keypress":
                                case "contextmenu":
                                case "pageChanged":
                                case "scroll":
                                case "open":
                                case "message":
                                case "error":
                                case "close":
                                    d =
                                        a.l.Ef(b, c)
                            }
                            f.call(this, b, d, e)
                        }
                    };
                    return c
                }();
                c.Jb = "click dblclick mousedown mouseup change scroll select submit keydown keypress keyup load unload".split(" ");
                a.Wc = c
            })(g || (g = {}));
            (function(a) {
                (function(b) {
                    b.parseURI = function(a) {
                        var b = String(a).replace(/^\s+|\s+$/g, "").match(/^([^:\/?#]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
                        a = b && null != a.match(b[1] + "//");
                        return b && {
                            href: b[0] || "",
                            protocol: b[1] || "",
                            zc: a ? "//" : "",
                            Ic: b[2] || "",
                            lc: b[3] || "",
                            host: b[4] || "",
                            hostname: b[5] || "",
                            port: b[6] || "",
                            pathname: b[7] || "",
                            search: b[8] || "",
                            hash: b[9] || ""
                        }
                    };
                    b.absolutizeURI = function(a, e) {
                        function c(a) {
                            var b = [];
                            a.replace(/^(\.\.?(\/|$))+/, "").replace(/\/(\.(\/|$))+/g, "/").replace(/\/\.\.$/, "/../").replace(/\/?[^\/]*/g, function(a) {
                                "/.." === a ? b.pop() : b.push(a)
                            });
                            return b.join("").replace(/^\//, "/" === a.charAt(0) ? "/" : "")
                        }
                        var d, h, n, m, g, q, r, p;
                        p = e ? b.parseURI(e) : {};
                        r = a ? b.parseURI(a) : {};
                        p.protocol ? (d = p.protocol, h = p.zc, n = p.Ic, m = p.lc, g = p.host, q = c(p.pathname), r = p.search) :
                            p.host ? (d = r.protocol, h = r.zc, n = p.Ic, m = p.lc, g = p.host, q = c(p.pathname), r = p.search) : (d = r.protocol, h = r.zc, n = r.Ic, m = r.lc, g = r.host, p.pathname ? ("/" === p.pathname.charAt(0) ? q = c(p.pathname) : (q = r.pathname ? r.pathname.slice(0, r.pathname.lastIndexOf("/") + 1) + p.pathname : h ? "/" + p.pathname : p.pathname, q = c(q)), r = p.search) : (q = c(r.pathname), r = p.search || r.search));
                        return d + h + (n ? n + (m ? ":" + m : "") + "@" : "") + g + q + r + (p.hash ? p.hash : "")
                    };
                    b.getFullyQualifiedUrl = function(f) {
                        try {
                            var e, c = document.location.href,
                                d;
                            a: {
                                for (var h = document.getElementsByTagName("base"),
                                        n = 0; n < h.length; n++) {
                                    var m = h[n].href;
                                    if (m) {
                                        d = m;
                                        break a
                                    }
                                }
                                d = void 0
                            }
                            e = d ? b.absolutizeURI(c, d) : c;
                            return b.absolutizeURI(e, f)
                        } catch (g) {
                            return a.exception(g, "M21", f, e), f
                        }
                    }
                })(a.utils || (a.utils = {}))
            })(g || (g = {}));
            (function(a) {
                var b = function() {
                    function b() {
                        this.rb = [];
                        this.kb(b.yb, 0)
                    }
                    b.prototype.hj = function(a) {
                        this.kb(b.td, a)
                    };
                    b.prototype.jj = function(a) {
                        this.kb(b.Bd, a)
                    };
                    b.prototype.ij = function(a) {
                        this.kb(b.vd, a)
                    };
                    b.prototype.kb = function(a, b) {
                        this.rb.push({
                            gj: (new Date).getTime(),
                            fj: b,
                            Le: a
                        });
                        this.Hh = a
                    };
                    b.prototype.getPhaseName =
                        function() {
                            return this.Hh
                        };
                    b.prototype.getPhaseID = function(a) {
                        for (var c = 0; c < b.zd.length; c++)
                            if (b.zd[c] === a) return c;
                        return null
                    };
                    b.prototype.getPhaseCallbackTime = function(a) {
                        for (var b = this.rb, d = 0; d < b.length; d++)
                            if (b[d].Le === a) return b[d].gj;
                        return null
                    };
                    b.prototype.findPhaseAtNominalTime = function(e) {
                        a.assert(0 <= e);
                        for (var c = this.rb, d = c.length - 1; 0 <= d; d--)
                            if (e >= c[d].fj) return c[d].Le;
                        a.error("M22", e, a.utils.Oh(c));
                        return b.yb
                    };
                    return b
                }();
                b.yb = "AFTER_FIRST_BYTE";
                b.td = "AFTER_DOM_INTERACTIVE";
                b.Bd = "AT_ONLOAD";
                b.vd = "AFTER_ONLOAD";
                b.zd = [b.yb, b.td, b.Bd, b.vd];
                a.Jk = b;
                a.lifecycle = new b;
                a.lifecycle = a.lifecycle
            })(g || (g = {}));
            (function(a) {
                a = a.events || (a.events = {});
                a = a.b || (a.b = {});
                a.navigationStart = "navigationStart";
                a.domainLookupStart = "domainLookupStart";
                a.domainLookupEnd = "domainLookupEnd";
                a.connectStart = "connectStart";
                a.secureConnectionStart = "secureConnectionStart";
                a.connectEnd = "connectEnd";
                a.requestStart = "requestStart";
                a.responseStart = "responseStart";
                a.responseEnd = "responseEnd";
                a.domContentLoadedEventStart = "domContentLoadedEventStart";
                a.loadEventEnd = "loadEventEnd";
                a.gf = "sendTime";
                a.Vd = "firstByteTime";
                a.cf = "respAvailTime";
                a.df = "respProcTime";
                a.Kc = "viewChangeStart";
                a.Af = "viewChangeEnd";
                a.Lc = "viewDOMLoaded";
                a.Hf = "xhrRequestsCompleted";
                a.Cl = "viewFragmentsLoaded";
                a.Dl = "viewResourcesLoaded";
                a.Mc = "virtualPageStart";
                a.sk = "virtualPageEnd"
            })(g || (g = {}));
            (function(a) {
                var b = a.events || (a.events = {});
                b.metricSpec = {};
                b.metricSpec[a.EventType.PageView] = {
                    Th: {
                        start: b.b.navigationStart,
                        end: b.b.loadEventEnd,
                        name: "PLT"
                    },
                    $h: {
                        start: b.b.navigationStart,
                        end: b.b.responseStart,
                        name: "FBT"
                    },
                    wl: {
                        start: b.b.navigationStart,
                        end: b.b.requestStart,
                        name: "SCT"
                    },
                    xl: {
                        start: b.b.secureConnectionStart,
                        end: b.b.connectEnd,
                        name: "SHT"
                    },
                    Zk: {
                        start: b.b.domainLookupStart,
                        end: b.b.domainLookupEnd,
                        name: "DLT"
                    },
                    Bl: {
                        start: b.b.connectStart,
                        end: b.b.connectEnd,
                        name: "TCP"
                    },
                    tl: {
                        start: b.b.requestStart,
                        end: b.b.responseStart,
                        name: "RAT"
                    },
                    al: {
                        start: b.b.responseStart,
                        end: b.b.loadEventEnd,
                        name: "FET"
                    },
                    dl: {
                        start: b.b.responseStart,
                        end: b.b.domContentLoadedEventStart,
                        name: "DRT"
                    },
                    cl: {
                        start: b.b.responseStart,
                        end: b.b.responseEnd,
                        name: "DDT"
                    },
                    Xk: {
                        start: b.b.responseEnd,
                        end: b.b.domContentLoadedEventStart,
                        name: "DPT"
                    },
                    sl: {
                        start: b.b.domContentLoadedEventStart,
                        end: b.b.loadEventEnd,
                        name: "PRT"
                    },
                    Yk: {
                        start: b.b.navigationStart,
                        end: b.b.domContentLoadedEventStart,
                        name: "DOM"
                    }
                };
                b.metricSpec[a.EventType.Ajax] = {
                    $h: {
                        start: b.b.gf,
                        end: b.b.Vd,
                        name: "FBT"
                    },
                    Nk: {
                        start: b.b.Vd,
                        end: b.b.cf,
                        name: "DDT"
                    },
                    Mk: {
                        start: b.b.cf,
                        end: b.b.df,
                        name: "DPT"
                    },
                    Th: {
                        start: b.b.gf,
                        end: b.b.df,
                        name: "PLT"
                    }
                };
                b.metricSpec[a.EventType.VPageView] = {
                    kl: {
                        start: b.b.Mc,
                        end: b.b.sk,
                        name: "PLT"
                    },
                    Vk: {
                        start: b.b.Kc,
                        end: b.b.Af,
                        name: "DDT"
                    },
                    hl: {
                        start: b.b.Kc,
                        end: b.b.Lc,
                        name: "DRT"
                    },
                    Ek: {
                        start: b.b.Af,
                        end: b.b.Lc,
                        name: "DPT"
                    },
                    Fk: {
                        start: b.b.Kc,
                        end: b.b.Lc,
                        name: "DOM"
                    },
                    rl: {
                        start: "viewChangeEnd",
                        end: "xhrRequestsCompleted",
                        name: null
                    },
                    il: {
                        start: "viewChangeEnd",
                        end: "viewPartialsLoaded",
                        name: null
                    },
                    gl: {
                        start: "viewPartialsLoaded",
                        end: "viewFragmentsLoaded",
                        name: null
                    },
                    jl: {
                        start: "viewPartialsLoaded",
                        end: "viewResourcesLoaded",
                        name: null
                    }
                };
                b.metricSpec[a.EventType.NG_VIRTUAL_PAGE] = b.metricSpec[a.EventType.VPageView]
            })(g ||
                (g = {}));
            (function(a) {
                (function(b) {
                    var f = function(e) {
                        function c(d) {
                            d = e.call(this, d) || this;
                            d.constructor != c && d.constructor != b.AdrumAjax && a.reportAPIMessage(a.I.V, a.ta, "ADRUM.events.Ajax", []);
                            return d
                        }
                        u(c, e);
                        c.prototype.type = function() {
                            return a.EventType.Ajax
                        };
                        return c
                    }(b.EventTracker);
                    b.Ajax = f;
                    b.la(b.G[a.EventType.Ajax], f.prototype);
                    b.Ad(b.metricSpec[a.EventType.Ajax], f.prototype)
                })(a.events || (a.events = {}))
            })(g || (g = {}));
            (function(a) {
                (function(b) {
                    var f = function(b) {
                        function c(a) {
                            return b.call(this, a) ||
                                this
                        }
                        u(c, b);
                        c.prototype.type = function() {
                            return a.EventType.Ajax
                        };
                        return c
                    }(b.Ajax);
                    b.AdrumAjax = f;
                    b.la(b.G[a.EventType.ADRUM_XHR], f.prototype)
                })(a.events || (a.events = {}))
            })(g || (g = {}));
            (function(a) {
                (function(b) {
                    var f = a.utils.isObject,
                        e = a.utils.isDefined,
                        c = a.utils.map,
                        d = a.utils.reduce,
                        h = a.utils.filter,
                        n = a.utils.vk,
                        m = a.utils.isString,
                        g = a.utils.Kh,
                        q = a.utils.Ah,
                        r = a.utils.isFunction,
                        p = a.utils.mergeJSON,
                        s = a.utils.Ab,
                        t = a.utils.now,
                        v = a.utils.lb,
                        w = function(w) {
                            function l() {
                                var b = w.call(this) || this;
                                b.conf = null;
                                b.Cc = !1;
                                b.zb = 0;
                                if (!0 === window["adrum-xhr-disable"]) return a.log("M23"), b;
                                if (!window.XMLHttpRequest) return a.log("M24"), b;
                                b.conf = {
                                    exclude: [{
                                        urls: [{
                                            pattern: a.conf.beaconUrlHttp + a.conf.corsEndpointPath
                                        }, {
                                            pattern: a.conf.beaconUrlHttps + a.conf.corsEndpointPath
                                        }]
                                    }],
                                    include: [],
                                    maxPerPageView: l.Vc
                                };
                                l.Re(b.conf, a.conf.userConf && a.conf.userConf.xhr);
                                b.h = window.XMLHttpRequest.prototype;
                                if (!b.h) return a.log("M25"), b;
                                if (!("open" in b.h && "send" in b.h)) return a.log("M26"), b;
                                b.Cc = a.aop.support(b.h.open) && a.aop.support(b.h.send);
                                b.Cc || a.log("M27");
                                return b
                            }
                            u(l, w);
                            l.Re = function(b, c) {
                                var e = l.Vc;
                                if (c) {
                                    var d = c.maxPerPageView;
                                    a.utils.isNumber(d) && 0 < d ? e = d : a.reportAPIMessage(a.I.Of, "value is not valid; don't limit xhr", "xhr.maxPerPageView", [d])
                                }
                                b.maxPerPageView = e;
                                b.exclude = l.Jc(l.zf, "exclude", b, c);
                                b.include = l.Jc(l.zf, "include", b, c);
                                b.parameter = l.Jc(l.qk, "parameter", c)
                            };
                            l.Jc = function(a, b) {
                                for (var e = [], d = 2; d < arguments.length; d++) e[d - 2] = arguments[d];
                                return g(c(h(q(c(g(e), function(a) {
                                    return n(a[b])
                                })), l.Ki(b)), a))
                            };
                            l.zf = function(a) {
                                var b =
                                    l.Pe(a);
                                a = l.Qe(a);
                                return b || a
                            };
                            l.Ki = function(b) {
                                return function(c) {
                                    return f(c) || a.reportAPIMessage(a.I.Nf, "Filter object must be an object", "xhr." + b, [c])
                                }
                            };
                            l.Qe = function(a) {
                                var b = a.urls;
                                if (b && 0 < b.length && (a.urls = l.Gh(b), 0 < a.urls.length)) return a
                            };
                            l.Pe = function(b) {
                                var c = b.method;
                                if (e(c)) {
                                    if (m(c)) return b;
                                    a.error("M28")
                                }
                            };
                            l.qk = function(a) {
                                var b = l.Qe(a);
                                l.Pe(a);
                                return l.zj(a) && b
                            };
                            l.zj = function(b) {
                                if (r(b.getFromBody)) return b;
                                a.error("M29")
                            };
                            l.Gh = function(b) {
                                for (var c = [], e = 0; e < b.length; e++) {
                                    var d = b[e].pattern;
                                    if ("string" === typeof d) try {
                                        c.push(new RegExp(d))
                                    } catch (h) {
                                        a.exception(h, "Parse regex pattern failed.")
                                    } else a.error("xhr filter pattern should be a string")
                                }
                                return c
                            };
                            l.kf = function(a, b, c) {
                                var e = c && c.include;
                                c = c && c.exclude;
                                return e && 0 < e.length && !l.qe(b, a, e) || c && 0 < c.length && l.qe(b, a, c)
                            };
                            l.Da = function(b) {
                                var c = b.message || b.description,
                                    e = b.fileName || b.filename,
                                    d = b.lineNumber;
                                a.utils.isString(b.description) && 0 <= b.description.indexOf("Access is denied.") && (c += ": maybe you have CORS XHR error in IE");
                                a.monitor.ma.Ye(c,
                                    e, d, b)
                            };
                            l.prototype.setUp = function() {
                                if (this.Cc) {
                                    a.log("M30");
                                    a.xhrConstructor = window.XMLHttpRequest;
                                    a.xhrOpen = this.xhrOpen = this.h.open;
                                    a.xhrSend = this.xhrSend = this.h.send;
                                    var b = this;
                                    this.h.open = a.aop.around(this.h.open, function() {
                                        l.Oi(this) && (4 === this.readyState ? (a.log("M31"), l.Uh(this._adrumAjaxT), delete this.rd, l.a(this, this._adrumAjaxT)) : a.log("M32" + this._adrumAjaxT.url() + "' is reported."));
                                        var c = 1 <= arguments.length ? String(arguments[0]) : "",
                                            e = 2 <= arguments.length ? String(arguments[1]) : "",
                                            e = a.utils.getFullyQualifiedUrl(e);
                                        b.zb >= b.conf.maxPerPageView || l.kf(e, c, b.conf) || (this._adrumAjaxT = new a.events.AdrumAjax(a.utils.mergeJSON({
                                            method: c,
                                            url: e
                                        }, b.status)))
                                    }, null, "XHR.open", l.Da);
                                    this.h.send = a.aop.around(this.h.send, function(e) {
                                        var d = this,
                                            h = this._adrumAjaxT,
                                            n = !1;
                                        if (h && !(++b.zb > b.conf.maxPerPageView)) {
                                            var m = a.utils.now(),
                                                f = h.getSendTime();
                                            a.assert(null === f, "M33");
                                            h.timestamp(m);
                                            h.markSendTime(f || m);
                                            h.parentPhase(a.lifecycle.getPhaseName());
                                            a.conf.spa2 && (d.Sa = new a.Uc(a.l.Za(), new a.za("XHR.send")));
                                            l.Pi(h.url()) ? d.setRequestHeader("ADRUM",
                                                "isAjax:true") : a.log("M34", document.location.href, h.url());
                                            e = l.li(h.url(), b.conf.parameter, e);
                                            h.parameter(e);
                                            var g = 0,
                                                k = function() {
                                                    if (4 == d.readyState) n ? a.log("M35") : (a.log("M36"), b.ub(d));
                                                    else {
                                                        var e = null;
                                                        try {
                                                            e = d.onreadystatechange
                                                        } catch (h) {
                                                            if (n) {
                                                                a.log("M37", h);
                                                                return
                                                            }
                                                            a.log("M38", h);
                                                            b.ub(d);
                                                            return
                                                        }
                                                        g++;
                                                        e ? a.aop.support(e) ? (d.onreadystatechange = l.Md(e, "XHR.onReadyStateChange"), a.log("M39", g)) : c || (a.log("M40"), b.ub(d)) : g < l.eh ? a.utils.lb(k) : n ? a.log("M41") : (a.log("M42"), b.ub(d))
                                                    }
                                                };
                                            if (c) {
                                                a.log("M43");
                                                try {
                                                    b.zk.call(d,
                                                        "readystatechange", l.Lh), n = !0
                                                } catch (q) {
                                                    a.error("M44", q)
                                                }
                                            }
                                            k()
                                        }
                                    }, function() {
                                        if (a.conf.spa2) {
                                            var b = this._adrumAjaxT;
                                            b && a.c.w.J.lh(b.url())
                                        }
                                    }, "XHR.send", l.Da);
                                    var c = "addEventListener" in this.h && "removeEventListener" in this.h && a.aop.support(this.h.addEventListener) && a.aop.support(this.h.removeEventListener);
                                    c ? (this.zk = this.h.addEventListener, this.h.addEventListener = a.aop.around(this.h.addEventListener, function(b, c) {
                                        if (/^(load|error|readystatechange)$/.test(b) && c) {
                                            var e = l.mk(c);
                                            if (e) {
                                                var d = s(arguments);
                                                d[1] = e;
                                                a.log("M45");
                                                return d
                                            }
                                            a.log("M46", b, c)
                                        }
                                    }, null, "XHR.addEventListener"), this.Bk = this.h.removeEventListener, this.h.removeEventListener = a.aop.around(this.h.removeEventListener, function(c, e) {
                                        if (this._adrumAjaxT) {
                                            var d = s(arguments);
                                            e.__adrumInterceptor ? (d[1] = e.__adrumInterceptor, a.log("M47"), b.Bk.apply(this, d)) : a.log("M48")
                                        }
                                    }, null, "XHR.removeEventListener")) : a.log("M49");
                                    a.log("M50")
                                }
                            };
                            l.prototype.tc = function() {
                                this.zb = 0
                            };
                            l.We = function(a) {
                                l.T[a] = [];
                                delete l.T[a]
                            };
                            l.oc = function(b, c) {
                                if (a.utils.isDefined(c.Sa)) {
                                    var e =
                                        a.l.Db(c.Sa).guid;
                                    l.vf(c, b);
                                    a.utils.isDefined(l.T[e]) || (l.T[e] = []); - 1 == l.T[e].indexOf(b) && l.T[e].push(b)
                                } else a.log("~AnySPA: error in putInParentEventWaitingQueue() as xhr._xhrEvent is undefined.")
                            };
                            l.aj = function(b, c) {
                                var e = l.T[c];
                                a.utils.isDefined(e) && (e.forEach(function(c) {
                                    c.parent(b);
                                    a.command("reportXhr", c);
                                    a.l.pa()
                                }), l.We(c))
                            };
                            l.Cj = function() {
                                for (var b in l.T) l.T[b].forEach(function(b) {
                                    a.command("reportXhr", b);
                                    a.l.pa()
                                }), l.We(b)
                            };
                            l.Ae = function(a, b) {
                                for (var c = !1, e = 0; e < b.length; e++) {
                                    var d = b[e];
                                    if (d && d.test(a)) {
                                        c = !0;
                                        break
                                    }
                                }
                                return c
                            };
                            l.qe = function(a, b, c) {
                                var e = !1;
                                if (b && c)
                                    for (var d = 0; d < c.length; d++) {
                                        var h = c[d];
                                        if (!(h.method && a !== h.method || h.urls && !l.Ae(b, h.urls))) {
                                            e = !0;
                                            break
                                        }
                                    }
                                return e
                            };
                            l.tj = function(a, b, c) {
                                return (b || a) === (c || a)
                            };
                            l.Pi = function(a) {
                                var b = document.createElement("a");
                                b.href = a;
                                a = document.location;
                                var c = a.protocol;
                                return b.protocol === c && b.hostname === a.hostname && l.tj(l.Jh[c], b.port, a.port)
                            };
                            l.li = function(a, b, e) {
                                if (b && (b = h(c(h(b, function(b) {
                                            return l.Ae(a, b.urls)
                                        }), function(a) {
                                            return a.getFromBody(e)
                                        }),
                                        f), 0 < b.length)) return d(b, p, {})
                            };
                            l.Ub = function(b) {
                                var c = b._adrumAjaxT;
                                if (c) {
                                    var e = a.utils.now();
                                    2 == b.readyState ? c.markFirstByteTime(c.getFirstByteTime() || e) : 4 == b.readyState && (c.markRespAvailTime(c.getRespAvailTime() || e), c.markFirstByteTime(c.getFirstByteTime() || e), a.conf.spa2 && (b = new a.Uc(b.Sa, new a.za("XHR.load")), a.l.nc(b)))
                                }
                            };
                            l.fe = function(b) {
                                var c = b._adrumAjaxT;
                                if (c && 4 == b.readyState) {
                                    var e = t(),
                                        d = c.getRespProcTime();
                                    c.markRespAvailTime(c.getRespAvailTime() || e);
                                    e > d && c.markRespProcTime(e);
                                    a.conf.spa2 ?
                                        l.Dh(b, c) : l.vc(b, c)
                                }
                            };
                            l.Md = function(a, b) {
                                return l.Ak(a, function() {
                                    l.Ub(this)
                                }, function() {
                                    l.fe(this)
                                }, b)
                            };
                            l.Lh = function() {
                                l.Ub(this);
                                l.fe(this)
                            };
                            l.Oi = function(b) {
                                return a.utils.isDefined(b._adrumAjaxT) && a.utils.isString(b._adrumAjaxT._url)
                            };
                            l.Uh = function(b) {
                                var c = a.utils.now();
                                b.markRespAvailTime(b.getRespAvailTime() || c);
                                b.markFirstByteTime(b.getFirstByteTime() || c);
                                b.markRespProcTime(b.getRespProcTime() || c)
                            };
                            l.vc = function(a, b) {
                                var c = {};
                                a.rd = c;
                                v(function() {
                                    a.rd === c && (delete a._adrumAjaxT, l.a(a, b))
                                })
                            };
                            l.Dh = function(c, e) {
                                var d = a.l.Db(c.Sa);
                                a.utils.isDefined(b.A.vp) && !b.A.U && b.A.vp.Eb == d ? (e.parent(b.A.vp), l.vc(c, e), a.l.pa()) : (a.utils.isDefined(b.A.vp) && !b.A.U && e.parent(b.A.vp), l.oc(e, c), a.utils.Ha.apply(null, [l.Cj, l.kd]), delete c._adrumAjaxT);
                                a.c.w.J.sd(e.url())
                            };
                            l.vf = function(a, b) {
                                var c = a.status,
                                    e;
                                b.xhrStatus(c);
                                b.allResponseHeaders(a.getAllResponseHeaders());
                                if (400 <= c) {
                                    try {
                                        m(a.responseText) && (e = a.responseText)
                                    } catch (d) {
                                        m(a.responseType) && (e = a.responseType)
                                    }
                                    b.error({
                                        status: c,
                                        msg: e
                                    })
                                }
                            };
                            l.a = function(b,
                                c) {
                                l.vf(b, c);
                                a.command("reportXhr", c)
                            };
                            l.prototype.ub = function(b) {
                                if (b._adrumAjaxT) {
                                    var c = a.utils.now() + 3E4,
                                        e = function() {
                                            l.Ub(b);
                                            var d = b._adrumAjaxT;
                                            if (d) {
                                                var h = a.utils.now();
                                                4 == b.readyState ? (a.assert(null === d.getRespProcTime(), "M51"), d.markRespProcTime(d.getRespProcTime() || h), a.log("M52"), l.vc(b, d), a.conf.spa2 && (a.l.pa(), a.c.w.J.sd(d.url()))) : h < c ? a.utils.Ha.apply(null, [e, l.kd]) : (delete b._adrumAjaxT, a.log("M53"))
                                            }
                                        };
                                    e()
                                }
                            };
                            l.Ak = function(b, c, e, d) {
                                var h = b;
                                b && "object" === typeof b && "toString" in b && "[xpconnect wrapped nsIDOMEventListener]" ===
                                    b.toString() && "handleEvent" in b && (h = function() {
                                        b.handleEvent.apply(this, s(arguments))
                                    });
                                return a.aop.around(h, c, e, d)
                            };
                            l.mk = function(b) {
                                if (b.__adrumInterceptor) return b.__adrumInterceptor;
                                if (a.aop.support(b)) {
                                    var c = l.Md(b, "XHR.invokeEventListener");
                                    return b.__adrumInterceptor = c
                                }
                            };
                            return l
                        }(b.Xc);
                    w.eh = 5;
                    w.$f = 50;
                    w.Vc = 50;
                    w.kd = 2E3;
                    w.T = {};
                    w.Jh = {
                        "http:": "80",
                        "https:": "443"
                    };
                    b.Ba = w;
                    b.ja = new b.Ba
                })(a.monitor || (a.monitor = {}))
            })(g || (g = {}));
            (function(a) {
                (function(b) {
                    var f = function(e) {
                        function c(b) {
                            b = e.call(this,
                                b) || this;
                            b.perf = new a.PerformanceTracker;
                            a.monitor.ja.tc();
                            return b
                        }
                        u(c, e);
                        c.prototype.type = function() {
                            return a.EventType.VPageView
                        };
                        c.prototype.Qb = function() {
                            return b.EventTracker.Bb(this.guid(), this.url(), this.type())
                        };
                        c.prototype.Bc = function() {
                            var b = this.Qb();
                            a.monitor.ma.set("parent", b);
                            a.log("SPA2~ AnySpaVPageView startCorrelatingErrors, GUID: %s, Url: %s", b.guid(), b.url())
                        };
                        c.prototype.startCorrelatingXhrs = function() {
                            a.log("SPA2~ AnySpaVPageView startCorrelatingXhrs");
                            a.utils.isDefined(this.Eb) &&
                                !a.monitor.A.U && a.monitor.Ba.aj(this, this.Eb.guid)
                        };
                        c.prototype.start = function() {
                            this.startCorrelatingXhrs();
                            this.Bc()
                        };
                        return c
                    }(b.EventTracker);
                    b.Qc = f;
                    b.la(b.G[a.EventType.VPageView], f.prototype)
                })(a.events || (a.events = {}))
            })(g || (g = {}));
            (function(a) {
                (function(b) {
                    var f = function() {
                        function e() {}
                        e.prototype.setUp = function() {
                            var c = !1;
                            e.oe = !1;
                            e.Dd = a.utils.Nd();
                            a.l.setUp();
                            a.Wc.setUp();
                            b.ga.setUp();
                            a.c.w.setUp(a.utils.now());
                            e.fa = document.URL;
                            a.utils.isDefined(window.history) && a.utils.isFunction(window.history.pushState) &&
                                (c = !0, window.history.pushState = a.aop.around(window.history.pushState, function() {
                                    b.DOMEventsMonitor.Fa && (e.wc(), e.U = !1, e.Wa(document.URL))
                                }, function() {
                                    b.DOMEventsMonitor.Fa && e.pb(document.URL);
                                    e.fa = document.URL
                                }, "historyPushState"));
                            a.utils.isDefined(window.addEventListener) && (c = !0, window.addEventListener("popstate", function(c) {
                                e.oe = !0;
                                var h = document.URL;
                                a.log("SPA2~ popstate event " + c);
                                b.DOMEventsMonitor.Fa && (e.wc(), e.U = !1, e.Wa(e.fa), e.pb(h));
                                e.fa = h
                            }));
                            a.utils.isDefined(window.addEventListener) &&
                                (c = !0, window.addEventListener("hashchange", function() {
                                    if (!e.oe) {
                                        var c = document.URL;
                                        a.log("SPA2~ hashChange: from " + e.fa + " to " + c);
                                        b.DOMEventsMonitor.Fa && (e.wc(), e.U = !1, e.Wa(e.fa), e.pb(c));
                                        e.fa = c
                                    }
                                }));
                            c || a.log("SPA2~ The browser maybe too old. AnySPA monitoring cannot start up.")
                        };
                        e.Eh = function() {
                            e.U = !0;
                            e.Wa(e.fa);
                            e.pb()
                        };
                        e.wc = function() {
                            if (!e.U && a.utils.isDefined(e.vp) && !e.vp.Ze) {
                                var b = a.utils.now();
                                a.c.w.B ? (b = a.c.w.cb ? a.utils.max(a.c.w.O.na, a.c.w.J.oa) : a.c.w.startTime, a.c.w.reset()) : b = e.vp.timestamp();
                                e.ye(e.vp.startTime, b);
                                e.xe(e.vp.startTime, b);
                                e.report()
                            }
                        };
                        e.Wa = function(b) {
                            e.reset();
                            e.vp = new a.events.Qc;
                            e.vp.yl = b;
                            b = a.l.Cd();
                            e.vp.startTime = e.U ? a.utils.Nd() : a.utils.isDefined(b) ? b.start : a.utils.now();
                            e.vp.Eb = b
                        };
                        e.pb = function(b) {
                            a.utils.isDefined(b) && e.vp.url(b);
                            e.vp.start();
                            a.c.w.start(a.utils.now())
                        };
                        e.ye = function(b, d) {
                            a.utils.isDefined(e.vp) && (a.utils.isDefined(d) ? e.vp.timestamp(d) : e.vp.timestamp(b))
                        };
                        e.xe = function(c, d) {
                            a.utils.isDefined(e.vp) && (a.utils.isDefined(d) ? e.vp.resTiming(b.ga.be(e.Dd,
                                c, d)) : e.vp.resTiming(b.ga.be(e.Dd, c)))
                        };
                        e.report = function() {
                            if (a.utils.isDefined(e.vp)) {
                                a.log("SPA2~ AnySpa report vp event");
                                var c = e.vp;
                                c.Ze ? a.log("SPA2~ AnySpa this vp has been reported before") : (c.parent(b.DOMEventsMonitor.currentBasePage), a.command("call", function() {
                                    a.reporter.reportEvent(c)
                                }), c.Ze = !0)
                            } else a.log("SPA2~ AnySpa cannot report vp event as it is undefined")
                        };
                        e.reset = function() {
                            e.vp = null
                        };
                        return e
                    }();
                    b.A = f;
                    b.qh = new b.A
                })(a.monitor || (a.monitor = {}))
            })(g || (g = {}));
            (function(a) {
                (function(b) {
                    var f =
                        function() {
                            function e() {
                                this.O = new b.ag;
                                this.J = new b.gh;
                                this.dj = 3E3;
                                this.maxInactiveTime = a.conf.userConf && a.conf.userConf.navComplete && a.conf.userConf.navComplete.maxInactiveTime ? a.conf.userConf.navComplete.maxInactiveTime : Math.max(this.O.Ga, this.J.Ga) + this.dj;
                                this.Oe = 1E3
                            }
                            e.prototype.setUp = function(a) {
                                this.currentTime = this.startTime = a;
                                this.B = this.cb = !1;
                                this.O.setUp(a);
                                this.J.setUp(a)
                            };
                            e.prototype.start = function(a) {
                                this.setUp(a);
                                this.B = !0;
                                this.O.start(a);
                                this.J.start(a);
                                this.Gd();
                                this.$j()
                            };
                            e.prototype.$j =
                                function() {
                                    this.rf = a.utils.jb.call(window, function() {
                                        this.currentTime = a.utils.now();
                                        this.currentTime - Math.max(this.O.na, this.J.oa) >= this.maxInactiveTime && (this.navComplete(), this.reset())
                                    }.bind(this), this.Oe)
                                };
                            e.prototype.mf = function() {
                                this.cb || (this.Yj(), this.cb = !0)
                            };
                            e.prototype.Gd = function() {
                                a.utils.isDefined(this.Te) && clearInterval(this.Te);
                                a.utils.isDefined(this.rf) && clearInterval(this.rf)
                            };
                            e.prototype.reset = function() {
                                this.Gd();
                                this.B = this.cb = !1;
                                this.O.reset();
                                this.J.reset()
                            };
                            e.prototype.navComplete =
                                function() {
                                    var b = a.utils.max(this.J.oa, this.O.na);
                                    a.log("%cNav Complete Time: " + (b - this.startTime));
                                    a.monitor.A.ye(this.startTime, b);
                                    a.monitor.A.U || (a.monitor.A.xe(this.startTime, b), a.monitor.A.report())
                                };
                            e.prototype.Yj = function() {
                                this.Te = a.utils.jb.call(window, function() {
                                    this.currentTime = a.utils.now();
                                    var b = this.O.Vb(this.currentTime);
                                    0 <= b && a.log("SPA2~ Nav Complete Time based on DOM quiet time: " + (b - this.startTime));
                                    b = this.J.Vb(this.currentTime);
                                    0 <= b && a.log("SPA2~ Nav Complete Time based on XHR quiet time: " +
                                        (b - this.startTime));
                                    this.J.B || this.O.B || (this.navComplete(), this.reset())
                                }.bind(this), this.Oe)
                            };
                            return e
                        }();
                    b.Og = f;
                    b.w = new b.Og
                })(a.c || (a.c = {}))
            })(g || (g = {}));
            (function(a) {
                (function(b) {
                    var f = function(b) {
                        function c() {
                            return null !== b && b.apply(this, arguments) || this
                        }
                        u(c, b);
                        c.prototype.type = function() {
                            return a.EventType.PageView
                        };
                        return c
                    }(b.EventTracker);
                    b.PageView = f
                })(a.events || (a.events = {}))
            })(g || (g = {}));
            (function(a) {
                (function(b) {
                    var f = a.utils.now,
                        e = function() {
                            function c() {}
                            c.prototype.setUp = function() {
                                var b =
                                    document.readyState;
                                if ("loading" === b) a.log("M54"), c.Uj(), c.jf();
                                else {
                                    var e = {
                                        timeStamp: f()
                                    };
                                    c.va(e);
                                    "interactive" === b ? (a.log("M55"), c.jf()) : (a.log("M56"), c.Ia(e), c.Je(e))
                                }
                            };
                            c.jf = function() {
                                a.utils.addEventListener(window, "load", c.Ia);
                                a.utils.addEventListener(window, "load", c.Je)
                            };
                            c.Je = function(e) {
                                c.currentBasePage = new a.events.PageView;
                                a.lifecycle.jj(e && e.timeStamp);
                                a.utils.lb(function() {
                                    var e = f();
                                    a.lifecycle.ij(e);
                                    a.command("mark", "onload", e);
                                    c.Fa = !0;
                                    b.PerformanceMonitor.perf && b.perfMonitor.Ch();
                                    a.conf.spa2 ?
                                        b.ga.Bh() : b.perfMonitor.ba();
                                    a.command("reportOnload", c.currentBasePage);
                                    a.conf.spa2 && (a.c.w.O.Tj(), b.A.Eh());
                                    a.utils.loadScriptAsync(a.conf.adrumExtUrl)
                                });
                                a.log("M57")
                            };
                            c.Uj = function() {
                                if (a.utils.isFunction(document.addEventListener)) document.addEventListener("DOMContentLoaded", c.va, !1);
                                else if (a.utils.isObject(document.attachEvent)) {
                                    document.attachEvent("onreadystatechange", c.va);
                                    var b = null;
                                    try {
                                        b = null === window.frameElement ? document.documentElement : null
                                    } catch (e) {}
                                    null != b && b.doScroll && function m() {
                                        if (!c.isReady) {
                                            try {
                                                b.doScroll("left")
                                            } catch (a) {
                                                setTimeout(m,
                                                    10);
                                                return
                                            }
                                            c.Ia()
                                        }
                                    }()
                                } else a.exception("M58");
                                a.log("M59")
                            };
                            c.Ia = function(b) {
                                c.ze || (a.lifecycle.hj(b && b.timeStamp), a.command("mark", "onready", f()), c.ze = !0)
                            };
                            c.va = function(a) {
                                document.addEventListener ? (document.removeEventListener("DOMContentLoaded", c.va, !1), c.Ia(a)) : "complete" === document.readyState && (document.detachEvent("onreadystatechange", c.va), c.Ia(a))
                            };
                            return c
                        }();
                    e.isReady = !1;
                    e.ze = !1;
                    e.Fa = !1;
                    b.DOMEventsMonitor = e;
                    b.Qd = new b.DOMEventsMonitor
                })(a.monitor || (a.monitor = {}))
            })(g || (g = {}));
            (function(a) {
                (function(b) {
                    function f(a,
                        b) {
                        var c = [],
                            e = /^\s*(ADRUM_BT\w*)=(.*)\s*$/i.exec(a);
                        if (e) {
                            var f = e[1],
                                e = e[2].replace(/^"|"$/g, ""),
                                e = decodeURIComponent(e).split("|"),
                                g = e[0].split(":");
                            if ("R" === g[0] && Number(g[1]) === b)
                                for (d(f), f = 1; f < e.length; f++) c.push(e[f])
                        }
                        return c
                    }

                    function e(a, b) {
                        var c = /^\s*(ADRUM_(\d+)_(\d+)_(\d+))=(.*)\s*$/i.exec(a);
                        if (c) {
                            var e = c[1],
                                f = c[4],
                                g = c[5];
                            if (Number(c[3]) === b) return d(e), {
                                index: Number(f),
                                value: g
                            }
                        }
                        return null
                    }

                    function c(b) {
                        var c = /^\s*ADRUM=s=([\d]+)&r=(.*)\s*/.exec(b);
                        if (c) {
                            a.log("M62", b);
                            if (3 === c.length) return d("ADRUM"), {
                                startTime: Number(c[1]),
                                startPage: c[2]
                            };
                            a.error("M63", b);
                            return null
                        }
                    }

                    function d(b) {
                        a.log("M61", b);
                        var c = new Date;
                        c.setTime(c.getTime() - 1E3);
                        document.cookie = b + "=;Expires=" + c.toUTCString()
                    }
                    b.startTimeCookie = null;
                    b.cookieMetadataChunks = null;
                    b.Rd = function(d, n) {
                        a.log("M60");
                        for (var m = n ? n.length : 0, g = [], q = d.split(";"), r = 0; r < q.length; r++) {
                            var p = q[r],
                                s = e(p, m);
                            s ? g.push(s) : (p = c(p), null != p && (b.startTimeCookie = p))
                        }
                        Array.prototype.sort.call(g, function(a, b) {
                            return a.index - b.index
                        });
                        p = [];
                        for (r = 0; r < g.length; r++) p.push(g[r].value);
                        for (r = 0; r < q.length; r++)(g = f(q[r], m)) && 0 < g.length && (p = p.concat(g));
                        b.cookieMetadataChunks = p
                    };
                    a.correlation.eck = b.Rd
                })(a.correlation || (a.correlation = {}))
            })(g || (g = {}));
            (function(a) {
                a.report = function(b) {
                    a.utils.isObject(b) && a.utils.isFunction(b.type) ? -1 == [a.EventType.PageView, a.EventType.Ajax, a.EventType.VPageView, a.EventType.Error].indexOf(b.type()) ? a.reportAPIMessage(a.I.V, b.type() + "is not a valid external event type", "ADRUM.report", Array.prototype.slice.call(arguments)) : a.conf.spa2 && b instanceof a.events.VPageView ?
                        a.log("SPA2~ Ignore report Virtual Page in old API") : a.utils.lb(function() {
                            a.command("reportEvent", b)
                        }) : a.reportAPIMessage(a.I.Pc, "", "ADRUM.report", Array.prototype.slice.call(arguments))
                }
            })(g || (g = {}));
            (function(a) {
                "APP_KEY_NOT_SET" === a.conf.appKey && z.log("AppDynamics EUM cloud application key missing. Please specify window['adrum-app-key']");
                a.correlation.Rd(document.cookie, document.referrer);
                a.command("mark", "firstbyte", window["adrum-start-time"]);
                a.conf.spa2 ? a.monitor.yc(a.monitor.ma, a.monitor.Qd,
                    a.monitor.perfMonitor, a.monitor.ja, a.monitor.qh) : a.monitor.yc(a.monitor.ma, a.monitor.Qd, a.monitor.perfMonitor, a.monitor.ja)
            })(g || (g = {}));
            (function(a) {
                a = a.ng || (a.ng = {});
                a = a.g || (a.g = {});
                a.ve = "locationChangeStart";
                a.Yi = "locationChangeSuccess";
                a.ef = "routeChangeStart";
                a.ff = "routeChangeSuccess";
                a.nf = "stateChangeStart";
                a.of = "stateChangeSuccess";
                a.Bf = "viewContentLoaded";
                a.vi = "includeContentRequested";
                a.ui = "includeContentLoaded";
                a.Od = "digest";
                a.nl = "outstandingRequestsComplete";
                a.Ed = "beforeNgXhrRequested";
                a.ud = "afterNgXhrRequested";
                a.ml = "ngXhrLoaded";
                a.Id = "$$completeOutstandingRequest"
            })(g || (g = {}));
            (function(a) {
                (function(b) {
                    function f(a, c, e, f, g, q) {
                        if (c) try {
                            return c.apply(a, [e, f, g].concat(q))
                        } catch (r) {
                            return a.error(e, f, g, q, b.Error.lg, "an exception occurred in a caller-provided callback function", r)
                        }
                    }

                    function e(a, c) {
                        return function() {
                            var e = this.current,
                                m = c[e] || c[b.Qa] || e,
                                g = Array.prototype.slice.call(arguments);
                            if (this.yh(a)) return this.error(a, e, m, g, b.Error.mg, "event " + a + " inappropriate in current state " +
                                this.current);
                            if (!1 === f(this, this["onbefore" + a], a, e, m, g)) return b.Pa.Rc;
                            m === b.Qa && (m = e);
                            if (e === m) return f(this, this["onafter" + a] || this["on" + a], a, e, m, g), b.Pa.Ng;
                            var q = this;
                            this.transition = function() {
                                q.transition = null;
                                q.current = m;
                                f(q, q["onenter" + m] || q["on" + m], a, e, m, g);
                                f(q, q["onafter" + a] || q["on" + a], a, e, m, g);
                                return b.Pa.Yg
                            };
                            if (!1 === f(this, this["onleave" + e], a, e, m, g)) return this.transition = null, b.Pa.Rc;
                            if (this.transition) return this.transition()
                        }
                    }
                    var c = a.utils.hasOwnPropertyDefined;
                    b.VERSION = "2.3.5";
                    b.Pa = {
                        Yg: 1,
                        Ng: 2,
                        Rc: 3,
                        Hk: 4
                    };
                    b.Error = {
                        mg: 100,
                        Ik: 200,
                        lg: 300
                    };
                    b.Qa = "*";
                    b.create = function(a, f) {
                        function g(a) {
                            var c = a.from instanceof Array ? a.from : a.from ? [a.from] : [b.Qa];
                            p[a.name] = p[a.name] || {};
                            for (var e = 0; e < c.length; e++) s[c[e]] = s[c[e]] || [], s[c[e]].push(a.name), p[a.name][c[e]] = a.to || c[e]
                        }
                        var m = "string" == typeof a.initial ? {
                                state: a.initial
                            } : a.initial,
                            k = f || a.target || {},
                            q = a.events || [],
                            r = a.callbacks || {},
                            p = {},
                            s = {};
                        m && (m.event = m.event || "startup", g({
                            name: m.event,
                            from: "none",
                            to: m.state
                        }));
                        for (var u = 0; u < q.length; u++) g(q[u]);
                        for (var v in p) c(p, v) && (k[v] = e(v, p[v]));
                        for (v in r) c(r, v) && (k[v] = r[v]);
                        k.current = "none";
                        k.el = function(a) {
                            return a instanceof Array ? 0 <= a.indexOf(this.current) : this.current === a
                        };
                        k.xh = function(a) {
                            return !this.transition && (c(p[a], this.current) || c(p[a], b.Qa))
                        };
                        k.yh = function(a) {
                            return !this.xh(a)
                        };
                        k.rb = function() {
                            return s[this.current]
                        };
                        k.error = a.error || function(a, b, c, e, d, f, h) {
                            throw h || f;
                        };
                        if (m && !m.defer) k[m.event]();
                        return k
                    }
                })(a.nd || (a.nd = {}))
            })(g || (g = {}));
            (function(a) {
                (function(b) {
                    var f = function(e) {
                        function c(b) {
                            b =
                                e.call(this, b) || this;
                            a.utils.isDefined(a.ng) && b.constructor != a.ng.NgVPageView && b.constructor != c && a.reportAPIMessage(a.I.V, a.ta, "ADRUM.events.VPageView", []);
                            if (a.conf.spa2) return b;
                            b.perf = new a.PerformanceTracker;
                            b.start();
                            a.monitor.ja.tc();
                            a.monitor.ma.Ej();
                            return b
                        }
                        u(c, e);
                        c.prototype.type = function() {
                            return a.EventType.VPageView
                        };
                        c.prototype.Qb = function() {
                            return b.EventTracker.Bb(this.guid(), this.url(), this.type())
                        };
                        c.prototype.lf = function(b) {
                            var c = this.Qb();
                            b.set("parent", c);
                            a.log("M64", c.guid(),
                                c.url())
                        };
                        c.prototype.startCorrelatingXhrs = function() {
                            a.conf.spa2 || (a.log("M65"), this.lf(a.monitor.ja))
                        };
                        c.prototype.stopCorrelatingXhrs = function() {
                            a.conf.spa2 || (a.monitor.ja.set("parent", null), a.log("M66"))
                        };
                        c.prototype.Bc = function() {
                            a.conf.spa2 || (a.log("M67"), this.lf(a.monitor.ma))
                        };
                        c.prototype.start = function() {
                            a.conf.spa2 || (this.markVirtualPageStart(), this.startCorrelatingXhrs())
                        };
                        c.prototype.end = function() {
                            a.conf.spa2 || (this.markVirtualPageEnd(), this.stopCorrelatingXhrs())
                        };
                        return c
                    }(b.EventTracker);
                    b.VPageView = f;
                    b.la(b.G[a.EventType.VPageView], f.prototype);
                    b.Ad(b.metricSpec[a.EventType.VPageView], f.prototype)
                })(a.events || (a.events = {}))
            })(g || (g = {}));
            (function(a) {
                var b = a.ng || (a.ng = {}),
                    b = b.conf || (b.conf = {});
                b.disabled = a.conf.userConf && a.conf.userConf.spa && a.conf.userConf.spa.angular && a.conf.userConf.spa.angular.disable;
                b.distinguishVPwithItsTemplateUrl = a.conf.userConf && a.conf.userConf.spa && a.conf.userConf.spa.angular && !0 === a.conf.userConf.spa.angular.distinguishVPwithItsTemplateUrl ? !0 : !1;
                b.xhr = {};
                b.metrics = {
                    includeResTimingInEndUserResponseTiming: !0
                };
                a.conf.userConf && a.conf.userConf.spa && a.conf.userConf.spa.angular && a.conf.userConf.spa.angular.vp && (a.conf.userConf.spa.angular.vp.xhr && a.monitor.Ba.Re(b.xhr, a.conf.userConf.spa.angular.vp.xhr), a.conf.userConf.spa.angular.vp.metrics && a.utils.mergeJSON(b.metrics, a.conf.userConf.spa.angular.vp.metrics))
            })(g || (g = {}));
            (function(a) {
                (function(b) {
                    var f = a.utils.map,
                        e = a.utils.reduce,
                        c = a.utils.filter,
                        d = function(d) {
                            function g(b) {
                                b = d.call(this, b) || this;
                                b.ne = !0;
                                b.Ja = {};
                                b.sa = 0;
                                b.Fl = [];
                                b.digestCount(0);
                                if (b.constructor != g) return a.reportAPIMessage(a.I.V, a.ta, "ADRUM.events.Ajax", []), b;
                                b.stopCorrelatingXhrs();
                                return b
                            }
                            u(g, d);
                            g.prototype.type = function() {
                                return a.EventType.VPageView
                            };
                            g.prototype.Mc = function() {
                                this.markViewChangeStart();
                                this.markVirtualPageStart(this.getViewChangeStart());
                                this.timestamp(this.getViewChangeStart())
                            };
                            g.prototype.wi = function() {
                                this.digestCount(this.digestCount() + 1)
                            };
                            g.prototype.xi = function() {
                                this.sa++;
                                a.log("M68", this.sa)
                            };
                            g.prototype.Ih = function() {
                                this.sa--;
                                a.log("M69", this.sa)
                            };
                            g.prototype.ri = function() {
                                var b = this.perf.getEntryByName(a.events.b.Hf);
                                a.log("M70", this.sa, b);
                                return 0 < this.sa
                            };
                            g.prototype.uh = function() {
                                var a = {
                                        qb: 0
                                    },
                                    b = document.querySelectorAll("ng-view, [ng-view], .ng-view, [ui-view]"),
                                    b = f(b, angular.element),
                                    c;
                                for (c in g.bf) {
                                    var e = g.bf[c];
                                    f(b, function(b) {
                                        b = b.find(c);
                                        f(b, function(b) {
                                            if (b = b[e]) b = decodeURIComponent(b), a[b] || (a[b] = c, a.qb++)
                                        })
                                    })
                                }
                                this.Ja = a
                            };
                            g.prototype.th = function(a) {
                                return !!this.Ja[decodeURIComponent(a.name)]
                            };
                            g.prototype.vh = function() {
                                var b = [],
                                    c = this;
                                0 < this.Ja.qb && (b = a.monitor.perfMonitor.Y().filter(function(a) {
                                    return c.th(a)
                                }));
                                this.resTiming(b)
                            };
                            g.Xh = function(e) {
                                return c(e, function(c) {
                                    return (c.eventType === a.EventType.Ajax || c.eventType === a.EventType.ADRUM_XHR) && !a.monitor.Ba.kf(c.eventUrl, c.method, b.conf.xhr)
                                })
                            };
                            g.ii = function(a) {
                                return e(a, function(a, b) {
                                    return Math.max(a, b.timestamp + b.metrics.PLT)
                                }, -1)
                            };
                            g.prototype.nh = function() {
                                if (b.conf.xhr) {
                                    var c = g.Xh(a.channel.getEventsWithParentGUID(this.guid())),
                                        c = g.ii(c);
                                    if (0 < c) {
                                        var e = this.perf.getEntryByName(a.events.b.Hf);
                                        this.markXhrRequestsCompleted(Math.min(e && e.startTime || Number.MAX_VALUE, c))
                                    }
                                }
                            };
                            g.prototype.adjustTimings = function() {
                                this.nh();
                                var c = this.getViewDOMLoaded(),
                                    e = this.getXhrRequestsCompleted(),
                                    c = Math.max(c, e);
                                b.conf.metrics.includeResTimingInEndUserResponseTiming && (this.mh(), e = this.getViewResourcesLoaded(), e = Math.max(c, e), a.log("M71", c, e), c = e);
                                this.markVirtualPageEnd(c)
                            };
                            g.prototype.mh = function() {
                                if (0 < this.Ja.qb) {
                                    this.vh();
                                    var b = this.resTiming();
                                    b && b.length >= this.Ja.qb && (b = e(b, function(a, b) {
                                        return Math.max(a, b.responseEnd)
                                    }, 0), this.markViewResourcesLoaded(a.PerformanceTracker.Fb(b)))
                                }
                            };
                            g.prototype.identifier = function(b) {
                                var c = this.Df;
                                a.utils.isDefined(b) && (this.Df = g.Vh(b), this.url(this.Df.url));
                                return c
                            };
                            g.Vh = function(b) {
                                var c = {};
                                b && b.C ? (c.C = {
                                    jc: ""
                                }, a.utils.mergeJSON(c.C, {
                                    jc: b.C.originalPath,
                                    Ka: b.C.template,
                                    La: b.C.templateUrl
                                })) : b && b.state && (c.state = {
                                    url: ""
                                }, a.utils.mergeJSON(c.state, {
                                    url: b.state.url,
                                    name: b.state.name,
                                    Ka: b.state.template,
                                    La: b.state.templateUrl
                                }));
                                return c
                            };
                            return g
                        }(a.events.VPageView);
                    d.bf = {
                        img: "src",
                        script: "src",
                        link: "href"
                    };
                    b.NgVPageView = d;
                    a.events.la(a.events.G[a.EventType.NG_VIRTUAL_PAGE], d.prototype)
                })(a.ng || (a.ng = {}))
            })(g || (g = {}));
            (function(a) {
                (function(b) {
                    var g = function() {
                        function e() {
                            this.j = new b.NgVPageView
                        }
                        e.prototype.Lj = function() {
                            var c = this;
                            b.conf.metrics.includeResTimingInEndUserResponseTiming ? (a.log("M72"), setTimeout(function() {
                                c.pc()
                            }, e.$g)) : setTimeout(function() {
                                c.pc()
                            }, e.ah)
                        };
                        e.prototype.pc = function() {
                            a.log("M73");
                            var b = this.j;
                            b.parent(a.monitor.DOMEventsMonitor.currentBasePage);
                            a.command("call", function() {
                                b.adjustTimings();
                                a.reporter.reportEvent(b)
                            })
                        };
                        e.prototype.Rj = function(a) {
                            this.j = a
                        };
                        return e
                    }();
                    g.$g = 5E3;
                    g.ah = 2 * a.monitor.Ba.$f;
                    b.VirtualPageStateMachine = g;
                    a.nd.create({
                        events: [{
                            name: "start",
                            from: "none",
                            to: "ChangeView"
                        }, {
                            name: "viewLoaded",
                            from: "ChangeView",
                            to: "XhrPending"
                        }, {
                            name: "xhrCompleted",
                            from: "XhrPending",
                            to: "End"
                        }, {
                            name: "abort",
                            from: "*",
                            to: "none"
                        }, {
                            name: "init",
                            from: "*",
                            to: "none"
                        }, {
                            name: "locChange",
                            from: "*",
                            to: "*"
                        }, {
                            name: "beforeXhrReq",
                            from: "*",
                            to: "*"
                        }, {
                            name: "afterXhrReq",
                            from: "*",
                            to: "*"
                        }],
                        error: function(b) {
                            a.log("M74" + b)
                        },
                        callbacks: {
                            onChangeView: function() {
                                this.j.Mc();
                                this.j.Bc()
                            },
                            onviewLoaded: function() {
                                this.j.markViewDOMLoaded()
                            },
                            onXhrPending: function() {
                                this.j.ne && this.xhrCompleted()
                            },
                            onleaveXhrPending: function(a, b, d) {
                                if ("abort" === a) return this.pc(), !0;
                                if ("xhrCompleted" === a && "End" === d) {
                                    if (this.j.ri()) return !1;
                                    this.j.markXhrRequestsCompleted();
                                    return !0
                                }
                            },
                            onEnd: function() {
                                this.j.uh();
                                this.Lj()
                            },
                            oninit: function(b, c, d, g) {
                                this.Rj(g);
                                a.monitor.ja.tc()
                            },
                            onlocChange: function(a, b, d, g) {
                                this.j.identifier.url = g;
                                this.j.ob({
                                    url: g
                                })
                            },
                            onbeforeXhrReq: function(b, c, d, g) {
                                var f = this.j;
                                f.ne = !1;
                                a.log("M75", g && g[1] || "", f.guid());
                                f.xi();
                                f.startCorrelatingXhrs();
                                g[3] && (g[3] = a.aop.before(g[3], function(b, c, e) {
                                    a.log("M76");
                                    f.Ih();
                                    e && (b = a.utils.sj(e)["content-type"]) && 0 <= b.indexOf("text/html") && f.markViewFragmentsLoaded()
                                }));
                                return g
                            },
                            onafterXhrReq: function() {
                                this.j.stopCorrelatingXhrs()
                            }
                        }
                    }, g.prototype)
                })(a.ng || (a.ng = {}))
            })(g || (g = {}));
            (function(a) {
                (function(b) {
                    var g = function() {
                        function e() {
                            this.D = new b.VirtualPageStateMachine;
                            this.distinguishVPwithItsTemplateUrl = a.ng.conf.distinguishVPwithItsTemplateUrl
                        }
                        e.prototype.F = function(c, d) {
                            a.log("M77", c);
                            switch (c) {
                                case b.g.ef:
                                case b.g.nf:
                                    this.D.start();
                                    var g = d.next.url || document.URL,
                                        f = new b.NgVPageView({
                                            url: g,
                                            identifier: d.next
                                        });
                                    this.distinguishVPwithItsTemplateUrl && e.Gi(this.D.j, f) ? this.D.j.ob({
                                        url: g,
                                        identifier: d.next
                                    }) : this.ek(f);
                                    break;
                                case b.g.ff:
                                case b.g.of:
                                    this.D.j.markViewChangeEnd();
                                    break;
                                case b.g.Bf:
                                    this.D.viewLoaded();
                                    break;
                                case b.g.Ed:
                                    this.D.beforeXhrReq(d);
                                    break;
                                case b.g.ud:
                                    this.D.afterXhrReq();
                                    break;
                                case b.g.Id:
                                    this.D.xhrCompleted();
                                    break;
                                case b.g.ve:
                                    this.D.j.ob({
                                        url: d.next.url
                                    });
                                    this.D.locChange(d.next.url);
                                    break;
                                case b.g.Od:
                                    this.D.j.wi()
                            }
                        };
                        e.prototype.ek = function(a) {
                            this.D.abort();
                            this.D.init(a);
                            this.D.start()
                        };
                        e.Gi = function(b, e) {
                            var g = b.identifier(),
                                f = e.identifier(),
                                m = !1;
                            return m = !a.utils.isDefined(g) && !a.utils.isDefined(f) || g === f ? !0 : a.utils.isDefined(g) && a.utils.isDefined(f) ?
                                g.state || f.state ? a.utils.isDefined(g.state) && a.utils.isDefined(f.state) ? g.state.name === f.state.name && g.state.Ka === f.state.Ka && g.state.La === f.state.La && g.state.url === f.state.url : !1 : g.C && f.C ? g.C.jc === f.C.jc && g.C.Ka === f.C.Ka && g.C.La === f.C.La : g.url === f.url : !1
                        };
                        return e
                    }();
                    b.bh = g
                })(a.ng || (a.ng = {}))
            })(g || (g = {}));
            (function(a) {
                (function(b) {
                    var g = a.utils.addEventListener,
                        e = function() {
                            function c() {
                                this.H = new b.bh;
                                this.le = !1
                            }
                            c.prototype.setUp = function() {
                                function b(e) {
                                    return function() {
                                        a.log(e);
                                        c.init()
                                    }
                                }
                                var c =
                                    this;
                                b("M78")();
                                g(document, "DOMContentLoaded", b("M79"));
                                g(window, "load", b("M80"))
                            };
                            c.prototype.init = function() {
                                if ("undefined" != typeof angular && !this.le) {
                                    this.le = !0;
                                    a.log("M81");
                                    var b = this,
                                        c = angular.module("ng");
                                    c.config(["$provide", function(a) {
                                        b.Di(a);
                                        b.Ci(a)
                                    }]);
                                    c.run(["$browser", function(a) {
                                        b.Ai(a)
                                    }]);
                                    a.log("M82")
                                }
                            };
                            c.prototype.Ci = function(c) {
                                var e = a.aop,
                                    g = this;
                                c.decorator("$httpBackend", ["$delegate", function(a) {
                                    return a = e.around(a, function() {
                                        var a = Array.prototype.slice.call(arguments);
                                        g.H.F(b.g.Ed,
                                            a);
                                        return a
                                    }, function() {
                                        g.H.F(b.g.ud)
                                    }, "ng.httpBackend")
                                }])
                            };
                            c.prototype.Di = function(c) {
                                var e = a.aop,
                                    g = this;
                                c.decorator("$rootScope", ["$delegate", function(a) {
                                    a.$digest = e.after(a.$digest, function() {
                                        g.H.F(b.g.Od)
                                    }, "ngevents.digest");
                                    a.$on("$locationChangeStart", function(a, c) {
                                        var e = {
                                                url: c
                                            },
                                            d = a && a.Ca && a.Ca.$state && a.Ca.$state.current;
                                        d && (e.state = d);
                                        g.H.F(b.g.ve, {
                                            next: e
                                        })
                                    });
                                    a.$on("$locationChangeSuccess", function() {
                                        g.H.F(b.g.Yi)
                                    });
                                    a.$on("$routeChangeStart", function(a, c) {
                                        var e = {
                                                url: location.href
                                            },
                                            d = c && c.$$route;
                                        d && (e.C = d);
                                        g.H.F(b.g.ef, {
                                            next: e
                                        })
                                    });
                                    a.$on("$routeChangeSuccess", function() {
                                        g.H.F(b.g.ff)
                                    });
                                    a.$on("$stateChangeStart", function(a, c) {
                                        g.H.F(b.g.nf, {
                                            next: {
                                                state: c
                                            }
                                        })
                                    });
                                    a.$on("$stateChangeSuccess", function() {
                                        g.H.F(b.g.of)
                                    });
                                    a.$on("$viewContentLoaded", function(a) {
                                        var c = {
                                            url: location.href
                                        };
                                        if (a = a && a.Ca && a.Ca.$state && a.Ca.$state.current) c.state = a;
                                        g.H.F(b.g.Bf, {
                                            next: c
                                        })
                                    });
                                    a.$on("$includeContentRequested", function() {
                                        g.H.F(b.g.vi)
                                    });
                                    a.$on("$includeContentLoaded", function() {
                                        g.H.F(b.g.ui)
                                    });
                                    return a
                                }])
                            };
                            c.prototype.Ai =
                                function(c) {
                                    var e = this;
                                    c.$$completeOutstandingRequest = a.aop.before(c.$$completeOutstandingRequest, function() {
                                        e.H.F(b.g.Id)
                                    })
                                };
                            return c
                        }();
                    b.Dk = e;
                    b.ngMonitor = new e
                })(a.ng || (a.ng = {}))
            })(g || (g = {}));
            (function(a) {
                var b = a.ng || (a.ng = {});
                b.conf.disabled || a.conf.spa2 || a.monitor.yc(b.ngMonitor)
            })(g || (g = {}))
        }
    };
})();