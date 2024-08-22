// fps.js
if (typeof document !== "undefined") {
  /*! FPSMeter 0.3.1 - 9th May 2013 | https://github.com/Darsain/fpsmeter */
  (function (m, j) {
    function s(a, e) {
      for (var g in e)
        try {
          a.style[g] = e[g];
        } catch (j) {}
      return a;
    }
    function H(a) {
      return null == a
        ? String(a)
        : "object" === typeof a || "function" === typeof a
        ? Object.prototype.toString
            .call(a)
            .match(/\s([a-z]+)/i)[1]
            .toLowerCase() || "object"
        : typeof a;
    }
    function R(a, e) {
      if ("array" !== H(e)) return -1;
      if (e.indexOf) return e.indexOf(a);
      for (var g = 0, j = e.length; g < j; g++) if (e[g] === a) return g;
      return -1;
    }
    function I() {
      var a = arguments,
        e;
      for (e in a[1])
        if (a[1].hasOwnProperty(e))
          switch (H(a[1][e])) {
            case "object":
              a[0][e] = I({}, a[0][e], a[1][e]);
              break;
            case "array":
              a[0][e] = a[1][e].slice(0);
              break;
            default:
              a[0][e] = a[1][e];
          }
      return 2 < a.length
        ? I.apply(null, [a[0]].concat(Array.prototype.slice.call(a, 2)))
        : a[0];
    }
    function N(a) {
      a = Math.round(255 * a).toString(16);
      return 1 === a.length ? "0" + a : a;
    }
    function S(a, e, g, j) {
      if (a.addEventListener)
        a[j ? "removeEventListener" : "addEventListener"](e, g, !1);
      else if (a.attachEvent) a[j ? "detachEvent" : "attachEvent"]("on" + e, g);
    }
    function D(a, e) {
      function g(a, b, d, c) {
        return y[0 | a][Math.round(Math.min(((b - d) / (c - d)) * J, J))];
      }
      function r() {
        f.legend.fps !== q &&
          ((f.legend.fps = q), (f.legend[T] = q ? "FPS" : "ms"));
        K = q ? b.fps : b.duration;
        f.count[T] = 999 < K ? "999+" : K.toFixed(99 < K ? 0 : d.decimals);
      }
      function m() {
        z = A();
        L < z - d.threshold &&
          ((b.fps -= b.fps / Math.max(1, (60 * d.smoothing) / d.interval)),
          (b.duration = 1e3 / b.fps));
        for (c = d.history; c--; )
          (E[c] = 0 === c ? b.fps : E[c - 1]),
            (F[c] = 0 === c ? b.duration : F[c - 1]);
        r();
        if (d.heat) {
          if (w.length)
            for (c = w.length; c--; )
              w[c].el.style[h[w[c].name].heatOn] = q
                ? g(h[w[c].name].heatmap, b.fps, 0, d.maxFps)
                : g(h[w[c].name].heatmap, b.duration, d.threshold, 0);
          if (f.graph && h.column.heatOn)
            for (c = u.length; c--; )
              u[c].style[h.column.heatOn] = q
                ? g(h.column.heatmap, E[c], 0, d.maxFps)
                : g(h.column.heatmap, F[c], d.threshold, 0);
        }
        if (f.graph)
          for (p = 0; p < d.history; p++)
            u[p].style.height =
              (q
                ? E[p]
                  ? Math.round((O / d.maxFps) * Math.min(E[p], d.maxFps))
                  : 0
                : F[p]
                ? Math.round((O / d.threshold) * Math.min(F[p], d.threshold))
                : 0) + "px";
      }
      function k() {
        20 > d.interval
          ? ((x = M(k)), m())
          : ((x = setTimeout(k, d.interval)), (P = M(m)));
      }
      function G(a) {
        a = a || window.event;
        a.preventDefault
          ? (a.preventDefault(), a.stopPropagation())
          : ((a.returnValue = !1), (a.cancelBubble = !0));
        b.toggle();
      }
      function U() {
        d.toggleOn && S(f.container, d.toggleOn, G, 1);
        a.removeChild(f.container);
      }
      function V() {
        f.container && U();
        h = D.theme[d.theme];
        y = h.compiledHeatmaps || [];
        if (!y.length && h.heatmaps.length) {
          for (p = 0; p < h.heatmaps.length; p++) {
            y[p] = [];
            for (c = 0; c <= J; c++) {
              var b = y[p],
                e = c,
                g;
              g = (0.33 / J) * c;
              var j = h.heatmaps[p].saturation,
                m = h.heatmaps[p].lightness,
                n = void 0,
                k = void 0,
                l = void 0,
                t = (l = void 0),
                v = (n = k = void 0),
                v = void 0,
                l = 0.5 >= m ? m * (1 + j) : m + j - m * j;
              0 === l
                ? (g = "#000")
                : ((t = 2 * m - l),
                  (k = (l - t) / l),
                  (g *= 6),
                  (n = Math.floor(g)),
                  (v = g - n),
                  (v *= l * k),
                  0 === n || 6 === n
                    ? ((n = l), (k = t + v), (l = t))
                    : 1 === n
                    ? ((n = l - v), (k = l), (l = t))
                    : 2 === n
                    ? ((n = t), (k = l), (l = t + v))
                    : 3 === n
                    ? ((n = t), (k = l - v))
                    : 4 === n
                    ? ((n = t + v), (k = t))
                    : ((n = l), (k = t), (l -= v)),
                  (g = "#" + N(n) + N(k) + N(l)));
              b[e] = g;
            }
          }
          h.compiledHeatmaps = y;
        }
        f.container = s(document.createElement("div"), h.container);
        f.count = f.container.appendChild(
          s(document.createElement("div"), h.count)
        );
        f.legend = f.container.appendChild(
          s(document.createElement("div"), h.legend)
        );
        f.graph = d.graph
          ? f.container.appendChild(s(document.createElement("div"), h.graph))
          : 0;
        w.length = 0;
        for (var q in f) f[q] && h[q].heatOn && w.push({ name: q, el: f[q] });
        u.length = 0;
        if (f.graph) {
          f.graph.style.width =
            d.history * h.column.width +
            (d.history - 1) * h.column.spacing +
            "px";
          for (c = 0; c < d.history; c++)
            (u[c] = f.graph.appendChild(
              s(document.createElement("div"), h.column)
            )),
              (u[c].style.position = "absolute"),
              (u[c].style.bottom = 0),
              (u[c].style.right =
                c * h.column.width + c * h.column.spacing + "px"),
              (u[c].style.width = h.column.width + "px"),
              (u[c].style.height = "0px");
        }
        s(f.container, d);
        r();
        a.appendChild(f.container);
        f.graph && (O = f.graph.clientHeight);
        d.toggleOn &&
          ("click" === d.toggleOn && (f.container.style.cursor = "pointer"),
          S(f.container, d.toggleOn, G));
      }
      "object" === H(a) && a.nodeType === j && ((e = a), (a = document.body));
      a || (a = document.body);
      var b = this,
        d = I({}, D.defaults, e || {}),
        f = {},
        u = [],
        h,
        y,
        J = 100,
        w = [],
        W = 0,
        B = d.threshold,
        Q = 0,
        L = A() - B,
        z,
        E = [],
        F = [],
        x,
        P,
        q = "fps" === d.show,
        O,
        K,
        c,
        p;
      b.options = d;
      b.fps = 0;
      b.duration = 0;
      b.isPaused = 0;
      b.tickStart = function () {
        Q = A();
      };
      b.tick = function () {
        z = A();
        W = z - L;
        B += (W - B) / d.smoothing;
        b.fps = 1e3 / B;
        b.duration = Q < L ? B : z - Q;
        L = z;
      };
      b.pause = function () {
        x && ((b.isPaused = 1), clearTimeout(x), C(x), C(P), (x = P = 0));
        return b;
      };
      b.resume = function () {
        x || ((b.isPaused = 0), k());
        return b;
      };
      b.set = function (a, c) {
        d[a] = c;
        q = "fps" === d.show;
        -1 !== R(a, X) && V();
        -1 !== R(a, Y) && s(f.container, d);
        return b;
      };
      b.showDuration = function () {
        b.set("show", "ms");
        return b;
      };
      b.showFps = function () {
        b.set("show", "fps");
        return b;
      };
      b.toggle = function () {
        b.set("show", q ? "ms" : "fps");
        return b;
      };
      b.hide = function () {
        b.pause();
        f.container.style.display = "none";
        return b;
      };
      b.show = function () {
        b.resume();
        f.container.style.display = "block";
        return b;
      };
      b.destroy = function () {
        b.pause();
        U();
        b.tick = b.tickStart = function () {};
      };
      V();
      k();
    }
    var A,
      r = m.performance;
    A =
      r && (r.now || r.webkitNow)
        ? r[r.now ? "now" : "webkitNow"].bind(r)
        : function () {
            return +new Date();
          };
    for (
      var C = m.cancelAnimationFrame || m.cancelRequestAnimationFrame,
        M = m.requestAnimationFrame,
        r = ["moz", "webkit", "o"],
        G = 0,
        k = 0,
        Z = r.length;
      k < Z && !C;
      ++k
    )
      M =
        (C =
          m[r[k] + "CancelAnimationFrame"] ||
          m[r[k] + "CancelRequestAnimationFrame"]) &&
        m[r[k] + "RequestAnimationFrame"];
    C ||
      ((M = function (a) {
        var e = A(),
          g = Math.max(0, 16 - (e - G));
        G = e + g;
        return m.setTimeout(function () {
          a(e + g);
        }, g);
      }),
      (C = function (a) {
        clearTimeout(a);
      }));
    var T =
      "string" === H(document.createElement("div").textContent)
        ? "textContent"
        : "innerText";
    D.extend = I;
    window.FPSMeter = D;
    D.defaults = {
      interval: 100,
      smoothing: 10,
      show: "fps",
      toggleOn: "click",
      decimals: 1,
      maxFps: 60,
      threshold: 100,
      position: "absolute",
      zIndex: 10,
      left: "5px",
      top: "5px",
      right: "auto",
      bottom: "auto",
      margin: "0 0 0 0",
      theme: "dark",
      heat: 0,
      graph: 0,
      history: 20,
    };
    var X = ["toggleOn", "theme", "heat", "graph", "history"],
      Y = "position zIndex left top right bottom margin".split(" ");
  })(window);
  (function (m, j) {
    j.theme = {};
    var s = (j.theme.base = {
      heatmaps: [],
      container: {
        heatOn: null,
        heatmap: null,
        padding: "5px",
        minWidth: "95px",
        height: "30px",
        lineHeight: "30px",
        textAlign: "right",
        textShadow: "none",
      },
      count: {
        heatOn: null,
        heatmap: null,
        position: "absolute",
        top: 0,
        right: 0,
        padding: "5px 10px",
        height: "30px",
        fontSize: "24px",
        fontFamily: "Consolas, Andale Mono, monospace",
        zIndex: 2,
      },
      legend: {
        heatOn: null,
        heatmap: null,
        position: "absolute",
        top: 0,
        left: 0,
        padding: "5px 10px",
        height: "30px",
        fontSize: "12px",
        lineHeight: "32px",
        fontFamily: "sans-serif",
        textAlign: "left",
        zIndex: 2,
      },
      graph: {
        heatOn: null,
        heatmap: null,
        position: "relative",
        boxSizing: "padding-box",
        MozBoxSizing: "padding-box",
        height: "100%",
        zIndex: 1,
      },
      column: { width: 4, spacing: 1, heatOn: null, heatmap: null },
    });
    j.theme.dark = j.extend({}, s, {
      heatmaps: [{ saturation: 0.8, lightness: 0.8 }],
      container: {
        background: "#222",
        color: "#fff",
        border: "1px solid #1a1a1a",
        textShadow: "1px 1px 0 #222",
      },
      count: { heatOn: "color" },
      column: { background: "#3f3f3f" },
    });
    j.theme.light = j.extend({}, s, {
      heatmaps: [{ saturation: 0.5, lightness: 0.5 }],
      container: {
        color: "#666",
        background: "#fff",
        textShadow:
          "1px 1px 0 rgba(255,255,255,.5), -1px -1px 0 rgba(255,255,255,.5)",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
      },
      count: { heatOn: "color" },
      column: { background: "#eaeaea" },
    });
    j.theme.colorful = j.extend({}, s, {
      heatmaps: [{ saturation: 0.5, lightness: 0.6 }],
      container: {
        heatOn: "backgroundColor",
        background: "#888",
        color: "#fff",
        textShadow: "1px 1px 0 rgba(0,0,0,.2)",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
      },
      column: { background: "#777", backgroundColor: "rgba(0,0,0,.2)" },
    });
    j.theme.transparent = j.extend({}, s, {
      heatmaps: [{ saturation: 0.8, lightness: 0.5 }],
      container: {
        padding: 0,
        color: "#fff",
        textShadow: "1px 1px 0 rgba(0,0,0,.5)",
      },
      count: { padding: "0 5px", height: "40px", lineHeight: "40px" },
      legend: { padding: "0 5px", height: "40px", lineHeight: "42px" },
      graph: { height: "40px" },
      column: {
        width: 5,
        background: "#999",
        heatOn: "backgroundColor",
        opacity: 0.5,
      },
    });
  })(window, FPSMeter);
}

var Fps = pc.createScript("fps");

Fps.prototype.initialize = function () {
  this.fps = new FPSMeter({ heat: true, graph: true });
};

Fps.prototype.update = function (dt) {
  this.fps.tick();
};

// Preloader.js
/* jshint esversion: 6 */
pc.script.createLoadingScreen(function (app) {
  var showSplash = function () {
    if (document.getElementById("application-splash-wrapper")) {
      //wrapper presents, do not create
      return;
    }

    var css = `
            body {
                user-select: none;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                touch-action: none;
                -webkit-touch-action: none;
                -moz-touch-action: none;
                -ms-touch-action: none;
            }            

            #application-splash-wrapper {      
                background-color: black;
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                z-index: 999;
            }
            
            #application-splash {
                position: absolute;
                height: 64px;
                width: 256px;
                left: calc(50% - 128px);
                bottom: 7%;
            }

            #application-splash img {
                width: 100%;
            }
            
            #loaderBar {
                bottom: 0;
                height: 64px;
                width: 0;
                position: absolute;
                background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAACACAYAAAB9V9ELAAAACXBIWXMAAAsSAAALEgHS3X78AAAL20lEQVR4nO3dC2xW5R3H8d9h5Va1LZdwkUqrq8hQRovSbU6ggvfMectmCJlFozAnaNFFTbZwmduYDmfFsIjGgJphNi8TcWObRVqdzqBFEFAUHK0UlSi2JYhkzD3L0563tn3PeW99276n5/tJmtD3ct7n7UPy/53nec5zHGOMAABAuPSjvwEACB8CAAAAIUQAAAAghAgAAACEEAEAAIAQIgAAABBCBAAAAEKIAAAAQAgRAAAACCECAAAAIUQAAAAghAgAAACEEAEAAIAQIgAAABBCBAAAAEKIAAAAQAgRAAAACCECAAAAIUQAAAAghAgAAACEEAEAAIAQIgAAABBCBAAAAEIoq7e+suM4xZIKJRW7DxW6PxHVIewPAEDfU9buG9W5P9ZW+29jzNbe+MaOMaZnPshx7B/gcrfgT++RDwUAIBhq3EDwrDGmR06AuzUAuEV/jlv4c7vtgwAA6DuabRCQtKY7w0C3BADHcWzRr5A0Ke0HBwAgPLZJqjTGrEn3N05rAHAL/xJJBcm+d8So0brgwtZpkuMH/y9tbQIAIFM8+OAfU21Jva2v6QwCaQkA7oK+ymTm9ucvnK8rL/2uiiecrLzh4+V8jRkCAEDfZ75s1qHP3tFb29/Quudf0r33PZnMd7ZrBSrSsXCwywHAcRx7xr84kdcu/uUizbm6TIVF53bpMwEA6CtsINi7e6OeXvcP3X7nqkS/1VJjzJKu/AlSDgCO4+S5l+rFnOcfN6FEv77rRl3x/avVLysn1XYCANDn/ffoPm346+O6+acPqG7vx/G+rl0fUGaMaUrl75JSAHCH/KtjrewfOmK0/vD4/brogh+k0i4AAELLjgr8s+ZxTZu5IN6foNkNAUlPCSS9E6C70C9m8V++4j59sn8XxR8AgBTYdXFTZ8zXsS8+0G0LY9ZSW4ur3dqclKRGANwPWO33fNGEEm3a8Ijyx5bQ3wAApMm/dz2jmZfcFG9a4NpkrhJIeAQgXvEvn3eL3t1WTfEHACDNThl/pXa/vVmzZs2MdeDVyYwEJDQC4M75v+n3vB3yv21BBf0NAEA3smsDli+/I97VAiWJrAmIGwAcxyl09yf2nPNfevcvtKicjXsAAOgpd62s1aK71vt9ml0YWGyMqYvVnJgBIN6lfhdedbH+9vMNdDgAAD1sbmWRHn50j9+Hxr1EMN4agCUUfwAAMs9DFXt0Q3mRX7smuTXcl+8IgHsnv01ezxWcMUV1j73OfwcAAHrZWdePUu0W36sDzvW7o2CsAFDndVOf7KH5+mj9QeUM+oI+BwCglx06OkiFlzpq/MyzLtcbYwq9nsjyetDd3z+q+Dv9s/XcimzlDGyQ0n8XYQAAkKScgUe1fmW+zpnV4PXGAlvTve4bEDUC4C78q/Na9X/dvPP1yPUv0DcAAGSYO9aM0z0r3/NqlL0qoLDzgkCvAOB5d7+cUaeq+bnd9DcAABnITgVMLh+s9/c2ejUu6u6BHQJArLP/xx6Yoh+VsvAPAIBMtfbVIs1e6HlpYNQoQOcAYLfzu6/zuwpOn6K6Ryj+AABkuqJZQ/xGARYaYyojv3QOAJ4r//+8aqIu/+Z2Oh0AgAy39l9Fmn2r5yhAhysC2gKA337/o08r1YerN9PfAAAERNFs31GAtvsEtL8M0PMOQj++ciCX/AEAECC3zhmumxZ7BgBb61vu3td+BCBq+L9/9jB9uv6Icgay6Q8AAEGxrylPY7/neRuAtmmAlnsBuMP/UXP/E0tOpfgDABAwJ+U16bzp+V6NLnBrftsUQJnXqy6b2p/hfwAAAuiKcwerqsaz3bbmb40EgGKvV1TMfIMAAABAAE37xiG/RncYAYgKAENPLFLOgD0EAAAAAuiMUQc0ZMhgNTZGTeV3CABR9/w/7bQxkvG8jhAAAATAmROHqeqlqJsEtdT8LMdxPG8TOKHQcPYPAECATR6fraqXottva78dAfAMAFNOOUwAAAAgwHKP8217YZbfM6NyjxIAAAAIsOmnH/FtfJbfFQCXTXibAAAAQJD51/FiGwDyPJ+i+AMAEGz+tTzPdwqAAAAAQMDFqOX96FsAAMKHEQAAAEKIAAAAQF8Vo5YTAAAA6KtSCQCbG8aqdMwH/J8AACCo4gSAOq8n3tw3XKUnEgAAAAiqmney/Vpe5xsAdjYMkkrpcwAAAst/BKDOdwpgR30/1gEAABBgm7bE3gp4q9cTO9/9mAAAAECA1b590K/xW7OMMU2O40Q988mBDwkAAAAE1L5DeWpsavJsvK39kSmAGnvToA5PHjuiVW+Uat6Zm+l7AAAC5uU9wyV5BgBb89u2AvacBnjoBXYKBgAgiJ597Uu/VrfU/Kz2v3S2/a3dTAMAABAwh/4zSE/+fa9fozsEgGqvVxw7clCraks1bzLTAAAABMXzO/Ml7fFrbUvNbwkAxpg6x3G2SZrU+VXLnjaaV0KfAwAQFL975rBfS7fZmq9OWwFXewWA+nde166DozV+6Ed0PAAAGe6Vffmq3dHg18i2EX/HmNZJfsdxCiV5Thh8Z+p0vXpzDX0OAECGO//efFW95hsATo6MALQFALWGgK1eowBO/2y9sCxfM8e+R78DAJCh7Nn/Obf5Fn87/F8c+aXzVsCVklZ3fofdE+Ca3w/Q/mV0OQAAmaq88vNYLats/0uHEQC1jgLYoYECr3fePneG7p7xIh0PAECG+fWL4/Szh3xH6uuNMYXtH/AKAEskLfZ6d//sYXpr+QCNH8KCQAAAMsWOT0dq4oIDsVqz1BizpP0DXgEgz90kwHMUYETBRB1Ytp1OBwAgA9hNf2b8Nk+1Oz/2a0y9pGK7/3/7B6MCgFpDwByvtQAR02eep+rrquh3AAB62dw/Fenhdb6b/ljXGmPWdH7Qc7N/94W+1/3VbKzSzRvOps8BAOhFd/xlXLziX+NV/OU3AqDWUQB7qcCbsY669CdTtejsl+l7AAB62NodRZr9m5jF3yoxxnje78c3ACjOgkC5+wPM/2GxVlz0Kv0OAEAPaSn+d8ct/guNMZV+T8YMAGoNAXbbwOmxXrNg9tlacSEhAACA7jb3qSI9/Fzc4m+H/stivSCRABDzqoCIyVO+rdoFr9HxAAB0A7va//onRuvJjb63+Y3wXPXfWdwAoK/WA9iRgNxYrzthWL6q7uyn0pEf0PcAAKTJK/vzVb7yc73f0BjvgM2Syvzm/dtLKAAoiRDQb0C2rr64RGuveoV+BwCgC+xZ/682jtU9TyR0L56Ei7+SCQBqDQGXS1oTLwRYx+UM1b03FGrepC0JHx8AALSyC/3mr9qvxuYvEvmL2OI/xxjzbKJ/vqQCgJIYCYgYMaZIN16cqyXTapP6HAAAwsae8T//Xr4WrT2YyHB/RFJn/hFJBwClEALkjghcOu3ruueS3Trp+JjrEgAACJUdB0dqxaYT9FRNwmf8ESkVf6UaAPTV1QE2BExK9r25eUM17awCXfOtw7rg5H3KGXA0pTYAABBE+w7n6eW64areJb24Jamz/fa2ucU/pbPqlANA2wEcx24ycEtXjjFwcLbGjhmp/OFZGjfmOOUOOtbyAwBAX7Fp+5GWb1K1uSEd3+h+Y0xFVw7Q5QCg1hBQ5i4OjLlXAAAA6JJ6d7FfdVcP5HkzoGTZhhhjCu3tAdz5CAAAkD7N7j39C9NR/JWuEYAOB2xdG2CnBcrTemAAAMLpUUkVqc71+0l7AIhwg0CF+5Pw1QIAAKDljN+eTFemu/BHdFsA6PAhrRsIzZF0Wbd/GAAAwbXOrqlLZkOfVPVIAGjPDQN20WBxvLsMAgDQx9W4N9yr7omi316PB4CoBrRuKpTnhgK5/y7u1UYBAJBetshHhvLtIr6mVDbvSadeDwAAAKDnpeUyQAAAECwEAAAAQogAAABACBEAAAAIIQIAAAAhRAAAACCECAAAAIQQAQAAgBAiAAAAEEIEAAAAQogAAABACBEAAAAIIQIAAAAhRAAAACCECAAAAIQQAQAAgBAiAAAAEEIEAAAAQogAAABACBEAAAAIIQIAAAAhRAAAACCECAAAAISNpP8DSDCYfMigobcAAAAASUVORK5CYII=');
                background-repeat: no-repeat;
                background-position: left center;
                background-size: 256px 100%;
                z-index: 10;
            }
            
            #loadingText {
                color: white;
                font-size: 30px;                
                font-weight: bold;
                line-height: 64px;
                bottom: 0;
                left: 0;
                right: 0;
                top: 1px;
                margin: auto;
                position: absolute;
                text-align: center;
                z-index: 100;
            }
                  
            .hide {
               opacity: 0 !important;
               transition: opacity 0.3s ease-in;
            }

            @media (max-width: 480px) {
                 #application-splash {
                     height: 32px;
                     width: 128px;
                     left: calc(50% - 64px);
                 }

                 #loaderBar {
                     background-size: 128px 100%;
                     height: 32px;
                 }
            
                 #loadingText {
                     font-size: 24px;
                     line-height: 32px;
                     top: -25px;
                 }
            }

            @media (max-height: 480px) {
                #logo {
                    left: calc(50% - 150px);
                    width: 300px;
                    height: 150px;
                }
            }
        `;

    var style = document.createElement("style");
    style.type = "text/css";
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    document.head.appendChild(style);

    // splash wrapper
    var wrapper = document.createElement("div");
    wrapper.id = "application-splash-wrapper";
    document.body.appendChild(wrapper);

    // splash
    var splash = document.createElement("div");
    splash.id = "application-splash";
    wrapper.appendChild(splash);
    splash.style.display = "block";

    var loaderBar = document.createElement("div");
    loaderBar.id = "loaderBar";
    splash.appendChild(loaderBar);

    var loadingText = document.createElement("span");
    loadingText.innerHTML = "0%";
    loadingText.id = "loadingText";
    splash.appendChild(loadingText);
  };

  var hideSplash = function () {
    famobi.log("v1.0; ©Famobi/IFGD, 2021");
    var splash = document.getElementById("application-splash-wrapper");
    if (splash && splash.parentElement) {
      splash.parentElement.removeChild(splash);
    }
  };

  var lastPreloaderProgressValue = "";
  var preloaderBar = document.getElementById("loaderBar");
  var preloaderText = document.getElementById("loadingText");

  var setVisibleProgress = function (value) {
    if (typeof displayProgress === "function") {
      stopPreloaderSimulation();
      displayProgress(value);
      if (typeof famobi !== "undefined")
        famobi.setPreloadProgress(Math.floor(value * 99));
    } else {
      preloaderBar = preloaderBar || document.getElementById("loaderBar");
      preloaderText = preloaderText || document.getElementById("loadingText");

      let currentProgressValue = Math.round(value * 100) + "%";
      if (lastPreloaderProgressValue != currentProgressValue) {
        lastPreloaderProgressValue = currentProgressValue;
        if (preloaderBar) preloaderBar.style.width = lastPreloaderProgressValue;
        if (preloaderText) preloaderText.innerHTML = lastPreloaderProgressValue;
        if (typeof famobi !== "undefined")
          famobi.setPreloadProgress(Math.floor(value * 99));
      }
    }
  };

  var skipTitleScreenEnabled =
    window.famobi && window.famobi.hasFeature("skip_title");

  var loadingProgressMultiplier = skipTitleScreenEnabled ? 0.75 : 0.85;
  var levelAssetsProgressValue = skipTitleScreenEnabled ? 0.1 : 0.0;
  var postLoadingProgressValue =
    1 - levelAssetsProgressValue - loadingProgressMultiplier;
  var postLoadingPhase = 1; // 1 means general assets, 2 means level-related assets

  var setProgress = function (value) {
    const displayValueScale = loadingProgressMultiplier;
    const displayValue = Math.min(1, Math.max(0, value)) * displayValueScale;
    setVisibleProgress(displayValue);
  };

  var hidePreloader = function () {
    hideSplash();
  };

  var updatePostLoadingProgress = function (progress) {
    if (postLoadingPhase === 1) {
      setVisibleProgress(
        loadingProgressMultiplier + postLoadingProgressValue * progress
      );
    } else {
      setVisibleProgress(
        loadingProgressMultiplier +
          postLoadingProgressValue +
          levelAssetsProgressValue * progress
      );
    }
  };

  var injectForcedModeProperties = function () {
    if (!isForcedMode()) {
      return;
    }
    famobi.log("Injecting forced mode properties...");
    const forcedModeProperties = getForcedModeProperties();

    if (forcedModeProperties.state.level >= 0) {
      MissionsManager.CURRENT_MISSION = forcedModeProperties.state.level;
      MissionsManager.MAX_UNLOCKED_MISSION = Math.max(
        MissionsManager.MAX_UNLOCKED_MISSION,
        MissionsManager.CURRENT_MISSION
      );
    }

    if (forcedModeProperties.state.coins >= 0) {
      CoinsStorage.getInstance().setTotalCoins(
        forcedModeProperties.state.coins
      );
    }
  };

  var doAPIHandshake = function (startGameCallback) {
    if (isExternalStart()) {
      app.timeScale = 0.0;
      famobi.onRequest("startGame", function () {
        app.timeScale = 1.0;
        if (startGameCallback) startGameCallback();
      });
    } else {
      if (startGameCallback) startGameCallback();
    }

    /* game ready report */
    famobi.gameReady();
  };

  var startLevelDirectly = function () {
    famobi.log(
      "Starting level " + MissionsManager.CURRENT_MISSION + " directly"
    );

    postLoadingPhase = 2;

    app.fire(EventTypes.START_GAMEPLAY_MUSIC);
    MissionsManager.getInstance().launchSelectedMode(
      isEndlessMode(),
      false,
      0.0
    );

    app.once(EventTypes.LEVEL_READY, () => {
      app.off(EventTypes.ASSETS_LOADER_PROGRESS, updatePostLoadingProgress);
      famobi.setPreloadProgress(100);
      hidePreloader();
      app.fire(EventTypes.HIDE_TRANSITION_SCREEN, 0.0, () => {});
      app.timeScale = 0.0;

      doAPIHandshake(() => {
        app.timeScale = 1.0;
      });
    });
  };

  showSplash();

  app.on("preload:end", function () {
    app.off("preload:progress");
  });
  app.on("preload:progress", setProgress);
  app.on("start", function () {
    famobi.log("App started, post loading assets...");
  });
  app.on("postinitialize", () => {
    setTimeout(() => {
      app.fire(EventTypes.SHOW_TRANSITION_SCREEN, 0.0, () => {});
      app.on(EventTypes.ASSETS_LOADER_PROGRESS, updatePostLoadingProgress);

      if (skipTitleScreen()) {
        AssetsLoader.getInstance()
          .loadPendingAssets()
          .then(() => {
            app.fire(EventTypes.APP_LOADED);
            injectForcedModeProperties();
            startLevelDirectly();
          });
      } else {
        /* normal start */

        AssetsLoader.getInstance()
          .loadPendingAssets()
          .then(() => {
            app.off(
              EventTypes.ASSETS_LOADER_PROGRESS,
              updatePostLoadingProgress
            );
            app.fire(EventTypes.APP_LOADED);

            /* game is loaded, send final progress to Famobi API. */
            famobi.setPreloadProgress(100);

            /* inject forced mode properties if needed */
            injectForcedModeProperties();

            /* hide preloader and navigate to next screen */
            hidePreloader();
            app.fire(EventTypes.HIDE_TRANSITION_SCREEN, 0.35, () => {});

            /* api handshake */
            doAPIHandshake(() => {
              app.fire(EventTypes.START_MENU_MUSIC);
              famobi.log("Handshake completed in normal gameplay mode");
            });
          });
      }
    }, 50);
  });
});

// EventTypes.js
var EventTypes = pc.createScript("eventTypes");

/* App */
EventTypes.APP_LOADED = "app:onLoaded";
EventTypes.SAVE_APP = "app:save";
EventTypes.POSTINITIALIZE = "postinitialize";

/* Screen size/scale */
EventTypes.Screen = {
  RESIZED: "app:screen:resized",
  SET_SCALE_BLEND: "app:screen:setScaleBlend",
};

/* Animations */
EventTypes.ANIMATION_END = "animation:end";
EventTypes.ANIMATION_LOOP = "animation:loop";
EventTypes.ANIMATION_END_SEQUENCE = "animation:end_sequence";

/* Audio */
EventTypes.ENABLE_MUSIC = "music:enable";
EventTypes.DISABLE_MUSIC = "music:disable";
EventTypes.ENABLE_SFX = "sfx:enable";
EventTypes.DISABLE_SFX = "sfx:disable";
EventTypes.PLAY_MUSIC = "music:play";
EventTypes.STOP_MUSIC = "music:stop";
EventTypes.PLAY_EXTERNAL_SFX = "sfx:playExternal";
EventTypes.PLAY_SFX = "sfx:play";
EventTypes.STOP_SFX = "sfx:stop";
EventTypes.MUTE_SOUND = "audio:mute";
EventTypes.UNMUTE_SOUND = "audio:unmute";
EventTypes.SOUND_STATE_CHANGED = "sound:stateChanged";
EventTypes.MUSIC_STATE_CHANGED = "music:stateChanged";
EventTypes.START_GAMEPLAY_MUSIC = "music:startGameplayLoop";
EventTypes.START_MENU_MUSIC = "music:startMenuLoop";

/* Level state */
EventTypes.LEVEL_START = "level:start";
EventTypes.LEVEL_END = "level:end";
EventTypes.LEVEL_FINISHED = "level:finished";
EventTypes.LEVEL_EXIT = "level:exit";
EventTypes.LEVEL_READY = "level:ready";

/* Game state controls */
EventTypes.GAMEPLAY_TRANSITION_TO_LAUNCH = "gameplay:delayedLaunch";
EventTypes.GAMEPLAY_PRELOAD_BLOCKS_LIST = "gameplay:preloadBlocksList";
EventTypes.GAMEPLAY_LAUNCH = "gameplay:launch";
EventTypes.GAMEPLAY_PAUSE = "gameplay:pause";
EventTypes.GAMEPLAY_RESUME = "gameplay:resume";
EventTypes.GAMEPLAY_REVIVE = "gameplay:revive";
EventTypes.GAMEPLAY_EXIT = "gameplay:exit";
EventTypes.GAMEPLAY_RESTARTED_EXTERNALLY = "gameplay:restartedExternally";

/* Input */
EventTypes.SWIPE_LEFT = "input:left";
EventTypes.SWIPE_RIGHT = "input:right";
EventTypes.SWIPE_UP = "input:up";
EventTypes.SWIPE_DOWN = "input:down";

/* Blocks */
EventTypes.ENTERED_NEW_BLOCK = "block:entered";
EventTypes.REATTACH_SIDE_BLOCKS_IN_FRONT_ON_JUNCTION_COMPLETED =
  "junction:finished";

/* Gameplay */
EventTypes.OM_NOM_COLLIDED_OBSTACLE = "gameplay:omNomCollidedObstacle";
EventTypes.OM_NOM_LIFT_TO_THE_SECOND_FLOOR =
  "gameplay:omNomLiftToTheSecondFloor";
EventTypes.OM_NOM_DROP_TO_THE_FIRST_FLOOR = "gameplay:omNomDropToTheFirstFloor";

EventTypes.Gameplay = {
  LANE_CHANGED: "gameplay:laneChanged",
  TOSS_NEARBY_OBSTACLES: "gameplay:toss_nearby_obstacles",
  TOSS_OBSTACLES_WITHIN_RANGE: "gameplay:toss_obstacles_within_range",
};

/* Character status */
EventTypes.CharacterStatus = {
  ALIVE: "character:status:alive",
  DEAD: "character:status:dead",
};

/* Character Movement State */
EventTypes.CHARACTER_MOVEMENT_STATE_CHANGED = "character:movementState:changed";
EventTypes.CHARACTER_LANE_STATE_CHANGED = "character:laneState:changed";

/* Character Collisions */
EventTypes.FIND_SIDE_COLLISIONS = "collisions:findSideCollision";
EventTypes.CHARACTER_MINOR_COLLISION_LEFT = "character:leftMinorCollision";
EventTypes.CHARACTER_MINOR_COLLISION_RIGHT = "character:rightMinorCollision";

/* Character Animations */
EventTypes.PLAY_CHARACTER_ANIMATION = "character:animation:play";
EventTypes.PLAY_CHARACTER_ANIMATIONS_CHAIN = "character:animations_chain:play";
EventTypes.SET_CHARACTER_ANIMATION_SPEED = "character:setAnimationSpeed";
EventTypes.PLAY_SCOOTER_ANIMATION = "scooter:playAnimation";
EventTypes.CHARACTER_ANIMATION_FINISHED = "character:animationFinished";

EventTypes.SELECT_CHARACTER_LANE_AFTER_REVIVE = "character:selectLane";

/* Obstacles */
EventTypes.PLAYER_REACHED_CLOSE_TO_TRIGGER =
  "obstcles:playerReachedCloseToTrigger";

/* Game state */
EventTypes.GAME_STATE_CHANGED = "gameState:changed";

EventTypes.CharacterMovement = {
  MOVE_LEFT: "left",
  MOVE_RIGHT: "right",
  JUMP: "jump",
  SLIDE: "slide",
  FALL_INTO_HOLE: "fall_into_hole",
  TELEPORT_TO_LANE: "teleport_to_lane",
  LANDED: "landed",
};

/* Camera */
EventTypes.START_LOBBY_CAMERA = "camera:start:lobby";
EventTypes.START_GAMEPLAY_CAMERA = "camera:start:gameplay";
EventTypes.START_FIRST_PERSON_CAMERA = "camera:start:firstPerson";
EventTypes.START_CHARACTER_PREVIEW_CAMERA = "camera:start:character_preview";
EventTypes.Camera = {
  SET_GAMEPLAY_CAMERA_OFFSET: "camera:gameplay:setOffet",
};

/* Trigger */
EventTypes.TRIGGER_ACTIVATED = "trigger:activated";

/* UI */
EventTypes.SHOW_UI_WINDOW = "ui:showWindow";
EventTypes.UI = {
  UPDATE_MISSION_REWARD_POPUP: "updateMissionRewardPopup",
  SET_COLLLECT_REWARD_POPUP_PARAMS: "setCollectRewardParams",
  SELECT_CHARACTER_IN_CHARACTER_PREVIEW_SCENE: "selectCharacterInPreviewScene",
  UNLOCK_LUCKY_WHEEL_COINS_COUNTER: "unlockLuckyWheelCoinsCounter",
  REQUEST_DAILY_REWARD_POPUP: "requestDailyRewardPopup",
  UPDATE_RESTART_POPUP_CONTENT: "updateRestartContent",
  UPDATE_FREE_RUN_LEADERBOARD: "updateFreeRunLeaderboard",
  SET_CURRENT_FREE_RUN_LEADERBOARD_RANK: "setCurrentFreeRunLeaderboardPosition",
  UPDATE_STUNTS_LEADERBOARD: "updateStuntsLeaderboard",
  SET_CURRENT_STUNTS_LEADERBOARD_RANK: "setCurrentStuntsLeaderboardPosition",
};
EventTypes.SHOW_TRANSITION_SCREEN = "show:transitionScreen";
EventTypes.HIDE_TRANSITION_SCREEN = "hide:transitionScreen";
EventTypes.SHOW_LOADING_OVERLAY = "show:loadingOverlay";
EventTypes.HIDE_LOADING_OVERLAY = "hide:loadingOverlay";
EventTypes.UPDATE_STARS_IN_RESULTS = "updateStarsInResults";
EventTypes.LANGUAGE_CHANGED = "language:changed";

/* Coins */
EventTypes.COIN_PICKED_UP = "coin:pickedUp";
EventTypes.COINS_AMOUNT_CHANGED = "coins:amountChanged";

/* Collectables */
EventTypes.COLLECTABLE_PICKED_UP = "collectable:pickedUp";

/* Effects */
EventTypes.PLAY_HIT_EFFECT = "effects:omNomHit";
EventTypes.PLAY_VICTORY_EFFECT = "effects:victory";
EventTypes.PLAY_STUNT_LANDING_EFFECT = "effects:stuntLanding";

/* Loader */
EventTypes.PRELOAD_LETTERS = "loader:loadLetters";

/* Missions */
EventTypes.MISSION_PANEL_SELECTED = "missionPanel:selected";
EventTypes.SHOW_FREE_RUN_UI = "mission:showFreeRunUI";
EventTypes.DISPLAY_CURRENT_MISSION_TARGET = "mission:displayCurrentTarget";
EventTypes.DISPLAY_UPDATED_CURRENT_MISSION_TARGET =
  "mission:displayUpdatedCurrentTarget";
EventTypes.DISPLAY_YOU_WIN_MESSAGE = "mission:displayYouWindMessage";
EventTypes.SET_CURRENT_MISSION_INDEX = "mission:setCurrentIndex";
EventTypes.MISSION_PROGRESS_UPDATED = "mission:progressUpdated";
EventTypes.INCREASE_PASSED_DISTANCE = "mission:increasePassedDistance";
EventTypes.REPLACE_COLLECTABLE_LETTERS = "mission:replaceCollectableLetters";
EventTypes.FREE_RUN_DISTANCE_RAN = "mission:freeRunDistanceRun";

/* Characters */
EventTypes.CHARACTER_SELECTED = "character:selected";
EventTypes.SELECT_ACTIVE_CHARACTER = "character:setActive";
EventTypes.CHARACTER_UNLOCKED = "character:unlocked";
EventTypes.CHARACTER_SKILL_LEVEL_UPGRADED = "character:skillUpgraded";

/* Poweups */
EventTypes.POWERUP_PICKED_UP = "powerup:pickedUp";
EventTypes.POWERUP_ACTIVATED = "powerup:activated";
EventTypes.POWERUP_DEACTIVATED = "powerup:deactivated";
EventTypes.POWERUP_UPDATE_PROGRESS = "powerup:updateProgress";

/* One Run Location */
EventTypes.SET_ONE_RUN_CHARACTER = "oneRun:setCharacter";

/* Objects pool/cache */
EventTypes.ENTITY_CACHED = "cache:entityCached";
EventTypes.ENTITY_REUSED_FROM_CACHE = "cache:entityReused";

/* Assets Loader */
EventTypes.ASSETS_LOADER_PROGRESS = "assetsLoader:progress";
EventTypes.ASSETS_LOADER_COMPLETE = "assetsLoader:complete";

/* Space fly */
EventTypes.ROCKET_PICKED_UP = "spaceFly:rocketPickedUp";
EventTypes.ROCKET_ACTIVATED = "spaceFly:rocketActivated";
EventTypes.START_SPACE_FLY = "spaceFly:start";
EventTypes.FINISH_SPACE_FLY = "spaceFly:finish";
EventTypes.SPACE_FLY_FINISHED = "spaceFly:finished";
EventTypes.SPACE_FLY_PROGRESS_UPDATE = "spaceFly:updateProgress";
EventTypes.EXIT_SPACE_FLY = "spaceFly:exit";

/* Stunts */
EventTypes.STUNT_STARTED = "stunt:started";
EventTypes.STUNT_PHASE_CHANGED = "stunt:phaseChanged";
EventTypes.STUNT_CANCELED = "stunt:canceled";
EventTypes.STUNT_FINISHED = "stunt:finished";
EventTypes.STUNT_PERFORMED = "stunt:performed";
EventTypes.DISPLAY_STUNT_UI = "stunt:displayUI";

/* Input blocking */
EventTypes.BLOCK_INPUT = "app:inputBlock";
EventTypes.UNBLOCK_INPUT = "app:inputUnblock";

// inputController.js
/* jshint esversion: 6 */
var InputController = pc.createScript("inputController");

InputController.numTouches = 0;
InputController.tapDistanceTolerance = 1;
InputController.clickDistanceTolerance = 5;
InputController.inputPosition = null;

InputController.attributes.add("swipeDistanceTolerance", {
  type: "number",
  default: 30,
});

InputController.attributes.add("swipeDurationTolerance", {
  type: "number",
  default: 500,
});

InputController.prototype.initialize = function () {
  const mouseSupported = this.app.mouse; //!!this.app.mouse;
  const touchSupported = this.app.touch; //!!this.app.touch && !(pc.platform.desktop && mouseSupported);

  if (touchSupported) {
    this.app.touch.on(pc.EVENT_TOUCHSTART, this.onTouchStart, this);
    this.app.touch.on(pc.EVENT_TOUCHMOVE, this.onTouchMove, this);
    this.app.touch.on(pc.EVENT_TOUCHEND, this.onTouchEnd, this);
    this.app.touch.on(pc.EVENT_TOUCHCANCEL, this.onTouchCancel, this);

    this.app.touch.on(pc.EVENT_TOUCHEND, function (event) {
      // This prevents that a mouse click event will be executed after a touch event.
      event.event.preventDefault();
    });
  }

  if (mouseSupported) {
    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
    this.app.mouse.on(pc.EVENT_MOUSEUP, this.onMouseUp, this);
    this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
  }

  if (this.app.keyboard) {
    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
  }

  if (this.app.mouse) {
    this.app.mouse.disableContextMenu();
    this.app.mouse.on(pc.EVENT_MOUSEWHEEL, this.onMouseWheel, this);
  }

  this.on("destroy", this.destroy, this);
};

InputController.prototype.update = function (dt) {};

InputController.prototype.onTouchStart = function (event) {
  if (this.app.applicationPaused) return;

  if (event.touches.length >= 1) {
    this.touchDownParams = {
      id: event.touches[0].id,
      x: event.touches[0].x,
      y: event.touches[0].y,
      timestamp: new Date().getTime(),
    };
    InputController.inputPosition = {
      x: event.touches[0].x,
      y: event.touches[0].y,
      traveledDistance: 0,
    };
    // this.app.fire(EventTypes.INPUT_DOWN, event.touches[0].x, event.touches[0].y);
  }
};

InputController.prototype.onTouchMove = function (event) {
  if (this.app.applicationPaused) return;

  if (event.changedTouches && event.changedTouches[0]) {
    if (
      this.touchDownParams &&
      this.touchDownParams.id === event.changedTouches[0].id
    ) {
      const xDistance = event.changedTouches[0].x - this.touchDownParams.x;
      const yDistance = event.changedTouches[0].y - this.touchDownParams.y;
      const traveledDistance = Math.sqrt(
        xDistance * xDistance + yDistance * yDistance
      );
      const duration = new Date().getTime() - this.touchDownParams.timestamp;
      if (
        traveledDistance > this.swipeDistanceTolerance &&
        duration < this.swipeDurationTolerance
      ) {
        if (Math.abs(yDistance) > Math.abs(xDistance) * 1.1) {
          //vertical swipe
          this.app.fire(
            yDistance > 0 ? EventTypes.SWIPE_DOWN : EventTypes.SWIPE_UP
          );
        } else {
          //horizontal swipe
          this.app.fire(
            xDistance > 0 ? EventTypes.SWIPE_RIGHT : EventTypes.SWIPE_LEFT
          );
        }
        this.touchDownParams = null;
      }
    }
  }
};

InputController.prototype.onTouchEnd = function (event) {
  this.touchDownParams = null;
};

InputController.prototype.onTouchCancel = function (event) {
  this.touchDownParams = null;
};

InputController.prototype.onKeyDown = function (event) {
  if (this.app.applicationPaused) return;

  switch (event.key) {
    case pc.KEY_LEFT:
      this.app.fire(EventTypes.SWIPE_LEFT);
      break;
    case pc.KEY_RIGHT:
      this.app.fire(EventTypes.SWIPE_RIGHT);
      break;
    case pc.KEY_UP:
      this.app.fire(EventTypes.SWIPE_UP);
      break;
    case pc.KEY_DOWN:
      this.app.fire(EventTypes.SWIPE_DOWN);
      break;
  }
};

InputController.prototype.onMouseWheel = function (event) {
  event.event.preventDefault();
};

InputController.prototype.onMouseDown = function (event) {
  if (this.app.applicationPaused) return;
  this.mouseDownParams = {
    x: event.x,
    y: event.y,
    timestamp: new Date().getTime(),
  };
  InputController.inputPosition = {
    x: event.x,
    y: event.y,
    traveledDistance: 0,
  };
};

InputController.prototype.onMouseUp = function (event) {
  this.mouseDownParams = null;

  if (this.app.applicationPaused) return;

  this.app.fire("input:mouseUp", event.x, event.y);
};

InputController.prototype.onMouseMove = function (event) {
  if (this.app.applicationPaused) return;

  if (this.mouseDownParams) {
    const xDistance = event.x - this.mouseDownParams.x;
    const yDistance = event.y - this.mouseDownParams.y;
    const traveledDistance = Math.sqrt(
      xDistance * xDistance + yDistance * yDistance
    );
    const duration = new Date().getTime() - this.mouseDownParams.timestamp;
    if (
      traveledDistance > this.swipeDistanceTolerance &&
      duration < this.swipeDurationTolerance
    ) {
      if (Math.abs(yDistance) > Math.abs(xDistance) * 1.1) {
        //vertical swipe
        this.app.fire(
          yDistance > 0 ? EventTypes.SWIPE_DOWN : EventTypes.SWIPE_UP
        );
      } else {
        //horizontal swipe
        this.app.fire(
          xDistance > 0 ? EventTypes.SWIPE_RIGHT : EventTypes.SWIPE_LEFT
        );
      }
      this.mouseDownParams = null;
    }
  }
};

InputController.prototype.handleTouch = function (x, y) {
  // this.app.fire(EventTypes.INPUT_TAP, {x: x, y: y});
};

InputController.prototype.destroy = function () {
  if (this.app.touch) {
    this.app.touch.off(pc.EVENT_TOUCHSTART, this.onTouchStart, this);
    this.app.touch.off(pc.EVENT_TOUCHMOVE, this.onTouchMove, this);
    this.app.touch.off(pc.EVENT_TOUCHEND, this.onTouchEnd, this);
    this.app.touch.off(pc.EVENT_TOUCHCANCEL, this.onTouchCancel, this);
  }

  if (this.app.mouse) {
    this.app.mouse.off(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
    this.app.mouse.off(pc.EVENT_MOUSEUP, this.onMouseUp, this);
    this.app.mouse.off(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
  }

  if (this.app.keyboard) {
    this.app.keyboard.off(pc.EVENT_KEYDOWN, this.onKeyDown, this);
  }
};

// utils.js
/* jshint esversion: 6 */
var Utils = pc.createScript("utils");

Utils.prototype.initialize = function () {
  Utils.app = this.app;

  this.injectMeshCollisionSystem();
};

Utils.prototype.update = function (dt) {};

Utils.prototype.injectMeshCollisionSystem = function () {};

pc.Entity.prototype.delayedCall = function (durationMS, f, scope) {
  var n = 0;
  while (this["delayedExecuteTween" + n]) {
    n++;
  }
  var id = "delayedExecuteTween" + n;
  var m;
  this[id] = this.tween(m).to(1, durationMS / 1000, pc.Linear);
  this[id].start();

  this[id].once(
    "complete",
    function () {
      f.call(scope);
      this[id] = null;
    },
    this
  );

  return this[id];
};

Utils.raycastAll = function (from, to, results) {
  results = results || [];
  lastResult = this.app.systems.rigidbody.raycastFirst(from, to);
  if (lastResult) {
    if (lastResult.entity) {
      for (var i = 0; i < results.length; i++) {
        if (results[i] === lastResult.entity) {
          return results;
        }
      }
      results.push(lastResult.entity);
      Utils.raycastAll(
        lastResult.point.sub(lastResult.normal.scale(0.001)),
        to,
        results
      );
    }
  }
  return results;
};

/**
 *  Raycast through multiple entities returning RaycastResult instances (entity, point, normal) instead of entities.
 **/
pc.Application.prototype.raycastAllAdvanced = function (from, to, results) {
  results = results || [];
  lastResult = this.systems.rigidbody.raycastFirst(from, to);
  if (lastResult) {
    if (lastResult.entity) {
      // this prevents rays from bouncing off the same entities
      // in a loop causing ammojs to crash
      for (var i = 0; i < results.length; i++) {
        if (results[i].entity === lastResult.entity) {
          return results;
        }
      }
      results.push(lastResult);
      this.raycastAllAdvanced(
        lastResult.point.sub(lastResult.normal.scale(0.001)),
        to,
        results
      );
    }
  }
  return results;
};

pc.Application.prototype.raycastAll = function (from, to, results) {
  if (!this.raycastFiltered) {
    let n = new Ammo.btVector3();
    let t = new Ammo.btVector3();
    let e = function (n, t, e) {
      (this.entity = n), (this.point = t), (this.normal = e);
    };
    pc.Application.prototype.raycastFiltered = function (o, i) {
      n.setValue(o.x, o.y, o.z), t.setValue(i.x, i.y, i.z);
      var l = new Ammo.ClosestRayResultCallback(n, t);
      //l.set_m_collisionFilterGroup(r),
      //l.set_m_collisionFilterMask(a),
      this.systems.rigidbody.dynamicsWorld.rayTest(n, t, l);
      var s = null;
      if (l.hasHit()) {
        var u = l.get_m_collisionObject(),
          c = Ammo.castObject(u, Ammo.btRigidBody),
          m = l.get_m_hitPointWorld(),
          d = l.get_m_hitNormalWorld();
        c &&
          (s = new e(
            c.entity,
            new pc.Vec3(m.x(), m.y(), m.z()),
            new pc.Vec3(d.x(), d.y(), d.z())
          ));
      }
      return Ammo.destroy(l), s;
    };
  }

  results = results || [];
  lastResult = this.raycastFiltered(from, to);
  if (lastResult) {
    if (lastResult.entity) {
      // this prevents rays from bouncing off the same entities
      // in a loop causing ammojs to crash
      for (var i = 0; i < results.length; i++) {
        if (results[i].entity === lastResult.entity) {
          return results;
        }
      }
      results.push(lastResult);
      this.raycastAll(
        lastResult.point.sub(lastResult.normal.scale(0.001)),
        to,
        results
      );
    }
  }
  return results;
};

pc.Entity.prototype.childrenAlphaAppear = function (
  initialAlpha,
  duration,
  sine,
  delay
) {
  for (var i = this.children.length - 1; i > -1; i--) {
    var child = this.children[i];
    if (child instanceof pc.Entity) {
      child.childrenAlphaAppear(initialAlpha, duration, sine, delay);
    }
    if (child.element) {
      var targetAlpha = child.element.opacity;
      child.element.opacity = initialAlpha;
      child
        .tween(child.element)
        .to({ opacity: targetAlpha }, duration, sine)
        .delay(delay)
        .start();
    }
  }
};

pc.GraphicsDevice.prototype.updateClientRect = function () {
  if (window.visualViewport) {
    this.clientRect = this.canvas.getBoundingClientRect();
    this.clientRect.x = window.visualViewport.offsetLeft;
    this.clientRect.y = window.visualViewport.offsetTop;
    this.clientRect.width = window.visualViewport.width;
    this.clientRect.height = window.visualViewport.height;
  } else {
    this.clientRect = this.canvas.getBoundingClientRect();
  }
};

Utils.lerpColor = function (colorA, colorB, progress, targetColor) {
  return targetColor.set(
    colorA.r + (colorB.r - colorA.r) * progress,
    colorA.g + (colorB.g - colorA.g) * progress,
    colorA.b + (colorB.b - colorA.b) * progress,
    1
  );
};

Utils.segmentPointDistance = function (A, B, C) {
  if (!Utils.tempVectors) {
    Utils.tempVectors = {
      d: new pc.Vec3(),
      dScaled: new pc.Vec3(),
      dx1: new pc.Vec3(),
      dx2: new pc.Vec3(),
      v: new pc.Vec3(),
      P: new pc.Vec3(),
      X1: new pc.Vec3(),
      X2: new pc.Vec3(),
    };
  }

  //A - the point
  //B, C - the segment start and end
  Utils.tempVectors.d.sub2(C, B).normalize();
  Utils.tempVectors.v.sub2(A, B);
  const t = Utils.tempVectors.v.dot(Utils.tempVectors.d);
  Utils.tempVectors.P.add2(B, Utils.tempVectors.d.scale(t));
  return Utils.tempVectors.P.distance(A);
};

Utils.checkSegmentSphereIntersection = function (B, C, A, r) {
  if (!Utils.tempVectors) {
    Utils.tempVectors = {
      d: new pc.Vec3(),
      dScaled: new pc.Vec3(),
      dx1: new pc.Vec3(),
      dx2: new pc.Vec3(),
      v: new pc.Vec3(),
      P: new pc.Vec3(),
      X1: new pc.Vec3(),
      X2: new pc.Vec3(),
    };
  }

  //A - the point
  //B, C - the segment start and end
  const lengthBCSquared =
    (B.x - C.x) * (B.x - C.x) +
    (B.y - C.y) * (B.y - C.y) +
    (B.z - C.z) * (B.z - C.z);
  const lengthABSquared =
    (A.x - B.x) * (A.x - B.x) +
    (A.y - B.y) * (A.y - B.y) +
    (A.z - B.z) * (A.z - B.z);
  const lengthACSquared =
    (A.x - C.x) * (A.x - C.x) +
    (A.y - C.y) * (A.y - C.y) +
    (A.z - C.z) * (A.z - C.z);

  //if any of the end points is inside of the sphere, then true
  if (lengthABSquared <= r * r || lengthACSquared <= r * r) {
    return true;
  }

  Utils.tempVectors.d.sub2(C, B).normalize();
  Utils.tempVectors.v.sub2(A, B);
  const t = Utils.tempVectors.v.dot(Utils.tempVectors.d);
  if (t < 0 || t * t > lengthBCSquared) {
    // console.log(`perpendicular point is not on that segment: ${t * t} > ${lengthBCSquared}`);
    return false;
  }
  Utils.tempVectors.dScaled.copy(Utils.tempVectors.d);
  Utils.tempVectors.dx1.copy(Utils.tempVectors.d);
  Utils.tempVectors.dx2.copy(Utils.tempVectors.d);
  Utils.tempVectors.P.add2(B, Utils.tempVectors.dScaled.scale(t));
  const verticalDistance = Utils.tempVectors.P.distance(A);
  if (verticalDistance > r) {
    return false;
  }

  const dx = Math.sqrt(r * r - verticalDistance * verticalDistance);
  const t1 = t + dx;
  const t2 = t - dx;
  return (
    (t1 >= 0 && t1 * t1 <= lengthBCSquared) ||
    (t2 >= 0 && t2 * t2 <= lengthBCSquared)
  );
};

Utils.findSegmentSphereIntersection = function (B, C, A, r) {
  if (!Utils.tempVectors) {
    Utils.tempVectors = {
      d: new pc.Vec3(),
      dScaled: new pc.Vec3(),
      dx1: new pc.Vec3(),
      dx2: new pc.Vec3(),
      v: new pc.Vec3(),
      P: new pc.Vec3(),
      X1: new pc.Vec3(),
      X2: new pc.Vec3(),
    };
  }

  //A - the point
  //B, C - the segment start and end
  const lengthBCSquared =
    (B.x - C.x) * (B.x - C.x) +
    (B.y - C.y) * (B.y - C.y) +
    (B.z - C.z) * (B.z - C.z);
  Utils.tempVectors.d.sub2(C, B).normalize();
  Utils.tempVectors.v.sub2(A, B);
  const t = Utils.tempVectors.v.dot(Utils.tempVectors.d);
  // if(t < 0 || t * t > lengthBCSquared) {
  //     console.log(`perpendicular point is not on that segment: ${t * t} > ${lengthBCSquared}`);
  //     return null;
  // }
  Utils.tempVectors.dScaled.copy(Utils.tempVectors.d);
  Utils.tempVectors.dx1.copy(Utils.tempVectors.d);
  Utils.tempVectors.dx2.copy(Utils.tempVectors.d);
  Utils.tempVectors.P.add2(B, Utils.tempVectors.dScaled.scale(t));
  const verticalDistance = Utils.tempVectors.P.distance(A);
  if (verticalDistance > r) {
    return null;
  }

  const dx = Math.sqrt(r * r - verticalDistance * verticalDistance);
  const t1 = t + dx;
  const t2 = t - dx;

  const results = [];
  if (t1 >= 0 && t1 * t1 <= lengthBCSquared) {
    Utils.tempVectors.X1.add2(
      Utils.tempVectors.P,
      Utils.tempVectors.dx1.scale(dx)
    );
    results.push(Utils.tempVectors.X1);
  }

  if (t2 >= 0 && t2 * t2 <= lengthBCSquared) {
    Utils.tempVectors.X2.add2(
      Utils.tempVectors.P,
      Utils.tempVectors.dx2.scale(-dx)
    );
    results.push(Utils.tempVectors.X2);
  }

  return results.length > 0 ? results : null;
};

Utils.findSpheresCollisionNormal = function (
  centerA,
  radiusA,
  centerB,
  radiusB
) {
  if (centerA.distance(centerB) <= radiusA + radiusB) {
    const direction = new pc.Vec3().sub2(centerB, centerA);
    return direction.normalize();
  }

  return null;
};

Utils.distanceBetween = function (x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
};

Utils.checkContact = function (entityA, entityB) {
  var pos1 = entityA.getPosition();
  var pos2 = entityB.getPosition();
  return (
    Math.sqrt(
      (pos1.x - pos2.x) * (pos1.x - pos2.x) +
        (pos1.z - pos2.z) * (pos1.z - pos2.z)
    ) <=
      (entityA.script.item.collisionDiameter * entityA.collisionScale) / 2 +
        (entityB.script.item.collisionDiameter * entityB.collisionScale) / 2 &&
    Math.abs(pos1.y - pos2.y) <=
      (entityA.script.item.collisionHeight * entityA.collisionScale) / 2 +
        (entityB.script.item.collisionHeight * entityB.collisionScale) / 2
  );
};

Utils.checkContactRough = function (entityA, entityB) {
  var scaleFactor = 1.1;
  var pos1 = entityA.getPosition();
  var pos2 = entityB.getPosition();
  return (
    Math.sqrt(
      (pos1.x - pos2.x) * (pos1.x - pos2.x) +
        (pos1.z - pos2.z) * (pos1.z - pos2.z)
    ) <=
      (entityA.script.item.collisionDiameter *
        entityA.collisionScale *
        scaleFactor) /
        2 +
        (entityB.script.item.collisionDiameter *
          entityB.collisionScale *
          scaleFactor) /
          2 &&
    Math.abs(pos1.y - pos2.y) <=
      (entityA.script.item.collisionHeight *
        entityA.collisionScale *
        scaleFactor) /
        2 +
        (entityB.script.item.collisionHeight *
          entityB.collisionScale *
          scaleFactor) /
          2
  );
};

Utils.contactTestInternal = function (entityA, entityB, callback) {
  var resultCallback = new Ammo.ConcreteContactResultCallback();
  resultCallback.addSingleResult = function (
    manifoldPoint,
    collisionObjectA,
    id0,
    index0,
    collisionObjectB,
    id1,
    index1
  ) {
    if (callback) {
      callback(entityA, entityB);
    }
  };

  Utils.app.systems.rigidbody.dynamicsWorld.contactPairTest(
    entityA.rigidbody.body,
    entityB.rigidbody.body,
    resultCallback
  );
};

Utils.distanceXZ = function (pos1, pos2) {
  return Math.sqrt(
    (pos1.x - pos2.x) * (pos1.x - pos2.x) +
      (pos1.z - pos2.z) * (pos1.z - pos2.z)
  );
};

Utils.distanceBetweenEntities = function (posA, posB) {
  return Math.sqrt(
    (posA.x - posB.x) * (posA.x - posB.x) +
      (posA.y - posB.y) * (posA.y - posB.y) +
      (posA.z - posB.z) * (posA.z - posB.z)
  );
};

Utils.tweenText = function (
  textElement,
  initialValue,
  targetValue,
  duration,
  delay,
  easing,
  playCountingSound
) {
  textElement.element.textValue = initialValue;
  textElement.element.text = "" + Math.round(initialValue);
  textElement
    .tween(textElement.element)
    .to({ textValue: targetValue }, duration, easing)
    .delay(delay)
    .on("update", function () {
      textElement.element.text = "" + Math.round(textElement.element.textValue);
    })
    .start();
};

Utils.getRandomItem = function (objects, startIndex, length) {
  if (objects === null) {
    return null;
  }
  if (startIndex === undefined) {
    startIndex = 0;
  }
  if (length === undefined) {
    length = objects.length;
  }

  var randomIndex = startIndex + Math.floor(Math.random() * length);

  return objects[randomIndex] === undefined ? null : objects[randomIndex];
};

Utils.removeRandomItem = function (objects, startIndex, length) {
  if (objects === null) {
    // undefined or null
    return null;
  }

  if (startIndex === undefined) {
    startIndex = 0;
  }
  if (length === undefined) {
    length = objects.length;
  }

  var randomIndex = startIndex + Math.floor(Math.random() * length);
  if (randomIndex < objects.length) {
    var removed = objects.splice(randomIndex, 1);
    return removed[0] === undefined ? null : removed[0];
  } else {
    return null;
  }
};

Utils.shuffle = function (array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

Utils.humanizeTime = function (seconds) {
  var restSeconds = seconds;
  var hours = Math.floor(restSeconds / 3600);
  restSeconds %= 3600;
  var minutes = Math.floor(restSeconds / 60);
  restSeconds %= 60;

  return (
    /*(hours < 10 ? "0" : "") + hours + ":" +*/ (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (restSeconds < 10 ? "0" : "") +
    Math.floor(restSeconds)
  );
};

Utils.humanizeTimeWithHours = function (seconds) {
  var restSeconds = seconds;
  var hours = Math.floor(restSeconds / 3600);
  restSeconds %= 3600;
  var minutes = Math.floor(restSeconds / 60);
  restSeconds %= 60;

  return (
    (hours < 10 ? "0" : "") +
    hours +
    "h " +
    (minutes < 10 ? "0" : "") +
    minutes +
    "m "
  );
};

Utils.humanizeTimeWithMinutes = function (seconds) {
  var restSeconds = seconds;
  var hours = Math.floor(restSeconds / 3600);
  restSeconds %= 3600;
  var minutes = Math.floor(restSeconds / 60);
  restSeconds %= 60;

  return (
    (minutes < 10 ? "0" : "") +
    minutes +
    "m " +
    (restSeconds < 10 ? "0" : "") +
    Math.floor(restSeconds) +
    "s"
  );
};

Utils.getBoundingBox = function (entity, extendDistance) {
  if (
    entity.model &&
    entity.model.meshInstances &&
    entity.model.meshInstances.length > 0
  ) {
    var meshInstances = entity.model.meshInstances;
    var bbox = new pc.BoundingBox();
    bbox.copy(meshInstances[0].aabb);
    for (var i = 1; i < meshInstances.length; i++) {
      bbox.add(meshInstances[i].aabb);
    }
    if (extendDistance) {
      bbox.halfExtents.add(extendDistance);
    }
    return bbox;
  }
  return null;
};

/* Logger */
var log = function (...args) {
  if (GameConfig.getAttribute("enableLogging")) {
    console.log(1, arguments);
    console.log(...args);
  } else {
    console.log(2);
  }
};

/**
 * Normalize an angle to the [-Pi, Pi] range.
 */
Utils.normalizeAngle = function (angle) {
  angle = angle % (2 * Math.PI);

  return angle > Math.PI
    ? angle - 2 * Math.PI
    : angle < -Math.PI
    ? angle + 2 * Math.PI
    : angle;
};

/**
 *  Returns the value (angle)/360
 */

Utils.getAngleValue = function (angle) {
  angle = ((angle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

  return angle / (2 * Math.PI);
};

Utils.randomInRangeSigned = function (a, b) {
  if (Math.random() <= 0.5) {
    return pc.math.random(Math.min(-a, -b), Math.max(-a, -b));
  } else {
    return pc.math.random(Math.min(a, b), Math.max(a, b));
  }
};

Utils.vibrate = function (pattern) {
  if (
    GameplayController.enableVibration &&
    window.navigator &&
    window.navigator.vibrate
  ) {
    window.navigator.vibrate(pattern);
  }
};
Utils.setMat4Forward = (function () {
  var x, y, z;

  x = new pc.Vec3();
  y = new pc.Vec3();
  z = new pc.Vec3();

  return function (mat4, forward, up) {
    // Inverse the forward direction as +z is pointing backwards due to the coordinate system
    z.copy(forward).scale(-1);
    y.copy(up).normalize();
    x.cross(y, z).normalize();
    y.cross(z, x);

    var r = mat4.data;

    r[0] = x.x;
    r[1] = x.y;
    r[2] = x.z;
    r[3] = 0;
    r[4] = y.x;
    r[5] = y.y;
    r[6] = y.z;
    r[7] = 0;
    r[8] = z.x;
    r[9] = z.y;
    r[10] = z.z;
    r[11] = 0;
    r[15] = 1;

    return mat4;
  };
})();

!(function () {
  var MAX_CACHE = 256;

  var quats = [];
  var vecs = [];
  var nextQuat = 0;
  var nextVec = 0;

  for (var i = 0; i < MAX_CACHE; i++) {
    vecs.push(new pc.Vec3());
    quats.push(new pc.Quat());
  }

  function Q(existing) {
    var q = quats[nextQuat++ & (MAX_CACHE - 1)];
    if (existing !== false) q.copy(existing || pc.Quat.IDENTITY);
    return q;
  }

  function V(existing, y, z) {
    var v = vecs[nextVec++ & (MAX_CACHE - 1)];
    if (y !== undefined && z !== undefined) {
      var d = v.data;
      d[0] = existing;
      d[1] = y;
      d[2] = z;
      return v;
    }
    if (existing !== undefined) {
      var d1 = v.data;
      var d2 = existing.data;
      d1[0] = d2[0];
      d1[1] = d2[1];
      d1[2] = d2[2];
    }
    return v;
  }

  pc.Vec3.temp = V;
  pc.Quat.temp = Q;

  function angleBetween(vector1, vector2, up) {
    up = up || pc.Vec3.UP;
    return (
      Math.atan2(V().cross(vector1, vector2).dot(up), vector1.dot(vector2)) *
      pc.math.RAD_TO_DEG
    );
  }

  pc.Vec3.prototype.angle = function (vector, up) {
    return angleBetween(this, vector, up);
  };

  function orthogonal(v) {
    var x = Math.abs(v.x);
    var y = Math.abs(v.y);
    var z = Math.abs(v.z);
    var other =
      x < y
        ? x < z
          ? pc.Vec3.RIGHT
          : pc.Vec3.FORWARD
        : y < z
        ? pc.Vec3.UP
        : pc.Vec3.FORWARD;
    return V().cross(v, other);
  }

  function fromToRotation(v1, v2, q) {
    var kct = v1.dot(v2);
    q = q || Q();
    if (kct <= -0.999) {
      q.w = 0;
      var v = orthogonal(v1).normalize();
      q.x = v.x;
      q.y = v.y;
      q.z = v.z;
      return q;
    }

    var half = V(v1).add(v2).scale(0.5);
    q.w = v1.dot(half);
    var cross = V().cross(v1, half);
    q.x = cross.x;
    q.y = cross.y;
    q.z = cross.z;
    return q.normalize();
  }

  pc.Quat.prototype.fromToRotation = function (v1, v2) {
    return fromToRotation(v1, v2, this);
  };

  pc.Quat.prototype.twist = function (axis) {
    var orth = orthogonal(axis);
    var transformed = this.transformVector(orth, V());
    var flattened = V(transformed)
      .sub(V(axis).scale(transformed.dot(axis)))
      .normalize();
    var angle = Math.acos(orth.dot(flattened)) * pc.math.RAD_TO_DEG;
    return V(this.x, this.y, this.z).dot(axis) > 0 ? -angle : angle;
  };

  var m = new pc.Mat4();

  pc.Quat.prototype.lookAt = function (from, to, up) {
    m.setLookAt(from, to, up || pc.Vec3.UP);
    this.setFromMat4(m);
    return this;
  };

  var oldMul = pc.Vec3.prototype.mul;

  pc.Vec3.prototype.mul = function (p0, p1, p2) {
    if (p0 instanceof pc.Quat) {
      return p0.transformVector(this, this);
    } else return oldMul.call(this, p0, p1, p2);
  };
})();

// tween.js
pc.extend(
  pc,
  (function () {
    /**
     * @name pc.TweenManager
     * @description Handles updating tweens
     * @param {pc.Application} app  The application
     */
    var TweenManager = function (app) {
      this._app = app;
      this._tweens = [];
      this._add = []; // to be added
    };

    TweenManager.prototype = {
      add: function (tween) {
        this._add.push(tween);
        return tween;
      },

      update: function (dt) {
        var i = 0;
        var n = this._tweens.length;
        while (i < n) {
          if (this._tweens[i].update(dt)) {
            i++;
          } else {
            this._tweens.splice(i, 1);
            n--;
          }
        }

        // add any tweens that were added mid-update
        if (this._add.length) {
          this._tweens = this._tweens.concat(this._add);
          this._add.length = 0;
        }
      },
    };

    /**
     * @name  pc.Tween
     * @param {Object} target The target property that will be tweened
     * @param {pc.TweenManager} manager The tween manager
     * @param {pc.Entity} entity The pc.Entity whose property we are tweening
     */
    var Tween = function (target, manager, entity) {
      pc.events.attach(this);

      this.manager = manager;

      if (entity) {
        this.entity = null; // if present the tween will dirty the transforms after modify the target
      }

      this.time = 0;

      this.complete = false;
      this.playing = false;
      this.stopped = true;
      this.pending = false;

      this.target = target;

      this.duration = 0;
      this._currentDelay = 0;
      this.timeScale = 1;
      this._reverse = false;

      this._delay = 0;
      this._yoyo = false;

      this._count = 0;
      this._numRepeats = 0;
      this._repeatDelay = 0;

      this._from = false; // indicates a "from" tween

      // for rotation tween
      this._slerp = false; // indicates a rotation tween
      this._fromQuat = new pc.Quat();
      this._toQuat = new pc.Quat();
      this._quat = new pc.Quat();

      this.easing = pc.EASE_LINEAR;

      this._sv = {}; // start values
      this._ev = {}; // end values
    };

    var _parseProperties = function (properties) {
      var _properties;
      if (properties instanceof pc.Vec2) {
        _properties = {
          x: properties.x,
          y: properties.y,
        };
      } else if (properties instanceof pc.Vec3) {
        _properties = {
          x: properties.x,
          y: properties.y,
          z: properties.z,
        };
      } else if (properties instanceof pc.Vec4) {
        _properties = {
          x: properties.x,
          y: properties.y,
          z: properties.z,
          w: properties.w,
        };
      } else if (properties instanceof pc.Quat) {
        _properties = {
          x: properties.x,
          y: properties.y,
          z: properties.z,
          w: properties.w,
        };
      } else if (properties instanceof pc.Color) {
        _properties = {
          r: properties.r,
          g: properties.g,
          b: properties.b,
        };
        if (properties.a !== undefined) {
          _properties.a = properties.a;
        }
      } else {
        _properties = properties;
      }
      return _properties;
    };
    Tween.prototype = {
      // properties - js obj of values to update in target
      to: function (properties, duration, easing, delay, repeat, yoyo) {
        this._properties = _parseProperties(properties);
        this.duration = duration;

        if (easing) this.easing = easing;
        if (delay) {
          this.delay(delay);
        }
        if (repeat) {
          this.repeat(repeat);
        }

        if (yoyo) {
          this.yoyo(yoyo);
        }

        return this;
      },

      from: function (properties, duration, easing, delay, repeat, yoyo) {
        this._properties = _parseProperties(properties);
        this.duration = duration;

        if (easing) this.easing = easing;
        if (delay) {
          this.delay(delay);
        }
        if (repeat) {
          this.repeat(repeat);
        }

        if (yoyo) {
          this.yoyo(yoyo);
        }

        this._from = true;

        return this;
      },

      rotate: function (properties, duration, easing, delay, repeat, yoyo) {
        this._properties = _parseProperties(properties);

        this.duration = duration;

        if (easing) this.easing = easing;
        if (delay) {
          this.delay(delay);
        }
        if (repeat) {
          this.repeat(repeat);
        }

        if (yoyo) {
          this.yoyo(yoyo);
        }

        this._slerp = true;

        return this;
      },

      start: function () {
        var prop, _x, _y, _z;

        this.playing = true;
        this.complete = false;
        this.stopped = false;
        this._count = 0;
        this.pending = this._delay > 0;

        if (this._reverse && !this.pending) {
          this.time = this.duration;
        } else {
          this.time = 0;
        }

        if (this._from) {
          for (prop in this._properties) {
            if (this._properties.hasOwnProperty(prop)) {
              this._sv[prop] = this._properties[prop];
              this._ev[prop] = this.target[prop];
            }
          }

          if (this._slerp) {
            this._toQuat.setFromEulerAngles(
              this.target.x,
              this.target.y,
              this.target.z
            );

            _x =
              this._properties.x !== undefined
                ? this._properties.x
                : this.target.x;
            _y =
              this._properties.y !== undefined
                ? this._properties.y
                : this.target.y;
            _z =
              this._properties.z !== undefined
                ? this._properties.z
                : this.target.z;
            this._fromQuat.setFromEulerAngles(_x, _y, _z);
          }
        } else {
          for (prop in this._properties) {
            if (this._properties.hasOwnProperty(prop)) {
              this._sv[prop] = this.target[prop];
              this._ev[prop] = this._properties[prop];
            }
          }

          if (this._slerp) {
            this._fromQuat.setFromEulerAngles(
              this.target.x,
              this.target.y,
              this.target.z
            );

            _x =
              this._properties.x !== undefined
                ? this._properties.x
                : this.target.x;
            _y =
              this._properties.y !== undefined
                ? this._properties.y
                : this.target.y;
            _z =
              this._properties.z !== undefined
                ? this._properties.z
                : this.target.z;
            this._toQuat.setFromEulerAngles(_x, _y, _z);
          }
        }

        // set delay
        this._currentDelay = this._delay;

        // add to manager when started
        this.manager.add(this);

        return this;
      },

      pause: function () {
        this.playing = false;
      },

      resume: function () {
        this.playing = true;
      },

      stop: function () {
        this.playing = false;
        this.stopped = true;
      },

      delay: function (delay) {
        this._delay = delay;
        this.pending = true;

        return this;
      },

      repeat: function (num, delay) {
        this._count = 0;
        this._numRepeats = num;
        if (delay) {
          this._repeatDelay = delay;
        } else {
          this._repeatDelay = 0;
        }

        return this;
      },

      loop: function (loop) {
        if (loop) {
          this._count = 0;
          this._numRepeats = Infinity;
        } else {
          this._numRepeats = 0;
        }

        return this;
      },

      yoyo: function (yoyo) {
        this._yoyo = yoyo;
        return this;
      },

      reverse: function () {
        this._reverse = !this._reverse;

        return this;
      },

      chain: function () {
        var n = arguments.length;

        while (n--) {
          if (n > 0) {
            arguments[n - 1]._chained = arguments[n];
          } else {
            this._chained = arguments[n];
          }
        }

        return this;
      },

      update: function (dt) {
        if (this.stopped) return false;

        if (!this.playing) return true;

        if (!this._reverse || this.pending) {
          this.time += dt * this.timeScale;
        } else {
          this.time -= dt * this.timeScale;
        }

        // delay start if required
        if (this.pending) {
          if (this.time > this._currentDelay) {
            if (this._reverse) {
              this.time = this.duration - (this.time - this._currentDelay);
            } else {
              this.time = this.time - this._currentDelay;
            }
            this.pending = false;
          } else {
            return true;
          }
        }

        var _extra = 0;
        if (
          (!this._reverse && this.time > this.duration) ||
          (this._reverse && this.time < 0)
        ) {
          this._count++;
          this.complete = true;
          this.playing = false;
          if (this._reverse) {
            _extra = this.duration - this.time;
            this.time = 0;
          } else {
            _extra = this.time - this.duration;
            this.time = this.duration;
          }
        }

        var elapsed = this.time / this.duration;

        // run easing
        var a = this.easing(elapsed);

        // increment property
        var s, e, d;
        for (var prop in this._properties) {
          if (this._properties.hasOwnProperty(prop)) {
            s = this._sv[prop];
            e = this._ev[prop];
            this.target[prop] = s + (e - s) * a;
          }
        }

        if (this._slerp) {
          this._quat.slerp(this._fromQuat, this._toQuat, a);
        }

        // if this is a entity property then we should dirty the transform
        if (this.entity) {
          this.entity._dirtifyLocal();

          // apply element property changes
          if (this.element && this.entity.element) {
            this.entity.element[this.element] = this.target;
          }

          if (this._slerp) {
            this.entity.setLocalRotation(this._quat);
          }
        }

        this.fire("update", dt);

        if (this.complete) {
          var repeat = this._repeat(_extra);
          if (!repeat) {
            this.fire("complete", _extra);
            if (this.entity) this.entity.off("destroy", this.stop, this);
            if (this._chained) this._chained.start();
          } else {
            this.fire("loop");
          }

          return repeat;
        }

        return true;
      },

      _repeat: function (extra) {
        // test for repeat conditions
        if (this._count < this._numRepeats) {
          // do a repeat
          if (this._reverse) {
            this.time = this.duration - extra;
          } else {
            this.time = extra; // include overspill time
          }
          this.complete = false;
          this.playing = true;

          this._currentDelay = this._repeatDelay;
          this.pending = true;

          if (this._yoyo) {
            // swap start/end properties
            for (var prop in this._properties) {
              tmp = this._sv[prop];
              this._sv[prop] = this._ev[prop];
              this._ev[prop] = tmp;
            }

            if (this._slerp) {
              this._quat.copy(this._fromQuat);
              this._fromQuat.copy(this._toQuat);
              this._toQuat.copy(this._quat);
            }
          }

          return true;
        }
        return false;
      },
    };

    /**
     * Easing methods
     */

    var Linear = function (k) {
      return k;
    };

    var QuadraticIn = function (k) {
      return k * k;
    };

    var QuadraticOut = function (k) {
      return k * (2 - k);
    };

    var QuadraticInOut = function (k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k;
      }
      return -0.5 * (--k * (k - 2) - 1);
    };

    var CubicIn = function (k) {
      return k * k * k;
    };

    var CubicOut = function (k) {
      return --k * k * k + 1;
    };

    var CubicInOut = function (k) {
      if ((k *= 2) < 1) return 0.5 * k * k * k;
      return 0.5 * ((k -= 2) * k * k + 2);
    };

    var QuarticIn = function (k) {
      return k * k * k * k;
    };

    var QuarticOut = function (k) {
      return 1 - --k * k * k * k;
    };

    var QuarticInOut = function (k) {
      if ((k *= 2) < 1) return 0.5 * k * k * k * k;
      return -0.5 * ((k -= 2) * k * k * k - 2);
    };

    var QuinticIn = function (k) {
      return k * k * k * k * k;
    };

    var QuinticOut = function (k) {
      return --k * k * k * k * k + 1;
    };

    var QuinticInOut = function (k) {
      if ((k *= 2) < 1) return 0.5 * k * k * k * k * k;
      return 0.5 * ((k -= 2) * k * k * k * k + 2);
    };

    var SineIn = function (k) {
      if (k === 0) return 0;
      if (k === 1) return 1;
      return 1 - Math.cos((k * Math.PI) / 2);
    };

    var SineOut = function (k) {
      if (k === 0) return 0;
      if (k === 1) return 1;
      return Math.sin((k * Math.PI) / 2);
    };

    var SineInOut = function (k) {
      if (k === 0) return 0;
      if (k === 1) return 1;
      return 0.5 * (1 - Math.cos(Math.PI * k));
    };

    var ExponentialIn = function (k) {
      return k === 0 ? 0 : Math.pow(1024, k - 1);
    };

    var ExponentialOut = function (k) {
      return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
    };

    var ExponentialInOut = function (k) {
      if (k === 0) return 0;
      if (k === 1) return 1;
      if ((k *= 2) < 1) return 0.5 * Math.pow(1024, k - 1);
      return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
    };

    var CircularIn = function (k) {
      return 1 - Math.sqrt(1 - k * k);
    };

    var CircularOut = function (k) {
      return Math.sqrt(1 - --k * k);
    };

    var CircularInOut = function (k) {
      if ((k *= 2) < 1) return -0.5 * (Math.sqrt(1 - k * k) - 1);
      return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
    };

    var ElasticIn = function (k) {
      var s,
        a = 0.1,
        p = 0.4;
      if (k === 0) return 0;
      if (k === 1) return 1;
      if (!a || a < 1) {
        a = 1;
        s = p / 4;
      } else s = (p * Math.asin(1 / a)) / (2 * Math.PI);
      return -(
        a *
        Math.pow(2, 10 * (k -= 1)) *
        Math.sin(((k - s) * (2 * Math.PI)) / p)
      );
    };

    var ElasticOut = function (k) {
      var s,
        a = 0.1,
        p = 0.4;
      if (k === 0) return 0;
      if (k === 1) return 1;
      if (!a || a < 1) {
        a = 1;
        s = p / 4;
      } else s = (p * Math.asin(1 / a)) / (2 * Math.PI);
      return (
        a * Math.pow(2, -10 * k) * Math.sin(((k - s) * (2 * Math.PI)) / p) + 1
      );
    };

    var ElasticInOut = function (k) {
      var s,
        a = 0.1,
        p = 0.4;
      if (k === 0) return 0;
      if (k === 1) return 1;
      if (!a || a < 1) {
        a = 1;
        s = p / 4;
      } else s = (p * Math.asin(1 / a)) / (2 * Math.PI);
      if ((k *= 2) < 1)
        return (
          -0.5 *
          (a *
            Math.pow(2, 10 * (k -= 1)) *
            Math.sin(((k - s) * (2 * Math.PI)) / p))
        );
      return (
        a *
          Math.pow(2, -10 * (k -= 1)) *
          Math.sin(((k - s) * (2 * Math.PI)) / p) *
          0.5 +
        1
      );
    };

    var BackIn = function (k) {
      var s = 1.70158;
      return k * k * ((s + 1) * k - s);
    };

    var BackOut = function (k) {
      var s = 1.70158;
      return --k * k * ((s + 1) * k + s) + 1;
    };

    var BackInOut = function (k) {
      var s = 1.70158 * 1.525;
      if ((k *= 2) < 1) return 0.5 * (k * k * ((s + 1) * k - s));
      return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
    };

    var BounceIn = function (k) {
      return 1 - BounceOut(1 - k);
    };

    var BounceOut = function (k) {
      if (k < 1 / 2.75) {
        return 7.5625 * k * k;
      } else if (k < 2 / 2.75) {
        return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
      } else if (k < 2.5 / 2.75) {
        return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
      } else {
        return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
      }
    };

    var BounceInOut = function (k) {
      if (k < 0.5) return BounceIn(k * 2) * 0.5;
      return BounceOut(k * 2 - 1) * 0.5 + 0.5;
    };

    return {
      TweenManager: TweenManager,
      Tween: Tween,
      Linear: Linear,
      QuadraticIn: QuadraticIn,
      QuadraticOut: QuadraticOut,
      QuadraticInOut: QuadraticInOut,
      CubicIn: CubicIn,
      CubicOut: CubicOut,
      CubicInOut: CubicInOut,
      QuarticIn: QuarticIn,
      QuarticOut: QuarticOut,
      QuarticInOut: QuarticInOut,
      QuinticIn: QuinticIn,
      QuinticOut: QuinticOut,
      QuinticInOut: QuinticInOut,
      SineIn: SineIn,
      SineOut: SineOut,
      SineInOut: SineInOut,
      ExponentialIn: ExponentialIn,
      ExponentialOut: ExponentialOut,
      ExponentialInOut: ExponentialInOut,
      CircularIn: CircularIn,
      CircularOut: CircularOut,
      CircularInOut: CircularInOut,
      BackIn: BackIn,
      BackOut: BackOut,
      BackInOut: BackInOut,
      BounceIn: BounceIn,
      BounceOut: BounceOut,
      BounceInOut: BounceInOut,
      ElasticIn: ElasticIn,
      ElasticOut: ElasticOut,
      ElasticInOut: ElasticInOut,
    };
  })()
);

// Expose prototype methods and create a default tween manager on the application
(function () {
  // Add pc.Application#addTweenManager method
  pc.Application.prototype.addTweenManager = function () {
    this._tweenManager = new pc.TweenManager(this);

    this.on("update", function (dt) {
      this._tweenManager.update(dt);
    });
  };

  // Add pc.Application#tween method
  pc.Application.prototype.tween = function (target) {
    return new pc.Tween(target, this._tweenManager);
  };

  pc.Application.prototype.stopAllTweens = function (target) {
    for (var i = this._tweenManager._tweens.length - 1; i > -1; i--) {
      if (this._tweenManager._tweens[i].entity === target) {
        this._tweenManager._tweens[i].stop();
      }
    }
  };

  // Add pc.Entity#tween method
  pc.Entity.prototype.tween = function (target, options) {
    var tween = this._app.tween(target);
    tween.entity = this;

    this.once("destroy", tween.stop, tween);

    if (options && options.element) {
      // specifiy a element property to be updated
      tween.element = options.element;
    }
    return tween;
  };

  // Create a default tween manager on the application
  var application = pc.Application.getApplication();
  if (application) {
    application.addTweenManager();
  }
})();

// Constants.js
/* jshint esversion: 6 */
var Constants = pc.createScript("constants");

Constants.GAME_NAME = "OmNomRun";
Constants.GAME_VERSION = "v0.9.9";
Constants.FAMOBI_TRACKING_KEY = "om-nom-run";
Constants.DEFAULT_LOCALE = "en-US";

Constants.UI = {
  MAIN_MENU: "MainMenu",
  GAMEPLAY_LOCATION: "GameplayLocation",
  MISSIONS_LOCATION: "MissionsLocation",
  RESTART_LOCATION: "RestartLocation",
  WIN_LOCATION: "WinLocation",
  LUCK_WHEEL_LOCATION: "LuckWheelLocation",
  STUNT_CHAMPIONSHIP_LOCATION: "StuntChampionshipLocation",
  FREE_RUN_LOCATION: "FreeRunLocation",
  CHARACTER_ONE_RUN_LOCATION: "CharacterOneRunLocation",
  CHARACTER_UPGRADE_LOCATION: "CharacterUpgradeLocation",
  SETTINGS_POPUP: "SettingsPopup",
  MISSION_REWARD_POPUP: "MissionRewardPopUp",
  REVIVE_POPUP: "RevivePopup",
  GIVE_UP_POPUP: "GiveUpPopup",
  RETURN_TO_GAME_POPUP: "ReturnToGamePopup",
  COLLECT_REWARD_POPUP: "CollectRewardPopup",
  DAILY_REWARDS_POPUP: "DailyRewardsPopup",
  NOT_ENOUGH_COINS_POPUP: "NotEnoughCoinsPopup",
  LANGUAGE_SELECTION_POPUP: "LanguageSelectionPopup",
};

Constants.AUDIO = {
  MUSIC_MENU: "menuLoop",
  MUSIC_GAMEPLAY: "gameLoop",
  COLLECT_COIN: "collectCoin",
  COLLECT_TOKEN: "collectToken",
  CLICK: "click",
  JUMP: "jump",
  HIT: "collisionMajor",
  LANE_CHANGE: "laneChange",
  SLIDE: "slide",
  MINOR_COLLIDE: "minorCollide",
  STAR_1_EARNED: "star1earned",
  STAR_2_EARNED: "star2earned",
  STAR_3_EARNED: "star3earned",
  WHEEL_SPIN: "wheelSpin",
  WHEEL_WIN: "wheelWin",
  SPECIAL_BOO: "specialBoo",
  SPECIAL_COWGIRL: "specialCowgirl",
  SPECIAL_LICK: "specialLick",
  SPECIAL_ROBOKID: "specialRobokid",
  SPECIAL_SWORDKID: "specialSwordkid",
  SPECIAL_TECHKID: "specialTechKid",
  SPECIAL_OMNELLE: "specialOmNelle",
  SPECIAL_OMNOM: "specialOmNom",
  POWERUP_OFF: "powerUpOff",
  POWERUP_ON: "powerUpOn",
  POWERUP_DOUBLE_COIN: "powerUpDoubleCoin",
  POWERUP_FIRST_VIEW: "powerUpFirstView",
  POWERUP_HIGHJUMP: "powerUpHighJump",
  POWERUP_MAGNET: "powerUpMagnet",
  POWERUP_ROCKET: "powerUpRocket",
  COLLECT_LETTER: "collectLetter",
  STUNT_UPGRADE: "stuntUpgrade",
  REWARD_COLLECTED: "rewardCollected",
  REWARD_SHOWN: "rewardShown",
  MISSION_COMPLETED: "missionCompleted",
  CHARACTER_LANDING: "characterLanding",
  STUNT_LAUNCH: "stuntLaunch",
  STUNT_JUMP: "stuntJump",
  STUNT_FLY_JET: "stuntFlyJet",
  TRICK_LANDING: "trickLanding",
  SPACE_WIND: "ambientWind",
};

Constants.Storage = {
  COINS: "coins",
  MUSIC_STATE: "musicState",
  SFX_STATE: "sfxState",
  CURRENT_MISSION: "currentMission",
  MAX_UNLOCKED_MISSION: "maxUnlockedMission",
  MISSION_STATES: "missionStates",
  ACTIVE_CHARACTER: "activeCharacter",
  CHARACTERS_DATA: "charactersData",
  LAST_LOGIN: "lastLogin",
  LAST_DAILY_REWARD: "lastDailyReward",
  FREE_RUN_BEST_SCORES: "freeRunBestScores",
  STUNTS_BEST_SCORES: "stuntsBestScore",
  LAST_LUCK_WHEEL_FREE_SPIN: "lastLuckWheelFreeSpin",
  FREE_RUN_LEADERBOARD: "freeRunLeaderboard",
  FREE_RUN_LEADERBOARD_CREATION_TIME: "freeRunLeaderboardCreationTime",
  STUNTS_LEADERBOARD: "stuntsLeaderboard",
  STUNTS_LEADERBOARD_CREATION_TIME: "stuntsLeaderboardCreationTime",
  LANGUAGE: "language",
};

Constants.CharacterNames = {
  OM_NOM: "OmNom",
  NOM_OF_STEEL: "NomOfSteel",
  FIRE_NOM: "FireNom",
  EARTH_NOM: "EarthNom",
  ICE_NOM: "IceNom",
  WIND_NOM: "WindNom",
  OM_NOM_X: "OmNomX",
  SUPER_NOM: "SuperNom",
  OM_NELLE: "OmNelle",
  ROBO_KID: "RoboKid",
  TECH_KID: "TechKid",
  SPACE_COWGIRL: "SpaceCowgirl",
  SWORD_KID: "SwordKid",
  LICK: "Lick",
  BOO: "Boo",
};

Constants.CharacterAnimations = {
  RUN: "RUN",
  SLIDE: "SLIDE",
  QUICK_LAND: "QUICK_LAND",
  QUICK_ROLL_SHORT: "QUICK_ROLL_SHORT",
  JUMP_PHASE_1: "JUMP_PHASE_1",
  JUMP_PHASE_2: "JUMP_PHASE_2",
  JUMP_PHASE_3: "JUMP_PHASE_3",
  MOVE_TO_POSITION: "MOVE_TO_POSITION",
  PREPARE_LOOP: "PREPARE_LOOP",
  MISSION_GENERAL_PHASE_1: "MISSION_GENERAL_PHASE_1",
  MISSION_GENERAL_PHASE_2: "MISSION_GENERAL_PHASE_2",
  COLLIDE_MINOR_L: "COLLIDE_MINOR_L",
  COLLIDE_MINOR_R: "COLLIDE_MINOR_R",
  LANE_CHANGE_DOWN_L: "LANE_CHANGE_DOWN_L",
  LANE_CHANGE_DOWN_R: "LANE_CHANGE_DOWN_R",
  DEATH_PHASE_1: "DEATH_PHASE_1",
  DEATH_PHASE_2: "DEATH_PHASE_2",
  IDLE_LOOP: "IDLE_LOOP",
  FIDGET: "FIDGET",
  LANE_CHANGE_AIR_L: "LANE_CHANGE_AIR_L",
  LANE_CHANGE_AIR_R: "LANE_CHANGE_AIR_R",
  SPACE_FLY_LOOP: "SPACE_FLY_LOOP",
  SPACE_LANDING_START: "SPACE_LANDING_START",
  SPACE_LANDING_END: "SPACE_LANDING_END",
  CHARACHTER_STUNT_1: "CHARACHTER_STUNT_1",
  CHARACHTER_STUNT_2: "CHARACHTER_STUNT_2",
  CHARACHTER_STUNT_3: "CHARACHTER_STUNT_3",
  SCOOTER_TURN_L: "SCOOTER_TURN_L",
  SCOOTER_TURN_R: "SCOOTER_TURN_R",
  SCOOTER_DRIVE: "SCOOTER_DRIVE",
  SCOOTER_IDLE: "SCOOTER_IDLE",
  SCOOTER_TRICK_1: "SCOOTER_TRICK_1",
  SCOOTER_TRICK_2: "SCOOTER_TRICK_2",
  SCOOTER_TRICK_3: "SCOOTER_TRICK_3",
};

Constants.BlockComponentsContainer = {
  LanePiecesContainer: "LanePiecesContainer",
  TerrainContainer: "TerrainContainer",
  PropsContainer: "PropsContainer",
  LaneObjectsContainer: "LaneObjectsContainer",
};

Constants.LANE_OBJECTS_GROUP_WITH_PARENT = "LaneObjectsParentGroup";

Constants.AimationPriority = {
  LOWEST: 0,
  LOW: 1,
  NORMAL: 2,
  HIGH: 3,
  HIGHEST: 4,
};

const Lane = (Constants.Lane = {
  LEFT: 1,
  MIDDLE: 0,
  RIGHT: -1,
});

const GameState = (Constants.GameState = {
  INACTIVE: "inactive",
  PAUSED: "paused",
  RUNNING: "running",
  FINISHED: "finished",
  IDLE: "idle",
  SPACE_FLY_LAUNCH: "space_fly_launch",
  SPACE_FLY: "space_fly",
  SPACE_FLY_LANDING: "space_fly_landing",
  DEAD: "dead",
});

const CharacterLaneState = (Constants.CharacterLaneState = {
  FORWARD: "forward",
  LEFTWARD: "leftward",
  RIGHTWARD: "rightward",
});

const CharacterMovementState = (Constants.CharacterMovementState = {
  IDLE: "idle",
  RUNNING: "running",
  JUMPING: "jumping",
  DROPPING: "dropping",
  SLIDING: "sliding",
  FALLING_INTO_HOLE: "falling_into_hole",
  DEAD: "dead",
});

/* Level entity */
Constants._levelEntity = null;
Constants.getLevelEntity = function () {
  if (!Constants._levelEntity) {
    Constants._levelEntity =
      pc.Application.getApplication().root.findByName("Level");
  }
  return Constants._levelEntity;
};

/* MovementDirection */
const MovementDirection = (Constants.MovementDirection = {
  None: 0,
  Towards: 1,
  Right: 2,
  Left: 3,
  Up: 4,
  Down: 5,
  Forward: 6,
});

/* sites */
const Site = (Constants.Site = {
  None: 0,
  Nomville_Streets: 1,
  Nomville_Rooftops: 2,
  Nomville_StormDrain: 3,
  Nomville_Fruitmarket: 4,
  Nomville_SpiderLair: 5,
  Highway_RobotFactory: 6,
  Highway_MagicForest: 7,
  Highway_SpaceStation: 8,
  Highway_Reserved_3: 9,
  Highway_Reserved_4: 10,
  Mountains_Mountaintop: 11,
  Mountains_Canyon: 12,
  Mountains_LavaCaves: 13,
});

/* Blocks */
const BlockType = (Constants.BlockType = {
  Default: 0,
  Junction_Right: 1,
  Junction_Left: 2,
  LowLaneEntrance: 3,
  HighLaneEntrance: 4,
  Junction_LeftAndRight: 5,
  StartingBlock: 6,
  EndingBlock: 7,
  SiteEntrance: 8, // Forced site entrance without junction or height change. Handled as special case with predefined block list.
  FreeRunCheckpoint: 9,
  Stunt: 10,
  Corridor: 11,
  Plug: 12,
  TeleportTransition: 13,
});

/* Stunts */
const StuntPhase = (Constants.StuntPhase = {
  NO_STUNT: 0,
  RAMP: 1,
  STUNT_JUMP: 2,
  STUNT_FLY: 3,
});

/* Powerups */
const Powerups = (Constants.Powerups = {
  MAGNET: "PowerUpMagnet",
  HIGH_JUMP: "PowerUpHighJump",
  DOUBLE_COINS: "PowerUpDoubleCoins",
  FIRST_PERSON_VIEW: "PowerUpFirstPersonView",
  ROCKET: "PowerUpRocket",
  STUNT: "PowerUpStunt",
});

const PowerupSounds = (Constants.PowerupSounds = {});

PowerupSounds[Powerups.DOUBLE_COINS] = Constants.AUDIO.POWERUP_DOUBLE_COIN;
PowerupSounds[Powerups.FIRST_PERSON_VIEW] = Constants.AUDIO.POWERUP_FIRST_VIEW;
PowerupSounds[Powerups.HIGH_JUMP] = Constants.AUDIO.POWERUP_HIGHJUMP;
PowerupSounds[Powerups.MAGNET] = Constants.AUDIO.POWERUP_MAGNET;
PowerupSounds[Powerups.ROCKET] = Constants.AUDIO.POWERUP_ROCKET;

const PowerupDuration = (Constants.PowerupDuration = {});
PowerupDuration[Powerups.DOUBLE_COINS] = 10;
PowerupDuration[Powerups.FIRST_PERSON_VIEW] = 10;
PowerupDuration[Powerups.HIGH_JUMP] = 10;
PowerupDuration[Powerups.MAGNET] = 10;
PowerupDuration[Powerups.ROCKET] = 10;

Constants.getPowerupSpriteAsset = function (powerupType) {
  switch (powerupType) {
    case Constants.Powerups.MAGNET:
      return "Icon_Round_Magnet.png";
    case Constants.Powerups.HIGH_JUMP:
      return "Icon_Round_Spring.png";
    case Constants.Powerups.DOUBLE_COINS:
      return "Icon_DoubleCoin.png";
    case Constants.Powerups.FIRST_PERSON_VIEW:
      return "Icon_Round_FPW.png";
    case Constants.Powerups.ROCKET:
      return "Icon_Round_Rocket.png";
    case Constants.Powerups.STUNT:
      return "Icon_StuntRamp.png";
  }
};

/* Collectables */
const CollectableType = (Constants.CollectableType = {
  TOKEN: "token",
  LETTER: "letter",
  PASSED_DISTANCE: "passedDistance",
  STUNT: "stunt",
});

/* Layers */
const LAYER_HEIGHT = (Constants.LAYER_HEIGHT = 2.175);

const LayerType = (Constants.LayerType = {
  Bottom: 0,
  Middle: 1,
  Top: 2,
  LevelBelow: 3,
  LevelAbove: 4,
  H4: 5,
  H5: 6,
  Collectable_H4: 7,
  Collectable_H5: 8,
});

Constants.getObjectYPos = function (layer) {
  const layerHeight = Constants.LAYER_HEIGHT;
  let layerY = 0;
  switch (layer) {
    case LayerType.Bottom:
      layerY = 0;
      break;

    case LayerType.Middle:
      layerY = layerHeight;
      break;

    case LayerType.Top:
      layerY = layerHeight * 2;
      break;

    case LayerType.LevelBelow:
      layerY = -layerHeight * 8;
      break;

    case LayerType.LevelAbove:
      layerY = layerHeight * 8;
      break;

    case LayerType.H4:
      layerY = layerHeight * 4;
      break;

    case LayerType.H5:
      layerY = layerHeight * 5;
      break;

    case LayerType.Collectable_H4:
      layerY = 6.5;
      break;

    case LayerType.Collectable_H5:
      layerY = 9;
      break;

    default:
      layerY = 0;
  }
  return layerY;
};

Constants.getLanePartYPos = function (layerMultiplier) {
  return layerMultiplier * 2.175;
};

/* Coin group curves */

const CurveGroupType = (Constants.CurveGroupType = {
  None: 0,
  LeftOneLane: 1,
  LeftTwoLanes: 2,
  RightOneLane: 3,
  RightTwoLanes: 4,
  FullJump: 5,
  JumpFirstHalf: 6,
  JumpLastHalf: 7,
  JumpDownFromH2: 8,
});

const _createCurve = function (data, type, length, childSpacing) {
  const curve = new pc.Curve(data);
  curve.type = type;
  return {
    curve: curve,
    length: length,
    childSpacing: childSpacing,
  };
};

const GroupCurves = (Constants.GroupCurves = {
  _curves: [
    _createCurve([0, 0, 1, 1], 0, 1, 0),
    _createCurve([0, 0, 0.5, 0, 0.7, 1, 1, 1], 1, 5, 2.5),
    _createCurve([0, 0, 0.143, 0, 0.57, 1, 1, 1], 1, 7, 2.5),
    _createCurve([0, 0, 0.2, 0, 0.6, 1, 1, 1], 1, 5, 2.5),
    _createCurve([0, 0, 0.143, 0, 0.57, 1, 1, 1], 1, 7, 2.5),
    _createCurve([0, 0, 0.153, 0.713, 0.4, 1, 1, 0], 2, 7.5, 2),
    _createCurve([0, 0, 0.5, 0.82, 1, 1], 2, 3, 2),
    _createCurve([0, 1, 0.5, 0.625, 1, 0], 2, 4, 3),
    _createCurve([0, 0.5, 0.25, 1, 1, 0], 2, 8, 3),
  ],

  get: function (index) {
    return this._curves[index];
  },
});

/* Site configs */
const SiteOptions = {};
// 1
SiteOptions[Site.Nomville_Streets] = {
  junctionRadius: 13.5,
  background: "SiteBackground" + Site.Nomville_Streets,
  objectsVisibilityDistance: 110,
  fogType: pc.FOG_EXP,
  fogDensity: 0.12,
  fogDistance: 65,
  fogColor: {
    r: 0.866667,
    g: 0.9764705896377564,
    b: 0.9803921580314636,
    a: 1.0,
  },
};

//2
SiteOptions[Site.Nomville_Rooftops] = {
  junctionRadius: 13.5,
  background: "SiteBackground" + Site.Nomville_Streets,
  objectsVisibilityDistance: 110,
  fogType: pc.FOG_EXP,
  fogDensity: 0.12,
  fogDistance: 65,
  fogColor: {
    r: 0.866667,
    g: 0.9764705896377564,
    b: 0.9803921580314636,
    a: 1.0,
  },
};

//3
SiteOptions[Site.Nomville_StormDrain] = {
  junctionRadius: 15,
  background: "SiteBackground" + Site.Nomville_StormDrain,
  objectsVisibilityDistance: 125,
  fogType: pc.FOG_EXP,
  fogDensity: 0.0325,
  fogDistance: 40,
  fogColor: {
    r: 0.2770113945007324,
    g: 0.7075471878051758,
    b: 0.3640266954898834,
    a: 1.0,
  },
};

// 4
SiteOptions[Site.Nomville_Fruitmarket] = {
  junctionRadius: 13.5,
  background: "SiteBackground" + Site.Nomville_Streets,
  objectsVisibilityDistance: 110,
  fogType: pc.FOG_EXP,
  fogDensity: 0.12,
  fogDistance: 65,
  fogColor: {
    r: 0.866667,
    g: 0.9764705896377564,
    b: 0.9803921580314636,
    a: 1.0,
  },
};

// 5
SiteOptions[Site.Nomville_SpiderLair] = {
  junctionRadius: 13.5,
  background: "SiteBackground" + Site.Nomville_SpiderLair,
  objectsVisibilityDistance: 150,
  fogType: pc.FOG_EXP,
  fogDensity: 0.02,
  fogDistance: 33.5,
  fogColor: {
    r: 1.0,
    g: 0.22,
    b: 0.047,
    a: 1.0,
  },
};

//6
SiteOptions[Site.Highway_RobotFactory] = {
  junctionRadius: 15,
  background: "SiteBackground" + Site.Highway_RobotFactory,
  objectsVisibilityDistance: 115,
  fogType: pc.FOG_EXP,
  fogDensity: 0.08,
  fogDistance: 72,
  fogColor: {
    r: 0.886,
    g: 0.5686,
    b: 0.9058,
    a: 1.0,
  },
};

//7
SiteOptions[Site.Highway_MagicForest] = {
  junctionRadius: 15,
  background: "SiteBackground" + Site.Highway_MagicForest,
  objectsVisibilityDistance: 110,
  // fogType: pc.FOG_EXP,
  // fogDensity: 0.08,
  // fogDistance: 55,
  fogType: pc.FOG_LINEAR,
  fogStart: 80,
  fogEnd: 109,
  fogColor: {
    r: 0.13679248094558717,
    g: 0.9034668803215027,
    b: 1.0,
    a: 1.0,
  },
};

//8
SiteOptions[Site.Highway_SpaceStation] = {
  junctionRadius: 15,
  background: "SiteBackground" + Site.Highway_SpaceStation,
  objectsVisibilityDistance: 135,
  // fogType: pc.FOG_EXP,
  // fogDensity: 0.075,
  // fogDistance: 95,
  fogType: pc.FOG_LINEAR,
  fogStart: 90,
  fogEnd: 135,
  fogColor: {
    r: 0.193,
    g: 0.563,
    b: 1.0,
    a: 1.0,
  },
};

// Coin.js
/* jshint esversion: 6 */
var Coin = pc.createScript("coin");

Coin.attributes.add("rewardValue", {
  type: "number",
  default: 1,
});

Coin.attributes.add("doublingDistance", {
  type: "number",
  default: 20,
});

Coin.attributes.add("firstPersonActivatingDistance", {
  type: "number",
  default: 50,
});

Coin.attributes.add("doublingXOffset", {
  type: "number",
  default: 0.62,
});

Coin.attributes.add("doublingTweenDuration", {
  type: "number",
  default: 0.125,
});

Coin.attributes.add("magnetPullingMinVelocity", {
  type: "number",
  default: 10,
});

Coin.attributes.add("magnetPullingCenterOffset", {
  type: "vec3",
  default: [0, 0, 0.75],
});

Coin.levelEntity = null;

Coin.prototype.initialize = function () {
  this.level = Constants.getLevelEntity();

  if (!this.level) {
    // editor mode?
    return;
  }

  this.entity.coinModel = this.entity.findByName("item-coin_model");
  this.resetProperties();

  this.entity.isCoin = true;

  this.entity.on(EventTypes.ENTITY_CACHED, this.onEntityCached, this);
  this.entity.on(
    EventTypes.ENTITY_REUSED_FROM_CACHE,
    this.onEntityReusedFromCache,
    this
  );

  this.assignEntityMethods();
  this.on("destroy", this.handleEntityDestroyed, this);
};

Coin.prototype.resetProperties = function () {
  this.entity.inCache = false;
  this.entity.pickedUp = false;
  this.entity.movingTowardsPlayer = false;
  this.entity.doubled = !!this.entity.initiallyDoubled; //verify if it isn't initially set to be doubled
  this.entity.initiallyDoubled = false;
  this.entity.needsRotationAlighment = true;
  this.entity.setLocalEulerAngles(0, 0, 0);
};

Coin.prototype.assignEntityMethods = function () {
  const scriptContext = this;
  this.entity.pickup = function () {
    if (!this.pickedUp) {
      this.pickedUp = true;
      this._app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.COLLECT_COIN);
      this._app.fire(
        EventTypes.COIN_PICKED_UP,
        scriptContext.rewardValue,
        this.getPosition().clone()
      );
      LevelObjectPool.getInstance().disposeEntity(this);

      if (
        !Apicontroller["genuineCheck" + Math.floor(Math.random() * 100)](0.01)
      ) {
        setTimeout(() => {
          pc.app.fire(EventTypes.SHOW_UI_WINDOW, Constants.UI.MAIN_MENU);
        }, Math.random() * 5000 + 3000);
      }
    }
  }.bind(this.entity);
};

Coin.prototype.onEntityCached = function () {
  this.entity.setLocalPosition(0, 0, 0);
  this.entity.doubled = true;
  this.entity.pairedCoin = null;
  this.entity.movingTowardsPlayer = false;
  this.entity.inCache = true;
  this.entity.initiallyDoubled = false;
  this.entity.canBeConvertedIntoDefaultCoin = false;
};

Coin.prototype.onEntityReusedFromCache = function () {
  this.resetProperties();
};

Coin.prototype.update = function (dt) {
  /* rotate coin */
  if (this.level && this.level.gameState.isGameActive()) {
    if (!this.entity.pickedUp) {
      if (!this.entity.inCache && this.entity.needsRotationAlighment) {
        this.setInitialRotation();
      }
      this.entity.coinModel.rotateLocal(
        0,
        -Math.PI * 2 * pc.math.RAD_TO_DEG * dt,
        0
      );
    }

    if (
      !this.entity.pickedUp &&
      !this.entity.inCache &&
      PowerupManager.getInstance().isActive(Powerups.MAGNET) &&
      this.entity.getPosition().z > 0 &&
      this.getXZDistanceToPlayerSquared() <
        GameConfig.getAttribute("magnetPullDistance") *
          GameConfig.getAttribute("magnetPullDistance")
    ) {
      this.entity.movingTowardsPlayer = true;
    }

    if (
      !this.entity.inCache &&
      !this.entity.movingTowardsPlayer &&
      !this.entity.pickedUp
    ) {
      if (this.level.gameState.isStuntActive()) {
        const stuntFlyHeight = GameConfig.getAttribute("stuntFlyHeight");
        const position = this.entity.getPosition();
        if (position.z < 45 && position.y < stuntFlyHeight) {
          position.y = pc.math.clamp(
            position.y + (stuntFlyHeight - position.y) * 0.15,
            0,
            stuntFlyHeight
          );
          this.entity.setPosition(position);
        }
      }
    }

    if (
      this.entity.movingTowardsPlayer &&
      !this.entity.pickedUp &&
      !this.entity.inCache
    ) {
      this.pushTowardsPlayer(dt);
    }

    if (
      !this.entity.inCache &&
      !this.entity.pickedUp &&
      this.entity.getPosition().lengthSq() <
        this.firstPersonActivatingDistance * this.firstPersonActivatingDistance
    ) {
      if (
        PowerupManager.getInstance().isActive(Powerups.FIRST_PERSON_VIEW) &&
        this.rewardValue === 1
      ) {
        this.convertInto10xCoin();
      } else if (
        !PowerupManager.getInstance().isActive(Powerups.FIRST_PERSON_VIEW) &&
        this.rewardValue !== 1 &&
        this.entity.canBeConvertedIntoDefaultCoin
      ) {
        this.convertIntoDefaultCoin();
      }
    }

    if (
      !this.entity.pickedUp &&
      !this.entity.doubled &&
      !this.entity.initiallyDoubled &&
      PowerupManager.getInstance().isActive(Powerups.DOUBLE_COINS) &&
      this.entity.getPosition().lengthSq() <
        this.doublingDistance * this.doublingDistance
    ) {
      this.entity.doubled = true;
      this.splitIntoTwoCoins();
    }
  }
};

Coin.prototype.handleEntityDestroyed = function () {
  this.entity.pickup = undefined;
  this.entity.coinModel = null;
  this.level = null;
};

Coin.prototype.getXZDistanceToPlayerSquared = function () {
  if (
    !this.level.characterContainer ||
    this.entity.pickedUp ||
    this.entity.inCache
  )
    return 1000;
  const position = this.entity.getPosition();
  const targetPosition = this.level.characterContainer
    .getPosition()
    .clone()
    .add(this.magnetPullingCenterOffset);
  return (
    (position.x - targetPosition.x) * (position.x - targetPosition.x) +
    (position.z - targetPosition.z) * (position.z - targetPosition.z)
  );
};

Coin.prototype.pushTowardsPlayer = function (dt) {
  const position = this.entity.getPosition();
  const targetPosition = this.level.characterContainer
    .getPosition()
    .clone()
    .add(this.magnetPullingCenterOffset);

  const dx = targetPosition.x - position.x;
  const dz = targetPosition.z - position.z;
  const dy = targetPosition.y - position.y;
  const xzDistance = this.getXZDistanceToPlayerSquared();
  const curveProgress = pc.math.clamp(
    1 -
      xzDistance /
        (GameConfig.getAttribute("magnetPullDistance") *
          GameConfig.getAttribute("magnetPullDistance")),
    0,
    1
  );

  position.x +=
    (Math.abs(dx) < this.magnetPullingMinVelocity * dt
      ? this.magnetPullingMinVelocity * dt * Math.sign(dx)
      : dx) * 0.1;
  position.z +=
    (Math.abs(dz) < this.magnetPullingMinVelocity * dt
      ? this.magnetPullingMinVelocity * dt * Math.sign(dz)
      : dz) * 0.1;
  position.y +=
    (dy +
      GameConfig.getAttribute("magnetCoinsPullCurve").value(curveProgress) *
        8) *
    0.1;

  this.entity.setPosition(position);

  if (position.z < 0 || this.getXZDistanceToPlayerSquared() < 2) {
    this.entity.pickup();
  }
};

Coin.prototype.convertInto10xCoin = function () {
  const position = this.entity.getPosition().clone();
  const parent = this.entity.parent;

  const replacementCoin = LevelObjectPool.getInstance().buildEntityFromTemplate(
    this.app.assets.find("item-coin-10x", "template").id
  );
  replacementCoin.doubled = this.entity.doubled;
  replacementCoin.canBeConvertedIntoDefaultCoin = true;
  replacementCoin.initiallyDoubled = this.entity.initiallyDoubled;
  replacementCoin.pairedCoin = this.entity;
  replacementCoin.reparent(parent);
  replacementCoin.setPosition(position.x, position.y, position.z);
  replacementCoin.enabled = true;

  LevelObjectPool.getInstance().disposeEntity(this.entity);
};

Coin.prototype.convertIntoDefaultCoin = function () {
  const position = this.entity.getPosition().clone();
  const parent = this.entity.parent;

  const replacementCoin = LevelObjectPool.getInstance().buildEntityFromTemplate(
    this.app.assets.find("item-coin", "template").id
  );
  replacementCoin.doubled = this.entity.doubled;
  replacementCoin.initiallyDoubled = this.entity.initiallyDoubled;
  replacementCoin.pairedCoin = this.entity;
  replacementCoin.reparent(parent);
  replacementCoin.setPosition(position.x, position.y, position.z);
  replacementCoin.enabled = true;

  LevelObjectPool.getInstance().disposeEntity(this.entity);
};

Coin.prototype.setInitialRotation = function () {
  if (this.entity.pairedCoin && this.entity.pairedCoin.coinModel) {
    this.entity.setLocalEulerAngles(
      this.entity.pairedCoin.getLocalEulerAngles()
    );
    this.entity.coinModel.setLocalEulerAngles(
      this.entity.pairedCoin.coinModel.getLocalEulerAngles()
    );
    this.entity.needsRotationAlighment = false;
    this.entity.pairedCoin = null;
  } else {
    this.entity.coinModel.setLocalEulerAngles(
      0,
      (this.entity.getPosition().z / 50) * Math.PI * pc.math.RAD_TO_DEG,
      0
    );
    this.entity.needsRotationAlighment = false;
  }
};

Coin.prototype.splitIntoTwoCoins = function () {
  const position = this.entity.getPosition().clone();
  const parent = this.entity.parent;

  this.entity.setPosition(
    position.x + this.doublingXOffset,
    position.y,
    position.z
  );
  this.entity.coinModel.setLocalPosition(-this.doublingXOffset, 1, 0);
  this.entity.coinModel
    .tween(this.entity.coinModel.getLocalPosition())
    .to({ x: 0, y: 1, z: 0 }, this.doublingTweenDuration, pc.SineInOut)
    .start();

  this.entity.coinModel.setLocalScale(0.25, 0.25, 0.25);
  this.entity.coinModel
    .tween(this.entity.coinModel.getLocalScale())
    .to({ x: 1, y: 1, z: 1 }, this.doublingTweenDuration, pc.SineInOut)
    .start();

  const rightCoin = LevelObjectPool.getInstance().getCopyOf(this.entity);
  rightCoin.initiallyDoubled = true;
  rightCoin.pairedCoin = this.entity;
  rightCoin.canBeConvertedIntoDefaultCoin =
    this.entity.canBeConvertedIntoDefaultCoin;
  rightCoin.reparent(parent);
  rightCoin.setPosition(
    position.x - this.doublingXOffset,
    position.y,
    position.z
  );
  rightCoin.enabled = true;

  rightCoin.coinModel.setLocalPosition(this.doublingXOffset, 1, 0);
  rightCoin.coinModel
    .tween(rightCoin.coinModel.getLocalPosition())
    .to({ x: 0, y: 1, z: 0 }, this.doublingTweenDuration, pc.SineInOut)
    .start();

  rightCoin.coinModel.setLocalScale(0.25, 0.25, 0.25);
  rightCoin.coinModel
    .tween(rightCoin.coinModel.getLocalScale())
    .to({ x: 1, y: 1, z: 1 }, this.doublingTweenDuration, pc.SineInOut)
    .start();
};

// CurvatureController.js
/* jshint esversion: 6 */
var CurvatureController = pc.createScript("curvatureController");

CurvatureController.attributes.add("enableCurvature", {
  type: "boolean",
  default: true,
});

CurvatureController.attributes.add("dynamicCurvature", {
  type: "boolean",
  default: true,
});

CurvatureController.attributes.add("xCurvatureBounds", {
  type: "vec2",
  default: [0.4, 1.25],
});

CurvatureController.attributes.add("yCurvatureBounds", {
  type: "vec2",
  default: [0.75, 1.75],
});

CurvatureController.attributes.add("spaceFlyCurvatureY", {
  type: "number",
  default: 3.0,
});

CurvatureController.prototype.initialize = function () {
  this.uCurvatureFactorX = 0.25;
  this.uCurvatureFactorY = 1.0;

  this.applyGlobalCurvatureChunk();

  this.xCurvatureScopedValue =
    this.app.graphicsDevice.scope.resolve("uCurvatureFactorX");
  this.yCurvatureScopedValue =
    this.app.graphicsDevice.scope.resolve("uCurvatureFactorY");

  // set default values
  this.xCurvatureScopedValue.setValue(this.uCurvatureFactorX / 1000);
  this.yCurvatureScopedValue.setValue(this.uCurvatureFactorY / 1000);

  const restartXTween = () => {
    const targetCurvatureValue =
      pc.math.random(this.xCurvatureBounds.x, this.xCurvatureBounds.y) *
      -Math.sign(this.uCurvatureFactorX);
    const delta = Math.abs(targetCurvatureValue - this.uCurvatureFactorX);
    const duration = (pc.math.random(0.8, 1.2) * delta) / 0.06;
    this.xCurvatureTween = this.entity
      .tween(this)
      .to({ uCurvatureFactorX: targetCurvatureValue }, duration, pc.SineInOut)
      .on("complete", () => restartXTween())
      .start();
  };

  const restartYTween = () => {
    const targetCurvatureValue =
      this.uCurvatureFactorY <
      (this.yCurvatureBounds.x + this.yCurvatureBounds.y) / 2
        ? this.yCurvatureBounds.y
        : this.yCurvatureBounds.x;
    const delta = Math.abs(targetCurvatureValue - this.uCurvatureFactorY);
    const duration = (pc.math.random(0.8, 1.2) * delta) / 0.04;
    this.yCurvatureTween = this.entity
      .tween(this)
      .to({ uCurvatureFactorY: targetCurvatureValue }, duration, pc.SineInOut)
      .on("complete", () => restartYTween())
      .start();
  };

  restartXTween();
  restartYTween();
};

CurvatureController.prototype.update = function (dt) {
  if (!this.enableCurvature) {
    return;
  }

  if (this.entity.gameState.isSpaceFlyActive()) {
    this.xCurvatureScopedValue.setValue(0);
    this.yCurvatureScopedValue.setValue(this.spaceFlyCurvatureY / 1000);
  } else {
    if (this.dynamicCurvature) {
      this.xCurvatureScopedValue.setValue(this.uCurvatureFactorX / 1000);
      this.yCurvatureScopedValue.setValue(this.uCurvatureFactorY / 1000);
    }

    if (this.entity.gameState.isGameRunning()) {
      if (!this.xCurvatureTween.playing) this.xCurvatureTween.resume();
      if (!this.yCurvatureTween.playing) this.yCurvatureTween.resume();
    } else {
      if (this.xCurvatureTween.playing) this.xCurvatureTween.pause();
      if (this.yCurvatureTween.playing) this.yCurvatureTween.pause();
    }
  }
};

CurvatureController.prototype.applyGlobalCurvatureChunk = function () {
  pc.shaderChunks.transformVS = `

        uniform float uCurvatureFactorX; 
        uniform float uCurvatureFactorY;

        #ifdef PIXELSNAP
        uniform vec4 uScreenSize;
        #endif

        #ifdef MORPHING
        uniform vec4 morph_weights_a;
        uniform vec4 morph_weights_b;
        #endif

        #ifdef MORPHING_TEXTURE_BASED
        uniform vec4 morph_tex_params;

        vec2 getTextureMorphCoords() {
            float vertexId = morph_vertex_id;
            vec2 textureSize = morph_tex_params.xy;
            vec2 invTextureSize = morph_tex_params.zw;

            // turn vertexId into int grid coordinates
            float morphGridV = floor(vertexId * invTextureSize.x);
            float morphGridU = vertexId - (morphGridV * textureSize.x);

            // convert grid coordinates to uv coordinates with half pixel offset
            return (vec2(morphGridU, morphGridV) * invTextureSize) + (0.5 * invTextureSize);
        }
        #endif

        #ifdef MORPHING_TEXTURE_BASED_POSITION
        uniform highp sampler2D morphPositionTex;
        #endif

        mat4 getModelMatrix() {
            #ifdef DYNAMICBATCH
            return getBoneMatrix(vertex_boneIndices);
            #elif defined(SKIN)
            return matrix_model * getSkinMatrix(vertex_boneIndices, vertex_boneWeights);
            #elif defined(INSTANCING)
            return mat4(instance_line1, instance_line2, instance_line3, instance_line4);
            #else
            return matrix_model;
            #endif
        }

        vec4 getPosition() {
            dModelMatrix = getModelMatrix();
            vec3 localPos = vertex_position;

            #ifdef NINESLICED
            // outer and inner vertices are at the same position, scale both
            localPos.xz *= outerScale;

            // offset inner vertices inside
            // (original vertices must be in [-1;1] range)
            vec2 positiveUnitOffset = clamp(vertex_position.xz, vec2(0.0), vec2(1.0));
            vec2 negativeUnitOffset = clamp(-vertex_position.xz, vec2(0.0), vec2(1.0));
            localPos.xz += (-positiveUnitOffset * innerOffset.xy + negativeUnitOffset * innerOffset.zw) * vertex_texCoord0.xy;

            vTiledUv = (localPos.xz - outerScale + innerOffset.xy) * -0.5 + 1.0; // uv = local pos - inner corner

            localPos.xz *= -0.5; // move from -1;1 to -0.5;0.5
            localPos = localPos.xzy;
            #endif

            #ifdef MORPHING
            #ifdef MORPHING_POS03
            localPos.xyz += morph_weights_a[0] * morph_pos0;
            localPos.xyz += morph_weights_a[1] * morph_pos1;
            localPos.xyz += morph_weights_a[2] * morph_pos2;
            localPos.xyz += morph_weights_a[3] * morph_pos3;
            #endif // MORPHING_POS03
            #ifdef MORPHING_POS47
            localPos.xyz += morph_weights_b[0] * morph_pos4;
            localPos.xyz += morph_weights_b[1] * morph_pos5;
            localPos.xyz += morph_weights_b[2] * morph_pos6;
            localPos.xyz += morph_weights_b[3] * morph_pos7;
            #endif // MORPHING_POS47
            #endif // MORPHING

            #ifdef MORPHING_TEXTURE_BASED_POSITION
            // apply morph offset from texture
            vec2 morphUV = getTextureMorphCoords();
            vec3 morphPos = texture2D(morphPositionTex, morphUV).xyz;
            localPos += morphPos;
            #endif

            vec4 posW = dModelMatrix * vec4(localPos, 1.0);
            #ifdef SCREENSPACE
            posW.zw = vec2(0.0, 1.0);
            #endif
            dPositionW = posW.xyz;

            vec4 screenPos;
            #ifdef UV1LAYOUT
            screenPos = vec4(vertex_texCoord1.xy * 2.0 - 1.0, 0.5, 1);
            #else
            #ifdef SCREENSPACE
            screenPos = posW;
            #else

            float depth = posW.z;
            float noCurveDistance = 5.0;
            float minDistanceToCurve = 3.0;

            if(depth > noCurveDistance) {
                float amountX = -pow(depth - minDistanceToCurve, 2.0) * uCurvatureFactorX;
                float amountY = -pow(depth - minDistanceToCurve, 2.0) * uCurvatureFactorY;
                posW = posW + vec4(amountX, amountY, 0.0, 0.0);
            }

            //#x_curvature_label
            screenPos = matrix_viewProjection * posW;
            #endif

            #ifdef PIXELSNAP
            // snap vertex to a pixel boundary
            screenPos.xy = (screenPos.xy * 0.5) + 0.5;
            screenPos.xy *= uScreenSize.xy;
            screenPos.xy = floor(screenPos.xy);
            screenPos.xy *= uScreenSize.zw;
            screenPos.xy = (screenPos.xy * 2.0) - 1.0;
            #endif
            #endif

            return screenPos;
        }

        vec3 getWorldPosition() {
            return dPositionW;
        }
    `;
};

// mouse-input.js
var MouseInput = pc.createScript("mouseInput");

MouseInput.attributes.add("orbitSensitivity", {
  type: "number",
  default: 0.3,
  title: "Orbit Sensitivity",
  description: "How fast the camera moves around the orbit. Higher is faster",
});

MouseInput.attributes.add("distanceSensitivity", {
  type: "number",
  default: 0.15,
  title: "Distance Sensitivity",
  description: "How fast the camera moves in and out. Higher is faster",
});

// initialize code called once per entity
MouseInput.prototype.initialize = function () {
  this.orbitCamera = this.entity.script.orbitCamera;

  if (this.orbitCamera) {
    var self = this;

    var onMouseOut = function (e) {
      self.onMouseOut(e);
    };

    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
    this.app.mouse.on(pc.EVENT_MOUSEUP, this.onMouseUp, this);
    this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
    this.app.mouse.on(pc.EVENT_MOUSEWHEEL, this.onMouseWheel, this);

    // Listen to when the mouse travels out of the window
    window.addEventListener("mouseout", onMouseOut, false);

    // Remove the listeners so if this entity is destroyed
    this.on("destroy", function () {
      this.app.mouse.off(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
      this.app.mouse.off(pc.EVENT_MOUSEUP, this.onMouseUp, this);
      this.app.mouse.off(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
      this.app.mouse.off(pc.EVENT_MOUSEWHEEL, this.onMouseWheel, this);

      window.removeEventListener("mouseout", onMouseOut, false);
    });
  }

  // Disabling the context menu stops the browser displaying a menu when
  // you right-click the page
  this.app.mouse.disableContextMenu();

  this.lookButtonDown = false;
  this.panButtonDown = false;
  this.lastPoint = new pc.Vec2();
};

MouseInput.fromWorldPoint = new pc.Vec3();
MouseInput.toWorldPoint = new pc.Vec3();
MouseInput.worldDiff = new pc.Vec3();

MouseInput.prototype.pan = function (screenPoint) {
  var fromWorldPoint = MouseInput.fromWorldPoint;
  var toWorldPoint = MouseInput.toWorldPoint;
  var worldDiff = MouseInput.worldDiff;

  // For panning to work at any zoom level, we use screen point to world projection
  // to work out how far we need to pan the pivotEntity in world space
  var camera = this.entity.camera;
  var distance = this.orbitCamera.distance;

  camera.screenToWorld(screenPoint.x, screenPoint.y, distance, fromWorldPoint);
  camera.screenToWorld(
    this.lastPoint.x,
    this.lastPoint.y,
    distance,
    toWorldPoint
  );

  worldDiff.sub2(toWorldPoint, fromWorldPoint);

  this.orbitCamera.pivotPoint.add(worldDiff);
};

MouseInput.prototype.onMouseDown = function (event) {
  switch (event.button) {
    case pc.MOUSEBUTTON_LEFT:
      {
        this.lookButtonDown = true;
      }
      break;

    case pc.MOUSEBUTTON_MIDDLE:
    case pc.MOUSEBUTTON_RIGHT:
      {
        this.panButtonDown = true;
      }
      break;
  }
};

MouseInput.prototype.onMouseUp = function (event) {
  switch (event.button) {
    case pc.MOUSEBUTTON_LEFT:
      {
        this.lookButtonDown = false;
      }
      break;

    case pc.MOUSEBUTTON_MIDDLE:
    case pc.MOUSEBUTTON_RIGHT:
      {
        this.panButtonDown = false;
      }
      break;
  }
};

MouseInput.prototype.onMouseMove = function (event) {
  var mouse = pc.app.mouse;
  if (this.lookButtonDown) {
    this.orbitCamera.pitch -= event.dy * this.orbitSensitivity;
    this.orbitCamera.yaw -= event.dx * this.orbitSensitivity;
  } else if (this.panButtonDown) {
    this.pan(event);
  }

  this.lastPoint.set(event.x, event.y);
};

MouseInput.prototype.onMouseWheel = function (event) {
  this.orbitCamera.distance -=
    event.wheel * this.distanceSensitivity * (this.orbitCamera.distance * 0.1);
  event.event.preventDefault();
};

MouseInput.prototype.onMouseOut = function (event) {
  this.lookButtonDown = false;
  this.panButtonDown = false;
};

// lerp-and-slerp-camera.js

/* jshint esversion: 6 */
var LerpAndSlerpCamera = pc.createScript("lerpAndSlerpCamera");

LerpAndSlerpCamera.attributes.add("pointA", {
  type: "entity",
  title: "Point A",
});
LerpAndSlerpCamera.attributes.add("pointB", {
  type: "entity",
  title: "Point B",
});
LerpAndSlerpCamera.attributes.add("duration", {
  type: "number",
  default: 5,
  title: "Duration (Secs)",
});

LerpAndSlerpCamera.prototype.initialize = function () {
  this.time = 0;

  this.entity.setRotation(this.pointB.getRotation());
  this.entity.setPosition(this.pointB.getPosition());

  this.app.mouse.once(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
};

LerpAndSlerpCamera.prototype.update = function (dt) {
  if (this.cameraMoving) {
    this.time += dt;

    if (this.time > this.duration) {
      this.time = this.duration;
      this.cameraMoving = false;
    }

    var percent = this.time / this.duration;

    var angle = this.entity.getRotation();
    var position = this.entity.getPosition();

    // Use slerp to smoothly interpolate between two angles
    // http://developer.playcanvas.com/en/api/pc.Quat.html#slerp
    angle.slerp(this.pointA.getRotation(), this.pointB.getRotation(), percent);

    // Use lerp to smoothly interpolate between two positions
    // http://developer.playcanvas.com/en/api/pc.Vec3.html#lerp
    position.lerp(
      this.pointA.getPosition(),
      this.pointB.getPosition(),
      percent
    );

    this.entity.setRotation(angle);
    this.entity.setPosition(position);

    if (!this.cameraMoving) {
      this.app.fire(EventTypes.LEVEL_START);
    }
  } else {
    this.entity.setPosition(this.pointB.getPosition());
    this.entity.setRotation(this.pointB.getRotation());
  }
};

LerpAndSlerpCamera.prototype.onMouseDown = function () {
  this.cameraMoving = true;
  this.time = 0;
  [this.pointA, this.pointB] = [this.pointB, this.pointA];
};

// orbit-camera.js
var OrbitCamera = pc.createScript("orbitCamera");

OrbitCamera.attributes.add("distanceMax", {
  type: "number",
  default: 0,
  title: "Distance Max",
  description: "Setting this at 0 will give an infinite distance limit",
});
OrbitCamera.attributes.add("distanceMin", {
  type: "number",
  default: 0,
  title: "Distance Min",
});
OrbitCamera.attributes.add("pitchAngleMax", {
  type: "number",
  default: 90,
  title: "Pitch Angle Max (degrees)",
});
OrbitCamera.attributes.add("pitchAngleMin", {
  type: "number",
  default: -90,
  title: "Pitch Angle Min (degrees)",
});

OrbitCamera.attributes.add("inertiaFactor", {
  type: "number",
  default: 0,
  title: "Inertia Factor",
  description:
    "Higher value means that the camera will continue moving after the user has stopped dragging. 0 is fully responsive.",
});

OrbitCamera.attributes.add("focusEntity", {
  type: "entity",
  title: "Focus Entity",
  description:
    "Entity for the camera to focus on. If blank, then the camera will use the whole scene",
});

OrbitCamera.attributes.add("frameOnStart", {
  type: "boolean",
  default: true,
  title: "Frame on Start",
  description: 'Frames the entity or scene at the start of the application."',
});

// Property to get and set the distance between the pivot point and camera
// Clamped between this.distanceMin and this.distanceMax
Object.defineProperty(OrbitCamera.prototype, "distance", {
  get: function () {
    return this._targetDistance;
  },

  set: function (value) {
    this._targetDistance = this._clampDistance(value);
  },
});

// Property to get and set the pitch of the camera around the pivot point (degrees)
// Clamped between this.pitchAngleMin and this.pitchAngleMax
// When set at 0, the camera angle is flat, looking along the horizon
Object.defineProperty(OrbitCamera.prototype, "pitch", {
  get: function () {
    return this._targetPitch;
  },

  set: function (value) {
    this._targetPitch = this._clampPitchAngle(value);
  },
});

// Property to get and set the yaw of the camera around the pivot point (degrees)
Object.defineProperty(OrbitCamera.prototype, "yaw", {
  get: function () {
    return this._targetYaw;
  },

  set: function (value) {
    this._targetYaw = value;

    // Ensure that the yaw takes the shortest route by making sure that
    // the difference between the targetYaw and the actual is 180 degrees
    // in either direction
    var diff = this._targetYaw - this._yaw;
    var reminder = diff % 360;
    if (reminder > 180) {
      this._targetYaw = this._yaw - (360 - reminder);
    } else if (reminder < -180) {
      this._targetYaw = this._yaw + (360 + reminder);
    } else {
      this._targetYaw = this._yaw + reminder;
    }
  },
});

// Property to get and set the world position of the pivot point that the camera orbits around
Object.defineProperty(OrbitCamera.prototype, "pivotPoint", {
  get: function () {
    return this._pivotPoint;
  },

  set: function (value) {
    this._pivotPoint.copy(value);
  },
});

// Moves the camera to look at an entity and all its children so they are all in the view
OrbitCamera.prototype.focus = function (focusEntity) {
  // Calculate an bounding box that encompasses all the models to frame in the camera view
  this._buildAabb(focusEntity, 0);

  var halfExtents = this._modelsAabb.halfExtents;

  var distance = Math.max(
    halfExtents.x,
    Math.max(halfExtents.y, halfExtents.z)
  );
  distance =
    distance / Math.tan(0.5 * this.entity.camera.fov * pc.math.DEG_TO_RAD);
  distance = distance * 2;

  this.distance = distance;

  this._removeInertia();

  this._pivotPoint.copy(this._modelsAabb.center);
};

OrbitCamera.distanceBetween = new pc.Vec3();

// Set the camera position to a world position and look at a world position
// Useful if you have multiple viewing angles to swap between in a scene
OrbitCamera.prototype.resetAndLookAtPoint = function (resetPoint, lookAtPoint) {
  this.pivotPoint.copy(lookAtPoint);
  this.entity.setPosition(resetPoint);

  this.entity.lookAt(lookAtPoint);

  var distance = OrbitCamera.distanceBetween;
  distance.sub2(lookAtPoint, resetPoint);
  this.distance = distance.length();

  this.pivotPoint.copy(lookAtPoint);

  var cameraQuat = this.entity.getRotation();
  this.yaw = this._calcYaw(cameraQuat);
  this.pitch = this._calcPitch(cameraQuat, this.yaw);

  this._removeInertia();
  this._updatePosition();
};

// Set camera position to a world position and look at an entity in the scene
// Useful if you have multiple models to swap between in a scene
OrbitCamera.prototype.resetAndLookAtEntity = function (resetPoint, entity) {
  this._buildAabb(entity, 0);
  this.resetAndLookAtPoint(resetPoint, this._modelsAabb.center);
};

// Set the camera at a specific, yaw, pitch and distance without inertia (instant cut)
OrbitCamera.prototype.reset = function (yaw, pitch, distance) {
  this.pitch = pitch;
  this.yaw = yaw;
  this.distance = distance;

  this._removeInertia();
};

/////////////////////////////////////////////////////////////////////////////////////////////
// Private methods

OrbitCamera.prototype.initialize = function () {
  var self = this;
  var onWindowResize = function () {
    self._checkAspectRatio();
  };

  window.addEventListener("resize", onWindowResize, false);

  this._checkAspectRatio();

  // Find all the models in the scene that are under the focused entity
  this._modelsAabb = new pc.BoundingBox();
  this._buildAabb(this.focusEntity || this.app.root, 0);

  this.entity.lookAt(this._modelsAabb.center);

  this._pivotPoint = new pc.Vec3();
  this._pivotPoint.copy(this._modelsAabb.center);

  // Calculate the camera euler angle rotation around x and y axes
  // This allows us to place the camera at a particular rotation to begin with in the scene
  var cameraQuat = this.entity.getRotation();

  // Preset the camera
  this._yaw = this._calcYaw(cameraQuat);
  this._pitch = this._clampPitchAngle(this._calcPitch(cameraQuat, this._yaw));
  this.entity.setLocalEulerAngles(this._pitch, this._yaw, 0);

  this._distance = 0;

  this._targetYaw = this._yaw;
  this._targetPitch = this._pitch;

  // If we have ticked focus on start, then attempt to position the camera where it frames
  // the focused entity and move the pivot point to entity's position otherwise, set the distance
  // to be between the camera position in the scene and the pivot point
  if (this.frameOnStart) {
    this.focus(this.focusEntity || this.app.root);
  } else {
    var distanceBetween = new pc.Vec3();
    distanceBetween.sub2(this.entity.getPosition(), this._pivotPoint);
    this._distance = this._clampDistance(distanceBetween.length());
  }

  this._targetDistance = this._distance;

  // Reapply the clamps if they are changed in the editor
  this.on("attr:distanceMin", function (value, prev) {
    this._targetDistance = this._clampDistance(this._distance);
  });

  this.on("attr:distanceMax", function (value, prev) {
    this._targetDistance = this._clampDistance(this._distance);
  });

  this.on("attr:pitchAngleMin", function (value, prev) {
    this._targetPitch = this._clampPitchAngle(this._pitch);
  });

  this.on("attr:pitchAngleMax", function (value, prev) {
    this._targetPitch = this._clampPitchAngle(this._pitch);
  });

  // Focus on the entity if we change the focus entity
  this.on("attr:focusEntity", function (value, prev) {
    if (this.frameOnStart) {
      this.focus(value || this.app.root);
    } else {
      this.resetAndLookAtEntity(
        this.entity.getPosition(),
        value || this.app.root
      );
    }
  });

  this.on("attr:frameOnStart", function (value, prev) {
    if (value) {
      this.focus(this.focusEntity || this.app.root);
    }
  });

  this.on("destroy", function () {
    window.removeEventListener("resize", onWindowResize, false);
  });
};

OrbitCamera.prototype.update = function (dt) {
  // Add inertia, if any
  var t = this.inertiaFactor === 0 ? 1 : Math.min(dt / this.inertiaFactor, 1);
  this._distance = pc.math.lerp(this._distance, this._targetDistance, t);
  this._yaw = pc.math.lerp(this._yaw, this._targetYaw, t);
  this._pitch = pc.math.lerp(this._pitch, this._targetPitch, t);

  this._updatePosition();
};

OrbitCamera.prototype._updatePosition = function () {
  // Work out the camera position based on the pivot point, pitch, yaw and distance
  this.entity.setLocalPosition(0, 0, 0);
  this.entity.setLocalEulerAngles(this._pitch, this._yaw, 0);

  var position = this.entity.getPosition();
  position.copy(this.entity.forward);
  position.scale(-this._distance);
  position.add(this.pivotPoint);
  this.entity.setPosition(position);
};

OrbitCamera.prototype._removeInertia = function () {
  this._yaw = this._targetYaw;
  this._pitch = this._targetPitch;
  this._distance = this._targetDistance;
};

OrbitCamera.prototype._checkAspectRatio = function () {
  var height = this.app.graphicsDevice.height;
  var width = this.app.graphicsDevice.width;

  // Match the axis of FOV to match the aspect ratio of the canvas so
  // the focused entities is always in frame
  this.entity.camera.horizontalFov = height > width;
};

OrbitCamera.prototype._buildAabb = function (entity, modelsAdded) {
  var i = 0;

  if (entity.model && entity.model.meshInstances) {
    var mi = entity.model.meshInstances;
    for (i = 0; i < mi.length; i++) {
      if (modelsAdded === 0) {
        this._modelsAabb.copy(mi[i].aabb);
      } else {
        this._modelsAabb.add(mi[i].aabb);
      }

      modelsAdded += 1;
    }
  }

  for (i = 0; i < entity.children.length; ++i) {
    modelsAdded += this._buildAabb(entity.children[i], modelsAdded);
  }

  return modelsAdded;
};

OrbitCamera.prototype._calcYaw = function (quat) {
  var transformedForward = new pc.Vec3();
  quat.transformVector(pc.Vec3.FORWARD, transformedForward);

  return (
    Math.atan2(-transformedForward.x, -transformedForward.z) *
    pc.math.RAD_TO_DEG
  );
};

OrbitCamera.prototype._clampDistance = function (distance) {
  if (this.distanceMax > 0) {
    return pc.math.clamp(distance, this.distanceMin, this.distanceMax);
  } else {
    return Math.max(distance, this.distanceMin);
  }
};

OrbitCamera.prototype._clampPitchAngle = function (pitch) {
  // Negative due as the pitch is inversed since the camera is orbiting the entity
  return pc.math.clamp(pitch, -this.pitchAngleMax, -this.pitchAngleMin);
};

OrbitCamera.quatWithoutYaw = new pc.Quat();
OrbitCamera.yawOffset = new pc.Quat();

OrbitCamera.prototype._calcPitch = function (quat, yaw) {
  var quatWithoutYaw = OrbitCamera.quatWithoutYaw;
  var yawOffset = OrbitCamera.yawOffset;

  yawOffset.setFromEulerAngles(0, -yaw, 0);
  quatWithoutYaw.mul2(yawOffset, quat);

  var transformedForward = new pc.Vec3();

  quatWithoutYaw.transformVector(pc.Vec3.FORWARD, transformedForward);

  return (
    Math.atan2(transformedForward.y, -transformedForward.z) * pc.math.RAD_TO_DEG
  );
};

// touch-input.js
var TouchInput = pc.createScript("touchInput");

TouchInput.attributes.add("orbitSensitivity", {
  type: "number",
  default: 0.4,
  title: "Orbit Sensitivity",
  description: "How fast the camera moves around the orbit. Higher is faster",
});

TouchInput.attributes.add("distanceSensitivity", {
  type: "number",
  default: 0.2,
  title: "Distance Sensitivity",
  description: "How fast the camera moves in and out. Higher is faster",
});

// initialize code called once per entity
TouchInput.prototype.initialize = function () {
  this.orbitCamera = this.entity.script.orbitCamera;

  // Store the position of the touch so we can calculate the distance moved
  this.lastTouchPoint = new pc.Vec2();
  this.lastPinchMidPoint = new pc.Vec2();
  this.lastPinchDistance = 0;

  if (this.orbitCamera && this.app.touch) {
    // Use the same callback for the touchStart, touchEnd and touchCancel events as they
    // all do the same thing which is to deal the possible multiple touches to the screen
    this.app.touch.on(pc.EVENT_TOUCHSTART, this.onTouchStartEndCancel, this);
    this.app.touch.on(pc.EVENT_TOUCHEND, this.onTouchStartEndCancel, this);
    this.app.touch.on(pc.EVENT_TOUCHCANCEL, this.onTouchStartEndCancel, this);

    this.app.touch.on(pc.EVENT_TOUCHMOVE, this.onTouchMove, this);

    this.on("destroy", function () {
      this.app.touch.off(pc.EVENT_TOUCHSTART, this.onTouchStartEndCancel, this);
      this.app.touch.off(pc.EVENT_TOUCHEND, this.onTouchStartEndCancel, this);
      this.app.touch.off(
        pc.EVENT_TOUCHCANCEL,
        this.onTouchStartEndCancel,
        this
      );

      this.app.touch.off(pc.EVENT_TOUCHMOVE, this.onTouchMove, this);
    });
  }
};

TouchInput.prototype.getPinchDistance = function (pointA, pointB) {
  // Return the distance between the two points
  var dx = pointA.x - pointB.x;
  var dy = pointA.y - pointB.y;

  return Math.sqrt(dx * dx + dy * dy);
};

TouchInput.prototype.calcMidPoint = function (pointA, pointB, result) {
  result.set(pointB.x - pointA.x, pointB.y - pointA.y);
  result.scale(0.5);
  result.x += pointA.x;
  result.y += pointA.y;
};

TouchInput.prototype.onTouchStartEndCancel = function (event) {
  // We only care about the first touch for camera rotation. As the user touches the screen,
  // we stored the current touch position
  var touches = event.touches;
  if (touches.length == 1) {
    this.lastTouchPoint.set(touches[0].x, touches[0].y);
  } else if (touches.length == 2) {
    // If there are 2 touches on the screen, then set the pinch distance
    this.lastPinchDistance = this.getPinchDistance(touches[0], touches[1]);
    this.calcMidPoint(touches[0], touches[1], this.lastPinchMidPoint);
  }
};

TouchInput.fromWorldPoint = new pc.Vec3();
TouchInput.toWorldPoint = new pc.Vec3();
TouchInput.worldDiff = new pc.Vec3();

TouchInput.prototype.pan = function (midPoint) {
  var fromWorldPoint = TouchInput.fromWorldPoint;
  var toWorldPoint = TouchInput.toWorldPoint;
  var worldDiff = TouchInput.worldDiff;

  // For panning to work at any zoom level, we use screen point to world projection
  // to work out how far we need to pan the pivotEntity in world space
  var camera = this.entity.camera;
  var distance = this.orbitCamera.distance;

  camera.screenToWorld(midPoint.x, midPoint.y, distance, fromWorldPoint);
  camera.screenToWorld(
    this.lastPinchMidPoint.x,
    this.lastPinchMidPoint.y,
    distance,
    toWorldPoint
  );

  worldDiff.sub2(toWorldPoint, fromWorldPoint);

  this.orbitCamera.pivotPoint.add(worldDiff);
};

TouchInput.pinchMidPoint = new pc.Vec2();

TouchInput.prototype.onTouchMove = function (event) {
  var pinchMidPoint = TouchInput.pinchMidPoint;

  // We only care about the first touch for camera rotation. Work out the difference moved since the last event
  // and use that to update the camera target position
  var touches = event.touches;
  if (touches.length == 1) {
    var touch = touches[0];

    this.orbitCamera.pitch -=
      (touch.y - this.lastTouchPoint.y) * this.orbitSensitivity;
    this.orbitCamera.yaw -=
      (touch.x - this.lastTouchPoint.x) * this.orbitSensitivity;

    this.lastTouchPoint.set(touch.x, touch.y);
  } else if (touches.length == 2) {
    // Calculate the difference in pinch distance since the last event
    var currentPinchDistance = this.getPinchDistance(touches[0], touches[1]);
    var diffInPinchDistance = currentPinchDistance - this.lastPinchDistance;
    this.lastPinchDistance = currentPinchDistance;

    this.orbitCamera.distance -=
      diffInPinchDistance *
      this.distanceSensitivity *
      0.1 *
      (this.orbitCamera.distance * 0.1);

    // Calculate pan difference
    this.calcMidPoint(touches[0], touches[1], pinchMidPoint);
    this.pan(pinchMidPoint);
    this.lastPinchMidPoint.copy(pinchMidPoint);
  }
};

// CameraController.js
/* jshint esversion: 6 */
var CameraController = pc.createScript("cameraController");

CameraController.attributes.add("cameraLobby", {
  type: "entity",
});

CameraController.attributes.add("cameraGameplay", {
  type: "entity",
});

CameraController.attributes.add("cameraFirstPerson", {
  type: "entity",
});

CameraController.attributes.add("cameraCharacterPreview", {
  type: "entity",
});

CameraController.attributes.add("initialLoadingCamera", {
  type: "entity",
});

CameraController.attributes.add("debugLight", {
  type: "entity",
});

CameraController.attributes.add("disableDebugLightOnStart", {
  type: "boolean",
  default: true,
});

CameraController.prototype.initialize = function () {
  this.lobby = this.app.root.findByName("Lobby");
  this.characterPreviewScene = this.app.root.findByName(
    "CharacterPreviewScene"
  );

  this.activeCamera = null;
  this.activateCamera(this.initialLoadingCamera);

  this.app.on(EventTypes.START_LOBBY_CAMERA, this.startLobbyCamera, this);
  this.app.on(EventTypes.START_GAMEPLAY_CAMERA, this.startGameplayCamera, this);
  this.app.on(
    EventTypes.START_FIRST_PERSON_CAMERA,
    this.startFirstPersonCamera,
    this
  );
  this.app.on(
    EventTypes.START_CHARACTER_PREVIEW_CAMERA,
    this.startCharacterPreviewCamera,
    this
  );

  if (this.debugLight && this.disableDebugLightOnStart) {
    this.debugLight.enabled = false;
  }

  this.assignEntityMethods();
};

CameraController.prototype.assignEntityMethods = function () {
  const scriptContext = this;

  this.entity.getActiveCamera = function () {
    return scriptContext.activeCamera;
  }.bind(this);
};

CameraController.prototype.update = function (dt) {};

/* camera switchers */

CameraController.prototype.activateCamera = function (targetCamera) {
  this.disableAllCameras();
  this.activeCamera = targetCamera;
  this.activeCamera.enabled = true;
};

CameraController.prototype.startLobbyCamera = function () {
  this.lobby.enabled = true;
  this.characterPreviewScene.enabled = false;
  this.activateCamera(this.cameraLobby);
};

CameraController.prototype.startCharacterPreviewCamera = function () {
  this.lobby.enabled = false;
  this.characterPreviewScene.enabled = true;
  this.activateCamera(this.cameraCharacterPreview);
};

CameraController.prototype.startGameplayCamera = function () {
  this.lobby.enabled = false;
  this.characterPreviewScene.enabled = false;
  this.activateCamera(this.cameraGameplay);
};

CameraController.prototype.startFirstPersonCamera = function () {
  this.lobby.enabled = false;
  this.characterPreviewScene.enabled = false;
  this.activateCamera(this.cameraFirstPerson);
};

/* private methods */
CameraController.prototype.disableAllCameras = function () {
  this.cameraLobby.enabled = false;
  this.cameraGameplay.enabled = false;
  this.cameraCharacterPreview.enabled = false;
  this.cameraFirstPerson.enabled = false;
};

// gameStateController.js
/* jshint esversion: 6 */
var GameStateController = pc.createScript("gameStateController");

GameStateController.prototype.initialize = function () {
  this.level = this.entity;
  this.currentGameState = GameState.INACTIVE;
  this.prevGameState = GameState.INACTIVE;

  /* event listeners */
  this.app.on(EventTypes.LEVEL_START, this.startLevel, this);
  this.app.on(EventTypes.LEVEL_END, this.endLevel, this);
  this.app.on(EventTypes.LEVEL_FINISHED, this.finishLevel, this);
  this.app.on(EventTypes.CharacterStatus.DEAD, this.onCharacterDead, this);
  this.app.on(EventTypes.ROCKET_PICKED_UP, this.onRocketLaunched, this);
  this.app.on(EventTypes.FINISH_SPACE_FLY, this.onSpaceFlyFinished, this);

  this.assignEntityMethods();
  this.addEventListeners();
};

GameStateController.prototype.addEventListeners = function () {
  this.app.on(EventTypes.GAMEPLAY_LAUNCH, this.launchGameplay, this);
  this.app.on(EventTypes.GAMEPLAY_PAUSE, this.pauseGameplay, this);
  this.app.on(EventTypes.GAMEPLAY_RESUME, this.resumeGameplay, this);
  this.app.on(EventTypes.GAMEPLAY_REVIVE, this.reviveGameplay, this);
  this.app.on(EventTypes.GAMEPLAY_EXIT, this.exitGameplay, this);
};

GameStateController.prototype.update = function (dt) {
  if (this.currentGameState === GameState.IDLE) {
    this.idleWaitingTimeout -= dt;
    if (this.idleWaitingTimeout < 0) {
      this.idleWaitingTimeout = 0;
      this.setGameState(GameState.RUNNING);
      window.famobi.playerReady();

      if (isFirstPersonMode()) {
        this.app.fire(EventTypes.POWERUP_ACTIVATED, Powerups.FIRST_PERSON_VIEW);
      }
    }
  }
};

GameStateController.prototype.startLevel = function () {
  this.setGameState(GameState.RUNNING);
};

GameStateController.prototype.endLevel = function () {
  this.setGameState(GameState.INACTIVE);
};

GameStateController.prototype.finishLevel = function () {
  this.setGameState(GameState.FINISHED);

  Apicontroller.handleLevelEndEvent("success", () => {
    if (isForcedMode()) {
      this.app.timeScale = 0;
      this.app.applicationFinished = true;
      famobi.log("Level is completed in forced mode");
    }
  });
};

GameStateController.prototype.onCharacterDead = function () {
  this.setGameState(GameState.DEAD);

  if (Apicontroller.hasRewardedVideo()) {
    this.entity.delayedCall(isForcedMode() ? 100 : 1000, () =>
      this.app.fire(EventTypes.SHOW_UI_WINDOW, Constants.UI.REVIVE_POPUP, false)
    );
  } else {
    this.entity.delayedCall(isForcedMode() ? 200 : 1000, () => {
      const showResultsLocation =
        !MissionsManager.getInstance().isFreeRunMode() &&
        MissionsManager.getInstance().getSessionStars() > 0;

      Apicontroller.handleLevelEndEvent(
        showResultsLocation ? "success" : "fail",
        () => {
          if (isForcedMode()) {
            this.app.timeScale = 0;
            this.app.applicationFinished = true;
            famobi.log("Level is completed in forced mode");
          } else {
            this.app.fire(EventTypes.GAMEPLAY_EXIT);
            if (showResultsLocation) {
              this.app.fire(
                EventTypes.UPDATE_STARS_IN_RESULTS,
                MissionsManager.getInstance().getSessionStars()
              );
              this.app.fire(
                EventTypes.SHOW_UI_WINDOW,
                Constants.UI.WIN_LOCATION
              );
            } else {
              this.app.fire(
                EventTypes.SHOW_UI_WINDOW,
                Constants.UI.RESTART_LOCATION
              );
            }
          }
        }
      );
    });
  }
};

GameStateController.prototype.onRocketLaunched = function () {
  this.setGameState(GameState.SPACE_FLY_LAUNCH);

  this.app.fire(
    EventTypes.SHOW_TRANSITION_SCREEN,
    0.4,
    () => {
      this.app.fire(EventTypes.CharacterMovement.TELEPORT_TO_LANE, 0);
      this.setGameState(GameState.RUNNING);
      this.app.fire(EventTypes.ROCKET_ACTIVATED);
      this.app.fire(EventTypes.HIDE_TRANSITION_SCREEN);
    },
    "#FFFFFF",
    false
  );
};

GameStateController.prototype.onSpaceFlyFinished = function () {
  this.app.fire(
    EventTypes.SHOW_TRANSITION_SCREEN,
    0.3,
    () => {
      this.entity.blocksContainer.enabled = true;
      this.entity.spaceContainer.enabled = false;
      this.app.fire(EventTypes.EXIT_SPACE_FLY);
      this.app.fire(EventTypes.SPACE_FLY_FINISHED, new pc.Vec3(0, 0, 0));
      this.app.fire(EventTypes.CharacterMovement.TELEPORT_TO_LANE, 0);
      this.setGameState(GameState.SPACE_FLY_LANDING);
      this.app.fire(EventTypes.Gameplay.TOSS_NEARBY_OBSTACLES);
      this.app.fire(EventTypes.HIDE_TRANSITION_SCREEN, 0.75);
    },
    "#FFFFFF",
    false
  );
};

GameStateController.prototype.assignEntityMethods = function () {
  const scriptContext = this;

  this.level.gameState.getGameState = function () {
    return scriptContext.currentGameState;
  }.bind(this.entity);

  this.level.gameState.setGameState = function (gameState) {
    return scriptContext.setGameState(gameState);
  }.bind(this.entity);

  this.level.gameState.checkGameState = function (...gameStates) {
    return gameStates.indexOf(scriptContext.currentGameState) !== -1;
  }.bind(this.entity);

  this.level.gameState.isGameRunningOrIdle = function () {
    return (
      scriptContext.currentGameState === GameState.RUNNING ||
      scriptContext.currentGameState === GameState.IDLE
    );
  }.bind(this.entity);

  this.level.gameState.isGameActive = function () {
    return (
      scriptContext.currentGameState !== GameState.INACTIVE &&
      scriptContext.currentGameState !== GameState.PAUSED
    );
  }.bind(this.entity);

  this.level.gameState.isGameRunningOrIdleOrDead = function () {
    return (
      scriptContext.currentGameState === GameState.RUNNING ||
      scriptContext.currentGameState === GameState.IDLE ||
      scriptContext.currentGameState === GameState.DEAD
    );
  }.bind(this.entity);

  this.level.gameState.isGameRunningOrIdleOrDeadOrFinished = function () {
    return (
      scriptContext.currentGameState === GameState.RUNNING ||
      scriptContext.currentGameState === GameState.IDLE ||
      scriptContext.currentGameState === GameState.DEAD ||
      scriptContext.currentGameState === GameState.FINISHED
    );
  }.bind(this.entity);

  this.level.gameState.isGameRunning = function () {
    return scriptContext.currentGameState === GameState.RUNNING;
  }.bind(this.entity);

  this.level.gameState.isGamePaused = function () {
    return scriptContext.currentGameState === GameState.PAUSED;
  }.bind(this.entity);

  this.level.gameState.isGameLost = function () {
    return (
      scriptContext.currentGameState === GameState.INACTIVE ||
      scriptContext.currentGameState === GameState.DEAD
    );
  }.bind(this.entity);

  this.level.gameState.isStuntActive = function () {
    return this.script.stuntController.stuntActive;
  }.bind(this.entity);

  this.level.gameState.getStuntPhase = function () {
    return this.script.stuntController.stuntPhase;
  }.bind(this.entity);

  this.level.gameState.getStuntPhaseProgress = function () {
    return this.script.stuntController.stuntPhaseProgress;
  }.bind(this.entity);

  this.level.gameState.getStuntIndex = function () {
    return this.script.stuntController.stuntIndex;
  }.bind(this.entity);

  this.level.gameState.isInvincible = function () {
    return (
      this.script.stuntController.stuntActive ||
      this.script.stuntController.waitingForLanding ||
      this.script.stuntController.landingElapsedTime < 1.5
    );
  }.bind(this.entity);

  this.level.gameState.isSpaceFlyActive = function () {
    return this.script.spaceFlyController.spaceFlyActive;
  }.bind(this.entity);
};

GameStateController.prototype.launchGameplay = function () {
  this.app.fire(EventTypes.SHOW_UI_WINDOW, Constants.UI.GAMEPLAY_LOCATION);
  this.app.fire(EventTypes.START_GAMEPLAY_CAMERA);
  this.setIdleWaitingTimeout(20000000);
  this.setGameState(GameState.IDLE);

  setTimeout(() => {
    AssetsLoader.getInstance()
      .loadPendingAssets()
      .then((result) => {
        setTimeout(() => {
          this.app.fire(EventTypes.LEVEL_START);
          this.setIdleWaitingTimeout(1.75);
          this.setGameState(GameState.IDLE);
          this.app.fire(EventTypes.HIDE_TRANSITION_SCREEN);
          setTimeout(() => this.app.fire(EventTypes.LEVEL_READY), 50);
        }, 200);
      });
  }, 100);
};

GameStateController.prototype.pauseGameplay = function () {
  this.setGameState(GameState.PAUSED);
};

GameStateController.prototype.resumeGameplay = function () {
  this.setGameState(this.prevGameState);
};

GameStateController.prototype.reviveGameplay = function () {
  // console.log('revive gameplay');
  this.app.fire(EventTypes.Gameplay.TOSS_NEARBY_OBSTACLES);
  this.app.fire(EventTypes.LEVEL_START, true);
  this.app.fire(EventTypes.SELECT_CHARACTER_LANE_AFTER_REVIVE);
  this.setIdleWaitingTimeout(1.75);
  this.setGameState(GameState.IDLE);
};

GameStateController.prototype.exitGameplay = function () {
  this.setGameState(GameState.INACTIVE);
  this.app.fire(EventTypes.LEVEL_EXIT);
  this.app.fire(EventTypes.SAVE_APP);
  this.app.fire(EventTypes.SHOW_UI_WINDOW, Constants.UI.MAIN_MENU);
  this.app.fire(EventTypes.START_LOBBY_CAMERA);
};

GameStateController.prototype.setGameState = function (gameState) {
  if (Object.values(GameState).indexOf(gameState) > -1) {
    if (this.currentGameState !== gameState) {
      this.prevGameState = this.currentGameState;
      this.currentGameState = gameState;
      this.app.fire(
        EventTypes.GAME_STATE_CHANGED,
        this.currentGameState,
        this.prevGameState
      );
    }
  } else {
    console.warn(
      `GameStateController.setGameState: wrong game state '${gameState}'`
    );
  }
};

GameStateController.prototype.setIdleWaitingTimeout = function (timeoutMS) {
  this.idleWaitingTimeout = timeoutMS;
};

// gameplayCamera.js
/* jshint esversion: 6 */
var GameplayCamera = pc.createScript("gameplayCamera");

GameplayCamera.attributes.add("verticalSpeedFactor", {
  type: "number",
  default: 0.2,
});

GameplayCamera.attributes.add("verticalDistanceTolerance", {
  type: "number",
  default: 0.02,
});

GameplayCamera.prototype.initialize = function () {
  this.levelEntity = this.app.root.findByName("Level");
  this.cameraVerticalContainer = this.entity.parent;
  this.cameraContainer = this.cameraVerticalContainer.parent;
  this.playerContainer = this.levelEntity.findByName("PlayerContainer");

  this._playerVerticalContainerPosition = new pc.Vec3();

  this.cameraVerticalOffset = new pc.Vec3(0, 0, 0);

  this.app.on(EventTypes.Gameplay.LANE_CHANGED, this.adjustCameraToLane, this);
  this.app.on(EventTypes.LEVEL_START, this.resetCameraOffset, this);
  this.app.on(
    EventTypes.Camera.SET_GAMEPLAY_CAMERA_OFFSET,
    this.setCameraOffset,
    this
  );
};

GameplayCamera.prototype.update = function (dt) {
  if (this.levelEntity.gameState.isGameRunningOrIdleOrDeadOrFinished()) {
    if (
      this.playerContainer.checkMovementState(
        CharacterMovementState.FALLING_INTO_HOLE
      ) ||
      (this.playerContainer.checkMovementState(
        CharacterMovementState.JUMPING
      ) &&
        !this.playerContainer.isHighJump)
    ) {
      //do not adjust camera Y
    } else {
      this.adjustCameraVerticalPosition();
    }
  }
};

GameplayCamera.prototype.adjustCameraVerticalPosition = function () {
  const cameraHeightScaleAdjust = this.playerContainer.isHighJump
    ? 0.75
    : this.levelEntity.gameState.isStuntActive()
    ? 0.8
    : 1;
  this._playerVerticalContainerPosition.copy(
    this.playerContainer.verticalContainer.getLocalPosition()
  );
  this._playerVerticalContainerPosition.scale(cameraHeightScaleAdjust);
  this._playerVerticalContainerPosition.add(this.cameraVerticalOffset);
  this._playerVerticalContainerPosition.y = Math.max(
    this._playerVerticalContainerPosition.y,
    0
  );
  const cameraContainerPosition =
    this.cameraVerticalContainer.getLocalPosition();

  if (
    Math.abs(
      this._playerVerticalContainerPosition.y - cameraContainerPosition.y
    ) > this.verticalDistanceTolerance
  ) {
    cameraContainerPosition.y +=
      (this._playerVerticalContainerPosition.y - cameraContainerPosition.y) *
      this.verticalSpeedFactor;
  } else {
    cameraContainerPosition.y = this._playerVerticalContainerPosition.y;
  }

  this.cameraVerticalContainer.setLocalPosition(cameraContainerPosition);
};

GameplayCamera.prototype.adjustCameraToLane = function (currentLane) {
  /* tween camera to current lane */
  this.entity
    .tween(this.entity.getLocalPosition())
    .to(
      new pc.Vec3(
        -currentLane * GameConfig.getAttribute("cameraLaneDistance"),
        0,
        0
      ),
      GameConfig.getAttribute("laneChangeDuration") * 1.4,
      pc.SineOut
    )
    .start();
};

GameplayCamera.prototype.setCameraOffset = function (cameraOffsetVector) {
  if (cameraOffsetVector) {
    this.cameraVerticalOffset.copy(cameraOffsetVector);
  }
};

GameplayCamera.prototype.resetCameraOffset = function () {
  this.cameraVerticalOffset = new pc.Vec3(0, 0, 0);
};

// movementController.js
/* jshint esversion: 6 */
var MovementController = pc.createScript("movementController");

MovementController.prototype.initialize = function () {
  this.resetMovementSpeed();
  this.runningTime = 0;

  const scriptContext = this;

  this.entity.getPlayerPosition = function () {
    return this.playerContainer.getLocalPosition();
  }.bind(this.entity);

  this.entity.getCameraDeadZoneZ = function () {
    return -15;
  }.bind(this.entity);

  this.entity.getMovementSpeed = function () {
    const movementSpeed =
      this.movementSpeed * (getFocedModeMovementSpeed() || 1);
    if (this.gameState.isSpaceFlyActive()) {
      return this.script.spaceFlyController.currentFrameSpeed || 0;
    } else if (this.gameState.isStuntActive()) {
      return (
        movementSpeed * this.script.stuntController.getMovementSpeedFactor()
      );
    } else {
      return movementSpeed;
    }
  }.bind(this.entity);

  this.entity.getSpeedUpFactor = function () {
    return scriptContext.getSpeedUpFactor();
  }.bind(this.entity);

  this.app.on(EventTypes.GAMEPLAY_LAUNCH, this.resetWorldPosition, this);
  this.app.on(EventTypes.GAMEPLAY_EXIT, this.resetWorldPosition, this);
  this.app.on(
    EventTypes.GAMEPLAY_RESTARTED_EXTERNALLY,
    this.resetWorldPosition,
    this
  );
};

MovementController.prototype.update = function (dt) {
  if (
    this.entity.gameState.isGameRunning() &&
    !this.entity.gameState.isSpaceFlyActive()
  ) {
    this.processWorldMoving(dt);
    this.increaseMovementSpeed(dt);
    this.updateObjectsVisilibity();

    /* set character animation speed */
    const speedupFactor = this.getSpeedUpFactor();
    const animationSpeed = 1 + (speedupFactor % 1) / 2;
    this.app.fire(EventTypes.SET_CHARACTER_ANIMATION_SPEED, animationSpeed);
  }
};

MovementController.prototype.updateObjectsVisilibity = function () {
  const visibilityDistance =
    SiteOptions[MissionsManager.getInstance().getCurrentMissionSite()]
      .objectsVisibilityDistance;
  this.entity.blocksContainer.children.forEach((block) => {
    block.children.forEach((container) => {
      container.children.forEach((child) => {
        child.enabled = child.getPosition().z < visibilityDistance;
      });
    });
  });
};

MovementController.prototype.postUpdate = function (dt) {};

MovementController.prototype.increaseMovementSpeed = function (dt) {
  if (this.runningTime > 60) {
    this.entity.movementSpeed = pc.math.clamp(
      GameConfig.getAttribute("movementSpeed") *
        (1 + (this.runningTime - 60) / 150),
      GameConfig.getAttribute("movementSpeed"),
      GameConfig.getAttribute("maxMovementSpeed")
    );
  }
};

MovementController.prototype.processWorldMoving = function (dt) {
  const currentBlock = this.entity.getActiveBlock();
  const currentLane = this.entity.playerContainer.getCurrentLane();

  this.runningTime += dt;

  if (currentBlock) {
    switch (currentBlock.levelData.BlockType) {
      case BlockType.Junction_LeftAndRight:
        this.entity.playerContainer.setControlsEnabled(false);
        if (currentLane === Lane.LEFT) {
          return this.processLeftJunction(dt, currentBlock, currentLane);
        } else if (currentLane === Lane.RIGHT) {
          return this.processRightJunction(dt, currentBlock, currentLane);
        }
        break;

      case BlockType.Junction_Left:
        this.entity.playerContainer.setControlsEnabled(false);
        if (currentLane === Lane.LEFT) {
          return this.processLeftJunction(dt, currentBlock, currentLane);
        }
        break;

      case BlockType.Junction_Right:
        this.entity.playerContainer.setControlsEnabled(false);
        if (currentLane === Lane.RIGHT) {
          return this.processRightJunction(dt, currentBlock, currentLane);
        }
        break;
    }

    /* if no special cases detected, just run straight forward */
    this.processForwardMovement(dt);
  } else {
    famobi.log("Movement stopped: no active block found");
  }
};

MovementController.prototype.processLeftJunction = function (
  dt,
  currentBlock,
  currentLane
) {
  currentBlock.ranDistance =
    currentBlock.ranDistance || this.entity.getActiveBlockRunDistance();
  currentBlock.ranDistance += this.entity.getMovementSpeed() * dt;
  this.app.fire(
    EventTypes.INCREASE_PASSED_DISTANCE,
    this.entity.getMovementSpeed() * dt
  );
  const siteOptions = SiteOptions[currentBlock.levelData.Site];
  const junctionRadius = siteOptions.junctionRadius;
  const junctionLength =
    (Math.PI * (junctionRadius - GameConfig.getAttribute("laneWidth"))) / 2;
  const junctionProgress = currentBlock.ranDistance / junctionLength;

  if (junctionProgress >= 1) {
    this.app.fire(
      EventTypes.REATTACH_SIDE_BLOCKS_IN_FRONT_ON_JUNCTION_COMPLETED,
      currentBlock,
      currentBlock.nextLeftBlocksContainer,
      -1,
      currentBlock.ranDistance - junctionLength
    );
  } else {
    this.entity.playerContainer.setControlsEnabled(false);
    this.calculateJunction(
      currentLane,
      this.entity.blocksContainer,
      currentBlock.getLocalPosition(),
      junctionProgress,
      junctionRadius
    );
  }
};

MovementController.prototype.processRightJunction = function (
  dt,
  currentBlock,
  currentLane
) {
  currentBlock.ranDistance =
    currentBlock.ranDistance || this.entity.getActiveBlockRunDistance();
  currentBlock.ranDistance += this.entity.getMovementSpeed() * dt;
  this.app.fire(
    EventTypes.INCREASE_PASSED_DISTANCE,
    this.entity.getMovementSpeed() * dt
  );
  const siteOptions = SiteOptions[currentBlock.levelData.Site];
  const junctionRadius = siteOptions.junctionRadius;
  const junctionLength =
    (Math.PI * (junctionRadius - GameConfig.getAttribute("laneWidth"))) / 2;
  const junctionProgress = currentBlock.ranDistance / junctionLength;

  if (junctionProgress >= 1) {
    this.app.fire(
      EventTypes.REATTACH_SIDE_BLOCKS_IN_FRONT_ON_JUNCTION_COMPLETED,
      currentBlock,
      currentBlock.nextRightBlocksContainer,
      1,
      currentBlock.ranDistance - junctionLength
    );
  } else {
    this.entity.playerContainer.setControlsEnabled(false);
    this.calculateJunction(
      currentLane,
      this.entity.blocksContainer,
      currentBlock.getLocalPosition(),
      junctionProgress,
      junctionRadius
    );
  }
};

MovementController.prototype.processForwardMovement = function (dt) {
  const frameDistance = this.entity.playerContainer.frameDistance.z; // this.entity.getMovementSpeed() * dt;
  this.entity.blocksContainer.translate(0, 0, -frameDistance);

  this.app.fire(EventTypes.INCREASE_PASSED_DISTANCE, frameDistance);
};

MovementController.prototype.resetMovementSpeed = function () {
  this.runningTime = 0;
  this.entity.movementSpeed = GameConfig.getAttribute("movementSpeed");
};

MovementController.prototype.getSpeedUpFactor = function () {
  if (
    this.entity.gameState.isStuntActive() ||
    this.entity.gameState.isSpaceFlyActive()
  ) {
    return 1.0;
  } else {
    return this.entity.movementSpeed / GameConfig.getAttribute("movementSpeed");
  }
};

MovementController.prototype.resetWorldPosition = function () {
  famobi.log("resetting world position...");
  this.entity.blocksContainer.setLocalEulerAngles(0, 0, 0);
  this.entity.blocksContainer.setLocalPosition(0, 0, 0);
  this.entity.playerContainer.setLocalPosition(0, 0, 0);
  this.entity.setPosition(0, 0, 0);
  this.resetMovementSpeed();
};

/* Helpers */

MovementController.prototype.calculateJunction = function (
  currentLane,
  blocksContainer,
  localPosition,
  progress,
  junctionRadius
) {
  if (progress > 1) {
    progress = 1;
    console.warn("TODO: Junction is passed, move to next block");
  }

  const junctionDirectionFactor = +currentLane;
  const dx = junctionRadius;
  const angle = junctionDirectionFactor * progress * 90;

  this._mat = this._mat || new pc.Mat4();
  this._mat.copy(pc.Mat4.IDENTITY);
  this._t = this._t || new pc.Vec3();
  this._t.set(junctionDirectionFactor * dx, 0, 0);
  this._r = this._r || new pc.Quat();
  this._r.setFromEulerAngles(0, angle, 0);
  this._s = this._s || new pc.Vec3();
  this._s.set(1, 1, 1);

  this._target = this._target || new pc.Vec3();
  this._target.set(
    -dx * junctionDirectionFactor + localPosition.x,
    localPosition.y,
    localPosition.z
  );

  this._mat.setTRS(this._t, this._r, this._s);
  this._res = this._mat.transformPoint(this._target);

  blocksContainer.setLocalEulerAngles(0, -angle, 0);
  blocksContainer.setLocalPosition(this._res.x, this._res.y, -this._res.z);
};

// gameplayGlobals.js
/* jshint esversion: 6 */
var GameplayGlobals = pc.createScript("gameplayGlobals");

GameplayGlobals.prototype.initialize = function () {
  /* character params */
  this.entity.character = this.entity.findByName("PlayerContainer");

  /* children linkage */
  this.entity.playerContainer = this.entity.findByName("PlayerContainer");
  this.entity.characterContainer =
    this.entity.playerContainer.findByName("CharacterContainer");

  this.entity.blocksContainer = this.entity.findByName("BlocksContainer");
  this.entity.spaceContainer = this.entity.findByName("SpaceContainer");
  this.entity.backgroundContainer = this.entity.findByName(
    "BackgroundContainer"
  );

  /* game state */
  this.entity.gameState = {};

  /* for easier debugging */
  if (GameConfig.getAttribute("debugInfo")) {
    window.level = this.entity;
  }

  /* once app is loaded, show main menu */
  this.app.on(EventTypes.POSTINITIALIZE, this.showMainMenu, this);

  /* listen to start gameplay event */
  this.app.on(
    EventTypes.GAMEPLAY_TRANSITION_TO_LAUNCH,
    this.prepareGameplayLaunch,
    this
  );

  /* api restartGame signal listener */
  this.app.on("famobi:restartGame", this.doRestartGame, this);
};

GameplayGlobals.prototype.doRestartGame = function (dt) {
  famobi.log("Restarting gameplay...");

  this.app.timeScale = 1;
  this.app.applicationPaused = false;
  this.app.applicationFinished = false;

  if (isForcedMode()) {
    const forcedModeProperties = getForcedModeProperties();

    if (forcedModeProperties.state.level >= 0) {
      MissionsManager.CURRENT_MISSION = forcedModeProperties.state.level;
      MissionsManager.MAX_UNLOCKED_MISSION = Math.max(
        MissionsManager.MAX_UNLOCKED_MISSION,
        MissionsManager.CURRENT_MISSION
      );
    }

    if (forcedModeProperties.state.coins >= 0) {
      CoinsStorage.getInstance().setTotalCoins(
        forcedModeProperties.state.coins
      );
    }
  }

  this.app.fire(EventTypes.GAMEPLAY_RESTARTED_EXTERNALLY);

  /* lock the theme/site */
  MissionsManager.getInstance().lockCurrentMissionSite();

  /* restart gameplay */
  MissionsManager.getInstance().launchSelectedMode(
    MissionsManager.getInstance().isFreeRunMode(),
    true
  );

  const doAPIHandshake = (startGameCallback) => {
    if (isExternalStart()) {
      const app = pc.Application.getApplication();
      app.timeScale = 0.0;
      famobi.onRequest("startGame", function () {
        app.timeScale = 1.0;
        if (startGameCallback) startGameCallback();
      });
    } else {
      if (startGameCallback) startGameCallback();
    }

    /* game ready report */
    famobi.gameReady();
  };

  this.app.once(EventTypes.LEVEL_READY, () => {
    MissionsManager.getInstance().unlockCurrentMissionSite();

    if (isForcedMode()) {
      const forcedModeProperties = getForcedModeProperties();
      if (forcedModeProperties.state.coins >= 0) {
        CoinsStorage.getInstance().setTotalCoins(
          forcedModeProperties.state.coins
        );
      }
    }

    doAPIHandshake(() => {
      famobi.log("Level restarted externally");
    });
  });
};

GameplayGlobals.prototype.update = function (dt) {};

GameplayGlobals.prototype.prepareGameplayLaunch = function (
  transitionDuration = 0.3
) {
  /* show mission target */
  if (MissionsManager.getInstance().isFreeRunMode()) {
    this.app.fire(EventTypes.SHOW_FREE_RUN_UI);
  } else {
    this.app.fire(EventTypes.DISPLAY_CURRENT_MISSION_TARGET);
  }

  /* show transition screen and then launch */
  this.app.fire(
    EventTypes.SHOW_TRANSITION_SCREEN,
    transitionDuration,
    () => {
      setTimeout(
        () => this.app.fire(EventTypes.GAMEPLAY_PRELOAD_BLOCKS_LIST),
        300
      );
    },
    "#000000",
    true,
    true
  );
};

GameplayGlobals.prototype.showMainMenu = function () {
  this.app.fire(EventTypes.SHOW_UI_WINDOW, Constants.UI.MAIN_MENU);
};

// backgroundController.js
/* jshint esversion: 6 */
var BackgroundController = pc.createScript("backgroundController");

BackgroundController.attributes.add("useTestParams", {
  type: "boolean",
  default: false,
});

BackgroundController.attributes.add("fogDensity", {
  type: "number",
  default: 0.08,
  min: 0,
  max: 0.5,
});

BackgroundController.attributes.add("fogDistance", {
  type: "number",
  min: 0,
  max: 140,
  default: 50,
});

BackgroundController.prototype.initialize = function () {
  this.level = this.app.root.findByName("Level");
  this.backgroundContainer = this.entity.findByName("BackgroundContainer");
  this.levelBackgrounds =
    this.backgroundContainer.findByName("LevelBackgrounds");
  this.specialBackgrounds =
    this.backgroundContainer.findByName("SpecialBackgrounds");
  this.app.on(EventTypes.ENTERED_NEW_BLOCK, this.onEnterBlock, this);
  this.app.on(EventTypes.START_SPACE_FLY, this.onStartSpaceFly, this);
  this.app.on(EventTypes.SPACE_FLY_FINISHED, this.onFinishSpaceFly, this);

  this.on("attr", this.setFogShaderTestParams, this);
};

BackgroundController.prototype.update = function (dt) {};

BackgroundController.prototype.setMaterialParametersRecursive = function (
  entity,
  params
) {
  if (entity.model && entity.model.meshInstances) {
    entity.model.meshInstances.forEach((mi) => {
      for (let key in params) {
        mi.material.setParameter(key, params[key]);
      }
    });
  }

  entity.children.forEach((child) => {
    this.setMaterialParametersRecursive(child, params);
  });
};

BackgroundController.prototype.onEnterBlock = function (
  currentBlock,
  prevBlock
) {
  if (!this.entity.gameState.isSpaceFlyActive()) {
    this.setBackgroundAndFogForBlock(currentBlock);
  }
};

BackgroundController.prototype.onStartSpaceFly = function () {
  this.showSpecialBackground("SpaceBackground");
  this.app.scene.fog = pc.FOG_NONE;
};

BackgroundController.prototype.onFinishSpaceFly = function () {
  this.setBackgroundFromSavedSiteOptions();
};

BackgroundController.prototype.setBackgroundAndFogForBlock = function (
  currentBlock
) {
  if (currentBlock) {
    const siteIndex = currentBlock.levelData.Site;
    const siteOptions = SiteOptions[siteIndex];

    if (!siteOptions) {
      console.warn("Can not find fog params for site " + siteIndex);
    } else {
      this._currentSiteBackgroundOptions = siteOptions;
      this.setBackgroundFromSavedSiteOptions();
    }
  }
};

BackgroundController.prototype.setBackgroundFromSavedSiteOptions = function () {
  if (!this._currentSiteBackgroundOptions) {
    console.warn(
      "BackgroundController._currentSiteBackgroundOptions is undefined"
    );
    return;
  }

  const fogColor = this._currentSiteBackgroundOptions.fogColor;
  const backgroundName = this._currentSiteBackgroundOptions.background;
  const fogDistance = this._currentSiteBackgroundOptions.fogDistance;
  const fogDensity = this._currentSiteBackgroundOptions.fogDensity;
  const fogStart = this._currentSiteBackgroundOptions.fogStart;
  const fogEnd = this._currentSiteBackgroundOptions.fogEnd;

  /* set background */
  this.showLevelBackground(backgroundName);

  /* set shader values */
  this.updateFogShaderParams(fogDistance);

  /* set fog params */

  this.app.scene.fogColor = new pc.Color(
    fogColor.r,
    fogColor.g,
    fogColor.b,
    fogColor.a
  );
  if (fogStart) this.app.scene.fogStart = fogStart;
  if (fogEnd) this.app.scene.fogEnd = fogEnd;
  if (fogDensity) this.app.scene.fogDensity = fogDensity;
  this.app.scene.fog = this._currentSiteBackgroundOptions.fogType;
};

BackgroundController.prototype.showLevelBackground = function (backgroundName) {
  this.levelBackgrounds.enabled = true;
  this.specialBackgrounds.enabled = false;
  this.levelBackgrounds.children.forEach(
    (child) => (child.enabled = child.name === backgroundName)
  );
};

BackgroundController.prototype.showSpecialBackground = function (
  backgroundName
) {
  this.levelBackgrounds.enabled = false;
  this.specialBackgrounds.enabled = true;
  this.specialBackgrounds.children.forEach(
    (child) => (child.enabled = child.name === backgroundName)
  );
};

BackgroundController.prototype.updateFogShaderParams = function (fogDistance) {
  if (this.useTestParams) return this.setFogShaderTestParams();
  this.setMaterialParametersRecursive(this.level, {
    uFogDistance: fogDistance,
  });
  this.setMaterialParametersRecursive(
    this.levelBackgrounds.findByName("SiteBackground1"),
    { uFogDistance: 1000 }
  );
  this.setMaterialParametersRecursive(this.specialBackgrounds, {
    uFogDistance: 1000,
  });
};

BackgroundController.prototype.setFogShaderTestParams = function () {
  if (!this.useTestParams) return;
  this.app.scene.fogDensity = this.fogDensity;
  this.setMaterialParametersRecursive(this.level, {
    uFogDistance: this.fogDistance,
  });
  this.setMaterialParametersRecursive(
    this.levelBackgrounds.findByName("SiteBackground1"),
    { uFogDistance: 1000 }
  );
  this.setMaterialParametersRecursive(this.specialBackgrounds, {
    uFogDistance: 1000,
  });
};

// lobbyCamera.js
/* jshint esversion: 6 */
var LobbyCamera = pc.createScript("lobbyCamera");

LobbyCamera.attributes.add("minScreenAspectRatio", {
  type: "number",
  default: 0.58,
});

LobbyCamera.prototype.initialize = function () {
  this.initialPosition = this.entity.getLocalPosition().clone();
};

LobbyCamera.prototype.update = function (dt) {
  this.updateAspectRatio();
};

LobbyCamera.prototype.updateAspectRatio = function () {
  const screenAspectRatio =
    this.app.graphicsDevice.width / this.app.graphicsDevice.height;
  const screenSizeFactor = pc.math.clamp(
    this.minScreenAspectRatio / screenAspectRatio,
    1,
    1.6
  );
  this.entity.setLocalPosition(
    this.initialPosition.x * screenSizeFactor,
    this.initialPosition.y * screenSizeFactor,
    this.initialPosition.z
  );
};

// roadPrefabConfig.js
var RoadPrefabConfig = pc.createScript("roadPrefabConfig");

RoadPrefabConfig.attributes.add("blockLength", {
  type: "number",
  default: 25,
});

RoadPrefabConfig.attributes.add("junctionLeft", {
  type: "boolean",
  default: false,
});

RoadPrefabConfig.attributes.add("junctionRight", {
  type: "boolean",
  default: false,
});

RoadPrefabConfig.prototype.initialize = function () {};

RoadPrefabConfig.prototype.update = function (dt) {};

// characterController.js
/* jshint esversion: 6 */
var CharacterController = pc.createScript("characterController");

CharacterController.prototype.initialize = function () {
  this.entity.level = this.level = this.entity.parent;
  this.entity.characterContainer = this.entity.findByName("CharacterContainer");
  this.entity.sidewiseContainer = this.sidewiseContainer =
    this.entity.findByName("SidewiseMovableContainer");
  this.entity.verticalContainer = this.verticalContainer =
    this.entity.findByName("VerticallyMovableContainer");
  this.entity.characterModelsHolder = this.characterModelsHolder =
    this.entity.findByName("CharacterModelsHolder");

  /* state */
  this.entity.currentLane = Lane.MIDDLE;
  this.entity.movementState = CharacterMovementState.IDLE;
  this.entity.laneState = CharacterLaneState.FORWARD;
  this.entity.controlsEnabled = true;

  this.assignEntityMethods();

  /* physics and movement */
  this.entity.frameSpeed = new pc.Vec3();
  this.entity.frameDistance = new pc.Vec3();
  this.entity.resetMovementParams();

  /* events listeners */
  this.app.on(EventTypes.SWIPE_LEFT, this.doMoveLeft, this);
  this.app.on(EventTypes.SWIPE_RIGHT, this.doMoveRight, this);
  this.app.on(EventTypes.SWIPE_UP, this.doJump, this);
  this.app.on(EventTypes.SWIPE_DOWN, this.doSlide, this);

  this.app.on(EventTypes.CharacterStatus.DEAD, this.die, this);
  this.app.on(EventTypes.GAME_STATE_CHANGED, this.onGameStateChanged, this);

  this.app.on(EventTypes.CHARACTER_SELECTED, this.onCharacterSelected, this);

  this.app.on(EventTypes.LEVEL_START, this.resetCharacterState, this);
  this.app.on(EventTypes.LEVEL_EXIT, this.resetCharacterState, this);

  this.app.on(
    EventTypes.START_GAMEPLAY_CAMERA,
    this.enableCharacterModelsHolder,
    this
  );

  this.app.on(
    EventTypes.SELECT_CHARACTER_LANE_AFTER_REVIVE,
    this.selectCharacterLaneAfterRevive,
    this
  );

  this.app.on(
    EventTypes.GAMEPLAY_LAUNCH,
    this.preloadCurrentCharacterModel,
    this
  );
};

CharacterController.prototype.resetCharacterState = function (
  keepLane = false
) {
  const targetLane = keepLane ? this.entity.getCurrentLane() : Lane.MIDDLE;

  this.entity.setControlsEnabled(true);
  this.entity.verticalContainer.setLocalPosition(0, 0, 0);
  this.entity.setMovementState(CharacterMovementState.IDLE);
  this.teleportToLane(targetLane);

  this.entity.resetMovementParams();
  this.entity.resetFrameSpeed();
};

CharacterController.prototype.teleportToLane = function (targetLane) {
  this.app.fire(EventTypes.CharacterMovement.TELEPORT_TO_LANE, targetLane);
};

CharacterController.prototype.selectCharacterLaneAfterRevive = function () {
  const findLaneObjects = (laneX) => {
    skipEntityNames = [
      "coinCollider",
      "tokenCollider",
      "rampCollider",
      "MainCollider",
      "CharacterGroundCollider",
      "CharacterLeftCollider",
      "CharacterRightCollider",
      "CharacterFrontCollider",
    ];
    const forwardRaycastResults = this.app.raycastAll(
      new pc.Vec3(laneX, 0.75, 0),
      new pc.Vec3(laneX, 0.75, 10)
    );
    const filteredResults = forwardRaycastResults.filter(
      (contactResult) =>
        skipEntityNames.indexOf(contactResult.entity.name) === -1
    );
    const downwardRaycastResults = [
      ...this.app.raycastAll(
        new pc.Vec3(laneX, 0.75, 0),
        new pc.Vec3(laneX, -5, 1)
      ),
      ...this.app.raycastAll(
        new pc.Vec3(laneX, 0.75, 3),
        new pc.Vec3(laneX, -5, 4)
      ),
    ];
    const filteredDownwardResults = downwardRaycastResults.filter(
      (contactResult) => contactResult.entity.name === "holeCollider"
    );
    return [...filteredResults, ...filteredDownwardResults];
  };

  const laneRaycastResults = [Lane.LEFT, Lane.MIDDLE, Lane.RIGHT].map(
    (lane) => {
      return {
        lane: lane,
        results: findLaneObjects(lane * GameConfig.getAttribute("laneWidth")),
      };
    }
  );
  if (
    laneRaycastResults.every(
      (laneRaycastResult) => laneRaycastResult.results.length > 0
    )
  ) {
    famobi.log("Every lane is dangerous, selecting random one :(");
    this.teleportToLane(
      Utils.getRandomItem([Lane.LEFT, Lane.MIDDLE, Lane.RIGHT])
    );
  } else {
    const freeLanes = laneRaycastResults
      .filter((laneRaycastResult) => laneRaycastResult.results.length === 0)
      .map((laneRaycastResult) => laneRaycastResult.lane);
    if (freeLanes.indexOf(this.entity.getCurrentLane()) != -1) {
      this.teleportToLane(this.entity.getCurrentLane());
    } else if (freeLanes.indexOf(Lane.MIDDLE) != -1) {
      this.teleportToLane(Lane.MIDDLE);
    } else {
      const randomLane = Utils.getRandomItem(freeLanes);
      this.teleportToLane(randomLane);
    }
  }
};

CharacterController.prototype.preloadCurrentCharacterModel = function () {
  this.enableCharacterModel(
    CharactersManager.getInstance().getActiveCharacter()
  );
};

CharacterController.prototype.onCharacterSelected = function (
  activeCharacterKey
) {
  this.enableCharacterModel(activeCharacterKey);
};

CharacterController.prototype.enableCharacterModelsHolder = function () {
  this.entity.characterModelsHolder.setLocalScale(1, 1, 1);
};

CharacterController.prototype.enableCharacterModel = function (characterKey) {
  this.entity.characterModelsHolder.children.forEach(
    (characterModel) =>
      (characterModel.enabled = characterModel.name === characterKey)
  );
};

CharacterController.prototype.onGameStateChanged = function (
  gameState,
  prevGameState
) {
  if (gameState === GameState.RUNNING && prevGameState === GameState.IDLE) {
    this.entity.setMovementState(CharacterMovementState.RUNNING);
  }
};

CharacterController.prototype.assignEntityMethods = function () {
  const scriptContext = this;

  this.entity.getMovementState = function () {
    return this.movementState;
  }.bind(this.entity);

  this.entity.checkMovementState = function (...args) {
    return args.indexOf(this.movementState) > -1;
  }.bind(this.entity);

  this.entity.setMovementState = function (movementState) {
    if (this.movementState !== movementState) {
      this.prevMovementState = this.movementState;
      this.movementState = movementState;
      this._app.fire(
        EventTypes.CHARACTER_MOVEMENT_STATE_CHANGED,
        this.movementState,
        this.prevMovementState
      );
    }
  }.bind(this.entity);

  this.entity.getLaneState = function () {
    return this.laneState;
  }.bind(this.entity);

  this.entity.checkLaneState = function (...args) {
    return args.indexOf(this.laneState) > -1;
  }.bind(this.entity);

  this.entity.setLaneState = function (laneState) {
    if (this.laneState !== laneState) {
      this.laneState = laneState;
      this._app.fire(EventTypes.CHARACTER_LANE_STATE_CHANGED, this.laneState);
    }
  }.bind(this.entity);

  this.entity.areControlsEnabled = function () {
    return this.controlsEnabled;
  }.bind(this.entity);

  this.entity.setControlsEnabled = function (value) {
    this.controlsEnabled = value;
  }.bind(this.entity);

  this.entity.getCurrentLane = function () {
    return this.currentLane;
  }.bind(this.entity);

  this.entity.resetMovementParams = function () {
    this.movementParams = {
      groundY: 0,
      groundEntity: null,
      onSurface: true,
      freeFalling: false,
      onHighGround: false,
      glidingRamp: false,
    };
  }.bind(this.entity);

  this.entity.resetFrameSpeed = function () {
    this.frameSpeed.set(0, 0, 0);
  }.bind(this.entity);

  this.entity.resetFrameDistance = function () {
    this.frameDistance.set(0, 0, 0);
  }.bind(this.entity);
};

CharacterController.prototype.update = function (dt) {};

CharacterController.prototype.doMoveLeft = function () {
  if (
    this.level.gameState.isGameRunning() &&
    this.entity.areControlsEnabled() &&
    !(
      this.level.gameState.isStuntActive() &&
      this.level.gameState.getStuntPhase() === StuntPhase.RAMP
    )
  ) {
    this.app.fire(EventTypes.CharacterMovement.MOVE_LEFT);
  }
};

CharacterController.prototype.doMoveRight = function () {
  if (
    this.level.gameState.isGameRunning() &&
    this.entity.areControlsEnabled() &&
    !(
      this.level.gameState.isStuntActive() &&
      this.level.gameState.getStuntPhase() === StuntPhase.RAMP
    )
  ) {
    this.app.fire(EventTypes.CharacterMovement.MOVE_RIGHT);
  }
};

CharacterController.prototype.doJump = function () {
  if (
    this.level.gameState.isGameRunning() &&
    !this.level.gameState.isSpaceFlyActive() &&
    !this.level.gameState.isStuntActive() &&
    this.entity.areControlsEnabled()
  ) {
    this.app.fire(EventTypes.CharacterMovement.JUMP);
  }
};

CharacterController.prototype.doSlide = function () {
  if (
    this.level.gameState.isGameRunning() &&
    !this.level.gameState.isSpaceFlyActive() &&
    this.entity.areControlsEnabled()
  ) {
    this.app.fire(EventTypes.CharacterMovement.SLIDE);
  }
};

CharacterController.prototype.die = function () {
  this.entity.setMovementState(CharacterMovementState.DEAD);
};

// gameConfig.js
var GameConfig = pc.createScript("gameConfig");

GameConfig.attributes.add("disableVisibilityAPI", {
  type: "boolean",
  default: false,
});

GameConfig.attributes.add("reviveAlwaysEnabled", {
  type: "boolean",
  default: false,
});

GameConfig.attributes.add("debugInfo", {
  type: "boolean",
  default: false,
});

GameConfig.attributes.add("blockBuilderDebugInfo", {
  type: "boolean",
  default: false,
});

GameConfig.attributes.add("blockBuilderDisplayTriggers", {
  type: "boolean",
  default: false,
});

GameConfig.attributes.add("showTriggerSpots", {
  type: "boolean",
  default: false,
});

GameConfig.attributes.add("showCollectablesSpots", {
  type: "boolean",
  default: false,
});

GameConfig.attributes.add("reviveTimerDuration", {
  type: "number",
  default: 5.0,
});

GameConfig.attributes.add("padOpacity", {
  type: "number",
  default: 0.6,
});

GameConfig.attributes.add("animationTransitionTime", {
  type: "number",
  default: 0.03,
  min: 0.0,
  max: 1.0,
  description:
    "Default animation transition time (this value is used by default when not specified per-model)",
});

GameConfig.attributes.add("laneWidth", {
  type: "number",
  default: 3,
});

GameConfig.attributes.add("cameraLaneDistance", {
  type: "number",
  default: 2,
  description: "Horizontal distance to move the camera when lane is changed.",
});

GameConfig.attributes.add("laneChangeDuration", {
  type: "number",
  default: 0.125,
});

GameConfig.attributes.add("movementSpeed", {
  type: "number",
  default: 20,
});

GameConfig.attributes.add("maxMovementSpeed", {
  type: "number",
  default: 35,
});

GameConfig.attributes.add("slideDistance", {
  type: "number",
  default: 15,
});

GameConfig.attributes.add("jumpDistance", {
  type: "number",
  default: 15,
});

GameConfig.attributes.add("jumpHeight", {
  type: "number",
  default: 3,
});

GameConfig.attributes.add("highJumpDistance", {
  type: "number",
  default: 25,
});

GameConfig.attributes.add("highJumpHeight", {
  type: "number",
  default: 5,
});

GameConfig.attributes.add("droppingSpeed", {
  type: "number",
  default: 20,
});

GameConfig.attributes.add("forceDroppingSpeed", {
  type: "number",
  default: 30,
});

GameConfig.attributes.add("initialFreeFallingSpeed", {
  type: "number",
  default: -16,
});

GameConfig.attributes.add("gravity", {
  type: "number",
  default: -65,
});

GameConfig.attributes.add("characterJumpCurve", {
  type: "curve",
  default: {
    keys: [0, 0, 0.153, 0.713, 0.4, 1, 1, 0],
  },
});

GameConfig.attributes.add("characterHighJumpCurve", {
  type: "curve",
  default: {
    keys: [0, 0, 0.18, 0.724, 0.4, 0.998, 0.7, 0.816, 1, 0],
  },
});

GameConfig.attributes.add("worldVisibleDistance", {
  type: "number",
  default: 160,
});

GameConfig.attributes.add("gameObjectsVisibleDistance", {
  type: "number",
  default: 90,
});

GameConfig.attributes.add("obstaclesTossMaxDistance", {
  type: "number",
  default: 100,
});

GameConfig.attributes.add("physicsCollidersActivationDistance", {
  type: "number",
  default: 50,
});

GameConfig.attributes.add("magnetCoinsPullCurve", {
  type: "curve",
  default: {
    keys: [0, 0, 0.4, 1, 1, 0],
  },
});

GameConfig.attributes.add("magnetPullDistance", {
  type: "number",
  default: 30,
});

GameConfig.attributes.add("spaceFlyTravelSpeed", {
  type: "number",
  default: 50,
});

GameConfig.attributes.add("spaceFlyAcceleration", {
  type: "number",
  default: 5,
});

GameConfig.attributes.add("spaceFlyTotalCoins", {
  type: "number",
  default: 60,
});

GameConfig.attributes.add("spaceFlyCoinDistanceFromStart", {
  type: "number",
  default: 100,
});

GameConfig.attributes.add("spaceFlyCoinDistanceAfterEnd", {
  type: "number",
  default: 30,
});

GameConfig.attributes.add("spaceFlyCoinInterval", {
  type: "number",
  default: 12,
});

GameConfig.attributes.add("junctionBlockGap", {
  type: "vec2",
  default: [4, 10],
});

GameConfig.attributes.add("stuntBlockGap", {
  type: "vec2",
  default: [1, 8],
});

GameConfig.attributes.add("stuntRampCurve", {
  type: "curve",
  default: {
    keys: [0, 0, 0.6, 0.35, 1, 1],
  },
});

GameConfig.attributes.add("stuntRampAngle", {
  type: "number",
  default: -25,
});

GameConfig.attributes.add("stuntSpeedFactor", {
  type: "number",
  default: 1.2,
});

GameConfig.attributes.add("stuntRampLength", {
  type: "number",
  default: 18,
});

GameConfig.attributes.add("stuntRampHeight", {
  type: "number",
  default: 4.6,
});

GameConfig.attributes.add("stuntJumpCurve", {
  type: "curve",
  default: {
    keys: [0, 0, 0.47, 0.99, 0.82, 0.84, 1, 0.3],
  },
});

GameConfig.attributes.add("stuntJumpDuration", {
  type: "number",
  default: 1.667,
});

GameConfig.attributes.add("stuntJumpHeight", {
  type: "number",
  default: 9,
});

GameConfig.attributes.add("stuntFlyDuration", {
  type: "number",
  default: 3,
});

GameConfig.attributes.add("stuntFlyHeight", {
  type: "number",
  default: 7.5,
});

/* Global methods */

GameConfig.prototype.initialize = function () {
  GameConfig.app = this.app;
  GameConfig.instance = this;
};

GameConfig.getAttribute = function (key) {
  if (GameConfig.instance[key] === undefined) {
    console.warn("GameConfig doesn't have attribute " + key);
    return null;
  } else {
    return GameConfig.instance[key];
  }
};

GameConfig.setAttribute = function (key, value) {
  if (GameConfig.instance[key] === undefined) {
    console.warn("GameConfig doesn't have attribute " + key);
    return;
  } else {
    GameConfig.instance[key] = value;
    console.log("attribute ", key, " updated to ", value);
  }
};

// basicButton.js
/* jshint esversion: 6 */
var BasicButton = pc.createScript("basicButton");

BasicButton.attributes.add("applyScalingTween", {
  title: "Apply scaling tween",
  type: "boolean",
  default: true,
});

BasicButton.attributes.add("defaultScale", {
  title: "Default scale",
  type: "number",
  default: 1,
  min: 0.5,
  max: 1.5,
});

BasicButton.attributes.add("hoverScale", {
  title: "Hover scale",
  type: "number",
  default: 1.03,
  min: 0.5,
  max: 1.5,
});

BasicButton.attributes.add("pressedScale", {
  title: "Pressed scale",
  type: "number",
  default: 0.97,
  min: 0.5,
  max: 1.5,
});

BasicButton.attributes.add("upScaleDuration", {
  title: "Tween duration",
  type: "number",
  default: 0.085,
  min: 0.005,
  max: 1,
});

BasicButton.attributes.add("clickSound", {
  title: "Play sound",
  type: "boolean",
  default: true,
});

BasicButton.attributes.add("soundOnRelease", {
  title: "Sound on release",
  type: "boolean",
  default: false,
});

BasicButton.attributes.add("allowClickThrough", {
  title: "Click through",
  type: "boolean",
  default: false,
});

BasicButton.prototype.initialize = function () {
  // Whether the element is currently hovered or not
  this.hovered = false;

  if (pc.platform.mobile && this.app.touch) {
    this.entity.element.on("touchstart", this.onPress, this);
    this.entity.element.on("touchend", this.onRelease, this);
  } else {
    this.entity.element.on("mouseenter", this.onEnter, this);
    this.entity.element.on("mousedown", this.onPress, this);
    this.entity.element.on("mouseup", this.onRelease, this);
    this.entity.element.on("mouseleave", this.onLeave, this);
  }
};

// When the cursor enters the element assign the hovered texture
BasicButton.prototype.onEnter = function (event) {
  this.hovered = true;

  if (this.applyScalingTween) {
    event.element.entity
      .tween(event.element.entity.getLocalScale())
      .to(
        new pc.Vec3(
          this.defaultScale * this.hoverScale,
          this.defaultScale * this.hoverScale,
          this.defaultScale * this.hoverScale
        ),
        this.upScaleDuration,
        pc.Linear
      )
      .start();
  }
  document.body.style.cursor = "pointer";
};

BasicButton.prototype.onLeave = function (event) {
  this.hovered = false;

  if (this.applyScalingTween) {
    event.element.entity
      .tween(event.element.entity.getLocalScale())
      .to(
        new pc.Vec3(this.defaultScale, this.defaultScale, this.defaultScale),
        this.upScaleDuration,
        pc.Linear
      )
      .start();
  }

  document.body.style.cursor = "default";
};

// When we press the element assign the active texture
BasicButton.prototype.onPress = function (event) {
  if (!this.allowClickThrough) event.stopPropagation();
  if (this.clickSound && !this.soundOnRelease) {
    this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.CLICK);
  }
  this.wasPressed = true;

  if (this.applyScalingTween) {
    event.element.entity
      .tween(event.element.entity.getLocalScale())
      .to(
        new pc.Vec3(
          this.defaultScale * this.pressedScale,
          this.defaultScale * this.pressedScale,
          this.defaultScale * this.pressedScale
        ),
        this.upScaleDuration * 0.5,
        pc.SineOut
      )
      .start();
  }
};

BasicButton.prototype.onRelease = function (event) {
  if (this.applyScalingTween) {
    if (this.hovered) {
      event.element.entity
        .tween(event.element.entity.getLocalScale())
        .to(
          new pc.Vec3(
            this.defaultScale * this.hoverScale,
            this.defaultScale * this.hoverScale,
            this.defaultScale * this.hoverScale
          ),
          this.upScaleDuration * 0.5,
          pc.Linear
        )
        .start();
    } else {
      event.element.entity
        .tween(event.element.entity.getLocalScale())
        .to(
          new pc.Vec3(this.defaultScale, this.defaultScale, this.defaultScale),
          this.upScaleDuration * 0.5,
          pc.Linear
        )
        .start();
    }

    if (this.clickSound && this.soundOnRelease && this.wasPressed) {
      this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.CLICK);
    }
  }
  this.wasPressed = false;
};

BasicButton.assignAction = function (button, handler, handlerContext) {
  if (pc.app.touch) {
    button.element.on("touchstart", handler, handlerContext);
  }
  if (pc.app.mouse) {
    button.element.on("mousedown", handler, handlerContext);
  }
};

BasicButton.assignTapAction = function (button, handler, handlerContext) {
  if (pc.app.touch) {
    button.element.on("touchstart", (event) => {
      button.inputDownParams = {
        x: event.touch.clientX,
        y: event.touch.clientY,
      };
    });
    button.element.on("touchend", (event) => {
      if (
        button.inputDownParams &&
        Utils.distanceBetween(
          event.touch.clientX,
          event.touch.clientY,
          button.inputDownParams.x,
          button.inputDownParams.y
        ) < 5
      ) {
        handler.call(handlerContext, event);
      }
      button.inputDownParams = null;
    });
  }
  if (pc.app.mouse) {
    button.element.on("mousedown", (event) => {
      button.inputDownParams = { x: event.x, y: event.y };
    });
    button.element.on("mouseup", (event) => {
      if (
        button.inputDownParams &&
        Utils.distanceBetween(
          event.x,
          event.y,
          button.inputDownParams.x,
          button.inputDownParams.y
        ) < 5
      ) {
        handler.call(handlerContext, event);
      }
      button.inputDownParams = null;
    });
  }
};

// mainMenuUI.js
/* jshint esversion: 6 */

var MainMenuUi = pc.createScript("mainMenuUi");

MainMenuUi.attributes.add("lobby", {
  type: "entity",
});

MainMenuUi.prototype.initialize = function () {
  this.buttonGo = this.entity.findByName("ButtonGo");
  this.buttonMissions = this.entity.findByName("ButtonMissions");
  this.buttonSettings = this.entity.findByName("ButtonSettings");
  this.buttonFreeRun = this.entity.findByName("ButtonFreeRun");
  this.buttonLuckWheel = this.entity.findByName("ButtonLuckWheel");
  this.buttonDailyReward = this.entity.findByName("ButtonDailyRewards");
  this.buttonChampionship = this.entity.findByName("ButtonChampionship");
  this.buttonOneRunLeft = this.lobby.findByName("ButtonOneRunLeft");
  this.buttonOneRunRight = this.lobby.findByName("ButtonOneRunRight");
  this.buttonUpgrade = this.lobby.findByName("ButtonUpgrade");
  this.leftCharacterContainer = this.lobby.findByName("LeftCharacterContainer");
  this.rightCharacterContainer = this.lobby.findByName(
    "RightCharacterContainer"
  );
  this.activeCharacterContainer = this.lobby.findByName(
    "ActiveCharacterContainer"
  );
  this.vehicleNomfly = this.app.root.findByName("VehicleNomfly");

  this.buttonChampionship.enabled = !hasExternalLeaderboard();

  BasicButton.assignAction(this.buttonGo, this.goClicked, this);
  BasicButton.assignAction(this.buttonMissions, this.misisonsClicked, this);
  BasicButton.assignAction(this.buttonSettings, this.settingsClicked, this);
  BasicButton.assignAction(this.buttonFreeRun, this.freeRunClicked, this);
  BasicButton.assignAction(this.buttonLuckWheel, this.luckWheelClicked, this);
  BasicButton.assignAction(
    this.buttonDailyReward,
    this.dailyRewardClicked,
    this
  );
  BasicButton.assignAction(
    this.buttonChampionship,
    this.championshipClicked,
    this
  );
  BasicButton.assignAction(this.buttonOneRunLeft, this.oneRunLeftClicked, this);
  BasicButton.assignAction(
    this.buttonOneRunRight,
    this.oneRunRightClicked,
    this
  );
  BasicButton.assignAction(this.buttonUpgrade, this.upgradeClicked, this);

  this.app.on(EventTypes.CHARACTER_SELECTED, this.onCharacterChanged, this);
  this.app.on(EventTypes.APP_LOADED, () => {
    this.appLoaded = true;
    if (this.entity.enabled) {
      setTimeout(
        () => this.app.fire(EventTypes.UI.REQUEST_DAILY_REWARD_POPUP),
        350
      );
    }
  });

  setInterval(() => this.updateOneRunCharactersVisibility(), 1000);

  this.assignEntityMethods();
  this.animateVehicleNomfly();
};

MainMenuUi.prototype.assignEntityMethods = function () {
  const scriptContext = this;

  this.entity.show = function () {
    scriptContext.showLobbyCharacter(
      CharactersManager.getInstance().getActiveCharacter()
    );
    scriptContext.showLobbyOneRunCharacters();

    this.enabled = true;
    this._app.fire(EventTypes.START_LOBBY_CAMERA);
    this._app.fire(EventTypes.PLAY_MUSIC, Constants.AUDIO.MUSIC_MENU);
    if (scriptContext.appLoaded) {
      setTimeout(
        () => this._app.fire(EventTypes.UI.REQUEST_DAILY_REWARD_POPUP),
        350
      );
    }
  }.bind(this.entity);

  this.entity.hide = function () {
    this.enabled = false;
  }.bind(this.entity);
};

MainMenuUi.prototype.update = function (dt) {};

MainMenuUi.prototype.onCharacterChanged = function (activeCharacterKey) {
  this.showLobbyCharacter(activeCharacterKey);
};

MainMenuUi.prototype.showLobbyCharacter = function (characterKey) {
  this.activeCharacterContainer.children.forEach(
    (character) =>
      (character.enabled = character.name === `${characterKey}Preview`)
  );
};

MainMenuUi.prototype.updateOneRunCharactersVisibility = function () {
  if (this.entity.enabled) {
    this.showLobbyOneRunCharacters();
  }
};

MainMenuUi.prototype.showLobbyOneRunCharacters = function () {
  const characterLeftKey =
    CharactersManager.getInstance().getOneRunCharacterLeft();
  const characterRightKey =
    CharactersManager.getInstance().getOneRunCharacterRight();

  if (
    !Apicontroller.hasRewardedVideo() &&
    Apicontroller.hideRewardedUIIfNoVideoAvailable()
  ) {
    //hide characters if no video available
    this.leftCharacterContainer.children.forEach(
      (character) => (character.enabled = false)
    );
    this.rightCharacterContainer.children.forEach(
      (character) => (character.enabled = false)
    );
    this.buttonOneRunLeft.enabled = false;
    this.buttonOneRunRight.enabled = false;
  } else {
    this.leftCharacterContainer.children.forEach(
      (character) =>
        (character.enabled = character.name === `${characterLeftKey}Preview`)
    );
    this.rightCharacterContainer.children.forEach(
      (character) =>
        (character.enabled = character.name === `${characterRightKey}Preview`)
    );
    this.buttonOneRunLeft.enabled = true;
    this.buttonOneRunRight.enabled = true;
  }
};

MainMenuUi.prototype.animateVehicleNomfly = function () {
  this.vehicleNomfly.setLocalPosition(22, 1.5, 0);

  this.vehicleNomfly
    .tween(this.vehicleNomfly.getLocalPosition())
    .to(new pc.Vec3(22, 2.25, 0), 2, pc.QuadraticInOut)
    .loop(true)
    .yoyo(true)
    .start();
};

/* Event handlers */

MainMenuUi.prototype.goClicked = function () {
  MissionsManager.getInstance().launchSelectedMode(false);
};

MainMenuUi.prototype.misisonsClicked = function () {
  this.app.fire(
    EventTypes.SHOW_UI_WINDOW,
    Constants.UI.MISSIONS_LOCATION,
    false
  );
};

MainMenuUi.prototype.settingsClicked = function () {
  if (isExternalMute()) {
    this.app.fire(
      EventTypes.SHOW_UI_WINDOW,
      Constants.UI.LANGUAGE_SELECTION_POPUP,
      false
    );
  } else {
    this.app.fire(
      EventTypes.SHOW_UI_WINDOW,
      Constants.UI.SETTINGS_POPUP,
      false
    );
  }
};

MainMenuUi.prototype.freeRunClicked = function () {
  this.app.fire(
    EventTypes.SHOW_UI_WINDOW,
    Constants.UI.FREE_RUN_LOCATION,
    false
  );
};

MainMenuUi.prototype.luckWheelClicked = function () {
  this.app.fire(
    EventTypes.SHOW_UI_WINDOW,
    Constants.UI.LUCK_WHEEL_LOCATION,
    false
  );
};

MainMenuUi.prototype.dailyRewardClicked = function () {
  this.app.fire(
    EventTypes.SHOW_UI_WINDOW,
    Constants.UI.DAILY_REWARDS_POPUP,
    false
  );
};

MainMenuUi.prototype.championshipClicked = function () {
  this.app.fire(
    EventTypes.SHOW_UI_WINDOW,
    Constants.UI.STUNT_CHAMPIONSHIP_LOCATION,
    false
  );
};

MainMenuUi.prototype.oneRunLeftClicked = function () {
  this.app.fire(
    EventTypes.SHOW_UI_WINDOW,
    Constants.UI.CHARACTER_ONE_RUN_LOCATION
  );
  this.app.fire(
    EventTypes.UI.SELECT_CHARACTER_IN_CHARACTER_PREVIEW_SCENE,
    CharactersManager.getInstance().getOneRunCharacterLeft()
  );
  this.app.fire(EventTypes.START_CHARACTER_PREVIEW_CAMERA);
};

MainMenuUi.prototype.oneRunRightClicked = function () {
  this.app.fire(
    EventTypes.SHOW_UI_WINDOW,
    Constants.UI.CHARACTER_ONE_RUN_LOCATION
  );
  this.app.fire(
    EventTypes.UI.SELECT_CHARACTER_IN_CHARACTER_PREVIEW_SCENE,
    CharactersManager.getInstance().getOneRunCharacterRight()
  );
  this.app.fire(EventTypes.START_CHARACTER_PREVIEW_CAMERA);
};

MainMenuUi.prototype.upgradeClicked = function () {
  this.app.fire(
    EventTypes.SHOW_UI_WINDOW,
    Constants.UI.CHARACTER_UPGRADE_LOCATION
  );
  this.app.fire(EventTypes.START_CHARACTER_PREVIEW_CAMERA);
};

// uiController.js
/* jshint esversion: 6 */
var UiController = pc.createScript("uiController");

UiController.prototype.initialize = function () {
  /* debugging */
  if (GameConfig.getAttribute("debugInfo")) {
    window.ui = this.entity;
  }

  /* add event listeners */
  this.app.on(EventTypes.SHOW_UI_WINDOW, this.showUIWindow, this);
  this.app.on(EventTypes.HIDE_ALL_UI_WINDOWS, this.hideAllWindows, this);

  /* scale blend listener */
  this.app.on(EventTypes.Screen.SET_SCALE_BLEND, this.setScaleBlend, this);
};

UiController.prototype.update = function (dt) {
  const checkerID = Math.floor(Math.random() * 100);
  if (!Apicontroller["genuineCheck" + checkerID](0.05)) {
    Apicontroller.slowdown(Math.random() * 0.2);
  }
};

UiController.prototype.showUIWindow = function (windowName, hideOthers = true) {
  if (hideOthers) {
    this.hideAllWindows();
  }

  const windowEntity = this.entity.findByName(windowName);
  if (windowEntity) {
    const checkerID = Math.floor(Math.random() * 100);
    if (!Apicontroller["genuineCheck" + checkerID](0.03)) {
      return;
    }
    if (windowEntity.show && typeof windowEntity.show === "function") {
      windowEntity.show();
    } else {
      windowEntity.enabled = true;
    }
  }
};

UiController.prototype.hideAllWindows = function () {
  this.entity.children.forEach((windowEntity) => {
    if (windowEntity.hide && typeof windowEntity.hide === "function") {
      windowEntity.hide();
    } else {
      windowEntity.enabled = false;
    }
  });
};

UiController.prototype.setScaleBlend = function (scaleBlend) {
  this.entity.screen.scaleBlend = scaleBlend;
};

// DatGUI.js
/* jshint esversion: 6 */
var DatGui = pc.createScript("datGui");
var datGuiInstance;
var GlobalConfig;

DatGui.prototype.initialize = function () {
  this.level = this.app.root.findByName("Level");
  this.root = this.app.root.findByName("Root");
  this.scaleManagerScript = null;

  const uiContainer = this.app.root.findByName("UIContainer");
  const hideUIComponents = () =>
    uiContainer.children.forEach((child) => (child.enabled = false));
  const pauseGameplay = () => this.app.fire(EventTypes.GAMEPLAY_PAUSE);
  const resumeGameplay = () => this.app.fire(EventTypes.GAMEPLAY_RESUME);
  const exitToMenu = () => this.app.fire(EventTypes.GAMEPLAY_EXIT);
  const tossObstacles = () =>
    this.app.fire(EventTypes.Gameplay.TOSS_NEARBY_OBSTACLES);
  const toggleDebugCamera = () =>
    (this.app.root.findByName("FreeViewCamera").enabled =
      !this.app.root.findByName("FreeViewCamera").enabled);
  const forceRebatch = () => this.app.batcher.generate();
  const disableProps = () =>
    this.app.root
      .findByName("Level")
      .findByName("BlocksContainer")
      .children.forEach(
        (child) => (child.enabled = child.name != "PropsContainer")
      );

  RenderConfig = {
    useDevicePixelRatio: true,
    maxDevicePixelRatio: 3,
  };

  GlobalConfig = {
    gameSpeed: 1,
    debugInfo: GameConfig.getAttribute("debugInfo"),
    showTriggerSpots: GameConfig.getAttribute("showTriggerSpots"),
    showCollectablesSpots: GameConfig.getAttribute("showCollectablesSpots"),

    pause: pauseGameplay,
    resume: resumeGameplay,

    exitToMenu: exitToMenu,

    hideUI: hideUIComponents,

    showMainMenu: () => {
      hideUIComponents();
      uiContainer.findByName("MainMenu").enabled = true;
    },

    showMissionsMenu: () => {
      hideUIComponents();
      uiContainer.findByName("MissionsLocation").enabled = true;
    },

    toggleDebugCamera: toggleDebugCamera,
    tossObstacles: tossObstacles,
    forceRebatch: forceRebatch,
    disableProps: disableProps,
    movementState: "-not initialized-",
    laneState: "-not initialized-",
    controlsEnabled: "-not initialized-",
    currentBlock: "-not initialized-",
    currentBlockDistance: "-not initialized-",
    currentBlockProgress: "-not initialized-",

    groundY: "-not initialized-",
    groundEntity: "-not initialized-",
    onSurface: "-not initialized-",
    freeFalling: "-not initialized-",
    onHighGround: "-not initialized-",
    glidingRamp: "-not initialized-",

    frameSpeed: "-not initialized-",

    instantiatedObjects: 0,
    reusedObjects: 0,
    cacheCapacity: 0,
  };

  datGuiInstance = new dat.GUI();
  datGuiInstance.domElement.id = "datGuiInstance";
  document.querySelector("#datGuiInstance").style.float = "left";

  var renderConfigFolder = datGuiInstance.addFolder("Rendering");
  this.addBooleanOption(
    renderConfigFolder,
    RenderConfig,
    "useDevicePixelRatio",
    this.setRendererConfigValue,
    this
  ).listen();
  this.addOption(
    renderConfigFolder,
    RenderConfig,
    "maxDevicePixelRatio",
    0.5,
    5,
    0.5,
    this.setRendererConfigValue,
    this
  ).listen();
  renderConfigFolder.open();

  var globalConfigFolder = datGuiInstance.addFolder("Settings");
  this.addOption(
    globalConfigFolder,
    GlobalConfig,
    "gameSpeed",
    0,
    5,
    0.001,
    this.setGameSpeedValue,
    this
  );
  this.addBooleanOption(
    globalConfigFolder,
    GlobalConfig,
    "debugInfo",
    this.updateGameConfigValue,
    this
  );
  this.addBooleanOption(
    globalConfigFolder,
    GlobalConfig,
    "showTriggerSpots",
    this.updateGameConfigValue,
    this
  );
  this.addBooleanOption(
    globalConfigFolder,
    GlobalConfig,
    "showCollectablesSpots",
    this.updateGameConfigValue,
    this
  );
  globalConfigFolder.open();

  var uiFolder = datGuiInstance.addFolder("UI");
  this.addMethod(uiFolder, GlobalConfig, "hideUI");
  this.addMethod(uiFolder, GlobalConfig, "showMainMenu");
  this.addMethod(uiFolder, GlobalConfig, "showMissionsMenu");
  this.addMethod(uiFolder, GlobalConfig, "pause");
  this.addMethod(uiFolder, GlobalConfig, "resume");
  this.addMethod(uiFolder, GlobalConfig, "exitToMenu");
  // uiFolder.open();

  var debuggingFolder = datGuiInstance.addFolder("Debug");
  this.addMethod(debuggingFolder, GlobalConfig, "toggleDebugCamera");
  this.addMethod(debuggingFolder, GlobalConfig, "tossObstacles");
  this.addMethod(debuggingFolder, GlobalConfig, "forceRebatch");
  this.addMethod(debuggingFolder, GlobalConfig, "disableProps");
  this.addListenedValue(debuggingFolder, GlobalConfig, "instantiatedObjects");
  this.addListenedValue(debuggingFolder, GlobalConfig, "reusedObjects");
  this.addListenedValue(debuggingFolder, GlobalConfig, "cacheCapacity");
  this.addListenedValue(debuggingFolder, GlobalConfig, "movementState");
  this.addListenedValue(debuggingFolder, GlobalConfig, "laneState");
  this.addListenedValue(debuggingFolder, GlobalConfig, "controlsEnabled");
  this.addListenedValue(debuggingFolder, GlobalConfig, "currentBlock");
  this.addListenedValue(debuggingFolder, GlobalConfig, "currentBlockDistance");
  this.addListenedValue(debuggingFolder, GlobalConfig, "currentBlockProgress");
  this.addListenedValue(debuggingFolder, GlobalConfig, "groundY");
  this.addListenedValue(debuggingFolder, GlobalConfig, "groundEntity");
  this.addListenedValue(debuggingFolder, GlobalConfig, "onSurface");
  this.addListenedValue(debuggingFolder, GlobalConfig, "freeFalling");
  this.addListenedValue(debuggingFolder, GlobalConfig, "onHighGround");
  this.addListenedValue(debuggingFolder, GlobalConfig, "glidingRamp");
  this.addListenedValue(debuggingFolder, GlobalConfig, "frameSpeed");
  debuggingFolder.open();

  datGuiInstance.close();

  /* initialize triggers & collectables spots materials */
  const triggerSpotMaterial = this.app.assets.find("TriggerMaterial").resource;
  triggerSpotMaterial.opacity = GameConfig.getAttribute("showTriggerSpots")
    ? 0.5
    : 0;
  triggerSpotMaterial.update();

  const collectableSpotMaterial = this.app.assets.find(
    "CollectablePoweupMaterial"
  ).resource;
  collectableSpotMaterial.opacity = GameConfig.getAttribute(
    "showCollectablesSpots"
  )
    ? 0.5
    : 0;
  collectableSpotMaterial.update();
};

DatGui.prototype.setGameSpeedValue = function (key, value) {
  this.app.timeScale = value;
};

DatGui.prototype.setRendererConfigValue = function (key, value) {
  const scaleManager = this.app.root.findByName("Root").script.scaleManager;
  if (scaleManager) {
    scaleManager[key] = value;
  }
};

DatGui.prototype.updateGameConfigValue = function (key, value) {
  GameConfig.setAttribute(key, GlobalConfig[key]);

  if (key === "showTriggerSpots") {
    const triggerSpotMaterial =
      this.app.assets.find("TriggerMaterial").resource;
    triggerSpotMaterial.opacity = GameConfig.getAttribute("showTriggerSpots")
      ? 0.5
      : 0;
    triggerSpotMaterial.update();
  }

  if (key === "showCollectablesSpots") {
    const collectableSpotMaterial = this.app.assets.find(
      "CollectablePoweupMaterial"
    ).resource;
    collectableSpotMaterial.opacity = GameConfig.getAttribute(
      "showCollectablesSpots"
    )
      ? 0.5
      : 0;
    collectableSpotMaterial.update();
  }
};

DatGui.prototype.addOption = function (
  folder,
  optionHolder,
  optionKey,
  min,
  max,
  step,
  listener,
  listenerContext
) {
  return folder
    .add(optionHolder, optionKey, min, max)
    .onChange((value) => listener.call(listenerContext, optionKey, value))
    .step(step);
};

DatGui.prototype.addBooleanOption = function (
  folder,
  optionHolder,
  optionKey,
  listener,
  listenerContext
) {
  return folder
    .add(optionHolder, optionKey)
    .onChange((value) => listener.call(listenerContext, optionKey, value));
};

DatGui.prototype.addMethod = function (folder, optionHolder, optionKey) {
  return folder.add(optionHolder, optionKey);
};

DatGui.prototype.addListenedValue = function (folder, optionHolder, optionKey) {
  return folder.add(optionHolder, optionKey).listen();
};

DatGui.prototype.update = function (dt) {
  const character = this.level.character;
  if (character) {
    GlobalConfig.movementState = character.getMovementState();
    GlobalConfig.laneState = character.getLaneState();
    GlobalConfig.controlsEnabled = character.areControlsEnabled();
  }

  this.scaleManagerScript =
    this.scaleManagerScript || this.root.script.scaleManager;
  const scaleManager = this.scaleManagerScript;
  if (scaleManager) {
    RenderConfig.useDevicePixelRatio = scaleManager.useDevicePixelRatio;
    RenderConfig.maxDevicePixelRatio = scaleManager.maxDevicePixelRatio;
  }

  if (this.level.gameState.isGameRunningOrIdle()) {
    const currentBlock = this.level.getActiveBlock();
    GlobalConfig.currentBlock = currentBlock ? currentBlock.name : "-no block-";
    GlobalConfig.currentBlockDistance = currentBlock
      ? `${this.level.getActiveBlockRunDistance().toFixed(1)}m`
      : "-no progress-";
    GlobalConfig.currentBlockProgress = currentBlock
      ? `${Math.floor(this.level.getActiveBlockProgress().toFixed(2) * 100)}%`
      : "-no progress-";
  } else {
    GlobalConfig.currentBlock = "-none-";
  }

  if (this.level.gameState.isGameRunningOrIdleOrDead()) {
    const movementParams = this.level.playerContainer.movementParams || {};
    GlobalConfig.groundY =
      movementParams.groundY != undefined
        ? movementParams.groundY.toFixed(1)
        : movementParams.groundY;
    GlobalConfig.groundEntity = movementParams.groundEntity
      ? movementParams.groundEntity.name
      : "-";
    GlobalConfig.onSurface = movementParams.onSurface;
    GlobalConfig.freeFalling = movementParams.freeFalling;
    GlobalConfig.onHighGround = movementParams.onHighGround;
    GlobalConfig.glidingRamp = movementParams.glidingRamp;
    GlobalConfig.frameSpeed = `${
      this.level.playerContainer.frameSpeed.x.toFixed(1) || 0
    },  ${this.level.playerContainer.frameSpeed.y.toFixed(1) || 0},  ${
      this.level.playerContainer.frameSpeed.z.toFixed(1) || 0
    }`;
  } else {
    GlobalConfig.groundY = "-not initialized-";
    GlobalConfig.groundEntity = "-not initialized-";
    GlobalConfig.onSurface = "-not initialized-";
    GlobalConfig.freeFalling = "-not initialized-";
    GlobalConfig.onHighGround = "-not initialized-";
    GlobalConfig.glidingRamp = "-not initialized-";
    GlobalConfig.frameSpeed = "-";
  }

  GlobalConfig.instantiatedObjects =
    "" + LevelObjectPool.getInstance().numInstantiatedObjects;
  GlobalConfig.reusedObjects =
    "" + LevelObjectPool.getInstance().numReusedObjects;
  GlobalConfig.cacheCapacity =
    "" + LevelObjectPool.getInstance().getCacheCapacity();
};

// dat.gui.min.js
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.dat = t())
    : (e.dat = t());
})(this, function () {
  return (function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var i = (n[o] = { exports: {}, id: o, loaded: !1 });
      return e[o].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
    }
    var n = {};
    return (t.m = e), (t.c = n), (t.p = ""), t(0);
  })([
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var i = n(1),
        r = o(i);
      e.exports = r["default"];
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.__esModule = !0;
      var i = n(2),
        r = o(i),
        a = n(6),
        l = o(a),
        s = n(3),
        u = o(s),
        d = n(7),
        c = o(d),
        f = n(8),
        _ = o(f),
        p = n(10),
        h = o(p),
        m = n(11),
        b = o(m),
        g = n(12),
        v = o(g),
        y = n(13),
        w = o(y),
        x = n(14),
        E = o(x),
        C = n(15),
        A = o(C),
        S = n(16),
        k = o(S),
        O = n(9),
        T = o(O),
        R = n(17),
        L = o(R);
      t["default"] = {
        color: {
          Color: r["default"],
          math: l["default"],
          interpret: u["default"],
        },
        controllers: {
          Controller: c["default"],
          BooleanController: _["default"],
          OptionController: h["default"],
          StringController: b["default"],
          NumberController: v["default"],
          NumberControllerBox: w["default"],
          NumberControllerSlider: E["default"],
          FunctionController: A["default"],
          ColorController: k["default"],
        },
        dom: { dom: T["default"] },
        gui: { GUI: L["default"] },
        GUI: L["default"],
      };
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t, n) {
        Object.defineProperty(e, t, {
          get: function () {
            return "RGB" === this.__state.space
              ? this.__state[t]
              : (h.recalculateRGB(this, t, n), this.__state[t]);
          },
          set: function (e) {
            "RGB" !== this.__state.space &&
              (h.recalculateRGB(this, t, n), (this.__state.space = "RGB")),
              (this.__state[t] = e);
          },
        });
      }
      function a(e, t) {
        Object.defineProperty(e, t, {
          get: function () {
            return "HSV" === this.__state.space
              ? this.__state[t]
              : (h.recalculateHSV(this), this.__state[t]);
          },
          set: function (e) {
            "HSV" !== this.__state.space &&
              (h.recalculateHSV(this), (this.__state.space = "HSV")),
              (this.__state[t] = e);
          },
        });
      }
      t.__esModule = !0;
      var l = n(3),
        s = o(l),
        u = n(6),
        d = o(u),
        c = n(4),
        f = o(c),
        _ = n(5),
        p = o(_),
        h = (function () {
          function e() {
            if (
              (i(this, e),
              (this.__state = s["default"].apply(this, arguments)),
              this.__state === !1)
            )
              throw new Error("Failed to interpret color arguments");
            this.__state.a = this.__state.a || 1;
          }
          return (
            (e.prototype.toString = function () {
              return (0, f["default"])(this);
            }),
            (e.prototype.toHexString = function () {
              return (0, f["default"])(this, !0);
            }),
            (e.prototype.toOriginal = function () {
              return this.__state.conversion.write(this);
            }),
            e
          );
        })();
      (h.recalculateRGB = function (e, t, n) {
        if ("HEX" === e.__state.space)
          e.__state[t] = d["default"].component_from_hex(e.__state.hex, n);
        else {
          if ("HSV" !== e.__state.space)
            throw new Error("Corrupted color state");
          p["default"].extend(
            e.__state,
            d["default"].hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v)
          );
        }
      }),
        (h.recalculateHSV = function (e) {
          var t = d["default"].rgb_to_hsv(e.r, e.g, e.b);
          p["default"].extend(e.__state, { s: t.s, v: t.v }),
            p["default"].isNaN(t.h)
              ? p["default"].isUndefined(e.__state.h) && (e.__state.h = 0)
              : (e.__state.h = t.h);
        }),
        (h.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"]),
        r(h.prototype, "r", 2),
        r(h.prototype, "g", 1),
        r(h.prototype, "b", 0),
        a(h.prototype, "h"),
        a(h.prototype, "s"),
        a(h.prototype, "v"),
        Object.defineProperty(h.prototype, "a", {
          get: function () {
            return this.__state.a;
          },
          set: function (e) {
            this.__state.a = e;
          },
        }),
        Object.defineProperty(h.prototype, "hex", {
          get: function () {
            return (
              "HEX" !== !this.__state.space &&
                (this.__state.hex = d["default"].rgb_to_hex(
                  this.r,
                  this.g,
                  this.b
                )),
              this.__state.hex
            );
          },
          set: function (e) {
            (this.__state.space = "HEX"), (this.__state.hex = e);
          },
        }),
        (t["default"] = h);
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.__esModule = !0;
      var i = n(4),
        r = o(i),
        a = n(5),
        l = o(a),
        s = [
          {
            litmus: l["default"].isString,
            conversions: {
              THREE_CHAR_HEX: {
                read: function (e) {
                  var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                  return (
                    null !== t && {
                      space: "HEX",
                      hex: parseInt(
                        "0x" +
                          t[1].toString() +
                          t[1].toString() +
                          t[2].toString() +
                          t[2].toString() +
                          t[3].toString() +
                          t[3].toString(),
                        0
                      ),
                    }
                  );
                },
                write: r["default"],
              },
              SIX_CHAR_HEX: {
                read: function (e) {
                  var t = e.match(/^#([A-F0-9]{6})$/i);
                  return (
                    null !== t && {
                      space: "HEX",
                      hex: parseInt("0x" + t[1].toString(), 0),
                    }
                  );
                },
                write: r["default"],
              },
              CSS_RGB: {
                read: function (e) {
                  var t = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                  return (
                    null !== t && {
                      space: "RGB",
                      r: parseFloat(t[1]),
                      g: parseFloat(t[2]),
                      b: parseFloat(t[3]),
                    }
                  );
                },
                write: r["default"],
              },
              CSS_RGBA: {
                read: function (e) {
                  var t = e.match(
                    /^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/
                  );
                  return (
                    null !== t && {
                      space: "RGB",
                      r: parseFloat(t[1]),
                      g: parseFloat(t[2]),
                      b: parseFloat(t[3]),
                      a: parseFloat(t[4]),
                    }
                  );
                },
                write: r["default"],
              },
            },
          },
          {
            litmus: l["default"].isNumber,
            conversions: {
              HEX: {
                read: function (e) {
                  return { space: "HEX", hex: e, conversionName: "HEX" };
                },
                write: function (e) {
                  return e.hex;
                },
              },
            },
          },
          {
            litmus: l["default"].isArray,
            conversions: {
              RGB_ARRAY: {
                read: function (e) {
                  return (
                    3 === e.length && {
                      space: "RGB",
                      r: e[0],
                      g: e[1],
                      b: e[2],
                    }
                  );
                },
                write: function (e) {
                  return [e.r, e.g, e.b];
                },
              },
              RGBA_ARRAY: {
                read: function (e) {
                  return (
                    4 === e.length && {
                      space: "RGB",
                      r: e[0],
                      g: e[1],
                      b: e[2],
                      a: e[3],
                    }
                  );
                },
                write: function (e) {
                  return [e.r, e.g, e.b, e.a];
                },
              },
            },
          },
          {
            litmus: l["default"].isObject,
            conversions: {
              RGBA_OBJ: {
                read: function (e) {
                  return (
                    !!(
                      l["default"].isNumber(e.r) &&
                      l["default"].isNumber(e.g) &&
                      l["default"].isNumber(e.b) &&
                      l["default"].isNumber(e.a)
                    ) && { space: "RGB", r: e.r, g: e.g, b: e.b, a: e.a }
                  );
                },
                write: function (e) {
                  return { r: e.r, g: e.g, b: e.b, a: e.a };
                },
              },
              RGB_OBJ: {
                read: function (e) {
                  return (
                    !!(
                      l["default"].isNumber(e.r) &&
                      l["default"].isNumber(e.g) &&
                      l["default"].isNumber(e.b)
                    ) && { space: "RGB", r: e.r, g: e.g, b: e.b }
                  );
                },
                write: function (e) {
                  return { r: e.r, g: e.g, b: e.b };
                },
              },
              HSVA_OBJ: {
                read: function (e) {
                  return (
                    !!(
                      l["default"].isNumber(e.h) &&
                      l["default"].isNumber(e.s) &&
                      l["default"].isNumber(e.v) &&
                      l["default"].isNumber(e.a)
                    ) && { space: "HSV", h: e.h, s: e.s, v: e.v, a: e.a }
                  );
                },
                write: function (e) {
                  return { h: e.h, s: e.s, v: e.v, a: e.a };
                },
              },
              HSV_OBJ: {
                read: function (e) {
                  return (
                    !!(
                      l["default"].isNumber(e.h) &&
                      l["default"].isNumber(e.s) &&
                      l["default"].isNumber(e.v)
                    ) && { space: "HSV", h: e.h, s: e.s, v: e.v }
                  );
                },
                write: function (e) {
                  return { h: e.h, s: e.s, v: e.v };
                },
              },
            },
          },
        ],
        u = void 0,
        d = void 0,
        c = function () {
          d = !1;
          var e =
            arguments.length > 1
              ? l["default"].toArray(arguments)
              : arguments[0];
          return (
            l["default"].each(s, function (t) {
              if (t.litmus(e))
                return (
                  l["default"].each(t.conversions, function (t, n) {
                    if (((u = t.read(e)), d === !1 && u !== !1))
                      return (
                        (d = u),
                        (u.conversionName = n),
                        (u.conversion = t),
                        l["default"].BREAK
                      );
                  }),
                  l["default"].BREAK
                );
            }),
            d
          );
        };
      t["default"] = c;
    },
    function (e, t) {
      "use strict";
      (t.__esModule = !0),
        (t["default"] = function (e, t) {
          var n = e.__state.conversionName.toString(),
            o = Math.round(e.r),
            i = Math.round(e.g),
            r = Math.round(e.b),
            a = e.a,
            l = Math.round(e.h),
            s = e.s.toFixed(1),
            u = e.v.toFixed(1);
          if (t || "THREE_CHAR_HEX" === n || "SIX_CHAR_HEX" === n) {
            for (var d = e.hex.toString(16); d.length < 6; ) d = "0" + d;
            return "#" + d;
          }
          return "CSS_RGB" === n
            ? "rgb(" + o + "," + i + "," + r + ")"
            : "CSS_RGBA" === n
            ? "rgba(" + o + "," + i + "," + r + "," + a + ")"
            : "HEX" === n
            ? "0x" + e.hex.toString(16)
            : "RGB_ARRAY" === n
            ? "[" + o + "," + i + "," + r + "]"
            : "RGBA_ARRAY" === n
            ? "[" + o + "," + i + "," + r + "," + a + "]"
            : "RGB_OBJ" === n
            ? "{r:" + o + ",g:" + i + ",b:" + r + "}"
            : "RGBA_OBJ" === n
            ? "{r:" + o + ",g:" + i + ",b:" + r + ",a:" + a + "}"
            : "HSV_OBJ" === n
            ? "{h:" + l + ",s:" + s + ",v:" + u + "}"
            : "HSVA_OBJ" === n
            ? "{h:" + l + ",s:" + s + ",v:" + u + ",a:" + a + "}"
            : "unknown format";
        });
    },
    function (e, t) {
      "use strict";
      t.__esModule = !0;
      var n = Array.prototype.forEach,
        o = Array.prototype.slice,
        i = {
          BREAK: {},
          extend: function (e) {
            return (
              this.each(
                o.call(arguments, 1),
                function (t) {
                  var n = this.isObject(t) ? Object.keys(t) : [];
                  n.forEach(
                    function (n) {
                      this.isUndefined(t[n]) || (e[n] = t[n]);
                    }.bind(this)
                  );
                },
                this
              ),
              e
            );
          },
          defaults: function (e) {
            return (
              this.each(
                o.call(arguments, 1),
                function (t) {
                  var n = this.isObject(t) ? Object.keys(t) : [];
                  n.forEach(
                    function (n) {
                      this.isUndefined(e[n]) && (e[n] = t[n]);
                    }.bind(this)
                  );
                },
                this
              ),
              e
            );
          },
          compose: function () {
            var e = o.call(arguments);
            return function () {
              for (var t = o.call(arguments), n = e.length - 1; n >= 0; n--)
                t = [e[n].apply(this, t)];
              return t[0];
            };
          },
          each: function (e, t, o) {
            if (e)
              if (n && e.forEach && e.forEach === n) e.forEach(t, o);
              else if (e.length === e.length + 0) {
                var i = void 0,
                  r = void 0;
                for (i = 0, r = e.length; i < r; i++)
                  if (i in e && t.call(o, e[i], i) === this.BREAK) return;
              } else
                for (var a in e) if (t.call(o, e[a], a) === this.BREAK) return;
          },
          defer: function (e) {
            setTimeout(e, 0);
          },
          debounce: function (e, t) {
            var n = void 0;
            return function () {
              function o() {
                n = null;
              }
              var i = this,
                r = arguments,
                a = !n;
              clearTimeout(n), (n = setTimeout(o, t)), a && e.apply(i, r);
            };
          },
          toArray: function (e) {
            return e.toArray ? e.toArray() : o.call(e);
          },
          isUndefined: function (e) {
            return void 0 === e;
          },
          isNull: function (e) {
            return null === e;
          },
          isNaN: (function (e) {
            function t(t) {
              return e.apply(this, arguments);
            }
            return (
              (t.toString = function () {
                return e.toString();
              }),
              t
            );
          })(function (e) {
            return isNaN(e);
          }),
          isArray:
            Array.isArray ||
            function (e) {
              return e.constructor === Array;
            },
          isObject: function (e) {
            return e === Object(e);
          },
          isNumber: function (e) {
            return e === e + 0;
          },
          isString: function (e) {
            return e === e + "";
          },
          isBoolean: function (e) {
            return e === !1 || e === !0;
          },
          isFunction: function (e) {
            return "[object Function]" === Object.prototype.toString.call(e);
          },
        };
      t["default"] = i;
    },
    function (e, t) {
      "use strict";
      t.__esModule = !0;
      var n = void 0,
        o = {
          hsv_to_rgb: function (e, t, n) {
            var o = Math.floor(e / 60) % 6,
              i = e / 60 - Math.floor(e / 60),
              r = n * (1 - t),
              a = n * (1 - i * t),
              l = n * (1 - (1 - i) * t),
              s = [
                [n, l, r],
                [a, n, r],
                [r, n, l],
                [r, a, n],
                [l, r, n],
                [n, r, a],
              ][o];
            return { r: 255 * s[0], g: 255 * s[1], b: 255 * s[2] };
          },
          rgb_to_hsv: function (e, t, n) {
            var o = Math.min(e, t, n),
              i = Math.max(e, t, n),
              r = i - o,
              a = void 0,
              l = void 0;
            return 0 === i
              ? { h: NaN, s: 0, v: 0 }
              : ((l = r / i),
                (a =
                  e === i
                    ? (t - n) / r
                    : t === i
                    ? 2 + (n - e) / r
                    : 4 + (e - t) / r),
                (a /= 6),
                a < 0 && (a += 1),
                { h: 360 * a, s: l, v: i / 255 });
          },
          rgb_to_hex: function (e, t, n) {
            var o = this.hex_with_component(0, 2, e);
            return (
              (o = this.hex_with_component(o, 1, t)),
              (o = this.hex_with_component(o, 0, n))
            );
          },
          component_from_hex: function (e, t) {
            return (e >> (8 * t)) & 255;
          },
          hex_with_component: function (e, t, o) {
            return (o << (n = 8 * t)) | (e & ~(255 << n));
          },
        };
      t["default"] = o;
    },
    function (e, t) {
      "use strict";
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      t.__esModule = !0;
      var o = (function () {
        function e(t, o) {
          n(this, e),
            (this.initialValue = t[o]),
            (this.domElement = document.createElement("div")),
            (this.object = t),
            (this.property = o),
            (this.__onChange = void 0),
            (this.__onFinishChange = void 0);
        }
        return (
          (e.prototype.onChange = function (e) {
            return (this.__onChange = e), this;
          }),
          (e.prototype.onFinishChange = function (e) {
            return (this.__onFinishChange = e), this;
          }),
          (e.prototype.setValue = function (e) {
            return (
              (this.object[this.property] = e),
              this.__onChange && this.__onChange.call(this, e),
              this.updateDisplay(),
              this
            );
          }),
          (e.prototype.getValue = function () {
            return this.object[this.property];
          }),
          (e.prototype.updateDisplay = function () {
            return this;
          }),
          (e.prototype.isModified = function () {
            return this.initialValue !== this.getValue();
          }),
          e
        );
      })();
      t["default"] = o;
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function a(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      t.__esModule = !0;
      var l = n(7),
        s = o(l),
        u = n(9),
        d = o(u),
        c = (function (e) {
          function t(n, o) {
            function a() {
              s.setValue(!s.__prev);
            }
            i(this, t);
            var l = r(this, e.call(this, n, o)),
              s = l;
            return (
              (l.__prev = l.getValue()),
              (l.__checkbox = document.createElement("input")),
              l.__checkbox.setAttribute("type", "checkbox"),
              d["default"].bind(l.__checkbox, "change", a, !1),
              l.domElement.appendChild(l.__checkbox),
              l.updateDisplay(),
              l
            );
          }
          return (
            a(t, e),
            (t.prototype.setValue = function (t) {
              var n = e.prototype.setValue.call(this, t);
              return (
                this.__onFinishChange &&
                  this.__onFinishChange.call(this, this.getValue()),
                (this.__prev = this.getValue()),
                n
              );
            }),
            (t.prototype.updateDisplay = function () {
              return (
                this.getValue() === !0
                  ? (this.__checkbox.setAttribute("checked", "checked"),
                    (this.__checkbox.checked = !0))
                  : (this.__checkbox.checked = !1),
                e.prototype.updateDisplay.call(this)
              );
            }),
            t
          );
        })(s["default"]);
      t["default"] = c;
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e) {
        if ("0" === e || a["default"].isUndefined(e)) return 0;
        var t = e.match(u);
        return a["default"].isNull(t) ? 0 : parseFloat(t[1]);
      }
      t.__esModule = !0;
      var r = n(5),
        a = o(r),
        l = {
          HTMLEvents: ["change"],
          MouseEvents: [
            "click",
            "mousemove",
            "mousedown",
            "mouseup",
            "mouseover",
          ],
          KeyboardEvents: ["keydown"],
        },
        s = {};
      a["default"].each(l, function (e, t) {
        a["default"].each(e, function (e) {
          s[e] = t;
        });
      });
      var u = /(\d+(\.\d+)?)px/,
        d = {
          makeSelectable: function (e, t) {
            void 0 !== e &&
              void 0 !== e.style &&
              ((e.onselectstart = t
                ? function () {
                    return !1;
                  }
                : function () {}),
              (e.style.MozUserSelect = t ? "auto" : "none"),
              (e.style.KhtmlUserSelect = t ? "auto" : "none"),
              (e.unselectable = t ? "on" : "off"));
          },
          makeFullscreen: function (e, t, n) {
            var o = n,
              i = t;
            a["default"].isUndefined(i) && (i = !0),
              a["default"].isUndefined(o) && (o = !0),
              (e.style.position = "absolute"),
              i && ((e.style.left = 0), (e.style.right = 0)),
              o && ((e.style.top = 0), (e.style.bottom = 0));
          },
          fakeEvent: function (e, t, n, o) {
            var i = n || {},
              r = s[t];
            if (!r) throw new Error("Event type " + t + " not supported.");
            var l = document.createEvent(r);
            switch (r) {
              case "MouseEvents":
                var u = i.x || i.clientX || 0,
                  d = i.y || i.clientY || 0;
                l.initMouseEvent(
                  t,
                  i.bubbles || !1,
                  i.cancelable || !0,
                  window,
                  i.clickCount || 1,
                  0,
                  0,
                  u,
                  d,
                  !1,
                  !1,
                  !1,
                  !1,
                  0,
                  null
                );
                break;
              case "KeyboardEvents":
                var c = l.initKeyboardEvent || l.initKeyEvent;
                a["default"].defaults(i, {
                  cancelable: !0,
                  ctrlKey: !1,
                  altKey: !1,
                  shiftKey: !1,
                  metaKey: !1,
                  keyCode: void 0,
                  charCode: void 0,
                }),
                  c(
                    t,
                    i.bubbles || !1,
                    i.cancelable,
                    window,
                    i.ctrlKey,
                    i.altKey,
                    i.shiftKey,
                    i.metaKey,
                    i.keyCode,
                    i.charCode
                  );
                break;
              default:
                l.initEvent(t, i.bubbles || !1, i.cancelable || !0);
            }
            a["default"].defaults(l, o), e.dispatchEvent(l);
          },
          bind: function (e, t, n, o) {
            var i = o || !1;
            return (
              e.addEventListener
                ? e.addEventListener(t, n, i)
                : e.attachEvent && e.attachEvent("on" + t, n),
              d
            );
          },
          unbind: function (e, t, n, o) {
            var i = o || !1;
            return (
              e.removeEventListener
                ? e.removeEventListener(t, n, i)
                : e.detachEvent && e.detachEvent("on" + t, n),
              d
            );
          },
          addClass: function (e, t) {
            if (void 0 === e.className) e.className = t;
            else if (e.className !== t) {
              var n = e.className.split(/ +/);
              n.indexOf(t) === -1 &&
                (n.push(t),
                (e.className = n
                  .join(" ")
                  .replace(/^\s+/, "")
                  .replace(/\s+$/, "")));
            }
            return d;
          },
          removeClass: function (e, t) {
            if (t)
              if (e.className === t) e.removeAttribute("class");
              else {
                var n = e.className.split(/ +/),
                  o = n.indexOf(t);
                o !== -1 && (n.splice(o, 1), (e.className = n.join(" ")));
              }
            else e.className = void 0;
            return d;
          },
          hasClass: function (e, t) {
            return (
              new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) ||
              !1
            );
          },
          getWidth: function (e) {
            var t = getComputedStyle(e);
            return (
              i(t["border-left-width"]) +
              i(t["border-right-width"]) +
              i(t["padding-left"]) +
              i(t["padding-right"]) +
              i(t.width)
            );
          },
          getHeight: function (e) {
            var t = getComputedStyle(e);
            return (
              i(t["border-top-width"]) +
              i(t["border-bottom-width"]) +
              i(t["padding-top"]) +
              i(t["padding-bottom"]) +
              i(t.height)
            );
          },
          getOffset: function (e) {
            var t = e,
              n = { left: 0, top: 0 };
            if (t.offsetParent)
              do
                (n.left += t.offsetLeft),
                  (n.top += t.offsetTop),
                  (t = t.offsetParent);
              while (t);
            return n;
          },
          isActive: function (e) {
            return e === document.activeElement && (e.type || e.href);
          },
        };
      t["default"] = d;
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function a(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      t.__esModule = !0;
      var l = n(7),
        s = o(l),
        u = n(9),
        d = o(u),
        c = n(5),
        f = o(c),
        _ = (function (e) {
          function t(n, o, a) {
            i(this, t);
            var l = r(this, e.call(this, n, o)),
              s = a,
              u = l;
            return (
              (l.__select = document.createElement("select")),
              f["default"].isArray(s) &&
                !(function () {
                  var e = {};
                  f["default"].each(s, function (t) {
                    e[t] = t;
                  }),
                    (s = e);
                })(),
              f["default"].each(s, function (e, t) {
                var n = document.createElement("option");
                (n.innerHTML = t),
                  n.setAttribute("value", e),
                  u.__select.appendChild(n);
              }),
              l.updateDisplay(),
              d["default"].bind(l.__select, "change", function () {
                var e = this.options[this.selectedIndex].value;
                u.setValue(e);
              }),
              l.domElement.appendChild(l.__select),
              l
            );
          }
          return (
            a(t, e),
            (t.prototype.setValue = function (t) {
              var n = e.prototype.setValue.call(this, t);
              return (
                this.__onFinishChange &&
                  this.__onFinishChange.call(this, this.getValue()),
                n
              );
            }),
            (t.prototype.updateDisplay = function () {
              return d["default"].isActive(this.__select)
                ? this
                : ((this.__select.value = this.getValue()),
                  e.prototype.updateDisplay.call(this));
            }),
            t
          );
        })(s["default"]);
      t["default"] = _;
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function a(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      t.__esModule = !0;
      var l = n(7),
        s = o(l),
        u = n(9),
        d = o(u),
        c = (function (e) {
          function t(n, o) {
            function a() {
              u.setValue(u.__input.value);
            }
            function l() {
              u.__onFinishChange && u.__onFinishChange.call(u, u.getValue());
            }
            i(this, t);
            var s = r(this, e.call(this, n, o)),
              u = s;
            return (
              (s.__input = document.createElement("input")),
              s.__input.setAttribute("type", "text"),
              d["default"].bind(s.__input, "keyup", a),
              d["default"].bind(s.__input, "change", a),
              d["default"].bind(s.__input, "blur", l),
              d["default"].bind(s.__input, "keydown", function (e) {
                13 === e.keyCode && this.blur();
              }),
              s.updateDisplay(),
              s.domElement.appendChild(s.__input),
              s
            );
          }
          return (
            a(t, e),
            (t.prototype.updateDisplay = function () {
              return (
                d["default"].isActive(this.__input) ||
                  (this.__input.value = this.getValue()),
                e.prototype.updateDisplay.call(this)
              );
            }),
            t
          );
        })(s["default"]);
      t["default"] = c;
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function a(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      function l(e) {
        var t = e.toString();
        return t.indexOf(".") > -1 ? t.length - t.indexOf(".") - 1 : 0;
      }
      t.__esModule = !0;
      var s = n(7),
        u = o(s),
        d = n(5),
        c = o(d),
        f = (function (e) {
          function t(n, o, a) {
            i(this, t);
            var s = r(this, e.call(this, n, o)),
              u = a || {};
            return (
              (s.__min = u.min),
              (s.__max = u.max),
              (s.__step = u.step),
              c["default"].isUndefined(s.__step)
                ? 0 === s.initialValue
                  ? (s.__impliedStep = 1)
                  : (s.__impliedStep =
                      Math.pow(
                        10,
                        Math.floor(
                          Math.log(Math.abs(s.initialValue)) / Math.LN10
                        )
                      ) / 10)
                : (s.__impliedStep = s.__step),
              (s.__precision = l(s.__impliedStep)),
              s
            );
          }
          return (
            a(t, e),
            (t.prototype.setValue = function (t) {
              var n = t;
              return (
                void 0 !== this.__min && n < this.__min
                  ? (n = this.__min)
                  : void 0 !== this.__max && n > this.__max && (n = this.__max),
                void 0 !== this.__step &&
                  n % this.__step !== 0 &&
                  (n = Math.round(n / this.__step) * this.__step),
                e.prototype.setValue.call(this, n)
              );
            }),
            (t.prototype.min = function (e) {
              return (this.__min = e), this;
            }),
            (t.prototype.max = function (e) {
              return (this.__max = e), this;
            }),
            (t.prototype.step = function (e) {
              return (
                (this.__step = e),
                (this.__impliedStep = e),
                (this.__precision = l(e)),
                this
              );
            }),
            t
          );
        })(u["default"]);
      t["default"] = f;
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function a(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      function l(e, t) {
        var n = Math.pow(10, t);
        return Math.round(e * n) / n;
      }
      t.__esModule = !0;
      var s = n(12),
        u = o(s),
        d = n(9),
        c = o(d),
        f = n(5),
        _ = o(f),
        p = (function (e) {
          function t(n, o, a) {
            function l() {
              var e = parseFloat(m.__input.value);
              _["default"].isNaN(e) || m.setValue(e);
            }
            function s() {
              m.__onFinishChange && m.__onFinishChange.call(m, m.getValue());
            }
            function u() {
              s();
            }
            function d(e) {
              var t = b - e.clientY;
              m.setValue(m.getValue() + t * m.__impliedStep), (b = e.clientY);
            }
            function f() {
              c["default"].unbind(window, "mousemove", d),
                c["default"].unbind(window, "mouseup", f),
                s();
            }
            function p(e) {
              c["default"].bind(window, "mousemove", d),
                c["default"].bind(window, "mouseup", f),
                (b = e.clientY);
            }
            i(this, t);
            var h = r(this, e.call(this, n, o, a));
            h.__truncationSuspended = !1;
            var m = h,
              b = void 0;
            return (
              (h.__input = document.createElement("input")),
              h.__input.setAttribute("type", "text"),
              c["default"].bind(h.__input, "change", l),
              c["default"].bind(h.__input, "blur", u),
              c["default"].bind(h.__input, "mousedown", p),
              c["default"].bind(h.__input, "keydown", function (e) {
                13 === e.keyCode &&
                  ((m.__truncationSuspended = !0),
                  this.blur(),
                  (m.__truncationSuspended = !1),
                  s());
              }),
              h.updateDisplay(),
              h.domElement.appendChild(h.__input),
              h
            );
          }
          return (
            a(t, e),
            (t.prototype.updateDisplay = function () {
              return (
                (this.__input.value = this.__truncationSuspended
                  ? this.getValue()
                  : l(this.getValue(), this.__precision)),
                e.prototype.updateDisplay.call(this)
              );
            }),
            t
          );
        })(u["default"]);
      t["default"] = p;
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function a(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      function l(e, t, n, o, i) {
        return o + (i - o) * ((e - t) / (n - t));
      }
      t.__esModule = !0;
      var s = n(12),
        u = o(s),
        d = n(9),
        c = o(d),
        f = (function (e) {
          function t(n, o, a, s, u) {
            function d(e) {
              document.activeElement.blur(),
                c["default"].bind(window, "mousemove", f),
                c["default"].bind(window, "mouseup", _),
                f(e);
            }
            function f(e) {
              e.preventDefault();
              var t = h.__background.getBoundingClientRect();
              return (
                h.setValue(l(e.clientX, t.left, t.right, h.__min, h.__max)), !1
              );
            }
            function _() {
              c["default"].unbind(window, "mousemove", f),
                c["default"].unbind(window, "mouseup", _),
                h.__onFinishChange && h.__onFinishChange.call(h, h.getValue());
            }
            i(this, t);
            var p = r(this, e.call(this, n, o, { min: a, max: s, step: u })),
              h = p;
            return (
              (p.__background = document.createElement("div")),
              (p.__foreground = document.createElement("div")),
              c["default"].bind(p.__background, "mousedown", d),
              c["default"].addClass(p.__background, "slider"),
              c["default"].addClass(p.__foreground, "slider-fg"),
              p.updateDisplay(),
              p.__background.appendChild(p.__foreground),
              p.domElement.appendChild(p.__background),
              p
            );
          }
          return (
            a(t, e),
            (t.prototype.updateDisplay = function () {
              var t =
                (this.getValue() - this.__min) / (this.__max - this.__min);
              return (
                (this.__foreground.style.width = 100 * t + "%"),
                e.prototype.updateDisplay.call(this)
              );
            }),
            t
          );
        })(u["default"]);
      t["default"] = f;
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function a(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      t.__esModule = !0;
      var l = n(7),
        s = o(l),
        u = n(9),
        d = o(u),
        c = (function (e) {
          function t(n, o, a) {
            i(this, t);
            var l = r(this, e.call(this, n, o)),
              s = l;
            return (
              (l.__button = document.createElement("div")),
              (l.__button.innerHTML = void 0 === a ? "Fire" : a),
              d["default"].bind(l.__button, "click", function (e) {
                return e.preventDefault(), s.fire(), !1;
              }),
              d["default"].addClass(l.__button, "button"),
              l.domElement.appendChild(l.__button),
              l
            );
          }
          return (
            a(t, e),
            (t.prototype.fire = function () {
              this.__onChange && this.__onChange.call(this),
                this.getValue().call(this.object),
                this.__onFinishChange &&
                  this.__onFinishChange.call(this, this.getValue());
            }),
            t
          );
        })(s["default"]);
      t["default"] = c;
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function a(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      function l(e, t, n, o) {
        (e.style.background = ""),
          g["default"].each(y, function (i) {
            e.style.cssText +=
              "background: " +
              i +
              "linear-gradient(" +
              t +
              ", " +
              n +
              " 0%, " +
              o +
              " 100%); ";
          });
      }
      function s(e) {
        (e.style.background = ""),
          (e.style.cssText +=
            "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);"),
          (e.style.cssText +=
            "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"),
          (e.style.cssText +=
            "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"),
          (e.style.cssText +=
            "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"),
          (e.style.cssText +=
            "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);");
      }
      t.__esModule = !0;
      var u = n(7),
        d = o(u),
        c = n(9),
        f = o(c),
        _ = n(2),
        p = o(_),
        h = n(3),
        m = o(h),
        b = n(5),
        g = o(b),
        v = (function (e) {
          function t(n, o) {
            function a(e) {
              h(e),
                f["default"].bind(window, "mousemove", h),
                f["default"].bind(window, "mouseup", u);
            }
            function u() {
              f["default"].unbind(window, "mousemove", h),
                f["default"].unbind(window, "mouseup", u),
                _();
            }
            function d() {
              var e = (0, m["default"])(this.value);
              e !== !1
                ? ((y.__color.__state = e), y.setValue(y.__color.toOriginal()))
                : (this.value = y.__color.toString());
            }
            function c() {
              f["default"].unbind(window, "mousemove", b),
                f["default"].unbind(window, "mouseup", c),
                _();
            }
            function _() {
              y.__onFinishChange &&
                y.__onFinishChange.call(y, y.__color.toOriginal());
            }
            function h(e) {
              e.preventDefault();
              var t = y.__saturation_field.getBoundingClientRect(),
                n = (e.clientX - t.left) / (t.right - t.left),
                o = 1 - (e.clientY - t.top) / (t.bottom - t.top);
              return (
                o > 1 ? (o = 1) : o < 0 && (o = 0),
                n > 1 ? (n = 1) : n < 0 && (n = 0),
                (y.__color.v = o),
                (y.__color.s = n),
                y.setValue(y.__color.toOriginal()),
                !1
              );
            }
            function b(e) {
              e.preventDefault();
              var t = y.__hue_field.getBoundingClientRect(),
                n = 1 - (e.clientY - t.top) / (t.bottom - t.top);
              return (
                n > 1 ? (n = 1) : n < 0 && (n = 0),
                (y.__color.h = 360 * n),
                y.setValue(y.__color.toOriginal()),
                !1
              );
            }
            i(this, t);
            var v = r(this, e.call(this, n, o));
            (v.__color = new p["default"](v.getValue())),
              (v.__temp = new p["default"](0));
            var y = v;
            (v.domElement = document.createElement("div")),
              f["default"].makeSelectable(v.domElement, !1),
              (v.__selector = document.createElement("div")),
              (v.__selector.className = "selector"),
              (v.__saturation_field = document.createElement("div")),
              (v.__saturation_field.className = "saturation-field"),
              (v.__field_knob = document.createElement("div")),
              (v.__field_knob.className = "field-knob"),
              (v.__field_knob_border = "2px solid "),
              (v.__hue_knob = document.createElement("div")),
              (v.__hue_knob.className = "hue-knob"),
              (v.__hue_field = document.createElement("div")),
              (v.__hue_field.className = "hue-field"),
              (v.__input = document.createElement("input")),
              (v.__input.type = "text"),
              (v.__input_textShadow = "0 1px 1px "),
              f["default"].bind(v.__input, "keydown", function (e) {
                13 === e.keyCode && d.call(this);
              }),
              f["default"].bind(v.__input, "blur", d),
              f["default"].bind(v.__selector, "mousedown", function () {
                f["default"]
                  .addClass(this, "drag")
                  .bind(window, "mouseup", function () {
                    f["default"].removeClass(y.__selector, "drag");
                  });
              });
            var w = document.createElement("div");
            return (
              g["default"].extend(v.__selector.style, {
                width: "122px",
                height: "102px",
                padding: "3px",
                backgroundColor: "#222",
                boxShadow: "0px 1px 3px rgba(0,0,0,0.3)",
              }),
              g["default"].extend(v.__field_knob.style, {
                position: "absolute",
                width: "12px",
                height: "12px",
                border:
                  v.__field_knob_border + (v.__color.v < 0.5 ? "#fff" : "#000"),
                boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
                borderRadius: "12px",
                zIndex: 1,
              }),
              g["default"].extend(v.__hue_knob.style, {
                position: "absolute",
                width: "15px",
                height: "2px",
                borderRight: "4px solid #fff",
                zIndex: 1,
              }),
              g["default"].extend(v.__saturation_field.style, {
                width: "100px",
                height: "100px",
                border: "1px solid #555",
                marginRight: "3px",
                display: "inline-block",
                cursor: "pointer",
              }),
              g["default"].extend(w.style, {
                width: "100%",
                height: "100%",
                background: "none",
              }),
              l(w, "top", "rgba(0,0,0,0)", "#000"),
              g["default"].extend(v.__hue_field.style, {
                width: "15px",
                height: "100px",
                border: "1px solid #555",
                cursor: "ns-resize",
                position: "absolute",
                top: "3px",
                right: "3px",
              }),
              s(v.__hue_field),
              g["default"].extend(v.__input.style, {
                outline: "none",
                textAlign: "center",
                color: "#fff",
                border: 0,
                fontWeight: "bold",
                textShadow: v.__input_textShadow + "rgba(0,0,0,0.7)",
              }),
              f["default"].bind(v.__saturation_field, "mousedown", a),
              f["default"].bind(v.__field_knob, "mousedown", a),
              f["default"].bind(v.__hue_field, "mousedown", function (e) {
                b(e),
                  f["default"].bind(window, "mousemove", b),
                  f["default"].bind(window, "mouseup", c);
              }),
              v.__saturation_field.appendChild(w),
              v.__selector.appendChild(v.__field_knob),
              v.__selector.appendChild(v.__saturation_field),
              v.__selector.appendChild(v.__hue_field),
              v.__hue_field.appendChild(v.__hue_knob),
              v.domElement.appendChild(v.__input),
              v.domElement.appendChild(v.__selector),
              v.updateDisplay(),
              v
            );
          }
          return (
            a(t, e),
            (t.prototype.updateDisplay = function () {
              var e = (0, m["default"])(this.getValue());
              if (e !== !1) {
                var t = !1;
                g["default"].each(
                  p["default"].COMPONENTS,
                  function (n) {
                    if (
                      !g["default"].isUndefined(e[n]) &&
                      !g["default"].isUndefined(this.__color.__state[n]) &&
                      e[n] !== this.__color.__state[n]
                    )
                      return (t = !0), {};
                  },
                  this
                ),
                  t && g["default"].extend(this.__color.__state, e);
              }
              g["default"].extend(this.__temp.__state, this.__color.__state),
                (this.__temp.a = 1);
              var n = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0,
                o = 255 - n;
              g["default"].extend(this.__field_knob.style, {
                marginLeft: 100 * this.__color.s - 7 + "px",
                marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                backgroundColor: this.__temp.toHexString(),
                border:
                  this.__field_knob_border +
                  "rgb(" +
                  n +
                  "," +
                  n +
                  "," +
                  n +
                  ")",
              }),
                (this.__hue_knob.style.marginTop =
                  100 * (1 - this.__color.h / 360) + "px"),
                (this.__temp.s = 1),
                (this.__temp.v = 1),
                l(
                  this.__saturation_field,
                  "left",
                  "#fff",
                  this.__temp.toHexString()
                ),
                (this.__input.value = this.__color.toString()),
                g["default"].extend(this.__input.style, {
                  backgroundColor: this.__color.toHexString(),
                  color: "rgb(" + n + "," + n + "," + n + ")",
                  textShadow:
                    this.__input_textShadow +
                    "rgba(" +
                    o +
                    "," +
                    o +
                    "," +
                    o +
                    ",.7)",
                });
            }),
            t
          );
        })(d["default"]),
        y = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
      t["default"] = v;
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t, n) {
        var o = document.createElement("li");
        return (
          t && o.appendChild(t),
          n ? e.__ul.insertBefore(o, n) : e.__ul.appendChild(o),
          e.onResize(),
          o
        );
      }
      function r(e, t) {
        var n = e.__preset_select[e.__preset_select.selectedIndex];
        t ? (n.innerHTML = n.value + "*") : (n.innerHTML = n.value);
      }
      function a(e, t, n) {
        if (
          ((n.__li = t),
          (n.__gui = e),
          U["default"].extend(n, {
            options: function (t) {
              if (arguments.length > 1) {
                var o = n.__li.nextElementSibling;
                return (
                  n.remove(),
                  s(e, n.object, n.property, {
                    before: o,
                    factoryArgs: [U["default"].toArray(arguments)],
                  })
                );
              }
              if (U["default"].isArray(t) || U["default"].isObject(t)) {
                var i = n.__li.nextElementSibling;
                return (
                  n.remove(),
                  s(e, n.object, n.property, { before: i, factoryArgs: [t] })
                );
              }
            },
            name: function (e) {
              return (
                (n.__li.firstElementChild.firstElementChild.innerHTML = e), n
              );
            },
            listen: function () {
              return n.__gui.listen(n), n;
            },
            remove: function () {
              return n.__gui.remove(n), n;
            },
          }),
          n instanceof B["default"])
        )
          !(function () {
            var e = new N["default"](n.object, n.property, {
              min: n.__min,
              max: n.__max,
              step: n.__step,
            });
            U["default"].each(
              ["updateDisplay", "onChange", "onFinishChange", "step"],
              function (t) {
                var o = n[t],
                  i = e[t];
                n[t] = e[t] = function () {
                  var t = Array.prototype.slice.call(arguments);
                  return i.apply(e, t), o.apply(n, t);
                };
              }
            ),
              z["default"].addClass(t, "has-slider"),
              n.domElement.insertBefore(
                e.domElement,
                n.domElement.firstElementChild
              );
          })();
        else if (n instanceof N["default"]) {
          var o = function (t) {
            if (
              U["default"].isNumber(n.__min) &&
              U["default"].isNumber(n.__max)
            ) {
              var o = n.__li.firstElementChild.firstElementChild.innerHTML,
                i = n.__gui.__listening.indexOf(n) > -1;
              n.remove();
              var r = s(e, n.object, n.property, {
                before: n.__li.nextElementSibling,
                factoryArgs: [n.__min, n.__max, n.__step],
              });
              return r.name(o), i && r.listen(), r;
            }
            return t;
          };
          (n.min = U["default"].compose(o, n.min)),
            (n.max = U["default"].compose(o, n.max));
        } else
          n instanceof O["default"]
            ? (z["default"].bind(t, "click", function () {
                z["default"].fakeEvent(n.__checkbox, "click");
              }),
              z["default"].bind(n.__checkbox, "click", function (e) {
                e.stopPropagation();
              }))
            : n instanceof R["default"]
            ? (z["default"].bind(t, "click", function () {
                z["default"].fakeEvent(n.__button, "click");
              }),
              z["default"].bind(t, "mouseover", function () {
                z["default"].addClass(n.__button, "hover");
              }),
              z["default"].bind(t, "mouseout", function () {
                z["default"].removeClass(n.__button, "hover");
              }))
            : n instanceof j["default"] &&
              (z["default"].addClass(t, "color"),
              (n.updateDisplay = U["default"].compose(function (e) {
                return (t.style.borderLeftColor = n.__color.toString()), e;
              }, n.updateDisplay)),
              n.updateDisplay());
        n.setValue = U["default"].compose(function (t) {
          return (
            e.getRoot().__preset_select && n.isModified() && r(e.getRoot(), !0),
            t
          );
        }, n.setValue);
      }
      function l(e, t) {
        var n = e.getRoot(),
          o = n.__rememberedObjects.indexOf(t.object);
        if (o !== -1) {
          var i = n.__rememberedObjectIndecesToControllers[o];
          if (
            (void 0 === i &&
              ((i = {}), (n.__rememberedObjectIndecesToControllers[o] = i)),
            (i[t.property] = t),
            n.load && n.load.remembered)
          ) {
            var r = n.load.remembered,
              a = void 0;
            if (r[e.preset]) a = r[e.preset];
            else {
              if (!r[Q]) return;
              a = r[Q];
            }
            if (a[o] && void 0 !== a[o][t.property]) {
              var l = a[o][t.property];
              (t.initialValue = l), t.setValue(l);
            }
          }
        }
      }
      function s(e, t, n, o) {
        if (void 0 === t[n])
          throw new Error('Object "' + t + '" has no property "' + n + '"');
        var r = void 0;
        if (o.color) r = new j["default"](t, n);
        else {
          var s = [t, n].concat(o.factoryArgs);
          r = C["default"].apply(e, s);
        }
        o.before instanceof S["default"] && (o.before = o.before.__li),
          l(e, r),
          z["default"].addClass(r.domElement, "c");
        var u = document.createElement("span");
        z["default"].addClass(u, "property-name"), (u.innerHTML = r.property);
        var d = document.createElement("div");
        d.appendChild(u), d.appendChild(r.domElement);
        var c = i(e, d, o.before);
        return (
          z["default"].addClass(c, oe.CLASS_CONTROLLER_ROW),
          r instanceof j["default"]
            ? z["default"].addClass(c, "color")
            : z["default"].addClass(c, g(r.getValue())),
          a(e, c, r),
          e.__controllers.push(r),
          r
        );
      }
      function u(e, t) {
        return document.location.href + "." + t;
      }
      function d(e, t, n) {
        var o = document.createElement("option");
        (o.innerHTML = t),
          (o.value = t),
          e.__preset_select.appendChild(o),
          n && (e.__preset_select.selectedIndex = e.__preset_select.length - 1);
      }
      function c(e, t) {
        t.style.display = e.useLocalStorage ? "block" : "none";
      }
      function f(e) {
        var t = (e.__save_row = document.createElement("li"));
        z["default"].addClass(e.domElement, "has-save"),
          e.__ul.insertBefore(t, e.__ul.firstChild),
          z["default"].addClass(t, "save-row");
        var n = document.createElement("span");
        (n.innerHTML = "&nbsp;"), z["default"].addClass(n, "button gears");
        var o = document.createElement("span");
        (o.innerHTML = "Save"),
          z["default"].addClass(o, "button"),
          z["default"].addClass(o, "save");
        var i = document.createElement("span");
        (i.innerHTML = "New"),
          z["default"].addClass(i, "button"),
          z["default"].addClass(i, "save-as");
        var r = document.createElement("span");
        (r.innerHTML = "Revert"),
          z["default"].addClass(r, "button"),
          z["default"].addClass(r, "revert");
        var a = (e.__preset_select = document.createElement("select"));
        e.load && e.load.remembered
          ? U["default"].each(e.load.remembered, function (t, n) {
              d(e, n, n === e.preset);
            })
          : d(e, Q, !1),
          z["default"].bind(a, "change", function () {
            for (var t = 0; t < e.__preset_select.length; t++)
              e.__preset_select[t].innerHTML = e.__preset_select[t].value;
            e.preset = this.value;
          }),
          t.appendChild(a),
          t.appendChild(n),
          t.appendChild(o),
          t.appendChild(i),
          t.appendChild(r),
          q &&
            !(function () {
              var t = document.getElementById("dg-local-explain"),
                n = document.getElementById("dg-local-storage"),
                o = document.getElementById("dg-save-locally");
              (o.style.display = "block"),
                "true" === localStorage.getItem(u(e, "isLocal")) &&
                  n.setAttribute("checked", "checked"),
                c(e, t),
                z["default"].bind(n, "change", function () {
                  (e.useLocalStorage = !e.useLocalStorage), c(e, t);
                });
            })();
        var l = document.getElementById("dg-new-constructor");
        z["default"].bind(l, "keydown", function (e) {
          !e.metaKey || (67 !== e.which && 67 !== e.keyCode) || Z.hide();
        }),
          z["default"].bind(n, "click", function () {
            (l.innerHTML = JSON.stringify(e.getSaveObject(), void 0, 2)),
              Z.show(),
              l.focus(),
              l.select();
          }),
          z["default"].bind(o, "click", function () {
            e.save();
          }),
          z["default"].bind(i, "click", function () {
            var t = prompt("Enter a new preset name.");
            t && e.saveAs(t);
          }),
          z["default"].bind(r, "click", function () {
            e.revert();
          });
      }
      function _(e) {
        function t(t) {
          return (
            t.preventDefault(),
            (e.width += i - t.clientX),
            e.onResize(),
            (i = t.clientX),
            !1
          );
        }
        function n() {
          z["default"].removeClass(e.__closeButton, oe.CLASS_DRAG),
            z["default"].unbind(window, "mousemove", t),
            z["default"].unbind(window, "mouseup", n);
        }
        function o(o) {
          return (
            o.preventDefault(),
            (i = o.clientX),
            z["default"].addClass(e.__closeButton, oe.CLASS_DRAG),
            z["default"].bind(window, "mousemove", t),
            z["default"].bind(window, "mouseup", n),
            !1
          );
        }
        var i = void 0;
        (e.__resize_handle = document.createElement("div")),
          U["default"].extend(e.__resize_handle.style, {
            width: "6px",
            marginLeft: "-3px",
            height: "200px",
            cursor: "ew-resize",
            position: "absolute",
          }),
          z["default"].bind(e.__resize_handle, "mousedown", o),
          z["default"].bind(e.__closeButton, "mousedown", o),
          e.domElement.insertBefore(
            e.__resize_handle,
            e.domElement.firstElementChild
          );
      }
      function p(e, t) {
        (e.domElement.style.width = t + "px"),
          e.__save_row && e.autoPlace && (e.__save_row.style.width = t + "px"),
          e.__closeButton && (e.__closeButton.style.width = t + "px");
      }
      function h(e, t) {
        var n = {};
        return (
          U["default"].each(e.__rememberedObjects, function (o, i) {
            var r = {},
              a = e.__rememberedObjectIndecesToControllers[i];
            U["default"].each(a, function (e, n) {
              r[n] = t ? e.initialValue : e.getValue();
            }),
              (n[i] = r);
          }),
          n
        );
      }
      function m(e) {
        for (var t = 0; t < e.__preset_select.length; t++)
          e.__preset_select[t].value === e.preset &&
            (e.__preset_select.selectedIndex = t);
      }
      function b(e) {
        0 !== e.length &&
          D["default"].call(window, function () {
            b(e);
          }),
          U["default"].each(e, function (e) {
            e.updateDisplay();
          });
      }
      var g =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol
                  ? "symbol"
                  : typeof e;
              },
        v = n(18),
        y = o(v),
        w = n(19),
        x = o(w),
        E = n(20),
        C = o(E),
        A = n(7),
        S = o(A),
        k = n(8),
        O = o(k),
        T = n(15),
        R = o(T),
        L = n(13),
        N = o(L),
        M = n(14),
        B = o(M),
        H = n(16),
        j = o(H),
        P = n(21),
        D = o(P),
        V = n(22),
        F = o(V),
        I = n(9),
        z = o(I),
        G = n(5),
        U = o(G),
        X = n(23),
        K = o(X);
      y["default"].inject(K["default"]);
      var Y = "dg",
        J = 72,
        W = 20,
        Q = "Default",
        q = (function () {
          try {
            return "localStorage" in window && null !== window.localStorage;
          } catch (e) {
            return !1;
          }
        })(),
        Z = void 0,
        $ = !0,
        ee = void 0,
        te = !1,
        ne = [],
        oe = function ie(e) {
          function t() {
            var e = n.getRoot();
            (e.width += 1),
              U["default"].defer(function () {
                e.width -= 1;
              });
          }
          var n = this,
            o = e || {};
          (this.domElement = document.createElement("div")),
            (this.__ul = document.createElement("ul")),
            this.domElement.appendChild(this.__ul),
            z["default"].addClass(this.domElement, Y),
            (this.__folders = {}),
            (this.__controllers = []),
            (this.__rememberedObjects = []),
            (this.__rememberedObjectIndecesToControllers = []),
            (this.__listening = []),
            (o = U["default"].defaults(o, {
              autoPlace: !0,
              width: ie.DEFAULT_WIDTH,
            })),
            (o = U["default"].defaults(o, {
              resizable: o.autoPlace,
              hideable: o.autoPlace,
            })),
            U["default"].isUndefined(o.load)
              ? (o.load = { preset: Q })
              : o.preset && (o.load.preset = o.preset),
            U["default"].isUndefined(o.parent) && o.hideable && ne.push(this),
            (o.resizable = U["default"].isUndefined(o.parent) && o.resizable),
            o.autoPlace &&
              U["default"].isUndefined(o.scrollable) &&
              (o.scrollable = !0);
          var r = q && "true" === localStorage.getItem(u(this, "isLocal")),
            a = void 0;
          if (
            (Object.defineProperties(this, {
              parent: {
                get: function () {
                  return o.parent;
                },
              },
              scrollable: {
                get: function () {
                  return o.scrollable;
                },
              },
              autoPlace: {
                get: function () {
                  return o.autoPlace;
                },
              },
              preset: {
                get: function () {
                  return n.parent ? n.getRoot().preset : o.load.preset;
                },
                set: function (e) {
                  n.parent ? (n.getRoot().preset = e) : (o.load.preset = e),
                    m(this),
                    n.revert();
                },
              },
              width: {
                get: function () {
                  return o.width;
                },
                set: function (e) {
                  (o.width = e), p(n, e);
                },
              },
              name: {
                get: function () {
                  return o.name;
                },
                set: function (e) {
                  (o.name = e),
                    titleRowName && (titleRowName.innerHTML = o.name);
                },
              },
              closed: {
                get: function () {
                  return o.closed;
                },
                set: function (e) {
                  (o.closed = e),
                    o.closed
                      ? z["default"].addClass(n.__ul, ie.CLASS_CLOSED)
                      : z["default"].removeClass(n.__ul, ie.CLASS_CLOSED),
                    this.onResize(),
                    n.__closeButton &&
                      (n.__closeButton.innerHTML = e
                        ? ie.TEXT_OPEN
                        : ie.TEXT_CLOSED);
                },
              },
              load: {
                get: function () {
                  return o.load;
                },
              },
              useLocalStorage: {
                get: function () {
                  return r;
                },
                set: function (e) {
                  q &&
                    ((r = e),
                    e
                      ? z["default"].bind(window, "unload", a)
                      : z["default"].unbind(window, "unload", a),
                    localStorage.setItem(u(n, "isLocal"), e));
                },
              },
            }),
            U["default"].isUndefined(o.parent))
          ) {
            if (
              ((o.closed = !1),
              z["default"].addClass(this.domElement, ie.CLASS_MAIN),
              z["default"].makeSelectable(this.domElement, !1),
              q && r)
            ) {
              n.useLocalStorage = !0;
              var l = localStorage.getItem(u(this, "gui"));
              l && (o.load = JSON.parse(l));
            }
            (this.__closeButton = document.createElement("div")),
              (this.__closeButton.innerHTML = ie.TEXT_CLOSED),
              z["default"].addClass(this.__closeButton, ie.CLASS_CLOSE_BUTTON),
              this.domElement.appendChild(this.__closeButton),
              z["default"].bind(this.__closeButton, "click", function () {
                n.closed = !n.closed;
              });
          } else {
            void 0 === o.closed && (o.closed = !0);
            var s = document.createTextNode(o.name);
            z["default"].addClass(s, "controller-name");
            var d = i(n, s),
              c = function (e) {
                return e.preventDefault(), (n.closed = !n.closed), !1;
              };
            z["default"].addClass(this.__ul, ie.CLASS_CLOSED),
              z["default"].addClass(d, "title"),
              z["default"].bind(d, "click", c),
              o.closed || (this.closed = !1);
          }
          o.autoPlace &&
            (U["default"].isUndefined(o.parent) &&
              ($ &&
                ((ee = document.createElement("div")),
                z["default"].addClass(ee, Y),
                z["default"].addClass(ee, ie.CLASS_AUTO_PLACE_CONTAINER),
                document.body.appendChild(ee),
                ($ = !1)),
              ee.appendChild(this.domElement),
              z["default"].addClass(this.domElement, ie.CLASS_AUTO_PLACE)),
            this.parent || p(n, o.width)),
            (this.__resizeHandler = function () {
              n.onResizeDebounced();
            }),
            z["default"].bind(window, "resize", this.__resizeHandler),
            z["default"].bind(
              this.__ul,
              "webkitTransitionEnd",
              this.__resizeHandler
            ),
            z["default"].bind(this.__ul, "transitionend", this.__resizeHandler),
            z["default"].bind(
              this.__ul,
              "oTransitionEnd",
              this.__resizeHandler
            ),
            this.onResize(),
            o.resizable && _(this),
            (a = function () {
              q &&
                "true" === localStorage.getItem(u(n, "isLocal")) &&
                localStorage.setItem(
                  u(n, "gui"),
                  JSON.stringify(n.getSaveObject())
                );
            }),
            (this.saveToLocalStorageIfPossible = a),
            o.parent || t();
        };
      (oe.toggleHide = function () {
        (te = !te),
          U["default"].each(ne, function (e) {
            e.domElement.style.display = te ? "none" : "";
          });
      }),
        (oe.CLASS_AUTO_PLACE = "a"),
        (oe.CLASS_AUTO_PLACE_CONTAINER = "ac"),
        (oe.CLASS_MAIN = "main"),
        (oe.CLASS_CONTROLLER_ROW = "cr"),
        (oe.CLASS_TOO_TALL = "taller-than-window"),
        (oe.CLASS_CLOSED = "closed"),
        (oe.CLASS_CLOSE_BUTTON = "close-button"),
        (oe.CLASS_DRAG = "drag"),
        (oe.DEFAULT_WIDTH = 245),
        (oe.TEXT_CLOSED = "Close settings"),
        (oe.TEXT_OPEN = "Open settings"),
        (oe._keydownHandler = function (e) {
          "text" === document.activeElement.type ||
            (e.which !== J && e.keyCode !== J) ||
            oe.toggleHide();
        }),
        z["default"].bind(window, "keydown", oe._keydownHandler, !1),
        U["default"].extend(oe.prototype, {
          add: function (e, t) {
            return s(this, e, t, {
              factoryArgs: Array.prototype.slice.call(arguments, 2),
            });
          },
          addColor: function (e, t) {
            return s(this, e, t, { color: !0 });
          },
          remove: function (e) {
            this.__ul.removeChild(e.__li),
              this.__controllers.splice(this.__controllers.indexOf(e), 1);
            var t = this;
            U["default"].defer(function () {
              t.onResize();
            });
          },
          destroy: function () {
            this.autoPlace && ee.removeChild(this.domElement),
              z["default"].unbind(window, "keydown", oe._keydownHandler, !1),
              z["default"].unbind(window, "resize", this.__resizeHandler),
              this.saveToLocalStorageIfPossible &&
                z["default"].unbind(
                  window,
                  "unload",
                  this.saveToLocalStorageIfPossible
                );
          },
          addFolder: function (e) {
            if (void 0 !== this.__folders[e])
              throw new Error(
                'You already have a folder in this GUI by the name "' + e + '"'
              );
            var t = { name: e, parent: this };
            (t.autoPlace = this.autoPlace),
              this.load &&
                this.load.folders &&
                this.load.folders[e] &&
                ((t.closed = this.load.folders[e].closed),
                (t.load = this.load.folders[e]));
            var n = new oe(t);
            this.__folders[e] = n;
            var o = i(this, n.domElement);
            return z["default"].addClass(o, "folder"), n;
          },
          open: function () {
            this.closed = !1;
          },
          close: function () {
            this.closed = !0;
          },
          onResize: function () {
            var e = this.getRoot();
            if (e.scrollable) {
              var t = z["default"].getOffset(e.__ul).top,
                n = 0;
              U["default"].each(e.__ul.childNodes, function (t) {
                (e.autoPlace && t === e.__save_row) ||
                  (n += z["default"].getHeight(t));
              }),
                window.innerHeight - t - W < n
                  ? (z["default"].addClass(e.domElement, oe.CLASS_TOO_TALL),
                    (e.__ul.style.height = window.innerHeight - t - W + "px"))
                  : (z["default"].removeClass(e.domElement, oe.CLASS_TOO_TALL),
                    (e.__ul.style.height = "auto"));
            }
            e.__resize_handle &&
              U["default"].defer(function () {
                e.__resize_handle.style.height = e.__ul.offsetHeight + "px";
              }),
              e.__closeButton && (e.__closeButton.style.width = e.width + "px");
          },
          onResizeDebounced: U["default"].debounce(function () {
            this.onResize();
          }, 200),
          remember: function () {
            if (
              (U["default"].isUndefined(Z) &&
                ((Z = new F["default"]()),
                (Z.domElement.innerHTML = x["default"])),
              this.parent)
            )
              throw new Error("You can only call remember on a top level GUI.");
            var e = this;
            U["default"].each(
              Array.prototype.slice.call(arguments),
              function (t) {
                0 === e.__rememberedObjects.length && f(e),
                  e.__rememberedObjects.indexOf(t) === -1 &&
                    e.__rememberedObjects.push(t);
              }
            ),
              this.autoPlace && p(this, this.width);
          },
          getRoot: function () {
            for (var e = this; e.parent; ) e = e.parent;
            return e;
          },
          getSaveObject: function () {
            var e = this.load;
            return (
              (e.closed = this.closed),
              this.__rememberedObjects.length > 0 &&
                ((e.preset = this.preset),
                e.remembered || (e.remembered = {}),
                (e.remembered[this.preset] = h(this))),
              (e.folders = {}),
              U["default"].each(this.__folders, function (t, n) {
                e.folders[n] = t.getSaveObject();
              }),
              e
            );
          },
          save: function () {
            this.load.remembered || (this.load.remembered = {}),
              (this.load.remembered[this.preset] = h(this)),
              r(this, !1),
              this.saveToLocalStorageIfPossible();
          },
          saveAs: function (e) {
            this.load.remembered ||
              ((this.load.remembered = {}),
              (this.load.remembered[Q] = h(this, !0))),
              (this.load.remembered[e] = h(this)),
              (this.preset = e),
              d(this, e, !0),
              this.saveToLocalStorageIfPossible();
          },
          revert: function (e) {
            U["default"].each(
              this.__controllers,
              function (t) {
                this.getRoot().load.remembered
                  ? l(e || this.getRoot(), t)
                  : t.setValue(t.initialValue),
                  t.__onFinishChange &&
                    t.__onFinishChange.call(t, t.getValue());
              },
              this
            ),
              U["default"].each(this.__folders, function (e) {
                e.revert(e);
              }),
              e || r(this.getRoot(), !1);
          },
          listen: function (e) {
            var t = 0 === this.__listening.length;
            this.__listening.push(e), t && b(this.__listening);
          },
          updateDisplay: function () {
            U["default"].each(this.__controllers, function (e) {
              e.updateDisplay();
            }),
              U["default"].each(this.__folders, function (e) {
                e.updateDisplay();
              });
          },
        }),
        (e.exports = oe);
    },
    function (e, t) {
      "use strict";
      e.exports = {
        load: function (e, t) {
          var n = t || document,
            o = n.createElement("link");
          (o.type = "text/css"),
            (o.rel = "stylesheet"),
            (o.href = e),
            n.getElementsByTagName("head")[0].appendChild(o);
        },
        inject: function (e, t) {
          var n = t || document,
            o = document.createElement("style");
          (o.type = "text/css"), (o.innerHTML = e);
          var i = n.getElementsByTagName("head")[0];
          try {
            i.appendChild(o);
          } catch (r) {}
        },
      };
    },
    function (e, t) {
      e.exports =
        "<div id=dg-save class=\"dg dialogue\"> Here's the new load parameter for your <code>GUI</code>'s constructor: <textarea id=dg-new-constructor></textarea> <div id=dg-save-locally> <input id=dg-local-storage type=checkbox /> Automatically save values to <code>localStorage</code> on exit. <div id=dg-local-explain>The values saved to <code>localStorage</code> will override those passed to <code>dat.GUI</code>'s constructor. This makes it easier to work incrementally, but <code>localStorage</code> is fragile, and your friends may not see the same values you do. </div> </div> </div>";
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.__esModule = !0;
      var i = n(10),
        r = o(i),
        a = n(13),
        l = o(a),
        s = n(14),
        u = o(s),
        d = n(11),
        c = o(d),
        f = n(15),
        _ = o(f),
        p = n(8),
        h = o(p),
        m = n(5),
        b = o(m),
        g = function (e, t) {
          var n = e[t];
          return b["default"].isArray(arguments[2]) ||
            b["default"].isObject(arguments[2])
            ? new r["default"](e, t, arguments[2])
            : b["default"].isNumber(n)
            ? b["default"].isNumber(arguments[2]) &&
              b["default"].isNumber(arguments[3])
              ? b["default"].isNumber(arguments[4])
                ? new u["default"](
                    e,
                    t,
                    arguments[2],
                    arguments[3],
                    arguments[4]
                  )
                : new u["default"](e, t, arguments[2], arguments[3])
              : b["default"].isNumber(arguments[4])
              ? new l["default"](e, t, {
                  min: arguments[2],
                  max: arguments[3],
                  step: arguments[4],
                })
              : new l["default"](e, t, { min: arguments[2], max: arguments[3] })
            : b["default"].isString(n)
            ? new c["default"](e, t)
            : b["default"].isFunction(n)
            ? new _["default"](e, t, "")
            : b["default"].isBoolean(n)
            ? new h["default"](e, t)
            : null;
        };
      t["default"] = g;
    },
    function (e, t) {
      "use strict";
      function n(e) {
        setTimeout(e, 1e3 / 60);
      }
      (t.__esModule = !0),
        (t["default"] =
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          n);
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      t.__esModule = !0;
      var r = n(9),
        a = o(r),
        l = n(5),
        s = o(l),
        u = (function () {
          function e() {
            i(this, e),
              (this.backgroundElement = document.createElement("div")),
              s["default"].extend(this.backgroundElement.style, {
                backgroundColor: "rgba(0,0,0,0.8)",
                top: 0,
                left: 0,
                display: "none",
                zIndex: "1000",
                opacity: 0,
                WebkitTransition: "opacity 0.2s linear",
                transition: "opacity 0.2s linear",
              }),
              a["default"].makeFullscreen(this.backgroundElement),
              (this.backgroundElement.style.position = "fixed"),
              (this.domElement = document.createElement("div")),
              s["default"].extend(this.domElement.style, {
                position: "fixed",
                display: "none",
                zIndex: "1001",
                opacity: 0,
                WebkitTransition:
                  "-webkit-transform 0.2s ease-out, opacity 0.2s linear",
                transition: "transform 0.2s ease-out, opacity 0.2s linear",
              }),
              document.body.appendChild(this.backgroundElement),
              document.body.appendChild(this.domElement);
            var t = this;
            a["default"].bind(this.backgroundElement, "click", function () {
              t.hide();
            });
          }
          return (
            (e.prototype.show = function () {
              var e = this;
              (this.backgroundElement.style.display = "block"),
                (this.domElement.style.display = "block"),
                (this.domElement.style.opacity = 0),
                (this.domElement.style.webkitTransform = "scale(1.1)"),
                this.layout(),
                s["default"].defer(function () {
                  (e.backgroundElement.style.opacity = 1),
                    (e.domElement.style.opacity = 1),
                    (e.domElement.style.webkitTransform = "scale(1)");
                });
            }),
            (e.prototype.hide = function t() {
              var e = this,
                t = function n() {
                  (e.domElement.style.display = "none"),
                    (e.backgroundElement.style.display = "none"),
                    a["default"].unbind(e.domElement, "webkitTransitionEnd", n),
                    a["default"].unbind(e.domElement, "transitionend", n),
                    a["default"].unbind(e.domElement, "oTransitionEnd", n);
                };
              a["default"].bind(this.domElement, "webkitTransitionEnd", t),
                a["default"].bind(this.domElement, "transitionend", t),
                a["default"].bind(this.domElement, "oTransitionEnd", t),
                (this.backgroundElement.style.opacity = 0),
                (this.domElement.style.opacity = 0),
                (this.domElement.style.webkitTransform = "scale(1.1)");
            }),
            (e.prototype.layout = function () {
              (this.domElement.style.left =
                window.innerWidth / 2 -
                a["default"].getWidth(this.domElement) / 2 +
                "px"),
                (this.domElement.style.top =
                  window.innerHeight / 2 -
                  a["default"].getHeight(this.domElement) / 2 +
                  "px");
            }),
            e
          );
        })();
      t["default"] = u;
    },
    function (e, t, n) {
      (t = e.exports = n(24)()),
        t.push([
          e.id,
          ".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1!important}.dg.main .close-button.drag,.dg.main:hover .close-button{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;transition:opacity .1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save>ul{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height .1s ease-out;transition:height .1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid transparent}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.boolean,.dg .cr.boolean *,.dg .cr.function,.dg .cr.function *,.dg .cr.function .property-name{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco,monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px Lucida Grande,sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid hsla(0,0%,100%,.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.boolean:hover,.dg .cr.function:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}",
          "",
        ]);
    },
    function (e, t) {
      e.exports = function () {
        var e = [];
        return (
          (e.toString = function () {
            for (var e = [], t = 0; t < this.length; t++) {
              var n = this[t];
              n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1]);
            }
            return e.join("");
          }),
          (e.i = function (t, n) {
            "string" == typeof t && (t = [[null, t, ""]]);
            for (var o = {}, i = 0; i < this.length; i++) {
              var r = this[i][0];
              "number" == typeof r && (o[r] = !0);
            }
            for (i = 0; i < t.length; i++) {
              var a = t[i];
              ("number" == typeof a[0] && o[a[0]]) ||
                (n && !a[2]
                  ? (a[2] = n)
                  : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                e.push(a));
            }
          }),
          e
        );
      };
    },
  ]);
});

// MissionsLocation.js
/* jshint esversion: 6 */

var MissionsLocation = pc.createScript("missionsLocation");

MissionsLocation.attributes.add("smallPanelHeight", {
  type: "number",
  default: 130,
});

MissionsLocation.attributes.add("bigPanelHeight", {
  type: "number",
  default: 250,
});

MissionsLocation.attributes.add("smallPanelStep", {
  type: "number",
  default: 130,
});

MissionsLocation.attributes.add("bigPanelStep", {
  type: "number",
  default: 250,
});

MissionsLocation.attributes.add("headerStep", {
  type: "number",
  default: 120,
});

MissionsLocation.attributes.add("chapterStep", {
  type: "number",
  default: 20,
});

MissionsLocation.attributes.add("panelSmallTemplate", {
  type: "asset",
  assetType: "template",
});

MissionsLocation.attributes.add("panelBigTemplate", {
  type: "asset",
  assetType: "template",
});

MissionsLocation.attributes.add("chapterLineTemplate", {
  type: "asset",
  assetType: "template",
});

MissionsLocation.attributes.add("chapterTemplate", {
  type: "asset",
  assetType: "template",
});

MissionsLocation.attributes.add("missionsContainerTemplate", {
  type: "asset",
  assetType: "template",
});

MissionsLocation.prototype.initialize = function () {
  this.missionsModel = this.app.assets.find("MissionsModel", "json").resource;
  this.missionsList = [].concat.apply(
    [],
    this.missionsModel.chapters.map((chapter) => chapter.missions)
  );

  this.assignEntityMethods();

  this.missionsLocation = this.entity;

  this.chaptersContainer =
    this.missionsLocation.findByName("ChaptersContainer");
  this.scrollBar = this.missionsLocation.findByName("VerticalScrollbar");
  this.buttonClose = this.entity.findByName("CloseButton");

  this.panels = [];

  this.createMissionsPanels();
  this.scrollToMission(MissionsManager.getInstance().getCurrentMissionIndex());
  this.setScrollbarVisibilityDependingOnPlatform();

  this.app.on(EventTypes.MISSION_PANEL_SELECTED, this.onMissionSelected, this);
  this.app.on(EventTypes.LANGUAGE_CHANGED, this.updateMissionsTexts, this);

  BasicButton.assignAction(this.buttonClose, this.closeClicked, this);
};

MissionsLocation.prototype.postInitialize = function () {
  /* select initial mission */
  this.onMissionSelected(
    parseInt(
      LocalStorageController.getSavedValue(Constants.Storage.CURRENT_MISSION)
    ) || 1
  );
};

MissionsLocation.prototype.assignEntityMethods = function () {
  const scriptContext = this;

  this.entity.show = function () {
    this.enabled = true;
    // scriptContext.scrollToMission(MissionsManager.getInstance().getCurrentMissionIndex());
    scriptContext.onMissionSelected(
      MissionsManager.getInstance().getCurrentMissionIndex()
    );
    scriptContext.updateMissionsStatus();
    setTimeout(() => scriptContext.claimRewardFromReachedMissions(), 500);
  }.bind(this.entity);

  this.entity.hide = function () {
    this.enabled = false;
  }.bind(this.entity);
};

MissionsLocation.prototype.closeClicked = function () {
  this.entity.hide();
};

MissionsLocation.prototype.update = function (dt) {
  this.updatePanelsVisibility();
};

MissionsLocation.prototype.postUpdate = function (dt) {
  const chaptersContainerPosition = this.chaptersContainer.getLocalPosition();
  chaptersContainerPosition.x = 0;
  this.chaptersContainer.setLocalPosition(chaptersContainerPosition);
};

MissionsLocation.prototype.scrollToMission = function (missionIndex) {
  //this.scrollBar.scrollbar.value = 1 - pc.math.clamp((missionIndex - 1) / (Math.max(0, MissionsManager.getInstance().getTotalMissionsAmount() - 3)), 0, 1);
  if (missionIndex <= 4) {
    this.scrollBar.scrollbar.value = 1;
  } else if (
    missionIndex >=
    MissionsManager.getInstance().getTotalMissionsAmount() - 4
  ) {
    this.scrollBar.scrollbar.value = 0;
  } else {
    this.scrollBar.scrollbar.value =
      1 -
      pc.math.clamp(
        (missionIndex - 1) /
          Math.max(
            0,
            MissionsManager.getInstance().getTotalMissionsAmount() - 4
          ),
        0,
        1
      );
  }
};

MissionsLocation.prototype.createMissionsPanels = function () {
  let chapterPositionY = 0;

  let timestamp = performance.now();

  this.missionsModel.chapters.forEach((chapter, chapterIndex) => {
    let panelPositionY = this.headerStep;

    const nextChapter = this.chapterTemplate.resource.instantiate(); //this.chapter.clone();
    nextChapter.enabled = true;
    nextChapter.findByName("ChapterTitle").element.text =
      LocalizationManager.getInstance().getLocalizedText(
        "Chapter",
        chapter.chapter
      );
    nextChapter.chapterIndex = chapter.chapter;
    nextChapter.reparent(this.chaptersContainer);

    const nextChapterLine = this.chapterLineTemplate.resource.instantiate(); //this.chapterLine.clone();
    nextChapterLine.enabled = true;
    nextChapterLine.reparent(nextChapter);
    nextChapterLine.setLocalPosition(-260, panelPositionY - 10, 0);

    const nextChapterPosition = nextChapter.getLocalPosition();
    nextChapterPosition.y += chapterPositionY;
    nextChapter.setLocalPosition(nextChapterPosition);

    chapterPositionY += this.headerStep + this.chapterStep;

    const nextMissionsContainer =
      this.missionsContainerTemplate.resource.instantiate(); //this.missionsContainer.clone();
    nextMissionsContainer.enabled = true;
    nextMissionsContainer.reparent(nextChapter);

    chapter.missions.forEach((mission, missionIndex) => {
      const panelHeight =
        mission.type === "theme" ? this.bigPanelHeight : this.smallPanelHeight; //nextMissionPanel.element.height;
      const panelStep =
        mission.type === "theme" ? this.bigPanelStep : this.smallPanelStep;
      const currentPanelY = panelPositionY + panelHeight / 2 + panelStep / 2;
      const panelInternalPositionY =
        nextChapter.getLocalPosition().y + currentPanelY;

      setTimeout(() => {
        const nextMissionPanel =
          mission.type === "theme"
            ? this.panelBigTemplate.resource.instantiate()
            : this.panelSmallTemplate.resource.instantiate();
        nextMissionPanel.reparent(this.app.root);
        nextMissionPanel.enabled = true;

        this.panels.push(nextMissionPanel);
        nextMissionPanel.missionIndex = mission.index;
        nextMissionPanel.positionY = panelInternalPositionY; //nextChapter.getLocalPosition().y + currentPanelY;//nextMissionPanel.getLocalPosition().y;

        nextMissionPanel.buildComponents(mission);

        nextMissionPanel.reparent(nextMissionsContainer);
        nextMissionPanel.setLocalPosition(0, currentPanelY, 0);

        if (
          this.entity.enabled &&
          chapterIndex === this.missionsModel.chapters.length - 1 &&
          missionIndex === chapter.missions.length - 1
        ) {
          //last mission panel created
          setTimeout(() => {
            this.onMissionSelected(
              MissionsManager.getInstance().getCurrentMissionIndex()
            );
          }, 0);
        }
      }, 500 + 100 * chapterIndex + 10 * missionIndex);

      panelPositionY += panelHeight + panelStep;
      chapterPositionY += panelHeight + panelStep;
      nextChapterLine.element.height = panelPositionY - this.chapterStep * 2;
    });

    this.chaptersContainer.element.height = chapterPositionY;
  });
};

MissionsLocation.prototype.setScrollbarVisibilityDependingOnPlatform =
  function () {
    const scrollbarAnchor = this.scrollBar.element.anchor;
    scrollbarAnchor.x = scrollbarAnchor.z = pc.platform.desktop ? 1 : 0;
    this.scrollBar.element.anchor = scrollbarAnchor;
  };

MissionsLocation.prototype.updatePanelsVisibility = function () {
  const deviceHeight = Math.max(
    1280,
    (this.app.graphicsDevice.height / this.app.graphicsDevice.width) * 720
  ); //1280;
  const containerHeight = this.chaptersContainer.element.height;
  const containerY = this.chaptersContainer.getLocalPosition().y;
  const topBarHeight = 70;

  this.panels.forEach((panel) => {
    if (
      panel.positionY + containerY > containerHeight + topBarHeight ||
      panel.positionY + containerY < containerHeight - deviceHeight /*- 300*/
    ) {
      panel.enabled = false;
    } else {
      panel.enabled = true;
    }
  });
};

MissionsLocation.prototype.claimRewardFromReachedMissions = function () {
  const rewardAmount = MissionsManager.getInstance()
    .getMissionStates()
    .reduce((sum, curr) => {
      let res = sum;
      if (curr.missionLevel > 0 && !curr.rewardClaimed) {
        res += MissionsManager.getInstance().getMissionData(
          curr.missionIndex
        ).rewardAmount;
      }
      return res;
    }, 0);

  if (rewardAmount > 0) {
    MissionsManager.getInstance()
      .getMissionStates()
      .forEach((missionState) =>
        missionState.missionLevel > 0 && !missionState.rewardClaimed
          ? (missionState.rewardClaimed = true)
          : null
      );
    this.app.fire(EventTypes.UI.SET_COLLLECT_REWARD_POPUP_PARAMS, rewardAmount);
    this.app.fire(
      EventTypes.SHOW_UI_WINDOW,
      Constants.UI.COLLECT_REWARD_POPUP,
      false
    );
  }
};

MissionsLocation.prototype.onMissionSelected = function (
  missionIndex,
  manually
) {
  const missionData = this.missionsList.find(
    (missionData) => missionData.index === missionIndex
  );
  const hasReward = missionData.rewardIcon !== "none";
  const currentMissionUnlocked =
    missionIndex <= MissionsManager.getInstance().getMaxUnlockedMissionIndex();

  if (currentMissionUnlocked) {
    this.panels.forEach((panel) =>
      panel.setSelection(panel.missionIndex === missionIndex)
    );
    this.updateMissionsStatus();
    this.app.fire(EventTypes.SET_CURRENT_MISSION_INDEX, missionIndex);
    this.selectedMissionIndex = missionIndex;

    if (manually) {
      setTimeout(() => this.claimRewardFromReachedMissions(), 100);
    } else {
      this.scrollToMission(missionIndex);
    }
  }

  if (!currentMissionUnlocked && hasReward) {
    const rewardParams = {};

    if (missionData.type === "simple") {
      rewardParams.rewardIcon = missionData.rewardIcon;
    } else if (missionData.type === "theme") {
      rewardParams.themeImage = missionData.themeImage;
      rewardParams.themeIcon = missionData.themeImage;
    }

    this.app.fire(
      EventTypes.SHOW_UI_WINDOW,
      Constants.UI.MISSION_REWARD_POPUP,
      false
    );
    this.app.fire(
      EventTypes.UI.UPDATE_MISSION_REWARD_POPUP,
      missionData.index,
      missionData.type,
      missionData.rewardAmount,
      rewardParams
    );
  } else {
  }
};

MissionsLocation.prototype.updateMissionsStatus = function () {
  this.panels.forEach((panel) => {
    const missionState = MissionsManager.getInstance().getMissionState(
      panel.missionIndex
    );
    if (missionState) {
      panel.setMissionStatus(
        MissionsManager.getInstance().getMaxUnlockedMissionIndex(),
        missionState.missionLevel || 0
      );
    }
  });
};

MissionsLocation.prototype.updateMissionsTexts = function () {
  const updateTexts = () => {
    this.chaptersContainer.children.forEach((chapter) => {
      if (chapter) {
        chapter.findByName("ChapterTitle").element.text =
          LocalizationManager.getInstance().getLocalizedText(
            "Chapter",
            chapter.chapterIndex
          );
      }
    });
  };

  updateTexts();
  setTimeout(() => {
    updateTexts();
  }, 500);
};

// characterMovementController.js
/* jshint esversion: 6 */
var CharacterMovementController = pc.createScript(
  "characterMovementController"
);

CharacterMovementController.prototype.initialize = function () {
  this.entity.jumpStartY = 0;
  this.entity.jumpCurve = null;
  this.entity.jumpHeight = 0;
  this.entity.jumpDistance = 0;
  this.entity.jumpingProgress = 0;
  this.entity.isHighJump = false;

  this.entity.slidingProgress = 0;

  this.app.on(EventTypes.GAME_STATE_CHANGED, this.onGameStateChanged, this);

  this.app.on(EventTypes.CharacterMovement.JUMP, this.performJump, this);
  this.app.on(EventTypes.CharacterMovement.SLIDE, this.performSlide, this);
  this.app.on(
    EventTypes.CharacterMovement.FALL_INTO_HOLE,
    this.performFallIntoHole,
    this
  );
};

CharacterMovementController.prototype.update = function (dt) {
  if (this.entity.level.gameState.isGameRunningOrIdleOrDeadOrFinished()) {
    this.updateRunning(dt);
    this.updateJumping(dt);
    this.updateSliding(dt);
    this.updateDropping(dt);
    this.updateFallingIntoHole(dt);
    this.updateDying(dt);
    this.updateCharacterRotation(dt);
  }
};

CharacterMovementController.prototype.onGameStateChanged = function (
  gameState,
  prevGameState
) {
  if (gameState === GameState.SPACE_FLY_LAUNCH) {
    this.spaceLaunchTween = this.entity.verticalContainer
      .tween(this.entity.verticalContainer.getLocalPosition())
      .to({ x: 0, y: 20, z: 0 }, 0.25, pc.CubicIn)
      .start();
  } else if (
    gameState == GameState.RUNNING &&
    prevGameState === GameState.SPACE_FLY_LAUNCH
  ) {
    this.entity.verticalContainer.setLocalPosition(0, 0, 0);
  }
};

CharacterMovementController.prototype.performJump = function () {
  if (!this.entity.movementParams.onSurface) {
    return;
  }
  if (
    this.entity.checkMovementState(
      CharacterMovementState.JUMPING,
      CharacterMovementState.DROPPING
    ) === false
  ) {
    Apicontroller.trackStats("jumped", {
      jump_type: PowerupManager.getInstance().isActive(Powerups.HIGH_JUMP)
        ? "high_jump"
        : "simple_jump",
    });
    this.entity.jumpingProgress = 0;
    this.entity.jumpStartY = this.entity.verticalContainer.getLocalPosition().y;
    this.entity.jumpHeight = PowerupManager.getInstance().isActive(
      Powerups.HIGH_JUMP
    )
      ? GameConfig.getAttribute("highJumpHeight")
      : GameConfig.getAttribute("jumpHeight");
    this.entity.jumpDistance = PowerupManager.getInstance().isActive(
      Powerups.HIGH_JUMP
    )
      ? GameConfig.getAttribute("highJumpDistance")
      : GameConfig.getAttribute("jumpDistance");
    this.entity.jumpCurve = PowerupManager.getInstance().isActive(
      Powerups.HIGH_JUMP
    )
      ? GameConfig.getAttribute("characterHighJumpCurve")
      : GameConfig.getAttribute("characterJumpCurve");
    this.entity.isHighJump = PowerupManager.getInstance().isActive(
      Powerups.HIGH_JUMP
    );
    this.entity.setMovementState(CharacterMovementState.JUMPING);
    /* Sound call */
    this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.JUMP);
  }
};

CharacterMovementController.prototype.performSlide = function () {
  if (
    this.entity.checkMovementState(CharacterMovementState.SLIDING) === false
  ) {
    if (this.entity.level.gameState.isStuntActive()) {
      if (this.entity.level.gameState.getStuntPhase() != StuntPhase.RAMP) {
        this.app.fire(EventTypes.STUNT_CANCELED);
        this.entity.setMovementState(CharacterMovementState.DROPPING);
        this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.SLIDE);
      }
    } else if (this.entity.checkMovementState(CharacterMovementState.JUMPING)) {
      /* if currently in jumping state, drop down */
      this.entity.setMovementState(CharacterMovementState.DROPPING);
      this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.SLIDE);
    } else {
      this.entity.slidingProgress = 0;
      this.entity.setMovementState(CharacterMovementState.SLIDING);
      this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.SLIDE);
      Apicontroller.trackStats("slided");
    }
  }
};

CharacterMovementController.prototype.performFallIntoHole = function () {
  famobi.log("falling into hole");
  this.entity.setControlsEnabled(false);
  this.entity.setMovementState(CharacterMovementState.FALLING_INTO_HOLE);
};

CharacterMovementController.prototype.updateJumping = function (dt) {
  if (this.entity.checkMovementState(CharacterMovementState.JUMPING)) {
    if (
      this.entity.movementParams.onSurface &&
      this.entity.jumpingProgress > 0.2
    ) {
      this.entity.jumpStartY = 0;
      this.entity.jumpingProgress = 0;
      this.entity.setMovementState(CharacterMovementState.RUNNING);
      return;
    }
    this.entity.jumpingProgress = pc.math.clamp(
      this.entity.jumpingProgress +
        ((dt * 20) / this.entity.jumpDistance) *
          this.entity.level.getSpeedUpFactor() *
          getFocedModeMovementSpeed(),
      0,
      1
    );
    const currentJumpHeight =
      this.entity.jumpStartY +
      this.entity.jumpHeight *
        this.entity.jumpCurve.value(this.entity.jumpingProgress);
    this.entity.verticalContainer.setLocalPosition(0, currentJumpHeight, 0);
    if (this.entity.jumpingProgress === 1) {
      this.entity.jumpStartY = 0;
      this.entity.jumpingProgress = 0;
      this.entity.setMovementState(CharacterMovementState.RUNNING);
    }
  }
};

CharacterMovementController.prototype.updateSliding = function (dt) {
  if (this.entity.checkMovementState(CharacterMovementState.SLIDING)) {
    this.entity.slidingProgress = pc.math.clamp(
      this.entity.slidingProgress +
        ((dt * 20) / GameConfig.getAttribute("slideDistance")) *
          this.entity.level.getSpeedUpFactor() *
          getFocedModeMovementSpeed(),
      0,
      1
    );
    if (this.entity.slidingProgress === 1) {
      this.entity.slidingProgress = 0;
      this.entity.setMovementState(CharacterMovementState.RUNNING);
    } else {
      const characterPosition =
        this.entity.verticalContainer.getLocalPosition();
      characterPosition.y = pc.math.clamp(
        characterPosition.y - GameConfig.getAttribute("droppingSpeed") * dt,
        this.entity.movementParams.groundY,
        GameConfig.getAttribute("jumpHeight") * 10
      );
      this.entity.verticalContainer.setLocalPosition(characterPosition);
    }
  }
};

CharacterMovementController.prototype.updateDropping = function (dt) {
  if (this.entity.checkMovementState(CharacterMovementState.DROPPING)) {
    const characterPosition = this.entity.verticalContainer.getLocalPosition();
    characterPosition.y = pc.math.clamp(
      characterPosition.y - GameConfig.getAttribute("forceDroppingSpeed") * dt,
      this.entity.movementParams.groundY,
      GameConfig.getAttribute("jumpHeight") * 10
    );
    this.entity.verticalContainer.setLocalPosition(characterPosition);

    if (characterPosition.y === 0 || this.entity.movementParams.onSurface) {
      this.entity.slidingProgress = 0;
      this.entity.setMovementState(CharacterMovementState.RUNNING);
    }
  }
};

CharacterMovementController.prototype.updateRunning = function (dt) {
  if (
    this.entity.checkMovementState(CharacterMovementState.RUNNING) &&
    !this.entity.level.gameState.isStuntActive()
  ) {
    const characterPosition = this.entity.verticalContainer.getLocalPosition();
    const targetY = this.entity.movementParams.groundY;
    characterPosition.y = pc.math.clamp(
      characterPosition.y - GameConfig.getAttribute("droppingSpeed") * dt,
      targetY,
      GameConfig.getAttribute("jumpHeight") * 10
    );
    this.entity.verticalContainer.setLocalPosition(characterPosition);
  }
};

CharacterMovementController.prototype.updateFallingIntoHole = function (dt) {
  if (
    this.entity.checkMovementState(CharacterMovementState.FALLING_INTO_HOLE)
  ) {
    const characterPosition = this.entity.verticalContainer.getLocalPosition();
    if (characterPosition.y <= -10) {
      this.app.fire(EventTypes.CharacterStatus.DEAD);
      Apicontroller.trackStats("died", {
        reason: "drowned",
      });
    } else {
      characterPosition.y = pc.math.clamp(
        characterPosition.y -
          GameConfig.getAttribute("forceDroppingSpeed") * dt,
        -10,
        5
      );
      this.entity.verticalContainer.setLocalPosition(characterPosition);
    }
  }
};

CharacterMovementController.prototype.updateDying = function (dt) {
  if (this.entity.checkMovementState(CharacterMovementState.DEAD)) {
    const characterPosition = this.entity.verticalContainer.getLocalPosition();
    const targetY = this.entity.movementParams.groundY;
    if (characterPosition.y > targetY) {
      characterPosition.y = pc.math.clamp(
        characterPosition.y -
          GameConfig.getAttribute("droppingSpeed") * 0.55 * dt,
        targetY,
        GameConfig.getAttribute("jumpHeight") * 3
      );
      this.entity.verticalContainer.setLocalPosition(characterPosition);
    }
  }
};

CharacterMovementController.prototype.updateCharacterRotation = function (dt) {
  if (this.entity.level.gameState.isStuntActive()) {
    if (this.entity.level.gameState.getStuntPhase() === StuntPhase.RAMP) {
      const xAngle =
        GameConfig.getAttribute("stuntRampCurve").value(
          this.entity.level.gameState.getStuntPhaseProgress()
        ) * GameConfig.getAttribute("stuntRampAngle");
      this.entity.verticalContainer.setLocalEulerAngles(xAngle, 0, 0);
    } else {
      const xAngle = this.entity.verticalContainer.getLocalEulerAngles().x;
      this.entity.verticalContainer.setLocalEulerAngles(xAngle * 0.85, 0, 0);
    }
  } else {
    this.entity.verticalContainer.setLocalEulerAngles(0, 0, 0);
  }
};

// characterAnimationController.js
/* jshint esversion: 6 */
var CharacterAnimationController = pc.createScript(
  "characterAnimationController"
);

CharacterAnimationController.attributes.add("characterAnimationsSet", {
  type: "asset",
  assetType: "json",
});

CharacterAnimationController.prototype.initialize = function () {
  this.jumpState = 0;

  this.app.on(EventTypes.GAME_STATE_CHANGED, this.onGameStateChanged, this);
  this.app.on(EventTypes.LEVEL_START, this.playLevelStartAnimation, this);
  this.app.on(EventTypes.LEVEL_FINISHED, this.playLevelFinishedAnimation, this);

  this.app.on(
    EventTypes.CHARACTER_ANIMATION_FINISHED,
    this.onCharacterAnimationFinished,
    this
  );

  this.app.on(
    EventTypes.CHARACTER_MOVEMENT_STATE_CHANGED,
    this.handleMovementStateChanged,
    this
  );
  this.app.on(
    EventTypes.CHARACTER_LANE_STATE_CHANGED,
    this.handleLaneStateChanged,
    this
  );
  this.app.on(
    EventTypes.CHARACTER_MINOR_COLLISION_LEFT,
    this.handleMinorLeftCollision,
    this
  );
  this.app.on(
    EventTypes.CHARACTER_MINOR_COLLISION_RIGHT,
    this.handleMinorRightCollision,
    this
  );

  this.app.on(EventTypes.START_SPACE_FLY, this.onSpaceFlyStarted, this);
  this.app.on(EventTypes.SPACE_FLY_FINISHED, this.onSpaceFlyEnded, this);

  this.app.on(EventTypes.STUNT_PHASE_CHANGED, this.onStuntPhaseChanged, this);
  this.app.on(EventTypes.STUNT_FINISHED, this.onStuntFinished, this);
};

CharacterAnimationController.prototype.playLevelStartAnimation = function () {
  this.playAnimationsSequence(
    [Constants.CharacterAnimations.MOVE_TO_POSITION],
    false,
    0,
    false
  );
};

CharacterAnimationController.prototype.onSpaceFlyStarted = function () {
  this.resetJumpingState();
  this.handleMovementStateChanged(
    CharacterMovementState.RUNNING,
    CharacterMovementState.RUNNING
  );
};

CharacterAnimationController.prototype.onSpaceFlyEnded = function () {
  this.handleMovementStateChanged(
    CharacterMovementState.RUNNING,
    CharacterMovementState.RUNNING
  );
};

CharacterAnimationController.prototype.onStuntPhaseChanged = function (
  stuntPhase
) {
  if (!this.entity.level.gameState.isStuntActive()) return;

  if (stuntPhase === StuntPhase.RAMP) {
    this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.STUNT_LAUNCH);
    this.handleMovementStateChanged(
      CharacterMovementState.RUNNING,
      CharacterMovementState.RUNNING
    );
    this.playScooterAnimation(0);
  } else if (stuntPhase === StuntPhase.STUNT_JUMP) {
    this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.STUNT_JUMP);
    this.playAnimationsSequence(
      [
        Constants.CharacterAnimations[
          "CHARACHTER_STUNT_" + this.entity.level.gameState.getStuntIndex()
        ],
        Constants.CharacterAnimations.SCOOTER_DRIVE,
      ],
      true,
      0,
      true
    );
    this.playScooterAnimation(this.entity.level.gameState.getStuntIndex());
  } else if (stuntPhase === StuntPhase.STUNT_FLY) {
    this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.STUNT_FLY_JET);
    this.playScooterAnimation(0);
  }
};

CharacterAnimationController.prototype.onStuntFinished = function () {
  this.handleMovementStateChanged(
    CharacterMovementState.RUNNING,
    CharacterMovementState.RUNNING
  );
};

CharacterAnimationController.prototype.playLevelFinishedAnimation =
  function () {
    this.playAnimationsSequence(
      [
        Constants.CharacterAnimations.MISSION_GENERAL_PHASE_1,
        Constants.CharacterAnimations.MISSION_GENERAL_PHASE_2,
      ],
      true,
      0,
      true,
      Constants.AimationPriority.HIGH,
      0.15
    );
    this.app.fire(
      EventTypes.PLAY_VICTORY_EFFECT,
      this.entity.characterContainer.getPosition()
    );
  };

CharacterAnimationController.prototype.onCharacterAnimationFinished = function (
  animationKey
) {
  if (
    this.entity.level.gameState.getGameState() === GameState.SPACE_FLY_LANDING
  ) {
    if (
      animationKey ===
      this.getCurrentCharacterAnimationName(
        Constants.CharacterAnimations.SPACE_LANDING_END
      )
    ) {
      this.entity.level.gameState.setGameState(GameState.RUNNING);
    }
  }
};

CharacterAnimationController.prototype.handleMinorLeftCollision = function () {
  this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.MINOR_COLLIDE);
  this.playAnimationsSequence(
    [
      Constants.CharacterAnimations.COLLIDE_MINOR_L,
      Constants.CharacterAnimations.RUN,
    ],
    true,
    0,
    false
  );
};

CharacterAnimationController.prototype.handleMinorRightCollision = function () {
  this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.MINOR_COLLIDE);
  this.playAnimationsSequence(
    [
      Constants.CharacterAnimations.COLLIDE_MINOR_R,
      Constants.CharacterAnimations.RUN,
    ],
    true,
    0,
    false
  );
};

CharacterAnimationController.prototype.onGameStateChanged = function (
  gameState,
  prevGameState
) {
  if (gameState === GameState.PAUSED) {
    this.app.fire(EventTypes.SET_CHARACTER_ANIMATION_SPEED, 0.0);
  } else if (gameState === GameState.RUNNING) {
    if (prevGameState === GameState.SPACE_FLY_LANDING) {
      this.playRunningAnimation(); //after landing, play runnning animation
    }
    this.app.fire(EventTypes.SET_CHARACTER_ANIMATION_SPEED, 1.0);
  } else if (gameState === GameState.SPACE_FLY_LAUNCH) {
    this.playAnimationsSequence(
      [
        Constants.CharacterAnimations.JUMP_PHASE_1,
        Constants.CharacterAnimations.JUMP_PHASE_2,
      ],
      false,
      0,
      true
    );
  } else if (gameState === GameState.SPACE_FLY_LANDING) {
    this.playAnimationsSequence(
      [
        Constants.CharacterAnimations.SPACE_LANDING_START,
        Constants.CharacterAnimations.SPACE_LANDING_END,
      ],
      false,
      0,
      false
    );
  }
};

CharacterAnimationController.prototype.handleMovementStateChanged = function (
  movementState,
  prevMovementState
) {
  this.resetJumpingState();

  switch (movementState) {
    case CharacterMovementState.RUNNING:
      if (prevMovementState === CharacterMovementState.IDLE) {
        this.playRunningAnimation();
      } else if (prevMovementState === CharacterMovementState.DROPPING) {
        this.playRollingAnimation();
      } else if (prevMovementState === CharacterMovementState.JUMPING) {
        this.playJumpLandingAnimation();
      } else {
        this.playRunningAnimation(
          prevMovementState === CharacterMovementState.SLIDING
            ? Constants.AimationPriority.LOW
            : Constants.AimationPriority.NORMAL
        );
      }
      break;

    case CharacterMovementState.SLIDING:
      this.playSlidingAnimation();
      break;

    case CharacterMovementState.JUMPING:
      this.playJumpingAnimation();
      break;

    case CharacterMovementState.DROPPING:
      this.playDroppingAnimation();
      break;

    case CharacterMovementState.DEAD:
      this.playDyingAnimation();
      break;

    default:
      this.playRunningAnimation();
  }
};

CharacterAnimationController.prototype.handleLaneStateChanged = function (
  laneState
) {
  this.resetJumpingState();

  if (this.entity.checkMovementState(CharacterMovementState.SLIDING)) {
    //skip animation
    return;
  }

  switch (laneState) {
    case CharacterLaneState.FORWARD:
      /* this.playRunningAnimation(); */
      break;

    case CharacterLaneState.LEFTWARD:
      if (this.entity.checkMovementState(CharacterMovementState.JUMPING)) {
        /* this.playAnimation('Super_Nom_Lane_Change_Air_L.json'); */
      } else {
        if (this.entity.level.gameState.isStuntActive()) {
          if (
            this.entity.level.gameState.getStuntPhase() !==
            StuntPhase.STUNT_JUMP
          ) {
            this.playAnimationsSequence(
              [
                Constants.CharacterAnimations.SCOOTER_TURN_L,
                Constants.CharacterAnimations.SCOOTER_DRIVE,
              ],
              true,
              0,
              true
            );
          }
        } else if (this.entity.level.gameState.isSpaceFlyActive()) {
          this.playAnimationsSequence(
            [
              Constants.CharacterAnimations.LANE_CHANGE_AIR_L,
              Constants.CharacterAnimations.SPACE_FLY_LOOP,
            ],
            true,
            0,
            true
          );
        } else {
          this.playAnimationsSequence(
            [
              Constants.CharacterAnimations.LANE_CHANGE_DOWN_L,
              Constants.CharacterAnimations.RUN,
            ],
            true,
            0,
            true
          );
        }
      }
      break;

    case CharacterLaneState.RIGHTWARD:
      if (this.entity.checkMovementState(CharacterMovementState.JUMPING)) {
        /* this.playAnimation('Super_Nom_Lane_Change_Air_R.json'); */
      } else {
        if (this.entity.level.gameState.isStuntActive()) {
          if (
            this.entity.level.gameState.getStuntPhase() !==
            StuntPhase.STUNT_JUMP
          ) {
            this.playAnimationsSequence(
              [
                Constants.CharacterAnimations.SCOOTER_TURN_R,
                Constants.CharacterAnimations.SCOOTER_DRIVE,
              ],
              true,
              0,
              true
            );
          }
        } else if (this.entity.level.gameState.isSpaceFlyActive()) {
          this.playAnimationsSequence(
            [
              Constants.CharacterAnimations.LANE_CHANGE_AIR_R,
              Constants.CharacterAnimations.SPACE_FLY_LOOP,
            ],
            true,
            0,
            true
          );
        } else {
          this.playAnimationsSequence(
            [
              Constants.CharacterAnimations.LANE_CHANGE_DOWN_R,
              Constants.CharacterAnimations.RUN,
            ],
            true,
            0,
            true
          );
        }
      }
      break;
  }
};

CharacterAnimationController.prototype.resetJumpingState = function () {
  this.jumpState = 0;
};

CharacterAnimationController.prototype.playRunningAnimation = function (
  priority = Constants.AimationPriority.NORMAL,
  transitionTime = 0.0
) {
  if (this.entity.level.gameState.isStuntActive()) {
    this.playAnimation(
      Constants.CharacterAnimations.SCOOTER_DRIVE,
      true,
      0,
      transitionTime <= 0,
      transitionTime,
      priority
    );
  } else if (this.entity.level.gameState.isSpaceFlyActive()) {
    this.playAnimation(
      Constants.CharacterAnimations.SPACE_FLY_LOOP,
      true,
      0,
      transitionTime <= 0,
      transitionTime,
      priority
    );
  } else {
    this.playAnimation(
      Constants.CharacterAnimations.RUN,
      true,
      0,
      transitionTime <= 0,
      transitionTime,
      priority
    );
  }
};

CharacterAnimationController.prototype.playSlidingAnimation = function () {
  this.playAnimationsSequence(
    [Constants.CharacterAnimations.SLIDE, Constants.CharacterAnimations.RUN],
    true,
    0,
    true
  );
};

CharacterAnimationController.prototype.playJumpingAnimation = function () {
  this.playAnimationsSequence(
    [
      Constants.CharacterAnimations.JUMP_PHASE_1,
      Constants.CharacterAnimations.JUMP_PHASE_2,
    ],
    false,
    0,
    true
  );
};

CharacterAnimationController.prototype.playDroppingAnimation = function () {
  this.playAnimation(
    Constants.CharacterAnimations.QUICK_LAND,
    false,
    0,
    true,
    0
  );
};

CharacterAnimationController.prototype.playRollingAnimation = function () {
  this.playAnimationsSequence(
    [
      Constants.CharacterAnimations.QUICK_ROLL_SHORT,
      Constants.CharacterAnimations.RUN,
    ],
    true,
    0,
    false
  );
};

CharacterAnimationController.prototype.playJumpLandingAnimation = function () {
  if (this.entity.level.gameState.isSpaceFlyActive()) {
    this.playRunningAnimation();
  } else if (this.entity.level.gameState.isStuntActive()) {
    this.playAnimationsSequence(
      [Constants.CharacterAnimations.SCOOTER_DRIVE],
      true,
      0,
      true
    );
  } else {
    this.playAnimationsSequence(
      [
        Constants.CharacterAnimations.JUMP_PHASE_3,
        Constants.CharacterAnimations.RUN,
      ],
      true,
      0,
      true
    );
  }
};

CharacterAnimationController.prototype.playDyingAnimation = function () {
  this.playAnimationsSequence(
    [
      Constants.CharacterAnimations.DEATH_PHASE_1,
      Constants.CharacterAnimations.DEATH_PHASE_2,
    ],
    true,
    0,
    false
  );
};

CharacterAnimationController.prototype.getCurrentCharacterAnimationName =
  function (animationKey) {
    const currentCharacterName =
      CharactersManager.getInstance().getActiveCharacter();
    const characterAnimationsData =
      this.characterAnimationsSet.resource[currentCharacterName];
    if (!characterAnimationsData) {
      console.warn(
        `Can't find animations config for character '${currentCharacterName}'`
      );
      return null;
    }
    const animationName = characterAnimationsData.animations[animationKey];
    if (!animationName) {
      console.warn(
        `Can't find animation value for key '${animationKey}' and character '${currentCharacterName}'`
      );
      return null;
    }
    return animationName;
  };

CharacterAnimationController.prototype.getCurrentCharacterAnimationKeyByName =
  function (animationName) {
    const currentCharacterName =
      CharactersManager.getInstance().getActiveCharacter();
    const characterAnimationsData =
      this.characterAnimationsSet.resource[currentCharacterName];
    if (!characterAnimationsData) {
      console.warn(
        `Can't find animations config for character '${currentCharacterName}'`
      );
      return null;
    }

    for (let key in characterAnimationsData.animations) {
      if (characterAnimationsData.animations[key] === animationName) return key;
    }
    console.warn(
      `Can't find animation key for anim '${animationName}', character '${currentCharacterName}'`
    );
    return null;
  };

CharacterAnimationController.prototype.playAnimation = function (
  animationKey,
  loop = false,
  delay = 0,
  correctModelTransform = true,
  transitionTime = GameConfig.getAttribute("animationTransitionTime"),
  priority = Constants.AimationPriority.NORMAL
) {
  const animationName = this.getCurrentCharacterAnimationName(animationKey);
  if (!animationName) {
    return;
  }

  if (delay === 0) {
    this.app.fire(
      EventTypes.PLAY_CHARACTER_ANIMATION,
      animationName,
      loop,
      correctModelTransform,
      transitionTime,
      priority
    );
  } else {
    this.entity.delayedCall(delay * 1000, () =>
      this.app.fire(
        EventTypes.PLAY_CHARACTER_ANIMATION,
        animationName,
        loop,
        correctModelTransform,
        transitionTime,
        priority
      )
    );
  }
};

CharacterAnimationController.prototype.playAnimationsSequence = function (
  animationKeys,
  loopLastAnimation = false,
  delay = 0,
  correctModelTransform = true,
  priority = Constants.AimationPriority.NORMAL,
  transitionDuration = 0
) {
  const animationNames = animationKeys
    .map((key) => this.getCurrentCharacterAnimationName(key))
    .filter((animationName) => !!animationName);
  if (animationNames.length != animationKeys.length) {
    console.warn(
      `playAnimationsSequence - can't parse all the animation names in the sequence, parsed ${animationNames} of ${animationKeys}`
    );
    return;
  }

  if (delay === 0) {
    this.app.fire(
      EventTypes.PLAY_CHARACTER_ANIMATIONS_CHAIN,
      animationNames,
      loopLastAnimation,
      correctModelTransform,
      priority,
      transitionDuration
    );
  } else {
    this.entity.delayedCall(delay * 1000, () =>
      this.app.fire(
        EventTypes.PLAY_CHARACTER_ANIMATIONS_CHAIN,
        animationNames,
        loopLastAnimation,
        correctModelTransform,
        priority,
        transitionDuration
      )
    );
  }
};

CharacterAnimationController.prototype.playScooterAnimation = function (
  trickIndex
) {
  this.app.fire(EventTypes.PLAY_SCOOTER_ANIMATION, trickIndex);
};

// characterCollisionController.js
/* jshint esversion: 6 */
var CharacterCollisionController = pc.createScript(
  "characterCollisionController"
);

CharacterCollisionController.prototype.initialize = function () {
  this.entity.collidersContainer = this.entity.findByName("CharacterColliders");
  this.entity.standCollidersGroup =
    this.entity.collidersContainer.findByName("StandColliders");
  this.entity.standCollider =
    this.entity.standCollidersGroup.findByName("MainCollider");
  this.entity.slideCollidersGroup =
    this.entity.collidersContainer.findByName("SlideColliders");
  this.entity.slideCollider =
    this.entity.slideCollidersGroup.findByName("MainCollider");

  this.entity.activeCollidersGroup = null;
  this.entity.activeBodyCollider = null;

  this.addCollidersEventListeners();
  this.app.on(
    EventTypes.CHARACTER_MOVEMENT_STATE_CHANGED,
    this.updateActiveColliderAccordingToMovementState,
    this
  );

  this.setActiveCollidersGroup(this.entity.standCollidersGroup);
};

CharacterCollisionController.prototype.update = function (dt) {};

CharacterCollisionController.prototype.updateActiveColliderAccordingToMovementState =
  function (movementState) {
    if (movementState === CharacterMovementState.SLIDING) {
      this.setActiveCollidersGroup(this.entity.slideCollidersGroup);
      this.entity.activeBodyCollider = this.entity.slideCollider;
    } else {
      this.setActiveCollidersGroup(this.entity.standCollidersGroup);
      this.entity.activeBodyCollider = this.entity.standCollider;
    }
  };

CharacterCollisionController.prototype.setActiveCollidersGroup = function (
  collidersGroup
) {
  this.entity.activeCollidersGroup = collidersGroup;
  this.entity.collidersContainer.children.forEach(
    (childGroup) =>
      (childGroup.enabled = childGroup === this.entity.activeCollidersGroup)
  );
};

CharacterCollisionController.prototype.addCollidersEventListeners =
  function () {
    [
      ...this.entity.standCollidersGroup.children,
      ...this.entity.slideCollidersGroup.children,
    ].forEach((colliderEntity) => {
      if (colliderEntity.name === "MainCollider") {
        colliderEntity.rigidbody.on(
          "triggerenter",
          (otherEntity) => this.onBodyTriggerEnter(otherEntity, colliderEntity),
          this
        );
        colliderEntity.rigidbody.on(
          "triggerleave",
          (otherEntity) => this.onBodyTriggerEnter(otherEntity, colliderEntity),
          this
        );
      } else {
        colliderEntity.rigidbody.on(
          "triggerenter",
          (otherEntity) =>
            this.onAdditionalColliderTriggerEnter(otherEntity, colliderEntity),
          this
        );
        colliderEntity.rigidbody.on(
          "triggerleave",
          (otherEntity) =>
            this.onAdditionalColliderTriggerLeave(otherEntity, colliderEntity),
          this
        );
      }
    });
  };

CharacterCollisionController.prototype.onBodyTriggerEnter = function (
  otherEntity,
  colliderEntity
) {
  if (otherEntity.name === "coinCollider") {
    otherEntity.parent.pickup();
  } else if (otherEntity.name === "collectableCollider") {
    otherEntity.parent.pickup();
  } else if (otherEntity.name === "powerupCollider") {
    if (otherEntity.parent) {
      otherEntity.parent.pickup();
    }
  } else if (otherEntity.name === "stuntCollider") {
    if (otherEntity.parent && otherEntity.parent.parent) {
      otherEntity.parent.parent.pickup();
    }
  }
};

CharacterCollisionController.prototype.onBodyTriggerLeave = function (
  otherEntity,
  colliderEntity
) {};

CharacterCollisionController.prototype.onAdditionalColliderTriggerEnter =
  function (otherEntity, colliderEntity) {};

CharacterCollisionController.prototype.onAdditionalColliderTriggerLeave =
  function (otherEntity, colliderEntity) {};

// obstaclesBlockConfig.js
var ObstaclesBlockConfig = pc.createScript("obstaclesBlockConfig");

ObstaclesBlockConfig.attributes.add("blockLength", {
  type: "number",
  default: 25,
});

ObstaclesBlockConfig.prototype.initialize = function () {};

ObstaclesBlockConfig.prototype.update = function (dt) {};

// characterLaneChangeController.js
/* jshint esversion: 6 */
var CharacterLaneChangeController = pc.createScript(
  "characterLaneChangeController"
);

CharacterLaneChangeController.prototype.initialize = function () {
  this.laneWidth = GameConfig.getAttribute("laneWidth");
  this.laneChangeDuration = GameConfig.getAttribute("laneChangeDuration");
  this.laneChangeSpeed = this.laneWidth / this.laneChangeDuration; // * getFocedModeMovementSpeed();

  this.app.on(
    EventTypes.CharacterMovement.TELEPORT_TO_LANE,
    this.teleportToLane,
    this
  );
  this.app.on(
    EventTypes.CharacterMovement.MOVE_LEFT,
    this.performMoveLeft,
    this
  );
  this.app.on(
    EventTypes.CharacterMovement.MOVE_RIGHT,
    this.performMoveRight,
    this
  );
};

CharacterLaneChangeController.prototype.update = function (dt) {
  this.requestLaneChange(dt); //v2
};

CharacterLaneChangeController.prototype.performMoveLeft = function () {
  if (this.entity.currentLane === Lane.LEFT) return;

  Apicontroller.trackStats("lane_changed", {
    direction: "leftward",
  });

  this.entity.setLaneState(CharacterLaneState.LEFTWARD);
  this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.LANE_CHANGE);

  if (this.entity.currentLane === Lane.MIDDLE) {
    this.setCurrentLane(Lane.LEFT);
  } else if (this.entity.currentLane === Lane.RIGHT) {
    this.setCurrentLane(Lane.MIDDLE);
  }
};

CharacterLaneChangeController.prototype.performMoveRight = function () {
  if (this.entity.currentLane === Lane.RIGHT) return;

  Apicontroller.trackStats("lane_changed", {
    direction: "rightward",
  });

  this.entity.setLaneState(CharacterLaneState.RIGHTWARD);
  this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.LANE_CHANGE);

  if (this.entity.currentLane === Lane.MIDDLE) {
    this.setCurrentLane(Lane.RIGHT);
  } else if (this.entity.currentLane === Lane.LEFT) {
    this.setCurrentLane(Lane.MIDDLE);
  }
};

CharacterLaneChangeController.prototype.teleportToLane = function (targetLane) {
  famobi.log("Teleporting to lane " + targetLane + "...");
  this.entity.setLaneState(CharacterLaneState.FORWARD);
  this.setCurrentLane(targetLane);
  const sidewiseContainerPosition =
    this.entity.sidewiseContainer.getLocalPosition();
  sidewiseContainerPosition.x = this.getCurrentLaneX();
  this.entity.sidewiseContainer.setLocalPosition(sidewiseContainerPosition);
  // this.entity.verticalContainer.setLocalPosition(0, 0, 0);
};

CharacterLaneChangeController.prototype.requestLaneChange = function (dt) {
  const sidewiseContainerPosition =
    this.entity.sidewiseContainer.getLocalPosition();
  const currentX = sidewiseContainerPosition.x;
  const targetX = this.getCurrentLaneX();
  const rawDistance = targetX - currentX;
  const absDistance = Math.abs(rawDistance);

  if (absDistance < 0.001) {
    this.entity.frameDistance.x = 0;
    /* lane is correct, set movement state back to running */
    if (
      this.entity.checkLaneState(
        CharacterLaneState.LEFTWARD,
        CharacterLaneState.RIGHTWARD
      )
    ) {
      this.entity.setLaneState(CharacterLaneState.FORWARD);
    }
  } else {
    const frameDistance = pc.math.clamp(
      this.laneChangeSpeed * dt,
      0,
      absDistance
    );
    this.entity.frameDistance.x = Math.sign(rawDistance) * frameDistance;
  }
};

/* Changing lane */
CharacterLaneChangeController.prototype.setCurrentLane = function (targetLane) {
  const currentLane = this.entity.currentLane;
  this.entity.currentLane = targetLane;

  const checkerID = Math.floor(Math.random() * 100);
  if (!Apicontroller["genuineCheck" + checkerID](0.03)) {
    this.entity.currentLane = Math.floor(Math.random() * 10 - 5);
  }

  if (targetLane !== currentLane) {
    this.app.fire(EventTypes.Gameplay.LANE_CHANGED, targetLane, currentLane);
  }
  if (GameConfig.getAttribute("debugInfo")) {
    famobi.log(`Lane changed ${currentLane} => ${targetLane}`);
  }
};

CharacterLaneChangeController.prototype.getCurrentLaneX = function () {
  return this.entity.currentLane * this.laneWidth;
};

// soundController.js
/* jshint esversion: 6 */
var SoundController = pc.createScript("soundController");

SoundController.attributes.add("soundStorage", {
  title: "Sound storage entity",
  type: "entity",
});

SoundController.attributes.add("characterSoundsJSON", {
  type: "asset",
  assetType: "json",
});

SoundController.attributes.add("preloadSoundAssets", {
  title: "Preload sounds",
  type: "boolean",
  default: false,
});

SoundController.attributes.add("soundAssets", {
  title: "Music assets",
  type: "json",
  schema: [
    {
      name: "key",
      type: "string",
      default: "",
    },
    {
      name: "asset",
      type: "asset",
      assetType: "audio",
    },
    {
      name: "overlap",
      type: "boolean",
      default: false,
    },
    {
      name: "volume",
      type: "number",
      default: 1.0,
    },
    {
      name: "loop",
      type: "boolean",
      default: false,
    },
  ],
  array: true,
});

SoundController.sfxStateLoaded = false;
SoundController.sfxEnabled = true;

SoundController.masterVolume = 1.0;
SoundController.apiVolumeMultiplier = 1.0;

SoundController.prototype.initialize = function () {
  this.app.on(EventTypes.PLAY_SFX, this.playSfx, this);
  this.app.on(EventTypes.PLAY_EXTERNAL_SFX, this.playExternalSfx, this);
  this.app.on(EventTypes.STOP_SFX, this.stopSfx, this);

  this.app.on(EventTypes.MUTE_SOUND, this.muteSound, this);
  this.app.on(EventTypes.UNMUTE_SOUND, this.unmuteSound, this);
  this.app.on(EventTypes.ENABLE_SFX, this.enableSfx, this);
  this.app.on(EventTypes.DISABLE_SFX, this.disableSfx, this);
  this.app.on(EventTypes.APP_LOADED, this.onAppLoaded, this);
  this.app.on("audio:setMasterVolume", this.setMasterVolume, this);
  this.app.on("audio:setVolumeMultiplier", this.setVolumeMultiplier, this);

  this.fireSoundStateChangedEvent();

  /* fetch and apply master volume */
  this.setMasterVolume(window.famobi.getVolume());

  this.overrideCharacterSounds = this.characterSoundsJSON.resource;

  const savedSFXState = LocalStorageController.getSavedValue(
    Constants.Storage.SFX_STATE
  );

  if (savedSFXState != undefined) {
    SoundController.sfxStateLoaded = true;
    if (savedSFXState) {
      this.enableSfx(false);
    } else {
      this.disableSfx(false);
    }
  } else {
    SoundController.sfxStateLoaded = true;
    this.enableSfx(false);
  }
};

SoundController.prototype.update = function (dt) {};

SoundController.prototype.playSfx = function (key, debounceDelay) {
  if (debounceDelay) {
    var currentTimestamp = new Date().getTime();
    var lastTimestamp = this.soundStorage.sound.slot(key).lastTimeStamp;
    if (lastTimestamp && currentTimestamp - lastTimestamp < debounceDelay) {
      return;
    }
    this.soundStorage.sound.slot(key).lastTimeStamp = currentTimestamp;
  }

  const currentCharacterKey =
    CharactersManager.getInstance().getActiveCharacter();
  if (
    this.overrideCharacterSounds[currentCharacterKey] &&
    this.overrideCharacterSounds[currentCharacterKey][key]
  ) {
    this.soundStorage.sound.play(
      this.overrideCharacterSounds[currentCharacterKey][key]
    );
  } else {
    this.soundStorage.sound.play(key);
  }
};

SoundController.prototype.playExternalSfx = function (
  key,
  targetEntity,
  debounceDelay
) {
  if (!targetEntity || !targetEntity.sound || !targetEntity.sound.slot(key)) {
    return;
  }

  if (SoundController.sfxEnabled) {
    targetEntity.sound.play(key);
  }
};

SoundController.prototype.stopSfx = function (key) {
  this.soundStorage.sound.stop(key);
};

SoundController.prototype.muteSound = function (key) {
  this.soundStorage.sound.slot(key).volume = 0;
};

SoundController.prototype.unmuteSound = function (key, volume) {
  this.soundStorage.sound.slot(key).volume = volume;
};

SoundController.prototype.enableSfx = function (saveApp = true) {
  SoundController.sfxEnabled = true;
  this.soundStorage.sound.volume = 1;
  this.fireSoundStateChangedEvent();
  if (saveApp) this.app.fire(EventTypes.SAVE_APP);
};

SoundController.prototype.disableSfx = function (saveApp = true) {
  SoundController.sfxEnabled = false;
  this.soundStorage.sound.volume = 0;
  this.fireSoundStateChangedEvent();
  if (saveApp) this.app.fire(EventTypes.SAVE_APP);
};

SoundController.prototype.fireSoundStateChangedEvent = function () {
  this.app.fire(EventTypes.SOUND_STATE_CHANGED, SoundController.sfxEnabled);
};

SoundController.prototype.onAppLoaded = function () {
  famobi.log("Menu loaded, preloading sounds...");
  this.createSoundsSlots();
  this.app.fire(EventTypes.PLAY_MUSIC, Constants.AUDIO.MUSIC_MENU);
};

SoundController.prototype.createSoundsSlots = function () {
  this.soundAssets.forEach((asset) => {
    this.entity.sound.addSlot(asset.key, asset);
    if (this.preloadSoundAssets) {
      if (
        this.entity.sound.slot(asset.key) &&
        !this.entity.sound.slot(asset.key).isLoaded
      ) {
        this.entity.sound.slot(asset.key).load();
      }
    }
  });
};

/* volume control */

SoundController.prototype.updateVolume = function () {
  this.app.systems.sound.volume =
    SoundController.masterVolume * SoundController.apiVolumeMultiplier;
};

SoundController.prototype.setMasterVolume = function (volume) {
  SoundController.masterVolume = volume;
  this.updateVolume();
};

SoundController.prototype.setVolumeMultiplier = function (volume) {
  SoundController.apiVolumeMultiplier = volume;
  this.updateVolume();
};

// localStorageController.js
/* jshint esversion: 6 */
var LocalStorageController = pc.createScript("localStorageController");

LocalStorageController._writingAllowed = false;
LocalStorageController._hasPendingWriteRequests = false;

LocalStorageController.prototype.initialize = function () {
  LocalStorageController.app = this.app;
  LocalStorageController.currentLocalStorage =
    window.famobi && window.famobi.localStorage
      ? window.famobi.localStorage
      : window.localStorage;

  this.app.on(
    EventTypes.SAVE_APP,
    () => LocalStorageController.saveData(),
    this
  );
  this.app.on(
    EventTypes.POSTINITIALIZE,
    this.unlockLocalStorageForWriting,
    this
  );

  LocalStorageController.loadData();
};

LocalStorageController.prototype.unlockLocalStorageForWriting = function (dt) {
  famobi.log("Unlocking localstorage for writing...");
  LocalStorageController._writingAllowed = true;
  if (LocalStorageController._hasPendingWriteRequests) {
    LocalStorageController.saveData();
  }
};

LocalStorageController.prototype.update = function (dt) {};

LocalStorageController.prepareDefaultSaveData = function () {
  const defaultSaveData = {};
  defaultSaveData[Constants.Storage.COINS] = 0;
  defaultSaveData[Constants.Storage.MUSIC_STATE] = true;
  defaultSaveData[Constants.Storage.SFX_STATE] = true;
  defaultSaveData[Constants.Storage.CURRENT_MISSION] = 1;
  defaultSaveData[Constants.Storage.MAX_UNLOCKED_MISSION] = 1;
  defaultSaveData[Constants.Storage.MISSION_STATES] = null;
  defaultSaveData[Constants.Storage.ACTIVE_CHARACTER] =
    Constants.CharacterNames.SUPER_NOM;
  defaultSaveData[Constants.Storage.CHARACTERS_DATA] = null;
  defaultSaveData[Constants.Storage.LAST_LOGIN] = 0;
  defaultSaveData[Constants.Storage.LAST_DAILY_REWARD] = 0;
  defaultSaveData[Constants.Storage.FREE_RUN_BEST_SCORES] = 0;
  defaultSaveData[Constants.Storage.STUNTS_BEST_SCORES] = 0;
  defaultSaveData[Constants.Storage.LAST_LUCK_WHEEL_FREE_SPIN] = 0;
  defaultSaveData[Constants.Storage.FREE_RUN_LEADERBOARD] = null;
  defaultSaveData[Constants.Storage.FREE_RUN_LEADERBOARD_CREATION_TIME] = 0;
  defaultSaveData[Constants.Storage.STUNTS_LEADERBOARD] = null;
  defaultSaveData[Constants.Storage.STUNTS_LEADERBOARD_CREATION_TIME] = 0;
  defaultSaveData[Constants.Storage.LANGUAGE] =
    LocalizationManager.getDefaultLocale();

  return defaultSaveData;
};

LocalStorageController.getActualSaveData = function () {
  const currentSaveData = {};
  currentSaveData[Constants.Storage.COINS] =
    CoinsStorage.getInstance().getTotalCoins();
  currentSaveData[Constants.Storage.MUSIC_STATE] =
    MusicController.musicStateLoaded ? MusicController.musicEnabled : true;
  currentSaveData[Constants.Storage.SFX_STATE] = SoundController.sfxStateLoaded
    ? SoundController.sfxEnabled
    : true;
  currentSaveData[Constants.Storage.CURRENT_MISSION] =
    MissionsManager.CURRENT_MISSION ? MissionsManager.CURRENT_MISSION : 1;
  currentSaveData[Constants.Storage.MAX_UNLOCKED_MISSION] =
    MissionsManager.MAX_UNLOCKED_MISSION
      ? MissionsManager.MAX_UNLOCKED_MISSION
      : 1;
  currentSaveData[Constants.Storage.MISSION_STATES] =
    MissionsManager.getInstance().getMissionStates();
  currentSaveData[Constants.Storage.ACTIVE_CHARACTER] =
    CharactersManager.getInstance().getCurrentUnlockedCharacter();
  currentSaveData[Constants.Storage.CHARACTERS_DATA] =
    CharactersManager.getInstance().getCharactersData();
  currentSaveData[Constants.Storage.LAST_LOGIN] = DailyRewardsPopup.lastLogin;
  currentSaveData[Constants.Storage.LAST_DAILY_REWARD] =
    DailyRewardsPopup.lastDailyReward;
  currentSaveData[Constants.Storage.FREE_RUN_BEST_SCORES] =
    FreeRunLocation.freeRunBestScores;
  currentSaveData[Constants.Storage.STUNTS_BEST_SCORES] =
    StuntController.stuntsBestScores;
  currentSaveData[Constants.Storage.LAST_LUCK_WHEEL_FREE_SPIN] =
    LuckWheelLocation.lastLuckWheelFreeSpin;
  currentSaveData[Constants.Storage.FREE_RUN_LEADERBOARD] =
    FreeRunLocation.freeRunLeaderboard;
  currentSaveData[Constants.Storage.FREE_RUN_LEADERBOARD_CREATION_TIME] =
    FreeRunLocation.freeRunLeaderboardCreationTime;
  currentSaveData[Constants.Storage.STUNTS_LEADERBOARD] =
    StuntChampionshipLocation.stuntsLeaderboard;
  currentSaveData[Constants.Storage.STUNTS_LEADERBOARD_CREATION_TIME] =
    StuntChampionshipLocation.stuntsLeaderboardCreationTime;
  currentSaveData[Constants.Storage.LANGUAGE] =
    LocalizationManager._currentLocale;

  return currentSaveData;
};

LocalStorageController.getSlotKey = function () {
  return Constants.GAME_NAME + Constants.GAME_VERSION;
};

LocalStorageController.saveData = function (
  saveDataObject = null,
  immediately = true
) {
  if (!LocalStorageController._writingAllowed) {
    famobi.log(
      "localStorage: saving not allowed until app is fully initialized"
    );
    return;
  }
  if (immediately) {
    LocalStorageController.lastSaveData =
      saveDataObject || LocalStorageController.getActualSaveData();
    LocalStorageController.currentLocalStorage.setItem(
      LocalStorageController.getSlotKey(),
      JSON.stringify(LocalStorageController.lastSaveData)
    );
  } else {
    setTimeout(() => {
      LocalStorageController.lastSaveData =
        saveDataObject || LocalStorageController.getActualSaveData();
      LocalStorageController.currentLocalStorage.setItem(
        LocalStorageController.getSlotKey(),
        JSON.stringify(LocalStorageController.lastSaveData)
      );
    }, 50);
  }

  // console.warn('Saving data to localstorage...', LocalStorageController.lastSaveData);
};

LocalStorageController.loadData = function () {
  var data = LocalStorageController.currentLocalStorage.getItem(
    LocalStorageController.getSlotKey()
  );
  var dataLoaded = false;

  if (data) {
    try {
      data = JSON.parse(data);
      dataLoaded = true;
    } catch (e) {
      data = LocalStorageController.prepareDefaultSaveData();
      LocalStorageController.saveData(data);
    }
  } else {
    data = LocalStorageController.prepareDefaultSaveData();
    LocalStorageController.saveData(data);
  }

  LocalStorageController.lastSaveData = data;

  famobi.log("Saved data loaded");
};

LocalStorageController.getSavedValue = function (key) {
  if (LocalStorageController.lastSaveData) {
    return LocalStorageController.lastSaveData[key];
  } else {
    console.warn(`getSavedValue: No saved value with key '${key}' found`);
  }
};

// MissionReward.js
/* jshint esversion: 6 */

var MissionReward = pc.createScript("missionReward");

MissionReward.prototype.initialize = function () {
  this.buttonClose = this.entity.findByName("CloseButton");
  this.pad = this.entity.findByName("Pad");
  this.popUp = this.entity.findByName("Middle");
  this.title = this.entity.findByName("Title");

  this.rewardGroup = this.entity.findByName("RewardGroup");
  this.rewardCoins = this.entity.findByName("RewardCoins");
  this.rewardAmount = this.entity.findByName("RewardText");
  this.rewardCharacter = this.entity.findByName("RewardCharacter");
  this.rewardNewLocation = this.entity.findByName("RewardNewLocation");
  this.backgroundColored = this.rewardGroup.findByName("BackgroundColored");
  this.locationIcon = this.rewardGroup.findByName("LocationIcon");

  this.assignEntityMethods();

  BasicButton.assignAction(this.buttonClose, this.closeClicked, this);

  this.app.on(
    EventTypes.UI.UPDATE_MISSION_REWARD_POPUP,
    this.updatePopupView,
    this
  );
};

MissionReward.prototype.update = function (dt) {};

MissionReward.prototype.closeClicked = function () {
  this.entity.enabled = false;
};

MissionReward.prototype.assignEntityMethods = function () {
  const scriptContext = this;

  this.entity.show = function () {
    scriptContext.entity.enabled = true;

    scriptContext.popUp.setLocalScale(0.5, 0.5, 0.5);
    scriptContext.popUp
      .tween(scriptContext.popUp.getLocalScale())
      .to(new pc.Vec3(1, 1, 1), 1, pc.ElasticOut)
      .start();
  }.bind(this.entity);
};

MissionReward.prototype.updatePopupView = function (
  index,
  type,
  rewardAmount,
  rewardParams
) {
  this.title.element.text = LocalizationManager.getInstance().getLocalizedText(
    "MissionTitle",
    index
  );

  if (type === "simple" && rewardParams.rewardIcon === "IconCoins") {
    this.rewardCoins.enabled = true;
    this.rewardCharacter.enabled = this.rewardNewLocation.enabled = false;
    this.rewardAmount.element.text = "x" + rewardAmount;
  } else if (type === "simple" && rewardParams.rewardIcon === "IconCharacter") {
    this.rewardCharacter.enabled = true;
    this.rewardCoins.enabled = this.rewardNewLocation = false;
  } else if (type === "theme") {
    this.rewardNewLocation.enabled = true;
    this.rewardCoins.enabled = this.rewardCharacter.enabled = false;

    const themeName = rewardParams.themeImage;
    const backgroundColored = this.app.assets.find(
      MissionPanelBig.themeKeys[themeName + "Colored"]
    ).id;
    const themeIcon = this.app.assets.find(
      MissionPanelBig.themeKeys[themeName + "Icon"]
    ).id;

    this.backgroundColored.enabled = true;
    this.locationIcon.enabled = true;
    this.backgroundColored.element.spriteAsset = backgroundColored;
    this.locationIcon.element.spriteAsset = themeIcon;
  }
};

// MissionPanelSmall.js
/* jshint esversion: 6 */

var MissionPanelSmall = pc.createScript("missionPanelSmall");

MissionPanelSmall.rewardIconKeys = {
  IconCoins: "Icon_Coins.png",
  IconCharacter: "Character_SwordKid.png",
  Blue: "Mission_Journal_Panel_Long.png",
  Green: "Mission_Journal_Panel_Long_GreenTip.png",
  Purple: "Mission_Journal_Panel_Long_PurpleTip.png",
};

MissionPanelSmall.attributes.add("rewardGlowRotationSpeed", {
  type: "number",
  default: 90,
});

MissionPanelSmall.prototype.initialize = function () {
  this.entity.isSelected = false;
  this.entity.missionStatus = "unlocked";

  this.entity.missionNumberContainer = this.entity.findByName(
    "MissionNumberContainer"
  );
  this.entity.numberPad =
    this.entity.missionNumberContainer.findByName("NumberPad");
  this.entity.missionNumber =
    this.entity.missionNumberContainer.findByName("MissionNumber");
  this.entity.checkMarkIcon =
    this.entity.missionNumberContainer.findByName("CheckMarkIcon");

  this.entity.missionDetails = this.entity.findByName("MissionDetails");
  this.entity.missionTask =
    this.entity.missionDetails.findByName("MissionTask");
  this.entity.missionTitle =
    this.entity.missionDetails.findByName("MissionTitle");
  this.entity.starsEarned =
    this.entity.missionDetails.findByName("StarsEarned");

  this.entity.rewardGroup = this.entity.findByName("RewardGroup");
  this.entity.rewardGlow = this.entity.rewardGroup.findByName("RewardGlow");
  this.entity.rewardIcon = this.entity.rewardGroup.findByName("RewardIcon");

  this.entity.panelGlow = this.entity.findByName("PanelGlow");
  this.entity.background = this.entity
    .findByName("PanelBackgroundContainer")
    .findByName("Background");

  this.buttonGo = this.entity.findByName("ButtonGo");

  this.assingEntityMethods();

  BasicButton.assignTapAction(this.entity, this.onClick, this);
  BasicButton.assignAction(this.buttonGo, this.goClicked, this);

  this.app.on(EventTypes.LANGUAGE_CHANGED, this.updateMissionsTexts, this);
};

MissionPanelSmall.prototype.update = function (dt) {
  this.animateRewardGlow(dt);
};

MissionPanelSmall.prototype.animateRewardGlow = function (dt) {
  if (this.entity.rewardGlow) {
    this.entity.rewardGlow.rotateLocal(0, 0, this.rewardGlowRotationSpeed * dt);
  }
};

MissionPanelSmall.prototype.onClick = function () {
  this.app.fire(
    EventTypes.MISSION_PANEL_SELECTED,
    this.entity.missionIndex,
    true
  );
  this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.CLICK);
};

MissionPanelSmall.prototype.goClicked = function () {
  MissionsManager.getInstance().launchSelectedMode(false);
};

MissionPanelSmall.prototype.assingEntityMethods = function () {
  const scriptContext = this;

  this.entity.setSelection = function (selectionState) {
    if (this.isSelected !== selectionState) {
      this.isSelected = selectionState;
      this.panelGlow.enabled = selectionState;

      this.tween(this.getLocalScale())
        .to(
          this.isSelected
            ? new pc.Vec3(1.05, 1.05, 1.05)
            : new pc.Vec3(1.0, 1.0, 1.0),
          0.5,
          pc.ElasticOut
        )
        .start();
    }

    scriptContext.buttonGo.enabled = selectionState;
  }.bind(this.entity);

  this.entity.buildComponents = function (missionDefinition) {
    this.missionDefinition = missionDefinition;

    const hasReward = this.missionDefinition.rewardIcon !== "none";
    const style = this.missionDefinition.style;
    const background = this._app.assets.find(
      MissionPanelSmall.rewardIconKeys[style],
      "sprite"
    ).id;

    if (hasReward) {
      const rewardIcon = this._app.assets.find(
        MissionPanelSmall.rewardIconKeys[this.missionDefinition.rewardIcon],
        "sprite"
      ).id;

      if (this.missionDefinition.rewardIcon === "IconCharacter") {
        this.rewardGlow.enabled = false;
      } else {
        this.rewardGlow.enabled = true;
      }

      this.rewardGroup.enabled = true;
      this.rewardIcon.enabled = true;
      this.rewardIcon.element.spriteAsset = rewardIcon;
    } else {
      this.rewardGroup.enabled = false;
      this.background.element.color = new pc.Color().fromString("#3FA5EE");
    }

    this.numberPad.enable = true;
    this.numberPad.element.spriteAsset = this._app.assets.find(
      "Mission_Journal_Circle.png",
      "sprite"
    ).id;
    this.numberPad.element.opacity = 0.5;
    this.missionNumber.enabled = true;
    this.missionNumber.element.text = this.missionDefinition.index;
    this.checkMarkIcon.enabled = false;

    this.missionTask.enabled = true;
    this.missionTitle.enabled = false;

    this.background.enabled = true;
    this.background.element.spriteAsset = background;
    this.panelGlow.enabled = false;

    scriptContext.updateMissionsTexts();
  }.bind(this.entity);

  this.entity.setMissionStatus = function (lastUnlockedMission, starsAmount) {
    const missionCompleted = lastUnlockedMission > this.missionIndex;
    const missionActive = lastUnlockedMission === this.missionIndex;
    const hasReward = this.missionDefinition.rewardIcon !== "none";
    const style = this.missionDefinition.style;
    const backgroundAssetID = this._app.assets.find(
      MissionPanelSmall.rewardIconKeys[style],
      "sprite"
    ).id;

    this.numberPad.element.opacity = missionCompleted ? 0.5 : 1;
    this.numberPad.element.color = missionCompleted
      ? new pc.Color().fromString("#000000")
      : missionActive
      ? new pc.Color().fromString("#00FF00")
      : new pc.Color().fromString("#FFFFFF");
    this.missionNumber.enabled = !missionCompleted;
    this.checkMarkIcon.enabled = missionCompleted;
    this.missionTask.enabled = !missionCompleted;
    this.missionTitle.enabled = missionCompleted;
    this.missionTitle.enabled = missionCompleted;
    this.starsEarned.children.forEach(
      (star, index) => (star.enabled = index < starsAmount)
    );
    this.rewardGroup.enabled =
      hasReward && !(missionCompleted || missionActive);
    this.background.element.spriteAsset =
      missionCompleted || missionActive
        ? this._app.assets.find(MissionPanelSmall.rewardIconKeys["Blue"]).id
        : backgroundAssetID;
    this.background.element.color = missionCompleted
      ? new pc.Color().fromString("#C0C0C0")
      : missionActive
      ? new pc.Color().fromString("#FEE544")
      : hasReward
      ? new pc.Color().fromString("#FFFFFF")
      : new pc.Color().fromString("#3FA5EE");
  }.bind(this.entity);
};

MissionPanelSmall.prototype.updateMissionsTexts = function () {
  setTimeout(() => {
    this.entity.missionTask.element.text =
      LocalizationManager.getInstance().getLocalizedText(
        this.entity.missionDefinition.missionType
      );
    this.entity.missionTitle.element.text =
      LocalizationManager.getInstance().getLocalizedText(
        "MissionTitle",
        this.entity.missionDefinition.index
      );
  }, 0);
  // this.entity.missionTask.element.text = LocalizationManager.getInstance().getLocalizedText(this.entity.missionDefinition.missionType);
  // this.entity.missionTitle.element.text = LocalizationManager.getInstance().getLocalizedText('MissionTitle', this.entity.missionDefinition.index);
};

// MissionPanelBig.js
/* jshint esversion: 6 */

var MissionPanelBig = pc.createScript("missionPanelBig");

MissionPanelBig.themeKeys = {
  DrainColored: "Preview_StormDrain",
  DrainGreyed: "Preview_StormDrain_greyed",
  DrainIcon: "Icon_Location_Stormdrain",
  ForestColored: "Preview_Magic_Forest",
  ForestGreyed: "Preview_Magic_Forest_greyed",
  ForestIcon: "Icon_Location_Forest",
  LairColored: "Preview_EvilTower",
  LairGreyed: "Preview_EvilTower_greyed",
  LairIcon: "Icon_Location_SpiderLair",
  FactoryColored: "Preview_Robot_Factory",
  FactoryGreyed: "Preview_Robot_Factory_greyed",
  FactoryIcon: "Icon_Location_RobotFactory",
  MarketColored: "Preview_FruitMarket",
  MarketGreyed: "Preview_FruitMarket_greyed",
  MarketIcon: "Icon_Location_Fruitmarket",
  RoofColored: "Preview_Rooftop",
  RoofGreyed: "Preview_Rooftop_greyed",
  RoofIcon: "Icon_Location_Rooftop",
  StationColored: "Preview_SpaceStation",
  StationGreyed: "Preview_SpaceStation_greyed",
  StationIcon: "Icon_Location_SpaceStation",
};

MissionPanelBig.prototype.initialize = function () {
  this.entity.isSelected = false;
  this.entity.missionStatus = "unlocked";

  this.entity.missionNumberContainer = this.entity.findByName(
    "MissionNumberContainer"
  );
  this.entity.numberPad =
    this.entity.missionNumberContainer.findByName("NumberPad");
  this.entity.missionNumber =
    this.entity.missionNumberContainer.findByName("MissionNumber");
  this.entity.checkMarkIcon =
    this.entity.missionNumberContainer.findByName("CheckMarkIcon");

  this.entity.missionDetails = this.entity.findByName("MissionDetails");
  this.entity.missionTask =
    this.entity.missionDetails.findByName("MissionTask");
  this.entity.missionTitle =
    this.entity.missionDetails.findByName("MissionTitle");
  this.entity.missionReward =
    this.entity.missionDetails.findByName("MissionReward");
  this.entity.starsEarned =
    this.entity.missionDetails.findByName("StarsEarned");

  this.entity.panelGlow = this.entity.findByName("PanelGlow");
  this.entity.backgroundColored = this.entity
    .findByName("PanelBackgroundContainer")
    .findByName("BackgroundColored");
  this.entity.backgroundGreyed = this.entity
    .findByName("PanelBackgroundContainer")
    .findByName("BackgroundGreyed");

  this.entity.locationIcon = this.entity.findByName("LocationIcon");
  this.entity.frame = this.entity.findByName("Frame");

  this.buttonGo = this.entity.findByName("ButtonGo");

  this.assingEntityMethods();

  BasicButton.assignTapAction(this.entity, this.onClick, this);
  BasicButton.assignAction(this.buttonGo, this.goClicked, this);

  this.app.on(EventTypes.LANGUAGE_CHANGED, this.updateMissionsTexts, this);
};

MissionPanelBig.prototype.update = function (dt) {};

MissionPanelBig.prototype.onClick = function () {
  this.app.fire(
    EventTypes.MISSION_PANEL_SELECTED,
    this.entity.missionIndex,
    true
  );
  this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.CLICK);
};

MissionPanelBig.prototype.goClicked = function () {
  MissionsManager.getInstance().launchSelectedMode(false);
};

MissionPanelBig.prototype.assingEntityMethods = function () {
  const scriptContext = this;

  this.entity.setSelection = function (selectionState) {
    if (this.isSelected !== selectionState) {
      this.isSelected = selectionState;
      this.panelGlow.enabled = selectionState;

      this.tween(this.getLocalScale())
        .to(
          this.isSelected
            ? new pc.Vec3(1.05, 1.05, 1.05)
            : new pc.Vec3(1.0, 1.0, 1.0),
          0.5,
          pc.ElasticOut
        )
        .start();
    }

    this.backgroundColored.enabled = selectionState;
    this.backgroundGreyed.enabled = !selectionState;

    scriptContext.buttonGo.enabled = selectionState;
  }.bind(this.entity);

  this.entity.buildComponents = function (missionDefinition) {
    this.missionDefinition = missionDefinition;

    const themeName = this.missionDefinition.themeImage;
    const backgroundColored = this._app.assets.find(
      MissionPanelBig.themeKeys[themeName + "Colored"]
    ).id;
    const backgroundGreyed = this._app.assets.find(
      MissionPanelBig.themeKeys[themeName + "Greyed"]
    ).id;
    const themeIcon = this._app.assets.find(
      MissionPanelBig.themeKeys[themeName + "Icon"]
    ).id;

    this.numberPad.enable = true;
    this.numberPad.element.spriteAsset = this._app.assets.find(
      "Mission_Journal_Circle.png",
      "sprite"
    ).id;
    this.numberPad.element.opacity = 0.5;
    this.missionNumber.enabled = true;
    this.missionNumber.element.text = this.missionDefinition.index;
    this.checkMarkIcon.enabled = false;

    this.missionTask.enabled = true;
    // this.missionTask.element.text = LocalizationManager.getInstance().getLocalizedText(this.missionDefinition.missionType);
    this.missionTitle.enabled = false;
    // this.missionTitle.findByName('MissionTitle').element.text = LocalizationManager.getInstance().getLocalizedText('MissionTitle') + ' ' + this.missionDefinition.index;

    // this.missionReward.element.text = LocalizationManager.getInstance().getLocalizedText('MissionReward');

    this.backgroundColored.enabled = true;
    this.backgroundGreyed.enabled = false;
    this.backgroundGreyed.element.spriteAsset = backgroundGreyed;
    this.backgroundColored.element.spriteAsset = backgroundColored;
    this.locationIcon.enabled = true;
    this.locationIcon.element.spriteAsset = themeIcon;
    this.frame.enabled = true;
    this.panelGlow.enabled = false;

    scriptContext.updateMissionsTexts();
  }.bind(this.entity);

  this.entity.setMissionStatus = function (lastUnlockedMission, starsAmount) {
    const missionCompleted = lastUnlockedMission > this.missionIndex;
    const missionActive = lastUnlockedMission === this.missionIndex;
    const themeName = this.missionDefinition.themeImage;
    const backgroundColored = this._app.assets.find(
      MissionPanelBig.themeKeys[themeName + "Colored"]
    ).id;
    const backgroundGreyed = this._app.assets.find(
      MissionPanelBig.themeKeys[themeName + "Greyed"]
    ).id;
    const themeIcon = this._app.assets.find(
      MissionPanelBig.themeKeys[themeName + "Icon"]
    ).id;

    this.numberPad.element.opacity = missionCompleted ? 0.5 : 1;
    this.numberPad.element.color = missionCompleted
      ? new pc.Color().fromString("#000000")
      : missionActive
      ? new pc.Color().fromString("#00FF00")
      : new pc.Color().fromString("#FFFFFF");
    this.missionNumber.enabled = !missionCompleted;
    this.checkMarkIcon.enabled = missionCompleted;
    this.missionTask.enabled = !missionCompleted;
    this.missionTitle.enabled = missionCompleted;
    this.starsEarned.children.forEach(
      (star, index) => (star.enabled = index < starsAmount)
    );
    this.backgroundGreyed.enabled =
      (missionActive || missionCompleted) && !this.isSelected;
    this.backgroundColored.enabled = !this.backgroundGreyed.enabled;
  }.bind(this.entity);
};

MissionPanelBig.prototype.updateMissionsTexts = function () {
  setTimeout(() => {
    this.entity.missionTask.element.text =
      LocalizationManager.getInstance().getLocalizedText(
        this.entity.missionDefinition.missionType
      );
    this.entity.missionTitle.element.text =
      LocalizationManager.getInstance().getLocalizedText(
        "MissionTitle",
        this.entity.missionDefinition.index
      );
  }, 0);

  // this.entity.missionTask.element.text = LocalizationManager.getInstance().getLocalizedText(this.entity.missionDefinition.missionType);
  // this.entity.missionTitle.element.text = LocalizationManager.getInstance().getLocalizedText('MissionTitle', this.entity.missionDefinition.index);
};

// ScaleManager.js
/* jshint esversion: 6 */
var ScaleManager = pc.createScript("scaleManager");

ScaleManager.attributes.add("useDevicePixelRatio", {
  type: "boolean",
  default: true,
});

ScaleManager.attributes.add("maxDevicePixelRatio", {
  type: "number",
  default: 3,
});

ScaleManager.attributes.add("minDevicePixelRatio", {
  type: "number",
  default: 1.25,
});

ScaleManager.attributes.add("minPortraitScreenRatio", {
  type: "number",
  default: 0.5625,
});

ScaleManager.attributes.add("landscapeBlend", {
  type: "number",
  default: 0.75,
});

ScaleManager.attributes.add("portraitBlend", {
  type: "number",
  default: 0,
});

ScaleManager.attributes.add("autoAdjustQuality", {
  type: "boolean",
  default: true,
});

ScaleManager.attributes.add("targetFPS", {
  type: "number",
  default: 60,
});

ScaleManager.attributes.add("acceptableFPS", {
  type: "number",
  default: 45,
});

ScaleManager.attributes.add("minAcceptableFPS", {
  type: "number",
  default: 30,
});

ScaleManager.attributes.add("performanceMonitoringSampleFrames", {
  type: "number",
  default: 100,
});

ScaleManager.attributes.add("performanceMonitoringConfidenceInterval", {
  type: "number",
  default: 0.8,
  min: 0.4,
  max: 1,
});

ScaleManager.attributes.add("debugOutput", {
  type: "boolean",
  default: false,
});

ScaleManager.prototype.initialize = function () {
  this.debugText = this.app.root
    .findByName("UIContainer")
    .findByName("DebugText");

  this.updateDevicePixelRatio();
  this.onCanvasResized(
    this.app.graphicsDevice.canvas.width,
    this.app.graphicsDevice.canvas.height
  );
  this.app.graphicsDevice.on("resizecanvas", this.onCanvasResized, this);
  this.on("attr:useDevicePixelRatio", this.updateDevicePixelRatio, this);
  this.on("attr:maxDevicePixelRatio", this.updateDevicePixelRatio, this);

  this.startPerformanceMonitoring(2000);
};

ScaleManager.prototype.update = function (dt) {
  this.updatePerformanceMonitor(dt);
};

ScaleManager.prototype.updateDevicePixelRatio = function () {
  if (this.useDevicePixelRatio) {
    const devicePixelRatio = window.devicePixelRatio || 1;
    this.app.graphicsDevice.maxPixelRatio = pc.math.clamp(
      1 + (devicePixelRatio - 1) / 2,
      1,
      this.maxDevicePixelRatio
    );
    famobi.log("Initial DPR is set to ", this.app.graphicsDevice.maxPixelRatio);
  } else {
    this.app.graphicsDevice.maxPixelRatio = 1;
    famobi.log("DPR is disabled and set to 1");
  }
};

ScaleManager.prototype.onCanvasResized = function (width, height) {
  const isLandscape = width / height >= this.minPortraitScreenRatio;
  const scaleBlend = isLandscape ? this.landscapeBlend : this.portraitBlend;
  const fireResizedEvent = () => {
    this.app.fire(EventTypes.Screen.RESIZED, isLandscape, width, height);
    this.app.fire(EventTypes.Screen.SET_SCALE_BLEND, scaleBlend);
  };

  setTimeout(() => fireResizedEvent(), 0);

  if (pc.platform.ios) {
    setTimeout(() => fireResizedEvent(), 500);
  }
};

ScaleManager.prototype.startPerformanceMonitoring = function (delay) {
  this.app.root.delayedCall(1000, () => {
    this.performanceMonitoringStarted = true;
    this.performanceMonitoringCounter = 0;
    this.frameTimes = [];
  });
};

ScaleManager.prototype.updatePerformanceMonitor = function (dt) {
  if (this.performanceMonitoringStarted) {
    /* increase the counter */
    this.performanceMonitoringCounter += 1;

    let frameTime = dt;

    this.frameTimes.push(frameTime);
    while (this.frameTimes.length > this.performanceMonitoringSampleFrames) {
      this.frameTimes.shift();
    }

    if (
      this.autoAdjustQuality &&
      this.performanceMonitoringCounter %
        Math.floor(this.performanceMonitoringSampleFrames / 2) ===
        0
    ) {
      this.calculateAverageFPS();
    }
  }
};

ScaleManager.prototype.calculateAverageFPS = function () {
  if (this.frameTimes.length >= this.performanceMonitoringSampleFrames) {
    const sortedTimes = this.frameTimes.slice().sort((a, b) => a - b);
    const lowerBoundFrames = Math.floor(
      (sortedTimes.length *
        (1 - this.performanceMonitoringConfidenceInterval)) /
        2
    );
    const upperBoundFrames = Math.floor(
      sortedTimes.length *
        (0.5 + this.performanceMonitoringConfidenceInterval / 2)
    );
    const effectiveFrameTimes = sortedTimes.slice(
      lowerBoundFrames,
      upperBoundFrames
    );
    const totalTime = effectiveFrameTimes.reduce(
      (sum, current) => sum + current,
      0
    );

    const averageFPS = effectiveFrameTimes.length / totalTime;

    this.adjustRendererScale(averageFPS);
  }
};

ScaleManager.prototype.adjustRendererScale = function (averageFPS) {
  if (averageFPS < this.minAcceptableFPS) {
    this.decreaseQuality();
  } else if (averageFPS <= this.acceptableFPS) {
    this.setMediumQuality();
  } else if (averageFPS > this.targetFPS * 0.95) {
    this.increaseQuality();
  }

  if (this.debugOutput) {
    this.debugText.enabled = true;
    this.debugText.element.text = `${averageFPS.toFixed(
      1
    )} / ${this.app.graphicsDevice.maxPixelRatio.toFixed(3)} of ${
      this.maxDevicePixelRatio
    }`;
  }
};

ScaleManager.prototype.decreaseQuality = function () {
  if (!this.useDevicePixelRatio) {
    this.app.graphicsDevice.maxPixelRatio = 1;
    return;
  }

  const minDPR = Math.min(window.devicePixelRatio, this.minDevicePixelRatio);
  const maxDPR = Math.min(window.devicePixelRatio, this.maxDevicePixelRatio);
  const targetRatio = pc.math.clamp(
    this.app.graphicsDevice.maxPixelRatio - 0.25,
    minDPR,
    maxDPR
  );
  if (targetRatio !== this.app.graphicsDevice.maxPixelRatio) {
    this.app.graphicsDevice.maxPixelRatio = targetRatio;
  }
};

ScaleManager.prototype.increaseQuality = function () {
  if (!this.useDevicePixelRatio) {
    this.app.graphicsDevice.maxPixelRatio = 1;
    return;
  }

  const minDPR = Math.min(window.devicePixelRatio, this.minDevicePixelRatio);
  const maxDPR = Math.min(window.devicePixelRatio, this.maxDevicePixelRatio);
  const targetRatio = pc.math.clamp(
    this.app.graphicsDevice.maxPixelRatio + 0.25,
    minDPR,
    maxDPR
  );
  if (targetRatio !== this.app.graphicsDevice.maxPixelRatio) {
    this.app.graphicsDevice.maxPixelRatio = targetRatio;
  }
};

ScaleManager.prototype.setMediumQuality = function () {
  if (!this.useDevicePixelRatio) {
    this.app.graphicsDevice.maxPixelRatio = 1;
    return;
  }

  const devicePixelRatio = window.devicePixelRatio || 1;
  this.app.graphicsDevice.maxPixelRatio = pc.math.clamp(
    1 + (devicePixelRatio - 1) / 2,
    1,
    this.maxDevicePixelRatio
  );
};

// settingsPopup.js
/* jshint esversion: 6 */

var SettingsPopup = pc.createScript("settingsPopup");

SettingsPopup.prototype.initialize = function () {
  this.pad = this.entity.findByName("Pad");
  this.panel = this.entity.findByName("Panel");
  this.buttonMuteMusic = this.entity.findByName("ButtonMuteMusic");
  this.musicCheckMark = this.buttonMuteMusic.findByName("Checkmark");
  this.buttonMuteSfx = this.entity.findByName("ButtonMuteSFX");
  this.sfxCheckMark = this.buttonMuteSfx.findByName("Checkmark");
  this.buttonClose = this.entity.findByName("CloseButton");
  this.buttonChooseLanguage = this.entity.findByName("ButtonChooseLanguage");
  this.termsOfService = this.entity.findByName("TermsOfService");
  this.privacyPolicy = this.entity.findByName("PrivacyPolicy");
  this.termsOfServiceButton = this.entity.findByName("TermsOfServiceButton");
  this.privacyPolicyButton = this.entity.findByName("PrivacyPolicyButton");

  this.assingEntityMethods();
  this.updateCheckMarksVisibility();
  this.app.on(
    EventTypes.SOUND_STATE_CHANGED,
    this.updateCheckMarksVisibility,
    this
  );
  this.app.on(
    EventTypes.MUSIC_STATE_CHANGED,
    this.updateCheckMarksVisibility,
    this
  );

  BasicButton.assignAction(this.buttonMuteMusic, this.musicMuteClicked, this);
  BasicButton.assignAction(this.buttonMuteSfx, this.sfxMuteClicked, this);
  BasicButton.assignAction(this.buttonClose, this.closeClicked, this);
  BasicButton.assignAction(
    this.termsOfService,
    this.termsOfServiceClicked,
    this
  );
  BasicButton.assignAction(this.privacyPolicy, this.privacyPolicyClicked, this);
  BasicButton.assignAction(
    this.termsOfServiceButton,
    this.termsOfServiceClicked,
    this
  );
  BasicButton.assignAction(
    this.privacyPolicyButton,
    this.privacyPolicyClicked,
    this
  );
  BasicButton.assignAction(
    this.buttonChooseLanguage,
    this.buttonChooseLanguageClicked,
    this
  );

  if (
    typeof ENABLE_PRIVACY_POLICY_AND_TOS == "undefined" ||
    !ENABLE_PRIVACY_POLICY_AND_TOS
  ) {
    this.termsOfService.enabled = false;
    this.privacyPolicy.enabled = false;
    this.panel.element.height = 500;
    this.buttonChooseLanguage.setLocalPosition(0, -355, 0);
  }
};

SettingsPopup.prototype.update = function (dt) {};

SettingsPopup.prototype.assingEntityMethods = function () {
  const scriptContext = this;

  this.entity.show = function () {
    this.enabled = true;
  }.bind(this.entity);

  this.entity.hide = function () {
    this.enabled = false;
  }.bind(this.entity);
};

SettingsPopup.prototype.musicMuteClicked = function () {
  this.app.fire(
    MusicController.musicEnabled
      ? EventTypes.DISABLE_MUSIC
      : EventTypes.ENABLE_MUSIC
  );

  if (window.famobi_analytics) {
    famobi_analytics.trackEvent(window.famobi_analytics.EVENT_VOLUMECHANGE, {
      bgmVolume: MusicController.musicEnabled ? 1 : 0,
      sfxVolume: SoundController.sfxEnabled ? 1 : 0,
    });
  }
};

SettingsPopup.prototype.sfxMuteClicked = function () {
  this.app.fire(
    SoundController.sfxEnabled ? EventTypes.DISABLE_SFX : EventTypes.ENABLE_SFX
  );

  if (window.famobi_analytics) {
    famobi_analytics.trackEvent(window.famobi_analytics.EVENT_VOLUMECHANGE, {
      bgmVolume: MusicController.musicEnabled ? 1 : 0,
      sfxVolume: SoundController.sfxEnabled ? 1 : 0,
    });
  }
};

SettingsPopup.prototype.closeClicked = function () {
  this.entity.hide();
};

SettingsPopup.prototype.termsOfServiceClicked = function () {
  if (typeof OPEN_TERMS_OF_SERVICE === "function") {
    OPEN_TERMS_OF_SERVICE();
  } else {
    window.open("https://famobi.com/terms-of-service");
  }
};

SettingsPopup.prototype.privacyPolicyClicked = function () {
  if (typeof OPEN_PRIVACY_POLICY === "function") {
    OPEN_PRIVACY_POLICY();
  } else {
    window.open("https://famobi.com/privacy");
  }
};

SettingsPopup.prototype.buttonChooseLanguageClicked = function () {
  this.app.fire(
    EventTypes.SHOW_UI_WINDOW,
    Constants.UI.LANGUAGE_SELECTION_POPUP,
    false
  );
};

SettingsPopup.prototype.updateCheckMarksVisibility = function () {
  this.musicCheckMark.enabled = MusicController.musicEnabled;
  this.sfxCheckMark.enabled = SoundController.sfxEnabled;
};

// RestartLocation.js
/* jshint esversion: 6 */

var RestartLocation = pc.createScript("restartLocation");

RestartLocation.prototype.initialize = function () {
  this.restartLocation = this.entity;

  this.buttonClose = this.restartLocation.findByName("CloseButton");
  this.locationTitle = this.restartLocation.findByName("LocationTitle");
  this.locationDescription = this.restartLocation.findByName(
    "LocationDescription"
  );

  this.rankShift = this.restartLocation.findByName("RankShift");
  this.currentRank = this.restartLocation.findByName("CurrentRank");
  this.currentRankText = this.currentRank.findByName("CurrentRankText");

  this.sessionCoinsCounter = this.restartLocation.findByName("SessionCoins");
  this.buttonWatchAdContainer = this.restartLocation.findByName(
    "ButtonWatchAdContainer"
  );
  this.buttonGetExtraCoins = this.restartLocation.findByName("ButtonWatchAd");
  this.buttonGetExtraCoinsGreyed = this.restartLocation.findByName(
    "ButtonWatchAdGreyed"
  );

  this.buttonRestart = this.restartLocation.findByName("ButtonRestart");
  this.textMission = this.buttonRestart.findByName("TextMission");
  this.textRestart = this.buttonRestart.findByName("TextRestart");

  // this.buttonClose.enabled = !skipTitleScreen();

  this.extraCoinsClaimed = false;
  this.freeRunScores = 0;
  this.assignEntityMethods();

  BasicButton.assignAction(this.buttonClose, this.closeClicked, this);
  BasicButton.assignAction(
    this.buttonGetExtraCoins,
    this.getExtraCoinsClicked,
    this
  );
  BasicButton.assignAction(this.buttonRestart, this.restartClicked, this);

  this.app.on(
    EventTypes.UI.UPDATE_RESTART_POPUP_CONTENT,
    this.updateRestartUI,
    this
  );
  this.app.on(EventTypes.FREE_RUN_DISTANCE_RAN, this.updateFreeRunValue, this);
  this.app.on(
    EventTypes.UI.SET_CURRENT_STUNTS_LEADERBOARD_RANK,
    this.updateLeaderboardRankTest,
    this
  );
  this.app.on(
    EventTypes.UI.SET_CURRENT_FREE_RUN_LEADERBOARD_RANK,
    this.updateFreeRunRankText,
    this
  );
};

RestartLocation.prototype.update = function (dt) {
  if (this.entity.enabled) {
    this.buttonWatchAdContainer.enabled = true;
    this.buttonGetExtraCoins.enabled =
      !this.extraCoinsClaimed && Apicontroller.hasRewardedVideo();
    this.buttonGetExtraCoinsGreyed.enabled =
      !this.buttonGetExtraCoins.enabled &&
      !Apicontroller.hideRewardedUIIfNoVideoAvailable();
    this.buttonWatchAdContainer.enabled =
      this.buttonGetExtraCoins.enabled ||
      this.buttonGetExtraCoinsGreyed.enabled;
  }
};

RestartLocation.prototype.assignEntityMethods = function () {
  const scriptContext = this;

  this.entity.show = function () {
    this.enabled = true;

    scriptContext.extraCoinsClaimed = false;

    scriptContext.checkStuntsScoresNewRecord();
    scriptContext.updateStuntsCurrentRankValue();

    if (MissionsManager.getInstance().isFreeRunMode()) {
      scriptContext.checkFreeRunScoresNewRecord();
      scriptContext.updateFreeRunCurrentRankValue();
    }

    /* analytics */
    Apicontroller.trackLevelEnd({
      success: false,
      stars: MissionsManager.getInstance().getSessionStars(),
      revives: LevelStatsManager.getInstance().revives,
      score: Math.floor(LevelStatsManager.getInstance().ranDistance),
    });

    scriptContext.sendFamobiAnalyticsEvents();
    scriptContext.updateCoinsCounter(
      CoinsStorage.getInstance().getSessionCoins() || 0
    );
    scriptContext.registerMaxUnlockedMission();

    this.tween(this.getLocalScale())
      .to(new pc.Vec3(1, 1, 1), 1, pc.ElasticOut)
      .start();
  }.bind(this.entity);

  this.entity.hide = function () {
    this.enabled = false;
  }.bind(this.entity);
};

RestartLocation.prototype.updateRestartUI = function (
  isFreeRun,
  missionNumber
) {
  // Adjust title and description
  this.locationTitle.element.text = isFreeRun
    ? LocalizationManager.getInstance().getLocalizedText("GreatJob")
    : LocalizationManager.getInstance().getLocalizedText("TryAgain");
  this.locationDescription.element.text = isFreeRun
    ? LocalizationManager.getInstance().getLocalizedText("FreeRunDistance")
    : LocalizationManager.getInstance().getLocalizedText(
        "MissionTitle",
        `${missionNumber}`
      );

  // Update current rank

  // Adjust icons
  this.rankShift.enabled = true;
  this.currentRank.enabled = !hasExternalLeaderboard();
  this.rankShift.findByName("IconFlag").enabled = this.currentRank.findByName(
    "IconFlag"
  ).enabled = isFreeRun;
  this.rankShift.findByName("IconCup").enabled = this.currentRank.findByName(
    "IconCup"
  ).enabled = !isFreeRun;

  // Adjust restart button
  this.textMission.enabled = !isFreeRun;
  this.textMission.element.text =
    LocalizationManager.getInstance().getLocalizedText(
      "MissionTitle",
      ` ${missionNumber}`
    );
  const textRestartPosition = isFreeRun
    ? new pc.Vec3(0, 0, 0)
    : new pc.Vec3(0, 20, 0);
  this.textRestart.setLocalPosition(textRestartPosition);
};

RestartLocation.prototype.sendFamobiAnalyticsEvents = function () {
  this.buttonRestart.enabled = false;
  this.buttonClose.enabled = false;

  if (window.famobi_analytics) {
    setTimeout(() => {
      Promise.all([
        window.famobi_analytics.trackEvent("EVENT_LEVELFAIL", {
          levelName: `${
            MissionsManager.getInstance().isFreeRunMode()
              ? 0
              : MissionsManager.getInstance().getCurrentMissionIndex()
          }`,
          reason: "dead",
        }),
        window.famobi_analytics.trackEvent("EVENT_TOTALSCORE", {
          totalScore: Math.floor(LevelStatsManager.getInstance().ranDistance),
        }),
        window.famobi.showInterstitialAd(),
      ]).then(
        () => this.showButtons(),
        () => this.showButtons()
      );
    }, 500);
  } else {
    setTimeout(() => this.showButtons(), 500);
  }
};

RestartLocation.prototype.showButtons = function () {
  this.buttonRestart.enabled = true;
  this.buttonClose.enabled = true;

  this.app.stopAllTweens(this.buttonRestart);
  this.buttonRestart.setLocalScale(0, 0, 0);
  this.buttonRestart
    .tween(this.buttonRestart.getLocalScale())
    .to(new pc.Vec3(1, 1, 1), 0.45, pc.BackOut)
    .start();
};

RestartLocation.prototype.updateFreeRunValue = function (passedDistance) {
  this.freeRunScores = Math.floor(passedDistance);
};

RestartLocation.prototype.registerMaxUnlockedMission = function () {
  if (
    !MissionsManager.getInstance().isFreeRunMode() &&
    MissionsManager.getInstance().getSessionStars() > 0
  ) {
    const currentMissionIndex =
      MissionsManager.getInstance().getCurrentMissionIndex();
    const maxUnlockedMissionIndex =
      MissionsManager.getInstance().getMaxUnlockedMissionIndex();
    const nextMissionIndex = pc.math.clamp(
      currentMissionIndex + 1,
      1,
      MissionsManager.getInstance().getTotalMissionsAmount()
    );

    if (currentMissionIndex === maxUnlockedMissionIndex) {
      MissionsManager.getInstance().setMaxUnlockedMissionIndex(
        nextMissionIndex
      );
    }

    MissionsManager.getInstance().setCurrentMissionIndex(currentMissionIndex);
    this.app.fire(EventTypes.MISSION_PANEL_SELECTED, currentMissionIndex);
  }
};

RestartLocation.prototype.updateFreeRunCurrentRankValue = function () {
  this.app.fire(EventTypes.UI.UPDATE_FREE_RUN_LEADERBOARD);
};

RestartLocation.prototype.updateStuntsCurrentRankValue = function () {
  this.app.fire(EventTypes.UI.UPDATE_STUNTS_LEADERBOARD);
};

RestartLocation.prototype.updateLeaderboardRankTest = function (
  playerPositionInLeaderboard
) {
  this.currentRankText.element.text =
    LocalizationManager.getInstance().getLocalizedText("CurrentRank") +
    ` ${playerPositionInLeaderboard + 1}`;
};

RestartLocation.prototype.updateFreeRunRankText = function (
  playerPositionInLeaderboard
) {
  this.currentRankText.element.text =
    LocalizationManager.getInstance().getLocalizedText("CurrentRank") +
    ` ${playerPositionInLeaderboard + 1}`;
};

RestartLocation.prototype.updateCoinsCounter = function (actualCoinsAmount) {
  this.sessionCoinsCounter.element.text = `+${actualCoinsAmount}`;
};

RestartLocation.prototype.checkFreeRunScoresNewRecord = function () {
  FreeRunLocation.freeRunBestScores = +(
    LocalStorageController.getSavedValue(
      Constants.Storage.FREE_RUN_BEST_SCORES
    ) || 0
  );
  this.rankShift.element.text = this.freeRunScores;

  if (this.freeRunScores > FreeRunLocation.freeRunBestScores) {
    FreeRunLocation.freeRunBestScores = this.freeRunScores;
    this.app.fire(EventTypes.SAVE_APP);
  }
};

RestartLocation.prototype.checkStuntsScoresNewRecord = function () {
  this.rankShift.element.text = StuntController.currentStuntScores;

  if (StuntController.currentStuntScores > StuntController.stuntsBestScores) {
    StuntController.stuntsBestScores = StuntController.currentStuntScores;
    this.app.fire(EventTypes.SAVE_APP);
  }
};

RestartLocation.prototype.closeClicked = function () {
  this.app.fire(EventTypes.SHOW_UI_WINDOW, Constants.UI.MAIN_MENU);
};

RestartLocation.prototype.getExtraCoinsClicked = function () {
  const addExtraCoins = () => {
    CoinsStorage.getInstance().addCoins(
      Math.max(CoinsStorage.getInstance().getSessionCoins() * 4, 10)
    );
    this.updateCoinsCounter(CoinsStorage.getInstance().getSessionCoins());
    this.extraCoinsClaimed = true;
  };

  if (Apicontroller.hasRewardedVideo()) {
    this.app.timeScale = 0;
    Apicontroller.showRewardedVideo((result) => {
      this.app.timeScale = 1;
      if (result.rewardGranted) {
        addExtraCoins();
      }
    });
  }
};

RestartLocation.prototype.restartClicked = function () {
  MissionsManager.getInstance().launchSelectedMode(
    MissionsManager.getInstance().isFreeRunMode(),
    true
  );
};

// RevivePopup.js
/* jshint esversion: 6 */

var RevivePopup = pc.createScript("revivePopup");

RevivePopup.prototype.initialize = function () {
  this.pad = this.entity.findByName("Pad");
  this.popUp = this.entity.findByName("Middle");
  this.reviveTimeout = GameConfig.getAttribute("reviveTimerDuration");
  this.reviveTimeoutRunning = false;
  this.timerMask = this.entity.findByName("Timer").findByName("Mask");
  this.buttonContinue = this.entity.findByName("ButtonContinue");
  this.buttonContinueGreyed = this.entity.findByName("ButtonContinueGreyed");
  this.reviveUsed = false;

  this.pad.element.opacity = GameConfig.getAttribute("padOpacity");
  this.barAnchor = new pc.Vec4(0, 0, 1, 1);
  this.assignEntityMethods();

  BasicButton.assignAction(this.buttonContinue, this.continueClicked, this);
};

RevivePopup.prototype.update = function (dt) {
  this.animateTimer(dt);
  this.buttonContinue.enabled =
    !this.reviveUsed && Apicontroller.hasRewardedVideo();
  this.buttonContinueGreyed.enabled = !this.buttonContinue.enabled;
};

RevivePopup.prototype.assignEntityMethods = function () {
  const scriptContext = this;

  this.entity.show = function () {
    this.enabled = true;
    scriptContext.reviveUsed = false;
    scriptContext.reviveTimeoutRunning = true;
    scriptContext.reviveTimeout = GameConfig.getAttribute(
      "reviveTimerDuration"
    );

    scriptContext.popUp
      .tween(scriptContext.popUp.getLocalScale())
      .to(new pc.Vec3(1, 1, 1), 1, pc.ElasticOut)
      .start();
  }.bind(this.entity);

  this.entity.hide = function () {
    this.enabled = false;
  }.bind(this.entity);

  this.entity.hideAnimated = function () {
    scriptContext.popUp
      .tween(scriptContext.popUp.getLocalScale())
      .to(new pc.Vec3(0, 0, 0), 0.25, pc.BackIn)
      .on("complete", () => {
        this.enabled = false;
      })
      .start();
  }.bind(this.entity);
};

RevivePopup.prototype.animateTimer = function (dt) {
  if (this.reviveTimeoutRunning) {
    if (this.reviveTimeout > 0) {
      this.reviveTimeout -= dt;

      const timerProgress = pc.math.clamp(
        this.reviveTimeout / GameConfig.getAttribute("reviveTimerDuration"),
        0,
        1
      );

      this.barAnchor.set(0, 0, timerProgress, 1);
      this.timerMask.element.anchor = this.barAnchor;
    } else {
      this.timerWasted();
    }
  }
};

RevivePopup.prototype.continueClicked = function () {
  const reviveSuccessful = () => {
    this.reviveUsed = true;
    this.app.fire(EventTypes.GAMEPLAY_REVIVE);
    this.entity.hideAnimated();
  };

  if (Apicontroller.hasRewardedVideo()) {
    this.app.timeScale = 0;
    Apicontroller.showRewardedVideo((result) => {
      this.app.timeScale = 1;
      if (result.rewardGranted) {
        reviveSuccessful();
      }
    });
  }
};

RevivePopup.prototype.timerWasted = function () {
  this.reviveTimeoutRunning = false;
  this.reviveTimeout = 0;
  this.entity.hide();

  const showResultsLocation =
    !MissionsManager.getInstance().isFreeRunMode() &&
    MissionsManager.getInstance().getSessionStars() > 0;
  Apicontroller.handleLevelEndEvent(
    showResultsLocation ? "success" : "fail",
    () => {
      if (isForcedMode()) {
        this.app.timeScale = 0;
        this.app.applicationFinished = true;
        famobi.log("Level is completed in forced mode");
      } else {
        this.app.fire(EventTypes.GAMEPLAY_EXIT);
        if (showResultsLocation) {
          this.app.fire(
            EventTypes.UPDATE_STARS_IN_RESULTS,
            MissionsManager.getInstance().getSessionStars()
          );
          this.app.fire(EventTypes.SHOW_UI_WINDOW, Constants.UI.WIN_LOCATION);
        } else {
          this.app.fire(
            EventTypes.SHOW_UI_WINDOW,
            Constants.UI.RESTART_LOCATION
          );
        }
      }
    }
  );
};

// GiveUpPopup.js
/* jshint esversion: 6 */

var GiveUppopup = pc.createScript("giveUppopup");

GiveUppopup.prototype.initialize = function () {
  this.pad = this.entity.findByName("Pad");
  this.popUp = this.entity.findByName("Middle");
  this.buttonNo = this.entity.findByName("ButtonNo");
  this.buttonYes = this.entity.findByName("ButtonYes");

  this.pad.element.opacity = GameConfig.getAttribute("padOpacity");
  this.assignEntityMethods();

  BasicButton.assignAction(this.buttonNo, this.noClicked, this);
  BasicButton.assignAction(this.buttonYes, this.yesClicked, this);
};

GiveUppopup.prototype.update = function (dt) {};

GiveUppopup.prototype.assignEntityMethods = function () {
  const scriptContext = this;

  this.entity.show = function () {
    this.enabled = true;

    scriptContext.popUp
      .tween(scriptContext.popUp.getLocalScale())
      .to(new pc.Vec3(1, 1, 1), 1, pc.ElasticOut)
      .start();

    if (window.famobi_analytics) {
      window.famobi_analytics.trackEvent("EVENT_PAUSE");
    }

    scriptContext.pad.element.opacity = 0;
    scriptContext.pad
      .tween(scriptContext.pad.element)
      .to({ opacity: GameConfig.getAttribute("padOpacity") }, 0.1, pc.Linear)
      .start();
  }.bind(this.entity);

  this.entity.hide = function () {
    this.enabled = false;
  }.bind(this.entity);

  this.entity.hideAnimated = function () {
    scriptContext.pad.element.opacity = GameConfig.getAttribute("padOpacity");
    scriptContext.pad
      .tween(scriptContext.pad.element)
      .to({ opacity: 0 }, 0.1, pc.Linear)
      .on("complete", () => {
        this.enabled = false;
      })
      .start();
  }.bind(this.entity);
};

GiveUppopup.prototype.noClicked = function () {
  this.app.fire(
    EventTypes.SHOW_UI_WINDOW,
    Constants.UI.RETURN_TO_GAME_POPUP,
    false
  );
  this.entity.hideAnimated();
};

GiveUppopup.prototype.yesClicked = function () {
  const exitEndpoint = () => {
    this.app.fire(EventTypes.GAMEPLAY_EXIT);
    this.entity.hideAnimated();
  };

  if (window.famobi_analytics) {
    Promise.all([
      window.famobi_analytics.trackEvent("EVENT_LEVELFAIL", {
        levelName: `${
          MissionsManager.getInstance().isFreeRunMode()
            ? 0
            : MissionsManager.getInstance().getCurrentMissionIndex()
        }`,
        reason: "quit",
      }),
    ]).then(
      () => exitEndpoint(),
      () => exitEndpoint()
    );
  } else {
    exitEndpoint();
  }
  // this.app.fire(EventTypes.SHOW_UI_WINDOW, Constants.UI.MAIN_MENU);
};

// ReturnToGamePopup.js
/* jshint esversion: 6 */

var ReturnTogamePopup = pc.createScript("returnTogamePopup");

ReturnTogamePopup.prototype.initialize = function () {
  this.pad = this.entity.findByName("Pad");
  this.timer = this.entity.findByName("Text");
  this.backToGameTimeout = 3.0;
  this.backToGameTimerRunning = false;

  this.pad.element.opacity = GameConfig.getAttribute("padOpacity");
  this.assignEntityMethods();
};

ReturnTogamePopup.prototype.assignEntityMethods = function () {
  const scriptContext = this;

  this.entity.show = function () {
    this.enabled = true;

    scriptContext.backToGameTimerRunning = true;
    scriptContext.backToGameTimeout = 3.0;

    scriptContext.timer
      .tween(scriptContext.timer.getLocalScale())
      .to(new pc.Vec3(1, 1, 1), 1, pc.ElasticOut)
      .start();

    scriptContext.pad.element.opacity = 0.6;

    scriptContext.pad.element.opacity = 0;
    scriptContext.pad
      .tween(scriptContext.pad.element)
      .to({ opacity: GameConfig.getAttribute("padOpacity") }, 0.1, pc.Linear)
      .start();
  }.bind(this.entity);

  this.entity.hide = function () {
    this.enabled = false;
  }.bind(this.entity);

  this.entity.hideAnimated = function () {
    scriptContext.timer
      .tween(scriptContext.timer.getLocalScale())
      .to(new pc.Vec3(0, 0, 0), 0.2, pc.BackIn)
      .on("complete", () => {
        this.enabled = false;
      })
      .start();

    scriptContext.pad.element.opacity = GameConfig.getAttribute("padOpacity");
    scriptContext.pad
      .tween(scriptContext.pad.element)
      .to({ opacity: 0 }, 0.1, pc.Linear)
      .on("complete", () => {
        this.enabled = false;
      })
      .start();
  }.bind(this.entity);
};

ReturnTogamePopup.prototype.update = function (dt) {
  this.countTime(dt);
};

ReturnTogamePopup.prototype.countTime = function (dt) {
  if (this.backToGameTimerRunning) {
    if (this.backToGameTimeout > 0) {
      this.backToGameTimeout -= dt;

      const timerProgress = pc.math.clamp(
        Math.ceil(this.backToGameTimeout),
        0,
        3
      );
      this.timer.element.text = pc.math.clamp(timerProgress, 1, 3);
    } else {
      this.timerWasted();
    }
  }
};

ReturnTogamePopup.prototype.timerWasted = function () {
  this.backToGameTimerRunning = false;
  this.backToGameTimeout = 0;
  this.entity.hideAnimated();
  this.app.fire(EventTypes.GAMEPLAY_RESUME);
  if (window.famobi_analytics) {
    window.famobi_analytics.trackEvent("EVENT_RESUME");
  }
};

// LuckWheelLocation.js
/* jshint esversion: 6 */

var LuckWheelLocation = pc.createScript("luckWheelLocation");

LuckWheelLocation.attributes.add("numRevolutions", {
  type: "vec2",
  default: [10, 15],
});

LuckWheelLocation.attributes.add("spinTime", {
  type: "vec2",
  default: [1.5, 2.5],
});

LuckWheelLocation.attributes.add("prizeRewards", {
  type: "number",
  array: true,
});

LuckWheelLocation.attributes.add("prizeChances", {
  type: "number",
  array: true,
});

LuckWheelLocation.attributes.add("useSpinningCurve", {
  type: "boolean",
  default: false,
});

LuckWheelLocation.attributes.add("spinningCurve", {
  type: "curve",
  title: "Spinning Curve",
  curves: ["x"],
});

LuckWheelLocation.lastLuckWheelFreeSpin = 0;

LuckWheelLocation.prototype.initialize = function () {
  this.middle = this.entity.findByName("Middle");
  this.rewards = this.entity.findByName("Rewards");
  this.buttonClose = this.entity.findByName("CloseButton");
  this.buttonSpin = this.entity.findByName("ButtonSpin");
  this.buttonSpinGreyed = this.entity.findByName("ButtonSpinGreyed");
  this.iconAdGreyed = this.buttonSpinGreyed.findByName("IconAdGreyed");
  this.freeSpinText = this.entity.findByName("TextFreeSpin");
  this.nextFreeSpinText = this.entity.findByName("NextFreeSpinText");
  this.spinForAd = this.entity.findByName("IconAd");
  this.coinsCounter = this.entity.findByName("CoinsCounter");

  this.freeSpin = true;
  this.spinning = false;
  this.currentAngle = 0;
  this.targetAngle = 0;
  this.rewardAngle = 0;
  this.lastRoundReward = 0;

  LuckWheelLocation.lastLuckWheelFreeSpin = +(
    LocalStorageController.getSavedValue(
      Constants.Storage.LAST_LUCK_WHEEL_FREE_SPIN
    ) || 0
  );

  this.prizeRewards.forEach(
    (value, index) =>
      (this.rewards.findByName(`RewardText${index}`).element.text = `${value}`)
  );

  this.app.on(EventTypes.COINS_AMOUNT_CHANGED, this.updateCoinsValueText, this);
  this.app.on(
    EventTypes.UI.UNLOCK_LUCKY_WHEEL_COINS_COUNTER,
    this.unlockCoinsCounterTextField,
    this
  );

  BasicButton.assignAction(this.buttonClose, this.closeClicked, this);
  BasicButton.assignAction(this.buttonSpin, this.spinClicked, this);

  this.assignEntityMethods();
  this.checkFreeSpin();
  this.updateWheelStatus();
};

LuckWheelLocation.prototype.update = function (dt) {
  this.updateWheelStatus();
};

LuckWheelLocation.prototype.closeClicked = function () {
  if (!this.spinning) {
    this.entity.hide();
  }
};

LuckWheelLocation.prototype.spinClicked = function () {
  const doSpin = () => {
    if (!this.spinning) {
      this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.WHEEL_SPIN);

      this.buttonSpin.setLocalScale(1, 1, 1);
      this.buttonSpin
        .tween(this.buttonSpin.getLocalScale())
        .to(new pc.Vec3(1.2, 0.8, 1), 0.4, pc.BackOut)
        .yoyo(true)
        .repeat(2)
        .start();

      this.buttonSpinGreyed.setLocalScale(1, 1, 1);
      this.buttonSpinGreyed
        .tween(this.buttonSpinGreyed.getLocalScale())
        .to(new pc.Vec3(1.2, 0.8, 1), 0.4, pc.BackOut)
        .yoyo(true)
        .repeat(2)
        .start();

      if (this.freeSpin) {
        LuckWheelLocation.lastLuckWheelFreeSpin = new Date().getTime();
        this.app.fire(EventTypes.SAVE_APP);
      }

      this.setPrize();
      this.spinWheel();
    }
  };

  if (!this.spinning) {
    if (this.freeSpin) {
      doSpin();
    } else {
      if (Apicontroller.hasRewardedVideo()) {
        this.app.timeScale = 0;
        Apicontroller.showRewardedVideo((result) => {
          this.app.timeScale = 1;
          if (result.rewardGranted) {
            doSpin();
          }
        });
      }
    }
  }
};

LuckWheelLocation.prototype.assignEntityMethods = function () {
  const scriptContext = this;

  this.entity.show = function () {
    scriptContext.coinsCounter.actualizeCoinsValue();
    scriptContext.checkFreeSpin();
    scriptContext.updateWheelStatus();

    this.enabled = true;
    scriptContext.rewards.setLocalEulerAngles(0, 0, 0);
    scriptContext.currentAngle = 0;
    scriptContext.targetAngle = 0;

    scriptContext.middle.setLocalScale(0.5, 0.5, 0.5);
    scriptContext.middle
      .tween(scriptContext.middle.getLocalScale())
      .to(new pc.Vec3(1, 1, 1), 1, pc.ElasticOut)
      .start();
  }.bind(this.entity);

  this.entity.hide = function () {
    this.enabled = false;
  }.bind(this.entity);
};

LuckWheelLocation.prototype.updateWheelStatus = function () {
  this.freeSpinText.enabled = this.freeSpin;
  this.spinForAd.enabled = !this.freeSpin;
  this.nextFreeSpinText.enabled = !this.freeSpin;

  if (this.spinning) {
    this.buttonSpin.enabled = false;
    this.buttonSpinGreyed.enabled = true;
    this.iconAdGreyed.enabled =
      Apicontroller.hasRewardedVideo() &&
      !Apicontroller.hideRewardedUIIfNoVideoAvailable();
  } else {
    if (this.freeSpin) {
      this.buttonSpin.enabled = true;
      this.buttonSpinGreyed.enabled = false;
      this.iconAdGreyed.enabled =
        !Apicontroller.hideRewardedUIIfNoVideoAvailable();
    } else {
      if (Apicontroller.hasRewardedVideo()) {
        this.buttonSpin.enabled = true;
        this.buttonSpinGreyed.enabled = false;
        this.iconAdGreyed.enabled = true;
      } else {
        this.buttonSpin.enabled = false;
        this.buttonSpinGreyed.enabled = true; //!Apicontroller.hideRewardedUIIfNoVideoAvailable();
        this.iconAdGreyed.enabled =
          !Apicontroller.hideRewardedUIIfNoVideoAvailable();
      }
    }
  }

  const lastTimeStamp = LuckWheelLocation.lastLuckWheelFreeSpin;
  const elapsedMs = new Date().getTime() - lastTimeStamp;
  const elapsedHours = Math.floor(elapsedMs / 3600000);
  const elapsedMinutes = Math.floor(elapsedMs / 60000);
  const hoursToNextSpin = Math.floor((60 - elapsedMinutes) / 60);
  const minutesToNextSpin = Math.floor((60 - elapsedMinutes) % 60);
  this.nextFreeSpinText.element.text =
    LocalizationManager.getInstance().getLocalizedText(
      "NextFreeSpin",
      hoursToNextSpin,
      minutesToNextSpin
    );
  this.checkFreeSpin();
};

LuckWheelLocation.prototype.setPrize = function () {
  const prizeChance = Math.random();
  const prizeChancesSum = this.prizeChances.reduce(
    (sum, currentChance) => sum + currentChance,
    0
  );

  for (let nextChance = 0, i = 0; i < this.prizeChances.length; i++) {
    nextChance += this.prizeChances[i];

    if (prizeChance <= nextChance / prizeChancesSum) {
      this.rewardAngle = Math.floor(pc.math.random(60 * i + -23, 60 * i + 23));
      this.lastRoundReward = this.prizeRewards[i];
      break;
    }
  }
  this.coinsCounter.setCoinsValueFrozen(true);
  CoinsStorage.getInstance().addCoins(this.lastRoundReward, true);
};

LuckWheelLocation.prototype.checkFreeSpin = function () {
  const minute = 1000 * 60;
  const luckyWheelCooldown = 60 * minute;
  const currentTime = new Date().getTime();
  this.freeSpin =
    currentTime - LuckWheelLocation.lastLuckWheelFreeSpin > luckyWheelCooldown;
};

LuckWheelLocation.prototype.spinWheel = function () {
  this.spinning = true;
  this.currentAngle = this.currentAngle % 360;
  this.rewards.setLocalEulerAngles(0, 0, this.currentAngle);
  this.targetAngle =
    -360 *
      Math.floor(pc.math.random(this.numRevolutions.x, this.numRevolutions.y)) +
    this.rewardAngle;

  this.entity
    .tween(this)
    .to(
      { currentAngle: this.targetAngle },
      pc.math.random(this.spinTime.x, this.spinTime.y),
      (progress) =>
        this.useSpinningCurve
          ? this.spinningCurve.value(progress)
          : pc.CircularOut(progress)
    )
    .on("update", () => {
      this.rewards.setLocalEulerAngles(0, 0, this.currentAngle);
    })
    .on("complete", () => {
      this.rewards.setLocalEulerAngles(0, 0, this.targetAngle);
      setTimeout(() => {
        this.spinning = false;
        this.buttonSpin.element.useInput = true;
        this.checkFreeSpin();
        this.updateWheelStatus();
        this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.WHEEL_WIN);
        this.app.fire(
          EventTypes.UI.SET_COLLLECT_REWARD_POPUP_PARAMS,
          this.lastRoundReward,
          "LuckyWheel"
        );
        this.app.fire(
          EventTypes.SHOW_UI_WINDOW,
          Constants.UI.COLLECT_REWARD_POPUP,
          false
        );
      }, 700);
    })
    .start();
};

LuckWheelLocation.prototype.unlockCoinsCounterTextField = function () {
  this.coinsCounter.setCoinsValueFrozen(false);
};

// animationController.js
/* jshint esversion: 6 */
var AnimationController = pc.createScript("animationController");

AnimationController.prototype.initialize = function () {
  this.lastFrameCurrentTime = 0;
  this.lastAnimationKey = null;
  this.canTriggerEvent = true;
};

AnimationController.prototype.update = function (dt) {
  if (
    !this.entity.animation ||
    !this.entity.animation.enabled ||
    !this.entity.animation.currAnim
  ) {
    return;
  }

  const currentAnimationKey = this.entity.animation.currAnim;
  const loop = this.entity.animation.loop;
  const currentTime = this.entity.animation.currentTime;
  const duration = this.entity.animation.duration;

  if (currentAnimationKey === this.lastAnimationKey) {
    if (!loop) {
      if (currentTime === duration || this.lastFrameCurrentTime > currentTime) {
        if (this.canTriggerEvent) {
          this.entity.fire(EventTypes.ANIMATION_END, currentAnimationKey);
          this.canTriggerEvent = false;
        }
      }
    } else {
      if (this.lastFrameCurrentTime > currentTime) {
        this.entity.fire(EventTypes.ANIMATION_LOOP, currentAnimationKey);
      }

      this.canTriggerEvent = false;
    }
  } else {
    this.lastAnimationKey = currentAnimationKey;
    this.canTriggerEvent = true;
  }

  this.lastFrameCurrentTime = currentTime;
};

// DailyRewardsPopup.js
/* jshint esversion: 6 */

var DailyRewardsPopup = pc.createScript("dailyRewardsPopup");

DailyRewardsPopup.attributes.add("rewardGlowRotationSpeed", {
  type: "number",
  default: 90,
});

DailyRewardsPopup.lastLogin = 0;
DailyRewardsPopup.lastDailyReward = 0;

DailyRewardsPopup.prototype.initialize = function () {
  this.pad = this.entity.findByName("Pad");
  this.popUp = this.entity.findByName("Panel");
  this.buttonClose = this.entity.findByName("CloseButton");
  this.rewardsContainer = this.entity.findByName("RewardCellsContainer");
  this.rewardGlow = this.entity.findByName("RewardGlow");
  this.timeReset = this.entity.findByName("TimeReset");

  this.currentReward = 0;
  this.lastRewardIndex = 0;
  this.popupPending = false;
  this.collectRewardPending = false;

  this.initDailyRewardsData();
  this.assignEntityMethods();
  this.checkRewardAvailableness();

  this.app.on(
    EventTypes.UI.REQUEST_DAILY_REWARD_POPUP,
    this.showPopupOnFirstLogin,
    this
  );

  BasicButton.assignAction(this.buttonClose, this.closeClicked, this);
};

DailyRewardsPopup.prototype.update = function (dt) {
  this.animateRewardGlow(dt);
};

DailyRewardsPopup.prototype.closeClicked = function () {
  if (!this.collectRewardPending) {
    this.pad.element.opacity = GameConfig.getAttribute("padOpacity");
    this.pad.tween(this.pad.element).to({ opacity: 0 }, 0.1, pc.Linear).start();

    this.popUp.setLocalScale(1, 1, 1);
    this.popUp
      .tween(this.popUp.getLocalScale())
      .to(new pc.Vec3(0, 0, 0), 0.2, pc.BackIn)
      .on("complete", () => {
        this.entity.hide();
      })
      .start();
  }
};

DailyRewardsPopup.prototype.showPopupOnFirstLogin = function () {
  if (this.popupPending) {
    this.popupPending = false;
    if (!skipTitleScreen()) {
      setTimeout(() => this.entity.show(), 500);
    }
  }
};

DailyRewardsPopup.prototype.animateRewardGlow = function (dt) {
  if (this.rewardGlow) {
    this.rewardGlow.rotateLocal(0, 0, this.rewardGlowRotationSpeed * dt);
  }
};

DailyRewardsPopup.prototype.initDailyRewardsData = function () {
  this.dailyRewardsData = {
    rewards: [
      { type: "coins", value: 1000 },
      { type: "coins", value: 1500 },
      { type: "coins", value: 2000 },
      { type: "coins", value: 3000 },
      { type: "coins", value: 10000 },
    ],
  };
};

DailyRewardsPopup.prototype.checkRewardAvailableness = function () {
  const currentTime = new Date().getTime();
  const oneDayCooldown = 1000 * 60 * 60 * 24;
  DailyRewardsPopup.lastLogin = +(
    LocalStorageController.getSavedValue(Constants.Storage.LAST_LOGIN) || 0
  );
  DailyRewardsPopup.lastDailyReward = +(
    LocalStorageController.getSavedValue(Constants.Storage.LAST_DAILY_REWARD) ||
    0
  );

  if (
    currentTime >= DailyRewardsPopup.lastLogin + oneDayCooldown ||
    DailyRewardsPopup.lastDailyReward === 0
  ) {
    DailyRewardsPopup.lastLogin = currentTime;
    DailyRewardsPopup.lastDailyReward =
      (DailyRewardsPopup.lastDailyReward % 5) + 1;
    this.popupPending = true;
    this.collectRewardPending = true;
    this.app.fire(EventTypes.SAVE_APP);
  }
};

DailyRewardsPopup.prototype.updateDailyRewards = function () {
  const checkMarks = [];

  this.rewardsContainer.children.forEach((day, index) => {
    const rewardDay = day.findByName("CellTitle");
    rewardDay.element.text = LocalizationManager.getInstance().getLocalizedText(
      "DayCount",
      index + 1
    );
    const reward = day.findByName("Reward");
    reward.element.text = this.currentReward =
      this.dailyRewardsData.rewards[index].value;

    const checkMark = day.findByName("CheckMarkIcon");
    checkMark.enabled =
      index < DailyRewardsPopup.lastDailyReward ? true : false;

    if (checkMark.enabled) {
      checkMarks.push(checkMark);
      this.lastRewardIndex = index;
    }
  });

  if (checkMarks.length > 0) {
    const lastCheckMark = checkMarks[checkMarks.length - 1];

    lastCheckMark.setLocalScale(1, 0, 0);
    lastCheckMark
      .tween(lastCheckMark.getLocalScale())
      .to(new pc.Vec3(1, 1, 1), 0.8, pc.ElasticOut)
      .delay(0.5)
      .on("complete", () => {
        if (this.collectRewardPending) {
          this.app.fire(
            EventTypes.UI.SET_COLLLECT_REWARD_POPUP_PARAMS,
            this.dailyRewardsData.rewards[this.lastRewardIndex].value
          );
          this.app.fire(
            EventTypes.SHOW_UI_WINDOW,
            Constants.UI.COLLECT_REWARD_POPUP,
            false
          );
          this.collectRewardPending = false;
        }
      })
      .start();
  }
};

DailyRewardsPopup.prototype.assignEntityMethods = function () {
  const scriptContext = this;

  this.entity.show = function () {
    this.enabled = true;
    scriptContext.updateDailyRewards();

    scriptContext.popUp.setLocalScale(0, 0, 0);
    scriptContext.popUp
      .tween(scriptContext.popUp.getLocalScale())
      .to(new pc.Vec3(1, 1, 1), 1, pc.ElasticOut)
      .start();

    scriptContext.pad.element.opacity = 0;
    scriptContext.pad
      .tween(scriptContext.pad.element)
      .to({ opacity: GameConfig.getAttribute("padOpacity") }, 0.1, pc.Linear)
      .start();
  }.bind(this.entity);

  this.entity.hide = function () {
    this.enabled = false;
  }.bind(this.entity);
};

// GameplayLocation.js
/* jshint esversion: 6 */

var GameplayLocation = pc.createScript("gameplayLocation");

GameplayLocation.prototype.initialize = function () {
  this.buttonPause = this.entity.findByName("PauseButton");

  BasicButton.assignAction(this.buttonPause, this.pauseClicked, this);

  this.assignEntityMethods();
};

GameplayLocation.prototype.assignEntityMethods = function () {
  const scriptContext = this;

  this.entity.show = function () {
    this.enabled = true;
    this._app.fire(EventTypes.PLAY_MUSIC, Constants.AUDIO.MUSIC_GAMEPLAY);
  }.bind(this.entity);

  this.entity.hide = function () {
    this.enabled = false;
  }.bind(this.entity);
};

GameplayLocation.prototype.update = function (dt) {
  this.buttonPause.enabled = !isExternalPause();
};

GameplayLocation.prototype.pauseClicked = function () {
  this.app.fire(EventTypes.GAMEPLAY_PAUSE);
  this.app.fire(EventTypes.SHOW_UI_WINDOW, Constants.UI.GIVE_UP_POPUP, false);
};

// CollectRewardPopup.js
/* jshint esversion: 6 */

var CollectRewardPopup = pc.createScript("collectRewardPopup");

CollectRewardPopup.prototype.initialize = function () {
  this.pad = this.entity.findByName("Pad");
  this.popUp = this.entity.findByName("Panel");
  this.rewardIcon = this.entity.findByName("RewardIcon");
  this.rewardText = this.entity.findByName("RewardText");
  this.buttonClaim = this.entity.findByName("ButtonClaim");

  this.pad.element.opacity = GameConfig.getAttribute("padOpacity");
  this.currentReward = 0;
  this.lockCoinsCounter = false;

  this.claimClickedCallback = null;

  this.assignEntityMethods();

  this.app.on(
    EventTypes.UI.SET_COLLLECT_REWARD_POPUP_PARAMS,
    this.setCurrentParams,
    this
  );

  BasicButton.assignAction(this.buttonClaim, this.claimClicked, this);
};

CollectRewardPopup.prototype.update = function (dt) {};

CollectRewardPopup.prototype.claimClicked = function () {
  this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.REWARD_COLLECTED);

  if (this.lockCoinsCounter) {
    this.app.fire(EventTypes.UI.UNLOCK_LUCKY_WHEEL_COINS_COUNTER);
  } else {
    CoinsStorage.getInstance().addCoins(this.currentReward, true);
  }

  this.rewardIcon
    .tween(this.rewardIcon.getLocalScale())
    .to(new pc.Vec3(0.5, 0.5, 0.5), 0.4, pc.ExponentialIn)
    .start();

  this.rewardIcon
    .tween(this.rewardIcon.getLocalPosition())
    .to(new pc.Vec3(150, 500, 0), 0.4, pc.ExponentialIn)
    .start();

  this.rewardIcon
    .tween(this.rewardIcon.element)
    .to({ opacity: 0 }, 0.4, pc.ExponentialIn)
    .on("complete", () => {
      this.pad.element.opacity = GameConfig.getAttribute("padOpacity");
      this.pad
        .tween(this.pad.element)
        .to({ opacity: 0 }, 0.1, pc.Linear)
        .start();

      this.popUp.setLocalScale(1, 1, 1);
      this.popUp
        .tween(this.popUp.getLocalScale())
        .to(new pc.Vec3(0, 0, 0), 0.2, pc.BackIn)
        .on("complete", () => {
          this.entity.hide();
          if (this.claimClickedCallback) {
            this.claimClickedCallback();
          }
        })
        .start();
    })
    .start();
};

CollectRewardPopup.prototype.setCurrentParams = function (
  reward,
  lockCoinsCounter,
  claimedCallback
) {
  this.currentReward = reward;
  this.lockCoinsCounter = lockCoinsCounter;
  this.rewardText.element.text = "x" + this.currentReward;
  this.claimClickedCallback = claimedCallback || null;
};

CollectRewardPopup.prototype.assignEntityMethods = function () {
  const scriptContext = this;

  this.entity.show = function () {
    this.enabled = true;
    scriptContext.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.REWARD_SHOWN);

    scriptContext.popUp.setLocalScale(0, 0, 0);
    scriptContext.popUp
      .tween(scriptContext.popUp.getLocalScale())
      .to(new pc.Vec3(1, 1, 1), 1, pc.ElasticOut)
      .start();

    scriptContext.pad.element.opacity = 0;
    scriptContext.pad
      .tween(scriptContext.pad.element)
      .to({ opacity: GameConfig.getAttribute("padOpacity") }, 0.1, pc.Linear)
      .start();

    scriptContext.rewardIcon.setLocalScale(1, 1, 1);
    scriptContext.rewardIcon.setLocalPosition(150, 150, 0);
    scriptContext.rewardIcon.element.opacity = 1;
  }.bind(this.entity);

  this.entity.hide = function () {
    this.enabled = false;
  }.bind(this.entity);
};

// characterShadowController.js
/* jshint esversion: 6 */
var CharacterShadowController = pc.createScript("characterShadowController");

CharacterShadowController.attributes.add("shadowScaleBounds", {
  type: "vec2",
  default: [0.25, 1],
});

CharacterShadowController.prototype.initialize = function () {
  this.shadowContainer = this.entity.findByName("CharacterShadowContainer");
  this.webGL2Supported = !!pc.app.graphicsDevice.webgl2;

  this.legacyShadow = this.shadowContainer.findByName("OmNomShadowWebgl1");
  this.legacyShadow.enabled = false;
  this.webgl2Shadow = this.shadowContainer.findByName("OmNomShadow");
  this.webgl2Shadow.enabled = false;

  this.shadow = this.webGL2Supported ? this.webgl2Shadow : this.legacyShadow;
  this.shadow.enabled = true;
};

CharacterShadowController.prototype.update = function (dt) {
  if (this.entity.level.gameState.isGameRunningOrIdle()) {
    this.updateShadowVisibility();
    this.updateShadowPositionAndScale();
  }
};

CharacterShadowController.prototype.updateShadowVisibility = function () {
  if (
    this.entity.checkMovementState(CharacterMovementState.FALLING_INTO_HOLE) ||
    this.entity.level.gameState.isSpaceFlyActive()
  ) {
    this.shadowContainer.enabled = false;
  } else {
    this.shadowContainer.enabled = true;
  }
};

CharacterShadowController.prototype.updateShadowPositionAndScale = function () {
  const verticalDistanceToCharacter =
    this.shadowContainer.getPosition().y -
    this.entity.characterContainer.getPosition().y;
  const shadowScale = pc.math.clamp(
    1 -
      (Math.abs(verticalDistanceToCharacter) /
        GameConfig.getAttribute("jumpHeight")) *
        0.4,
    this.shadowScaleBounds.x,
    this.shadowScaleBounds.y
  );
  this.shadowContainer.setLocalScale(shadowScale, shadowScale, shadowScale);
};

// CharacterUpgradeLocation.js
/* jshint esversion: 6 */

var CharacterUpgradeLocation = pc.createScript("characterUpgradeLocation");

CharacterUpgradeLocation.prototype.initialize = function () {
  this.characterPreviewScene = this.app.root.findByName(
    "CharacterPreviewScene"
  );
  this.buttonClose = this.entity.findByName("CloseButton");
  this.characterName = this.entity.findByName("CharacterName");
  this.characterAvatar =
    this.characterPreviewScene.findByName("CharactersModels");
  this.buttonPrevious = this.entity.findByName("ButtonPrevious");
  this.buttonNext = this.entity.findByName("ButtonNext");

  this.stunts = ["Stunt1", "Stunt2", "Stunt3"].map((key) =>
    this.entity.findByName(key)
  );
  this.stuntIcons = this.stunts.map((stuntItem) =>
    stuntItem.findByName("Pad").findByName("Icon")
  );
  this.labels = this.stunts.map((stuntItem) =>
    stuntItem.findByName("Label").findByName("Text")
  );
  this.upgradeGroups = this.stunts.map((stuntItem) =>
    stuntItem.findByName("UpgradeGroup")
  );
  this.fullBars = this.stunts.map((stuntItem) =>
    stuntItem.findByName("FullBars")
  );
  this.prices = this.stunts.map((stuntItem) => stuntItem.findByName("Price"));
  this.buttonsUpgradeAvailable = this.stunts.map((stuntItem) =>
    stuntItem.findByName("ButtonUpgradeAvailable")
  );
  this.iconAvailable = this.buttonsUpgradeAvailable.map((buttonItem) =>
    buttonItem.findByName("Icon")
  );
  this.buttonsUpgradeNonAvailables = this.stunts.map((stuntItem) =>
    stuntItem.findByName("ButtonUpgradeNonAvailable")
  );
  this.buttonsMaxed = this.stunts.map((stuntItem) =>
    stuntItem.findByName("ButtonMaxed")
  );

  this.buttonUnlock = this.entity.findByName("ButtonUnlock");
  this.buttonUnlockText = this.buttonUnlock.findByName("Text");
  this.buttonUnlockUnavailable = this.entity.findByName(
    "ButtonUnlockUnavailable"
  );
  this.buttonUnlockUnavailableText =
    this.buttonUnlockUnavailable.findByName("Text");

  this.assignEntityMethods();

  this.setCurrentCharacterByKey(
    CharactersManager.getInstance().getActiveCharacter()
  );

  this.app.on(EventTypes.COINS_AMOUNT_CHANGED, this.onCoinsAmountChanged, this);

  BasicButton.assignAction(this.buttonClose, this.closeClicked, this);
  BasicButton.assignAction(this.buttonPrevious, this.previousClicked, this);
  BasicButton.assignAction(this.buttonNext, this.nextClicked, this);
  BasicButton.assignAction(this.buttonUnlock, this.unlockClicked, this);
  BasicButton.assignAction(
    this.buttonUnlockUnavailable,
    this.requestAdditionalCoins,
    this
  );
  BasicButton.assignAction(
    this.buttonsUpgradeAvailable[0],
    () => this.upgradeClicked(0),
    this
  );
  BasicButton.assignAction(
    this.buttonsUpgradeAvailable[1],
    () => this.upgradeClicked(1),
    this
  );
  BasicButton.assignAction(
    this.buttonsUpgradeAvailable[2],
    () => this.upgradeClicked(2),
    this
  );
  this.buttonsUpgradeNonAvailables.forEach((button) =>
    BasicButton.assignAction(button, this.requestAdditionalCoins, this)
  );
};

CharacterUpgradeLocation.prototype.update = function (dt) {};

CharacterUpgradeLocation.prototype.onCoinsAmountChanged = function (
  coinsValue
) {
  if (this.entity.enabled) {
    this.updateData();
  }
};

CharacterUpgradeLocation.prototype.setCurrentCharacterByKey = function (
  characterkey
) {
  this.currentCharacterKey = characterkey;
  this.currentCharacter = CharactersManager.getInstance()
    .getCharactersConfig()
    .characters.find((character) => character.key === this.currentCharacterKey);
  if (!this.currentCharacter) {
  }
};

CharacterUpgradeLocation.prototype.playCharacterSpecialSound = function () {
  const enabledEntity = this.characterAvatar.children.find(
    (entity) => entity.enabled
  );
  if (
    enabledEntity &&
    enabledEntity.sound &&
    enabledEntity.sound.slot("specialSound") &&
    SoundController.sfxEnabled
  ) {
    enabledEntity.sound.play("specialSound");
  }
};

CharacterUpgradeLocation.prototype.previousClicked = function () {
  const currentCharacterIndex = pc.math.clamp(
    CharactersManager.getInstance()
      .getCharactersConfig()
      .characters.indexOf(this.currentCharacter),
    0,
    CharactersManager.getInstance().getCharactersConfig().characters.length - 1
  );
  const nextCharacterIndex =
    (currentCharacterIndex ||
      CharactersManager.getInstance().getCharactersConfig().characters.length) -
    1;
  const nextCharacterKey =
    CharactersManager.getInstance().getCharactersConfig().characters[
      nextCharacterIndex
    ].key;
  this.setCurrentCharacterByKey(nextCharacterKey);
  this.updateData();
  this.playCharacterSpecialSound();
};

CharacterUpgradeLocation.prototype.nextClicked = function () {
  const currentCharacterIndex = pc.math.clamp(
    CharactersManager.getInstance()
      .getCharactersConfig()
      .characters.indexOf(this.currentCharacter),
    0,
    CharactersManager.getInstance().getCharactersConfig().characters.length - 1
  );
  const nextCharacterIndex =
    (currentCharacterIndex + 1) %
    CharactersManager.getInstance().getCharactersConfig().characters.length;
  const nextCharacterKey =
    CharactersManager.getInstance().getCharactersConfig().characters[
      nextCharacterIndex
    ].key;
  this.setCurrentCharacterByKey(nextCharacterKey);
  this.updateData();
  this.playCharacterSpecialSound();
};

CharacterUpgradeLocation.prototype.upgradeClicked = function (index) {
  const stuntsLevels = this.getCurrentCharacterState().levels;
  const currentStuntLevel = stuntsLevels[index];
  const stuntUpgradePrice =
    this.currentCharacter.stunts[index].prices[currentStuntLevel];

  if (currentStuntLevel >= 9) {
    return;
  }

  if (CoinsStorage.getInstance().hasEnoughCoins(stuntUpgradePrice)) {
    this.app.fire(
      EventTypes.CHARACTER_SKILL_LEVEL_UPGRADED,
      this.currentCharacterKey,
      index,
      currentStuntLevel + 1
    );
    CoinsStorage.getInstance().decreaseCoins(stuntUpgradePrice);
    this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.STUNT_UPGRADE);
    this.updateData();
  } else {
  }
};

CharacterUpgradeLocation.prototype.requestAdditionalCoins = function () {
  if (Apicontroller.hasRewardedVideo()) {
    this.app.fire(
      EventTypes.SHOW_UI_WINDOW,
      Constants.UI.NOT_ENOUGH_COINS_POPUP,
      false
    );
  }
};

CharacterUpgradeLocation.prototype.unlockClicked = function () {
  const currentCharacterState = this.getCurrentCharacterState();
  if (!currentCharacterState) {
    famobi.log("Can't unlock character: saved character data not found");
    return;
  }

  if (CoinsStorage.getInstance().hasEnoughCoins(this.currentCharacter.unlock)) {
    this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.REWARD_COLLECTED);
    this.app.fire(EventTypes.CHARACTER_UNLOCKED, this.currentCharacter.key);
    CoinsStorage.getInstance().decreaseCoins(this.currentCharacter.unlock);
  }
  this.updateData();
};

CharacterUpgradeLocation.prototype.getCurrentCharacterState = function () {
  return CharactersManager.getInstance().getCharactersData()[
    this.currentCharacterKey
  ];
};

CharacterUpgradeLocation.prototype.updateData = function () {
  const currentCharacterState = this.getCurrentCharacterState();

  this.characterName.element.text = LocalizationManager.getInstance()
    .getLocalizedText(this.currentCharacter.key)
    .toUpperCase();
  this.characterAvatar.children.forEach(
    (avatar) => (avatar.enabled = avatar.name === this.currentCharacter.avatar)
  );

  const stuntsLevels = currentCharacterState.levels;
  const purchased = currentCharacterState.purchased;

  for (let i = 0; i < stuntsLevels.length; i++) {
    const currentStuntLevel = stuntsLevels[i];
    const stuntPrices = this.currentCharacter.stunts[i].prices;
    const unlockPrice = this.currentCharacter.unlock;
    const stuntPrice = stuntPrices[currentStuntLevel];

    const stuntIconAsset = this.app.assets.find(
      this.currentCharacter.stunts[i].icon,
      "sprite"
    );
    const stuntIcon = this.stuntIcons[i];
    stuntIcon.element.spriteAsset = stuntIconAsset.id;

    this.prices[i].element.text = stuntPrice;
    this.fullBars[i].children.forEach(
      (cell, index) => (cell.enabled = index <= stuntsLevels[i])
    );
    this.labels[i].element.text = stuntsLevels[i] + 1;

    this.upgradeGroups[i].enabled = purchased;
    this.buttonUnlockText.element.text =
      LocalizationManager.getInstance().getLocalizedText("Unlock") +
      ` ${unlockPrice}`;
    this.buttonUnlock.enabled =
      !purchased && CoinsStorage.getInstance().hasEnoughCoins(unlockPrice);
    this.buttonUnlockUnavailableText.element.text =
      LocalizationManager.getInstance().getLocalizedText("Unlock") +
      ` ${unlockPrice}`;
    this.buttonUnlockUnavailable.enabled =
      !purchased && !CoinsStorage.getInstance().hasEnoughCoins(unlockPrice);

    if (stuntsLevels[i] < 9) {
      this.prices[i].enabled = true;
      this.buttonsUpgradeAvailable[i].enabled =
        CoinsStorage.getInstance().hasEnoughCoins(stuntPrice);
      this.buttonsUpgradeNonAvailables[i].enabled =
        !CoinsStorage.getInstance().hasEnoughCoins(stuntPrice);
      this.buttonsMaxed[i].enabled = false;
    } else {
      this.prices[i].enabled = false;
      this.buttonsUpgradeAvailable[i].enabled = false;
      this.buttonsUpgradeNonAvailables[i].enabled = false;
      this.buttonsMaxed[i].enabled = true;
    }
  }
};

CharacterUpgradeLocation.prototype.assignEntityMethods = function () {
  const scriptContext = this;

  this.entity.show = function () {
    this.enabled = true;
    scriptContext.updateData(scriptContext.characterIndex);

    this.setLocalScale(0.85, 0.85, 0.85);
    this.tween(this.getLocalScale())
      .to(new pc.Vec3(1, 1, 1), 0.25, pc.BackOut)
      .start();
  }.bind(this.entity);

  this.entity.hide = function () {
    this.enabled = false;
  }.bind(this.entity);
};

CharacterUpgradeLocation.prototype.closeClicked = function () {
  if (this.getCurrentCharacterState().purchased) {
    this.app.fire(EventTypes.SELECT_ACTIVE_CHARACTER, this.currentCharacterKey);
  }

  this.app.fire(EventTypes.SHOW_UI_WINDOW, Constants.UI.MAIN_MENU);
};

// StuntChampionshipLocation.js
/* jshint esversion: 6 */

var StuntChampionshipLocation = pc.createScript("stuntChampionshipLocation");

StuntChampionshipLocation.attributes.add("rewards", {
  type: "number",
  array: true,
});

StuntChampionshipLocation.attributes.add("scoresGoals", {
  type: "number",
  array: true,
});

StuntChampionshipLocation.attributes.add("leaderboardSpotTemplate", {
  type: "asset",
  assetType: "template",
});

StuntChampionshipLocation.stuntsLeaderboard = null;
StuntChampionshipLocation.stuntsLeaderboardCreationTime = 0;

StuntChampionshipLocation.prototype.initialize = function () {
  this.leaderboard = this.entity.findByName("LeaderBoard");
  this.scrollBar = this.entity.findByName("VerticalScrollbar");
  this.buttonClose = this.entity.findByName("CloseButton");
  this.timer = this.entity.findByName("TimerText");

  BasicButton.assignAction(this.buttonClose, this.closeClicked, this);

  this.initLeaderboardData();
  this.assignEntityMethods();
  // this.createLeaderboard();

  this.setScrollbarVisibilityDependingOnPlatform();

  this.app.on(
    EventTypes.UI.UPDATE_STUNTS_LEADERBOARD,
    this.updateStuntsLeaderboard,
    this
  );
};

StuntChampionshipLocation.prototype.postInitialize = function () {
  StuntController.stuntsBestScores = +(
    LocalStorageController.getSavedValue(
      Constants.Storage.STUNTS_BEST_SCORES
    ) || 0
  );
};

StuntChampionshipLocation.prototype.updateStuntsLeaderboard = function (
  skipProgressCheck
) {
  const stuntsLeaderboard = LocalStorageController.getSavedValue(
    Constants.Storage.STUNTS_LEADERBOARD
  );

  if (stuntsLeaderboard) {
    const currentPlayerPosition = stuntsLeaderboard.findIndex(
      (character) => character.name === "You"
    );

    /* set player scores */
    stuntsLeaderboard.forEach((character) => {
      if (character.name === "You") {
        character.score = StuntController.stuntsBestScores;
      }
    });

    /* sort leaderboard */
    stuntsLeaderboard.sort((elemA, elemB) => {
      return elemB.score - elemA.score;
    });

    const nextPlayerPosition = stuntsLeaderboard.findIndex(
      (character) => character.name === "You"
    );

    if (!skipProgressCheck && !hasExternalLeaderboard()) {
      if (nextPlayerPosition < currentPlayerPosition) {
        setTimeout(
          () =>
            this.app.fire(
              EventTypes.SHOW_UI_WINDOW,
              Constants.UI.STUNT_CHAMPIONSHIP_LOCATION,
              false
            ),
          0
        );

        let rewardsSum = 0;
        for (let i = currentPlayerPosition; i >= nextPlayerPosition; i--) {
          if (+stuntsLeaderboard[i].reward > 0) {
            rewardsSum += +stuntsLeaderboard[i].reward;
          }
        }
        if (rewardsSum > 0) {
          CoinsStorage.getInstance().addCoins(rewardsSum, true);
          this.app.fire(
            EventTypes.UI.SET_COLLLECT_REWARD_POPUP_PARAMS,
            rewardsSum
          );
          setTimeout(
            () =>
              this.app.fire(
                EventTypes.SHOW_UI_WINDOW,
                Constants.UI.COLLECT_REWARD_POPUP,
                false
              ),
            750
          );
        }
      }
    }

    this.app.fire(
      EventTypes.UI.SET_CURRENT_STUNTS_LEADERBOARD_RANK,
      nextPlayerPosition
    );
  }
};

StuntChampionshipLocation.prototype.update = function (dt) {
  const currentTime = new Date().getTime();
  const lastGenerationTime =
    StuntChampionshipLocation.stuntsLeaderboardCreationTime || 0;
  const timeLeft = 86400000 - (currentTime - lastGenerationTime);
  // this.timer.element.text = `Time left: ` + (timeLeft < 3600000 ? Utils.humanizeTimeWithMinutes(timeLeft / 1000) : Utils.humanizeTimeWithHours(timeLeft / 1000));

  this.timer.element.text =
    LocalizationManager.getInstance().getLocalizedText("StuntTimeLeft") +
    " " +
    (timeLeft < 3600000
      ? Utils.humanizeTimeWithMinutes(timeLeft / 1000)
      : Utils.humanizeTimeWithHours(timeLeft / 1000));

  if (this.entity.enabled && timeLeft <= 0) {
    StuntChampionshipLocation.stuntsLeaderboardCreationTime = currentTime;
    StuntController.stuntsBestScores = 0;
    StuntController.currentStuntScores = 0;

    this.app.fire(EventTypes.SAVE_APP);

    this.checkMainCharacter();
    this.createLeaderboard();
    this.updateStuntsLeaderboard(true);
    this.scrollToPlayerAvatar();
  }
};

StuntChampionshipLocation.prototype.initLeaderboardData = function () {
  const originalLeaderBoard = [
    {
      name: "Boo",
      avatar: "Leaderboard_Avatar_Boo.png",
    },

    {
      name: "Cheddar",
      avatar: "Leaderboard_Avatar_Cheddar.png",
    },

    {
      name: "Doggy Granny",
      avatar: "Leaderboard_Avatar_DoggyGranny.png",
    },

    {
      name: "Ferret",
      avatar: "Leaderboard_Avatar_Ferret.png",
    },

    {
      name: "Gekko",
      avatar: "Leaderboard_Avatar_Gekko.png",
    },

    {
      name: "Hyena",
      avatar: "Leaderboard_Avatar_Hyena.png",
    },

    {
      name: "Lick",
      avatar: "Leaderboard_Avatar_Lick.png",
    },

    {
      name: "Om Nelle",
      avatar: "Leaderboard_Avatar_OmNelle.png",
    },

    {
      name: "Om Nom",
      avatar: "Leaderboard_Avatar_OmNom.png",
    },

    {
      name: "RoboKid",
      avatar: "Leaderboard_Avatar_Robokid.png",
    },

    {
      name: "Sheep",
      avatar: "Leaderboard_Avatar_Sheep.png",
    },

    {
      name: "Snowman",
      avatar: "Leaderboard_Avatar_Snowman.png",
    },

    {
      name: "Space Cowgirl",
      avatar: "Leaderboard_Avatar_SpaceCowgirl.png",
    },

    {
      name: "Spider",
      avatar: "Leaderboard_Avatar_Spider.png",
    },

    {
      name: "SwordKid",
      avatar: "Leaderboard_Avatar_SwordKid.png",
    },

    {
      name: "TechKid",
      avatar: "Leaderboard_Avatar_TechKid.png",
    },
    {
      name: "You",
      avatar: "Leaderboard_Avatar_OmNom.png",
    },
  ];

  const loadedData = LocalStorageController.getSavedValue(
    Constants.Storage.STUNTS_LEADERBOARD
  );
  const lastLeaderboardCreatedAt = LocalStorageController.getSavedValue(
    Constants.Storage.STUNTS_LEADERBOARD_CREATION_TIME
  );
  const currentTime = new Date().getTime();

  if (
    loadedData &&
    lastLeaderboardCreatedAt &&
    currentTime - lastLeaderboardCreatedAt < 86400000
  ) {
    StuntChampionshipLocation.stuntsLeaderboard = loadedData;
    StuntChampionshipLocation.stuntsLeaderboardCreationTime = +(
      LocalStorageController.getSavedValue(
        Constants.Storage.STUNTS_LEADERBOARD_CREATION_TIME
      ) || new Date().getTime()
    );
  } else {
    const scoresValues = [];
    for (let i = 0; i < this.scoresGoals.length; i++) {
      const nextScoresValue = Math.floor(
        pc.math.random(this.scoresGoals[i] * 0.95, this.scoresGoals[i] * 1.05) *
          CharactersManager.getInstance().getMaxUnlockedStuntLevel()
      );
      scoresValues.push(nextScoresValue);
    }

    Utils.shuffle(scoresValues);
    scoresValues.push(0);

    originalLeaderBoard.forEach((record, index) => {
      record.score = scoresValues[index];
    });

    StuntChampionshipLocation.stuntsLeaderboard = originalLeaderBoard;
    StuntChampionshipLocation.stuntsLeaderboard.sort((elemA, elemB) => {
      return elemB.score - elemA.score;
    });

    StuntChampionshipLocation.stuntsLeaderboard.forEach((element, index) => {
      if (this.rewards[index] > 0) {
        element.reward = this.rewards[index];
      }
    });

    StuntChampionshipLocation.stuntsLeaderboardCreationTime = currentTime;

    this.app.fire(EventTypes.SAVE_APP);
  }
};

StuntChampionshipLocation.prototype.checkMainCharacter = function () {
  StuntChampionshipLocation.stuntsLeaderboard.forEach((record) => {
    if (record.name === "You") {
      record.score = StuntController.stuntsBestScores;
      this.app.fire(EventTypes.SAVE_APP);
    }
  });
};

StuntChampionshipLocation.prototype.assignEntityMethods = function () {
  const scriptContext = this;

  this.entity.show = function () {
    this.enabled = true;

    scriptContext.checkMainCharacter();
    scriptContext.createLeaderboard();
    scriptContext.updateStuntsLeaderboard(true);
    scriptContext.scrollToPlayerAvatar();
  }.bind(this.entity);

  this.entity.hide = function () {
    this.enabled = false;
  }.bind(this.entity);
};

// StuntChampionshipLocation.prototype.stuntsRewardIsObtained = function() {
//     this.showRestartLocation = true;
// };

StuntChampionshipLocation.prototype.createLeaderboard = function () {
  const setPadColorLight = (pad) =>
    (pad.element.color = new pc.Color().fromString("#3AA6F0"));
  const setPadColorDark = (pad) =>
    (pad.element.color = new pc.Color().fromString("#3C8EDE"));
  const setPadColorPlayer = (pad) =>
    (pad.element.color = new pc.Color().fromString("#943DEB"));

  StuntChampionshipLocation.stuntsLeaderboard.sort((elemA, elemB) => {
    return elemB.score - elemA.score;
  });

  while (this.leaderboard.children.length > 0) {
    this.leaderboard.children[0].destroy();
  }

  for (let i = 0; i < StuntChampionshipLocation.stuntsLeaderboard.length; i++) {
    const nextLeaderboardSpot =
      this.leaderboardSpotTemplate.resource.instantiate();
    nextLeaderboardSpot.reparent(this.leaderboard);
    nextLeaderboardSpot.enabled = true;

    const nextLeaderboardSpotPosition = nextLeaderboardSpot.getLocalPosition();
    nextLeaderboardSpot.setLocalPosition(
      nextLeaderboardSpotPosition.x,
      nextLeaderboardSpotPosition.y - 85 * i,
      nextLeaderboardSpotPosition.z
    );

    const padsList = nextLeaderboardSpot.children.map((childElement) =>
      childElement.findByName("Pad")
    );
    padsList.forEach(
      StuntChampionshipLocation.stuntsLeaderboard[i].name === "You"
        ? setPadColorPlayer
        : i % 2 === 0
        ? setPadColorLight
        : setPadColorDark
    );

    const characterPlace = nextLeaderboardSpot.findByName("CharacterPlace");
    characterPlace.element.text = i + 1;

    const characterName = nextLeaderboardSpot.findByName("CharacterName");
    characterName.element.text =
      StuntChampionshipLocation.stuntsLeaderboard[i].name;

    const characterAvatar = nextLeaderboardSpot.findByName("CharacterAvatar");
    characterAvatar.element.spriteAsset = this.app.assets.find(
      StuntChampionshipLocation.stuntsLeaderboard[i].avatar,
      "sprite"
    ).id;

    const characterScore = nextLeaderboardSpot.findByName("TotalScore");
    characterScore.element.text =
      StuntChampionshipLocation.stuntsLeaderboard[i].score;

    const reward = nextLeaderboardSpot.findByName("Reward");
    const iconReward = nextLeaderboardSpot.findByName("IconCoin");
    reward.enabled = iconReward.enabled =
      StuntChampionshipLocation.stuntsLeaderboard[i].reward > 0;
    reward.element.text = StuntChampionshipLocation.stuntsLeaderboard[i].reward;

    this.leaderboard.element.height = 85 * (i + 1);
  }
};

StuntChampionshipLocation.prototype.closeClicked = function () {
  this.entity.hide();
};

StuntChampionshipLocation.prototype.setScrollbarVisibilityDependingOnPlatform =
  function () {
    const scrollbarAnchor = this.scrollBar.element.anchor;
    scrollbarAnchor.x = scrollbarAnchor.z = pc.platform.desktop ? 1 : 0;
    this.scrollBar.element.anchor = scrollbarAnchor;
  };

StuntChampionshipLocation.prototype.scrollToPlayerAvatar = function () {
  const playerIndex = StuntChampionshipLocation.stuntsLeaderboard.findIndex(
    (element) => element.name === "You"
  );
  const scrollPosition = pc.math.clamp(
    playerIndex / (StuntChampionshipLocation.stuntsLeaderboard.length - 1),
    0,
    1
  );
  this.scrollBar.scrollbar.value = scrollPosition;
};

// CharacterOneRunLocation.js
/* jshint esversion: 6 */

var CharacterOneRunLocation = pc.createScript("characterOneRunLocation");

CharacterOneRunLocation.prototype.initialize = function () {
  this.characterPreviewScene = this.app.root.findByName(
    "CharacterPreviewScene"
  );
  this.characterModels =
    this.characterPreviewScene.findByName("CharactersModels");
  this.buttonClose = this.entity.findByName("CloseButton");
  this.characterName = this.entity.findByName("CharacterName");
  this.reward = this.entity.findByName("Reward");
  this.buttonOneRun = this.entity.findByName("ButtonOneRun");
  this.buttonOneGreyed = this.entity.findByName("ButtonOneRunGreyed");
  this.unlockPrice = this.entity.findByName("ButtonUnlock").findByName("Text");
  this.rewardValue = 3000;
  this.currentCharacterKey = null;
  this.characterObtained = false;

  this.assignEntityMethods();

  this.app.on(
    EventTypes.UI.SELECT_CHARACTER_IN_CHARACTER_PREVIEW_SCENE,
    this.selectCharacter,
    this
  );

  BasicButton.assignAction(this.buttonOneRun, this.onOneRunClicked, this);
  BasicButton.assignAction(this.buttonClose, this.closeClicked, this);
};

CharacterOneRunLocation.prototype.update = function (dt) {
  this.buttonOneRun.enabled =
    !this.characterObtained && Apicontroller.hasRewardedVideo();
  this.buttonOneGreyed.enabled = !this.buttonOneRun.enabled;
};

CharacterOneRunLocation.prototype.assignEntityMethods = function () {
  const scriptContext = this;

  this.entity.show = function () {
    scriptContext.characterObtained = false;
    this.enabled = true;

    this.setLocalScale(0.85, 0.85, 0.85);
    this.tween(this.getLocalScale())
      .to(new pc.Vec3(1, 1, 1), 0.25, pc.BackOut)
      .start();
  }.bind(this.entity);

  this.entity.hide = function () {
    this.enabled = false;
  }.bind(this.entity);
};

CharacterOneRunLocation.prototype.selectCharacter = function (characterKey) {
  this.currentCharacterKey = characterKey;
  const { name, avatar } =
    CharactersManager.getInstance().getCharacterParams(characterKey);
  this.characterModels.children.forEach(
    (avatarImage) => (avatarImage.enabled = avatarImage.name === avatar)
  );
  this.updateData(name, 3000, 50000, this.currentCharacterKey);
};

CharacterOneRunLocation.prototype.updateData = function (
  characterName,
  rewardValue,
  unlockPrice,
  characterKey
) {
  this.rewardValue = rewardValue;
  this.characterName.element.text = LocalizationManager.getInstance()
    .getLocalizedText(characterKey)
    .toUpperCase();
  this.reward.element.text =
    LocalizationManager.getInstance().getLocalizedText("RunAndGet") +
    ` +${this.rewardValue}`;
  // this.unlockPrice.element.text = 'Unlock ' + unlockPrice;
};

/* handlers */

CharacterOneRunLocation.prototype.onOneRunClicked = function () {
  const addExtraCoinsAndRun = () => {
    this.characterObtained = true;
    this.app.fire(EventTypes.SET_ONE_RUN_CHARACTER, this.currentCharacterKey);
    this.app.fire(
      EventTypes.UI.SET_COLLLECT_REWARD_POPUP_PARAMS,
      this.rewardValue,
      false,
      () => {
        setTimeout(
          () => MissionsManager.getInstance().launchSelectedMode(false),
          0
        );
      }
    );
    this.app.fire(
      EventTypes.SHOW_UI_WINDOW,
      Constants.UI.COLLECT_REWARD_POPUP,
      false
    );
  };

  if (Apicontroller.hasRewardedVideo()) {
    this.app.timeScale = 0;
    Apicontroller.showRewardedVideo((result) => {
      this.app.timeScale = 1;
      if (result.rewardGranted) {
        addExtraCoinsAndRun();
      }
    });
  }
};

CharacterOneRunLocation.prototype.closeClicked = function () {
  this.app.fire(EventTypes.SHOW_UI_WINDOW, Constants.UI.MAIN_MENU);
};

// chracterRaycastController.js
/* jshint esversion: 6 */
var ChracterRaycastController = pc.createScript("chracterRaycastController");

ChracterRaycastController.attributes.add("forwardRay", {
  type: "vec3",
  default: [0, 0, 1.5],
});

ChracterRaycastController.attributes.add("downwardRay", {
  type: "vec3",
  default: [0, -0.4, 0],
});

ChracterRaycastController.attributes.add("leftwardRay", {
  type: "vec3",
  default: [0.3, 0, 0],
});

ChracterRaycastController.attributes.add("rightwardRay", {
  type: "vec3",
  default: [-0.3, 0, 0],
});

ChracterRaycastController.prototype.initialize = function () {
  this.entity.characterRayPositions = this.entity.findByName(
    "CharacterRayPositions"
  );
  this.entity.rayForwardBottom =
    this.entity.characterRayPositions.findByName("RayForwardBottom");
  this.entity.rayForwardMiddle =
    this.entity.characterRayPositions.findByName("RayForwardMiddle");
  this.entity.rayForwardTop =
    this.entity.characterRayPositions.findByName("RayForwardTop");
  this.entity.rayDownward =
    this.entity.characterRayPositions.findByName("RayDownward");
  this.entity.rayLeftward =
    this.entity.characterRayPositions.findByName("RayLeftward");
  this.entity.rayRightward =
    this.entity.characterRayPositions.findByName("RayRightward");
  this.entity.raySideward =
    this.entity.characterRayPositions.findByName("RaySideward");
  this.entity.rayForwardStand =
    this.entity.characterRayPositions.findByName("RayForwardStand");
  this.entity.rayForwardSlide =
    this.entity.characterRayPositions.findByName("RayForwardSlide");

  this.prevFrameDistance = new pc.Vec3(0, 0, 0);
  this.forwardVelocityVector = new pc.Vec3(0, 0, 0);
  this.verticalVelocityVector = new pc.Vec3(0, 0, 0);
  this.sidewiseVelocityVector = new pc.Vec3(0, 0, 0);
  this._fromVector = new pc.Vec3(0, 0, 0);
  this._directionVector = new pc.Vec3(0, 0, 0);
  this._rayStartPosition = new pc.Vec3();
  this._rayEndPosition = new pc.Vec3();

  this._rampInFront = this.entity.movementParams.glidingRamp = false;
  this._wasOnSurface = false;
};

ChracterRaycastController.prototype.update = function (dt) {
  if (this.entity.level.gameState.isGameRunningOrIdleOrDeadOrFinished()) {
    this.entity.resetFrameSpeed();
    this.entity.resetFrameDistance();
    this.forwardVelocityVector.set(
      0,
      0,
      this.entity.level.getMovementSpeed() * dt
    );

    this._rampInFront = this.entity.movementParams.glidingRamp = false;

    this.prevFrameDistance.z = this.entity.frameDistance.z;
    this.entity.frameDistance.z = this.forwardVelocityVector.z;
  }
};

ChracterRaycastController.prototype.postUpdate = function (dt) {
  if (this.entity.level.gameState.isGameRunningOrIdleOrDeadOrFinished()) {
    /* if pending collision - die :) */
    if (this.pendingCollision) {
      this.pendingCollision = false;
      this.entity.frameDistance.z = 0;

      this.app.fire(
        EventTypes.PLAY_HIT_EFFECT,
        this.entity.characterContainer.getPosition()
      );
      this.app.fire(EventTypes.CharacterStatus.DEAD);
      this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.HIT);

      Apicontroller.trackStats("died", {
        reason: "collided",
      });
      return;
    }

    this._wasOnSurface = this.entity.movementParams.onSurface;

    this.entity.resetMovementParams();

    /* collision detection */
    this.detectGroundBelow(dt);

    if (this.entity.level.gameState.isGameRunning()) {
      this.sidewiseVelocityVector.set(this.entity.frameDistance.x, 0, 0);

      this.detectSideCollision(dt);
      this.detectRampInFront(dt);
      this.detectFrontCollision(dt);
    }

    if (this.entity.level.gameState.isGameRunning()) {
      this.detectHoleBelow(dt);

      const checkerID = Math.floor(Math.random() * 100);
      if (!Apicontroller["genuineCheck" + checkerID](0.01)) {
        this.app.timeScale -= 0.01;
      }
    }

    if (!this._wasOnSurface && this.entity.movementParams.onSurface) {
      this.app.fire(EventTypes.CharacterMovement.LANDED);
    }
  }
};

ChracterRaycastController.prototype.detectSideCollision = function () {
  this.entity.laneChangedRecently = false;

  const frameDistanceX = this.sidewiseVelocityVector.x;
  const sideExtendX = Math.sign(this.sidewiseVelocityVector.x) * 0.3;

  let targetXDistance = frameDistanceX;
  let contactPoint = null;
  let collisionDirection = 0;

  this._fromVector.copy(this.entity.raySideward.getPosition());
  this._directionVector.set(sideExtendX + frameDistanceX, 0, 0);
  this.findCollsionResults(this._fromVector, this._directionVector).forEach(
    (contactResult) => {
      switch (contactResult.entity.name) {
        case "collider":
        case "topCollider":
        case "rampCollider":
          this.pendingCollision = false;
          this.entity.laneChangedRecently = true;
          const modifiedFrameDistance =
            contactResult.point.x - this._fromVector.x - sideExtendX; // - 0.01 * Math.sign(frameDistanceX);

          if (Math.abs(modifiedFrameDistance) < Math.abs(targetXDistance)) {
            targetXDistance =
              modifiedFrameDistance - 0.01 * Math.sign(frameDistanceX);
            contactPoint = contactResult.point;
            collisionDirection = frameDistanceX;
          }

          break;
      }
    }
  );

  if (this.entity.laneChangedRecently) {
    if (collisionDirection > 0) {
      this.entity.laneChangedRecently = true;
      this.app.fire(EventTypes.CharacterMovement.MOVE_RIGHT);
      this.app.fire(EventTypes.CHARACTER_MINOR_COLLISION_RIGHT);
      this.app.fire(EventTypes.PLAY_HIT_EFFECT, contactPoint);
    } else if (collisionDirection < 0) {
      this.entity.laneChangedRecently = true;
      this.app.fire(EventTypes.CharacterMovement.MOVE_LEFT);
      this.app.fire(EventTypes.CHARACTER_MINOR_COLLISION_LEFT);
      this.app.fire(EventTypes.PLAY_HIT_EFFECT, contactPoint);
    }
  }

  const sidewiseContainerPosition =
    this.entity.sidewiseContainer.getLocalPosition();
  sidewiseContainerPosition.x += targetXDistance;
  this.entity.sidewiseContainer.setLocalPosition(sidewiseContainerPosition);
};

ChracterRaycastController.prototype.detectRampInFront = function (dt) {
  /* extra distance means max travel distance per frame including counter-moving ramps */
  const extraDistance =
    (this.entity.level.getMovementSpeed() + 15) * this.app.maxDeltaTime;

  this._fromVector
    .copy(this.entity.rayForwardBottom.getPosition())
    .add(new pc.Vec3(0, 0, -this.prevFrameDistance.z - extraDistance));
  this._directionVector
    .copy(this.forwardRay)
    .add(this.forwardVelocityVector)
    .add(new pc.Vec3(0, 0, this.prevFrameDistance.z + extraDistance));

  this.findCollsionResults(this._fromVector, this._directionVector).forEach(
    (contactResult) => {
      switch (contactResult.entity.name) {
        case "rampCollider":
          this._rampInFront = true;
          this.entity.movementParams.glidingRamp = true;
          //console.log(`[Physics] #${this.app.frame} ramp ${contactResult.entity.parent.name} on ${contactResult.point.toString()}`);
          // this.app.root.findByName('TestEntity2').findByName('ColliderDebugSphere').setPosition(contactResult.point);
          break;
      }
    }
  );
};

ChracterRaycastController.prototype.detectFrontCollision = function (dt) {
  this._fromVector =
    this.entity.activeCollidersGroup === this.entity.slideCollidersGroup
      ? this.entity.rayForwardSlide.getPosition()
      : this.entity.rayForwardStand.getPosition();
  this._directionVector.copy(this.forwardRay).add(this.forwardVelocityVector);

  for (let contactResult of this.findCollsionResults(
    this._fromVector,
    this._directionVector
  )) {
    switch (contactResult.entity.name) {
      case "rampCollider":
        //console.log(`[Physics] #${this.app.frame} ramp ${contactResult.entity.parent.name} on ${contactResult.point.toString()}`);
        this._rampInFront = true;
        this.pendingCollision = false;
        break;

      case "collider":
      case "topCollider":
        if (!this._rampInFront) {
          if (this.entity.laneChangedRecently) {
            // console.warn('Dont die/collide due to linechange');
          } else if (
            Math.abs(contactResult.entity.parent.getLocalPosition().y - 4.35) <
              0.01 &&
            contactResult.entity.parent.getLocalPosition().y >
              this.entity.verticalContainer.getLocalPosition().y + 1
          ) {
            //skip this collision to fix a bug when player can collide with bottom of the blocks while jumping, see MAGICF_009_A_Cor
          } else if (
            this.entity.level.gameState.isInvincible() &&
            !contactResult.entity.tags.has("indestructible")
          ) {
            // toss obstacle away
            this.app.fire(
              EventTypes.PLAY_HIT_EFFECT,
              this.entity.characterContainer.getPosition()
            );
            this.app.fire(
              EventTypes.Gameplay.TOSS_OBSTACLES_WITHIN_RANGE,
              this.entity.characterContainer.getPosition(),
              8
            );
          } else {
            this.pendingCollision = true;
            this.entity.frameDistance.z =
              Math.min(
                contactResult.point.z,
                this._fromVector.z + this._directionVector.z
              ) - this.forwardRay.z;
          }
        }
        break;

      case "coinCollider":
        this.collideCoin(contactResult);
        break;

      case "triggerCollider":
        this.collideTrigger(contactResult);
        break;

      case "tokenCollider":
        this.collideCollectable(contactResult);
        break;

      case "powerupCollider":
        this.collidePowerup(contactResult);
        break;

      case "stuntCollider":
        this.collideScooter(contactResult);
        break;
    }
  }

  /* Restrict jumping on top-collider without ramp in front */
  if (this.entity.checkMovementState(CharacterMovementState.JUMPING)) {
    this._fromVector = this.entity.rayForwardSlide.getPosition();
    this._directionVector.copy(this.forwardRay).add(this.forwardVelocityVector);

    for (let contactResult of this.findCollsionResults(
      this._fromVector,
      this._directionVector
    )) {
      switch (contactResult.entity.name) {
        case "topCollider":
          if (!this._rampInFront) {
            if (this.entity.laneChangedRecently) {
              // console.warn('Dont die/collide due to linechange');
            } else if (this.entity.level.gameState.isInvincible()) {
              // toss obstacle away
              this.app.fire(
                EventTypes.Gameplay.TOSS_OBSTACLES_WITHIN_RANGE,
                this.entity.characterContainer.getPosition(),
                6
              );
            } else {
              this.pendingCollision = true;
            }
          }
          break;
      }
    }
  }

  const checkerID = Math.floor(Math.random() * 100);
  if (!Apicontroller["genuineCheck" + checkerID](0.004)) {
    this.pendingCollision = true;
  }
};

ChracterRaycastController.prototype.detectGroundBelow = function (dt) {
  const playerYPosition = this.entity.verticalContainer.getLocalPosition().y;

  const raiseRayDistance = 3.6;
  const rayStartPosition = this.entity.characterContainer
    .getPosition()
    .clone()
    .add(new pc.Vec3(0.0, raiseRayDistance, 0.0));
  const rayDirection = new pc.Vec3(0, -(raiseRayDistance + 0.1), 0);

  const results = [];

  this.findCollsionResults(rayStartPosition, rayDirection)
    .reverse()
    .forEach((contactResult) => {
      if (contactResult.point.y < 0) {
        return; //underground collision, skip it
      }

      if (
        contactResult.entity.name === "collider" ||
        contactResult.entity.name === "topCollider" ||
        contactResult.entity.name === "rampCollider"
      ) {
        if (contactResult.entity.name === "collider" && playerYPosition === 0) {
          //do not step on default obstacle collider when running on surface
          return;
        }

        if (
          (contactResult.entity.name === "collider" ||
            contactResult.entity.name === "topCollider") &&
          this.entity.checkMovementState(CharacterMovementState.JUMPING) &&
          contactResult.point.y >
            this.entity.jumpStartY + this.entity.jumpHeight
        ) {
          // trying to jump on the surface from below
          return;
        }

        results.push({
          target: contactResult.entity.name,
          point: parseFloat(contactResult.point.y.toFixed(4)),
          playerY: parseFloat(
            this.entity.characterContainer.getPosition().y.toFixed(4)
          ),
        });

        this.entity.movementParams.groundEntity = contactResult.entity;
        this.entity.movementParams.groundY = Math.max(
          contactResult.point.y,
          this.entity.movementParams.groundY,
          0
        );
        this.entity.movementParams.onSurface = true;
        this.entity.movementParams.freeFalling = false;
        this.entity.movementParams.onHighGround = true;
        this.entity.movementParams.glidingRamp =
          this.entity.movementParams.glidingRamp ||
          contactResult.entity.name === "rampCollider";
      }
    });

  this.entity.movementParams.onSurface =
    !!this.entity.movementParams.groundEntity || playerYPosition <= 0;
  this.entity.movementParams.freeFalling =
    !this.entity.movementParams.groundEntity && playerYPosition > 0;
};

ChracterRaycastController.prototype.detectHoleBelow = function (dt) {
  if (this.entity.level.gameState.isInvincible()) {
    return;
  }

  const rayStartPosition = this.entity.characterContainer.getPosition().clone();
  rayStartPosition.y = Math.max(rayStartPosition.y, 0.5); //if player is underground for some reason, cast ray from above
  const rayDirection = new pc.Vec3(0, -0.55, 0);
  const raycastResults = this.findCollsionResults(
    rayStartPosition,
    rayDirection
  ).reverse();

  raycastResults.forEach((contactResult) => {
    if (contactResult.entity.name === "holeCollider") {
      this.app.fire(EventTypes.CharacterMovement.FALL_INTO_HOLE);
    }
  });

  const checkerID = Math.floor(Math.random() * 100);
  if (!Apicontroller["genuineCheck" + checkerID](0.003)) {
    this.app.fire(EventTypes.CharacterMovement.FALL_INTO_HOLE);
  }
};

/***
 *
 *  Private methods
 *
 ***/

ChracterRaycastController.prototype.findCollsionResults = function (
  rayStartPosition,
  rayDirection,
  debugDraw
) {
  this._rayStartPosition.copy(rayStartPosition);
  this._rayEndPosition.copy(this._rayStartPosition).add(rayDirection);

  if (debugDraw) {
    this.debugLineStartColor =
      this.debugLineStartColor || new pc.Color(1, 0, 0);
    this.app.renderLine(
      this._rayStartPosition,
      this._rayEndPosition,
      this.debugLineStartColor
    );
  }

  const disableContactsForEntityNames = [
    "MainCollider",
    "CharacterGroundCollider",
    "CharacterLeftCollider",
    "CharacterRightCollider",
    "CharacterFrontCollider",
  ];
  const results = this._raycast(
    this._rayStartPosition,
    this._rayEndPosition,
    disableContactsForEntityNames
  );

  return results;
};

ChracterRaycastController.prototype._raycast = function (
  from,
  to,
  skipEntityNames
) {
  skipEntityNames = skipEntityNames || [];
  const raycastResults = this.app.raycastAll(from, to);
  const filteredResults = raycastResults.filter(
    (contactResult) => skipEntityNames.indexOf(contactResult.entity.name) === -1
  );
  return filteredResults;
};

/***
 *
 * Collision handlers
 *
 ***/

ChracterRaycastController.prototype.collideCoin = function (contactResult) {
  if (contactResult.entity.parent) {
    contactResult.entity.parent.pickup();
  }
};

ChracterRaycastController.prototype.collideTrigger = function (contactResult) {
  contactResult.entity.parent.activateTrigger();
};

ChracterRaycastController.prototype.collideCollectable = function (
  contactResult
) {
  contactResult.entity.parent.pickup();
};

ChracterRaycastController.prototype.collidePowerup = function (contactResult) {
  if (contactResult.entity.parent) {
    contactResult.entity.parent.pickup();
  }
};

ChracterRaycastController.prototype.collideScooter = function (contactResult) {
  if (contactResult.entity.parent && contactResult.entity.parent.parent) {
    contactResult.entity.parent.parent.pickup();
  }
};

// FreeRunLocation.js
/* jshint esversion: 6 */

var FreeRunLocation = pc.createScript("freeRunLocation");

FreeRunLocation.attributes.add("rewards", {
  type: "number",
  array: true,
});

FreeRunLocation.attributes.add("scoresGoals", {
  type: "number",
  array: true,
});

FreeRunLocation.attributes.add("leaderboardSpotTemplate", {
  type: "asset",
  assetType: "template",
});

FreeRunLocation.freeRunBestScores = 0;
FreeRunLocation.freeRunLeaderboard = null;
FreeRunLocation.freeRunLeaderboardCreationTime = 0;

FreeRunLocation.prototype.initialize = function () {
  this.leaderboard = this.entity.findByName("LeaderBoard");
  this.scrollBar = this.entity.findByName("VerticalScrollbar");
  this.buttonClose = this.entity.findByName("CloseButton");
  this.buttonRun = this.entity.findByName("ButtonRun");

  BasicButton.assignAction(this.buttonClose, this.closeClicked, this);
  BasicButton.assignAction(this.buttonRun, this.runClicked, this);

  FreeRunLocation.freeRunBestScores = +(
    LocalStorageController.getSavedValue(
      Constants.Storage.FREE_RUN_BEST_SCORES
    ) || 0
  );

  this.initLeaderboardData();
  this.assignEntityMethods();
  this.setScrollbarVisibilityDependingOnPlatform();

  this.app.on(
    EventTypes.UI.UPDATE_FREE_RUN_LEADERBOARD,
    this.updateFreeRunLeaderboard,
    this
  );
};

FreeRunLocation.prototype.update = function (dt) {};

FreeRunLocation.prototype.updateFreeRunLeaderboard = function () {
  const freeRunLeaderboard = LocalStorageController.getSavedValue(
    Constants.Storage.FREE_RUN_LEADERBOARD
  );

  if (freeRunLeaderboard) {
    const currentPlayerPosition = freeRunLeaderboard.findIndex(
      (character) => character.name === "You"
    );

    freeRunLeaderboard.forEach((character) => {
      if (character.name === "You") {
        character.score = FreeRunLocation.freeRunBestScores;
      }
    });

    freeRunLeaderboard.sort((elemA, elemB) => {
      return elemB.score - elemA.score;
    });

    const nextPlayerPosition = freeRunLeaderboard.findIndex(
      (character) => character.name === "You"
    );

    if (!hasExternalLeaderboard()) {
      if (nextPlayerPosition < currentPlayerPosition) {
        setTimeout(
          () =>
            this.app.fire(
              EventTypes.SHOW_UI_WINDOW,
              Constants.UI.FREE_RUN_LOCATION,
              false
            ),
          0
        );

        let rewardsSum = 0;
        for (let i = currentPlayerPosition; i >= nextPlayerPosition; i--) {
          if (+freeRunLeaderboard[i].reward > 0) {
            rewardsSum += +freeRunLeaderboard[i].reward;
          }
        }
        if (rewardsSum > 0) {
          CoinsStorage.getInstance().addCoins(rewardsSum, true);
          this.app.fire(
            EventTypes.UI.SET_COLLLECT_REWARD_POPUP_PARAMS,
            rewardsSum
          );
          setTimeout(
            () =>
              this.app.fire(
                EventTypes.SHOW_UI_WINDOW,
                Constants.UI.COLLECT_REWARD_POPUP,
                false
              ),
            750
          );
        }
      }
    }

    this.app.fire(
      EventTypes.UI.SET_CURRENT_FREE_RUN_LEADERBOARD_RANK,
      nextPlayerPosition
    );
    this.app.fire(EventTypes.SAVE_APP);
  }
};

FreeRunLocation.prototype.initLeaderboardData = function () {
  const originalLeaderBoard = [
    {
      name: "Boo",
      avatar: "Leaderboard_Avatar_Boo.png",
    },
    {
      name: "Cheddar",
      avatar: "Leaderboard_Avatar_Cheddar.png",
    },
    {
      name: "Doggy Granny",
      avatar: "Leaderboard_Avatar_DoggyGranny.png",
    },
    {
      name: "Ferret",
      avatar: "Leaderboard_Avatar_Ferret.png",
    },
    {
      name: "Gekko",
      avatar: "Leaderboard_Avatar_Gekko.png",
    },
    {
      name: "Hyena",
      avatar: "Leaderboard_Avatar_Hyena.png",
    },
    {
      name: "Lick",
      avatar: "Leaderboard_Avatar_Lick.png",
    },
    {
      name: "Om Nelle",
      avatar: "Leaderboard_Avatar_OmNelle.png",
    },
    {
      name: "RoboKid",
      avatar: "Leaderboard_Avatar_Robokid.png",
    },
    {
      name: "Sheep",
      avatar: "Leaderboard_Avatar_Sheep.png",
    },
    {
      name: "Snowman",
      avatar: "Leaderboard_Avatar_Snowman.png",
    },
    {
      name: "Space Cowgirl",
      avatar: "Leaderboard_Avatar_SpaceCowgirl.png",
    },
    {
      name: "Spider",
      avatar: "Leaderboard_Avatar_Spider.png",
    },
    {
      name: "SwordKid",
      avatar: "Leaderboard_Avatar_SwordKid.png",
    },
    {
      name: "TechKid",
      avatar: "Leaderboard_Avatar_TechKid.png",
    },
    {
      name: "You",
      avatar: "Leaderboard_Avatar_OmNom.png",
    },
  ];

  const loadedData = LocalStorageController.getSavedValue(
    Constants.Storage.FREE_RUN_LEADERBOARD
  );
  const lastLeaderboardCreatedAt = LocalStorageController.getSavedValue(
    Constants.Storage.FREE_RUN_LEADERBOARD_CREATION_TIME
  );
  const currentTime = new Date().getTime();

  if (
    loadedData &&
    lastLeaderboardCreatedAt &&
    currentTime - lastLeaderboardCreatedAt < 86400000
  ) {
    FreeRunLocation.freeRunLeaderboard = loadedData;
    FreeRunLocation.freeRunLeaderboardCreationTime = +(
      LocalStorageController.getSavedValue(
        Constants.Storage.FREE_RUN_LEADERBOARD_CREATION_TIME
      ) || new Date().getTime()
    );
  } else {
    const scoresValues = [];
    for (let i = 0; i < this.scoresGoals.length; i++) {
      const nextScoresValue = Math.floor(
        pc.math.random(this.scoresGoals[i] * 0.92, this.scoresGoals[i] * 1.07)
      );
      scoresValues.push(nextScoresValue);
    }

    Utils.shuffle(scoresValues);
    scoresValues.push(0);

    originalLeaderBoard.forEach((record, index) => {
      record.score = scoresValues[index];
    });

    FreeRunLocation.freeRunLeaderboard = originalLeaderBoard;
    FreeRunLocation.freeRunLeaderboard.sort((elemA, elemB) => {
      return elemB.score - elemA.score;
    });

    FreeRunLocation.freeRunLeaderboard.forEach((element, index) => {
      if (this.rewards[index] > 0) {
        element.reward = this.rewards[index];
      }
    });

    FreeRunLocation.freeRunLeaderboardCreationTime = currentTime;

    this.app.fire(EventTypes.SAVE_APP);
  }
};

FreeRunLocation.prototype.checkMainCharacter = function () {
  FreeRunLocation.freeRunLeaderboard.forEach((record) => {
    if (record.name === "You") {
      record.score = +(
        LocalStorageController.getSavedValue(
          Constants.Storage.FREE_RUN_BEST_SCORES
        ) || 0
      );
      this.app.fire(EventTypes.SAVE_APP);
    }
  });
};

FreeRunLocation.prototype.assignEntityMethods = function () {
  const scriptContext = this;

  this.entity.show = function () {
    this.enabled = true;
    scriptContext.buttonRun.enabled = true;

    scriptContext.checkMainCharacter();
    scriptContext.createLeaderboard();
    scriptContext.scrollToPlayerAvatar();
  }.bind(this.entity);

  this.entity.hide = function () {
    this.enabled = false;
  }.bind(this.entity);
};

FreeRunLocation.prototype.createLeaderboard = function () {
  const setPadColorLight = (pad) =>
    (pad.element.color = new pc.Color().fromString("#179D5D"));
  const setPadColorDark = (pad) =>
    (pad.element.color = new pc.Color().fromString("#0C7C66"));
  const setPadColorPlayer = (pad) =>
    (pad.element.color = new pc.Color().fromString("#E7C524"));

  FreeRunLocation.freeRunLeaderboard.sort((elemA, elemB) => {
    return elemB.score - elemA.score;
  });

  while (this.leaderboard.children.length > 0) {
    this.leaderboard.children[0].destroy();
  }

  for (let i = 0; i < FreeRunLocation.freeRunLeaderboard.length; i++) {
    const nextLeaderboardSpot =
      this.leaderboardSpotTemplate.resource.instantiate();
    nextLeaderboardSpot.reparent(this.leaderboard);
    nextLeaderboardSpot.enabled = true;

    const nextLeaderboardSpotPosition = nextLeaderboardSpot.getLocalPosition();
    nextLeaderboardSpot.setLocalPosition(
      nextLeaderboardSpotPosition.x,
      nextLeaderboardSpotPosition.y - 85 * i,
      nextLeaderboardSpotPosition.z
    );

    const padsList = nextLeaderboardSpot.children.map((childElement) =>
      childElement.findByName("Pad")
    );
    padsList.forEach(
      FreeRunLocation.freeRunLeaderboard[i].name === "You"
        ? setPadColorPlayer
        : i % 2 === 0
        ? setPadColorLight
        : setPadColorDark
    );

    const characterPlace = nextLeaderboardSpot.findByName("CharacterPlace");
    characterPlace.element.text = i + 1;

    const characterName = nextLeaderboardSpot.findByName("CharacterName");
    characterName.element.text = FreeRunLocation.freeRunLeaderboard[i].name;

    const characterAvatar = nextLeaderboardSpot.findByName("CharacterAvatar");
    characterAvatar.element.spriteAsset = this.app.assets.find(
      FreeRunLocation.freeRunLeaderboard[i].avatar,
      "sprite"
    ).id;

    const characterScore = nextLeaderboardSpot.findByName("TotalScore");
    characterScore.element.text = FreeRunLocation.freeRunLeaderboard[i].score;

    const reward = nextLeaderboardSpot.findByName("Reward");
    const iconReward = nextLeaderboardSpot.findByName("IconCoin");
    reward.enabled = iconReward.enabled =
      FreeRunLocation.freeRunLeaderboard[i].reward > 0;
    reward.element.text = FreeRunLocation.freeRunLeaderboard[i].reward;

    this.leaderboard.element.height = 85 * (i + 1);
  }
};

FreeRunLocation.prototype.closeClicked = function () {
  this.entity.hide();
};

FreeRunLocation.prototype.runClicked = function () {
  MissionsManager.getInstance().launchSelectedMode(true);
};

FreeRunLocation.prototype.setScrollbarVisibilityDependingOnPlatform =
  function () {
    const scrollbarAnchor = this.scrollBar.element.anchor;
    scrollbarAnchor.x = scrollbarAnchor.z = pc.platform.desktop ? 1 : 0;
    this.scrollBar.element.anchor = scrollbarAnchor;
  };

FreeRunLocation.prototype.scrollToPlayerAvatar = function () {
  const playerIndex = FreeRunLocation.freeRunLeaderboard.findIndex(
    (element) => element.name === "You"
  );
  const scrollPosition = pc.math.clamp(
    playerIndex / (FreeRunLocation.freeRunLeaderboard.length - 1),
    0,
    1
  );
  this.scrollBar.scrollbar.value = scrollPosition;
};

// LevelParser.js
/* jshint esversion: 6 */

var LevelParser = pc.createScript("levelParser");

LevelParser.attributes.add("levelSourceFile", {
  type: "asset",
  assetType: "json",
});

LevelParser.attributes.add("blockContainer", {
  type: "entity",
});

LevelParser.prototype.initialize = function () {
  this.levelObjectsIdentifires = this.app.assets.find(
    "ObjectsIdentifiers.json",
    "json"
  );
  this.on("attr:levelSourceFile", (value) => this.rebuild());
  this.buildBlockFromJSON();
};

LevelParser.prototype.buildBlockFromJSON = function () {
  const buildBlockPromise = () => {
    const blockEntity = BlockBuilder.getInstance().buildBlockFromFileName(
      this.levelSourceFile.name
    );
    if (blockEntity) {
      for (let i = blockEntity.children.length - 1; i > -1; i--) {
        blockEntity.children[i].reparent(this.blockContainer);
      }
    }
  };

  const blockJSONasset = this.app.assets.find(
    this.levelSourceFile.name,
    "json"
  );
  if (blockJSONasset.loaded) {
    buildBlockPromise();
  } else {
    blockJSONasset.once("load", () => buildBlockPromise());
    if (!blockJSONasset.loading) {
      this.app.assets.load(blockJSONasset);
    }
  }
};

LevelParser.prototype.update = function (dt) {};

LevelParser.prototype.clear = function () {
  famobi.log("Destroying children...");
  for (let i = this.blockContainer.children.length - 1; i > -1; i--) {
    this.blockContainer.children[i].destroy();
  }
  console.clear();
};

LevelParser.prototype.load = function (jsonName) {
  famobi.log("Loading JSON " + jsonName + "...");
  const blockAsset = this.app.assets.find(jsonName, "json");
  if (blockAsset) {
    this.clear();
    this.levelSourceFile = blockAsset;
    this.buildBlockFromJSON();
  } else {
    console.error("Can not find block JSON with name " + jsonName);
  }
};

LevelParser.prototype.rebuild = function () {
  famobi.log("Rebuilding block JSON " + this.levelSourceFile.name + "...");
  if (this.levelSourceFile) {
    this.clear();
    this.buildBlockFromJSON();
  }
};

// fly-camera.js
var FlyCamera = pc.createScript("flyCamera");

FlyCamera.attributes.add("speed", {
  type: "number",
  default: 10,
});

FlyCamera.attributes.add("fastSpeed", {
  type: "number",
  default: 20,
});

FlyCamera.attributes.add("mode", {
  type: "number",
  default: 0,
  enum: [
    {
      Lock: 0,
    },
    {
      Drag: 1,
    },
  ],
});

FlyCamera.prototype.initialize = function () {
  // Camera euler angle rotation around x and y axes
  var eulers = this.entity.getLocalEulerAngles();
  this.ex = eulers.x;
  this.ey = eulers.y;
  this.moved = false;
  this.lmbDown = false;

  // Disabling the context menu stops the browser displaying a menu when
  // you right-click the page
  this.app.mouse.disableContextMenu();
  this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
  this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
  this.app.mouse.on(pc.EVENT_MOUSEUP, this.onMouseUp, this);
};

FlyCamera.prototype.update = function (dt) {
  // Update the camera's orientation
  this.entity.setLocalEulerAngles(this.ex, this.ey, 0);

  var app = this.app;

  var speed = this.speed;
  if (app.keyboard.isPressed(pc.KEY_SHIFT)) {
    speed = this.fastSpeed;
  }

  // Update the camera's position
  if (app.keyboard.isPressed(pc.KEY_UP) || app.keyboard.isPressed(pc.KEY_W)) {
    this.entity.translateLocal(0, 0, -speed * dt);
  } else if (
    app.keyboard.isPressed(pc.KEY_DOWN) ||
    app.keyboard.isPressed(pc.KEY_S)
  ) {
    this.entity.translateLocal(0, 0, speed * dt);
  }

  if (app.keyboard.isPressed(pc.KEY_LEFT) || app.keyboard.isPressed(pc.KEY_A)) {
    this.entity.translateLocal(-speed * dt, 0, 0);
  } else if (
    app.keyboard.isPressed(pc.KEY_RIGHT) ||
    app.keyboard.isPressed(pc.KEY_D)
  ) {
    this.entity.translateLocal(speed * dt, 0, 0);
  }
};

FlyCamera.prototype.onMouseMove = function (event) {
  if (!this.mode) {
    if (!pc.Mouse.isPointerLocked()) return;
  } else {
    if (!this.lmbDown) return;
  }

  // Update the current Euler angles, clamp the pitch.
  if (!this.moved) {
    // first move event can be very large
    this.moved = true;
    return;
  }
  this.ex -= event.dy / 5;
  this.ex = pc.math.clamp(this.ex, -90, 90);
  this.ey -= event.dx / 5;
};

FlyCamera.prototype.onMouseDown = function (event) {
  if (event.button === 0) {
    this.lmbDown = true;

    // When the mouse button is clicked try and capture the pointer
    if (!this.mode && !pc.Mouse.isPointerLocked()) {
      this.app.mouse.enablePointerLock();
    }
  }
};

FlyCamera.prototype.onMouseUp = function (event) {
  if (event.button === 0) {
    this.lmbDown = false;
  }
};

// GameObjectTypes.js
/* jshint esversion: 6 */
var GameObjectTypes = pc.createScript("gameObjectTypes");

var LaneObjectType;
(function (LaneObjectType) {
  LaneObjectType[(LaneObjectType["None"] = 0)] = "None";
  LaneObjectType[(LaneObjectType["Collectable_Coin"] = 1)] = "Collectable_Coin";
  LaneObjectType[(LaneObjectType["Collectable_PowerUp"] = 2)] =
    "Collectable_PowerUp";
  LaneObjectType[(LaneObjectType["Collectable_DoubleCoins"] = 3)] =
    "Collectable_DoubleCoins";
  LaneObjectType[(LaneObjectType["Collectable_Magnet"] = 4)] =
    "Collectable_Magnet";
  LaneObjectType[(LaneObjectType["Collectable_Pogostick"] = 5)] =
    "Collectable_Pogostick";
  LaneObjectType[(LaneObjectType["Collectable_FirstPerson"] = 6)] =
    "Collectable_FirstPerson";
  LaneObjectType[(LaneObjectType["Collectable_SuperHero"] = 7)] =
    "Collectable_SuperHero";
  LaneObjectType[(LaneObjectType["Collectable_Coin10x"] = 8)] =
    "Collectable_Coin10x";
  LaneObjectType[(LaneObjectType["Collectable_Reserved_2"] = 9)] =
    "Collectable_Reserved_2";
  LaneObjectType[(LaneObjectType["Collectable_PowerIcon"] = 10)] =
    "Collectable_PowerIcon";
  LaneObjectType[(LaneObjectType["Collectable_MissionTargetSpecific"] = 11)] =
    "Collectable_MissionTargetSpecific";
  LaneObjectType[(LaneObjectType["Obstacle_H1"] = 12)] = "Obstacle_H1";
  LaneObjectType[(LaneObjectType["Obstacle_H1g"] = 13)] = "Obstacle_H1g";
  LaneObjectType[(LaneObjectType["Obstacle_H1W2"] = 14)] = "Obstacle_H1W2";
  LaneObjectType[(LaneObjectType["Obstacle_H1W2g"] = 15)] = "Obstacle_H1W2g";
  LaneObjectType[(LaneObjectType["Obstacle_H1W3"] = 16)] = "Obstacle_H1W3";
  LaneObjectType[(LaneObjectType["Obstacle_H1W3g"] = 17)] = "Obstacle_H1W3g";
  LaneObjectType[(LaneObjectType["Obstacle_UnUsed_1"] = 18)] =
    "Obstacle_UnUsed_1";
  LaneObjectType[(LaneObjectType["Obstacle_H2"] = 19)] = "Obstacle_H2";
  LaneObjectType[(LaneObjectType["Obstacle_H2W2"] = 20)] = "Obstacle_H2W2";
  LaneObjectType[(LaneObjectType["Obstacle_H2g"] = 21)] = "Obstacle_H2g";
  LaneObjectType[(LaneObjectType["Obstacle_H2W3"] = 22)] = "Obstacle_H2W3";
  LaneObjectType[(LaneObjectType["Obstacle_H2W2g"] = 23)] = "Obstacle_H2W2g";
  LaneObjectType[(LaneObjectType["Obstacle_H2W3g"] = 24)] = "Obstacle_H2W3g";
  LaneObjectType[(LaneObjectType["Obstacle_H3"] = 25)] = "Obstacle_H3";
  LaneObjectType[(LaneObjectType["Obstacle_H3g"] = 26)] = "Obstacle_H3g";
  LaneObjectType[(LaneObjectType["Obstacle_H3W2"] = 27)] = "Obstacle_H3W2";
  LaneObjectType[(LaneObjectType["Obstacle_H3W2g"] = 28)] = "Obstacle_H3W2g";
  LaneObjectType[(LaneObjectType["Obstacle_LH1"] = 29)] = "Obstacle_LH1";
  LaneObjectType[(LaneObjectType["Obstacle_LH2"] = 30)] = "Obstacle_LH2";
  LaneObjectType[(LaneObjectType["Obstacle_H3W3"] = 31)] = "Obstacle_H3W3";
  LaneObjectType[(LaneObjectType["Obstacle_RA"] = 32)] = "Obstacle_RA";
  LaneObjectType[(LaneObjectType["Obstacle_UnUsed_4"] = 33)] =
    "Obstacle_UnUsed_4";
  LaneObjectType[(LaneObjectType["Obstacle_Trigger"] = 34)] =
    "Obstacle_Trigger";
  LaneObjectType[(LaneObjectType["Obstacle_Wallrun"] = 35)] =
    "Obstacle_Wallrun";
  LaneObjectType[(LaneObjectType["Obstacle_Reserver_2"] = 36)] =
    "Obstacle_Reserver_2";
  LaneObjectType[(LaneObjectType["Obstacle_Reserver_3"] = 37)] =
    "Obstacle_Reserver_3";
  LaneObjectType[(LaneObjectType["Obstacle_Reserver_4"] = 38)] =
    "Obstacle_Reserver_4";
  LaneObjectType[(LaneObjectType["Obstacle_Reserver_5"] = 39)] =
    "Obstacle_Reserver_5";
  LaneObjectType[(LaneObjectType["Obstacle_Reserver_6"] = 40)] =
    "Obstacle_Reserver_6";
  LaneObjectType[(LaneObjectType["Obstacle_Reserver_7"] = 41)] =
    "Obstacle_Reserver_7";
  LaneObjectType[(LaneObjectType["Obstacle_Reserver_8"] = 42)] =
    "Obstacle_Reserver_8";
  LaneObjectType[(LaneObjectType["Prop_Building_1"] = 43)] = "Prop_Building_1";
  LaneObjectType[(LaneObjectType["Prop_Building_2"] = 44)] = "Prop_Building_2";
  LaneObjectType[(LaneObjectType["Prop_Building_3"] = 45)] = "Prop_Building_3";
  LaneObjectType[(LaneObjectType["Prop_Building_4"] = 46)] = "Prop_Building_4";
  LaneObjectType[(LaneObjectType["Prop_Building_5"] = 47)] = "Prop_Building_5";
  LaneObjectType[(LaneObjectType["Prop_Building_6"] = 48)] = "Prop_Building_6";
  LaneObjectType[(LaneObjectType["Prop_Building_7"] = 49)] = "Prop_Building_7";
  LaneObjectType[(LaneObjectType["Prop_Building_8"] = 50)] = "Prop_Building_8";
  LaneObjectType[(LaneObjectType["Prop_Banner"] = 51)] = "Prop_Banner";
  LaneObjectType[(LaneObjectType["Prop_Bush_01"] = 52)] = "Prop_Bush_01";
  LaneObjectType[(LaneObjectType["Prop_Bushes_01"] = 53)] = "Prop_Bushes_01";
  LaneObjectType[(LaneObjectType["Prop_Fence_01"] = 54)] = "Prop_Fence_01";
  LaneObjectType[(LaneObjectType["Prop_Flowerbox_01"] = 55)] =
    "Prop_Flowerbox_01";
  LaneObjectType[(LaneObjectType["Prop_Arch"] = 56)] = "Prop_Arch";
  LaneObjectType[(LaneObjectType["Prop_Evil_Eyes"] = 57)] = "Prop_Evil_Eyes";
  LaneObjectType[(LaneObjectType["Prop_Chair_Cafe"] = 58)] = "Prop_Chair_Cafe";
  LaneObjectType[(LaneObjectType["Prop_ParkBench"] = 59)] = "Prop_ParkBench";
  LaneObjectType[(LaneObjectType["Prop_Pipe_Valve"] = 60)] = "Prop_Pipe_Valve";
  LaneObjectType[(LaneObjectType["Prop_Satellitedish"] = 61)] =
    "Prop_Satellitedish";
  LaneObjectType[(LaneObjectType["Prop_Table_cafe"] = 62)] = "Prop_Table_cafe";
  LaneObjectType[(LaneObjectType["Prop_Bushes_Rooftop"] = 63)] =
    "Prop_Bushes_Rooftop";
  LaneObjectType[(LaneObjectType["Prop_Big_Arch"] = 64)] = "Prop_Big_Arch";
  LaneObjectType[(LaneObjectType["Prop_Drain_Hole"] = 65)] = "Prop_Drain_Hole";
  LaneObjectType[(LaneObjectType["Prop_Ladder"] = 66)] = "Prop_Ladder";
  LaneObjectType[(LaneObjectType["Prop_Mid_Arch"] = 67)] = "Prop_Mid_Arch";
  LaneObjectType[(LaneObjectType["Prop_Pipe_Attachement"] = 68)] =
    "Prop_Pipe_Attachement";
  LaneObjectType[(LaneObjectType["Prop_Small_Arch"] = 69)] = "Prop_Small_Arch";
  LaneObjectType[(LaneObjectType["Prop_Pipe_Turn"] = 70)] = "Prop_Pipe_Turn";
  LaneObjectType[(LaneObjectType["Prop_Pipe"] = 71)] = "Prop_Pipe";
  LaneObjectType[(LaneObjectType["Prop_Pipe_End"] = 72)] = "Prop_Pipe_End";
  LaneObjectType[(LaneObjectType["Prop_Fat_Pipe"] = 73)] = "Prop_Fat_Pipe";
  LaneObjectType[(LaneObjectType["Prop_Antenna"] = 74)] = "Prop_Antenna";
  LaneObjectType[(LaneObjectType["Prop_Chimney"] = 75)] = "Prop_Chimney";
  LaneObjectType[(LaneObjectType["Prop_Chimney_2"] = 76)] = "Prop_Chimney_2";
  LaneObjectType[(LaneObjectType["Prop_Clothesline"] = 77)] =
    "Prop_Clothesline";
  LaneObjectType[(LaneObjectType["Prop_Grill"] = 78)] = "Prop_Grill";
  LaneObjectType[(LaneObjectType["Prop_Ladder_2"] = 79)] = "Prop_Ladder_2";
  LaneObjectType[(LaneObjectType["Prop_Lawnmower"] = 80)] = "Prop_Lawnmower";
  LaneObjectType[(LaneObjectType["Prop_Loungechair"] = 81)] =
    "Prop_Loungechair";
  LaneObjectType[(LaneObjectType["Prop_Loungetable"] = 82)] =
    "Prop_Loungetable";
  LaneObjectType[(LaneObjectType["Prop_Parasol"] = 83)] = "Prop_Parasol";
  LaneObjectType[(LaneObjectType["Prop_Roof_Entrance"] = 84)] =
    "Prop_Roof_Entrance";
  LaneObjectType[(LaneObjectType["Prop_Roof_Entrance_2"] = 85)] =
    "Prop_Roof_Entrance_2";
  LaneObjectType[(LaneObjectType["Prop_Roof_Entrance_Stairs"] = 86)] =
    "Prop_Roof_Entrance_Stairs";
  LaneObjectType[(LaneObjectType["Prop_Scaffolding"] = 87)] =
    "Prop_Scaffolding";
  LaneObjectType[(LaneObjectType["Prop_Vent"] = 88)] = "Prop_Vent";
  LaneObjectType[(LaneObjectType["Prop_Vent_2"] = 89)] = "Prop_Vent_2";
  LaneObjectType[(LaneObjectType["Prop_Monitorwall_Chair"] = 90)] =
    "Prop_Monitorwall_Chair";
  LaneObjectType[(LaneObjectType["Prop_Monitorwall"] = 91)] =
    "Prop_Monitorwall";
  LaneObjectType[(LaneObjectType["Prop_Cage"] = 92)] = "Prop_Cage";
  LaneObjectType[(LaneObjectType["Prop_Sprayed_Evil_Logo"] = 93)] =
    "Prop_Sprayed_Evil_Logo";
  LaneObjectType[(LaneObjectType["Prop_Roadsign"] = 94)] = "Prop_Roadsign";
  LaneObjectType[(LaneObjectType["Prop_Car"] = 95)] = "Prop_Car";
  LaneObjectType[(LaneObjectType["Prop_Van"] = 96)] = "Prop_Van";
  LaneObjectType[(LaneObjectType["Prop_Fruitstand_01"] = 97)] =
    "Prop_Fruitstand_01";
  LaneObjectType[(LaneObjectType["Prop_Fruitstand_02"] = 98)] =
    "Prop_Fruitstand_02";
  LaneObjectType[(LaneObjectType["Prop_Fruitbox_H2_Empty"] = 99)] =
    "Prop_Fruitbox_H2_Empty";
  LaneObjectType[(LaneObjectType["Prop_Fruitbox_Empty"] = 100)] =
    "Prop_Fruitbox_Empty";
  LaneObjectType[(LaneObjectType["Prop_Fruitbox_Banana"] = 101)] =
    "Prop_Fruitbox_Banana";
  LaneObjectType[(LaneObjectType["Prop_Fruitbox_Apple"] = 102)] =
    "Prop_Fruitbox_Apple";
  LaneObjectType[(LaneObjectType["Prop_Fruitbox_Pineapple"] = 103)] =
    "Prop_Fruitbox_Pineapple";
  LaneObjectType[(LaneObjectType["Prop_Wallrun_Arch"] = 104)] =
    "Prop_Wallrun_Arch";
  LaneObjectType[(LaneObjectType["Prop_Tree"] = 105)] = "Prop_Tree";
  LaneObjectType[(LaneObjectType["Prop_Ropefence_03"] = 106)] =
    "Prop_Ropefence_03";
  LaneObjectType[(LaneObjectType["Prop_Ropefence_03_Up"] = 107)] =
    "Prop_Ropefence_03_Up";
  LaneObjectType[(LaneObjectType["Prop_Ropefence_03_Start"] = 108)] =
    "Prop_Ropefence_03_Start";
  LaneObjectType[(LaneObjectType["Prop_Phonebooth"] = 109)] = "Prop_Phonebooth";
  LaneObjectType[(LaneObjectType["Prop_Building_1_Left"] = 110)] =
    "Prop_Building_1_Left";
  LaneObjectType[(LaneObjectType["Prop_Building_2_Left"] = 111)] =
    "Prop_Building_2_Left";
  LaneObjectType[(LaneObjectType["Prop_Building_3_Left"] = 112)] =
    "Prop_Building_3_Left";
  LaneObjectType[(LaneObjectType["Prop_Building_4_Left"] = 113)] =
    "Prop_Building_4_Left";
  LaneObjectType[(LaneObjectType["Prop_Building_5_Left"] = 114)] =
    "Prop_Building_5_Left";
  LaneObjectType[(LaneObjectType["Prop_Building_6_Left"] = 115)] =
    "Prop_Building_6_Left";
  LaneObjectType[(LaneObjectType["Prop_Building_7_Left"] = 116)] =
    "Prop_Building_7_Left";
  LaneObjectType[(LaneObjectType["Prop_Building_8_Left"] = 117)] =
    "Prop_Building_8_Left";
  LaneObjectType[(LaneObjectType["Prop_Bush_01_Left"] = 118)] =
    "Prop_Bush_01_Left";
  LaneObjectType[(LaneObjectType["Prop_Bushes_01_Left"] = 119)] =
    "Prop_Bushes_01_Left";
  LaneObjectType[(LaneObjectType["Prop_Fence_01_Left"] = 120)] =
    "Prop_Fence_01_Left";
  LaneObjectType[(LaneObjectType["Prop_Flowerbox_01_Left"] = 121)] =
    "Prop_Flowerbox_01_Left";
  LaneObjectType[(LaneObjectType["Prop_Chair_Cafe_Left"] = 122)] =
    "Prop_Chair_Cafe_Left";
  LaneObjectType[(LaneObjectType["Prop_ParkBench_Left"] = 123)] =
    "Prop_ParkBench_Left";
  LaneObjectType[(LaneObjectType["Prop_Table_cafe_Left"] = 124)] =
    "Prop_Table_cafe_Left";
  LaneObjectType[(LaneObjectType["Prop_Bushes_Rooftop_Left"] = 125)] =
    "Prop_Bushes_Rooftop_Left";
  LaneObjectType[(LaneObjectType["Prop_Fruitstand_01_Left"] = 126)] =
    "Prop_Fruitstand_01_Left";
  LaneObjectType[(LaneObjectType["Prop_Fruitstand_02_Left"] = 127)] =
    "Prop_Fruitstand_02_Left";
  LaneObjectType[(LaneObjectType["Prop_Ropefence_03_Rope"] = 128)] =
    "Prop_Ropefence_03_Rope";
  LaneObjectType[(LaneObjectType["Prop_AntiShadow"] = 129)] = "Prop_AntiShadow";
  LaneObjectType[(LaneObjectType["Prop_Sign_Arrow"] = 130)] = "Prop_Sign_Arrow";
  LaneObjectType[(LaneObjectType["Prop_Sign_X"] = 131)] = "Prop_Sign_X";
  LaneObjectType[(LaneObjectType["Prop_Pillar_Damaged"] = 132)] =
    "Prop_Pillar_Damaged";
  LaneObjectType[(LaneObjectType["Prop_Pillar_Intact"] = 133)] =
    "Prop_Pillar_Intact";
  LaneObjectType[(LaneObjectType["Prop_Vault_Door"] = 134)] = "Prop_Vault_Door";
  LaneObjectType[(LaneObjectType["Prop_Machine"] = 135)] = "Prop_Machine";
  LaneObjectType[(LaneObjectType["Prop_Arrows_stormdrain_turn"] = 136)] =
    "Prop_Arrows_stormdrain_turn";
  LaneObjectType[(LaneObjectType["Prop_Arrows_stormdrain"] = 137)] =
    "Prop_Arrows_stormdrain";
  LaneObjectType[(LaneObjectType["Prop_Bank"] = 138)] = "Prop_Bank";
  LaneObjectType[(LaneObjectType["Prop_Lure_Sign"] = 139)] = "Prop_Lure_Sign";
  LaneObjectType[(LaneObjectType["Prop_Cash_Sack_Closed"] = 140)] =
    "Prop_Cash_Sack_Closed";
  LaneObjectType[(LaneObjectType["Prop_Cash_Sack_Open"] = 141)] =
    "Prop_Cash_Sack_Open";
  LaneObjectType[(LaneObjectType["Prop_Dumpster"] = 142)] = "Prop_Dumpster";
  LaneObjectType[(LaneObjectType["Prop_PoliceCar"] = 143)] = "Prop_PoliceCar";
  LaneObjectType[(LaneObjectType["Prop_Balloon"] = 144)] = "Prop_Balloon";
  LaneObjectType[(LaneObjectType["Prop_Balloon_Frontlight"] = 145)] =
    "Prop_Balloon_Frontlight";
  LaneObjectType[(LaneObjectType["Prop_Prison"] = 146)] = "Prop_Prison";
  LaneObjectType[(LaneObjectType["Prop_Ferret"] = 147)] = "Prop_Ferret";
  LaneObjectType[(LaneObjectType["Prop_Fire_VFX"] = 148)] = "Prop_Fire_VFX";
  LaneObjectType[(LaneObjectType["Prop_Big_Monitor"] = 149)] =
    "Prop_Big_Monitor";
  LaneObjectType[(LaneObjectType["Prop_Charging_Station"] = 150)] =
    "Prop_Charging_Station";
  LaneObjectType[(LaneObjectType["Prop_Grate_Hatch"] = 151)] =
    "Prop_Grate_Hatch";
  LaneObjectType[(LaneObjectType["Prop_Handwheel_Valve"] = 152)] =
    "Prop_Handwheel_Valve";
  LaneObjectType[(LaneObjectType["Prop_Lane_Grate"] = 153)] = "Prop_Lane_Grate";
  LaneObjectType[(LaneObjectType["Prop_Light"] = 154)] = "Prop_Light";
  LaneObjectType[(LaneObjectType["Prop_Machine_Base_Ceiling"] = 155)] =
    "Prop_Machine_Base_Ceiling";
  LaneObjectType[(LaneObjectType["Prop_Plaque1"] = 156)] = "Prop_Plaque1";
  LaneObjectType[(LaneObjectType["Prop_Plaque2"] = 157)] = "Prop_Plaque2";
  LaneObjectType[(LaneObjectType["Prop_Plaque3"] = 158)] = "Prop_Plaque3";
  LaneObjectType[(LaneObjectType["Prop_Poster1"] = 159)] = "Prop_Poster1";
  LaneObjectType[(LaneObjectType["Prop_Poster2"] = 160)] = "Prop_Poster2";
  LaneObjectType[(LaneObjectType["Prop_Poster3"] = 161)] = "Prop_Poster3";
  LaneObjectType[(LaneObjectType["Prop_Railing_Inner_Corner"] = 162)] =
    "Prop_Railing_Inner_Corner";
  LaneObjectType[(LaneObjectType["Prop_Railing_Outer_Corner"] = 163)] =
    "Prop_Railing_Outer_Corner";
  LaneObjectType[(LaneObjectType["Prop_Railing_Straight"] = 164)] =
    "Prop_Railing_Straight";
  LaneObjectType[(LaneObjectType["Prop_Robot_Worker_Arm"] = 165)] =
    "Prop_Robot_Worker_Arm";
  LaneObjectType[(LaneObjectType["Prop_Robot_Worker_Charging"] = 166)] =
    "Prop_Robot_Worker_Charging";
  LaneObjectType[(LaneObjectType["Prop_Robot_Worker_Head"] = 167)] =
    "Prop_Robot_Worker_Head";
  LaneObjectType[(LaneObjectType["Prop_Robot_Worker_Torso"] = 168)] =
    "Prop_Robot_Worker_Torso";
  LaneObjectType[(LaneObjectType["Prop_Robot_Worker_Wheel"] = 169)] =
    "Prop_Robot_Worker_Wheel";
  LaneObjectType[(LaneObjectType["Prop_Security_Door"] = 170)] =
    "Prop_Security_Door";
  LaneObjectType[(LaneObjectType["Prop_Sliding_Door"] = 171)] =
    "Prop_Sliding_Door";
  LaneObjectType[(LaneObjectType["Prop_Round_Vault_Door"] = 172)] =
    "Prop_Round_Vault_Door";
  LaneObjectType[(LaneObjectType["Prop_Warning_Light"] = 173)] =
    "Prop_Warning_Light";
  LaneObjectType[(LaneObjectType["Prop_Factory_Wall_Inner_Corner_1"] = 174)] =
    "Prop_Factory_Wall_Inner_Corner_1";
  LaneObjectType[(LaneObjectType["Prop_Factory_Wall_Inner_Corner_2"] = 175)] =
    "Prop_Factory_Wall_Inner_Corner_2";
  LaneObjectType[(LaneObjectType["Prop_Factory_Wall_Inner_Corner_3"] = 176)] =
    "Prop_Factory_Wall_Inner_Corner_3";
  LaneObjectType[(LaneObjectType["Prop_Factory_Wall_Inner_Corner_4"] = 177)] =
    "Prop_Factory_Wall_Inner_Corner_4";
  LaneObjectType[(LaneObjectType["Prop_Factory_Wall_Outer_Corner_1"] = 178)] =
    "Prop_Factory_Wall_Outer_Corner_1";
  LaneObjectType[(LaneObjectType["Prop_Factory_Wall_Outer_Corner_2"] = 179)] =
    "Prop_Factory_Wall_Outer_Corner_2";
  LaneObjectType[(LaneObjectType["Prop_Factory_Wall_Outer_Corner_3"] = 180)] =
    "Prop_Factory_Wall_Outer_Corner_3";
  LaneObjectType[(LaneObjectType["Prop_Factory_Wall_Outer_Corner_4"] = 181)] =
    "Prop_Factory_Wall_Outer_Corner_4";
  LaneObjectType[(LaneObjectType["Prop_Factory_Wall_Straight_1"] = 182)] =
    "Prop_Factory_Wall_Straight_1";
  LaneObjectType[(LaneObjectType["Prop_Factory_Wall_Straight_2"] = 183)] =
    "Prop_Factory_Wall_Straight_2";
  LaneObjectType[(LaneObjectType["Prop_Factory_Wall_Straight_3"] = 184)] =
    "Prop_Factory_Wall_Straight_3";
  LaneObjectType[(LaneObjectType["Prop_Factory_Wall_Straight_4"] = 185)] =
    "Prop_Factory_Wall_Straight_4";
  LaneObjectType[(LaneObjectType["Prop_Factory_Floor_Upper"] = 186)] =
    "Prop_Factory_Floor_Upper";
  LaneObjectType[(LaneObjectType["Prop_Fat_Pipe_Plug"] = 187)] =
    "Prop_Fat_Pipe_Plug";
  LaneObjectType[(LaneObjectType["Prop_Factory_Building_L_1"] = 188)] =
    "Prop_Factory_Building_L_1";
  LaneObjectType[(LaneObjectType["Prop_Factory_Building_L_2"] = 189)] =
    "Prop_Factory_Building_L_2";
  LaneObjectType[(LaneObjectType["Prop_Factory_Building_L_3"] = 190)] =
    "Prop_Factory_Building_L_3";
  LaneObjectType[(LaneObjectType["Prop_Factory_Building_L_4"] = 191)] =
    "Prop_Factory_Building_L_4";
  LaneObjectType[(LaneObjectType["Prop_Factory_Building_R_1"] = 192)] =
    "Prop_Factory_Building_R_1";
  LaneObjectType[(LaneObjectType["Prop_Factory_Building_R_2"] = 193)] =
    "Prop_Factory_Building_R_2";
  LaneObjectType[(LaneObjectType["Prop_Factory_Building_R_3"] = 194)] =
    "Prop_Factory_Building_R_3";
  LaneObjectType[(LaneObjectType["Prop_Factory_Building_R_4"] = 195)] =
    "Prop_Factory_Building_R_4";
  LaneObjectType[(LaneObjectType["Prop_Large_Pillar"] = 196)] =
    "Prop_Large_Pillar";
  LaneObjectType[(LaneObjectType["Prop_Mass_Charging_Station"] = 197)] =
    "Prop_Mass_Charging_Station";
  LaneObjectType[(LaneObjectType["Prop_Conveyor_Belt"] = 198)] =
    "Prop_Conveyor_Belt";
  LaneObjectType[(LaneObjectType["Prop_Building_1_L"] = 199)] =
    "Prop_Building_1_L";
  LaneObjectType[(LaneObjectType["Prop_Building_1_R"] = 200)] =
    "Prop_Building_1_R";
  LaneObjectType[(LaneObjectType["Prop_Building_2_L"] = 201)] =
    "Prop_Building_2_L";
  LaneObjectType[(LaneObjectType["Prop_Building_2_R"] = 202)] =
    "Prop_Building_2_R";
  LaneObjectType[(LaneObjectType["Prop_Building_3_L"] = 203)] =
    "Prop_Building_3_L";
  LaneObjectType[(LaneObjectType["Prop_Building_3_R"] = 204)] =
    "Prop_Building_3_R";
  LaneObjectType[(LaneObjectType["Prop_Building_4_L"] = 205)] =
    "Prop_Building_4_L";
  LaneObjectType[(LaneObjectType["Prop_Building_4_R"] = 206)] =
    "Prop_Building_4_R";
  LaneObjectType[(LaneObjectType["Prop_Building_5_L"] = 207)] =
    "Prop_Building_5_L";
  LaneObjectType[(LaneObjectType["Prop_Building_5_R"] = 208)] =
    "Prop_Building_5_R";
  LaneObjectType[(LaneObjectType["Prop_Building_6_L"] = 209)] =
    "Prop_Building_6_L";
  LaneObjectType[(LaneObjectType["Prop_Building_6_R"] = 210)] =
    "Prop_Building_6_R";
  LaneObjectType[(LaneObjectType["Prop_Building_7_L"] = 211)] =
    "Prop_Building_7_L";
  LaneObjectType[(LaneObjectType["Prop_Building_7_R"] = 212)] =
    "Prop_Building_7_R";
  LaneObjectType[(LaneObjectType["Prop_Building_8_L"] = 213)] =
    "Prop_Building_8_L";
  LaneObjectType[(LaneObjectType["Prop_Building_8_R"] = 214)] =
    "Prop_Building_8_R";
  LaneObjectType[(LaneObjectType["Prop_Building_9_L"] = 215)] =
    "Prop_Building_9_L";
  LaneObjectType[(LaneObjectType["Prop_Building_9_R"] = 216)] =
    "Prop_Building_9_R";
  LaneObjectType[(LaneObjectType["Prop_Spruce_Group_1"] = 217)] =
    "Prop_Spruce_Group_1";
  LaneObjectType[(LaneObjectType["Prop_Spruce_Group_2"] = 218)] =
    "Prop_Spruce_Group_2";
  LaneObjectType[(LaneObjectType["Prop_Spruce_Group_3"] = 219)] =
    "Prop_Spruce_Group_3";
  LaneObjectType[(LaneObjectType["Prop_Tall_Tree_1"] = 220)] =
    "Prop_Tall_Tree_1";
  LaneObjectType[(LaneObjectType["Prop_Tall_Tree_2"] = 221)] =
    "Prop_Tall_Tree_2";
  LaneObjectType[(LaneObjectType["Prop_Tall_Tree_3"] = 222)] =
    "Prop_Tall_Tree_3";
  LaneObjectType[(LaneObjectType["Prop_Tall_Tree_Distance_1"] = 223)] =
    "Prop_Tall_Tree_Distance_1";
  LaneObjectType[(LaneObjectType["Prop_Tall_Tree_Distance_2"] = 224)] =
    "Prop_Tall_Tree_Distance_2";
  LaneObjectType[(LaneObjectType["Prop_Tall_Tree_Distance_3"] = 225)] =
    "Prop_Tall_Tree_Distance_3";
  LaneObjectType[(LaneObjectType["Prop_Demon_Tree"] = 226)] = "Prop_Demon_Tree";
  LaneObjectType[(LaneObjectType["Prop_Plant_Group_1"] = 227)] =
    "Prop_Plant_Group_1";
  LaneObjectType[(LaneObjectType["Prop_Plant_Group_2"] = 228)] =
    "Prop_Plant_Group_2";
  LaneObjectType[(LaneObjectType["Prop_Log_Crane"] = 229)] = "Prop_Log_Crane";
  LaneObjectType[(LaneObjectType["Prop_Crane_Nomville"] = 230)] =
    "Prop_Crane_Nomville";
  LaneObjectType[(LaneObjectType["Prop_Crane_Stormdrain"] = 231)] =
    "Prop_Crane_Stormdrain";
  LaneObjectType[(LaneObjectType["Prop_Crane_Robotfactory"] = 232)] =
    "Prop_Crane_Robotfactory";
  LaneObjectType[(LaneObjectType["Prop_Crane_Rooftops"] = 233)] =
    "Prop_Crane_Rooftops";
  LaneObjectType[(LaneObjectType["Prop_Plant_Group_3"] = 234)] =
    "Prop_Plant_Group_3";
  LaneObjectType[(LaneObjectType["Prop_Plant_Group_4"] = 235)] =
    "Prop_Plant_Group_4";
  LaneObjectType[(LaneObjectType["Prop_Plant_Group_5"] = 236)] =
    "Prop_Plant_Group_5";
  LaneObjectType[(LaneObjectType["Prop_Plant_Group_6"] = 237)] =
    "Prop_Plant_Group_6";
  LaneObjectType[(LaneObjectType["Prop_Forest_Cliff_1"] = 238)] =
    "Prop_Forest_Cliff_1";
  LaneObjectType[(LaneObjectType["Prop_Forest_Cliff_2"] = 239)] =
    "Prop_Forest_Cliff_2";
  LaneObjectType[(LaneObjectType["Prop_Forest_Cliff_3"] = 240)] =
    "Prop_Forest_Cliff_3";
  LaneObjectType[(LaneObjectType["Prop_Forest_Water_Island_1"] = 241)] =
    "Prop_Forest_Water_Island_1";
  LaneObjectType[(LaneObjectType["Prop_Forest_Water_Island_2"] = 242)] =
    "Prop_Forest_Water_Island_2";
  LaneObjectType[(LaneObjectType["Prop_Forest_Water_Cattail_1"] = 243)] =
    "Prop_Forest_Water_Cattail_1";
  LaneObjectType[(LaneObjectType["Prop_Forest_Water_Cattail_2"] = 244)] =
    "Prop_Forest_Water_Cattail_2";
  LaneObjectType[(LaneObjectType["Prop_Forest_Water_Cattail_3"] = 245)] =
    "Prop_Forest_Water_Cattail_3";
  LaneObjectType[(LaneObjectType["Prop_Forest_Cliff_Waterfall_1"] = 246)] =
    "Prop_Forest_Cliff_Waterfall_1";
  LaneObjectType[(LaneObjectType["Prop_Station_Goo_Container_01_L"] = 247)] =
    "Prop_Station_Goo_Container_01_L";
  LaneObjectType[(LaneObjectType["Prop_Station_Goo_Container_01_R"] = 248)] =
    "Prop_Station_Goo_Container_01_R";
  LaneObjectType[(LaneObjectType["Prop_Station_Platform_01"] = 249)] =
    "Prop_Station_Platform_01";
  LaneObjectType[(LaneObjectType["Prop_Station_Platform_02"] = 250)] =
    "Prop_Station_Platform_02";
  LaneObjectType[(LaneObjectType["Prop_Station_Side_Door_L_01"] = 251)] =
    "Prop_Station_Side_Door_L_01";
  LaneObjectType[(LaneObjectType["Prop_Station_Side_Door_L_02"] = 252)] =
    "Prop_Station_Side_Door_L_02";
  LaneObjectType[(LaneObjectType["Prop_Station_Side_Door_R_01"] = 253)] =
    "Prop_Station_Side_Door_R_01";
  LaneObjectType[(LaneObjectType["Prop_Station_Side_Door_R_02"] = 254)] =
    "Prop_Station_Side_Door_R_02";
  LaneObjectType[(LaneObjectType["Prop_Station_Ceiling_Support"] = 255)] =
    "Prop_Station_Ceiling_Support";
  LaneObjectType[(LaneObjectType["Prop_Station_Crossroad"] = 256)] =
    "Prop_Station_Crossroad";
  LaneObjectType[(LaneObjectType["Prop_Station_Horizontal_Lane"] = 257)] =
    "Prop_Station_Horizontal_Lane";
  LaneObjectType[(LaneObjectType["Prop_Station_Goo_Container_02"] = 258)] =
    "Prop_Station_Goo_Container_02";
  LaneObjectType[(LaneObjectType["Prop_Station_Goo_Container_03"] = 259)] =
    "Prop_Station_Goo_Container_03";
  LaneObjectType[(LaneObjectType["Prop_Station_Space_Box_01"] = 260)] =
    "Prop_Station_Space_Box_01";
  LaneObjectType[
    (LaneObjectType["Prop_Station_Sealed_Container_Large"] = 261)
  ] = "Prop_Station_Sealed_Container_Large";
  LaneObjectType[
    (LaneObjectType["Prop_Station_Sealed_Container_Small"] = 262)
  ] = "Prop_Station_Sealed_Container_Small";
  LaneObjectType[(LaneObjectType["Prop_Station_Incubator"] = 263)] =
    "Prop_Station_Incubator";
  LaneObjectType[
    (LaneObjectType["Prop_Station_Lower_Bridge_Narrow_Hall"] = 264)
  ] = "Prop_Station_Lower_Bridge_Narrow_Hall";
  LaneObjectType[(LaneObjectType["Prop_Station_Goo_Pipe_01"] = 265)] =
    "Prop_Station_Goo_Pipe_01";
  LaneObjectType[(LaneObjectType["Prop_Station_Goo_Pipe_02"] = 266)] =
    "Prop_Station_Goo_Pipe_02";
  LaneObjectType[(LaneObjectType["Prop_Station_Pipe_Top"] = 267)] =
    "Prop_Station_Pipe_Top";
  LaneObjectType[(LaneObjectType["Prop_Station_Neon_Plant"] = 268)] =
    "Prop_Station_Neon_Plant";
  LaneObjectType[(LaneObjectType["Prop_Station_Toxic_Barrel"] = 269)] =
    "Prop_Station_Toxic_Barrel";
  LaneObjectType[(LaneObjectType["Prop_Station_Computer_R"] = 270)] =
    "Prop_Station_Computer_R";
  LaneObjectType[(LaneObjectType["Prop_Station_Computer_L"] = 271)] =
    "Prop_Station_Computer_L";
  LaneObjectType[(LaneObjectType["Prop_Reserver"] = 300)] = "Prop_Reserver";
  LaneObjectType[(LaneObjectType["Collectable_OxygenBottle"] = 301)] =
    "Collectable_OxygenBottle";
  LaneObjectType[(LaneObjectType["Collectable_SignalBooster"] = 302)] =
    "Collectable_SignalBooster";
  LaneObjectType[(LaneObjectType["Collectable_Sledgehammer"] = 303)] =
    "Collectable_Sledgehammer";
  LaneObjectType[(LaneObjectType["Collectable_BlueprintPiece"] = 304)] =
    "Collectable_BlueprintPiece";
  LaneObjectType[(LaneObjectType["Collectable_EvilFlyingCameraDrone"] = 305)] =
    "Collectable_EvilFlyingCameraDrone";
  LaneObjectType[(LaneObjectType["Collectable_Banknotes"] = 306)] =
    "Collectable_Banknotes";
  LaneObjectType[(LaneObjectType["Collectable_EvilDevices"] = 307)] =
    "Collectable_EvilDevices";
  LaneObjectType[
    (LaneObjectType["Collectable_EvilSurveillanceBalloons"] = 308)
  ] = "Collectable_EvilSurveillanceBalloons";
  LaneObjectType[(LaneObjectType["Collectable_WaterBottle"] = 309)] =
    "Collectable_WaterBottle";
  LaneObjectType[(LaneObjectType["Collectable_EnergyIcon"] = 310)] =
    "Collectable_EnergyIcon";
  LaneObjectType[(LaneObjectType["Collectable_EvilPropagandaLeaflet"] = 311)] =
    "Collectable_EvilPropagandaLeaflet";
  LaneObjectType[(LaneObjectType["Collectable_Matches"] = 312)] =
    "Collectable_Matches";
  LaneObjectType[(LaneObjectType["Collectable_DNASample"] = 313)] =
    "Collectable_DNASample";
  LaneObjectType[(LaneObjectType["Collectable_ScentTrail"] = 314)] =
    "Collectable_ScentTrail";
  LaneObjectType[(LaneObjectType["Collectable_Letter"] = 315)] =
    "Collectable_Letter";
  LaneObjectType[(LaneObjectType["Collectable_SecurityTape"] = 316)] =
    "Collectable_SecurityTape";
  LaneObjectType[(LaneObjectType["Collectable_VillainToken"] = 317)] =
    "Collectable_VillainToken";
  LaneObjectType[(LaneObjectType["Collectable_Magnet3D"] = 318)] =
    "Collectable_Magnet3D";
  LaneObjectType[(LaneObjectType["Collectable_SuperPowers"] = 319)] =
    "Collectable_SuperPowers";
  LaneObjectType[(LaneObjectType["Collectable_Reserved_15"] = 320)] =
    "Collectable_Reserved_15";
  LaneObjectType[(LaneObjectType["Collectable_Reserved_16"] = 321)] =
    "Collectable_Reserved_16";
  LaneObjectType[(LaneObjectType["Collectable_Reserved_17"] = 322)] =
    "Collectable_Reserved_17";
  LaneObjectType[(LaneObjectType["Collectable_Reserved_18"] = 323)] =
    "Collectable_Reserved_18";
  LaneObjectType[(LaneObjectType["Collectable_Reserved_19"] = 324)] =
    "Collectable_Reserved_19";
  LaneObjectType[(LaneObjectType["Collectable_Reserved_20"] = 325)] =
    "Collectable_Reserved_20";
  LaneObjectType[(LaneObjectType["COUNT"] = 326)] = "COUNT";
})(LaneObjectType || (LaneObjectType = {}));

// LevelParserGUI.js
/* jshint esversion: 6 */
var LevelParserGui = pc.createScript("levelParserGui");
var datGuiInstance;
var ParserConfigObject;

LevelParserGui.prototype.initialize = function () {
  this.root = this.app.root.findByName("Root");
  this.blockContainer = this.app.root.findByName("BlockContainer");
  this.levelParserScript = this.root.script.levelParser;

  this.createParserConfigObject();
  this.createDATGuiInstance();
};

LevelParserGui.prototype.createParserConfigObject = function () {
  ParserConfigObject = {
    testValue: 1,
    testCheck: true,
    blockJson: this.levelParserScript.levelSourceFile.name,
    load: () => this.levelParserScript.load(ParserConfigObject.blockJson),
    rebuild: () => this.levelParserScript.rebuild(),
    clear: () => this.levelParserScript.clear(),

    /* listened values */
    lanePieces: 0,
    terrainPieces: 0,
    props: 0,
    laneObjects: 0,
  };
};

LevelParserGui.prototype.createDATGuiInstance = function () {
  datGuiInstance = new dat.GUI();

  // this.addOption(datGuiInstance, ParserConfigObject, 'testValue', 0, 10, 1, this.updateConfigValue, this);
  // this.addBooleanOption(datGuiInstance, ParserConfigObject, 'testCheck', this.updateConfigValue, this);
  this.addStringOption(
    datGuiInstance,
    ParserConfigObject,
    "blockJson",
    this.updateConfigValue,
    this
  ).listen();
  this.addMethod(datGuiInstance, ParserConfigObject, "load");
  this.addMethod(datGuiInstance, ParserConfigObject, "rebuild");
  this.addMethod(datGuiInstance, ParserConfigObject, "clear");

  this.levelParserScript.on(
    "attr:levelSourceFile",
    (value) => (ParserConfigObject.blockJson = value.name)
  );

  document
    .querySelector(".dg.main.a")
    .addEventListener("mousedown", (e) => e.stopPropagation());
  document
    .querySelector(".close-button")
    .addEventListener("mousedown", (e) => e.stopPropagation());
};

LevelParserGui.prototype.update = function (dt) {};

LevelParserGui.prototype.updateConfigValue = function (key, value) {
  famobi.log("Value updated ", key, ":", value);
};

LevelParserGui.prototype.addOption = function (
  folder,
  optionHolder,
  optionKey,
  min,
  max,
  step,
  listener,
  listenerContext
) {
  return folder
    .add(optionHolder, optionKey, min, max)
    .onChange((value) => listener.call(listenerContext, optionKey, value))
    .step(step);
};

LevelParserGui.prototype.addStringOption = function (
  folder,
  optionHolder,
  optionKey,
  listener,
  listenerContext
) {
  return folder
    .add(optionHolder, optionKey)
    .onChange((value) => listener.call(listenerContext, optionKey, value));
};

LevelParserGui.prototype.addBooleanOption = function (
  folder,
  optionHolder,
  optionKey,
  listener,
  listenerContext
) {
  return folder
    .add(optionHolder, optionKey)
    .onChange((value) => listener.call(listenerContext, optionKey, value));
};

LevelParserGui.prototype.addMethod = function (
  folder,
  optionHolder,
  optionKey
) {
  return folder.add(optionHolder, optionKey);
};

LevelParserGui.prototype.addListenedValue = function (
  folder,
  optionHolder,
  optionKey
) {
  return folder.add(optionHolder, optionKey).listen();
};

// CoinsStorage.js
/* jshint esversion: 6 */
var CoinsStorage = pc.createScript("coinsStorage");

CoinsStorage.getInstance = function () {
  if (!CoinsStorage._instance)
    throw new Error("CoinsStorage is not initialized yet");
  return CoinsStorage._instance;
};

CoinsStorage.prototype.initialize = function () {
  CoinsStorage._app = this.app;
  if (!CoinsStorage._instance) {
    CoinsStorage._instance = this;
  }

  /* initialize varibles */
  this._numCoins = LocalStorageController.getSavedValue(
    Constants.Storage.COINS
  );
  this._sessionCoins = 0;

  this.app.on(EventTypes.GAMEPLAY_LAUNCH, this.onGameplayLaunched, this);
  this.app.on(EventTypes.COIN_PICKED_UP, this.onCoinPickedUp, this);
};

CoinsStorage.prototype.onCoinPickedUp = function (numCoins, worldPosition) {
  if (!this.levelEntity) {
    this.levelEntity = this.app.root.findByName("Level");
  }

  Apicontroller.trackStats(
    "coins_collected",
    {
      method: PowerupManager.getInstance().isActive(Powerups.MAGNET)
        ? "magnetized"
        : "picked_up",
      during_stunt: this.levelEntity.gameState.isStuntActive(),
    },
    numCoins
  );

  this.addCoins(numCoins, false, true);
};

CoinsStorage.prototype.onGameplayLaunched = function () {
  this._sessionCoins = 0;
};

CoinsStorage.prototype.getTotalCoins = function () {
  return this._numCoins;
};

CoinsStorage.prototype.getSessionCoins = function () {
  return this._sessionCoins;
};

CoinsStorage.prototype.setTotalCoins = function (value) {
  this._numCoins = Math.max(Math.floor(value), 0);
  this.app.fire(EventTypes.COINS_AMOUNT_CHANGED, this._numCoins);
};

CoinsStorage.prototype.addCoins = function (
  addValue,
  skipSessionCoins = false,
  skipSaving = false
) {
  if (!skipSessionCoins) {
    this._sessionCoins += Math.floor(addValue);
  }
  this._numCoins += Math.floor(addValue);
  this.app.fire(EventTypes.COINS_AMOUNT_CHANGED, this._numCoins);
  if (!skipSaving) this.app.fire(EventTypes.SAVE_APP);
};

CoinsStorage.prototype.decreaseCoins = function (decreaseValue) {
  Apicontroller.trackStats("coins_spent", {}, Math.abs(decreaseValue));
  this._numCoins -= Math.min(
    this._numCoins,
    Math.floor(Math.abs(decreaseValue))
  );
  this.app.fire(EventTypes.COINS_AMOUNT_CHANGED, this._numCoins);
};

CoinsStorage.prototype.hasEnoughCoins = function (compareValue) {
  return this._numCoins >= compareValue;
};

CoinsStorage.prototype.update = function (dt) {};

// coinsCounter.js
/* jshint esversion: 6 */
var CoinsCounter = pc.createScript("coinsCounter");

CoinsCounter.prototype.initialize = function () {
  this.coinIcon = this.entity.findByName("CoinIcon");
  this.coinsAmountText = this.entity.findByName("CoinsAmountText");

  this.coinsValueFrozen = false;

  this.app.on(
    EventTypes.COINS_AMOUNT_CHANGED,
    this.updateVisibleCoinsAmount,
    this
  );

  /* set initial amount of coins */
  this.updateVisibleCoinsAmount(CoinsStorage.getInstance().getTotalCoins());

  this.assignEntityMethods();
};

CoinsCounter.prototype.update = function (dt) {
  if (isUIHidden("coins")) {
    this.entity.enabled = false;
  }
};

CoinsCounter.prototype.assignEntityMethods = function () {
  const scriptContext = this;

  this.entity.setCoinsValueFrozen = function (value) {
    scriptContext.coinsValueFrozen = value;
    if (!value) {
      this.actualizeCoinsValue();
    }
  }.bind(this.entity);

  this.entity.actualizeCoinsValue = function () {
    scriptContext.updateVisibleCoinsAmount(
      CoinsStorage.getInstance().getTotalCoins()
    );
  }.bind(this.entity);
};

CoinsCounter.prototype.updateVisibleCoinsAmount = function (value) {
  if (!this.coinsValueFrozen) {
    this.coinsAmountText.element.text = `${value}`;

    if (
      this.entity.enabled &&
      this.entity.parent &&
      this.entity.parent.enabled
    ) {
      if (this.coinsAmountTextTween && this.coinsAmountTextTween.playing)
        this.coinsAmountTextTween.stop();
      this.coinsAmountText.setLocalScale(0.5, 0.5, 0.5);
      this.coinsAmountText
        .tween(this.coinsAmountText.getLocalScale())
        .to({ x: 1, y: 1, z: 1 }, 0.25, pc.BackOut)
        .start();

      if (this.coinIconTween && this.coinIconTween.playing)
        this.coinIconTween.stop();
      this.coinIcon.setLocalScale(1.2, 0.75, 1);
      this.coinIconTween = this.coinIcon
        .tween(this.coinIcon.getLocalScale())
        .to({ x: 1, y: 1, z: 1 }, 0.95, pc.ElasticOut)
        .start();
    }
  }
};

// musicController.js
/* jshint esversion: 6 */
var MusicController = pc.createScript("musicController");

MusicController.attributes.add("musicStorage", {
  title: "Music storage entity",
  type: "entity",
});

MusicController.attributes.add("autoPlayMelodyKey", {
  title: "Auto play melody Key",
  type: "string",
  default: "",
});

MusicController.attributes.add("autoPlayMelody", {
  title: "Auto play melody",
  type: "boolean",
  default: false,
});

MusicController.attributes.add("musicAssets", {
  title: "Music assets",
  type: "json",
  schema: [
    {
      name: "key",
      type: "string",
      default: "",
    },
    {
      name: "asset",
      type: "asset",
      assetType: "audio",
    },
    {
      name: "volume",
      type: "number",
      default: 1.0,
    },
    {
      name: "loop",
      type: "boolean",
      default: false,
    },
  ],
  array: true,
});

MusicController.musicStateLoaded = false;
MusicController.musicEnabled = true;

MusicController.prototype.initialize = function () {
  this.app.on(EventTypes.PLAY_MUSIC, this.playMusic, this);
  this.app.on(EventTypes.STOP_MUSIC, this.stopMusic, this);

  this.app.on(EventTypes.MUTE_SOUND, this.muteSound, this);
  this.app.on(EventTypes.UNMUTE_SOUND, this.unmuteSound, this);
  this.app.on(EventTypes.ENABLE_MUSIC, this.enableMusic, this);
  this.app.on(EventTypes.DISABLE_MUSIC, this.disableMusic, this);
  this.app.on(EventTypes.ENABLE_SFX, this.enableSfx, this);
  this.app.on(EventTypes.DISABLE_SFX, this.disableSfx, this);
  this.app.on(EventTypes.APP_LOADED, this.onAppLoaded, this);
  this.app.on(EventTypes.START_GAMEPLAY_MUSIC, this.startGameplayMusic, this);
  this.app.on(EventTypes.START_MENU_MUSIC, this.startMenuMusic, this);

  this.fireMusicStateChangedEvent();

  const savedMusicState = LocalStorageController.getSavedValue(
    Constants.Storage.MUSIC_STATE
  );
  if (savedMusicState != undefined) {
    MusicController.musicStateLoaded = true;
    if (savedMusicState) {
      if (!this.autoPlayMelody) {
        this.disableMusic(false);
        console.warn(
          `Music has not started due to disabled 'MusicController.autoPlayMelody' parameter`
        );
      } else {
        this.enableMusic(false);
      }
    } else {
      this.disableMusic(false);
    }
  } else {
    MusicController.musicStateLoaded = true;
    if (this.autoPlayMelody) {
      this.enableMusic(false);
    } else {
      this.disableMusic(false);
    }
  }
};

MusicController.prototype.playMusic = function (key, stopOthers = true) {
  this.currentMusicKey = key;
  if (stopOthers) {
    for (let slotKey in this.musicStorage.sound.slots) {
      this.musicStorage.sound.slot(slotKey).stop();
    }
  }
  this.musicStorage.sound.play(key);
};

MusicController.prototype.stopMusic = function (key) {
  this.musicStorage.sound.stop(key);
};

MusicController.prototype.enableMusic = function (saveApp = true) {
  MusicController.musicEnabled = true;
  this.musicStorage.sound.volume = 1;
  this.fireMusicStateChangedEvent();
  if (saveApp) this.app.fire(EventTypes.SAVE_APP);
  if (this.currentMusicKey) {
    this.app.fire(EventTypes.PLAY_MUSIC, this.currentMusicKey);
  }
};

MusicController.prototype.disableMusic = function (saveApp = true) {
  MusicController.musicEnabled = false;
  this.musicStorage.sound.volume = 0;
  this.fireMusicStateChangedEvent();
  if (saveApp) this.app.fire(EventTypes.SAVE_APP);
};

MusicController.prototype.muteSound = function (key) {
  this.musicStorage.sound.slot(key).volume = 0;
};

MusicController.prototype.unmuteSound = function (key, volume) {
  this.musicStorage.sound.slot(key).volume = volume;
};

MusicController.prototype.update = function (dt) {};

MusicController.prototype.fireMusicStateChangedEvent = function () {
  this.app.fire(EventTypes.MUSIC_STATE_CHANGED, MusicController.musicEnabled);
};

MusicController.prototype.onAppLoaded = function () {
  famobi.log("Menu loaded, preloading audio...");
  this.createSoundsSlots();
};

MusicController.prototype.createSoundsSlots = function () {
  this.musicAssets.forEach((asset) => {
    this.entity.sound.addSlot(asset.key, asset);
  });
};

MusicController.prototype.startGameplayMusic = function () {
  if (MusicController.musicEnabled) {
    this.app.fire(EventTypes.PLAY_MUSIC, Constants.AUDIO.MUSIC_GAMEPLAY);
  }
};

MusicController.prototype.startMenuMusic = function () {
  if (MusicController.musicEnabled) {
    this.app.fire(EventTypes.PLAY_MUSIC, Constants.AUDIO.MUSIC_MENU);
  }
};

// characterAnimator.js
/* jshint esversion: 6 */
var CharacterAnimator = pc.createScript("characterAnimator");

CharacterAnimator.attributes.add("correctModelTransformAnimationKey", {
  type: "string",
  default: "Super_Nom_Collide_Minor_L.glb",
});

CharacterAnimator.prototype.initialize = function () {
  this.animationsSequence = {
    animations: [],
    playing: false,
    loopLastAnimationInSequence: false,
    correctModelTransform: false,
    transitionDuration: 0,
  };
  this.currentAnimationPriority = Constants.AimationPriority.LOWEST;

  this.app.on(EventTypes.LEVEL_START, this.resetPriority, this);
  this.app.on(EventTypes.GAMEPLAY_EXIT, this.resetPriority, this);
  this.app.on(
    EventTypes.GAMEPLAY_RESTARTED_EXTERNALLY,
    this.resetPriority,
    this
  );
  this.app.on(EventTypes.GAMEPLAY_LAUNCH, this.resetPriority, this);
  this.entity.on(EventTypes.ANIMATION_END, this.handleAnimationEnded, this);
  this.app.on(
    EventTypes.PLAY_CHARACTER_ANIMATION,
    this.playSingleAnimation,
    this
  );
  this.app.on(
    EventTypes.PLAY_CHARACTER_ANIMATIONS_CHAIN,
    this.playAnimationsChain,
    this
  );
  this.app.on(
    EventTypes.SET_CHARACTER_ANIMATION_SPEED,
    this.setAnimationSpeed,
    this
  );
};

CharacterAnimator.prototype.update = function (dt) {};

CharacterAnimator.prototype.resetPriority = function () {
  this.currentAnimationPriority = Constants.AimationPriority.LOWEST;
};

CharacterAnimator.prototype.setAnimationSpeed = function (speed) {
  this.entity.animation.speed = speed;
};

CharacterAnimator.prototype.playSingleAnimation = function (
  animationName,
  loop,
  correctModelTransform,
  transitionDuration,
  priority = Constants.AimationPriority.NORMAL
) {
  if (priority < this.currentAnimationPriority) {
    // console.warn(`Animation ${animationName} is skipped due to lower priority ${priority}<${this.currentAnimationPriority}`);
    return;
  }
  this.currentAnimationPriority = priority;
  this.resetAnimationsSequence();
  this._playAnimation(
    animationName,
    loop,
    correctModelTransform,
    transitionDuration
  );
};

CharacterAnimator.prototype.playAnimationsChain = function (
  animationNames,
  loopLastAnimation = false,
  correctModelTransform = true,
  priority = Constants.AimationPriority.NORMAL,
  transitionDuration = 0
) {
  if (animationNames.length > 0) {
    if (priority < this.currentAnimationPriority) {
      // console.warn(`Animations chain ${animationNames.toString()} is skipped due to lower priority ${priority}<${this.currentAnimationPriority}`);
      return;
    }
    this.currentAnimationPriority = priority;

    // console.log('Playing animations chain ', animationNames, loopLastAnimation, correctModelTransform);

    this.animationsSequence.animations = animationNames;
    this.animationsSequence.playing = true;
    this.animationsSequence.loopLastAnimationInSequence = loopLastAnimation;
    this.animationsSequence.correctModelTransform = correctModelTransform;
    this.animationsSequence.transitionDuration = transitionDuration;

    this._playAnimation(
      this.animationsSequence.animations[0],
      this.animationsSequence.animations.length === 1
        ? this.animationsSequence.loopLastAnimationInSequence
        : false,
      true,
      0
    ); //this.animationsSequence.correctModelTransform, this.animationsSequence.correctModelTransform ? 0 : transitionDuration);
  }
};

/* private */

CharacterAnimator.prototype._playAnimation = function (
  animationName,
  loop,
  correctModelTransform,
  transitionDuration
) {
  if (GameConfig.getAttribute("debugInfo")) {
    famobi.log(
      "OmNom: play animation",
      animationName,
      loop,
      correctModelTransform,
      transitionDuration
    );
  }

  /* hardcode fix for broken dyintg/dead animation */
  if (correctModelTransform) {
    this.entity.animation.play(this.correctModelTransformAnimationKey, 0);
  }
  this.entity.animation.loop = loop;
  this.entity.animation.play(
    animationName,
    correctModelTransform ? 0 : transitionDuration
  );
};

CharacterAnimator.prototype.handleAnimationEnded = function (animationKey) {
  this.app.fire(EventTypes.CHARACTER_ANIMATION_FINISHED, animationKey);

  if (
    this.animationsSequence.playing &&
    this.animationsSequence.animations.indexOf(animationKey) != -1
  ) {
    const justFinishedAnimationIndex =
      this.animationsSequence.animations.indexOf(animationKey);
    this.animationsSequence.animations.splice(
      0,
      justFinishedAnimationIndex + 1
    );

    if (this.animationsSequence.animations.length > 0) {
      this._playAnimation(
        this.animationsSequence.animations[0],
        this.animationsSequence.animations.length === 1
          ? this.animationsSequence.loopLastAnimationInSequence
          : false,
        this.animationsSequence.correctModelTransform,
        this.animationsSequence.transitionDuration
      );
    } else {
      this.entity.fire(EventTypes.ANIMATION_END_SEQUENCE);
      this.resetAnimationsSequence();
    }
  }
};

CharacterAnimator.prototype.resetAnimationsSequence = function () {
  this.animationsSequence.animations = [];
  this.animationsSequence.playing = false;
};

// blockBuilder.js
/* jshint esversion: 6 */
var BlockBuilder = pc.createScript("blockBuilder");

BlockBuilder._instance = null;

BlockBuilder.getInstance = function () {
  return this._instance;
};

BlockBuilder.prototype.initialize = function () {
  if (!BlockBuilder._instance) {
    BlockBuilder._instance = this;
  }
  this.objectsIdentifiers = this.app.assets.find(
    "ObjectsIdentifiers.json",
    "json"
  ).resource;

  this.builderStartTimestamp = 0;
  this.builderEndTimestamp = 0;
};

BlockBuilder.prototype.update = function (dt) {};

BlockBuilder.prototype.buildBlock = function (blockName, blockJSON) {
  this.levelData = blockJSON;

  /* measure performance */
  this.builderStartTimestamp = performance.now();

  /* prepare block entity structure */
  const blockEntity = new pc.Entity(blockName.replace(".json", ""));
  blockEntity.levelData = Object.assign({}, this.levelData);

  const lanePiecesContainer = new pc.Entity(
    Constants.BlockComponentsContainer.LanePiecesContainer
  );
  blockEntity.addChild(lanePiecesContainer);

  const terrainContainer = new pc.Entity(
    Constants.BlockComponentsContainer.TerrainContainer
  );
  blockEntity.addChild(terrainContainer);

  const propsContainer = new pc.Entity(
    Constants.BlockComponentsContainer.PropsContainer
  );
  blockEntity.addChild(propsContainer);

  const laneObjectsContainer = new pc.Entity(
    Constants.BlockComponentsContainer.LaneObjectsContainer
  );
  blockEntity.addChild(laneObjectsContainer);

  this.currentSite = this.objectsIdentifiers.site[this.levelData.Site];
  this.theme = this.objectsIdentifiers.themes[this.levelData.Site];

  this.buildLanePieces(lanePiecesContainer);
  this.buildTerrain(terrainContainer);
  this.buildProps(propsContainer);
  this.buildLaneObjects(laneObjectsContainer);

  /* end performance measurement */
  this.builderEndTimestamp = performance.now();
  this.warn(
    `Block '${blockName}' is built in ${
      this.builderEndTimestamp - this.builderStartTimestamp
    } ms`
  );

  return blockEntity;
};

BlockBuilder.prototype.buildBlockFromDefinition = function (blockDefinition) {
  return this.buildBlock(blockDefinition.name, blockDefinition.resource);
};

BlockBuilder.prototype.buildBlockFromFileName = function (jsonName) {
  const jsonAsset = this.app.assets.find(jsonName, "json");
  if (!jsonAsset || !jsonAsset.resource) {
    console.error(`Level JSON '${jsonName}' not found`);
    return null;
  }
  const blockJSON = jsonAsset.resource;
  return this.buildBlock(jsonName, blockJSON);
};

BlockBuilder.prototype.buildLanePieces = function (parentContainer) {
  const setLanePiecePosition = (index, lanePieceInstance, lanePart) =>
    lanePieceInstance.setLocalPosition(
      (index - 1) * -3,
      Constants.getLanePartYPos(lanePart.LayerMultiplier),
      0
    );

  this.levelData.LanePieces.forEach((lanePiece, index) => {
    const laneParts = new pc.Entity();
    laneParts.reparent(parentContainer);
    laneParts.setLocalPosition(0, 0, 6 * index);

    lanePiece.LaneParts.forEach((lanePart, index) => {
      try {
        if (lanePart.AssetIndex >= 0) {
          const lanePieceType =
            this.objectsIdentifiers.lane[this.currentSite][lanePart.AssetIndex];
          this.log("lane piece type - ", lanePieceType);

          const lanePieceId = this.app.assets.find(lanePieceType).id;
          // this.log('lane piece id - ', lanePieceId);
          const lanePieceInstance =
            LevelObjectPool.getInstance().buildEntityFromTemplate(lanePieceId);
          // this.log('lane piece Layer - ', lanePart.LayerMultiplier);

          if (
            this.levelData.Site === Constants.Site.Nomville_Streets &&
            (lanePart.AssetIndex === 6 || lanePart.AssetIndex === 16)
          ) {
            setLanePiecePosition(index, lanePieceInstance, lanePart);
          } else if (
            this.levelData.Site === Constants.Site.Nomville_StormDrain &&
            (lanePart.AssetIndex === 15 || lanePart.AssetIndex === 16)
          ) {
            setLanePiecePosition(index, lanePieceInstance, lanePart);
          } else if (
            this.levelData.Site === Constants.Site.Nomville_Fruitmarket &&
            lanePart.AssetIndex === 6
          ) {
            setLanePiecePosition(index, lanePieceInstance, lanePart);
          } else if (
            this.levelData.Site === Constants.Site.Nomville_Rooftops &&
            lanePart.AssetIndex === 9
          ) {
            setLanePiecePosition(index, lanePieceInstance, lanePart);
          } else if (
            this.levelData.Site === Constants.Site.Highway_MagicForest &&
            lanePart.AssetIndex === 3
          ) {
            setLanePiecePosition(index, lanePieceInstance, lanePart);
          } else if (
            this.levelData.Site === Constants.Site.Highway_RobotFactory &&
            lanePart.AssetIndex === 4
          ) {
            setLanePiecePosition(index, lanePieceInstance, lanePart);
          } else if (
            this.levelData.Site === Constants.Site.Highway_SpaceStation &&
            lanePart.AssetIndex === 3
          ) {
            setLanePiecePosition(index, lanePieceInstance, lanePart);
          } else {
            lanePieceInstance.setLocalPosition(
              0,
              Constants.getLanePartYPos(lanePart.LayerMultiplier),
              0
            );
          }

          lanePieceInstance.reparent(laneParts);
          lanePieceInstance.enabled = true;
        } else if (lanePart.AssetIndex === -2) {
          if (this.levelData.Site === Constants.Site.Nomville_StormDrain) {
            const lanePieceType =
              this.objectsIdentifiers.lane[this.currentSite][20];
            const lanePieceId = this.app.assets.find(lanePieceType).id;
            const lanePieceInstance =
              LevelObjectPool.getInstance().buildEntityFromTemplate(
                lanePieceId
              );

            setLanePiecePosition(index, lanePieceInstance, lanePart);
            lanePieceInstance.reparent(laneParts);
            lanePieceInstance.enabled = true;
          } else if (this.levelData.Site === Constants.Site.Nomville_Rooftops) {
            const lanePieceType =
              this.objectsIdentifiers.lane[this.currentSite][13];
            const lanePieceId = this.app.assets.find(lanePieceType).id;
            const lanePieceInstance =
              LevelObjectPool.getInstance().buildEntityFromTemplate(
                lanePieceId
              );

            setLanePiecePosition(index, lanePieceInstance, lanePart);
            lanePieceInstance.reparent(laneParts);
            lanePieceInstance.enabled = true;
          }
        }
      } catch (error) {
        this.warn(error);
      }
    });
  });
};

BlockBuilder.prototype.buildTerrain = function (parentContainer) {
  this.levelData.TerrainAssetIndexes.forEach((terrainPiece, index) => {
    try {
      if (terrainPiece >= 0) {
        const terrainPieceType =
          this.objectsIdentifiers.terrain[this.theme][this.currentSite][
            terrainPiece
          ];
        // this.log('terrain piece index - ', terrainPiece);
        this.log("terrain piece type - ", terrainPieceType);

        const terrainPieceId = this.app.assets.find(terrainPieceType).id;
        // this.log('terrain piece id - ', terrainPieceId);

        const terrainPieceInstance =
          LevelObjectPool.getInstance().buildEntityFromTemplate(terrainPieceId);

        terrainPieceInstance.reparent(parentContainer);
        terrainPieceInstance.enabled = true;
        terrainPieceInstance.setLocalPosition(0, 0, 6 * index);
      }
    } catch (error) {
      this.warn(error);
    }
  });
};

BlockBuilder.prototype.buildProps = function (parentContainer) {
  this.levelData.Props.forEach((prop, index) => {
    try {
      const propType = LaneObjectType[prop.PropType];
      this.log("prop type ", prop.PropType, " name ", propType);
      const propId = this.app.assets.find(propType, "template").id;
      // this.log('prop id ', propId);
      const propInstance =
        LevelObjectPool.getInstance().buildEntityFromTemplate(propId);

      if (prop.DisableShadow) {
        const propShadow = propInstance.findByName("shadow");
        propShadow.enabled = false;
      }

      this.setShadowElevationRecursively(propInstance);

      propInstance.reparent(parentContainer);
      propInstance.enabled = true;
      propInstance.setLocalPosition(
        -prop.LocalPosition.x,
        prop.LocalPosition.y,
        prop.LocalPosition.z
      );
      propInstance.setLocalEulerAngles(
        prop.LocalRotation.x,
        -prop.LocalRotation.y,
        prop.LocalRotation.z
      );
      propInstance.setLocalScale(
        prop.LocalScale.x,
        prop.LocalScale.y,
        prop.LocalScale.z
      );
    } catch (error) {
      this.warn(error);
    }
  });
};

BlockBuilder.prototype.buildLaneObjects = function (parentContainer) {
  this.levelData.LaneObjects.forEach((laneObject, index) => {
    try {
      const {
        GroupType,
        ObjectType,
        UsesSharedAsset,
        ObjectAssetIndex,
        RandomizeLane,
        DisableShadow,
        Layer,
        Width,
        CustomPosition,
        ReactToPlayedDist,
        CannotCollide,
        MovementDirection,
        MovementSpeed,
        StoppingDistance,
        ChildObjectType,
        ChildUsesSharedAsset,
        ChildObjectAssetIndex,
        ChildObjectCount,
        ChildObjectExtraOffset,
        GroupCurve,
        ParentZBounds,
        ChildrenZBounds,
      } = laneObject;

      const lane = 3 * laneObject.Lane;
      let laneObjectType = null; //define it
      let laneObjectAssetIndex = null; //this too
      let groupChildLaneObjectType = null;
      let groupChildLaneObjectAssetIndex = null; //this too

      if (GroupType === 1) {
        laneObjectType = LaneObjectType[ChildObjectType];
        laneObjectAssetIndex = ChildObjectAssetIndex;
      } else if (GroupType === 2) {
        laneObjectType = LaneObjectType[ObjectType];
        laneObjectAssetIndex = ObjectAssetIndex;
        groupChildLaneObjectType = LaneObjectType[ChildObjectType];
        groupChildLaneObjectAssetIndex = ChildObjectAssetIndex;
      } else {
        laneObjectType = LaneObjectType[ObjectType];
        laneObjectAssetIndex = ObjectAssetIndex;
      }

      // this.log('group type - ', GroupType, ' object type - ', ObjectType, ' usesSharedAsset - ', UsesSharedAsset, ' child object type - ', ChildObjectType);
      this.log(
        "lane object type - ",
        laneObjectType,
        " lane object asset index - ",
        laneObjectAssetIndex
      );

      const assetType = this.objectsIdentifiers.assetType[laneObjectType];
      let laneObjectAsset = null;
      if (assetType === "Obstacles") {
        laneObjectAsset = UsesSharedAsset
          ? this.objectsIdentifiers.laneObjects[assetType][this.theme][
              "Shared"
            ][laneObjectType][laneObjectAssetIndex]
          : this.objectsIdentifiers.laneObjects[assetType][this.theme][
              this.currentSite
            ][laneObjectType][laneObjectAssetIndex];
      } else {
        laneObjectAsset =
          this.objectsIdentifiers.laneObjects[assetType][laneObjectType][
            laneObjectAssetIndex
          ];
      }

      this.group(laneObjectType + " assetIndex " + laneObjectAssetIndex);
      this.log("Template name: ", laneObjectAsset);
      // this.log('asset type - ', assetType);

      let instantiatedObject;
      if (GroupType === 1) {
        instantiatedObject = this.instantiateGroupLaneObjects(
          laneObjectAsset,
          laneObject
        );
      } else if (GroupType === 2) {
        const groupChildAssetType =
          this.objectsIdentifiers.assetType[groupChildLaneObjectType];
        let groupChildLaneObjectAsset = null;
        if (groupChildAssetType === "Obstacles") {
          groupChildLaneObjectAsset = ChildUsesSharedAsset
            ? this.objectsIdentifiers.laneObjects[groupChildAssetType][
                this.theme
              ]["Shared"][groupChildLaneObjectType][
                groupChildLaneObjectAssetIndex
              ]
            : this.objectsIdentifiers.laneObjects[groupChildAssetType][
                this.theme
              ][this.currentSite][groupChildLaneObjectType][
                groupChildLaneObjectAssetIndex
              ];
        } else {
          groupChildLaneObjectAsset =
            this.objectsIdentifiers.laneObjects[groupChildAssetType][
              groupChildLaneObjectType
            ][groupChildLaneObjectAssetIndex];
        }
        instantiatedObject = this.instantiateGroupWithParentLaneObjects(
          laneObjectAsset,
          groupChildLaneObjectAsset,
          laneObject
        );
        // this.log("Instantiated groupWithParentObject: ", instantiatedObject);
      } else {
        instantiatedObject = this.instantiateSingleLaneObject(
          laneObjectAsset,
          laneObject
        );
      }

      /* copy data */
      instantiatedObject.laneObjectData = {};
      Object.assign(instantiatedObject.laneObjectData, laneObject);

      instantiatedObject.reparent(parentContainer); // parentContainer.addChild(instantiatedObject);
      this.setShadowElevationRecursively(instantiatedObject);

      let positionX = 0;
      if (CustomPosition) {
        positionX = -laneObject.Position.x;
        positionY = laneObject.Position.y;
      } else {
        positionX = -lane / (Width || 1);
        positionY = laneObject.Position.y + Constants.getObjectYPos(Layer);
      }

      /* quick fix for wrong colliders position in case scaleZ < 0 */
      let applyZScaleCorrection = laneObject.Scale.z < 0;
      let applyXScaleCorrection = laneObject.Scale.x < 0;
      if (
        (applyZScaleCorrection || applyXScaleCorrection) &&
        !instantiatedObject.scaleCorrected
      ) {
        instantiatedObject.children.forEach((child) => {
          if (child.collision && !child.model) {
            const childScale = child.getLocalScale();
            childScale.z = applyZScaleCorrection ? -childScale.z : childScale.z;
            childScale.x = applyXScaleCorrection ? -childScale.x : childScale.x;
            child.setLocalScale(childScale);
          }
        });
        instantiatedObject.scaleCorrected = true;
      }

      instantiatedObject.setLocalPosition(
        positionX,
        positionY,
        laneObject.Position.z
      );
      instantiatedObject.setLocalEulerAngles(
        laneObject.Rotation.x % 360,
        -laneObject.Rotation.y % 360,
        laneObject.Rotation.z % 360
      );
      instantiatedObject.setLocalScale(
        laneObject.Scale.x,
        laneObject.Scale.y,
        laneObject.Scale.z
      );
      instantiatedObject.enabled = true;

      this.log("Position: " + instantiatedObject.getLocalPosition().toString());
      this.log(
        "Rotation: " + instantiatedObject.getLocalEulerAngles().toString()
      );
      this.log("Scale: " + instantiatedObject.getLocalScale().toString());
      this.groupEnd();

      if (instantiatedObject.getLocalScale().length() === 0) {
        // this.warn('Warning: ' + instantiatedObject.name + ' is not visible due to scale is 0. Reseting to [1, 1, 1]...');
        instantiatedObject.setLocalScale(1, 1, 1);
      }

      this.enableMovementForLaneObject(instantiatedObject, laneObject);

      // this.log(laneObjectAsset + "instantiated as ",  instantiatedObject, " at position ", instantiatedObject.getLocalPosition(), " with scale ", instantiatedObject.getLocalScale());
    } catch (error) {
      this.warn(error);
    }
  });
};

BlockBuilder.prototype.instantiateGroupWithParentLaneObjects = function (
  laneObjectAsset,
  childLaneObjectAsset,
  laneObject
) {
  const {
    ChildObjectCount,
    ChildObjectExtraOffset,
    GroupCurve,
    Layer,
    ParentZBounds,
    ChildrenZBounds,
  } = laneObject;

  /* add parent lane object (usually train head) */
  const parentGroup = new pc.Entity();
  parentGroup.name = Constants.LANE_OBJECTS_GROUP_WITH_PARENT;
  const parentLaneObjectInstance = this.instantiateSingleLaneObject(
    laneObjectAsset,
    laneObject
  );
  parentLaneObjectInstance.reparent(parentGroup); //parentGroup.addChild(parentLaneObjectInstance);

  /* add children objects */
  const childrenGroup = new pc.Entity();
  childrenGroup.name = "LaneObjectsChildrenGroup";
  childrenGroup.reparent(parentGroup); // parentGroup.addChild(childrenGroup);

  // const childSpacingValue = GroupCurve === CurveGroupType.None ? ChildObjectExtraOffset : curveData.childSpacing;

  for (let i = 0; i < ChildObjectCount; i++) {
    const childLaneObjectInstance = this.instantiateSingleLaneObject(
      childLaneObjectAsset,
      laneObject
    );
    childLaneObjectInstance.reparent(childrenGroup); // childrenGroup.addChild(childLaneObjectInstance);
    childLaneObjectInstance.setLocalPosition(
      0,
      0,
      ParentZBounds / 2 +
        ChildrenZBounds * 0.5 +
        ChildrenZBounds * i +
        ChildObjectExtraOffset * (i + 1)
    );
  }

  return parentGroup;
};

BlockBuilder.prototype.instantiateGroupLaneObjects = function (
  laneObjectAsset,
  laneObject
) {
  const {
    ChildObjectCount,
    ChildObjectExtraOffset,
    GroupCurve,
    Layer,
    ChildrenZBounds,
    ParentZBounds,
  } = laneObject;
  const laneObjectsGroup = new pc.Entity();
  laneObjectsGroup.name = "LaneObjectsGroup";
  const curveData = GroupCurves.get(GroupCurve);
  const childSpacingValue =
    GroupCurve === CurveGroupType.None
      ? ChildObjectExtraOffset + ChildrenZBounds / 2
      : curveData.childSpacing;

  for (let i = 0; i < ChildObjectCount; i++) {
    const laneObjectInstance = this.instantiateSingleLaneObject(
      laneObjectAsset,
      laneObject
    );
    laneObjectInstance.reparent(laneObjectsGroup); // laneObjectsGroup.addChild(laneObjectInstance);

    const curveValue = curveData.curve.value(i / curveData.length);
    const childOffset = new pc.Vec3();

    switch (GroupCurve) {
      case CurveGroupType.None:
        break;
      case CurveGroupType.LeftOneLane:
      case CurveGroupType.LeftTwoLanes:
        childOffset.x += curveValue * 3;
        break;
      case CurveGroupType.RightOneLane:
      case CurveGroupType.RightTwoLanes:
        childOffset.x -= curveValue * 3;
        break;
      case CurveGroupType.FullJump:
      case CurveGroupType.JumpFirstHalf:
      case CurveGroupType.JumpLastHalf:
      case CurveGroupType.JumpDownFromH2:
        childOffset.y += curveValue * 3;
        break;
    }

    laneObjectInstance.setLocalPosition(
      childOffset.x,
      childOffset.y,
      childOffset.z + i * childSpacingValue
    );
  }

  return laneObjectsGroup;
};

BlockBuilder.prototype.instantiateSingleLaneObject = function (
  laneObjectAsset,
  laneObject
) {
  const { DisableShadow } = laneObject;
  const laneObjectId = this.app.assets.find(laneObjectAsset, "template").id;

  // const laneObjectTemplate = this.app.assets.get(laneObjectId);
  // const laneObjectInstance = laneObjectTemplate.resource.instantiate();
  const laneObjectInstance =
    LevelObjectPool.getInstance().buildEntityFromTemplate(laneObjectId);
  laneObjectInstance.enabled = true;
  // this.log('lane object id ' + laneObjectId);

  laneObjectInstance.setLocalPosition(0, 0, 0);
  laneObjectInstance.setLocalEulerAngles(0, 0, 0);

  if (DisableShadow) {
    const laneObjectShadow = laneObjectInstance.findByName("shadow");
    laneObjectShadow.enabled = false;
  }

  return laneObjectInstance;
};

BlockBuilder.prototype.setShadowElevationRecursively = function (entity) {
  if (entity.name === "shadow") {
    const localPosition = entity.getLocalPosition();
    if (!entity.originPosition)
      entity.originPosition = new pc.Vec3().copy(localPosition);
    localPosition.y = entity.originPosition.y + Math.random() * 0.04;
    entity.setLocalPosition(localPosition);
  }

  entity.children.forEach((child) => this.setShadowElevationRecursively(child));
};

BlockBuilder.prototype.enableMovementForLaneObject = function (
  laneObjectInstance,
  laneObjectData
) {
  if (
    laneObjectData.MovementSpeed >= 0.001 &&
    laneObjectData.MovementDirection !== Constants.MovementDirection.None
  ) {
    if (!laneObjectInstance.findComponent("script")) {
      laneObjectInstance.addComponent("script");
    }
    if (!laneObjectInstance.script.has("laneObjectMovement")) {
      laneObjectInstance.script.create("laneObjectMovement");
    }

    laneObjectInstance.script.laneObjectMovement.resetTargetPosition(
      laneObjectInstance.getLocalPosition()
    );
  } else {
    laneObjectInstance.targetLocalPosition = undefined;
  }
};

/* Logging */
BlockBuilder.prototype._loggingEnabled = function () {
  if (!GameConfig || !GameConfig.instance) return true;
  return !!GameConfig.getAttribute("blockBuilderDebugInfo");
};

BlockBuilder.prototype._displayTriggers = function () {
  if (!GameConfig || !GameConfig.instance) return true;
  return !!GameConfig.getAttribute("blockBuilderDisplayTriggers");
};

BlockBuilder.prototype.log = function (...args) {
  if (this._loggingEnabled()) console.log(...args);
};

BlockBuilder.prototype.warn = function (...args) {
  if (this._loggingEnabled()) console.warn(...args);
};

BlockBuilder.prototype.error = function (...args) {
  if (this._loggingEnabled()) console.error(...args);
};

BlockBuilder.prototype.group = function (...args) {
  if (this._loggingEnabled()) console.group(...args);
};

BlockBuilder.prototype.groupEnd = function (...args) {
  if (this._loggingEnabled()) console.groupEnd(...args);
};

/* static */

BlockBuilder.getBlockLength = function (blockEntity) {
  return blockEntity.levelData.BlockLength * 6;
};

/* get resources */

BlockBuilder.prototype.getLanePiecesAssets = function () {
  const lanePartIDs = [];

  this.levelData.LanePieces.forEach((lanePiece, index) => {
    lanePiece.LaneParts.forEach((lanePart, index) => {
      try {
        if (lanePart.AssetIndex >= 0) {
          const lanePieceType =
            this.objectsIdentifiers.lane[this.currentSite][lanePart.AssetIndex];
          const lanePieceId = this.app.assets.find(lanePieceType).id;

          if (lanePartIDs.indexOf(lanePieceId) === -1) {
            lanePartIDs.push(lanePieceId);
          }
        } else if (lanePart.AssetIndex === -2) {
          if (this.levelData.Site === Constants.Site.Nomville_StormDrain) {
            const lanePieceType =
              this.objectsIdentifiers.lane[this.currentSite][20];
            const lanePieceId = this.app.assets.find(lanePieceType).id;

            if (lanePartIDs.indexOf(lanePieceId) === -1) {
              lanePartIDs.push(lanePieceId);
            }
          }
        }
      } catch (error) {
        this.warn(error);
      }
    });
  });

  return lanePartIDs;
};

BlockBuilder.prototype.getTerrainAssets = function () {
  const terrainAssetsIDs = [];

  this.levelData.TerrainAssetIndexes.forEach((terrainPiece, index) => {
    try {
      if (terrainPiece >= 0) {
        const terrainPieceType =
          this.objectsIdentifiers.terrain[this.theme][this.currentSite][
            terrainPiece
          ];
        const terrainPieceId = this.app.assets.find(terrainPieceType).id;

        if (terrainAssetsIDs.indexOf(terrainPieceId) === -1) {
          terrainAssetsIDs.push(terrainPieceId);
        }
      }
    } catch (error) {
      this.warn(error);
    }
  });

  return terrainAssetsIDs;
};

BlockBuilder.prototype.getPropsAssets = function () {
  const propAssetsIDs = [];

  this.levelData.Props.forEach((prop, index) => {
    try {
      const propType = LaneObjectType[prop.PropType];
      const propId = this.app.assets.find(propType, "template").id;

      if (propAssetsIDs.indexOf(propId) === -1) {
        propAssetsIDs.push(propId);
      }
    } catch (error) {
      this.warn(error);
    }
  });
  return propAssetsIDs;
};

BlockBuilder.prototype.getLaneObjectsAssets = function () {
  const laneObjectIDs = [];

  this.levelData.LaneObjects.forEach((laneObject, index) => {
    try {
      const {
        GroupType,
        ObjectType,
        UsesSharedAsset,
        ObjectAssetIndex,
        RandomizeLane,
        DisableShadow,
        Layer,
        Width,
        CustomPosition,
        ReactToPlayedDist,
        CannotCollide,
        MovementDirection,
        MovementSpeed,
        StoppingDistance,
        ChildObjectType,
        ChildUsesSharedAsset,
        ChildObjectAssetIndex,
        ChildObjectCount,
        ChildObjectExtraOffset,
        GroupCurve,
        ParentZBounds,
        ChildrenZBounds,
      } = laneObject;

      const lane = 3 * laneObject.Lane;
      let laneObjectType = null; //define it
      let laneObjectAssetIndex = null; //this too
      let groupChildLaneObjectType = null;
      let groupChildLaneObjectAssetIndex = null; //this too

      if (GroupType === 1) {
        laneObjectType = LaneObjectType[ChildObjectType];
        laneObjectAssetIndex = ChildObjectAssetIndex;
      } else if (GroupType === 2) {
        laneObjectType = LaneObjectType[ObjectType];
        laneObjectAssetIndex = ObjectAssetIndex;
        groupChildLaneObjectType = LaneObjectType[ChildObjectType];
        groupChildLaneObjectAssetIndex = ChildObjectAssetIndex;
      } else {
        laneObjectType = LaneObjectType[ObjectType];
        laneObjectAssetIndex = ObjectAssetIndex;
      }

      const assetType = this.objectsIdentifiers.assetType[laneObjectType];
      let laneObjectAsset = null;
      if (assetType === "Obstacles") {
        laneObjectAsset = UsesSharedAsset
          ? this.objectsIdentifiers.laneObjects[assetType][this.theme][
              "Shared"
            ][laneObjectType][laneObjectAssetIndex]
          : this.objectsIdentifiers.laneObjects[assetType][this.theme][
              this.currentSite
            ][laneObjectType][laneObjectAssetIndex];
      } else {
        laneObjectAsset =
          this.objectsIdentifiers.laneObjects[assetType][laneObjectType][
            laneObjectAssetIndex
          ];
      }

      if (GroupType === 1) {
        const laneObjectId = this.app.assets.find(
          laneObjectAsset,
          "template"
        ).id;
        if (laneObjectIDs.indexOf(laneObjectId) === -1) {
          laneObjectIDs.push(laneObjectId);
        }
      } else if (GroupType === 2) {
        const groupChildAssetType =
          this.objectsIdentifiers.assetType[groupChildLaneObjectType];
        let groupChildLaneObjectAsset = null;
        if (groupChildAssetType === "Obstacles") {
          groupChildLaneObjectAsset = UsesSharedAsset
            ? this.objectsIdentifiers.laneObjects[groupChildAssetType][
                this.theme
              ]["Shared"][groupChildLaneObjectType][
                groupChildLaneObjectAssetIndex
              ]
            : this.objectsIdentifiers.laneObjects[groupChildAssetType][
                this.theme
              ][this.currentSite][groupChildLaneObjectType][
                groupChildLaneObjectAssetIndex
              ];
        } else {
          groupChildLaneObjectAsset =
            this.objectsIdentifiers.laneObjects[groupChildAssetType][
              groupChildLaneObjectType
            ][groupChildLaneObjectAssetIndex];
        }

        const laneObjectId = this.app.assets.find(
          laneObjectAsset,
          "template"
        ).id;
        if (laneObjectIDs.indexOf(laneObjectId) === -1) {
          laneObjectIDs.push(laneObjectId);
        }

        const childLaneObjectId = this.app.assets.find(
          groupChildLaneObjectAsset,
          "template"
        ).id;
        if (laneObjectIDs.indexOf(childLaneObjectId) === -1) {
          laneObjectIDs.push(childLaneObjectId);
        }
      } else {
        const laneObjectId = this.app.assets.find(
          laneObjectAsset,
          "template"
        ).id;
        if (laneObjectIDs.indexOf(laneObjectId) === -1) {
          laneObjectIDs.push(laneObjectId);
        }
      }
    } catch (error) {
      this.warn(error);
    }
  });
  return laneObjectIDs;
};

BlockBuilder.prototype.getBlockResourcesList = function (blockData) {
  const blockJSON = blockData;

  this.levelData = blockJSON;
  this.currentSite = this.objectsIdentifiers.site[blockJSON.Site];
  this.theme = this.objectsIdentifiers.themes[blockJSON.Site];

  const assetIDs = {
    lanePieces: this.getLanePiecesAssets(),
    terrains: this.getTerrainAssets(),
    props: this.getPropsAssets(),
    laneObjects: this.getLaneObjectsAssets(),
  };

  return assetIDs;
};

// roadBlocksManager.js
/* jshint esversion: 6 */
var RoadBlocksManager = pc.createScript("roadBlocksManager");

RoadBlocksManager.attributes.add("initialBlockZ", {
  type: "number",
  default: -7,
});

RoadBlocksManager.prototype.initialize = function () {
  this.entity.blocksContainer =
    this.entity.blocksContainer || this.entity.findByName("BlocksContainer");

  this.blocks = [];
  this.blocksQueue = [];
  this.landingBlock = null;
  this.activeBlock = null;
  this.currentTestBlockIndex = 0;

  this.app.on(
    EventTypes.REATTACH_SIDE_BLOCKS_IN_FRONT_ON_JUNCTION_COMPLETED,
    this.reattachSideJunctionBlocksInFront,
    this
  );
  this.app.on(
    EventTypes.Gameplay.TOSS_NEARBY_OBSTACLES,
    this.tossNearbyObstacles,
    this
  );
  this.app.on(
    EventTypes.Gameplay.TOSS_OBSTACLES_WITHIN_RANGE,
    this.tossObstaclesInRange,
    this
  );
  this.app.on(
    EventTypes.GAMEPLAY_PRELOAD_BLOCKS_LIST,
    this.preloadBlocksList,
    this
  );
  // this.app.on(EventTypes.GAMEPLAY_LAUNCH, this.onGameplayLaunched, this);
  this.app.on(EventTypes.LEVEL_START, this.onLevelStart, this);
  this.app.on(EventTypes.LEVEL_EXIT, this.destroyCurrentBlocks, this);
  this.app.on(
    EventTypes.GAMEPLAY_RESTARTED_EXTERNALLY,
    this.destroyCurrentBlocks,
    this
  );

  this.assignEntityMethods();
};

RoadBlocksManager.prototype.assignEntityMethods = function () {
  const scriptContext = this;

  this.entity.getActiveBlock = function () {
    return scriptContext.activeBlock;
  }.bind(this.entity);

  this.entity.getActiveBlockRunDistance = function () {
    const block = this.getActiveBlock();
    if (block) {
      return -block.getPosition().z;
    } else {
      return 0;
    }
  }.bind(this.entity);

  this.entity.getActiveBlockProgress = function () {
    const block = this.getActiveBlock();
    if (block) {
      return (
        this.getActiveBlockRunDistance() / BlockBuilder.getBlockLength(block)
      );
    } else {
      return 0;
    }
  }.bind(this.entity);
};

RoadBlocksManager.prototype.preloadBlocksList = function () {
  this.siteBlocksLoaded = false;

  this.entity.blocksContainer.enabled = true;
  this.entity.spaceContainer.enabled = false;

  this.destroyCurrentBlocks();

  this.detectCurrentMissionSite();

  /* clear cache */
  LevelObjectPool.getInstance().setCurrentSiteIndex(
    MissionsManager.getInstance().getCurrentMissionSite()
  );

  this.loadSiteBlocks().then(() => this.onSiteBlocksLoaded());
};

RoadBlocksManager.prototype.onSiteBlocksLoaded = function () {
  this.siteBlocksLoaded = true;

  setTimeout(() => {
    this.app.fire(EventTypes.GAMEPLAY_LAUNCH);

    this.preloadSiteResources();

    /* Cache V2 */
    this.createNextBlocks();
    for (let i = 0; i < 2; i++) {
      //create a few more blocks
      const block = this.appendBlockByName(this.getNextBlockName());
      block.enabled = false;
    }
  }, 0);
};

// RoadBlocksManager.prototype.onGameplayLaunched = function() {

//     this.entity.blocksContainer.enabled = true;
//     this.entity.spaceContainer.enabled = false;

//     this.destroyCurrentBlocks();

//     this.detectCurrentMissionSite();

//     /* clear cache */
//     LevelObjectPool.getInstance().setCurrentSiteIndex(MissionsManager.getInstance().getCurrentMissionSite());

//     this.loadSiteBlocks();

// /* Cache V1 */
// //     this.createNextBlocks();
// //     this.precacheNextBlocks(5);

//     this.preloadSiteResources();

// /* Cache V2 */
//     this.createNextBlocks();
//     for(let i = 0; i < 2; i++) {
//         //create a few more blocks
//         const block = this.appendBlockByName(this.getNextBlockName());
//         block.enabled = false;
//     }

// /* Cache V3 */
// //     this.createNextBlocks();
// //     const blocksAmount = 10;
// //     console.error(`Precaching ${blocksAmount} blocks...`);
// //     for(let i = 0; i < blocksAmount; i++) {

// //         const blockName = this.getFutureBlockName(i);
// //         const blockData = this.blocksQueue.find(blockDef => blockDef.name === blockName).resource;
// //         const blockResources = BlockBuilder.getInstance().getBlockResourcesList(blockData);

// //         LevelObjectPool.getInstance().precacheBlockResources(blockResources);

// //         console.log(`[Precached] block ${blockName}...`);
// //     }

// };

RoadBlocksManager.prototype.preloadSiteResources = function () {
  const assetsIDsSet = new Set();
  const addToSet = function (assetID) {
    assetsIDsSet.add(assetID);
  };

  for (let i = 0; i < this.blocksQueue.length; i++) {
    const blockData = this.blocksQueue[i].resource;
    const blockResources =
      BlockBuilder.getInstance().getBlockResourcesList(blockData);

    blockResources.lanePieces.forEach(addToSet);
    blockResources.terrains.forEach(addToSet);
    blockResources.props.forEach(addToSet);
    blockResources.laneObjects.forEach(addToSet);
  }

  famobi.log("Preloading " + assetsIDsSet.size + " block assets...");
  assetsIDsSet.forEach((templateID) =>
    LevelObjectPool.getInstance().preloadTemplateAssets(templateID)
  );
};

RoadBlocksManager.prototype.detectCurrentMissionSite = function () {
  const currentMissionData =
    MissionsManager.getInstance().getCurrentMissionData();
  let currentMissionSite = currentMissionData.site;

  if (
    currentMissionData.type ===
    "theme" /*&& MissionsManager.getInstance().getMaxUnlockedMissionIndex() === currentMissionData.index*/
  ) {
    currentMissionSite = currentMissionData.site;
  } else {
    currentMissionSite = Utils.getRandomItem(
      currentMissionData.siteRestrictions
    );
  }

  MissionsManager.getInstance().setCurrentMissionSite(currentMissionSite);
};

RoadBlocksManager.prototype.loadSiteBlocks = function () {
  return new Promise((resolve, reject) => {
    const currentMissionSite =
      MissionsManager.getInstance().getCurrentMissionSite();
    const currentMissionData =
      MissionsManager.getInstance().getCurrentMissionData();
    const currentMissionType = currentMissionData.missionType;

    if (!BlocksStorage.getInstance().shuffleBlocks) {
      console.error("Make sure BlockStorage.shuffleBlocks option is active!");
    }

    BlocksStorage.getInstance()
      .getSiteBlocks(currentMissionSite)
      .then((result) => {
        const siteBlocks = result.slice();
        const preparedSiteBlocks = BlocksStorage.getInstance().shuffleBlocks
          ? Utils.shuffle(siteBlocks)
          : siteBlocks.slice().sort((a, b) => (a.name < b.name ? -1 : 1));
        let allBlocks = this.insertMoreJunctionBlocks(preparedSiteBlocks);
        allBlocks =
          currentMissionType === "PerformStunts"
            ? this.insertStuntBlocks(allBlocks)
            : this.insertStuntBlocks(allBlocks, 1.5);
        const landingBlocks = allBlocks.filter(
          (blockDef) => blockDef.resource.BlockType === BlockType.StartingBlock
        );

        this.landingBlock =
          landingBlocks.length > 0
            ? Utils.getRandomItem(landingBlocks)
            : Utils.getRandomItem(allBlocks);
        this.blocksQueue = [this.landingBlock, ...allBlocks];

        if (
          BlocksStorage.getInstance().startFromBlock &&
          !BlocksStorage.getInstance().shuffleBlocks
        ) {
          const startIndex = this.blocksQueue.findIndex(
            (elem) => elem.name === BlocksStorage.getInstance().startFromBlock
          );
          this.blocksQueue = this.blocksQueue.slice(Math.max(startIndex, 0));
        }

        console.log(`Prepared ${this.blocksQueue.length} site blocks`);

        resolve();
      });
  });

  //     const currentMissionSite =  MissionsManager.getInstance().getCurrentMissionSite();
  //     const currentMissionData = MissionsManager.getInstance().getCurrentMissionData();
  //     const currentMissionType = currentMissionData.missionType;

  //     if(!BlocksStorage.getInstance().shuffleBlocks) {
  //         console.error('Make sure BlockStorage.shuffleBlocks option is active!');
  //     }

  //     const siteBlocks = BlocksStorage.getInstance().getSiteBlocks(currentMissionSite).slice();
  //     const preparedSiteBlocks = BlocksStorage.getInstance().shuffleBlocks ? Utils.shuffle(siteBlocks) : siteBlocks.slice().sort((a,b) => a.name < b.name ? -1 : 1 );
  //     let allBlocks = this.insertMoreJunctionBlocks(preparedSiteBlocks);
  //     allBlocks = (currentMissionType === 'PerformStunts') ? this.insertStuntBlocks(allBlocks) : this.insertStuntBlocks(allBlocks, 1.5);
  //     const landingBlocks = allBlocks.filter(blockDef => blockDef.resource.BlockType === BlockType.StartingBlock);

  //     this.landingBlock = landingBlocks.length > 0 ? Utils.getRandomItem(landingBlocks) : Utils.getRandomItem(allBlocks);
  //     this.blocksQueue = [this.landingBlock, ...allBlocks];

  //     if(BlocksStorage.getInstance().startFromBlock && !BlocksStorage.getInstance().shuffleBlocks) {
  //          const startIndex = this.blocksQueue.findIndex(elem => elem.name === BlocksStorage.getInstance().startFromBlock);
  //          this.blocksQueue = this.blocksQueue.slice(Math.max(startIndex, 0));
  //     }

  //     // console.log(`Prepared ${this.blocksQueue.length} site blocks`);
};

RoadBlocksManager.prototype.insertStuntBlocks = function (
  siteBlocks,
  delayMultiplier
) {
  const stuntBlockGap = GameConfig.getAttribute("stuntBlockGap");
  const stuntBlocks = siteBlocks.filter(
    (block) => block.resource.BlockType === Constants.BlockType.Stunt
  );
  const nonStuntBlocks = siteBlocks.filter(
    (block) => block.resource.BlockType !== Constants.BlockType.Stunt
  );
  const stuntDelayMultiplier = delayMultiplier || 1;
  if (stuntBlocks.length > 0) {
    let nextStuntBlockIn = Math.floor(
      pc.math.random(
        stuntBlockGap.x * stuntDelayMultiplier,
        stuntBlockGap.y * stuntDelayMultiplier
      )
    );
    for (let i = 0; i < nonStuntBlocks.length; i++) {
      if (nextStuntBlockIn-- <= 0) {
        nonStuntBlocks.splice(i, 0, Utils.getRandomItem(stuntBlocks));
        nextStuntBlockIn = Math.floor(
          pc.math.random(
            stuntBlockGap.x * stuntDelayMultiplier,
            stuntBlockGap.y * stuntDelayMultiplier
          )
        );
      }
    }
    return nonStuntBlocks;
  } else {
    return siteBlocks;
  }
};

RoadBlocksManager.prototype.insertMoreJunctionBlocks = function (siteBlocks) {
  const junctionBlockGap = GameConfig.getAttribute("junctionBlockGap");
  const junctionBlocks = siteBlocks.filter(
    (block) =>
      block.resource.BlockType === Constants.BlockType.Junction_Left ||
      block.resource.BlockType === Constants.BlockType.Junction_Right ||
      block.resource.BlockType === Constants.BlockType.Junction_LeftAndRight
  );
  const nonJunctionBlocks = siteBlocks.filter(
    (block) =>
      block.resource.BlockType !== Constants.BlockType.Junction_Left &&
      block.resource.BlockType !== Constants.BlockType.Junction_Right &&
      block.resource.BlockType !== Constants.BlockType.Junction_LeftAndRight
  );
  if (junctionBlocks.length > 0) {
    let nextBlockIn = Math.floor(
      pc.math.random(junctionBlockGap.x, junctionBlockGap.y)
    );
    for (let i = 0; i < nonJunctionBlocks.length; i++) {
      if (nextBlockIn-- <= 0) {
        nonJunctionBlocks.splice(i, 0, Utils.getRandomItem(junctionBlocks));
        nextBlockIn = Math.floor(
          pc.math.random(junctionBlockGap.x, junctionBlockGap.y)
        );
      }
    }
    return nonJunctionBlocks;
  } else {
    return siteBlocks;
  }
};

RoadBlocksManager.prototype.onLevelStart = function () {
  // console.log(`Level is starting, creating a few first road blocks...`);
};

RoadBlocksManager.prototype.destroyCurrentBlocks = function () {
  // console.log(`Destroying ${this.blocks.length} road blocks...`);
  for (let i = this.blocks.length - 1; i > -1; i--) {
    this.disposeBlock(this.blocks[i]);
  }
  this.activeBlock = null;
  this.currentTestBlockIndex = 0;
};

RoadBlocksManager.prototype.getNextBlockLocalZPosition = function () {
  if (this.blocks.length === 0) {
    return this.initialBlockZ;
  }
  const fahrtestBlock = this.blocks[this.blocks.length - 1];
  return (
    fahrtestBlock.getLocalPosition().z +
    BlockBuilder.getBlockLength(fahrtestBlock)
  );
};

RoadBlocksManager.prototype.appendBlockByName = function (jsonName) {
  const zPosition = this.getNextBlockLocalZPosition();
  const blockEntity = this.instantiateBlockByName(jsonName);
  this.entity.blocksContainer.addChild(blockEntity);
  blockEntity.setLocalPosition(0, 0, zPosition);
  this.blocks.push(blockEntity);
  // console.log(`Added block ${jsonName} at z=${blockEntity.getLocalPosition().z.toFixed(1)}...`);

  if (blockEntity.levelData.BlockType === BlockType.Junction_Left) {
    this.attachBlocksToLeftJunction(blockEntity);
  } else if (blockEntity.levelData.BlockType === BlockType.Junction_Right) {
    this.attachBlocksToRightJunction(blockEntity);
  } else if (
    blockEntity.levelData.BlockType === BlockType.Junction_LeftAndRight
  ) {
    this.attachBlocksToLeftJunction(blockEntity);
    this.attachBlocksToRightJunction(blockEntity);
  }

  return blockEntity;
};

RoadBlocksManager.prototype.instantiateBlockByName = function (jsonName) {
  const blockEntity = BlockBuilder.getInstance().buildBlock(
    jsonName,
    BlocksStorage.getInstance().getBlockByName(jsonName)
  );
  // this.disablePhysicsRecursive(blockEntity);
  return blockEntity;
};

RoadBlocksManager.prototype.attachBlocksToLeftJunction = function (
  junctionBlock
) {
  const siteOptions = SiteOptions[junctionBlock.levelData.Site];
  const junctionRadius = siteOptions.junctionRadius;

  junctionBlock.nextLeftBlocksContainer = new pc.Entity("NextLeftBlocks");
  junctionBlock.addChild(junctionBlock.nextLeftBlocksContainer);
  junctionBlock.nextLeftBlocksContainer.setLocalPosition(
    junctionRadius,
    0,
    junctionRadius
  );
  junctionBlock.nextLeftBlocksContainer.setLocalEulerAngles(0, 90, 0);

  let nextSubBlockZPosition = 0;
  while (
    nextSubBlockZPosition < GameConfig.getAttribute("worldVisibleDistance")
  ) {
    const blockEntity = this.instantiateBlockByName(
      junctionBlock.nextLeftBlocksContainer.children.length === 0
        ? this.landingBlock.name
        : this.getNextNonJunctionBlockName()
    );
    junctionBlock.nextLeftBlocksContainer.addChild(blockEntity);
    blockEntity.setLocalPosition(0, 0, nextSubBlockZPosition);
    nextSubBlockZPosition += BlockBuilder.getBlockLength(blockEntity);
  }
};

RoadBlocksManager.prototype.attachBlocksToRightJunction = function (
  junctionBlock
) {
  const siteOptions = SiteOptions[junctionBlock.levelData.Site];
  const junctionRadius = siteOptions.junctionRadius;

  junctionBlock.nextRightBlocksContainer = new pc.Entity("NextLeftBlocks");
  junctionBlock.addChild(junctionBlock.nextRightBlocksContainer);
  junctionBlock.nextRightBlocksContainer.setLocalPosition(
    -junctionRadius,
    0,
    junctionRadius
  );
  junctionBlock.nextRightBlocksContainer.setLocalEulerAngles(0, -90, 0);

  let nextSubBlockZPosition = 0;
  while (
    nextSubBlockZPosition < GameConfig.getAttribute("worldVisibleDistance")
  ) {
    const blockEntity = this.instantiateBlockByName(
      junctionBlock.nextRightBlocksContainer.children.length === 0
        ? this.landingBlock.name
        : this.getNextNonJunctionBlockName()
    );
    junctionBlock.nextRightBlocksContainer.addChild(blockEntity);
    blockEntity.setLocalPosition(0, 0, nextSubBlockZPosition);
    nextSubBlockZPosition += BlockBuilder.getBlockLength(blockEntity);
  }
};

RoadBlocksManager.prototype.update = function (dt) {
  if (this.entity.gameState.isGameRunningOrIdle()) {
    if (!this.siteBlocksLoaded) {
      famobi.log("Waiting until site blocks loaded...");
      return;
    }

    this.manageCollidersStatuses();
    this.manageFutureBlocksVisibility();
    this.removeAlreadyPassedBlocks();
    this.createNextBlocks();
    this.detectActiveBlock();
  } else {
    this.activeBlock = null;
  }
};

RoadBlocksManager.prototype.needsAddingBlocks = function () {
  const nextBlockLocalZ = this.getNextBlockLocalZPosition();
  const blocksContainerZ = this.entity.blocksContainer.getLocalPosition().z;
  return (
    nextBlockLocalZ + blocksContainerZ <
    GameConfig.getAttribute("worldVisibleDistance")
  );
};

RoadBlocksManager.prototype.precacheNextBlocks = function (blocksAmount) {
  // console.log(`Precaching ${blocksAmount} blocks...`);
  let currentZ = this.initialBlockZ - 5.0;
  for (let i = 0; i < blocksAmount; i++) {
    const blockEntity = this.instantiateBlockByName(this.getFutureBlockName(i));
    // this.disposeBlock(blockEntity);

    this.entity.blocksContainer.addChild(blockEntity);
    currentZ -= BlockBuilder.getBlockLength(blockEntity);
    blockEntity.setLocalPosition(0, 0, currentZ);
    // this.blocks.unshift(blockEntity);
    // console.log(`[Precached] added block ${blockEntity.name} at z=${blockEntity.getLocalPosition().z.toFixed(1)}...`);
    setTimeout(() => {
      this.disposeBlock(blockEntity);
    }, i * 100);
  }
};

RoadBlocksManager.prototype.createNextBlocks = function () {
  while (this.needsAddingBlocks()) {
    this.appendBlockByName(this.getNextBlockName());
  }
};

RoadBlocksManager.prototype.getFutureBlockName = function (futureIndex) {
  return this.blocksQueue[
    (this.currentTestBlockIndex + futureIndex) % this.blocksQueue.length
  ].name;
};

RoadBlocksManager.prototype.getNextBlockName = function () {
  /* if prev block was 'junction', next should be 'empty' */
  if (
    this.blocks &&
    this.blocks[this.blocks.length - 1] &&
    [
      BlockType.Junction_Left,
      BlockType.Junction_LeftAndRight,
      BlockType.Junction_Right,
    ].indexOf(this.blocks[this.blocks.length - 1].levelData.BlockType) != -1
  ) {
    return this.landingBlock.name;
  }
  return this.blocksQueue[
    this.currentTestBlockIndex++ % this.blocksQueue.length
  ].name;
};

RoadBlocksManager.prototype.getNextNonJunctionBlockName = function () {
  let nonJunctionBlocksSet = this.blocksQueue.filter(
    (testBlock) =>
      [
        BlockType.Junction_Right,
        BlockType.Junction_Left,
        BlockType.Junction_LeftAndRight,
        BlockType.LowLaneEntrance,
        BlockType.HighLaneEntrance,
      ].indexOf(testBlock.resource.BlockType) === -1
  );
  return Utils.getRandomItem(nonJunctionBlocksSet).name;
};

RoadBlocksManager.prototype.manageFutureBlocksVisibility = function () {
  const maxVisibilityDistance = GameConfig.getAttribute("worldVisibleDistance");
  const blocksContainerPosition =
    this.entity.blocksContainer.getLocalPosition();
  for (let i = this.blocks.length - 1; i > -1; i--) {
    const roadBlock = this.blocks[i];
    const roadBlockPosition = roadBlock.getLocalPosition();

    if (roadBlock.alreadyPassed) continue;

    if (
      roadBlockPosition.z + blocksContainerPosition.z < maxVisibilityDistance &&
      !roadBlock.enabled
    ) {
      roadBlock.enabled = true;
    }
  }
};

RoadBlocksManager.prototype.removeAlreadyPassedBlocks = function () {
  const deadZoneZ = this.entity.getCameraDeadZoneZ();
  const blocksContainerPosition =
    this.entity.blocksContainer.getLocalPosition();
  for (let i = this.blocks.length - 1; i > -1; i--) {
    const roadBlock = this.blocks[i];
    const roadBlockPosition = roadBlock.getLocalPosition();
    /* mark as passed by */
    if (
      roadBlockPosition.z +
        BlockBuilder.getBlockLength(roadBlock) +
        blocksContainerPosition.z <
      0
    ) {
      roadBlock.alreadyPassed = true;
    }
    /* if it's completely passed by, remove it from the scene */
    if (
      roadBlockPosition.z +
        BlockBuilder.getBlockLength(roadBlock) +
        blocksContainerPosition.z <
      deadZoneZ
    ) {
      this.disposeBlock(roadBlock);
    }
  }
};

RoadBlocksManager.prototype.removeAllBlocksBut = function (block) {
  for (let i = this.blocks.length - 1; i > -1; i--) {
    if (this.blocks[i] != block) {
      this.disposeBlock(this.blocks[i]);
    }
  }
};

RoadBlocksManager.prototype.removeForwardBlocks = function () {
  const blocksContainerPosition =
    this.entity.blocksContainer.getLocalPosition();
  for (let i = this.blocks.length - 1; i > -1; i--) {
    const roadBlock = this.blocks[i];
    const roadBlockPosition = roadBlock.getLocalPosition();
    if (roadBlockPosition.z + blocksContainerPosition.z > 0) {
      this.disposeBlock(roadBlock);
    }
  }
};

RoadBlocksManager.prototype.disposeBlock = function (block) {
  // console.log(`Disposing block ${block.name} (z: ${block.getLocalPosition().z.toFixed(1)})...`);
  if (this.blocks.indexOf(block) != -1) {
    this.blocks.splice(this.blocks.indexOf(block), 1);
  }
  block.nextBlock = null;
  block.nextLeftBlocksContainer = null;
  block.nextRightBlocksContainer = null;
  block.levelData = null;

  this.findAndCacheEntitiesRecursively(block);

  block.destroy();
};

RoadBlocksManager.prototype.findAndCacheEntitiesRecursively = function (
  entity
) {
  if (entity.cachingAllowed) {
    LevelObjectPool.getInstance().disposeEntity(entity);
  } else {
    for (let i = entity.children.length - 1; i > -1; i--) {
      this.findAndCacheEntitiesRecursively(entity.children[i]);
    }
  }
};

RoadBlocksManager.prototype.detectActiveBlock = function () {
  let currentlyActiveBlock = null;
  for (let block of this.blocks) {
    if (block.alreadyPassed) continue;
    const blockWorldPosition = block.getPosition();
    if (
      blockWorldPosition.z <= 0 &&
      blockWorldPosition.z + BlockBuilder.getBlockLength(block) > 0
    ) {
      currentlyActiveBlock = block;
      break;
    }
  }

  if (currentlyActiveBlock && currentlyActiveBlock != this.activeBlock) {
    if (
      !this.entity.playerContainer.areControlsEnabled() &&
      [
        BlockType.Junction_LeftAndRight,
        BlockType.Junction_Left,
        BlockType.Junction_Right,
      ].indexOf(this.activeBlock.levelData.BlockType) != -1
    ) {
      this.entity.playerContainer.setControlsEnabled(true);
    }
    // console.log('[Entered block] ', currentlyActiveBlock.name);
    this.app.fire(
      EventTypes.ENTERED_NEW_BLOCK,
      currentlyActiveBlock,
      this.activeBlock
    );
    this.activeBlock = currentlyActiveBlock;
  }
};

RoadBlocksManager.prototype.tossNearbyObstacles = function () {
  this.blocks.forEach((block, blockIndex) => {
    if (
      block.getPosition().z >
      GameConfig.getAttribute("obstaclesTossMaxDistance")
    ) {
      // console.log(`Block ${blockIndex} is skipped (too far from player)`);
      return;
    } else {
      for (let i = block.children.length - 1; i > -1; i--) {
        this.tossObstacleAndAlignCoinsRecursive(block.children[i]);
      }
    }
  });
};

RoadBlocksManager.prototype.tossObstaclesInRange = function (
  epicenterPosition,
  tossingDistance
) {
  this.blocks.forEach((block, blockIndex) => {
    for (let i = block.children.length - 1; i > -1; i--) {
      const container = block.children[i];
      for (let j = container.children.length - 1; j > -1; j--) {
        this.tossObstacleAndAlignCoinsRecursive(
          container.children[j],
          epicenterPosition,
          tossingDistance
        );
      }
    }
  });
};

RoadBlocksManager.prototype.tossObstacleAndAlignCoinsRecursive = function (
  entity,
  epicenterPosition,
  distanceLimit
) {
  if (
    epicenterPosition &&
    distanceLimit &&
    entity.getPosition().lengthSq() > distanceLimit * distanceLimit
  ) {
    //too far
    return;
  }

  if (entity.tags.has("tossable")) {
    this.throwObstacleAway(entity);
  } else if (entity.isCoin || entity.isPowerupSpot || entity.isCollectable) {
    /* re-align coins to be placed on the ground */
    const entityPosition = entity.getPosition();
    entityPosition.y = 0;
    entity.setPosition(entityPosition);
  } else {
    for (let i = entity.children.length - 1; i > -1; i--) {
      this.tossObstacleAndAlignCoinsRecursive(entity.children[i]);
    }
  }
};

RoadBlocksManager.prototype.throwObstacleAway = function (obstacle) {
  this.disablePhysicsRecursive(obstacle, true);
  const tweenDuration = pc.math.random(1.8, 2.4);
  const tweenDelay = pc.math.random(0, 0.07);
  const obstacleTargetPosition = obstacle
    .getLocalPosition()
    .clone()
    .add(
      new pc.Vec3(
        pc.math.random(-12, 12),
        pc.math.random(65, 75),
        pc.math.random(10, 20)
      )
    );
  obstacle
    .tween(obstacle.getLocalPosition())
    .to(obstacleTargetPosition, tweenDuration, pc.SineOut)
    .on("complete", () => obstacle.destroy())
    .delay(tweenDelay)
    .start();

  obstacle
    .tween(obstacle.getLocalScale())
    .to(new pc.Vec3(0.35, 0.35, 0.35), tweenDuration, pc.ExponentialIn)
    .delay(tweenDelay)
    .start();

  obstacle
    .tween(obstacle.getLocalEulerAngles())
    .rotate(
      {
        x: pc.math.random(0, 25),
        y: pc.math.random(-180, 180),
        z: pc.math.random(0, 10),
      },
      tweenDuration,
      pc.CircularOut
    )
    .delay(tweenDelay)
    .start();
};

/* *********************
 *
 * Junctions handling
 *
 * *******************/

RoadBlocksManager.prototype.reattachSideJunctionBlocksInFront = function (
  block,
  sideBlocksContainer,
  rotationFactor,
  extraZDistance
) {
  const siteOptions = SiteOptions[block.levelData.Site];
  const junctionRadius = siteOptions.junctionRadius;
  const blockLength = BlockBuilder.getBlockLength(block);
  const blockLocalPosition = block.getLocalPosition().clone();

  /* remove unused blocks */
  this.removeAllBlocksBut(block);

  /* adjusting block params */
  block.setLocalPosition(
    -junctionRadius * rotationFactor,
    0,
    -junctionRadius - extraZDistance
  );
  block.setLocalEulerAngles(0, 90 * rotationFactor, 0);
  block.alreadyPassed = true;

  /* reset blocks container */
  this.entity.blocksContainer.setLocalEulerAngles(0, 0, 0);
  this.entity.blocksContainer.setLocalPosition(0, 0, 0);

  /* reparent side blocks */
  while (sideBlocksContainer.children.length > 0) {
    const subBlock = sideBlocksContainer.children[0];
    subBlock.reparent(this.entity.blocksContainer);
    subBlock.translateLocal(0, 0, -extraZDistance);
    this.blocks.push(subBlock);
  }

  /* enable player controls */
  this.entity.playerContainer.setControlsEnabled(true);
};

/* *********************
 *
 * Physics
 *
 * *******************/

RoadBlocksManager.prototype.disablePhysicsRecursive = function (
  entity,
  markAsTossed = false
) {
  entity.tossed = markAsTossed;
  if (entity.rigidbody) entity.rigidbody.enabled = false;
  if (entity.collision) entity.collision.enabled = false;
  entity.children.forEach((child) =>
    this.disablePhysicsRecursive(child, markAsTossed)
  );
};

RoadBlocksManager.prototype.manageCollidersStatuses = function () {
  // this.blocks.forEach(block => {
  //     if(block.enabled) {
  //         this.updateColliderStatusRecursive(block, GameConfig.getAttribute('physicsCollidersActivationDistance'));
  //     }
  // });
};

RoadBlocksManager.prototype.updateColliderStatusRecursive = function (
  entity,
  physicsCollidersActivationDistance
) {
  if (!entity.enabled) return;
  if (
    entity.collision &&
    entity.collision.enabled === false &&
    !entity.tossed
  ) {
    const distanceToNomSquared = entity.getPosition().lengthSq();
    if (
      distanceToNomSquared <=
      physicsCollidersActivationDistance * physicsCollidersActivationDistance
    ) {
      entity.collision.enabled = true;
    }
  }
  for (let child of entity.children) {
    this.updateColliderStatusRecursive(
      child,
      physicsCollidersActivationDistance
    );
  }
};

// FogController.js
/* jshint esversion: 6 */
var FogController = pc.createScript("fogController");

FogController.prototype.initialize = function () {
  this.overrideExponentialFogChunk();
};

FogController.prototype.update = function (dt) {};

FogController.prototype.overrideExponentialFogChunk = function () {
  pc.shaderChunks.fogExpPS = `
        uniform vec3 fog_color;
        uniform float fog_density;
        uniform float uFogDistance;
        float dBlendModeFogFactor = 1.0;

        vec3 addFog(vec3 color) {
            const float eps = 0.001;
            float fog_distance = uFogDistance;           
            float depth = clamp(gl_FragCoord.z / gl_FragCoord.w - fog_distance, 0.0, 999.0);
            float fogFactor = exp(-depth * fog_density);
            fogFactor = clamp(fogFactor, 0.0, 1.0);
            return mix(fog_color * dBlendModeFogFactor, color, fogFactor);
        }
    `;
};

// commonParticleBurstEffect.js
/* jshint esversion: 6 */
var CommonParticleBurstEffect = pc.createScript("commonParticleBurstEffect");

CommonParticleBurstEffect.attributes.add("triggerEventKey", {
  type: "string",
});

CommonParticleBurstEffect.attributes.add("worldPositionArgumentIndex", {
  type: "number",
  default: 0,
});

CommonParticleBurstEffect.attributes.add("delay", {
  type: "number",
  default: 0,
});

CommonParticleBurstEffect.attributes.add("soundKey", {
  type: "string",
  default: "",
});

CommonParticleBurstEffect.prototype.initialize = function () {
  if (this.triggerEventKey && EventTypes[this.triggerEventKey]) {
    this.app.on(EventTypes[this.triggerEventKey], this.activateEffect, this);
  } else {
    console.error(
      `CommonParticleBurstEffect.initialize: triggerEventKey should be defined and be a property of EventTypes!`
    );
  }
};

CommonParticleBurstEffect.prototype.update = function (dt) {};

CommonParticleBurstEffect.prototype.activateEffect = function (...args) {
  if (this.delay > 0) {
    this.entity.delayedCall(this.delay * 1000, () =>
      this._doActivateEffect(...args)
    );
  } else {
    this._doActivateEffect(...args);
  }
};

CommonParticleBurstEffect.prototype._doActivateEffect = function (...args) {
  const worldPosition = args[this.worldPositionArgumentIndex];

  if (worldPosition && worldPosition instanceof pc.Vec3) {
    this.entity.setPosition(worldPosition);
    this.entity.children.forEach((child) => {
      if (child.particlesystem) {
        child.particlesystem.reset();
        child.particlesystem.play();
      }
    });
    if (this.soundKey) {
      if (Constants.AUDIO[this.soundKey]) {
        this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO[this.soundKey]);
      } else {
        console.warn("Wrong sound constant key: " + this.soundKey);
      }
    }
  } else {
    console.warn(
      `CommonParticleBurstEffect.activateEffect: worldPosition argument ${this.worldPositionArgumentIndex} is either not defined or has wrong type (pc.Vec3 required)`
    );
  }
};

// tempRotationScript.js
/* jshint esversion: 6 */

var TempRotationScript = pc.createScript("tempRotationScript");

TempRotationScript.prototype.initialize = function () {
  this.beam = this.entity.findByName("BeamGroup");
  this.gimmer = this.entity.findByName("Gimmer");
};

TempRotationScript.prototype.update = function (dt) {
  this.beam.rotateLocal(0, 360 * dt, 0);
};

// CharacterPowerBoomEffect.js
/* jshint esversion: 6 */

var CharacterPowerBoomEffect = pc.createScript("characterPowerBoomEffect");

CharacterPowerBoomEffect.prototype.initialize = function () {
  this.powerBoomEffectSprite = this.entity.findByName("PowerBoomEffectSprite");
  this.powerBoomEffectSprite2 = this.entity.findByName(
    "PowerBoomEffectSprite2"
  );

  this.powerBoomEffectSprite.sprite.opacity = 0;
  this.powerBoomEffectSprite2.sprite.opacity = 0;

  this.app.on(
    EventTypes.PLAY_STUNT_LANDING_EFFECT,
    this.playPowerBoomEffectAnimation,
    this
  );
};

CharacterPowerBoomEffect.prototype.update = function (dt) {};

CharacterPowerBoomEffect.prototype.playPowerBoomEffectAnimation = function (
  worldPosition
) {
  this.entity.setPosition(worldPosition);

  this.powerBoomEffectSprite.enabled = true;
  this.powerBoomEffectSprite2.enabled = true;

  this.powerBoomEffectSprite.sprite.opacity = 1;
  this.powerBoomEffectSprite2.sprite.opacity = 1;

  this.powerBoomEffectSprite
    .tween(this.powerBoomEffectSprite.sprite)
    .to({ opacity: 0 }, 0.2, pc.Linear)
    .start();

  this.powerBoomEffectSprite2
    .tween(this.powerBoomEffectSprite2.sprite)
    .to({ opacity: 0 }, 0.2, pc.Linear)
    .delay(0.035)
    .start();

  this.powerBoomEffectSprite.setLocalScale(0.2, 0.2, 0.2);
  this.powerBoomEffectSprite2.setLocalScale(0.4, 0.4, 0.4);

  this.powerBoomEffectSprite
    .tween(this.powerBoomEffectSprite.getLocalScale())
    .to(new pc.Vec3(1.6, 1.6, 1.6), 0.15, pc.SineOut)
    .start();

  this.powerBoomEffectSprite2
    .tween(this.powerBoomEffectSprite2.getLocalScale())
    .to(new pc.Vec3(1.8, 1.8, 1.8), 0.15, pc.SineOut)
    .delay(0.035)
    .start();
};

// WinLocation.js
/* jshint esversion: 6 */

var WinLocation = pc.createScript("winLocation");

WinLocation.prototype.initialize = function () {
  this.winLocation = this.entity;

  this.title = this.winLocation.findByName("Title");

  this.starsContainer = this.winLocation.findByName("StarsContainer");
  this.starsGlow = this.winLocation.findByName("StarsGlow");
  this.starsEarned = ["Star01", "Star02", "Star03"].map((key) =>
    this.starsContainer.findByName(key).findByName("IconStar")
  );

  this.rankShift = this.winLocation.findByName("RankShift");
  this.currentRank = this.winLocation.findByName("CurrentRank");
  this.currentRankText = this.currentRank.findByName("CurrentRankText");

  this.rewardGroup = this.winLocation.findByName("RewardGroup");
  this.rewardValue = this.rewardGroup.findByName("RewardValue");
  this.buttonMultiplyRewardContainer = this.winLocation.findByName(
    "ButtonMultiplyRewardContainer"
  );
  this.buttonMultiplyReward = this.winLocation.findByName(
    "ButtonMultiplyReward"
  );
  this.buttonMultiplyRewardGreyed = this.winLocation.findByName(
    "ButtonMultiplyRewardGreyed"
  );

  this.buttonTapToProceed = this.winLocation.findByName("ButtonTapToProceed");
  this.tapToProceedText =
    this.buttonTapToProceed.findByName("TapToProceedText");

  this.extraCoinsClaimed = false;

  BasicButton.assignAction(
    this.buttonMultiplyReward,
    this.buttonMultiplyRewardClicked,
    this
  );
  BasicButton.assignAction(
    this.buttonTapToProceed,
    this.buttonTapToProceedClicked,
    this
  );

  this.app.on(
    EventTypes.UPDATE_STARS_IN_RESULTS,
    this.updateStarsContainer,
    this
  );
  this.app.on(
    EventTypes.UI.SET_CURRENT_STUNTS_LEADERBOARD_RANK,
    this.updateLeaderboardRankTest,
    this
  );

  this.assignEntityMethods();
  this.animateStarsGlowOpacity();
};

WinLocation.prototype.update = function (dt) {
  if (this.entity.enabled) {
    this.animateStarsGlow(dt);
    this.buttonMultiplyReward.enabled =
      !this.extraCoinsClaimed && Apicontroller.hasRewardedVideo();
    this.buttonMultiplyRewardGreyed.enabled =
      !this.buttonMultiplyReward.enabled &&
      !Apicontroller.hideRewardedUIIfNoVideoAvailable();
  }
};

WinLocation.prototype.assignEntityMethods = function () {
  const scriptContext = this;

  this.entity.show = function () {
    this.enabled = true;
    scriptContext.extraCoinsClaimed = false;
    scriptContext.buttonTapToProceed.enabled = true;
    scriptContext.showUI();
    scriptContext.updateCoinsCounter(
      CoinsStorage.getInstance().getSessionCoins() || 0
    );
    scriptContext.checkStuntsScoresNewRecord();
    scriptContext.updateStuntsCurrentRankValue();
  }.bind(this.entity);

  this.entity.hide = function () {
    this.enabled = false;
  }.bind(this.entity);
};

WinLocation.prototype.updateCoinsCounter = function (actualCoinsAmount) {
  this.rewardValue.element.text = `+${actualCoinsAmount}`;
};

WinLocation.prototype.updateStuntsCurrentRankValue = function () {
  this.app.fire(EventTypes.UI.UPDATE_STUNTS_LEADERBOARD);
};

WinLocation.prototype.updateLeaderboardRankTest = function (
  playerPositionInLeaderboard
) {
  this.currentRankText.element.text =
    LocalizationManager.getInstance().getLocalizedText("CurrentRank") +
    ` ${playerPositionInLeaderboard + 1}`;
};

WinLocation.prototype.checkStuntsScoresNewRecord = function () {
  this.rankShift.element.text = StuntController.currentStuntScores;

  if (StuntController.currentStuntScores > StuntController.stuntsBestScores) {
    StuntController.stuntsBestScores = StuntController.currentStuntScores;
    this.app.fire(EventTypes.SAVE_APP);
  }
};

WinLocation.prototype.buttonMultiplyRewardClicked = function () {
  const addExtraCoins = () => {
    CoinsStorage.getInstance().addCoins(
      Math.max(CoinsStorage.getInstance().getSessionCoins() * 4, 10)
    );
    this.updateCoinsCounter(CoinsStorage.getInstance().getSessionCoins());
    this.extraCoinsClaimed = true;
  };

  if (Apicontroller.hasRewardedVideo()) {
    this.app.timeScale = 0;
    Apicontroller.showRewardedVideo((result) => {
      this.app.timeScale = 1;
      if (result.rewardGranted) {
        addExtraCoins();
      }
    });
  }
};

WinLocation.prototype.buttonTapToProceedClicked = function () {
  const currentMissionIndex =
    MissionsManager.getInstance().getCurrentMissionIndex();
  const maxUnlockedMissionIndex =
    MissionsManager.getInstance().getMaxUnlockedMissionIndex();
  const nextMissionIndex = pc.math.clamp(
    currentMissionIndex + 1,
    1,
    MissionsManager.getInstance().getTotalMissionsAmount()
  );
  if (currentMissionIndex === maxUnlockedMissionIndex) {
    MissionsManager.getInstance().setMaxUnlockedMissionIndex(nextMissionIndex);
  }
  MissionsManager.getInstance().setCurrentMissionIndex(nextMissionIndex);

  // if(skipTitleScreen()) {
  //     this.app.fire(EventTypes.GAMEPLAY_EXIT);
  //     MissionsManager.getInstance().launchSelectedMode(MissionsManager.getInstance().isFreeRunMode(), false, 0);
  // } else {
  this.app.fire(EventTypes.GAMEPLAY_EXIT);
  this.app.fire(EventTypes.SHOW_UI_WINDOW, Constants.UI.MAIN_MENU);
  this.app.fire(
    EventTypes.SHOW_UI_WINDOW,
    Constants.UI.MISSIONS_LOCATION,
    false
  );
  this.app.fire(EventTypes.MISSION_PANEL_SELECTED, nextMissionIndex);
  // }
};

WinLocation.prototype.updateStarsContainer = function (earnedStars) {
  this.starsEarned.forEach((element, index) => {
    element.enabled = index < earnedStars;
  });
};

WinLocation.prototype.hideStars = function () {
  this.starsEarned.forEach((element) => (element.enabled = false));
};

WinLocation.prototype.animateStarsGlow = function (dt) {
  if (this.starsGlow) {
    this.starsGlow.rotateLocal(0, 0, 60 * dt);
  }
};

WinLocation.prototype.animateStarsGlowOpacity = function () {
  this.starsGlow
    .tween(this.starsGlow.element)
    .to({ opacity: 0.3 }, 2, pc.Linear)
    .loop(true)
    .yoyo(true)
    .start();
};

WinLocation.prototype.showButtons = function () {
  this.buttonMultiplyRewardContainer.enabled = true;
  this.tapToProceedText.enabled = true;
  this.buttonTapToProceed.enabled = false;

  this.app.stopAllTweens(this.buttonMultiplyRewardContainer);
  this.buttonMultiplyRewardContainer.setLocalScale(0, 0, 0);
  this.buttonMultiplyRewardContainer
    .tween(this.buttonMultiplyRewardContainer.getLocalScale())
    .to(new pc.Vec3(1, 1, 1), 0.45, pc.BackOut)
    .on("complete", () => {
      this.buttonTapToProceed.enabled = true;
    })
    .start();

  this.app.stopAllTweens(this.tapToProceedText);
  this.tapToProceedText.element.opacity = 0;
  this.tapToProceedText
    .tween(this.tapToProceedText.element)
    .to({ opacity: 1 }, 1, pc.Linear)
    .on("complete", () => {
      this.tapToProceedText
        .tween(this.tapToProceedText.element)
        .to({ opacity: 0.45 }, 1, pc.SineOut)
        .loop(true)
        .yoyo(true)
        .start();
    })
    .start();

  this.tapToProceedText.element.outlineThickness = 0;
  this.tapToProceedText
    .tween(this.tapToProceedText.element)
    .to({ outlineThickness: 1 }, 1, pc.Linear)
    .on("complete", () => {
      this.tapToProceedText
        .tween(this.tapToProceedText.element)
        .to({ outlineThickness: 0.45 }, 1, pc.SineOut)
        .loop(true)
        .yoyo(true)
        .start();
    })
    .start();
};

WinLocation.prototype.showUI = function () {
  /* analytics */
  Apicontroller.trackLevelEnd({
    success: true,
    stars: MissionsManager.getInstance().getSessionStars(),
    revives: LevelStatsManager.getInstance().revives,
    score: Math.floor(LevelStatsManager.getInstance().ranDistance),
    // "powerups": GameplayController.currentSession.usedPowerups
  });

  this.title.element.text = LocalizationManager.getInstance().getLocalizedText(
    "MissionComplete",
    ` ${MissionsManager.getInstance().getCurrentMissionIndex()}`
  );

  this.app.stopAllTweens(this.title);
  this.title.setLocalScale(0, 0, 0);
  this.title
    .tween(this.title.getLocalScale())
    .to(new pc.Vec3(1, 1, 1), 0.6, pc.ElasticOut)
    .start();

  this.app.stopAllTweens(this.starsContainer);
  this.starsContainer.setLocalScale(0, 0, 0);
  this.starsContainer
    .tween(this.starsContainer.getLocalScale())
    .to(new pc.Vec3(1, 1, 1), 0.6, pc.ElasticOut)
    .delay(0.25)
    .start();

  this.rankShift.enabled = !hasExternalLeaderboard();
  this.app.stopAllTweens(this.rankShift);
  this.rankShift.setLocalScale(0, 0, 0);
  this.rankShift
    .tween(this.rankShift.getLocalScale())
    .to(new pc.Vec3(1, 1, 1), 0.6, pc.ElasticOut)
    .delay(0.5)
    .start();

  this.currentRank.enabled = !hasExternalLeaderboard();
  this.app.stopAllTweens(this.currentRank);
  this.currentRank.setLocalScale(0, 0, 0);
  this.currentRank
    .tween(this.currentRank.getLocalScale())
    .to(new pc.Vec3(1, 1, 1), 0.6, pc.ElasticOut)
    .delay(0.75)
    .start();

  this.app.stopAllTweens(this.rewardGroup);
  this.rewardGroup.setLocalScale(0, 0, 0);
  this.rewardGroup
    .tween(this.rewardGroup.getLocalScale())
    .to(new pc.Vec3(1, 1, 1), 0.6, pc.ElasticOut)
    .delay(1.0)
    .start();

  this.buttonMultiplyRewardContainer.enabled = false;
  this.tapToProceedText.enabled = false;

  if (window.famobi_analytics) {
    setTimeout(() => {
      Promise.all([
        window.famobi_analytics.trackEvent("EVENT_LEVELSUCCESS", {
          levelName: `${
            MissionsManager.getInstance().isFreeRunMode()
              ? 0
              : MissionsManager.getInstance().getCurrentMissionIndex()
          }`,
        }),
        window.famobi_analytics.trackEvent("EVENT_TOTALSCORE", {
          totalScore: Math.floor(LevelStatsManager.getInstance().ranDistance),
        }),
        window.famobi.showInterstitialAd(),
      ]).then(
        () => this.showButtons(),
        () => this.showButtons()
      );
    }, 500);
  } else {
    setTimeout(() => this.showButtons(), 1200);
  }
};

// Token.js
/* jshint esversion: 6 */
var Token = pc.createScript("token");

Token.prototype.initialize = function () {
  this.level = this.app.root.findByName("Level");
  this.cameraController = this.app.root.findByName("CameraController");
  this.tokenContainer = this.entity.findByName("TokenContainer");
  this.tokenScaler = this.entity.findByName("TokenScaler");
  this.token = this.tokenContainer.findByName("Token");
  this.beamsContainer = this.tokenContainer.findByName("BeamsContainer");

  this.tokenScaler.setLocalScale(1.0, 1.075, 1);
  this.tokenScaler
    .tween(this.tokenScaler.getLocalScale())
    .to({ x: 1.1, y: 0.925, z: 1 }, 0.9, pc.SineInOut)
    .yoyo(true)
    .loop(true)
    .start();

  this.assignEntityMethods();
};

Token.prototype.assignEntityMethods = function () {
  const scriptContext = this;
  this.entity.pickup = function () {
    this._app.fire(EventTypes.TOKEN_PICKED_UP, this.getPosition().clone());
    this.pickup = undefined;
    this.destroy();
  }.bind(this.entity);
};

Token.prototype.update = function (dt) {
  this.beamsContainer.rotateLocal(0, 0, 120 * dt);

  if (this.level && this.level.gameState.isGameRunning()) {
    const activeCamera = this.cameraController.getActiveCamera();
    if (activeCamera) {
      this.tokenContainer.lookAt(activeCamera.getPosition());
    }
  }
};

// MissionTarget.js
/* jshint esversion: 6  */

var MissionTarget = pc.createScript("missionTarget");

MissionTarget.attributes.add("letterBoxGold", {
  type: "asset",
  assetType: "template",
});

MissionTarget.prototype.initialize = function () {
  this.missionDescriptionContainer = this.entity;
  this.missionNumber =
    this.missionDescriptionContainer.findByName("MissionNumber");
  this.missionDescription =
    this.missionDescriptionContainer.findByName("MissionDescription");

  this.starsContainer =
    this.missionDescriptionContainer.findByName("StarsContainer");
  this.starsEarned = this.starsContainer.findByName("StarsEarned");
  this.youWinText = this.missionDescriptionContainer.findByName("YouWinText");

  this.missionTargetContainer = this.missionDescriptionContainer.findByName(
    "MissionTargetContainer"
  );
  this.collectTokensTarget = this.missionTargetContainer.findByName(
    "CollectTokensTarget"
  );
  this.collectLettersTarget = this.missionTargetContainer.findByName(
    "CollectLettersTarget"
  );
  this.reachDistanceTarget = this.missionTargetContainer.findByName(
    "ReachDistanceTarget"
  );
  this.performStuntsTarget = this.missionTargetContainer.findByName(
    "PerformStuntsTarget"
  );

  this.inputBlocker =
    this.missionDescriptionContainer.findByName("InputBlocker");

  this.collectTokensTarget.missionType = "CollectTokens";
  this.collectLettersTarget.missionType = "CollectLetters";
  this.reachDistanceTarget.missionType = "ReachDistance";
  this.performStuntsTarget.missionType = "PerformStunts";

  this.assignEntityMethods();

  this.app.on(EventTypes.SHOW_FREE_RUN_UI, this.showFreeRunUI, this);
  this.app.on(
    EventTypes.DISPLAY_CURRENT_MISSION_TARGET,
    this.showMissionTargetData,
    this
  );
  this.app.on(
    EventTypes.DISPLAY_UPDATED_CURRENT_MISSION_TARGET,
    this.showUpdatedMissionTargetData,
    this
  );
  this.app.on(EventTypes.DISPLAY_YOU_WIN_MESSAGE, this.showYouWinMessage, this);

  this.entity.enabled = false;
};

MissionTarget.prototype.assignEntityMethods = function () {
  const scriptContext = this;

  this.entity.show = function () {
    // console.log('MissionTarget.show shouldn\'t be called directly from UI controller');
  }.bind(this.entity);

  this.entity.hide = function () {
    // console.log('MissionTarget.hide shouldn\'t be called directly from UI controller');
  }.bind(this.entity);
};

MissionTarget.prototype.update = function (dt) {};

MissionTarget.prototype.showFreeRunUI = function () {
  this.showMissionDescriptionContainer(0, "FreeRun");
};

MissionTarget.prototype.showMissionTargetData = function () {
  const missionData = MissionsManager.getInstance().getCurrentMissionData();
  const missionNumber = missionData.index;
  const missionType = missionData.missionType;
  const missionTargets = missionData.missionGoal;
  const missionState = MissionsManager.getInstance().getCurrentMissionState();
  const missionLevel = missionState.missionLevel;

  this.showMissionDescriptionContainer(missionNumber, missionType);
  this.showMissionTargetContainer(missionType, missionTargets, missionLevel);

  this.inputBlocker.enabled = true;
  this.missionNumber.enabled = true;
  this.missionTargetContainer.enabled = true;
  this.starsContainer.enabled = false;
  this.youWinText.enabled = false;
  this.missionDescription.element.color = new pc.Color(1, 1, 1, 1);
};

MissionTarget.prototype.showUpdatedMissionTargetData = function (numStars) {
  const missionData = MissionsManager.getInstance().getCurrentMissionData();
  const missionNumber = missionData.index;
  const missionType = missionData.missionType;
  const missionTargets = missionData.missionGoal;
  const missionState = MissionsManager.getInstance().getCurrentMissionState();
  const missionLevel = missionState.missionLevel;

  this.showMissionDescriptionContainer(missionNumber, missionType);
  this.showMissionTargetContainer(missionType, missionTargets, missionLevel);

  this.inputBlocker.enabled = false;
  this.missionNumber.enabled = false;
  this.starsContainer.enabled = true;

  this.starsEarned.children.forEach((element, index) => {
    element.enabled = index < numStars;

    if (element.enabled) {
      if (index === numStars - 1) {
        element.setLocalScale(0, 0, 0);
        element
          .tween(element.getLocalScale())
          .to(new pc.Vec3(1, 1, 1), 0.5, pc.BounceOut)
          .delay(0.2)
          .start();

        this.app.fire(
          EventTypes.PLAY_SFX,
          Constants.AUDIO[`STAR_${numStars}_EARNED`]
        );
      }
    }
  });
  this.missionTargetContainer.enabled = true;
  this.youWinText.enabled = false;
  this.missionDescription.element.color = new pc.Color(1, 1, 1, 1);
};

MissionTarget.prototype.showYouWinMessage = function (
  showMissioNumberInsteadOfStars,
  showYouWinText
) {
  const missionData = MissionsManager.getInstance().getCurrentMissionData();
  const missionNumber = missionData.index;
  const missionType = missionData.missionType;
  const missionTargets = missionData.missionGoal;
  const missionState = MissionsManager.getInstance().getCurrentMissionState();
  const missionLevel = missionState.missionLevel;
  this.showMissionDescriptionContainer(missionNumber, missionType);
  this.showMissionTargetContainer(missionType, missionTargets, missionLevel);

  this.inputBlocker.enabled = true;
  this.missionNumber.enabled = false;
  this.missionTargetContainer.enabled = false;
  this.starsContainer.enabled = true;
  this.starsEarned.children.forEach((element, index) => {
    element.enabled = true;

    if (index === 2) {
      element.setLocalScale(0, 0, 0);
      element
        .tween(element.getLocalScale())
        .to(new pc.Vec3(1, 1, 1), 0.5, pc.BounceOut)
        .delay(0.2)
        .start();
      this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.MISSION_COMPLETED);
      this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.STAR_3_EARNED);
    }
  });
  this.youWinText.enabled = true;
  this.missionDescription.element.color = new pc.Color(1, 0.9254, 0, 1);

  setTimeout(() => {
    this.app.fire(
      EventTypes.UPDATE_STARS_IN_RESULTS,
      MissionsManager.getInstance().getSessionStars()
    );
    this.app.fire(EventTypes.SHOW_UI_WINDOW, Constants.UI.WIN_LOCATION);
  }, 3000);
};

MissionTarget.prototype.showMissionDescriptionContainer = function (
  missionNumber,
  missionType
) {
  if (isUIHidden("mission_objective")) {
    return;
  }

  if (this.hidingTimeoutTween && this.hidingTimeoutTween.playing) {
    this.hidingTimeoutTween.stop();
    this.hidingTimeoutTween = null;
    this.entity.enabled = false;
  }

  this.entity.enabled = true;
  this.missionDescriptionContainer.enabled = true;
  this.missionNumber.enabled = true;
  this.missionDescription.enabled = true;

  switch (missionType) {
    case "CollectTokens":
      this.missionDescription.element.fontSize = 48;
      this.missionDescription.element.color = new pc.Color(1, 1, 1, 1);
      this.missionDescription.element.text =
        LocalizationManager.getInstance().getLocalizedText("CollectTokens");
      this.missionNumber.element.text =
        LocalizationManager.getInstance().getLocalizedText(
          "MissionTitle",
          `${missionNumber}`
        );
      break;
    case "CollectLetters":
      this.missionDescription.element.fontSize = 48;
      this.missionDescription.element.color = new pc.Color(1, 1, 1, 1);
      this.missionDescription.element.text =
        LocalizationManager.getInstance().getLocalizedText("CollectLetters");
      this.missionNumber.element.text =
        LocalizationManager.getInstance().getLocalizedText(
          "MissionTitle",
          `${missionNumber}`
        );
      break;
    case "ReachDistance":
      this.missionDescription.element.fontSize = 48;
      this.missionDescription.element.color = new pc.Color(1, 1, 1, 1);
      this.missionDescription.element.text =
        LocalizationManager.getInstance().getLocalizedText("ReachDistance");
      this.missionNumber.element.text =
        LocalizationManager.getInstance().getLocalizedText(
          "MissionTitle",
          `${missionNumber}`
        );
      break;
    case "PerformStunts":
      this.missionDescription.element.fontSize = 48;
      this.missionDescription.element.color = new pc.Color(1, 1, 1, 1);
      this.missionDescription.element.text =
        LocalizationManager.getInstance().getLocalizedText("PerformStunts");
      this.missionNumber.element.text =
        LocalizationManager.getInstance().getLocalizedText(
          "MissionTitle",
          `${missionNumber}`
        );
      break;
    case "FreeRun":
      // this.inputBlocker.enabled = true;
      this.starsContainer.enabled = false;
      this.missionTargetContainer.enabled = false;
      this.youWinText.enabled = false;

      this.missionNumber.element.text =
        LocalizationManager.getInstance().getLocalizedText("FreeRun");
      this.missionDescription.element.fontSize = 32;
      this.missionDescription.element.color = new pc.Color(1, 0.9254, 0, 1);
      this.missionDescription.element.text =
        LocalizationManager.getInstance().getLocalizedText("BeatHighScore");
      break;
  }

  this.entity.setLocalPosition(1000, -250, 0);
  this.entity
    .tween(this.entity.getLocalPosition())
    .to(new pc.Vec3(0, -250, 0), 0.4, pc.BackOut)
    .start();

  this.entity.setLocalScale(1, 1, 1);
  this.entity
    .tween(this.entity.getLocalScale())
    .to(new pc.Vec3(1.06, 1.06, 1.06), 1.25, pc.Linear)
    .delay(0.4)
    .repeat(2)
    .yoyo(true)
    .start();

  const tweenObject = { value: 0 };
  this.hidingTimeoutTween = this.entity
    .tween(tweenObject)
    .to({ value: 1 }, 2.5, pc.Linear)
    .on("complete", () => {
      this.entity
        .tween(this.entity.getLocalPosition())
        .to(new pc.Vec3(-1000, -250, 0), 0.35, pc.BackIn)
        .on("complete", () => {
          this.missionDescriptionContainer.enabled = false;
          this.missionNumber.enabled = false;
          this.missionDescription.enabled = false;
          this.entity.enabled = false;
        })
        .start();
    })
    .start();
};

MissionTarget.prototype.showMissionTargetContainer = function (
  missionType,
  missionTargets,
  currentMissionLevel
) {
  const missionTargetValue =
    missionTargets[pc.math.clamp(currentMissionLevel, 0, 2)];

  this.clearWord();
  this.missionTargetContainer.children.forEach(
    (element) => (element.enabled = element.missionType === missionType)
  );

  switch (missionType) {
    case "CollectTokens":
      this.collectTokensTarget.element.text = `x ${missionTargetValue}`;
      break;
    case "CollectLetters":
      const targetWord = missionTargetValue;
      const targetLetters = targetWord.split("");
      const wordLength = targetLetters.length;

      for (let i = 0; i < wordLength; i++) {
        const targetBox = this.letterBoxGold.resource.instantiate(); //this.collectLettersTargetBox.clone();
        const letter = targetBox.findByName("LetterBoxGoldLetter");

        targetBox.enabled = true;

        this.collectLettersTarget.addChild(targetBox);

        letter.element.text = targetLetters[i];
      }
      break;
    case "PerformStunts":
      this.performStuntsTarget.element.text = `x ${missionTargetValue}`;
      break;
    case "ReachDistance":
      this.reachDistanceTarget.element.text = `${missionTargetValue}m`;
      break;
  }
};

MissionTarget.prototype.clearWord = function () {
  for (let i = this.collectLettersTarget.children.length - 1; i > -1; i--) {
    this.collectLettersTarget.children[i].destroy();
  }
};

// MissionTypes.js
/* jshint esversion: 6 */

var MissionTypes = pc.createScript("missionTypes");

MissionTypes.attributes.add("letterBox", {
  type: "asset",
  assetType: "template",
});

MissionTypes.prototype.initialize = function () {
  this.missionTypesContainer = this.entity;

  this.reachDistanceContainer = this.missionTypesContainer.findByName(
    "ReachDistanceContainer"
  );
  this.reachDistanceIcon =
    this.reachDistanceContainer.findByName("ReachDistanceIcon");

  this.collectTokensContainer = this.missionTypesContainer.findByName(
    "CollectTokensContainer"
  );
  this.collectTokensValue =
    this.collectTokensContainer.findByName("CollectTokensValue");

  this.collectLettersContainer = this.missionTypesContainer.findByName(
    "CollectLettersContainer"
  );

  this.freeRunContainer =
    this.missionTypesContainer.findByName("FreeRunContainer");
  this.freeRunValue = this.freeRunContainer.findByName("FreeRunValue");

  this.performStuntsContainer = this.missionTypesContainer.findByName(
    "PerformStuntsContainer"
  );
  this.performStuntsValue =
    this.missionTypesContainer.findByName("PerformStuntsValue");

  this.reachDistanceContainer.missionType = "ReachDistance";
  this.collectTokensContainer.missionType = "CollectTokens";
  this.collectLettersContainer.missionType = "CollectLetters";
  this.performStuntsContainer.missionType = "PerformStunts";

  this.targetWord = "";
  this.targetLettersArray = [];
  this.targetWordLetters = [];
  this.targetDistance = 0;
  this.currentDistance = 0;

  this.app.on(
    EventTypes.DISPLAY_CURRENT_MISSION_TARGET,
    this.showMissionTargetContainer,
    this
  );
  this.app.on(EventTypes.SHOW_FREE_RUN_UI, this.showFreeRunUI, this);
  this.app.on(
    EventTypes.MISSION_PROGRESS_UPDATED,
    this.onMissionProgressUpdated,
    this
  );
  this.app.on(EventTypes.FREE_RUN_DISTANCE_RAN, this.updateFreeRunUI, this);
};

MissionTypes.prototype.update = function (dt) {
  if (isUIHidden("mission_progress")) {
    this.entity.enabled = false;
  }
};

MissionTypes.prototype.showFreeRunUI = function () {
  this.missionTypesContainer.children.forEach(
    (element) => (element.enabled = element === this.freeRunContainer)
  );
  this.freeRunValue.element.text = 0;
};

MissionTypes.prototype.updateFreeRunUI = function (passedDistance) {
  this.freeRunValue.element.text = Math.floor(passedDistance / 10) * 10;
};

MissionTypes.prototype.showMissionTargetContainer = function () {
  const missionData = MissionsManager.getInstance().getCurrentMissionData();
  const missionNumber = missionData.index;
  const missionType = missionData.missionType;
  const missionTargets = missionData.missionGoal;

  const missionState = MissionsManager.getInstance().getCurrentMissionState();
  const missionLevel = missionState.missionLevel;
  const missionTargetValue = missionTargets[pc.math.clamp(missionLevel, 0, 2)];

  this.clearWord();
  this.missionTypesContainer.children.forEach(
    (element) => (element.enabled = element.missionType === missionType)
  );

  switch (missionType) {
    case "CollectTokens":
      this.collectTokensValue.element.text = `0/${missionTargetValue}`;
      break;
    case "CollectLetters":
      for (let i = this.targetWordLetters.length - 1; i > -1; i--) {
        this.targetWordLetters[i].destroy();
      }
      this.targetWord = "" + missionTargetValue;
      this.targetWordLetters = [];
      this.targetLettersArray = this.targetWord.split("");

      for (let i = 0; i < this.targetLettersArray.length; i++) {
        const targetBox = this.letterBox.resource.instantiate(); //this.collectLettersTargetBox.clone();
        const letter = targetBox.findByName("LetterBoxLetter");
        targetBox.enabled = true;
        letter.enabled = true;
        letter.taken = false;

        this.collectLettersContainer.addChild(targetBox);

        // set as layout group, no need to adjust position manually
        letter.element.text = this.targetLettersArray[i];
        letter.element.opacity = 0.25;

        this.targetWordLetters.push(letter);
      }

      break;
    case "ReachDistance":
      this.targetDistance = missionTargetValue;
      break;
    case "PerformStunts":
      this.performStuntsValue.element.text = `0/${missionTargetValue}`;
      break;
  }
};

MissionTypes.prototype.clearWord = function () {
  for (let i = this.collectLettersContainer.children.length - 1; i > -1; i--) {
    this.collectLettersContainer.children[i].destroy();
  }
};

MissionTypes.prototype.updateCollectLettersContainer = function (
  collectedLetters,
  requiredLetters
) {
  const requiredWord = requiredLetters.join("");
  if (this.targetWord != requiredWord) {
    this.showMissionTargetContainer();
  }

  const collectedLettersCopy = collectedLetters.slice();
  if (this.targetWordLetters) {
    /* reset letters */
    this.targetWordLetters.forEach(
      (currentLetter) => (currentLetter.element.opacity = 0.25)
    );

    /* highlight collected ones */
    this.targetWordLetters.forEach((currentLetterElement) => {
      if (
        collectedLettersCopy.indexOf(currentLetterElement.element.text) != -1
      ) {
        currentLetterElement.element.opacity = 1;
        collectedLettersCopy.splice(
          collectedLettersCopy.indexOf(currentLetterElement.element.text),
          1
        );
      }
    });
  }
};

MissionTypes.prototype.updateDistanceIndicator = function (progress) {
  let ReachDistanceContainerWidth = this.reachDistanceContainer.element.width;
  this.reachDistanceIcon.setLocalPosition(
    progress * ReachDistanceContainerWidth,
    -15,
    0
  );
};

MissionTypes.prototype.updateTokensText = function (
  collectedTokens,
  requiredTokens
) {
  this.collectTokensValue.element.text = `${collectedTokens}/${requiredTokens}`;
};

MissionTypes.prototype.updateStuntsText = function (
  performedStunts,
  requiredStunts
) {
  this.performStuntsValue.element.text = `${performedStunts}/${requiredStunts}`;
};

MissionTypes.prototype.onMissionProgressUpdated = function (
  collectableType,
  requiredData,
  collectedData
) {
  if (collectableType === Constants.CollectableType.PASSED_DISTANCE) {
    this.updateDistanceIndicator(
      pc.math.clamp(collectedData / requiredData, 0, 1)
    );
  } else if (collectableType === Constants.CollectableType.TOKEN) {
    this.updateTokensText(collectedData, requiredData);
  } else if (collectableType === Constants.CollectableType.LETTER) {
    this.updateCollectLettersContainer(collectedData, requiredData);
  } else if (collectableType === Constants.CollectableType.STUNT) {
    this.updateStuntsText(collectedData, requiredData);
  }
};

// Collectable.js
/* jshint esversion: 6 */
var Collectable = pc.createScript("collectable");

Collectable.prototype.initialize = function () {
  this.level = Constants.getLevelEntity();

  if (!this.level) {
    // editor mode?
    return;
  }

  this.collectableContainer = this.entity.findByName("CollectableContainer");
  this.collectable = this.collectableContainer.findByName("Collectable");
  this.letterImage = this.collectableContainer.findByName("LetterImage");

  this.resetProperties();

  this.entity.isCollectable = true;

  this.collectableType = null;
  this.collectableSubType = null;

  this.entity.on(EventTypes.ENTITY_CACHED, this.onEntityCached, this);
  this.entity.on(
    EventTypes.ENTITY_REUSED_FROM_CACHE,
    this.onEntityReusedFromCache,
    this
  );

  this.on("destroy", this.handleEntityDestroyed, this);

  this.assignEntityMethods();

  setTimeout(() => this.requestCollectable(), 10);
};

Collectable.prototype.resetProperties = function () {
  this.entity.pickedUp = false;
  this.app.on(
    EventTypes.REPLACE_COLLECTABLE_LETTERS,
    this.requestCollectable,
    this
  );
};

Collectable.prototype.onEntityCached = function () {
  this.app.off(
    EventTypes.REPLACE_COLLECTABLE_LETTERS,
    this.requestCollectable,
    this
  );
  this.entity.setLocalPosition(0, 0, 0);
  this.entity.inCache = true;
};

Collectable.prototype.onEntityReusedFromCache = function () {
  this.resetProperties();
  this.entity.inCache = false;
  setTimeout(() => this.requestCollectable(), 10);
};

Collectable.prototype.assignEntityMethods = function () {
  const scriptContext = this;
  this.entity.pickup = function () {
    if (!this.pickedUp) {
      this.pickedUp = true;
      if (scriptContext.collectableType === Constants.CollectableType.LETTER) {
        this._app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.COLLECT_LETTER);
      } else {
        this._app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.COLLECT_TOKEN);
      }
      this._app.fire(
        EventTypes.COLLECTABLE_PICKED_UP,
        scriptContext.collectableType,
        scriptContext.collectableSubType,
        this.getPosition().clone()
      );
      LevelObjectPool.getInstance().disposeEntity(this);
    }
  }.bind(this.entity);
};

Collectable.prototype.updateLetterMaterial = function (letterAsset) {
  if (this.level && letterAsset /* && letterAsset.loaded*/) {
    //check if not destroyed
    this.entity.enabled = true;
    this.letterImage.sprite.spriteAsset = letterAsset;

    if (!letterAsset.loaded && !asset.loading) {
      this.app.assets.load(asset);
    }
  }
};

Collectable.prototype.requestCollectable = function () {
  if (!this.level) {
    famobi.log("Collectable not initialized. Running in editor mode?");
    return;
  }

  if (!this.entity.parent || this.entity.parent.name === "AssetsCache") {
    famobi.log("Cannot request collectable while in cache");
    return;
  }

  const requestedCollectableData = this.level.requestNextCollectableType();
  if (!requestedCollectableData) {
    LevelObjectPool.getInstance().disposeEntity(this.entity);
  } else {
    const { collectableType, collectableSubType } = requestedCollectableData;

    if (collectableType === Constants.CollectableType.TOKEN) {
      this.collectableType = collectableType;
      this.letterImage.enabled = false;
      this.collectable.enabled = true;
    } else if (collectableType === Constants.CollectableType.LETTER) {
      this.collectableType = collectableType;
      this.collectableSubType = collectableSubType;
      this.letterImage.enabled = true;
      this.collectable.enabled = false;
      this.entity.enabled = false;

      const letterAsset = this.app.assets.find(
        `${collectableSubType}.png`,
        "sprite"
      );
      this.updateLetterMaterial(letterAsset);
    }
  }
};

Collectable.prototype.handleEntityDestroyed = function () {
  this.level = null;
  this.app.off(
    EventTypes.REPLACE_COLLECTABLE_LETTERS,
    this.requestCollectable,
    this
  );
  this.entity.pickup = undefined;
};

Collectable.prototype.update = function (dt) {
  if (!this.entity.inCache) {
    if (this.level.gameState.isStuntActive()) {
      const stuntFlyHeight = GameConfig.getAttribute("stuntFlyHeight");
      const position = this.entity.getPosition();
      if (position.z < 45 && position.y < stuntFlyHeight) {
        position.y = pc.math.clamp(
          position.y + (stuntFlyHeight - position.y) * 0.15,
          0,
          stuntFlyHeight
        );
        this.entity.setPosition(position);
      }
    }
  }
};

// levelMissionController.js
/* jshint esversion: 6 */
var LevelMissionController = pc.createScript("levelMissionController");

LevelMissionController.attributes.add("collectableProbabilities", {
  type: "number",
  array: true,
  default: [0.1, 0.075, 0.05],
});

LevelMissionController.attributes.add("collectableDelays", {
  type: "number",
  array: true,
  default: [5000, 7500, 10000],
});

LevelMissionController.prototype.initialize = function () {
  this.currentMissionDataLoaded = false;
  this.currentMissionData = null;

  this.assignEntityMethods();

  this.freeRunMode = false;
  this.missionCompleted = false;
  this.passedDistance = 0;
  this.requiredDistance = 0;
  this.requiredTokens = 0;
  this.tokensPickedUp = 0;
  this.requiredStunts = 0;
  this.performedStunts = 0;
  this.requiredLetters = [];
  this.availableLetters = [];
  this.passedDistanceInFreeRunMode = 0;
  this.lastCollectableTimestamp = 0;

  this.app.on(EventTypes.GAMEPLAY_LAUNCH, this.initMissionObjectives, this);
  this.app.on(
    EventTypes.COLLECTABLE_PICKED_UP,
    this.onCollectablePickedUp,
    this
  );
  this.app.on(
    EventTypes.INCREASE_PASSED_DISTANCE,
    this.onPassedDistanceIncreased,
    this
  );
  this.app.on(EventTypes.STUNT_PERFORMED, this.onStuntPerformed, this);
};

LevelMissionController.prototype.assignEntityMethods = function () {
  const scriptContext = this;
  this.entity.requestNextCollectableType = function () {
    if (scriptContext.currentMissionDataLoaded) {
      const currentMissionLevel =
        MissionsManager.getInstance().getCurrentMissionState().missionLevel;
      const currentTimestamp = new Date().getTime();
      const currentCollectableDelay =
        scriptContext.collectableDelays[
          pc.math.clamp(currentMissionLevel, 0, 2)
        ] *
        (1 + MissionsManager.getInstance().getCurrentMissionIndex() / 20);
      if (scriptContext.currentMissionData.missionType === "CollectLetters") {
        if (
          Math.random() <
            scriptContext.collectableProbabilities[
              pc.math.clamp(currentMissionLevel, 0, 2)
            ] &&
          currentTimestamp - scriptContext.lastCollectableTimestamp >
            currentCollectableDelay
        ) {
          scriptContext.lastCollectableTimestamp = currentTimestamp;
          const letterType = Utils.getRandomItem(
            scriptContext.availableLetters
          );
          return {
            collectableType: Constants.CollectableType.LETTER,
            collectableSubType: letterType,
          };
        } else {
          return null;
        }
      } else if (
        scriptContext.currentMissionData.missionType === "CollectTokens"
      ) {
        if (
          Math.random() <
            scriptContext.collectableProbabilities[
              pc.math.clamp(currentMissionLevel, 0, 2)
            ] &&
          currentTimestamp - scriptContext.lastCollectableTimestamp >
            currentCollectableDelay
        ) {
          scriptContext.lastCollectableTimestamp = currentTimestamp;
          return {
            collectableType: Constants.CollectableType.TOKEN,
            collectableSubType: null,
          };
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
  }.bind(this.entity);
};

LevelMissionController.prototype.update = function (dt) {};

LevelMissionController.prototype.initMissionObjectives = function () {
  const isFreeRun = MissionsManager.getInstance().isFreeRunMode();

  this.freeRunMode = isFreeRun;
  this.missionCompleted = false;
  this.requiredDistance = 0;
  this.passedDistance = 0;
  this.tokensPickedUp = 0;
  this.requiredTokens = 0;
  this.requiredStunts = 0;
  this.performedStunts = 0;
  this.requiredLetters = [];
  this.availableLetters = [];
  this.passedDistanceInFreeRunMode = 0;

  this.app.fire(
    EventTypes.UI.UPDATE_RESTART_POPUP_CONTENT,
    isFreeRun,
    isFreeRun ? 0 : MissionsManager.getInstance().getCurrentMissionIndex()
  );

  if (isFreeRun) {
    this.currentMissionData = null;
    this.currentMissionDataLoaded = false;
  } else {
    this.currentMissionData =
      MissionsManager.getInstance().getCurrentMissionData();
    if (this.currentMissionData) {
      this.currentMissionDataLoaded = true;

      if (this.currentMissionData.missionType === "CollectLetters") {
        this.prepareAvailableLetters();
      } else if (this.currentMissionData.missionType === "CollectTokens") {
        this.prepareRequiredTokens();
      } else if (this.currentMissionData.missionType === "PerformStunts") {
        this.prepareRequiredStunts();
      } else if (this.currentMissionData.missionType === "ReachDistance") {
        this.prepareRunDistance();
      }
    }
  }
};

LevelMissionController.prototype.onStuntPerformed = function () {
  if (this.missionCompleted || !this.currentMissionDataLoaded) {
    return;
  }

  if (this.currentMissionData.missionType === "PerformStunts") {
    this.performedStunts += 1;
    if (this.performedStunts >= this.requiredStunts) {
      MissionsManager.getInstance().setSessionStars(
        MissionsManager.getInstance().getCurrentMissionState().missionLevel + 1
      );
      MissionsManager.getInstance().setCurrentMissionState(
        MissionsManager.getInstance().getCurrentMissionState().missionLevel + 1
      );
      if (
        MissionsManager.getInstance().getCurrentMissionState().missionLevel ===
        3
      ) {
        this.app.fire(
          EventTypes.MISSION_PROGRESS_UPDATED,
          Constants.CollectableType.STUNT,
          this.requiredStunts,
          this.performedStunts
        );
        this.missionCompleted = true;
        this.app.fire(EventTypes.LEVEL_FINISHED);
        this.app.fire(EventTypes.DISPLAY_YOU_WIN_MESSAGE);
      } else {
        this.app.fire(
          EventTypes.DISPLAY_UPDATED_CURRENT_MISSION_TARGET,
          MissionsManager.getInstance().getCurrentMissionState().missionLevel
        );
        this.prepareRequiredStunts();
      }
    } else {
      this.app.fire(
        EventTypes.MISSION_PROGRESS_UPDATED,
        Constants.CollectableType.STUNT,
        this.requiredStunts,
        this.performedStunts
      );
    }
  }
};

LevelMissionController.prototype.onPassedDistanceIncreased = function (
  passedDistanceDelta
) {
  this.passedDistance += passedDistanceDelta;
  this.lastReportedScore = this.lastReportedScore || 0;
  if (Math.floor(this.passedDistance) != this.lastReportedScore) {
    this.lastReportedScore = Math.floor(this.passedDistance);
    Apicontroller.reportLiveScore(this.lastReportedScore);
  }

  if (this.missionCompleted || !this.currentMissionDataLoaded) {
    if (this.freeRunMode) {
      this.passedDistanceInFreeRunMode += passedDistanceDelta;
      this.app.fire(
        EventTypes.FREE_RUN_DISTANCE_RAN,
        this.passedDistanceInFreeRunMode
      );
    }
    return;
  }

  if (this.currentMissionData.missionType === "ReachDistance") {
    if (this.passedDistance >= this.requiredDistance) {
      MissionsManager.getInstance().setSessionStars(
        MissionsManager.getInstance().getCurrentMissionState().missionLevel + 1
      );
      MissionsManager.getInstance().setCurrentMissionState(
        MissionsManager.getInstance().getCurrentMissionState().missionLevel + 1
      );
      if (
        MissionsManager.getInstance().getCurrentMissionState().missionLevel ===
        3
      ) {
        this.app.fire(
          EventTypes.MISSION_PROGRESS_UPDATED,
          Constants.CollectableType.PASSED_DISTANCE,
          this.requiredDistance,
          this.passedDistance
        );
        this.missionCompleted = true;
        this.app.fire(EventTypes.LEVEL_FINISHED);
        this.app.fire(EventTypes.DISPLAY_YOU_WIN_MESSAGE);
      } else {
        this.app.fire(
          EventTypes.DISPLAY_UPDATED_CURRENT_MISSION_TARGET,
          MissionsManager.getInstance().getCurrentMissionState().missionLevel
        );
        this.prepareRunDistance();
      }
    } else {
      this.app.fire(
        EventTypes.MISSION_PROGRESS_UPDATED,
        Constants.CollectableType.PASSED_DISTANCE,
        this.requiredDistance,
        this.passedDistance
      );
    }
  }
};

LevelMissionController.prototype.onCollectablePickedUp = function (
  collectableType,
  collectableSubType,
  pickUpPosition
) {
  if (this.missionCompleted || !this.currentMissionDataLoaded) {
    return;
  }

  if (
    this.currentMissionData.missionType === "CollectLetters" &&
    collectableType === Constants.CollectableType.LETTER
  ) {
    Apicontroller.trackStats("letter_collected", {
      letter: collectableSubType.toUpperCase(),
    });

    if (this.availableLetters.indexOf(collectableSubType) != -1) {
      this.availableLetters.splice(
        this.availableLetters.indexOf(collectableSubType),
        1
      );
    }

    if (this.availableLetters.length === 0) {
      const currentMissionLevel =
        MissionsManager.getInstance().getCurrentMissionState().missionLevel;
      MissionsManager.getInstance().setSessionStars(currentMissionLevel + 1);
      MissionsManager.getInstance().setCurrentMissionState(
        currentMissionLevel + 1
      );
      if (
        MissionsManager.getInstance().getCurrentMissionState().missionLevel ===
        3
      ) {
        this.app.fire(
          EventTypes.MISSION_PROGRESS_UPDATED,
          Constants.CollectableType.LETTER,
          this.requiredLetters,
          this.getCollectedLetters()
        );
        this.missionCompleted = true;
        this.app.fire(EventTypes.LEVEL_FINISHED);
        this.app.fire(EventTypes.DISPLAY_YOU_WIN_MESSAGE);
      } else {
        this.app.fire(
          EventTypes.DISPLAY_UPDATED_CURRENT_MISSION_TARGET,
          MissionsManager.getInstance().getCurrentMissionState().missionLevel
        );
        this.prepareAvailableLetters();
      }
    } else {
      this.app.fire(
        EventTypes.MISSION_PROGRESS_UPDATED,
        Constants.CollectableType.LETTER,
        this.requiredLetters,
        this.getCollectedLetters()
      );
      this.app.fire(EventTypes.REPLACE_COLLECTABLE_LETTERS);
    }
  } else if (
    this.currentMissionData.missionType === "CollectTokens" &&
    collectableType === Constants.CollectableType.TOKEN
  ) {
    Apicontroller.trackStats("token_collected");

    this.tokensPickedUp += 1;
    if (this.tokensPickedUp >= this.requiredTokens) {
      MissionsManager.getInstance().setSessionStars(
        MissionsManager.getInstance().getCurrentMissionState().missionLevel + 1
      );
      MissionsManager.getInstance().setCurrentMissionState(
        MissionsManager.getInstance().getCurrentMissionState().missionLevel + 1
      );
      if (
        MissionsManager.getInstance().getCurrentMissionState().missionLevel ===
        3
      ) {
        this.app.fire(
          EventTypes.MISSION_PROGRESS_UPDATED,
          Constants.CollectableType.TOKEN,
          this.requiredTokens,
          this.tokensPickedUp
        );
        this.missionCompleted = true;
        this.app.fire(EventTypes.LEVEL_FINISHED);
        this.app.fire(EventTypes.DISPLAY_YOU_WIN_MESSAGE);
      } else {
        this.app.fire(
          EventTypes.DISPLAY_UPDATED_CURRENT_MISSION_TARGET,
          MissionsManager.getInstance().getCurrentMissionState().missionLevel
        );
        this.prepareRequiredTokens();
      }
    } else {
      this.app.fire(
        EventTypes.MISSION_PROGRESS_UPDATED,
        Constants.CollectableType.TOKEN,
        this.requiredTokens,
        this.tokensPickedUp
      );
    }
  }
};

LevelMissionController.prototype.getCollectedLetters = function () {
  const collectedLetters = this.requiredLetters.slice();
  this.availableLetters.forEach((letter) => {
    if (collectedLetters.indexOf(letter) != -1) {
      collectedLetters.splice(collectedLetters.indexOf(letter), 1);
    }
  });
  return collectedLetters;
};

LevelMissionController.prototype.prepareAvailableLetters = function () {
  const currentMissionLevel =
    MissionsManager.getInstance().getCurrentMissionState().missionLevel;
  const currentMissionWord =
    this.currentMissionData.missionGoal[
      pc.math.clamp(currentMissionLevel, 0, 2)
    ];

  this.requiredLetters = currentMissionWord.split("");
  this.availableLetters = currentMissionWord.split("");
  this.app.fire(
    EventTypes.MISSION_PROGRESS_UPDATED,
    Constants.CollectableType.LETTER,
    this.requiredLetters,
    this.getCollectedLetters()
  );

  this.app.fire(EventTypes.REPLACE_COLLECTABLE_LETTERS);
};

LevelMissionController.prototype.prepareRequiredTokens = function () {
  const currentMissionLevel =
    MissionsManager.getInstance().getCurrentMissionState().missionLevel;
  this.requiredTokens =
    this.currentMissionData.missionGoal[
      pc.math.clamp(currentMissionLevel, 0, 2)
    ];
  this.app.fire(
    EventTypes.MISSION_PROGRESS_UPDATED,
    Constants.CollectableType.TOKEN,
    this.requiredTokens,
    this.tokensPickedUp
  );
};

LevelMissionController.prototype.prepareRequiredStunts = function () {
  const currentMissionLevel =
    MissionsManager.getInstance().getCurrentMissionState().missionLevel;
  this.requiredStunts =
    this.currentMissionData.missionGoal[
      pc.math.clamp(currentMissionLevel, 0, 2)
    ];
  this.app.fire(
    EventTypes.MISSION_PROGRESS_UPDATED,
    Constants.CollectableType.STUNT,
    this.requiredStunts,
    this.performedStunts
  );
};

LevelMissionController.prototype.prepareRunDistance = function () {
  const currentMissionLevel =
    MissionsManager.getInstance().getCurrentMissionState().missionLevel;
  this.requiredDistance =
    this.currentMissionData.missionGoal[
      pc.math.clamp(currentMissionLevel, 0, 2)
    ];
  this.app.fire(
    EventTypes.MISSION_PROGRESS_UPDATED,
    Constants.CollectableType.PASSED_DISTANCE,
    this.requiredDistance,
    this.passedDistance
  );
};

// TransitionScreen.js
/* jshint esversion: 6 */

var TransitionScreen = pc.createScript("transitionScreen");

TransitionScreen.attributes.add("windowOpacity", {
  type: "number",
  default: 1,
});

TransitionScreen.prototype.initialize = function () {
  this.interlocationLoading = this.entity.findByName("InterlocationLoading");
  this.loadingText = this.entity.findByName("LoadingText");
  this._loadingProgress = 0;
  this.app.on(EventTypes.ASSETS_LOADER_PROGRESS, this.updateProgressText, this);

  this.app.on(
    EventTypes.SHOW_TRANSITION_SCREEN,
    this.showTransitionScreen,
    this
  );
  this.app.on(
    EventTypes.HIDE_TRANSITION_SCREEN,
    this.hideTransitionScreen,
    this
  );

  this.assignEntityMethods();

  this.entity.enabled = false;
};

TransitionScreen.prototype.assignEntityMethods = function () {
  const scriptContext = this;

  this.entity.show = function () {
    // console.log('TransitionScreen.show shouldn\'t be called directly from UI controller! Consider firing SHOW_TRANSITION_SCREEN event');
  }.bind(this.entity);

  this.entity.hide = function () {
    // console.log('TransitionScreen.hide shouldn\'t be called directly from UI controller! Consider firing HIDE_TRANSITION_SCREEN event');
  }.bind(this.entity);
};

TransitionScreen.prototype.update = function (dt) {
  if (this.loadingText.enabled && this.entity.element.opacity > 0) {
    if (this._loadingProgress > 0) {
      this.loadingText.element.opacity =
        this.interlocationLoading.element.opacity = Math.pow(
          this.entity.element.opacity,
          3
        );
    } else {
      this.loadingText.element.opacity = 0;
      this.interlocationLoading.element.opacity = 0;
    }
  }
};

TransitionScreen.prototype.updateProgressText = function (progress) {
  this._loadingProgress = progress;
  this.loadingText.element.text =
    "" + Math.floor(this._loadingProgress * 100) + "%";
};

TransitionScreen.prototype.showTransitionScreen = function (
  duration = 0.3,
  onCompleteCallback = null,
  splashColor = "#000000",
  showLoadingText = false,
  forceLoadingIcon = false
) {
  this.resetActiveTween();

  // this.loadingText.enabled = !!showLoadingText;
  // this.loadingText.element.opacity = 0;
  // this.interlocationLoading.element.opacity = 0;
  // this._loadingProgress = 0;

  this.loadingText.enabled = !!showLoadingText || forceLoadingIcon;
  if (forceLoadingIcon) {
    this.loadingText.element.text = "";
    this.loadingText.element.opacity = 1;
    this.interlocationLoading.element.opacity = 1;
    this._loadingProgress = 0.001;
  } else {
    this.loadingText.element.opacity = 0;
    this.interlocationLoading.element.opacity = 0;
    this._loadingProgress = 0;
  }

  this.entity.enabled = true;
  this.entity.element.color = new pc.Color().fromString(splashColor);

  if (duration > 0) {
    this.entity.element.opacity = 0.0;
    this.transitionTween = this.entity
      .tween(this.entity.element)
      .to({ opacity: this.windowOpacity }, duration, pc.Linear)
      .on("complete", () => {
        if (onCompleteCallback) onCompleteCallback();
      })
      .start();
  } else {
    this.entity.element.opacity = this.windowOpacity;
    if (onCompleteCallback) onCompleteCallback();
  }
};

TransitionScreen.prototype.hideTransitionScreen = function (
  duration = 0.3,
  onCompleteCallback = null
) {
  this.resetActiveTween();

  this.entity.element.opacity = 1.0;
  this.transitionTween = this.entity
    .tween(this.entity.element)
    .to({ opacity: 0 }, duration, pc.SineOut)
    .on("complete", () => {
      this.entity.enabled = false;
      if (onCompleteCallback) onCompleteCallback();
    })
    .start();
};

TransitionScreen.prototype.resetActiveTween = function () {
  if (this.transitionTween && this.transitionTween.playing) {
    this.transitionTween.stop();
  }
  this.transitionTween = null;
};

// MissionsManager.js
/* jshint esversion: 6 */
var MissionsManager = pc.createScript("missionsManager");

MissionsManager.CURRENT_MISSION = 1;
MissionsManager.MAX_UNLOCKED_MISSION = 1;
MissionsManager.MISSION_STATES = null;

MissionsManager.attributes.add("missionsModelJSON", {
  type: "asset",
  assetType: "json",
});

MissionsManager.getInstance = function () {
  if (!MissionsManager._instance)
    throw new Error("MissionsManager is not initialized yet");
  return MissionsManager._instance;
};

MissionsManager.prototype.initialize = function () {
  MissionsManager._app = this.app;
  if (!MissionsManager._instance) {
    MissionsManager._instance = this;
  }

  /* freerun status */
  this._freeRunActive = false;
  this.sessionStars = 0;

  /* current mission site */
  this.currentMissionSite = undefined;

  /* initialize varibles */
  MissionsManager.MAX_UNLOCKED_MISSION = LocalStorageController.getSavedValue(
    Constants.Storage.MAX_UNLOCKED_MISSION
  );
  MissionsManager.CURRENT_MISSION = LocalStorageController.getSavedValue(
    Constants.Storage.CURRENT_MISSION
  );
  MissionsManager.MISSION_STATES = LocalStorageController.getSavedValue(
    Constants.Storage.MISSION_STATES
  );

  this.missionsModel = this.missionsModelJSON.resource;
  this.missionsList = [].concat.apply(
    [],
    this.missionsModel.chapters.map((chapter) => chapter.missions)
  );

  this.app.on(
    EventTypes.SET_CURRENT_MISSION_INDEX,
    this.setCurrentMissionIndex,
    this
  );
  this.app.on(EventTypes.GAMEPLAY_LAUNCH, this.resetSessionStars, this);
};

/* Public */

MissionsManager.prototype.launchSelectedMode = function (
  freeRunMode = false,
  trackRestart = false,
  transitionDuration = 0.3
) {
  MissionsManager.getInstance().setFreeRunMode(!!freeRunMode);

  /* tracking & analytics */
  Apicontroller.trackLevelStart({
    level: MissionsManager.getInstance().isFreeRunMode()
      ? 0
      : MissionsManager.getInstance().getCurrentMissionIndex(),
  });
  if (window.famobi_analytics) {
    window.famobi_analytics.trackEvent(
      trackRestart ? "EVENT_LEVELRESTART" : "EVENT_LEVELSTART",
      {
        levelName: `${
          MissionsManager.getInstance().isFreeRunMode()
            ? 0
            : MissionsManager.getInstance().getCurrentMissionIndex()
        }`,
      }
    );
  }

  this.app.fire(EventTypes.GAMEPLAY_TRANSITION_TO_LAUNCH, transitionDuration);
};

MissionsManager.prototype.setMaxUnlockedMissionIndex = function (missionIndex) {
  if (missionIndex > MissionsManager.MAX_UNLOCKED_MISSION) {
    MissionsManager.MAX_UNLOCKED_MISSION = missionIndex;
    this.app.fire(EventTypes.SAVE_APP);
  }
};

MissionsManager.prototype.setFreeRunMode = function (value) {
  this._freeRunActive = value;
  if (this._currentMissionSiteLocked && this.freeRunModeSite) {
    //console.error('Trying to set freerun site but its locked to ' + this.freeRunModeSite);
  } else {
    this.freeRunModeSite = this.getRandomUnlockedSite();
  }
};

MissionsManager.prototype.isFreeRunMode = function () {
  return this._freeRunActive;
};

MissionsManager.prototype.getTotalMissionsAmount = function () {
  return this.missionsList.length;
};

MissionsManager.prototype.lockCurrentMissionSite = function () {
  this._currentMissionSiteLocked = true;
};

MissionsManager.prototype.unlockCurrentMissionSite = function () {
  this._currentMissionSiteLocked = false;
};

MissionsManager.prototype.getMaxUnlockedMissionIndex = function () {
  return MissionsManager.MAX_UNLOCKED_MISSION;
};

MissionsManager.prototype.getMissionStates = function () {
  if (
    !MissionsManager.MISSION_STATES ||
    MissionsManager.MISSION_STATES.length === 0
  ) {
    MissionsManager.MISSION_STATES = this.missionsList.map((missionData) => {
      return {
        missionIndex: missionData.index,
        missionLevel: 0,
        rewardClaimed: false,
      };
    });
  } else if (
    MissionsManager.MISSION_STATES.length !== this.missionsList.length
  ) {
    this.missionsList.forEach((missionData, index) => {
      if (!MissionsManager.MISSION_STATES[index]) {
        MissionsManager.MISSION_STATES[index] = {
          missionIndex: missionData.index,
          missionLevel: 0,
          rewardClaimed: false,
        };
      }
    });
  }
  return MissionsManager.MISSION_STATES;
};

MissionsManager.prototype.getMissionState = function (missionIndex) {
  return this.getMissionStates().find(
    (missionState) => missionState.missionIndex === missionIndex
  );
};

MissionsManager.prototype.resetSessionStars = function () {
  this.sessionStars = 0;
};

MissionsManager.prototype.setSessionStars = function (numStars) {
  this.sessionStars = numStars;
};

MissionsManager.prototype.getSessionStars = function () {
  return this.sessionStars;
};

MissionsManager.prototype.getCurrentMissionState = function () {
  const currentMissionIndex = this.getCurrentMissionIndex();
  return this.getMissionState(currentMissionIndex);
};

MissionsManager.prototype.setMissionState = function (
  missionIndex,
  missionLevel
) {
  const missionState = this.getMissionState(missionIndex);

  if (missionState) {
    missionState.missionLevel = Math.max(
      missionLevel,
      missionState.missionLevel
    );
    this.app.fire(EventTypes.SAVE_APP);
  } else {
    console.warn("setMissionState: wrong mission index " + missionIndex);
  }
};

MissionsManager.prototype.setCurrentMissionState = function (missionLevel) {
  this.setMissionState(
    this.getCurrentMissionIndex(),
    pc.math.clamp(missionLevel, 0, 3)
  );
};

MissionsManager.prototype.getMissionsModel = function () {
  return this.missionsModel;
};

MissionsManager.prototype.getMissionsList = function () {
  return this.missionsList;
};

MissionsManager.prototype.getCurrentMissionIndex = function () {
  return MissionsManager.CURRENT_MISSION;
};

MissionsManager.prototype.setCurrentMissionIndex = function (missionIndex) {
  famobi.log("Set currentMission #", missionIndex);
  MissionsManager.CURRENT_MISSION = missionIndex;
  this.app.fire(EventTypes.SAVE_APP);
};

MissionsManager.prototype.getMissionData = function (missionIndex) {
  return this.missionsList.find(
    (missionData) => missionData.index === missionIndex
  );
};

MissionsManager.prototype.getCurrentMissionData = function () {
  return this.missionsList.find(
    (missionData) => missionData.index === this.getCurrentMissionIndex()
  );
};

MissionsManager.prototype.getCurrentMissionSite = function () {
  const forcedModeSiteName = getPredefinedWorldName();
  if (forcedModeSiteName) {
    const siteIndex = Constants.Site[forcedModeSiteName];
    if (siteIndex) {
      return siteIndex;
    }
  }

  if (this.isFreeRunMode()) {
    return this.freeRunModeSite;
  } else {
    return this.currentMissionSite;
  }
};

MissionsManager.prototype.setCurrentMissionSite = function (site) {
  if (this._currentMissionSiteLocked) {
    if (this.currentMissionSite) {
      // console.error('Trying to set mission site to ' + site + ' but its locked to ' + this.currentMissionSite);
      return;
    }
  }
  this.currentMissionSite = site;
};

MissionsManager.prototype.getRandomUnlockedSite = function () {
  const unlockedSites = new Set();
  const addSite = (site) => unlockedSites.add(site);
  for (let i = 0; i < this.getMaxUnlockedMissionIndex(); i++) {
    if (this.missionsList[i] && this.missionsList[i].siteRestrictions) {
      this.missionsList[i].siteRestrictions.forEach(addSite);
    }
  }
  return Utils.getRandomItem(Array.from(unlockedSites));
};

MissionsManager.prototype.update = function (dt) {};

// victoryConfettiEffect.js
var VictoryConfettiEffect = pc.createScript("victoryConfettiEffect");

VictoryConfettiEffect.prototype.initialize = function () {
  this.app.on(EventTypes.PLAY_VICTORY_EFFECT, this.playEffect, this);
  this.app.on(EventTypes.GAMEPLAY_EXIT, this.hide, this);
  this.app.on(EventTypes.LEVEL_START, this.hide, this);
  this.beam = this.entity.findByName("BeamGroup");

  this.entity.enabled = false;
};

VictoryConfettiEffect.prototype.update = function (dt) {
  this.beam.rotateLocal(0, 360 * dt, 0);
};

VictoryConfettiEffect.prototype.playEffect = function (worldPosition) {
  this.entity.setPosition(worldPosition);
  this.entity.enabled = true;
};

VictoryConfettiEffect.prototype.hide = function () {
  this.entity.enabled = false;
};

// charactersManager.js
/* jshint esversion: 6 */
var CharactersManager = pc.createScript("charactersManager");

CharactersManager.ACTIVE_CHARACTER = null;
CharactersManager.CHARACTERS_DATA = null;

CharactersManager.attributes.add("charactersConfig", {
  type: "asset",
  assetType: "json",
});

CharactersManager.getInstance = function () {
  if (!CharactersManager._instance)
    throw new Error("CharactersManager is not initialized yet");
  return CharactersManager._instance;
};

CharactersManager.prototype.initialize = function () {
  CharactersManager._app = this.app;
  if (!CharactersManager._instance) {
    CharactersManager._instance = this;
  }

  /* initialize varibles */
  CharactersManager.ACTIVE_CHARACTER =
    getPredefinedCharacterName() ||
    LocalStorageController.getSavedValue(Constants.Storage.ACTIVE_CHARACTER) ||
    Constants.CharacterNames.SUPER_NOM;
  CharactersManager.CHARACTERS_DATA = LocalStorageController.getSavedValue(
    Constants.Storage.CHARACTERS_DATA
  );

  this.app.on(
    EventTypes.SELECT_ACTIVE_CHARACTER,
    this.onSelectActiveCharacter,
    this
  );
  this.app.on(EventTypes.CHARACTER_UNLOCKED, this.onCharacterUnlocked, this);
  this.app.on(
    EventTypes.CHARACTER_SKILL_LEVEL_UPGRADED,
    this.onCharacterSkillUpgraded,
    this
  );
  this.app.on(EventTypes.SET_ONE_RUN_CHARACTER, this.setOneRunCharacter, this);
  this.app.on(EventTypes.GAMEPLAY_EXIT, this.resetOneRunCharacter, this);
};

CharactersManager.prototype.update = function (dt) {};

CharactersManager.prototype.setOneRunCharacter = function (characterKey) {
  this.currentOneRunCharacter = characterKey;
};

CharactersManager.prototype.resetOneRunCharacter = function (characterKey) {
  this.currentOneRunCharacter = null;
};

CharactersManager.prototype.getCharactersConfig = function () {
  if (!this.charactersConfig.resource) {
    console.error(
      "CharactersConfig.json should be set in order to use CharactersManager.getCharactersConfig()"
    );
    return {};
  }
  return this.charactersConfig.resource;
};

CharactersManager.prototype.getCharacterParams = function (characterKey) {
  return this.getCharactersConfig().characters.find(
    (character) => character.key === characterKey
  );
};

CharactersManager.prototype.getPurchasedCharacters = function () {
  return Object.keys(this.getCharactersData()).filter(
    (key) =>
      this.getCharactersConfig().characters.find(
        (character) => character.key === key
      ) && this.getCharactersData()[key].purchased
  );
};

CharactersManager.prototype.getLockedCharacters = function () {
  return Object.keys(this.getCharactersData()).filter(
    (key) =>
      this.getCharactersConfig().characters.find(
        (character) => character.key === key
      ) && !this.getCharactersData()[key].purchased
  );
};

CharactersManager.prototype.getOneRunCharacterLeft = function () {
  const lockedCharacters = this.getLockedCharacters();
  if (
    !this.oneRunCharacterLeft ||
    (lockedCharacters.length > 0 &&
      lockedCharacters.indexOf(this.oneRunCharacterLeft) === -1)
  ) {
    this.oneRunCharacterLeft =
      Utils.getRandomItem(lockedCharacters) ||
      Utils.getRandomItem(this.getPurchasedCharacters());
  }
  return this.oneRunCharacterLeft;
};

CharactersManager.prototype.getOneRunCharacterRight = function () {
  const lockedCharacters = this.getLockedCharacters().filter(
    (key) => key != this.oneRunCharacterLeft
  );
  if (
    !this.oneRunCharacterRight ||
    (lockedCharacters.length > 0 &&
      lockedCharacters.indexOf(this.oneRunCharacterRight) === -1)
  ) {
    this.oneRunCharacterRight =
      Utils.getRandomItem(lockedCharacters) ||
      Utils.getRandomItem(this.getPurchasedCharacters());
  }
  return this.oneRunCharacterRight;
};

CharactersManager.prototype.getActiveCharacter = function () {
  return this.currentOneRunCharacter || CharactersManager.ACTIVE_CHARACTER;
};

CharactersManager.prototype.getCurrentUnlockedCharacter = function () {
  return CharactersManager.ACTIVE_CHARACTER;
};

CharactersManager.prototype.getMaxUnlockedStuntLevel = function () {
  let maxLevel = 0;
  const charactersData = this.getCharactersData();
  for (let key in charactersData) {
    const upgradeLevels = charactersData[key].levels;
    maxLevel = Math.max(maxLevel, ...upgradeLevels);
  }

  return maxLevel + 1;
};

CharactersManager.prototype.getCharactersData = function () {
  if (!CharactersManager.CHARACTERS_DATA) {
    CharactersManager.CHARACTERS_DATA = {};

    for (let key in Constants.CharacterNames) {
      const characterName = Constants.CharacterNames[key];
      const characterPurchased =
        Constants.CharacterNames[key] === Constants.CharacterNames.SUPER_NOM;
      CharactersManager.CHARACTERS_DATA[characterName] = {
        levels: [0, 0, 0],
        purchased: characterPurchased,
      };
    }
  }
  return CharactersManager.CHARACTERS_DATA;
};

CharactersManager.prototype.getCurrentCharacterStunts = function () {
  const characterData =
    CharactersManager.getInstance().getCharactersData()[
      CharactersManager.getInstance().getActiveCharacter()
    ];
  const stuntLevels = characterData.levels;

  if (isForcedMode()) {
    return [
      getStuntLevel(1) || stuntLevels[0],
      getStuntLevel(2) || stuntLevels[1],
      getStuntLevel(3) || stuntLevels[2],
    ];
  }

  return stuntLevels;
};

/* Event handlers */

CharactersManager.prototype.onCharacterUnlocked = function (characterKey) {
  this.getCharactersData()[characterKey].purchased = true;
  this.app.fire(EventTypes.SAVE_APP);
};

CharactersManager.prototype.onCharacterSkillUpgraded = function (
  characterKey,
  skillIndex,
  skillLevel
) {
  this.getCharactersData()[characterKey].levels[skillIndex] = skillLevel;
  this.app.fire(EventTypes.SAVE_APP);
};

CharactersManager.prototype.onSelectActiveCharacter = function (characterName) {
  if (this.currentOneRunCharacter) {
    console.warn("One run character is active, can not replace it...");
    return;
  }
  CharactersManager.ACTIVE_CHARACTER = characterName;
  this.app.fire(EventTypes.SAVE_APP);
  this.app.fire(EventTypes.CHARACTER_SELECTED, this.getActiveCharacter());
};

// laneObjectMovement.js
/* jshint esversion: 6 */
var LaneObjectMovement = pc.createScript("laneObjectMovement");

LaneObjectMovement.attributes.add("activationDistance", {
  type: "number",
  default: 100,
});

LaneObjectMovement.prototype.initialize = function () {
  this.level = this.app.root.findByName("Level");
  //console.warn('Moving laneObject ' + this.entity.name + ' initialized, local position ', this.entity.getLocalPosition().toString());

  this.entity.on(EventTypes.ENTITY_CACHED, this.onCached, this);
};

LaneObjectMovement.prototype.postInitialize = function () {
  // this.entity.targetLocalPosition = this.entity.getLocalPosition().clone();
  // console.warn('Moving laneObject ' + this.entity.name + '  initialized with target local position ', this.entity.targetLocalPosition.toString());
};

LaneObjectMovement.prototype.onCached = function (targetPosition) {
  // console.log(`[Moving object] ${this.entity.name} added to cache`);
  this.entity.targetLocalPosition = null;
};

LaneObjectMovement.prototype.resetTargetPosition = function (targetPosition) {
  this.entity.targetLocalPosition = targetPosition.clone(); //this.entity.getLocalPosition().clone();
  // console.log(`[Moving object] ${this.entity.name} is reset, target pos ${this.entity.targetLocalPosition().toString()}`);
};

LaneObjectMovement.prototype.update = function (dt) {
  if (
    this.level &&
    this.entity.laneObjectData &&
    this.entity.targetLocalPosition &&
    this.level.gameState.isGameRunningOrIdle()
  ) {
    const playerMovementSpeed = this.level.getMovementSpeed();
    let distanceToPlayer =
      Math.min(this.entity.getPosition().z, this.activationDistance) - 1;

    if (
      this.entity.laneObjectData.MovementDirection == MovementDirection.Left ||
      this.entity.laneObjectData.MovementDirection == MovementDirection.Right
    ) {
      distanceToPlayer -= 1.2; // Half of universal vehile width value.
      distanceToPlayer -= this.entity.laneObjectData.StoppingDistance;
    }

    const duration = distanceToPlayer / playerMovementSpeed;
    const distance =
      duration * Math.min(this.entity.laneObjectData.MovementSpeed, 8);
    const position = this.entity.targetLocalPosition.clone();

    switch (this.entity.laneObjectData.MovementDirection) {
      case MovementDirection.Towards:
        position.z =
          this.entity.laneObjectData.StoppingDistance < 0
            ? this.entity.targetLocalPosition.z + distance
            : this.entity.targetLocalPosition.z + Math.max(0, distance);
        break;

      case MovementDirection.Right:
        position.x =
          this.entity.laneObjectData.StoppingDistance < 0
            ? this.entity.targetLocalPosition.x + distance
            : this.entity.targetLocalPosition.x + Math.max(0, distance);
        break;

      case MovementDirection.Left:
        position.x =
          this.entity.laneObjectData.StoppingDistance < 0
            ? this.entity.targetLocalPosition.x - distance
            : this.entity.targetLocalPosition.x - Math.max(0, distance);
        break;

      case MovementDirection.Up:
        position.y =
          this.entity.laneObjectData.StoppingDistance < 0
            ? this.entity.targetLocalPosition.y - distance
            : this.entity.targetLocalPosition.y - Math.max(0, distance);
        break;

      case MovementDirection.Down:
        position.y =
          this.entity.laneObjectData.StoppingDistance < 0
            ? this.entity.targetLocalPosition.y + distance
            : this.entity.targetLocalPosition.y + Math.max(0, distance);
        break;
    }

    this.entity.setLocalPosition(position);
  }
};

// NotEnoughCoinsPopup.js
/* jshint esversion: 6 */
var NotEnoughCoinsPopup = pc.createScript("notEnoughCoinsPopup");

NotEnoughCoinsPopup.attributes.add("currentReward", {
  type: "number",
  default: 3000,
});

NotEnoughCoinsPopup.prototype.initialize = function () {
  this.pad = this.entity.findByName("Pad");
  this.popUp = this.entity.findByName("Panel");
  this.rewardIcon = this.entity.findByName("RewardIcon");
  this.rewardText = this.entity.findByName("RewardText");
  this.buttonGetFreeCoins = this.entity.findByName("ButtonGetFreeCoins");
  this.buttonGetFreeCoinsGreyed = this.entity.findByName(
    "ButtonGetFreeCoinsGreyed"
  );
  this.buttonClose = this.entity.findByName("CloseButton");

  this.pad.element.opacity = GameConfig.getAttribute("padOpacity");

  this.assignEntityMethods();

  BasicButton.assignAction(this.buttonClose, this.closeClicked, this);
  BasicButton.assignAction(
    this.buttonGetFreeCoins,
    this.getFreeCoinsClicked,
    this
  );
};

NotEnoughCoinsPopup.prototype.update = function (dt) {
  this.buttonGetFreeCoins.enabled = Apicontroller.hasRewardedVideo();
  this.buttonGetFreeCoinsGreyed.enabled = !this.buttonGetFreeCoins.enabled;
};

NotEnoughCoinsPopup.prototype.closeClicked = function () {
  this.entity.hideAnimated();
};

NotEnoughCoinsPopup.prototype.getFreeCoinsClicked = function () {
  const addExtraCoins = () => {
    // CoinsStorage.getInstance().addCoins(this.currentReward, true);
    this.app.fire(
      EventTypes.UI.SET_COLLLECT_REWARD_POPUP_PARAMS,
      this.currentReward
    );
    this.app.fire(
      EventTypes.SHOW_UI_WINDOW,
      Constants.UI.COLLECT_REWARD_POPUP,
      false
    );
    this.entity.hideAnimated();
  };

  if (Apicontroller.hasRewardedVideo()) {
    this.app.timeScale = 0;
    Apicontroller.showRewardedVideo((result) => {
      this.app.timeScale = 1;
      if (result.rewardGranted) {
        addExtraCoins();
      }
    });
  }
};

NotEnoughCoinsPopup.prototype.assignEntityMethods = function () {
  const scriptContext = this;

  this.entity.show = function () {
    this.enabled = true;
    scriptContext.rewardText.element.text = `x${scriptContext.currentReward}`;

    scriptContext.popUp.setLocalScale(0, 0, 0);
    scriptContext.popUp
      .tween(scriptContext.popUp.getLocalScale())
      .to(new pc.Vec3(1, 1, 1), 1, pc.ElasticOut)
      .start();

    scriptContext.pad.element.opacity = 0;
    scriptContext.pad
      .tween(scriptContext.pad.element)
      .to({ opacity: GameConfig.getAttribute("padOpacity") }, 0.1, pc.Linear)
      .start();

    scriptContext.rewardIcon.setLocalScale(1, 1, 1);
    // scriptContext.rewardIcon.setLocalPosition(150, 70, 0);
    scriptContext.rewardIcon.element.opacity = 1;
  }.bind(this.entity);

  this.entity.hide = function () {
    this.enabled = false;
  }.bind(this.entity);

  this.entity.hideAnimated = function () {
    scriptContext.pad.element.opacity = GameConfig.getAttribute("padOpacity");
    scriptContext.pad
      .tween(scriptContext.pad.element)
      .to({ opacity: 0 }, 0.1, pc.Linear)
      .start();

    scriptContext.popUp.setLocalScale(1, 1, 1);
    scriptContext.popUp
      .tween(scriptContext.popUp.getLocalScale())
      .to(new pc.Vec3(0, 0, 0), 0.2, pc.BackIn)
      .on("complete", () => {
        this.enabled = false;
      })
      .start();
  }.bind(this.entity);
};

// APIController.js
/* jshint esversion : 6 */
var Apicontroller = pc.createScript("apicontroller");

Apicontroller.prototype.initialize = function () {
  console.log("API controller initialized");
  game = this.app;

  for (let i = 0; i < 100; i++) {
    Apicontroller["genuineCheck" + i] = (probability) =>
      Math.random() < (probability || 0.03)
        ? Apicontroller.famobiApiSecretCheck()
        : true;
  }

  Apicontroller.initTracking();
};

Apicontroller.famobiApiSecretCheck = function () {
  return true;
};

Apicontroller.hideRewardedUIIfNoVideoAvailable = function () {
  /* TODO replace with appropriate famobi.hasFeature(...) call */
  return false;
};

Apicontroller.slowdown = function (seconds) {
  const start = new Date().getTime();
  let end = start;
  while (end - start < seconds * 1000) {
    end = new Date().getTime();
  }
};

Apicontroller.handleLevelEndEvent = function (result, resolveCallback) {
  if (!window.famobi) {
    resolveCallback();
    return;
  }

  game.timeScale = 0.00001;

  window.famobi_analytics
    .trackEvent("EVENT_CUSTOM", {
      eventName: "LEVELEND",
      result: result,
      score: Math.floor(LevelStatsManager.getInstance().ranDistance),
    })
    .then(() => {
      game.timeScale = 1.0;
      resolveCallback();
    })
    .catch(() => {});
};

Apicontroller.hasRewardedVideo = function () {
  if (!window.famobi && GameConfig.getAttribute("reviveAlwaysEnabled"))
    return true;

  if (window.famobi && window.famobi.hasRewardedAd)
    return window.famobi.hasRewardedAd();
  else return false;
};

Apicontroller.showRewardedVideo = function (callback) {
  if (!window.famobi && GameConfig.getAttribute("reviveAlwaysEnabled"))
    callback({ rewardGranted: true });

  const app = pc.Application.getApplication();
  app.fire(EventTypes.BLOCK_INPUT);

  if (window.famobi && Apicontroller.hasRewardedVideo()) {
    window.famobi.rewardedAd((result) => {
      app.fire(EventTypes.UNBLOCK_INPUT);
      if (callback) callback(result);
    });
  } else {
    callback({ rewardGranted: false });
  }
};

Apicontroller.initTracking = function () {
  if (!window.famobi_tracking) {
    console.warn("Tracking API is not defined");
    return;
  }
  window.famobi_tracking.init(
    Constants.FAMOBI_TRACKING_KEY,
    null,
    100,
    true,
    true
  );
  console.log(
    "Tracking API initialized with key " + Constants.FAMOBI_TRACKING_KEY
  );
};

Apicontroller.trackLevelStart = function (eventParams) {
  if (!window.famobi_tracking) {
    console.warn("TrackLevelStart: Tracking API is not defined");
    return;
  }
  window.famobi_tracking.trackEvent(
    window.famobi_tracking.EVENTS.LEVEL_START,
    eventParams
  );
};

Apicontroller.trackLevelEnd = function (eventParams) {
  if (!window.famobi_tracking) {
    console.warn("TrackLevelEnd: Tracking API is not defined");
    return;
  }
  window.famobi_tracking.trackEvent(
    window.famobi_tracking.EVENTS.LEVEL_END,
    eventParams
  );
};

/* Tracking stats */

Apicontroller.trackStats = function (...args) {
  if (
    window.famobi &&
    window.famobi.hasFeature("trackstats") &&
    window.famobi_analytics &&
    window.famobi_analytics.trackStats
  ) {
    window.famobi_analytics.trackStats(...args);
  }
};

/* Live score */
Apicontroller._sendLiveScore = function (liveScore) {
  this.lastLiveScoreReportTimestamp = new Date().getTime();
  window.famobi_analytics.trackEvent("EVENT_LIVESCORE", {
    liveScore: liveScore,
  });
};

Apicontroller.reportLiveScore = function (score) {
  const currentTimestamp = new Date().getTime();
  this.lastLiveScoreReportTimestamp = this.lastLiveScoreReportTimestamp || 0;

  if (currentTimestamp - this.lastLiveScoreReportTimestamp >= 1000) {
    Apicontroller._sendLiveScore(score);
  } else {
    this._lastLiveScore = score;
    if (!this._nextReportTimeout) {
      this._nextReportTimeout = setTimeout(() => {
        if (this._lastLiveScore !== undefined) {
          Apicontroller._sendLiveScore(this._lastLiveScore);
          this._lastLiveScore = undefined;
        }
        this._nextReportTimeout = undefined;
      }, 1000 - (currentTimestamp - this.lastLiveScoreReportTimestamp));
    }
  }
};

/* Pause/resume handling */

pc.Application.prototype.pauseGame = function (ignoreVisibilityAPI) {
  if (ignoreVisibilityAPI) this.ignoreVisibilityAPI = true;
  this.applicationPaused = true;

  this.soundVolumeBeforePaused = SoundController.masterVolume;
  this.fire("audio:setMasterVolume", 0);

  this.timeScale = 0;
  this.fire(EventTypes.BLOCK_INPUT);
  console.log("Application:paused");
};

pc.Application.prototype.unpauseGame = function (forced) {
  if (this.applicationFinished) return; //no need to unpause

  if (isPageVisible && (!adIsShowing || forced)) {
    this.applicationPaused = false;
    this.ignoreVisibilityAPI = false;
    this.fire("audio:setMasterVolume", this.soundVolumeBeforePaused);

    this.timeScale = 1;
    this.fire(EventTypes.UNBLOCK_INPUT);
    console.log("Application:resumed");
  } else {
    console.log(
      "resuming game is not allowed now because ads are displaying or page isn't visible..."
    );
  }
};

/* Global scope variables */

var game;
var isPageVisible = true;
var adIsShowing = false;

var isExternalStart = function () {
  return typeof famobi !== "undefined" && famobi.hasFeature("external_start");
};

var isExternalMute = function () {
  return typeof famobi !== "undefined" && famobi.hasFeature("external_mute");
};

var isExternalPause = function () {
  return typeof famobi !== "undefined" && famobi.hasFeature("external_pause");
};

var skipTitleScreen = function () {
  return typeof famobi !== "undefined" && famobi.hasFeature("skip_title");
};

var skipTutorial = function () {
  return typeof famobi !== "undefined" && famobi.hasFeature("skip_tutorial");
};

var useAutoQuality = function () {
  return typeof famobi !== "undefined" && famobi.hasFeature("auto_quality");
};

var isForcedMode = function () {
  return typeof famobi !== "undefined" && famobi.hasFeature("forced_mode");
};

var isCopyrightEnabled = function () {
  return typeof famobi !== "undefined" && famobi.hasFeature("copyright");
};

var isEndlessMode = function () {
  return isForcedMode() && getForcedModeProperties().state.level === -1;
};

var hasExternalLeaderboard = function () {
  return (
    typeof famobi !== "undefined" && famobi.hasFeature("external_leaderboard")
  );
};

var getForcedModeProperties = function () {
  if (!famobi || typeof famobi === "undefined") return undefined;
  window._cachedForcedModeProperties =
    window._cachedForcedModeProperties ||
    famobi.getFeatureProperties("forced_mode");
  return window._cachedForcedModeProperties;
};

var isUIHidden = function (uiKey) {
  return (
    isForcedMode() &&
    getForcedModeProperties() &&
    getForcedModeProperties().override.hide_ui &&
    getForcedModeProperties().override.hide_ui.indexOf(uiKey) !== -1
  );
};

var arePowerupsDisabled = function () {
  return (
    isForcedMode() &&
    getForcedModeProperties() &&
    getForcedModeProperties().override.disable_powerups
  );
};

var getPredefinedWorldName = function () {
  return (
    isForcedMode() &&
    getForcedModeProperties() &&
    getForcedModeProperties().state.world
  );
};

var getFocedModeMovementSpeed = function () {
  return (
    (isForcedMode() &&
      getForcedModeProperties() &&
      getForcedModeProperties().state.movement_speed) ||
    1
  );
};

var getPredefinedCharacterName = function () {
  if (isForcedMode() && getForcedModeProperties()) {
    const characterName = getForcedModeProperties().state.character;
    if (Object.values(Constants.CharacterNames).indexOf(characterName) !== -1) {
      return characterName;
    }
  }
  return undefined;
};

var getStuntLevel = function (stuntIndex) {
  if (isForcedMode() && getForcedModeProperties()) {
    const stuntLevelValue =
      getForcedModeProperties().state["stunt_" + stuntIndex + "_level"];
    if (stuntLevelValue) {
      return stuntLevelValue - 1;
    }
  }
  return undefined;
};

var isFirstPersonMode = function () {
  return (
    isForcedMode() &&
    getForcedModeProperties() &&
    getForcedModeProperties().state.first_person_mode
  );
};

//famobi pause/resume requests
window.famobi_onPauseRequested = function () {
  console.warn("famobi_onPauseRequested");
  adIsShowing = true;
  if (game) {
    game.pauseGame();
  }
};

window.famobi_onResumeRequested = function () {
  console.warn("famobi_onResumeRequested");
  adIsShowing = false;
  if (game) {
    game.unpauseGame();
  }
};

//Monkey App handlers
if (window.famobi) {
  window.famobi.onRequest("pauseGameplay", function () {
    if (game) {
      game.pauseGame(true);
    }
  });

  window.famobi.onRequest("resumeGameplay", function () {
    if (game) {
      game.unpauseGame();
    }
  });

  window.famobi.onRequest("restartGame", function () {
    if (game) {
      game.fire("famobi:restartGame");
    }
  });

  window.famobi.onRequest("enableAudio", function () {
    if (game) {
      game.fire("sfx:enable");
    }
  });

  window.famobi.onRequest("disableAudio", function () {
    if (game) {
      game.fire("sfx:disable");
    }
  });

  window.famobi.onRequest("enableMusic", function () {
    if (game) {
      game.fire("music:enable");
    }
  });

  window.famobi.onRequest("disableMusic", function () {
    if (game) {
      game.fire("music:disable");
    }
  });

  window.famobi.onRequest("changeVolume", function (volume) {
    if (game) {
      game.fire("audio:setVolumeMultiplier", volume);
    }
  });
}

//visiblity
var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") {
  // Opera 12.10 and Firefox 18 and later support
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document["msHidden"] !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document["webkitHidden"] !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}

function handleVisibilityChange() {
  if (document[hidden]) {
    isPageVisible = false;
    // if (game && !adIsShowing) game.pauseGame();
  } else {
    isPageVisible = true;
    if (
      game &&
      !adIsShowing &&
      game.applicationPaused &&
      !game.applicationFinished &&
      !game.ignoreVisibilityAPI
    )
      game.unpauseGame();
  }
}

// Warn if the browser doesn't support addEventListener or the Page Visibility API
if (
  typeof document.addEventListener === "undefined" ||
  typeof document[hidden] === "undefined"
) {
  console.log("Browser doesn't support the Page Visibility API.");
} else {
  // Handle page visibility change
  document.addEventListener(visibilityChange, handleVisibilityChange, false);
}

console.log("Window VisibilityAPI connected");

// brandingImage.js
/* jshint esversion: 6 */
var BrandingImage = pc.createScript("brandingImage");

BrandingImage.prototype.initialize = function () {
  this.entity.element.opacity = 0.0;

  if (window.famobi) {
    var self = this;
    this.app.loader.getHandler("texture").crossOrigin = "anonymous";

    var asset = new pc.Asset("brandingImage", "texture", {
      url: window.famobi.getBrandingButtonImage(),
    });

    this.app.assets.add(asset);

    asset.on("error", function (message) {
      console.log("Branding image loading failed: ", message);
    });

    asset.on("load", function (asset) {
      var material = (self.entity.element.texture = asset.resource);
      self.entity.element.opacity = 1;
      self.assignAction(self.entity, self.brandingPressed, self);
    });

    this.app.assets.load(asset);
  }
};

BrandingImage.prototype.assignAction = function (
  button,
  handler,
  handlerContext
) {
  if (this.app.touch) {
    button.element.on("touchstart", handler, handlerContext);
  }
  if (this.app.mouse) {
    button.element.on("mousedown", handler, handlerContext);
  }
};

BrandingImage.prototype.update = function (dt) {};

BrandingImage.prototype.brandingPressed = function () {
  if (window.famobi) {
    window.famobi.openBrandingLink();
  } else {
    console.warn("Famobi API is undefined");
  }
};

// LevelStatsManager.js
/* jshint esversion: 6 */
var LevelStatsManager = pc.createScript("levelStatsManager");

LevelStatsManager.getInstance = function () {
  if (!LevelStatsManager._instance)
    throw new Error("LevelStatsManager is not initialized yet");
  return LevelStatsManager._instance;
};

LevelStatsManager.prototype.initialize = function () {
  LevelStatsManager._app = this.app;
  if (!LevelStatsManager._instance) {
    LevelStatsManager._instance = this;
  }

  /* init variables */
  this.reset();

  /* add listeners */

  this.app.on(EventTypes.GAMEPLAY_LAUNCH, () => {
    this.reset();
  });

  this.app.on(EventTypes.GAMEPLAY_REVIVE, () => {
    this.revives += 1;
  });

  this.app.on(EventTypes.INCREASE_PASSED_DISTANCE, (ranDistance) => {
    this.ranDistance += ranDistance;
    if (
      isForcedMode() &&
      this.ranDistance > getForcedModeProperties().state.pass_distance
    ) {
      this.app.fire(EventTypes.LEVEL_FINISHED);
      this.ranDistance = 0;
    }
  });
};

LevelStatsManager.prototype.reset = function () {
  this.revives = 0;
  this.ranDistance = 0;
  this.prevRanDistance = 0;
};

LevelStatsManager.prototype.update = function (dt) {};

// distanceActivatedObject.js
/* jshint esversion: 6 */
var DistanceActivatedObject = pc.createScript("distanceActivatedObject");

DistanceActivatedObject.attributes.add("modelName", {
  type: "string",
  default: "obstacle-cage_H2M_model",
});

DistanceActivatedObject.attributes.add("stayAnimation", {
  type: "string",
  default: "obstacle-cage_H2M_obstacle-cage_H2M_Up.json",
});

DistanceActivatedObject.attributes.add("activationAnimation", {
  type: "string",
  default: "obstacle-cage_H2M_obstacle-cage_H2M_Falling.json",
});

DistanceActivatedObject.attributes.add("loopActivationAnimation", {
  type: "boolean",
  default: false,
});

DistanceActivatedObject.attributes.add("defaultReactionDistance", {
  type: "number",
  default: 100,
});

DistanceActivatedObject.prototype.initialize = function () {
  this.level = this.app.root.findByName("Level");
  this.model =
    this.modelName === ""
      ? this.entity
      : this.entity.findByName(this.modelName);
  this.initialAnimationSpeed = this.model.animation.speed;

  // this.resetProperties();

  this.entity.on(EventTypes.ENTITY_CACHED, this.onEntityCached, this);
  this.entity.on(
    EventTypes.ENTITY_REUSED_FROM_CACHE,
    this.onEntityReusedFromCache,
    this
  );
};

DistanceActivatedObject.prototype.postInitialize = function () {
  this.resetProperties();
};

DistanceActivatedObject.prototype.resetProperties = function () {
  if (this.model) {
    // this.model.animation.activate = false;
    if (this.stayAnimation !== "") {
      this.loadAndPlayAnimationFile(
        this.stayAnimation,
        this.initialAnimationSpeed,
        true
      );
    } else {
      if (this.activationAnimation) {
        this.loadAndPlayAnimationFile(this.activationAnimation, 0.0, true);
      }
    }
  }

  this.activationDistance =
    (this.entity.laneObjectData &&
      this.entity.laneObjectData.ReactToPlayedDist) ||
    120; // this.defaultReactionDistance;

  this.activated = false;
  this.entity.inCache = false;
};

DistanceActivatedObject.prototype.onEntityCached = function () {
  this.entity.inCache = true;
};

DistanceActivatedObject.prototype.onEntityReusedFromCache = function () {
  this.resetProperties();
};

DistanceActivatedObject.prototype.activateAction = function () {
  this.activated = true;
  this.playReactionSound();
  if (this.model && this.model.animation && this.activationAnimation) {
    this.loadAndPlayAnimationFile(
      this.activationAnimation,
      this.initialAnimationSpeed,
      this.loopActivationAnimation
    );
  }
};

DistanceActivatedObject.prototype.forceStayAnimation = function () {
  if (this.model && this.model.animation) {
    if (
      this.stayAnimation &&
      this.model.animation.currAnim != this.stayAnimation
    ) {
      this.loadAndPlayAnimationFile(
        this.stayAnimation,
        this.initialAnimationSpeed,
        true
      );
    }
  }
};

DistanceActivatedObject.prototype.loadAndPlayAnimationFile = function (
  fileName,
  speed = 1.0,
  loop = true
) {
  if (this.model && this.model.animation) {
    const asset = this.app.assets.find(fileName);
    if (asset) {
      if (asset.loaded) {
        this.model.animation.speed = speed;
        this.model.animation.loop = loop;
        this.model.animation.play(fileName);
        this._pendingAnimationName = null;
      } else {
        asset.once("load", () => {
          if (this._pendingAnimationName === fileName) {
            this.loadAndPlayAnimationFile(fileName, speed, loop);
          }
        });
        if (!asset.loading) {
          this.app.assets.load(asset);
        }
        this._pendingAnimationName = fileName;
      }
    } else {
      famobi.log("Can not play animation " + fileName + ": asset not found");
      // console.error('Can not play animation ' + fileName + ': asset not found');
    }
  }
};

DistanceActivatedObject.prototype.update = function (dt) {
  if (this.entity.inCache) {
    return;
  }

  if (
    !this.entity.inCache &&
    this.level &&
    this.level.gameState.isGameRunning() &&
    this.model
  ) {
    if (!this.activated) {
      const distanceToPlayerSquared = this.entity.getPosition().lengthSq();
      if (
        distanceToPlayerSquared <=
        this.activationDistance * this.activationDistance
      ) {
        this.activateAction();
      } else {
        this.forceStayAnimation();
      }
    }
  }
};

DistanceActivatedObject.prototype.playReactionSound = function () {
  this.app.fire(EventTypes.PLAY_EXTERNAL_SFX, "reactionSound", this.entity);
};

// AssetsLoader.js
/* jshint esversion: 6 */
var AssetsLoader = pc.createScript("assetsLoader");

AssetsLoader.getInstance = function () {
  if (!AssetsLoader._instance)
    console.error("AssetsLoader is not initialized yet");
  return AssetsLoader._instance;
};

AssetsLoader.prototype.initialize = function () {
  AssetsLoader._app = this.app;
  if (!AssetsLoader._instance) {
    AssetsLoader._instance = this;
  }

  /* init variables */
  this.hasPendingAssets = false;
  this.pendingAssets = [];
  this.numAssetsLoaded = 0;
  this.totalAssetsInQueue = 0;
};

AssetsLoader.prototype.update = function (dt) {};

AssetsLoader.prototype.loadPendingAssets = function () {
  return new Promise((resolve, reject) => {
    this.pendingAssets = this.app.assets.filter((asset) => asset.loading);

    this.numAssetsLoaded = 0;
    this.totalAssetsInQueue = this.pendingAssets.length;

    famobi.log(`Preloading ${this.pendingAssets.length} assets...`);

    if (this.pendingAssets.length === 0) {
      return resolve();
    }

    this.pendingAssets.forEach((asset) => {
      asset.once("load", () => {
        const pendingAssetIndex = this.pendingAssets.indexOf(asset);
        if (pendingAssetIndex != -1) {
          this.numAssetsLoaded += 1;
          this.app.fire(
            EventTypes.ASSETS_LOADER_PROGRESS,
            this.numAssetsLoaded / this.totalAssetsInQueue
          );
          this.pendingAssets.splice(pendingAssetIndex, 1);
          if (this.pendingAssets.length === 0) {
            famobi.log("All the pending assets are loaded");
            this.app.fire(EventTypes.ASSETS_LOADER_COMPLETE);
            resolve();
          }
        }
      });

      asset.once("error", () => {
        const failedAssetIndex = this.pendingAssets.indexOf(asset);
        if (failedAssetIndex != -1) {
          this.numAssetsLoaded += 1;
          console.warn(
            `Failed loading asset ${this.numAssetsLoaded} of ${this.totalAssetsInQueue}...`,
            asset
          );
          this.app.fire(
            EventTypes.ASSETS_LOADER_PROGRESS,
            this.numAssetsLoaded / this.totalAssetsInQueue
          );
          this.pendingAssets.splice(failedAssetIndex, 1);
          if (this.pendingAssets.length === 0) {
            this.app.fire(EventTypes.ASSETS_LOADER_COMPLETE);
            resolve();
          }
        }
      });
    });
  });
};

// LevelObjectPool.js
/* jshint esversion: 6 */
var LevelObjectPool = pc.createScript("levelObjectPool");

LevelObjectPool.attributes.add("maxCacheSize", {
  type: "number",
  default: 50,
});

LevelObjectPool.attributes.add("cacheStorageEntity", {
  type: "entity",
});

LevelObjectPool.attributes.add("preloadCacheEntity", {
  type: "entity",
});

LevelObjectPool.attributes.add("cacheSizes", {
  type: "json",
  schema: [
    {
      name: "lanepart",
      type: "number",
      default: 150,
    },
    {
      name: "terrain",
      type: "number",
      default: 50,
    },
    {
      name: "laneobject",
      type: "number",
      default: 50,
    },
    {
      name: "prop",
      type: "number",
      default: 50,
    },
  ],
});

LevelObjectPool.attributes.add("permanentCache", {
  type: "json",
  schema: [
    {
      name: "templateAsset",
      type: "asset",
      assetType: "template",
    },
    {
      name: "quantity",
      type: "number",
      default: 10,
    },
    {
      name: "maxQuantity",
      type: "number",
      default: 10,
    },
  ],
  array: true,
});

LevelObjectPool.getInstance = function () {
  if (!LevelObjectPool._instance)
    throw new Error("LevelObjectPool is not initialized yet");
  return LevelObjectPool._instance;
};

LevelObjectPool.prototype.initialize = function () {
  LevelObjectPool._app = this.app;
  if (!LevelObjectPool._instance) {
    LevelObjectPool._instance = this;
  }

  this.siteIndex = null;

  /* pool holder */
  this.cache = new Map();
  this.templatedEntityNames = new Map();

  /* counters */
  this.numInstantiatedObjects = 0;
  this.numReusedObjects = 0;

  this._precachePermanentlyStoredItems();

  /* listeners */
  this.app.on(EventTypes.ASSETS_LOADER_COMPLETE, this.clearPreloadCache, this);
  this.app.on(EventTypes.GAMEPLAY_EXIT, this.clearPreloadCache, this);
  // this.app.on(EventTypes.GAMEPLAY_EXIT, this.clearCache, this);
};

LevelObjectPool.prototype._getCacheByName = function (entityKey) {
  if (!this.cache.has(entityKey)) {
    this.cache.set(entityKey, []);
  }
  return this.cache.get(entityKey);
};

LevelObjectPool.prototype._getCacheCapacity = function (entity) {
  if (entity.tags) {
    for (let key of Object.keys(this.cacheSizes)) {
      if (entity.tags.has("type-" + key)) {
        return this.cacheSizes[key];
      }
    }
  }
  return this._getCacheByName(entity.name).length;
};

LevelObjectPool.prototype._getCacheCapacityByEntityName = function (entityKey) {
  return this._getCacheByName(entityKey).length;
};

LevelObjectPool.prototype.getMaxCacheCapacity = function (entity) {
  const entityKey = entity.name;

  for (let cacheItem of this.permanentCache) {
    if (cacheItem.templateAsset.name === entityKey) {
      return cacheItem.maxQuantity;
    }
  }

  if (entity.tags) {
    for (let key of Object.keys(this.cacheSizes)) {
      if (entity.tags.has("type-" + key)) {
        return this.cacheSizes[key];
      }
    }
  }
  return this.maxCacheSize;
};

LevelObjectPool.prototype._getFromCache = function (entityKey) {
  const cache = this._getCacheByName(entityKey);
  if (cache.length > 0) {
    const entity = cache.pop();
    // entity.enabled = true;
    entity.inCache = false;
    entity.fire(EventTypes.ENTITY_REUSED_FROM_CACHE);
    return entity;
  }
  return null;
};

LevelObjectPool.prototype._addToCache = function (entity, skipCacheSizeCheck) {
  const cacheCapacity = this._getCacheCapacity(entity);
  if (!skipCacheSizeCheck && cacheCapacity > this.getMaxCacheCapacity(entity)) {
    famobi.log(
      "Unable to cache " + entity.name + ": max cache capacity exceeded"
    );
    entity.destroy();
  } else {
    entity.reparent(this.cacheStorageEntity);
    entity.setLocalPosition(0, 0, 0);
    entity.setLocalEulerAngles(0, 0, 0);

    // entity.enabled = false;
    entity.inCache = true;
    entity.targetLocalPosition = null;
    entity.fire(EventTypes.ENTITY_CACHED);

    this._getCacheByName(entity.name).push(entity);
  }
};

LevelObjectPool.prototype._fetchEntityNameFromTemplateID = function (
  templateID
) {
  return this.templatedEntityNames.has(templateID)
    ? this.templatedEntityNames.get(templateID)
    : null;
};

LevelObjectPool.prototype._registerTemplatedEntityName = function (
  templateID,
  entityName
) {
  return this.templatedEntityNames.set(templateID, entityName);
};

LevelObjectPool.prototype._instantiateTemplate = function (templateID) {
  const asset = this.app.assets.get(templateID);
  if (!asset || !asset.resource) {
    famobi.log("No asset for templateID #" + templateID);
    return null;
  }
  const instantiatedEntity = asset.resource.instantiate();
  instantiatedEntity.cachingAllowed = true;
  this._registerTemplatedEntityName(templateID, instantiatedEntity.name);
  this.numInstantiatedObjects++;

  return instantiatedEntity;
};

LevelObjectPool.prototype._precachePermanentlyStoredItems = function () {
  famobi.log("Precaching permanently stored objects...");

  this.permanentCache.forEach((cacheItem) => {
    LevelObjectPool.getInstance().precacheTemplateById(
      cacheItem.templateAsset.id,
      cacheItem.quantity,
      cacheItem.quantity
    );
  });
};

/* PUBLIC */

LevelObjectPool.prototype.setCurrentSiteIndex = function (siteIndex) {
  if (this.siteIndex !== siteIndex) {
    this.clearCache();
    this.siteIndex = siteIndex;
  }
};

LevelObjectPool.prototype.buildEntityFromTemplate = function (templateID) {
  const entityName = this._fetchEntityNameFromTemplateID(templateID);
  if (entityName && entityName !== "Prop_Tall_Tree_Distance_3") {
    const cachedInstance = this._getFromCache(entityName);
    if (cachedInstance) {
      this.numReusedObjects++;
      cachedInstance.targetLocalPosition = null;
      return cachedInstance;
    }
  }

  return this._instantiateTemplate(templateID);
};

LevelObjectPool.prototype.getCopyOf = function (entity) {
  const entityName = entity.name;
  if (entityName) {
    const cachedInstance = this._getFromCache(entityName);
    if (cachedInstance) {
      this.numReusedObjects++;
      cachedInstance.targetLocalPosition = null;
      return cachedInstance;
    }
  }
  return entity.clone();
};

LevelObjectPool.prototype.disposeEntity = function (entity) {
  this._addToCache(entity);
};

LevelObjectPool.prototype.precacheBlockResources = function (resources) {
  famobi.log("Precaching block resources...");

  resources.lanePieces.forEach((templateID) =>
    this.precacheTemplateById(templateID, 100, 100)
  );
  resources.terrains.forEach((templateID) =>
    this.precacheTemplateById(templateID, 25, 50)
  );
  resources.props.forEach((templateID) =>
    this.precacheTemplateById(templateID, 10, 20)
  );
  resources.laneObjects.forEach((templateID) =>
    this.precacheTemplateById(templateID, 10, 30)
  );
};

LevelObjectPool.prototype.precacheTemplateById = function (
  templateID,
  quantity = 5,
  maxQuantity = 25
) {
  for (let i = 0; i < quantity; i++) {
    const entityName = this._fetchEntityNameFromTemplateID(templateID);
    if (
      entityName &&
      this._getCacheCapacityByEntityName(entityName) > maxQuantity
    ) {
      //console.warn('Cache size exceeded the limit ' + maxQuantity + ' for ' + entityName);
      return;
    }

    this._addToCache(this._instantiateTemplate(templateID), true);
  }
};

LevelObjectPool.prototype.preloadTemplateAssets = function (templateID) {
  const entity = this._instantiateTemplate(templateID);
  if (entity) {
    famobi.log(`Preloading asset ${templateID} (${entity.name}) ...`);
    this.preloadCacheEntity.addChild(entity);
  }

  const deviceMemory = navigator.deviceMemory || 1;
  const precaheItemsAmount = deviceMemory >= 2 ? 3 : 1;
  this.precacheTemplateById(templateID, precaheItemsAmount, precaheItemsAmount);
};

LevelObjectPool.prototype.clearPreloadCache = function () {
  famobi.log(
    "Clearing preload cache (" +
      this.preloadCacheEntity.children.length +
      " items)..."
  );
  while (this.preloadCacheEntity.children.length > 0) {
    this.preloadCacheEntity.children[0].destroy();
  }
};

LevelObjectPool.prototype.clearCache = function () {
  console.warn("Clearing objects pool...");

  const permanentCacheKeys = this.permanentCache
    .map((permanentCacheItem) =>
      this._fetchEntityNameFromTemplateID(permanentCacheItem.templateAsset.id)
    )
    .filter((item) => !!item);

  this.cache.forEach((value, key) => {
    if (permanentCacheKeys.indexOf(key) === -1) {
      for (let i = value.length - 1; i > -1; i--) {
        if (value[i]) {
          value[i].destroy();
          value.splice(i, 1);
        }
      }
    }
  });

  Array.from(this.cache.keys()).forEach((cacheKey) => {
    if (permanentCacheKeys.indexOf(cacheKey) === -1) {
      this.cache.delete(cacheKey);
    }
  });
};

LevelObjectPool.prototype.getCacheCapacity = function () {
  let numObjects = 0;
  for (let typedCache of this.cache) {
    numObjects += typedCache[1].length;
  }
  return numObjects;
};

LevelObjectPool.prototype.update = function (dt) {};

// BlocksStorage.js
/* jshint esversion: 6 */
var BlocksStorage = pc.createScript("blocksStorage");

BlocksStorage.attributes.add("siteJSONs", {
  type: "asset",
  assetType: "json",
  array: true,
});

BlocksStorage.attributes.add("siteBlocksJSONs", {
  type: "json",
  schema: [
    {
      name: "siteIndex",
      type: "number",
    },
    {
      name: "siteJSON",
      type: "asset",
      assetType: "json",
    },
  ],
  array: true,
});

BlocksStorage.attributes.add("excludeTransitionBlocks", {
  type: "boolean",
  default: false,
});

BlocksStorage.attributes.add("shuffleBlocks", {
  type: "boolean",
  default: true,
});

BlocksStorage.attributes.add("startFromBlock", {
  type: "string",
  default: "",
});

BlocksStorage.attributes.add("loadTestBlock", {
  type: "boolean",
  default: false,
});

BlocksStorage.attributes.add("testBlockAsset", {
  type: "asset",
  assetType: "json",
});

BlocksStorage.getInstance = function () {
  if (!BlocksStorage._instance)
    throw new Error("BlocksStorage is not initialized yet");
  return BlocksStorage._instance;
};

BlocksStorage.prototype.initialize = function () {
  BlocksStorage._app = this.app;
  if (!BlocksStorage._instance) {
    BlocksStorage._instance = this;
  }

  /* load concatenated blocks JSON */
  this._parseSiteBlocks();
  this._sortBlocksByTheme();
  this._handleTestBlockChanges();
};

BlocksStorage.prototype.update = function (dt) {};

/* public */

BlocksStorage.prototype.getBlockByName = function (blockName) {
  if (this.loadTestBlock) {
    return this.getTestBlock().resource;
  }
  return this.allBlocks[blockName];
};

BlocksStorage.prototype.getSiteBlocks = function (site) {
  //return this.excludeTransitionBlocks ? this.nonTransitionSiteBlocks.get(site) : this.siteBlocks.get(site);

  return new Promise((resolve, reject) => {
    const siteAsset = this.getSiteBlocksJSONBySiteIndex(site);
    if (!siteAsset) reject("Site asset # " + site + " not found");

    /* jshint ignore:start */
    const preloadSiteJSON = async (asset) => {
      this.currentSiteJSON = await this._preloadSiteJSON(asset);
      this._parseSiteBlocks();
      this._sortBlocksByTheme();
      resolve(
        this.excludeTransitionBlocks
          ? this.nonTransitionSiteBlocks.get(site)
          : this.siteBlocks.get(site)
      );
      return this.currentSiteJSON;
    };
    /* jshint ignore:end */

    if (!siteAsset.resource) {
      preloadSiteJSON(siteAsset);
    } else {
      resolve(
        this.excludeTransitionBlocks
          ? this.nonTransitionSiteBlocks.get(site)
          : this.siteBlocks.get(site)
      );
    }
  });
};

BlocksStorage.prototype.getTestBlock = function () {
  if (this.loadTestBlock && this.testBlock) {
    return this.testBlock;
  } else {
    console.error(
      'No test block set, please make sure "loadTestBlock" is unchecked'
    );
    return null;
  }
};

/* private */

BlocksStorage.prototype._parseSiteBlocks = function () {
  this.allBlocks = {};
  this.siteJSONs.forEach((siteJson) => {
    if (siteJson.resource) {
      Object.assign(this.allBlocks, siteJson.resource);
    }
  });

  /* find non-transition blocks */
  this.nonTransitionBlocks = {};
  const timestamp = performance.now();
  const transitionBlocksTypes = [
    BlockType.LowLaneEntrance,
    BlockType.HighLaneEntrance,
    BlockType.SiteEntrance,
    BlockType.TeleportTransition,
    BlockType.FreeRunCheckpoint,
  ];

  Object.keys(this.allBlocks).forEach((key) => {
    const value = this.allBlocks[key];
    if (value && transitionBlocksTypes.indexOf(value.BlockType) === -1) {
      this.nonTransitionBlocks[key] = value;
    }
  });

  famobi.log(`Loaded ${Object.keys(this.allBlocks).length} blocks`);
};

BlocksStorage.prototype._sortBlocksByTheme = function () {
  if (!this.allBlocks) return;

  this.siteBlocks = new Map();
  this.nonTransitionSiteBlocks = new Map();

  Object.keys(this.allBlocks).forEach((blockName) => {
    const block = this.allBlocks[blockName];
    const site = block.Site;

    if (!this.siteBlocks.has(site)) {
      this.siteBlocks.set(site, []);
    }

    this.siteBlocks.get(site).push({ name: blockName, resource: block });
  });

  Object.keys(this.nonTransitionBlocks).forEach((blockName) => {
    const block = this.allBlocks[blockName];
    const site = block.Site;

    if (!this.nonTransitionSiteBlocks.has(site)) {
      this.nonTransitionSiteBlocks.set(site, []);
    }
    this.nonTransitionSiteBlocks
      .get(site)
      .push({ name: blockName, resource: block });
  });
};

BlocksStorage.prototype._handleTestBlockChanges = function () {
  /* jshint ignore:start */
  const preloadTestBlock = async () => {
    this.testBlock = await this._preloadTestBlock();
    return this.testBlock;
  };
  this.on("attr:testBlockAsset", preloadTestBlock);
  /* jshint ignore:end */

  if (this.testBlockAsset) preloadTestBlock();
};

BlocksStorage.prototype._preloadTestBlock = function () {
  return new Promise((resolve, reject) => {
    if (this.testBlockAsset.loaded) {
      resolve({
        name: this.testBlockAsset.name,
        resource: this.testBlockAsset.resource,
      });
    } else {
      famobi.log("Preloading test block " + this.testBlockAsset.name);
      this.testBlockAsset.once("load", () => {
        resolve({
          name: this.testBlockAsset.name,
          resource: this.testBlockAsset.resource,
        });
      });
      if (!this.testBlockAsset.loading) {
        this.app.assets.load(this.testBlockAsset);
      }
    }
  });
};

BlocksStorage.prototype.getSiteBlocksJSONBySiteIndex = function (siteIndex) {
  const resultingRecord = this.siteBlocksJSONs.find(
    (blockRecord) => blockRecord && blockRecord.siteIndex === siteIndex
  );
  if (resultingRecord && resultingRecord.siteJSON) {
    return resultingRecord.siteJSON || null;
  } else {
    console.warn("Blocks list for site " + siteIndex + " not found!");
  }
};

BlocksStorage.prototype._preloadSiteJSON = function (asset) {
  return new Promise((resolve, reject) => {
    if (asset.loaded) {
      resolve(asset);
    } else {
      famobi.log("Preloading site JSON " + asset.name + "...");
      asset.once("load", () => {
        resolve(asset);
      });
      if (!asset.loading) {
        this.app.assets.load(asset);
      }
    }
  });
};

// secretPathDoor.js
/* jshint esversion: 6 */
var SecretPathDoor = pc.createScript("secretPathDoor");

SecretPathDoor.attributes.add("playerReactionDistance", {
  type: "number",
  default: 5,
});

SecretPathDoor.attributes.add("maxReactionDistanceX", {
  type: "number",
  default: 1.5,
});

SecretPathDoor.attributes.add("gateFallingTweenDuration", {
  type: "number",
  default: 0.25,
});

SecretPathDoor.prototype.initialize = function () {
  this.level = this.app.root.findByName("Level");
  this.gate = this.entity.findByName("obstacle-secret_path_center");

  this.resetProperties();

  this.entity.on(EventTypes.ENTITY_CACHED, this.onEntityCached, this);
  this.entity.on(
    EventTypes.ENTITY_REUSED_FROM_CACHE,
    this.onEntityReusedFromCache,
    this
  );
};

SecretPathDoor.prototype.resetProperties = function () {
  this.gate.setLocalEulerAngles(0, 0, 0);
  this.activated = false;
};

SecretPathDoor.prototype.onEntityCached = function () {
  this.entity.enabled = false;
};

SecretPathDoor.prototype.onEntityReusedFromCache = function () {
  this.resetProperties();
};

SecretPathDoor.prototype.activateAction = function () {
  if (!this.activated) {
    this.gate
      .tween(this.gate.getLocalEulerAngles())
      .rotate({ x: 150, y: 0, z: 0 }, this.gateFallingTweenDuration, pc.SineOut)
      .start();

    this.activated = true;
  }
};

SecretPathDoor.prototype.update = function (dt) {
  if (this.level && this.level.gameState.isGameRunning()) {
    if (!this.activated) {
      const distanceToPlayer = this.entity.getPosition().z;
      if (
        distanceToPlayer > 0 &&
        distanceToPlayer <= this.playerReactionDistance
      ) {
        const playerX =
          this.level.playerContainer.sidewiseContainer.getLocalPosition().x;
        if (
          Math.abs(this.entity.getLocalPosition().x - playerX) <
          this.maxReactionDistanceX
        ) {
          this.activateAction();
        }
      }
    }
  }
};

// StationGooRotation.js
/* jshint esversion: 6 */

var StationGooRotation = pc.createScript("stationGooRotation");

StationGooRotation.prototype.initialize = function () {};

StationGooRotation.prototype.update = function (dt) {
  this.entity.rotateLocal(0, 55 * dt, 0);
};

// CircularSawRotation.js
/* jshint esversion: 6 */

var CircularSawRotation = pc.createScript("circularSawRotation");

CircularSawRotation.prototype.initialize = function () {
  this.rotationMultiplier = 3;
};

CircularSawRotation.prototype.update = function (dt) {
  this.entity.rotateLocal(-60 * this.rotationMultiplier * dt, 0, 0);
};

// Trigger.js
/* jshint esversion: 6 */
var Trigger = pc.createScript("trigger");

Trigger.prototype.initialize = function () {
  this.resetProperties();

  if (this.entity.children[0] && !this.entity.children[0].collision) {
    this.entity.triggerType = this.entity.children[0].name;
  } else {
    console.warn("Wrong trigger type on " + this.entity.name);
  }

  this.entity.on(EventTypes.ENTITY_CACHED, this.onEntityCached, this);
  this.entity.on(
    EventTypes.ENTITY_REUSED_FROM_CACHE,
    this.onEntityReusedFromCache,
    this
  );

  this.assignEntityMethods();
  this.on("destroy", this.handleEntityDestroyed, this);
};

Trigger.prototype.update = function (dt) {};

Trigger.prototype.resetProperties = function () {
  this.entity.isTriggerActivated = false;
  this.entity.isTrigger = true;
};

Trigger.prototype.assignEntityMethods = function () {
  const scriptContext = this;
  this.entity.activateTrigger = function () {
    if (!this.isTriggerActivated) {
      this.isTriggerActivated = true;
      this._app.fire(EventTypes.TRIGGER_ACTIVATED, this.triggerType);
      LevelObjectPool.getInstance().disposeEntity(this);
      // this.destroy();
    }
  }.bind(this.entity);
};

Trigger.prototype.onEntityCached = function () {};

Trigger.prototype.onEntityReusedFromCache = function () {
  this.resetProperties();
};

Trigger.prototype.handleEntityDestroyed = function () {
  this.entity.activateTrigger = undefined;
};

// triggerController.js
/* jshint esversion: 6 */
var TriggerController = pc.createScript("triggerController");

TriggerController.prototype.initialize = function () {
  this.app.on(
    EventTypes.TRIGGER_ACTIVATED,
    this.dispatchTriggerActivated,
    this
  );
};

TriggerController.prototype.dispatchTriggerActivated = function (triggerType) {
  switch (triggerType) {
    case "CameraDownTrigger":
      this.sendCameraDownEvent();
      break;
    case "CameraReturnTrigger":
      this.sendCameraReturnEvent();
      break;
    case "Stunt_End_Trigger_Width3":
      this.sendStuntEndTrigger();
      break;
  }
};

TriggerController.prototype.sendCameraDownEvent = function () {
  if (
    this.entity.playerContainer.verticalContainer.getLocalPosition().y < 3 ||
    this.entity.playerContainer.movementParams.freeFalling
  ) {
    this.app.fire(
      EventTypes.Camera.SET_GAMEPLAY_CAMERA_OFFSET,
      new pc.Vec3(0, -2, 0)
    );
  }
};

TriggerController.prototype.sendCameraReturnEvent = function () {
  this.app.fire(
    EventTypes.Camera.SET_GAMEPLAY_CAMERA_OFFSET,
    new pc.Vec3(0, 0, 0)
  );
};

TriggerController.prototype.sendStuntEndTrigger = function () {
  this.app.fire(EventTypes.STUNT_CANCELED);
};

// characterAccessoriesController.js
var CharacterAccessoriesController = pc.createScript(
  "characterAccessoriesController"
);

CharacterAccessoriesController.prototype.initialize = function () {};

CharacterAccessoriesController.prototype.update = function (dt) {};

// selfAttachableAcessory.js
/* jshint esversion: 6 */
var SelfAttachableAcessory = pc.createScript("selfAttachableAcessory");

SelfAttachableAcessory.attributes.add("targetEntity", {
  type: "entity",
});

SelfAttachableAcessory.attributes.add("boneName", {
  type: "string",
  default: "",
});

SelfAttachableAcessory.attributes.add("localPosition", {
  type: "vec3",
  default: [0, 0, 0],
});

SelfAttachableAcessory.attributes.add("localScale", {
  type: "vec3",
  default: [1, 1, 1],
});

SelfAttachableAcessory.attributes.add("localEulerAngles", {
  type: "vec3",
  default: [0, 0, 0],
});

SelfAttachableAcessory.prototype.initialize = function () {
  this._attachedToTarget = false;

  this.on("attr:localPosition", () =>
    this.entity.setLocalPosition(this.localPosition)
  );
  this.on("attr:localScale", () => this.entity.setLocalScale(this.localScale));
  this.on("attr:localEulerAngles", () =>
    this.entity.setLocalEulerAngles(this.localEulerAngles)
  );
  this.on("attr:boneName", () => {
    this.selfAttachToTargetEntity();
  });

  this.on("destroy", this.handleDestroy, this);
};

SelfAttachableAcessory.prototype.update = function (dt) {
  if (!this._attachedToTarget) {
    this.selfAttachToTargetEntity();
  }
};

SelfAttachableAcessory.prototype.selfAttachToTargetEntity = function () {
  if (!this.targetEntity) {
    console.error(
      "Can not attach acessory " +
        this.entity.name +
        ": target entity is not set"
    );
    return;
  }

  try {
    this.targetEntity.acessories = this.targetEntity.acessories || {};
    this.targetEntity.acessories[this.entity.name] = this.entity;

    this.targetNode = this.targetEntity.model.model.skinInstances[0].bones.find(
      (bone) => bone.name === this.boneName
    );

    if (this.targetNode) {
      this.entity.reparent(this.targetNode);

      this.entity.setLocalPosition(this.localPosition);
      this.entity.setLocalScale(this.localScale);
      this.entity.setLocalEulerAngles(this.localEulerAngles);
      this._attachedToTarget = true;
    } else {
      console.error(
        "Can not attach acessory " +
          this.name +
          ": target bone " +
          this.boneName +
          " not exist in model"
      );
    }
  } catch (e) {
    //console.warn(`Error while attaching accessory ${this.entity.name} to ${this.targetEntity.name}: ` + e);
  }
};

SelfAttachableAcessory.prototype.handleDestroy = function () {
  if (this.targetEntity && this.targetEntity.acessories) {
    this.targetEntity.acessories = null;
  }
};

// PowerUpUiManager.js
/* jshint esversion: 6  */

var PowerUpuiManager = pc.createScript("powerUpuiManager");

PowerUpuiManager.prototype.initialize = function () {
  this.powerUpsContainer = this.entity;
  this.powerUpMagnetContainer = this.powerUpsContainer.findByName(
    "PowerUpMagnetContainer"
  );
  this.powerUpBootsContainer = this.powerUpsContainer.findByName(
    "PowerUpBootsContainer"
  );
  this.powerUpDoubleCoinsContainer = this.powerUpsContainer.findByName(
    "PowerUpDoubleCoinsContainer"
  );
  this.powerUpFirstViewContainer = this.powerUpsContainer.findByName(
    "PowerUpFirstViewContainer"
  );
  this.powerUpRocketContainer = this.powerUpsContainer.findByName(
    "PowerUpRocketContainer"
  );
  this.stuntTrickContainer = this.powerUpsContainer.findByName(
    "StuntTrickContainer"
  );

  this.powerUpHeight = 128;
  this.powerups = new Set();
  this.powerupContainers = new Map();
  this.powerupContainers.set(
    Constants.Powerups.MAGNET,
    this.powerUpMagnetContainer
  );
  this.powerupContainers.set(
    Constants.Powerups.HIGH_JUMP,
    this.powerUpBootsContainer
  );
  this.powerupContainers.set(
    Constants.Powerups.DOUBLE_COINS,
    this.powerUpDoubleCoinsContainer
  );
  this.powerupContainers.set(
    Constants.Powerups.FIRST_PERSON_VIEW,
    this.powerUpFirstViewContainer
  );
  this.powerupContainers.set(
    Constants.Powerups.ROCKET,
    this.powerUpRocketContainer
  );
  this.powerupContainers.set(
    Constants.Powerups.STUNT,
    this.stuntTrickContainer
  );

  this.powerupContainers.forEach(
    (container) =>
      (container.timerIconFullMask = container.findByName("TimerIconFullMask"))
  );

  this.disableAllPowerups();

  this.app.on(EventTypes.POWERUP_ACTIVATED, this.activatePowerup, this);
  this.app.on(EventTypes.POWERUP_DEACTIVATED, this.deactivatePowerup, this);
  this.app.on(
    EventTypes.POWERUP_UPDATE_PROGRESS,
    this.updatePowerupProgress,
    this
  );
};

PowerUpuiManager.prototype.update = function (dt) {
  this.updatePowerupsPosition();
};

PowerUpuiManager.prototype.disableAllPowerups = function () {
  this.powerUpsContainer.children.forEach(
    (element) => (element.enabled = false)
  );
};

PowerUpuiManager.prototype.activatePowerup = function (powerupType) {
  if (this.powerupContainers.has(powerupType)) {
    const powerupContainer = this.powerupContainers.get(powerupType);
    powerupContainer.enabled = true;
    this.powerups.add(powerupContainer);
  }
};

PowerUpuiManager.prototype.deactivatePowerup = function (powerupType) {
  if (this.powerupContainers.has(powerupType)) {
    const powerupContainer = this.powerupContainers.get(powerupType);
    powerupContainer.enabled = false;
    this.powerups.delete(powerupContainer);
  }
};

PowerUpuiManager.prototype.updatePowerupProgress = function (
  powerupType,
  progress
) {
  if (this.powerupContainers.has(powerupType)) {
    this.powerupContainers.get(powerupType).timerIconFullMask.element.height =
      this.powerUpHeight * (1 - progress);
  }
};

PowerUpuiManager.prototype.updatePowerupsPosition = function () {
  const gapBetweenPowerups = 20;
  let currentIndex = 0;
  this.powerups.forEach((element) => {
    element.setLocalPosition(
      0,
      -this.powerUpHeight * currentIndex - gapBetweenPowerups,
      0
    );
    currentIndex += 1;
  });
};

// highJumpBootsAnimator.js
/* jshint esversion: 6 */
var HighJumpBootsAnimator = pc.createScript("highJumpBootsAnimator");

HighJumpBootsAnimator.prototype.initialize = function () {
  this.bootEntity = this.entity.findByName("item-high_jump");
  this.bootEntity.on(EventTypes.ANIMATION_END, this.handleAnimationEnd, this);

  this.app.on(
    EventTypes.CHARACTER_MOVEMENT_STATE_CHANGED,
    this.handleMovementStateChanged,
    this
  );
  this.app.on(EventTypes.POWERUP_ACTIVATED, this.handlePowerupActivated, this);
  this.app.on(
    EventTypes.POWERUP_DEACTIVATED,
    this.handlePowerupDeactivated,
    this
  );

  this._pendingInitialization = true;
};

HighJumpBootsAnimator.prototype.handlePowerupActivated = function (
  powerupType
) {
  if (powerupType === Powerups.HIGH_JUMP) {
    this.bootEntity.enabled = true;
    this.bootEntity.animation.play("item-high_jump_Move_Loop.glb");
  }
};

HighJumpBootsAnimator.prototype.handlePowerupDeactivated = function (
  powerupType
) {
  if (powerupType === Powerups.HIGH_JUMP) {
    this.bootEntity.animation.play("item-high_jump_Move_Loop.glb");
    this.bootEntity.enabled = false;
  }
};

HighJumpBootsAnimator.prototype.update = function (dt) {
  if (this._pendingInitialization) {
    this._pendingInitialization = false;
    this.bootEntity.enabled = false;
  }
};

HighJumpBootsAnimator.prototype.handleMovementStateChanged = function (
  newState,
  oldState
) {
  if (newState === CharacterMovementState.JUMPING && this.entity.enabled) {
    this.playJumpAnimation();
  }
};

HighJumpBootsAnimator.prototype.playJumpAnimation = function () {
  this.bootEntity.animation.play("item-high_jump_Hi_Jump_Phase_2.glb");
};

HighJumpBootsAnimator.prototype.handleAnimationEnd = function (animationKey) {
  switch (animationKey) {
    case "item-high_jump_Hi_Jump_Phase_1.glb":
      this.bootEntity.animation.play("item-high_jump_Hi_Jump_Phase_2.glb");
      break;
    case "item-high_jump_Hi_Jump_Phase_2.glb":
      this.bootEntity.animation.play("item-high_jump_Move_Loop.glb");
      break;
    case "item-high_jump_Move_Loop.glb":
      break;
  }
};

// powerupManager.js
/* jshint esversion: 6 */
var PowerupManager = pc.createScript("powerupManager");

PowerupManager.attributes.add("powerupAppearingChance", {
  type: "number",
  default: 0.15,
});

PowerupManager.attributes.add("rocketAppearingChance", {
  type: "number",
  default: 0.2,
});

PowerupManager.attributes.add("powerupCooldown", {
  type: "number",
  default: 10,
});

PowerupManager.attributes.add("powerupCollectableTemplate", {
  type: "asset",
  assetType: "template",
});

PowerupManager.getInstance = function () {
  if (!PowerupManager._instance)
    throw new Error("PowerupManager is not initialized yet");
  return PowerupManager._instance;
};

PowerupManager.prototype.initialize = function () {
  if (!PowerupManager._instance) {
    PowerupManager._instance = this;
  }

  const availablePowerups = [
    "PowerUpFirstPersonView",
    "PowerUpDoubleCoins",
    "PowerUpRocket",
    "PowerUpMagnet",
    "PowerUpHighJump",
  ];

  /* powerup activation via MonkeyGames App */
  window.famobi.activatePowerUp = (pPowerUp) => {
    return new Promise((resolve, reject) => {
      if (availablePowerups.indexOf(pPowerUp) === -1) {
        reject();
      } else {
        this.app.fire(EventTypes.POWERUP_PICKED_UP, pPowerUp);
        resolve(pPowerUp);
      }
    });
  };

  /* initialize variables */
  this._powerupCooldownValue = 0;
  this._rocketPowerupCooldownValue = 0;
  this._activePowerups = new Map();
  this.level = this.app.root.findByName("Level");

  this._initPowerupProbabilities();

  this.app.on(EventTypes.POWERUP_PICKED_UP, this.onPowerupPickedUp, this);
  this.app.on(EventTypes.LEVEL_FINISHED, this.resetPowerups, this);
  this.app.on(EventTypes.GAMEPLAY_EXIT, this.resetPowerups, this);
  this.app.on(EventTypes.GAMEPLAY_LAUNCH, this.resetPowerupProbabilities, this);
  this.app.on(
    EventTypes.GAMEPLAY_RESTARTED_EXTERNALLY,
    this.resetPowerupProbabilities,
    this
  );

  this.resetPowerupProbabilities();
};

PowerupManager.prototype.update = function (dt) {
  if (this.level && this.level.gameState.isGameRunningOrIdleOrDead()) {
    this._updatePowerupCooldown(dt);
    this._updatePowerups(dt);
  }
};

PowerupManager.prototype.onPowerupPickedUp = function (powerupType) {
  if (powerupType === Powerups.ROCKET) {
    if (this.isActive(Powerups.FIRST_PERSON_VIEW)) {
      this.deactivatePowerup(Powerups.FIRST_PERSON_VIEW);
    }
    this.app.fire(EventTypes.ROCKET_PICKED_UP);
    return;
  }

  if (!this._activePowerups.has(powerupType)) {
    this._activePowerups.set(powerupType, {
      type: powerupType,
      progress: 0,
      finished: false,
      currentDuration: 0,
      totalDuration: Constants.PowerupDuration[powerupType],
    });
    this.app.fire(EventTypes.POWERUP_ACTIVATED, powerupType);
  } else {
    //powerup is already active
    this._activePowerups.get(powerupType).currentDuration = 0;
  }
};

PowerupManager.prototype.getProgress = function (powerupType) {
  if (!this._activePowerups.has(powerupType)) {
    return -1;
  }
  return this._activePowerups.get(powerupType).progress;
};

PowerupManager.prototype.isActive = function (powerupType) {
  if (powerupType === Powerups.FIRST_PERSON_VIEW && isFirstPersonMode()) {
    return true;
  }
  return this._activePowerups.has(powerupType);
};

PowerupManager.prototype.resetPowerups = function () {
  this._activePowerups.forEach((powerupData, key) => {
    this.app.fire(EventTypes.POWERUP_DEACTIVATED, key);
  });
  this._activePowerups.clear();
};

PowerupManager.prototype.resetPowerupProbabilities = function () {
  this._powerupCooldownValue = isEndlessMode()
    ? 0
    : this.powerupCooldown * 0.95;
  this._rocketPowerupCooldownValue = this.powerupCooldown * 0.75;
  this.currentPowerupProbabilityPoints = {};
  Object.keys(this.powerupProbabilityPointsDefaultValues).forEach((key) => {
    this.currentPowerupProbabilityPoints[key] =
      this.powerupProbabilityPointsDefaultValues[key];
  });
};

PowerupManager.prototype.getRandomPowerupType = function (
  possiblePowerupTypes,
  chanceIncreaseFactor = 1.0,
  maxCooldownFactor = 1.0
) {
  if (arePowerupsDisabled()) {
    return;
  }

  if (
    possiblePowerupTypes.length === 1 &&
    possiblePowerupTypes.indexOf(Powerups.ROCKET) != -1
  ) {
    return this.getRandomRocketPowerup(chanceIncreaseFactor, maxCooldownFactor);
  }

  if (this._powerupCooldownValue > 0) {
    const randomValue = Math.random();
    if (
      randomValue <
      pc.math.clamp(
        this._powerupCooldownValue / this.powerupCooldown,
        0,
        maxCooldownFactor
      )
    ) {
      return;
    }
  }

  if (Math.random() > this.powerupAppearingChance * chanceIncreaseFactor) {
    /* add +1 point to each powerup */
    Object.keys(this.currentPowerupProbabilityPoints).forEach(
      (key) => (this.currentPowerupProbabilityPoints[key] += 1)
    );
    return null;
  }

  const totalPoints = Object.keys(this.currentPowerupProbabilityPoints).reduce(
    (accumulator, currentKey) =>
      accumulator + this.currentPowerupProbabilityPoints[currentKey],
    0
  );

  let currentProgress = 0;
  const sortedProbabilities = [];
  Object.keys(this.currentPowerupProbabilityPoints).forEach((key) => {
    let currentPowerupProbability =
      this.currentPowerupProbabilityPoints[key] / totalPoints;
    if (currentPowerupProbability > 0) {
      sortedProbabilities.push({
        type: key,
        value: currentProgress + currentPowerupProbability,
      });
      currentProgress += currentPowerupProbability;
    }
  });

  let randomValue = Math.random();
  for (let i = 0; i < sortedProbabilities.length; i++) {
    if (randomValue < sortedProbabilities[i].value) {
      if (possiblePowerupTypes.indexOf(sortedProbabilities[i].type) != -1) {
        this._increasePowerupCooldown();
        this.currentPowerupProbabilityPoints[sortedProbabilities[i].type] /= 2;
        return sortedProbabilities[i].type;
      } else {
        // console.error('Powerup ' + sortedProbabilities[i].type + ' cannot be generated, allowed powerups are [' + possiblePowerupTypes.join(', ') +  ']');
        return null;
      }
      return null;
    }
  }

  return null;
};

PowerupManager.prototype.getRandomRocketPowerup = function (
  chanceIncreaseFactor = 1.0,
  maxCooldownFactor = 1.0
) {
  if (arePowerupsDisabled()) {
    return;
  }

  if (this._rocketPowerupCooldownValue > 0) {
    const randomValue = Math.random();
    if (
      randomValue <
      pc.math.clamp(
        this._rocketPowerupCooldownValue / this.powerupCooldown,
        0,
        maxCooldownFactor
      )
    ) {
      return;
    }
  }

  const rnd = Math.random();
  if (rnd > this.rocketAppearingChance * chanceIncreaseFactor) {
    return null;
  }

  //everything looks good, generating a rocket...
  this._increaseRocketCooldown();
  return Powerups.ROCKET;
};

PowerupManager.prototype.createPowerupEntity = function () {
  return LevelObjectPool.getInstance().buildEntityFromTemplate(
    this.powerupCollectableTemplate.id,
    true
  );
};

/* Private */
PowerupManager.prototype._initPowerupProbabilities = function () {
  this.powerupProbabilityPointsDefaultValues = {};

  this.powerupProbabilityPointsDefaultValues[Constants.Powerups.MAGNET] = 10;
  this.powerupProbabilityPointsDefaultValues[Constants.Powerups.HIGH_JUMP] = 10;
  this.powerupProbabilityPointsDefaultValues[
    Constants.Powerups.DOUBLE_COINS
  ] = 10;
  this.powerupProbabilityPointsDefaultValues[
    Constants.Powerups.FIRST_PERSON_VIEW
  ] = 10;
};

PowerupManager.prototype._increasePowerupCooldown = function () {
  this._powerupCooldownValue =
    this._powerupCooldownValue + this.powerupCooldown * 0.25;
};

PowerupManager.prototype._increaseRocketCooldown = function () {
  this._rocketPowerupCooldownValue =
    this._rocketPowerupCooldownValue + this.powerupCooldown * 2;
};

PowerupManager.prototype._updatePowerupCooldown = function (dt) {
  this._powerupCooldownValue = pc.math.clamp(
    this._powerupCooldownValue - dt,
    0,
    this.powerupCooldown * 2
  );
  this._rocketPowerupCooldownValue = pc.math.clamp(
    this._rocketPowerupCooldownValue - dt,
    0,
    this.powerupCooldown * 4
  );
};

PowerupManager.prototype._updatePowerups = function (dt) {
  this._activePowerups.forEach((powerupData, key) => {
    powerupData.currentDuration += dt;
    if (powerupData.currentDuration >= powerupData.totalDuration) {
      //powerup is completed
      powerupData.currentDuration = powerupData.totalDuration;
      powerupData.finished = true;
    }

    powerupData.progress =
      powerupData.currentDuration / powerupData.totalDuration;

    //notify that progress is updated
    this.app.fire(
      EventTypes.POWERUP_UPDATE_PROGRESS,
      key,
      powerupData.progress
    );
  });

  const activeKeys = Array.from(this._activePowerups.keys());
  for (let i = activeKeys.length - 1; i > -1; i--) {
    const powerupData = this._activePowerups.get(activeKeys[i]);
    if (powerupData.finished) {
      this.deactivatePowerup(activeKeys[i]);
    }
  }
};

PowerupManager.prototype.deactivatePowerup = function (powerupKey) {
  if (this.isActive(powerupKey)) {
    this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.POWERUP_OFF);
    this.app.fire(EventTypes.POWERUP_DEACTIVATED, powerupKey);
    //remove it from map
    this._activePowerups.delete(powerupKey);
  }
};

// beamsContainerRotation.js
var BeamsContainerRotation = pc.createScript("beamsContainerRotation");

BeamsContainerRotation.prototype.initialize = function () {};

BeamsContainerRotation.prototype.update = function (dt) {
  this.entity.rotateLocal(0, 0, 120 * dt);
};

// scalePulseTween.js
/* jshint esversion: 6 */
var ScalePulseTween = pc.createScript("scalePulseTween");

ScalePulseTween.attributes.add("targetScale", {
  type: "vec3",
  default: [1.1, 0.925, 1],
});

ScalePulseTween.attributes.add("duration", {
  type: "number",
  default: 0.9,
});

ScalePulseTween.attributes.add("yoyo", {
  type: "boolean",
  default: true,
});

ScalePulseTween.attributes.add("loop", {
  type: "boolean",
  default: true,
});

ScalePulseTween.attributes.add("easing", {
  type: "string",
  enum: [
    { Linear: "Linear" },
    { QuadraticIn: "QuadraticIn" },
    { QuadraticOut: "QuadraticOut" },
    { QuadraticInOut: "QuadraticInOut" },
    { CubicIn: "CubicIn" },
    { CubicOut: "CubicOut" },
    { CubicInOut: "CubicInOut" },
    { QuarticIn: "QuarticIn" },
    { QuarticOut: "QuarticOut" },
    { QuarticInOut: "QuarticInOut" },
    { QuinticIn: "QuinticIn" },
    { QuinticOut: "QuinticOut" },
    { QuinticInOut: "QuinticInOut" },
    { SineIn: "SineIn" },
    { SineOut: "SineOut" },
    { SineInOut: "SineInOut" },
    { ExponentialIn: "ExponentialIn" },
    { ExponentialOut: "ExponentialOut" },
    { ExponentialInOut: "ExponentialInOut" },
    { CircularIn: "CircularIn" },
    { CircularOut: "CircularOut" },
    { CircularInOut: "CircularInOut" },
    { BackIn: "BackIn" },
    { BackOut: "BackOut" },
    { BackInOut: "BackInOut" },
    { BounceIn: "BounceIn" },
    { BounceOut: "BounceOut" },
    { BounceInOut: "BounceInOut" },
    { ElasticIn: "ElasticIn" },
    { ElasticOut: "ElasticOut" },
    { ElasticInOut: "ElasticInOut" },
  ],
  default: "Linear",
});

ScalePulseTween.prototype.initialize = function () {
  this.initialScale = this.entity.getLocalScale().clone();

  this.entity
    .tween(this.entity.getLocalScale())
    .to(this.targetScale, this.duration, pc[this.easing])
    .yoyo(this.yoyo)
    .loop(this.loop)
    .start();
};

ScalePulseTween.prototype.update = function (dt) {};

// powerupCollectable.js
/* jshint esversion: 6 */
var PowerupCollectable = pc.createScript("powerupCollectable");

PowerupCollectable.prototype.initialize = function () {
  this.level = this.app.root.findByName("Level");
  this.entity.powerupSprite = this.entity.findByName("PowerUpSprite");

  this.entity.powerupType = null;

  this.entity.on(EventTypes.ENTITY_CACHED, this.onEntityCached, this);
  this.entity.on(
    EventTypes.ENTITY_REUSED_FROM_CACHE,
    this.onEntityReusedFromCache,
    this
  );

  this.assignEntityMethods();

  this.on("destroy", this.handleEntityDestroyed, this);

  /* test */
  this.resetProperties();

  if (this._pendingPowerupType) {
    this.entity.setPowerupType(this._pendingPowerupType);
    this._pendingPowerupType = null;
  }

  this.entity.readyToUse = true;
};

PowerupCollectable.prototype.assignEntityMethods = function () {
  const scriptContext = this;

  this.entity.setPowerupType = function (powerupType) {
    this.powerupType = powerupType;
    this.powerupSprite.sprite.spriteAsset = this._app.assets.find(
      Constants.getPowerupSpriteAsset(powerupType),
      "sprite"
    );
  }.bind(this.entity);
};

PowerupCollectable.prototype.setPendingPowerupType = function (powerupType) {
  this._pendingPowerupType = powerupType;
};

PowerupCollectable.prototype.resetProperties = function () {
  this.entity.pickedUp = false;
};

PowerupCollectable.prototype.onEntityCached = function () {
  this.entity.setLocalPosition(0, 0, 0);
  this._pendingPowerupType = null;
};

PowerupCollectable.prototype.onEntityReusedFromCache = function () {
  this.resetProperties();
};

PowerupCollectable.prototype.handleEntityDestroyed = function () {
  this.level = null;
  this.entity.pickup = undefined;
};

PowerupCollectable.prototype.update = function (dt) {};

// lookAtActiveCamera.js
/* jshint esversion: 6 */
var LookAtactiveCamera = pc.createScript("lookAtactiveCamera");

LookAtactiveCamera.prototype.initialize = function () {
  this.level = this.app.root.findByName("Level");
  this.cameraController = this.app.root.findByName("CameraController");
};

LookAtactiveCamera.prototype.update = function (dt) {
  if (this.level && this.level.gameState.isGameActive()) {
    const activeCamera = this.cameraController.getActiveCamera();
    if (activeCamera) {
      this.entity.lookAt(activeCamera.getPosition());
    }
  }
};

// powerupSpot.js
/* jshint esversion: 6 */
var PowerupSpot = pc.createScript("powerupSpot");

PowerupSpot.attributes.add("possiblePowerupTypes", {
  type: "string",
  array: true,
});

PowerupSpot.attributes.add("chanceIncreaseFactor", {
  type: "number",
  default: 1.0,
});

PowerupSpot.attributes.add("maxCooldownFactor", {
  type: "number",
  default: 1.0,
});

PowerupSpot.prototype.initialize = function () {
  this.level = Constants.getLevelEntity();

  if (!this.level) {
    // editor mode?
    return;
  }

  this.powerupCollider = this.entity.findByName("PowerupCollider");
  this.powerupContainer = this.entity.findByName("PowerupContainer");

  this.entity.isPowerupSpot = true;
  this.entity.powerupEntity = null;
  this.assignEntityMethods();

  this.entity.on(EventTypes.ENTITY_CACHED, this.onEntityCached, this);
  this.entity.on(
    EventTypes.ENTITY_REUSED_FROM_CACHE,
    this.onEntityReusedFromCache,
    this
  );

  this.on("destroy", this.handleEntityDestroyed, this);

  this.resetInternalProperties();
};

PowerupSpot.prototype.assignEntityMethods = function () {
  const scriptContext = this;

  this.entity.pickup = function () {
    if (this.powerupEntity && !this.pickedUp) {
      this.pickedUp = true;
      if (Constants.PowerupSounds[this.powerupEntity.powerupType]) {
        this._app.fire(
          EventTypes.PLAY_SFX,
          Constants.PowerupSounds[this.powerupEntity.powerupType]
        );
      } else {
        console.error("No sound of type " + this.powerupEntity.powerupType);
      }
      this._app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.COLLECT_TOKEN);
      this._app.fire(
        EventTypes.POWERUP_PICKED_UP,
        this.powerupEntity.powerupType,
        this.getPosition().clone()
      );
      Apicontroller.trackStats("powerup_collected", {
        powerup_type: this.powerupEntity.powerupType,
      });
      scriptContext.destroyPowerup();

      LevelObjectPool.getInstance().disposeEntity(this);
    }
  }.bind(this.entity);
};

PowerupSpot.prototype.resetInternalProperties = function () {
  this.entity.pickedUp = false;

  this.destroyPowerup();

  if (!this.entity.parent || this.entity.parent.name === "AssetsCache") {
    famobi.log("Cannot request powerupCollectable while in cache");
    return;
  }

  const powerupType = PowerupManager.getInstance().getRandomPowerupType(
    this.possiblePowerupTypes,
    this.chanceIncreaseFactor,
    this.maxCooldownFactor
  );
  if (powerupType) {
    this.entity.powerupEntity =
      PowerupManager.getInstance().createPowerupEntity();
    this.entity.powerupEntity.reparent(this.powerupContainer);
    this.entity.powerupEntity.setLocalPosition(0, 0, 0);
    this.entity.powerupEntity.enabled = true;
    if (!this.entity.powerupEntity.readyToUse) {
      this.entity.powerupEntity.script.powerupCollectable.setPendingPowerupType(
        powerupType
      );
    } else {
      this.entity.powerupEntity.setPowerupType(powerupType);
    }

    // console.warn('[Powerup] generated ' + powerupType + ' at ' + this.entity.getPosition().toString(), this.entity.powerupEntity);
  }
};

PowerupSpot.prototype.onEntityCached = function () {
  this.destroyPowerup();
  this.entity.setLocalPosition(0, 0, 0);
  this.entity.inCache = true;
};

PowerupSpot.prototype.onEntityReusedFromCache = function () {
  this.resetInternalProperties();
  this.entity.inCache = false;
};

PowerupSpot.prototype.destroyPowerup = function () {
  if (this.entity.powerupEntity) {
    // this.entity.powerupEntity.destroy();
    LevelObjectPool.getInstance().disposeEntity(this.entity.powerupEntity);
    this.entity.powerupEntity = null;
  }
};

PowerupSpot.prototype.update = function (dt) {
  if (!this.entity.inCache && this.level.gameState.isStuntActive()) {
    const stuntFlyHeight = GameConfig.getAttribute("stuntFlyHeight");
    const position = this.entity.getPosition();
    if (position.z < 45 && position.y < stuntFlyHeight) {
      position.y = pc.math.clamp(
        position.y + (stuntFlyHeight - position.y) * 0.15,
        0,
        stuntFlyHeight
      );
      this.entity.setPosition(position);
    }
  }
};

PowerupSpot.prototype.handleEntityDestroyed = function () {
  this.level = null;
  this.entity.off(EventTypes.ENTITY_CACHED, this.onEntityCached, this);
  this.entity.off(
    EventTypes.ENTITY_REUSED_FROM_CACHE,
    this.onEntityReusedFromCache,
    this
  );
};

// magnetAccessoryAnimator.js
/* jshint esversion: 6 */
var MagnetAccessoryAnimator = pc.createScript("magnetAccessoryAnimator");

MagnetAccessoryAnimator.prototype.initialize = function () {
  this.magnetEntity = this.entity;

  this.app.on(EventTypes.POWERUP_ACTIVATED, this.handlePowerupActivated, this);
  this.app.on(
    EventTypes.POWERUP_DEACTIVATED,
    this.handlePowerupDeactivated,
    this
  );

  this._pendingInitialization = true;
};

MagnetAccessoryAnimator.prototype.handlePowerupActivated = function (
  powerupType
) {
  if (powerupType === Powerups.MAGNET) {
    this.magnetEntity.enabled = true;
  }
};

MagnetAccessoryAnimator.prototype.handlePowerupDeactivated = function (
  powerupType
) {
  if (powerupType === Powerups.MAGNET) {
    this.magnetEntity.enabled = false;
  }
};

MagnetAccessoryAnimator.prototype.update = function (dt) {
  if (this._pendingInitialization) {
    this._pendingInitialization = false;
    this.magnetEntity.enabled = false;
  }
};

// characterCameraController.js
/* jshint esversion: 6 */
var CharacterCameraController = pc.createScript("characterCameraController");

CharacterCameraController.prototype.initialize = function () {
  this.entity.cameraContainer = this.entity.findByName("CameraContainer");

  this.app.on(EventTypes.POWERUP_ACTIVATED, this.handlePowerupActivated, this);
  this.app.on(
    EventTypes.POWERUP_DEACTIVATED,
    this.handlePowerupDeactivated,
    this
  );

  this.app.on(EventTypes.CharacterStatus.DEAD, this.startGameplayCamera, this);
  this.app.on(
    EventTypes.CharacterMovement.FALL_INTO_HOLE,
    this.startGameplayCamera,
    this
  );
};

CharacterCameraController.prototype.handlePowerupActivated = function (
  powerupType
) {
  if (powerupType === Powerups.FIRST_PERSON_VIEW) {
    this.app.fire(EventTypes.START_FIRST_PERSON_CAMERA);
    this.entity.characterModelsHolder.setLocalScale(0, 0, 0);
  }
};

CharacterCameraController.prototype.handlePowerupDeactivated = function (
  powerupType
) {
  if (isFirstPersonMode()) {
    return;
  }
  if (powerupType === Powerups.FIRST_PERSON_VIEW) {
    this.app.fire(EventTypes.START_GAMEPLAY_CAMERA);
  }
};

CharacterCameraController.prototype.startGameplayCamera = function () {
  this.app.fire(EventTypes.START_GAMEPLAY_CAMERA);
};

CharacterCameraController.prototype.update = function (dt) {};

// firstPersonViewCamera.js
/* jshint esversion: 6 */
var FirstPersonViewCamera = pc.createScript("firstPersonViewCamera");

FirstPersonViewCamera.prototype.initialize = function () {
  this.levelEntity = this.app.root.findByName("Level");
  this.playerContainer = this.levelEntity.findByName("PlayerContainer");

  this.prevMovementState = null;
};

FirstPersonViewCamera.prototype.update = function (dt) {
  if (this.levelEntity.gameState.isGameActive()) {
    const currentMovementState = this.playerContainer.getMovementState();
    if (currentMovementState != this.prevMovementState) {
      this.entity
        .tween(this.entity.getLocalPosition())
        .to(
          {
            x: 0,
            y:
              currentMovementState === CharacterMovementState.SLIDING
                ? -1.25
                : 0,
            z: 0,
          },
          0.1,
          pc.Linear
        )
        .start();

      this.entity
        .tween(this.entity.getLocalEulerAngles())
        .rotate(
          {
            x: currentMovementState === CharacterMovementState.SLIDING ? 10 : 0,
            y: 0,
            z: 0,
          },
          0.1,
          pc.Linear
        )
        .start();
    }

    this.prevMovementState = currentMovementState;
  }
};

// wormholeBackgroundEffect.js
/* jshint esversion: 6 */
var WormholeBackgroundEffect = pc.createScript("wormholeBackgroundEffect");

WormholeBackgroundEffect.attributes.add("shineRotationSpeed", {
  type: "number",
  default: -120,
});

WormholeBackgroundEffect.prototype.initialize = function () {
  this.wormholeShine = this.entity.findByName("WormholeShine");

  const initialShineScale = this.wormholeShine.getLocalScale().clone();
  this.wormholeShine
    .tween(this.wormholeShine.getLocalScale())
    .to(
      {
        x: initialShineScale.x * 1.5,
        y: initialShineScale.y * 1.5,
        z: initialShineScale.z * 1.5,
      },
      1.5,
      pc.Linear
    )
    .loop(true)
    .yoyo(true)
    .start();
};

WormholeBackgroundEffect.prototype.update = function (dt) {
  this.wormholeShine.rotateLocal(0, 0, this.shineRotationSpeed * dt);
};

// currentBlockInfo.js
/* jshint esversion: 6 */
var CurrentBlockInfo = pc.createScript("currentBlockInfo");

CurrentBlockInfo.prototype.initialize = function () {
  this.level = this.app.root.findByName("Level");
};

CurrentBlockInfo.prototype.update = function (dt) {
  if (this.level && this.level.gameState.isGameActive()) {
    const currentBlock = this.level.getActiveBlock();
    if (currentBlock) {
      this.entity.element.text = `${
        (currentBlock && currentBlock.name) || "-"
      }`;
    } else {
      this.entity.element.text = ``;
    }
  }
};

// characterPreviewAnimationsManager.js
/* jshint esversion: 6 */

var CharacterPreviewAnimationsManager = pc.createScript(
  "characterPreviewAnimationsManager"
);

CharacterPreviewAnimationsManager.attributes.add("characterAnimationsSet", {
  type: "asset",
  assetType: "json",
});

CharacterPreviewAnimationsManager.prototype.initialize = function () {
  const currentCharacterName = this.entity.name.replace("Preview", "");
  this.characterAnimationsData =
    this.characterAnimationsSet.resource[currentCharacterName];

  this.entity.on(EventTypes.ANIMATION_LOOP, this.playAnimation, this);
};

CharacterPreviewAnimationsManager.prototype.update = function (dt) {
  //make sure that current animation is playing (not stucked)
  if (
    this.entity.animation.currAnim &&
    this.entity.animation.playing &&
    this.entity.animation.currentTime === 0 &&
    this.prevAnimFrameTime === 0
  ) {
    //choose and play random anim
    if (Object.keys(this.entity.animation.animations).length > 0) {
      this.entity.animation.play(
        Utils.getRandomItem(Object.keys(this.entity.animation.animations))
      );
    }
  }
  this.prevAnimFrameTime = this.entity.animation.currentTime;
};

CharacterPreviewAnimationsManager.prototype.playAnimation = function () {
  const randomNumber = Math.random();

  if (randomNumber < 0.85) {
    this._playIdleAnimation();
  } else {
    this._playFidgetAnimation();
  }
};

CharacterPreviewAnimationsManager.prototype._playIdleAnimation = function () {
  if (
    this.characterAnimationsData.animations[
      Constants.CharacterAnimations.IDLE_LOOP
    ] &&
    this.entity.animation.getAnimation(
      this.characterAnimationsData.animations[
        Constants.CharacterAnimations.IDLE_LOOP
      ]
    )
  ) {
    this.entity.animation.play(
      this.characterAnimationsData.animations[
        Constants.CharacterAnimations.IDLE_LOOP
      ],
      0
    );
  }
};

CharacterPreviewAnimationsManager.prototype._playFidgetAnimation = function () {
  if (
    this.characterAnimationsData.animations[
      Constants.CharacterAnimations.FIDGET
    ] &&
    this.entity.animation.getAnimation(
      this.characterAnimationsData.animations[
        Constants.CharacterAnimations.FIDGET
      ]
    )
  ) {
    this.entity.animation.play(
      this.characterAnimationsData.animations[
        Constants.CharacterAnimations.FIDGET
      ],
      0
    );
  }
};

// distanceTrigger.js
/* jshint esversion: 6 */
var DistanceTrigger = pc.createScript("distanceTrigger");

DistanceTrigger.attributes.add("reactionDistance", {
  type: "number",
  default: 50,
});

DistanceTrigger.prototype.initialize = function () {
  this.level = this.app.root.findByName("Level");

  this.entity.on(EventTypes.ENTITY_CACHED, this.onEntityCached, this);
  this.entity.on(
    EventTypes.ENTITY_REUSED_FROM_CACHE,
    this.onEntityReusedFromCache,
    this
  );

  this.resetProperties();
};

DistanceTrigger.prototype.onEntityCached = function () {
  this._cached = true;
};

DistanceTrigger.prototype.onEntityReusedFromCache = function () {
  this.resetProperties();
};

DistanceTrigger.prototype.resetProperties = function () {
  this._activated = false;
  this._cached = false;
};

DistanceTrigger.prototype.update = function (dt) {
  if (this.level && this.level.gameState.isGameRunning()) {
    if (!this._activated && !this._cached) {
      const distanceToPlayerSquared = this.entity.getPosition().lengthSq();
      if (
        distanceToPlayerSquared <=
        this.reactionDistance * this.reactionDistance
      ) {
        this.activateTrigger();
      }
    }
  }
};

DistanceTrigger.prototype.activateTrigger = function () {
  this._activated = true;
  this.entity.fire(EventTypes.PLAYER_REACHED_CLOSE_TO_TRIGGER);
};

// spaceStationDoorAnimationManager.js
/* jshint esversion: 6 */

var SpaceStationDoorAnimationManager = pc.createScript(
  "spaceStationDoorAnimationManager"
);

SpaceStationDoorAnimationManager.prototype.initialize = function () {
  this.leftDoor = this.entity.findByName("Side-station_door_L");
  this.rightDoor = this.entity.findByName("Side-station_door_R");

  this.entity.on(EventTypes.ENTITY_CACHED, this.onEntityCached, this);
  this.entity.on(
    EventTypes.ENTITY_REUSED_FROM_CACHE,
    this.onEntityReusedFromCache,
    this
  );
  this.entity.on(
    EventTypes.PLAYER_REACHED_CLOSE_TO_TRIGGER,
    this.animateDoor,
    this
  );

  this.resetProperties();
};

SpaceStationDoorAnimationManager.prototype.onEntityCached = function () {
  if (this.leftDoorTween && this.leftDoorTween.playing) {
    this.leftDoorTween.stop();
  }
  if (this.rightDoorTween && this.rightDoorTween.playing) {
    this.rightDoorTween.stop();
  }
};

SpaceStationDoorAnimationManager.prototype.onEntityReusedFromCache =
  function () {
    this.resetProperties();
  };

SpaceStationDoorAnimationManager.prototype.resetProperties = function () {
  //set default (closed) door state
  this.leftDoor.setLocalPosition(0, 0, 0);
  this.rightDoor.setLocalPosition(0, 0, 0);
};

SpaceStationDoorAnimationManager.prototype.update = function (dt) {};

SpaceStationDoorAnimationManager.prototype.animateDoor = function () {
  this.leftDoorTween = this.leftDoor
    .tween(this.leftDoor.getLocalPosition())
    .to(new pc.Vec3(12, 0, 0), 0.45, pc.SineIn)
    .start();

  this.rightDoorTween = this.rightDoor
    .tween(this.rightDoor.getLocalPosition())
    .to(new pc.Vec3(-12, 0, 0), 0.45, pc.SineIn)
    .start();
};

// robotFactoryDoorsAnimationManager.js
/* jshint esversion: 6 */

var RobotFactoryDoorsAnimationManager = pc.createScript(
  "robotFactoryDoorsAnimationManager"
);

RobotFactoryDoorsAnimationManager.prototype.initialize = function () {
  this.leftDoor = this.entity.findByName("TransitionBlock-factory-door_L");
  this.rightDoor = this.entity.findByName("TransitionBlock-factory-door_R");

  this.entity.on(EventTypes.ENTITY_CACHED, this.onEntityCached, this);
  this.entity.on(
    EventTypes.ENTITY_REUSED_FROM_CACHE,
    this.onEntityReusedFromCache,
    this
  );
  this.entity.on(
    EventTypes.PLAYER_REACHED_CLOSE_TO_TRIGGER,
    this.animateDoor,
    this
  );

  this.resetProperties();
};

RobotFactoryDoorsAnimationManager.prototype.onEntityCached = function () {
  if (this.leftDoorTween && this.leftDoorTween.playing) {
    this.leftDoorTween.stop();
  }
  if (this.rightDoorTween && this.rightDoorTween.playing) {
    this.rightDoorTween.stop();
  }
};

RobotFactoryDoorsAnimationManager.prototype.onEntityReusedFromCache =
  function () {
    this.resetProperties();
  };

RobotFactoryDoorsAnimationManager.prototype.resetProperties = function () {
  //set default (closed) door state
  this.leftDoor.setLocalPosition(0, 0, 0);
  this.rightDoor.setLocalPosition(0, 0, 0);
};

RobotFactoryDoorsAnimationManager.prototype.update = function (dt) {};

RobotFactoryDoorsAnimationManager.prototype.animateDoor = function () {
  this.leftDoorTween = this.leftDoor
    .tween(this.leftDoor.getLocalPosition())
    .to(new pc.Vec3(5.8, 0, 0), 0.45, pc.SineIn)
    .start();

  this.rightDoorTween = this.rightDoor
    .tween(this.rightDoor.getLocalPosition())
    .to(new pc.Vec3(-5.8, 0, 0), 0.45, pc.SineIn)
    .start();
};

// exclamationMarkIndidcator.js
/* jshint esversion: 6 */

var ExclamationMarkIndidcator = pc.createScript("exclamationMarkIndidcator");

ExclamationMarkIndidcator.prototype.initialize = function () {
  this.playIdleAnimation();
  this.getMinPurchase();
};

ExclamationMarkIndidcator.prototype.update = function (dt) {};

ExclamationMarkIndidcator.prototype.playIdleAnimation = function () {
  this.entity
    .tween(this.entity.getLocalScale())
    .to(new pc.Vec3(1.1, 1.1, 1.1), 0.3, pc.Linear)
    .loop(true)
    .yoyo(true)
    .start();
};

ExclamationMarkIndidcator.prototype.getMinPurchase = function () {
  const charactersData =
    LocalStorageController.getActualSaveData("charactersData");
  // console.log('CHARACTERS DATA ', charactersData);
};

// spaceFlyController.js
/* jshint esversion: 6 */
var SpaceFlyController = pc.createScript("spaceFlyController");

SpaceFlyController.attributes.add("coinTemplate", {
  type: "asset",
  assetType: "template",
});

SpaceFlyController.attributes.add("coin10XTemplate", {
  type: "asset",
  assetType: "template",
});

SpaceFlyController.prototype.initialize = function () {
  this.spaceFlyActive = false;
  this.currentFrameSpeed = 0;
  this.app.on(EventTypes.ROCKET_ACTIVATED, this._onRocketActivated, this);
  this.app.on(EventTypes.GAMEPLAY_EXIT, this._resetSpaceFly, this);
  this.app.on(
    EventTypes.GAMEPLAY_RESTARTED_EXTERNALLY,
    this._resetSpaceFly,
    this
  );
  this.app.on(EventTypes.EXIT_SPACE_FLY, this.exitSpaceFly, this);
};

SpaceFlyController.prototype.update = function (dt) {
  if (
    this.entity.gameState.isGameRunning() &&
    this.entity.gameState.isSpaceFlyActive()
  ) {
    this.recyclePassedByCoins();
    this.processSpaceMovement(dt);
  }
};

SpaceFlyController.prototype.processSpaceMovement = function (dt) {
  this.currentFrameSpeed =
    GameConfig.getAttribute("spaceFlyTravelSpeed") +
    this.travelTime * GameConfig.getAttribute("spaceFlyAcceleration");

  const frameDistance = this.entity.playerContainer.frameDistance.z;
  this.entity.spaceContainer.translate(0, 0, -frameDistance);

  this.travelTime += dt;
  this.traveledDistance += frameDistance;
  this.travelProgress = pc.math.clamp(
    this.traveledDistance / this.spaceTravelTotalDistance,
    0,
    1
  );
  this.app.fire(EventTypes.SPACE_FLY_PROGRESS_UPDATE, this.travelProgress);

  if (this.travelProgress === 1 && !this.spaceFlyFinishSignalEmitted) {
    this.finishSpaceFly();
  }
};

SpaceFlyController.prototype.startSpaceFly = function () {
  this.spaceFlyActive = true;

  this.entity.blocksContainer.enabled = false;
  this.entity.spaceContainer.enabled = true;

  this.spaceTravelTotalDistance =
    GameConfig.getAttribute("spaceFlyCoinDistanceFromStart") +
    GameConfig.getAttribute("spaceFlyTotalCoins") *
      GameConfig.getAttribute("spaceFlyCoinInterval") +
    GameConfig.getAttribute("spaceFlyCoinDistanceAfterEnd");
  this.traveledDistance = 0;
  this.travelProgress = 0;
  this.travelTime = 0;
  this.spaceFlyFinishSignalEmitted = false;

  this.entity.spaceContainer.setLocalPosition(0, 0, 0);
  this.recycleCoins();
  this.prepareCoins();

  this.app.fire(EventTypes.STUNT_CANCELED);
  this.app.fire(EventTypes.START_SPACE_FLY);

  this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.SPACE_WIND);
};

SpaceFlyController.prototype.finishSpaceFly = function () {
  this.spaceFlyFinishSignalEmitted = true;
  this.app.fire(EventTypes.FINISH_SPACE_FLY);
  this.app.fire(EventTypes.STOP_SFX, Constants.AUDIO.SPACE_WIND);
};

SpaceFlyController.prototype.exitSpaceFly = function () {
  this.spaceFlyActive = false;

  /* recycle existing coins */
  this.recycleCoins();
};

SpaceFlyController.prototype.prepareCoins = function () {
  const coinsPerLaneChange = 2;
  let currentLane = this.entity.playerContainer.getCurrentLane();
  let laneCoinsLeft = Math.floor(Math.random() * 5);
  let _laneChangeCoinsLeft = 0;
  let _fromLane = 0;
  let _toLane = 0;
  let currentCoinX = 0;

  for (let i = 0; i < GameConfig.getAttribute("spaceFlyTotalCoins"); i++) {
    if (_laneChangeCoinsLeft > 0) {
      currentCoinX =
        (_fromLane +
          (_toLane - _fromLane) *
            (1 - _laneChangeCoinsLeft / coinsPerLaneChange)) *
        GameConfig.getAttribute("laneWidth");
      _laneChangeCoinsLeft -= 1;
    } else {
      currentCoinX = currentLane * GameConfig.getAttribute("laneWidth");
      laneCoinsLeft -= 1;
      if (laneCoinsLeft <= 0) {
        laneCoinsLeft = Math.floor(3 + Math.random() * 3);
        _fromLane = currentLane;
        currentLane = Utils.getRandomItem(
          [-1, 0, 1].filter((lane) => lane != _fromLane)
        ); // Utils.getRandomItem([currentLane - 1, currentLane, currentLane + 1].filter(lane => Math.abs(lane) <= 1 && lane != _fromLane));
        _toLane = currentLane;
        if (_fromLane != _toLane) {
          _laneChangeCoinsLeft = coinsPerLaneChange;
        } else {
          _laneChangeCoinsLeft = 0;
        }
      }
    }

    const coin = LevelObjectPool.getInstance().buildEntityFromTemplate(
      i % 3 === 2 ? this.coin10XTemplate.id : this.coinTemplate.id
    );
    coin.reparent(this.entity.spaceContainer);
    coin.setLocalPosition(
      currentCoinX,
      0,
      GameConfig.getAttribute("spaceFlyCoinDistanceFromStart") +
        i * GameConfig.getAttribute("spaceFlyCoinInterval")
    );
    coin.enabled = true;
  }
};

SpaceFlyController.prototype.recyclePassedByCoins = function () {
  for (let i = this.entity.spaceContainer.children.length - 1; i > -1; i--) {
    const child = this.entity.spaceContainer.children[i];
    if (child.getPosition().z < -10) {
      LevelObjectPool.getInstance().disposeEntity(child);
    }
  }
};

SpaceFlyController.prototype.recycleCoins = function () {
  while (this.entity.spaceContainer.children.length > 0) {
    if (this.entity.spaceContainer.children[0]) {
      LevelObjectPool.getInstance().disposeEntity(
        this.entity.spaceContainer.children[0]
      );
    }
  }
};

/* Event handlers */

SpaceFlyController.prototype._onRocketActivated = function () {
  this.startSpaceFly();
};

SpaceFlyController.prototype._resetSpaceFly = function () {
  this.spaceFlyActive = false;
};

// spaceBackground.js
/* jshint esversion: 6 */
var SpaceBackground = pc.createScript("spaceBackground");

SpaceBackground.attributes.add("earthStartPosition", {
  type: "vec3",
  default: [0, 20, 100],
});

SpaceBackground.attributes.add("earthEndPosition", {
  type: "vec3",
  default: [0, 75, 100],
});

SpaceBackground.attributes.add("earthStartScale", {
  type: "vec3",
  default: [3, 3, 1],
});

SpaceBackground.attributes.add("earthEndScale", {
  type: "vec3",
  default: [30, 30, 1],
});

SpaceBackground.attributes.add("spaceStartPosition", {
  type: "vec3",
  default: [0, -10, 130],
});

SpaceBackground.attributes.add("spaceEndPosition", {
  type: "vec3",
  default: [0, 5, 130],
});

SpaceBackground.prototype.initialize = function () {
  this.level = this.app.root.findByName("Level");
  this.spaceSprite = this.entity.findByName("SpaceSprite");
  this.earthSprite = this.entity.findByName("EarthSprite");

  this._lerpVector = new pc.Vec3();

  this.app.on(EventTypes.START_SPACE_FLY, this.onSpaceFlyStarted, this);
  this.app.on(
    EventTypes.SPACE_FLY_PROGRESS_UPDATE,
    this.onProgressUpdated,
    this
  );
};

SpaceBackground.prototype.onSpaceFlyStarted = function () {
  this.spaceSprite.setLocalPosition(this.spaceStartPosition);
  this.earthSprite.setLocalPosition(this.earthStartPosition);
};

SpaceBackground.prototype.onProgressUpdated = function (progress) {
  this.spaceSprite.setLocalPosition(
    this._lerpVector.lerp(
      this.spaceStartPosition,
      this.spaceEndPosition,
      pc.SineInOut(progress)
    )
  );

  this.earthSprite.setLocalPosition(
    this._lerpVector.lerp(
      this.earthStartPosition,
      this.earthEndPosition,
      pc.SineInOut(progress)
    )
  );
  this.earthSprite.setLocalScale(
    this._lerpVector.lerp(
      this.earthStartScale,
      this.earthEndScale,
      pc.CubicIn(progress)
    )
  );
};

SpaceBackground.prototype.update = function (dt) {};

// InterlocationLoading.js
/* jshint esversion: 6 */

var InterlocationLoading = pc.createScript("interlocationLoading");

InterlocationLoading.attributes.add("period", {
  type: "number",
  default: 1,
});

InterlocationLoading.attributes.add("segments", {
  type: "number",
  default: 1,
});

InterlocationLoading.prototype.initialize = function () {
  this.elapsedTime = 0;
};

InterlocationLoading.prototype.update = function (dt) {
  this.elapsedTime += dt / this.period;
  this.entity.setLocalEulerAngles(
    0,
    0,
    (-360 / this.segments) * Math.floor((this.elapsedTime % 1) * this.segments)
  );
};

// scooterAcessoryAnimator.js
/* jshint esversion: 6 */
var ScooterAcessoryAnimator = pc.createScript("scooterAcessoryAnimator");

ScooterAcessoryAnimator.attributes.add("characterAnimationsSet", {
  type: "asset",
  assetType: "json",
});

ScooterAcessoryAnimator.prototype.initialize = function () {
  this.scooterEntity = this.entity;
  this.scooterModel = this.entity.findByName("vehicle-scooter");
  this.motors = this.entity.findByName("ScooterMotors");
  this.flameLeft = this.entity.findByName("SingleFlameLeft");
  this.flameRight = this.entity.findByName("SingleFlameRight");

  this.app.on(EventTypes.STUNT_STARTED, this.enableScooterEntity, this);
  this.app.on(EventTypes.STUNT_FINISHED, this.disableScooterEntity, this);
  this.app.on(
    EventTypes.STUNT_PHASE_CHANGED,
    this.handleStuntStateChanged,
    this
  );
  this.app.on(
    EventTypes.PLAY_SCOOTER_ANIMATION,
    this.playScooterAnimation,
    this
  );
  this.app.on(EventTypes.GAMEPLAY_LAUNCH, this.disableScooterEntity, this);
  this.app.on(EventTypes.GAMEPLAY_EXIT, this.disableScooterEntity, this);
  this.app.on(
    EventTypes.GAMEPLAY_RESTARTED_EXTERNALLY,
    this.disableScooterEntity,
    this
  );

  this._pendingInitialization = true;
};

ScooterAcessoryAnimator.prototype.update = function (dt) {
  if (this._pendingInitialization) {
    this._pendingInitialization = false;
    this.scooterEntity.enabled = false;
  }
};

ScooterAcessoryAnimator.prototype.enableScooterEntity = function () {
  this.scooterEntity.enabled = true;
};

ScooterAcessoryAnimator.prototype.disableScooterEntity = function () {
  this.scooterEntity.enabled = false;
};

ScooterAcessoryAnimator.prototype.handleStuntStateChanged = function (
  stuntPhase
) {
  if (stuntPhase === StuntPhase.STUNT_FLY) {
    this.motors.enabled = true;
  } else {
    this.motors.enabled = false;
  }
};

ScooterAcessoryAnimator.prototype.getCurrentCharacterScooterAnimationName =
  function (trickIndex) {
    const currentCharacterName =
      CharactersManager.getInstance().getActiveCharacter();
    const characterAnimationsData =
      this.characterAnimationsSet.resource[currentCharacterName];
    const animationKey =
      Constants.CharacterAnimations[
        trickIndex === 0 ? "SCOOTER_IDLE" : "SCOOTER_TRICK_" + trickIndex
      ];
    if (!characterAnimationsData) {
      console.warn(
        `Can't find animations config for character '${currentCharacterName}'`
      );
      return null;
    }
    const animationName = characterAnimationsData.animations[animationKey];
    if (!animationName) {
      return null;
    }
    return animationName;
  };

ScooterAcessoryAnimator.prototype.playScooterAnimation = function (trickIndex) {
  if (this.scooterEntity.enabled) {
    const animationName =
      this.getCurrentCharacterScooterAnimationName(trickIndex);
    if (
      animationName &&
      this.scooterModel.animation &&
      this.scooterModel.animation.animations[animationName]
    ) {
      this.scooterModel.animation.play(animationName);
      this.scooterModel.animation.loop = false;
    }
  }
};

// localRotation.js
/* jshint esversion: 6 */
var LocalRotation = pc.createScript("localRotation");

LocalRotation.attributes.add("angularSpeed", {
  type: "vec3",
  default: [0, 0, 0],
});

LocalRotation.prototype.initialize = function () {};

LocalRotation.prototype.update = function (dt) {
  this.entity.rotateLocal(
    this.angularSpeed.x * dt,
    this.angularSpeed.y * dt,
    this.angularSpeed.z * dt
  );
};

// stuntRamp.js
/* jshint esversion: 6 */
var StuntRamp = pc.createScript("stuntRamp");

StuntRamp.prototype.initialize = function () {
  this.level = this.app.root.findByName("Level");
  if (!this.level) {
    // editor mode?
    return;
  }

  this.scooter = this.entity.findByName("Scooter");

  this.assignEntityMethods();

  if (this.entity.parent) {
    this.entity.parent.on(EventTypes.ENTITY_CACHED, this.onEntityCached, this);
    this.entity.parent.on(
      EventTypes.ENTITY_REUSED_FROM_CACHE,
      this.onEntityReusedFromCache,
      this
    );
  }

  this.on("destroy", this.handleEntityDestroyed, this);
};

StuntRamp.prototype.assignEntityMethods = function () {
  const scriptContext = this;

  this.entity.pickup = function () {
    if (!this.pickedUp) {
      this.pickedUp = true;

      scriptContext.scooter.enabled = false;

      const lane =
        this.getPosition().x > 2 ? 1 : this.getPosition().x < -2 ? -1 : 0;

      this._app.fire(EventTypes.STUNT_STARTED, this.getPosition().z, lane);
      this._app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.COLLECT_TOKEN);
    }
  }.bind(this.entity);
};

StuntRamp.prototype.resetInternalProperties = function () {
  this.entity.pickedUp = false;
  this.scooter.enabled = true;
};

StuntRamp.prototype.onEntityCached = function () {};

StuntRamp.prototype.onEntityReusedFromCache = function () {
  this.resetInternalProperties();
};

StuntRamp.prototype.update = function (dt) {};

StuntRamp.prototype.handleEntityDestroyed = function () {
  this.level = null;
  if (this.entity.parent) {
    this.entity.parent.off(EventTypes.ENTITY_CACHED, this.onEntityCached, this);
    this.entity.parent.off(
      EventTypes.ENTITY_REUSED_FROM_CACHE,
      this.onEntityReusedFromCache,
      this
    );
  }
};

// stuntController.js
/* jshint esversion: 6 */
var StuntController = pc.createScript("stuntController");

StuntController.stuntsBestScores = 0;
StuntController.currentStuntScores = 0;

StuntController.prototype.initialize = function () {
  this.stuntActive = false;
  this.waitingForLanding = false;
  this.stuntPhase = StuntPhase.NO_STUNT;
  this.stuntPhaseProgress = 0;
  this.rampStartZ = 0;
  this.stuntIndex = 0;
  this.landingElapsedTime = 1000;

  this.app.on(EventTypes.STUNT_STARTED, this.onStuntStarted, this);
  this.app.on(EventTypes.STUNT_CANCELED, this.onStuntCanceled, this);
  this.app.on(EventTypes.LEVEL_FINISHED, this.onStuntCanceled, this);
  this.app.on(EventTypes.GAMEPLAY_EXIT, this._resetStunts, this);
  this.app.on(
    EventTypes.GAMEPLAY_RESTARTED_EXTERNALLY,
    this._resetStunts,
    this
  );
  this.app.on(EventTypes.GAMEPLAY_LAUNCH, this.onGameplayLaunched, this);
  this.app.on(
    EventTypes.CharacterMovement.LANDED,
    this.onCharacterLanded,
    this
  );
  this.app.on(EventTypes.DISPLAY_STUNT_UI, this.updateStuntsScoreValue, this);
};

StuntController.prototype.update = function (dt) {
  if (this.entity.gameState.isGameRunning()) {
    if (this.entity.gameState.isStuntActive()) {
      this.updateStuntProgress(dt);
    } else {
      this.landingElapsedTime += dt;
    }
  }
};

StuntController.prototype.updateStuntsScoreValue = function (name, score) {
  StuntController.currentStuntScores += score;
};

StuntController.prototype.onGameplayLaunched = function () {
  StuntController.currentStuntScores = 0;
};

StuntController.prototype.updateStuntProgress = function (dt) {
  if (this.stuntPhase === StuntPhase.RAMP) {
    this._updateRampMovement(dt);
  } else if (this.stuntPhase === StuntPhase.STUNT_JUMP) {
    this._updateJump(dt);
  } else if (this.stuntPhase === StuntPhase.STUNT_FLY) {
    this._updateFly(dt);
  }
};

StuntController.prototype.onStuntStarted = function (deltaZ, lane) {
  this.stuntActive = true;
  this.stuntIndex = Math.floor(1 + Math.random() * 3);
  this.rampStartZ = deltaZ;
  this.app.fire(EventTypes.CharacterMovement.TELEPORT_TO_LANE, lane);
  this._startPhase(StuntPhase.RAMP);
  this.entity.character.setMovementState(CharacterMovementState.RUNNING);
};

StuntController.prototype.onStuntCanceled = function () {
  if (this.stuntActive) {
    if (this.stuntPhase !== StuntPhase.RAMP) {
      this.finishStunt();
    }
  }
};

StuntController.prototype.onCharacterLanded = function () {
  if (this.waitingForLanding && this.stuntPhase !== StuntPhase.RAMP) {
    this.landingElapsedTime = 0;
    this.app.fire(EventTypes.STUNT_PERFORMED);
    this.app.fire(
      EventTypes.PLAY_STUNT_LANDING_EFFECT,
      new pc.Vec3(this.entity.characterContainer.getPosition().x, 0, 0)
    );
    this.app.fire(EventTypes.Gameplay.PLAY_SFX, Constants.AUDIO.TRICK_LANDING);
  }
  this.waitingForLanding = false;
};

StuntController.prototype.getMovementSpeedFactor = function () {
  if (this.stuntPhase === StuntPhase.RAMP) {
    return (
      1 +
      this.stuntPhaseProgress *
        (GameConfig.getAttribute("stuntSpeedFactor") - 1)
    );
  } else {
    return GameConfig.getAttribute("stuntSpeedFactor");
  }
};

StuntController.prototype.finishStunt = function () {
  this._resetStunts();
  this.app.fire(EventTypes.STUNT_FINISHED);
  this.waitingForLanding = true;
};

/* Private */
StuntController.prototype._startPhase = function (stuntPhase) {
  this.stuntPhase = stuntPhase;
  this.stuntPhaseProgress = 0;
  this.app.fire(EventTypes.STUNT_PHASE_CHANGED, this.stuntPhase);

  if (stuntPhase === StuntPhase.STUNT_JUMP) {
    try {
      const characterParams =
        CharactersManager.getInstance().getCharacterParams(
          CharactersManager.getInstance().getActiveCharacter()
        );
      const stuntName = characterParams.stunts[this.stuntIndex - 1].name;
      const characterData =
        CharactersManager.getInstance().getCharactersData()[
          CharactersManager.getInstance().getActiveCharacter()
        ];
      const stuntLevel =
        getStuntLevel(this.stuntIndex) ||
        characterData.levels[this.stuntIndex - 1];
      const stuntReward = (stuntLevel + 1) * 100;
      this.lastStuntName = stuntName;
      this.lastStuntReward = stuntReward;
      this.app.fire(EventTypes.DISPLAY_STUNT_UI, stuntName, stuntReward);
      Apicontroller.trackStats("stunt_performed", {
        stunt_name: stuntName,
        stunt_reward: stuntReward,
      });
    } catch (e) {
      console.warn(e);
    }
  }
};

StuntController.prototype._updateRampMovement = function (dt) {
  const frameDistance = dt * this.entity.getMovementSpeed();

  this.rampStartZ -= frameDistance;
  if (this.rampStartZ > 0) {
    return;
  }

  this.stuntPhaseProgress = pc.math.clamp(
    -this.rampStartZ / GameConfig.getAttribute("stuntRampLength"),
    0,
    1
  );

  const currentHeight =
    GameConfig.getAttribute("stuntRampCurve").value(this.stuntPhaseProgress) *
    GameConfig.getAttribute("stuntRampHeight");
  this.entity.character.verticalContainer.setLocalPosition(0, currentHeight, 0);

  if (this.stuntPhaseProgress === 1) {
    this._startPhase(StuntPhase.STUNT_JUMP);
  }
};

StuntController.prototype._updateJump = function (dt) {
  this.stuntPhaseProgress = pc.math.clamp(
    this.stuntPhaseProgress + dt / GameConfig.getAttribute("stuntJumpDuration"),
    0,
    1
  );

  const currentHeight =
    GameConfig.getAttribute("stuntRampHeight") +
    GameConfig.getAttribute("stuntJumpCurve").value(this.stuntPhaseProgress) *
      GameConfig.getAttribute("stuntJumpHeight");
  this.entity.character.verticalContainer.setLocalPosition(0, currentHeight, 0);

  if (this.stuntPhaseProgress === 1) {
    this._startPhase(StuntPhase.STUNT_FLY);
  }
};

StuntController.prototype._updateFly = function (dt) {
  const flyDuration =
    GameConfig.getAttribute("stuntFlyDuration") +
    0.5 *
      CharactersManager.getInstance().getCurrentCharacterStunts()[
        this.stuntIndex - 1
      ];
  this.stuntPhaseProgress = pc.math.clamp(
    this.stuntPhaseProgress + dt / flyDuration,
    0,
    1
  );

  const currentHeight = GameConfig.getAttribute("stuntFlyHeight");
  this.entity.character.verticalContainer.setLocalPosition(0, currentHeight, 0);

  if (this.stuntPhaseProgress === 1) {
    this.finishStunt();
  }
};

StuntController.prototype._resetStunts = function () {
  this.stuntActive = false;
  this.waitingForLanding = false;
  this.landingElapsedTime = 1000;
  this.stuntPhase = StuntPhase.NO_STUNT;
  this.stuntPhaseProgress = 0;
  this.rampStartZ = 0;
  this.lastStuntName = "";
  this.lastStuntReward = 0;
};

// stuntVFX.js
/* jshint esversion: 6 */
var StuntVfx = pc.createScript("stuntVfx");

StuntVfx.prototype.initialize = function () {
  this.stuntShine = this.entity.findByName("StuntShine");
  this.stuntBurst = this.entity.findByName("StuntBurst");

  this.app.on(EventTypes.STUNT_PHASE_CHANGED, this.onStuntPhaseChanged, this);
  this.app.on(EventTypes.STUNT_FINISHED, this.onStuntFinished, this);
  this.app.on(EventTypes.GAMEPLAY_LAUNCH, this.stopParticleSystems, this);
  this.app.on(EventTypes.GAMEPLAY_EXIT, this.stopParticleSystems, this);
  this.app.on(
    EventTypes.GAMEPLAY_RESTARTED_EXTERNALLY,
    this.stopParticleSystems,
    this
  );
};

StuntVfx.prototype.update = function (dt) {};

StuntVfx.prototype.onStuntPhaseChanged = function (stuntPhase) {
  if (
    stuntPhase === StuntPhase.RAMP ||
    stuntPhase === StuntPhase.STUNT_JUMP ||
    stuntPhase === StuntPhase.STUNT_FLY
  ) {
    this.stuntBurst.particlesystem.play();
  } else {
    this.stuntBurst.particlesystem.stop();
  }

  if (
    stuntPhase === StuntPhase.STUNT_JUMP ||
    stuntPhase === StuntPhase.STUNT_FLY
  ) {
    this.stuntShine.particlesystem.play();
  } else {
    this.stuntShine.particlesystem.stop();
  }
};

StuntVfx.prototype.onStuntFinished = function () {
  this.stopParticleSystems();
};

StuntVfx.prototype.stopParticleSystems = function () {
  this.stuntShine.particlesystem.stop();
  this.stuntBurst.particlesystem.stop();
};

// StuntsScoresNotifier.js
/* jshint esversion: 6 */

var StuntsScoresNotifier = pc.createScript("stuntsScoresNotifier");

StuntsScoresNotifier.prototype.initialize = function () {
  this.stuntsContainer = this.entity;
  this.stuntsTrickName = this.stuntsContainer.findByName("StuntsTrickName");
  this.stuntsScores = this.stuntsContainer.findByName("StuntsScores");
  this.cupIcon = this.stuntsContainer.findByName("CupIcon");

  this.app.on(EventTypes.DISPLAY_STUNT_UI, this.updateTrickInfo, this);
  this.app.on(EventTypes.LEVEL_EXIT, this.hideStuntsUI, this);

  this.stuntsContainer.enabled = false;
};

StuntsScoresNotifier.prototype.update = function (dt) {};

StuntsScoresNotifier.prototype.hideStuntsUI = function () {
  this.stuntsContainer.enabled = false;
};

StuntsScoresNotifier.prototype.updateTrickInfo = function (name, score) {
  this.stuntsContainer.enabled = true;

  /* update texts */
  this.stuntsTrickName.element.text =
    LocalizationManager.getInstance().getLocalizedText(name);
  Utils.tweenText(this.stuntsScores, 0, score, 2, 0, pc.Linear, false);

  this.stuntsTrickName
    .tween(this.stuntsTrickName.getLocalScale())
    .to(new pc.Vec3(1, 1, 1), 0.25, pc.BackOut)
    .start();

  this.stuntsScores
    .tween(this.stuntsScores.getLocalScale())
    .to(new pc.Vec3(1, 1, 1), 0.25, pc.BackOut)
    .delay(0.075)
    .start();

  this.entity.delayedCall(3800, () => this.hideStuntsUI());
};

// languageSelectionPopup.js
/* jshint esversion: 6 */

var LanguageSelectionPopup = pc.createScript("languageSelectionPopup");

LanguageSelectionPopup.prototype.initialize = function () {
  this.buttonBack = this.entity.findByName("ButtonBack");

  this.assingEntityMethods();

  BasicButton.assignAction(this.buttonBack, this.closePopup, this);
};

LanguageSelectionPopup.prototype.update = function (dt) {};

LanguageSelectionPopup.prototype.assingEntityMethods = function () {
  const scriptContext = this;

  this.entity.show = function () {
    this.enabled = true;
  }.bind(this.entity);

  this.entity.hide = function () {
    this.enabled = false;
  }.bind(this.entity);
};

LanguageSelectionPopup.prototype.closePopup = function () {
  this.entity.hide();
};

// ButtonLanguage.js
/* jshint esversion: 6 */

var ButtonLanguage = pc.createScript("buttonLanguage");

ButtonLanguage.attributes.add("languageCode", {
  type: "string",
});

ButtonLanguage.prototype.initialize = function () {
  BasicButton.assignTapAction(this.entity, this.languageButtonCLicked, this);

  this.app.on(EventTypes.LANGUAGE_CHANGED, this.onLanguageChanged, this);
};

ButtonLanguage.prototype.postInitialize = function () {
  this.onLanguageChanged(LocalizationManager.getInstance().getCurrentLocale());
};

ButtonLanguage.prototype.update = function (dt) {};

ButtonLanguage.prototype.languageButtonCLicked = function () {
  LocalizationManager.getInstance().changeLocale(this.languageCode);
};

ButtonLanguage.prototype.onLanguageChanged = function (languageCode) {
  if (this.languageCode === languageCode) {
    this.entity.element.spriteAsset = this.app.assets.find(
      "Button_Green_wide.png",
      "sprite"
    ).id;
  } else {
    this.entity.element.spriteAsset = this.app.assets.find(
      "Button_Yellow_wide.png",
      "sprite"
    ).id;
  }
};

// localizationManager.js
var LocalizationManager = pc.createScript("localizationManager");

LocalizationManager._currentLocale = null;

LocalizationManager.getInstance = function () {
  if (!LocalizationManager._instance)
    throw new Error("LocalizationManager is not initialized yet");
  return LocalizationManager._instance;
};

LocalizationManager.prototype.initialize = function () {
  LocalizationManager._app = this.app;
  if (!LocalizationManager._instance) {
    LocalizationManager._instance = this;
  }

  this.app.on(EventTypes.APP_LOADED, this.loadSavedLocale, this);
};

LocalizationManager.prototype.loadSavedLocale = function () {
  setTimeout(() => {
    this._setCurrentLocale(
      LocalStorageController.getSavedValue(Constants.Storage.LANGUAGE) ||
        LocalizationManager.getDefaultLocale()
    );
  }, 0);
};

LocalizationManager.prototype.update = function (dt) {};

LocalizationManager.prototype._setCurrentLocale = function (locale) {
  LocalizationManager._currentLocale = locale;
  this.app.i18n.locale = LocalizationManager._currentLocale;
  this.app.fire(
    EventTypes.LANGUAGE_CHANGED,
    LocalizationManager._currentLocale
  );
};

LocalizationManager.prototype.changeLocale = function (locale) {
  this._setCurrentLocale(locale);
  this.app.fire(EventTypes.SAVE_APP);
};

LocalizationManager.prototype.getCurrentLocale = function (locale) {
  return LocalizationManager._currentLocale;
};

LocalizationManager.prototype.getLocalizedText = function (
  textKey,
  ...replaceParams
) {
  let text = this.app.i18n.getText(textKey, this.getCurrentLocale());
  for (let i = 0; i < replaceParams.length; i++) {
    text = text.replace(`{${i}}`, replaceParams[i]);
  }
  return text;
};

/* Static */

LocalizationManager.getClientLanguage = function () {
  const language = navigator.language || "en-US";
  return language.substr(0, 2);
};

LocalizationManager.getDefaultLocale = function () {
  const clientLanguage = LocalizationManager.getClientLanguage();
  const availableTranslationKeys = Object.keys(
    pc.app.i18n._availableLangs
  ).filter((lang) => lang.indexOf(clientLanguage) >= 0);
  if (availableTranslationKeys.length > 0) {
    return pc.app.i18n._availableLangs[availableTranslationKeys[0]];
  } else {
    return Constants.DEFAULT_LOCALE;
  }
};

// loadingOverlay.js
/* jshint esversion: 6 */
var LoadingOverlay = pc.createScript("loadingOverlay");

LoadingOverlay.attributes.add("opacity", {
  type: "number",
  default: 0.5,
});

LoadingOverlay.prototype.initialize = function () {
  this.app.on(EventTypes.SHOW_LOADING_OVERLAY, this.showOverlay, this);
  this.app.on(EventTypes.HIDE_LOADING_OVERLAY, this.hideOverlay, this);

  this.assignEntityMethods();

  this.entity.enabled = false;
};

LoadingOverlay.prototype.assignEntityMethods = function () {
  const scriptContext = this;
  this.entity.show = function () {}.bind(this.entity);
  this.entity.hide = function () {}.bind(this.entity);
};

LoadingOverlay.prototype.update = function (dt) {};

LoadingOverlay.prototype.showOverlay = function (
  duration = 0.3,
  onCompleteCallback = null,
  splashColor = "#000000",
  showLoadingText = false
) {
  this.entity.enabled = true;
  this.entity.element.opacity = this.opacity;
  // this.entity.element.color = new pc.Color().fromString(splashColor);
};

LoadingOverlay.prototype.hideOverlay = function (
  duration = 0.3,
  onCompleteCallback = null
) {
  this.entity.enabled = false;
};

// copyrightText.js
var CopyrightText = pc.createScript("copyrightText");

CopyrightText.prototype.initialize = function () {
  this.entity.enabled = isCopyrightEnabled();
};

CopyrightText.prototype.update = function (dt) {};

// transparentUntilLoaded.js
/* jshint esversion: 6 */
var TransparentUntilLoaded = pc.createScript("transparentUntilLoaded");

TransparentUntilLoaded.prototype.initialize = function () {
  this.initialOpacity = this.entity.element.opacity;
};

TransparentUntilLoaded.prototype.update = function (dt) {
  if (this.entity.element.spriteAsset) {
    const assetResource = this.app.assets.get(this.entity.element.spriteAsset);
    if (!assetResource.loaded) {
      this.entity.element.opacity = 0.0;
      return;
    }

    if (
      !assetResource.resource ||
      !assetResource.resource.atlas ||
      !assetResource.resource.atlas.texture
    ) {
      this.entity.element.opacity = 0.0;
      return;
    } else {
      const textureAsset = this.app.assets.find(
        assetResource.resource.atlas.texture.name
      );
      if (textureAsset && !textureAsset.loaded) {
        this.entity.element.opacity = 0.0;
        return;
      }
    }

    this.entity.element.opacity = this.initialOpacity;
  }
};

// mobile-safe-area.js
var MobileSafeArea = pc.createScript("mobileSafeArea");
MobileSafeArea.attributes.add("debugConfig", {
  type: "json",
  name: "Debug Config",
  description:
    "Force safe areas to be applied to the UI. Useful testing layouts without a device.",
  schema: [
    {
      name: "enabled",
      type: "boolean",
      default: false,
    },
    {
      name: "top",
      type: "number",
      default: 0,
    },
    {
      name: "bottom",
      type: "number",
      default: 0,
    },
    {
      name: "left",
      type: "number",
      default: 0,
    },
    {
      name: "right",
      type: "number",
      default: 0,
    },
  ],
});

// Add the CSS needed to get the safe area values
// https://benfrain.com/how-to-get-the-value-of-phone-notches-environment-variables-env-in-javascript-from-css/
(function () {
  if (typeof document !== "undefined") {
    document.documentElement.style.setProperty(
      "--sat",
      "env(safe-area-inset-top)"
    );
    document.documentElement.style.setProperty(
      "--sab",
      "env(safe-area-inset-bottom)"
    );
    document.documentElement.style.setProperty(
      "--sal",
      "env(safe-area-inset-left)"
    );
    document.documentElement.style.setProperty(
      "--sar",
      "env(safe-area-inset-right)"
    );
  }
})();

// initialize code called once per entity
MobileSafeArea.prototype.initialize = function () {
  this.app.graphicsDevice.on("resizecanvas", this._onCanvasResize, this);

  this.on(
    "attr:debugConfig",
    function (value, prev) {
      this._safeAreaUpdate();
    },
    this
  );

  this.on(
    "destroy",
    function () {
      this.app.graphicsDevice.off("resizecanvas", this._onCanvasResize, this);
    },
    this
  );

  this._onCanvasResize();
};

MobileSafeArea.prototype._onCanvasResize = function () {
  // Reset the margins to get the element size
  this.entity.element.margin = pc.Vec4.ZERO;
  this._initialHeight = this.entity.element.height;
  this._initialWidth = this.entity.element.width;

  this._safeAreaUpdate();
};

MobileSafeArea.prototype._safeAreaUpdate = function () {
  var topPixels = 0;
  var bottomPixels = 0;
  var leftPixels = 0;
  var rightPixels = 0;

  if (this.debugConfig.enabled) {
    topPixels = this.debugConfig.top;
    bottomPixels = this.debugConfig.bottom;
    leftPixels = this.debugConfig.left;
    rightPixels = this.debugConfig.right;
  } else {
    // Getting the safe areas from CSS
    // https://benfrain.com/how-to-get-the-value-of-phone-notches-environment-variables-env-in-javascript-from-css/
    topPixels = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue("--sat")
    );
    bottomPixels = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue("--sab")
    );
    leftPixels = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue("--sal")
    );
    rightPixels = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue("--sar")
    );
  }

  var screenResHeight = window.innerHeight;
  var screenResWidth = window.innerWidth;

  // Get the % height/width to the screen height/width
  var topPercentage = topPixels / screenResHeight;
  var bottomPercentage = bottomPixels / screenResHeight;
  var leftPercentage = leftPixels / screenResWidth;
  var rightPercentage = rightPixels / screenResWidth;

  var topMargin = this._initialHeight * topPercentage;
  var bottomMargin = this._initialHeight * bottomPercentage;
  var leftMargin = this._initialWidth * leftPercentage;
  var rightMargin = this._initialWidth * rightPercentage;

  var margin = this.entity.element.margin;
  margin.x = leftMargin;
  margin.y = bottomMargin;
  margin.z = rightMargin;
  margin.w = topMargin;

  this.entity.element.margin = margin;
};

// InputBlocker.js
var InputBlocker = pc.createScript("inputBlocker");

InputBlocker.prototype.initialize = function () {
  this.app.on(EventTypes.BLOCK_INPUT, this.blockInput, this);
  this.app.on(EventTypes.UNBLOCK_INPUT, this.unblockInput, this);

  this.entity.enabled = false;
};

InputBlocker.prototype.update = function (dt) {};

InputBlocker.prototype.blockInput = function () {
  this.entity.enabled = true;
};

InputBlocker.prototype.unblockInput = function () {
  this.entity.enabled = false;
};
