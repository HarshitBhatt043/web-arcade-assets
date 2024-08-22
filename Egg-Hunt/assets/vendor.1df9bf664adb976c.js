const e = {},
  t = function (t, n, o) {
    if (!n || 0 === n.length) return t();
    const r = document.getElementsByTagName("link");
    return Promise.all(
      n.map((t) => {
        if (
          (t = (function (e) {
            return "/" + e;
          })(t)) in e
        )
          return;
        e[t] = !0;
        const n = t.endsWith(".css"),
          i = n ? '[rel="stylesheet"]' : "";
        if (!!o)
          for (let e = r.length - 1; e >= 0; e--) {
            const o = r[e];
            if (o.href === t && (!n || "stylesheet" === o.rel)) return;
          }
        else if (document.querySelector(`link[href="${t}"]${i}`)) return;
        const s = document.createElement("link");
        return (
          (s.rel = n ? "stylesheet" : "modulepreload"),
          n || ((s.as = "script"), (s.crossOrigin = "")),
          (s.href = t),
          document.head.appendChild(s),
          n
            ? new Promise((e, n) => {
                s.addEventListener("load", e),
                  s.addEventListener("error", () =>
                    n(new Error(`Unable to preload CSS for ${t}`))
                  );
              })
            : void 0
        );
      })
    ).then(() => t());
  };
function n(e, t) {
  const n = Object.create(null),
    o = e.split(",");
  for (let r = 0; r < o.length; r++) n[o[r]] = !0;
  return t ? (e) => !!n[e.toLowerCase()] : (e) => !!n[e];
}
function o(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        i = G(r) ? l(r) : o(r);
      if (i) for (const e in i) t[e] = i[e];
    }
    return t;
  }
  return G(e) || E(e) ? e : void 0;
}
const r = /;(?![^(]*\))/g,
  i = /:([^]+)/,
  s = /\/\*.*?\*\//gs;
function l(e) {
  const t = {};
  return (
    e
      .replace(s, "")
      .split(r)
      .forEach((e) => {
        if (e) {
          const n = e.split(i);
          n.length > 1 && (t[n[0].trim()] = n[1].trim());
        }
      }),
    t
  );
}
function a(e) {
  let t = "";
  if (G(e)) t = e;
  else if (P(e))
    for (let n = 0; n < e.length; n++) {
      const o = a(e[n]);
      o && (t += o + " ");
    }
  else if (E(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const c = n(
  "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
);
function u(e) {
  return !!e || "" === e;
}
const p = (e) =>
    G(e)
      ? e
      : null == e
      ? ""
      : P(e) || (E(e) && (e.toString === M || !k(e.toString)))
      ? JSON.stringify(e, d, 2)
      : String(e),
  d = (e, t) =>
    t && t.__v_isRef
      ? d(e, t.value)
      : U(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (e, [t, n]) => ((e[`${t} =>`] = n), e),
            {}
          ),
        }
      : C(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : !E(t) || P(t) || $(t)
      ? t
      : String(t),
  f = {},
  h = [],
  m = () => {},
  g = () => !1,
  v = /^on[^a-z]/,
  A = (e) => v.test(e),
  y = (e) => e.startsWith("onUpdate:"),
  b = Object.assign,
  w = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  x = Object.prototype.hasOwnProperty,
  _ = (e, t) => x.call(e, t),
  P = Array.isArray,
  U = (e) => "[object Map]" === L(e),
  C = (e) => "[object Set]" === L(e),
  k = (e) => "function" == typeof e,
  G = (e) => "string" == typeof e,
  S = (e) => "symbol" == typeof e,
  E = (e) => null !== e && "object" == typeof e,
  T = (e) => E(e) && k(e.then) && k(e.catch),
  M = Object.prototype.toString,
  L = (e) => M.call(e),
  O = (e) => L(e).slice(8, -1),
  $ = (e) => "[object Object]" === L(e),
  F = (e) => G(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
  R = n(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  B = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  j = /-(\w)/g,
  I = B((e) => e.replace(j, (e, t) => (t ? t.toUpperCase() : ""))),
  D = /\B([A-Z])/g,
  N = B((e) => e.replace(D, "-$1").toLowerCase()),
  V = B((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  H = B((e) => (e ? `on${V(e)}` : "")),
  q = (e, t) => !Object.is(e, t),
  X = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  W = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  Z = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  z = (e) => {
    const t = G(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let K;
const Y = () =>
  K ||
  (K =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {});
let Q;
class J {
  constructor(e = !1) {
    (this.detached = e),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Q),
      !e && Q && (this.index = (Q.scopes || (Q.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const t = Q;
      try {
        return (Q = this), e();
      } finally {
        Q = t;
      }
    }
  }
  on() {
    Q = this;
  }
  off() {
    Q = this.parent;
  }
  stop(e) {
    if (this._active) {
      let t, n;
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
      for (t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
      if (!this.detached && this.parent && !e) {
        const e = this.parent.scopes.pop();
        e &&
          e !== this &&
          ((this.parent.scopes[this.index] = e), (e.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
const ee = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  te = (e) => (e.w & ie) > 0,
  ne = (e) => (e.n & ie) > 0,
  oe = new WeakMap();
let re = 0,
  ie = 1;
const se = 30;
let le;
const ae = Symbol(""),
  ce = Symbol("");
class ue {
  constructor(e, t = null, n) {
    (this.fn = e),
      (this.scheduler = t),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      (function (e, t = Q) {
        t && t.active && t.effects.push(e);
      })(this, n);
  }
  run() {
    if (!this.active) return this.fn();
    let e = le,
      t = de;
    for (; e; ) {
      if (e === this) return;
      e = e.parent;
    }
    try {
      return (
        (this.parent = le),
        (le = this),
        (de = !0),
        (ie = 1 << ++re),
        re <= se
          ? (({ deps: e }) => {
              if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= ie;
            })(this)
          : pe(this),
        this.fn()
      );
    } finally {
      re <= se &&
        ((e) => {
          const { deps: t } = e;
          if (t.length) {
            let n = 0;
            for (let o = 0; o < t.length; o++) {
              const r = t[o];
              te(r) && !ne(r) ? r.delete(e) : (t[n++] = r),
                (r.w &= ~ie),
                (r.n &= ~ie);
            }
            t.length = n;
          }
        })(this),
        (ie = 1 << --re),
        (le = this.parent),
        (de = t),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    le === this
      ? (this.deferStop = !0)
      : this.active &&
        (pe(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function pe(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let de = !0;
const fe = [];
function he() {
  fe.push(de), (de = !1);
}
function me() {
  const e = fe.pop();
  de = void 0 === e || e;
}
function ge(e, t, n) {
  if (de && le) {
    let t = oe.get(e);
    t || oe.set(e, (t = new Map()));
    let o = t.get(n);
    o || t.set(n, (o = ee())), ve(o);
  }
}
function ve(e, t) {
  let n = !1;
  re <= se ? ne(e) || ((e.n |= ie), (n = !te(e))) : (n = !e.has(le)),
    n && (e.add(le), le.deps.push(e));
}
function Ae(e, t, n, o, r, i) {
  const s = oe.get(e);
  if (!s) return;
  let l = [];
  if ("clear" === t) l = [...s.values()];
  else if ("length" === n && P(e)) {
    const e = Number(o);
    s.forEach((t, n) => {
      ("length" === n || n >= e) && l.push(t);
    });
  } else
    switch ((void 0 !== n && l.push(s.get(n)), t)) {
      case "add":
        P(e)
          ? F(n) && l.push(s.get("length"))
          : (l.push(s.get(ae)), U(e) && l.push(s.get(ce)));
        break;
      case "delete":
        P(e) || (l.push(s.get(ae)), U(e) && l.push(s.get(ce)));
        break;
      case "set":
        U(e) && l.push(s.get(ae));
    }
  if (1 === l.length) l[0] && ye(l[0]);
  else {
    const e = [];
    for (const t of l) t && e.push(...t);
    ye(ee(e));
  }
}
function ye(e, t) {
  const n = P(e) ? e : [...e];
  for (const o of n) o.computed && be(o);
  for (const o of n) o.computed || be(o);
}
function be(e, t) {
  (e !== le || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const we = n("__proto__,__v_isRef,__isVue"),
  xe = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => "arguments" !== e && "caller" !== e)
      .map((e) => Symbol[e])
      .filter(S)
  ),
  _e = Se(),
  Pe = Se(!1, !0),
  Ue = Se(!0),
  Ce = ke();
function ke() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...e) {
        const n = dt(this);
        for (let t = 0, r = this.length; t < r; t++) ge(n, 0, t + "");
        const o = n[t](...e);
        return -1 === o || !1 === o ? n[t](...e.map(dt)) : o;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...e) {
        he();
        const n = dt(this)[t].apply(this, e);
        return me(), n;
      };
    }),
    e
  );
}
function Ge(e) {
  const t = dt(this);
  return ge(t, 0, e), t.hasOwnProperty(e);
}
function Se(e = !1, t = !1) {
  return function (n, o, r) {
    if ("__v_isReactive" === o) return !e;
    if ("__v_isReadonly" === o) return e;
    if ("__v_isShallow" === o) return t;
    if ("__v_raw" === o && r === (e ? (t ? rt : ot) : t ? nt : tt).get(n))
      return n;
    const i = P(n);
    if (!e) {
      if (i && _(Ce, o)) return Reflect.get(Ce, o, r);
      if ("hasOwnProperty" === o) return Ge;
    }
    const s = Reflect.get(n, o, r);
    return (S(o) ? xe.has(o) : we(o))
      ? s
      : (e || ge(n, 0, o),
        t
          ? s
          : At(s)
          ? i && F(o)
            ? s
            : s.value
          : E(s)
          ? e
            ? st(s)
            : it(s)
          : s);
  };
}
function Ee(e = !1) {
  return function (t, n, o, r) {
    let i = t[n];
    if (ct(i) && At(i) && !At(o)) return !1;
    if (
      !e &&
      (ut(o) || ct(o) || ((i = dt(i)), (o = dt(o))), !P(t) && At(i) && !At(o))
    )
      return (i.value = o), !0;
    const s = P(t) && F(n) ? Number(n) < t.length : _(t, n),
      l = Reflect.set(t, n, o, r);
    return (
      t === dt(r) && (s ? q(o, i) && Ae(t, "set", n, o) : Ae(t, "add", n, o)), l
    );
  };
}
const Te = {
    get: _e,
    set: Ee(),
    deleteProperty: function (e, t) {
      const n = _(e, t);
      e[t];
      const o = Reflect.deleteProperty(e, t);
      return o && n && Ae(e, "delete", t, void 0), o;
    },
    has: function (e, t) {
      const n = Reflect.has(e, t);
      return (S(t) && xe.has(t)) || ge(e, 0, t), n;
    },
    ownKeys: function (e) {
      return ge(e, 0, P(e) ? "length" : ae), Reflect.ownKeys(e);
    },
  },
  Me = { get: Ue, set: (e, t) => !0, deleteProperty: (e, t) => !0 },
  Le = b({}, Te, { get: Pe, set: Ee(!0) }),
  Oe = (e) => e,
  $e = (e) => Reflect.getPrototypeOf(e);
function Fe(e, t, n = !1, o = !1) {
  const r = dt((e = e.__v_raw)),
    i = dt(t);
  n || (t !== i && ge(r, 0, t), ge(r, 0, i));
  const { has: s } = $e(r),
    l = o ? Oe : n ? mt : ht;
  return s.call(r, t)
    ? l(e.get(t))
    : s.call(r, i)
    ? l(e.get(i))
    : void (e !== r && e.get(t));
}
function Re(e, t = !1) {
  const n = this.__v_raw,
    o = dt(n),
    r = dt(e);
  return (
    t || (e !== r && ge(o, 0, e), ge(o, 0, r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  );
}
function Be(e, t = !1) {
  return (e = e.__v_raw), !t && ge(dt(e), 0, ae), Reflect.get(e, "size", e);
}
function je(e) {
  e = dt(e);
  const t = dt(this);
  return $e(t).has.call(t, e) || (t.add(e), Ae(t, "add", e, e)), this;
}
function Ie(e, t) {
  t = dt(t);
  const n = dt(this),
    { has: o, get: r } = $e(n);
  let i = o.call(n, e);
  i || ((e = dt(e)), (i = o.call(n, e)));
  const s = r.call(n, e);
  return (
    n.set(e, t), i ? q(t, s) && Ae(n, "set", e, t) : Ae(n, "add", e, t), this
  );
}
function De(e) {
  const t = dt(this),
    { has: n, get: o } = $e(t);
  let r = n.call(t, e);
  r || ((e = dt(e)), (r = n.call(t, e))), o && o.call(t, e);
  const i = t.delete(e);
  return r && Ae(t, "delete", e, void 0), i;
}
function Ne() {
  const e = dt(this),
    t = 0 !== e.size,
    n = e.clear();
  return t && Ae(e, "clear", void 0, void 0), n;
}
function Ve(e, t) {
  return function (n, o) {
    const r = this,
      i = r.__v_raw,
      s = dt(i),
      l = t ? Oe : e ? mt : ht;
    return !e && ge(s, 0, ae), i.forEach((e, t) => n.call(o, l(e), l(t), r));
  };
}
function He(e, t, n) {
  return function (...o) {
    const r = this.__v_raw,
      i = dt(r),
      s = U(i),
      l = "entries" === e || (e === Symbol.iterator && s),
      a = "keys" === e && s,
      c = r[e](...o),
      u = n ? Oe : t ? mt : ht;
    return (
      !t && ge(i, 0, a ? ce : ae),
      {
        next() {
          const { value: e, done: t } = c.next();
          return t
            ? { value: e, done: t }
            : { value: l ? [u(e[0]), u(e[1])] : u(e), done: t };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function qe(e) {
  return function (...t) {
    return "delete" !== e && this;
  };
}
function Xe() {
  const e = {
      get(e) {
        return Fe(this, e);
      },
      get size() {
        return Be(this);
      },
      has: Re,
      add: je,
      set: Ie,
      delete: De,
      clear: Ne,
      forEach: Ve(!1, !1),
    },
    t = {
      get(e) {
        return Fe(this, e, !1, !0);
      },
      get size() {
        return Be(this);
      },
      has: Re,
      add: je,
      set: Ie,
      delete: De,
      clear: Ne,
      forEach: Ve(!1, !0),
    },
    n = {
      get(e) {
        return Fe(this, e, !0);
      },
      get size() {
        return Be(this, !0);
      },
      has(e) {
        return Re.call(this, e, !0);
      },
      add: qe("add"),
      set: qe("set"),
      delete: qe("delete"),
      clear: qe("clear"),
      forEach: Ve(!0, !1),
    },
    o = {
      get(e) {
        return Fe(this, e, !0, !0);
      },
      get size() {
        return Be(this, !0);
      },
      has(e) {
        return Re.call(this, e, !0);
      },
      add: qe("add"),
      set: qe("set"),
      delete: qe("delete"),
      clear: qe("clear"),
      forEach: Ve(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      (e[r] = He(r, !1, !1)),
        (n[r] = He(r, !0, !1)),
        (t[r] = He(r, !1, !0)),
        (o[r] = He(r, !0, !0));
    }),
    [e, n, t, o]
  );
}
const [We, Ze, ze, Ke] = Xe();
function Ye(e, t) {
  const n = t ? (e ? Ke : ze) : e ? Ze : We;
  return (t, o, r) =>
    "__v_isReactive" === o
      ? !e
      : "__v_isReadonly" === o
      ? e
      : "__v_raw" === o
      ? t
      : Reflect.get(_(n, o) && o in t ? n : t, o, r);
}
const Qe = { get: Ye(!1, !1) },
  Je = { get: Ye(!1, !0) },
  et = { get: Ye(!0, !1) },
  tt = new WeakMap(),
  nt = new WeakMap(),
  ot = new WeakMap(),
  rt = new WeakMap();
function it(e) {
  return ct(e) ? e : lt(e, !1, Te, Qe, tt);
}
function st(e) {
  return lt(e, !0, Me, et, ot);
}
function lt(e, t, n, o, r) {
  if (!E(e)) return e;
  if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
  const i = r.get(e);
  if (i) return i;
  const s =
    (l = e).__v_skip || !Object.isExtensible(l)
      ? 0
      : (function (e) {
          switch (e) {
            case "Object":
            case "Array":
              return 1;
            case "Map":
            case "Set":
            case "WeakMap":
            case "WeakSet":
              return 2;
            default:
              return 0;
          }
        })(O(l));
  var l;
  if (0 === s) return e;
  const a = new Proxy(e, 2 === s ? o : n);
  return r.set(e, a), a;
}
function at(e) {
  return ct(e) ? at(e.__v_raw) : !(!e || !e.__v_isReactive);
}
function ct(e) {
  return !(!e || !e.__v_isReadonly);
}
function ut(e) {
  return !(!e || !e.__v_isShallow);
}
function pt(e) {
  return at(e) || ct(e);
}
function dt(e) {
  const t = e && e.__v_raw;
  return t ? dt(t) : e;
}
function ft(e) {
  return W(e, "__v_skip", !0), e;
}
const ht = (e) => (E(e) ? it(e) : e),
  mt = (e) => (E(e) ? st(e) : e);
function gt(e) {
  de && le && ve((e = dt(e)).dep || (e.dep = ee()));
}
function vt(e, t) {
  const n = (e = dt(e)).dep;
  n && ye(n);
}
function At(e) {
  return !(!e || !0 !== e.__v_isRef);
}
function yt(e) {
  return wt(e, !1);
}
function bt(e) {
  return wt(e, !0);
}
function wt(e, t) {
  return At(e) ? e : new xt(e, t);
}
class xt {
  constructor(e, t) {
    (this.__v_isShallow = t),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = t ? e : dt(e)),
      (this._value = t ? e : ht(e));
  }
  get value() {
    return gt(this), this._value;
  }
  set value(e) {
    const t = this.__v_isShallow || ut(e) || ct(e);
    (e = t ? e : dt(e)),
      q(e, this._rawValue) &&
        ((this._rawValue = e), (this._value = t ? e : ht(e)), vt(this));
  }
}
function _t(e) {
  return At(e) ? e.value : e;
}
const Pt = {
  get: (e, t, n) => _t(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return At(r) && !At(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, o);
  },
};
function Ut(e) {
  return at(e) ? e : new Proxy(e, Pt);
}
var Ct;
class kt {
  constructor(e, t, n, o) {
    (this._setter = t),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[Ct] = !1),
      (this._dirty = !0),
      (this.effect = new ue(e, () => {
        this._dirty || ((this._dirty = !0), vt(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !o),
      (this.__v_isReadonly = n);
  }
  get value() {
    const e = dt(this);
    return (
      gt(e),
      (!e._dirty && e._cacheable) ||
        ((e._dirty = !1), (e._value = e.effect.run())),
      e._value
    );
  }
  set value(e) {
    this._setter(e);
  }
}
function Gt(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (i) {
    Et(i, t, n);
  }
  return r;
}
function St(e, t, n, o) {
  if (k(e)) {
    const r = Gt(e, t, n, o);
    return (
      r &&
        T(r) &&
        r.catch((e) => {
          Et(e, t, n);
        }),
      r
    );
  }
  const r = [];
  for (let i = 0; i < e.length; i++) r.push(St(e[i], t, n, o));
  return r;
}
function Et(e, t, n, o = !0) {
  t && t.vnode;
  if (t) {
    let o = t.parent;
    const r = t.proxy,
      i = n;
    for (; o; ) {
      const t = o.ec;
      if (t)
        for (let n = 0; n < t.length; n++) if (!1 === t[n](e, r, i)) return;
      o = o.parent;
    }
    const s = t.appContext.config.errorHandler;
    if (s) return void Gt(s, null, 10, [e, r, i]);
  }
  !(function (e, t, n, o = !0) {
    console.error(e);
  })(e, 0, 0, o);
}
Ct = "__v_isReadonly";
let Tt = !1,
  Mt = !1;
const Lt = [];
let Ot = 0;
const $t = [];
let Ft = null,
  Rt = 0;
const Bt = Promise.resolve();
let jt = null;
function It(e) {
  const t = jt || Bt;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Dt(e) {
  (Lt.length && Lt.includes(e, Tt && e.allowRecurse ? Ot + 1 : Ot)) ||
    (null == e.id
      ? Lt.push(e)
      : Lt.splice(
          (function (e) {
            let t = Ot + 1,
              n = Lt.length;
            for (; t < n; ) {
              const o = (t + n) >>> 1;
              qt(Lt[o]) < e ? (t = o + 1) : (n = o);
            }
            return t;
          })(e.id),
          0,
          e
        ),
    Nt());
}
function Nt() {
  Tt || Mt || ((Mt = !0), (jt = Bt.then(Wt)));
}
function Vt(e, t = Tt ? Ot + 1 : 0) {
  for (; t < Lt.length; t++) {
    const e = Lt[t];
    e && e.pre && (Lt.splice(t, 1), t--, e());
  }
}
function Ht(e) {
  if ($t.length) {
    const e = [...new Set($t)];
    if ((($t.length = 0), Ft)) return void Ft.push(...e);
    for (Ft = e, Ft.sort((e, t) => qt(e) - qt(t)), Rt = 0; Rt < Ft.length; Rt++)
      Ft[Rt]();
    (Ft = null), (Rt = 0);
  }
}
const qt = (e) => (null == e.id ? 1 / 0 : e.id),
  Xt = (e, t) => {
    const n = qt(e) - qt(t);
    if (0 === n) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Wt(e) {
  (Mt = !1), (Tt = !0), Lt.sort(Xt);
  try {
    for (Ot = 0; Ot < Lt.length; Ot++) {
      const e = Lt[Ot];
      e && !1 !== e.active && Gt(e, null, 14);
    }
  } finally {
    (Ot = 0),
      (Lt.length = 0),
      Ht(),
      (Tt = !1),
      (jt = null),
      (Lt.length || $t.length) && Wt();
  }
}
function Zt(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || f;
  let r = n;
  const i = t.startsWith("update:"),
    s = i && t.slice(7);
  if (s && s in o) {
    const e = `${"modelValue" === s ? "model" : s}Modifiers`,
      { number: t, trim: i } = o[e] || f;
    i && (r = n.map((e) => (G(e) ? e.trim() : e))), t && (r = n.map(Z));
  }
  let l,
    a = o[(l = H(t))] || o[(l = H(I(t)))];
  !a && i && (a = o[(l = H(N(t)))]), a && St(a, e, 6, r);
  const c = o[l + "Once"];
  if (c) {
    if (e.emitted) {
      if (e.emitted[l]) return;
    } else e.emitted = {};
    (e.emitted[l] = !0), St(c, e, 6, r);
  }
}
function zt(e, t, n = !1) {
  const o = t.emitsCache,
    r = o.get(e);
  if (void 0 !== r) return r;
  const i = e.emits;
  let s = {},
    l = !1;
  if (!k(e)) {
    const o = (e) => {
      const n = zt(e, t, !0);
      n && ((l = !0), b(s, n));
    };
    !n && t.mixins.length && t.mixins.forEach(o),
      e.extends && o(e.extends),
      e.mixins && e.mixins.forEach(o);
  }
  return i || l
    ? (P(i) ? i.forEach((e) => (s[e] = null)) : b(s, i), E(e) && o.set(e, s), s)
    : (E(e) && o.set(e, null), null);
}
function Kt(e, t) {
  return (
    !(!e || !A(t)) &&
    ((t = t.slice(2).replace(/Once$/, "")),
    _(e, t[0].toLowerCase() + t.slice(1)) || _(e, N(t)) || _(e, t))
  );
}
let Yt = null,
  Qt = null;
function Jt(e) {
  const t = Yt;
  return (Yt = e), (Qt = (e && e.type.__scopeId) || null), t;
}
function en(e) {
  Qt = e;
}
function tn() {
  Qt = null;
}
function nn(e, t = Yt, n) {
  if (!t) return e;
  if (e._n) return e;
  const o = (...n) => {
    o._d && Ko(-1);
    const r = Jt(t);
    let i;
    try {
      i = e(...n);
    } finally {
      Jt(r), o._d && Ko(1);
    }
    return i;
  };
  return (o._n = !0), (o._c = !0), (o._d = !0), o;
}
function on(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: r,
    props: i,
    propsOptions: [s],
    slots: l,
    attrs: a,
    emit: c,
    render: u,
    renderCache: p,
    data: d,
    setupState: f,
    ctx: h,
    inheritAttrs: m,
  } = e;
  let g, v;
  const A = Jt(e);
  try {
    if (4 & n.shapeFlag) {
      const e = r || o;
      (g = ur(u.call(e, e, p, i, f, d, h))), (v = a);
    } else {
      const e = t;
      0,
        (g = ur(
          e.length > 1 ? e(i, { attrs: a, slots: l, emit: c }) : e(i, null)
        )),
        (v = t.props ? a : rn(a));
    }
  } catch (w) {
    (Xo.length = 0), Et(w, e, 1), (g = sr(Ho));
  }
  let b = g;
  if (v && !1 !== m) {
    const e = Object.keys(v),
      { shapeFlag: t } = b;
    e.length && 7 & t && (s && e.some(y) && (v = sn(v, s)), (b = lr(b, v)));
  }
  return (
    n.dirs && ((b = lr(b)), (b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (b.transition = n.transition),
    (g = b),
    Jt(A),
    g
  );
}
const rn = (e) => {
    let t;
    for (const n in e)
      ("class" === n || "style" === n || A(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  sn = (e, t) => {
    const n = {};
    for (const o in e) (y(o) && o.slice(9) in t) || (n[o] = e[o]);
    return n;
  };
function ln(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < o.length; r++) {
    const i = o[r];
    if (t[i] !== e[i] && !Kt(n, i)) return !0;
  }
  return !1;
}
const an = (e) => e.__isSuspense;
function cn(e, t) {
  if (gr) {
    let n = gr.provides;
    const o = gr.parent && gr.parent.provides;
    o === n && (n = gr.provides = Object.create(o)), (n[e] = t);
  } else;
}
function un(e, t, n = !1) {
  const o = gr || Yt;
  if (o) {
    const r =
      null == o.parent
        ? o.vnode.appContext && o.vnode.appContext.provides
        : o.parent.provides;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && k(t) ? t.call(o.proxy) : t;
  }
}
function pn(e, t) {
  return mn(e, null, t);
}
function dn(e, t) {
  return mn(e, null, { flush: "sync" });
}
const fn = {};
function hn(e, t, n) {
  return mn(e, t, n);
}
function mn(
  e,
  t,
  { immediate: n, deep: o, flush: r, onTrack: i, onTrigger: s } = f
) {
  const l = Q === (null == gr ? void 0 : gr.scope) ? gr : null;
  let a,
    c,
    u = !1,
    p = !1;
  if (
    (At(e)
      ? ((a = () => e.value), (u = ut(e)))
      : at(e)
      ? ((a = () => e), (o = !0))
      : P(e)
      ? ((p = !0),
        (u = e.some((e) => at(e) || ut(e))),
        (a = () =>
          e.map((e) =>
            At(e) ? e.value : at(e) ? An(e) : k(e) ? Gt(e, l, 2) : void 0
          )))
      : (a = k(e)
          ? t
            ? () => Gt(e, l, 2)
            : () => {
                if (!l || !l.isUnmounted) return c && c(), St(e, l, 3, [h]);
              }
          : m),
    t && o)
  ) {
    const e = a;
    a = () => An(e());
  }
  let d,
    h = (e) => {
      c = y.onStop = () => {
        Gt(e, l, 4);
      };
    };
  if (xr) {
    if (
      ((h = m),
      t ? n && St(t, l, 3, [a(), p ? [] : void 0, h]) : a(),
      "sync" !== r)
    )
      return m;
    {
      const e = Sr();
      d = e.__watcherHandles || (e.__watcherHandles = []);
    }
  }
  let g = p ? new Array(e.length).fill(fn) : fn;
  const v = () => {
    if (y.active)
      if (t) {
        const e = y.run();
        (o || u || (p ? e.some((e, t) => q(e, g[t])) : q(e, g))) &&
          (c && c(),
          St(t, l, 3, [e, g === fn ? void 0 : p && g[0] === fn ? [] : g, h]),
          (g = e));
      } else y.run();
  };
  let A;
  (v.allowRecurse = !!t),
    "sync" === r
      ? (A = v)
      : "post" === r
      ? (A = () => Ro(v, l && l.suspense))
      : ((v.pre = !0), l && (v.id = l.uid), (A = () => Dt(v)));
  const y = new ue(a, A);
  t
    ? n
      ? v()
      : (g = y.run())
    : "post" === r
    ? Ro(y.run.bind(y), l && l.suspense)
    : y.run();
  const b = () => {
    y.stop(), l && l.scope && w(l.scope.effects, y);
  };
  return d && d.push(b), b;
}
function gn(e, t, n) {
  const o = this.proxy,
    r = G(e) ? (e.includes(".") ? vn(o, e) : () => o[e]) : e.bind(o, o);
  let i;
  k(t) ? (i = t) : ((i = t.handler), (n = t));
  const s = gr;
  Ar(this);
  const l = mn(r, i.bind(o), n);
  return s ? Ar(s) : yr(), l;
}
function vn(e, t) {
  const n = t.split(".");
  return () => {
    let t = e;
    for (let e = 0; e < n.length && t; e++) t = t[n[e]];
    return t;
  };
}
function An(e, t) {
  if (!E(e) || e.__v_skip) return e;
  if ((t = t || new Set()).has(e)) return e;
  if ((t.add(e), At(e))) An(e.value, t);
  else if (P(e)) for (let n = 0; n < e.length; n++) An(e[n], t);
  else if (C(e) || U(e))
    e.forEach((e) => {
      An(e, t);
    });
  else if ($(e)) for (const n in e) An(e[n], t);
  return e;
}
const yn = [Function, Array],
  bn = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: yn,
      onEnter: yn,
      onAfterEnter: yn,
      onEnterCancelled: yn,
      onBeforeLeave: yn,
      onLeave: yn,
      onAfterLeave: yn,
      onLeaveCancelled: yn,
      onBeforeAppear: yn,
      onAppear: yn,
      onAfterAppear: yn,
      onAppearCancelled: yn,
    },
    setup(e, { slots: t }) {
      const n = vr(),
        o = (function () {
          const e = {
            isMounted: !1,
            isLeaving: !1,
            isUnmounting: !1,
            leavingVNodes: new Map(),
          };
          return (
            Rn(() => {
              e.isMounted = !0;
            }),
            In(() => {
              e.isUnmounting = !0;
            }),
            e
          );
        })();
      let r;
      return () => {
        const i = t.default && Cn(t.default(), !0);
        if (!i || !i.length) return;
        let s = i[0];
        if (i.length > 1)
          for (const e of i)
            if (e.type !== Ho) {
              s = e;
              break;
            }
        const l = dt(e),
          { mode: a } = l;
        if (o.isLeaving) return _n(s);
        const c = Pn(s);
        if (!c) return _n(s);
        const u = xn(c, l, o, n);
        Un(c, u);
        const p = n.subTree,
          d = p && Pn(p);
        let f = !1;
        const { getTransitionKey: h } = c.type;
        if (h) {
          const e = h();
          void 0 === r ? (r = e) : e !== r && ((r = e), (f = !0));
        }
        if (d && d.type !== Ho && (!tr(c, d) || f)) {
          const e = xn(d, l, o, n);
          if ((Un(d, e), "out-in" === a))
            return (
              (o.isLeaving = !0),
              (e.afterLeave = () => {
                (o.isLeaving = !1), !1 !== n.update.active && n.update();
              }),
              _n(s)
            );
          "in-out" === a &&
            c.type !== Ho &&
            (e.delayLeave = (e, t, n) => {
              (wn(o, d)[String(d.key)] = d),
                (e._leaveCb = () => {
                  t(), (e._leaveCb = void 0), delete u.delayedLeave;
                }),
                (u.delayedLeave = n);
            });
        }
        return s;
      };
    },
  };
function wn(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || ((o = Object.create(null)), n.set(t.type, o)), o;
}
function xn(e, t, n, o) {
  const {
      appear: r,
      mode: i,
      persisted: s = !1,
      onBeforeEnter: l,
      onEnter: a,
      onAfterEnter: c,
      onEnterCancelled: u,
      onBeforeLeave: p,
      onLeave: d,
      onAfterLeave: f,
      onLeaveCancelled: h,
      onBeforeAppear: m,
      onAppear: g,
      onAfterAppear: v,
      onAppearCancelled: A,
    } = t,
    y = String(e.key),
    b = wn(n, e),
    w = (e, t) => {
      e && St(e, o, 9, t);
    },
    x = (e, t) => {
      const n = t[1];
      w(e, t),
        P(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n();
    },
    _ = {
      mode: i,
      persisted: s,
      beforeEnter(t) {
        let o = l;
        if (!n.isMounted) {
          if (!r) return;
          o = m || l;
        }
        t._leaveCb && t._leaveCb(!0);
        const i = b[y];
        i && tr(e, i) && i.el._leaveCb && i.el._leaveCb(), w(o, [t]);
      },
      enter(e) {
        let t = a,
          o = c,
          i = u;
        if (!n.isMounted) {
          if (!r) return;
          (t = g || a), (o = v || c), (i = A || u);
        }
        let s = !1;
        const l = (e._enterCb = (t) => {
          s ||
            ((s = !0),
            w(t ? i : o, [e]),
            _.delayedLeave && _.delayedLeave(),
            (e._enterCb = void 0));
        });
        t ? x(t, [e, l]) : l();
      },
      leave(t, o) {
        const r = String(e.key);
        if ((t._enterCb && t._enterCb(!0), n.isUnmounting)) return o();
        w(p, [t]);
        let i = !1;
        const s = (t._leaveCb = (n) => {
          i ||
            ((i = !0),
            o(),
            w(n ? h : f, [t]),
            (t._leaveCb = void 0),
            b[r] === e && delete b[r]);
        });
        (b[r] = e), d ? x(d, [t, s]) : s();
      },
      clone: (e) => xn(e, t, n, o),
    };
  return _;
}
function _n(e) {
  if (Sn(e)) return ((e = lr(e)).children = null), e;
}
function Pn(e) {
  return Sn(e) ? (e.children ? e.children[0] : void 0) : e;
}
function Un(e, t) {
  6 & e.shapeFlag && e.component
    ? Un(e.component.subTree, t)
    : 128 & e.shapeFlag
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Cn(e, t = !1, n) {
  let o = [],
    r = 0;
  for (let i = 0; i < e.length; i++) {
    let s = e[i];
    const l = null == n ? s.key : String(n) + String(null != s.key ? s.key : i);
    s.type === No
      ? (128 & s.patchFlag && r++, (o = o.concat(Cn(s.children, t, l))))
      : (t || s.type !== Ho) && o.push(null != l ? lr(s, { key: l }) : s);
  }
  if (r > 1) for (let i = 0; i < o.length; i++) o[i].patchFlag = -2;
  return o;
}
function kn(e) {
  return k(e) ? { setup: e, name: e.name } : e;
}
const Gn = (e) => !!e.type.__asyncLoader,
  Sn = (e) => e.type.__isKeepAlive;
function En(e, t) {
  Mn(e, "a", t);
}
function Tn(e, t) {
  Mn(e, "da", t);
}
function Mn(e, t, n = gr) {
  const o =
    e.__wdc ||
    (e.__wdc = () => {
      let t = n;
      for (; t; ) {
        if (t.isDeactivated) return;
        t = t.parent;
      }
      return e();
    });
  if ((On(t, o, n), n)) {
    let e = n.parent;
    for (; e && e.parent; )
      Sn(e.parent.vnode) && Ln(o, t, n, e), (e = e.parent);
  }
}
function Ln(e, t, n, o) {
  const r = On(t, e, o, !0);
  Dn(() => {
    w(o[t], r);
  }, n);
}
function On(e, t, n = gr, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          if (n.isUnmounted) return;
          he(), Ar(n);
          const r = St(t, n, e, o);
          return yr(), me(), r;
        });
    return o ? r.unshift(i) : r.push(i), i;
  }
}
const $n =
    (e) =>
    (t, n = gr) =>
      (!xr || "sp" === e) && On(e, (...e) => t(...e), n),
  Fn = $n("bm"),
  Rn = $n("m"),
  Bn = $n("bu"),
  jn = $n("u"),
  In = $n("bum"),
  Dn = $n("um"),
  Nn = $n("sp"),
  Vn = $n("rtg"),
  Hn = $n("rtc");
function qn(e, t = gr) {
  On("ec", e, t);
}
function Xn(e, t, n, o) {
  const r = e.dirs,
    i = t && t.dirs;
  for (let s = 0; s < r.length; s++) {
    const l = r[s];
    i && (l.oldValue = i[s].value);
    let a = l.dir[o];
    a && (he(), St(a, n, 8, [e.el, l, e, t]), me());
  }
}
const Wn = "components";
function Zn(e, t) {
  return Yn(Wn, e, !0, t) || e;
}
const zn = Symbol();
function Kn(e) {
  return G(e) ? Yn(Wn, e, !1) || e : e || zn;
}
function Yn(e, t, n = !0, o = !1) {
  const r = Yt || gr;
  if (r) {
    const n = r.type;
    if (e === Wn) {
      const e = (function (e, t = !0) {
        return k(e) ? e.displayName || e.name : e.name || (t && e.__name);
      })(n, !1);
      if (e && (e === t || e === I(t) || e === V(I(t)))) return n;
    }
    const i = Qn(r[e] || n[e], t) || Qn(r.appContext[e], t);
    return !i && o ? n : i;
  }
}
function Qn(e, t) {
  return e && (e[t] || e[I(t)] || e[V(I(t))]);
}
function Jn(e, t, n, o) {
  let r;
  const i = n && n[o];
  if (P(e) || G(e)) {
    r = new Array(e.length);
    for (let n = 0, o = e.length; n < o; n++)
      r[n] = t(e[n], n, void 0, i && i[n]);
  } else if ("number" == typeof e) {
    r = new Array(e);
    for (let n = 0; n < e; n++) r[n] = t(n + 1, n, void 0, i && i[n]);
  } else if (E(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (e, n) => t(e, n, void 0, i && i[n]));
    else {
      const n = Object.keys(e);
      r = new Array(n.length);
      for (let o = 0, s = n.length; o < s; o++) {
        const s = n[o];
        r[o] = t(e[s], s, o, i && i[o]);
      }
    }
  else r = [];
  return n && (n[o] = r), r;
}
function eo(e, t, n = {}, o, r) {
  if (Yt.isCE || (Yt.parent && Gn(Yt.parent) && Yt.parent.isCE))
    return "default" !== t && (n.name = t), sr("slot", n, o && o());
  let i = e[t];
  i && i._c && (i._d = !1), Zo();
  const s = i && to(i(n)),
    l = Jo(
      No,
      { key: n.key || (s && s.key) || `_${t}` },
      s || (o ? o() : []),
      s && 1 === e._ ? 64 : -2
    );
  return (
    !r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
    i && i._c && (i._d = !0),
    l
  );
}
function to(e) {
  return e.some(
    (e) => !er(e) || (e.type !== Ho && !(e.type === No && !to(e.children)))
  )
    ? e
    : null;
}
const no = (e) => (e ? (br(e) ? Ur(e) || e.proxy : no(e.parent)) : null),
  oo = b(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => no(e.parent),
    $root: (e) => no(e.root),
    $emit: (e) => e.emit,
    $options: (e) => uo(e),
    $forceUpdate: (e) => e.f || (e.f = () => Dt(e.update)),
    $nextTick: (e) => e.n || (e.n = It.bind(e.proxy)),
    $watch: (e) => gn.bind(e),
  }),
  ro = (e, t) => e !== f && !e.__isScriptSetup && _(e, t),
  io = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: o,
        data: r,
        props: i,
        accessCache: s,
        type: l,
        appContext: a,
      } = e;
      let c;
      if ("$" !== t[0]) {
        const l = s[t];
        if (void 0 !== l)
          switch (l) {
            case 1:
              return o[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (ro(o, t)) return (s[t] = 1), o[t];
          if (r !== f && _(r, t)) return (s[t] = 2), r[t];
          if ((c = e.propsOptions[0]) && _(c, t)) return (s[t] = 3), i[t];
          if (n !== f && _(n, t)) return (s[t] = 4), n[t];
          so && (s[t] = 0);
        }
      }
      const u = oo[t];
      let p, d;
      return u
        ? ("$attrs" === t && ge(e, 0, t), u(e))
        : (p = l.__cssModules) && (p = p[t])
        ? p
        : n !== f && _(n, t)
        ? ((s[t] = 4), n[t])
        : ((d = a.config.globalProperties), _(d, t) ? d[t] : void 0);
    },
    set({ _: e }, t, n) {
      const { data: o, setupState: r, ctx: i } = e;
      return ro(r, t)
        ? ((r[t] = n), !0)
        : o !== f && _(o, t)
        ? ((o[t] = n), !0)
        : !_(e.props, t) &&
          ("$" !== t[0] || !(t.slice(1) in e)) &&
          ((i[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: o,
          appContext: r,
          propsOptions: i,
        },
      },
      s
    ) {
      let l;
      return (
        !!n[s] ||
        (e !== f && _(e, s)) ||
        ro(t, s) ||
        ((l = i[0]) && _(l, s)) ||
        _(o, s) ||
        _(oo, s) ||
        _(r.config.globalProperties, s)
      );
    },
    defineProperty(e, t, n) {
      return (
        null != n.get
          ? (e._.accessCache[t] = 0)
          : _(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
let so = !0;
function lo(e) {
  const t = uo(e),
    n = e.proxy,
    o = e.ctx;
  (so = !1), t.beforeCreate && ao(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: i,
    methods: s,
    watch: l,
    provide: a,
    inject: c,
    created: u,
    beforeMount: p,
    mounted: d,
    beforeUpdate: f,
    updated: h,
    activated: g,
    deactivated: v,
    beforeDestroy: A,
    beforeUnmount: y,
    destroyed: b,
    unmounted: w,
    render: x,
    renderTracked: _,
    renderTriggered: U,
    errorCaptured: C,
    serverPrefetch: G,
    expose: S,
    inheritAttrs: T,
    components: M,
    directives: L,
    filters: O,
  } = t;
  if (
    (c &&
      (function (e, t, n = m, o = !1) {
        P(e) && (e = mo(e));
        for (const r in e) {
          const n = e[r];
          let i;
          (i = E(n)
            ? "default" in n
              ? un(n.from || r, n.default, !0)
              : un(n.from || r)
            : un(n)),
            At(i) && o
              ? Object.defineProperty(t, r, {
                  enumerable: !0,
                  configurable: !0,
                  get: () => i.value,
                  set: (e) => (i.value = e),
                })
              : (t[r] = i);
        }
      })(c, o, null, e.appContext.config.unwrapInjectedRef),
    s)
  )
    for (const m in s) {
      const e = s[m];
      k(e) && (o[m] = e.bind(n));
    }
  if (r) {
    const t = r.call(n, n);
    E(t) && (e.data = it(t));
  }
  if (((so = !0), i))
    for (const P in i) {
      const e = i[P],
        t = k(e) ? e.bind(n, n) : k(e.get) ? e.get.bind(n, n) : m,
        r = !k(e) && k(e.set) ? e.set.bind(n) : m,
        s = Cr({ get: t, set: r });
      Object.defineProperty(o, P, {
        enumerable: !0,
        configurable: !0,
        get: () => s.value,
        set: (e) => (s.value = e),
      });
    }
  if (l) for (const m in l) co(l[m], o, n, m);
  if (a) {
    const e = k(a) ? a.call(n) : a;
    Reflect.ownKeys(e).forEach((t) => {
      cn(t, e[t]);
    });
  }
  function $(e, t) {
    P(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
  }
  if (
    (u && ao(u, e, "c"),
    $(Fn, p),
    $(Rn, d),
    $(Bn, f),
    $(jn, h),
    $(En, g),
    $(Tn, v),
    $(qn, C),
    $(Hn, _),
    $(Vn, U),
    $(In, y),
    $(Dn, w),
    $(Nn, G),
    P(S))
  )
    if (S.length) {
      const t = e.exposed || (e.exposed = {});
      S.forEach((e) => {
        Object.defineProperty(t, e, {
          get: () => n[e],
          set: (t) => (n[e] = t),
        });
      });
    } else e.exposed || (e.exposed = {});
  x && e.render === m && (e.render = x),
    null != T && (e.inheritAttrs = T),
    M && (e.components = M),
    L && (e.directives = L);
}
function ao(e, t, n) {
  St(P(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function co(e, t, n, o) {
  const r = o.includes(".") ? vn(n, o) : () => n[o];
  if (G(e)) {
    const n = t[e];
    k(n) && hn(r, n);
  } else if (k(e)) hn(r, e.bind(n));
  else if (E(e))
    if (P(e)) e.forEach((e) => co(e, t, n, o));
    else {
      const o = k(e.handler) ? e.handler.bind(n) : t[e.handler];
      k(o) && hn(r, o, e);
    }
}
function uo(e) {
  const t = e.type,
    { mixins: n, extends: o } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: s },
    } = e.appContext,
    l = i.get(t);
  let a;
  return (
    l
      ? (a = l)
      : r.length || n || o
      ? ((a = {}), r.length && r.forEach((e) => po(a, e, s, !0)), po(a, t, s))
      : (a = t),
    E(t) && i.set(t, a),
    a
  );
}
function po(e, t, n, o = !1) {
  const { mixins: r, extends: i } = t;
  i && po(e, i, n, !0), r && r.forEach((t) => po(e, t, n, !0));
  for (const s in t)
    if (o && "expose" === s);
    else {
      const o = fo[s] || (n && n[s]);
      e[s] = o ? o(e[s], t[s]) : t[s];
    }
  return e;
}
const fo = {
  data: ho,
  props: vo,
  emits: vo,
  methods: vo,
  computed: vo,
  beforeCreate: go,
  created: go,
  beforeMount: go,
  mounted: go,
  beforeUpdate: go,
  updated: go,
  beforeDestroy: go,
  beforeUnmount: go,
  destroyed: go,
  unmounted: go,
  activated: go,
  deactivated: go,
  errorCaptured: go,
  serverPrefetch: go,
  components: vo,
  directives: vo,
  watch: function (e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = b(Object.create(null), e);
    for (const o in t) n[o] = go(e[o], t[o]);
    return n;
  },
  provide: ho,
  inject: function (e, t) {
    return vo(mo(e), mo(t));
  },
};
function ho(e, t) {
  return t
    ? e
      ? function () {
          return b(
            k(e) ? e.call(this, this) : e,
            k(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function mo(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function go(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function vo(e, t) {
  return e ? b(b(Object.create(null), e), t) : t;
}
function Ao(e, t, n, o = !1) {
  const r = {},
    i = {};
  W(i, nr, 1), (e.propsDefaults = Object.create(null)), yo(e, t, r, i);
  for (const s in e.propsOptions[0]) s in r || (r[s] = void 0);
  n
    ? (e.props = o ? r : lt(r, !1, Le, Je, nt))
    : e.type.props
    ? (e.props = r)
    : (e.props = i),
    (e.attrs = i);
}
function yo(e, t, n, o) {
  const [r, i] = e.propsOptions;
  let s,
    l = !1;
  if (t)
    for (let a in t) {
      if (R(a)) continue;
      const c = t[a];
      let u;
      r && _(r, (u = I(a)))
        ? i && i.includes(u)
          ? ((s || (s = {}))[u] = c)
          : (n[u] = c)
        : Kt(e.emitsOptions, a) ||
          (a in o && c === o[a]) ||
          ((o[a] = c), (l = !0));
    }
  if (i) {
    const t = dt(n),
      o = s || f;
    for (let s = 0; s < i.length; s++) {
      const l = i[s];
      n[l] = bo(r, t, l, o[l], e, !_(o, l));
    }
  }
  return l;
}
function bo(e, t, n, o, r, i) {
  const s = e[n];
  if (null != s) {
    const e = _(s, "default");
    if (e && void 0 === o) {
      const e = s.default;
      if (s.type !== Function && k(e)) {
        const { propsDefaults: i } = r;
        n in i ? (o = i[n]) : (Ar(r), (o = i[n] = e.call(null, t)), yr());
      } else o = e;
    }
    s[0] &&
      (i && !e ? (o = !1) : !s[1] || ("" !== o && o !== N(n)) || (o = !0));
  }
  return o;
}
function wo(e, t, n = !1) {
  const o = t.propsCache,
    r = o.get(e);
  if (r) return r;
  const i = e.props,
    s = {},
    l = [];
  let a = !1;
  if (!k(e)) {
    const o = (e) => {
      a = !0;
      const [n, o] = wo(e, t, !0);
      b(s, n), o && l.push(...o);
    };
    !n && t.mixins.length && t.mixins.forEach(o),
      e.extends && o(e.extends),
      e.mixins && e.mixins.forEach(o);
  }
  if (!i && !a) return E(e) && o.set(e, h), h;
  if (P(i))
    for (let u = 0; u < i.length; u++) {
      const e = I(i[u]);
      xo(e) && (s[e] = f);
    }
  else if (i)
    for (const u in i) {
      const e = I(u);
      if (xo(e)) {
        const t = i[u],
          n = (s[e] = P(t) || k(t) ? { type: t } : Object.assign({}, t));
        if (n) {
          const t = Uo(Boolean, n.type),
            o = Uo(String, n.type);
          (n[0] = t > -1),
            (n[1] = o < 0 || t < o),
            (t > -1 || _(n, "default")) && l.push(e);
        }
      }
    }
  const c = [s, l];
  return E(e) && o.set(e, c), c;
}
function xo(e) {
  return "$" !== e[0];
}
function _o(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : null === e ? "null" : "";
}
function Po(e, t) {
  return _o(e) === _o(t);
}
function Uo(e, t) {
  return P(t) ? t.findIndex((t) => Po(t, e)) : k(t) && Po(t, e) ? 0 : -1;
}
const Co = (e) => "_" === e[0] || "$stable" === e,
  ko = (e) => (P(e) ? e.map(ur) : [ur(e)]),
  Go = (e, t, n) => {
    if (t._n) return t;
    const o = nn((...e) => ko(t(...e)), n);
    return (o._c = !1), o;
  },
  So = (e, t, n) => {
    const o = e._ctx;
    for (const r in e) {
      if (Co(r)) continue;
      const n = e[r];
      if (k(n)) t[r] = Go(0, n, o);
      else if (null != n) {
        const e = ko(n);
        t[r] = () => e;
      }
    }
  },
  Eo = (e, t) => {
    const n = ko(t);
    e.slots.default = () => n;
  },
  To = (e, t) => {
    if (32 & e.vnode.shapeFlag) {
      const n = t._;
      n ? ((e.slots = dt(t)), W(t, "_", n)) : So(t, (e.slots = {}));
    } else (e.slots = {}), t && Eo(e, t);
    W(e.slots, nr, 1);
  },
  Mo = (e, t, n) => {
    const { vnode: o, slots: r } = e;
    let i = !0,
      s = f;
    if (32 & o.shapeFlag) {
      const e = t._;
      e
        ? n && 1 === e
          ? (i = !1)
          : (b(r, t), n || 1 !== e || delete r._)
        : ((i = !t.$stable), So(t, r)),
        (s = t);
    } else t && (Eo(e, t), (s = { default: 1 }));
    if (i) for (const l in r) Co(l) || l in s || delete r[l];
  };
function Lo() {
  return {
    app: null,
    config: {
      isNativeTag: g,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Oo = 0;
function $o(e, t) {
  return function (n, o = null) {
    k(n) || (n = Object.assign({}, n)), null == o || E(o) || (o = null);
    const r = Lo(),
      i = new Set();
    let s = !1;
    const l = (r.app = {
      _uid: Oo++,
      _component: n,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: Er,
      get config() {
        return r.config;
      },
      set config(e) {},
      use: (e, ...t) => (
        i.has(e) ||
          (e && k(e.install)
            ? (i.add(e), e.install(l, ...t))
            : k(e) && (i.add(e), e(l, ...t))),
        l
      ),
      mixin: (e) => (r.mixins.includes(e) || r.mixins.push(e), l),
      component: (e, t) => (t ? ((r.components[e] = t), l) : r.components[e]),
      directive: (e, t) => (t ? ((r.directives[e] = t), l) : r.directives[e]),
      mount(i, a, c) {
        if (!s) {
          const u = sr(n, o);
          return (
            (u.appContext = r),
            a && t ? t(u, i) : e(u, i, c),
            (s = !0),
            (l._container = i),
            (i.__vue_app__ = l),
            Ur(u.component) || u.component.proxy
          );
        }
      },
      unmount() {
        s && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide: (e, t) => ((r.provides[e] = t), l),
    });
    return l;
  };
}
function Fo(e, t, n, o, r = !1) {
  if (P(e))
    return void e.forEach((e, i) => Fo(e, t && (P(t) ? t[i] : t), n, o, r));
  if (Gn(o) && !r) return;
  const i = 4 & o.shapeFlag ? Ur(o.component) || o.component.proxy : o.el,
    s = r ? null : i,
    { i: l, r: a } = e,
    c = t && t.r,
    u = l.refs === f ? (l.refs = {}) : l.refs,
    p = l.setupState;
  if (
    (null != c &&
      c !== a &&
      (G(c)
        ? ((u[c] = null), _(p, c) && (p[c] = null))
        : At(c) && (c.value = null)),
    k(a))
  )
    Gt(a, l, 12, [s, u]);
  else {
    const t = G(a),
      o = At(a);
    if (t || o) {
      const l = () => {
        if (e.f) {
          const n = t ? (_(p, a) ? p[a] : u[a]) : a.value;
          r
            ? P(n) && w(n, i)
            : P(n)
            ? n.includes(i) || n.push(i)
            : t
            ? ((u[a] = [i]), _(p, a) && (p[a] = u[a]))
            : ((a.value = [i]), e.k && (u[e.k] = a.value));
        } else
          t
            ? ((u[a] = s), _(p, a) && (p[a] = s))
            : o && ((a.value = s), e.k && (u[e.k] = s));
      };
      s ? ((l.id = -1), Ro(l, n)) : l();
    }
  }
}
const Ro = function (e, t) {
  var n;
  t && t.pendingBranch
    ? P(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : (P((n = e))
        ? $t.push(...n)
        : (Ft && Ft.includes(n, n.allowRecurse ? Rt + 1 : Rt)) || $t.push(n),
      Nt());
};
function Bo(e) {
  return (function (e, t) {
    Y().__VUE__ = !0;
    const {
        insert: n,
        remove: o,
        patchProp: r,
        createElement: i,
        createText: s,
        createComment: l,
        setText: a,
        setElementText: c,
        parentNode: u,
        nextSibling: p,
        setScopeId: d = m,
        insertStaticContent: g,
      } = e,
      v = (
        e,
        t,
        n,
        o = null,
        r = null,
        i = null,
        s = !1,
        l = null,
        a = !!t.dynamicChildren
      ) => {
        if (e === t) return;
        e && !tr(e, t) && ((o = Q(e)), q(e, r, i, !0), (e = null)),
          -2 === t.patchFlag && ((a = !1), (t.dynamicChildren = null));
        const { type: c, ref: u, shapeFlag: p } = t;
        switch (c) {
          case Vo:
            A(e, t, n, o);
            break;
          case Ho:
            y(e, t, n, o);
            break;
          case qo:
            null == e && b(t, n, o, s);
            break;
          case No:
            M(e, t, n, o, r, i, s, l, a);
            break;
          default:
            1 & p
              ? P(e, t, n, o, r, i, s, l, a)
              : 6 & p
              ? L(e, t, n, o, r, i, s, l, a)
              : (64 & p || 128 & p) && c.process(e, t, n, o, r, i, s, l, a, te);
        }
        null != u && r && Fo(u, e && e.ref, i, t || e, !t);
      },
      A = (e, t, o, r) => {
        if (null == e) n((t.el = s(t.children)), o, r);
        else {
          const n = (t.el = e.el);
          t.children !== e.children && a(n, t.children);
        }
      },
      y = (e, t, o, r) => {
        null == e ? n((t.el = l(t.children || "")), o, r) : (t.el = e.el);
      },
      b = (e, t, n, o) => {
        [e.el, e.anchor] = g(e.children, t, n, o, e.el, e.anchor);
      },
      w = ({ el: e, anchor: t }, o, r) => {
        let i;
        for (; e && e !== t; ) (i = p(e)), n(e, o, r), (e = i);
        n(t, o, r);
      },
      x = ({ el: e, anchor: t }) => {
        let n;
        for (; e && e !== t; ) (n = p(e)), o(e), (e = n);
        o(t);
      },
      P = (e, t, n, o, r, i, s, l, a) => {
        (s = s || "svg" === t.type),
          null == e ? U(t, n, o, r, i, s, l, a) : G(e, t, r, i, s, l, a);
      },
      U = (e, t, o, s, l, a, u, p) => {
        let d, f;
        const { type: h, props: m, shapeFlag: g, transition: v, dirs: A } = e;
        if (
          ((d = e.el = i(e.type, a, m && m.is, m)),
          8 & g
            ? c(d, e.children)
            : 16 & g &&
              k(e.children, d, null, s, l, a && "foreignObject" !== h, u, p),
          A && Xn(e, null, s, "created"),
          C(d, e, e.scopeId, u, s),
          m)
        ) {
          for (const t in m)
            "value" === t ||
              R(t) ||
              r(d, t, null, m[t], a, e.children, s, l, K);
          "value" in m && r(d, "value", null, m.value),
            (f = m.onVnodeBeforeMount) && fr(f, s, e);
        }
        A && Xn(e, null, s, "beforeMount");
        const y = (!l || (l && !l.pendingBranch)) && v && !v.persisted;
        y && v.beforeEnter(d),
          n(d, t, o),
          ((f = m && m.onVnodeMounted) || y || A) &&
            Ro(() => {
              f && fr(f, s, e), y && v.enter(d), A && Xn(e, null, s, "mounted");
            }, l);
      },
      C = (e, t, n, o, r) => {
        if ((n && d(e, n), o)) for (let i = 0; i < o.length; i++) d(e, o[i]);
        if (r) {
          if (t === r.subTree) {
            const t = r.vnode;
            C(e, t, t.scopeId, t.slotScopeIds, r.parent);
          }
        }
      },
      k = (e, t, n, o, r, i, s, l, a = 0) => {
        for (let c = a; c < e.length; c++) {
          const a = (e[c] = l ? pr(e[c]) : ur(e[c]));
          v(null, a, t, n, o, r, i, s, l);
        }
      },
      G = (e, t, n, o, i, s, l) => {
        const a = (t.el = e.el);
        let { patchFlag: u, dynamicChildren: p, dirs: d } = t;
        u |= 16 & e.patchFlag;
        const h = e.props || f,
          m = t.props || f;
        let g;
        n && jo(n, !1),
          (g = m.onVnodeBeforeUpdate) && fr(g, n, t, e),
          d && Xn(t, e, n, "beforeUpdate"),
          n && jo(n, !0);
        const v = i && "foreignObject" !== t.type;
        if (
          (p
            ? S(e.dynamicChildren, p, a, n, o, v, s)
            : l || j(e, t, a, null, n, o, v, s, !1),
          u > 0)
        ) {
          if (16 & u) E(a, t, h, m, n, o, i);
          else if (
            (2 & u && h.class !== m.class && r(a, "class", null, m.class, i),
            4 & u && r(a, "style", h.style, m.style, i),
            8 & u)
          ) {
            const s = t.dynamicProps;
            for (let t = 0; t < s.length; t++) {
              const l = s[t],
                c = h[l],
                u = m[l];
              (u === c && "value" !== l) ||
                r(a, l, c, u, i, e.children, n, o, K);
            }
          }
          1 & u && e.children !== t.children && c(a, t.children);
        } else l || null != p || E(a, t, h, m, n, o, i);
        ((g = m.onVnodeUpdated) || d) &&
          Ro(() => {
            g && fr(g, n, t, e), d && Xn(t, e, n, "updated");
          }, o);
      },
      S = (e, t, n, o, r, i, s) => {
        for (let l = 0; l < t.length; l++) {
          const a = e[l],
            c = t[l],
            p =
              a.el && (a.type === No || !tr(a, c) || 70 & a.shapeFlag)
                ? u(a.el)
                : n;
          v(a, c, p, null, o, r, i, s, !0);
        }
      },
      E = (e, t, n, o, i, s, l) => {
        if (n !== o) {
          if (n !== f)
            for (const a in n)
              R(a) || a in o || r(e, a, n[a], null, l, t.children, i, s, K);
          for (const a in o) {
            if (R(a)) continue;
            const c = o[a],
              u = n[a];
            c !== u && "value" !== a && r(e, a, u, c, l, t.children, i, s, K);
          }
          "value" in o && r(e, "value", n.value, o.value);
        }
      },
      M = (e, t, o, r, i, l, a, c, u) => {
        const p = (t.el = e ? e.el : s("")),
          d = (t.anchor = e ? e.anchor : s(""));
        let { patchFlag: f, dynamicChildren: h, slotScopeIds: m } = t;
        m && (c = c ? c.concat(m) : m),
          null == e
            ? (n(p, o, r), n(d, o, r), k(t.children, o, d, i, l, a, c, u))
            : f > 0 && 64 & f && h && e.dynamicChildren
            ? (S(e.dynamicChildren, h, o, i, l, a, c),
              (null != t.key || (i && t === i.subTree)) && Io(e, t, !0))
            : j(e, t, o, d, i, l, a, c, u);
      },
      L = (e, t, n, o, r, i, s, l, a) => {
        (t.slotScopeIds = l),
          null == e
            ? 512 & t.shapeFlag
              ? r.ctx.activate(t, n, o, s, a)
              : O(t, n, o, r, i, s, a)
            : $(e, t, a);
      },
      O = (e, t, n, o, r, i, s) => {
        const l = (e.component = (function (e, t, n) {
          const o = e.type,
            r = (t ? t.appContext : e.appContext) || hr,
            i = {
              uid: mr++,
              vnode: e,
              type: o,
              parent: t,
              appContext: r,
              root: null,
              next: null,
              subTree: null,
              effect: null,
              update: null,
              scope: new J(!0),
              render: null,
              proxy: null,
              exposed: null,
              exposeProxy: null,
              withProxy: null,
              provides: t ? t.provides : Object.create(r.provides),
              accessCache: null,
              renderCache: [],
              components: null,
              directives: null,
              propsOptions: wo(o, r),
              emitsOptions: zt(o, r),
              emit: null,
              emitted: null,
              propsDefaults: f,
              inheritAttrs: o.inheritAttrs,
              ctx: f,
              data: f,
              props: f,
              attrs: f,
              slots: f,
              refs: f,
              setupState: f,
              setupContext: null,
              suspense: n,
              suspenseId: n ? n.pendingId : 0,
              asyncDep: null,
              asyncResolved: !1,
              isMounted: !1,
              isUnmounted: !1,
              isDeactivated: !1,
              bc: null,
              c: null,
              bm: null,
              m: null,
              bu: null,
              u: null,
              um: null,
              bum: null,
              da: null,
              a: null,
              rtg: null,
              rtc: null,
              ec: null,
              sp: null,
            };
          (i.ctx = { _: i }),
            (i.root = t ? t.root : i),
            (i.emit = Zt.bind(null, i)),
            e.ce && e.ce(i);
          return i;
        })(e, o, r));
        if (
          (Sn(e) && (l.ctx.renderer = te),
          (function (e, t = !1) {
            xr = t;
            const { props: n, children: o } = e.vnode,
              r = br(e);
            Ao(e, n, r, t), To(e, o);
            const i = r
              ? (function (e, t) {
                  const n = e.type;
                  (e.accessCache = Object.create(null)),
                    (e.proxy = ft(new Proxy(e.ctx, io)));
                  const { setup: o } = n;
                  if (o) {
                    const n = (e.setupContext =
                      o.length > 1
                        ? (function (e) {
                            const t = (t) => {
                              e.exposed = t || {};
                            };
                            let n;
                            return {
                              get attrs() {
                                return (
                                  n ||
                                  (n = (function (e) {
                                    return new Proxy(e.attrs, {
                                      get: (t, n) => (ge(e, 0, "$attrs"), t[n]),
                                    });
                                  })(e))
                                );
                              },
                              slots: e.slots,
                              emit: e.emit,
                              expose: t,
                            };
                          })(e)
                        : null);
                    Ar(e), he();
                    const r = Gt(o, e, 0, [e.props, n]);
                    if ((me(), yr(), T(r))) {
                      if ((r.then(yr, yr), t))
                        return r
                          .then((n) => {
                            _r(e, n, t);
                          })
                          .catch((t) => {
                            Et(t, e, 0);
                          });
                      e.asyncDep = r;
                    } else _r(e, r, t);
                  } else Pr(e, t);
                })(e, t)
              : void 0;
            xr = !1;
          })(l),
          l.asyncDep)
        ) {
          if ((r && r.registerDep(l, F), !e.el)) {
            const e = (l.subTree = sr(Ho));
            y(null, e, t, n);
          }
        } else F(l, e, t, n, r, i, s);
      },
      $ = (e, t, n) => {
        const o = (t.component = e.component);
        if (
          (function (e, t, n) {
            const { props: o, children: r, component: i } = e,
              { props: s, children: l, patchFlag: a } = t,
              c = i.emitsOptions;
            if (t.dirs || t.transition) return !0;
            if (!(n && a >= 0))
              return (
                !((!r && !l) || (l && l.$stable)) ||
                (o !== s && (o ? !s || ln(o, s, c) : !!s))
              );
            if (1024 & a) return !0;
            if (16 & a) return o ? ln(o, s, c) : !!s;
            if (8 & a) {
              const e = t.dynamicProps;
              for (let t = 0; t < e.length; t++) {
                const n = e[t];
                if (s[n] !== o[n] && !Kt(c, n)) return !0;
              }
            }
            return !1;
          })(e, t, n)
        ) {
          if (o.asyncDep && !o.asyncResolved) return void B(o, t, n);
          (o.next = t),
            (function (e) {
              const t = Lt.indexOf(e);
              t > Ot && Lt.splice(t, 1);
            })(o.update),
            o.update();
        } else (t.el = e.el), (o.vnode = t);
      },
      F = (e, t, n, o, r, i, s) => {
        const l = () => {
            if (e.isMounted) {
              let t,
                { next: n, bu: o, u: l, parent: a, vnode: c } = e,
                p = n;
              jo(e, !1),
                n ? ((n.el = c.el), B(e, n, s)) : (n = c),
                o && X(o),
                (t = n.props && n.props.onVnodeBeforeUpdate) && fr(t, a, n, c),
                jo(e, !0);
              const d = on(e),
                f = e.subTree;
              (e.subTree = d),
                v(f, d, u(f.el), Q(f), e, r, i),
                (n.el = d.el),
                null === p &&
                  (function ({ vnode: e, parent: t }, n) {
                    for (; t && t.subTree === e; )
                      ((e = t.vnode).el = n), (t = t.parent);
                  })(e, d.el),
                l && Ro(l, r),
                (t = n.props && n.props.onVnodeUpdated) &&
                  Ro(() => fr(t, a, n, c), r);
            } else {
              let s;
              const { el: l, props: a } = t,
                { bm: c, m: u, parent: p } = e,
                d = Gn(t);
              if (
                (jo(e, !1),
                c && X(c),
                !d && (s = a && a.onVnodeBeforeMount) && fr(s, p, t),
                jo(e, !0),
                l && oe)
              ) {
                const n = () => {
                  (e.subTree = on(e)), oe(l, e.subTree, e, r, null);
                };
                d
                  ? t.type.__asyncLoader().then(() => !e.isUnmounted && n())
                  : n();
              } else {
                const s = (e.subTree = on(e));
                v(null, s, n, o, e, r, i), (t.el = s.el);
              }
              if ((u && Ro(u, r), !d && (s = a && a.onVnodeMounted))) {
                const e = t;
                Ro(() => fr(s, p, e), r);
              }
              (256 & t.shapeFlag ||
                (p && Gn(p.vnode) && 256 & p.vnode.shapeFlag)) &&
                e.a &&
                Ro(e.a, r),
                (e.isMounted = !0),
                (t = n = o = null);
            }
          },
          a = (e.effect = new ue(l, () => Dt(c), e.scope)),
          c = (e.update = () => a.run());
        (c.id = e.uid), jo(e, !0), c();
      },
      B = (e, t, n) => {
        t.component = e;
        const o = e.vnode.props;
        (e.vnode = t),
          (e.next = null),
          (function (e, t, n, o) {
            const {
                props: r,
                attrs: i,
                vnode: { patchFlag: s },
              } = e,
              l = dt(r),
              [a] = e.propsOptions;
            let c = !1;
            if (!(o || s > 0) || 16 & s) {
              let o;
              yo(e, t, r, i) && (c = !0);
              for (const i in l)
                (t && (_(t, i) || ((o = N(i)) !== i && _(t, o)))) ||
                  (a
                    ? !n ||
                      (void 0 === n[i] && void 0 === n[o]) ||
                      (r[i] = bo(a, l, i, void 0, e, !0))
                    : delete r[i]);
              if (i !== l)
                for (const e in i) (t && _(t, e)) || (delete i[e], (c = !0));
            } else if (8 & s) {
              const n = e.vnode.dynamicProps;
              for (let o = 0; o < n.length; o++) {
                let s = n[o];
                if (Kt(e.emitsOptions, s)) continue;
                const u = t[s];
                if (a)
                  if (_(i, s)) u !== i[s] && ((i[s] = u), (c = !0));
                  else {
                    const t = I(s);
                    r[t] = bo(a, l, t, u, e, !1);
                  }
                else u !== i[s] && ((i[s] = u), (c = !0));
              }
            }
            c && Ae(e, "set", "$attrs");
          })(e, t.props, o, n),
          Mo(e, t.children, n),
          he(),
          Vt(),
          me();
      },
      j = (e, t, n, o, r, i, s, l, a = !1) => {
        const u = e && e.children,
          p = e ? e.shapeFlag : 0,
          d = t.children,
          { patchFlag: f, shapeFlag: h } = t;
        if (f > 0) {
          if (128 & f) return void V(u, d, n, o, r, i, s, l, a);
          if (256 & f) return void D(u, d, n, o, r, i, s, l, a);
        }
        8 & h
          ? (16 & p && K(u, r, i), d !== u && c(n, d))
          : 16 & p
          ? 16 & h
            ? V(u, d, n, o, r, i, s, l, a)
            : K(u, r, i, !0)
          : (8 & p && c(n, ""), 16 & h && k(d, n, o, r, i, s, l, a));
      },
      D = (e, t, n, o, r, i, s, l, a) => {
        t = t || h;
        const c = (e = e || h).length,
          u = t.length,
          p = Math.min(c, u);
        let d;
        for (d = 0; d < p; d++) {
          const o = (t[d] = a ? pr(t[d]) : ur(t[d]));
          v(e[d], o, n, null, r, i, s, l, a);
        }
        c > u ? K(e, r, i, !0, !1, p) : k(t, n, o, r, i, s, l, a, p);
      },
      V = (e, t, n, o, r, i, s, l, a) => {
        let c = 0;
        const u = t.length;
        let p = e.length - 1,
          d = u - 1;
        for (; c <= p && c <= d; ) {
          const o = e[c],
            u = (t[c] = a ? pr(t[c]) : ur(t[c]));
          if (!tr(o, u)) break;
          v(o, u, n, null, r, i, s, l, a), c++;
        }
        for (; c <= p && c <= d; ) {
          const o = e[p],
            c = (t[d] = a ? pr(t[d]) : ur(t[d]));
          if (!tr(o, c)) break;
          v(o, c, n, null, r, i, s, l, a), p--, d--;
        }
        if (c > p) {
          if (c <= d) {
            const e = d + 1,
              p = e < u ? t[e].el : o;
            for (; c <= d; )
              v(null, (t[c] = a ? pr(t[c]) : ur(t[c])), n, p, r, i, s, l, a),
                c++;
          }
        } else if (c > d) for (; c <= p; ) q(e[c], r, i, !0), c++;
        else {
          const f = c,
            m = c,
            g = new Map();
          for (c = m; c <= d; c++) {
            const e = (t[c] = a ? pr(t[c]) : ur(t[c]));
            null != e.key && g.set(e.key, c);
          }
          let A,
            y = 0;
          const b = d - m + 1;
          let w = !1,
            x = 0;
          const _ = new Array(b);
          for (c = 0; c < b; c++) _[c] = 0;
          for (c = f; c <= p; c++) {
            const o = e[c];
            if (y >= b) {
              q(o, r, i, !0);
              continue;
            }
            let u;
            if (null != o.key) u = g.get(o.key);
            else
              for (A = m; A <= d; A++)
                if (0 === _[A - m] && tr(o, t[A])) {
                  u = A;
                  break;
                }
            void 0 === u
              ? q(o, r, i, !0)
              : ((_[u - m] = c + 1),
                u >= x ? (x = u) : (w = !0),
                v(o, t[u], n, null, r, i, s, l, a),
                y++);
          }
          const P = w
            ? (function (e) {
                const t = e.slice(),
                  n = [0];
                let o, r, i, s, l;
                const a = e.length;
                for (o = 0; o < a; o++) {
                  const a = e[o];
                  if (0 !== a) {
                    if (((r = n[n.length - 1]), e[r] < a)) {
                      (t[o] = r), n.push(o);
                      continue;
                    }
                    for (i = 0, s = n.length - 1; i < s; )
                      (l = (i + s) >> 1), e[n[l]] < a ? (i = l + 1) : (s = l);
                    a < e[n[i]] && (i > 0 && (t[o] = n[i - 1]), (n[i] = o));
                  }
                }
                (i = n.length), (s = n[i - 1]);
                for (; i-- > 0; ) (n[i] = s), (s = t[s]);
                return n;
              })(_)
            : h;
          for (A = P.length - 1, c = b - 1; c >= 0; c--) {
            const e = m + c,
              p = t[e],
              d = e + 1 < u ? t[e + 1].el : o;
            0 === _[c]
              ? v(null, p, n, d, r, i, s, l, a)
              : w && (A < 0 || c !== P[A] ? H(p, n, d, 2) : A--);
          }
        }
      },
      H = (e, t, o, r, i = null) => {
        const { el: s, type: l, transition: a, children: c, shapeFlag: u } = e;
        if (6 & u) return void H(e.component.subTree, t, o, r);
        if (128 & u) return void e.suspense.move(t, o, r);
        if (64 & u) return void l.move(e, t, o, te);
        if (l === No) {
          n(s, t, o);
          for (let e = 0; e < c.length; e++) H(c[e], t, o, r);
          return void n(e.anchor, t, o);
        }
        if (l === qo) return void w(e, t, o);
        if (2 !== r && 1 & u && a)
          if (0 === r) a.beforeEnter(s), n(s, t, o), Ro(() => a.enter(s), i);
          else {
            const { leave: e, delayLeave: r, afterLeave: i } = a,
              l = () => n(s, t, o),
              c = () => {
                e(s, () => {
                  l(), i && i();
                });
              };
            r ? r(s, l, c) : c();
          }
        else n(s, t, o);
      },
      q = (e, t, n, o = !1, r = !1) => {
        const {
          type: i,
          props: s,
          ref: l,
          children: a,
          dynamicChildren: c,
          shapeFlag: u,
          patchFlag: p,
          dirs: d,
        } = e;
        if ((null != l && Fo(l, null, n, e, !0), 256 & u))
          return void t.ctx.deactivate(e);
        const f = 1 & u && d,
          h = !Gn(e);
        let m;
        if ((h && (m = s && s.onVnodeBeforeUnmount) && fr(m, t, e), 6 & u))
          z(e.component, n, o);
        else {
          if (128 & u) return void e.suspense.unmount(n, o);
          f && Xn(e, null, t, "beforeUnmount"),
            64 & u
              ? e.type.remove(e, t, n, r, te, o)
              : c && (i !== No || (p > 0 && 64 & p))
              ? K(c, t, n, !1, !0)
              : ((i === No && 384 & p) || (!r && 16 & u)) && K(a, t, n),
            o && W(e);
        }
        ((h && (m = s && s.onVnodeUnmounted)) || f) &&
          Ro(() => {
            m && fr(m, t, e), f && Xn(e, null, t, "unmounted");
          }, n);
      },
      W = (e) => {
        const { type: t, el: n, anchor: r, transition: i } = e;
        if (t === No) return void Z(n, r);
        if (t === qo) return void x(e);
        const s = () => {
          o(n), i && !i.persisted && i.afterLeave && i.afterLeave();
        };
        if (1 & e.shapeFlag && i && !i.persisted) {
          const { leave: t, delayLeave: o } = i,
            r = () => t(n, s);
          o ? o(e.el, s, r) : r();
        } else s();
      },
      Z = (e, t) => {
        let n;
        for (; e !== t; ) (n = p(e)), o(e), (e = n);
        o(t);
      },
      z = (e, t, n) => {
        const { bum: o, scope: r, update: i, subTree: s, um: l } = e;
        o && X(o),
          r.stop(),
          i && ((i.active = !1), q(s, e, t, n)),
          l && Ro(l, t),
          Ro(() => {
            e.isUnmounted = !0;
          }, t),
          t &&
            t.pendingBranch &&
            !t.isUnmounted &&
            e.asyncDep &&
            !e.asyncResolved &&
            e.suspenseId === t.pendingId &&
            (t.deps--, 0 === t.deps && t.resolve());
      },
      K = (e, t, n, o = !1, r = !1, i = 0) => {
        for (let s = i; s < e.length; s++) q(e[s], t, n, o, r);
      },
      Q = (e) =>
        6 & e.shapeFlag
          ? Q(e.component.subTree)
          : 128 & e.shapeFlag
          ? e.suspense.next()
          : p(e.anchor || e.el),
      ee = (e, t, n) => {
        null == e
          ? t._vnode && q(t._vnode, null, null, !0)
          : v(t._vnode || null, e, t, null, null, null, n),
          Vt(),
          Ht(),
          (t._vnode = e);
      },
      te = { p: v, um: q, m: H, r: W, mt: O, mc: k, pc: j, pbc: S, n: Q, o: e };
    let ne, oe;
    t && ([ne, oe] = t(te));
    return { render: ee, hydrate: ne, createApp: $o(ee, ne) };
  })(e);
}
function jo({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Io(e, t, n = !1) {
  const o = e.children,
    r = t.children;
  if (P(o) && P(r))
    for (let i = 0; i < o.length; i++) {
      const e = o[i];
      let t = r[i];
      1 & t.shapeFlag &&
        !t.dynamicChildren &&
        ((t.patchFlag <= 0 || 32 === t.patchFlag) &&
          ((t = r[i] = pr(r[i])), (t.el = e.el)),
        n || Io(e, t)),
        t.type === Vo && (t.el = e.el);
    }
}
const Do = (e) => e.__isTeleport,
  No = Symbol(void 0),
  Vo = Symbol(void 0),
  Ho = Symbol(void 0),
  qo = Symbol(void 0),
  Xo = [];
let Wo = null;
function Zo(e = !1) {
  Xo.push((Wo = e ? null : []));
}
let zo = 1;
function Ko(e) {
  zo += e;
}
function Yo(e) {
  return (
    (e.dynamicChildren = zo > 0 ? Wo || h : null),
    Xo.pop(),
    (Wo = Xo[Xo.length - 1] || null),
    zo > 0 && Wo && Wo.push(e),
    e
  );
}
function Qo(e, t, n, o, r, i) {
  return Yo(ir(e, t, n, o, r, i, !0));
}
function Jo(e, t, n, o, r) {
  return Yo(sr(e, t, n, o, r, !0));
}
function er(e) {
  return !!e && !0 === e.__v_isVNode;
}
function tr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const nr = "__vInternal",
  or = ({ key: e }) => (null != e ? e : null),
  rr = ({ ref: e, ref_key: t, ref_for: n }) =>
    null != e
      ? G(e) || At(e) || k(e)
        ? { i: Yt, r: e, k: t, f: !!n }
        : e
      : null;
function ir(
  e,
  t = null,
  n = null,
  o = 0,
  r = null,
  i = e === No ? 0 : 1,
  s = !1,
  l = !1
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && or(t),
    ref: t && rr(t),
    scopeId: Qt,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Yt,
  };
  return (
    l
      ? (dr(a, n), 128 & i && e.normalize(a))
      : n && (a.shapeFlag |= G(n) ? 8 : 16),
    zo > 0 &&
      !s &&
      Wo &&
      (a.patchFlag > 0 || 6 & i) &&
      32 !== a.patchFlag &&
      Wo.push(a),
    a
  );
}
const sr = function (e, t = null, n = null, r = 0, i = null, s = !1) {
  (e && e !== zn) || (e = Ho);
  if (er(e)) {
    const o = lr(e, t, !0);
    return (
      n && dr(o, n),
      zo > 0 &&
        !s &&
        Wo &&
        (6 & o.shapeFlag ? (Wo[Wo.indexOf(e)] = o) : Wo.push(o)),
      (o.patchFlag |= -2),
      o
    );
  }
  (l = e), k(l) && "__vccOpts" in l && (e = e.__vccOpts);
  var l;
  if (t) {
    t = (function (e) {
      return e ? (pt(e) || nr in e ? b({}, e) : e) : null;
    })(t);
    let { class: e, style: n } = t;
    e && !G(e) && (t.class = a(e)),
      E(n) && (pt(n) && !P(n) && (n = b({}, n)), (t.style = o(n)));
  }
  const c = G(e) ? 1 : an(e) ? 128 : Do(e) ? 64 : E(e) ? 4 : k(e) ? 2 : 0;
  return ir(e, t, n, r, i, c, s, !0);
};
function lr(e, t, n = !1) {
  const { props: r, ref: i, patchFlag: s, children: l } = e,
    c = t
      ? (function (...e) {
          const t = {};
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            for (const e in r)
              if ("class" === e)
                t.class !== r.class && (t.class = a([t.class, r.class]));
              else if ("style" === e) t.style = o([t.style, r.style]);
              else if (A(e)) {
                const n = t[e],
                  o = r[e];
                !o ||
                  n === o ||
                  (P(n) && n.includes(o)) ||
                  (t[e] = n ? [].concat(n, o) : o);
              } else "" !== e && (t[e] = r[e]);
          }
          return t;
        })(r || {}, t)
      : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && or(c),
    ref:
      t && t.ref ? (n && i ? (P(i) ? i.concat(rr(t)) : [i, rr(t)]) : rr(t)) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== No ? (-1 === s ? 16 : 16 | s) : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && lr(e.ssContent),
    ssFallback: e.ssFallback && lr(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function ar(e = " ", t = 0) {
  return sr(Vo, null, e, t);
}
function cr(e = "", t = !1) {
  return t ? (Zo(), Jo(Ho, null, e)) : sr(Ho, null, e);
}
function ur(e) {
  return null == e || "boolean" == typeof e
    ? sr(Ho)
    : P(e)
    ? sr(No, null, e.slice())
    : "object" == typeof e
    ? pr(e)
    : sr(Vo, null, String(e));
}
function pr(e) {
  return (null === e.el && -1 !== e.patchFlag) || e.memo ? e : lr(e);
}
function dr(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (null == t) t = null;
  else if (P(t)) n = 16;
  else if ("object" == typeof t) {
    if (65 & o) {
      const n = t.default;
      return void (n && (n._c && (n._d = !1), dr(e, n()), n._c && (n._d = !0)));
    }
    {
      n = 32;
      const o = t._;
      o || nr in t
        ? 3 === o &&
          Yt &&
          (1 === Yt.slots._ ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
        : (t._ctx = Yt);
    }
  } else
    k(t)
      ? ((t = { default: t, _ctx: Yt }), (n = 32))
      : ((t = String(t)), 64 & o ? ((n = 16), (t = [ar(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function fr(e, t, n, o = null) {
  St(e, t, 7, [n, o]);
}
const hr = Lo();
let mr = 0;
let gr = null;
const vr = () => gr || Yt,
  Ar = (e) => {
    (gr = e), e.scope.on();
  },
  yr = () => {
    gr && gr.scope.off(), (gr = null);
  };
function br(e) {
  return 4 & e.vnode.shapeFlag;
}
let wr,
  xr = !1;
function _r(e, t, n) {
  k(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : E(t) && (e.setupState = Ut(t)),
    Pr(e, n);
}
function Pr(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && wr && !o.render) {
      const t = o.template || uo(e).template;
      if (t) {
        const { isCustomElement: n, compilerOptions: r } = e.appContext.config,
          { delimiters: i, compilerOptions: s } = o,
          l = b(b({ isCustomElement: n, delimiters: i }, r), s);
        o.render = wr(t, l);
      }
    }
    e.render = o.render || m;
  }
  Ar(e), he(), lo(e), me(), yr();
}
function Ur(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Ut(ft(e.exposed)), {
        get: (t, n) => (n in t ? t[n] : n in oo ? oo[n](e) : void 0),
        has: (e, t) => t in e || t in oo,
      }))
    );
}
const Cr = (e, t) =>
  (function (e, t, n = !1) {
    let o, r;
    const i = k(e);
    return (
      i ? ((o = e), (r = m)) : ((o = e.get), (r = e.set)),
      new kt(o, r, i || !r, n)
    );
  })(e, 0, xr);
function kr(e, t, n) {
  const o = arguments.length;
  return 2 === o
    ? E(t) && !P(t)
      ? er(t)
        ? sr(e, null, [t])
        : sr(e, t)
      : sr(e, null, t)
    : (o > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : 3 === o && er(n) && (n = [n]),
      sr(e, t, n));
}
const Gr = Symbol(""),
  Sr = () => un(Gr),
  Er = "3.2.47",
  Tr = "undefined" != typeof document ? document : null,
  Mr = Tr && Tr.createElement("template"),
  Lr = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, o) => {
      const r = t
        ? Tr.createElementNS("http://www.w3.org/2000/svg", e)
        : Tr.createElement(e, n ? { is: n } : void 0);
      return (
        "select" === e &&
          o &&
          null != o.multiple &&
          r.setAttribute("multiple", o.multiple),
        r
      );
    },
    createText: (e) => Tr.createTextNode(e),
    createComment: (e) => Tr.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Tr.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, o, r, i) {
      const s = n ? n.previousSibling : t.lastChild;
      if (r && (r === i || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n), r !== i && (r = r.nextSibling);

        );
      else {
        Mr.innerHTML = o ? `<svg>${e}</svg>` : e;
        const r = Mr.content;
        if (o) {
          const e = r.firstChild;
          for (; e.firstChild; ) r.appendChild(e.firstChild);
          r.removeChild(e);
        }
        t.insertBefore(r, n);
      }
      return [
        s ? s.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
const Or = /\s*!important$/;
function $r(e, t, n) {
  if (P(n)) n.forEach((n) => $r(e, t, n));
  else if ((null == n && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const o = (function (e, t) {
      const n = Rr[t];
      if (n) return n;
      let o = I(t);
      if ("filter" !== o && o in e) return (Rr[t] = o);
      o = V(o);
      for (let r = 0; r < Fr.length; r++) {
        const n = Fr[r] + o;
        if (n in e) return (Rr[t] = n);
      }
      return t;
    })(e, t);
    Or.test(n)
      ? e.setProperty(N(o), n.replace(Or, ""), "important")
      : (e[o] = n);
  }
}
const Fr = ["Webkit", "Moz", "ms"],
  Rr = {};
const Br = "http://www.w3.org/1999/xlink";
function jr(e, t, n, o, r = null) {
  const i = e._vei || (e._vei = {}),
    s = i[t];
  if (o && s) s.value = o;
  else {
    const [n, l] = (function (e) {
      let t;
      if (Ir.test(e)) {
        let n;
        for (t = {}; (n = e.match(Ir)); )
          (e = e.slice(0, e.length - n[0].length)),
            (t[n[0].toLowerCase()] = !0);
      }
      const n = ":" === e[2] ? e.slice(3) : N(e.slice(2));
      return [n, t];
    })(t);
    if (o) {
      const s = (i[t] = (function (e, t) {
        const n = (e) => {
          if (e._vts) {
            if (e._vts <= n.attached) return;
          } else e._vts = Date.now();
          St(
            (function (e, t) {
              if (P(t)) {
                const n = e.stopImmediatePropagation;
                return (
                  (e.stopImmediatePropagation = () => {
                    n.call(e), (e._stopped = !0);
                  }),
                  t.map((e) => (t) => !t._stopped && e && e(t))
                );
              }
              return t;
            })(e, n.value),
            t,
            5,
            [e]
          );
        };
        return (n.value = e), (n.attached = Vr()), n;
      })(o, r));
      !(function (e, t, n, o) {
        e.addEventListener(t, n, o);
      })(e, n, s, l);
    } else
      s &&
        (!(function (e, t, n, o) {
          e.removeEventListener(t, n, o);
        })(e, n, s, l),
        (i[t] = void 0));
  }
}
const Ir = /(?:Once|Passive|Capture)$/;
let Dr = 0;
const Nr = Promise.resolve(),
  Vr = () => Dr || (Nr.then(() => (Dr = 0)), (Dr = Date.now()));
const Hr = /^on[a-z]/;
const qr = "transition",
  Xr = "animation",
  Wr = (e, { slots: t }) =>
    kr(
      bn,
      (function (e) {
        const t = {};
        for (const b in e) b in Zr || (t[b] = e[b]);
        if (!1 === e.css) return t;
        const {
            name: n = "v",
            type: o,
            duration: r,
            enterFromClass: i = `${n}-enter-from`,
            enterActiveClass: s = `${n}-enter-active`,
            enterToClass: l = `${n}-enter-to`,
            appearFromClass: a = i,
            appearActiveClass: c = s,
            appearToClass: u = l,
            leaveFromClass: p = `${n}-leave-from`,
            leaveActiveClass: d = `${n}-leave-active`,
            leaveToClass: f = `${n}-leave-to`,
          } = e,
          h = (function (e) {
            if (null == e) return null;
            if (E(e)) return [Yr(e.enter), Yr(e.leave)];
            {
              const t = Yr(e);
              return [t, t];
            }
          })(r),
          m = h && h[0],
          g = h && h[1],
          {
            onBeforeEnter: v,
            onEnter: A,
            onEnterCancelled: y,
            onLeave: w,
            onLeaveCancelled: x,
            onBeforeAppear: _ = v,
            onAppear: P = A,
            onAppearCancelled: U = y,
          } = t,
          C = (e, t, n) => {
            Jr(e, t ? u : l), Jr(e, t ? c : s), n && n();
          },
          k = (e, t) => {
            (e._isLeaving = !1), Jr(e, p), Jr(e, f), Jr(e, d), t && t();
          },
          G = (e) => (t, n) => {
            const r = e ? P : A,
              s = () => C(t, e, n);
            zr(r, [t, s]),
              ei(() => {
                Jr(t, e ? a : i), Qr(t, e ? u : l), Kr(r) || ni(t, o, m, s);
              });
          };
        return b(t, {
          onBeforeEnter(e) {
            zr(v, [e]), Qr(e, i), Qr(e, s);
          },
          onBeforeAppear(e) {
            zr(_, [e]), Qr(e, a), Qr(e, c);
          },
          onEnter: G(!1),
          onAppear: G(!0),
          onLeave(e, t) {
            e._isLeaving = !0;
            const n = () => k(e, t);
            Qr(e, p),
              document.body.offsetHeight,
              Qr(e, d),
              ei(() => {
                e._isLeaving && (Jr(e, p), Qr(e, f), Kr(w) || ni(e, o, g, n));
              }),
              zr(w, [e, n]);
          },
          onEnterCancelled(e) {
            C(e, !1), zr(y, [e]);
          },
          onAppearCancelled(e) {
            C(e, !0), zr(U, [e]);
          },
          onLeaveCancelled(e) {
            k(e), zr(x, [e]);
          },
        });
      })(e),
      t
    );
Wr.displayName = "Transition";
const Zr = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
Wr.props = b({}, bn.props, Zr);
const zr = (e, t = []) => {
    P(e) ? e.forEach((e) => e(...t)) : e && e(...t);
  },
  Kr = (e) => !!e && (P(e) ? e.some((e) => e.length > 1) : e.length > 1);
function Yr(e) {
  return z(e);
}
function Qr(e, t) {
  t.split(/\s+/).forEach((t) => t && e.classList.add(t)),
    (e._vtc || (e._vtc = new Set())).add(t);
}
function Jr(e, t) {
  t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function ei(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let ti = 0;
function ni(e, t, n, o) {
  const r = (e._endId = ++ti),
    i = () => {
      r === e._endId && o();
    };
  if (n) return setTimeout(i, n);
  const {
    type: s,
    timeout: l,
    propCount: a,
  } = (function (e, t) {
    const n = window.getComputedStyle(e),
      o = (e) => (n[e] || "").split(", "),
      r = o(`${qr}Delay`),
      i = o(`${qr}Duration`),
      s = oi(r, i),
      l = o(`${Xr}Delay`),
      a = o(`${Xr}Duration`),
      c = oi(l, a);
    let u = null,
      p = 0,
      d = 0;
    t === qr
      ? s > 0 && ((u = qr), (p = s), (d = i.length))
      : t === Xr
      ? c > 0 && ((u = Xr), (p = c), (d = a.length))
      : ((p = Math.max(s, c)),
        (u = p > 0 ? (s > c ? qr : Xr) : null),
        (d = u ? (u === qr ? i.length : a.length) : 0));
    const f =
      u === qr && /\b(transform|all)(,|$)/.test(o(`${qr}Property`).toString());
    return { type: u, timeout: p, propCount: d, hasTransform: f };
  })(e, t);
  if (!s) return o();
  const c = s + "end";
  let u = 0;
  const p = () => {
      e.removeEventListener(c, d), i();
    },
    d = (t) => {
      t.target === e && ++u >= a && p();
    };
  setTimeout(() => {
    u < a && p();
  }, l + 1),
    e.addEventListener(c, d);
}
function oi(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((t, n) => ri(t) + ri(e[n])));
}
function ri(e) {
  return 1e3 * Number(e.slice(0, -1).replace(",", "."));
}
const ii = b(
  {
    patchProp: (e, t, n, o, r = !1, i, s, l, a) => {
      "class" === t
        ? (function (e, t, n) {
            const o = e._vtc;
            o && (t = (t ? [t, ...o] : [...o]).join(" ")),
              null == t
                ? e.removeAttribute("class")
                : n
                ? e.setAttribute("class", t)
                : (e.className = t);
          })(e, o, r)
        : "style" === t
        ? (function (e, t, n) {
            const o = e.style,
              r = G(n);
            if (n && !r) {
              if (t && !G(t)) for (const e in t) null == n[e] && $r(o, e, "");
              for (const e in n) $r(o, e, n[e]);
            } else {
              const i = o.display;
              r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"),
                "_vod" in e && (o.display = i);
            }
          })(e, n, o)
        : A(t)
        ? y(t) || jr(e, t, 0, o, s)
        : (
            "." === t[0]
              ? ((t = t.slice(1)), 1)
              : "^" === t[0]
              ? ((t = t.slice(1)), 0)
              : (function (e, t, n, o) {
                  if (o)
                    return (
                      "innerHTML" === t ||
                      "textContent" === t ||
                      !!(t in e && Hr.test(t) && k(n))
                    );
                  if (
                    "spellcheck" === t ||
                    "draggable" === t ||
                    "translate" === t
                  )
                    return !1;
                  if ("form" === t) return !1;
                  if ("list" === t && "INPUT" === e.tagName) return !1;
                  if ("type" === t && "TEXTAREA" === e.tagName) return !1;
                  if (Hr.test(t) && G(n)) return !1;
                  return t in e;
                })(e, t, o, r)
          )
        ? (function (e, t, n, o, r, i, s) {
            if ("innerHTML" === t || "textContent" === t)
              return o && s(o, r, i), void (e[t] = null == n ? "" : n);
            if (
              "value" === t &&
              "PROGRESS" !== e.tagName &&
              !e.tagName.includes("-")
            ) {
              e._value = n;
              const o = null == n ? "" : n;
              return (
                (e.value === o && "OPTION" !== e.tagName) || (e.value = o),
                void (null == n && e.removeAttribute(t))
              );
            }
            let l = !1;
            if ("" === n || null == n) {
              const o = typeof e[t];
              "boolean" === o
                ? (n = u(n))
                : null == n && "string" === o
                ? ((n = ""), (l = !0))
                : "number" === o && ((n = 0), (l = !0));
            }
            try {
              e[t] = n;
            } catch (a) {}
            l && e.removeAttribute(t);
          })(e, t, o, i, s, l, a)
        : ("true-value" === t
            ? (e._trueValue = o)
            : "false-value" === t && (e._falseValue = o),
          (function (e, t, n, o, r) {
            if (o && t.startsWith("xlink:"))
              null == n
                ? e.removeAttributeNS(Br, t.slice(6, t.length))
                : e.setAttributeNS(Br, t, n);
            else {
              const o = c(t);
              null == n || (o && !u(n))
                ? e.removeAttribute(t)
                : e.setAttribute(t, o ? "" : n);
            }
          })(e, t, o, r));
    },
  },
  Lr
);
let si;
const li = (...e) => {
  const t = (si || (si = Bo(ii))).createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (e) => {
      const o = (function (e) {
        if (G(e)) {
          return document.querySelector(e);
        }
        return e;
      })(
        /*!
         * vue-router v4.1.6
         * (c) 2022 Eduardo San Martin Morote
         * @license MIT
         */ e
      );
      if (!o) return;
      const r = t._component;
      k(r) || r.render || r.template || (r.template = o.innerHTML),
        (o.innerHTML = "");
      const i = n(o, !1, o instanceof SVGElement);
      return (
        o instanceof Element &&
          (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
const ai = "undefined" != typeof window;
const ci = Object.assign;
function ui(e, t) {
  const n = {};
  for (const o in t) {
    const r = t[o];
    n[o] = di(r) ? r.map(e) : e(r);
  }
  return n;
}
const pi = () => {},
  di = Array.isArray,
  fi = /\/$/,
  hi = (e) => e.replace(fi, "");
function mi(e, t, n = "/") {
  let o,
    r = {},
    i = "",
    s = "";
  const l = t.indexOf("#");
  let a = t.indexOf("?");
  return (
    l < a && l >= 0 && (a = -1),
    a > -1 &&
      ((o = t.slice(0, a)),
      (i = t.slice(a + 1, l > -1 ? l : t.length)),
      (r = e(i))),
    l > -1 && ((o = o || t.slice(0, l)), (s = t.slice(l, t.length))),
    (o = (function (e, t) {
      if (e.startsWith("/")) return e;
      if (!e) return t;
      const n = t.split("/"),
        o = e.split("/");
      let r,
        i,
        s = n.length - 1;
      for (r = 0; r < o.length; r++)
        if (((i = o[r]), "." !== i)) {
          if (".." !== i) break;
          s > 1 && s--;
        }
      return (
        n.slice(0, s).join("/") +
        "/" +
        o.slice(r - (r === o.length ? 1 : 0)).join("/")
      );
    })(null != o ? o : t, n)),
    { fullPath: o + (i && "?") + i + s, path: o, query: r, hash: s }
  );
}
function gi(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function vi(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Ai(e[n], t[n])) return !1;
  return !0;
}
function Ai(e, t) {
  return di(e) ? yi(e, t) : di(t) ? yi(t, e) : e === t;
}
function yi(e, t) {
  return di(t)
    ? e.length === t.length && e.every((e, n) => e === t[n])
    : 1 === e.length && e[0] === t;
}
var bi, wi, xi, _i;
((wi = bi || (bi = {})).pop = "pop"),
  (wi.push = "push"),
  ((_i = xi || (xi = {})).back = "back"),
  (_i.forward = "forward"),
  (_i.unknown = "");
const Pi = "";
const Ui = /^[^#]+#/;
function Ci(e, t) {
  return e.replace(Ui, "#") + t;
}
const ki = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function Gi(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      o = "string" == typeof n && n.startsWith("#"),
      r =
        "string" == typeof n
          ? o
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!r) return;
    t = (function (e, t) {
      const n = document.documentElement.getBoundingClientRect(),
        o = e.getBoundingClientRect();
      return {
        behavior: t.behavior,
        left: o.left - n.left - (t.left || 0),
        top: o.top - n.top - (t.top || 0),
      };
    })(r, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        null != t.left ? t.left : window.pageXOffset,
        null != t.top ? t.top : window.pageYOffset
      );
}
function Si(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Ei = new Map();
function Ti(e = "") {
  let t = [],
    n = [Pi],
    o = 0;
  function r(e) {
    o++, o === n.length || n.splice(o), n.push(e);
  }
  e = (function (e) {
    if (!e)
      if (ai) {
        const t = document.querySelector("base");
        e = (e = (t && t.getAttribute("href")) || "/").replace(
          /^\w+:\/\/[^\/]+/,
          ""
        );
      } else e = "/";
    return "/" !== e[0] && "#" !== e[0] && (e = "/" + e), hi(e);
  })(e);
  const i = {
    location: Pi,
    state: {},
    base: e,
    createHref: Ci.bind(null, e),
    replace(e) {
      n.splice(o--, 1), r(e);
    },
    push(e, t) {
      r(e);
    },
    listen: (e) => (
      t.push(e),
      () => {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
    ),
    destroy() {
      (t = []), (n = [Pi]), (o = 0);
    },
    go(e, r = !0) {
      const i = this.location,
        s = e < 0 ? xi.back : xi.forward;
      (o = Math.max(0, Math.min(o + e, n.length - 1))),
        r &&
          (function (e, n, { direction: o, delta: r }) {
            const i = { direction: o, delta: r, type: bi.pop };
            for (const s of t) s(e, n, i);
          })(this.location, i, { direction: s, delta: e });
    },
  };
  return (
    Object.defineProperty(i, "location", { enumerable: !0, get: () => n[o] }), i
  );
}
function Mi(e) {
  return "string" == typeof e || "symbol" == typeof e;
}
const Li = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  Oi = Symbol("");
var $i, Fi;
function Ri(e, t) {
  return ci(new Error(), { type: e, [Oi]: !0 }, t);
}
function Bi(e, t) {
  return e instanceof Error && Oi in e && (null == t || !!(e.type & t));
}
((Fi = $i || ($i = {}))[(Fi.aborted = 4)] = "aborted"),
  (Fi[(Fi.cancelled = 8)] = "cancelled"),
  (Fi[(Fi.duplicated = 16)] = "duplicated");
const ji = "[^/]+?",
  Ii = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Di = /[.+*?^${}()[\]/\\]/g;
function Ni(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o) return o;
    n++;
  }
  return e.length < t.length
    ? 1 === e.length && 80 === e[0]
      ? -1
      : 1
    : e.length > t.length
    ? 1 === t.length && 80 === t[0]
      ? 1
      : -1
    : 0;
}
function Vi(e, t) {
  let n = 0;
  const o = e.score,
    r = t.score;
  for (; n < o.length && n < r.length; ) {
    const e = Ni(o[n], r[n]);
    if (e) return e;
    n++;
  }
  if (1 === Math.abs(r.length - o.length)) {
    if (Hi(o)) return 1;
    if (Hi(r)) return -1;
  }
  return r.length - o.length;
}
function Hi(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const qi = { type: 0, value: "" },
  Xi = /[a-zA-Z0-9_]/;
function Wi(e, t, n) {
  const o = (function (e, t) {
      const n = ci({}, Ii, t),
        o = [];
      let r = n.start ? "^" : "";
      const i = [];
      for (const a of e) {
        const e = a.length ? [] : [90];
        n.strict && !a.length && (r += "/");
        for (let t = 0; t < a.length; t++) {
          const o = a[t];
          let s = 40 + (n.sensitive ? 0.25 : 0);
          if (0 === o.type)
            t || (r += "/"), (r += o.value.replace(Di, "\\$&")), (s += 40);
          else if (1 === o.type) {
            const { value: e, repeatable: n, optional: c, regexp: u } = o;
            i.push({ name: e, repeatable: n, optional: c });
            const p = u || ji;
            if (p !== ji) {
              s += 10;
              try {
                new RegExp(`(${p})`);
              } catch (l) {
                throw new Error(
                  `Invalid custom RegExp for param "${e}" (${p}): ` + l.message
                );
              }
            }
            let d = n ? `((?:${p})(?:/(?:${p}))*)` : `(${p})`;
            t || (d = c && a.length < 2 ? `(?:/${d})` : "/" + d),
              c && (d += "?"),
              (r += d),
              (s += 20),
              c && (s += -8),
              n && (s += -20),
              ".*" === p && (s += -50);
          }
          e.push(s);
        }
        o.push(e);
      }
      if (n.strict && n.end) {
        const e = o.length - 1;
        o[e][o[e].length - 1] += 0.7000000000000001;
      }
      n.strict || (r += "/?"),
        n.end ? (r += "$") : n.strict && (r += "(?:/|$)");
      const s = new RegExp(r, n.sensitive ? "" : "i");
      return {
        re: s,
        score: o,
        keys: i,
        parse: function (e) {
          const t = e.match(s),
            n = {};
          if (!t) return null;
          for (let o = 1; o < t.length; o++) {
            const e = t[o] || "",
              r = i[o - 1];
            n[r.name] = e && r.repeatable ? e.split("/") : e;
          }
          return n;
        },
        stringify: function (t) {
          let n = "",
            o = !1;
          for (const r of e) {
            (o && n.endsWith("/")) || (n += "/"), (o = !1);
            for (const e of r)
              if (0 === e.type) n += e.value;
              else if (1 === e.type) {
                const { value: i, repeatable: s, optional: l } = e,
                  a = i in t ? t[i] : "";
                if (di(a) && !s)
                  throw new Error(
                    `Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`
                  );
                const c = di(a) ? a.join("/") : a;
                if (!c) {
                  if (!l) throw new Error(`Missing required param "${i}"`);
                  r.length < 2 &&
                    (n.endsWith("/") ? (n = n.slice(0, -1)) : (o = !0));
                }
                n += c;
              }
          }
          return n || "/";
        },
      };
    })(
      (function (e) {
        if (!e) return [[]];
        if ("/" === e) return [[qi]];
        if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
        function t(e) {
          throw new Error(`ERR (${n})/"${c}": ${e}`);
        }
        let n = 0,
          o = n;
        const r = [];
        let i;
        function s() {
          i && r.push(i), (i = []);
        }
        let l,
          a = 0,
          c = "",
          u = "";
        function p() {
          c &&
            (0 === n
              ? i.push({ type: 0, value: c })
              : 1 === n || 2 === n || 3 === n
              ? (i.length > 1 &&
                  ("*" === l || "+" === l) &&
                  t(
                    `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
                  ),
                i.push({
                  type: 1,
                  value: c,
                  regexp: u,
                  repeatable: "*" === l || "+" === l,
                  optional: "*" === l || "?" === l,
                }))
              : t("Invalid state to consume buffer"),
            (c = ""));
        }
        function d() {
          c += l;
        }
        for (; a < e.length; )
          if (((l = e[a++]), "\\" !== l || 2 === n))
            switch (n) {
              case 0:
                "/" === l ? (c && p(), s()) : ":" === l ? (p(), (n = 1)) : d();
                break;
              case 4:
                d(), (n = o);
                break;
              case 1:
                "(" === l
                  ? (n = 2)
                  : Xi.test(l)
                  ? d()
                  : (p(), (n = 0), "*" !== l && "?" !== l && "+" !== l && a--);
                break;
              case 2:
                ")" === l
                  ? "\\" == u[u.length - 1]
                    ? (u = u.slice(0, -1) + l)
                    : (n = 3)
                  : (u += l);
                break;
              case 3:
                p(),
                  (n = 0),
                  "*" !== l && "?" !== l && "+" !== l && a--,
                  (u = "");
                break;
              default:
                t("Unknown state");
            }
          else (o = n), (n = 4);
        return (
          2 === n && t(`Unfinished custom RegExp for param "${c}"`), p(), s(), r
        );
      })(e.path),
      n
    ),
    r = ci(o, { record: e, parent: t, children: [], alias: [] });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function Zi(e, t) {
  const n = [],
    o = new Map();
  function r(e, n, o) {
    const l = !o,
      a = (function (e) {
        return {
          path: e.path,
          redirect: e.redirect,
          name: e.name,
          meta: e.meta || {},
          aliasOf: void 0,
          beforeEnter: e.beforeEnter,
          props: Ki(e),
          children: e.children || [],
          instances: {},
          leaveGuards: new Set(),
          updateGuards: new Set(),
          enterCallbacks: {},
          components:
            "components" in e
              ? e.components || null
              : e.component && { default: e.component },
        };
      })(e);
    a.aliasOf = o && o.record;
    const c = Ji(t, e),
      u = [a];
    if ("alias" in e) {
      const t = "string" == typeof e.alias ? [e.alias] : e.alias;
      for (const e of t)
        u.push(
          ci({}, a, {
            components: o ? o.record.components : a.components,
            path: e,
            aliasOf: o ? o.record : a,
          })
        );
    }
    let p, d;
    for (const t of u) {
      const { path: u } = t;
      if (n && "/" !== u[0]) {
        const e = n.record.path,
          o = "/" === e[e.length - 1] ? "" : "/";
        t.path = n.record.path + (u && o + u);
      }
      if (
        ((p = Wi(t, n, c)),
        o
          ? o.alias.push(p)
          : ((d = d || p),
            d !== p && d.alias.push(p),
            l && e.name && !Yi(p) && i(e.name)),
        a.children)
      ) {
        const e = a.children;
        for (let t = 0; t < e.length; t++) r(e[t], p, o && o.children[t]);
      }
      (o = o || p),
        ((p.record.components && Object.keys(p.record.components).length) ||
          p.record.name ||
          p.record.redirect) &&
          s(p);
    }
    return d
      ? () => {
          i(d);
        }
      : pi;
  }
  function i(e) {
    if (Mi(e)) {
      const t = o.get(e);
      t &&
        (o.delete(e),
        n.splice(n.indexOf(t), 1),
        t.children.forEach(i),
        t.alias.forEach(i));
    } else {
      const t = n.indexOf(e);
      t > -1 &&
        (n.splice(t, 1),
        e.record.name && o.delete(e.record.name),
        e.children.forEach(i),
        e.alias.forEach(i));
    }
  }
  function s(e) {
    let t = 0;
    for (
      ;
      t < n.length &&
      Vi(e, n[t]) >= 0 &&
      (e.record.path !== n[t].record.path || !es(e, n[t]));

    )
      t++;
    n.splice(t, 0, e), e.record.name && !Yi(e) && o.set(e.record.name, e);
  }
  return (
    (t = Ji({ strict: !1, end: !0, sensitive: !1 }, t)),
    e.forEach((e) => r(e)),
    {
      addRoute: r,
      resolve: function (e, t) {
        let r,
          i,
          s,
          l = {};
        if ("name" in e && e.name) {
          if (((r = o.get(e.name)), !r)) throw Ri(1, { location: e });
          (s = r.record.name),
            (l = ci(
              zi(
                t.params,
                r.keys.filter((e) => !e.optional).map((e) => e.name)
              ),
              e.params &&
                zi(
                  e.params,
                  r.keys.map((e) => e.name)
                )
            )),
            (i = r.stringify(l));
        } else if ("path" in e)
          (i = e.path),
            (r = n.find((e) => e.re.test(i))),
            r && ((l = r.parse(i)), (s = r.record.name));
        else {
          if (
            ((r = t.name ? o.get(t.name) : n.find((e) => e.re.test(t.path))),
            !r)
          )
            throw Ri(1, { location: e, currentLocation: t });
          (s = r.record.name),
            (l = ci({}, t.params, e.params)),
            (i = r.stringify(l));
        }
        const a = [];
        let c = r;
        for (; c; ) a.unshift(c.record), (c = c.parent);
        return { name: s, path: i, params: l, matched: a, meta: Qi(a) };
      },
      removeRoute: i,
      getRoutes: function () {
        return n;
      },
      getRecordMatcher: function (e) {
        return o.get(e);
      },
    }
  );
}
function zi(e, t) {
  const n = {};
  for (const o of t) o in e && (n[o] = e[o]);
  return n;
}
function Ki(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const o in e.components) t[o] = "boolean" == typeof n ? n : n[o];
  return t;
}
function Yi(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Qi(e) {
  return e.reduce((e, t) => ci(e, t.meta), {});
}
function Ji(e, t) {
  const n = {};
  for (const o in e) n[o] = o in t ? t[o] : e[o];
  return n;
}
function es(e, t) {
  return t.children.some((t) => t === e || es(e, t));
}
const ts = /#/g,
  ns = /&/g,
  os = /\//g,
  rs = /=/g,
  is = /\?/g,
  ss = /\+/g,
  ls = /%5B/g,
  as = /%5D/g,
  cs = /%5E/g,
  us = /%60/g,
  ps = /%7B/g,
  ds = /%7C/g,
  fs = /%7D/g,
  hs = /%20/g;
function ms(e) {
  return encodeURI("" + e)
    .replace(ds, "|")
    .replace(ls, "[")
    .replace(as, "]");
}
function gs(e) {
  return ms(e)
    .replace(ss, "%2B")
    .replace(hs, "+")
    .replace(ts, "%23")
    .replace(ns, "%26")
    .replace(us, "`")
    .replace(ps, "{")
    .replace(fs, "}")
    .replace(cs, "^");
}
function vs(e) {
  return null == e
    ? ""
    : (function (e) {
        return ms(e).replace(ts, "%23").replace(is, "%3F");
      })(e).replace(os, "%2F");
}
function As(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {}
  return "" + e;
}
function ys(e) {
  const t = {};
  if ("" === e || "?" === e) return t;
  const n = ("?" === e[0] ? e.slice(1) : e).split("&");
  for (let o = 0; o < n.length; ++o) {
    const e = n[o].replace(ss, " "),
      r = e.indexOf("="),
      i = As(r < 0 ? e : e.slice(0, r)),
      s = r < 0 ? null : As(e.slice(r + 1));
    if (i in t) {
      let e = t[i];
      di(e) || (e = t[i] = [e]), e.push(s);
    } else t[i] = s;
  }
  return t;
}
function bs(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (((n = gs(n).replace(rs, "%3D")), null == o)) {
      void 0 !== o && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (di(o) ? o.map((e) => e && gs(e)) : [o && gs(o)]).forEach((e) => {
      void 0 !== e &&
        ((t += (t.length ? "&" : "") + n), null != e && (t += "=" + e));
    });
  }
  return t;
}
function ws(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    void 0 !== o &&
      (t[n] = di(o)
        ? o.map((e) => (null == e ? null : "" + e))
        : null == o
        ? o
        : "" + o);
  }
  return t;
}
const xs = Symbol(""),
  _s = Symbol(""),
  Ps = Symbol(""),
  Us = Symbol(""),
  Cs = Symbol("");
function ks() {
  let e = [];
  return {
    add: function (t) {
      return (
        e.push(t),
        () => {
          const n = e.indexOf(t);
          n > -1 && e.splice(n, 1);
        }
      );
    },
    list: () => e,
    reset: function () {
      e = [];
    },
  };
}
function Gs(e, t, n, o, r) {
  const i = o && (o.enterCallbacks[r] = o.enterCallbacks[r] || []);
  return () =>
    new Promise((s, l) => {
      const a = (e) => {
          var a;
          !1 === e
            ? l(Ri(4, { from: n, to: t }))
            : e instanceof Error
            ? l(e)
            : "string" == typeof (a = e) || (a && "object" == typeof a)
            ? l(Ri(2, { from: t, to: e }))
            : (i &&
                o.enterCallbacks[r] === i &&
                "function" == typeof e &&
                i.push(e),
              s());
        },
        c = e.call(o && o.instances[r], t, n, a);
      let u = Promise.resolve(c);
      e.length < 3 && (u = u.then(a)), u.catch((e) => l(e));
    });
}
function Ss(e, t, n, o) {
  const r = [];
  for (const s of e)
    for (const e in s.components) {
      let l = s.components[e];
      if ("beforeRouteEnter" === t || s.instances[e])
        if (
          "object" == typeof (i = l) ||
          "displayName" in i ||
          "props" in i ||
          "__vccOpts" in i
        ) {
          const i = (l.__vccOpts || l)[t];
          i && r.push(Gs(i, n, o, s, e));
        } else {
          let i = l();
          r.push(() =>
            i.then((r) => {
              if (!r)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${e}" at "${s.path}"`)
                );
              const i =
                (l = r).__esModule || "Module" === l[Symbol.toStringTag]
                  ? r.default
                  : r;
              var l;
              s.components[e] = i;
              const a = (i.__vccOpts || i)[t];
              return a && Gs(a, n, o, s, e)();
            })
          );
        }
    }
  var i;
  return r;
}
function Es(e) {
  const t = un(Ps),
    n = un(Us),
    o = Cr(() => t.resolve(_t(e.to))),
    r = Cr(() => {
      const { matched: e } = o.value,
        { length: t } = e,
        r = e[t - 1],
        i = n.matched;
      if (!r || !i.length) return -1;
      const s = i.findIndex(gi.bind(null, r));
      if (s > -1) return s;
      const l = Ms(e[t - 2]);
      return t > 1 && Ms(r) === l && i[i.length - 1].path !== l
        ? i.findIndex(gi.bind(null, e[t - 2]))
        : s;
    }),
    i = Cr(
      () =>
        r.value > -1 &&
        (function (e, t) {
          for (const n in t) {
            const o = t[n],
              r = e[n];
            if ("string" == typeof o) {
              if (o !== r) return !1;
            } else if (
              !di(r) ||
              r.length !== o.length ||
              o.some((e, t) => e !== r[t])
            )
              return !1;
          }
          return !0;
        })(n.params, o.value.params)
    ),
    s = Cr(
      () =>
        r.value > -1 &&
        r.value === n.matched.length - 1 &&
        vi(n.params, o.value.params)
    );
  return {
    route: o,
    href: Cr(() => o.value.href),
    isActive: i,
    isExactActive: s,
    navigate: function (n = {}) {
      return (function (e) {
        if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
        if (e.defaultPrevented) return;
        if (void 0 !== e.button && 0 !== e.button) return;
        if (e.currentTarget && e.currentTarget.getAttribute) {
          const t = e.currentTarget.getAttribute("target");
          if (/\b_blank\b/i.test(t)) return;
        }
        e.preventDefault && e.preventDefault();
        return !0;
      })(n)
        ? t[_t(e.replace) ? "replace" : "push"](_t(e.to)).catch(pi)
        : Promise.resolve();
    },
  };
}
const Ts = kn({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: { type: [String, Object], required: !0 },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: { type: String, default: "page" },
  },
  useLink: Es,
  setup(e, { slots: t }) {
    const n = it(Es(e)),
      { options: o } = un(Ps),
      r = Cr(() => ({
        [Ls(e.activeClass, o.linkActiveClass, "router-link-active")]:
          n.isActive,
        [Ls(
          e.exactActiveClass,
          o.linkExactActiveClass,
          "router-link-exact-active"
        )]: n.isExactActive,
      }));
    return () => {
      const o = t.default && t.default(n);
      return e.custom
        ? o
        : kr(
            "a",
            {
              "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
              href: n.href,
              onClick: n.navigate,
              class: r.value,
            },
            o
          );
    };
  },
});
function Ms(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const Ls = (e, t, n) => (null != e ? e : null != t ? t : n);
function Os(e, t) {
  if (!e) return null;
  const n = e(t);
  return 1 === n.length ? n[0] : n;
}
const $s = kn({
  name: "RouterView",
  inheritAttrs: !1,
  props: { name: { type: String, default: "default" }, route: Object },
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: n }) {
    const o = un(Cs),
      r = Cr(() => e.route || o.value),
      i = un(_s, 0),
      s = Cr(() => {
        let e = _t(i);
        const { matched: t } = r.value;
        let n;
        for (; (n = t[e]) && !n.components; ) e++;
        return e;
      }),
      l = Cr(() => r.value.matched[s.value]);
    cn(
      _s,
      Cr(() => s.value + 1)
    ),
      cn(xs, l),
      cn(Cs, r);
    const a = yt();
    return (
      hn(
        () => [a.value, l.value, e.name],
        ([e, t, n], [o, r, i]) => {
          t &&
            ((t.instances[n] = e),
            r &&
              r !== t &&
              e &&
              e === o &&
              (t.leaveGuards.size || (t.leaveGuards = r.leaveGuards),
              t.updateGuards.size || (t.updateGuards = r.updateGuards))),
            !e ||
              !t ||
              (r && gi(t, r) && o) ||
              (t.enterCallbacks[n] || []).forEach((t) => t(e));
        },
        { flush: "post" }
      ),
      () => {
        const o = r.value,
          i = e.name,
          s = l.value,
          c = s && s.components[i];
        if (!c) return Os(n.default, { Component: c, route: o });
        const u = s.props[i],
          p = u
            ? !0 === u
              ? o.params
              : "function" == typeof u
              ? u(o)
              : u
            : null,
          d = kr(
            c,
            ci({}, p, t, {
              onVnodeUnmounted: (e) => {
                e.component.isUnmounted && (s.instances[i] = null);
              },
              ref: a,
            })
          );
        return Os(n.default, { Component: d, route: o }) || d;
      }
    );
  },
});
function Fs(e) {
  const t = Zi(e.routes, e),
    n = e.parseQuery || ys,
    o = e.stringifyQuery || bs,
    r = e.history,
    i = ks(),
    s = ks(),
    l = ks(),
    a = bt(Li);
  let c = Li;
  ai &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = ui.bind(null, (e) => "" + e),
    p = ui.bind(null, vs),
    d = ui.bind(null, As);
  function f(e, i) {
    if (((i = ci({}, i || a.value)), "string" == typeof e)) {
      const o = mi(n, e, i.path),
        s = t.resolve({ path: o.path }, i),
        l = r.createHref(o.fullPath);
      return ci(o, s, {
        params: d(s.params),
        hash: As(o.hash),
        redirectedFrom: void 0,
        href: l,
      });
    }
    let s;
    if ("path" in e) s = ci({}, e, { path: mi(n, e.path, i.path).path });
    else {
      const t = ci({}, e.params);
      for (const e in t) null == t[e] && delete t[e];
      (s = ci({}, e, { params: p(e.params) })), (i.params = p(i.params));
    }
    const l = t.resolve(s, i),
      c = e.hash || "";
    l.params = u(d(l.params));
    const f = (function (e, t) {
      const n = t.query ? e(t.query) : "";
      return t.path + (n && "?") + n + (t.hash || "");
    })(
      o,
      ci({}, e, {
        hash:
          ((h = c), ms(h).replace(ps, "{").replace(fs, "}").replace(cs, "^")),
        path: l.path,
      })
    );
    var h;
    const m = r.createHref(f);
    return ci(
      { fullPath: f, hash: c, query: o === bs ? ws(e.query) : e.query || {} },
      l,
      { redirectedFrom: void 0, href: m }
    );
  }
  function h(e) {
    return "string" == typeof e ? mi(n, e, a.value.path) : ci({}, e);
  }
  function m(e, t) {
    if (c !== e) return Ri(8, { from: t, to: e });
  }
  function g(e) {
    return A(e);
  }
  function v(e) {
    const t = e.matched[e.matched.length - 1];
    if (t && t.redirect) {
      const { redirect: n } = t;
      let o = "function" == typeof n ? n(e) : n;
      return (
        "string" == typeof o &&
          ((o = o.includes("?") || o.includes("#") ? (o = h(o)) : { path: o }),
          (o.params = {})),
        ci(
          { query: e.query, hash: e.hash, params: "path" in o ? {} : e.params },
          o
        )
      );
    }
  }
  function A(e, t) {
    const n = (c = f(e)),
      r = a.value,
      i = e.state,
      s = e.force,
      l = !0 === e.replace,
      u = v(n);
    if (u)
      return A(
        ci(h(u), {
          state: "object" == typeof u ? ci({}, i, u.state) : i,
          force: s,
          replace: l,
        }),
        t || n
      );
    const p = n;
    let d;
    return (
      (p.redirectedFrom = t),
      !s &&
        (function (e, t, n) {
          const o = t.matched.length - 1,
            r = n.matched.length - 1;
          return (
            o > -1 &&
            o === r &&
            gi(t.matched[o], n.matched[r]) &&
            vi(t.params, n.params) &&
            e(t.query) === e(n.query) &&
            t.hash === n.hash
          );
        })(o, r, n) &&
        ((d = Ri(16, { to: p, from: r })), E(r, r, !0, !1)),
      (d ? Promise.resolve(d) : b(p, r))
        .catch((e) => (Bi(e) ? (Bi(e, 2) ? e : S(e)) : G(e, p, r)))
        .then((e) => {
          if (e) {
            if (Bi(e, 2))
              return A(
                ci({ replace: l }, h(e.to), {
                  state: "object" == typeof e.to ? ci({}, i, e.to.state) : i,
                  force: s,
                }),
                t || p
              );
          } else e = x(p, r, !0, l, i);
          return w(p, r, e), e;
        })
    );
  }
  function y(e, t) {
    const n = m(e, t);
    return n ? Promise.reject(n) : Promise.resolve();
  }
  function b(e, t) {
    let n;
    const [o, r, l] = (function (e, t) {
      const n = [],
        o = [],
        r = [],
        i = Math.max(t.matched.length, e.matched.length);
      for (let s = 0; s < i; s++) {
        const i = t.matched[s];
        i && (e.matched.find((e) => gi(e, i)) ? o.push(i) : n.push(i));
        const l = e.matched[s];
        l && (t.matched.find((e) => gi(e, l)) || r.push(l));
      }
      return [n, o, r];
    })(e, t);
    n = Ss(o.reverse(), "beforeRouteLeave", e, t);
    for (const i of o)
      i.leaveGuards.forEach((o) => {
        n.push(Gs(o, e, t));
      });
    const a = y.bind(null, e, t);
    return (
      n.push(a),
      Rs(n)
        .then(() => {
          n = [];
          for (const o of i.list()) n.push(Gs(o, e, t));
          return n.push(a), Rs(n);
        })
        .then(() => {
          n = Ss(r, "beforeRouteUpdate", e, t);
          for (const o of r)
            o.updateGuards.forEach((o) => {
              n.push(Gs(o, e, t));
            });
          return n.push(a), Rs(n);
        })
        .then(() => {
          n = [];
          for (const o of e.matched)
            if (o.beforeEnter && !t.matched.includes(o))
              if (di(o.beforeEnter))
                for (const r of o.beforeEnter) n.push(Gs(r, e, t));
              else n.push(Gs(o.beforeEnter, e, t));
          return n.push(a), Rs(n);
        })
        .then(
          () => (
            e.matched.forEach((e) => (e.enterCallbacks = {})),
            (n = Ss(l, "beforeRouteEnter", e, t)),
            n.push(a),
            Rs(n)
          )
        )
        .then(() => {
          n = [];
          for (const o of s.list()) n.push(Gs(o, e, t));
          return n.push(a), Rs(n);
        })
        .catch((e) => (Bi(e, 8) ? e : Promise.reject(e)))
    );
  }
  function w(e, t, n) {
    for (const o of l.list()) o(e, t, n);
  }
  function x(e, t, n, o, i) {
    const s = m(e, t);
    if (s) return s;
    const l = t === Li,
      c = ai ? history.state : {};
    n &&
      (o || l
        ? r.replace(e.fullPath, ci({ scroll: l && c && c.scroll }, i))
        : r.push(e.fullPath, i)),
      (a.value = e),
      E(e, t, n, l),
      S();
  }
  let _;
  function P() {
    _ ||
      (_ = r.listen((e, t, n) => {
        if (!O.listening) return;
        const o = f(e),
          i = v(o);
        if (i) return void A(ci(i, { replace: !0 }), o).catch(pi);
        c = o;
        const s = a.value;
        var l, u;
        ai && ((l = Si(s.fullPath, n.delta)), (u = ki()), Ei.set(l, u)),
          b(o, s)
            .catch((e) =>
              Bi(e, 12)
                ? e
                : Bi(e, 2)
                ? (A(e.to, o)
                    .then((e) => {
                      Bi(e, 20) &&
                        !n.delta &&
                        n.type === bi.pop &&
                        r.go(-1, !1);
                    })
                    .catch(pi),
                  Promise.reject())
                : (n.delta && r.go(-n.delta, !1), G(e, o, s))
            )
            .then((e) => {
              (e = e || x(o, s, !1)) &&
                (n.delta && !Bi(e, 8)
                  ? r.go(-n.delta, !1)
                  : n.type === bi.pop && Bi(e, 20) && r.go(-1, !1)),
                w(o, s, e);
            })
            .catch(pi);
      }));
  }
  let U,
    C = ks(),
    k = ks();
  function G(e, t, n) {
    S(e);
    const o = k.list();
    return (
      o.length ? o.forEach((o) => o(e, t, n)) : console.error(e),
      Promise.reject(e)
    );
  }
  function S(e) {
    return (
      U ||
        ((U = !e),
        P(),
        C.list().forEach(([t, n]) => (e ? n(e) : t())),
        C.reset()),
      e
    );
  }
  function E(t, n, o, r) {
    const { scrollBehavior: i } = e;
    if (!ai || !i) return Promise.resolve();
    const s =
      (!o &&
        (function (e) {
          const t = Ei.get(e);
          return Ei.delete(e), t;
        })(Si(t.fullPath, 0))) ||
      ((r || !o) && history.state && history.state.scroll) ||
      null;
    return It()
      .then(() => i(t, n, s))
      .then((e) => e && Gi(e))
      .catch((e) => G(e, t, n));
  }
  const T = (e) => r.go(e);
  let M;
  const L = new Set(),
    O = {
      currentRoute: a,
      listening: !0,
      addRoute: function (e, n) {
        let o, r;
        return (
          Mi(e) ? ((o = t.getRecordMatcher(e)), (r = n)) : (r = e),
          t.addRoute(r, o)
        );
      },
      removeRoute: function (e) {
        const n = t.getRecordMatcher(e);
        n && t.removeRoute(n);
      },
      hasRoute: function (e) {
        return !!t.getRecordMatcher(e);
      },
      getRoutes: function () {
        return t.getRoutes().map((e) => e.record);
      },
      resolve: f,
      options: e,
      push: g,
      replace: function (e) {
        return g(ci(h(e), { replace: !0 }));
      },
      go: T,
      back: () => T(-1),
      forward: () => T(1),
      beforeEach: i.add,
      beforeResolve: s.add,
      afterEach: l.add,
      onError: k.add,
      isReady: function () {
        return U && a.value !== Li
          ? Promise.resolve()
          : new Promise((e, t) => {
              C.add([e, t]);
            });
      },
      install(e) {
        e.component("RouterLink", Ts),
          e.component("RouterView", $s),
          (e.config.globalProperties.$router = this),
          Object.defineProperty(e.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => _t(a),
          }),
          ai &&
            !M &&
            a.value === Li &&
            ((M = !0), g(r.location).catch((e) => {}));
        const t = {};
        for (const o in Li) t[o] = Cr(() => a.value[o]);
        e.provide(Ps, this), e.provide(Us, it(t)), e.provide(Cs, a);
        const n = e.unmount;
        L.add(e),
          (e.unmount = function () {
            L.delete(e),
              L.size < 1 &&
                ((c = Li),
                _ && _(),
                (_ = null),
                (a.value = Li),
                (M = !1),
                (U = !1)),
              n();
          });
      },
    };
  return O;
}
function Rs(e) {
  return e.reduce((e, t) => e.then(() => t()), Promise.resolve());
}
function Bs() {
  let e, t;
  const n = new Promise((n, o) => {
    (e = n), (t = o);
  });
  return (n.resolve = e), (n.reject = t), n;
}
function js(e) {
  return new Promise((t) => setTimeout(t, e));
}
function Is(e, t = 1, n = {}, o) {
  const r = n.bind || null,
    i = null == n.trail || !!n.trail,
    s = null == n.tail || !!n.tail;
  let l,
    a,
    c,
    u = null,
    p = i,
    d = !1;
  function f() {
    (u = null),
      i && !d && (p = !0),
      e.call(r, l, a, c),
      o && d && s && ((d = !1), (u = setTimeout(f, t)));
  }
  return function (n, s, h) {
    o || (clearTimeout(u), (u = null)),
      (l = n),
      (a = s),
      (c = h),
      i && p && ((p = !1), e.call(r, l, a, c)),
      null === u ? (u = setTimeout(f, t)) : o && (d = !0);
  };
}
const Ds = (e) => e,
  Ns = async ({ exitPrevious: e, toggleClass: t }) => {
    await e(), await t();
  },
  Vs = async ({ toggleClass: e, done: t }) => {
    e(), t();
  },
  Hs = { enter: 1e3, leave: 500, done: 0 },
  qs = Symbol("CurrentNRV"),
  Xs = Symbol("NRVComponentKey"),
  Ws = (e) => {
    var t;
    return null ==
      (t =
        null ==
        (e = void 0 === e ? vr() : (null == e ? void 0 : e.component) ?? e)
          ? void 0
          : e.provides)
      ? void 0
      : t[Xs];
  },
  Zs = kn({
    name: "NiceViewContainer",
    props: {
      tag: { type: String, default: "section" },
      name: { type: String, default: null },
      duration: { type: [Object, Number], default: null },
    },
    setup(e, { slots: t }) {
      const n = vr(),
        o = null == n ? void 0 : n.provides[qs],
        r = Ws();
      return (
        null != e.name &&
          ((r.classes[r.prefix + "-" + r.name] = !1),
          (r.name = e.name),
          (r.classes[r.prefix + "-" + r.name] = !0)),
        o &&
          r &&
          ((r.containerInstance = n),
          null != e.duration && o.assignDurations(r.durations, e.duration),
          In(() => {
            r.containerInstance === n && (r.containerInstance = null);
          })),
        () => kr(e.tag, { class: r.classes ?? null }, t.default())
      );
    },
  }),
  zs = kn({
    name: "NRVComponentWrapper",
    inheritAttrs: !1,
    props: ["context", "name", "duration"],
    setup(e, { slots: t }) {
      const n = ((e, { context: t, name: n } = {}) => {
        const o = {
          prefix: e,
          name: n ?? "",
          context: t,
          classes: {
            "enter-from": !1,
            "enter-active": !1,
            "enter-to": !1,
            "leave-active": !1,
          },
        };
        return (
          (o.classes[e] = !0), null != n && (o.classes[e + `-${n}`] = !0), o
        );
      })(un(qs).prefix, dt(e));
      return (
        cn(Xs, n),
        In(() => {
          (n.enterCallback = Ns), (n.leaveCallback = Vs), (n.context = null);
        }),
        t.default
      );
    },
  }),
  Ks = kn({
    name: "NiceViewManager",
    inheritAttrs: !1,
    props: {
      name: { type: String, default: "default" },
      customKey: { type: Function, default: null },
      useKeyIndex: { type: Boolean, default: !0 },
      prefix: { type: String, default: "view" },
      route: { type: Object, default: null },
    },
    setup(e, { attrs: t }) {
      const n = un(Cs),
        o = Cr(() => e.route || n.value),
        r = un(_s, 0),
        i = Cr(() => {
          const { matched: e } = o.value;
          let t,
            n = _t(r);
          for (; (t = e[n]) && !t.components; ) n++;
          return n;
        }),
        s = Cr(() => o.value.matched[i.value]);
      cn(
        _s,
        Cr(() => i.value + 1)
      ),
        cn(xs, s),
        cn(Cs, o);
      const l = yt();
      hn(
        () => [l.value, s.value, e.name],
        ([e, t, n], [o, r, i]) => {
          var s, l;
          t &&
            ((t.instances[n] = e),
            r &&
              r !== t &&
              e &&
              e === o &&
              (console.log("leave guards, update guards"),
              t.leaveGuards.size || (t.leaveGuards = r.leaveGuards),
              t.updateGuards.size || (t.updateGuards = r.updateGuards))),
            !e ||
              !t ||
              (r &&
                ((l = r), ((s = t).aliasOf || s) === (l.aliasOf || l)) &&
                o) ||
              (t.enterCallbacks[n] || []).forEach((t) => t(e));
        },
        { flush: "post" }
      );
      const a = bt([]);
      let c = null,
        u = {},
        p = 0,
        d = null,
        f = 0;
      function h() {
        let e = !1;
        const t = [];
        for (let n = 0; n < a.value.length; n++) {
          const o = a.value[n],
            r = null == o ? void 0 : o.component,
            i = Ws(o);
          (o.__nrv_removable && !i) ||
          r.isUnmounted ||
          (null == i ? void 0 : i.hasLeft)
            ? (e = !0)
            : t.push(o);
        }
        e && (a.value = t);
      }
      function m(e, t) {
        if (null != t)
          if ("number" == typeof t) for (let n in e) e[n] = t;
          else "object" == typeof t && Object.assign(e, t);
      }
      function g(e, t, n) {
        if ((Object.assign(t, n), null == e ? void 0 : e.classList))
          for (let o in n) n[o] ? e.classList.add(o) : e.classList.remove(o);
      }
      return (
        qn((e) => (console.error(e), !1)),
        hn(
          () => [o.value],
          ([n]) => {
            var o;
            const r = e.name,
              i = s.value,
              v = i && (null == (o = i.components) ? void 0 : o[r]);
            if (!i) return;
            if (!v) return;
            const A = (function (t, n) {
              let o = "",
                r = 0;
              for (; r < t.matched.length; r++) {
                const e = t.matched[r];
                if (((o += e.path), e === n)) break;
              }
              let i = t.fullPath;
              const s = r < t.matched.length - 1;
              if (s) {
                u[o] ||
                  (u[o] = Zi([{ name: "_", path: o }], {}).getRoutes()[0]);
                const e = u[o];
                i = e.stringify(e.params);
              }
              i !== d && (f = (f + 1) | 0);
              return (
                (d = i),
                e.customKey
                  ? e.customKey({
                      route: t,
                      matchedRoute: n,
                      computedFullPath: i,
                      keyIndex: f,
                    })
                  : e.useKeyIndex
                  ? f + "|" + i
                  : i
              );
            })(n, i);
            if (A === c) return;
            c = A;
            const y = i.props[r],
              b = y
                ? !0 === y
                  ? n.params
                  : "function" == typeof y
                  ? y(n)
                  : y
                : null,
              w = (e) => {
                var t;
                (null == (t = e.component) ? void 0 : t.isUnmounted) &&
                  (i.instances[r] = null);
              },
              x = (_ = i.name ?? v.__name).charAt(0).toLowerCase() + _.slice(1);
            var _;
            const P = ft({ route: n, matchedRoute: i });
            let U = null;
            const C = (function () {
                let e,
                  t,
                  n = null;
                return { setup: o, mounted: r, dispose: i };
                function o(n) {
                  if (((e = null == n ? void 0 : n.component), e)) {
                    if (((t = Ws(e)), !t)) return {};
                    if (
                      !t.creating &&
                      (It().then(() => (t.creating = !1)),
                      (t.creating = !0),
                      Object.assign(t, {
                        enterCallback: Ns,
                        leaveCallback: Vs,
                        setCSSEnterClass: Ds,
                        setCSSLeaveClass: Ds,
                        exitLastOnly: !1,
                        durations: { ...Hs },
                        isHMR: !!t.initialized,
                        initialized: !0,
                      }),
                      t.queueOptions)
                    ) {
                      const e = t.queueOptions;
                      m(t.durations, e.duration),
                        null != e.exitLastOnly &&
                          (t.exitLastOnly = !!exitLastOnly),
                        "function" == typeof e.onEnter &&
                          (t.enterCallback = e.onEnter),
                        "function" == typeof e.onLeave &&
                          (t.leaveCallback = e.onLeave),
                        (t.queueOptions = null);
                    }
                  }
                }
                async function r(n, o) {
                  var r, i, s, l, c;
                  if (!t || t.mounting) return;
                  It().then(() => (t.mounting = !1)), (t.mounting = !0);
                  const u =
                    (null ==
                    (i =
                      null == (r = null == t ? void 0 : t.containerInstance)
                        ? void 0
                        : r.vnode)
                      ? void 0
                      : i.el) ??
                    (null == (s = null == e ? void 0 : e.vnode)
                      ? void 0
                      : s.el);
                  g(u, t.classes, { "enter-from": !0, "enter-active": !1 }),
                    u && u.offsetHeight;
                  const d = ++p,
                    f = a.value;
                  let m = -1,
                    v = f.length;
                  for (let e = 0; e < v; e++) {
                    const n = f[e];
                    if (Ws(n) === t) {
                      m = e;
                      break;
                    }
                  }
                  t.entering = !0;
                  const A = f[m],
                    y = f.slice(0, m);
                  let b = !1;
                  const w = ({ lastOnly: e, params: n = {} } = {}) => {
                      if (b) return;
                      (e = e ?? t.exitLastOnly), (b = !0);
                      const o = y.map((e) =>
                        (function (e, t, n) {
                          if (!e) return;
                          let o = e.__nrv_removable;
                          e.__nrv_removable = !0;
                          const r = e.component;
                          if (!r || r.isUnmounted) return h();
                          const i = Ws(e);
                          return !i || i.hasLeft
                            ? h()
                            : (i.leavingPromise ||
                                o ||
                                (i.leavingPromise = (async function (
                                  e,
                                  t,
                                  n = {}
                                ) {
                                  var o, r, i;
                                  const s = e.component,
                                    l = Ws(e);
                                  l.leaving = !0;
                                  const a =
                                    (null ==
                                    (r =
                                      null ==
                                      (o =
                                        null == l
                                          ? void 0
                                          : l.containerInstance)
                                        ? void 0
                                        : o.vnode)
                                      ? void 0
                                      : r.el) ??
                                    (null == (i = null == s ? void 0 : s.vnode)
                                      ? void 0
                                      : i.el);
                                  let c = !1;
                                  const u = Bs(),
                                    p = {
                                      el: a,
                                      from: l.context,
                                      to: Ws(t).context,
                                      toggleClass: l.setCSSLeaveClass,
                                      isCancelled: () => s.isUnmounted,
                                      params: n,
                                      done: ({
                                        delay: e,
                                        duration: t,
                                      } = {}) => (
                                        c ||
                                          ((c = !0),
                                          (e = e ?? t ?? l.durations.done)
                                            ? js(e).then(u.resolve)
                                            : u.resolve()),
                                        u
                                      ),
                                    },
                                    d = Promise.resolve()
                                      .then(() => l.leaveCallback(p))
                                      .then(() => {
                                        if (l.cssLeftAt) {
                                          const e =
                                              performance.now() - l.cssLeftAt,
                                            t = l.cssLeftDuration - e;
                                          if (t > 0)
                                            return new Promise((e) =>
                                              setTimeout(e, t)
                                            );
                                        }
                                      });
                                  return (
                                    d.then(() => {
                                      (l.hasLeft = !0), h();
                                    }),
                                    Promise.race([d, u])
                                  );
                                })(e, t, n)),
                              i.leavingPromise);
                        })(e, A, n)
                      );
                      return e ? o[o.length - 1] : Promise.all(o);
                    },
                    x = () =>
                      d !== p || t.leaving || t.hasLeft || e.isUnmounted,
                    _ = () => {
                      e.isUnmounted ||
                        g(u, t.classes, {
                          "enter-from": !1,
                          "enter-active": !1,
                        });
                    };
                  let P = !1,
                    U = null;
                  t.setCSSEnterClass = ({ duration: n } = {}) =>
                    U ||
                    (U = new Promise((o) => {
                      null == n && (n = t.durations.enter),
                        (P = !0),
                        (t.setCSSEnterClass = Ds),
                        g(u, t.classes, {
                          "enter-from": !1,
                          "enter-active": !0,
                        }),
                        n > 0
                          ? setTimeout(() => {
                              e.isUnmounted || (_(), o());
                            }, n)
                          : _();
                    }));
                  let C = null;
                  t.setCSSLeaveClass = ({ duration: n } = {}) =>
                    C ||
                    (C = new Promise((o) => {
                      null == n && (n = t.durations.leave),
                        (n = Math.max(t.durations.done, n)),
                        (t.cssLeftAt = performance.now()),
                        (t.cssLeftDuration = n),
                        (t.setCSSLeaveClass = Ds),
                        _(),
                        g(u, t.classes, { "leave-to": !0, "leave-active": !0 }),
                        n > 0
                          ? setTimeout(() => !e.isUnmounted && o(), n)
                          : o();
                    }));
                  const k =
                      (null == (l = y[y.length - 1]) ? void 0 : l.component) ??
                      null,
                    G = (null == (c = Ws(k)) ? void 0 : c.context) ?? null,
                    S = {
                      el: u,
                      from: G,
                      to: t.context,
                      isCancelled: x,
                      exitPrevious: w,
                      toggleClass: t.setCSSEnterClass,
                    };
                  await 0,
                    x() ||
                      (await t.enterCallback(S),
                      P || _(),
                      t.enterCallback === Ds && w());
                }
                function i() {
                  t && clearTimeout(n);
                }
              })(),
              k = kr(
                zs,
                { name: x, context: P, key: A },
                () =>
                  (U =
                    U ||
                    kr(v, {
                      ...b,
                      ...t,
                      onVnodeBeforeMount: C.setup,
                      onVnodeMounted: C.mounted,
                      onVnodeBeforeUnmount: C.dispose,
                      onVnodeUnmounted: w,
                      ref: l,
                    }))
              );
            a.value = [...a.value, k];
          },
          { flush: "pre", immediate: !0 }
        ),
        cn(qs, {
          prefix: e.prefix,
          setNiceViewOptions: function (e = {}) {
            if (!Ys()) return {};
            Ws().queueOptions = e;
          },
          assignDurations: m,
        }),
        function () {
          return a.value;
        }
      );
    },
  });
function Ys() {
  const e = vr();
  if (!(null == e ? void 0 : e.provides[qs])) return !1;
  if (!((null == e ? void 0 : e.parent.vnode.type) === zs)) return !1;
  return !!Ws();
}
function Qs(e = {}) {
  const t = vr(),
    n = null == t ? void 0 : t.provides[qs];
  return n ? n.setNiceViewOptions(e) : {};
}
const Js = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: () => {
          const e = it({
            counter: 0,
            isBigEggVisible: !1,
            isMenuVisible: !1,
            isCounterVisible: !1,
            score: 0,
            lose: !1,
            tutoVisible: !0,
            lastScore: 0,
            isAudioMuted: !1,
          });
          return (
            (e.isAudioMuted = !!+localStorage.getItem("audio-muted")),
            pn(() => localStorage.setItem("audio-muted", +!!e.isAudioMuted)),
            e
          );
        },
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  el = Object.assign({ "/app/store/index.js": Js }),
  tl = (e) => "object" == typeof e && !Array.isArray(e) && null !== e;
const nl = () => {},
  ol = { enter: nl, onProgress: nl, exit: nl };
function rl(e, t, n, o, r) {
  for (t = t.split ? t.split(".") : t, o = 0; o < t.length; o++)
    e = e ? e[t[o]] : r;
  return e === r ? n : e;
}
Math.random().toString(36).substr(2, 9),
  "undefined" != typeof VV_RECAPTCHA_KEY
    ? VV_RECAPTCHA_KEY
    : "undefined" != typeof RECAPTCHA_KEY && RECAPTCHA_KEY;
const il = {};
function sl(e, t, n) {
  const o = t && "object" == typeof t;
  (t = o ? t : null), (n = o || void 0 !== n ? n : t);
  const r = window.__DATA || il,
    i = rl(r, e, rl(r.page, e, rl(r.site, e, rl(r.project, e, n ? e : ""))));
  return t
    ? (function (e, t = {}) {
        return e.includes("{{")
          ? e.replace(/{{([ a-z0-9+_.-]+)}}/gi, (e, n) => {
              let o = null,
                r = 0;
              const i = (n = n.trim()).match(/([+*/-]) ?([0-9]*)$/i);
              i &&
                ((n = n.slice(0, -i[0].length).trim()),
                (o = i[1]),
                (r = parseFloat(i[2])));
              let s = rl(t, n);
              return null == s
                ? ""
                : (isNaN(parseFloat(s)) ||
                    ("-" === o
                      ? (s -= r)
                      : "+" === o
                      ? (s += r)
                      : "*" === o
                      ? (s *= r)
                      : "/" === o && (s /= r)),
                  s);
            })
          : e;
      })(i, t)
    : i;
}
/*!*********************************************************************
 * This Source Code Form is copyright of 51 Degrees Mobile Experts Limited.
 * Copyright 2019 51 Degrees Mobile Experts Limited, 9 Greyfriars Rd,
 * Reading, Berkshire, RG1 1NU.
 *
 * This Source Code Form is the subject of the following patents and patent
 * applications, owned by 51 Degrees Mobile Experts Limited of 9 Greyfriars
 * Rd, Reading, Berkshire, RG1 1NU:
 * GB1905888.2 and EP19192975.1.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0.
 *
 * If a copy of the MPL was not distributed with this file, You can obtain
 * one at http://mozilla.org/MPL/2.0/.
 *
 * This Source Code Form is "Incompatible With Secondary Licenses", as
 * defined by the Mozilla Public License, v. 2.0.
 ********************************************************************** */
function ll(e) {
  /*! VERSION = 1.620628 */
  let t = [
    {
      x: "Unknown",
      m: function (e) {
        return (function () {
          let e = /iPhone|iPad|Macintosh/.exec(navigator.userAgent);
          if (e && e.length > 0) return e[0];
          return "";
        })();
      },
      n: [4, 2, 1, 3],
    },
    {
      x: "Apple A7 GPU|Apple A8 GPU|Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A12 GPU|Apple A13 GPU|Apple A14 GPU|Apple A15 GPU",
      m: function (e) {
        return l();
      },
      n: [10, 11, 12, 15, 14, 6, 7, 8, 5, 9, 13],
      v: ["iPhone"],
    },
    {
      x: "Apple A7 GPU|Apple A8 GPU|Apple A9X GPU|Apple A10X GPU|Apple A9 GPU|Apple A12X GPU|Apple A10 GPU|Apple A12 GPU|Apple A8X GPU|Apple M1 GPU|Apple A14 GPU|Apple A12Z GPU|Apple A15 GPU|Apple A13 GPU",
      m: function (e) {
        return l();
      },
      n: [22, 18, 21, 20, 19, 17, 16],
      v: ["iPad"],
    },
    {
      x: "Apple A9X GPU|Apple A10X GPU|Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A12X GPU|Apple A12 GPU|Apple A8 GPU|Apple A8X GPU|Apple A13 GPU|Apple A14 GPU|Apple M1 GPU|Apple A12Z GPU|Apple A15 GPU",
      m: function (e) {
        return l();
      },
      n: [
        22, 18, 21, 10, 11, 12, 15, 20, 19, 24, 27, 14, 17, 25, 26, 9, 13, 23,
      ],
      v: ["Macintosh"],
    },
    { x: "Apple A10 GPU", v: ["iPod Touch"] },
    {
      x: "Apple A7 GPU|Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A8 GPU|Apple A13 GPU|Apple A15 GPU",
      m: function (e) {
        return a();
      },
      n: [28, 29],
      v: [1136],
    },
    {
      x: "Apple A8 GPU|Apple A10 GPU|Apple A11 GPU|Apple A9 GPU",
      m: function (e) {
        return a();
      },
      n: [30, 31],
      v: [2001],
    },
    {
      x: "Apple A8 GPU|Apple A9 GPU|Apple A10 GPU|Apple A11 GPU",
      m: function (e) {
        return a();
      },
      n: [32, 33],
      v: [2208],
    },
    {
      x: "Apple A8 GPU|Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A13 GPU|Apple A15 GPU",
      m: function (e) {
        return a();
      },
      n: [34, 35],
      v: [1334],
    },
    {
      x: "Apple A11 GPU|Apple A12 GPU|Apple A13 GPU|Apple A14 GPU|Apple A15 GPU",
      m: function (e) {
        return n();
      },
      n: [37, 38, 39, 40, 36, 41],
      v: [2436],
    },
    {
      x: "Apple A12 GPU|Apple A13 GPU",
      m: function (e) {
        return n();
      },
      n: [42, 36],
      v: [2688],
    },
    {
      x: "Apple A12 GPU|Apple A13 GPU",
      m: function (e) {
        return n();
      },
      n: [44, 43],
      v: [1624],
    },
    {
      x: "Apple A12 GPU|Apple A13 GPU",
      m: function (e) {
        return n();
      },
      n: [44, 43],
      v: [1792],
    },
    {
      x: "Apple A11 GPU|Apple A12 GPU|Apple A14 GPU|Apple A13 GPU|Apple A15 GPU",
      m: function (e) {
        return n();
      },
      n: [47, 45, 36, 46, 41],
      v: [2079],
    },
    {
      x: "Apple A14 GPU|Apple A15 GPU",
      m: function (e) {
        return n();
      },
      n: [48, 39, 40],
      v: [2532],
    },
    {
      x: "Apple A14 GPU|Apple A15 GPU",
      m: function (e) {
        return n();
      },
      n: [39, 49],
      v: [2778],
    },
    {
      x: "Apple A7 GPU|Apple A8 GPU|Apple A9X GPU|Apple A10X GPU|Apple A9 GPU|Apple A12X GPU|Apple A10 GPU|Apple A12 GPU|Apple A8X GPU|Apple M1 GPU|Apple A12Z GPU",
      m: function (e) {
        return a();
      },
      n: [51, 50],
      v: [2048],
    },
    {
      x: "Apple A9X GPU|Apple A10X GPU|Apple A12X GPU|Apple M1 GPU|Apple A12Z GPU",
      m: function (e) {
        return a();
      },
      n: [52, 53],
      v: [2732],
    },
    {
      x: "Apple A10X GPU|Apple A12 GPU",
      m: function (e) {
        return s();
      },
      n: [55, 54],
      v: [2224],
    },
    {
      x: "Apple A12X GPU|Apple M1 GPU|Apple A12Z GPU",
      m: function (e) {
        return n();
      },
      n: [57, 56],
      v: [2388],
    },
    {
      x: "Apple A10 GPU|Apple A12 GPU|Apple A13 GPU",
      m: function (e) {
        return s();
      },
      n: [58, 59, 60],
      v: [2160],
    },
    {
      x: "Apple A14 GPU|Apple M1 GPU",
      m: function (e) {
        return n();
      },
      n: [39, 62, 61],
      v: [2360],
    },
    { x: "Apple A15 GPU", v: [2266] },
    {
      x: "Apple A9X GPU|Apple A10X GPU|Apple A9 GPU|Apple A12X GPU|Apple A10 GPU|Apple A12 GPU|Apple A8 GPU|Apple A8X GPU|Apple M1 GPU|Apple A12Z GPU",
      m: function (e) {
        return a();
      },
      n: [63, 51],
      v: [2048],
    },
    {
      x: "Apple A9 GPU|Apple A10 GPU|Apple A11 GPU",
      m: function (e) {
        return a();
      },
      n: [64, 33],
      v: [2208],
    },
    {
      x: "Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A13 GPU|Apple A15 GPU",
      m: function (e) {
        return a();
      },
      n: [64, 35],
      v: [1334],
    },
    {
      x: "Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A13 GPU|Apple A15 GPU",
      m: function (e) {
        return a();
      },
      n: [65, 29],
      v: [1136],
    },
    {
      x: "Apple A10 GPU|Apple A11 GPU|Apple A9 GPU",
      m: function (e) {
        return a();
      },
      n: [64, 31],
      v: [2001],
    },
    {
      x: "Apple A7 GPU|Apple A9 GPU|Apple A8 GPU",
      m: function (e) {
        return s();
      },
      n: [66, 68, 67, 69, 70],
      v: ["srgb"],
    },
    {
      x: "Apple A10 GPU|Apple A11 GPU|Apple A13 GPU|Apple A15 GPU",
      m: function (e) {
        return n();
      },
      n: [71, 37, 44, 73, 72],
      v: ["p3"],
    },
    {
      x: "Apple A8 GPU|Apple A9 GPU",
      m: function (e) {
        return s();
      },
      n: [74, 75],
      v: ["srgb"],
    },
    {
      x: "Apple A10 GPU|Apple A11 GPU",
      m: function (e) {
        return s();
      },
      n: [76, 77],
      v: ["p3"],
    },
    {
      x: "Apple A8 GPU|Apple A9 GPU",
      m: function (e) {
        return s();
      },
      n: [78, 79],
      v: ["srgb"],
    },
    {
      x: "Apple A10 GPU|Apple A11 GPU",
      m: function (e) {
        return s();
      },
      n: [76, 80],
      v: ["p3"],
    },
    {
      x: "Apple A8 GPU|Apple A9 GPU",
      m: function (e) {
        return s();
      },
      n: [81, 82],
      v: ["srgb"],
    },
    {
      x: "Apple A10 GPU|Apple A11 GPU|Apple A13 GPU|Apple A15 GPU",
      m: function (e) {
        return n();
      },
      n: [71, 37, 44, 73, 72],
      v: ["p3"],
    },
    { x: "Apple A12 GPU", v: [958581112, 2301174800, 4085158452] },
    { x: "Apple A11 GPU", v: [367695777, 411650080, 1220644697] },
    { x: "Apple A13 GPU", v: [4193218782] },
    { x: "Apple A14 GPU", v: [105985484] },
    { x: "Apple A14 GPU", v: [3403189785] },
    { x: "Apple A14 GPU|Apple A15 GPU", v: [2364051618] },
    { x: "Apple A13 GPU", v: [352823931, 4193218782] },
    { x: "Apple A12 GPU", v: [958581112, 2301174800, 3403189785, 4085158452] },
    { x: "Apple A13 GPU", v: [352823931, 3335845976, 4193218782] },
    { x: "Apple A11 GPU", v: [367695777, 411650080] },
    { x: "Apple A14 GPU", v: [105985484, 679860869, 3403189785] },
    { x: "Apple A13 GPU", v: [352823931] },
    { x: "Apple A15 GPU", v: [679860869] },
    { x: "Apple A15 GPU", v: [1407135659] },
    {
      x: "Apple A7 GPU|Apple A8 GPU|Apple A9X GPU|Apple A9 GPU|Apple A10 GPU|Apple A8X GPU",
      m: function (e) {
        return s();
      },
      n: [86, 83, 87, 88, 89, 91, 84, 85, 90, 66],
      v: ["srgb"],
    },
    {
      x: "Apple A10X GPU|Apple A9X GPU|Apple A12X GPU|Apple A12 GPU|Apple M1 GPU|Apple A12Z GPU",
      m: function (e) {
        return n();
      },
      n: [96, 57, 93, 92, 94, 95],
      v: ["p3"],
    },
    { x: "Apple A9X GPU", v: ["srgb"] },
    {
      x: "Apple A10X GPU|Apple A12X GPU|Apple M1 GPU|Apple A12Z GPU",
      m: function (e) {
        return n();
      },
      n: [98, 97, 96, 99, 100],
      v: ["p3"],
    },
    { x: "Apple A10X GPU", v: [63583436, 2114570256, 3129316290] },
    { x: "Apple A12 GPU", v: [1349146759, 2917249763] },
    { x: "Apple A12X GPU|Apple A12Z GPU", v: [4085158452] },
    { x: "Apple M1 GPU", v: [105985484, 3403189785] },
    { x: "Apple A10 GPU", v: [2114570256] },
    { x: "Apple A12 GPU", v: [1349146759] },
    {
      x: "Apple A12 GPU|Apple A13 GPU",
      m: function (e) {
        return n();
      },
      n: [102, 101],
      v: [2206992415],
    },
    {
      x: "Apple A14 GPU|Apple M1 GPU",
      m: function (e) {
        return s();
      },
      n: [103, 104],
      v: [3403189785],
    },
    { x: "Apple M1 GPU", v: [2364051618] },
    {
      x: "Apple A9X GPU|Apple A9 GPU|Apple A10 GPU|Apple A8 GPU|Apple A8X GPU",
      m: function (e) {
        return n();
      },
      n: [111, 106, 108, 107, 105, 109, 110],
      v: ["srgb"],
    },
    { x: "Apple A9 GPU", v: ["srgb"] },
    {
      x: "Apple A9 GPU|Apple A10 GPU",
      m: function (e) {
        return s();
      },
      n: [112, 69, 70],
      v: ["srgb"],
    },
    { x: "Apple A7 GPU", v: [857422828, 1915583345] },
    { x: "Apple A9 GPU", v: [46663968, 3129316290] },
    { x: "Apple A8 GPU", v: [839732043, 3816812018, 4125234388] },
    { x: "Apple A9 GPU", v: [2114570256] },
    { x: "Apple A9 GPU", v: [63583436] },
    { x: "Apple A10 GPU", v: [583354101, 3458129248, 3928876783] },
    {
      x: "Apple A13 GPU|Apple A15 GPU",
      m: function (e) {
        return s();
      },
      n: [113, 114],
      v: [3403189785],
    },
    { x: "Apple A15 GPU", v: [2364051618] },
    { x: "Apple A8 GPU", v: [1411440593, 1924197914, 4125234388] },
    { x: "Apple A9 GPU", v: [2114570256, 3129316290] },
    { x: "Apple A10 GPU", v: [63583436, 2114570256, 3129316290] },
    { x: "Apple A11 GPU", v: [1349146759, 2917249763] },
    { x: "Apple A8 GPU", v: [1411440593, 1913250432, 3074367344, 4125234388] },
    { x: "Apple A9 GPU", v: [46663968, 2114570256, 3129316290] },
    { x: "Apple A11 GPU", v: [2917249763, 3237505312] },
    { x: "Apple A8 GPU", v: [3128296539, 3816812018, 4125234388] },
    { x: "Apple A9 GPU", v: [46663968, 63583436, 2114570256, 3129316290] },
    { x: "Apple A8 GPU", v: [2656686317, 3710391565] },
    { x: "Apple A9X GPU|Apple A9 GPU|Apple A10 GPU", v: [3129316290] },
    {
      x: "Apple A9 GPU|Apple A9X GPU|Apple A10 GPU",
      m: function (e) {
        return n();
      },
      n: [115, 105, 109],
      v: [2114570256],
    },
    { x: "Apple A10 GPU", v: [46663968] },
    {
      x: "Apple A8 GPU|Apple A8X GPU",
      m: function (e) {
        return o(e);
      },
      n: [117, 116],
      v: [4125234388],
    },
    {
      x: "Apple A8 GPU|Apple A8X GPU",
      m: function (e) {
        return n();
      },
      n: [118, 119, 120],
      v: [4005673483],
    },
    {
      x: "Apple A8 GPU|Apple A8X GPU",
      v: [1350183384, 1361285941, 3816812018],
    },
    {
      x: "Apple A9X GPU|Apple A9 GPU|Apple A10 GPU",
      m: function (e) {
        return n();
      },
      n: [111, 110],
      v: [63583436],
    },
    {
      x: "Apple A8 GPU|Apple A8X GPU",
      m: function (e) {
        return n();
      },
      n: [122, 121],
      v: [2870741841],
    },
    { x: "Apple A10X GPU|Apple A9X GPU", v: [3458129248] },
    { x: "Apple A12X GPU|Apple A12 GPU", v: [4085158452] },
    {
      x: "Apple A10X GPU|Apple A9X GPU",
      m: function (e) {
        return o(e);
      },
      n: [123, 124],
      v: [583354101],
    },
    {
      x: "Apple A10X GPU|Apple A9X GPU",
      m: function (e) {
        return o(e);
      },
      n: [125, 126],
      v: [3928876783],
    },
    { x: "Apple A12Z GPU", v: [958581112] },
    { x: "Apple A12X GPU", v: [4085158452] },
    { x: "Apple A10X GPU", v: [583354101, 3458129248, 3928876783] },
    { x: "Apple M1 GPU", v: [105985484] },
    {
      x: "Apple M1 GPU|Apple A10X GPU|Apple A12Z GPU",
      m: function (e) {
        return s();
      },
      n: [128, 127],
      v: [3403189785],
    },
    { x: "Apple A12 GPU", v: [2301174800] },
    { x: "Apple A13 GPU", v: [3335845976] },
    { x: "Apple A14 GPU", v: [1349146759] },
    { x: "Apple M1 GPU", v: [1444462398] },
    { x: "Apple A9X GPU|Apple A10 GPU", v: [3458129248] },
    { x: "Apple A8X GPU", v: [1480368425, 1783160115] },
    {
      x: "Apple A8X GPU|Apple A10 GPU",
      m: function (e) {
        return s();
      },
      n: [58, 129],
      v: [3403189785],
    },
    { x: "Apple A8 GPU", v: [3312905059, 3928382683] },
    {
      x: "Apple A9 GPU|Apple A9X GPU|Apple A10 GPU",
      m: function (e) {
        return o(e);
      },
      n: [130, 131],
      v: [583354101],
    },
    {
      x: "Apple A9X GPU|Apple A9 GPU|Apple A10 GPU",
      m: function (e) {
        return o(e);
      },
      n: [132, 135, 133, 134],
      v: [3928876783],
    },
    { x: "Apple A10 GPU", v: [1058363647, 2015944978] },
    { x: "Apple A9 GPU", v: [46663968] },
    { x: "Apple A13 GPU", v: [1349146759] },
    { x: "Apple A15 GPU", v: [1444462398] },
    { x: "Apple A10 GPU", v: [3403189785] },
    {
      x: "Apple A8 GPU|Apple A8X GPU",
      m: function (e) {
        return r(e);
      },
      n: [136, 137],
      r: [{ a: 29.78, b: 30.87 }],
    },
    { x: "Apple A8 GPU", r: [{ a: 31.19, b: 31.59 }] },
    { x: "Apple A8X GPU", v: [1783160115] },
    { x: "Apple A8 GPU", v: [3928382683] },
    {
      x: "Apple A8 GPU|Apple A8X GPU",
      m: function (e) {
        return r(e);
      },
      n: [138, 139],
      v: [3403189785],
    },
    { x: "Apple A8 GPU", v: [3312905059] },
    { x: "Apple A8X GPU", v: [1480368425] },
    { x: "Apple A10X GPU", r: [{ a: 14.16, b: 17.21 }] },
    { x: "Apple A9X GPU", r: [{ a: 18.44, b: 35.94 }] },
    { x: "Apple A10X GPU", r: [{ a: 12.16, b: 16.01 }] },
    { x: "Apple A9X GPU", r: [{ a: 16.68, b: 121.37 }] },
    { x: "Apple M1 GPU|Apple A12Z GPU", v: [1349146759] },
    { x: "Apple A10X GPU", v: [2114570256] },
    { x: "Apple A8X GPU", v: [4005673483] },
    { x: "Apple A9X GPU|Apple A9 GPU", r: [{ a: 24.38, b: 31.67 }] },
    { x: "Apple A10 GPU|Apple A9X GPU", r: [{ a: 16.82, b: 22.52 }] },
    { x: "Apple A10 GPU", r: [{ a: 13.38, b: 16.4 }] },
    { x: "Apple A9X GPU|Apple A9 GPU", r: [{ a: 19.75, b: 21.8 }] },
    { x: "Apple A10 GPU|Apple A9X GPU", r: [{ a: 16.41, b: 19.14 }] },
    { x: "Apple A9X GPU", r: [{ a: 89.03, b: 200.59 }] },
    { x: "Apple A8X GPU", r: [{ a: 0.26, b: 5.62 }] },
    { x: "Apple A8 GPU", r: [{ a: 7.18, b: 161.36 }] },
    { x: "Apple A8X GPU", r: [{ a: 0.53, b: 13.31 }] },
    { x: "Apple A8 GPU", r: [{ a: 83.08, b: 2952.42 }] },
  ];
  function n() {
    let e,
      t,
      n,
      o =
        "attribute vec3 c,d; uniform vec4 e; uniform vec3 f,g;uniform mat4 h,i;varying vec3 j;void main(){vec3 a=normalize(d);vec4 b=h*vec4(c,1.);vec3 k=normalize(vec3(e-b));j=g*f*max(dot(k,a),0.),gl_Position=i*vec4(c,1.);}",
      r =
        "#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec3 j;void main(){gl_FragColor = vec4(j, 1.0);}";
    var s = {
      create: function () {
        let e = new Array(16);
        for (let t = 0; t < 16; t++) e[t] = t % 5 == 0 ? 1 : 0;
        return e;
      },
      perspective: function (e, t, n, o, r) {
        let i,
          s = 1 / Math.tan(t / 2);
        return (
          (e[0] = s / n),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = s),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 0),
          (e[9] = 0),
          (e[11] = -1),
          (e[12] = 0),
          (e[13] = 0),
          (e[15] = 0),
          null != r && r !== 1 / 0
            ? ((i = 1 / (o - r)),
              (e[10] = (r + o) * i),
              (e[14] = 2 * r * o * i))
            : ((e[10] = -1), (e[14] = -2 * o)),
          e
        );
      },
      lookAt: function (e, t, n, o) {
        let r,
          i,
          l,
          a,
          c,
          u,
          p,
          d,
          f,
          h,
          m = t[0],
          g = t[1],
          v = t[2],
          A = o[0],
          y = o[1],
          b = o[2],
          w = n[0],
          x = n[1],
          _ = n[2];
        return Math.abs(m - w) < 1e-6 &&
          Math.abs(g - x) < 1e-6 &&
          Math.abs(v - _) < 1e-6
          ? s.identity(e)
          : ((p = m - w),
            (d = g - x),
            (f = v - _),
            (h = 1 / Math.hypot(p, d, f)),
            (p *= h),
            (d *= h),
            (f *= h),
            (r = y * f - b * d),
            (i = b * p - A * f),
            (l = A * d - y * p),
            (h = Math.hypot(r, i, l)),
            h
              ? ((h = 1 / h), (r *= h), (i *= h), (l *= h))
              : ((r = 0), (i = 0), (l = 0)),
            (a = d * l - f * i),
            (c = f * r - p * l),
            (u = p * i - d * r),
            (h = Math.hypot(a, c, u)),
            h
              ? ((h = 1 / h), (a *= h), (c *= h), (u *= h))
              : ((a = 0), (c = 0), (u = 0)),
            (e[0] = r),
            (e[1] = a),
            (e[2] = p),
            (e[3] = 0),
            (e[4] = i),
            (e[5] = c),
            (e[6] = d),
            (e[7] = 0),
            (e[8] = l),
            (e[9] = u),
            (e[10] = f),
            (e[11] = 0),
            (e[12] = -(r * m + i * g + l * v)),
            (e[13] = -(a * m + c * g + u * v)),
            (e[14] = -(p * m + d * g + f * v)),
            (e[15] = 1),
            e);
      },
      multiply: function (e, t, n) {
        let o = t[0],
          r = t[1],
          i = t[2],
          s = t[3],
          l = t[4],
          a = t[5],
          c = t[6],
          u = t[7],
          p = t[8],
          d = t[9],
          f = t[10],
          h = t[11],
          m = t[12],
          g = t[13],
          v = t[14],
          A = t[15],
          y = n[0],
          b = n[1],
          w = n[2],
          x = n[3];
        return (
          (e[0] = y * o + b * l + w * p + x * m),
          (e[1] = y * r + b * a + w * d + x * g),
          (e[2] = y * i + b * c + w * f + x * v),
          (e[3] = y * s + b * u + w * h + x * A),
          (y = n[4]),
          (b = n[5]),
          (w = n[6]),
          (x = n[7]),
          (e[4] = y * o + b * l + w * p + x * m),
          (e[5] = y * r + b * a + w * d + x * g),
          (e[6] = y * i + b * c + w * f + x * v),
          (e[7] = y * s + b * u + w * h + x * A),
          (y = n[8]),
          (b = n[9]),
          (w = n[10]),
          (x = n[11]),
          (e[8] = y * o + b * l + w * p + x * m),
          (e[9] = y * r + b * a + w * d + x * g),
          (e[10] = y * i + b * c + w * f + x * v),
          (e[11] = y * s + b * u + w * h + x * A),
          (y = n[12]),
          (b = n[13]),
          (w = n[14]),
          (x = n[15]),
          (e[12] = y * o + b * l + w * p + x * m),
          (e[13] = y * r + b * a + w * d + x * g),
          (e[14] = y * i + b * c + w * f + x * v),
          (e[15] = y * s + b * u + w * h + x * A),
          e
        );
      },
      identity: function (e) {
        return (
          (e[0] = 1),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = 1),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 0),
          (e[9] = 0),
          (e[10] = 1),
          (e[11] = 0),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = 0),
          (e[15] = 1),
          e
        );
      },
    };
    let l = 0;
    if (((n = document.createElement("canvas")), null != n)) {
      let a = (function () {
        if (
          !(e = (function () {
            (n.width = 67), (n.height = 67);
            let e = n.getContext("webgl") || n.getContext("experimental-webgl");
            return (
              e &&
                (e.viewport(0, 0, 67, 67),
                e.clearColor(0, 0, 0, 1),
                e.clear(e.COLOR_BUFFER_BIT)),
              e
            );
          })())
        )
          return;
        let i = e.createShader(e.VERTEX_SHADER);
        e.shaderSource(i, o), e.compileShader(i);
        let l = e.createShader(e.FRAGMENT_SHADER);
        e.shaderSource(l, r),
          e.compileShader(l),
          (t = e.createProgram()),
          e.attachShader(t, i),
          e.attachShader(t, l),
          e.linkProgram(t),
          e.detachShader(t, i),
          e.detachShader(t, l),
          e.deleteShader(i),
          e.deleteShader(l),
          e.useProgram(t);
        let a = (function (e) {
          let n,
            o,
            r = 50,
            i = [],
            s = [],
            l = [],
            a = [];
          for (n = 0; n <= 50; ++n) {
            let e = (n * Math.PI) / 50,
              t = Math.sin(e),
              a = Math.cos(e);
            for (o = 0; o <= r; ++o) {
              let e = (2 * o * Math.PI) / r,
                c = Math.sin(e),
                u = Math.cos(e) * t,
                p = a,
                d = c * t,
                f = 1 - o / r,
                h = 1 - n / 50;
              i.push(2 * u),
                i.push(2 * p),
                i.push(2 * d),
                s.push(u),
                s.push(p),
                s.push(d),
                l.push(f),
                l.push(h);
            }
          }
          for (n = 0; n < 50; ++n)
            for (o = 0; o < r; ++o) {
              let e = 51 * n + o,
                t = e + r + 1;
              a.push(e),
                a.push(t),
                a.push(e + 1),
                a.push(t),
                a.push(t + 1),
                a.push(e + 1);
            }
          (i = new Float32Array(i)),
            (s = new Float32Array(s)),
            (l = new Float32Array(l)),
            (a = new Uint16Array(a));
          let c = e.createBuffer(),
            u = e.createBuffer(),
            p = e.createBuffer();
          e.bindBuffer(e.ARRAY_BUFFER, c),
            e.bufferData(e.ARRAY_BUFFER, i, e.STATIC_DRAW);
          let d = e.getAttribLocation(t, "c");
          e.vertexAttribPointer(d, 3, e.FLOAT, !1, 0, 0),
            e.enableVertexAttribArray(d),
            e.bindBuffer(e.ARRAY_BUFFER, u),
            e.bufferData(e.ARRAY_BUFFER, s, e.STATIC_DRAW);
          let f = e.getAttribLocation(t, "d");
          return (
            e.vertexAttribPointer(f, 3, e.FLOAT, !1, 0, 0),
            e.enableVertexAttribArray(f),
            e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, p),
            e.bufferData(e.ELEMENT_ARRAY_BUFFER, a, e.STATIC_DRAW),
            a.length
          );
        })(e);
        e.clearColor(0, 0, 0, 1), e.enable(e.DEPTH_TEST);
        let c = s.create();
        s.perspective(c, Math.PI / 6, 1, 0.1, 100);
        let u = s.create();
        s.lookAt(u, [0, 0, 10], [0, 0, 0], [0, 1, 0]);
        let p = s.create();
        s.multiply(p, c, u);
        let d = e.getUniformLocation(t, "h");
        e.uniformMatrix4fv(d, !1, u);
        let f = e.getUniformLocation(t, "i");
        e.uniformMatrix4fv(f, !1, p);
        let h = e.getUniformLocation(t, "e");
        e.uniform4fv(h, [10, 10, 10, 1]);
        let m = e.getUniformLocation(t, "f");
        e.uniform3fv(m, [0.9, 0.5, 0.3]);
        let g = e.getUniformLocation(t, "g");
        return (
          e.uniform3fv(g, [1, 1, 1]),
          e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT),
          e.drawElements(e.TRIANGLES, a, e.UNSIGNED_SHORT, 0),
          e.useProgram(null),
          t && e.deleteProgram(t),
          n.toDataURL()
        );
      })();
      a && (l = i(a));
    }
    return l;
  }
  function o(t) {
    e(t.x);
  }
  function r(t) {
    e(t.x);
  }
  function i(e) {
    let t = 2166136261;
    for (let n = 0; n < e.length; ++n)
      (t ^= e.charCodeAt(n)),
        (t += (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24));
    return t >>> 0;
  }
  function s() {
    let e = 0,
      t = document.createElement("canvas");
    if (null != t) {
      let n = (function (e) {
        (e.width = 67), (e.height = 67);
        let t = e.getContext("2d", { alpha: !0 });
        if (null != t)
          return (
            (t.imageSmoothingQuality = "low"),
            (t.imageSmoothingEnabled = !0),
            (t.globalCompositeOperation = "source-over"),
            (t.globalAlpha = 1),
            (t.miterLimit = 1 / 0),
            (t.filter = "none"),
            (t.lineCap = "butt"),
            (t.lineDashOffset = 0),
            (t.lineJoin = "miter"),
            (t.font = "10pt Arial"),
            (t.lineWidth = 2),
            void 0 !== t.setLineDash && t.setLineDash([10, 20]),
            (t.shadowColor = "black"),
            (t.shadowOffsetX = -3),
            (t.shadowOffsetY = -5),
            t.translate(e.width / 2, e.height / 2),
            t.rotate(0.8901179),
            (t.fillStyle = "green"),
            (t.textAlign = "center"),
            (t.textBaseline = "middle"),
            t.fillText("*51Degrees*", 0, 0),
            t.beginPath(),
            (t.shadowColor = "yellow"),
            (t.shadowBlur = 1),
            (t.shadowOffsetX = 1),
            (t.shadowOffsetY = 1),
            (t.strokeStyle = "red"),
            (t.fillStyle = "rgba(0, 0, 255, 0.6)"),
            void 0 === t.ellipse
              ? t.arc(0, 0, 25, 0, 2 * Math.PI)
              : t.ellipse(0, 0, 25, 15, Math.PI / 4, 0, 2 * Math.PI),
            t.fill(),
            t.stroke(),
            e.toDataURL()
          );
      })(t);
      n && (e = i(n));
    }
    return e;
  }
  function l() {
    return window.screen.height * window.devicePixelRatio;
  }
  function a() {
    return (function (e, t) {
      for (let o = 0; o < t.length; o++)
        if (((n = "(" + e + ": " + t[o] + ")"), window.matchMedia(n).matches))
          return t[o];
      var n;
      return "n/a";
    })("color-gamut", ["p3", "srgb"]);
  }
  function c(n, o) {
    if (n.m) {
      let r = n.m(n);
      r || "" === r
        ? r.then ||
          (function (n, o, r) {
            for (let e = 0; e < n.n.length; e++) {
              let r = t[n.n[e]];
              if (r.r)
                for (let e = 0; e < r.r.length; e++) {
                  let t = r.r[e];
                  if ((null === t.a || o >= t.a) && (null === t.b || o <= t.b))
                    return void c(r, 0);
                }
              else if (r.v && -1 != r.v.indexOf(o)) return void c(r, 0);
            }
            n.n.length > 0 &&
              r < 10 &&
              setTimeout(function () {
                c(n, r + 1);
              }, 10),
              e(n.x);
          })(n, r, o)
        : n.x && e(n.x);
    } else e(n.x);
  }
  c(t[0], 0);
}
let al;
al =
  "undefined" != typeof VV_GPU_TESTS
    ? VV_GPU_TESTS
    : {
        ultra: [
          ["not-mobile", "ge", "geforce gtx", 1050],
          ["is", "radeon vii"],
          ["ge", "radeon rx vega", 64],
          ["is", "geforce titan"],
          ["ge", "radeon rx", 5e3],
          ["is", "apple m"],
          ["ge", "apple a", 12, 100],
          ["ge", "apple a", 13],
        ],
        veryhigh: [
          ["is", "geforce rtx"],
          ["is", "quadro gtx"],
          ["ge", "apple a", 12],
          ["mobile", "ge", "geforce gtx", 780],
          ["not-mobile", "ge", "geforce gtx", 680],
          ["ge", "quadro p", 400],
          ["is", "radeon r10"],
          ["is", "radeon r9"],
          ["ge", "radeon r7", 370],
          ["ge", "radeon rx", 570],
          ["ge", "radeon rx vega", 56],
        ],
        high: [
          ["is", "geforce gtx"],
          ["ge", "geforce mx", 250],
          ["ge", "radeon pro", 450],
          ["not-mobile", "ge", "radeon hd", 5570],
          ["ge", "adreno", 418],
          ["ge", "apple a", 11],
          ["ge", "mali g", 71],
          ["ge", "mali t", 760, 8],
          ["ge", "mali t", 880],
        ],
        medium: [
          ["brand", "nvidia"],
          ["brand", "amd"],
          ["brand", "apple"],
          ["is", "intel iris plus"],
          ["is", "intel iris pro"],
          ["ge", "intel hd", 630],
          ["le", "intel hd", 2e3],
          ["ge", "adreno", 430],
          ["is", "mali g"],
          ["ge", "mali t", 800, 2],
          ["ge", "mali t", 860],
        ],
      };
const cl = "unknown",
  ul = (e, t) => t.reduce((t, n) => t || !!e.match(n), !1),
  pl = (e, t) => {
    for (const n in t) if (ul(e, t[n])) return n;
  },
  dl = {
    edge: ["edge", "edg"],
    chrome: ["chrome", "crios"],
    firefox: ["firefox", "fxios"],
    ie: ["msie", "trident", "rv:"],
    ucbrowser: ["ucbrowser"],
    safari: ["safari", "ios"],
    opera: ["opera", "opios"],
  },
  fl = {
    0: "verylow",
    1: "low",
    2: "medium",
    3: "high",
    4: "veryhigh",
    5: "ultra",
  };
function hl(e, t = !1) {
  const n = {};
  if (t)
    return Object.assign(n, {
      type: { desktop: !0 },
      os: "windows",
      browser: "chrome",
      browserVersion: "77",
      gpu: yl("low"),
    });
  (n.userAgent = "string" == typeof e ? e : navigator.userAgent.toLowerCase()),
    (n.hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 1),
    (n.type = (function ({ hasTouch: e, userAgent: t }) {
      const n = ["ios", "iphone", "ipad", "phone", "android", "blackberry"],
        o = Math.max(screen.width, screen.height) > 900,
        r = ml(t, e),
        i = !!(r || (e && ul(t, n))),
        s = !(!i || (!r && !o)),
        l = !i;
      return { desktop: l, mobile: i, tablet: s, phone: !l && !s };
    })(n)),
    (n.os = (function ({ hasTouch: e, type: t, userAgent: n }) {
      if (ml(n, e)) return "ios";
      const o = {
          desktop: {
            windows: ["windows", "iemobile"],
            linux: ["linux"],
            macos: ["mac os"],
          },
          mobile: {
            android: ["android"],
            ios: ["ipad", "iphone"],
            blackberry: ["blackberry"],
          },
        },
        r = t.desktop ? o.desktop : o.mobile;
      return pl(n, r) || cl;
    })(n)),
    (n.browser = (function ({ userAgent: e, os: t }) {
      const n = pl(e, dl);
      return n || ("ios" === t ? "safari" : cl);
    })(n)),
    (n.browserVersion = (function ({ userAgent: e, browser: t }) {
      const n = (t) => {
        const n = e.split(t)[1];
        if (!n || n.length <= 0) return;
        const o = parseFloat(
          n
            .split(" ")[0]
            .split(".")[0]
            .replace(/[^.0-9]/g, "")
        );
        return isNaN(o) ? void 0 : o;
      };
      switch (t) {
        case "chrome":
        case "firefox":
          return void dl[t].forEach((e) => {
            const t = n(e);
            if (null !== t || void 0 !== t) return t;
          });
        case "safari":
          let o = e.match(/version\/([.\d]+)/i);
          return o && o[1]
            ? parseFloat(o[1])
            : ((o = e.match(/os ([0-9_]+)/i)),
              o && o[1] ? parseFloat(o[1].split("_")[0]) : void 0);
        case "ie":
        case "edge":
          return ul(e, ["msie"])
            ? n("msie")
            : ul(e, ["rv:"])
            ? n("rv:")
            : n("edge/");
        default:
          return;
      }
    })(n));
  let o = gl(n, !0);
  const r = !o;
  return (
    vl(),
    (o = gl(n, !1)),
    (n.majorPerformanceCaveat = o && r),
    (n.webgl = o
      ? (function (e, t) {
          const n = ["WEBKIT_", "MOZ_"];
          let o = t.getSupportedExtensions() || [];
          o = o.reduce((e, t) => {
            for (let o = 0; o < n.length; o++)
              if (!t.indexOf(n[o])) return (e[t.substring(n[o].length)] = t), e;
            return (e[t] = t), e;
          }, {});
          const r = "WEBGL_compressed_texture_",
            i = ["s3tc", "astc", "etc", "pvrtc"].reduce(
              (e, t) => ((e[t] = !!o[r + t]), e),
              {}
            ),
            s = t.getExtension(o.WEBGL_debug_renderer_info),
            l = s ? t.getParameter(s.UNMASKED_RENDERER_WEBGL) : "";
          return {
            renderer: (t.getParameter(t.RENDERER) || "").toLowerCase(),
            rendererInfos: s,
            rendererUnmasked: l,
            version: (t.getParameter(t.VERSION) || "").toLowerCase(),
            glsl: (
              t.getParameter(t.SHADING_LANGUAGE_VERSION) || ""
            ).toLowerCase(),
            extensions: o,
            compressedTextures: i,
          };
        })(0, o)
      : null),
    vl(),
    (o = null),
    (n.gpu = yl("low")),
    (n.gpuDetectionFinished = n.webgl
      ? (async function ({ os: e, webgl: t }) {
          const n = {
              string: null,
              quality: { low: !0 },
              qualityIndex: 1,
              type: null,
              series: null,
              version: null,
              numbers: [],
              isMobile: null,
            },
            o = {
              intel: ["intel"],
              nvidia: ["nvidia", "geforce"],
              amd: ["amd", "radeon"],
              adreno: ["adreno"],
              apple: ["apple"],
              mali: ["mali"],
              swiftshader: ["swiftshader"],
            },
            r = t && t.rendererInfos,
            i = (t && t.rendererUnmasked) || "";
          if (!r || !i.length) return n;
          if (
            ((n.string = Al(i)),
            (n.type = pl(n.string, o) || cl),
            n.type === cl)
          )
            return n;
          "ios" === e &&
            "apple gpu" === n.string &&
            ((n.string = await new Promise((e) => {
              ll((t) => {
                const n = t.toLowerCase();
                if ("unknown" === n) return e("apple gpu");
                const o = n.split("|");
                if (o.length > 5) return e("apple gpu");
                e(o.pop());
              });
            })),
            (n.string = Al(n.string)));
          return (
            (n.isMobile = "m" === n.string[n.string.length - 1]),
            Object.assign(
              n,
              (function (e) {
                const t = e.split(" "),
                  n = t
                    .map((e) => e.replace(/[\D]/g, ""))
                    .filter((e) => e.length > 0)
                    .map((e) => parseFloat(e)),
                  o = n[0] || null;
                if (e.startsWith("apple a")) {
                  const e = t[1] && t[1][t[1].length - 1];
                  n[1] = "z" === e ? 100 : "x" === e ? 10 : 1;
                }
                return { numbers: n, version: o };
              })(n.string)
            ),
            (n.series = (function (e) {
              const t = {
                  swiftshader: "swiftshader",
                  "apple a": "apple a",
                  "apple m2": "apple m2",
                  "apple m1": "apple m1",
                  "apple m": "apple m",
                  "apple gpu": "apple gpu",
                  "geforce gtx": "geforce gtx",
                  "geforce rtx": "geforce rtx",
                  "geforce mx": "geforce mx",
                  titan: "geforce titan",
                  "quadro fx": "quadro fx",
                  "quadro p": "quadro p",
                  "quadro rtx": "quadro rtx",
                  "quadro ": "quadro",
                  "geforce ": "geforce",
                  "tegra ": "tegra",
                  "radeon vii": "radeon vii",
                  "radeon r7": "radeon r7",
                  "radeon r9": "radeon r9",
                  "radeon r10": "radeon r10",
                  "radeon rx": "radeon rx",
                  "radeon pro vega": "radeon pro vega",
                  "radeon rx vega": "radeon rx vega",
                  "radeon hd": "radeon hd",
                  "radeon pro ": "radeon pro",
                  "radeon ": "radeon",
                  "intel iris ": "intel iris",
                  "intel iris plus ": "intel iris plus",
                  "intel iris pro ": "intel iris pro",
                  "intel hd ": "intel hd",
                  "intel uhd ": "intel uhd",
                  adreno: "adreno",
                  "mali-t": "mali t",
                  "mali-g": "mali g",
                  mali: "mali",
                },
                n = {};
              for (const o in t) e.indexOf(o) > -1 && (n[t[o]] = !0);
              return n;
            })(n.string)),
            Object.assign(
              n,
              (function ({ type: e, browser: t }, n) {
                if (!n || !n.type || "swiftshader" === n.type)
                  return "firefox" === t && e.desktop
                    ? yl("medium")
                    : yl("low");
                const o = n.isMobile,
                  r = n.type,
                  i = n.series,
                  s = n.version || 0;
                let l = n.numbers[1] || 1;
                const a = n.string.match(/(?:^| )mp(\d)+(?: |$)/i);
                a && (l = parseFloat(a[1]));
                const c = (e) => i[e],
                  u = (e, t, n) => c(e) && t <= s && (void 0 === n || l <= n),
                  p = (e, t, n) => c(e) && s >= t && (void 0 === n || l >= n),
                  d = { is: c, le: u, ge: p, brand: (e) => e === r };
                let f = "low";
                for (let h in al) {
                  const e = al[h];
                  for (let t = 0, n = e.length; t < n; t++) {
                    const n = e[t];
                    let r = n.shift();
                    if ("mobile" === r && !o) continue;
                    if ("not-mobile" === r && o) continue;
                    d[r] || (r = n.shift());
                    const i = d[r];
                    if (i && i(...n)) {
                      f = h;
                      break;
                    }
                  }
                  if ("low" !== f) break;
                }
                return yl(f);
              })(r, n)
            ),
            n
          );
        })(n).then((e) => Object.assign(n.gpu, e))
      : Promise.resolve(n.gpu)),
    n
  );
}
function ml(e, t) {
  const n = ul(e, ["ipad", "mac", "macos"]),
    o = ul(e, ["iphone"]),
    r = "MacIntel" === navigator.platform;
  return !(o || !n || !r || !t);
}
function gl(e, t) {
  const n = document.createElement("canvas");
  let o;
  try {
    const r = {
      alpha: !1,
      antialias: !1,
      depth: !1,
      failIfMajorPerformanceCaveat: t,
      powerPreference: "high-performance",
      stencil: !1,
    };
    "safari" === e.browser &&
      12 === e.browserVersion &&
      e.type.desktop &&
      delete r.powerPreference,
      (o =
        n.getContext("webgl", r) ||
        n.getContext("webgl-experimental", r) ||
        n.getContext("experimental-webgl", r));
  } catch (r) {}
  return o;
}
function vl(e) {
  e &&
    e.getExtension("WEBGL_lose_context") &&
    e.getExtension("WEBGL_lose_context").loseContext();
}
function Al(e) {
  let t = e.toLowerCase();
  return (
    (t = t.replace(/(\(tm\)|\(r\))/g, "")),
    (t = t.trim()),
    t.includes("angle (") &&
      t.includes("direct3d") &&
      (t = t.replace("angle (", "").split(" direct3d")[0]),
    t.includes("nvidia") && t.includes("gb") && (t = t.split(/\dgb/)[0]),
    t
  );
}
function yl(e) {
  const t = fl,
    n = Math.max(0, Object.values(t).indexOf(e));
  return { qualities: t, qualityIndex: n, detectedQualityIndex: n };
}
const bl = document.documentElement;
let wl;
const xl = JSON.parse(
  '{"arrow-rotate":{"viewBox":"0 0 20 55","width":20,"height":55,"symbol":"<symbol id=\\"arrow-rotate\\" class=\\"raw\\" width=\\"20\\" height=\\"55\\" viewBox=\\"0 0 20 55\\" fill=\\"none\\"><g opacity=\\".4\\" stroke=\\"#fff\\" stroke-width=\\"2\\"><path d=\\"M17.425 53.666S1 50.537 1 26.806C1 2.826 17.425 3.609 17.425 3.609\\"/><path d=\\"m15.723 6.737 2.746-2.99L15.478 1\\"/></g></symbol>"},"arrow":{"viewBox":"0 0 30 277","width":30,"height":277,"symbol":"<symbol id=\\"arrow\\" width=\\"30\\" height=\\"277\\" viewBox=\\"0 0 30 277\\" ><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M0 25.788 15 .233l15 25.555H17.598v250.445h-5.196V25.788H0Z\\" /></symbol>"},"crack-1":{"viewBox":"0 0 14 16","width":14,"height":16,"symbol":"<symbol id=\\"crack-1\\" width=\\"14\\" height=\\"16\\" viewBox=\\"0 0 14 16\\" ><path d=\\"m7.782 6.549 2.5-6.5 3-1-2 9-7 2-4 5 1-6 6.5-2.5Z\\" /></symbol>"},"crack-2":{"viewBox":"0 0 22 24","width":22,"height":24,"symbol":"<symbol id=\\"crack-2\\" width=\\"22\\" height=\\"24\\" viewBox=\\"0 0 22 24\\" ><path d=\\"m10.282 18.049-10 6 12.5 2 2-6.5-4.5-7 11-6.5-1.5-6-.5 5.5-12 5 3 7.5Z\\" /></symbol>"},"crack-3":{"viewBox":"0 0 10 12","width":10,"height":12,"symbol":"<symbol id=\\"crack-3\\" width=\\"10\\" height=\\"12\\" viewBox=\\"0 0 10 12\\" ><path d=\\"M.29 11.328 9.565-4.21 1.666-12 .29 11.328Z\\" /></symbol>"},"eggHunt-logo":{"viewBox":"0 0 1341.12 724.01","width":1341.12,"height":724.01,"symbol":"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg id=\\"Calque_2\\" data-name=\\"Calque 2\\" viewBox=\\"0 0 1341.12 724.01\\">  <defs>    <style>      .cls-1, .cls-2 {        fill: #fff;      }      .cls-2 {        fill-rule: evenodd;      }    </style>  </defs>  <g id=\\"Calque_2-2\\" data-name=\\"Calque 2\\">    <path class=\\"cls-2\\" d=\\"m871.45,28.98l10.91,36.27,60.71,24.56-31.75-35.16-5.14-34.48c12.21-2.24,25.02-3.77,38.45-4.59,31.89-1.95,56.34-1.74,73.35.64,2.45.09,4.46.95,6.02,2.56,1.57,1.62,2.43,3.76,2.6,6.44l5.72,93.5c.16,2.68-.44,4.91-2.04,6.72-1.6,1.81-3.74,2.67-6.42,2.84l-75.72,4.63c-18.99,1.16-32.83,6.65-41.77,16.24-8.93,9.83-13.07,22.06-12.16,36.92.76,12.42,5.3,22.65,13.4,31.2s16.9,12.65,26.64,12.06c2.68-.16,3.81-1.7,3.89-4.39l-2.73-44.56c-.16-2.68.43-4.91,2.03-6.72,1.6-1.81,3.5-2.66,6.18-2.82l95.44-5.84c2.68-.16,4.67.45,6.48,2.05,1.81,1.6,2.67,3.75,2.83,6.42l9.14,149.26c.34,5.6-1.9,8.92-6.94,10.45-24.74,7.13-55.23,11.93-92,14.18-27.03,1.65-52.59-.69-76.68-7.04-24.09-6.35-45.22-16.05-63.37-29.12-18.14-12.82-32.58-29.29-43.83-49.37-11.25-20.08-17.73-42.17-19.24-66.76-2.16-35.3,4.5-66.26,20.22-92.89,15.49-26.36,37.71-46.79,66.88-61.28,9.13-4.57,18.76-8.54,28.89-11.9v-.02Z\\"/>    <path class=\\"cls-2\\" d=\\"m725.73,122.69c-1.85,1.55-4.1,2.09-6.78,1.85l-75.57-6.65c-18.95-1.67-33.45,1.71-43.72,9.87-10.29,8.4-16.2,19.88-17.5,34.7-1.09,12.39,1.88,23.18,8.62,32.84,6.74,9.65,14.84,15.02,24.56,15.87,2.67.24,4.02-1.12,4.49-3.77l3.91-44.47c.23-2.67,1.16-4.8,3.01-6.35,1.85-1.55,3.86-2.11,6.53-1.88l95.25,8.38c2.67.23,4.55,1.13,6.1,2.98,1.55,1.85,2.09,4.1,1.85,6.78l-13.1,148.96c-.49,5.59-3.2,8.53-8.41,9.3-25.52,3.39-56.39,3.61-93.08.39-26.97-2.37-51.9-8.48-74.79-18.33-21.36-9.19-39.72-20.89-55.1-35.1l13.19-71.77-43.5,33.07c-3.38-6.26-6.37-12.83-8.97-19.72-8.15-21.53-11.28-44.34-9.12-68.88,3.1-35.24,14.27-64.86,33.77-88.86,19.23-23.78,44.23-40.68,75.23-50.69,30.76-10.03,65.57-13.33,104.7-9.89,31.83,2.8,55.98,6.64,72.45,11.51,2.41.46,4.27,1.6,5.58,3.43,1.31,1.83,1.84,4.08,1.61,6.75l-8.21,93.31c-.24,2.67-1.16,4.79-3.01,6.35v.02Z\\"/>    <path class=\\"cls-1\\" d=\\"m190.73,343.43c.2,2.68,1.31,4.55,3.14,6.13,1.83,1.58,3.84,2.41,6.52,2.21l234.52-17.14c2.68-.2,4.79-1.33,6.37-3.16,1.58-1.83,2.17-3.83,1.97-6.5l-5.65-77.37c-.21-2.92-1.1-5.06-2.93-6.64s-4.07-2.15-6.75-1.95l-112.88,8.25c-1.7.12-2.95-.27-4.02-1.42-1.04-.9-1.62-2.08-1.73-3.54l-1.12-15.33c-.51-3.63,1.29-5.72,4.94-5.99l98.04-7.16c2.68-.2,4.79-1.33,6.37-3.16s2.17-3.83,1.97-6.5l-4.55-62.28c-.2-2.68-1.07-4.57-2.89-6.15-1.83-1.58-4.07-2.15-6.75-1.95l-98.04,7.16c-3.65.27-5.49-1.55-5.76-5.2l-1.12-15.33c-.12-1.7.27-2.96,1.18-4,.9-1.04,2.08-1.62,3.79-1.74l108.99-7.96c2.68-.2,4.79-1.33,6.37-3.16s2.15-4.07,1.95-6.75l-5.65-77.37c-.2-2.68-1.09-4.81-2.91-6.39-1.83-1.58-4.07-2.15-6.75-1.95l-230.63,16.85c-2.68.2-4.81,1.09-6.39,2.91-1.58,1.83-2.15,4.07-1.95,6.75l22.35,305.81v.02Z\\"/>    <path class=\\"cls-2\\" d=\\"m224.16,704.17c-1.85-1.54-3-3.38-3.24-6.04l-7.36-80.24c-.33-3.62-2.21-5.4-5.82-4.83l-56.5,5.18c-3.64.33-5.42,2.2-4.85,5.81l7.36,80.24c.24,2.66-.31,4.66-1.85,6.51-1.54,1.85-3.64,3.01-6.3,3.26l-107.91,9.9c-2.67.24-4.67-.3-6.53-1.84-1.85-1.54-3.02-3.62-3.27-6.28l-9.06-98.72,32.17-87.21-39.06,12.1L.04,412.05c-.22-2.42.55-4.68,2.09-6.53,1.54-1.85,3.39-2.99,6.06-3.24l107.91-9.9c2.67-.24,4.92.28,6.77,1.82s2.78,3.64,3.02,6.3l8.51,92.8c.33,3.63,2.21,5.4,5.82,4.83l56.5-5.18c3.64-.33,5.42-2.2,4.85-5.81l-8.51-92.8c-.24-2.66.53-4.92,2.07-6.77,1.54-1.85,3.42-2.75,6.08-2.99l108.15-9.92c2.67-.24,4.92.28,6.77,1.82,1.85,1.54,2.78,3.64,3.02,6.3l27.87,303.79c.24,2.66-.31,4.66-1.85,6.51-1.54,1.85-3.64,3.01-6.3,3.26l-108.15,9.92c-2.67.24-4.7-.54-6.55-2.08h0Z\\"/>    <path class=\\"cls-1\\" d=\\"m1076.2,461.52c-.17,2.66.43,4.65,2.02,6.46,1.58,1.81,3.71,2.92,6.38,3.1l52,3.42c3.66,0,5.47,2.06,5.24,5.69l-13.45,204.39c-.18,2.66.65,4.91,2.24,6.71,1.59,1.81,3.73,2.68,6.4,2.85l108.37,7.13c2.67.18,4.92-.65,6.73-2.23,1.81-1.58,2.67-3.47,2.85-6.14l13.45-204.39c-.01-3.65,2.05-5.22,5.69-4.98l51.51,3.39c2.92.19,5.17-.63,6.98-2.22,1.81-1.58,2.67-3.47,2.85-6.14l5.64-85.73c.17-2.66-.66-4.91-2.24-6.71-1.59-1.81-3.73-2.68-6.41-2.85l-241.03-15.86c-2.67-.18-4.66.42-6.48,2.01-1.81,1.58-2.92,3.7-3.1,6.36l-5.64,85.73h0Z\\"/>    <path class=\\"cls-2\\" d=\\"m727.56,717.67c-1.8-1.6-2.89-3.48-3.04-6.14l-17.78-304.54c-.16-2.67.45-4.89,2.05-6.68,1.6-1.79,3.75-2.65,6.42-2.81l96.26-5.62c4.86-.28,9.09,1.17,12.47,4.62,4.91,4.82,15.53,15.38,32.11,31.92,7.61,7.59,15,14.94,22.14,22.04,8.42,8.37,16.51,16.41,24.21,24.11,4.89,4.89,9.04,9.01,12.45,12.4,6.51,6.47,10.27,10.2,11.13,11.27,1.56,1.61,2.82,2.27,4.03,2.2.97-.06,1.43-.57,1.37-1.54l-6.11-104.66c-.16-2.67.45-4.89,2.05-6.68,1.6-1.8,3.75-2.65,6.42-2.81l108.9-6.36c2.68-.16,4.91.44,6.71,2.04,1.8,1.6,2.9,3.72,3.05,6.38l10.35,177.2-62.14,46.72-15,51.96,33.58-34.02,46.53-13.81,4.47,76.49c.15,2.66-.46,4.65-2.07,6.44-1.6,1.79-3.97,2.91-6.65,3.06l-96.99,5.66c-4.86.28-9.88-2.1-15.28-6.89-5.16-4.8-15.48-14.41-31.2-28.81-15.72-14.4-31.18-28.57-45.89-42.29-14.69-13.49-22.68-20.8-23.97-21.94-.51-.46-1.01-.67-1.5-.64-.73.04-1.19.56-1.13,1.53l5.64,96.67c.16,2.66-.7,4.66-2.31,6.45-1.6,1.8-3.73,2.89-6.41,3.05l-108.42,6.33c-2.67.16-4.67-.7-6.48-2.3h.03Z\\"/>    <path class=\\"cls-2\\" d=\\"m681.54,376.71c1.69,1.71,2.41,3.9,2.39,6.57l-1.09,160.41c-.17,24.51-3.48,46.33-10.19,65.7-6.37,18.61-15.35,34.8-27.36,48.77l-31.5-20.55-48.45-8.12,20.17,29.36,18.3,30.25c-3.66,1.69-7.45,3.25-11.37,4.69-20.75,7.87-44.89,11.59-72.16,11.4-27.27-.19-51.35-4.23-71.99-12.38-20.65-7.91-37.61-19.19-50.42-34.08-12.81-14.65-22.43-31.7-28.87-51.4-6.44-19.46-9.46-41.32-9.29-65.83l1.09-160.42c.02-2.67.76-4.85,2.48-6.54s3.67-2.4,6.35-2.38l110.79.75c2.68.02,4.86.76,6.56,2.47,1.69,1.71,2.41,3.9,2.39,6.57l-1.05,154.59c-.09,12.86,2.52,23.32,8.07,31.12,5.55,8.05,13.8,11.99,24.76,12.06,10.96.07,19.26-3.99,24.68-11.97,5.41-7.97,8.16-18.15,8.24-30.77l1.05-154.59c.02-2.67,1.01-4.85,2.72-6.53s3.67-2.4,6.35-2.38l110.79.75c2.68.02,4.86.76,6.56,2.47h0Z\\"/>  </g></symbol>"},"mobile":{"viewBox":"0 0 56 100","width":56,"height":100,"symbol":"<symbol id=\\"mobile\\" class=\\"raw\\" width=\\"56\\" height=\\"100\\" viewBox=\\"0 0 56 100\\" fill=\\"none\\"><rect x=\\"1.499\\" y=\\"98.5\\" width=\\"97\\" height=\\"53\\" rx=\\"5.5\\" transform=\\"rotate(-90 1.5 98.5)\\" stroke=\\"#fff\\" stroke-width=\\"3\\"/><path d=\\"M19 3h18v3a2 2 0 0 1-2 2H21a2 2 0 0 1-2-2V3Z\\" fill=\\"#fff\\"/></symbol>"},"msi-logo":{"viewBox":"0 0 1308 327","width":1308,"height":327,"symbol":"<symbol id=\\"msi-logo\\" class=\\"raw\\" width=\\"1308\\" height=\\"327\\" viewBox=\\"0 0 1308 327\\" fill=\\"none\\"><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"m1189.23 326.482 89.6-245.639s-67.2 0-133.87 13.474l-84.39 232.165h128.66Zm-15.1-311.454-17.19 47.159c67.19-13.474 133.87-13.474 133.87-13.474L1308 1.555s-66.68 0-133.87 13.473ZM707.393 268.442c40.11 7.255 81.783 10.882 123.976 10.882 43.756 0 75.011-9.846 78.657-38.867 1.563-13.992-11.46-23.838-35.942-37.312-27.608-15.547-51.049-22.802-75.532-38.867-23.962-16.065-34.901-41.458-26.566-68.405 9.376-31.612 31.775-49.75 65.634-66.851C877.209 8.81 908.464 1.555 985.037 1.555c47.923 0 94.803 4.664 140.643 13.473l-16.15 45.086c-40.11-7.255-81.78-10.883-123.972-10.883-43.756 0-75.011 9.847-78.657 38.867-1.563 13.992 11.46 24.357 35.943 37.312 27.608 15.029 51.049 22.802 75.536 38.867 24.48 16.065 34.9 41.458 26.56 68.406-9.37 31.094-31.77 49.75-65.633 66.851C939.718 319.745 908.464 327 831.89 327c-47.923 0-94.805-4.664-140.645-13.474l16.148-45.085Zm-194.299 58.041 74.49-204.699c25.004-68.406-66.676-43.531-86.991-27.466-16.149 12.437-45.319 40.422-56.258 69.96L384.951 327H256.287l74.49-204.699c25.003-68.406-66.677-43.53-86.992-27.466-16.148 12.438-45.319 40.422-56.258 69.961l-58.863 161.686H0L118.767 1.036c41.152 0 63.03 9.329 81.783 27.466 6.771 6.737 10.939 15.547 13.543 24.357 23.962-14.51 45.84-25.393 59.905-31.094C300.564 11.401 333.902.518 375.054.518c41.152 0 63.03 9.328 81.782 27.466 6.772 6.737 10.939 15.547 13.544 24.357 23.962-14.51 45.84-25.393 59.904-31.094C556.851 10.883 590.189 0 631.341 0c41.151 0 63.029 9.328 81.782 27.466 18.753 18.138 18.232 51.304 11.46 69.96l-82.824 227.501H513.094v1.555Z\\" fill=\\"#fff\\"/></symbol>"},"popin-arrow":{"viewBox":"0 0 22 16","width":22,"height":16,"symbol":"<symbol id=\\"popin-arrow\\" width=\\"22\\" height=\\"16\\" viewBox=\\"0 0 22 16\\" ><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"m15.343.929 6.364 6.364a1 1 0 0 1 0 1.414l-6.364 6.364a1 1 0 0 1-1.414-1.414L18.586 9H1a1 1 0 0 1 0-2h17.586l-4.657-4.657A1 1 0 0 1 15.343.93Z\\" /></symbol>"},"replay":{"viewBox":"0 0 53 50","width":53,"height":50,"symbol":"<symbol id=\\"replay\\" width=\\"53\\" height=\\"50\\" viewBox=\\"0 0 53 50\\" ><path d=\\"M4.842 14.541a24.81 24.81 0 0 0-1.89 14.974 24.94 24.94 0 0 0 7.144 13.327 25.317 25.317 0 0 0 13.578 6.827c5.128.835 10.39.082 15.068-2.159a25.14 25.14 0 0 0 11.073-10.357 24.826 24.826 0 0 0 3.046-14.786 24.905 24.905 0 0 0-6.09-13.831A25.27 25.27 0 0 0 33.76.695 25.595 25.595 0 0 0 27.79 0v4.864A20.404 20.404 0 0 1 43.025 11.7a20.03 20.03 0 0 1 4.904 15.85 20.123 20.123 0 0 1-8.747 14.129 20.476 20.476 0 0 1-16.476 2.844c-5.649-1.44-10.402-5.216-13.05-10.367a19.99 19.99 0 0 1-.79-16.56l1.22 3.662 4.66-1.522-2.936-8.809a2.44 2.44 0 0 0-.984-1.27 2.475 2.475 0 0 0-1.567-.39L0 10.088l.441 4.862 4.401-.409Z\\" /></symbol>"},"rock-1":{"viewBox":"0 0 180 213","width":180,"height":213,"symbol":"<symbol id=\\"rock-1\\" width=\\"180\\" height=\\"213\\" viewBox=\\"0 0 180 213\\" ><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"m111.83.69 56.63 52.078 11.342 24.48-.117 10.82-69.592 74.861-37.955 3.606L.99 157.648l.144-13.338L56.158 24.121l7.55-7.55L111.83.69ZM69.228 25.53 64.7 30.058 11.348 146.595l-.022 2.026 60.964 7.616 32.957-3.131 64.244-69.108.049-4.546-9.512-20.53-50.701-46.625-40.1 13.233Z\\" fill=\\"url(#a)\\"/><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"m166.901 96.419 12.901 26.863-.117 10.857L110.093 209l-37.955 3.606L.99 203.718l.144-13.337 17.199-37.568 9.309 4.262-16.294 35.59-.022 2.027 60.964 7.615 32.957-3.13 64.244-69.108.048-4.508-11.867-24.71 9.229-4.432Z\\" fill=\\"url(#b)\\" fill-opacity=\\".1\\"/><defs><linearGradient id=\\"a\\" x1=\\"90.396\\" y1=\\".69\\" x2=\\"90.396\\" y2=\\"166.535\\" gradientUnits=\\"userSpaceOnUse\\"><stop stop-color=\\"#FCFCFC\\"/><stop offset=\\"1\\" stop-color=\\"#F7F7F7\\"/></linearGradient><linearGradient id=\\"b\\" x1=\\"90.414\\" y1=\\"52.565\\" x2=\\"90.414\\" y2=\\"207.456\\" gradientUnits=\\"userSpaceOnUse\\"><stop stop-color=\\"#FCFCFC\\"/><stop offset=\\"1\\" stop-color=\\"#F7F7F7\\"/></linearGradient></defs></symbol>"},"rock-2":{"viewBox":"0 0 216 235","width":216,"height":235,"symbol":"<symbol id=\\"rock-2\\" width=\\"216\\" height=\\"235\\" viewBox=\\"0 0 216 235\\" ><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"m208.081 76.768-25.594 61.013-62.014 30.217-76.398-15.725-20.1-97.375 9.402-12.98 89.516-18.683 74.764 20.034 10.424 33.5Zm-10.884-.52-7.639-24.55-66.96-17.943L39.346 51.13l-4.431 6.118 17.825 86.356 66.382 13.664 55.415-27.002 22.66-54.018Z\\" fill=\\"url(#a)\\"/><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"m208.08 122.839-25.593 61.012-62.014 30.218-76.398-15.725-20.1-97.376 8.24-11.376 8.292 6.005-5.593 7.722 17.826 86.356 66.382 13.663 55.415-27.002 22.66-54.017-8.478-27.245 9.776-3.041 9.585 30.806Z\\" fill=\\"url(#b)\\" fill-opacity=\\".1\\"/><defs><linearGradient id=\\"a\\" x1=\\"196.988\\" y1=\\"118.167\\" x2=\\"19.748\\" y2=\\"70.676\\" gradientUnits=\\"userSpaceOnUse\\"><stop stop-color=\\"#FCFCFC\\"/><stop offset=\\"1\\" stop-color=\\"#F7F7F7\\"/></linearGradient><linearGradient id=\\"b\\" x1=\\"191.87\\" y1=\\"162.769\\" x2=\\"25.169\\" y2=\\"118.101\\" gradientUnits=\\"userSpaceOnUse\\"><stop stop-color=\\"#FCFCFC\\"/><stop offset=\\"1\\" stop-color=\\"#F7F7F7\\"/></linearGradient></defs></symbol>"},"rock-3":{"viewBox":"0 0 221 268","width":221,"height":268,"symbol":"<symbol id=\\"rock-3\\" width=\\"221\\" height=\\"268\\" viewBox=\\"0 0 221 268\\" ><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"m129.18 197.931-10.227 2.004-94.219-59.624 6.81-55.826 88.118-66.922 12.41.052 44.449 82.224 8.233 27.258-55.574 70.834Zm44.235-72.967-6.394-21.171-41.066-75.966-2.864-.012L41.182 90.02l-5.501 45.103 85.302 53.981 2.492-.488 49.94-63.652Z\\" fill=\\"url(#a)\\"/><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"m129.18 244.001-10.227 2.005-94.218-59.624 5.642-46.264 10.163 1.24-4.859 39.836 85.302 53.981 2.492-.488 49.94-63.652-6.394-21.171-3.618-6.692 9.007-4.868 4.111 7.605 8.233 27.259-55.574 70.833Z\\" fill=\\"url(#b)\\" fill-opacity=\\".1\\"/><defs><linearGradient id=\\"a\\" x1=\\"163.275\\" y1=\\"163.835\\" x2=\\"57.734\\" y2=\\"58.294\\" gradientUnits=\\"userSpaceOnUse\\"><stop stop-color=\\"#FCFCFC\\"/><stop offset=\\"1\\" stop-color=\\"#F7F7F7\\"/></linearGradient><linearGradient id=\\"b\\" x1=\\"159.496\\" y1=\\"206.175\\" x2=\\"61.503\\" y2=\\"108.182\\" gradientUnits=\\"userSpaceOnUse\\"><stop stop-color=\\"#FCFCFC\\"/><stop offset=\\"1\\" stop-color=\\"#F7F7F7\\"/></linearGradient></defs></symbol>"},"rock-4":{"viewBox":"0 0 240 286","width":240,"height":286,"symbol":"<symbol id=\\"rock-4\\" width=\\"240\\" height=\\"286\\" viewBox=\\"0 0 240 286\\" ><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"m166.442 188.193-59.68 11.29-10.809 1.425-47.644-29.296 2.902-36.396L90.667 33.268l60.383 5.32 55.837 44.364 1.273 15.407-41.718 89.834Zm31.292-91.69-.685-8.292-49.961-39.694-49.651-4.375-36.14 93.377-2.284 28.656 39.206 24.108 6.922-.913 54.231-10.259 38.362-82.608Z\\" fill=\\"url(#a)\\"/><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"m166.442 234.264-59.68 11.289-10.809 1.425-47.644-29.296 2.902-36.395 3.967-10.251 9.548 3.695-3.428 8.858-2.285 28.656 39.206 24.108 6.922-.912 54.231-10.259 38.362-82.609-.685-8.291-8.7-6.913 6.369-8.015 12.169 9.668 1.273 15.407-41.718 89.835Z\\" fill=\\"url(#b)\\" fill-opacity=\\".1\\"/><defs><linearGradient id=\\"a\\" x1=\\"177.476\\" y1=\\"177.16\\" x2=\\"62.126\\" y2=\\"61.81\\" gradientUnits=\\"userSpaceOnUse\\"><stop stop-color=\\"#FCFCFC\\"/><stop offset=\\"1\\" stop-color=\\"#F7F7F7\\"/></linearGradient><linearGradient id=\\"b\\" x1=\\"173.568\\" y1=\\"219.062\\" x2=\\"66.667\\" y2=\\"112.16\\" gradientUnits=\\"userSpaceOnUse\\"><stop stop-color=\\"#FCFCFC\\"/><stop offset=\\"1\\" stop-color=\\"#F7F7F7\\"/></linearGradient></defs></symbol>"},"star":{"viewBox":"0 0 43 43.7","width":43,"height":43.7,"symbol":"<symbol id=\\"star\\" class=\\"raw\\" id=\\"Calque_2\\" data-name=\\"Calque 2\\" viewBox=\\"0 0 43 43.7\\"><defs><mask id=\\"mask\\" width=\\"43\\" height=\\"43.7\\" x=\\"0\\" y=\\"0\\" maskUnits=\\"userSpaceOnUse\\"><circle id=\\"mask0_514_1119\\" cx=\\"21.5\\" cy=\\"21.5\\" r=\\"21.5\\" class=\\"cls-4\\" data-name=\\"mask0 514 1119\\"/></mask><mask id=\\"mask-1\\" width=\\"43\\" height=\\"43\\" x=\\"0\\" y=\\"0\\" maskUnits=\\"userSpaceOnUse\\"><circle id=\\"mask1_514_1119\\" cx=\\"21.5\\" cy=\\"21.5\\" r=\\"19\\" data-name=\\"mask1 514 1119\\" style=\\"stroke:#ffd500;stroke-width:5px;fill:#ffbf00\\"/></mask><style>.cls-2{fill:#f3ad00}.cls-3{fill:#ffd500}.cls-4{fill:#ffbf00}.cls-6{fill:#fff;opacity:.15}</style></defs><g id=\\"Calque_1-2\\" data-name=\\"Calque 1\\"><circle cx=\\"21.5\\" cy=\\"21.5\\" r=\\"21.5\\" class=\\"cls-4\\"/><g style=\\"mask:url(#mask)\\"><path d=\\"M21.5 43.7C9.64 43.7 0 34.06 0 22.2S9.64.7 21.5.7 43 10.35 43 22.2s-9.64 21.5-21.5 21.5Zm0-38C12.4 5.7 5 13.1 5 22.2s7.4 16.5 16.5 16.5S38 31.3 38 22.2 30.6 5.7 21.5 5.7Z\\" class=\\"cls-2\\"/><path d=\\"M39.23 9.37a20.83 20.83 0 0 0-3.1-3.59 21.36 21.36 0 0 0-23.96-3.65 21.54 21.54 0 0 0-9.09 30.45 21.4 21.4 0 0 0 3.01 3.89 21.4 21.4 0 0 0 23.58 4.91h.01A21.51 21.51 0 0 0 43 21.5c0-4.49-1.39-8.68-3.77-12.13Zm-7.48 25.05A16.4 16.4 0 0 1 21.5 38a16.5 16.5 0 0 1 0-33 16.45 16.45 0 0 1 15.66 11.31 16.48 16.48 0 0 1-5.41 18.11Z\\" class=\\"cls-3\\"/></g><path d=\\"m14.77 12.67 6.46 3.31c.08.04.18.04.25 0l6.39-3.45c.2-.11.44.06.4.28l-1.15 7.17a.3.3 0 0 0 .08.24l5.25 5.01c.16.16.08.43-.15.47l-7.18 1.12a.26.26 0 0 0-.2.15l-3.14 6.55c-.1.2-.39.21-.49 0l-3.28-6.48a.27.27 0 0 0-.21-.15l-7.2-.97c-.22-.03-.32-.3-.16-.46l5.15-5.12a.3.3 0 0 0 .08-.24l-1.3-7.14a.27.27 0 0 1 .39-.29Z\\" class=\\"cls-2\\"/><path d=\\"m14.77 12.02 6.46 3.31c.08.04.18.04.25 0l6.39-3.45c.2-.11.44.06.4.28l-1.15 7.17a.3.3 0 0 0 .08.24l5.25 5.01c.16.16.08.43-.15.47l-7.18 1.12a.26.26 0 0 0-.2.15l-3.14 6.55c-.1.2-.39.21-.49 0l-3.28-6.48a.27.27 0 0 0-.21-.15l-7.2-.97c-.22-.03-.32-.3-.16-.46l5.15-5.12a.3.3 0 0 0 .08-.24l-1.3-7.14a.27.27 0 0 1 .39-.29Z\\" class=\\"cls-3\\"/><g style=\\"mask:url(#mask-1)\\"><path d=\\"M12.17 2.13 9.88 9.81 5.36 24.93l-2.28 7.65a21.54 21.54 0 0 1 9.09-30.45ZM43 21.5c0 8.97-5.51 16.66-13.32 19.88l2.07-6.96 5.41-18.11 2.07-6.94A21.31 21.31 0 0 1 43 21.5ZM36.13 5.78l-1.66 5.54-7.7 25.82-1.66 5.55a21.4 21.4 0 0 1-19.02-6.22l1.72-5.77L15.1 6.29 16.83.51a21.36 21.36 0 0 1 19.3 5.27Z\\" class=\\"cls-6\\"/></g></g></symbol>"},"volume":{"viewBox":"0 0 34 51","width":34,"height":51,"symbol":"<symbol id=\\"volume\\" width=\\"34\\" height=\\"51\\" viewBox=\\"0 0 34 51\\" ><path d=\\"M27.246.921 11.334 13.158h-7.67C1.604 13.158 0 14.774 0 16.852v17.316c0 2.077 1.603 3.694 3.664 3.694h7.67L27.246 50.1C29.994 52.292 34 50.214 34 46.75V4.27C34 .69 29.993-1.272 27.246.922Z\\" /></symbol>"},"wave-close":{"viewBox":"0 0 22 22","width":22,"height":22,"symbol":"<symbol id=\\"wave-close\\" width=\\"22\\" height=\\"22\\" viewBox=\\"0 0 22 22\\" ><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M1.768 19.445a2.5 2.5 0 0 1 0-3.535L15.91 1.768a2.5 2.5 0 1 1 3.535 3.535L5.303 19.445a2.5 2.5 0 0 1-3.535 0Z\\" /><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M2.304 1.768a2.5 2.5 0 0 1 3.535 0L19.981 15.91a2.5 2.5 0 0 1-3.535 3.535L2.304 5.303a2.5 2.5 0 0 1 0-3.535Z\\" /></symbol>"},"waves":{"viewBox":"0 0 21 40","width":21,"height":40,"symbol":"<symbol id=\\"waves\\" width=\\"21\\" height=\\"40\\" viewBox=\\"0 0 21 40\\" ><path d=\\"M5.034 9.676c-1.322-1.016-3.086-.903-4.189.451-1.103 1.355-.772 3.275.552 4.405 1.653 1.469 2.755 3.614 2.755 5.986 0 2.485-1.212 4.743-3.086 6.212-1.213.903-1.434 2.71-.44 3.84l.22.338c.992 1.242 2.866 1.468 4.078.451 3.087-2.484 5.072-6.437 5.072-10.842.109-4.404-1.875-8.356-4.962-10.84Z\\" /><path d=\\"M11.851.64c-1.227-1.016-3.123-.79-4.127.451-1.004 1.242-.893 3.16.334 4.29a19.01 19.01 0 0 1 6.917 14.675c0 5.87-2.678 11.177-6.917 14.676-1.227 1.016-1.45 2.935-.334 4.177 1.004 1.241 2.9 1.467 4.127.45C17.43 34.732 21 27.733 21 19.944 21 12.267 17.43 5.268 11.851.64Z\\" /></symbol>"}}'
);
let _l;
function Pl(e = {}) {
  _l ||
    (function () {
      if (_l) return;
      _l = !0;
      let e =
        '<svg style="display: none;" aria-hidden="true" class="icons-spritesheet">';
      for (const r in xl) e += xl[r].symbol;
      e += "</svg>";
      const t = document.createElement("div");
      (t.innerHTML = e),
        document.body.insertBefore(
          t.getElementsByTagName("svg")[0],
          document.body.firstChild
        );
      const n = document.createElement("style");
      n.innerHTML = [
        "svg.icons-spritesheet symbol:not(.raw) * {",
        "fill: inherit;",
        "stroke: inherit;",
        "}",
      ].join("\n");
      const o = document.getElementsByTagName("style")[0];
      o ? o.parentNode.insertBefore(n, o) : document.head.appendChild(n);
    })();
  const t = { ...e },
    n = t.id,
    o = xl[n];
  if (!o) return;
  const r = t.className ? "className" : "class";
  return (
    (t[r] = ["icon", "icon-" + n, t[r] || ""].join(" ").trim()),
    null == t.viewBox && (t.viewBox = o.viewBox),
    !0 === t.width && (t.width = o.width),
    !0 === t.height && (t.height = o.height),
    delete t.id,
    kr("svg", t, kr("use", { href: "#" + n }))
  );
}
const Ul = {
    __name: "WebGL",
    setup(e, { expose: t }) {
      const n = yt(),
        o = un("webgl", null);
      let r = yt();
      return (
        Rn(() => {
          o.canvas &&
            ((r.value = o.getElement()),
            r.value.classList.add("webgl-canvas"),
            n.value.appendChild(r.value));
        }),
        Dn(() => {
          r.value &&
            r.value.parentNode === n.value &&
            n.value.removeChild(r.value),
            (r.value = null);
        }),
        t({ wrapper: n, canvas: r }),
        (e, t) =>
          t[0] ||
          (Ko(-1),
          (t[0] = ir(
            "aside",
            { ref_key: "wrapper", ref: n, class: "webgl-wrapper" },
            null,
            512
          )),
          Ko(1),
          t[0])
      );
    },
  },
  Cl = t(() => import("./webgl.b3f547384adb976c.js"), []);
const kl =
    void 0 !== { debug: !0, gtm: "GTM-TQ7TTZ" }
      ? { debug: !0, gtm: "GTM-TQ7TTZ" }
      : {},
  Gl = window;
function Sl(e) {
  Gl.dataLayer.push(e);
}
function El(e = {}) {
  let t = {};
  for (const n in e) null != e[n] && (t[n] = e[n]);
  return t;
}
Gl.dataLayer = Gl.dataLayer || [];
const Tl = "VV-Access-Token",
  Ml = ["get", "head"],
  Ll = { error: { status: "DEADLINE_EXCEEDED", message: "Request timed out" } };
function Ol(e, t) {
  return function (n = "", o = null, r = {}) {
    return (
      r.fetchOptions || (r.fetchOptions = {}),
      (r.fetchOptions.method = t),
      e(n, o, r)
    );
  };
}
function $l(e, t) {
  var n, o;
  return (
    e.set("Content-Type", "application/json"),
    t instanceof FormData && ((n = t), (t = Object.fromEntries(n))),
    null == (o = t) ? "{}" : "string" == typeof o ? o : JSON.stringify(o)
  );
}
function Fl(e, t = {}) {
  return t instanceof FormData || (t = Bl(t)), t;
}
function Rl(e) {
  if (e instanceof File) return !0;
  if (Array.isArray(e)) {
    for (let t = 0; t < e.length; t++) if (Rl(e[t])) return !0;
  } else if ("object" == typeof e) for (let t in e) if (Rl(e[t])) return !0;
}
function Bl(e, t, n, o) {
  const r = t || new FormData();
  let i;
  for (const s in e) {
    let t = e[s];
    if (!Object.prototype.hasOwnProperty.call(e, s) || null == t) continue;
    i = o ? n + "[]" : n ? n + "[" + s + "]" : s;
    const l = Array.isArray(t),
      a = t instanceof Date,
      c = t instanceof File,
      u = "object" == typeof t;
    a && (t = t.toISOString()), u && !c ? Bl(t, r, i, l) : r.append(i, t);
  }
  return r;
}
function jl(e, t = {}) {
  return new Promise(function (n, o) {
    const r = t.timeout || 2e4;
    let i = !1;
    delete t.timeout;
    const s = setTimeout(() => {
      (i = !0), o(Ll);
    }, r);
    fetch(e, t)
      .then((e) => {
        i || (clearTimeout(s), n(e));
      })
      .catch((e) => {
        i || (clearTimeout(s), o(e));
      });
  });
}
let Il = {};
function Dl() {
  return Il;
}
const Nl = new Proxy({}, { get: (e, t) => Il[t] });
let Vl;
const Hl = [
    "KeyS",
    "KeyW",
    "KeyD",
    "KeyA",
    "Space",
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
  ].reduce((e, t) => ((e[t] = 1), e), {}),
  ql = ["TEXTAREA", "INPUT"].reduce((e, t) => ((e[t] = 1), e), {});
function Xl(e) {
  return (
    !!e &&
    (!e.target ||
      !(function (e) {
        if (!e) return !1;
        const t = e.tagName;
        return !!ql[t] || !(!e.dataset || null == e.dataset.bypassKeyboard);
      })(e.target))
  );
}
function Wl() {
  Vl = Dl();
  const e = Object.keys(Hl).reduce((e, t) => ((e[t] = !1), e), {}),
    t = it({
      pressedCount: 0,
      keys: e,
      unpressAllKeys: ft(i),
      listen: ft(function () {
        const e = { passive: !1 };
        window.addEventListener("keydown", n, e),
          window.addEventListener("keyup", o, e),
          window.addEventListener("mousedown", i, { passive: !0 }),
          window.addEventListener("blur", i, !1),
          window.addEventListener("contextmenu", i, !1);
      }),
    });
  return i(), (t.pressedCount = 0), t;
  function n(n) {
    Hl[n.code] &&
      Xl(n) &&
      (n.preventDefault(),
      (function (n) {
        if (e[n]) return;
        (e[n] = !0), t.pressedCount++;
      })(n.code));
  }
  function o(e) {
    Hl[e.code] && r(e.code);
  }
  function r(n) {
    e[n] && ((e[n] = !1), (t.pressedCount = Math.max(t.pressedCount - 1, 0)));
  }
  function i() {
    for (let t in e) r(t);
  }
}
function Zl(e, t, n, o) {
  return Math.sqrt(
    (function (e, t, n, o) {
      return (n - e) * (n - e) + (o - t) * (o - t);
    })(e, t, n, o)
  );
}
function zl(e, t = 0, n = 1) {
  return Math.min(Math.max(e, t), n);
}
function Kl(e, t, n, o, r) {
  return o + ((e - t) / (n - t)) * (r - o);
}
function Yl(e, t, n, o, r) {
  const i = o + ((e - t) / (n - t)) * (r - o);
  let s = o,
    l = r;
  return o > r && ((s = r), (l = o)), Math.max(s, Math.min(l, i));
}
const Ql = Jl;
function Jl(e, t, n) {
  return e * (1 - n) + t * n;
}
function ea(e, t, n, o = 0.001) {
  const r = e * (1 - n) + t * n;
  return Math.abs(t - r) < o ? t : r;
}
function ta(e, t, n, o) {
  return Jl(e, t, 1 - Math.exp(0.05 * -n * o));
}
function na(e, t, n, o, r) {
  return ea(e, t, 1 - Math.exp(0.05 * -n * o), r);
}
function oa(e, t) {
  return ((e % t) + t) % t;
}
const ra = (3 - Math.sqrt(3)) / 6,
  ia = [
    [1, 1],
    [-1, 1],
    [1, -1],
    [-1, -1],
    [1, 0],
    [-1, 0],
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [0, 1],
    [0, -1],
  ];
function sa(e = Math.random) {
  const t = new Uint8Array(256);
  for (let s = 0; s < 256; s++) t[s] = s;
  let n, o;
  for (let s = 255; s > 0; s--)
    (n = Math.floor((s + 1) * e())), (o = t[s]), (t[s] = t[n]), (t[n] = o);
  const r = new Uint8Array(512),
    i = new Uint8Array(512);
  for (let s = 0; s < 512; s++) (r[s] = t[255 & s]), (i[s] = r[s] % 12);
  return (e, t) => {
    const n = 0.5 * (e + t) * (Math.sqrt(3) - 1),
      o = Math.floor(e + n),
      s = Math.floor(t + n),
      l = (o + s) * ra,
      a = e - (o - l),
      c = t - (s - l),
      u = a > c ? 1 : 0,
      p = a > c ? 0 : 1,
      d = a - u + ra,
      f = c - p + ra,
      h = a - 1 + 2 * ra,
      m = c - 1 + 2 * ra,
      g = 255 & o,
      v = 255 & s,
      A = ia[i[g + r[v]]],
      y = ia[i[g + u + r[v + p]]],
      b = ia[i[g + 1 + r[v + 1]]],
      w = 0.5 - a * a - c * c,
      x = 0.5 - d * d - f * f,
      _ = 0.5 - h * h - m * m;
    return (
      70.14805770653952 *
      ((w < 0 ? 0 : Math.pow(w, 4) * (A[0] * a + A[1] * c)) +
        (x < 0 ? 0 : Math.pow(x, 4) * (y[0] * d + y[1] * f)) +
        (_ < 0 ? 0 : Math.pow(_, 4) * (b[0] * h + b[1] * m)))
    );
  };
}
const la = "MM" + (Math.floor(1e13 * Math.random()) + Date.now());
function aa(e) {
  return (
    "function" == typeof e && (e = e()),
    function () {
      e = ((e |= 0) + 1831565813) | 0;
      let t = Math.imul(e ^ (e >>> 15), 1 | e);
      return (
        (t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t),
        ((t ^ (t >>> 14)) >>> 0) / 4294967296
      );
    }
  );
}
function ca(e = la, t = aa) {
  let n;
  return (
    o(e),
    {
      setSeed: o,
      random: function () {
        return n();
      },
      randomFloat: function (e = 0, t = 1) {
        return n() * (t - e) + e;
      },
      randomInt: function (e = 0, t = 100) {
        return Math.floor(n() * (t - e + 1)) + e;
      },
      tossCoin: function (e = 0.5) {
        return n() < e;
      },
    }
  );
  function o(e) {
    (n = t(
      (function (e) {
        let t = 1779033703 ^ e.length;
        for (let n = 0; n < e.length; n++)
          (t = Math.imul(t ^ e.charCodeAt(n), 3432918353)),
            (t = (t << 13) | (t >>> 19));
        return function () {
          return (
            (t = Math.imul(t ^ (t >>> 16), 2246822507)),
            (t = Math.imul(t ^ (t >>> 13), 3266489909)),
            (t ^= t >>> 16) >>> 0
          );
        };
      })(e + "")
    )),
      n();
  }
}
const ua = ca(la);
function pa(e = []) {
  const t = e.slice(0).sort((e, t) => e - t),
    n = Math.floor(t.length / 2);
  return t.length % 2 == 0 ? (t[n] + t[n - 1]) / 2 : t[n];
}
function da(e = 6) {
  const t = new Float64Array(e),
    n = {
      value: 0,
      push: function (s) {
        o < e && o++;
        i = (i + 1) % e;
        const l = t[i];
        return (t[i] = s), (r += s - l), (n.value = r / o);
      },
      reset: function () {
        o = r = i = 0;
        for (let n = 0; n < e; n++) t[n] = 0;
      },
    };
  let o, r, i;
  return (o = r = i = 0), n;
}
let fa;
ua.create = ca;
const ha = ["INPUT", "SELECT", "TEXTAREA", "A", "BUTTON"].reduce(
    (e, t) => ((e[t] = 1), e),
    {}
  ),
  ma =
    void 0 !== window.visualViewport && void 0 !== window.visualViewport.scale,
  ga = ["Register", "Result", "Prizes"].reduce((e, t) => ((e[t] = 1), e), {});
function va(e) {
  return (
    !!e &&
    (!e.target ||
      !(function (e) {
        if (!e) return !1;
        const t = e.tagName;
        return (
          !!(
            ga[fa.$route.name] ||
            ha[t] ||
            (ma && 1 !== window.visualViewport.scale)
          ) || !(!e.dataset || null == e.dataset.bypassTouch)
        );
      })(e.target))
  );
}
let Aa, ya;
const ba = () => (Aa = !1);
function wa() {
  (Aa = !0), clearTimeout(ya), (ya = setTimeout(ba, 200));
}
function xa() {
  fa = Dl();
  const e = { x: 0, y: 0 },
    t = { x: 0, y: 0 },
    n = { x: 0, y: 0 },
    o = { x: 0, y: 0 },
    r = { x: 0, y: 0 },
    i = { x: 0, y: 0 },
    s = { x: 0, y: 0 };
  let l = !1,
    a = !1;
  const c = it({
    clickIn: !1,
    clickOut: !1,
    useTouch: !1,
    canHover: !1,
    pressed: !1,
    firstPos: e,
    prevPos: t,
    pos: n,
    relativePos: o,
    delta: r,
    normalizePos: i,
    normalizeRelativePos: s,
    listen: ft(function () {
      const e = window,
        t = e,
        n = "addEventListener",
        o = { passive: !1 };
      t[n]("touchstart", p, o),
        t[n]("touchmove", d, o),
        t[n]("touchend", f, o),
        t[n]("touchcancel", f, o),
        e[n]("mousedown", p, o),
        e[n]("mousemove", d, o),
        e[n]("mouseup", f, o),
        t[n]("gesturestart", (e) => e.preventDefault(), o);
    }),
    poll: ft(function () {
      (r.x = n.x - t.x),
        (r.y = n.y - t.y),
        (t.x = n.x),
        (t.y = n.y),
        (c.clickIn = l),
        (c.clickOut = a),
        (l = a = !1);
    }),
  });
  return c;
  function u(e) {
    return e.changedTouches[0];
  }
  function p(o) {
    const i = !!o.changedTouches;
    if (i) wa();
    else if (Aa) return;
    if (!i && 0 !== o.button) return;
    if (!va(o)) return;
    o.preventDefault();
    const s = i ? u(o) : o;
    (c.useTouch = !(!i && !Aa)),
      c.useTouch && (c.canHover = !1),
      (c.pressed = !0),
      (r.x = r.y = 0),
      (n.x = t.x = e.x = s.clientX),
      (n.y = t.y = e.y = s.clientY),
      (a = !1),
      (l = !0),
      h();
  }
  function d(e) {
    const t = !!e.changedTouches,
      o = t ? u(e) : e;
    (c.useTouch = !(!t && !Aa)),
      c.useTouch ? (c.canHover = !1) : c.pressed || (c.canHover = !0),
      (n.x = o.clientX || 0),
      (n.y = o.clientY || 0),
      h();
  }
  function f(e) {
    const t = !!e.changedTouches;
    if (t) wa();
    else if (Aa) return;
    if (!t && 0 !== e.button) return;
    if (va(e)) e.preventDefault();
    else if (!c.pressed) return;
    const o = t ? u(e) : e;
    (c.useTouch = t || Aa),
      c.useTouch && (c.canHover = !1),
      (c.pressed = !1),
      (n.x = o.clientX || 0),
      (n.y = o.clientY || 0),
      h(),
      (a = !0),
      (l = !1);
  }
  function h() {
    c.pressed ? ((o.x = n.x - e.x), (o.y = n.y - e.y)) : (o.x = o.y = 0);
    const t = fa.$viewport.width,
      r = fa.$viewport.height;
    (i.x = Kl(n.x, 0, t, -1, 1)),
      (i.y = Kl(n.y, 0, r, 1, -1)),
      (s.x = o.x / t),
      (s.y = o.y / r);
  }
}
let _a;
const Pa = function () {
  return (_a =
    _a ||
    globalThis.crypto ||
    t(() => import("./__vite-browser-external.afb87ea84adb976c.js"), []).then(
      (e) => e.webcrypto
    ));
};
const Ua = {
  encrypt: async function (e, t) {
    const n = await Pa(),
      o = new TextEncoder().encode(t),
      r = await n.subtle.digest("SHA-256", o),
      i = n.getRandomValues(new Uint8Array(12)),
      s = Array.from(i)
        .map((e) => String.fromCharCode(e))
        .join(""),
      l = { name: "AES-GCM", iv: i },
      a = await n.subtle.importKey("raw", r, l, !1, ["encrypt"]),
      c = new TextEncoder().encode(e),
      u = await n.subtle.encrypt(l, a, c),
      p = Array.from(new Uint8Array(u))
        .map((e) => String.fromCharCode(e))
        .join("");
    return btoa(s + p);
  },
  decrypt: async function (e, t) {
    const n = await Pa(),
      o = new TextEncoder().encode(t),
      r = await n.subtle.digest("SHA-256", o),
      i = atob(e).slice(0, 12),
      s = {
        name: "AES-GCM",
        iv: new Uint8Array(Array.from(i).map((e) => e.charCodeAt(0))),
      },
      l = await n.subtle.importKey("raw", r, s, !1, ["decrypt"]),
      a = atob(e).slice(12),
      c = new Uint8Array(Array.from(a).map((e) => e.charCodeAt(0)));
    try {
      const e = await n.subtle.decrypt(s, l, c);
      return new TextDecoder().decode(e);
    } catch (u) {
      throw new Error("Decrypt failed");
    }
  },
};
function Ca(e) {
  const t = bt(null);
  function n(e) {
    t.value = e;
  }
  return e.watchImmediate(n), In(() => e.unwatch(n)), t;
}
let ka;
const Ga = () => {},
  Sa = { log: Ga, warn: Ga, error: Ga };
ka = function () {
  return Sa;
};
const Ea = ka,
  Ta = "undefined" == typeof window ? globalThis : window,
  Ma = [],
  La = [],
  Oa = [];
let $a,
  Fa,
  Ra = null,
  Ba = null,
  ja = !1,
  Ia = !1;
function Da() {
  const e = performance.now();
  let t;
  if (
    (null === Ba && (Ba = e),
    (Fa = e - Ba),
    ($a += Fa),
    (Ba = e),
    (Ra = ja ? null : Ta.requestAnimationFrame(Da)),
    ja && (ja = !1),
    Ia)
  ) {
    for (t = 0; t < Oa.length; t++) Oa[t](Fa);
    for (t = 0; t < Ma.length; t++) Ma[t](Fa);
    for (t = 0; t < La.length; t++) La[t](Fa);
  } else for (t = 0; t < Ma.length; t++) Ma[t](Fa);
}
function Na() {
  Ia = !!(La.length > 0 || Oa.length > 0);
}
function Va(e, t, n) {
  return (
    !(!t || !e) && !~e.indexOf(t) && ((n = !!n) ? e.unshift(t) : e.push(t), !0)
  );
}
function Ha(e, t) {
  if (!t) return !1;
  const n = e.indexOf(t);
  return !!~n && (e.splice(n, 1), !(0 !== e.length));
}
function qa(e) {
  (ja = !1),
    Ra || ((Ba = null), (e = !!e) ? Da() : (Ra = Ta.requestAnimationFrame(Da)));
}
function Xa() {
  Ra && (Ta.cancelAnimationFrame(Ra), (Ra = null));
}
const Wa = {
  add: function (e, t) {
    Va(Ma, e, t) && qa();
  },
  addAfter: function (e, t) {
    Va(La, e, t) && Na();
  },
  addBefore: function (e, t) {
    Va(Oa, e, t) && Na();
  },
  remove: function (e) {
    Ha(Ma, e) && Xa();
  },
  removeAfter: function (e) {
    Ha(La, e) && Na();
  },
  removeBefore: function (e) {
    Ha(Oa, e) && Na();
  },
  start: qa,
  stop: Xa,
  time: $a,
  dt: Fa,
  requestOnce: function () {
    Ra || ((ja = !0), (Ba = null), (Ra = Ta.requestAnimationFrame(Da)));
  },
  dispose: function () {
    Xa(),
      (Ma.length = 0),
      (La.length = 0),
      (Oa.length = 0),
      (Ia = !1),
      (Ba = null),
      ($a = 0),
      (Fa = 0);
  },
};
class Za {
  constructor(e, t, n = {}) {
    const o = void 0 === n.autostart || n.autostart;
    (this._standalone = void 0 === n.standalone || n.standalone),
      (this._selfdestruct = void 0 === n.selfdestruct || n.selfdestruct),
      (this._stopped = !0),
      (this._remainder = 0),
      (this._delay = 0 | e),
      (this._remainingTime = e),
      (this._callback = void 0 === t ? function () {} : t);
    const r = this,
      i = this.update,
      s = this.restart;
    (this.update = function (e) {
      i.call(r, e);
    }),
      (this.restart = function (e, t) {
        s.call(r, e, t);
      }),
      o && this.start(),
      0 === this._delay && this.stop();
  }
  setCallback(e, t) {
    (this._callback = void 0 === e ? function () {} : e), t && this.restart(t);
  }
  stop() {
    (this._stopped = !0), this._standalone && Wa.remove(this.update);
  }
  start() {
    this._stopped && this.restart();
  }
  restart(e, t) {
    void 0 === t && (t = !0),
      void 0 !== e && (this._delay = e),
      this._standalone && this._stopped && Wa.add(this.update),
      (this._stopped = !1),
      (this._remainingTime = this._delay - this._remainder * +t);
  }
  update(e) {
    this._stopped ||
      ((this._remainingTime -= e),
      this._remainingTime <= 0
        ? ((this._stopped = !0),
          (this._remainder = -this._remainingTime % this._delay),
          this._callback(this.restart),
          this._stopped && this._selfdestruct && this.dispose())
        : (this._remainder = 0));
  }
  dispose() {
    this._standalone && Wa.add(this.update),
      (this._callback = this.restart = null),
      this.stop(),
      (this._remainder = 0),
      (this._remainingTime = this._delay);
  }
}
const za = (e, t) => Math.floor(Math.random() * (t - e)) + e;
function Ka() {}
const Ya = {},
  Qa = {},
  Ja = {};
let ec = 0;
function tc(e) {
  try {
    return e.stop(), !1;
  } catch (t) {
    return !0;
  }
}
function nc(e) {
  return (
    Ya[e] ||
      (Ya[e] = new Promise((t) => {
        const n = new XMLHttpRequest();
        n.open("GET", e, !0),
          (n.responseType = "arraybuffer"),
          (n.onload = async () => {
            t(n.response);
          }),
          n.send();
      })),
    Ya[e]
  );
}
function oc(e, t) {
  return e
    ? Ja[t]
      ? Promise.resolve(t)
      : (Qa[t] ||
          (Qa[t] = new Promise((n) => {
            nc(t).then((o) => {
              e.decodeAudioData(o, (e) => {
                (Ja[t] = e), n(t), (Qa[t] = null);
              });
            });
          })),
        Qa[t])
    : nc(t);
}
class rc {
  constructor(e) {
    (this.onEnded = this.onEnded.bind(this)),
      (this.onLoaded = this.onLoaded.bind(this)),
      (this.controller = e),
      (this.context = e.getContext()),
      (this.input = null),
      (this.output = this.context.createGain());
  }
  reset(e = {}) {
    (this.onStop = null),
      this.stop(),
      (this.pausedProgress = 0),
      (this.fadein = e.fadein || 0),
      (this.fadeout = e.fadeout || 0),
      (this.fadeinTimer = 0),
      (this.fadeoutTimer = 0),
      (this.fadeinActive = !1),
      (this.fadeoutActive = !1),
      (this.needsPlay = !1),
      (this.isPlaying = !1),
      (this.isStopping = !1),
      (this.hasEnded = !1),
      (this.loaded = !1),
      (this.stopped = !1),
      (this.fixedTimeStep = 0),
      (this.id = e.id || null),
      this.clearBuffer(),
      (this.source = null),
      (this.buffer = null),
      (this.loop = !!e.loop),
      (this.autoplay = !!e.autoplay),
      (this.playbackRate = e.playbackRate || 1),
      (this.volume = null != e.volume ? e.volume : 1),
      (this.realvolume = -1),
      (this.loopStart = e.loopStart || 0),
      (this.loopEnd = e.loopEnd || 0),
      (this.onStop = e.onStop || Ka),
      (this.baseOffset = e.start || e.baseOffset || 0),
      (this.duration = e.duration);
    const t = e.input || this.controller.getInput();
    t !== this.input &&
      (this.input && this.output.disconnect(this.input),
      (this.input = t),
      this.output.connect(this.input)),
      (this.path = e.path);
    let n = (this.requestID = ++ec);
    Ja[this.path]
      ? this.onLoaded(this.path)
      : oc(this.context, e.path).then((e) => {
          (this.requestID = n) && this.onLoaded(e);
        }),
      this.autoplay && this.play();
  }
  onLoaded(e) {
    if (this.isStopping || this.stopped) return this.realstop();
    if (this.stopped) return this.realstop();
    const t = Ja[e];
    (this.loaded = !0), (this.buffer = t), this.needsPlay && this.play();
  }
  onEnded() {
    this.loop || ((this.hasEnded = !0), this.stop());
  }
  getOutput() {
    return this.output;
  }
  update(e) {
    if (!this.source) return;
    this.fixedTimeStep && (e = this.fixedTimeStep);
    let t = this.volume;
    if (this.fadeinActive) {
      this.fadeinTimer += e;
      const n = zl(this.fadeinTimer / this.fadein, 0, 1);
      (t *= n), 1 === n && (this.fadeinActive = !1);
    }
    if (this.fadeoutActive && this.isStopping) {
      this.fadeoutTimer += e;
      const n = zl(1 - this.fadeoutTimer / this.fadeout, 0, 1);
      (t *= n), 0 === n && this.realstop();
    }
    t !== this.realvolume && this.setVolume(t);
  }
  play() {
    if ((this.source && this.stop(), !this.loaded))
      return void (this.needsPlay = !0);
    const e = (this.source = this.source || this.context.createBufferSource());
    if (
      (this.isStopping ||
        ((e.buffer = this.buffer), (e.onended = this.onEnded)),
      (this.startTime = this.context.currentTime),
      (this.isPlaying = !0),
      (this.needsPlay = !1),
      !e || !e.buffer)
    )
      return this.stop();
    (this.progressStart = this.startTime - this.offset),
      this.duration || (this.duration = e.buffer.duration);
    const t = Math.max(this.duration - this.offset, 0.01);
    if (!this.isStopping) {
      const n = (function (e, t, n, o) {
        try {
          return e.start(t, n, o), !1;
        } catch (r) {
          return !0;
        }
      })(
        this.source,
        this.startTime,
        (this.baseOffset + this.offset) % e.buffer.duration,
        this.duration ? t : void 0
      );
      if (n) return void requestAnimationFrame(() => this.stop());
    }
    this.fadein && 0 === this.fadeinTimer
      ? this.setVolume(0, !0)
      : this.setVolume(this.volume, !0),
      this.fadein && (this.fadeinActive = !0),
      this.setPlaybackRate(this.playbackRate),
      this.connect(),
      this.setLoop(this.loop),
      (this.isStopping = !1);
  }
  getCurrentTime() {
    return this.getProgress() * this.duration;
  }
  getProgress() {
    return this.isPlaying
      ? (this.context.currentTime - this.progressStart) / this.duration
      : this.pausedProgress;
  }
  connect() {
    this.source.connect(this.getOutput());
  }
  disconnect() {
    this.source.disconnect(this.getOutput());
  }
  clearBuffer() {
    this.context && this.context.clearBufferSource
      ? this.source && this.context.clearBufferSource(this.source)
      : this.source &&
        (this.source.disconnect(0), (this.source.onended = null)),
      (this.source = null);
  }
  pause() {
    (this.pausedProgress = this.getProgress()),
      (this.offset +=
        (this.context.currentTime - this.startTime) * this.playbackRate),
      (this.needsPlay = !1),
      (this.isPlaying = !1),
      this.source && (tc(this.source), this.clearBuffer());
  }
  realstop() {
    this.onStop && this.onStop(this),
      (this.onStop = null),
      (this.offset = 0),
      (this.needsPlay = !1),
      (this.isPlaying = !1),
      (this.isStopping = !1),
      (this.fadeinActive = !1),
      (this.fadeoutActive = !1),
      (this.stopped = !0),
      this.source && (tc(this.source), this.clearBuffer());
  }
  stop(e = {}) {
    if (!this.isStopping) {
      if (((this.isStopping = !0), !this.source || !this.loaded))
        return this.realstop();
      e.fadeout && (this.fadeout = e.fadeout),
        this.fadeout ? (this.fadeoutActive = !0) : this.realstop();
    }
  }
  getPlaybackRate() {
    return this.playbackRate;
  }
  setPlaybackRate(e) {
    (this.playbackRate = e),
      this.isPlaying &&
        this.source &&
        this.source.playbackRate.setTargetAtTime(
          this.playbackRate,
          this.context.currentTime,
          0.01
        );
  }
  getLoop() {
    return this.loop;
  }
  setLoop(e) {
    (this.loop = e),
      this.isPlaying &&
        this.source &&
        ((this.source.loop = this.loop),
        (this.source.loopStart = this.loopStart),
        (this.source.loopEnd = this.loopEnd));
  }
  getVolume() {
    return this.output.gain.value;
  }
  setVolume(e, t, n = 0.01) {
    (this.realvolume = e),
      t && (this.output.gain.value = this.realvolume),
      this.output.gain.setTargetAtTime(
        this.realvolume,
        this.context.currentTime,
        n
      );
  }
  release() {
    rc.release(this);
  }
}
(rc.pool = []),
  (rc.get = function (e, t) {
    const n = rc.pool.shift() || new rc(e);
    return n.reset(t), n;
  }),
  (rc.release = function (e) {
    e.clearBuffer(),
      (e.buffer = null),
      (e.onStop = null),
      rc.pool.length < 50 && rc.pool.push(e);
  });
const ic = window.performance || window.Date,
  sc = ["click", "touchstart", "touchend", "keydown"],
  lc = window.AudioContext || window.webkitAudioContext,
  ac = 44100;
let cc = null;
const uc = {
    initialized: !1,
    unlocked: !1,
    unlockerListening: !0,
    lastStuckCheck: ic.now(),
    stuckTimer: 0,
    previousWebAudioTime: 0,
  },
  pc = { onContextCreation: null, onUnlock: null, onStuck: null };
let dc = window.navigator.vendor.includes("Apple");
function fc() {
  uc.unlocked ||
    (!(function () {
      if (cc) return;
      cc = (function () {
        try {
          return new lc().close(), new lc();
        } catch (e) {
          return null;
        }
      })();
      const e = (cc.scratchBuffer = cc.createBuffer(1, 1, 22050));
      (cc.clearBufferSource = (t) => {
        if (t && ((t.onended = null), t.disconnect(0), dc))
          try {
            t.buffer = e;
          } catch (n) {}
      }),
        (uc.initialized = !0),
        pc.onContextCreation && pc.onContextCreation(cc);
      mc();
    })(),
    cc.suspend(),
    window.setTimeout(() => cc.resume(), 10),
    (function () {
      uc.unlockerListening = !1;
      for (const e of sc)
        document.removeEventListener(e, fc, { passive: !0, capture: !0 });
    })(),
    (uc.unlocked = !0),
    (uc.stuckTimer = -800),
    (uc.lastStuckCheck = ic.now()),
    pc.onUnlock && pc.onUnlock());
}
function hc() {
  (uc.unlocked = !1), (uc.unlockerListening = !0);
  for (const e of sc)
    document.addEventListener(e, fc, { passive: !0, capture: !0 });
}
function mc() {
  window.requestAnimationFrame(mc);
  const e = ic.now(),
    t = e - uc.lastStuckCheck;
  if (!uc.initialized || !cc || t < 400) return;
  const n = cc.currentTime,
    o = n === uc.previousWebAudioTime;
  (uc.stuckTimer = o ? uc.stuckTimer + t : 0),
    (uc.previousWebAudioTime = n),
    (uc.lastStuckCheck = e),
    uc.stuckTimer > 400 &&
      uc.unlocked &&
      !uc.unlockerListening &&
      (hc(), pc.onStuck && pc.onStuck());
}
const gc = {
    init: function () {
      uc.initialized ||
        ((function (e) {
          const t = new ArrayBuffer(10),
            n = new DataView(t);
          n.setUint32(0, e, !0),
            n.setUint32(4, e, !0),
            n.setUint16(8, 1, !0),
            window.btoa(String.fromCharCode(...new Uint8Array(t))).slice(0, 13);
        })(ac),
        hc(),
        (async function () {
          (await void 0) && fc();
        })());
    },
    getVolume: function (e) {
      return e.gain.value;
    },
    setVolume: function (e, t) {
      e.gain.setValueAtTime(t, cc.currentTime);
    },
    getContext: () => cc,
    isUnlocked: () => uc.unlocked,
    set debug(e) {},
    set onContextCreation(e) {
      pc.onContextCreation = e;
    },
    set onUnlock(e) {
      pc.onUnlock = e;
    },
    set onStuck(e) {
      pc.onStuck = e;
    },
  },
  vc = "/assets/audiosprites.31912b404adb976c.m4a",
  Ac = {};
JSON.parse(
  '[["sfx_Dash",[[0,0.6667,0.6667],[0.7667,1.4333,0.6667],[1.5333,2.2,0.6667],[2.3,2.9,0.6],[3,3.6667,0.6667]]],["sfx_Death",3.7667,5.7197,1.953],["sfx_EggMerge_ToDouble",5.8197,6.2197,0.4],["sfx_EggMerge_ToSingle",6.3197,6.8197,0.5],["sfx_Pickup_DoubleEgg_RobotVoice",[[6.9197,7.3864,0.4667],[7.4864,7.953,0.4667],[8.053,8.553,0.5],[8.653,9.1197,0.4667],[9.2197,9.6864,0.4667],[9.7864,10.253,0.4667],[10.353,10.8197,0.4667],[10.9197,11.3864,0.4667]]]]'
).forEach(([e, t, n, o]) => {
  Ac[e] = Array.isArray(t)
    ? {
        id: e,
        path: vc,
        variations: t.map((t) => ({
          id: e,
          start: t[0],
          end: t[1],
          duration: t[2],
        })),
      }
    : { id: e, path: vc, start: t, end: n, duration: o };
}),
  (Ac.music_Loop = {
    path: "/assets/music_Loop.fb8c44344adb976c.m4a",
    unique: !0,
  }),
  (Ac.sfx_Amb_Loop = {
    path: "/assets/sfx_Amb_Loop.fe2107e24adb976c.m4a",
    unique: !0,
  });
const yc = Ac,
  bc = 0.05 * Math.log(10);
const wc = (e) => {
    return (t = e + 0), Math.exp(t * bc);
    var t;
  },
  xc = (e, t) => Object.assign(yc[e], t);
function _c(e, t, n, o) {
  (this.fn = t), (this.ctx = n || null), (this.owner = e), (this.once = !!o);
}
function Pc(e) {
  if (!e || !e.owner) return;
  e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev);
  const t = e.owner;
  (e.ctx = e.fn = e.owner = null),
    e === t._first && (t._first = e.next),
    e === t._last && (t._last = e.prev);
}
xc("music_Loop", { loop: !0, fadein: 2e3, fadeout: 700, volume: wc(-6) }),
  xc("sfx_Amb_Loop", { loop: !0, fadein: 2e3, fadeout: 700, volume: wc(-6) });
class Uc {
  constructor() {
    (this._first = this._last = null), (this._isStoreSignal = !0);
  }
  emit(e, t, n) {
    let o = this._first;
    for (; o; )
      o.fn.call(o.ctx, e, t, n), o.once && this.unwatch(o), (o = o.next);
  }
  watch(e, t, n) {
    const o = new _c(this, e, t, n);
    return (
      this._first
        ? ((this._last.next = o), (o.prev = this._last), (this._last = o))
        : ((this._first = o), (this._last = o)),
      o
    );
  }
  watchOnce(e, t) {
    return this.watch(e, t, !0);
  }
  unwatch(e, t) {
    if (e instanceof _c) return Pc(e);
    t || (t = null);
    let n = this._first;
    for (; n; ) n.fn === e && n.ctx === t && Pc(n), (n = n.next);
  }
  unwatchAll() {
    let e = this._first;
    for (this._first = this._last = null; e; ) Pc(e), (e = e.next);
  }
}
Uc.prototype.destroy = Uc.prototype.unwatchAll;
const Cc = Pc;
function kc() {
  return new Uc();
}
const Gc = new Set(),
  Sc = {
    stack: Gc,
    isFrozen: !1,
    holdEmits: Ec,
    releaseEmits: Tc,
    batchUpdates: function (e) {
      return function (t, n, o) {
        Ec(), e(t, n, o), Tc();
      };
    },
  };
function Ec() {
  Sc.isFrozen = !0;
}
function Tc() {
  (Sc.isFrozen = !1), Gc.forEach(Mc), Gc.clear();
}
function Mc(e) {
  e._emit();
}
class Lc extends Uc {
  constructor(e) {
    super(), (this.previous = null), (this.value = e);
  }
  get() {
    return this.value;
  }
  set(e, t) {
    if (t || this.value !== e) {
      if (((this.previous = this.value), (this.value = e), Sc.isFrozen))
        return Sc.stack.add(this);
      this._emit();
    }
  }
  watchImmediate(e, t) {
    const n = this.watch(e, t);
    return e.call(t, this.value, this.previous), n;
  }
  _emit() {
    let e = this._first;
    for (; e; )
      e.fn.call(e.ctx, this.value, this.previous),
        e.once && this.unwatch(e),
        (e = e.next);
    this.previous = null;
  }
  update(e, t) {
    const n = e(this.value);
    this.set(void 0 !== n ? n : this.value, t);
  }
}
function Oc(e) {
  return new Lc(e);
}
const { holdEmits: $c, releaseEmits: Fc, batchUpdates: Rc } = Sc,
  Bc = (e, t) => (void 0 !== e ? e : t),
  jc = (e, t) => Math.random() * (t - e) + e;
const Ic = [
  [
    "router",
    function (e = {}) {
      const t = e.basepath || "/",
        n = e.routes || [];
      e.notFoundComponent
        ? n.push({
            path: "/:pathMatch(.*)*",
            name: "404",
            component: e.notFoundComponent,
          })
        : n.push({ path: "/:pathMatch(.*)*", redirect: "/" });
      const o = e.historyMode(t),
        r = Fs(Object.assign({ routes: n, history: o }, e)),
        i = r.install;
      return (
        (r.install = function (e) {
          const t = e.config.globalProperties;
          e.provide("router", r),
            e.component("NiceRouterView", Ks),
            i.call(this, e),
            (function (e, t) {
              e.component("NiceViewContainer", Zs),
                (t.setNiceViewOptions = Qs),
                (t.nrv = Qs),
                (t.isNiceView = Ys);
            })(e, r),
            (t.$router.previousRoute = bt()),
            (t.$previousRoute = null),
            (r.firstRoute = bt()),
            r.beforeEach((e, t) => {
              r.firstRoute.value = { to: e, from: t };
            }),
            r.afterEach((e, n, o) => {
              o ||
                ((r.firstRoute.value = null),
                (t.$previousRoute = n),
                (t.$router.previousRoute.value = n));
            });
        }),
        r
      );
    },
    {},
  ],
  [
    "store",
    function () {
      let e;
      return {
        install: function (t) {
          const n = {};
          for (const e in el) {
            const o = e.split("/").pop().slice(0, -3);
            (n[o] = el[e].default),
              "function" == typeof n[o] && (n[o] = n[o](t));
          }
          e = tl(n.index) ? n.index : {};
          for (const o in n) "index" !== o && tl(n[o]) && (e[o] = n[o]);
          (e = it(e)),
            (t.config.globalProperties.$store = e),
            t.provide("store", e);
        },
      };
    },
    {},
  ],
  [
    "preloader",
    function (e = {}) {
      const t = e.preloaderComponent || ol;
      let n,
        o,
        r,
        i,
        s,
        l,
        a,
        c = !1,
        u = 2,
        p = 0,
        d = !1,
        f = Promise.resolve();
      const h = [],
        m = new Promise((e) => (l = e));
      let g = null;
      const v = ft(new Promise((e) => (g = e)));
      let A = null;
      const y = it({
        progress: 0,
        taskCount: 0,
        taskFinished: 0,
        finished: !1,
        hidden: !1,
        hiddenPromise: v,
        destroyed: !1,
        destroyedPromise: ft(new Promise((e) => (A = e))),
        task: function (e, { weight: t = 1, graceful: n = !0 } = {}) {
          return (
            U(t),
            f
              .then(() => ("function" == typeof e ? e() : e))
              .then((e) => (P(t), e))
              .catch((e) => {
                console.error(e), n && P(t);
              })
          );
        },
        createTask: C,
        setMinimumTaskCount: function (e) {
          (u = e), (y.taskCount = Math.max(u, p));
        },
        beforeExit: function (e) {
          d ? e() : h.push(e);
        },
      });
      return function (e) {
        (i = C()),
          (r = e),
          r.config.globalProperties.$router.beforeEach(x),
          (r.config.globalProperties.$preloader = y),
          r.provide("preloader", y),
          (o = document.getElementById("preloader")),
          (n = t(r, o)),
          n.init && n.init();
        n.enter && (a = n.enter());
        if (
          ((s = (function (e, t) {
            return mn(e, null, { flush: "post" });
          })(() =>
            (function () {
              const e = y.progress;
              n.onProgress && n.onProgress(e);
              e >= 1 &&
                (function () {
                  if (d) return;
                  (d = !0),
                    Promise.resolve()
                      .then(() => a)
                      .then(() =>
                        h.reduce((e, t) => e.then(t), Promise.resolve())
                      )
                      .then(() => (h.length = 0))
                      .then(() => (y.finished = !0))
                      .then(() => n.exit && n.exit(b))
                      .then(w)
                      .catch((e) => {
                        console.error(e), w();
                      });
                })();
            })(y.progress)
          )),
          r && r.onAfterMount)
        ) {
          let e;
          (f = new Promise((t) => (e = t))), r.onAfterMount(e);
        }
      };
      function b() {
        y.hidden ||
          y.destroyed ||
          ((y.hidden = !0), g(), s && s(), (s = null), l());
      }
      function w() {
        y.destroyed ||
          (b(),
          o.parentNode && o.parentNode.removeChild(o),
          n.beforeDestroy && n.beforeDestroy(),
          A(),
          (o = null),
          (n = null),
          (y.destroyed = !0));
      }
      function x(e, t, n) {
        c || (r.config.globalProperties.$router.beforeResolve(_), (c = !0)),
          n();
      }
      async function _(e, t, n) {
        i.finish(), await m, n();
      }
      function P(e) {
        y.taskFinished += e;
        const t = y.taskFinished / y.taskCount;
        y.progress = Math.max(0, Math.min(1, Math.max(y.progress, t)));
      }
      function U(e) {
        (p += e), (y.taskCount = Math.max(u, p));
      }
      function C({ weight: e = 1 } = {}) {
        let t = !1;
        return (
          U(e),
          {
            get finished() {
              return t;
            },
            finish() {
              t || ((t = !0), P(e));
            },
          }
        );
      }
    },
    {},
  ],
  [
    "i18n",
    function () {
      const e = __DATA.project.locales,
        t = e[__DATA.page.locale],
        n = __DATA.page.translations;
      let o = e[0];
      for (let i in t)
        if (t[i].default) {
          o = t[i];
          break;
        }
      const r = ft({
        locales: e,
        locale: t,
        translations: n,
        defaultLocale: o,
      });
      return function (e) {
        (e.config.globalProperties.$i18n = r),
          (e.config.globalProperties.$l = sl);
      };
    },
    {},
  ],
  [
    "device",
    function (e = {}) {
      const t = {
        install: function (o) {
          (o.config.globalProperties.$device = t),
            o.provide("device", t),
            (function () {
              const n = hl(e.userAgent);
              Object.assign(t, n),
                (function (e) {
                  const t = document.documentElement;
                  e.hasTouch && t.classList.add("touch");
                  for (const n in e.type)
                    e.type[n] && t.classList.add(n.toLowerCase());
                  e.browser &&
                    e.browser.length > 0 &&
                    t.classList.add(e.browser.toLowerCase());
                  e.os &&
                    e.os.length > 0 &&
                    "Unknown" !== e.os &&
                    t.classList.add(e.os.toLowerCase());
                })(t);
            })(),
            o.onBeforeMount(async () => {
              await t.gpuDetectionFinished, n(t.gpu.qualityIndex);
            }),
            delete t.install;
        },
        updateQuality: n,
      };
      return t;
      function n(e) {
        const n = document.documentElement;
        if (!t.gpu) return;
        t.gpu.qualityIndex = e;
        const o = t.gpu.qualities;
        for (const r in o)
          t.gpu && t.gpu.quality && (t.gpu.quality[o[r]] = r <= e),
            n.classList.toggle(o[r], e == r);
      }
    },
    {},
  ],
  [
    "viewport",
    function () {
      const e = Is(r, 500, { trail: !1 });
      let t = null;
      const n = it({
        width: 10,
        height: 10,
        viewportRatio: 1,
        pixelRatio: 1,
        visible: !0,
      });
      function o() {
        (wl = document.createElement("div")),
          Object.assign(wl.style, {
            position: "fixed",
            top: 0,
            left: 0,
            width: "200px",
            height: "10px",
            overflowY: "scroll",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: -1,
            opacity: 0,
          }),
          (t = {
            measureScrollbarWidth: function () {
              const e = document.createElement("div");
              Object.assign(wl.style, {
                width: "200px",
                height: "10px",
                overflowY: "scroll",
              }),
                Object.assign(e.style, { width: "100%", height: "150%" }),
                wl.appendChild(e),
                document.body.appendChild(wl);
              const t = parseFloat(getComputedStyle(bl).zoom),
                n = isNaN(t) ? 1 : t,
                o = Math.round((200 - wl.clientWidth) * n);
              return (
                bl.style.setProperty("--scrollbar-width", o + "px"),
                document.body.removeChild(wl),
                wl.removeChild(e),
                Object.assign(wl.style, {
                  width: "1px",
                  height: "100%",
                  overflowY: "hidden",
                }),
                o
              );
            },
            measureViewportHeight: function () {
              document.body.appendChild(wl);
              const e = wl.getBoundingClientRect().height;
              return (
                document.body.removeChild(wl),
                bl.style.setProperty(
                  "--inner-height",
                  window.innerHeight + "px"
                ),
                bl.style.setProperty("--vp-height", e + "px"),
                e
              );
            },
          }),
          t.measureScrollbarWidth(),
          document.addEventListener("visibilitychange", s, !1),
          setInterval(i, 5e3),
          window.addEventListener(
            "resize",
            () => {
              r(), e();
            },
            !1
          ),
          r(),
          i(),
          s();
      }
      function r() {
        (n.width = window.innerWidth),
          (n.height = t.measureViewportHeight()),
          (n.viewportRatio = n.width / n.height);
      }
      function i() {
        n.pixelRatio = window.devicePixelRatio || 1;
      }
      function s() {
        (n.visible = !document.hidden), r();
      }
      return function (e) {
        (e.config.globalProperties.$viewport = n),
          e.provide("viewport", n),
          o();
      };
    },
    {},
  ],
  [
    "svgIcons",
    function () {
      const e = {
        install: function (t) {
          (t.config.globalProperties.$svgIcons = e),
            t.provide("svgIcons", e),
            delete e.install,
            t.component("SvgIcon", Pl);
        },
      };
      return e;
    },
    {},
  ],
  [
    "webgl",
    function (e = {}) {
      let t,
        n,
        o = !1,
        r = [];
      const i = new Proxy(
          {},
          {
            get: function (e, t) {
              if (s[t]) return s[t];
              return n ? n[t] : void 0;
            },
          }
        ),
        s = {
          onReady: function (e) {
            o ? e(i) : r.push(e);
          },
          get isReady() {
            return o;
          },
          get canvas() {
            return t;
          },
        };
      return (
        (s.getElement = function () {
          return t;
        }),
        function (e) {
          e.provide("webgl", i), e.component("WebGL", Ul);
          const s = e.config.globalProperties;
          (s.$webGL = i),
            (s.$webgl = i),
            (t = document.createElement("canvas"));
          const l = s.$preloader;
          l &&
            (l.task(
              async () => {
                const { loadWebGL: e } = await Cl;
                (n = e({ app: s, canvas: t })),
                  (function () {
                    o = !0;
                    for (let e = 0; e < r.length; e++) r[e](i);
                    r.length = 0;
                  })(),
                  await n.init(),
                  await n.preload();
              },
              { weight: 3 }
            ),
            l.beforeExit(async () => {
              await n.start(), await n.prerender();
            }));
        }
      );
    },
    {},
  ],
  [
    "analytics",
    function (e = {}) {
      const t = [];
      let n = null,
        o = null,
        r = !1,
        i = !1,
        s = e.gtm || kl.gtm || null;
      e.ga4 || kl.ga4;
      let l = "NONE";
      s && (l = "GTM");
      const a = {
          init: p,
          type: l,
          enable: function () {
            i = !1;
          },
          disable: function () {
            i = !0;
          },
          pageview: function e({ title: l, url: c, path: p, ...d } = {}) {
            var f, h, m, g;
            if (i) return;
            const v = n.$router || !1,
              A = v && v.currentRoute && v.currentRoute.value;
            l || (l = A ? A.name : document.title);
            c && c.startsWith("/") && ((p = c), (c = !1));
            p || (p = A ? A.fullPath : document.location.pathname);
            c || (c = document.location.origin + p);
            if (!r) return void t.push(() => e({ title: l, path: p, url: c }));
            if ((c = (c + "").split("?")[0]) === o) return;
            (o = c), (c += document.location.search);
            const y = {
                ...d,
                ...El({ page_location: c, page_path: p, page_title: l }),
              },
              b =
                (null ==
                (h =
                  null == (f = null == window ? void 0 : window.__DATA)
                    ? void 0
                    : f.page)
                  ? void 0
                  : h.locale) ??
                (null ==
                (g =
                  null == (m = null == window ? void 0 : window.__DATA)
                    ? void 0
                    : m.site)
                  ? void 0
                  : g.locale);
            b && (y.locale = b);
            if ((u(y), y.cancelled || y.disable)) return;
            s && Sl({ event: "page_view", ...y });
            a.onEventSent && a.onEventSent("page_view", y);
          },
          event: function e({
            name: n,
            category: o,
            action: l,
            label: c,
            value: p,
            ...d
          } = {}) {
            var f, h, m, g;
            if (i) return;
            if (((n = n || "ga_event"), !r))
              return void t.push(() =>
                e({ name: n, category: o, action: l, label: c, value: p, ...d })
              );
            const v = {
                ...d,
                ...El({
                  event_category: o,
                  event_action: l,
                  event_label: c,
                  event_value: p,
                }),
              },
              A =
                (null ==
                (h =
                  null == (f = null == window ? void 0 : window.__DATA)
                    ? void 0
                    : f.page)
                  ? void 0
                  : h.locale) ??
                (null ==
                (g =
                  null == (m = null == window ? void 0 : window.__DATA)
                    ? void 0
                    : m.site)
                  ? void 0
                  : g.locale);
            A && (v.locale = A);
            if ((u(v), v.cancelled || v.disable)) return;
            s && Sl({ event: n, ...v });
            a.onEventSent && a.onEventSent(n, v);
          },
          rawEvent: function e(n = {}) {
            if (i) return;
            if (!r) return void t.push(() => e(n));
            if ((u(n), n.cancelled || n.disable)) return;
            s && Sl(n), a.onEventSent && a.onEventSent(n.name, n);
          },
          beforeEventSend: function (e) {
            "function" == typeof e && c.add(e);
            return () => c.delete(e);
          },
          onEventSent: null,
          setGTM: (e) => (s = e),
        },
        c = new Set();
      function u(e) {
        for (const t of c) if ((t(e), e.cancelled || e.disable)) return;
      }
      function p() {
        i ||
          r ||
          ((r = !0),
          (function (e, t, n, o, r) {
            (e[o] = e[o] || []),
              e[o].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            var i = t.getElementsByTagName(n)[0],
              s = t.createElement(n);
            (s.async = !0),
              (s.src = "https://www.googletagmanager.com/gtm.js?id=" + r),
              i.parentNode.insertBefore(s, i);
          })(window, document, "script", "dataLayer", s),
          t.forEach((e) => e()),
          (t.length = 0));
      }
      return function (t) {
        (n = t.config.globalProperties),
          (t.config.globalProperties.$analytics = a),
          t.provide("analytics", a),
          e.autoInit && p();
      };
    },
    {},
  ],
  [
    "firebaseCF",
    function () {
      const e = "msi-egg-hunt",
        t = {
          api: { region: "europe-west1", id: "archive-api" },
          export: { region: "europe-west1", id: "archive-export" },
        },
        n = "b78fead18c85fe1bfd949886bfc0ea99d9a32ea2dc4578645a3a2fb0a1e151be",
        o = "europe-west1",
        r = {
          get url() {
            return i();
          },
          get projectID() {
            return projectID;
          },
          get environment() {
            return environment;
          },
          get token() {
            return token;
          },
          head: Ol(s, "head"),
          post: Ol(s, "post"),
          get: Ol(s, "get"),
          patch: Ol(s, "patch"),
          put: Ol(s, "put"),
          delete: Ol(s, "delete"),
          request: s,
          getBaseURL: i,
          objectToFormData: Bl,
          fetchTimeout: jl,
        };
      function i({ region: t = o, project: n = e } = {}) {
        return `https://${t}-${n}.cloudfunctions.net/`;
      }
      async function s(
        e = "api",
        o = null,
        {
          params: r = null,
          type: s = null,
          region: l = null,
          fetchOptions: a = {},
        }
      ) {
        const c = e.split("/").filter((e) => e.length),
          u = c.shift().trim(),
          p = t[u];
        if (!p) throw new Error("No endpoint " + id);
        (e = (e = c.join("/").trim()).length ? "/" + e : ""),
          l || (l = p.region);
        const d = p.id + e,
          f = new URL(i(l) + d);
        (a = Object.assign({}, a)).method = (a.method || "get").toLowerCase();
        const h =
          a.headers instanceof Headers
            ? a.headers
            : new Headers(a.headers || {});
        h.set(Tl, n), (o = a.body || o);
        const m = !Ml.includes(a.method);
        if (
          (o && !m && ((r = Object.assign({}, o, r)), (o = void 0)),
          r && "object" == typeof r)
        )
          for (const t in r) f.searchParams.append(t, r[t]);
        const g = o instanceof FormData;
        if (null == o || "json" === s) o = $l(h, o);
        else if ("formdata" === s || "form" === s || g) o = Fl(h, o);
        else {
          o = "object" == typeof o && Rl(o) ? Fl(h, o) : $l(h, o);
        }
        (a.headers = h),
          m ? (a.body = o) : (delete a.body, a.headers.delete("Content-Type"));
        try {
          const e = await jl(f, a);
          if (!e.ok) throw { result: e, data: null };
          if (e === Ll) throw { result: null, data: e };
          const t = await e.json();
          if (t.error) throw { result: e, data: t };
          return t;
        } catch (v) {
          const e = await (async function (e) {
            var t, n, o, r, i;
            e.result || e.data || console.error(e);
            if (
              !e.data &&
              (null == (t = null == e ? void 0 : e.result) ? void 0 : t.json)
            )
              try {
                e.data = await e.result.json();
              } catch {
                e.data = null;
              }
            let s =
                (null == (n = null == e ? void 0 : e.result)
                  ? void 0
                  : n.status) ?? 400,
              l =
                (null == (o = null == e ? void 0 : e.result)
                  ? void 0
                  : o.statusText) ?? "UNKNOWN",
              a =
                (null == (r = null == e ? void 0 : e.result)
                  ? void 0
                  : r.statusText) ?? "Unknown Error",
              c = {},
              u = null;
            if (null == (i = null == e ? void 0 : e.data) ? void 0 : i.error) {
              const t = e.data.error;
              null != t.id && (u = t.id),
                null != t.status && (l = t.status),
                null != t.message && (a = t.message),
                null != t.details && (c = t.details);
            }
            (l = l.toUpperCase().replace(/[ -]/g, "_")),
              null == u && (u = l.toLowerCase().replace(/[ _]/g, "-"));
            return {
              ...(e.data || {}),
              error: { status: l, code: s, id: u, message: a, details: c },
            };
          })(v);
          return e;
        }
      }
      return function (e) {
        (e.config.globalProperties.$cf = r), e.provide("cf", r);
      };
    },
    {},
  ],
  [
    "controls",
    function () {
      const e = {
        listen: function () {
          e.touch.listen(), e.keyboard.listen();
        },
        poll: function () {
          e.touch.poll();
        },
        touch: xa(),
        keyboard: Wl(),
      };
      return function (t) {
        (t.config.globalProperties.$controls = e), t.provide("controls", e);
      };
    },
    {},
  ],
  [
    "user",
    function (e) {
      const t = (function (e, t = it) {
        const n = {};
        for (const o in e)
          "function" == typeof e[o] ? (n[o] = ft(e[o])) : (n[o] = e[o]);
        return t(n);
      })({
        userID: null,
        init: function () {
          !(async function () {
            const n = e.userID || localStorage.getItem("msi_ID");
            n &&
              ((t.userID = n),
              (function (e) {
                localStorage.setItem("msi_ID", e);
              })(n));
          })();
        },
        register: async function () {
          if (!t.userID) return;
          const e = await Ua.encrypt(
            JSON.stringify({ score: Nl.$store.score })
          );
          await Nl.$cf.post("api/register", {
            score: Nl.$store.score,
            USER_REAL_KEY: e,
            userID: t.userID,
          });
        },
      });
      return function (e) {
        (e.config.globalProperties.$user = t), e.provide("user", t);
      };
    },
    {},
  ],
  [
    "audio",
    function () {
      const e = Oc(!1);
      let t,
        n,
        o,
        r,
        i = !1,
        s = !1;
      const l = (e) => e.update(o),
        a = {},
        c = new Set();
      let u = 1;
      const p = { main: 1, fade: 1, smoothMute: 1, mute: 1 },
        d = {
          muted: e,
          init: function () {
            if (i) return;
            (i = !0),
              (gc.debug = !0),
              (gc.onUnlock = g),
              (gc.onContextCreation = h),
              (gc.onStuck = m),
              gc.init(),
              Wa.add(A),
              pn(() => {
                const e = r.$store.isAudioMuted || r.$store.isVideoPlaying;
                d.muted.set(e);
              }),
              hn(() => r.$viewport.visible, f, { immediate: !0 }),
              d.muted.watchImmediate(v);
          },
          unlocked: Oc(!1),
          get masterVolume() {
            return u;
          },
          getContext: () => t,
          getInput: () => n,
          list: yc,
          play: w,
          pause: x,
          stop: _,
          playSound: P,
          stopSound: function (e, t = {}) {
            const n = a[e];
            if (!n) return;
            n.forEach((e) => e.stop(t));
          },
          preloadSound: C,
        };
      function f(e) {
        t && (e ? (w(), (p.fade = 1)) : (x(), (p.fade = 0)), b());
      }
      function h(e) {
        (t = e), (n = e.createGain()), n.connect(e.destination);
        for (let t = 0; t < 20; t++) {
          new rc(d).release();
        }
      }
      function m() {
        _(), d.unlocked.set(!1);
      }
      function g() {
        var e, t, n;
        d.unlocked.set(!0),
          null ==
            (n =
              null == (t = null == (e = r.$webgl) ? void 0 : e.quality)
                ? void 0
                : t.reset) || n.call(t, 1e3);
      }
      function v(e) {
        p.mute = e ? 0 : 1;
      }
      function A(e) {
        if (gc.isUnlocked()) {
          o = e;
          for (const t of c)
            (t.timer -= e), t.timer <= 0 && (c.delete(t), P(t.id, t.opts));
          if ((b(), !s)) for (const e in a) a[e].forEach(l);
        }
      }
      let y = -1;
      function b() {
        const e = p;
        (e.smoothMute = ea(e.smoothMute, e.mute, 0.1, 0.001)),
          (u = e.main * e.fade * e.smoothMute),
          u !== y && ((y = u), gc.setVolume(n, u));
      }
      function w() {
        if (s) {
          s = !1;
          for (const e in a)
            a[e].forEach((e) => {
              e.loop || e.play();
            });
        }
      }
      function x() {
        if (!s) {
          s = !0;
          for (const e in a)
            a[e].forEach((e) => {
              e.loop || e.pause();
            });
        }
      }
      function _() {
        for (const e in a) a[e].forEach((e) => e.stop());
      }
      function P(e, t = {}) {
        if ((t.delay, !gc.isUnlocked())) return;
        const n = yc[e];
        if (!n) return;
        if (t.delay) {
          const n = t.delay;
          return delete t.delay, void c.add({ id: e, opts: t, timer: n });
        }
        if ((a[e] || (a[e] = new Set()), n.unique && a[e].size > 0)) {
          const t = a[e].values().next().value;
          return t.play(), t;
        }
        if (
          ((t.id = e),
          (t.path = n.path),
          (t.onStop = U),
          (t.autoplay = t.autoplay ?? !0),
          (t.loop = Bc(t.loop, !!n.loop)),
          (t.fadein = t.fadein || n.fadein),
          (t.fadeout = t.fadeout || n.fadeout),
          n.variations)
        ) {
          let e = t.variation && n.variations[t.variation - 1];
          e || (e = (o = n.variations)[za(0, o.length)]),
            (t.start = Bc(t.start, e.start)),
            (t.duration = Bc(t.duration, e.duration)),
            (t.loopStart = Bc(t.loopStart, Bc(e.loopStart, t.start))),
            (t.loopEnd = Bc(t.loopEnd, Bc(e.loopEnd, t.start + t.duration)));
        } else
          (t.start = Bc(t.start, n.start)),
            (t.duration = Bc(t.duration, n.duration)),
            (t.loopStart = Bc(t.loopStart, Bc(n.loopStart, t.start))),
            (t.loopEnd = Bc(t.loopEnd, Bc(n.loopEnd, t.start + t.duration)));
        var o;
        t.volume = Bc(t.volume, Bc(n.volume, 1));
        const r = n.randomRate ?? t.randomRate;
        t.playbackRate = r
          ? jc(r[0], r[1])
          : null != t.playbackRate
          ? t.playbackRate
          : 1;
        const i = rc.get(d, t);
        return a[e].add(i), i;
      }
      function U(e) {
        const t = a;
        e.release();
        const n = t[e.id];
        n && n.delete(e);
      }
      function C(e) {
        const n = yc[e];
        if (!n) return;
        const o = n.path;
        return oc(t, o);
      }
      return function (e) {
        if (
          ((r = e.config.globalProperties),
          (r.$audio = d),
          e.provide("audio", d),
          e.onBeforeMount && r.$preloader)
        )
          for (let t in yc) {
            if (yc[t].path.includes("sprite")) {
              r.$preloader.task(C(t));
              break;
            }
          }
        d.init();
      };
    },
    {},
  ],
];
var Dc = 4,
  Nc = 0.001,
  Vc = 1e-7,
  Hc = 10,
  qc = 11,
  Xc = 1 / (qc - 1),
  Wc = "function" == typeof Float32Array;
function Zc(e, t) {
  return 1 - 3 * t + 3 * e;
}
function zc(e, t) {
  return 3 * t - 6 * e;
}
function Kc(e) {
  return 3 * e;
}
function Yc(e, t, n) {
  return ((Zc(t, n) * e + zc(t, n)) * e + Kc(t)) * e;
}
function Qc(e, t, n) {
  return 3 * Zc(t, n) * e * e + 2 * zc(t, n) * e + Kc(t);
}
function Jc(e) {
  return e;
}
var eu = function (e, t, n, o) {
  if (!(0 <= e && e <= 1 && 0 <= n && n <= 1))
    throw new Error("bezier x values must be in [0, 1] range");
  if (e === t && n === o) return Jc;
  for (var r = Wc ? new Float32Array(qc) : new Array(qc), i = 0; i < qc; ++i)
    r[i] = Yc(i * Xc, e, n);
  function s(t) {
    for (var o = 0, i = 1, s = qc - 1; i !== s && r[i] <= t; ++i) o += Xc;
    --i;
    var l = o + ((t - r[i]) / (r[i + 1] - r[i])) * Xc,
      a = Qc(l, e, n);
    return a >= Nc
      ? (function (e, t, n, o) {
          for (var r = 0; r < Dc; ++r) {
            var i = Qc(t, n, o);
            if (0 === i) return t;
            t -= (Yc(t, n, o) - e) / i;
          }
          return t;
        })(t, l, e, n)
      : 0 === a
      ? l
      : (function (e, t, n, o, r) {
          var i,
            s,
            l = 0;
          do {
            (i = Yc((s = t + (n - t) / 2), o, r) - e) > 0 ? (n = s) : (t = s);
          } while (Math.abs(i) > Vc && ++l < Hc);
          return s;
        })(t, o, o + Xc, e, n);
  }
  return function (e) {
    return 0 === e ? 0 : 1 === e ? 1 : Yc(s(e), t, o);
  };
};
const tu = {
    linear: [0.25, 0.25, 0.75, 0.75],
    inSine: [0.47, 0, 0.745, 0.715],
    outSine: [0.39, 0.575, 0.565, 1],
    inOutSine: [0.445, 0.05, 0.55, 0.95],
    inQuad: [0.55, 0.085, 0.68, 0.53],
    outQuad: [0.25, 0.46, 0.45, 0.94],
    inOutQuad: [0.455, 0.03, 0.515, 0.955],
    inCubic: [0.55, 0.055, 0.675, 0.19],
    outCubic: [0.215, 0.61, 0.355, 1],
    inOutCubic: [0.645, 0.045, 0.355, 1],
    inQuart: [0.895, 0.03, 0.685, 0.22],
    outQuart: [0.165, 0.84, 0.44, 1],
    inOutQuart: [0.77, 0, 0.175, 1],
    inQuint: [0.755, 0.05, 0.855, 0.06],
    outQuint: [0.23, 1, 0.32, 1],
    inOutQuint: [0.86, 0, 0.07, 1],
    inExpo: [0.95, 0.05, 0.795, 0.035],
    outExpo: [0.19, 1, 0.22, 1],
    inOutExpo: [1, 0, 0, 1],
    inCirc: [0.6, 0.04, 0.98, 0.335],
    outCirc: [0.075, 0.82, 0.165, 1],
    inOutCirc: [0.785, 0.135, 0.15, 0.86],
    outSwift: [0.55, 0, 0.1, 1],
    snap2: [0, 0.975, 0, 1],
    bounce: [0.18, 0.89, 0.34, 1.76],
    bounce2: [0.865, -0.005, 0, 1.47],
    bounce3: [0.865, -0.005, 0, 1.64],
    bounce4: [0, 1.49, 0.105, 0.94],
    hardBounce: [0.07, 1.525, 0.36, 0.935],
    longKeyframe: [0.49, 0.05, 0.32, 1.04],
    elastic: [0, 0.49, 0.205, 1],
  },
  nu = {},
  ou = (e) => e;
function ru(e, t, n, o) {
  if ((null == e && (e = "linear"), Array.isArray(e)))
    if (4 == e.length) {
      const r = e;
      (e = r[0]), (t = r[1]), (n = r[2]), (o = r[3]);
    } else e = "linear";
  if ("string" == typeof e) {
    if ("linear" === e) return ou;
    const r = tu[e];
    if (!r) return ou;
    (e = r[0]), (t = r[1]), (n = r[2]), (o = r[3]);
  }
  const r = [e, t, n, o].join("_");
  return nu[r] ? nu[r] : (nu[r] = new eu(e, t, n, o));
}
let iu = 0;
const su = () => ++iu,
  lu = (e, t) => (void 0 !== e ? e : t),
  au = new Set(["opacity", "transform"]),
  cu = new Set(["target", "ease", "duration", "delay", "willChange"]),
  uu = new Map(),
  pu = [],
  du = [],
  fu = [];
let hu = !1;
function mu() {
  let e, t;
  for (e = 0, t = pu.length; e < t; e++) pu[e]();
  for (e = 0, t = du.length; e < t; e++) du[e]();
  for (e = 0, t = fu.length; e < t; e++) fu[e]();
  (pu.length = 0), (du.length = 0), (fu.length = 0), (hu = !1);
}
const gu =
  "function" == typeof window.queueMicrotask
    ? () => queueMicrotask(mu)
    : () => Promise.resolve().then(mu);
const vu = function (e, t, n) {
  e && pu.push(e), t && du.push(t), n && fu.push(n), hu || ((hu = !0), gu());
};
function Au(e, t = 1e3, n = "linear", o = 0) {
  tu[n] && (n = tu[n]);
  return `${e} ${t}ms ${
    Array.isArray(n) ? `cubic-bezier(${n.join(",")})` : n
  } ${o}ms`;
}
function yu(e = {}) {
  let t = e.complete;
  const n = !!e.instant,
    o = !!e.willChange;
  let r = e.target;
  e.selector && (r = r.querySelector(e.selector));
  const i = {
    easing: e.ease || e.easing || "linear",
    duration: e.duration || 1e3,
    delay: e.delay || 0,
  };
  r.dataset.csstween || (r.dataset.csstween = su());
  const s = r.dataset.csstween;
  let l = null,
    a = new Promise((e) => (l = e));
  e.queue && e.queue.push(a);
  const c = { destroy: b, stop: b, finished: a },
    u = new Set();
  let p = null,
    d = !1;
  const f = [],
    h = [],
    m = {},
    g = {};
  let v = 0;
  for (const w in e) {
    if (cu.has(w)) continue;
    if (void 0 === r.style[w]) continue;
    const t = e[w];
    if (null == t) continue;
    const o = "object" != typeof t || Array.isArray(t) ? { value: t } : t,
      s = lu(o.duration, i.duration),
      l = lu(o.delay, i.delay),
      a = lu(o.easing, i.easing);
    h.push(Au(w, s, a, l)), (v = Math.max(v, s + l));
    const c = Array.isArray(o.value) ? o.value : [null, o.value];
    (n || (l <= 0 && (!s || s <= 0))) && ((c[0] = c[1]), (c[1] = null)),
      null !== c[0] && (m[w] = c[0]),
      null !== c[1] && (g[w] = c[1]),
      au.has(w) && f.push(w);
  }
  return (
    vu(
      function () {
        if (d) return;
        uu.has(s) && uu.get(s).destroy();
        uu.set(s, c),
          (r.style.animation = ""),
          o && f.length > 0 && (r.style.willChange = f.join(", "));
        if (Object.keys(m).length > 0) for (const e in m) r.style[e] = m[e];
      },
      function () {
        if (d) return;
        r.getBoundingClientRect();
      },
      function () {
        if (d) return;
        if (Object.keys(g).length > 0) {
          r.style.transition = h.join(", ");
          for (const e in g) (r.style[e] = g[e]), u.add(e);
          r.addEventListener("transitionend", y),
            r.addEventListener("webkitTransitionEnd", y),
            (p = window.setTimeout(A, 1.1 * v + 200));
        } else A();
      }
    ),
    c
  );
  function A() {
    d || (window.clearTimeout(p), t && t(), l(), b());
  }
  function y(e) {
    (r.style.willChange = ""), u.delete(e.propertyName), u.size < 1 && A();
  }
  function b() {
    d ||
      (window.clearTimeout(p),
      (p = null),
      (r.style.transition = ""),
      (r.style.animation = ""),
      r.removeEventListener("transitionend", y),
      r.removeEventListener("webkitTransitionEnd", y),
      uu.delete(s),
      u.clear(),
      (r = null),
      (a = null),
      (t = null),
      (l = null),
      (d = !0));
  }
}
function bu(e = {}) {
  let t = e.complete,
    n = e.start,
    o = e.target;
  e.selector && (o = o.querySelector(e.selector));
  const r = (function (e) {
      return (
        e || (e = "linear"),
        tu[e] && (e = tu[e]),
        Array.isArray(e) ? `cubic-bezier(${e.join(",")})` : e
      );
    })(e.ease || e.easing),
    i = !!e.instant,
    s = !!e.willChange,
    l = e.delay || 0,
    a = i ? "0ms" : e.duration || 1e3,
    c = e.fillMode || "forwards",
    u = e.direction || "normal",
    p = e.animation || e.name || "pop",
    d = a + l,
    f = [p, a + "ms", r, l > 0 ? l + "ms" : null, 1, u, c]
      .filter((e) => null !== e)
      .join(" ");
  o.dataset.csstween || (o.dataset.csstween = su());
  const h = o.dataset.csstween;
  let m = null,
    g = new Promise((e) => (m = e));
  e.queue && e.queue.push(g);
  const v = { destroy: _, stop: _, finished: g };
  let A = null,
    y = !1;
  return (
    vu(
      function () {
        if (y) return;
        uu.has(h) && uu.get(h).destroy();
        uu.set(h, v), (o.style.animation = "");
      },
      function () {
        if (y || !o) return;
        o.getBoundingClientRect();
      },
      function () {
        if (y || !o) return;
        o.addEventListener("animationstart", w),
          o.addEventListener("webkitAnimationStart", w),
          o.addEventListener("animationend", x),
          o.addEventListener("webkitAnimationEnd", x),
          s && (o.style.willChange = "transform, opacity");
        (o.style.animation = f), (A = window.setTimeout(b, 1.1 * d + 200));
      }
    ),
    v
  );
  function b() {
    y || (window.clearTimeout(A), m && m(), t && t(o), _());
  }
  function w(e) {
    n && n(o, e),
      (n = null),
      o.removeEventListener("animationstart", w),
      o.removeEventListener("webkitAnimationStart", w);
  }
  function x() {
    (o.style.willChange = ""), b();
  }
  function _() {
    y ||
      (window.clearTimeout(A),
      (A = null),
      o.removeEventListener("animationend", x),
      o.removeEventListener("webkitAnimationEnd", x),
      o.removeEventListener("animationstart", w),
      o.removeEventListener("webkitAnimationStart", w),
      uu.delete(h),
      (o = null),
      (g = null),
      (t = null),
      (n = null),
      (m = null),
      (y = !0));
  }
}
const wu = function () {};
class xu {
  constructor(e) {
    (this.selfDestruct = void 0 === e.selfDestruct || e.selfDestruct),
      (this.onProgress = e.onProgress || wu),
      (this.onComplete = e.onComplete || wu),
      (this.time = 0),
      (this.progress = 0),
      (this.delay = e.delay || 0),
      (this.duration = e.duration || 1e3),
      (this.initialDelay = this.delay),
      (this.initialDuration = this.duration),
      (this.target = e.target),
      (this.property = e.property),
      (this.method = e.method),
      (this.from = this.to = this.delta = this.current = 0),
      this.setFromTo(e.from, e.to),
      e.bezier
        ? (this.ease = e.bezier)
        : (this.ease = e.easing
            ? Array.isArray(e.easing)
              ? ru(e.easing)
              : ru(tu[e.easing])
            : ru(tu.inOutQuart)),
      (this.paused = !!e.paused),
      (this.ended = !1),
      (this.finished = new Promise((e) => (this.resolve = e)));
  }
  setFromTo(e, t) {
    (this.from = void 0 !== e ? e : this.target[this.property]),
      (this.to = void 0 !== t ? t : e),
      (this.delta = this.to - this.from),
      (this.current = this.from);
  }
  reset() {
    (this.time = 0),
      (this.progress = 0),
      (this.delay = this.initialDelay),
      (this.duration = this.initialDuration),
      (this.ended = !1),
      (this.finished = new Promise((e) => (this.resolve = e))),
      this.play();
  }
  play() {
    this.paused = !1;
  }
  pause() {
    this.paused = !0;
  }
  update(e) {
    this.paused ||
      this.ended ||
      this.destroyed ||
      (this.delay > 0 &&
        ((this.delay -= e), (e = this.delay < 0 ? Math.abs(this.delay) : 0)),
      (this.time += e),
      (this.progress = Math.max(0, Math.min(this.time / this.duration, 1))),
      0 === this.progress
        ? (this.current = this.from)
        : 1 === this.progress
        ? (this.current = this.to)
        : (this.current = this.from + this.delta * this.ease(this.progress)),
      this.target &&
        (this.property
          ? (this.target[this.property] = this.current)
          : this.method && this.target[this.method](this.current)),
      this.onProgress(this.progress, this.current, e),
      this.progress >= 1 &&
        ((this.paused = !0),
        (this.ended = !0),
        this.resolve(),
        this.onComplete && this.onComplete(),
        this.selfDestruct && this.destroy()));
  }
  destroy() {
    this.destroyed ||
      ((this.destroyed = !0),
      (this.paused = !0),
      (this.onProgress = void 0),
      (this.finished = void 0),
      (this.cb = void 0));
  }
}
function _u(e) {
  return new xu(e);
}
function Pu(e) {
  void 0 === e && (e = {}),
    (this.initial = e.initial || 0),
    (this.value = this.initial),
    (this.previous = this.initial),
    (this.velocity = 0),
    (this.onStart = e.onStart),
    (this.onStop = e.onStop),
    (this.precisionStop = e.precisionStop || 1e-4),
    (this.perfectStop = !!e.perfectStop),
    this.setValue(this.initial),
    this.setTarget(this.initial),
    this.setMass(e.mass || 1),
    this.setTension(e.tension || 0.1),
    this.setFriction(e.friction || 0.2),
    this.setStep(e.step || 10);
}
function Uu(e) {
  return new Pu(e);
}
function Cu() {
  const e = [];
  return (
    vr() && Dn(() => n()),
    {
      csstween: function (e) {
        return t(e, yu);
      },
      cssanimate: function (e) {
        return t(e, bu);
      },
      clear: n,
    }
  );
  function t(t, n) {
    const o = n(t);
    return (null == t.autoClear || t.autoClear) && e.push(o), o;
  }
  function n(t) {
    for (let n = e.length - 1; n >= 0; n--) {
      const o = e[n];
      o && o.destroy
        ? (t && o.target !== t) || (o.destroy(), e.splice(n, 1))
        : e.splice(n, 1);
    }
  }
}
(Pu.prototype.setValue = function (e) {
  (this.value = e),
    Math.abs(this.target - this.value) > this.precisionStop
      ? this.start()
      : this.stop();
}),
  (Pu.prototype.setTarget = function (e) {
    (this.target = e),
      Math.abs(this.target - this.value) > this.precisionStop
        ? this.start()
        : this.stop();
  }),
  (Pu.prototype.setTension = function (e) {
    this._K = e;
  }),
  (Pu.prototype.setFriction = function (e) {
    (this._D = e),
      (this._dampingAdjuster = Math.pow(1 - this._D, this._stepAdjuster));
  }),
  (Pu.prototype.setMass = function (e) {
    (this.mass = e), (this._inverseMass = 1 / this.mass);
  }),
  (Pu.prototype.setStep = function (e) {
    (this._step = e),
      (this._stepAdjuster = this._step / 16.67),
      this.setFriction(this._D);
  }),
  (Pu.prototype.start = function () {
    (this.stopped = !1), this.onStart && this.onStart();
  }),
  (Pu.prototype.stop = function () {
    this.stopped ||
      (this.perfectStop &&
        Math.abs(this.target - this.value) <= this.precisionStop &&
        (this.value = this.target),
      (this.acceleration = 0),
      (this.velocity = 0),
      (this._accumulator = 0),
      (this._prevStepVel = 0),
      (this._prevStepValue = this.value),
      (this._adjusted = !1),
      (this.stopped = !0),
      this.onStop && this.onStop());
  }),
  (Pu.prototype.update = function (e) {
    if (!this.stopped) {
      for (
        this._accumulator += e,
          this.previous = this.value,
          this._adjusted &&
            ((this._adjusted = !1),
            (this.velocity = this._prevStepVel),
            (this.value = this._prevStepValue)),
          e < this._step &&
            ((this._adjusted = !0), (this._accumulator += this._step));
        this._accumulator >= this._step;

      )
        (this.acceleration =
          -this._K * (this.value - this.target) * this._inverseMass),
          (this._prevStepVel = this.velocity),
          (this.velocity =
            (this.velocity + this.acceleration * this._stepAdjuster) *
            this._dampingAdjuster),
          (this._prevStepValue = this.value),
          (this.value = this.value + this.velocity * this._stepAdjuster),
          (this._accumulator -= this._step);
      if (this._adjusted) {
        const e = this._accumulator / this._step;
        this.value = this.value * e + this._prevStepValue * (1 - e);
      }
      Math.abs(this.target - this.value) <= this.precisionStop && this.stop();
    }
  }),
  (Pu.prototype.dispose = function () {
    this.stop(), (this.onStart = null), (this.onStop = null);
  });
const ku = { autostart: !0, standalone: !0, selfdestruct: !0 };
function Gu() {
  const e = [],
    t = [];
  return (
    vr() && Dn(r),
    {
      setTimeout: n,
      setInterval: function (e, n) {
        const o = window.setInterval(e, n);
        return t.push(o), o;
      },
      wait: function (e, t) {
        return new Promise((n) => o(e, n, t));
      },
      timer: o,
      clearTimers: r,
    }
  );
  function n(t, n) {
    const o = window.setTimeout(t, n);
    return e.push(o), o;
  }
  function o(t, o, r) {
    if (r) {
      const n = (function (e, t, n) {
        return new Za(e, t, n);
      })(t, o, ku);
      return e.push(n), n;
    }
    {
      const r = n(o, t);
      return e.push(r), r;
    }
  }
  function r() {
    for (let t = 0, n = e.length; t < n; t++) {
      const n = e[t];
      n.dispose ? n.dispose() : clearTimeout(n);
    }
    for (let e = 0, n = t.length; e < n; e++) clearInterval(t[e]);
    (t.length = 0), (e.length = 0);
  }
}
const Su = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [o, r] of t) n[o] = r;
    return n;
  },
  Eu = { class: "cta-wrapper" },
  Tu = { class: "crack-1 crack" },
  Mu = { class: "crack-2 crack" },
  Lu = ["innerHTML"],
  Ou = Su(
    {
      __name: "CallToAction",
      props: {
        to: { type: [String, Object], default: null },
        href: { type: String, default: null },
        text: { type: String, default: null },
      },
      setup(e) {
        const t = e,
          n = t.to ? "router-link" : t.href ? "a" : "button",
          o = yt(),
          r = yt(),
          i = yt();
        return (
          yt(),
          yt(),
          yt(),
          (s, l) => {
            const a = Zn("SvgIcon");
            return (
              Zo(),
              Jo(
                Kn(_t(n)),
                {
                  to: e.to,
                  href: e.href,
                  target: "a" === _t(n) ? "_blank" : null,
                  rel: "a" === _t(n) ? "noopener noreferrer" : null,
                  class: "cta",
                  onMouseenter:
                    l[0] ||
                    (l[0] = (e) =>
                      (async function () {
                        bu({
                          target: o.value,
                          name: "ctaShake2",
                          duration: 600,
                          easing: "cubic-bezier(0.1, 0, 0.1, 1)",
                        }),
                          Nl.$audio.playSound("sfx_EggMerge_ToDouble"),
                          Nl.$webgl.player.body.blinkScreen(ua.randomInt(2, 3));
                      })()),
                  onMouseleave:
                    l[1] ||
                    (l[1] = (e) => (
                      bu({
                        target: o.value,
                        name: "ctaShake2",
                        duration: 600,
                        easing: "cubic-bezier(0.1, 0, 0.1, 1)",
                      }),
                      Nl.$audio.playSound("sfx_EggMerge_ToSingle"),
                      void Nl.$webgl.player.body.blinkScreen()
                    )),
                },
                {
                  default: nn(() => [
                    ir("div", Eu, [
                      ir(
                        "div",
                        { ref_key: "cta", ref: o, class: "cta-inner" },
                        [
                          ir("div", Tu, [
                            sr(
                              a,
                              { id: "crack-1", ref_key: "crack1", ref: r },
                              null,
                              512
                            ),
                          ]),
                          ir("div", Mu, [
                            sr(
                              a,
                              { id: "crack-2", ref_key: "crack2", ref: i },
                              null,
                              512
                            ),
                          ]),
                          ir(
                            "p",
                            { class: "cta-text", innerHTML: t.text },
                            null,
                            8,
                            Lu
                          ),
                          eo(s.$slots, "default", {}, void 0, !0),
                        ],
                        512
                      ),
                    ]),
                  ]),
                  _: 3,
                },
                40,
                ["to", "href", "target", "rel"]
              )
            );
          }
        );
      },
    },
    [["__scopeId", "data-v-2b3c6a1c"]]
  ),
  $u = "/assets/msi-products.4fe33e1e4adb976c.avif",
  Fu = "/assets/msi-products.a44d109a4adb976c.png",
  Ru = "/assets/msi-products.04cd9dc44adb976c.webp";
const Bu = (function () {
  let e = {};
  return {
    get: function (t, n = !0) {
      if (e[t]) return e[t];
      if (!n) return;
      for (const o in e) if (o.match(t)) return e[o];
    },
    add: function (t, n) {
      e[t] = n;
    },
    clear: function () {
      e = {};
    },
    list: function () {
      return e;
    },
  };
})();
const ju = {},
  Iu = {};
const Du = {
    get: function (e, t) {
      return Bu.get(e, t);
    },
    list: function () {
      return Bu.list();
    },
    load: function (e, t = {}) {
      if (Bu.get(e)) return Promise.resolve(Bu.get(e));
      if (Iu[e]) return Iu[e];
      if (!e.startsWith("http") && !e.startsWith("/")) {
        e = "/" + e;
      }
      let n;
      return (
        (n =
          t.loader && ju[t.loader]
            ? ju[t.loader].function(e, t)
            : (function (e, t) {
                for (const n in ju) {
                  const o = ju[n];
                  if (o.extensions) {
                    const n = o.extensions;
                    for (let r = 0; r < n.length; r++) {
                      const i = n[r];
                      if (e.endsWith(i)) return o.function(e, t);
                    }
                  } else if (o.test && o.test(e, t)) return o.function(e, t);
                }
                return (function (e, t = {}) {
                  return new Promise((n, o) => {
                    const r = new XMLHttpRequest();
                    (r.responseType = t.responseType || "arraybuffer"),
                      (r.onreadystatechange = () => {
                        4 === r.readyState &&
                          (4 === r.readyState && 200 === r.status
                            ? (t.noCache || Bu.add(e, r.response),
                              t.onLoad && t.onLoad(r.response),
                              n(r.response, r.status))
                            : o(r.status));
                      }),
                      r.open("GET", e, !0),
                      r.send();
                  });
                })(e, t);
              })(e, t)),
        n && ((Iu[e] = n), n.then(() => (Iu[e] = null))),
        n
      );
    },
    registerLoader: function (e) {
      e.loader && (e = e.loader), (ju[e.name] = e);
    },
  },
  Nu = { default: !0, webp: !1, avif: !1 },
  Vu = {
    avif: "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=",
    webp: "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA",
    default: "data:,x",
  };
async function Hu(e) {
  return new Promise((t) => {
    const n = document.createElement("img");
    (n.onload = () => t((Nu[e] = !0))),
      (n.onerror = () => t((Nu[e] = !1))),
      (n.src = Vu[e] ?? Vu.default);
  });
}
const qu = Promise.all([Hu("webp"), Hu("avif")]);
function Xu(e, t, n) {
  return (
    "object" == typeof e &&
      ((n = e.avif), (t = e.webp), (e = e.url ?? e.default ?? e)),
    Nu.avif && n ? n : Nu.webp && t ? t : e
  );
}
const Wu = ["jpeg", "png", "jpg", "gif"],
  Zu = [...Wu, "avif", "webp"];
const zu = {
    test: function () {
      return qu;
    },
    list: function (e, t) {
      let n = {};
      for (let o in e) {
        const t = e[o],
          r = t.default ?? t,
          i = o.split("/").pop().split(".");
        let s = i.pop();
        if (!Zu.includes(s)) continue;
        Wu.includes(s) && (s = "url");
        const l = i.join(".");
        (n[l] = n[l] || {})[s] = r;
      }
      return 1 !== Object.values(n).length || t || (n = Object.values(n)[0]), n;
    },
    select: Xu,
    get: Xu,
    supports: Nu,
  },
  Ku = {};
let Yu = 5,
  Qu = 0;
const Ju = {
    __name: "LazyImage",
    props: (function (e = []) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const o = e[n];
        if ("string" == typeof o) {
          t[o] = {};
          continue;
        }
        const r = o[0];
        if (null == r) continue;
        const i = (t[r] = {});
        null != o[1] && (i.type = o[1]),
          null != o[2] && (i.default = o[2]),
          o[3] && (i.required = !0),
          o[4] && (i.validator = o[4]);
      }
      return t;
    })([
      "contain",
      "url",
      "heightRatio",
      "backgroundColor",
      "height",
      "cacheId",
      ["alt", String, "Image"],
    ]),
    setup(e, { expose: t }) {
      const n = e;
      t({
        loaded: function () {
          return i;
        },
      });
      const o = yt(),
        r = yt();
      let i, s, l;
      function c(e) {
        if ((clearTimeout(l), !e && Qu > Yu))
          return void (l = setTimeout(c, 100));
        let t = e || r.value;
        t &&
          (Qu++,
          o.value.classList.remove("loaded"),
          (t.decoding = "async"),
          (t.onload = () => {
            Qu--, o.value && o.value.classList.add("loaded"), i.resolve();
          }),
          (t.src = zu.select(n.url)),
          (t.alt = n.alt));
      }
      function u() {
        i = Bs();
        let e = r.value;
        if (n.cacheId) {
          const t = n.url ? zu.select(n.url) : "",
            r = n.cacheId + "_" + t;
          if (!Ku[r]) {
            const e = (Ku[r] = document.createElement("img"));
            (e.draggable = "false"),
              (e.decoding = "async"),
              e.setAttribute("draggable", !1),
              (e.ondragstart = (e) => e.preventDefault());
          }
          const i = o.value.firstChild;
          (e = Ku[r]), e !== i && o.value.replaceChild(e, i);
        }
        const t = n.url ? zu.select(n.url) : "",
          s = e.src;
        !!(
          s &&
          s.length &&
          t &&
          t.length &&
          e.src.split("/").pop() === t.split("/").pop()
        )
          ? o.value.classList.add("loaded")
          : c(n.cacheId && e),
          n.height
            ? ((o.value.style.height = n.height),
              o.value.style.setProperty("--padding-top", "0px"))
            : ((o.value.style.height = ""),
              o.value.style.setProperty(
                "--padding-top",
                n.heightRatio || "56.25%"
              )),
          n.backgroundColor
            ? (o.value.style.backgroundColor = n.backgroundColor)
            : (o.value.style.backgroundColor = "");
      }
      return (
        Rn(() => {
          s = hn(n, u, { immediate: !0 });
        }),
        In(() => {
          s && s(), (s = null);
        }),
        (e, t) => (
          Zo(),
          Qo(
            "figure",
            {
              ref_key: "figureEl",
              ref: o,
              class: a([
                "lazy-img",
                { "obj-fit-contain": n.contain, "obj-fit-cover": !n.contain },
              ]),
            },
            [
              n.cacheId
                ? cr("", !0)
                : (Zo(),
                  Qo(
                    "img",
                    {
                      key: 0,
                      ref_key: "imageEl",
                      ref: r,
                      draggable: "false",
                      ondragstart: "return false;",
                      decoding: "async",
                    },
                    null,
                    512
                  )),
            ],
            2
          )
        )
      );
    },
  },
  ep = { key: 0, class: "cookie-consent" },
  tp = { class: "cookie-consent__inner" },
  np = ["innerHTML"],
  op = { class: "cookie-consent__buttons" },
  rp = ["innerHTML"],
  ip = ["innerHTML"],
  sp = {
    __name: "CookieConsent",
    props: {
      textHtml: { type: String, default: "Accept cookies?" },
      acceptHtml: { type: String, default: "Accept" },
      declineHtml: { type: String, default: "Decline" },
      visible: { type: Boolean, default: !0 },
    },
    emits: ["accept", "decline"],
    setup(e, { expose: t, emit: n }) {
      const o = e;
      t({ accept: f, decline: h });
      const r = un("preloader", !1),
        i = un("analytics", !1),
        s = void 0 !== typeof window,
        l = "cookie_accepted",
        a = (function () {
          const e = document.cookie.match("(^|;)\\s*" + l + "\\s*=\\s*([^;]+)");
          return e ? !!+e.pop() : null;
        })(),
        c = yt(null !== a),
        u = yt(a),
        p = Cr(
          () =>
            (!r || (void 0 !== typeof r.hidden && r.hidden)) &&
            !c.value &&
            !!o.visible
        );
      function d() {
        const e = u.value;
        n(e ? "accept" : "decline"),
          e && i && i.init ? i.init() : !e && i && i.disable && i.disable(),
          s && document.documentElement.classList.add("cookie-consent-hidden");
      }
      function f() {
        m(!0);
      }
      function h() {
        m(!1);
      }
      function m(e) {
        if (c.value) return;
        (c.value = !0), (u.value = !!e), d();
        let t = new Date(Date.now() + 5184e6);
        t = t.toUTCString();
        const n = "https" === document.location.protocol;
        document.cookie = [
          l + "=" + (e ? 1 : 0),
          "Path=/",
          n ? "SameSite=None" : "SameSite=Lax",
          n && "Secure",
          "Expires=" + t,
        ]
          .filter(Boolean)
          .join("; ");
      }
      return (
        c.value && d(),
        (e, t) => (
          Zo(),
          Jo(
            Wr,
            { name: "cookie-consent", appear: "" },
            {
              default: nn(() => [
                _t(p)
                  ? (Zo(),
                    Qo("div", ep, [
                      ir("div", tp, [
                        ir(
                          "p",
                          {
                            class: "cookie-consent__description",
                            innerHTML: o.textHtml,
                          },
                          null,
                          8,
                          np
                        ),
                        ir("div", op, [
                          ir(
                            "button",
                            {
                              class:
                                "cookie-consent__cta cookie-consent__cta--decline",
                              onClick: h,
                            },
                            [
                              ir(
                                "p",
                                {
                                  class: "cta__text",
                                  innerHTML: o.declineHtml,
                                },
                                null,
                                8,
                                rp
                              ),
                            ]
                          ),
                          ir(
                            "button",
                            {
                              class:
                                "cookie-consent__cta cookie-consent__cta--accept",
                              onClick: f,
                            },
                            [
                              ir(
                                "p",
                                { class: "cta__text", innerHTML: o.acceptHtml },
                                null,
                                8,
                                ip
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ]))
                  : cr("", !0),
              ]),
              _: 1,
            }
          )
        )
      );
    },
  },
  lp = { class: "language-picker" },
  ap = { class: "language-picker-current" },
  cp = ["textContent"],
  up = ir("div", { class: "language-picker-arrow" }, null, -1),
  pp = ["value", "selected", "textContent"],
  dp = {
    __name: "LanguagePicker",
    props: { labelType: { type: String, default: "name" } },
    setup(e) {
      const t = e,
        n = ["name", "language", "code", "id"].includes(t.labelType)
          ? t.labelType
          : "name",
        o = yt(!1),
        { project: r, site: i } = window.__DATA,
        s = !!r.prefixDefaultLocale,
        l = "/",
        a = r.locales[i.locale],
        c = Object.values(r.locales).map((e) => ({
          id: e.id,
          text: e[n],
          selected: e.id === a.id || null,
        }));
      function u() {
        const e = o.value,
          t = e.options[e.selectedIndex].value,
          n = r.locales[t];
        if (n.id === a.id) return;
        let i = new Date();
        i.setTime(Date.now() + 12096e5),
          (document.cookie =
            "preferred_locale=" +
            n.id +
            ";path=/;expires=" +
            i +
            ";samesite=lax");
        const c = !n.default || s ? n.id + l : "";
        window.location.href = window.location.origin + r.basepath + c;
      }
      return (e, t) => (
        Zo(),
        Qo("div", lp, [
          ir("div", ap, [
            ir("span", { textContent: p(_t(a)[_t(n)]) }, null, 8, cp),
            up,
          ]),
          ir(
            "select",
            {
              ref_key: "selector",
              ref: o,
              class: "language-picker-select",
              onInput: u,
              onBlur: u,
            },
            [
              (Zo(!0),
              Qo(
                No,
                null,
                Jn(
                  _t(c),
                  (e) => (
                    Zo(),
                    Qo(
                      "option",
                      {
                        key: e.id,
                        value: e.id,
                        selected: e.selected,
                        textContent: p(e.text),
                      },
                      null,
                      8,
                      pp
                    )
                  )
                ),
                128
              )),
            ],
            544
          ),
        ])
      );
    },
  },
  fp = ["innerHTML"],
  hp = ["innerHTML"],
  mp = { class: "popin-cta-container" },
  gp = ["href", "aria-label"],
  vp = ["href", "aria-label"],
  Ap = { key: 2, ref: "products", class: "popin-products" },
  yp = { class: "products-animation" },
  bp = ["href", "aria-label"],
  wp = ["href", "aria-label"],
  xp = Su(
    {
      __name: "HomePopin",
      setup(e) {
        const t = zu.list(
          Object.assign({
            "/assets/img/products/msi-products.avif": $u,
            "/assets/img/products/msi-products.png": Fu,
            "/assets/img/products/msi-products.webp": Ru,
          })
        );
        function n() {
          Nl.$user.userID
            ? Nl.$analytics.event({
                name: "discover_msi_reward_program",
                clickButtonName: "discover_msi_reward_program",
              })
            : Nl.$analytics.event({
                name: "login_msi_reward_program",
                clickButtonName: "login_msi_reward_program",
              });
        }
        let o;
        const r = yt(),
          i = yt();
        return (e, s) => {
          const l = Zn("SvgIcon");
          return (
            Zo(),
            Qo(
              "aside",
              {
                class: "home-popin",
                onMouseenter:
                  s[4] ||
                  (s[4] = (e) =>
                    (async function () {
                      o = bu({
                        target: r.value,
                        name: "shakeScale",
                        duration: 600,
                        easing: "cubic-bezier(0.1, 0, 0.1, 1)",
                      });
                    })()),
                onMouseleave:
                  s[5] ||
                  (s[5] = (e) => {
                    null == o || o.destroy();
                  }),
              },
              [
                ir(
                  "div",
                  { ref_key: "popin", ref: i, class: "popin-inner" },
                  [
                    _t(Nl).$user.userID
                      ? (Zo(),
                        Qo(
                          "p",
                          {
                            key: 0,
                            ref: "description",
                            class: "popin-description",
                            innerHTML: e.$l("home.push.logged.text"),
                          },
                          null,
                          8,
                          fp
                        ))
                      : (Zo(),
                        Qo(
                          "p",
                          {
                            key: 1,
                            ref: "description",
                            class: "popin-description",
                            innerHTML: e.$l("home.push.not-logged.text"),
                          },
                          null,
                          8,
                          hp
                        )),
                    ir("div", mp, [
                      _t(Nl).$user.userID
                        ? (Zo(),
                          Qo(
                            "a",
                            {
                              key: 0,
                              ref_key: "cta",
                              ref: r,
                              class: "popin-cta",
                              target: "_blank",
                              href: e.$l("home.push.logged.url"),
                              "aria-label": e.$l("aria.label.link.home"),
                              onClick: s[0] || (s[0] = (e) => n()),
                            },
                            [
                              ir(
                                "span",
                                null,
                                p(e.$l("home.push.logged.cta")),
                                1
                              ),
                            ],
                            8,
                            gp
                          ))
                        : (Zo(),
                          Qo(
                            "a",
                            {
                              key: 1,
                              ref_key: "cta",
                              ref: r,
                              target: "_blank",
                              class: "popin-cta",
                              href: e.$l("home.push.not-logged.url"),
                              "aria-label": e.$l("aria.label.link.home"),
                              onClick: s[1] || (s[1] = (e) => n()),
                            },
                            [
                              ir(
                                "span",
                                null,
                                p(e.$l("home.push.not-logged.cta")),
                                1
                              ),
                            ],
                            8,
                            vp
                          )),
                    ]),
                    (Zo(),
                    Qo(
                      No,
                      null,
                      Jn(4, (e) =>
                        ir(
                          "div",
                          {
                            key: e,
                            ref_for: !0,
                            ref: "coin",
                            class: a(["coin-" + e, "coin"]),
                          },
                          [sr(l, { id: "star" })],
                          2
                        )
                      ),
                      64
                    )),
                    _t(Nl).$user.userID
                      ? (Zo(),
                        Qo(
                          "div",
                          Ap,
                          [
                            ir("div", yp, [
                              sr(
                                _t(Ju),
                                {
                                  url: _t(t),
                                  alt: "products",
                                  class: "products",
                                  contain: !0,
                                },
                                null,
                                8,
                                ["url"]
                              ),
                            ]),
                          ],
                          512
                        ))
                      : cr("", !0),
                  ],
                  512
                ),
                _t(Nl).$user.userID
                  ? (Zo(),
                    Qo(
                      "a",
                      {
                        key: 0,
                        target: "_blank",
                        href: e.$l("home.push.logged.url"),
                        class: "popin-link",
                        "aria-label": e.$l("aria.label.link.home"),
                        onClick: s[2] || (s[2] = (e) => n()),
                      },
                      null,
                      8,
                      bp
                    ))
                  : (Zo(),
                    Qo(
                      "a",
                      {
                        key: 1,
                        target: "_blank",
                        href: e.$l("home.push.not-logged.url"),
                        class: "popin-link",
                        "aria-label": e.$l("aria.label.link.home"),
                        onClick: s[3] || (s[3] = (e) => n()),
                      },
                      null,
                      8,
                      wp
                    )),
              ],
              32
            )
          );
        };
      },
    },
    [["__scopeId", "data-v-ef7e23dd"]]
  ),
  _p = {},
  Pp = { class: "egg" },
  Up = [
    ((e) => (en("data-v-0a4f2e8f"), (e = e()), tn(), e))(() =>
      ir(
        "svg",
        {
          class: "icon-big-egg",
          viewBox: "0 0 1163 1537",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          ir("path", {
            d: "M1149.5 768.5c0 209.549-64.28 398.75-167.583 535.27-103.292 136.5-244.991 219.73-400.417 219.73-155.426 0-297.125-83.23-400.417-219.73C77.785 1167.25 13.5 978.049 13.5 768.5c0-209.549 64.285-398.749 167.583-535.266C284.375 96.726 426.074 13.5 581.5 13.5c155.426 0 297.125 83.226 400.417 219.734C1085.22 369.751 1149.5 558.951 1149.5 768.5Z",
            "stroke-opacity": ".03",
            "stroke-width": "27",
          }),
        ],
        -1
      )
    ),
  ];
const Cp = Su(_p, [
    [
      "render",
      function (e, t) {
        return Zo(), Qo("div", Pp, Up);
      },
    ],
    ["__scopeId", "data-v-0a4f2e8f"],
  ]),
  kp = {
    __name: "ImageSlot",
    props: ["img"],
    setup(e) {
      const t = e,
        n = yt();
      return (
        Rn(
          () =>
            t.img &&
            n.value.appendChild(t.img) &&
            t.img.setAttribute("draggable", !1)
        ),
        In(() => {
          var e;
          (null == (e = t.img) ? void 0 : e.parentNode) === n.value &&
            t.img.remove();
        }),
        (e, t) => (Zo(), Qo("figure", { ref_key: "base", ref: n }, null, 512))
      );
    },
  },
  Gp = { class: "egghunt-logo" },
  Sp = { class: "word w1" },
  Ep = { class: "container cE" },
  Tp = { class: "letter-animation" },
  Mp = { class: "letter" },
  Lp = { class: "container cG1" },
  Op = { class: "letter-animation" },
  $p = { class: "letter" },
  Fp = { class: "container cG2" },
  Rp = { class: "letter-animation" },
  Bp = { class: "letter" },
  jp = { class: "word w2" },
  Ip = { class: "container cH" },
  Dp = { class: "letter-animation" },
  Np = { class: "letter" },
  Vp = { class: "container cU" },
  Hp = { class: "letter-animation" },
  qp = { class: "letter" },
  Xp = { class: "container cN" },
  Wp = { class: "letter-animation" },
  Zp = { class: "letter" },
  zp = { class: "container cT" },
  Kp = { class: "letter-animation" },
  Yp = { class: "letter" },
  Qp = Su(
    {
      __name: "EggHuntLogo",
      setup: (e) => (e, t) => (
        Zo(),
        Qo("div", Gp, [
          ir("div", Sp, [
            ir("div", Ep, [
              ir("div", Tp, [
                ir("div", Mp, [
                  sr(kp, { img: e.$assets.e.node }, null, 8, ["img"]),
                ]),
              ]),
            ]),
            ir("div", Lp, [
              ir("div", Op, [
                ir("div", $p, [
                  sr(kp, { img: e.$assets.g1.node }, null, 8, ["img"]),
                ]),
              ]),
            ]),
            ir("div", Fp, [
              ir("div", Rp, [
                ir("div", Bp, [
                  sr(kp, { img: e.$assets.g2.node }, null, 8, ["img"]),
                ]),
              ]),
            ]),
          ]),
          ir("div", jp, [
            ir("div", Ip, [
              ir("div", Dp, [
                ir("div", Np, [
                  sr(kp, { img: e.$assets.h.node }, null, 8, ["img"]),
                ]),
              ]),
            ]),
            ir("div", Vp, [
              ir("div", Hp, [
                ir("div", qp, [
                  sr(kp, { img: e.$assets.u.node }, null, 8, ["img"]),
                ]),
              ]),
            ]),
            ir("div", Xp, [
              ir("div", Wp, [
                ir("div", Zp, [
                  sr(kp, { img: e.$assets.n.node }, null, 8, ["img"]),
                ]),
              ]),
            ]),
            ir("div", zp, [
              ir("div", Kp, [
                ir("div", Yp, [
                  sr(kp, { img: e.$assets.t.node }, null, 8, ["img"]),
                ]),
              ]),
            ]),
          ]),
        ])
      ),
    },
    [["__scopeId", "data-v-8d15d1d4"]]
  ),
  Jp = { class: "container" },
  ed = ((e) => (en("data-v-573410c3"), (e = e()), tn(), e))(() =>
    ir("div", { class: "hopithop" }, [ir("span", null, "hop to it")], -1)
  ),
  td = ["innerHTML"],
  nd = ["innerHTML"],
  od = Su(
    {
      __name: "Home",
      setup(e) {
        Nl.$router.nrv({
          onEnter: async function ({
            el: e,
            isCancelled: o,
            exitPrevious: l,
            toggleClass: a,
          }) {
            const c = n.value.querySelectorAll(".letter");
            for (let t = 0; t < c.length; t++) {
              const e = c[t];
              (e.style.opacity = 0), s.push(e);
            }
            let u = 0;
            if ((await l(), o())) return;
            await js(50), (r.value = !0), (u += 200);
            for (let n = 0; n < s.length; n++) {
              const e = s[n];
              t({
                target: e,
                transform: [
                  `rotate(${ua.randomFloat(-60, 60)}deg) scale(0)`,
                  "",
                ],
                duration: 700,
                ease: "cubic-bezier(0.17, 0.89, 0.32, 1.27)",
                delay: ua.randomFloat(200, 500),
                opacity: [0, ""],
              });
            }
            await js(500), a(), await js(800), (i.value = !0);
          },
          onLeave: async function ({ el: e, done: t, toggleClass: n }) {
            return (
              n(),
              t({ duration: 580 }),
              Nl.$webgl.scene.camera.state &&
                "home" === Nl.$webgl.scene.camera.state.id &&
                Nl.$webgl.scene.camera.state.leave &&
                Nl.$webgl.scene.camera.state.leave(),
              (i.value = !1),
              (r.value = !1)
            );
          },
          duration: { enter: 2e3, leave: 700, done: 50 },
        });
        const { csstween: t } = Cu();
        yt("Request API...");
        const n = yt(),
          o = yt(),
          r = yt(!1),
          i = yt(!1),
          s = [];
        function l() {
          Nl.$router.push({ name: "Game" }),
            Nl.$analytics.event({ name: "start", clickButtonName: "start" });
        }
        return (
          Rn(() => {
            Nl.$webgl.setState("Home"),
              Nl.$user.userID
                ? Nl.$analytics.pageview({
                    title: "Homepage - Logged",
                    path: "/homepage-logged",
                  })
                : Nl.$analytics.pageview({
                    title: "Homepage - Not logged",
                    path: "/homepage-not-logged",
                  });
          }),
          (e, t) => {
            const s = Zn("NiceViewContainer");
            return (
              Zo(),
              Jo(s, null, {
                default: nn(() => [
                  ir("div", Jp, [
                    ir(
                      "h1",
                      { ref_key: "title", ref: n, class: "title" },
                      [sr(Qp)],
                      512
                    ),
                    ed,
                    _t(Nl).$user.userID
                      ? (Zo(),
                        Qo(
                          "p",
                          {
                            key: 0,
                            class: "description",
                            innerHTML: e.$l("home.description.logged"),
                          },
                          null,
                          8,
                          td
                        ))
                      : (Zo(),
                        Qo(
                          "p",
                          {
                            key: 1,
                            class: "description",
                            innerHTML: e.$l("home.description.not-logged"),
                          },
                          null,
                          8,
                          nd
                        )),
                    sr(Ou, { text: e.$l("home.cta"), onClick: l }, null, 8, [
                      "text",
                    ]),
                  ]),
                  sr(Cp, { class: a({ "is-visible": r.value }) }, null, 8, [
                    "class",
                  ]),
                  sr(
                    xp,
                    {
                      ref_key: "popin",
                      ref: o,
                      class: a({ "is-visible": i.value }),
                    },
                    null,
                    8,
                    ["class"]
                  ),
                ]),
                _: 1,
              })
            );
          }
        );
      },
    },
    [["__scopeId", "data-v-573410c3"]]
  ),
  rd = ["src"],
  sd = Su(
    {
      __name: "GameEggCounter",
      setup(e) {
        const t = zu.list(
            Object.assign({
              "/assets/img/counter/countEgg.avif":
                "/assets/countEgg.7379259e4adb976c.avif",
              "/assets/img/counter/countEgg.png":
                "/assets/countEgg.2e21f5c94adb976c.png",
              "/assets/img/counter/countEgg.webp":
                "/assets/countEgg.998a10694adb976c.webp",
            })
          ),
          n = zu.select(t),
          o = yt(),
          r = yt(),
          i = yt();
        let s, l;
        return (
          hn(
            () => Nl.$store.score,
            (e) => {
              s && s.destroy(),
                l && l.destroy(),
                (s = bu({
                  target: r.value,
                  name: "softBounceOut",
                  duration: 300,
                  easing: "cubic-bezier(0.55, 0, 0.1, 1)",
                })),
                (l = bu({
                  target: o.value,
                  name: "eggShake",
                  duration: 300,
                  easing: "cubic-bezier(0.55, 0, 0.1, 1)",
                }));
            }
          ),
          (e, t) => (
            Zo(),
            Qo(
              "div",
              {
                class: a([
                  "egg-counter",
                  {
                    "is-visible":
                      _t(Nl).$store.isCounterVisible &&
                      !_t(Nl).$store.isMenuVisible,
                  },
                ]),
              },
              [
                ir(
                  "div",
                  { ref_key: "egg", ref: o, class: "counter-picture" },
                  [ir("img", { src: _t(n), alt: "" }, null, 8, rd)],
                  512
                ),
                ir(
                  "p",
                  { ref_key: "numb", ref: r, class: "counter-numb" },
                  p(e.$store.score),
                  513
                ),
                ir(
                  "div",
                  { ref_key: "flash", ref: i, class: "flash" },
                  null,
                  512
                ),
              ],
              2
            )
          )
        );
      },
    },
    [["__scopeId", "data-v-37458f48"]]
  ),
  ld = { class: "tuto" },
  ad = { class: "tuto-container" },
  cd = { class: "tuto-top" },
  ud = { class: "tuto-rocks" },
  pd = ["innerHTML"],
  dd = ((e) => (en("data-v-808519e0"), (e = e()), tn(), e))(() =>
    ir("div", { class: "game-background" }, null, -1)
  ),
  fd = Su(
    {
      __name: "GameTuto",
      setup(e) {
        const t = Nl.$device.hasTouch
          ? Nl.$l("game.tutorial.mobile")
          : Nl.$l("game.tutorial.desktop");
        return (e, n) => {
          const o = Zn("SvgIcon");
          return (
            Zo(),
            Qo("div", ld, [
              ir("div", ad, [
                ir("div", cd, [
                  ir("div", ud, [
                    (Zo(),
                    Qo(
                      No,
                      null,
                      Jn(4, (e) =>
                        sr(
                          o,
                          { id: "rock-" + e, key: e, class: "icon-rock" },
                          null,
                          8,
                          ["id"]
                        )
                      ),
                      64
                    )),
                  ]),
                  sr(o, { id: "arrow" }),
                ]),
                ir("p", { class: "tuto-text", innerHTML: _t(t) }, null, 8, pd),
              ]),
              dd,
            ])
          );
        };
      },
    },
    [["__scopeId", "data-v-808519e0"]]
  ),
  hd = { class: "container" },
  md = { class: "game-egg__container" },
  gd = Su(
    {
      __name: "Game",
      setup: (e) => (
        Nl.$router.nrv({
          onEnter: async function ({
            el: e,
            isCancelled: t,
            exitPrevious: n,
            toggleClass: o,
          }) {
            if ((await n({ lastOnly: !0 }), Nl.$webgl.setState("Game"), t()))
              return;
            if ((await js(500), o(), t())) return;
            if (Nl.$viewport.width >= 600) return;
            if ((await js(4500), t())) return;
            Nl.$store.tutoVisible = !1;
          },
          onLeave: async function ({ el: e, done: t, toggleClass: n }) {
            (Nl.$store.isCounterVisible = !1), t({ duration: 200 }), n();
          },
        }),
        Cu(),
        Rn(() => {
          Nl.$analytics.pageview({ title: "Game", path: "/game" });
        }),
        (e, t) => {
          const n = Zn("NiceViewContainer");
          return (
            Zo(),
            Jo(n, null, {
              default: nn(() => [
                ir("div", hd, [
                  ir("div", md, [sr(sd)]),
                  sr(
                    fd,
                    { class: a({ "is-hidden": !e.$store.tutoVisible }) },
                    null,
                    8,
                    ["class"]
                  ),
                ]),
              ]),
              _: 1,
            })
          );
        }
      ),
    },
    [["__scopeId", "data-v-2394b16c"]]
  ),
  vd = ((e) => (en("data-v-f7eb3238"), (e = e()), tn(), e))(() =>
    ir("div", { class: "popin-background" }, null, -1)
  ),
  Ad = { class: "popin-inner" },
  yd = ["innerHTML"],
  bd = { class: "products-container" },
  wd = { ref: "products", class: "products-animation" },
  xd = ["href", "aria-label"],
  _d = { class: "arrow-container" },
  Pd = ["href", "aria-label"],
  Ud = Su(
    {
      __name: "EndPopin",
      setup(e) {
        const t = zu.list(
          Object.assign({
            "/assets/img/products/msi-products.avif": $u,
            "/assets/img/products/msi-products.png": Fu,
            "/assets/img/products/msi-products.webp": Ru,
          })
        );
        function n() {
          Nl.$analytics.event({
            name: "discover_msi_reward_program",
            clickButtonName: "discover_msi_reward_program",
          });
        }
        let o;
        const r = yt();
        return (e, i) => {
          const s = Zn("SvgIcon");
          return (
            Zo(),
            Qo(
              "aside",
              {
                ref: "popin",
                class: "end-popin",
                onMouseenter:
                  i[2] ||
                  (i[2] = (e) => {
                    o = bu({
                      target: r.value,
                      name: "shakeScale",
                      duration: 600,
                      easing: "cubic-bezier(0.1, 0, 0.1, 1)",
                    });
                  }),
                onMouseleave:
                  i[3] ||
                  (i[3] = (e) => {
                    null == o || o.destroy();
                  }),
              },
              [
                vd,
                ir("div", Ad, [
                  ir(
                    "p",
                    {
                      ref: "description",
                      class: "popin-description",
                      innerHTML: e.$l("end.push.text"),
                    },
                    null,
                    8,
                    yd
                  ),
                  ir("div", bd, [
                    ir(
                      "div",
                      wd,
                      [
                        sr(
                          _t(Ju),
                          {
                            url: _t(t),
                            alt: "products",
                            class: "products",
                            contain: !0,
                          },
                          null,
                          8,
                          ["url"]
                        ),
                      ],
                      512
                    ),
                  ]),
                ]),
                ir(
                  "a",
                  {
                    class: "popin-cta",
                    href: e.$l("end.push.url"),
                    target: "_blank",
                    "aria-label": e.$l("aria.label.link.end"),
                    onClick: i[0] || (i[0] = (e) => n()),
                  },
                  [
                    ir(
                      "div",
                      { ref_key: "cta", ref: r, class: "cta-background" },
                      null,
                      512
                    ),
                    ir("div", _d, [
                      sr(s, { id: "popin-arrow", class: "arrow-1" }),
                      sr(s, { id: "popin-arrow", class: "arrow-2" }),
                    ]),
                  ],
                  8,
                  xd
                ),
                ir(
                  "a",
                  {
                    href: e.$l("end.push.url"),
                    target: "_blank",
                    class: "popin-link",
                    "aria-label": e.$l("aria.label.link.end"),
                    onClick: i[1] || (i[1] = (e) => n()),
                  },
                  null,
                  8,
                  Pd
                ),
              ],
              544
            )
          );
        };
      },
    },
    [["__scopeId", "data-v-f7eb3238"]]
  ),
  Cd = { class: "title-container" },
  kd = ["innerHTML"],
  Gd = ["innerHTML"],
  Sd = { class: "end-content" },
  Ed = ["innerHTML"],
  Td = ["innerHTML"],
  Md = ["innerHTML"],
  Ld = ["innerHTML"],
  Od = [
    { path: "/", name: "Home", component: od },
    { path: "/game", name: "Game", component: gd },
    {
      path: "/end",
      name: "End",
      component: Su(
        {
          __name: "End",
          setup(e) {
            const t = yt(!0);
            Nl.$router.nrv({
              onEnter: async function ({
                el: e,
                isCancelled: t,
                exitPrevious: o,
                toggleClass: r,
              }) {
                Nl.$analytics.event({
                  name: "final_score",
                  clickButtonName: `final_score_${Nl.$store.score}`,
                });
                for (let n = 0; n < v.value.length; n++) {
                  const e = v.value[n];
                  (e.style.opacity = 0), m.push(e);
                }
                let i = 0;
                if ((await o(), t())) return;
                if ((await js(2300), t())) return;
                (f.value = !0), (d.value = !0), (i += 300);
                for (let s = 0; s < m.length; s++) {
                  const e = m[s];
                  n({
                    target: e,
                    transform: [
                      `rotate(${ua.randomFloat(-60, 60)}deg) scale(0)`,
                      "",
                    ],
                    duration: 700,
                    ease: "cubic-bezier(0.17, 0.89, 0.32, 1.27)",
                    delay: ua.randomFloat(300, 700),
                    opacity: [0, ""],
                  });
                }
                await r();
              },
              onLeave: async function ({ el: e, done: t, toggleClass: n }) {
                n(),
                  Nl.$webgl.scene.camera.state &&
                    "end" === Nl.$webgl.scene.camera.state.id &&
                    Nl.$webgl.scene.camera.state.leave &&
                    Nl.$webgl.scene.camera.state.leave(),
                  t({ duration: 600 }),
                  (f.value = !1),
                  (d.value = !1);
              },
              duration: { enter: 2500, leave: 700, done: 1e3 },
            });
            const { csstween: n } = Cu(),
              o =
                (null == (r = Nl.$l("end.title")) && (r = ""),
                r.replace(/(^|[ >])([^ ><]+)?/gi, (e, t, n) => {
                  let o = t;
                  if (void 0 !== n) {
                    let e = "";
                    for (let t = 0, o = n.length; t < o; t++) {
                      const o = n[t];
                      e +=
                        " " === o || " " === o || "&nbsp;" === o
                          ? o
                          : `<span class="char char-${t}">` + n[t] + "</span>";
                    }
                    o += '<span class="word">' + e + "</span>";
                  }
                  return o;
                }));
            var r;
            const i = yt(),
              s = yt(),
              l = yt(),
              c = yt(),
              u = yt(),
              p = yt(),
              d = yt(!1),
              f = yt(!1),
              h =
                Nl.$user.userID || t.value
                  ? Nl.$l("end.cta.logged")
                  : Nl.$l("end.cta.not-logged"),
              m = [],
              g = Nl.$store.score;
            Rn(() => {
              (v.value = Array.from(i.value.querySelectorAll(".char"))),
                (A.value = Array.from(i.value.querySelectorAll(".word"))),
                Nl.$webgl.setState("End"),
                (function (e) {
                  const t = Math.max(...e.map((e) => e.childNodes.length));
                  t <= 6
                    ? i.value.style.setProperty("--title-demult", 0.8)
                    : t >= 8 &&
                      t <= 12 &&
                      i.value.style.setProperty("--title-demult", 0.65);
                })(A.value),
                Nl.$user.userID
                  ? Nl.$analytics.pageview({
                      title: "Results - Logged",
                      path: "/results-logged",
                    })
                  : Nl.$analytics.pageview({
                      title: "Results - Not logged",
                      path: "/results-not-logged",
                    });
            });
            const v = yt(),
              A = yt();
            function y() {
              Nl.$user.userID || t.value
                ? (Nl.$router.push({ name: "Game" }),
                  Nl.$analytics.event({
                    name: "replay",
                    clickButtonName: "replay",
                  }))
                : Nl.$analytics.event({
                    name: "replay_via_msi_reward_program",
                    clickButtonName: "replay_via_msi_reward_program",
                  });
            }
            return (e, n) => {
              const r = Zn("SvgIcon"),
                m = Zn("NiceViewContainer");
              return (
                Zo(),
                Jo(m, null, {
                  default: nn(() => [
                    ir(
                      "div",
                      {
                        class: a([
                          "container",
                          {
                            "has-highscore":
                              e.$store.lastScore < e.$store.score,
                          },
                        ]),
                      },
                      [
                        ir("div", Cd, [
                          ir(
                            "h1",
                            {
                              ref_key: "title",
                              ref: i,
                              class: "title",
                              innerHTML: _t(o),
                            },
                            null,
                            8,
                            kd
                          ),
                          e.$store.lastScore < e.$store.score
                            ? (Zo(),
                              Qo(
                                "div",
                                {
                                  key: 0,
                                  ref_key: "highscore",
                                  ref: s,
                                  class: "highscore",
                                },
                                [
                                  ir(
                                    "p",
                                    { innerHTML: e.$l("end.highscore") },
                                    null,
                                    8,
                                    Gd
                                  ),
                                ],
                                512
                              ))
                            : cr("", !0),
                        ]),
                        ir("div", Sd, [
                          ir(
                            "p",
                            {
                              ref_key: "eggs",
                              ref: l,
                              class: "end-eggs",
                              innerHTML:
                                _t(g) < 2
                                  ? _t(g)
                                  : _t(g) + " " + e.$l("end.eggs"),
                            },
                            null,
                            8,
                            Ed
                          ),
                          _t(Nl).$user.userID && _t(g) < 30
                            ? (Zo(),
                              Qo(
                                "p",
                                {
                                  key: 0,
                                  ref_key: "recap",
                                  ref: c,
                                  class: "end-recap",
                                  innerHTML: e.$l("end.text.logged.level1"),
                                },
                                null,
                                8,
                                Td
                              ))
                            : cr("", !0),
                          _t(Nl).$user.userID && _t(g) >= 30
                            ? (Zo(),
                              Qo(
                                "p",
                                {
                                  key: 1,
                                  ref_key: "recap",
                                  ref: c,
                                  class: "end-recap",
                                  innerHTML: e.$l("end.text.logged.level2"),
                                },
                                null,
                                8,
                                Md
                              ))
                            : cr("", !0),
                          _t(Nl).$user.userID
                            ? cr("", !0)
                            : (Zo(),
                              Qo(
                                "p",
                                {
                                  key: 2,
                                  ref_key: "recap",
                                  ref: c,
                                  class: "end-recap",
                                  innerHTML: e.$l("end.text.not-logged"),
                                },
                                null,
                                8,
                                Ld
                              )),
                        ]),
                        _t(Nl).$user.userID || t.value
                          ? (Zo(),
                            Jo(
                              Ou,
                              {
                                key: 0,
                                ref_key: "button",
                                ref: u,
                                text: _t(h),
                                onClick: y,
                              },
                              {
                                default: nn(() => [
                                  sr(
                                    r,
                                    {
                                      id: "replay",
                                      ref_key: "replay",
                                      ref: p,
                                      class: "replay",
                                    },
                                    null,
                                    512
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              ["text"]
                            ))
                          : (Zo(),
                            Jo(
                              Ou,
                              {
                                key: 1,
                                ref_key: "button",
                                ref: u,
                                text: _t(h),
                                href: e.$l("end.push.url"),
                                onClick: y,
                              },
                              null,
                              8,
                              ["text", "href"]
                            )),
                      ],
                      2
                    ),
                    sr(Cp, { class: a({ "is-visible": d.value }) }, null, 8, [
                      "class",
                    ]),
                    sr(
                      Ud,
                      {
                        ref: "popin",
                        class: a({
                          "is-visible": f.value,
                          "is-archive": t.value,
                        }),
                      },
                      null,
                      8,
                      ["class"]
                    ),
                  ]),
                  _: 1,
                })
              );
            };
          },
        },
        [["__scopeId", "data-v-4f4af2b6"]]
      ),
    },
  ];
function $d() {
  const e = window.__DATA,
    t = e.project.locales[e.page.locale];
  let n = e.project.basepath;
  return (
    (t.default && !e.project.prefixDefaultLocale) || (n += e.page.locale),
    n.endsWith("/") && (n = n.slice(0, -1)),
    n
  );
}
const Fd = (e) => new Promise((t) => setTimeout(t, e));
function Rd(e, t) {
  const n = t.querySelector(".preloader-counter"),
    o = t.querySelector(".preloader-background"),
    r = t.querySelector(".eggs-container");
  t.querySelector(".preloader-eggs");
  const i = t.querySelector(".egg-1"),
    s = t.querySelector(".egg-2"),
    l = t.querySelector(".egg-3"),
    a = t.querySelector(".logo-msi"),
    c = t.querySelector(".logo-egghunt"),
    u = Bs();
  let p = 0,
    d = 0;
  function f(e) {
    e = zl(e, 5, 300);
    let t = ta(d, p, 0.17, e);
    if ((t > 0.99 && (t = 1), t === d)) return;
    (d = t),
      d > 0.45 && d < 0.75
        ? ((i.style.visibility = "hidden"), (s.style.visibility = "visible"))
        : d > 0.75 &&
          ((i.style.visibility = "hidden"),
          (s.style.visibility = "hidden"),
          (l.style.visibility = "visible"));
    const o = Math.floor(100 * d).toString();
    (n.textContent = o + "%"), d >= 1 && u.resolve();
  }
  return (
    Cu(),
    {
      enter: async function () {
        Wa.add(f),
          await Fd(50),
          a.classList.add("is-visible"),
          r.classList.add("is-visible"),
          await Fd(50),
          c.classList.add("is-visible");
      },
      onProgress: function (e) {
        p = e;
      },
      exit: async function (e) {
        await u,
          (r.style.transition =
            "transform 1000ms cubic-bezier(0.55, 0, 0.1, 1), opacity 600ms cubic-bezier(0.55, 0, 0.1, 1)"),
          (r.style.transform = "scale(1.5) rotate(12deg)"),
          (r.style.opacity = 0),
          await Fd(100),
          (a.style.transform = "scale(0.9) translateY(0px)"),
          a.classList.remove("is-visible"),
          (n.style.transition =
            "transform 300ms cubic-bezier(0.55, 0, 0.1, 1)"),
          (n.style.transform = "translateY(150%)"),
          await Fd(100),
          (c.style.transform = "scale(0.9) translateY(0px)"),
          c.classList.remove("is-visible"),
          await Fd(100),
          (o.style.transition = "opacity 1000ms cubic-bezier(0.55, 0, 0.1, 1)"),
          (o.style.opacity = 0),
          await Fd(500),
          e(),
          await Fd(1e3);
      },
      beforeDestroy: function () {
        Wa.remove(f);
      },
    }
  );
}
const Bd = "undefined" != typeof window;
function jd(e) {
  if (Bd) {
    if (!window.isOldBrowser) {
      const t = document;
      "l" === t.readyState[0] ? t.addEventListener("DOMContentLoaded", e) : e();
    }
  } else e();
}
function Id(e) {
  const t = li(e),
    n = t.config.globalProperties;
  (Il = t.config.globalProperties),
    (function (e) {
      const t = [],
        n = [],
        o = e.mount.bind(e);
      (e.mount = async function (r, i) {
        for (const n of t) await n(e);
        o(r, i);
        for (const t of n) await t(e);
        n.length = t.length = 0;
      }.bind(e)),
        (e.onBeforeMount = function (e, n) {
          n ? t.unshift(e) : t.push(e);
        }),
        (e.onAfterMount = function (e, t) {
          t ? n.unshift(e) : n.push(e);
        });
    })(t),
    t.provide("appProps", n),
    t.provide("plugins", n);
  const o = {
    getPlugin(e) {
      for (let t = 0; t < Ic.length; t++) {
        const n = Ic[t];
        if (n && (n[0] === e || n[1] === e)) return n;
      }
    },
    list: () => Ic,
    setOptions(e, t) {
      const n = o.getPlugin(e);
      n && (n[2] = Object.assign(n[2], t));
    },
    add(e, t, n = {}) {
      (t = t ?? "vueplugin-" + (Date.now() + Math.round(1e5 * Math.random()))),
        o.getPlugin(t) || Ic.push([e, t, n]);
    },
    remove(e) {
      for (let t = 0; t < Ic.length; t++) {
        const n = Ic[t];
        if (n && (n[0] === e || n[1] === e)) return void Ic.splice(t, 1);
      }
    },
    install(e = {}) {
      const n = {},
        o = {};
      for (let t = 0; t < Ic.length; t++) {
        const r = Ic[t];
        (o[r[0]] = r[1]), (n[r[0]] = Object.assign({}, r[2], e[r[0]]));
      }
      (n.router = Object.assign({}, n.router, { routes: Od, basepath: $d() })),
        (n.preloader = Object.assign({}, n.preloader, {
          preloaderComponent: Rd,
        }));
      for (let r in o) t.use(o[r](n[r]));
      return t.config.globalProperties;
    },
  };
  return (
    Object.assign(t, {
      usePreview: async function () {},
      onDOMReady: jd,
      pluginManager: o,
    }),
    t
  );
}
var Dd,
  Nd = {};
(Dd = {
  get exports() {
    return Nd;
  },
  set exports(e) {
    Nd = e;
  },
}),
  (function () {
    function e(e, t) {
      document.addEventListener
        ? e.addEventListener("scroll", t, !1)
        : e.attachEvent("scroll", t);
    }
    function t(e) {
      (this.g = document.createElement("div")),
        this.g.setAttribute("aria-hidden", "true"),
        this.g.appendChild(document.createTextNode(e)),
        (this.h = document.createElement("span")),
        (this.i = document.createElement("span")),
        (this.m = document.createElement("span")),
        (this.j = document.createElement("span")),
        (this.l = -1),
        (this.h.style.cssText =
          "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
        (this.i.style.cssText =
          "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
        (this.j.style.cssText =
          "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
        (this.m.style.cssText =
          "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;"),
        this.h.appendChild(this.m),
        this.i.appendChild(this.j),
        this.g.appendChild(this.h),
        this.g.appendChild(this.i);
    }
    function n(e, t) {
      e.g.style.cssText =
        "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" +
        t +
        ";";
    }
    function o(e) {
      var t = e.g.offsetWidth,
        n = t + 100;
      return (
        (e.j.style.width = n + "px"),
        (e.i.scrollLeft = n),
        (e.h.scrollLeft = e.h.scrollWidth + 100),
        e.l !== t && ((e.l = t), !0)
      );
    }
    function r(t, n) {
      function r() {
        var e = i;
        o(e) && null !== e.g.parentNode && n(e.l);
      }
      var i = t;
      e(t.h, r), e(t.i, r), o(t);
    }
    function i(e, t, n) {
      (t = t || {}),
        (n = n || window),
        (this.family = e),
        (this.style = t.style || "normal"),
        (this.weight = t.weight || "normal"),
        (this.stretch = t.stretch || "normal"),
        (this.context = n);
    }
    var s = null,
      l = null,
      a = null,
      c = null;
    function u(e) {
      return null === c && (c = !!e.document.fonts), c;
    }
    function p(e, t) {
      var n = e.style,
        o = e.weight;
      if (null === a) {
        var r = document.createElement("div");
        try {
          r.style.font = "condensed 100px sans-serif";
        } catch (i) {}
        a = "" !== r.style.font;
      }
      return [n, o, a ? e.stretch : "", "100px", t].join(" ");
    }
    (i.prototype.load = function (e, o) {
      var i = this,
        a = e || "BESbswy",
        c = 0,
        d = o || 3e3,
        f = new Date().getTime();
      return new Promise(function (e, o) {
        if (
          u(i.context) &&
          !(function (e) {
            return (
              null === l &&
                (u(e) && /Apple/.test(window.navigator.vendor)
                  ? ((e =
                      /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                        window.navigator.userAgent
                      )),
                    (l = !!e && 603 > parseInt(e[1], 10)))
                  : (l = !1)),
              l
            );
          })(i.context)
        ) {
          var h = new Promise(function (e, t) {
              !(function n() {
                new Date().getTime() - f >= d
                  ? t(Error(d + "ms timeout exceeded"))
                  : i.context.document.fonts
                      .load(p(i, '"' + i.family + '"'), a)
                      .then(function (t) {
                        1 <= t.length ? e() : setTimeout(n, 25);
                      }, t);
              })();
            }),
            m = new Promise(function (e, t) {
              c = setTimeout(function () {
                t(Error(d + "ms timeout exceeded"));
              }, d);
            });
          Promise.race([m, h]).then(function () {
            clearTimeout(c), e(i);
          }, o);
        } else
          !(function (e) {
            document.body
              ? e()
              : document.addEventListener
              ? document.addEventListener("DOMContentLoaded", function t() {
                  document.removeEventListener("DOMContentLoaded", t), e();
                })
              : document.attachEvent("onreadystatechange", function t() {
                  ("interactive" != document.readyState &&
                    "complete" != document.readyState) ||
                    (document.detachEvent("onreadystatechange", t), e());
                });
          })(function () {
            function l() {
              var t;
              (t =
                (-1 != g && -1 != v) ||
                (-1 != g && -1 != A) ||
                (-1 != v && -1 != A)) &&
                ((t = g != v && g != A && v != A) ||
                  (null === s &&
                    ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                      window.navigator.userAgent
                    )),
                    (s =
                      !!t &&
                      (536 > parseInt(t[1], 10) ||
                        (536 === parseInt(t[1], 10) &&
                          11 >= parseInt(t[2], 10))))),
                  (t =
                    s &&
                    ((g == y && v == y && A == y) ||
                      (g == b && v == b && A == b) ||
                      (g == w && v == w && A == w)))),
                (t = !t)),
                t &&
                  (null !== x.parentNode && x.parentNode.removeChild(x),
                  clearTimeout(c),
                  e(i));
            }
            var u = new t(a),
              h = new t(a),
              m = new t(a),
              g = -1,
              v = -1,
              A = -1,
              y = -1,
              b = -1,
              w = -1,
              x = document.createElement("div");
            (x.dir = "ltr"),
              n(u, p(i, "sans-serif")),
              n(h, p(i, "serif")),
              n(m, p(i, "monospace")),
              x.appendChild(u.g),
              x.appendChild(h.g),
              x.appendChild(m.g),
              i.context.document.body.appendChild(x),
              (y = u.g.offsetWidth),
              (b = h.g.offsetWidth),
              (w = m.g.offsetWidth),
              (function e() {
                if (new Date().getTime() - f >= d)
                  null !== x.parentNode && x.parentNode.removeChild(x),
                    o(Error(d + "ms timeout exceeded"));
                else {
                  var t = i.context.document.hidden;
                  (!0 !== t && void 0 !== t) ||
                    ((g = u.g.offsetWidth),
                    (v = h.g.offsetWidth),
                    (A = m.g.offsetWidth),
                    l()),
                    (c = setTimeout(e, 50));
                }
              })(),
              r(u, function (e) {
                (g = e), l();
              }),
              n(u, p(i, '"' + i.family + '",sans-serif')),
              r(h, function (e) {
                (v = e), l();
              }),
              n(h, p(i, '"' + i.family + '",serif')),
              r(m, function (e) {
                (A = e), l();
              }),
              n(m, p(i, '"' + i.family + '",monospace'));
          });
      });
    }),
      (Dd.exports = i);
  })();
const Vd = Nd;
function Hd(e, t) {
  return new Promise((n) => {
    const o = new Image();
    o.loading = "eager";
    const r = setTimeout(() => {}, 1),
      i = () => {
        clearTimeout(r);
        const i = { node: o, url: e };
        t.onLoad && t.onLoad(i), Bu.add(e, i), n(i);
      },
      s = (e) => {};
    o.decode
      ? ((o.src = e), o.decode().then(i).catch(s))
      : ((o.onload = i), (o.onerror = s), (o.decoding = "async"), (o.src = e));
  });
}
Hd.loader = {
  name: "image",
  extensions: [".jpg", ".png", ".webp", ".avif", ".gif", ".jpeg"],
  function: Hd,
};
export {
  Oc as $,
  jd as A,
  t as B,
  Ti as C,
  zu as D,
  Cp as E,
  No as F,
  Hd as G,
  Vd as H,
  kc as I,
  Ea as J,
  Cc as K,
  Uu as L,
  _u as M,
  sa as N,
  Jl as O,
  js as P,
  Ql as Q,
  na as R,
  ta as S,
  ru as T,
  tu as U,
  zl as V,
  oa as W,
  Wa as X,
  Zl as Y,
  da as Z,
  Su as _,
  Nl as a,
  $c as a0,
  Fc as a1,
  Is as a2,
  dn as a3,
  pa as a4,
  Yl as a5,
  ea as a6,
  Bu as a7,
  Du as a8,
  ir as b,
  Qo as c,
  Jn as d,
  bu as e,
  Zn as f,
  sr as g,
  cr as h,
  tn as i,
  Cu as j,
  Rn as k,
  ua as l,
  dp as m,
  a as n,
  Zo as o,
  en as p,
  sp as q,
  yt as r,
  Ca as s,
  p as t,
  _t as u,
  Jo as v,
  hn as w,
  Kn as x,
  Gu as y,
  Id as z,
};
