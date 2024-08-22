(function () {
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var n,
    aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ba =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    ca = function (a) {
      a = [
        "object" == typeof globalThis && globalThis,
        a,
        "object" == typeof window && window,
        "object" == typeof self && self,
        "object" == typeof global && global,
      ];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c;
      }
      throw Error("Cannot find global object");
    },
    da = ca(this),
    p = function (a, b) {
      if (b)
        a: {
          var c = da;
          a = a.split(".");
          for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e];
          }
          a = a[a.length - 1];
          d = c[a];
          b = b(d);
          b != d &&
            null != b &&
            ba(c, a, { configurable: !0, writable: !0, value: b });
        }
    };
  p("String.prototype.endsWith", function (a) {
    return a
      ? a
      : (a = function (b, c) {
          if (null == this)
            throw new TypeError(
              "The 'this' value for String.prototype.endsWith must not be null or undefined"
            );
          if (b instanceof RegExp)
            throw new TypeError(
              "First argument to String.prototype.endsWith must not be a regular expression"
            );
          var d = this + "";
          b += "";
          void 0 === c && (c = d.length);
          c = Math.max(0, Math.min(c | 0, d.length));
          for (var e = b.length; 0 < e && 0 < c; )
            if (d[--c] != b[--e]) return !1;
          return 0 >= e;
        });
  });
  p("Symbol", function (a) {
    if (a) return a;
    var b = function (e, f) {
      this.Ia = e;
      ba(this, "description", { configurable: !0, writable: !0, value: f });
    };
    b.prototype.toString = function () {
      return this.Ia;
    };
    var c = 0,
      d = function (e) {
        if (this instanceof d)
          throw new TypeError("Symbol is not a constructor");
        return new b("jscomp_symbol_" + (e || "") + "_" + c++, e);
      };
    return d;
  });
  p("Symbol.iterator", function (a) {
    if (a) return a;
    a = Symbol("Symbol.iterator");
    for (
      var b =
          "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
            " "
          ),
        c = 0;
      c < b.length;
      c++
    ) {
      var d = da[b[c]];
      "function" === typeof d &&
        "function" != typeof d.prototype[a] &&
        ba(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return ea(aa(this));
          },
        });
    }
    return a;
  });
  var ea = function (a) {
      a = { next: a };
      a[Symbol.iterator] = function () {
        return this;
      };
      return a;
    },
    fa = function (a, b) {
      a instanceof String && (a += "");
      var c = 0,
        d = !1,
        e = {
          next: function () {
            if (!d && c < a.length) {
              var f = c++;
              return { value: b(f, a[f]), done: !1 };
            }
            d = !0;
            return { done: !0, value: void 0 };
          },
        };
      e[Symbol.iterator] = function () {
        return e;
      };
      return e;
    };
  p("Array.prototype.keys", function (a) {
    return a
      ? a
      : (a = function () {
          return fa(this, function (b) {
            return b;
          });
        });
  });
  p("Array.from", function (a) {
    return a
      ? a
      : (a = function (b, c, d) {
          c =
            null != c
              ? c
              : function (h) {
                  return h;
                };
          var e = [],
            f =
              "undefined" != typeof Symbol &&
              Symbol.iterator &&
              b[Symbol.iterator];
          if ("function" == typeof f) {
            b = f.call(b);
            for (var g = 0; !(f = b.next()).done; )
              e.push(c.call(d, f.value, g++));
          } else
            for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
          return e;
        });
  });
  var u = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  p("WeakMap", function (a) {
    function b() {
      if (!a || !Object.seal) return !1;
      try {
        var k = Object.seal({}),
          m = Object.seal({}),
          r = new a([
            [k, 2],
            [m, 3],
          ]);
        if (2 != r.get(k) || 3 != r.get(m)) return !1;
        r.delete(k);
        r.set(m, 4);
        return !r.has(k) && 4 == r.get(m);
      } catch (F) {
        return !1;
      }
    }
    function c() {}
    function d(k) {
      var m = typeof k;
      return ("object" === m && null !== k) || "function" === m;
    }
    function e(k) {
      if (!u(k, g)) {
        var m = new c();
        ba(k, g, { value: m });
      }
    }
    function f(k) {
      var m = Object[k];
      m &&
        (Object[k] = function (r) {
          if (r instanceof c) return r;
          Object.isExtensible(r) && e(r);
          return m(r);
        });
    }
    if (b()) return a;
    var g = "$jscomp_hidden_" + Math.random();
    f("freeze");
    f("preventExtensions");
    f("seal");
    var h = 0,
      l = function (k) {
        this.T = (h += Math.random() + 1).toString();
        if (k) {
          var m =
            "undefined" != typeof Symbol &&
            Symbol.iterator &&
            k[Symbol.iterator];
          for (k = m ? m.call(k) : { next: aa(k) }; !(m = k.next()).done; )
            (m = m.value), this.set(m[0], m[1]);
        }
      };
    l.prototype.set = function (k, m) {
      if (!d(k)) throw Error("Invalid WeakMap key");
      e(k);
      if (!u(k, g)) throw Error("WeakMap key fail: " + k);
      k[g][this.T] = m;
      return this;
    };
    l.prototype.get = function (k) {
      return d(k) && u(k, g) ? k[g][this.T] : void 0;
    };
    l.prototype.has = function (k) {
      return d(k) && u(k, g) && u(k[g], this.T);
    };
    l.prototype.delete = function (k) {
      return d(k) && u(k, g) && u(k[g], this.T) ? delete k[g][this.T] : !1;
    };
    return l;
  });
  var v = this || self,
    ha = function () {},
    ia = function (a) {
      var b = typeof a;
      return ("object" == b && null != a) || "function" == b;
    },
    ja = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    ka = function (a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e);
        };
      }
      return function () {
        return a.apply(b, arguments);
      };
    },
    w = function (a, b, c) {
      w =
        Function.prototype.bind &&
        -1 != Function.prototype.bind.toString().indexOf("native code")
          ? ja
          : ka;
      return w.apply(null, arguments);
    },
    la = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d);
      };
    },
    x = function (a, b) {
      a = a.split(".");
      var c = c || v;
      a[0] in c ||
        "undefined" == typeof c.execScript ||
        c.execScript("var " + a[0]);
      for (var d; a.length && (d = a.shift()); )
        a.length || void 0 === b
          ? (c = c[d] && c[d] !== Object.prototype[d] ? c[d] : (c[d] = {}))
          : (c[d] = b);
    },
    z = function (a, b) {
      var c = y.prototype;
      c[a] = b;
    },
    A = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.Aa = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.jb = function (d, e, f) {
        for (
          var g = Array(arguments.length - 2), h = 2;
          h < arguments.length;
          h++
        )
          g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g);
      };
    },
    ma = function (a) {
      return a;
    };
  var na = function (a, b) {
      var c, d;
      for (d in a) if (b.call(c, a[d], d, a)) return !0;
      return !1;
    },
    oa = function (a) {
      var b = [],
        c = 0,
        d;
      for (d in a) b[c++] = d;
      return b;
    },
    ra = function (a) {
      var b = {},
        c;
      for (c in a) b[c] = a[c];
      return b;
    },
    sa =
      "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
        " "
      ),
    ta = function (a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < sa.length; f++)
          (c = sa[f]),
            Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }
    };
  var ua = { m: !0, c: !0, s: !0, t: !0 };
  function B(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, B);
    else {
      var b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  }
  A(B, Error);
  B.prototype.name = "CustomError";
  var C = function (a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++) {
      var f = e < b.length ? b[e] : "%s";
      c += a[e] + f;
    }
    b = c + a[d];
    B.call(this, b);
  };
  A(C, B);
  C.prototype.name = "AssertionError";
  var va = Array.prototype.indexOf
      ? function (a, b) {
          var c;
          return Array.prototype.indexOf.call(a, b, c);
        }
      : function (a, b) {
          var c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
          if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length
              ? -1
              : a.indexOf(b, c);
          for (; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        },
    D = Array.prototype.forEach
      ? function (a, b, c) {
          Array.prototype.forEach.call(a, b, c);
        }
      : function (a, b, c) {
          for (
            var d = a.length,
              e = "string" === typeof a ? a.split("") : a,
              f = 0;
            f < d;
            f++
          )
            f in e && b.call(c, e[f], f, a);
        },
    wa = Array.prototype.filter
      ? function (a, b) {
          var c;
          return Array.prototype.filter.call(a, b, c);
        }
      : function (a, b) {
          for (
            var c,
              d = a.length,
              e = [],
              f = 0,
              g = "string" === typeof a ? a.split("") : a,
              h = 0;
            h < d;
            h++
          )
            if (h in g) {
              var l = g[h];
              b.call(c, l, h, a) && (e[f++] = l);
            }
          return e;
        },
    xa = Array.prototype.map
      ? function (a, b, c) {
          return Array.prototype.map.call(a, b, c);
        }
      : function (a, b, c) {
          for (
            var d = a.length,
              e = Array(d),
              f = "string" === typeof a ? a.split("") : a,
              g = 0;
            g < d;
            g++
          )
            g in f && (e[g] = b.call(c, f[g], g, a));
          return e;
        };
  function ya(a, b) {
    b = va(a, b);
    var c;
    (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
    return c;
  }
  function za(a) {
    return Array.prototype.concat.apply([], arguments);
  }
  function Aa(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function Ba(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  function Ca(a, b) {
    var c;
    return za.apply([], xa(a, b, c));
  }
  var E = String.prototype.trim
      ? function (a) {
          return a.trim();
        }
      : function (a) {
          return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
        },
    Da = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };
  var Ea;
  a: {
    var Fa = v.navigator;
    if (Fa) {
      var Ga = Fa.userAgent;
      if (Ga) {
        Ea = Ga;
        break a;
      }
    }
    Ea = "";
  }
  var G = function (a) {
      var b = Ea;
      return -1 != b.indexOf(a);
    },
    Ha = function () {
      var a = Ea;
      return -1 != a.toLowerCase().indexOf("webkit");
    };
  var Ia = function () {
      return null;
    },
    Ja = function (a) {
      return a;
    },
    Ka = function (a) {
      var b = !1,
        c;
      return function () {
        b || ((c = a()), (b = !0));
        return c;
      };
    };
  var La;
  var Oa = function (a, b) {
    this.Ga = (a === Ma && b) || "";
    this.Ja = Na;
  };
  Oa.prototype.V = !0;
  Oa.prototype.L = function () {
    return this.Ga;
  };
  var Na = {},
    Ma = {};
  var H = function (a, b) {
    this.xa = b === Pa ? a : "";
  };
  H.prototype.V = !0;
  H.prototype.L = function () {
    return this.xa.toString();
  };
  H.prototype.toString = function () {
    return this.xa.toString();
  };
  var Qa = function (a) {
      return a instanceof H && a.constructor === H
        ? a.xa
        : "type_error:SafeUrl";
    },
    Ra =
      /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
    Sa = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    Ta = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    Va = function (a) {
      if (!(a instanceof H))
        if (((a = "object" == typeof a && a.V ? a.L() : String(a)), Ta.test(a)))
          a = new H(a, Pa);
        else {
          a = String(a);
          a = a.replace(/(%0A|%0D)/g, "");
          var b = a.match(Sa);
          a = (b = b && Ra.test(b[1])) ? new H(a, Pa) : null;
        }
      return a || Ua;
    },
    Pa = {},
    Ua = new H("about:invalid#zClosurez", Pa);
  var I = function (a, b) {
    this.wa = b === Wa ? a : "";
  };
  I.prototype.V = !0;
  I.prototype.L = function () {
    return this.wa;
  };
  I.prototype.toString = function () {
    return this.wa.toString();
  };
  var Wa = {},
    Xa = new I("", Wa),
    Za = function (a) {
      if (a instanceof H)
        return (
          (a = Qa(a)),
          'url("' + a.replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")'
        );
      a =
        a instanceof Oa
          ? a instanceof Oa && a.constructor === Oa && a.Ja === Na
            ? a.Ga
            : "type_error:Const"
          : Ya(String(a));
      if (/[{;}]/.test(a))
        throw new C("Value does not allow [{;}], got: %s.", [a]);
      return a;
    },
    Ya = function (a) {
      var b = a.replace($a, "$1").replace($a, "$1").replace(ab, "url");
      if (bb.test(b)) {
        if (cb.test(a)) return "zClosurez";
        for (var c = (b = !0), d = 0; d < a.length; d++) {
          var e = a.charAt(d);
          "'" == e && c ? (b = !b) : '"' == e && b && (c = !c);
        }
        b = b && c;
        if (!b || !db(a)) return "zClosurez";
      } else return "zClosurez";
      return eb(a);
    },
    db = function (a) {
      for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        if ("]" == e) {
          if (b) return !1;
          b = !0;
        } else if ("[" == e) {
          if (!b) return !1;
          b = !1;
        } else if (!b && !c.test(e)) return !1;
      }
      return b;
    },
    bb = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
    ab =
      /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
    gb =
      "calc cubic-bezier fit-content hsl hsla linear-gradient matrix minmax repeat rgb rgba (rotate|scale|translate)(X|Y|Z|3d)?".split(
        " "
      ),
    $a = new RegExp(
      "\\b(" + gb.join("|") + ")\\([-+*/0-9a-z.%\\[\\], ]+\\)",
      "g"
    ),
    cb = /\/\*/,
    eb = function (a) {
      return a.replace(ab, function (b, c, d, e) {
        var f = "";
        d = d.replace(/^(['"])(.*)\1$/, function (g, h, l) {
          f = h;
          return l;
        });
        b = Va(d).L();
        return c + f + b + f + e;
      });
    };
  var hb = {},
    J = function (a, b) {
      this.va = b === hb ? a : "";
      this.V = !0;
    },
    jb = function (a) {
      var b = "",
        c = function (d) {
          Array.isArray(d) ? D(d, c) : (b += ib(d));
        };
      D(arguments, c);
      return new J(b, hb);
    };
  J.prototype.L = function () {
    return this.va;
  };
  var ib = function (a) {
    return a instanceof J && a.constructor === J
      ? a.va
      : "type_error:SafeStyleSheet";
  };
  J.prototype.toString = function () {
    return this.va.toString();
  };
  var kb = new J("", hb);
  var K = function (a, b, c) {
    this.ua = c === lb ? a : "";
  };
  K.prototype.V = !0;
  K.prototype.L = function () {
    return this.ua.toString();
  };
  K.prototype.toString = function () {
    return this.ua.toString();
  };
  var mb = function (a) {
      return a instanceof K && a.constructor === K
        ? a.ua
        : "type_error:SafeHtml";
    },
    lb = {},
    nb = new K((v.trustedTypes && v.trustedTypes.emptyHTML) || "", 0, lb);
  var ob = function (a) {
    var b = b || null;
    if (void 0 === La) {
      var c = null;
      var d = v.trustedTypes;
      if (d && d.createPolicy)
        try {
          c = d.createPolicy("goog#html", {
            createHTML: ma,
            createScript: ma,
            createScriptURL: ma,
          });
        } catch (e) {
          v.console && v.console.error(e.message);
        }
      La = c;
    }
    a = (c = La) ? c.createHTML(a) : a;
    return (a = new K(a, b, lb));
  };
  var pb = Ka(function () {
      var a = document.createElement("div"),
        b = document.createElement("div");
      b.appendChild(document.createElement("div"));
      a.appendChild(b);
      b = a.firstChild.firstChild;
      a.innerHTML = mb(nb);
      return !b.parentElement;
    }),
    qb = function (a, b) {
      if (pb()) for (; a.lastChild; ) a.removeChild(a.lastChild);
      a.innerHTML = mb(b);
    };
  var rb = function (a) {
    rb[" "](a);
    return a;
  };
  rb[" "] = ha;
  var tb = function (a, b) {
    var c = sb;
    var d = d ? d(a) : a;
    return Object.prototype.hasOwnProperty.call(c, d) ? c[d] : (c[d] = b(a));
  };
  var ub = G("Opera"),
    L = G("Trident") || G("MSIE"),
    vb = G("Edge"),
    wb =
      G("Gecko") &&
      !(Ha() && !G("Edge")) &&
      !(G("Trident") || G("MSIE")) &&
      !G("Edge"),
    xb = Ha() && !G("Edge"),
    yb = function () {
      var a = Ea;
      if (wb) return /rv:([^\);]+)(\)|;)/.exec(a);
      if (vb) return /Edge\/([\d\.]+)/.exec(a);
      if (L) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
      if (xb) return /WebKit\/(\S+)/.exec(a);
      if (ub) return /(?:Version)[ \/]?(\S+)/.exec(a);
    },
    zb = function () {
      var a = v.document;
      return a ? a.documentMode : void 0;
    },
    Ab;
  a: {
    var Bb = "",
      Cb = yb();
    Cb && (Bb = Cb ? Cb[1] : "");
    if (L) {
      var Db = zb();
      if (null != Db && Db > parseFloat(Bb)) {
        Ab = String(Db);
        break a;
      }
    }
    Ab = Bb;
  }
  var Eb = Ab,
    sb = {},
    Fb = function (a) {
      return tb(a, function () {
        var b = Eb;
        var c = 0;
        b = E(String(b)).split(".");
        for (
          var d = E(String(a)).split("."),
            e = Math.max(b.length, d.length),
            f = 0;
          0 == c && f < e;
          f++
        ) {
          var g = b[f] || "",
            h = d[f] || "";
          do {
            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
            h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
            if (0 == g[0].length && 0 == h[0].length) break;
            c = 0 == g[1].length ? 0 : parseInt(g[1], 10);
            var l = 0 == h[1].length ? 0 : parseInt(h[1], 10);
            c =
              Da(c, l) ||
              Da(0 == g[2].length, 0 == h[2].length) ||
              Da(g[2], h[2]);
            g = g[3];
            h = h[3];
          } while (0 == c);
        }
        b = c;
        return 0 <= b;
      });
    },
    Gb;
  var Hb = v.document;
  if (Hb && L) {
    var Ib = zb();
    if (Ib) Gb = Ib;
    else {
      var Jb = parseInt(Eb, 10);
      Gb = Jb || void 0;
    }
  } else Gb = void 0;
  var Kb = Gb;
  var Lb = function (a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0;
  };
  n = Lb.prototype;
  n.clone = function () {
    return new Lb(this.x, this.y);
  };
  n.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  n.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  n.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  n.translate = function (a, b) {
    a instanceof Lb
      ? ((this.x += a.x), (this.y += a.y))
      : ((this.x += Number(a)), "number" === typeof b && (this.y += b));
    return this;
  };
  n.scale = function (a, b) {
    b = "number" === typeof b ? b : a;
    this.x *= a;
    this.y *= b;
    return this;
  };
  var M = function (a) {
      return a ? a.parentWindow || a.defaultView : window;
    },
    Mb = function (a) {
      var b = document;
      a = String(a);
      "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
      return b.createElement(a);
    },
    Nb = function (a) {
      return a && a.parentNode ? a.parentNode.removeChild(a) : null;
    };
  var Ob = function () {
    var a = M().top;
    try {
      return !!a.location.href || "" === a.location.href;
    } catch (b) {
      return !1;
    }
  };
  var Pb = [],
    Qb = !1,
    Rb = function (a) {
      if (Qb) for (var b = 0; b < Pb.length; b++) a(w(Pb[b].nb, Pb[b]));
    };
  var Sb = function () {};
  var Tb = (function () {
    if (!v.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        },
      });
    try {
      v.addEventListener("test", ha, b), v.removeEventListener("test", ha, b);
    } catch (c) {}
    return a;
  })();
  var N = function (a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.X = !1;
  };
  N.prototype.stopPropagation = function () {
    this.X = !0;
  };
  N.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
  };
  var O = function (a, b) {
    N.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button =
      this.screenY =
      this.screenX =
      this.clientY =
      this.clientX =
      this.offsetY =
      this.offsetX =
        0;
    this.key = "";
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.K = null;
    if (a) {
      var c = b;
      b = this.type = a.type;
      var d =
        a.changedTouches && a.changedTouches.length
          ? a.changedTouches[0]
          : null;
      this.target = a.target || a.srcElement;
      this.currentTarget = c;
      if ((c = a.relatedTarget)) {
        if (wb) {
          a: {
            try {
              rb(c.nodeName);
              var e = !0;
              break a;
            } catch (f) {}
            e = !1;
          }
          e || (c = null);
        }
      } else
        "mouseover" == b
          ? (c = a.fromElement)
          : "mouseout" == b && (c = a.toElement);
      this.relatedTarget = c;
      d
        ? ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
          (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
          (this.screenX = d.screenX || 0),
          (this.screenY = d.screenY || 0))
        : ((this.offsetX = xb || void 0 !== a.offsetX ? a.offsetX : a.layerX),
          (this.offsetY = xb || void 0 !== a.offsetY ? a.offsetY : a.layerY),
          (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
          (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
          (this.screenX = a.screenX || 0),
          (this.screenY = a.screenY || 0));
      this.button = a.button;
      this.keyCode = a.keyCode || 0;
      this.key = a.key || "";
      this.charCode = a.charCode || ("keypress" == b ? a.keyCode : 0);
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType =
        "string" === typeof a.pointerType
          ? a.pointerType
          : Ub[a.pointerType] || "";
      this.state = a.state;
      this.K = a;
      a.defaultPrevented && O.Aa.preventDefault.call(this);
    }
  };
  A(O, N);
  var Vb,
    Wb = { 2: "touch", 3: "pen", 4: "mouse" },
    Xb = Wb,
    Ub = (Vb = Xb);
  O.prototype.stopPropagation = function () {
    O.Aa.stopPropagation.call(this);
    this.K.stopPropagation
      ? this.K.stopPropagation()
      : (this.K.cancelBubble = !0);
  };
  O.prototype.preventDefault = function () {
    O.Aa.preventDefault.call(this);
    var a = this.K;
    a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
  };
  var Yb = "closure_listenable_" + ((1e6 * Math.random()) | 0);
  var Zb = 0;
  var $b = function (a, b, c, d, e) {
      this.listener = a;
      this.ka = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.fa = e;
      this.key = ++Zb;
      this.Y = this.ba = !1;
    },
    ac = function (a) {
      a.Y = !0;
      a.listener = null;
      a.ka = null;
      a.src = null;
      a.fa = null;
    };
  var P = function (a) {
    this.src = a;
    this.g = {};
    this.ma = 0;
  };
  P.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || ((a = this.g[f] = []), this.ma++);
    var g = bc(a, b, d, e);
    -1 < g
      ? ((b = a[g]), c || (b.ba = !1))
      : ((b = new $b(b, this.src, f, !!d, e)), (b.ba = c), a.push(b));
    return b;
  };
  P.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.g)) return !1;
    var e = this.g[a];
    b = bc(e, b, c, d);
    return -1 < b
      ? ((c = e[b]),
        ac(c),
        Array.prototype.splice.call(e, b, 1),
        0 == e.length && (delete this.g[a], this.ma--),
        !0)
      : !1;
  };
  var cc = function (a, b) {
    var c = b.type;
    if (c in a.g) {
      var d = ya(a.g[c], b);
      d && (ac(b), 0 == a.g[c].length && (delete a.g[c], a.ma--));
    }
  };
  P.prototype.ra = function (a, b, c, d) {
    a = this.g[a.toString()];
    var e = -1;
    a && (e = bc(a, b, c, d));
    return -1 < e ? a[e] : null;
  };
  P.prototype.hasListener = function (a, b) {
    var c = void 0 !== a,
      d = c ? a.toString() : "",
      e = void 0 !== b;
    return na(this.g, function (f) {
      for (var g = 0; g < f.length; ++g)
        if (!((c && f[g].type != d) || (e && f[g].capture != b))) return !0;
      return !1;
    });
  };
  var bc = function (a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.Y && f.listener == b && f.capture == !!c && f.fa == d) return e;
    }
    return -1;
  };
  var dc = "closure_lm_" + ((1e6 * Math.random()) | 0),
    ec = {},
    fc = 0,
    Q = function (a, b, c, d, e) {
      if (d && d.once) gc(a, b, c, d, e);
      else if (Array.isArray(b))
        for (var f = 0; f < b.length; f++) Q(a, b[f], c, d, e);
      else
        (c = hc(c)),
          a && a[Yb]
            ? ((d = ia(d) ? !!d.capture : !!d), a.o.add(String(b), c, !1, d, e))
            : ic(a, b, c, !1, d, e);
    },
    ic = function (a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");
      var g = ia(e) ? !!e.capture : !!e,
        h = kc(a);
      h || (a[dc] = h = new P(a));
      c = h.add(b, c, d, g, f);
      if (!c.ka) {
        d = lc();
        c.ka = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)
          Tb || (e = g),
            void 0 === e && (e = !1),
            a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(mc(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        fc++;
      }
    },
    lc = function () {
      var a = nc,
        b = function (c) {
          return a.call(b.src, b.listener, c);
        };
      return b;
    },
    gc = function (a, b, c, d, e) {
      if (Array.isArray(b))
        for (var f = 0; f < b.length; f++) gc(a, b[f], c, d, e);
      else
        (c = hc(c)),
          a && a[Yb]
            ? ((d = ia(d) ? !!d.capture : !!d), a.o.add(String(b), c, !0, d, e))
            : ic(a, b, c, !0, d, e);
    },
    oc = function (a, b, c, d, e) {
      if (Array.isArray(b))
        for (var f = 0; f < b.length; f++) oc(a, b[f], c, d, e);
      else
        (d = ia(d) ? !!d.capture : !!d),
          (c = hc(c)),
          a && a[Yb]
            ? a.o.remove(String(b), c, d, e)
            : a && (a = kc(a)) && (b = a.ra(b, c, d, e)) && pc(b);
    },
    pc = function (a) {
      if ("number" !== typeof a && a && !a.Y) {
        var b = a.src;
        if (b && b[Yb]) cc(b.o, a);
        else {
          var c = a.type,
            d = a.ka;
          b.removeEventListener
            ? b.removeEventListener(c, d, a.capture)
            : b.detachEvent
            ? b.detachEvent(mc(c), d)
            : b.addListener && b.removeListener && b.removeListener(d);
          fc--;
          (c = kc(b))
            ? (cc(c, a), 0 == c.ma && ((c.src = null), (b[dc] = null)))
            : ac(a);
        }
      }
    },
    mc = function (a) {
      return a in ec ? ec[a] : (ec[a] = "on" + a);
    },
    nc = function (a, b) {
      if (a.Y) a = !0;
      else {
        b = new O(b, this);
        var c = a.listener,
          d = a.fa || a.src;
        a.ba && pc(a);
        a = c.call(d, b);
      }
      return a;
    },
    kc = function (a) {
      a = a[dc];
      return a instanceof P ? a : null;
    },
    qc = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0),
    hc = function (a) {
      if ("function" === typeof a) return a;
      a[qc] ||
        (a[qc] = function (b) {
          return a.handleEvent(b);
        });
      return a[qc];
    };
  Rb(function (a) {
    nc = a(nc);
  });
  var R = function () {
    this.o = new P(this);
    this.Ka = this;
    this.Da = null;
  };
  A(R, Sb);
  var rc = R;
  rc.prototype[Yb] = !0;
  R.prototype.addEventListener = function (a, b, c, d) {
    Q(this, a, b, c, d);
  };
  R.prototype.removeEventListener = function (a, b, c, d) {
    oc(this, a, b, c, d);
  };
  R.prototype.dispatchEvent = function (a) {
    var b,
      c = this.Da;
    if (c) for (b = []; c; c = c.Da) b.push(c);
    c = this.Ka;
    var d = a.type || a;
    if ("string" === typeof a) a = new N(a, c);
    else if (a instanceof N) a.target = a.target || c;
    else {
      var e = a;
      a = new N(d, c);
      ta(a, e);
    }
    e = !0;
    if (b)
      for (var f = b.length - 1; !a.X && 0 <= f; f--) {
        var g = (a.currentTarget = b[f]);
        e = sc(g, d, !0, a) && e;
      }
    a.X ||
      ((g = a.currentTarget = c),
      (e = sc(g, d, !0, a) && e),
      a.X || (e = sc(g, d, !1, a) && e));
    if (b)
      for (f = 0; !a.X && f < b.length; f++)
        (g = a.currentTarget = b[f]), (e = sc(g, d, !1, a) && e);
    return (c = e);
  };
  var sc = function (a, b, c, d) {
    b = a.o.g[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.Y && g.capture == c) {
        var h = g.listener,
          l = g.fa || g.src;
        g.ba && cc(a.o, g);
        e = !1 !== h.call(l, d) && e;
      }
    }
    return e && !d.defaultPrevented;
  };
  R.prototype.ra = function (a, b, c, d) {
    return this.o.ra(String(a), b, c, d);
  };
  R.prototype.hasListener = function (a, b) {
    a = void 0 !== a ? String(a) : void 0;
    return this.o.hasListener(a, b);
  };
  var tc = {};
  function uc(a) {
    if (L && !Fb(9)) return [0, 0, 0, 0];
    var b = tc.hasOwnProperty(a) ? tc[a] : null;
    if (b) return b;
    65536 < Object.keys(tc).length && (tc = {});
    b = a;
    var c = [0, 0, 0, 0],
      d = /\\[0-9A-Fa-f]{6}\s?/g,
      e = /\\[0-9A-Fa-f]{1,5}\s/g,
      f = /\\./g;
    b = vc(b, d);
    b = vc(b, e);
    b = vc(b, f);
    d = /:not\(([^\)]*)\)/g;
    b = b.replace(d, "     $1 ");
    d = /{[^]*/gm;
    b = b.replace(d, "");
    d = /(\[[^\]]+\])/g;
    b = S(b, c, d, 2);
    d = /(#[^\#\s\+>~\.\[:]+)/g;
    b = S(b, c, d, 1);
    d = /(\.[^\s\+>~\.\[:]+)/g;
    b = S(b, c, d, 2);
    d = /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi;
    b = S(b, c, d, 3);
    d = /(:[\w-]+\([^\)]*\))/gi;
    b = S(b, c, d, 2);
    d = /(:[^\s\+>~\.\[:]+)/g;
    b = S(b, c, d, 2);
    b = b.replace(/[\*\s\+>~]/g, " ");
    b = b.replace(/[#\.]/g, " ");
    d = /([^\s\+>~\.\[:]+)/g;
    S(b, c, d, 3);
    b = c;
    return (tc[a] = b);
  }
  function S(a, b, c, d) {
    return a.replace(c, function (e) {
      b[d] += 1;
      return Array(e.length + 1).join(" ");
    });
  }
  function vc(a, b) {
    return a.replace(b, function (c) {
      return Array(c.length + 1).join("A");
    });
  }
  var wc = {
      "* ARIA-CHECKED": !0,
      "* ARIA-COLCOUNT": !0,
      "* ARIA-COLINDEX": !0,
      "* ARIA-CONTROLS": !0,
      "* ARIA-DESCRIBEDBY": !0,
      "* ARIA-DISABLED": !0,
      "* ARIA-EXPANDED": !0,
      "* ARIA-GOOG-EDITABLE": !0,
      "* ARIA-HASPOPUP": !0,
      "* ARIA-HIDDEN": !0,
      "* ARIA-LABEL": !0,
      "* ARIA-LABELLEDBY": !0,
      "* ARIA-MULTILINE": !0,
      "* ARIA-MULTISELECTABLE": !0,
      "* ARIA-ORIENTATION": !0,
      "* ARIA-PLACEHOLDER": !0,
      "* ARIA-READONLY": !0,
      "* ARIA-REQUIRED": !0,
      "* ARIA-ROLEDESCRIPTION": !0,
      "* ARIA-ROWCOUNT": !0,
      "* ARIA-ROWINDEX": !0,
      "* ARIA-SELECTED": !0,
      "* ABBR": !0,
      "* ACCEPT": !0,
      "* ACCESSKEY": !0,
      "* ALIGN": !0,
      "* ALT": !0,
      "* AUTOCOMPLETE": !0,
      "* AXIS": !0,
      "* BGCOLOR": !0,
      "* BORDER": !0,
      "* CELLPADDING": !0,
      "* CELLSPACING": !0,
      "* CHAROFF": !0,
      "* CHAR": !0,
      "* CHECKED": !0,
      "* CLEAR": !0,
      "* COLOR": !0,
      "* COLSPAN": !0,
      "* COLS": !0,
      "* COMPACT": !0,
      "* COORDS": !0,
      "* DATETIME": !0,
      "* DIR": !0,
      "* DISABLED": !0,
      "* ENCTYPE": !0,
      "* FACE": !0,
      "* FRAME": !0,
      "* HEIGHT": !0,
      "* HREFLANG": !0,
      "* HSPACE": !0,
      "* ISMAP": !0,
      "* LABEL": !0,
      "* LANG": !0,
      "* MAX": !0,
      "* MAXLENGTH": !0,
      "* METHOD": !0,
      "* MULTIPLE": !0,
      "* NOHREF": !0,
      "* NOSHADE": !0,
      "* NOWRAP": !0,
      "* OPEN": !0,
      "* READONLY": !0,
      "* REQUIRED": !0,
      "* REL": !0,
      "* REV": !0,
      "* ROLE": !0,
      "* ROWSPAN": !0,
      "* ROWS": !0,
      "* RULES": !0,
      "* SCOPE": !0,
      "* SELECTED": !0,
      "* SHAPE": !0,
      "* SIZE": !0,
      "* SPAN": !0,
      "* START": !0,
      "* SUMMARY": !0,
      "* TABINDEX": !0,
      "* TITLE": !0,
      "* TYPE": !0,
      "* VALIGN": !0,
      "* VALUE": !0,
      "* VSPACE": !0,
      "* WIDTH": !0,
    },
    xc = {
      "* USEMAP": !0,
      "* ACTION": !0,
      "* CITE": !0,
      "* HREF": !0,
      "* LONGDESC": !0,
      "* SRC": !0,
      "LINK HREF": !0,
      "* FOR": !0,
      "* HEADERS": !0,
      "* NAME": !0,
      "A TARGET": !0,
      "* CLASS": !0,
      "* ID": !0,
      "* STYLE": !0,
    };
  var yc = {
      rgb: !0,
      rgba: !0,
      alpha: !0,
      rect: !0,
      image: !0,
      "linear-gradient": !0,
      "radial-gradient": !0,
      "repeating-linear-gradient": !0,
      "repeating-radial-gradient": !0,
      "cubic-bezier": !0,
      matrix: !0,
      perspective: !0,
      rotate: !0,
      rotate3d: !0,
      rotatex: !0,
      rotatey: !0,
      steps: !0,
      rotatez: !0,
      scale: !0,
      scale3d: !0,
      scalex: !0,
      scaley: !0,
      scalez: !0,
      skew: !0,
      skewx: !0,
      skewy: !0,
      translate: !0,
      translate3d: !0,
      translatex: !0,
      translatey: !0,
      translatez: !0,
    },
    zc = /[\n\f\r"'()*<>]/g,
    Ac = {
      "\n": "%0a",
      "\f": "%0c",
      "\r": "%0d",
      '"': "%22",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "*": "%2a",
      "<": "%3c",
      ">": "%3e",
    };
  function Bc(a) {
    return Ac[a];
  }
  var Cc = function (a, b, c) {
    b = E(b);
    if ("" == b) return null;
    var d = String(b.substr(0, 4)).toLowerCase();
    d = "url(" < d ? -1 : "url(" == d ? 0 : 1;
    if ((d = 0 == d)) {
      if (
        !b.endsWith(")") ||
        1 < (b ? b.split("(").length - 1 : 0) ||
        1 < (b ? b.split(")").length - 1 : 0) ||
        !c
      )
        return null;
      a: for (b = b.substring(4, b.length - 1), d = 0; 2 > d; d++) {
        var e = "\"'".charAt(d);
        if (b.charAt(0) == e && b.charAt(b.length - 1) == e) {
          b = b.substring(1, b.length - 1);
          break a;
        }
      }
      a = c
        ? (a = c(b, a)) && "about:invalid#zClosurez" != Qa(a)
          ? 'url("' + Qa(a).replace(zc, Bc) + '")'
          : null
        : null;
      return a;
    }
    if (0 < b.indexOf("(")) {
      if (/"|'/.test(b)) return null;
      for (a = /([\-\w]+)\(/g; (c = a.exec(b)); )
        if (!(c[1].toLowerCase() in yc)) return null;
    }
    return b;
  };
  function T(a, b) {
    a = v[a];
    return a && a.prototype
      ? ((b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get) || null
      : null;
  }
  function U(a, b) {
    return ((a = v[a]) && a.prototype && a.prototype[b]) || null;
  }
  var Dc = T("Element", "attributes") || T("Node", "attributes"),
    Ec = U("Element", "hasAttribute"),
    Fc = U("Element", "getAttribute"),
    Gc = U("Element", "setAttribute"),
    Hc = U("Element", "removeAttribute"),
    Ic = U("Element", "getElementsByTagName"),
    Jc = U("Element", "matches") || U("Element", "msMatchesSelector"),
    Kc = T("Node", "nodeName"),
    Lc = T("Node", "nodeType"),
    Mc = T("Node", "parentNode"),
    Nc = T("HTMLElement", "style") || T("Element", "style"),
    Oc = T("HTMLStyleElement", "sheet"),
    Pc = U("CSSStyleDeclaration", "getPropertyValue"),
    Qc = U("CSSStyleDeclaration", "setProperty");
  function Rc(a, b, c, d) {
    if (a) return a.apply(b);
    a = b[c];
    if (!d(a)) throw Error("Clobbering detected");
    return a;
  }
  function W(a, b, c, d) {
    if (a) return a.apply(b, d);
    if (L && 10 > document.documentMode) {
      if (!b[c].call) throw Error("IE Clobbering detected");
    } else if ("function" != typeof b[c]) throw Error("Clobbering detected");
    return b[c].apply(b, d);
  }
  function Sc(a) {
    return Rc(Dc, a, "attributes", function (b) {
      return b instanceof NamedNodeMap;
    });
  }
  function Tc(a, b, c) {
    try {
      W(Gc, a, "setAttribute", [b, c]);
    } catch (d) {
      if (-1 == d.message.indexOf("A security problem occurred")) throw d;
    }
  }
  function Uc(a) {
    return Rc(Nc, a, "style", function (b) {
      return b instanceof CSSStyleDeclaration;
    });
  }
  function Vc(a) {
    return Rc(Oc, a, "sheet", function (b) {
      return b instanceof CSSStyleSheet;
    });
  }
  function Wc(a) {
    return Rc(Kc, a, "nodeName", function (b) {
      return "string" == typeof b;
    });
  }
  function Xc(a) {
    return Rc(Lc, a, "nodeType", function (b) {
      return "number" == typeof b;
    });
  }
  function Yc(a) {
    return Rc(Mc, a, "parentNode", function (b) {
      return !(
        b &&
        "string" == typeof b.name &&
        b.name &&
        "parentnode" == b.name.toLowerCase()
      );
    });
  }
  function Zc(a, b) {
    return (
      W(Pc, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [b]) ||
      ""
    );
  }
  function $c(a, b, c) {
    W(Qc, a, a.setProperty ? "setProperty" : "setAttribute", [b, c]);
  }
  var ad =
      L && 10 > document.documentMode
        ? null
        : /\s*([^\s'",]+[^'",]*(('([^'\r\n\f\\]|\\[^])*')|("([^"\r\n\f\\]|\\[^])*")|[^'",])*)/g,
    bd = {
      "-webkit-border-horizontal-spacing": !0,
      "-webkit-border-vertical-spacing": !0,
    },
    ed = function (a, b, c) {
      var d = [];
      a = cd(Aa(a.cssRules));
      D(a, function (e) {
        if (b && !/[a-zA-Z][\w-:\.]*/.test(b))
          throw Error("Invalid container id");
        if (
          !(
            b &&
            L &&
            10 == document.documentMode &&
            /\\['"]/.test(e.selectorText)
          )
        ) {
          var f = b
              ? e.selectorText.replace(ad, "#" + b + " $1")
              : e.selectorText,
            g = d,
            h = g.push;
          e = dd(e.style, c);
          if (-1 != f.indexOf("<"))
            throw Error("Selector does not allow '<', got: " + f);
          var l = f.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
          if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(l))
            throw Error(
              "Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " +
                f
            );
          a: {
            for (
              var k = { "(": ")", "[": "]" }, m = [], r = 0;
              r < l.length;
              r++
            ) {
              var F = l[r];
              if (k[F]) m.push(k[F]);
              else {
                b: {
                  var q = void 0;
                  for (q in k)
                    if (k[q] == F) {
                      q = !0;
                      break b;
                    }
                  q = !1;
                }
                if (q && m.pop() != F) {
                  l = !1;
                  break a;
                }
              }
            }
            l = 0 == m.length;
          }
          if (!l)
            throw Error("() and [] in selector must be balanced, got: " + f);
          if (!(e instanceof I)) {
            l = "";
            for (t in e)
              if (Object.prototype.hasOwnProperty.call(e, t)) {
                if (!/^[-_a-zA-Z0-9]+$/.test(t))
                  throw Error("Name allows only [-_a-zA-Z0-9], got: " + t);
                k = e[t];
                null != k &&
                  ((k = Array.isArray(k) ? xa(k, Za).join(" ") : Za(k)),
                  (l += t + ":" + k + ";"));
              }
            e = l ? new I(l, Wa) : Xa;
          }
          var t =
            f +
            "{" +
            (e instanceof I && e.constructor === I
              ? e.wa
              : "type_error:SafeStyle"
            ).replace(/</g, "\\3C ") +
            "}";
          t = new J(t, hb);
          h.call(g, t);
        }
      });
      return jb(d);
    },
    cd = function (a) {
      return wa(a, function (b) {
        return b instanceof CSSStyleRule || b.type == CSSRule.STYLE_RULE;
      });
    },
    gd = function (a, b, c) {
      a = fd("<style>" + a + "</style>");
      if (null == a || null == a.sheet) return kb;
      b = void 0 != b ? b : null;
      return ed(a.sheet, b, c);
    },
    fd = function (a) {
      if ((L && !Fb(10)) || "function" != typeof v.DOMParser) return null;
      a = ob("<html><head></head><body>" + a + "</body></html>");
      var b = new DOMParser();
      a = b.parseFromString(mb(a), "text/html");
      return a.body.children[0];
    },
    dd = function (a, b) {
      if (!a) return Xa;
      var c = document.createElement("div").style,
        d = hd(a);
      D(d, function (e) {
        var f =
          xb && e in bd
            ? e
            : e.replace(
                /^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i,
                ""
              );
        0 != f.lastIndexOf("--", 0) &&
          0 != f.lastIndexOf("var", 0) &&
          ((e = Zc(a, e)), (e = Cc(f, e, b)), null != e && $c(c, f, e));
      });
      return new I(c.cssText || "", Wa);
    },
    jd = function (a) {
      var b = Array.from(W(Ic, a, "getElementsByTagName", ["STYLE"])),
        c = Ca(b, function (e) {
          return Aa(Vc(e).cssRules);
        });
      c = cd(c);
      c.sort(function (e, f) {
        e = uc(e.selectorText);
        var g = uc(f.selectorText);
        a: {
          f = e;
          e = g;
          var h = h || Ba;
          g = Math.min(f.length, e.length);
          for (var l = 0; l < g; l++) {
            var k = h(f[l], e[l]);
            if (0 != k) {
              f = k;
              break a;
            }
          }
          f = Ba(f.length, e.length);
        }
        return -f;
      });
      a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, null, !1);
      for (var d; (d = a.nextNode()); )
        D(c, function (e) {
          W(Jc, d, d.matches ? "matches" : "msMatchesSelector", [
            e.selectorText,
          ]) &&
            e.style &&
            id(d, e.style);
        });
      D(b, Nb);
    },
    id = function (a, b) {
      var c = hd(a.style),
        d = hd(b);
      D(d, function (e) {
        if (!(0 <= c.indexOf(e))) {
          var f = Zc(b, e);
          $c(a.style, e, f);
        }
      });
    },
    hd = function (a) {
      var b = typeof a;
      b = "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
      (b = "array" == b || ("object" == b && "number" == typeof a.length))
        ? (a = Aa(a))
        : ((a = oa(a)), ya(a, "cssText"));
      return a;
    };
  var kd =
      "undefined" != typeof WeakMap &&
      -1 != WeakMap.toString().indexOf("[native code]"),
    ld = 0,
    md = function () {
      this.ta = [];
      this.na = [];
      this.J = "data-elementweakmap-index-" + ld++;
    };
  md.prototype.set = function (a, b) {
    if (W(Ec, a, "hasAttribute", [this.J])) {
      var c = parseInt(W(Fc, a, "getAttribute", [this.J]) || null, 10);
      this.na[c] = b;
    } else
      (c = this.na.push(b) - 1), Tc(a, this.J, c.toString()), this.ta.push(a);
    return this;
  };
  md.prototype.get = function (a) {
    if (W(Ec, a, "hasAttribute", [this.J]))
      return (
        (a = parseInt(W(Fc, a, "getAttribute", [this.J]) || null, 10)),
        this.na[a]
      );
  };
  md.prototype.clear = function () {
    this.ta.forEach(function (a) {
      W(Hc, a, "removeAttribute", [this.J]);
    }, this);
    this.ta = [];
    this.na = [];
  };
  var nd;
  (nd = !L) || (nd = 10 <= Number(Kb));
  var od = nd,
    pd = !L || null == document.documentMode,
    qd = function () {};
  var rd = {
    APPLET: !0,
    AUDIO: !0,
    BASE: !0,
    BGSOUND: !0,
    EMBED: !0,
    FORM: !0,
    IFRAME: !0,
    ISINDEX: !0,
    KEYGEN: !0,
    LAYER: !0,
    LINK: !0,
    META: !0,
    OBJECT: !0,
    SCRIPT: !0,
    SVG: !0,
    STYLE: !0,
    TEMPLATE: !0,
    VIDEO: !0,
  };
  var sd = {
    A: !0,
    ABBR: !0,
    ACRONYM: !0,
    ADDRESS: !0,
    AREA: !0,
    ARTICLE: !0,
    ASIDE: !0,
    B: !0,
    BDI: !0,
    BDO: !0,
    BIG: !0,
    BLOCKQUOTE: !0,
    BR: !0,
    BUTTON: !0,
    CAPTION: !0,
    CENTER: !0,
    CITE: !0,
    CODE: !0,
    COL: !0,
    COLGROUP: !0,
    DATA: !0,
    DATALIST: !0,
    DD: !0,
    DEL: !0,
    DETAILS: !0,
    DFN: !0,
    DIALOG: !0,
    DIR: !0,
    DIV: !0,
    DL: !0,
    DT: !0,
    EM: !0,
    FIELDSET: !0,
    FIGCAPTION: !0,
    FIGURE: !0,
    FONT: !0,
    FOOTER: !0,
    FORM: !0,
    H1: !0,
    H2: !0,
    H3: !0,
    H4: !0,
    H5: !0,
    H6: !0,
    HEADER: !0,
    HGROUP: !0,
    HR: !0,
    I: !0,
    IMG: !0,
    INPUT: !0,
    INS: !0,
    KBD: !0,
    LABEL: !0,
    LEGEND: !0,
    LI: !0,
    MAIN: !0,
    MAP: !0,
    MARK: !0,
    MENU: !0,
    METER: !0,
    NAV: !0,
    NOSCRIPT: !0,
    OL: !0,
    OPTGROUP: !0,
    OPTION: !0,
    OUTPUT: !0,
    P: !0,
    PRE: !0,
    PROGRESS: !0,
    Q: !0,
    S: !0,
    SAMP: !0,
    SECTION: !0,
    SELECT: !0,
    SMALL: !0,
    SOURCE: !0,
    SPAN: !0,
    STRIKE: !0,
    STRONG: !0,
    STYLE: !0,
    SUB: !0,
    SUMMARY: !0,
    SUP: !0,
    TABLE: !0,
    TBODY: !0,
    TD: !0,
    TEXTAREA: !0,
    TFOOT: !0,
    TH: !0,
    THEAD: !0,
    TIME: !0,
    TR: !0,
    TT: !0,
    U: !0,
    UL: !0,
    VAR: !0,
    WBR: !0,
  };
  var td = {
      "ANNOTATION-XML": !0,
      "COLOR-PROFILE": !0,
      "FONT-FACE": !0,
      "FONT-FACE-SRC": !0,
      "FONT-FACE-URI": !0,
      "FONT-FACE-FORMAT": !0,
      "FONT-FACE-NAME": !0,
      "MISSING-GLYPH": !0,
    },
    xd = function (a) {
      a = a || new ud();
      vd(a);
      this.R = ra(a.i);
      this.$ = ra(a.$);
      this.N = ra(a.N);
      this.za = a.za;
      D(
        a.Oa,
        function (b) {
          if (0 != b.lastIndexOf("data-", 0))
            throw new C('Only "data-" attributes allowed, got: %s.', [b]);
          if (0 == b.lastIndexOf("data-sanitizer-", 0))
            throw new C(
              'Attributes with "%s" prefix are not allowed, got: %s.',
              ["data-sanitizer-", b]
            );
          this.R["* " + b.toUpperCase()] = wd;
        },
        this
      );
      D(
        a.Na,
        function (b) {
          b = b.toUpperCase();
          if (-1 == b.indexOf("-") || td[b])
            throw new C(
              "Only valid custom element tag names allowed, got: %s.",
              [b]
            );
          this.N[b] = !0;
        },
        this
      );
      this.ia = a.ia;
      this.Z = a.Z;
      this.ca = null;
      this.sa = a.sa;
    };
  A(xd, qd);
  var yd = function (a) {
      return function (b, c) {
        b = E(b);
        return (c = a(b, c)) && "about:invalid#zClosurez" != Qa(c)
          ? Qa(c)
          : null;
      };
    },
    ud = function () {
      this.i = {};
      D(
        [wc, xc],
        function (a) {
          D(
            oa(a),
            function (b) {
              this.i[b] = wd;
            },
            this
          );
        },
        this
      );
      this.j = {};
      this.Oa = [];
      this.Na = [];
      this.$ = ra(rd);
      this.N = ra(sd);
      this.za = !1;
      this.ib = Va;
      this.fb = this.Ha = this.Ya = this.ia = Ia;
      this.Z = null;
      this.Ea = this.sa = !1;
    },
    zd = function (a, b) {
      return function (c, d, e, f) {
        c = a(c, d, e, f);
        return null == c ? null : b(c, d, e, f);
      };
    },
    X = function (a, b, c, d) {
      a[c] && !b[c] && (a[c] = zd(a[c], d));
    },
    vd = function (a) {
      if (a.Ea)
        throw Error("HtmlSanitizer.Builder.build() can only be used once.");
      X(a.i, a.j, "* USEMAP", Ad);
      var b = ["* ACTION", "* CITE", "* HREF"],
        c = yd(a.ib);
      D(
        b,
        function (e) {
          X(this.i, this.j, e, c);
        },
        a
      );
      b = ["* LONGDESC", "* SRC", "LINK HREF"];
      var d = yd(a.ia);
      D(
        b,
        function (e) {
          X(this.i, this.j, e, d);
        },
        a
      );
      b = ["* FOR", "* HEADERS", "* NAME"];
      D(
        b,
        function (e) {
          X(this.i, this.j, e, la(Bd, this.Ya));
        },
        a
      );
      X(a.i, a.j, "A TARGET", la(Cd, ["_blank", "_self"]));
      X(a.i, a.j, "* CLASS", la(Dd, a.Ha));
      X(a.i, a.j, "* ID", la(Ed, a.Ha));
      X(a.i, a.j, "* STYLE", la(a.fb, d));
      a.Ea = !0;
    },
    Fd = function (a, b) {
      a || (a = "*");
      return (a + " " + b).toUpperCase();
    },
    wd = function (a) {
      return E(a);
    },
    Cd = function (a, b) {
      b = E(b);
      return 0 <= va(a, b.toLowerCase()) ? b : null;
    },
    Ad = function (a) {
      return (a = E(a)) && "#" == a.charAt(0) ? a : null;
    },
    Bd = function (a, b, c) {
      b = E(b);
      return a(b, c);
    },
    Dd = function (a, b, c) {
      b = b.split(/(?:\s+)/);
      for (var d = [], e = 0; e < b.length; e++) {
        var f = a(b[e], c);
        f && d.push(f);
      }
      return 0 == d.length ? null : d.join(" ");
    },
    Ed = function (a, b, c) {
      b = E(b);
      return a(b, c);
    };
  xd.prototype.createTextNode = function (a) {
    var b = a.data;
    (a = Yc(a)) &&
      "style" == Wc(a).toLowerCase() &&
      !("STYLE" in this.$) &&
      "STYLE" in this.N &&
      (b = ib(
        gd(
          b,
          this.ca,
          w(function (c, d) {
            return this.ia(c, { kb: d });
          }, this)
        )
      ));
    return document.createTextNode(b);
  };
  var Y = function () {
      return Math.round(Date.now() / 1e3);
    },
    Gd = function (a) {
      return window.performance &&
        window.performance.timing &&
        window.performance.timing.domLoading &&
        0 < window.performance.timing[a]
        ? Math.round(window.performance.timing[a] / 1e3)
        : null;
    },
    Hd = function () {
      return {
        domLoading: Gd("domLoading"),
        domComplete: Gd("domComplete"),
        unloadEventStart: Gd("unloadEventStart"),
      };
    };
  v.console &&
    "function" === typeof v.console.log &&
    w(v.console.log, v.console);
  var Id = function () {
    if (!e) return this;
    var a = e.lb(),
      b = e.mb(),
      c = e.G,
      d = e.v;
    var e = e.D;
    a && (this.er = a.ya());
    b && (this.vi = b.ya());
    null != c && (this.tagstamp = c);
    null != d && (this.playstamp = d);
    null != e && (this.lactstamp = e);
    return this;
  };
  var Jd = null,
    Kd = function () {
      var a = document;
      var b = Mb("IFRAME");
      b.setAttribute("name", "google_video_inner_static_iframe");
      b.setAttribute("id", "google_video_inner_static_iframe");
      b.setAttribute("src", "about:blank");
      b.setAttribute("style", "height: 0px; width: 0px; display:none");
      if (a.body) a.body.appendChild(b);
      else {
        var c = b.outerHTML;
        b = new ud();
        b = new xd(b);
        var d = "*" == b.Z;
        var e = !("STYLE" in b.$) && "STYLE" in b.N;
        d =
          d && e
            ? "sanitizer-" +
              (Math.floor(2147483648 * Math.random()).toString(36) +
                Math.abs(
                  Math.floor(2147483648 * Math.random()) ^ Date.now()
                ).toString(36))
            : b.Z;
        b.ca = d;
        if (od) {
          d = c;
          if (od) {
            c = Mb("SPAN");
            b.ca && "*" == b.Z && (c.id = b.ca);
            b.sa &&
              ((d = fd("<div>" + d + "</div>")), jd(d), (d = d.innerHTML));
            d = ob(d);
            e = document.createElement("template");
            if (pd && "content" in e) qb(e, d), (e = e.content);
            else {
              var f = document.implementation.createHTMLDocument("x");
              e = f.body;
              qb(f.body, d);
            }
            d = document.createTreeWalker(
              e,
              NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
              null,
              !1
            );
            for (e = kd ? new WeakMap() : new md(); (f = d.nextNode()); ) {
              c: {
                var g = b;
                var h = f;
                var l = Xc(h);
                switch (l) {
                  case 3:
                    h = g.createTextNode(h);
                    break c;
                  case 1:
                    l = h;
                    if ("TEMPLATE" == Wc(l).toUpperCase()) h = null;
                    else {
                      h = g;
                      var k = Wc(l).toUpperCase();
                      if (k in h.$) h = null;
                      else if (h.N[k]) h = document.createElement(k);
                      else {
                        var m = "SPAN";
                        m = Mb(m);
                        h.za &&
                          Tc(m, "data-sanitizer-original-tag", k.toLowerCase());
                        h = m;
                      }
                      if (h) {
                        k = l;
                        m = h;
                        var r = Sc(k);
                        if (null != r)
                          for (var F = 0; (l = r[F]); F++)
                            if (l.specified) {
                              var q = g;
                              var t = k;
                              var pa = l,
                                V = pa.name;
                              if (0 == V.lastIndexOf("data-sanitizer-", 0))
                                q = null;
                              else {
                                var qa = Wc(t);
                                pa = pa.value;
                                var fb = {
                                    tagName: E(qa).toLowerCase(),
                                    attributeName: E(V).toLowerCase(),
                                  },
                                  jc = { Ma: void 0 };
                                "style" == fb.attributeName && (jc.Ma = Uc(t));
                                t = jc;
                                qa = Fd(qa, V);
                                qa in q.R
                                  ? ((q = q.R[qa]), (q = q(pa, fb, t)))
                                  : ((V = Fd(null, V)),
                                    V in q.R
                                      ? ((q = q.R[V]), (q = q(pa, fb, t)))
                                      : (q = null));
                              }
                              null !== q && Tc(m, l.name, q);
                            }
                      } else h = null;
                    }
                    break c;
                  default:
                    h = null;
                }
              }
              if (h) {
                if ((1 == Xc(h) && e.set(f, h), (f = Yc(f)), (g = !1), f))
                  (l = Xc(f)),
                    (k = Wc(f).toLowerCase()),
                    (m = Yc(f)),
                    11 != l || m
                      ? "body" == k && m && (l = Yc(m)) && !Yc(l) && (g = !0)
                      : (g = !0),
                    (l = null),
                    g || !f ? (l = c) : 1 == Xc(f) && (l = e.get(f)),
                    l.content && (l = l.content),
                    l.appendChild(h);
              } else for (h = f; (f = h.firstChild); ) h.removeChild(f);
            }
            e.clear && e.clear();
            b = c;
          } else b = Mb("SPAN");
          0 < Sc(b).length && ((c = Mb("SPAN")), c.appendChild(b), (b = c));
          b = new XMLSerializer().serializeToString(b);
          b = b.slice(b.indexOf(">") + 1, b.lastIndexOf("</"));
        } else b = "";
        b = ob(b);
        a.write(mb(b));
      }
    },
    Ld = function (a) {
      a = a.K;
      if (M().top == a.source) {
        a: {
          a = a.data;
          try {
            if (0 == a.lastIndexOf("data", 0)) {
              var b = a.substring(4),
                c = new Id();
              0 < b.length && ta(c, JSON.parse(b));
              var d = c;
              break a;
            }
          } catch (e) {}
          d = null;
        }
        null != d && (Jd = d);
      }
    },
    Md = function () {
      if (!Ob()) {
        var a = M().frames;
        (a = a.length && a.google_video_inner_static_iframe) || Kd();
        Q(M(), "message", Ld);
        x("ima.video.client.getLastSnapshotFromTop", function () {
          return Jd;
        });
        M().top.postMessage && M().top.postMessage("get", "*");
      }
    };
  var Nd = function (a, b) {
    this.Wa = 100;
    this.La = a;
    this.eb = b;
    this.ja = 0;
    this.ga = null;
  };
  Nd.prototype.get = function () {
    if (0 < this.ja) {
      this.ja--;
      var a = this.ga;
      this.ga = a.next;
      a.next = null;
    } else a = this.La();
    return a;
  };
  Nd.prototype.put = function (a) {
    this.eb(a);
    this.ja < this.Wa && (this.ja++, (a.next = this.ga), (this.ga = a));
  };
  var Od,
    Pd = function () {
      var a = v.MessageChannel;
      "undefined" === typeof a &&
        "undefined" !== typeof window &&
        window.postMessage &&
        window.addEventListener &&
        !G("Presto") &&
        (a = function () {
          var e = Mb("IFRAME");
          e.style.display = "none";
          document.documentElement.appendChild(e);
          var f = e.contentWindow;
          e = f.document;
          e.open();
          e.close();
          var g = "callImmediate" + Math.random(),
            h =
              "file:" == f.location.protocol
                ? "*"
                : f.location.protocol + "//" + f.location.host;
          e = w(function (l) {
            if (("*" == h || l.origin == h) && l.data == g)
              this.port1.onmessage();
          }, this);
          f.addEventListener("message", e, !1);
          this.port1 = {};
          this.port2 = {
            postMessage: function () {
              f.postMessage(g, h);
            },
          };
        });
      if ("undefined" !== typeof a && !G("Trident") && !G("MSIE")) {
        var b = new a(),
          c = {},
          d = c;
        b.port1.onmessage = function () {
          if (void 0 !== c.next) {
            c = c.next;
            var e = c.Ba;
            c.Ba = null;
            e();
          }
        };
        return function (e) {
          d.next = { Ba: e };
          d = d.next;
          b.port2.postMessage(0);
        };
      }
      return function (e) {
        v.setTimeout(e, 0);
      };
    },
    Qd = Ja;
  Rb(function (a) {
    Qd = a;
  });
  function Rd(a) {
    v.setTimeout(function () {
      throw a;
    }, 0);
  }
  var Sd = function () {
    this.oa = this.O = null;
  };
  Sd.prototype.add = function (a, b) {
    var c = Td.get();
    c.set(a, b);
    this.oa ? (this.oa.next = c) : (this.O = c);
    this.oa = c;
  };
  Sd.prototype.remove = function () {
    var a = null;
    this.O &&
      ((a = this.O),
      (this.O = this.O.next),
      this.O || (this.oa = null),
      (a.next = null));
    return a;
  };
  var Td = new Nd(
      function () {
        return new Ud();
      },
      function (a) {
        return a.reset();
      }
    ),
    Ud = function () {
      this.next = this.scope = this.qa = null;
    };
  Ud.prototype.set = function (a, b) {
    this.qa = a;
    this.scope = b;
    this.next = null;
  };
  Ud.prototype.reset = function () {
    this.next = this.scope = this.qa = null;
  };
  var Zd = function (a, b) {
      Vd || Wd();
      Xd || (Vd(), (Xd = !0));
      Yd.add(a, b);
    },
    Vd,
    Wd = function () {
      if (v.Promise && v.Promise.resolve) {
        var a = v.Promise.resolve(void 0);
        Vd = function () {
          a.then($d);
        };
      } else
        Vd = function () {
          var b = $d,
            c,
            d,
            e = b;
          c && (e = w(b, c));
          e = Qd(e);
          "function" !== typeof v.setImmediate ||
          (!d &&
            v.Window &&
            v.Window.prototype &&
            !G("Edge") &&
            v.Window.prototype.setImmediate == v.setImmediate)
            ? (Od || (Od = Pd()), Od(e))
            : v.setImmediate(e);
        };
    },
    Xd = !1,
    Yd = new Sd(),
    $d = function () {
      for (var a; (a = Yd.remove()); ) {
        try {
          a.qa.call(a.scope);
        } catch (b) {
          Rd(b);
        }
        Td.put(a);
      }
      Xd = !1;
    };
  var Z = function (a, b) {
      this.h = 0;
      this.Fa = void 0;
      this.H = this.l = this.F = null;
      this.ea = this.pa = !1;
      if (a != ha)
        try {
          var c = this;
          a.call(
            b,
            function (d) {
              ae(c, 2, d);
            },
            function (d) {
              ae(c, 3, d);
            }
          );
        } catch (d) {
          ae(this, 3, d);
        }
    },
    be = function () {
      this.next = this.context = this.M = this.W = this.C = null;
      this.aa = !1;
    };
  be.prototype.reset = function () {
    this.context = this.M = this.W = this.C = null;
    this.aa = !1;
  };
  var ce = new Nd(
      function () {
        return new be();
      },
      function (a) {
        a.reset();
      }
    ),
    de = function (a, b, c) {
      var d = ce.get();
      d.W = a;
      d.M = b;
      d.context = c;
      return d;
    };
  Z.prototype.then = function (a, b, c) {
    return ee(
      this,
      "function" === typeof a ? a : null,
      "function" === typeof b ? b : null,
      c
    );
  };
  var fe = Z;
  fe.prototype.$goog_Thenable = !0;
  Z.prototype.cancel = function (a) {
    if (0 == this.h) {
      var b = new ge(a);
      Zd(function () {
        he(this, b);
      }, this);
    }
  };
  var he = function (a, b) {
      if (0 == a.h)
        if (a.F) {
          var c = a.F;
          if (c.l) {
            for (
              var d = 0, e = null, f = null, g = c.l;
              g && (g.aa || (d++, g.C == a && (e = g), !(e && 1 < d)));
              g = g.next
            )
              e || (f = g);
            e &&
              (0 == c.h && 1 == d
                ? he(c, b)
                : (f
                    ? ((d = f),
                      d.next == c.H && (c.H = d),
                      (d.next = d.next.next))
                    : ie(c),
                  je(c, e, 3, b)));
          }
          a.F = null;
        } else ae(a, 3, b);
    },
    le = function (a, b) {
      a.l || (2 != a.h && 3 != a.h) || ke(a);
      a.H ? (a.H.next = b) : (a.l = b);
      a.H = b;
    },
    ee = function (a, b, c, d) {
      var e = de(null, null, null);
      e.C = new Z(function (f, g) {
        e.W = b
          ? function (h) {
              try {
                var l = b.call(d, h);
                f(l);
              } catch (k) {
                g(k);
              }
            }
          : f;
        e.M = c
          ? function (h) {
              try {
                var l = c.call(d, h);
                void 0 === l && h instanceof ge ? g(h) : f(l);
              } catch (k) {
                g(k);
              }
            }
          : g;
      });
      e.C.F = a;
      le(a, e);
      return e.C;
    };
  Z.prototype.gb = function (a) {
    this.h = 0;
    ae(this, 2, a);
  };
  Z.prototype.hb = function (a) {
    this.h = 0;
    ae(this, 3, a);
  };
  var ae = function (a, b, c) {
      if (0 == a.h) {
        a === c &&
          ((b = 3), (c = new TypeError("Promise cannot resolve to itself")));
        a.h = 1;
        a: {
          var d = c,
            e = a.gb,
            f = a.hb,
            g = a;
          if (d instanceof Z) {
            le(d, de(e || ha, f || null, g));
            var h = !0;
          } else {
            if (d)
              try {
                var l = !!d.$goog_Thenable;
              } catch (m) {
                l = !1;
              }
            else l = !1;
            if (l) d.then(e, f, g), (h = !0);
            else {
              if (ia(d))
                try {
                  var k = d.then;
                  if ("function" === typeof k) {
                    me(d, k, e, f, g);
                    h = !0;
                    break a;
                  }
                } catch (m) {
                  f.call(g, m);
                  h = !0;
                  break a;
                }
              h = !1;
            }
          }
        }
        h ||
          ((a.Fa = c),
          (a.h = b),
          (a.F = null),
          ke(a),
          3 != b || c instanceof ge || ne(a, c));
      }
    },
    me = function (a, b, c, d, e) {
      var f = !1,
        g = function (l) {
          f || ((f = !0), c.call(e, l));
        },
        h = function (l) {
          f || ((f = !0), d.call(e, l));
        };
      try {
        b.call(a, g, h);
      } catch (l) {
        h(l);
      }
    },
    ke = function (a) {
      a.pa || ((a.pa = !0), Zd(a.Pa, a));
    },
    ie = function (a) {
      var b = null;
      a.l && ((b = a.l), (a.l = b.next), (b.next = null));
      a.l || (a.H = null);
      return b;
    };
  Z.prototype.Pa = function () {
    for (var a; (a = ie(this)); ) je(this, a, this.h, this.Fa);
    this.pa = !1;
  };
  var je = function (a, b, c, d) {
      if (3 == c && b.M && !b.aa) for (; a && a.ea; a = a.F) a.ea = !1;
      if (b.C) (b.C.F = null), oe(b, c, d);
      else
        try {
          b.aa ? b.W.call(b.context) : oe(b, c, d);
        } catch (e) {
          pe.call(null, e);
        }
      ce.put(b);
    },
    oe = function (a, b, c) {
      2 == b ? a.W.call(a.context, c) : a.M && a.M.call(a.context, c);
    },
    ne = function (a, b) {
      a.ea = !0;
      Zd(function () {
        a.ea && pe.call(null, b);
      });
    },
    pe = Rd,
    ge = function (a) {
      B.call(this, a);
    };
  A(ge, B);
  ge.prototype.name = "cancel";
  var se = function () {
      var a = M(),
        b = document,
        c = qe;
      this.u = c;
      this.ha = null;
      this.da = 0;
      this.Xa = 500;
      this.la = null;
      re(this, a, b);
      c = document.documentElement;
      try {
        if (Ob()) {
          var d;
          b = [];
          var e = M(c.ownerDocument);
          for (c = e; c != e.top; c = c.parent)
            if (c.frameElement) b.push(c.frameElement);
            else break;
          var f = (d = b) && 0 != d.length ? "1" : "0";
        } else f = "2";
      } catch (h) {
        f = "2";
      }
      try {
        if ("1" == f) {
          for (var g = a.parent; g != a.top; g = g.parent)
            re(this, g, g.document);
          re(this, a.top, a.top.document);
        }
      } catch (h) {}
    },
    re = function (a, b, c) {
      Q(c, "mousedown", w(a.Za, a));
      Q(b, "scroll", w(a.bb, a));
      Q(c, "touchstart", w(a.cb, a));
      Q(c, "mousemove", w(a.ab, a));
    };
  n = se.prototype;
  n.cb = function () {
    this.u && this.u("t");
  };
  n.Za = function () {
    this.u && this.u("c");
  };
  n.bb = function () {
    this.u && this.u("s");
  };
  n.ab = function (a) {
    if (null != a.clientX && null != a.clientY) {
      a = new Lb(a.clientX, a.clientY);
      if (this.ha) {
        var b = this.ha;
        var c = b.x - a.x;
        b = b.y - a.y;
        c = Math.sqrt(c * c + b * b);
        this.da += Math.round(c);
      }
      this.ha = a;
    }
    this.la && v.clearTimeout(this.la);
    try {
      var d,
        e = this.$a,
        f = this.Xa;
      if ("function" === typeof e) this && (e = w(e, this));
      else if (e && "function" == typeof e.handleEvent) e = w(e.handleEvent, e);
      else throw Error("Invalid listener argument");
      this.la = d = 2147483647 < Number(f) ? -1 : v.setTimeout(e, f || 0);
    } catch (g) {}
  };
  n.$a = function () {
    this.u && this.u("m", this.da);
    this.ha = this.la = null;
    this.da = 0;
  };
  var te = 0,
    ue = -1;
  function qe(a, b) {
    b = "number" === typeof b ? b : 1;
    var c = ua;
    c = null !== c && a in c;
    var d = (a = "m" == a) && 100 <= b;
    (b = c && (d || !a) && 0 < b) && (ue = Y());
  }
  function ve() {
    te = Y();
    new se();
  }
  function we(a, b) {
    a && (Y = a);
    b && (Hd = b);
  }
  var y = function () {
    var a = te;
    var b = Hd().domLoading;
    a = null != b ? b : null != a ? a : Y();
    b = ue;
    this.G = te;
    this.v = a;
    this.D = Math.max(ue, b, a);
  };
  n = y.prototype;
  n.Va = function () {
    return this.G;
  };
  n.Ua = function () {
    return this.v;
  };
  n.Sa = function () {
    return this.D;
  };
  n.Qa = function (a, b, c) {
    a && (this.G = Math.min(this.G, a));
    this.v = Math.max(this.v, b);
    this.D = Math.max(this.D, c);
  };
  n.ya = function () {
    var a = [];
    null != this.G && a.push("tt" + (Y() - this.G));
    null != this.v && a.push("pd" + (Y() - this.v));
    null != this.D && -1 < this.D
      ? a.push("la" + 1e3 * (Y() - this.D))
      : a.push("la-1");
    return a.join("_");
  };
  n.Ca = function () {
    return Y() - this.G;
  };
  n.Ta = function () {
    return null != this.v ? Y() - this.v : this.Ca();
  };
  n.Ra = function () {
    return {};
  };
  z("getTagLoadTimestamp", y.prototype.Va);
  z("getPlaylistTimestamp", y.prototype.Ua);
  z("getLastActivityTimestamp", y.prototype.Sa);
  z("extendWithDataFromTopIframe", y.prototype.Qa);
  z("serialize", y.prototype.ya);
  z("getTimeSinceTagLoadSeconds", y.prototype.Ca);
  z("getPlaylistTimeDiff", y.prototype.Ta);
  z("getBuckets", y.prototype.Ra);
  x("ima.video.client.jsTag", !0);
  Md();
  (window.ima &&
    window.ima.video &&
    window.ima.video.client &&
    window.ima.video.client.tagged) ||
    (ve(),
    x("ima.video.client.getEData", function () {
      return new y();
    }),
    x("ima.video.client.setupEDHooks", ve),
    x("ima.video.client.resetEDForTesting", we),
    x("ima.video.client.tagged", !0));
}).call(this);
