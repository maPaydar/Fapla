/* CodeMirror - Minified & Bundled
 Generated on 11/19/2015 with http://codemirror.net/doc/compress.html
 Version: 4.13

 CodeMirror Library:
 - codemirror.js
 */

!function (a) {
    if ("object" == typeof exports && "object" == typeof module)module.exports = a(); else {
        if ("function" == typeof define && define.amd)return define([], a);
        this.CodeMirror = a()
    }
}(function () {
    "use strict";
    function w(a, b) {
        if (!(this instanceof w))return new w(a, b);
        this.options = b = b ? Xf(b) : {}, Xf(pd, b, !1), J(b);
        var c = b.value;
        "string" == typeof c && (c = new Re(c, b.mode)), this.doc = c;
        var g = this.display = new x(a, c);
        g.wrapper.CodeMirror = this, F(this), D(this), b.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), b.autofocus && !o && fc(this), N(this), this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: !1,
            focused: !1,
            suppressEdits: !1,
            pasteIncoming: !1,
            cutIncoming: !1,
            draggingText: !1,
            highlight: new Nf,
            keySeq: null
        }, d && 11 > e && setTimeout(Yf(ec, this, !0), 20), ic(this), pg(), Gb(this), this.curOp.forceUpdate = !0, Ve(this, c), b.autofocus && !o || ig() == g.input ? setTimeout(Yf(Oc, this), 20) : Pc(this);
        for (var h in qd)qd.hasOwnProperty(h) && qd[h](this, b[h], sd);
        S(this), b.finishInit && b.finishInit(this);
        for (var i = 0; i < wd.length; ++i)wd[i](this);
        Ib(this), f && b.lineWrapping && "optimizelegibility" == getComputedStyle(g.lineDiv).textRendering && (g.lineDiv.style.textRendering = "auto")
    }

    function x(a, b) {
        var c = this, g = c.input = dg("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none");
        f ? g.style.width = "1000px" : g.setAttribute("wrap", "off"), n && (g.style.border = "1px solid black"), g.setAttribute("autocorrect", "off"), g.setAttribute("autocapitalize", "off"), g.setAttribute("spellcheck", "false"), c.inputDiv = dg("div", [g], null, "overflow: hidden; position: relative; width: 3px; height: 0px;"), c.scrollbarFiller = dg("div", null, "CodeMirror-scrollbar-filler"), c.scrollbarFiller.setAttribute("not-content", "true"), c.gutterFiller = dg("div", null, "CodeMirror-gutter-filler"), c.gutterFiller.setAttribute("not-content", "true"), c.lineDiv = dg("div", null, "CodeMirror-code"), c.selectionDiv = dg("div", null, null, "position: relative; z-index: 1"), c.cursorDiv = dg("div", null, "CodeMirror-cursors"), c.measure = dg("div", null, "CodeMirror-measure"), c.lineMeasure = dg("div", null, "CodeMirror-measure"), c.lineSpace = dg("div", [c.measure, c.lineMeasure, c.selectionDiv, c.cursorDiv, c.lineDiv], null, "position: relative; outline: none"), c.mover = dg("div", [dg("div", [c.lineSpace], "CodeMirror-lines")], null, "position: relative"), c.sizer = dg("div", [c.mover], "CodeMirror-sizer"), c.sizerWidth = null, c.heightForcer = dg("div", null, null, "position: absolute; height: " + If + "px; width: 1px;"), c.gutters = dg("div", null, "CodeMirror-gutters"), c.lineGutter = null, c.scroller = dg("div", [c.sizer, c.heightForcer, c.gutters], "CodeMirror-scroll"), c.scroller.setAttribute("tabIndex", "-1"), c.wrapper = dg("div", [c.inputDiv, c.scrollbarFiller, c.gutterFiller, c.scroller], "CodeMirror"), d && 8 > e && (c.gutters.style.zIndex = -1, c.scroller.style.paddingRight = 0), n && (g.style.width = "0px"), f || (c.scroller.draggable = !0), k && (c.inputDiv.style.height = "1px", c.inputDiv.style.position = "absolute"), a && (a.appendChild ? a.appendChild(c.wrapper) : a(c.wrapper)), c.viewFrom = c.viewTo = b.first, c.reportedViewFrom = c.reportedViewTo = b.first, c.view = [], c.renderedView = null, c.externalMeasured = null, c.viewOffset = 0, c.lastWrapHeight = c.lastWrapWidth = 0, c.updateLineNumbers = null, c.nativeBarWidth = c.barHeight = c.barWidth = 0, c.scrollbarsClipped = !1, c.lineNumWidth = c.lineNumInnerWidth = c.lineNumChars = null, c.prevInput = "", c.alignWidgets = !1, c.pollingFast = !1, c.poll = new Nf, c.cachedCharWidth = c.cachedTextHeight = c.cachedPaddingH = null, c.inaccurateSelection = !1, c.maxLine = null, c.maxLineLength = 0, c.maxLineChanged = !1, c.wheelDX = c.wheelDY = c.wheelStartX = c.wheelStartY = null, c.shift = !1, c.selForContextMenu = null
    }

    function y(a) {
        a.doc.mode = w.getMode(a.options, a.doc.modeOption), z(a)
    }

    function z(a) {
        a.doc.iter(function (a) {
            a.stateAfter && (a.stateAfter = null), a.styles && (a.styles = null)
        }), a.doc.frontier = a.doc.first, Wa(a, 100), a.state.modeGen++, a.curOp && Vb(a)
    }

    function A(a) {
        a.options.lineWrapping ? (lg(a.display.wrapper, "CodeMirror-wrap"), a.display.sizer.style.minWidth = "", a.display.sizerWidth = null) : (kg(a.display.wrapper, "CodeMirror-wrap"), I(a)), C(a), Vb(a), qb(a), setTimeout(function () {
            O(a)
        }, 100)
    }

    function B(a) {
        var b = Cb(a.display), c = a.options.lineWrapping, d = c && Math.max(5, a.display.scroller.clientWidth / Db(a.display) - 3);
        return function (e) {
            if (le(a.doc, e))return 0;
            var f = 0;
            if (e.widgets)for (var g = 0; g < e.widgets.length; g++)e.widgets[g].height && (f += e.widgets[g].height);
            return c ? f + (Math.ceil(e.text.length / d) || 1) * b : f + b
        }
    }

    function C(a) {
        var b = a.doc, c = B(a);
        b.iter(function (a) {
            var b = c(a);
            b != a.height && Ze(a, b)
        })
    }

    function D(a) {
        a.display.wrapper.className = a.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + a.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), qb(a)
    }

    function E(a) {
        F(a), Vb(a), setTimeout(function () {
            R(a)
        }, 20)
    }

    function F(a) {
        var b = a.display.gutters, c = a.options.gutters;
        fg(b);
        for (var d = 0; d < c.length; ++d) {
            var e = c[d], f = b.appendChild(dg("div", null, "CodeMirror-gutter " + e));
            "CodeMirror-linenumbers" == e && (a.display.lineGutter = f, f.style.width = (a.display.lineNumWidth || 1) + "px")
        }
        b.style.display = d ? "" : "none", G(a)
    }

    function G(a) {
        var b = a.display.gutters.offsetWidth;
        a.display.sizer.style.marginLeft = b + "px"
    }

    function H(a) {
        if (0 == a.height)return 0;
        for (var c, b = a.text.length, d = a; c = ee(d);) {
            var e = c.find(0, !0);
            d = e.from.line, b += e.from.ch - e.to.ch
        }
        for (d = a; c = fe(d);) {
            var e = c.find(0, !0);
            b -= d.text.length - e.from.ch, d = e.to.line, b += d.text.length - e.to.ch
        }
        return b
    }

    function I(a) {
        var b = a.display, c = a.doc;
        b.maxLine = We(c, c.first), b.maxLineLength = H(b.maxLine), b.maxLineChanged = !0, c.iter(function (a) {
            var c = H(a);
            c > b.maxLineLength && (b.maxLineLength = c, b.maxLine = a)
        })
    }

    function J(a) {
        var b = Uf(a.gutters, "CodeMirror-linenumbers");
        -1 == b && a.lineNumbers ? a.gutters = a.gutters.concat(["CodeMirror-linenumbers"]) : b > -1 && !a.lineNumbers && (a.gutters = a.gutters.slice(0), a.gutters.splice(b, 1))
    }

    function K(a) {
        var b = a.display, c = b.gutters.offsetWidth, d = Math.round(a.doc.height + _a(a.display));
        return {
            clientHeight: b.scroller.clientHeight,
            viewHeight: b.wrapper.clientHeight,
            scrollWidth: b.scroller.scrollWidth,
            clientWidth: b.scroller.clientWidth,
            viewWidth: b.wrapper.clientWidth,
            barLeft: a.options.fixedGutter ? c : 0,
            docHeight: d,
            scrollHeight: d + bb(a) + b.barHeight,
            nativeBarWidth: b.nativeBarWidth,
            gutterWidth: c
        }
    }

    function L(a, b, c) {
        this.cm = c;
        var f = this.vert = dg("div", [dg("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"), g = this.horiz = dg("div", [dg("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
        a(f), a(g), yf(f, "scroll", function () {
            f.clientHeight && b(f.scrollTop, "vertical")
        }), yf(g, "scroll", function () {
            g.clientWidth && b(g.scrollLeft, "horizontal")
        }), this.checkedOverlay = !1, d && 8 > e && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
    }

    function M() {
    }

    function N(a) {
        a.display.scrollbars && (a.display.scrollbars.clear(), a.display.scrollbars.addClass && kg(a.display.wrapper, a.display.scrollbars.addClass)), a.display.scrollbars = new w.scrollbarModel[a.options.scrollbarStyle](function (b) {
            a.display.wrapper.insertBefore(b, a.display.scrollbarFiller), yf(b, "mousedown", function () {
                a.state.focused && setTimeout(Yf(fc, a), 0)
            }), b.setAttribute("not-content", "true")
        }, function (b, c) {
            "horizontal" == c ? yc(a, b) : xc(a, b)
        }, a), a.display.scrollbars.addClass && lg(a.display.wrapper, a.display.scrollbars.addClass)
    }

    function O(a, b) {
        b || (b = K(a));
        var c = a.display.barWidth, d = a.display.barHeight;
        P(a, b);
        for (var e = 0; 4 > e && c != a.display.barWidth || d != a.display.barHeight; e++)c != a.display.barWidth && a.options.lineWrapping && _(a), P(a, K(a)), c = a.display.barWidth, d = a.display.barHeight
    }

    function P(a, b) {
        var c = a.display, d = c.scrollbars.update(b);
        c.sizer.style.paddingRight = (c.barWidth = d.right) + "px", c.sizer.style.paddingBottom = (c.barHeight = d.bottom) + "px", d.right && d.bottom ? (c.scrollbarFiller.style.display = "block", c.scrollbarFiller.style.height = d.bottom + "px", c.scrollbarFiller.style.width = d.right + "px") : c.scrollbarFiller.style.display = "", d.bottom && a.options.coverGutterNextToScrollbar && a.options.fixedGutter ? (c.gutterFiller.style.display = "block", c.gutterFiller.style.height = d.bottom + "px", c.gutterFiller.style.width = b.gutterWidth + "px") : c.gutterFiller.style.display = ""
    }

    function Q(a, b, c) {
        var d = c && null != c.top ? Math.max(0, c.top) : a.scroller.scrollTop;
        d = Math.floor(d - $a(a));
        var e = c && null != c.bottom ? c.bottom : d + a.wrapper.clientHeight, f = _e(b, d), g = _e(b, e);
        if (c && c.ensure) {
            var h = c.ensure.from.line, i = c.ensure.to.line;
            f > h ? (f = h, g = _e(b, af(We(b, h)) + a.wrapper.clientHeight)) : Math.min(i, b.lastLine()) >= g && (f = _e(b, af(We(b, i)) - a.wrapper.clientHeight), g = i)
        }
        return {from: f, to: Math.max(g, f + 1)}
    }

    function R(a) {
        var b = a.display, c = b.view;
        if (b.alignWidgets || b.gutters.firstChild && a.options.fixedGutter) {
            for (var d = U(b) - b.scroller.scrollLeft + a.doc.scrollLeft, e = b.gutters.offsetWidth, f = d + "px", g = 0; g < c.length; g++)if (!c[g].hidden) {
                a.options.fixedGutter && c[g].gutter && (c[g].gutter.style.left = f);
                var h = c[g].alignable;
                if (h)for (var i = 0; i < h.length; i++)h[i].style.left = f
            }
            a.options.fixedGutter && (b.gutters.style.left = d + e + "px")
        }
    }

    function S(a) {
        if (!a.options.lineNumbers)return !1;
        var b = a.doc, c = T(a.options, b.first + b.size - 1), d = a.display;
        if (c.length != d.lineNumChars) {
            var e = d.measure.appendChild(dg("div", [dg("div", c)], "CodeMirror-linenumber CodeMirror-gutter-elt")), f = e.firstChild.offsetWidth, g = e.offsetWidth - f;
            return d.lineGutter.style.width = "", d.lineNumInnerWidth = Math.max(f, d.lineGutter.offsetWidth - g), d.lineNumWidth = d.lineNumInnerWidth + g, d.lineNumChars = d.lineNumInnerWidth ? c.length : -1, d.lineGutter.style.width = d.lineNumWidth + "px", G(a), !0
        }
        return !1
    }

    function T(a, b) {
        return String(a.lineNumberFormatter(b + a.firstLineNumber))
    }

    function U(a) {
        return a.scroller.getBoundingClientRect().left - a.sizer.getBoundingClientRect().left
    }

    function V(a, b, c) {
        var d = a.display;
        this.viewport = b, this.visible = Q(d, a.doc, b), this.editorIsHidden = !d.wrapper.offsetWidth, this.wrapperHeight = d.wrapper.clientHeight, this.wrapperWidth = d.wrapper.clientWidth, this.oldDisplayWidth = cb(a), this.force = c, this.dims = ba(a), this.events = []
    }

    function W(a) {
        var b = a.display;
        !b.scrollbarsClipped && b.scroller.offsetWidth && (b.nativeBarWidth = b.scroller.offsetWidth - b.scroller.clientWidth, b.heightForcer.style.height = bb(a) + "px", b.sizer.style.marginBottom = -b.nativeBarWidth + "px", b.sizer.style.borderRightWidth = bb(a) + "px", b.scrollbarsClipped = !0)
    }

    function X(a, b) {
        var c = a.display, d = a.doc;
        if (b.editorIsHidden)return Xb(a), !1;
        if (!b.force && b.visible.from >= c.viewFrom && b.visible.to <= c.viewTo && (null == c.updateLineNumbers || c.updateLineNumbers >= c.viewTo) && c.renderedView == c.view && 0 == _b(a))return !1;
        S(a) && (Xb(a), b.dims = ba(a));
        var e = d.first + d.size, f = Math.max(b.visible.from - a.options.viewportMargin, d.first), g = Math.min(e, b.visible.to + a.options.viewportMargin);
        c.viewFrom < f && f - c.viewFrom < 20 && (f = Math.max(d.first, c.viewFrom)), c.viewTo > g && c.viewTo - g < 20 && (g = Math.min(e, c.viewTo)), v && (f = je(a.doc, f), g = ke(a.doc, g));
        var h = f != c.viewFrom || g != c.viewTo || c.lastWrapHeight != b.wrapperHeight || c.lastWrapWidth != b.wrapperWidth;
        $b(a, f, g), c.viewOffset = af(We(a.doc, c.viewFrom)), a.display.mover.style.top = c.viewOffset + "px";
        var i = _b(a);
        if (!h && 0 == i && !b.force && c.renderedView == c.view && (null == c.updateLineNumbers || c.updateLineNumbers >= c.viewTo))return !1;
        var j = ig();
        return i > 4 && (c.lineDiv.style.display = "none"), ca(a, c.updateLineNumbers, b.dims), i > 4 && (c.lineDiv.style.display = ""), c.renderedView = c.view, j && ig() != j && j.offsetHeight && j.focus(), fg(c.cursorDiv), fg(c.selectionDiv), c.gutters.style.height = 0, h && (c.lastWrapHeight = b.wrapperHeight, c.lastWrapWidth = b.wrapperWidth, Wa(a, 400)), c.updateLineNumbers = null, !0
    }

    function Y(a, b) {
        for (var c = b.force, d = b.viewport, e = !0; ; e = !1) {
            if (e && a.options.lineWrapping && b.oldDisplayWidth != cb(a))c = !0; else if (c = !1, d && null != d.top && (d = {top: Math.min(a.doc.height + _a(a.display) - db(a), d.top)}), b.visible = Q(a.display, a.doc, d), b.visible.from >= a.display.viewFrom && b.visible.to <= a.display.viewTo)break;
            if (!X(a, b))break;
            _(a);
            var f = K(a);
            Sa(a), $(a, f), O(a, f)
        }
        b.signal(a, "update", a), (a.display.viewFrom != a.display.reportedViewFrom || a.display.viewTo != a.display.reportedViewTo) && (b.signal(a, "viewportChange", a, a.display.viewFrom, a.display.viewTo), a.display.reportedViewFrom = a.display.viewFrom, a.display.reportedViewTo = a.display.viewTo)
    }

    function Z(a, b) {
        var c = new V(a, b);
        if (X(a, c)) {
            _(a), Y(a, c);
            var d = K(a);
            Sa(a), $(a, d), O(a, d), c.finish()
        }
    }

    function $(a, b) {
        a.display.sizer.style.minHeight = b.docHeight + "px";
        var c = b.docHeight + a.display.barHeight;
        a.display.heightForcer.style.top = c + "px", a.display.gutters.style.height = Math.max(c + bb(a), b.clientHeight) + "px"
    }

    function _(a) {
        for (var b = a.display, c = b.lineDiv.offsetTop, f = 0; f < b.view.length; f++) {
            var h, g = b.view[f];
            if (!g.hidden) {
                if (d && 8 > e) {
                    var i = g.node.offsetTop + g.node.offsetHeight;
                    h = i - c, c = i
                } else {
                    var j = g.node.getBoundingClientRect();
                    h = j.bottom - j.top
                }
                var k = g.line.height - h;
                if (2 > h && (h = Cb(b)), (k > .001 || -.001 > k) && (Ze(g.line, h), aa(g.line), g.rest))for (var l = 0; l < g.rest.length; l++)aa(g.rest[l])
            }
        }
    }

    function aa(a) {
        if (a.widgets)for (var b = 0; b < a.widgets.length; ++b)a.widgets[b].height = a.widgets[b].node.offsetHeight
    }

    function ba(a) {
        for (var b = a.display, c = {}, d = {}, e = b.gutters.clientLeft, f = b.gutters.firstChild, g = 0; f; f = f.nextSibling, ++g)c[a.options.gutters[g]] = f.offsetLeft + f.clientLeft + e, d[a.options.gutters[g]] = f.clientWidth;
        return {
            fixedPos: U(b),
            gutterTotalWidth: b.gutters.offsetWidth,
            gutterLeft: c,
            gutterWidth: d,
            wrapperWidth: b.wrapper.clientWidth
        }
    }

    function ca(a, b, c) {
        function i(b) {
            var c = b.nextSibling;
            return f && p && a.display.currentWheelTarget == b ? b.style.display = "none" : b.parentNode.removeChild(b), c
        }

        for (var d = a.display, e = a.options.lineNumbers, g = d.lineDiv, h = g.firstChild, j = d.view, k = d.viewFrom, l = 0; l < j.length; l++) {
            var m = j[l];
            if (m.hidden); else if (m.node) {
                for (; h != m.node;)h = i(h);
                var o = e && null != b && k >= b && m.lineNumber;
                m.changes && (Uf(m.changes, "gutter") > -1 && (o = !1), da(a, m, k, c)), o && (fg(m.lineNumber), m.lineNumber.appendChild(document.createTextNode(T(a.options, k)))), h = m.node.nextSibling
            } else {
                var n = la(a, m, k, c);
                g.insertBefore(n, h)
            }
            k += m.size
        }
        for (; h;)h = i(h)
    }

    function da(a, b, c, d) {
        for (var e = 0; e < b.changes.length; e++) {
            var f = b.changes[e];
            "text" == f ? ha(a, b) : "gutter" == f ? ja(a, b, c, d) : "class" == f ? ia(b) : "widget" == f && ka(b, d)
        }
        b.changes = null
    }

    function ea(a) {
        return a.node == a.text && (a.node = dg("div", null, null, "position: relative"), a.text.parentNode && a.text.parentNode.replaceChild(a.node, a.text), a.node.appendChild(a.text), d && 8 > e && (a.node.style.zIndex = 2)), a.node
    }

    function fa(a) {
        var b = a.bgClass ? a.bgClass + " " + (a.line.bgClass || "") : a.line.bgClass;
        if (b && (b += " CodeMirror-linebackground"), a.background)b ? a.background.className = b : (a.background.parentNode.removeChild(a.background), a.background = null); else if (b) {
            var c = ea(a);
            a.background = c.insertBefore(dg("div", null, b), c.firstChild)
        }
    }

    function ga(a, b) {
        var c = a.display.externalMeasured;
        return c && c.line == b.line ? (a.display.externalMeasured = null, b.measure = c.measure, c.built) : Fe(a, b)
    }

    function ha(a, b) {
        var c = b.text.className, d = ga(a, b);
        b.text == b.node && (b.node = d.pre), b.text.parentNode.replaceChild(d.pre, b.text), b.text = d.pre, d.bgClass != b.bgClass || d.textClass != b.textClass ? (b.bgClass = d.bgClass, b.textClass = d.textClass, ia(b)) : c && (b.text.className = c)
    }

    function ia(a) {
        fa(a), a.line.wrapClass ? ea(a).className = a.line.wrapClass : a.node != a.text && (a.node.className = "");
        var b = a.textClass ? a.textClass + " " + (a.line.textClass || "") : a.line.textClass;
        a.text.className = b || ""
    }

    function ja(a, b, c, d) {
        b.gutter && (b.node.removeChild(b.gutter), b.gutter = null);
        var e = b.line.gutterMarkers;
        if (a.options.lineNumbers || e) {
            var f = ea(b), g = b.gutter = f.insertBefore(dg("div", null, "CodeMirror-gutter-wrapper", "left: " + (a.options.fixedGutter ? d.fixedPos : -d.gutterTotalWidth) + "px; width: " + d.gutterTotalWidth + "px"), b.text);
            if (b.line.gutterClass && (g.className += " " + b.line.gutterClass), !a.options.lineNumbers || e && e["CodeMirror-linenumbers"] || (b.lineNumber = g.appendChild(dg("div", T(a.options, c), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + d.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + a.display.lineNumInnerWidth + "px"))), e)for (var h = 0; h < a.options.gutters.length; ++h) {
                var i = a.options.gutters[h], j = e.hasOwnProperty(i) && e[i];
                j && g.appendChild(dg("div", [j], "CodeMirror-gutter-elt", "left: " + d.gutterLeft[i] + "px; width: " + d.gutterWidth[i] + "px"))
            }
        }
    }

    function ka(a, b) {
        a.alignable && (a.alignable = null);
        for (var d, c = a.node.firstChild; c; c = d) {
            var d = c.nextSibling;
            "CodeMirror-linewidget" == c.className && a.node.removeChild(c)
        }
        ma(a, b)
    }

    function la(a, b, c, d) {
        var e = ga(a, b);
        return b.text = b.node = e.pre, e.bgClass && (b.bgClass = e.bgClass), e.textClass && (b.textClass = e.textClass), ia(b), ja(a, b, c, d), ma(b, d), b.node
    }

    function ma(a, b) {
        if (na(a.line, a, b, !0), a.rest)for (var c = 0; c < a.rest.length; c++)na(a.rest[c], a, b, !1)
    }

    function na(a, b, c, d) {
        if (a.widgets)for (var e = ea(b), f = 0, g = a.widgets; f < g.length; ++f) {
            var h = g[f], i = dg("div", [h.node], "CodeMirror-linewidget");
            h.handleMouseEvents || i.setAttribute("cm-ignore-events", "true"), oa(h, i, b, c), d && h.above ? e.insertBefore(i, b.gutter || b.text) : e.appendChild(i), Cf(h, "redraw")
        }
    }

    function oa(a, b, c, d) {
        if (a.noHScroll) {
            (c.alignable || (c.alignable = [])).push(b);
            var e = d.wrapperWidth;
            b.style.left = d.fixedPos + "px", a.coverGutter || (e -= d.gutterTotalWidth, b.style.paddingLeft = d.gutterTotalWidth + "px"), b.style.width = e + "px"
        }
        a.coverGutter && (b.style.zIndex = 5, b.style.position = "relative", a.noHScroll || (b.style.marginLeft = -d.gutterTotalWidth + "px"))
    }

    function ra(a) {
        return pa(a.line, a.ch)
    }

    function sa(a, b) {
        return qa(a, b) < 0 ? b : a
    }

    function ta(a, b) {
        return qa(a, b) < 0 ? a : b
    }

    function ua(a, b) {
        this.ranges = a, this.primIndex = b
    }

    function va(a, b) {
        this.anchor = a, this.head = b
    }

    function wa(a, b) {
        var c = a[b];
        a.sort(function (a, b) {
            return qa(a.from(), b.from())
        }), b = Uf(a, c);
        for (var d = 1; d < a.length; d++) {
            var e = a[d], f = a[d - 1];
            if (qa(f.to(), e.from()) >= 0) {
                var g = ta(f.from(), e.from()), h = sa(f.to(), e.to()), i = f.empty() ? e.from() == e.head : f.from() == f.head;
                b >= d && --b, a.splice(--d, 2, new va(i ? h : g, i ? g : h))
            }
        }
        return new ua(a, b)
    }

    function xa(a, b) {
        return new ua([new va(a, b || a)], 0)
    }

    function ya(a, b) {
        return Math.max(a.first, Math.min(b, a.first + a.size - 1))
    }

    function za(a, b) {
        if (b.line < a.first)return pa(a.first, 0);
        var c = a.first + a.size - 1;
        return b.line > c ? pa(c, We(a, c).text.length) : Aa(b, We(a, b.line).text.length)
    }

    function Aa(a, b) {
        var c = a.ch;
        return null == c || c > b ? pa(a.line, b) : 0 > c ? pa(a.line, 0) : a
    }

    function Ba(a, b) {
        return b >= a.first && b < a.first + a.size
    }

    function Ca(a, b) {
        for (var c = [], d = 0; d < b.length; d++)c[d] = za(a, b[d]);
        return c
    }

    function Da(a, b, c, d) {
        if (a.cm && a.cm.display.shift || a.extend) {
            var e = b.anchor;
            if (d) {
                var f = qa(c, e) < 0;
                f != qa(d, e) < 0 ? (e = c, c = d) : f != qa(c, d) < 0 && (c = d)
            }
            return new va(e, c)
        }
        return new va(d || c, c)
    }

    function Ea(a, b, c, d) {
        Ka(a, new ua([Da(a, a.sel.primary(), b, c)], 0), d)
    }

    function Fa(a, b, c) {
        for (var d = [], e = 0; e < a.sel.ranges.length; e++)d[e] = Da(a, a.sel.ranges[e], b[e], null);
        var f = wa(d, a.sel.primIndex);
        Ka(a, f, c)
    }

    function Ga(a, b, c, d) {
        var e = a.sel.ranges.slice(0);
        e[b] = c, Ka(a, wa(e, a.sel.primIndex), d)
    }

    function Ha(a, b, c, d) {
        Ka(a, xa(b, c), d)
    }

    function Ia(a, b) {
        var c = {
            ranges: b.ranges, update: function (b) {
                this.ranges = [];
                for (var c = 0; c < b.length; c++)this.ranges[c] = new va(za(a, b[c].anchor), za(a, b[c].head))
            }
        };
        return Af(a, "beforeSelectionChange", a, c), a.cm && Af(a.cm, "beforeSelectionChange", a.cm, c), c.ranges != b.ranges ? wa(c.ranges, c.ranges.length - 1) : b
    }

    function Ja(a, b, c) {
        var d = a.history.done, e = Sf(d);
        e && e.ranges ? (d[d.length - 1] = b, La(a, b, c)) : Ka(a, b, c)
    }

    function Ka(a, b, c) {
        La(a, b, c), jf(a, a.sel, a.cm ? a.cm.curOp.id : NaN, c)
    }

    function La(a, b, c) {
        (Gf(a, "beforeSelectionChange") || a.cm && Gf(a.cm, "beforeSelectionChange")) && (b = Ia(a, b));
        var d = c && c.bias || (qa(b.primary().head, a.sel.primary().head) < 0 ? -1 : 1);
        Ma(a, Oa(a, b, d, !0)), c && c.scroll === !1 || !a.cm || id(a.cm)
    }

    function Ma(a, b) {
        b.equals(a.sel) || (a.sel = b, a.cm && (a.cm.curOp.updateInput = a.cm.curOp.selectionChanged = !0, Ff(a.cm)), Cf(a, "cursorActivity", a))
    }

    function Na(a) {
        Ma(a, Oa(a, a.sel, null, !1), Kf)
    }

    function Oa(a, b, c, d) {
        for (var e, f = 0; f < b.ranges.length; f++) {
            var g = b.ranges[f], h = Pa(a, g.anchor, c, d), i = Pa(a, g.head, c, d);
            (e || h != g.anchor || i != g.head) && (e || (e = b.ranges.slice(0, f)), e[f] = new va(h, i))
        }
        return e ? wa(e, b.primIndex) : b
    }

    function Pa(a, b, c, d) {
        var e = !1, f = b, g = c || 1;
        a.cantEdit = !1;
        a:for (; ;) {
            var h = We(a, f.line);
            if (h.markedSpans)for (var i = 0; i < h.markedSpans.length; ++i) {
                var j = h.markedSpans[i], k = j.marker;
                if ((null == j.from || (k.inclusiveLeft ? j.from <= f.ch : j.from < f.ch)) && (null == j.to || (k.inclusiveRight ? j.to >= f.ch : j.to > f.ch))) {
                    if (d && (Af(k, "beforeCursorEnter"), k.explicitlyCleared)) {
                        if (h.markedSpans) {
                            --i;
                            continue
                        }
                        break
                    }
                    if (!k.atomic)continue;
                    var l = k.find(0 > g ? -1 : 1);
                    if (0 == qa(l, f) && (l.ch += g, l.ch < 0 ? l = l.line > a.first ? za(a, pa(l.line - 1)) : null : l.ch > h.text.length && (l = l.line < a.first + a.size - 1 ? pa(l.line + 1, 0) : null), !l)) {
                        if (e)return d ? (a.cantEdit = !0, pa(a.first, 0)) : Pa(a, b, c, !0);
                        e = !0, l = b, g = -g
                    }
                    f = l;
                    continue a
                }
            }
            return f
        }
    }

    function Qa(a) {
        for (var b = a.display, c = a.doc, d = {}, e = d.cursors = document.createDocumentFragment(), f = d.selection = document.createDocumentFragment(), g = 0; g < c.sel.ranges.length; g++) {
            var h = c.sel.ranges[g], i = h.empty();
            (i || a.options.showCursorWhenSelecting) && Ta(a, h, e), i || Ua(a, h, f)
        }
        if (a.options.moveInputWithCursor) {
            var j = wb(a, c.sel.primary().head, "div"), k = b.wrapper.getBoundingClientRect(), l = b.lineDiv.getBoundingClientRect();
            d.teTop = Math.max(0, Math.min(b.wrapper.clientHeight - 10, j.top + l.top - k.top)), d.teLeft = Math.max(0, Math.min(b.wrapper.clientWidth - 10, j.left + l.left - k.left))
        }
        return d
    }

    function Ra(a, b) {
        gg(a.display.cursorDiv, b.cursors), gg(a.display.selectionDiv, b.selection), null != b.teTop && (a.display.inputDiv.style.top = b.teTop + "px", a.display.inputDiv.style.left = b.teLeft + "px")
    }

    function Sa(a) {
        Ra(a, Qa(a))
    }

    function Ta(a, b, c) {
        var d = wb(a, b.head, "div", null, null, !a.options.singleCursorHeightPerLine), e = c.appendChild(dg("div", "\xa0", "CodeMirror-cursor"));
        if (e.style.left = d.left + "px", e.style.top = d.top + "px", e.style.height = Math.max(0, d.bottom - d.top) * a.options.cursorHeight + "px", d.other) {
            var f = c.appendChild(dg("div", "\xa0", "CodeMirror-cursor CodeMirror-secondarycursor"));
            f.style.display = "", f.style.left = d.other.left + "px", f.style.top = d.other.top + "px", f.style.height = .85 * (d.other.bottom - d.other.top) + "px"
        }
    }

    function Ua(a, b, c) {
        function j(a, b, c, d) {
            0 > b && (b = 0), b = Math.round(b), d = Math.round(d), f.appendChild(dg("div", null, "CodeMirror-selected", "position: absolute; left: " + a + "px; top: " + b + "px; width: " + (null == c ? i - a : c) + "px; height: " + (d - b) + "px"))
        }

        function k(b, c, d) {
            function m(c, d) {
                return vb(a, pa(b, c), "div", f, d)
            }

            var k, l, f = We(e, b), g = f.text.length;
            return Cg(bf(f), c || 0, null == d ? g : d, function (a, b, e) {
                var n, o, p, f = m(a, "left");
                if (a == b)n = f, o = p = f.left; else {
                    if (n = m(b - 1, "right"), "rtl" == e) {
                        var q = f;
                        f = n, n = q
                    }
                    o = f.left, p = n.right
                }
                null == c && 0 == a && (o = h), n.top - f.top > 3 && (j(o, f.top, null, f.bottom), o = h, f.bottom < n.top && j(o, f.bottom, null, n.top)), null == d && b == g && (p = i), (!k || f.top < k.top || f.top == k.top && f.left < k.left) && (k = f), (!l || n.bottom > l.bottom || n.bottom == l.bottom && n.right > l.right) && (l = n), h + 1 > o && (o = h), j(o, n.top, p - o, n.bottom)
            }), {start: k, end: l}
        }

        var d = a.display, e = a.doc, f = document.createDocumentFragment(), g = ab(a.display), h = g.left, i = Math.max(d.sizerWidth, cb(a) - d.sizer.offsetLeft) - g.right, l = b.from(), m = b.to();
        if (l.line == m.line)k(l.line, l.ch, m.ch); else {
            var n = We(e, l.line), o = We(e, m.line), p = he(n) == he(o), q = k(l.line, l.ch, p ? n.text.length + 1 : null).end, r = k(m.line, p ? 0 : null, m.ch).start;
            p && (q.top < r.top - 2 ? (j(q.right, q.top, null, q.bottom), j(h, r.top, r.left, r.bottom)) : j(q.right, q.top, r.left - q.right, q.bottom)), q.bottom < r.top && j(h, q.bottom, null, r.top)
        }
        c.appendChild(f)
    }

    function Va(a) {
        if (a.state.focused) {
            var b = a.display;
            clearInterval(b.blinker);
            var c = !0;
            b.cursorDiv.style.visibility = "", a.options.cursorBlinkRate > 0 ? b.blinker = setInterval(function () {
                b.cursorDiv.style.visibility = (c = !c) ? "" : "hidden"
            }, a.options.cursorBlinkRate) : a.options.cursorBlinkRate < 0 && (b.cursorDiv.style.visibility = "hidden")
        }
    }

    function Wa(a, b) {
        a.doc.mode.startState && a.doc.frontier < a.display.viewTo && a.state.highlight.set(b, Yf(Xa, a))
    }

    function Xa(a) {
        var b = a.doc;
        if (b.frontier < b.first && (b.frontier = b.first), !(b.frontier >= a.display.viewTo)) {
            var c = +new Date + a.options.workTime, d = yd(b.mode, Za(a, b.frontier)), e = [];
            b.iter(b.frontier, Math.min(b.first + b.size, a.display.viewTo + 500), function (f) {
                if (b.frontier >= a.display.viewFrom) {
                    var g = f.styles, h = ze(a, f, d, !0);
                    f.styles = h.styles;
                    var i = f.styleClasses, j = h.classes;
                    j ? f.styleClasses = j : i && (f.styleClasses = null);
                    for (var k = !g || g.length != f.styles.length || i != j && (!i || !j || i.bgClass != j.bgClass || i.textClass != j.textClass), l = 0; !k && l < g.length; ++l)k = g[l] != f.styles[l];
                    k && e.push(b.frontier), f.stateAfter = yd(b.mode, d)
                } else Be(a, f.text, d), f.stateAfter = b.frontier % 5 == 0 ? yd(b.mode, d) : null;
                return ++b.frontier, +new Date > c ? (Wa(a, a.options.workDelay), !0) : void 0
            }), e.length && Pb(a, function () {
                for (var b = 0; b < e.length; b++)Wb(a, e[b], "text")
            })
        }
    }

    function Ya(a, b, c) {
        for (var d, e, f = a.doc, g = c ? -1 : b - (a.doc.mode.innerMode ? 1e3 : 100), h = b; h > g; --h) {
            if (h <= f.first)return f.first;
            var i = We(f, h - 1);
            if (i.stateAfter && (!c || h <= f.frontier))return h;
            var j = Of(i.text, null, a.options.tabSize);
            (null == e || d > j) && (e = h - 1, d = j)
        }
        return e
    }

    function Za(a, b, c) {
        var d = a.doc, e = a.display;
        if (!d.mode.startState)return !0;
        var f = Ya(a, b, c), g = f > d.first && We(d, f - 1).stateAfter;
        return g = g ? yd(d.mode, g) : zd(d.mode), d.iter(f, b, function (c) {
            Be(a, c.text, g);
            var h = f == b - 1 || f % 5 == 0 || f >= e.viewFrom && f < e.viewTo;
            c.stateAfter = h ? yd(d.mode, g) : null, ++f
        }), c && (d.frontier = f), g
    }

    function $a(a) {
        return a.lineSpace.offsetTop
    }

    function _a(a) {
        return a.mover.offsetHeight - a.lineSpace.offsetHeight
    }

    function ab(a) {
        if (a.cachedPaddingH)return a.cachedPaddingH;
        var b = gg(a.measure, dg("pre", "x")), c = window.getComputedStyle ? window.getComputedStyle(b) : b.currentStyle, d = {
            left: parseInt(c.paddingLeft),
            right: parseInt(c.paddingRight)
        };
        return isNaN(d.left) || isNaN(d.right) || (a.cachedPaddingH = d), d
    }

    function bb(a) {
        return If - a.display.nativeBarWidth
    }

    function cb(a) {
        return a.display.scroller.clientWidth - bb(a) - a.display.barWidth
    }

    function db(a) {
        return a.display.scroller.clientHeight - bb(a) - a.display.barHeight
    }

    function eb(a, b, c) {
        var d = a.options.lineWrapping, e = d && cb(a);
        if (!b.measure.heights || d && b.measure.width != e) {
            var f = b.measure.heights = [];
            if (d) {
                b.measure.width = e;
                for (var g = b.text.firstChild.getClientRects(), h = 0; h < g.length - 1; h++) {
                    var i = g[h], j = g[h + 1];
                    Math.abs(i.bottom - j.bottom) > 2 && f.push((i.bottom + j.top) / 2 - c.top)
                }
            }
            f.push(c.bottom - c.top)
        }
    }

    function fb(a, b, c) {
        if (a.line == b)return {map: a.measure.map, cache: a.measure.cache};
        for (var d = 0; d < a.rest.length; d++)if (a.rest[d] == b)return {
            map: a.measure.maps[d],
            cache: a.measure.caches[d]
        };
        for (var d = 0; d < a.rest.length; d++)if ($e(a.rest[d]) > c)return {
            map: a.measure.maps[d],
            cache: a.measure.caches[d],
            before: !0
        }
    }

    function gb(a, b) {
        b = he(b);
        var c = $e(b), d = a.display.externalMeasured = new Tb(a.doc, b, c);
        d.lineN = c;
        var e = d.built = Fe(a, d);
        return d.text = e.pre, gg(a.display.lineMeasure, e.pre), d
    }

    function hb(a, b, c, d) {
        return kb(a, jb(a, b), c, d)
    }

    function ib(a, b) {
        if (b >= a.display.viewFrom && b < a.display.viewTo)return a.display.view[Yb(a, b)];
        var c = a.display.externalMeasured;
        return c && b >= c.lineN && b < c.lineN + c.size ? c : void 0
    }

    function jb(a, b) {
        var c = $e(b), d = ib(a, c);
        d && !d.text ? d = null : d && d.changes && da(a, d, c, ba(a)), d || (d = gb(a, b));
        var e = fb(d, b, c);
        return {line: b, view: d, rect: null, map: e.map, cache: e.cache, before: e.before, hasHeights: !1}
    }

    function kb(a, b, c, d, e) {
        b.before && (c = -1);
        var g, f = c + (d || "");
        return b.cache.hasOwnProperty(f) ? g = b.cache[f] : (b.rect || (b.rect = b.view.text.getBoundingClientRect()), b.hasHeights || (eb(a, b.view, b.rect), b.hasHeights = !0), g = mb(a, b, c, d), g.bogus || (b.cache[f] = g)), {
            left: g.left,
            right: g.right,
            top: e ? g.rtop : g.top,
            bottom: e ? g.rbottom : g.bottom
        }
    }

    function mb(a, b, c, f) {
        for (var h, i, j, k, g = b.map, l = 0; l < g.length; l += 3) {
            var m = g[l], n = g[l + 1];
            if (m > c ? (i = 0, j = 1, k = "left") : n > c ? (i = c - m, j = i + 1) : (l == g.length - 3 || c == n && g[l + 3] > c) && (j = n - m, i = j - 1, c >= n && (k = "right")), null != i) {
                if (h = g[l + 2], m == n && f == (h.insertLeft ? "left" : "right") && (k = f), "left" == f && 0 == i)for (; l && g[l - 2] == g[l - 3] && g[l - 1].insertLeft;)h = g[(l -= 3) + 2], k = "left";
                if ("right" == f && i == n - m)for (; l < g.length - 3 && g[l + 3] == g[l + 4] && !g[l + 5].insertLeft;)h = g[(l += 3) + 2], k = "right";
                break
            }
        }
        var o;
        if (3 == h.nodeType) {
            for (var l = 0; 4 > l; l++) {
                for (; i && cg(b.line.text.charAt(m + i));)--i;
                for (; n > m + j && cg(b.line.text.charAt(m + j));)++j;
                if (d && 9 > e && 0 == i && j == n - m)o = h.parentNode.getBoundingClientRect(); else if (d && a.options.lineWrapping) {
                    var p = eg(h, i, j).getClientRects();
                    o = p.length ? p["right" == f ? p.length - 1 : 0] : lb
                } else o = eg(h, i, j).getBoundingClientRect() || lb;
                if (o.left || o.right || 0 == i)break;
                j = i, i -= 1, k = "right"
            }
            d && 11 > e && (o = nb(a.display.measure, o))
        } else {
            i > 0 && (k = f = "right");
            var p;
            o = a.options.lineWrapping && (p = h.getClientRects()).length > 1 ? p["right" == f ? p.length - 1 : 0] : h.getBoundingClientRect()
        }
        if (d && 9 > e && !i && (!o || !o.left && !o.right)) {
            var q = h.parentNode.getClientRects()[0];
            o = q ? {left: q.left, right: q.left + Db(a.display), top: q.top, bottom: q.bottom} : lb
        }
        for (var r = o.top - b.rect.top, s = o.bottom - b.rect.top, t = (r + s) / 2, u = b.view.measure.heights, l = 0; l < u.length - 1 && !(t < u[l]); l++);
        var v = l ? u[l - 1] : 0, w = u[l], x = {
            left: ("right" == k ? o.right : o.left) - b.rect.left,
            right: ("left" == k ? o.left : o.right) - b.rect.left,
            top: v,
            bottom: w
        };
        return o.left || o.right || (x.bogus = !0), a.options.singleCursorHeightPerLine || (x.rtop = r, x.rbottom = s), x
    }

    function nb(a, b) {
        if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !Ag(a))return b;
        var c = screen.logicalXDPI / screen.deviceXDPI, d = screen.logicalYDPI / screen.deviceYDPI;
        return {left: b.left * c, right: b.right * c, top: b.top * d, bottom: b.bottom * d}
    }

    function ob(a) {
        if (a.measure && (a.measure.cache = {}, a.measure.heights = null, a.rest))for (var b = 0; b < a.rest.length; b++)a.measure.caches[b] = {}
    }

    function pb(a) {
        a.display.externalMeasure = null, fg(a.display.lineMeasure);
        for (var b = 0; b < a.display.view.length; b++)ob(a.display.view[b])
    }

    function qb(a) {
        pb(a), a.display.cachedCharWidth = a.display.cachedTextHeight = a.display.cachedPaddingH = null, a.options.lineWrapping || (a.display.maxLineChanged = !0), a.display.lineNumChars = null
    }

    function rb() {
        return window.pageXOffset || (document.documentElement || document.body).scrollLeft
    }

    function sb() {
        return window.pageYOffset || (document.documentElement || document.body).scrollTop
    }

    function tb(a, b, c, d) {
        if (b.widgets)for (var e = 0; e < b.widgets.length; ++e)if (b.widgets[e].above) {
            var f = pe(b.widgets[e]);
            c.top += f, c.bottom += f
        }
        if ("line" == d)return c;
        d || (d = "local");
        var g = af(b);
        if ("local" == d ? g += $a(a.display) : g -= a.display.viewOffset, "page" == d || "window" == d) {
            var h = a.display.lineSpace.getBoundingClientRect();
            g += h.top + ("window" == d ? 0 : sb());
            var i = h.left + ("window" == d ? 0 : rb());
            c.left += i, c.right += i
        }
        return c.top += g, c.bottom += g, c
    }

    function ub(a, b, c) {
        if ("div" == c)return b;
        var d = b.left, e = b.top;
        if ("page" == c)d -= rb(), e -= sb(); else if ("local" == c || !c) {
            var f = a.display.sizer.getBoundingClientRect();
            d += f.left, e += f.top
        }
        var g = a.display.lineSpace.getBoundingClientRect();
        return {left: d - g.left, top: e - g.top}
    }

    function vb(a, b, c, d, e) {
        return d || (d = We(a.doc, b.line)), tb(a, d, hb(a, d, b.ch, e), c)
    }

    function wb(a, b, c, d, e, f) {
        function g(b, g) {
            var h = kb(a, e, b, g ? "right" : "left", f);
            return g ? h.left = h.right : h.right = h.left, tb(a, d, h, c)
        }

        function h(a, b) {
            var c = i[b], d = c.level % 2;
            return a == Dg(c) && b && c.level < i[b - 1].level ? (c = i[--b], a = Eg(c) - (c.level % 2 ? 0 : 1), d = !0) : a == Eg(c) && b < i.length - 1 && c.level < i[b + 1].level && (c = i[++b], a = Dg(c) - c.level % 2, d = !1), d && a == c.to && a > c.from ? g(a - 1) : g(a, d)
        }

        d = d || We(a.doc, b.line), e || (e = jb(a, d));
        var i = bf(d), j = b.ch;
        if (!i)return g(j);
        var k = Mg(i, j), l = h(j, k);
        return null != Lg && (l.other = h(j, Lg)), l
    }

    function xb(a, b) {
        var c = 0, b = za(a.doc, b);
        a.options.lineWrapping || (c = Db(a.display) * b.ch);
        var d = We(a.doc, b.line), e = af(d) + $a(a.display);
        return {left: c, right: c, top: e, bottom: e + d.height}
    }

    function yb(a, b, c, d) {
        var e = pa(a, b);
        return e.xRel = d, c && (e.outside = !0), e
    }

    function zb(a, b, c) {
        var d = a.doc;
        if (c += a.display.viewOffset, 0 > c)return yb(d.first, 0, !0, -1);
        var e = _e(d, c), f = d.first + d.size - 1;
        if (e > f)return yb(d.first + d.size - 1, We(d, f).text.length, !0, 1);
        0 > b && (b = 0);
        for (var g = We(d, e); ;) {
            var h = Ab(a, g, e, b, c), i = fe(g), j = i && i.find(0, !0);
            if (!i || !(h.ch > j.from.ch || h.ch == j.from.ch && h.xRel > 0))return h;
            e = $e(g = j.to.line)
        }
    }

    function Ab(a, b, c, d, e) {
        function j(d) {
            var e = wb(a, pa(c, d), "line", b, i);
            return g = !0, f > e.bottom ? e.left - h : f < e.top ? e.left + h : (g = !1, e.left)
        }

        var f = e - af(b), g = !1, h = 2 * a.display.wrapper.clientWidth, i = jb(a, b), k = bf(b), l = b.text.length, m = Fg(b), n = Gg(b), o = j(m), p = g, q = j(n), r = g;
        if (d > q)return yb(c, n, r, 1);
        for (; ;) {
            if (k ? n == m || n == Og(b, m, 1) : 1 >= n - m) {
                for (var s = o > d || q - d >= d - o ? m : n, t = d - (s == m ? o : q); cg(b.text.charAt(s));)++s;
                var u = yb(c, s, s == m ? p : r, -1 > t ? -1 : t > 1 ? 1 : 0);
                return u
            }
            var v = Math.ceil(l / 2), w = m + v;
            if (k) {
                w = m;
                for (var x = 0; v > x; ++x)w = Og(b, w, 1)
            }
            var y = j(w);
            y > d ? (n = w, q = y, (r = g) && (q += 1e3), l = v) : (m = w, o = y, p = g, l -= v)
        }
    }

    function Cb(a) {
        if (null != a.cachedTextHeight)return a.cachedTextHeight;
        if (null == Bb) {
            Bb = dg("pre");
            for (var b = 0; 49 > b; ++b)Bb.appendChild(document.createTextNode("x")), Bb.appendChild(dg("br"));
            Bb.appendChild(document.createTextNode("x"))
        }
        gg(a.measure, Bb);
        var c = Bb.offsetHeight / 50;
        return c > 3 && (a.cachedTextHeight = c), fg(a.measure), c || 1
    }

    function Db(a) {
        if (null != a.cachedCharWidth)return a.cachedCharWidth;
        var b = dg("span", "xxxxxxxxxx"), c = dg("pre", [b]);
        gg(a.measure, c);
        var d = b.getBoundingClientRect(), e = (d.right - d.left) / 10;
        return e > 2 && (a.cachedCharWidth = e), e || 10
    }

    function Gb(a) {
        a.curOp = {
            cm: a,
            viewChanged: !1,
            startHeight: a.doc.height,
            forceUpdate: !1,
            updateInput: null,
            typing: !1,
            changeObjs: null,
            cursorActivityHandlers: null,
            cursorActivityCalled: 0,
            selectionChanged: !1,
            updateMaxLine: !1,
            scrollLeft: null,
            scrollTop: null,
            scrollToPos: null,
            id: ++Fb
        }, Eb ? Eb.ops.push(a.curOp) : a.curOp.ownsGroup = Eb = {ops: [a.curOp], delayedCallbacks: []}
    }

    function Hb(a) {
        var b = a.delayedCallbacks, c = 0;
        do {
            for (; c < b.length; c++)b[c]();
            for (var d = 0; d < a.ops.length; d++) {
                var e = a.ops[d];
                if (e.cursorActivityHandlers)for (; e.cursorActivityCalled < e.cursorActivityHandlers.length;)e.cursorActivityHandlers[e.cursorActivityCalled++](e.cm)
            }
        } while (c < b.length)
    }

    function Ib(a) {
        var b = a.curOp, c = b.ownsGroup;
        if (c)try {
            Hb(c)
        } finally {
            Eb = null;
            for (var d = 0; d < c.ops.length; d++)c.ops[d].cm.curOp = null;
            Jb(c)
        }
    }

    function Jb(a) {
        for (var b = a.ops, c = 0; c < b.length; c++)Kb(b[c]);
        for (var c = 0; c < b.length; c++)Lb(b[c]);
        for (var c = 0; c < b.length; c++)Mb(b[c]);
        for (var c = 0; c < b.length; c++)Nb(b[c]);
        for (var c = 0; c < b.length; c++)Ob(b[c])
    }

    function Kb(a) {
        var b = a.cm, c = b.display;
        W(b), a.updateMaxLine && I(b), a.mustUpdate = a.viewChanged || a.forceUpdate || null != a.scrollTop || a.scrollToPos && (a.scrollToPos.from.line < c.viewFrom || a.scrollToPos.to.line >= c.viewTo) || c.maxLineChanged && b.options.lineWrapping, a.update = a.mustUpdate && new V(b, a.mustUpdate && {
                    top: a.scrollTop,
                    ensure: a.scrollToPos
                }, a.forceUpdate)
    }

    function Lb(a) {
        a.updatedDisplay = a.mustUpdate && X(a.cm, a.update)
    }

    function Mb(a) {
        var b = a.cm, c = b.display;
        a.updatedDisplay && _(b), a.barMeasure = K(b), c.maxLineChanged && !b.options.lineWrapping && (a.adjustWidthTo = hb(b, c.maxLine, c.maxLine.text.length).left + 3, b.display.sizerWidth = a.adjustWidthTo, a.barMeasure.scrollWidth = Math.max(c.scroller.clientWidth, c.sizer.offsetLeft + a.adjustWidthTo + bb(b) + b.display.barWidth), a.maxScrollLeft = Math.max(0, c.sizer.offsetLeft + a.adjustWidthTo - cb(b))), (a.updatedDisplay || a.selectionChanged) && (a.newSelectionNodes = Qa(b))
    }

    function Nb(a) {
        var b = a.cm;
        null != a.adjustWidthTo && (b.display.sizer.style.minWidth = a.adjustWidthTo + "px", a.maxScrollLeft < b.doc.scrollLeft && yc(b, Math.min(b.display.scroller.scrollLeft, a.maxScrollLeft), !0), b.display.maxLineChanged = !1), a.newSelectionNodes && Ra(b, a.newSelectionNodes), a.updatedDisplay && $(b, a.barMeasure), (a.updatedDisplay || a.startHeight != b.doc.height) && O(b, a.barMeasure), a.selectionChanged && Va(b), b.state.focused && a.updateInput && ec(b, a.typing)
    }

    function Ob(a) {
        var b = a.cm, c = b.display, d = b.doc;
        if (a.updatedDisplay && Y(b, a.update), null == c.wheelStartX || null == a.scrollTop && null == a.scrollLeft && !a.scrollToPos || (c.wheelStartX = c.wheelStartY = null), null == a.scrollTop || c.scroller.scrollTop == a.scrollTop && !a.forceScroll || (d.scrollTop = Math.max(0, Math.min(c.scroller.scrollHeight - c.scroller.clientHeight, a.scrollTop)), c.scrollbars.setScrollTop(d.scrollTop), c.scroller.scrollTop = d.scrollTop), null == a.scrollLeft || c.scroller.scrollLeft == a.scrollLeft && !a.forceScroll || (d.scrollLeft = Math.max(0, Math.min(c.scroller.scrollWidth - cb(b), a.scrollLeft)), c.scrollbars.setScrollLeft(d.scrollLeft), c.scroller.scrollLeft = d.scrollLeft, R(b)), a.scrollToPos) {
            var e = ed(b, za(d, a.scrollToPos.from), za(d, a.scrollToPos.to), a.scrollToPos.margin);
            a.scrollToPos.isCursor && b.state.focused && dd(b, e)
        }
        var f = a.maybeHiddenMarkers, g = a.maybeUnhiddenMarkers;
        if (f)for (var h = 0; h < f.length; ++h)f[h].lines.length || Af(f[h], "hide");
        if (g)for (var h = 0; h < g.length; ++h)g[h].lines.length && Af(g[h], "unhide");
        c.wrapper.offsetHeight && (d.scrollTop = b.display.scroller.scrollTop), a.changeObjs && Af(b, "changes", b, a.changeObjs), a.update && a.update.finish()
    }

    function Pb(a, b) {
        if (a.curOp)return b();
        Gb(a);
        try {
            return b()
        } finally {
            Ib(a)
        }
    }

    function Qb(a, b) {
        return function () {
            if (a.curOp)return b.apply(a, arguments);
            Gb(a);
            try {
                return b.apply(a, arguments)
            } finally {
                Ib(a)
            }
        }
    }

    function Rb(a) {
        return function () {
            if (this.curOp)return a.apply(this, arguments);
            Gb(this);
            try {
                return a.apply(this, arguments)
            } finally {
                Ib(this)
            }
        }
    }

    function Sb(a) {
        return function () {
            var b = this.cm;
            if (!b || b.curOp)return a.apply(this, arguments);
            Gb(b);
            try {
                return a.apply(this, arguments)
            } finally {
                Ib(b)
            }
        }
    }

    function Tb(a, b, c) {
        this.line = b, this.rest = ie(b), this.size = this.rest ? $e(Sf(this.rest)) - c + 1 : 1, this.node = this.text = null, this.hidden = le(a, b)
    }

    function Ub(a, b, c) {
        for (var e, d = [], f = b; c > f; f = e) {
            var g = new Tb(a.doc, We(a.doc, f), f);
            e = f + g.size, d.push(g)
        }
        return d
    }

    function Vb(a, b, c, d) {
        null == b && (b = a.doc.first), null == c && (c = a.doc.first + a.doc.size), d || (d = 0);
        var e = a.display;
        if (d && c < e.viewTo && (null == e.updateLineNumbers || e.updateLineNumbers > b) && (e.updateLineNumbers = b), a.curOp.viewChanged = !0, b >= e.viewTo)v && je(a.doc, b) < e.viewTo && Xb(a); else if (c <= e.viewFrom)v && ke(a.doc, c + d) > e.viewFrom ? Xb(a) : (e.viewFrom += d, e.viewTo += d); else if (b <= e.viewFrom && c >= e.viewTo)Xb(a); else if (b <= e.viewFrom) {
            var f = Zb(a, c, c + d, 1);
            f ? (e.view = e.view.slice(f.index), e.viewFrom = f.lineN, e.viewTo += d) : Xb(a)
        } else if (c >= e.viewTo) {
            var f = Zb(a, b, b, -1);
            f ? (e.view = e.view.slice(0, f.index), e.viewTo = f.lineN) : Xb(a)
        } else {
            var g = Zb(a, b, b, -1), h = Zb(a, c, c + d, 1);
            g && h ? (e.view = e.view.slice(0, g.index).concat(Ub(a, g.lineN, h.lineN)).concat(e.view.slice(h.index)), e.viewTo += d) : Xb(a)
        }
        var i = e.externalMeasured;
        i && (c < i.lineN ? i.lineN += d : b < i.lineN + i.size && (e.externalMeasured = null))
    }

    function Wb(a, b, c) {
        a.curOp.viewChanged = !0;
        var d = a.display, e = a.display.externalMeasured;
        if (e && b >= e.lineN && b < e.lineN + e.size && (d.externalMeasured = null), !(b < d.viewFrom || b >= d.viewTo)) {
            var f = d.view[Yb(a, b)];
            if (null != f.node) {
                var g = f.changes || (f.changes = []);
                -1 == Uf(g, c) && g.push(c)
            }
        }
    }

    function Xb(a) {
        a.display.viewFrom = a.display.viewTo = a.doc.first, a.display.view = [], a.display.viewOffset = 0
    }

    function Yb(a, b) {
        if (b >= a.display.viewTo)return null;
        if (b -= a.display.viewFrom, 0 > b)return null;
        for (var c = a.display.view, d = 0; d < c.length; d++)if (b -= c[d].size, 0 > b)return d
    }

    function Zb(a, b, c, d) {
        var f, e = Yb(a, b), g = a.display.view;
        if (!v || c == a.doc.first + a.doc.size)return {index: e, lineN: c};
        for (var h = 0, i = a.display.viewFrom; e > h; h++)i += g[h].size;
        if (i != b) {
            if (d > 0) {
                if (e == g.length - 1)return null;
                f = i + g[e].size - b, e++
            } else f = i - b;
            b += f, c += f
        }
        for (; je(a.doc, c) != c;) {
            if (e == (0 > d ? 0 : g.length - 1))return null;
            c += d * g[e - (0 > d ? 1 : 0)].size, e += d
        }
        return {index: e, lineN: c}
    }

    function $b(a, b, c) {
        var d = a.display, e = d.view;
        0 == e.length || b >= d.viewTo || c <= d.viewFrom ? (d.view = Ub(a, b, c), d.viewFrom = b) : (d.viewFrom > b ? d.view = Ub(a, b, d.viewFrom).concat(d.view) : d.viewFrom < b && (d.view = d.view.slice(Yb(a, b))), d.viewFrom = b, d.viewTo < c ? d.view = d.view.concat(Ub(a, d.viewTo, c)) : d.viewTo > c && (d.view = d.view.slice(0, Yb(a, c)))), d.viewTo = c
    }

    function _b(a) {
        for (var b = a.display.view, c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            e.hidden || e.node && !e.changes || ++c
        }
        return c
    }

    function ac(a) {
        a.display.pollingFast || a.display.poll.set(a.options.pollInterval, function () {
            dc(a), a.state.focused && ac(a)
        })
    }

    function bc(a) {
        function c() {
            var d = dc(a);
            d || b ? (a.display.pollingFast = !1, ac(a)) : (b = !0, a.display.poll.set(60, c))
        }

        var b = !1;
        a.display.pollingFast = !0, a.display.poll.set(20, c)
    }

    function dc(a) {
        var b = a.display.input, c = a.display.prevInput, f = a.doc;
        if (!a.state.focused || xg(b) && !c || hc(a) || a.options.disableInput || a.state.keySeq)return !1;
        a.state.pasteIncoming && a.state.fakedLastChar && (b.value = b.value.substring(0, b.value.length - 1), a.state.fakedLastChar = !1);
        var g = b.value;
        if (g == c && !a.somethingSelected())return !1;
        if (d && e >= 9 && a.display.inputHasSelection === g || p && /[\uf700-\uf7ff]/.test(g))return ec(a), !1;
        var h = !a.curOp;
        h && Gb(a), a.display.shift = !1, 8203 != g.charCodeAt(0) || f.sel != a.display.selForContextMenu || c || (c = "\u200b");
        for (var i = 0, j = Math.min(c.length, g.length); j > i && c.charCodeAt(i) == g.charCodeAt(i);)++i;
        var k = g.slice(i), l = wg(k), m = null;
        a.state.pasteIncoming && f.sel.ranges.length > 1 && (cc && cc.join("\n") == k ? m = f.sel.ranges.length % cc.length == 0 && Vf(cc, wg) : l.length == f.sel.ranges.length && (m = Vf(l, function (a) {
            return [a]
        })));
        for (var n = f.sel.ranges.length - 1; n >= 0; n--) {
            var o = f.sel.ranges[n], q = o.from(), r = o.to();
            i < c.length ? q = pa(q.line, q.ch - (c.length - i)) : a.state.overwrite && o.empty() && !a.state.pasteIncoming && (r = pa(r.line, Math.min(We(f, r.line).text.length, r.ch + Sf(l).length)));
            var s = a.curOp.updateInput, t = {
                from: q,
                to: r,
                text: m ? m[n % m.length] : l,
                origin: a.state.pasteIncoming ? "paste" : a.state.cutIncoming ? "cut" : "+input"
            };
            if (Yc(a.doc, t), Cf(a, "inputRead", a, t), k && !a.state.pasteIncoming && a.options.electricChars && a.options.smartIndent && o.head.ch < 100 && (!n || f.sel.ranges[n - 1].head.line != o.head.line)) {
                var u = a.getModeAt(o.head), v = Sc(t);
                if (u.electricChars) {
                    for (var w = 0; w < u.electricChars.length; w++)if (k.indexOf(u.electricChars.charAt(w)) > -1) {
                        kd(a, v.line, "smart");
                        break
                    }
                } else u.electricInput && u.electricInput.test(We(f, v.line).text.slice(0, v.ch)) && kd(a, v.line, "smart")
            }
        }
        return id(a), a.curOp.updateInput = s, a.curOp.typing = !0, g.length > 1e3 || g.indexOf("\n") > -1 ? b.value = a.display.prevInput = "" : a.display.prevInput = g, h && Ib(a), a.state.pasteIncoming = a.state.cutIncoming = !1, !0
    }

    function ec(a, b) {
        if (!a.display.contextMenuPending) {
            var c, f, g = a.doc;
            if (a.somethingSelected()) {
                a.display.prevInput = "";
                var h = g.sel.primary();
                c = yg && (h.to().line - h.from().line > 100 || (f = a.getSelection()).length > 1e3);
                var i = c ? "-" : f || a.getSelection();
                a.display.input.value = i, a.state.focused && Tf(a.display.input), d && e >= 9 && (a.display.inputHasSelection = i)
            } else b || (a.display.prevInput = a.display.input.value = "", d && e >= 9 && (a.display.inputHasSelection = null));
            a.display.inaccurateSelection = c
        }
    }

    function fc(a) {
        if ("nocursor" != a.options.readOnly && (!o || ig() != a.display.input))try {
            a.display.input.focus()
        } catch (b) {
        }
    }

    function gc(a) {
        a.state.focused || (fc(a), Oc(a))
    }

    function hc(a) {
        return a.options.readOnly || a.doc.cantEdit
    }

    function ic(a) {
        function c(b) {
            Ef(a, b) || vf(b)
        }

        function g(c) {
            if (a.somethingSelected())cc = a.getSelections(), b.inaccurateSelection && (b.prevInput = "", b.inaccurateSelection = !1, b.input.value = cc.join("\n"), Tf(b.input)); else {
                for (var d = [], e = [], f = 0; f < a.doc.sel.ranges.length; f++) {
                    var g = a.doc.sel.ranges[f].head.line, h = {anchor: pa(g, 0), head: pa(g + 1, 0)};
                    e.push(h), d.push(a.getRange(h.anchor, h.head))
                }
                "cut" == c.type ? a.setSelections(e, null, Kf) : (b.prevInput = "", b.input.value = d.join("\n"), Tf(b.input)), cc = d
            }
            "cut" == c.type && (a.state.cutIncoming = !0)
        }

        var b = a.display;
        yf(b.scroller, "mousedown", Qb(a, mc)), d && 11 > e ? yf(b.scroller, "dblclick", Qb(a, function (b) {
            if (!Ef(a, b)) {
                var c = lc(a, b);
                if (c && !tc(a, b) && !kc(a.display, b)) {
                    sf(b);
                    var d = a.findWordAt(c);
                    Ea(a.doc, d.anchor, d.head)
                }
            }
        })) : yf(b.scroller, "dblclick", function (b) {
            Ef(a, b) || sf(b)
        }), yf(b.lineSpace, "selectstart", function (a) {
            kc(b, a) || sf(a)
        }), t || yf(b.scroller, "contextmenu", function (b) {
            Qc(a, b)
        }), yf(b.scroller, "scroll", function () {
            b.scroller.clientHeight && (xc(a, b.scroller.scrollTop), yc(a, b.scroller.scrollLeft, !0), Af(a, "scroll", a))
        }), yf(b.scroller, "mousewheel", function (b) {
            Cc(a, b)
        }), yf(b.scroller, "DOMMouseScroll", function (b) {
            Cc(a, b)
        }), yf(b.wrapper, "scroll", function () {
            b.wrapper.scrollTop = b.wrapper.scrollLeft = 0
        }), yf(b.input, "keyup", function (b) {
            Mc.call(a, b)
        }), yf(b.input, "input", function () {
            d && e >= 9 && a.display.inputHasSelection && (a.display.inputHasSelection = null), dc(a)
        }), yf(b.input, "keydown", Qb(a, Kc)), yf(b.input, "keypress", Qb(a, Nc)), yf(b.input, "focus", Yf(Oc, a)), yf(b.input, "blur", Yf(Pc, a)), a.options.dragDrop && (yf(b.scroller, "dragstart", function (b) {
            wc(a, b)
        }), yf(b.scroller, "dragenter", c), yf(b.scroller, "dragover", c), yf(b.scroller, "drop", Qb(a, vc))), yf(b.scroller, "paste", function (c) {
            kc(b, c) || (a.state.pasteIncoming = !0, fc(a), bc(a))
        }), yf(b.input, "paste", function () {
            if (f && !a.state.fakedLastChar && !(new Date - a.state.lastMiddleDown < 200)) {
                var c = b.input.selectionStart, d = b.input.selectionEnd;
                b.input.value += "$", b.input.selectionEnd = d, b.input.selectionStart = c, a.state.fakedLastChar = !0
            }
            a.state.pasteIncoming = !0, bc(a)
        }), yf(b.input, "cut", g), yf(b.input, "copy", g), k && yf(b.sizer, "mouseup", function () {
            ig() == b.input && b.input.blur(), fc(a)
        })
    }

    function jc(a) {
        var b = a.display;
        (b.lastWrapHeight != b.wrapper.clientHeight || b.lastWrapWidth != b.wrapper.clientWidth) && (b.cachedCharWidth = b.cachedTextHeight = b.cachedPaddingH = null, b.scrollbarsClipped = !1, a.setSize())
    }

    function kc(a, b) {
        for (var c = wf(b); c != a.wrapper; c = c.parentNode)if (!c || 1 == c.nodeType && "true" == c.getAttribute("cm-ignore-events") || c.parentNode == a.sizer && c != a.mover)return !0
    }

    function lc(a, b, c, d) {
        var e = a.display;
        if (!c && "true" == wf(b).getAttribute("not-content"))return null;
        var f, g, h = e.lineSpace.getBoundingClientRect();
        try {
            f = b.clientX - h.left, g = b.clientY - h.top
        } catch (b) {
            return null
        }
        var j, i = zb(a, f, g);
        if (d && 1 == i.xRel && (j = We(a.doc, i.line).text).length == i.ch) {
            var k = Of(j, j.length, a.options.tabSize) - j.length;
            i = pa(i.line, Math.max(0, Math.round((f - ab(a.display).left) / Db(a.display)) - k))
        }
        return i
    }

    function mc(a) {
        if (!Ef(this, a)) {
            var b = this, c = b.display;
            if (c.shift = a.shiftKey, kc(c, a))return void(f || (c.scroller.draggable = !1, setTimeout(function () {
                c.scroller.draggable = !0
            }, 100)));
            if (!tc(b, a)) {
                var d = lc(b, a);
                switch (window.focus(), xf(a)) {
                    case 1:
                        d ? pc(b, a, d) : wf(a) == c.scroller && sf(a);
                        break;
                    case 2:
                        f && (b.state.lastMiddleDown = +new Date), d && Ea(b.doc, d), setTimeout(Yf(fc, b), 20), sf(a);
                        break;
                    case 3:
                        t && Qc(b, a)
                }
            }
        }
    }

    function pc(a, b, c) {
        setTimeout(Yf(gc, a), 0);
        var e, d = +new Date;
        oc && oc.time > d - 400 && 0 == qa(oc.pos, c) ? e = "triple" : nc && nc.time > d - 400 && 0 == qa(nc.pos, c) ? (e = "double", oc = {
            time: d,
            pos: c
        }) : (e = "single", nc = {time: d, pos: c});
        var h, f = a.doc.sel, g = p ? b.metaKey : b.ctrlKey;
        a.options.dragDrop && rg && !hc(a) && "single" == e && (h = f.contains(c)) > -1 && !f.ranges[h].empty() ? qc(a, b, c, g) : rc(a, b, c, e, g)
    }

    function qc(a, b, c, g) {
        var h = a.display, i = Qb(a, function (j) {
            f && (h.scroller.draggable = !1), a.state.draggingText = !1, zf(document, "mouseup", i), zf(h.scroller, "drop", i), Math.abs(b.clientX - j.clientX) + Math.abs(b.clientY - j.clientY) < 10 && (sf(j), g || Ea(a.doc, c), fc(a), d && 9 == e && setTimeout(function () {
                document.body.focus(), fc(a)
            }, 20))
        });
        f && (h.scroller.draggable = !0), a.state.draggingText = i, h.scroller.dragDrop && h.scroller.dragDrop(), yf(document, "mouseup", i), yf(h.scroller, "drop", i)
    }

    function rc(a, b, c, d, e) {
        function o(b) {
            if (0 != qa(n, b))if (n = b, "rect" == d) {
                for (var e = [], f = a.options.tabSize, k = Of(We(g, c.line).text, c.ch, f), l = Of(We(g, b.line).text, b.ch, f), m = Math.min(k, l), o = Math.max(k, l), p = Math.min(c.line, b.line), q = Math.min(a.lastLine(), Math.max(c.line, b.line)); q >= p; p++) {
                    var r = We(g, p).text, s = Pf(r, m, f);
                    m == o ? e.push(new va(pa(p, s), pa(p, s))) : r.length > s && e.push(new va(pa(p, s), pa(p, Pf(r, o, f))))
                }
                e.length || e.push(new va(c, c)), Ka(g, wa(j.ranges.slice(0, i).concat(e), i), {
                    origin: "*mouse",
                    scroll: !1
                }), a.scrollIntoView(b)
            } else {
                var t = h, u = t.anchor, v = b;
                if ("single" != d) {
                    if ("double" == d)var w = a.findWordAt(b); else var w = new va(pa(b.line, 0), za(g, pa(b.line + 1, 0)));
                    qa(w.anchor, u) > 0 ? (v = w.head, u = ta(t.from(), w.anchor)) : (v = w.anchor, u = sa(t.to(), w.head))
                }
                var e = j.ranges.slice(0);
                e[i] = new va(za(g, u), v), Ka(g, wa(e, i), Lf)
            }
        }

        function r(b) {
            var c = ++q, e = lc(a, b, !0, "rect" == d);
            if (e)if (0 != qa(e, n)) {
                gc(a), o(e);
                var h = Q(f, g);
                (e.line >= h.to || e.line < h.from) && setTimeout(Qb(a, function () {
                    q == c && r(b)
                }), 150)
            } else {
                var i = b.clientY < p.top ? -20 : b.clientY > p.bottom ? 20 : 0;
                i && setTimeout(Qb(a, function () {
                    q == c && (f.scroller.scrollTop += i, r(b))
                }), 50)
            }
        }

        function s(b) {
            q = 1 / 0, sf(b), fc(a), zf(document, "mousemove", t), zf(document, "mouseup", u), g.history.lastSelOrigin = null
        }

        var f = a.display, g = a.doc;
        sf(b);
        var h, i, j = g.sel, k = j.ranges;
        if (e && !b.shiftKey ? (i = g.sel.contains(c), h = i > -1 ? k[i] : new va(c, c)) : h = g.sel.primary(), b.altKey)d = "rect", e || (h = new va(c, c)), c = lc(a, b, !0, !0), i = -1; else if ("double" == d) {
            var l = a.findWordAt(c);
            h = a.display.shift || g.extend ? Da(g, h, l.anchor, l.head) : l
        } else if ("triple" == d) {
            var m = new va(pa(c.line, 0), za(g, pa(c.line + 1, 0)));
            h = a.display.shift || g.extend ? Da(g, h, m.anchor, m.head) : m
        } else h = Da(g, h, c);
        e ? -1 == i ? (i = k.length, Ka(g, wa(k.concat([h]), i), {
            scroll: !1,
            origin: "*mouse"
        })) : k.length > 1 && k[i].empty() && "single" == d ? (Ka(g, wa(k.slice(0, i).concat(k.slice(i + 1)), 0)), j = g.sel) : Ga(g, i, h, Lf) : (i = 0, Ka(g, new ua([h], 0), Lf), j = g.sel);
        var n = c, p = f.wrapper.getBoundingClientRect(), q = 0, t = Qb(a, function (a) {
            xf(a) ? r(a) : s(a)
        }), u = Qb(a, s);
        yf(document, "mousemove", t), yf(document, "mouseup", u)
    }

    function sc(a, b, c, d, e) {
        try {
            var f = b.clientX, g = b.clientY
        } catch (b) {
            return !1
        }
        if (f >= Math.floor(a.display.gutters.getBoundingClientRect().right))return !1;
        d && sf(b);
        var h = a.display, i = h.lineDiv.getBoundingClientRect();
        if (g > i.bottom || !Gf(a, c))return uf(b);
        g -= i.top - h.viewOffset;
        for (var j = 0; j < a.options.gutters.length; ++j) {
            var k = h.gutters.childNodes[j];
            if (k && k.getBoundingClientRect().right >= f) {
                var l = _e(a.doc, g), m = a.options.gutters[j];
                return e(a, c, a, l, m, b), uf(b)
            }
        }
    }

    function tc(a, b) {
        return sc(a, b, "gutterClick", !0, Cf)
    }

    function vc(a) {
        var b = this;
        if (!Ef(b, a) && !kc(b.display, a)) {
            sf(a), d && (uc = +new Date);
            var c = lc(b, a, !0), e = a.dataTransfer.files;
            if (c && !hc(b))if (e && e.length && window.FileReader && window.File)for (var f = e.length, g = Array(f), h = 0, i = function (a, d) {
                var e = new FileReader;
                e.onload = Qb(b, function () {
                    if (g[d] = e.result, ++h == f) {
                        c = za(b.doc, c);
                        var a = {from: c, to: c, text: wg(g.join("\n")), origin: "paste"};
                        Yc(b.doc, a), Ja(b.doc, xa(c, Sc(a)))
                    }
                }), e.readAsText(a)
            }, j = 0; f > j; ++j)i(e[j], j); else {
                if (b.state.draggingText && b.doc.sel.contains(c) > -1)return b.state.draggingText(a), void setTimeout(Yf(fc, b), 20);
                try {
                    var g = a.dataTransfer.getData("Text");
                    if (g) {
                        if (b.state.draggingText && !(p ? a.metaKey : a.ctrlKey))var k = b.listSelections();
                        if (La(b.doc, xa(c, c)), k)for (var j = 0; j < k.length; ++j)cd(b.doc, "", k[j].anchor, k[j].head, "drag");
                        b.replaceSelection(g, "around", "paste"), fc(b)
                    }
                } catch (a) {
                }
            }
        }
    }

    function wc(a, b) {
        if (d && (!a.state.draggingText || +new Date - uc < 100))return void vf(b);
        if (!Ef(a, b) && !kc(a.display, b) && (b.dataTransfer.setData("Text", a.getSelection()), b.dataTransfer.setDragImage && !j)) {
            var c = dg("img", null, null, "position: fixed; left: 0; top: 0;");
            c.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", i && (c.width = c.height = 1, a.display.wrapper.appendChild(c), c._top = c.offsetTop), b.dataTransfer.setDragImage(c, 0, 0), i && c.parentNode.removeChild(c)
        }
    }

    function xc(b, c) {
        Math.abs(b.doc.scrollTop - c) < 2 || (b.doc.scrollTop = c, a || Z(b, {top: c}), b.display.scroller.scrollTop != c && (b.display.scroller.scrollTop = c), b.display.scrollbars.setScrollTop(c), a && Z(b), Wa(b, 100))
    }

    function yc(a, b, c) {
        (c ? b == a.doc.scrollLeft : Math.abs(a.doc.scrollLeft - b) < 2) || (b = Math.min(b, a.display.scroller.scrollWidth - a.display.scroller.clientWidth), a.doc.scrollLeft = b, R(a), a.display.scroller.scrollLeft != b && (a.display.scroller.scrollLeft = b), a.display.scrollbars.setScrollLeft(b))
    }

    function Cc(b, c) {
        var d = Bc(c), e = d.x, g = d.y, h = b.display, j = h.scroller;
        if (e && j.scrollWidth > j.clientWidth || g && j.scrollHeight > j.clientHeight) {
            if (g && p && f)a:for (var k = c.target, l = h.view; k != j; k = k.parentNode)for (var m = 0; m < l.length; m++)if (l[m].node == k) {
                b.display.currentWheelTarget = k;
                break a
            }
            if (e && !a && !i && null != Ac)return g && xc(b, Math.max(0, Math.min(j.scrollTop + g * Ac, j.scrollHeight - j.clientHeight))), yc(b, Math.max(0, Math.min(j.scrollLeft + e * Ac, j.scrollWidth - j.clientWidth))), sf(c), void(h.wheelStartX = null);
            if (g && null != Ac) {
                var n = g * Ac, o = b.doc.scrollTop, q = o + h.wrapper.clientHeight;
                0 > n ? o = Math.max(0, o + n - 50) : q = Math.min(b.doc.height, q + n + 50), Z(b, {top: o, bottom: q})
            }
            20 > zc && (null == h.wheelStartX ? (h.wheelStartX = j.scrollLeft, h.wheelStartY = j.scrollTop, h.wheelDX = e, h.wheelDY = g, setTimeout(function () {
                if (null != h.wheelStartX) {
                    var a = j.scrollLeft - h.wheelStartX, b = j.scrollTop - h.wheelStartY, c = b && h.wheelDY && b / h.wheelDY || a && h.wheelDX && a / h.wheelDX;
                    h.wheelStartX = h.wheelStartY = null, c && (Ac = (Ac * zc + c) / (zc + 1), ++zc)
                }
            }, 200)) : (h.wheelDX += e, h.wheelDY += g))
        }
    }

    function Dc(a, b, c) {
        if ("string" == typeof b && (b = Ad[b], !b))return !1;
        a.display.pollingFast && dc(a) && (a.display.pollingFast = !1);
        var d = a.display.shift, e = !1;
        try {
            hc(a) && (a.state.suppressEdits = !0), c && (a.display.shift = !1), e = b(a) != Jf
        } finally {
            a.display.shift = d, a.state.suppressEdits = !1
        }
        return e
    }

    function Ec(a, b, c) {
        for (var d = 0; d < a.state.keyMaps.length; d++) {
            var e = Dd(b, a.state.keyMaps[d], c, a);
            if (e)return e
        }
        return a.options.extraKeys && Dd(b, a.options.extraKeys, c, a) || Dd(b, a.options.keyMap, c, a)
    }

    function Gc(a, b, c, d) {
        var e = a.state.keySeq;
        if (e) {
            if (Ed(b))return "handled";
            Fc.set(50, function () {
                a.state.keySeq == e && (a.state.keySeq = null, ec(a))
            }), b = e + " " + b
        }
        var f = Ec(a, b, d);
        return "multi" == f && (a.state.keySeq = b), "handled" == f && Cf(a, "keyHandled", a, b, c), ("handled" == f || "multi" == f) && (sf(c), Va(a)), e && !f && /\'$/.test(b) ? (sf(c), !0) : !!f
    }

    function Hc(a, b) {
        var c = Fd(b, !0);
        return c ? b.shiftKey && !a.state.keySeq ? Gc(a, "Shift-" + c, b, function (b) {
            return Dc(a, b, !0)
        }) || Gc(a, c, b, function (b) {
            return ("string" == typeof b ? /^go[A-Z]/.test(b) : b.motion) ? Dc(a, b) : void 0
        }) : Gc(a, c, b, function (b) {
            return Dc(a, b)
        }) : !1
    }

    function Ic(a, b, c) {
        return Gc(a, "'" + c + "'", b, function (b) {
            return Dc(a, b, !0)
        })
    }

    function Kc(a) {
        var b = this;
        if (gc(b), !Ef(b, a)) {
            d && 11 > e && 27 == a.keyCode && (a.returnValue = !1);
            var c = a.keyCode;
            b.display.shift = 16 == c || a.shiftKey;
            var f = Hc(b, a);
            i && (Jc = f ? c : null, !f && 88 == c && !yg && (p ? a.metaKey : a.ctrlKey) && b.replaceSelection("", null, "cut")), 18 != c || /\bCodeMirror-crosshair\b/.test(b.display.lineDiv.className) || Lc(b)
        }
    }

    function Lc(a) {
        function c(a) {
            18 != a.keyCode && a.altKey || (kg(b, "CodeMirror-crosshair"), zf(document, "keyup", c), zf(document, "mouseover", c))
        }

        var b = a.display.lineDiv;
        lg(b, "CodeMirror-crosshair"), yf(document, "keyup", c), yf(document, "mouseover", c)
    }

    function Mc(a) {
        16 == a.keyCode && (this.doc.sel.shift = !1), Ef(this, a)
    }

    function Nc(a) {
        var b = this;
        if (!(Ef(b, a) || a.ctrlKey && !a.altKey || p && a.metaKey)) {
            var c = a.keyCode, f = a.charCode;
            if (i && c == Jc)return Jc = null, void sf(a);
            if (!(i && (!a.which || a.which < 10) || k) || !Hc(b, a)) {
                var g = String.fromCharCode(null == f ? c : f);
                Ic(b, a, g) || (d && e >= 9 && (b.display.inputHasSelection = null), bc(b))
            }
        }
    }

    function Oc(a) {
        "nocursor" != a.options.readOnly && (a.state.focused || (Af(a, "focus", a), a.state.focused = !0, lg(a.display.wrapper, "CodeMirror-focused"), a.curOp || a.display.selForContextMenu == a.doc.sel || (ec(a), f && setTimeout(Yf(ec, a, !0), 0))), ac(a), Va(a))
    }

    function Pc(a) {
        a.state.focused && (Af(a, "blur", a), a.state.focused = !1, kg(a.display.wrapper, "CodeMirror-focused")), clearInterval(a.display.blinker), setTimeout(function () {
            a.state.focused || (a.display.shift = !1)
        }, 150)
    }

    function Qc(a, b) {
        function m() {
            if (null != c.input.selectionStart) {
                var b = a.somethingSelected(), d = c.input.value = "\u200b" + (b ? c.input.value : "");
                c.prevInput = b ? "" : "\u200b", c.input.selectionStart = 1, c.input.selectionEnd = d.length, c.selForContextMenu = a.doc.sel
            }
        }

        function n() {
            if (c.contextMenuPending = !1, c.inputDiv.style.position = "relative", c.input.style.cssText = k, d && 9 > e && c.scrollbars.setScrollTop(c.scroller.scrollTop = h), ac(a), null != c.input.selectionStart) {
                (!d || d && 9 > e) && m();
                var b = 0, f = function () {
                    c.selForContextMenu == a.doc.sel && 0 == c.input.selectionStart ? Qb(a, Ad.selectAll)(a) : b++ < 10 ? c.detectingSelectAll = setTimeout(f, 500) : ec(a)
                };
                c.detectingSelectAll = setTimeout(f, 200)
            }
        }

        if (!Ef(a, b, "contextmenu")) {
            var c = a.display;
            if (!kc(c, b) && !Rc(a, b)) {
                var g = lc(a, b), h = c.scroller.scrollTop;
                if (g && !i) {
                    var j = a.options.resetSelectionOnContextMenu;
                    j && -1 == a.doc.sel.contains(g) && Qb(a, Ka)(a.doc, xa(g), Kf);
                    var k = c.input.style.cssText;
                    if (c.inputDiv.style.position = "absolute", c.input.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (b.clientY - 5) + "px; left: " + (b.clientX - 5) + "px; z-index: 1000; background: " + (d ? "rgba(255, 255, 255, .05)" : "transparent") + "; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", f)var l = window.scrollY;
                    if (fc(a), f && window.scrollTo(null, l), ec(a), a.somethingSelected() || (c.input.value = c.prevInput = " "), c.contextMenuPending = !0, c.selForContextMenu = a.doc.sel, clearTimeout(c.detectingSelectAll), d && e >= 9 && m(), t) {
                        vf(b);
                        var o = function () {
                            zf(window, "mouseup", o), setTimeout(n, 20)
                        };
                        yf(window, "mouseup", o)
                    } else setTimeout(n, 50)
                }
            }
        }
    }

    function Rc(a, b) {
        return Gf(a, "gutterContextMenu") ? sc(a, b, "gutterContextMenu", !1, Af) : !1
    }

    function Tc(a, b) {
        if (qa(a, b.from) < 0)return a;
        if (qa(a, b.to) <= 0)return Sc(b);
        var c = a.line + b.text.length - (b.to.line - b.from.line) - 1, d = a.ch;
        return a.line == b.to.line && (d += Sc(b).ch - b.to.ch), pa(c, d)
    }

    function Uc(a, b) {
        for (var c = [], d = 0; d < a.sel.ranges.length; d++) {
            var e = a.sel.ranges[d];
            c.push(new va(Tc(e.anchor, b), Tc(e.head, b)))
        }
        return wa(c, a.sel.primIndex)
    }

    function Vc(a, b, c) {
        return a.line == b.line ? pa(c.line, a.ch - b.ch + c.ch) : pa(c.line + (a.line - b.line), a.ch)
    }

    function Wc(a, b, c) {
        for (var d = [], e = pa(a.first, 0), f = e, g = 0; g < b.length; g++) {
            var h = b[g], i = Vc(h.from, e, f), j = Vc(Sc(h), e, f);
            if (e = h.to, f = j, "around" == c) {
                var k = a.sel.ranges[g], l = qa(k.head, k.anchor) < 0;
                d[g] = new va(l ? j : i, l ? i : j)
            } else d[g] = new va(i, i)
        }
        return new ua(d, a.sel.primIndex)
    }

    function Xc(a, b, c) {
        var d = {
            canceled: !1, from: b.from, to: b.to, text: b.text, origin: b.origin, cancel: function () {
                this.canceled = !0
            }
        };
        return c && (d.update = function (b, c, d, e) {
            b && (this.from = za(a, b)), c && (this.to = za(a, c)), d && (this.text = d), void 0 !== e && (this.origin = e)
        }), Af(a, "beforeChange", a, d), a.cm && Af(a.cm, "beforeChange", a.cm, d), d.canceled ? null : {
            from: d.from,
            to: d.to,
            text: d.text,
            origin: d.origin
        }
    }

    function Yc(a, b, c) {
        if (a.cm) {
            if (!a.cm.curOp)return Qb(a.cm, Yc)(a, b, c);
            if (a.cm.state.suppressEdits)return
        }
        if (!(Gf(a, "beforeChange") || a.cm && Gf(a.cm, "beforeChange")) || (b = Xc(a, b, !0))) {
            var d = u && !c && Zd(a, b.from, b.to);
            if (d)for (var e = d.length - 1; e >= 0; --e)Zc(a, {
                from: d[e].from,
                to: d[e].to,
                text: e ? [""] : b.text
            }); else Zc(a, b)
        }
    }

    function Zc(a, b) {
        if (1 != b.text.length || "" != b.text[0] || 0 != qa(b.from, b.to)) {
            var c = Uc(a, b);
            gf(a, b, c, a.cm ? a.cm.curOp.id : NaN), ad(a, b, c, Wd(a, b));
            var d = [];
            Ue(a, function (a, c) {
                c || -1 != Uf(d, a.history) || (rf(a.history, b), d.push(a.history)), ad(a, b, null, Wd(a, b))
            })
        }
    }

    function $c(a, b, c) {
        if (!a.cm || !a.cm.state.suppressEdits) {
            for (var e, d = a.history, f = a.sel, g = "undo" == b ? d.done : d.undone, h = "undo" == b ? d.undone : d.done, i = 0; i < g.length && (e = g[i], c ? !e.ranges || e.equals(a.sel) : e.ranges); i++);
            if (i != g.length) {
                for (d.lastOrigin = d.lastSelOrigin = null; e = g.pop(), e.ranges;) {
                    if (kf(e, h), c && !e.equals(a.sel))return void Ka(a, e, {clearRedo: !1});
                    f = e
                }
                var j = [];
                kf(f, h), h.push({
                    changes: j,
                    generation: d.generation
                }), d.generation = e.generation || ++d.maxGeneration;
                for (var k = Gf(a, "beforeChange") || a.cm && Gf(a.cm, "beforeChange"), i = e.changes.length - 1; i >= 0; --i) {
                    var l = e.changes[i];
                    if (l.origin = b, k && !Xc(a, l, !1))return void(g.length = 0);
                    j.push(df(a, l));
                    var m = i ? Uc(a, l) : Sf(g);
                    ad(a, l, m, Yd(a, l)), !i && a.cm && a.cm.scrollIntoView({from: l.from, to: Sc(l)});
                    var n = [];
                    Ue(a, function (a, b) {
                        b || -1 != Uf(n, a.history) || (rf(a.history, l), n.push(a.history)), ad(a, l, null, Yd(a, l))
                    })
                }
            }
        }
    }

    function _c(a, b) {
        if (0 != b && (a.first += b, a.sel = new ua(Vf(a.sel.ranges, function (a) {
                return new va(pa(a.anchor.line + b, a.anchor.ch), pa(a.head.line + b, a.head.ch))
            }), a.sel.primIndex), a.cm)) {
            Vb(a.cm, a.first, a.first - b, b);
            for (var c = a.cm.display, d = c.viewFrom; d < c.viewTo; d++)Wb(a.cm, d, "gutter")
        }
    }

    function ad(a, b, c, d) {
        if (a.cm && !a.cm.curOp)return Qb(a.cm, ad)(a, b, c, d);
        if (b.to.line < a.first)return void _c(a, b.text.length - 1 - (b.to.line - b.from.line));
        if (!(b.from.line > a.lastLine())) {
            if (b.from.line < a.first) {
                var e = b.text.length - 1 - (a.first - b.from.line);
                _c(a, e), b = {
                    from: pa(a.first, 0),
                    to: pa(b.to.line + e, b.to.ch),
                    text: [Sf(b.text)],
                    origin: b.origin
                }
            }
            var f = a.lastLine();
            b.to.line > f && (b = {
                from: b.from,
                to: pa(f, We(a, f).text.length),
                text: [b.text[0]],
                origin: b.origin
            }), b.removed = Xe(a, b.from, b.to), c || (c = Uc(a, b)), a.cm ? bd(a.cm, b, d) : Ne(a, b, d), La(a, c, Kf)
        }
    }

    function bd(a, b, c) {
        var d = a.doc, e = a.display, f = b.from, g = b.to, h = !1, i = f.line;
        a.options.lineWrapping || (i = $e(he(We(d, f.line))), d.iter(i, g.line + 1, function (a) {
            return a == e.maxLine ? (h = !0, !0) : void 0
        })), d.sel.contains(b.from, b.to) > -1 && Ff(a), Ne(d, b, c, B(a)), a.options.lineWrapping || (d.iter(i, f.line + b.text.length, function (a) {
            var b = H(a);
            b > e.maxLineLength && (e.maxLine = a, e.maxLineLength = b, e.maxLineChanged = !0, h = !1)
        }), h && (a.curOp.updateMaxLine = !0)), d.frontier = Math.min(d.frontier, f.line), Wa(a, 400);
        var j = b.text.length - (g.line - f.line) - 1;
        b.full ? Vb(a) : f.line != g.line || 1 != b.text.length || Me(a.doc, b) ? Vb(a, f.line, g.line + 1, j) : Wb(a, f.line, "text");
        var k = Gf(a, "changes"), l = Gf(a, "change");
        if (l || k) {
            var m = {from: f, to: g, text: b.text, removed: b.removed, origin: b.origin};
            l && Cf(a, "change", a, m), k && (a.curOp.changeObjs || (a.curOp.changeObjs = [])).push(m)
        }
        a.display.selForContextMenu = null
    }

    function cd(a, b, c, d, e) {
        if (d || (d = c), qa(d, c) < 0) {
            var f = d;
            d = c, c = f
        }
        "string" == typeof b && (b = wg(b)), Yc(a, {from: c, to: d, text: b, origin: e})
    }

    function dd(a, b) {
        if (!Ef(a, "scrollCursorIntoView")) {
            var c = a.display, d = c.sizer.getBoundingClientRect(), e = null;
            if (b.top + d.top < 0 ? e = !0 : b.bottom + d.top > (window.innerHeight || document.documentElement.clientHeight) && (e = !1), null != e && !m) {
                var f = dg("div", "\u200b", null, "position: absolute; top: " + (b.top - c.viewOffset - $a(a.display)) + "px; height: " + (b.bottom - b.top + bb(a) + c.barHeight) + "px; left: " + b.left + "px; width: 2px;");
                a.display.lineSpace.appendChild(f), f.scrollIntoView(e), a.display.lineSpace.removeChild(f)
            }
        }
    }

    function ed(a, b, c, d) {
        null == d && (d = 0);
        for (var e = 0; 5 > e; e++) {
            var f = !1, g = wb(a, b), h = c && c != b ? wb(a, c) : g, i = gd(a, Math.min(g.left, h.left), Math.min(g.top, h.top) - d, Math.max(g.left, h.left), Math.max(g.bottom, h.bottom) + d), j = a.doc.scrollTop, k = a.doc.scrollLeft;
            if (null != i.scrollTop && (xc(a, i.scrollTop), Math.abs(a.doc.scrollTop - j) > 1 && (f = !0)), null != i.scrollLeft && (yc(a, i.scrollLeft), Math.abs(a.doc.scrollLeft - k) > 1 && (f = !0)), !f)break
        }
        return g
    }

    function fd(a, b, c, d, e) {
        var f = gd(a, b, c, d, e);
        null != f.scrollTop && xc(a, f.scrollTop), null != f.scrollLeft && yc(a, f.scrollLeft)
    }

    function gd(a, b, c, d, e) {
        var f = a.display, g = Cb(a.display);
        0 > c && (c = 0);
        var h = a.curOp && null != a.curOp.scrollTop ? a.curOp.scrollTop : f.scroller.scrollTop, i = db(a), j = {};
        e - c > i && (e = c + i);
        var k = a.doc.height + _a(f), l = g > c, m = e > k - g;
        if (h > c)j.scrollTop = l ? 0 : c; else if (e > h + i) {
            var n = Math.min(c, (m ? k : e) - i);
            n != h && (j.scrollTop = n)
        }
        var o = a.curOp && null != a.curOp.scrollLeft ? a.curOp.scrollLeft : f.scroller.scrollLeft, p = cb(a) - (a.options.fixedGutter ? f.gutters.offsetWidth : 0), q = d - b > p;
        return q && (d = b + p), 10 > b ? j.scrollLeft = 0 : o > b ? j.scrollLeft = Math.max(0, b - (q ? 0 : 10)) : d > p + o - 3 && (j.scrollLeft = d + (q ? 0 : 10) - p), j
    }

    function hd(a, b, c) {
        (null != b || null != c) && jd(a), null != b && (a.curOp.scrollLeft = (null == a.curOp.scrollLeft ? a.doc.scrollLeft : a.curOp.scrollLeft) + b), null != c && (a.curOp.scrollTop = (null == a.curOp.scrollTop ? a.doc.scrollTop : a.curOp.scrollTop) + c)
    }

    function id(a) {
        jd(a);
        var b = a.getCursor(), c = b, d = b;
        a.options.lineWrapping || (c = b.ch ? pa(b.line, b.ch - 1) : b, d = pa(b.line, b.ch + 1)), a.curOp.scrollToPos = {
            from: c,
            to: d,
            margin: a.options.cursorScrollMargin,
            isCursor: !0
        }
    }

    function jd(a) {
        var b = a.curOp.scrollToPos;
        if (b) {
            a.curOp.scrollToPos = null;
            var c = xb(a, b.from), d = xb(a, b.to), e = gd(a, Math.min(c.left, d.left), Math.min(c.top, d.top) - b.margin, Math.max(c.right, d.right), Math.max(c.bottom, d.bottom) + b.margin);
            a.scrollTo(e.scrollLeft, e.scrollTop)
        }
    }

    function kd(a, b, c, d) {
        var f, e = a.doc;
        null == c && (c = "add"), "smart" == c && (e.mode.indent ? f = Za(a, b) : c = "prev");
        var g = a.options.tabSize, h = We(e, b), i = Of(h.text, null, g);
        h.stateAfter && (h.stateAfter = null);
        var k, j = h.text.match(/^\s*/)[0];
        if (d || /\S/.test(h.text)) {
            if ("smart" == c && (k = e.mode.indent(f, h.text.slice(j.length), h.text), k == Jf || k > 150)) {
                if (!d)return;
                c = "prev"
            }
        } else k = 0, c = "not";
        "prev" == c ? k = b > e.first ? Of(We(e, b - 1).text, null, g) : 0 : "add" == c ? k = i + a.options.indentUnit : "subtract" == c ? k = i - a.options.indentUnit : "number" == typeof c && (k = i + c), k = Math.max(0, k);
        var l = "", m = 0;
        if (a.options.indentWithTabs)for (var n = Math.floor(k / g); n; --n)m += g, l += "	";
        if (k > m && (l += Rf(k - m)), l != j)cd(e, l, pa(b, 0), pa(b, j.length), "+input"); else for (var n = 0; n < e.sel.ranges.length; n++) {
            var o = e.sel.ranges[n];
            if (o.head.line == b && o.head.ch < j.length) {
                var m = pa(b, j.length);
                Ga(e, n, new va(m, m));
                break
            }
        }
        h.stateAfter = null
    }

    function ld(a, b, c, d) {
        var e = b, f = b;
        return "number" == typeof b ? f = We(a, ya(a, b)) : e = $e(b), null == e ? null : (d(f, e) && a.cm && Wb(a.cm, e, c), f)
    }

    function md(a, b) {
        for (var c = a.doc.sel.ranges, d = [], e = 0; e < c.length; e++) {
            for (var f = b(c[e]); d.length && qa(f.from, Sf(d).to) <= 0;) {
                var g = d.pop();
                if (qa(g.from, f.from) < 0) {
                    f.from = g.from;
                    break
                }
            }
            d.push(f)
        }
        Pb(a, function () {
            for (var b = d.length - 1; b >= 0; b--)cd(a.doc, "", d[b].from, d[b].to, "+delete");
            id(a)
        })
    }

    function nd(a, b, c, d, e) {
        function k() {
            var b = f + c;
            return b < a.first || b >= a.first + a.size ? j = !1 : (f = b, i = We(a, b))
        }

        function l(a) {
            var b = (e ? Og : Pg)(i, g, c, !0);
            if (null == b) {
                if (a || !k())return j = !1;
                g = e ? (0 > c ? Gg : Fg)(i) : 0 > c ? i.text.length : 0
            } else g = b;
            return !0
        }

        var f = b.line, g = b.ch, h = c, i = We(a, f), j = !0;
        if ("char" == d)l(); else if ("column" == d)l(!0); else if ("word" == d || "group" == d)for (var m = null, n = "group" == d, o = a.cm && a.cm.getHelper(b, "wordChars"), p = !0; !(0 > c) || l(!p); p = !1) {
            var q = i.text.charAt(g) || "\n", r = _f(q, o) ? "w" : n && "\n" == q ? "n" : !n || /\s/.test(q) ? null : "p";
            if (!n || p || r || (r = "s"), m && m != r) {
                0 > c && (c = 1, l());
                break
            }
            if (r && (m = r), c > 0 && !l(!p))break
        }
        var s = Pa(a, pa(f, g), h, !0);
        return j || (s.hitSide = !0), s
    }

    function od(a, b, c, d) {
        var g, e = a.doc, f = b.left;
        if ("page" == d) {
            var h = Math.min(a.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
            g = b.top + c * (h - (0 > c ? 1.5 : .5) * Cb(a.display))
        } else"line" == d && (g = c > 0 ? b.bottom + 3 : b.top - 3);
        for (; ;) {
            var i = zb(a, f, g);
            if (!i.outside)break;
            if (0 > c ? 0 >= g : g >= e.height) {
                i.hitSide = !0;
                break
            }
            g += 5 * c
        }
        return i
    }

    function rd(a, b, c, d) {
        w.defaults[a] = b, c && (qd[a] = d ? function (a, b, d) {
            d != sd && c(a, b, d)
        } : c)
    }

    function Cd(a) {
        for (var c, d, e, f, b = a.split(/-(?!$)/), a = b[b.length - 1], g = 0; g < b.length - 1; g++) {
            var h = b[g];
            if (/^(cmd|meta|m)$/i.test(h))f = !0; else if (/^a(lt)?$/i.test(h))c = !0; else if (/^(c|ctrl|control)$/i.test(h))d = !0; else {
                if (!/^s(hift)$/i.test(h))throw new Error("Unrecognized modifier name: " + h);
                e = !0
            }
        }
        return c && (a = "Alt-" + a), d && (a = "Ctrl-" + a), f && (a = "Cmd-" + a), e && (a = "Shift-" + a), a
    }

    function Gd(a) {
        return "string" == typeof a ? Bd[a] : a
    }

    function Kd(a, b, c, d, e) {
        if (d && d.shared)return Md(a, b, c, d, e);
        if (a.cm && !a.cm.curOp)return Qb(a.cm, Kd)(a, b, c, d, e);
        var f = new Id(a, e), g = qa(b, c);
        if (d && Xf(d, f, !1), g > 0 || 0 == g && f.clearWhenEmpty !== !1)return f;
        if (f.replacedWith && (f.collapsed = !0, f.widgetNode = dg("span", [f.replacedWith], "CodeMirror-widget"), d.handleMouseEvents || f.widgetNode.setAttribute("cm-ignore-events", "true"), d.insertLeft && (f.widgetNode.insertLeft = !0)), f.collapsed) {
            if (ge(a, b.line, b, c, f) || b.line != c.line && ge(a, c.line, b, c, f))throw new Error("Inserting collapsed marker partially overlapping an existing one");
            v = !0
        }
        f.addToHistory && gf(a, {from: b, to: c, origin: "markText"}, a.sel, NaN);
        var j, h = b.line, i = a.cm;
        if (a.iter(h, c.line + 1, function (a) {
                i && f.collapsed && !i.options.lineWrapping && he(a) == i.display.maxLine && (j = !0), f.collapsed && h != b.line && Ze(a, 0), Td(a, new Qd(f, h == b.line ? b.ch : null, h == c.line ? c.ch : null)), ++h
            }), f.collapsed && a.iter(b.line, c.line + 1, function (b) {
                le(a, b) && Ze(b, 0)
            }), f.clearOnEnter && yf(f, "beforeCursorEnter", function () {
                f.clear()
            }), f.readOnly && (u = !0, (a.history.done.length || a.history.undone.length) && a.clearHistory()), f.collapsed && (f.id = ++Jd, f.atomic = !0), i) {
            if (j && (i.curOp.updateMaxLine = !0), f.collapsed)Vb(i, b.line, c.line + 1); else if (f.className || f.title || f.startStyle || f.endStyle || f.css)for (var k = b.line; k <= c.line; k++)Wb(i, k, "text");
            f.atomic && Na(i.doc), Cf(i, "markerAdded", i, f)
        }
        return f
    }

    function Md(a, b, c, d, e) {
        d = Xf(d), d.shared = !1;
        var f = [Kd(a, b, c, d, e)], g = f[0], h = d.widgetNode;
        return Ue(a, function (a) {
            h && (d.widgetNode = h.cloneNode(!0)), f.push(Kd(a, za(a, b), za(a, c), d, e));
            for (var i = 0; i < a.linked.length; ++i)if (a.linked[i].isParent)return;
            g = Sf(f)
        }), new Ld(f, g)
    }

    function Nd(a) {
        return a.findMarks(pa(a.first, 0), a.clipPos(pa(a.lastLine())), function (a) {
            return a.parent
        })
    }

    function Od(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c], e = d.find(), f = a.clipPos(e.from), g = a.clipPos(e.to);
            if (qa(f, g)) {
                var h = Kd(a, f, g, d.primary, d.primary.type);
                d.markers.push(h), h.parent = d
            }
        }
    }

    function Pd(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b], d = [c.primary.doc];
            Ue(c.primary.doc, function (a) {
                d.push(a)
            });
            for (var e = 0; e < c.markers.length; e++) {
                var f = c.markers[e];
                -1 == Uf(d, f.doc) && (f.parent = null, c.markers.splice(e--, 1))
            }
        }
    }

    function Qd(a, b, c) {
        this.marker = a, this.from = b, this.to = c
    }

    function Rd(a, b) {
        if (a)for (var c = 0; c < a.length; ++c) {
            var d = a[c];
            if (d.marker == b)return d
        }
    }

    function Sd(a, b) {
        for (var c, d = 0; d < a.length; ++d)a[d] != b && (c || (c = [])).push(a[d]);
        return c
    }

    function Td(a, b) {
        a.markedSpans = a.markedSpans ? a.markedSpans.concat([b]) : [b], b.marker.attachLine(a)
    }

    function Ud(a, b, c) {
        if (a)for (var e, d = 0; d < a.length; ++d) {
            var f = a[d], g = f.marker, h = null == f.from || (g.inclusiveLeft ? f.from <= b : f.from < b);
            if (h || f.from == b && "bookmark" == g.type && (!c || !f.marker.insertLeft)) {
                var i = null == f.to || (g.inclusiveRight ? f.to >= b : f.to > b);
                (e || (e = [])).push(new Qd(g, f.from, i ? null : f.to))
            }
        }
        return e
    }

    function Vd(a, b, c) {
        if (a)for (var e, d = 0; d < a.length; ++d) {
            var f = a[d], g = f.marker, h = null == f.to || (g.inclusiveRight ? f.to >= b : f.to > b);
            if (h || f.from == b && "bookmark" == g.type && (!c || f.marker.insertLeft)) {
                var i = null == f.from || (g.inclusiveLeft ? f.from <= b : f.from < b);
                (e || (e = [])).push(new Qd(g, i ? null : f.from - b, null == f.to ? null : f.to - b))
            }
        }
        return e
    }

    function Wd(a, b) {
        if (b.full)return null;
        var c = Ba(a, b.from.line) && We(a, b.from.line).markedSpans, d = Ba(a, b.to.line) && We(a, b.to.line).markedSpans;
        if (!c && !d)return null;
        var e = b.from.ch, f = b.to.ch, g = 0 == qa(b.from, b.to), h = Ud(c, e, g), i = Vd(d, f, g), j = 1 == b.text.length, k = Sf(b.text).length + (j ? e : 0);
        if (h)for (var l = 0; l < h.length; ++l) {
            var m = h[l];
            if (null == m.to) {
                var n = Rd(i, m.marker);
                n ? j && (m.to = null == n.to ? null : n.to + k) : m.to = e
            }
        }
        if (i)for (var l = 0; l < i.length; ++l) {
            var m = i[l];
            if (null != m.to && (m.to += k), null == m.from) {
                var n = Rd(h, m.marker);
                n || (m.from = k, j && (h || (h = [])).push(m))
            } else m.from += k, j && (h || (h = [])).push(m)
        }
        h && (h = Xd(h)), i && i != h && (i = Xd(i));
        var o = [h];
        if (!j) {
            var q, p = b.text.length - 2;
            if (p > 0 && h)for (var l = 0; l < h.length; ++l)null == h[l].to && (q || (q = [])).push(new Qd(h[l].marker, null, null));
            for (var l = 0; p > l; ++l)o.push(q);
            o.push(i)
        }
        return o
    }

    function Xd(a) {
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            null != c.from && c.from == c.to && c.marker.clearWhenEmpty !== !1 && a.splice(b--, 1)
        }
        return a.length ? a : null
    }

    function Yd(a, b) {
        var c = nf(a, b), d = Wd(a, b);
        if (!c)return d;
        if (!d)return c;
        for (var e = 0; e < c.length; ++e) {
            var f = c[e], g = d[e];
            if (f && g)a:for (var h = 0; h < g.length; ++h) {
                for (var i = g[h], j = 0; j < f.length; ++j)if (f[j].marker == i.marker)continue a;
                f.push(i)
            } else g && (c[e] = g)
        }
        return c
    }

    function Zd(a, b, c) {
        var d = null;
        if (a.iter(b.line, c.line + 1, function (a) {
                if (a.markedSpans)for (var b = 0; b < a.markedSpans.length; ++b) {
                    var c = a.markedSpans[b].marker;
                    !c.readOnly || d && -1 != Uf(d, c) || (d || (d = [])).push(c)
                }
            }), !d)return null;
        for (var e = [{
            from: b,
            to: c
        }], f = 0; f < d.length; ++f)for (var g = d[f], h = g.find(0), i = 0; i < e.length; ++i) {
            var j = e[i];
            if (!(qa(j.to, h.from) < 0 || qa(j.from, h.to) > 0)) {
                var k = [i, 1], l = qa(j.from, h.from), m = qa(j.to, h.to);
                (0 > l || !g.inclusiveLeft && !l) && k.push({
                    from: j.from,
                    to: h.from
                }), (m > 0 || !g.inclusiveRight && !m) && k.push({
                    from: h.to,
                    to: j.to
                }), e.splice.apply(e, k), i += k.length - 1
            }
        }
        return e
    }

    function $d(a) {
        var b = a.markedSpans;
        if (b) {
            for (var c = 0; c < b.length; ++c)b[c].marker.detachLine(a);
            a.markedSpans = null
        }
    }

    function _d(a, b) {
        if (b) {
            for (var c = 0; c < b.length; ++c)b[c].marker.attachLine(a);
            a.markedSpans = b
        }
    }

    function ae(a) {
        return a.inclusiveLeft ? -1 : 0
    }

    function be(a) {
        return a.inclusiveRight ? 1 : 0
    }

    function ce(a, b) {
        var c = a.lines.length - b.lines.length;
        if (0 != c)return c;
        var d = a.find(), e = b.find(), f = qa(d.from, e.from) || ae(a) - ae(b);
        if (f)return -f;
        var g = qa(d.to, e.to) || be(a) - be(b);
        return g ? g : b.id - a.id
    }

    function de(a, b) {
        var d, c = v && a.markedSpans;
        if (c)for (var e, f = 0; f < c.length; ++f)e = c[f], e.marker.collapsed && null == (b ? e.from : e.to) && (!d || ce(d, e.marker) < 0) && (d = e.marker);
        return d
    }

    function ee(a) {
        return de(a, !0)
    }

    function fe(a) {
        return de(a, !1)
    }

    function ge(a, b, c, d, e) {
        var f = We(a, b), g = v && f.markedSpans;
        if (g)for (var h = 0; h < g.length; ++h) {
            var i = g[h];
            if (i.marker.collapsed) {
                var j = i.marker.find(0), k = qa(j.from, c) || ae(i.marker) - ae(e), l = qa(j.to, d) || be(i.marker) - be(e);
                if (!(k >= 0 && 0 >= l || 0 >= k && l >= 0) && (0 >= k && (qa(j.to, c) > 0 || i.marker.inclusiveRight && e.inclusiveLeft) || k >= 0 && (qa(j.from, d) < 0 || i.marker.inclusiveLeft && e.inclusiveRight)))return !0
            }
        }
    }

    function he(a) {
        for (var b; b = ee(a);)a = b.find(-1, !0).line;
        return a
    }

    function ie(a) {
        for (var b, c; b = fe(a);)a = b.find(1, !0).line, (c || (c = [])).push(a);
        return c
    }

    function je(a, b) {
        var c = We(a, b), d = he(c);
        return c == d ? b : $e(d)
    }

    function ke(a, b) {
        if (b > a.lastLine())return b;
        var d, c = We(a, b);
        if (!le(a, c))return b;
        for (; d = fe(c);)c = d.find(1, !0).line;
        return $e(c) + 1
    }

    function le(a, b) {
        var c = v && b.markedSpans;
        if (c)for (var d, e = 0; e < c.length; ++e)if (d = c[e], d.marker.collapsed) {
            if (null == d.from)return !0;
            if (!d.marker.widgetNode && 0 == d.from && d.marker.inclusiveLeft && me(a, b, d))return !0
        }
    }

    function me(a, b, c) {
        if (null == c.to) {
            var d = c.marker.find(1, !0);
            return me(a, d.line, Rd(d.line.markedSpans, c.marker))
        }
        if (c.marker.inclusiveRight && c.to == b.text.length)return !0;
        for (var e, f = 0; f < b.markedSpans.length; ++f)if (e = b.markedSpans[f], e.marker.collapsed && !e.marker.widgetNode && e.from == c.to && (null == e.to || e.to != c.from) && (e.marker.inclusiveLeft || c.marker.inclusiveRight) && me(a, b, e))return !0
    }

    function oe(a, b, c) {
        af(b) < (a.curOp && a.curOp.scrollTop || a.doc.scrollTop) && hd(a, null, c)
    }

    function pe(a) {
        if (null != a.height)return a.height;
        if (!hg(document.body, a.node)) {
            var b = "position: relative;";
            a.coverGutter && (b += "margin-left: -" + a.cm.display.gutters.offsetWidth + "px;"), a.noHScroll && (b += "width: " + a.cm.display.wrapper.clientWidth + "px;"), gg(a.cm.display.measure, dg("div", [a.node], null, b))
        }
        return a.height = a.node.offsetHeight
    }

    function qe(a, b, c, d) {
        var e = new ne(a, c, d);
        return e.noHScroll && (a.display.alignWidgets = !0), ld(a.doc, b, "widget", function (b) {
            var c = b.widgets || (b.widgets = []);
            if (null == e.insertAt ? c.push(e) : c.splice(Math.min(c.length - 1, Math.max(0, e.insertAt)), 0, e), e.line = b, !le(a.doc, b)) {
                var d = af(b) < a.doc.scrollTop;
                Ze(b, b.height + pe(e)), d && hd(a, null, e.height), a.curOp.forceUpdate = !0
            }
            return !0
        }), e
    }

    function se(a, b, c, d) {
        a.text = b, a.stateAfter && (a.stateAfter = null), a.styles && (a.styles = null), null != a.order && (a.order = null), $d(a), _d(a, c);
        var e = d ? d(a) : 1;
        e != a.height && Ze(a, e)
    }

    function te(a) {
        a.parent = null, $d(a)
    }

    function ue(a, b) {
        if (a)for (; ;) {
            var c = a.match(/(?:^|\s+)line-(background-)?(\S+)/);
            if (!c)break;
            a = a.slice(0, c.index) + a.slice(c.index + c[0].length);
            var d = c[1] ? "bgClass" : "textClass";
            null == b[d] ? b[d] = c[2] : new RegExp("(?:^|s)" + c[2] + "(?:$|s)").test(b[d]) || (b[d] += " " + c[2])
        }
        return a
    }

    function ve(a, b) {
        if (a.blankLine)return a.blankLine(b);
        if (a.innerMode) {
            var c = w.innerMode(a, b);
            return c.mode.blankLine ? c.mode.blankLine(c.state) : void 0
        }
    }

    function we(a, b, c, d) {
        for (var e = 0; 10 > e; e++) {
            d && (d[0] = w.innerMode(a, c).mode);
            var f = a.token(b, c);
            if (b.pos > b.start)return f
        }
        throw new Error("Mode " + a.name + " failed to advance stream.")
    }

    function xe(a, b, c, d) {
        function e(a) {
            return {start: k.start, end: k.pos, string: k.current(), type: h || null, state: a ? yd(f.mode, j) : j}
        }

        var h, f = a.doc, g = f.mode;
        b = za(f, b);
        var l, i = We(f, b.line), j = Za(a, b.line, c), k = new Hd(i.text, a.options.tabSize);
        for (d && (l = []); (d || k.pos < b.ch) && !k.eol();)k.start = k.pos, h = we(g, k, j), d && l.push(e(!0));
        return d ? l : e()
    }

    function ye(a, b, c, d, e, f, g) {
        var h = c.flattenSpans;
        null == h && (h = a.options.flattenSpans);
        var l, i = 0, j = null, k = new Hd(b, a.options.tabSize), m = a.options.addModeClass && [null];
        for ("" == b && ue(ve(c, d), f); !k.eol();) {
            if (k.pos > a.options.maxHighlightLength ? (h = !1, g && Be(a, b, d, k.pos), k.pos = b.length, l = null) : l = ue(we(c, k, d, m), f), m) {
                var n = m[0].name;
                n && (l = "m-" + (l ? n + " " + l : n))
            }
            if (!h || j != l) {
                for (; i < k.start;)i = Math.min(k.start, i + 5e4), e(i, j);
                j = l
            }
            k.start = k.pos
        }
        for (; i < k.pos;) {
            var o = Math.min(k.pos, i + 5e4);
            e(o, j), i = o
        }
    }

    function ze(a, b, c, d) {
        var e = [a.state.modeGen], f = {};
        ye(a, b.text, a.doc.mode, c, function (a, b) {
            e.push(a, b)
        }, f, d);
        for (var g = 0; g < a.state.overlays.length; ++g) {
            var h = a.state.overlays[g], i = 1, j = 0;
            ye(a, b.text, h.mode, !0, function (a, b) {
                for (var c = i; a > j;) {
                    var d = e[i];
                    d > a && e.splice(i, 1, a, e[i + 1], d), i += 2, j = Math.min(a, d)
                }
                if (b)if (h.opaque)e.splice(c, i - c, a, "cm-overlay " + b), i = c + 2; else for (; i > c; c += 2) {
                    var f = e[c + 1];
                    e[c + 1] = (f ? f + " " : "") + "cm-overlay " + b
                }
            }, f)
        }
        return {styles: e, classes: f.bgClass || f.textClass ? f : null}
    }

    function Ae(a, b, c) {
        if (!b.styles || b.styles[0] != a.state.modeGen) {
            var d = ze(a, b, b.stateAfter = Za(a, $e(b)));
            b.styles = d.styles, d.classes ? b.styleClasses = d.classes : b.styleClasses && (b.styleClasses = null), c === a.doc.frontier && a.doc.frontier++
        }
        return b.styles
    }

    function Be(a, b, c, d) {
        var e = a.doc.mode, f = new Hd(b, a.options.tabSize);
        for (f.start = f.pos = d || 0, "" == b && ve(e, c); !f.eol() && f.pos <= a.options.maxHighlightLength;)we(e, f, c), f.start = f.pos
    }

    function Ee(a, b) {
        if (!a || /^\s*$/.test(a))return null;
        var c = b.addModeClass ? De : Ce;
        return c[a] || (c[a] = a.replace(/\S+/g, "cm-$&"))
    }

    function Fe(a, b) {
        var c = dg("span", null, null, f ? "padding-right: .1px" : null), e = {
            pre: dg("pre", [c]),
            content: c,
            col: 0,
            pos: 0,
            cm: a
        };
        b.measure = {};
        for (var g = 0; g <= (b.rest ? b.rest.length : 0); g++) {
            var i, h = g ? b.rest[g - 1] : b.line;
            e.pos = 0, e.addToken = He, (d || f) && a.getOption("lineWrapping") && (e.addToken = Ie(e.addToken)), vg(a.display.measure) && (i = bf(h)) && (e.addToken = Je(e.addToken, i)), e.map = [];
            var j = b != a.display.externalMeasured && $e(h);
            Le(h, e, Ae(a, h, j)), h.styleClasses && (h.styleClasses.bgClass && (e.bgClass = mg(h.styleClasses.bgClass, e.bgClass || "")), h.styleClasses.textClass && (e.textClass = mg(h.styleClasses.textClass, e.textClass || ""))), 0 == e.map.length && e.map.push(0, 0, e.content.appendChild(tg(a.display.measure))), 0 == g ? (b.measure.map = e.map, b.measure.cache = {}) : ((b.measure.maps || (b.measure.maps = [])).push(e.map), (b.measure.caches || (b.measure.caches = [])).push({}))
        }
        return f && /\bcm-tab\b/.test(e.content.lastChild.className) && (e.content.className = "cm-tab-wrap-hack"), Af(a, "renderLine", a, b.line, e.pre), e.pre.className && (e.textClass = mg(e.pre.className, e.textClass || "")), e
    }

    function Ge(a) {
        var b = dg("span", "\u2022", "cm-invalidchar");
        return b.title = "\\u" + a.charCodeAt(0).toString(16), b.setAttribute("aria-label", b.title), b
    }

    function He(a, b, c, f, g, h, i) {
        if (b) {
            var j = a.cm.options.specialChars, k = !1;
            if (j.test(b))for (var l = document.createDocumentFragment(), m = 0; ;) {
                j.lastIndex = m;
                var n = j.exec(b), o = n ? n.index - m : b.length - m;
                if (o) {
                    var p = document.createTextNode(b.slice(m, m + o));
                    d && 9 > e ? l.appendChild(dg("span", [p])) : l.appendChild(p), a.map.push(a.pos, a.pos + o, p), a.col += o, a.pos += o
                }
                if (!n)break;
                if (m += o + 1, "	" == n[0]) {
                    var q = a.cm.options.tabSize, r = q - a.col % q, p = l.appendChild(dg("span", Rf(r), "cm-tab"));
                    p.setAttribute("role", "presentation"), a.col += r
                } else {
                    var p = a.cm.options.specialCharPlaceholder(n[0]);
                    d && 9 > e ? l.appendChild(dg("span", [p])) : l.appendChild(p), a.col += 1
                }
                a.map.push(a.pos, a.pos + 1, p), a.pos++
            } else {
                a.col += b.length;
                var l = document.createTextNode(b);
                a.map.push(a.pos, a.pos + b.length, l), d && 9 > e && (k = !0), a.pos += b.length
            }
            if (c || f || g || k || i) {
                var s = c || "";
                f && (s += f), g && (s += g);
                var t = dg("span", [l], s, i);
                return h && (t.title = h), a.content.appendChild(t)
            }
            a.content.appendChild(l)
        }
    }

    function Ie(a) {
        function b(a) {
            for (var b = " ", c = 0; c < a.length - 2; ++c)b += c % 2 ? " " : "\xa0";
            return b += " "
        }

        return function (c, d, e, f, g, h) {
            a(c, d.replace(/ {3,}/g, b), e, f, g, h)
        }
    }

    function Je(a, b) {
        return function (c, d, e, f, g, h) {
            e = e ? e + " cm-force-border" : "cm-force-border";
            for (var i = c.pos, j = i + d.length; ;) {
                for (var k = 0; k < b.length; k++) {
                    var l = b[k];
                    if (l.to > i && l.from <= i)break
                }
                if (l.to >= j)return a(c, d, e, f, g, h);
                a(c, d.slice(0, l.to - i), e, f, null, h), f = null, d = d.slice(l.to - i), i = l.to
            }
        }
    }

    function Ke(a, b, c, d) {
        var e = !d && c.widgetNode;
        e && (a.map.push(a.pos, a.pos + b, e), a.content.appendChild(e)), a.pos += b
    }

    function Le(a, b, c) {
        var d = a.markedSpans, e = a.text, f = 0;
        if (d)for (var k, l, n, o, p, q, r, h = e.length, i = 0, g = 1, j = "", m = 0; ;) {
            if (m == i) {
                n = o = p = q = l = "", r = null, m = 1 / 0;
                for (var s = [], t = 0; t < d.length; ++t) {
                    var u = d[t], v = u.marker;
                    u.from <= i && (null == u.to || u.to > i) ? (null != u.to && m > u.to && (m = u.to, o = ""), v.className && (n += " " + v.className), v.css && (l = v.css), v.startStyle && u.from == i && (p += " " + v.startStyle), v.endStyle && u.to == m && (o += " " + v.endStyle), v.title && !q && (q = v.title), v.collapsed && (!r || ce(r.marker, v) < 0) && (r = u)) : u.from > i && m > u.from && (m = u.from), "bookmark" == v.type && u.from == i && v.widgetNode && s.push(v)
                }
                if (r && (r.from || 0) == i && (Ke(b, (null == r.to ? h + 1 : r.to) - i, r.marker, null == r.from), null == r.to))return;
                if (!r && s.length)for (var t = 0; t < s.length; ++t)Ke(b, 0, s[t])
            }
            if (i >= h)break;
            for (var w = Math.min(h, m); ;) {
                if (j) {
                    var x = i + j.length;
                    if (!r) {
                        var y = x > w ? j.slice(0, w - i) : j;
                        b.addToken(b, y, k ? k + n : n, p, i + y.length == m ? o : "", q, l)
                    }
                    if (x >= w) {
                        j = j.slice(w - i), i = w;
                        break
                    }
                    i = x, p = ""
                }
                j = e.slice(f, f = c[g++]), k = Ee(c[g++], b.cm.options)
            }
        } else for (var g = 1; g < c.length; g += 2)b.addToken(b, e.slice(f, f = c[g]), Ee(c[g + 1], b.cm.options))
    }

    function Me(a, b) {
        return 0 == b.from.ch && 0 == b.to.ch && "" == Sf(b.text) && (!a.cm || a.cm.options.wholeLineUpdateBefore)
    }

    function Ne(a, b, c, d) {
        function e(a) {
            return c ? c[a] : null
        }

        function f(a, c, e) {
            se(a, c, e, d), Cf(a, "change", a, b)
        }

        function g(a, b) {
            for (var c = a, f = []; b > c; ++c)f.push(new re(j[c], e(c), d));
            return f
        }

        var h = b.from, i = b.to, j = b.text, k = We(a, h.line), l = We(a, i.line), m = Sf(j), n = e(j.length - 1), o = i.line - h.line;
        if (b.full)a.insert(0, g(0, j.length)), a.remove(j.length, a.size - j.length); else if (Me(a, b)) {
            var p = g(0, j.length - 1);
            f(l, l.text, n), o && a.remove(h.line, o), p.length && a.insert(h.line, p)
        } else if (k == l)if (1 == j.length)f(k, k.text.slice(0, h.ch) + m + k.text.slice(i.ch), n); else {
            var p = g(1, j.length - 1);
            p.push(new re(m + k.text.slice(i.ch), n, d)), f(k, k.text.slice(0, h.ch) + j[0], e(0)), a.insert(h.line + 1, p)
        } else if (1 == j.length)f(k, k.text.slice(0, h.ch) + j[0] + l.text.slice(i.ch), e(0)), a.remove(h.line + 1, o); else {
            f(k, k.text.slice(0, h.ch) + j[0], e(0)), f(l, m + l.text.slice(i.ch), n);
            var p = g(1, j.length - 1);
            o > 1 && a.remove(h.line + 1, o - 1), a.insert(h.line + 1, p)
        }
        Cf(a, "change", a, b)
    }

    function Oe(a) {
        this.lines = a, this.parent = null;
        for (var b = 0, c = 0; b < a.length; ++b)a[b].parent = this, c += a[b].height;
        this.height = c
    }

    function Pe(a) {
        this.children = a;
        for (var b = 0, c = 0, d = 0; d < a.length; ++d) {
            var e = a[d];
            b += e.chunkSize(), c += e.height, e.parent = this
        }
        this.size = b, this.height = c, this.parent = null
    }

    function Ue(a, b, c) {
        function d(a, e, f) {
            if (a.linked)for (var g = 0; g < a.linked.length; ++g) {
                var h = a.linked[g];
                if (h.doc != e) {
                    var i = f && h.sharedHist;
                    (!c || i) && (b(h.doc, i), d(h.doc, a, i))
                }
            }
        }

        d(a, null, !0)
    }

    function Ve(a, b) {
        if (b.cm)throw new Error("This document is already in use.");
        a.doc = b, b.cm = a, C(a), y(a), a.options.lineWrapping || I(a), a.options.mode = b.modeOption, Vb(a)
    }

    function We(a, b) {
        if (b -= a.first, 0 > b || b >= a.size)throw new Error("There is no line " + (b + a.first) + " in the document.");
        for (var c = a; !c.lines;)for (var d = 0; ; ++d) {
            var e = c.children[d], f = e.chunkSize();
            if (f > b) {
                c = e;
                break
            }
            b -= f
        }
        return c.lines[b]
    }

    function Xe(a, b, c) {
        var d = [], e = b.line;
        return a.iter(b.line, c.line + 1, function (a) {
            var f = a.text;
            e == c.line && (f = f.slice(0, c.ch)), e == b.line && (f = f.slice(b.ch)), d.push(f), ++e
        }), d
    }

    function Ye(a, b, c) {
        var d = [];
        return a.iter(b, c, function (a) {
            d.push(a.text)
        }), d
    }

    function Ze(a, b) {
        var c = b - a.height;
        if (c)for (var d = a; d; d = d.parent)d.height += c
    }

    function $e(a) {
        if (null == a.parent)return null;
        for (var b = a.parent, c = Uf(b.lines, a), d = b.parent; d; b = d, d = d.parent)for (var e = 0; d.children[e] != b; ++e)c += d.children[e].chunkSize();
        return c + b.first
    }

    function _e(a, b) {
        var c = a.first;
        a:do {
            for (var d = 0; d < a.children.length; ++d) {
                var e = a.children[d], f = e.height;
                if (f > b) {
                    a = e;
                    continue a
                }
                b -= f, c += e.chunkSize()
            }
            return c
        } while (!a.lines);
        for (var d = 0; d < a.lines.length; ++d) {
            var g = a.lines[d], h = g.height;
            if (h > b)break;
            b -= h
        }
        return c + d
    }

    function af(a) {
        a = he(a);
        for (var b = 0, c = a.parent, d = 0; d < c.lines.length; ++d) {
            var e = c.lines[d];
            if (e == a)break;
            b += e.height
        }
        for (var f = c.parent; f; c = f, f = c.parent)for (var d = 0; d < f.children.length; ++d) {
            var g = f.children[d];
            if (g == c)break;
            b += g.height
        }
        return b
    }

    function bf(a) {
        var b = a.order;
        return null == b && (b = a.order = Qg(a.text)), b
    }

    function cf(a) {
        this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = a || 1
    }

    function df(a, b) {
        var c = {from: ra(b.from), to: Sc(b), text: Xe(a, b.from, b.to)};
        return lf(a, c, b.from.line, b.to.line + 1), Ue(a, function (a) {
            lf(a, c, b.from.line, b.to.line + 1)
        }, !0), c
    }

    function ef(a) {
        for (; a.length;) {
            var b = Sf(a);
            if (!b.ranges)break;
            a.pop()
        }
    }

    function ff(a, b) {
        return b ? (ef(a.done), Sf(a.done)) : a.done.length && !Sf(a.done).ranges ? Sf(a.done) : a.done.length > 1 && !a.done[a.done.length - 2].ranges ? (a.done.pop(), Sf(a.done)) : void 0
    }

    function gf(a, b, c, d) {
        var e = a.history;
        e.undone.length = 0;
        var g, f = +new Date;
        if ((e.lastOp == d || e.lastOrigin == b.origin && b.origin && ("+" == b.origin.charAt(0) && a.cm && e.lastModTime > f - a.cm.options.historyEventDelay || "*" == b.origin.charAt(0))) && (g = ff(e, e.lastOp == d))) {
            var h = Sf(g.changes);
            0 == qa(b.from, b.to) && 0 == qa(b.from, h.to) ? h.to = Sc(b) : g.changes.push(df(a, b))
        } else {
            var i = Sf(e.done);
            for (i && i.ranges || kf(a.sel, e.done), g = {
                changes: [df(a, b)],
                generation: e.generation
            }, e.done.push(g); e.done.length > e.undoDepth;)e.done.shift(), e.done[0].ranges || e.done.shift()
        }
        e.done.push(c), e.generation = ++e.maxGeneration, e.lastModTime = e.lastSelTime = f, e.lastOp = e.lastSelOp = d, e.lastOrigin = e.lastSelOrigin = b.origin, h || Af(a, "historyAdded")
    }

    function hf(a, b, c, d) {
        var e = b.charAt(0);
        return "*" == e || "+" == e && c.ranges.length == d.ranges.length && c.somethingSelected() == d.somethingSelected() && new Date - a.history.lastSelTime <= (a.cm ? a.cm.options.historyEventDelay : 500)
    }

    function jf(a, b, c, d) {
        var e = a.history, f = d && d.origin;
        c == e.lastSelOp || f && e.lastSelOrigin == f && (e.lastModTime == e.lastSelTime && e.lastOrigin == f || hf(a, f, Sf(e.done), b)) ? e.done[e.done.length - 1] = b : kf(b, e.done), e.lastSelTime = +new Date, e.lastSelOrigin = f, e.lastSelOp = c, d && d.clearRedo !== !1 && ef(e.undone)
    }

    function kf(a, b) {
        var c = Sf(b);
        c && c.ranges && c.equals(a) || b.push(a)
    }

    function lf(a, b, c, d) {
        var e = b["spans_" + a.id], f = 0;
        a.iter(Math.max(a.first, c), Math.min(a.first + a.size, d), function (c) {
            c.markedSpans && ((e || (e = b["spans_" + a.id] = {}))[f] = c.markedSpans), ++f
        })
    }

    function mf(a) {
        if (!a)return null;
        for (var c, b = 0; b < a.length; ++b)a[b].marker.explicitlyCleared ? c || (c = a.slice(0, b)) : c && c.push(a[b]);
        return c ? c.length ? c : null : a
    }

    function nf(a, b) {
        var c = b["spans_" + a.id];
        if (!c)return null;
        for (var d = 0, e = []; d < b.text.length; ++d)e.push(mf(c[d]));
        return e
    }

    function of(a, b, c) {
        for (var d = 0, e = []; d < a.length; ++d) {
            var f = a[d];
            if (f.ranges)e.push(c ? ua.prototype.deepCopy.call(f) : f); else {
                var g = f.changes, h = [];
                e.push({changes: h});
                for (var i = 0; i < g.length; ++i) {
                    var k, j = g[i];
                    if (h.push({
                            from: j.from,
                            to: j.to,
                            text: j.text
                        }), b)for (var l in j)(k = l.match(/^spans_(\d+)$/)) && Uf(b, Number(k[1])) > -1 && (Sf(h)[l] = j[l], delete j[l])
                }
            }
        }
        return e
    }

    function pf(a, b, c, d) {
        c < a.line ? a.line += d : b < a.line && (a.line = b, a.ch = 0)
    }

    function qf(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e], g = !0;
            if (f.ranges) {
                f.copied || (f = a[e] = f.deepCopy(), f.copied = !0);
                for (var h = 0; h < f.ranges.length; h++)pf(f.ranges[h].anchor, b, c, d), pf(f.ranges[h].head, b, c, d)
            } else {
                for (var h = 0; h < f.changes.length; ++h) {
                    var i = f.changes[h];
                    if (c < i.from.line)i.from = pa(i.from.line + d, i.from.ch), i.to = pa(i.to.line + d, i.to.ch); else if (b <= i.to.line) {
                        g = !1;
                        break
                    }
                }
                g || (a.splice(0, e + 1), e = 0)
            }
        }
    }

    function rf(a, b) {
        var c = b.from.line, d = b.to.line, e = b.text.length - (d - c) - 1;
        qf(a.done, c, d, e), qf(a.undone, c, d, e)
    }

    function uf(a) {
        return null != a.defaultPrevented ? a.defaultPrevented : 0 == a.returnValue
    }

    function wf(a) {
        return a.target || a.srcElement
    }

    function xf(a) {
        var b = a.which;
        return null == b && (1 & a.button ? b = 1 : 2 & a.button ? b = 3 : 4 & a.button && (b = 2)), p && a.ctrlKey && 1 == b && (b = 3), b
    }

    function Cf(a, b) {
        function f(a) {
            return function () {
                a.apply(null, d)
            }
        }

        var c = a._handlers && a._handlers[b];
        if (c) {
            var e, d = Array.prototype.slice.call(arguments, 2);
            Eb ? e = Eb.delayedCallbacks : Bf ? e = Bf : (e = Bf = [], setTimeout(Df, 0));
            for (var g = 0; g < c.length; ++g)e.push(f(c[g]))
        }
    }

    function Df() {
        var a = Bf;
        Bf = null;
        for (var b = 0; b < a.length; ++b)a[b]()
    }

    function Ef(a, b, c) {
        return "string" == typeof b && (b = {
            type: b, preventDefault: function () {
                this.defaultPrevented = !0
            }
        }), Af(a, c || b.type, a, b), uf(b) || b.codemirrorIgnore
    }

    function Ff(a) {
        var b = a._handlers && a._handlers.cursorActivity;
        if (b)for (var c = a.curOp.cursorActivityHandlers || (a.curOp.cursorActivityHandlers = []), d = 0; d < b.length; ++d)-1 == Uf(c, b[d]) && c.push(b[d])
    }

    function Gf(a, b) {
        var c = a._handlers && a._handlers[b];
        return c && c.length > 0
    }

    function Hf(a) {
        a.prototype.on = function (a, b) {
            yf(this, a, b)
        }, a.prototype.off = function (a, b) {
            zf(this, a, b)
        }
    }

    function Nf() {
        this.id = null
    }

    function Pf(a, b, c) {
        for (var d = 0, e = 0; ;) {
            var f = a.indexOf("	", d);
            -1 == f && (f = a.length);
            var g = f - d;
            if (f == a.length || e + g >= b)return d + Math.min(g, b - e);
            if (e += f - d, e += c - e % c, d = f + 1, e >= b)return d
        }
    }

    function Rf(a) {
        for (; Qf.length <= a;)Qf.push(Sf(Qf) + " ");
        return Qf[a]
    }

    function Sf(a) {
        return a[a.length - 1]
    }

    function Uf(a, b) {
        for (var c = 0; c < a.length; ++c)if (a[c] == b)return c;
        return -1
    }

    function Vf(a, b) {
        for (var c = [], d = 0; d < a.length; d++)c[d] = b(a[d], d);
        return c
    }

    function Wf(a, b) {
        var c;
        if (Object.create)c = Object.create(a); else {
            var d = function () {
            };
            d.prototype = a, c = new d
        }
        return b && Xf(b, c), c
    }

    function Xf(a, b, c) {
        b || (b = {});
        for (var d in a)!a.hasOwnProperty(d) || c === !1 && b.hasOwnProperty(d) || (b[d] = a[d]);
        return b
    }

    function Yf(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return function () {
            return a.apply(null, b)
        }
    }

    function _f(a, b) {
        return b ? b.source.indexOf("\\w") > -1 && $f(a) ? !0 : b.test(a) : $f(a)
    }

    function ag(a) {
        for (var b in a)if (a.hasOwnProperty(b) && a[b])return !1;
        return !0
    }

    function cg(a) {
        return a.charCodeAt(0) >= 768 && bg.test(a)
    }

    function dg(a, b, c, d) {
        var e = document.createElement(a);
        if (c && (e.className = c), d && (e.style.cssText = d), "string" == typeof b)e.appendChild(document.createTextNode(b)); else if (b)for (var f = 0; f < b.length; ++f)e.appendChild(b[f]);
        return e
    }

    function fg(a) {
        for (var b = a.childNodes.length; b > 0; --b)a.removeChild(a.firstChild);
        return a
    }

    function gg(a, b) {
        return fg(a).appendChild(b)
    }

    function ig() {
        return document.activeElement
    }

    function jg(a) {
        return new RegExp("(^|\\s)" + a + "(?:$|\\s)\\s*")
    }

    function mg(a, b) {
        for (var c = a.split(" "), d = 0; d < c.length; d++)c[d] && !jg(c[d]).test(b) && (b += " " + c[d]);
        return b
    }

    function ng(a) {
        if (document.body.getElementsByClassName)for (var b = document.body.getElementsByClassName("CodeMirror"), c = 0; c < b.length; c++) {
            var d = b[c].CodeMirror;
            d && a(d)
        }
    }

    function pg() {
        og || (qg(), og = !0)
    }

    function qg() {
        var a;
        yf(window, "resize", function () {
            null == a && (a = setTimeout(function () {
                a = null, ng(jc)
            }, 100))
        }), yf(window, "blur", function () {
            ng(Pc)
        })
    }

    function tg(a) {
        if (null == sg) {
            var b = dg("span", "\u200b");
            gg(a, dg("span", [b, document.createTextNode("x")])), 0 != a.firstChild.offsetHeight && (sg = b.offsetWidth <= 1 && b.offsetHeight > 2 && !(d && 8 > e))
        }
        return sg ? dg("span", "\u200b") : dg("span", "\xa0", null, "display: inline-block; width: 1px; margin-right: -1px")
    }

    function vg(a) {
        if (null != ug)return ug;
        var b = gg(a, document.createTextNode("A\u062eA")), c = eg(b, 0, 1).getBoundingClientRect();
        if (!c || c.left == c.right)return !1;
        var d = eg(b, 1, 2).getBoundingClientRect();
        return ug = d.right - c.right < 3
    }

    function Ag(a) {
        if (null != zg)return zg;
        var b = gg(a, dg("span", "x")), c = b.getBoundingClientRect(), d = eg(b, 0, 1).getBoundingClientRect();
        return zg = Math.abs(c.left - d.left) > 1
    }

    function Cg(a, b, c, d) {
        if (!a)return d(b, c, "ltr");
        for (var e = !1, f = 0; f < a.length; ++f) {
            var g = a[f];
            (g.from < c && g.to > b || b == c && g.to == b) && (d(Math.max(g.from, b), Math.min(g.to, c), 1 == g.level ? "rtl" : "ltr"), e = !0)
        }
        e || d(b, c, "ltr")
    }

    function Dg(a) {
        return a.level % 2 ? a.to : a.from
    }

    function Eg(a) {
        return a.level % 2 ? a.from : a.to
    }

    function Fg(a) {
        var b = bf(a);
        return b ? Dg(b[0]) : 0
    }

    function Gg(a) {
        var b = bf(a);
        return b ? Eg(Sf(b)) : a.text.length
    }

    function Hg(a, b) {
        var c = We(a.doc, b), d = he(c);
        d != c && (b = $e(d));
        var e = bf(d), f = e ? e[0].level % 2 ? Gg(d) : Fg(d) : 0;
        return pa(b, f)
    }

    function Ig(a, b) {
        for (var c, d = We(a.doc, b); c = fe(d);)d = c.find(1, !0).line, b = null;
        var e = bf(d), f = e ? e[0].level % 2 ? Fg(d) : Gg(d) : d.text.length;
        return pa(null == b ? $e(d) : b, f)
    }

    function Jg(a, b) {
        var c = Hg(a, b.line), d = We(a.doc, c.line), e = bf(d);
        if (!e || 0 == e[0].level) {
            var f = Math.max(0, d.text.search(/\S/)), g = b.line == c.line && b.ch <= f && b.ch;
            return pa(c.line, g ? 0 : f)
        }
        return c
    }

    function Kg(a, b, c) {
        var d = a[0].level;
        return b == d ? !0 : c == d ? !1 : c > b
    }

    function Mg(a, b) {
        Lg = null;
        for (var d, c = 0; c < a.length; ++c) {
            var e = a[c];
            if (e.from < b && e.to > b)return c;
            if (e.from == b || e.to == b) {
                if (null != d)return Kg(a, e.level, a[d].level) ? (e.from != e.to && (Lg = d), c) : (e.from != e.to && (Lg = c), d);
                d = c
            }
        }
        return d
    }

    function Ng(a, b, c, d) {
        if (!d)return b + c;
        do b += c; while (b > 0 && cg(a.text.charAt(b)));
        return b
    }

    function Og(a, b, c, d) {
        var e = bf(a);
        if (!e)return Pg(a, b, c, d);
        for (var f = Mg(e, b), g = e[f], h = Ng(a, b, g.level % 2 ? -c : c, d); ;) {
            if (h > g.from && h < g.to)return h;
            if (h == g.from || h == g.to)return Mg(e, h) == f ? h : (g = e[f += c], c > 0 == g.level % 2 ? g.to : g.from);
            if (g = e[f += c], !g)return null;
            h = c > 0 == g.level % 2 ? Ng(a, g.to, -1, d) : Ng(a, g.from, 1, d)
        }
    }

    function Pg(a, b, c, d) {
        var e = b + c;
        if (d)for (; e > 0 && cg(a.text.charAt(e));)e += c;
        return 0 > e || e > a.text.length ? null : e
    }

    var a = /gecko\/\d/i.test(navigator.userAgent), b = /MSIE \d/.test(navigator.userAgent), c = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), d = b || c, e = d && (b ? document.documentMode || 6 : c[1]), f = /WebKit\//.test(navigator.userAgent), g = f && /Qt\/\d+\.\d+/.test(navigator.userAgent), h = /Chrome\//.test(navigator.userAgent), i = /Opera\//.test(navigator.userAgent), j = /Apple Computer/.test(navigator.vendor), k = /KHTML\//.test(navigator.userAgent), l = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent), m = /PhantomJS/.test(navigator.userAgent), n = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent), o = n || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent), p = n || /Mac/.test(navigator.platform), q = /win/i.test(navigator.platform), r = i && navigator.userAgent.match(/Version\/(\d*\.\d*)/);
    r && (r = Number(r[1])), r && r >= 15 && (i = !1, f = !0);
    var s = p && (g || i && (null == r || 12.11 > r)), t = a || d && e >= 9, u = !1, v = !1;
    L.prototype = Xf({
        update: function (a) {
            var b = a.scrollWidth > a.clientWidth + 1, c = a.scrollHeight > a.clientHeight + 1, d = a.nativeBarWidth;
            if (c) {
                this.vert.style.display = "block", this.vert.style.bottom = b ? d + "px" : "0";
                var e = a.viewHeight - (b ? d : 0);
                this.vert.firstChild.style.height = Math.max(0, a.scrollHeight - a.clientHeight + e) + "px"
            } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";
            if (b) {
                this.horiz.style.display = "block", this.horiz.style.right = c ? d + "px" : "0", this.horiz.style.left = a.barLeft + "px";
                var f = a.viewWidth - a.barLeft - (c ? d : 0);
                this.horiz.firstChild.style.width = a.scrollWidth - a.clientWidth + f + "px"
            } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
            return !this.checkedOverlay && a.clientHeight > 0 && (0 == d && this.overlayHack(), this.checkedOverlay = !0), {
                right: c ? d : 0,
                bottom: b ? d : 0
            }
        }, setScrollLeft: function (a) {
            this.horiz.scrollLeft != a && (this.horiz.scrollLeft = a)
        }, setScrollTop: function (a) {
            this.vert.scrollTop != a && (this.vert.scrollTop = a)
        }, overlayHack: function () {
            var a = p && !l ? "12px" : "18px";
            this.horiz.style.minHeight = this.vert.style.minWidth = a;
            var b = this, c = function (a) {
                wf(a) != b.vert && wf(a) != b.horiz && Qb(b.cm, mc)(a)
            };
            yf(this.vert, "mousedown", c), yf(this.horiz, "mousedown", c)
        }, clear: function () {
            var a = this.horiz.parentNode;
            a.removeChild(this.horiz), a.removeChild(this.vert)
        }
    }, L.prototype), M.prototype = Xf({
        update: function () {
            return {bottom: 0, right: 0}
        }, setScrollLeft: function () {
        }, setScrollTop: function () {
        }, clear: function () {
        }
    }, M.prototype), w.scrollbarModel = {"native": L, "null": M}, V.prototype.signal = function (a, b) {
        Gf(a, b) && this.events.push(arguments)
    }, V.prototype.finish = function () {
        for (var a = 0; a < this.events.length; a++)Af.apply(null, this.events[a])
    };
    var pa = w.Pos = function (a, b) {
        return this instanceof pa ? (this.line = a, void(this.ch = b)) : new pa(a, b)
    }, qa = w.cmpPos = function (a, b) {
        return a.line - b.line || a.ch - b.ch
    };
    ua.prototype = {
        primary: function () {
            return this.ranges[this.primIndex]
        }, equals: function (a) {
            if (a == this)return !0;
            if (a.primIndex != this.primIndex || a.ranges.length != this.ranges.length)return !1;
            for (var b = 0; b < this.ranges.length; b++) {
                var c = this.ranges[b], d = a.ranges[b];
                if (0 != qa(c.anchor, d.anchor) || 0 != qa(c.head, d.head))return !1
            }
            return !0
        }, deepCopy: function () {
            for (var a = [], b = 0; b < this.ranges.length; b++)a[b] = new va(ra(this.ranges[b].anchor), ra(this.ranges[b].head));
            return new ua(a, this.primIndex)
        }, somethingSelected: function () {
            for (var a = 0; a < this.ranges.length; a++)if (!this.ranges[a].empty())return !0;
            return !1
        }, contains: function (a, b) {
            b || (b = a);
            for (var c = 0; c < this.ranges.length; c++) {
                var d = this.ranges[c];
                if (qa(b, d.from()) >= 0 && qa(a, d.to()) <= 0)return c
            }
            return -1
        }
    }, va.prototype = {
        from: function () {
            return ta(this.anchor, this.head)
        }, to: function () {
            return sa(this.anchor, this.head)
        }, empty: function () {
            return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
        }
    };
    var Bb, nc, oc, lb = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }, Eb = null, Fb = 0, cc = null, uc = 0, zc = 0, Ac = null;
    d ? Ac = -.53 : a ? Ac = 15 : h ? Ac = -.7 : j && (Ac = -1 / 3);
    var Bc = function (a) {
        var b = a.wheelDeltaX, c = a.wheelDeltaY;
        return null == b && a.detail && a.axis == a.HORIZONTAL_AXIS && (b = a.detail), null == c && a.detail && a.axis == a.VERTICAL_AXIS ? c = a.detail : null == c && (c = a.wheelDelta), {
            x: b,
            y: c
        }
    };
    w.wheelEventPixels = function (a) {
        var b = Bc(a);
        return b.x *= Ac, b.y *= Ac, b
    };
    var Fc = new Nf, Jc = null, Sc = w.changeEnd = function (a) {
        return a.text ? pa(a.from.line + a.text.length - 1, Sf(a.text).length + (1 == a.text.length ? a.from.ch : 0)) : a.to
    };
    w.prototype = {
        constructor: w, focus: function () {
            window.focus(), fc(this), bc(this)
        }, setOption: function (a, b) {
            var c = this.options, d = c[a];
            (c[a] != b || "mode" == a) && (c[a] = b, qd.hasOwnProperty(a) && Qb(this, qd[a])(this, b, d))
        }, getOption: function (a) {
            return this.options[a]
        }, getDoc: function () {
            return this.doc
        }, addKeyMap: function (a, b) {
            this.state.keyMaps[b ? "push" : "unshift"](Gd(a))
        }, removeKeyMap: function (a) {
            for (var b = this.state.keyMaps, c = 0; c < b.length; ++c)if (b[c] == a || b[c].name == a)return b.splice(c, 1), !0
        }, addOverlay: Rb(function (a, b) {
            var c = a.token ? a : w.getMode(this.options, a);
            if (c.startState)throw new Error("Overlays may not be stateful.");
            this.state.overlays.push({mode: c, modeSpec: a, opaque: b && b.opaque}), this.state.modeGen++, Vb(this)
        }), removeOverlay: Rb(function (a) {
            for (var b = this.state.overlays, c = 0; c < b.length; ++c) {
                var d = b[c].modeSpec;
                if (d == a || "string" == typeof a && d.name == a)return b.splice(c, 1), this.state.modeGen++, void Vb(this)
            }
        }), indentLine: Rb(function (a, b, c) {
            "string" != typeof b && "number" != typeof b && (b = null == b ? this.options.smartIndent ? "smart" : "prev" : b ? "add" : "subtract"), Ba(this.doc, a) && kd(this, a, b, c)
        }), indentSelection: Rb(function (a) {
            for (var b = this.doc.sel.ranges, c = -1, d = 0; d < b.length; d++) {
                var e = b[d];
                if (e.empty())e.head.line > c && (kd(this, e.head.line, a, !0), c = e.head.line, d == this.doc.sel.primIndex && id(this)); else {
                    var f = e.from(), g = e.to(), h = Math.max(c, f.line);
                    c = Math.min(this.lastLine(), g.line - (g.ch ? 0 : 1)) + 1;
                    for (var i = h; c > i; ++i)kd(this, i, a);
                    var j = this.doc.sel.ranges;
                    0 == f.ch && b.length == j.length && j[d].from().ch > 0 && Ga(this.doc, d, new va(f, j[d].to()), Kf)
                }
            }
        }), getTokenAt: function (a, b) {
            return xe(this, a, b)
        }, getLineTokens: function (a, b) {
            return xe(this, pa(a), b, !0)
        }, getTokenTypeAt: function (a) {
            a = za(this.doc, a);
            var f, b = Ae(this, We(this.doc, a.line)), c = 0, d = (b.length - 1) / 2, e = a.ch;
            if (0 == e)f = b[2]; else for (; ;) {
                var g = c + d >> 1;
                if ((g ? b[2 * g - 1] : 0) >= e)d = g; else {
                    if (!(b[2 * g + 1] < e)) {
                        f = b[2 * g + 2];
                        break
                    }
                    c = g + 1
                }
            }
            var h = f ? f.indexOf("cm-overlay ") : -1;
            return 0 > h ? f : 0 == h ? null : f.slice(0, h - 1)
        }, getModeAt: function (a) {
            var b = this.doc.mode;
            return b.innerMode ? w.innerMode(b, this.getTokenAt(a).state).mode : b
        }, getHelper: function (a, b) {
            return this.getHelpers(a, b)[0]
        }, getHelpers: function (a, b) {
            var c = [];
            if (!xd.hasOwnProperty(b))return xd;
            var d = xd[b], e = this.getModeAt(a);
            if ("string" == typeof e[b])d[e[b]] && c.push(d[e[b]]); else if (e[b])for (var f = 0; f < e[b].length; f++) {
                var g = d[e[b][f]];
                g && c.push(g)
            } else e.helperType && d[e.helperType] ? c.push(d[e.helperType]) : d[e.name] && c.push(d[e.name]);
            for (var f = 0; f < d._global.length; f++) {
                var h = d._global[f];
                h.pred(e, this) && -1 == Uf(c, h.val) && c.push(h.val)
            }
            return c
        }, getStateAfter: function (a, b) {
            var c = this.doc;
            return a = ya(c, null == a ? c.first + c.size - 1 : a), Za(this, a + 1, b)
        }, cursorCoords: function (a, b) {
            var c, d = this.doc.sel.primary();
            return c = null == a ? d.head : "object" == typeof a ? za(this.doc, a) : a ? d.from() : d.to(), wb(this, c, b || "page")
        }, charCoords: function (a, b) {
            return vb(this, za(this.doc, a), b || "page")
        }, coordsChar: function (a, b) {
            return a = ub(this, a, b || "page"), zb(this, a.left, a.top)
        }, lineAtHeight: function (a, b) {
            return a = ub(this, {top: a, left: 0}, b || "page").top, _e(this.doc, a + this.display.viewOffset)
        }, heightAtLine: function (a, b) {
            var c = !1, d = this.doc.first + this.doc.size - 1;
            a < this.doc.first ? a = this.doc.first : a > d && (a = d, c = !0);
            var e = We(this.doc, a);
            return tb(this, e, {top: 0, left: 0}, b || "page").top + (c ? this.doc.height - af(e) : 0)
        }, defaultTextHeight: function () {
            return Cb(this.display)
        }, defaultCharWidth: function () {
            return Db(this.display)
        }, setGutterMarker: Rb(function (a, b, c) {
            return ld(this.doc, a, "gutter", function (a) {
                var d = a.gutterMarkers || (a.gutterMarkers = {});
                return d[b] = c, !c && ag(d) && (a.gutterMarkers = null), !0
            })
        }), clearGutter: Rb(function (a) {
            var b = this, c = b.doc, d = c.first;
            c.iter(function (c) {
                c.gutterMarkers && c.gutterMarkers[a] && (c.gutterMarkers[a] = null, Wb(b, d, "gutter"), ag(c.gutterMarkers) && (c.gutterMarkers = null)), ++d
            })
        }), addLineWidget: Rb(function (a, b, c) {
            return qe(this, a, b, c)
        }), removeLineWidget: function (a) {
            a.clear()
        }, lineInfo: function (a) {
            if ("number" == typeof a) {
                if (!Ba(this.doc, a))return null;
                var b = a;
                if (a = We(this.doc, a), !a)return null
            } else {
                var b = $e(a);
                if (null == b)return null
            }
            return {
                line: b,
                handle: a,
                text: a.text,
                gutterMarkers: a.gutterMarkers,
                textClass: a.textClass,
                bgClass: a.bgClass,
                wrapClass: a.wrapClass,
                widgets: a.widgets
            }
        }, getViewport: function () {
            return {from: this.display.viewFrom, to: this.display.viewTo}
        }, addWidget: function (a, b, c, d, e) {
            var f = this.display;
            a = wb(this, za(this.doc, a));
            var g = a.bottom, h = a.left;
            if (b.style.position = "absolute", b.setAttribute("cm-ignore-events", "true"), f.sizer.appendChild(b), "over" == d)g = a.top; else if ("above" == d || "near" == d) {
                var i = Math.max(f.wrapper.clientHeight, this.doc.height), j = Math.max(f.sizer.clientWidth, f.lineSpace.clientWidth);
                ("above" == d || a.bottom + b.offsetHeight > i) && a.top > b.offsetHeight ? g = a.top - b.offsetHeight : a.bottom + b.offsetHeight <= i && (g = a.bottom), h + b.offsetWidth > j && (h = j - b.offsetWidth)
            }
            b.style.top = g + "px", b.style.left = b.style.right = "", "right" == e ? (h = f.sizer.clientWidth - b.offsetWidth, b.style.right = "0px") : ("left" == e ? h = 0 : "middle" == e && (h = (f.sizer.clientWidth - b.offsetWidth) / 2), b.style.left = h + "px"), c && fd(this, h, g, h + b.offsetWidth, g + b.offsetHeight)
        }, triggerOnKeyDown: Rb(Kc), triggerOnKeyPress: Rb(Nc), triggerOnKeyUp: Mc, execCommand: function (a) {
            return Ad.hasOwnProperty(a) ? Ad[a](this) : void 0
        }, findPosH: function (a, b, c, d) {
            var e = 1;
            0 > b && (e = -1, b = -b);
            for (var f = 0, g = za(this.doc, a); b > f && (g = nd(this.doc, g, e, c, d), !g.hitSide); ++f);
            return g
        }, moveH: Rb(function (a, b) {
            var c = this;
            c.extendSelectionsBy(function (d) {
                return c.display.shift || c.doc.extend || d.empty() ? nd(c.doc, d.head, a, b, c.options.rtlMoveVisually) : 0 > a ? d.from() : d.to()
            }, Mf)
        }), deleteH: Rb(function (a, b) {
            var c = this.doc.sel, d = this.doc;
            c.somethingSelected() ? d.replaceSelection("", null, "+delete") : md(this, function (c) {
                var e = nd(d, c.head, a, b, !1);
                return 0 > a ? {from: e, to: c.head} : {from: c.head, to: e}
            })
        }), findPosV: function (a, b, c, d) {
            var e = 1, f = d;
            0 > b && (e = -1, b = -b);
            for (var g = 0, h = za(this.doc, a); b > g; ++g) {
                var i = wb(this, h, "div");
                if (null == f ? f = i.left : i.left = f, h = od(this, i, e, c), h.hitSide)break
            }
            return h
        }, moveV: Rb(function (a, b) {
            var c = this, d = this.doc, e = [], f = !c.display.shift && !d.extend && d.sel.somethingSelected();
            if (d.extendSelectionsBy(function (g) {
                    if (f)return 0 > a ? g.from() : g.to();
                    var h = wb(c, g.head, "div");
                    null != g.goalColumn && (h.left = g.goalColumn), e.push(h.left);
                    var i = od(c, h, a, b);
                    return "page" == b && g == d.sel.primary() && hd(c, null, vb(c, i, "div").top - h.top), i
                }, Mf), e.length)for (var g = 0; g < d.sel.ranges.length; g++)d.sel.ranges[g].goalColumn = e[g]
        }), findWordAt: function (a) {
            var b = this.doc, c = We(b, a.line).text, d = a.ch, e = a.ch;
            if (c) {
                var f = this.getHelper(a, "wordChars");
                (a.xRel < 0 || e == c.length) && d ? --d : ++e;
                for (var g = c.charAt(d), h = _f(g, f) ? function (a) {
                    return _f(a, f)
                } : /\s/.test(g) ? function (a) {
                    return /\s/.test(a)
                } : function (a) {
                    return !/\s/.test(a) && !_f(a)
                }; d > 0 && h(c.charAt(d - 1));)--d;
                for (; e < c.length && h(c.charAt(e));)++e
            }
            return new va(pa(a.line, d), pa(a.line, e))
        }, toggleOverwrite: function (a) {
            (null == a || a != this.state.overwrite) && ((this.state.overwrite = !this.state.overwrite) ? lg(this.display.cursorDiv, "CodeMirror-overwrite") : kg(this.display.cursorDiv, "CodeMirror-overwrite"), Af(this, "overwriteToggle", this, this.state.overwrite))
        }, hasFocus: function () {
            return ig() == this.display.input
        }, scrollTo: Rb(function (a, b) {
            (null != a || null != b) && jd(this), null != a && (this.curOp.scrollLeft = a), null != b && (this.curOp.scrollTop = b)
        }), getScrollInfo: function () {
            var a = this.display.scroller;
            return {
                left: a.scrollLeft,
                top: a.scrollTop,
                height: a.scrollHeight - bb(this) - this.display.barHeight,
                width: a.scrollWidth - bb(this) - this.display.barWidth,
                clientHeight: db(this),
                clientWidth: cb(this)
            }
        }, scrollIntoView: Rb(function (a, b) {
            if (null == a ? (a = {
                    from: this.doc.sel.primary().head,
                    to: null
                }, null == b && (b = this.options.cursorScrollMargin)) : "number" == typeof a ? a = {
                    from: pa(a, 0),
                    to: null
                } : null == a.from && (a = {
                    from: a,
                    to: null
                }), a.to || (a.to = a.from), a.margin = b || 0, null != a.from.line)jd(this), this.curOp.scrollToPos = a; else {
                var c = gd(this, Math.min(a.from.left, a.to.left), Math.min(a.from.top, a.to.top) - a.margin, Math.max(a.from.right, a.to.right), Math.max(a.from.bottom, a.to.bottom) + a.margin);
                this.scrollTo(c.scrollLeft, c.scrollTop)
            }
        }), setSize: Rb(function (a, b) {
            function d(a) {
                return "number" == typeof a || /^\d+$/.test(String(a)) ? a + "px" : a
            }

            var c = this;
            null != a && (c.display.wrapper.style.width = d(a)), null != b && (c.display.wrapper.style.height = d(b)), c.options.lineWrapping && pb(this);
            var e = c.display.viewFrom;
            c.doc.iter(e, c.display.viewTo, function (a) {
                if (a.widgets)for (var b = 0; b < a.widgets.length; b++)if (a.widgets[b].noHScroll) {
                    Wb(c, e, "widget");
                    break
                }
                ++e
            }), c.curOp.forceUpdate = !0, Af(c, "refresh", this)
        }), operation: function (a) {
            return Pb(this, a)
        }, refresh: Rb(function () {
            var a = this.display.cachedTextHeight;
            Vb(this), this.curOp.forceUpdate = !0, qb(this), this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop), G(this), (null == a || Math.abs(a - Cb(this.display)) > .5) && C(this), Af(this, "refresh", this)
        }), swapDoc: Rb(function (a) {
            var b = this.doc;
            return b.cm = null, Ve(this, a), qb(this), ec(this), this.scrollTo(a.scrollLeft, a.scrollTop), this.curOp.forceScroll = !0, Cf(this, "swapDoc", this, b), b
        }), getInputField: function () {
            return this.display.input
        }, getWrapperElement: function () {
            return this.display.wrapper
        }, getScrollerElement: function () {
            return this.display.scroller
        }, getGutterElement: function () {
            return this.display.gutters
        }
    }, Hf(w);
    var pd = w.defaults = {}, qd = w.optionHandlers = {}, sd = w.Init = {
        toString: function () {
            return "CodeMirror.Init"
        }
    };
    rd("value", "", function (a, b) {
        a.setValue(b)
    }, !0), rd("mode", null, function (a, b) {
        a.doc.modeOption = b, y(a)
    }, !0), rd("indentUnit", 2, y, !0), rd("indentWithTabs", !1), rd("smartIndent", !0), rd("tabSize", 4, function (a) {
        z(a), qb(a), Vb(a)
    }, !0), rd("specialChars", /[\t\u0000-\u0019\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g, function (a, b) {
        a.options.specialChars = new RegExp(b.source + (b.test("	") ? "" : "|	"), "g"), a.refresh()
    }, !0), rd("specialCharPlaceholder", Ge, function (a) {
        a.refresh()
    }, !0), rd("electricChars", !0), rd("rtlMoveVisually", !q), rd("wholeLineUpdateBefore", !0), rd("theme", "default", function (a) {
        D(a), E(a)
    }, !0), rd("keyMap", "default", function (a, b, c) {
        var d = Gd(b), e = c != w.Init && Gd(c);
        e && e.detach && e.detach(a, d), d.attach && d.attach(a, e || null)
    }), rd("extraKeys", null), rd("lineWrapping", !1, A, !0), rd("gutters", [], function (a) {
        J(a.options), E(a)
    }, !0), rd("fixedGutter", !0, function (a, b) {
        a.display.gutters.style.left = b ? U(a.display) + "px" : "0", a.refresh()
    }, !0), rd("coverGutterNextToScrollbar", !1, function (a) {
        O(a)
    }, !0), rd("scrollbarStyle", "native", function (a) {
        N(a), O(a), a.display.scrollbars.setScrollTop(a.doc.scrollTop), a.display.scrollbars.setScrollLeft(a.doc.scrollLeft)
    }, !0), rd("lineNumbers", !1, function (a) {
        J(a.options), E(a)
    }, !0), rd("firstLineNumber", 1, E, !0), rd("lineNumberFormatter", function (a) {
        return a
    }, E, !0), rd("showCursorWhenSelecting", !1, Sa, !0), rd("resetSelectionOnContextMenu", !0), rd("readOnly", !1, function (a, b) {
        "nocursor" == b ? (Pc(a), a.display.input.blur(), a.display.disabled = !0) : (a.display.disabled = !1, b || ec(a))
    }), rd("disableInput", !1, function (a, b) {
        b || ec(a)
    }, !0), rd("dragDrop", !0), rd("cursorBlinkRate", 530), rd("cursorScrollMargin", 0), rd("cursorHeight", 1, Sa, !0), rd("singleCursorHeightPerLine", !0, Sa, !0), rd("workTime", 100), rd("workDelay", 100), rd("flattenSpans", !0, z, !0), rd("addModeClass", !1, z, !0), rd("pollInterval", 100), rd("undoDepth", 200, function (a, b) {
        a.doc.history.undoDepth = b
    }), rd("historyEventDelay", 1250), rd("viewportMargin", 10, function (a) {
        a.refresh()
    }, !0), rd("maxHighlightLength", 1e4, z, !0), rd("moveInputWithCursor", !0, function (a, b) {
        b || (a.display.inputDiv.style.top = a.display.inputDiv.style.left = 0)
    }), rd("tabindex", null, function (a, b) {
        a.display.input.tabIndex = b || ""
    }), rd("autofocus", null);
    var td = w.modes = {}, ud = w.mimeModes = {};
    w.defineMode = function (a, b) {
        w.defaults.mode || "null" == a || (w.defaults.mode = a), arguments.length > 2 && (b.dependencies = Array.prototype.slice.call(arguments, 2)), td[a] = b
    }, w.defineMIME = function (a, b) {
        ud[a] = b
    }, w.resolveMode = function (a) {
        if ("string" == typeof a && ud.hasOwnProperty(a))a = ud[a]; else if (a && "string" == typeof a.name && ud.hasOwnProperty(a.name)) {
            var b = ud[a.name];
            "string" == typeof b && (b = {name: b}), a = Wf(b, a), a.name = b.name
        } else if ("string" == typeof a && /^[\w\-]+\/[\w\-]+\+xml$/.test(a))return w.resolveMode("application/xml");
        return "string" == typeof a ? {name: a} : a || {name: "null"}
    }, w.getMode = function (a, b) {
        var b = w.resolveMode(b), c = td[b.name];
        if (!c)return w.getMode(a, "text/plain");
        var d = c(a, b);
        if (vd.hasOwnProperty(b.name)) {
            var e = vd[b.name];
            for (var f in e)e.hasOwnProperty(f) && (d.hasOwnProperty(f) && (d["_" + f] = d[f]), d[f] = e[f])
        }
        if (d.name = b.name, b.helperType && (d.helperType = b.helperType), b.modeProps)for (var f in b.modeProps)d[f] = b.modeProps[f];
        return d
    }, w.defineMode("null", function () {
        return {
            token: function (a) {
                a.skipToEnd()
            }
        }
    }), w.defineMIME("text/plain", "null");
    var vd = w.modeExtensions = {};
    w.extendMode = function (a, b) {
        var c = vd.hasOwnProperty(a) ? vd[a] : vd[a] = {};
        Xf(b, c)
    }, w.defineExtension = function (a, b) {
        w.prototype[a] = b
    }, w.defineDocExtension = function (a, b) {
        Re.prototype[a] = b
    }, w.defineOption = rd;
    var wd = [];
    w.defineInitHook = function (a) {
        wd.push(a)
    };
    var xd = w.helpers = {};
    w.registerHelper = function (a, b, c) {
        xd.hasOwnProperty(a) || (xd[a] = w[a] = {_global: []}), xd[a][b] = c
    }, w.registerGlobalHelper = function (a, b, c, d) {
        w.registerHelper(a, b, d), xd[a]._global.push({pred: c, val: d})
    };
    var yd = w.copyState = function (a, b) {
        if (b === !0)return b;
        if (a.copyState)return a.copyState(b);
        var c = {};
        for (var d in b) {
            var e = b[d];
            e instanceof Array && (e = e.concat([])), c[d] = e
        }
        return c
    }, zd = w.startState = function (a, b, c) {
        return a.startState ? a.startState(b, c) : !0
    };
    w.innerMode = function (a, b) {
        for (; a.innerMode;) {
            var c = a.innerMode(b);
            if (!c || c.mode == a)break;
            b = c.state, a = c.mode
        }
        return c || {mode: a, state: b}
    };
    var Ad = w.commands = {
        selectAll: function (a) {
            a.setSelection(pa(a.firstLine(), 0), pa(a.lastLine()), Kf)
        }, singleSelection: function (a) {
            a.setSelection(a.getCursor("anchor"), a.getCursor("head"), Kf)
        }, killLine: function (a) {
            md(a, function (b) {
                if (b.empty()) {
                    var c = We(a.doc, b.head.line).text.length;
                    return b.head.ch == c && b.head.line < a.lastLine() ? {
                        from: b.head,
                        to: pa(b.head.line + 1, 0)
                    } : {from: b.head, to: pa(b.head.line, c)}
                }
                return {from: b.from(), to: b.to()}
            })
        }, deleteLine: function (a) {
            md(a, function (b) {
                return {from: pa(b.from().line, 0), to: za(a.doc, pa(b.to().line + 1, 0))}
            })
        }, delLineLeft: function (a) {
            md(a, function (a) {
                return {from: pa(a.from().line, 0), to: a.from()}
            })
        }, delWrappedLineLeft: function (a) {
            md(a, function (b) {
                var c = a.charCoords(b.head, "div").top + 5, d = a.coordsChar({left: 0, top: c}, "div");
                return {from: d, to: b.from()}
            })
        }, delWrappedLineRight: function (a) {
            md(a, function (b) {
                var c = a.charCoords(b.head, "div").top + 5, d = a.coordsChar({
                    left: a.display.lineDiv.offsetWidth + 100,
                    top: c
                }, "div");
                return {from: b.from(), to: d}
            })
        }, undo: function (a) {
            a.undo()
        }, redo: function (a) {
            a.redo()
        }, undoSelection: function (a) {
            a.undoSelection()
        }, redoSelection: function (a) {
            a.redoSelection()
        }, goDocStart: function (a) {
            a.extendSelection(pa(a.firstLine(), 0))
        }, goDocEnd: function (a) {
            a.extendSelection(pa(a.lastLine()))
        }, goLineStart: function (a) {
            a.extendSelectionsBy(function (b) {
                return Hg(a, b.head.line)
            }, {origin: "+move", bias: 1})
        }, goLineStartSmart: function (a) {
            a.extendSelectionsBy(function (b) {
                return Jg(a, b.head)
            }, {origin: "+move", bias: 1})
        }, goLineEnd: function (a) {
            a.extendSelectionsBy(function (b) {
                return Ig(a, b.head.line)
            }, {origin: "+move", bias: -1})
        }, goLineRight: function (a) {
            a.extendSelectionsBy(function (b) {
                var c = a.charCoords(b.head, "div").top + 5;
                return a.coordsChar({left: a.display.lineDiv.offsetWidth + 100, top: c}, "div")
            }, Mf)
        }, goLineLeft: function (a) {
            a.extendSelectionsBy(function (b) {
                var c = a.charCoords(b.head, "div").top + 5;
                return a.coordsChar({left: 0, top: c}, "div")
            }, Mf)
        }, goLineLeftSmart: function (a) {
            a.extendSelectionsBy(function (b) {
                var c = a.charCoords(b.head, "div").top + 5, d = a.coordsChar({left: 0, top: c}, "div");
                return d.ch < a.getLine(d.line).search(/\S/) ? Jg(a, b.head) : d
            }, Mf)
        }, goLineUp: function (a) {
            a.moveV(-1, "line")
        }, goLineDown: function (a) {
            a.moveV(1, "line")
        }, goPageUp: function (a) {
            a.moveV(-1, "page")
        }, goPageDown: function (a) {
            a.moveV(1, "page")
        }, goCharLeft: function (a) {
            a.moveH(-1, "char")
        }, goCharRight: function (a) {
            a.moveH(1, "char")
        }, goColumnLeft: function (a) {
            a.moveH(-1, "column")
        }, goColumnRight: function (a) {
            a.moveH(1, "column")
        }, goWordLeft: function (a) {
            a.moveH(-1, "word")
        }, goGroupRight: function (a) {
            a.moveH(1, "group")
        }, goGroupLeft: function (a) {
            a.moveH(-1, "group")
        }, goWordRight: function (a) {
            a.moveH(1, "word")
        }, delCharBefore: function (a) {
            a.deleteH(-1, "char")
        }, delCharAfter: function (a) {
            a.deleteH(1, "char")
        }, delWordBefore: function (a) {
            a.deleteH(-1, "word")
        }, delWordAfter: function (a) {
            a.deleteH(1, "word")
        }, delGroupBefore: function (a) {
            a.deleteH(-1, "group")
        }, delGroupAfter: function (a) {
            a.deleteH(1, "group")
        }, indentAuto: function (a) {
            a.indentSelection("smart")
        }, indentMore: function (a) {
            a.indentSelection("add")
        }, indentLess: function (a) {
            a.indentSelection("subtract")
        }, insertTab: function (a) {
            a.replaceSelection("	")
        }, insertSoftTab: function (a) {
            for (var b = [], c = a.listSelections(), d = a.options.tabSize, e = 0; e < c.length; e++) {
                var f = c[e].from(), g = Of(a.getLine(f.line), f.ch, d);
                b.push(new Array(d - g % d + 1).join(" "))
            }
            a.replaceSelections(b)
        }, defaultTab: function (a) {
            a.somethingSelected() ? a.indentSelection("add") : a.execCommand("insertTab")
        }, transposeChars: function (a) {
            Pb(a, function () {
                for (var b = a.listSelections(), c = [], d = 0; d < b.length; d++) {
                    var e = b[d].head, f = We(a.doc, e.line).text;
                    if (f)if (e.ch == f.length && (e = new pa(e.line, e.ch - 1)), e.ch > 0)e = new pa(e.line, e.ch + 1), a.replaceRange(f.charAt(e.ch - 1) + f.charAt(e.ch - 2), pa(e.line, e.ch - 2), e, "+transpose"); else if (e.line > a.doc.first) {
                        var g = We(a.doc, e.line - 1).text;
                        g && a.replaceRange(f.charAt(0) + "\n" + g.charAt(g.length - 1), pa(e.line - 1, g.length - 1), pa(e.line, 1), "+transpose")
                    }
                    c.push(new va(e, e))
                }
                a.setSelections(c)
            })
        }, newlineAndIndent: function (a) {
            Pb(a, function () {
                for (var b = a.listSelections().length, c = 0; b > c; c++) {
                    var d = a.listSelections()[c];
                    a.replaceRange("\n", d.anchor, d.head, "+input"), a.indentLine(d.from().line + 1, null, !0), id(a)
                }
            })
        }, toggleOverwrite: function (a) {
            a.toggleOverwrite()
        }
    }, Bd = w.keyMap = {};
    Bd.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        "Shift-Backspace": "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite",
        Esc: "singleSelection"
    }, Bd.pcDefault = {
        "Ctrl-A": "selectAll",
        "Ctrl-D": "deleteLine",
        "Ctrl-Z": "undo",
        "Shift-Ctrl-Z": "redo",
        "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart",
        "Ctrl-End": "goDocEnd",
        "Ctrl-Up": "goLineUp",
        "Ctrl-Down": "goLineDown",
        "Ctrl-Left": "goGroupLeft",
        "Ctrl-Right": "goGroupRight",
        "Alt-Left": "goLineStart",
        "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delGroupBefore",
        "Ctrl-Delete": "delGroupAfter",
        "Ctrl-S": "save",
        "Ctrl-F": "find",
        "Ctrl-G": "findNext",
        "Shift-Ctrl-G": "findPrev",
        "Shift-Ctrl-F": "replace",
        "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess",
        "Ctrl-]": "indentMore",
        "Ctrl-U": "undoSelection",
        "Shift-Ctrl-U": "redoSelection",
        "Alt-U": "redoSelection",
        fallthrough: "basic"
    }, Bd.emacsy = {
        "Ctrl-F": "goCharRight",
        "Ctrl-B": "goCharLeft",
        "Ctrl-P": "goLineUp",
        "Ctrl-N": "goLineDown",
        "Alt-F": "goWordRight",
        "Alt-B": "goWordLeft",
        "Ctrl-A": "goLineStart",
        "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageDown",
        "Shift-Ctrl-V": "goPageUp",
        "Ctrl-D": "delCharAfter",
        "Ctrl-H": "delCharBefore",
        "Alt-D": "delWordAfter",
        "Alt-Backspace": "delWordBefore",
        "Ctrl-K": "killLine",
        "Ctrl-T": "transposeChars"
    }, Bd.macDefault = {
        "Cmd-A": "selectAll",
        "Cmd-D": "deleteLine",
        "Cmd-Z": "undo",
        "Shift-Cmd-Z": "redo",
        "Cmd-Y": "redo",
        "Cmd-Home": "goDocStart",
        "Cmd-Up": "goDocStart",
        "Cmd-End": "goDocEnd",
        "Cmd-Down": "goDocEnd",
        "Alt-Left": "goGroupLeft",
        "Alt-Right": "goGroupRight",
        "Cmd-Left": "goLineLeft",
        "Cmd-Right": "goLineRight",
        "Alt-Backspace": "delGroupBefore",
        "Ctrl-Alt-Backspace": "delGroupAfter",
        "Alt-Delete": "delGroupAfter",
        "Cmd-S": "save",
        "Cmd-F": "find",
        "Cmd-G": "findNext",
        "Shift-Cmd-G": "findPrev",
        "Cmd-Alt-F": "replace",
        "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess",
        "Cmd-]": "indentMore",
        "Cmd-Backspace": "delWrappedLineLeft",
        "Cmd-Delete": "delWrappedLineRight",
        "Cmd-U": "undoSelection",
        "Shift-Cmd-U": "redoSelection",
        "Ctrl-Up": "goDocStart",
        "Ctrl-Down": "goDocEnd",
        fallthrough: ["basic", "emacsy"]
    }, Bd["default"] = p ? Bd.macDefault : Bd.pcDefault, w.normalizeKeyMap = function (a) {
        var b = {};
        for (var c in a)if (a.hasOwnProperty(c)) {
            var d = a[c];
            if (/^(name|fallthrough|(de|at)tach)$/.test(c))continue;
            if ("..." == d) {
                delete a[c];
                continue
            }
            for (var e = Vf(c.split(" "), Cd), f = 0; f < e.length; f++) {
                var g, h;
                f == e.length - 1 ? (h = c, g = d) : (h = e.slice(0, f + 1).join(" "), g = "...");
                var i = b[h];
                if (i) {
                    if (i != g)throw new Error("Inconsistent bindings for " + h)
                } else b[h] = g
            }
            delete a[c]
        }
        for (var j in b)a[j] = b[j];
        return a
    };
    var Dd = w.lookupKey = function (a, b, c, d) {
        b = Gd(b);
        var e = b.call ? b.call(a, d) : b[a];
        if (e === !1)return "nothing";
        if ("..." === e)return "multi";
        if (null != e && c(e))return "handled";
        if (b.fallthrough) {
            if ("[object Array]" != Object.prototype.toString.call(b.fallthrough))return Dd(a, b.fallthrough, c, d);
            for (var f = 0; f < b.fallthrough.length; f++) {
                var g = Dd(a, b.fallthrough[f], c, d);
                if (g)return g
            }
        }
    }, Ed = w.isModifierKey = function (a) {
        var b = "string" == typeof a ? a : Bg[a.keyCode];
        return "Ctrl" == b || "Alt" == b || "Shift" == b || "Mod" == b
    }, Fd = w.keyName = function (a, b) {
        if (i && 34 == a.keyCode && a["char"])return !1;
        var c = Bg[a.keyCode], d = c;
        return null == d || a.altGraphKey ? !1 : (a.altKey && "Alt" != c && (d = "Alt-" + d), (s ? a.metaKey : a.ctrlKey) && "Ctrl" != c && (d = "Ctrl-" + d), (s ? a.ctrlKey : a.metaKey) && "Cmd" != c && (d = "Cmd-" + d), !b && a.shiftKey && "Shift" != c && (d = "Shift-" + d), d)
    };
    w.fromTextArea = function (a, b) {
        function d() {
            a.value = i.getValue()
        }

        if (b = b ? Xf(b) : {}, b.value = a.value, !b.tabindex && a.tabindex && (b.tabindex = a.tabindex), !b.placeholder && a.placeholder && (b.placeholder = a.placeholder), null == b.autofocus) {
            var c = ig();
            b.autofocus = c == a || null != a.getAttribute("autofocus") && c == document.body
        }
        if (a.form && (yf(a.form, "submit", d), !b.leaveSubmitMethodAlone)) {
            var e = a.form, f = e.submit;
            try {
                var g = e.submit = function () {
                    d(), e.submit = f, e.submit(), e.submit = g
                }
            } catch (h) {
            }
        }
        b.finishInit = function (b) {
            b.save = d, b.getTextArea = function () {
                return a
            }, b.toTextArea = function () {
                b.toTextArea = isNaN, d(), a.parentNode.removeChild(b.getWrapperElement()), a.style.display = "", a.form && (zf(a.form, "submit", d), "function" == typeof a.form.submit && (a.form.submit = f))
            }
        }, a.style.display = "none";
        var i = w(function (b) {
            a.parentNode.insertBefore(b, a.nextSibling)
        }, b);
        return i
    };
    var Hd = w.StringStream = function (a, b) {
        this.pos = this.start = 0, this.string = a, this.tabSize = b || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0
    };
    Hd.prototype = {
        eol: function () {
            return this.pos >= this.string.length
        }, sol: function () {
            return this.pos == this.lineStart
        }, peek: function () {
            return this.string.charAt(this.pos) || void 0
        }, next: function () {
            return this.pos < this.string.length ? this.string.charAt(this.pos++) : void 0
        }, eat: function (a) {
            var b = this.string.charAt(this.pos);
            if ("string" == typeof a)var c = b == a; else var c = b && (a.test ? a.test(b) : a(b));
            return c ? (++this.pos, b) : void 0
        }, eatWhile: function (a) {
            for (var b = this.pos; this.eat(a););
            return this.pos > b
        }, eatSpace: function () {
            for (var a = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;
            return this.pos > a
        }, skipToEnd: function () {
            this.pos = this.string.length
        }, skipTo: function (a) {
            var b = this.string.indexOf(a, this.pos);
            return b > -1 ? (this.pos = b, !0) : void 0
        }, backUp: function (a) {
            this.pos -= a
        }, column: function () {
            return this.lastColumnPos < this.start && (this.lastColumnValue = Of(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? Of(this.string, this.lineStart, this.tabSize) : 0)
        }, indentation: function () {
            return Of(this.string, null, this.tabSize) - (this.lineStart ? Of(this.string, this.lineStart, this.tabSize) : 0)
        }, match: function (a, b, c) {
            if ("string" != typeof a) {
                var f = this.string.slice(this.pos).match(a);
                return f && f.index > 0 ? null : (f && b !== !1 && (this.pos += f[0].length), f)
            }
            var d = function (a) {
                return c ? a.toLowerCase() : a
            }, e = this.string.substr(this.pos, a.length);
            return d(e) == d(a) ? (b !== !1 && (this.pos += a.length), !0) : void 0
        }, current: function () {
            return this.string.slice(this.start, this.pos)
        }, hideFirstChars: function (a, b) {
            this.lineStart += a;
            try {
                return b()
            } finally {
                this.lineStart -= a
            }
        }
    };
    var Id = w.TextMarker = function (a, b) {
        this.lines = [], this.type = b, this.doc = a
    };
    Hf(Id), Id.prototype.clear = function () {
        if (!this.explicitlyCleared) {
            var a = this.doc.cm, b = a && !a.curOp;
            if (b && Gb(a), Gf(this, "clear")) {
                var c = this.find();
                c && Cf(this, "clear", c.from, c.to)
            }
            for (var d = null, e = null, f = 0; f < this.lines.length; ++f) {
                var g = this.lines[f], h = Rd(g.markedSpans, this);
                a && !this.collapsed ? Wb(a, $e(g), "text") : a && (null != h.to && (e = $e(g)), null != h.from && (d = $e(g))), g.markedSpans = Sd(g.markedSpans, h), null == h.from && this.collapsed && !le(this.doc, g) && a && Ze(g, Cb(a.display))
            }
            if (a && this.collapsed && !a.options.lineWrapping)for (var f = 0; f < this.lines.length; ++f) {
                var i = he(this.lines[f]), j = H(i);
                j > a.display.maxLineLength && (a.display.maxLine = i, a.display.maxLineLength = j, a.display.maxLineChanged = !0)
            }
            null != d && a && this.collapsed && Vb(a, d, e + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, a && Na(a.doc)), a && Cf(a, "markerCleared", a, this), b && Ib(a), this.parent && this.parent.clear()
        }
    }, Id.prototype.find = function (a, b) {
        null == a && "bookmark" == this.type && (a = 1);
        for (var c, d, e = 0; e < this.lines.length; ++e) {
            var f = this.lines[e], g = Rd(f.markedSpans, this);
            if (null != g.from && (c = pa(b ? f : $e(f), g.from), -1 == a))return c;
            if (null != g.to && (d = pa(b ? f : $e(f), g.to), 1 == a))return d
        }
        return c && {from: c, to: d}
    }, Id.prototype.changed = function () {
        var a = this.find(-1, !0), b = this, c = this.doc.cm;
        a && c && Pb(c, function () {
            var d = a.line, e = $e(a.line), f = ib(c, e);
            if (f && (ob(f), c.curOp.selectionChanged = c.curOp.forceUpdate = !0), c.curOp.updateMaxLine = !0, !le(b.doc, d) && null != b.height) {
                var g = b.height;
                b.height = null;
                var h = pe(b) - g;
                h && Ze(d, d.height + h)
            }
        })
    }, Id.prototype.attachLine = function (a) {
        if (!this.lines.length && this.doc.cm) {
            var b = this.doc.cm.curOp;
            b.maybeHiddenMarkers && -1 != Uf(b.maybeHiddenMarkers, this) || (b.maybeUnhiddenMarkers || (b.maybeUnhiddenMarkers = [])).push(this)
        }
        this.lines.push(a)
    }, Id.prototype.detachLine = function (a) {
        if (this.lines.splice(Uf(this.lines, a), 1), !this.lines.length && this.doc.cm) {
            var b = this.doc.cm.curOp;
            (b.maybeHiddenMarkers || (b.maybeHiddenMarkers = [])).push(this)
        }
    };
    var Jd = 0, Ld = w.SharedTextMarker = function (a, b) {
        this.markers = a, this.primary = b;
        for (var c = 0; c < a.length; ++c)a[c].parent = this
    };
    Hf(Ld), Ld.prototype.clear = function () {
        if (!this.explicitlyCleared) {
            this.explicitlyCleared = !0;
            for (var a = 0; a < this.markers.length; ++a)this.markers[a].clear();
            Cf(this, "clear")
        }
    }, Ld.prototype.find = function (a, b) {
        return this.primary.find(a, b)
    };
    var ne = w.LineWidget = function (a, b, c) {
        if (c)for (var d in c)c.hasOwnProperty(d) && (this[d] = c[d]);
        this.cm = a, this.node = b
    };
    Hf(ne), ne.prototype.clear = function () {
        var a = this.cm, b = this.line.widgets, c = this.line, d = $e(c);
        if (null != d && b) {
            for (var e = 0; e < b.length; ++e)b[e] == this && b.splice(e--, 1);
            b.length || (c.widgets = null);
            var f = pe(this);
            Pb(a, function () {
                oe(a, c, -f), Wb(a, d, "widget"), Ze(c, Math.max(0, c.height - f))
            })
        }
    }, ne.prototype.changed = function () {
        var a = this.height, b = this.cm, c = this.line;
        this.height = null;
        var d = pe(this) - a;
        d && Pb(b, function () {
            b.curOp.forceUpdate = !0, oe(b, c, d), Ze(c, c.height + d)
        })
    };
    var re = w.Line = function (a, b, c) {
        this.text = a, _d(this, b), this.height = c ? c(this) : 1
    };
    Hf(re), re.prototype.lineNo = function () {
        return $e(this)
    };
    var Ce = {}, De = {};
    Oe.prototype = {
        chunkSize: function () {
            return this.lines.length
        }, removeInner: function (a, b) {
            for (var c = a, d = a + b; d > c; ++c) {
                var e = this.lines[c];
                this.height -= e.height, te(e), Cf(e, "delete")
            }
            this.lines.splice(a, b)
        }, collapse: function (a) {
            a.push.apply(a, this.lines)
        }, insertInner: function (a, b, c) {
            this.height += c, this.lines = this.lines.slice(0, a).concat(b).concat(this.lines.slice(a));
            for (var d = 0; d < b.length; ++d)b[d].parent = this
        }, iterN: function (a, b, c) {
            for (var d = a + b; d > a; ++a)if (c(this.lines[a]))return !0
        }
    }, Pe.prototype = {
        chunkSize: function () {
            return this.size
        }, removeInner: function (a, b) {
            this.size -= b;
            for (var c = 0; c < this.children.length; ++c) {
                var d = this.children[c], e = d.chunkSize();
                if (e > a) {
                    var f = Math.min(b, e - a), g = d.height;
                    if (d.removeInner(a, f), this.height -= g - d.height, e == f && (this.children.splice(c--, 1), d.parent = null), 0 == (b -= f))break;
                    a = 0
                } else a -= e
            }
            if (this.size - b < 25 && (this.children.length > 1 || !(this.children[0] instanceof Oe))) {
                var h = [];
                this.collapse(h), this.children = [new Oe(h)], this.children[0].parent = this
            }
        }, collapse: function (a) {
            for (var b = 0; b < this.children.length; ++b)this.children[b].collapse(a)
        }, insertInner: function (a, b, c) {
            this.size += b.length, this.height += c;
            for (var d = 0; d < this.children.length; ++d) {
                var e = this.children[d], f = e.chunkSize();
                if (f >= a) {
                    if (e.insertInner(a, b, c), e.lines && e.lines.length > 50) {
                        for (; e.lines.length > 50;) {
                            var g = e.lines.splice(e.lines.length - 25, 25), h = new Oe(g);
                            e.height -= h.height, this.children.splice(d + 1, 0, h), h.parent = this
                        }
                        this.maybeSpill()
                    }
                    break
                }
                a -= f
            }
        }, maybeSpill: function () {
            if (!(this.children.length <= 10)) {
                var a = this;
                do {
                    var b = a.children.splice(a.children.length - 5, 5), c = new Pe(b);
                    if (a.parent) {
                        a.size -= c.size, a.height -= c.height;
                        var e = Uf(a.parent.children, a);
                        a.parent.children.splice(e + 1, 0, c)
                    } else {
                        var d = new Pe(a.children);
                        d.parent = a, a.children = [d, c], a = d
                    }
                    c.parent = a.parent
                } while (a.children.length > 10);
                a.parent.maybeSpill()
            }
        }, iterN: function (a, b, c) {
            for (var d = 0; d < this.children.length; ++d) {
                var e = this.children[d], f = e.chunkSize();
                if (f > a) {
                    var g = Math.min(b, f - a);
                    if (e.iterN(a, g, c))return !0;
                    if (0 == (b -= g))break;
                    a = 0
                } else a -= f
            }
        }
    };
    var Qe = 0, Re = w.Doc = function (a, b, c) {
        if (!(this instanceof Re))return new Re(a, b, c);
        null == c && (c = 0), Pe.call(this, [new Oe([new re("", null)])]), this.first = c, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.frontier = c;
        var d = pa(c, 0);
        this.sel = xa(d), this.history = new cf(null), this.id = ++Qe, this.modeOption = b, "string" == typeof a && (a = wg(a)), Ne(this, {
            from: d,
            to: d,
            text: a
        }), Ka(this, xa(d), Kf)
    };
    Re.prototype = Wf(Pe.prototype, {
        constructor: Re, iter: function (a, b, c) {
            c ? this.iterN(a - this.first, b - a, c) : this.iterN(this.first, this.first + this.size, a)
        }, insert: function (a, b) {
            for (var c = 0, d = 0; d < b.length; ++d)c += b[d].height;
            this.insertInner(a - this.first, b, c)
        }, remove: function (a, b) {
            this.removeInner(a - this.first, b)
        }, getValue: function (a) {
            var b = Ye(this, this.first, this.first + this.size);
            return a === !1 ? b : b.join(a || "\n")
        }, setValue: Sb(function (a) {
            var b = pa(this.first, 0), c = this.first + this.size - 1;
            Yc(this, {
                from: b,
                to: pa(c, We(this, c).text.length),
                text: wg(a),
                origin: "setValue",
                full: !0
            }, !0), Ka(this, xa(b))
        }), replaceRange: function (a, b, c, d) {
            b = za(this, b), c = c ? za(this, c) : b, cd(this, a, b, c, d)
        }, getRange: function (a, b, c) {
            var d = Xe(this, za(this, a), za(this, b));
            return c === !1 ? d : d.join(c || "\n")
        }, getLine: function (a) {
            var b = this.getLineHandle(a);
            return b && b.text
        }, getLineHandle: function (a) {
            return Ba(this, a) ? We(this, a) : void 0
        }, getLineNumber: function (a) {
            return $e(a)
        }, getLineHandleVisualStart: function (a) {
            return "number" == typeof a && (a = We(this, a)), he(a)
        }, lineCount: function () {
            return this.size
        }, firstLine: function () {
            return this.first
        }, lastLine: function () {
            return this.first + this.size - 1
        }, clipPos: function (a) {
            return za(this, a)
        }, getCursor: function (a) {
            var c, b = this.sel.primary();
            return c = null == a || "head" == a ? b.head : "anchor" == a ? b.anchor : "end" == a || "to" == a || a === !1 ? b.to() : b.from()
        }, listSelections: function () {
            return this.sel.ranges
        }, somethingSelected: function () {
            return this.sel.somethingSelected()
        }, setCursor: Sb(function (a, b, c) {
            Ha(this, za(this, "number" == typeof a ? pa(a, b || 0) : a), null, c)
        }), setSelection: Sb(function (a, b, c) {
            Ha(this, za(this, a), za(this, b || a), c)
        }), extendSelection: Sb(function (a, b, c) {
            Ea(this, za(this, a), b && za(this, b), c)
        }), extendSelections: Sb(function (a, b) {
            Fa(this, Ca(this, a, b))
        }), extendSelectionsBy: Sb(function (a, b) {
            Fa(this, Vf(this.sel.ranges, a), b)
        }), setSelections: Sb(function (a, b, c) {
            if (a.length) {
                for (var d = 0, e = []; d < a.length; d++)e[d] = new va(za(this, a[d].anchor), za(this, a[d].head));
                null == b && (b = Math.min(a.length - 1, this.sel.primIndex)), Ka(this, wa(e, b), c)
            }
        }), addSelection: Sb(function (a, b, c) {
            var d = this.sel.ranges.slice(0);
            d.push(new va(za(this, a), za(this, b || a))), Ka(this, wa(d, d.length - 1), c)
        }), getSelection: function (a) {
            for (var c, b = this.sel.ranges, d = 0; d < b.length; d++) {
                var e = Xe(this, b[d].from(), b[d].to());
                c = c ? c.concat(e) : e
            }
            return a === !1 ? c : c.join(a || "\n")
        }, getSelections: function (a) {
            for (var b = [], c = this.sel.ranges, d = 0; d < c.length; d++) {
                var e = Xe(this, c[d].from(), c[d].to());
                a !== !1 && (e = e.join(a || "\n")), b[d] = e
            }
            return b
        }, replaceSelection: function (a, b, c) {
            for (var d = [], e = 0; e < this.sel.ranges.length; e++)d[e] = a;
            this.replaceSelections(d, b, c || "+input")
        }, replaceSelections: Sb(function (a, b, c) {
            for (var d = [], e = this.sel, f = 0; f < e.ranges.length; f++) {
                var g = e.ranges[f];
                d[f] = {from: g.from(), to: g.to(), text: wg(a[f]), origin: c}
            }
            for (var h = b && "end" != b && Wc(this, d, b), f = d.length - 1; f >= 0; f--)Yc(this, d[f]);
            h ? Ja(this, h) : this.cm && id(this.cm)
        }), undo: Sb(function () {
            $c(this, "undo")
        }), redo: Sb(function () {
            $c(this, "redo")
        }), undoSelection: Sb(function () {
            $c(this, "undo", !0)
        }), redoSelection: Sb(function () {
            $c(this, "redo", !0)
        }), setExtending: function (a) {
            this.extend = a
        }, getExtending: function () {
            return this.extend
        }, historySize: function () {
            for (var a = this.history, b = 0, c = 0, d = 0; d < a.done.length; d++)a.done[d].ranges || ++b;
            for (var d = 0; d < a.undone.length; d++)a.undone[d].ranges || ++c;
            return {undo: b, redo: c}
        }, clearHistory: function () {
            this.history = new cf(this.history.maxGeneration)
        }, markClean: function () {
            this.cleanGeneration = this.changeGeneration(!0)
        }, changeGeneration: function (a) {
            return a && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation
        }, isClean: function (a) {
            return this.history.generation == (a || this.cleanGeneration)
        }, getHistory: function () {
            return {done: of(this.history.done), undone: of(this.history.undone)}
        }, setHistory: function (a) {
            var b = this.history = new cf(this.history.maxGeneration);
            b.done = of(a.done.slice(0), null, !0), b.undone = of(a.undone.slice(0), null, !0)
        }, addLineClass: Sb(function (a, b, c) {
            return ld(this, a, "gutter" == b ? "gutter" : "class", function (a) {
                var d = "text" == b ? "textClass" : "background" == b ? "bgClass" : "gutter" == b ? "gutterClass" : "wrapClass";
                if (a[d]) {
                    if (jg(c).test(a[d]))return !1;
                    a[d] += " " + c
                } else a[d] = c;
                return !0
            })
        }), removeLineClass: Sb(function (a, b, c) {
            return ld(this, a, "gutter" == b ? "gutter" : "class", function (a) {
                var d = "text" == b ? "textClass" : "background" == b ? "bgClass" : "gutter" == b ? "gutterClass" : "wrapClass", e = a[d];
                if (!e)return !1;
                if (null == c)a[d] = null; else {
                    var f = e.match(jg(c));
                    if (!f)return !1;
                    var g = f.index + f[0].length;
                    a[d] = e.slice(0, f.index) + (f.index && g != e.length ? " " : "") + e.slice(g) || null
                }
                return !0
            })
        }), markText: function (a, b, c) {
            return Kd(this, za(this, a), za(this, b), c, "range")
        }, setBookmark: function (a, b) {
            var c = {
                replacedWith: b && (null == b.nodeType ? b.widget : b), insertLeft: b && b.insertLeft,
                clearWhenEmpty: !1, shared: b && b.shared
            };
            return a = za(this, a), Kd(this, a, a, c, "bookmark")
        }, findMarksAt: function (a) {
            a = za(this, a);
            var b = [], c = We(this, a.line).markedSpans;
            if (c)for (var d = 0; d < c.length; ++d) {
                var e = c[d];
                (null == e.from || e.from <= a.ch) && (null == e.to || e.to >= a.ch) && b.push(e.marker.parent || e.marker)
            }
            return b
        }, findMarks: function (a, b, c) {
            a = za(this, a), b = za(this, b);
            var d = [], e = a.line;
            return this.iter(a.line, b.line + 1, function (f) {
                var g = f.markedSpans;
                if (g)for (var h = 0; h < g.length; h++) {
                    var i = g[h];
                    e == a.line && a.ch > i.to || null == i.from && e != a.line || e == b.line && i.from > b.ch || c && !c(i.marker) || d.push(i.marker.parent || i.marker)
                }
                ++e
            }), d
        }, getAllMarks: function () {
            var a = [];
            return this.iter(function (b) {
                var c = b.markedSpans;
                if (c)for (var d = 0; d < c.length; ++d)null != c[d].from && a.push(c[d].marker)
            }), a
        }, posFromIndex: function (a) {
            var b, c = this.first;
            return this.iter(function (d) {
                var e = d.text.length + 1;
                return e > a ? (b = a, !0) : (a -= e, void++c)
            }), za(this, pa(c, b))
        }, indexFromPos: function (a) {
            a = za(this, a);
            var b = a.ch;
            return a.line < this.first || a.ch < 0 ? 0 : (this.iter(this.first, a.line, function (a) {
                b += a.text.length + 1
            }), b)
        }, copy: function (a) {
            var b = new Re(Ye(this, this.first, this.first + this.size), this.modeOption, this.first);
            return b.scrollTop = this.scrollTop, b.scrollLeft = this.scrollLeft, b.sel = this.sel, b.extend = !1, a && (b.history.undoDepth = this.history.undoDepth, b.setHistory(this.getHistory())), b
        }, linkedDoc: function (a) {
            a || (a = {});
            var b = this.first, c = this.first + this.size;
            null != a.from && a.from > b && (b = a.from), null != a.to && a.to < c && (c = a.to);
            var d = new Re(Ye(this, b, c), a.mode || this.modeOption, b);
            return a.sharedHist && (d.history = this.history), (this.linked || (this.linked = [])).push({
                doc: d,
                sharedHist: a.sharedHist
            }), d.linked = [{doc: this, isParent: !0, sharedHist: a.sharedHist}], Od(d, Nd(this)), d
        }, unlinkDoc: function (a) {
            if (a instanceof w && (a = a.doc), this.linked)for (var b = 0; b < this.linked.length; ++b) {
                var c = this.linked[b];
                if (c.doc == a) {
                    this.linked.splice(b, 1), a.unlinkDoc(this), Pd(Nd(this));
                    break
                }
            }
            if (a.history == this.history) {
                var d = [a.id];
                Ue(a, function (a) {
                    d.push(a.id)
                }, !0), a.history = new cf(null), a.history.done = of(this.history.done, d), a.history.undone = of(this.history.undone, d)
            }
        }, iterLinkedDocs: function (a) {
            Ue(this, a)
        }, getMode: function () {
            return this.mode
        }, getEditor: function () {
            return this.cm
        }
    }), Re.prototype.eachLine = Re.prototype.iter;
    var Se = "iter insert remove copy getEditor".split(" ");
    for (var Te in Re.prototype)Re.prototype.hasOwnProperty(Te) && Uf(Se, Te) < 0 && (w.prototype[Te] = function (a) {
        return function () {
            return a.apply(this.doc, arguments)
        }
    }(Re.prototype[Te]));
    Hf(Re);
    var sf = w.e_preventDefault = function (a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }, tf = w.e_stopPropagation = function (a) {
        a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
    }, vf = w.e_stop = function (a) {
        sf(a), tf(a)
    }, yf = w.on = function (a, b, c) {
        if (a.addEventListener)a.addEventListener(b, c, !1); else if (a.attachEvent)a.attachEvent("on" + b, c); else {
            var d = a._handlers || (a._handlers = {}), e = d[b] || (d[b] = []);
            e.push(c)
        }
    }, zf = w.off = function (a, b, c) {
        if (a.removeEventListener)a.removeEventListener(b, c, !1); else if (a.detachEvent)a.detachEvent("on" + b, c); else {
            var d = a._handlers && a._handlers[b];
            if (!d)return;
            for (var e = 0; e < d.length; ++e)if (d[e] == c) {
                d.splice(e, 1);
                break
            }
        }
    }, Af = w.signal = function (a, b) {
        var c = a._handlers && a._handlers[b];
        if (c)for (var d = Array.prototype.slice.call(arguments, 2), e = 0; e < c.length; ++e)c[e].apply(null, d)
    }, Bf = null, If = 30, Jf = w.Pass = {
        toString: function () {
            return "CodeMirror.Pass"
        }
    }, Kf = {scroll: !1}, Lf = {origin: "*mouse"}, Mf = {origin: "+move"};
    Nf.prototype.set = function (a, b) {
        clearTimeout(this.id), this.id = setTimeout(b, a)
    };
    var Of = w.countColumn = function (a, b, c, d, e) {
        null == b && (b = a.search(/[^\s\u00a0]/), -1 == b && (b = a.length));
        for (var f = d || 0, g = e || 0; ;) {
            var h = a.indexOf("	", f);
            if (0 > h || h >= b)return g + (b - f);
            g += h - f, g += c - g % c, f = h + 1
        }
    }, Qf = [""], Tf = function (a) {
        a.select()
    };
    n ? Tf = function (a) {
        a.selectionStart = 0, a.selectionEnd = a.value.length
    } : d && (Tf = function (a) {
        try {
            a.select()
        } catch (b) {
        }
    });
    var eg, Zf = /[\u00df\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/, $f = w.isWordChar = function (a) {
        return /\w/.test(a) || a > "\x80" && (a.toUpperCase() != a.toLowerCase() || Zf.test(a))
    }, bg = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
    eg = document.createRange ? function (a, b, c) {
        var d = document.createRange();
        return d.setEnd(a, c), d.setStart(a, b), d
    } : function (a, b, c) {
        var d = document.body.createTextRange();
        try {
            d.moveToElementText(a.parentNode)
        } catch (e) {
            return d
        }
        return d.collapse(!0), d.moveEnd("character", c), d.moveStart("character", b), d
    };
    var hg = w.contains = function (a, b) {
        if (a.contains)return a.contains(b);
        for (; b = b.parentNode;)if (11 == b.nodeType && (b = b.host), b == a)return !0
    };
    d && 11 > e && (ig = function () {
        try {
            return document.activeElement
        } catch (a) {
            return document.body
        }
    });
    var sg, ug, kg = w.rmClass = function (a, b) {
        var c = a.className, d = jg(b).exec(c);
        if (d) {
            var e = c.slice(d.index + d[0].length);
            a.className = c.slice(0, d.index) + (e ? d[1] + e : "")
        }
    }, lg = w.addClass = function (a, b) {
        var c = a.className;
        jg(b).test(c) || (a.className += (c ? " " : "") + b)
    }, og = !1, rg = function () {
        if (d && 9 > e)return !1;
        var a = dg("div");
        return "draggable" in a || "dragDrop" in a
    }(), wg = w.splitLines = 3 != "\n\nb".split(/\n/).length ? function (a) {
        for (var b = 0, c = [], d = a.length; d >= b;) {
            var e = a.indexOf("\n", b);
            -1 == e && (e = a.length);
            var f = a.slice(b, "\r" == a.charAt(e - 1) ? e - 1 : e), g = f.indexOf("\r");
            -1 != g ? (c.push(f.slice(0, g)), b += g + 1) : (c.push(f), b = e + 1)
        }
        return c
    } : function (a) {
        return a.split(/\r\n?|\n/)
    }, xg = window.getSelection ? function (a) {
        try {
            return a.selectionStart != a.selectionEnd
        } catch (b) {
            return !1
        }
    } : function (a) {
        try {
            var b = a.ownerDocument.selection.createRange()
        } catch (c) {
        }
        return b && b.parentElement() == a ? 0 != b.compareEndPoints("StartToEnd", b) : !1
    }, yg = function () {
        var a = dg("div");
        return "oncopy" in a ? !0 : (a.setAttribute("oncopy", "return;"), "function" == typeof a.oncopy)
    }(), zg = null, Bg = {
        3: "Enter",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        107: "=",
        109: "-",
        127: "Delete",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        63232: "Up",
        63233: "Down",
        63234: "Left",
        63235: "Right",
        63272: "Delete",
        63273: "Home",
        63275: "End",
        63276: "PageUp",
        63277: "PageDown",
        63302: "Insert"
    };
    w.keyNames = Bg, function () {
        for (var a = 0; 10 > a; a++)Bg[a + 48] = Bg[a + 96] = String(a);
        for (var a = 65; 90 >= a; a++)Bg[a] = String.fromCharCode(a);
        for (var a = 1; 12 >= a; a++)Bg[a + 111] = Bg[a + 63235] = "F" + a
    }();
    var Lg, Qg = function () {
        function c(c) {
            return 247 >= c ? a.charAt(c) : c >= 1424 && 1524 >= c ? "R" : c >= 1536 && 1773 >= c ? b.charAt(c - 1536) : c >= 1774 && 2220 >= c ? "r" : c >= 8192 && 8203 >= c ? "w" : 8204 == c ? "b" : "L"
        }

        function j(a, b, c) {
            this.level = a, this.from = b, this.to = c
        }

        var a = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN", b = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm", d = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, e = /[stwN]/, f = /[LRr]/, g = /[Lb1n]/, h = /[1n]/, i = "L";
        return function (a) {
            if (!d.test(a))return !1;
            for (var m, b = a.length, k = [], l = 0; b > l; ++l)k.push(m = c(a.charCodeAt(l)));
            for (var l = 0, n = i; b > l; ++l) {
                var m = k[l];
                "m" == m ? k[l] = n : n = m
            }
            for (var l = 0, o = i; b > l; ++l) {
                var m = k[l];
                "1" == m && "r" == o ? k[l] = "n" : f.test(m) && (o = m, "r" == m && (k[l] = "R"))
            }
            for (var l = 1, n = k[0]; b - 1 > l; ++l) {
                var m = k[l];
                "+" == m && "1" == n && "1" == k[l + 1] ? k[l] = "1" : "," != m || n != k[l + 1] || "1" != n && "n" != n || (k[l] = n), n = m
            }
            for (var l = 0; b > l; ++l) {
                var m = k[l];
                if ("," == m)k[l] = "N"; else if ("%" == m) {
                    for (var p = l + 1; b > p && "%" == k[p]; ++p);
                    for (var q = l && "!" == k[l - 1] || b > p && "1" == k[p] ? "1" : "N", r = l; p > r; ++r)k[r] = q;
                    l = p - 1
                }
            }
            for (var l = 0, o = i; b > l; ++l) {
                var m = k[l];
                "L" == o && "1" == m ? k[l] = "L" : f.test(m) && (o = m)
            }
            for (var l = 0; b > l; ++l)if (e.test(k[l])) {
                for (var p = l + 1; b > p && e.test(k[p]); ++p);
                for (var s = "L" == (l ? k[l - 1] : i), t = "L" == (b > p ? k[p] : i), q = s || t ? "L" : "R", r = l; p > r; ++r)k[r] = q;
                l = p - 1
            }
            for (var v, u = [], l = 0; b > l;)if (g.test(k[l])) {
                var w = l;
                for (++l; b > l && g.test(k[l]); ++l);
                u.push(new j(0, w, l))
            } else {
                var x = l, y = u.length;
                for (++l; b > l && "L" != k[l]; ++l);
                for (var r = x; l > r;)if (h.test(k[r])) {
                    r > x && u.splice(y, 0, new j(1, x, r));
                    var z = r;
                    for (++r; l > r && h.test(k[r]); ++r);
                    u.splice(y, 0, new j(2, z, r)), x = r
                } else++r;
                l > x && u.splice(y, 0, new j(1, x, l))
            }
            return 1 == u[0].level && (v = a.match(/^\s+/)) && (u[0].from = v[0].length, u.unshift(new j(0, 0, v[0].length))), 1 == Sf(u).level && (v = a.match(/\s+$/)) && (Sf(u).to -= v[0].length, u.push(new j(0, b - v[0].length, b))), u[0].level != Sf(u).level && u.push(new j(u[0].level, b, b)), u
        }
    }();
    return w.version = "4.13.0", w
});
