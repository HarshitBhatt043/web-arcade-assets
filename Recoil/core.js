!(function (e) {
  var i = {};
  function r(t) {
    if (i[t]) return i[t].exports;
    var n = (i[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = e),
    (r.c = i),
    (r.d = function (t, n, e) {
      r.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: e });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (n, t) {
      if ((1 & t && (n = r(n)), 8 & t)) return n;
      if (4 & t && "object" == typeof n && n && n.__esModule) return n;
      var e = Object.create(null);
      if (
        (r.r(e),
        Object.defineProperty(e, "default", { enumerable: !0, value: n }),
        2 & t && "string" != typeof n)
      )
        for (var i in n)
          r.d(
            e,
            i,
            function (t) {
              return n[t];
            }.bind(null, i)
          );
      return e;
    }),
    (r.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(n, "a", n), n;
    }),
    (r.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (r.p = ""),
    r((r.s = 110));
})([
  function (e, t, n) {
    (function (t) {
      function n(t) {
        return t && t.Math == Math && t;
      }
      e.exports =
        n("object" == typeof globalThis && globalThis) ||
        n("object" == typeof window && window) ||
        n("object" == typeof self && self) ||
        n("object" == typeof t && t) ||
        Function("return this")();
    }).call(this, n(37));
  },
  function (t, n, e) {
    var i = e(0),
      r = e(43),
      o = e(3),
      a = e(44),
      s = e(51),
      e = e(80),
      d = r("wks"),
      c = i.Symbol,
      u = e ? c : (c && c.withoutSetter) || a;
    t.exports = function (t) {
      return (
        o(d, t) || (s && o(c, t) ? (d[t] = c[t]) : (d[t] = u("Symbol." + t))),
        d[t]
      );
    };
  },
  function (t, n) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, n) {
    var e = {}.hasOwnProperty;
    t.exports = function (t, n) {
      return e.call(t, n);
    };
  },
  function (t, n, e) {
    var i = e(8);
    t.exports = function (t) {
      if (!i(t)) throw TypeError(String(t) + " is not an object");
      return t;
    };
  },
  function (t, n, e) {
    var c = e(0),
      u = e(23).f,
      l = e(7),
      A = e(12),
      m = e(26),
      p = e(72),
      f = e(48);
    t.exports = function (t, n) {
      var e,
        i,
        r,
        o,
        a = t.target,
        s = t.global,
        d = t.stat;
      if ((e = s ? c : d ? c[a] || m(a, {}) : (c[a] || {}).prototype))
        for (i in n) {
          if (
            ((r = n[i]),
            (o = t.noTargetGet ? (o = u(e, i)) && o.value : e[i]),
            !f(s ? i : a + (d ? "." : "#") + i, t.forced) && void 0 !== o)
          ) {
            if (typeof r == typeof o) continue;
            p(r, o);
          }
          (t.sham || (o && o.sham)) && l(r, "sham", !0), A(e, i, r, t);
        }
    };
  },
  function (t, n, e) {
    e = e(2);
    t.exports = !e(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  function (t, n, e) {
    var i = e(6),
      r = e(9),
      o = e(19);
    t.exports = i
      ? function (t, n, e) {
          return r.f(t, n, o(1, e));
        }
      : function (t, n, e) {
          return (t[n] = e), t;
        };
  },
  function (t, n) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  },
  function (t, n, e) {
    var i = e(6),
      r = e(41),
      o = e(4),
      a = e(40),
      s = Object.defineProperty;
    n.f = i
      ? s
      : function (t, n, e) {
          if ((o(t), (n = a(n, !0)), o(e), r))
            try {
              return s(t, n, e);
            } catch (t) {}
          if ("get" in e || "set" in e)
            throw TypeError("Accessors not supported");
          return "value" in e && (t[n] = e.value), t;
        };
  },
  function (t, n, e) {
    function i(t) {
      return "function" == typeof t ? t : void 0;
    }
    var r = e(30),
      o = e(0);
    t.exports = function (t, n) {
      return arguments.length < 2
        ? i(r[t]) || i(o[t])
        : (r[t] && r[t][n]) || (o[t] && o[t][n]);
    };
  },
  function (_, B, t) {
    (function (t) {
      var n, g, l, e, i, c, r, u, o, a, s, A;
      function h(t) {
        if ("string" != typeof t) return [];
        if (!C(r, t)) {
          var n = "",
            e = "";
          try {
            e = g.document.domain;
          } catch (t) {}
          var i = /(.*)\:\/\/([^:\/]+)([:\d]*)\/{0,1}([\s\S]*)/.exec(t);
          i &&
            i[2] === e &&
            (n = (function (t) {
              if (!l.remoteFetching) return "";
              try {
                var n = (function () {
                  try {
                    return new g.XMLHttpRequest();
                  } catch (t) {
                    return new g.ActiveXObject("Microsoft.XMLHTTP");
                  }
                })();
                return n.open("GET", t, !1), n.send(""), n.responseText;
              } catch (t) {
                return "";
              }
            })(t)),
            (r[t] = n ? n.split("\n") : []);
        }
        return r[t];
      }
      function w(t, n) {
        var e,
          i = /function ([^(]*)\(([^)]*)\)/,
          r =
            /['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,
          o = "",
          a = h(t);
        if (!a.length) return "?";
        for (var s = 0; s < 10; ++s)
          if (!I((o = a[n - s] + o))) {
            if ((e = r.exec(o))) return e[1];
            if ((e = i.exec(o))) return e[1];
          }
        return "?";
      }
      function y(t, n) {
        var e = h(t);
        if (!e.length) return null;
        var i = [],
          r = Math.floor(l.linesOfContext / 2),
          t = r + (l.linesOfContext % 2),
          r = Math.max(0, n - r - 1),
          o = Math.min(e.length, n + t - 1);
        --n;
        for (var a = r; a < o; ++a) I(e[a]) || i.push(e[a]);
        return 0 < i.length ? i : null;
      }
      function m(t) {
        return t.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, "\\$&");
      }
      function b(t) {
        return m(t)
          .replace("<", "(?:<|&lt;)")
          .replace(">", "(?:>|&gt;)")
          .replace("&", "(?:&|&amp;)")
          .replace('"', '(?:"|&quot;)')
          .replace(/\s+/g, "\\s+");
      }
      function k(t, n) {
        for (var e, i, r = 0, o = n.length; r < o; ++r)
          if ((e = h(n[r])).length && ((e = e.join("\n")), (i = t.exec(e))))
            return {
              url: n[r],
              line: e.substring(0, i.index).split("\n").length,
              column: i.index - e.lastIndexOf("\n", i.index) - 1,
            };
        return null;
      }
      function p(t, n, e) {
        var i,
          n = h(n),
          t = new RegExp("\\b" + m(t) + "\\b");
        return --e, n && n.length > e && (i = t.exec(n[e])) ? i.index : null;
      }
      function d(t) {
        if (!t.stack) return null;
        for (
          var n,
            e,
            i =
              /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
            r =
              /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
            o =
              /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
            a = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
            s = /\((\S*)(?::(\d+))(?::(\d+))\)/,
            d = t.stack.split("\n"),
            c = [],
            u = /^(.*) is undefined$/.exec(t.message),
            l = 0,
            A = d.length;
          l < A;
          ++l
        ) {
          if ((e = i.exec(d[l]))) {
            var m = e[2] && 0 === e[2].indexOf("native");
            e[2] &&
              0 === e[2].indexOf("eval") &&
              (n = s.exec(e[2])) &&
              ((e[2] = n[1]), (e[3] = n[2]), (e[4] = n[3])),
              (m = {
                url: m ? null : e[2],
                func: e[1] || "?",
                args: m ? [e[2]] : [],
                line: e[3] ? +e[3] : null,
                column: e[4] ? +e[4] : null,
              });
          } else if ((e = o.exec(d[l])))
            m = {
              url: e[2],
              func: e[1] || "?",
              args: [],
              line: +e[3],
              column: e[4] ? +e[4] : null,
            };
          else {
            if (!(e = r.exec(d[l]))) continue;
            e[3] && -1 < e[3].indexOf(" > eval") && (n = a.exec(e[3]))
              ? ((e[3] = n[1]), (e[4] = n[2]), (e[5] = null))
              : 0 !== l ||
                e[5] ||
                I(t.columnNumber) ||
                (c[0].column = t.columnNumber + 1),
              (m = {
                url: e[3],
                func: e[1] || "?",
                args: e[2] ? e[2].split(",") : [],
                line: e[4] ? +e[4] : null,
                column: e[5] ? +e[5] : null,
              });
          }
          !m.func && m.line && (m.func = w(m.url, m.line)),
            (m.context = m.line ? y(m.url, m.line) : null),
            c.push(m);
        }
        return c.length
          ? (c[0] &&
              c[0].line &&
              !c[0].column &&
              u &&
              (c[0].column = p(u[1], c[0].url, c[0].line)),
            { mode: "stack", name: t.name, message: t.message, stack: c })
          : null;
      }
      function f(t, n, e, i) {
        e = { url: n, line: e };
        if (e.url && e.line) {
          (t.incomplete = !1),
            e.func || (e.func = w(e.url, e.line)),
            e.context || (e.context = y(e.url, e.line));
          i = / '([^']+)' /.exec(i);
          if (
            (i && (e.column = p(i[1], e.url, e.line)),
            0 < t.stack.length && t.stack[0].url === e.url)
          ) {
            if (t.stack[0].line === e.line) return !1;
            if (!t.stack[0].line && t.stack[0].func === e.func)
              return (
                (t.stack[0].line = e.line), (t.stack[0].context = e.context), !1
              );
          }
          return t.stack.unshift(e), (t.partial = !0);
        }
        return !(t.incomplete = !0);
      }
      function v(t, n) {
        for (
          var e,
            i,
            r,
            o,
            a =
              /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
            s = [],
            d = {},
            c = !1,
            u = v.caller;
          u && !c;
          u = u.caller
        )
          if (u !== S && u !== l.report) {
            if (
              ((i = {
                url: null,
                func: "?",
                args: [],
                line: null,
                column: null,
              }),
              u.name
                ? (i.func = u.name)
                : (e = a.exec(u.toString())) && (i.func = e[1]),
              void 0 === i.func)
            )
              try {
                i.func = e.input.substring(0, e.input.indexOf("{"));
              } catch (t) {}
            (r = (function (t) {
              if (!I(g && g.document)) {
                for (
                  var n,
                    e,
                    i,
                    r = [g.location.href],
                    o = g.document.getElementsByTagName("script"),
                    a = "" + t,
                    s = 0;
                  s < o.length;
                  ++s
                ) {
                  var d = o[s];
                  d.src && r.push(d.src);
                }
                if (
                  (e = k(
                    (n =
                      /^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(
                        a
                      ))
                      ? ((t = n[1] ? "\\s+" + n[1] : ""),
                        (e = n[2].split(",").join("\\s*,\\s*")),
                        (i = m(n[3]).replace(/;$/, ";?")),
                        new RegExp(
                          "function" +
                            t +
                            "\\s*\\(\\s*" +
                            e +
                            "\\s*\\)\\s*{\\s*" +
                            i +
                            "\\s*}"
                        ))
                      : new RegExp(m(a).replace(/\s+/g, "\\s+")),
                    r
                  ))
                )
                  return e;
                if (
                  (n =
                    /^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(
                      a
                    ))
                ) {
                  a = n[1];
                  if (
                    ((i = b(n[2])),
                    (e = k(
                      new RegExp(
                        "on" + a + "=[\\'\"]\\s*" + i + "\\s*[\\'\"]",
                        "i"
                      ),
                      r[0]
                    )))
                  )
                    return e;
                  if ((e = k(new RegExp(i), r))) return e;
                }
                return null;
              }
            })(u)) &&
              ((i.url = r.url),
              (i.line = r.line),
              "?" === i.func && (i.func = w(i.url, i.line)),
              (o = / '([^']+)' /.exec(t.message || t.description)) &&
                (i.column = p(o[1], r.url, r.line))),
              d["" + u] ? (c = !0) : (d["" + u] = !0),
              s.push(i);
          }
        n && s.splice(0, n);
        n = { mode: "callers", name: t.name, message: t.message, stack: s };
        return (
          f(
            n,
            t.sourceURL || t.fileName,
            t.line || t.lineNumber,
            t.message || t.description
          ),
          n
        );
      }
      function S(t, n) {
        var e = null;
        n = null == n ? 0 : +n;
        try {
          if (
            (e = (function (t) {
              var n = t.stacktrace;
              if (n) {
                for (
                  var e,
                    i =
                      / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
                    r =
                      / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i,
                    o = n.split("\n"),
                    a = [],
                    s = 0;
                  s < o.length;
                  s += 2
                ) {
                  var d = null;
                  if (
                    ((e = i.exec(o[s]))
                      ? (d = {
                          url: e[2],
                          line: +e[1],
                          column: null,
                          func: e[3],
                          args: [],
                        })
                      : (e = r.exec(o[s])) &&
                        (d = {
                          url: e[6],
                          line: +e[1],
                          column: +e[2],
                          func: e[3] || e[4],
                          args: e[5] ? e[5].split(",") : [],
                        }),
                    d)
                  ) {
                    if (
                      (!d.func && d.line && (d.func = w(d.url, d.line)), d.line)
                    )
                      try {
                        d.context = y(d.url, d.line);
                      } catch (t) {}
                    d.context || (d.context = [o[s + 1]]), a.push(d);
                  }
                }
                return a.length
                  ? {
                      mode: "stacktrace",
                      name: t.name,
                      message: t.message,
                      stack: a,
                    }
                  : null;
              }
            })(t))
          )
            return e;
        } catch (t) {}
        try {
          if ((e = d(t))) return e;
        } catch (t) {}
        try {
          if (
            (e = (function (t) {
              var n = t.message.split("\n");
              if (n.length < 4) return null;
              var e,
                i =
                  /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                r =
                  /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                o = /^\s*Line (\d+) of function script\s*$/i,
                a = [],
                s =
                  g && g.document && g.document.getElementsByTagName("script"),
                d = [];
              for (e in s) C(s, e) && !s[e].src && d.push(s[e]);
              for (var c = 2; c < n.length; c += 2) {
                var u,
                  l,
                  A,
                  m,
                  p,
                  f = null;
                (p = i.exec(n[c]))
                  ? (f = {
                      url: p[2],
                      func: p[3],
                      args: [],
                      line: +p[1],
                      column: null,
                    })
                  : (p = r.exec(n[c]))
                  ? ((f = {
                      url: p[3],
                      func: p[4],
                      args: [],
                      line: +p[1],
                      column: null,
                    }),
                    (u = +p[1]),
                    (A = d[p[2] - 1]) &&
                      (!(l = h(f.url)) ||
                        (0 <= (A = (l = l.join("\n")).indexOf(A.innerText)) &&
                          (f.line = u + l.substring(0, A).split("\n").length))))
                  : (p = o.exec(n[c])) &&
                    (f = {
                      url: (m = g.location.href.replace(/#.*$/, "")),
                      func: "",
                      args: [],
                      line: (m = k(new RegExp(b(n[c + 1])), [m]))
                        ? m.line
                        : p[1],
                      column: null,
                    }),
                  f &&
                    (f.func || (f.func = w(f.url, f.line)),
                    (p = (m = y(f.url, f.line))
                      ? m[Math.floor(m.length / 2)]
                      : null),
                    m && p.replace(/^\s*/, "") === n[c + 1].replace(/^\s*/, "")
                      ? (f.context = m)
                      : (f.context = [n[c + 1]]),
                    a.push(f));
              }
              return a.length
                ? { mode: "multiline", name: t.name, message: n[0], stack: a }
                : null;
            })(t))
          )
            return e;
        } catch (t) {}
        try {
          if ((e = v(t, n + 1))) return e;
        } catch (t) {}
        return { name: t.name, message: t.message, mode: "failed" };
      }
      function E(t, n, e) {
        var i = null;
        if (!n || l.collectWindowErrors) {
          for (var r in a)
            if (C(a, r))
              try {
                a[r](t, n, e);
              } catch (t) {
                i = t;
              }
          if (i) throw i;
        }
      }
      function x(t, n, e, i, r) {
        var o, a, s, d;
        return (
          A
            ? (l.computeStackTrace.augmentStackTraceWithInitialElement(
                A,
                n,
                e,
                t
              ),
              T())
            : r
            ? E(l.computeStackTrace(r), !0, r)
            : ((a = { url: n, line: e, column: i }),
              (s = t),
              "[object String]" !== {}.toString.call(t) ||
                ((d = t.match(c)) && ((o = d[1]), (s = d[2]))),
              (a.func = l.computeStackTrace.guessFunctionName(a.url, a.line)),
              (a.context = l.computeStackTrace.gatherContext(a.url, a.line)),
              E(
                { name: o, message: s, mode: "onerror", stack: [a] },
                !0,
                null
              )),
          !!u && u.apply(this, arguments)
        );
      }
      function T() {
        var t = A,
          n = s;
        (s = A = null), E(t, !1, n);
      }
      function z(t) {
        if (A) {
          if (s === t) return;
          T();
        }
        var n = l.computeStackTrace(t);
        throw (
          ((A = n),
          (s = t),
          setTimeout(
            function () {
              s === t && T();
            },
            n.incomplete ? 2e3 : 0
          ),
          t)
        );
      }
      function C(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }
      function I(t) {
        return void 0 === t;
      }
      (g = "undefined" != typeof window ? window : t) &&
        ((l = {}),
        (e = g.TraceKit),
        (i = [].slice),
        (c =
          /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/),
        (l.noConflict = function () {
          return (g.TraceKit = e), l;
        }),
        (l.wrap = function (t) {
          return function () {
            try {
              return t.apply(this, arguments);
            } catch (t) {
              throw (l.report(t), t);
            }
          };
        }),
        (l.report =
          ((a = []),
          (A = s = null),
          (z.subscribe = function (t) {
            !0 !== o && ((u = g.onerror), (g.onerror = x), (o = !0)), a.push(t);
          }),
          (z.unsubscribe = function (t) {
            for (var n = a.length - 1; 0 <= n; --n)
              a[n] === t && a.splice(n, 1);
            0 === a.length && ((g.onerror = u), (o = !1));
          }),
          z)),
        (l.computeStackTrace =
          ((r = {}),
          (S.augmentStackTraceWithInitialElement = f),
          (S.computeStackTraceFromStackProp = d),
          (S.guessFunctionName = w),
          (S.gatherContext = y),
          (S.ofCaller = function (n) {
            n = 1 + (null == n ? 0 : +n);
            try {
              throw new Error();
            } catch (t) {
              return S(t, n + 1);
            }
          }),
          (S.getSource = h),
          S)),
        (l.extendToAsynchronousCallbacks = function () {
          function t(t) {
            var e = g[t];
            g[t] = function () {
              var t = i.call(arguments),
                n = t[0];
              return (
                "function" == typeof n && (t[0] = l.wrap(n)),
                e.apply ? e.apply(this, t) : e(t[0], t[1])
              );
            };
          }
          t("setTimeout"), t("setInterval");
        }),
        l.remoteFetching || (l.remoteFetching = !0),
        l.collectWindowErrors || (l.collectWindowErrors = !0),
        (!l.linesOfContext || l.linesOfContext < 1) && (l.linesOfContext = 11),
        (n = []),
        void 0 === (t = "function" == typeof (t = l) ? t.apply(B, n) : t) ||
          (_.exports = t));
    }).call(this, t(37));
  },
  function (t, n, e) {
    var a = e(0),
      s = e(7),
      d = e(3),
      c = e(26),
      i = e(27),
      e = e(15),
      r = e.get,
      u = e.enforce,
      l = String(String).split("String");
    (t.exports = function (t, n, e, i) {
      var r = !!i && !!i.unsafe,
        o = !!i && !!i.enumerable,
        i = !!i && !!i.noTargetGet;
      "function" == typeof e &&
        ("string" != typeof n || d(e, "name") || s(e, "name", n),
        (u(e).source = l.join("string" == typeof n ? n : ""))),
        t !== a
          ? (r ? !i && t[n] && (o = !0) : delete t[n],
            o ? (t[n] = e) : s(t, n, e))
          : o
          ? (t[n] = e)
          : c(n, e);
    })(Function.prototype, "toString", function () {
      return ("function" == typeof this && r(this).source) || i(this);
    });
  },
  function (t, n) {
    t.exports = function (t) {
      if ("function" != typeof t)
        throw TypeError(String(t) + " is not a function");
      return t;
    };
  },
  function (t, n) {
    var e = {}.toString;
    t.exports = function (t) {
      return e.call(t).slice(8, -1);
    };
  },
  function (t, n, e) {
    var i,
      r,
      o,
      a,
      s,
      d,
      c,
      u,
      l = e(71),
      A = e(0),
      m = e(8),
      p = e(7),
      f = e(3),
      g = e(28),
      e = e(29),
      A = A.WeakMap;
    (c = l
      ? ((i = new A()),
        (r = i.get),
        (o = i.has),
        (a = i.set),
        (s = function (t, n) {
          return a.call(i, t, n), n;
        }),
        (d = function (t) {
          return r.call(i, t) || {};
        }),
        function (t) {
          return o.call(i, t);
        })
      : ((e[(u = g("state"))] = !0),
        (s = function (t, n) {
          return p(t, u, n), n;
        }),
        (d = function (t) {
          return f(t, u) ? t[u] : {};
        }),
        function (t) {
          return f(t, u);
        })),
      (t.exports = {
        set: s,
        get: d,
        has: c,
        enforce: function (t) {
          return c(t) ? d(t) : s(t, {});
        },
        getterFor: function (e) {
          return function (t) {
            var n;
            if (!m(t) || (n = d(t)).type !== e)
              throw TypeError("Incompatible receiver, " + e + " required");
            return n;
          };
        },
      });
  },
  function (t, n) {
    t.exports = !1;
  },
  function (t, n) {
    t.exports = {};
  },
  function (t, n, e) {
    "use strict";
    function i(t) {
      var e, i;
      (this.promise = new t(function (t, n) {
        if (void 0 !== e || void 0 !== i)
          throw TypeError("Bad Promise constructor");
        (e = t), (i = n);
      })),
        (this.resolve = r(e)),
        (this.reject = r(i));
    }
    var r = e(13);
    t.exports.f = function (t) {
      return new i(t);
    };
  },
  function (t, n) {
    t.exports = function (t, n) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: n,
      };
    };
  },
  function (t, n, e) {
    var i = e(39),
      r = e(24);
    t.exports = function (t) {
      return i(r(t));
    };
  },
  function (t, n, e) {
    function A(t, n) {
      (this.stopped = t), (this.result = n);
    }
    var m = e(4),
      p = e(96),
      f = e(46),
      g = e(58),
      h = e(97),
      w = e(98);
    (t.exports = function (t, n, e, i, r) {
      var o,
        a,
        s,
        d,
        c,
        u,
        l = g(n, e, i ? 2 : 1);
      if (r) o = t;
      else {
        if ("function" != typeof (r = h(t)))
          throw TypeError("Target is not iterable");
        if (p(r)) {
          for (a = 0, s = f(t.length); a < s; a++)
            if ((d = i ? l(m((u = t[a]))[0], u[1]) : l(t[a])) && d instanceof A)
              return d;
          return new A(!1);
        }
        o = r.call(t);
      }
      for (c = o.next; !(u = c.call(o)).done; )
        if ("object" == typeof (d = w(o, l, u.value, i)) && d && d instanceof A)
          return d;
      return new A(!1);
    }).stop = function (t) {
      return new A(!0, t);
    };
  },
  function (t, n) {
    t.exports = function (t) {
      try {
        return { error: !1, value: t() };
      } catch (t) {
        return { error: !0, value: t };
      }
    };
  },
  function (t, n, e) {
    var i = e(6),
      r = e(38),
      o = e(19),
      a = e(20),
      s = e(40),
      d = e(3),
      c = e(41),
      u = Object.getOwnPropertyDescriptor;
    n.f = i
      ? u
      : function (t, n) {
          if (((t = a(t)), (n = s(n, !0)), c))
            try {
              return u(t, n);
            } catch (t) {}
          if (d(t, n)) return o(!r.f.call(t, n), t[n]);
        };
  },
  function (t, n) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    };
  },
  function (t, n, e) {
    var i = e(0),
      e = e(8),
      r = i.document,
      o = e(r) && e(r.createElement);
    t.exports = function (t) {
      return o ? r.createElement(t) : {};
    };
  },
  function (t, n, e) {
    var i = e(0),
      r = e(7);
    t.exports = function (n, e) {
      try {
        r(i, n, e);
      } catch (t) {
        i[n] = e;
      }
      return e;
    };
  },
  function (t, n, e) {
    var e = e(42),
      i = Function.toString;
    "function" != typeof e.inspectSource &&
      (e.inspectSource = function (t) {
        return i.call(t);
      }),
      (t.exports = e.inspectSource);
  },
  function (t, n, e) {
    var i = e(43),
      r = e(44),
      o = i("keys");
    t.exports = function (t) {
      return o[t] || (o[t] = r(t));
    };
  },
  function (t, n) {
    t.exports = {};
  },
  function (t, n, e) {
    e = e(0);
    t.exports = e;
  },
  function (t, n) {
    var e = Math.ceil,
      i = Math.floor;
    t.exports = function (t) {
      return isNaN((t = +t)) ? 0 : (0 < t ? i : e)(t);
    };
  },
  function (t, n) {
    t.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  function (t, n, e) {
    var i = {};
    (i[e(1)("toStringTag")] = "z"), (t.exports = "[object z]" === String(i));
  },
  function (t, n, e) {
    var i = e(3),
      r = e(50),
      o = e(28),
      e = e(85),
      a = o("IE_PROTO"),
      s = Object.prototype;
    t.exports = e
      ? Object.getPrototypeOf
      : function (t) {
          return (
            (t = r(t)),
            i(t, a)
              ? t[a]
              : "function" == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? s
              : null
          );
        };
  },
  function (t, n, e) {
    function i() {}
    function r(t) {
      return "<script>" + t + "</script>";
    }
    var o,
      a = e(4),
      s = e(86),
      d = e(32),
      c = e(29),
      u = e(55),
      l = e(25),
      A = e(28)("IE_PROTO"),
      m = function () {
        try {
          o = document.domain && new ActiveXObject("htmlfile");
        } catch (t) {}
        var t, n;
        m = o
          ? (function (t) {
              t.write(r("")), t.close();
              var n = t.parentWindow.Object;
              return (t = null), n;
            })(o)
          : (((n = l("iframe")).style.display = "none"),
            u.appendChild(n),
            (n.src = String("javascript:")),
            (t = n.contentWindow.document).open(),
            t.write(r("document.F=Object")),
            t.close(),
            t.F);
        for (var e = d.length; e--; ) delete m.prototype[d[e]];
        return m();
      };
    (c[A] = !0),
      (t.exports =
        Object.create ||
        function (t, n) {
          var e;
          return (
            null !== t
              ? ((i.prototype = a(t)),
                (e = new i()),
                (i.prototype = null),
                (e[A] = t))
              : (e = m()),
            void 0 === n ? e : s(e, n)
          );
        });
  },
  function (t, n, e) {
    var i = e(9).f,
      r = e(3),
      o = e(1)("toStringTag");
    t.exports = function (t, n, e) {
      t &&
        !r((t = e ? t : t.prototype), o) &&
        i(t, o, { configurable: !0, value: n });
    };
  },
  function (t, n) {
    var e = (function () {
      return this;
    })();
    try {
      e = e || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (e = window);
    }
    t.exports = e;
  },
  function (t, n, e) {
    "use strict";
    var i = {}.propertyIsEnumerable,
      r = Object.getOwnPropertyDescriptor,
      o = r && !i.call({ 1: 2 }, 1);
    n.f = o
      ? function (t) {
          t = r(this, t);
          return !!t && t.enumerable;
        }
      : i;
  },
  function (t, n, e) {
    var i = e(2),
      r = e(14),
      o = "".split;
    t.exports = i(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == r(t) ? o.call(t, "") : Object(t);
        }
      : Object;
  },
  function (t, n, e) {
    var r = e(8);
    t.exports = function (t, n) {
      if (!r(t)) return t;
      var e, i;
      if (n && "function" == typeof (e = t.toString) && !r((i = e.call(t))))
        return i;
      if ("function" == typeof (e = t.valueOf) && !r((i = e.call(t)))) return i;
      if (!n && "function" == typeof (e = t.toString) && !r((i = e.call(t))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (t, n, e) {
    var i = e(6),
      r = e(2),
      o = e(25);
    t.exports =
      !i &&
      !r(function () {
        return (
          7 !=
          Object.defineProperty(o("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, n, e) {
    var i = e(0),
      e = e(26),
      e = i["__core-js_shared__"] || e("__core-js_shared__", {});
    t.exports = e;
  },
  function (t, n, e) {
    var i = e(16),
      r = e(42);
    (t.exports = function (t, n) {
      return r[t] || (r[t] = void 0 !== n ? n : {});
    })("versions", []).push({
      version: "3.6.5",
      mode: i ? "pure" : "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (t, n) {
    var e = 0,
      i = Math.random();
    t.exports = function (t) {
      return (
        "Symbol(" +
        String(void 0 === t ? "" : t) +
        ")_" +
        (++e + i).toString(36)
      );
    };
  },
  function (t, n, e) {
    var a = e(3),
      s = e(20),
      d = e(75).indexOf,
      c = e(29);
    t.exports = function (t, n) {
      var e,
        i = s(t),
        r = 0,
        o = [];
      for (e in i) !a(c, e) && a(i, e) && o.push(e);
      for (; n.length > r; ) a(i, (e = n[r++])) && (~d(o, e) || o.push(e));
      return o;
    };
  },
  function (t, n, e) {
    var i = e(31),
      r = Math.min;
    t.exports = function (t) {
      return 0 < t ? r(i(t), 9007199254740991) : 0;
    };
  },
  function (t, n) {
    n.f = Object.getOwnPropertySymbols;
  },
  function (t, n, e) {
    var i = e(2),
      r = /#|\.prototype\./,
      e = function (t, n) {
        t = a[o(t)];
        return t == d || (t != s && ("function" == typeof n ? i(n) : !!n));
      },
      o = (e.normalize = function (t) {
        return String(t).replace(r, ".").toLowerCase();
      }),
      a = (e.data = {}),
      s = (e.NATIVE = "N"),
      d = (e.POLYFILL = "P");
    t.exports = e;
  },
  function (t, n, e) {
    var i = e(45),
      r = e(32);
    t.exports =
      Object.keys ||
      function (t) {
        return i(t, r);
      };
  },
  function (t, n, e) {
    var i = e(24);
    t.exports = function (t) {
      return Object(i(t));
    };
  },
  function (t, n, e) {
    e = e(2);
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !e(function () {
        return !String(Symbol());
      });
  },
  function (t, n, e) {
    var i = e(33),
      r = e(14),
      o = e(1)("toStringTag"),
      a =
        "Arguments" ==
        r(
          (function () {
            return arguments;
          })()
        );
    t.exports = i
      ? r
      : function (t) {
          var n;
          return void 0 === t
            ? "Undefined"
            : null === t
            ? "Null"
            : "string" ==
              typeof (t = (function (t, n) {
                try {
                  return t[n];
                } catch (t) {}
              })((n = Object(t)), o))
            ? t
            : a
            ? r(n)
            : "Object" == (t = r(n)) && "function" == typeof n.callee
            ? "Arguments"
            : t;
        };
  },
  function (t, n, e) {
    "use strict";
    function f() {
      return this;
    }
    var g = e(5),
      h = e(84),
      w = e(34),
      y = e(56),
      b = e(36),
      k = e(7),
      v = e(12),
      i = e(1),
      S = e(16),
      E = e(17),
      e = e(54),
      x = e.IteratorPrototype,
      T = e.BUGGY_SAFARI_ITERATORS,
      z = i("iterator");
    t.exports = function (t, n, e, i, r, o, a) {
      h(e, n, i);
      function s(t) {
        if (t === r && p) return p;
        if (!T && t in A) return A[t];
        switch (t) {
          case "keys":
          case "values":
          case "entries":
            return function () {
              return new e(this, t);
            };
        }
        return function () {
          return new e(this);
        };
      }
      var d,
        c,
        u = n + " Iterator",
        l = !1,
        A = t.prototype,
        m = A[z] || A["@@iterator"] || (r && A[r]),
        p = (!T && m) || s(r),
        i = ("Array" == n && A.entries) || m;
      if (
        (i &&
          ((t = w(i.call(new t()))),
          x !== Object.prototype &&
            t.next &&
            (S ||
              w(t) === x ||
              (y ? y(t, x) : "function" != typeof t[z] && k(t, z, f)),
            b(t, u, !0, !0),
            S && (E[u] = f))),
        "values" == r &&
          m &&
          "values" !== m.name &&
          ((l = !0),
          (p = function () {
            return m.call(this);
          })),
        (S && !a) || A[z] === p || k(A, z, p),
        (E[n] = p),
        r)
      )
        if (
          ((d = {
            values: s("values"),
            keys: o ? p : s("keys"),
            entries: s("entries"),
          }),
          a)
        )
          for (c in d) (!T && !l && c in A) || v(A, c, d[c]);
        else g({ target: n, proto: !0, forced: T || l }, d);
      return d;
    };
  },
  function (t, n, e) {
    "use strict";
    var i,
      r = e(34),
      o = e(7),
      a = e(3),
      s = e(1),
      d = e(16),
      c = s("iterator"),
      e = !1;
    [].keys &&
      ("next" in (s = [].keys())
        ? (s = r(r(s))) !== Object.prototype && (i = s)
        : (e = !0)),
      null == i && (i = {}),
      d ||
        a(i, c) ||
        o(i, c, function () {
          return this;
        }),
      (t.exports = { IteratorPrototype: i, BUGGY_SAFARI_ITERATORS: e });
  },
  function (t, n, e) {
    e = e(10);
    t.exports = e("document", "documentElement");
  },
  function (t, n, e) {
    var r = e(4),
      o = e(87);
    t.exports =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var e,
              i = !1,
              t = {};
            try {
              (e = Object.getOwnPropertyDescriptor(
                Object.prototype,
                "__proto__"
              ).set).call(t, []),
                (i = t instanceof Array);
            } catch (e) {}
            return function (t, n) {
              return r(t), o(n), i ? e.call(t, n) : (t.__proto__ = n), t;
            };
          })()
        : void 0);
  },
  function (t, n, e) {
    e = e(0);
    t.exports = e.Promise;
  },
  function (t, n, e) {
    var o = e(13);
    t.exports = function (i, r, t) {
      if ((o(i), void 0 === r)) return i;
      switch (t) {
        case 0:
          return function () {
            return i.call(r);
          };
        case 1:
          return function (t) {
            return i.call(r, t);
          };
        case 2:
          return function (t, n) {
            return i.call(r, t, n);
          };
        case 3:
          return function (t, n, e) {
            return i.call(r, t, n, e);
          };
      }
      return function () {
        return i.apply(r, arguments);
      };
    };
  },
  function (t, n, e) {
    var i = e(4),
      r = e(13),
      o = e(1)("species");
    t.exports = function (t, n) {
      var e,
        t = i(t).constructor;
      return void 0 === t || null == (e = i(t)[o]) ? n : r(e);
    };
  },
  function (t, n, e) {
    function i(t) {
      var n;
      k.hasOwnProperty(t) && ((n = k[t]), delete k[t], n());
    }
    function r(t) {
      return function () {
        i(t);
      };
    }
    function o(t) {
      i(t.data);
    }
    var a,
      s = e(0),
      d = e(2),
      c = e(14),
      u = e(58),
      l = e(55),
      A = e(25),
      m = e(61),
      p = s.location,
      f = s.setImmediate,
      g = s.clearImmediate,
      h = s.process,
      w = s.MessageChannel,
      y = s.Dispatch,
      b = 0,
      k = {},
      e = function (t) {
        s.postMessage(t + "", p.protocol + "//" + p.host);
      };
    (f && g) ||
      ((f = function (t) {
        for (var n = [], e = 1; e < arguments.length; ) n.push(arguments[e++]);
        return (
          (k[++b] = function () {
            ("function" == typeof t ? t : Function(t)).apply(void 0, n);
          }),
          a(b),
          b
        );
      }),
      (g = function (t) {
        delete k[t];
      }),
      "process" == c(h)
        ? (a = function (t) {
            h.nextTick(r(t));
          })
        : y && y.now
        ? (a = function (t) {
            y.now(r(t));
          })
        : w && !m
        ? ((w = (m = new w()).port2),
          (m.port1.onmessage = o),
          (a = u(w.postMessage, w, 1)))
        : !s.addEventListener ||
          "function" != typeof postMessage ||
          s.importScripts ||
          d(e) ||
          "file:" === p.protocol
        ? (a =
            "onreadystatechange" in A("script")
              ? function (t) {
                  l.appendChild(A("script")).onreadystatechange = function () {
                    l.removeChild(this), i(t);
                  };
                }
              : function (t) {
                  setTimeout(r(t), 0);
                })
        : ((a = e), s.addEventListener("message", o, !1))),
      (t.exports = { set: f, clear: g });
  },
  function (t, n, e) {
    e = e(62);
    t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(e);
  },
  function (t, n, e) {
    e = e(10);
    t.exports = e("navigator", "userAgent") || "";
  },
  function (t, n, e) {
    var i = e(4),
      r = e(8),
      o = e(18);
    t.exports = function (t, n) {
      if ((i(t), r(n) && n.constructor === t)) return n;
      t = o.f(t);
      return (0, t.resolve)(n), t.promise;
    };
  },
  function (t, n, e) {
    "use strict";
    var i = e(5),
      c = e(13),
      r = e(18),
      o = e(22),
      u = e(21);
    i(
      { target: "Promise", stat: !0 },
      {
        allSettled: function (t) {
          var s = this,
            n = r.f(s),
            d = n.resolve,
            e = n.reject,
            i = o(function () {
              var i = c(s.resolve),
                r = [],
                o = 0,
                a = 1;
              u(t, function (t) {
                var n = o++,
                  e = !1;
                r.push(void 0),
                  a++,
                  i.call(s, t).then(
                    function (t) {
                      e ||
                        ((e = !0),
                        (r[n] = { status: "fulfilled", value: t }),
                        --a || d(r));
                    },
                    function (t) {
                      e ||
                        ((e = !0),
                        (r[n] = { status: "rejected", reason: t }),
                        --a || d(r));
                    }
                  );
              }),
                --a || d(r);
            });
          return i.error && e(i.value), n.promise;
        },
      }
    );
  },
  function (t, n, e) {
    e = e(69);
    t.exports = e;
  },
  function (t, n, e) {
    var i = e(78);
    e(104), e(105), e(106), e(107), (t.exports = i);
  },
  function (t) {
    t.exports = JSON.parse('{"a":""}');
  },
  ,
  function (t, n, e) {
    e(70);
    e = e(30);
    t.exports = e.Object.assign;
  },
  function (t, n, e) {
    var i = e(5),
      e = e(77);
    i(
      { target: "Object", stat: !0, forced: Object.assign !== e },
      { assign: e }
    );
  },
  function (t, n, e) {
    var i = e(0),
      e = e(27),
      i = i.WeakMap;
    t.exports = "function" == typeof i && /native code/.test(e(i));
  },
  function (t, n, e) {
    var s = e(3),
      d = e(73),
      c = e(23),
      u = e(9);
    t.exports = function (t, n) {
      for (var e = d(n), i = u.f, r = c.f, o = 0; o < e.length; o++) {
        var a = e[o];
        s(t, a) || i(t, a, r(n, a));
      }
    };
  },
  function (t, n, e) {
    var i = e(10),
      r = e(74),
      o = e(47),
      a = e(4);
    t.exports =
      i("Reflect", "ownKeys") ||
      function (t) {
        var n = r.f(a(t)),
          e = o.f;
        return e ? n.concat(e(t)) : n;
      };
  },
  function (t, n, e) {
    var i = e(45),
      r = e(32).concat("length", "prototype");
    n.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return i(t, r);
      };
  },
  function (t, n, e) {
    var d = e(20),
      c = e(46),
      u = e(76),
      e = function (s) {
        return function (t, n, e) {
          var i,
            r = d(t),
            o = c(r.length),
            a = u(e, o);
          if (s && n != n) {
            for (; a < o; ) if ((i = r[a++]) != i) return !0;
          } else
            for (; a < o; a++)
              if ((s || a in r) && r[a] === n) return s || a || 0;
          return !s && -1;
        };
      };
    t.exports = { includes: e(!0), indexOf: e(!1) };
  },
  function (t, n, e) {
    var i = e(31),
      r = Math.max,
      o = Math.min;
    t.exports = function (t, n) {
      t = i(t);
      return t < 0 ? r(t + n, 0) : o(t, n);
    };
  },
  function (t, n, e) {
    "use strict";
    var A = e(6),
      i = e(2),
      m = e(49),
      p = e(47),
      f = e(38),
      g = e(50),
      h = e(39),
      r = Object.assign,
      o = Object.defineProperty;
    t.exports =
      !r ||
      i(function () {
        if (
          A &&
          1 !==
            r(
              { b: 1 },
              r(
                o({}, "a", {
                  enumerable: !0,
                  get: function () {
                    o(this, "b", { value: 3, enumerable: !1 });
                  },
                }),
                { b: 2 }
              )
            ).b
        )
          return !0;
        var t = {},
          n = {},
          e = Symbol();
        return (
          (t[e] = 7),
          "abcdefghijklmnopqrst".split("").forEach(function (t) {
            n[t] = t;
          }),
          7 != r({}, t)[e] || "abcdefghijklmnopqrst" != m(r({}, n)).join("")
        );
      })
        ? function (t, n) {
            for (
              var e = g(t), i = arguments.length, r = 1, o = p.f, a = f.f;
              r < i;

            )
              for (
                var s,
                  d = h(arguments[r++]),
                  c = o ? m(d).concat(o(d)) : m(d),
                  u = c.length,
                  l = 0;
                l < u;

              )
                (s = c[l++]), (A && !a.call(d, s)) || (e[s] = d[s]);
            return e;
          }
        : r;
  },
  function (t, n, e) {
    e(79), e(82), e(88), e(92), e(64), e(103);
    e = e(30);
    t.exports = e.Promise;
  },
  function (t, n, e) {
    var i = e(33),
      r = e(12),
      e = e(81);
    i || r(Object.prototype, "toString", e, { unsafe: !0 });
  },
  function (t, n, e) {
    e = e(51);
    t.exports = e && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
  function (t, n, e) {
    "use strict";
    var i = e(33),
      r = e(52);
    t.exports = i
      ? {}.toString
      : function () {
          return "[object " + r(this) + "]";
        };
  },
  function (t, n, e) {
    "use strict";
    var i = e(83).charAt,
      r = e(15),
      e = e(53),
      o = r.set,
      a = r.getterFor("String Iterator");
    e(
      String,
      "String",
      function (t) {
        o(this, { type: "String Iterator", string: String(t), index: 0 });
      },
      function () {
        var t = a(this),
          n = t.string,
          e = t.index;
        return e >= n.length
          ? { value: void 0, done: !0 }
          : ((e = i(n, e)), (t.index += e.length), { value: e, done: !1 });
      }
    );
  },
  function (t, n, e) {
    var a = e(31),
      s = e(24),
      e = function (o) {
        return function (t, n) {
          var e,
            i = String(s(t)),
            r = a(n),
            t = i.length;
          return r < 0 || t <= r
            ? o
              ? ""
              : void 0
            : (n = i.charCodeAt(r)) < 55296 ||
              56319 < n ||
              r + 1 === t ||
              (e = i.charCodeAt(r + 1)) < 56320 ||
              57343 < e
            ? o
              ? i.charAt(r)
              : n
            : o
            ? i.slice(r, r + 2)
            : e - 56320 + ((n - 55296) << 10) + 65536;
        };
      };
    t.exports = { codeAt: e(!1), charAt: e(!0) };
  },
  function (t, n, e) {
    "use strict";
    function i() {
      return this;
    }
    var r = e(54).IteratorPrototype,
      o = e(35),
      a = e(19),
      s = e(36),
      d = e(17);
    t.exports = function (t, n, e) {
      n += " Iterator";
      return (
        (t.prototype = o(r, { next: a(1, e) })), s(t, n, !1, !0), (d[n] = i), t
      );
    };
  },
  function (t, n, e) {
    e = e(2);
    t.exports = !e(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    });
  },
  function (t, n, e) {
    var i = e(6),
      a = e(9),
      s = e(4),
      d = e(49);
    t.exports = i
      ? Object.defineProperties
      : function (t, n) {
          s(t);
          for (var e, i = d(n), r = i.length, o = 0; o < r; )
            a.f(t, (e = i[o++]), n[e]);
          return t;
        };
  },
  function (t, n, e) {
    var i = e(8);
    t.exports = function (t) {
      if (!i(t) && null !== t)
        throw TypeError("Can't set " + String(t) + " as a prototype");
      return t;
    };
  },
  function (t, n, e) {
    var i,
      r = e(0),
      o = e(89),
      a = e(90),
      s = e(7),
      e = e(1),
      d = e("iterator"),
      c = e("toStringTag"),
      u = a.values;
    for (i in o) {
      var l = r[i],
        A = l && l.prototype;
      if (A) {
        if (A[d] !== u)
          try {
            s(A, d, u);
          } catch (t) {
            A[d] = u;
          }
        if ((A[c] || s(A, c, i), o[i]))
          for (var m in a)
            if (A[m] !== a[m])
              try {
                s(A, m, a[m]);
              } catch (t) {
                A[m] = a[m];
              }
      }
    }
  },
  function (t, n) {
    t.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    };
  },
  function (t, n, e) {
    "use strict";
    var i = e(20),
      r = e(91),
      o = e(17),
      a = e(15),
      e = e(53),
      s = a.set,
      d = a.getterFor("Array Iterator");
    (t.exports = e(
      Array,
      "Array",
      function (t, n) {
        s(this, { type: "Array Iterator", target: i(t), index: 0, kind: n });
      },
      function () {
        var t = d(this),
          n = t.target,
          e = t.kind,
          i = t.index++;
        return !n || i >= n.length
          ? { value: (t.target = void 0), done: !0 }
          : "keys" == e
          ? { value: i, done: !1 }
          : "values" == e
          ? { value: n[i], done: !1 }
          : { value: [i, n[i]], done: !1 };
      },
      "values"
    )),
      (o.Arguments = o.Array),
      r("keys"),
      r("values"),
      r("entries");
  },
  function (t, n, e) {
    var i = e(1),
      r = e(35),
      e = e(9),
      o = i("unscopables"),
      a = Array.prototype;
    null == a[o] && e.f(a, o, { configurable: !0, value: r(null) }),
      (t.exports = function (t) {
        a[o][t] = !0;
      });
  },
  function (t, n, e) {
    "use strict";
    function f(t) {
      var n;
      return !(!k(t) || "function" != typeof (n = t.then)) && n;
    }
    function o(l, A, m) {
      var p;
      A.notified ||
        ((A.notified = !0),
        (p = A.reactions),
        _(function () {
          for (var t = A.value, n = 1 == A.state, e = 0; p.length > e; ) {
            var i,
              r,
              o,
              a = p[e++],
              s = n ? a.ok : a.fail,
              d = a.resolve,
              c = a.reject,
              u = a.domain;
            try {
              s
                ? (n || (2 === A.rejection && nt(l, A), (A.rejection = 1)),
                  !0 === s
                    ? (i = t)
                    : (u && u.enter(), (i = s(t)), u && (u.exit(), (o = !0))),
                  i === a.promise
                    ? c(Q("Promise-chain cycle"))
                    : (r = f(i))
                    ? r.call(i, d, c)
                    : d(i))
                : c(t);
            } catch (t) {
              u && !o && u.exit(), c(t);
            }
          }
          (A.reactions = []), (A.notified = !1), m && !A.rejection && $(l, A);
        }));
    }
    function r(t, n, e) {
      var i;
      Y
        ? (((i = H.createEvent("Event")).promise = n),
          (i.reason = e),
          i.initEvent(t, !1, !0),
          m.dispatchEvent(i))
        : (i = { promise: n, reason: e }),
        (n = m["on" + t])
          ? n(i)
          : "unhandledrejection" === t && P("Unhandled promise rejection", e);
    }
    function a(n, e, i, r) {
      return function (t) {
        n(e, i, t, r);
      };
    }
    function s(t, n, e, i) {
      n.done ||
        ((n.done = !0),
        i && (n = i),
        (n.value = e),
        (n.state = 2),
        o(t, n, !0));
    }
    var i,
      d,
      c,
      u,
      l = e(5),
      A = e(16),
      m = e(0),
      p = e(10),
      g = e(57),
      h = e(12),
      w = e(93),
      y = e(36),
      b = e(94),
      k = e(8),
      v = e(13),
      S = e(95),
      E = e(14),
      x = e(27),
      T = e(21),
      z = e(99),
      C = e(59),
      I = e(60).set,
      _ = e(100),
      B = e(63),
      P = e(101),
      D = e(18),
      L = e(22),
      O = e(15),
      j = e(48),
      R = e(1),
      M = e(102),
      Z = R("species"),
      G = "Promise",
      N = O.get,
      F = O.set,
      X = O.getterFor(G),
      U = g,
      Q = m.TypeError,
      H = m.document,
      W = m.process,
      V = p("fetch"),
      q = D.f,
      K = q,
      J = "process" == E(W),
      Y = !!(H && H.createEvent && m.dispatchEvent),
      j = j(G, function () {
        if (x(U) === String(U)) {
          if (66 === M) return !0;
          if (!J && "function" != typeof PromiseRejectionEvent) return !0;
        }
        if (A && !U.prototype.finally) return !0;
        if (51 <= M && /native code/.test(U)) return !1;
        function t(t) {
          t(
            function () {},
            function () {}
          );
        }
        var n = U.resolve(1);
        return (
          ((n.constructor = {})[Z] = t), !(n.then(function () {}) instanceof t)
        );
      }),
      z =
        j ||
        !z(function (t) {
          U.all(t).catch(function () {});
        }),
      $ = function (e, i) {
        I.call(m, function () {
          var t,
            n = i.value;
          if (
            tt(i) &&
            ((t = L(function () {
              J
                ? W.emit("unhandledRejection", n, e)
                : r("unhandledrejection", e, n);
            })),
            (i.rejection = J || tt(i) ? 2 : 1),
            t.error)
          )
            throw t.value;
        });
      },
      tt = function (t) {
        return 1 !== t.rejection && !t.parent;
      },
      nt = function (t, n) {
        I.call(m, function () {
          J ? W.emit("rejectionHandled", t) : r("rejectionhandled", t, n.value);
        });
      },
      et = function (e, i, t, n) {
        if (!i.done) {
          (i.done = !0), n && (i = n);
          try {
            if (e === t) throw Q("Promise can't be resolved itself");
            var r = f(t);
            r
              ? _(function () {
                  var n = { done: !1 };
                  try {
                    r.call(t, a(et, e, n, i), a(s, e, n, i));
                  } catch (t) {
                    s(e, n, t, i);
                  }
                })
              : ((i.value = t), (i.state = 1), o(e, i, !1));
          } catch (t) {
            s(e, { done: !1 }, t, i);
          }
        }
      };
    j &&
      ((U = function (t) {
        S(this, U, G), v(t), i.call(this);
        var n = N(this);
        try {
          t(a(et, this, n), a(s, this, n));
        } catch (t) {
          s(this, n, t);
        }
      }),
      ((i = function (t) {
        F(this, {
          type: G,
          done: !1,
          notified: !1,
          parent: !1,
          reactions: [],
          rejection: !1,
          state: 0,
          value: void 0,
        });
      }).prototype = w(U.prototype, {
        then: function (t, n) {
          var e = X(this),
            i = q(C(this, U));
          return (
            (i.ok = "function" != typeof t || t),
            (i.fail = "function" == typeof n && n),
            (i.domain = J ? W.domain : void 0),
            (e.parent = !0),
            e.reactions.push(i),
            0 != e.state && o(this, e, !1),
            i.promise
          );
        },
        catch: function (t) {
          return this.then(void 0, t);
        },
      })),
      (d = function () {
        var t = new i(),
          n = N(t);
        (this.promise = t),
          (this.resolve = a(et, t, n)),
          (this.reject = a(s, t, n));
      }),
      (D.f = q =
        function (t) {
          return t === U || t === c ? new d() : K(t);
        }),
      A ||
        "function" != typeof g ||
        ((u = g.prototype.then),
        h(
          g.prototype,
          "then",
          function (t, n) {
            var e = this;
            return new U(function (t, n) {
              u.call(e, t, n);
            }).then(t, n);
          },
          { unsafe: !0 }
        ),
        "function" == typeof V &&
          l(
            { global: !0, enumerable: !0, forced: !0 },
            {
              fetch: function (t) {
                return B(U, V.apply(m, arguments));
              },
            }
          ))),
      l({ global: !0, wrap: !0, forced: j }, { Promise: U }),
      y(U, G, !1, !0),
      b(G),
      (c = p(G)),
      l(
        { target: G, stat: !0, forced: j },
        {
          reject: function (t) {
            var n = q(this);
            return n.reject.call(void 0, t), n.promise;
          },
        }
      ),
      l(
        { target: G, stat: !0, forced: A || j },
        {
          resolve: function (t) {
            return B(A && this === c ? U : this, t);
          },
        }
      ),
      l(
        { target: G, stat: !0, forced: z },
        {
          all: function (t) {
            var s = this,
              n = q(s),
              d = n.resolve,
              c = n.reject,
              e = L(function () {
                var i = v(s.resolve),
                  r = [],
                  o = 0,
                  a = 1;
                T(t, function (t) {
                  var n = o++,
                    e = !1;
                  r.push(void 0),
                    a++,
                    i.call(s, t).then(function (t) {
                      e || ((e = !0), (r[n] = t), --a || d(r));
                    }, c);
                }),
                  --a || d(r);
              });
            return e.error && c(e.value), n.promise;
          },
          race: function (t) {
            var e = this,
              i = q(e),
              r = i.reject,
              n = L(function () {
                var n = v(e.resolve);
                T(t, function (t) {
                  n.call(e, t).then(i.resolve, r);
                });
              });
            return n.error && r(n.value), i.promise;
          },
        }
      );
  },
  function (t, n, e) {
    var r = e(12);
    t.exports = function (t, n, e) {
      for (var i in n) r(t, i, n[i], e);
      return t;
    };
  },
  function (t, n, e) {
    "use strict";
    var i = e(10),
      r = e(9),
      o = e(1),
      a = e(6),
      s = o("species");
    t.exports = function (t) {
      var n = i(t),
        t = r.f;
      a &&
        n &&
        !n[s] &&
        t(n, s, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  function (t, n) {
    t.exports = function (t, n, e) {
      if (!(t instanceof n))
        throw TypeError("Incorrect " + (e ? e + " " : "") + "invocation");
      return t;
    };
  },
  function (t, n, e) {
    var i = e(1),
      r = e(17),
      o = i("iterator"),
      a = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (r.Array === t || a[o] === t);
    };
  },
  function (t, n, e) {
    var i = e(52),
      r = e(17),
      o = e(1)("iterator");
    t.exports = function (t) {
      if (null != t) return t[o] || t["@@iterator"] || r[i(t)];
    };
  },
  function (t, n, e) {
    var o = e(4);
    t.exports = function (t, n, e, i) {
      try {
        return i ? n(o(e)[0], e[1]) : n(e);
      } catch (n) {
        var r = t.return;
        throw (void 0 !== r && o(r.call(t)), n);
      }
    };
  },
  function (t, n, e) {
    var r = e(1)("iterator"),
      o = !1;
    try {
      var i = 0,
        a = {
          next: function () {
            return { done: !!i++ };
          },
          return: function () {
            o = !0;
          },
        };
      (a[r] = function () {
        return this;
      }),
        Array.from(a, function () {
          throw 2;
        });
    } catch (t) {}
    t.exports = function (t, n) {
      if (!n && !o) return !1;
      var e = !1;
      try {
        var i = {};
        (i[r] = function () {
          return {
            next: function () {
              return { done: (e = !0) };
            },
          };
        }),
          t(i);
      } catch (t) {}
      return e;
    };
  },
  function (t, n, e) {
    var i,
      r,
      o,
      a,
      s,
      d,
      c,
      u,
      l = e(0),
      A = e(23).f,
      m = e(14),
      p = e(60).set,
      f = e(61),
      g = l.MutationObserver || l.WebKitMutationObserver,
      h = l.process,
      e = l.Promise,
      w = "process" == m(h),
      A = A(l, "queueMicrotask"),
      A = A && A.value;
    A ||
      ((i = function () {
        var t, n;
        for (w && (t = h.domain) && t.exit(); r; ) {
          (n = r.fn), (r = r.next);
          try {
            n();
          } catch (t) {
            throw (r ? a() : (o = void 0), t);
          }
        }
        (o = void 0), t && t.enter();
      }),
      (a = w
        ? function () {
            h.nextTick(i);
          }
        : g && !f
        ? ((s = !0),
          (d = document.createTextNode("")),
          new g(i).observe(d, { characterData: !0 }),
          function () {
            d.data = s = !s;
          })
        : e && e.resolve
        ? ((c = e.resolve(void 0)),
          (u = c.then),
          function () {
            u.call(c, i);
          })
        : function () {
            p.call(l, i);
          })),
      (t.exports =
        A ||
        function (t) {
          t = { fn: t, next: void 0 };
          o && (o.next = t), r || ((r = t), a()), (o = t);
        });
  },
  function (t, n, e) {
    var i = e(0);
    t.exports = function (t, n) {
      var e = i.console;
      e && e.error && (1 === arguments.length ? e.error(t) : e.error(t, n));
    };
  },
  function (t, n, e) {
    var i,
      r,
      o = e(0),
      e = e(62),
      o = o.process,
      o = o && o.versions,
      o = o && o.v8;
    o
      ? (r = (i = o.split("."))[0] + i[1])
      : e &&
        (!(i = e.match(/Edge\/(\d+)/)) || 74 <= i[1]) &&
        (i = e.match(/Chrome\/(\d+)/)) &&
        (r = i[1]),
      (t.exports = r && +r);
  },
  function (t, n, e) {
    "use strict";
    var i = e(5),
      r = e(16),
      o = e(57),
      a = e(2),
      s = e(10),
      d = e(59),
      c = e(63),
      e = e(12);
    i(
      {
        target: "Promise",
        proto: !0,
        real: !0,
        forced:
          !!o &&
          a(function () {
            o.prototype.finally.call({ then: function () {} }, function () {});
          }),
      },
      {
        finally: function (n) {
          var e = d(this, s("Promise")),
            t = "function" == typeof n;
          return this.then(
            t
              ? function (t) {
                  return c(e, n()).then(function () {
                    return t;
                  });
                }
              : n,
            t
              ? function (t) {
                  return c(e, n()).then(function () {
                    throw t;
                  });
                }
              : n
          );
        },
      }
    ),
      r ||
        "function" != typeof o ||
        o.prototype.finally ||
        e(o.prototype, "finally", s("Promise").prototype.finally);
  },
  function (t, n, e) {
    "use strict";
    var i = e(5),
      r = e(6),
      o = e(34),
      a = e(56),
      s = e(35),
      d = e(9),
      c = e(19),
      u = e(21),
      l = e(7),
      e = e(15),
      A = e.set,
      m = e.getterFor("AggregateError"),
      p = function (t, n) {
        var e = this;
        if (!(e instanceof p)) return new p(t, n);
        a && (e = a(new Error(n), o(e)));
        var i = [];
        return (
          u(t, i.push, i),
          r ? A(e, { errors: i, type: "AggregateError" }) : (e.errors = i),
          void 0 !== n && l(e, "message", String(n)),
          e
        );
      };
    (p.prototype = s(Error.prototype, {
      constructor: c(5, p),
      message: c(5, ""),
      name: c(5, "AggregateError"),
    })),
      r &&
        d.f(p.prototype, "errors", {
          get: function () {
            return m(this).errors;
          },
          configurable: !0,
        }),
      i({ global: !0 }, { AggregateError: p });
  },
  function (t, n, e) {
    e(64);
  },
  function (t, n, e) {
    "use strict";
    var i = e(5),
      r = e(18),
      o = e(22);
    i(
      { target: "Promise", stat: !0 },
      {
        try: function (t) {
          var n = r.f(this),
            t = o(t);
          return (t.error ? n.reject : n.resolve)(t.value), n.promise;
        },
      }
    );
  },
  function (t, n, e) {
    "use strict";
    var i = e(5),
      l = e(13),
      A = e(10),
      r = e(18),
      o = e(22),
      m = e(21);
    i(
      { target: "Promise", stat: !0 },
      {
        any: function (t) {
          var d = this,
            n = r.f(d),
            c = n.resolve,
            u = n.reject,
            e = o(function () {
              var i = l(d.resolve),
                r = [],
                o = 0,
                a = 1,
                s = !1;
              m(t, function (t) {
                var n = o++,
                  e = !1;
                r.push(void 0),
                  a++,
                  i.call(d, t).then(
                    function (t) {
                      e || s || ((s = !0), c(t));
                    },
                    function (t) {
                      e ||
                        s ||
                        ((e = !0),
                        (r[n] = t),
                        --a ||
                          u(
                            new (A("AggregateError"))(
                              r,
                              "No one promise resolved"
                            )
                          ));
                    }
                  );
              }),
                --a ||
                  u(new (A("AggregateError"))(r, "No one promise resolved"));
            });
          return e.error && u(e.value), n.promise;
        },
      }
    );
  },
  function (t, n) {
    !(function (t) {
      "use strict";
      var n, e, a, i, r, o, s, d, c, u;
      function l(t) {
        if (
          ("string" != typeof t && (t = String(t)),
          /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
        )
          throw new TypeError("Invalid character in header field name");
        return t.toLowerCase();
      }
      function A(t) {
        return "string" != typeof t && (t = String(t)), t;
      }
      function m(n) {
        var t = {
          next: function () {
            var t = n.shift();
            return { done: void 0 === t, value: t };
          },
        };
        return (
          e &&
            (t[Symbol.iterator] = function () {
              return t;
            }),
          t
        );
      }
      function p(n) {
        (this.map = {}),
          n instanceof p
            ? n.forEach(function (t, n) {
                this.append(n, t);
              }, this)
            : Array.isArray(n)
            ? n.forEach(function (t) {
                this.append(t[0], t[1]);
              }, this)
            : n &&
              Object.getOwnPropertyNames(n).forEach(function (t) {
                this.append(t, n[t]);
              }, this);
      }
      function f(t) {
        if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
        t.bodyUsed = !0;
      }
      function g(e) {
        return new Promise(function (t, n) {
          (e.onload = function () {
            t(e.result);
          }),
            (e.onerror = function () {
              n(e.error);
            });
        });
      }
      function h(t) {
        var n = new FileReader(),
          e = g(n);
        return n.readAsArrayBuffer(t), e;
      }
      function w(t) {
        if (t.slice) return t.slice(0);
        var n = new Uint8Array(t.byteLength);
        return n.set(new Uint8Array(t)), n.buffer;
      }
      function y() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (t) {
            if ((this._bodyInit = t))
              if ("string" == typeof t) this._bodyText = t;
              else if (a && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
              else if (i && FormData.prototype.isPrototypeOf(t))
                this._bodyFormData = t;
              else if (n && URLSearchParams.prototype.isPrototypeOf(t))
                this._bodyText = t.toString();
              else if (r && a && s(t))
                (this._bodyArrayBuffer = w(t.buffer)),
                  (this._bodyInit = new Blob([this._bodyArrayBuffer]));
              else {
                if (!r || (!ArrayBuffer.prototype.isPrototypeOf(t) && !d(t)))
                  throw new Error("unsupported BodyInit type");
                this._bodyArrayBuffer = w(t);
              }
            else this._bodyText = "";
            this.headers.get("content-type") ||
              ("string" == typeof t
                ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                : this._bodyBlob && this._bodyBlob.type
                ? this.headers.set("content-type", this._bodyBlob.type)
                : n &&
                  URLSearchParams.prototype.isPrototypeOf(t) &&
                  this.headers.set(
                    "content-type",
                    "application/x-www-form-urlencoded;charset=UTF-8"
                  ));
          }),
          a &&
            ((this.blob = function () {
              var t = f(this);
              if (t) return t;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              return this._bodyArrayBuffer
                ? f(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(h);
            })),
          (this.text = function () {
            var t,
              n,
              e = f(this);
            if (e) return e;
            if (this._bodyBlob)
              return (
                (t = this._bodyBlob),
                (e = g((n = new FileReader()))),
                n.readAsText(t),
                e
              );
            if (this._bodyArrayBuffer)
              return Promise.resolve(
                (function (t) {
                  for (
                    var n = new Uint8Array(t), e = new Array(n.length), i = 0;
                    i < n.length;
                    i++
                  )
                    e[i] = String.fromCharCode(n[i]);
                  return e.join("");
                })(this._bodyArrayBuffer)
              );
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          i &&
            (this.formData = function () {
              return this.text().then(k);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      function b(t, n) {
        var e,
          i = (n = n || {}).body;
        if (t instanceof b) {
          if (t.bodyUsed) throw new TypeError("Already read");
          (this.url = t.url),
            (this.credentials = t.credentials),
            n.headers || (this.headers = new p(t.headers)),
            (this.method = t.method),
            (this.mode = t.mode),
            i || null == t._bodyInit || ((i = t._bodyInit), (t.bodyUsed = !0));
        } else this.url = String(t);
        if (
          ((this.credentials = n.credentials || this.credentials || "omit"),
          (!n.headers && this.headers) || (this.headers = new p(n.headers)),
          (this.method =
            ((t = (e = n.method || this.method || "GET").toUpperCase()),
            -1 < c.indexOf(t) ? t : e)),
          (this.mode = n.mode || this.mode || null),
          (this.referrer = null),
          ("GET" === this.method || "HEAD" === this.method) && i)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(i);
      }
      function k(t) {
        var e = new FormData();
        return (
          t
            .trim()
            .split("&")
            .forEach(function (t) {
              var n;
              t &&
                ((t = (n = t.split("=")).shift().replace(/\+/g, " ")),
                (n = n.join("=").replace(/\+/g, " ")),
                e.append(decodeURIComponent(t), decodeURIComponent(n)));
            }),
          e
        );
      }
      function v(t, n) {
        (n = n || {}),
          (this.type = "default"),
          (this.status = void 0 === n.status ? 200 : n.status),
          (this.ok = 200 <= this.status && this.status < 300),
          (this.statusText = "statusText" in n ? n.statusText : "OK"),
          (this.headers = new p(n.headers)),
          (this.url = n.url || ""),
          this._initBody(t);
      }
      t.fetch ||
        ((n = "URLSearchParams" in t),
        (e = "Symbol" in t && "iterator" in Symbol),
        (a =
          "FileReader" in t &&
          "Blob" in t &&
          (function () {
            try {
              return new Blob(), !0;
            } catch (t) {
              return !1;
            }
          })()),
        (i = "FormData" in t),
        (r = "ArrayBuffer" in t) &&
          ((o = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ]),
          (s = function (t) {
            return t && DataView.prototype.isPrototypeOf(t);
          }),
          (d =
            ArrayBuffer.isView ||
            function (t) {
              return t && -1 < o.indexOf(Object.prototype.toString.call(t));
            })),
        (p.prototype.append = function (t, n) {
          (t = l(t)), (n = A(n));
          var e = this.map[t];
          this.map[t] = e ? e + "," + n : n;
        }),
        (p.prototype.delete = function (t) {
          delete this.map[l(t)];
        }),
        (p.prototype.get = function (t) {
          return (t = l(t)), this.has(t) ? this.map[t] : null;
        }),
        (p.prototype.has = function (t) {
          return this.map.hasOwnProperty(l(t));
        }),
        (p.prototype.set = function (t, n) {
          this.map[l(t)] = A(n);
        }),
        (p.prototype.forEach = function (t, n) {
          for (var e in this.map)
            this.map.hasOwnProperty(e) && t.call(n, this.map[e], e, this);
        }),
        (p.prototype.keys = function () {
          var e = [];
          return (
            this.forEach(function (t, n) {
              e.push(n);
            }),
            m(e)
          );
        }),
        (p.prototype.values = function () {
          var n = [];
          return (
            this.forEach(function (t) {
              n.push(t);
            }),
            m(n)
          );
        }),
        (p.prototype.entries = function () {
          var e = [];
          return (
            this.forEach(function (t, n) {
              e.push([n, t]);
            }),
            m(e)
          );
        }),
        e && (p.prototype[Symbol.iterator] = p.prototype.entries),
        (c = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"]),
        (b.prototype.clone = function () {
          return new b(this, { body: this._bodyInit });
        }),
        y.call(b.prototype),
        y.call(v.prototype),
        (v.prototype.clone = function () {
          return new v(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new p(this.headers),
            url: this.url,
          });
        }),
        (v.error = function () {
          var t = new v(null, { status: 0, statusText: "" });
          return (t.type = "error"), t;
        }),
        (u = [301, 302, 303, 307, 308]),
        (v.redirect = function (t, n) {
          if (-1 === u.indexOf(n)) throw new RangeError("Invalid status code");
          return new v(null, { status: n, headers: { location: t } });
        }),
        (t.Headers = p),
        (t.Request = b),
        (t.Response = v),
        (t.fetch = function (e, o) {
          return new Promise(function (i, t) {
            var n = new b(e, o),
              r = new XMLHttpRequest();
            (r.onload = function () {
              var e,
                t = {
                  status: r.status,
                  statusText: r.statusText,
                  headers:
                    ((n = r.getAllResponseHeaders() || ""),
                    (e = new p()),
                    n
                      .replace(/\r?\n[\t ]+/g, " ")
                      .split(/\r?\n/)
                      .forEach(function (t) {
                        var n = t.split(":"),
                          t = n.shift().trim();
                        t && ((n = n.join(":").trim()), e.append(t, n));
                      }),
                    e),
                };
              t.url =
                "responseURL" in r
                  ? r.responseURL
                  : t.headers.get("X-Request-URL");
              var n = "response" in r ? r.response : r.responseText;
              i(new v(n, t));
            }),
              (r.onerror = function () {
                t(new TypeError("Network request failed"));
              }),
              (r.ontimeout = function () {
                t(new TypeError("Network request failed"));
              }),
              r.open(n.method, n.url, !0),
              "include" === n.credentials
                ? (r.withCredentials = !0)
                : "omit" === n.credentials && (r.withCredentials = !1),
              "responseType" in r && a && (r.responseType = "blob"),
              n.headers.forEach(function (t, n) {
                r.setRequestHeader(n, t);
              }),
              r.send(void 0 === n._bodyInit ? null : n._bodyInit);
          });
        }),
        (t.fetch.polyfill = !0));
    })("undefined" != typeof self ? self : this);
  },
  function (t, n) {
    "document" in window.self &&
      (("classList" in document.createElement("_") &&
        (!document.createElementNS ||
          "classList" in
            document.createElementNS("http://www.w3.org/2000/svg", "g"))) ||
        (function (t) {
          "use strict";
          if ("Element" in t) {
            var n = t.Element.prototype,
              e = Object,
              o =
                String.prototype.trim ||
                function () {
                  return this.replace(/^\s+|\s+$/g, "");
                },
              i =
                Array.prototype.indexOf ||
                function (t) {
                  for (var n = 0, e = this.length; n < e; n++)
                    if (n in this && this[n] === t) return n;
                  return -1;
                },
              r = function (t, n) {
                (this.name = t),
                  (this.code = DOMException[t]),
                  (this.message = n);
              },
              a = function (t, n) {
                if ("" === n)
                  throw new r(
                    "SYNTAX_ERR",
                    "An invalid or illegal string was specified"
                  );
                if (/\s/.test(n))
                  throw new r(
                    "INVALID_CHARACTER_ERR",
                    "String contains an invalid character"
                  );
                return i.call(t, n);
              },
              s = function (t) {
                for (
                  var n = o.call(t.getAttribute("class") || ""),
                    e = n ? n.split(/\s+/) : [],
                    i = 0,
                    r = e.length;
                  i < r;
                  i++
                )
                  this.push(e[i]);
                this._updateClassName = function () {
                  t.setAttribute("class", this.toString());
                };
              },
              d = (s.prototype = []),
              c = function () {
                return new s(this);
              };
            if (
              ((r.prototype = Error.prototype),
              (d.item = function (t) {
                return this[t] || null;
              }),
              (d.contains = function (t) {
                return -1 !== a(this, (t += ""));
              }),
              (d.add = function () {
                for (
                  var t, n = arguments, e = 0, i = n.length, r = !1;
                  -1 === a(this, (t = n[e] + "")) && (this.push(t), (r = !0)),
                    ++e < i;

                );
                r && this._updateClassName();
              }),
              (d.remove = function () {
                var t,
                  n,
                  e = arguments,
                  i = 0,
                  r = e.length,
                  o = !1;
                do {
                  for (n = a(this, (t = e[i] + "")); -1 !== n; )
                    this.splice(n, 1), (o = !0), (n = a(this, t));
                } while (++i < r);
                o && this._updateClassName();
              }),
              (d.toggle = function (t, n) {
                t += "";
                var e = this.contains(t),
                  i = e ? !0 !== n && "remove" : !1 !== n && "add";
                return i && this[i](t), !0 === n || !1 === n ? n : !e;
              }),
              (d.toString = function () {
                return this.join(" ");
              }),
              e.defineProperty)
            ) {
              var u = { get: c, enumerable: !0, configurable: !0 };
              try {
                e.defineProperty(n, "classList", u);
              } catch (t) {
                (void 0 !== t.number && -2146823252 !== t.number) ||
                  ((u.enumerable = !1), e.defineProperty(n, "classList", u));
              }
            } else
              e.prototype.__defineGetter__ &&
                n.__defineGetter__("classList", c);
          }
        })(window.self),
      (function () {
        "use strict";
        var t,
          e,
          n = document.createElement("_");
        n.classList.add("c1", "c2"),
          n.classList.contains("c2") ||
            ((t = function (t) {
              var i = DOMTokenList.prototype[t];
              DOMTokenList.prototype[t] = function (t) {
                for (var n = arguments.length, e = 0; e < n; e++)
                  (t = arguments[e]), i.call(this, t);
              };
            })("add"),
            t("remove")),
          n.classList.toggle("c3", !1),
          n.classList.contains("c3") &&
            ((e = DOMTokenList.prototype.toggle),
            (DOMTokenList.prototype.toggle = function (t, n) {
              return 1 in arguments && !this.contains(t) == !n
                ? n
                : e.call(this, t);
            })),
          (n = null);
      })());
  },
  function (t, n, e) {
    "use strict";
    e.r(n);
    var i = e(65),
      r = e.n(i),
      o = e(66),
      n = e.n(o);
    e(108),
      e(109),
      void 0 === Object.assign && (Object.assign = r.a),
      "undefined" == typeof Promise && (window.Promise = n.a);
    function s(n, e) {
      var i = !1;
      return (
        Object.keys(e).forEach(function (t) {
          e[t] === n && (i = !0);
        }),
        i
      );
    }
    function a(t) {
      return t instanceof Array ? t : [t];
    }
    function A() {
      return window.location.href;
    }
    function g() {
      return (
        "undefined" != typeof navigator &&
        /(?:phone|windows\s+phone|ipod|blackberry|(?:android|bb\d+|meego|silk|googlebot) .+? mobile|palm|windows\s+ce|opera\smini|avantgo|mobilesafari|docomo)/i.test(
          navigator.userAgent
        )
      );
    }
    function h() {
      return (
        "undefined" != typeof navigator &&
        /(?:ipad|playbook|(?:android|bb\d+|meego|silk)(?! .+? mobile))/i.test(
          navigator.userAgent
        )
      );
    }
    function d() {
      return (
        "undefined" != typeof navigator &&
        /MSIE \\d|Trident.*rv:/i.test(navigator.userAgent)
      );
    }
    function w() {
      var o;
      window.__tcfapi ||
        ((o = {}),
        (window.__tcfapi = function (t, n, e, i) {
          if (
            !lt.GetIsPokiIFrame() &&
            !(function () {
              try {
                return window.self !== window.top;
              } catch (t) {
                return !0;
              }
            })()
          )
            return (
              e({ msg: "CMP not found" }, !1),
              void console.error(
                "A TCFv2 compliant CMP should be added to this game"
              )
            );
          var r = Math.random(),
            n = {
              __tcfapiCall: { command: t, parameter: i, version: n, callId: r },
            };
          (o[r] = e), window.parent.postMessage(n, "*");
        }),
        window.addEventListener(
          "message",
          function (t) {
            var n = {};
            try {
              n = "string" == typeof t.data ? JSON.parse(t.data) : t.data;
            } catch (t) {}
            var e = n.__tcfapiReturn;
            e &&
              "function" == typeof o[e.callId] &&
              (o[e.callId](e.returnValue, e.success), (o[e.callId] = null));
          },
          !1
        )),
        window.pbjs.que.push(function () {
          window.pbjs.setConfig({
            consentManagement: {
              gdpr: { cmpApi: "iab", timeout: 8e3, defaultGdprScope: !0 },
            },
          });
        });
    }
    var c = e(11),
      u = e.n(c),
      y = {
        ready: "pokiAppReady",
        adblocked: "pokiAppAdblocked",
        ads: {
          completed: "pokiAdsCompleted",
          error: "pokiAdsError",
          impression: "pokiAdsImpression",
          durationChange: "pokiAdsDurationChange",
          limit: "pokiAdsLimit",
          ready: "pokiAdsReady",
          requested: "pokiAdsRequested",
          prebidRequested: "pokiAdsPrebidRequested",
          skipped: "pokiAdsSkipped",
          started: "pokiAdsStarted",
          stopped: "pokiAdsStopped",
          busy: "pokiAdsBusy",
          position: {
            preroll: "PP",
            midroll: "PM",
            rewarded: "PR",
            display: "DP",
          },
          video: {
            clicked: "pokiVideoAdsClicked",
            firstQuartile: "pokiVideoAdsFirstQuartile",
            midPoint: "pokiVideoAdsMidPoint",
            thirdQuartile: "pokiVideoAdsThirdQuartile",
            error: "pokiVideoAdsError",
            loaderError: "pokiVideoAdsLoaderError",
            paused: "pokiVideoAdsPauseTriggered",
            resumed: "pokiVideoAdsResumedTriggered",
            progress: "pokiVideoAdsProgress",
            buffering: "pokiVideoAdsBuffering",
          },
        },
        info: {
          messages: {
            timeLimit:
              "The ad-request was not processed, because of a time constraint",
            prerollLimit:
              "The ad-request was cancelled, because we're not allowed to show a preroll",
          },
        },
        message: {
          event: "pokiMessageEvent",
          sdkDetails: "pokiMessageSdkDetails",
          toggleProgrammaticAds: "pokiMessageToggleProgrammaticAds",
        },
        tracking: {
          custom: "pokiTrackingCustom",
          setPlayerAge: "pokiTrackingSetPlayerAge",
          togglePlayerAdvertisingConsent:
            "pokiTrackingTogglePlayerAdvertisingConsent",
          debugTrueInProduction: "pokiMessageDebugTrueProduction",
          screen: {
            gameplayStart: "pokiTrackingScreenGameplayStart",
            gameplayStop: "pokiTrackingScreenGameplayStop",
            gameLoadingStarted: "pokiTrackingScreenGameLoadingStarted",
            gameLoadingProgress: "pokiTrackingScreenGameLoadingProgress",
            gameLoadingFinished: "pokiTrackingScreenGameLoadingFinished",
            commercialBreak: "pokiTrackingScreenCommercialBreak",
            rewardedBreak: "pokiTrackingScreenRewardedBreak",
            happyTime: "pokiTrackingScreenHappyTime",
            firstRound: "pokiTrackingScreenFirstRound",
            roundStart: "pokiTrackingScreenRoundStart",
            roundEnd: "pokiTrackingScreenRoundEnd",
            gameInteractive: "pokiTrackingScreenGameInteractive",
            displayAd: "pokiTrackingScreenDisplayAdRequest",
            destroyAd: "pokiTrackingScreenDisplayAdDestroy",
          },
          sdk: {
            status: {
              initialized: "pokiTrackingSdkStatusInitialized",
              failed: "pokiTrackingSdkStatusFailed",
            },
          },
          ads: {
            status: {
              busy: "pokiTrackingAdsStatusBusy",
              completed: "pokiTrackingAdsStatusCompleted",
              error: "pokiTrackingAdsStatusError",
              displayError: "pokiTrackingAdsStatusDisplayError",
              impression: "pokiTrackingAdsStatusImpression",
              limit: "pokiTrackingAdsStatusLimit",
              ready: "pokiTrackingAdsStatusReady",
              requested: "pokiTrackingAdsStatusRequested",
              prebidRequested: "pokiTrackingAdsStatusPrebidRequested",
              skipped: "pokiTrackingAdsStatusSkipped",
              started: "pokiTrackingAdsStatusStarted",
              buffering: "pokiTrackingAdsStatusBuffering",
            },
            video: {
              clicked: "pokiTrackingAdsVideoClicked",
              error: "pokiTrackingAdsVideoError",
              loaderError: "pokiTrackingAdsVideoLoaderError",
            },
            display: {
              requested: "pokiTrackingScreenDisplayAdRequested",
              impression: "pokiTrackingScreenDisplayAdImpression",
              viewable: "pokiTrackingScreenDisplayAdViewable",
            },
          },
        },
      },
      l = function () {
        return (l =
          Object.assign ||
          function (t) {
            for (var n, e = 1, i = arguments.length; e < i; e++)
              for (var r in (n = arguments[e]))
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            return t;
          }).apply(this, arguments);
      },
      b =
        ((D.clearEventListeners = function () {
          this.listeners = {};
        }),
        (D.removeEventListener = function (t, n) {
          !Object.prototype.hasOwnProperty.call(this.listeners, t) ||
            (-1 !== (n = this.listeners[t].indexOf(n)) &&
              this.listeners[t].splice(n, 1));
        }),
        (D.addEventListener = function (n, e, t) {
          var i,
            r = this;
          void 0 === t && (t = !1),
            (t = !!t),
            Object.prototype.hasOwnProperty.call(this.listeners, n) ||
              (this.listeners[n] = []),
            t
              ? ((i = function (t) {
                  r.removeEventListener.bind(r)(n, i), e(t);
                }),
                this.listeners[n].push(i))
              : this.listeners[n].push(e);
        }),
        (D.dispatchEvent = function (t, n) {
          void 0 === n && (n = {}),
            !this.debug ||
              (window.process &&
                window.process.env &&
                "test" === window.process.env.NODE_ENV) ||
              console.info(t, n);
          for (var e = Object.keys(this.listeners), i = 0; i < e.length; i++) {
            var r = e[i];
            if (t === r)
              for (var o = this.listeners[r], a = 0; a < o.length; a++)
                o[a](l(l({}, this.dataAnnotations), n));
          }
        }),
        (D.setDebug = function (t) {
          this.debug = t;
        }),
        (D.setDataAnnotations = function (t) {
          this.dataAnnotations = l(l({}, this.dataAnnotations), t);
        }),
        (D.getDataAnnotations = function () {
          return this.dataAnnotations;
        }),
        (D.clearAnnotations = function () {
          this.dataAnnotations = {};
        }),
        (D.listeners = {}),
        (D.debug = !1),
        (D.dataAnnotations = {}),
        D),
      m =
        ((P.sendMessage = function (t, n) {
          void 0 === n && (n = {});
          var e = window.parent;
          if (!s(t, y.message)) {
            var i = Object.keys(y.message).map(function (t) {
              return "poki.message." + t;
            });
            throw new TypeError(
              "Argument 'type' must be one of " + i.join(", ")
            );
          }
          e.postMessage({ type: t, content: n }, "*");
        }),
        P),
      p = function (n) {
        var e = new Array();
        return (
          Object.keys(n).forEach(function (t) {
            "object" == typeof n[t] ? (e = e.concat(p(n[t]))) : e.push(n[t]);
          }),
          e
        );
      },
      f = p(y.tracking),
      k =
        ((B.setDebug = function (t) {
          this.debug = t;
        }),
        (B.track = function (t, n) {
          if ((void 0 === n && (n = {}), -1 === f.indexOf(t)))
            throw new TypeError(
              "Invalid 'event', must be one of " + f.join(", ")
            );
          if ("object" != typeof n)
            throw new TypeError("Invalid data, must be an object");
          if (this.debug) {
            if (
              window.process &&
              window.process.env &&
              "test" === window.process.env.NODE_ENV
            )
              return;
            Object.keys(n).length
              ? console.info(
                  "%cPOKI_TRACKER: %cTracked event '" + t + "' with data:",
                  "font-weight: bold",
                  "",
                  n
                )
              : console.info(
                  "%cPOKI_TRACKER: %cTracked event '" + t + "'",
                  "font-weight: bold",
                  ""
                );
          }
          m.sendMessage(y.message.event, { event: t, data: n });
        }),
        (B.setupDefaultEvents = function () {
          var t,
            e =
              (((t = {})[y.ready] = y.tracking.sdk.status.initialized),
              (t[y.adblocked] = y.tracking.sdk.status.failed),
              (t[y.ads.busy] = y.tracking.ads.status.busy),
              (t[y.ads.completed] = y.tracking.ads.status.completed),
              (t[y.ads.error] = y.tracking.ads.status.error),
              (t[y.ads.displayError] = y.tracking.ads.status.displayError),
              (t[y.ads.impression] = y.tracking.ads.status.impression),
              (t[y.ads.limit] = y.tracking.ads.status.limit),
              (t[y.ads.ready] = y.tracking.ads.status.ready),
              (t[y.ads.requested] = y.tracking.ads.status.requested),
              (t[y.ads.prebidRequested] =
                y.tracking.ads.status.prebidRequested),
              (t[y.ads.skipped] = y.tracking.ads.status.skipped),
              (t[y.ads.started] = y.tracking.ads.status.started),
              (t[y.ads.video.clicked] = y.tracking.ads.video.clicked),
              (t[y.ads.video.error] = y.tracking.ads.video.error),
              (t[y.ads.video.loaderError] = y.tracking.ads.video.loaderError),
              (t[y.ads.video.buffering] = y.tracking.ads.status.buffering),
              (t[y.tracking.screen.gameplayStart] =
                y.tracking.screen.gameplayStart),
              (t[y.tracking.screen.gameplayStop] =
                y.tracking.screen.gameplayStop),
              (t[y.tracking.screen.loadingProgress] =
                y.tracking.screen.loadingProgress),
              (t[y.tracking.screen.commercialBreak] =
                y.tracking.screen.commercialBreak),
              (t[y.tracking.screen.rewardedBreak] =
                y.tracking.screen.rewardedBreak),
              (t[y.tracking.screen.happyTime] = y.tracking.screen.happyTime),
              t);
          Object.keys(e).forEach(function (n) {
            b.addEventListener(n, function (t) {
              B.track(e[n], t);
            });
          });
        }),
        (B.debug = !1),
        B),
      v = {
        adTagUrl:
          "//pubads.g.doubleclick.net/gampad/ads?sz=640x360|640x480&iu=/1053551/Pub-Poki-Generic&ciu_szs&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url={url}&description_url={descriptionUrl}&correlator={timestamp}",
        adTiming: {
          preroll: !1,
          timeBetweenAds: 12e4,
          timePerTry: 7e3,
          startAdsAfter: 12e4,
        },
        waterfallRetries: 2,
        country: "NL",
      },
      S =
        ((_.prototype.setTimings = function (t) {
          var n = v.adTiming,
            e = t.preroll,
            i = void 0 === e ? n.preroll : e,
            r = t.timePerTry,
            e = void 0 === r ? n.timePerTry : r,
            r = t.timeBetweenAds,
            r = void 0 === r ? n.timeBetweenAds : r,
            t = t.startAdsAfter,
            t = void 0 === t ? n.startAdsAfter : t;
          this.timings = {
            preroll: !1 !== i,
            timePerTry: a(e),
            timeBetweenAds: r,
            startAdsAfter: t,
          };
        }),
        (_.prototype.startTimeBetweenAdsTimer = function () {
          this.startTimer("timeBetweenAds");
        }),
        (_.prototype.startStartAdsAfterTimer = function () {
          this.startTimer("startAdsAfter");
        }),
        (_.prototype.requestPossible = function () {
          return !this.timers.timeBetweenAds && !this.timers.startAdsAfter;
        }),
        (_.prototype.startWaterfallTimer = function (t) {
          this.startTimer("timePerTry", t);
        }),
        (_.prototype.stopWaterfallTimer = function () {
          this.stopTimer("timePerTry");
        }),
        (_.prototype.nextWaterfallTimer = function () {
          this.nextTiming("timePerTry");
        }),
        (_.prototype.resetWaterfallTimerIdx = function () {
          this.resetTimingIdx("timePerTry");
        }),
        (_.prototype.stopTimer = function (t) {
          this.timers[t] &&
            (clearTimeout(this.timers[t]), (this.timers[t] = void 0));
        }),
        (_.prototype.startTimer = function (t, n) {
          var e = this;
          void 0 === n && (n = function () {}),
            this.getTiming(t) <= 0
              ? n()
              : (this.timers[t] && clearTimeout(this.timers[t]),
                (this.timers[t] = setTimeout(function () {
                  e.stopTimer(t), n();
                }, this.getTiming(t))));
        }),
        (_.prototype.getTiming = function (t) {
          var n = this.timings[t];
          return n instanceof Array ? n[this.timingIdx[t]] : n;
        }),
        (_.prototype.nextTiming = function (t) {
          if (void 0 === this.timingIdx[t])
            throw new Error(
              "AdTimings Error: " + t + " does not have multiple timers"
            );
          this.timingIdx[t] = (this.timingIdx[t] + 1) % this.timings[t].length;
        }),
        (_.prototype.resetTimingIdx = function (t) {
          if (void 0 === this.timingIdx[t])
            throw new Error(
              "AdTimings Error: " + t + " does not have multiple timers"
            );
          this.timingIdx[t] = 0;
        }),
        (_.prototype.prerollPossible = function () {
          return this.timings.preroll;
        }),
        _),
      E = function (t, n) {
        if ("undefined" == typeof window) return "";
        t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        n = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(
          n || window.location.search
        );
        return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "));
      },
      x = {
        1: "eNjDw1AVTr",
        2: "HkuQJaWnBa",
        3: "AfRKClvdYk",
        4: "Db7uYbsnlW",
        5: "UprdYKe74r",
        6: "eHFDjD5npr",
        7: "mm1jSFJjLl",
        8: "tJ44vpLpuM",
        9: "mF5ASaga4A",
        10: "rKV8rMwiwk",
        11: "SvK8BH5qS5",
        12: "qjcaVGp8Hs",
        13: "ysxIcmt3tW",
        14: "fz6aK9wMQe",
        15: "RU6ebIFLw9",
        16: "r9G4tVMYw7",
        17: "SgcDa5B8s1",
        18: "9wDNMnChv6",
        19: "DNZX8XdJXV",
        20: "39o4YUyZTX",
        21: "5sb2HFpz5a",
        22: "pgXzCJZipE",
        23: "Oani8EAGI9",
        24: "IzCeh7d7vW",
        25: "I5vRNtjoMr",
        26: "KpySvG7luq",
        27: "dK42J4rI14",
        28: "HuYorw3fRg",
        29: "mf84cGYc1h",
        30: "I2v6sQKXVD",
        31: "lBzSdVGY8F",
        32: "hKYgk9Wb8q",
        33: "xPBr8E54eE",
        34: "ZvIK2WKC7G",
        35: "7kiYi3zlIX",
        36: "VpygYMTDgm",
        37: "mis9Mt4np4",
        38: "451KJIoEIh",
        41: "Fqmjp9Hit3",
        42: "lS2XGg058L",
        43: "3uFf2PlICy",
        46: "voeIq5uRvl",
        47: "21OybbiIdc",
        48: "9i3RwPHzWW",
        49: "CMVoMvvEmu",
        50: "IoQrhRb3wU",
      },
      T = function () {
        return (T =
          Object.assign ||
          function (t) {
            for (var n, e = 1, i = arguments.length; e < i; e++)
              for (var r in (n = arguments[e]))
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            return t;
          }).apply(this, arguments);
      },
      i = function () {
        for (var t = 0, n = 0, e = arguments.length; n < e; n++)
          t += arguments[n].length;
        for (var i = Array(t), r = 0, n = 0; n < e; n++)
          for (var o = arguments[n], a = 0, s = o.length; a < s; a++, r++)
            i[r] = o[a];
        return i;
      },
      r =
        ((o = parseInt(E("site_id"), 10) || 0),
        (r =
          d() || g() || h()
            ? ["video/mp4"]
            : ["video/mp4", "video/webm", "video/ogg"]),
        {
          bids: [
            {
              bidder: "appnexus",
              params: T(
                T(
                  { placementId: 13184250, maxduration: 15 },
                  (n = {
                    allowSmallerSizes: !0,
                    frameworks: [2],
                    h: 480,
                    w: 640,
                    video: {
                      playback_method: [
                        "auto_play_sound_on",
                        "auto_play_sound_off",
                        "auto_play_sound_unknown",
                      ],
                    },
                  })
                ),
                { video: T(T({}, n.video), { skippable: !0 }) }
              ),
            },
            {
              bidder: "appnexus",
              params: T(T({ placementId: 13184309, maxduration: 15 }, n), {
                video: T(T({}, n.video), { skippable: !1, maxduration: 15 }),
              }),
            },
            {
              bidder: "openx",
              params: {
                unit: "540105196",
                delDomain: "poki-d.openx.net",
                openrtb: {
                  imp: [
                    {
                      video: {
                        mimes: [r.join(",")],
                        protocols: [2, 3, 5, 6, 7, 8],
                        maxduration: 15,
                        skip: 1,
                        skipafter: 5,
                        w: 640,
                        h: 480,
                      },
                    },
                  ],
                },
              },
            },
            {
              bidder: "openx",
              params: {
                unit: "540719065",
                delDomain: "poki-d.openx.net",
                openrtb: {
                  imp: [
                    {
                      video: {
                        mimes: [r.join(",")],
                        protocols: [2, 3, 5, 6, 7, 8],
                        maxduration: 15,
                        skip: 0,
                        w: 640,
                        h: 480,
                      },
                    },
                  ],
                },
              },
            },
            {
              bidder: "districtm",
              params: T(T({ placementId: 12906789, maxduration: 15 }, n), {
                video: T(T({}, n.video), { skippable: !1, maxduration: 15 }),
              }),
            },
            {
              bidder: "spotx",
              params: {
                channel_id: "265590",
                ad_unit: "instream",
                secure: !0,
                mimes: r,
                hide_skin: !0,
              },
            },
            {
              bidder: "ix",
              params: {
                siteId: "436284",
                size: [640, 480],
                video: {
                  mimes: r,
                  protocols: [2, 3, 5, 6, 7, 8],
                  minduration: 0,
                  maxduration: 15,
                  api: [1, 2],
                },
              },
            },
            {
              bidder: "richaudience",
              params: { pid: x[o] || "", supplyType: "site" },
            },
          ],
          mediaTypes: {
            video: {
              context: "instream",
              playerSize: [640, 480],
              mimes: r,
              protocols: [2, 3, 5, 6, 7, 8],
              maxduration: 15,
              skip: 1,
              linearity: 1,
              api: [2],
            },
          },
        }),
      z = [
        {
          code: "video",
          mediaTypes: r.mediaTypes,
          bids: i(r.bids, [
            {
              bidder: "rubicon",
              params: {
                accountId: "18608",
                siteId: "266914",
                zoneId: "1322034",
                video: { size_id: 204 },
              },
            },
          ]),
        },
        {
          code: "rewarded",
          mediaTypes: r.mediaTypes,
          bids: i(r.bids, [
            {
              bidder: "rubicon",
              params: {
                accountId: "18608",
                siteId: "266916",
                zoneId: "1322048",
                video: { size_id: 202 },
              },
            },
          ]),
        },
      ],
      r = {
        EUR: { EUR: 1, GBP: 0.858595, USD: 1.13151 },
        GBP: { EUR: 1.164693481792929, GBP: 1, USD: 1.3178623215835172 },
        USD: { EUR: 0.8837747788353616, GBP: 0.7588046062341472, USD: 1 },
      },
      C = {
        debug: !1,
        enableSendAllBids: !0,
        usePrebidCache: !0,
        bidderTimeout: 1500,
        priceGranularity: {
          buckets: [
            { precision: 2, min: 0.01, max: 3, increment: 0.01 },
            { precision: 2, min: 3, max: 8, increment: 0.05 },
            { precision: 2, min: 8, max: 20, increment: 0.5 },
            { precision: 2, min: 20, max: 45, increment: 1 },
          ],
        },
        currency: {
          adServerCurrency: "EUR",
          rates: r,
          defaultRates: r,
          bidderCurrencyDefault: { openx: "EUR" },
        },
        cache: { url: "https://prebid.adnxs.com/pbc/v1/cache" },
        userSync: {
          filterSettings: { all: { bidders: "*", filter: "include" } },
          syncsPerBidder: 1e3,
          syncDelay: 100,
          userIds: [
            {
              name: "pubCommonId",
              storage: { type: "cookie", name: "poki_pubcid", expires: 365 },
            },
          ],
        },
      },
      I = !1;
    function _(t) {
      void 0 === t && (t = {}),
        this.setTimings(t),
        (this.timingIdx = { timePerTry: 0 }),
        (this.timers = {
          timePerTry: void 0,
          timeBetweenAds: void 0,
          startAdsAfter: void 0,
        }),
        b.addEventListener(
          y.ads.requested,
          this.startTimeBetweenAdsTimer.bind(this)
        ),
        b.addEventListener(
          y.ads.completed,
          this.startTimeBetweenAdsTimer.bind(this)
        ),
        b.addEventListener(
          y.ads.stopped,
          this.startTimeBetweenAdsTimer.bind(this)
        );
    }
    function B() {}
    function P() {}
    function D() {}
    var L =
        ((G.prototype.moveThroughWaterfall = function () {
          if (!1 !== this.running) {
            if (
              (this.timing.stopWaterfallTimer(),
              this.retries < this.totalRetries)
            )
              return this.timing.nextWaterfallTimer(), void this.requestAd();
            (this.running = !1),
              this.timing.resetWaterfallTimerIdx(),
              b.dispatchEvent(y.ads.error, { message: "No ads" });
          }
        }),
        (G.prototype.cutOffWaterfall = function () {
          this.ima.tearDown(), this.moveThroughWaterfall();
        }),
        (G.prototype.buildAdTagUrls = function (t) {
          var n =
            "&ciu_szs&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url={url}&description_url={descriptionUrl}&correlator={timestamp}";
          if (this.debug) {
            var e =
              "https://securepubads.g.doubleclick.net/gampad/ads?sz=640x360|640x480&iu=/21682198607/debug-video/";
            return t === y.ads.position.rewarded
              ? [e + "debug-video-rewarded" + n]
              : t === y.ads.position.preroll
              ? [e + "debug-video-preroll" + n]
              : [e + "debug-video-midroll" + n];
          }
          if (0 < this.overwriteAdTagUrls.length && lt.GetIsPokiPlatform())
            return this.overwriteAdTagUrls;
          var i = "desktop",
            e = "midroll";
          g() ? (i = "mobile") : h() && (i = "tablet"),
            t === y.ads.position.rewarded && (e = "rewarded");
          t =
            "https://securepubads.g.doubleclick.net/gampad/ads?sz=640x360|640x480&iu=/21682198607/";
          return lt.GetIsPokiIFrame()
            ? [
                t +
                  i +
                  "_ingame_" +
                  e +
                  "_1/" +
                  this.siteID +
                  "_" +
                  i +
                  "_ingame_" +
                  e +
                  "_1" +
                  n,
                t +
                  i +
                  "_ingame_" +
                  e +
                  "_2/" +
                  this.siteID +
                  "_" +
                  i +
                  "_ingame_" +
                  e +
                  "_2" +
                  n,
              ]
            : [
                t +
                  "external_" +
                  i +
                  "_video_1/external_" +
                  i +
                  "_ingame_" +
                  e +
                  "_1" +
                  n,
                t +
                  "external_" +
                  i +
                  "_video_2/external_" +
                  i +
                  "_ingame_" +
                  e +
                  "_2" +
                  n,
              ];
        }),
        (G.prototype.start = function (t, n) {
          void 0 === t && (t = {}),
            (this.running = !0),
            (this.retries = 0),
            (this.criteria = t),
            this.timing.resetWaterfallTimerIdx(),
            (this.rewarded = n === y.ads.position.rewarded),
            (this.adTagUrls = this.buildAdTagUrls(n)),
            this.requestAd();
        }),
        (G.prototype.requestAd = function () {
          this.timing.startWaterfallTimer(this.cutOffWaterfall.bind(this)),
            this.retries++,
            lt.GetIsPokiPlatform() || (this.criteria.waterfall = this.retries);
          var t = (this.retries - 1) % this.adTagUrls.length,
            n = this.adTagUrls[t];
          lt.consentString &&
            0 < lt.consentString.length &&
            (this.criteria.consent_string = lt.consentString);
          var e,
            i,
            r,
            o,
            a,
            s,
            d,
            c,
            u,
            l,
            n =
              ((t = n),
              (n = A().split("?")),
              (n = encodeURIComponent(n[0])),
              (t = t.split("{descriptionUrl}").join(n))
                .split("{timestamp}")
                .join(new Date().getTime().toString()) +
                ((e = this.criteria),
                (i = ""),
                Object.keys(e).forEach(function (t) {
                  var n;
                  Object.prototype.hasOwnProperty.call(e, t) &&
                    ((n = e[t]),
                    Array.isArray(n) && (n = n.join()),
                    (i += t + "=" + n + "&"));
                }),
                "&cust_params=" + (i = encodeURIComponent(i)) + "&"));
          lt.childDirected && (n += "&tfcd=1"),
            lt.nonPersonalized && (n += "&npa=1"),
            b.setDataAnnotations({ adTagUrl: n, waterfall: this.retries }),
            b.dispatchEvent(y.ads.requested),
            1 !== this.retries || g() || h()
              ? (console.debug("adRequest started in plain mode"),
                this.ima.requestAd(n))
              : (console.debug("adRequest started with Prebid Video enabled"),
                (r = this.ima),
                (o = n),
                (a = this.criteria),
                (t = this.rewarded),
                window.pbjs && window.pbjs.que && window.pbjs.getConfig
                  ? ((n = A().split("?")),
                    (d = encodeURIComponent(n[0])),
                    (c = t ? "rewarded" : "video"),
                    (u = 1),
                    (l = function () {
                      if (!(0 < --u))
                        try {
                          b.dispatchEvent(y.ads.prebidRequested);
                          var t = window.pbjs.adUnits.filter(function (t) {
                            return t.code === c;
                          })[0];
                          if ("undefined" === t)
                            return (
                              console.error(
                                "Video-ad-unit not found, did you give it the adunit.code='video' value?"
                              ),
                              void r.requestAd(o)
                            );
                          t = window.pbjs.adServers.dfp.buildVideoUrl({
                            adUnit: t,
                            params: {
                              iu: E("iu", o),
                              sz: "640x360|640x480",
                              output: "vast",
                              cust_params: a,
                              description_url: d,
                            },
                          });
                          window.pbjs.markWinningBidAsUsed({ adUnitCode: c }),
                            s &&
                              (t = t.replace(
                                "cust_params=",
                                "cust_params=" + s + "%26"
                              )),
                            r.requestAd(t);
                        } catch (t) {
                          r.requestAd(o);
                        }
                    }),
                    I &&
                      (u++,
                      window.apstag.fetchBids(
                        {
                          slots: [
                            {
                              slotID: t ? "Rewarded" : "Midroll",
                              mediaType: "video",
                            },
                          ],
                          timeout: C.bidderTimeout,
                        },
                        function (t) {
                          0 < t.length && (s = t[0].encodedQsParams), l();
                        }
                      )),
                    window.pbjs.que.push(function () {
                      window.pbjs.requestBids({
                        adUnitCodes: [c],
                        bidsBackHandler: function () {
                          l();
                        },
                      });
                    }))
                  : r.requestAd(o));
        }),
        (G.prototype.isRunning = function () {
          return this.running;
        }),
        (G.prototype.stopWaterfall = function () {
          (this.running = !1),
            this.timing.stopWaterfallTimer(),
            this.timing.resetWaterfallTimerIdx();
        }),
        (G.prototype.setDebug = function (t) {
          this.debug = t;
        }),
        G),
      O = "pokiSdkVisible",
      j =
        ((Z.prototype.setupEvents = function (t) {
          this.internalSDK = t;
        }),
        (Z.prototype.hide = function () {
          this.hideElement(this.containerDiv),
            this.hideElement(this.progressContainer),
            this.hidePauseButton(),
            this.hideElement(this.startAdButton),
            this.containerDiv.classList.remove("pokiSdkOverlay"),
            (this.progressBar.style.width = "0%");
        }),
        (Z.prototype.hideSpinner = function () {
          this.hideElement(this.spinnerContainer);
        }),
        (Z.prototype.showWithOpacity = function () {
          this.showElement(this.spinnerContainer),
            this.showElement(this.containerDiv),
            this.showElement(this.progressContainer);
        }),
        (Z.prototype.show = function () {
          this.containerDiv.classList.add("pokiSdkOverlay"),
            this.showElement(this.containerDiv),
            this.showElement(this.progressContainer);
        }),
        (Z.prototype.getVideoBounds = function () {
          return this.adContainer.getBoundingClientRect();
        }),
        (Z.prototype.getAdContainer = function () {
          return this.adContainer;
        }),
        (Z.prototype.getVideoContainer = function () {
          return this.videoContainer;
        }),
        (Z.prototype.showPauseButton = function () {
          this.showElement(this.pauseButton),
            this.internalSDK &&
              this.pauseButton.addEventListener(
                "click",
                this.internalSDK.resumeAd.bind(this.internalSDK)
              );
        }),
        (Z.prototype.hidePauseButton = function () {
          this.hideElement(this.pauseButton),
            this.internalSDK &&
              this.pauseButton.removeEventListener(
                "click",
                this.internalSDK.resumeAd.bind(this.internalSDK)
              );
        }),
        (Z.prototype.showStartAdButton = function () {
          this.showElement(this.startAdButton),
            this.internalSDK &&
              this.startAdButton.addEventListener(
                "click",
                this.internalSDK.startAdClicked.bind(this.internalSDK)
              );
        }),
        (Z.prototype.hideStartAdButton = function () {
          this.hideElement(this.startAdButton),
            this.internalSDK &&
              this.startAdButton.removeEventListener(
                "click",
                this.internalSDK.startAdClicked.bind(this.internalSDK)
              );
        }),
        (Z.prototype.createElements = function () {
          var t;
          (this.containerDiv = document.createElement("div")),
            (this.insideContainer = document.createElement("div")),
            (this.pauseButton = document.createElement("div")),
            (this.startAdButton = document.createElement("div")),
            (this.progressBar = document.createElement("div")),
            (this.progressContainer = document.createElement("div")),
            (this.spinnerContainer = document.createElement("div")),
            (this.adContainer = document.createElement("div")),
            (this.videoContainer = document.createElement("video")),
            (this.adContainer.id = "pokiSDKAdContainer"),
            (this.videoContainer.id = "pokiSDKVideoContainer"),
            (this.containerDiv.className = "pokiSdkContainer"),
            (this.insideContainer.className = "pokiSdkInsideContainer"),
            (this.pauseButton.className = "pokiSdkPauseButton"),
            (this.pauseButton.innerHTML = "Tap anywhere to ▶️"),
            (this.startAdButton.className = "pokiSdkStartAdButton"),
            (this.startAdButton.innerHTML = "Tap anywhere to play ad"),
            (this.progressBar.className = "pokiSdkProgressBar"),
            (this.progressContainer.className = "pokiSdkProgressContainer"),
            (this.spinnerContainer.className = "pokiSdkSpinnerContainer"),
            (this.adContainer.className = "pokiSDKAdContainer"),
            (this.videoContainer.className = "pokiSdkVideoContainer"),
            (this.spinnerContainer.innerHTML =
              '\n\t\t\t<div id="new-progress-spinner" style="z-index:10;position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) scale3d(0.5, 0.5, 0.5);">\n\t\t\t\t<div class="gwd-div-1v1s" data-gwd-group="SpinnerGroup">\n\t\t\t\t\t<img src="https://game-cdn.poki.com/loaders/v2/static/spinner/Sparkle_1.svg" class="gwd-img-1653 gwd-gen-no02gwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_1">\n\t\t\t\t\t<img src="https://game-cdn.poki.com/loaders/v2/static/spinner/Sparkle_2.svg" class="gwd-img-alsm gwd-gen-4pvrgwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_2">\n\t\t\t\t\t<img src="https://game-cdn.poki.com/loaders/v2/static/spinner/Sparkle_3.svg" class="gwd-img-f0mu gwd-gen-kw40gwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_3">\n\t\t\t\t\t<img src="https://game-cdn.poki.com/loaders/v2/static/spinner/Sparkle_4.svg" class="gwd-img-1sr3 gwd-gen-2uv8gwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_4">\n\t\t\t\t\t<img src="https://game-cdn.poki.com/loaders/v2/static/spinner/Sparkle_5.svg" class="gwd-img-1ffn gwd-gen-1x97gwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_5">\n\t\t\t\t\t<img src="https://game-cdn.poki.com/loaders/v2/static/spinner/Sparkle_6.svg" class="gwd-img-16f3 gwd-gen-1i1egwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_6">\n\t\t\t\t\t<img src="https://game-cdn.poki.com/loaders/v2/static/spinner/Sparkle_7.svg" class="gwd-img-1rrs gwd-gen-1sapgwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_7">\n\t\t\t\t\t<img src="https://game-cdn.poki.com/loaders/v2.0/static/hand_fingers_isolated.svg" class="gwd-img-1dhi gwd-gen-5qotgwdanimation gwd-grp-13td" data-gwd-grp-id="heart">\n\t\t\t\t\t<img src="https://game-cdn.poki.com/loaders/v2/static/spinner/shadow_new_3.svg" class="gwd-img-1izg gwd-gen-faadgwdanimation gwd-grp-13td" data-gwd-grp-id="shadow_new_3">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'),
            this.hide(),
            this.videoContainer.setAttribute("playsinline", "playsinline"),
            this.videoContainer.setAttribute("muted", "muted"),
            this.containerDiv.appendChild(this.insideContainer),
            this.containerDiv.appendChild(this.spinnerContainer),
            this.insideContainer.appendChild(this.progressContainer),
            this.insideContainer.appendChild(this.videoContainer),
            this.insideContainer.appendChild(this.adContainer),
            this.containerDiv.appendChild(this.pauseButton),
            this.containerDiv.appendChild(this.startAdButton),
            this.progressContainer.appendChild(this.progressBar),
            this.wrapper.appendChild(this.containerDiv),
            this.wrapper === document.body
              ? this.containerDiv.classList.add("pokiSdkFixed")
              : ((t = window.getComputedStyle(this.wrapper).position) &&
                  -1 !== ["absolute", "fixed", "relative"].indexOf(t)) ||
                (this.wrapper.style.position = "relative");
        }),
        Z),
      R = !0,
      M = {};
    function Z(t) {
      var n = this;
      (this.hideElement = function (t) {
        t.classList.add("pokiSdkHidden"), t.classList.remove(O);
      }),
        (this.showElement = function (t) {
          t.classList.add(O), t.classList.remove("pokiSdkHidden");
        }),
        (this.wrapper = t.wrapper),
        b.addEventListener(y.ads.video.progress, function (t) {
          t = (t.currentTime / t.duration) * 100;
          t < 100 && (n.progressBar.style.width = t + "%");
        }),
        this.wrapper instanceof HTMLElement ||
          (console.error(
            "POKI-SDK: wrapper is not a HTMLElement, falling back to document.body"
          ),
          (this.wrapper = document.body)),
        this.createElements(),
        "undefined" != typeof window &&
          document &&
          (((t = document.createElement("style")).innerHTML =
            "\n@font-face {\n\tfont-display: swap;\n\tfont-family: 'Proxima Nova';\n\tfont-weight: 700;\n\tsrc: url(https://a.poki.com/fonts/proxima-nova-bold-latin.woff2) format('woff2'), url(https://a.poki.com/fonts/proxima-nova-bold-latin.woff) format('woff');\n\tunicode-range: U+0020-007F, U+00A0-00FF\n}\n\n@font-face {\n\tfont-display: swap;\n\tfont-family: 'Proxima Nova';\n\tfont-weight: 700;\n\tsrc: url(https://a.poki.com/fonts/proxima-nova-bold-latin-ext-a.woff2) format('woff2'), url(https://a.poki.com/fonts/proxima-nova-bold-latin-ext-a.woff) format('woff');\n\tunicode-range: U+0100-017F\n}\n\n@font-face {\n\tfont-display: swap;\n\tfont-family: 'Proxima Nova';\n\tfont-weight: 700;\n\tsrc: url(https://a.poki.com/fonts/proxima-nova-bold-latin-ext-b.woff2) format('woff2'), url(https://a.poki.com/fonts/proxima-nova-bold-latin-ext-b.woff) format('woff');\n\tunicode-range: U+0180-024F\n}\n\n.pokiSdkContainer {\n\toverflow: hidden;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 1000;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.pokiSdkContainer.pokiSdkFixed {\n\tposition: fixed;\n}\n\n.pokiSdkContainer.pokiSdkVisible {\n\tdisplay: block;\n}\n\n.pokiSdkContainer.pokiSdkHidden, .pokiSdkSpinnerContainer.pokiSdkHidden {\n\tdisplay: none;\n}\n\n.pokiSdkContainer.pokiSdkHidden, .pokiSdkSpinnerContainer, .pokiSdkSpinnerContainer div, .pokiSdkSpinnerContainer img {\n\tpointer-events: none;\n}\n\n.pokiSdkInsideContainer {\n\tbackground: #000;\n\tposition: relative;\n\tz-index: 1;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\n\topacity: 0;\n\t-webkit-transition: opacity 0.5s ease-in-out;\n\t-moz-transition: opacity 0.5s ease-in-out;\n\t-ms-transition: opacity 0.5s ease-in-out;\n\t-o-transition: opacity 0.5s ease-in-out;\n\ttransition: opacity 0.5s ease-in-out;\n}\n\n.pokiSdkContainer.pokiSdkVisible .pokiSdkInsideContainer {\n\topacity: 1;\n}\n\n.pokiSDKAdContainer, .pokiSdkVideoContainer {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.pokiSdkStartAdButton, .pokiSdkPauseButton {\n\tposition: absolute;\n\tz-index: 9999;\n\ttop: 0;\n\n\tpadding-top: 10%;\n\twidth: 100%;\n\theight: 100%;\n\ttext-align: center;\n\tcolor: #FFF;\n\n\tfont: 700 16pt 'Proxima Nova', sans-serif;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n\ttransition: 0.1s ease-in-out;\n\tline-height: 1em;\n}\n\n.pokiSdkProgressContainer {\n\tbackground: #002B50;\n\twidth: 100%;\n\theight: 5px;\n\tposition: absolute;\n\tbottom: 0;\n\tz-index: 9999;\n}\n\n.pokiSdkProgressBar {\n\tposition:relative;\n\tbottom:0px;\n\tbackground: #009CFF;\n\theight: 100%;\n\twidth: 0%;\n\ttransition: width 0.5s;\n\ttransition-timing-function: linear;\n}\n\n.pokiSdkProgressBar.pokiSdkVisible, .pokiSdkPauseButton.pokiSdkVisible, .pokiSdkStartAdButton.pokiSdkVisible {\n\tdisplay: block;\n\tpointer-events: auto;\n}\n\n.pokiSdkProgressBar.pokiSdkHidden, .pokiSdkPauseButton.pokiSdkHidden, .pokiSdkStartAdButton.pokiSdkHidden {\n\tdisplay: none;\n\tpointer-events: none;\n}\n\n\n@keyframes gwd-gen-no02gwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}35%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}40%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-no02gwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}35%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}40%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-no02gwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}35%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}40%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-no02gwdanimation{animation:gwd-gen-no02gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-no02gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-no02gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-4pvrgwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}40%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}45%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-4pvrgwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}40%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}45%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-4pvrgwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}40%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}45%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-4pvrgwdanimation{animation:gwd-gen-4pvrgwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-4pvrgwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-4pvrgwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-kw40gwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}45%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}50%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-kw40gwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}45%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}50%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-kw40gwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}45%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}50%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-kw40gwdanimation{animation:gwd-gen-kw40gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-kw40gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-kw40gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-2uv8gwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}50%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}55%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-2uv8gwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}50%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}55%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-2uv8gwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}50%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}55%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-2uv8gwdanimation{animation:gwd-gen-2uv8gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-2uv8gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-2uv8gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-1x97gwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}55%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}60%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-1x97gwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}55%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}60%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-1x97gwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}55%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}60%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-1x97gwdanimation{animation:gwd-gen-1x97gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-1x97gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-1x97gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-1i1egwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}60%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}65%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-1i1egwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}60%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}65%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-1i1egwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}60%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}65%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-1i1egwdanimation{animation:gwd-gen-1i1egwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-1i1egwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-1i1egwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-1sapgwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}65%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}70%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-1sapgwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}65%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}70%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-1sapgwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}65%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}70%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-1sapgwdanimation{animation:gwd-gen-1sapgwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-1sapgwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-1sapgwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-5qotgwdanimation_gwd-keyframes{0%{transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);animation-timing-function:cubic-bezier(1,0,.58,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}12.5%{transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);animation-timing-function:cubic-bezier(.42,0,0,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}25%{transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);animation-timing-function:cubic-bezier(1,0,.58,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}37.5%{transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);animation-timing-function:cubic-bezier(.42,0,0,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}50%{transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);animation-timing-function:cubic-bezier(1,0,.58,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}62.5%{transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);animation-timing-function:cubic-bezier(.42,0,0,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}75%{transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);animation-timing-function:cubic-bezier(1,0,.58,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}87.5%{transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);animation-timing-function:cubic-bezier(.42,0,0,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}100%{transform:translate3d(0,0,0) rotateZ(360deg) scale3d(1,1,1);-webkit-transform:translate3d(0,0,0) rotateZ(360deg) scale3d(1,1,1);-moz-transform:translate3d(0,0,0) rotateZ(360deg) scale3d(1,1,1);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-5qotgwdanimation_gwd-keyframes{0%{-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1)}12.5%{-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1)}25%{-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1)}37.5%{-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1)}50%{-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1)}62.5%{-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1)}75%{-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1)}87.5%{-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1)}100%{-webkit-transform:translate3d(0,0,0) rotateZ(360deg) scale3d(1,1,1);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-5qotgwdanimation_gwd-keyframes{0%{-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}12.5%{-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}25%{-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}37.5%{-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}50%{-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}62.5%{-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}75%{-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}87.5%{-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}100%{-moz-transform:translate3d(0,0,0) rotateZ(360deg) scale3d(1,1,1);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-5qotgwdanimation{animation:gwd-gen-5qotgwdanimation_gwd-keyframes 4s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-5qotgwdanimation_gwd-keyframes 4s linear 0s infinite normal forwards;-moz-animation:gwd-gen-5qotgwdanimation_gwd-keyframes 4s linear 0s infinite normal forwards}@keyframes gwd-gen-faadgwdanimation_gwd-keyframes{0%{opacity:.2;transform:scale3d(.5,.8,1);-webkit-transform:scale3d(.5,.8,1);-moz-transform:scale3d(.5,.8,1);animation-timing-function:cubic-bezier(1,0,.58,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}50%{opacity:.5;transform:scale3d(1,.8,1);-webkit-transform:scale3d(1,.8,1);-moz-transform:scale3d(1,.8,1);animation-timing-function:cubic-bezier(.42,0,0,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}100%{opacity:.2;transform:scale3d(.5,.8,1);-webkit-transform:scale3d(.5,.8,1);-moz-transform:scale3d(.5,.8,1);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-faadgwdanimation_gwd-keyframes{0%{opacity:.2;-webkit-transform:scale3d(.5,.8,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1)}50%{opacity:.5;-webkit-transform:scale3d(1,.8,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1)}100%{opacity:.2;-webkit-transform:scale3d(.5,.8,1);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-faadgwdanimation_gwd-keyframes{0%{opacity:.2;-moz-transform:scale3d(.5,.8,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}50%{opacity:.5;-moz-transform:scale3d(1,.8,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}100%{opacity:.2;-moz-transform:scale3d(.5,.8,1);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-faadgwdanimation{animation:gwd-gen-faadgwdanimation_gwd-keyframes 1s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-faadgwdanimation_gwd-keyframes 1s linear 0s infinite normal forwards;-moz-animation:gwd-gen-faadgwdanimation_gwd-keyframes 1s linear 0s infinite normal forwards}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-1653{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-alsm{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-f0mu{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-1sr3{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-1ffn{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-16f3{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-1rrs{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-1dhi{position:absolute;transform-origin:283.711px 283.516px 0;-webkit-transform-origin:283.711px 283.516px 0;-moz-transform-origin:283.711px 283.516px 0;height:568px;width:568px;top:0;transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);transform-style:preserve-3d;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-1izg{position:absolute;width:568px;height:604.02px;opacity:.2;transform-style:preserve-3d;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform:scale3d(.5,.8,1);-webkit-transform:scale3d(.5,.8,1);-moz-transform:scale3d(.5,.8,1);top:55px;left:0}[data-gwd-group=SpinnerGroup]{width:611.979px;height:598.605px}.gwd-div-1v1s{transform:scale(.5,.5)}\n"),
          document.head.appendChild(t));
    }
    function G(t, n) {
      void 0 === n && (n = {}),
        (this.retries = 0),
        (this.running = !1),
        (this.ima = t),
        (this.siteID = n.siteID || 3),
        0 === n.siteID && (n.siteID = 3),
        (this.totalRetries = n.totalRetries || v.waterfallRetries || 1),
        (this.timing = n.timing || new S(v.adTiming)),
        (this.overwriteAdTagUrls = n.adTagUrl ? a(n.adTagUrl) : []),
        b.addEventListener(
          y.ads.video.error,
          this.moveThroughWaterfall.bind(this)
        ),
        b.addEventListener(
          y.ads.video.loaderError,
          this.moveThroughWaterfall.bind(this)
        ),
        b.addEventListener(
          y.ads.ready,
          this.timing.stopWaterfallTimer.bind(this.timing)
        ),
        b.addEventListener(y.ads.started, this.stopWaterfall.bind(this));
    }
    var N = [
        "AT",
        "BE",
        "BG",
        "HR",
        "CY",
        "CZ",
        "DK",
        "EE",
        "FI",
        "FR",
        "DE",
        "GR",
        "HU",
        "IE",
        "IT",
        "LV",
        "LT",
        "LU",
        "MT",
        "NL",
        "PL",
        "PT",
        "RO",
        "SK",
        "SI",
        "ES",
        "SE",
        "GB",
        "IS",
        "LI",
        "NO",
      ],
      F = ["US"],
      X = ["ZZ"];
    function U(t) {
      return N.includes(t);
    }
    function Q(t) {
      return X.includes(t);
    }
    function H(t, a, s, d) {
      return new (s = s || Promise)(function (e, n) {
        function i(t) {
          try {
            o(d.next(t));
          } catch (t) {
            n(t);
          }
        }
        function r(t) {
          try {
            o(d.throw(t));
          } catch (t) {
            n(t);
          }
        }
        function o(t) {
          var n;
          t.done
            ? e(t.value)
            : ((n = t.value) instanceof s
                ? n
                : new s(function (t) {
                    t(n);
                  })
              ).then(i, r);
        }
        o((d = d.apply(t, a || [])).next());
      });
    }
    function W(e, i) {
      var r,
        o,
        a,
        s = {
          label: 0,
          sent: function () {
            if (1 & a[0]) throw a[1];
            return a[1];
          },
          trys: [],
          ops: [],
        },
        t = { next: n(0), throw: n(1), return: n(2) };
      return (
        "function" == typeof Symbol &&
          (t[Symbol.iterator] = function () {
            return this;
          }),
        t
      );
      function n(n) {
        return function (t) {
          return (function (n) {
            if (r) throw new TypeError("Generator is already executing.");
            for (; s; )
              try {
                if (
                  ((r = 1),
                  o &&
                    (a =
                      2 & n[0]
                        ? o.return
                        : n[0]
                        ? o.throw || ((a = o.return) && a.call(o), 0)
                        : o.next) &&
                    !(a = a.call(o, n[1])).done)
                )
                  return a;
                switch (((o = 0), a && (n = [2 & n[0], a.value]), n[0])) {
                  case 0:
                  case 1:
                    a = n;
                    break;
                  case 4:
                    return s.label++, { value: n[1], done: !1 };
                  case 5:
                    s.label++, (o = n[1]), (n = [0]);
                    continue;
                  case 7:
                    (n = s.ops.pop()), s.trys.pop();
                    continue;
                  default:
                    if (
                      !(
                        (a = 0 < (a = s.trys).length && a[a.length - 1]) ||
                        (6 !== n[0] && 2 !== n[0])
                      )
                    ) {
                      s = 0;
                      continue;
                    }
                    if (3 === n[0] && (!a || (n[1] > a[0] && n[1] < a[3]))) {
                      s.label = n[1];
                      break;
                    }
                    if (6 === n[0] && s.label < a[1]) {
                      (s.label = a[1]), (a = n);
                      break;
                    }
                    if (a && s.label < a[2]) {
                      (s.label = a[2]), s.ops.push(n);
                      break;
                    }
                    a[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }
                n = i.call(e, s);
              } catch (t) {
                (n = [6, t]), (o = 0);
              } finally {
                r = a = 0;
              }
            if (5 & n[0]) throw n[1];
            return { value: n[0] ? n[1] : void 0, done: !0 };
          })([n, t]);
        };
      }
    }
    function V(r) {
      return new Promise(function (t, n) {
        var e = document.createElement("script");
        (e.type = "text/javascript"), (e.async = !0), (e.src = r);
        function i() {
          (e.readyState &&
            "loaded" !== e.readyState &&
            "complete" !== e.readyState) ||
            (t(), (e.onload = null), (e.onreadystatechange = null));
        }
        (e.onload = i),
          (e.onreadystatechange = i),
          (e.onerror = n),
          document.head.appendChild(e);
      });
    }
    function q(t, a, s, d) {
      return new (s = s || Promise)(function (e, n) {
        function i(t) {
          try {
            o(d.next(t));
          } catch (t) {
            n(t);
          }
        }
        function r(t) {
          try {
            o(d.throw(t));
          } catch (t) {
            n(t);
          }
        }
        function o(t) {
          var n;
          t.done
            ? e(t.value)
            : ((n = t.value) instanceof s
                ? n
                : new s(function (t) {
                    t(n);
                  })
              ).then(i, r);
        }
        o((d = d.apply(t, a || [])).next());
      });
    }
    function K(e, i) {
      var r,
        o,
        a,
        s = {
          label: 0,
          sent: function () {
            if (1 & a[0]) throw a[1];
            return a[1];
          },
          trys: [],
          ops: [],
        },
        t = { next: n(0), throw: n(1), return: n(2) };
      return (
        "function" == typeof Symbol &&
          (t[Symbol.iterator] = function () {
            return this;
          }),
        t
      );
      function n(n) {
        return function (t) {
          return (function (n) {
            if (r) throw new TypeError("Generator is already executing.");
            for (; s; )
              try {
                if (
                  ((r = 1),
                  o &&
                    (a =
                      2 & n[0]
                        ? o.return
                        : n[0]
                        ? o.throw || ((a = o.return) && a.call(o), 0)
                        : o.next) &&
                    !(a = a.call(o, n[1])).done)
                )
                  return a;
                switch (((o = 0), a && (n = [2 & n[0], a.value]), n[0])) {
                  case 0:
                  case 1:
                    a = n;
                    break;
                  case 4:
                    return s.label++, { value: n[1], done: !1 };
                  case 5:
                    s.label++, (o = n[1]), (n = [0]);
                    continue;
                  case 7:
                    (n = s.ops.pop()), s.trys.pop();
                    continue;
                  default:
                    if (
                      !(
                        (a = 0 < (a = s.trys).length && a[a.length - 1]) ||
                        (6 !== n[0] && 2 !== n[0])
                      )
                    ) {
                      s = 0;
                      continue;
                    }
                    if (3 === n[0] && (!a || (n[1] > a[0] && n[1] < a[3]))) {
                      s.label = n[1];
                      break;
                    }
                    if (6 === n[0] && s.label < a[1]) {
                      (s.label = a[1]), (a = n);
                      break;
                    }
                    if (a && s.label < a[2]) {
                      (s.label = a[2]), s.ops.push(n);
                      break;
                    }
                    a[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }
                n = i.call(e, s);
              } catch (t) {
                (n = [6, t]), (o = 0);
              } finally {
                r = a = 0;
              }
            if (5 & n[0]) throw n[1];
            return { value: n[0] ? n[1] : void 0, done: !0 };
          })([n, t]);
        };
      }
    }
    var J =
      ((Y.prototype.initAdDisplayContainer = function () {
        this.adDisplayContainer ||
          (this.adDisplayContainer = new google.ima.AdDisplayContainer(
            document.getElementById("pokiSDKAdContainer"),
            this.videoElement
          ));
      }),
      (Y.prototype.initBlankVideo = function () {
        (this.blankVideo = document.createElement("video")),
          this.blankVideo.setAttribute("playsinline", "playsinline");
        var t = document.createElement("source");
        (t.src =
          "data:video/mp4;base64, AAAAHGZ0eXBNNFYgAAACAGlzb21pc28yYXZjMQAAAAhmcmVlAAAGF21kYXTeBAAAbGliZmFhYyAxLjI4AABCAJMgBDIARwAAArEGBf//rdxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxNDIgcjIgOTU2YzhkOCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTQgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0wIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDE6MHgxMTEgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz02IGxvb2thaGVhZF90aHJlYWRzPTEgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTI1MCBrZXlpbnRfbWluPTI1IHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCB2YnZfbWF4cmF0ZT03NjggdmJ2X2J1ZnNpemU9MzAwMCBjcmZfbWF4PTAuMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAFZliIQL8mKAAKvMnJycnJycnJycnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXiEASZACGQAjgCEASZACGQAjgAAAAAdBmjgX4GSAIQBJkAIZACOAAAAAB0GaVAX4GSAhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGagC/AySEASZACGQAjgAAAAAZBmqAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZrAL8DJIQBJkAIZACOAAAAABkGa4C/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmwAvwMkhAEmQAhkAI4AAAAAGQZsgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGbQC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm2AvwMkhAEmQAhkAI4AAAAAGQZuAL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGboC/AySEASZACGQAjgAAAAAZBm8AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZvgL8DJIQBJkAIZACOAAAAABkGaAC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmiAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpAL8DJIQBJkAIZACOAAAAABkGaYC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmoAvwMkhAEmQAhkAI4AAAAAGQZqgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGawC/AySEASZACGQAjgAAAAAZBmuAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZsAL8DJIQBJkAIZACOAAAAABkGbIC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm0AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZtgL8DJIQBJkAIZACOAAAAABkGbgCvAySEASZACGQAjgCEASZACGQAjgAAAAAZBm6AnwMkhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AAAAhubW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAABDcAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAzB0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAA+kAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAALAAAACQAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPpAAAAAAABAAAAAAKobWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAB1MAAAdU5VxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAACU21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAhNzdGJsAAAAr3N0c2QAAAAAAAAAAQAAAJ9hdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAALAAkABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAALWF2Y0MBQsAN/+EAFWdCwA3ZAsTsBEAAAPpAADqYA8UKkgEABWjLg8sgAAAAHHV1aWRraEDyXyRPxbo5pRvPAyPzAAAAAAAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAABRzdHNzAAAAAAAAAAEAAAABAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAIxzdHN6AAAAAAAAAAAAAAAeAAADDwAAAAsAAAALAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAAiHN0Y28AAAAAAAAAHgAAAEYAAANnAAADewAAA5gAAAO0AAADxwAAA+MAAAP2AAAEEgAABCUAAARBAAAEXQAABHAAAASMAAAEnwAABLsAAATOAAAE6gAABQYAAAUZAAAFNQAABUgAAAVkAAAFdwAABZMAAAWmAAAFwgAABd4AAAXxAAAGDQAABGh0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAACAAAAAAAABDcAAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAQkAAADcAABAAAAAAPgbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAC7gAAAykBVxAAAAAAALWhkbHIAAAAAAAAAAHNvdW4AAAAAAAAAAAAAAABTb3VuZEhhbmRsZXIAAAADi21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAADT3N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAgAEgICAFEAVBbjYAAu4AAAADcoFgICAAhGQBoCAgAECAAAAIHN0dHMAAAAAAAAAAgAAADIAAAQAAAAAAQAAAkAAAAFUc3RzYwAAAAAAAAAbAAAAAQAAAAEAAAABAAAAAgAAAAIAAAABAAAAAwAAAAEAAAABAAAABAAAAAIAAAABAAAABgAAAAEAAAABAAAABwAAAAIAAAABAAAACAAAAAEAAAABAAAACQAAAAIAAAABAAAACgAAAAEAAAABAAAACwAAAAIAAAABAAAADQAAAAEAAAABAAAADgAAAAIAAAABAAAADwAAAAEAAAABAAAAEAAAAAIAAAABAAAAEQAAAAEAAAABAAAAEgAAAAIAAAABAAAAFAAAAAEAAAABAAAAFQAAAAIAAAABAAAAFgAAAAEAAAABAAAAFwAAAAIAAAABAAAAGAAAAAEAAAABAAAAGQAAAAIAAAABAAAAGgAAAAEAAAABAAAAGwAAAAIAAAABAAAAHQAAAAEAAAABAAAAHgAAAAIAAAABAAAAHwAAAAQAAAABAAAA4HN0c3oAAAAAAAAAAAAAADMAAAAaAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAACMc3RjbwAAAAAAAAAfAAAALAAAA1UAAANyAAADhgAAA6IAAAO+AAAD0QAAA+0AAAQAAAAEHAAABC8AAARLAAAEZwAABHoAAASWAAAEqQAABMUAAATYAAAE9AAABRAAAAUjAAAFPwAABVIAAAVuAAAFgQAABZ0AAAWwAAAFzAAABegAAAX7AAAGFwAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTUuMzMuMTAw"),
          this.blankVideo.appendChild(t);
      }),
      (Y.prototype.initAdsLoader = function () {
        var t = this;
        this.adsLoader ||
          ((this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer)),
          this.adsLoader
            .getSettings()
            .setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.INSECURE),
          this.adsLoader.getSettings().setDisableCustomPlaybackForIOS10Plus(!0),
          this.adsLoader.addEventListener(
            google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
            this.onAdsManagerLoaded,
            !1,
            this
          ),
          this.adsLoader.addEventListener(
            google.ima.AdErrorEvent.Type.AD_ERROR,
            this.onAdLoaderError,
            !1,
            this
          ),
          this.videoElement.addEventListener("onended", function () {
            return t.adsLoader.contentComplete();
          }));
      }),
      (Y.prototype.requestAd = function (e) {
        return H(this, void 0, void 0, function () {
          var n;
          return W(this, function (t) {
            switch (t.label) {
              case 0:
                return this.runningAd
                  ? [2]
                  : ((this.runningAd = !0),
                    this.adDisplayContainer.initialize(),
                    (this.videoElement.src = ""),
                    ((n = new google.ima.AdsRequest()).adTagUrl = e),
                    (n.linearAdSlotWidth = this.currentWidth),
                    (n.linearAdSlotHeight = this.currentHeight),
                    (n.nonLinearAdSlotWidth = this.currentWidth),
                    (n.nonLinearAdSlotHeight = this.currentHeight),
                    (n.forceNonLinearFullSlot = !0),
                    [4, this.canWeAutoPlayWithSound()]);
              case 1:
                return (
                  t.sent()
                    ? (n.setAdWillPlayMuted(!1),
                      (this.currentRequestIsMuted = !1))
                    : (n.setAdWillPlayMuted(!0),
                      (this.currentRequestIsMuted = !0)),
                  (this.allowedToPlayAd = !0),
                  this.adsLoader.requestAds(n),
                  [2]
                );
            }
          });
        });
      }),
      (Y.prototype.resize = function (t, n, e) {
        void 0 === e && (e = google.ima.ViewMode.NORMAL),
          (this.currentWidth = t),
          (this.currentHeight = n),
          this.adsManager && this.adsManager.resize(t, n, e);
      }),
      (Y.prototype.onAdsManagerLoaded = function (t) {
        var n = new google.ima.AdsRenderingSettings();
        (n.enablePreloading = !0),
          (n.restoreCustomPlaybackStateOnAdBreakComplete = !0),
          (n.mimeTypes =
            d() || g() || h()
              ? ["video/mp4"]
              : ["video/mp4", "video/webm", "video/ogg"]),
          (this.adsManager = t.getAdsManager(this.videoElement, n)),
          this.adsManager.setVolume(Math.max(0, Math.min(1, this.volume))),
          this.currentRequestIsMuted && this.adsManager.setVolume(0),
          this.allowedToPlayAd
            ? (this.attachAdEvents(), b.dispatchEvent(y.ads.ready))
            : this.tearDown();
      }),
      (Y.prototype.setVolume = function (t) {
        (this.volume = t),
          this.adsManager &&
            this.adsManager.setVolume(Math.max(0, Math.min(1, this.volume)));
      }),
      (Y.prototype.startPlayback = function () {
        try {
          this.adsManager.init(
            this.currentWidth,
            this.currentHeight,
            google.ima.ViewMode.NORMAL
          ),
            this.adsManager.start();
        } catch (t) {
          this.videoElement.play();
        }
      }),
      (Y.prototype.startIOSPlayback = function () {
        this.adsManager.start();
      }),
      (Y.prototype.stopPlayback = function () {
        b.dispatchEvent(y.ads.stopped), this.tearDown();
      }),
      (Y.prototype.resumeAd = function () {
        b.dispatchEvent(y.ads.video.resumed),
          this.adsManager && this.adsManager.resume();
      }),
      (Y.prototype.tearDown = function () {
        this.adsManager &&
          (this.adsManager.stop(),
          this.adsManager.destroy(),
          (this.adsManager = null)),
          null !== this.bannerTimeout &&
            (clearTimeout(this.bannerTimeout), (this.bannerTimeout = null)),
          this.adsLoader &&
            (this.adsLoader.contentComplete(),
            this.adsLoader.destroy(),
            (this.adsLoader = null),
            this.initAdsLoader()),
          (this.runningAd = !1);
      }),
      (Y.prototype.attachAdEvents = function () {
        var n = this,
          t = google.ima.AdEvent.Type;
        this.adsManager.addEventListener(
          google.ima.AdErrorEvent.Type.AD_ERROR,
          this.onAdError,
          !1,
          this
        ),
          [
            t.AD_PROGRESS,
            t.ALL_ADS_COMPLETED,
            t.CLICK,
            t.COMPLETE,
            t.IMPRESSION,
            t.PAUSED,
            t.SKIPPED,
            t.STARTED,
            t.USER_CLOSE,
            t.AD_BUFFERING,
          ].forEach(function (t) {
            n.adsManager.addEventListener(t, n.onAdEvent, !1, n);
          });
      }),
      (Y.prototype.onAdEvent = function (t) {
        var n = this,
          e = t.getAd();
        switch (t.type) {
          case google.ima.AdEvent.Type.AD_PROGRESS:
            b.dispatchEvent(y.ads.video.progress, t.getAdData());
            break;
          case google.ima.AdEvent.Type.STARTED:
            (t.remainingTime = this.adsManager.getRemainingTime()),
              t.remainingTime <= 0 && (t.remainingTime = 15),
              e.isLinear() ||
                (this.bannerTimeout = window.setTimeout(function () {
                  b.dispatchEvent(y.ads.completed, {
                    rewardAllowed: !!t.rewardAllowed,
                  }),
                    n.tearDown();
                }, 1e3 * (t.remainingTime + 1))),
              b.dispatchEvent(y.ads.started, {
                creativeId: e.getCreativeId(),
                adId: e.getAdId(),
                duration: e.getDuration(),
              });
            break;
          case google.ima.AdEvent.Type.COMPLETE:
            b.dispatchEvent(y.ads.completed, { rewardAllowed: !0 }),
              this.tearDown();
            break;
          case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
          case google.ima.AdEvent.Type.USER_CLOSE:
            this.tearDown();
            break;
          case google.ima.AdEvent.Type.PAUSED:
            this.adsManager.pause(), b.dispatchEvent(y.ads.video.paused);
            break;
          case google.ima.AdEvent.Type.AD_BUFFERING:
            b.dispatchEvent(y.ads.video.buffering);
            break;
          case google.ima.AdEvent.Type.CLICK:
            b.dispatchEvent(y.ads.video.clicked);
            break;
          case google.ima.AdEvent.Type.SKIPPED:
            b.dispatchEvent(y.ads.skipped),
              b.dispatchEvent(y.ads.completed),
              document.activeElement && document.activeElement.blur();
            break;
          case google.ima.AdEvent.Type.IMPRESSION:
            b.dispatchEvent(y.ads.impression, {
              userValueIndicator: (function (t) {
                try {
                  var n = window.pbjs.getBidResponsesForAdUnitCode(t).bids;
                  window.pokiAuctionsSeen || (window.pokiAuctionsSeen = {}),
                    window.pokiAuctionsSeen[t] ||
                      (window.pokiAuctionsSeen[t] = {});
                  var e = 0;
                  if (n) {
                    for (var i, r = 0; r < n.length; r++)
                      window.pokiAuctionsSeen[t][n[r].auctionId] ||
                        ((i = n[r].cpm) && e < i && (e = i));
                    for (r = 0; r < n.length; r++)
                      window.pokiAuctionsSeen[t][n[r].auctionId] = !0;
                  }
                  return e;
                } catch (t) {
                  console.error(t);
                }
                return 0;
              })(
                b.getDataAnnotations().position === y.ads.position.rewarded
                  ? "rewarded"
                  : "video"
              ),
            });
        }
      }),
      (Y.prototype.onAdLoaderError = function (t) {
        this.tearDown();
        t = (t.getError && t.getError().toString()) || "Unknown";
        b.dispatchEvent(y.ads.video.loaderError, { message: t });
      }),
      (Y.prototype.onAdError = function (t) {
        this.tearDown();
        t = (t.getError && t.getError().toString()) || "Unknown";
        b.dispatchEvent(y.ads.video.error, { message: t });
      }),
      (Y.prototype.muteAd = function () {
        void 0 !== this.adsManager &&
          null != this.adsManager &&
          this.adsManager.setVolume(0);
      }),
      (Y.prototype.isAdRunning = function () {
        return this.runningAd;
      }),
      Y);
    function Y(t) {
      var n = this;
      (this.bannerTimeout = null),
        (this.allowedToPlayAd = !1),
        (this.runningAd = !1),
        (this.currentWidth = 640),
        (this.currentHeight = 480),
        (this.currentRequestIsMuted = !1),
        (this.volume = 1),
        (this.canWeAutoPlayWithSound = function () {
          return H(n, void 0, void 0, function () {
            return W(this, function (t) {
              switch (t.label) {
                case 0:
                  if (!this.blankVideo) return [2, !1];
                  t.label = 1;
                case 1:
                  return t.trys.push([1, 3, , 4]), [4, this.blankVideo.play()];
                case 2:
                  return t.sent(), [2, !0];
                case 3:
                  return t.sent(), [2, !1];
                case 4:
                  return [2];
              }
            });
          });
        }),
        (this.videoElement = document.getElementById("pokiSDKVideoContainer")),
        (this.adsManager = null),
        (this.volume = t),
        this.initAdDisplayContainer(),
        this.initBlankVideo(),
        this.initAdsLoader();
    }
    function $() {
      var t = window.location.pathname;
      return (
        "/" !== t[0] && (t = "/" + t),
        encodeURIComponent(
          window.location.protocol +
            "//" +
            window.location.host +
            t +
            window.location.search
        ),
        encodeURIComponent(document.referrer),
        fetch("", { method: "GET", headers: { "Content-Type": "text/plain" } })
          .then(function (e) {
            return q(void 0, void 0, void 0, function () {
              var n;
              return K(this, function (t) {
                switch (t.label) {
                  case 0:
                    return 200 <= e.status && e.status < 400
                      ? [4, e.json()]
                      : [3, 2];
                  case 1:
                    return (n = t.sent()).game_id
                      ? [
                          2,
                          {
                            gameId: n.game_id,
                            adTiming: {
                              preroll: n.ad_settings.preroll,
                              timePerTry: n.ad_settings.time_per_try,
                              timeBetweenAds: n.ad_settings.time_between_ads,
                              startAdsAfter: n.ad_settings.start_ads_after,
                            },
                          },
                        ]
                      : [2, void 0];
                  case 2:
                    throw e;
                }
              });
            });
          })
          .catch(function (t) {
            return (function (A) {
              return q(this, void 0, void 0, function () {
                var n, e, i, r, o, a, s, d, c, u, l;
                return K(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        t.trys.push([0, 3, , 4]),
                        "/" !== (n = window.location.pathname)[0] &&
                          (n = "/" + n),
                        (r = (i = JSON).stringify),
                        (o = { c: "sdk-p4d-error", ve: 7 }),
                        (a = { k: "error" }),
                        (d = (s = JSON).stringify),
                        (c = { status: A.status }),
                        (u = A.json) ? [4, A.json()] : [3, 2]
                      );
                    case 1:
                      (u = t.sent()), (t.label = 2);
                    case 2:
                      if (
                        ((e = r.apply(i, [
                          ((o.d = [
                            ((a.v = d.apply(s, [
                              ((c.json = u),
                              (c.body = JSON.stringify({
                                href:
                                  window.location.protocol +
                                  "//" +
                                  window.location.host +
                                  n +
                                  window.location.search,
                              })),
                              (c.name = A.name),
                              (c.message = A.message),
                              c),
                            ])),
                            a),
                          ]),
                          o),
                        ])),
                        navigator.sendBeacon)
                      )
                        navigator.sendBeacon("", e);
                      else
                        try {
                          (l = new XMLHttpRequest()).open("POST", "", !0),
                            l.send(e);
                        } catch (t) {}
                      return [3, 4];
                    case 3:
                      return t.sent(), [3, 4];
                    case 4:
                      return [2];
                  }
                });
              });
            })(t);
          })
      );
    }
    function tt() {
      return (
        (t = this),
        (a = void 0),
        (s = Promise),
        (d = function () {
          var n, e, i, r, o, a, s, t;
          return (
            (e = this),
            (i = function (t) {
              switch (t.label) {
                case 0:
                  return (
                    t.trys.push([0, 3, , 4]),
                    [
                      4,
                      fetch("", {
                        method: "GET",
                        headers: { "Content-Type": "text/plain" },
                      }),
                    ]
                  );
                case 1:
                  return [4, t.sent().json()];
                case 2:
                  return [2, t.sent().ISO];
                case 3:
                  return (n = t.sent()), console.error(n), [2, "ZZ"];
                case 4:
                  return [2];
              }
            }),
            (s = {
              label: 0,
              sent: function () {
                if (1 & a[0]) throw a[1];
                return a[1];
              },
              trys: [],
              ops: [],
            }),
            (t = { next: d(0), throw: d(1), return: d(2) }),
            "function" == typeof Symbol &&
              (t[Symbol.iterator] = function () {
                return this;
              }),
            t
          );
          function d(n) {
            return function (t) {
              return (function (n) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((r = 1),
                      o &&
                        (a =
                          2 & n[0]
                            ? o.return
                            : n[0]
                            ? o.throw || ((a = o.return) && a.call(o), 0)
                            : o.next) &&
                        !(a = a.call(o, n[1])).done)
                    )
                      return a;
                    switch (((o = 0), a && (n = [2 & n[0], a.value]), n[0])) {
                      case 0:
                      case 1:
                        a = n;
                        break;
                      case 4:
                        return s.label++, { value: n[1], done: !1 };
                      case 5:
                        s.label++, (o = n[1]), (n = [0]);
                        continue;
                      case 7:
                        (n = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(
                            (a = 0 < (a = s.trys).length && a[a.length - 1]) ||
                            (6 !== n[0] && 2 !== n[0])
                          )
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === n[0] &&
                          (!a || (n[1] > a[0] && n[1] < a[3]))
                        ) {
                          s.label = n[1];
                          break;
                        }
                        if (6 === n[0] && s.label < a[1]) {
                          (s.label = a[1]), (a = n);
                          break;
                        }
                        if (a && s.label < a[2]) {
                          (s.label = a[2]), s.ops.push(n);
                          break;
                        }
                        a[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    n = i.call(e, s);
                  } catch (t) {
                    (n = [6, t]), (o = 0);
                  } finally {
                    r = a = 0;
                  }
                if (5 & n[0]) throw n[1];
                return { value: n[0] ? n[1] : void 0, done: !0 };
              })([n, t]);
            };
          }
        }),
        new (s = s || Promise)(function (e, n) {
          function i(t) {
            try {
              o(d.next(t));
            } catch (t) {
              n(t);
            }
          }
          function r(t) {
            try {
              o(d.throw(t));
            } catch (t) {
              n(t);
            }
          }
          function o(t) {
            var n;
            t.done
              ? e(t.value)
              : ((n = t.value) instanceof s
                  ? n
                  : new s(function (t) {
                      t(n);
                    })
                ).then(i, r);
          }
          o((d = d.apply(t, a || [])).next());
        })
      );
      var t, a, s, d;
    }
    function nt() {
      return (
        (d = function () {
          var n, e, i, r, o, a, s, d, t;
          return (
            (i = this),
            (r = function (t) {
              switch (t.label) {
                case 0:
                  if (ot) return [2];
                  t.label = 1;
                case 1:
                  return (
                    t.trys.push([1, 4, , 5]),
                    [4, fetch("./touchControllerConfig.json")]
                  );
                case 2:
                  return [4, t.sent().json()];
                case 3:
                  return (
                    (n = t.sent()) &&
                      (((e = document.createElement("script")).src =
                        "//game-cdn.poki.com/scripts/touchOverlayController.js"),
                      (e.onload = function () {
                        new window.OverlayController(document.body, n);
                      }),
                      document.head.appendChild(e),
                      (ot = !0)),
                    [3, 5]
                  );
                case 4:
                  return (e = t.sent()), console.log(e), [3, 5];
                case 5:
                  return [2];
              }
            }),
            (d = {
              label: 0,
              sent: function () {
                if (1 & s[0]) throw s[1];
                return s[1];
              },
              trys: [],
              ops: [],
            }),
            (t = { next: c(0), throw: c(1), return: c(2) }),
            "function" == typeof Symbol &&
              (t[Symbol.iterator] = function () {
                return this;
              }),
            t
          );
          function c(n) {
            return function (t) {
              return (function (n) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; d; )
                  try {
                    if (
                      ((o = 1),
                      a &&
                        (s =
                          2 & n[0]
                            ? a.return
                            : n[0]
                            ? a.throw || ((s = a.return) && s.call(a), 0)
                            : a.next) &&
                        !(s = s.call(a, n[1])).done)
                    )
                      return s;
                    switch (((a = 0), s && (n = [2 & n[0], s.value]), n[0])) {
                      case 0:
                      case 1:
                        s = n;
                        break;
                      case 4:
                        return d.label++, { value: n[1], done: !1 };
                      case 5:
                        d.label++, (a = n[1]), (n = [0]);
                        continue;
                      case 7:
                        (n = d.ops.pop()), d.trys.pop();
                        continue;
                      default:
                        if (
                          !(
                            (s = 0 < (s = d.trys).length && s[s.length - 1]) ||
                            (6 !== n[0] && 2 !== n[0])
                          )
                        ) {
                          d = 0;
                          continue;
                        }
                        if (
                          3 === n[0] &&
                          (!s || (n[1] > s[0] && n[1] < s[3]))
                        ) {
                          d.label = n[1];
                          break;
                        }
                        if (6 === n[0] && d.label < s[1]) {
                          (d.label = s[1]), (s = n);
                          break;
                        }
                        if (s && d.label < s[2]) {
                          (d.label = s[2]), d.ops.push(n);
                          break;
                        }
                        s[2] && d.ops.pop(), d.trys.pop();
                        continue;
                    }
                    n = r.call(i, d);
                  } catch (t) {
                    (n = [6, t]), (a = 0);
                  } finally {
                    o = s = 0;
                  }
                if (5 & n[0]) throw n[1];
                return { value: n[0] ? n[1] : void 0, done: !0 };
              })([n, t]);
            };
          }
        }),
        new (s = (s = a = t = void 0) || Promise)(function (e, n) {
          function i(t) {
            try {
              o(d.next(t));
            } catch (t) {
              n(t);
            }
          }
          function r(t) {
            try {
              o(d.throw(t));
            } catch (t) {
              n(t);
            }
          }
          function o(t) {
            var n;
            t.done
              ? e(t.value)
              : ((n = t.value) instanceof s
                  ? n
                  : new s(function (t) {
                      t(n);
                    })
                ).then(i, r);
          }
          o((d = d.apply(t, a || [])).next());
        })
      );
      var t, a, s, d;
    }
    function et() {
      for (var t = Math.floor(Date.now() / 1e3), n = "", e = 0; e < 4; e++)
        (n = String.fromCharCode(255 & t) + n), (t >>= 8);
      if (window.crypto && crypto.getRandomValues && Uint32Array) {
        var i = new Uint32Array(12);
        for (crypto.getRandomValues(i), e = 0; e < 12; e++)
          n += String.fromCharCode(255 & i[e]);
      } else
        for (e = 0; e < 12; e++)
          n += String.fromCharCode(Math.floor(256 * Math.random()));
      return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
    }
    function it(t) {
      if (!t) return null;
      for (
        var n = 0, e = Array.from(t.getElementsByClassName("poki-ad-slot"));
        n < e.length;
        n++
      ) {
        var i = e[n],
          i = st.get(i.id);
        if (i) return i.id;
      }
      return null;
    }
    var rt = e(67),
      ot = !1,
      at = !1,
      st = new Map(),
      dt = function (e) {
        googletag.cmd.push(function () {
          var t = it(e),
            n = st.get(t || "") || null;
          n &&
            n.gptSlot &&
            (k.track(y.tracking.screen.destroyAd, {
              opportunityId: n.opportunityId,
            }),
            googletag.destroySlots([n.gptSlot]),
            null === (t = e.querySelector("div#" + n.id)) ||
              void 0 === t ||
              t.remove(),
            e.removeAttribute("data-poki-ad-id"),
            st.delete(n.id));
        });
      },
      ct = function () {
        return (ct =
          Object.assign ||
          function (t) {
            for (var n, e = 1, i = arguments.length; e < i; e++)
              for (var r in (n = arguments[e]))
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            return t;
          }).apply(this, arguments);
      },
      ut = { gameId: E("game_id"), versionId: E("game_version_id") },
      lt =
        ((At.prototype.init = function (t) {
          if ((void 0 === t && (t = {}), "undefined" != typeof window)) {
            var n = t.onReady,
              e = void 0 === n ? null : n,
              n = t.onAdblocked,
              n = void 0 === n ? null : n;
            return (
              (this.initOptions = t),
              e && this.registerHandler("onReady", e),
              n && this.registerHandler("onAdblocked", n),
              this.isInitialized
                ? console.error("Poki SDK has already been initialized")
                : (this.initializingPromise ||
                    (this.initializingPromise = this.lazyLoadInit()),
                  this.initializingPromise)
            );
          }
        }),
        (At.prototype.lazyLoadInit = function () {
          var t,
            i = this,
            n = this.initOptions,
            e = n.adTagUrl,
            r = n.adTiming,
            o = void 0 === r ? {} : r,
            a = n.customCriteria,
            s = void 0 === a ? {} : a,
            d = n.debug,
            r = void 0 !== d && d,
            a = n.prebid,
            d = void 0 === a ? {} : a,
            a = n.a9,
            c = void 0 === a ? {} : a,
            a = n.volume,
            u = void 0 === a ? 1 : a,
            l = n.waterfallRetries,
            n = n.wrapper,
            A = void 0 === n ? document.body : n,
            m = parseInt(E("site_id"), 10) || 0;
          (window.googletag = window.googletag || { cmd: [] }),
            this.setupDefaultEvents(),
            k.setupDefaultEvents(),
            (t = d),
            (window.pbjs = window.pbjs || {}),
            (window.pbjs.que = window.pbjs.que || []),
            window.pbjs.que.push(function () {
              window.pbjs.addAdUnits(t.adUnits || z),
                window.pbjs.setConfig(T(T({}, C), t.config)),
                (window.pbjs.bidderSettings = {
                  districtm: {
                    bidCpmAdjustment: function (t) {
                      return 0.85 * t;
                    },
                  },
                  richaudience: {
                    bidCpmAdjustment: function (t) {
                      return 0.9 * t;
                    },
                  },
                });
            });
          var p = ct({}, v);
          e
            ? ((At.isPokiPlatform = !0),
              (p = ct(ct({}, p), {
                adTagUrl: e,
                customCriteria: s,
                adTiming: o,
              })))
            : (At.isPokiPlatform = !1);
          s = $;
          (At.isPokiPlatform || this.debug) &&
            (s = function () {
              return Promise.resolve();
            });
          var o = tt,
            f = this.initOptions.country || E("country");
          return (
            f &&
              (o = function () {
                return Promise.resolve(f);
              }),
            window.addEventListener("resize", this.resize.bind(this), !1),
            window.addEventListener("message", this.onMessage.bind(this), !1),
            this.debugIsOverwritten || this.setDebug(this.debug || r),
            this.debugTouchOverlayController && (g() || h()) && nt(),
            Promise.all([s(), o(), V(""), V(""), V(rt.a), V("")])
              .catch(function () {
                b.dispatchEvent(y.adblocked);
              })
              .then(function (t) {
                var n, e;
                void 0 !== t &&
                  ((n = t[0]),
                  (t = t[1]),
                  (t = ct(ct({}, p), { country: t })),
                  n &&
                    (ut.gameId || (ut.gameId = n.gameId),
                    ["7fb1fd45-24ce-4ade-b5c4-9ee55ec99526"].includes(
                      ut.gameId
                    ) &&
                      (g() || h()) &&
                      nt(),
                    (t.adTiming = n.adTiming),
                    (t.customCriteria = ct(ct({}, t.customCriteria), {
                      p4d_game_id: ut.gameId,
                    }))),
                  i.debug && (t.adTiming.startAdsAfter = 0),
                  i.enableSettings(t),
                  (n = U(i.country)) &&
                    (At.GetIsPokiPlatform() || At.GetIsPokiIFrame()) &&
                    w(),
                  (i.playerSkin = new j({ wrapper: A })),
                  (i.ima = new J(u)),
                  i.playerSkin.setupEvents(i),
                  i.startStartAdsAfterTimerOnInit &&
                    i.adTimings.startStartAdsAfterTimer(),
                  (i.waterfall = new L(i.ima, {
                    timing: i.adTimings,
                    totalRetries: l,
                    adTagUrl: t.adTagUrl,
                    siteID: m,
                  })),
                  window.googletag.cmd.push(function () {
                    window.googletag
                      .pubads()
                      .addEventListener("slotRenderEnded", function (t) {
                        (t = t.slot.getSlotElementId()), (t = st.get(t));
                        t &&
                          t.gptSlot &&
                          k.track(y.tracking.ads.display.impression, {
                            size: t.size,
                            opportunityId: t.opportunityId,
                            adUnitPath: t.adUnitPath,
                          });
                      }),
                      window.googletag
                        .pubads()
                        .addEventListener("impressionViewable", function (t) {
                          (t = t.slot.getSlotElementId()), (t = st.get(t));
                          t &&
                            t.gptSlot &&
                            k.track(y.tracking.ads.display.viewable, {
                              size: t.size,
                              opportunityId: t.opportunityId,
                              adUnitPath: t.adUnitPath,
                            });
                        });
                  }),
                  (e = c),
                  window.apstag &&
                    window.apstag.init(
                      e.settings ||
                        T(
                          {
                            pubID: "e32f1423-28bc-43ed-8ab0-5ae6b4449cf8",
                            adServer: "googletag",
                            videoAdServer: "DFP",
                          },
                          n ? { gdpr: { cmpTimeout: 1e4 } } : {}
                        ),
                      function () {
                        (I = !0), e.callback && e.callback();
                      }
                    ),
                  (i.isInitialized = !0),
                  b.dispatchEvent(y.ready));
              })
          );
        }),
        (At.prototype.requestAd = function (o) {
          var a = this;
          void 0 === o && (o = {});
          function t() {
            var t = void 0 === (e = o.autoStart) || e,
              n = void 0 === (r = o.customCriteria) ? {} : r,
              e = void 0 === (i = o.onFinish) ? null : i,
              i = void 0 === (r = o.onStart) ? null : r,
              r = void 0 === (r = o.position) ? null : r;
            if (
              ((a.autoStartOnReady = !1 !== t),
              e && a.registerHandler("onFinish", e),
              i && a.registerHandler("onStart", i),
              a.forceDisableCommercialBreak &&
                [y.ads.position.midroll, y.ads.position.preroll].includes(r))
            )
              e && e();
            else {
              if (!a.sdkBooted)
                return (
                  b.dispatchEvent(y.ads.error, {
                    message: "Requesting ad on unbooted SDK",
                  }),
                  void a.sdkNotBootedButCalled()
                );
              a.sdkImaError
                ? b.dispatchEvent(y.ads.error, {
                    message: "Adblocker has been detected",
                  })
                : (!g() && !h()) || r === y.ads.position.rewarded
                ? null !== r && s(r, y.ads.position)
                  ? a.ima.isAdRunning() || a.waterfall.isRunning()
                    ? b.dispatchEvent(y.ads.busy)
                    : a.adReady
                    ? b.dispatchEvent(y.ads.ready)
                    : r !== y.ads.position.preroll ||
                      a.adTimings.prerollPossible()
                    ? r === y.ads.position.rewarded ||
                      a.adTimings.requestPossible()
                      ? ((e = ct(ct(ct({}, a.genericCriteria()), a.criteria), {
                          position: r,
                        })),
                        (!At.isPokiPlatform && r !== y.ads.position.rewarded) ||
                          (e = ct(ct({}, e), n)),
                        a.playerSkin.showWithOpacity(),
                        a.resize(),
                        a.waterfall.start(e, r))
                      : b.dispatchEvent(y.ads.limit, {
                          reason: y.info.messages.timeLimit,
                        })
                    : b.dispatchEvent(y.ads.limit, {
                        reason: y.info.messages.prerollLimit,
                      })
                  : console.error("POKI-SDK: Invalid position")
                : b.dispatchEvent(y.ads.error, {
                    reason: "Interstitials are disabled on mobile",
                  });
            }
          }
          this.isInitialized ? t() : this.lazyLoadInit().then(t);
        }),
        (At.prototype.displayAd = function (d, c) {
          function t() {
            b.clearAnnotations();
            var n,
              e,
              i,
              r,
              t = et(),
              o = y.ads.position.display;
            if (c) {
              if (!u.sdkBooted)
                return (
                  b.dispatchEvent(y.ads.error, {
                    message: "Requesting ad on unbooted SDK",
                    position: o,
                  }),
                  void u.sdkNotBootedButCalled()
                );
              if (d)
                if (u.sdkImaError)
                  b.dispatchEvent(y.ads.error, {
                    message: "Adblocker has been detected",
                    position: o,
                  });
                else {
                  if (
                    ((s = c),
                    !(
                      g() ||
                      h() ||
                      [
                        "970x250",
                        "300x250",
                        "728x90",
                        "160x600",
                        "320x50",
                      ].includes(s)
                    ) ||
                      ((g() || h()) && !["320x50"].includes(s)))
                  )
                    return b.dispatchEvent(y.ads.error, {
                      reason:
                        "Display size " +
                        c +
                        " is not supported on this device",
                      position: o,
                    });
                  var a = ct(ct({}, u.genericCriteria()), u.criteria),
                    s = (function (n, t) {
                      var e = it(n),
                        i = st.get(e || "") || null;
                      if (i) {
                        e = t.split("x").map(function (t) {
                          return parseInt(t, 10);
                        }) || [0, 0];
                        if (i.width === e[0] && i.height === e[1]) return i.id;
                        dt(n);
                      }
                      var r = (function (t) {
                        var n = t.split("x").map(function (t) {
                            return parseInt(t, 10);
                          }),
                          e = "/21682198607/debug-display/debug-display-" + t,
                          i = "desktop";
                        g() && (i = "mobile"), h() && (i = "tablet");
                        var r = parseInt(E("site_id"), 10) || 0;
                        return (
                          at ||
                            (e = lt.GetIsPokiIFrame()
                              ? "/21682198607/" +
                                i +
                                "_ingame_" +
                                t +
                                "/" +
                                r +
                                "_" +
                                i +
                                "_ingame_" +
                                t
                              : "/21682198607/external_" +
                                i +
                                "_display_ingame/external_" +
                                i +
                                "_ingame_" +
                                t),
                          {
                            id: "poki-" + et(),
                            adUnitPath: e,
                            size: t,
                            width: n[0],
                            height: n[1],
                            refresh: !1,
                          }
                        );
                      })(t);
                      return (
                        st.set(r.id, r),
                        googletag.cmd.push(function () {
                          var t = document.createElement("div");
                          (t.id = r.id),
                            (t.className = "poki-ad-slot"),
                            (t.style.width = r.width + "px"),
                            (t.style.height = r.height + "px"),
                            t.setAttribute("data-poki-ad-size", r.size),
                            n.appendChild(t),
                            n.setAttribute("data-poki-ad-id", r.id),
                            (r.gptSlot = googletag
                              .defineSlot(
                                r.adUnitPath,
                                [r.width, r.height],
                                r.id
                              )
                              .addService(googletag.pubads())),
                            googletag.enableServices(),
                            st.set(r.id, r);
                        }),
                        r.id
                      );
                    })(d, c);
                  (i = s),
                    (r = a),
                    googletag.cmd.push(function () {
                      var t,
                        e = st.get(i);
                      e &&
                        e.gptSlot &&
                        (null === (t = e.gptSlot) ||
                          void 0 === t ||
                          t.clearTargeting(),
                        Object.keys(r).forEach(function (t) {
                          var n;
                          null === (n = e.gptSlot) ||
                            void 0 === n ||
                            n.setTargeting(t, r[t]);
                        }));
                    }),
                    (n = s),
                    (e = t),
                    googletag.cmd.push(function () {
                      var t = st.get(n);
                      t &&
                        t.gptSlot &&
                        ((t.opportunityId = e),
                        k.track(y.tracking.ads.display.requested, {
                          size: t.size,
                          opportunityId: t.opportunityId,
                          adUnitPath: t.adUnitPath,
                        }),
                        t.refresh && t.gptSlot
                          ? googletag.pubads().refresh([t.gptSlot])
                          : (googletag.display(t.id),
                            (t.refresh = !0),
                            st.set(t.id, t)));
                    });
                }
              else
                b.dispatchEvent(y.ads.error, {
                  message: "Provided container does not exist",
                  position: o,
                });
            } else
              b.dispatchEvent(y.ads.error, {
                message:
                  "No ad size given, usage: displayAd(<container>, <size>)",
                position: o,
              });
          }
          var u = this;
          this.isInitialized ? t() : this.lazyLoadInit().then(t);
        }),
        (At.prototype.destroyAd = function (t) {
          function n() {
            if (!e.sdkBooted)
              return (
                b.dispatchEvent(y.ads.displayError, {
                  message: "Attempting destroyAd on unbooted SDK",
                }),
                void e.sdkNotBootedButCalled()
              );
            e.sdkImaError
              ? b.dispatchEvent(y.ads.displayError, {
                  message: "Adblocker has been detected",
                })
              : ((t = t || document.body), dt(t));
          }
          var e = this;
          this.isInitialized ? n() : this.lazyLoadInit().then(n);
        }),
        (At.prototype.startStartAdsAfterTimer = function () {
          this.sdkBooted && !this.sdkImaError
            ? this.adTimings.startStartAdsAfterTimer()
            : (this.startStartAdsAfterTimerOnInit = !0);
        }),
        (At.prototype.enableSettings = function (t) {
          (this.criteria = ct({}, t.customCriteria)),
            (this.adTimings = new S(t.adTiming)),
            (this.country = t.country);
        }),
        (At.prototype.togglePlayerAdvertisingConsent = function (t) {
          var n, e, i;
          t
            ? ((n =
                parseInt(
                  (function (n) {
                    if (!R) return M[n];
                    try {
                      return localStorage.getItem(n);
                    } catch (t) {
                      return M[n];
                    }
                  })("playerAge"),
                  10
                ) || 0),
              (e = U((i = this.country))),
              (t = F.includes(i)),
              (i = Q(i)),
              (e || t || Q) &&
              ((e && n <= 12) || (t && n <= 16) || (i && n <= 16))
                ? this.disableProgrammatic()
                : this.enableProgrammatic())
            : this.disableProgrammatic();
        }),
        (At.prototype.disableProgrammatic = function () {
          (At.childDirected = !0), (this.programmaticAdsEnabled = !1);
        }),
        (At.prototype.enableProgrammatic = function () {
          (At.childDirected = !1), (this.programmaticAdsEnabled = !0);
        }),
        (At.prototype.getProgrammaticAdsEnabled = function () {
          return this.programmaticAdsEnabled;
        }),
        (At.prototype.setDebug = function (t) {
          var n = this;
          this.debugIsOverwritten
            ? t && k.track(y.tracking.debugTrueInProduction)
            : (k.setDebug(t),
              b.setDebug(t),
              this.waterfall
                ? this.waterfall.setDebug(t)
                : b.addEventListener(y.ready, function () {
                    n.waterfall && n.waterfall.setDebug(t);
                  }),
              (at = t),
              (this.debug = t));
        }),
        (At.prototype.resize = function () {
          var t,
            n = this;
          if (!this.sdkBooted) return this.sdkNotBootedButCalled();
          this.sdkImaError ||
            (0 !== (t = this.playerSkin.getVideoBounds()).width &&
            0 !== t.height
              ? this.ima.resize(t.width, t.height)
              : setTimeout(function () {
                  n.resize();
                }, 100));
        }),
        (At.prototype.onMessage = function (t) {
          if ("string" == typeof t.data.type)
            switch (t.data.type) {
              case "toggleNonPersonalized":
                this.toggleNonPersonalized(
                  !(!t.data.content || !t.data.content.nonPersonalized)
                );
                break;
              case "setPersonalizedADConsent":
                this.toggleNonPersonalized(
                  !(t.data.content && t.data.content.consent)
                ),
                  this.setConsentString(
                    t.data.content ? t.data.content.consentString : ""
                  );
                break;
              case "forceDisableCommercialBreak":
                this.forceDisableCommercialBreak = !0;
            }
        }),
        (At.prototype.startAd = function () {
          if (!this.sdkBooted) return this.sdkNotBootedButCalled();
          this.sdkImaError ||
            (this.adReady
              ? (this.playerSkin.show(),
                this.resize(),
                this.ima.startPlayback())
              : b.dispatchEvent(y.ads.error, {
                  message: "No ads ready to start",
                }));
        }),
        (At.prototype.startAdClicked = function () {
          "undefined" != typeof navigator &&
            /(iPad|iPhone|iPod)/gi.test(navigator.userAgent) &&
            this.startAdEnabled &&
            ((this.startAdEnabled = !1),
            this.playerSkin.hideStartAdButton(),
            this.ima.startIOSPlayback());
        }),
        (At.prototype.stopAd = function () {
          if (!this.sdkBooted) return this.sdkNotBootedButCalled();
          this.sdkImaError ||
            (this.waterfall.stopWaterfall(),
            this.ima.stopPlayback(),
            this.playerSkin.hide());
        }),
        (At.prototype.resumeAd = function () {
          if (!this.sdkBooted) return this.sdkNotBootedButCalled();
          this.sdkImaError ||
            (this.playerSkin.hidePauseButton(), this.ima.resumeAd());
        }),
        (At.prototype.skipAd = function () {
          this.stopAd(),
            this.callHandler("onFinish", {
              type: y.ads.completed,
              rewardAllowed: !0,
            });
        }),
        (At.prototype.muteAd = function () {
          if (!this.sdkBooted) return this.sdkNotBootedButCalled();
          this.sdkImaError || this.ima.muteAd();
        }),
        (At.prototype.registerHandler = function (t, n) {
          this.handlers[t] = n;
        }),
        (At.prototype.callHandler = function (t) {
          for (var n = [], e = 1; e < arguments.length; e++)
            n[e - 1] = arguments[e];
          "function" == typeof this.handlers[t] && this.handlers[t](n);
        }),
        (At.prototype.setupDefaultEvents = function () {
          var n = this;
          b.addEventListener(y.ready, function () {
            (n.sdkBooted = !0), n.callHandler("onReady");
          }),
            b.addEventListener(y.adblocked, function () {
              (n.sdkBooted = !0),
                (n.sdkImaError = !0),
                n.callHandler("onAdblocked");
            }),
            b.addEventListener(y.ads.ready, function () {
              (n.adReady = !0), n.autoStartOnReady && n.startAd();
            }),
            b.addEventListener(y.ads.started, function () {
              n.playerSkin.hideSpinner(),
                n.callHandler("onStart", { type: y.ads.limit });
            }),
            b.addEventListener(y.ads.video.paused, function () {
              n.playerSkin.showPauseButton();
            }),
            b.addEventListener(y.ads.limit, function () {
              n.callHandler("onFinish", {
                type: y.ads.limit,
                rewardAllowed: !1,
              });
            }),
            b.addEventListener(y.ads.stopped, function () {
              n.callHandler("onFinish", {
                type: y.ads.stopped,
                rewardAllowed: !1,
              });
            }),
            b.addEventListener(y.ads.error, function () {
              n.callHandler("onFinish", {
                type: y.ads.error,
                rewardAllowed: !1,
              });
            }),
            b.addEventListener(y.ads.busy, function () {
              n.callHandler("onFinish", {
                type: y.ads.busy,
                rewardAllowed: !1,
              });
            }),
            b.addEventListener(y.ads.completed, function (t) {
              n.callHandler("onFinish", {
                type: y.ads.completed,
                rewardAllowed: !!t.rewardAllowed,
              });
            }),
            [
              y.ads.limit,
              y.ads.stopped,
              y.ads.error,
              y.ads.busy,
              y.ads.completed,
            ].forEach(function (t) {
              b.addEventListener(t, function () {
                n.playerSkin && n.playerSkin.hide(), (n.adReady = !1);
              });
            });
        }),
        (At.prototype.genericCriteria = function () {
          var t = {},
            n = encodeURIComponent(E("tag") || ""),
            e = encodeURIComponent(E("site_id") || ""),
            i = encodeURIComponent(E("experiment") || ""),
            r = encodeURIComponent(E("categories") || "");
          return (
            (t.tag = n),
            (t.tag_site = n + "|" + e),
            (t.site_id = e),
            (t.experiment = i),
            (t.categories = r),
            this.programmaticAdsEnabled || (t.disable_programmatic = 1),
            t
          );
        }),
        (At.prototype.setVolume = function (t) {
          this.ima && this.ima.setVolume(t);
        }),
        (At.GetIsPokiPlatform = function () {
          return At.isPokiPlatform;
        }),
        (At.GetIsPokiIFrame = function () {
          return 0 < (parseInt(E("site_id"), 10) || 0);
        }),
        (At.childDirected = !1),
        (At.isPokiPlatform = !1),
        (At.nonPersonalized = !1),
        (At.consentString = ""),
        At);
    function At() {
      (this.autoStartOnReady = !1),
        (this.criteria = {}),
        (this.debugIsOverwritten = !1),
        (this.handlers = {}),
        (this.initializingPromise = null),
        (this.isInitialized = !1),
        (this.programmaticAdsEnabled = !0),
        (this.sdkBooted = !1),
        (this.sdkImaError = !1),
        (this.startAdEnabled = !1),
        (this.startStartAdsAfterTimerOnInit = !1),
        (this.initOptions = {}),
        (this.forceDisableCommercialBreak = !1),
        (this.debug = !1),
        (this.adReady = !1),
        (this.debugTouchOverlayController = !1),
        (this.setPlayerAge = function (t) {
          t &&
            (function (n, e) {
              if (R)
                try {
                  localStorage.setItem(n, e);
                } catch (t) {
                  (R = !1), (M[n] = e);
                }
              else M[n] = e;
            })("playerAge", t);
        }),
        (this.toggleNonPersonalized = function (t) {
          At.nonPersonalized = t;
        }),
        (this.setConsentString = function (t) {
          At.consentString = t;
        }),
        (this.sdkNotBootedButCalled = function () {
          console.error("The Poki SDK has not yet been initialized");
        });
      var t = E("pokiDebug");
      "" !== t && (this.setDebug("true" === t), (this.debugIsOverwritten = !0));
    }
    function mt(t) {
      switch (Object.prototype.toString.call(t)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
          return 1;
        default:
          return t instanceof Error;
      }
    }
    var pt = document.location.hostname;
    pt.endsWith("poki-gdn.com") && (pt = "poki-gdn.com");
    var ft = Date.now(),
      gt = (e = new RegExp("poki_erruid=([^;]+)(?:;|$)").exec(document.cookie))
        ? e[1]
        : "";
    function ht(t) {
      if (ut.gameId && ut.versionId) {
        if (!(Date.now() < ft)) {
          gt ||
            ((r = gt = Math.random().toString(36).substr(2, 9)),
            (document.cookie =
              "poki_erruid=" +
              r +
              "; path=/; samesite=lax; max-age=63072000; domain=" +
              pt));
          try {
            var n,
              e = JSON.stringify({
                gid: ut.gameId,
                vid: ut.versionId,
                ve: 7,
                n: t.name,
                m: t.message,
                s: JSON.stringify(t.stack),
                ui: gt,
              }),
              i = "https://t.poki.io/ge";
            navigator.sendBeacon
              ? navigator.sendBeacon(i, e)
              : ((n = new XMLHttpRequest()).open("POST", i, !0), n.send(e)),
              (ft = Date.now() + 100);
          } catch (t) {
            console.error(t);
          }
        }
      } else console.log(t);
      var r;
    }
    function wt(t) {
      return "function" == typeof t;
    }
    function yt(t, n, e) {
      var i;
      null != t &&
        (((i = t[n]) && i.__poki__) ||
          ((t[n] = e(i)), (t[n].__poki__ = !0), (t[n].__orig__ = i)));
    }
    function bt(i) {
      if (!wt(i)) return i;
      try {
        if (i.__poki__) return i;
        if (i.__poki_wrapper__) return i.__poki_wrapper__;
      } catch (t) {
        return i;
      }
      function t() {
        for (var t = [], n = arguments.length; n--; ) t[n] = bt(arguments[n]);
        try {
          var e = i.apply(this, t);
          return (window.pokiLastCatch = null), e;
        } catch (t) {
          throw (window.pokiLastCatch = t);
        }
      }
      for (var n in i)
        (e = i),
          (r = n),
          Object.prototype.hasOwnProperty.call(e, r) && (t[n] = i[n]);
      var e, r;
      return (
        (t.prototype = i.prototype),
        ((i.__poki_wrapper__ = t).__poki__ = !0),
        (t.__orig__ = i),
        t
      );
    }
    function kt(o) {
      return function (t, n) {
        for (var e = new Array(arguments.length), i = 0; i < e.length; ++i)
          e[i] = arguments[i];
        var r = e[0];
        return (
          wt(r) && (e[0] = bt(r)), o.apply ? o.apply(this, e) : o(e[0], e[1])
        );
      };
    }
    "undefined" != typeof window &&
      ((u.a.remoteFetching = !1),
      u.a.report.subscribe(function (t) {
        var n;
        "Script error." === t.message && window.pokiLastCatch
          ? ((n = window.pokiLastCatch),
            (window.pokiLastCatch = null),
            u.a.report(n))
          : ht(t);
      }),
      (window.onunhandledrejection = function (t) {
        mt(t.reason)
          ? u.a.report(t.reason)
          : ht({
              name: "unhandledrejection",
              message: JSON.stringify(t.reason),
            });
      }),
      "bd6bdd9e-33a9-11ea-a08a-acde48001122" === ut.gameId &&
        ([
          "EventTarget",
          "Window",
          "Node",
          "ApplicationCache",
          "AudioTrackList",
          "ChannelMergerNode",
          "CryptoOperation",
          "EventSource",
          "FileReader",
          "HTMLUnknownElement",
          "IDBDatabase",
          "IDBRequest",
          "IDBTransaction",
          "KeyOperation",
          "MediaController",
          "MessagePort",
          "ModalWindow",
          "Notification",
          "SVGElementInstance",
          "Screen",
          "TextTrack",
          "TextTrackCue",
          "TextTrackList",
          "WebSocket",
          "WebSocketWorker",
          "Worker",
          "XMLHttpRequest",
          "XMLHttpRequestEventTarget",
          "XMLHttpRequestUpload",
        ].forEach(function (t) {
          (t = window[t] && window[t].prototype) &&
            t.hasOwnProperty &&
            t.hasOwnProperty("addEventListener") &&
            (yt(t, "addEventListener", function (r) {
              return function (t, n, e, i) {
                try {
                  n && n.handleEvent && (n.handleEvent = bt(n.handleEvent));
                } catch (t) {}
                return r.call(this, t, bt(n), e, i);
              };
            }),
            yt(t, "removeEventListener", function (r) {
              return function (t, n, e, i) {
                try {
                  n = n && (n.__poki_wrapper__ || n);
                } catch (t) {}
                return r.call(this, t, n, e, i);
              };
            }));
        }),
        yt(window, "setTimeout", kt),
        yt(window, "setInterval", kt),
        void 0 !== window.requestAnimationFrame &&
          yt(window, "requestAnimationFrame", function (n) {
            return function (t) {
              return n(bt(t));
            };
          })));
    var vt,
      St = function () {
        return (St =
          Object.assign ||
          function (t) {
            for (var n, e = 1, i = arguments.length; e < i; e++)
              for (var r in (n = arguments[e]))
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            return t;
          }).apply(this, arguments);
      },
      Et =
        ((xt.prototype.setDebug = function (t) {
          void 0 === t && (t = !0), this.SDK.setDebug(t);
        }),
        (xt.prototype.disableProgrammatic = function () {
          this.SDK.disableProgrammatic();
        }),
        (xt.prototype.toggleNonPersonalized = function (t) {
          void 0 === t && (t = !1), this.SDK.toggleNonPersonalized(t);
        }),
        (xt.prototype.setConsentString = function (t) {
          this.SDK.setConsentString(t);
        }),
        (xt.prototype.displayAd = function (t, n) {
          k.track(y.tracking.screen.displayAd, { size: n }),
            this.SDK.displayAd(t, n);
        }),
        (xt.prototype.destroyAd = function (t) {
          this.SDK.destroyAd(t);
        }),
        (xt.prototype.setVolume = function (t) {
          this.SDK.setVolume(t);
        }),
        new xt());
    function xt() {
      var i = this;
      (this.gameStarted = !1),
        (this.SDK = new lt()),
        (this.gameplayStartCounter = 0),
        (this.gameplayStopCounter = 0),
        (this.init = function (e) {
          return (
            void 0 === e && (e = {}),
            new Promise(function (t, n) {
              e && e.adTagUrl && window && (window.__InternalSDK = i.SDK),
                i.SDK.init(St({ onReady: t, onAdblocked: n }, e)),
                m.sendMessage(y.message.sdkDetails, { version: "2.150.0" });
            })
          );
        }),
        (this.initWithVideoHB = function () {
          return i.init();
        }),
        (this.gameLoadingProgress = function (t) {
          var n = {};
          void 0 !== t.percentageDone &&
            (n.percentageDone = Number(t.percentageDone)),
            void 0 !== t.kbLoaded && (n.kbLoaded = Number(t.kbLoaded)),
            void 0 !== t.kbTotal && (n.kbTotal = Number(t.kbTotal)),
            void 0 !== t.fileNameLoaded &&
              (n.fileNameLoaded = String(t.fileNameLoaded)),
            void 0 !== t.filesLoaded && (n.filesLoaded = Number(t.filesLoaded)),
            void 0 !== t.filesTotal && (n.filesTotal = Number(t.filesTotal)),
            k.track(y.tracking.screen.gameLoadingProgress, n);
        }),
        (this.gameLoadingStart = function () {
          k.track(y.tracking.screen.gameLoadingStarted);
        }),
        (this.gameLoadingFinished = function () {
          k.track(y.tracking.screen.gameLoadingFinished);
        }),
        (this.gameplayStart = function (t) {
          i.gameplayStartCounter++,
            i.gameStarted ||
              ((i.gameStarted = !0),
              k.track(y.tracking.screen.firstRound),
              i.SDK.startStartAdsAfterTimer()),
            k.track(
              y.tracking.screen.gameplayStart,
              St(St({}, t), { playId: i.gameplayStartCounter })
            );
        }),
        (this.gameInteractive = function () {
          k.track(y.tracking.screen.gameInteractive);
        }),
        (this.gameplayStop = function (t) {
          i.gameplayStopCounter++,
            k.track(
              y.tracking.screen.gameplayStop,
              St(St({}, t), {
                playId: i.gameplayStartCounter,
                stopId: i.gameplayStopCounter,
              })
            );
        }),
        (this.roundStart = function (t) {
          void 0 === t && (t = ""),
            (t = String(t)),
            k.track(y.tracking.screen.roundStart, { identifier: t });
        }),
        (this.roundEnd = function (t) {
          void 0 === t && (t = ""),
            (t = String(t)),
            k.track(y.tracking.screen.roundEnd, { identifier: t });
        }),
        (this.customEvent = function (t, n, e) {
          void 0 === e && (e = {}),
            t && n
              ? ((t = String(t)),
                (n = String(n)),
                (e = St({}, e)),
                k.track(y.tracking.custom, {
                  eventNoun: t,
                  eventVerb: n,
                  eventData: e,
                }))
              : i.error(
                  "customEvent",
                  "customEvent needs at least a noun and a verb"
                );
        }),
        (this.commercialBreak = function () {
          return new Promise(function (t) {
            var n = i.gameStarted
              ? y.ads.position.midroll
              : y.ads.position.preroll;
            b.clearAnnotations(),
              b.setDataAnnotations({ opportunityId: et(), position: n }),
              k.track(y.tracking.screen.commercialBreak),
              i.SDK.requestAd({ position: n, onFinish: t });
          });
        }),
        (this.rewardedBreak = function () {
          return new Promise(function (n) {
            var t = y.ads.position.rewarded;
            b.clearAnnotations(),
              b.setDataAnnotations({ opportunityId: et(), position: t }),
              k.track(y.tracking.screen.rewardedBreak),
              i.SDK.requestAd({
                position: t,
                onFinish: function (t) {
                  0 < t.length ? n(t[0].rewardAllowed) : n(!1);
                },
              });
          });
        }),
        (this.happyTime = function (t) {
          void 0 === t && (t = 1),
            ((t = Number(t)) < 0 || 1 < t) &&
              ((t = Math.max(0, Math.min(1, t))),
              i.warning(
                "happyTime",
                "Intensity should be a value between 0 and 1, adjusted to " + t
              )),
            k.track(y.tracking.screen.happyTime, { intensity: t });
        }),
        (this.muteAd = function () {
          i.SDK.muteAd();
        }),
        (this.setPlayerAge = function (t) {
          k.track(y.tracking.setPlayerAge, { age: t }),
            t && i.SDK.setPlayerAge(t);
        }),
        (this.togglePlayerAdvertisingConsent = function (t) {
          k.track(y.tracking.togglePlayerAdvertisingConsent, { didConsent: t }),
            i.SDK.togglePlayerAdvertisingConsent(t),
            m.sendMessage(y.message.toggleProgrammaticAds, {
              enabled: i.SDK.getProgrammaticAdsEnabled(),
            });
        }),
        (this.logError = function (t) {
          mt(t)
            ? c.report(t)
            : ht({ name: "logError", message: JSON.stringify(t) });
        }),
        (this.sendHighscore = function () {}),
        (this.setDebugTouchOverlayController = function (t) {
          i.SDK.debugTouchOverlayController = t;
        }),
        (this.getLeaderboard = function () {
          return Promise.resolve([]);
        }),
        (this.warning = function (t, n) {
          console.warn("PokiSDK." + t + ": " + n);
        }),
        (this.error = function (t, n) {
          console.error("PokiSDK." + t + ": " + n);
        });
    }
    for (vt in Et) window.PokiSDK[vt] = Et[vt];
  },
]);
