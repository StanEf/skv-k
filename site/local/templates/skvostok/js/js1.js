!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document)throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    function c(a) {
        var b = "length" in a && a.length, c = _.type(a);
        return "function" !== c && !_.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a))
    }

    function d(a, b, c) {
        if (_.isFunction(b))return _.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType)return _.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (ha.test(b))return _.filter(b, a, c);
            b = _.filter(b, a)
        }
        return _.grep(a, function (a) {
            return U.call(b, a) >= 0 !== c
        })
    }

    function e(a, b) {
        for (; (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function f(a) {
        var b = oa[a] = {};
        return _.each(a.match(na) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
    }

    function h() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = _.expando + h.uid++
    }

    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c)
            } catch (a) {
            }
            sa.set(a, b, c)
        } else c = void 0;
        return c
    }

    function j() {
        return !0
    }

    function k() {
        return !1
    }

    function l() {
        try {
            return Z.activeElement
        } catch (a) {
        }
    }

    function m(a, b) {
        return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function o(a) {
        var b = Ka.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function p(a, b) {
        for (var c = 0, d = a.length; c < d; c++)ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"))
    }

    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)for (c = 0, d = j[e].length; c < d; c++)_.event.add(b, e, j[e][c])
            }
            sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i))
        }
    }

    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
    }

    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ya.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function t(b, c) {
        var d, e = _(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
        return e.detach(), f
    }

    function u(a) {
        var b = Z, c = Oa[a];
        return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), c
    }

    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function w(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function x(a, b) {
        if (b in a)return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--;)if (b = Xa[e] + c, b in a)return b;
        return d
    }

    function y(a, b, c) {
        var d = Ta.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; f < 4; f += 2)"margin" === c && (g += _.css(a, c + wa[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
        return g
    }

    function A(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ra(a),
            g = "border-box" === _.css(a, "boxSizing", !1, f);
        if (e <= 0 || null == e) {
            if (e = v(a, b, f), (e < 0 || null == e) && (e = a.style[b]), Qa.test(e))return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; g < h; g++)d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
        for (g = 0; g < h; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e)
    }

    function D() {
        return setTimeout(function () {
            Ya = void 0
        }), Ya = _.now()
    }

    function E(a, b) {
        var c, d = 0, e = {height: a};
        for (b = b ? 1 : 0; d < 4; d += 2 - b)c = wa[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function F(a, b, c) {
        for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; f < g; f++)if (d = e[f].call(c, b, a))return d
    }

    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && xa(a), p = ra.get(a, "fxshow");
        c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function () {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b)if (e = b[d], $a.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                if ("show" !== e || !p || void 0 === p[d])continue;
                o = !0
            }
            m[d] = p && p[d] || _.style(a, d)
        } else j = void 0;
        if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j); else {
            p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function () {
                _(a).hide()
            }), l.done(function () {
                var b;
                ra.remove(a, "fxshow");
                for (b in m)_.style(a, b, m[b])
            });
            for (d in m)g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function H(a, b) {
        var c, d, e, f, g;
        for (c in a)if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f)c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function I(a, b, c) {
        var d, e, f = 0, g = bb.length, h = _.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e)return !1;
            for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++)j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: _.extend({}, b),
            opts: _.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Ya || D(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e)return this;
                for (e = !0; c < d; c++)j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (H(k, j.opts.specialEasing); f < g; f++)if (d = bb[f].call(j, a, k, j.opts))return d;
        return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function J(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(na) || [];
            if (_.isFunction(c))for (; d = f[e++];)"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, _.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }

        var f = {}, g = a === tb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function L(a, b) {
        var c, d, e = _.ajaxSettings.flatOptions || {};
        for (c in b)void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && _.extend(!0, a, d), a
    }

    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0];)i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)for (e in h)if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        if (f)return f !== i[0] && i.unshift(f), c[f]
    }

    function N(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0)if (g && a.throws) b = g(b); else try {
                b = g(b)
            } catch (a) {
                return {state: "parsererror", error: g ? a : "No conversion from " + i + " to " + f}
            }
        }
        return {state: "success", data: b}
    }

    function O(a, b, c, d) {
        var e;
        if (_.isArray(b)) _.each(b, function (b, e) {
            c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== _.type(b)) d(a, b); else for (e in b)O(a + "[" + e + "]", b[e], c, d)
    }

    function P(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }

    var Q = [], R = Q.slice, S = Q.concat, T = Q.push, U = Q.indexOf, V = {}, W = V.toString, X = V.hasOwnProperty,
        Y = {}, Z = a.document, $ = "2.1.4", _ = function (a, b) {
            return new _.fn.init(a, b)
        }, aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ba = /^-ms-/, ca = /-([\da-z])/gi, da = function (a, b) {
            return b.toUpperCase()
        };
    _.fn = _.prototype = {
        jquery: $, constructor: _, selector: "", length: 0, toArray: function () {
            return R.call(this)
        }, get: function (a) {
            return null != a ? a < 0 ? this[a + this.length] : this[a] : R.call(this)
        }, pushStack: function (a) {
            var b = _.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function (a, b) {
            return _.each(this, a, b)
        }, map: function (a) {
            return this.pushStack(_.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(R.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: T, sort: Q.sort, splice: Q.splice
    }, _.extend = _.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)if (null != (a = arguments[h]))for (b in a)c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, _.extend({
        expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw new Error(a)
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === _.type(a)
        }, isArray: Array.isArray, isWindow: function (a) {
            return null != a && a === a.window
        }, isNumeric: function (a) {
            return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
        }, isPlainObject: function (a) {
            return "object" === _.type(a) && !a.nodeType && !_.isWindow(a) && !(a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf"))
        }, isEmptyObject: function (a) {
            var b;
            for (b in a)return !1;
            return !0
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
        }, globalEval: function (a) {
            var b, c = eval;
            a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        }, camelCase: function (a) {
            return a.replace(ba, "ms-").replace(ca, da)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h)for (; f < g && (e = b.apply(a[f], d), e !== !1); f++); else for (f in a)if (e = b.apply(a[f], d), e === !1)break
            } else if (h)for (; f < g && (e = b.call(a[f], f, a[f]), e !== !1); f++); else for (f in a)if (e = b.call(a[f], f, a[f]), e === !1)break;
            return a
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(aa, "")
        }, makeArray: function (a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
        }, inArray: function (a, b, c) {
            return null == b ? -1 : U.call(b, a, c)
        }, merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++)a[e++] = b[d];
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        }, map: function (a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h)for (; f < g; f++)e = b(a[f], f, d), null != e && i.push(e); else for (f in a)e = b(a[f], f, d), null != e && i.push(e);
            return S.apply([], i)
        }, guid: 1, proxy: function (a, b) {
            var c, d, e;
            if ("string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a))return d = R.call(arguments, 2), e = function () {
                return a.apply(b || this, d.concat(R.call(arguments)))
            }, e.guid = a.guid = a.guid || _.guid++, e
        }, now: Date.now, support: Y
    }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        V["[object " + b + "]"] = b.toLowerCase()
    });
    var ea = function (a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h)return c;
            if (!d && I) {
                if (11 !== h && (e = sa.exec(a)))if (g = e[1]) {
                    if (9 === h) {
                        if (f = b.getElementById(g), !f || !f.parentNode)return c;
                        if (f.id === g)return c.push(f), c
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g)return c.push(f), c
                } else {
                    if (e[2])return $.apply(c, b.getElementsByTagName(a)), c;
                    if ((g = e[3]) && v.getElementsByClassName)return $.apply(c, b.getElementsByClassName(g)), c
                }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;)j[i] = n + m(j[i]);
                        o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
                    }
                    if (p)try {
                        return $.apply(c, o.querySelectorAll(p)), c
                    } catch (a) {
                    } finally {
                        l || b.removeAttribute("id")
                    }
                }
            }
            return B(a.replace(ia, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
            }

            var b = [];
            return a
        }

        function d(a) {
            return a[N] = !0, a
        }

        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (a) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--;)w.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d)return d;
            if (c)for (; c = c.nextSibling;)if (c === b)return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function i(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function j(a) {
            return d(function (b) {
                return b = +b, d(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function l() {
        }

        function m(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++)d += a[b].value;
            return d
        }

        function n(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = Q++;
            return b.first ? function (b, c, f) {
                for (; b = b[d];)if (1 === b.nodeType || e)return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d];)if ((1 === b.nodeType || e) && a(b, c, g))return !0
                } else for (; b = b[d];)if (1 === b.nodeType || e) {
                    if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f)return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g))return !0
                }
            }
        }

        function o(a) {
            return a.length > 1 ? function (b, c, d) {
                for (var e = a.length; e--;)if (!a[e](b, c, d))return !1;
                return !0
            } : a[0]
        }

        function p(a, c, d) {
            for (var e = 0, f = c.length; e < f; e++)b(a, c[e], d);
            return d
        }

        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function (d, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e)for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
            })
        }

        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function (a) {
                return a === b
            }, g, !0), j = n(function (a) {
                return aa(b, a) > -1
            }, g, !0), k = [function (a, c, d) {
                var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                return b = null, e
            }]; h < e; h++)if (c = w.relative[a[h].type]) k = [n(o(k), c)]; else {
                if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                    for (d = ++h; d < e && !w.relative[a[d].type]; d++);
                    return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({value: " " === a[h - 2].type ? "*" : ""})).replace(ia, "$1"), c, h < d && s(a.slice(h, d)), d < e && s(a = a.slice(d)), d < e && m(a))
                }
                k.push(c)
            }
            return o(k)
        }

        function t(a, c) {
            var e = c.length > 0, f = a.length > 0, g = function (d, g, h, i, j) {
                var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j),
                    u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0; m = a[l++];)if (m(k, g, h)) {
                            i.push(k);
                            break
                        }
                        j && (P = u)
                    }
                    e && ((k = !m && k) && n--, d && p.push(k))
                }
                if (n += o, e && o !== n) {
                    for (l = 0; m = c[l++];)m(p, r, g, h);
                    if (d) {
                        if (n > 0)for (; o--;)p[o] || r[o] || (r[o] = Y.call(i));
                        r = q(r)
                    }
                    $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                }
                return j && (P = u, C = s), p
            };
            return e ? d(g) : g
        }

        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date, O = a.document, P = 0,
            Q = 0, R = c(), S = c(), T = c(), U = function (a, b) {
                return a === b && (E = !0), 0
            }, V = 1 << 31, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice,
            aa = function (a, b) {
                for (var c = 0, d = a.length; c < d; c++)if (a[c] === b)return c;
                return -1
            },
            ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ca = "[\\x20\\t\\r\\n\\f]", da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ea = da.replace("w", "w#"),
            fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
            ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
            ha = new RegExp(ca + "+", "g"), ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
            ja = new RegExp("^" + ca + "*," + ca + "*"), ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
            la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"), ma = new RegExp(ga),
            na = new RegExp("^" + ea + "$"), oa = {
                ID: new RegExp("^#(" + da + ")"),
                CLASS: new RegExp("^\\.(" + da + ")"),
                TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + fa),
                PSEUDO: new RegExp("^" + ga),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ba + ")$", "i"),
                needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
            }, pa = /^(?:input|select|textarea|button)$/i, qa = /^h\d$/i, ra = /^[^{]+\{\s*\[native \w/,
            sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ta = /[+~]/, ua = /'|\\/g,
            va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"), wa = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            }, xa = function () {
                F()
            };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
        } catch (a) {
            $ = {
                apply: X.length ? function (a, b) {
                    Z.apply(a, _.call(b))
                } : function (a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        v = b.support = {}, y = b.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, F = b.setDocument = function (a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), v.getElementsByTagName = e(function (a) {
                return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
            }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function (a) {
                return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
            }), v.getById ? (w.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, w.filter.ID = function (a) {
                var b = a.replace(va, wa);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete w.find.ID, w.filter.ID = function (a) {
                var b = a.replace(va, wa);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), w.find.TAG = v.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];)1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, w.find.CLASS = v.getElementsByClassName && function (a, b) {
                    if (I)return b.getElementsByClassName(a)
                }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function (a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
            }), e(function (a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function (a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)for (; b = b.parentNode;)if (b === a)return !0;
                return !1
            }, U = b ? function (a, b) {
                if (a === b)return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
            } : function (a, b) {
                if (a === b)return E = !0, 0;
                var c, e = 0, f = a.parentNode, h = b.parentNode, i = [a], j = [b];
                if (!f || !h)return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                if (f === h)return g(a, b);
                for (c = a; c = c.parentNode;)i.unshift(c);
                for (c = b; c = c.parentNode;)j.unshift(c);
                for (; i[e] === j[e];)e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, d) : G
        }, b.matches = function (a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function (a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), v.matchesSelector && I && (!K || !K.test(c)) && (!J || !J.test(c)))try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
            } catch (a) {
            }
            return b(c, G, null, [a]).length > 0
        }, b.contains = function (a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, b.attr = function (a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()],
                d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function (a) {
            var b, c = [], d = 0, e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++];)b === a[e] && (d = c.push(e));
                for (; d--;)a.splice(c[d], 1)
            }
            return D = null, a
        }, x = b.getText = function (a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent)return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)c += x(a)
                } else if (3 === e || 4 === e)return a.nodeValue
            } else for (; b = a[d++];)c += x(b);
            return c
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: oa,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(va, wa).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function (a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                }, ATTR: function (a, c, d) {
                    return function (e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];)if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [P, n, m];
                                    break
                                }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1]; else for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                }, PSEUDO: function (a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;)d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function (a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function (a) {
                    var b = [], c = [], e = A(a.replace(ia, "$1"));
                    return e[N] ? d(function (a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                    }
                }), has: d(function (a) {
                    return function (c) {
                        return b(a, c).length > 0
                    }
                }), contains: d(function (a) {
                    return a = a.replace(va, wa), function (b) {
                        return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                    }
                }), lang: d(function (a) {
                    return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(), function (b) {
                        var c;
                        do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === H
                }, focus: function (a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return a.disabled === !1
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return !1;
                    return !0
                }, parent: function (a) {
                    return !w.pseudos.empty(a)
                }, header: function (a) {
                    return qa.test(a.nodeName)
                }, input: function (a) {
                    return pa.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: j(function () {
                    return [0]
                }), last: j(function (a, b) {
                    return [b - 1]
                }), eq: j(function (a, b, c) {
                    return [c < 0 ? c + b : c]
                }), even: j(function (a, b) {
                    for (var c = 0; c < b; c += 2)a.push(c);
                    return a
                }), odd: j(function (a, b) {
                    for (var c = 1; c < b; c += 2)a.push(c);
                    return a
                }), lt: j(function (a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0;)a.push(d);
                    return a
                }), gt: j(function (a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b;)a.push(d);
                    return a
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})w.pseudos[u] = h(u);
        for (u in{submit: !0, reset: !0})w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function (a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k)return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h;) {
                d && !(e = ja.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ia, " ")
                }), h = h.slice(d.length));
                for (g in w.filter)!(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d)break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }, A = b.compile = function (a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--;)f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a
            }
            return f
        }, B = b.select = function (a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b)return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                    if (f.splice(e, 1), a = d.length && m(f), !a)return $.apply(c, d), c;
                    break
                }
            }
            return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function (a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), e(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function (a, b, c) {
            if (!c)return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), v.attributes && e(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function (a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase())return a.defaultValue
        }), e(function (a) {
            return null == a.getAttribute("disabled")
        }) || f(ba, function (a, b, c) {
            var d;
            if (!c)return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    _.find = ea, _.expr = ea.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ea.uniqueSort, _.text = ea.getText, _.isXMLDoc = ea.isXML, _.contains = ea.contains;
    var fa = _.expr.match.needsContext, ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ha = /^.[^:#\[\.,]*$/;
    _.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, _.fn.extend({
        find: function (a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a)return this.pushStack(_(a).filter(function () {
                for (b = 0; b < c; b++)if (_.contains(e[b], this))return !0
            }));
            for (b = 0; b < c; b++)_.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        }, filter: function (a) {
            return this.pushStack(d(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(d(this, a || [], !0))
        }, is: function (a) {
            return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length
        }
    });
    var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ka = _.fn.init = function (a, b) {
        var c, d;
        if (!a)return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ja.exec(a), !c || !c[1] && b)return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), ga.test(c[1]) && _.isPlainObject(b))for (c in b)_.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
    };
    ka.prototype = _.fn, ia = _(Z);
    var la = /^(?:parents|prev(?:Until|All))/, ma = {children: !0, contents: !0, next: !0, prev: !0};
    _.extend({
        dir: function (a, b, c) {
            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType;)if (1 === a.nodeType) {
                if (e && _(a).is(c))break;
                d.push(a)
            }
            return d
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), _.fn.extend({
        has: function (a) {
            var b = _(a, this), c = b.length;
            return this.filter(function () {
                for (var a = 0; a < c; a++)if (_.contains(this, b[a]))return !0
            })
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; d < e; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? _.unique(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), _.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return _.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return _.dir(a, "parentNode", c)
        }, next: function (a) {
            return e(a, "nextSibling")
        }, prev: function (a) {
            return e(a, "previousSibling")
        }, nextAll: function (a) {
            return _.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return _.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return _.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return _.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return _.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return _.sibling(a.firstChild)
        }, contents: function (a) {
            return a.contentDocument || _.merge([], a.childNodes)
        }
    }, function (a, b) {
        _.fn[a] = function (c, d) {
            var e = _.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var na = /\S+/g, oa = {};
    _.Callbacks = function (a) {
        a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
        var b, c, d, e, g, h, i = [], j = !a.once && [], k = function (f) {
            for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && h < g; h++)if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break
            }
            d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
        }, l = {
            add: function () {
                if (i) {
                    var c = i.length;
                    !function b(c) {
                        _.each(c, function (c, d) {
                            var e = _.type(d);
                            "function" === e ? a.unique && l.has(d) || i.push(d) : d && d.length && "string" !== e && b(d)
                        })
                    }(arguments), d ? g = i.length : b && (e = c, k(b))
                }
                return this
            }, remove: function () {
                return i && _.each(arguments, function (a, b) {
                    for (var c; (c = _.inArray(b, i, c)) > -1;)i.splice(c, 1), d && (c <= g && g--, c <= h && h--)
                }), this
            }, has: function (a) {
                return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
            }, empty: function () {
                return i = [], g = 0, this
            }, disable: function () {
                return i = j = b = void 0, this
            }, disabled: function () {
                return !i
            }, lock: function () {
                return j = void 0, b || l.disable(), this
            }, locked: function () {
                return !j
            }, fireWith: function (a, b) {
                return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
            }, fire: function () {
                return l.fireWith(this, arguments), this
            }, fired: function () {
                return !!c
            }
        };
        return l
    }, _.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", _.Callbacks("once memory"), "resolved"], ["reject", "fail", _.Callbacks("once memory"), "rejected"], ["notify", "progress", _.Callbacks("memory")]],
                c = "pending", d = {
                    state: function () {
                        return c
                    }, always: function () {
                        return e.done(arguments).fail(arguments), this
                    }, then: function () {
                        var a = arguments;
                        return _.Deferred(function (c) {
                            _.each(b, function (b, f) {
                                var g = _.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    }, promise: function (a) {
                        return null != a ? _.extend(a, d) : d
                    }
                }, e = {};
            return d.pipe = d.then, _.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b, c, d, e = 0, f = R.call(arguments), g = f.length,
                h = 1 !== g || a && _.isFunction(a.promise) ? g : 0, i = 1 === h ? a : _.Deferred(),
                j = function (a, c, d) {
                    return function (e) {
                        c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)for (b = new Array(g), c = new Array(g), d = new Array(g); e < g; e++)f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    });
    var pa;
    _.fn.ready = function (a) {
        return _.ready.promise().done(a), this
    }, _.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? _.readyWait++ : _.ready(!0)
        }, ready: function (a) {
            (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
        }
    }), _.ready.promise = function (b) {
        return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pa.promise(b)
    }, _.ready.promise();
    var qa = _.access = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === _.type(c)) {
            e = !0;
            for (h in c)_.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                return j.call(_(a), c)
            })), b))for (; h < i; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    _.acceptData = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
        key: function (a) {
            if (!h.accepts(a))return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {value: c}, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, _.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        }, set: function (a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b) f[b] = c; else if (_.isEmptyObject(f)) _.extend(this.cache[e], b); else for (d in b)f[d] = b[d];
            return f
        }, get: function (a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        }, access: function (a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        }, remove: function (a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b) this.cache[f] = {}; else {
                _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(na) || [])), c = d.length;
                for (; c--;)delete g[d[c]]
            }
        }, hasData: function (a) {
            return !_.isEmptyObject(this.cache[a[this.expando]] || {})
        }, discard: function (a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var ra = new h, sa = new h, ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ua = /([A-Z])/g;
    _.extend({
        hasData: function (a) {
            return sa.hasData(a) || ra.hasData(a)
        }, data: function (a, b, c) {
            return sa.access(a, b, c)
        }, removeData: function (a, b) {
            sa.remove(a, b)
        }, _data: function (a, b, c) {
            return ra.access(a, b, c)
        }, _removeData: function (a, b) {
            ra.remove(a, b)
        }
    }), _.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;)g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
                    ra.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                sa.set(this, a)
            }) : qa(this, function (b) {
                var c, d = _.camelCase(a);
                if (f && void 0 === b) {
                    if (c = sa.get(f, a), void 0 !== c)return c;
                    if (c = sa.get(f, d), void 0 !== c)return c;
                    if (c = i(f, d, void 0), void 0 !== c)return c
                } else this.each(function () {
                    var c = sa.get(this, d);
                    sa.set(this, d, b), a.indexOf("-") !== -1 && void 0 !== c && sa.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        }, removeData: function (a) {
            return this.each(function () {
                sa.remove(this, a)
            })
        }
    }), _.extend({
        queue: function (a, b, c) {
            var d;
            if (a)return b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), d || []
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = _.queue(a, b), d = c.length, e = c.shift(), f = _._queueHooks(a, b), g = function () {
                _.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return ra.get(a, c) || ra.access(a, c, {
                    empty: _.Callbacks("once memory").add(function () {
                        ra.remove(a, [b + "queue", c])
                    })
                })
        }
    }), _.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = _.queue(this, a, b);
                _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                _.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = _.Deferred(), f = this, g = this.length, h = function () {
                --d || e.resolveWith(f, [f])
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;)c = ra.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, wa = ["Top", "Right", "Bottom", "Left"],
        xa = function (a, b) {
            return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
        }, ya = /^(?:checkbox|radio)$/i;
    !function () {
        var a = Z.createDocumentFragment(), b = a.appendChild(Z.createElement("div")), c = Z.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var za = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Aa = /^key/, Ba = /^(?:mouse|pointer|contextmenu)|click/, Ca = /^(?:focusinfocus|focusoutblur)$/,
        Da = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
            if (q)for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
                return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
            }), b = (b || "").match(na) || [""], j = b.length; j--;)h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
                type: n,
                origType: p,
                data: d,
                handler: c,
                guid: c.guid,
                selector: e,
                needsContext: e && _.expr.match.needsContext.test(e),
                namespace: o.join(".")
            }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(na) || [""], j = b.length; j--;)if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;)k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                } else for (n in i)_.event.remove(a, n + b[j], c, d, !0);
                _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || Z], n = X.call(b, "type") ? b.type : b,
                o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !_.isWindow(d)) {
                    for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode)m.push(g), h = g;
                    h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0; (g = m[f++]) && !b.isPropagationStopped();)b.type = f > 1 ? i : l.bindType || n, k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
            }
        },
        dispatch: function (a) {
            a = _.event.fix(a);
            var b, c, d, e, f, g = [], h = R.call(arguments), i = (ra.get(this, "events") || {})[a.type] || [],
                j = _.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = _.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped();)for (a.currentTarget = e.elem, c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)a.namespace_re && !a.namespace_re.test(f.namespace) || (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))for (; i !== this; i = i.parentNode || this)if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; c < h; c++)f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
                d.length && g.push({elem: i, handlers: d})
            }
            return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[_.expando])return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--;)c = d[b], a[c] = f[c];
            return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== l() && this.focus)return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === l() && this.blur)return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && _.nodeName(this, "input"))return this.click(), !1
                }, _default: function (a) {
                    return _.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = _.extend(new _.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, _.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, _.Event = function (a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
    }, _.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        _.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return e && (e === d || _.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), Y.focusinBubbles || _.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0)
        };
        _.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = ra.access(d, b);
                e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = ra.access(d, b) - 1;
                e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b))
            }
        }
    }), _.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a)this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k; else if (!d)return this;
            return 1 === e && (f = d, d = function (a) {
                return _().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function () {
                _.event.add(this, a, d, c, b)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a)this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = k), this.each(function () {
                _.event.remove(this, a, c, b)
            })
        }, trigger: function (a, b) {
            return this.each(function () {
                _.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            if (c)return _.event.trigger(a, b, c, !0)
        }
    });
    var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Fa = /<([\w:]+)/,
        Ga = /<|&#?\w+;/, Ha = /<(?:script|style|link)/i, Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ja = /^$|\/(?:java|ecma)script/i, Ka = /^true\/(.*)/, La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ma = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, Ma.th = Ma.td, _.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = _.contains(a.ownerDocument, a);
            if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))for (g = r(h), f = r(a), d = 0, e = f.length; d < e; d++)s(f[d], g[d]);
            if (b)if (c)for (f = f || r(a), g = g || r(h), d = 0, e = f.length; d < e; d++)q(f[d], g[d]); else q(a, h);
            return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
        }, buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; m < n; m++)if (e = a[m], e || 0 === e)if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e); else if (Ga.test(e)) {
                for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || ["", ""])[1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], j = h[0]; j--;)f = f.lastChild;
                _.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++];)if ((!d || _.inArray(e, d) === -1) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))for (j = 0; e = f[j++];)Ja.test(e.type || "") && c.push(e);
            return k
        }, cleanData: function (a) {
            for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
                    if (b.events)for (d in b.events)f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                    ra.cache[e] && delete ra.cache[e]
                }
                delete sa.cache[c[sa.expando]]
            }
        }
    }), _.fn.extend({
        text: function (a) {
            return qa(this, function (a) {
                return void 0 === a ? _.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, remove: function (a, b) {
            for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++)1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
            return this
        }, clone: function (a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function () {
                return _.clone(this, a, b)
            })
        }, html: function (a) {
            return qa(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType)return b.innerHTML;
                if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Ea, "<$1></$2>");
                    try {
                        for (; c < d; c++)b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (a) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], p = _.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m))return this.each(function (c) {
                var d = k.eq(c);
                p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
            });
            if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (e = _.map(r(c, "script"), n), f = e.length; i < j; i++)g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                if (f)for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; i < f; i++)g = e[i], Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")))
            }
            return this
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        _.fn[a] = function (a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; g <= f; g++)c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Na, Oa = {}, Pa = /^margin/, Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"), Ra = function (b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    };
    !function () {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
        }

        var c, d, e = Z.documentElement, f = Z.createElement("div"), g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {
            pixelPosition: function () {
                return b(), c
            }, boxSizingReliable: function () {
                return null == d && b(), d
            }, reliableMarginRight: function () {
                var b, c = g.appendChild(Z.createElement("div"));
                return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
            }
        }))
    }(), _.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b)g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)a.style[f] = g[f];
        return e
    };
    var Sa = /^(none|table(?!-c[ea]).+)/, Ta = new RegExp("^(" + va + ")(.*)$", "i"),
        Ua = new RegExp("^([+-])=(" + va + ")", "i"),
        Va = {position: "absolute", visibility: "hidden", display: "block"},
        Wa = {letterSpacing: "0", fontWeight: "400"}, Xa = ["Webkit", "O", "Moz", "ms"];
    _.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: "cssFloat"},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = _.camelCase(b), i = a.style;
                return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = _.camelCase(b);
            return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
        }
    }), _.each(["height", "width"], function (a, b) {
        _.cssHooks[b] = {
            get: function (a, c, d) {
                if (c)return Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function () {
                    return A(a, b, d)
                }) : A(a, b, d)
            }, set: function (a, c, d) {
                var e = d && Ra(a);
                return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function (a, b) {
        if (b)return _.swap(a, {display: "inline-block"}, v, [a, "marginRight"])
    }), _.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        _.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++)e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Pa.test(a) || (_.cssHooks[a + b].set = y)
    }), _.fn.extend({
        css: function (a, b) {
            return qa(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (_.isArray(b)) {
                    for (d = Ra(a), e = b.length; g < e; g++)f[b[g]] = _.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function () {
            return B(this, !0)
        }, hide: function () {
            return B(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                xa(this) ? _(this).show() : _(this).hide()
            })
        }
    }), _.Tween = C, C.prototype = {
        constructor: C, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = C.propHooks[this.prop];
            return this.options.duration ? this.pos = b = _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
        }
    }, C.prototype.init.prototype = C.prototype, C.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, _.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, _.fx = C.prototype.init, _.fx.step = {};
    var Ya, Za, $a = /^(?:toggle|show|hide)$/, _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
        ab = /queueHooks$/, bb = [G], cb = {
            "*": [function (a, b) {
                var c = this.createTween(a, b), d = c.cur(), e = _a.exec(b), f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
                    g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)), h = 1, i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };
    _.Animation = _.extend(I, {
        tweener: function (a, b) {
            _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; d < e; d++)c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? bb.unshift(a) : bb.push(a)
        }
    }), _.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? _.extend({}, a) : {
            complete: c || !c && b || _.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !_.isFunction(b) && b
        };
        return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
        }, d
    }, _.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(xa).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = _.isEmptyObject(a), f = _.speed(b, c, d), g = function () {
                var b = I(this, _.extend({}, a), f);
                (e || ra.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", f = _.timers, g = ra.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && ab.test(e) && d(g[e]);
                for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                !b && c || _.dequeue(this, a)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = ra.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = _.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; b < g; b++)d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), _.each(["toggle", "show", "hide"], function (a, b) {
        var c = _.fn[b];
        _.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
        }
    }), _.each({
        slideDown: E("show"),
        slideUp: E("hide"),
        slideToggle: E("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        _.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), _.timers = [], _.fx.tick = function () {
        var a, b = 0, c = _.timers;
        for (Ya = _.now(); b < c.length; b++)a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || _.fx.stop(), Ya = void 0
    }, _.fx.timer = function (a) {
        _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
    }, _.fx.interval = 13, _.fx.start = function () {
        Za || (Za = setInterval(_.fx.tick, _.fx.interval))
    }, _.fx.stop = function () {
        clearInterval(Za), Za = null
    }, _.fx.speeds = {slow: 600, fast: 200, _default: 400}, _.fn.delay = function (a, b) {
        return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, function () {
        var a = Z.createElement("input"), b = Z.createElement("select"), c = b.appendChild(Z.createElement("option"));
        a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
    }();
    var db, eb, fb = _.expr.attrHandle;
    _.fn.extend({
        attr: function (a, b) {
            return qa(this, _.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                _.removeAttr(this, a)
            })
        }
    }), _.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)return typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b))
        }, removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(na);
            if (f && 1 === a.nodeType)for (; c = f[e++];)d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), eb = {
        set: function (a, b, c) {
            return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = fb[b] || _.find.attr;
        fb[b] = function (a, b, d) {
            var e, f;
            return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fb[b] = f), e
        }
    });
    var gb = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({
        prop: function (a, b) {
            return qa(this, _.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return this.each(function () {
                delete this[_.propFix[a] || a]
            })
        }
    }), _.extend({
        propFix: {for: "htmlFor", class: "className"}, prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)return f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), Y.optSelected || (_.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        _.propFix[this.toLowerCase()] = this
    });
    var hb = /[\t\r\n\f]/g;
    _.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a))return this.each(function (b) {
                _(this).addClass(a.call(this, b, this.className))
            });
            if (h)for (b = (a || "").match(na) || []; i < j; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) {
                for (f = 0; e = b[f++];)d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = _.trim(d), c.className !== g && (c.className = g)
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a))return this.each(function (b) {
                _(this).removeClass(a.call(this, b, this.className))
            });
            if (h)for (b = (a || "").match(na) || []; i < j; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) {
                for (f = 0; e = b[f++];)for (; d.indexOf(" " + e + " ") >= 0;)d = d.replace(" " + e + " ", " ");
                g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : _.isFunction(a) ? this.each(function (c) {
                _(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function () {
                if ("string" === c)for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++];)e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else c !== za && "boolean" !== c || (this.className && ra.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "")
            })
        }, hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; c < d; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0)return !0;
            return !1
        }
    });
    var ib = /\r/g;
    _.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)return d = _.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function (a) {
                            return null == a ? "" : a + ""
                        })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e)return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)
            }
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = _.find.attr(a, "value");
                    return null != b ? b : _.trim(_.text(a))
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || e < 0, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0; i < h; i++)if (c = d[i], (c.selected || i === e) && (Y.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !_.nodeName(c.parentNode, "optgroup"))) {
                        if (b = _(c).val(), f)return b;
                        g.push(b)
                    }
                    return g
                }, set: function (a, b) {
                    for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--;)d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), _.each(["radio", "checkbox"], function () {
        _.valHooks[this] = {
            set: function (a, b) {
                if (_.isArray(b))return a.checked = _.inArray(_(a).val(), b) >= 0
            }
        }, Y.checkOn || (_.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        _.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), _.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var jb = _.now(), kb = /\?/;
    _.parseJSON = function (a) {
        return JSON.parse(a + "")
    }, _.parseXML = function (a) {
        var b, c;
        if (!a || "string" != typeof a)return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (a) {
            b = void 0
        }
        return b && !b.getElementsByTagName("parsererror").length || _.error("Invalid XML: " + a), b
    };
    var lb = /#.*$/, mb = /([?&])_=[^&]*/, nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, pb = /^(?:GET|HEAD)$/, qb = /^\/\//,
        rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, sb = {}, tb = {}, ub = "*/".concat("*"),
        vb = a.location.href, wb = rb.exec(vb.toLowerCase()) || [];
    _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vb,
            type: "GET",
            isLocal: ob.test(wb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": _.parseJSON, "text xml": _.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (a, b) {
            return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
        },
        ajaxPrefilter: J(sb),
        ajaxTransport: J(tb),
        ajax: function (a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && a < 300 || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, !a && w || (w = "error", a < 0 && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
            }

            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b), m = l.context || l,
                n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event, o = _.Deferred(),
                p = _.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                    readyState: 0, getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!g)for (g = {}; b = nb.exec(f);)g[b[1].toLowerCase()] = b[2];
                            b = g[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    }, getAllResponseHeaders: function () {
                        return 2 === t ? f : null
                    }, setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    }, overrideMimeType: function (a) {
                        return t || (l.mimeType = a), this
                    }, statusCode: function (a) {
                        var b;
                        if (a)if (t < 2)for (b in a)q[b] = [q[b], a[b]]; else v.always(a[v.status]);
                        return this
                    }, abort: function (a) {
                        var b = a || u;
                        return d && d.abort(b), c(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [""], null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sb, l, b, v), 2 === t)return v;
            j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers)v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t))return v.abort();
            u = "abort";
            for (k in{success: 1, error: 1, complete: 1})v[k](l[k]);
            if (d = K(tb, l, b, v)) {
                v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function () {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1, d.send(r, c)
                } catch (a) {
                    if (!(t < 2))throw a;
                    c(-1, a)
                }
            } else c(-1, "No Transport");
            return v
        },
        getJSON: function (a, b, c) {
            return _.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return _.get(a, void 0, b, "script")
        }
    }), _.each(["get", "post"], function (a, b) {
        _[b] = function (a, c, d, e) {
            return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), _._evalUrl = function (a) {
        return _.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
    }, _.fn.extend({
        wrapAll: function (a) {
            var b;
            return _.isFunction(a) ? this.each(function (b) {
                _(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                for (var a = this; a.firstElementChild;)a = a.firstElementChild;
                return a
            }).append(this)), this)
        }, wrapInner: function (a) {
            return _.isFunction(a) ? this.each(function (b) {
                _(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = _(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = _.isFunction(a);
            return this.each(function (c) {
                _(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
            }).end()
        }
    }), _.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, _.expr.filters.visible = function (a) {
        return !_.expr.filters.hidden(a)
    };
    var xb = /%20/g, yb = /\[\]$/, zb = /\r?\n/g, Ab = /^(?:submit|button|image|reset|file)$/i,
        Bb = /^(?:input|select|textarea|keygen)/i;
    _.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a)O(c, a[c], b, e);
        return d.join("&").replace(xb, "+")
    }, _.fn.extend({
        serialize: function () {
            return _.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = _.prop(this, "elements");
                return a ? _.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a))
            }).map(function (a, b) {
                var c = _(this).val();
                return null == c ? null : _.isArray(c) ? _.map(c, function (a) {
                    return {name: b.name, value: a.replace(zb, "\r\n")}
                }) : {name: b.name, value: c.replace(zb, "\r\n")}
            }).get()
        }
    }), _.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (a) {
        }
    };
    var Cb = 0, Db = {}, Eb = {0: 200, 1223: 204}, Fb = _.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in Db)Db[a]()
    }), Y.cors = !!Fb && "withCredentials" in Fb, Y.ajax = Fb = !!Fb, _.ajaxTransport(function (a) {
        var b;
        if (Y.cors || Fb && !a.crossDomain)return {
            send: function (c, d) {
                var e, f = a.xhr(), g = ++Cb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (e in a.xhrFields)f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c)f.setRequestHeader(e, c[e]);
                b = function (a) {
                    return function () {
                        b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Db[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (a) {
                    if (b)throw a
                }
            }, abort: function () {
                b && b()
            }
        }
    }), _.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (a) {
                return _.globalEval(a), a
            }
        }
    }), _.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), _.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (d, e) {
                    b = _("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function (a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), Z.head.appendChild(b[0])
                }, abort: function () {
                    c && c()
                }
            }
        }
    });
    var Gb = [], Hb = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = Gb.pop() || _.expando + "_" + jb++;
            return this[a] = !0, a
        }
    }), _.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g,
            h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0])return e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || _.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
        }), "script"
    }), _.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a)return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || Z;
        var d = ga.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
    };
    var Ib = _.fn.load;
    _.fn.load = function (a, b, c) {
        if ("string" != typeof a && Ib)return Ib.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
                g.each(c, f || [a.responseText, b, a])
            }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        _.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), _.expr.filters.animated = function (a) {
        return _.grep(_.timers, function (b) {
            return a === b.elem
        }).length
    };
    var Jb = a.document.documentElement;
    _.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = _.css(a, "position"), l = _(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, _.fn.extend({
        offset: function (a) {
            if (arguments.length)return void 0 === a ? this : this.each(function (b) {
                _.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0], e = {top: 0, left: 0}, f = d && d.ownerDocument;
            if (f)return b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        }, position: function () {
            if (this[0]) {
                var a, b, c = this[0], d = {top: 0, left: 0};
                return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - _.css(c, "marginTop", !0),
                    left: b.left - d.left - _.css(c, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");)a = a.offsetParent;
                return a || Jb
            })
        }
    }), _.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function (e) {
            return qa(this, function (b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), _.each(["top", "left"], function (a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function (a, c) {
            if (c)return c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c
        })
    }), _.each({Height: "height", Width: "width"}, function (a, b) {
        _.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            _.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return qa(this, function (b, c, d) {
                    var e;
                    return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), _.fn.size = function () {
        return this.length
    }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return _
    });
    var Kb = a.jQuery, Lb = a.$;
    return _.noConflict = function (b) {
        return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _
    }, typeof b === za && (a.jQuery = a.$ = _), _
}), function () {
    var a, b, c, d, e, f = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, g = [].indexOf || function (a) {
            for (var b = 0, c = this.length; c > b; b++)if (b in this && this[b] === a)return b;
            return -1
        };
    b = function () {
        function a() {
        }

        return a.prototype.extend = function (a, b) {
            var c, d;
            for (c in b)d = b[c], null == a[c] && (a[c] = d);
            return a
        }, a.prototype.isMobile = function (a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }, a.prototype.createEvent = function (a, b, c, d) {
            var e;
            return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
        }, a.prototype.emitEvent = function (a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
        }, a.prototype.addEvent = function (a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }, a.prototype.removeEvent = function (a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }, a.prototype.innerHeight = function () {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, a
    }(), c = this.WeakMap || this.MozWeakMap || (c = function () {
            function a() {
                this.keys = [], this.values = []
            }

            return a.prototype.get = function (a) {
                var b, c, d, e, f;
                for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)if (c = f[b], c === a)return this.values[b]
            }, a.prototype.set = function (a, b) {
                var c, d, e, f, g;
                for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)if (d = g[c], d === a)return void(this.values[c] = b);
                return this.keys.push(a), this.values.push(b)
            }, a
        }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function () {
            function a() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }

            return a.notSupported = !0, a.prototype.observe = function () {
            }, a
        }()), d = this.getComputedStyle || function (a) {
            return this.getPropertyValue = function (b) {
                var c;
                return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function (a, b) {
                    return b.toUpperCase()
                }), (null != (c = a.currentStyle) ? c[b] : void 0) || null
            }, this
        }, e = /(\-([a-z]){1})/g, this.WOW = function () {
        function e(a) {
            null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }

        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null
        }, e.prototype.init = function () {
            var a;
            return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, e.prototype.start = function () {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = function () {
                    var a, c, d, e;
                    for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++)b = d[a], e.push(b);
                    return e
                }.call(this), this.all = function () {
                    var a, c, d, e;
                    for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++)b = d[a], e.push(b);
                    return e
                }.call(this), this.boxes.length)if (this.disabled()) this.resetStyle(); else for (e = this.boxes, c = 0, d = e.length; d > c; c++)b = e[c], this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function (a) {
                return function (b) {
                    var c, d, e, f, g;
                    for (g = [], c = 0, d = b.length; d > c; c++)f = b[c], g.push(function () {
                        var a, b, c, d;
                        for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++)e = c[a], d.push(this.doSync(e));
                        return d
                    }.call(a));
                    return g
                }
            }(this)).observe(document.body, {childList: !0, subtree: !0}) : void 0
        }, e.prototype.stop = function () {
            return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, e.prototype.sync = function () {
            return a.notSupported ? this.doSync(this.element) : void 0
        }, e.prototype.doSync = function (a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element), 1 === a.nodeType) {
                for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++)b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }, e.prototype.show = function (a) {
            return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a
        }, e.prototype.applyStyle = function (a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function (f) {
                return function () {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }, e.prototype.animate = function () {
            return "requestAnimationFrame" in window ? function (a) {
                return window.requestAnimationFrame(a)
            } : function (a) {
                return a()
            }
        }(), e.prototype.resetStyle = function () {
            var a, b, c, d, e;
            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)a = d[b], e.push(a.style.visibility = "visible");
            return e
        }, e.prototype.resetAnimation = function (a) {
            var b;
            return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
        }, e.prototype.customStyle = function (a, b, c, d, e) {
            return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {animationDuration: c}), d && this.vendorSet(a.style, {animationDelay: d}), e && this.vendorSet(a.style, {animationIterationCount: e}), this.vendorSet(a.style, {animationName: b ? "none" : this.cachedAnimationName(a)}), a
        }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function (a, b) {
            var c, d, e, f;
            d = [];
            for (c in b)e = b[c], a["" + c] = e, d.push(function () {
                var b, d, g, h;
                for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++)f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                return h
            }.call(this));
            return d
        }, e.prototype.vendorCSS = function (a, b) {
            var c, e, f, g, h, i;
            for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++)i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g
        }, e.prototype.animationName = function (a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }, e.prototype.cacheAnimationName = function (a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }, e.prototype.cachedAnimationName = function (a) {
            return this.animationNameCache.get(a)
        }, e.prototype.scrollHandler = function () {
            return this.scrolled = !0
        }, e.prototype.scrollCallback = function () {
            var a;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
                var b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, e.prototype.offsetTop = function (a) {
            for (var b; void 0 === a.offsetTop;)a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent;)b += a.offsetTop;
            return b
        }, e.prototype.isVisible = function (a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
        }, e.prototype.util = function () {
            return null != this._util ? this._util : this._util = new b
        }, e.prototype.disabled = function () {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, e
    }()
}.call(this), !function () {
    var a = function () {
        try {
            var a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            if (a)return !0
        } catch (a) {
            if (void 0 != navigator.mimeTypes["application/x-shockwave-flash"])return !0
        }
        return !1
    }, b = function (a, b) {
        window.XMLHttpRequest.prototype[a] = b(window.XMLHttpRequest.prototype[a])
    };
    if (window.XMLHttpRequest) {
        if (!window.FormData || window.FileAPI && FileAPI.forceLoad) {
            var c = function (a) {
                if (!a.__listeners) {
                    a.upload || (a.upload = {}), a.__listeners = [];
                    var b = a.upload.addEventListener;
                    a.upload.addEventListener = function (c, d) {
                        a.__listeners[c] = d, b && b.apply(this, arguments)
                    }
                }
            };
            b("open", function (a) {
                return function (b, d, e) {
                    c(this), this.__url = d;
                    try {
                        a.apply(this, [b, d, e])
                    } catch (c) {
                        c.message.indexOf("Access is denied") > -1 && a.apply(this, [b, "_fix_for_ie_crossdomain__", e])
                    }
                }
            }), b("getResponseHeader", function (a) {
                return function (b) {
                    return this.__fileApiXHR && this.__fileApiXHR.getResponseHeader ? this.__fileApiXHR.getResponseHeader(b) : null == a ? null : a.apply(this, [b])
                }
            }), b("getAllResponseHeaders", function (a) {
                return function () {
                    return this.__fileApiXHR && this.__fileApiXHR.getAllResponseHeaders ? this.__fileApiXHR.getAllResponseHeaders() : null == a ? null : a.apply(this)
                }
            }), b("abort", function (a) {
                return function () {
                    return this.__fileApiXHR && this.__fileApiXHR.abort ? this.__fileApiXHR.abort() : null == a ? null : a.apply(this)
                }
            }), b("setRequestHeader", function (a) {
                return function (b, d) {
                    if ("__setXHR_" === b) {
                        c(this);
                        var e = d(this);
                        e instanceof Function && e(this)
                    } else this.__requestHeaders = this.__requestHeaders || {}, this.__requestHeaders[b] = d, a.apply(this, arguments)
                }
            }), b("send", function (b) {
                return function () {
                    var c = this;
                    if (arguments[0] && arguments[0].__isShim) {
                        var d = arguments[0], e = {
                            url: c.__url, jsonp: !1, cache: !0, complete: function (a, b) {
                                c.__completed = !0, !a && c.__listeners.load && c.__listeners.load({
                                    type: "load",
                                    loaded: c.__loaded,
                                    total: c.__total,
                                    target: c,
                                    lengthComputable: !0
                                }), !a && c.__listeners.loadend && c.__listeners.loadend({
                                    type: "loadend",
                                    loaded: c.__loaded,
                                    total: c.__total,
                                    target: c,
                                    lengthComputable: !0
                                }), "abort" === a && c.__listeners.abort && c.__listeners.abort({
                                    type: "abort",
                                    loaded: c.__loaded,
                                    total: c.__total,
                                    target: c,
                                    lengthComputable: !0
                                }), void 0 !== b.status && Object.defineProperty(c, "status", {
                                    get: function () {
                                        return 0 == b.status && a && "abort" !== a ? 500 : b.status
                                    }
                                }), void 0 !== b.statusText && Object.defineProperty(c, "statusText", {
                                    get: function () {
                                        return b.statusText
                                    }
                                }), Object.defineProperty(c, "readyState", {
                                    get: function () {
                                        return 4
                                    }
                                }), void 0 !== b.response && Object.defineProperty(c, "response", {
                                    get: function () {
                                        return b.response
                                    }
                                });
                                var d = b.responseText || (a && 0 == b.status && "abort" !== a ? a : void 0);
                                Object.defineProperty(c, "responseText", {
                                    get: function () {
                                        return d
                                    }
                                }), Object.defineProperty(c, "response", {
                                    get: function () {
                                        return d
                                    }
                                }), a && Object.defineProperty(c, "err", {
                                    get: function () {
                                        return a
                                    }
                                }), c.__fileApiXHR = b, c.onreadystatechange && c.onreadystatechange()
                            }, fileprogress: function (a) {
                                if (a.target = c, c.__listeners.progress && c.__listeners.progress(a), c.__total = a.total, c.__loaded = a.loaded, a.total === a.loaded) {
                                    var b = this;
                                    setTimeout(function () {
                                        c.__completed || (c.getAllResponseHeaders = function () {
                                        }, b.complete(null, {status: 204, statusText: "No Content"}))
                                    }, 1e4)
                                }
                            }, headers: c.__requestHeaders
                        };
                        e.data = {}, e.files = {};
                        for (var f = 0; f < d.data.length; f++) {
                            var g = d.data[f];
                            null != g.val && null != g.val.name && null != g.val.size && null != g.val.type ? e.files[g.key] = g.val : e.data[g.key] = g.val
                        }
                        setTimeout(function () {
                            if (!a())throw'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
                            c.__fileApiXHR = FileAPI.upload(e)
                        }, 1)
                    } else b.apply(c, arguments)
                }
            })
        } else b("setRequestHeader", function (a) {
            return function (b, c) {
                if ("__setXHR_" === b) {
                    var d = c(this);
                    d instanceof Function && d(this)
                } else a.apply(this, arguments)
            }
        });
        window.XMLHttpRequest.__isShim = !0
    }
    if (!window.FormData || window.FileAPI && FileAPI.forceLoad) {
        var d = function (b) {
            if (!a())throw'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
            var c = angular.element(b);
            if (!(c.attr("disabled") || c.hasClass("js-fileapi-wrapper") || null == b.getAttribute("ng-file-select") && null == b.getAttribute("data-ng-file-select")))if (FileAPI.wrapInsideDiv) {
                var d = document.createElement("div");
                d.innerHTML = '<div class="js-fileapi-wrapper" style="position:relative; overflow:hidden"></div>', d = d.firstChild;
                var e = b.parentNode;
                e.insertBefore(d, b), e.removeChild(b), d.appendChild(b)
            } else c.addClass("js-fileapi-wrapper"), c.parent()[0].__file_click_fn_delegate_ && (("" === c.parent().css("position") || "static" === c.parent().css("position")) && c.parent().css("position", "relative"), c.css("top", 0).css("bottom", 0).css("left", 0).css("right", 0).css("width", "100%").css("height", "100%").css("padding", 0).css("margin", 0), c.parent().unbind("click", c.parent()[0].__file_click_fn_delegate_))
        }, e = function (a) {
            return function (b) {
                for (var c = FileAPI.getFiles(b), d = 0; d < c.length; d++)void 0 === c[d].size && (c[d].size = 0), void 0 === c[d].name && (c[d].name = "file"), void 0 === c[d].type && (c[d].type = "undefined");
                b.target || (b.target = {}), b.target.files = c, b.target.files != c && (b.__files_ = c), (b.__files_ || b.target.files).item = function (a) {
                    return (b.__files_ || b.target.files)[a] || null
                }, a && a.apply(this, [b])
            }
        }, f = function (a, b) {
            return ("change" === b.toLowerCase() || "onchange" === b.toLowerCase()) && "file" == a.getAttribute("type")
        };
        HTMLInputElement.prototype.addEventListener && (HTMLInputElement.prototype.addEventListener = function (a) {
            return function (b, c, g, h) {
                f(this, b) ? (d(this), a.apply(this, [b, e(c), g, h])) : a.apply(this, [b, c, g, h])
            }
        }(HTMLInputElement.prototype.addEventListener)), HTMLInputElement.prototype.attachEvent && (HTMLInputElement.prototype.attachEvent = function (a) {
            return function (b, c) {
                f(this, b) ? (d(this), window.jQuery ? angular.element(this).bind("change", e(null)) : a.apply(this, [b, e(c)])) : a.apply(this, [b, c])
            }
        }(HTMLInputElement.prototype.attachEvent)), window.FormData = FormData = function () {
            return {
                append: function (a, b, c) {
                    this.data.push({key: a, val: b, name: c})
                }, data: [], __isShim: !0
            }
        }, function () {
            if (window.FileAPI || (window.FileAPI = {}), FileAPI.forceLoad && (FileAPI.html5 = !1), !FileAPI.upload) {
                var b, c, d, e, f, g = document.createElement("script"), h = document.getElementsByTagName("script");
                if (window.FileAPI.jsUrl) b = window.FileAPI.jsUrl; else if (window.FileAPI.jsPath) c = window.FileAPI.jsPath; else for (d = 0; d < h.length; d++)if (f = h[d].src, e = f.indexOf("angular-file-upload-shim.js"), -1 == e && (e = f.indexOf("angular-file-upload-shim.min.js")), e > -1) {
                    c = f.substring(0, e);
                    break
                }
                null == FileAPI.staticPath && (FileAPI.staticPath = c), g.setAttribute("src", b || c + "FileAPI.min.js"), document.getElementsByTagName("head")[0].appendChild(g), FileAPI.hasFlash = a()
            }
        }(), FileAPI.disableFileInput = function (a, b) {
            b ? a.removeClass("js-fileapi-wrapper") : a.addClass("js-fileapi-wrapper")
        }
    }
    window.FileReader || (window.FileReader = function () {
        var a = this, b = !1;
        this.listeners = {}, this.addEventListener = function (b, c) {
            a.listeners[b] = a.listeners[b] || [], a.listeners[b].push(c)
        }, this.removeEventListener = function (b, c) {
            a.listeners[b] && a.listeners[b].splice(a.listeners[b].indexOf(c), 1)
        }, this.dispatchEvent = function (b) {
            var c = a.listeners[b.type];
            if (c)for (var d = 0; d < c.length; d++)c[d].call(a, b)
        }, this.onabort = this.onerror = this.onload = this.onloadstart = this.onloadend = this.onprogress = null;
        var c = function (b, c) {
            var d = {type: b, target: a, loaded: c.loaded, total: c.total, error: c.error};
            return null != c.result && (d.target.result = c.result), d
        }, d = function (d) {
            if (b || (b = !0, a.onloadstart && this.onloadstart(c("loadstart", d))), "load" === d.type) {
                a.onloadend && a.onloadend(c("loadend", d));
                var e = c("load", d);
                a.onload && a.onload(e), a.dispatchEvent(e)
            } else if ("progress" === d.type) {
                var e = c("progress", d);
                a.onprogress && a.onprogress(e), a.dispatchEvent(e)
            } else {
                var e = c("error", d);
                a.onerror && a.onerror(e), a.dispatchEvent(e)
            }
        };
        this.readAsArrayBuffer = function (a) {
            FileAPI.readAsBinaryString(a, d)
        }, this.readAsBinaryString = function (a) {
            FileAPI.readAsBinaryString(a, d)
        }, this.readAsDataURL = function (a) {
            FileAPI.readAsDataURL(a, d)
        }, this.readAsText = function (a) {
            FileAPI.readAsText(a, d)
        }
    })
}(), function (a) {
    "use strict";
    function b(a, b) {
        return b = b || Error, function () {
            var c, d, e = 2, f = arguments, g = f[0], h = "[" + (a ? a + ":" : "") + g + "] ", i = f[1];
            for (h += i.replace(/\{\d+\}/g, function (a) {
                var b = +a.slice(1, -1), c = b + e;
                return c < f.length ? sa(f[c]) : a
            }), h += "\nhttp://errors.angularjs.org/1.5.7/" + (a ? a + "/" : "") + g, d = e, c = "?"; d < f.length; d++, c = "&")h += c + "p" + (d - e) + "=" + encodeURIComponent(sa(f[d]));
            return new b(h)
        }
    }

    function c(a) {
        if (null == a || A(a))return !1;
        if (Wd(a) || v(a) || Ld && a instanceof Ld)return !0;
        var b = "length" in Object(a) && a.length;
        return w(b) && (b >= 0 && (b - 1 in a || a instanceof Array) || "function" == typeof a.item)
    }

    function d(a, b, e) {
        var f, g;
        if (a)if (y(a))for (f in a)"prototype" == f || "length" == f || "name" == f || a.hasOwnProperty && !a.hasOwnProperty(f) || b.call(e, a[f], f, a); else if (Wd(a) || c(a)) {
            var h = "object" != typeof a;
            for (f = 0, g = a.length; f < g; f++)(h || f in a) && b.call(e, a[f], f, a)
        } else if (a.forEach && a.forEach !== d) a.forEach(b, e, a); else if (u(a))for (f in a)b.call(e, a[f], f, a); else if ("function" == typeof a.hasOwnProperty)for (f in a)a.hasOwnProperty(f) && b.call(e, a[f], f, a); else for (f in a)Fd.call(a, f) && b.call(e, a[f], f, a);
        return a
    }

    function e(a, b, c) {
        for (var d = Object.keys(a).sort(), e = 0; e < d.length; e++)b.call(c, a[d[e]], d[e]);
        return d
    }

    function f(a) {
        return function (b, c) {
            a(c, b)
        }
    }

    function g() {
        return ++Vd
    }

    function h(a, b) {
        b ? a.$$hashKey = b : delete a.$$hashKey
    }

    function i(a, b, c) {
        for (var d = a.$$hashKey, e = 0, f = b.length; e < f; ++e) {
            var g = b[e];
            if (t(g) || y(g))for (var j = Object.keys(g), k = 0, l = j.length; k < l; k++) {
                var m = j[k], n = g[m];
                c && t(n) ? x(n) ? a[m] = new Date(n.valueOf()) : z(n) ? a[m] = new RegExp(n) : n.nodeName ? a[m] = n.cloneNode(!0) : J(n) ? a[m] = n.clone() : (t(a[m]) || (a[m] = Wd(n) ? [] : {}), i(a[m], [n], !0)) : a[m] = n
            }
        }
        return h(a, d), a
    }

    function j(a) {
        return i(a, Od.call(arguments, 1), !1)
    }

    function k(a) {
        return i(a, Od.call(arguments, 1), !0)
    }

    function l(a) {
        return parseInt(a, 10)
    }

    function m(a, b) {
        return j(Object.create(a), b)
    }

    function n() {
    }

    function o(a) {
        return a
    }

    function p(a) {
        return function () {
            return a
        }
    }

    function q(a) {
        return y(a.toString) && a.toString !== Rd
    }

    function r(a) {
        return "undefined" == typeof a
    }

    function s(a) {
        return "undefined" != typeof a
    }

    function t(a) {
        return null !== a && "object" == typeof a
    }

    function u(a) {
        return null !== a && "object" == typeof a && !Sd(a)
    }

    function v(a) {
        return "string" == typeof a
    }

    function w(a) {
        return "number" == typeof a
    }

    function x(a) {
        return "[object Date]" === Rd.call(a)
    }

    function y(a) {
        return "function" == typeof a
    }

    function z(a) {
        return "[object RegExp]" === Rd.call(a)
    }

    function A(a) {
        return a && a.window === a
    }

    function B(a) {
        return a && a.$evalAsync && a.$watch
    }

    function C(a) {
        return "[object File]" === Rd.call(a)
    }

    function D(a) {
        return "[object FormData]" === Rd.call(a)
    }

    function E(a) {
        return "[object Blob]" === Rd.call(a)
    }

    function F(a) {
        return "boolean" == typeof a
    }

    function G(a) {
        return a && y(a.then)
    }

    function H(a) {
        return a && w(a.length) && Xd.test(Rd.call(a))
    }

    function I(a) {
        return "[object ArrayBuffer]" === Rd.call(a)
    }

    function J(a) {
        return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
    }

    function K(a) {
        var b, c = {}, d = a.split(",");
        for (b = 0; b < d.length; b++)c[d[b]] = !0;
        return c
    }

    function L(a) {
        return Gd(a.nodeName || a[0] && a[0].nodeName)
    }

    function M(a, b) {
        var c = a.indexOf(b);
        return c >= 0 && a.splice(c, 1), c
    }

    function N(a, b) {
        function c(a, b) {
            var c, d = b.$$hashKey;
            if (Wd(a))for (var f = 0, g = a.length; f < g; f++)b.push(e(a[f])); else if (u(a))for (c in a)b[c] = e(a[c]); else if (a && "function" == typeof a.hasOwnProperty)for (c in a)a.hasOwnProperty(c) && (b[c] = e(a[c])); else for (c in a)Fd.call(a, c) && (b[c] = e(a[c]));
            return h(b, d), b
        }

        function e(a) {
            if (!t(a))return a;
            var b = g.indexOf(a);
            if (b !== -1)return i[b];
            if (A(a) || B(a))throw Td("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
            var d = !1, e = f(a);
            return void 0 === e && (e = Wd(a) ? [] : Object.create(Sd(a)), d = !0), g.push(a), i.push(e), d ? c(a, e) : e
        }

        function f(a) {
            switch (Rd.call(a)) {
                case"[object Int8Array]":
                case"[object Int16Array]":
                case"[object Int32Array]":
                case"[object Float32Array]":
                case"[object Float64Array]":
                case"[object Uint8Array]":
                case"[object Uint8ClampedArray]":
                case"[object Uint16Array]":
                case"[object Uint32Array]":
                    return new a.constructor(e(a.buffer));
                case"[object ArrayBuffer]":
                    if (!a.slice) {
                        var b = new ArrayBuffer(a.byteLength);
                        return new Uint8Array(b).set(new Uint8Array(a)), b
                    }
                    return a.slice(0);
                case"[object Boolean]":
                case"[object Number]":
                case"[object String]":
                case"[object Date]":
                    return new a.constructor(a.valueOf());
                case"[object RegExp]":
                    var c = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]);
                    return c.lastIndex = a.lastIndex, c;
                case"[object Blob]":
                    return new a.constructor([a], {type: a.type})
            }
            if (y(a.cloneNode))return a.cloneNode(!0)
        }

        var g = [], i = [];
        if (b) {
            if (H(b) || I(b))throw Td("cpta", "Can't copy! TypedArray destination cannot be mutated.");
            if (a === b)throw Td("cpi", "Can't copy! Source and destination are identical.");
            return Wd(b) ? b.length = 0 : d(b, function (a, c) {
                "$$hashKey" !== c && delete b[c]
            }), g.push(a), i.push(b), c(a, b)
        }
        return e(a)
    }

    function O(a, b) {
        if (a === b)return !0;
        if (null === a || null === b)return !1;
        if (a !== a && b !== b)return !0;
        var c, d, e, f = typeof a, g = typeof b;
        if (f == g && "object" == f) {
            if (!Wd(a)) {
                if (x(a))return !!x(b) && O(a.getTime(), b.getTime());
                if (z(a))return !!z(b) && a.toString() == b.toString();
                if (B(a) || B(b) || A(a) || A(b) || Wd(b) || x(b) || z(b))return !1;
                e = oa();
                for (d in a)if ("$" !== d.charAt(0) && !y(a[d])) {
                    if (!O(a[d], b[d]))return !1;
                    e[d] = !0
                }
                for (d in b)if (!(d in e) && "$" !== d.charAt(0) && s(b[d]) && !y(b[d]))return !1;
                return !0
            }
            if (!Wd(b))return !1;
            if ((c = a.length) == b.length) {
                for (d = 0; d < c; d++)if (!O(a[d], b[d]))return !1;
                return !0
            }
        }
        return !1
    }

    function P(a, b, c) {
        return a.concat(Od.call(b, c))
    }

    function Q(a, b) {
        return Od.call(a, b || 0)
    }

    function R(a, b) {
        var c = arguments.length > 2 ? Q(arguments, 2) : [];
        return !y(b) || b instanceof RegExp ? b : c.length ? function () {
            return arguments.length ? b.apply(a, P(c, arguments, 0)) : b.apply(a, c)
        } : function () {
            return arguments.length ? b.apply(a, arguments) : b.call(a)
        }
    }

    function S(b, c) {
        var d = c;
        return "string" == typeof b && "$" === b.charAt(0) && "$" === b.charAt(1) ? d = void 0 : A(c) ? d = "$WINDOW" : c && a.document === c ? d = "$DOCUMENT" : B(c) && (d = "$SCOPE"), d
    }

    function T(a, b) {
        if (!r(a))return w(b) || (b = b ? 2 : null), JSON.stringify(a, S, b)
    }

    function U(a) {
        return v(a) ? JSON.parse(a) : a
    }

    function V(a, b) {
        a = a.replace(ae, "");
        var c = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6e4;
        return isNaN(c) ? b : c
    }

    function W(a, b) {
        return a = new Date(a.getTime()), a.setMinutes(a.getMinutes() + b), a
    }

    function X(a, b, c) {
        c = c ? -1 : 1;
        var d = a.getTimezoneOffset(), e = V(b, d);
        return W(a, c * (e - d))
    }

    function Y(a) {
        a = Ld(a).clone();
        try {
            a.empty()
        } catch (a) {
        }
        var b = Ld("<div>").append(a).html();
        try {
            return a[0].nodeType === ge ? Gd(b) : b.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
                return "<" + Gd(b)
            })
        } catch (a) {
            return Gd(b)
        }
    }

    function Z(a) {
        try {
            return decodeURIComponent(a)
        } catch (a) {
        }
    }

    function $(a) {
        var b = {};
        return d((a || "").split("&"), function (a) {
            var c, d, e;
            a && (d = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), c !== -1 && (d = a.substring(0, c), e = a.substring(c + 1)), d = Z(d), s(d) && (e = !s(e) || Z(e), Fd.call(b, d) ? Wd(b[d]) ? b[d].push(e) : b[d] = [b[d], e] : b[d] = e))
        }), b
    }

    function _(a) {
        var b = [];
        return d(a, function (a, c) {
            Wd(a) ? d(a, function (a) {
                b.push(ba(c, !0) + (a === !0 ? "" : "=" + ba(a, !0)))
            }) : b.push(ba(c, !0) + (a === !0 ? "" : "=" + ba(a, !0)))
        }), b.length ? b.join("&") : ""
    }

    function aa(a) {
        return ba(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function ba(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")
    }

    function ca(a, b) {
        var c, d, e = be.length;
        for (d = 0; d < e; ++d)if (c = be[d] + b, v(c = a.getAttribute(c)))return c;
        return null
    }

    function da(a, b) {
        var c, e, f = {};
        d(be, function (b) {
            var d = b + "app";
            !c && a.hasAttribute && a.hasAttribute(d) && (c = a, e = a.getAttribute(d))
        }), d(be, function (b) {
            var d, f = b + "app";
            !c && (d = a.querySelector("[" + f.replace(":", "\\:") + "]")) && (c = d, e = d.getAttribute(f))
        }), c && (f.strictDi = null !== ca(c, "strict-di"), b(c, e ? [e] : [], f))
    }

    function ea(b, c, e) {
        t(e) || (e = {});
        var f = {strictDi: !1};
        e = j(f, e);
        var g = function () {
            if (b = Ld(b), b.injector()) {
                var d = b[0] === a.document ? "document" : Y(b);
                throw Td("btstrpd", "App already bootstrapped with this element '{0}'", d.replace(/</, "&lt;").replace(/>/, "&gt;"))
            }
            c = c || [], c.unshift(["$provide", function (a) {
                a.value("$rootElement", b)
            }]), e.debugInfoEnabled && c.push(["$compileProvider", function (a) {
                a.debugInfoEnabled(!0)
            }]), c.unshift("ng");
            var f = db(c, e.strictDi);
            return f.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
                a.$apply(function () {
                    b.data("$injector", d), c(b)(a)
                })
            }]), f
        }, h = /^NG_ENABLE_DEBUG_INFO!/, i = /^NG_DEFER_BOOTSTRAP!/;
        return a && h.test(a.name) && (e.debugInfoEnabled = !0, a.name = a.name.replace(h, "")), a && !i.test(a.name) ? g() : (a.name = a.name.replace(i, ""), Ud.resumeBootstrap = function (a) {
            return d(a, function (a) {
                c.push(a)
            }), g()
        }, void(y(Ud.resumeDeferredBootstrap) && Ud.resumeDeferredBootstrap()))
    }

    function fa() {
        a.name = "NG_ENABLE_DEBUG_INFO!" + a.name, a.location.reload()
    }

    function ga(a) {
        var b = Ud.element(a).injector();
        if (!b)throw Td("test", "no injector found for element argument to getTestability");
        return b.get("$$testability")
    }

    function ha(a, b) {
        return b = b || "_", a.replace(ce, function (a, c) {
            return (c ? b : "") + a.toLowerCase()
        })
    }

    function ia() {
        var b;
        if (!de) {
            var c = _d();
            Md = r(c) ? a.jQuery : c ? a[c] : void 0, Md && Md.fn.on ? (Ld = Md, j(Md.fn, {
                scope: ze.scope,
                isolateScope: ze.isolateScope,
                controller: ze.controller,
                injector: ze.injector,
                inheritedData: ze.inheritedData
            }), b = Md.cleanData, Md.cleanData = function (a) {
                for (var c, d, e = 0; null != (d = a[e]); e++)c = Md._data(d, "events"), c && c.$destroy && Md(d).triggerHandler("$destroy");
                b(a)
            }) : Ld = Da, Ud.element = Ld, de = !0
        }
    }

    function ja(a, b, c) {
        if (!a)throw Td("areq", "Argument '{0}' is {1}", b || "?", c || "required");
        return a
    }

    function ka(a, b, c) {
        return c && Wd(a) && (a = a[a.length - 1]), ja(y(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), a
    }

    function la(a, b) {
        if ("hasOwnProperty" === a)throw Td("badname", "hasOwnProperty is not a valid {0} name", b)
    }

    function ma(a, b, c) {
        if (!b)return a;
        for (var d, e = b.split("."), f = a, g = e.length, h = 0; h < g; h++)d = e[h], a && (a = (f = a)[d]);
        return !c && y(a) ? R(f, a) : a
    }

    function na(a) {
        for (var b, c = a[0], d = a[a.length - 1], e = 1; c !== d && (c = c.nextSibling); e++)(b || a[e] !== c) && (b || (b = Ld(Od.call(a, 0, e))), b.push(c));
        return b || a
    }

    function oa() {
        return Object.create(null)
    }

    function pa(a) {
        function c(a, b, c) {
            return a[b] || (a[b] = c())
        }

        var d = b("$injector"), e = b("ng"), f = c(a, "angular", Object);
        return f.$$minErr = f.$$minErr || b, c(f, "module", function () {
            var a = {};
            return function (b, f, g) {
                var h = function (a, b) {
                    if ("hasOwnProperty" === a)throw e("badname", "hasOwnProperty is not a valid {0} name", b)
                };
                return h(b, "module"), f && a.hasOwnProperty(b) && (a[b] = null), c(a, b, function () {
                    function a(a, b, c, d) {
                        return d || (d = e), function () {
                            return d[c || "push"]([a, b, arguments]), k
                        }
                    }

                    function c(a, c) {
                        return function (d, f) {
                            return f && y(f) && (f.$$moduleName = b), e.push([a, c, arguments]), k
                        }
                    }

                    if (!f)throw d("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", b);
                    var e = [], h = [], i = [], j = a("$injector", "invoke", "push", h), k = {
                        _invokeQueue: e,
                        _configBlocks: h,
                        _runBlocks: i,
                        requires: f,
                        name: b,
                        provider: c("$provide", "provider"),
                        factory: c("$provide", "factory"),
                        service: c("$provide", "service"),
                        value: a("$provide", "value"),
                        constant: a("$provide", "constant", "unshift"),
                        decorator: c("$provide", "decorator"),
                        animation: c("$animateProvider", "register"),
                        filter: c("$filterProvider", "register"),
                        controller: c("$controllerProvider", "register"),
                        directive: c("$compileProvider", "directive"),
                        component: c("$compileProvider", "component"),
                        config: j,
                        run: function (a) {
                            return i.push(a), this
                        }
                    };
                    return g && j(g), k
                })
            }
        })
    }

    function qa(a, b) {
        if (Wd(a)) {
            b = b || [];
            for (var c = 0, d = a.length; c < d; c++)b[c] = a[c]
        } else if (t(a)) {
            b = b || {};
            for (var e in a)"$" === e.charAt(0) && "$" === e.charAt(1) || (b[e] = a[e])
        }
        return b || a
    }

    function ra(a) {
        var b = [];
        return JSON.stringify(a, function (a, c) {
            if (c = S(a, c), t(c)) {
                if (b.indexOf(c) >= 0)return "...";
                b.push(c)
            }
            return c
        })
    }

    function sa(a) {
        return "function" == typeof a ? a.toString().replace(/ \{[\s\S]*$/, "") : r(a) ? "undefined" : "string" != typeof a ? ra(a) : a
    }

    function ta(c) {
        j(c, {
            bootstrap: ea,
            copy: N,
            extend: j,
            merge: k,
            equals: O,
            element: Ld,
            forEach: d,
            injector: db,
            noop: n,
            bind: R,
            toJson: T,
            fromJson: U,
            identity: o,
            isUndefined: r,
            isDefined: s,
            isString: v,
            isFunction: y,
            isObject: t,
            isNumber: w,
            isElement: J,
            isArray: Wd,
            version: ke,
            isDate: x,
            lowercase: Gd,
            uppercase: Hd,
            callbacks: {counter: 0},
            getTestability: ga,
            $$minErr: b,
            $$csp: $d,
            reloadWithDebugInfo: fa
        }), (Nd = pa(a))("ng", ["ngLocale"], ["$provide", function (a) {
            a.provider({$$sanitizeUri: yc}), a.provider("$compile", ob).directive({
                a: Hf,
                input: $f,
                textarea: $f,
                form: Mf,
                script: Vg,
                select: Yg,
                style: $g,
                option: Zg,
                ngBind: bg,
                ngBindHtml: dg,
                ngBindTemplate: cg,
                ngClass: fg,
                ngClassEven: hg,
                ngClassOdd: gg,
                ngCloak: ig,
                ngController: jg,
                ngForm: Nf,
                ngHide: Og,
                ngIf: mg,
                ngInclude: ng,
                ngInit: pg,
                ngNonBindable: Fg,
                ngPluralize: Jg,
                ngRepeat: Kg,
                ngShow: Ng,
                ngStyle: Pg,
                ngSwitch: Qg,
                ngSwitchWhen: Rg,
                ngSwitchDefault: Sg,
                ngOptions: Ig,
                ngTransclude: Ug,
                ngModel: Cg,
                ngList: qg,
                ngChange: eg,
                pattern: ah,
                ngPattern: ah,
                required: _g,
                ngRequired: _g,
                minlength: ch,
                ngMinlength: ch,
                maxlength: bh,
                ngMaxlength: bh,
                ngValue: ag,
                ngModelOptions: Eg
            }).directive({ngInclude: og}).directive(If).directive(kg), a.provider({
                $anchorScroll: eb,
                $animate: Pe,
                $animateCss: Se,
                $$animateJs: Ne,
                $$animateQueue: Oe,
                $$AnimateRunner: Re,
                $$animateAsyncRun: Qe,
                $browser: kb,
                $cacheFactory: lb,
                $controller: ub,
                $document: vb,
                $exceptionHandler: wb,
                $filter: Mc,
                $$forceReflow: Ye,
                $interpolate: Kb,
                $interval: Lb,
                $http: Gb,
                $httpParamSerializer: yb,
                $httpParamSerializerJQLike: zb,
                $httpBackend: Ib,
                $xhrFactory: Hb,
                $location: $b,
                $log: _b,
                $parse: sc,
                $rootScope: xc,
                $q: tc,
                $$q: uc,
                $sce: Cc,
                $sceDelegate: Bc,
                $sniffer: Dc,
                $templateCache: mb,
                $templateRequest: Ec,
                $$testability: Fc,
                $timeout: Gc,
                $window: Jc,
                $$rAF: wc,
                $$jqLite: Ya,
                $$HashMap: De,
                $$cookieReader: Lc
            })
        }])
    }

    function ua() {
        return ++me
    }

    function va(a) {
        return a.replace(pe, function (a, b, c, d) {
            return d ? c.toUpperCase() : c
        }).replace(qe, "Moz$1")
    }

    function wa(a) {
        return !ue.test(a)
    }

    function xa(a) {
        var b = a.nodeType;
        return b === ee || !b || b === ie
    }

    function ya(a) {
        for (var b in le[a.ng339])return !0;
        return !1
    }

    function za(a) {
        for (var b = 0, c = a.length; b < c; b++)Ha(a[b])
    }

    function Aa(a, b) {
        var c, e, f, g, h = b.createDocumentFragment(), i = [];
        if (wa(a)) i.push(b.createTextNode(a)); else {
            for (c = c || h.appendChild(b.createElement("div")), e = (ve.exec(a) || ["", ""])[1].toLowerCase(), f = xe[e] || xe._default, c.innerHTML = f[1] + a.replace(we, "<$1></$2>") + f[2], g = f[0]; g--;)c = c.lastChild;
            i = P(i, c.childNodes), c = h.firstChild, c.textContent = ""
        }
        return h.textContent = "", h.innerHTML = "", d(i, function (a) {
            h.appendChild(a)
        }), h
    }

    function Ba(b, c) {
        c = c || a.document;
        var d;
        return (d = te.exec(b)) ? [c.createElement(d[1])] : (d = Aa(b, c)) ? d.childNodes : []
    }

    function Ca(a, b) {
        var c = a.parentNode;
        c && c.replaceChild(b, a), b.appendChild(a)
    }

    function Da(a) {
        if (a instanceof Da)return a;
        var b;
        if (v(a) && (a = Yd(a), b = !0), !(this instanceof Da)) {
            if (b && "<" != a.charAt(0))throw se("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new Da(a)
        }
        b ? Na(this, Ba(a)) : Na(this, a)
    }

    function Ea(a) {
        return a.cloneNode(!0)
    }

    function Fa(a, b) {
        if (b || Ha(a), a.querySelectorAll)for (var c = a.querySelectorAll("*"), d = 0, e = c.length; d < e; d++)Ha(c[d])
    }

    function Ga(a, b, c, e) {
        if (s(e))throw se("offargs", "jqLite#off() does not support the `selector` argument");
        var f = Ia(a), g = f && f.events, h = f && f.handle;
        if (h)if (b) {
            var i = function (b) {
                var d = g[b];
                s(c) && M(d || [], c), s(c) && d && d.length > 0 || (oe(a, b, h), delete g[b])
            };
            d(b.split(" "), function (a) {
                i(a), re[a] && i(re[a])
            })
        } else for (b in g)"$destroy" !== b && oe(a, b, h), delete g[b]
    }

    function Ha(a, b) {
        var c = a.ng339, d = c && le[c];
        if (d) {
            if (b)return void delete d.data[b];
            d.handle && (d.events.$destroy && d.handle({}, "$destroy"), Ga(a)), delete le[c], a.ng339 = void 0
        }
    }

    function Ia(a, b) {
        var c = a.ng339, d = c && le[c];
        return b && !d && (a.ng339 = c = ua(), d = le[c] = {events: {}, data: {}, handle: void 0}), d
    }

    function Ja(a, b, c) {
        if (xa(a)) {
            var d = s(c), e = !d && b && !t(b), f = !b, g = Ia(a, !e), h = g && g.data;
            if (d) h[b] = c; else {
                if (f)return h;
                if (e)return h && h[b];
                j(h, b)
            }
        }
    }

    function Ka(a, b) {
        return !!a.getAttribute && (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1
    }

    function La(a, b) {
        b && a.setAttribute && d(b.split(" "), function (b) {
            a.setAttribute("class", Yd((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Yd(b) + " ", " ")))
        })
    }

    function Ma(a, b) {
        if (b && a.setAttribute) {
            var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            d(b.split(" "), function (a) {
                a = Yd(a), c.indexOf(" " + a + " ") === -1 && (c += a + " ")
            }), a.setAttribute("class", Yd(c))
        }
    }

    function Na(a, b) {
        if (b)if (b.nodeType) a[a.length++] = b; else {
            var c = b.length;
            if ("number" == typeof c && b.window !== b) {
                if (c)for (var d = 0; d < c; d++)a[a.length++] = b[d]
            } else a[a.length++] = b
        }
    }

    function Oa(a, b) {
        return Pa(a, "$" + (b || "ngController") + "Controller")
    }

    function Pa(a, b, c) {
        a.nodeType == ie && (a = a.documentElement);
        for (var d = Wd(b) ? b : [b]; a;) {
            for (var e = 0, f = d.length; e < f; e++)if (s(c = Ld.data(a, d[e])))return c;
            a = a.parentNode || a.nodeType === je && a.host
        }
    }

    function Qa(a) {
        for (Fa(a, !0); a.firstChild;)a.removeChild(a.firstChild)
    }

    function Ra(a, b) {
        b || Fa(a);
        var c = a.parentNode;
        c && c.removeChild(a)
    }

    function Sa(b, c) {
        c = c || a, "complete" === c.document.readyState ? c.setTimeout(b) : Ld(c).on("load", b)
    }

    function Ta(a, b) {
        var c = Ae[b.toLowerCase()];
        return c && Be[L(a)] && c
    }

    function Ua(a) {
        return Ce[a]
    }

    function Va(a, b) {
        var c = function (c, d) {
            c.isDefaultPrevented = function () {
                return c.defaultPrevented
            };
            var e = b[d || c.type], f = e ? e.length : 0;
            if (f) {
                if (r(c.immediatePropagationStopped)) {
                    var g = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function () {
                        c.immediatePropagationStopped = !0, c.stopPropagation && c.stopPropagation(), g && g.call(c)
                    }
                }
                c.isImmediatePropagationStopped = function () {
                    return c.immediatePropagationStopped === !0
                };
                var h = e.specialHandlerWrapper || Wa;
                f > 1 && (e = qa(e));
                for (var i = 0; i < f; i++)c.isImmediatePropagationStopped() || h(a, c, e[i])
            }
        };
        return c.elem = a, c
    }

    function Wa(a, b, c) {
        c.call(a, b)
    }

    function Xa(a, b, c) {
        var d = b.relatedTarget;
        d && (d === a || ye.call(a, d)) || c.call(a, b)
    }

    function Ya() {
        this.$get = function () {
            return j(Da, {
                hasClass: function (a, b) {
                    return a.attr && (a = a[0]), Ka(a, b)
                }, addClass: function (a, b) {
                    return a.attr && (a = a[0]), Ma(a, b)
                }, removeClass: function (a, b) {
                    return a.attr && (a = a[0]), La(a, b)
                }
            })
        }
    }

    function Za(a, b) {
        var c = a && a.$$hashKey;
        if (c)return "function" == typeof c && (c = a.$$hashKey()), c;
        var d = typeof a;
        return c = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || g)() : d + ":" + a
    }

    function $a(a, b) {
        if (b) {
            var c = 0;
            this.nextUid = function () {
                return ++c
            }
        }
        d(a, this.put, this)
    }

    function _a(a) {
        return Function.prototype.toString.call(a) + " "
    }

    function ab(a) {
        var b = _a(a).replace(Ie, ""), c = b.match(Ee) || b.match(Fe);
        return c
    }

    function bb(a) {
        var b = ab(a);
        return b ? "function(" + (b[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function cb(a, b, c) {
        var e, f, g;
        if ("function" == typeof a) {
            if (!(e = a.$inject)) {
                if (e = [], a.length) {
                    if (b)throw v(c) && c || (c = a.name || bb(a)), Je("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", c);
                    f = ab(a), d(f[1].split(Ge), function (a) {
                        a.replace(He, function (a, b, c) {
                            e.push(c)
                        })
                    })
                }
                a.$inject = e
            }
        } else Wd(a) ? (g = a.length - 1, ka(a[g], "fn"), e = a.slice(0, g)) : ka(a, "fn", !0);
        return e
    }

    function db(a, b) {
        function c(a) {
            return function (b, c) {
                return t(b) ? void d(b, f(a)) : a(b, c)
            }
        }

        function e(a, b) {
            if (la(a, "service"), (y(b) || Wd(b)) && (b = x.instantiate(b)), !b.$get)throw Je("pget", "Provider '{0}' must define $get factory method.", a);
            return w[a + q] = b
        }

        function g(a, b) {
            return function () {
                var c = B.invoke(b, this);
                if (r(c))throw Je("undef", "Provider '{0}' must return a value from $get factory method.", a);
                return c
            }
        }

        function h(a, b, c) {
            return e(a, {$get: c !== !1 ? g(a, b) : b})
        }

        function i(a, b) {
            return h(a, ["$injector", function (a) {
                return a.instantiate(b)
            }])
        }

        function j(a, b) {
            return h(a, p(b), !1)
        }

        function k(a, b) {
            la(a, "constant"), w[a] = b, z[a] = b
        }

        function l(a, b) {
            var c = x.get(a + q), d = c.$get;
            c.$get = function () {
                var a = B.invoke(d, c);
                return B.invoke(b, null, {$delegate: a})
            }
        }

        function m(a) {
            ja(r(a) || Wd(a), "modulesToLoad", "not an array");
            var b, c = [];
            return d(a, function (a) {
                function d(a) {
                    var b, c;
                    for (b = 0, c = a.length; b < c; b++) {
                        var d = a[b], e = x.get(d[0]);
                        e[d[1]].apply(e, d[2])
                    }
                }

                if (!u.get(a)) {
                    u.put(a, !0);
                    try {
                        v(a) ? (b = Nd(a), c = c.concat(m(b.requires)).concat(b._runBlocks), d(b._invokeQueue), d(b._configBlocks)) : y(a) ? c.push(x.invoke(a)) : Wd(a) ? c.push(x.invoke(a)) : ka(a, "module")
                    } catch (b) {
                        throw Wd(a) && (a = a[a.length - 1]), b.message && b.stack && b.stack.indexOf(b.message) == -1 && (b = b.message + "\n" + b.stack), Je("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, b.stack || b.message || b)
                    }
                }
            }), c
        }

        function n(a, c) {
            function d(b, d) {
                if (a.hasOwnProperty(b)) {
                    if (a[b] === o)throw Je("cdep", "Circular dependency found: {0}", b + " <- " + s.join(" <- "));
                    return a[b]
                }
                try {
                    return s.unshift(b), a[b] = o, a[b] = c(b, d)
                } catch (c) {
                    throw a[b] === o && delete a[b], c
                } finally {
                    s.shift()
                }
            }

            function e(a, c, e) {
                for (var f = [], g = db.$$annotate(a, b, e), h = 0, i = g.length; h < i; h++) {
                    var j = g[h];
                    if ("string" != typeof j)throw Je("itkn", "Incorrect injection token! Expected service name as string, got {0}", j);
                    f.push(c && c.hasOwnProperty(j) ? c[j] : d(j, e))
                }
                return f
            }

            function f(a) {
                return !(Kd <= 11) && ("function" == typeof a && /^(?:class\s|constructor\()/.test(_a(a)))
            }

            function g(a, b, c, d) {
                "string" == typeof c && (d = c, c = null);
                var g = e(a, c, d);
                return Wd(a) && (a = a[a.length - 1]), f(a) ? (g.unshift(null), new (Function.prototype.bind.apply(a, g))) : a.apply(b, g)
            }

            function h(a, b, c) {
                var d = Wd(a) ? a[a.length - 1] : a, f = e(a, b, c);
                return f.unshift(null), new (Function.prototype.bind.apply(d, f))
            }

            return {
                invoke: g, instantiate: h, get: d, annotate: db.$$annotate, has: function (b) {
                    return w.hasOwnProperty(b + q) || a.hasOwnProperty(b)
                }
            }
        }

        b = b === !0;
        var o = {}, q = "Provider", s = [], u = new $a([], (!0)),
            w = {$provide: {provider: c(e), factory: c(h), service: c(i), value: c(j), constant: c(k), decorator: l}},
            x = w.$injector = n(w, function (a, b) {
                throw Ud.isString(b) && s.push(b), Je("unpr", "Unknown provider: {0}", s.join(" <- "))
            }), z = {}, A = n(z, function (a, b) {
                var c = x.get(a + q, b);
                return B.invoke(c.$get, c, void 0, a)
            }), B = A;
        w["$injector" + q] = {$get: p(A)};
        var C = m(a);
        return B = A.get("$injector"), B.strictDi = b, d(C, function (a) {
            a && B.invoke(a)
        }), B
    }

    function eb() {
        var a = !0;
        this.disableAutoScrolling = function () {
            a = !1
        }, this.$get = ["$window", "$location", "$rootScope", function (b, c, d) {
            function e(a) {
                var b = null;
                return Array.prototype.some.call(a, function (a) {
                    if ("a" === L(a))return b = a, !0
                }), b
            }

            function f() {
                var a = h.yOffset;
                if (y(a)) a = a(); else if (J(a)) {
                    var c = a[0], d = b.getComputedStyle(c);
                    a = "fixed" !== d.position ? 0 : c.getBoundingClientRect().bottom
                } else w(a) || (a = 0);
                return a
            }

            function g(a) {
                if (a) {
                    a.scrollIntoView();
                    var c = f();
                    if (c) {
                        var d = a.getBoundingClientRect().top;
                        b.scrollBy(0, d - c)
                    }
                } else b.scrollTo(0, 0)
            }

            function h(a) {
                a = v(a) ? a : c.hash();
                var b;
                a ? (b = i.getElementById(a)) ? g(b) : (b = e(i.getElementsByName(a))) ? g(b) : "top" === a && g(null) : g(null)
            }

            var i = b.document;
            return a && d.$watch(function () {
                return c.hash()
            }, function (a, b) {
                a === b && "" === a || Sa(function () {
                    d.$evalAsync(h)
                })
            }), h
        }]
    }

    function fb(a, b) {
        return a || b ? a ? b ? (Wd(a) && (a = a.join(" ")), Wd(b) && (b = b.join(" ")), a + " " + b) : a : b : ""
    }

    function gb(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (c.nodeType === Le)return c
        }
    }

    function hb(a) {
        v(a) && (a = a.split(" "));
        var b = oa();
        return d(a, function (a) {
            a.length && (b[a] = !0)
        }), b
    }

    function ib(a) {
        return t(a) ? a : {}
    }

    function jb(a, b, c, e) {
        function f(a) {
            try {
                a.apply(null, Q(arguments, 1))
            } finally {
                if (s--, 0 === s)for (; t.length;)try {
                    t.pop()()
                } catch (a) {
                    c.error(a)
                }
            }
        }

        function g(a) {
            var b = a.indexOf("#");
            return b === -1 ? "" : a.substr(b)
        }

        function h() {
            y = null, i(), j()
        }

        function i() {
            u = z(), u = r(u) ? null : u, O(u, C) && (u = C), C = u
        }

        function j() {
            w === k.url() && v === u || (w = k.url(), v = u, d(A, function (a) {
                a(k.url(), u)
            }))
        }

        var k = this, l = a.location, m = a.history, o = a.setTimeout, p = a.clearTimeout, q = {};
        k.isMock = !1;
        var s = 0, t = [];
        k.$$completeOutstandingRequest = f, k.$$incOutstandingRequestCount = function () {
            s++
        }, k.notifyWhenNoOutstandingRequests = function (a) {
            0 === s ? a() : t.push(a)
        };
        var u, v, w = l.href, x = b.find("base"), y = null, z = e.history ? function () {
            try {
                return m.state
            } catch (a) {
            }
        } : n;
        i(), v = u, k.url = function (b, c, d) {
            if (r(d) && (d = null), l !== a.location && (l = a.location), m !== a.history && (m = a.history), b) {
                var f = v === d;
                if (w === b && (!e.history || f))return k;
                var h = w && Rb(w) === Rb(b);
                return w = b, v = d, !e.history || h && f ? (h || (y = b), c ? l.replace(b) : h ? l.hash = g(b) : l.href = b, l.href !== b && (y = b)) : (m[c ? "replaceState" : "pushState"](d, "", b), i(), v = u), y && (y = b), k
            }
            return y || l.href.replace(/%27/g, "'")
        }, k.state = function () {
            return u
        };
        var A = [], B = !1, C = null;
        k.onUrlChange = function (b) {
            return B || (e.history && Ld(a).on("popstate", h), Ld(a).on("hashchange", h), B = !0), A.push(b), b
        }, k.$$applicationDestroyed = function () {
            Ld(a).off("hashchange popstate", h)
        }, k.$$checkUrlChange = j, k.baseHref = function () {
            var a = x.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        }, k.defer = function (a, b) {
            var c;
            return s++, c = o(function () {
                delete q[c], f(a)
            }, b || 0), q[c] = !0, c
        }, k.defer.cancel = function (a) {
            return !!q[a] && (delete q[a], p(a), f(n), !0)
        }
    }

    function kb() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, c, d) {
            return new jb(a, d, b, c)
        }]
    }

    function lb() {
        this.$get = function () {
            function a(a, d) {
                function e(a) {
                    a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null)
                }

                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }

                if (a in c)throw b("$cacheFactory")("iid", "CacheId '{0}' is already taken!", a);
                var g = 0, h = j({}, d, {id: a}), i = oa(), k = d && d.capacity || Number.MAX_VALUE, l = oa(), m = null,
                    n = null;
                return c[a] = {
                    put: function (a, b) {
                        if (!r(b)) {
                            if (k < Number.MAX_VALUE) {
                                var c = l[a] || (l[a] = {key: a});
                                e(c)
                            }
                            return a in i || g++, i[a] = b, g > k && this.remove(n.key), b
                        }
                    }, get: function (a) {
                        if (k < Number.MAX_VALUE) {
                            var b = l[a];
                            if (!b)return;
                            e(b)
                        }
                        return i[a]
                    }, remove: function (a) {
                        if (k < Number.MAX_VALUE) {
                            var b = l[a];
                            if (!b)return;
                            b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete l[a]
                        }
                        a in i && (delete i[a], g--)
                    }, removeAll: function () {
                        i = oa(), g = 0, l = oa(), m = n = null
                    }, destroy: function () {
                        i = null, h = null, l = null, delete c[a]
                    }, info: function () {
                        return j({}, h, {size: g})
                    }
                }
            }

            var c = {};
            return a.info = function () {
                var a = {};
                return d(c, function (b, c) {
                    a[c] = b.info()
                }), a
            }, a.get = function (a) {
                return c[a]
            }, a
        }
    }

    function mb() {
        this.$get = ["$cacheFactory", function (a) {
            return a("templates")
        }]
    }

    function nb() {
    }

    function ob(b, c) {
        function e(a, b, c) {
            var e = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/, f = oa();
            return d(a, function (a, d) {
                if (a in A)return void(f[d] = A[a]);
                var g = a.match(e);
                if (!g)throw Te("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", b, d, a, c ? "controller bindings definition" : "isolate scope definition");
                f[d] = {
                    mode: g[1][0],
                    collection: "*" === g[2],
                    optional: "?" === g[3],
                    attrName: g[4] || d
                }, g[4] && (A[a] = f[d])
            }), f
        }

        function g(a, b) {
            var c = {isolateScope: null, bindToController: null};
            if (t(a.scope) && (a.bindToController === !0 ? (c.bindToController = e(a.scope, b, !0), c.isolateScope = {}) : c.isolateScope = e(a.scope, b, !1)), t(a.bindToController) && (c.bindToController = e(a.bindToController, b, !0)), t(c.bindToController)) {
                var d = a.controller, f = a.controllerAs;
                if (!d)throw Te("noctrl", "Cannot bind to controller without directive '{0}'s controller.", b);
                if (!tb(d, f))throw Te("noident", "Cannot bind to controller without identifier for directive '{0}'.", b)
            }
            return c
        }

        function h(a) {
            var b = a.charAt(0);
            if (!b || b !== Gd(b))throw Te("baddir", "Directive/Component name '{0}' is invalid. The first character must be a lowercase letter", a);
            if (a !== a.trim())throw Te("baddir", "Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces", a)
        }

        function i(a) {
            var b = a.require || a.controller && a.name;
            return !Wd(b) && t(b) && d(b, function (a, c) {
                var d = a.match(x), e = a.substring(d[0].length);
                e || (b[c] = d[0] + c)
            }), b
        }

        var k = {}, l = "Directive", q = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, u = /(([\w\-]+)(?:\:([^;]+))?;?)/,
            w = K("ngSrc,ngSrcset,src,srcset"), x = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, z = /^(on[a-z]+|formaction)$/,
            A = oa();
        this.directive = function a(c, e) {
            return la(c, "directive"), v(c) ? (h(c), ja(e, "directiveFactory"), k.hasOwnProperty(c) || (k[c] = [], b.factory(c + l, ["$injector", "$exceptionHandler", function (a, b) {
                var e = [];
                return d(k[c], function (d, f) {
                    try {
                        var g = a.invoke(d);
                        y(g) ? g = {compile: p(g)} : !g.compile && g.link && (g.compile = p(g.link)), g.priority = g.priority || 0, g.index = f, g.name = g.name || c, g.require = i(g), g.restrict = g.restrict || "EA", g.$$moduleName = d.$$moduleName, e.push(g)
                    } catch (a) {
                        b(a)
                    }
                }), e
            }])), k[c].push(e)) : d(c, f(a)), this
        }, this.component = function (a, b) {
            function c(a) {
                function c(b) {
                    return y(b) || Wd(b) ? function (c, d) {
                        return a.invoke(b, this, {$element: c, $attrs: d})
                    } : b
                }

                var f = b.template || b.templateUrl ? b.template : "", g = {
                    controller: e,
                    controllerAs: tb(b.controller) || b.controllerAs || "$ctrl",
                    template: c(f),
                    templateUrl: c(b.templateUrl),
                    transclude: b.transclude,
                    scope: {},
                    bindToController: b.bindings || {},
                    restrict: "E",
                    require: b.require
                };
                return d(b, function (a, b) {
                    "$" === b.charAt(0) && (g[b] = a)
                }), g
            }

            var e = b.controller || function () {
                };
            return d(b, function (a, b) {
                "$" === b.charAt(0) && (c[b] = a, y(e) && (e[b] = a))
            }), c.$inject = ["$injector"], this.directive(a, c)
        }, this.aHrefSanitizationWhitelist = function (a) {
            return s(a) ? (c.aHrefSanitizationWhitelist(a), this) : c.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function (a) {
            return s(a) ? (c.imgSrcSanitizationWhitelist(a), this) : c.imgSrcSanitizationWhitelist()
        };
        var C = !0;
        this.debugInfoEnabled = function (a) {
            return s(a) ? (C = a, this) : C
        };
        var D = 10;
        this.onChangesTtl = function (a) {
            return arguments.length ? (D = a, this) : D
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (b, c, e, f, h, i, p, A, E, G) {
            function H() {
                try {
                    if (!--va)throw sa = void 0, Te("infchng", "{0} $onChanges() iterations reached. Aborting!\n", D);
                    p.$apply(function () {
                        for (var a = [], b = 0, c = sa.length; b < c; ++b)try {
                            sa[b]()
                        } catch (b) {
                            a.push(b)
                        }
                        if (sa = void 0, a.length)throw a
                    })
                } finally {
                    va++
                }
            }

            function I(a, b) {
                if (b) {
                    var c, d, e, f = Object.keys(b);
                    for (c = 0, d = f.length; c < d; c++)e = f[c], this[e] = b[e]
                } else this.$attr = {};
                this.$$element = a
            }

            function J(a, b, c) {
                ua.innerHTML = "<span " + b + ">";
                var d = ua.firstChild.attributes, e = d[0];
                d.removeNamedItem(e.name), e.value = c, a.attributes.setNamedItem(e)
            }

            function K(a, b) {
                try {
                    a.addClass(b)
                } catch (a) {
                }
            }

            function N(b, c, d, e, f) {
                b instanceof Ld || (b = Ld(b));
                for (var g = /\S+/, h = 0, i = b.length; h < i; h++) {
                    var j = b[h];
                    j.nodeType === ge && j.nodeValue.match(g) && Ca(j, b[h] = a.document.createElement("span"))
                }
                var k = S(b, c, b, d, e, f);
                N.$$addScopeClass(b);
                var l = null;
                return function (a, c, d) {
                    ja(a, "scope"), f && f.needsNewScope && (a = a.$parent.$new()), d = d || {};
                    var e = d.parentBoundTranscludeFn, g = d.transcludeControllers, h = d.futureParentElement;
                    e && e.$$boundTransclude && (e = e.$$boundTransclude), l || (l = P(h));
                    var i;
                    if (i = "html" !== l ? Ld(ka(l, Ld("<div>").append(b).html())) : c ? ze.clone.call(b) : b, g)for (var j in g)i.data("$" + j + "Controller", g[j].instance);
                    return N.$$addScopeInfo(i, a), c && c(i, a), k && k(a, i, i, e), i
                }
            }

            function P(a) {
                var b = a && a[0];
                return b && "foreignobject" !== L(b) && Rd.call(b).match(/SVG/) ? "svg" : "html"
            }

            function S(a, b, c, d, e, f) {
                function g(a, c, d, e) {
                    var f, g, h, i, j, k, l, m, p;
                    if (n) {
                        var q = c.length;
                        for (p = new Array(q), j = 0; j < o.length; j += 3)l = o[j], p[l] = c[l]
                    } else p = c;
                    for (j = 0, k = o.length; j < k;)h = p[o[j++]], f = o[j++], g = o[j++], f ? (f.scope ? (i = a.$new(), N.$$addScopeInfo(Ld(h), i)) : i = a, m = f.transcludeOnThisElement ? T(a, f.transclude, e) : !f.templateOnThisElement && e ? e : !e && b ? T(a, b) : null, f(g, i, h, d, m)) : g && g(a, h.childNodes, void 0, e)
                }

                for (var h, i, j, k, l, m, n, o = [], p = 0; p < a.length; p++)h = new I, i = U(a[p], [], h, 0 === p ? d : void 0, e), j = i.length ? Z(i, a[p], h, b, c, null, [], [], f) : null, j && j.scope && N.$$addScopeClass(h.$$element), l = j && j.terminal || !(k = a[p].childNodes) || !k.length ? null : S(k, j ? (j.transcludeOnThisElement || !j.templateOnThisElement) && j.transclude : b), (j || l) && (o.push(p, j, l), m = !0, n = n || j), f = null;
                return m ? g : null
            }

            function T(a, b, c) {
                function d(d, e, f, g, h) {
                    return d || (d = a.$new(!1, h), d.$$transcluded = !0), b(d, e, {
                        parentBoundTranscludeFn: c,
                        transcludeControllers: f,
                        futureParentElement: g
                    })
                }

                var e = d.$$slots = oa();
                for (var f in b.$$slots)b.$$slots[f] ? e[f] = T(a, b.$$slots[f], c) : e[f] = null;
                return d
            }

            function U(a, b, c, d, e) {
                var f, g, h = a.nodeType, i = c.$attr;
                switch (h) {
                    case ee:
                        ba(b, qb(L(a)), "E", d, e);
                        for (var j, k, l, m, n, o, p = a.attributes, r = 0, s = p && p.length; r < s; r++) {
                            var w = !1, x = !1;
                            j = p[r], k = j.name, n = Yd(j.value), m = qb(k), (o = Aa.test(m)) && (k = k.replace(Ve, "").substr(8).replace(/_(.)/g, function (a, b) {
                                return b.toUpperCase()
                            }));
                            var y = m.match(Ba);
                            y && ca(y[1]) && (w = k, x = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6)), l = qb(k.toLowerCase()), i[l] = k, !o && c.hasOwnProperty(l) || (c[l] = n, Ta(a, l) && (c[l] = !0)), ma(a, b, n, l, o), ba(b, l, "A", d, e, w, x)
                        }
                        if (g = a.className, t(g) && (g = g.animVal), v(g) && "" !== g)for (; f = u.exec(g);)l = qb(f[2]), ba(b, l, "C", d, e) && (c[l] = Yd(f[3])), g = g.substr(f.index + f[0].length);
                        break;
                    case ge:
                        if (11 === Kd)for (; a.parentNode && a.nextSibling && a.nextSibling.nodeType === ge;)a.nodeValue = a.nodeValue + a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
                        ia(b, a.nodeValue);
                        break;
                    case he:
                        try {
                            f = q.exec(a.nodeValue), f && (l = qb(f[1]), ba(b, l, "M", d, e) && (c[l] = Yd(f[2])))
                        } catch (a) {
                        }
                }
                return b.sort(fa), b
            }

            function V(a, b, c) {
                var d = [], e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a)throw Te("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
                        a.nodeType == ee && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), a = a.nextSibling
                    } while (e > 0)
                } else d.push(a);
                return Ld(d)
            }

            function W(a, b, c) {
                return function (d, e, f, g, h) {
                    return e = V(e[0], b, c), a(d, e, f, g, h)
                }
            }

            function X(a, b, c, d, e, f) {
                var g;
                return a ? N(b, c, d, e, f) : function () {
                    return g || (g = N(b, c, d, e, f), b = c = f = null), g.apply(this, arguments)
                }
            }

            function Z(a, b, c, f, g, h, i, k, l) {
                function m(a, b, c, d) {
                    a && (c && (a = W(a, c, d)), a.require = o.require, a.directiveName = p, (z === o || o.$$isolateScope) && (a = pa(a, {isolateScope: !0})), i.push(a)), b && (c && (b = W(b, c, d)), b.require = o.require, b.directiveName = p, (z === o || o.$$isolateScope) && (b = pa(b, {isolateScope: !0})), k.push(b))
                }

                function n(a, f, g, h, l) {
                    function m(a, b, c, d) {
                        var e;
                        if (B(a) || (d = c, c = b, b = a, a = void 0), F && (e = u), c || (c = F ? C.parent() : C), !d)return l(a, b, e, c, M);
                        var f = l.$$slots[d];
                        if (f)return f(a, b, e, c, M);
                        if (r(f))throw Te("noslot", 'No parent directive that requires a transclusion with slot name "{0}". Element: {1}', d, Y(C))
                    }

                    var n, o, p, q, s, u, v, C, D, E;
                    b === g ? (D = c, C = c.$$element) : (C = Ld(g), D = new I(C, c)), s = f, z ? q = f.$new(!0) : w && (s = f.$parent), l && (v = m, v.$$boundTransclude = l, v.isSlotFilled = function (a) {
                        return !!l.$$slots[a]
                    }), x && (u = _(C, D, v, x, q, f, z)), z && (N.$$addScopeInfo(C, q, !0, !(A && (A === z || A === z.$$originalDirective))), N.$$addScopeClass(C, !0), q.$$isolateBindings = z.$$isolateBindings, E = ra(f, D, q, q.$$isolateBindings, z), E.removeWatches && q.$on("$destroy", E.removeWatches));
                    for (var G in u) {
                        var H = x[G], J = u[G], K = H.$$bindings.bindToController;
                        J.identifier && K ? J.bindingInfo = ra(s, D, J.instance, K, H) : J.bindingInfo = {};
                        var L = J();
                        L !== J.instance && (J.instance = L, C.data("$" + H.name + "Controller", L), J.bindingInfo.removeWatches && J.bindingInfo.removeWatches(), J.bindingInfo = ra(s, D, J.instance, K, H))
                    }
                    for (d(x, function (a, b) {
                        var c = a.require;
                        a.bindToController && !Wd(c) && t(c) && j(u[b].instance, $(b, c, C, u))
                    }), d(u, function (a) {
                        var b = a.instance;
                        if (y(b.$onChanges))try {
                            b.$onChanges(a.bindingInfo.initialChanges)
                        } catch (a) {
                            e(a)
                        }
                        if (y(b.$onInit))try {
                            b.$onInit()
                        } catch (a) {
                            e(a)
                        }
                        y(b.$onDestroy) && s.$on("$destroy", function () {
                            b.$onDestroy()
                        })
                    }), n = 0, o = i.length; n < o; n++)p = i[n], qa(p, p.isolateScope ? q : f, C, D, p.require && $(p.directiveName, p.require, C, u), v);
                    var M = f;
                    for (z && (z.template || null === z.templateUrl) && (M = q), a && a(M, g.childNodes, void 0, l), n = k.length - 1; n >= 0; n--)p = k[n], qa(p, p.isolateScope ? q : f, C, D, p.require && $(p.directiveName, p.require, C, u), v);
                    d(u, function (a) {
                        var b = a.instance;
                        y(b.$postLink) && b.$postLink()
                    })
                }

                l = l || {};
                for (var o, p, q, s, u, v = -Number.MAX_VALUE, w = l.newScopeDirective, x = l.controllerDirectives, z = l.newIsolateScopeDirective, A = l.templateDirective, C = l.nonTlbTranscludeDirective, D = !1, E = !1, F = l.hasElementTranscludeDirective, G = c.$$element = Ld(b), H = h, J = f, K = !1, M = !1, O = 0, P = a.length; O < P; O++) {
                    o = a[O];
                    var S = o.$$start, T = o.$$end;
                    if (S && (G = V(b, S, T)), q = void 0, v > o.priority)break;
                    if ((u = o.scope) && (o.templateUrl || (t(u) ? (ga("new/isolated scope", z || w, o, G), z = o) : ga("new/isolated scope", z, o, G)), w = w || o), p = o.name, !K && (o.replace && (o.templateUrl || o.template) || o.transclude && !o.$$tlb)) {
                        for (var Z, ba = O + 1; Z = a[ba++];)if (Z.transclude && !Z.$$tlb || Z.replace && (Z.templateUrl || Z.template)) {
                            M = !0;
                            break
                        }
                        K = !0
                    }
                    if (!o.templateUrl && o.controller && (u = o.controller, x = x || oa(), ga("'" + p + "' controller", x[p], o, G), x[p] = o), u = o.transclude)if (D = !0, o.$$tlb || (ga("transclusion", C, o, G), C = o), "element" == u) F = !0, v = o.priority, q = G, G = c.$$element = Ld(N.$$createComment(p, c[p])), b = G[0], na(g, Q(q), b), q[0].$$parentNode = q[0].parentNode, J = X(M, q, f, v, H && H.name, {nonTlbTranscludeDirective: C}); else {
                        var ca = oa();
                        if (q = Ld(Ea(b)).contents(), t(u)) {
                            q = [];
                            var fa = oa(), ha = oa();
                            d(u, function (a, b) {
                                var c = "?" === a.charAt(0);
                                a = c ? a.substring(1) : a, fa[a] = b, ca[b] = null, ha[b] = c
                            }), d(G.contents(), function (a) {
                                var b = fa[qb(L(a))];
                                b ? (ha[b] = !0, ca[b] = ca[b] || [], ca[b].push(a)) : q.push(a)
                            }), d(ha, function (a, b) {
                                if (!a)throw Te("reqslot", "Required transclusion slot `{0}` was not filled.", b)
                            });
                            for (var ia in ca)ca[ia] && (ca[ia] = X(M, ca[ia], f))
                        }
                        G.empty(), J = X(M, q, f, void 0, void 0, {needsNewScope: o.$$isolateScope || o.$$newScope}), J.$$slots = ca
                    }
                    if (o.template)if (E = !0, ga("template", A, o, G), A = o, u = y(o.template) ? o.template(G, c) : o.template, u = za(u), o.replace) {
                        if (H = o, q = wa(u) ? [] : sb(ka(o.templateNamespace, Yd(u))), b = q[0], 1 != q.length || b.nodeType !== ee)throw Te("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", p, "");
                        na(g, G, b);
                        var ja = {$attr: {}}, la = U(b, [], ja), ma = a.splice(O + 1, a.length - (O + 1));
                        (z || w) && aa(la, z, w), a = a.concat(la).concat(ma), da(c, ja), P = a.length
                    } else G.html(u);
                    if (o.templateUrl) E = !0, ga("template", A, o, G), A = o, o.replace && (H = o), n = ea(a.splice(O, a.length - O), G, c, g, D && J, i, k, {
                        controllerDirectives: x,
                        newScopeDirective: w !== o && w,
                        newIsolateScopeDirective: z,
                        templateDirective: A,
                        nonTlbTranscludeDirective: C
                    }), P = a.length; else if (o.compile)try {
                        s = o.compile(G, c, J);
                        var sa = o.$$originalDirective || o;
                        y(s) ? m(null, R(sa, s), S, T) : s && m(R(sa, s.pre), R(sa, s.post), S, T)
                    } catch (a) {
                        e(a, Y(G))
                    }
                    o.terminal && (n.terminal = !0, v = Math.max(v, o.priority))
                }
                return n.scope = w && w.scope === !0, n.transcludeOnThisElement = D, n.templateOnThisElement = E, n.transclude = J, l.hasElementTranscludeDirective = F, n
            }

            function $(a, b, c, e) {
                var f;
                if (v(b)) {
                    var g = b.match(x), h = b.substring(g[0].length), i = g[1] || g[3], j = "?" === g[2];
                    if ("^^" === i ? c = c.parent() : (f = e && e[h], f = f && f.instance), !f) {
                        var k = "$" + h + "Controller";
                        f = i ? c.inheritedData(k) : c.data(k)
                    }
                    if (!f && !j)throw Te("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", h, a)
                } else if (Wd(b)) {
                    f = [];
                    for (var l = 0, m = b.length; l < m; l++)f[l] = $(a, b[l], c, e)
                } else t(b) && (f = {}, d(b, function (b, d) {
                    f[d] = $(a, b, c, e)
                }));
                return f || null
            }

            function _(a, b, c, d, e, f, g) {
                var h = oa();
                for (var j in d) {
                    var k = d[j],
                        l = {$scope: k === g || k.$$isolateScope ? e : f, $element: a, $attrs: b, $transclude: c},
                        m = k.controller;
                    "@" == m && (m = b[k.name]);
                    var n = i(m, l, !0, k.controllerAs);
                    h[k.name] = n, a.data("$" + k.name + "Controller", n.instance)
                }
                return h
            }

            function aa(a, b, c) {
                for (var d = 0, e = a.length; d < e; d++)a[d] = m(a[d], {$$isolateScope: b, $$newScope: c})
            }

            function ba(a, c, d, f, h, i, j) {
                if (c === h)return null;
                var n = null;
                if (k.hasOwnProperty(c))for (var o, p = b.get(c + l), q = 0, s = p.length; q < s; q++)try {
                    if (o = p[q], (r(f) || f > o.priority) && o.restrict.indexOf(d) != -1) {
                        if (i && (o = m(o, {$$start: i, $$end: j})), !o.$$bindings) {
                            var u = o.$$bindings = g(o, o.name);
                            t(u.isolateScope) && (o.$$isolateBindings = u.isolateScope)
                        }
                        a.push(o), n = o
                    }
                } catch (a) {
                    e(a)
                }
                return n
            }

            function ca(a) {
                if (k.hasOwnProperty(a))for (var c, d = b.get(a + l), e = 0, f = d.length; e < f; e++)if (c = d[e], c.multiElement)return !0;
                return !1
            }

            function da(a, b) {
                var c = b.$attr, e = a.$attr;
                a.$$element;
                d(a, function (d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                }), d(b, function (b, d) {
                    a.hasOwnProperty(d) || "$" === d.charAt(0) || (a[d] = b, "class" !== d && "style" !== d && (e[d] = c[d]))
                })
            }

            function ea(a, b, c, e, g, h, i, j) {
                var k, l, n = [], o = b[0], p = a.shift(),
                    q = m(p, {templateUrl: null, transclude: null, replace: null, $$originalDirective: p}),
                    r = y(p.templateUrl) ? p.templateUrl(b, c) : p.templateUrl, s = p.templateNamespace;
                return b.empty(), f(r).then(function (f) {
                    var m, u, v, w;
                    if (f = za(f), p.replace) {
                        if (v = wa(f) ? [] : sb(ka(s, Yd(f))), m = v[0], 1 != v.length || m.nodeType !== ee)throw Te("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", p.name, r);
                        u = {$attr: {}}, na(e, b, m);
                        var x = U(m, [], u);
                        t(p.scope) && aa(x, !0), a = x.concat(a), da(c, u)
                    } else m = o, b.html(f);
                    for (a.unshift(q), k = Z(a, m, c, g, b, p, h, i, j), d(e, function (a, c) {
                        a == m && (e[c] = b[0])
                    }), l = S(b[0].childNodes, g); n.length;) {
                        var y = n.shift(), z = n.shift(), A = n.shift(), B = n.shift(), C = b[0];
                        if (!y.$$destroyed) {
                            if (z !== o) {
                                var D = z.className;
                                j.hasElementTranscludeDirective && p.replace || (C = Ea(m)), na(A, Ld(z), C), K(Ld(C), D)
                            }
                            w = k.transcludeOnThisElement ? T(y, k.transclude, B) : B, k(l, y, C, e, w)
                        }
                    }
                    n = null
                }), function (a, b, c, d, e) {
                    var f = e;
                    b.$$destroyed || (n ? n.push(b, c, d, f) : (k.transcludeOnThisElement && (f = T(b, k.transclude, e)), k(l, b, c, d, f)))
                }
            }

            function fa(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
            }

            function ga(a, b, c, d) {
                function e(a) {
                    return a ? " (module: " + a + ")" : ""
                }

                if (b)throw Te("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, Y(d))
            }

            function ia(a, b) {
                var d = c(b, !0);
                d && a.push({
                    priority: 0, compile: function (a) {
                        var b = a.parent(), c = !!b.length;
                        return c && N.$$addBindingClass(b), function (a, b) {
                            var e = b.parent();
                            c || N.$$addBindingClass(e), N.$$addBindingInfo(e, d.expressions), a.$watch(d, function (a) {
                                b[0].nodeValue = a
                            })
                        }
                    }
                })
            }

            function ka(b, c) {
                switch (b = Gd(b || "html")) {
                    case"svg":
                    case"math":
                        var d = a.document.createElement("div");
                        return d.innerHTML = "<" + b + ">" + c + "</" + b + ">", d.childNodes[0].childNodes;
                    default:
                        return c
                }
            }

            function la(a, b) {
                if ("srcdoc" == b)return A.HTML;
                var c = L(a);
                return "xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b) ? A.RESOURCE_URL : void 0
            }

            function ma(a, b, d, e, f) {
                var g = la(a, e);
                f = w[e] || f;
                var h = c(d, !0, g, f);
                if (h) {
                    if ("multiple" === e && "select" === L(a))throw Te("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", Y(a));
                    b.push({
                        priority: 100, compile: function () {
                            return {
                                pre: function (a, b, i) {
                                    var j = i.$$observers || (i.$$observers = oa());
                                    if (z.test(e))throw Te("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                    var k = i[e];
                                    k !== d && (h = k && c(k, !0, g, f), d = k), h && (i[e] = h(a), (j[e] || (j[e] = [])).$$inter = !0, (i.$$observers && i.$$observers[e].$$scope || a).$watch(h, function (a, b) {
                                        "class" === e && a != b ? i.$updateClass(a, b) : i.$set(e, a)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function na(b, c, d) {
                var e, f, g = c[0], h = c.length, i = g.parentNode;
                if (b)for (e = 0, f = b.length; e < f; e++)if (b[e] == g) {
                    b[e++] = d;
                    for (var j = e, k = j + h - 1, l = b.length; j < l; j++, k++)k < l ? b[j] = b[k] : delete b[j];
                    b.length -= h - 1, b.context === g && (b.context = d);
                    break
                }
                i && i.replaceChild(d, g);
                var m = a.document.createDocumentFragment();
                for (e = 0; e < h; e++)m.appendChild(c[e]);
                for (Ld.hasData(g) && (Ld.data(d, Ld.data(g)), Ld(g).off("$destroy")), Ld.cleanData(m.querySelectorAll("*")), e = 1; e < h; e++)delete c[e];
                c[0] = d, c.length = 1
            }

            function pa(a, b) {
                return j(function () {
                    return a.apply(null, arguments)
                }, a, b)
            }

            function qa(a, b, c, d, f, g) {
                try {
                    a(b, c, d, f, g)
                } catch (a) {
                    e(a, Y(c))
                }
            }

            function ra(a, b, e, f, g) {
                function i(b, c, d) {
                    y(e.$onChanges) && c !== d && (sa || (a.$$postDigest(H), sa = []), k || (k = {}, sa.push(j)), k[b] && (d = k[b].previousValue), k[b] = new pb(d, c))
                }

                function j() {
                    e.$onChanges(k), k = void 0
                }

                var k, l = [], m = {};
                return d(f, function (d, f) {
                    var j, k, o, p, q, r = d.attrName, s = d.optional, t = d.mode;
                    switch (t) {
                        case"@":
                            s || Fd.call(b, r) || (e[f] = b[r] = void 0), b.$observe(r, function (a) {
                                if (v(a) || F(a)) {
                                    var b = e[f];
                                    i(f, a, b), e[f] = a
                                }
                            }), b.$$observers[r].$$scope = a, j = b[r], v(j) ? e[f] = c(j)(a) : F(j) && (e[f] = j), m[f] = new pb(Ue, e[f]);
                            break;
                        case"=":
                            if (!Fd.call(b, r)) {
                                if (s)break;
                                b[r] = void 0
                            }
                            if (s && !b[r])break;
                            k = h(b[r]), p = k.literal ? O : function (a, b) {
                                return a === b || a !== a && b !== b
                            }, o = k.assign || function () {
                                    throw j = e[f] = k(a), Te("nonassign", "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!", b[r], r, g.name)
                                }, j = e[f] = k(a);
                            var u = function (b) {
                                return p(b, e[f]) || (p(b, j) ? o(a, b = e[f]) : e[f] = b), j = b
                            };
                            u.$stateful = !0, q = d.collection ? a.$watchCollection(b[r], u) : a.$watch(h(b[r], u), null, k.literal), l.push(q);
                            break;
                        case"<":
                            if (!Fd.call(b, r)) {
                                if (s)break;
                                b[r] = void 0
                            }
                            if (s && !b[r])break;
                            k = h(b[r]);
                            var w = e[f] = k(a);
                            m[f] = new pb(Ue, e[f]), q = a.$watch(k, function (a, b) {
                                if (b === a) {
                                    if (b === w)return;
                                    b = w
                                }
                                i(f, a, b), e[f] = a
                            }, k.literal), l.push(q);
                            break;
                        case"&":
                            if (k = b.hasOwnProperty(r) ? h(b[r]) : n, k === n && s)break;
                            e[f] = function (b) {
                                return k(a, b)
                            }
                    }
                }), {
                    initialChanges: m, removeWatches: l.length && function () {
                        for (var a = 0, b = l.length; a < b; ++a)l[a]()
                    }
                }
            }

            var sa, ta = /^\w/, ua = a.document.createElement("div"), va = D;
            I.prototype = {
                $normalize: qb, $addClass: function (a) {
                    a && a.length > 0 && E.addClass(this.$$element, a)
                }, $removeClass: function (a) {
                    a && a.length > 0 && E.removeClass(this.$$element, a)
                }, $updateClass: function (a, b) {
                    var c = rb(a, b);
                    c && c.length && E.addClass(this.$$element, c);
                    var d = rb(b, a);
                    d && d.length && E.removeClass(this.$$element, d)
                }, $set: function (a, b, c, f) {
                    var g, h = this.$$element[0], i = Ta(h, a), j = Ua(a), k = a;
                    if (i ? (this.$$element.prop(a, b), f = i) : j && (this[j] = b, k = j), this[a] = b, f ? this.$attr[a] = f : (f = this.$attr[a], f || (this.$attr[a] = f = ha(a, "-"))), g = L(this.$$element), "a" === g && ("href" === a || "xlinkHref" === a) || "img" === g && "src" === a) this[a] = b = G(b, "src" === a); else if ("img" === g && "srcset" === a && s(b)) {
                        for (var l = "", m = Yd(b), n = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, o = /\s/.test(m) ? n : /(,)/, p = m.split(o), q = Math.floor(p.length / 2), t = 0; t < q; t++) {
                            var u = 2 * t;
                            l += G(Yd(p[u]), !0), l += " " + Yd(p[u + 1])
                        }
                        var v = Yd(p[2 * t]).split(/\s/);
                        l += G(Yd(v[0]), !0), 2 === v.length && (l += " " + Yd(v[1])), this[a] = b = l
                    }
                    c !== !1 && (null === b || r(b) ? this.$$element.removeAttr(f) : ta.test(f) ? this.$$element.attr(f, b) : J(this.$$element[0], f, b));
                    var w = this.$$observers;
                    w && d(w[k], function (a) {
                        try {
                            a(b)
                        } catch (a) {
                            e(a)
                        }
                    })
                }, $observe: function (a, b) {
                    var c = this, d = c.$$observers || (c.$$observers = oa()), e = d[a] || (d[a] = []);
                    return e.push(b), p.$evalAsync(function () {
                        e.$$inter || !c.hasOwnProperty(a) || r(c[a]) || b(c[a])
                    }), function () {
                        M(e, b)
                    }
                }
            };
            var xa = c.startSymbol(), ya = c.endSymbol(), za = "{{" == xa && "}}" == ya ? o : function (a) {
                return a.replace(/\{\{/g, xa).replace(/}}/g, ya)
            }, Aa = /^ngAttr[A-Z]/, Ba = /^(.+)Start$/;
            return N.$$addBindingInfo = C ? function (a, b) {
                var c = a.data("$binding") || [];
                Wd(b) ? c = c.concat(b) : c.push(b), a.data("$binding", c)
            } : n, N.$$addBindingClass = C ? function (a) {
                K(a, "ng-binding")
            } : n, N.$$addScopeInfo = C ? function (a, b, c, d) {
                var e = c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                a.data(e, b)
            } : n, N.$$addScopeClass = C ? function (a, b) {
                K(a, b ? "ng-isolate-scope" : "ng-scope")
            } : n, N.$$createComment = function (b, c) {
                var d = "";
                return C && (d = " " + (b || "") + ": ", c && (d += c + " ")), a.document.createComment(d)
            }, N
        }]
    }

    function pb(a, b) {
        this.previousValue = a, this.currentValue = b
    }

    function qb(a) {
        return va(a.replace(Ve, ""))
    }

    function rb(a, b) {
        var c = "", d = a.split(/\s+/), e = b.split(/\s+/);
        a:for (var f = 0; f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++)if (g == e[h])continue a;
            c += (c.length > 0 ? " " : "") + g
        }
        return c
    }

    function sb(a) {
        a = Ld(a);
        var b = a.length;
        if (b <= 1)return a;
        for (; b--;) {
            var c = a[b];
            c.nodeType === he && Pd.call(a, b, 1)
        }
        return a
    }

    function tb(a, b) {
        if (b && v(b))return b;
        if (v(a)) {
            var c = Xe.exec(a);
            if (c)return c[3]
        }
    }

    function ub() {
        var a = {}, c = !1;
        this.has = function (b) {
            return a.hasOwnProperty(b)
        }, this.register = function (b, c) {
            la(b, "controller"), t(b) ? j(a, b) : a[b] = c
        }, this.allowGlobals = function () {
            c = !0
        }, this.$get = ["$injector", "$window", function (d, e) {
            function f(a, c, d, e) {
                if (!a || !t(a.$scope))throw b("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", e, c);
                a.$scope[c] = d
            }

            return function (b, g, h, i) {
                var k, l, m, n;
                if (h = h === !0, i && v(i) && (n = i), v(b)) {
                    if (l = b.match(Xe), !l)throw We("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", b);
                    m = l[1], n = n || l[3], b = a.hasOwnProperty(m) ? a[m] : ma(g.$scope, m, !0) || (c ? ma(e, m, !0) : void 0), ka(b, m, !0)
                }
                if (h) {
                    var o = (Wd(b) ? b[b.length - 1] : b).prototype;
                    k = Object.create(o || null), n && f(g, n, k, m || b.name);
                    var p;
                    return p = j(function () {
                        var a = d.invoke(b, k, g, m);
                        return a !== k && (t(a) || y(a)) && (k = a, n && f(g, n, k, m || b.name)), k
                    }, {instance: k, identifier: n})
                }
                return k = d.instantiate(b, g, m), n && f(g, n, k, m || b.name), k
            }
        }]
    }

    function vb() {
        this.$get = ["$window", function (a) {
            return Ld(a.document)
        }]
    }

    function wb() {
        this.$get = ["$log", function (a) {
            return function (b, c) {
                a.error.apply(a, arguments)
            }
        }]
    }

    function xb(a) {
        return t(a) ? x(a) ? a.toISOString() : T(a) : a
    }

    function yb() {
        this.$get = function () {
            return function (a) {
                if (!a)return "";
                var b = [];
                return e(a, function (a, c) {
                    null === a || r(a) || (Wd(a) ? d(a, function (a) {
                        b.push(ba(c) + "=" + ba(xb(a)))
                    }) : b.push(ba(c) + "=" + ba(xb(a))))
                }), b.join("&")
            }
        }
    }

    function zb() {
        this.$get = function () {
            return function (a) {
                function b(a, f, g) {
                    null === a || r(a) || (Wd(a) ? d(a, function (a, c) {
                        b(a, f + "[" + (t(a) ? c : "") + "]")
                    }) : t(a) && !x(a) ? e(a, function (a, c) {
                        b(a, f + (g ? "" : "[") + c + (g ? "" : "]"))
                    }) : c.push(ba(f) + "=" + ba(xb(a))))
                }

                if (!a)return "";
                var c = [];
                return b(a, "", !0), c.join("&")
            }
        }
    }

    function Ab(a, b) {
        if (v(a)) {
            var c = a.replace(bf, "").trim();
            if (c) {
                var d = b("Content-Type");
                (d && 0 === d.indexOf(Ze) || Bb(c)) && (a = U(c))
            }
        }
        return a
    }

    function Bb(a) {
        var b = a.match(_e);
        return b && af[b[0]].test(a)
    }

    function Cb(a) {
        function b(a, b) {
            a && (e[a] = e[a] ? e[a] + ", " + b : b)
        }

        var c, e = oa();
        return v(a) ? d(a.split("\n"), function (a) {
            c = a.indexOf(":"), b(Gd(Yd(a.substr(0, c))), Yd(a.substr(c + 1)))
        }) : t(a) && d(a, function (a, c) {
                b(Gd(c), Yd(a))
            }), e
    }

    function Db(a) {
        var b;
        return function (c) {
            if (b || (b = Cb(a)), c) {
                var d = b[Gd(c)];
                return void 0 === d && (d = null), d
            }
            return b
        }
    }

    function Eb(a, b, c, e) {
        return y(e) ? e(a, b, c) : (d(e, function (d) {
            a = d(a, b, c)
        }), a)
    }

    function Fb(a) {
        return 200 <= a && a < 300
    }

    function Gb() {
        var a = this.defaults = {
            transformResponse: [Ab],
            transformRequest: [function (a) {
                return !t(a) || C(a) || E(a) || D(a) ? a : T(a)
            }],
            headers: {common: {Accept: "application/json, text/plain, */*"}, post: qa($e), put: qa($e), patch: qa($e)},
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            paramSerializer: "$httpParamSerializer"
        }, c = !1;
        this.useApplyAsync = function (a) {
            return s(a) ? (c = !!a, this) : c
        };
        var e = !0;
        this.useLegacyPromiseExtensions = function (a) {
            return s(a) ? (e = !!a, this) : e
        };
        var f = this.interceptors = [];
        this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function (g, h, i, k, l, m) {
            function n(c) {
                function f(a) {
                    var b = j({}, a);
                    return b.data = Eb(a.data, a.headers, a.status, i.transformResponse), Fb(a.status) ? b : l.reject(b)
                }

                function g(a, b) {
                    var c, e = {};
                    return d(a, function (a, d) {
                        y(a) ? (c = a(b), null != c && (e[d] = c)) : e[d] = a
                    }), e
                }

                function h(b) {
                    var c, d, e, f = a.headers, h = j({}, b.headers);
                    f = j({}, f.common, f[Gd(b.method)]);
                    a:for (c in f) {
                        d = Gd(c);
                        for (e in h)if (Gd(e) === d)continue a;
                        h[c] = f[c]
                    }
                    return g(h, qa(b))
                }

                if (!t(c))throw b("$http")("badreq", "Http request configuration must be an object.  Received: {0}", c);
                if (!v(c.url))throw b("$http")("badreq", "Http request configuration url must be a string.  Received: {0}", c.url);
                var i = j({
                    method: "get",
                    transformRequest: a.transformRequest,
                    transformResponse: a.transformResponse,
                    paramSerializer: a.paramSerializer
                }, c);
                i.headers = h(c), i.method = Hd(i.method), i.paramSerializer = v(i.paramSerializer) ? m.get(i.paramSerializer) : i.paramSerializer;
                var k = function (b) {
                    var c = b.headers, e = Eb(b.data, Db(c), void 0, b.transformRequest);
                    return r(e) && d(c, function (a, b) {
                        "content-type" === Gd(b) && delete c[b]
                    }), r(b.withCredentials) && !r(a.withCredentials) && (b.withCredentials = a.withCredentials), q(b, e).then(f, f)
                }, n = [k, void 0], o = l.when(i);
                for (d(x, function (a) {
                    (a.request || a.requestError) && n.unshift(a.request, a.requestError), (a.response || a.responseError) && n.push(a.response, a.responseError)
                }); n.length;) {
                    var p = n.shift(), s = n.shift();
                    o = o.then(p, s)
                }
                return e ? (o.success = function (a) {
                    return ka(a, "fn"), o.then(function (b) {
                        a(b.data, b.status, b.headers, i)
                    }), o
                }, o.error = function (a) {
                    return ka(a, "fn"), o.then(null, function (b) {
                        a(b.data, b.status, b.headers, i)
                    }), o
                }) : (o.success = df("success"), o.error = df("error")), o
            }

            function o(a) {
                d(arguments, function (a) {
                    n[a] = function (b, c) {
                        return n(j({}, c || {}, {method: a, url: b}))
                    }
                })
            }

            function p(a) {
                d(arguments, function (a) {
                    n[a] = function (b, c, d) {
                        return n(j({}, d || {}, {method: a, url: b, data: c}))
                    }
                })
            }

            function q(b, e) {
                function f(a) {
                    if (a) {
                        var b = {};
                        return d(a, function (a, d) {
                            b[d] = function (b) {
                                function d() {
                                    a(b)
                                }

                                c ? k.$applyAsync(d) : k.$$phase ? d() : k.$apply(d)
                            }
                        }), b
                    }
                }

                function i(a, b, d, e) {
                    function f() {
                        j(b, a, d, e)
                    }

                    p && (Fb(a) ? p.put(z, [a, b, Cb(d), e]) : p.remove(z)), c ? k.$applyAsync(f) : (f(), k.$$phase || k.$apply())
                }

                function j(a, c, d, e) {
                    c = c >= -1 ? c : 0, (Fb(c) ? v.resolve : v.reject)({
                        data: a,
                        status: c,
                        headers: Db(d),
                        config: b,
                        statusText: e
                    })
                }

                function m(a) {
                    j(a.data, a.status, qa(a.headers()), a.statusText)
                }

                function o() {
                    var a = n.pendingRequests.indexOf(b);
                    a !== -1 && n.pendingRequests.splice(a, 1)
                }

                var p, q, v = l.defer(), x = v.promise, y = b.headers, z = u(b.url, b.paramSerializer(b.params));
                if (n.pendingRequests.push(b), x.then(o, o), !b.cache && !a.cache || b.cache === !1 || "GET" !== b.method && "JSONP" !== b.method || (p = t(b.cache) ? b.cache : t(a.cache) ? a.cache : w), p && (q = p.get(z), s(q) ? G(q) ? q.then(m, m) : Wd(q) ? j(q[1], q[0], qa(q[2]), q[3]) : j(q, 200, {}, "OK") : p.put(z, x)), r(q)) {
                    var A = Ic(b.url) ? h()[b.xsrfCookieName || a.xsrfCookieName] : void 0;
                    A && (y[b.xsrfHeaderName || a.xsrfHeaderName] = A), g(b.method, z, e, i, y, b.timeout, b.withCredentials, b.responseType, f(b.eventHandlers), f(b.uploadEventHandlers))
                }
                return x
            }

            function u(a, b) {
                return b.length > 0 && (a += (a.indexOf("?") == -1 ? "?" : "&") + b), a
            }

            var w = i("$http");
            a.paramSerializer = v(a.paramSerializer) ? m.get(a.paramSerializer) : a.paramSerializer;
            var x = [];
            return d(f, function (a) {
                x.unshift(v(a) ? m.get(a) : m.invoke(a))
            }), n.pendingRequests = [], o("get", "delete", "head", "jsonp"), p("post", "put", "patch"), n.defaults = a, n
        }]
    }

    function Hb() {
        this.$get = function () {
            return function () {
                return new a.XMLHttpRequest
            }
        }
    }

    function Ib() {
        this.$get = ["$browser", "$window", "$document", "$xhrFactory", function (a, b, c, d) {
            return Jb(a, d, a.defer, b.angular.callbacks, c[0])
        }]
    }

    function Jb(a, b, c, e, f) {
        function g(a, b, c) {
            var d = f.createElement("script"), g = null;
            return d.type = "text/javascript", d.src = a, d.async = !0, g = function (a) {
                oe(d, "load", g), oe(d, "error", g), f.body.removeChild(d), d = null;
                var h = -1, i = "unknown";
                a && ("load" !== a.type || e[b].called || (a = {type: "error"}), i = a.type, h = "error" === a.type ? 404 : 200), c && c(h, i)
            }, ne(d, "load", g), ne(d, "error", g), f.body.appendChild(d), g
        }

        return function (f, h, i, j, k, l, m, o, p, q) {
            function t() {
                w && w(), x && x.abort()
            }

            function u(b, d, e, f, g) {
                s(z) && c.cancel(z), w = x = null, b(d, e, f, g), a.$$completeOutstandingRequest(n)
            }

            if (a.$$incOutstandingRequestCount(), h = h || a.url(), "jsonp" == Gd(f)) {
                var v = "_" + (e.counter++).toString(36);
                e[v] = function (a) {
                    e[v].data = a, e[v].called = !0
                };
                var w = g(h.replace("JSON_CALLBACK", "angular.callbacks." + v), v, function (a, b) {
                    u(j, a, e[v].data, "", b), e[v] = n
                })
            } else {
                var x = b(f, h);
                x.open(f, h, !0), d(k, function (a, b) {
                    s(a) && x.setRequestHeader(b, a)
                }), x.onload = function () {
                    var a = x.statusText || "", b = "response" in x ? x.response : x.responseText,
                        c = 1223 === x.status ? 204 : x.status;
                    0 === c && (c = b ? 200 : "file" == Hc(h).protocol ? 404 : 0), u(j, c, b, x.getAllResponseHeaders(), a)
                };
                var y = function () {
                    u(j, -1, null, null, "")
                };
                if (x.onerror = y, x.onabort = y, d(p, function (a, b) {
                        x.addEventListener(b, a)
                    }), d(q, function (a, b) {
                        x.upload.addEventListener(b, a)
                    }), m && (x.withCredentials = !0), o)try {
                    x.responseType = o
                } catch (a) {
                    if ("json" !== o)throw a
                }
                x.send(r(i) ? null : i)
            }
            if (l > 0)var z = c(t, l); else G(l) && l.then(t)
        }
    }

    function Kb() {
        var a = "{{", b = "}}";
        this.startSymbol = function (b) {
            return b ? (a = b, this) : a
        }, this.endSymbol = function (a) {
            return a ? (b = a, this) : b
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function (c, d, e) {
            function f(a) {
                return "\\\\\\" + a
            }

            function g(c) {
                return c.replace(n, a).replace(o, b)
            }

            function h(a) {
                if (null == a)return "";
                switch (typeof a) {
                    case"string":
                        break;
                    case"number":
                        a = "" + a;
                        break;
                    default:
                        a = T(a)
                }
                return a
            }

            function i(a, b, c, d) {
                var e;
                return e = a.$watch(function (a) {
                    return e(), d(a)
                }, b, c)
            }

            function k(f, k, n, o) {
                function q(a) {
                    try {
                        return a = G(a), o && !s(a) ? a : h(a)
                    } catch (a) {
                        d(ef.interr(f, a))
                    }
                }

                if (!f.length || f.indexOf(a) === -1) {
                    var t;
                    if (!k) {
                        var u = g(f);
                        t = p(u), t.exp = f, t.expressions = [], t.$$watchDelegate = i
                    }
                    return t
                }
                o = !!o;
                for (var v, w, x, z = 0, A = [], B = [], C = f.length, D = [], E = []; z < C;) {
                    if ((v = f.indexOf(a, z)) == -1 || (w = f.indexOf(b, v + l)) == -1) {
                        z !== C && D.push(g(f.substring(z)));
                        break
                    }
                    z !== v && D.push(g(f.substring(z, v))), x = f.substring(v + l, w), A.push(x), B.push(c(x, q)), z = w + m, E.push(D.length), D.push("")
                }
                if (n && D.length > 1 && ef.throwNoconcat(f), !k || A.length) {
                    var F = function (a) {
                        for (var b = 0, c = A.length; b < c; b++) {
                            if (o && r(a[b]))return;
                            D[E[b]] = a[b]
                        }
                        return D.join("")
                    }, G = function (a) {
                        return n ? e.getTrusted(n, a) : e.valueOf(a)
                    };
                    return j(function (a) {
                        var b = 0, c = A.length, e = new Array(c);
                        try {
                            for (; b < c; b++)e[b] = B[b](a);
                            return F(e)
                        } catch (a) {
                            d(ef.interr(f, a))
                        }
                    }, {
                        exp: f, expressions: A, $$watchDelegate: function (a, b) {
                            var c;
                            return a.$watchGroup(B, function (d, e) {
                                var f = F(d);
                                y(b) && b.call(this, f, d !== e ? c : f, a), c = f
                            })
                        }
                    })
                }
            }

            var l = a.length, m = b.length, n = new RegExp(a.replace(/./g, f), "g"),
                o = new RegExp(b.replace(/./g, f), "g");
            return k.startSymbol = function () {
                return a
            }, k.endSymbol = function () {
                return b
            }, k
        }]
    }

    function Lb() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (a, b, c, d, e) {
            function f(f, h, i, j) {
                function k() {
                    l ? f.apply(null, m) : f(p)
                }

                var l = arguments.length > 4, m = l ? Q(arguments, 4) : [], n = b.setInterval, o = b.clearInterval,
                    p = 0, q = s(j) && !j, r = (q ? d : c).defer(), t = r.promise;
                return i = s(i) ? i : 0, t.$$intervalId = n(function () {
                    q ? e.defer(k) : a.$evalAsync(k), r.notify(p++), i > 0 && p >= i && (r.resolve(p), o(t.$$intervalId), delete g[t.$$intervalId]), q || a.$apply()
                }, h), g[t.$$intervalId] = r, t
            }

            var g = {};
            return f.cancel = function (a) {
                return !!(a && a.$$intervalId in g) && (g[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete g[a.$$intervalId], !0)
            }, f
        }]
    }

    function Mb(a) {
        for (var b = a.split("/"), c = b.length; c--;)b[c] = aa(b[c]);
        return b.join("/")
    }

    function Nb(a, b) {
        var c = Hc(a);
        b.$$protocol = c.protocol, b.$$host = c.hostname, b.$$port = l(c.port) || gf[c.protocol] || null
    }

    function Ob(a, b) {
        var c = "/" !== a.charAt(0);
        c && (a = "/" + a);
        var d = Hc(a);
        b.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname), b.$$search = $(d.search), b.$$hash = decodeURIComponent(d.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
    }

    function Pb(a, b) {
        return 0 === a.lastIndexOf(b, 0)
    }

    function Qb(a, b) {
        if (Pb(b, a))return b.substr(a.length)
    }

    function Rb(a) {
        var b = a.indexOf("#");
        return b == -1 ? a : a.substr(0, b)
    }

    function Sb(a) {
        return a.replace(/(#.+)|#$/, "$1")
    }

    function Tb(a) {
        return a.substr(0, Rb(a).lastIndexOf("/") + 1)
    }

    function Ub(a) {
        return a.substring(0, a.indexOf("/", a.indexOf("//") + 2))
    }

    function Vb(a, b, c) {
        this.$$html5 = !0, c = c || "", Nb(a, this), this.$$parse = function (a) {
            var c = Qb(b, a);
            if (!v(c))throw hf("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', a, b);
            Ob(c, this), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function () {
            var a = _(this.$$search), c = this.$$hash ? "#" + aa(this.$$hash) : "";
            this.$$url = Mb(this.$$path) + (a ? "?" + a : "") + c, this.$$absUrl = b + this.$$url.substr(1)
        }, this.$$parseLinkUrl = function (d, e) {
            if (e && "#" === e[0])return this.hash(e.slice(1)), !0;
            var f, g, h;
            return s(f = Qb(a, d)) ? (g = f, h = s(f = Qb(c, f)) ? b + (Qb("/", f) || f) : a + g) : s(f = Qb(b, d)) ? h = b + f : b == d + "/" && (h = b), h && this.$$parse(h), !!h
        }
    }

    function Wb(a, b, c) {
        Nb(a, this), this.$$parse = function (d) {
            function e(a, b, c) {
                var d, e = /^\/[A-Z]:(\/.*)/;
                return Pb(b, c) && (b = b.replace(c, "")), e.exec(b) ? a : (d = e.exec(a), d ? d[1] : a)
            }

            var f, g = Qb(a, d) || Qb(b, d);
            r(g) || "#" !== g.charAt(0) ? this.$$html5 ? f = g : (f = "", r(g) && (a = d, this.replace())) : (f = Qb(c, g), r(f) && (f = g)), Ob(f, this), this.$$path = e(this.$$path, f, a), this.$$compose()
        }, this.$$compose = function () {
            var b = _(this.$$search), d = this.$$hash ? "#" + aa(this.$$hash) : "";
            this.$$url = Mb(this.$$path) + (b ? "?" + b : "") + d, this.$$absUrl = a + (this.$$url ? c + this.$$url : "")
        }, this.$$parseLinkUrl = function (b, c) {
            return Rb(a) == Rb(b) && (this.$$parse(b), !0)
        }
    }

    function Xb(a, b, c) {
        this.$$html5 = !0, Wb.apply(this, arguments), this.$$parseLinkUrl = function (d, e) {
            if (e && "#" === e[0])return this.hash(e.slice(1)), !0;
            var f, g;
            return a == Rb(d) ? f = d : (g = Qb(b, d)) ? f = a + c + g : b === d + "/" && (f = b), f && this.$$parse(f), !!f
        }, this.$$compose = function () {
            var b = _(this.$$search), d = this.$$hash ? "#" + aa(this.$$hash) : "";
            this.$$url = Mb(this.$$path) + (b ? "?" + b : "") + d, this.$$absUrl = a + c + this.$$url
        }
    }

    function Yb(a) {
        return function () {
            return this[a]
        }
    }

    function Zb(a, b) {
        return function (c) {
            return r(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
        }
    }

    function $b() {
        var a = "", b = {enabled: !1, requireBase: !0, rewriteLinks: !0};
        this.hashPrefix = function (b) {
            return s(b) ? (a = b, this) : a
        }, this.html5Mode = function (a) {
            return F(a) ? (b.enabled = a, this) : t(a) ? (F(a.enabled) && (b.enabled = a.enabled), F(a.requireBase) && (b.requireBase = a.requireBase), F(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (c, d, e, f, g) {
            function h(a, b, c) {
                var e = j.url(), f = j.$$state;
                try {
                    d.url(a, b, c), j.$$state = d.state()
                } catch (a) {
                    throw j.url(e), j.$$state = f, a
                }
            }

            function i(a, b) {
                c.$broadcast("$locationChangeSuccess", j.absUrl(), a, j.$$state, b)
            }

            var j, k, l, m = d.baseHref(), n = d.url();
            if (b.enabled) {
                if (!m && b.requireBase)throw hf("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                l = Ub(n) + (m || "/"), k = e.history ? Vb : Xb
            } else l = Rb(n), k = Wb;
            var o = Tb(l);
            j = new k(l, o, "#" + a), j.$$parseLinkUrl(n, n), j.$$state = d.state();
            var p = /^\s*(javascript|mailto):/i;
            f.on("click", function (a) {
                if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
                    for (var e = Ld(a.target); "a" !== L(e[0]);)if (e[0] === f[0] || !(e = e.parent())[0])return;
                    var h = e.prop("href"), i = e.attr("href") || e.attr("xlink:href");
                    t(h) && "[object SVGAnimatedString]" === h.toString() && (h = Hc(h.animVal).href), p.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || j.$$parseLinkUrl(h, i) && (a.preventDefault(), j.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0))
                }
            }), Sb(j.absUrl()) != Sb(n) && d.url(j.absUrl(), !0);
            var q = !0;
            return d.onUrlChange(function (a, b) {
                return r(Qb(o, a)) ? void(g.location.href = a) : (c.$evalAsync(function () {
                    var d, e = j.absUrl(), f = j.$$state;
                    a = Sb(a), j.$$parse(a), j.$$state = b, d = c.$broadcast("$locationChangeStart", a, e, b, f).defaultPrevented, j.absUrl() === a && (d ? (j.$$parse(e), j.$$state = f, h(e, !1, f)) : (q = !1, i(e, f)))
                }), void(c.$$phase || c.$digest()))
            }), c.$watch(function () {
                var a = Sb(d.url()), b = Sb(j.absUrl()), f = d.state(), g = j.$$replace,
                    k = a !== b || j.$$html5 && e.history && f !== j.$$state;
                (q || k) && (q = !1, c.$evalAsync(function () {
                    var b = j.absUrl(), d = c.$broadcast("$locationChangeStart", b, a, j.$$state, f).defaultPrevented;
                    j.absUrl() === b && (d ? (j.$$parse(a), j.$$state = f) : (k && h(b, g, f === j.$$state ? null : j.$$state), i(a, f)))
                })), j.$$replace = !1
            }), j
        }]
    }

    function _b() {
        var a = !0, b = this;
        this.debugEnabled = function (b) {
            return s(b) ? (a = b, this) : a
        }, this.$get = ["$window", function (c) {
            function e(a) {
                return a instanceof Error && (a.stack ? a = a.message && a.stack.indexOf(a.message) === -1 ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), a
            }

            function f(a) {
                var b = c.console || {}, f = b[a] || b.log || n, g = !1;
                try {
                    g = !!f.apply
                } catch (a) {
                }
                return g ? function () {
                    var a = [];
                    return d(arguments, function (b) {
                        a.push(e(b))
                    }), f.apply(b, a)
                } : function (a, b) {
                    f(a, null == b ? "" : b)
                }
            }

            return {
                log: f("log"), info: f("info"), warn: f("warn"), error: f("error"), debug: function () {
                    var c = f("debug");
                    return function () {
                        a && c.apply(b, arguments)
                    }
                }()
            }
        }]
    }

    function ac(a, b) {
        if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a)throw kf("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", b);
        return a
    }

    function bc(a) {
        return a + ""
    }

    function cc(a, b) {
        if (a) {
            if (a.constructor === a)throw kf("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
            if (a.window === a)throw kf("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b);
            if (a.children && (a.nodeName || a.prop && a.attr && a.find))throw kf("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b);
            if (a === Object)throw kf("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", b)
        }
        return a
    }

    function dc(a, b) {
        if (a) {
            if (a.constructor === a)throw kf("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
            if (a === lf || a === mf || a === nf)throw kf("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", b)
        }
    }

    function ec(a, b) {
        if (a && (a === (0).constructor || a === (!1).constructor || a === "".constructor || a === {}.constructor || a === [].constructor || a === Function.constructor))throw kf("isecaf", "Assigning to a constructor is disallowed! Expression: {0}", b)
    }

    function fc(a, b) {
        return "undefined" != typeof a ? a : b
    }

    function gc(a, b) {
        return "undefined" == typeof a ? b : "undefined" == typeof b ? a : a + b
    }

    function hc(a, b) {
        var c = a(b);
        return !c.$stateful
    }

    function ic(a, b) {
        var c, e;
        switch (a.type) {
            case rf.Program:
                c = !0, d(a.body, function (a) {
                    ic(a.expression, b), c = c && a.expression.constant
                }), a.constant = c;
                break;
            case rf.Literal:
                a.constant = !0, a.toWatch = [];
                break;
            case rf.UnaryExpression:
                ic(a.argument, b), a.constant = a.argument.constant, a.toWatch = a.argument.toWatch;
                break;
            case rf.BinaryExpression:
                ic(a.left, b), ic(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = a.left.toWatch.concat(a.right.toWatch);
                break;
            case rf.LogicalExpression:
                ic(a.left, b), ic(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = a.constant ? [] : [a];
                break;
            case rf.ConditionalExpression:
                ic(a.test, b), ic(a.alternate, b), ic(a.consequent, b), a.constant = a.test.constant && a.alternate.constant && a.consequent.constant, a.toWatch = a.constant ? [] : [a];
                break;
            case rf.Identifier:
                a.constant = !1, a.toWatch = [a];
                break;
            case rf.MemberExpression:
                ic(a.object, b), a.computed && ic(a.property, b), a.constant = a.object.constant && (!a.computed || a.property.constant), a.toWatch = [a];
                break;
            case rf.CallExpression:
                c = !!a.filter && hc(b, a.callee.name), e = [], d(a.arguments, function (a) {
                    ic(a, b), c = c && a.constant, a.constant || e.push.apply(e, a.toWatch)
                }), a.constant = c, a.toWatch = a.filter && hc(b, a.callee.name) ? e : [a];
                break;
            case rf.AssignmentExpression:
                ic(a.left, b), ic(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = [a];
                break;
            case rf.ArrayExpression:
                c = !0, e = [], d(a.elements, function (a) {
                    ic(a, b), c = c && a.constant, a.constant || e.push.apply(e, a.toWatch)
                }), a.constant = c, a.toWatch = e;
                break;
            case rf.ObjectExpression:
                c = !0, e = [], d(a.properties, function (a) {
                    ic(a.value, b), c = c && a.value.constant && !a.computed, a.value.constant || e.push.apply(e, a.value.toWatch)
                }), a.constant = c, a.toWatch = e;
                break;
            case rf.ThisExpression:
                a.constant = !1, a.toWatch = [];
                break;
            case rf.LocalsExpression:
                a.constant = !1, a.toWatch = []
        }
    }

    function jc(a) {
        if (1 == a.length) {
            var b = a[0].expression, c = b.toWatch;
            return 1 !== c.length ? c : c[0] !== b ? c : void 0
        }
    }

    function kc(a) {
        return a.type === rf.Identifier || a.type === rf.MemberExpression
    }

    function lc(a) {
        if (1 === a.body.length && kc(a.body[0].expression))return {
            type: rf.AssignmentExpression,
            left: a.body[0].expression,
            right: {type: rf.NGValueParameter},
            operator: "="
        }
    }

    function mc(a) {
        return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === rf.Literal || a.body[0].expression.type === rf.ArrayExpression || a.body[0].expression.type === rf.ObjectExpression)
    }

    function nc(a) {
        return a.constant
    }

    function oc(a, b) {
        this.astBuilder = a, this.$filter = b
    }

    function pc(a, b) {
        this.astBuilder = a, this.$filter = b
    }

    function qc(a) {
        return "constructor" == a
    }

    function rc(a) {
        return y(a.valueOf) ? a.valueOf() : tf.call(a)
    }

    function sc() {
        var a, b, c = oa(), e = oa(), f = {true: !0, false: !1, null: null, undefined: void 0};
        this.addLiteral = function (a, b) {
            f[a] = b
        }, this.setIdentifierFns = function (c, d) {
            return a = c, b = d, this
        }, this.$get = ["$filter", function (g) {
            function h(a, b, d) {
                var f, h, j;
                switch (d = d || u, typeof a) {
                    case"string":
                        a = a.trim(), j = a;
                        var q = d ? e : c;
                        if (f = q[j], !f) {
                            ":" === a.charAt(0) && ":" === a.charAt(1) && (h = !0, a = a.substring(2));
                            var s = d ? t : r, v = new qf(s), w = new sf(v, g, s);
                            f = w.parse(a), f.constant ? f.$$watchDelegate = o : h ? f.$$watchDelegate = f.literal ? m : l : f.inputs && (f.$$watchDelegate = k), d && (f = i(f)), q[j] = f
                        }
                        return p(f, b);
                    case"function":
                        return p(a, b);
                    default:
                        return p(n, b)
                }
            }

            function i(a) {
                function b(b, c, d, e) {
                    var f = u;
                    u = !0;
                    try {
                        return a(b, c, d, e)
                    } finally {
                        u = f
                    }
                }

                if (!a)return a;
                b.$$watchDelegate = a.$$watchDelegate, b.assign = i(a.assign), b.constant = a.constant, b.literal = a.literal;
                for (var c = 0; a.inputs && c < a.inputs.length; ++c)a.inputs[c] = i(a.inputs[c]);
                return b.inputs = a.inputs, b
            }

            function j(a, b) {
                return null == a || null == b ? a === b : ("object" != typeof a || (a = rc(a), "object" != typeof a)) && (a === b || a !== a && b !== b)
            }

            function k(a, b, c, d, e) {
                var f, g = d.inputs;
                if (1 === g.length) {
                    var h = j;
                    return g = g[0], a.$watch(function (a) {
                        var b = g(a);
                        return j(b, h) || (f = d(a, void 0, void 0, [b]), h = b && rc(b)), f
                    }, b, c, e)
                }
                for (var i = [], k = [], l = 0, m = g.length; l < m; l++)i[l] = j, k[l] = null;
                return a.$watch(function (a) {
                    for (var b = !1, c = 0, e = g.length; c < e; c++) {
                        var h = g[c](a);
                        (b || (b = !j(h, i[c]))) && (k[c] = h, i[c] = h && rc(h))
                    }
                    return b && (f = d(a, void 0, void 0, k)), f
                }, b, c, e)
            }

            function l(a, b, c, d) {
                var e, f;
                return e = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    f = a, y(b) && b.apply(this, arguments), s(a) && d.$$postDigest(function () {
                        s(f) && e()
                    })
                }, c)
            }

            function m(a, b, c, e) {
                function f(a) {
                    var b = !0;
                    return d(a, function (a) {
                        s(a) || (b = !1)
                    }), b
                }

                var g, h;
                return g = a.$watch(function (a) {
                    return e(a)
                }, function (a, c, d) {
                    h = a, y(b) && b.call(this, a, c, d), f(a) && d.$$postDigest(function () {
                        f(h) && g()
                    })
                }, c)
            }

            function o(a, b, c, d) {
                var e;
                return e = a.$watch(function (a) {
                    return e(), d(a)
                }, b, c)
            }

            function p(a, b) {
                if (!b)return a;
                var c = a.$$watchDelegate, d = !1, e = c !== m && c !== l, f = e ? function (c, e, f, g) {
                    var h = d && g ? g[0] : a(c, e, f, g);
                    return b(h, c, e)
                } : function (c, d, e, f) {
                    var g = a(c, d, e, f), h = b(g, c, d);
                    return s(g) ? h : g
                };
                return a.$$watchDelegate && a.$$watchDelegate !== k ? f.$$watchDelegate = a.$$watchDelegate : b.$stateful || (f.$$watchDelegate = k, d = !a.inputs, f.inputs = a.inputs ? a.inputs : [a]), f
            }

            var q = $d().noUnsafeEval, r = {
                csp: q,
                expensiveChecks: !1,
                literals: N(f),
                isIdentifierStart: y(a) && a,
                isIdentifierContinue: y(b) && b
            }, t = {
                csp: q,
                expensiveChecks: !0,
                literals: N(f),
                isIdentifierStart: y(a) && a,
                isIdentifierContinue: y(b) && b
            }, u = !1;
            return h.$$runningExpensiveChecks = function () {
                return u
            }, h
        }]
    }

    function tc() {
        this.$get = ["$rootScope", "$exceptionHandler", function (a, b) {
            return vc(function (b) {
                a.$evalAsync(b)
            }, b)
        }]
    }

    function uc() {
        this.$get = ["$browser", "$exceptionHandler", function (a, b) {
            return vc(function (b) {
                a.defer(b)
            }, b)
        }]
    }

    function vc(a, c) {
        function e() {
            this.$$state = {status: 0}
        }

        function f(a, b) {
            return function (c) {
                b.call(a, c)
            }
        }

        function g(a) {
            var b, d, e;
            e = a.pending, a.processScheduled = !1, a.pending = void 0;
            for (var f = 0, g = e.length; f < g; ++f) {
                d = e[f][0], b = e[f][a.status];
                try {
                    y(b) ? d.resolve(b(a.value)) : 1 === a.status ? d.resolve(a.value) : d.reject(a.value)
                } catch (a) {
                    d.reject(a), c(a)
                }
            }
        }

        function h(b) {
            !b.processScheduled && b.pending && (b.processScheduled = !0, a(function () {
                g(b)
            }))
        }

        function i() {
            this.promise = new e
        }

        function k(a) {
            var b = new i, c = 0, e = Wd(a) ? [] : {};
            return d(a, function (a, d) {
                c++, q(a).then(function (a) {
                    e.hasOwnProperty(d) || (e[d] = a, --c || b.resolve(e))
                }, function (a) {
                    e.hasOwnProperty(d) || b.reject(a)
                })
            }), 0 === c && b.resolve(e), b.promise
        }

        var l = b("$q", TypeError), m = function () {
            var a = new i;
            return a.resolve = f(a, a.resolve), a.reject = f(a, a.reject), a.notify = f(a, a.notify), a
        };
        j(e.prototype, {
            then: function (a, b, c) {
                if (r(a) && r(b) && r(c))return this;
                var d = new i;
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([d, a, b, c]), this.$$state.status > 0 && h(this.$$state), d.promise
            }, catch: function (a) {
                return this.then(null, a)
            }, finally: function (a, b) {
                return this.then(function (b) {
                    return p(b, !0, a)
                }, function (b) {
                    return p(b, !1, a)
                }, b)
            }
        }), j(i.prototype, {
            resolve: function (a) {
                this.promise.$$state.status || (a === this.promise ? this.$$reject(l("qcycle", "Expected promise to be resolved with value other than itself '{0}'", a)) : this.$$resolve(a))
            }, $$resolve: function (a) {
                function b(a) {
                    i || (i = !0, g.$$resolve(a))
                }

                function d(a) {
                    i || (i = !0, g.$$reject(a))
                }

                var e, g = this, i = !1;
                try {
                    (t(a) || y(a)) && (e = a && a.then), y(e) ? (this.promise.$$state.status = -1, e.call(a, b, d, f(this, this.notify))) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, h(this.promise.$$state))
                } catch (a) {
                    d(a), c(a)
                }
            }, reject: function (a) {
                this.promise.$$state.status || this.$$reject(a)
            }, $$reject: function (a) {
                this.promise.$$state.value = a, this.promise.$$state.status = 2, h(this.promise.$$state)
            }, notify: function (b) {
                var d = this.promise.$$state.pending;
                this.promise.$$state.status <= 0 && d && d.length && a(function () {
                    for (var a, e, f = 0, g = d.length; f < g; f++) {
                        e = d[f][0], a = d[f][3];
                        try {
                            e.notify(y(a) ? a(b) : b)
                        } catch (a) {
                            c(a)
                        }
                    }
                })
            }
        });
        var n = function (a) {
            var b = new i;
            return b.reject(a), b.promise
        }, o = function (a, b) {
            var c = new i;
            return b ? c.resolve(a) : c.reject(a), c.promise
        }, p = function (a, b, c) {
            var d = null;
            try {
                y(c) && (d = c())
            } catch (a) {
                return o(a, !1)
            }
            return G(d) ? d.then(function () {
                return o(a, b)
            }, function (a) {
                return o(a, !1)
            }) : o(a, b)
        }, q = function (a, b, c, d) {
            var e = new i;
            return e.resolve(a), e.promise.then(b, c, d)
        }, s = q, u = function (a) {
            function b(a) {
                d.resolve(a)
            }

            function c(a) {
                d.reject(a)
            }

            if (!y(a))throw l("norslvr", "Expected resolverFn, got '{0}'", a);
            var d = new i;
            return a(b, c), d.promise
        };
        return u.prototype = e.prototype, u.defer = m, u.reject = n, u.when = q, u.resolve = s, u.all = k, u
    }

    function wc() {
        this.$get = ["$window", "$timeout", function (a, b) {
            var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
                d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
                e = !!c, f = e ? function (a) {
                    var b = c(a);
                    return function () {
                        d(b)
                    }
                } : function (a) {
                    var c = b(a, 16.66, !1);
                    return function () {
                        b.cancel(c)
                    }
                };
            return f.supported = e, f
        }]
    }

    function xc() {
        function a(a) {
            function b() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = g(), this.$$ChildScope = null
            }

            return b.prototype = a, b
        }

        var e = 10, f = b("$rootScope"), h = null, i = null;
        this.digestTtl = function (a) {
            return arguments.length && (e = a), e
        }, this.$get = ["$exceptionHandler", "$parse", "$browser", function (b, j, k) {
            function l(a) {
                a.currentScope.$$destroyed = !0
            }

            function m(a) {
                9 === Kd && (a.$$childHead && m(a.$$childHead), a.$$nextSibling && m(a.$$nextSibling)), a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null
            }

            function o() {
                this.$id = g(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
            }

            function p(a) {
                if (z.$$phase)throw f("inprog", "{0} already in progress", z.$$phase);
                z.$$phase = a
            }

            function q() {
                z.$$phase = null
            }

            function s(a, b) {
                do a.$$watchersCount += b; while (a = a.$parent)
            }

            function u(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
            }

            function v() {
            }

            function w() {
                for (; C.length;)try {
                    C.shift()()
                } catch (a) {
                    b(a)
                }
                i = null
            }

            function x() {
                null === i && (i = k.defer(function () {
                    z.$apply(w)
                }))
            }

            o.prototype = {
                constructor: o, $new: function (b, c) {
                    var d;
                    return c = c || this, b ? (d = new o, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope), d.$parent = c, d.$$prevSibling = c.$$childTail, c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d, (b || c != this) && d.$on("$destroy", l), d
                }, $watch: function (a, b, c, d) {
                    var e = j(a);
                    if (e.$$watchDelegate)return e.$$watchDelegate(this, b, c, e, a);
                    var f = this, g = f.$$watchers, i = {fn: b, last: v, get: e, exp: d || a, eq: !!c};
                    return h = null, y(b) || (i.fn = n), g || (g = f.$$watchers = []), g.unshift(i), s(this, 1), function () {
                        M(g, i) >= 0 && s(f, -1), h = null
                    }
                }, $watchGroup: function (a, b) {
                    function c() {
                        i = !1, j ? (j = !1, b(f, f, h)) : b(f, e, h)
                    }

                    var e = new Array(a.length), f = new Array(a.length), g = [], h = this, i = !1, j = !0;
                    if (!a.length) {
                        var k = !0;
                        return h.$evalAsync(function () {
                            k && b(f, f, h)
                        }), function () {
                            k = !1
                        }
                    }
                    return 1 === a.length ? this.$watch(a[0], function (a, c, d) {
                        f[0] = a, e[0] = c, b(f, a === c ? f : e, d)
                    }) : (d(a, function (a, b) {
                        var d = h.$watch(a, function (a, d) {
                            f[b] = a, e[b] = d, i || (i = !0, h.$evalAsync(c))
                        });
                        g.push(d)
                    }), function () {
                        for (; g.length;)g.shift()()
                    })
                }, $watchCollection: function (a, b) {
                    function d(a) {
                        f = a;
                        var b, d, e, h, i;
                        if (!r(f)) {
                            if (t(f))if (c(f)) {
                                g !== n && (g = n, q = g.length = 0, l++), b = f.length, q !== b && (l++, g.length = q = b);
                                for (var j = 0; j < b; j++)i = g[j], h = f[j], e = i !== i && h !== h, e || i === h || (l++, g[j] = h)
                            } else {
                                g !== o && (g = o = {}, q = 0, l++), b = 0;
                                for (d in f)Fd.call(f, d) && (b++, h = f[d], i = g[d], d in g ? (e = i !== i && h !== h, e || i === h || (l++, g[d] = h)) : (q++, g[d] = h, l++));
                                if (q > b) {
                                    l++;
                                    for (d in g)Fd.call(f, d) || (q--, delete g[d])
                                }
                            } else g !== f && (g = f, l++);
                            return l
                        }
                    }

                    function e() {
                        if (p ? (p = !1, b(f, f, i)) : b(f, h, i), k)if (t(f))if (c(f)) {
                            h = new Array(f.length);
                            for (var a = 0; a < f.length; a++)h[a] = f[a]
                        } else {
                            h = {};
                            for (var d in f)Fd.call(f, d) && (h[d] = f[d])
                        } else h = f
                    }

                    d.$stateful = !0;
                    var f, g, h, i = this, k = b.length > 1, l = 0, m = j(a, d), n = [], o = {}, p = !0, q = 0;
                    return this.$watch(m, e)
                }, $digest: function () {
                    var a, c, d, g, j, l, m, n, o, r, s, t, u = e, x = this, C = [];
                    p("$digest"), k.$$checkUrlChange(), this === z && null !== i && (k.defer.cancel(i), w()), h = null;
                    do {
                        n = !1, r = x;
                        for (var E = 0; E < A.length; E++) {
                            try {
                                t = A[E], t.scope.$eval(t.expression, t.locals)
                            } catch (a) {
                                b(a)
                            }
                            h = null
                        }
                        A.length = 0;
                        a:do {
                            if (l = r.$$watchers)for (m = l.length; m--;)try {
                                if (a = l[m])if (j = a.get, (c = j(r)) === (d = a.last) || (a.eq ? O(c, d) : "number" == typeof c && "number" == typeof d && isNaN(c) && isNaN(d))) {
                                    if (a === h) {
                                        n = !1;
                                        break a
                                    }
                                } else n = !0, h = a, a.last = a.eq ? N(c, null) : c, g = a.fn, g(c, d === v ? c : d, r), u < 5 && (s = 4 - u, C[s] || (C[s] = []), C[s].push({
                                    msg: y(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                                    newVal: c,
                                    oldVal: d
                                }))
                            } catch (a) {
                                b(a)
                            }
                            if (!(o = r.$$watchersCount && r.$$childHead || r !== x && r.$$nextSibling))for (; r !== x && !(o = r.$$nextSibling);)r = r.$parent
                        } while (r = o);
                        if ((n || A.length) && !u--)throw q(), f("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", e, C)
                    } while (n || A.length);
                    for (q(); D < B.length;)try {
                        B[D++]()
                    } catch (a) {
                        b(a)
                    }
                    B.length = D = 0
                }, $destroy: function () {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, this === z && k.$$applicationDestroyed(), s(this, -this.$$watchersCount);
                        for (var b in this.$$listenerCount)u(this, this.$$listenerCount[b], b);
                        a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = n, this.$on = this.$watch = this.$watchGroup = function () {
                            return n
                        }, this.$$listeners = {}, this.$$nextSibling = null, m(this)
                    }
                }, $eval: function (a, b) {
                    return j(a)(this, b)
                }, $evalAsync: function (a, b) {
                    z.$$phase || A.length || k.defer(function () {
                        A.length && z.$digest()
                    }), A.push({scope: this, expression: j(a), locals: b})
                }, $$postDigest: function (a) {
                    B.push(a)
                }, $apply: function (a) {
                    try {
                        p("$apply");
                        try {
                            return this.$eval(a)
                        } finally {
                            q()
                        }
                    } catch (a) {
                        b(a)
                    } finally {
                        try {
                            z.$digest()
                        } catch (a) {
                            throw b(a), a
                        }
                    }
                }, $applyAsync: function (a) {
                    function b() {
                        c.$eval(a)
                    }

                    var c = this;
                    a && C.push(b), a = j(a), x()
                }, $on: function (a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []), c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function () {
                        var d = c.indexOf(b);
                        d !== -1 && (c[d] = null, u(e, 1, a))
                    }
                }, $emit: function (a, c) {
                    var d, e, f, g = [], h = this, i = !1, j = {
                        name: a, targetScope: h, stopPropagation: function () {
                            i = !0
                        }, preventDefault: function () {
                            j.defaultPrevented = !0
                        }, defaultPrevented: !1
                    }, k = P([j], arguments, 1);
                    do {
                        for (d = h.$$listeners[a] || g, j.currentScope = h, e = 0, f = d.length; e < f; e++)if (d[e])try {
                            d[e].apply(null, k)
                        } catch (a) {
                            b(a)
                        } else d.splice(e, 1), e--, f--;
                        if (i)return j.currentScope = null, j;
                        h = h.$parent
                    } while (h);
                    return j.currentScope = null, j
                }, $broadcast: function (a, c) {
                    var d = this, e = d, f = d, g = {
                        name: a, targetScope: d, preventDefault: function () {
                            g.defaultPrevented = !0
                        }, defaultPrevented: !1
                    };
                    if (!d.$$listenerCount[a])return g;
                    for (var h, i, j, k = P([g], arguments, 1); e = f;) {
                        for (g.currentScope = e, h = e.$$listeners[a] || [], i = 0, j = h.length; i < j; i++)if (h[i])try {
                            h[i].apply(null, k)
                        } catch (a) {
                            b(a)
                        } else h.splice(i, 1), i--, j--;
                        if (!(f = e.$$listenerCount[a] && e.$$childHead || e !== d && e.$$nextSibling))for (; e !== d && !(f = e.$$nextSibling);)e = e.$parent
                    }
                    return g.currentScope = null, g
                }
            };
            var z = new o, A = z.$$asyncQueue = [], B = z.$$postDigestQueue = [], C = z.$$applyAsyncQueue = [], D = 0;
            return z
        }]
    }

    function yc() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/, b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (b) {
            return s(b) ? (a = b, this) : a
        }, this.imgSrcSanitizationWhitelist = function (a) {
            return s(a) ? (b = a, this) : b
        }, this.$get = function () {
            return function (c, d) {
                var e, f = d ? b : a;
                return e = Hc(c).href, "" === e || e.match(f) ? c : "unsafe:" + e
            }
        }
    }

    function zc(a) {
        if ("self" === a)return a;
        if (v(a)) {
            if (a.indexOf("***") > -1)throw uf("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a);
            return a = Zd(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$")
        }
        if (z(a))return new RegExp("^" + a.source + "$");
        throw uf("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
    }

    function Ac(a) {
        var b = [];
        return s(a) && d(a, function (a) {
            b.push(zc(a))
        }), b
    }

    function Bc() {
        this.SCE_CONTEXTS = vf;
        var a = ["self"], b = [];
        this.resourceUrlWhitelist = function (b) {
            return arguments.length && (a = Ac(b)), a
        }, this.resourceUrlBlacklist = function (a) {
            return arguments.length && (b = Ac(a)), b
        }, this.$get = ["$injector", function (c) {
            function d(a, b) {
                return "self" === a ? Ic(b) : !!a.exec(b.href)
            }

            function e(c) {
                var e, f, g = Hc(c.toString()), h = !1;
                for (e = 0, f = a.length; e < f; e++)if (d(a[e], g)) {
                    h = !0;
                    break
                }
                if (h)for (e = 0, f = b.length; e < f; e++)if (d(b[e], g)) {
                    h = !1;
                    break
                }
                return h
            }

            function f(a) {
                var b = function (a) {
                    this.$$unwrapTrustedValue = function () {
                        return a
                    }
                };
                return a && (b.prototype = new a), b.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                }, b.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                }, b
            }

            function g(a, b) {
                var c = l.hasOwnProperty(a) ? l[a] : null;
                if (!c)throw uf("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b);
                if (null === b || r(b) || "" === b)return b;
                if ("string" != typeof b)throw uf("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a);
                return new c(b)
            }

            function h(a) {
                return a instanceof k ? a.$$unwrapTrustedValue() : a
            }

            function i(a, b) {
                if (null === b || r(b) || "" === b)return b;
                var c = l.hasOwnProperty(a) ? l[a] : null;
                if (c && b instanceof c)return b.$$unwrapTrustedValue();
                if (a === vf.RESOURCE_URL) {
                    if (e(b))return b;
                    throw uf("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString())
                }
                if (a === vf.HTML)return j(b);
                throw uf("unsafe", "Attempting to use an unsafe value in a safe context.")
            }

            var j = function (a) {
                throw uf("unsafe", "Attempting to use an unsafe value in a safe context.")
            };
            c.has("$sanitize") && (j = c.get("$sanitize"));
            var k = f(), l = {};
            return l[vf.HTML] = f(k), l[vf.CSS] = f(k), l[vf.URL] = f(k), l[vf.JS] = f(k), l[vf.RESOURCE_URL] = f(l[vf.URL]), {
                trustAs: g,
                getTrusted: i,
                valueOf: h
            }
        }]
    }

    function Cc() {
        var a = !0;
        this.enabled = function (b) {
            return arguments.length && (a = !!b), a
        }, this.$get = ["$parse", "$sceDelegate", function (b, c) {
            if (a && Kd < 8)throw uf("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
            var e = qa(vf);
            e.isEnabled = function () {
                return a
            }, e.trustAs = c.trustAs, e.getTrusted = c.getTrusted, e.valueOf = c.valueOf, a || (e.trustAs = e.getTrusted = function (a, b) {
                return b
            }, e.valueOf = o), e.parseAs = function (a, c) {
                var d = b(c);
                return d.literal && d.constant ? d : b(c, function (b) {
                    return e.getTrusted(a, b)
                })
            };
            var f = e.parseAs, g = e.getTrusted, h = e.trustAs;
            return d(vf, function (a, b) {
                var c = Gd(b);
                e[va("parse_as_" + c)] = function (b) {
                    return f(a, b)
                }, e[va("get_trusted_" + c)] = function (b) {
                    return g(a, b)
                }, e[va("trust_as_" + c)] = function (b) {
                    return h(a, b)
                }
            }), e
        }]
    }

    function Dc() {
        this.$get = ["$window", "$document", function (a, b) {
            var c, d, e = {}, f = a.chrome && a.chrome.app && a.chrome.app.runtime,
                g = !f && a.history && a.history.pushState,
                h = l((/android (\d+)/.exec(Gd((a.navigator || {}).userAgent)) || [])[1]),
                i = /Boxee/i.test((a.navigator || {}).userAgent), j = b[0] || {}, k = /^(Moz|webkit|ms)(?=[A-Z])/,
                m = j.body && j.body.style, n = !1, o = !1;
            if (m) {
                for (var p in m)if (d = k.exec(p)) {
                    c = d[0], c = c[0].toUpperCase() + c.substr(1);
                    break
                }
                c || (c = "WebkitOpacity" in m && "webkit"), n = !!("transition" in m || c + "Transition" in m), o = !!("animation" in m || c + "Animation" in m), !h || n && o || (n = v(m.webkitTransition), o = v(m.webkitAnimation))
            }
            return {
                history: !(!g || h < 4 || i), hasEvent: function (a) {
                    if ("input" === a && Kd <= 11)return !1;
                    if (r(e[a])) {
                        var b = j.createElement("div");
                        e[a] = "on" + a in b
                    }
                    return e[a]
                }, csp: $d(), vendorPrefix: c, transitions: n, animations: o, android: h
            }
        }]
    }

    function Ec() {
        var a;
        this.httpOptions = function (b) {
            return b ? (a = b, this) : a
        }, this.$get = ["$templateCache", "$http", "$q", "$sce", function (b, c, d, e) {
            function f(g, h) {
                function i(a) {
                    if (!h)throw wf("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", g, a.status, a.statusText);
                    return d.reject(a)
                }

                f.totalPendingRequests++, v(g) && !r(b.get(g)) || (g = e.getTrustedResourceUrl(g));
                var k = c.defaults && c.defaults.transformResponse;
                return Wd(k) ? k = k.filter(function (a) {
                    return a !== Ab
                }) : k === Ab && (k = null), c.get(g, j({cache: b, transformResponse: k}, a)).finally(function () {
                    f.totalPendingRequests--
                }).then(function (a) {
                    return b.put(g, a.data), a.data
                }, i)
            }

            return f.totalPendingRequests = 0, f
        }]
    }

    function Fc() {
        this.$get = ["$rootScope", "$browser", "$location", function (a, b, c) {
            var e = {};
            return e.findBindings = function (a, b, c) {
                var e = a.getElementsByClassName("ng-binding"), f = [];
                return d(e, function (a) {
                    var e = Ud.element(a).data("$binding");
                    e && d(e, function (d) {
                        if (c) {
                            var e = new RegExp("(^|\\s)" + Zd(b) + "(\\s|\\||$)");
                            e.test(d) && f.push(a)
                        } else d.indexOf(b) != -1 && f.push(a)
                    })
                }), f
            }, e.findModels = function (a, b, c) {
                for (var d = ["ng-", "data-ng-", "ng\\:"], e = 0; e < d.length; ++e) {
                    var f = c ? "=" : "*=", g = "[" + d[e] + "model" + f + '"' + b + '"]', h = a.querySelectorAll(g);
                    if (h.length)return h
                }
            }, e.getLocation = function () {
                return c.url()
            }, e.setLocation = function (b) {
                b !== c.url() && (c.url(b), a.$digest())
            }, e.whenStable = function (a) {
                b.notifyWhenNoOutstandingRequests(a)
            }, e
        }]
    }

    function Gc() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (a, b, c, d, e) {
            function f(f, h, i) {
                y(f) || (i = h, h = f, f = n);
                var j, k = Q(arguments, 3), l = s(i) && !i, m = (l ? d : c).defer(), o = m.promise;
                return j = b.defer(function () {
                    try {
                        m.resolve(f.apply(null, k))
                    } catch (a) {
                        m.reject(a), e(a)
                    } finally {
                        delete g[o.$$timeoutId]
                    }
                    l || a.$apply()
                }, h), o.$$timeoutId = j, g[j] = m, o
            }

            var g = {};
            return f.cancel = function (a) {
                return !!(a && a.$$timeoutId in g) && (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId))
            }, f
        }]
    }

    function Hc(a) {
        var b = a;
        return Kd && (xf.setAttribute("href", b), b = xf.href), xf.setAttribute("href", b), {
            href: xf.href,
            protocol: xf.protocol ? xf.protocol.replace(/:$/, "") : "",
            host: xf.host,
            search: xf.search ? xf.search.replace(/^\?/, "") : "",
            hash: xf.hash ? xf.hash.replace(/^#/, "") : "",
            hostname: xf.hostname,
            port: xf.port,
            pathname: "/" === xf.pathname.charAt(0) ? xf.pathname : "/" + xf.pathname
        }
    }

    function Ic(a) {
        var b = v(a) ? Hc(a) : a;
        return b.protocol === yf.protocol && b.host === yf.host
    }

    function Jc() {
        this.$get = p(a)
    }

    function Kc(a) {
        function b(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
                return a
            }
        }

        var c = a[0] || {}, d = {}, e = "";
        return function () {
            var a, f, g, h, i, j = c.cookie || "";
            if (j !== e)for (e = j, a = e.split("; "), d = {}, g = 0; g < a.length; g++)f = a[g], h = f.indexOf("="), h > 0 && (i = b(f.substring(0, h)), r(d[i]) && (d[i] = b(f.substring(h + 1))));
            return d
        }
    }

    function Lc() {
        this.$get = Kc
    }

    function Mc(a) {
        function b(e, f) {
            if (t(e)) {
                var g = {};
                return d(e, function (a, c) {
                    g[c] = b(c, a)
                }), g
            }
            return a.factory(e + c, f)
        }

        var c = "Filter";
        this.register = b, this.$get = ["$injector", function (a) {
            return function (b) {
                return a.get(b + c)
            }
        }], b("currency", Rc), b("date", ed), b("filter", Nc), b("json", fd), b("limitTo", gd), b("lowercase", Ff), b("number", Sc), b("orderBy", id), b("uppercase", Gf)
    }

    function Nc() {
        return function (a, d, e) {
            if (!c(a)) {
                if (null == a)return a;
                throw b("filter")("notarray", "Expected array but received: {0}", a)
            }
            var f, g, h = Qc(d);
            switch (h) {
                case"function":
                    f = d;
                    break;
                case"boolean":
                case"null":
                case"number":
                case"string":
                    g = !0;
                case"object":
                    f = Oc(d, e, g);
                    break;
                default:
                    return a
            }
            return Array.prototype.filter.call(a, f)
        }
    }

    function Oc(a, b, c) {
        var d, e = t(a) && "$" in a;
        return b === !0 ? b = O : y(b) || (b = function (a, b) {
                return !r(a) && (null === a || null === b ? a === b : !(t(b) || t(a) && !q(a)) && (a = Gd("" + a), b = Gd("" + b), a.indexOf(b) !== -1))
            }), d = function (d) {
            return e && !t(d) ? Pc(d, a.$, b, !1) : Pc(d, a, b, c)
        }
    }

    function Pc(a, b, c, d, e) {
        var f = Qc(a), g = Qc(b);
        if ("string" === g && "!" === b.charAt(0))return !Pc(a, b.substring(1), c, d);
        if (Wd(a))return a.some(function (a) {
            return Pc(a, b, c, d)
        });
        switch (f) {
            case"object":
                var h;
                if (d) {
                    for (h in a)if ("$" !== h.charAt(0) && Pc(a[h], b, c, !0))return !0;
                    return !e && Pc(a, b, c, !1)
                }
                if ("object" === g) {
                    for (h in b) {
                        var i = b[h];
                        if (!y(i) && !r(i)) {
                            var j = "$" === h, k = j ? a : a[h];
                            if (!Pc(k, i, c, j, j))return !1
                        }
                    }
                    return !0
                }
                return c(a, b);
            case"function":
                return !1;
            default:
                return c(a, b)
        }
    }

    function Qc(a) {
        return null === a ? "null" : typeof a
    }

    function Rc(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c, d) {
            return r(c) && (c = b.CURRENCY_SYM), r(d) && (d = b.PATTERNS[1].maxFrac), null == a ? a : Vc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, d).replace(/\u00A4/g, c)
        }
    }

    function Sc(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c) {
            return null == a ? a : Vc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
        }
    }

    function Tc(a) {
        var b, c, d, e, f, g = 0;
        for ((c = a.indexOf(Af)) > -1 && (a = a.replace(Af, "")), (d = a.search(/e/i)) > 0 ? (c < 0 && (c = d), c += +a.slice(d + 1), a = a.substring(0, d)) : c < 0 && (c = a.length), d = 0; a.charAt(d) == Bf; d++);
        if (d == (f = a.length)) b = [0], c = 1; else {
            for (f--; a.charAt(f) == Bf;)f--;
            for (c -= d, b = [], e = 0; d <= f; d++, e++)b[e] = +a.charAt(d)
        }
        return c > zf && (b = b.splice(0, zf - 1), g = c - 1, c = 1), {d: b, e: g, i: c}
    }

    function Uc(a, b, c, d) {
        var e = a.d, f = e.length - a.i;
        b = r(b) ? Math.min(Math.max(c, f), d) : +b;
        var g = b + a.i, h = e[g];
        if (g > 0) {
            e.splice(Math.max(a.i, g));
            for (var i = g; i < e.length; i++)e[i] = 0
        } else {
            f = Math.max(0, f), a.i = 1, e.length = Math.max(1, g = b + 1), e[0] = 0;
            for (var j = 1; j < g; j++)e[j] = 0
        }
        if (h >= 5)if (g - 1 < 0) {
            for (var k = 0; k > g; k--)e.unshift(0), a.i++;
            e.unshift(1), a.i++
        } else e[g - 1]++;
        for (; f < Math.max(0, b); f++)e.push(0);
        var l = e.reduceRight(function (a, b, c, d) {
            return b += a, d[c] = b % 10, Math.floor(b / 10)
        }, 0);
        l && (e.unshift(l), a.i++)
    }

    function Vc(a, b, c, d, e) {
        if (!v(a) && !w(a) || isNaN(a))return "";
        var f, g = !isFinite(a), h = !1, i = Math.abs(a) + "", j = "";
        if (g) j = "∞"; else {
            f = Tc(i), Uc(f, e, b.minFrac, b.maxFrac);
            var k = f.d, l = f.i, m = f.e, n = [];
            for (h = k.reduce(function (a, b) {
                return a && !b
            }, !0); l < 0;)k.unshift(0), l++;
            l > 0 ? n = k.splice(l, k.length) : (n = k, k = [0]);
            var o = [];
            for (k.length >= b.lgSize && o.unshift(k.splice(-b.lgSize, k.length).join("")); k.length > b.gSize;)o.unshift(k.splice(-b.gSize, k.length).join(""));
            k.length && o.unshift(k.join("")), j = o.join(c), n.length && (j += d + n.join("")), m && (j += "e+" + m)
        }
        return a < 0 && !h ? b.negPre + j + b.negSuf : b.posPre + j + b.posSuf
    }

    function Wc(a, b, c, d) {
        var e = "";
        for ((a < 0 || d && a <= 0) && (d ? a = -a + 1 : (a = -a, e = "-")), a = "" + a; a.length < b;)a = Bf + a;
        return c && (a = a.substr(a.length - b)), e + a
    }

    function Xc(a, b, c, d, e) {
        return c = c || 0, function (f) {
            var g = f["get" + a]();
            return (c > 0 || g > -c) && (g += c), 0 === g && c == -12 && (g = 12), Wc(g, b, d, e)
        }
    }

    function Yc(a, b, c) {
        return function (d, e) {
            var f = d["get" + a](), g = (c ? "STANDALONE" : "") + (b ? "SHORT" : ""), h = Hd(g + a);
            return e[h][f]
        }
    }

    function Zc(a, b, c) {
        var d = -1 * c, e = d >= 0 ? "+" : "";
        return e += Wc(Math[d > 0 ? "floor" : "ceil"](d / 60), 2) + Wc(Math.abs(d % 60), 2)
    }

    function $c(a) {
        var b = new Date(a, 0, 1).getDay();
        return new Date(a, 0, (b <= 4 ? 5 : 12) - b)
    }

    function _c(a) {
        return new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay()))
    }

    function ad(a) {
        return function (b) {
            var c = $c(b.getFullYear()), d = _c(b), e = +d - +c, f = 1 + Math.round(e / 6048e5);
            return Wc(f, a)
        }
    }

    function bd(a, b) {
        return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1]
    }

    function cd(a, b) {
        return a.getFullYear() <= 0 ? b.ERAS[0] : b.ERAS[1]
    }

    function dd(a, b) {
        return a.getFullYear() <= 0 ? b.ERANAMES[0] : b.ERANAMES[1]
    }

    function ed(a) {
        function b(a) {
            var b;
            if (b = a.match(c)) {
                var d = new Date(0), e = 0, f = 0, g = b[8] ? d.setUTCFullYear : d.setFullYear,
                    h = b[8] ? d.setUTCHours : d.setHours;
                b[9] && (e = l(b[9] + b[10]), f = l(b[9] + b[11])), g.call(d, l(b[1]), l(b[2]) - 1, l(b[3]));
                var i = l(b[4] || 0) - e, j = l(b[5] || 0) - f, k = l(b[6] || 0),
                    m = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
                return h.call(d, i, j, k, m), d
            }
            return a
        }

        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (c, e, f) {
            var g, h, i = "", j = [];
            if (e = e || "mediumDate", e = a.DATETIME_FORMATS[e] || e, v(c) && (c = Ef.test(c) ? l(c) : b(c)), w(c) && (c = new Date(c)), !x(c) || !isFinite(c.getTime()))return c;
            for (; e;)h = Df.exec(e), h ? (j = P(j, h, 1), e = j.pop()) : (j.push(e), e = null);
            var k = c.getTimezoneOffset();
            return f && (k = V(f, k), c = X(c, f, !0)), d(j, function (b) {
                g = Cf[b], i += g ? g(c, a.DATETIME_FORMATS, k) : "''" === b ? "'" : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), i
        }
    }

    function fd() {
        return function (a, b) {
            return r(b) && (b = 2), T(a, b)
        }
    }

    function gd() {
        return function (a, b, d) {
            return b = Math.abs(Number(b)) === 1 / 0 ? Number(b) : l(b), isNaN(b) ? a : (w(a) && (a = a.toString()), c(a) ? (d = !d || isNaN(d) ? 0 : l(d), d = d < 0 ? Math.max(0, a.length + d) : d, b >= 0 ? hd(a, d, d + b) : 0 === d ? hd(a, b, a.length) : hd(a, Math.max(0, d + b), d)) : a)
        }
    }

    function hd(a, b, c) {
        return v(a) ? a.slice(b, c) : Od.call(a, b, c)
    }

    function id(a) {
        function d(b) {
            return b.map(function (b) {
                var c = 1, d = o;
                if (y(b)) d = b; else if (v(b) && ("+" != b.charAt(0) && "-" != b.charAt(0) || (c = "-" == b.charAt(0) ? -1 : 1, b = b.substring(1)), "" !== b && (d = a(b), d.constant))) {
                    var e = d();
                    d = function (a) {
                        return a[e]
                    }
                }
                return {get: d, descending: c}
            })
        }

        function e(a) {
            switch (typeof a) {
                case"number":
                case"boolean":
                case"string":
                    return !0;
                default:
                    return !1
            }
        }

        function f(a) {
            return y(a.valueOf) && (a = a.valueOf(), e(a)) ? a : q(a) && (a = a.toString(), e(a)) ? a : a
        }

        function g(a, b) {
            var c = typeof a;
            return null === a ? (c = "string", a = "null") : "object" === c && (a = f(a)), {value: a, type: c, index: b}
        }

        function h(a, b) {
            var c = 0, d = a.type, e = b.type;
            if (d === e) {
                var f = a.value, g = b.value;
                "string" === d ? (f = f.toLowerCase(), g = g.toLowerCase()) : "object" === d && (t(f) && (f = a.index), t(g) && (g = b.index)), f !== g && (c = f < g ? -1 : 1)
            } else c = d < e ? -1 : 1;
            return c
        }

        return function (a, e, f, i) {
            function j(a, b) {
                return {
                    value: a,
                    tieBreaker: {value: b, type: "number", index: b},
                    predicateValues: l.map(function (c) {
                        return g(c.get(a), b)
                    })
                }
            }

            function k(a, b) {
                for (var c = 0, d = l.length; c < d; c++) {
                    var e = n(a.predicateValues[c], b.predicateValues[c]);
                    if (e)return e * l[c].descending * m
                }
                return n(a.tieBreaker, b.tieBreaker) * m
            }

            if (null == a)return a;
            if (!c(a))throw b("orderBy")("notarray", "Expected array but received: {0}", a);
            Wd(e) || (e = [e]), 0 === e.length && (e = ["+"]);
            var l = d(e), m = f ? -1 : 1, n = y(i) ? i : h, o = Array.prototype.map.call(a, j);
            return o.sort(k), a = o.map(function (a) {
                return a.value
            })
        }
    }

    function jd(a) {
        return y(a) && (a = {link: a}), a.restrict = a.restrict || "AC", p(a)
    }

    function kd(a, b) {
        a.$name = b
    }

    function ld(a, b, c, e, f) {
        var g = this, h = [];
        g.$error = {}, g.$$success = {}, g.$pending = void 0, g.$name = f(b.name || b.ngForm || "")(c), g.$dirty = !1, g.$pristine = !0, g.$valid = !0, g.$invalid = !1, g.$submitted = !1, g.$$parentForm = Jf, g.$rollbackViewValue = function () {
            d(h, function (a) {
                a.$rollbackViewValue()
            })
        }, g.$commitViewValue = function () {
            d(h, function (a) {
                a.$commitViewValue()
            })
        }, g.$addControl = function (a) {
            la(a.$name, "input"), h.push(a), a.$name && (g[a.$name] = a), a.$$parentForm = g
        }, g.$$renameControl = function (a, b) {
            var c = a.$name;
            g[c] === a && delete g[c], g[b] = a, a.$name = b
        }, g.$removeControl = function (a) {
            a.$name && g[a.$name] === a && delete g[a.$name], d(g.$pending, function (b, c) {
                g.$setValidity(c, null, a)
            }), d(g.$error, function (b, c) {
                g.$setValidity(c, null, a)
            }), d(g.$$success, function (b, c) {
                g.$setValidity(c, null, a)
            }), M(h, a), a.$$parentForm = Jf
        }, Ad({
            ctrl: this, $element: a, set: function (a, b, c) {
                var d = a[b];
                if (d) {
                    var e = d.indexOf(c);
                    e === -1 && d.push(c)
                } else a[b] = [c]
            }, unset: function (a, b, c) {
                var d = a[b];
                d && (M(d, c), 0 === d.length && delete a[b])
            }, $animate: e
        }), g.$setDirty = function () {
            e.removeClass(a, tg), e.addClass(a, ug), g.$dirty = !0, g.$pristine = !1, g.$$parentForm.$setDirty()
        }, g.$setPristine = function () {
            e.setClass(a, tg, ug + " " + Kf), g.$dirty = !1, g.$pristine = !0, g.$submitted = !1, d(h, function (a) {
                a.$setPristine()
            })
        }, g.$setUntouched = function () {
            d(h, function (a) {
                a.$setUntouched()
            })
        }, g.$setSubmitted = function () {
            e.addClass(a, Kf), g.$submitted = !0, g.$$parentForm.$setSubmitted()
        }
    }

    function md(a) {
        a.$formatters.push(function (b) {
            return a.$isEmpty(b) ? b : b.toString()
        })
    }

    function nd(a, b, c, d, e, f) {
        od(a, b, c, d, e, f), md(d)
    }

    function od(a, b, c, d, e, f) {
        var g = Gd(b[0].type);
        if (!e.android) {
            var h = !1;
            b.on("compositionstart", function () {
                h = !0
            }), b.on("compositionend", function () {
                h = !1, j()
            })
        }
        var i, j = function (a) {
            if (i && (f.defer.cancel(i), i = null), !h) {
                var e = b.val(), j = a && a.type;
                "password" === g || c.ngTrim && "false" === c.ngTrim || (e = Yd(e)), (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, j)
            }
        };
        if (e.hasEvent("input")) b.on("input", j); else {
            var k = function (a, b, c) {
                i || (i = f.defer(function () {
                    i = null, b && b.value === c || j(a)
                }))
            };
            b.on("keydown", function (a) {
                var b = a.keyCode;
                91 === b || 15 < b && b < 19 || 37 <= b && b <= 40 || k(a, this, this.value)
            }), e.hasEvent("paste") && b.on("paste cut", k)
        }
        b.on("change", j), Yf[g] && d.$$hasNativeValidators && g === c.type && b.on(Xf, function (a) {
            if (!i) {
                var b = this[Ed], c = b.badInput, d = b.typeMismatch;
                i = f.defer(function () {
                    i = null, b.badInput === c && b.typeMismatch === d || j(a)
                })
            }
        }), d.$render = function () {
            var a = d.$isEmpty(d.$viewValue) ? "" : d.$viewValue;
            b.val() !== a && b.val(a)
        }
    }

    function pd(a, b) {
        if (x(a))return a;
        if (v(a)) {
            Uf.lastIndex = 0;
            var c = Uf.exec(a);
            if (c) {
                var d = +c[1], e = +c[2], f = 0, g = 0, h = 0, i = 0, j = $c(d), k = 7 * (e - 1);
                return b && (f = b.getHours(), g = b.getMinutes(), h = b.getSeconds(), i = b.getMilliseconds()), new Date(d, 0, j.getDate() + k, f, g, h, i)
            }
        }
        return NaN
    }

    function qd(a, b) {
        return function (c, e) {
            var f, g;
            if (x(c))return c;
            if (v(c)) {
                if ('"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1)), Of.test(c))return new Date(c);
                if (a.lastIndex = 0, f = a.exec(c))return f.shift(), g = e ? {
                    yyyy: e.getFullYear(),
                    MM: e.getMonth() + 1,
                    dd: e.getDate(),
                    HH: e.getHours(),
                    mm: e.getMinutes(),
                    ss: e.getSeconds(),
                    sss: e.getMilliseconds() / 1e3
                } : {yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0}, d(f, function (a, c) {
                    c < b.length && (g[b[c]] = +a)
                }), new Date(g.yyyy, g.MM - 1, g.dd, g.HH, g.mm, g.ss || 0, 1e3 * g.sss || 0)
            }
            return NaN
        }
    }

    function rd(a, b, c, d) {
        return function (e, f, g, h, i, j, k) {
            function l(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime())
            }

            function m(a) {
                return s(a) && !x(a) ? c(a) || void 0 : a
            }

            sd(e, f, g, h), od(e, f, g, h, i, j);
            var n, o = h && h.$options && h.$options.timezone;
            if (h.$$parserName = a, h.$parsers.push(function (a) {
                    if (h.$isEmpty(a))return null;
                    if (b.test(a)) {
                        var d = c(a, n);
                        return o && (d = X(d, o)), d
                    }
                }), h.$formatters.push(function (a) {
                    if (a && !x(a))throw Ag("datefmt", "Expected `{0}` to be a date", a);
                    return l(a) ? (n = a, n && o && (n = X(n, o, !0)), k("date")(a, d, o)) : (n = null, "")
                }), s(g.min) || g.ngMin) {
                var p;
                h.$validators.min = function (a) {
                    return !l(a) || r(p) || c(a) >= p
                }, g.$observe("min", function (a) {
                    p = m(a), h.$validate()
                })
            }
            if (s(g.max) || g.ngMax) {
                var q;
                h.$validators.max = function (a) {
                    return !l(a) || r(q) || c(a) <= q
                }, g.$observe("max", function (a) {
                    q = m(a), h.$validate()
                })
            }
        }
    }

    function sd(a, b, c, d) {
        var e = b[0], f = d.$$hasNativeValidators = t(e.validity);
        f && d.$parsers.push(function (a) {
            var c = b.prop(Ed) || {};
            return c.badInput || c.typeMismatch ? void 0 : a
        })
    }

    function td(a, b, c, d, e, f) {
        if (sd(a, b, c, d), od(a, b, c, d, e, f), d.$$parserName = "number", d.$parsers.push(function (a) {
                return d.$isEmpty(a) ? null : Rf.test(a) ? parseFloat(a) : void 0
            }), d.$formatters.push(function (a) {
                if (!d.$isEmpty(a)) {
                    if (!w(a))throw Ag("numfmt", "Expected `{0}` to be a number", a);
                    a = a.toString()
                }
                return a
            }), s(c.min) || c.ngMin) {
            var g;
            d.$validators.min = function (a) {
                return d.$isEmpty(a) || r(g) || a >= g
            }, c.$observe("min", function (a) {
                s(a) && !w(a) && (a = parseFloat(a, 10)), g = w(a) && !isNaN(a) ? a : void 0, d.$validate()
            })
        }
        if (s(c.max) || c.ngMax) {
            var h;
            d.$validators.max = function (a) {
                return d.$isEmpty(a) || r(h) || a <= h
            }, c.$observe("max", function (a) {
                s(a) && !w(a) && (a = parseFloat(a, 10)), h = w(a) && !isNaN(a) ? a : void 0, d.$validate()
            })
        }
    }

    function ud(a, b, c, d, e, f) {
        od(a, b, c, d, e, f), md(d), d.$$parserName = "url", d.$validators.url = function (a, b) {
            var c = a || b;
            return d.$isEmpty(c) || Pf.test(c)
        }
    }

    function vd(a, b, c, d, e, f) {
        od(a, b, c, d, e, f), md(d), d.$$parserName = "email", d.$validators.email = function (a, b) {
            var c = a || b;
            return d.$isEmpty(c) || Qf.test(c)
        }
    }

    function wd(a, b, c, d) {
        r(c.name) && b.attr("name", g());
        var e = function (a) {
            b[0].checked && d.$setViewValue(c.value, a && a.type)
        };
        b.on("click", e), d.$render = function () {
            var a = c.value;
            b[0].checked = a == d.$viewValue
        }, c.$observe("value", d.$render)
    }

    function xd(a, b, c, d, e) {
        var f;
        if (s(d)) {
            if (f = a(d), !f.constant)throw Ag("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", c, d);
            return f(b)
        }
        return e
    }

    function yd(a, b, c, d, e, f, g, h) {
        var i = xd(h, a, "ngTrueValue", c.ngTrueValue, !0), j = xd(h, a, "ngFalseValue", c.ngFalseValue, !1),
            k = function (a) {
                d.$setViewValue(b[0].checked, a && a.type)
            };
        b.on("click", k), d.$render = function () {
            b[0].checked = d.$viewValue
        }, d.$isEmpty = function (a) {
            return a === !1
        }, d.$formatters.push(function (a) {
            return O(a, i)
        }), d.$parsers.push(function (a) {
            return a ? i : j
        })
    }

    function zd(a, b) {
        return a = "ngClass" + a, ["$animate", function (c) {
            function e(a, b) {
                var c = [];
                a:for (var d = 0; d < a.length; d++) {
                    for (var e = a[d], f = 0; f < b.length; f++)if (e == b[f])continue a;
                    c.push(e)
                }
                return c
            }

            function f(a) {
                var b = [];
                return Wd(a) ? (d(a, function (a) {
                    b = b.concat(f(a))
                }), b) : v(a) ? a.split(" ") : t(a) ? (d(a, function (a, c) {
                    a && (b = b.concat(c.split(" ")))
                }), b) : a
            }

            return {
                restrict: "AC", link: function (g, h, i) {
                    function j(a) {
                        var b = l(a, 1);
                        i.$addClass(b)
                    }

                    function k(a) {
                        var b = l(a, -1);
                        i.$removeClass(b)
                    }

                    function l(a, b) {
                        var c = h.data("$classCounts") || oa(), e = [];
                        return d(a, function (a) {
                            (b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === +(b > 0) && e.push(a))
                        }), h.data("$classCounts", c), e.join(" ")
                    }

                    function m(a, b) {
                        var d = e(b, a), f = e(a, b);
                        d = l(d, 1), f = l(f, -1), d && d.length && c.addClass(h, d), f && f.length && c.removeClass(h, f)
                    }

                    function n(a) {
                        if (b === !0 || (1 & g.$index) === b) {
                            var c = f(a || []);
                            if (o) {
                                if (!O(a, o)) {
                                    var d = f(o);
                                    m(d, c)
                                }
                            } else j(c)
                        }
                        o = Wd(a) ? a.map(function (a) {
                            return qa(a)
                        }) : qa(a)
                    }

                    var o;
                    g.$watch(i[a], n, !0), i.$observe("class", function (b) {
                        n(g.$eval(i[a]))
                    }), "ngClass" !== a && g.$watch("$index", function (c, d) {
                        var e = 1 & c;
                        if (e !== (1 & d)) {
                            var h = f(g.$eval(i[a]));
                            e === b ? j(h) : k(h)
                        }
                    })
                }
            }
        }]
    }

    function Ad(a) {
        function b(a, b, h) {
            r(b) ? c("$pending", a, h) : d("$pending", a, h), F(b) ? b ? (k(g.$error, a, h), j(g.$$success, a, h)) : (j(g.$error, a, h), k(g.$$success, a, h)) : (k(g.$error, a, h), k(g.$$success, a, h)), g.$pending ? (e(xg, !0), g.$valid = g.$invalid = void 0, f("", null)) : (e(xg, !1), g.$valid = Bd(g.$error), g.$invalid = !g.$valid, f("", g.$valid));
            var i;
            i = g.$pending && g.$pending[a] ? void 0 : !g.$error[a] && (!!g.$$success[a] || null), f(a, i), g.$$parentForm.$setValidity(a, i, g)
        }

        function c(a, b, c) {
            g[a] || (g[a] = {}), j(g[a], b, c)
        }

        function d(a, b, c) {
            g[a] && k(g[a], b, c), Bd(g[a]) && (g[a] = void 0)
        }

        function e(a, b) {
            b && !i[a] ? (l.addClass(h, a), i[a] = !0) : !b && i[a] && (l.removeClass(h, a), i[a] = !1)
        }

        function f(a, b) {
            a = a ? "-" + ha(a, "-") : "", e(rg + a, b === !0), e(sg + a, b === !1)
        }

        var g = a.ctrl, h = a.$element, i = {}, j = a.set, k = a.unset, l = a.$animate;
        i[sg] = !(i[rg] = h.hasClass(rg)), g.$setValidity = b
    }

    function Bd(a) {
        if (a)for (var b in a)if (a.hasOwnProperty(b))return !1;
        return !0
    }

    function Cd(a) {
        a[0].hasAttribute("selected") && (a[0].selected = !0)
    }

    var Dd = /^\/(.+)\/([a-z]*)$/, Ed = "validity", Fd = Object.prototype.hasOwnProperty, Gd = function (a) {
        return v(a) ? a.toLowerCase() : a
    }, Hd = function (a) {
        return v(a) ? a.toUpperCase() : a
    }, Id = function (a) {
        return v(a) ? a.replace(/[A-Z]/g, function (a) {
            return String.fromCharCode(32 | a.charCodeAt(0))
        }) : a
    }, Jd = function (a) {
        return v(a) ? a.replace(/[a-z]/g, function (a) {
            return String.fromCharCode(a.charCodeAt(0) & -33)
        }) : a
    };
    "i" !== "I".toLowerCase() && (Gd = Id, Hd = Jd);
    var Kd, Ld, Md, Nd, Od = [].slice, Pd = [].splice, Qd = [].push, Rd = Object.prototype.toString,
        Sd = Object.getPrototypeOf, Td = b("ng"), Ud = a.angular || (a.angular = {}), Vd = 0;
    Kd = a.document.documentMode, n.$inject = [], o.$inject = [];
    var Wd = Array.isArray,
        Xd = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
        Yd = function (a) {
            return v(a) ? a.trim() : a
        }, Zd = function (a) {
            return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        }, $d = function () {
            function b() {
                try {
                    return new Function(""), !1
                } catch (a) {
                    return !0
                }
            }

            if (!s($d.rules)) {
                var c = a.document.querySelector("[ng-csp]") || a.document.querySelector("[data-ng-csp]");
                if (c) {
                    var d = c.getAttribute("ng-csp") || c.getAttribute("data-ng-csp");
                    $d.rules = {
                        noUnsafeEval: !d || d.indexOf("no-unsafe-eval") !== -1,
                        noInlineStyle: !d || d.indexOf("no-inline-style") !== -1
                    }
                } else $d.rules = {noUnsafeEval: b(), noInlineStyle: !1}
            }
            return $d.rules
        }, _d = function () {
            if (s(_d.name_))return _d.name_;
            var b, c, d, e, f = be.length;
            for (c = 0; c < f; ++c)if (d = be[c], b = a.document.querySelector("[" + d.replace(":", "\\:") + "jq]")) {
                e = b.getAttribute(d + "jq");
                break
            }
            return _d.name_ = e
        }, ae = /:/g, be = ["ng-", "data-ng-", "ng:", "x-ng-"], ce = /[A-Z]/g, de = !1, ee = 1, fe = 2, ge = 3, he = 8,
        ie = 9, je = 11, ke = {full: "1.5.7", major: 1, minor: 5, dot: 7, codeName: "hexagonal-circumvolution"};
    Da.expando = "ng339";
    var le = Da.cache = {}, me = 1, ne = function (a, b, c) {
        a.addEventListener(b, c, !1)
    }, oe = function (a, b, c) {
        a.removeEventListener(b, c, !1)
    };
    Da._data = function (a) {
        return this.cache[a[this.expando]] || {}
    };
    var pe = /([\:\-\_]+(.))/g, qe = /^moz([A-Z])/, re = {mouseleave: "mouseout", mouseenter: "mouseover"},
        se = b("jqLite"), te = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, ue = /<|&#?\w+;/, ve = /<([\w:-]+)/,
        we = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, xe = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    xe.optgroup = xe.option, xe.tbody = xe.tfoot = xe.colgroup = xe.caption = xe.thead, xe.th = xe.td;
    var ye = a.Node.prototype.contains || function (a) {
            return !!(16 & this.compareDocumentPosition(a))
        }, ze = Da.prototype = {
        ready: function (b) {
            function c() {
                d || (d = !0, b())
            }

            var d = !1;
            "complete" === a.document.readyState ? a.setTimeout(c) : (this.on("DOMContentLoaded", c), Da(a).on("load", c))
        }, toString: function () {
            var a = [];
            return d(this, function (b) {
                a.push("" + b)
            }), "[" + a.join(", ") + "]"
        }, eq: function (a) {
            return Ld(a >= 0 ? this[a] : this[this.length + a])
        }, length: 0, push: Qd, sort: [].sort, splice: [].splice
    }, Ae = {};
    d("multiple,selected,checked,disabled,readOnly,required,open".split(","), function (a) {
        Ae[Gd(a)] = a
    });
    var Be = {};
    d("input,select,option,textarea,button,form,details".split(","), function (a) {
        Be[a] = !0
    });
    var Ce = {ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern"};
    d({data: Ja, removeData: Ha, hasData: ya, cleanData: za}, function (a, b) {
        Da[b] = a
    }), d({
        data: Ja, inheritedData: Pa, scope: function (a) {
            return Ld.data(a, "$scope") || Pa(a.parentNode || a, ["$isolateScope", "$scope"])
        }, isolateScope: function (a) {
            return Ld.data(a, "$isolateScope") || Ld.data(a, "$isolateScopeNoTemplate")
        }, controller: Oa, injector: function (a) {
            return Pa(a, "$injector")
        }, removeAttr: function (a, b) {
            a.removeAttribute(b)
        }, hasClass: Ka, css: function (a, b, c) {
            return b = va(b), s(c) ? void(a.style[b] = c) : a.style[b]
        }, attr: function (a, b, c) {
            var d = a.nodeType;
            if (d !== ge && d !== fe && d !== he) {
                var e = Gd(b);
                if (Ae[e]) {
                    if (!s(c))return a[b] || (a.attributes.getNamedItem(b) || n).specified ? e : void 0;
                    c ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e))
                } else if (s(c)) a.setAttribute(b, c); else if (a.getAttribute) {
                    var f = a.getAttribute(b, 2);
                    return null === f ? void 0 : f
                }
            }
        }, prop: function (a, b, c) {
            return s(c) ? void(a[b] = c) : a[b]
        }, text: function () {
            function a(a, b) {
                if (r(b)) {
                    var c = a.nodeType;
                    return c === ee || c === ge ? a.textContent : ""
                }
                a.textContent = b
            }

            return a.$dv = "", a
        }(), val: function (a, b) {
            if (r(b)) {
                if (a.multiple && "select" === L(a)) {
                    var c = [];
                    return d(a.options, function (a) {
                        a.selected && c.push(a.value || a.text)
                    }), 0 === c.length ? null : c
                }
                return a.value
            }
            a.value = b
        }, html: function (a, b) {
            return r(b) ? a.innerHTML : (Fa(a, !0), void(a.innerHTML = b))
        }, empty: Qa
    }, function (a, b) {
        Da.prototype[b] = function (b, c) {
            var d, e, f = this.length;
            if (a !== Qa && r(2 == a.length && a !== Ka && a !== Oa ? b : c)) {
                if (t(b)) {
                    for (d = 0; d < f; d++)if (a === Ja) a(this[d], b); else for (e in b)a(this[d], e, b[e]);
                    return this
                }
                for (var g = a.$dv, h = r(g) ? Math.min(f, 1) : f, i = 0; i < h; i++) {
                    var j = a(this[i], b, c);
                    g = g ? g + j : j
                }
                return g
            }
            for (d = 0; d < f; d++)a(this[d], b, c);
            return this
        }
    }), d({
        removeData: Ha, on: function (a, b, c, d) {
            if (s(d))throw se("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            if (xa(a)) {
                var e = Ia(a, !0), f = e.events, g = e.handle;
                g || (g = e.handle = Va(a, f));
                for (var h = b.indexOf(" ") >= 0 ? b.split(" ") : [b], i = h.length, j = function (b, d, e) {
                    var h = f[b];
                    h || (h = f[b] = [], h.specialHandlerWrapper = d, "$destroy" === b || e || ne(a, b, g)), h.push(c)
                }; i--;)b = h[i], re[b] ? (j(re[b], Xa), j(b, void 0, !0)) : j(b)
            }
        }, off: Ga, one: function (a, b, c) {
            a = Ld(a), a.on(b, function d() {
                a.off(b, c), a.off(b, d)
            }), a.on(b, c)
        }, replaceWith: function (a, b) {
            var c, e = a.parentNode;
            Fa(a), d(new Da(b), function (b) {
                c ? e.insertBefore(b, c.nextSibling) : e.replaceChild(b, a), c = b
            })
        }, children: function (a) {
            var b = [];
            return d(a.childNodes, function (a) {
                a.nodeType === ee && b.push(a)
            }), b
        }, contents: function (a) {
            return a.contentDocument || a.childNodes || []
        }, append: function (a, b) {
            var c = a.nodeType;
            if (c === ee || c === je) {
                b = new Da(b);
                for (var d = 0, e = b.length; d < e; d++) {
                    var f = b[d];
                    a.appendChild(f)
                }
            }
        }, prepend: function (a, b) {
            if (a.nodeType === ee) {
                var c = a.firstChild;
                d(new Da(b), function (b) {
                    a.insertBefore(b, c)
                })
            }
        }, wrap: function (a, b) {
            Ca(a, Ld(b).eq(0).clone()[0])
        }, remove: Ra, detach: function (a) {
            Ra(a, !0)
        }, after: function (a, b) {
            var c = a, d = a.parentNode;
            b = new Da(b);
            for (var e = 0, f = b.length; e < f; e++) {
                var g = b[e];
                d.insertBefore(g, c.nextSibling), c = g
            }
        }, addClass: Ma, removeClass: La, toggleClass: function (a, b, c) {
            b && d(b.split(" "), function (b) {
                var d = c;
                r(d) && (d = !Ka(a, b)), (d ? Ma : La)(a, b)
            })
        }, parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== je ? b : null
        }, next: function (a) {
            return a.nextElementSibling
        }, find: function (a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : []
        }, clone: Ea, triggerHandler: function (a, b, c) {
            var e, f, g, h = b.type || b, i = Ia(a), k = i && i.events, l = k && k[h];
            l && (e = {
                preventDefault: function () {
                    this.defaultPrevented = !0
                }, isDefaultPrevented: function () {
                    return this.defaultPrevented === !0
                }, stopImmediatePropagation: function () {
                    this.immediatePropagationStopped = !0
                }, isImmediatePropagationStopped: function () {
                    return this.immediatePropagationStopped === !0
                }, stopPropagation: n, type: h, target: a
            }, b.type && (e = j(e, b)), f = qa(l), g = c ? [e].concat(c) : [e], d(f, function (b) {
                e.isImmediatePropagationStopped() || b.apply(a, g)
            }))
        }
    }, function (a, b) {
        Da.prototype[b] = function (b, c, d) {
            for (var e, f = 0, g = this.length; f < g; f++)r(e) ? (e = a(this[f], b, c, d), s(e) && (e = Ld(e))) : Na(e, a(this[f], b, c, d));
            return s(e) ? e : this
        }, Da.prototype.bind = Da.prototype.on, Da.prototype.unbind = Da.prototype.off
    }), $a.prototype = {
        put: function (a, b) {
            this[Za(a, this.nextUid)] = b
        }, get: function (a) {
            return this[Za(a, this.nextUid)]
        }, remove: function (a) {
            var b = this[a = Za(a, this.nextUid)];
            return delete this[a], b
        }
    };
    var De = [function () {
            this.$get = [function () {
                return $a
            }]
        }], Ee = /^([^\(]+?)=>/, Fe = /^[^\(]*\(\s*([^\)]*)\)/m, Ge = /,/, He = /^\s*(_?)(\S+?)\1\s*$/,
        Ie = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Je = b("$injector");
    db.$$annotate = cb;
    var Ke = b("$animate"), Le = 1, Me = "ng-animate", Ne = function () {
        this.$get = n
    }, Oe = function () {
        var a = new $a, b = [];
        this.$get = ["$$AnimateRunner", "$rootScope", function (c, e) {
            function f(a, b, c) {
                var e = !1;
                return b && (b = v(b) ? b.split(" ") : Wd(b) ? b : [], d(b, function (b) {
                    b && (e = !0, a[b] = c)
                })), e
            }

            function g() {
                d(b, function (b) {
                    var c = a.get(b);
                    if (c) {
                        var e = hb(b.attr("class")), f = "", g = "";
                        d(c, function (a, b) {
                            var c = !!e[b];
                            a !== c && (a ? f += (f.length ? " " : "") + b : g += (g.length ? " " : "") + b)
                        }), d(b, function (a) {
                            f && Ma(a, f), g && La(a, g)
                        }), a.remove(b)
                    }
                }), b.length = 0
            }

            function h(c, d, h) {
                var i = a.get(c) || {}, j = f(i, d, !0), k = f(i, h, !1);
                (j || k) && (a.put(c, i), b.push(c), 1 === b.length && e.$$postDigest(g))
            }

            return {
                enabled: n, on: n, off: n, pin: n, push: function (a, b, d, e) {
                    e && e(), d = d || {}, d.from && a.css(d.from), d.to && a.css(d.to), (d.addClass || d.removeClass) && h(a, d.addClass, d.removeClass);
                    var f = new c;
                    return f.complete(), f
                }
            }
        }]
    }, Pe = ["$provide", function (a) {
        var b = this;
        this.$$registeredAnimations = Object.create(null), this.register = function (c, d) {
            if (c && "." !== c.charAt(0))throw Ke("notcsel", "Expecting class selector starting with '.' got '{0}'.", c);
            var e = c + "-animation";
            b.$$registeredAnimations[c.substr(1)] = e, a.factory(e, d)
        }, this.classNameFilter = function (a) {
            if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null, this.$$classNameFilter)) {
                var b = new RegExp("(\\s+|\\/)" + Me + "(\\s+|\\/)");
                if (b.test(this.$$classNameFilter.toString()))throw Ke("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', Me)
            }
            return this.$$classNameFilter
        }, this.$get = ["$$animateQueue", function (a) {
            function b(a, b, c) {
                if (c) {
                    var d = gb(c);
                    !d || d.parentNode || d.previousElementSibling || (c = null)
                }
                c ? c.after(a) : b.prepend(a)
            }

            return {
                on: a.on, off: a.off, pin: a.pin, enabled: a.enabled, cancel: function (a) {
                    a.end && a.end()
                }, enter: function (c, d, e, f) {
                    return d = d && Ld(d), e = e && Ld(e), d = d || e.parent(), b(c, d, e), a.push(c, "enter", ib(f))
                }, move: function (c, d, e, f) {
                    return d = d && Ld(d), e = e && Ld(e), d = d || e.parent(), b(c, d, e), a.push(c, "move", ib(f))
                }, leave: function (b, c) {
                    return a.push(b, "leave", ib(c), function () {
                        b.remove()
                    })
                }, addClass: function (b, c, d) {
                    return d = ib(d), d.addClass = fb(d.addclass, c), a.push(b, "addClass", d)
                }, removeClass: function (b, c, d) {
                    return d = ib(d), d.removeClass = fb(d.removeClass, c), a.push(b, "removeClass", d)
                }, setClass: function (b, c, d, e) {
                    return e = ib(e), e.addClass = fb(e.addClass, c), e.removeClass = fb(e.removeClass, d), a.push(b, "setClass", e)
                }, animate: function (b, c, d, e, f) {
                    return f = ib(f), f.from = f.from ? j(f.from, c) : c, f.to = f.to ? j(f.to, d) : d, e = e || "ng-inline-animate", f.tempClasses = fb(f.tempClasses, e), a.push(b, "animate", f)
                }
            }
        }]
    }], Qe = function () {
        this.$get = ["$$rAF", function (a) {
            function b(b) {
                c.push(b), c.length > 1 || a(function () {
                    for (var a = 0; a < c.length; a++)c[a]();
                    c = []
                })
            }

            var c = [];
            return function () {
                var a = !1;
                return b(function () {
                    a = !0
                }), function (c) {
                    a ? c() : b(c)
                }
            }
        }]
    }, Re = function () {
        this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function (a, b, c, e, f) {
            function g(a) {
                this.setHost(a);
                var b = c(), d = function (a) {
                    f(a, 0, !1)
                };
                this._doneCallbacks = [], this._tick = function (a) {
                    var c = e[0];
                    c && c.hidden ? d(a) : b(a)
                }, this._state = 0
            }

            var h = 0, i = 1, j = 2;
            return g.chain = function (a, b) {
                function c() {
                    return d === a.length ? void b(!0) : void a[d](function (a) {
                        return a === !1 ? void b(!1) : (d++, void c())
                    })
                }

                var d = 0;
                c()
            }, g.all = function (a, b) {
                function c(c) {
                    f = f && c, ++e === a.length && b(f)
                }

                var e = 0, f = !0;
                d(a, function (a) {
                    a.done(c)
                })
            }, g.prototype = {
                setHost: function (a) {
                    this.host = a || {}
                }, done: function (a) {
                    this._state === j ? a() : this._doneCallbacks.push(a)
                }, progress: n, getPromise: function () {
                    if (!this.promise) {
                        var b = this;
                        this.promise = a(function (a, c) {
                            b.done(function (b) {
                                b === !1 ? c() : a()
                            })
                        })
                    }
                    return this.promise
                }, then: function (a, b) {
                    return this.getPromise().then(a, b)
                }, catch: function (a) {
                    return this.getPromise().catch(a)
                }, finally: function (a) {
                    return this.getPromise().finally(a)
                }, pause: function () {
                    this.host.pause && this.host.pause()
                }, resume: function () {
                    this.host.resume && this.host.resume()
                }, end: function () {
                    this.host.end && this.host.end(), this._resolve(!0)
                }, cancel: function () {
                    this.host.cancel && this.host.cancel(), this._resolve(!1)
                }, complete: function (a) {
                    var b = this;
                    b._state === h && (b._state = i, b._tick(function () {
                        b._resolve(a)
                    }))
                }, _resolve: function (a) {
                    this._state !== j && (d(this._doneCallbacks, function (b) {
                        b(a)
                    }), this._doneCallbacks.length = 0, this._state = j)
                }
            }, g
        }]
    }, Se = function () {
        this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (a, b, c) {
            return function (b, d) {
                function e() {
                    return a(function () {
                        f(), h || i.complete(), h = !0
                    }), i
                }

                function f() {
                    g.addClass && (b.addClass(g.addClass), g.addClass = null), g.removeClass && (b.removeClass(g.removeClass), g.removeClass = null), g.to && (b.css(g.to), g.to = null)
                }

                var g = d || {};
                g.$$prepared || (g = N(g)), g.cleanupStyles && (g.from = g.to = null), g.from && (b.css(g.from), g.from = null);
                var h, i = new c;
                return {start: e, end: e}
            }
        }]
    }, Te = b("$compile"), Ue = new nb;
    ob.$inject = ["$provide", "$$sanitizeUriProvider"], pb.prototype.isFirstChange = function () {
        return this.previousValue === Ue
    };
    var Ve = /^((?:x|data)[\:\-_])/i, We = b("$controller"), Xe = /^(\S+)(\s+as\s+([\w$]+))?$/, Ye = function () {
            this.$get = ["$document", function (a) {
                return function (b) {
                    return b ? !b.nodeType && b instanceof Ld && (b = b[0]) : b = a[0].body, b.offsetWidth + 1
                }
            }]
        }, Ze = "application/json", $e = {"Content-Type": Ze + ";charset=utf-8"}, _e = /^\[|^\{(?!\{)/,
        af = {"[": /]$/, "{": /}$/}, bf = /^\)\]\}',?\n/, cf = b("$http"), df = function (a) {
            return function () {
                throw cf("legacy", "The method `{0}` on the promise returned from `$http` has been disabled.", a)
            }
        }, ef = Ud.$interpolateMinErr = b("$interpolate");
    ef.throwNoconcat = function (a) {
        throw ef("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", a)
    }, ef.interr = function (a, b) {
        return ef("interr", "Can't interpolate: {0}\n{1}", a, b.toString())
    };
    var ff = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, gf = {http: 80, https: 443, ftp: 21}, hf = b("$location"), jf = {
        $$absUrl: "", $$html5: !1, $$replace: !1, absUrl: Yb("$$absUrl"), url: function (a) {
            if (r(a))return this.$$url;
            var b = ff.exec(a);
            return (b[1] || "" === a) && this.path(decodeURIComponent(b[1])), (b[2] || b[1] || "" === a) && this.search(b[3] || ""), this.hash(b[5] || ""), this
        }, protocol: Yb("$$protocol"), host: Yb("$$host"), port: Yb("$$port"), path: Zb("$$path", function (a) {
            return a = null !== a ? a.toString() : "", "/" == a.charAt(0) ? a : "/" + a
        }), search: function (a, b) {
            switch (arguments.length) {
                case 0:
                    return this.$$search;
                case 1:
                    if (v(a) || w(a)) a = a.toString(), this.$$search = $(a); else {
                        if (!t(a))throw hf("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                        a = N(a, {}), d(a, function (b, c) {
                            null == b && delete a[c]
                        }), this.$$search = a
                    }
                    break;
                default:
                    r(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
            }
            return this.$$compose(), this
        }, hash: Zb("$$hash", function (a) {
            return null !== a ? a.toString() : ""
        }), replace: function () {
            return this.$$replace = !0, this
        }
    };
    d([Xb, Wb, Vb], function (a) {
        a.prototype = Object.create(jf), a.prototype.state = function (b) {
            if (!arguments.length)return this.$$state;
            if (a !== Vb || !this.$$html5)throw hf("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
            return this.$$state = r(b) ? null : b, this
        }
    });
    var kf = b("$parse"), lf = Function.prototype.call, mf = Function.prototype.apply, nf = Function.prototype.bind,
        of = oa();
    d("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
        of[a] = !0
    });
    var pf = {n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"'}, qf = function (a) {
        this.options = a
    };
    qf.prototype = {
        constructor: qf, lex: function (a) {
            for (this.text = a, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                var b = this.text.charAt(this.index);
                if ('"' === b || "'" === b) this.readString(b); else if (this.isNumber(b) || "." === b && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent(); else if (this.is(b, "(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: b
                }), this.index++; else if (this.isWhitespace(b)) this.index++; else {
                    var c = b + this.peek(), d = c + this.peek(2), e = of[b], f = of[c], g = of[d];
                    if (e || f || g) {
                        var h = g ? d : f ? c : b;
                        this.tokens.push({index: this.index, text: h, operator: !0}), this.index += h.length
                    } else this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
            }
            return this.tokens
        }, is: function (a, b) {
            return b.indexOf(a) !== -1
        }, peek: function (a) {
            var b = a || 1;
            return this.index + b < this.text.length && this.text.charAt(this.index + b)
        }, isNumber: function (a) {
            return "0" <= a && a <= "9" && "string" == typeof a
        }, isWhitespace: function (a) {
            return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || " " === a
        }, isIdentifierStart: function (a) {
            return this.options.isIdentifierStart ? this.options.isIdentifierStart(a, this.codePointAt(a)) : this.isValidIdentifierStart(a)
        }, isValidIdentifierStart: function (a) {
            return "a" <= a && a <= "z" || "A" <= a && a <= "Z" || "_" === a || "$" === a
        }, isIdentifierContinue: function (a) {
            return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(a, this.codePointAt(a)) : this.isValidIdentifierContinue(a)
        }, isValidIdentifierContinue: function (a, b) {
            return this.isValidIdentifierStart(a, b) || this.isNumber(a)
        }, codePointAt: function (a) {
            return 1 === a.length ? a.charCodeAt(0) : (a.charCodeAt(0) << 10) + a.charCodeAt(1) - 56613888
        }, peekMultichar: function () {
            var a = this.text.charAt(this.index), b = this.peek();
            if (!b)return a;
            var c = a.charCodeAt(0), d = b.charCodeAt(0);
            return c >= 55296 && c <= 56319 && d >= 56320 && d <= 57343 ? a + b : a
        }, isExpOperator: function (a) {
            return "-" === a || "+" === a || this.isNumber(a)
        }, throwError: function (a, b, c) {
            c = c || this.index;
            var d = s(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c;
            throw kf("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text)
        }, readNumber: function () {
            for (var a = "", b = this.index; this.index < this.text.length;) {
                var c = Gd(this.text.charAt(this.index));
                if ("." == c || this.isNumber(c)) a += c; else {
                    var d = this.peek();
                    if ("e" == c && this.isExpOperator(d)) a += c; else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1)) a += c; else {
                        if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1))break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            this.tokens.push({index: b, text: a, constant: !0, value: Number(a)})
        }, readIdent: function () {
            var a = this.index;
            for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
                var b = this.peekMultichar();
                if (!this.isIdentifierContinue(b))break;
                this.index += b.length
            }
            this.tokens.push({index: a, text: this.text.slice(a, this.index), identifier: !0})
        }, readString: function (a) {
            var b = this.index;
            this.index++;
            for (var c = "", d = a, e = !1; this.index < this.text.length;) {
                var f = this.text.charAt(this.index);
                if (d += f, e) {
                    if ("u" === f) {
                        var g = this.text.substring(this.index + 1, this.index + 5);
                        g.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + g + "]"), this.index += 4, c += String.fromCharCode(parseInt(g, 16))
                    } else {
                        var h = pf[f];
                        c += h || f
                    }
                    e = !1
                } else if ("\\" === f) e = !0; else {
                    if (f === a)return this.index++, void this.tokens.push({index: b, text: d, constant: !0, value: c});
                    c += f
                }
                this.index++
            }
            this.throwError("Unterminated quote", b)
        }
    };
    var rf = function (a, b) {
        this.lexer = a, this.options = b
    };
    rf.Program = "Program", rf.ExpressionStatement = "ExpressionStatement", rf.AssignmentExpression = "AssignmentExpression", rf.ConditionalExpression = "ConditionalExpression", rf.LogicalExpression = "LogicalExpression", rf.BinaryExpression = "BinaryExpression", rf.UnaryExpression = "UnaryExpression", rf.CallExpression = "CallExpression", rf.MemberExpression = "MemberExpression", rf.Identifier = "Identifier", rf.Literal = "Literal", rf.ArrayExpression = "ArrayExpression", rf.Property = "Property", rf.ObjectExpression = "ObjectExpression", rf.ThisExpression = "ThisExpression", rf.LocalsExpression = "LocalsExpression", rf.NGValueParameter = "NGValueParameter", rf.prototype = {
        ast: function (a) {
            this.text = a, this.tokens = this.lexer.lex(a);
            var b = this.program();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), b
        }, program: function () {
            for (var a = []; ;)if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";"))return {
                type: rf.Program,
                body: a
            }
        }, expressionStatement: function () {
            return {type: rf.ExpressionStatement, expression: this.filterChain()}
        }, filterChain: function () {
            for (var a, b = this.expression(); a = this.expect("|");)b = this.filter(b);
            return b
        }, expression: function () {
            return this.assignment()
        }, assignment: function () {
            var a = this.ternary();
            return this.expect("=") && (a = {
                type: rf.AssignmentExpression,
                left: a,
                right: this.assignment(),
                operator: "="
            }), a
        }, ternary: function () {
            var a, b, c = this.logicalOR();
            return this.expect("?") && (a = this.expression(), this.consume(":")) ? (b = this.expression(), {
                type: rf.ConditionalExpression,
                test: c,
                alternate: a,
                consequent: b
            }) : c
        }, logicalOR: function () {
            for (var a = this.logicalAND(); this.expect("||");)a = {
                type: rf.LogicalExpression,
                operator: "||",
                left: a,
                right: this.logicalAND()
            };
            return a
        }, logicalAND: function () {
            for (var a = this.equality(); this.expect("&&");)a = {
                type: rf.LogicalExpression,
                operator: "&&",
                left: a,
                right: this.equality()
            };
            return a
        }, equality: function () {
            for (var a, b = this.relational(); a = this.expect("==", "!=", "===", "!==");)b = {
                type: rf.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.relational()
            };
            return b
        }, relational: function () {
            for (var a, b = this.additive(); a = this.expect("<", ">", "<=", ">=");)b = {
                type: rf.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.additive()
            };
            return b
        }, additive: function () {
            for (var a, b = this.multiplicative(); a = this.expect("+", "-");)b = {
                type: rf.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.multiplicative()
            };
            return b
        }, multiplicative: function () {
            for (var a, b = this.unary(); a = this.expect("*", "/", "%");)b = {
                type: rf.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.unary()
            };
            return b
        }, unary: function () {
            var a;
            return (a = this.expect("+", "-", "!")) ? {
                type: rf.UnaryExpression,
                operator: a.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary()
        }, primary: function () {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? a = N(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? a = {
                type: rf.Literal,
                value: this.options.literals[this.consume().text]
            } : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var b; b = this.expect("(", "[", ".");)"(" === b.text ? (a = {
                type: rf.CallExpression,
                callee: a,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === b.text ? (a = {
                type: rf.MemberExpression,
                object: a,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === b.text ? a = {
                type: rf.MemberExpression,
                object: a,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return a
        }, filter: function (a) {
            for (var b = [a], c = {
                type: rf.CallExpression,
                callee: this.identifier(),
                arguments: b,
                filter: !0
            }; this.expect(":");)b.push(this.expression());
            return c
        }, parseArguments: function () {
            var a = [];
            if (")" !== this.peekToken().text)do a.push(this.filterChain()); while (this.expect(","));
            return a
        }, identifier: function () {
            var a = this.consume();
            return a.identifier || this.throwError("is not a valid identifier", a), {type: rf.Identifier, name: a.text}
        }, constant: function () {
            return {type: rf.Literal, value: this.consume().value}
        }, arrayDeclaration: function () {
            var a = [];
            if ("]" !== this.peekToken().text)do {
                if (this.peek("]"))break;
                a.push(this.expression())
            } while (this.expect(","));
            return this.consume("]"), {type: rf.ArrayExpression, elements: a}
        }, object: function () {
            var a, b = [];
            if ("}" !== this.peekToken().text)do {
                if (this.peek("}"))break;
                a = {
                    type: rf.Property,
                    kind: "init"
                }, this.peek().constant ? (a.key = this.constant(), a.computed = !1, this.consume(":"), a.value = this.expression()) : this.peek().identifier ? (a.key = this.identifier(), a.computed = !1, this.peek(":") ? (this.consume(":"), a.value = this.expression()) : a.value = a.key) : this.peek("[") ? (this.consume("["), a.key = this.expression(), this.consume("]"), a.computed = !0, this.consume(":"), a.value = this.expression()) : this.throwError("invalid key", this.peek()), b.push(a)
            } while (this.expect(","));
            return this.consume("}"), {type: rf.ObjectExpression, properties: b}
        }, throwError: function (a, b) {
            throw kf("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index))
        }, consume: function (a) {
            if (0 === this.tokens.length)throw kf("ueoe", "Unexpected end of expression: {0}", this.text);
            var b = this.expect(a);
            return b || this.throwError("is unexpected, expecting [" + a + "]", this.peek()), b
        }, peekToken: function () {
            if (0 === this.tokens.length)throw kf("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0]
        }, peek: function (a, b, c, d) {
            return this.peekAhead(0, a, b, c, d)
        }, peekAhead: function (a, b, c, d, e) {
            if (this.tokens.length > a) {
                var f = this.tokens[a], g = f.text;
                if (g === b || g === c || g === d || g === e || !b && !c && !d && !e)return f
            }
            return !1
        }, expect: function (a, b, c, d) {
            var e = this.peek(a, b, c, d);
            return !!e && (this.tokens.shift(), e)
        }, selfReferential: {
            this: {
                type: rf.ThisExpression
            }, $locals: {type: rf.LocalsExpression}
        }
    }, oc.prototype = {
        compile: function (a, b) {
            var c = this, e = this.astBuilder.ast(a);
            this.state = {
                nextId: 0,
                filters: {},
                expensiveChecks: b,
                fn: {vars: [], body: [], own: {}},
                assign: {vars: [], body: [], own: {}},
                inputs: []
            }, ic(e, c.$filter);
            var f, g = "";
            if (this.stage = "assign", f = lc(e)) {
                this.state.computing = "assign";
                var h = this.nextId();
                this.recurse(f, h), this.return_(h), g = "fn.assign=" + this.generateFunction("assign", "s,v,l")
            }
            var i = jc(e.body);
            c.stage = "inputs", d(i, function (a, b) {
                var d = "fn" + b;
                c.state[d] = {vars: [], body: [], own: {}}, c.state.computing = d;
                var e = c.nextId();
                c.recurse(a, e), c.return_(e), c.state.inputs.push(d), a.watchId = b
            }), this.state.computing = "fn", this.stage = "main", this.recurse(e);
            var j = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + g + this.watchFns() + "return fn;",
                k = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", j)(this.$filter, ac, cc, dc, bc, ec, fc, gc, a);
            return this.state = this.stage = void 0, k.literal = mc(e), k.constant = nc(e), k
        }, USE: "use", STRICT: "strict", watchFns: function () {
            var a = [], b = this.state.inputs, c = this;
            return d(b, function (b) {
                a.push("var " + b + "=" + c.generateFunction(b, "s"))
            }), b.length && a.push("fn.inputs=[" + b.join(",") + "];"), a.join("")
        }, generateFunction: function (a, b) {
            return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};"
        }, filterPrefix: function () {
            var a = [], b = this;
            return d(this.state.filters, function (c, d) {
                a.push(c + "=$filter(" + b.escape(d) + ")")
            }), a.length ? "var " + a.join(",") + ";" : ""
        }, varsPrefix: function (a) {
            return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : ""
        }, body: function (a) {
            return this.state[a].body.join("")
        }, recurse: function (a, b, c, e, f, g) {
            var h, i, j, k, l, m = this;
            if (e = e || n, !g && s(a.watchId))return b = b || this.nextId(), void this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, c, e, f, !0));
            switch (a.type) {
                case rf.Program:
                    d(a.body, function (b, c) {
                        m.recurse(b.expression, void 0, void 0, function (a) {
                            i = a
                        }), c !== a.body.length - 1 ? m.current().body.push(i, ";") : m.return_(i)
                    });
                    break;
                case rf.Literal:
                    k = this.escape(a.value), this.assign(b, k), e(k);
                    break;
                case rf.UnaryExpression:
                    this.recurse(a.argument, void 0, void 0, function (a) {
                        i = a
                    }), k = a.operator + "(" + this.ifDefined(i, 0) + ")", this.assign(b, k), e(k);
                    break;
                case rf.BinaryExpression:
                    this.recurse(a.left, void 0, void 0, function (a) {
                        h = a
                    }), this.recurse(a.right, void 0, void 0, function (a) {
                        i = a
                    }), k = "+" === a.operator ? this.plus(h, i) : "-" === a.operator ? this.ifDefined(h, 0) + a.operator + this.ifDefined(i, 0) : "(" + h + ")" + a.operator + "(" + i + ")", this.assign(b, k), e(k);
                    break;
                case rf.LogicalExpression:
                    b = b || this.nextId(), m.recurse(a.left, b), m.if_("&&" === a.operator ? b : m.not(b), m.lazyRecurse(a.right, b)), e(b);
                    break;
                case rf.ConditionalExpression:
                    b = b || this.nextId(), m.recurse(a.test, b), m.if_(b, m.lazyRecurse(a.alternate, b), m.lazyRecurse(a.consequent, b)), e(b);
                    break;
                case rf.Identifier:
                    b = b || this.nextId(), c && (c.context = "inputs" === m.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), c.computed = !1, c.name = a.name), ac(a.name), m.if_("inputs" === m.stage || m.not(m.getHasOwnProperty("l", a.name)), function () {
                        m.if_("inputs" === m.stage || "s", function () {
                            f && 1 !== f && m.if_(m.not(m.nonComputedMember("s", a.name)), m.lazyAssign(m.nonComputedMember("s", a.name), "{}")), m.assign(b, m.nonComputedMember("s", a.name))
                        })
                    }, b && m.lazyAssign(b, m.nonComputedMember("l", a.name))), (m.state.expensiveChecks || qc(a.name)) && m.addEnsureSafeObject(b), e(b);
                    break;
                case rf.MemberExpression:
                    h = c && (c.context = this.nextId()) || this.nextId(), b = b || this.nextId(), m.recurse(a.object, h, void 0, function () {
                        m.if_(m.notNull(h), function () {
                            f && 1 !== f && m.addEnsureSafeAssignContext(h), a.computed ? (i = m.nextId(), m.recurse(a.property, i), m.getStringValue(i), m.addEnsureSafeMemberName(i), f && 1 !== f && m.if_(m.not(m.computedMember(h, i)), m.lazyAssign(m.computedMember(h, i), "{}")), k = m.ensureSafeObject(m.computedMember(h, i)), m.assign(b, k), c && (c.computed = !0, c.name = i)) : (ac(a.property.name), f && 1 !== f && m.if_(m.not(m.nonComputedMember(h, a.property.name)), m.lazyAssign(m.nonComputedMember(h, a.property.name), "{}")), k = m.nonComputedMember(h, a.property.name), (m.state.expensiveChecks || qc(a.property.name)) && (k = m.ensureSafeObject(k)), m.assign(b, k), c && (c.computed = !1, c.name = a.property.name))
                        }, function () {
                            m.assign(b, "undefined")
                        }), e(b)
                    }, !!f);
                    break;
                case rf.CallExpression:
                    b = b || this.nextId(), a.filter ? (i = m.filter(a.callee.name), j = [], d(a.arguments, function (a) {
                        var b = m.nextId();
                        m.recurse(a, b), j.push(b)
                    }), k = i + "(" + j.join(",") + ")", m.assign(b, k), e(b)) : (i = m.nextId(), h = {}, j = [], m.recurse(a.callee, i, h, function () {
                        m.if_(m.notNull(i), function () {
                            m.addEnsureSafeFunction(i), d(a.arguments, function (a) {
                                m.recurse(a, m.nextId(), void 0, function (a) {
                                    j.push(m.ensureSafeObject(a))
                                })
                            }), h.name ? (m.state.expensiveChecks || m.addEnsureSafeObject(h.context), k = m.member(h.context, h.name, h.computed) + "(" + j.join(",") + ")") : k = i + "(" + j.join(",") + ")", k = m.ensureSafeObject(k), m.assign(b, k)
                        }, function () {
                            m.assign(b, "undefined")
                        }), e(b)
                    }));
                    break;
                case rf.AssignmentExpression:
                    if (i = this.nextId(), h = {}, !kc(a.left))throw kf("lval", "Trying to assign a value to a non l-value");
                    this.recurse(a.left, void 0, h, function () {
                        m.if_(m.notNull(h.context), function () {
                            m.recurse(a.right, i), m.addEnsureSafeObject(m.member(h.context, h.name, h.computed)), m.addEnsureSafeAssignContext(h.context), k = m.member(h.context, h.name, h.computed) + a.operator + i, m.assign(b, k), e(b || k)
                        })
                    }, 1);
                    break;
                case rf.ArrayExpression:
                    j = [], d(a.elements, function (a) {
                        m.recurse(a, m.nextId(), void 0, function (a) {
                            j.push(a)
                        })
                    }), k = "[" + j.join(",") + "]", this.assign(b, k), e(k);
                    break;
                case rf.ObjectExpression:
                    j = [], l = !1, d(a.properties, function (a) {
                        a.computed && (l = !0)
                    }), l ? (b = b || this.nextId(), this.assign(b, "{}"), d(a.properties, function (a) {
                        a.computed ? (h = m.nextId(), m.recurse(a.key, h)) : h = a.key.type === rf.Identifier ? a.key.name : "" + a.key.value, i = m.nextId(), m.recurse(a.value, i), m.assign(m.member(b, h, a.computed), i)
                    })) : (d(a.properties, function (b) {
                        m.recurse(b.value, a.constant ? void 0 : m.nextId(), void 0, function (a) {
                            j.push(m.escape(b.key.type === rf.Identifier ? b.key.name : "" + b.key.value) + ":" + a)
                        })
                    }), k = "{" + j.join(",") + "}", this.assign(b, k)), e(b || k);
                    break;
                case rf.ThisExpression:
                    this.assign(b, "s"), e("s");
                    break;
                case rf.LocalsExpression:
                    this.assign(b, "l"), e("l");
                    break;
                case rf.NGValueParameter:
                    this.assign(b, "v"), e("v")
            }
        }, getHasOwnProperty: function (a, b) {
            var c = a + "." + b, d = this.current().own;
            return d.hasOwnProperty(c) || (d[c] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")")), d[c]
        }, assign: function (a, b) {
            if (a)return this.current().body.push(a, "=", b, ";"), a
        }, filter: function (a) {
            return this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0)), this.state.filters[a]
        }, ifDefined: function (a, b) {
            return "ifDefined(" + a + "," + this.escape(b) + ")"
        }, plus: function (a, b) {
            return "plus(" + a + "," + b + ")"
        }, return_: function (a) {
            this.current().body.push("return ", a, ";")
        }, if_: function (a, b, c) {
            if (a === !0) b(); else {
                var d = this.current().body;
                d.push("if(", a, "){"), b(), d.push("}"), c && (d.push("else{"), c(), d.push("}"))
            }
        }, not: function (a) {
            return "!(" + a + ")"
        }, notNull: function (a) {
            return a + "!=null"
        }, nonComputedMember: function (a, b) {
            var c = /[$_a-zA-Z][$_a-zA-Z0-9]*/, d = /[^$_a-zA-Z0-9]/g;
            return c.test(b) ? a + "." + b : a + '["' + b.replace(d, this.stringEscapeFn) + '"]'
        }, computedMember: function (a, b) {
            return a + "[" + b + "]"
        }, member: function (a, b, c) {
            return c ? this.computedMember(a, b) : this.nonComputedMember(a, b)
        }, addEnsureSafeObject: function (a) {
            this.current().body.push(this.ensureSafeObject(a), ";")
        }, addEnsureSafeMemberName: function (a) {
            this.current().body.push(this.ensureSafeMemberName(a), ";")
        }, addEnsureSafeFunction: function (a) {
            this.current().body.push(this.ensureSafeFunction(a), ";")
        }, addEnsureSafeAssignContext: function (a) {
            this.current().body.push(this.ensureSafeAssignContext(a), ";")
        }, ensureSafeObject: function (a) {
            return "ensureSafeObject(" + a + ",text)"
        }, ensureSafeMemberName: function (a) {
            return "ensureSafeMemberName(" + a + ",text)"
        }, ensureSafeFunction: function (a) {
            return "ensureSafeFunction(" + a + ",text)"
        }, getStringValue: function (a) {
            this.assign(a, "getStringValue(" + a + ")")
        }, ensureSafeAssignContext: function (a) {
            return "ensureSafeAssignContext(" + a + ",text)"
        }, lazyRecurse: function (a, b, c, d, e, f) {
            var g = this;
            return function () {
                g.recurse(a, b, c, d, e, f)
            }
        }, lazyAssign: function (a, b) {
            var c = this;
            return function () {
                c.assign(a, b)
            }
        }, stringEscapeRegex: /[^ a-zA-Z0-9]/g, stringEscapeFn: function (a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }, escape: function (a) {
            if (v(a))return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (w(a))return a.toString();
            if (a === !0)return "true";
            if (a === !1)return "false";
            if (null === a)return "null";
            if ("undefined" == typeof a)return "undefined";
            throw kf("esc", "IMPOSSIBLE")
        }, nextId: function (a, b) {
            var c = "v" + this.state.nextId++;
            return a || this.current().vars.push(c + (b ? "=" + b : "")), c
        }, current: function () {
            return this.state[this.state.computing]
        }
    }, pc.prototype = {
        compile: function (a, b) {
            var c = this, e = this.astBuilder.ast(a);
            this.expression = a, this.expensiveChecks = b, ic(e, c.$filter);
            var f, g;
            (f = lc(e)) && (g = this.recurse(f));
            var h, i = jc(e.body);
            i && (h = [], d(i, function (a, b) {
                var d = c.recurse(a);
                a.input = d, h.push(d), a.watchId = b
            }));
            var j = [];
            d(e.body, function (a) {
                j.push(c.recurse(a.expression))
            });
            var k = 0 === e.body.length ? n : 1 === e.body.length ? j[0] : function (a, b) {
                var c;
                return d(j, function (d) {
                    c = d(a, b)
                }), c
            };
            return g && (k.assign = function (a, b, c) {
                return g(a, c, b)
            }), h && (k.inputs = h), k.literal = mc(e), k.constant = nc(e), k
        }, recurse: function (a, b, c) {
            var e, f, g, h = this;
            if (a.input)return this.inputs(a.input, a.watchId);
            switch (a.type) {
                case rf.Literal:
                    return this.value(a.value, b);
                case rf.UnaryExpression:
                    return f = this.recurse(a.argument), this["unary" + a.operator](f, b);
                case rf.BinaryExpression:
                    return e = this.recurse(a.left), f = this.recurse(a.right), this["binary" + a.operator](e, f, b);
                case rf.LogicalExpression:
                    return e = this.recurse(a.left), f = this.recurse(a.right), this["binary" + a.operator](e, f, b);
                case rf.ConditionalExpression:
                    return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);
                case rf.Identifier:
                    return ac(a.name, h.expression), h.identifier(a.name, h.expensiveChecks || qc(a.name), b, c, h.expression);
                case rf.MemberExpression:
                    return e = this.recurse(a.object, !1, !!c), a.computed || (ac(a.property.name, h.expression), f = a.property.name), a.computed && (f = this.recurse(a.property)), a.computed ? this.computedMember(e, f, b, c, h.expression) : this.nonComputedMember(e, f, h.expensiveChecks, b, c, h.expression);
                case rf.CallExpression:
                    return g = [], d(a.arguments, function (a) {
                        g.push(h.recurse(a))
                    }), a.filter && (f = this.$filter(a.callee.name)), a.filter || (f = this.recurse(a.callee, !0)), a.filter ? function (a, c, d, e) {
                        for (var h = [], i = 0; i < g.length; ++i)h.push(g[i](a, c, d, e));
                        var j = f.apply(void 0, h, e);
                        return b ? {context: void 0, name: void 0, value: j} : j
                    } : function (a, c, d, e) {
                        var i, j = f(a, c, d, e);
                        if (null != j.value) {
                            cc(j.context, h.expression), dc(j.value, h.expression);
                            for (var k = [], l = 0; l < g.length; ++l)k.push(cc(g[l](a, c, d, e), h.expression));
                            i = cc(j.value.apply(j.context, k), h.expression)
                        }
                        return b ? {value: i} : i
                    };
                case rf.AssignmentExpression:
                    return e = this.recurse(a.left, !0, 1), f = this.recurse(a.right), function (a, c, d, g) {
                        var i = e(a, c, d, g), j = f(a, c, d, g);
                        return cc(i.value, h.expression), ec(i.context), i.context[i.name] = j, b ? {value: j} : j
                    };
                case rf.ArrayExpression:
                    return g = [], d(a.elements, function (a) {
                        g.push(h.recurse(a))
                    }), function (a, c, d, e) {
                        for (var f = [], h = 0; h < g.length; ++h)f.push(g[h](a, c, d, e));
                        return b ? {value: f} : f
                    };
                case rf.ObjectExpression:
                    return g = [], d(a.properties, function (a) {
                        a.computed ? g.push({
                            key: h.recurse(a.key),
                            computed: !0,
                            value: h.recurse(a.value)
                        }) : g.push({
                            key: a.key.type === rf.Identifier ? a.key.name : "" + a.key.value,
                            computed: !1,
                            value: h.recurse(a.value)
                        })
                    }), function (a, c, d, e) {
                        for (var f = {}, h = 0; h < g.length; ++h)g[h].computed ? f[g[h].key(a, c, d, e)] = g[h].value(a, c, d, e) : f[g[h].key] = g[h].value(a, c, d, e);
                        return b ? {value: f} : f
                    };
                case rf.ThisExpression:
                    return function (a) {
                        return b ? {value: a} : a
                    };
                case rf.LocalsExpression:
                    return function (a, c) {
                        return b ? {value: c} : c
                    };
                case rf.NGValueParameter:
                    return function (a, c, d) {
                        return b ? {value: d} : d
                    }
            }
        }, "unary+": function (a, b) {
            return function (c, d, e, f) {
                var g = a(c, d, e, f);
                return g = s(g) ? +g : 0, b ? {value: g} : g
            }
        }, "unary-": function (a, b) {
            return function (c, d, e, f) {
                var g = a(c, d, e, f);
                return g = s(g) ? -g : 0, b ? {value: g} : g
            }
        }, "unary!": function (a, b) {
            return function (c, d, e, f) {
                var g = !a(c, d, e, f);
                return b ? {value: g} : g
            }
        }, "binary+": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g), i = b(d, e, f, g), j = gc(h, i);
                return c ? {value: j} : j
            }
        }, "binary-": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g), i = b(d, e, f, g), j = (s(h) ? h : 0) - (s(i) ? i : 0);
                return c ? {value: j} : j
            }
        }, "binary*": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g) * b(d, e, f, g);
                return c ? {value: h} : h
            }
        }, "binary/": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g) / b(d, e, f, g);
                return c ? {value: h} : h
            }
        }, "binary%": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g) % b(d, e, f, g);
                return c ? {value: h} : h
            }
        }, "binary===": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g) === b(d, e, f, g);
                return c ? {value: h} : h
            }
        }, "binary!==": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g) !== b(d, e, f, g);
                return c ? {value: h} : h
            }
        }, "binary==": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g) == b(d, e, f, g);
                return c ? {value: h} : h
            }
        }, "binary!=": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g) != b(d, e, f, g);
                return c ? {value: h} : h
            }
        }, "binary<": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g) < b(d, e, f, g);
                return c ? {value: h} : h
            }
        }, "binary>": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g) > b(d, e, f, g);
                return c ? {value: h} : h
            }
        }, "binary<=": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g) <= b(d, e, f, g);
                return c ? {value: h} : h
            }
        }, "binary>=": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g) >= b(d, e, f, g);
                return c ? {value: h} : h
            }
        }, "binary&&": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g) && b(d, e, f, g);
                return c ? {value: h} : h
            }
        }, "binary||": function (a, b, c) {
            return function (d, e, f, g) {
                var h = a(d, e, f, g) || b(d, e, f, g);
                return c ? {value: h} : h
            }
        }, "ternary?:": function (a, b, c, d) {
            return function (e, f, g, h) {
                var i = a(e, f, g, h) ? b(e, f, g, h) : c(e, f, g, h);
                return d ? {value: i} : i
            }
        }, value: function (a, b) {
            return function () {
                return b ? {context: void 0, name: void 0, value: a} : a
            }
        }, identifier: function (a, b, c, d, e) {
            return function (f, g, h, i) {
                var j = g && a in g ? g : f;
                d && 1 !== d && j && !j[a] && (j[a] = {});
                var k = j ? j[a] : void 0;
                return b && cc(k, e), c ? {context: j, name: a, value: k} : k
            }
        }, computedMember: function (a, b, c, d, e) {
            return function (f, g, h, i) {
                var j, k, l = a(f, g, h, i);
                return null != l && (j = b(f, g, h, i), j = bc(j), ac(j, e), d && 1 !== d && (ec(l), l && !l[j] && (l[j] = {})), k = l[j], cc(k, e)), c ? {
                    context: l,
                    name: j,
                    value: k
                } : k
            }
        }, nonComputedMember: function (a, b, c, d, e, f) {
            return function (g, h, i, j) {
                var k = a(g, h, i, j);
                e && 1 !== e && (ec(k), k && !k[b] && (k[b] = {}));
                var l = null != k ? k[b] : void 0;
                return (c || qc(b)) && cc(l, f), d ? {context: k, name: b, value: l} : l
            }
        }, inputs: function (a, b) {
            return function (c, d, e, f) {
                return f ? f[b] : a(c, d, e)
            }
        }
    };
    var sf = function (a, b, c) {
        this.lexer = a, this.$filter = b, this.options = c, this.ast = new rf(a, c), this.astCompiler = c.csp ? new pc(this.ast, b) : new oc(this.ast, b)
    };
    sf.prototype = {
        constructor: sf, parse: function (a) {
            return this.astCompiler.compile(a, this.options.expensiveChecks)
        }
    };
    var tf = Object.prototype.valueOf, uf = b("$sce"),
        vf = {HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js"}, wf = b("$compile"),
        xf = a.document.createElement("a"), yf = Hc(a.location.href);
    Kc.$inject = ["$document"], Mc.$inject = ["$provide"];
    var zf = 22, Af = ".", Bf = "0";
    Rc.$inject = ["$locale"], Sc.$inject = ["$locale"];
    var Cf = {
        yyyy: Xc("FullYear", 4, 0, !1, !0),
        yy: Xc("FullYear", 2, 0, !0, !0),
        y: Xc("FullYear", 1, 0, !1, !0),
        MMMM: Yc("Month"),
        MMM: Yc("Month", !0),
        MM: Xc("Month", 2, 1),
        M: Xc("Month", 1, 1),
        LLLL: Yc("Month", !1, !0),
        dd: Xc("Date", 2),
        d: Xc("Date", 1),
        HH: Xc("Hours", 2),
        H: Xc("Hours", 1),
        hh: Xc("Hours", 2, -12),
        h: Xc("Hours", 1, -12),
        mm: Xc("Minutes", 2),
        m: Xc("Minutes", 1),
        ss: Xc("Seconds", 2),
        s: Xc("Seconds", 1),
        sss: Xc("Milliseconds", 3),
        EEEE: Yc("Day"),
        EEE: Yc("Day", !0),
        a: bd,
        Z: Zc,
        ww: ad(2),
        w: ad(1),
        G: cd,
        GG: cd,
        GGG: cd,
        GGGG: dd
    }, Df = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/, Ef = /^\-?\d+$/;
    ed.$inject = ["$locale"];
    var Ff = p(Gd), Gf = p(Hd);
    id.$inject = ["$parse"];
    var Hf = p({
        restrict: "E", compile: function (a, b) {
            if (!b.href && !b.xlinkHref)return function (a, b) {
                if ("a" === b[0].nodeName.toLowerCase()) {
                    var c = "[object SVGAnimatedString]" === Rd.call(b.prop("href")) ? "xlink:href" : "href";
                    b.on("click", function (a) {
                        b.attr(c) || a.preventDefault()
                    })
                }
            }
        }
    }), If = {};
    d(Ae, function (a, b) {
        function c(a, c, e) {
            a.$watch(e[d], function (a) {
                e.$set(b, !!a)
            })
        }

        if ("multiple" != a) {
            var d = qb("ng-" + b), e = c;
            "checked" === a && (e = function (a, b, e) {
                e.ngModel !== e[d] && c(a, b, e)
            }), If[d] = function () {
                return {restrict: "A", priority: 100, link: e}
            }
        }
    }), d(Ce, function (a, b) {
        If[b] = function () {
            return {
                priority: 100, link: function (a, c, d) {
                    if ("ngPattern" === b && "/" == d.ngPattern.charAt(0)) {
                        var e = d.ngPattern.match(Dd);
                        if (e)return void d.$set("ngPattern", new RegExp(e[1], e[2]))
                    }
                    a.$watch(d[b], function (a) {
                        d.$set(b, a)
                    })
                }
            }
        }
    }), d(["src", "srcset", "href"], function (a) {
        var b = qb("ng-" + a);
        If[b] = function () {
            return {
                priority: 99, link: function (c, d, e) {
                    var f = a, g = a;
                    "href" === a && "[object SVGAnimatedString]" === Rd.call(d.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null), e.$observe(b, function (b) {
                        return b ? (e.$set(g, b), void(Kd && f && d.prop(f, e[g]))) : void("href" === a && e.$set(g, null))
                    })
                }
            }
        }
    });
    var Jf = {
        $addControl: n,
        $$renameControl: kd,
        $removeControl: n,
        $setValidity: n,
        $setDirty: n,
        $setPristine: n,
        $setSubmitted: n
    }, Kf = "ng-submitted";
    ld.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var Lf = function (a) {
            return ["$timeout", "$parse", function (b, c) {
                function d(a) {
                    return "" === a ? c('this[""]').assign : c(a).assign || n
                }

                var e = {
                    name: "form",
                    restrict: a ? "EAC" : "E",
                    require: ["form", "^^?form"],
                    controller: ld,
                    compile: function (c, e) {
                        c.addClass(tg).addClass(rg);
                        var f = e.name ? "name" : !(!a || !e.ngForm) && "ngForm";
                        return {
                            pre: function (a, c, e, g) {
                                var h = g[0];
                                if (!("action" in e)) {
                                    var i = function (b) {
                                        a.$apply(function () {
                                            h.$commitViewValue(), h.$setSubmitted()
                                        }), b.preventDefault()
                                    };
                                    ne(c[0], "submit", i), c.on("$destroy", function () {
                                        b(function () {
                                            oe(c[0], "submit", i)
                                        }, 0, !1)
                                    })
                                }
                                var k = g[1] || h.$$parentForm;
                                k.$addControl(h);
                                var l = f ? d(h.$name) : n;
                                f && (l(a, h), e.$observe(f, function (b) {
                                    h.$name !== b && (l(a, void 0), h.$$parentForm.$$renameControl(h, b), (l = d(h.$name))(a, h))
                                })), c.on("$destroy", function () {
                                    h.$$parentForm.$removeControl(h), l(a, void 0), j(h, Jf)
                                })
                            }
                        }
                    }
                };
                return e
            }]
        }, Mf = Lf(), Nf = Lf(!0), Of = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
        Pf = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
        Qf = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
        Rf = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/, Sf = /^(\d{4,})-(\d{2})-(\d{2})$/,
        Tf = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Uf = /^(\d{4,})-W(\d\d)$/,
        Vf = /^(\d{4,})-(\d\d)$/, Wf = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Xf = "keydown wheel mousedown",
        Yf = oa();
    d("date,datetime-local,month,time,week".split(","), function (a) {
        Yf[a] = !0
    });
    var Zf = {
        text: nd,
        date: rd("date", Sf, qd(Sf, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
        "datetime-local": rd("datetimelocal", Tf, qd(Tf, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: rd("time", Wf, qd(Wf, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
        week: rd("week", Uf, pd, "yyyy-Www"),
        month: rd("month", Vf, qd(Vf, ["yyyy", "MM"]), "yyyy-MM"),
        number: td,
        url: ud,
        email: vd,
        radio: wd,
        checkbox: yd,
        hidden: n,
        button: n,
        submit: n,
        reset: n,
        file: n
    }, $f = ["$browser", "$sniffer", "$filter", "$parse", function (a, b, c, d) {
        return {
            restrict: "E", require: ["?ngModel"], link: {
                pre: function (e, f, g, h) {
                    h[0] && (Zf[Gd(g.type)] || Zf.text)(e, f, g, h[0], b, a, c, d)
                }
            }
        }
    }], _f = /^(true|false|\d+)$/, ag = function () {
        return {
            restrict: "A", priority: 100, compile: function (a, b) {
                return _f.test(b.ngValue) ? function (a, b, c) {
                    c.$set("value", a.$eval(c.ngValue))
                } : function (a, b, c) {
                    a.$watch(c.ngValue, function (a) {
                        c.$set("value", a)
                    })
                }
            }
        }
    }, bg = ["$compile", function (a) {
        return {
            restrict: "AC", compile: function (b) {
                return a.$$addBindingClass(b), function (b, c, d) {
                    a.$$addBindingInfo(c, d.ngBind), c = c[0], b.$watch(d.ngBind, function (a) {
                        c.textContent = r(a) ? "" : a
                    })
                }
            }
        }
    }], cg = ["$interpolate", "$compile", function (a, b) {
        return {
            compile: function (c) {
                return b.$$addBindingClass(c), function (c, d, e) {
                    var f = a(d.attr(e.$attr.ngBindTemplate));
                    b.$$addBindingInfo(d, f.expressions), d = d[0], e.$observe("ngBindTemplate", function (a) {
                        d.textContent = r(a) ? "" : a
                    })
                }
            }
        }
    }], dg = ["$sce", "$parse", "$compile", function (a, b, c) {
        return {
            restrict: "A", compile: function (d, e) {
                var f = b(e.ngBindHtml), g = b(e.ngBindHtml, function (b) {
                    return a.valueOf(b)
                });
                return c.$$addBindingClass(d), function (b, d, e) {
                    c.$$addBindingInfo(d, e.ngBindHtml), b.$watch(g, function () {
                        var c = f(b);
                        d.html(a.getTrustedHtml(c) || "")
                    })
                }
            }
        }
    }], eg = p({
        restrict: "A", require: "ngModel", link: function (a, b, c, d) {
            d.$viewChangeListeners.push(function () {
                a.$eval(c.ngChange)
            })
        }
    }), fg = zd("", !0), gg = zd("Odd", 0), hg = zd("Even", 1), ig = jd({
        compile: function (a, b) {
            b.$set("ngCloak", void 0), a.removeClass("ng-cloak")
        }
    }), jg = [function () {
        return {restrict: "A", scope: !0, controller: "@", priority: 500}
    }], kg = {}, lg = {blur: !0, focus: !0};
    d("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
        var b = qb("ng-" + a);
        kg[b] = ["$parse", "$rootScope", function (c, d) {
            return {
                restrict: "A", compile: function (e, f) {
                    var g = c(f[b], null, !0);
                    return function (b, c) {
                        c.on(a, function (c) {
                            var e = function () {
                                g(b, {$event: c})
                            };
                            lg[a] && d.$$phase ? b.$evalAsync(e) : b.$apply(e)
                        })
                    }
                }
            }
        }]
    });
    var mg = ["$animate", "$compile", function (a, b) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function (c, d, e, f, g) {
                    var h, i, j;
                    c.$watch(e.ngIf, function (c) {
                        c ? i || g(function (c, f) {
                                i = f, c[c.length++] = b.$$createComment("end ngIf", e.ngIf), h = {clone: c}, a.enter(c, d.parent(), d)
                            }) : (j && (j.remove(), j = null), i && (i.$destroy(), i = null), h && (j = na(h.clone), a.leave(j).then(function () {
                            j = null
                        }), h = null))
                    })
                }
            }
        }], ng = ["$templateRequest", "$anchorScroll", "$animate", function (a, b, c) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: Ud.noop,
                compile: function (d, e) {
                    var f = e.ngInclude || e.src, g = e.onload || "", h = e.autoscroll;
                    return function (d, e, i, j, k) {
                        var l, m, n, o = 0, p = function () {
                            m && (m.remove(), m = null), l && (l.$destroy(), l = null), n && (c.leave(n).then(function () {
                                m = null
                            }), m = n, n = null)
                        };
                        d.$watch(f, function (f) {
                            var i = function () {
                                !s(h) || h && !d.$eval(h) || b()
                            }, m = ++o;
                            f ? (a(f, !0).then(function (a) {
                                if (!d.$$destroyed && m === o) {
                                    var b = d.$new();
                                    j.template = a;
                                    var h = k(b, function (a) {
                                        p(), c.enter(a, null, e).then(i)
                                    });
                                    l = b, n = h, l.$emit("$includeContentLoaded", f), d.$eval(g)
                                }
                            }, function () {
                                d.$$destroyed || m === o && (p(), d.$emit("$includeContentError", f))
                            }), d.$emit("$includeContentRequested", f)) : (p(), j.template = null)
                        })
                    }
                }
            }
        }], og = ["$compile", function (b) {
            return {
                restrict: "ECA", priority: -400, require: "ngInclude", link: function (c, d, e, f) {
                    return Rd.call(d[0]).match(/SVG/) ? (d.empty(), void b(Aa(f.template, a.document).childNodes)(c, function (a) {
                        d.append(a)
                    }, {futureParentElement: d})) : (d.html(f.template), void b(d.contents())(c))
                }
            }
        }], pg = jd({
            priority: 450, compile: function () {
                return {
                    pre: function (a, b, c) {
                        a.$eval(c.ngInit)
                    }
                }
            }
        }), qg = function () {
            return {
                restrict: "A", priority: 100, require: "ngModel", link: function (a, b, c, e) {
                    var f = b.attr(c.$attr.ngList) || ", ", g = "false" !== c.ngTrim, h = g ? Yd(f) : f, i = function (a) {
                        if (!r(a)) {
                            var b = [];
                            return a && d(a.split(h), function (a) {
                                a && b.push(g ? Yd(a) : a)
                            }), b
                        }
                    };
                    e.$parsers.push(i), e.$formatters.push(function (a) {
                        if (Wd(a))return a.join(f)
                    }), e.$isEmpty = function (a) {
                        return !a || !a.length
                    }
                }
            }
        }, rg = "ng-valid", sg = "ng-invalid", tg = "ng-pristine", ug = "ng-dirty", vg = "ng-untouched", wg = "ng-touched",
        xg = "ng-pending", yg = "ng-empty", zg = "ng-not-empty", Ag = b("ngModel"),
        Bg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (a, b, c, e, f, g, h, i, j, k) {
            this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = void 0, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = k(c.name || "", !1)(a), this.$$parentForm = Jf;
            var l, m = f(c.ngModel), o = m.assign, p = m, q = o, t = null, u = this;
            this.$$setOptions = function (a) {
                if (u.$options = a, a && a.getterSetter) {
                    var b = f(c.ngModel + "()"), d = f(c.ngModel + "($$$p)");
                    p = function (a) {
                        var c = m(a);
                        return y(c) && (c = b(a)), c
                    }, q = function (a, b) {
                        y(m(a)) ? d(a, {$$$p: b}) : o(a, b)
                    }
                } else if (!m.assign)throw Ag("nonassign", "Expression '{0}' is non-assignable. Element: {1}", c.ngModel, Y(e))
            }, this.$render = n, this.$isEmpty = function (a) {
                return r(a) || "" === a || null === a || a !== a
            }, this.$$updateEmptyClasses = function (a) {
                u.$isEmpty(a) ? (g.removeClass(e, zg), g.addClass(e, yg)) : (g.removeClass(e, yg), g.addClass(e, zg))
            };
            var v = 0;
            Ad({
                ctrl: this, $element: e, set: function (a, b) {
                    a[b] = !0
                }, unset: function (a, b) {
                    delete a[b]
                }, $animate: g
            }), this.$setPristine = function () {
                u.$dirty = !1, u.$pristine = !0, g.removeClass(e, ug), g.addClass(e, tg)
            }, this.$setDirty = function () {
                u.$dirty = !0, u.$pristine = !1, g.removeClass(e, tg), g.addClass(e, ug), u.$$parentForm.$setDirty()
            }, this.$setUntouched = function () {
                u.$touched = !1, u.$untouched = !0, g.setClass(e, vg, wg)
            }, this.$setTouched = function () {
                u.$touched = !0, u.$untouched = !1, g.setClass(e, wg, vg)
            }, this.$rollbackViewValue = function () {
                h.cancel(t), u.$viewValue = u.$$lastCommittedViewValue, u.$render()
            }, this.$validate = function () {
                if (!w(u.$modelValue) || !isNaN(u.$modelValue)) {
                    var a = u.$$lastCommittedViewValue, b = u.$$rawModelValue, c = u.$valid, d = u.$modelValue,
                        e = u.$options && u.$options.allowInvalid;
                    u.$$runValidators(b, a, function (a) {
                        e || c === a || (u.$modelValue = a ? b : void 0, u.$modelValue !== d && u.$$writeModelToScope())
                    })
                }
            }, this.$$runValidators = function (a, b, c) {
                function e() {
                    var a = u.$$parserName || "parse";
                    return r(l) ? (h(a, null), !0) : (l || (d(u.$validators, function (a, b) {
                        h(b, null)
                    }), d(u.$asyncValidators, function (a, b) {
                        h(b, null)
                    })), h(a, l), l)
                }

                function f() {
                    var c = !0;
                    return d(u.$validators, function (d, e) {
                        var f = d(a, b);
                        c = c && f, h(e, f)
                    }), !!c || (d(u.$asyncValidators, function (a, b) {
                        h(b, null)
                    }), !1)
                }

                function g() {
                    var c = [], e = !0;
                    d(u.$asyncValidators, function (d, f) {
                        var g = d(a, b);
                        if (!G(g))throw Ag("nopromise", "Expected asynchronous validator to return a promise but got '{0}' instead.", g);
                        h(f, void 0), c.push(g.then(function () {
                            h(f, !0)
                        }, function () {
                            e = !1, h(f, !1)
                        }))
                    }), c.length ? j.all(c).then(function () {
                        i(e)
                    }, n) : i(!0)
                }

                function h(a, b) {
                    k === v && u.$setValidity(a, b)
                }

                function i(a) {
                    k === v && c(a)
                }

                v++;
                var k = v;
                return e() && f() ? void g() : void i(!1)
            }, this.$commitViewValue = function () {
                var a = u.$viewValue;
                h.cancel(t), (u.$$lastCommittedViewValue !== a || "" === a && u.$$hasNativeValidators) && (u.$$updateEmptyClasses(a), u.$$lastCommittedViewValue = a, u.$pristine && this.$setDirty(), this.$$parseAndValidate())
            }, this.$$parseAndValidate = function () {
                function b() {
                    u.$modelValue !== f && u.$$writeModelToScope()
                }

                var c = u.$$lastCommittedViewValue, d = c;
                if (l = !r(d) || void 0)for (var e = 0; e < u.$parsers.length; e++)if (d = u.$parsers[e](d), r(d)) {
                    l = !1;
                    break
                }
                w(u.$modelValue) && isNaN(u.$modelValue) && (u.$modelValue = p(a));
                var f = u.$modelValue, g = u.$options && u.$options.allowInvalid;
                u.$$rawModelValue = d, g && (u.$modelValue = d, b()), u.$$runValidators(d, u.$$lastCommittedViewValue, function (a) {
                    g || (u.$modelValue = a ? d : void 0, b())
                })
            }, this.$$writeModelToScope = function () {
                q(a, u.$modelValue), d(u.$viewChangeListeners, function (a) {
                    try {
                        a()
                    } catch (a) {
                        b(a)
                    }
                })
            }, this.$setViewValue = function (a, b) {
                u.$viewValue = a, u.$options && !u.$options.updateOnDefault || u.$$debounceViewValueCommit(b)
            }, this.$$debounceViewValueCommit = function (b) {
                var c, d = 0, e = u.$options;
                e && s(e.debounce) && (c = e.debounce, w(c) ? d = c : w(c[b]) ? d = c[b] : w(c.default) && (d = c.default)), h.cancel(t), d ? t = h(function () {
                    u.$commitViewValue()
                }, d) : i.$$phase ? u.$commitViewValue() : a.$apply(function () {
                    u.$commitViewValue()
                })
            }, a.$watch(function () {
                var b = p(a);
                if (b !== u.$modelValue && (u.$modelValue === u.$modelValue || b === b)) {
                    u.$modelValue = u.$$rawModelValue = b, l = void 0;
                    for (var c = u.$formatters, d = c.length, e = b; d--;)e = c[d](e);
                    u.$viewValue !== e && (u.$$updateEmptyClasses(e), u.$viewValue = u.$$lastCommittedViewValue = e, u.$render(), u.$$runValidators(b, e, n))
                }
                return b
            })
        }], Cg = ["$rootScope", function (a) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: Bg,
                priority: 1,
                compile: function (b) {
                    return b.addClass(tg).addClass(vg).addClass(rg), {
                        pre: function (a, b, c, d) {
                            var e = d[0], f = d[1] || e.$$parentForm;
                            e.$$setOptions(d[2] && d[2].$options), f.$addControl(e), c.$observe("name", function (a) {
                                e.$name !== a && e.$$parentForm.$$renameControl(e, a)
                            }), a.$on("$destroy", function () {
                                e.$$parentForm.$removeControl(e)
                            })
                        }, post: function (b, c, d, e) {
                            var f = e[0];
                            f.$options && f.$options.updateOn && c.on(f.$options.updateOn, function (a) {
                                f.$$debounceViewValueCommit(a && a.type)
                            }), c.on("blur", function () {
                                f.$touched || (a.$$phase ? b.$evalAsync(f.$setTouched) : b.$apply(f.$setTouched))
                            })
                        }
                    }
                }
            }
        }], Dg = /(\s+|^)default(\s+|$)/, Eg = function () {
            return {
                restrict: "A", controller: ["$scope", "$attrs", function (a, b) {
                    var c = this;
                    this.$options = N(a.$eval(b.ngModelOptions)), s(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = Yd(this.$options.updateOn.replace(Dg, function () {
                        return c.$options.updateOnDefault = !0, " "
                    }))) : this.$options.updateOnDefault = !0
                }]
            }
        }, Fg = jd({terminal: !0, priority: 1e3}), Gg = b("ngOptions"),
        Hg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        Ig = ["$compile", "$document", "$parse", function (b, e, f) {
            function g(a, b, d) {
                function e(a, b, c, d, e) {
                    this.selectValue = a, this.viewValue = b, this.label = c, this.group = d, this.disabled = e
                }

                function g(a) {
                    var b;
                    if (!j && c(a)) b = a; else {
                        b = [];
                        for (var d in a)a.hasOwnProperty(d) && "$" !== d.charAt(0) && b.push(d)
                    }
                    return b
                }

                var h = a.match(Hg);
                if (!h)throw Gg("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", a, Y(b));
                var i = h[5] || h[7], j = h[6], k = / as /.test(h[0]) && h[1], l = h[9], m = f(h[2] ? h[1] : i),
                    n = k && f(k), o = n || m, p = l && f(l), q = l ? function (a, b) {
                        return p(d, b)
                    } : function (a) {
                        return Za(a)
                    }, r = function (a, b) {
                        return q(a, x(a, b))
                    }, s = f(h[2] || h[1]), t = f(h[3] || ""), u = f(h[4] || ""), v = f(h[8]), w = {},
                    x = j ? function (a, b) {
                        return w[j] = b, w[i] = a, w
                    } : function (a) {
                        return w[i] = a, w
                    };
                return {
                    trackBy: l, getTrackByValue: r, getWatchables: f(v, function (a) {
                        var b = [];
                        a = a || [];
                        for (var c = g(a), e = c.length, f = 0; f < e; f++) {
                            var i = a === c ? f : c[f], j = a[i], k = x(j, i), l = q(j, k);
                            if (b.push(l), h[2] || h[1]) {
                                var m = s(d, k);
                                b.push(m)
                            }
                            if (h[4]) {
                                var n = u(d, k);
                                b.push(n)
                            }
                        }
                        return b
                    }), getOptions: function () {
                        for (var a = [], b = {}, c = v(d) || [], f = g(c), h = f.length, i = 0; i < h; i++) {
                            var j = c === f ? i : f[i], k = c[j], m = x(k, j), n = o(d, m), p = q(n, m), w = s(d, m),
                                y = t(d, m), z = u(d, m), A = new e(p, n, w, y, z);
                            a.push(A), b[p] = A
                        }
                        return {
                            items: a, selectValueMap: b, getOptionFromViewValue: function (a) {
                                return b[r(a)]
                            }, getViewValueFromOption: function (a) {
                                return l ? Ud.copy(a.viewValue) : a.viewValue
                            }
                        }
                    }
                }
            }

            function h(a, c, f, h) {
                function k(a, b) {
                    var c = i.cloneNode(!1);
                    b.appendChild(c), l(a, c)
                }

                function l(a, b) {
                    a.element = b, b.disabled = a.disabled, a.label !== b.label && (b.label = a.label, b.textContent = a.label), a.value !== b.value && (b.value = a.selectValue)
                }

                function m() {
                    var a = x && o.readValue();
                    if (x)for (var b = x.items.length - 1; b >= 0; b--) {
                        var d = x.items[b];
                        Ra(d.group ? d.element.parentNode : d.element)
                    }
                    x = y.getOptions();
                    var e = {};
                    if (v && c.prepend(n), x.items.forEach(function (a) {
                            var b;
                            s(a.group) ? (b = e[a.group], b || (b = j.cloneNode(!1), z.appendChild(b), b.label = a.group, e[a.group] = b), k(a, b)) : k(a, z)
                        }), c[0].appendChild(z), p.$render(), !p.$isEmpty(a)) {
                        var f = o.readValue(), g = y.trackBy || q;
                        (g ? O(a, f) : a === f) || (p.$setViewValue(f), p.$render())
                    }
                }

                for (var n, o = h[0], p = h[1], q = f.multiple, r = 0, t = c.children(), u = t.length; r < u; r++)if ("" === t[r].value) {
                    n = t.eq(r);
                    break
                }
                var v = !!n, w = Ld(i.cloneNode(!1));
                w.val("?");
                var x, y = g(f.ngOptions, c, a), z = e[0].createDocumentFragment(), A = function () {
                    v || c.prepend(n), c.val(""), n.prop("selected", !0), n.attr("selected", !0)
                }, B = function () {
                    v || n.remove()
                }, C = function () {
                    c.prepend(w), c.val("?"), w.prop("selected", !0), w.attr("selected", !0)
                }, D = function () {
                    w.remove()
                };
                q ? (p.$isEmpty = function (a) {
                    return !a || 0 === a.length
                }, o.writeValue = function (a) {
                    x.items.forEach(function (a) {
                        a.element.selected = !1
                    }), a && a.forEach(function (a) {
                        var b = x.getOptionFromViewValue(a);
                        b && (b.element.selected = !0)
                    })
                }, o.readValue = function () {
                    var a = c.val() || [], b = [];
                    return d(a, function (a) {
                        var c = x.selectValueMap[a];
                        c && !c.disabled && b.push(x.getViewValueFromOption(c));
                    }), b
                }, y.trackBy && a.$watchCollection(function () {
                    if (Wd(p.$viewValue))return p.$viewValue.map(function (a) {
                        return y.getTrackByValue(a)
                    })
                }, function () {
                    p.$render()
                })) : (o.writeValue = function (a) {
                    var b = x.getOptionFromViewValue(a);
                    b ? (c[0].value !== b.selectValue && (D(), B(), c[0].value = b.selectValue, b.element.selected = !0), b.element.setAttribute("selected", "selected")) : null === a || v ? (D(), A()) : (B(), C())
                }, o.readValue = function () {
                    var a = x.selectValueMap[c.val()];
                    return a && !a.disabled ? (B(), D(), x.getViewValueFromOption(a)) : null
                }, y.trackBy && a.$watch(function () {
                    return y.getTrackByValue(p.$viewValue)
                }, function () {
                    p.$render()
                })), v ? (n.remove(), b(n)(a), n.removeClass("ng-scope")) : n = Ld(i.cloneNode(!1)), c.empty(), m(), a.$watchCollection(y.getWatchables, m)
            }

            var i = a.document.createElement("option"), j = a.document.createElement("optgroup");
            return {
                restrict: "A", terminal: !0, require: ["select", "ngModel"], link: {
                    pre: function (a, b, c, d) {
                        d[0].registerOption = n
                    }, post: h
                }
            }
        }], Jg = ["$locale", "$interpolate", "$log", function (a, b, c) {
            var e = /{}/g, f = /^when(Minus)?(.+)$/;
            return {
                link: function (g, h, i) {
                    function j(a) {
                        h.text(a || "")
                    }

                    var k, l = i.count, m = i.$attr.when && h.attr(i.$attr.when), o = i.offset || 0, p = g.$eval(m) || {},
                        q = {}, s = b.startSymbol(), t = b.endSymbol(), u = s + l + "-" + o + t, v = Ud.noop;
                    d(i, function (a, b) {
                        var c = f.exec(b);
                        if (c) {
                            var d = (c[1] ? "-" : "") + Gd(c[2]);
                            p[d] = h.attr(i.$attr[b])
                        }
                    }), d(p, function (a, c) {
                        q[c] = b(a.replace(e, u))
                    }), g.$watch(l, function (b) {
                        var d = parseFloat(b), e = isNaN(d);
                        if (e || d in p || (d = a.pluralCat(d - o)), d !== k && !(e && w(k) && isNaN(k))) {
                            v();
                            var f = q[d];
                            r(f) ? (null != b && c.debug("ngPluralize: no rule defined for '" + d + "' in " + m), v = n, j()) : v = g.$watch(f, j), k = d
                        }
                    })
                }
            }
        }], Kg = ["$parse", "$animate", "$compile", function (a, e, f) {
            var g = "$$NG_REMOVED", h = b("ngRepeat"), i = function (a, b, c, d, e, f, g) {
                a[c] = d, e && (a[e] = f), a.$index = b, a.$first = 0 === b, a.$last = b === g - 1, a.$middle = !(a.$first || a.$last), a.$odd = !(a.$even = 0 === (1 & b))
            }, j = function (a) {
                return a.clone[0]
            }, k = function (a) {
                return a.clone[a.clone.length - 1]
            };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                compile: function (b, l) {
                    var m = l.ngRepeat, n = f.$$createComment("end ngRepeat", m),
                        o = m.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!o)throw h("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", m);
                    var p = o[1], q = o[2], r = o[3], s = o[4];
                    if (o = p.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !o)throw h("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", p);
                    var t = o[3] || o[1], u = o[2];
                    if (r && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r)))throw h("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", r);
                    var v, w, x, y, z = {$id: Za};
                    return s ? v = a(s) : (x = function (a, b) {
                        return Za(b)
                    }, y = function (a) {
                        return a
                    }), function (a, b, f, l, o) {
                        v && (w = function (b, c, d) {
                            return u && (z[u] = b), z[t] = c, z.$index = d, v(a, z)
                        });
                        var p = oa();
                        a.$watchCollection(q, function (f) {
                            var l, q, s, v, z, A, B, C, D, E, F, G, H = b[0], I = oa();
                            if (r && (a[r] = f), c(f)) D = f, C = w || x; else {
                                C = w || y, D = [];
                                for (var J in f)Fd.call(f, J) && "$" !== J.charAt(0) && D.push(J)
                            }
                            for (v = D.length, F = new Array(v), l = 0; l < v; l++)if (z = f === D ? l : D[l], A = f[z], B = C(z, A, l), p[B]) E = p[B], delete p[B], I[B] = E, F[l] = E; else {
                                if (I[B])throw d(F, function (a) {
                                    a && a.scope && (p[a.id] = a)
                                }), h("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", m, B, A);
                                F[l] = {id: B, scope: void 0, clone: void 0}, I[B] = !0
                            }
                            for (var K in p) {
                                if (E = p[K], G = na(E.clone), e.leave(G), G[0].parentNode)for (l = 0, q = G.length; l < q; l++)G[l][g] = !0;
                                E.scope.$destroy()
                            }
                            for (l = 0; l < v; l++)if (z = f === D ? l : D[l], A = f[z], E = F[l], E.scope) {
                                s = H;
                                do s = s.nextSibling; while (s && s[g]);
                                j(E) != s && e.move(na(E.clone), null, H), H = k(E), i(E.scope, l, t, A, u, z, v)
                            } else o(function (a, b) {
                                E.scope = b;
                                var c = n.cloneNode(!1);
                                a[a.length++] = c, e.enter(a, null, H), H = c, E.clone = a, I[E.id] = E, i(E.scope, l, t, A, u, z, v)
                            });
                            p = I
                        })
                    }
                }
            }
        }], Lg = "ng-hide", Mg = "ng-hide-animate", Ng = ["$animate", function (a) {
            return {
                restrict: "A", multiElement: !0, link: function (b, c, d) {
                    b.$watch(d.ngShow, function (b) {
                        a[b ? "removeClass" : "addClass"](c, Lg, {tempClasses: Mg})
                    })
                }
            }
        }], Og = ["$animate", function (a) {
            return {
                restrict: "A", multiElement: !0, link: function (b, c, d) {
                    b.$watch(d.ngHide, function (b) {
                        a[b ? "addClass" : "removeClass"](c, Lg, {tempClasses: Mg})
                    })
                }
            }
        }], Pg = jd(function (a, b, c) {
            a.$watch(c.ngStyle, function (a, c) {
                c && a !== c && d(c, function (a, c) {
                    b.css(c, "")
                }), a && b.css(a)
            }, !0)
        }), Qg = ["$animate", "$compile", function (a, b) {
            return {
                require: "ngSwitch", controller: ["$scope", function () {
                    this.cases = {}
                }], link: function (c, e, f, g) {
                    var h = f.ngSwitch || f.on, i = [], j = [], k = [], l = [], m = function (a, b) {
                        return function () {
                            a.splice(b, 1)
                        }
                    };
                    c.$watch(h, function (c) {
                        var e, f;
                        for (e = 0, f = k.length; e < f; ++e)a.cancel(k[e]);
                        for (k.length = 0, e = 0, f = l.length; e < f; ++e) {
                            var h = na(j[e].clone);
                            l[e].$destroy();
                            var n = k[e] = a.leave(h);
                            n.then(m(k, e))
                        }
                        j.length = 0, l.length = 0, (i = g.cases["!" + c] || g.cases["?"]) && d(i, function (c) {
                            c.transclude(function (d, e) {
                                l.push(e);
                                var f = c.element;
                                d[d.length++] = b.$$createComment("end ngSwitchWhen");
                                var g = {clone: d};
                                j.push(g), a.enter(d, f.parent(), f)
                            })
                        })
                    })
                }
            }
        }], Rg = jd({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (a, b, c, d, e) {
                d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || [], d.cases["!" + c.ngSwitchWhen].push({
                    transclude: e,
                    element: b
                })
            }
        }), Sg = jd({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (a, b, c, d, e) {
                d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({transclude: e, element: b})
            }
        }), Tg = b("ngTransclude"), Ug = jd({
            restrict: "EAC", link: function (a, b, c, d, e) {
                function f(a) {
                    a.length && (b.empty(), b.append(a))
                }

                if (c.ngTransclude === c.$attr.ngTransclude && (c.ngTransclude = ""), !e)throw Tg("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", Y(b));
                var g = c.ngTransclude || c.ngTranscludeSlot;
                e(f, null, g)
            }
        }), Vg = ["$templateCache", function (a) {
            return {
                restrict: "E", terminal: !0, compile: function (b, c) {
                    if ("text/ng-template" == c.type) {
                        var d = c.id, e = b[0].text;
                        a.put(d, e)
                    }
                }
            }
        }], Wg = {$setViewValue: n, $render: n}, Xg = ["$element", "$scope", function (b, c) {
            var d = this, e = new $a;
            d.ngModelCtrl = Wg, d.unknownOption = Ld(a.document.createElement("option")), d.renderUnknownOption = function (a) {
                var c = "? " + Za(a) + " ?";
                d.unknownOption.val(c), b.prepend(d.unknownOption), b.val(c)
            }, c.$on("$destroy", function () {
                d.renderUnknownOption = n
            }), d.removeUnknownOption = function () {
                d.unknownOption.parent() && d.unknownOption.remove()
            }, d.readValue = function () {
                return d.removeUnknownOption(), b.val()
            }, d.writeValue = function (a) {
                d.hasOption(a) ? (d.removeUnknownOption(), b.val(a), "" === a && d.emptyOption.prop("selected", !0)) : null == a && d.emptyOption ? (d.removeUnknownOption(), b.val("")) : d.renderUnknownOption(a)
            }, d.addOption = function (a, b) {
                if (b[0].nodeType !== he) {
                    la(a, '"option value"'), "" === a && (d.emptyOption = b);
                    var c = e.get(a) || 0;
                    e.put(a, c + 1), d.ngModelCtrl.$render(), Cd(b)
                }
            }, d.removeOption = function (a) {
                var b = e.get(a);
                b && (1 === b ? (e.remove(a), "" === a && (d.emptyOption = void 0)) : e.put(a, b - 1))
            }, d.hasOption = function (a) {
                return !!e.get(a)
            }, d.registerOption = function (a, b, c, e, f) {
                if (e) {
                    var g;
                    c.$observe("value", function (a) {
                        s(g) && d.removeOption(g), g = a, d.addOption(a, b)
                    })
                } else f ? a.$watch(f, function (a, e) {
                    c.$set("value", a), e !== a && d.removeOption(e), d.addOption(a, b)
                }) : d.addOption(c.value, b);
                b.on("$destroy", function () {
                    d.removeOption(c.value), d.ngModelCtrl.$render()
                })
            }
        }], Yg = function () {
            function a(a, b, c, e) {
                var f = e[1];
                if (f) {
                    var g = e[0];
                    if (g.ngModelCtrl = f, b.on("change", function () {
                            a.$apply(function () {
                                f.$setViewValue(g.readValue())
                            })
                        }), c.multiple) {
                        g.readValue = function () {
                            var a = [];
                            return d(b.find("option"), function (b) {
                                b.selected && a.push(b.value)
                            }), a
                        }, g.writeValue = function (a) {
                            var c = new $a(a);
                            d(b.find("option"), function (a) {
                                a.selected = s(c.get(a.value))
                            })
                        };
                        var h, i = NaN;
                        a.$watch(function () {
                            i !== f.$viewValue || O(h, f.$viewValue) || (h = qa(f.$viewValue), f.$render()), i = f.$viewValue
                        }), f.$isEmpty = function (a) {
                            return !a || 0 === a.length
                        }
                    }
                }
            }

            function b(a, b, c, d) {
                var e = d[1];
                if (e) {
                    var f = d[0];
                    e.$render = function () {
                        f.writeValue(e.$viewValue)
                    }
                }
            }

            return {restrict: "E", require: ["select", "?ngModel"], controller: Xg, priority: 1, link: {pre: a, post: b}}
        }, Zg = ["$interpolate", function (a) {
            return {
                restrict: "E", priority: 100, compile: function (b, c) {
                    if (s(c.value))var d = a(c.value, !0); else {
                        var e = a(b.text(), !0);
                        e || c.$set("value", b.text())
                    }
                    return function (a, b, c) {
                        var f = "$selectController", g = b.parent(), h = g.data(f) || g.parent().data(f);
                        h && h.registerOption(a, b, c, d, e)
                    }
                }
            }
        }], $g = p({restrict: "E", terminal: !1}), _g = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, b, c, d) {
                    d && (c.required = !0, d.$validators.required = function (a, b) {
                        return !c.required || !d.$isEmpty(b)
                    }, c.$observe("required", function () {
                        d.$validate()
                    }))
                }
            }
        }, ah = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, c, d, e) {
                    if (e) {
                        var f, g = d.ngPattern || d.pattern;
                        d.$observe("pattern", function (a) {
                            if (v(a) && a.length > 0 && (a = new RegExp("^" + a + "$")), a && !a.test)throw b("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", g, a, Y(c));
                            f = a || void 0, e.$validate()
                        }), e.$validators.pattern = function (a, b) {
                            return e.$isEmpty(b) || r(f) || f.test(b)
                        }
                    }
                }
            }
        }, bh = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, b, c, d) {
                    if (d) {
                        var e = -1;
                        c.$observe("maxlength", function (a) {
                            var b = l(a);
                            e = isNaN(b) ? -1 : b, d.$validate()
                        }), d.$validators.maxlength = function (a, b) {
                            return e < 0 || d.$isEmpty(b) || b.length <= e
                        }
                    }
                }
            }
        }, ch = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, b, c, d) {
                    if (d) {
                        var e = 0;
                        c.$observe("minlength", function (a) {
                            e = l(a) || 0, d.$validate()
                        }), d.$validators.minlength = function (a, b) {
                            return d.$isEmpty(b) || b.length >= e
                        }
                    }
                }
            }
        };
    return a.angular.bootstrap ? void(a.console && console.log("WARNING: Tried to load angular more than once.")) : (ia(), ta(Ud), Ud.module("ngLocale", [], ["$provide", function (a) {
        function b(a) {
            a += "";
            var b = a.indexOf(".");
            return b == -1 ? 0 : a.length - b - 1
        }

        function c(a, c) {
            var d = c;
            void 0 === d && (d = Math.min(b(a), 3));
            var e = Math.pow(10, d), f = (a * e | 0) % e;
            return {v: d, f: f}
        }

        var d = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
        a.value("$locale", {
            DATETIME_FORMATS: {
                AMPMS: ["AM", "PM"],
                DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                ERANAMES: ["Before Christ", "Anno Domini"],
                ERAS: ["BC", "AD"],
                FIRSTDAYOFWEEK: 6,
                MONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                SHORTMONTH: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                STANDALONEMONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                WEEKENDRANGE: [5, 6],
                fullDate: "EEEE, MMMM d, y",
                longDate: "MMMM d, y",
                medium: "MMM d, y h:mm:ss a",
                mediumDate: "MMM d, y",
                mediumTime: "h:mm:ss a",
                short: "M/d/yy h:mm a",
                shortDate: "M/d/yy",
                shortTime: "h:mm a"
            },
            NUMBER_FORMATS: {
                CURRENCY_SYM: "$",
                DECIMAL_SEP: ".",
                GROUP_SEP: ",",
                PATTERNS: [{
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 3,
                    minFrac: 0,
                    minInt: 1,
                    negPre: "-",
                    negSuf: "",
                    posPre: "",
                    posSuf: ""
                }, {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 2,
                    minFrac: 2,
                    minInt: 1,
                    negPre: "-¤",
                    negSuf: "",
                    posPre: "¤",
                    posSuf: ""
                }]
            },
            id: "en-us",
            localeID: "en_US",
            pluralCat: function (a, b) {
                var e = 0 | a, f = c(a, b);
                return 1 == e && 0 == f.v ? d.ONE : d.OTHER
            }
        })
    }]), void Ld(a.document).ready(function () {
        da(a.document, ea)
    }))
}(window), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'), function (a, b) {
    "use strict";
    function c(a, b, c) {
        if (!a)throw pa("areq", "Argument '{0}' is {1}", b || "?", c || "required");
        return a
    }

    function d(a, b) {
        return a || b ? a ? b ? (Q(a) && (a = a.join(" ")), Q(b) && (b = b.join(" ")), a + " " + b) : a : b : ""
    }

    function e(a) {
        var b = {};
        return a && (a.to || a.from) && (b.to = a.to, b.from = a.from), b
    }

    function f(a, b, c) {
        var d = "";
        return a = Q(a) ? a : a && R(a) && a.length ? a.split(/\s+/) : [], P(a, function (a, e) {
            a && a.length > 0 && (d += e > 0 ? " " : "", d += c ? b + a : a + b)
        }), d
    }

    function g(a, b) {
        var c = a.indexOf(b);
        b >= 0 && a.splice(c, 1)
    }

    function h(a) {
        if (a instanceof O)switch (a.length) {
            case 0:
                return a;
            case 1:
                if (a[0].nodeType === X)return a;
                break;
            default:
                return O(i(a))
        }
        if (a.nodeType === X)return O(a)
    }

    function i(a) {
        if (!a[0])return a;
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (c.nodeType == X)return c
        }
    }

    function j(a, b, c) {
        P(b, function (b) {
            a.addClass(b, c)
        })
    }

    function k(a, b, c) {
        P(b, function (b) {
            a.removeClass(b, c)
        })
    }

    function l(a) {
        return function (b, c) {
            c.addClass && (j(a, b, c.addClass), c.addClass = null), c.removeClass && (k(a, b, c.removeClass), c.removeClass = null)
        }
    }

    function m(a) {
        if (a = a || {}, !a.$$prepared) {
            var b = a.domOperation || L;
            a.domOperation = function () {
                a.$$domOperationFired = !0, b(), b = L
            }, a.$$prepared = !0
        }
        return a
    }

    function n(a, b) {
        o(a, b), p(a, b)
    }

    function o(a, b) {
        b.from && (a.css(b.from), b.from = null)
    }

    function p(a, b) {
        b.to && (a.css(b.to), b.to = null)
    }

    function q(a, b, c) {
        var d = b.options || {}, e = c.options || {}, f = (d.addClass || "") + " " + (e.addClass || ""),
            g = (d.removeClass || "") + " " + (e.removeClass || ""), h = r(a.attr("class"), f, g);
        e.preparationClasses && (d.preparationClasses = y(e.preparationClasses, d.preparationClasses), delete e.preparationClasses);
        var i = d.domOperation !== L ? d.domOperation : null;
        return N(d, e), i && (d.domOperation = i), h.addClass ? d.addClass = h.addClass : d.addClass = null, h.removeClass ? d.removeClass = h.removeClass : d.removeClass = null, b.addClass = d.addClass, b.removeClass = d.removeClass, d
    }

    function r(a, b, c) {
        function d(a) {
            R(a) && (a = a.split(" "));
            var b = {};
            return P(a, function (a) {
                a.length && (b[a] = !0)
            }), b
        }

        var e = 1, f = -1, g = {};
        a = d(a), b = d(b), P(b, function (a, b) {
            g[b] = e
        }), c = d(c), P(c, function (a, b) {
            g[b] = g[b] === e ? null : f
        });
        var h = {addClass: "", removeClass: ""};
        return P(g, function (b, c) {
            var d, g;
            b === e ? (d = "addClass", g = !a[c]) : b === f && (d = "removeClass", g = a[c]), g && (h[d].length && (h[d] += " "), h[d] += c)
        }), h
    }

    function s(a) {
        return a instanceof b.element ? a[0] : a
    }

    function t(a, b, c) {
        var d = "";
        b && (d = f(b, $, !0)), c.addClass && (d = y(d, f(c.addClass, Y))), c.removeClass && (d = y(d, f(c.removeClass, Z))), d.length && (c.preparationClasses = d, a.addClass(d))
    }

    function u(a, b) {
        b.preparationClasses && (a.removeClass(b.preparationClasses), b.preparationClasses = null), b.activeClasses && (a.removeClass(b.activeClasses), b.activeClasses = null)
    }

    function v(a, b) {
        var c = b ? "-" + b + "s" : "";
        return x(a, [na, c]), [na, c]
    }

    function w(a, b) {
        var c = b ? "paused" : "", d = J + ja;
        return x(a, [d, c]), [d, c]
    }

    function x(a, b) {
        var c = b[0], d = b[1];
        a.style[c] = d
    }

    function y(a, b) {
        return a ? b ? a + " " + b : a : b
    }

    function z(a) {
        return [ma, a + "s"]
    }

    function A(a, b) {
        var c = b ? la : na;
        return [c, a + "s"]
    }

    function B(a, b, c) {
        var d = Object.create(null), e = a.getComputedStyle(b) || {};
        return P(c, function (a, b) {
            var c = e[a];
            if (c) {
                var f = c.charAt(0);
                ("-" === f || "+" === f || f >= 0) && (c = C(c)), 0 === c && (c = null), d[b] = c
            }
        }), d
    }

    function C(a) {
        var b = 0, c = a.split(/\s*,\s*/);
        return P(c, function (a) {
            "s" == a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1)), a = parseFloat(a) || 0, b = b ? Math.max(a, b) : a
        }), b
    }

    function D(a) {
        return 0 === a || null != a
    }

    function E(a, b) {
        var c = H, d = a + "s";
        return b ? c += ea : d += " linear all", [c, d]
    }

    function F() {
        var a = Object.create(null);
        return {
            flush: function () {
                a = Object.create(null)
            }, count: function (b) {
                var c = a[b];
                return c ? c.total : 0
            }, get: function (b) {
                var c = a[b];
                return c && c.value
            }, put: function (b, c) {
                a[b] ? a[b].total++ : a[b] = {total: 1, value: c}
            }
        }
    }

    function G(a, b, c) {
        P(c, function (c) {
            a[c] = U(a[c]) ? a[c] : b.style.getPropertyValue(c)
        })
    }

    var H, I, J, K, L = b.noop, M = b.copy, N = b.extend, O = b.element, P = b.forEach, Q = b.isArray, R = b.isString,
        S = b.isObject, T = b.isUndefined, U = b.isDefined, V = b.isFunction, W = b.isElement, X = 1, Y = "-add",
        Z = "-remove", $ = "ng-", _ = "-active", aa = "-prepare", ba = "ng-animate", ca = "$$ngAnimateChildren",
        da = "";
    T(a.ontransitionend) && U(a.onwebkittransitionend) ? (da = "-webkit-", H = "WebkitTransition", I = "webkitTransitionEnd transitionend") : (H = "transition", I = "transitionend"), T(a.onanimationend) && U(a.onwebkitanimationend) ? (da = "-webkit-", J = "WebkitAnimation", K = "webkitAnimationEnd animationend") : (J = "animation", K = "animationend");
    var ea = "Duration", fa = "Property", ga = "Delay", ha = "TimingFunction", ia = "IterationCount", ja = "PlayState",
        ka = 9999, la = J + ga, ma = J + ea, na = H + ga, oa = H + ea, pa = b.$$minErr("ng"),
        qa = ["$$rAF", function (a) {
            function b(a) {
                d = d.concat(a), c()
            }

            function c() {
                if (d.length) {
                    for (var b = d.shift(), f = 0; f < b.length; f++)b[f]();
                    e || a(function () {
                        e || c()
                    })
                }
            }

            var d, e;
            return d = b.queue = [], b.waitUntilQuiet = function (b) {
                e && e(), e = a(function () {
                    e = null, b(), c()
                })
            }, b
        }], ra = ["$interpolate", function (a) {
            return {
                link: function (c, d, e) {
                    function f(a) {
                        a = "on" === a || "true" === a, d.data(ca, a)
                    }

                    var g = e.ngAnimateChildren;
                    b.isString(g) && 0 === g.length ? d.data(ca, !0) : (f(a(g)(c)), e.$observe("ngAnimateChildren", f))
                }
            }
        }], sa = "$$animateCss", ta = 1e3, ua = 3, va = 1.5, wa = {
            transitionDuration: oa,
            transitionDelay: na,
            transitionProperty: H + fa,
            animationDuration: ma,
            animationDelay: la,
            animationIterationCount: J + ia
        }, xa = {transitionDuration: oa, transitionDelay: na, animationDuration: ma, animationDelay: la},
        ya = ["$animateProvider", function (a) {
            var b = F(), c = F();
            this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue", function (a, d, h, i, j, k, q, r) {
                function t(a, b) {
                    var c = "$$ngAnimateParentKey", d = a.parentNode, e = d[c] || (d[c] = ++O);
                    return e + "-" + a.getAttribute("class") + "-" + b
                }

                function u(c, d, e, f) {
                    var g = b.get(e);
                    return g || (g = B(a, c, f), "infinite" === g.animationIterationCount && (g.animationIterationCount = 1)), b.put(e, g), g
                }

                function y(e, g, h, i) {
                    var j;
                    if (b.count(h) > 0 && (j = c.get(h), !j)) {
                        var k = f(g, "-stagger");
                        d.addClass(e, k), j = B(a, e, i), j.animationDuration = Math.max(j.animationDuration, 0), j.transitionDuration = Math.max(j.transitionDuration, 0), d.removeClass(e, k), c.put(h, j)
                    }
                    return j || {}
                }

                function C(a) {
                    R.push(a), q.waitUntilQuiet(function () {
                        b.flush(), c.flush();
                        for (var a = j(), d = 0; d < R.length; d++)R[d](a);
                        R.length = 0
                    })
                }

                function F(a, b, c) {
                    var d = u(a, b, c, wa), e = d.animationDelay, f = d.transitionDelay;
                    return d.maxDelay = e && f ? Math.max(e, f) : e || f, d.maxDuration = Math.max(d.animationDuration * d.animationIterationCount, d.transitionDuration), d
                }

                var N = l(d), O = 0, R = [];
                return function (a, c) {
                    function j() {
                        q()
                    }

                    function l() {
                        q(!0)
                    }

                    function q(b) {
                        if (!(V || X && W)) {
                            V = !0, W = !1, S.$$skipPreparationClasses || d.removeClass(a, wa), d.removeClass(a, za), w(U, !1), v(U, !1), P(ja, function (a) {
                                U.style[a[0]] = ""
                            }), N(a, S), n(a, S), Object.keys(T).length && P(T, function (a, b) {
                                a ? U.style.setProperty(b, a) : U.style.removeProperty(b)
                            }), S.onDone && S.onDone(), na && na.length && a.off(na.join(" "), O);
                            var c = a.data(sa);
                            c && (i.cancel(c[0].timer), a.removeData(sa)), aa && aa.complete(!b)
                        }
                    }

                    function u(a) {
                        Na.blockTransition && v(U, a), Na.blockKeyframeAnimation && w(U, !!a)
                    }

                    function B() {
                        return aa = new h({end: j, cancel: l}), C(L), q(), {
                            $$willAnimate: !1, start: function () {
                                return aa
                            }, end: j
                        }
                    }

                    function O(a) {
                        a.stopPropagation();
                        var b = a.originalEvent || a, c = b.$manualTimeStamp || Date.now(),
                            d = parseFloat(b.elapsedTime.toFixed(ua));
                        Math.max(c - ia, 0) >= da && d >= ea && (X = !0, q())
                    }

                    function R() {
                        function b() {
                            if (!V) {
                                if (u(!1), P(ja, function (a) {
                                        var b = a[0], c = a[1];
                                        U.style[b] = c
                                    }), N(a, S), d.addClass(a, za), Na.recalculateTimingStyles) {
                                    if (ya = U.className + " " + wa, Ca = t(U, ya), La = F(U, ya, Ca), Ma = La.maxDelay, ca = Math.max(Ma, 0), ea = La.maxDuration, 0 === ea)return void q();
                                    Na.hasTransitions = La.transitionDuration > 0, Na.hasAnimations = La.animationDuration > 0
                                }
                                if (Na.applyAnimationDelay && (Ma = "boolean" != typeof S.delay && D(S.delay) ? parseFloat(S.delay) : Ma, ca = Math.max(Ma, 0), La.animationDelay = Ma, Oa = A(Ma, !0), ja.push(Oa), U.style[Oa[0]] = Oa[1]), da = ca * ta, ga = ea * ta, S.easing) {
                                    var b, e = S.easing;
                                    Na.hasTransitions && (b = H + ha, ja.push([b, e]), U.style[b] = e), Na.hasAnimations && (b = J + ha, ja.push([b, e]), U.style[b] = e)
                                }
                                La.transitionDuration && na.push(I), La.animationDuration && na.push(K), ia = Date.now();
                                var f = da + va * ga, g = ia + f, h = a.data(sa) || [], j = !0;
                                if (h.length) {
                                    var k = h[0];
                                    j = g > k.expectedEndTime, j ? i.cancel(k.timer) : h.push(q)
                                }
                                if (j) {
                                    var l = i(c, f, !1);
                                    h[0] = {timer: l, expectedEndTime: g}, h.push(q), a.data(sa, h)
                                }
                                na.length && a.on(na.join(" "), O), S.to && (S.cleanupStyles && G(T, U, Object.keys(S.to)), p(a, S))
                            }
                        }

                        function c() {
                            var b = a.data(sa);
                            if (b) {
                                for (var c = 1; c < b.length; c++)b[c]();
                                a.removeData(sa)
                            }
                        }

                        if (!V) {
                            if (!U.parentNode)return void q();
                            var e = function (a) {
                                    if (X) W && a && (W = !1, q()); else if (W = !a, La.animationDuration) {
                                        var b = w(U, W);
                                        W ? ja.push(b) : g(ja, b)
                                    }
                                },
                                f = Ja > 0 && (La.transitionDuration && 0 === Da.transitionDuration || La.animationDuration && 0 === Da.animationDuration) && Math.max(Da.animationDelay, Da.transitionDelay);
                            f ? i(b, Math.floor(f * Ja * ta), !1) : b(), ba.resume = function () {
                                e(!0)
                            }, ba.pause = function () {
                                e(!1)
                            }
                        }
                    }

                    var S = c || {};
                    S.$$prepared || (S = m(M(S)));
                    var T = {}, U = s(a);
                    if (!U || !U.parentNode || !r.enabled())return B();
                    var V, W, X, aa, ba, ca, da, ea, ga, ia, ja = [], la = a.attr("class"), ma = e(S), na = [];
                    if (0 === S.duration || !k.animations && !k.transitions)return B();
                    var oa = S.event && Q(S.event) ? S.event.join(" ") : S.event, pa = oa && S.structural, qa = "",
                        ra = "";
                    pa ? qa = f(oa, $, !0) : oa && (qa = oa), S.addClass && (ra += f(S.addClass, Y)), S.removeClass && (ra.length && (ra += " "), ra += f(S.removeClass, Z)), S.applyClassesEarly && ra.length && N(a, S);
                    var wa = [qa, ra].join(" ").trim(), ya = la + " " + wa, za = f(wa, _),
                        Aa = ma.to && Object.keys(ma.to).length > 0, Ba = (S.keyframeStyle || "").length > 0;
                    if (!Ba && !Aa && !wa)return B();
                    var Ca, Da;
                    if (S.stagger > 0) {
                        var Ea = parseFloat(S.stagger);
                        Da = {transitionDelay: Ea, animationDelay: Ea, transitionDuration: 0, animationDuration: 0}
                    } else Ca = t(U, ya), Da = y(U, wa, Ca, xa);
                    S.$$skipPreparationClasses || d.addClass(a, wa);
                    var Fa;
                    if (S.transitionStyle) {
                        var Ga = [H, S.transitionStyle];
                        x(U, Ga), ja.push(Ga)
                    }
                    if (S.duration >= 0) {
                        Fa = U.style[H].length > 0;
                        var Ha = E(S.duration, Fa);
                        x(U, Ha), ja.push(Ha)
                    }
                    if (S.keyframeStyle) {
                        var Ia = [J, S.keyframeStyle];
                        x(U, Ia), ja.push(Ia)
                    }
                    var Ja = Da ? S.staggerIndex >= 0 ? S.staggerIndex : b.count(Ca) : 0, Ka = 0 === Ja;
                    Ka && !S.skipBlocking && v(U, ka);
                    var La = F(U, ya, Ca), Ma = La.maxDelay;
                    ca = Math.max(Ma, 0), ea = La.maxDuration;
                    var Na = {};
                    if (Na.hasTransitions = La.transitionDuration > 0, Na.hasAnimations = La.animationDuration > 0, Na.hasTransitionAll = Na.hasTransitions && "all" == La.transitionProperty, Na.applyTransitionDuration = Aa && (Na.hasTransitions && !Na.hasTransitionAll || Na.hasAnimations && !Na.hasTransitions), Na.applyAnimationDuration = S.duration && Na.hasAnimations, Na.applyTransitionDelay = D(S.delay) && (Na.applyTransitionDuration || Na.hasTransitions), Na.applyAnimationDelay = D(S.delay) && Na.hasAnimations, Na.recalculateTimingStyles = ra.length > 0, (Na.applyTransitionDuration || Na.applyAnimationDuration) && (ea = S.duration ? parseFloat(S.duration) : ea, Na.applyTransitionDuration && (Na.hasTransitions = !0, La.transitionDuration = ea, Fa = U.style[H + fa].length > 0, ja.push(E(ea, Fa))), Na.applyAnimationDuration && (Na.hasAnimations = !0, La.animationDuration = ea, ja.push(z(ea)))), 0 === ea && !Na.recalculateTimingStyles)return B();
                    if (null != S.delay) {
                        var Oa;
                        "boolean" != typeof S.delay && (Oa = parseFloat(S.delay), ca = Math.max(Oa, 0)), Na.applyTransitionDelay && ja.push(A(Oa)), Na.applyAnimationDelay && ja.push(A(Oa, !0))
                    }
                    return null == S.duration && La.transitionDuration > 0 && (Na.recalculateTimingStyles = Na.recalculateTimingStyles || Ka), da = ca * ta, ga = ea * ta, S.skipBlocking || (Na.blockTransition = La.transitionDuration > 0, Na.blockKeyframeAnimation = La.animationDuration > 0 && Da.animationDelay > 0 && 0 === Da.animationDuration), S.from && (S.cleanupStyles && G(T, U, Object.keys(S.from)), o(a, S)), Na.blockTransition || Na.blockKeyframeAnimation ? u(ea) : S.skipBlocking || v(U, !1), {
                        $$willAnimate: !0,
                        end: j,
                        start: function () {
                            if (!V)return ba = {end: j, cancel: l, resume: null, pause: null}, aa = new h(ba), C(R), aa
                        }
                    }
                }
            }]
        }], za = ["$$animationProvider", function (a) {
            function b(a) {
                return a.parentNode && 11 === a.parentNode.nodeType
            }

            a.drivers.push("$$animateCssDriver");
            var c = "ng-animate-shim", d = "ng-anchor", e = "ng-anchor-out", f = "ng-anchor-in";
            this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function (a, g, h, i, j, k, m) {
                function n(a) {
                    return a.replace(/\bng-\S+\b/g, "")
                }

                function o(a, b) {
                    return R(a) && (a = a.split(" ")), R(b) && (b = b.split(" ")), a.filter(function (a) {
                        return b.indexOf(a) === -1
                    }).join(" ")
                }

                function p(b, g, i) {
                    function j(a) {
                        var b = {}, c = s(a).getBoundingClientRect();
                        return P(["width", "height", "top", "left"], function (a) {
                            var d = c[a];
                            switch (a) {
                                case"top":
                                    d += t.scrollTop;
                                    break;
                                case"left":
                                    d += t.scrollLeft
                            }
                            b[a] = Math.floor(d) + "px"
                        }), b
                    }

                    function k() {
                        var b = a(q, {addClass: e, delay: !0, from: j(g)});
                        return b.$$willAnimate ? b : null
                    }

                    function l(a) {
                        return a.attr("class") || ""
                    }

                    function m() {
                        var b = n(l(i)), c = o(b, r), d = o(r, b),
                            g = a(q, {to: j(i), addClass: f + " " + c, removeClass: e + " " + d, delay: !0});
                        return g.$$willAnimate ? g : null
                    }

                    function p() {
                        q.remove(), g.removeClass(c), i.removeClass(c)
                    }

                    var q = O(s(g).cloneNode(!0)), r = n(l(q));
                    g.addClass(c), i.addClass(c), q.addClass(d), v.append(q);
                    var u, w = k();
                    if (!w && (u = m(), !u))return p();
                    var x = w || u;
                    return {
                        start: function () {
                            function a() {
                                c && c.end()
                            }

                            var b, c = x.start();
                            return c.done(function () {
                                return c = null, !u && (u = m()) ? (c = u.start(), c.done(function () {
                                    c = null, p(), b.complete()
                                }), c) : (p(), void b.complete())
                            }), b = new h({end: a, cancel: a})
                        }
                    }
                }

                function q(a, b, c, d) {
                    var e = r(a, L), f = r(b, L), g = [];
                    if (P(d, function (a) {
                            var b = a.out, d = a.in, e = p(c, b, d);
                            e && g.push(e)
                        }), e || f || 0 !== g.length)return {
                        start: function () {
                            function a() {
                                P(b, function (a) {
                                    a.end()
                                })
                            }

                            var b = [];
                            e && b.push(e.start()), f && b.push(f.start()), P(g, function (a) {
                                b.push(a.start())
                            });
                            var c = new h({end: a, cancel: a});
                            return h.all(b, function (a) {
                                c.complete(a)
                            }), c
                        }
                    }
                }

                function r(b) {
                    var c = b.element, d = b.options || {};
                    b.structural && (d.event = b.event, d.structural = !0, d.applyClassesEarly = !0, "leave" === b.event && (d.onDone = d.domOperation)), d.preparationClasses && (d.event = y(d.event, d.preparationClasses));
                    var e = a(c, d);
                    return e.$$willAnimate ? e : null
                }

                if (!j.animations && !j.transitions)return L;
                var t = m[0].body, u = s(i), v = O(b(u) || t.contains(u) ? u : t);
                l(k);
                return function (a) {
                    return a.from && a.to ? q(a.from, a.to, a.classes, a.anchors) : r(a)
                }
            }]
        }], Aa = ["$animateProvider", function (a) {
            this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function (b, c, d) {
                function e(c) {
                    c = Q(c) ? c : c.split(" ");
                    for (var d = [], e = {}, f = 0; f < c.length; f++) {
                        var g = c[f], h = a.$$registeredAnimations[g];
                        h && !e[g] && (d.push(b.get(h)), e[g] = !0)
                    }
                    return d
                }

                var f = l(d);
                return function (a, b, d, g) {
                    function h() {
                        g.domOperation(), f(a, g)
                    }

                    function i() {
                        o = !0, h(), n(a, g)
                    }

                    function j(a, b, d, e, f) {
                        var g;
                        switch (d) {
                            case"animate":
                                g = [b, e.from, e.to, f];
                                break;
                            case"setClass":
                                g = [b, r, s, f];
                                break;
                            case"addClass":
                                g = [b, r, f];
                                break;
                            case"removeClass":
                                g = [b, s, f];
                                break;
                            default:
                                g = [b, f]
                        }
                        g.push(e);
                        var h = a.apply(a, g);
                        if (h)if (V(h.start) && (h = h.start()), h instanceof c) h.done(f); else if (V(h))return h;
                        return L
                    }

                    function k(a, b, d, e, f) {
                        var g = [];
                        return P(e, function (e) {
                            var h = e[f];
                            h && g.push(function () {
                                var e, f, g = !1, i = function (a) {
                                    g || (g = !0, (f || L)(a), e.complete(!a))
                                };
                                return e = new c({
                                    end: function () {
                                        i()
                                    }, cancel: function () {
                                        i(!0)
                                    }
                                }), f = j(h, a, b, d, function (a) {
                                    var b = a === !1;
                                    i(b)
                                }), e
                            })
                        }), g
                    }

                    function l(a, b, d, e, f) {
                        var g = k(a, b, d, e, f);
                        if (0 === g.length) {
                            var h, i;
                            "beforeSetClass" === f ? (h = k(a, "removeClass", d, e, "beforeRemoveClass"), i = k(a, "addClass", d, e, "beforeAddClass")) : "setClass" === f && (h = k(a, "removeClass", d, e, "removeClass"), i = k(a, "addClass", d, e, "addClass")), h && (g = g.concat(h)), i && (g = g.concat(i))
                        }
                        if (0 !== g.length)return function (a) {
                            var b = [];
                            return g.length && P(g, function (a) {
                                b.push(a())
                            }), b.length ? c.all(b, a) : a(), function (a) {
                                P(b, function (b) {
                                    a ? b.cancel() : b.end()
                                })
                            }
                        }
                    }

                    var o = !1;
                    3 === arguments.length && S(d) && (g = d, d = null), g = m(g), d || (d = a.attr("class") || "", g.addClass && (d += " " + g.addClass), g.removeClass && (d += " " + g.removeClass));
                    var p, q, r = g.addClass, s = g.removeClass, t = e(d);
                    if (t.length) {
                        var u, v;
                        "leave" == b ? (v = "leave", u = "afterLeave") : (v = "before" + b.charAt(0).toUpperCase() + b.substr(1), u = b), "enter" !== b && "move" !== b && (p = l(a, b, g, t, v)), q = l(a, b, g, t, u)
                    }
                    if (p || q) {
                        var w;
                        return {
                            $$willAnimate: !0, end: function () {
                                return w ? w.end() : (i(), w = new c, w.complete(!0)), w
                            }, start: function () {
                                function a(a) {
                                    i(a), w.complete(a)
                                }

                                function b(b) {
                                    o || ((d || L)(b), a(b))
                                }

                                if (w)return w;
                                w = new c;
                                var d, e = [];
                                return p && e.push(function (a) {
                                    d = p(a)
                                }), e.length ? e.push(function (a) {
                                    h(), a(!0)
                                }) : h(), q && e.push(function (a) {
                                    d = q(a)
                                }), w.setHost({
                                    end: function () {
                                        b()
                                    }, cancel: function () {
                                        b(!0)
                                    }
                                }), c.chain(e, a), w
                            }
                        }
                    }
                }
            }]
        }], Ba = ["$$animationProvider", function (a) {
            a.drivers.push("$$animateJsDriver"), this.$get = ["$$animateJs", "$$AnimateRunner", function (a, b) {
                function c(b) {
                    var c = b.element, d = b.event, e = b.options, f = b.classes;
                    return a(c, d, f, e)
                }

                return function (a) {
                    if (a.from && a.to) {
                        var d = c(a.from), e = c(a.to);
                        if (!d && !e)return;
                        return {
                            start: function () {
                                function a() {
                                    return function () {
                                        P(f, function (a) {
                                            a.end()
                                        })
                                    }
                                }

                                function c(a) {
                                    g.complete(a)
                                }

                                var f = [];
                                d && f.push(d.start()), e && f.push(e.start()), b.all(f, c);
                                var g = new b({end: a(), cancel: a()});
                                return g
                            }
                        }
                    }
                    return c(a)
                }
            }]
        }], Ca = "data-ng-animate", Da = "$ngAnimatePin", Ea = ["$animateProvider", function (d) {
            function e(a) {
                if (!a)return null;
                var b = a.split(p), c = Object.create(null);
                return P(b, function (a) {
                    c[a] = !0
                }), c
            }

            function f(a, b) {
                if (a && b) {
                    var c = e(b);
                    return a.split(p).some(function (a) {
                        return c[a]
                    })
                }
            }

            function g(a, b, c, d) {
                return r[a].some(function (a) {
                    return a(b, c, d)
                })
            }

            function j(a, b) {
                var c = (a.addClass || "").length > 0, d = (a.removeClass || "").length > 0;
                return b ? c && d : c || d
            }

            var k = 1, o = 2, p = " ", r = this.rules = {skip: [], cancel: [], join: []};
            r.join.push(function (a, b, c) {
                return !b.structural && j(b)
            }), r.skip.push(function (a, b, c) {
                return !b.structural && !j(b)
            }), r.skip.push(function (a, b, c) {
                return "leave" == c.event && b.structural
            }), r.skip.push(function (a, b, c) {
                return c.structural && c.state === o && !b.structural
            }), r.cancel.push(function (a, b, c) {
                return c.structural && b.structural
            }), r.cancel.push(function (a, b, c) {
                return c.state === o && b.structural
            }), r.cancel.push(function (a, b, c) {
                if (c.structural)return !1;
                var d = b.addClass, e = b.removeClass, g = c.addClass, h = c.removeClass;
                return !(T(d) && T(e) || T(g) && T(h)) && (f(d, h) || f(e, g))
            }), this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", function (e, f, p, r, v, w, x, y, z, A) {
                function B() {
                    var a = !1;
                    return function (b) {
                        a ? b() : f.$$postDigest(function () {
                            a = !0, b()
                        })
                    }
                }

                function C(a, b) {
                    return q(a, b, {})
                }

                function D(a, b, c) {
                    var d = s(b), e = s(a), f = [], g = _[c];
                    return g && P(g, function (a) {
                        ea.call(a.node, d) ? f.push(a.callback) : "leave" === c && ea.call(a.node, e) && f.push(a.callback)
                    }), f
                }

                function E(a, b, c) {
                    var d = i(b);
                    return a.filter(function (a) {
                        var b = a.node === d && (!c || a.callback === c);
                        return !b
                    })
                }

                function F(a, b) {
                    "close" !== a || b[0].parentNode || fa.off(b)
                }

                function G(a, b, c) {
                    function d(b, c, d, f) {
                        z(function () {
                            var b = D(p, a, c);
                            b.length ? e(function () {
                                P(b, function (b) {
                                    b(a, d, f)
                                }), F(d, a)
                            }) : F(d, a)
                        }), b.progress(c, d, f)
                    }

                    function i(b) {
                        u(a, v), da(a, v), n(a, v), v.domOperation(), y.complete(!b)
                    }

                    var l, p, v = M(c);
                    a = h(a), a && (l = s(a), p = a.parent()), v = m(v);
                    var y = new x, z = B();
                    if (Q(v.addClass) && (v.addClass = v.addClass.join(" ")), v.addClass && !R(v.addClass) && (v.addClass = null), Q(v.removeClass) && (v.removeClass = v.removeClass.join(" ")), v.removeClass && !R(v.removeClass) && (v.removeClass = null), v.from && !S(v.from) && (v.from = null), v.to && !S(v.to) && (v.to = null), !l)return i(), y;
                    var A = [l.className, v.addClass, v.removeClass].join(" ");
                    if (!ba(A))return i(), y;
                    var E = ["enter", "move", "leave"].indexOf(b) >= 0, G = r[0].hidden, J = !Z || G || Y.get(l),
                        N = !J && V.get(l) || {}, O = !!N.state;
                    if (J || O && N.state == k || (J = !K(a, p, b)), J)return G && d(y, b, "start"), i(), G && d(y, b, "close"), y;
                    E && H(a);
                    var T = {
                        structural: E,
                        element: a,
                        event: b,
                        addClass: v.addClass,
                        removeClass: v.removeClass,
                        close: i,
                        options: v,
                        runner: y
                    };
                    if (O) {
                        var U = g("skip", a, T, N);
                        if (U)return N.state === o ? (i(), y) : (q(a, N, T), N.runner);
                        var W = g("cancel", a, T, N);
                        if (W)if (N.state === o) N.runner.end(); else {
                            if (!N.structural)return q(a, N, T), N.runner;
                            N.close()
                        } else {
                            var X = g("join", a, T, N);
                            if (X) {
                                if (N.state !== o)return t(a, E ? b : null, v), b = T.event = N.event, v = q(a, N, T), N.runner;
                                C(a, T)
                            }
                        }
                    } else C(a, T);
                    var $ = T.structural;
                    if ($ || ($ = "animate" === T.event && Object.keys(T.options.to || {}).length > 0 || j(T)), !$)return i(), I(a), y;
                    var _ = (N.counter || 0) + 1;
                    return T.counter = _, L(a, k, T), f.$$postDigest(function () {
                        var c = V.get(l), e = !c;
                        c = c || {};
                        var f = a.parent() || [], g = f.length > 0 && ("animate" === c.event || c.structural || j(c));
                        if (e || c.counter !== _ || !g)return e && (da(a, v), n(a, v)), (e || E && c.event !== b) && (v.domOperation(), y.end()), void(g || I(a));
                        b = !c.structural && j(c, !0) ? "setClass" : c.event, L(a, o);
                        var h = w(a, b, c.options);
                        y.setHost(h), d(y, b, "start", {}), h.done(function (c) {
                            i(!c);
                            var e = V.get(l);
                            e && e.counter === _ && I(s(a)), d(y, b, "close", {})
                        })
                    }), y
                }

                function H(a) {
                    var b = s(a), c = b.querySelectorAll("[" + Ca + "]");
                    P(c, function (a) {
                        var b = parseInt(a.getAttribute(Ca)), c = V.get(a);
                        if (c)switch (b) {
                            case o:
                                c.runner.end();
                            case k:
                                V.remove(a)
                        }
                    })
                }

                function I(a) {
                    var b = s(a);
                    b.removeAttribute(Ca), V.remove(b)
                }

                function J(a, b) {
                    return s(a) === s(b)
                }

                function K(a, b, c) {
                    var d, e = O(r[0].body), f = J(a, e) || "HTML" === a[0].nodeName, g = J(a, p), h = !1, i = Y.get(s(a)),
                        j = O.data(a[0], Da);
                    for (j && (b = j), b = s(b); b && (g || (g = J(b, p)),
                    b.nodeType === X);) {
                        var k = V.get(b) || {};
                        if (!h) {
                            var l = Y.get(b);
                            if (l === !0 && i !== !1) {
                                i = !0;
                                break
                            }
                            l === !1 && (i = !1), h = k.structural
                        }
                        if (T(d) || d === !0) {
                            var m = O.data(b, ca);
                            U(m) && (d = m)
                        }
                        if (h && d === !1)break;
                        if (f || (f = J(b, e)), f && g)break;
                        b = g || !(j = O.data(b, Da)) ? b.parentNode : s(j)
                    }
                    var n = (!h || d) && i !== !0;
                    return n && g && f
                }

                function L(a, b, c) {
                    c = c || {}, c.state = b;
                    var d = s(a);
                    d.setAttribute(Ca, b);
                    var e = V.get(d), f = e ? N(e, c) : c;
                    V.put(d, f)
                }

                var V = new v, Y = new v, Z = null, $ = f.$watch(function () {
                    return 0 === y.totalPendingRequests
                }, function (a) {
                    a && ($(), f.$$postDigest(function () {
                        f.$$postDigest(function () {
                            null === Z && (Z = !0)
                        })
                    }))
                }), _ = {}, aa = d.classNameFilter(), ba = aa ? function (a) {
                    return aa.test(a)
                } : function () {
                    return !0
                }, da = l(z), ea = a.Node.prototype.contains || function (a) {
                        return this === a || !!(16 & this.compareDocumentPosition(a))
                    }, fa = {
                    on: function (a, b, c) {
                        var d = i(b);
                        _[a] = _[a] || [], _[a].push({node: d, callback: c}), O(b).on("$destroy", function () {
                            var e = V.get(d);
                            e || fa.off(a, b, c)
                        })
                    }, off: function (a, c, d) {
                        if (1 !== arguments.length || b.isString(arguments[0])) {
                            var e = _[a];
                            e && (_[a] = 1 === arguments.length ? null : E(e, c, d))
                        } else {
                            c = arguments[0];
                            for (var f in _)_[f] = E(_[f], c)
                        }
                    }, pin: function (a, b) {
                        c(W(a), "element", "not an element"), c(W(b), "parentElement", "not an element"), a.data(Da, b)
                    }, push: function (a, b, c, d) {
                        return c = c || {}, c.domOperation = d, G(a, b, c)
                    }, enabled: function (a, b) {
                        var c = arguments.length;
                        if (0 === c) b = !!Z; else {
                            var d = W(a);
                            if (d) {
                                var e = s(a), f = Y.get(e);
                                1 === c ? b = !f : Y.put(e, !b)
                            } else b = Z = !!a
                        }
                        return b
                    }
                };
                return fa
            }]
        }], Fa = ["$animateProvider", function (a) {
            function b(a, b) {
                a.data(h, b)
            }

            function c(a) {
                a.removeData(h)
            }

            function e(a) {
                return a.data(h)
            }

            var f = "ng-animate-ref", g = this.drivers = [], h = "$$animationRunner";
            this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$HashMap", "$$rAFScheduler", function (a, h, i, j, k, o) {
                function p(a) {
                    function b(a) {
                        if (a.processed)return a;
                        a.processed = !0;
                        var c = a.domNode, d = c.parentNode;
                        f.put(c, a);
                        for (var g; d;) {
                            if (g = f.get(d)) {
                                g.processed || (g = b(g));
                                break
                            }
                            d = d.parentNode
                        }
                        return (g || e).children.push(a), a
                    }

                    function c(a) {
                        var b, c = [], d = [];
                        for (b = 0; b < a.children.length; b++)d.push(a.children[b]);
                        var e = d.length, f = 0, g = [];
                        for (b = 0; b < d.length; b++) {
                            var h = d[b];
                            e <= 0 && (e = f, f = 0, c.push(g), g = []), g.push(h.fn), h.children.forEach(function (a) {
                                f++, d.push(a)
                            }), e--
                        }
                        return g.length && c.push(g), c
                    }

                    var d, e = {children: []}, f = new k;
                    for (d = 0; d < a.length; d++) {
                        var g = a[d];
                        f.put(g.domNode, a[d] = {domNode: g.domNode, fn: g.fn, children: []})
                    }
                    for (d = 0; d < a.length; d++)b(a[d]);
                    return c(e)
                }

                var q = [], r = l(a);
                return function (k, l, t) {
                    function u(a) {
                        var b = "[" + f + "]", c = a.hasAttribute(f) ? [a] : a.querySelectorAll(b), d = [];
                        return P(c, function (a) {
                            var b = a.getAttribute(f);
                            b && b.length && d.push(a)
                        }), d
                    }

                    function v(a) {
                        var b = [], c = {};
                        P(a, function (a, d) {
                            var e = a.element, g = s(e), h = a.event, i = ["enter", "move"].indexOf(h) >= 0,
                                j = a.structural ? u(g) : [];
                            if (j.length) {
                                var k = i ? "to" : "from";
                                P(j, function (a) {
                                    var b = a.getAttribute(f);
                                    c[b] = c[b] || {}, c[b][k] = {animationID: d, element: O(a)}
                                })
                            } else b.push(a)
                        });
                        var d = {}, e = {};
                        return P(c, function (c, f) {
                            var g = c.from, h = c.to;
                            if (!g || !h) {
                                var i = g ? g.animationID : h.animationID, j = i.toString();
                                return void(d[j] || (d[j] = !0, b.push(a[i])))
                            }
                            var k = a[g.animationID], l = a[h.animationID], m = g.animationID.toString();
                            if (!e[m]) {
                                var n = e[m] = {
                                    structural: !0, beforeStart: function () {
                                        k.beforeStart(), l.beforeStart()
                                    }, close: function () {
                                        k.close(), l.close()
                                    }, classes: w(k.classes, l.classes), from: k, to: l, anchors: []
                                };
                                n.classes.length ? b.push(n) : (b.push(k), b.push(l))
                            }
                            e[m].anchors.push({out: g.element, in: h.element})
                        }), b
                    }

                    function w(a, b) {
                        a = a.split(" "), b = b.split(" ");
                        for (var c = [], d = 0; d < a.length; d++) {
                            var e = a[d];
                            if ("ng-" !== e.substring(0, 3))for (var f = 0; f < b.length; f++)if (e === b[f]) {
                                c.push(e);
                                break
                            }
                        }
                        return c.join(" ")
                    }

                    function x(a) {
                        for (var b = g.length - 1; b >= 0; b--) {
                            var c = g[b], d = i.get(c), e = d(a);
                            if (e)return e
                        }
                    }

                    function y() {
                        k.addClass(ba), F && a.addClass(k, F), G && (a.removeClass(k, G), G = null)
                    }

                    function z(a, b) {
                        function c(a) {
                            var c = e(a);
                            c && c.setHost(b)
                        }

                        a.from && a.to ? (c(a.from.element), c(a.to.element)) : c(a.element)
                    }

                    function A() {
                        var a = e(k);
                        !a || "leave" === l && t.$$domOperationFired || a.end()
                    }

                    function B(b) {
                        k.off("$destroy", A), c(k), r(k, t), n(k, t), t.domOperation(), F && a.removeClass(k, F), k.removeClass(ba), D.complete(!b)
                    }

                    t = m(t);
                    var C = ["enter", "move", "leave"].indexOf(l) >= 0, D = new j({
                        end: function () {
                            B()
                        }, cancel: function () {
                            B(!0)
                        }
                    });
                    if (!g.length)return B(), D;
                    b(k, D);
                    var E = d(k.attr("class"), d(t.addClass, t.removeClass)), F = t.tempClasses;
                    F && (E += " " + F, t.tempClasses = null);
                    var G;
                    return C && (G = "ng-" + l + aa, a.addClass(k, G)), q.push({
                        element: k,
                        classes: E,
                        event: l,
                        structural: C,
                        options: t,
                        beforeStart: y,
                        close: B
                    }), k.on("$destroy", A), q.length > 1 ? D : (h.$$postDigest(function () {
                        var a = [];
                        P(q, function (b) {
                            e(b.element) ? a.push(b) : b.close()
                        }), q.length = 0;
                        var b = v(a), c = [];
                        P(b, function (a) {
                            c.push({
                                domNode: s(a.from ? a.from.element : a.element), fn: function () {
                                    a.beforeStart();
                                    var b, c = a.close, d = a.anchors ? a.from.element || a.to.element : a.element;
                                    if (e(d)) {
                                        var f = x(a);
                                        f && (b = f.start)
                                    }
                                    if (b) {
                                        var g = b();
                                        g.done(function (a) {
                                            c(!a)
                                        }), z(a, g)
                                    } else c()
                                }
                            })
                        }), o(p(c))
                    }), D)
                }
            }]
        }], Ga = ["$animate", "$rootScope", function (a, b) {
            return {
                restrict: "A", transclude: "element", terminal: !0, priority: 600, link: function (b, c, d, e, f) {
                    var g, h;
                    b.$watchCollection(d.ngAnimateSwap || d.for, function (d) {
                        g && a.leave(g), h && (h.$destroy(), h = null), (d || 0 === d) && (h = b.$new(), f(h, function (b) {
                            g = b, a.enter(b, null, c)
                        }))
                    })
                }
            }
        }];
    b.module("ngAnimate", []).directive("ngAnimateSwap", Ga).directive("ngAnimateChildren", ra).factory("$$rAFScheduler", qa).provider("$$animateQueue", Ea).provider("$$animation", Fa).provider("$animateCss", ya).provider("$$animateCssDriver", za).provider("$$animateJs", Aa).provider("$$animateJsDriver", Ba)
}(window, window.angular), function (a, b) {
    "use strict";
    function c(a) {
        return b.lowercase(a.nodeName || a[0] && a[0].nodeName)
    }

    function d(a, c) {
        var d = !1, e = !1;
        this.ngClickOverrideEnabled = function (f) {
            return b.isDefined(f) ? (f && !e && (e = !0, g.$$moduleName = "ngTouch", c.directive("ngClick", g), a.decorator("ngClickDirective", ["$delegate", function (a) {
                if (d) a.shift(); else for (var b = a.length - 1; b >= 0;) {
                    if ("ngTouch" === a[b].$$moduleName) {
                        a.splice(b, 1);
                        break
                    }
                    b--
                }
                return a
            }])), d = f, this) : d
        }, this.$get = function () {
            return {
                ngClickOverrideEnabled: function () {
                    return d
                }
            }
        }
    }

    function e(a, c, d) {
        f.directive(a, ["$parse", "$swipe", function (e, f) {
            var g = 75, h = .3, i = 30;
            return function (j, k, l) {
                function m(a) {
                    if (!n)return !1;
                    var b = Math.abs(a.y - n.y), d = (a.x - n.x) * c;
                    return o && b < g && d > 0 && d > i && b / d < h
                }

                var n, o, p = e(l[a]), q = ["touch"];
                b.isDefined(l.ngSwipeDisableMouse) || q.push("mouse"), f.bind(k, {
                    start: function (a, b) {
                        n = a, o = !0
                    }, cancel: function (a) {
                        o = !1
                    }, end: function (a, b) {
                        m(a) && j.$apply(function () {
                            k.triggerHandler(d), p(j, {$event: b})
                        })
                    }
                }, q)
            }
        }])
    }

    var f = b.module("ngTouch", []);
    f.provider("$touch", d), d.$inject = ["$provide", "$compileProvider"], f.factory("$swipe", [function () {
        function a(a) {
            var b = a.originalEvent || a, c = b.touches && b.touches.length ? b.touches : [b],
                d = b.changedTouches && b.changedTouches[0] || c[0];
            return {x: d.clientX, y: d.clientY}
        }

        function c(a, c) {
            var d = [];
            return b.forEach(a, function (a) {
                var b = e[a][c];
                b && d.push(b)
            }), d.join(" ")
        }

        var d = 10, e = {
            mouse: {start: "mousedown", move: "mousemove", end: "mouseup"},
            touch: {start: "touchstart", move: "touchmove", end: "touchend", cancel: "touchcancel"}
        };
        return {
            bind: function (b, e, f) {
                var g, h, i, j, k = !1;
                f = f || ["mouse", "touch"], b.on(c(f, "start"), function (b) {
                    i = a(b), k = !0, g = 0, h = 0, j = i, e.start && e.start(i, b)
                });
                var l = c(f, "cancel");
                l && b.on(l, function (a) {
                    k = !1, e.cancel && e.cancel(a)
                }), b.on(c(f, "move"), function (b) {
                    if (k && i) {
                        var c = a(b);
                        if (g += Math.abs(c.x - j.x), h += Math.abs(c.y - j.y), j = c, !(g < d && h < d))return h > g ? (k = !1, void(e.cancel && e.cancel(b))) : (b.preventDefault(), void(e.move && e.move(c, b)))
                    }
                }), b.on(c(f, "end"), function (b) {
                    k && (k = !1, e.end && e.end(a(b), b))
                })
            }
        }
    }]);
    var g = ["$parse", "$timeout", "$rootElement", function (a, d, e) {
        function f(a, b, c, d) {
            return Math.abs(a - c) < q && Math.abs(b - d) < q
        }

        function g(a, b, c) {
            for (var d = 0; d < a.length; d += 2)if (f(a[d], a[d + 1], b, c))return a.splice(d, d + 2), !0;
            return !1
        }

        function h(a) {
            if (!(Date.now() - k > p)) {
                var b = a.touches && a.touches.length ? a.touches : [a], d = b[0].clientX, e = b[0].clientY;
                d < 1 && e < 1 || m && m[0] === d && m[1] === e || (m && (m = null), "label" === c(a.target) && (m = [d, e]), g(l, d, e) || (a.stopPropagation(), a.preventDefault(), a.target && a.target.blur && a.target.blur()))
            }
        }

        function i(a) {
            var b = a.touches && a.touches.length ? a.touches : [a], c = b[0].clientX, e = b[0].clientY;
            l.push(c, e), d(function () {
                for (var a = 0; a < l.length; a += 2)if (l[a] == c && l[a + 1] == e)return void l.splice(a, a + 2)
            }, p, !1)
        }

        function j(a, b) {
            l || (e[0].addEventListener("click", h, !0), e[0].addEventListener("touchstart", i, !0), l = []), k = Date.now(), g(l, a, b)
        }

        var k, l, m, n = 750, o = 12, p = 2500, q = 25, r = "ng-click-active";
        return function (c, d, e) {
            function f() {
                m = !1, d.removeClass(r)
            }

            var g, h, i, k, l = a(e.ngClick), m = !1;
            d.on("touchstart", function (a) {
                m = !0, g = a.target ? a.target : a.srcElement, 3 == g.nodeType && (g = g.parentNode), d.addClass(r), h = Date.now();
                var b = a.originalEvent || a, c = b.touches && b.touches.length ? b.touches : [b], e = c[0];
                i = e.clientX, k = e.clientY
            }), d.on("touchcancel", function (a) {
                f()
            }), d.on("touchend", function (a) {
                var c = Date.now() - h, l = a.originalEvent || a,
                    p = l.changedTouches && l.changedTouches.length ? l.changedTouches : l.touches && l.touches.length ? l.touches : [l],
                    q = p[0], r = q.clientX, s = q.clientY, t = Math.sqrt(Math.pow(r - i, 2) + Math.pow(s - k, 2));
                m && c < n && t < o && (j(r, s), g && g.blur(), b.isDefined(e.disabled) && e.disabled !== !1 || d.triggerHandler("click", [a])), f()
            }), d.onclick = function (a) {
            }, d.on("click", function (a, b) {
                c.$apply(function () {
                    l(c, {$event: b || a})
                })
            }), d.on("mousedown", function (a) {
                d.addClass(r)
            }), d.on("mousemove mouseup", function (a) {
                d.removeClass(r)
            })
        }
    }];
    e("ngSwipeLeft", -1, "swipeleft"), e("ngSwipeRight", 1, "swiperight")
}(window, window.angular), !function () {
    var a = angular.module("angularFileUpload", []);
    a.service("$upload", ["$http", "$q", "$timeout", function (a, b, c) {
        function d(d) {
            d.method = d.method || "POST", d.headers = d.headers || {}, d.transformRequest = d.transformRequest || function (b, c) {
                    return window.ArrayBuffer && b instanceof window.ArrayBuffer ? b : a.defaults.transformRequest[0](b, c)
                };
            var e = b.defer();
            window.XMLHttpRequest.__isShim && (d.headers.__setXHR_ = function () {
                return function (a) {
                    a && (d.__XHR = a, d.xhrFn && d.xhrFn(a), a.upload.addEventListener("progress", function (a) {
                        e.notify(a)
                    }, !1), a.upload.addEventListener("load", function (a) {
                        a.lengthComputable && e.notify(a)
                    }, !1))
                }
            }), a(d).then(function (a) {
                e.resolve(a)
            }, function (a) {
                e.reject(a)
            }, function (a) {
                e.notify(a)
            });
            var f = e.promise;
            return f.success = function (a) {
                return f.then(function (b) {
                    a(b.data, b.status, b.headers, d)
                }), f
            }, f.error = function (a) {
                return f.then(null, function (b) {
                    a(b.data, b.status, b.headers, d)
                }), f
            }, f.progress = function (a) {
                return f.then(null, null, function (b) {
                    a(b)
                }), f
            }, f.abort = function () {
                return d.__XHR && c(function () {
                    d.__XHR.abort()
                }), f
            }, f.xhr = function (a) {
                return d.xhrFn = function (b) {
                    return function () {
                        b && b.apply(f, arguments), a.apply(f, arguments)
                    }
                }(d.xhrFn), f
            }, f
        }

        this.upload = function (b) {
            b.headers = b.headers || {}, b.headers["Content-Type"] = void 0, b.transformRequest = b.transformRequest || a.defaults.transformRequest;
            var c = new FormData, e = b.transformRequest, f = b.data;
            return b.transformRequest = function (a, c) {
                if (f)if (b.formDataAppender)for (var d in f) {
                    var g = f[d];
                    b.formDataAppender(a, d, g)
                } else for (var d in f) {
                    var g = f[d];
                    if ("function" == typeof e) g = e(g, c); else for (var h = 0; h < e.length; h++) {
                        var i = e[h];
                        "function" == typeof i && (g = i(g, c))
                    }
                    a.append(d, g)
                }
                if (null != b.file) {
                    var j = b.fileFormDataName || "file";
                    if ("[object Array]" === Object.prototype.toString.call(b.file))for (var k = "[object String]" === Object.prototype.toString.call(j), h = 0; h < b.file.length; h++)a.append(k ? j : j[h], b.file[h], b.fileName && b.fileName[h] || b.file[h].name); else a.append(j, b.file, b.fileName || b.file.name)
                }
                return a
            }, b.data = c, d(b)
        }, this.http = function (a) {
            return d(a)
        }
    }]), a.directive("ngFileSelect", ["$parse", "$timeout", function (a, b) {
        return function (c, d, e) {
            var f = a(e.ngFileSelect);
            if ("input" !== d[0].tagName.toLowerCase() || "file" !== (d.attr("type") && d.attr("type").toLowerCase())) {
                for (var g = angular.element('<input type="file">'), h = d[0].attributes, i = 0; i < h.length; i++)"type" !== h[i].name.toLowerCase() && g.attr(h[i].name, h[i].value);
                e.multiple && g.attr("multiple", "true"), g.css("width", "1px").css("height", "1px").css("opacity", 0).css("position", "absolute").css("filter", "alpha(opacity=0)").css("padding", 0).css("margin", 0).css("overflow", "hidden"), g.attr("__wrapper_for_parent_", !0), d.append(g), d[0].__file_click_fn_delegate_ = function () {
                    g[0].click()
                }, d.bind("click", d[0].__file_click_fn_delegate_), d.css("overflow", "hidden"), d = g
            }
            d.bind("change", function (a) {
                var d, e, g = [];
                if (d = a.__files_ || a.target.files, null != d)for (e = 0; e < d.length; e++)g.push(d.item(e));
                b(function () {
                    f(c, {$files: g, $event: a})
                })
            })
        }
    }]), a.directive("ngFileDropAvailable", ["$parse", "$timeout", function (a, b) {
        return function (c, d, e) {
            if ("draggable" in document.createElement("span")) {
                var f = a(e.ngFileDropAvailable);
                b(function () {
                    f(c)
                })
            }
        }
    }]), a.directive("ngFileDrop", ["$parse", "$timeout", "$location", function (a, b, c) {
        return function (d, e, f) {
            function g(a) {
                return /^[\000-\177]*$/.test(a)
            }

            function h(a, d) {
                var e = [], f = a.dataTransfer.items;
                if (f && f.length > 0 && f[0].webkitGetAsEntry && "file" != c.protocol() && f[0].webkitGetAsEntry().isDirectory)for (var h = 0; h < f.length; h++) {
                    var j = f[h].webkitGetAsEntry();
                    null != j && (g(j.name) ? i(e, j) : f[h].webkitGetAsEntry().isDirectory || e.push(f[h].getAsFile()))
                } else {
                    var k = a.dataTransfer.files;
                    if (null != k)for (var h = 0; h < k.length; h++)e.push(k.item(h))
                }
                !function a(c) {
                    b(function () {
                        l ? a(10) : d(e)
                    }, c || 0)
                }()
            }

            function i(a, b, c) {
                if (null != b)if (b.isDirectory) {
                    var d = b.createReader();
                    l++, d.readEntries(function (d) {
                        for (var e = 0; e < d.length; e++)i(a, d[e], (c ? c : "") + b.name + "/");
                        l--
                    })
                } else l++, b.file(function (b) {
                    l--, b._relativePath = (c ? c : "") + b.name, a.push(b)
                })
            }

            if ("draggable" in document.createElement("span")) {
                var j = null;
                e[0].addEventListener("dragover", function (c) {
                    if (c.preventDefault(), b.cancel(j), !e[0].__drag_over_class_)if (f.ngFileDragOverClass && f.ngFileDragOverClass.search(/\) *$/) > -1) {
                        var g = a(f.ngFileDragOverClass)(d, {$event: c});
                        e[0].__drag_over_class_ = g
                    } else e[0].__drag_over_class_ = f.ngFileDragOverClass || "dragover";
                    e.addClass(e[0].__drag_over_class_)
                }, !1), e[0].addEventListener("dragenter", function (a) {
                    a.preventDefault()
                }, !1), e[0].addEventListener("dragleave", function () {
                    j = b(function () {
                        e.removeClass(e[0].__drag_over_class_), e[0].__drag_over_class_ = null
                    }, f.ngFileDragOverDelay || 1)
                }, !1);
                var k = a(f.ngFileDrop);
                e[0].addEventListener("drop", function (a) {
                    a.preventDefault(), e.removeClass(e[0].__drag_over_class_), e[0].__drag_over_class_ = null, h(a, function (b) {
                        k(d, {$files: b, $event: a})
                    })
                }, !1);
                var l = 0
            }
        }
    }])
}(), function () {
    "use strict";
    angular.module("core.library.jsonrpc", ["angularFileUpload"]).provider("jsonrpc", function () {
        function a() {
            return d++ + ""
        }

        var b = this, c = this.defaults = {}, d = 0;
        c.basePath = "/rpc", this.$get = ["$http", "$q", "$upload", function (d, e, f) {
            function g(b, g, h) {
                var i, j, k, l, m = a(), n = {jsonrpc: "2.0", method: b.method, id: m}, o = e.defer(), p = o.promise,
                    q = !1, r = {success: null, error: null};
                c.BeforeRequest && c.BeforeRequest(n, b, g), p.success = function (a) {
                    return r.success = a, this
                }, p.error = function (a) {
                    return r.error = a, this
                }, p.then(function () {
                    !q && r.success && r.success.apply(null, arguments)
                }, function () {
                    !q && r.error && r.error.apply(null, arguments)
                }), p.stopPropagation = function () {
                    q = !0
                }, angular.isDefined(b.data) && (n.params = b.data);
                var s = [];
                angular.forEach(d.defaults.transformResponse, function (a) {
                    s.push(a)
                }), s.push(function (a) {
                    return a && a.id === m ? a : null
                }), g = g || {};
                var t = g.transformResponse;
                return angular.isArray(t) ? [].push.apply(s, t) : angular.isFunction(t) && s.push(t), g.transformResponse = s, i = function (a) {
                    null === a ? (c.ErrorRequest && c.ErrorRequest(p, null), o.reject(null)) : a && a.hasOwnProperty("error") ? (c.ErrorRequest && c.ErrorRequest(p, a.error), o.reject(a.error)) : a && a.hasOwnProperty("result") ? (c.SuccessRequest && c.SuccessRequest(p, a.result), o.resolve(a.result)) : (c.ErrorRequest && c.ErrorRequest(p, a), o.reject(a))
                }, j = function (a) {
                    c.ErrorRequest && c.ErrorRequest(p, a), o.reject(a)
                }, l = b.path || c.basePath, h ? (b.progress && (k = b.progress, delete b.progress), f.upload({
                    method: "POST",
                    url: l,
                    file: h,
                    data: n,
                    headers: {"X-Requested-With": "XMLHttpRequest"}
                }).progress(function (a) {
                    k instanceof Function && k.call(k, a)
                }).success(i).error(j)) : (g.headers = g.headers || {}, g.headers["X-Requested-With"] = g.headers["X-Requested-With"] || "XMLHttpRequest", d.post(l, n, g).success(i).error(j)), p
            }

            function h(a, b) {
                this.serviceName = a, this.path = b
            }

            return g.request = function (a, b, c, d) {
                return arguments.length < 4 && (d = c, c = b, b = a, a = null), g({path: a, method: b, data: c}, d)
            }, g.setBasePath = function (a) {
                return b.setBasePath(a)
            }, g.getBasePath = function () {
                return b.getBasePath()
            }, g.setBeforeRequest = function (a) {
                return b.setBeforeRequest(a)
            }, g.setEndSuccessRequest = function (a) {
                return b.setEndSuccessRequest(a)
            }, g.setEndErrorRequest = function (a) {
                return b.setEndErrorRequest(a)
            }, h.prototype.createMethod = function (a, b) {
                var c = this.path, d = this.serviceName + "." + a, e = function (a) {
                    return g.request(c, d, a, b)
                };
                return e.__jsonRpcMethod = d, e
            }, h.prototype.createUploadMethod = function (a, b) {
                var c = this.path, d = this.serviceName + "." + a;
                return function (a, e, f) {
                    if (!a)throw"Property file not found";
                    return g({path: c, method: d, data: e, progress: f}, b, a)
                }
            }, g.newService = function (a, b) {
                return new h(a, b)
            }, g.createBatch = function (b, f) {
                function g() {
                }

                return g.prototype = {
                    _requests: [], _callbacks: {}, add: function (b, c) {
                        var d = a(), f = {jsonrpc: "2.0", id: d}, g = e.defer(), h = !1, i = g.promise, j = {
                            success: function () {
                            }, error: function () {
                            }
                        };
                        return angular.isFunction(b) && (b = b.__jsonRpcMethod), !!b && (f.method = b, angular.isDefined(c) && (f.params = c), i.success = function (a) {
                            return j.success = a, this
                        }, i.error = function (a) {
                            return j.error = a, this
                        }, i.then(function () {
                            h || j.success.apply(null, arguments)
                        }, function () {
                            h || j.error.apply(null, arguments)
                        }), i.stopPropagation = function () {
                            h = !0
                        }, this._requests.push(f), this._callbacks[f.id] = g, i)
                    }, isEmpty: function () {
                        return !this._requests.length
                    }, doRequest: function () {
                        function a(a) {
                            var b = h._callbacks[a.id];
                            return !!b && (null === a ? b.reject(null) : a && a.hasOwnProperty("error") ? b.reject(a.error) : a && a.hasOwnProperty("result") ? b.resolve(a.result) : b.reject(a), !0)
                        }

                        function b(b, c, d, e) {
                            for (var f = 0, g = b.length; f < g; f++)a(b[f]);
                            i.resolve(b)
                        }

                        function f(b) {
                            for (var c = 0, d = b.length; c < d; c++)a(b[c]);
                            i.reject(b)
                        }

                        function g() {
                            h._requests = [], h._callbacks = {}
                        }

                        var h = this, i = e.defer(), j = i.promise, k = !1, l = {
                            success: function () {
                            }, error: function () {
                            }
                        }, m = this._requests, n = c.basePath, o = {};
                        return j.success = function (a) {
                            return l.success = a, this
                        }, j.error = function (a) {
                            return l.error = a, this
                        }, j.then(function () {
                            k || l.success.apply(null, arguments)
                        }, function () {
                            k || l.error.apply(null, arguments)
                        }), j.stopPropagation = function () {
                            k = !0
                        }, this.isEmpty() ? (i.resolve(), j) : (o.headers = o.headers || {}, o.headers["X-Requested-With"] = o.headers["X-Requested-With"] || "XMLHttpRequest", d.post(n, m, o).success(b).error(f).finally(g), j)
                    }
                }, new g
            }, g
        }], b.setBasePath = function (a) {
            return this.defaults.basePath = a, this
        }, b.getBasePath = function () {
            return this.defaults.basePath
        }, b.setBeforeRequest = function (a) {
            return this.defaults.BeforeRequest = a, this
        }, b.setEndSuccessRequest = function (a) {
            return this.defaults.SuccessRequest = a, this
        }, b.setEndErrorRequest = function (a) {
            return this.defaults.ErrorRequest = a, this
        }
    })
}(), function (a) {
    var b = {
        mode: "horizontal",
        slideSelector: "",
        infiniteLoop: !0,
        hideControlOnEnd: !1,
        speed: 500,
        easing: null,
        slideMargin: 0,
        startSlide: 0,
        randomStart: !1,
        captions: !1,
        ticker: !1,
        tickerHover: !1,
        adaptiveHeight: !1,
        adaptiveHeightSpeed: 500,
        video: !1,
        useCSS: !0,
        preloadImages: "visible",
        responsive: !0,
        slideZIndex: 50,
        wrapperClass: "bx-wrapper",
        touchEnabled: !0,
        swipeThreshold: 50,
        oneToOneTouch: !0,
        preventDefaultSwipeX: !0,
        preventDefaultSwipeY: !1,
        ariaLive: !0,
        ariaHidden: !0,
        keyboardEnabled: !1,
        pager: !0,
        pagerType: "full",
        pagerShortSeparator: " / ",
        pagerSelector: null,
        buildPager: null,
        pagerCustom: null,
        controls: !0,
        nextText: "Next",
        prevText: "Prev",
        nextSelector: null,
        prevSelector: null,
        autoControls: !1,
        startText: "Start",
        stopText: "Stop",
        autoControlsCombine: !1,
        autoControlsSelector: null,
        auto: !1,
        pause: 4e3,
        autoStart: !0,
        autoDirection: "next",
        stopAutoOnClick: !1,
        autoHover: !1,
        autoDelay: 0,
        autoSlideForOnePage: !1,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 0,
        shrinkItems: !1,
        onSliderLoad: function () {
            return !0
        },
        onSlideBefore: function () {
            return !0
        },
        onSlideAfter: function () {
            return !0
        },
        onSlideNext: function () {
            return !0
        },
        onSlidePrev: function () {
            return !0
        },
        onSliderResize: function () {
            return !0
        }
    };
    a.fn.bxSlider = function (c) {
        if (0 === this.length)return this;
        if (this.length > 1)return this.each(function () {
            a(this).bxSlider(c)
        }), this;
        var d = {}, e = this, f = a(window).width(), g = a(window).height();
        if (!a(e).data("bxSlider")) {
            var h = function () {
                a(e).data("bxSlider") || (d.settings = a.extend({}, b, c), d.settings.slideWidth = parseInt(d.settings.slideWidth), d.children = e.children(d.settings.slideSelector), d.children.length < d.settings.minSlides && (d.settings.minSlides = d.children.length), d.children.length < d.settings.maxSlides && (d.settings.maxSlides = d.children.length), d.settings.randomStart && (d.settings.startSlide = Math.floor(Math.random() * d.children.length)), d.active = {index: d.settings.startSlide}, d.carousel = d.settings.minSlides > 1 || d.settings.maxSlides > 1, d.carousel && (d.settings.preloadImages = "all"), d.minThreshold = d.settings.minSlides * d.settings.slideWidth + (d.settings.minSlides - 1) * d.settings.slideMargin, d.maxThreshold = d.settings.maxSlides * d.settings.slideWidth + (d.settings.maxSlides - 1) * d.settings.slideMargin, d.working = !1, d.controls = {}, d.interval = null, d.animProp = "vertical" === d.settings.mode ? "top" : "left", d.usingCSS = d.settings.useCSS && "fade" !== d.settings.mode && function () {
                        for (var a = document.createElement("div"), b = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], c = 0; c < b.length; c++)if (void 0 !== a.style[b[c]])return d.cssPrefix = b[c].replace("Perspective", "").toLowerCase(), d.animProp = "-" + d.cssPrefix + "-transform", !0;
                        return !1
                    }(), "vertical" === d.settings.mode && (d.settings.maxSlides = d.settings.minSlides), e.data("origStyle", e.attr("style")), e.children(d.settings.slideSelector).each(function () {
                    a(this).data("origStyle", a(this).attr("style"))
                }), j())
            }, j = function () {
                var b = d.children.eq(d.settings.startSlide);
                e.wrap('<div class="' + d.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), d.viewport = e.parent(), d.settings.ariaLive && !d.settings.ticker && d.viewport.attr("aria-live", "polite"), d.loader = a('<div class="bx-loading" />'), d.viewport.prepend(d.loader), e.css({
                    width: "horizontal" === d.settings.mode ? 1e3 * d.children.length + 215 + "%" : "auto",
                    position: "relative"
                }), d.usingCSS && d.settings.easing ? e.css("-" + d.cssPrefix + "-transition-timing-function", d.settings.easing) : d.settings.easing || (d.settings.easing = "swing"), d.viewport.css({
                    width: "100%",
                    overflow: "hidden",
                    position: "relative"
                }), d.viewport.parent().css({maxWidth: n()}), d.settings.pager || d.settings.controls || d.viewport.parent().css({margin: "0 auto 0px"}), d.settings.captions && y(), d.children.css({
                    float: "horizontal" === d.settings.mode ? "left" : "none",
                    listStyle: "none",
                    height: m(),
                    position: "relative"
                }), d.children.css("width", o()), "horizontal" === d.settings.mode && d.settings.slideMargin > 0 && d.children.css("marginRight", d.settings.slideMargin), "vertical" === d.settings.mode && d.settings.slideMargin > 0 && d.children.css("marginBottom", d.settings.slideMargin), "fade" === d.settings.mode && (d.children.css({
                    position: "absolute",
                    zIndex: 0,
                    display: "none"
                }), d.children.eq(d.settings.startSlide).css({
                    zIndex: d.settings.slideZIndex,
                    display: "block"
                })), d.controls.el = a('<div class="bx-controls" />'), d.active.last = d.settings.startSlide === q() - 1, d.settings.video && e.fitVids(), ("all" === d.settings.preloadImages || d.settings.ticker) && (b = d.children), d.settings.ticker ? d.settings.pager = !1 : (d.settings.controls && w(), d.settings.auto && d.settings.autoControls && x(), d.settings.pager && v(), (d.settings.controls || d.settings.autoControls || d.settings.pager) && d.viewport.after(d.controls.el)), k(b, l)
            }, k = function (b, c) {
                var d = b.find('img:not([src=""]), iframe').length, e = 0;
                return 0 === d ? void c() : void b.find('img:not([src=""]), iframe').each(function () {
                    a(this).one("load error", function () {
                        ++e === d && c()
                    }).each(function () {
                        this.complete && a(this).load()
                    })
                })
            }, l = function () {
                if (d.settings.infiniteLoop && "fade" !== d.settings.mode && !d.settings.ticker) {
                    var b = "vertical" === d.settings.mode ? d.settings.minSlides : d.settings.maxSlides,
                        c = d.children.slice(0, b).clone(!0).addClass("bx-clone"),
                        f = d.children.slice(-b).clone(!0).addClass("bx-clone");
                    d.settings.ariaHidden && (c.attr("aria-hidden", !0), f.attr("aria-hidden", !0)), e.append(c).prepend(f)
                }
                d.loader.remove(), s(), "vertical" === d.settings.mode && (d.settings.adaptiveHeight = !0), d.viewport.height(m()), e.redrawSlider(), d.settings.onSliderLoad.call(e, d.active.index), d.initialized = !0, d.settings.responsive && a(window).bind("resize", S), d.settings.auto && d.settings.autoStart && (q() > 1 || d.settings.autoSlideForOnePage) && I(), d.settings.ticker && J(), d.settings.pager && E(d.settings.startSlide), d.settings.controls && H(), d.settings.touchEnabled && !d.settings.ticker && N(), d.settings.keyboardEnabled && !d.settings.ticker && a(document).keydown(M)
            }, m = function () {
                var b = 0, c = a();
                if ("vertical" === d.settings.mode || d.settings.adaptiveHeight)if (d.carousel) {
                    var e = 1 === d.settings.moveSlides ? d.active.index : d.active.index * r();
                    for (c = d.children.eq(e), i = 1; i <= d.settings.maxSlides - 1; i++)c = e + i >= d.children.length ? c.add(d.children.eq(i - 1)) : c.add(d.children.eq(e + i))
                } else c = d.children.eq(d.active.index); else c = d.children;
                return "vertical" === d.settings.mode ? (c.each(function (c) {
                    b += a(this).outerHeight()
                }), d.settings.slideMargin > 0 && (b += d.settings.slideMargin * (d.settings.minSlides - 1))) : b = Math.max.apply(Math, c.map(function () {
                    return a(this).css("height", "auto"), a(this).outerHeight(!1)
                }).get()), "border-box" === d.viewport.css("box-sizing") ? b += parseFloat(d.viewport.css("padding-top")) + parseFloat(d.viewport.css("padding-bottom")) + parseFloat(d.viewport.css("border-top-width")) + parseFloat(d.viewport.css("border-bottom-width")) : "padding-box" === d.viewport.css("box-sizing") && (b += parseFloat(d.viewport.css("padding-top")) + parseFloat(d.viewport.css("padding-bottom"))), b
            }, n = function () {
                var a = "100%";
                return d.settings.slideWidth > 0 && (a = "horizontal" === d.settings.mode ? d.settings.maxSlides * d.settings.slideWidth + (d.settings.maxSlides - 1) * d.settings.slideMargin : d.settings.slideWidth), a
            }, o = function () {
                var a = d.settings.slideWidth, b = d.viewport.width();
                if (0 === d.settings.slideWidth || d.settings.slideWidth > b && !d.carousel || "vertical" === d.settings.mode) a = b; else if (d.settings.maxSlides > 1 && "horizontal" === d.settings.mode) {
                    if (b > d.maxThreshold)return a;
                    b < d.minThreshold ? a = (b - d.settings.slideMargin * (d.settings.minSlides - 1)) / d.settings.minSlides : d.settings.shrinkItems && (a = Math.floor((b + d.settings.slideMargin) / Math.ceil((b + d.settings.slideMargin) / (a + d.settings.slideMargin)) - d.settings.slideMargin))
                }
                return a
            }, p = function () {
                var a = 1, b = null;
                return "horizontal" === d.settings.mode && d.settings.slideWidth > 0 ? d.viewport.width() < d.minThreshold ? a = d.settings.minSlides : d.viewport.width() > d.maxThreshold ? a = d.settings.maxSlides : (b = d.children.first().width() + d.settings.slideMargin, a = Math.floor((d.viewport.width() + d.settings.slideMargin) / b)) : "vertical" === d.settings.mode && (a = d.settings.minSlides), a
            }, q = function () {
                var a = 0, b = 0, c = 0;
                if (d.settings.moveSlides > 0)if (d.settings.infiniteLoop) a = Math.ceil(d.children.length / r()); else for (; b < d.children.length;)++a, b = c + p(), c += d.settings.moveSlides <= p() ? d.settings.moveSlides : p(); else a = Math.ceil(d.children.length / p());
                return a
            }, r = function () {
                return d.settings.moveSlides > 0 && d.settings.moveSlides <= p() ? d.settings.moveSlides : p()
            }, s = function () {
                var a, b, c;
                d.children.length > d.settings.maxSlides && d.active.last && !d.settings.infiniteLoop ? "horizontal" === d.settings.mode ? (b = d.children.last(), a = b.position(), t(-(a.left - (d.viewport.width() - b.outerWidth())), "reset", 0)) : "vertical" === d.settings.mode && (c = d.children.length - d.settings.minSlides, a = d.children.eq(c).position(), t(-a.top, "reset", 0)) : (a = d.children.eq(d.active.index * r()).position(), d.active.index === q() - 1 && (d.active.last = !0), void 0 !== a && ("horizontal" === d.settings.mode ? t(-a.left, "reset", 0) : "vertical" === d.settings.mode && t(-a.top, "reset", 0)))
            }, t = function (b, c, f, g) {
                var h, i;
                d.usingCSS ? (i = "vertical" === d.settings.mode ? "translate3d(0, " + b + "px, 0)" : "translate3d(" + b + "px, 0, 0)", e.css("-" + d.cssPrefix + "-transition-duration", f / 1e3 + "s"), "slide" === c ? (e.css(d.animProp, i), 0 !== f ? e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (b) {
                    a(b.target).is(e) && (e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), F())
                }) : F()) : "reset" === c ? e.css(d.animProp, i) : "ticker" === c && (e.css("-" + d.cssPrefix + "-transition-timing-function", "linear"), e.css(d.animProp, i), 0 !== f ? e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (b) {
                        a(b.target).is(e) && (e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), t(g.resetValue, "reset", 0), K())
                    }) : (t(g.resetValue, "reset", 0), K()))) : (h = {}, h[d.animProp] = b, "slide" === c ? e.animate(h, f, d.settings.easing, function () {
                    F()
                }) : "reset" === c ? e.css(d.animProp, b) : "ticker" === c && e.animate(h, f, "linear", function () {
                        t(g.resetValue, "reset", 0), K()
                    }))
            }, u = function () {
                for (var b = "", c = "", e = q(), f = 0; f < e; f++)c = "", d.settings.buildPager && a.isFunction(d.settings.buildPager) || d.settings.pagerCustom ? (c = d.settings.buildPager(f), d.pagerEl.addClass("bx-custom-pager")) : (c = f + 1, d.pagerEl.addClass("bx-default-pager")), b += '<div class="bx-pager-item"><a href="" data-slide-index="' + f + '" class="bx-pager-link">' + c + "</a></div>";
                d.pagerEl.html(b)
            }, v = function () {
                d.settings.pagerCustom ? d.pagerEl = a(d.settings.pagerCustom) : (d.pagerEl = a('<div class="bx-pager" />'), d.settings.pagerSelector ? a(d.settings.pagerSelector).html(d.pagerEl) : d.controls.el.addClass("bx-has-pager").append(d.pagerEl), u()), d.pagerEl.on("click touchend", "a", D)
            }, w = function () {
                d.controls.next = a('<a class="bx-next" href="">' + d.settings.nextText + "</a>"), d.controls.prev = a('<a class="bx-prev" href="">' + d.settings.prevText + "</a>"), d.controls.next.bind("click touchend", z), d.controls.prev.bind("click touchend", A), d.settings.nextSelector && a(d.settings.nextSelector).append(d.controls.next), d.settings.prevSelector && a(d.settings.prevSelector).append(d.controls.prev), d.settings.nextSelector || d.settings.prevSelector || (d.controls.directionEl = a('<div class="bx-controls-direction" />'), d.controls.directionEl.append(d.controls.prev).append(d.controls.next), d.controls.el.addClass("bx-has-controls-direction").append(d.controls.directionEl))
            }, x = function () {
                d.controls.start = a('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + d.settings.startText + "</a></div>"), d.controls.stop = a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + d.settings.stopText + "</a></div>"), d.controls.autoEl = a('<div class="bx-controls-auto" />'), d.controls.autoEl.on("click", ".bx-start", B), d.controls.autoEl.on("click", ".bx-stop", C), d.settings.autoControlsCombine ? d.controls.autoEl.append(d.controls.start) : d.controls.autoEl.append(d.controls.start).append(d.controls.stop), d.settings.autoControlsSelector ? a(d.settings.autoControlsSelector).html(d.controls.autoEl) : d.controls.el.addClass("bx-has-controls-auto").append(d.controls.autoEl), G(d.settings.autoStart ? "stop" : "start")
            }, y = function () {
                d.children.each(function (b) {
                    var c = a(this).find("img:first").attr("title");
                    void 0 !== c && ("" + c).length && a(this).append('<div class="bx-caption"><span>' + c + "</span></div>")
                })
            }, z = function (a) {
                a.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && d.settings.stopAutoOnClick && e.stopAuto(), e.goToNextSlide())
            }, A = function (a) {
                a.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && d.settings.stopAutoOnClick && e.stopAuto(), e.goToPrevSlide())
            }, B = function (a) {
                e.startAuto(), a.preventDefault()
            }, C = function (a) {
                e.stopAuto(), a.preventDefault()
            }, D = function (b) {
                var c, f;
                b.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && d.settings.stopAutoOnClick && e.stopAuto(), c = a(b.currentTarget), void 0 !== c.attr("data-slide-index") && (f = parseInt(c.attr("data-slide-index")), f !== d.active.index && e.goToSlide(f)))
            }, E = function (b) {
                var c = d.children.length;
                return "short" === d.settings.pagerType ? (d.settings.maxSlides > 1 && (c = Math.ceil(d.children.length / d.settings.maxSlides)), void d.pagerEl.html(b + 1 + d.settings.pagerShortSeparator + c)) : (d.pagerEl.find("a").removeClass("active"), void d.pagerEl.each(function (c, d) {
                    a(d).find("a").eq(b).addClass("active")
                }))
            }, F = function () {
                if (d.settings.infiniteLoop) {
                    var a = "";
                    0 === d.active.index ? a = d.children.eq(0).position() : d.active.index === q() - 1 && d.carousel ? a = d.children.eq((q() - 1) * r()).position() : d.active.index === d.children.length - 1 && (a = d.children.eq(d.children.length - 1).position()), a && ("horizontal" === d.settings.mode ? t(-a.left, "reset", 0) : "vertical" === d.settings.mode && t(-a.top, "reset", 0));
                }
                d.working = !1, d.settings.onSlideAfter.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index)
            }, G = function (a) {
                d.settings.autoControlsCombine ? d.controls.autoEl.html(d.controls[a]) : (d.controls.autoEl.find("a").removeClass("active"), d.controls.autoEl.find("a:not(.bx-" + a + ")").addClass("active"))
            }, H = function () {
                1 === q() ? (d.controls.prev.addClass("disabled"), d.controls.next.addClass("disabled")) : !d.settings.infiniteLoop && d.settings.hideControlOnEnd && (0 === d.active.index ? (d.controls.prev.addClass("disabled"), d.controls.next.removeClass("disabled")) : d.active.index === q() - 1 ? (d.controls.next.addClass("disabled"), d.controls.prev.removeClass("disabled")) : (d.controls.prev.removeClass("disabled"), d.controls.next.removeClass("disabled")))
            }, I = function () {
                if (d.settings.autoDelay > 0) {
                    setTimeout(e.startAuto, d.settings.autoDelay)
                } else e.startAuto(), a(window).focus(function () {
                    e.startAuto()
                }).blur(function () {
                    e.stopAuto()
                });
                d.settings.autoHover && e.hover(function () {
                    d.interval && (e.stopAuto(!0), d.autoPaused = !0)
                }, function () {
                    d.autoPaused && (e.startAuto(!0), d.autoPaused = null)
                })
            }, J = function () {
                var b, c, f, g, h, i, j, k, l = 0;
                "next" === d.settings.autoDirection ? e.append(d.children.clone().addClass("bx-clone")) : (e.prepend(d.children.clone().addClass("bx-clone")), b = d.children.first().position(), l = "horizontal" === d.settings.mode ? -b.left : -b.top), t(l, "reset", 0), d.settings.pager = !1, d.settings.controls = !1, d.settings.autoControls = !1, d.settings.tickerHover && (d.usingCSS ? (g = "horizontal" === d.settings.mode ? 4 : 5, d.viewport.hover(function () {
                    c = e.css("-" + d.cssPrefix + "-transform"), f = parseFloat(c.split(",")[g]), t(f, "reset", 0)
                }, function () {
                    k = 0, d.children.each(function (b) {
                        k += "horizontal" === d.settings.mode ? a(this).outerWidth(!0) : a(this).outerHeight(!0)
                    }), h = d.settings.speed / k, i = "horizontal" === d.settings.mode ? "left" : "top", j = h * (k - Math.abs(parseInt(f))), K(j)
                })) : d.viewport.hover(function () {
                    e.stop()
                }, function () {
                    k = 0, d.children.each(function (b) {
                        k += "horizontal" === d.settings.mode ? a(this).outerWidth(!0) : a(this).outerHeight(!0)
                    }), h = d.settings.speed / k, i = "horizontal" === d.settings.mode ? "left" : "top", j = h * (k - Math.abs(parseInt(e.css(i)))), K(j)
                })), K()
            }, K = function (a) {
                var b, c, f, g = a ? a : d.settings.speed, h = {left: 0, top: 0}, i = {left: 0, top: 0};
                "next" === d.settings.autoDirection ? h = e.find(".bx-clone").first().position() : i = d.children.first().position(), b = "horizontal" === d.settings.mode ? -h.left : -h.top, c = "horizontal" === d.settings.mode ? -i.left : -i.top, f = {resetValue: c}, t(b, "ticker", g, f)
            }, L = function (b) {
                var c = a(window), d = {top: c.scrollTop(), left: c.scrollLeft()}, e = b.offset();
                return d.right = d.left + c.width(), d.bottom = d.top + c.height(), e.right = e.left + b.outerWidth(), e.bottom = e.top + b.outerHeight(), !(d.right < e.left || d.left > e.right || d.bottom < e.top || d.top > e.bottom)
            }, M = function (a) {
                var b = document.activeElement.tagName.toLowerCase(), c = "input|textarea", d = new RegExp(b, ["i"]),
                    f = d.exec(c);
                if (null == f && L(e)) {
                    if (39 === a.keyCode)return z(a), !1;
                    if (37 === a.keyCode)return A(a), !1
                }
            }, N = function () {
                d.touch = {
                    start: {x: 0, y: 0},
                    end: {x: 0, y: 0}
                }, d.viewport.bind("touchstart MSPointerDown pointerdown", O), d.viewport.on("click", ".bxslider a", function (a) {
                    d.viewport.hasClass("click-disabled") && (a.preventDefault(), d.viewport.removeClass("click-disabled"))
                })
            }, O = function (a) {
                if (d.controls.el.addClass("disabled"), d.working) a.preventDefault(), d.controls.el.removeClass("disabled"); else {
                    d.touch.originalPos = e.position();
                    var b = a.originalEvent, c = "undefined" != typeof b.changedTouches ? b.changedTouches : [b];
                    d.touch.start.x = c[0].pageX, d.touch.start.y = c[0].pageY, d.viewport.get(0).setPointerCapture && (d.pointerId = b.pointerId, d.viewport.get(0).setPointerCapture(d.pointerId)), d.viewport.bind("touchmove MSPointerMove pointermove", Q), d.viewport.bind("touchend MSPointerUp pointerup", R), d.viewport.bind("MSPointerCancel pointercancel", P)
                }
            }, P = function (a) {
                t(d.touch.originalPos.left, "reset", 0), d.controls.el.removeClass("disabled"), d.viewport.unbind("MSPointerCancel pointercancel", P), d.viewport.unbind("touchmove MSPointerMove pointermove", Q), d.viewport.unbind("touchend MSPointerUp pointerup", R), d.viewport.get(0).releasePointerCapture && d.viewport.get(0).releasePointerCapture(d.pointerId)
            }, Q = function (a) {
                var b = a.originalEvent, c = "undefined" != typeof b.changedTouches ? b.changedTouches : [b],
                    e = Math.abs(c[0].pageX - d.touch.start.x), f = Math.abs(c[0].pageY - d.touch.start.y), g = 0,
                    h = 0;
                3 * e > f && d.settings.preventDefaultSwipeX ? a.preventDefault() : 3 * f > e && d.settings.preventDefaultSwipeY && a.preventDefault(), "fade" !== d.settings.mode && d.settings.oneToOneTouch && ("horizontal" === d.settings.mode ? (h = c[0].pageX - d.touch.start.x, g = d.touch.originalPos.left + h) : (h = c[0].pageY - d.touch.start.y, g = d.touch.originalPos.top + h), t(g, "reset", 0))
            }, R = function (a) {
                d.viewport.unbind("touchmove MSPointerMove pointermove", Q), d.controls.el.removeClass("disabled");
                var b = a.originalEvent, c = "undefined" != typeof b.changedTouches ? b.changedTouches : [b], f = 0,
                    g = 0;
                d.touch.end.x = c[0].pageX, d.touch.end.y = c[0].pageY, "fade" === d.settings.mode ? (g = Math.abs(d.touch.start.x - d.touch.end.x), g >= d.settings.swipeThreshold && (d.touch.start.x > d.touch.end.x ? e.goToNextSlide() : e.goToPrevSlide(), e.stopAuto())) : ("horizontal" === d.settings.mode ? (g = d.touch.end.x - d.touch.start.x, f = d.touch.originalPos.left) : (g = d.touch.end.y - d.touch.start.y, f = d.touch.originalPos.top), !d.settings.infiniteLoop && (0 === d.active.index && g > 0 || d.active.last && g < 0) ? t(f, "reset", 200) : Math.abs(g) >= d.settings.swipeThreshold ? (g < 0 ? e.goToNextSlide() : e.goToPrevSlide(), e.stopAuto()) : t(f, "reset", 200)), d.viewport.unbind("touchend MSPointerUp pointerup", R), d.viewport.get(0).releasePointerCapture && d.viewport.get(0).releasePointerCapture(d.pointerId)
            }, S = function (b) {
                if (d.initialized)if (d.working) window.setTimeout(S, 10); else {
                    var c = a(window).width(), h = a(window).height();
                    f === c && g === h || (f = c, g = h, e.redrawSlider(), d.settings.onSliderResize.call(e, d.active.index))
                }
            }, T = function (a) {
                var b = p();
                d.settings.ariaHidden && !d.settings.ticker && (d.children.attr("aria-hidden", "true"), d.children.slice(a, a + b).attr("aria-hidden", "false"))
            }, U = function (a) {
                return a < 0 ? d.settings.infiniteLoop ? q() - 1 : d.active.index : a >= q() ? d.settings.infiniteLoop ? 0 : d.active.index : a
            };
            return e.goToSlide = function (b, c) {
                var f, g, h, i, j = !0, k = 0, l = {left: 0, top: 0}, n = null;
                if (d.oldIndex = d.active.index, d.active.index = U(b), !d.working && d.active.index !== d.oldIndex) {
                    if (d.working = !0, j = d.settings.onSlideBefore.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index), "undefined" != typeof j && !j)return d.active.index = d.oldIndex, void(d.working = !1);
                    "next" === c ? d.settings.onSlideNext.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index) || (j = !1) : "prev" === c && (d.settings.onSlidePrev.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index) || (j = !1)), d.active.last = d.active.index >= q() - 1, (d.settings.pager || d.settings.pagerCustom) && E(d.active.index), d.settings.controls && H(), "fade" === d.settings.mode ? (d.settings.adaptiveHeight && d.viewport.height() !== m() && d.viewport.animate({height: m()}, d.settings.adaptiveHeightSpeed), d.children.filter(":visible").fadeOut(d.settings.speed).css({zIndex: 0}), d.children.eq(d.active.index).css("zIndex", d.settings.slideZIndex + 1).fadeIn(d.settings.speed, function () {
                        a(this).css("zIndex", d.settings.slideZIndex), F()
                    })) : (d.settings.adaptiveHeight && d.viewport.height() !== m() && d.viewport.animate({height: m()}, d.settings.adaptiveHeightSpeed), !d.settings.infiniteLoop && d.carousel && d.active.last ? "horizontal" === d.settings.mode ? (n = d.children.eq(d.children.length - 1), l = n.position(), k = d.viewport.width() - n.outerWidth()) : (f = d.children.length - d.settings.minSlides, l = d.children.eq(f).position()) : d.carousel && d.active.last && "prev" === c ? (g = 1 === d.settings.moveSlides ? d.settings.maxSlides - r() : (q() - 1) * r() - (d.children.length - d.settings.maxSlides), n = e.children(".bx-clone").eq(g), l = n.position()) : "next" === c && 0 === d.active.index ? (l = e.find("> .bx-clone").eq(d.settings.maxSlides).position(), d.active.last = !1) : b >= 0 && (i = b * parseInt(r()), l = d.children.eq(i).position()), "undefined" != typeof l ? (h = "horizontal" === d.settings.mode ? -(l.left - k) : -l.top, t(h, "slide", d.settings.speed)) : d.working = !1), d.settings.ariaHidden && T(d.active.index * r())
                }
            }, e.goToNextSlide = function () {
                if (d.settings.infiniteLoop || !d.active.last) {
                    var a = parseInt(d.active.index) + 1;
                    e.goToSlide(a, "next")
                }
            }, e.goToPrevSlide = function () {
                if (d.settings.infiniteLoop || 0 !== d.active.index) {
                    var a = parseInt(d.active.index) - 1;
                    e.goToSlide(a, "prev")
                }
            }, e.startAuto = function (a) {
                d.interval || (d.interval = setInterval(function () {
                    "next" === d.settings.autoDirection ? e.goToNextSlide() : e.goToPrevSlide()
                }, d.settings.pause), d.settings.autoControls && a !== !0 && G("stop"))
            }, e.stopAuto = function (a) {
                d.interval && (clearInterval(d.interval), d.interval = null, d.settings.autoControls && a !== !0 && G("start"))
            }, e.getCurrentSlide = function () {
                return d.active.index
            }, e.getCurrentSlideElement = function () {
                return d.children.eq(d.active.index)
            }, e.getSlideElement = function (a) {
                return d.children.eq(a)
            }, e.getSlideCount = function () {
                return d.children.length
            }, e.isWorking = function () {
                return d.working
            }, e.redrawSlider = function () {
                d.children.add(e.find(".bx-clone")).outerWidth(o()), d.viewport.css("height", m()), e.find(".bx-clone").css({height: m()}), d.children.css({height: m()}), d.settings.ticker || s(), d.active.last && (d.active.index = q() - 1), d.active.index >= q() && (d.active.last = !0), d.settings.pager && !d.settings.pagerCustom && (u(), E(d.active.index)), d.settings.ariaHidden && T(d.active.index * r())
            }, e.destroySlider = function () {
                d.initialized && (d.initialized = !1, a(".bx-clone", this).remove(), d.children.each(function () {
                    void 0 !== a(this).data("origStyle") ? a(this).attr("style", a(this).data("origStyle")) : a(this).removeAttr("style")
                }), void 0 !== a(this).data("origStyle") ? this.attr("style", a(this).data("origStyle")) : a(this).removeAttr("style"), a(this).unwrap().unwrap(), d.controls.el && d.controls.el.remove(), d.controls.next && d.controls.next.remove(), d.controls.prev && d.controls.prev.remove(), d.pagerEl && d.settings.controls && !d.settings.pagerCustom && d.pagerEl.remove(), a(".bx-caption", this).remove(), d.controls.autoEl && d.controls.autoEl.remove(), clearInterval(d.interval), d.settings.responsive && a(window).unbind("resize", S), d.settings.keyboardEnabled && a(document).unbind("keydown", M), a(this).removeData("bxSlider"))
            }, e.reloadSlider = function (b) {
                void 0 !== b && (c = b), e.destroySlider(), h(), a(e).data("bxSlider", this)
            }, h(), a(e).data("bxSlider", this), this
        }
    }
}(jQuery), !function (a) {
    a.fn.justifiedGallery = function (b) {
        function c(a, b, c) {
            var d;
            return d = a > b ? a : b, 100 >= d ? c.settings.sizeRangeSuffixes.lt100 : 240 >= d ? c.settings.sizeRangeSuffixes.lt240 : 320 >= d ? c.settings.sizeRangeSuffixes.lt320 : 500 >= d ? c.settings.sizeRangeSuffixes.lt500 : 640 >= d ? c.settings.sizeRangeSuffixes.lt640 : c.settings.sizeRangeSuffixes.lt1024
        }

        function d(a, b) {
            return -1 !== a.indexOf(b, a.length - b.length)
        }

        function e(a, b) {
            return a.substring(0, a.length - b.length)
        }

        function f(a, b) {
            var c = !1;
            for (var e in b.settings.sizeRangeSuffixes)if (0 !== b.settings.sizeRangeSuffixes[e].length) {
                if (d(a, b.settings.sizeRangeSuffixes[e]))return b.settings.sizeRangeSuffixes[e]
            } else c = !0;
            if (c)return "";
            throw"unknown suffix for " + a
        }

        function g(a, b, d, g) {
            var h = a.match(g.settings.extension), i = null != h ? h[0] : "", j = a.replace(g.settings.extension, "");
            return j = e(j, f(j, g)), j += c(b, d, g) + i
        }

        function h(b) {
            var c = a(b.currentTarget).find(".caption");
            b.data.settings.cssAnimation ? c.addClass("caption-visible").removeClass("caption-hidden") : c.stop().fadeTo(b.data.settings.captionSettings.animationDuration, b.data.settings.captionSettings.visibleOpacity)
        }

        function i(b) {
            var c = a(b.currentTarget).find(".caption");
            b.data.settings.cssAnimation ? c.removeClass("caption-visible").removeClass("caption-hidden") : c.stop().fadeTo(b.data.settings.captionSettings.animationDuration, b.data.settings.captionSettings.nonVisibleOpacity)
        }

        function j(a, b, c) {
            c.settings.cssAnimation ? (a.addClass("entry-visible"), b()) : a.stop().fadeTo(c.settings.imagesAnimationDuration, 1, b)
        }

        function k(a, b) {
            b.settings.cssAnimation ? a.removeClass("entry-visible") : a.stop().fadeTo(0, 0)
        }

        function l(a) {
            var b = a.find("> img");
            return 0 === b.length && (b = a.find("> a > img")), b
        }

        function m(b, c, d, e, f, k, m) {
            function n() {
                p !== q && o.attr("src", q)
            }

            var o = l(b);
            o.css("width", e), o.css("height", f), o.css("margin-left", -e / 2), o.css("margin-top", -f / 2), b.width(e), b.height(k), b.css("top", d), b.css("left", c);
            var p = o.attr("src"), q = g(p, e, f, m);
            o.one("error", function () {
                o.attr("src", o.data("jg.originalSrc"))
            }), "skipped" === o.data("jg.loaded") ? x(p, function () {
                j(b, n, m), o.data("jg.loaded", !0)
            }) : j(b, n, m);
            var r = b.data("jg.captionMouseEvents");
            if (m.settings.captions === !0) {
                var s = b.find(".caption");
                if (0 === s.length) {
                    var t = o.attr("alt");
                    "undefined" == typeof t && (t = b.attr("title")), "undefined" != typeof t && (s = a('<div class="caption">' + t + "</div>"), b.append(s))
                }
                0 !== s.length && (m.settings.cssAnimation || s.stop().fadeTo(m.settings.imagesAnimationDuration, m.settings.captionSettings.nonVisibleOpacity), "undefined" == typeof r && (r = {
                    mouseenter: h,
                    mouseleave: i
                }, b.on("mouseenter", void 0, m, r.mouseenter), b.on("mouseleave", void 0, m, r.mouseleave), b.data("jg.captionMouseEvents", r)))
            } else"undefined" != typeof r && (b.off("mouseenter", void 0, m, r.mouseenter), b.off("mouseleave", void 0, m, r.mouseleave), b.removeData("jg.captionMouseEvents"))
        }

        function n(a, b) {
            var c, d, e, f, g, h, i = a.settings, j = !0, k = 0,
                m = a.galleryWidth - 2 * a.border - (a.buildingRow.entriesBuff.length - 1) * i.margins,
                n = m / a.buildingRow.aspectRatio, o = a.buildingRow.width / m > i.justifyThreshold;
            if (b && "hide" === i.lastRow && !o) {
                for (c = 0; c < a.buildingRow.entriesBuff.length; c++)d = a.buildingRow.entriesBuff[c], i.cssAnimation ? d.removeClass("entry-visible") : d.stop().fadeTo(0, 0);
                return -1
            }
            for (b && !o && "nojustify" === i.lastRow && (j = !1), c = 0; c < a.buildingRow.entriesBuff.length; c++)e = l(a.buildingRow.entriesBuff[c]), f = e.data("jg.imgw") / e.data("jg.imgh"), j ? (g = c === a.buildingRow.entriesBuff.length - 1 ? m : n * f, h = n) : (g = i.rowHeight * f, h = i.rowHeight), m -= Math.round(g), e.data("jg.jimgw", Math.round(g)), e.data("jg.jimgh", Math.ceil(h)), (0 === c || k > h) && (k = h);
            return i.fixedHeight && k > i.rowHeight && (k = i.rowHeight), {minHeight: k, justify: j}
        }

        function o(a) {
            a.lastAnalyzedIndex = -1, a.buildingRow.entriesBuff = [], a.buildingRow.aspectRatio = 0, a.buildingRow.width = 0, a.offY = a.border
        }

        function p(a, b) {
            var c, d, e, f, g = a.settings, h = a.border;
            if (f = n(a, b), e = f.minHeight, b && "hide" === g.lastRow && -1 === e)return a.buildingRow.entriesBuff = [], a.buildingRow.aspectRatio = 0, void(a.buildingRow.width = 0);
            g.maxRowHeight > 0 && g.maxRowHeight < e ? e = g.maxRowHeight : 0 === g.maxRowHeight && 1.5 * g.rowHeight < e && (e = 1.5 * g.rowHeight);
            for (var i = 0; i < a.buildingRow.entriesBuff.length; i++)c = a.buildingRow.entriesBuff[i], d = l(c), m(c, h, a.offY, d.data("jg.jimgw"), d.data("jg.jimgh"), e, a), h += d.data("jg.jimgw") + g.margins;
            a.$gallery.height(a.offY + e + a.border + (a.spinner.active ? a.spinner.$el.innerHeight() : 0)), (!b || e <= a.settings.rowHeight && f.justify) && (a.offY += e + a.settings.margins, a.buildingRow.entriesBuff = [], a.buildingRow.aspectRatio = 0, a.buildingRow.width = 0, a.$gallery.trigger("jg.rowflush"))
        }

        function q(a) {
            a.checkWidthIntervalId = setInterval(function () {
                var b = parseInt(a.$gallery.width(), 10);
                a.galleryWidth !== b && (a.galleryWidth = b, o(a), u(a, !0))
            }, a.settings.refreshTime)
        }

        function r(a) {
            clearInterval(a.intervalId), a.intervalId = setInterval(function () {
                a.phase < a.$points.length ? a.$points.eq(a.phase).fadeTo(a.timeslot, 1) : a.$points.eq(a.phase - a.$points.length).fadeTo(a.timeslot, 0), a.phase = (a.phase + 1) % (2 * a.$points.length)
            }, a.timeslot)
        }

        function s(a) {
            clearInterval(a.intervalId), a.intervalId = null
        }

        function t(a) {
            a.yield.flushed = 0, null !== a.imgAnalyzerTimeout && clearTimeout(a.imgAnalyzerTimeout)
        }

        function u(a, b) {
            t(a), a.imgAnalyzerTimeout = setTimeout(function () {
                v(a, b)
            }, .001), v(a, b)
        }

        function v(b, c) {
            for (var d, e = b.settings, f = b.lastAnalyzedIndex + 1; f < b.entries.length; f++) {
                var g = a(b.entries[f]), h = l(g);
                if (h.data("jg.loaded") === !0 || "skipped" === h.data("jg.loaded")) {
                    d = f >= b.entries.length - 1;
                    var i = b.galleryWidth - 2 * b.border - (b.buildingRow.entriesBuff.length - 1) * e.margins,
                        j = h.data("jg.imgw") / h.data("jg.imgh");
                    if (i / (b.buildingRow.aspectRatio + j) < e.rowHeight && (p(b, d), ++b.yield.flushed >= b.yield.every))return void u(b, c);
                    b.buildingRow.entriesBuff.push(g), b.buildingRow.aspectRatio += j, b.buildingRow.width += j * e.rowHeight, b.lastAnalyzedIndex = f
                } else if ("error" !== h.data("jg.loaded"))return
            }
            b.buildingRow.entriesBuff.length > 0 && p(b, !0), b.spinner.active && (b.spinner.active = !1, b.$gallery.height(b.$gallery.height() - b.spinner.$el.innerHeight()), b.spinner.$el.detach(), s(b.spinner)), t(b), b.$gallery.trigger(c ? "jg.resize" : "jg.complete")
        }

        function w(a) {
            function b(a) {
                if ("string" != typeof d.sizeRangeSuffixes[a])throw"sizeRangeSuffixes." + a + " must be a string"
            }

            function c(a, b) {
                if ("string" == typeof a[b]) {
                    if (a[b] = parseFloat(a[b], 10), isNaN(a[b]))throw"invalid number for " + b
                } else {
                    if ("number" != typeof a[b])throw b + " must be a number";
                    if (isNaN(a[b]))throw"invalid number for " + b
                }
            }

            var d = a.settings;
            if ("object" != typeof d.sizeRangeSuffixes)throw"sizeRangeSuffixes must be defined and must be an object";
            if (b("lt100"), b("lt240"), b("lt320"), b("lt500"), b("lt640"), b("lt1024"), c(d, "rowHeight"), c(d, "maxRowHeight"), d.maxRowHeight > 0 && d.maxRowHeight < d.rowHeight && (d.maxRowHeight = d.rowHeight), c(d, "margins"), c(d, "border"), "nojustify" !== d.lastRow && "justify" !== d.lastRow && "hide" !== d.lastRow)throw'lastRow must be "nojustify", "justify" or "hide"';
            if (c(d, "justifyThreshold"), d.justifyThreshold < 0 || d.justifyThreshold > 1)throw"justifyThreshold must be in the interval [0,1]";
            if ("boolean" != typeof d.cssAnimation)throw"cssAnimation must be a boolean";
            if (c(d.captionSettings, "animationDuration"), c(d, "imagesAnimationDuration"), c(d.captionSettings, "visibleOpacity"), d.captionSettings.visibleOpacity < 0 || d.captionSettings.visibleOpacity > 1)throw"captionSettings.visibleOpacity must be in the interval [0, 1]";
            if (c(d.captionSettings, "nonVisibleOpacity"), d.captionSettings.visibleOpacity < 0 || d.captionSettings.visibleOpacity > 1)throw"captionSettings.nonVisibleOpacity must be in the interval [0, 1]";
            if ("boolean" != typeof d.fixedHeight)throw"fixedHeight must be a boolean";
            if ("boolean" != typeof d.captions)throw"captions must be a boolean";
            if (c(d, "refreshTime"), "boolean" != typeof d.randomize)throw"randomize must be a boolean"
        }

        function x(b, c, d) {
            if (c || d) {
                var e = new Image, f = a(e);
                c && f.one("load", function () {
                    f.off("load error"), c(e)
                }), d && f.one("error", function () {
                    f.off("load error"), d(e)
                }), e.src = b
            }
        }

        var y = {
            sizeRangeSuffixes: {lt100: "", lt240: "", lt320: "", lt500: "", lt640: "", lt1024: ""},
            rowHeight: 120,
            maxRowHeight: 0,
            margins: 1,
            border: -1,
            lastRow: "nojustify",
            justifyThreshold: .75,
            fixedHeight: !1,
            waitThumbnailsLoad: !0,
            captions: !0,
            cssAnimation: !1,
            imagesAnimationDuration: 500,
            captionSettings: {animationDuration: 500, visibleOpacity: .7, nonVisibleOpacity: 0},
            rel: null,
            target: null,
            extension: /\.[^.\\/]+$/,
            refreshTime: 100,
            randomize: !1
        };
        return this.each(function (c, d) {
            var e = a(d);
            e.addClass("justified-gallery");
            var f = e.data("jg.context");
            if ("undefined" == typeof f) {
                if ("undefined" != typeof b && null !== b && "object" != typeof b)throw"The argument must be an object";
                var g = a('<div class="spinner"><span></span><span></span><span></span></div>'), h = a.extend({}, y, b),
                    i = h.border >= 0 ? h.border : h.margins;
                f = {
                    settings: h,
                    imgAnalyzerTimeout: null,
                    entries: null,
                    buildingRow: {entriesBuff: [], width: 0, aspectRatio: 0},
                    lastAnalyzedIndex: -1,
                    yield: {every: 2, flushed: 0},
                    border: i,
                    offY: i,
                    spinner: {active: !1, phase: 0, timeslot: 150, $el: g, $points: g.find("span"), intervalId: null},
                    checkWidthIntervalId: null,
                    galleryWidth: e.width(),
                    $gallery: e
                }, e.data("jg.context", f)
            } else if ("norewind" === b)for (var j = 0; j < f.buildingRow.entriesBuff.length; j++)k(f.buildingRow.entriesBuff[j], f); else f.settings = a.extend({}, f.settings, b), f.border = f.settings.border >= 0 ? f.settings.border : f.settings.margins, o(f);
            if (w(f), f.entries = e.find("> a, > div:not(.spinner)").toArray(), 0 !== f.entries.length) {
                f.settings.randomize && (f.entries.sort(function () {
                    return 2 * Math.random() - 1
                }), a.each(f.entries, function () {
                    a(this).appendTo(e)
                }));
                var m = !1, n = !1;
                a.each(f.entries, function (b, c) {
                    var d = a(c), g = l(d);
                    if (d.addClass("jg-entry"), g.data("jg.loaded") !== !0 && "skipped" !== g.data("jg.loaded")) {
                        null !== f.settings.rel && d.attr("rel", f.settings.rel), null !== f.settings.target && d.attr("target", f.settings.target);
                        var h = "undefined" != typeof g.data("safe-src") ? g.data("safe-src") : g.attr("src");
                        g.data("jg.originalSrc", h), g.attr("src", h);
                        var i = parseInt(g.attr("width"), 10), j = parseInt(g.attr("height"), 10);
                        if (f.settings.waitThumbnailsLoad !== !0 && !isNaN(i) && !isNaN(j))return g.data("jg.imgw", i), g.data("jg.imgh", j), g.data("jg.loaded", "skipped"), n = !0, u(f, !1), !0;
                        g.data("jg.loaded", !1), m = !0, f.spinner.active === !1 && (f.spinner.active = !0, e.append(f.spinner.$el), e.height(f.offY + f.spinner.$el.innerHeight()), r(f.spinner)), x(h, function (a) {
                            g.data("jg.imgw", a.width), g.data("jg.imgh", a.height), g.data("jg.loaded", !0), u(f, !1)
                        }, function () {
                            g.data("jg.loaded", "error"), u(f, !1)
                        })
                    }
                }), m || n || u(f, !1), q(f)
            }
        })
    }
}(jQuery), function (a, b, c, d) {
    function e(b, c) {
        this.element = b, this.options = a.extend({}, g, c), this._defaults = g, this._name = f, this.init()
    }

    var f = "stellar", g = {
            scrollProperty: "scroll",
            positionProperty: "position",
            horizontalScrolling: !0,
            verticalScrolling: !0,
            horizontalOffset: 0,
            verticalOffset: 0,
            responsive: !1,
            parallaxBackgrounds: !0,
            parallaxElements: !0,
            hideDistantElements: !0,
            hideElement: function (a) {
                a.hide()
            },
            showElement: function (a) {
                a.show()
            }
        }, h = {
            scroll: {
                getLeft: function (a) {
                    return a.scrollLeft()
                }, setLeft: function (a, b) {
                    a.scrollLeft(b)
                }, getTop: function (a) {
                    return a.scrollTop()
                }, setTop: function (a, b) {
                    a.scrollTop(b)
                }
            }, position: {
                getLeft: function (a) {
                    return parseInt(a.css("left"), 10) * -1
                }, getTop: function (a) {
                    return parseInt(a.css("top"), 10) * -1
                }
            }, margin: {
                getLeft: function (a) {
                    return parseInt(a.css("margin-left"), 10) * -1
                }, getTop: function (a) {
                    return parseInt(a.css("margin-top"), 10) * -1
                }
            }, transform: {
                getLeft: function (a) {
                    var b = getComputedStyle(a[0])[k];
                    return "none" !== b ? parseInt(b.match(/(-?[0-9]+)/g)[4], 10) * -1 : 0
                }, getTop: function (a) {
                    var b = getComputedStyle(a[0])[k];
                    return "none" !== b ? parseInt(b.match(/(-?[0-9]+)/g)[5], 10) * -1 : 0
                }
            }
        }, i = {
            position: {
                setLeft: function (a, b) {
                    a.css("left", b)
                }, setTop: function (a, b) {
                    a.css("top", b)
                }
            }, transform: {
                setPosition: function (a, b, c, d, e) {
                    a[0].style[k] = "translate3d(" + (b - c) + "px, " + (d - e) + "px, 0)"
                }
            }
        }, j = function () {
            var b, c = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/, d = a("script")[0].style, e = "";
            for (b in d)if (c.test(b)) {
                e = b.match(c)[0];
                break
            }
            return "WebkitOpacity" in d && (e = "Webkit"), "KhtmlOpacity" in d && (e = "Khtml"), function (a) {
                return e + (e.length > 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a)
            }
        }(), k = j("transform"), l = a("<div />", {style: "background:#fff"}).css("background-position-x") !== d,
        m = l ? function (a, b, c) {
            a.css({"background-position-x": b, "background-position-y": c})
        } : function (a, b, c) {
            a.css("background-position", b + " " + c)
        }, n = l ? function (a) {
            return [a.css("background-position-x"), a.css("background-position-y")]
        } : function (a) {
            return a.css("background-position").split(" ")
        },
        o = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || function (a) {
                setTimeout(a, 1e3 / 60)
            };
    e.prototype = {
        init: function () {
            this.options.name = f + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({firstLoad: !0}), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
        }, _defineElements: function () {
            this.element === c.body && (this.element = b), this.$scrollElement = a(this.element), this.$element = a.isWindow(this.element) ? a("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== d ? a(this.options.viewportElement) : this.$scrollElement[0] === b || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
        }, _defineGetters: function () {
            var a = this, b = h[a.options.scrollProperty];
            this._getScrollLeft = function () {
                return b.getLeft(a.$scrollElement)
            }, this._getScrollTop = function () {
                return b.getTop(a.$scrollElement)
            }
        }, _defineSetters: function () {
            var b = this, c = h[b.options.scrollProperty], d = i[b.options.positionProperty], e = c.setLeft,
                f = c.setTop;
            this._setScrollLeft = "function" == typeof e ? function (a) {
                e(b.$scrollElement, a)
            } : a.noop, this._setScrollTop = "function" == typeof f ? function (a) {
                f(b.$scrollElement, a)
            } : a.noop, this._setPosition = d.setPosition || function (a, c, e, f, g) {
                    b.options.horizontalScrolling && d.setLeft(a, c, e), b.options.verticalScrolling && d.setTop(a, f, g)
                }
        }, _handleWindowLoadAndResize: function () {
            var c = this, d = a(b);
            c.options.responsive && d.bind("load." + this.name, function () {
                c.refresh()
            }), d.bind("resize." + this.name, function () {
                c._detectViewport(), c.options.responsive && c.refresh()
            })
        }, refresh: function (c) {
            var d = this, e = d._getScrollLeft(), f = d._getScrollTop();
            c && c.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), c && c.firstLoad && /WebKit/.test(navigator.userAgent) && a(b).load(function () {
                var a = d._getScrollLeft(), b = d._getScrollTop();
                d._setScrollLeft(a + 1), d._setScrollTop(b + 1), d._setScrollLeft(a), d._setScrollTop(b)
            }), this._setScrollLeft(e), this._setScrollTop(f)
        }, _detectViewport: function () {
            var a = this.$viewportElement.offset(), b = null !== a && a !== d;
            this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = b ? a.top : 0, this.viewportOffsetLeft = b ? a.left : 0
        }, _findParticles: function () {
            var b = this;
            this._getScrollLeft(), this._getScrollTop();
            if (this.particles !== d)for (var c = this.particles.length - 1; c >= 0; c--)this.particles[c].$element.data("stellar-elementIsActive", d);
            this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function (c) {
                var e, f, g, h, i, j, k, l, m, n = a(this), o = 0, p = 0, q = 0, r = 0;
                if (n.data("stellar-elementIsActive")) {
                    if (n.data("stellar-elementIsActive") !== this)return
                } else n.data("stellar-elementIsActive", this);
                b.options.showElement(n), n.data("stellar-startingLeft") ? (n.css("left", n.data("stellar-startingLeft")), n.css("top", n.data("stellar-startingTop"))) : (n.data("stellar-startingLeft", n.css("left")), n.data("stellar-startingTop", n.css("top"))), g = n.position().left, h = n.position().top, i = "auto" === n.css("margin-left") ? 0 : parseInt(n.css("margin-left"), 10), j = "auto" === n.css("margin-top") ? 0 : parseInt(n.css("margin-top"), 10), l = n.offset().left - i, m = n.offset().top - j, n.parents().each(function () {
                    var b = a(this);
                    return b.data("stellar-offset-parent") === !0 ? (o = q, p = r, k = b, !1) : (q += b.position().left, void(r += b.position().top))
                }), e = n.data("stellar-horizontal-offset") !== d ? n.data("stellar-horizontal-offset") : k !== d && k.data("stellar-horizontal-offset") !== d ? k.data("stellar-horizontal-offset") : b.horizontalOffset, f = n.data("stellar-vertical-offset") !== d ? n.data("stellar-vertical-offset") : k !== d && k.data("stellar-vertical-offset") !== d ? k.data("stellar-vertical-offset") : b.verticalOffset, b.particles.push({
                    $element: n,
                    $offsetParent: k,
                    isFixed: "fixed" === n.css("position"),
                    horizontalOffset: e,
                    verticalOffset: f,
                    startingPositionLeft: g,
                    startingPositionTop: h,
                    startingOffsetLeft: l,
                    startingOffsetTop: m,
                    parentOffsetLeft: o,
                    parentOffsetTop: p,
                    stellarRatio: n.data("stellar-ratio") !== d ? n.data("stellar-ratio") : 1,
                    width: n.outerWidth(!0),
                    height: n.outerHeight(!0),
                    isHidden: !1
                })
            })
        }, _findBackgrounds: function () {
            var b, c = this, e = this._getScrollLeft(), f = this._getScrollTop();
            this.backgrounds = [], this.options.parallaxBackgrounds && (b = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (b = b.add(this.$element)), b.each(function () {
                var b, g, h, i, j, k, l, o = a(this), p = n(o), q = 0, r = 0, s = 0, t = 0;
                if (o.data("stellar-backgroundIsActive")) {
                    if (o.data("stellar-backgroundIsActive") !== this)return
                } else o.data("stellar-backgroundIsActive", this);
                o.data("stellar-backgroundStartingLeft") ? m(o, o.data("stellar-backgroundStartingLeft"), o.data("stellar-backgroundStartingTop")) : (o.data("stellar-backgroundStartingLeft", p[0]), o.data("stellar-backgroundStartingTop", p[1])), h = "auto" === o.css("margin-left") ? 0 : parseInt(o.css("margin-left"), 10), i = "auto" === o.css("margin-top") ? 0 : parseInt(o.css("margin-top"), 10), j = o.offset().left - h - e, k = o.offset().top - i - f, o.parents().each(function () {
                    var b = a(this);
                    return b.data("stellar-offset-parent") === !0 ? (q = s, r = t, l = b, !1) : (s += b.position().left, void(t += b.position().top))
                }), b = o.data("stellar-horizontal-offset") !== d ? o.data("stellar-horizontal-offset") : l !== d && l.data("stellar-horizontal-offset") !== d ? l.data("stellar-horizontal-offset") : c.horizontalOffset, g = o.data("stellar-vertical-offset") !== d ? o.data("stellar-vertical-offset") : l !== d && l.data("stellar-vertical-offset") !== d ? l.data("stellar-vertical-offset") : c.verticalOffset, c.backgrounds.push({
                    $element: o,
                    $offsetParent: l,
                    isFixed: "fixed" === o.css("background-attachment"),
                    horizontalOffset: b,
                    verticalOffset: g,
                    startingValueLeft: p[0],
                    startingValueTop: p[1],
                    startingBackgroundPositionLeft: isNaN(parseInt(p[0], 10)) ? 0 : parseInt(p[0], 10),
                    startingBackgroundPositionTop: isNaN(parseInt(p[1], 10)) ? 0 : parseInt(p[1], 10),
                    startingPositionLeft: o.position().left,
                    startingPositionTop: o.position().top,
                    startingOffsetLeft: j,
                    startingOffsetTop: k,
                    parentOffsetLeft: q,
                    parentOffsetTop: r,
                    stellarRatio: o.data("stellar-background-ratio") === d ? 1 : o.data("stellar-background-ratio")
                })
            }))
        }, _reset: function () {
            var a, b, c, d, e;
            for (e = this.particles.length - 1; e >= 0; e--)a = this.particles[e], b = a.$element.data("stellar-startingLeft"), c = a.$element.data("stellar-startingTop"), this._setPosition(a.$element, b, b, c, c), this.options.showElement(a.$element), a.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
            for (e = this.backgrounds.length - 1; e >= 0; e--)d = this.backgrounds[e], d.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), m(d.$element, d.startingValueLeft, d.startingValueTop)
        }, destroy: function () {
            this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = a.noop, a(b).unbind("load." + this.name).unbind("resize." + this.name)
        }, _setOffsets: function () {
            var c = this, d = a(b);
            d.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), d.bind("resize.horizontal-" + this.name, function () {
                c.horizontalOffset = c.options.horizontalOffset()
            })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), d.bind("resize.vertical-" + this.name, function () {
                c.verticalOffset = c.options.verticalOffset()
            })) : this.verticalOffset = this.options.verticalOffset
        }, _repositionElements: function () {
            var a, b, c, d, e, f, g, h, i, j, k = this._getScrollLeft(), l = this._getScrollTop(), n = !0, o = !0;
            if (this.currentScrollLeft !== k || this.currentScrollTop !== l || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                for (this.currentScrollLeft = k, this.currentScrollTop = l, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, j = this.particles.length - 1; j >= 0; j--)a = this.particles[j], b = a.isFixed ? 1 : 0, this.options.horizontalScrolling ? (f = (k + a.horizontalOffset + this.viewportOffsetLeft + a.startingPositionLeft - a.startingOffsetLeft + a.parentOffsetLeft) * -(a.stellarRatio + b - 1) + a.startingPositionLeft, h = f - a.startingPositionLeft + a.startingOffsetLeft) : (f = a.startingPositionLeft, h = a.startingOffsetLeft), this.options.verticalScrolling ? (g = (l + a.verticalOffset + this.viewportOffsetTop + a.startingPositionTop - a.startingOffsetTop + a.parentOffsetTop) * -(a.stellarRatio + b - 1) + a.startingPositionTop, i = g - a.startingPositionTop + a.startingOffsetTop) : (g = a.startingPositionTop, i = a.startingOffsetTop), this.options.hideDistantElements && (o = !this.options.horizontalScrolling || h + a.width > (a.isFixed ? 0 : k) && h < (a.isFixed ? 0 : k) + this.viewportWidth + this.viewportOffsetLeft, n = !this.options.verticalScrolling || i + a.height > (a.isFixed ? 0 : l) && i < (a.isFixed ? 0 : l) + this.viewportHeight + this.viewportOffsetTop), o && n ? (a.isHidden && (this.options.showElement(a.$element), a.isHidden = !1), this._setPosition(a.$element, f, a.startingPositionLeft, g, a.startingPositionTop)) : a.isHidden || (this.options.hideElement(a.$element), a.isHidden = !0);
                for (j = this.backgrounds.length - 1; j >= 0; j--)c = this.backgrounds[j], b = c.isFixed ? 0 : 1, d = this.options.horizontalScrolling ? (k + c.horizontalOffset - this.viewportOffsetLeft - c.startingOffsetLeft + c.parentOffsetLeft - c.startingBackgroundPositionLeft) * (b - c.stellarRatio) + "px" : c.startingValueLeft, e = this.options.verticalScrolling ? (l + c.verticalOffset - this.viewportOffsetTop - c.startingOffsetTop + c.parentOffsetTop - c.startingBackgroundPositionTop) * (b - c.stellarRatio) + "px" : c.startingValueTop,
                    m(c.$element, d, e)
            }
        }, _handleScrollEvent: function () {
            var a = this, b = !1, c = function () {
                a._repositionElements(), b = !1
            }, d = function () {
                b || (o(c), b = !0)
            };
            this.$scrollElement.bind("scroll." + this.name, d), d()
        }, _startAnimationLoop: function () {
            var a = this;
            this._animationLoop = function () {
                o(a._animationLoop), a._repositionElements()
            }, this._animationLoop()
        }
    }, a.fn[f] = function (b) {
        var c = arguments;
        return b === d || "object" == typeof b ? this.each(function () {
            a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b))
        }) : "string" == typeof b && "_" !== b[0] && "init" !== b ? this.each(function () {
            var d = a.data(this, "plugin_" + f);
            d instanceof e && "function" == typeof d[b] && d[b].apply(d, Array.prototype.slice.call(c, 1)), "destroy" === b && a.data(this, "plugin_" + f, null)
        }) : void 0
    }, a[f] = function (c) {
        var d = a(b);
        return d.stellar.apply(d, Array.prototype.slice.call(arguments, 0))
    }, a[f].scrollProperty = h, a[f].positionProperty = i, b.Stellar = e
}(jQuery, this, document), !function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (a) {
    var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse",
        m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close",
        t = function () {
        }, u = !!window.jQuery, v = a(window), w = function (a, c) {
            b.ev.on(o + a + p, c)
        }, x = function (b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
        }, y = function (c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
        }, z = function (c) {
            return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
        }, A = function () {
            a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
        }, B = function () {
            var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition)return !0;
            for (; b.length;)if (b.pop() + "Transition" in a)return !0;
            return !1
        };
    t.prototype = {
        constructor: t, init: function () {
            var c = navigator.appVersion;
            b.isIE7 = -1 !== c.indexOf("MSIE 7."), b.isIE8 = -1 !== c.indexOf("MSIE 8."), b.isLowIE = b.isIE7 || b.isIE8, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        }, open: function (c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                    b.index = e;
                    break
                }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen)return void b.updateItemHTML();
            b.types = [], f = "", b.ev = c.mainEl && c.mainEl.length ? c.mainEl.eq(0) : d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
                b.close()
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.wrap.css(b.fixedContentPos ? {
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            } : {
                top: v.scrollTop(),
                position: "absolute"
            }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
                27 === a.keyCode && b.close()
            }), v.on("resize" + p, function () {
                b.updateSize()
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(), n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        }, close: function () {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
                b._close()
            }, b.st.removalDelay)) : b._close())
        }, _close: function () {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = {marginRight: ""};
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        }, updateSize: function (a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth, d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        }, updateItemHTML: function () {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = !!b.st[d] && b.st[d].markup;
                y("FirstMarkupParse", f), b.currTemplate[d] = !f || a(f)
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        }, appendContent: function (a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
        }, parseEl: function (c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {el: a(e)} : (d = e.type, e = {data: e, src: e.src}), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)if (e.el.hasClass("mfp-" + f[g])) {
                    d = f[g];
                    break
                }
                e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        }, addGroup: function (a, c) {
            var d = function (d) {
                d.mfpEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        }, _openClick: function (c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || 2 !== c.which && !c.ctrlKey && !c.metaKey) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)if (a.isFunction(g)) {
                    if (!g.call(b))return !0
                } else if (v.width() < g)return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        }, updateStatus: function (a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {status: a, text: d};
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("mfp-s-" + a), c = a
            }
        }, _checkIfClose: function (c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick, e = b.st.closeOnBgClick;
                if (d && e)return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0])return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d)return !0
                } else if (e && a.contains(document, c))return !0;
                return !1
            }
        }, _addClassToMFP: function (a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        }, _removeClassFromMFP: function (a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        }, _hasScrollBar: function (a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        }, _setFocus: function () {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        }, _onFocusIn: function (c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        }, _parseMarkup: function (b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (a, c) {
                if (void 0 === c || c === !1)return !0;
                if (e = a.split("_"), e.length > 1) {
                    var d = b.find(p + "-" + e[0]);
                    if (d.length > 0) {
                        var f = e[1];
                        "replaceWith" === f ? d[0] !== c[0] && d.replaceWith(c) : "img" === f ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
                    }
                } else b.find(p + "-" + a).html(c)
            })
        }, _getScrollbarSize: function () {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function (b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function () {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function (b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, a.fn.magnificPopup = function (c) {
        A();
        var d = a(this);
        if ("string" == typeof c)if ("open" === c) {
            var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0;
            f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({mfpEl: e}, d, f)
        } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1)); else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline", G = function () {
        E && (D.after(E.addClass(C)).detach(), E = null)
    };
    a.magnificPopup.registerModule(F, {
        options: {hiddenClass: "hide", markup: "", tNotFound: "Content not found"},
        proto: {
            initInline: function () {
                b.types.push(F), w(h + "." + F, function () {
                    G()
                })
            }, getInline: function (c, d) {
                if (G(), c.src) {
                    var e = b.st.inline, f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H, I = "ajax", J = function () {
        H && a(document.body).removeClass(H)
    }, K = function () {
        J(), b.req && b.req.abort()
    };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        }, proto: {
            initAjax: function () {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
            }, getAjax: function (c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src, success: function (d, e, f) {
                        var g = {data: d, xhr: f};
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
                            b.wrap.addClass(q)
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    }, error: function () {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L, M = function (c) {
        if (c.data && void 0 !== c.data.title)return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d))return d.call(b, c);
            if (c.el)return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        }, proto: {
            initImage: function () {
                var c = b.st.image, d = ".image";
                b.types.push("image"), w(m + d, function () {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }), w(h + d, function () {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            }, resizeImage: function () {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            }, _onImageHasSize: function (a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            }, findImageSize: function (a) {
                var c = 0, d = a.img[0], e = function (f) {
                    L && clearInterval(L), L = setInterval(function () {
                        return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                    }, f)
                };
                e(1)
            }, getImage: function (c, d) {
                var e = 0, f = function () {
                    c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                }, g = function () {
                    c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                }, h = b.st.image, i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N, O = function () {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (a) {
                return a.is("img") ? a : a.find("img")
            }
        }, proto: {
            initZoom: function () {
                var a, c = b.st.zoom, d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration, j = function (a) {
                        var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                            d = "all " + c.duration / 1e3 + "s " + c.easing, e = {
                                position: "fixed",
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                "-webkit-backface-visibility": "hidden"
                            }, f = "transition";
                        return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                    }, k = function () {
                        b.content.css("visibility", "visible")
                    };
                    w("BuildControls" + d, function () {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a)return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                                f.css(b._getOffset(!0)), e = setTimeout(function () {
                                    k(), setTimeout(function () {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), w(i + d, function () {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a)return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), w(h + d, function () {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            }, _allowZoom: function () {
                return "image" === b.currItem.type
            }, _getItemToZoom: function () {
                return !!b.currItem.hasSize && b.currItem.img
            }, _getOffset: function (c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(), f = parseInt(d.css("padding-top"), 10), g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f};
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe", Q = "//about:blank", R = function (a) {
        if (b.currTemplate[P]) {
            var c = b.currTemplate[P].find("iframe");
            c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
        }
    };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"},
                vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"},
                gmaps: {index: "//maps.google.", src: "%id%&output=embed"}
            }
        }, proto: {
            initIframe: function () {
                b.types.push(P), w("BeforeChange", function (a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(h + "." + P, function () {
                    R()
                })
            }, getIframe: function (c, d) {
                var e = c.src, f = b.st.iframe;
                a.each(f.patterns, function () {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function (a) {
        var c = b.items.length;
        return a > c - 1 ? a - c : 0 > a ? c + a : a
    }, T = function (a, b, c) {
        return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        }, proto: {
            initGallery: function () {
                var c = b.st.gallery, e = ".mfp-gallery", g = Boolean(a.fn.mfpFastClick);
                return b.direction = !0, !(!c || !c.enabled) && (f += " mfp-gallery", w(m + e, function () {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), d.on("keydown" + e, function (a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), w("UpdateStatus" + e, function (a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }), w(l + e, function (a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function () {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s),
                            h = g ? "mfpFastClick" : "click";
                        e[h](function () {
                            b.prev()
                        }), f[h](function () {
                            b.next()
                        }), b.isIE7 && (x("b", e[0], !1, !0), x("a", e[0], !1, !0), x("b", f[0], !1, !0), x("a", f[0], !1, !0)), b.container.append(e.add(f))
                    }
                }), w(n + e, function () {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function () {
                    d.off(e), b.wrap.off("click" + e), b.arrowLeft && g && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(), b.arrowRight = b.arrowLeft = null
                }))
            }, next: function () {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
            }, prev: function () {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
            }, goTo: function (a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            }, preloadNearbyImages: function () {
                var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++)b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++)b._preloadItem(b.index - a)
            }, _preloadItem: function (c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
                        d.hasSize = !0
                    }).on("error.mfploader", function () {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function (a) {
                return a.src.replace(/\.\w+$/, function (a) {
                    return "@2x" + a
                })
            }, ratio: 1
        }, proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina, c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
                        b.img.css({"max-width": b.img[0].naturalWidth / c, width: "100%"})
                    }), w("ElementParse." + U, function (b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }), function () {
        var b = 1e3, c = "ontouchstart" in window, d = function () {
            v.off("touchmove" + f + " touchend" + f)
        }, e = "mfpFastClick", f = "." + e;
        a.fn.mfpFastClick = function (e) {
            return a(this).each(function () {
                var g, h = a(this);
                if (c) {
                    var i, j, k, l, m, n;
                    h.on("touchstart" + f, function (a) {
                        l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, v.on("touchmove" + f, function (a) {
                            m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0], (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) && (l = !0, d())
                        }).on("touchend" + f, function (a) {
                            d(), l || n > 1 || (g = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function () {
                                g = !1
                            }, b), e())
                        })
                    })
                }
                h.on("click" + f, function () {
                    g || e()
                })
            })
        }, a.fn.destroyMfpFastClick = function () {
            a(this).off("touchstart" + f + " click" + f), c && v.off("touchmove" + f + " touchend" + f)
        }
    }(), A()
});
var mejs = mejs || {};
mejs.version = "2.22.0", mejs.meIndex = 0, mejs.plugins = {
    silverlight: [{
        version: [3, 0],
        types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
    }],
    flash: [{
        version: [9, 0, 124],
        types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/dailymotion", "video/x-dailymotion", "application/x-mpegURL"]
    }],
    youtube: [{version: null, types: ["video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube"]}],
    vimeo: [{version: null, types: ["video/vimeo", "video/x-vimeo"]}]
}, mejs.Utility = {
    encodeUrl: function (a) {
        return encodeURIComponent(a)
    }, escapeHTML: function (a) {
        return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
    }, absolutizeUrl: function (a) {
        var b = document.createElement("div");
        return b.innerHTML = '<a href="' + this.escapeHTML(a) + '">x</a>', b.firstChild.href
    }, getScriptPath: function (a) {
        for (var b, c, d, e, f, g, h = 0, i = "", j = "", k = document.getElementsByTagName("script"), l = k.length, m = a.length; l > h; h++) {
            for (e = k[h].src, c = e.lastIndexOf("/"), c > -1 ? (g = e.substring(c + 1), f = e.substring(0, c + 1)) : (g = e, f = ""), b = 0; m > b; b++)if (j = a[b], d = g.indexOf(j), d > -1) {
                i = f;
                break
            }
            if ("" !== i)break
        }
        return i
    }, calculateTimeFormat: function (a, b, c) {
        0 > a && (a = 0), "undefined" == typeof c && (c = 25);
        var d = b.timeFormat, e = d[0], f = d[1] == d[0], g = f ? 2 : 1, h = ":", i = Math.floor(a / 3600) % 24,
            j = Math.floor(a / 60) % 60, k = Math.floor(a % 60), l = Math.floor((a % 1 * c).toFixed(3)),
            m = [[l, "f"], [k, "s"], [j, "m"], [i, "h"]];
        d.length < g && (h = d[g]);
        for (var n = !1, o = 0, p = m.length; p > o; o++)if (-1 !== d.indexOf(m[o][1])) n = !0; else if (n) {
            for (var q = !1, r = o; p > r; r++)if (m[r][0] > 0) {
                q = !0;
                break
            }
            if (!q)break;
            f || (d = e + d), d = m[o][1] + h + d, f && (d = m[o][1] + d), e = m[o][1]
        }
        b.currentTimeFormat = d
    }, twoDigitsString: function (a) {
        return 10 > a ? "0" + a : String(a)
    }, secondsToTimeCode: function (a, b) {
        if (0 > a && (a = 0), "object" != typeof b) {
            var c = "m:ss";
            c = arguments[1] ? "hh:mm:ss" : c, c = arguments[2] ? c + ":ff" : c, b = {
                currentTimeFormat: c,
                framesPerSecond: arguments[3] || 25
            }
        }
        var d = b.framesPerSecond;
        "undefined" == typeof d && (d = 25);
        var c = b.currentTimeFormat, e = Math.floor(a / 3600) % 24, f = Math.floor(a / 60) % 60, g = Math.floor(a % 60),
            h = Math.floor((a % 1 * d).toFixed(3));
        lis = [[h, "f"], [g, "s"], [f, "m"], [e, "h"]];
        var j = c;
        for (i = 0, len = lis.length; i < len; i++)j = j.replace(lis[i][1] + lis[i][1], this.twoDigitsString(lis[i][0])), j = j.replace(lis[i][1], lis[i][0]);
        return j
    }, timeCodeToSeconds: function (a, b, c, d) {
        "undefined" == typeof c ? c = !1 : "undefined" == typeof d && (d = 25);
        var e = a.split(":"), f = parseInt(e[0], 10), g = parseInt(e[1], 10), h = parseInt(e[2], 10), i = 0, j = 0;
        return c && (i = parseInt(e[3]) / d), j = 3600 * f + 60 * g + h + i
    }, convertSMPTEtoSeconds: function (a) {
        if ("string" != typeof a)return !1;
        a = a.replace(",", ".");
        var b = 0, c = -1 != a.indexOf(".") ? a.split(".")[1].length : 0, d = 1;
        a = a.split(":").reverse();
        for (var e = 0; e < a.length; e++)d = 1, e > 0 && (d = Math.pow(60, e)), b += Number(a[e]) * d;
        return Number(b.toFixed(c))
    }, removeSwf: function (a) {
        var b = document.getElementById(a);
        b && /object|embed/i.test(b.nodeName) && (mejs.MediaFeatures.isIE ? (b.style.display = "none", function () {
            4 == b.readyState ? mejs.Utility.removeObjectInIE(a) : setTimeout(arguments.callee, 10)
        }()) : b.parentNode.removeChild(b))
    }, removeObjectInIE: function (a) {
        var b = document.getElementById(a);
        if (b) {
            for (var c in b)"function" == typeof b[c] && (b[c] = null);
            b.parentNode.removeChild(b)
        }
    }, determineScheme: function (a) {
        return a && -1 != a.indexOf("://") ? a.substr(0, a.indexOf("://") + 3) : "//"
    }
}, mejs.PluginDetector = {
    hasPluginVersion: function (a, b) {
        var c = this.plugins[a];
        return b[1] = b[1] || 0, b[2] = b[2] || 0, c[0] > b[0] || c[0] == b[0] && c[1] > b[1] || c[0] == b[0] && c[1] == b[1] && c[2] >= b[2]
    },
    nav: window.navigator,
    ua: window.navigator.userAgent.toLowerCase(),
    plugins: [],
    addPlugin: function (a, b, c, d, e) {
        this.plugins[a] = this.detectPlugin(b, c, d, e)
    },
    detectPlugin: function (a, b, c, d) {
        var e, f, g, h = [0, 0, 0];
        if ("undefined" != typeof this.nav.plugins && "object" == typeof this.nav.plugins[a]) {
            if (e = this.nav.plugins[a].description, e && ("undefined" == typeof this.nav.mimeTypes || !this.nav.mimeTypes[b] || this.nav.mimeTypes[b].enabledPlugin))for (h = e.replace(a, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split("."), f = 0; f < h.length; f++)h[f] = parseInt(h[f].match(/\d+/), 10)
        } else if ("undefined" != typeof window.ActiveXObject)try {
            g = new ActiveXObject(c), g && (h = d(g))
        } catch (a) {
        }
        return h
    }
}, mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function (a) {
    var b = [], c = a.GetVariable("$version");
    return c && (c = c.split(" ")[1].split(","), b = [parseInt(c[0], 10), parseInt(c[1], 10), parseInt(c[2], 10)]), b
}), mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function (a) {
    var b = [0, 0, 0, 0], c = function (a, b, c, d) {
        for (; a.isVersionSupported(b[0] + "." + b[1] + "." + b[2] + "." + b[3]);)b[c] += d;
        b[c] -= d
    };
    return c(a, b, 0, 1), c(a, b, 1, 1), c(a, b, 2, 1e4), c(a, b, 2, 1e3), c(a, b, 2, 100), c(a, b, 2, 10), c(a, b, 2, 1), c(a, b, 3, 1), b
}), mejs.MediaFeatures = {
    init: function () {
        var a, b, c = this, d = document, e = mejs.PluginDetector.nav, f = mejs.PluginDetector.ua.toLowerCase(),
            g = ["source", "track", "audio", "video"];
        c.isiPad = null !== f.match(/ipad/i), c.isiPhone = null !== f.match(/iphone/i), c.isiOS = c.isiPhone || c.isiPad, c.isAndroid = null !== f.match(/android/i), c.isBustedAndroid = null !== f.match(/android 2\.[12]/), c.isBustedNativeHTTPS = "https:" === location.protocol && (null !== f.match(/android [12]\./) || null !== f.match(/macintosh.* version.* safari/)), c.isIE = -1 != e.appName.toLowerCase().indexOf("microsoft") || null !== e.appName.toLowerCase().match(/trident/gi), c.isChrome = null !== f.match(/chrome/gi), c.isChromium = null !== f.match(/chromium/gi), c.isFirefox = null !== f.match(/firefox/gi), c.isWebkit = null !== f.match(/webkit/gi), c.isGecko = null !== f.match(/gecko/gi) && !c.isWebkit && !c.isIE, c.isOpera = null !== f.match(/opera/gi), c.hasTouch = "ontouchstart" in window, c.svgAsImg = !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
        for (a = 0; a < g.length; a++)b = document.createElement(g[a]);
        c.supportsMediaTag = "undefined" != typeof b.canPlayType || c.isBustedAndroid;
        try {
            b.canPlayType("video/mp4")
        } catch (a) {
            c.supportsMediaTag = !1
        }
        c.supportsPointerEvents = function () {
            var a, b = document.createElement("x"), c = document.documentElement, d = window.getComputedStyle;
            return "pointerEvents" in b.style && (b.style.pointerEvents = "auto", b.style.pointerEvents = "x", c.appendChild(b), a = d && "auto" === d(b, "").pointerEvents, c.removeChild(b), !!a)
        }(), c.hasFirefoxPluginMovingProblem = !1, c.hasiOSFullScreen = "undefined" != typeof b.webkitEnterFullscreen, c.hasNativeFullscreen = "undefined" != typeof b.requestFullscreen, c.hasWebkitNativeFullScreen = "undefined" != typeof b.webkitRequestFullScreen, c.hasMozNativeFullScreen = "undefined" != typeof b.mozRequestFullScreen, c.hasMsNativeFullScreen = "undefined" != typeof b.msRequestFullscreen, c.hasTrueNativeFullScreen = c.hasWebkitNativeFullScreen || c.hasMozNativeFullScreen || c.hasMsNativeFullScreen, c.nativeFullScreenEnabled = c.hasTrueNativeFullScreen, c.hasMozNativeFullScreen ? c.nativeFullScreenEnabled = document.mozFullScreenEnabled : c.hasMsNativeFullScreen && (c.nativeFullScreenEnabled = document.msFullscreenEnabled), c.isChrome && (c.hasiOSFullScreen = !1), c.hasTrueNativeFullScreen && (c.fullScreenEventName = "", c.hasWebkitNativeFullScreen ? c.fullScreenEventName = "webkitfullscreenchange" : c.hasMozNativeFullScreen ? c.fullScreenEventName = "mozfullscreenchange" : c.hasMsNativeFullScreen && (c.fullScreenEventName = "MSFullscreenChange"), c.isFullScreen = function () {
            return c.hasMozNativeFullScreen ? d.mozFullScreen : c.hasWebkitNativeFullScreen ? d.webkitIsFullScreen : c.hasMsNativeFullScreen ? null !== d.msFullscreenElement : void 0
        }, c.requestFullScreen = function (a) {
            c.hasWebkitNativeFullScreen ? a.webkitRequestFullScreen() : c.hasMozNativeFullScreen ? a.mozRequestFullScreen() : c.hasMsNativeFullScreen && a.msRequestFullscreen()
        }, c.cancelFullScreen = function () {
            c.hasWebkitNativeFullScreen ? document.webkitCancelFullScreen() : c.hasMozNativeFullScreen ? document.mozCancelFullScreen() : c.hasMsNativeFullScreen && document.msExitFullscreen()
        }), c.hasiOSFullScreen && f.match(/mac os x 10_5/i) && (c.hasNativeFullScreen = !1, c.hasiOSFullScreen = !1)
    }
}, mejs.MediaFeatures.init(), mejs.HtmlMediaElement = {
    pluginType: "native",
    isFullScreen: !1,
    setCurrentTime: function (a) {
        this.currentTime = a
    },
    setMuted: function (a) {
        this.muted = a
    },
    setVolume: function (a) {
        this.volume = a
    },
    stop: function () {
        this.pause()
    },
    setSrc: function (a) {
        for (var b = this.getElementsByTagName("source"); b.length > 0;)this.removeChild(b[0]);
        if ("string" == typeof a) this.src = a; else {
            var c, d;
            for (c = 0; c < a.length; c++)if (d = a[c], this.canPlayType(d.type)) {
                this.src = d.src;
                break
            }
        }
    },
    setVideoSize: function (a, b) {
        this.width = a, this.height = b
    }
}, mejs.PluginMediaElement = function (a, b, c) {
    this.id = a, this.pluginType = b, this.src = c, this.events = {}, this.attributes = {}
}, mejs.PluginMediaElement.prototype = {
    pluginElement: null,
    pluginType: "",
    isFullScreen: !1,
    playbackRate: -1,
    defaultPlaybackRate: -1,
    seekable: [],
    played: [],
    paused: !0,
    ended: !1,
    seeking: !1,
    duration: 0,
    error: null,
    tagName: "",
    muted: !1,
    volume: 1,
    currentTime: 0,
    play: function () {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.playVideo() : this.pluginApi.playMedia(), this.paused = !1)
    },
    load: function () {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType || this.pluginApi.loadMedia(), this.paused = !1)
    },
    pause: function () {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? 1 == this.pluginApi.getPlayerState() && this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia(), this.paused = !0)
    },
    stop: function () {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia(), this.paused = !0)
    },
    canPlayType: function (a) {
        var b, c, d, e = mejs.plugins[this.pluginType];
        for (b = 0; b < e.length; b++)if (d = e[b], mejs.PluginDetector.hasPluginVersion(this.pluginType, d.version))for (c = 0; c < d.types.length; c++)if (a == d.types[c])return "probably";
        return ""
    },
    positionFullscreenButton: function (a, b, c) {
        null != this.pluginApi && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(Math.floor(a), Math.floor(b), c)
    },
    hideFullscreenButton: function () {
        null != this.pluginApi && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
    },
    setSrc: function (a) {
        if ("string" == typeof a) this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a)),
            this.src = mejs.Utility.absolutizeUrl(a); else {
            var b, c;
            for (b = 0; b < a.length; b++)if (c = a[b], this.canPlayType(c.type)) {
                this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src)), this.src = mejs.Utility.absolutizeUrl(c.src);
                break
            }
        }
    },
    setCurrentTime: function (a) {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.seekTo(a) : this.pluginApi.setCurrentTime(a), this.currentTime = a)
    },
    setVolume: function (a) {
        null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.setVolume(100 * a) : this.pluginApi.setVolume(a), this.volume = a)
    },
    setMuted: function (a) {
        null != this.pluginApi && ("youtube" == this.pluginType ? (a ? this.pluginApi.mute() : this.pluginApi.unMute(), this.muted = a, this.dispatchEvent({type: "volumechange"})) : this.pluginApi.setMuted(a), this.muted = a)
    },
    setVideoSize: function (a, b) {
        this.pluginElement && this.pluginElement.style && (this.pluginElement.style.width = a + "px", this.pluginElement.style.height = b + "px"), null != this.pluginApi && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(a, b)
    },
    setFullscreen: function (a) {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(a)
    },
    enterFullScreen: function () {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!0)
    },
    exitFullScreen: function () {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!1)
    },
    addEventListener: function (a, b, c) {
        this.events[a] = this.events[a] || [], this.events[a].push(b)
    },
    removeEventListener: function (a, b) {
        if (!a)return this.events = {}, !0;
        var c = this.events[a];
        if (!c)return !0;
        if (!b)return this.events[a] = [], !0;
        for (var d = 0; d < c.length; d++)if (c[d] === b)return this.events[a].splice(d, 1), !0;
        return !1
    },
    dispatchEvent: function (a) {
        var b, c = this.events[a.type];
        if (c)for (b = 0; b < c.length; b++)c[b].apply(this, [a])
    },
    hasAttribute: function (a) {
        return a in this.attributes
    },
    removeAttribute: function (a) {
        delete this.attributes[a]
    },
    getAttribute: function (a) {
        return this.hasAttribute(a) ? this.attributes[a] : ""
    },
    setAttribute: function (a, b) {
        this.attributes[a] = b
    },
    remove: function () {
        mejs.Utility.removeSwf(this.pluginElement.id)
    }
}, mejs.MediaElementDefaults = {
    mode: "auto",
    plugins: ["flash", "silverlight", "youtube", "vimeo"],
    enablePluginDebug: !1,
    httpsBasicAuthSite: !1,
    type: "",
    pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
    flashName: "flashmediaelement.swf",
    flashStreamer: "",
    flashScriptAccess: "sameDomain",
    enablePluginSmoothing: !1,
    enablePseudoStreaming: !1,
    pseudoStreamingStartQueryParam: "start",
    silverlightName: "silverlightmediaelement.xap",
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    pluginWidth: -1,
    pluginHeight: -1,
    pluginVars: [],
    timerRate: 250,
    startVolume: .8,
    success: function () {
    },
    error: function () {
    }
}, mejs.MediaElement = function (a, b) {
    return mejs.HtmlMediaElementShim.create(a, b)
}, mejs.HtmlMediaElementShim = {
    create: function (a, b) {
        var c, d, e = {}, f = "string" == typeof a ? document.getElementById(a) : a, g = f.tagName.toLowerCase(),
            h = "audio" === g || "video" === g, i = h ? f.getAttribute("src") : f.getAttribute("href"),
            j = f.getAttribute("poster"), k = f.getAttribute("autoplay"), l = f.getAttribute("preload"),
            m = f.getAttribute("controls");
        for (d in mejs.MediaElementDefaults)e[d] = mejs.MediaElementDefaults[d];
        for (d in b)e[d] = b[d];
        return i = "undefined" == typeof i || null === i || "" == i ? null : i, j = "undefined" == typeof j || null === j ? "" : j, l = "undefined" == typeof l || null === l || "false" === l ? "none" : l, k = !("undefined" == typeof k || null === k || "false" === k), m = !("undefined" == typeof m || null === m || "false" === m), c = this.determinePlayback(f, e, mejs.MediaFeatures.supportsMediaTag, h, i), c.url = null !== c.url ? mejs.Utility.absolutizeUrl(c.url) : "", c.scheme = mejs.Utility.determineScheme(c.url), "native" == c.method ? (mejs.MediaFeatures.isBustedAndroid && (f.src = c.url, f.addEventListener("click", function () {
            f.play()
        }, !1)), this.updateNative(c, e, k, l)) : "" !== c.method ? this.createPlugin(c, e, j, k, l, m) : (this.createErrorMessage(c, e, j), this)
    }, determinePlayback: function (a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, n, o, p, q = [],
            r = {method: "", url: "", htmlMediaElement: a, isVideo: "audio" != a.tagName.toLowerCase(), scheme: ""};
        if ("undefined" != typeof b.type && "" !== b.type)if ("string" == typeof b.type) q.push({
            type: b.type,
            url: e
        }); else for (f = 0; f < b.type.length; f++)q.push({
            type: b.type[f],
            url: e
        }); else if (null !== e) k = this.formatType(e, a.getAttribute("type")), q.push({
            type: k,
            url: e
        }); else for (f = 0; f < a.childNodes.length; f++)j = a.childNodes[f], 1 == j.nodeType && "source" == j.tagName.toLowerCase() && (e = j.getAttribute("src"), k = this.formatType(e, j.getAttribute("type")), p = j.getAttribute("media"), (!p || !window.matchMedia || window.matchMedia && window.matchMedia(p).matches) && q.push({
            type: k,
            url: e
        }));
        if (!d && q.length > 0 && null !== q[0].url && this.getTypeFromFile(q[0].url).indexOf("audio") > -1 && (r.isVideo = !1), mejs.MediaFeatures.isBustedAndroid && (a.canPlayType = function (a) {
                return null !== a.match(/video\/(mp4|m4v)/gi) ? "maybe" : ""
            }), mejs.MediaFeatures.isChromium && (a.canPlayType = function (a) {
                return null !== a.match(/video\/(webm|ogv|ogg)/gi) ? "maybe" : ""
            }), c && ("auto" === b.mode || "auto_plugin" === b.mode || "native" === b.mode) && (!mejs.MediaFeatures.isBustedNativeHTTPS || b.httpsBasicAuthSite !== !0)) {
            for (d || (o = document.createElement(r.isVideo ? "video" : "audio"), a.parentNode.insertBefore(o, a), a.style.display = "none", r.htmlMediaElement = a = o), f = 0; f < q.length; f++)if ("video/m3u8" == q[f].type || "" !== a.canPlayType(q[f].type).replace(/no/, "") || "" !== a.canPlayType(q[f].type.replace(/mp3/, "mpeg")).replace(/no/, "") || "" !== a.canPlayType(q[f].type.replace(/m4a/, "mp4")).replace(/no/, "")) {
                r.method = "native", r.url = q[f].url;
                break
            }
            if ("native" === r.method && (null !== r.url && (a.src = r.url), "auto_plugin" !== b.mode))return r
        }
        if ("auto" === b.mode || "auto_plugin" === b.mode || "shim" === b.mode)for (f = 0; f < q.length; f++)for (k = q[f].type, g = 0; g < b.plugins.length; g++)for (l = b.plugins[g], m = mejs.plugins[l], h = 0; h < m.length; h++)if (n = m[h], null == n.version || mejs.PluginDetector.hasPluginVersion(l, n.version))for (i = 0; i < n.types.length; i++)if (k.toLowerCase() == n.types[i].toLowerCase())return r.method = l, r.url = q[f].url, r;
        return "auto_plugin" === b.mode && "native" === r.method ? r : ("" === r.method && q.length > 0 && (r.url = q[0].url), r)
    }, formatType: function (a, b) {
        return a && !b ? this.getTypeFromFile(a) : b && ~b.indexOf(";") ? b.substr(0, b.indexOf(";")) : b
    }, getTypeFromFile: function (a) {
        a = a.split("?")[0];
        var b = a.substring(a.lastIndexOf(".") + 1).toLowerCase(),
            c = /(mp4|m4v|ogg|ogv|m3u8|webm|webmv|flv|wmv|mpeg|mov)/gi.test(b) ? "video/" : "audio/";
        return this.getTypeFromExtension(b, c)
    }, getTypeFromExtension: function (a, b) {
        switch (b = b || "", a) {
            case"mp4":
            case"m4v":
            case"m4a":
            case"f4v":
            case"f4a":
                return b + "mp4";
            case"flv":
                return b + "x-flv";
            case"webm":
            case"webma":
            case"webmv":
                return b + "webm";
            case"ogg":
            case"oga":
            case"ogv":
                return b + "ogg";
            case"m3u8":
                return "application/x-mpegurl";
            case"ts":
                return b + "mp2t";
            default:
                return b + a
        }
    }, createErrorMessage: function (a, b, c) {
        var d = a.htmlMediaElement, e = document.createElement("div"), f = b.customError;
        e.className = "me-cannotplay";
        try {
            e.style.width = d.width + "px", e.style.height = d.height + "px"
        } catch (a) {
        }
        f || (f = '<a href="' + a.url + '">', "" !== c && (f += '<img src="' + c + '" width="100%" height="100%" alt="" />'), f += "<span>" + mejs.i18n.t("Download File") + "</span></a>"), e.innerHTML = f, d.parentNode.insertBefore(e, d), d.style.display = "none", b.error(d)
    }, createPlugin: function (a, b, c, d, e, f) {
        var g, h, i, j = a.htmlMediaElement, k = 1, l = 1, m = "me_" + a.method + "_" + mejs.meIndex++,
            n = new mejs.PluginMediaElement(m, a.method, a.url), o = document.createElement("div");
        n.tagName = j.tagName;
        for (var p = 0; p < j.attributes.length; p++) {
            var q = j.attributes[p];
            q.specified && n.setAttribute(q.name, q.value)
        }
        for (h = j.parentNode; null !== h && null != h.tagName && "body" !== h.tagName.toLowerCase() && null != h.parentNode && null != h.parentNode.tagName && null != h.parentNode.constructor && "ShadowRoot" === h.parentNode.constructor.name;) {
            if ("p" === h.parentNode.tagName.toLowerCase()) {
                h.parentNode.parentNode.insertBefore(h, h.parentNode);
                break
            }
            h = h.parentNode
        }
        switch (a.isVideo ? (k = b.pluginWidth > 0 ? b.pluginWidth : b.videoWidth > 0 ? b.videoWidth : null !== j.getAttribute("width") ? j.getAttribute("width") : b.defaultVideoWidth, l = b.pluginHeight > 0 ? b.pluginHeight : b.videoHeight > 0 ? b.videoHeight : null !== j.getAttribute("height") ? j.getAttribute("height") : b.defaultVideoHeight, k = mejs.Utility.encodeUrl(k), l = mejs.Utility.encodeUrl(l)) : b.enablePluginDebug && (k = 320, l = 240), n.success = b.success, o.className = "me-plugin", o.id = m + "_container", a.isVideo ? j.parentNode.insertBefore(o, j) : document.body.insertBefore(o, document.body.childNodes[0]), ("flash" === a.method || "silverlight" === a.method) && (i = ["id=" + m, "isvideo=" + (a.isVideo ? "true" : "false"), "autoplay=" + (d ? "true" : "false"), "preload=" + e, "width=" + k, "startvolume=" + b.startVolume, "timerrate=" + b.timerRate, "flashstreamer=" + b.flashStreamer, "height=" + l, "pseudostreamstart=" + b.pseudoStreamingStartQueryParam], null !== a.url && ("flash" == a.method ? i.push("file=" + mejs.Utility.encodeUrl(a.url)) : i.push("file=" + a.url)), b.enablePluginDebug && i.push("debug=true"), b.enablePluginSmoothing && i.push("smoothing=true"), b.enablePseudoStreaming && i.push("pseudostreaming=true"), f && i.push("controls=true"), b.pluginVars && (i = i.concat(b.pluginVars)), window[m + "_init"] = function () {
            switch (n.pluginType) {
                case"flash":
                    n.pluginElement = n.pluginApi = document.getElementById(m);
                    break;
                case"silverlight":
                    n.pluginElement = document.getElementById(n.id), n.pluginApi = n.pluginElement.Content.MediaElementJS
            }
            null != n.pluginApi && n.success && n.success(n, j)
        }, window[m + "_event"] = function (a, b) {
            var c, d, e;
            c = {type: a, target: n};
            for (d in b)n[d] = b[d], c[d] = b[d];
            e = b.bufferedTime || 0, c.target.buffered = c.buffered = {
                start: function (a) {
                    return 0
                }, end: function (a) {
                    return e
                }, length: 1
            }, n.dispatchEvent(c)
        }), a.method) {
            case"silverlight":
                o.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + m + '" name="' + m + '" width="' + k + '" height="' + l + '" class="mejs-shim"><param name="initParams" value="' + i.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + b.pluginPath + b.silverlightName + '" /></object>';
                break;
            case"flash":
                mejs.MediaFeatures.isIE ? (g = document.createElement("div"), o.appendChild(g), g.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + m + '" width="' + k + '" height="' + l + '" class="mejs-shim"><param name="movie" value="' + b.pluginPath + b.flashName + "?" + (new Date).getTime() + '" /><param name="flashvars" value="' + i.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + b.flashScriptAccess + '" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>') : o.innerHTML = '<embed id="' + m + '" name="' + m + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="' + b.flashScriptAccess + '" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + b.pluginPath + b.flashName + '" flashvars="' + i.join("&") + '" width="' + k + '" height="' + l + '" scale="default"class="mejs-shim"></embed>';
                break;
            case"youtube":
                var r;
                if (-1 != a.url.lastIndexOf("youtu.be")) r = a.url.substr(a.url.lastIndexOf("/") + 1), -1 != r.indexOf("?") && (r = r.substr(0, r.indexOf("?"))); else {
                    var s = a.url.match(/[?&]v=([^&#]+)|&|#|$/);
                    s && (r = s[1])
                }
                youtubeSettings = {
                    container: o,
                    containerId: o.id,
                    pluginMediaElement: n,
                    pluginId: m,
                    videoId: r,
                    height: l,
                    width: k,
                    scheme: a.scheme
                }, window.postMessage ? mejs.YouTubeApi.enqueueIframe(youtubeSettings) : mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) && mejs.YouTubeApi.createFlash(youtubeSettings, b);
                break;
            case"vimeo":
                var t = m + "_player";
                if (n.vimeoid = a.url.substr(a.url.lastIndexOf("/") + 1), o.innerHTML = '<iframe src="' + a.scheme + "player.vimeo.com/video/" + n.vimeoid + "?api=1&portrait=0&byline=0&title=0&player_id=" + t + '" width="' + k + '" height="' + l + '" frameborder="0" class="mejs-shim" id="' + t + '" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>', "function" == typeof $f) {
                    var u = $f(o.childNodes[0]), v = -1;
                    u.addEvent("ready", function () {
                        function a(a, b, c, d) {
                            var e = {type: c, target: b};
                            "timeupdate" == c && (b.currentTime = e.currentTime = d.seconds, b.duration = e.duration = d.duration), b.dispatchEvent(e)
                        }

                        u.playVideo = function () {
                            u.api("play")
                        }, u.stopVideo = function () {
                            u.api("unload")
                        }, u.pauseVideo = function () {
                            u.api("pause")
                        }, u.seekTo = function (a) {
                            u.api("seekTo", a)
                        }, u.setVolume = function (a) {
                            u.api("setVolume", a)
                        }, u.setMuted = function (a) {
                            a ? (u.lastVolume = u.api("getVolume"), u.api("setVolume", 0)) : (u.api("setVolume", u.lastVolume), delete u.lastVolume)
                        }, u.getPlayerState = function () {
                            return v
                        }, u.addEvent("play", function () {
                            v = 1, a(u, n, "play"), a(u, n, "playing")
                        }), u.addEvent("pause", function () {
                            v = 2, a(u, n, "pause")
                        }), u.addEvent("finish", function () {
                            v = 0, a(u, n, "ended")
                        }), u.addEvent("playProgress", function (b) {
                            a(u, n, "timeupdate", b)
                        }), u.addEvent("seek", function (b) {
                            v = 3, a(u, n, "seeked", b)
                        }), u.addEvent("loadProgress", function (b) {
                            v = 3, a(u, n, "progress", b)
                        }), n.pluginElement = o, n.pluginApi = u, n.success(n, n.pluginElement)
                    })
                } else console.warn("You need to include froogaloop for vimeo to work")
        }
        return j.style.display = "none", j.removeAttribute("autoplay"), n
    }, updateNative: function (a, b, c, d) {
        var e, f = a.htmlMediaElement;
        for (e in mejs.HtmlMediaElement)f[e] = mejs.HtmlMediaElement[e];
        return b.success(f, f), f
    }
}, mejs.YouTubeApi = {
    isIframeStarted: !1, isIframeLoaded: !1, loadIframeApi: function (a) {
        if (!this.isIframeStarted) {
            var b = document.createElement("script");
            b.src = a.scheme + "www.youtube.com/player_api";
            var c = document.getElementsByTagName("script")[0];
            c.parentNode.insertBefore(b, c), this.isIframeStarted = !0
        }
    }, iframeQueue: [], enqueueIframe: function (a) {
        this.isLoaded ? this.createIframe(a) : (this.loadIframeApi(a), this.iframeQueue.push(a))
    }, createIframe: function (a) {
        var b = a.pluginMediaElement, c = new YT.Player(a.containerId, {
            height: a.height,
            width: a.width,
            videoId: a.videoId,
            playerVars: {controls: 0, wmode: "transparent"},
            events: {
                onReady: function () {
                    c.setVideoSize = function (a, b) {
                        c.setSize(a, b)
                    }, a.pluginMediaElement.pluginApi = c, a.pluginMediaElement.pluginElement = document.getElementById(a.containerId), b.success(b, b.pluginElement), setInterval(function () {
                        mejs.YouTubeApi.createEvent(c, b, "timeupdate")
                    }, 250)
                }, onStateChange: function (a) {
                    mejs.YouTubeApi.handleStateChange(a.data, c, b)
                }
            }
        })
    }, createEvent: function (a, b, c) {
        var d = {type: c, target: b};
        if (a && a.getDuration) {
            b.currentTime = d.currentTime = a.getCurrentTime(), b.duration = d.duration = a.getDuration(), d.paused = b.paused, d.ended = b.ended, d.muted = a.isMuted(), d.volume = a.getVolume() / 100, d.bytesTotal = a.getVideoBytesTotal(), d.bufferedBytes = a.getVideoBytesLoaded();
            var e = d.bufferedBytes / d.bytesTotal * d.duration;
            d.target.buffered = d.buffered = {
                start: function (a) {
                    return 0
                }, end: function (a) {
                    return e
                }, length: 1
            }
        }
        b.dispatchEvent(d)
    }, iFrameReady: function () {
        for (this.isLoaded = !0, this.isIframeLoaded = !0; this.iframeQueue.length > 0;) {
            var a = this.iframeQueue.pop();
            this.createIframe(a)
        }
    }, flashPlayers: {}, createFlash: function (a) {
        this.flashPlayers[a.pluginId] = a;
        var b,
            c = a.scheme + "www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + a.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
        mejs.MediaFeatures.isIE ? (b = document.createElement("div"), a.container.appendChild(b), b.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' + a.scheme + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + a.pluginId + '" width="' + a.width + '" height="' + a.height + '" class="mejs-shim"><param name="movie" value="' + c + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + options.flashScriptAccess + '" /><param name="allowFullScreen" value="true" /></object>') : a.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + a.pluginId + '" data="' + c + '" width="' + a.width + '" height="' + a.height + '" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="' + options.flashScriptAccess + '"><param name="wmode" value="transparent"></object>'
    }, flashReady: function (a) {
        var b = this.flashPlayers[a], c = document.getElementById(a), d = b.pluginMediaElement;
        d.pluginApi = d.pluginElement = c, b.success(d, d.pluginElement), c.cueVideoById(b.videoId);
        var e = b.containerId + "_callback";
        window[e] = function (a) {
            mejs.YouTubeApi.handleStateChange(a, c, d)
        }, c.addEventListener("onStateChange", e), setInterval(function () {
            mejs.YouTubeApi.createEvent(c, d, "timeupdate")
        }, 250), mejs.YouTubeApi.createEvent(c, d, "canplay")
    }, handleStateChange: function (a, b, c) {
        switch (a) {
            case-1:
                c.paused = !0, c.ended = !0, mejs.YouTubeApi.createEvent(b, c, "loadedmetadata");
                break;
            case 0:
                c.paused = !1, c.ended = !0, mejs.YouTubeApi.createEvent(b, c, "ended");
                break;
            case 1:
                c.paused = !1, c.ended = !1, mejs.YouTubeApi.createEvent(b, c, "play"), mejs.YouTubeApi.createEvent(b, c, "playing");
                break;
            case 2:
                c.paused = !0, c.ended = !1, mejs.YouTubeApi.createEvent(b, c, "pause");
                break;
            case 3:
                mejs.YouTubeApi.createEvent(b, c, "progress");
                break;
            case 5:
        }
    }
}, window.onYouTubePlayerAPIReady = function () {
    mejs.YouTubeApi.iFrameReady()
}, window.onYouTubePlayerReady = function (a) {
    mejs.YouTubeApi.flashReady(a)
}, window.mejs = mejs, window.MediaElement = mejs.MediaElement, function (a, b, c) {
    "use strict";
    var d = {
        locale: {language: b.i18n && b.i18n.locale.language || "", strings: b.i18n && b.i18n.locale.strings || {}},
        ietf_lang_regex: /^(x\-)?[a-z]{2,}(\-\w{2,})?(\-\w{2,})?$/,
        methods: {}
    };
    d.getLanguage = function () {
        var a = d.locale.language || window.navigator.userLanguage || window.navigator.language;
        return d.ietf_lang_regex.exec(a) ? a : null
    }, "undefined" != typeof mejsL10n && (d.locale.language = mejsL10n.language), d.methods.checkPlain = function (a) {
        var b, c, d = {"&": "&amp;", '"': "&quot;", "<": "&lt;", ">": "&gt;"};
        a = String(a);
        for (b in d)d.hasOwnProperty(b) && (c = new RegExp(b, "g"), a = a.replace(c, d[b]));
        return a
    }, d.methods.t = function (a, b) {
        return d.locale.strings && d.locale.strings[b.context] && d.locale.strings[b.context][a] && (a = d.locale.strings[b.context][a]), d.methods.checkPlain(a)
    }, d.t = function (a, b) {
        if ("string" == typeof a && a.length > 0) {
            var c = d.getLanguage();
            return b = b || {context: c}, d.methods.t(a, b)
        }
        throw{name: "InvalidArgumentException", message: "First argument is either not a string or empty."}
    }, b.i18n = d
}(document, mejs), function (a, b) {
    "use strict";
    "undefined" != typeof mejsL10n && (a[mejsL10n.language] = mejsL10n.strings)
}(mejs.i18n.locale.strings), "undefined" != typeof jQuery ? mejs.$ = jQuery : "undefined" != typeof Zepto ? (mejs.$ = Zepto, Zepto.fn.outerWidth = function (a) {
    var b = $(this).width();
    return a && (b += parseInt($(this).css("margin-right"), 10), b += parseInt($(this).css("margin-left"), 10)), b
}) : "undefined" != typeof ender && (mejs.$ = ender), function (a) {
    mejs.MepDefaults = {
        poster: "",
        showPosterWhenEnded: !1,
        defaultVideoWidth: 480,
        defaultVideoHeight: 270,
        videoWidth: -1,
        videoHeight: -1,
        defaultAudioWidth: 400,
        defaultAudioHeight: 30,
        defaultSeekBackwardInterval: function (a) {
            return .05 * a.duration
        },
        defaultSeekForwardInterval: function (a) {
            return .05 * a.duration
        },
        setDimensions: !0,
        audioWidth: -1,
        audioHeight: -1,
        startVolume: .8,
        loop: !1,
        autoRewind: !0,
        enableAutosize: !0,
        timeFormat: "",
        alwaysShowHours: !1,
        showTimecodeFrameCount: !1,
        framesPerSecond: 25,
        autosizeProgress: !0,
        alwaysShowControls: !1,
        hideVideoControlsOnLoad: !1,
        clickToPlayPause: !0,
        iPadUseNativeControls: !1,
        iPhoneUseNativeControls: !1,
        AndroidUseNativeControls: !1,
        features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
        isVideo: !0,
        stretching: "auto",
        enableKeyboard: !0,
        pauseOtherPlayers: !0,
        keyActions: [{
            keys: [32, 179], action: function (a, b) {
                b.paused || b.ended ? b.play() : b.pause()
            }
        }, {
            keys: [38], action: function (a, b) {
                a.container.find(".mejs-volume-slider").css("display", "block"), a.isVideo && (a.showControls(), a.startControlsTimer());
                var c = Math.min(b.volume + .1, 1);
                b.setVolume(c)
            }
        }, {
            keys: [40], action: function (a, b) {
                a.container.find(".mejs-volume-slider").css("display", "block"), a.isVideo && (a.showControls(), a.startControlsTimer());
                var c = Math.max(b.volume - .1, 0);
                b.setVolume(c)
            }
        }, {
            keys: [37, 227], action: function (a, b) {
                if (!isNaN(b.duration) && b.duration > 0) {
                    a.isVideo && (a.showControls(), a.startControlsTimer());
                    var c = Math.max(b.currentTime - a.options.defaultSeekBackwardInterval(b), 0);
                    b.setCurrentTime(c)
                }
            }
        }, {
            keys: [39, 228], action: function (a, b) {
                if (!isNaN(b.duration) && b.duration > 0) {
                    a.isVideo && (a.showControls(), a.startControlsTimer());
                    var c = Math.min(b.currentTime + a.options.defaultSeekForwardInterval(b), b.duration);
                    b.setCurrentTime(c)
                }
            }
        }, {
            keys: [70], action: function (a, b) {
                "undefined" != typeof a.enterFullScreen && (a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen())
            }
        }, {
            keys: [77], action: function (a, b) {
                a.container.find(".mejs-volume-slider").css("display", "block"), a.isVideo && (a.showControls(), a.startControlsTimer()), a.media.muted ? a.setMuted(!1) : a.setMuted(!0)
            }
        }]
    }, mejs.mepIndex = 0, mejs.players = {}, mejs.MediaElementPlayer = function (b, c) {
        if (!(this instanceof mejs.MediaElementPlayer))return new mejs.MediaElementPlayer(b, c);
        var d = this;
        return d.$media = d.$node = a(b), d.node = d.media = d.$media[0], d.node ? "undefined" != typeof d.node.player ? d.node.player : ("undefined" == typeof c && (c = d.$node.data("mejsoptions")), d.options = a.extend({}, mejs.MepDefaults, c), d.options.timeFormat || (d.options.timeFormat = "mm:ss", d.options.alwaysShowHours && (d.options.timeFormat = "hh:mm:ss"), d.options.showTimecodeFrameCount && (d.options.timeFormat += ":ff")), mejs.Utility.calculateTimeFormat(0, d.options, d.options.framesPerSecond || 25), d.id = "mep_" + mejs.mepIndex++, mejs.players[d.id] = d, d.init(), d) : void 0
    }, mejs.MediaElementPlayer.prototype = {
        hasFocus: !1, controlsAreVisible: !0, init: function () {
            var b = this, c = mejs.MediaFeatures, d = a.extend(!0, {}, b.options, {
                success: function (a, c) {
                    b.meReady(a, c)
                }, error: function (a) {
                    b.handleError(a)
                }
            }), e = b.media.tagName.toLowerCase();
            if (b.isDynamic = "audio" !== e && "video" !== e, b.isDynamic ? b.isVideo = b.options.isVideo : b.isVideo = "audio" !== e && b.options.isVideo, c.isiPad && b.options.iPadUseNativeControls || c.isiPhone && b.options.iPhoneUseNativeControls) b.$media.attr("controls", "controls"), c.isiPad && null !== b.media.getAttribute("autoplay") && b.play(); else if (c.isAndroid && b.options.AndroidUseNativeControls); else {
                b.$media.removeAttr("controls");
                var f = b.isVideo ? mejs.i18n.t("Video Player") : mejs.i18n.t("Audio Player");
                a('<span class="mejs-offscreen">' + f + "</span>").insertBefore(b.$media), b.container = a('<div id="' + b.id + '" class="mejs-container ' + (mejs.MediaFeatures.svgAsImg ? "svg" : "no-svg") + '" tabindex="0" role="application" aria-label="' + f + '"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(b.$media[0].className).insertBefore(b.$media).focus(function (a) {
                    if (!b.controlsAreVisible && !b.hasFocus && (b.showControls(!0), !b.hasMsNativeFullScreen)) {
                        var c = b.container.find(".mejs-playpause-button > button");
                        c.focus()
                    }
                }), "fill" !== b.options.stretching || b.container.parent("mejs-fill-container").length || (b.outerContainer = b.$media.parent(), b.container.wrap('<div class="mejs-fill-container"/>')), b.container.addClass((c.isAndroid ? "mejs-android " : "") + (c.isiOS ? "mejs-ios " : "") + (c.isiPad ? "mejs-ipad " : "") + (c.isiPhone ? "mejs-iphone " : "") + (b.isVideo ? "mejs-video " : "mejs-audio ")), b.container.find(".mejs-mediaelement").append(b.$media), b.node.player = b, b.controls = b.container.find(".mejs-controls"), b.layers = b.container.find(".mejs-layers");
                var g = b.isVideo ? "video" : "audio", h = g.substring(0, 1).toUpperCase() + g.substring(1);
                b.options[g + "Width"] > 0 || b.options[g + "Width"].toString().indexOf("%") > -1 ? b.width = b.options[g + "Width"] : "" !== b.media.style.width && null !== b.media.style.width ? b.width = b.media.style.width : null !== b.media.getAttribute("width") ? b.width = b.$media.attr("width") : b.width = b.options["default" + h + "Width"], b.options[g + "Height"] > 0 || b.options[g + "Height"].toString().indexOf("%") > -1 ? b.height = b.options[g + "Height"] : "" !== b.media.style.height && null !== b.media.style.height ? b.height = b.media.style.height : null !== b.$media[0].getAttribute("height") ? b.height = b.$media.attr("height") : b.height = b.options["default" + h + "Height"], b.setPlayerSize(b.width, b.height), d.pluginWidth = b.width, d.pluginHeight = b.height
            }
            mejs.MediaElement(b.$media[0], d), "undefined" != typeof b.container && b.controlsAreVisible && b.container.trigger("controlsshown")
        }, showControls: function (a) {
            var b = this;
            a = "undefined" == typeof a || a, b.controlsAreVisible || (a ? (b.controls.removeClass("mejs-offscreen").stop(!0, !0).fadeIn(200, function () {
                b.controlsAreVisible = !0, b.container.trigger("controlsshown")
            }), b.container.find(".mejs-control").removeClass("mejs-offscreen").stop(!0, !0).fadeIn(200, function () {
                b.controlsAreVisible = !0
            })) : (b.controls.removeClass("mejs-offscreen").css("display", "block"), b.container.find(".mejs-control").removeClass("mejs-offscreen").css("display", "block"), b.controlsAreVisible = !0, b.container.trigger("controlsshown")), b.setControlsSize())
        }, hideControls: function (b) {
            var c = this;
            b = "undefined" == typeof b || b, !c.controlsAreVisible || c.options.alwaysShowControls || c.keyboardAction || (b ? (c.controls.stop(!0, !0).fadeOut(200, function () {
                a(this).addClass("mejs-offscreen").css("display", "block"), c.controlsAreVisible = !1, c.container.trigger("controlshidden")
            }), c.container.find(".mejs-control").stop(!0, !0).fadeOut(200, function () {
                a(this).addClass("mejs-offscreen").css("display", "block")
            })) : (c.controls.addClass("mejs-offscreen").css("display", "block"), c.container.find(".mejs-control").addClass("mejs-offscreen").css("display", "block"), c.controlsAreVisible = !1, c.container.trigger("controlshidden")))
        }, controlsTimer: null, startControlsTimer: function (a) {
            var b = this;
            a = "undefined" != typeof a ? a : 1500, b.killControlsTimer("start"), b.controlsTimer = setTimeout(function () {
                b.hideControls(), b.killControlsTimer("hide")
            }, a)
        }, killControlsTimer: function (a) {
            var b = this;
            null !== b.controlsTimer && (clearTimeout(b.controlsTimer), delete b.controlsTimer, b.controlsTimer = null)
        }, controlsEnabled: !0, disableControls: function () {
            var a = this;
            a.killControlsTimer(), a.hideControls(!1), this.controlsEnabled = !1
        }, enableControls: function () {
            var a = this;
            a.showControls(!1), a.controlsEnabled = !0
        }, meReady: function (b, c) {
            var d, e, f = this, g = mejs.MediaFeatures, h = c.getAttribute("autoplay"),
                i = !("undefined" == typeof h || null === h || "false" === h);
            if (!f.created) {
                if (f.created = !0, f.media = b, f.domNode = c, !(g.isAndroid && f.options.AndroidUseNativeControls || g.isiPad && f.options.iPadUseNativeControls || g.isiPhone && f.options.iPhoneUseNativeControls)) {
                    f.buildposter(f, f.controls, f.layers, f.media), f.buildkeyboard(f, f.controls, f.layers, f.media), f.buildoverlays(f, f.controls, f.layers, f.media), f.findTracks();
                    for (d in f.options.features)if (e = f.options.features[d], f["build" + e])try {
                        f["build" + e](f, f.controls, f.layers, f.media)
                    } catch (a) {
                    }
                    f.container.trigger("controlsready"), f.setPlayerSize(f.width, f.height), f.setControlsSize(), f.isVideo && (mejs.MediaFeatures.hasTouch ? f.$media.bind("touchstart", function () {
                        f.controlsAreVisible ? f.hideControls(!1) : f.controlsEnabled && f.showControls(!1)
                    }) : (f.clickToPlayPauseCallback = function () {
                        f.options.clickToPlayPause && (f.media.paused ? f.play() : f.pause())
                    }, f.media.addEventListener("click", f.clickToPlayPauseCallback, !1), f.container.bind("mouseenter", function () {
                        f.controlsEnabled && (f.options.alwaysShowControls || (f.killControlsTimer("enter"), f.showControls(), f.startControlsTimer(2500)))
                    }).bind("mousemove", function () {
                        f.controlsEnabled && (f.controlsAreVisible || f.showControls(), f.options.alwaysShowControls || f.startControlsTimer(2500))
                    }).bind("mouseleave", function () {
                        f.controlsEnabled && (f.media.paused || f.options.alwaysShowControls || f.startControlsTimer(1e3))
                    })), f.options.hideVideoControlsOnLoad && f.hideControls(!1), i && !f.options.alwaysShowControls && f.hideControls(), f.options.enableAutosize && f.media.addEventListener("loadedmetadata", function (a) {
                        f.options.videoHeight <= 0 && null === f.domNode.getAttribute("height") && !isNaN(a.target.videoHeight) && (f.setPlayerSize(a.target.videoWidth, a.target.videoHeight), f.setControlsSize(), f.media.setVideoSize(a.target.videoWidth, a.target.videoHeight))
                    }, !1)), f.media.addEventListener("play", function () {
                        var a;
                        for (a in mejs.players) {
                            var b = mejs.players[a];
                            b.id == f.id || !f.options.pauseOtherPlayers || b.paused || b.ended || b.pause(), b.hasFocus = !1
                        }
                        f.hasFocus = !0
                    }, !1), f.media.addEventListener("ended", function (b) {
                        if (f.options.autoRewind)try {
                            f.media.setCurrentTime(0), window.setTimeout(function () {
                                a(f.container).find(".mejs-overlay-loading").parent().hide()
                            }, 20)
                        } catch (a) {
                        }
                        f.media.pause(), f.setProgressRail && f.setProgressRail(), f.setCurrentRail && f.setCurrentRail(), f.options.loop ? f.play() : !f.options.alwaysShowControls && f.controlsEnabled && f.showControls()
                    }, !1), f.media.addEventListener("loadedmetadata", function (a) {
                        f.updateDuration && f.updateDuration(), f.updateCurrent && f.updateCurrent(), f.isFullScreen || (f.setPlayerSize(f.width, f.height), f.setControlsSize())
                    }, !1);
                    var j = null;
                    f.media.addEventListener("timeupdate", function () {
                        j !== this.duration && (j = this.duration, mejs.Utility.calculateTimeFormat(j, f.options, f.options.framesPerSecond || 25), f.updateDuration && f.updateDuration(), f.updateCurrent && f.updateCurrent(), f.setControlsSize())
                    }, !1), f.container.focusout(function (b) {
                        if (b.relatedTarget) {
                            var c = a(b.relatedTarget);
                            f.keyboardAction && 0 === c.parents(".mejs-container").length && (f.keyboardAction = !1, f.hideControls(!0))
                        }
                    }), setTimeout(function () {
                        f.setPlayerSize(f.width, f.height), f.setControlsSize()
                    }, 50), f.globalBind("resize", function () {
                        f.isFullScreen || mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || f.setPlayerSize(f.width, f.height), f.setControlsSize()
                    }), "youtube" == f.media.pluginType && (g.isiOS || g.isAndroid) && (f.container.find(".mejs-overlay-play").hide(), f.container.find(".mejs-poster").hide())
                }
                i && "native" == b.pluginType && f.play(), f.options.success && ("string" == typeof f.options.success ? window[f.options.success](f.media, f.domNode, f) : f.options.success(f.media, f.domNode, f))
            }
        }, handleError: function (a) {
            var b = this;
            b.controls && b.controls.hide(), b.options.error && b.options.error(a)
        }, setPlayerSize: function (a, b) {
            var c = this;
            if (!c.options.setDimensions)return !1;
            switch ("undefined" != typeof a && (c.width = a), "undefined" != typeof b && (c.height = b), c.options.stretching) {
                case"fill":
                    c.isVideo ? this.setFillMode() : this.setDimensions(c.width, c.height);
                    break;
                case"responsive":
                    this.setResponsiveMode();
                    break;
                case"none":
                    this.setDimensions(c.width, c.height);
                    break;
                default:
                    this.hasFluidMode() === !0 ? this.setResponsiveMode() : this.setDimensions(c.width, c.height)
            }
        }, hasFluidMode: function () {
            var a = this;
            return a.height.toString().indexOf("%") > 0 || "none" !== a.$node.css("max-width") && "t.width" !== a.$node.css("max-width") || a.$node[0].currentStyle && "100%" === a.$node[0].currentStyle.maxWidth
        }, setResponsiveMode: function () {
            var b = this, c = function () {
                    return b.isVideo ? b.media.videoWidth && b.media.videoWidth > 0 ? b.media.videoWidth : null !== b.media.getAttribute("width") ? b.media.getAttribute("width") : b.options.defaultVideoWidth : b.options.defaultAudioWidth
                }(), d = function () {
                    return b.isVideo ? b.media.videoHeight && b.media.videoHeight > 0 ? b.media.videoHeight : null !== b.media.getAttribute("height") ? b.media.getAttribute("height") : b.options.defaultVideoHeight : b.options.defaultAudioHeight
                }(), e = b.container.parent().closest(":visible").width(),
                f = b.container.parent().closest(":visible").height(),
                g = b.isVideo || !b.options.autosizeProgress ? parseInt(e * d / c, 10) : d;
            (isNaN(g) || 0 !== f && g > f && f > d) && (g = f), b.container.parent().length > 0 && "body" === b.container.parent()[0].tagName.toLowerCase() && (e = a(window).width(), g = a(window).height()), g && e && (b.container.width(e).height(g), b.$media.add(b.container.find(".mejs-shim")).width("100%").height("100%"), b.isVideo && b.media.setVideoSize && b.media.setVideoSize(e, g), b.layers.children(".mejs-layer").width("100%").height("100%"))
        }, setFillMode: function () {
            var a = this, b = a.outerContainer;
            b.width() || b.height(a.$media.width()), b.height() || b.height(a.$media.height());
            var c = b.width(), d = b.height();
            a.setDimensions("100%", "100%"), a.container.find(".mejs-poster img").css("display", "block"), targetElement = a.container.find("object, embed, iframe, video");
            var e = a.height, f = a.width, g = c, h = e * c / f, i = f * d / e, j = d, k = !(i > c),
                l = k ? Math.floor(g) : Math.floor(i), m = k ? Math.floor(h) : Math.floor(j);
            k ? (targetElement.height(m).width(c), a.media.setVideoSize && a.media.setVideoSize(c, m)) : (targetElement.height(d).width(l), a.media.setVideoSize && a.media.setVideoSize(l, d)), targetElement.css({
                "margin-left": Math.floor((c - l) / 2),
                "margin-top": 0
            })
        }, setDimensions: function (a, b) {
            var c = this;
            c.container.width(a).height(b), c.layers.children(".mejs-layer").width(a).height(b);
        }, setControlsSize: function () {
            var b = this, c = 0, d = 0, e = b.controls.find(".mejs-time-rail"), f = b.controls.find(".mejs-time-total"),
                g = e.siblings(), h = g.last(), i = null;
            if (b.container.is(":visible") && e.length && e.is(":visible")) {
                b.options && !b.options.autosizeProgress && (d = parseInt(e.css("width"), 10)), 0 !== d && d || (g.each(function () {
                    var b = a(this);
                    "absolute" != b.css("position") && b.is(":visible") && (c += a(this).outerWidth(!0))
                }), d = b.controls.width() - c - (e.outerWidth(!0) - e.width()));
                do e.width(d), f.width(d - (f.outerWidth(!0) - f.width())), "absolute" != h.css("position") && (i = h.length ? h.position() : null, d--); while (null !== i && i.top.toFixed(2) > 0 && d > 0);
                b.container.trigger("controlsresize")
            }
        }, buildposter: function (b, c, d, e) {
            var f = this, g = a('<div class="mejs-poster mejs-layer"></div>').appendTo(d), h = b.$media.attr("poster");
            "" !== b.options.poster && (h = b.options.poster), h ? f.setPoster(h) : g.hide(), e.addEventListener("play", function () {
                g.hide()
            }, !1), b.options.showPosterWhenEnded && b.options.autoRewind && e.addEventListener("ended", function () {
                g.show()
            }, !1)
        }, setPoster: function (b) {
            var c = this, d = c.container.find(".mejs-poster"), e = d.find("img");
            0 === e.length && (e = a('<img width="100%" height="100%" alt="" />').appendTo(d)), e.attr("src", b), d.css({"background-image": "url(" + b + ")"})
        }, buildoverlays: function (b, c, d, e) {
            var f = this;
            if (b.isVideo) {
                var g = a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(d),
                    h = a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(d),
                    i = a('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(d).bind("click", function () {
                        f.options.clickToPlayPause && e.paused && e.play()
                    });
                e.addEventListener("play", function () {
                    i.hide(), g.hide(), c.find(".mejs-time-buffering").hide(), h.hide()
                }, !1), e.addEventListener("playing", function () {
                    i.hide(), g.hide(), c.find(".mejs-time-buffering").hide(), h.hide()
                }, !1), e.addEventListener("seeking", function () {
                    g.show(), c.find(".mejs-time-buffering").show()
                }, !1), e.addEventListener("seeked", function () {
                    g.hide(), c.find(".mejs-time-buffering").hide()
                }, !1), e.addEventListener("pause", function () {
                    mejs.MediaFeatures.isiPhone || i.show()
                }, !1), e.addEventListener("waiting", function () {
                    g.show(), c.find(".mejs-time-buffering").show()
                }, !1), e.addEventListener("loadeddata", function () {
                    g.show(), c.find(".mejs-time-buffering").show(), mejs.MediaFeatures.isAndroid && (e.canplayTimeout = window.setTimeout(function () {
                        if (document.createEvent) {
                            var a = document.createEvent("HTMLEvents");
                            return a.initEvent("canplay", !0, !0), e.dispatchEvent(a)
                        }
                    }, 300))
                }, !1), e.addEventListener("canplay", function () {
                    g.hide(), c.find(".mejs-time-buffering").hide(), clearTimeout(e.canplayTimeout)
                }, !1), e.addEventListener("error", function (a) {
                    f.handleError(a), g.hide(), i.hide(), h.show(), h.find(".mejs-overlay-error").html("Error loading this resource")
                }, !1), e.addEventListener("keydown", function (a) {
                    f.onkeydown(b, e, a)
                }, !1)
            }
        }, buildkeyboard: function (b, c, d, e) {
            var f = this;
            f.container.keydown(function () {
                f.keyboardAction = !0
            }), f.globalBind("keydown", function (c) {
                return b.hasFocus = 0 !== a(c.target).closest(".mejs-container").length && a(c.target).closest(".mejs-container").attr("id") === b.$media.closest(".mejs-container").attr("id"), f.onkeydown(b, e, c)
            }), f.globalBind("click", function (c) {
                b.hasFocus = 0 !== a(c.target).closest(".mejs-container").length
            })
        }, onkeydown: function (a, b, c) {
            if (a.hasFocus && a.options.enableKeyboard)for (var d = 0, e = a.options.keyActions.length; e > d; d++)for (var f = a.options.keyActions[d], g = 0, h = f.keys.length; h > g; g++)if (c.keyCode == f.keys[g])return "function" == typeof c.preventDefault && c.preventDefault(), f.action(a, b, c.keyCode, c), !1;
            return !0
        }, findTracks: function () {
            var b = this, c = b.$media.find("track");
            b.tracks = [], c.each(function (c, d) {
                d = a(d), b.tracks.push({
                    srclang: d.attr("srclang") ? d.attr("srclang").toLowerCase() : "",
                    src: d.attr("src"),
                    kind: d.attr("kind"),
                    label: d.attr("label") || "",
                    entries: [],
                    isLoaded: !1
                })
            })
        }, changeSkin: function (a) {
            this.container[0].className = "mejs-container " + a, this.setPlayerSize(this.width, this.height), this.setControlsSize()
        }, play: function () {
            this.load(), this.media.play()
        }, pause: function () {
            try {
                this.media.pause()
            } catch (a) {
            }
        }, load: function () {
            this.isLoaded || this.media.load(), this.isLoaded = !0
        }, setMuted: function (a) {
            this.media.setMuted(a)
        }, setCurrentTime: function (a) {
            this.media.setCurrentTime(a)
        }, getCurrentTime: function () {
            return this.media.currentTime
        }, setVolume: function (a) {
            this.media.setVolume(a)
        }, getVolume: function () {
            return this.media.volume
        }, setSrc: function (a) {
            this.media.setSrc(a)
        }, remove: function () {
            var a, b, c = this;
            c.container.prev(".mejs-offscreen").remove();
            for (a in c.options.features)if (b = c.options.features[a], c["clean" + b])try {
                c["clean" + b](c)
            } catch (a) {
            }
            c.isDynamic ? c.$node.insertBefore(c.container) : (c.$media.prop("controls", !0), c.$node.clone().insertBefore(c.container).show(), c.$node.remove()), "native" !== c.media.pluginType && c.media.remove(), delete mejs.players[c.id], "object" == typeof c.container && c.container.remove(), c.globalUnbind(), delete c.node.player
        }, rebuildtracks: function () {
            var a = this;
            a.findTracks(), a.buildtracks(a, a.controls, a.layers, a.media)
        }, resetSize: function () {
            var a = this;
            setTimeout(function () {
                a.setPlayerSize(a.width, a.height), a.setControlsSize()
            }, 50)
        }
    }, function () {
        function b(b, d) {
            var e = {d: [], w: []};
            return a.each((b || "").split(" "), function (a, b) {
                var f = b + "." + d;
                0 === f.indexOf(".") ? (e.d.push(f), e.w.push(f)) : e[c.test(b) ? "w" : "d"].push(f)
            }), e.d = e.d.join(" "), e.w = e.w.join(" "), e
        }

        var c = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
        mejs.MediaElementPlayer.prototype.globalBind = function (c, d, e) {
            var f = this, g = f.node ? f.node.ownerDocument : document;
            c = b(c, f.id), c.d && a(g).bind(c.d, d, e), c.w && a(window).bind(c.w, d, e)
        }, mejs.MediaElementPlayer.prototype.globalUnbind = function (c, d) {
            var e = this, f = e.node ? e.node.ownerDocument : document;
            c = b(c, e.id), c.d && a(f).unbind(c.d, d), c.w && a(window).unbind(c.w, d)
        }
    }(), "undefined" != typeof a && (a.fn.mediaelementplayer = function (b) {
        return b === !1 ? this.each(function () {
            var b = a(this).data("mediaelementplayer");
            b && b.remove(), a(this).removeData("mediaelementplayer")
        }) : this.each(function () {
            a(this).data("mediaelementplayer", new mejs.MediaElementPlayer(this, b))
        }), this
    }, a(document).ready(function () {
        a(".mejs-player").mediaelementplayer()
    })), window.MediaElementPlayer = mejs.MediaElementPlayer
}(mejs.$), function (a) {
    a.extend(mejs.MepDefaults, {
        playText: mejs.i18n.t("Play"),
        pauseText: mejs.i18n.t("Pause")
    }), a.extend(MediaElementPlayer.prototype, {
        buildplaypause: function (b, c, d, e) {
            function f(a) {
                "play" === a ? (i.removeClass("mejs-play").addClass("mejs-pause"), j.attr({
                    title: h.pauseText,
                    "aria-label": h.pauseText
                })) : (i.removeClass("mejs-pause").addClass("mejs-play"), j.attr({
                    title: h.playText,
                    "aria-label": h.playText
                }))
            }

            var g = this, h = g.options,
                i = a('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + g.id + '" title="' + h.playText + '" aria-label="' + h.playText + '"></button></div>').appendTo(c).click(function (a) {
                    return a.preventDefault(), e.paused ? e.play() : e.pause(), !1
                }), j = i.find("button");
            f("pse"), e.addEventListener("play", function () {
                f("play")
            }, !1), e.addEventListener("playing", function () {
                f("play")
            }, !1), e.addEventListener("pause", function () {
                f("pse")
            }, !1), e.addEventListener("paused", function () {
                f("pse")
            }, !1)
        }
    })
}(mejs.$), function (a) {
    a.extend(mejs.MepDefaults, {stopText: "Stop"}), a.extend(MediaElementPlayer.prototype, {
        buildstop: function (b, c, d, e) {
            var f = this;
            a('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + f.id + '" title="' + f.options.stopText + '" aria-label="' + f.options.stopText + '"></button></div>').appendTo(c).click(function () {
                e.paused || e.pause(), e.currentTime > 0 && (e.setCurrentTime(0), e.pause(), c.find(".mejs-time-current").width("0px"), c.find(".mejs-time-handle").css("left", "0px"), c.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0, b.options)), c.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0, b.options)), d.find(".mejs-poster").show())
            })
        }
    })
}(mejs.$), function (a) {
    a.extend(mejs.MepDefaults, {progessHelpText: mejs.i18n.t("Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.")}), a.extend(MediaElementPlayer.prototype, {
        buildprogress: function (b, c, d, e) {
            a('<div class="mejs-time-rail"><span  class="mejs-time-total mejs-time-slider"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(c), c.find(".mejs-time-buffering").hide();
            var f = this, g = c.find(".mejs-time-total"), h = c.find(".mejs-time-loaded"),
                i = c.find(".mejs-time-current"), j = c.find(".mejs-time-handle"), k = c.find(".mejs-time-float"),
                l = c.find(".mejs-time-float-current"), m = c.find(".mejs-time-slider"), n = function (a) {
                    var c, d = g.offset(), f = g.width(), h = 0, i = 0, j = 0;
                    c = a.originalEvent && a.originalEvent.changedTouches ? a.originalEvent.changedTouches[0].pageX : a.changedTouches ? a.changedTouches[0].pageX : a.pageX, e.duration && (c < d.left ? c = d.left : c > f + d.left && (c = f + d.left), j = c - d.left, h = j / f, i = .02 >= h ? 0 : h * e.duration, o && i !== e.currentTime && e.setCurrentTime(i), mejs.MediaFeatures.hasTouch || (k.css("left", j), l.html(mejs.Utility.secondsToTimeCode(i, b.options)), k.show()))
                }, o = !1, p = !1, q = 0, r = !1, s = b.options.autoRewind, t = function (a) {
                    var c = e.currentTime, d = mejs.i18n.t("Time Slider"), f = mejs.Utility.secondsToTimeCode(c, b.options),
                        g = e.duration;
                    m.attr({
                        "aria-label": d,
                        "aria-valuemin": 0,
                        "aria-valuemax": g,
                        "aria-valuenow": c,
                        "aria-valuetext": f,
                        role: "slider",
                        tabindex: 0
                    })
                }, u = function () {
                    var a = new Date;
                    a - q >= 1e3 && e.play()
                };
            m.bind("focus", function (a) {
                b.options.autoRewind = !1
            }), m.bind("blur", function (a) {
                b.options.autoRewind = s
            }), m.bind("keydown", function (a) {
                new Date - q >= 1e3 && (r = e.paused);
                var c = a.keyCode, d = e.duration, f = e.currentTime, g = b.options.defaultSeekForwardInterval(d),
                    h = b.options.defaultSeekBackwardInterval(d);
                switch (c) {
                    case 37:
                    case 40:
                        f -= h;
                        break;
                    case 39:
                    case 38:
                        f += g;
                        break;
                    case 36:
                        f = 0;
                        break;
                    case 35:
                        f = d;
                        break;
                    case 32:
                    case 13:
                        return void(e.paused ? e.play() : e.pause());
                    default:
                        return
                }
                return f = 0 > f ? 0 : f >= d ? d : Math.floor(f), q = new Date, r || e.pause(), f < e.duration && !r && setTimeout(u, 1100), e.setCurrentTime(f), a.preventDefault(), a.stopPropagation(), !1
            }), g.bind("mousedown touchstart", function (a) {
                (1 === a.which || 0 === a.which) && (o = !0, n(a), f.globalBind("mousemove.dur touchmove.dur", function (a) {
                    n(a)
                }), f.globalBind("mouseup.dur touchend.dur", function (a) {
                    o = !1, k.hide(), f.globalUnbind(".dur")
                }))
            }).bind("mouseenter", function (a) {
                p = !0, f.globalBind("mousemove.dur", function (a) {
                    n(a)
                }), mejs.MediaFeatures.hasTouch || k.show()
            }).bind("mouseleave", function (a) {
                p = !1, o || (f.globalUnbind(".dur"), k.hide())
            }), e.addEventListener("progress", function (a) {
                b.setProgressRail(a), b.setCurrentRail(a)
            }, !1), e.addEventListener("timeupdate", function (a) {
                b.setProgressRail(a), b.setCurrentRail(a), t(a)
            }, !1), f.container.on("controlsresize", function () {
                b.setProgressRail(), b.setCurrentRail()
            }), f.loaded = h, f.total = g, f.current = i, f.handle = j
        }, setProgressRail: function (a) {
            var b = this, c = void 0 !== a ? a.target : b.media, d = null;
            c && c.buffered && c.buffered.length > 0 && c.buffered.end && c.duration ? d = c.buffered.end(c.buffered.length - 1) / c.duration : c && void 0 !== c.bytesTotal && c.bytesTotal > 0 && void 0 !== c.bufferedBytes ? d = c.bufferedBytes / c.bytesTotal : a && a.lengthComputable && 0 !== a.total && (d = a.loaded / a.total), null !== d && (d = Math.min(1, Math.max(0, d)), b.loaded && b.total && b.loaded.width(b.total.width() * d))
        }, setCurrentRail: function () {
            var a = this;
            if (void 0 !== a.media.currentTime && a.media.duration && a.total && a.handle) {
                var b = Math.round(a.total.width() * a.media.currentTime / a.media.duration),
                    c = b - Math.round(a.handle.outerWidth(!0) / 2);
                a.current.width(b), a.handle.css("left", c)
            }
        }
    })
}(mejs.$), function (a) {
    a.extend(mejs.MepDefaults, {
        duration: -1,
        timeAndDurationSeparator: "<span> | </span>"
    }), a.extend(MediaElementPlayer.prototype, {
        buildcurrent: function (b, c, d, e) {
            var f = this;
            a('<div class="mejs-time" role="timer" aria-live="off"><span class="mejs-currenttime">' + mejs.Utility.secondsToTimeCode(0, b.options) + "</span></div>").appendTo(c), f.currenttime = f.controls.find(".mejs-currenttime"), e.addEventListener("timeupdate", function () {
                b.updateCurrent()
            }, !1)
        }, buildduration: function (b, c, d, e) {
            var f = this;
            c.children().last().find(".mejs-currenttime").length > 0 ? a(f.options.timeAndDurationSeparator + '<span class="mejs-duration">' + mejs.Utility.secondsToTimeCode(f.options.duration, f.options) + "</span>").appendTo(c.find(".mejs-time")) : (c.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container"), a('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + mejs.Utility.secondsToTimeCode(f.options.duration, f.options) + "</span></div>").appendTo(c)), f.durationD = f.controls.find(".mejs-duration"), e.addEventListener("timeupdate", function () {
                b.updateDuration()
            }, !1)
        }, updateCurrent: function () {
            var a = this, b = a.media.currentTime;
            isNaN(b) && (b = 0), a.currenttime && a.currenttime.html(mejs.Utility.secondsToTimeCode(b, a.options))
        }, updateDuration: function () {
            var a = this, b = a.media.duration;
            a.options.duration > 0 && (b = a.options.duration), isNaN(b) && (b = 0), a.container.toggleClass("mejs-long-video", b > 3600), a.durationD && b > 0 && a.durationD.html(mejs.Utility.secondsToTimeCode(b, a.options))
        }
    })
}(mejs.$), function (a) {
    a.extend(mejs.MepDefaults, {
        muteText: mejs.i18n.t("Mute Toggle"),
        allyVolumeControlText: mejs.i18n.t("Use Up/Down Arrow keys to increase or decrease volume."),
        hideVolumeOnTouchDevices: !0,
        audioVolume: "horizontal",
        videoVolume: "vertical"
    }), a.extend(MediaElementPlayer.prototype, {
        buildvolume: function (b, c, d, e) {
            if (!mejs.MediaFeatures.isAndroid && !mejs.MediaFeatures.isiOS || !this.options.hideVolumeOnTouchDevices) {
                var f = this, g = f.isVideo ? f.options.videoVolume : f.options.audioVolume,
                    h = "horizontal" == g ? a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + f.id + '" title="' + f.options.muteText + '" aria-label="' + f.options.muteText + '"></button></div><a href="javascript:void(0);" class="mejs-horizontal-volume-slider"><span class="mejs-offscreen">' + f.options.allyVolumeControlText + '</span><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></a>').appendTo(c) : a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + f.id + '" title="' + f.options.muteText + '" aria-label="' + f.options.muteText + '"></button><a href="javascript:void(0);" class="mejs-volume-slider"><span class="mejs-offscreen">' + f.options.allyVolumeControlText + '</span><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></a></div>').appendTo(c),
                    i = f.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),
                    j = f.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),
                    k = f.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),
                    l = f.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"), m = function (a, b) {
                        if (!i.is(":visible") && "undefined" == typeof b)return i.show(), m(a, !0), void i.hide();
                        a = Math.max(0, a), a = Math.min(a, 1), 0 === a ? (h.removeClass("mejs-mute").addClass("mejs-unmute"), h.children("button").attr("title", mejs.i18n.t("Unmute")).attr("aria-label", mejs.i18n.t("Unmute"))) : (h.removeClass("mejs-unmute").addClass("mejs-mute"), h.children("button").attr("title", mejs.i18n.t("Mute")).attr("aria-label", mejs.i18n.t("Mute")));
                        var c = j.position();
                        if ("vertical" == g) {
                            var d = j.height(), e = d - d * a;
                            l.css("top", Math.round(c.top + e - l.height() / 2)), k.height(d - e), k.css("top", c.top + e)
                        } else {
                            var f = j.width(), n = f * a;
                            l.css("left", Math.round(c.left + n - l.width() / 2)), k.width(Math.round(n))
                        }
                    }, n = function (a) {
                        var b = null, c = j.offset();
                        if ("vertical" === g) {
                            var d = j.height(), f = a.pageY - c.top;
                            if (b = (d - f) / d, 0 === c.top || 0 === c.left)return
                        } else {
                            var h = j.width(), i = a.pageX - c.left;
                            b = i / h
                        }
                        b = Math.max(0, b), b = Math.min(b, 1), m(b), 0 === b ? e.setMuted(!0) : e.setMuted(!1), e.setVolume(b)
                    }, o = !1, p = !1;
                h.hover(function () {
                    i.show(), p = !0
                }, function () {
                    p = !1, o || "vertical" != g || i.hide()
                });
                var q = function (a) {
                    var b = Math.floor(100 * e.volume);
                    i.attr({
                        "aria-label": mejs.i18n.t("Volume Slider"),
                        "aria-valuemin": 0,
                        "aria-valuemax": 100,
                        "aria-valuenow": b,
                        "aria-valuetext": b + "%",
                        role: "slider",
                        tabindex: 0
                    })
                };
                i.bind("mouseover", function () {
                    p = !0
                }).bind("mousedown", function (a) {
                    return n(a), f.globalBind("mousemove.vol", function (a) {
                        n(a)
                    }), f.globalBind("mouseup.vol", function () {
                        o = !1, f.globalUnbind(".vol"), p || "vertical" != g || i.hide()
                    }), o = !0, !1
                }).bind("keydown", function (a) {
                    var b = a.keyCode, c = e.volume;
                    switch (b) {
                        case 38:
                            c = Math.min(c + .1, 1);
                            break;
                        case 40:
                            c = Math.max(0, c - .1);
                            break;
                        default:
                            return !0
                    }
                    return o = !1, m(c), e.setVolume(c), !1
                }), h.find("button").click(function () {
                    e.setMuted(!e.muted)
                }), h.find("button").bind("focus", function () {
                    i.show()
                }), e.addEventListener("volumechange", function (a) {
                    o || (e.muted ? (m(0), h.removeClass("mejs-mute").addClass("mejs-unmute")) : (m(e.volume), h.removeClass("mejs-unmute").addClass("mejs-mute"))), q(a)
                }, !1), 0 === b.options.startVolume && e.setMuted(!0), "native" === e.pluginType && e.setVolume(b.options.startVolume), f.container.on("controlsresize", function () {
                    m(e.volume)
                })
            }
        }
    })
}(mejs.$), function (a) {
    a.extend(mejs.MepDefaults, {
        usePluginFullScreen: !0, newWindowCallback: function () {
            return ""
        }, fullscreenText: mejs.i18n.t("Fullscreen")
    }), a.extend(MediaElementPlayer.prototype, {
        isFullScreen: !1,
        isNativeFullScreen: !1,
        isInIframe: !1,
        fullscreenMode: "",
        buildfullscreen: function (b, c, d, e) {
            if (b.isVideo) {
                b.isInIframe = window.location != window.parent.location, e.addEventListener("play", function () {
                    b.detectFullscreenMode()
                });
                var f = this, g = null,
                    h = a('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + f.id + '" title="' + f.options.fullscreenText + '" aria-label="' + f.options.fullscreenText + '"></button></div>').appendTo(c).on("click", function () {
                        var a = mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || b.isFullScreen;
                        a ? b.exitFullScreen() : b.enterFullScreen()
                    }).on("mouseover", function () {
                        if ("plugin-hover" == f.fullscreenMode) {
                            null !== g && (clearTimeout(g), delete g);
                            var a = h.offset(), c = b.container.offset();
                            e.positionFullscreenButton(a.left - c.left, a.top - c.top, !0)
                        }
                    }).on("mouseout", function () {
                        "plugin-hover" == f.fullscreenMode && (null !== g && (clearTimeout(g), delete g), g = setTimeout(function () {
                            e.hideFullscreenButton()
                        }, 1500))
                    });
                if (b.fullscreenBtn = h, f.globalBind("keydown", function (a) {
                        27 == a.keyCode && (mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || f.isFullScreen) && b.exitFullScreen()
                    }), f.normalHeight = 0, f.normalWidth = 0, mejs.MediaFeatures.hasTrueNativeFullScreen) {
                    var i = function (a) {
                        b.isFullScreen && (mejs.MediaFeatures.isFullScreen() ? (b.isNativeFullScreen = !0, b.setControlsSize()) : (b.isNativeFullScreen = !1, b.exitFullScreen()))
                    };
                    b.globalBind(mejs.MediaFeatures.fullScreenEventName, i)
                }
            }
        },
        detectFullscreenMode: function () {
            var a = this, b = "", c = mejs.MediaFeatures;
            return c.hasTrueNativeFullScreen && "native" === a.media.pluginType ? b = "native-native" : c.hasTrueNativeFullScreen && "native" !== a.media.pluginType && !c.hasFirefoxPluginMovingProblem ? b = "plugin-native" : a.usePluginFullScreen ? mejs.MediaFeatures.supportsPointerEvents ? (b = "plugin-click", a.createPluginClickThrough()) : b = "plugin-hover" : b = "fullwindow", a.fullscreenMode = b, b
        },
        isPluginClickThroughCreated: !1,
        createPluginClickThrough: function () {
            var b = this;
            if (!b.isPluginClickThroughCreated) {
                var c, d, e = !1, f = function () {
                    if (e) {
                        for (var a in g)g[a].hide();
                        b.fullscreenBtn.css("pointer-events", ""), b.controls.css("pointer-events", ""), b.media.removeEventListener("click", b.clickToPlayPauseCallback), e = !1
                    }
                }, g = {}, h = ["top", "left", "right", "bottom"], i = function () {
                    var a = fullscreenBtn.offset().left - b.container.offset().left,
                        d = fullscreenBtn.offset().top - b.container.offset().top, e = fullscreenBtn.outerWidth(!0),
                        f = fullscreenBtn.outerHeight(!0), h = b.container.width(), i = b.container.height();
                    for (c in g)g[c].css({position: "absolute", top: 0, left: 0});
                    g.top.width(h).height(d), g.left.width(a).height(f).css({top: d}), g.right.width(h - a - e).height(f).css({
                        top: d,
                        left: a + e
                    }), g.bottom.width(h).height(i - f - d).css({top: d + f})
                };
                for (b.globalBind("resize", function () {
                    i()
                }), c = 0, d = h.length; d > c; c++)g[h[c]] = a('<div class="mejs-fullscreen-hover" />').appendTo(b.container).mouseover(f).hide();
                fullscreenBtn.on("mouseover", function () {
                    if (!b.isFullScreen) {
                        var a = fullscreenBtn.offset(), d = player.container.offset();
                        media.positionFullscreenButton(a.left - d.left, a.top - d.top, !1), b.fullscreenBtn.css("pointer-events", "none"), b.controls.css("pointer-events", "none"), b.media.addEventListener("click", b.clickToPlayPauseCallback);
                        for (c in g)g[c].show();
                        i(), e = !0
                    }
                }), media.addEventListener("fullscreenchange", function (a) {
                    b.isFullScreen = !b.isFullScreen, b.isFullScreen ? b.media.removeEventListener("click", b.clickToPlayPauseCallback) : b.media.addEventListener("click", b.clickToPlayPauseCallback), f()
                }), b.globalBind("mousemove", function (a) {
                    if (e) {
                        var c = fullscreenBtn.offset();
                        (a.pageY < c.top || a.pageY > c.top + fullscreenBtn.outerHeight(!0) || a.pageX < c.left || a.pageX > c.left + fullscreenBtn.outerWidth(!0)) && (fullscreenBtn.css("pointer-events", ""), b.controls.css("pointer-events", ""), e = !1)
                    }
                }), b.isPluginClickThroughCreated = !0
            }
        },
        cleanfullscreen: function (a) {
            a.exitFullScreen()
        },
        containerSizeTimeout: null,
        enterFullScreen: function () {
            var b = this;
            return mejs.MediaFeatures.hasiOSFullScreen ? void b.media.webkitEnterFullscreen() : (a(document.documentElement).addClass("mejs-fullscreen"), b.normalHeight = b.container.height(), b.normalWidth = b.container.width(), "native-native" === b.fullscreenMode || "plugin-native" === b.fullscreenMode ? (mejs.MediaFeatures.requestFullScreen(b.container[0]), b.isInIframe && setTimeout(function c() {
                if (b.isNativeFullScreen) {
                    var d = .002, e = a(window).width(), f = screen.width, g = Math.abs(f - e), h = f * d;
                    g > h ? b.exitFullScreen() : setTimeout(c, 500)
                }
            }, 1e3)) : "fullwindow" == b.fullscreeMode, b.container.addClass("mejs-container-fullscreen").width("100%").height("100%"), b.containerSizeTimeout = setTimeout(function () {
                b.container.css({width: "100%", height: "100%"}), b.setControlsSize()
            }, 500), "native" === b.media.pluginType ? b.$media.width("100%").height("100%") : (b.container.find(".mejs-shim").width("100%").height("100%"), setTimeout(function () {
                var c = a(window), d = c.width(), e = c.height();
                b.media.setVideoSize(d, e)
            }, 500)), b.layers.children("div").width("100%").height("100%"), b.fullscreenBtn && b.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen"), b.setControlsSize(), b.isFullScreen = !0, b.container.find(".mejs-captions-text").css("font-size", screen.width / b.width * 1 * 100 + "%"), b.container.find(".mejs-captions-position").css("bottom", "45px"), void b.container.trigger("enteredfullscreen"))
        },
        exitFullScreen: function () {
            var b = this;
            clearTimeout(b.containerSizeTimeout), mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || b.isFullScreen) && mejs.MediaFeatures.cancelFullScreen(), a(document.documentElement).removeClass("mejs-fullscreen"), b.container.removeClass("mejs-container-fullscreen").width(b.normalWidth).height(b.normalHeight), "native" === b.media.pluginType ? b.$media.width(b.normalWidth).height(b.normalHeight) : (b.container.find(".mejs-shim").width(b.normalWidth).height(b.normalHeight), b.media.setVideoSize(b.normalWidth, b.normalHeight)), b.layers.children("div").width(b.normalWidth).height(b.normalHeight), b.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen"), b.setControlsSize(), b.isFullScreen = !1, b.container.find(".mejs-captions-text").css("font-size", ""), b.container.find(".mejs-captions-position").css("bottom", ""), b.container.trigger("exitedfullscreen")
        }
    })
}(mejs.$), function (a) {
    a.extend(mejs.MepDefaults, {
        speeds: ["2.00", "1.50", "1.25", "1.00", "0.75"],
        defaultSpeed: "1.00",
        speedChar: "x"
    }), a.extend(MediaElementPlayer.prototype, {
        buildspeed: function (b, c, d, e) {
            var f = this;
            if ("native" == f.media.pluginType) {
                for (var g = null, h = null, i = null, j = null, k = [], l = !1, m = 0, n = f.options.speeds.length; n > m; m++) {
                    var o = f.options.speeds[m];
                    "string" == typeof o ? (k.push({
                        name: o + f.options.speedChar,
                        value: o
                    }), o === f.options.defaultSpeed && (l = !0)) : (k.push(o), o.value === f.options.defaultSpeed && (l = !0))
                }
                l || k.push({
                    name: f.options.defaultSpeed + f.options.speedChar,
                    value: f.options.defaultSpeed
                }), k.sort(function (a, b) {
                    return parseFloat(b.value) - parseFloat(a.value)
                });
                var p = function (a) {
                        for (m = 0, n = k.length; n > m; m++)if (k[m].value === a)return k[m].name
                    },
                    q = '<div class="mejs-button mejs-speed-button"><button type="button">' + p(f.options.defaultSpeed) + '</button><div class="mejs-speed-selector"><ul>';
                for (m = 0, il = k.length; m < il; m++)j = f.id + "-speed-" + k[m].value, q += '<li><input type="radio" name="speed" value="' + k[m].value + '" id="' + j + '" ' + (k[m].value === f.options.defaultSpeed ? " checked" : "") + ' /><label for="' + j + '" ' + (k[m].value === f.options.defaultSpeed ? ' class="mejs-speed-selected"' : "") + ">" + k[m].name + "</label></li>";
                q += "</ul></div></div>", g = a(q).appendTo(c), h = g.find(".mejs-speed-selector"), i = f.options.defaultSpeed, e.addEventListener("loadedmetadata", function (a) {
                    i && (e.playbackRate = parseFloat(i))
                }, !0), h.on("click", 'input[type="radio"]', function () {
                    var b = a(this).attr("value");
                    i = b, e.playbackRate = parseFloat(b), g.find("button").html(p(b)), g.find(".mejs-speed-selected").removeClass("mejs-speed-selected"), g.find('input[type="radio"]:checked').next().addClass("mejs-speed-selected")
                }), g.one("mouseenter focusin", function () {
                    h.height(g.find(".mejs-speed-selector ul").outerHeight(!0) + g.find(".mejs-speed-translations").outerHeight(!0)).css("top", -1 * h.height() + "px")
                })
            }
        }
    })
}(mejs.$), function (a) {
    a.extend(mejs.MepDefaults, {
        startLanguage: "",
        tracksText: mejs.i18n.t("Captions/Subtitles"),
        tracksAriaLive: !1,
        hideCaptionsButtonWhenEmpty: !0,
        toggleCaptionsButtonWhenOnlyOne: !1,
        slidesSelector: ""
    }), a.extend(MediaElementPlayer.prototype, {
        hasChapters: !1, cleartracks: function (a, b, c, d) {
            a && (a.captions && a.captions.remove(), a.chapters && a.chapters.remove(), a.captionsText && a.captionsText.remove(), a.captionsButton && a.captionsButton.remove())
        }, buildtracks: function (b, c, d, e) {
            if (0 !== b.tracks.length) {
                var f, g = this,
                    h = g.options.tracksAriaLive ? 'role="log" aria-live="assertive" aria-atomic="false"' : "";
                if (g.domNode.textTracks)for (f = g.domNode.textTracks.length - 1; f >= 0; f--)g.domNode.textTracks[f].mode = "hidden";
                g.cleartracks(b, c, d, e), b.chapters = a('<div class="mejs-chapters mejs-layer"></div>').prependTo(d).hide(), b.captions = a('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover" ' + h + '><span class="mejs-captions-text"></span></div></div>').prependTo(d).hide(), b.captionsText = b.captions.find(".mejs-captions-text"), b.captionsButton = a('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + g.id + '" title="' + g.options.tracksText + '" aria-label="' + g.options.tracksText + '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' + b.id + '_captions" id="' + b.id + '_captions_none" value="none" checked="checked" /><label for="' + b.id + '_captions_none">' + mejs.i18n.t("None") + "</label></li></ul></div></div>").appendTo(c);
                var i = 0;
                for (f = 0; f < b.tracks.length; f++)"subtitles" == b.tracks[f].kind && i++;
                for (g.options.toggleCaptionsButtonWhenOnlyOne && 1 == i ? b.captionsButton.on("click", function () {
                    null === b.selectedTrack ? lang = b.tracks[0].srclang : lang = "none", b.setTrack(lang)
                }) : (b.captionsButton.on("mouseenter focusin", function () {
                    a(this).find(".mejs-captions-selector").removeClass("mejs-offscreen")
                }).on("click", "input[type=radio]", function () {
                    lang = this.value, b.setTrack(lang)
                }), b.captionsButton.on("mouseleave focusout", function () {
                    a(this).find(".mejs-captions-selector").addClass("mejs-offscreen")
                })), b.options.alwaysShowControls ? b.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") : b.container.bind("controlsshown", function () {
                    b.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
                }).bind("controlshidden", function () {
                    e.paused || b.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")
                }), b.trackToLoad = -1, b.selectedTrack = null, b.isLoadingTrack = !1, f = 0; f < b.tracks.length; f++)"subtitles" == b.tracks[f].kind && b.addTrackButton(b.tracks[f].srclang, b.tracks[f].label);
                b.loadNextTrack(), e.addEventListener("timeupdate", function (a) {
                    b.displayCaptions()
                }, !1), "" !== b.options.slidesSelector && (b.slidesContainer = a(b.options.slidesSelector), e.addEventListener("timeupdate", function (a) {
                    b.displaySlides()
                }, !1)), e.addEventListener("loadedmetadata", function (a) {
                    b.displayChapters()
                }, !1), b.container.hover(function () {
                    b.hasChapters && (b.chapters.removeClass("mejs-offscreen"), b.chapters.fadeIn(200).height(b.chapters.find(".mejs-chapter").outerHeight()))
                }, function () {
                    b.hasChapters && !e.paused && b.chapters.fadeOut(200, function () {
                        a(this).addClass("mejs-offscreen"), a(this).css("display", "block")
                    })
                }), g.container.on("controlsresize", function () {
                    g.adjustLanguageBox()
                }), null !== b.node.getAttribute("autoplay") && b.chapters.addClass("mejs-offscreen")
            }
        }, setTrack: function (a) {
            var b, c = this;
            if ("none" == a) c.selectedTrack = null, c.captionsButton.removeClass("mejs-captions-enabled"); else for (b = 0; b < c.tracks.length; b++)if (c.tracks[b].srclang == a) {
                null === c.selectedTrack && c.captionsButton.addClass("mejs-captions-enabled"), c.selectedTrack = c.tracks[b], c.captions.attr("lang", c.selectedTrack.srclang), c.displayCaptions();
                break
            }
        }, loadNextTrack: function () {
            var a = this;
            a.trackToLoad++, a.trackToLoad < a.tracks.length ? (a.isLoadingTrack = !0, a.loadTrack(a.trackToLoad)) : (a.isLoadingTrack = !1, a.checkForTracks())
        }, loadTrack: function (b) {
            var c = this, d = c.tracks[b], e = function () {
                d.isLoaded = !0, c.enableTrackButton(d.srclang, d.label), c.loadNextTrack()
            };
            a.ajax({
                url: d.src, dataType: "text", success: function (a) {
                    "string" == typeof a && /<tt\s+xml/gi.exec(a) ? d.entries = mejs.TrackFormatParser.dfxp.parse(a) : d.entries = mejs.TrackFormatParser.webvtt.parse(a), e(), "chapters" == d.kind && c.media.addEventListener("play", function (a) {
                        c.media.duration > 0 && c.displayChapters(d)
                    }, !1), "slides" == d.kind && c.setupSlides(d)
                }, error: function () {
                    c.removeTrackButton(d.srclang), c.loadNextTrack()
                }
            })
        }, enableTrackButton: function (b, c) {
            var d = this;
            "" === c && (c = mejs.language.codes[b] || b), d.captionsButton.find("input[value=" + b + "]").prop("disabled", !1).siblings("label").html(c), d.options.startLanguage == b && a("#" + d.id + "_captions_" + b).prop("checked", !0).trigger("click"), d.adjustLanguageBox()
        }, removeTrackButton: function (a) {
            var b = this;
            b.captionsButton.find("input[value=" + a + "]").closest("li").remove(), b.adjustLanguageBox()
        }, addTrackButton: function (b, c) {
            var d = this;
            "" === c && (c = mejs.language.codes[b] || b), d.captionsButton.find("ul").append(a('<li><input type="radio" name="' + d.id + '_captions" id="' + d.id + "_captions_" + b + '" value="' + b + '" disabled="disabled" /><label for="' + d.id + "_captions_" + b + '">' + c + " (loading)</label></li>")), d.adjustLanguageBox(), d.container.find(".mejs-captions-translations option[value=" + b + "]").remove()
        }, adjustLanguageBox: function () {
            var a = this;
            a.captionsButton.find(".mejs-captions-selector").height(a.captionsButton.find(".mejs-captions-selector ul").outerHeight(!0) + a.captionsButton.find(".mejs-captions-translations").outerHeight(!0))
        }, checkForTracks: function () {
            var a = this, b = !1;
            if (a.options.hideCaptionsButtonWhenEmpty) {
                for (i = 0; i < a.tracks.length; i++)if ("subtitles" == a.tracks[i].kind && a.tracks[i].isLoaded) {
                    b = !0;
                    break
                }
                b || (a.captionsButton.hide(), a.setControlsSize())
            }
        }, displayCaptions: function () {
            if ("undefined" != typeof this.tracks) {
                var a, b = this, c = b.selectedTrack;
                if (null !== c && c.isLoaded) {
                    for (a = 0; a < c.entries.times.length; a++)if (b.media.currentTime >= c.entries.times[a].start && b.media.currentTime <= c.entries.times[a].stop)return b.captionsText.html(c.entries.text[a]).attr("class", "mejs-captions-text " + (c.entries.times[a].identifier || "")), void b.captions.show().height(0);
                    b.captions.hide()
                } else b.captions.hide()
            }
        }, setupSlides: function (a) {
            var b = this;
            b.slides = a, b.slides.entries.imgs = [b.slides.entries.text.length], b.showSlide(0)
        }, showSlide: function (b) {
            if ("undefined" != typeof this.tracks && "undefined" != typeof this.slidesContainer) {
                var c = this, d = c.slides.entries.text[b], e = c.slides.entries.imgs[b];
                "undefined" == typeof e || "undefined" == typeof e.fadeIn ? c.slides.entries.imgs[b] = e = a('<img src="' + d + '">').on("load", function () {
                    e.appendTo(c.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut();
                }) : e.is(":visible") || e.is(":animated") || e.fadeIn().siblings(":visible").fadeOut()
            }
        }, displaySlides: function () {
            if ("undefined" != typeof this.slides) {
                var a, b = this, c = b.slides;
                for (a = 0; a < c.entries.times.length; a++)if (b.media.currentTime >= c.entries.times[a].start && b.media.currentTime <= c.entries.times[a].stop)return void b.showSlide(a)
            }
        }, displayChapters: function () {
            var a, b = this;
            for (a = 0; a < b.tracks.length; a++)if ("chapters" == b.tracks[a].kind && b.tracks[a].isLoaded) {
                b.drawChapters(b.tracks[a]), b.hasChapters = !0;
                break
            }
        }, drawChapters: function (b) {
            var c, d, e = this, f = 0, g = 0;
            for (e.chapters.empty(), c = 0; c < b.entries.times.length; c++)d = b.entries.times[c].stop - b.entries.times[c].start, f = Math.floor(d / e.media.duration * 100), (f + g > 100 || c == b.entries.times.length - 1 && 100 > f + g) && (f = 100 - g), e.chapters.append(a('<div class="mejs-chapter" rel="' + b.entries.times[c].start + '" style="left: ' + g.toString() + "%;width: " + f.toString() + '%;"><div class="mejs-chapter-block' + (c == b.entries.times.length - 1 ? " mejs-chapter-block-last" : "") + '"><span class="ch-title">' + b.entries.text[c] + '</span><span class="ch-time">' + mejs.Utility.secondsToTimeCode(b.entries.times[c].start, e.options) + "&ndash;" + mejs.Utility.secondsToTimeCode(b.entries.times[c].stop, e.options) + "</span></div></div>")), g += f;
            e.chapters.find("div.mejs-chapter").click(function () {
                e.media.setCurrentTime(parseFloat(a(this).attr("rel"))), e.media.paused && e.media.play()
            }), e.chapters.show()
        }
    }), mejs.language = {
        codes: {
            af: "Afrikaans",
            sq: "Albanian",
            ar: "Arabic",
            be: "Belarusian",
            bg: "Bulgarian",
            ca: "Catalan",
            zh: "Chinese",
            "zh-cn": "Chinese Simplified",
            "zh-tw": "Chinese Traditional",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch",
            en: "English",
            et: "Estonian",
            fl: "Filipino",
            fi: "Finnish",
            fr: "French",
            gl: "Galician",
            de: "German",
            el: "Greek",
            ht: "Haitian Creole",
            iw: "Hebrew",
            hi: "Hindi",
            hu: "Hungarian",
            is: "Icelandic",
            id: "Indonesian",
            ga: "Irish",
            it: "Italian",
            ja: "Japanese",
            ko: "Korean",
            lv: "Latvian",
            lt: "Lithuanian",
            mk: "Macedonian",
            ms: "Malay",
            mt: "Maltese",
            no: "Norwegian",
            fa: "Persian",
            pl: "Polish",
            pt: "Portuguese",
            ro: "Romanian",
            ru: "Russian",
            sr: "Serbian",
            sk: "Slovak",
            sl: "Slovenian",
            es: "Spanish",
            sw: "Swahili",
            sv: "Swedish",
            tl: "Tagalog",
            th: "Thai",
            tr: "Turkish",
            uk: "Ukrainian",
            vi: "Vietnamese",
            cy: "Welsh",
            yi: "Yiddish"
        }
    }, mejs.TrackFormatParser = {
        webvtt: {
            pattern_timecode: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
            parse: function (b) {
                for (var c, d, e, f = 0, g = mejs.TrackFormatParser.split2(b, /\r?\n/), h = {
                    text: [],
                    times: []
                }; f < g.length; f++) {
                    if (c = this.pattern_timecode.exec(g[f]), c && f < g.length) {
                        for (f - 1 >= 0 && "" !== g[f - 1] && (e = g[f - 1]), f++, d = g[f], f++; "" !== g[f] && f < g.length;)d = d + "\n" + g[f], f++;
                        d = a.trim(d).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), h.text.push(d), h.times.push({
                            identifier: e,
                            start: 0 === mejs.Utility.convertSMPTEtoSeconds(c[1]) ? .2 : mejs.Utility.convertSMPTEtoSeconds(c[1]),
                            stop: mejs.Utility.convertSMPTEtoSeconds(c[3]),
                            settings: c[5]
                        })
                    }
                    e = ""
                }
                return h
            }
        }, dfxp: {
            parse: function (b) {
                b = a(b).filter("tt");
                var c, d, e = 0, f = b.children("div").eq(0), g = f.find("p"), h = b.find("#" + f.attr("style")),
                    i = {text: [], times: []};
                if (h.length) {
                    var j = h.removeAttr("id").get(0).attributes;
                    if (j.length)for (c = {}, e = 0; e < j.length; e++)c[j[e].name.split(":")[1]] = j[e].value
                }
                for (e = 0; e < g.length; e++) {
                    var k, l = {start: null, stop: null, style: null};
                    if (g.eq(e).attr("begin") && (l.start = mejs.Utility.convertSMPTEtoSeconds(g.eq(e).attr("begin"))), !l.start && g.eq(e - 1).attr("end") && (l.start = mejs.Utility.convertSMPTEtoSeconds(g.eq(e - 1).attr("end"))), g.eq(e).attr("end") && (l.stop = mejs.Utility.convertSMPTEtoSeconds(g.eq(e).attr("end"))), !l.stop && g.eq(e + 1).attr("begin") && (l.stop = mejs.Utility.convertSMPTEtoSeconds(g.eq(e + 1).attr("begin"))), c) {
                        k = "";
                        for (var m in c)k += m + ":" + c[m] + ";"
                    }
                    k && (l.style = k), 0 === l.start && (l.start = .2), i.times.push(l), d = a.trim(g.eq(e).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), i.text.push(d), 0 === i.times.start && (i.times.start = 2)
                }
                return i
            }
        }, split2: function (a, b) {
            return a.split(b)
        }
    }, 3 != "x\n\ny".split(/\n/gi).length && (mejs.TrackFormatParser.split2 = function (a, b) {
        var c, d = [], e = "";
        for (c = 0; c < a.length; c++)e += a.substring(c, c + 1), b.test(e) && (d.push(e.replace(b, "")), e = "");
        return d.push(e), d
    })
}(mejs.$), function (a) {
    a.extend(mejs.MepDefaults, {
        contextMenuItems: [{
            render: function (a) {
                return "undefined" == typeof a.enterFullScreen ? null : a.isFullScreen ? mejs.i18n.t("Turn off Fullscreen") : mejs.i18n.t("Go Fullscreen")
            }, click: function (a) {
                a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
            }
        }, {
            render: function (a) {
                return a.media.muted ? mejs.i18n.t("Unmute") : mejs.i18n.t("Mute")
            }, click: function (a) {
                a.media.muted ? a.setMuted(!1) : a.setMuted(!0)
            }
        }, {isSeparator: !0}, {
            render: function (a) {
                return mejs.i18n.t("Download Video")
            }, click: function (a) {
                window.location.href = a.media.currentSrc
            }
        }]
    }), a.extend(MediaElementPlayer.prototype, {
        buildcontextmenu: function (b, c, d, e) {
            b.contextMenu = a('<div class="mejs-contextmenu"></div>').appendTo(a("body")).hide(), b.container.bind("contextmenu", function (a) {
                return b.isContextMenuEnabled ? (a.preventDefault(), b.renderContextMenu(a.clientX - 1, a.clientY - 1), !1) : void 0
            }), b.container.bind("click", function () {
                b.contextMenu.hide()
            }), b.contextMenu.bind("mouseleave", function () {
                b.startContextMenuTimer()
            })
        }, cleancontextmenu: function (a) {
            a.contextMenu.remove()
        }, isContextMenuEnabled: !0, enableContextMenu: function () {
            this.isContextMenuEnabled = !0
        }, disableContextMenu: function () {
            this.isContextMenuEnabled = !1
        }, contextMenuTimeout: null, startContextMenuTimer: function () {
            var a = this;
            a.killContextMenuTimer(), a.contextMenuTimer = setTimeout(function () {
                a.hideContextMenu(), a.killContextMenuTimer()
            }, 750)
        }, killContextMenuTimer: function () {
            var a = this.contextMenuTimer;
            null != a && (clearTimeout(a), delete a, a = null)
        }, hideContextMenu: function () {
            this.contextMenu.hide()
        }, renderContextMenu: function (b, c) {
            for (var d = this, e = "", f = d.options.contextMenuItems, g = 0, h = f.length; h > g; g++)if (f[g].isSeparator) e += '<div class="mejs-contextmenu-separator"></div>'; else {
                var i = f[g].render(d);
                null != i && (e += '<div class="mejs-contextmenu-item" data-itemindex="' + g + '" id="element-' + 1e6 * Math.random() + '">' + i + "</div>")
            }
            d.contextMenu.empty().append(a(e)).css({
                top: c,
                left: b
            }).show(), d.contextMenu.find(".mejs-contextmenu-item").each(function () {
                var b = a(this), c = parseInt(b.data("itemindex"), 10), e = d.options.contextMenuItems[c];
                "undefined" != typeof e.show && e.show(b, d), b.click(function () {
                    "undefined" != typeof e.click && e.click(d), d.contextMenu.hide()
                })
            }), setTimeout(function () {
                d.killControlsTimer("rev3")
            }, 100)
        }
    })
}(mejs.$), function (a) {
    a.extend(mejs.MepDefaults, {
        skipBackInterval: 30,
        skipBackText: mejs.i18n.t("Skip back %1 seconds")
    }), a.extend(MediaElementPlayer.prototype, {
        buildskipback: function (b, c, d, e) {
            var f = this, g = f.options.skipBackText.replace("%1", f.options.skipBackInterval);
            a('<div class="mejs-button mejs-skip-back-button"><button type="button" aria-controls="' + f.id + '" title="' + g + '" aria-label="' + g + '">' + f.options.skipBackInterval + "</button></div>").appendTo(c).click(function () {
                e.setCurrentTime(Math.max(e.currentTime - f.options.skipBackInterval, 0)), a(this).find("button").blur()
            })
        }
    })
}(mejs.$), function (a) {
    a.extend(mejs.MepDefaults, {postrollCloseText: mejs.i18n.t("Close")}), a.extend(MediaElementPlayer.prototype, {
        buildpostroll: function (b, c, d, e) {
            var f = this, g = f.container.find('link[rel="postroll"]').attr("href");
            "undefined" != typeof g && (b.postroll = a('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + f.options.postrollCloseText + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(d).hide(), f.media.addEventListener("ended", function (c) {
                a.ajax({
                    dataType: "html", url: g, success: function (a, b) {
                        d.find(".mejs-postroll-layer-content").html(a)
                    }
                }), b.postroll.show()
            }, !1))
        }
    })
}(mejs.$), function (a) {
    a.extend(MediaElementPlayer.prototype, {
        buildmototrackname: function (b, c) {
            var d, e;
            e = a(c).find(".mejs-time"), d = a('<div class="mejs-moto-track-name" style="margin-right:' + (e.width() + parseInt(e.css("right").slice(0, -2))) + 'px">' + b.options.motoTrackName + "</div>"), d.attr("title", d.text()), d.appendTo(a(c).find(".mejs-time-rail"))
        }, buildmotoloop: function (b, c) {
            var d;
            d = a('<div class="mejs-button mejs-moto-loop-button' + (b.options.loop ? " mejs-button_active" : "") + '"><button></button></div>').appendTo(c).click(function () {
                b.options.loop = !b.options.loop, d.toggleClass("mejs-button_active")
            })
        }, buildmotoskin: function (b, c, d, e) {
            function f() {
                var a, c = 2;
                b.setPlayerSize(), b.setControlsSize(), a = setInterval(function () {
                    c--, b.setPlayerSize(), b.setControlsSize(), c <= 0 && clearInterval(a)
                }, 500)
            }

            function g() {
                var a, b = 2;
                k.attr("title", ""), a = setInterval(function () {
                    b--, k.attr("title", ""), b <= 0 && clearInterval(a)
                }, 500)
            }

            var h, i, j, k;
            j = a(c), h = j.find(".mejs-stop"), i = j.find(".mejs-playpause-button"), h.on("click", function () {
                h.toggleClass("mejs-button_active")
            }), i.on("click", function () {
                h.removeClass("mejs-button_active")
            }), j.find(".mejs-volume-button").append(j.find(".mejs-horizontal-volume-slider")), j.find(".mejs-time-rail").append(j.find(".mejs-time")), k = j.find(".mejs-volume-button button").attr("title", ""), j.append(a('<div class="mejs-button mejs-moto-last-hidden-button"></div>')), j.closest(".moto-widget-audio_player").on("animationend", f), k.on("mousemove", g), e.addEventListener("volumechange", g)
        }
    })
}($);