//  Merci-Michel [R]
//  https://www.merci-michel.com/
//  Build 20220930-130257

var wc = Object.defineProperty,
  Sc = Object.defineProperties;
var Mc = Object.getOwnPropertyDescriptors;
var La = Object.getOwnPropertySymbols;
var Cc = Object.prototype.hasOwnProperty,
  Ac = Object.prototype.propertyIsEnumerable;
var Da = (s, e, t) =>
    e in s
      ? wc(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (s[e] = t),
  Re = (s, e) => {
    for (var t in e || (e = {})) Cc.call(e, t) && Da(s, t, e[t]);
    if (La) for (var t of La(e)) Ac.call(e, t) && Da(s, t, e[t]);
    return s;
  },
  nt = (s, e) => Sc(s, Mc(e));
import {
  G as _s,
  a2 as Kt,
  H as yt,
  a3 as ke,
  a4 as va,
  a as Cl,
  a5 as ct,
  c as Jt,
  a6 as Pa,
  a7 as fe,
  a8 as Ke,
  d as Ra,
  a9 as Ia,
  aa as Fa,
  e as Tc,
  ab as Ec,
  O as Lc,
  ac as Dc,
  ad as za,
  w as Pc,
  M as Al,
  N as Tl,
  ae as Rc,
  af as Ic,
} from "./vendor.4d25231d11ae33ec.js";
import { r as Fc } from "./main.fb1695dd11ae33ec.js";
function Ua(s, e, t, i) {
  (this.fn = e), (this.ctx = t || null), (this.owner = s), (this.once = !!i);
}
function Rn(s) {
  if (!s || !s.owner) return;
  s.prev && (s.prev.next = s.next), s.next && (s.next.prev = s.prev);
  const e = s.owner;
  (s.ctx = s.fn = s.owner = null),
    s === e._first && (e._first = s.next),
    s === e._last && (e._last = s.prev);
}
class El {
  constructor() {
    (this._first = this._last = null), (this._isStoreSignal = !0);
  }
  emit(e, t, i) {
    let n = this._first;
    for (; n; )
      n.fn.call(n.ctx, e, t, i), n.once && this.unwatch(n), (n = n.next);
  }
  watch(e, t, i) {
    const n = new Ua(this, e, t, i);
    return (
      this._first
        ? ((this._last.next = n), (n.prev = this._last), (this._last = n))
        : ((this._first = n), (this._last = n)),
      n
    );
  }
  watchOnce(e, t) {
    return this.watch(e, t, !0);
  }
  unwatch(e, t) {
    if (e instanceof Ua) return Rn(e);
    t || (t = null);
    let i = this._first;
    for (; i; ) i.fn === e && i.ctx === t && Rn(i), (i = i.next);
  }
  unwatchAll() {
    let e = this._first;
    for (this._first = this._last = null; e; ) Rn(e), (e = e.next);
  }
}
const zc = Rn;
function Ti() {
  return new El();
}
class Uc extends El {
  constructor(e) {
    super(), (this.value = e);
  }
  get() {
    return this.value;
  }
  watchImmediate(e, t) {
    const i = this.watch(e, t);
    return e.call(t, this.value, this.previous), i;
  }
}
const Zr = new Set(),
  bs = {
    stack: Zr,
    held: !1,
    holdEmits: Ll,
    releaseEmits: Dl,
    batchUpdates: Nc,
  };
function Ll() {
  bs.held = !0;
}
function Dl() {
  (bs.held = !1), Zr.forEach(Bc), Zr.clear();
}
function Bc(s) {
  s._emit();
}
function Nc(s) {
  return function (e, t, i) {
    Ll(), s(e, t, i), Dl();
  };
}
class Pl extends Uc {
  set(e, t) {
    if (!(!t && this.value === e)) {
      if (((this.previous = this.value), (this.value = e), bs.held))
        return bs.stack.add(this);
      this._emit();
    }
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
    const i = e(this.value);
    this.set(i !== void 0 ? i : this.value, t);
  }
}
function it(s) {
  return new Pl(s);
}
function Rl(s, e) {
  const t = new Pl(),
    i = t.set.bind(t);
  delete t.set, (s = Array.isArray(s) ? s : [s]);
  const n = new Array(s.length);
  let r = [];
  for (let l = 0, c = s.length; l < c; l++) {
    const h = s[l],
      d = function (u) {
        (n[l] = u), a();
      };
    (n[l] = h.value), h.watch(d), r.push(h, d);
  }
  (t.destroy = o), a();
  function a() {
    const l = e.apply(null, n);
    l && l.then ? l.then(i) : i(l);
  }
  function o() {
    for (let l = 0, c = r.length; l < c; l += 2) r[l].unwatch(r[l + 1]);
    (r = null), t.unwatchAll();
  }
  return t;
}
const Il = bs.holdEmits,
  Fl = bs.releaseEmits;
let Is = null;
function In(s) {
  if (Is !== null && typeof Is.property) {
    const e = Is;
    return (Is = In.prototype = null), e;
  }
  return (Is = In.prototype = s == null ? Object.create(null) : s), new In();
}
const kc = 10;
for (let s = 0; s <= kc; s++) In();
function Oc(s, e, t = 0) {
  if ((typeof s == "string" && (s = e[s]), t === 0))
    return function () {
      return s.call(e);
    };
  if (t === 1)
    return function (i) {
      return s.call(e, i);
    };
  if (t === 2)
    return function (i, n) {
      return s.call(e, i, n);
    };
  if (t === 3)
    return function (i, n, r) {
      return s.call(e, i, n, r);
    };
  if (t === 4)
    return function (i, n, r, a) {
      return s.call(e, i, n, r, a);
    };
  if (t === 5)
    return function (i, n, r, a, o) {
      return s.call(e, i, n, r, a, o);
    };
  throw new Error("Too many arguments");
}
function Pi(s, e, t = Number.MAX_SAFE_INTEGER) {
  const i = [];
  typeof e == "function" && (s.prototype.onPoolReset = e),
    (s.prototype.release = r);
  function n() {
    return new s();
  }
  function r() {
    return s.release(this), this;
  }
  return (
    (s.alloc = function (a) {
      if (!(a <= 0)) for (; a--; ) s.release(n());
    }),
    (s.get = function () {
      const o = i.pop() || n();
      return o.onPoolReset && o.onPoolReset(o), o;
    }),
    (s.release = function () {
      let o = arguments.length;
      for (; o--; ) i.length < t && i.push(arguments[o]);
    }),
    s
  );
}
const Gc = "142",
  Vc = 0,
  Ba = 1,
  Hc = 2,
  Wc = 0,
  zl = 1,
  qc = 2,
  Vs = 3,
  ws = 0,
  Pt = 1,
  Wi = 2,
  Xc = 1,
  Mi = 0,
  Ci = 1,
  Ss = 2,
  Na = 3,
  ka = 4,
  jc = 5,
  ms = 100,
  $c = 101,
  Yc = 102,
  Oa = 103,
  Ga = 104,
  Zc = 200,
  Kc = 201,
  Jc = 202,
  Qc = 203,
  Ul = 204,
  Bl = 205,
  eh = 206,
  th = 207,
  ih = 208,
  sh = 209,
  nh = 210,
  rh = 0,
  ah = 1,
  oh = 2,
  Kr = 3,
  lh = 4,
  ch = 5,
  hh = 6,
  uh = 7,
  Nl = 0,
  dh = 1,
  fh = 2,
  ci = 0,
  ph = 1,
  mh = 2,
  gh = 3,
  vh = 4,
  _h = 5,
  kl = 300,
  Ms = 301,
  Cs = 302,
  Jr = 303,
  Qr = 304,
  Nn = 306,
  Xs = 1e3,
  kt = 1001,
  ea = 1002,
  mt = 1003,
  Va = 1004,
  Ha = 1005,
  bt = 1006,
  xh = 1007,
  kn = 1008,
  qi = 1009,
  yh = 1010,
  bh = 1011,
  Ol = 1012,
  wh = 1013,
  ki = 1014,
  Oi = 1015,
  js = 1016,
  Sh = 1017,
  Mh = 1018,
  xs = 1020,
  Gl = 1021,
  Ch = 1022,
  Ot = 1023,
  Vl = 1024,
  Ah = 1025,
  Vi = 1026,
  As = 1027,
  Hl = 1028,
  Th = 1029,
  Eh = 1030,
  Lh = 1031,
  Dh = 1033,
  jn = 33776,
  $n = 33777,
  Yn = 33778,
  Zn = 33779,
  Wa = 35840,
  qa = 35841,
  Xa = 35842,
  ja = 35843,
  Ph = 36196,
  $a = 37492,
  Ya = 37496,
  Za = 37808,
  Ka = 37809,
  Ja = 37810,
  Qa = 37811,
  eo = 37812,
  to = 37813,
  io = 37814,
  so = 37815,
  no = 37816,
  ro = 37817,
  ao = 37818,
  oo = 37819,
  lo = 37820,
  co = 37821,
  ho = 36492,
  Xi = 3e3,
  qe = 3001,
  Rh = 3200,
  Ih = 3201,
  Fh = 0,
  zh = 1,
  oi = "srgb",
  Gi = "srgb-linear",
  Kn = 7680,
  Uh = 519,
  ji = 35044,
  ys = 35048,
  uo = "300 es",
  ta = 1035;
class Ls {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const i = this._listeners;
    i[e] === void 0 && (i[e] = []), i[e].indexOf(t) === -1 && i[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const i = this._listeners;
    return i[e] !== void 0 && i[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e];
    if (n !== void 0) {
      const r = n.indexOf(t);
      r !== -1 && n.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e.type];
    if (i !== void 0) {
      e.target = this;
      const n = i.slice(0);
      for (let r = 0, a = n.length; r < a; r++) n[r].call(this, e);
      e.target = null;
    }
  }
}
const ot = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff",
  ],
  Jn = Math.PI / 180,
  fo = 180 / Math.PI;
function Ai() {
  const s = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    i = (Math.random() * 4294967295) | 0;
  return (
    ot[s & 255] +
    ot[(s >> 8) & 255] +
    ot[(s >> 16) & 255] +
    ot[(s >> 24) & 255] +
    "-" +
    ot[e & 255] +
    ot[(e >> 8) & 255] +
    "-" +
    ot[((e >> 16) & 15) | 64] +
    ot[(e >> 24) & 255] +
    "-" +
    ot[(t & 63) | 128] +
    ot[(t >> 8) & 255] +
    "-" +
    ot[(t >> 16) & 255] +
    ot[(t >> 24) & 255] +
    ot[i & 255] +
    ot[(i >> 8) & 255] +
    ot[(i >> 16) & 255] +
    ot[(i >> 24) & 255]
  ).toLowerCase();
}
function At(s, e, t) {
  return Math.max(e, Math.min(t, s));
}
function Bh(s, e) {
  return ((s % e) + e) % e;
}
function Qn(s, e, t) {
  return (1 - t) * s + t * e;
}
function po(s) {
  return (s & (s - 1)) === 0 && s !== 0;
}
function ia(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
class me {
  constructor(e = 0, t = 0) {
    (me.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(e, t))
      : ((this.x += e.x), (this.y += e.y), this);
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(e, t))
      : ((this.x -= e.x), (this.y -= e.y), this);
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      i = this.y,
      n = e.elements;
    return (
      (this.x = n[0] * t + n[3] * i + n[6]),
      (this.y = n[1] * t + n[4] * i + n[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(
      Math.max(e, Math.min(t, i))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      i = this.y - e.y;
    return t * t + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, i) {
    return (
      (this.x = e.x + (t.x - e.x) * i), (this.y = e.y + (t.y - e.y) * i), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t, i) {
    return (
      i !== void 0 &&
        console.warn(
          "THREE.Vector2: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      this
    );
  }
  rotateAround(e, t) {
    const i = Math.cos(t),
      n = Math.sin(t),
      r = this.x - e.x,
      a = this.y - e.y;
    return (this.x = r * i - a * n + e.x), (this.y = r * n + a * i + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Dt {
  constructor() {
    (Dt.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      arguments.length > 0 &&
        console.error(
          "THREE.Matrix3: the constructor no longer reads arguments. use .set() instead."
        );
  }
  set(e, t, i, n, r, a, o, l, c) {
    const h = this.elements;
    return (
      (h[0] = e),
      (h[1] = n),
      (h[2] = o),
      (h[3] = t),
      (h[4] = r),
      (h[5] = l),
      (h[6] = i),
      (h[7] = a),
      (h[8] = c),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      i = e.elements;
    return (
      (t[0] = i[0]),
      (t[1] = i[1]),
      (t[2] = i[2]),
      (t[3] = i[3]),
      (t[4] = i[4]),
      (t[5] = i[5]),
      (t[6] = i[6]),
      (t[7] = i[7]),
      (t[8] = i[8]),
      this
    );
  }
  extractBasis(e, t, i) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      i.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const i = e.elements,
      n = t.elements,
      r = this.elements,
      a = i[0],
      o = i[3],
      l = i[6],
      c = i[1],
      h = i[4],
      d = i[7],
      u = i[2],
      m = i[5],
      g = i[8],
      p = n[0],
      f = n[3],
      v = n[6],
      w = n[1],
      S = n[4],
      x = n[7],
      A = n[2],
      D = n[5],
      R = n[8];
    return (
      (r[0] = a * p + o * w + l * A),
      (r[3] = a * f + o * S + l * D),
      (r[6] = a * v + o * x + l * R),
      (r[1] = c * p + h * w + d * A),
      (r[4] = c * f + h * S + d * D),
      (r[7] = c * v + h * x + d * R),
      (r[2] = u * p + m * w + g * A),
      (r[5] = u * f + m * S + g * D),
      (r[8] = u * v + m * x + g * R),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      i = e[1],
      n = e[2],
      r = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      h = e[8];
    return (
      t * a * h - t * o * c - i * r * h + i * o * l + n * r * c - n * a * l
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      i = e[1],
      n = e[2],
      r = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      h = e[8],
      d = h * a - o * c,
      u = o * l - h * r,
      m = c * r - a * l,
      g = t * d + i * u + n * m;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const p = 1 / g;
    return (
      (e[0] = d * p),
      (e[1] = (n * c - h * i) * p),
      (e[2] = (o * i - n * a) * p),
      (e[3] = u * p),
      (e[4] = (h * t - n * l) * p),
      (e[5] = (n * r - o * t) * p),
      (e[6] = m * p),
      (e[7] = (i * l - c * t) * p),
      (e[8] = (a * t - i * r) * p),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, i, n, r, a, o) {
    const l = Math.cos(r),
      c = Math.sin(r);
    return (
      this.set(
        i * l,
        i * c,
        -i * (l * a + c * o) + a + e,
        -n * c,
        n * l,
        -n * (-c * a + l * o) + o + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    const i = this.elements;
    return (
      (i[0] *= e),
      (i[3] *= e),
      (i[6] *= e),
      (i[1] *= t),
      (i[4] *= t),
      (i[7] *= t),
      this
    );
  }
  rotate(e) {
    const t = Math.cos(e),
      i = Math.sin(e),
      n = this.elements,
      r = n[0],
      a = n[3],
      o = n[6],
      l = n[1],
      c = n[4],
      h = n[7];
    return (
      (n[0] = t * r + i * l),
      (n[3] = t * a + i * c),
      (n[6] = t * o + i * h),
      (n[1] = -i * r + t * l),
      (n[4] = -i * a + t * c),
      (n[7] = -i * o + t * h),
      this
    );
  }
  translate(e, t) {
    const i = this.elements;
    return (
      (i[0] += e * i[2]),
      (i[3] += e * i[5]),
      (i[6] += e * i[8]),
      (i[1] += t * i[2]),
      (i[4] += t * i[5]),
      (i[7] += t * i[8]),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      i = e.elements;
    for (let n = 0; n < 9; n++) if (t[n] !== i[n]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 9; i++) this.elements[i] = e[i + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const i = this.elements;
    return (
      (e[t] = i[0]),
      (e[t + 1] = i[1]),
      (e[t + 2] = i[2]),
      (e[t + 3] = i[3]),
      (e[t + 4] = i[4]),
      (e[t + 5] = i[5]),
      (e[t + 6] = i[6]),
      (e[t + 7] = i[7]),
      (e[t + 8] = i[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
function Wl(s) {
  for (let e = s.length - 1; e >= 0; --e) if (s[e] > 65535) return !0;
  return !1;
}
function Un(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function Hi(s) {
  return s < 0.04045
    ? s * 0.0773993808
    : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function Fn(s) {
  return s < 0.0031308 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
const er = { [oi]: { [Gi]: Hi }, [Gi]: { [oi]: Fn } },
  It = {
    legacyMode: !0,
    get workingColorSpace() {
      return Gi;
    },
    set workingColorSpace(s) {
      console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
    },
    convert: function (s, e, t) {
      if (this.legacyMode || e === t || !e || !t) return s;
      if (er[e] && er[e][t] !== void 0) {
        const i = er[e][t];
        return (s.r = i(s.r)), (s.g = i(s.g)), (s.b = i(s.b)), s;
      }
      throw new Error("Unsupported color space conversion.");
    },
    fromWorkingColorSpace: function (s, e) {
      return this.convert(s, this.workingColorSpace, e);
    },
    toWorkingColorSpace: function (s, e) {
      return this.convert(s, e, this.workingColorSpace);
    },
  },
  ql = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  Je = { r: 0, g: 0, b: 0 },
  Ft = { h: 0, s: 0, l: 0 },
  an = { h: 0, s: 0, l: 0 };
function tr(s, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? s + (e - s) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? s + (e - s) * 6 * (2 / 3 - t)
      : s
  );
}
function on(s, e) {
  return (e.r = s.r), (e.g = s.g), (e.b = s.b), e;
}
class L {
  constructor(e, t, i) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      t === void 0 && i === void 0 ? this.set(e) : this.setRGB(e, t, i)
    );
  }
  set(e) {
    return (
      e && e.isColor
        ? this.copy(e)
        : typeof e == "number"
        ? this.setHex(e)
        : typeof e == "string" && this.setStyle(e),
      this
    );
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = oi) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      It.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, i, n = Gi) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = i),
      It.toWorkingColorSpace(this, n),
      this
    );
  }
  setHSL(e, t, i, n = Gi) {
    if (((e = Bh(e, 1)), (t = At(t, 0, 1)), (i = At(i, 0, 1)), t === 0))
      this.r = this.g = this.b = i;
    else {
      const r = i <= 0.5 ? i * (1 + t) : i + t - i * t,
        a = 2 * i - r;
      (this.r = tr(a, r, e + 1 / 3)),
        (this.g = tr(a, r, e)),
        (this.b = tr(a, r, e - 1 / 3));
    }
    return It.toWorkingColorSpace(this, n), this;
  }
  setStyle(e, t = oi) {
    function i(r) {
      r !== void 0 &&
        parseFloat(r) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored."
        );
    }
    let n;
    if ((n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e))) {
      let r;
      const a = n[1],
        o = n[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (
            (r =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              (this.r = Math.min(255, parseInt(r[1], 10)) / 255),
              (this.g = Math.min(255, parseInt(r[2], 10)) / 255),
              (this.b = Math.min(255, parseInt(r[3], 10)) / 255),
              It.toWorkingColorSpace(this, t),
              i(r[4]),
              this
            );
          if (
            (r =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              (this.r = Math.min(100, parseInt(r[1], 10)) / 100),
              (this.g = Math.min(100, parseInt(r[2], 10)) / 100),
              (this.b = Math.min(100, parseInt(r[3], 10)) / 100),
              It.toWorkingColorSpace(this, t),
              i(r[4]),
              this
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (r =
              /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          ) {
            const l = parseFloat(r[1]) / 360,
              c = parseInt(r[2], 10) / 100,
              h = parseInt(r[3], 10) / 100;
            return i(r[4]), this.setHSL(l, c, h, t);
          }
          break;
      }
    } else if ((n = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const r = n[1],
        a = r.length;
      if (a === 3)
        return (
          (this.r = parseInt(r.charAt(0) + r.charAt(0), 16) / 255),
          (this.g = parseInt(r.charAt(1) + r.charAt(1), 16) / 255),
          (this.b = parseInt(r.charAt(2) + r.charAt(2), 16) / 255),
          It.toWorkingColorSpace(this, t),
          this
        );
      if (a === 6)
        return (
          (this.r = parseInt(r.charAt(0) + r.charAt(1), 16) / 255),
          (this.g = parseInt(r.charAt(2) + r.charAt(3), 16) / 255),
          (this.b = parseInt(r.charAt(4) + r.charAt(5), 16) / 255),
          It.toWorkingColorSpace(this, t),
          this
        );
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = oi) {
    const i = ql[e.toLowerCase()];
    return (
      i !== void 0
        ? this.setHex(i, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = Hi(e.r)), (this.g = Hi(e.g)), (this.b = Hi(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = Fn(e.r)), (this.g = Fn(e.g)), (this.b = Fn(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = oi) {
    return (
      It.fromWorkingColorSpace(on(this, Je), e),
      (At(Je.r * 255, 0, 255) << 16) ^
        (At(Je.g * 255, 0, 255) << 8) ^
        (At(Je.b * 255, 0, 255) << 0)
    );
  }
  getHexString(e = oi) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Gi) {
    It.fromWorkingColorSpace(on(this, Je), t);
    const i = Je.r,
      n = Je.g,
      r = Je.b,
      a = Math.max(i, n, r),
      o = Math.min(i, n, r);
    let l, c;
    const h = (o + a) / 2;
    if (o === a) (l = 0), (c = 0);
    else {
      const d = a - o;
      switch (((c = h <= 0.5 ? d / (a + o) : d / (2 - a - o)), a)) {
        case i:
          l = (n - r) / d + (n < r ? 6 : 0);
          break;
        case n:
          l = (r - i) / d + 2;
          break;
        case r:
          l = (i - n) / d + 4;
          break;
      }
      l /= 6;
    }
    return (e.h = l), (e.s = c), (e.l = h), e;
  }
  getRGB(e, t = Gi) {
    return (
      It.fromWorkingColorSpace(on(this, Je), t),
      (e.r = Je.r),
      (e.g = Je.g),
      (e.b = Je.b),
      e
    );
  }
  getStyle(e = oi) {
    return (
      It.fromWorkingColorSpace(on(this, Je), e),
      e !== oi
        ? `color(${e} ${Je.r} ${Je.g} ${Je.b})`
        : `rgb(${(Je.r * 255) | 0},${(Je.g * 255) | 0},${(Je.b * 255) | 0})`
    );
  }
  offsetHSL(e, t, i) {
    return (
      this.getHSL(Ft),
      (Ft.h += e),
      (Ft.s += t),
      (Ft.l += i),
      this.setHSL(Ft.h, Ft.s, Ft.l),
      this
    );
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, i) {
    return (
      (this.r = e.r + (t.r - e.r) * i),
      (this.g = e.g + (t.g - e.g) * i),
      (this.b = e.b + (t.b - e.b) * i),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(Ft), e.getHSL(an);
    const i = Qn(Ft.h, an.h, t),
      n = Qn(Ft.s, an.s, t),
      r = Qn(Ft.l, an.l, t);
    return this.setHSL(i, n, r), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)),
      (this.g = e.getY(t)),
      (this.b = e.getZ(t)),
      e.normalized === !0 &&
        ((this.r /= 255), (this.g /= 255), (this.b /= 255)),
      this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
L.NAMES = ql;
let Ji;
class Xl {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement == "undefined")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      Ji === void 0 && (Ji = Un("canvas")),
        (Ji.width = e.width),
        (Ji.height = e.height);
      const i = Ji.getContext("2d");
      e instanceof ImageData
        ? i.putImageData(e, 0, 0)
        : i.drawImage(e, 0, 0, e.width, e.height),
        (t = Ji);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement != "undefined" &&
        e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement != "undefined" &&
        e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap != "undefined" && e instanceof ImageBitmap)
    ) {
      const t = Un("canvas");
      (t.width = e.width), (t.height = e.height);
      const i = t.getContext("2d");
      i.drawImage(e, 0, 0, e.width, e.height);
      const n = i.getImageData(0, 0, e.width, e.height),
        r = n.data;
      for (let a = 0; a < r.length; a++) r[a] = Hi(r[a] / 255) * 255;
      return i.putImageData(n, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let i = 0; i < t.length; i++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[i] = Math.floor(Hi(t[i] / 255) * 255))
          : (t[i] = Hi(t[i]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
  }
}
class jl {
  constructor(e = null) {
    (this.isSource = !0),
      (this.uuid = Ai()),
      (this.data = e),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const i = { uuid: this.uuid, url: "" },
      n = this.data;
    if (n !== null) {
      let r;
      if (Array.isArray(n)) {
        r = [];
        for (let a = 0, o = n.length; a < o; a++)
          n[a].isDataTexture ? r.push(ir(n[a].image)) : r.push(ir(n[a]));
      } else r = ir(n);
      i.url = r;
    }
    return t || (e.images[this.uuid] = i), i;
  }
}
function ir(s) {
  return (typeof HTMLImageElement != "undefined" &&
    s instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement != "undefined" &&
      s instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap != "undefined" && s instanceof ImageBitmap)
    ? Xl.getDataURL(s)
    : s.data
    ? {
        data: Array.from(s.data),
        width: s.width,
        height: s.height,
        type: s.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Nh = 0;
class Rt extends Ls {
  constructor(
    e = Rt.DEFAULT_IMAGE,
    t = Rt.DEFAULT_MAPPING,
    i = kt,
    n = kt,
    r = bt,
    a = kn,
    o = Ot,
    l = qi,
    c = 1,
    h = Xi
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: Nh++ }),
      (this.uuid = Ai()),
      (this.name = ""),
      (this.source = new jl(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.wrapS = i),
      (this.wrapT = n),
      (this.magFilter = r),
      (this.minFilter = a),
      (this.anisotropy = c),
      (this.format = o),
      (this.internalFormat = null),
      (this.type = l),
      (this.offset = new me(0, 0)),
      (this.repeat = new me(1, 1)),
      (this.center = new me(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Dt()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.encoding = h),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.needsPMREMUpdate = !1);
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.encoding = e.encoding),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const i = {
      metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData),
      t || (e.textures[this.uuid] = i),
      i
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== kl) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case Xs:
          e.x = e.x - Math.floor(e.x);
          break;
        case kt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case ea:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Xs:
          e.y = e.y - Math.floor(e.y);
          break;
        case kt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case ea:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
}
Rt.DEFAULT_IMAGE = null;
Rt.DEFAULT_MAPPING = kl;
class Fe {
  constructor(e = 0, t = 0, i = 0, n = 1) {
    (Fe.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = i),
      (this.w = n);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, i, n) {
    return (this.x = e), (this.y = t), (this.z = i), (this.w = n), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(e, t))
      : ((this.x += e.x),
        (this.y += e.y),
        (this.z += e.z),
        (this.w += e.w),
        this);
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(e, t))
      : ((this.x -= e.x),
        (this.y -= e.y),
        (this.z -= e.z),
        (this.w -= e.w),
        this);
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      i = this.y,
      n = this.z,
      r = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * i + a[8] * n + a[12] * r),
      (this.y = a[1] * t + a[5] * i + a[9] * n + a[13] * r),
      (this.z = a[2] * t + a[6] * i + a[10] * n + a[14] * r),
      (this.w = a[3] * t + a[7] * i + a[11] * n + a[15] * r),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, i, n, r;
    const l = e.elements,
      c = l[0],
      h = l[4],
      d = l[8],
      u = l[1],
      m = l[5],
      g = l[9],
      p = l[2],
      f = l[6],
      v = l[10];
    if (
      Math.abs(h - u) < 0.01 &&
      Math.abs(d - p) < 0.01 &&
      Math.abs(g - f) < 0.01
    ) {
      if (
        Math.abs(h + u) < 0.1 &&
        Math.abs(d + p) < 0.1 &&
        Math.abs(g + f) < 0.1 &&
        Math.abs(c + m + v - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const S = (c + 1) / 2,
        x = (m + 1) / 2,
        A = (v + 1) / 2,
        D = (h + u) / 4,
        R = (d + p) / 4,
        b = (g + f) / 4;
      return (
        S > x && S > A
          ? S < 0.01
            ? ((i = 0), (n = 0.707106781), (r = 0.707106781))
            : ((i = Math.sqrt(S)), (n = D / i), (r = R / i))
          : x > A
          ? x < 0.01
            ? ((i = 0.707106781), (n = 0), (r = 0.707106781))
            : ((n = Math.sqrt(x)), (i = D / n), (r = b / n))
          : A < 0.01
          ? ((i = 0.707106781), (n = 0.707106781), (r = 0))
          : ((r = Math.sqrt(A)), (i = R / r), (n = b / r)),
        this.set(i, n, r, t),
        this
      );
    }
    let w = Math.sqrt(
      (f - g) * (f - g) + (d - p) * (d - p) + (u - h) * (u - h)
    );
    return (
      Math.abs(w) < 0.001 && (w = 1),
      (this.x = (f - g) / w),
      (this.y = (d - p) / w),
      (this.z = (u - h) / w),
      (this.w = Math.acos((c + m + v - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(
      Math.max(e, Math.min(t, i))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, i) {
    return (
      (this.x = e.x + (t.x - e.x) * i),
      (this.y = e.y + (t.y - e.y) * i),
      (this.z = e.z + (t.z - e.z) * i),
      (this.w = e.w + (t.w - e.w) * i),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t, i) {
    return (
      i !== void 0 &&
        console.warn(
          "THREE.Vector4: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Ei extends Ls {
  constructor(e, t, i = {}) {
    super(),
      (this.isWebGLRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new Fe(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new Fe(0, 0, e, t));
    const n = { width: e, height: t, depth: 1 };
    (this.texture = new Rt(
      n,
      i.mapping,
      i.wrapS,
      i.wrapT,
      i.magFilter,
      i.minFilter,
      i.format,
      i.type,
      i.anisotropy,
      i.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.flipY = !1),
      (this.texture.generateMipmaps =
        i.generateMipmaps !== void 0 ? i.generateMipmaps : !1),
      (this.texture.internalFormat =
        i.internalFormat !== void 0 ? i.internalFormat : null),
      (this.texture.minFilter = i.minFilter !== void 0 ? i.minFilter : bt),
      (this.depthBuffer = i.depthBuffer !== void 0 ? i.depthBuffer : !0),
      (this.stencilBuffer = i.stencilBuffer !== void 0 ? i.stencilBuffer : !1),
      (this.depthTexture = i.depthTexture !== void 0 ? i.depthTexture : null),
      (this.samples = i.samples !== void 0 ? i.samples : 0);
  }
  setSize(e, t, i = 1) {
    (this.width !== e || this.height !== t || this.depth !== i) &&
      ((this.width = e),
      (this.height = t),
      (this.depth = i),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = i),
      this.dispose()),
      this.viewport.set(0, 0, e, t),
      this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.viewport.copy(e.viewport),
      (this.texture = e.texture.clone()),
      (this.texture.isRenderTargetTexture = !0);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new jl(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class $l extends Rt {
  constructor(e = null, t = 1, i = 1, n = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: i, depth: n }),
      (this.magFilter = mt),
      (this.minFilter = mt),
      (this.wrapR = kt),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class kh extends Rt {
  constructor(e = null, t = 1, i = 1, n = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: i, depth: n }),
      (this.magFilter = mt),
      (this.minFilter = mt),
      (this.wrapR = kt),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Xe {
  constructor(e = 0, t = 0, i = 0, n = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = i),
      (this._w = n);
  }
  static slerp(e, t, i, n) {
    return (
      console.warn(
        "THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."
      ),
      i.slerpQuaternions(e, t, n)
    );
  }
  static slerpFlat(e, t, i, n, r, a, o) {
    let l = i[n + 0],
      c = i[n + 1],
      h = i[n + 2],
      d = i[n + 3];
    const u = r[a + 0],
      m = r[a + 1],
      g = r[a + 2],
      p = r[a + 3];
    if (o === 0) {
      (e[t + 0] = l), (e[t + 1] = c), (e[t + 2] = h), (e[t + 3] = d);
      return;
    }
    if (o === 1) {
      (e[t + 0] = u), (e[t + 1] = m), (e[t + 2] = g), (e[t + 3] = p);
      return;
    }
    if (d !== p || l !== u || c !== m || h !== g) {
      let f = 1 - o;
      const v = l * u + c * m + h * g + d * p,
        w = v >= 0 ? 1 : -1,
        S = 1 - v * v;
      if (S > Number.EPSILON) {
        const A = Math.sqrt(S),
          D = Math.atan2(A, v * w);
        (f = Math.sin(f * D) / A), (o = Math.sin(o * D) / A);
      }
      const x = o * w;
      if (
        ((l = l * f + u * x),
        (c = c * f + m * x),
        (h = h * f + g * x),
        (d = d * f + p * x),
        f === 1 - o)
      ) {
        const A = 1 / Math.sqrt(l * l + c * c + h * h + d * d);
        (l *= A), (c *= A), (h *= A), (d *= A);
      }
    }
    (e[t] = l), (e[t + 1] = c), (e[t + 2] = h), (e[t + 3] = d);
  }
  static multiplyQuaternionsFlat(e, t, i, n, r, a) {
    const o = i[n],
      l = i[n + 1],
      c = i[n + 2],
      h = i[n + 3],
      d = r[a],
      u = r[a + 1],
      m = r[a + 2],
      g = r[a + 3];
    return (
      (e[t] = o * g + h * d + l * m - c * u),
      (e[t + 1] = l * g + h * u + c * d - o * m),
      (e[t + 2] = c * g + h * m + o * u - l * d),
      (e[t + 3] = h * g - o * d - l * u - c * m),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, i, n) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = i),
      (this._w = n),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t) {
    if (!(e && e.isEuler))
      throw new Error(
        "THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."
      );
    const i = e._x,
      n = e._y,
      r = e._z,
      a = e._order,
      o = Math.cos,
      l = Math.sin,
      c = o(i / 2),
      h = o(n / 2),
      d = o(r / 2),
      u = l(i / 2),
      m = l(n / 2),
      g = l(r / 2);
    switch (a) {
      case "XYZ":
        (this._x = u * h * d + c * m * g),
          (this._y = c * m * d - u * h * g),
          (this._z = c * h * g + u * m * d),
          (this._w = c * h * d - u * m * g);
        break;
      case "YXZ":
        (this._x = u * h * d + c * m * g),
          (this._y = c * m * d - u * h * g),
          (this._z = c * h * g - u * m * d),
          (this._w = c * h * d + u * m * g);
        break;
      case "ZXY":
        (this._x = u * h * d - c * m * g),
          (this._y = c * m * d + u * h * g),
          (this._z = c * h * g + u * m * d),
          (this._w = c * h * d - u * m * g);
        break;
      case "ZYX":
        (this._x = u * h * d - c * m * g),
          (this._y = c * m * d + u * h * g),
          (this._z = c * h * g - u * m * d),
          (this._w = c * h * d + u * m * g);
        break;
      case "YZX":
        (this._x = u * h * d + c * m * g),
          (this._y = c * m * d + u * h * g),
          (this._z = c * h * g - u * m * d),
          (this._w = c * h * d - u * m * g);
        break;
      case "XZY":
        (this._x = u * h * d - c * m * g),
          (this._y = c * m * d - u * h * g),
          (this._z = c * h * g + u * m * d),
          (this._w = c * h * d + u * m * g);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a
        );
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const i = t / 2,
      n = Math.sin(i);
    return (
      (this._x = e.x * n),
      (this._y = e.y * n),
      (this._z = e.z * n),
      (this._w = Math.cos(i)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      i = t[0],
      n = t[4],
      r = t[8],
      a = t[1],
      o = t[5],
      l = t[9],
      c = t[2],
      h = t[6],
      d = t[10],
      u = i + o + d;
    if (u > 0) {
      const m = 0.5 / Math.sqrt(u + 1);
      (this._w = 0.25 / m),
        (this._x = (h - l) * m),
        (this._y = (r - c) * m),
        (this._z = (a - n) * m);
    } else if (i > o && i > d) {
      const m = 2 * Math.sqrt(1 + i - o - d);
      (this._w = (h - l) / m),
        (this._x = 0.25 * m),
        (this._y = (n + a) / m),
        (this._z = (r + c) / m);
    } else if (o > d) {
      const m = 2 * Math.sqrt(1 + o - i - d);
      (this._w = (r - c) / m),
        (this._x = (n + a) / m),
        (this._y = 0.25 * m),
        (this._z = (l + h) / m);
    } else {
      const m = 2 * Math.sqrt(1 + d - i - o);
      (this._w = (a - n) / m),
        (this._x = (r + c) / m),
        (this._y = (l + h) / m),
        (this._z = 0.25 * m);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let i = e.dot(t) + 1;
    return (
      i < Number.EPSILON
        ? ((i = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = i))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = i)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = i)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(At(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const i = this.angleTo(e);
    if (i === 0) return this;
    const n = Math.min(1, t / i);
    return this.slerp(e, n), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."
        ),
        this.multiplyQuaternions(e, t))
      : this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const i = e._x,
      n = e._y,
      r = e._z,
      a = e._w,
      o = t._x,
      l = t._y,
      c = t._z,
      h = t._w;
    return (
      (this._x = i * h + a * o + n * c - r * l),
      (this._y = n * h + a * l + r * o - i * c),
      (this._z = r * h + a * c + i * l - n * o),
      (this._w = a * h - i * o - n * l - r * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const i = this._x,
      n = this._y,
      r = this._z,
      a = this._w;
    let o = a * e._w + i * e._x + n * e._y + r * e._z;
    if (
      (o < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (o = -o))
        : this.copy(e),
      o >= 1)
    )
      return (this._w = a), (this._x = i), (this._y = n), (this._z = r), this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return (
        (this._w = m * a + t * this._w),
        (this._x = m * i + t * this._x),
        (this._y = m * n + t * this._y),
        (this._z = m * r + t * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    const c = Math.sqrt(l),
      h = Math.atan2(c, o),
      d = Math.sin((1 - t) * h) / c,
      u = Math.sin(t * h) / c;
    return (
      (this._w = a * d + this._w * u),
      (this._x = i * d + this._x * u),
      (this._y = n * d + this._y * u),
      (this._z = r * d + this._z * u),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, i) {
    return this.copy(e).slerp(t, i);
  }
  random() {
    const e = Math.random(),
      t = Math.sqrt(1 - e),
      i = Math.sqrt(e),
      n = 2 * Math.PI * Math.random(),
      r = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(n),
      i * Math.sin(r),
      i * Math.cos(r),
      t * Math.sin(n)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class C {
  constructor(e = 0, t = 0, i = 0) {
    (C.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = i);
  }
  set(e, t, i) {
    return (
      i === void 0 && (i = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = i),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(e, t))
      : ((this.x += e.x), (this.y += e.y), (this.z += e.z), this);
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(e, t))
      : ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this);
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."
        ),
        this.multiplyVectors(e, t))
      : ((this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this);
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return (
      (e && e.isEuler) ||
        console.error(
          "THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."
        ),
      this.applyQuaternion(mo.setFromEuler(e))
    );
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(mo.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      i = this.y,
      n = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * i + r[6] * n),
      (this.y = r[1] * t + r[4] * i + r[7] * n),
      (this.z = r[2] * t + r[5] * i + r[8] * n),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      i = this.y,
      n = this.z,
      r = e.elements,
      a = 1 / (r[3] * t + r[7] * i + r[11] * n + r[15]);
    return (
      (this.x = (r[0] * t + r[4] * i + r[8] * n + r[12]) * a),
      (this.y = (r[1] * t + r[5] * i + r[9] * n + r[13]) * a),
      (this.z = (r[2] * t + r[6] * i + r[10] * n + r[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      i = this.y,
      n = this.z,
      r = e.x,
      a = e.y,
      o = e.z,
      l = e.w,
      c = l * t + a * n - o * i,
      h = l * i + o * t - r * n,
      d = l * n + r * i - a * t,
      u = -r * t - a * i - o * n;
    return (
      (this.x = c * l + u * -r + h * -o - d * -a),
      (this.y = h * l + u * -a + d * -r - c * -o),
      (this.z = d * l + u * -o + c * -a - h * -r),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      i = this.y,
      n = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[4] * i + r[8] * n),
      (this.y = r[1] * t + r[5] * i + r[9] * n),
      (this.z = r[2] * t + r[6] * i + r[10] * n),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(
      Math.max(e, Math.min(t, i))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, i) {
    return (
      (this.x = e.x + (t.x - e.x) * i),
      (this.y = e.y + (t.y - e.y) * i),
      (this.z = e.z + (t.z - e.z) * i),
      this
    );
  }
  cross(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."
        ),
        this.crossVectors(e, t))
      : this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const i = e.x,
      n = e.y,
      r = e.z,
      a = t.x,
      o = t.y,
      l = t.z;
    return (
      (this.x = n * l - r * o),
      (this.y = r * a - i * l),
      (this.z = i * o - n * a),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const i = e.dot(this) / t;
    return this.copy(e).multiplyScalar(i);
  }
  projectOnPlane(e) {
    return sr.copy(this).projectOnVector(e), this.sub(sr);
  }
  reflect(e) {
    return this.sub(sr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(At(i, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      i = this.y - e.y,
      n = this.z - e.z;
    return t * t + i * i + n * n;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, i) {
    const n = Math.sin(t) * e;
    return (
      (this.x = n * Math.sin(i)),
      (this.y = Math.cos(t) * e),
      (this.z = n * Math.cos(i)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, i) {
    return (
      (this.x = e * Math.sin(t)), (this.y = i), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      i = this.setFromMatrixColumn(e, 1).length(),
      n = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = i), (this.z = n), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t, i) {
    return (
      i !== void 0 &&
        console.warn(
          "THREE.Vector3: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2,
      t = Math.random() * Math.PI * 2,
      i = Math.sqrt(1 - e ** 2);
    return (
      (this.x = i * Math.cos(t)), (this.y = i * Math.sin(t)), (this.z = e), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const sr = new C(),
  mo = new Xe();
class Ys {
  constructor(
    e = new C(1 / 0, 1 / 0, 1 / 0),
    t = new C(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0,
      i = 1 / 0,
      n = 1 / 0,
      r = -1 / 0,
      a = -1 / 0,
      o = -1 / 0;
    for (let l = 0, c = e.length; l < c; l += 3) {
      const h = e[l],
        d = e[l + 1],
        u = e[l + 2];
      h < t && (t = h),
        d < i && (i = d),
        u < n && (n = u),
        h > r && (r = h),
        d > a && (a = d),
        u > o && (o = u);
    }
    return this.min.set(t, i, n), this.max.set(r, a, o), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0,
      i = 1 / 0,
      n = 1 / 0,
      r = -1 / 0,
      a = -1 / 0,
      o = -1 / 0;
    for (let l = 0, c = e.count; l < c; l++) {
      const h = e.getX(l),
        d = e.getY(l),
        u = e.getZ(l);
      h < t && (t = h),
        d < i && (i = d),
        u < n && (n = u),
        h > r && (r = h),
        d > a && (a = d),
        u > o && (o = u);
    }
    return this.min.set(t, i, n), this.max.set(r, a, o), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const i = Ri.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(i), this.max.copy(e).add(i), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const i = e.geometry;
    if (i !== void 0)
      if (t && i.attributes != null && i.attributes.position !== void 0) {
        const r = i.attributes.position;
        for (let a = 0, o = r.count; a < o; a++)
          Ri.fromBufferAttribute(r, a).applyMatrix4(e.matrixWorld),
            this.expandByPoint(Ri);
      } else
        i.boundingBox === null && i.computeBoundingBox(),
          nr.copy(i.boundingBox),
          nr.applyMatrix4(e.matrixWorld),
          this.union(nr);
    const n = e.children;
    for (let r = 0, a = n.length; r < a; r++) this.expandByObject(n[r], t);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, Ri),
      Ri.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, i;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (i = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (i = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (i += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (i += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (i += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (i += e.normal.z * this.min.z)),
      t <= -e.constant && i >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(Fs),
      ln.subVectors(this.max, Fs),
      Qi.subVectors(e.a, Fs),
      es.subVectors(e.b, Fs),
      ts.subVectors(e.c, Fs),
      fi.subVectors(es, Qi),
      pi.subVectors(ts, es),
      Ii.subVectors(Qi, ts);
    let t = [
      0,
      -fi.z,
      fi.y,
      0,
      -pi.z,
      pi.y,
      0,
      -Ii.z,
      Ii.y,
      fi.z,
      0,
      -fi.x,
      pi.z,
      0,
      -pi.x,
      Ii.z,
      0,
      -Ii.x,
      -fi.y,
      fi.x,
      0,
      -pi.y,
      pi.x,
      0,
      -Ii.y,
      Ii.x,
      0,
    ];
    return !rr(t, Qi, es, ts, ln) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !rr(t, Qi, es, ts, ln))
      ? !1
      : (cn.crossVectors(fi, pi),
        (t = [cn.x, cn.y, cn.z]),
        rr(t, Qi, es, ts, ln));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return Ri.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return (
      this.getCenter(e.center), (e.radius = this.getSize(Ri).length() * 0.5), e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (ii[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        ii[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        ii[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        ii[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        ii[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        ii[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        ii[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        ii[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(ii),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const ii = [
    new C(),
    new C(),
    new C(),
    new C(),
    new C(),
    new C(),
    new C(),
    new C(),
  ],
  Ri = new C(),
  nr = new Ys(),
  Qi = new C(),
  es = new C(),
  ts = new C(),
  fi = new C(),
  pi = new C(),
  Ii = new C(),
  Fs = new C(),
  ln = new C(),
  cn = new C(),
  Fi = new C();
function rr(s, e, t, i, n) {
  for (let r = 0, a = s.length - 3; r <= a; r += 3) {
    Fi.fromArray(s, r);
    const o =
        n.x * Math.abs(Fi.x) + n.y * Math.abs(Fi.y) + n.z * Math.abs(Fi.z),
      l = e.dot(Fi),
      c = t.dot(Fi),
      h = i.dot(Fi);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o) return !1;
  }
  return !0;
}
const Oh = new Ys(),
  go = new C(),
  hn = new C(),
  ar = new C();
class _a {
  constructor(e = new C(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const i = this.center;
    t !== void 0 ? i.copy(t) : Oh.setFromPoints(e).getCenter(i);
    let n = 0;
    for (let r = 0, a = e.length; r < a; r++)
      n = Math.max(n, i.distanceToSquared(e[r]));
    return (this.radius = Math.sqrt(n)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const i = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      i > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    ar.subVectors(e, this.center);
    const t = ar.lengthSq();
    if (t > this.radius * this.radius) {
      const i = Math.sqrt(t),
        n = (i - this.radius) * 0.5;
      this.center.add(ar.multiplyScalar(n / i)), (this.radius += n);
    }
    return this;
  }
  union(e) {
    return (
      this.center.equals(e.center) === !0
        ? hn.set(0, 0, 1).multiplyScalar(e.radius)
        : hn
            .subVectors(e.center, this.center)
            .normalize()
            .multiplyScalar(e.radius),
      this.expandByPoint(go.copy(e.center).add(hn)),
      this.expandByPoint(go.copy(e.center).sub(hn)),
      this
    );
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const si = new C(),
  or = new C(),
  un = new C(),
  mi = new C(),
  lr = new C(),
  dn = new C(),
  cr = new C();
class Yl {
  constructor(e = new C(), t = new C(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.direction).multiplyScalar(e).add(this.origin);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, si)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const i = t.dot(this.direction);
    return i < 0
      ? t.copy(this.origin)
      : t.copy(this.direction).multiplyScalar(i).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = si.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (si.copy(this.direction).multiplyScalar(t).add(this.origin),
        si.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, i, n) {
    or.copy(e).add(t).multiplyScalar(0.5),
      un.copy(t).sub(e).normalize(),
      mi.copy(this.origin).sub(or);
    const r = e.distanceTo(t) * 0.5,
      a = -this.direction.dot(un),
      o = mi.dot(this.direction),
      l = -mi.dot(un),
      c = mi.lengthSq(),
      h = Math.abs(1 - a * a);
    let d, u, m, g;
    if (h > 0)
      if (((d = a * l - o), (u = a * o - l), (g = r * h), d >= 0))
        if (u >= -g)
          if (u <= g) {
            const p = 1 / h;
            (d *= p),
              (u *= p),
              (m = d * (d + a * u + 2 * o) + u * (a * d + u + 2 * l) + c);
          } else
            (u = r),
              (d = Math.max(0, -(a * u + o))),
              (m = -d * d + u * (u + 2 * l) + c);
        else
          (u = -r),
            (d = Math.max(0, -(a * u + o))),
            (m = -d * d + u * (u + 2 * l) + c);
      else
        u <= -g
          ? ((d = Math.max(0, -(-a * r + o))),
            (u = d > 0 ? -r : Math.min(Math.max(-r, -l), r)),
            (m = -d * d + u * (u + 2 * l) + c))
          : u <= g
          ? ((d = 0),
            (u = Math.min(Math.max(-r, -l), r)),
            (m = u * (u + 2 * l) + c))
          : ((d = Math.max(0, -(a * r + o))),
            (u = d > 0 ? r : Math.min(Math.max(-r, -l), r)),
            (m = -d * d + u * (u + 2 * l) + c));
    else
      (u = a > 0 ? -r : r),
        (d = Math.max(0, -(a * u + o))),
        (m = -d * d + u * (u + 2 * l) + c);
    return (
      i && i.copy(this.direction).multiplyScalar(d).add(this.origin),
      n && n.copy(un).multiplyScalar(u).add(or),
      m
    );
  }
  intersectSphere(e, t) {
    si.subVectors(e.center, this.origin);
    const i = si.dot(this.direction),
      n = si.dot(si) - i * i,
      r = e.radius * e.radius;
    if (n > r) return null;
    const a = Math.sqrt(r - n),
      o = i - a,
      l = i + a;
    return o < 0 && l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const i = -(this.origin.dot(e.normal) + e.constant) / t;
    return i >= 0 ? i : null;
  }
  intersectPlane(e, t) {
    const i = this.distanceToPlane(e);
    return i === null ? null : this.at(i, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let i, n, r, a, o, l;
    const c = 1 / this.direction.x,
      h = 1 / this.direction.y,
      d = 1 / this.direction.z,
      u = this.origin;
    return (
      c >= 0
        ? ((i = (e.min.x - u.x) * c), (n = (e.max.x - u.x) * c))
        : ((i = (e.max.x - u.x) * c), (n = (e.min.x - u.x) * c)),
      h >= 0
        ? ((r = (e.min.y - u.y) * h), (a = (e.max.y - u.y) * h))
        : ((r = (e.max.y - u.y) * h), (a = (e.min.y - u.y) * h)),
      i > a ||
      r > n ||
      ((r > i || i !== i) && (i = r),
      (a < n || n !== n) && (n = a),
      d >= 0
        ? ((o = (e.min.z - u.z) * d), (l = (e.max.z - u.z) * d))
        : ((o = (e.max.z - u.z) * d), (l = (e.min.z - u.z) * d)),
      i > l || o > n) ||
      ((o > i || i !== i) && (i = o), (l < n || n !== n) && (n = l), n < 0)
        ? null
        : this.at(i >= 0 ? i : n, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, si) !== null;
  }
  intersectTriangle(e, t, i, n, r) {
    lr.subVectors(t, e), dn.subVectors(i, e), cr.crossVectors(lr, dn);
    let a = this.direction.dot(cr),
      o;
    if (a > 0) {
      if (n) return null;
      o = 1;
    } else if (a < 0) (o = -1), (a = -a);
    else return null;
    mi.subVectors(this.origin, e);
    const l = o * this.direction.dot(dn.crossVectors(mi, dn));
    if (l < 0) return null;
    const c = o * this.direction.dot(lr.cross(mi));
    if (c < 0 || l + c > a) return null;
    const h = -o * mi.dot(cr);
    return h < 0 ? null : this.at(h / a, r);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class je {
  constructor() {
    (je.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      arguments.length > 0 &&
        console.error(
          "THREE.Matrix4: the constructor no longer reads arguments. use .set() instead."
        );
  }
  set(e, t, i, n, r, a, o, l, c, h, d, u, m, g, p, f) {
    const v = this.elements;
    return (
      (v[0] = e),
      (v[4] = t),
      (v[8] = i),
      (v[12] = n),
      (v[1] = r),
      (v[5] = a),
      (v[9] = o),
      (v[13] = l),
      (v[2] = c),
      (v[6] = h),
      (v[10] = d),
      (v[14] = u),
      (v[3] = m),
      (v[7] = g),
      (v[11] = p),
      (v[15] = f),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new je().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      i = e.elements;
    return (
      (t[0] = i[0]),
      (t[1] = i[1]),
      (t[2] = i[2]),
      (t[3] = i[3]),
      (t[4] = i[4]),
      (t[5] = i[5]),
      (t[6] = i[6]),
      (t[7] = i[7]),
      (t[8] = i[8]),
      (t[9] = i[9]),
      (t[10] = i[10]),
      (t[11] = i[11]),
      (t[12] = i[12]),
      (t[13] = i[13]),
      (t[14] = i[14]),
      (t[15] = i[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      i = e.elements;
    return (t[12] = i[12]), (t[13] = i[13]), (t[14] = i[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, i) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      i.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, i) {
    return (
      this.set(
        e.x,
        t.x,
        i.x,
        0,
        e.y,
        t.y,
        i.y,
        0,
        e.z,
        t.z,
        i.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      i = e.elements,
      n = 1 / is.setFromMatrixColumn(e, 0).length(),
      r = 1 / is.setFromMatrixColumn(e, 1).length(),
      a = 1 / is.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = i[0] * n),
      (t[1] = i[1] * n),
      (t[2] = i[2] * n),
      (t[3] = 0),
      (t[4] = i[4] * r),
      (t[5] = i[5] * r),
      (t[6] = i[6] * r),
      (t[7] = 0),
      (t[8] = i[8] * a),
      (t[9] = i[9] * a),
      (t[10] = i[10] * a),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    (e && e.isEuler) ||
      console.error(
        "THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."
      );
    const t = this.elements,
      i = e.x,
      n = e.y,
      r = e.z,
      a = Math.cos(i),
      o = Math.sin(i),
      l = Math.cos(n),
      c = Math.sin(n),
      h = Math.cos(r),
      d = Math.sin(r);
    if (e.order === "XYZ") {
      const u = a * h,
        m = a * d,
        g = o * h,
        p = o * d;
      (t[0] = l * h),
        (t[4] = -l * d),
        (t[8] = c),
        (t[1] = m + g * c),
        (t[5] = u - p * c),
        (t[9] = -o * l),
        (t[2] = p - u * c),
        (t[6] = g + m * c),
        (t[10] = a * l);
    } else if (e.order === "YXZ") {
      const u = l * h,
        m = l * d,
        g = c * h,
        p = c * d;
      (t[0] = u + p * o),
        (t[4] = g * o - m),
        (t[8] = a * c),
        (t[1] = a * d),
        (t[5] = a * h),
        (t[9] = -o),
        (t[2] = m * o - g),
        (t[6] = p + u * o),
        (t[10] = a * l);
    } else if (e.order === "ZXY") {
      const u = l * h,
        m = l * d,
        g = c * h,
        p = c * d;
      (t[0] = u - p * o),
        (t[4] = -a * d),
        (t[8] = g + m * o),
        (t[1] = m + g * o),
        (t[5] = a * h),
        (t[9] = p - u * o),
        (t[2] = -a * c),
        (t[6] = o),
        (t[10] = a * l);
    } else if (e.order === "ZYX") {
      const u = a * h,
        m = a * d,
        g = o * h,
        p = o * d;
      (t[0] = l * h),
        (t[4] = g * c - m),
        (t[8] = u * c + p),
        (t[1] = l * d),
        (t[5] = p * c + u),
        (t[9] = m * c - g),
        (t[2] = -c),
        (t[6] = o * l),
        (t[10] = a * l);
    } else if (e.order === "YZX") {
      const u = a * l,
        m = a * c,
        g = o * l,
        p = o * c;
      (t[0] = l * h),
        (t[4] = p - u * d),
        (t[8] = g * d + m),
        (t[1] = d),
        (t[5] = a * h),
        (t[9] = -o * h),
        (t[2] = -c * h),
        (t[6] = m * d + g),
        (t[10] = u - p * d);
    } else if (e.order === "XZY") {
      const u = a * l,
        m = a * c,
        g = o * l,
        p = o * c;
      (t[0] = l * h),
        (t[4] = -d),
        (t[8] = c * h),
        (t[1] = u * d + p),
        (t[5] = a * h),
        (t[9] = m * d - g),
        (t[2] = g * d - m),
        (t[6] = o * h),
        (t[10] = p * d + u);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Gh, e, Vh);
  }
  lookAt(e, t, i) {
    const n = this.elements;
    return (
      Mt.subVectors(e, t),
      Mt.lengthSq() === 0 && (Mt.z = 1),
      Mt.normalize(),
      gi.crossVectors(i, Mt),
      gi.lengthSq() === 0 &&
        (Math.abs(i.z) === 1 ? (Mt.x += 1e-4) : (Mt.z += 1e-4),
        Mt.normalize(),
        gi.crossVectors(i, Mt)),
      gi.normalize(),
      fn.crossVectors(Mt, gi),
      (n[0] = gi.x),
      (n[4] = fn.x),
      (n[8] = Mt.x),
      (n[1] = gi.y),
      (n[5] = fn.y),
      (n[9] = Mt.y),
      (n[2] = gi.z),
      (n[6] = fn.z),
      (n[10] = Mt.z),
      this
    );
  }
  multiply(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."
        ),
        this.multiplyMatrices(e, t))
      : this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const i = e.elements,
      n = t.elements,
      r = this.elements,
      a = i[0],
      o = i[4],
      l = i[8],
      c = i[12],
      h = i[1],
      d = i[5],
      u = i[9],
      m = i[13],
      g = i[2],
      p = i[6],
      f = i[10],
      v = i[14],
      w = i[3],
      S = i[7],
      x = i[11],
      A = i[15],
      D = n[0],
      R = n[4],
      b = n[8],
      E = n[12],
      k = n[1],
      B = n[5],
      ee = n[9],
      re = n[13],
      I = n[2],
      q = n[6],
      G = n[10],
      X = n[14],
      j = n[3],
      U = n[7],
      V = n[11],
      Q = n[15];
    return (
      (r[0] = a * D + o * k + l * I + c * j),
      (r[4] = a * R + o * B + l * q + c * U),
      (r[8] = a * b + o * ee + l * G + c * V),
      (r[12] = a * E + o * re + l * X + c * Q),
      (r[1] = h * D + d * k + u * I + m * j),
      (r[5] = h * R + d * B + u * q + m * U),
      (r[9] = h * b + d * ee + u * G + m * V),
      (r[13] = h * E + d * re + u * X + m * Q),
      (r[2] = g * D + p * k + f * I + v * j),
      (r[6] = g * R + p * B + f * q + v * U),
      (r[10] = g * b + p * ee + f * G + v * V),
      (r[14] = g * E + p * re + f * X + v * Q),
      (r[3] = w * D + S * k + x * I + A * j),
      (r[7] = w * R + S * B + x * q + A * U),
      (r[11] = w * b + S * ee + x * G + A * V),
      (r[15] = w * E + S * re + x * X + A * Q),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      i = e[4],
      n = e[8],
      r = e[12],
      a = e[1],
      o = e[5],
      l = e[9],
      c = e[13],
      h = e[2],
      d = e[6],
      u = e[10],
      m = e[14],
      g = e[3],
      p = e[7],
      f = e[11],
      v = e[15];
    return (
      g *
        (+r * l * d -
          n * c * d -
          r * o * u +
          i * c * u +
          n * o * m -
          i * l * m) +
      p *
        (+t * l * m -
          t * c * u +
          r * a * u -
          n * a * m +
          n * c * h -
          r * l * h) +
      f *
        (+t * c * d -
          t * o * m -
          r * a * d +
          i * a * m +
          r * o * h -
          i * c * h) +
      v *
        (-n * o * h - t * l * d + t * o * u + n * a * d - i * a * u + i * l * h)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, i) {
    const n = this.elements;
    return (
      e.isVector3
        ? ((n[12] = e.x), (n[13] = e.y), (n[14] = e.z))
        : ((n[12] = e), (n[13] = t), (n[14] = i)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      i = e[1],
      n = e[2],
      r = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      h = e[8],
      d = e[9],
      u = e[10],
      m = e[11],
      g = e[12],
      p = e[13],
      f = e[14],
      v = e[15],
      w = d * f * c - p * u * c + p * l * m - o * f * m - d * l * v + o * u * v,
      S = g * u * c - h * f * c - g * l * m + a * f * m + h * l * v - a * u * v,
      x = h * p * c - g * d * c + g * o * m - a * p * m - h * o * v + a * d * v,
      A = g * d * l - h * p * l - g * o * u + a * p * u + h * o * f - a * d * f,
      D = t * w + i * S + n * x + r * A;
    if (D === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const R = 1 / D;
    return (
      (e[0] = w * R),
      (e[1] =
        (p * u * r -
          d * f * r -
          p * n * m +
          i * f * m +
          d * n * v -
          i * u * v) *
        R),
      (e[2] =
        (o * f * r -
          p * l * r +
          p * n * c -
          i * f * c -
          o * n * v +
          i * l * v) *
        R),
      (e[3] =
        (d * l * r -
          o * u * r -
          d * n * c +
          i * u * c +
          o * n * m -
          i * l * m) *
        R),
      (e[4] = S * R),
      (e[5] =
        (h * f * r -
          g * u * r +
          g * n * m -
          t * f * m -
          h * n * v +
          t * u * v) *
        R),
      (e[6] =
        (g * l * r -
          a * f * r -
          g * n * c +
          t * f * c +
          a * n * v -
          t * l * v) *
        R),
      (e[7] =
        (a * u * r -
          h * l * r +
          h * n * c -
          t * u * c -
          a * n * m +
          t * l * m) *
        R),
      (e[8] = x * R),
      (e[9] =
        (g * d * r -
          h * p * r -
          g * i * m +
          t * p * m +
          h * i * v -
          t * d * v) *
        R),
      (e[10] =
        (a * p * r -
          g * o * r +
          g * i * c -
          t * p * c -
          a * i * v +
          t * o * v) *
        R),
      (e[11] =
        (h * o * r -
          a * d * r -
          h * i * c +
          t * d * c +
          a * i * m -
          t * o * m) *
        R),
      (e[12] = A * R),
      (e[13] =
        (h * p * n -
          g * d * n +
          g * i * u -
          t * p * u -
          h * i * f +
          t * d * f) *
        R),
      (e[14] =
        (g * o * n -
          a * p * n -
          g * i * l +
          t * p * l +
          a * i * f -
          t * o * f) *
        R),
      (e[15] =
        (a * d * n -
          h * o * n +
          h * i * l -
          t * d * l -
          a * i * u +
          t * o * u) *
        R),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      i = e.x,
      n = e.y,
      r = e.z;
    return (
      (t[0] *= i),
      (t[4] *= n),
      (t[8] *= r),
      (t[1] *= i),
      (t[5] *= n),
      (t[9] *= r),
      (t[2] *= i),
      (t[6] *= n),
      (t[10] *= r),
      (t[3] *= i),
      (t[7] *= n),
      (t[11] *= r),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      n = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, i, n));
  }
  makeTranslation(e, t, i) {
    return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, i, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      i = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -i, 0, 0, i, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      i = Math.sin(e);
    return this.set(t, 0, i, 0, 0, 1, 0, 0, -i, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      i = Math.sin(e);
    return this.set(t, -i, 0, 0, i, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const i = Math.cos(t),
      n = Math.sin(t),
      r = 1 - i,
      a = e.x,
      o = e.y,
      l = e.z,
      c = r * a,
      h = r * o;
    return (
      this.set(
        c * a + i,
        c * o - n * l,
        c * l + n * o,
        0,
        c * o + n * l,
        h * o + i,
        h * l - n * a,
        0,
        c * l - n * o,
        h * l + n * a,
        r * l * l + i,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, i) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, i, n, r, a) {
    return this.set(1, i, r, 0, e, 1, a, 0, t, n, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, i) {
    const n = this.elements,
      r = t._x,
      a = t._y,
      o = t._z,
      l = t._w,
      c = r + r,
      h = a + a,
      d = o + o,
      u = r * c,
      m = r * h,
      g = r * d,
      p = a * h,
      f = a * d,
      v = o * d,
      w = l * c,
      S = l * h,
      x = l * d,
      A = i.x,
      D = i.y,
      R = i.z;
    return (
      (n[0] = (1 - (p + v)) * A),
      (n[1] = (m + x) * A),
      (n[2] = (g - S) * A),
      (n[3] = 0),
      (n[4] = (m - x) * D),
      (n[5] = (1 - (u + v)) * D),
      (n[6] = (f + w) * D),
      (n[7] = 0),
      (n[8] = (g + S) * R),
      (n[9] = (f - w) * R),
      (n[10] = (1 - (u + p)) * R),
      (n[11] = 0),
      (n[12] = e.x),
      (n[13] = e.y),
      (n[14] = e.z),
      (n[15] = 1),
      this
    );
  }
  decompose(e, t, i) {
    const n = this.elements;
    let r = is.set(n[0], n[1], n[2]).length();
    const a = is.set(n[4], n[5], n[6]).length(),
      o = is.set(n[8], n[9], n[10]).length();
    this.determinant() < 0 && (r = -r),
      (e.x = n[12]),
      (e.y = n[13]),
      (e.z = n[14]),
      zt.copy(this);
    const c = 1 / r,
      h = 1 / a,
      d = 1 / o;
    return (
      (zt.elements[0] *= c),
      (zt.elements[1] *= c),
      (zt.elements[2] *= c),
      (zt.elements[4] *= h),
      (zt.elements[5] *= h),
      (zt.elements[6] *= h),
      (zt.elements[8] *= d),
      (zt.elements[9] *= d),
      (zt.elements[10] *= d),
      t.setFromRotationMatrix(zt),
      (i.x = r),
      (i.y = a),
      (i.z = o),
      this
    );
  }
  makePerspective(e, t, i, n, r, a) {
    a === void 0 &&
      console.warn(
        "THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."
      );
    const o = this.elements,
      l = (2 * r) / (t - e),
      c = (2 * r) / (i - n),
      h = (t + e) / (t - e),
      d = (i + n) / (i - n),
      u = -(a + r) / (a - r),
      m = (-2 * a * r) / (a - r);
    return (
      (o[0] = l),
      (o[4] = 0),
      (o[8] = h),
      (o[12] = 0),
      (o[1] = 0),
      (o[5] = c),
      (o[9] = d),
      (o[13] = 0),
      (o[2] = 0),
      (o[6] = 0),
      (o[10] = u),
      (o[14] = m),
      (o[3] = 0),
      (o[7] = 0),
      (o[11] = -1),
      (o[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, i, n, r, a) {
    const o = this.elements,
      l = 1 / (t - e),
      c = 1 / (i - n),
      h = 1 / (a - r),
      d = (t + e) * l,
      u = (i + n) * c,
      m = (a + r) * h;
    return (
      (o[0] = 2 * l),
      (o[4] = 0),
      (o[8] = 0),
      (o[12] = -d),
      (o[1] = 0),
      (o[5] = 2 * c),
      (o[9] = 0),
      (o[13] = -u),
      (o[2] = 0),
      (o[6] = 0),
      (o[10] = -2 * h),
      (o[14] = -m),
      (o[3] = 0),
      (o[7] = 0),
      (o[11] = 0),
      (o[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      i = e.elements;
    for (let n = 0; n < 16; n++) if (t[n] !== i[n]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 16; i++) this.elements[i] = e[i + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const i = this.elements;
    return (
      (e[t] = i[0]),
      (e[t + 1] = i[1]),
      (e[t + 2] = i[2]),
      (e[t + 3] = i[3]),
      (e[t + 4] = i[4]),
      (e[t + 5] = i[5]),
      (e[t + 6] = i[6]),
      (e[t + 7] = i[7]),
      (e[t + 8] = i[8]),
      (e[t + 9] = i[9]),
      (e[t + 10] = i[10]),
      (e[t + 11] = i[11]),
      (e[t + 12] = i[12]),
      (e[t + 13] = i[13]),
      (e[t + 14] = i[14]),
      (e[t + 15] = i[15]),
      e
    );
  }
}
const is = new C(),
  zt = new je(),
  Gh = new C(0, 0, 0),
  Vh = new C(1, 1, 1),
  gi = new C(),
  fn = new C(),
  Mt = new C(),
  vo = new je(),
  _o = new Xe();
class ht {
  constructor(e = 0, t = 0, i = 0, n = ht.DefaultOrder) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = i),
      (this._order = n);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, i, n = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = i),
      (this._order = n),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, i = !0) {
    const n = e.elements,
      r = n[0],
      a = n[4],
      o = n[8],
      l = n[1],
      c = n[5],
      h = n[9],
      d = n[2],
      u = n[6],
      m = n[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(At(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-h, m)), (this._z = Math.atan2(-a, r)))
            : ((this._x = Math.atan2(u, c)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-At(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._y = Math.atan2(o, m)), (this._z = Math.atan2(l, c)))
            : ((this._y = Math.atan2(-d, r)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(At(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(-d, m)), (this._z = Math.atan2(-a, c)))
            : ((this._y = 0), (this._z = Math.atan2(l, r)));
        break;
      case "ZYX":
        (this._y = Math.asin(-At(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._x = Math.atan2(u, m)), (this._z = Math.atan2(l, r)))
            : ((this._x = 0), (this._z = Math.atan2(-a, c)));
        break;
      case "YZX":
        (this._z = Math.asin(At(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(-h, c)), (this._y = Math.atan2(-d, r)))
            : ((this._x = 0), (this._y = Math.atan2(o, m)));
        break;
      case "XZY":
        (this._z = Math.asin(-At(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(u, c)), (this._y = Math.atan2(o, r)))
            : ((this._x = Math.atan2(-h, m)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t
        );
    }
    return (this._order = t), i === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, i) {
    return (
      vo.makeRotationFromQuaternion(e), this.setFromRotationMatrix(vo, t, i)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return _o.setFromEuler(this), this.setFromQuaternion(_o, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
  toVector3() {
    console.error(
      "THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead"
    );
  }
}
ht.DefaultOrder = "XYZ";
ht.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class xa {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let Hh = 0;
const xo = new C(),
  ss = new Xe(),
  ni = new je(),
  pn = new C(),
  zs = new C(),
  Wh = new C(),
  qh = new Xe(),
  yo = new C(1, 0, 0),
  bo = new C(0, 1, 0),
  wo = new C(0, 0, 1),
  Xh = { type: "added" },
  So = { type: "removed" };
class He extends Ls {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: Hh++ }),
      (this.uuid = Ai()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = He.DefaultUp.clone());
    const e = new C(),
      t = new ht(),
      i = new Xe(),
      n = new C(1, 1, 1);
    function r() {
      i.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(i, void 0, !1);
    }
    t._onChange(r),
      i._onChange(a),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: i },
        scale: { configurable: !0, enumerable: !0, value: n },
        modelViewMatrix: { value: new je() },
        normalMatrix: { value: new Dt() },
      }),
      (this.matrix = new je()),
      (this.matrixWorld = new je()),
      (this.matrixAutoUpdate = He.DefaultMatrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new xa()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return ss.setFromAxisAngle(e, t), this.quaternion.multiply(ss), this;
  }
  rotateOnWorldAxis(e, t) {
    return ss.setFromAxisAngle(e, t), this.quaternion.premultiply(ss), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(yo, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(bo, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(wo, e);
  }
  translateOnAxis(e, t) {
    return (
      xo.copy(e).applyQuaternion(this.quaternion),
      this.position.add(xo.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(yo, e);
  }
  translateY(e) {
    return this.translateOnAxis(bo, e);
  }
  translateZ(e) {
    return this.translateOnAxis(wo, e);
  }
  localToWorld(e) {
    return e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return e.applyMatrix4(ni.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, i) {
    e.isVector3 ? pn.copy(e) : pn.set(e, t, i);
    const n = this.parent;
    this.updateWorldMatrix(!0, !1),
      zs.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? ni.lookAt(zs, pn, this.up)
        : ni.lookAt(pn, zs, this.up),
      this.quaternion.setFromRotationMatrix(ni),
      n &&
        (ni.extractRotation(n.matrixWorld),
        ss.setFromRotationMatrix(ni),
        this.quaternion.premultiply(ss.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (e.parent !== null && e.parent.remove(e),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(Xh))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) this.remove(arguments[i]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(So)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      (t.parent = null), t.dispatchEvent(So);
    }
    return (this.children.length = 0), this;
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      ni.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), ni.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(ni),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let i = 0, n = this.children.length; i < n; i++) {
      const a = this.children[i].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(zs, e, Wh), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(zs, qh, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let i = 0, n = t.length; i < n; i++) t[i].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let i = 0, n = t.length; i < n; i++) t[i].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let i = 0, n = t.length; i < n; i++) t[i].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const i = this.parent;
    if (
      (e === !0 && i !== null && i.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.parent === null
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          ),
      t === !0)
    ) {
      const n = this.children;
      for (let r = 0, a = n.length; r < a; r++) n[r].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      i = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (i.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const n = {};
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.castShadow === !0 && (n.castShadow = !0),
      this.receiveShadow === !0 && (n.receiveShadow = !0),
      this.visible === !1 && (n.visible = !1),
      this.frustumCulled === !1 && (n.frustumCulled = !1),
      this.renderOrder !== 0 && (n.renderOrder = this.renderOrder),
      JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData),
      (n.layers = this.layers.mask),
      (n.matrix = this.matrix.toArray()),
      this.matrixAutoUpdate === !1 && (n.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((n.type = "InstancedMesh"),
        (n.count = this.count),
        (n.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (n.instanceColor = this.instanceColor.toJSON()));
    function r(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (n.background = this.background.toJSON())
          : this.background.isTexture &&
            (n.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          (n.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      n.geometry = r(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, h = l.length; c < h; c++) {
            const d = l[c];
            r(e.shapes, d);
          }
        else r(e.shapes, l);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((n.bindMode = this.bindMode),
        (n.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (r(e.skeletons, this.skeleton), (n.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(r(e.materials, this.material[l]));
        n.material = o;
      } else n.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      n.children = [];
      for (let o = 0; o < this.children.length; o++)
        n.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      n.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        n.animations.push(r(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries),
        l = a(e.materials),
        c = a(e.textures),
        h = a(e.images),
        d = a(e.shapes),
        u = a(e.skeletons),
        m = a(e.animations),
        g = a(e.nodes);
      o.length > 0 && (i.geometries = o),
        l.length > 0 && (i.materials = l),
        c.length > 0 && (i.textures = c),
        h.length > 0 && (i.images = h),
        d.length > 0 && (i.shapes = d),
        u.length > 0 && (i.skeletons = u),
        m.length > 0 && (i.animations = m),
        g.length > 0 && (i.nodes = g);
    }
    return (i.object = n), i;
    function a(o) {
      const l = [];
      for (const c in o) {
        const h = o[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let i = 0; i < e.children.length; i++) {
        const n = e.children[i];
        this.add(n.clone());
      }
    return this;
  }
}
He.DefaultUp = new C(0, 1, 0);
He.DefaultMatrixAutoUpdate = !0;
const Ut = new C(),
  ri = new C(),
  hr = new C(),
  ai = new C(),
  ns = new C(),
  rs = new C(),
  Mo = new C(),
  ur = new C(),
  dr = new C(),
  fr = new C();
class li {
  constructor(e = new C(), t = new C(), i = new C()) {
    (this.a = e), (this.b = t), (this.c = i);
  }
  static getNormal(e, t, i, n) {
    n.subVectors(i, t), Ut.subVectors(e, t), n.cross(Ut);
    const r = n.lengthSq();
    return r > 0 ? n.multiplyScalar(1 / Math.sqrt(r)) : n.set(0, 0, 0);
  }
  static getBarycoord(e, t, i, n, r) {
    Ut.subVectors(n, t), ri.subVectors(i, t), hr.subVectors(e, t);
    const a = Ut.dot(Ut),
      o = Ut.dot(ri),
      l = Ut.dot(hr),
      c = ri.dot(ri),
      h = ri.dot(hr),
      d = a * c - o * o;
    if (d === 0) return r.set(-2, -1, -1);
    const u = 1 / d,
      m = (c * l - o * h) * u,
      g = (a * h - o * l) * u;
    return r.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, i, n) {
    return (
      this.getBarycoord(e, t, i, n, ai),
      ai.x >= 0 && ai.y >= 0 && ai.x + ai.y <= 1
    );
  }
  static getUV(e, t, i, n, r, a, o, l) {
    return (
      this.getBarycoord(e, t, i, n, ai),
      l.set(0, 0),
      l.addScaledVector(r, ai.x),
      l.addScaledVector(a, ai.y),
      l.addScaledVector(o, ai.z),
      l
    );
  }
  static isFrontFacing(e, t, i, n) {
    return Ut.subVectors(i, t), ri.subVectors(e, t), Ut.cross(ri).dot(n) < 0;
  }
  set(e, t, i) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(i), this;
  }
  setFromPointsAndIndices(e, t, i, n) {
    return this.a.copy(e[t]), this.b.copy(e[i]), this.c.copy(e[n]), this;
  }
  setFromAttributeAndIndices(e, t, i, n) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, i),
      this.c.fromBufferAttribute(e, n),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      Ut.subVectors(this.c, this.b),
      ri.subVectors(this.a, this.b),
      Ut.cross(ri).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return li.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return li.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, i, n, r) {
    return li.getUV(e, this.a, this.b, this.c, t, i, n, r);
  }
  containsPoint(e) {
    return li.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return li.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const i = this.a,
      n = this.b,
      r = this.c;
    let a, o;
    ns.subVectors(n, i), rs.subVectors(r, i), ur.subVectors(e, i);
    const l = ns.dot(ur),
      c = rs.dot(ur);
    if (l <= 0 && c <= 0) return t.copy(i);
    dr.subVectors(e, n);
    const h = ns.dot(dr),
      d = rs.dot(dr);
    if (h >= 0 && d <= h) return t.copy(n);
    const u = l * d - h * c;
    if (u <= 0 && l >= 0 && h <= 0)
      return (a = l / (l - h)), t.copy(i).addScaledVector(ns, a);
    fr.subVectors(e, r);
    const m = ns.dot(fr),
      g = rs.dot(fr);
    if (g >= 0 && m <= g) return t.copy(r);
    const p = m * c - l * g;
    if (p <= 0 && c >= 0 && g <= 0)
      return (o = c / (c - g)), t.copy(i).addScaledVector(rs, o);
    const f = h * g - m * d;
    if (f <= 0 && d - h >= 0 && m - g >= 0)
      return (
        Mo.subVectors(r, n),
        (o = (d - h) / (d - h + (m - g))),
        t.copy(n).addScaledVector(Mo, o)
      );
    const v = 1 / (f + p + u);
    return (
      (a = p * v),
      (o = u * v),
      t.copy(i).addScaledVector(ns, a).addScaledVector(rs, o)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let jh = 0;
class On extends Ls {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: jh++ }),
      (this.uuid = Ai()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = Ci),
      (this.side = ws),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.blendSrc = Ul),
      (this.blendDst = Bl),
      (this.blendEquation = ms),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = Kr),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = Uh),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = Kn),
      (this.stencilZFail = Kn),
      (this.stencilZPass = Kn),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const i = e[t];
        if (i === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        if (t === "shading") {
          console.warn(
            "THREE." +
              this.type +
              ": .shading has been removed. Use the boolean .flatShading instead."
          ),
            (this.flatShading = i === Xc);
          continue;
        }
        const n = this[t];
        if (n === void 0) {
          console.warn(
            "THREE." +
              this.type +
              ": '" +
              t +
              "' is not a property of this material."
          );
          continue;
        }
        n && n.isColor
          ? n.set(i)
          : n && n.isVector3 && i && i.isVector3
          ? n.copy(i)
          : (this[t] = i);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const i = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== "" && (i.name = this.name),
      this.color && this.color.isColor && (i.color = this.color.getHex()),
      this.roughness !== void 0 && (i.roughness = this.roughness),
      this.metalness !== void 0 && (i.metalness = this.metalness),
      this.sheen !== void 0 && (i.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (i.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (i.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (i.emissive = this.emissive.getHex()),
      this.emissiveIntensity &&
        this.emissiveIntensity !== 1 &&
        (i.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (i.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (i.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (i.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (i.shininess = this.shininess),
      this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (i.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (i.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.iridescence !== void 0 && (i.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (i.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (i.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (i.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (i.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (i.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((i.lightMap = this.lightMap.toJSON(e).uuid),
        (i.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((i.aoMap = this.aoMap.toJSON(e).uuid),
        (i.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((i.bumpMap = this.bumpMap.toJSON(e).uuid),
        (i.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((i.normalMap = this.normalMap.toJSON(e).uuid),
        (i.normalMapType = this.normalMapType),
        (i.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((i.displacementMap = this.displacementMap.toJSON(e).uuid),
        (i.displacementScale = this.displacementScale),
        (i.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (i.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (i.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (i.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (i.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (i.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((i.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (i.combine = this.combine)),
      this.envMapIntensity !== void 0 &&
        (i.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (i.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (i.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (i.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (i.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (i.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (i.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        (i.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (i.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (i.size = this.size),
      this.shadowSide !== null && (i.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (i.sizeAttenuation = this.sizeAttenuation),
      this.blending !== Ci && (i.blending = this.blending),
      this.side !== ws && (i.side = this.side),
      this.vertexColors && (i.vertexColors = !0),
      this.opacity < 1 && (i.opacity = this.opacity),
      this.transparent === !0 && (i.transparent = this.transparent),
      (i.depthFunc = this.depthFunc),
      (i.depthTest = this.depthTest),
      (i.depthWrite = this.depthWrite),
      (i.colorWrite = this.colorWrite),
      (i.stencilWrite = this.stencilWrite),
      (i.stencilWriteMask = this.stencilWriteMask),
      (i.stencilFunc = this.stencilFunc),
      (i.stencilRef = this.stencilRef),
      (i.stencilFuncMask = this.stencilFuncMask),
      (i.stencilFail = this.stencilFail),
      (i.stencilZFail = this.stencilZFail),
      (i.stencilZPass = this.stencilZPass),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (i.rotation = this.rotation),
      this.polygonOffset === !0 && (i.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (i.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (i.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (i.linewidth = this.linewidth),
      this.dashSize !== void 0 && (i.dashSize = this.dashSize),
      this.gapSize !== void 0 && (i.gapSize = this.gapSize),
      this.scale !== void 0 && (i.scale = this.scale),
      this.dithering === !0 && (i.dithering = !0),
      this.alphaTest > 0 && (i.alphaTest = this.alphaTest),
      this.alphaToCoverage === !0 && (i.alphaToCoverage = this.alphaToCoverage),
      this.premultipliedAlpha === !0 &&
        (i.premultipliedAlpha = this.premultipliedAlpha),
      this.wireframe === !0 && (i.wireframe = this.wireframe),
      this.wireframeLinewidth > 1 &&
        (i.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (i.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (i.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (i.flatShading = this.flatShading),
      this.visible === !1 && (i.visible = !1),
      this.toneMapped === !1 && (i.toneMapped = !1),
      this.fog === !1 && (i.fog = !1),
      JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData);
    function n(r) {
      const a = [];
      for (const o in r) {
        const l = r[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const r = n(e.textures),
        a = n(e.images);
      r.length > 0 && (i.textures = r), a.length > 0 && (i.images = a);
    }
    return i;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let i = null;
    if (t !== null) {
      const n = t.length;
      i = new Array(n);
      for (let r = 0; r !== n; ++r) i[r] = t[r].clone();
    }
    return (
      (this.clippingPlanes = i),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class Zl extends On {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new L(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = Nl),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const Ze = new C(),
  mn = new me();
class Et {
  constructor(e, t, i) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = i === !0),
      (this.usage = ji),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, i) {
    (e *= this.itemSize), (i *= t.itemSize);
    for (let n = 0, r = this.itemSize; n < r; n++)
      this.array[e + n] = t.array[i + n];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  copyColorsArray(e) {
    const t = this.array;
    let i = 0;
    for (let n = 0, r = e.length; n < r; n++) {
      let a = e[n];
      a === void 0 &&
        (console.warn(
          "THREE.BufferAttribute.copyColorsArray(): color is undefined",
          n
        ),
        (a = new L())),
        (t[i++] = a.r),
        (t[i++] = a.g),
        (t[i++] = a.b);
    }
    return this;
  }
  copyVector2sArray(e) {
    const t = this.array;
    let i = 0;
    for (let n = 0, r = e.length; n < r; n++) {
      let a = e[n];
      a === void 0 &&
        (console.warn(
          "THREE.BufferAttribute.copyVector2sArray(): vector is undefined",
          n
        ),
        (a = new me())),
        (t[i++] = a.x),
        (t[i++] = a.y);
    }
    return this;
  }
  copyVector3sArray(e) {
    const t = this.array;
    let i = 0;
    for (let n = 0, r = e.length; n < r; n++) {
      let a = e[n];
      a === void 0 &&
        (console.warn(
          "THREE.BufferAttribute.copyVector3sArray(): vector is undefined",
          n
        ),
        (a = new C())),
        (t[i++] = a.x),
        (t[i++] = a.y),
        (t[i++] = a.z);
    }
    return this;
  }
  copyVector4sArray(e) {
    const t = this.array;
    let i = 0;
    for (let n = 0, r = e.length; n < r; n++) {
      let a = e[n];
      a === void 0 &&
        (console.warn(
          "THREE.BufferAttribute.copyVector4sArray(): vector is undefined",
          n
        ),
        (a = new Fe())),
        (t[i++] = a.x),
        (t[i++] = a.y),
        (t[i++] = a.z),
        (t[i++] = a.w);
    }
    return this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, i = this.count; t < i; t++)
        mn.fromBufferAttribute(this, t),
          mn.applyMatrix3(e),
          this.setXY(t, mn.x, mn.y);
    else if (this.itemSize === 3)
      for (let t = 0, i = this.count; t < i; t++)
        Ze.fromBufferAttribute(this, t),
          Ze.applyMatrix3(e),
          this.setXYZ(t, Ze.x, Ze.y, Ze.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, i = this.count; t < i; t++)
      Ze.fromBufferAttribute(this, t),
        Ze.applyMatrix4(e),
        this.setXYZ(t, Ze.x, Ze.y, Ze.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++)
      Ze.fromBufferAttribute(this, t),
        Ze.applyNormalMatrix(e),
        this.setXYZ(t, Ze.x, Ze.y, Ze.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++)
      Ze.fromBufferAttribute(this, t),
        Ze.transformDirection(e),
        this.setXYZ(t, Ze.x, Ze.y, Ze.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    return this.array[e * this.itemSize];
  }
  setX(e, t) {
    return (this.array[e * this.itemSize] = t), this;
  }
  getY(e) {
    return this.array[e * this.itemSize + 1];
  }
  setY(e, t) {
    return (this.array[e * this.itemSize + 1] = t), this;
  }
  getZ(e) {
    return this.array[e * this.itemSize + 2];
  }
  setZ(e, t) {
    return (this.array[e * this.itemSize + 2] = t), this;
  }
  getW(e) {
    return this.array[e * this.itemSize + 3];
  }
  setW(e, t) {
    return (this.array[e * this.itemSize + 3] = t), this;
  }
  setXY(e, t, i) {
    return (
      (e *= this.itemSize),
      (this.array[e + 0] = t),
      (this.array[e + 1] = i),
      this
    );
  }
  setXYZ(e, t, i, n) {
    return (
      (e *= this.itemSize),
      (this.array[e + 0] = t),
      (this.array[e + 1] = i),
      (this.array[e + 2] = n),
      this
    );
  }
  setXYZW(e, t, i, n, r) {
    return (
      (e *= this.itemSize),
      (this.array[e + 0] = t),
      (this.array[e + 1] = i),
      (this.array[e + 2] = n),
      (this.array[e + 3] = r),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== ji && (e.usage = this.usage),
      (this.updateRange.offset !== 0 || this.updateRange.count !== -1) &&
        (e.updateRange = this.updateRange),
      e
    );
  }
}
class Kl extends Et {
  constructor(e, t, i) {
    super(new Uint16Array(e), t, i);
  }
}
class Jl extends Et {
  constructor(e, t, i) {
    super(new Uint32Array(e), t, i);
  }
}
class Gt extends Et {
  constructor(e, t, i) {
    super(new Float32Array(e), t, i);
  }
}
let $h = 0;
const Lt = new je(),
  pr = new He(),
  as = new C(),
  Ct = new Ys(),
  Us = new Ys(),
  Qe = new C();
class Vt extends Ls {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: $h++ }),
      (this.uuid = Ai()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (Wl(e) ? Jl : Kl)(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, i = 0) {
    this.groups.push({ start: e, count: t, materialIndex: i });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const i = this.attributes.normal;
    if (i !== void 0) {
      const r = new Dt().getNormalMatrix(e);
      i.applyNormalMatrix(r), (i.needsUpdate = !0);
    }
    const n = this.attributes.tangent;
    return (
      n !== void 0 && (n.transformDirection(e), (n.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return Lt.makeRotationFromQuaternion(e), this.applyMatrix4(Lt), this;
  }
  rotateX(e) {
    return Lt.makeRotationX(e), this.applyMatrix4(Lt), this;
  }
  rotateY(e) {
    return Lt.makeRotationY(e), this.applyMatrix4(Lt), this;
  }
  rotateZ(e) {
    return Lt.makeRotationZ(e), this.applyMatrix4(Lt), this;
  }
  translate(e, t, i) {
    return Lt.makeTranslation(e, t, i), this.applyMatrix4(Lt), this;
  }
  scale(e, t, i) {
    return Lt.makeScale(e, t, i), this.applyMatrix4(Lt), this;
  }
  lookAt(e) {
    return pr.lookAt(e), pr.updateMatrix(), this.applyMatrix4(pr.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(as).negate(),
      this.translate(as.x, as.y, as.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let i = 0, n = e.length; i < n; i++) {
      const r = e[i];
      t.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new Gt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Ys());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingBox.set(
          new C(-1 / 0, -1 / 0, -1 / 0),
          new C(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let i = 0, n = t.length; i < n; i++) {
          const r = t[i];
          Ct.setFromBufferAttribute(r),
            this.morphTargetsRelative
              ? (Qe.addVectors(this.boundingBox.min, Ct.min),
                this.boundingBox.expandByPoint(Qe),
                Qe.addVectors(this.boundingBox.max, Ct.max),
                this.boundingBox.expandByPoint(Qe))
              : (this.boundingBox.expandByPoint(Ct.min),
                this.boundingBox.expandByPoint(Ct.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new _a());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingSphere.set(new C(), 1 / 0);
      return;
    }
    if (e) {
      const i = this.boundingSphere.center;
      if ((Ct.setFromBufferAttribute(e), t))
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r];
          Us.setFromBufferAttribute(o),
            this.morphTargetsRelative
              ? (Qe.addVectors(Ct.min, Us.min),
                Ct.expandByPoint(Qe),
                Qe.addVectors(Ct.max, Us.max),
                Ct.expandByPoint(Qe))
              : (Ct.expandByPoint(Us.min), Ct.expandByPoint(Us.max));
        }
      Ct.getCenter(i);
      let n = 0;
      for (let r = 0, a = e.count; r < a; r++)
        Qe.fromBufferAttribute(e, r),
          (n = Math.max(n, i.distanceToSquared(Qe)));
      if (t)
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r],
            l = this.morphTargetsRelative;
          for (let c = 0, h = o.count; c < h; c++)
            Qe.fromBufferAttribute(o, c),
              l && (as.fromBufferAttribute(e, c), Qe.add(as)),
              (n = Math.max(n, i.distanceToSquared(Qe)));
        }
      (this.boundingSphere.radius = Math.sqrt(n)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    const i = e.array,
      n = t.position.array,
      r = t.normal.array,
      a = t.uv.array,
      o = n.length / 3;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new Et(new Float32Array(4 * o), 4));
    const l = this.getAttribute("tangent").array,
      c = [],
      h = [];
    for (let k = 0; k < o; k++) (c[k] = new C()), (h[k] = new C());
    const d = new C(),
      u = new C(),
      m = new C(),
      g = new me(),
      p = new me(),
      f = new me(),
      v = new C(),
      w = new C();
    function S(k, B, ee) {
      d.fromArray(n, k * 3),
        u.fromArray(n, B * 3),
        m.fromArray(n, ee * 3),
        g.fromArray(a, k * 2),
        p.fromArray(a, B * 2),
        f.fromArray(a, ee * 2),
        u.sub(d),
        m.sub(d),
        p.sub(g),
        f.sub(g);
      const re = 1 / (p.x * f.y - f.x * p.y);
      !isFinite(re) ||
        (v
          .copy(u)
          .multiplyScalar(f.y)
          .addScaledVector(m, -p.y)
          .multiplyScalar(re),
        w
          .copy(m)
          .multiplyScalar(p.x)
          .addScaledVector(u, -f.x)
          .multiplyScalar(re),
        c[k].add(v),
        c[B].add(v),
        c[ee].add(v),
        h[k].add(w),
        h[B].add(w),
        h[ee].add(w));
    }
    let x = this.groups;
    x.length === 0 && (x = [{ start: 0, count: i.length }]);
    for (let k = 0, B = x.length; k < B; ++k) {
      const ee = x[k],
        re = ee.start,
        I = ee.count;
      for (let q = re, G = re + I; q < G; q += 3)
        S(i[q + 0], i[q + 1], i[q + 2]);
    }
    const A = new C(),
      D = new C(),
      R = new C(),
      b = new C();
    function E(k) {
      R.fromArray(r, k * 3), b.copy(R);
      const B = c[k];
      A.copy(B),
        A.sub(R.multiplyScalar(R.dot(B))).normalize(),
        D.crossVectors(b, B);
      const re = D.dot(h[k]) < 0 ? -1 : 1;
      (l[k * 4] = A.x),
        (l[k * 4 + 1] = A.y),
        (l[k * 4 + 2] = A.z),
        (l[k * 4 + 3] = re);
    }
    for (let k = 0, B = x.length; k < B; ++k) {
      const ee = x[k],
        re = ee.start,
        I = ee.count;
      for (let q = re, G = re + I; q < G; q += 3)
        E(i[q + 0]), E(i[q + 1]), E(i[q + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let i = this.getAttribute("normal");
      if (i === void 0)
        (i = new Et(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", i);
      else for (let u = 0, m = i.count; u < m; u++) i.setXYZ(u, 0, 0, 0);
      const n = new C(),
        r = new C(),
        a = new C(),
        o = new C(),
        l = new C(),
        c = new C(),
        h = new C(),
        d = new C();
      if (e)
        for (let u = 0, m = e.count; u < m; u += 3) {
          const g = e.getX(u + 0),
            p = e.getX(u + 1),
            f = e.getX(u + 2);
          n.fromBufferAttribute(t, g),
            r.fromBufferAttribute(t, p),
            a.fromBufferAttribute(t, f),
            h.subVectors(a, r),
            d.subVectors(n, r),
            h.cross(d),
            o.fromBufferAttribute(i, g),
            l.fromBufferAttribute(i, p),
            c.fromBufferAttribute(i, f),
            o.add(h),
            l.add(h),
            c.add(h),
            i.setXYZ(g, o.x, o.y, o.z),
            i.setXYZ(p, l.x, l.y, l.z),
            i.setXYZ(f, c.x, c.y, c.z);
        }
      else
        for (let u = 0, m = t.count; u < m; u += 3)
          n.fromBufferAttribute(t, u + 0),
            r.fromBufferAttribute(t, u + 1),
            a.fromBufferAttribute(t, u + 2),
            h.subVectors(a, r),
            d.subVectors(n, r),
            h.cross(d),
            i.setXYZ(u + 0, h.x, h.y, h.z),
            i.setXYZ(u + 1, h.x, h.y, h.z),
            i.setXYZ(u + 2, h.x, h.y, h.z);
      this.normalizeNormals(), (i.needsUpdate = !0);
    }
  }
  merge(e, t) {
    if (!(e && e.isBufferGeometry)) {
      console.error(
        "THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",
        e
      );
      return;
    }
    t === void 0 &&
      ((t = 0),
      console.warn(
        "THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."
      ));
    const i = this.attributes;
    for (const n in i) {
      if (e.attributes[n] === void 0) continue;
      const a = i[n].array,
        o = e.attributes[n],
        l = o.array,
        c = o.itemSize * t,
        h = Math.min(l.length, a.length - c);
      for (let d = 0, u = c; d < h; d++, u++) a[u] = l[d];
    }
    return this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, i = e.count; t < i; t++)
      Qe.fromBufferAttribute(e, t),
        Qe.normalize(),
        e.setXYZ(t, Qe.x, Qe.y, Qe.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array,
        h = o.itemSize,
        d = o.normalized,
        u = new c.constructor(l.length * h);
      let m = 0,
        g = 0;
      for (let p = 0, f = l.length; p < f; p++) {
        o.isInterleavedBufferAttribute
          ? (m = l[p] * o.data.stride + o.offset)
          : (m = l[p] * h);
        for (let v = 0; v < h; v++) u[g++] = c[m++];
      }
      return new Et(u, h, d);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new Vt(),
      i = this.index.array,
      n = this.attributes;
    for (const o in n) {
      const l = n[o],
        c = e(l, i);
      t.setAttribute(o, c);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const l = [],
        c = r[o];
      for (let h = 0, d = c.length; h < d; h++) {
        const u = c[h],
          m = e(u, i);
        l.push(m);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const i = this.attributes;
    for (const l in i) {
      const c = i[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const n = {};
    let r = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l],
        h = [];
      for (let d = 0, u = c.length; d < u; d++) {
        const m = c[d];
        h.push(m.toJSON(e.data));
      }
      h.length > 0 && ((n[l] = h), (r = !0));
    }
    r &&
      ((e.data.morphAttributes = n),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return (
      o !== null &&
        (e.data.boundingSphere = {
          center: o.center.toArray(),
          radius: o.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const i = e.index;
    i !== null && this.setIndex(i.clone(t));
    const n = e.attributes;
    for (const c in n) {
      const h = n[c];
      this.setAttribute(c, h.clone(t));
    }
    const r = e.morphAttributes;
    for (const c in r) {
      const h = [],
        d = r[c];
      for (let u = 0, m = d.length; u < m; u++) h.push(d[u].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, h = a.length; c < h; c++) {
      const d = a[c];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return (
      l !== null && (this.boundingSphere = l.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      e.parameters !== void 0 &&
        (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Co = new je(),
  os = new Yl(),
  mr = new _a(),
  vi = new C(),
  _i = new C(),
  xi = new C(),
  gr = new C(),
  vr = new C(),
  _r = new C(),
  gn = new C(),
  vn = new C(),
  _n = new C(),
  xn = new me(),
  yn = new me(),
  bn = new me(),
  xr = new C(),
  wn = new C();
class rt extends He {
  constructor(e = new Vt(), t = new Zl()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      i = Object.keys(t);
    if (i.length > 0) {
      const n = t[i[0]];
      if (n !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let r = 0, a = n.length; r < a; r++) {
          const o = n[r].name || String(r);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = r);
        }
      }
    }
  }
  raycast(e, t) {
    const i = this.geometry,
      n = this.material,
      r = this.matrixWorld;
    if (
      n === void 0 ||
      (i.boundingSphere === null && i.computeBoundingSphere(),
      mr.copy(i.boundingSphere),
      mr.applyMatrix4(r),
      e.ray.intersectsSphere(mr) === !1) ||
      (Co.copy(r).invert(),
      os.copy(e.ray).applyMatrix4(Co),
      i.boundingBox !== null && os.intersectsBox(i.boundingBox) === !1)
    )
      return;
    let a;
    const o = i.index,
      l = i.attributes.position,
      c = i.morphAttributes.position,
      h = i.morphTargetsRelative,
      d = i.attributes.uv,
      u = i.attributes.uv2,
      m = i.groups,
      g = i.drawRange;
    if (o !== null)
      if (Array.isArray(n))
        for (let p = 0, f = m.length; p < f; p++) {
          const v = m[p],
            w = n[v.materialIndex],
            S = Math.max(v.start, g.start),
            x = Math.min(
              o.count,
              Math.min(v.start + v.count, g.start + g.count)
            );
          for (let A = S, D = x; A < D; A += 3) {
            const R = o.getX(A),
              b = o.getX(A + 1),
              E = o.getX(A + 2);
            (a = Sn(this, w, e, os, l, c, h, d, u, R, b, E)),
              a &&
                ((a.faceIndex = Math.floor(A / 3)),
                (a.face.materialIndex = v.materialIndex),
                t.push(a));
          }
        }
      else {
        const p = Math.max(0, g.start),
          f = Math.min(o.count, g.start + g.count);
        for (let v = p, w = f; v < w; v += 3) {
          const S = o.getX(v),
            x = o.getX(v + 1),
            A = o.getX(v + 2);
          (a = Sn(this, n, e, os, l, c, h, d, u, S, x, A)),
            a && ((a.faceIndex = Math.floor(v / 3)), t.push(a));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(n))
        for (let p = 0, f = m.length; p < f; p++) {
          const v = m[p],
            w = n[v.materialIndex],
            S = Math.max(v.start, g.start),
            x = Math.min(
              l.count,
              Math.min(v.start + v.count, g.start + g.count)
            );
          for (let A = S, D = x; A < D; A += 3) {
            const R = A,
              b = A + 1,
              E = A + 2;
            (a = Sn(this, w, e, os, l, c, h, d, u, R, b, E)),
              a &&
                ((a.faceIndex = Math.floor(A / 3)),
                (a.face.materialIndex = v.materialIndex),
                t.push(a));
          }
        }
      else {
        const p = Math.max(0, g.start),
          f = Math.min(l.count, g.start + g.count);
        for (let v = p, w = f; v < w; v += 3) {
          const S = v,
            x = v + 1,
            A = v + 2;
          (a = Sn(this, n, e, os, l, c, h, d, u, S, x, A)),
            a && ((a.faceIndex = Math.floor(v / 3)), t.push(a));
        }
      }
  }
}
function Yh(s, e, t, i, n, r, a, o) {
  let l;
  if (
    (e.side === Pt
      ? (l = i.intersectTriangle(a, r, n, !0, o))
      : (l = i.intersectTriangle(n, r, a, e.side !== Wi, o)),
    l === null)
  )
    return null;
  wn.copy(o), wn.applyMatrix4(s.matrixWorld);
  const c = t.ray.origin.distanceTo(wn);
  return c < t.near || c > t.far
    ? null
    : { distance: c, point: wn.clone(), object: s };
}
function Sn(s, e, t, i, n, r, a, o, l, c, h, d) {
  vi.fromBufferAttribute(n, c),
    _i.fromBufferAttribute(n, h),
    xi.fromBufferAttribute(n, d);
  const u = s.morphTargetInfluences;
  if (r && u) {
    gn.set(0, 0, 0), vn.set(0, 0, 0), _n.set(0, 0, 0);
    for (let g = 0, p = r.length; g < p; g++) {
      const f = u[g],
        v = r[g];
      f !== 0 &&
        (gr.fromBufferAttribute(v, c),
        vr.fromBufferAttribute(v, h),
        _r.fromBufferAttribute(v, d),
        a
          ? (gn.addScaledVector(gr, f),
            vn.addScaledVector(vr, f),
            _n.addScaledVector(_r, f))
          : (gn.addScaledVector(gr.sub(vi), f),
            vn.addScaledVector(vr.sub(_i), f),
            _n.addScaledVector(_r.sub(xi), f)));
    }
    vi.add(gn), _i.add(vn), xi.add(_n);
  }
  s.isSkinnedMesh &&
    (s.boneTransform(c, vi), s.boneTransform(h, _i), s.boneTransform(d, xi));
  const m = Yh(s, e, t, i, vi, _i, xi, xr);
  if (m) {
    o &&
      (xn.fromBufferAttribute(o, c),
      yn.fromBufferAttribute(o, h),
      bn.fromBufferAttribute(o, d),
      (m.uv = li.getUV(xr, vi, _i, xi, xn, yn, bn, new me()))),
      l &&
        (xn.fromBufferAttribute(l, c),
        yn.fromBufferAttribute(l, h),
        bn.fromBufferAttribute(l, d),
        (m.uv2 = li.getUV(xr, vi, _i, xi, xn, yn, bn, new me())));
    const g = { a: c, b: h, c: d, normal: new C(), materialIndex: 0 };
    li.getNormal(vi, _i, xi, g.normal), (m.face = g);
  }
  return m;
}
class Zs extends Vt {
  constructor(e = 1, t = 1, i = 1, n = 1, r = 1, a = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: i,
        widthSegments: n,
        heightSegments: r,
        depthSegments: a,
      });
    const o = this;
    (n = Math.floor(n)), (r = Math.floor(r)), (a = Math.floor(a));
    const l = [],
      c = [],
      h = [],
      d = [];
    let u = 0,
      m = 0;
    g("z", "y", "x", -1, -1, i, t, e, a, r, 0),
      g("z", "y", "x", 1, -1, i, t, -e, a, r, 1),
      g("x", "z", "y", 1, 1, e, i, t, n, a, 2),
      g("x", "z", "y", 1, -1, e, i, -t, n, a, 3),
      g("x", "y", "z", 1, -1, e, t, i, n, r, 4),
      g("x", "y", "z", -1, -1, e, t, -i, n, r, 5),
      this.setIndex(l),
      this.setAttribute("position", new Gt(c, 3)),
      this.setAttribute("normal", new Gt(h, 3)),
      this.setAttribute("uv", new Gt(d, 2));
    function g(p, f, v, w, S, x, A, D, R, b, E) {
      const k = x / R,
        B = A / b,
        ee = x / 2,
        re = A / 2,
        I = D / 2,
        q = R + 1,
        G = b + 1;
      let X = 0,
        j = 0;
      const U = new C();
      for (let V = 0; V < G; V++) {
        const Q = V * B - re;
        for (let $ = 0; $ < q; $++) {
          const se = $ * k - ee;
          (U[p] = se * w),
            (U[f] = Q * S),
            (U[v] = I),
            c.push(U.x, U.y, U.z),
            (U[p] = 0),
            (U[f] = 0),
            (U[v] = D > 0 ? 1 : -1),
            h.push(U.x, U.y, U.z),
            d.push($ / R),
            d.push(1 - V / b),
            (X += 1);
        }
      }
      for (let V = 0; V < b; V++)
        for (let Q = 0; Q < R; Q++) {
          const $ = u + Q + q * V,
            se = u + Q + q * (V + 1),
            he = u + (Q + 1) + q * (V + 1),
            Y = u + (Q + 1) + q * V;
          l.push($, se, Y), l.push(se, he, Y), (j += 6);
        }
      o.addGroup(m, j, E), (m += j), (u += X);
    }
  }
  static fromJSON(e) {
    return new Zs(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function Ts(s) {
  const e = {};
  for (const t in s) {
    e[t] = {};
    for (const i in s[t]) {
      const n = s[t][i];
      n &&
      (n.isColor ||
        n.isMatrix3 ||
        n.isMatrix4 ||
        n.isVector2 ||
        n.isVector3 ||
        n.isVector4 ||
        n.isTexture ||
        n.isQuaternion)
        ? (e[t][i] = n.clone())
        : Array.isArray(n)
        ? (e[t][i] = n.slice())
        : (e[t][i] = n);
    }
  }
  return e;
}
function lt(s) {
  const e = {};
  for (let t = 0; t < s.length; t++) {
    const i = Ts(s[t]);
    for (const n in i) e[n] = i[n];
  }
  return e;
}
const $i = { clone: Ts, merge: lt };
var Zh =
    "void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",
  Kh = "void main(){gl_FragColor=vec4(1.0,0.0,0.0,1.0);}";
class gt extends On {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.vertexShader = Zh),
      (this.fragmentShader = Kh),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 &&
        (e.attributes !== void 0 &&
          console.error(
            "THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."
          ),
        this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = Ts(e.uniforms)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const n in this.uniforms) {
      const a = this.uniforms[n].value;
      a && a.isTexture
        ? (t.uniforms[n] = { type: "t", value: a.toJSON(e).uuid })
        : a && a.isColor
        ? (t.uniforms[n] = { type: "c", value: a.getHex() })
        : a && a.isVector2
        ? (t.uniforms[n] = { type: "v2", value: a.toArray() })
        : a && a.isVector3
        ? (t.uniforms[n] = { type: "v3", value: a.toArray() })
        : a && a.isVector4
        ? (t.uniforms[n] = { type: "v4", value: a.toArray() })
        : a && a.isMatrix3
        ? (t.uniforms[n] = { type: "m3", value: a.toArray() })
        : a && a.isMatrix4
        ? (t.uniforms[n] = { type: "m4", value: a.toArray() })
        : (t.uniforms[n] = { value: a });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader);
    const i = {};
    for (const n in this.extensions) this.extensions[n] === !0 && (i[n] = !0);
    return Object.keys(i).length > 0 && (t.extensions = i), t;
  }
}
class Ql extends He {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new je()),
      (this.projectionMatrix = new je()),
      (this.projectionMatrixInverse = new je());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      this
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class wt extends Ql {
  constructor(e = 50, t = 1, i = 0.1, n = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = i),
      (this.far = n),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = fo * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Jn * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return fo * 2 * Math.atan(Math.tan(Jn * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, i, n, r, a) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = i),
      (this.view.offsetY = n),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(Jn * 0.5 * this.fov)) / this.zoom,
      i = 2 * t,
      n = this.aspect * i,
      r = -0.5 * n;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth,
        c = a.fullHeight;
      (r += (a.offsetX * n) / l),
        (t -= (a.offsetY * i) / c),
        (n *= a.width / l),
        (i *= a.height / c);
    }
    const o = this.filmOffset;
    o !== 0 && (r += (e * o) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(r, r + n, t, t - i, e, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const ls = 90,
  cs = 1;
class Jh extends He {
  constructor(e, t, i) {
    if (
      (super(), (this.type = "CubeCamera"), i.isWebGLCubeRenderTarget !== !0)
    ) {
      console.error(
        "THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter."
      );
      return;
    }
    this.renderTarget = i;
    const n = new wt(ls, cs, e, t);
    (n.layers = this.layers),
      n.up.set(0, -1, 0),
      n.lookAt(new C(1, 0, 0)),
      this.add(n);
    const r = new wt(ls, cs, e, t);
    (r.layers = this.layers),
      r.up.set(0, -1, 0),
      r.lookAt(new C(-1, 0, 0)),
      this.add(r);
    const a = new wt(ls, cs, e, t);
    (a.layers = this.layers),
      a.up.set(0, 0, 1),
      a.lookAt(new C(0, 1, 0)),
      this.add(a);
    const o = new wt(ls, cs, e, t);
    (o.layers = this.layers),
      o.up.set(0, 0, -1),
      o.lookAt(new C(0, -1, 0)),
      this.add(o);
    const l = new wt(ls, cs, e, t);
    (l.layers = this.layers),
      l.up.set(0, -1, 0),
      l.lookAt(new C(0, 0, 1)),
      this.add(l);
    const c = new wt(ls, cs, e, t);
    (c.layers = this.layers),
      c.up.set(0, -1, 0),
      c.lookAt(new C(0, 0, -1)),
      this.add(c);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const i = this.renderTarget,
      [n, r, a, o, l, c] = this.children,
      h = e.getRenderTarget(),
      d = e.toneMapping,
      u = e.xr.enabled;
    (e.toneMapping = ci), (e.xr.enabled = !1);
    const m = i.texture.generateMipmaps;
    (i.texture.generateMipmaps = !1),
      e.setRenderTarget(i, 0),
      e.render(t, n),
      e.setRenderTarget(i, 1),
      e.render(t, r),
      e.setRenderTarget(i, 2),
      e.render(t, a),
      e.setRenderTarget(i, 3),
      e.render(t, o),
      e.setRenderTarget(i, 4),
      e.render(t, l),
      (i.texture.generateMipmaps = m),
      e.setRenderTarget(i, 5),
      e.render(t, c),
      e.setRenderTarget(h),
      (e.toneMapping = d),
      (e.xr.enabled = u),
      (i.texture.needsPMREMUpdate = !0);
  }
}
class ec extends Rt {
  constructor(e, t, i, n, r, a, o, l, c, h) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : Ms),
      super(e, t, i, n, r, a, o, l, c, h),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Qh extends Ei {
  constructor(e, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const i = { width: e, height: e, depth: 1 },
      n = [i, i, i, i, i, i];
    (this.texture = new ec(
      n,
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : bt);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.encoding = t.encoding),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const i = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `varying vec3 vWorldDirection;vec3 transformDirection(in vec3 dir,in mat4 matrix){return normalize((matrix*vec4(dir,0.0)).xyz);}void main(){vWorldDirection=transformDirection(position,modelMatrix);
#include <begin_vertex>
#include <project_vertex>
}`,
        fragmentShader: `uniform sampler2D tEquirect;varying vec3 vWorldDirection;
#include <common>
void main(){vec3 direction=normalize(vWorldDirection);vec2 sampleUV=equirectUv(direction);gl_FragColor=texture2D(tEquirect,sampleUV);}`,
      },
      n = new Zs(5, 5, 5),
      r = new gt({
        name: "CubemapFromEquirect",
        uniforms: Ts(i.uniforms),
        vertexShader: i.vertexShader,
        fragmentShader: i.fragmentShader,
        side: Pt,
        blending: Mi,
      });
    r.uniforms.tEquirect.value = t;
    const a = new rt(n, r),
      o = t.minFilter;
    return (
      t.minFilter === kn && (t.minFilter = bt),
      new Jh(1, 10, this).update(e, a),
      (t.minFilter = o),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t, i, n) {
    const r = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, i, n);
    e.setRenderTarget(r);
  }
}
const yr = new C(),
  eu = new C(),
  tu = new Dt();
class wi {
  constructor(e = new C(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, i, n) {
    return this.normal.set(e, t, i), (this.constant = n), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, i) {
    const n = yr.subVectors(i, t).cross(eu.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(n, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  }
  intersectLine(e, t) {
    const i = e.delta(yr),
      n = this.normal.dot(i);
    if (n === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / n;
    return r < 0 || r > 1 ? null : t.copy(i).multiplyScalar(r).add(e.start);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      i = this.distanceToPoint(e.end);
    return (t < 0 && i > 0) || (i < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const i = t || tu.getNormalMatrix(e),
      n = this.coplanarPoint(yr).applyMatrix4(e),
      r = this.normal.applyMatrix3(i).normalize();
    return (this.constant = -n.dot(r)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const hs = new _a(),
  Mn = new C();
class ya {
  constructor(
    e = new wi(),
    t = new wi(),
    i = new wi(),
    n = new wi(),
    r = new wi(),
    a = new wi()
  ) {
    this.planes = [e, t, i, n, r, a];
  }
  set(e, t, i, n, r, a) {
    const o = this.planes;
    return (
      o[0].copy(e),
      o[1].copy(t),
      o[2].copy(i),
      o[3].copy(n),
      o[4].copy(r),
      o[5].copy(a),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) t[i].copy(e.planes[i]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes,
      i = e.elements,
      n = i[0],
      r = i[1],
      a = i[2],
      o = i[3],
      l = i[4],
      c = i[5],
      h = i[6],
      d = i[7],
      u = i[8],
      m = i[9],
      g = i[10],
      p = i[11],
      f = i[12],
      v = i[13],
      w = i[14],
      S = i[15];
    return (
      t[0].setComponents(o - n, d - l, p - u, S - f).normalize(),
      t[1].setComponents(o + n, d + l, p + u, S + f).normalize(),
      t[2].setComponents(o + r, d + c, p + m, S + v).normalize(),
      t[3].setComponents(o - r, d - c, p - m, S - v).normalize(),
      t[4].setComponents(o - a, d - h, p - g, S - w).normalize(),
      t[5].setComponents(o + a, d + h, p + g, S + w).normalize(),
      this
    );
  }
  intersectsObject(e) {
    const t = e.geometry;
    return (
      t.boundingSphere === null && t.computeBoundingSphere(),
      hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
      this.intersectsSphere(hs)
    );
  }
  intersectsSprite(e) {
    return (
      hs.center.set(0, 0, 0),
      (hs.radius = 0.7071067811865476),
      hs.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(hs)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      i = e.center,
      n = -e.radius;
    for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(i) < n) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) {
      const n = t[i];
      if (
        ((Mn.x = n.normal.x > 0 ? e.max.x : e.min.x),
        (Mn.y = n.normal.y > 0 ? e.max.y : e.min.y),
        (Mn.z = n.normal.z > 0 ? e.max.z : e.min.z),
        n.distanceToPoint(Mn) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) if (t[i].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function tc() {
  let s = null,
    e = !1,
    t = null,
    i = null;
  function n(r, a) {
    t(r, a), (i = s.requestAnimationFrame(n));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((i = s.requestAnimationFrame(n)), (e = !0));
    },
    stop: function () {
      s.cancelAnimationFrame(i), (e = !1);
    },
    setAnimationLoop: function (r) {
      t = r;
    },
    setContext: function (r) {
      s = r;
    },
  };
}
function iu(s, e) {
  const t = e.isWebGL2,
    i = new WeakMap();
  function n(c, h) {
    const d = c.array,
      u = c.usage,
      m = s.createBuffer();
    s.bindBuffer(h, m), s.bufferData(h, d, u), c.onUploadCallback();
    let g;
    if (d instanceof Float32Array) g = 5126;
    else if (d instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t) g = 5131;
        else
          throw new Error(
            "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
          );
      else g = 5123;
    else if (d instanceof Int16Array) g = 5122;
    else if (d instanceof Uint32Array) g = 5125;
    else if (d instanceof Int32Array) g = 5124;
    else if (d instanceof Int8Array) g = 5120;
    else if (d instanceof Uint8Array) g = 5121;
    else if (d instanceof Uint8ClampedArray) g = 5121;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + d
      );
    return {
      buffer: m,
      type: g,
      bytesPerElement: d.BYTES_PER_ELEMENT,
      version: c.version,
    };
  }
  function r(c, h, d) {
    const u = h.array,
      m = h.updateRange;
    s.bindBuffer(d, c),
      m.count === -1
        ? s.bufferSubData(d, 0, u)
        : (t
            ? s.bufferSubData(
                d,
                m.offset * u.BYTES_PER_ELEMENT,
                u,
                m.offset,
                m.count
              )
            : s.bufferSubData(
                d,
                m.offset * u.BYTES_PER_ELEMENT,
                u.subarray(m.offset, m.offset + m.count)
              ),
          (m.count = -1));
  }
  function a(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), i.get(c);
  }
  function o(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const h = i.get(c);
    h && (s.deleteBuffer(h.buffer), i.delete(c));
  }
  function l(c, h) {
    if (c.isGLBufferAttribute) {
      const u = i.get(c);
      (!u || u.version < c.version) &&
        i.set(c, {
          buffer: c.buffer,
          type: c.type,
          bytesPerElement: c.elementSize,
          version: c.version,
        });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const d = i.get(c);
    d === void 0
      ? i.set(c, n(c, h))
      : d.version < c.version && (r(d.buffer, c, h), (d.version = c.version));
  }
  return { get: a, remove: o, update: l };
}
class Ks extends Vt {
  constructor(e = 1, t = 1, i = 1, n = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: i,
        heightSegments: n,
      });
    const r = e / 2,
      a = t / 2,
      o = Math.floor(i),
      l = Math.floor(n),
      c = o + 1,
      h = l + 1,
      d = e / o,
      u = t / l,
      m = [],
      g = [],
      p = [],
      f = [];
    for (let v = 0; v < h; v++) {
      const w = v * u - a;
      for (let S = 0; S < c; S++) {
        const x = S * d - r;
        g.push(x, -w, 0), p.push(0, 0, 1), f.push(S / o), f.push(1 - v / l);
      }
    }
    for (let v = 0; v < l; v++)
      for (let w = 0; w < o; w++) {
        const S = w + c * v,
          x = w + c * (v + 1),
          A = w + 1 + c * (v + 1),
          D = w + 1 + c * v;
        m.push(S, x, D), m.push(x, A, D);
      }
    this.setIndex(m),
      this.setAttribute("position", new Gt(g, 3)),
      this.setAttribute("normal", new Gt(p, 3)),
      this.setAttribute("uv", new Gt(f, 2));
  }
  static fromJSON(e) {
    return new Ks(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var su = `#ifdef USE_ALPHAMAP
diffuseColor.a*=texture2D(alphaMap,vUv).g;
#endif`,
  nu = `#ifdef USE_ALPHAMAP
uniform sampler2D alphaMap;
#endif`,
  ru = `#ifdef USE_ALPHATEST
if(diffuseColor.a<alphaTest)discard;
#endif`,
  au = `#ifdef USE_ALPHATEST
uniform float alphaTest;
#endif`,
  ou = `#ifdef USE_AOMAP
float ambientOcclusion=(texture2D(aoMap,vUv2).r-1.0)*aoMapIntensity+1.0;reflectedLight.indirectDiffuse*=ambientOcclusion;
#if defined(USE_ENVMAP)&&defined(STANDARD)
float dotNV=saturate(dot(geometry.normal,geometry.viewDir));reflectedLight.indirectSpecular*=computeSpecularOcclusion(dotNV,ambientOcclusion,material.roughness);
#endif
#endif`,
  lu = `#ifdef USE_AOMAP
uniform sampler2D aoMap;uniform float aoMapIntensity;
#endif`,
  cu = "vec3 transformed=vec3(position);",
  hu = `vec3 objectNormal=vec3(normal);
#ifdef USE_TANGENT
vec3 objectTangent=vec3(tangent.xyz);
#endif`,
  uu = `vec3 BRDF_Lambert(const in vec3 diffuseColor){return RECIPROCAL_PI*diffuseColor;}vec3 F_Schlick(const in vec3 f0,const in float f90,const in float dotVH){float fresnel=exp2((-5.55473*dotVH-6.98316)*dotVH);return f0*(1.0-fresnel)+(f90*fresnel);}float F_Schlick(const in float f0,const in float f90,const in float dotVH){float fresnel=exp2((-5.55473*dotVH-6.98316)*dotVH);return f0*(1.0-fresnel)+(f90*fresnel);}vec3 Schlick_to_F0(const in vec3 f,const in float f90,const in float dotVH){float x=clamp(1.0-dotVH,0.0,1.0);float x2=x*x;float x5=clamp(x*x2*x2,0.0,0.9999);return(f-vec3(f90)*x5)/(1.0-x5);}float V_GGX_SmithCorrelated(const in float alpha,const in float dotNL,const in float dotNV){float a2=pow2(alpha);float gv=dotNL*sqrt(a2+(1.0-a2)*pow2(dotNV));float gl=dotNV*sqrt(a2+(1.0-a2)*pow2(dotNL));return 0.5/max(gv+gl,EPSILON);}float D_GGX(const in float alpha,const in float dotNH){float a2=pow2(alpha);float denom=pow2(dotNH)*(a2-1.0)+1.0;return RECIPROCAL_PI*a2/pow2(denom);}vec3 BRDF_GGX(const in vec3 lightDir,const in vec3 viewDir,const in vec3 normal,const in vec3 f0,const in float f90,const in float roughness){float alpha=pow2(roughness);vec3 halfDir=normalize(lightDir+viewDir);float dotNL=saturate(dot(normal,lightDir));float dotNV=saturate(dot(normal,viewDir));float dotNH=saturate(dot(normal,halfDir));float dotVH=saturate(dot(viewDir,halfDir));vec3 F=F_Schlick(f0,f90,dotVH);float V=V_GGX_SmithCorrelated(alpha,dotNL,dotNV);float D=D_GGX(alpha,dotNH);return F*(V*D);}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence(const in vec3 lightDir,const in vec3 viewDir,const in vec3 normal,const in vec3 f0,const in float f90,const in float iridescence,const in vec3 iridescenceFresnel,const in float roughness){float alpha=pow2(roughness);vec3 halfDir=normalize(lightDir+viewDir);float dotNL=saturate(dot(normal,lightDir));float dotNV=saturate(dot(normal,viewDir));float dotNH=saturate(dot(normal,halfDir));float dotVH=saturate(dot(viewDir,halfDir));vec3 F=mix(F_Schlick(f0,f90,dotVH),iridescenceFresnel,iridescence);float V=V_GGX_SmithCorrelated(alpha,dotNL,dotNV);float D=D_GGX(alpha,dotNH);return F*(V*D);}
#endif
vec2 LTC_Uv(const in vec3 N,const in vec3 V,const in float roughness){const float LUT_SIZE=64.0;const float LUT_SCALE=(LUT_SIZE-1.0)/LUT_SIZE;const float LUT_BIAS=0.5/LUT_SIZE;float dotNV=saturate(dot(N,V));vec2 uv=vec2(roughness,sqrt(1.0-dotNV));uv=uv*LUT_SCALE+LUT_BIAS;return uv;}float LTC_ClippedSphereFormFactor(const in vec3 f){float l=length(f);return max((l*l+f.z)/(l+1.0),0.0);}vec3 LTC_EdgeVectorFormFactor(const in vec3 v1,const in vec3 v2){float x=dot(v1,v2);float y=abs(x);float a=0.8543985+(0.4965155+0.0145206*y)*y;float b=3.4175940+(4.1616724+y)*y;float v=a/b;float theta_sintheta=(x>0.0)?v:0.5*inversesqrt(max(1.0-x*x,1e-7))-v;return cross(v1,v2)*theta_sintheta;}vec3 LTC_Evaluate(const in vec3 N,const in vec3 V,const in vec3 P,const in mat3 mInv,const in vec3 rectCoords[4]){vec3 v1=rectCoords[1]-rectCoords[0];vec3 v2=rectCoords[3]-rectCoords[0];vec3 lightNormal=cross(v1,v2);if(dot(lightNormal,P-rectCoords[0])<0.0)return vec3(0.0);vec3 T1,T2;T1=normalize(V-N*dot(V,N));T2=-cross(N,T1);mat3 mat=mInv*transposeMat3(mat3(T1,T2,N));vec3 coords[4];coords[0]=mat*(rectCoords[0]-P);coords[1]=mat*(rectCoords[1]-P);coords[2]=mat*(rectCoords[2]-P);coords[3]=mat*(rectCoords[3]-P);coords[0]=normalize(coords[0]);coords[1]=normalize(coords[1]);coords[2]=normalize(coords[2]);coords[3]=normalize(coords[3]);vec3 vectorFormFactor=vec3(0.0);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[0],coords[1]);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[1],coords[2]);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[2],coords[3]);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[3],coords[0]);float result=LTC_ClippedSphereFormFactor(vectorFormFactor);return vec3(result);}float G_BlinnPhong_Implicit(){return 0.25;}float D_BlinnPhong(const in float shininess,const in float dotNH){return RECIPROCAL_PI*(shininess*0.5+1.0)*pow(dotNH,shininess);}vec3 BRDF_BlinnPhong(const in vec3 lightDir,const in vec3 viewDir,const in vec3 normal,const in vec3 specularColor,const in float shininess){vec3 halfDir=normalize(lightDir+viewDir);float dotNH=saturate(dot(normal,halfDir));float dotVH=saturate(dot(viewDir,halfDir));vec3 F=F_Schlick(specularColor,1.0,dotVH);float G=G_BlinnPhong_Implicit();float D=D_BlinnPhong(shininess,dotNH);return F*(G*D);}
#if defined(USE_SHEEN)
float D_Charlie(float roughness,float dotNH){float alpha=pow2(roughness);float invAlpha=1.0/alpha;float cos2h=dotNH*dotNH;float sin2h=max(1.0-cos2h,0.0078125);return(2.0+invAlpha)*pow(sin2h,invAlpha*0.5)/(2.0*PI);}float V_Neubelt(float dotNV,float dotNL){return saturate(1.0/(4.0*(dotNL+dotNV-dotNL*dotNV)));}vec3 BRDF_Sheen(const in vec3 lightDir,const in vec3 viewDir,const in vec3 normal,vec3 sheenColor,const in float sheenRoughness){vec3 halfDir=normalize(lightDir+viewDir);float dotNL=saturate(dot(normal,lightDir));float dotNV=saturate(dot(normal,viewDir));float dotNH=saturate(dot(normal,halfDir));float D=D_Charlie(sheenRoughness,dotNH);float V=V_Neubelt(dotNV,dotNL);return sheenColor*(D*V);}
#endif`,
  du = `#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709=mat3(3.2404542,-0.9692660,0.0556434,-1.5371385,1.8760108,-0.2040259,-0.4985314,0.0415560,1.0572252);vec3 Fresnel0ToIor(vec3 fresnel0){vec3 sqrtF0=sqrt(fresnel0);return(vec3(1.0)+sqrtF0)/(vec3(1.0)-sqrtF0);}vec3 IorToFresnel0(vec3 transmittedIor,float incidentIor){return pow2((transmittedIor-vec3(incidentIor))/(transmittedIor+vec3(incidentIor)));}float IorToFresnel0(float transmittedIor,float incidentIor){return pow2((transmittedIor-incidentIor)/(transmittedIor+incidentIor));}vec3 evalSensitivity(float OPD,vec3 shift){float phase=2.0*PI*OPD*1.0e-9;vec3 val=vec3(5.4856e-13,4.4201e-13,5.2481e-13);vec3 pos=vec3(1.6810e+06,1.7953e+06,2.2084e+06);vec3 var=vec3(4.3278e+09,9.3046e+09,6.6121e+09);vec3 xyz=val*sqrt(2.0*PI*var)*cos(pos*phase+shift)*exp(-pow2(phase)*var);xyz.x+=9.7470e-14*sqrt(2.0*PI*4.5282e+09)*cos(2.2399e+06*phase+shift[0])*exp(-4.5282e+09*pow2(phase));xyz/=1.0685e-7;vec3 srgb=XYZ_TO_REC709*xyz;return srgb;}vec3 evalIridescence(float outsideIOR,float eta2,float cosTheta1,float thinFilmThickness,vec3 baseF0){vec3 I;float iridescenceIOR=mix(outsideIOR,eta2,smoothstep(0.0,0.03,thinFilmThickness));float sinTheta2Sq=pow2(outsideIOR/iridescenceIOR)*(1.0-pow2(cosTheta1));float cosTheta2Sq=1.0-sinTheta2Sq;if(cosTheta2Sq<0.0){return vec3(1.0);}float cosTheta2=sqrt(cosTheta2Sq);float R0=IorToFresnel0(iridescenceIOR,outsideIOR);float R12=F_Schlick(R0,1.0,cosTheta1);float R21=R12;float T121=1.0-R12;float phi12=0.0;if(iridescenceIOR<outsideIOR)phi12=PI;float phi21=PI-phi12;vec3 baseIOR=Fresnel0ToIor(clamp(baseF0,0.0,0.9999));vec3 R1=IorToFresnel0(baseIOR,iridescenceIOR);vec3 R23=F_Schlick(R1,1.0,cosTheta2);vec3 phi23=vec3(0.0);if(baseIOR[0]<iridescenceIOR)phi23[0]=PI;if(baseIOR[1]<iridescenceIOR)phi23[1]=PI;if(baseIOR[2]<iridescenceIOR)phi23[2]=PI;float OPD=2.0*iridescenceIOR*thinFilmThickness*cosTheta2;vec3 phi=vec3(phi21)+phi23;vec3 R123=clamp(R12*R23,1e-5,0.9999);vec3 r123=sqrt(R123);vec3 Rs=pow2(T121)*R23/(vec3(1.0)-R123);vec3 C0=R12+Rs;I=C0;vec3 Cm=Rs-T121;for(int m=1;m<=2;++m){Cm*=r123;vec3 Sm=2.0*evalSensitivity(float(m)*OPD,float(m)*phi);I+=Cm*Sm;}return max(I,vec3(0.0));}
#endif`,
  fu = `#ifdef USE_BUMPMAP
uniform sampler2D bumpMap;uniform float bumpScale;vec2 dHdxy_fwd(){vec2 dSTdx=dFdx(vUv);vec2 dSTdy=dFdy(vUv);float Hll=bumpScale*texture2D(bumpMap,vUv).x;float dBx=bumpScale*texture2D(bumpMap,vUv+dSTdx).x-Hll;float dBy=bumpScale*texture2D(bumpMap,vUv+dSTdy).x-Hll;return vec2(dBx,dBy);}vec3 perturbNormalArb(vec3 surf_pos,vec3 surf_norm,vec2 dHdxy,float faceDirection){vec3 vSigmaX=vec3(dFdx(surf_pos.x),dFdx(surf_pos.y),dFdx(surf_pos.z));vec3 vSigmaY=vec3(dFdy(surf_pos.x),dFdy(surf_pos.y),dFdy(surf_pos.z));vec3 vN=surf_norm;vec3 R1=cross(vSigmaY,vN);vec3 R2=cross(vN,vSigmaX);float fDet=dot(vSigmaX,R1)*faceDirection;vec3 vGrad=sign(fDet)*(dHdxy.x*R1+dHdxy.y*R2);return normalize(abs(fDet)*surf_norm-vGrad);}
#endif`,
  pu = `#if NUM_CLIPPING_PLANES>0
vec4 plane;
#pragma unroll_loop_start
for(int i=0;i<UNION_CLIPPING_PLANES;i++){plane=clippingPlanes[i];if(dot(vClipPosition,plane.xyz)>plane.w)discard;}
#pragma unroll_loop_end
#if UNION_CLIPPING_PLANES<NUM_CLIPPING_PLANES
bool clipped=true;
#pragma unroll_loop_start
for(int i=UNION_CLIPPING_PLANES;i<NUM_CLIPPING_PLANES;i++){plane=clippingPlanes[i];clipped=(dot(vClipPosition,plane.xyz)>plane.w)&&clipped;}
#pragma unroll_loop_end
if(clipped)discard;
#endif
#endif`,
  mu = `#if NUM_CLIPPING_PLANES>0
varying vec3 vClipPosition;uniform vec4 clippingPlanes[NUM_CLIPPING_PLANES];
#endif`,
  gu = `#if NUM_CLIPPING_PLANES>0
varying vec3 vClipPosition;
#endif`,
  vu = `#if NUM_CLIPPING_PLANES>0
vClipPosition=-mvPosition.xyz;
#endif`,
  _u = `#if defined(USE_COLOR_ALPHA)
diffuseColor*=vColor;
#elif defined(USE_COLOR)
diffuseColor.rgb*=vColor;
#endif`,
  xu = `#if defined(USE_COLOR_ALPHA)
varying vec4 vColor;
#elif defined(USE_COLOR)
varying vec3 vColor;
#endif`,
  yu = `#if defined(USE_COLOR_ALPHA)
varying vec4 vColor;
#elif defined(USE_COLOR)||defined(USE_INSTANCING_COLOR)
varying vec3 vColor;
#endif`,
  bu = `#if defined(USE_COLOR_ALPHA)
vColor=vec4(1.0);
#elif defined(USE_COLOR)||defined(USE_INSTANCING_COLOR)
vColor=vec3(1.0);
#endif
#ifdef USE_COLOR
vColor*=color;
#endif
#ifdef USE_INSTANCING_COLOR
vColor.xyz*=instanceColor.xyz;
#endif`,
  wu = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a)clamp(a,0.0,1.0)
#endif
#define whiteComplement(a)(1.0-saturate(a))
float pow2(const in float x){return x*x;}vec3 pow2(const in vec3 x){return x*x;}float pow3(const in float x){return x*x*x;}float pow4(const in float x){float x2=x*x;return x2*x2;}float max3(const in vec3 v){return max(max(v.x,v.y),v.z);}float average(const in vec3 color){return dot(color,vec3(0.3333));}highp float rand(const in vec2 uv){const highp float a=12.9898,b=78.233,c=43758.5453;highp float dt=dot(uv.xy,vec2(a,b)),sn=mod(dt,PI);return fract(sin(sn)*c);}
#ifdef HIGH_PRECISION
float precisionSafeLength(vec3 v){return length(v);}
#else
float precisionSafeLength(vec3 v){float maxComponent=max3(abs(v));return length(v/maxComponent)*maxComponent;}
#endif
struct IncidentLight{vec3 color;vec3 direction;bool visible;};struct ReflectedLight{vec3 directDiffuse;vec3 directSpecular;vec3 indirectDiffuse;vec3 indirectSpecular;};struct GeometricContext{vec3 position;vec3 normal;vec3 viewDir;
#ifdef USE_CLEARCOAT
vec3 clearcoatNormal;
#endif
};vec3 transformDirection(in vec3 dir,in mat4 matrix){return normalize((matrix*vec4(dir,0.0)).xyz);}vec3 inverseTransformDirection(in vec3 dir,in mat4 matrix){return normalize((vec4(dir,0.0)*matrix).xyz);}mat3 transposeMat3(const in mat3 m){mat3 tmp;tmp[0]=vec3(m[0].x,m[1].x,m[2].x);tmp[1]=vec3(m[0].y,m[1].y,m[2].y);tmp[2]=vec3(m[0].z,m[1].z,m[2].z);return tmp;}float linearToRelativeLuminance(const in vec3 color){vec3 weights=vec3(0.2126,0.7152,0.0722);return dot(weights,color.rgb);}bool isPerspectiveMatrix(mat4 m){return m[2][3]==-1.0;}vec2 equirectUv(in vec3 dir){float u=atan(dir.z,dir.x)*RECIPROCAL_PI2+0.5;float v=asin(clamp(dir.y,-1.0,1.0))*RECIPROCAL_PI+0.5;return vec2(u,v);}`,
  Su = `#ifdef ENVMAP_TYPE_CUBE_UV
#define cubeUV_minMipLevel 4.0
#define cubeUV_minTileSize 16.0
float getFace(vec3 direction){vec3 absDirection=abs(direction);float face=-1.0;if(absDirection.x>absDirection.z){if(absDirection.x>absDirection.y)face=direction.x>0.0?0.0:3.0;else face=direction.y>0.0?1.0:4.0;}else{if(absDirection.z>absDirection.y)face=direction.z>0.0?2.0:5.0;else face=direction.y>0.0?1.0:4.0;}return face;}vec2 getUV(vec3 direction,float face){vec2 uv;if(face==0.0){uv=vec2(direction.z,direction.y)/abs(direction.x);}else if(face==1.0){uv=vec2(-direction.x,-direction.z)/abs(direction.y);}else if(face==2.0){uv=vec2(-direction.x,direction.y)/abs(direction.z);}else if(face==3.0){uv=vec2(-direction.z,direction.y)/abs(direction.x);}else if(face==4.0){uv=vec2(-direction.x,direction.z)/abs(direction.y);}else{uv=vec2(direction.x,direction.y)/abs(direction.z);}return 0.5*(uv+1.0);}vec3 bilinearCubeUV(sampler2D envMap,vec3 direction,float mipInt){float face=getFace(direction);float filterInt=max(cubeUV_minMipLevel-mipInt,0.0);mipInt=max(mipInt,cubeUV_minMipLevel);float faceSize=exp2(mipInt);vec2 uv=getUV(direction,face)*(faceSize-2.0)+1.0;if(face>2.0){uv.y+=faceSize;face-=3.0;}uv.x+=face*faceSize;uv.x+=filterInt*3.0*cubeUV_minTileSize;uv.y+=4.0*(exp2(CUBEUV_MAX_MIP)-faceSize);uv.x*=CUBEUV_TEXEL_WIDTH;uv.y*=CUBEUV_TEXEL_HEIGHT;
#ifdef texture2DGradEXT
return texture2DGradEXT(envMap,uv,vec2(0.0),vec2(0.0)).rgb;
#else
return texture2D(envMap,uv).rgb;
#endif
}
#define r0 1.0
#define v0 0.339
#define m0-2.0
#define r1 0.8
#define v1 0.276
#define m1-1.0
#define r4 0.4
#define v4 0.046
#define m4 2.0
#define r5 0.305
#define v5 0.016
#define m5 3.0
#define r6 0.21
#define v6 0.0038
#define m6 4.0
float roughnessToMip(float roughness){float mip=0.0;if(roughness>=r1){mip=(r0-roughness)*(m1-m0)/(r0-r1)+m0;}else if(roughness>=r4){mip=(r1-roughness)*(m4-m1)/(r1-r4)+m1;}else if(roughness>=r5){mip=(r4-roughness)*(m5-m4)/(r4-r5)+m4;}else if(roughness>=r6){mip=(r5-roughness)*(m6-m5)/(r5-r6)+m5;}else{mip=-2.0*log2(1.16*roughness);}return mip;}vec4 textureCubeUV(sampler2D envMap,vec3 sampleDir,float roughness){float mip=clamp(roughnessToMip(roughness),m0,CUBEUV_MAX_MIP);float mipF=fract(mip);float mipInt=floor(mip);vec3 color0=bilinearCubeUV(envMap,sampleDir,mipInt);if(mipF==0.0){return vec4(color0,1.0);}else{vec3 color1=bilinearCubeUV(envMap,sampleDir,mipInt+1.0);return vec4(mix(color0,color1,mipF),1.0);}}
#endif`,
  Mu = `vec3 transformedNormal=objectNormal;
#ifdef USE_INSTANCING
mat3 m=mat3(instanceMatrix);transformedNormal/=vec3(dot(m[0],m[0]),dot(m[1],m[1]),dot(m[2],m[2]));transformedNormal=m*transformedNormal;
#endif
transformedNormal=normalMatrix*transformedNormal;
#ifdef FLIP_SIDED
transformedNormal=-transformedNormal;
#endif
#ifdef USE_TANGENT
vec3 transformedTangent=(modelViewMatrix*vec4(objectTangent,0.0)).xyz;
#ifdef FLIP_SIDED
transformedTangent=-transformedTangent;
#endif
#endif`,
  Cu = `#ifdef USE_DISPLACEMENTMAP
uniform sampler2D displacementMap;uniform float displacementScale;uniform float displacementBias;
#endif`,
  Au = `#ifdef USE_DISPLACEMENTMAP
transformed+=normalize(objectNormal)*(texture2D(displacementMap,vUv).x*displacementScale+displacementBias);
#endif`,
  Tu = `#ifdef USE_EMISSIVEMAP
vec4 emissiveColor=texture2D(emissiveMap,vUv);totalEmissiveRadiance*=emissiveColor.rgb;
#endif`,
  Eu = `#ifdef USE_EMISSIVEMAP
uniform sampler2D emissiveMap;
#endif`,
  Lu = "gl_FragColor=linearToOutputTexel(gl_FragColor);",
  Du =
    "vec4 LinearToLinear(in vec4 value){return value;}vec4 LinearTosRGB(in vec4 value){return vec4(mix(pow(value.rgb,vec3(0.41666))*1.055-vec3(0.055),value.rgb*12.92,vec3(lessThanEqual(value.rgb,vec3(0.0031308)))),value.a);}",
  Pu = `#ifdef USE_ENVMAP
#ifdef ENV_WORLDPOS
vec3 cameraToFrag;if(isOrthographic){cameraToFrag=normalize(vec3(-viewMatrix[0][2],-viewMatrix[1][2],-viewMatrix[2][2]));}else{cameraToFrag=normalize(vWorldPosition-cameraPosition);}vec3 worldNormal=inverseTransformDirection(normal,viewMatrix);
#ifdef ENVMAP_MODE_REFLECTION
vec3 reflectVec=reflect(cameraToFrag,worldNormal);
#else
vec3 reflectVec=refract(cameraToFrag,worldNormal,refractionRatio);
#endif
#else
vec3 reflectVec=vReflect;
#endif
#ifdef ENVMAP_TYPE_CUBE
vec4 envColor=textureCube(envMap,vec3(flipEnvMap*reflectVec.x,reflectVec.yz));
#elif defined(ENVMAP_TYPE_CUBE_UV)
vec4 envColor=textureCubeUV(envMap,reflectVec,0.0);
#else
vec4 envColor=vec4(0.0);
#endif
#ifdef ENVMAP_BLENDING_MULTIPLY
outgoingLight=mix(outgoingLight,outgoingLight*envColor.xyz,specularStrength*reflectivity);
#elif defined(ENVMAP_BLENDING_MIX)
outgoingLight=mix(outgoingLight,envColor.xyz,specularStrength*reflectivity);
#elif defined(ENVMAP_BLENDING_ADD)
outgoingLight+=envColor.xyz*specularStrength*reflectivity;
#endif
#endif`,
  Ru = `#ifdef USE_ENVMAP
uniform float envMapIntensity;uniform float flipEnvMap;
#ifdef ENVMAP_TYPE_CUBE
uniform samplerCube envMap;
#else
uniform sampler2D envMap;
#endif
#endif`,
  Iu = `#ifdef USE_ENVMAP
uniform float reflectivity;
#if defined(USE_BUMPMAP)||defined(USE_NORMALMAP)||defined(PHONG)
#define ENV_WORLDPOS
#endif
#ifdef ENV_WORLDPOS
varying vec3 vWorldPosition;uniform float refractionRatio;
#else
varying vec3 vReflect;
#endif
#endif`,
  Fu = `#ifdef USE_ENVMAP
#if defined(USE_BUMPMAP)||defined(USE_NORMALMAP)||defined(PHONG)
#define ENV_WORLDPOS
#endif
#ifdef ENV_WORLDPOS
varying vec3 vWorldPosition;
#else
varying vec3 vReflect;uniform float refractionRatio;
#endif
#endif`,
  zu = `#ifdef USE_ENVMAP
#ifdef ENV_WORLDPOS
vWorldPosition=worldPosition.xyz;
#else
vec3 cameraToVertex;if(isOrthographic){cameraToVertex=normalize(vec3(-viewMatrix[0][2],-viewMatrix[1][2],-viewMatrix[2][2]));}else{cameraToVertex=normalize(worldPosition.xyz-cameraPosition);}vec3 worldNormal=inverseTransformDirection(transformedNormal,viewMatrix);
#ifdef ENVMAP_MODE_REFLECTION
vReflect=reflect(cameraToVertex,worldNormal);
#else
vReflect=refract(cameraToVertex,worldNormal,refractionRatio);
#endif
#endif
#endif`,
  Uu = `#ifdef USE_FOG
vFogDepth=-mvPosition.z;
#endif`,
  Bu = `#ifdef USE_FOG
varying float vFogDepth;
#endif`,
  Nu = `#ifdef USE_FOG
#ifdef FOG_EXP2
float fogFactor=1.0-exp(-fogDensity*fogDensity*vFogDepth*vFogDepth);
#else
float fogFactor=smoothstep(fogNear,fogFar,vFogDepth);
#endif
gl_FragColor.rgb=mix(gl_FragColor.rgb,fogColor,fogFactor);
#endif`,
  ku = `#ifdef USE_FOG
uniform vec3 fogColor;varying float vFogDepth;
#ifdef FOG_EXP2
uniform float fogDensity;
#else
uniform float fogNear;uniform float fogFar;
#endif
#endif`,
  Ou = `#ifdef USE_GRADIENTMAP
uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance(vec3 normal,vec3 lightDirection){float dotNL=dot(normal,lightDirection);vec2 coord=vec2(dotNL*0.5+0.5,0.0);
#ifdef USE_GRADIENTMAP
return vec3(texture2D(gradientMap,coord).r);
#else
return(coord.x<0.7)?vec3(0.7):vec3(1.0);
#endif
}`,
  Gu = `#ifdef USE_LIGHTMAP
vec4 lightMapTexel=texture2D(lightMap,vUv2);vec3 lightMapIrradiance=lightMapTexel.rgb*lightMapIntensity;reflectedLight.indirectDiffuse+=lightMapIrradiance;
#endif`,
  Vu = `#ifdef USE_LIGHTMAP
uniform sampler2D lightMap;uniform float lightMapIntensity;
#endif`,
  Hu = `vec3 diffuse=vec3(1.0);GeometricContext geometry;geometry.position=mvPosition.xyz;geometry.normal=normalize(transformedNormal);geometry.viewDir=(isOrthographic)?vec3(0,0,1):normalize(-mvPosition.xyz);GeometricContext backGeometry;backGeometry.position=geometry.position;backGeometry.normal=-geometry.normal;backGeometry.viewDir=geometry.viewDir;vLightFront=vec3(0.0);vIndirectFront=vec3(0.0);
#ifdef DOUBLE_SIDED
vLightBack=vec3(0.0);vIndirectBack=vec3(0.0);
#endif
IncidentLight directLight;float dotNL;vec3 directLightColor_Diffuse;vIndirectFront+=getAmbientLightIrradiance(ambientLightColor);vIndirectFront+=getLightProbeIrradiance(lightProbe,geometry.normal);
#ifdef DOUBLE_SIDED
vIndirectBack+=getAmbientLightIrradiance(ambientLightColor);vIndirectBack+=getLightProbeIrradiance(lightProbe,backGeometry.normal);
#endif
#if NUM_POINT_LIGHTS>0
#pragma unroll_loop_start
for(int i=0;i<NUM_POINT_LIGHTS;i++){getPointLightInfo(pointLights[i],geometry,directLight);dotNL=dot(geometry.normal,directLight.direction);directLightColor_Diffuse=directLight.color;vLightFront+=saturate(dotNL)*directLightColor_Diffuse;
#ifdef DOUBLE_SIDED
vLightBack+=saturate(-dotNL)*directLightColor_Diffuse;
#endif
}
#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS>0
#pragma unroll_loop_start
for(int i=0;i<NUM_SPOT_LIGHTS;i++){getSpotLightInfo(spotLights[i],geometry,directLight);dotNL=dot(geometry.normal,directLight.direction);directLightColor_Diffuse=directLight.color;vLightFront+=saturate(dotNL)*directLightColor_Diffuse;
#ifdef DOUBLE_SIDED
vLightBack+=saturate(-dotNL)*directLightColor_Diffuse;
#endif
}
#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS>0
#pragma unroll_loop_start
for(int i=0;i<NUM_DIR_LIGHTS;i++){getDirectionalLightInfo(directionalLights[i],geometry,directLight);dotNL=dot(geometry.normal,directLight.direction);directLightColor_Diffuse=directLight.color;vLightFront+=saturate(dotNL)*directLightColor_Diffuse;
#ifdef DOUBLE_SIDED
vLightBack+=saturate(-dotNL)*directLightColor_Diffuse;
#endif
}
#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS>0
#pragma unroll_loop_start
for(int i=0;i<NUM_HEMI_LIGHTS;i++){vIndirectFront+=getHemisphereLightIrradiance(hemisphereLights[i],geometry.normal);
#ifdef DOUBLE_SIDED
vIndirectBack+=getHemisphereLightIrradiance(hemisphereLights[i],backGeometry.normal);
#endif
}
#pragma unroll_loop_end
#endif`,
  Wu = `uniform bool receiveShadow;uniform vec3 ambientLightColor;uniform vec3 lightProbe[9];vec3 shGetIrradianceAt(in vec3 normal,in vec3 shCoefficients[9]){float x=normal.x,y=normal.y,z=normal.z;vec3 result=shCoefficients[0]*0.886227;result+=shCoefficients[1]*2.0*0.511664*y;result+=shCoefficients[2]*2.0*0.511664*z;result+=shCoefficients[3]*2.0*0.511664*x;result+=shCoefficients[4]*2.0*0.429043*x*y;result+=shCoefficients[5]*2.0*0.429043*y*z;result+=shCoefficients[6]*(0.743125*z*z-0.247708);result+=shCoefficients[7]*2.0*0.429043*x*z;result+=shCoefficients[8]*0.429043*(x*x-y*y);return result;}vec3 getLightProbeIrradiance(const in vec3 lightProbe[9],const in vec3 normal){vec3 worldNormal=inverseTransformDirection(normal,viewMatrix);vec3 irradiance=shGetIrradianceAt(worldNormal,lightProbe);return irradiance;}vec3 getAmbientLightIrradiance(const in vec3 ambientLightColor){vec3 irradiance=ambientLightColor;return irradiance;}float getDistanceAttenuation(const in float lightDistance,const in float cutoffDistance,const in float decayExponent){
#if defined(PHYSICALLY_CORRECT_LIGHTS)
float distanceFalloff=1.0/max(pow(lightDistance,decayExponent),0.01);if(cutoffDistance>0.0){distanceFalloff*=pow2(saturate(1.0-pow4(lightDistance/cutoffDistance)));}return distanceFalloff;
#else
if(cutoffDistance>0.0&&decayExponent>0.0){return pow(saturate(-lightDistance/cutoffDistance+1.0),decayExponent);}return 1.0;
#endif
}float getSpotAttenuation(const in float coneCosine,const in float penumbraCosine,const in float angleCosine){return smoothstep(coneCosine,penumbraCosine,angleCosine);}
#if NUM_DIR_LIGHTS>0
struct DirectionalLight{vec3 direction;vec3 color;};uniform DirectionalLight directionalLights[NUM_DIR_LIGHTS];void getDirectionalLightInfo(const in DirectionalLight directionalLight,const in GeometricContext geometry,out IncidentLight light){light.color=directionalLight.color;light.direction=directionalLight.direction;light.visible=true;}
#endif
#if NUM_POINT_LIGHTS>0
struct PointLight{vec3 position;vec3 color;float distance;float decay;};uniform PointLight pointLights[NUM_POINT_LIGHTS];void getPointLightInfo(const in PointLight pointLight,const in GeometricContext geometry,out IncidentLight light){vec3 lVector=pointLight.position-geometry.position;light.direction=normalize(lVector);float lightDistance=length(lVector);light.color=pointLight.color;light.color*=getDistanceAttenuation(lightDistance,pointLight.distance,pointLight.decay);light.visible=(light.color!=vec3(0.0));}
#endif
#if NUM_SPOT_LIGHTS>0
struct SpotLight{vec3 position;vec3 direction;vec3 color;float distance;float decay;float coneCos;float penumbraCos;};uniform SpotLight spotLights[NUM_SPOT_LIGHTS];void getSpotLightInfo(const in SpotLight spotLight,const in GeometricContext geometry,out IncidentLight light){vec3 lVector=spotLight.position-geometry.position;light.direction=normalize(lVector);float angleCos=dot(light.direction,spotLight.direction);float spotAttenuation=getSpotAttenuation(spotLight.coneCos,spotLight.penumbraCos,angleCos);if(spotAttenuation>0.0){float lightDistance=length(lVector);light.color=spotLight.color*spotAttenuation;light.color*=getDistanceAttenuation(lightDistance,spotLight.distance,spotLight.decay);light.visible=(light.color!=vec3(0.0));}else{light.color=vec3(0.0);light.visible=false;}}
#endif
#if NUM_RECT_AREA_LIGHTS>0
struct RectAreaLight{vec3 color;vec3 position;vec3 halfWidth;vec3 halfHeight;};uniform sampler2D ltc_1;uniform sampler2D ltc_2;uniform RectAreaLight rectAreaLights[NUM_RECT_AREA_LIGHTS];
#endif
#if NUM_HEMI_LIGHTS>0
struct HemisphereLight{vec3 direction;vec3 skyColor;vec3 groundColor;};uniform HemisphereLight hemisphereLights[NUM_HEMI_LIGHTS];vec3 getHemisphereLightIrradiance(const in HemisphereLight hemiLight,const in vec3 normal){float dotNL=dot(normal,hemiLight.direction);float hemiDiffuseWeight=0.5*dotNL+0.5;vec3 irradiance=mix(hemiLight.groundColor,hemiLight.skyColor,hemiDiffuseWeight);return irradiance;}
#endif`,
  qu = `#if defined(USE_ENVMAP)
vec3 getIBLIrradiance(const in vec3 normal){
#if defined(ENVMAP_TYPE_CUBE_UV)
vec3 worldNormal=inverseTransformDirection(normal,viewMatrix);vec4 envMapColor=textureCubeUV(envMap,worldNormal,1.0);return PI*envMapColor.rgb*envMapIntensity;
#else
return vec3(0.0);
#endif
}vec3 getIBLRadiance(const in vec3 viewDir,const in vec3 normal,const in float roughness){
#if defined(ENVMAP_TYPE_CUBE_UV)
vec3 reflectVec=reflect(-viewDir,normal);reflectVec=normalize(mix(reflectVec,normal,roughness*roughness));reflectVec=inverseTransformDirection(reflectVec,viewMatrix);vec4 envMapColor=textureCubeUV(envMap,reflectVec,roughness);return envMapColor.rgb*envMapIntensity;
#else
return vec3(0.0);
#endif
}
#endif`,
  Xu = "ToonMaterial material;material.diffuseColor=diffuseColor.rgb;",
  ju = `varying vec3 vViewPosition;struct ToonMaterial{vec3 diffuseColor;};void RE_Direct_Toon(const in IncidentLight directLight,const in GeometricContext geometry,const in ToonMaterial material,inout ReflectedLight reflectedLight){vec3 irradiance=getGradientIrradiance(geometry.normal,directLight.direction)*directLight.color;reflectedLight.directDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}void RE_IndirectDiffuse_Toon(const in vec3 irradiance,const in GeometricContext geometry,const in ToonMaterial material,inout ReflectedLight reflectedLight){reflectedLight.indirectDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}
#define RE_Direct RE_Direct_Toon
#define RE_IndirectDiffuse RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD(material)(0)`,
  $u =
    "BlinnPhongMaterial material;material.diffuseColor=diffuseColor.rgb;material.specularColor=specular;material.specularShininess=shininess;material.specularStrength=specularStrength;",
  Yu = `varying vec3 vViewPosition;struct BlinnPhongMaterial{vec3 diffuseColor;vec3 specularColor;float specularShininess;float specularStrength;};void RE_Direct_BlinnPhong(const in IncidentLight directLight,const in GeometricContext geometry,const in BlinnPhongMaterial material,inout ReflectedLight reflectedLight){float dotNL=saturate(dot(geometry.normal,directLight.direction));vec3 irradiance=dotNL*directLight.color;reflectedLight.directDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);reflectedLight.directSpecular+=irradiance*BRDF_BlinnPhong(directLight.direction,geometry.viewDir,geometry.normal,material.specularColor,material.specularShininess)*material.specularStrength;}void RE_IndirectDiffuse_BlinnPhong(const in vec3 irradiance,const in GeometricContext geometry,const in BlinnPhongMaterial material,inout ReflectedLight reflectedLight){reflectedLight.indirectDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}
#define RE_Direct RE_Direct_BlinnPhong
#define RE_IndirectDiffuse RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD(material)(0)`,
  Zu = `PhysicalMaterial material;material.diffuseColor=diffuseColor.rgb*(1.0-metalnessFactor);vec3 dxy=max(abs(dFdx(geometryNormal)),abs(dFdy(geometryNormal)));float geometryRoughness=max(max(dxy.x,dxy.y),dxy.z);material.roughness=max(roughnessFactor,0.0525);material.roughness+=geometryRoughness;material.roughness=min(material.roughness,1.0);
#ifdef IOR
#ifdef SPECULAR
float specularIntensityFactor=specularIntensity;vec3 specularColorFactor=specularColor;
#ifdef USE_SPECULARINTENSITYMAP
specularIntensityFactor*=texture2D(specularIntensityMap,vUv).a;
#endif
#ifdef USE_SPECULARCOLORMAP
specularColorFactor*=texture2D(specularColorMap,vUv).rgb;
#endif
material.specularF90=mix(specularIntensityFactor,1.0,metalnessFactor);
#else
float specularIntensityFactor=1.0;vec3 specularColorFactor=vec3(1.0);material.specularF90=1.0;
#endif
material.specularColor=mix(min(pow2((ior-1.0)/(ior+1.0))*specularColorFactor,vec3(1.0))*specularIntensityFactor,diffuseColor.rgb,metalnessFactor);
#else
material.specularColor=mix(vec3(0.04),diffuseColor.rgb,metalnessFactor);material.specularF90=1.0;
#endif
#ifdef USE_CLEARCOAT
material.clearcoat=clearcoat;material.clearcoatRoughness=clearcoatRoughness;material.clearcoatF0=vec3(0.04);material.clearcoatF90=1.0;
#ifdef USE_CLEARCOATMAP
material.clearcoat*=texture2D(clearcoatMap,vUv).x;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
material.clearcoatRoughness*=texture2D(clearcoatRoughnessMap,vUv).y;
#endif
material.clearcoat=saturate(material.clearcoat);material.clearcoatRoughness=max(material.clearcoatRoughness,0.0525);material.clearcoatRoughness+=geometryRoughness;material.clearcoatRoughness=min(material.clearcoatRoughness,1.0);
#endif
#ifdef USE_IRIDESCENCE
material.iridescence=iridescence;material.iridescenceIOR=iridescenceIOR;
#ifdef USE_IRIDESCENCEMAP
material.iridescence*=texture2D(iridescenceMap,vUv).r;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
material.iridescenceThickness=(iridescenceThicknessMaximum-iridescenceThicknessMinimum)*texture2D(iridescenceThicknessMap,vUv).g+iridescenceThicknessMinimum;
#else
material.iridescenceThickness=iridescenceThicknessMaximum;
#endif
#endif
#ifdef USE_SHEEN
material.sheenColor=sheenColor;
#ifdef USE_SHEENCOLORMAP
material.sheenColor*=texture2D(sheenColorMap,vUv).rgb;
#endif
material.sheenRoughness=clamp(sheenRoughness,0.07,1.0);
#ifdef USE_SHEENROUGHNESSMAP
material.sheenRoughness*=texture2D(sheenRoughnessMap,vUv).a;
#endif
#endif`,
  Ku = `struct PhysicalMaterial{vec3 diffuseColor;float roughness;vec3 specularColor;float specularF90;
#ifdef USE_CLEARCOAT
float clearcoat;float clearcoatRoughness;vec3 clearcoatF0;float clearcoatF90;
#endif
#ifdef USE_IRIDESCENCE
float iridescence;float iridescenceIOR;float iridescenceThickness;vec3 iridescenceFresnel;vec3 iridescenceF0;
#endif
#ifdef USE_SHEEN
vec3 sheenColor;float sheenRoughness;
#endif
};vec3 clearcoatSpecular=vec3(0.0);vec3 sheenSpecular=vec3(0.0);float IBLSheenBRDF(const in vec3 normal,const in vec3 viewDir,const in float roughness){float dotNV=saturate(dot(normal,viewDir));float r2=roughness*roughness;float a=roughness<0.25?-339.2*r2+161.4*roughness-25.9:-8.48*r2+14.3*roughness-9.95;float b=roughness<0.25?44.0*r2-23.7*roughness+3.26:1.97*r2-3.27*roughness+0.72;float DG=exp(a*dotNV+b)+(roughness<0.25?0.0:0.1*(roughness-0.25));return saturate(DG*RECIPROCAL_PI);}vec2 DFGApprox(const in vec3 normal,const in vec3 viewDir,const in float roughness){float dotNV=saturate(dot(normal,viewDir));const vec4 c0=vec4(-1,-0.0275,-0.572,0.022);const vec4 c1=vec4(1,0.0425,1.04,-0.04);vec4 r=roughness*c0+c1;float a004=min(r.x*r.x,exp2(-9.28*dotNV))*r.x+r.y;vec2 fab=vec2(-1.04,1.04)*a004+r.zw;return fab;}vec3 EnvironmentBRDF(const in vec3 normal,const in vec3 viewDir,const in vec3 specularColor,const in float specularF90,const in float roughness){vec2 fab=DFGApprox(normal,viewDir,roughness);return specularColor*fab.x+specularF90*fab.y;}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence(const in vec3 normal,const in vec3 viewDir,const in vec3 specularColor,const in float specularF90,const in float iridescence,const in vec3 iridescenceF0,const in float roughness,inout vec3 singleScatter,inout vec3 multiScatter){
#else
void computeMultiscattering(const in vec3 normal,const in vec3 viewDir,const in vec3 specularColor,const in float specularF90,const in float roughness,inout vec3 singleScatter,inout vec3 multiScatter){
#endif
vec2 fab=DFGApprox(normal,viewDir,roughness);
#ifdef USE_IRIDESCENCE
vec3 Fr=mix(specularColor,iridescenceF0,iridescence);
#else
vec3 Fr=specularColor;
#endif
vec3 FssEss=Fr*fab.x+specularF90*fab.y;float Ess=fab.x+fab.y;float Ems=1.0-Ess;vec3 Favg=Fr+(1.0-Fr)*0.047619;vec3 Fms=FssEss*Favg/(1.0-Ems*Favg);singleScatter+=FssEss;multiScatter+=Fms*Ems;}
#if NUM_RECT_AREA_LIGHTS>0
void RE_Direct_RectArea_Physical(const in RectAreaLight rectAreaLight,const in GeometricContext geometry,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){vec3 normal=geometry.normal;vec3 viewDir=geometry.viewDir;vec3 position=geometry.position;vec3 lightPos=rectAreaLight.position;vec3 halfWidth=rectAreaLight.halfWidth;vec3 halfHeight=rectAreaLight.halfHeight;vec3 lightColor=rectAreaLight.color;float roughness=material.roughness;vec3 rectCoords[4];rectCoords[0]=lightPos+halfWidth-halfHeight;rectCoords[1]=lightPos-halfWidth-halfHeight;rectCoords[2]=lightPos-halfWidth+halfHeight;rectCoords[3]=lightPos+halfWidth+halfHeight;vec2 uv=LTC_Uv(normal,viewDir,roughness);vec4 t1=texture2D(ltc_1,uv);vec4 t2=texture2D(ltc_2,uv);mat3 mInv=mat3(vec3(t1.x,0,t1.y),vec3(0,1,0),vec3(t1.z,0,t1.w));vec3 fresnel=(material.specularColor*t2.x+(vec3(1.0)-material.specularColor)*t2.y);reflectedLight.directSpecular+=lightColor*fresnel*LTC_Evaluate(normal,viewDir,position,mInv,rectCoords);reflectedLight.directDiffuse+=lightColor*material.diffuseColor*LTC_Evaluate(normal,viewDir,position,mat3(1.0),rectCoords);}
#endif
void RE_Direct_Physical(const in IncidentLight directLight,const in GeometricContext geometry,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){float dotNL=saturate(dot(geometry.normal,directLight.direction));vec3 irradiance=dotNL*directLight.color;
#ifdef USE_CLEARCOAT
float dotNLcc=saturate(dot(geometry.clearcoatNormal,directLight.direction));vec3 ccIrradiance=dotNLcc*directLight.color;clearcoatSpecular+=ccIrradiance*BRDF_GGX(directLight.direction,geometry.viewDir,geometry.clearcoatNormal,material.clearcoatF0,material.clearcoatF90,material.clearcoatRoughness);
#endif
#ifdef USE_SHEEN
sheenSpecular+=irradiance*BRDF_Sheen(directLight.direction,geometry.viewDir,geometry.normal,material.sheenColor,material.sheenRoughness);
#endif
#ifdef USE_IRIDESCENCE
reflectedLight.directSpecular+=irradiance*BRDF_GGX_Iridescence(directLight.direction,geometry.viewDir,geometry.normal,material.specularColor,material.specularF90,material.iridescence,material.iridescenceFresnel,material.roughness);
#else
reflectedLight.directSpecular+=irradiance*BRDF_GGX(directLight.direction,geometry.viewDir,geometry.normal,material.specularColor,material.specularF90,material.roughness);
#endif
reflectedLight.directDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}void RE_IndirectDiffuse_Physical(const in vec3 irradiance,const in GeometricContext geometry,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){reflectedLight.indirectDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}void RE_IndirectSpecular_Physical(const in vec3 radiance,const in vec3 irradiance,const in vec3 clearcoatRadiance,const in GeometricContext geometry,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){
#ifdef USE_CLEARCOAT
clearcoatSpecular+=clearcoatRadiance*EnvironmentBRDF(geometry.clearcoatNormal,geometry.viewDir,material.clearcoatF0,material.clearcoatF90,material.clearcoatRoughness);
#endif
#ifdef USE_SHEEN
sheenSpecular+=irradiance*material.sheenColor*IBLSheenBRDF(geometry.normal,geometry.viewDir,material.sheenRoughness);
#endif
vec3 singleScattering=vec3(0.0);vec3 multiScattering=vec3(0.0);vec3 cosineWeightedIrradiance=irradiance*RECIPROCAL_PI;
#ifdef USE_IRIDESCENCE
computeMultiscatteringIridescence(geometry.normal,geometry.viewDir,material.specularColor,material.specularF90,material.iridescence,material.iridescenceFresnel,material.roughness,singleScattering,multiScattering);
#else
computeMultiscattering(geometry.normal,geometry.viewDir,material.specularColor,material.specularF90,material.roughness,singleScattering,multiScattering);
#endif
vec3 totalScattering=singleScattering+multiScattering;vec3 diffuse=material.diffuseColor*(1.0-max(max(totalScattering.r,totalScattering.g),totalScattering.b));reflectedLight.indirectSpecular+=radiance*singleScattering;reflectedLight.indirectSpecular+=multiScattering*cosineWeightedIrradiance;reflectedLight.indirectDiffuse+=diffuse*cosineWeightedIrradiance;}
#define RE_Direct RE_Direct_Physical
#define RE_Direct_RectArea RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular RE_IndirectSpecular_Physical
float computeSpecularOcclusion(const in float dotNV,const in float ambientOcclusion,const in float roughness){return saturate(pow(dotNV+ambientOcclusion,exp2(-16.0*roughness-1.0))-1.0+ambientOcclusion);}`,
  Ju = `GeometricContext geometry;geometry.position=-vViewPosition;geometry.normal=normal;geometry.viewDir=(isOrthographic)?vec3(0,0,1):normalize(vViewPosition);
#ifdef USE_CLEARCOAT
geometry.clearcoatNormal=clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi=saturate(dot(normal,geometry.viewDir));if(material.iridescenceThickness==0.0){material.iridescence=0.0;}else{material.iridescence=saturate(material.iridescence);}if(material.iridescence>0.0){material.iridescenceFresnel=evalIridescence(1.0,material.iridescenceIOR,dotNVi,material.iridescenceThickness,material.specularColor);material.iridescenceF0=Schlick_to_F0(material.iridescenceFresnel,1.0,dotNVi);}
#endif
IncidentLight directLight;
#if (NUM_POINT_LIGHTS>0)&&defined(RE_Direct)
PointLight pointLight;
#if defined(USE_SHADOWMAP)&&NUM_POINT_LIGHT_SHADOWS>0
PointLightShadow pointLightShadow;
#endif
#pragma unroll_loop_start
for(int i=0;i<NUM_POINT_LIGHTS;i++){pointLight=pointLights[i];getPointLightInfo(pointLight,geometry,directLight);
#if defined(USE_SHADOWMAP)&&(UNROLLED_LOOP_INDEX<NUM_POINT_LIGHT_SHADOWS)
pointLightShadow=pointLightShadows[i];directLight.color*=all(bvec2(directLight.visible,receiveShadow))?getPointShadow(pointShadowMap[i],pointLightShadow.shadowMapSize,pointLightShadow.shadowBias,pointLightShadow.shadowRadius,vPointShadowCoord[i],pointLightShadow.shadowCameraNear,pointLightShadow.shadowCameraFar):1.0;
#endif
RE_Direct(directLight,geometry,material,reflectedLight);}
#pragma unroll_loop_end
#endif
#if (NUM_SPOT_LIGHTS>0)&&defined(RE_Direct)
SpotLight spotLight;
#if defined(USE_SHADOWMAP)&&NUM_SPOT_LIGHT_SHADOWS>0
SpotLightShadow spotLightShadow;
#endif
#pragma unroll_loop_start
for(int i=0;i<NUM_SPOT_LIGHTS;i++){spotLight=spotLights[i];getSpotLightInfo(spotLight,geometry,directLight);
#if defined(USE_SHADOWMAP)&&(UNROLLED_LOOP_INDEX<NUM_SPOT_LIGHT_SHADOWS)
spotLightShadow=spotLightShadows[i];directLight.color*=all(bvec2(directLight.visible,receiveShadow))?getShadow(spotShadowMap[i],spotLightShadow.shadowMapSize,spotLightShadow.shadowBias,spotLightShadow.shadowRadius,vSpotShadowCoord[i]):1.0;
#endif
RE_Direct(directLight,geometry,material,reflectedLight);}
#pragma unroll_loop_end
#endif
#if (NUM_DIR_LIGHTS>0)&&defined(RE_Direct)
DirectionalLight directionalLight;
#if defined(USE_SHADOWMAP)&&NUM_DIR_LIGHT_SHADOWS>0
DirectionalLightShadow directionalLightShadow;
#endif
#pragma unroll_loop_start
for(int i=0;i<NUM_DIR_LIGHTS;i++){directionalLight=directionalLights[i];getDirectionalLightInfo(directionalLight,geometry,directLight);
#if defined(USE_SHADOWMAP)&&(UNROLLED_LOOP_INDEX<NUM_DIR_LIGHT_SHADOWS)
directionalLightShadow=directionalLightShadows[i];directLight.color*=all(bvec2(directLight.visible,receiveShadow))?getShadow(directionalShadowMap[i],directionalLightShadow.shadowMapSize,directionalLightShadow.shadowBias,directionalLightShadow.shadowRadius,vDirectionalShadowCoord[i]):1.0;
#endif
RE_Direct(directLight,geometry,material,reflectedLight);}
#pragma unroll_loop_end
#endif
#if (NUM_RECT_AREA_LIGHTS>0)&&defined(RE_Direct_RectArea)
RectAreaLight rectAreaLight;
#pragma unroll_loop_start
for(int i=0;i<NUM_RECT_AREA_LIGHTS;i++){rectAreaLight=rectAreaLights[i];RE_Direct_RectArea(rectAreaLight,geometry,material,reflectedLight);}
#pragma unroll_loop_end
#endif
#if defined(RE_IndirectDiffuse)
vec3 iblIrradiance=vec3(0.0);vec3 irradiance=getAmbientLightIrradiance(ambientLightColor);irradiance+=getLightProbeIrradiance(lightProbe,geometry.normal);
#if (NUM_HEMI_LIGHTS>0)
#pragma unroll_loop_start
for(int i=0;i<NUM_HEMI_LIGHTS;i++){irradiance+=getHemisphereLightIrradiance(hemisphereLights[i],geometry.normal);}
#pragma unroll_loop_end
#endif
#endif
#if defined(RE_IndirectSpecular)
vec3 radiance=vec3(0.0);vec3 clearcoatRadiance=vec3(0.0);
#endif`,
  Qu = `#if defined(RE_IndirectDiffuse)
#ifdef USE_LIGHTMAP
vec4 lightMapTexel=texture2D(lightMap,vUv2);vec3 lightMapIrradiance=lightMapTexel.rgb*lightMapIntensity;irradiance+=lightMapIrradiance;
#endif
#if defined(USE_ENVMAP)&&defined(STANDARD)&&defined(ENVMAP_TYPE_CUBE_UV)
iblIrradiance+=getIBLIrradiance(geometry.normal);
#endif
#endif
#if defined(USE_ENVMAP)&&defined(RE_IndirectSpecular)
radiance+=getIBLRadiance(geometry.viewDir,geometry.normal,material.roughness);
#ifdef USE_CLEARCOAT
clearcoatRadiance+=getIBLRadiance(geometry.viewDir,geometry.clearcoatNormal,material.clearcoatRoughness);
#endif
#endif`,
  ed = `#if defined(RE_IndirectDiffuse)
RE_IndirectDiffuse(irradiance,geometry,material,reflectedLight);
#endif
#if defined(RE_IndirectSpecular)
RE_IndirectSpecular(radiance,iblIrradiance,clearcoatRadiance,geometry,material,reflectedLight);
#endif`,
  td = `#if defined(USE_LOGDEPTHBUF)&&defined(USE_LOGDEPTHBUF_EXT)
gl_FragDepthEXT=vIsPerspective==0.0?gl_FragCoord.z:log2(vFragDepth)*logDepthBufFC*0.5;
#endif`,
  id = `#if defined(USE_LOGDEPTHBUF)&&defined(USE_LOGDEPTHBUF_EXT)
uniform float logDepthBufFC;varying float vFragDepth;varying float vIsPerspective;
#endif`,
  sd = `#ifdef USE_LOGDEPTHBUF
#ifdef USE_LOGDEPTHBUF_EXT
varying float vFragDepth;varying float vIsPerspective;
#else
uniform float logDepthBufFC;
#endif
#endif`,
  nd = `#ifdef USE_LOGDEPTHBUF
#ifdef USE_LOGDEPTHBUF_EXT
vFragDepth=1.0+gl_Position.w;vIsPerspective=float(isPerspectiveMatrix(projectionMatrix));
#else
if(isPerspectiveMatrix(projectionMatrix)){gl_Position.z=log2(max(EPSILON,gl_Position.w+1.0))*logDepthBufFC-1.0;gl_Position.z*=gl_Position.w;}
#endif
#endif`,
  rd = `#ifdef USE_MAP
vec4 sampledDiffuseColor=texture2D(map,vUv);
#ifdef DECODE_VIDEO_TEXTURE
sampledDiffuseColor=vec4(mix(pow(sampledDiffuseColor.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),sampledDiffuseColor.rgb*0.0773993808,vec3(lessThanEqual(sampledDiffuseColor.rgb,vec3(0.04045)))),sampledDiffuseColor.w);
#endif
diffuseColor*=sampledDiffuseColor;
#endif`,
  ad = `#ifdef USE_MAP
uniform sampler2D map;
#endif`,
  od = `#if defined(USE_MAP)||defined(USE_ALPHAMAP)
vec2 uv=(uvTransform*vec3(gl_PointCoord.x,1.0-gl_PointCoord.y,1)).xy;
#endif
#ifdef USE_MAP
diffuseColor*=texture2D(map,uv);
#endif
#ifdef USE_ALPHAMAP
diffuseColor.a*=texture2D(alphaMap,uv).g;
#endif`,
  ld = `#if defined(USE_MAP)||defined(USE_ALPHAMAP)
uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
uniform sampler2D alphaMap;
#endif`,
  cd = `float metalnessFactor=metalness;
#ifdef USE_METALNESSMAP
vec4 texelMetalness=texture2D(metalnessMap,vUv);metalnessFactor*=texelMetalness.b;
#endif`,
  hd = `#ifdef USE_METALNESSMAP
uniform sampler2D metalnessMap;
#endif`,
  ud = `#if defined(USE_MORPHCOLORS)&&defined(MORPHTARGETS_TEXTURE)
vColor*=morphTargetBaseInfluence;for(int i=0;i<MORPHTARGETS_COUNT;i++){
#if defined(USE_COLOR_ALPHA)
if(morphTargetInfluences[i]!=0.0)vColor+=getMorph(gl_VertexID,i,2)*morphTargetInfluences[i];
#elif defined(USE_COLOR)
if(morphTargetInfluences[i]!=0.0)vColor+=getMorph(gl_VertexID,i,2).rgb*morphTargetInfluences[i];
#endif
}
#endif`,
  dd = `#ifdef USE_MORPHNORMALS
objectNormal*=morphTargetBaseInfluence;
#ifdef MORPHTARGETS_TEXTURE
for(int i=0;i<MORPHTARGETS_COUNT;i++){if(morphTargetInfluences[i]!=0.0)objectNormal+=getMorph(gl_VertexID,i,1).xyz*morphTargetInfluences[i];}
#else
objectNormal+=morphNormal0*morphTargetInfluences[0];objectNormal+=morphNormal1*morphTargetInfluences[1];objectNormal+=morphNormal2*morphTargetInfluences[2];objectNormal+=morphNormal3*morphTargetInfluences[3];
#endif
#endif`,
  fd = `#ifdef USE_MORPHTARGETS
uniform float morphTargetBaseInfluence;
#ifdef MORPHTARGETS_TEXTURE
uniform float morphTargetInfluences[MORPHTARGETS_COUNT];uniform sampler2DArray morphTargetsTexture;uniform ivec2 morphTargetsTextureSize;vec4 getMorph(const in int vertexIndex,const in int morphTargetIndex,const in int offset){int texelIndex=vertexIndex*MORPHTARGETS_TEXTURE_STRIDE+offset;int y=texelIndex/morphTargetsTextureSize.x;int x=texelIndex-y*morphTargetsTextureSize.x;ivec3 morphUV=ivec3(x,y,morphTargetIndex);return texelFetch(morphTargetsTexture,morphUV,0);}
#else
#ifndef USE_MORPHNORMALS
uniform float morphTargetInfluences[8];
#else
uniform float morphTargetInfluences[4];
#endif
#endif
#endif`,
  pd = `#ifdef USE_MORPHTARGETS
transformed*=morphTargetBaseInfluence;
#ifdef MORPHTARGETS_TEXTURE
for(int i=0;i<MORPHTARGETS_COUNT;i++){if(morphTargetInfluences[i]!=0.0)transformed+=getMorph(gl_VertexID,i,0).xyz*morphTargetInfluences[i];}
#else
transformed+=morphTarget0*morphTargetInfluences[0];transformed+=morphTarget1*morphTargetInfluences[1];transformed+=morphTarget2*morphTargetInfluences[2];transformed+=morphTarget3*morphTargetInfluences[3];
#ifndef USE_MORPHNORMALS
transformed+=morphTarget4*morphTargetInfluences[4];transformed+=morphTarget5*morphTargetInfluences[5];transformed+=morphTarget6*morphTargetInfluences[6];transformed+=morphTarget7*morphTargetInfluences[7];
#endif
#endif
#endif`,
  md = `float faceDirection=gl_FrontFacing?1.0:-1.0;
#ifdef FLAT_SHADED
vec3 fdx=vec3(dFdx(vViewPosition.x),dFdx(vViewPosition.y),dFdx(vViewPosition.z));vec3 fdy=vec3(dFdy(vViewPosition.x),dFdy(vViewPosition.y),dFdy(vViewPosition.z));vec3 normal=normalize(cross(fdx,fdy));
#else
vec3 normal=normalize(vNormal);
#ifdef DOUBLE_SIDED
normal=normal*faceDirection;
#endif
#ifdef USE_TANGENT
vec3 tangent=normalize(vTangent);vec3 bitangent=normalize(vBitangent);
#ifdef DOUBLE_SIDED
tangent=tangent*faceDirection;bitangent=bitangent*faceDirection;
#endif
#if defined(TANGENTSPACE_NORMALMAP)||defined(USE_CLEARCOAT_NORMALMAP)
mat3 vTBN=mat3(tangent,bitangent,normal);
#endif
#endif
#endif
vec3 geometryNormal=normal;`,
  gd = `#ifdef OBJECTSPACE_NORMALMAP
normal=texture2D(normalMap,vUv).xyz*2.0-1.0;
#ifdef FLIP_SIDED
normal=-normal;
#endif
#ifdef DOUBLE_SIDED
normal=normal*faceDirection;
#endif
normal=normalize(normalMatrix*normal);
#elif defined(TANGENTSPACE_NORMALMAP)
vec3 mapN=texture2D(normalMap,vUv).xyz*2.0-1.0;mapN.xy*=normalScale;
#ifdef USE_TANGENT
normal=normalize(vTBN*mapN);
#else
normal=perturbNormal2Arb(-vViewPosition,normal,mapN,faceDirection);
#endif
#elif defined(USE_BUMPMAP)
normal=perturbNormalArb(-vViewPosition,normal,dHdxy_fwd(),faceDirection);
#endif`,
  vd = `#ifndef FLAT_SHADED
varying vec3 vNormal;
#ifdef USE_TANGENT
varying vec3 vTangent;varying vec3 vBitangent;
#endif
#endif`,
  _d = `#ifndef FLAT_SHADED
varying vec3 vNormal;
#ifdef USE_TANGENT
varying vec3 vTangent;varying vec3 vBitangent;
#endif
#endif`,
  xd = `#ifndef FLAT_SHADED
vNormal=normalize(transformedNormal);
#ifdef USE_TANGENT
vTangent=normalize(transformedTangent);vBitangent=normalize(cross(vNormal,vTangent)*tangent.w);
#endif
#endif`,
  yd = `#ifdef USE_NORMALMAP
uniform sampler2D normalMap;uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
uniform mat3 normalMatrix;
#endif
#if !defined(USE_TANGENT)&&(defined(TANGENTSPACE_NORMALMAP)||defined(USE_CLEARCOAT_NORMALMAP))
vec3 perturbNormal2Arb(vec3 eye_pos,vec3 surf_norm,vec3 mapN,float faceDirection){vec3 q0=vec3(dFdx(eye_pos.x),dFdx(eye_pos.y),dFdx(eye_pos.z));vec3 q1=vec3(dFdy(eye_pos.x),dFdy(eye_pos.y),dFdy(eye_pos.z));vec2 st0=dFdx(vUv.st);vec2 st1=dFdy(vUv.st);vec3 N=surf_norm;vec3 q1perp=cross(q1,N);vec3 q0perp=cross(N,q0);vec3 T=q1perp*st0.x+q0perp*st1.x;vec3 B=q1perp*st0.y+q0perp*st1.y;float det=max(dot(T,T),dot(B,B));float scale=(det==0.0)?0.0:faceDirection*inversesqrt(det);return normalize(T*(mapN.x*scale)+B*(mapN.y*scale)+N*mapN.z);}
#endif`,
  bd = `#ifdef USE_CLEARCOAT
vec3 clearcoatNormal=geometryNormal;
#endif`,
  wd = `#ifdef USE_CLEARCOAT_NORMALMAP
vec3 clearcoatMapN=texture2D(clearcoatNormalMap,vUv).xyz*2.0-1.0;clearcoatMapN.xy*=clearcoatNormalScale;
#ifdef USE_TANGENT
clearcoatNormal=normalize(vTBN*clearcoatMapN);
#else
clearcoatNormal=perturbNormal2Arb(-vViewPosition,clearcoatNormal,clearcoatMapN,faceDirection);
#endif
#endif`,
  Sd = `#ifdef USE_CLEARCOATMAP
uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
uniform sampler2D clearcoatNormalMap;uniform vec2 clearcoatNormalScale;
#endif`,
  Md = `#ifdef USE_IRIDESCENCEMAP
uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
uniform sampler2D iridescenceThicknessMap;
#endif`,
  Cd = `#ifdef OPAQUE
diffuseColor.a=1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a*=transmissionAlpha+0.1;
#endif
gl_FragColor=vec4(outgoingLight,diffuseColor.a);`,
  Ad =
    "vec3 packNormalToRGB(const in vec3 normal){return normalize(normal)*0.5+0.5;}vec3 unpackRGBToNormal(const in vec3 rgb){return 2.0*rgb.xyz-1.0;}const float PackUpscale=256./255.;const float UnpackDownscale=255./256.;const vec3 PackFactors=vec3(256.*256.*256.,256.*256.,256.);const vec4 UnpackFactors=UnpackDownscale/vec4(PackFactors,1.);const float ShiftRight8=1./256.;vec4 packDepthToRGBA(const in float v){vec4 r=vec4(fract(v*PackFactors),v);r.yzw-=r.xyz*ShiftRight8;return r*PackUpscale;}float unpackRGBAToDepth(const in vec4 v){return dot(v,UnpackFactors);}vec4 pack2HalfToRGBA(vec2 v){vec4 r=vec4(v.x,fract(v.x*255.0),v.y,fract(v.y*255.0));return vec4(r.x-r.y/255.0,r.y,r.z-r.w/255.0,r.w);}vec2 unpackRGBATo2Half(vec4 v){return vec2(v.x+(v.y/255.0),v.z+(v.w/255.0));}float viewZToOrthographicDepth(const in float viewZ,const in float near,const in float far){return(viewZ+near)/(near-far);}float orthographicDepthToViewZ(const in float linearClipZ,const in float near,const in float far){return linearClipZ*(near-far)-near;}float viewZToPerspectiveDepth(const in float viewZ,const in float near,const in float far){return((near+viewZ)*far)/((far-near)*viewZ);}float perspectiveDepthToViewZ(const in float invClipZ,const in float near,const in float far){return(near*far)/((far-near)*invClipZ-far);}",
  Td = `#ifdef PREMULTIPLIED_ALPHA
gl_FragColor.rgb*=gl_FragColor.a;
#endif`,
  Ed = `vec4 mvPosition=vec4(transformed,1.0);
#ifdef USE_INSTANCING
mvPosition=instanceMatrix*mvPosition;
#endif
mvPosition=modelViewMatrix*mvPosition;gl_Position=projectionMatrix*mvPosition;`,
  Ld = `#ifdef DITHERING
gl_FragColor.rgb=dithering(gl_FragColor.rgb);
#endif`,
  Dd = `#ifdef DITHERING
vec3 dithering(vec3 color){float grid_position=rand(gl_FragCoord.xy);vec3 dither_shift_RGB=vec3(0.25/255.0,-0.25/255.0,0.25/255.0);dither_shift_RGB=mix(2.0*dither_shift_RGB,-2.0*dither_shift_RGB,grid_position);return color+dither_shift_RGB;}
#endif`,
  Pd = `float roughnessFactor=roughness;
#ifdef USE_ROUGHNESSMAP
vec4 texelRoughness=texture2D(roughnessMap,vUv);roughnessFactor*=texelRoughness.g;
#endif`,
  Rd = `#ifdef USE_ROUGHNESSMAP
uniform sampler2D roughnessMap;
#endif`,
  Id = `#ifdef USE_SHADOWMAP
#if NUM_DIR_LIGHT_SHADOWS>0
uniform sampler2D directionalShadowMap[NUM_DIR_LIGHT_SHADOWS];varying vec4 vDirectionalShadowCoord[NUM_DIR_LIGHT_SHADOWS];struct DirectionalLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;};uniform DirectionalLightShadow directionalLightShadows[NUM_DIR_LIGHT_SHADOWS];
#endif
#if NUM_SPOT_LIGHT_SHADOWS>0
uniform sampler2D spotShadowMap[NUM_SPOT_LIGHT_SHADOWS];varying vec4 vSpotShadowCoord[NUM_SPOT_LIGHT_SHADOWS];struct SpotLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;};uniform SpotLightShadow spotLightShadows[NUM_SPOT_LIGHT_SHADOWS];
#endif
#if NUM_POINT_LIGHT_SHADOWS>0
uniform sampler2D pointShadowMap[NUM_POINT_LIGHT_SHADOWS];varying vec4 vPointShadowCoord[NUM_POINT_LIGHT_SHADOWS];struct PointLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;float shadowCameraNear;float shadowCameraFar;};uniform PointLightShadow pointLightShadows[NUM_POINT_LIGHT_SHADOWS];
#endif
float texture2DCompare(sampler2D depths,vec2 uv,float compare){return step(compare,unpackRGBAToDepth(texture2D(depths,uv)));}vec2 texture2DDistribution(sampler2D shadow,vec2 uv){return unpackRGBATo2Half(texture2D(shadow,uv));}float VSMShadow(sampler2D shadow,vec2 uv,float compare){float occlusion=1.0;vec2 distribution=texture2DDistribution(shadow,uv);float hard_shadow=step(compare,distribution.x);if(hard_shadow!=1.0){float distance=compare-distribution.x;float variance=max(0.00000,distribution.y*distribution.y);float softness_probability=variance/(variance+distance*distance);softness_probability=clamp((softness_probability-0.3)/(0.95-0.3),0.0,1.0);occlusion=clamp(max(hard_shadow,softness_probability),0.0,1.0);}return occlusion;}float getShadow(sampler2D shadowMap,vec2 shadowMapSize,float shadowBias,float shadowRadius,vec4 shadowCoord){float shadow=1.0;shadowCoord.xyz/=shadowCoord.w;shadowCoord.z+=shadowBias;bvec4 inFrustumVec=bvec4(shadowCoord.x>=0.0,shadowCoord.x<=1.0,shadowCoord.y>=0.0,shadowCoord.y<=1.0);bool inFrustum=all(inFrustumVec);bvec2 frustumTestVec=bvec2(inFrustum,shadowCoord.z<=1.0);bool frustumTest=all(frustumTestVec);if(frustumTest){
#if defined(SHADOWMAP_TYPE_PCF)
vec2 texelSize=vec2(1.0)/shadowMapSize;float dx0=-texelSize.x*shadowRadius;float dy0=-texelSize.y*shadowRadius;float dx1=+texelSize.x*shadowRadius;float dy1=+texelSize.y*shadowRadius;float dx2=dx0/2.0;float dy2=dy0/2.0;float dx3=dx1/2.0;float dy3=dy1/2.0;shadow=(texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx0,dy0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(0.0,dy0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx1,dy0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx2,dy2),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(0.0,dy2),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx3,dy2),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx0,0.0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx2,0.0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy,shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx3,0.0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx1,0.0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx2,dy3),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(0.0,dy3),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx3,dy3),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx0,dy1),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(0.0,dy1),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx1,dy1),shadowCoord.z))*(1.0/17.0);
#elif defined(SHADOWMAP_TYPE_PCF_SOFT)
vec2 texelSize=vec2(1.0)/shadowMapSize;float dx=texelSize.x;float dy=texelSize.y;vec2 uv=shadowCoord.xy;vec2 f=fract(uv*shadowMapSize+0.5);uv-=f*texelSize;shadow=(texture2DCompare(shadowMap,uv,shadowCoord.z)+texture2DCompare(shadowMap,uv+vec2(dx,0.0),shadowCoord.z)+texture2DCompare(shadowMap,uv+vec2(0.0,dy),shadowCoord.z)+texture2DCompare(shadowMap,uv+texelSize,shadowCoord.z)+mix(texture2DCompare(shadowMap,uv+vec2(-dx,0.0),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(2.0*dx,0.0),shadowCoord.z),f.x)+mix(texture2DCompare(shadowMap,uv+vec2(-dx,dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(2.0*dx,dy),shadowCoord.z),f.x)+mix(texture2DCompare(shadowMap,uv+vec2(0.0,-dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(0.0,2.0*dy),shadowCoord.z),f.y)+mix(texture2DCompare(shadowMap,uv+vec2(dx,-dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(dx,2.0*dy),shadowCoord.z),f.y)+mix(mix(texture2DCompare(shadowMap,uv+vec2(-dx,-dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(2.0*dx,-dy),shadowCoord.z),f.x),mix(texture2DCompare(shadowMap,uv+vec2(-dx,2.0*dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(2.0*dx,2.0*dy),shadowCoord.z),f.x),f.y))*(1.0/9.0);
#elif defined(SHADOWMAP_TYPE_VSM)
shadow=VSMShadow(shadowMap,shadowCoord.xy,shadowCoord.z);
#else
shadow=texture2DCompare(shadowMap,shadowCoord.xy,shadowCoord.z);
#endif
}return shadow;}vec2 cubeToUV(vec3 v,float texelSizeY){vec3 absV=abs(v);float scaleToCube=1.0/max(absV.x,max(absV.y,absV.z));absV*=scaleToCube;v*=scaleToCube*(1.0-2.0*texelSizeY);vec2 planar=v.xy;float almostATexel=1.5*texelSizeY;float almostOne=1.0-almostATexel;if(absV.z>=almostOne){if(v.z>0.0)planar.x=4.0-v.x;}else if(absV.x>=almostOne){float signX=sign(v.x);planar.x=v.z*signX+2.0*signX;}else if(absV.y>=almostOne){float signY=sign(v.y);planar.x=v.x+2.0*signY+2.0;planar.y=v.z*signY-2.0;}return vec2(0.125,0.25)*planar+vec2(0.375,0.75);}float getPointShadow(sampler2D shadowMap,vec2 shadowMapSize,float shadowBias,float shadowRadius,vec4 shadowCoord,float shadowCameraNear,float shadowCameraFar){vec2 texelSize=vec2(1.0)/(shadowMapSize*vec2(4.0,2.0));vec3 lightToPosition=shadowCoord.xyz;float dp=(length(lightToPosition)-shadowCameraNear)/(shadowCameraFar-shadowCameraNear);dp+=shadowBias;vec3 bd3D=normalize(lightToPosition);
#if defined(SHADOWMAP_TYPE_PCF)||defined(SHADOWMAP_TYPE_PCF_SOFT)||defined(SHADOWMAP_TYPE_VSM)
vec2 offset=vec2(-1,1)*shadowRadius*texelSize.y;return(texture2DCompare(shadowMap,cubeToUV(bd3D+offset.xyy,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.yyy,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.xyx,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.yyx,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.xxy,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.yxy,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.xxx,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.yxx,texelSize.y),dp))*(1.0/9.0);
#else
return texture2DCompare(shadowMap,cubeToUV(bd3D,texelSize.y),dp);
#endif
}
#endif`,
  Fd = `#ifdef USE_SHADOWMAP
#if NUM_DIR_LIGHT_SHADOWS>0
uniform mat4 directionalShadowMatrix[NUM_DIR_LIGHT_SHADOWS];varying vec4 vDirectionalShadowCoord[NUM_DIR_LIGHT_SHADOWS];struct DirectionalLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;};uniform DirectionalLightShadow directionalLightShadows[NUM_DIR_LIGHT_SHADOWS];
#endif
#if NUM_SPOT_LIGHT_SHADOWS>0
uniform mat4 spotShadowMatrix[NUM_SPOT_LIGHT_SHADOWS];varying vec4 vSpotShadowCoord[NUM_SPOT_LIGHT_SHADOWS];struct SpotLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;};uniform SpotLightShadow spotLightShadows[NUM_SPOT_LIGHT_SHADOWS];
#endif
#if NUM_POINT_LIGHT_SHADOWS>0
uniform mat4 pointShadowMatrix[NUM_POINT_LIGHT_SHADOWS];varying vec4 vPointShadowCoord[NUM_POINT_LIGHT_SHADOWS];struct PointLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;float shadowCameraNear;float shadowCameraFar;};uniform PointLightShadow pointLightShadows[NUM_POINT_LIGHT_SHADOWS];
#endif
#endif`,
  zd = `#ifdef USE_SHADOWMAP
#if NUM_DIR_LIGHT_SHADOWS>0||NUM_SPOT_LIGHT_SHADOWS>0||NUM_POINT_LIGHT_SHADOWS>0
vec3 shadowWorldNormal=inverseTransformDirection(transformedNormal,viewMatrix);vec4 shadowWorldPosition;
#endif
#if NUM_DIR_LIGHT_SHADOWS>0
#pragma unroll_loop_start
for(int i=0;i<NUM_DIR_LIGHT_SHADOWS;i++){shadowWorldPosition=worldPosition+vec4(shadowWorldNormal*directionalLightShadows[i].shadowNormalBias,0);vDirectionalShadowCoord[i]=directionalShadowMatrix[i]*shadowWorldPosition;}
#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHT_SHADOWS>0
#pragma unroll_loop_start
for(int i=0;i<NUM_SPOT_LIGHT_SHADOWS;i++){shadowWorldPosition=worldPosition+vec4(shadowWorldNormal*spotLightShadows[i].shadowNormalBias,0);vSpotShadowCoord[i]=spotShadowMatrix[i]*shadowWorldPosition;}
#pragma unroll_loop_end
#endif
#if NUM_POINT_LIGHT_SHADOWS>0
#pragma unroll_loop_start
for(int i=0;i<NUM_POINT_LIGHT_SHADOWS;i++){shadowWorldPosition=worldPosition+vec4(shadowWorldNormal*pointLightShadows[i].shadowNormalBias,0);vPointShadowCoord[i]=pointShadowMatrix[i]*shadowWorldPosition;}
#pragma unroll_loop_end
#endif
#endif`,
  Ud = `float getShadowMask(){float shadow=1.0;
#ifdef USE_SHADOWMAP
#if NUM_DIR_LIGHT_SHADOWS>0
DirectionalLightShadow directionalLight;
#pragma unroll_loop_start
for(int i=0;i<NUM_DIR_LIGHT_SHADOWS;i++){directionalLight=directionalLightShadows[i];shadow*=receiveShadow?getShadow(directionalShadowMap[i],directionalLight.shadowMapSize,directionalLight.shadowBias,directionalLight.shadowRadius,vDirectionalShadowCoord[i]):1.0;}
#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHT_SHADOWS>0
SpotLightShadow spotLight;
#pragma unroll_loop_start
for(int i=0;i<NUM_SPOT_LIGHT_SHADOWS;i++){spotLight=spotLightShadows[i];shadow*=receiveShadow?getShadow(spotShadowMap[i],spotLight.shadowMapSize,spotLight.shadowBias,spotLight.shadowRadius,vSpotShadowCoord[i]):1.0;}
#pragma unroll_loop_end
#endif
#if NUM_POINT_LIGHT_SHADOWS>0
PointLightShadow pointLight;
#pragma unroll_loop_start
for(int i=0;i<NUM_POINT_LIGHT_SHADOWS;i++){pointLight=pointLightShadows[i];shadow*=receiveShadow?getPointShadow(pointShadowMap[i],pointLight.shadowMapSize,pointLight.shadowBias,pointLight.shadowRadius,vPointShadowCoord[i],pointLight.shadowCameraNear,pointLight.shadowCameraFar):1.0;}
#pragma unroll_loop_end
#endif
#endif
return shadow;}`,
  Bd = `#ifdef USE_SKINNING
mat4 boneMatX=getBoneMatrix(skinIndex.x);mat4 boneMatY=getBoneMatrix(skinIndex.y);mat4 boneMatZ=getBoneMatrix(skinIndex.z);mat4 boneMatW=getBoneMatrix(skinIndex.w);
#endif`,
  Nd = `#ifdef USE_SKINNING
uniform mat4 bindMatrix;uniform mat4 bindMatrixInverse;uniform highp sampler2D boneTexture;uniform int boneTextureSize;mat4 getBoneMatrix(const in float i){float j=i*4.0;float x=mod(j,float(boneTextureSize));float y=floor(j/float(boneTextureSize));float dx=1.0/float(boneTextureSize);float dy=1.0/float(boneTextureSize);y=dy*(y+0.5);vec4 v1=texture2D(boneTexture,vec2(dx*(x+0.5),y));vec4 v2=texture2D(boneTexture,vec2(dx*(x+1.5),y));vec4 v3=texture2D(boneTexture,vec2(dx*(x+2.5),y));vec4 v4=texture2D(boneTexture,vec2(dx*(x+3.5),y));mat4 bone=mat4(v1,v2,v3,v4);return bone;}
#endif`,
  kd = `#ifdef USE_SKINNING
vec4 skinVertex=bindMatrix*vec4(transformed,1.0);vec4 skinned=vec4(0.0);skinned+=boneMatX*skinVertex*skinWeight.x;skinned+=boneMatY*skinVertex*skinWeight.y;skinned+=boneMatZ*skinVertex*skinWeight.z;skinned+=boneMatW*skinVertex*skinWeight.w;transformed=(bindMatrixInverse*skinned).xyz;
#endif`,
  Od = `#ifdef USE_SKINNING
mat4 skinMatrix=mat4(0.0);skinMatrix+=skinWeight.x*boneMatX;skinMatrix+=skinWeight.y*boneMatY;skinMatrix+=skinWeight.z*boneMatZ;skinMatrix+=skinWeight.w*boneMatW;skinMatrix=bindMatrixInverse*skinMatrix*bindMatrix;objectNormal=vec4(skinMatrix*vec4(objectNormal,0.0)).xyz;
#ifdef USE_TANGENT
objectTangent=vec4(skinMatrix*vec4(objectTangent,0.0)).xyz;
#endif
#endif`,
  Gd = `float specularStrength;
#ifdef USE_SPECULARMAP
vec4 texelSpecular=texture2D(specularMap,vUv);specularStrength=texelSpecular.r;
#else
specularStrength=1.0;
#endif`,
  Vd = `#ifdef USE_SPECULARMAP
uniform sampler2D specularMap;
#endif`,
  Hd = `#if defined(TONE_MAPPING)
gl_FragColor.rgb=toneMapping(gl_FragColor.rgb);
#endif`,
  Wd = `#ifndef saturate
#define saturate(a)clamp(a,0.0,1.0)
#endif
uniform float toneMappingExposure;vec3 LinearToneMapping(vec3 color){return toneMappingExposure*color;}vec3 ReinhardToneMapping(vec3 color){color*=toneMappingExposure;return saturate(color/(vec3(1.0)+color));}vec3 OptimizedCineonToneMapping(vec3 color){color*=toneMappingExposure;color=max(vec3(0.0),color-0.004);return pow((color*(6.2*color+0.5))/(color*(6.2*color+1.7)+0.06),vec3(2.2));}vec3 RRTAndODTFit(vec3 v){vec3 a=v*(v+0.0245786)-0.000090537;vec3 b=v*(0.983729*v+0.4329510)+0.238081;return a/b;}vec3 ACESFilmicToneMapping(vec3 color){const mat3 ACESInputMat=mat3(vec3(0.59719,0.07600,0.02840),vec3(0.35458,0.90834,0.13383),vec3(0.04823,0.01566,0.83777));const mat3 ACESOutputMat=mat3(vec3(1.60475,-0.10208,-0.00327),vec3(-0.53108,1.10813,-0.07276),vec3(-0.07367,-0.00605,1.07602));color*=toneMappingExposure/0.6;color=ACESInputMat*color;color=RRTAndODTFit(color);color=ACESOutputMat*color;return saturate(color);}vec3 CustomToneMapping(vec3 color){return color;}`,
  qd = `#ifdef USE_TRANSMISSION
float transmissionAlpha=1.0;float transmissionFactor=transmission;float thicknessFactor=thickness;
#ifdef USE_TRANSMISSIONMAP
transmissionFactor*=texture2D(transmissionMap,vUv).r;
#endif
#ifdef USE_THICKNESSMAP
thicknessFactor*=texture2D(thicknessMap,vUv).g;
#endif
vec3 pos=vWorldPosition;vec3 v=normalize(cameraPosition-pos);vec3 n=inverseTransformDirection(normal,viewMatrix);vec4 transmission=getIBLVolumeRefraction(n,v,roughnessFactor,material.diffuseColor,material.specularColor,material.specularF90,pos,modelMatrix,viewMatrix,projectionMatrix,ior,thicknessFactor,attenuationColor,attenuationDistance);totalDiffuse=mix(totalDiffuse,transmission.rgb,transmissionFactor);transmissionAlpha=mix(transmissionAlpha,transmission.a,transmissionFactor);
#endif`,
  Xd = `#ifdef USE_TRANSMISSION
uniform float transmission;uniform float thickness;uniform float attenuationDistance;uniform vec3 attenuationColor;
#ifdef USE_TRANSMISSIONMAP
uniform sampler2D transmissionMap;
#endif
#ifdef USE_THICKNESSMAP
uniform sampler2D thicknessMap;
#endif
uniform vec2 transmissionSamplerSize;uniform sampler2D transmissionSamplerMap;uniform mat4 modelMatrix;uniform mat4 projectionMatrix;varying vec3 vWorldPosition;vec3 getVolumeTransmissionRay(const in vec3 n,const in vec3 v,const in float thickness,const in float ior,const in mat4 modelMatrix){vec3 refractionVector=refract(-v,normalize(n),1.0/ior);vec3 modelScale;modelScale.x=length(vec3(modelMatrix[0].xyz));modelScale.y=length(vec3(modelMatrix[1].xyz));modelScale.z=length(vec3(modelMatrix[2].xyz));return normalize(refractionVector)*thickness*modelScale;}float applyIorToRoughness(const in float roughness,const in float ior){return roughness*clamp(ior*2.0-2.0,0.0,1.0);}vec4 getTransmissionSample(const in vec2 fragCoord,const in float roughness,const in float ior){float framebufferLod=log2(transmissionSamplerSize.x)*applyIorToRoughness(roughness,ior);
#ifdef texture2DLodEXT
return texture2DLodEXT(transmissionSamplerMap,fragCoord.xy,framebufferLod);
#else
return texture2D(transmissionSamplerMap,fragCoord.xy,framebufferLod);
#endif
}vec3 applyVolumeAttenuation(const in vec3 radiance,const in float transmissionDistance,const in vec3 attenuationColor,const in float attenuationDistance){if(attenuationDistance==0.0){return radiance;}else{vec3 attenuationCoefficient=-log(attenuationColor)/attenuationDistance;vec3 transmittance=exp(-attenuationCoefficient*transmissionDistance);return transmittance*radiance;}}vec4 getIBLVolumeRefraction(const in vec3 n,const in vec3 v,const in float roughness,const in vec3 diffuseColor,const in vec3 specularColor,const in float specularF90,const in vec3 position,const in mat4 modelMatrix,const in mat4 viewMatrix,const in mat4 projMatrix,const in float ior,const in float thickness,const in vec3 attenuationColor,const in float attenuationDistance){vec3 transmissionRay=getVolumeTransmissionRay(n,v,thickness,ior,modelMatrix);vec3 refractedRayExit=position+transmissionRay;vec4 ndcPos=projMatrix*viewMatrix*vec4(refractedRayExit,1.0);vec2 refractionCoords=ndcPos.xy/ndcPos.w;refractionCoords+=1.0;refractionCoords/=2.0;vec4 transmittedLight=getTransmissionSample(refractionCoords,roughness,ior);vec3 attenuatedColor=applyVolumeAttenuation(transmittedLight.rgb,length(transmissionRay),attenuationColor,attenuationDistance);vec3 F=EnvironmentBRDF(n,v,specularColor,specularF90,roughness);return vec4((1.0-F)*attenuatedColor*diffuseColor,transmittedLight.a);}
#endif`,
  jd = `#if (defined(USE_UV)&&!defined(UVS_VERTEX_ONLY))
varying vec2 vUv;
#endif`,
  $d = `#ifdef USE_UV
#ifdef UVS_VERTEX_ONLY
vec2 vUv;
#else
varying vec2 vUv;
#endif
uniform mat3 uvTransform;
#endif`,
  Yd = `#ifdef USE_UV
vUv=(uvTransform*vec3(uv,1)).xy;
#endif`,
  Zd = `#if defined(USE_LIGHTMAP)||defined(USE_AOMAP)
varying vec2 vUv2;
#endif`,
  Kd = `#if defined(USE_LIGHTMAP)||defined(USE_AOMAP)
attribute vec2 uv2;varying vec2 vUv2;uniform mat3 uv2Transform;
#endif`,
  Jd = `#if defined(USE_LIGHTMAP)||defined(USE_AOMAP)
vUv2=(uv2Transform*vec3(uv2,1)).xy;
#endif`,
  Qd = `#if defined(USE_ENVMAP)||defined(DISTANCE)||defined(USE_SHADOWMAP)||defined(USE_TRANSMISSION)
vec4 worldPosition=vec4(transformed,1.0);
#ifdef USE_INSTANCING
worldPosition=instanceMatrix*worldPosition;
#endif
worldPosition=modelMatrix*worldPosition;
#endif`;
const ef =
    "varying vec2 vUv;uniform mat3 uvTransform;void main(){vUv=(uvTransform*vec3(uv,1)).xy;gl_Position=vec4(position.xy,1.0,1.0);}",
  tf = `uniform sampler2D t2D;varying vec2 vUv;void main(){gl_FragColor=texture2D(t2D,vUv);
#ifdef DECODE_VIDEO_TEXTURE
gl_FragColor=vec4(mix(pow(gl_FragColor.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),gl_FragColor.rgb*0.0773993808,vec3(lessThanEqual(gl_FragColor.rgb,vec3(0.04045)))),gl_FragColor.w);
#endif
#include <tonemapping_fragment>
#include <encodings_fragment>
}`,
  sf = `varying vec3 vWorldDirection;
#include <common>
void main(){vWorldDirection=transformDirection(position,modelMatrix);
#include <begin_vertex>
#include <project_vertex>
gl_Position.z=gl_Position.w;}`,
  nf = `#include <envmap_common_pars_fragment>
uniform float opacity;varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main(){vec3 vReflect=vWorldDirection;
#include <envmap_fragment>
gl_FragColor=envColor;gl_FragColor.a*=opacity;
#include <tonemapping_fragment>
#include <encodings_fragment>
}`,
  rf = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;void main(){
#include <uv_vertex>
#include <skinbase_vertex>
#ifdef USE_DISPLACEMENTMAP
#include <beginnormal_vertex>
#include <morphnormal_vertex>
#include <skinnormal_vertex>
#endif
#include <begin_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>
#include <displacementmap_vertex>
#include <project_vertex>
#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
vHighPrecisionZW=gl_Position.zw;}`,
  af = `#if DEPTH_PACKING==3200
uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;void main(){
#include <clipping_planes_fragment>
vec4 diffuseColor=vec4(1.0);
#if DEPTH_PACKING==3200
diffuseColor.a=opacity;
#endif
#include <map_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <logdepthbuf_fragment>
float fragCoordZ=0.5*vHighPrecisionZW[0]/vHighPrecisionZW[1]+0.5;
#if DEPTH_PACKING==3200
gl_FragColor=vec4(vec3(1.0-fragCoordZ),opacity);
#elif DEPTH_PACKING==3201
gl_FragColor=packDepthToRGBA(fragCoordZ);
#endif
}`,
  of = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main(){
#include <uv_vertex>
#include <skinbase_vertex>
#ifdef USE_DISPLACEMENTMAP
#include <beginnormal_vertex>
#include <morphnormal_vertex>
#include <skinnormal_vertex>
#endif
#include <begin_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>
#include <displacementmap_vertex>
#include <project_vertex>
#include <worldpos_vertex>
#include <clipping_planes_vertex>
vWorldPosition=worldPosition.xyz;}`,
  lf = `#define DISTANCE
uniform vec3 referencePosition;uniform float nearDistance;uniform float farDistance;varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main(){
#include <clipping_planes_fragment>
vec4 diffuseColor=vec4(1.0);
#include <map_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
float dist=length(vWorldPosition-referencePosition);dist=(dist-nearDistance)/(farDistance-nearDistance);dist=saturate(dist);gl_FragColor=packDepthToRGBA(dist);}`,
  cf = `varying vec3 vWorldDirection;
#include <common>
void main(){vWorldDirection=transformDirection(position,modelMatrix);
#include <begin_vertex>
#include <project_vertex>
}`,
  hf = `uniform sampler2D tEquirect;varying vec3 vWorldDirection;
#include <common>
void main(){vec3 direction=normalize(vWorldDirection);vec2 sampleUV=equirectUv(direction);gl_FragColor=texture2D(tEquirect,sampleUV);
#include <tonemapping_fragment>
#include <encodings_fragment>
}`,
  uf = `uniform float scale;attribute float lineDistance;varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main(){vLineDistance=scale*lineDistance;
#include <color_vertex>
#include <morphcolor_vertex>
#include <begin_vertex>
#include <morphtarget_vertex>
#include <project_vertex>
#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
#include <fog_vertex>
}`,
  df = `uniform vec3 diffuse;uniform float opacity;uniform float dashSize;uniform float totalSize;varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main(){
#include <clipping_planes_fragment>
if(mod(vLineDistance,totalSize)>dashSize){discard;}vec3 outgoingLight=vec3(0.0);vec4 diffuseColor=vec4(diffuse,opacity);
#include <logdepthbuf_fragment>
#include <color_fragment>
outgoingLight=diffuseColor.rgb;
#include <output_fragment>
#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
}`,
  ff = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main(){
#include <uv_vertex>
#include <uv2_vertex>
#include <color_vertex>
#include <morphcolor_vertex>
#if defined(USE_ENVMAP)||defined(USE_SKINNING)
#include <beginnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <defaultnormal_vertex>
#endif
#include <begin_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>
#include <project_vertex>
#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
#include <worldpos_vertex>
#include <envmap_vertex>
#include <fog_vertex>
}`,
  pf = `uniform vec3 diffuse;uniform float opacity;
#ifndef FLAT_SHADED
varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main(){
#include <clipping_planes_fragment>
vec4 diffuseColor=vec4(diffuse,opacity);
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <specularmap_fragment>
ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));
#ifdef USE_LIGHTMAP
vec4 lightMapTexel=texture2D(lightMap,vUv2);reflectedLight.indirectDiffuse+=lightMapTexel.rgb*lightMapIntensity*RECIPROCAL_PI;
#else
reflectedLight.indirectDiffuse+=vec3(1.0);
#endif
#include <aomap_fragment>
reflectedLight.indirectDiffuse*=diffuseColor.rgb;vec3 outgoingLight=reflectedLight.indirectDiffuse;
#include <envmap_fragment>
#include <output_fragment>
#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}`,
  mf = `#define LAMBERT
varying vec3 vLightFront;varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
varying vec3 vLightBack;varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main(){
#include <uv_vertex>
#include <uv2_vertex>
#include <color_vertex>
#include <morphcolor_vertex>
#include <beginnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <defaultnormal_vertex>
#include <begin_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>
#include <project_vertex>
#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
#include <worldpos_vertex>
#include <envmap_vertex>
#include <lights_lambert_vertex>
#include <shadowmap_vertex>
#include <fog_vertex>
}`,
  gf = `uniform vec3 diffuse;uniform vec3 emissive;uniform float opacity;varying vec3 vLightFront;varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
varying vec3 vLightBack;varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main(){
#include <clipping_planes_fragment>
vec4 diffuseColor=vec4(diffuse,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <specularmap_fragment>
#include <emissivemap_fragment>
#ifdef DOUBLE_SIDED
reflectedLight.indirectDiffuse+=(gl_FrontFacing)?vIndirectFront:vIndirectBack;
#else
reflectedLight.indirectDiffuse+=vIndirectFront;
#endif
#include <lightmap_fragment>
reflectedLight.indirectDiffuse*=BRDF_Lambert(diffuseColor.rgb);
#ifdef DOUBLE_SIDED
reflectedLight.directDiffuse=(gl_FrontFacing)?vLightFront:vLightBack;
#else
reflectedLight.directDiffuse=vLightFront;
#endif
reflectedLight.directDiffuse*=BRDF_Lambert(diffuseColor.rgb)*getShadowMask();
#include <aomap_fragment>
vec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+totalEmissiveRadiance;
#include <envmap_fragment>
#include <output_fragment>
#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}`,
  vf = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main(){
#include <uv_vertex>
#include <color_vertex>
#include <morphcolor_vertex>
#include <beginnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <defaultnormal_vertex>
#include <normal_vertex>
#include <begin_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>
#include <displacementmap_vertex>
#include <project_vertex>
#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
#include <fog_vertex>
vViewPosition=-mvPosition.xyz;}`,
  _f = `#define MATCAP
uniform vec3 diffuse;uniform float opacity;uniform sampler2D matcap;varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main(){
#include <clipping_planes_fragment>
vec4 diffuseColor=vec4(diffuse,opacity);
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
vec3 viewDir=normalize(vViewPosition);vec3 x=normalize(vec3(viewDir.z,0.0,-viewDir.x));vec3 y=cross(viewDir,x);vec2 uv=vec2(dot(x,normal),dot(y,normal))*0.495+0.5;
#ifdef USE_MATCAP
vec4 matcapColor=texture2D(matcap,uv);
#else
vec4 matcapColor=vec4(vec3(mix(0.2,0.8,uv.y)),1.0);
#endif
vec3 outgoingLight=diffuseColor.rgb*matcapColor.rgb;
#include <output_fragment>
#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}`,
  xf = `#define NORMAL
#if defined(FLAT_SHADED)||defined(USE_BUMPMAP)||defined(TANGENTSPACE_NORMALMAP)
varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main(){
#include <uv_vertex>
#include <beginnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <defaultnormal_vertex>
#include <normal_vertex>
#include <begin_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>
#include <displacementmap_vertex>
#include <project_vertex>
#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
#if defined(FLAT_SHADED)||defined(USE_BUMPMAP)||defined(TANGENTSPACE_NORMALMAP)
vViewPosition=-mvPosition.xyz;
#endif
}`,
  yf = `#define NORMAL
uniform float opacity;
#if defined(FLAT_SHADED)||defined(USE_BUMPMAP)||defined(TANGENTSPACE_NORMALMAP)
varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main(){
#include <clipping_planes_fragment>
#include <logdepthbuf_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
gl_FragColor=vec4(packNormalToRGB(normal),opacity);
#ifdef OPAQUE
gl_FragColor.a=1.0;
#endif
}`,
  bf = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main(){
#include <uv_vertex>
#include <uv2_vertex>
#include <color_vertex>
#include <morphcolor_vertex>
#include <beginnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <defaultnormal_vertex>
#include <normal_vertex>
#include <begin_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>
#include <displacementmap_vertex>
#include <project_vertex>
#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
vViewPosition=-mvPosition.xyz;
#include <worldpos_vertex>
#include <envmap_vertex>
#include <shadowmap_vertex>
#include <fog_vertex>
}`,
  wf = `#define PHONG
uniform vec3 diffuse;uniform vec3 emissive;uniform vec3 specular;uniform float shininess;uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main(){
#include <clipping_planes_fragment>
vec4 diffuseColor=vec4(diffuse,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <specularmap_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
#include <emissivemap_fragment>
#include <lights_phong_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
vec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+reflectedLight.directSpecular+reflectedLight.indirectSpecular+totalEmissiveRadiance;
#include <envmap_fragment>
#include <output_fragment>
#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}`,
  Sf = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main(){
#include <uv_vertex>
#include <uv2_vertex>
#include <color_vertex>
#include <morphcolor_vertex>
#include <beginnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <defaultnormal_vertex>
#include <normal_vertex>
#include <begin_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>
#include <displacementmap_vertex>
#include <project_vertex>
#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
vViewPosition=-mvPosition.xyz;
#include <worldpos_vertex>
#include <shadowmap_vertex>
#include <fog_vertex>
#ifdef USE_TRANSMISSION
vWorldPosition=worldPosition.xyz;
#endif
}`,
  Mf = `#define STANDARD
#ifdef PHYSICAL
#define IOR
#define SPECULAR
#endif
uniform vec3 diffuse;uniform vec3 emissive;uniform float roughness;uniform float metalness;uniform float opacity;
#ifdef IOR
uniform float ior;
#endif
#ifdef SPECULAR
uniform float specularIntensity;uniform vec3 specularColor;
#ifdef USE_SPECULARINTENSITYMAP
uniform sampler2D specularIntensityMap;
#endif
#ifdef USE_SPECULARCOLORMAP
uniform sampler2D specularColorMap;
#endif
#endif
#ifdef USE_CLEARCOAT
uniform float clearcoat;uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
uniform float iridescence;uniform float iridescenceIOR;uniform float iridescenceThicknessMinimum;uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
uniform vec3 sheenColor;uniform float sheenRoughness;
#ifdef USE_SHEENCOLORMAP
uniform sampler2D sheenColorMap;
#endif
#ifdef USE_SHEENROUGHNESSMAP
uniform sampler2D sheenRoughnessMap;
#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main(){
#include <clipping_planes_fragment>
vec4 diffuseColor=vec4(diffuse,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <roughnessmap_fragment>
#include <metalnessmap_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
#include <clearcoat_normal_fragment_begin>
#include <clearcoat_normal_fragment_maps>
#include <emissivemap_fragment>
#include <lights_physical_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
vec3 totalDiffuse=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse;vec3 totalSpecular=reflectedLight.directSpecular+reflectedLight.indirectSpecular;
#include <transmission_fragment>
vec3 outgoingLight=totalDiffuse+totalSpecular+totalEmissiveRadiance;
#ifdef USE_SHEEN
float sheenEnergyComp=1.0-0.157*max3(material.sheenColor);outgoingLight=outgoingLight*sheenEnergyComp+sheenSpecular;
#endif
#ifdef USE_CLEARCOAT
float dotNVcc=saturate(dot(geometry.clearcoatNormal,geometry.viewDir));vec3 Fcc=F_Schlick(material.clearcoatF0,material.clearcoatF90,dotNVcc);outgoingLight=outgoingLight*(1.0-material.clearcoat*Fcc)+clearcoatSpecular*material.clearcoat;
#endif
#include <output_fragment>
#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}`,
  Cf = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main(){
#include <uv_vertex>
#include <uv2_vertex>
#include <color_vertex>
#include <morphcolor_vertex>
#include <beginnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <defaultnormal_vertex>
#include <normal_vertex>
#include <begin_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>
#include <displacementmap_vertex>
#include <project_vertex>
#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
vViewPosition=-mvPosition.xyz;
#include <worldpos_vertex>
#include <shadowmap_vertex>
#include <fog_vertex>
}`,
  Af = `#define TOON
uniform vec3 diffuse;uniform vec3 emissive;uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main(){
#include <clipping_planes_fragment>
vec4 diffuseColor=vec4(diffuse,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
#include <emissivemap_fragment>
#include <lights_toon_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
vec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+totalEmissiveRadiance;
#include <output_fragment>
#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}`,
  Tf = `uniform float size;uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main(){
#include <color_vertex>
#include <morphcolor_vertex>
#include <begin_vertex>
#include <morphtarget_vertex>
#include <project_vertex>
gl_PointSize=size;
#ifdef USE_SIZEATTENUATION
bool isPerspective=isPerspectiveMatrix(projectionMatrix);if(isPerspective)gl_PointSize*=(scale/-mvPosition.z);
#endif
#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
#include <worldpos_vertex>
#include <fog_vertex>
}`,
  Ef = `uniform vec3 diffuse;uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main(){
#include <clipping_planes_fragment>
vec3 outgoingLight=vec3(0.0);vec4 diffuseColor=vec4(diffuse,opacity);
#include <logdepthbuf_fragment>
#include <map_particle_fragment>
#include <color_fragment>
#include <alphatest_fragment>
outgoingLight=diffuseColor.rgb;
#include <output_fragment>
#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
}`,
  Lf = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main(){
#include <beginnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <defaultnormal_vertex>
#include <begin_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>
#include <project_vertex>
#include <worldpos_vertex>
#include <shadowmap_vertex>
#include <fog_vertex>
}`,
  Df = `uniform vec3 color;uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main(){gl_FragColor=vec4(color,opacity*(1.0-getShadowMask()));
#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
}`,
  Pf = `uniform float rotation;uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main(){
#include <uv_vertex>
vec4 mvPosition=modelViewMatrix*vec4(0.0,0.0,0.0,1.0);vec2 scale;scale.x=length(vec3(modelMatrix[0].x,modelMatrix[0].y,modelMatrix[0].z));scale.y=length(vec3(modelMatrix[1].x,modelMatrix[1].y,modelMatrix[1].z));
#ifndef USE_SIZEATTENUATION
bool isPerspective=isPerspectiveMatrix(projectionMatrix);if(isPerspective)scale*=-mvPosition.z;
#endif
vec2 alignedPosition=(position.xy-(center-vec2(0.5)))*scale;vec2 rotatedPosition;rotatedPosition.x=cos(rotation)*alignedPosition.x-sin(rotation)*alignedPosition.y;rotatedPosition.y=sin(rotation)*alignedPosition.x+cos(rotation)*alignedPosition.y;mvPosition.xy+=rotatedPosition;gl_Position=projectionMatrix*mvPosition;
#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
#include <fog_vertex>
}`,
  Rf = `uniform vec3 diffuse;uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main(){
#include <clipping_planes_fragment>
vec3 outgoingLight=vec3(0.0);vec4 diffuseColor=vec4(diffuse,opacity);
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
outgoingLight=diffuseColor.rgb;
#include <output_fragment>
#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
}`,
  Ee = {
    alphamap_fragment: su,
    alphamap_pars_fragment: nu,
    alphatest_fragment: ru,
    alphatest_pars_fragment: au,
    aomap_fragment: ou,
    aomap_pars_fragment: lu,
    begin_vertex: cu,
    beginnormal_vertex: hu,
    bsdfs: uu,
    iridescence_fragment: du,
    bumpmap_pars_fragment: fu,
    clipping_planes_fragment: pu,
    clipping_planes_pars_fragment: mu,
    clipping_planes_pars_vertex: gu,
    clipping_planes_vertex: vu,
    color_fragment: _u,
    color_pars_fragment: xu,
    color_pars_vertex: yu,
    color_vertex: bu,
    common: wu,
    cube_uv_reflection_fragment: Su,
    defaultnormal_vertex: Mu,
    displacementmap_pars_vertex: Cu,
    displacementmap_vertex: Au,
    emissivemap_fragment: Tu,
    emissivemap_pars_fragment: Eu,
    encodings_fragment: Lu,
    encodings_pars_fragment: Du,
    envmap_fragment: Pu,
    envmap_common_pars_fragment: Ru,
    envmap_pars_fragment: Iu,
    envmap_pars_vertex: Fu,
    envmap_physical_pars_fragment: qu,
    envmap_vertex: zu,
    fog_vertex: Uu,
    fog_pars_vertex: Bu,
    fog_fragment: Nu,
    fog_pars_fragment: ku,
    gradientmap_pars_fragment: Ou,
    lightmap_fragment: Gu,
    lightmap_pars_fragment: Vu,
    lights_lambert_vertex: Hu,
    lights_pars_begin: Wu,
    lights_toon_fragment: Xu,
    lights_toon_pars_fragment: ju,
    lights_phong_fragment: $u,
    lights_phong_pars_fragment: Yu,
    lights_physical_fragment: Zu,
    lights_physical_pars_fragment: Ku,
    lights_fragment_begin: Ju,
    lights_fragment_maps: Qu,
    lights_fragment_end: ed,
    logdepthbuf_fragment: td,
    logdepthbuf_pars_fragment: id,
    logdepthbuf_pars_vertex: sd,
    logdepthbuf_vertex: nd,
    map_fragment: rd,
    map_pars_fragment: ad,
    map_particle_fragment: od,
    map_particle_pars_fragment: ld,
    metalnessmap_fragment: cd,
    metalnessmap_pars_fragment: hd,
    morphcolor_vertex: ud,
    morphnormal_vertex: dd,
    morphtarget_pars_vertex: fd,
    morphtarget_vertex: pd,
    normal_fragment_begin: md,
    normal_fragment_maps: gd,
    normal_pars_fragment: vd,
    normal_pars_vertex: _d,
    normal_vertex: xd,
    normalmap_pars_fragment: yd,
    clearcoat_normal_fragment_begin: bd,
    clearcoat_normal_fragment_maps: wd,
    clearcoat_pars_fragment: Sd,
    iridescence_pars_fragment: Md,
    output_fragment: Cd,
    packing: Ad,
    premultiplied_alpha_fragment: Td,
    project_vertex: Ed,
    dithering_fragment: Ld,
    dithering_pars_fragment: Dd,
    roughnessmap_fragment: Pd,
    roughnessmap_pars_fragment: Rd,
    shadowmap_pars_fragment: Id,
    shadowmap_pars_vertex: Fd,
    shadowmap_vertex: zd,
    shadowmask_pars_fragment: Ud,
    skinbase_vertex: Bd,
    skinning_pars_vertex: Nd,
    skinning_vertex: kd,
    skinnormal_vertex: Od,
    specularmap_fragment: Gd,
    specularmap_pars_fragment: Vd,
    tonemapping_fragment: Hd,
    tonemapping_pars_fragment: Wd,
    transmission_fragment: qd,
    transmission_pars_fragment: Xd,
    uv_pars_fragment: jd,
    uv_pars_vertex: $d,
    uv_vertex: Yd,
    uv2_pars_fragment: Zd,
    uv2_pars_vertex: Kd,
    uv2_vertex: Jd,
    worldpos_vertex: Qd,
    background_vert: ef,
    background_frag: tf,
    cube_vert: sf,
    cube_frag: nf,
    depth_vert: rf,
    depth_frag: af,
    distanceRGBA_vert: of,
    distanceRGBA_frag: lf,
    equirect_vert: cf,
    equirect_frag: hf,
    linedashed_vert: uf,
    linedashed_frag: df,
    meshbasic_vert: ff,
    meshbasic_frag: pf,
    meshlambert_vert: mf,
    meshlambert_frag: gf,
    meshmatcap_vert: vf,
    meshmatcap_frag: _f,
    meshnormal_vert: xf,
    meshnormal_frag: yf,
    meshphong_vert: bf,
    meshphong_frag: wf,
    meshphysical_vert: Sf,
    meshphysical_frag: Mf,
    meshtoon_vert: Cf,
    meshtoon_frag: Af,
    points_vert: Tf,
    points_frag: Ef,
    shadow_vert: Lf,
    shadow_frag: Df,
    sprite_vert: Pf,
    sprite_frag: Rf,
  },
  Z = {
    common: {
      diffuse: { value: new L(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      uvTransform: { value: new Dt() },
      uv2Transform: { value: new Dt() },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
    },
    specularmap: { specularMap: { value: null } },
    envmap: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
    lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
    emissivemap: { emissiveMap: { value: null } },
    bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
    normalmap: {
      normalMap: { value: null },
      normalScale: { value: new me(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    roughnessmap: { roughnessMap: { value: null } },
    metalnessmap: { metalnessMap: { value: null } },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new L(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotShadowMap: { value: [] },
      spotShadowMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new L(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new Dt() },
    },
    sprite: {
      diffuse: { value: new L(16777215) },
      opacity: { value: 1 },
      center: { value: new me(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new Dt() },
    },
  },
  Zt = {
    basic: {
      uniforms: lt([
        Z.common,
        Z.specularmap,
        Z.envmap,
        Z.aomap,
        Z.lightmap,
        Z.fog,
      ]),
      vertexShader: Ee.meshbasic_vert,
      fragmentShader: Ee.meshbasic_frag,
    },
    lambert: {
      uniforms: lt([
        Z.common,
        Z.specularmap,
        Z.envmap,
        Z.aomap,
        Z.lightmap,
        Z.emissivemap,
        Z.fog,
        Z.lights,
        { emissive: { value: new L(0) } },
      ]),
      vertexShader: Ee.meshlambert_vert,
      fragmentShader: Ee.meshlambert_frag,
    },
    phong: {
      uniforms: lt([
        Z.common,
        Z.specularmap,
        Z.envmap,
        Z.aomap,
        Z.lightmap,
        Z.emissivemap,
        Z.bumpmap,
        Z.normalmap,
        Z.displacementmap,
        Z.fog,
        Z.lights,
        {
          emissive: { value: new L(0) },
          specular: { value: new L(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Ee.meshphong_vert,
      fragmentShader: Ee.meshphong_frag,
    },
    standard: {
      uniforms: lt([
        Z.common,
        Z.envmap,
        Z.aomap,
        Z.lightmap,
        Z.emissivemap,
        Z.bumpmap,
        Z.normalmap,
        Z.displacementmap,
        Z.roughnessmap,
        Z.metalnessmap,
        Z.fog,
        Z.lights,
        {
          emissive: { value: new L(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Ee.meshphysical_vert,
      fragmentShader: Ee.meshphysical_frag,
    },
    toon: {
      uniforms: lt([
        Z.common,
        Z.aomap,
        Z.lightmap,
        Z.emissivemap,
        Z.bumpmap,
        Z.normalmap,
        Z.displacementmap,
        Z.gradientmap,
        Z.fog,
        Z.lights,
        { emissive: { value: new L(0) } },
      ]),
      vertexShader: Ee.meshtoon_vert,
      fragmentShader: Ee.meshtoon_frag,
    },
    matcap: {
      uniforms: lt([
        Z.common,
        Z.bumpmap,
        Z.normalmap,
        Z.displacementmap,
        Z.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Ee.meshmatcap_vert,
      fragmentShader: Ee.meshmatcap_frag,
    },
    points: {
      uniforms: lt([Z.points, Z.fog]),
      vertexShader: Ee.points_vert,
      fragmentShader: Ee.points_frag,
    },
    dashed: {
      uniforms: lt([
        Z.common,
        Z.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Ee.linedashed_vert,
      fragmentShader: Ee.linedashed_frag,
    },
    depth: {
      uniforms: lt([Z.common, Z.displacementmap]),
      vertexShader: Ee.depth_vert,
      fragmentShader: Ee.depth_frag,
    },
    normal: {
      uniforms: lt([
        Z.common,
        Z.bumpmap,
        Z.normalmap,
        Z.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Ee.meshnormal_vert,
      fragmentShader: Ee.meshnormal_frag,
    },
    sprite: {
      uniforms: lt([Z.sprite, Z.fog]),
      vertexShader: Ee.sprite_vert,
      fragmentShader: Ee.sprite_frag,
    },
    background: {
      uniforms: { uvTransform: { value: new Dt() }, t2D: { value: null } },
      vertexShader: Ee.background_vert,
      fragmentShader: Ee.background_frag,
    },
    cube: {
      uniforms: lt([Z.envmap, { opacity: { value: 1 } }]),
      vertexShader: Ee.cube_vert,
      fragmentShader: Ee.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Ee.equirect_vert,
      fragmentShader: Ee.equirect_frag,
    },
    distanceRGBA: {
      uniforms: lt([
        Z.common,
        Z.displacementmap,
        {
          referencePosition: { value: new C() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Ee.distanceRGBA_vert,
      fragmentShader: Ee.distanceRGBA_frag,
    },
    shadow: {
      uniforms: lt([
        Z.lights,
        Z.fog,
        { color: { value: new L(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Ee.shadow_vert,
      fragmentShader: Ee.shadow_frag,
    },
  };
Zt.physical = {
  uniforms: lt([
    Zt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: new me(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: new L(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: new me() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new L(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: new L(1, 1, 1) },
      specularColorMap: { value: null },
    },
  ]),
  vertexShader: Ee.meshphysical_vert,
  fragmentShader: Ee.meshphysical_frag,
};
function If(s, e, t, i, n, r) {
  const a = new L(0);
  let o = n === !0 ? 0 : 1,
    l,
    c,
    h = null,
    d = 0,
    u = null;
  function m(p, f) {
    let v = !1,
      w = f.isScene === !0 ? f.background : null;
    w && w.isTexture && (w = e.get(w));
    const S = s.xr,
      x = S.getSession && S.getSession();
    x && x.environmentBlendMode === "additive" && (w = null),
      w === null ? g(a, o) : w && w.isColor && (g(w, 1), (v = !0)),
      (s.autoClear || v) &&
        s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil),
      w && (w.isCubeTexture || w.mapping === Nn)
        ? (c === void 0 &&
            ((c = new rt(
              new Zs(1, 1, 1),
              new gt({
                name: "BackgroundCubeMaterial",
                uniforms: Ts(Zt.cube.uniforms),
                vertexShader: Zt.cube.vertexShader,
                fragmentShader: Zt.cube.fragmentShader,
                side: Pt,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            c.geometry.deleteAttribute("normal"),
            c.geometry.deleteAttribute("uv"),
            (c.onBeforeRender = function (A, D, R) {
              this.matrixWorld.copyPosition(R.matrixWorld);
            }),
            Object.defineProperty(c.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            i.update(c)),
          (c.material.uniforms.envMap.value = w),
          (c.material.uniforms.flipEnvMap.value =
            w.isCubeTexture && w.isRenderTargetTexture === !1 ? -1 : 1),
          (h !== w || d !== w.version || u !== s.toneMapping) &&
            ((c.material.needsUpdate = !0),
            (h = w),
            (d = w.version),
            (u = s.toneMapping)),
          c.layers.enableAll(),
          p.unshift(c, c.geometry, c.material, 0, 0, null))
        : w &&
          w.isTexture &&
          (l === void 0 &&
            ((l = new rt(
              new Ks(2, 2),
              new gt({
                name: "BackgroundMaterial",
                uniforms: Ts(Zt.background.uniforms),
                vertexShader: Zt.background.vertexShader,
                fragmentShader: Zt.background.fragmentShader,
                side: ws,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            l.geometry.deleteAttribute("normal"),
            Object.defineProperty(l.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            i.update(l)),
          (l.material.uniforms.t2D.value = w),
          w.matrixAutoUpdate === !0 && w.updateMatrix(),
          l.material.uniforms.uvTransform.value.copy(w.matrix),
          (h !== w || d !== w.version || u !== s.toneMapping) &&
            ((l.material.needsUpdate = !0),
            (h = w),
            (d = w.version),
            (u = s.toneMapping)),
          l.layers.enableAll(),
          p.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function g(p, f) {
    t.buffers.color.setClear(p.r, p.g, p.b, f, r);
  }
  return {
    getClearColor: function () {
      return a;
    },
    setClearColor: function (p, f = 1) {
      a.set(p), (o = f), g(a, o);
    },
    getClearAlpha: function () {
      return o;
    },
    setClearAlpha: function (p) {
      (o = p), g(a, o);
    },
    render: m,
  };
}
function Ff(s, e, t, i) {
  const n = s.getParameter(34921),
    r = i.isWebGL2 ? null : e.get("OES_vertex_array_object"),
    a = i.isWebGL2 || r !== null,
    o = {},
    l = f(null);
  let c = l,
    h = !1;
  function d(I, q, G, X, j) {
    let U = !1;
    if (a) {
      const V = p(X, G, q);
      c !== V && ((c = V), m(c.object)),
        (U = v(I, X, G, j)),
        U && w(I, X, G, j);
    } else {
      const V = q.wireframe === !0;
      (c.geometry !== X.id || c.program !== G.id || c.wireframe !== V) &&
        ((c.geometry = X.id), (c.program = G.id), (c.wireframe = V), (U = !0));
    }
    j !== null && t.update(j, 34963),
      (U || h) &&
        ((h = !1),
        b(I, q, G, X),
        j !== null && s.bindBuffer(34963, t.get(j).buffer));
  }
  function u() {
    return i.isWebGL2 ? s.createVertexArray() : r.createVertexArrayOES();
  }
  function m(I) {
    return i.isWebGL2 ? s.bindVertexArray(I) : r.bindVertexArrayOES(I);
  }
  function g(I) {
    return i.isWebGL2 ? s.deleteVertexArray(I) : r.deleteVertexArrayOES(I);
  }
  function p(I, q, G) {
    const X = G.wireframe === !0;
    let j = o[I.id];
    j === void 0 && ((j = {}), (o[I.id] = j));
    let U = j[q.id];
    U === void 0 && ((U = {}), (j[q.id] = U));
    let V = U[X];
    return V === void 0 && ((V = f(u())), (U[X] = V)), V;
  }
  function f(I) {
    const q = [],
      G = [],
      X = [];
    for (let j = 0; j < n; j++) (q[j] = 0), (G[j] = 0), (X[j] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: q,
      enabledAttributes: G,
      attributeDivisors: X,
      object: I,
      attributes: {},
      index: null,
    };
  }
  function v(I, q, G, X) {
    const j = c.attributes,
      U = q.attributes;
    let V = 0;
    const Q = G.getAttributes();
    for (const $ in Q)
      if (Q[$].location >= 0) {
        const he = j[$];
        let Y = U[$];
        if (
          (Y === void 0 &&
            ($ === "instanceMatrix" &&
              I.instanceMatrix &&
              (Y = I.instanceMatrix),
            $ === "instanceColor" && I.instanceColor && (Y = I.instanceColor)),
          he === void 0 || he.attribute !== Y || (Y && he.data !== Y.data))
        )
          return !0;
        V++;
      }
    return c.attributesNum !== V || c.index !== X;
  }
  function w(I, q, G, X) {
    const j = {},
      U = q.attributes;
    let V = 0;
    const Q = G.getAttributes();
    for (const $ in Q)
      if (Q[$].location >= 0) {
        let he = U[$];
        he === void 0 &&
          ($ === "instanceMatrix" &&
            I.instanceMatrix &&
            (he = I.instanceMatrix),
          $ === "instanceColor" && I.instanceColor && (he = I.instanceColor));
        const Y = {};
        (Y.attribute = he),
          he && he.data && (Y.data = he.data),
          (j[$] = Y),
          V++;
      }
    (c.attributes = j), (c.attributesNum = V), (c.index = X);
  }
  function S() {
    const I = c.newAttributes;
    for (let q = 0, G = I.length; q < G; q++) I[q] = 0;
  }
  function x(I) {
    A(I, 0);
  }
  function A(I, q) {
    const G = c.newAttributes,
      X = c.enabledAttributes,
      j = c.attributeDivisors;
    (G[I] = 1),
      X[I] === 0 && (s.enableVertexAttribArray(I), (X[I] = 1)),
      j[I] !== q &&
        ((i.isWebGL2 ? s : e.get("ANGLE_instanced_arrays"))[
          i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](I, q),
        (j[I] = q));
  }
  function D() {
    const I = c.newAttributes,
      q = c.enabledAttributes;
    for (let G = 0, X = q.length; G < X; G++)
      q[G] !== I[G] && (s.disableVertexAttribArray(G), (q[G] = 0));
  }
  function R(I, q, G, X, j, U) {
    i.isWebGL2 === !0 && (G === 5124 || G === 5125)
      ? s.vertexAttribIPointer(I, q, G, j, U)
      : s.vertexAttribPointer(I, q, G, X, j, U);
  }
  function b(I, q, G, X) {
    if (
      i.isWebGL2 === !1 &&
      (I.isInstancedMesh || X.isInstancedBufferGeometry) &&
      e.get("ANGLE_instanced_arrays") === null
    )
      return;
    S();
    const j = X.attributes,
      U = G.getAttributes(),
      V = q.defaultAttributeValues;
    for (const Q in U) {
      const $ = U[Q];
      if ($.location >= 0) {
        let se = j[Q];
        if (
          (se === void 0 &&
            (Q === "instanceMatrix" &&
              I.instanceMatrix &&
              (se = I.instanceMatrix),
            Q === "instanceColor" && I.instanceColor && (se = I.instanceColor)),
          se !== void 0)
        ) {
          const he = se.normalized,
            Y = se.itemSize,
            F = t.get(se);
          if (F === void 0) continue;
          const ze = F.buffer,
            Me = F.type,
            we = F.bytesPerElement;
          if (se.isInterleavedBufferAttribute) {
            const le = se.data,
              Oe = le.stride,
              Le = se.offset;
            if (le.isInstancedInterleavedBuffer) {
              for (let _e = 0; _e < $.locationSize; _e++)
                A($.location + _e, le.meshPerAttribute);
              I.isInstancedMesh !== !0 &&
                X._maxInstanceCount === void 0 &&
                (X._maxInstanceCount = le.meshPerAttribute * le.count);
            } else
              for (let _e = 0; _e < $.locationSize; _e++) x($.location + _e);
            s.bindBuffer(34962, ze);
            for (let _e = 0; _e < $.locationSize; _e++)
              R(
                $.location + _e,
                Y / $.locationSize,
                Me,
                he,
                Oe * we,
                (Le + (Y / $.locationSize) * _e) * we
              );
          } else {
            if (se.isInstancedBufferAttribute) {
              for (let le = 0; le < $.locationSize; le++)
                A($.location + le, se.meshPerAttribute);
              I.isInstancedMesh !== !0 &&
                X._maxInstanceCount === void 0 &&
                (X._maxInstanceCount = se.meshPerAttribute * se.count);
            } else
              for (let le = 0; le < $.locationSize; le++) x($.location + le);
            s.bindBuffer(34962, ze);
            for (let le = 0; le < $.locationSize; le++)
              R(
                $.location + le,
                Y / $.locationSize,
                Me,
                he,
                Y * we,
                (Y / $.locationSize) * le * we
              );
          }
        } else if (V !== void 0) {
          const he = V[Q];
          if (he !== void 0)
            switch (he.length) {
              case 2:
                s.vertexAttrib2fv($.location, he);
                break;
              case 3:
                s.vertexAttrib3fv($.location, he);
                break;
              case 4:
                s.vertexAttrib4fv($.location, he);
                break;
              default:
                s.vertexAttrib1fv($.location, he);
            }
        }
      }
    }
    D();
  }
  function E() {
    ee();
    for (const I in o) {
      const q = o[I];
      for (const G in q) {
        const X = q[G];
        for (const j in X) g(X[j].object), delete X[j];
        delete q[G];
      }
      delete o[I];
    }
  }
  function k(I) {
    if (o[I.id] === void 0) return;
    const q = o[I.id];
    for (const G in q) {
      const X = q[G];
      for (const j in X) g(X[j].object), delete X[j];
      delete q[G];
    }
    delete o[I.id];
  }
  function B(I) {
    for (const q in o) {
      const G = o[q];
      if (G[I.id] === void 0) continue;
      const X = G[I.id];
      for (const j in X) g(X[j].object), delete X[j];
      delete G[I.id];
    }
  }
  function ee() {
    re(), (h = !0), c !== l && ((c = l), m(c.object));
  }
  function re() {
    (l.geometry = null), (l.program = null), (l.wireframe = !1);
  }
  return {
    setup: d,
    reset: ee,
    resetDefaultState: re,
    dispose: E,
    releaseStatesOfGeometry: k,
    releaseStatesOfProgram: B,
    initAttributes: S,
    enableAttribute: x,
    disableUnusedAttributes: D,
  };
}
function zf(s, e, t, i) {
  const n = i.isWebGL2;
  let r;
  function a(c) {
    r = c;
  }
  function o(c, h) {
    s.drawArrays(r, c, h), t.update(h, r, 1);
  }
  function l(c, h, d) {
    if (d === 0) return;
    let u, m;
    if (n) (u = s), (m = "drawArraysInstanced");
    else if (
      ((u = e.get("ANGLE_instanced_arrays")),
      (m = "drawArraysInstancedANGLE"),
      u === null)
    ) {
      console.error(
        "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    u[m](r, c, h, d), t.update(h, r, d);
  }
  (this.setMode = a), (this.render = o), (this.renderInstances = l);
}
function Uf(s, e, t) {
  let i;
  function n() {
    if (i !== void 0) return i;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const R = e.get("EXT_texture_filter_anisotropic");
      i = s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else i = 0;
    return i;
  }
  function r(R) {
    if (R === "highp") {
      if (
        s.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
        s.getShaderPrecisionFormat(35632, 36338).precision > 0
      )
        return "highp";
      R = "mediump";
    }
    return R === "mediump" &&
      s.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
      s.getShaderPrecisionFormat(35632, 36337).precision > 0
      ? "mediump"
      : "lowp";
  }
  const a =
    (typeof WebGL2RenderingContext != "undefined" &&
      s instanceof WebGL2RenderingContext) ||
    (typeof WebGL2ComputeRenderingContext != "undefined" &&
      s instanceof WebGL2ComputeRenderingContext);
  let o = t.precision !== void 0 ? t.precision : "highp";
  const l = r(o);
  l !== o &&
    (console.warn(
      "THREE.WebGLRenderer:",
      o,
      "not supported, using",
      l,
      "instead."
    ),
    (o = l));
  const c = a || e.has("WEBGL_draw_buffers"),
    h = t.logarithmicDepthBuffer === !0,
    d = s.getParameter(34930),
    u = s.getParameter(35660),
    m = s.getParameter(3379),
    g = s.getParameter(34076),
    p = s.getParameter(34921),
    f = s.getParameter(36347),
    v = s.getParameter(36348),
    w = s.getParameter(36349),
    S = u > 0,
    x = a || e.has("OES_texture_float"),
    A = S && x,
    D = a ? s.getParameter(36183) : 0;
  return {
    isWebGL2: a,
    drawBuffers: c,
    getMaxAnisotropy: n,
    getMaxPrecision: r,
    precision: o,
    logarithmicDepthBuffer: h,
    maxTextures: d,
    maxVertexTextures: u,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: p,
    maxVertexUniforms: f,
    maxVaryings: v,
    maxFragmentUniforms: w,
    vertexTextures: S,
    floatFragmentTextures: x,
    floatVertexTextures: A,
    maxSamples: D,
  };
}
function Bf(s) {
  const e = this;
  let t = null,
    i = 0,
    n = !1,
    r = !1;
  const a = new wi(),
    o = new Dt(),
    l = { value: null, needsUpdate: !1 };
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (d, u, m) {
      const g = d.length !== 0 || u || i !== 0 || n;
      return (n = u), (t = h(d, m, 0)), (i = d.length), g;
    }),
    (this.beginShadows = function () {
      (r = !0), h(null);
    }),
    (this.endShadows = function () {
      (r = !1), c();
    }),
    (this.setState = function (d, u, m) {
      const g = d.clippingPlanes,
        p = d.clipIntersection,
        f = d.clipShadows,
        v = s.get(d);
      if (!n || g === null || g.length === 0 || (r && !f)) r ? h(null) : c();
      else {
        const w = r ? 0 : i,
          S = w * 4;
        let x = v.clippingState || null;
        (l.value = x), (x = h(g, u, S, m));
        for (let A = 0; A !== S; ++A) x[A] = t[A];
        (v.clippingState = x),
          (this.numIntersection = p ? this.numPlanes : 0),
          (this.numPlanes += w);
      }
    });
  function c() {
    l.value !== t && ((l.value = t), (l.needsUpdate = i > 0)),
      (e.numPlanes = i),
      (e.numIntersection = 0);
  }
  function h(d, u, m, g) {
    const p = d !== null ? d.length : 0;
    let f = null;
    if (p !== 0) {
      if (((f = l.value), g !== !0 || f === null)) {
        const v = m + p * 4,
          w = u.matrixWorldInverse;
        o.getNormalMatrix(w),
          (f === null || f.length < v) && (f = new Float32Array(v));
        for (let S = 0, x = m; S !== p; ++S, x += 4)
          a.copy(d[S]).applyMatrix4(w, o),
            a.normal.toArray(f, x),
            (f[x + 3] = a.constant);
      }
      (l.value = f), (l.needsUpdate = !0);
    }
    return (e.numPlanes = p), (e.numIntersection = 0), f;
  }
}
function Nf(s) {
  let e = new WeakMap();
  function t(a, o) {
    return o === Jr ? (a.mapping = Ms) : o === Qr && (a.mapping = Cs), a;
  }
  function i(a) {
    if (a && a.isTexture && a.isRenderTargetTexture === !1) {
      const o = a.mapping;
      if (o === Jr || o === Qr)
        if (e.has(a)) {
          const l = e.get(a).texture;
          return t(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new Qh(l.height / 2);
            return (
              c.fromEquirectangularTexture(s, a),
              e.set(a, c),
              a.addEventListener("dispose", n),
              t(c.texture, a.mapping)
            );
          } else return null;
        }
    }
    return a;
  }
  function n(a) {
    const o = a.target;
    o.removeEventListener("dispose", n);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function r() {
    e = new WeakMap();
  }
  return { get: i, dispose: r };
}
class ba extends Ql {
  constructor(e = -1, t = 1, i = 1, n = -1, r = 0.1, a = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = i),
      (this.bottom = n),
      (this.near = r),
      (this.far = a),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, i, n, r, a) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = i),
      (this.view.offsetY = n),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      i = (this.right + this.left) / 2,
      n = (this.top + this.bottom) / 2;
    let r = i - e,
      a = i + e,
      o = n + t,
      l = n - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (r += c * this.view.offsetX),
        (a = r + c * this.view.width),
        (o -= h * this.view.offsetY),
        (l = o - h * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(r, a, o, l, this.near, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const vs = 4,
  Ao = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  Ni = 20,
  br = new ba(),
  To = new L();
let wr = null;
const Ui = (1 + Math.sqrt(5)) / 2,
  us = 1 / Ui,
  Eo = [
    new C(1, 1, 1),
    new C(-1, 1, 1),
    new C(1, 1, -1),
    new C(-1, 1, -1),
    new C(0, Ui, us),
    new C(0, Ui, -us),
    new C(us, 0, Ui),
    new C(-us, 0, Ui),
    new C(Ui, us, 0),
    new C(-Ui, us, 0),
  ];
class Lo {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, i = 0.1, n = 100) {
    (wr = this._renderer.getRenderTarget()), this._setSize(256);
    const r = this._allocateTargets();
    return (
      (r.depthBuffer = !0),
      this._sceneToCubeUV(e, i, n, r),
      t > 0 && this._blur(r, 0, 0, t),
      this._applyPMREM(r),
      this._cleanup(r),
      r
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = Ro()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = Po()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(wr),
      (e.scissorTest = !1),
      Cn(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Ms || e.mapping === Cs
      ? this._setSize(
          e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (wr = this._renderer.getRenderTarget());
    const i = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, i), this._applyPMREM(i), this._cleanup(i), i
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      i = {
        magFilter: bt,
        minFilter: bt,
        generateMipmaps: !1,
        type: js,
        format: Ot,
        encoding: Xi,
        depthBuffer: !1,
      },
      n = Do(e, t, i);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = Do(e, t, i));
      const { _lodMax: r } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = kf(r)),
        (this._blurMaterial = Of(r, e, t));
    }
    return n;
  }
  _compileMaterial(e) {
    const t = new rt(this._lodPlanes[0], e);
    this._renderer.compile(t, br);
  }
  _sceneToCubeUV(e, t, i, n) {
    const o = new wt(90, 1, t, i),
      l = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      h = this._renderer,
      d = h.autoClear,
      u = h.toneMapping;
    h.getClearColor(To), (h.toneMapping = ci), (h.autoClear = !1);
    const m = new Zl({
        name: "PMREM.Background",
        side: Pt,
        depthWrite: !1,
        depthTest: !1,
      }),
      g = new rt(new Zs(), m);
    let p = !1;
    const f = e.background;
    f
      ? f.isColor && (m.color.copy(f), (e.background = null), (p = !0))
      : (m.color.copy(To), (p = !0));
    for (let v = 0; v < 6; v++) {
      const w = v % 3;
      w === 0
        ? (o.up.set(0, l[v], 0), o.lookAt(c[v], 0, 0))
        : w === 1
        ? (o.up.set(0, 0, l[v]), o.lookAt(0, c[v], 0))
        : (o.up.set(0, l[v], 0), o.lookAt(0, 0, c[v]));
      const S = this._cubeSize;
      Cn(n, w * S, v > 2 ? S : 0, S, S),
        h.setRenderTarget(n),
        p && h.render(g, o),
        h.render(e, o);
    }
    g.geometry.dispose(),
      g.material.dispose(),
      (h.toneMapping = u),
      (h.autoClear = d),
      (e.background = f);
  }
  _textureToCubeUV(e, t) {
    const i = this._renderer,
      n = e.mapping === Ms || e.mapping === Cs;
    n
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ro()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = Po());
    const r = n ? this._cubemapMaterial : this._equirectMaterial,
      a = new rt(this._lodPlanes[0], r),
      o = r.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    Cn(t, 0, 0, 3 * l, 2 * l), i.setRenderTarget(t), i.render(a, br);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      i = t.autoClear;
    t.autoClear = !1;
    for (let n = 1; n < this._lodPlanes.length; n++) {
      const r = Math.sqrt(
          this._sigmas[n] * this._sigmas[n] -
            this._sigmas[n - 1] * this._sigmas[n - 1]
        ),
        a = Eo[(n - 1) % Eo.length];
      this._blur(e, n - 1, n, r, a);
    }
    t.autoClear = i;
  }
  _blur(e, t, i, n, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, i, n, "latitudinal", r),
      this._halfBlur(a, e, i, i, n, "longitudinal", r);
  }
  _halfBlur(e, t, i, n, r, a, o) {
    const l = this._renderer,
      c = this._blurMaterial;
    a !== "latitudinal" &&
      a !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    const h = 3,
      d = new rt(this._lodPlanes[n], c),
      u = c.uniforms,
      m = this._sizeLods[i] - 1,
      g = isFinite(r) ? Math.PI / (2 * m) : (2 * Math.PI) / (2 * Ni - 1),
      p = r / g,
      f = isFinite(r) ? 1 + Math.floor(h * p) : Ni;
    f > Ni &&
      console.warn(
        `sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Ni}`
      );
    const v = [];
    let w = 0;
    for (let R = 0; R < Ni; ++R) {
      const b = R / p,
        E = Math.exp((-b * b) / 2);
      v.push(E), R === 0 ? (w += E) : R < f && (w += 2 * E);
    }
    for (let R = 0; R < v.length; R++) v[R] = v[R] / w;
    (u.envMap.value = e.texture),
      (u.samples.value = f),
      (u.weights.value = v),
      (u.latitudinal.value = a === "latitudinal"),
      o && (u.poleAxis.value = o);
    const { _lodMax: S } = this;
    (u.dTheta.value = g), (u.mipInt.value = S - i);
    const x = this._sizeLods[n],
      A = 3 * x * (n > S - vs ? n - S + vs : 0),
      D = 4 * (this._cubeSize - x);
    Cn(t, A, D, 3 * x, 2 * x), l.setRenderTarget(t), l.render(d, br);
  }
}
function kf(s) {
  const e = [],
    t = [],
    i = [];
  let n = s;
  const r = s - vs + 1 + Ao.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, n);
    t.push(o);
    let l = 1 / o;
    a > s - vs ? (l = Ao[a - s + vs - 1]) : a === 0 && (l = 0), i.push(l);
    const c = 1 / (o - 2),
      h = -c,
      d = 1 + c,
      u = [h, h, d, h, d, d, h, h, d, d, h, d],
      m = 6,
      g = 6,
      p = 3,
      f = 2,
      v = 1,
      w = new Float32Array(p * g * m),
      S = new Float32Array(f * g * m),
      x = new Float32Array(v * g * m);
    for (let D = 0; D < m; D++) {
      const R = ((D % 3) * 2) / 3 - 1,
        b = D > 2 ? 0 : -1,
        E = [
          R,
          b,
          0,
          R + 2 / 3,
          b,
          0,
          R + 2 / 3,
          b + 1,
          0,
          R,
          b,
          0,
          R + 2 / 3,
          b + 1,
          0,
          R,
          b + 1,
          0,
        ];
      w.set(E, p * g * D), S.set(u, f * g * D);
      const k = [D, D, D, D, D, D];
      x.set(k, v * g * D);
    }
    const A = new Vt();
    A.setAttribute("position", new Et(w, p)),
      A.setAttribute("uv", new Et(S, f)),
      A.setAttribute("faceIndex", new Et(x, v)),
      e.push(A),
      n > vs && n--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: i };
}
function Do(s, e, t) {
  const i = new Ei(s, e, t);
  return (
    (i.texture.mapping = Nn),
    (i.texture.name = "PMREM.cubeUv"),
    (i.scissorTest = !0),
    i
  );
}
function Cn(s, e, t, i, n) {
  s.viewport.set(e, t, i, n), s.scissor.set(e, t, i, n);
}
function Of(s, e, t) {
  const i = new Float32Array(Ni),
    n = new C(0, 1, 0);
  return new gt({
    name: "SphericalGaussianBlur",
    defines: {
      n: Ni,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${s}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: i },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: n },
    },
    vertexShader: wa(),
    fragmentShader: `precision mediump float;precision mediump int;varying vec3 vOutputDirection;uniform sampler2D envMap;uniform int samples;uniform float weights[n];uniform bool latitudinal;uniform float dTheta;uniform float mipInt;uniform vec3 poleAxis;
#define ENVMAP_TYPE_CUBE_UV
#include <cube_uv_reflection_fragment>
vec3 getSample(float theta,vec3 axis){float cosTheta=cos(theta);vec3 sampleDirection=vOutputDirection*cosTheta+cross(axis,vOutputDirection)*sin(theta)+axis*dot(axis,vOutputDirection)*(1.0-cosTheta);return bilinearCubeUV(envMap,sampleDirection,mipInt);}void main(){vec3 axis=latitudinal?poleAxis:cross(poleAxis,vOutputDirection);if(all(equal(axis,vec3(0.0)))){axis=vec3(vOutputDirection.z,0.0,-vOutputDirection.x);}axis=normalize(axis);gl_FragColor=vec4(0.0,0.0,0.0,1.0);gl_FragColor.rgb+=weights[0]*getSample(0.0,axis);for(int i=1;i<n;i++){if(i>=samples){break;}float theta=dTheta*float(i);gl_FragColor.rgb+=weights[i]*getSample(-1.0*theta,axis);gl_FragColor.rgb+=weights[i]*getSample(theta,axis);}}`,
    blending: Mi,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Po() {
  return new gt({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: wa(),
    fragmentShader: `precision mediump float;precision mediump int;varying vec3 vOutputDirection;uniform sampler2D envMap;
#include <common>
void main(){vec3 outputDirection=normalize(vOutputDirection);vec2 uv=equirectUv(outputDirection);gl_FragColor=vec4(texture2D(envMap,uv).rgb,1.0);}`,
    blending: Mi,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Ro() {
  return new gt({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: wa(),
    fragmentShader:
      "precision mediump float;precision mediump int;uniform float flipEnvMap;varying vec3 vOutputDirection;uniform samplerCube envMap;void main(){gl_FragColor=textureCube(envMap,vec3(flipEnvMap*vOutputDirection.x,vOutputDirection.yz));}",
    blending: Mi,
    depthTest: !1,
    depthWrite: !1,
  });
}
function wa() {
  return "precision mediump float;precision mediump int;attribute float faceIndex;varying vec3 vOutputDirection;vec3 getDirection(vec2 uv,float face){uv=2.0*uv-1.0;vec3 direction=vec3(uv,1.0);if(face==0.0){direction=direction.zyx;}else if(face==1.0){direction=direction.xzy;direction.xz*=-1.0;}else if(face==2.0){direction.x*=-1.0;}else if(face==3.0){direction=direction.zyx;direction.xz*=-1.0;}else if(face==4.0){direction=direction.xzy;direction.xy*=-1.0;}else if(face==5.0){direction.z*=-1.0;}return direction;}void main(){vOutputDirection=getDirection(uv,faceIndex);gl_Position=vec4(position,1.0);}";
}
function Gf(s) {
  let e = new WeakMap(),
    t = null;
  function i(o) {
    if (o && o.isTexture) {
      const l = o.mapping,
        c = l === Jr || l === Qr,
        h = l === Ms || l === Cs;
      if (c || h)
        if (o.isRenderTargetTexture && o.needsPMREMUpdate === !0) {
          o.needsPMREMUpdate = !1;
          let d = e.get(o);
          return (
            t === null && (t = new Lo(s)),
            (d = c ? t.fromEquirectangular(o, d) : t.fromCubemap(o, d)),
            e.set(o, d),
            d.texture
          );
        } else {
          if (e.has(o)) return e.get(o).texture;
          {
            const d = o.image;
            if ((c && d && d.height > 0) || (h && d && n(d))) {
              t === null && (t = new Lo(s));
              const u = c ? t.fromEquirectangular(o) : t.fromCubemap(o);
              return e.set(o, u), o.addEventListener("dispose", r), u.texture;
            } else return null;
          }
        }
    }
    return o;
  }
  function n(o) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++) o[h] !== void 0 && l++;
    return l === c;
  }
  function r(o) {
    const l = o.target;
    l.removeEventListener("dispose", r);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: i, dispose: a };
}
function Vf(s) {
  const e = {};
  function t(i) {
    if (e[i] !== void 0) return e[i];
    let n;
    switch (i) {
      case "WEBGL_depth_texture":
        n =
          s.getExtension("WEBGL_depth_texture") ||
          s.getExtension("MOZ_WEBGL_depth_texture") ||
          s.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        n =
          s.getExtension("EXT_texture_filter_anisotropic") ||
          s.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        n =
          s.getExtension("WEBGL_compressed_texture_s3tc") ||
          s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        n =
          s.getExtension("WEBGL_compressed_texture_pvrtc") ||
          s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        n = s.getExtension(i);
    }
    return (e[i] = n), n;
  }
  return {
    has: function (i) {
      return t(i) !== null;
    },
    init: function (i) {
      i.isWebGL2
        ? t("EXT_color_buffer_float")
        : (t("WEBGL_depth_texture"),
          t("OES_texture_float"),
          t("OES_texture_half_float"),
          t("OES_texture_half_float_linear"),
          t("OES_standard_derivatives"),
          t("OES_element_index_uint"),
          t("OES_vertex_array_object"),
          t("ANGLE_instanced_arrays")),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture");
    },
    get: function (i) {
      const n = t(i);
      return (
        n === null &&
          console.warn(
            "THREE.WebGLRenderer: " + i + " extension not supported."
          ),
        n
      );
    },
  };
}
function Hf(s, e, t, i) {
  const n = {},
    r = new WeakMap();
  function a(d) {
    const u = d.target;
    u.index !== null && e.remove(u.index);
    for (const g in u.attributes) e.remove(u.attributes[g]);
    u.removeEventListener("dispose", a), delete n[u.id];
    const m = r.get(u);
    m && (e.remove(m), r.delete(u)),
      i.releaseStatesOfGeometry(u),
      u.isInstancedBufferGeometry === !0 && delete u._maxInstanceCount,
      t.memory.geometries--;
  }
  function o(d, u) {
    return (
      n[u.id] === !0 ||
        (u.addEventListener("dispose", a),
        (n[u.id] = !0),
        t.memory.geometries++),
      u
    );
  }
  function l(d) {
    const u = d.attributes;
    for (const g in u) e.update(u[g], 34962);
    const m = d.morphAttributes;
    for (const g in m) {
      const p = m[g];
      for (let f = 0, v = p.length; f < v; f++) e.update(p[f], 34962);
    }
  }
  function c(d) {
    const u = [],
      m = d.index,
      g = d.attributes.position;
    let p = 0;
    if (m !== null) {
      const w = m.array;
      p = m.version;
      for (let S = 0, x = w.length; S < x; S += 3) {
        const A = w[S + 0],
          D = w[S + 1],
          R = w[S + 2];
        u.push(A, D, D, R, R, A);
      }
    } else {
      const w = g.array;
      p = g.version;
      for (let S = 0, x = w.length / 3 - 1; S < x; S += 3) {
        const A = S + 0,
          D = S + 1,
          R = S + 2;
        u.push(A, D, D, R, R, A);
      }
    }
    const f = new (Wl(u) ? Jl : Kl)(u, 1);
    f.version = p;
    const v = r.get(d);
    v && e.remove(v), r.set(d, f);
  }
  function h(d) {
    const u = r.get(d);
    if (u) {
      const m = d.index;
      m !== null && u.version < m.version && c(d);
    } else c(d);
    return r.get(d);
  }
  return { get: o, update: l, getWireframeAttribute: h };
}
function Wf(s, e, t, i) {
  const n = i.isWebGL2;
  let r;
  function a(u) {
    r = u;
  }
  let o, l;
  function c(u) {
    (o = u.type), (l = u.bytesPerElement);
  }
  function h(u, m) {
    s.drawElements(r, m, o, u * l), t.update(m, r, 1);
  }
  function d(u, m, g) {
    if (g === 0) return;
    let p, f;
    if (n) (p = s), (f = "drawElementsInstanced");
    else if (
      ((p = e.get("ANGLE_instanced_arrays")),
      (f = "drawElementsInstancedANGLE"),
      p === null)
    ) {
      console.error(
        "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    p[f](r, m, o, u * l, g), t.update(m, r, g);
  }
  (this.setMode = a),
    (this.setIndex = c),
    (this.render = h),
    (this.renderInstances = d);
}
function qf(s) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function i(r, a, o) {
    switch ((t.calls++, a)) {
      case 4:
        t.triangles += o * (r / 3);
        break;
      case 1:
        t.lines += o * (r / 2);
        break;
      case 3:
        t.lines += o * (r - 1);
        break;
      case 2:
        t.lines += o * r;
        break;
      case 0:
        t.points += o * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function n() {
    t.frame++, (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: n,
    update: i,
  };
}
function Xf(s, e) {
  return s[0] - e[0];
}
function jf(s, e) {
  return Math.abs(e[1]) - Math.abs(s[1]);
}
function Sr(s, e) {
  let t = 1;
  const i = e.isInterleavedBufferAttribute ? e.data.array : e.array;
  i instanceof Int8Array
    ? (t = 127)
    : i instanceof Uint8Array
    ? (t = 255)
    : i instanceof Uint16Array
    ? (t = 65535)
    : i instanceof Int16Array
    ? (t = 32767)
    : i instanceof Int32Array
    ? (t = 2147483647)
    : console.error(
        "THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",
        i
      ),
    s.divideScalar(t);
}
function $f(s, e, t) {
  const i = {},
    n = new Float32Array(8),
    r = new WeakMap(),
    a = new Fe(),
    o = [];
  for (let c = 0; c < 8; c++) o[c] = [c, 0];
  function l(c, h, d, u) {
    const m = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g =
          h.morphAttributes.position ||
          h.morphAttributes.normal ||
          h.morphAttributes.color,
        p = g !== void 0 ? g.length : 0;
      let f = r.get(h);
      if (f === void 0 || f.count !== p) {
        let q = function () {
          re.dispose(), r.delete(h), h.removeEventListener("dispose", q);
        };
        f !== void 0 && f.texture.dispose();
        const S = h.morphAttributes.position !== void 0,
          x = h.morphAttributes.normal !== void 0,
          A = h.morphAttributes.color !== void 0,
          D = h.morphAttributes.position || [],
          R = h.morphAttributes.normal || [],
          b = h.morphAttributes.color || [];
        let E = 0;
        S === !0 && (E = 1), x === !0 && (E = 2), A === !0 && (E = 3);
        let k = h.attributes.position.count * E,
          B = 1;
        k > e.maxTextureSize &&
          ((B = Math.ceil(k / e.maxTextureSize)), (k = e.maxTextureSize));
        const ee = new Float32Array(k * B * 4 * p),
          re = new $l(ee, k, B, p);
        (re.type = Oi), (re.needsUpdate = !0);
        const I = E * 4;
        for (let G = 0; G < p; G++) {
          const X = D[G],
            j = R[G],
            U = b[G],
            V = k * B * 4 * G;
          for (let Q = 0; Q < X.count; Q++) {
            const $ = Q * I;
            S === !0 &&
              (a.fromBufferAttribute(X, Q),
              X.normalized === !0 && Sr(a, X),
              (ee[V + $ + 0] = a.x),
              (ee[V + $ + 1] = a.y),
              (ee[V + $ + 2] = a.z),
              (ee[V + $ + 3] = 0)),
              x === !0 &&
                (a.fromBufferAttribute(j, Q),
                j.normalized === !0 && Sr(a, j),
                (ee[V + $ + 4] = a.x),
                (ee[V + $ + 5] = a.y),
                (ee[V + $ + 6] = a.z),
                (ee[V + $ + 7] = 0)),
              A === !0 &&
                (a.fromBufferAttribute(U, Q),
                U.normalized === !0 && Sr(a, U),
                (ee[V + $ + 8] = a.x),
                (ee[V + $ + 9] = a.y),
                (ee[V + $ + 10] = a.z),
                (ee[V + $ + 11] = U.itemSize === 4 ? a.w : 1));
          }
        }
        (f = { count: p, texture: re, size: new me(k, B) }),
          r.set(h, f),
          h.addEventListener("dispose", q);
      }
      let v = 0;
      for (let S = 0; S < m.length; S++) v += m[S];
      const w = h.morphTargetsRelative ? 1 : 1 - v;
      u.getUniforms().setValue(s, "morphTargetBaseInfluence", w),
        u.getUniforms().setValue(s, "morphTargetInfluences", m),
        u.getUniforms().setValue(s, "morphTargetsTexture", f.texture, t),
        u.getUniforms().setValue(s, "morphTargetsTextureSize", f.size);
    } else {
      const g = m === void 0 ? 0 : m.length;
      let p = i[h.id];
      if (p === void 0 || p.length !== g) {
        p = [];
        for (let x = 0; x < g; x++) p[x] = [x, 0];
        i[h.id] = p;
      }
      for (let x = 0; x < g; x++) {
        const A = p[x];
        (A[0] = x), (A[1] = m[x]);
      }
      p.sort(jf);
      for (let x = 0; x < 8; x++)
        x < g && p[x][1]
          ? ((o[x][0] = p[x][0]), (o[x][1] = p[x][1]))
          : ((o[x][0] = Number.MAX_SAFE_INTEGER), (o[x][1] = 0));
      o.sort(Xf);
      const f = h.morphAttributes.position,
        v = h.morphAttributes.normal;
      let w = 0;
      for (let x = 0; x < 8; x++) {
        const A = o[x],
          D = A[0],
          R = A[1];
        D !== Number.MAX_SAFE_INTEGER && R
          ? (f &&
              h.getAttribute("morphTarget" + x) !== f[D] &&
              h.setAttribute("morphTarget" + x, f[D]),
            v &&
              h.getAttribute("morphNormal" + x) !== v[D] &&
              h.setAttribute("morphNormal" + x, v[D]),
            (n[x] = R),
            (w += R))
          : (f &&
              h.hasAttribute("morphTarget" + x) === !0 &&
              h.deleteAttribute("morphTarget" + x),
            v &&
              h.hasAttribute("morphNormal" + x) === !0 &&
              h.deleteAttribute("morphNormal" + x),
            (n[x] = 0));
      }
      const S = h.morphTargetsRelative ? 1 : 1 - w;
      u.getUniforms().setValue(s, "morphTargetBaseInfluence", S),
        u.getUniforms().setValue(s, "morphTargetInfluences", n);
    }
  }
  return { update: l };
}
function Yf(s, e, t, i) {
  let n = new WeakMap();
  function r(l) {
    const c = i.render.frame,
      h = l.geometry,
      d = e.get(l, h);
    return (
      n.get(d) !== c && (e.update(d), n.set(d, c)),
      l.isInstancedMesh &&
        (l.hasEventListener("dispose", o) === !1 &&
          l.addEventListener("dispose", o),
        t.update(l.instanceMatrix, 34962),
        l.instanceColor !== null && t.update(l.instanceColor, 34962)),
      d
    );
  }
  function a() {
    n = new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o),
      t.remove(c.instanceMatrix),
      c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: r, dispose: a };
}
const ic = new Rt(),
  sc = new $l(),
  nc = new kh(),
  rc = new ec(),
  Io = [],
  Fo = [],
  zo = new Float32Array(16),
  Uo = new Float32Array(9),
  Bo = new Float32Array(4);
function Ds(s, e, t) {
  const i = s[0];
  if (i <= 0 || i > 0) return s;
  const n = e * t;
  let r = Io[n];
  if ((r === void 0 && ((r = new Float32Array(n)), (Io[n] = r)), e !== 0)) {
    i.toArray(r, 0);
    for (let a = 1, o = 0; a !== e; ++a) (o += t), s[a].toArray(r, o);
  }
  return r;
}
function vt(s, e) {
  if (s.length !== e.length) return !1;
  for (let t = 0, i = s.length; t < i; t++) if (s[t] !== e[t]) return !1;
  return !0;
}
function _t(s, e) {
  for (let t = 0, i = e.length; t < i; t++) s[t] = e[t];
}
function Gn(s, e) {
  let t = Fo[e];
  t === void 0 && ((t = new Int32Array(e)), (Fo[e] = t));
  for (let i = 0; i !== e; ++i) t[i] = s.allocateTextureUnit();
  return t;
}
function Zf(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1f(this.addr, e), (t[0] = e));
}
function Kf(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (s.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (vt(t, e)) return;
    s.uniform2fv(this.addr, e), _t(t, e);
  }
}
function Jf(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (s.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (s.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (vt(t, e)) return;
    s.uniform3fv(this.addr, e), _t(t, e);
  }
}
function Qf(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (s.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (vt(t, e)) return;
    s.uniform4fv(this.addr, e), _t(t, e);
  }
}
function ep(s, e) {
  const t = this.cache,
    i = e.elements;
  if (i === void 0) {
    if (vt(t, e)) return;
    s.uniformMatrix2fv(this.addr, !1, e), _t(t, e);
  } else {
    if (vt(t, i)) return;
    Bo.set(i), s.uniformMatrix2fv(this.addr, !1, Bo), _t(t, i);
  }
}
function tp(s, e) {
  const t = this.cache,
    i = e.elements;
  if (i === void 0) {
    if (vt(t, e)) return;
    s.uniformMatrix3fv(this.addr, !1, e), _t(t, e);
  } else {
    if (vt(t, i)) return;
    Uo.set(i), s.uniformMatrix3fv(this.addr, !1, Uo), _t(t, i);
  }
}
function ip(s, e) {
  const t = this.cache,
    i = e.elements;
  if (i === void 0) {
    if (vt(t, e)) return;
    s.uniformMatrix4fv(this.addr, !1, e), _t(t, e);
  } else {
    if (vt(t, i)) return;
    zo.set(i), s.uniformMatrix4fv(this.addr, !1, zo), _t(t, i);
  }
}
function sp(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1i(this.addr, e), (t[0] = e));
}
function np(s, e) {
  const t = this.cache;
  vt(t, e) || (s.uniform2iv(this.addr, e), _t(t, e));
}
function rp(s, e) {
  const t = this.cache;
  vt(t, e) || (s.uniform3iv(this.addr, e), _t(t, e));
}
function ap(s, e) {
  const t = this.cache;
  vt(t, e) || (s.uniform4iv(this.addr, e), _t(t, e));
}
function op(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1ui(this.addr, e), (t[0] = e));
}
function lp(s, e) {
  const t = this.cache;
  vt(t, e) || (s.uniform2uiv(this.addr, e), _t(t, e));
}
function cp(s, e) {
  const t = this.cache;
  vt(t, e) || (s.uniform3uiv(this.addr, e), _t(t, e));
}
function hp(s, e) {
  const t = this.cache;
  vt(t, e) || (s.uniform4uiv(this.addr, e), _t(t, e));
}
function up(s, e, t) {
  const i = this.cache,
    n = t.allocateTextureUnit();
  i[0] !== n && (s.uniform1i(this.addr, n), (i[0] = n)),
    t.setTexture2D(e || ic, n);
}
function dp(s, e, t) {
  const i = this.cache,
    n = t.allocateTextureUnit();
  i[0] !== n && (s.uniform1i(this.addr, n), (i[0] = n)),
    t.setTexture3D(e || nc, n);
}
function fp(s, e, t) {
  const i = this.cache,
    n = t.allocateTextureUnit();
  i[0] !== n && (s.uniform1i(this.addr, n), (i[0] = n)),
    t.setTextureCube(e || rc, n);
}
function pp(s, e, t) {
  const i = this.cache,
    n = t.allocateTextureUnit();
  i[0] !== n && (s.uniform1i(this.addr, n), (i[0] = n)),
    t.setTexture2DArray(e || sc, n);
}
function mp(s) {
  switch (s) {
    case 5126:
      return Zf;
    case 35664:
      return Kf;
    case 35665:
      return Jf;
    case 35666:
      return Qf;
    case 35674:
      return ep;
    case 35675:
      return tp;
    case 35676:
      return ip;
    case 5124:
    case 35670:
      return sp;
    case 35667:
    case 35671:
      return np;
    case 35668:
    case 35672:
      return rp;
    case 35669:
    case 35673:
      return ap;
    case 5125:
      return op;
    case 36294:
      return lp;
    case 36295:
      return cp;
    case 36296:
      return hp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return up;
    case 35679:
    case 36299:
    case 36307:
      return dp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return fp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return pp;
  }
}
function gp(s, e) {
  s.uniform1fv(this.addr, e);
}
function vp(s, e) {
  const t = Ds(e, this.size, 2);
  s.uniform2fv(this.addr, t);
}
function _p(s, e) {
  const t = Ds(e, this.size, 3);
  s.uniform3fv(this.addr, t);
}
function xp(s, e) {
  const t = Ds(e, this.size, 4);
  s.uniform4fv(this.addr, t);
}
function yp(s, e) {
  const t = Ds(e, this.size, 4);
  s.uniformMatrix2fv(this.addr, !1, t);
}
function bp(s, e) {
  const t = Ds(e, this.size, 9);
  s.uniformMatrix3fv(this.addr, !1, t);
}
function wp(s, e) {
  const t = Ds(e, this.size, 16);
  s.uniformMatrix4fv(this.addr, !1, t);
}
function Sp(s, e) {
  s.uniform1iv(this.addr, e);
}
function Mp(s, e) {
  s.uniform2iv(this.addr, e);
}
function Cp(s, e) {
  s.uniform3iv(this.addr, e);
}
function Ap(s, e) {
  s.uniform4iv(this.addr, e);
}
function Tp(s, e) {
  s.uniform1uiv(this.addr, e);
}
function Ep(s, e) {
  s.uniform2uiv(this.addr, e);
}
function Lp(s, e) {
  s.uniform3uiv(this.addr, e);
}
function Dp(s, e) {
  s.uniform4uiv(this.addr, e);
}
function Pp(s, e, t) {
  const i = e.length,
    n = Gn(t, i);
  s.uniform1iv(this.addr, n);
  for (let r = 0; r !== i; ++r) t.setTexture2D(e[r] || ic, n[r]);
}
function Rp(s, e, t) {
  const i = e.length,
    n = Gn(t, i);
  s.uniform1iv(this.addr, n);
  for (let r = 0; r !== i; ++r) t.setTexture3D(e[r] || nc, n[r]);
}
function Ip(s, e, t) {
  const i = e.length,
    n = Gn(t, i);
  s.uniform1iv(this.addr, n);
  for (let r = 0; r !== i; ++r) t.setTextureCube(e[r] || rc, n[r]);
}
function Fp(s, e, t) {
  const i = e.length,
    n = Gn(t, i);
  s.uniform1iv(this.addr, n);
  for (let r = 0; r !== i; ++r) t.setTexture2DArray(e[r] || sc, n[r]);
}
function zp(s) {
  switch (s) {
    case 5126:
      return gp;
    case 35664:
      return vp;
    case 35665:
      return _p;
    case 35666:
      return xp;
    case 35674:
      return yp;
    case 35675:
      return bp;
    case 35676:
      return wp;
    case 5124:
    case 35670:
      return Sp;
    case 35667:
    case 35671:
      return Mp;
    case 35668:
    case 35672:
      return Cp;
    case 35669:
    case 35673:
      return Ap;
    case 5125:
      return Tp;
    case 36294:
      return Ep;
    case 36295:
      return Lp;
    case 36296:
      return Dp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Pp;
    case 35679:
    case 36299:
    case 36307:
      return Rp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Ip;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Fp;
  }
}
class Up {
  constructor(e, t, i) {
    (this.id = e),
      (this.addr = i),
      (this.cache = []),
      (this.setValue = mp(t.type));
  }
}
class Bp {
  constructor(e, t, i) {
    (this.id = e),
      (this.addr = i),
      (this.cache = []),
      (this.size = t.size),
      (this.setValue = zp(t.type));
  }
}
class Np {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, i) {
    const n = this.seq;
    for (let r = 0, a = n.length; r !== a; ++r) {
      const o = n[r];
      o.setValue(e, t[o.id], i);
    }
  }
}
const Mr = /(\w+)(\])?(\[|\.)?/g;
function No(s, e) {
  s.seq.push(e), (s.map[e.id] = e);
}
function kp(s, e, t) {
  const i = s.name,
    n = i.length;
  for (Mr.lastIndex = 0; ; ) {
    const r = Mr.exec(i),
      a = Mr.lastIndex;
    let o = r[1];
    const l = r[2] === "]",
      c = r[3];
    if ((l && (o = o | 0), c === void 0 || (c === "[" && a + 2 === n))) {
      No(t, c === void 0 ? new Up(o, s, e) : new Bp(o, s, e));
      break;
    } else {
      let d = t.map[o];
      d === void 0 && ((d = new Np(o)), No(t, d)), (t = d);
    }
  }
}
class zn {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const i = e.getProgramParameter(t, 35718);
    for (let n = 0; n < i; ++n) {
      const r = e.getActiveUniform(t, n),
        a = e.getUniformLocation(t, r.name);
      kp(r, a, this);
    }
  }
  setValue(e, t, i, n) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, i, n);
  }
  setOptional(e, t, i) {
    const n = t[i];
    n !== void 0 && this.setValue(e, i, n);
  }
  static upload(e, t, i, n) {
    for (let r = 0, a = t.length; r !== a; ++r) {
      const o = t[r],
        l = i[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, n);
    }
  }
  static seqWithValue(e, t) {
    const i = [];
    for (let n = 0, r = e.length; n !== r; ++n) {
      const a = e[n];
      a.id in t && i.push(a);
    }
    return i;
  }
}
function ko(s, e, t) {
  const i = s.createShader(e);
  return s.shaderSource(i, t), s.compileShader(i), i;
}
let Op = 0;
function Gp(s, e) {
  const t = s.split(`
`),
    i = [],
    n = Math.max(e - 6, 0),
    r = Math.min(e + 6, t.length);
  for (let a = n; a < r; a++) {
    const o = a + 1;
    i.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return i.join(`
`);
}
function Vp(s) {
  switch (s) {
    case Xi:
      return ["Linear", "( value )"];
    case qe:
      return ["sRGB", "( value )"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported encoding:", s),
        ["Linear", "( value )"]
      );
  }
}
function Oo(s, e, t) {
  const i = s.getShaderParameter(e, 35713),
    n = s.getShaderInfoLog(e).trim();
  if (i && n === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(n);
  if (r) {
    const a = parseInt(r[1]);
    return (
      t.toUpperCase() +
      `

` +
      n +
      `

` +
      Gp(s.getShaderSource(e), a)
    );
  } else return n;
}
function Hp(s, e) {
  const t = Vp(e);
  return "vec4 " + s + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function Wp(s, e) {
  let t;
  switch (e) {
    case ph:
      t = "Linear";
      break;
    case mh:
      t = "Reinhard";
      break;
    case gh:
      t = "OptimizedCineon";
      break;
    case vh:
      t = "ACESFilmic";
      break;
    case _h:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear");
  }
  return (
    "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
function qp(s) {
  return [
    s.extensionDerivatives ||
    !!s.envMapCubeUVHeight ||
    s.bumpMap ||
    s.tangentSpaceNormalMap ||
    s.clearcoatNormalMap ||
    s.flatShading ||
    s.shaderID === "physical"
      ? "#extension GL_OES_standard_derivatives : enable"
      : "",
    (s.extensionFragDepth || s.logarithmicDepthBuffer) &&
    s.rendererExtensionFragDepth
      ? "#extension GL_EXT_frag_depth : enable"
      : "",
    s.extensionDrawBuffers && s.rendererExtensionDrawBuffers
      ? "#extension GL_EXT_draw_buffers : require"
      : "",
    (s.extensionShaderTextureLOD || s.envMap || s.transmission) &&
    s.rendererExtensionShaderTextureLod
      ? "#extension GL_EXT_shader_texture_lod : enable"
      : "",
  ].filter(Hs).join(`
`);
}
function Xp(s) {
  const e = [];
  for (const t in s) {
    const i = s[t];
    i !== !1 && e.push("#define " + t + " " + i);
  }
  return e.join(`
`);
}
function jp(s, e) {
  const t = {},
    i = s.getProgramParameter(e, 35721);
  for (let n = 0; n < i; n++) {
    const r = s.getActiveAttrib(e, n),
      a = r.name;
    let o = 1;
    r.type === 35674 && (o = 2),
      r.type === 35675 && (o = 3),
      r.type === 35676 && (o = 4),
      (t[a] = {
        type: r.type,
        location: s.getAttribLocation(e, a),
        locationSize: o,
      });
  }
  return t;
}
function Hs(s) {
  return s !== "";
}
function Go(s, e) {
  return s
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Vo(s, e) {
  return s
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const $p = /^[ \t]*#include +<([\w\d./]+)>/gm;
function sa(s) {
  return s.replace($p, Yp);
}
function Yp(s, e) {
  const t = Ee[e];
  if (t === void 0) throw new Error("Can not resolve #include <" + e + ">");
  return sa(t);
}
const Zp =
    /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
  Kp =
    /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ho(s) {
  return s.replace(Kp, ac).replace(Zp, Jp);
}
function Jp(s, e, t, i) {
  return (
    console.warn(
      "WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."
    ),
    ac(s, e, t, i)
  );
}
function ac(s, e, t, i) {
  let n = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    n += i
      .replace(/\[\s*i\s*\]/g, "[ " + r + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, r);
  return n;
}
function Wo(s) {
  let e =
    "precision " +
    s.precision +
    ` float;
precision ` +
    s.precision +
    " int;";
  return (
    s.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : s.precision === "mediump"
      ? (e += `
#define MEDIUM_PRECISION`)
      : s.precision === "lowp" &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function Qp(s) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    s.shadowMapType === zl
      ? (e = "SHADOWMAP_TYPE_PCF")
      : s.shadowMapType === qc
      ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
      : s.shadowMapType === Vs && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function em(s) {
  let e = "ENVMAP_TYPE_CUBE";
  if (s.envMap)
    switch (s.envMapMode) {
      case Ms:
      case Cs:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Nn:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function tm(s) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s.envMap)
    switch (s.envMapMode) {
      case Cs:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function im(s) {
  let e = "ENVMAP_BLENDING_NONE";
  if (s.envMap)
    switch (s.combine) {
      case Nl:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case dh:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case fh:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function sm(s) {
  const e = s.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    i = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: i,
    maxMip: t,
  };
}
function nm(s, e, t, i) {
  const n = s.getContext(),
    r = t.defines;
  let a = t.vertexShader,
    o = t.fragmentShader;
  const l = Qp(t),
    c = em(t),
    h = tm(t),
    d = im(t),
    u = sm(t),
    m = t.isWebGL2 ? "" : qp(t),
    g = Xp(r),
    p = n.createProgram();
  let f,
    v,
    w = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((f = [g].filter(Hs).join(`
`)),
      f.length > 0 &&
        (f += `
`),
      (v = [m, g].filter(Hs).join(`
`)),
      v.length > 0 &&
        (v += `
`))
    : ((f = [
        Wo(t),
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + h : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMap && t.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        t.normalMap && t.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.displacementMap && t.supportsVertexTextures
          ? "#define USE_DISPLACEMENTMAP"
          : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs ? "#define USE_UV" : "",
        t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE"
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
        "	attribute vec3 morphTarget0;",
        "	attribute vec3 morphTarget1;",
        "	attribute vec3 morphTarget2;",
        "	attribute vec3 morphTarget3;",
        "	#ifdef USE_MORPHNORMALS",
        "		attribute vec3 morphNormal0;",
        "		attribute vec3 morphNormal1;",
        "		attribute vec3 morphNormal2;",
        "		attribute vec3 morphNormal3;",
        "	#else",
        "		attribute vec3 morphTarget4;",
        "		attribute vec3 morphTarget5;",
        "		attribute vec3 morphTarget6;",
        "		attribute vec3 morphTarget7;",
        "	#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(Hs).join(`
`)),
      (v = [
        m,
        Wo(t),
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + c : "",
        t.envMap ? "#define " + h : "",
        t.envMap ? "#define " + d : "",
        u ? "#define CUBEUV_TEXEL_WIDTH " + u.texelWidth : "",
        u ? "#define CUBEUV_TEXEL_HEIGHT " + u.texelHeight : "",
        u ? "#define CUBEUV_MAX_MIP " + u.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMap && t.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        t.normalMap && t.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs ? "#define USE_UV" : "",
        t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== ci ? "#define TONE_MAPPING" : "",
        t.toneMapping !== ci ? Ee.tonemapping_pars_fragment : "",
        t.toneMapping !== ci ? Wp("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        Ee.encodings_pars_fragment,
        Hp("linearToOutputTexel", t.outputEncoding),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(Hs).join(`
`))),
    (a = sa(a)),
    (a = Go(a, t)),
    (a = Vo(a, t)),
    (o = sa(o)),
    (o = Go(o, t)),
    (o = Vo(o, t)),
    (a = Ho(a)),
    (o = Ho(o)),
    t.isWebGL2 &&
      t.isRawShaderMaterial !== !0 &&
      ((w = `#version 300 es
`),
      (f =
        [
          "precision mediump sampler2DArray;",
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        f),
      (v =
        [
          "#define varying in",
          t.glslVersion === uo
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === uo ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        v));
  const S = w + f + a,
    x = w + v + o,
    A = ko(n, 35633, S),
    D = ko(n, 35632, x);
  if (
    (n.attachShader(p, A),
    n.attachShader(p, D),
    t.index0AttributeName !== void 0
      ? n.bindAttribLocation(p, 0, t.index0AttributeName)
      : t.morphTargets === !0 && n.bindAttribLocation(p, 0, "position"),
    n.linkProgram(p),
    s.debug.checkShaderErrors)
  ) {
    const E = n.getProgramInfoLog(p).trim(),
      k = n.getShaderInfoLog(A).trim(),
      B = n.getShaderInfoLog(D).trim();
    let ee = !0,
      re = !0;
    if (n.getProgramParameter(p, 35714) === !1) {
      ee = !1;
      const I = Oo(n, A, "vertex"),
        q = Oo(n, D, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " +
          n.getError() +
          " - VALIDATE_STATUS " +
          n.getProgramParameter(p, 35715) +
          `

Program Info Log: ` +
          E +
          `
` +
          I +
          `
` +
          q
      );
    } else
      E !== ""
        ? console.warn("THREE.WebGLProgram: Program Info Log:", E)
        : (k === "" || B === "") && (re = !1);
    re &&
      (this.diagnostics = {
        runnable: ee,
        programLog: E,
        vertexShader: { log: k, prefix: f },
        fragmentShader: { log: B, prefix: v },
      });
  }
  n.deleteShader(A), n.deleteShader(D);
  let R;
  this.getUniforms = function () {
    return R === void 0 && (R = new zn(n, p)), R;
  };
  let b;
  return (
    (this.getAttributes = function () {
      return b === void 0 && (b = jp(n, p)), b;
    }),
    (this.destroy = function () {
      i.releaseStatesOfProgram(this),
        n.deleteProgram(p),
        (this.program = void 0);
    }),
    (this.name = t.shaderName),
    (this.id = Op++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = p),
    (this.vertexShader = A),
    (this.fragmentShader = D),
    this
  );
}
let rm = 0;
class am {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      i = e.fragmentShader,
      n = this._getShaderStage(t),
      r = this._getShaderStage(i),
      a = this._getShaderCacheForMaterial(e);
    return (
      a.has(n) === !1 && (a.add(n), n.usedTimes++),
      a.has(r) === !1 && (a.add(r), r.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const i of t)
      i.usedTimes--, i.usedTimes === 0 && this.shaderCache.delete(i.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    return t.has(e) === !1 && t.set(e, new Set()), t.get(e);
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    if (t.has(e) === !1) {
      const i = new om(e);
      t.set(e, i);
    }
    return t.get(e);
  }
}
class om {
  constructor(e) {
    (this.id = rm++), (this.code = e), (this.usedTimes = 0);
  }
}
function lm(s, e, t, i, n, r, a) {
  const o = new xa(),
    l = new am(),
    c = [],
    h = n.isWebGL2,
    d = n.logarithmicDepthBuffer,
    u = n.vertexTextures;
  let m = n.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function p(b, E, k, B, ee) {
    const re = B.fog,
      I = ee.geometry,
      q = b.isMeshStandardMaterial ? B.environment : null,
      G = (b.isMeshStandardMaterial ? t : e).get(b.envMap || q),
      X = !!G && G.mapping === Nn ? G.image.height : null,
      j = g[b.type];
    b.precision !== null &&
      ((m = n.getMaxPrecision(b.precision)),
      m !== b.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          b.precision,
          "not supported, using",
          m,
          "instead."
        ));
    const U =
        I.morphAttributes.position ||
        I.morphAttributes.normal ||
        I.morphAttributes.color,
      V = U !== void 0 ? U.length : 0;
    let Q = 0;
    I.morphAttributes.position !== void 0 && (Q = 1),
      I.morphAttributes.normal !== void 0 && (Q = 2),
      I.morphAttributes.color !== void 0 && (Q = 3);
    let $, se, he, Y;
    if (j) {
      const Oe = Zt[j];
      ($ = Oe.vertexShader), (se = Oe.fragmentShader);
    } else
      ($ = b.vertexShader),
        (se = b.fragmentShader),
        l.update(b),
        (he = l.getVertexShaderID(b)),
        (Y = l.getFragmentShaderID(b));
    const F = s.getRenderTarget(),
      ze = b.alphaTest > 0,
      Me = b.clearcoat > 0,
      we = b.iridescence > 0;
    return {
      isWebGL2: h,
      shaderID: j,
      shaderName: b.type,
      vertexShader: $,
      fragmentShader: se,
      defines: b.defines,
      customVertexShaderID: he,
      customFragmentShaderID: Y,
      isRawShaderMaterial: b.isRawShaderMaterial === !0,
      glslVersion: b.glslVersion,
      precision: m,
      instancing: ee.isInstancedMesh === !0,
      instancingColor: ee.isInstancedMesh === !0 && ee.instanceColor !== null,
      supportsVertexTextures: u,
      outputEncoding:
        F === null
          ? s.outputEncoding
          : F.isXRRenderTarget === !0
          ? F.texture.encoding
          : Xi,
      map: !!b.map,
      matcap: !!b.matcap,
      envMap: !!G,
      envMapMode: G && G.mapping,
      envMapCubeUVHeight: X,
      lightMap: !!b.lightMap,
      aoMap: !!b.aoMap,
      emissiveMap: !!b.emissiveMap,
      bumpMap: !!b.bumpMap,
      normalMap: !!b.normalMap,
      objectSpaceNormalMap: b.normalMapType === zh,
      tangentSpaceNormalMap: b.normalMapType === Fh,
      decodeVideoTexture:
        !!b.map && b.map.isVideoTexture === !0 && b.map.encoding === qe,
      clearcoat: Me,
      clearcoatMap: Me && !!b.clearcoatMap,
      clearcoatRoughnessMap: Me && !!b.clearcoatRoughnessMap,
      clearcoatNormalMap: Me && !!b.clearcoatNormalMap,
      iridescence: we,
      iridescenceMap: we && !!b.iridescenceMap,
      iridescenceThicknessMap: we && !!b.iridescenceThicknessMap,
      displacementMap: !!b.displacementMap,
      roughnessMap: !!b.roughnessMap,
      metalnessMap: !!b.metalnessMap,
      specularMap: !!b.specularMap,
      specularIntensityMap: !!b.specularIntensityMap,
      specularColorMap: !!b.specularColorMap,
      opaque: b.transparent === !1 && b.blending === Ci,
      alphaMap: !!b.alphaMap,
      alphaTest: ze,
      gradientMap: !!b.gradientMap,
      sheen: b.sheen > 0,
      sheenColorMap: !!b.sheenColorMap,
      sheenRoughnessMap: !!b.sheenRoughnessMap,
      transmission: b.transmission > 0,
      transmissionMap: !!b.transmissionMap,
      thicknessMap: !!b.thicknessMap,
      combine: b.combine,
      vertexTangents: !!b.normalMap && !!I.attributes.tangent,
      vertexColors: b.vertexColors,
      vertexAlphas:
        b.vertexColors === !0 &&
        !!I.attributes.color &&
        I.attributes.color.itemSize === 4,
      vertexUvs:
        !!b.map ||
        !!b.bumpMap ||
        !!b.normalMap ||
        !!b.specularMap ||
        !!b.alphaMap ||
        !!b.emissiveMap ||
        !!b.roughnessMap ||
        !!b.metalnessMap ||
        !!b.clearcoatMap ||
        !!b.clearcoatRoughnessMap ||
        !!b.clearcoatNormalMap ||
        !!b.iridescenceMap ||
        !!b.iridescenceThicknessMap ||
        !!b.displacementMap ||
        !!b.transmissionMap ||
        !!b.thicknessMap ||
        !!b.specularIntensityMap ||
        !!b.specularColorMap ||
        !!b.sheenColorMap ||
        !!b.sheenRoughnessMap,
      uvsVertexOnly:
        !(
          !!b.map ||
          !!b.bumpMap ||
          !!b.normalMap ||
          !!b.specularMap ||
          !!b.alphaMap ||
          !!b.emissiveMap ||
          !!b.roughnessMap ||
          !!b.metalnessMap ||
          !!b.clearcoatNormalMap ||
          !!b.iridescenceMap ||
          !!b.iridescenceThicknessMap ||
          b.transmission > 0 ||
          !!b.transmissionMap ||
          !!b.thicknessMap ||
          !!b.specularIntensityMap ||
          !!b.specularColorMap ||
          b.sheen > 0 ||
          !!b.sheenColorMap ||
          !!b.sheenRoughnessMap
        ) && !!b.displacementMap,
      fog: !!re,
      useFog: b.fog === !0,
      fogExp2: re && re.isFogExp2,
      flatShading: !!b.flatShading,
      sizeAttenuation: b.sizeAttenuation,
      logarithmicDepthBuffer: d,
      skinning: ee.isSkinnedMesh === !0,
      morphTargets: I.morphAttributes.position !== void 0,
      morphNormals: I.morphAttributes.normal !== void 0,
      morphColors: I.morphAttributes.color !== void 0,
      morphTargetsCount: V,
      morphTextureStride: Q,
      numDirLights: E.directional.length,
      numPointLights: E.point.length,
      numSpotLights: E.spot.length,
      numRectAreaLights: E.rectArea.length,
      numHemiLights: E.hemi.length,
      numDirLightShadows: E.directionalShadowMap.length,
      numPointLightShadows: E.pointShadowMap.length,
      numSpotLightShadows: E.spotShadowMap.length,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: b.dithering,
      shadowMapEnabled: s.shadowMap.enabled && k.length > 0,
      shadowMapType: s.shadowMap.type,
      toneMapping: b.toneMapped ? s.toneMapping : ci,
      physicallyCorrectLights: s.physicallyCorrectLights,
      premultipliedAlpha: b.premultipliedAlpha,
      doubleSided: b.side === Wi,
      flipSided: b.side === Pt,
      useDepthPacking: !!b.depthPacking,
      depthPacking: b.depthPacking || 0,
      index0AttributeName: b.index0AttributeName,
      extensionDerivatives: b.extensions && b.extensions.derivatives,
      extensionFragDepth: b.extensions && b.extensions.fragDepth,
      extensionDrawBuffers: b.extensions && b.extensions.drawBuffers,
      extensionShaderTextureLOD: b.extensions && b.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: h || i.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || i.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || i.has("EXT_shader_texture_lod"),
      customProgramCacheKey: b.customProgramCacheKey(),
    };
  }
  function f(b) {
    const E = [];
    if (
      (b.shaderID
        ? E.push(b.shaderID)
        : (E.push(b.customVertexShaderID), E.push(b.customFragmentShaderID)),
      b.defines !== void 0)
    )
      for (const k in b.defines) E.push(k), E.push(b.defines[k]);
    return (
      b.isRawShaderMaterial === !1 &&
        (v(E, b), w(E, b), E.push(s.outputEncoding)),
      E.push(b.customProgramCacheKey),
      E.join()
    );
  }
  function v(b, E) {
    b.push(E.precision),
      b.push(E.outputEncoding),
      b.push(E.envMapMode),
      b.push(E.envMapCubeUVHeight),
      b.push(E.combine),
      b.push(E.vertexUvs),
      b.push(E.fogExp2),
      b.push(E.sizeAttenuation),
      b.push(E.morphTargetsCount),
      b.push(E.morphAttributeCount),
      b.push(E.numDirLights),
      b.push(E.numPointLights),
      b.push(E.numSpotLights),
      b.push(E.numHemiLights),
      b.push(E.numRectAreaLights),
      b.push(E.numDirLightShadows),
      b.push(E.numPointLightShadows),
      b.push(E.numSpotLightShadows),
      b.push(E.shadowMapType),
      b.push(E.toneMapping),
      b.push(E.numClippingPlanes),
      b.push(E.numClipIntersection),
      b.push(E.depthPacking);
  }
  function w(b, E) {
    o.disableAll(),
      E.isWebGL2 && o.enable(0),
      E.supportsVertexTextures && o.enable(1),
      E.instancing && o.enable(2),
      E.instancingColor && o.enable(3),
      E.map && o.enable(4),
      E.matcap && o.enable(5),
      E.envMap && o.enable(6),
      E.lightMap && o.enable(7),
      E.aoMap && o.enable(8),
      E.emissiveMap && o.enable(9),
      E.bumpMap && o.enable(10),
      E.normalMap && o.enable(11),
      E.objectSpaceNormalMap && o.enable(12),
      E.tangentSpaceNormalMap && o.enable(13),
      E.clearcoat && o.enable(14),
      E.clearcoatMap && o.enable(15),
      E.clearcoatRoughnessMap && o.enable(16),
      E.clearcoatNormalMap && o.enable(17),
      E.iridescence && o.enable(18),
      E.iridescenceMap && o.enable(19),
      E.iridescenceThicknessMap && o.enable(20),
      E.displacementMap && o.enable(21),
      E.specularMap && o.enable(22),
      E.roughnessMap && o.enable(23),
      E.metalnessMap && o.enable(24),
      E.gradientMap && o.enable(25),
      E.alphaMap && o.enable(26),
      E.alphaTest && o.enable(27),
      E.vertexColors && o.enable(28),
      E.vertexAlphas && o.enable(29),
      E.vertexUvs && o.enable(30),
      E.vertexTangents && o.enable(31),
      E.uvsVertexOnly && o.enable(32),
      E.fog && o.enable(33),
      b.push(o.mask),
      o.disableAll(),
      E.useFog && o.enable(0),
      E.flatShading && o.enable(1),
      E.logarithmicDepthBuffer && o.enable(2),
      E.skinning && o.enable(3),
      E.morphTargets && o.enable(4),
      E.morphNormals && o.enable(5),
      E.morphColors && o.enable(6),
      E.premultipliedAlpha && o.enable(7),
      E.shadowMapEnabled && o.enable(8),
      E.physicallyCorrectLights && o.enable(9),
      E.doubleSided && o.enable(10),
      E.flipSided && o.enable(11),
      E.useDepthPacking && o.enable(12),
      E.dithering && o.enable(13),
      E.specularIntensityMap && o.enable(14),
      E.specularColorMap && o.enable(15),
      E.transmission && o.enable(16),
      E.transmissionMap && o.enable(17),
      E.thicknessMap && o.enable(18),
      E.sheen && o.enable(19),
      E.sheenColorMap && o.enable(20),
      E.sheenRoughnessMap && o.enable(21),
      E.decodeVideoTexture && o.enable(22),
      E.opaque && o.enable(23),
      b.push(o.mask);
  }
  function S(b) {
    const E = g[b.type];
    let k;
    if (E) {
      const B = Zt[E];
      k = $i.clone(B.uniforms);
    } else k = b.uniforms;
    return k;
  }
  function x(b, E) {
    let k;
    for (let B = 0, ee = c.length; B < ee; B++) {
      const re = c[B];
      if (re.cacheKey === E) {
        (k = re), ++k.usedTimes;
        break;
      }
    }
    return k === void 0 && ((k = new nm(s, E, b, r)), c.push(k)), k;
  }
  function A(b) {
    if (--b.usedTimes === 0) {
      const E = c.indexOf(b);
      (c[E] = c[c.length - 1]), c.pop(), b.destroy();
    }
  }
  function D(b) {
    l.remove(b);
  }
  function R() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: f,
    getUniforms: S,
    acquireProgram: x,
    releaseProgram: A,
    releaseShaderCache: D,
    programs: c,
    dispose: R,
  };
}
function cm() {
  let s = new WeakMap();
  function e(r) {
    let a = s.get(r);
    return a === void 0 && ((a = {}), s.set(r, a)), a;
  }
  function t(r) {
    s.delete(r);
  }
  function i(r, a, o) {
    s.get(r)[a] = o;
  }
  function n() {
    s = new WeakMap();
  }
  return { get: e, remove: t, update: i, dispose: n };
}
function hm(s, e) {
  return s.groupOrder !== e.groupOrder
    ? s.groupOrder - e.groupOrder
    : s.renderOrder !== e.renderOrder
    ? s.renderOrder - e.renderOrder
    : s.material.id !== e.material.id
    ? s.material.id - e.material.id
    : s.z !== e.z
    ? s.z - e.z
    : s.id - e.id;
}
function qo(s, e) {
  return s.groupOrder !== e.groupOrder
    ? s.groupOrder - e.groupOrder
    : s.renderOrder !== e.renderOrder
    ? s.renderOrder - e.renderOrder
    : s.z !== e.z
    ? e.z - s.z
    : s.id - e.id;
}
function Xo() {
  const s = [];
  let e = 0;
  const t = [],
    i = [],
    n = [];
  function r() {
    (e = 0), (t.length = 0), (i.length = 0), (n.length = 0);
  }
  function a(d, u, m, g, p, f) {
    let v = s[e];
    return (
      v === void 0
        ? ((v = {
            id: d.id,
            object: d,
            geometry: u,
            material: m,
            groupOrder: g,
            renderOrder: d.renderOrder,
            z: p,
            group: f,
          }),
          (s[e] = v))
        : ((v.id = d.id),
          (v.object = d),
          (v.geometry = u),
          (v.material = m),
          (v.groupOrder = g),
          (v.renderOrder = d.renderOrder),
          (v.z = p),
          (v.group = f)),
      e++,
      v
    );
  }
  function o(d, u, m, g, p, f) {
    const v = a(d, u, m, g, p, f);
    m.transmission > 0
      ? i.push(v)
      : m.transparent === !0
      ? n.push(v)
      : t.push(v);
  }
  function l(d, u, m, g, p, f) {
    const v = a(d, u, m, g, p, f);
    m.transmission > 0
      ? i.unshift(v)
      : m.transparent === !0
      ? n.unshift(v)
      : t.unshift(v);
  }
  function c(d, u) {
    t.length > 1 && t.sort(d || hm),
      i.length > 1 && i.sort(u || qo),
      n.length > 1 && n.sort(u || qo);
  }
  function h() {
    for (let d = e, u = s.length; d < u; d++) {
      const m = s[d];
      if (m.id === null) break;
      (m.id = null),
        (m.object = null),
        (m.geometry = null),
        (m.material = null),
        (m.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: i,
    transparent: n,
    init: r,
    push: o,
    unshift: l,
    finish: h,
    sort: c,
  };
}
function um() {
  let s = new WeakMap();
  function e(i, n) {
    let r;
    return (
      s.has(i) === !1
        ? ((r = new Xo()), s.set(i, [r]))
        : n >= s.get(i).length
        ? ((r = new Xo()), s.get(i).push(r))
        : (r = s.get(i)[n]),
      r
    );
  }
  function t() {
    s = new WeakMap();
  }
  return { get: e, dispose: t };
}
function dm() {
  const s = {};
  return {
    get: function (e) {
      if (s[e.id] !== void 0) return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new C(), color: new L() };
          break;
        case "SpotLight":
          t = {
            position: new C(),
            direction: new C(),
            color: new L(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new C(), color: new L(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new C(), skyColor: new L(), groundColor: new L() };
          break;
        case "RectAreaLight":
          t = {
            color: new L(),
            position: new C(),
            halfWidth: new C(),
            halfHeight: new C(),
          };
          break;
      }
      return (s[e.id] = t), t;
    },
  };
}
function fm() {
  const s = {};
  return {
    get: function (e) {
      if (s[e.id] !== void 0) return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new me(),
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new me(),
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new me(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (s[e.id] = t), t;
    },
  };
}
let pm = 0;
function mm(s, e) {
  return (e.castShadow ? 1 : 0) - (s.castShadow ? 1 : 0);
}
function gm(s, e) {
  const t = new dm(),
    i = fm(),
    n = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotShadow: [],
      spotShadowMap: [],
      spotShadowMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
    };
  for (let h = 0; h < 9; h++) n.probe.push(new C());
  const r = new C(),
    a = new je(),
    o = new je();
  function l(h, d) {
    let u = 0,
      m = 0,
      g = 0;
    for (let E = 0; E < 9; E++) n.probe[E].set(0, 0, 0);
    let p = 0,
      f = 0,
      v = 0,
      w = 0,
      S = 0,
      x = 0,
      A = 0,
      D = 0;
    h.sort(mm);
    const R = d !== !0 ? Math.PI : 1;
    for (let E = 0, k = h.length; E < k; E++) {
      const B = h[E],
        ee = B.color,
        re = B.intensity,
        I = B.distance,
        q = B.shadow && B.shadow.map ? B.shadow.map.texture : null;
      if (B.isAmbientLight)
        (u += ee.r * re * R), (m += ee.g * re * R), (g += ee.b * re * R);
      else if (B.isLightProbe)
        for (let G = 0; G < 9; G++)
          n.probe[G].addScaledVector(B.sh.coefficients[G], re);
      else if (B.isDirectionalLight) {
        const G = t.get(B);
        if (
          (G.color.copy(B.color).multiplyScalar(B.intensity * R), B.castShadow)
        ) {
          const X = B.shadow,
            j = i.get(B);
          (j.shadowBias = X.bias),
            (j.shadowNormalBias = X.normalBias),
            (j.shadowRadius = X.radius),
            (j.shadowMapSize = X.mapSize),
            (n.directionalShadow[p] = j),
            (n.directionalShadowMap[p] = q),
            (n.directionalShadowMatrix[p] = B.shadow.matrix),
            x++;
        }
        (n.directional[p] = G), p++;
      } else if (B.isSpotLight) {
        const G = t.get(B);
        if (
          (G.position.setFromMatrixPosition(B.matrixWorld),
          G.color.copy(ee).multiplyScalar(re * R),
          (G.distance = I),
          (G.coneCos = Math.cos(B.angle)),
          (G.penumbraCos = Math.cos(B.angle * (1 - B.penumbra))),
          (G.decay = B.decay),
          B.castShadow)
        ) {
          const X = B.shadow,
            j = i.get(B);
          (j.shadowBias = X.bias),
            (j.shadowNormalBias = X.normalBias),
            (j.shadowRadius = X.radius),
            (j.shadowMapSize = X.mapSize),
            (n.spotShadow[v] = j),
            (n.spotShadowMap[v] = q),
            (n.spotShadowMatrix[v] = B.shadow.matrix),
            D++;
        }
        (n.spot[v] = G), v++;
      } else if (B.isRectAreaLight) {
        const G = t.get(B);
        G.color.copy(ee).multiplyScalar(re),
          G.halfWidth.set(B.width * 0.5, 0, 0),
          G.halfHeight.set(0, B.height * 0.5, 0),
          (n.rectArea[w] = G),
          w++;
      } else if (B.isPointLight) {
        const G = t.get(B);
        if (
          (G.color.copy(B.color).multiplyScalar(B.intensity * R),
          (G.distance = B.distance),
          (G.decay = B.decay),
          B.castShadow)
        ) {
          const X = B.shadow,
            j = i.get(B);
          (j.shadowBias = X.bias),
            (j.shadowNormalBias = X.normalBias),
            (j.shadowRadius = X.radius),
            (j.shadowMapSize = X.mapSize),
            (j.shadowCameraNear = X.camera.near),
            (j.shadowCameraFar = X.camera.far),
            (n.pointShadow[f] = j),
            (n.pointShadowMap[f] = q),
            (n.pointShadowMatrix[f] = B.shadow.matrix),
            A++;
        }
        (n.point[f] = G), f++;
      } else if (B.isHemisphereLight) {
        const G = t.get(B);
        G.skyColor.copy(B.color).multiplyScalar(re * R),
          G.groundColor.copy(B.groundColor).multiplyScalar(re * R),
          (n.hemi[S] = G),
          S++;
      }
    }
    w > 0 &&
      (e.isWebGL2 || s.has("OES_texture_float_linear") === !0
        ? ((n.rectAreaLTC1 = Z.LTC_FLOAT_1), (n.rectAreaLTC2 = Z.LTC_FLOAT_2))
        : s.has("OES_texture_half_float_linear") === !0
        ? ((n.rectAreaLTC1 = Z.LTC_HALF_1), (n.rectAreaLTC2 = Z.LTC_HALF_2))
        : console.error(
            "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
          )),
      (n.ambient[0] = u),
      (n.ambient[1] = m),
      (n.ambient[2] = g);
    const b = n.hash;
    (b.directionalLength !== p ||
      b.pointLength !== f ||
      b.spotLength !== v ||
      b.rectAreaLength !== w ||
      b.hemiLength !== S ||
      b.numDirectionalShadows !== x ||
      b.numPointShadows !== A ||
      b.numSpotShadows !== D) &&
      ((n.directional.length = p),
      (n.spot.length = v),
      (n.rectArea.length = w),
      (n.point.length = f),
      (n.hemi.length = S),
      (n.directionalShadow.length = x),
      (n.directionalShadowMap.length = x),
      (n.pointShadow.length = A),
      (n.pointShadowMap.length = A),
      (n.spotShadow.length = D),
      (n.spotShadowMap.length = D),
      (n.directionalShadowMatrix.length = x),
      (n.pointShadowMatrix.length = A),
      (n.spotShadowMatrix.length = D),
      (b.directionalLength = p),
      (b.pointLength = f),
      (b.spotLength = v),
      (b.rectAreaLength = w),
      (b.hemiLength = S),
      (b.numDirectionalShadows = x),
      (b.numPointShadows = A),
      (b.numSpotShadows = D),
      (n.version = pm++));
  }
  function c(h, d) {
    let u = 0,
      m = 0,
      g = 0,
      p = 0,
      f = 0;
    const v = d.matrixWorldInverse;
    for (let w = 0, S = h.length; w < S; w++) {
      const x = h[w];
      if (x.isDirectionalLight) {
        const A = n.directional[u];
        A.direction.setFromMatrixPosition(x.matrixWorld),
          r.setFromMatrixPosition(x.target.matrixWorld),
          A.direction.sub(r),
          A.direction.transformDirection(v),
          u++;
      } else if (x.isSpotLight) {
        const A = n.spot[g];
        A.position.setFromMatrixPosition(x.matrixWorld),
          A.position.applyMatrix4(v),
          A.direction.setFromMatrixPosition(x.matrixWorld),
          r.setFromMatrixPosition(x.target.matrixWorld),
          A.direction.sub(r),
          A.direction.transformDirection(v),
          g++;
      } else if (x.isRectAreaLight) {
        const A = n.rectArea[p];
        A.position.setFromMatrixPosition(x.matrixWorld),
          A.position.applyMatrix4(v),
          o.identity(),
          a.copy(x.matrixWorld),
          a.premultiply(v),
          o.extractRotation(a),
          A.halfWidth.set(x.width * 0.5, 0, 0),
          A.halfHeight.set(0, x.height * 0.5, 0),
          A.halfWidth.applyMatrix4(o),
          A.halfHeight.applyMatrix4(o),
          p++;
      } else if (x.isPointLight) {
        const A = n.point[m];
        A.position.setFromMatrixPosition(x.matrixWorld),
          A.position.applyMatrix4(v),
          m++;
      } else if (x.isHemisphereLight) {
        const A = n.hemi[f];
        A.direction.setFromMatrixPosition(x.matrixWorld),
          A.direction.transformDirection(v),
          f++;
      }
    }
  }
  return { setup: l, setupView: c, state: n };
}
function jo(s, e) {
  const t = new gm(s, e),
    i = [],
    n = [];
  function r() {
    (i.length = 0), (n.length = 0);
  }
  function a(d) {
    i.push(d);
  }
  function o(d) {
    n.push(d);
  }
  function l(d) {
    t.setup(i, d);
  }
  function c(d) {
    t.setupView(i, d);
  }
  return {
    init: r,
    state: { lightsArray: i, shadowsArray: n, lights: t },
    setupLights: l,
    setupLightsView: c,
    pushLight: a,
    pushShadow: o,
  };
}
function vm(s, e) {
  let t = new WeakMap();
  function i(r, a = 0) {
    let o;
    return (
      t.has(r) === !1
        ? ((o = new jo(s, e)), t.set(r, [o]))
        : a >= t.get(r).length
        ? ((o = new jo(s, e)), t.get(r).push(o))
        : (o = t.get(r)[a]),
      o
    );
  }
  function n() {
    t = new WeakMap();
  }
  return { get: i, dispose: n };
}
class _m extends On {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = Rh),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class xm extends On {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.referencePosition = new C()),
      (this.nearDistance = 1),
      (this.farDistance = 1e3),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.referencePosition.copy(e.referencePosition),
      (this.nearDistance = e.nearDistance),
      (this.farDistance = e.farDistance),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const ym = "void main(){gl_Position=vec4(position,1.0);}",
  bm = `uniform sampler2D shadow_pass;uniform vec2 resolution;uniform float radius;
#include <packing>
void main(){const float samples=float(VSM_SAMPLES);float mean=0.0;float squared_mean=0.0;float uvStride=samples<=1.0?0.0:2.0/(samples-1.0);float uvStart=samples<=1.0?0.0:-1.0;for(float i=0.0;i<samples;i++){float uvOffset=uvStart+i*uvStride;
#ifdef HORIZONTAL_PASS
vec2 distribution=unpackRGBATo2Half(texture2D(shadow_pass,(gl_FragCoord.xy+vec2(uvOffset,0.0)*radius)/resolution));mean+=distribution.x;squared_mean+=distribution.y*distribution.y+distribution.x*distribution.x;
#else
float depth=unpackRGBAToDepth(texture2D(shadow_pass,(gl_FragCoord.xy+vec2(0.0,uvOffset)*radius)/resolution));mean+=depth;squared_mean+=depth*depth;
#endif
}mean=mean/samples;squared_mean=squared_mean/samples;float std_dev=sqrt(squared_mean-mean*mean);gl_FragColor=pack2HalfToRGBA(vec2(mean,std_dev));}`;
function wm(s, e, t) {
  let i = new ya();
  const n = new me(),
    r = new me(),
    a = new Fe(),
    o = new _m({ depthPacking: Ih }),
    l = new xm(),
    c = {},
    h = t.maxTextureSize,
    d = { 0: Pt, 1: ws, 2: Wi },
    u = new gt({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new me() },
        radius: { value: 4 },
      },
      vertexShader: ym,
      fragmentShader: bm,
    }),
    m = u.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new Vt();
  g.setAttribute(
    "position",
    new Et(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const p = new rt(g, u),
    f = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = zl),
    (this.render = function (x, A, D) {
      if (
        f.enabled === !1 ||
        (f.autoUpdate === !1 && f.needsUpdate === !1) ||
        x.length === 0
      )
        return;
      const R = s.getRenderTarget(),
        b = s.getActiveCubeFace(),
        E = s.getActiveMipmapLevel(),
        k = s.state;
      k.setBlending(Mi),
        k.buffers.color.setClear(1, 1, 1, 1),
        k.buffers.depth.setTest(!0),
        k.setScissorTest(!1);
      for (let B = 0, ee = x.length; B < ee; B++) {
        const re = x[B],
          I = re.shadow;
        if (I === void 0) {
          console.warn("THREE.WebGLShadowMap:", re, "has no shadow.");
          continue;
        }
        if (I.autoUpdate === !1 && I.needsUpdate === !1) continue;
        n.copy(I.mapSize);
        const q = I.getFrameExtents();
        if (
          (n.multiply(q),
          r.copy(I.mapSize),
          (n.x > h || n.y > h) &&
            (n.x > h &&
              ((r.x = Math.floor(h / q.x)),
              (n.x = r.x * q.x),
              (I.mapSize.x = r.x)),
            n.y > h &&
              ((r.y = Math.floor(h / q.y)),
              (n.y = r.y * q.y),
              (I.mapSize.y = r.y))),
          I.map === null)
        ) {
          const X = this.type !== Vs ? { minFilter: mt, magFilter: mt } : {};
          (I.map = new Ei(n.x, n.y, X)),
            (I.map.texture.name = re.name + ".shadowMap"),
            I.camera.updateProjectionMatrix();
        }
        s.setRenderTarget(I.map), s.clear();
        const G = I.getViewportCount();
        for (let X = 0; X < G; X++) {
          const j = I.getViewport(X);
          a.set(r.x * j.x, r.y * j.y, r.x * j.z, r.y * j.w),
            k.viewport(a),
            I.updateMatrices(re, X),
            (i = I.getFrustum()),
            S(A, D, I.camera, re, this.type);
        }
        I.isPointLightShadow !== !0 && this.type === Vs && v(I, D),
          (I.needsUpdate = !1);
      }
      (f.needsUpdate = !1), s.setRenderTarget(R, b, E);
    });
  function v(x, A) {
    const D = e.update(p);
    u.defines.VSM_SAMPLES !== x.blurSamples &&
      ((u.defines.VSM_SAMPLES = x.blurSamples),
      (m.defines.VSM_SAMPLES = x.blurSamples),
      (u.needsUpdate = !0),
      (m.needsUpdate = !0)),
      x.mapPass === null && (x.mapPass = new Ei(n.x, n.y)),
      (u.uniforms.shadow_pass.value = x.map.texture),
      (u.uniforms.resolution.value = x.mapSize),
      (u.uniforms.radius.value = x.radius),
      s.setRenderTarget(x.mapPass),
      s.clear(),
      s.renderBufferDirect(A, null, D, u, p, null),
      (m.uniforms.shadow_pass.value = x.mapPass.texture),
      (m.uniforms.resolution.value = x.mapSize),
      (m.uniforms.radius.value = x.radius),
      s.setRenderTarget(x.map),
      s.clear(),
      s.renderBufferDirect(A, null, D, m, p, null);
  }
  function w(x, A, D, R, b, E) {
    let k = null;
    const B =
      D.isPointLight === !0 ? x.customDistanceMaterial : x.customDepthMaterial;
    if (
      (B !== void 0 ? (k = B) : (k = D.isPointLight === !0 ? l : o),
      (s.localClippingEnabled &&
        A.clipShadows === !0 &&
        Array.isArray(A.clippingPlanes) &&
        A.clippingPlanes.length !== 0) ||
        (A.displacementMap && A.displacementScale !== 0) ||
        (A.alphaMap && A.alphaTest > 0))
    ) {
      const ee = k.uuid,
        re = A.uuid;
      let I = c[ee];
      I === void 0 && ((I = {}), (c[ee] = I));
      let q = I[re];
      q === void 0 && ((q = k.clone()), (I[re] = q)), (k = q);
    }
    return (
      (k.visible = A.visible),
      (k.wireframe = A.wireframe),
      E === Vs
        ? (k.side = A.shadowSide !== null ? A.shadowSide : A.side)
        : (k.side = A.shadowSide !== null ? A.shadowSide : d[A.side]),
      (k.alphaMap = A.alphaMap),
      (k.alphaTest = A.alphaTest),
      (k.clipShadows = A.clipShadows),
      (k.clippingPlanes = A.clippingPlanes),
      (k.clipIntersection = A.clipIntersection),
      (k.displacementMap = A.displacementMap),
      (k.displacementScale = A.displacementScale),
      (k.displacementBias = A.displacementBias),
      (k.wireframeLinewidth = A.wireframeLinewidth),
      (k.linewidth = A.linewidth),
      D.isPointLight === !0 &&
        k.isMeshDistanceMaterial === !0 &&
        (k.referencePosition.setFromMatrixPosition(D.matrixWorld),
        (k.nearDistance = R),
        (k.farDistance = b)),
      k
    );
  }
  function S(x, A, D, R, b) {
    if (x.visible === !1) return;
    if (
      x.layers.test(A.layers) &&
      (x.isMesh || x.isLine || x.isPoints) &&
      (x.castShadow || (x.receiveShadow && b === Vs)) &&
      (!x.frustumCulled || i.intersectsObject(x))
    ) {
      x.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse, x.matrixWorld);
      const B = e.update(x),
        ee = x.material;
      if (Array.isArray(ee)) {
        const re = B.groups;
        for (let I = 0, q = re.length; I < q; I++) {
          const G = re[I],
            X = ee[G.materialIndex];
          if (X && X.visible) {
            const j = w(x, X, R, D.near, D.far, b);
            s.renderBufferDirect(D, null, B, j, x, G);
          }
        }
      } else if (ee.visible) {
        const re = w(x, ee, R, D.near, D.far, b);
        s.renderBufferDirect(D, null, B, re, x, null);
      }
    }
    const k = x.children;
    for (let B = 0, ee = k.length; B < ee; B++) S(k[B], A, D, R, b);
  }
}
function Sm(s, e, t) {
  const i = t.isWebGL2;
  function n() {
    let T = !1;
    const ne = new Fe();
    let ie = null;
    const ve = new Fe(0, 0, 0, 0);
    return {
      setMask: function (ue) {
        ie !== ue && !T && (s.colorMask(ue, ue, ue, ue), (ie = ue));
      },
      setLocked: function (ue) {
        T = ue;
      },
      setClear: function (ue, ye, J, be, Ue) {
        Ue === !0 && ((ue *= be), (ye *= be), (J *= be)),
          ne.set(ue, ye, J, be),
          ve.equals(ne) === !1 && (s.clearColor(ue, ye, J, be), ve.copy(ne));
      },
      reset: function () {
        (T = !1), (ie = null), ve.set(-1, 0, 0, 0);
      },
    };
  }
  function r() {
    let T = !1,
      ne = null,
      ie = null,
      ve = null;
    return {
      setTest: function (ue) {
        ue ? Y(2929) : F(2929);
      },
      setMask: function (ue) {
        ne !== ue && !T && (s.depthMask(ue), (ne = ue));
      },
      setFunc: function (ue) {
        if (ie !== ue) {
          if (ue)
            switch (ue) {
              case rh:
                s.depthFunc(512);
                break;
              case ah:
                s.depthFunc(519);
                break;
              case oh:
                s.depthFunc(513);
                break;
              case Kr:
                s.depthFunc(515);
                break;
              case lh:
                s.depthFunc(514);
                break;
              case ch:
                s.depthFunc(518);
                break;
              case hh:
                s.depthFunc(516);
                break;
              case uh:
                s.depthFunc(517);
                break;
              default:
                s.depthFunc(515);
            }
          else s.depthFunc(515);
          ie = ue;
        }
      },
      setLocked: function (ue) {
        T = ue;
      },
      setClear: function (ue) {
        ve !== ue && (s.clearDepth(ue), (ve = ue));
      },
      reset: function () {
        (T = !1), (ne = null), (ie = null), (ve = null);
      },
    };
  }
  function a() {
    let T = !1,
      ne = null,
      ie = null,
      ve = null,
      ue = null,
      ye = null,
      J = null,
      be = null,
      Ue = null;
    return {
      setTest: function (Be) {
        T || (Be ? Y(2960) : F(2960));
      },
      setMask: function (Be) {
        ne !== Be && !T && (s.stencilMask(Be), (ne = Be));
      },
      setFunc: function (Be, dt, Wt) {
        (ie !== Be || ve !== dt || ue !== Wt) &&
          (s.stencilFunc(Be, dt, Wt), (ie = Be), (ve = dt), (ue = Wt));
      },
      setOp: function (Be, dt, Wt) {
        (ye !== Be || J !== dt || be !== Wt) &&
          (s.stencilOp(Be, dt, Wt), (ye = Be), (J = dt), (be = Wt));
      },
      setLocked: function (Be) {
        T = Be;
      },
      setClear: function (Be) {
        Ue !== Be && (s.clearStencil(Be), (Ue = Be));
      },
      reset: function () {
        (T = !1),
          (ne = null),
          (ie = null),
          (ve = null),
          (ue = null),
          (ye = null),
          (J = null),
          (be = null),
          (Ue = null);
      },
    };
  }
  const o = new n(),
    l = new r(),
    c = new a();
  let h = {},
    d = {},
    u = new WeakMap(),
    m = [],
    g = null,
    p = !1,
    f = null,
    v = null,
    w = null,
    S = null,
    x = null,
    A = null,
    D = null,
    R = !1,
    b = null,
    E = null,
    k = null,
    B = null,
    ee = null;
  const re = s.getParameter(35661);
  let I = !1,
    q = 0;
  const G = s.getParameter(7938);
  G.indexOf("WebGL") !== -1
    ? ((q = parseFloat(/^WebGL (\d)/.exec(G)[1])), (I = q >= 1))
    : G.indexOf("OpenGL ES") !== -1 &&
      ((q = parseFloat(/^OpenGL ES (\d)/.exec(G)[1])), (I = q >= 2));
  let X = null,
    j = {};
  const U = s.getParameter(3088),
    V = s.getParameter(2978),
    Q = new Fe().fromArray(U),
    $ = new Fe().fromArray(V);
  function se(T, ne, ie) {
    const ve = new Uint8Array(4),
      ue = s.createTexture();
    s.bindTexture(T, ue),
      s.texParameteri(T, 10241, 9728),
      s.texParameteri(T, 10240, 9728);
    for (let ye = 0; ye < ie; ye++)
      s.texImage2D(ne + ye, 0, 6408, 1, 1, 0, 6408, 5121, ve);
    return ue;
  }
  const he = {};
  (he[3553] = se(3553, 3553, 1)),
    (he[34067] = se(34067, 34069, 6)),
    o.setClear(0, 0, 0, 1),
    l.setClear(1),
    c.setClear(0),
    Y(2929),
    l.setFunc(Kr),
    at(!1),
    xt(Ba),
    Y(2884),
    Le(Mi);
  function Y(T) {
    h[T] !== !0 && (s.enable(T), (h[T] = !0));
  }
  function F(T) {
    h[T] !== !1 && (s.disable(T), (h[T] = !1));
  }
  function ze(T, ne) {
    return d[T] !== ne
      ? (s.bindFramebuffer(T, ne),
        (d[T] = ne),
        i && (T === 36009 && (d[36160] = ne), T === 36160 && (d[36009] = ne)),
        !0)
      : !1;
  }
  function Me(T, ne) {
    let ie = m,
      ve = !1;
    if (T)
      if (
        ((ie = u.get(ne)),
        ie === void 0 && ((ie = []), u.set(ne, ie)),
        T.isWebGLMultipleRenderTargets)
      ) {
        const ue = T.texture;
        if (ie.length !== ue.length || ie[0] !== 36064) {
          for (let ye = 0, J = ue.length; ye < J; ye++) ie[ye] = 36064 + ye;
          (ie.length = ue.length), (ve = !0);
        }
      } else ie[0] !== 36064 && ((ie[0] = 36064), (ve = !0));
    else ie[0] !== 1029 && ((ie[0] = 1029), (ve = !0));
    ve &&
      (t.isWebGL2
        ? s.drawBuffers(ie)
        : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie));
  }
  function we(T) {
    return g !== T ? (s.useProgram(T), (g = T), !0) : !1;
  }
  const le = { [ms]: 32774, [$c]: 32778, [Yc]: 32779 };
  if (i) (le[Oa] = 32775), (le[Ga] = 32776);
  else {
    const T = e.get("EXT_blend_minmax");
    T !== null && ((le[Oa] = T.MIN_EXT), (le[Ga] = T.MAX_EXT));
  }
  const Oe = {
    [Zc]: 0,
    [Kc]: 1,
    [Jc]: 768,
    [Ul]: 770,
    [nh]: 776,
    [ih]: 774,
    [eh]: 772,
    [Qc]: 769,
    [Bl]: 771,
    [sh]: 775,
    [th]: 773,
  };
  function Le(T, ne, ie, ve, ue, ye, J, be) {
    if (T === Mi) {
      p === !0 && (F(3042), (p = !1));
      return;
    }
    if ((p === !1 && (Y(3042), (p = !0)), T !== jc)) {
      if (T !== f || be !== R) {
        if (
          ((v !== ms || x !== ms) &&
            (s.blendEquation(32774), (v = ms), (x = ms)),
          be)
        )
          switch (T) {
            case Ci:
              s.blendFuncSeparate(1, 771, 1, 771);
              break;
            case Ss:
              s.blendFunc(1, 1);
              break;
            case Na:
              s.blendFuncSeparate(0, 769, 0, 1);
              break;
            case ka:
              s.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", T);
              break;
          }
        else
          switch (T) {
            case Ci:
              s.blendFuncSeparate(770, 771, 1, 771);
              break;
            case Ss:
              s.blendFunc(770, 1);
              break;
            case Na:
              s.blendFuncSeparate(0, 769, 0, 1);
              break;
            case ka:
              s.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", T);
              break;
          }
        (w = null), (S = null), (A = null), (D = null), (f = T), (R = be);
      }
      return;
    }
    (ue = ue || ne),
      (ye = ye || ie),
      (J = J || ve),
      (ne !== v || ue !== x) &&
        (s.blendEquationSeparate(le[ne], le[ue]), (v = ne), (x = ue)),
      (ie !== w || ve !== S || ye !== A || J !== D) &&
        (s.blendFuncSeparate(Oe[ie], Oe[ve], Oe[ye], Oe[J]),
        (w = ie),
        (S = ve),
        (A = ye),
        (D = J)),
      (f = T),
      (R = null);
  }
  function _e(T, ne) {
    T.side === Wi ? F(2884) : Y(2884);
    let ie = T.side === Pt;
    ne && (ie = !ie),
      at(ie),
      T.blending === Ci && T.transparent === !1
        ? Le(Mi)
        : Le(
            T.blending,
            T.blendEquation,
            T.blendSrc,
            T.blendDst,
            T.blendEquationAlpha,
            T.blendSrcAlpha,
            T.blendDstAlpha,
            T.premultipliedAlpha
          ),
      l.setFunc(T.depthFunc),
      l.setTest(T.depthTest),
      l.setMask(T.depthWrite),
      o.setMask(T.colorWrite);
    const ve = T.stencilWrite;
    c.setTest(ve),
      ve &&
        (c.setMask(T.stencilWriteMask),
        c.setFunc(T.stencilFunc, T.stencilRef, T.stencilFuncMask),
        c.setOp(T.stencilFail, T.stencilZFail, T.stencilZPass)),
      Ht(T.polygonOffset, T.polygonOffsetFactor, T.polygonOffsetUnits),
      T.alphaToCoverage === !0 ? Y(32926) : F(32926);
  }
  function at(T) {
    b !== T && (T ? s.frontFace(2304) : s.frontFace(2305), (b = T));
  }
  function xt(T) {
    T !== Vc
      ? (Y(2884),
        T !== E &&
          (T === Ba
            ? s.cullFace(1029)
            : T === Hc
            ? s.cullFace(1028)
            : s.cullFace(1032)))
      : F(2884),
      (E = T);
  }
  function St(T) {
    T !== k && (I && s.lineWidth(T), (k = T));
  }
  function Ht(T, ne, ie) {
    T
      ? (Y(32823),
        (B !== ne || ee !== ie) &&
          (s.polygonOffset(ne, ie), (B = ne), (ee = ie)))
      : F(32823);
  }
  function st(T) {
    T ? Y(3089) : F(3089);
  }
  function Ge(T) {
    T === void 0 && (T = 33984 + re - 1),
      X !== T && (s.activeTexture(T), (X = T));
  }
  function ei(T, ne) {
    X === null && Ge();
    let ie = j[X];
    ie === void 0 && ((ie = { type: void 0, texture: void 0 }), (j[X] = ie)),
      (ie.type !== T || ie.texture !== ne) &&
        (s.bindTexture(T, ne || he[T]), (ie.type = T), (ie.texture = ne));
  }
  function ti() {
    const T = j[X];
    T !== void 0 &&
      T.type !== void 0 &&
      (s.bindTexture(T.type, null), (T.type = void 0), (T.texture = void 0));
  }
  function M() {
    try {
      s.compressedTexImage2D.apply(s, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function _() {
    try {
      s.texSubImage2D.apply(s, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function H() {
    try {
      s.texSubImage3D.apply(s, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function K() {
    try {
      s.compressedTexSubImage2D.apply(s, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function te() {
    try {
      s.texStorage2D.apply(s, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function oe() {
    try {
      s.texStorage3D.apply(s, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function Se() {
    try {
      s.texImage2D.apply(s, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function O() {
    try {
      s.texImage3D.apply(s, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function ge(T) {
    Q.equals(T) === !1 && (s.scissor(T.x, T.y, T.z, T.w), Q.copy(T));
  }
  function de(T) {
    $.equals(T) === !1 && (s.viewport(T.x, T.y, T.z, T.w), $.copy(T));
  }
  function ce() {
    s.disable(3042),
      s.disable(2884),
      s.disable(2929),
      s.disable(32823),
      s.disable(3089),
      s.disable(2960),
      s.disable(32926),
      s.blendEquation(32774),
      s.blendFunc(1, 0),
      s.blendFuncSeparate(1, 0, 1, 0),
      s.colorMask(!0, !0, !0, !0),
      s.clearColor(0, 0, 0, 0),
      s.depthMask(!0),
      s.depthFunc(513),
      s.clearDepth(1),
      s.stencilMask(4294967295),
      s.stencilFunc(519, 0, 4294967295),
      s.stencilOp(7680, 7680, 7680),
      s.clearStencil(0),
      s.cullFace(1029),
      s.frontFace(2305),
      s.polygonOffset(0, 0),
      s.activeTexture(33984),
      s.bindFramebuffer(36160, null),
      i === !0 &&
        (s.bindFramebuffer(36009, null), s.bindFramebuffer(36008, null)),
      s.useProgram(null),
      s.lineWidth(1),
      s.scissor(0, 0, s.canvas.width, s.canvas.height),
      s.viewport(0, 0, s.canvas.width, s.canvas.height),
      (h = {}),
      (X = null),
      (j = {}),
      (d = {}),
      (u = new WeakMap()),
      (m = []),
      (g = null),
      (p = !1),
      (f = null),
      (v = null),
      (w = null),
      (S = null),
      (x = null),
      (A = null),
      (D = null),
      (R = !1),
      (b = null),
      (E = null),
      (k = null),
      (B = null),
      (ee = null),
      Q.set(0, 0, s.canvas.width, s.canvas.height),
      $.set(0, 0, s.canvas.width, s.canvas.height),
      o.reset(),
      l.reset(),
      c.reset();
  }
  return {
    buffers: { color: o, depth: l, stencil: c },
    enable: Y,
    disable: F,
    bindFramebuffer: ze,
    drawBuffers: Me,
    useProgram: we,
    setBlending: Le,
    setMaterial: _e,
    setFlipSided: at,
    setCullFace: xt,
    setLineWidth: St,
    setPolygonOffset: Ht,
    setScissorTest: st,
    activeTexture: Ge,
    bindTexture: ei,
    unbindTexture: ti,
    compressedTexImage2D: M,
    texImage2D: Se,
    texImage3D: O,
    texStorage2D: te,
    texStorage3D: oe,
    texSubImage2D: _,
    texSubImage3D: H,
    compressedTexSubImage2D: K,
    scissor: ge,
    viewport: de,
    reset: ce,
  };
}
function Mm(s, e, t, i, n, r, a) {
  const o = n.isWebGL2,
    l = n.maxTextures,
    c = n.maxCubemapSize,
    h = n.maxTextureSize,
    d = n.maxSamples,
    u = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    m = /OculusBrowser/g.test(navigator.userAgent),
    g = new WeakMap();
  let p;
  const f = new WeakMap();
  let v = !1;
  try {
    v =
      typeof OffscreenCanvas != "undefined" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function w(M, _) {
    return v ? new OffscreenCanvas(M, _) : Un("canvas");
  }
  function S(M, _, H, K) {
    let te = 1;
    if (
      ((M.width > K || M.height > K) && (te = K / Math.max(M.width, M.height)),
      te < 1 || _ === !0)
    )
      if (
        (typeof HTMLImageElement != "undefined" &&
          M instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement != "undefined" &&
          M instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap != "undefined" && M instanceof ImageBitmap)
      ) {
        const oe = _ ? ia : Math.floor,
          Se = oe(te * M.width),
          O = oe(te * M.height);
        p === void 0 && (p = w(Se, O));
        const ge = H ? w(Se, O) : p;
        return (
          (ge.width = Se),
          (ge.height = O),
          ge.getContext("2d").drawImage(M, 0, 0, Se, O),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              M.width +
              "x" +
              M.height +
              ") to (" +
              Se +
              "x" +
              O +
              ")."
          ),
          ge
        );
      } else
        return (
          "data" in M &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                M.width +
                "x" +
                M.height +
                ")."
            ),
          M
        );
    return M;
  }
  function x(M) {
    return po(M.width) && po(M.height);
  }
  function A(M) {
    return o
      ? !1
      : M.wrapS !== kt ||
          M.wrapT !== kt ||
          (M.minFilter !== mt && M.minFilter !== bt);
  }
  function D(M, _) {
    return M.generateMipmaps && _ && M.minFilter !== mt && M.minFilter !== bt;
  }
  function R(M) {
    s.generateMipmap(M);
  }
  function b(M, _, H, K, te = !1) {
    if (o === !1) return _;
    if (M !== null) {
      if (s[M] !== void 0) return s[M];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          M +
          "'"
      );
    }
    let oe = _;
    return (
      _ === 6403 &&
        (H === 5126 && (oe = 33326),
        H === 5131 && (oe = 33325),
        H === 5121 && (oe = 33321)),
      _ === 33319 &&
        (H === 5126 && (oe = 33328),
        H === 5131 && (oe = 33327),
        H === 5121 && (oe = 33323)),
      _ === 6408 &&
        (H === 5126 && (oe = 34836),
        H === 5131 && (oe = 34842),
        H === 5121 && (oe = K === qe && te === !1 ? 35907 : 32856),
        H === 32819 && (oe = 32854),
        H === 32820 && (oe = 32855)),
      (oe === 33325 ||
        oe === 33326 ||
        oe === 33327 ||
        oe === 33328 ||
        oe === 34842 ||
        oe === 34836) &&
        e.get("EXT_color_buffer_float"),
      oe
    );
  }
  function E(M, _, H) {
    return D(M, H) === !0 ||
      (M.isFramebufferTexture && M.minFilter !== mt && M.minFilter !== bt)
      ? Math.log2(Math.max(_.width, _.height)) + 1
      : M.mipmaps !== void 0 && M.mipmaps.length > 0
      ? M.mipmaps.length
      : M.isCompressedTexture && Array.isArray(M.image)
      ? _.mipmaps.length
      : 1;
  }
  function k(M) {
    return M === mt || M === Va || M === Ha ? 9728 : 9729;
  }
  function B(M) {
    const _ = M.target;
    _.removeEventListener("dispose", B), re(_), _.isVideoTexture && g.delete(_);
  }
  function ee(M) {
    const _ = M.target;
    _.removeEventListener("dispose", ee), q(_);
  }
  function re(M) {
    const _ = i.get(M);
    if (_.__webglInit === void 0) return;
    const H = M.source,
      K = f.get(H);
    if (K) {
      const te = K[_.__cacheKey];
      te.usedTimes--,
        te.usedTimes === 0 && I(M),
        Object.keys(K).length === 0 && f.delete(H);
    }
    i.remove(M);
  }
  function I(M) {
    const _ = i.get(M);
    s.deleteTexture(_.__webglTexture);
    const H = M.source,
      K = f.get(H);
    delete K[_.__cacheKey], a.memory.textures--;
  }
  function q(M) {
    const _ = M.texture,
      H = i.get(M),
      K = i.get(_);
    if (
      (K.__webglTexture !== void 0 &&
        (s.deleteTexture(K.__webglTexture), a.memory.textures--),
      M.depthTexture && M.depthTexture.dispose(),
      M.isWebGLCubeRenderTarget)
    )
      for (let te = 0; te < 6; te++)
        s.deleteFramebuffer(H.__webglFramebuffer[te]),
          H.__webglDepthbuffer &&
            s.deleteRenderbuffer(H.__webglDepthbuffer[te]);
    else {
      if (
        (s.deleteFramebuffer(H.__webglFramebuffer),
        H.__webglDepthbuffer && s.deleteRenderbuffer(H.__webglDepthbuffer),
        H.__webglMultisampledFramebuffer &&
          s.deleteFramebuffer(H.__webglMultisampledFramebuffer),
        H.__webglColorRenderbuffer)
      )
        for (let te = 0; te < H.__webglColorRenderbuffer.length; te++)
          H.__webglColorRenderbuffer[te] &&
            s.deleteRenderbuffer(H.__webglColorRenderbuffer[te]);
      H.__webglDepthRenderbuffer &&
        s.deleteRenderbuffer(H.__webglDepthRenderbuffer);
    }
    if (M.isWebGLMultipleRenderTargets)
      for (let te = 0, oe = _.length; te < oe; te++) {
        const Se = i.get(_[te]);
        Se.__webglTexture &&
          (s.deleteTexture(Se.__webglTexture), a.memory.textures--),
          i.remove(_[te]);
      }
    i.remove(_), i.remove(M);
  }
  let G = 0;
  function X() {
    G = 0;
  }
  function j() {
    const M = G;
    return (
      M >= l &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            M +
            " texture units while this GPU supports only " +
            l
        ),
      (G += 1),
      M
    );
  }
  function U(M) {
    const _ = [];
    return (
      _.push(M.wrapS),
      _.push(M.wrapT),
      _.push(M.magFilter),
      _.push(M.minFilter),
      _.push(M.anisotropy),
      _.push(M.internalFormat),
      _.push(M.format),
      _.push(M.type),
      _.push(M.generateMipmaps),
      _.push(M.premultiplyAlpha),
      _.push(M.flipY),
      _.push(M.unpackAlignment),
      _.push(M.encoding),
      _.join()
    );
  }
  function V(M, _) {
    const H = i.get(M);
    if (
      (M.isVideoTexture && ei(M),
      M.isRenderTargetTexture === !1 &&
        M.version > 0 &&
        H.__version !== M.version)
    ) {
      const K = M.image;
      if (K === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else if (K.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      else {
        Me(H, M, _);
        return;
      }
    }
    t.activeTexture(33984 + _), t.bindTexture(3553, H.__webglTexture);
  }
  function Q(M, _) {
    const H = i.get(M);
    if (M.version > 0 && H.__version !== M.version) {
      Me(H, M, _);
      return;
    }
    t.activeTexture(33984 + _), t.bindTexture(35866, H.__webglTexture);
  }
  function $(M, _) {
    const H = i.get(M);
    if (M.version > 0 && H.__version !== M.version) {
      Me(H, M, _);
      return;
    }
    t.activeTexture(33984 + _), t.bindTexture(32879, H.__webglTexture);
  }
  function se(M, _) {
    const H = i.get(M);
    if (M.version > 0 && H.__version !== M.version) {
      we(H, M, _);
      return;
    }
    t.activeTexture(33984 + _), t.bindTexture(34067, H.__webglTexture);
  }
  const he = { [Xs]: 10497, [kt]: 33071, [ea]: 33648 },
    Y = {
      [mt]: 9728,
      [Va]: 9984,
      [Ha]: 9986,
      [bt]: 9729,
      [xh]: 9985,
      [kn]: 9987,
    };
  function F(M, _, H) {
    if (
      (H
        ? (s.texParameteri(M, 10242, he[_.wrapS]),
          s.texParameteri(M, 10243, he[_.wrapT]),
          (M === 32879 || M === 35866) &&
            s.texParameteri(M, 32882, he[_.wrapR]),
          s.texParameteri(M, 10240, Y[_.magFilter]),
          s.texParameteri(M, 10241, Y[_.minFilter]))
        : (s.texParameteri(M, 10242, 33071),
          s.texParameteri(M, 10243, 33071),
          (M === 32879 || M === 35866) && s.texParameteri(M, 32882, 33071),
          (_.wrapS !== kt || _.wrapT !== kt) &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
            ),
          s.texParameteri(M, 10240, k(_.magFilter)),
          s.texParameteri(M, 10241, k(_.minFilter)),
          _.minFilter !== mt &&
            _.minFilter !== bt &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
            )),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      const K = e.get("EXT_texture_filter_anisotropic");
      if (
        (_.type === Oi && e.has("OES_texture_float_linear") === !1) ||
        (o === !1 &&
          _.type === js &&
          e.has("OES_texture_half_float_linear") === !1)
      )
        return;
      (_.anisotropy > 1 || i.get(_).__currentAnisotropy) &&
        (s.texParameterf(
          M,
          K.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(_.anisotropy, n.getMaxAnisotropy())
        ),
        (i.get(_).__currentAnisotropy = _.anisotropy));
    }
  }
  function ze(M, _) {
    let H = !1;
    M.__webglInit === void 0 &&
      ((M.__webglInit = !0), _.addEventListener("dispose", B));
    const K = _.source;
    let te = f.get(K);
    te === void 0 && ((te = {}), f.set(K, te));
    const oe = U(_);
    if (oe !== M.__cacheKey) {
      te[oe] === void 0 &&
        ((te[oe] = { texture: s.createTexture(), usedTimes: 0 }),
        a.memory.textures++,
        (H = !0)),
        te[oe].usedTimes++;
      const Se = te[M.__cacheKey];
      Se !== void 0 &&
        (te[M.__cacheKey].usedTimes--, Se.usedTimes === 0 && I(_)),
        (M.__cacheKey = oe),
        (M.__webglTexture = te[oe].texture);
    }
    return H;
  }
  function Me(M, _, H) {
    let K = 3553;
    _.isDataArrayTexture && (K = 35866), _.isData3DTexture && (K = 32879);
    const te = ze(M, _),
      oe = _.source;
    if (
      (t.activeTexture(33984 + H),
      t.bindTexture(K, M.__webglTexture),
      oe.version !== oe.__currentVersion || te === !0)
    ) {
      s.pixelStorei(37440, _.flipY),
        s.pixelStorei(37441, _.premultiplyAlpha),
        s.pixelStorei(3317, _.unpackAlignment),
        s.pixelStorei(37443, 0);
      const Se = A(_) && x(_.image) === !1;
      let O = S(_.image, Se, !1, h);
      O = ti(_, O);
      const ge = x(O) || o,
        de = r.convert(_.format, _.encoding);
      let ce = r.convert(_.type),
        T = b(_.internalFormat, de, ce, _.encoding, _.isVideoTexture);
      F(K, _, ge);
      let ne;
      const ie = _.mipmaps,
        ve = o && _.isVideoTexture !== !0,
        ue = oe.__currentVersion === void 0 || te === !0,
        ye = E(_, O, ge);
      if (_.isDepthTexture)
        (T = 6402),
          o
            ? _.type === Oi
              ? (T = 36012)
              : _.type === ki
              ? (T = 33190)
              : _.type === xs
              ? (T = 35056)
              : (T = 33189)
            : _.type === Oi &&
              console.error(
                "WebGLRenderer: Floating point depth texture requires WebGL2."
              ),
          _.format === Vi &&
            T === 6402 &&
            _.type !== Ol &&
            _.type !== ki &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
            ),
            (_.type = ki),
            (ce = r.convert(_.type))),
          _.format === As &&
            T === 6402 &&
            ((T = 34041),
            _.type !== xs &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
              ),
              (_.type = xs),
              (ce = r.convert(_.type)))),
          ue &&
            (ve
              ? t.texStorage2D(3553, 1, T, O.width, O.height)
              : t.texImage2D(3553, 0, T, O.width, O.height, 0, de, ce, null));
      else if (_.isDataTexture)
        if (ie.length > 0 && ge) {
          ve && ue && t.texStorage2D(3553, ye, T, ie[0].width, ie[0].height);
          for (let J = 0, be = ie.length; J < be; J++)
            (ne = ie[J]),
              ve
                ? t.texSubImage2D(
                    3553,
                    J,
                    0,
                    0,
                    ne.width,
                    ne.height,
                    de,
                    ce,
                    ne.data
                  )
                : t.texImage2D(
                    3553,
                    J,
                    T,
                    ne.width,
                    ne.height,
                    0,
                    de,
                    ce,
                    ne.data
                  );
          _.generateMipmaps = !1;
        } else
          ve
            ? (ue && t.texStorage2D(3553, ye, T, O.width, O.height),
              t.texSubImage2D(3553, 0, 0, 0, O.width, O.height, de, ce, O.data))
            : t.texImage2D(3553, 0, T, O.width, O.height, 0, de, ce, O.data);
      else if (_.isCompressedTexture) {
        ve && ue && t.texStorage2D(3553, ye, T, ie[0].width, ie[0].height);
        for (let J = 0, be = ie.length; J < be; J++)
          (ne = ie[J]),
            _.format !== Ot
              ? de !== null
                ? ve
                  ? t.compressedTexSubImage2D(
                      3553,
                      J,
                      0,
                      0,
                      ne.width,
                      ne.height,
                      de,
                      ne.data
                    )
                  : t.compressedTexImage2D(
                      3553,
                      J,
                      T,
                      ne.width,
                      ne.height,
                      0,
                      ne.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                  )
              : ve
              ? t.texSubImage2D(
                  3553,
                  J,
                  0,
                  0,
                  ne.width,
                  ne.height,
                  de,
                  ce,
                  ne.data
                )
              : t.texImage2D(
                  3553,
                  J,
                  T,
                  ne.width,
                  ne.height,
                  0,
                  de,
                  ce,
                  ne.data
                );
      } else if (_.isDataArrayTexture)
        ve
          ? (ue && t.texStorage3D(35866, ye, T, O.width, O.height, O.depth),
            t.texSubImage3D(
              35866,
              0,
              0,
              0,
              0,
              O.width,
              O.height,
              O.depth,
              de,
              ce,
              O.data
            ))
          : t.texImage3D(
              35866,
              0,
              T,
              O.width,
              O.height,
              O.depth,
              0,
              de,
              ce,
              O.data
            );
      else if (_.isData3DTexture)
        ve
          ? (ue && t.texStorage3D(32879, ye, T, O.width, O.height, O.depth),
            t.texSubImage3D(
              32879,
              0,
              0,
              0,
              0,
              O.width,
              O.height,
              O.depth,
              de,
              ce,
              O.data
            ))
          : t.texImage3D(
              32879,
              0,
              T,
              O.width,
              O.height,
              O.depth,
              0,
              de,
              ce,
              O.data
            );
      else if (_.isFramebufferTexture) {
        if (ue)
          if (ve) t.texStorage2D(3553, ye, T, O.width, O.height);
          else {
            let J = O.width,
              be = O.height;
            for (let Ue = 0; Ue < ye; Ue++)
              t.texImage2D(3553, Ue, T, J, be, 0, de, ce, null),
                (J >>= 1),
                (be >>= 1);
          }
      } else if (ie.length > 0 && ge) {
        ve && ue && t.texStorage2D(3553, ye, T, ie[0].width, ie[0].height);
        for (let J = 0, be = ie.length; J < be; J++)
          (ne = ie[J]),
            ve
              ? t.texSubImage2D(3553, J, 0, 0, de, ce, ne)
              : t.texImage2D(3553, J, T, de, ce, ne);
        _.generateMipmaps = !1;
      } else
        ve
          ? (ue && t.texStorage2D(3553, ye, T, O.width, O.height),
            t.texSubImage2D(3553, 0, 0, 0, de, ce, O))
          : t.texImage2D(3553, 0, T, de, ce, O);
      D(_, ge) && R(K),
        (oe.__currentVersion = oe.version),
        _.onUpdate && _.onUpdate(_);
    }
    M.__version = _.version;
  }
  function we(M, _, H) {
    if (_.image.length !== 6) return;
    const K = ze(M, _),
      te = _.source;
    if (
      (t.activeTexture(33984 + H),
      t.bindTexture(34067, M.__webglTexture),
      te.version !== te.__currentVersion || K === !0)
    ) {
      s.pixelStorei(37440, _.flipY),
        s.pixelStorei(37441, _.premultiplyAlpha),
        s.pixelStorei(3317, _.unpackAlignment),
        s.pixelStorei(37443, 0);
      const oe = _.isCompressedTexture || _.image[0].isCompressedTexture,
        Se = _.image[0] && _.image[0].isDataTexture,
        O = [];
      for (let J = 0; J < 6; J++)
        !oe && !Se
          ? (O[J] = S(_.image[J], !1, !0, c))
          : (O[J] = Se ? _.image[J].image : _.image[J]),
          (O[J] = ti(_, O[J]));
      const ge = O[0],
        de = x(ge) || o,
        ce = r.convert(_.format, _.encoding),
        T = r.convert(_.type),
        ne = b(_.internalFormat, ce, T, _.encoding),
        ie = o && _.isVideoTexture !== !0,
        ve = te.__currentVersion === void 0 || K === !0;
      let ue = E(_, ge, de);
      F(34067, _, de);
      let ye;
      if (oe) {
        ie && ve && t.texStorage2D(34067, ue, ne, ge.width, ge.height);
        for (let J = 0; J < 6; J++) {
          ye = O[J].mipmaps;
          for (let be = 0; be < ye.length; be++) {
            const Ue = ye[be];
            _.format !== Ot
              ? ce !== null
                ? ie
                  ? t.compressedTexSubImage2D(
                      34069 + J,
                      be,
                      0,
                      0,
                      Ue.width,
                      Ue.height,
                      ce,
                      Ue.data
                    )
                  : t.compressedTexImage2D(
                      34069 + J,
                      be,
                      ne,
                      Ue.width,
                      Ue.height,
                      0,
                      Ue.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                  )
              : ie
              ? t.texSubImage2D(
                  34069 + J,
                  be,
                  0,
                  0,
                  Ue.width,
                  Ue.height,
                  ce,
                  T,
                  Ue.data
                )
              : t.texImage2D(
                  34069 + J,
                  be,
                  ne,
                  Ue.width,
                  Ue.height,
                  0,
                  ce,
                  T,
                  Ue.data
                );
          }
        }
      } else {
        (ye = _.mipmaps),
          ie &&
            ve &&
            (ye.length > 0 && ue++,
            t.texStorage2D(34067, ue, ne, O[0].width, O[0].height));
        for (let J = 0; J < 6; J++)
          if (Se) {
            ie
              ? t.texSubImage2D(
                  34069 + J,
                  0,
                  0,
                  0,
                  O[J].width,
                  O[J].height,
                  ce,
                  T,
                  O[J].data
                )
              : t.texImage2D(
                  34069 + J,
                  0,
                  ne,
                  O[J].width,
                  O[J].height,
                  0,
                  ce,
                  T,
                  O[J].data
                );
            for (let be = 0; be < ye.length; be++) {
              const Be = ye[be].image[J].image;
              ie
                ? t.texSubImage2D(
                    34069 + J,
                    be + 1,
                    0,
                    0,
                    Be.width,
                    Be.height,
                    ce,
                    T,
                    Be.data
                  )
                : t.texImage2D(
                    34069 + J,
                    be + 1,
                    ne,
                    Be.width,
                    Be.height,
                    0,
                    ce,
                    T,
                    Be.data
                  );
            }
          } else {
            ie
              ? t.texSubImage2D(34069 + J, 0, 0, 0, ce, T, O[J])
              : t.texImage2D(34069 + J, 0, ne, ce, T, O[J]);
            for (let be = 0; be < ye.length; be++) {
              const Ue = ye[be];
              ie
                ? t.texSubImage2D(34069 + J, be + 1, 0, 0, ce, T, Ue.image[J])
                : t.texImage2D(34069 + J, be + 1, ne, ce, T, Ue.image[J]);
            }
          }
      }
      D(_, de) && R(34067),
        (te.__currentVersion = te.version),
        _.onUpdate && _.onUpdate(_);
    }
    M.__version = _.version;
  }
  function le(M, _, H, K, te) {
    const oe = r.convert(H.format, H.encoding),
      Se = r.convert(H.type),
      O = b(H.internalFormat, oe, Se, H.encoding);
    i.get(_).__hasExternalTextures ||
      (te === 32879 || te === 35866
        ? t.texImage3D(te, 0, O, _.width, _.height, _.depth, 0, oe, Se, null)
        : t.texImage2D(te, 0, O, _.width, _.height, 0, oe, Se, null)),
      t.bindFramebuffer(36160, M),
      Ge(_)
        ? u.framebufferTexture2DMultisampleEXT(
            36160,
            K,
            te,
            i.get(H).__webglTexture,
            0,
            st(_)
          )
        : s.framebufferTexture2D(36160, K, te, i.get(H).__webglTexture, 0),
      t.bindFramebuffer(36160, null);
  }
  function Oe(M, _, H) {
    if ((s.bindRenderbuffer(36161, M), _.depthBuffer && !_.stencilBuffer)) {
      let K = 33189;
      if (H || Ge(_)) {
        const te = _.depthTexture;
        te &&
          te.isDepthTexture &&
          (te.type === Oi ? (K = 36012) : te.type === ki && (K = 33190));
        const oe = st(_);
        Ge(_)
          ? u.renderbufferStorageMultisampleEXT(36161, oe, K, _.width, _.height)
          : s.renderbufferStorageMultisample(36161, oe, K, _.width, _.height);
      } else s.renderbufferStorage(36161, K, _.width, _.height);
      s.framebufferRenderbuffer(36160, 36096, 36161, M);
    } else if (_.depthBuffer && _.stencilBuffer) {
      const K = st(_);
      H && Ge(_) === !1
        ? s.renderbufferStorageMultisample(36161, K, 35056, _.width, _.height)
        : Ge(_)
        ? u.renderbufferStorageMultisampleEXT(
            36161,
            K,
            35056,
            _.width,
            _.height
          )
        : s.renderbufferStorage(36161, 34041, _.width, _.height),
        s.framebufferRenderbuffer(36160, 33306, 36161, M);
    } else {
      const K = _.isWebGLMultipleRenderTargets === !0 ? _.texture : [_.texture];
      for (let te = 0; te < K.length; te++) {
        const oe = K[te],
          Se = r.convert(oe.format, oe.encoding),
          O = r.convert(oe.type),
          ge = b(oe.internalFormat, Se, O, oe.encoding),
          de = st(_);
        H && Ge(_) === !1
          ? s.renderbufferStorageMultisample(36161, de, ge, _.width, _.height)
          : Ge(_)
          ? u.renderbufferStorageMultisampleEXT(
              36161,
              de,
              ge,
              _.width,
              _.height
            )
          : s.renderbufferStorage(36161, ge, _.width, _.height);
      }
    }
    s.bindRenderbuffer(36161, null);
  }
  function Le(M, _) {
    if (_ && _.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported"
      );
    if (
      (t.bindFramebuffer(36160, M),
      !(_.depthTexture && _.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
      );
    (!i.get(_.depthTexture).__webglTexture ||
      _.depthTexture.image.width !== _.width ||
      _.depthTexture.image.height !== _.height) &&
      ((_.depthTexture.image.width = _.width),
      (_.depthTexture.image.height = _.height),
      (_.depthTexture.needsUpdate = !0)),
      V(_.depthTexture, 0);
    const K = i.get(_.depthTexture).__webglTexture,
      te = st(_);
    if (_.depthTexture.format === Vi)
      Ge(_)
        ? u.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, K, 0, te)
        : s.framebufferTexture2D(36160, 36096, 3553, K, 0);
    else if (_.depthTexture.format === As)
      Ge(_)
        ? u.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, K, 0, te)
        : s.framebufferTexture2D(36160, 33306, 3553, K, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function _e(M) {
    const _ = i.get(M),
      H = M.isWebGLCubeRenderTarget === !0;
    if (M.depthTexture && !_.__autoAllocateDepthBuffer) {
      if (H)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      Le(_.__webglFramebuffer, M);
    } else if (H) {
      _.__webglDepthbuffer = [];
      for (let K = 0; K < 6; K++)
        t.bindFramebuffer(36160, _.__webglFramebuffer[K]),
          (_.__webglDepthbuffer[K] = s.createRenderbuffer()),
          Oe(_.__webglDepthbuffer[K], M, !1);
    } else
      t.bindFramebuffer(36160, _.__webglFramebuffer),
        (_.__webglDepthbuffer = s.createRenderbuffer()),
        Oe(_.__webglDepthbuffer, M, !1);
    t.bindFramebuffer(36160, null);
  }
  function at(M, _, H) {
    const K = i.get(M);
    _ !== void 0 && le(K.__webglFramebuffer, M, M.texture, 36064, 3553),
      H !== void 0 && _e(M);
  }
  function xt(M) {
    const _ = M.texture,
      H = i.get(M),
      K = i.get(_);
    M.addEventListener("dispose", ee),
      M.isWebGLMultipleRenderTargets !== !0 &&
        (K.__webglTexture === void 0 && (K.__webglTexture = s.createTexture()),
        (K.__version = _.version),
        a.memory.textures++);
    const te = M.isWebGLCubeRenderTarget === !0,
      oe = M.isWebGLMultipleRenderTargets === !0,
      Se = x(M) || o;
    if (te) {
      H.__webglFramebuffer = [];
      for (let O = 0; O < 6; O++)
        H.__webglFramebuffer[O] = s.createFramebuffer();
    } else {
      if (((H.__webglFramebuffer = s.createFramebuffer()), oe))
        if (n.drawBuffers) {
          const O = M.texture;
          for (let ge = 0, de = O.length; ge < de; ge++) {
            const ce = i.get(O[ge]);
            ce.__webglTexture === void 0 &&
              ((ce.__webglTexture = s.createTexture()), a.memory.textures++);
          }
        } else
          console.warn(
            "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
          );
      if (o && M.samples > 0 && Ge(M) === !1) {
        const O = oe ? _ : [_];
        (H.__webglMultisampledFramebuffer = s.createFramebuffer()),
          (H.__webglColorRenderbuffer = []),
          t.bindFramebuffer(36160, H.__webglMultisampledFramebuffer);
        for (let ge = 0; ge < O.length; ge++) {
          const de = O[ge];
          (H.__webglColorRenderbuffer[ge] = s.createRenderbuffer()),
            s.bindRenderbuffer(36161, H.__webglColorRenderbuffer[ge]);
          const ce = r.convert(de.format, de.encoding),
            T = r.convert(de.type),
            ne = b(de.internalFormat, ce, T, de.encoding),
            ie = st(M);
          s.renderbufferStorageMultisample(36161, ie, ne, M.width, M.height),
            s.framebufferRenderbuffer(
              36160,
              36064 + ge,
              36161,
              H.__webglColorRenderbuffer[ge]
            );
        }
        s.bindRenderbuffer(36161, null),
          M.depthBuffer &&
            ((H.__webglDepthRenderbuffer = s.createRenderbuffer()),
            Oe(H.__webglDepthRenderbuffer, M, !0)),
          t.bindFramebuffer(36160, null);
      }
    }
    if (te) {
      t.bindTexture(34067, K.__webglTexture), F(34067, _, Se);
      for (let O = 0; O < 6; O++)
        le(H.__webglFramebuffer[O], M, _, 36064, 34069 + O);
      D(_, Se) && R(34067), t.unbindTexture();
    } else if (oe) {
      const O = M.texture;
      for (let ge = 0, de = O.length; ge < de; ge++) {
        const ce = O[ge],
          T = i.get(ce);
        t.bindTexture(3553, T.__webglTexture),
          F(3553, ce, Se),
          le(H.__webglFramebuffer, M, ce, 36064 + ge, 3553),
          D(ce, Se) && R(3553);
      }
      t.unbindTexture();
    } else {
      let O = 3553;
      (M.isWebGL3DRenderTarget || M.isWebGLArrayRenderTarget) &&
        (o
          ? (O = M.isWebGL3DRenderTarget ? 32879 : 35866)
          : console.error(
              "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
            )),
        t.bindTexture(O, K.__webglTexture),
        F(O, _, Se),
        le(H.__webglFramebuffer, M, _, 36064, O),
        D(_, Se) && R(O),
        t.unbindTexture();
    }
    M.depthBuffer && _e(M);
  }
  function St(M) {
    const _ = x(M) || o,
      H = M.isWebGLMultipleRenderTargets === !0 ? M.texture : [M.texture];
    for (let K = 0, te = H.length; K < te; K++) {
      const oe = H[K];
      if (D(oe, _)) {
        const Se = M.isWebGLCubeRenderTarget ? 34067 : 3553,
          O = i.get(oe).__webglTexture;
        t.bindTexture(Se, O), R(Se), t.unbindTexture();
      }
    }
  }
  function Ht(M) {
    if (o && M.samples > 0 && Ge(M) === !1) {
      const _ = M.isWebGLMultipleRenderTargets ? M.texture : [M.texture],
        H = M.width,
        K = M.height;
      let te = 16384;
      const oe = [],
        Se = M.stencilBuffer ? 33306 : 36096,
        O = i.get(M),
        ge = M.isWebGLMultipleRenderTargets === !0;
      if (ge)
        for (let de = 0; de < _.length; de++)
          t.bindFramebuffer(36160, O.__webglMultisampledFramebuffer),
            s.framebufferRenderbuffer(36160, 36064 + de, 36161, null),
            t.bindFramebuffer(36160, O.__webglFramebuffer),
            s.framebufferTexture2D(36009, 36064 + de, 3553, null, 0);
      t.bindFramebuffer(36008, O.__webglMultisampledFramebuffer),
        t.bindFramebuffer(36009, O.__webglFramebuffer);
      for (let de = 0; de < _.length; de++) {
        oe.push(36064 + de), M.depthBuffer && oe.push(Se);
        const ce =
          O.__ignoreDepthValues !== void 0 ? O.__ignoreDepthValues : !1;
        if (
          (ce === !1 &&
            (M.depthBuffer && (te |= 256), M.stencilBuffer && (te |= 1024)),
          ge &&
            s.framebufferRenderbuffer(
              36008,
              36064,
              36161,
              O.__webglColorRenderbuffer[de]
            ),
          ce === !0 &&
            (s.invalidateFramebuffer(36008, [Se]),
            s.invalidateFramebuffer(36009, [Se])),
          ge)
        ) {
          const T = i.get(_[de]).__webglTexture;
          s.framebufferTexture2D(36009, 36064, 3553, T, 0);
        }
        s.blitFramebuffer(0, 0, H, K, 0, 0, H, K, te, 9728),
          m && s.invalidateFramebuffer(36008, oe);
      }
      if ((t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), ge))
        for (let de = 0; de < _.length; de++) {
          t.bindFramebuffer(36160, O.__webglMultisampledFramebuffer),
            s.framebufferRenderbuffer(
              36160,
              36064 + de,
              36161,
              O.__webglColorRenderbuffer[de]
            );
          const ce = i.get(_[de]).__webglTexture;
          t.bindFramebuffer(36160, O.__webglFramebuffer),
            s.framebufferTexture2D(36009, 36064 + de, 3553, ce, 0);
        }
      t.bindFramebuffer(36009, O.__webglMultisampledFramebuffer);
    }
  }
  function st(M) {
    return Math.min(d, M.samples);
  }
  function Ge(M) {
    const _ = i.get(M);
    return (
      o &&
      M.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      _.__useRenderToTexture !== !1
    );
  }
  function ei(M) {
    const _ = a.render.frame;
    g.get(M) !== _ && (g.set(M, _), M.update());
  }
  function ti(M, _) {
    const H = M.encoding,
      K = M.format,
      te = M.type;
    return (
      M.isCompressedTexture === !0 ||
        M.isVideoTexture === !0 ||
        M.format === ta ||
        (H !== Xi &&
          (H === qe
            ? o === !1
              ? e.has("EXT_sRGB") === !0 && K === Ot
                ? ((M.format = ta),
                  (M.minFilter = bt),
                  (M.generateMipmaps = !1))
                : (_ = Xl.sRGBToLinear(_))
              : (K !== Ot || te !== qi) &&
                console.warn(
                  "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture encoding:",
                H
              ))),
      _
    );
  }
  (this.allocateTextureUnit = j),
    (this.resetTextureUnits = X),
    (this.setTexture2D = V),
    (this.setTexture2DArray = Q),
    (this.setTexture3D = $),
    (this.setTextureCube = se),
    (this.rebindTextures = at),
    (this.setupRenderTarget = xt),
    (this.updateRenderTargetMipmap = St),
    (this.updateMultisampleRenderTarget = Ht),
    (this.setupDepthRenderbuffer = _e),
    (this.setupFrameBufferTexture = le),
    (this.useMultisampledRTT = Ge);
}
function Cm(s, e, t) {
  const i = t.isWebGL2;
  function n(r, a = null) {
    let o;
    if (r === qi) return 5121;
    if (r === Sh) return 32819;
    if (r === Mh) return 32820;
    if (r === yh) return 5120;
    if (r === bh) return 5122;
    if (r === Ol) return 5123;
    if (r === wh) return 5124;
    if (r === ki) return 5125;
    if (r === Oi) return 5126;
    if (r === js)
      return i
        ? 5131
        : ((o = e.get("OES_texture_half_float")),
          o !== null ? o.HALF_FLOAT_OES : null);
    if (r === Gl) return 6406;
    if (r === Ot) return 6408;
    if (r === Vl) return 6409;
    if (r === Ah) return 6410;
    if (r === Vi) return 6402;
    if (r === As) return 34041;
    if (r === Hl) return 6403;
    if (r === Ch)
      return (
        console.warn(
          "THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"
        ),
        6408
      );
    if (r === ta)
      return (o = e.get("EXT_sRGB")), o !== null ? o.SRGB_ALPHA_EXT : null;
    if (r === Th) return 36244;
    if (r === Eh) return 33319;
    if (r === Lh) return 33320;
    if (r === Dh) return 36249;
    if (r === jn || r === $n || r === Yn || r === Zn)
      if (a === qe)
        if (((o = e.get("WEBGL_compressed_texture_s3tc_srgb")), o !== null)) {
          if (r === jn) return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (r === $n) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (r === Yn) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (r === Zn) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((o = e.get("WEBGL_compressed_texture_s3tc")), o !== null)) {
        if (r === jn) return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (r === $n) return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (r === Yn) return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (r === Zn) return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (r === Wa || r === qa || r === Xa || r === ja)
      if (((o = e.get("WEBGL_compressed_texture_pvrtc")), o !== null)) {
        if (r === Wa) return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (r === qa) return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (r === Xa) return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (r === ja) return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (r === Ph)
      return (
        (o = e.get("WEBGL_compressed_texture_etc1")),
        o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (r === $a || r === Ya)
      if (((o = e.get("WEBGL_compressed_texture_etc")), o !== null)) {
        if (r === $a)
          return a === qe ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
        if (r === Ya)
          return a === qe
            ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : o.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      r === Za ||
      r === Ka ||
      r === Ja ||
      r === Qa ||
      r === eo ||
      r === to ||
      r === io ||
      r === so ||
      r === no ||
      r === ro ||
      r === ao ||
      r === oo ||
      r === lo ||
      r === co
    )
      if (((o = e.get("WEBGL_compressed_texture_astc")), o !== null)) {
        if (r === Za)
          return a === qe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (r === Ka)
          return a === qe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (r === Ja)
          return a === qe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (r === Qa)
          return a === qe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (r === eo)
          return a === qe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (r === to)
          return a === qe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (r === io)
          return a === qe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (r === so)
          return a === qe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (r === no)
          return a === qe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (r === ro)
          return a === qe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (r === ao)
          return a === qe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (r === oo)
          return a === qe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (r === lo)
          return a === qe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (r === co)
          return a === qe
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (r === ho)
      if (((o = e.get("EXT_texture_compression_bptc")), o !== null)) {
        if (r === ho)
          return a === qe
            ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else return null;
    return r === xs
      ? i
        ? 34042
        : ((o = e.get("WEBGL_depth_texture")),
          o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null)
      : s[r] !== void 0
      ? s[r]
      : null;
  }
  return { convert: n };
}
class Am extends wt {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class Ws extends He {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const Tm = { type: "move" };
class Cr {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new Ws()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new Ws()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new C()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new C())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new Ws()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new C()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new C())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, i) {
    let n = null,
      r = null,
      a = null;
    const o = this._targetRay,
      l = this._grip,
      c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = !0;
        for (const p of e.hand.values()) {
          const f = t.getJointPose(p, i);
          if (c.joints[p.jointName] === void 0) {
            const w = new Ws();
            (w.matrixAutoUpdate = !1),
              (w.visible = !1),
              (c.joints[p.jointName] = w),
              c.add(w);
          }
          const v = c.joints[p.jointName];
          f !== null &&
            (v.matrix.fromArray(f.transform.matrix),
            v.matrix.decompose(v.position, v.rotation, v.scale),
            (v.jointRadius = f.radius)),
            (v.visible = f !== null);
        }
        const h = c.joints["index-finger-tip"],
          d = c.joints["thumb-tip"],
          u = h.position.distanceTo(d.position),
          m = 0.02,
          g = 0.005;
        c.inputState.pinching && u > m + g
          ? ((c.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !c.inputState.pinching &&
            u <= m - g &&
            ((c.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        l !== null &&
          e.gripSpace &&
          ((r = t.getPose(e.gripSpace, i)),
          r !== null &&
            (l.matrix.fromArray(r.transform.matrix),
            l.matrix.decompose(l.position, l.rotation, l.scale),
            r.linearVelocity
              ? ((l.hasLinearVelocity = !0),
                l.linearVelocity.copy(r.linearVelocity))
              : (l.hasLinearVelocity = !1),
            r.angularVelocity
              ? ((l.hasAngularVelocity = !0),
                l.angularVelocity.copy(r.angularVelocity))
              : (l.hasAngularVelocity = !1)));
      o !== null &&
        ((n = t.getPose(e.targetRaySpace, i)),
        n === null && r !== null && (n = r),
        n !== null &&
          (o.matrix.fromArray(n.transform.matrix),
          o.matrix.decompose(o.position, o.rotation, o.scale),
          n.linearVelocity
            ? ((o.hasLinearVelocity = !0),
              o.linearVelocity.copy(n.linearVelocity))
            : (o.hasLinearVelocity = !1),
          n.angularVelocity
            ? ((o.hasAngularVelocity = !0),
              o.angularVelocity.copy(n.angularVelocity))
            : (o.hasAngularVelocity = !1),
          this.dispatchEvent(Tm)));
    }
    return (
      o !== null && (o.visible = n !== null),
      l !== null && (l.visible = r !== null),
      c !== null && (c.visible = a !== null),
      this
    );
  }
}
class Em extends Rt {
  constructor(e, t, i, n, r, a, o, l, c, h) {
    if (((h = h !== void 0 ? h : Vi), h !== Vi && h !== As))
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    i === void 0 && h === Vi && (i = ki),
      i === void 0 && h === As && (i = xs),
      super(null, n, r, a, o, l, h, i, c),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = o !== void 0 ? o : mt),
      (this.minFilter = l !== void 0 ? l : mt),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
class Lm extends Ls {
  constructor(e, t) {
    super();
    const i = this;
    let n = null,
      r = 1,
      a = null,
      o = "local-floor",
      l = null,
      c = null,
      h = null,
      d = null,
      u = null,
      m = null;
    const g = t.getContextAttributes();
    let p = null,
      f = null;
    const v = [],
      w = [],
      S = new wt();
    S.layers.enable(1), (S.viewport = new Fe());
    const x = new wt();
    x.layers.enable(2), (x.viewport = new Fe());
    const A = [S, x],
      D = new Am();
    D.layers.enable(1), D.layers.enable(2);
    let R = null,
      b = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (U) {
        let V = v[U];
        return (
          V === void 0 && ((V = new Cr()), (v[U] = V)), V.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (U) {
        let V = v[U];
        return V === void 0 && ((V = new Cr()), (v[U] = V)), V.getGripSpace();
      }),
      (this.getHand = function (U) {
        let V = v[U];
        return V === void 0 && ((V = new Cr()), (v[U] = V)), V.getHandSpace();
      });
    function E(U) {
      const V = w.indexOf(U.inputSource);
      if (V === -1) return;
      const Q = v[V];
      Q !== void 0 && Q.dispatchEvent({ type: U.type, data: U.inputSource });
    }
    function k() {
      n.removeEventListener("select", E),
        n.removeEventListener("selectstart", E),
        n.removeEventListener("selectend", E),
        n.removeEventListener("squeeze", E),
        n.removeEventListener("squeezestart", E),
        n.removeEventListener("squeezeend", E),
        n.removeEventListener("end", k),
        n.removeEventListener("inputsourceschange", B);
      for (let U = 0; U < v.length; U++) {
        const V = w[U];
        V !== null && ((w[U] = null), v[U].disconnect(V));
      }
      (R = null),
        (b = null),
        e.setRenderTarget(p),
        (u = null),
        (d = null),
        (h = null),
        (n = null),
        (f = null),
        j.stop(),
        (i.isPresenting = !1),
        i.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (U) {
      (r = U),
        i.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
          );
    }),
      (this.setReferenceSpaceType = function (U) {
        (o = U),
          i.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return l || a;
      }),
      (this.setReferenceSpace = function (U) {
        l = U;
      }),
      (this.getBaseLayer = function () {
        return d !== null ? d : u;
      }),
      (this.getBinding = function () {
        return h;
      }),
      (this.getFrame = function () {
        return m;
      }),
      (this.getSession = function () {
        return n;
      }),
      (this.setSession = async function (U) {
        if (((n = U), n !== null)) {
          if (
            ((p = e.getRenderTarget()),
            n.addEventListener("select", E),
            n.addEventListener("selectstart", E),
            n.addEventListener("selectend", E),
            n.addEventListener("squeeze", E),
            n.addEventListener("squeezestart", E),
            n.addEventListener("squeezeend", E),
            n.addEventListener("end", k),
            n.addEventListener("inputsourceschange", B),
            g.xrCompatible !== !0 && (await t.makeXRCompatible()),
            n.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
          ) {
            const V = {
              antialias: n.renderState.layers === void 0 ? g.antialias : !0,
              alpha: g.alpha,
              depth: g.depth,
              stencil: g.stencil,
              framebufferScaleFactor: r,
            };
            (u = new XRWebGLLayer(n, t, V)),
              n.updateRenderState({ baseLayer: u }),
              (f = new Ei(u.framebufferWidth, u.framebufferHeight, {
                format: Ot,
                type: qi,
                encoding: e.outputEncoding,
              }));
          } else {
            let V = null,
              Q = null,
              $ = null;
            g.depth &&
              (($ = g.stencil ? 35056 : 33190),
              (V = g.stencil ? As : Vi),
              (Q = g.stencil ? xs : ki));
            const se = { colorFormat: 32856, depthFormat: $, scaleFactor: r };
            (h = new XRWebGLBinding(n, t)),
              (d = h.createProjectionLayer(se)),
              n.updateRenderState({ layers: [d] }),
              (f = new Ei(d.textureWidth, d.textureHeight, {
                format: Ot,
                type: qi,
                depthTexture: new Em(
                  d.textureWidth,
                  d.textureHeight,
                  Q,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  V
                ),
                stencilBuffer: g.stencil,
                encoding: e.outputEncoding,
                samples: g.antialias ? 4 : 0,
              }));
            const he = e.properties.get(f);
            he.__ignoreDepthValues = d.ignoreDepthValues;
          }
          (f.isXRRenderTarget = !0),
            this.setFoveation(1),
            (l = null),
            (a = await n.requestReferenceSpace(o)),
            j.setContext(n),
            j.start(),
            (i.isPresenting = !0),
            i.dispatchEvent({ type: "sessionstart" });
        }
      });
    function B(U) {
      for (let V = 0; V < U.removed.length; V++) {
        const Q = U.removed[V],
          $ = w.indexOf(Q);
        $ >= 0 &&
          ((w[$] = null),
          v[$].dispatchEvent({ type: "disconnected", data: Q }));
      }
      for (let V = 0; V < U.added.length; V++) {
        const Q = U.added[V];
        let $ = w.indexOf(Q);
        if ($ === -1) {
          for (let he = 0; he < v.length; he++)
            if (he >= w.length) {
              w.push(Q), ($ = he);
              break;
            } else if (w[he] === null) {
              (w[he] = Q), ($ = he);
              break;
            }
          if ($ === -1) break;
        }
        const se = v[$];
        se && se.dispatchEvent({ type: "connected", data: Q });
      }
    }
    const ee = new C(),
      re = new C();
    function I(U, V, Q) {
      ee.setFromMatrixPosition(V.matrixWorld),
        re.setFromMatrixPosition(Q.matrixWorld);
      const $ = ee.distanceTo(re),
        se = V.projectionMatrix.elements,
        he = Q.projectionMatrix.elements,
        Y = se[14] / (se[10] - 1),
        F = se[14] / (se[10] + 1),
        ze = (se[9] + 1) / se[5],
        Me = (se[9] - 1) / se[5],
        we = (se[8] - 1) / se[0],
        le = (he[8] + 1) / he[0],
        Oe = Y * we,
        Le = Y * le,
        _e = $ / (-we + le),
        at = _e * -we;
      V.matrixWorld.decompose(U.position, U.quaternion, U.scale),
        U.translateX(at),
        U.translateZ(_e),
        U.matrixWorld.compose(U.position, U.quaternion, U.scale),
        U.matrixWorldInverse.copy(U.matrixWorld).invert();
      const xt = Y + _e,
        St = F + _e,
        Ht = Oe - at,
        st = Le + ($ - at),
        Ge = ((ze * F) / St) * xt,
        ei = ((Me * F) / St) * xt;
      U.projectionMatrix.makePerspective(Ht, st, Ge, ei, xt, St);
    }
    function q(U, V) {
      V === null
        ? U.matrixWorld.copy(U.matrix)
        : U.matrixWorld.multiplyMatrices(V.matrixWorld, U.matrix),
        U.matrixWorldInverse.copy(U.matrixWorld).invert();
    }
    (this.updateCamera = function (U) {
      if (n === null) return;
      (D.near = x.near = S.near = U.near),
        (D.far = x.far = S.far = U.far),
        (R !== D.near || b !== D.far) &&
          (n.updateRenderState({ depthNear: D.near, depthFar: D.far }),
          (R = D.near),
          (b = D.far));
      const V = U.parent,
        Q = D.cameras;
      q(D, V);
      for (let se = 0; se < Q.length; se++) q(Q[se], V);
      D.matrixWorld.decompose(D.position, D.quaternion, D.scale),
        U.position.copy(D.position),
        U.quaternion.copy(D.quaternion),
        U.scale.copy(D.scale),
        U.matrix.copy(D.matrix),
        U.matrixWorld.copy(D.matrixWorld);
      const $ = U.children;
      for (let se = 0, he = $.length; se < he; se++)
        $[se].updateMatrixWorld(!0);
      Q.length === 2 ? I(D, S, x) : D.projectionMatrix.copy(S.projectionMatrix);
    }),
      (this.getCamera = function () {
        return D;
      }),
      (this.getFoveation = function () {
        if (d !== null) return d.fixedFoveation;
        if (u !== null) return u.fixedFoveation;
      }),
      (this.setFoveation = function (U) {
        d !== null && (d.fixedFoveation = U),
          u !== null && u.fixedFoveation !== void 0 && (u.fixedFoveation = U);
      });
    let G = null;
    function X(U, V) {
      if (((c = V.getViewerPose(l || a)), (m = V), c !== null)) {
        const Q = c.views;
        u !== null &&
          (e.setRenderTargetFramebuffer(f, u.framebuffer),
          e.setRenderTarget(f));
        let $ = !1;
        Q.length !== D.cameras.length && ((D.cameras.length = 0), ($ = !0));
        for (let se = 0; se < Q.length; se++) {
          const he = Q[se];
          let Y = null;
          if (u !== null) Y = u.getViewport(he);
          else {
            const ze = h.getViewSubImage(d, he);
            (Y = ze.viewport),
              se === 0 &&
                (e.setRenderTargetTextures(
                  f,
                  ze.colorTexture,
                  d.ignoreDepthValues ? void 0 : ze.depthStencilTexture
                ),
                e.setRenderTarget(f));
          }
          let F = A[se];
          F === void 0 &&
            ((F = new wt()),
            F.layers.enable(se),
            (F.viewport = new Fe()),
            (A[se] = F)),
            F.matrix.fromArray(he.transform.matrix),
            F.projectionMatrix.fromArray(he.projectionMatrix),
            F.viewport.set(Y.x, Y.y, Y.width, Y.height),
            se === 0 && D.matrix.copy(F.matrix),
            $ === !0 && D.cameras.push(F);
        }
      }
      for (let Q = 0; Q < v.length; Q++) {
        const $ = w[Q],
          se = v[Q];
        $ !== null && se !== void 0 && se.update($, V, l || a);
      }
      G && G(U, V), (m = null);
    }
    const j = new tc();
    j.setAnimationLoop(X),
      (this.setAnimationLoop = function (U) {
        G = U;
      }),
      (this.dispose = function () {});
  }
}
function Dm(s, e) {
  function t(p, f) {
    p.fogColor.value.copy(f.color),
      f.isFog
        ? ((p.fogNear.value = f.near), (p.fogFar.value = f.far))
        : f.isFogExp2 && (p.fogDensity.value = f.density);
  }
  function i(p, f, v, w, S) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial
      ? n(p, f)
      : f.isMeshToonMaterial
      ? (n(p, f), h(p, f))
      : f.isMeshPhongMaterial
      ? (n(p, f), c(p, f))
      : f.isMeshStandardMaterial
      ? (n(p, f), d(p, f), f.isMeshPhysicalMaterial && u(p, f, S))
      : f.isMeshMatcapMaterial
      ? (n(p, f), m(p, f))
      : f.isMeshDepthMaterial
      ? n(p, f)
      : f.isMeshDistanceMaterial
      ? (n(p, f), g(p, f))
      : f.isMeshNormalMaterial
      ? n(p, f)
      : f.isLineBasicMaterial
      ? (r(p, f), f.isLineDashedMaterial && a(p, f))
      : f.isPointsMaterial
      ? o(p, f, v, w)
      : f.isSpriteMaterial
      ? l(p, f)
      : f.isShadowMaterial
      ? (p.color.value.copy(f.color), (p.opacity.value = f.opacity))
      : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function n(p, f) {
    (p.opacity.value = f.opacity),
      f.color && p.diffuse.value.copy(f.color),
      f.emissive &&
        p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),
      f.map && (p.map.value = f.map),
      f.alphaMap && (p.alphaMap.value = f.alphaMap),
      f.bumpMap &&
        ((p.bumpMap.value = f.bumpMap),
        (p.bumpScale.value = f.bumpScale),
        f.side === Pt && (p.bumpScale.value *= -1)),
      f.displacementMap &&
        ((p.displacementMap.value = f.displacementMap),
        (p.displacementScale.value = f.displacementScale),
        (p.displacementBias.value = f.displacementBias)),
      f.emissiveMap && (p.emissiveMap.value = f.emissiveMap),
      f.normalMap &&
        ((p.normalMap.value = f.normalMap),
        p.normalScale.value.copy(f.normalScale),
        f.side === Pt && p.normalScale.value.negate()),
      f.specularMap && (p.specularMap.value = f.specularMap),
      f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    const v = e.get(f).envMap;
    if (
      (v &&
        ((p.envMap.value = v),
        (p.flipEnvMap.value =
          v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1),
        (p.reflectivity.value = f.reflectivity),
        (p.ior.value = f.ior),
        (p.refractionRatio.value = f.refractionRatio)),
      f.lightMap)
    ) {
      p.lightMap.value = f.lightMap;
      const x = s.physicallyCorrectLights !== !0 ? Math.PI : 1;
      p.lightMapIntensity.value = f.lightMapIntensity * x;
    }
    f.aoMap &&
      ((p.aoMap.value = f.aoMap), (p.aoMapIntensity.value = f.aoMapIntensity));
    let w;
    f.map
      ? (w = f.map)
      : f.specularMap
      ? (w = f.specularMap)
      : f.displacementMap
      ? (w = f.displacementMap)
      : f.normalMap
      ? (w = f.normalMap)
      : f.bumpMap
      ? (w = f.bumpMap)
      : f.roughnessMap
      ? (w = f.roughnessMap)
      : f.metalnessMap
      ? (w = f.metalnessMap)
      : f.alphaMap
      ? (w = f.alphaMap)
      : f.emissiveMap
      ? (w = f.emissiveMap)
      : f.clearcoatMap
      ? (w = f.clearcoatMap)
      : f.clearcoatNormalMap
      ? (w = f.clearcoatNormalMap)
      : f.clearcoatRoughnessMap
      ? (w = f.clearcoatRoughnessMap)
      : f.iridescenceMap
      ? (w = f.iridescenceMap)
      : f.iridescenceThicknessMap
      ? (w = f.iridescenceThicknessMap)
      : f.specularIntensityMap
      ? (w = f.specularIntensityMap)
      : f.specularColorMap
      ? (w = f.specularColorMap)
      : f.transmissionMap
      ? (w = f.transmissionMap)
      : f.thicknessMap
      ? (w = f.thicknessMap)
      : f.sheenColorMap
      ? (w = f.sheenColorMap)
      : f.sheenRoughnessMap && (w = f.sheenRoughnessMap),
      w !== void 0 &&
        (w.isWebGLRenderTarget && (w = w.texture),
        w.matrixAutoUpdate === !0 && w.updateMatrix(),
        p.uvTransform.value.copy(w.matrix));
    let S;
    f.aoMap ? (S = f.aoMap) : f.lightMap && (S = f.lightMap),
      S !== void 0 &&
        (S.isWebGLRenderTarget && (S = S.texture),
        S.matrixAutoUpdate === !0 && S.updateMatrix(),
        p.uv2Transform.value.copy(S.matrix));
  }
  function r(p, f) {
    p.diffuse.value.copy(f.color), (p.opacity.value = f.opacity);
  }
  function a(p, f) {
    (p.dashSize.value = f.dashSize),
      (p.totalSize.value = f.dashSize + f.gapSize),
      (p.scale.value = f.scale);
  }
  function o(p, f, v, w) {
    p.diffuse.value.copy(f.color),
      (p.opacity.value = f.opacity),
      (p.size.value = f.size * v),
      (p.scale.value = w * 0.5),
      f.map && (p.map.value = f.map),
      f.alphaMap && (p.alphaMap.value = f.alphaMap),
      f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    let S;
    f.map ? (S = f.map) : f.alphaMap && (S = f.alphaMap),
      S !== void 0 &&
        (S.matrixAutoUpdate === !0 && S.updateMatrix(),
        p.uvTransform.value.copy(S.matrix));
  }
  function l(p, f) {
    p.diffuse.value.copy(f.color),
      (p.opacity.value = f.opacity),
      (p.rotation.value = f.rotation),
      f.map && (p.map.value = f.map),
      f.alphaMap && (p.alphaMap.value = f.alphaMap),
      f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    let v;
    f.map ? (v = f.map) : f.alphaMap && (v = f.alphaMap),
      v !== void 0 &&
        (v.matrixAutoUpdate === !0 && v.updateMatrix(),
        p.uvTransform.value.copy(v.matrix));
  }
  function c(p, f) {
    p.specular.value.copy(f.specular),
      (p.shininess.value = Math.max(f.shininess, 1e-4));
  }
  function h(p, f) {
    f.gradientMap && (p.gradientMap.value = f.gradientMap);
  }
  function d(p, f) {
    (p.roughness.value = f.roughness),
      (p.metalness.value = f.metalness),
      f.roughnessMap && (p.roughnessMap.value = f.roughnessMap),
      f.metalnessMap && (p.metalnessMap.value = f.metalnessMap),
      e.get(f).envMap && (p.envMapIntensity.value = f.envMapIntensity);
  }
  function u(p, f, v) {
    (p.ior.value = f.ior),
      f.sheen > 0 &&
        (p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),
        (p.sheenRoughness.value = f.sheenRoughness),
        f.sheenColorMap && (p.sheenColorMap.value = f.sheenColorMap),
        f.sheenRoughnessMap &&
          (p.sheenRoughnessMap.value = f.sheenRoughnessMap)),
      f.clearcoat > 0 &&
        ((p.clearcoat.value = f.clearcoat),
        (p.clearcoatRoughness.value = f.clearcoatRoughness),
        f.clearcoatMap && (p.clearcoatMap.value = f.clearcoatMap),
        f.clearcoatRoughnessMap &&
          (p.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap),
        f.clearcoatNormalMap &&
          (p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),
          (p.clearcoatNormalMap.value = f.clearcoatNormalMap),
          f.side === Pt && p.clearcoatNormalScale.value.negate())),
      f.iridescence > 0 &&
        ((p.iridescence.value = f.iridescence),
        (p.iridescenceIOR.value = f.iridescenceIOR),
        (p.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0]),
        (p.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1]),
        f.iridescenceMap && (p.iridescenceMap.value = f.iridescenceMap),
        f.iridescenceThicknessMap &&
          (p.iridescenceThicknessMap.value = f.iridescenceThicknessMap)),
      f.transmission > 0 &&
        ((p.transmission.value = f.transmission),
        (p.transmissionSamplerMap.value = v.texture),
        p.transmissionSamplerSize.value.set(v.width, v.height),
        f.transmissionMap && (p.transmissionMap.value = f.transmissionMap),
        (p.thickness.value = f.thickness),
        f.thicknessMap && (p.thicknessMap.value = f.thicknessMap),
        (p.attenuationDistance.value = f.attenuationDistance),
        p.attenuationColor.value.copy(f.attenuationColor)),
      (p.specularIntensity.value = f.specularIntensity),
      p.specularColor.value.copy(f.specularColor),
      f.specularIntensityMap &&
        (p.specularIntensityMap.value = f.specularIntensityMap),
      f.specularColorMap && (p.specularColorMap.value = f.specularColorMap);
  }
  function m(p, f) {
    f.matcap && (p.matcap.value = f.matcap);
  }
  function g(p, f) {
    p.referencePosition.value.copy(f.referencePosition),
      (p.nearDistance.value = f.nearDistance),
      (p.farDistance.value = f.farDistance);
  }
  return { refreshFogUniforms: t, refreshMaterialUniforms: i };
}
function Pm() {
  const s = Un("canvas");
  return (s.style.display = "block"), s;
}
function oc(s = {}) {
  this.isWebGLRenderer = !0;
  const e = s.canvas !== void 0 ? s.canvas : Pm(),
    t = s.context !== void 0 ? s.context : null,
    i = s.depth !== void 0 ? s.depth : !0,
    n = s.stencil !== void 0 ? s.stencil : !0,
    r = s.antialias !== void 0 ? s.antialias : !1,
    a = s.premultipliedAlpha !== void 0 ? s.premultipliedAlpha : !0,
    o = s.preserveDrawingBuffer !== void 0 ? s.preserveDrawingBuffer : !1,
    l = s.powerPreference !== void 0 ? s.powerPreference : "default",
    c =
      s.failIfMajorPerformanceCaveat !== void 0
        ? s.failIfMajorPerformanceCaveat
        : !1;
  let h;
  t !== null
    ? (h = t.getContextAttributes().alpha)
    : (h = s.alpha !== void 0 ? s.alpha : !1);
  let d = null,
    u = null;
  const m = [],
    g = [];
  (this.domElement = e),
    (this.debug = { checkShaderErrors: !0 }),
    (this.autoClear = !0),
    (this.autoClearColor = !0),
    (this.autoClearDepth = !0),
    (this.autoClearStencil = !0),
    (this.sortObjects = !0),
    (this.clippingPlanes = []),
    (this.localClippingEnabled = !1),
    (this.outputEncoding = Xi),
    (this.physicallyCorrectLights = !1),
    (this.toneMapping = ci),
    (this.toneMappingExposure = 1),
    Object.defineProperties(this, {
      gammaFactor: {
        get: function () {
          return (
            console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),
            2
          );
        },
        set: function () {
          console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");
        },
      },
    });
  const p = this;
  let f = !1,
    v = 0,
    w = 0,
    S = null,
    x = -1,
    A = null;
  const D = new Fe(),
    R = new Fe();
  let b = null,
    E = e.width,
    k = e.height,
    B = 1,
    ee = null,
    re = null;
  const I = new Fe(0, 0, E, k),
    q = new Fe(0, 0, E, k);
  let G = !1;
  const X = new ya();
  let j = !1,
    U = !1,
    V = null;
  const Q = new je(),
    $ = new me(),
    se = new C(),
    he = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0,
    };
  function Y() {
    return S === null ? B : 1;
  }
  let F = t;
  function ze(y, P) {
    for (let N = 0; N < y.length; N++) {
      const z = y[N],
        W = e.getContext(z, P);
      if (W !== null) return W;
    }
    return null;
  }
  try {
    const y = {
      alpha: !0,
      depth: i,
      stencil: n,
      antialias: r,
      premultipliedAlpha: a,
      preserveDrawingBuffer: o,
      powerPreference: l,
      failIfMajorPerformanceCaveat: c,
    };
    if (
      ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Gc}`),
      e.addEventListener("webglcontextlost", T, !1),
      e.addEventListener("webglcontextrestored", ne, !1),
      e.addEventListener("webglcontextcreationerror", ie, !1),
      F === null)
    ) {
      const P = ["webgl2", "webgl", "experimental-webgl"];
      if ((p.isWebGL1Renderer === !0 && P.shift(), (F = ze(P, y)), F === null))
        throw ze(P)
          ? new Error(
              "Error creating WebGL context with your selected attributes."
            )
          : new Error("Error creating WebGL context.");
    }
    F.getShaderPrecisionFormat === void 0 &&
      (F.getShaderPrecisionFormat = function () {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
  } catch (y) {
    throw (console.error("THREE.WebGLRenderer: " + y.message), y);
  }
  let Me,
    we,
    le,
    Oe,
    Le,
    _e,
    at,
    xt,
    St,
    Ht,
    st,
    Ge,
    ei,
    ti,
    M,
    _,
    H,
    K,
    te,
    oe,
    Se,
    O,
    ge;
  function de() {
    (Me = new Vf(F)),
      (we = new Uf(F, Me, s)),
      Me.init(we),
      (O = new Cm(F, Me, we)),
      (le = new Sm(F, Me, we)),
      (Oe = new qf()),
      (Le = new cm()),
      (_e = new Mm(F, Me, le, Le, we, O, Oe)),
      (at = new Nf(p)),
      (xt = new Gf(p)),
      (St = new iu(F, we)),
      (ge = new Ff(F, Me, St, we)),
      (Ht = new Hf(F, St, Oe, ge)),
      (st = new Yf(F, Ht, St, Oe)),
      (te = new $f(F, we, _e)),
      (_ = new Bf(Le)),
      (Ge = new lm(p, at, xt, Me, we, ge, _)),
      (ei = new Dm(p, Le)),
      (ti = new um()),
      (M = new vm(Me, we)),
      (K = new If(p, at, le, st, h, a)),
      (H = new wm(p, st, we)),
      (oe = new zf(F, Me, Oe, we)),
      (Se = new Wf(F, Me, Oe, we)),
      (Oe.programs = Ge.programs),
      (p.capabilities = we),
      (p.extensions = Me),
      (p.properties = Le),
      (p.renderLists = ti),
      (p.shadowMap = H),
      (p.state = le),
      (p.info = Oe);
  }
  de();
  const ce = new Lm(p, F);
  (this.xr = ce),
    (this.getContext = function () {
      return F;
    }),
    (this.getContextAttributes = function () {
      return F.getContextAttributes();
    }),
    (this.forceContextLoss = function () {
      const y = Me.get("WEBGL_lose_context");
      y && y.loseContext();
    }),
    (this.forceContextRestore = function () {
      const y = Me.get("WEBGL_lose_context");
      y && y.restoreContext();
    }),
    (this.getPixelRatio = function () {
      return B;
    }),
    (this.setPixelRatio = function (y) {
      y !== void 0 && ((B = y), this.setSize(E, k, !1));
    }),
    (this.getSize = function (y) {
      return y.set(E, k);
    }),
    (this.setSize = function (y, P, N) {
      if (ce.isPresenting) {
        console.warn(
          "THREE.WebGLRenderer: Can't change size while VR device is presenting."
        );
        return;
      }
      (E = y),
        (k = P),
        (e.width = Math.floor(y * B)),
        (e.height = Math.floor(P * B)),
        N !== !1 && ((e.style.width = y + "px"), (e.style.height = P + "px")),
        this.setViewport(0, 0, y, P);
    }),
    (this.getDrawingBufferSize = function (y) {
      return y.set(E * B, k * B).floor();
    }),
    (this.setDrawingBufferSize = function (y, P, N) {
      (E = y),
        (k = P),
        (B = N),
        (e.width = Math.floor(y * N)),
        (e.height = Math.floor(P * N)),
        this.setViewport(0, 0, y, P);
    }),
    (this.getCurrentViewport = function (y) {
      return y.copy(D);
    }),
    (this.getViewport = function (y) {
      return y.copy(I);
    }),
    (this.setViewport = function (y, P, N, z) {
      y.isVector4 ? I.set(y.x, y.y, y.z, y.w) : I.set(y, P, N, z),
        le.viewport(D.copy(I).multiplyScalar(B).floor());
    }),
    (this.getScissor = function (y) {
      return y.copy(q);
    }),
    (this.setScissor = function (y, P, N, z) {
      y.isVector4 ? q.set(y.x, y.y, y.z, y.w) : q.set(y, P, N, z),
        le.scissor(R.copy(q).multiplyScalar(B).floor());
    }),
    (this.getScissorTest = function () {
      return G;
    }),
    (this.setScissorTest = function (y) {
      le.setScissorTest((G = y));
    }),
    (this.setOpaqueSort = function (y) {
      ee = y;
    }),
    (this.setTransparentSort = function (y) {
      re = y;
    }),
    (this.getClearColor = function (y) {
      return y.copy(K.getClearColor());
    }),
    (this.setClearColor = function () {
      K.setClearColor.apply(K, arguments);
    }),
    (this.getClearAlpha = function () {
      return K.getClearAlpha();
    }),
    (this.setClearAlpha = function () {
      K.setClearAlpha.apply(K, arguments);
    }),
    (this.clear = function (y = !0, P = !0, N = !0) {
      let z = 0;
      y && (z |= 16384), P && (z |= 256), N && (z |= 1024), F.clear(z);
    }),
    (this.clearColor = function () {
      this.clear(!0, !1, !1);
    }),
    (this.clearDepth = function () {
      this.clear(!1, !0, !1);
    }),
    (this.clearStencil = function () {
      this.clear(!1, !1, !0);
    }),
    (this.dispose = function () {
      e.removeEventListener("webglcontextlost", T, !1),
        e.removeEventListener("webglcontextrestored", ne, !1),
        e.removeEventListener("webglcontextcreationerror", ie, !1),
        ti.dispose(),
        M.dispose(),
        Le.dispose(),
        at.dispose(),
        xt.dispose(),
        st.dispose(),
        ge.dispose(),
        Ge.dispose(),
        ce.dispose(),
        ce.removeEventListener("sessionstart", Ue),
        ce.removeEventListener("sessionend", Be),
        V && (V.dispose(), (V = null)),
        dt.stop();
    });
  function T(y) {
    y.preventDefault(),
      console.log("THREE.WebGLRenderer: Context Lost."),
      (f = !0);
  }
  function ne() {
    console.log("THREE.WebGLRenderer: Context Restored."), (f = !1);
    const y = Oe.autoReset,
      P = H.enabled,
      N = H.autoUpdate,
      z = H.needsUpdate,
      W = H.type;
    de(),
      (Oe.autoReset = y),
      (H.enabled = P),
      (H.autoUpdate = N),
      (H.needsUpdate = z),
      (H.type = W);
  }
  function ie(y) {
    console.error(
      "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
      y.statusMessage
    );
  }
  function ve(y) {
    const P = y.target;
    P.removeEventListener("dispose", ve), ue(P);
  }
  function ue(y) {
    ye(y), Le.remove(y);
  }
  function ye(y) {
    const P = Le.get(y).programs;
    P !== void 0 &&
      (P.forEach(function (N) {
        Ge.releaseProgram(N);
      }),
      y.isShaderMaterial && Ge.releaseShaderCache(y));
  }
  (this.renderBufferDirect = function (y, P, N, z, W, xe) {
    P === null && (P = he);
    const Ce = W.isMesh && W.matrixWorld.determinant() < 0,
      Te = xc(y, P, N, z, W);
    le.setMaterial(z, Ce);
    let Ae = N.index;
    const Ne = N.attributes.position;
    if (Ae === null) {
      if (Ne === void 0 || Ne.count === 0) return;
    } else if (Ae.count === 0) return;
    let De = 1;
    z.wireframe === !0 && ((Ae = Ht.getWireframeAttribute(N)), (De = 2)),
      ge.setup(W, z, Te, N, Ae);
    let Pe,
      We = oe;
    Ae !== null && ((Pe = St.get(Ae)), (We = Se), We.setIndex(Pe));
    const Di = Ae !== null ? Ae.count : Ne.count,
      Yi = N.drawRange.start * De,
      Zi = N.drawRange.count * De,
      qt = xe !== null ? xe.start * De : 0,
      Ie = xe !== null ? xe.count * De : 1 / 0,
      Ki = Math.max(Yi, qt),
      Ye = Math.min(Di, Yi + Zi, qt + Ie) - 1,
      Xt = Math.max(0, Ye - Ki + 1);
    if (Xt !== 0) {
      if (W.isMesh)
        z.wireframe === !0
          ? (le.setLineWidth(z.wireframeLinewidth * Y()), We.setMode(1))
          : We.setMode(4);
      else if (W.isLine) {
        let di = z.linewidth;
        di === void 0 && (di = 1),
          le.setLineWidth(di * Y()),
          W.isLineSegments
            ? We.setMode(1)
            : W.isLineLoop
            ? We.setMode(2)
            : We.setMode(3);
      } else W.isPoints ? We.setMode(0) : W.isSprite && We.setMode(4);
      if (W.isInstancedMesh) We.renderInstances(Ki, Xt, W.count);
      else if (N.isInstancedBufferGeometry) {
        const di = Math.min(N.instanceCount, N._maxInstanceCount);
        We.renderInstances(Ki, Xt, di);
      } else We.render(Ki, Xt);
    }
  }),
    (this.compile = function (y, P) {
      (u = M.get(y)),
        u.init(),
        g.push(u),
        y.traverseVisible(function (N) {
          N.isLight &&
            N.layers.test(P.layers) &&
            (u.pushLight(N), N.castShadow && u.pushShadow(N));
        }),
        u.setupLights(p.physicallyCorrectLights),
        y.traverse(function (N) {
          const z = N.material;
          if (z)
            if (Array.isArray(z))
              for (let W = 0; W < z.length; W++) {
                const xe = z[W];
                Wn(xe, y, N);
              }
            else Wn(z, y, N);
        }),
        g.pop(),
        (u = null);
    });
  let J = null;
  function be(y) {
    J && J(y);
  }
  function Ue() {
    dt.stop();
  }
  function Be() {
    dt.start();
  }
  const dt = new tc();
  dt.setAnimationLoop(be),
    typeof self != "undefined" && dt.setContext(self),
    (this.setAnimationLoop = function (y) {
      (J = y), ce.setAnimationLoop(y), y === null ? dt.stop() : dt.start();
    }),
    ce.addEventListener("sessionstart", Ue),
    ce.addEventListener("sessionend", Be),
    (this.render = function (y, P) {
      if (P !== void 0 && P.isCamera !== !0) {
        console.error(
          "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
        );
        return;
      }
      if (f === !0) return;
      y.autoUpdate === !0 && y.updateMatrixWorld(),
        P.parent === null && P.updateMatrixWorld(),
        ce.enabled === !0 &&
          ce.isPresenting === !0 &&
          (ce.cameraAutoUpdate === !0 && ce.updateCamera(P),
          (P = ce.getCamera())),
        y.isScene === !0 && y.onBeforeRender(p, y, P, S),
        (u = M.get(y, g.length)),
        u.init(),
        g.push(u),
        Q.multiplyMatrices(P.projectionMatrix, P.matrixWorldInverse),
        X.setFromProjectionMatrix(Q),
        (U = this.localClippingEnabled),
        (j = _.init(this.clippingPlanes, U, P)),
        (d = ti.get(y, m.length)),
        d.init(),
        m.push(d),
        Wt(y, P, 0, p.sortObjects),
        d.finish(),
        p.sortObjects === !0 && d.sort(ee, re),
        j === !0 && _.beginShadows();
      const N = u.state.shadowsArray;
      if (
        (H.render(N, y, P),
        j === !0 && _.endShadows(),
        this.info.autoReset === !0 && this.info.reset(),
        K.render(d, y),
        u.setupLights(p.physicallyCorrectLights),
        P.isArrayCamera)
      ) {
        const z = P.cameras;
        for (let W = 0, xe = z.length; W < xe; W++) {
          const Ce = z[W];
          Ta(d, y, Ce, Ce.viewport);
        }
      } else Ta(d, y, P);
      S !== null &&
        (_e.updateMultisampleRenderTarget(S), _e.updateRenderTargetMipmap(S)),
        y.isScene === !0 && y.onAfterRender(p, y, P),
        ge.resetDefaultState(),
        (x = -1),
        (A = null),
        g.pop(),
        g.length > 0 ? (u = g[g.length - 1]) : (u = null),
        m.pop(),
        m.length > 0 ? (d = m[m.length - 1]) : (d = null);
    });
  function Wt(y, P, N, z) {
    if (y.visible === !1) return;
    if (y.layers.test(P.layers)) {
      if (y.isGroup) N = y.renderOrder;
      else if (y.isLOD) y.autoUpdate === !0 && y.update(P);
      else if (y.isLight) u.pushLight(y), y.castShadow && u.pushShadow(y);
      else if (y.isSprite) {
        if (!y.frustumCulled || X.intersectsSprite(y)) {
          z && se.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Q);
          const Ce = st.update(y),
            Te = y.material;
          Te.visible && d.push(y, Ce, Te, N, se.z, null);
        }
      } else if (
        (y.isMesh || y.isLine || y.isPoints) &&
        (y.isSkinnedMesh &&
          y.skeleton.frame !== Oe.render.frame &&
          (y.skeleton.update(), (y.skeleton.frame = Oe.render.frame)),
        !y.frustumCulled || X.intersectsObject(y))
      ) {
        z && se.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Q);
        const Ce = st.update(y),
          Te = y.material;
        if (Array.isArray(Te)) {
          const Ae = Ce.groups;
          for (let Ne = 0, De = Ae.length; Ne < De; Ne++) {
            const Pe = Ae[Ne],
              We = Te[Pe.materialIndex];
            We && We.visible && d.push(y, Ce, We, N, se.z, Pe);
          }
        } else Te.visible && d.push(y, Ce, Te, N, se.z, null);
      }
    }
    const xe = y.children;
    for (let Ce = 0, Te = xe.length; Ce < Te; Ce++) Wt(xe[Ce], P, N, z);
  }
  function Ta(y, P, N, z) {
    const W = y.opaque,
      xe = y.transmissive,
      Ce = y.transparent;
    u.setupLightsView(N),
      xe.length > 0 && vc(W, P, N),
      z && le.viewport(D.copy(z)),
      W.length > 0 && rn(W, P, N),
      xe.length > 0 && rn(xe, P, N),
      Ce.length > 0 && rn(Ce, P, N),
      le.buffers.depth.setTest(!0),
      le.buffers.depth.setMask(!0),
      le.buffers.color.setMask(!0),
      le.setPolygonOffset(!1);
  }
  function vc(y, P, N) {
    const z = we.isWebGL2;
    V === null &&
      (V = new Ei(1, 1, {
        generateMipmaps: !0,
        type: Me.has("EXT_color_buffer_half_float") ? js : qi,
        minFilter: kn,
        samples: z && r === !0 ? 4 : 0,
      })),
      p.getDrawingBufferSize($),
      z ? V.setSize($.x, $.y) : V.setSize(ia($.x), ia($.y));
    const W = p.getRenderTarget();
    p.setRenderTarget(V), p.clear();
    const xe = p.toneMapping;
    (p.toneMapping = ci),
      rn(y, P, N),
      (p.toneMapping = xe),
      _e.updateMultisampleRenderTarget(V),
      _e.updateRenderTargetMipmap(V),
      p.setRenderTarget(W);
  }
  function rn(y, P, N) {
    const z = P.isScene === !0 ? P.overrideMaterial : null;
    for (let W = 0, xe = y.length; W < xe; W++) {
      const Ce = y[W],
        Te = Ce.object,
        Ae = Ce.geometry,
        Ne = z === null ? Ce.material : z,
        De = Ce.group;
      Te.layers.test(N.layers) && _c(Te, P, N, Ae, Ne, De);
    }
  }
  function _c(y, P, N, z, W, xe) {
    y.onBeforeRender(p, P, N, z, W, xe),
      y.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, y.matrixWorld),
      y.normalMatrix.getNormalMatrix(y.modelViewMatrix),
      W.onBeforeRender(p, P, N, z, y, xe),
      W.transparent === !0 && W.side === Wi
        ? ((W.side = Pt),
          (W.needsUpdate = !0),
          p.renderBufferDirect(N, P, z, W, y, xe),
          (W.side = ws),
          (W.needsUpdate = !0),
          p.renderBufferDirect(N, P, z, W, y, xe),
          (W.side = Wi))
        : p.renderBufferDirect(N, P, z, W, y, xe),
      y.onAfterRender(p, P, N, z, W, xe);
  }
  function Wn(y, P, N) {
    P.isScene !== !0 && (P = he);
    const z = Le.get(y),
      W = u.state.lights,
      xe = u.state.shadowsArray,
      Ce = W.state.version,
      Te = Ge.getParameters(y, W.state, xe, P, N),
      Ae = Ge.getProgramCacheKey(Te);
    let Ne = z.programs;
    (z.environment = y.isMeshStandardMaterial ? P.environment : null),
      (z.fog = P.fog),
      (z.envMap = (y.isMeshStandardMaterial ? xt : at).get(
        y.envMap || z.environment
      )),
      Ne === void 0 &&
        (y.addEventListener("dispose", ve),
        (Ne = new Map()),
        (z.programs = Ne));
    let De = Ne.get(Ae);
    if (De !== void 0) {
      if (z.currentProgram === De && z.lightsStateVersion === Ce)
        return Ea(y, Te), De;
    } else
      (Te.uniforms = Ge.getUniforms(y)),
        y.onBuild(N, Te, p),
        y.onBeforeCompile(Te, p),
        (De = Ge.acquireProgram(Te, Ae)),
        Ne.set(Ae, De),
        (z.uniforms = Te.uniforms);
    const Pe = z.uniforms;
    ((!y.isShaderMaterial && !y.isRawShaderMaterial) || y.clipping === !0) &&
      (Pe.clippingPlanes = _.uniform),
      Ea(y, Te),
      (z.needsLights = bc(y)),
      (z.lightsStateVersion = Ce),
      z.needsLights &&
        ((Pe.ambientLightColor.value = W.state.ambient),
        (Pe.lightProbe.value = W.state.probe),
        (Pe.directionalLights.value = W.state.directional),
        (Pe.directionalLightShadows.value = W.state.directionalShadow),
        (Pe.spotLights.value = W.state.spot),
        (Pe.spotLightShadows.value = W.state.spotShadow),
        (Pe.rectAreaLights.value = W.state.rectArea),
        (Pe.ltc_1.value = W.state.rectAreaLTC1),
        (Pe.ltc_2.value = W.state.rectAreaLTC2),
        (Pe.pointLights.value = W.state.point),
        (Pe.pointLightShadows.value = W.state.pointShadow),
        (Pe.hemisphereLights.value = W.state.hemi),
        (Pe.directionalShadowMap.value = W.state.directionalShadowMap),
        (Pe.directionalShadowMatrix.value = W.state.directionalShadowMatrix),
        (Pe.spotShadowMap.value = W.state.spotShadowMap),
        (Pe.spotShadowMatrix.value = W.state.spotShadowMatrix),
        (Pe.pointShadowMap.value = W.state.pointShadowMap),
        (Pe.pointShadowMatrix.value = W.state.pointShadowMatrix));
    const We = De.getUniforms(),
      Di = zn.seqWithValue(We.seq, Pe);
    return (z.currentProgram = De), (z.uniformsList = Di), De;
  }
  function Ea(y, P) {
    const N = Le.get(y);
    (N.outputEncoding = P.outputEncoding),
      (N.instancing = P.instancing),
      (N.skinning = P.skinning),
      (N.morphTargets = P.morphTargets),
      (N.morphNormals = P.morphNormals),
      (N.morphColors = P.morphColors),
      (N.morphTargetsCount = P.morphTargetsCount),
      (N.numClippingPlanes = P.numClippingPlanes),
      (N.numIntersection = P.numClipIntersection),
      (N.vertexAlphas = P.vertexAlphas),
      (N.vertexTangents = P.vertexTangents),
      (N.toneMapping = P.toneMapping);
  }
  function xc(y, P, N, z, W) {
    P.isScene !== !0 && (P = he), _e.resetTextureUnits();
    const xe = P.fog,
      Ce = z.isMeshStandardMaterial ? P.environment : null,
      Te =
        S === null
          ? p.outputEncoding
          : S.isXRRenderTarget === !0
          ? S.texture.encoding
          : Xi,
      Ae = (z.isMeshStandardMaterial ? xt : at).get(z.envMap || Ce),
      Ne =
        z.vertexColors === !0 &&
        !!N.attributes.color &&
        N.attributes.color.itemSize === 4,
      De = !!z.normalMap && !!N.attributes.tangent,
      Pe = !!N.morphAttributes.position,
      We = !!N.morphAttributes.normal,
      Di = !!N.morphAttributes.color,
      Yi = z.toneMapped ? p.toneMapping : ci,
      Zi =
        N.morphAttributes.position ||
        N.morphAttributes.normal ||
        N.morphAttributes.color,
      qt = Zi !== void 0 ? Zi.length : 0,
      Ie = Le.get(z),
      Ki = u.state.lights;
    if (j === !0 && (U === !0 || y !== A)) {
      const jt = y === A && z.id === x;
      _.setState(z, y, jt);
    }
    let Ye = !1;
    z.version === Ie.__version
      ? ((Ie.needsLights && Ie.lightsStateVersion !== Ki.state.version) ||
          Ie.outputEncoding !== Te ||
          (W.isInstancedMesh && Ie.instancing === !1) ||
          (!W.isInstancedMesh && Ie.instancing === !0) ||
          (W.isSkinnedMesh && Ie.skinning === !1) ||
          (!W.isSkinnedMesh && Ie.skinning === !0) ||
          Ie.envMap !== Ae ||
          (z.fog === !0 && Ie.fog !== xe) ||
          (Ie.numClippingPlanes !== void 0 &&
            (Ie.numClippingPlanes !== _.numPlanes ||
              Ie.numIntersection !== _.numIntersection)) ||
          Ie.vertexAlphas !== Ne ||
          Ie.vertexTangents !== De ||
          Ie.morphTargets !== Pe ||
          Ie.morphNormals !== We ||
          Ie.morphColors !== Di ||
          Ie.toneMapping !== Yi ||
          (we.isWebGL2 === !0 && Ie.morphTargetsCount !== qt)) &&
        (Ye = !0)
      : ((Ye = !0), (Ie.__version = z.version));
    let Xt = Ie.currentProgram;
    Ye === !0 && (Xt = Wn(z, P, W));
    let di = !1,
      Ps = !1,
      qn = !1;
    const ft = Xt.getUniforms(),
      Rs = Ie.uniforms;
    if (
      (le.useProgram(Xt.program) && ((di = !0), (Ps = !0), (qn = !0)),
      z.id !== x && ((x = z.id), (Ps = !0)),
      di || A !== y)
    ) {
      if (
        (ft.setValue(F, "projectionMatrix", y.projectionMatrix),
        we.logarithmicDepthBuffer &&
          ft.setValue(F, "logDepthBufFC", 2 / (Math.log(y.far + 1) / Math.LN2)),
        A !== y && ((A = y), (Ps = !0), (qn = !0)),
        z.isShaderMaterial ||
          z.isMeshPhongMaterial ||
          z.isMeshToonMaterial ||
          z.isMeshStandardMaterial ||
          z.envMap)
      ) {
        const jt = ft.map.cameraPosition;
        jt !== void 0 &&
          jt.setValue(F, se.setFromMatrixPosition(y.matrixWorld));
      }
      (z.isMeshPhongMaterial ||
        z.isMeshToonMaterial ||
        z.isMeshLambertMaterial ||
        z.isMeshBasicMaterial ||
        z.isMeshStandardMaterial ||
        z.isShaderMaterial) &&
        ft.setValue(F, "isOrthographic", y.isOrthographicCamera === !0),
        (z.isMeshPhongMaterial ||
          z.isMeshToonMaterial ||
          z.isMeshLambertMaterial ||
          z.isMeshBasicMaterial ||
          z.isMeshStandardMaterial ||
          z.isShaderMaterial ||
          z.isShadowMaterial ||
          W.isSkinnedMesh) &&
          ft.setValue(F, "viewMatrix", y.matrixWorldInverse);
    }
    if (W.isSkinnedMesh) {
      ft.setOptional(F, W, "bindMatrix"),
        ft.setOptional(F, W, "bindMatrixInverse");
      const jt = W.skeleton;
      jt &&
        (we.floatVertexTextures
          ? (jt.boneTexture === null && jt.computeBoneTexture(),
            ft.setValue(F, "boneTexture", jt.boneTexture, _e),
            ft.setValue(F, "boneTextureSize", jt.boneTextureSize))
          : console.warn(
              "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
            ));
    }
    const Xn = N.morphAttributes;
    return (
      (Xn.position !== void 0 ||
        Xn.normal !== void 0 ||
        (Xn.color !== void 0 && we.isWebGL2 === !0)) &&
        te.update(W, N, z, Xt),
      (Ps || Ie.receiveShadow !== W.receiveShadow) &&
        ((Ie.receiveShadow = W.receiveShadow),
        ft.setValue(F, "receiveShadow", W.receiveShadow)),
      Ps &&
        (ft.setValue(F, "toneMappingExposure", p.toneMappingExposure),
        Ie.needsLights && yc(Rs, qn),
        xe && z.fog === !0 && ei.refreshFogUniforms(Rs, xe),
        ei.refreshMaterialUniforms(Rs, z, B, k, V),
        zn.upload(F, Ie.uniformsList, Rs, _e)),
      z.isShaderMaterial &&
        z.uniformsNeedUpdate === !0 &&
        (zn.upload(F, Ie.uniformsList, Rs, _e), (z.uniformsNeedUpdate = !1)),
      z.isSpriteMaterial && ft.setValue(F, "center", W.center),
      ft.setValue(F, "modelViewMatrix", W.modelViewMatrix),
      ft.setValue(F, "normalMatrix", W.normalMatrix),
      ft.setValue(F, "modelMatrix", W.matrixWorld),
      Xt
    );
  }
  function yc(y, P) {
    (y.ambientLightColor.needsUpdate = P),
      (y.lightProbe.needsUpdate = P),
      (y.directionalLights.needsUpdate = P),
      (y.directionalLightShadows.needsUpdate = P),
      (y.pointLights.needsUpdate = P),
      (y.pointLightShadows.needsUpdate = P),
      (y.spotLights.needsUpdate = P),
      (y.spotLightShadows.needsUpdate = P),
      (y.rectAreaLights.needsUpdate = P),
      (y.hemisphereLights.needsUpdate = P);
  }
  function bc(y) {
    return (
      y.isMeshLambertMaterial ||
      y.isMeshToonMaterial ||
      y.isMeshPhongMaterial ||
      y.isMeshStandardMaterial ||
      y.isShadowMaterial ||
      (y.isShaderMaterial && y.lights === !0)
    );
  }
  (this.getActiveCubeFace = function () {
    return v;
  }),
    (this.getActiveMipmapLevel = function () {
      return w;
    }),
    (this.getRenderTarget = function () {
      return S;
    }),
    (this.setRenderTargetTextures = function (y, P, N) {
      (Le.get(y.texture).__webglTexture = P),
        (Le.get(y.depthTexture).__webglTexture = N);
      const z = Le.get(y);
      (z.__hasExternalTextures = !0),
        z.__hasExternalTextures &&
          ((z.__autoAllocateDepthBuffer = N === void 0),
          z.__autoAllocateDepthBuffer ||
            (Me.has("WEBGL_multisampled_render_to_texture") === !0 &&
              (console.warn(
                "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
              ),
              (z.__useRenderToTexture = !1))));
    }),
    (this.setRenderTargetFramebuffer = function (y, P) {
      const N = Le.get(y);
      (N.__webglFramebuffer = P), (N.__useDefaultFramebuffer = P === void 0);
    }),
    (this.setRenderTarget = function (y, P = 0, N = 0) {
      (S = y), (v = P), (w = N);
      let z = !0;
      if (y) {
        const Ae = Le.get(y);
        Ae.__useDefaultFramebuffer !== void 0
          ? (le.bindFramebuffer(36160, null), (z = !1))
          : Ae.__webglFramebuffer === void 0
          ? _e.setupRenderTarget(y)
          : Ae.__hasExternalTextures &&
            _e.rebindTextures(
              y,
              Le.get(y.texture).__webglTexture,
              Le.get(y.depthTexture).__webglTexture
            );
      }
      let W = null,
        xe = !1,
        Ce = !1;
      if (y) {
        const Ae = y.texture;
        (Ae.isData3DTexture || Ae.isDataArrayTexture) && (Ce = !0);
        const Ne = Le.get(y).__webglFramebuffer;
        y.isWebGLCubeRenderTarget
          ? ((W = Ne[P]), (xe = !0))
          : we.isWebGL2 && y.samples > 0 && _e.useMultisampledRTT(y) === !1
          ? (W = Le.get(y).__webglMultisampledFramebuffer)
          : (W = Ne),
          D.copy(y.viewport),
          R.copy(y.scissor),
          (b = y.scissorTest);
      } else
        D.copy(I).multiplyScalar(B).floor(),
          R.copy(q).multiplyScalar(B).floor(),
          (b = G);
      if (
        (le.bindFramebuffer(36160, W) &&
          we.drawBuffers &&
          z &&
          le.drawBuffers(y, W),
        le.viewport(D),
        le.scissor(R),
        le.setScissorTest(b),
        xe)
      ) {
        const Ae = Le.get(y.texture);
        F.framebufferTexture2D(36160, 36064, 34069 + P, Ae.__webglTexture, N);
      } else if (Ce) {
        const Ae = Le.get(y.texture),
          Ne = P || 0;
        F.framebufferTextureLayer(36160, 36064, Ae.__webglTexture, N || 0, Ne);
      }
      x = -1;
    }),
    (this.readRenderTargetPixels = function (y, P, N, z, W, xe, Ce) {
      if (!(y && y.isWebGLRenderTarget)) {
        console.error(
          "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
        );
        return;
      }
      let Te = Le.get(y).__webglFramebuffer;
      if ((y.isWebGLCubeRenderTarget && Ce !== void 0 && (Te = Te[Ce]), Te)) {
        le.bindFramebuffer(36160, Te);
        try {
          const Ae = y.texture,
            Ne = Ae.format,
            De = Ae.type;
          if (Ne !== Ot && O.convert(Ne) !== F.getParameter(35739)) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
            );
            return;
          }
          const Pe =
            De === js &&
            (Me.has("EXT_color_buffer_half_float") ||
              (we.isWebGL2 && Me.has("EXT_color_buffer_float")));
          if (
            De !== qi &&
            O.convert(De) !== F.getParameter(35738) &&
            !(
              De === Oi &&
              (we.isWebGL2 ||
                Me.has("OES_texture_float") ||
                Me.has("WEBGL_color_buffer_float"))
            ) &&
            !Pe
          ) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
            );
            return;
          }
          P >= 0 &&
            P <= y.width - z &&
            N >= 0 &&
            N <= y.height - W &&
            F.readPixels(P, N, z, W, O.convert(Ne), O.convert(De), xe);
        } finally {
          const Ae = S !== null ? Le.get(S).__webglFramebuffer : null;
          le.bindFramebuffer(36160, Ae);
        }
      }
    }),
    (this.copyFramebufferToTexture = function (y, P, N = 0) {
      const z = Math.pow(2, -N),
        W = Math.floor(P.image.width * z),
        xe = Math.floor(P.image.height * z);
      _e.setTexture2D(P, 0),
        F.copyTexSubImage2D(3553, N, 0, 0, y.x, y.y, W, xe),
        le.unbindTexture();
    }),
    (this.copyTextureToTexture = function (y, P, N, z = 0) {
      const W = P.image.width,
        xe = P.image.height,
        Ce = O.convert(N.format),
        Te = O.convert(N.type);
      _e.setTexture2D(N, 0),
        F.pixelStorei(37440, N.flipY),
        F.pixelStorei(37441, N.premultiplyAlpha),
        F.pixelStorei(3317, N.unpackAlignment),
        P.isDataTexture
          ? F.texSubImage2D(3553, z, y.x, y.y, W, xe, Ce, Te, P.image.data)
          : P.isCompressedTexture
          ? F.compressedTexSubImage2D(
              3553,
              z,
              y.x,
              y.y,
              P.mipmaps[0].width,
              P.mipmaps[0].height,
              Ce,
              P.mipmaps[0].data
            )
          : F.texSubImage2D(3553, z, y.x, y.y, Ce, Te, P.image),
        z === 0 && N.generateMipmaps && F.generateMipmap(3553),
        le.unbindTexture();
    }),
    (this.copyTextureToTexture3D = function (y, P, N, z, W = 0) {
      if (p.isWebGL1Renderer) {
        console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
        );
        return;
      }
      const xe = y.max.x - y.min.x + 1,
        Ce = y.max.y - y.min.y + 1,
        Te = y.max.z - y.min.z + 1,
        Ae = O.convert(z.format),
        Ne = O.convert(z.type);
      let De;
      if (z.isData3DTexture) _e.setTexture3D(z, 0), (De = 32879);
      else if (z.isDataArrayTexture) _e.setTexture2DArray(z, 0), (De = 35866);
      else {
        console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
        );
        return;
      }
      F.pixelStorei(37440, z.flipY),
        F.pixelStorei(37441, z.premultiplyAlpha),
        F.pixelStorei(3317, z.unpackAlignment);
      const Pe = F.getParameter(3314),
        We = F.getParameter(32878),
        Di = F.getParameter(3316),
        Yi = F.getParameter(3315),
        Zi = F.getParameter(32877),
        qt = N.isCompressedTexture ? N.mipmaps[0] : N.image;
      F.pixelStorei(3314, qt.width),
        F.pixelStorei(32878, qt.height),
        F.pixelStorei(3316, y.min.x),
        F.pixelStorei(3315, y.min.y),
        F.pixelStorei(32877, y.min.z),
        N.isDataTexture || N.isData3DTexture
          ? F.texSubImage3D(De, W, P.x, P.y, P.z, xe, Ce, Te, Ae, Ne, qt.data)
          : N.isCompressedTexture
          ? (console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
            ),
            F.compressedTexSubImage3D(
              De,
              W,
              P.x,
              P.y,
              P.z,
              xe,
              Ce,
              Te,
              Ae,
              qt.data
            ))
          : F.texSubImage3D(De, W, P.x, P.y, P.z, xe, Ce, Te, Ae, Ne, qt),
        F.pixelStorei(3314, Pe),
        F.pixelStorei(32878, We),
        F.pixelStorei(3316, Di),
        F.pixelStorei(3315, Yi),
        F.pixelStorei(32877, Zi),
        W === 0 && z.generateMipmaps && F.generateMipmap(De),
        le.unbindTexture();
    }),
    (this.initTexture = function (y) {
      y.isCubeTexture
        ? _e.setTextureCube(y, 0)
        : y.isData3DTexture
        ? _e.setTexture3D(y, 0)
        : y.isDataArrayTexture
        ? _e.setTexture2DArray(y, 0)
        : _e.setTexture2D(y, 0),
        le.unbindTexture();
    }),
    (this.resetState = function () {
      (v = 0), (w = 0), (S = null), le.reset(), ge.reset();
    }),
    typeof __THREE_DEVTOOLS__ != "undefined" &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent("observe", { detail: this })
      );
}
class lc extends oc {}
lc.prototype.isWebGL1Renderer = !0;
class Rm extends He {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.overrideMaterial = null),
      (this.autoUpdate = !0),
      typeof __THREE_DEVTOOLS__ != "undefined" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.autoUpdate = e.autoUpdate),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), t;
  }
}
class Im {
  constructor(e, t) {
    (this.isInterleavedBuffer = !0),
      (this.array = e),
      (this.stride = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.usage = ji),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0),
      (this.uuid = Ai());
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.array = new e.array.constructor(e.array)),
      (this.count = e.count),
      (this.stride = e.stride),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, i) {
    (e *= this.stride), (i *= t.stride);
    for (let n = 0, r = this.stride; n < r; n++)
      this.array[e + n] = t.array[i + n];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Ai()),
      e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(
        e.arrayBuffers[this.array.buffer._uuid]
      ),
      i = new this.constructor(t, this.stride);
    return i.setUsage(this.usage), i;
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  toJSON(e) {
    return (
      e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Ai()),
      e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (e.arrayBuffers[this.array.buffer._uuid] = Array.from(
          new Uint32Array(this.array.buffer)
        )),
      {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride,
      }
    );
  }
}
const pt = new C();
class Si {
  constructor(e, t, i, n = !1) {
    (this.isInterleavedBufferAttribute = !0),
      (this.name = ""),
      (this.data = e),
      (this.itemSize = t),
      (this.offset = i),
      (this.normalized = n === !0);
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, i = this.data.count; t < i; t++)
      pt.fromBufferAttribute(this, t),
        pt.applyMatrix4(e),
        this.setXYZ(t, pt.x, pt.y, pt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++)
      pt.fromBufferAttribute(this, t),
        pt.applyNormalMatrix(e),
        this.setXYZ(t, pt.x, pt.y, pt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++)
      pt.fromBufferAttribute(this, t),
        pt.transformDirection(e),
        this.setXYZ(t, pt.x, pt.y, pt.z);
    return this;
  }
  setX(e, t) {
    return (this.data.array[e * this.data.stride + this.offset] = t), this;
  }
  setY(e, t) {
    return (this.data.array[e * this.data.stride + this.offset + 1] = t), this;
  }
  setZ(e, t) {
    return (this.data.array[e * this.data.stride + this.offset + 2] = t), this;
  }
  setW(e, t) {
    return (this.data.array[e * this.data.stride + this.offset + 3] = t), this;
  }
  getX(e) {
    return this.data.array[e * this.data.stride + this.offset];
  }
  getY(e) {
    return this.data.array[e * this.data.stride + this.offset + 1];
  }
  getZ(e) {
    return this.data.array[e * this.data.stride + this.offset + 2];
  }
  getW(e) {
    return this.data.array[e * this.data.stride + this.offset + 3];
  }
  setXY(e, t, i) {
    return (
      (e = e * this.data.stride + this.offset),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = i),
      this
    );
  }
  setXYZ(e, t, i, n) {
    return (
      (e = e * this.data.stride + this.offset),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = i),
      (this.data.array[e + 2] = n),
      this
    );
  }
  setXYZW(e, t, i, n, r) {
    return (
      (e = e * this.data.stride + this.offset),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = i),
      (this.data.array[e + 2] = n),
      (this.data.array[e + 3] = r),
      this
    );
  }
  clone(e) {
    if (e === void 0) {
      console.log(
        "THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data."
      );
      const t = [];
      for (let i = 0; i < this.count; i++) {
        const n = i * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[n + r]);
      }
      return new Et(
        new this.array.constructor(t),
        this.itemSize,
        this.normalized
      );
    } else
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)),
        new Si(
          e.interleavedBuffers[this.data.uuid],
          this.itemSize,
          this.offset,
          this.normalized
        )
      );
  }
  toJSON(e) {
    if (e === void 0) {
      console.log(
        "THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data."
      );
      const t = [];
      for (let i = 0; i < this.count; i++) {
        const n = i * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[n + r]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized,
      };
    } else
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)),
        {
          isInterleavedBufferAttribute: !0,
          itemSize: this.itemSize,
          data: this.data.uuid,
          offset: this.offset,
          normalized: this.normalized,
        }
      );
  }
}
class hi extends Et {
  constructor(e, t, i, n = 1) {
    typeof i == "number" &&
      ((n = i),
      (i = !1),
      console.error(
        "THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."
      )),
      super(e, t, i),
      (this.isInstancedBufferAttribute = !0),
      (this.meshPerAttribute = n);
  }
  copy(e) {
    return super.copy(e), (this.meshPerAttribute = e.meshPerAttribute), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.meshPerAttribute = this.meshPerAttribute),
      (e.isInstancedBufferAttribute = !0),
      e
    );
  }
}
class Vn extends Vt {
  constructor(
    e = 1,
    t = 32,
    i = 16,
    n = 0,
    r = Math.PI * 2,
    a = 0,
    o = Math.PI
  ) {
    super(),
      (this.type = "SphereGeometry"),
      (this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: i,
        phiStart: n,
        phiLength: r,
        thetaStart: a,
        thetaLength: o,
      }),
      (t = Math.max(3, Math.floor(t))),
      (i = Math.max(2, Math.floor(i)));
    const l = Math.min(a + o, Math.PI);
    let c = 0;
    const h = [],
      d = new C(),
      u = new C(),
      m = [],
      g = [],
      p = [],
      f = [];
    for (let v = 0; v <= i; v++) {
      const w = [],
        S = v / i;
      let x = 0;
      v == 0 && a == 0
        ? (x = 0.5 / t)
        : v == i && l == Math.PI && (x = -0.5 / t);
      for (let A = 0; A <= t; A++) {
        const D = A / t;
        (d.x = -e * Math.cos(n + D * r) * Math.sin(a + S * o)),
          (d.y = e * Math.cos(a + S * o)),
          (d.z = e * Math.sin(n + D * r) * Math.sin(a + S * o)),
          g.push(d.x, d.y, d.z),
          u.copy(d).normalize(),
          p.push(u.x, u.y, u.z),
          f.push(D + x, 1 - S),
          w.push(c++);
      }
      h.push(w);
    }
    for (let v = 0; v < i; v++)
      for (let w = 0; w < t; w++) {
        const S = h[v][w + 1],
          x = h[v][w],
          A = h[v + 1][w],
          D = h[v + 1][w + 1];
        (v !== 0 || a > 0) && m.push(S, x, D),
          (v !== i - 1 || l < Math.PI) && m.push(x, A, D);
      }
    this.setIndex(m),
      this.setAttribute("position", new Gt(g, 3)),
      this.setAttribute("normal", new Gt(p, 3)),
      this.setAttribute("uv", new Gt(f, 2));
  }
  static fromJSON(e) {
    return new Vn(
      e.radius,
      e.widthSegments,
      e.heightSegments,
      e.phiStart,
      e.phiLength,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class cc extends gt {
  constructor(e) {
    super(e),
      (this.isRawShaderMaterial = !0),
      (this.type = "RawShaderMaterial");
  }
}
class Sa extends He {
  constructor(e, t = 1) {
    super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new L(e)),
      (this.intensity = t);
  }
  dispose() {}
  copy(e, t) {
    return (
      super.copy(e, t),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (t.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (t.object.distance = this.distance),
      this.angle !== void 0 && (t.object.angle = this.angle),
      this.decay !== void 0 && (t.object.decay = this.decay),
      this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
      t
    );
  }
}
const $o = new je(),
  Yo = new C(),
  Zo = new C();
class hc {
  constructor(e) {
    (this.camera = e),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new me(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new je()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new ya()),
      (this._frameExtents = new me(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new Fe(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera,
      i = this.matrix;
    Yo.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(Yo),
      Zo.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(Zo),
      t.updateMatrixWorld(),
      $o.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix($o),
      i.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      i.multiply(t.projectionMatrix),
      i.multiply(t.matrixWorldInverse);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.bias = e.bias),
      (this.radius = e.radius),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      this.bias !== 0 && (e.bias = this.bias),
      this.normalBias !== 0 && (e.normalBias = this.normalBias),
      this.radius !== 1 && (e.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
const Ko = new je(),
  Bs = new C(),
  Ar = new C();
class Fm extends hc {
  constructor() {
    super(new wt(90, 1, 0.5, 500)),
      (this.isPointLightShadow = !0),
      (this._frameExtents = new me(4, 2)),
      (this._viewportCount = 6),
      (this._viewports = [
        new Fe(2, 1, 1, 1),
        new Fe(0, 1, 1, 1),
        new Fe(3, 1, 1, 1),
        new Fe(1, 1, 1, 1),
        new Fe(3, 0, 1, 1),
        new Fe(1, 0, 1, 1),
      ]),
      (this._cubeDirections = [
        new C(1, 0, 0),
        new C(-1, 0, 0),
        new C(0, 0, 1),
        new C(0, 0, -1),
        new C(0, 1, 0),
        new C(0, -1, 0),
      ]),
      (this._cubeUps = [
        new C(0, 1, 0),
        new C(0, 1, 0),
        new C(0, 1, 0),
        new C(0, 1, 0),
        new C(0, 0, 1),
        new C(0, 0, -1),
      ]);
  }
  updateMatrices(e, t = 0) {
    const i = this.camera,
      n = this.matrix,
      r = e.distance || i.far;
    r !== i.far && ((i.far = r), i.updateProjectionMatrix()),
      Bs.setFromMatrixPosition(e.matrixWorld),
      i.position.copy(Bs),
      Ar.copy(i.position),
      Ar.add(this._cubeDirections[t]),
      i.up.copy(this._cubeUps[t]),
      i.lookAt(Ar),
      i.updateMatrixWorld(),
      n.makeTranslation(-Bs.x, -Bs.y, -Bs.z),
      Ko.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(Ko);
  }
}
class Jo extends Sa {
  constructor(e, t, i = 0, n = 1) {
    super(e, t),
      (this.isPointLight = !0),
      (this.type = "PointLight"),
      (this.distance = i),
      (this.decay = n),
      (this.shadow = new Fm());
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.decay = e.decay),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class zm extends hc {
  constructor() {
    super(new ba(-5, 5, 5, -5, 0.5, 500)), (this.isDirectionalLightShadow = !0);
  }
}
class Um extends Sa {
  constructor(e, t) {
    super(e, t),
      (this.isDirectionalLight = !0),
      (this.type = "DirectionalLight"),
      this.position.copy(He.DefaultUp),
      this.updateMatrix(),
      (this.target = new He()),
      (this.shadow = new zm());
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class Bm extends Sa {
  constructor(e, t) {
    super(e, t), (this.isAmbientLight = !0), (this.type = "AmbientLight");
  }
}
class Js extends Vt {
  constructor() {
    super(),
      (this.isInstancedBufferGeometry = !0),
      (this.type = "InstancedBufferGeometry"),
      (this.instanceCount = 1 / 0);
  }
  copy(e) {
    return super.copy(e), (this.instanceCount = e.instanceCount), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = super.toJSON(this);
    return (
      (e.instanceCount = this.instanceCount),
      (e.isInstancedBufferGeometry = !0),
      e
    );
  }
}
class Nm extends Im {
  constructor(e, t, i = 1) {
    super(e, t),
      (this.isInstancedInterleavedBuffer = !0),
      (this.meshPerAttribute = i);
  }
  copy(e) {
    return super.copy(e), (this.meshPerAttribute = e.meshPerAttribute), this;
  }
  clone(e) {
    const t = super.clone(e);
    return (t.meshPerAttribute = this.meshPerAttribute), t;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.isInstancedInterleavedBuffer = !0),
      (t.meshPerAttribute = this.meshPerAttribute),
      t
    );
  }
}
class km {
  constructor(e, t, i = 0, n = 1 / 0) {
    (this.ray = new Yl(e, t)),
      (this.near = i),
      (this.far = n),
      (this.camera = null),
      (this.layers = new xa()),
      (this.params = {
        Mesh: {},
        Line: { threshold: 1 },
        LOD: {},
        Points: { threshold: 1 },
        Sprite: {},
      });
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera
      ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld),
        this.ray.direction
          .set(e.x, e.y, 0.5)
          .unproject(t)
          .sub(this.ray.origin)
          .normalize(),
        (this.camera = t))
      : t.isOrthographicCamera
      ? (this.ray.origin
          .set(e.x, e.y, (t.near + t.far) / (t.near - t.far))
          .unproject(t),
        this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld),
        (this.camera = t))
      : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  intersectObject(e, t = !0, i = []) {
    return na(e, this, i, t), i.sort(Qo), i;
  }
  intersectObjects(e, t = !0, i = []) {
    for (let n = 0, r = e.length; n < r; n++) na(e[n], this, i, t);
    return i.sort(Qo), i;
  }
}
function Qo(s, e) {
  return s.distance - e.distance;
}
function na(s, e, t, i) {
  if ((s.layers.test(e.layers) && s.raycast(e, t), i === !0)) {
    const n = s.children;
    for (let r = 0, a = n.length; r < a; r++) na(n[r], e, t, !0);
  }
}
function Om() {
  Pi(Xe, (s) => s.set(0, 0, 0, 0)),
    Pi(L, (s) => s.setRGB(0, 0, 0)),
    Pi(me, (s) => s.setScalar(0)),
    Pi(C, (s) => s.setScalar(0)),
    Pi(Fe, (s) => s.setScalar(0)),
    Pi(ht, (s) => s.set(0, 0, 0, "XYZ")),
    Pi(je);
}
Om();
const Bt = (s) => s,
  Gm = (s) => s.charAt(0).toUpperCase() + s.slice(1);
let Yt = {},
  el = !1;
function Qs() {
  return Yt;
}
const ae = new Proxy({}, { get: (s, e) => Yt[e] });
function Vm(s = {}) {
  if (el) return Yt;
  el = !0;
  const e = s,
    t = e.app || {},
    i = Array.isArray(s.plugins) ? [...s.plugins] : [],
    n = {},
    r = [
      "PluginsInstall",
      "Init",
      "Preload",
      "Start",
      "Load",
      "Prerender",
      "Frame",
      "Update",
      "Render",
    ].reduce(
      (g, p) => ((g["before" + p] = Ti()), (g["after" + p] = Ti()), g),
      {}
    );
  let a = {
    app: new Proxy({}, { get: o }),
    state: n,
    hooks: r,
    options: e,
    plugins: i,
    usePlugin: d,
    init: Bt,
    preload: Bt,
    load: Bt,
    start: Bt,
    prerender: () => Yt.frame(),
    frame: () => {
      Yt.update(), Yt.render();
    },
    registerMixin: l,
    registerComponent: c,
    update: Bt,
    render: Bt,
  };
  return (
    (a = Object.assign(Yt, a)),
    (a.collection = { mixins: {}, components: {} }),
    (s.decorator || Bt)(Yt),
    (Yt.log = () => {}),
    (Yt.usePlugin = d),
    m("init", !0, !0, () => {
      h();
      const g = (p) => () => (n.prerendering = p);
      ["frame", "update", "render"].forEach((p) => m(p, !1)),
        ["preload", "start"].forEach((p) => m(p, !0, !0)),
        ["load"].forEach((p) => m(p, !0)),
        m("prerender", !0, !1, g(!0), g(!1));
    }),
    a
  );
  function o(g, p) {
    if (t[p]) return t[p];
  }
  function l(...g) {
    for (let p = 0; p < g.length; p += 2) {
      const f = g[p],
        v = g[p + 1];
      if (!v) continue;
      const w = a.collection.mixins;
      w[f] || (w[f] = v);
    }
  }
  function c(...g) {
    for (let p = 0; p < g.length; p += 2) {
      const f = g[p],
        v = g[p + 1];
      if (!v) continue;
      const w = a.collection.components;
      w[f] || (w[f] = v);
    }
  }
  function h() {
    r.beforePluginsInstall.emit();
    const g = a.plugins.filter(Boolean);
    a.usePlugin = u;
    for (const p of g) {
      const f = Array.isArray(p),
        v = f ? p[0] : p,
        w = f ? p[1] : {};
      u(v, w);
    }
    r.afterPluginsInstall.emit(),
      r.beforePluginsInstall.unwatchAll(),
      r.afterPluginsInstall.unwatchAll();
  }
  function d(g, p = {}) {
    i.includes(g) || i.push([g, p]);
  }
  function u(g, p = {}) {
    if (((p = Object.assign({}, { log: Bt }, p)), g.install))
      return g.install.call(a, a, p);
    if (typeof g == "function") return g.call(a, a, p);
  }
  function m(g, p, f, v, w) {
    const S = a[g] || Bt,
      x = Gm(g),
      A = r["before" + x] || Bt,
      D = r["after" + x] || Bt;
    a[g] = p
      ? async function (R) {
          A.emit(),
            v && v(),
            await S(R),
            w && w(),
            D.emit(),
            f && (A.unwatchAll(), D.unwatchAll());
        }
      : function (R) {
          A.emit(),
            v && v(),
            S(R),
            w && w(),
            D.emit(),
            f && (A.unwatchAll(), D.unwatchAll());
        };
  }
}
var Hm =
    "mat4 getInstanceMatrix(vec3 p,vec4 q,vec3 s){mat4 m;float x=q.x;float y=q.y;float z=q.z;float w=q.w;float x2=x+x;float y2=y+y;float z2=z+z;float xx=x*x2;float xy=x*y2;float xz=x*z2;float yy=y*y2;float yz=y*z2;float zz=z*z2;float wx=w*x2;float wy=w*y2;float wz=w*z2;float sx=s.x;float sy=s.y;float sz=s.z;m[0][0]=(1.-(yy+zz))*sx;m[0][1]=(xy+wz)*sx;m[0][2]=(xz-wy)*sx;m[0][3]=0.;m[1][0]=(xy-wz)*sy;m[1][1]=(1.-(xx+zz))*sy;m[1][2]=(yz+wx)*sy;m[1][3]=0.;m[2][0]=(xz+wy)*sz;m[2][1]=(yz-wx)*sz;m[2][2]=(1.-(xx+yy))*sz;m[2][3]=0.;m[3][0]=p.x;m[3][1]=p.y;m[3][2]=p.z;m[3][3]=1.;return m;}",
  Wm = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Hm },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  qm = "float luma(vec3 color){return dot(color,vec3(0.299,0.587,0.114));}",
  Xm = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: qm },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  jm = "varying vec3 vWorldPos;",
  $m = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: jm },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ym =
    "vec4 worldPosition=modelMatrix*vec4(transformed,1.0);vWorldPos=worldPosition.xyz;",
  Zm = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ym },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const tl = {
  "./get_instance_matrix.glsl": Wm,
  "./luma.glsl": Xm,
  "./worldpos_pars.glsl": $m,
  "./worldpos_vertex_bis.glsl": Zm,
};
function Km() {
  for (const s in tl) {
    const e = s.split("/").pop().slice(0, -5);
    Ee[e] = tl[s].default;
  }
}
function Jm(s) {
  (s.prototype.updateMatrixWorld = function (t) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || t) &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (t = !0));
    const i = this.children;
    for (let n = 0, r = i.length; n < r; n++)
      (!i[n].manualMatrixUpdate || t) && i[n].updateMatrixWorld(t);
  }),
    (s.prototype.updateWorldMatrix = function (t, i) {
      const n = this.parent;
      if (
        (t === !0 && n !== null && n.updateWorldMatrix(!0, !1),
        this.matrixAutoUpdate && this.updateMatrix(),
        this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        i === !0)
      ) {
        const r = this.children;
        for (let a = 0, o = r.length; a < o; a++)
          r[a].manualMatrixUpdate || r[a].updateWorldMatrix(!1, !0);
      }
    });
}
function Qm(s) {
  e0(s);
}
function e0(s) {
  const e = s.renderLists;
  if (e._patched) return;
  e._patched = !0;
  const t = e.get;
  e.get = function (i, n) {
    const r = t(i, n);
    return r._patched || t0(r), r;
  };
}
function t0(s) {
  s._patched = !0;
  const e = s.push,
    t = s.unshift;
  (s.push = function (n, r, a, o, l, c) {
    const h = a.transparent && a.forceOpaque;
    h && (a.transparent = !1), e(n, r, a, o, l, c), h && (a.transparent = !0);
  }),
    (s.unshift = function (n, r, a, o, l, c) {
      const h = a.transparent && a.forceOpaque;
      h && (a.transparent = !1), t(n, r, a, o, l, c), h && (a.transparent = !0);
    });
}
const il = "string",
  Ns = {};
let i0 = 0;
class $e {
  constructor(e = {}) {
    (this.isComponent = !0), (this.props = e);
    const t = (this.usedMixins = []);
    (t.dynamic = []),
      (this.static = !1),
      (this.webgl = Qs()),
      (this.scene = null),
      (this.parent = null),
      (this.base = null);
    const i = (this.children = []);
    (i.dynamic = []),
      (this.isInit = !1),
      (this.isDestroyed = !1),
      (this.uid = ++i0),
      this.name ||
        (this.props.name
          ? (this.name = this.props.name)
          : this.props.id
          ? (this.name = this.props.id)
          : ((this.name = this.constructor.name),
            Ns[this.name] ? ++Ns[this.name] : (Ns[this.name] = 1),
            Ns[this.name] > 1 && (this.name += "_" + (Ns[this.name] - 1)))),
      (this.log = () => {});
  }
  triggerInit() {
    if (!this.isInit) {
      if ((this.beforeInit && this.beforeInit(), this.mixins)) {
        const e = this.mixins;
        if (Array.isArray(e))
          for (let t = 0; t < e.length; t++) {
            let i = e[t],
              n;
            Array.isArray(i) && ((n = i[1]), (i = i[0])), this.useMixin(i, n);
          }
      }
      this.init && this.init(),
        (this.isInit = !0),
        this.afterInit && this.afterInit();
    }
  }
  bind(e, t = 0) {
    return (this[e] = Oc(e, this, t)), this[e];
  }
  useMixin(e, t = {}) {
    typeof e === il && (e = this.webgl.collection.mixins[e]),
      e && (e.isMixin ? e : new e(t)).use(this);
  }
  unuseMixin(e) {
    !e || e.unuse();
  }
  addObject3D(e) {
    return this.base && this.base.add(e), e;
  }
  removeObject3D(e) {
    return this.base && this.base.remove(e), null;
  }
  add(e, t = {}, i) {
    if ((typeof e === il && (e = this.webgl.collection.components[e]), !e))
      return;
    if (~this.children.indexOf(e)) return e;
    e.isComponent || (e = new e(t));
    const n = e.parent;
    return (
      n && n.remove(e),
      (e.parent = this),
      this.scene ? (e.scene = this.scene) : this.isScene && (e.scene = this),
      e.isInit || e.triggerInit(t),
      e.static || this.children.dynamic.push(e),
      this.children.push(e),
      e.base && (i ? i.add(e.base) : this.base && this.base.add(e.base)),
      e.destroyed
        ? (this.remove(e), e)
        : (this.isAttached && Ma(this.scene, e), e)
    );
  }
  removeFromParent() {
    this.parent && this.parent.remove(this);
  }
  remove(e) {
    const t = this.children.indexOf(e);
    if (!~t) return;
    this.children.splice(t, 1);
    const i = this.children.dynamic.indexOf(e);
    return (
      ~i && this.children.dynamic.splice(i, 1),
      (e.parent = null),
      e.base && e.base.removeFromParent(),
      Ca(e),
      null
    );
  }
  triggerUpdate() {
    if (!this.isInit) return;
    this.beforeUpdate && this.beforeUpdate();
    const e = this.usedMixins.dynamic;
    for (let i = 0, n = e.length; i < n; i++) {
      const r = e[i];
      if ((r && r.update(), this.isDestroyed)) break;
      r.isDestroyed && (n--, i--);
    }
    if (this.isDestroyed || (this.update && this.update(), this.isDestroyed))
      return;
    const t = this.children.dynamic;
    for (let i = 0, n = t.length; i < n; i++) {
      const r = t[i];
      r && r.triggerUpdate(), r.isDestroyed && (n--, i--);
    }
    !this.isDestroyed && this.afterUpdate && this.afterUpdate();
  }
  destroy() {
    if (!this.isDestroyed) {
      this.beforeDestroy && this.beforeDestroy();
      for (let e = this.usedMixins.length - 1; e >= 0; e--)
        this.usedMixins[e].destroy();
      this.parent && this.parent.remove(this);
      for (let e = this.children.length - 1; e >= 0; e--)
        this.children[e].destroy();
      if (this.base) {
        for (let e = this.base.children.length - 1; e >= 0; e--)
          this.base.remove(this.base.children[e]);
        this.base.removeFromParent();
      }
      (this.props = null),
        (this.usedMixins = null),
        (this.webgl = null),
        (this.scene = null),
        (this.parent = null),
        (this.base = null),
        (this.children = null),
        (this.isDestroyed = !0);
    }
  }
}
$e.triggerAttached = Ma;
function Ma(s, e) {
  const t = e.children,
    i = e.usedMixins;
  if (!e.isAttached) {
    (e.isAttached = !0), (e.scene = s), e.attached && e.attached();
    for (let n = i.length - 1; n >= 0; n--) i[n].componentAttached(e);
    for (let n = t.length - 1; n >= 0; n--) Ma(s, t[n]);
  }
}
$e.triggerDetached = Ca;
function Ca(s) {
  const e = s.children,
    t = s.usedMixins;
  if (!s.isAttached) {
    s.scene = null;
    return;
  }
  for (let i = e.length - 1; i >= 0; i--) Ca(e[i]);
  for (let i = t.length - 1; i >= 0; i--) t[i].componentDetached(s);
  (s.isAttached = !1), s.detached && s.detached(), (s.scene = null);
}
function s0() {
  const s = window.innerWidth / window.innerHeight;
  return new wt(55, s, 0.1, 100);
}
class uc extends $e {
  constructor(e = {}) {
    super(e), (this.isCamera = !0), (this.isUsed = !1);
  }
  afterInit() {
    this.cam && !this.base
      ? (this.base = this.cam)
      : this.cam || (this.cam = s0()),
      this.base || (this.base = this.cam);
    const e = this.webgl.renderer.drawingBufferSize;
    this.resizeSignal = e.watchImmediate(this.resize, this);
  }
  used() {}
  unused() {}
  resize(e) {
    (this.cam.aspect = e.x / e.y), this.cam.updateProjectionMatrix();
  }
  destroy() {
    zc(this.resizeSignal), super.destroy();
  }
}
function ks(s, e) {
  !s || s.isUsed == e || ((s.isUsed = !!e), s.isUsed ? s.used() : s.unused());
}
class n0 extends $e {
  constructor(e = {}) {
    (e.autoAttach = e.autoAttach == null ? !0 : !!e.autoAttach),
      super(e, !0),
      (this.isScene = !0),
      (this._cam = { current: !1, forced: !1 }),
      this.props || (this.props = e);
  }
  triggerInit() {
    this.isInit ||
      ((this.base = new Rm()),
      super.triggerInit(),
      this.camera || (this.camera = this.add(uc)),
      this.props.autoAttach && this.attach());
  }
  attach() {
    $e.triggerAttached(this, this);
  }
  detach() {
    $e.triggerDetached(this, this);
  }
  update() {}
  init() {}
  get camera() {
    return this._cam.current;
  }
  set camera(e) {
    (!e || !e.isCamera) && (e = !1);
    const t = this._cam;
    t.current !== e &&
      (ks(t.current, !1), (t.current = e), t.forced || ks(t.current, !1));
  }
  get overrideCamera() {
    return this._cam.forced;
  }
  set overrideCamera(e) {
    (!e || !e.isCamera) && (e = !1);
    const t = this._cam;
    t.forced !== e &&
      (ks(t.forced, !1), ks(t.current, !1), (t.forced = e), ks(t.forced, !0));
  }
  getCurrentCamera() {
    return this._cam.forced || this._cam.current;
  }
  render() {
    const e = this.webgl.threeRenderer,
      t = this.getCurrentCamera();
    !t || e.render(this.base, t.cam);
  }
  triggerRender() {
    this.beforeRender && this.beforeRender(),
      this.render(),
      this.afterRender && this.afterRender();
  }
  destroy() {
    this.detach(), super.destroy();
  }
}
let r0 = 0;
function ut(s, e, t) {
  const i = () => {};
  return {
    c: ++r0,
    shader: s,
    use: (r) => {
      const a = r.material || r;
      return (a[e] = s), (a.needsUpdate = !0), r;
    },
    unuse: i,
    clear: i,
  };
}
const a0 = `#define PI 3.14159265359
precision lowp float;varying vec3 vPos;uniform float time;uniform vec3 color;uniform vec3 color2;uniform float darken;uniform float yOffset;uniform sampler2D noise;void main(){float a=smoothstep(-1.,1.,cos(vPos.x*PI*2.+1.2));vec3 c=mix(color,color2,smoothstep(0.8,-0.1,a)*smoothstep(-0.02,0.2,vPos.y)*smoothstep(1.0,0.,vPos.y));float nm=smoothstep(-280.,-190.,vPos.z);
#ifdef IS_MOBILE
float n=0.;
#else
float t=time*0.3;float na=texture2D(noise,vPos.xy*2.5+vec2(0.,t)).r;float nb=texture2D(noise,vPos.xy*2.+vec2(t*0.35+10.,0.)+na*0.2).r-0.5;float n=nb*2.*nm;
#endif
c=mix(c,c*0.1,smoothstep(mix(-150.,-270.,yOffset),mix(-50.,-200.,yOffset),vPos.z)-n*1.2);gl_FragColor=vec4(c*darken,1.);}`;
var o0 = ut(a0, "fragmentShader");
const l0 =
  "precision highp float;attribute vec3 position;attribute vec2 uv;uniform mat4 modelMatrix;uniform mat4 modelViewMatrix;uniform mat4 projectionMatrix;varying vec3 vPos;varying vec2 vUv;void main(){vec3 transformed=vec3(position);vec4 mvPosition=vec4(transformed,1.0);mvPosition=modelViewMatrix*mvPosition;gl_Position=projectionMatrix*mvPosition;vec4 worldPosition=modelMatrix*vec4(transformed,1.0);vPos=vec3(uv.x,uv.y,worldPosition.y);}";
var c0 = ut(l0, "vertexShader");
let Tr = null;
class ra extends cc {
  constructor() {
    super(),
      (this.uniforms = {
        noise: ae.uniforms.textures.noise,
        color: ae.uniforms.colors.background,
        color2: ae.uniforms.colors.background2,
        time: ae.uniforms.time,
        yOffset: { value: 0, needsUpdate: !0 },
        darken: { value: 0, needsUpdate: !0 },
      }),
      (this.defines = Re({}, ae.defines)),
      o0.use(this),
      c0.use(this),
      (this.depthTest = !1),
      (this.depthWrite = !1),
      (this.type = "RawShaderMaterial"),
      (this.isShaderMaterial = !0);
  }
}
ra.use = function () {
  return (Tr = Tr || new ra()), Tr;
};
const h0 = new Vn(1, 32, 32).scale(-1, 1, 1);
class u0 extends $e {
  init() {
    const e = (this.mat = ra.use());
    (this.base = new rt(h0, e)),
      this.base.scale.setScalar(300),
      (this.base.rotation.y -= Math.PI * 0.5),
      (this.base.manualMatrixUpdate = !0),
      (this.base.frustumCulled = !1),
      (this.base.renderOrder = this.webgl.stores.renderOrder.background);
  }
  update() {
    const e = this.webgl.time.dt,
      t = this.mat.uniforms,
      i = this.webgl.game.bonuses.mods,
      n = this.webgl.scene.gameCam.desktopInfluence,
      r = Kt(n, 1, 0, 0, 1);
    (t.yOffset.needsUpdate =
      this.mat.uniformsNeedUpdate || r !== t.yOffset.value),
      (t.yOffset.value = r);
    const o = i && i.isActive.value ? 0.2 : 1,
      l = _s(t.darken.value, o, 0, 1, e);
    (t.darken.needsUpdate =
      this.mat.uniformsNeedUpdate || l !== t.darken.value),
      (t.darken.value = l);
  }
}
new L();
const Os = (s) => (Number.isInteger(s) ? s + "." : s) + "";
let ds = null;
function en() {
  return (
    ds ||
    ((ds = {}),
    ae.app.$device.type.mobile && (ds.IS_MOBILE = !0),
    ae.app.$device.os === "android" && (ds.IS_ANDROID = !0),
    ds)
  );
}
const ui = {},
  Er = ["purple", "blue", "cherry", "green"];
ui.blue = {
  background: new L("#010855").offsetHSL(0, 0.1, 0.08),
  background2: new L("#010855").offsetHSL(0.145, -0.15, 0.11),
  inside: new L("#010855").offsetHSL(0, 0.1, -0.1),
  wall: new L("#002050").offsetHSL(0, 0, 0),
  ground: new L("#002050"),
  power: new L("#4cfeaa"),
  light: new L("#002050").offsetHSL(0, 0.2, 0.6),
  lightAmbient: new L("#ffffff"),
  lightDirectional: new L("#1bd3fc").offsetHSL(0, -0.2, 0.2),
  lightBar: new L("#1bd3fc").offsetHSL(0, 0, 0.1),
  normalBall: new L("#3399ff"),
  normalBallLight: new L("#44ffff").offsetHSL(0.1, 0, 0),
  fireBall: new L("#ffff00").offsetHSL(-0.02, -0.2, 0),
  fireBallLight: new L("#ffff44").offsetHSL(-0.02, -0.2, 0),
  blockUnbreakable: new L("#000000"),
  blockBonus: new L("#002050"),
  block1: new L("#002050"),
  block2: new L("#002050").offsetHSL(0.03, 0, 0.01),
  block3: new L("#002050").offsetHSL(0.11, 0, 0.03),
  block4: new L("#002050").offsetHSL(0.15, 0, 0.05),
};
ui.green = {
  background: new L("#015508").offsetHSL(0.02, 0, -0.02),
  background2: new L("#015508").offsetHSL(0.19, -0.06, 0.03),
  inside: new L("#015508").offsetHSL(0, 0.1, -0.1),
  wall: new L("#005020").multiplyScalar(0.8),
  ground: new L("#005020").offsetHSL(0, 0, -0.06),
  power: new L("#4cfeaa"),
  light: new L("#005020").offsetHSL(0, 0.2, 0.6),
  lightAmbient: new L("#1bfcd3"),
  lightDirectional: new L("#1bfcd3"),
  lightBar: new L("#1bfcd3"),
  normalBall: new L("#00ffff"),
  normalBallLight: new L("#00ffff"),
  fireBall: new L("#ffff00"),
  fireBallLight: new L("#ffff00"),
  blockUnbreakable: new L("#000000"),
  blockBonus: new L("#005020"),
  block1: new L("#005020"),
  block2: new L("#005020").offsetHSL(0.03, 0, 0.01),
  block3: new L("#005020").offsetHSL(0.11, 0, 0.03),
  block4: new L("#005020").offsetHSL(0.15, 0, 0.05),
};
ui.purple = {
  background: new L("#430064").offsetHSL(-0.05, 0.1, 0.11),
  background2: new L("#430064").offsetHSL(0.15, -0.1, 0.05),
  inside: new L("#430064").offsetHSL(0, 0.1, -0.1),
  wall: new L("#430064").offsetHSL(0.2, -0.4, -0.02),
  ground: new L("#430064").offsetHSL(0, 0, -0.05),
  power: new L("#4cfeaa"),
  light: new L("#430064").offsetHSL(0, 0.2, 0.2),
  lightAmbient: new L("#fc1bd3"),
  lightDirectional: new L("#fc1bd3"),
  lightBar: new L("#fc1bd3"),
  normalBall: new L("#00ffff"),
  normalBallLight: new L("#00ffff"),
  fireBall: new L("#ffff00").offsetHSL(-0.02, -0.2, 0),
  fireBallLight: new L("#ffff44").offsetHSL(-0.02, -0.2, 0.1),
  blockUnbreakable: new L("#000000"),
  blockBonus: new L("#430064"),
  block1: new L("#430064"),
  block2: new L("#430064").offsetHSL(0.03, 0, 0.01),
  block3: new L("#430064").offsetHSL(0.11, 0, 0.03),
  block4: new L("#430064").offsetHSL(0.15, 0, 0.05),
};
ui.cherry = {
  background: new L("#603a29").offsetHSL(0, 0.2, -0.02),
  background2: new L("#603a29").offsetHSL(-0.12, 0.2, 0.09),
  inside: new L("#603a29").offsetHSL(0, 0.1, -0.1),
  wall: new L("#603a29"),
  ground: new L("#603a29"),
  power: new L("#4cfeaa"),
  light: new L("#603a29").offsetHSL(0, 0.2, 0.2),
  lightAmbient: new L("#fc1bd3"),
  lightDirectional: new L("#fc1bd3"),
  lightBar: new L("#fc1bd3"),
  normalBall: new L("#00ffff"),
  normalBallLight: new L("#1bd3fc"),
  fireBall: new L("#ffff00"),
  fireBallLight: new L("#1bd3fc"),
  blockUnbreakable: new L("#000000"),
  blockBonus: new L("#603a29"),
  block1: new L("#603a29"),
  block2: new L("#603a29").offsetHSL(0.03, 0, 0.01),
  block3: new L("#603a29").offsetHSL(0.11, 0, 0.03),
  block4: new L("#603a29").offsetHSL(0.15, 0, 0.05),
};
ui.ballLost = {
  background: new L("#6c0918").offsetHSL(0, 0.1, -0.05),
  background2: new L("#6c0918").offsetHSL(0.02, 0.15, -0.05),
  inside: new L("#6c0918").multiplyScalar(0.9),
  wall: new L("#ff191e").offsetHSL(-0.01, -0.3, -0.25).multiplyScalar(0.6),
  ground: new L("#901b14").offsetHSL(-0.01, 0, -0.14).multiplyScalar(0.8),
  power: new L("#4cfeaa"),
  light: new L("#500020").offsetHSL(0, 0.2, 0.2),
  lightAmbient: new L("#ff1c21"),
  lightDirectional: new L("#ff1c21"),
  lightBar: new L("#ff1c21"),
  normalBall: new L("#ff392e").multiplyScalar(1.3),
  normalBallLight: new L("#ff1c21").multiplyScalar(1.5),
  fireBall: new L("#ffff00"),
  fireBallLight: new L("#1bd3fc"),
  blockUnbreakable: new L("#000000"),
  blockBonus: new L("#500020"),
  block1: new L("#500020"),
  block2: new L("#500020").offsetHSL(0.03, 0, 0.01),
  block3: new L("#500020").offsetHSL(0.11, 0, 0.03),
  block4: new L("#500020").offsetHSL(0.15, 0, 0.05),
};
ui.gameOver = {
  background: new L("#490056").offsetHSL(0.04, 0.15, -0.02),
  background2: new L("#490056").offsetHSL(-0.02, 0.03, 0.02),
  inside: new L("#490056").offsetHSL(0, 0.1, -0.1),
  wall: new L("#490056"),
  ground: new L("#490056"),
  power: new L("#4cfeaa"),
  light: new L("#490056").offsetHSL(0, 0.2, 0.2),
  lightAmbient: new L("#fc1bd3"),
  lightDirectional: new L("#fc1bd3"),
  lightBar: new L("#fc1bd3"),
  normalBall: new L("#00ffff"),
  normalBallLight: new L("#1bd3fc"),
  fireBall: new L("#ffff00"),
  fireBallLight: new L("#1bd3fc"),
  blockUnbreakable: new L("#000000"),
  blockBonus: new L("#490056"),
  block1: new L("#490056"),
  block2: new L("#490056").offsetHSL(0.03, 0, 0.01),
  block3: new L("#490056").offsetHSL(0.11, 0, 0.03),
  block4: new L("#490056").offsetHSL(0.15, 0, 0.05),
};
let An = null;
function tn() {
  return (
    An ||
    ((An = {
      time: { value: 0 },
      textures: {},
      colors: nt(
        Re(
          {},
          Object.entries(Object.values(ui)[0]).reduce(
            (s, [e, t]) => (
              e.startsWith("_") ||
                (s[e] = { value: t.clone(), needsUpdate: !0 }),
              s
            ),
            {}
          )
        ),
        { ball: { value: new L() }, ballLight: { value: new L() } }
      ),
    }),
    An)
  );
}
const d0 = `#define PHONG
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphatest_pars_fragment>
#include <specularmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <worldpos_pars>
uniform vec3 specular;uniform float shininess;uniform vec3 groundColor;uniform vec3 backgroundColor;void main(){vec4 diffuseColor=vec4(groundColor,1.);vec3 emissive=vec3(0.);
#include <normal_fragment_begin>
float demultDist=smoothstep(0.,0.15,gl_FragCoord.w);float rimLightPower=3.0;float rimLightStrength=0.4;vec3 rimColor=vec3(groundColor)*9.2;float rightLight=rimLightPower*abs(dot(vNormal,normalize(vViewPosition)));rightLight=1.-smoothstep(.0,1.,rightLight);diffuseColor.rgb+=vec3(rightLight*rimLightStrength)*rimColor*demultDist;float specularStrength=1.;ReflectedLight reflectedLight=ReflectedLight(vec3(.0),vec3(.0),vec3(.0),vec3(.0));
#include <lights_phong_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
vec3 color=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+reflectedLight.directSpecular+reflectedLight.indirectSpecular+emissive;float alpha=mix(1.,0.,smoothstep(-1.,-10.,vWorldPos.y));gl_FragColor=vec4(color,alpha);}`;
var f0 = ut(d0, "fragmentShader");
const p0 = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <normal_pars_vertex>
#include <shadowmap_pars_vertex>
#include <worldpos_pars>
void main(){
#include <uv_vertex>
#include <beginnormal_vertex>
#include <defaultnormal_vertex>
#include <normal_vertex>
#include <begin_vertex>
#include <project_vertex>
vViewPosition=-mvPosition.xyz;
#include <worldpos_vertex_bis>
#include <envmap_vertex>
#include <shadowmap_vertex>
}`;
var m0 = ut(p0, "vertexShader");
let Lr = null;
class aa extends gt {
  constructor() {
    super();
    const e = tn(),
      t = (this.uniforms = nt(
        Re({}, $i.merge([Z.common, Z.specularmap, Z.lights])),
        {
          diffuse: { value: new L(16777215) },
          emissive: { value: new L(16777215) },
          specular: { value: new L(4539717) },
          shininess: { value: 30 },
          time: e.time,
          backgroundColor: e.colors.background,
          groundColor: e.colors.ground,
        }
      ));
    (this.defines = Re({}, en())),
      f0.use(this),
      m0.use(this),
      (this.map = t.map.value),
      (this.depthWrite = !1),
      (this.transparent = !0),
      (this.forceOpaque = !0),
      (this.lights = !0),
      (this.fog = !1),
      (this.type = "ShaderMaterial"),
      (this.isShaderMaterial = !0);
  }
}
aa.use = function () {
  return (Lr = Lr || new aa()), Lr;
};
class g0 extends $e {
  init() {
    const e = this.webgl,
      t = e.geometries.borders,
      i = (this.mat = aa.use());
    (this.base = new rt(t, i)),
      (this.base.manualMatrixUpdate = !0),
      (this.base.frustumCulled = !1),
      (this.base.renderOrder = e.stores.renderOrder.borders);
  }
  update() {
    const e = this.scene.gameCam,
      t = this.scene.getCurrentCamera(),
      i = e.timeSinceGame;
    this.mat.depthWrite = e !== t || i < 2e3;
  }
}
const v0 = `#define PHONG
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphatest_pars_fragment>
#include <specularmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <worldpos_pars>
uniform float time;uniform sampler2D noise;uniform vec3 specular;uniform float shininess;uniform float limitInfluence;uniform float wallHeight;uniform vec3 groundColor;uniform vec3 circColor;uniform vec2 circCenter;uniform float circAlpha;uniform float circRadius;void main(){vec4 diffuseColor=vec4(groundColor,1.);vec3 emissive=vec3(0.);vec2 noiseUV=vWorldPos.xz*0.1+vec2(time*-0.1);float n=texture2D(noise,noiseUV).r;emissive-=n*0.22;float borderBleed=1.3;float border=max(max(max(smoothstep(borderBleed,0.,vWorldPos.x),smoothstep(LVL_WIDTH-borderBleed,LVL_WIDTH,vWorldPos.x)),smoothstep(LVL_BOTTOM-borderBleed,LVL_BOTTOM,vWorldPos.z)),smoothstep(LVL_DEPTH+borderBleed,LVL_DEPTH,vWorldPos.z));float invBorder=1.-border;emissive+=border*0.8*(groundColor+0.2);emissive+=smoothstep(0.97,1.,border)*2.*(groundColor+0.2);float sinX=abs(sin(vWorldPos.x*LVL_BLOCK_INV_SCALE*PI));float sinY=abs(sin(vWorldPos.z*LVL_BLOCK_INV_SCALE*PI));float lines=min(smoothstep(0.15,0.04,sinX),smoothstep(0.15,0.04,sinY))+max(smoothstep(0.1,0.,sinX),smoothstep(0.1,0.,sinY))*0.24;vec2 circDist=vWorldPos.xz-circCenter;float r=circRadius;r=r*r;float circE=r*15.;float circ=smoothstep(r-circE,r+circE,dot(circDist,circDist)*4.);circ=smoothstep(0.,1.1,circ*circ)*smoothstep(1.,0.991,circ);circ=circ*smoothstep(-0.1,0.5,lines)*circAlpha;emissive+=lines*1.5*groundColor*invBorder*smoothstep(1.,-2.,vWorldPos.z);emissive=mix(emissive,circColor*1.5,circ);vec3 limitColor=mix(10.5*groundColor+0.5,vec3(1.),limitInfluence);emissive+=smoothstep(0.05,0.,abs(vWorldPos.z+sin(vWorldPos.x*8.+time*-10.)*0.032*limitInfluence*invBorder))*0.8*invBorder*limitColor;emissive+=smoothstep(0.04,0.,abs(vWorldPos.z+cos(vWorldPos.x*4.+time*4.-2.5)*0.05*limitInfluence*invBorder))*0.8*invBorder*limitColor;float invLimit=1.-limitInfluence;float diags=abs(fract((vWorldPos.x+vWorldPos.z)*2.+time)-0.5);vec3 gColor=groundColor*5.+0.2;emissive+=smoothstep(-0.04,0.02,vWorldPos.z)*invLimit*(smoothstep(0.1,0.4,diags)*0.2+smoothstep(0.28,0.3,diags)*0.12)*gColor*max(0.,(1.-vWorldPos.z*1.));emissive+=gColor*smoothstep(0.75,0.,abs(vWorldPos.z))*invLimit*0.35;emissive*=max(0.8,abs(sin(vWorldPos.x*50.+time*40.01)));
#include <normal_fragment_begin>
float specularStrength=1.;ReflectedLight reflectedLight=ReflectedLight(vec3(.0),vec3(.0),vec3(.0),vec3(.0));
#include <lights_phong_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
vec3 color=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+reflectedLight.directSpecular+reflectedLight.indirectSpecular+emissive;gl_FragColor=vec4(color,0.74+emissive);}`;
var _0 = ut(v0, "fragmentShader");
const x0 = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <normal_pars_vertex>
#include <shadowmap_pars_vertex>
#include <worldpos_pars>
void main(){
#include <uv_vertex>
#include <beginnormal_vertex>
#include <defaultnormal_vertex>
#include <normal_vertex>
#include <begin_vertex>
#include <project_vertex>
vViewPosition=-mvPosition.xyz;
#include <worldpos_vertex_bis>
#include <envmap_vertex>
#include <shadowmap_vertex>
}`;
var y0 = ut(x0, "vertexShader");
let Dr = null;
class oa extends gt {
  constructor() {
    super();
    const e = (this.uniforms = nt(
      Re({}, $i.merge([Z.common, Z.specularmap, Z.lights])),
      {
        diffuse: { value: new L(16777215) },
        emissive: { value: new L(16777215) },
        specular: { value: new L(1184274) },
        shininess: { value: 30 },
        limitInfluence: { value: 1 },
        noise: ae.uniforms.textures.noise,
        time: ae.uniforms.time,
        groundColor: ae.uniforms.colors.ground,
        circCenter: { value: new me(), needsUpdate: !1 },
        circColor: { value: new L(), needsUpdate: !1 },
        circRadius: { value: 0, needsUpdate: !1 },
        circAlpha: { value: 0, needsUpdate: !1 },
      }
    ));
    (this.defines = Re({}, ae.defines)),
      _0.use(this),
      y0.use(this),
      (this.map = e.map.value),
      (this.transparent = !0),
      (this.forceOpaque = !0),
      (this.depthTest = !0),
      (this.depthWrite = !1),
      (this.lights = !0),
      (this.fog = !1),
      (this.type = "ShaderMaterial"),
      (this.isShaderMaterial = !0);
  }
}
oa.use = function () {
  return (Dr = Dr || new oa()), Dr;
};
class b0 extends $e {
  init() {
    const e = this.webgl,
      t = e.geometries.ground,
      i = (this.mat = oa.use());
    (this.base = new rt(t, i)),
      (this.base.manualMatrixUpdate = !0),
      (this.base.frustumCulled = !1),
      (this.base.renderOrder = e.stores.renderOrder.ground);
  }
  update() {
    const e = this.webgl.time.dt,
      t = this.mat.uniforms,
      i = this.webgl.game.bonuses.futureproof,
      n = i && i.isActive.value;
    t.limitInfluence.value = yt(t.limitInfluence.value, n ? 0 : 1, 0.1, e);
  }
}
class w0 extends $e {
  init() {
    (this.base = new Ws()), (this.base.manualMatrixUpdate = !1);
    const e = this.webgl.uniforms.colors,
      t = (this.aLight = new Bm(e.lightAmbient, 0.43));
    (t.color = e.lightAmbient.value), this.addObject3D(t);
    const i = (this.dLight = new Um(e.lightDirectional));
    (i.color = e.lightDirectional.value),
      this.addObject3D(i),
      this.addObject3D(i.target),
      (this.dLightPos = new C(3, -2, 2)),
      this.dLight.target.position.copy(this.dLightPos),
      (this.barLight = new Jo(e.lightBar, 1.4, 15, 1.2)),
      (this.barLight.color = e.lightBar.value),
      this.addObject3D(this.barLight);
    const n = this.scene.balls.instances.length;
    this.ballLights = [];
    for (let r = 0; r < n; r++) {
      const a = new Jo(e.ballLight.value, 0, 8, 1.5);
      (a.baseIntensity = 0.8),
        (a.color = e.ballLight.value),
        this.addObject3D(a),
        this.ballLights.push(a),
        (this.scene.balls.instances[r].light = a);
    }
    this.neonInfluence = 0;
  }
  update() {
    if (this.neonInfluence !== this.scene.neonInfluence) {
      const n = (this.neonInfluence = this.scene.neonInfluence);
      (this.aLight.intensity = ke(0.4, 0.2, n)),
        (this.dLight.intensity = ke(1, 0.3, n)),
        (this.barLight.intensity = ke(1.3, 1.6, n));
      for (let r = 0; r < this.ballLights.length; r++) {
        const a = this.ballLights[r];
        (a.baseIntensity = ke(0.8, 1.8, n)),
          (a.distance = ke(8, 12, n)),
          (a.decay = ke(1.5, 1.1, n));
      }
    }
    const e = this.barLight,
      t = this.scene.cloudParticles.mat.uniforms,
      i = e.position;
    t.light1.value.set(i.x, i.y, i.z, e.intensity);
    for (let n = 0; n < this.ballLights.length; n++) {
      const r = this.ballLights[n],
        a = r.position;
      t["light" + (n + 2)].value.set(a.x, a.y, a.z, r.intensity);
    }
  }
}
const S0 = `#define PI 3.14159265359
#include <worldpos_pars>
varying vec2 vUv;uniform float time;uniform sampler2D noise;uniform vec3 color;uniform float limitInfluence;uniform float miniWall;void main(){vec2 noiseUV=vUv*vec2(1.5,3.)*1.+vec2(time*0.04,time*.1);vec2 n=texture2D(noise,noiseUV).gb;float len=0.1+n.g*0.4;
#ifdef IS_MOBILE
float lines=smoothstep(len-1.,len+1.,sin(vWorldPos.y*12.*PI+time*-9.))*1.2;
#else
float lines=smoothstep(len-0.2,len+0.2,sin(vWorldPos.y*12.*PI+time*-9.));
#endif
float height=mix(0.4+0.35*miniWall,0.7,smoothstep(-0.2,0.,vWorldPos.z));lines*=smoothstep(0.1,0.7,n.x-n.g*0.1)*smoothstep(height,1.,vUv.y);lines*=max((1.-limitInfluence)*0.5,-clamp(vWorldPos.z+0.2,-1.,0.));vec3 diffuseColor=color*lines*8.;gl_FragColor=vec4(diffuseColor,1.);}`;
var M0 = ut(S0, "fragmentShader");
const C0 = `#include <common>
#include <uv_pars_vertex>
#include <normal_pars_vertex>
#include <worldpos_pars>
varying vec3 vViewPosition;varying vec2 vUv;void main(){
#include <uv_vertex>
vUv=uv;
#include <beginnormal_vertex>
#include <defaultnormal_vertex>
#include <normal_vertex>
#include <begin_vertex>
#include <project_vertex>
vViewPosition=-mvPosition.xyz;
#include <worldpos_vertex_bis>
}`;
var A0 = ut(C0, "vertexShader");
let Pr = null;
class la extends gt {
  constructor() {
    super(),
      (this.uniforms = {
        noise: ae.uniforms.textures.noise,
        time: ae.uniforms.time,
        color: ae.uniforms.colors.wall,
        limitInfluence: { value: 1 },
        miniWall: { value: 0 },
      }),
      (this.defines = Re({}, ae.defines)),
      M0.use(this),
      A0.use(this),
      (this.blending = Ss),
      (this.depthTest = !0),
      (this.depthWrite = !1),
      (this.type = "ShaderMaterial"),
      (this.isShaderMaterial = !0);
  }
}
la.use = function () {
  return (Pr = Pr || new la()), Pr;
};
class T0 extends $e {
  init() {
    const e = this.webgl,
      t = e.geometries.walls,
      i = (this.mat = la.use());
    (this.base = new rt(t, i)),
      (this.base.manualMatrixUpdate = !0),
      (this.base.frustumCulled = !1),
      (this.base.renderOrder = e.stores.renderOrder.walls);
  }
  update() {
    const e = this.webgl.time.dt,
      t = this.mat.uniforms,
      i = this.webgl.game.bonuses.futureproof,
      n = i && i.isActive.value;
    t.limitInfluence.value = yt(t.limitInfluence.value, n ? 0 : 1, 0.1, e);
    const r = this.webgl.game.bonuses.mods,
      a = r && r.isActive.value;
    t.miniWall.value = yt(t.miniWall.value, a ? 1 : 0, 0.1, e);
  }
}
class E0 {
  constructor(e = {}) {
    (this.isMixin = !0),
      (this.isCreated = !1),
      (this.isDestroyed = !1),
      (this.options = e),
      (this.base = null);
  }
  created() {}
  used() {}
  unused() {}
  destroyed() {}
  componentAttached() {}
  componentDetached() {}
  use(e) {
    if (this.isDestroyed || this.base === e) return;
    this.base = e;
    const t = e.usedMixins;
    (this.uid && e.uid !== this.uid) ||
      ((this.uid = e.uid),
      this.isCreated ||
        ((this.static = this.static != null ? this.static : !this.update),
        (this.isCreated = !0),
        this.created(e, this.options)),
      t.push(this),
      this.static || t.dynamic.push(this),
      this.used(e));
  }
  unuse() {
    if (this.isDestroyed || !this.base) return;
    this.unused(this.base);
    let e;
    (e = this.base.usedMixins.indexOf(this)),
      e < 0 && this.base.usedMixins.splice(e, 1),
      (e = this.base.usedMixins.dynamic.indexOf(this)),
      e < 0 && this.base.usedMixins.dynamic.splice(e, 1),
      (this.base = null);
  }
  destroy() {
    if (this.isDestroyed) return;
    const e = this.base;
    this.unuse(),
      (this.base = e),
      this.destroyed(),
      (this.base = null),
      (this.isDestroyed = !0),
      (this.options = null);
  }
  extendProto(e, t, i) {
    const n = this.base.constructor.prototype;
    (!i && n[e]) || (n[e] = t);
  }
}
const L0 = va();
class D0 extends E0 {
  created() {
    (this.base.shakeState = {
      shaking: !1,
      maxDuration: 0,
      maxAmplitude: 0,
      currentDuration: 0,
      currentAmplitude: 0,
      freqMult: 1,
      value: [0, 0],
      pos: [0, 0],
      speed: [0.006, 1e-4],
    }),
      (this.base.shake = R0.bind(this.base)),
      (this.base.updateShake = P0.bind(this.base));
  }
}
function P0() {
  const s = this.shakeState;
  if (!s.shaking) return;
  const e = this.webgl.time.dt,
    t = 1 - s.currentDuration / s.maxDuration;
  let i = ke(s.speed[0], s.speed[1], t);
  (i *= s.freqMult),
    (s.currentAmplitude = ke(s.maxAmplitude, 0, t)),
    (s.pos[0] += e * i),
    (s.pos[1] += e * i),
    (s.value[0] = Math.cos(s.pos[0] * 9) * s.currentAmplitude * 0.6),
    (s.value[1] = L0(10, s.pos[1]) * s.currentAmplitude);
  const n = s.value[0] * 0.9,
    r = s.value[1] * 0.3,
    a = s.vertical ? r : n,
    o = s.vertical ? n : r;
  this.base.translateY(o),
    this.base.translateX(a),
    this.base.rotateZ(o * 0.5),
    this.base.rotateY(a * 0.5),
    (s.currentDuration = Math.max(0, s.currentDuration - e)),
    s.currentDuration === 0 &&
      ((s.maxAmplitude = 0), (s.maxDuration = 0), (s.shaking = !1));
}
function R0(s = 500, e = 0.1, t = !1, i = !1, n = 1) {
  const r = this.shakeState;
  (e *= 1.07),
    (r.vertical = t),
    (i || !r.shaking || s > r.maxDuration) &&
      ((r.maxDuration = s), (r.currentDuration = s)),
    (i || !r.shaking || e > r.maxAmplitude) &&
      ((r.maxAmplitude = e), (r.currentAmplitude = e), (r.freqMult = n)),
    (s || e) && (r.shaking = !0),
    (r.pos[0] = Math.PI * 200),
    (r.pos[1] = Math.random() * 500);
}
function I0(s) {
  let e = !1,
    t = 0,
    i = 0;
  return function (r) {
    if (e) {
      if (t === r) return i;
      t = r;
    } else e = !0;
    const a = s[0],
      o = s[s.length - 1];
    if (r <= a[0]) return (i = a[1]);
    if (r >= o[0]) return (i = o[1]);
    for (let l = 0; l < s.length; l++) {
      const c = s[l],
        h = s[l + 1];
      if (r >= c[0] && r < h[0]) return (i = Cl(r, c[0], h[0], c[1], h[1]));
    }
  };
}
const dc = [
  {
    duration: 5e3,
    from: {
      position: [-3.827882, 10.059643, 13.179963],
      quaternion: [-0.240124, -0.2270344, -0.05787034, 0.94204398],
    },
    to: {
      position: [1.390581, 5.294452, 5.220263],
      quaternion: [-0.21292262, -0.12663625, -0.02784279, 0.96842759],
    },
  },
  {
    duration: 3e3,
    from: {
      position: [10.454986, 8.18812, 3.807646],
      quaternion: [-0.32362828, 0.2913453, 0.10546552, 0.89401324],
    },
    to: {
      position: [13.925287, 5.036362, 3.214144],
      quaternion: [-0.18545322, 0.40444802, 0.08412531, 0.89160071],
    },
  },
  {
    duration: 4500,
    from: {
      position: [1.946045, 1.166398, -0.124759],
      quaternion: [-0.1296108, -0.36759161, -0.05181764, 0.91945222],
    },
    to: {
      position: [7.534658, 1.866132, 1.965836],
      quaternion: [-0.18181872, 0.2340852, 0.0446123, 0.95402087],
    },
  },
  {
    duration: 3e3,
    from: {
      position: [9.948063, 3.221222, 4.426452],
      quaternion: [-0.10880558, 0.21593733, 0.02422125, 0.97002358],
    },
    to: {
      position: [5.191027, 3.756864, 6.583094],
      quaternion: [-0.11146685, 0.00607055, 68092e-8, 0.99374938],
    },
  },
  {
    duration: 5e3,
    from: {
      position: [10.297028, 1.218436, -0.057224],
      quaternion: [-0.14630854, 0.32566537, 0.05108578, 0.9326983],
    },
    to: {
      position: [7.270733, 2.819383, 2.787891],
      quaternion: [-0.16324487, 0.16045617, 0.02691835, 0.97307776],
    },
  },
  {
    duration: 3e3,
    from: {
      position: [-1.485212, 1.988267, -10.796444],
      quaternion: [-0.13233106, -0.79270661, -0.18553006, 0.56540544],
    },
    to: {
      position: [2.252714, 2.134748, -1.324655],
      quaternion: [-0.22960021, -0.23966488, -0.058446, 0.94150335],
    },
  },
  {
    duration: 4e3,
    from: {
      position: [10.454986, 8.18812, 3.807646],
      quaternion: [-0.32362828, 0.2913453, 0.10546552, 0.89401324],
    },
    to: {
      position: [13.925287, 5.036362, 3.214144],
      quaternion: [-0.18545322, 0.40444802, 0.08412531, 0.89160071],
    },
  },
  {
    duration: 5e3,
    from: {
      position: [-1.902398, 5.776139, -14.81119],
      quaternion: [0.12110974, 0.85186801, 0.22586871, -0.45676762],
    },
    to: {
      position: [2.67005, 5.361116, -18.772921],
      quaternion: [0.03268024, 0.96500404, 0.21481993, -0.14680464],
    },
  },
];
dc.forEach(({ from: s, to: e }) => {
  (s.position = new C().fromArray(s.position)),
    (e.position = new C().fromArray(e.position)),
    (s.quaternion = new Xe().fromArray(s.quaternion)),
    (e.quaternion = new Xe().fromArray(e.quaternion));
});
var sl = dc,
  fc = {
    IDLE_A: {
      position: [7.943574, 4.120619, 4.25776],
      quaternion: [-0.21793547, 0.12770271, 0.02877642, 0.96714428],
    },
    IDLE_C: {
      position: [9.274321, 1.953201, -1.990486],
      quaternion: [-0.10731046, 0.16748794, 0.01834291, 0.97984478],
    },
    INTRO_0: {
      position: [9.992096, 3.875504, -4.303084],
      quaternion: [-0.28292051, 0.46429791, 0.15941751, 0.82399605],
    },
    INTRO_1: {
      position: [10.246859, 3.8755, -4.723758],
      quaternion: [-0.28292051, 0.46429791, 0.15941751, 0.82399605],
    },
    INTRO_2: {
      position: [10.416704, 3.8755, -5.004205],
      quaternion: [-0.28292051, 0.46429791, 0.15941751, 0.82399605],
    },
    INTRO_3: {
      position: [10.501627, 3.8755, -5.144429],
      quaternion: [-0.28292051, 0.46429791, 0.15941751, 0.82399605],
    },
    INTRO_4: {
      position: [10.671472, 3.8755, -5.424876],
      quaternion: [-0.28292051, 0.46429791, 0.15941751, 0.82399605],
    },
    INTRO_5: {
      position: [10.841316, 3.8755, -5.705323],
      quaternion: [-0.28292051, 0.46429791, 0.15941751, 0.82399605],
    },
  };
const Rr = new C();
new C();
new C();
new C();
const nl = new Xe(),
  F0 = new ht(),
  z0 = I0([
    [0.5, -0.19],
    [0.6, -0.22],
    [0.8, -0.28],
    [1, -0.37],
    [1.2, -0.42],
    [1.4, -0.45],
    [1.6, -0.47],
  ]);
Object.values(fc).forEach((s) => {
  !s ||
    ((s.position = new C().fromArray(s.position)),
    (s.quaternion = new Xe().fromArray(s.quaternion)));
});
class U0 extends uc {
  get mixins() {
    return [D0];
  }
  init() {
    (this.base = this.cam = new wt(40, 1, 0.1, 600)),
      (this.gamePos = new C()),
      (this.gameQt = new Xe()),
      (this.basePos = new C()),
      (this.baseQt = new Xe()),
      (this.camTarget = null),
      (this.camTargetPos = new C()),
      (this.camTargetQt = new Xe()),
      (this.lastWasIdle = !1),
      (this.idleShot = 0),
      (this.idleShotTime = 0),
      (this.idleInfluence = 0),
      (this.idleShotSinceReset = 0),
      (this.mouseInfluence = 0),
      (this.mx = 0),
      (this.my = 0),
      (this.dx = 0),
      (this.isFirstIdle = !0),
      (this.timeSinceGame = 0),
      (this.followBarMult = 0),
      (this.offsetX = 0),
      (this.offsetY = 0),
      (this.rotZ = 0);
  }
  resize(e) {
    const t = this.webgl.stores,
      i = this.gamePos,
      n = this.gameQt,
      r = Rr.setScalar(0);
    let a = e.x / e.y;
    const o = t.levelWidth * 0.5,
      l = t.levelDepth * 0.85,
      c = ct(a, 0.5, 1.5);
    (this.desktopInfluence = c),
      (this.cam.fov = ke(55, 40, c)),
      (i.x = o),
      (i.y = ke(-1.42, -0.5, c) * l),
      (i.z = z0(a) * l),
      (r.x = ke(-0.35, -0.17, c) * Math.PI),
      n.setFromEuler(F0.set(r.x, 0, 0)),
      super.resize(e);
  }
  setTarget(e) {
    const t = fc[e];
    (this.camTarget = t),
      t &&
        (this.camTargetPos.copy(t.position),
        this.camTargetQt.copy(t.quaternion));
  }
  updateIdle() {
    this.lastWasIdle ||
      ((this.idleInfluence = this.isFirstIdle ? 1 : 0),
      (this.idleShotSinceReset = 0),
      (this.idleShot = this.idleShotTime = 0),
      (this.isFirstIdle = !1),
      (this.lastWasIdle = !0));
    const e = this.webgl.time.dt,
      t = sl[this.idleShot],
      i = ct(this.idleShotTime / t.duration);
    (this.idleInfluence = yt(this.idleInfluence, 1, 0.01, e)),
      Rr.lerpVectors(t.from.position, t.to.position, i),
      nl.slerpQuaternions(t.from.quaternion, t.to.quaternion, i),
      this.basePos.lerp(Rr, this.idleInfluence),
      this.baseQt.slerp(nl, this.idleInfluence),
      i >= 1 ? this.switchIdleCamShot() : (this.idleShotTime += e);
  }
  switchIdleCamShot() {
    this.idleShotSinceReset++,
      (this.idleShotTime = 0),
      (this.idleShot = (this.idleShot + 1) % sl.length),
      this.idleShotSinceReset >= 3 &&
        (this.webgl.game.setState("AUTOPLAY", { instant: !0 }, !0),
        (this.idleShotSinceReset = 0));
  }
  update() {
    const e = this.webgl.isJustAfterStart,
      t = this.webgl.time.dt,
      i = this.webgl,
      n = this.base.position;
    let r = this.gamePos,
      a = this.gameQt;
    (this.timeSinceGame += t),
      this.camTarget &&
        ((r = this.camTargetPos),
        (a = this.camTargetQt),
        (this.timeSinceGame = 0)),
      this.basePos.lerp(r, e ? 1 : 0.1),
      this.baseQt.slerp(a, e ? 1 : 0.1),
      i.stores.isAutoplay.value
        ? ((this.timeSinceGame = 0), this.updateIdle())
        : (this.lastWasIdle = !1),
      this.base.position.copy(this.basePos),
      this.base.quaternion.copy(this.baseQt),
      this.updateShake();
    const o = i.app.$controls.touch.normalizePos,
      l = this.scene.controlTarget,
      c = this.scene.bar,
      h = l.useMouse,
      d = this.camTarget ? 0 : 1;
    this.followBarMult = yt(this.followBarMult, d, 0.04, t);
    const u = i.stores.levelWidth,
      m = c.base.position.x;
    let g = this.followBarMult;
    l.useMouse
      ? (g *= Kt(l.position.x, 0, u, -1, 1))
      : l.useKeyboard
      ? (g *= Kt(m, 0, u, -1.2, 1.2))
      : l.useTouch && (g *= Kt(m, 1, u - 1, -1, 1)),
      (this.rotZ = yt(this.rotZ, g * -0.05, 0.04, t)),
      this.base.rotateZ(-this.rotZ * 0.3),
      this.base.rotateY(this.rotZ);
    const p = l.useTouch ? 0.14 : 0.07;
    (this.offsetX = yt(this.offsetX, g * 0.6, p, t)),
      this.base.translateX(this.offsetX);
    const f =
        this.followBarMult *
        (h
          ? i.app.$controls.touch.normalizePos.y * 0.55
          : Cl(c.base.position.z, -1, -3, -0.25, 0.4)),
      v = l.useTouch ? 0.08 : 0.05;
    (this.offsetY = yt(this.offsetY, f, v, t)), (n.z -= this.offsetY);
    const w = this.camTarget || i.stores.isAutoplay.value ? 1 : 0;
    this.mouseInfluence = _s(this.mouseInfluence, w, 0.1, t, 0.01);
    const S = h ? o.x * this.mouseInfluence : 0,
      x = h ? o.y * this.mouseInfluence : 0;
    let A = this.mx;
    (this.mx = _s(this.mx, S * 0.4, 0.08, t, 0.01)),
      (this.my = _s(this.my, x * 0.2, 0.08, t, 0.01)),
      this.mx !== 0 &&
        this.my !== 0 &&
        (this.base.translateX(this.mx),
        this.base.rotateY(this.mx * 0.1),
        this.base.rotateX(this.my * -0.1),
        this.base.translateY(this.my),
        (this.dx = yt(this.dx, (this.mx - A) * 0.8, 0.1, t)),
        this.base.rotateZ(this.dx));
  }
}
const rl = 48,
  Tn = function () {};
class B0 {
  constructor({
    atlas: e,
    id: t,
    group: i,
    sequence: n,
    loop: r,
    autoplay: a,
    frame: o,
    onUpdate: l,
    onEnd: c,
    onEndOnce: h,
    frameDuration: d,
    category: u,
  }) {
    (this.frames = []),
      (this.onUpdate = l || Tn),
      (this.onEndOnce = h || Tn),
      (this.onEnd = c || Tn),
      (this.id = t !== void 0 ? t : i + "/" + n),
      (this.group = ""),
      (this.sequence = ""),
      (this.loop = !!r),
      (this.autoplay = !!a),
      (this.frame = o || 0),
      (this.frameCount = 0),
      (this.frameDuration = d || rl),
      (this.frameTimer = Math.random() * 60),
      (this.currentFrameIndex = 0),
      (this.paused = !1),
      (this.ended = !1),
      (this.category = u || "atlas"),
      (this.atlas = e),
      e &&
        (this.setAtlas(e),
        this.change({
          id: this.id,
          frameDuration: this.frameDuration,
          autoplay: this.autoplay,
          loop: this.loop,
          frame: this.frame,
        }));
  }
  setAtlas(e) {
    !e || (this.sprites = e.sprites || e);
  }
  change({
    id: e = "circle",
    group: t,
    sequence: i,
    frame: n,
    frameDuration: r,
    autoplay: a,
    loop: o,
  }) {
    if (!!this.sprites[e]) {
      if (e !== void 0) {
        this.id = e;
        const l = this.id.split("/");
        (this.sequence = l.pop()), (this.group = l.join("/"));
      } else
        i !== void 0 &&
          (t !== void 0 && (this.group = t),
          (this.sequence = i),
          (this.id = this.group + "/" + this.sequence));
      (this.frames = this.sprites[this.id]),
        (this.frameCount = this.frames.length),
        (this.currentFrameIndex = Math.min(n || 0, this.frameCount - 1)),
        (this.frame = this.frames[this.currentFrameIndex]),
        (this.loop = !!o),
        (this.autoplay = !!a),
        (this.frameDuration = r || rl),
        (this.paused = !this.autoplay),
        this.frameCount < 2 ? this.end() : (this.ended = !1),
        this.onUpdate(this.frame);
    }
  }
  end() {
    (this.ended = !0),
      this.onEndOnce(this.frame),
      (this.onEndOnce = Tn),
      this.onEnd(this.frame);
  }
  play() {
    (this.paused = !1), (this.isBackwards = !1), (this.ended = !1);
  }
  playBackwards() {
    (this.paused = !1), (this.isBackwards = !0), (this.ended = !1);
  }
  reset() {
    (this.ended = !1), (this.paused = !1), (this.currentFrameIndex = 0);
  }
  resetFrame() {
    (this.currentFrameIndex = 0),
      (this.frame = this.frames[this.currentFrameIndex]);
  }
  pause() {
    this.paused = !0;
  }
  nextFrame() {
    let e = this.currentFrameIndex + 1;
    if (e >= this.frameCount)
      if (this.loop) e = 0;
      else {
        this.end();
        return;
      }
    e !== this.currentFrameIndex &&
      ((this.currentFrameIndex = e),
      (this.frame = this.frames[this.currentFrameIndex]),
      !this.loop && e + 1 >= this.frameCount && this.end());
  }
  previousFrame() {
    let e = this.currentFrameIndex - 1;
    if (e < 0)
      if (this.loop) e = this.frameCount;
      else {
        this.end();
        return;
      }
    e !== this.currentFrameIndex &&
      ((this.currentFrameIndex = e),
      (this.frame = this.frames[this.currentFrameIndex]),
      !this.loop && e - 1 < 0 && this.end());
  }
  update(e) {
    this.ended ||
      this.paused ||
      (this.frameTimer <= 0 &&
        ((this.frameTimer = Math.max(0, this.frameDuration + this.frameTimer)),
        this.isBackwards ? this.previousFrame() : this.nextFrame()),
      (this.frameTimer -= e));
  }
  destroy() {
    this.sprites = this.frames = this.frame = this.onUpdate = null;
  }
}
const N0 = "string",
  k0 = new He();
let En;
class Tt {
  constructor(e) {
    En || (En = Qs()),
      (this.isComponent = !0),
      e.batcher &&
        ((this.batcher =
          typeof e.batcher === N0
            ? En.particles.batchers[e.batcher]
            : e.batcher),
        (e.atlas = this.batcher.atlas),
        (e.batcher = null)),
      (this.dummy = k0),
      (this.position = new C()),
      (this.scale = new me(1, 1)),
      (this.quaternion = new Xe()),
      (this.color = new L(16777215)),
      e.rotation
        ? ((this.useEuler = !0),
          (this.rotation = new ht()),
          this.rotation.copy(e.rotation))
        : e.useEuler && ((this.useEuler = !0), (this.rotation = new ht())),
      (this.alpha = e.alpha != null ? e.alpha : 1),
      (this.initialAlpha = this.alpha),
      (this.visible = !0),
      (this.parent = e.parent || null),
      (this.fx = e.fx || 0),
      (this.billboard = !!e.billboard),
      (this.angle = e.angle || 0),
      e.position && this.position.copy(e.position),
      e.color != null &&
        (typeof e.color == "number"
          ? this.color.set(e.color)
          : this.color.copy(e.color)),
      e.scale &&
        (typeof e.scale == "number"
          ? this.scale.setScalar(e.scale)
          : this.scale.copy(e.scale)),
      e.quaternion && this.quaternion.copy(e.quaternion),
      (this.sprite = new B0(nt(Re({}, e), { id: e.sprite || e.id }))),
      this.batcher && this.batcher.addInstance(this),
      this.init(e),
      this.sprite.update(1);
  }
  init() {}
  update() {
    const e = En.time.stableDt;
    this.sprite.update(e);
  }
  destroy() {
    this.batcher && this.batcher.removeInstance(this),
      this.parentComponent && this.parentComponent.removeComponent(this),
      this.sprite.destroy(),
      (this.sprite = this.batcher = null),
      (this.props = null);
  }
}
new me();
const Ir = new C(),
  al = new km();
class O0 extends $e {
  init() {
    (this.plane = new wi(new C(0, 1, 0))),
      (this.size = 0.625),
      (this.sprite = new Tt({
        batcher: "sdfEmissive",
        sprite: "control_target",
        scale: 0.625 * 8,
        alpha: 0,
        rotation: new ht(Math.PI * -0.5, 0, 0),
      })),
      (this.isActive = !1),
      (this.useMouse = this.useKeyboard = this.useTouch = !1),
      (this.position = new C(this.webgl.stores.levelCenter, 0, 0)),
      this.sprite.position.copy(this.position),
      (this.alpha = 0),
      (this.lastPointerPos = new me(-1e3, -1e3)),
      (this.useKeyboard = !1),
      (this.keyboardDir = 0);
  }
  selectInput() {
    const e = this.webgl.controls.touch,
      t = this.webgl.controls.keyboard,
      i = t.keys.KeyA || t.keys.ArrowLeft,
      n = t.keys.KeyD || t.keys.ArrowRight,
      r = t.pressedCount > 0,
      a = this.webgl.game.canMove;
    if (
      ((this.keyboardDir = (i ? -1 : 0) + (n ? 1 : 0)),
      a &&
        r &&
        ((this.useMouse = !1), (this.useTouch = !1), (this.useKeyboard = !0)),
      a &&
        e.pressed &&
        e.useTouch &&
        ((this.useMouse = !1), (this.useTouch = !0), (this.useKeyboard = !1)),
      !r && !e.useTouch)
    ) {
      const o = e.pressed,
        l = !this.lastPointerPos.equals(e.normalizePos);
      (o || l) &&
        ((this.useMouse = !0), (this.useTouch = !1), (this.useKeyboard = !1));
    }
    this.lastPointerPos.copy(e.normalizePos);
  }
  clampPosition() {
    const e = this.position,
      i = this.webgl.scene.bar.size;
    (e.x = Jt(e.x, i, this.webgl.stores.levelWidth - i)),
      (e.z = Jt(e.z, -5 + this.size, 0.8));
  }
  update() {
    const e = this.webgl.time.dt,
      t = this.webgl.controls.touch,
      i = this.webgl.controls.keyboard,
      n = this.webgl.game.canMove,
      r = this.useKeyboard;
    if (
      (this.selectInput(),
      n &&
        !r &&
        this.useKeyboard &&
        (this.position.x = this.scene.bar.base.position.x),
      this.useMouse || this.useTouch
        ? (this.isActive = t.pressed)
        : this.useKeyboard
        ? (this.isActive = i.pressedCount > 0)
        : (this.isActive = !1),
      (this.useSmash = !1),
      this.webgl.game.canMove || (this.isActive = !1),
      this.useMouse || (this.useTouch && this.isActive))
    ) {
      const a = this.scene.getCurrentCamera(),
        o = t.normalizePos;
      al.setFromCamera(o, a.cam),
        al.ray.intersectPlane(this.plane, Ir),
        (this.position.x = Ir.x),
        (this.position.z = Ir.z),
        this.clampPosition();
    } else
      this.useKeyboard &&
        this.isActive &&
        ((this.position.x += this.keyboardDir * e * 0.012),
        (this.useSmash = i.keys.ArrowUp || i.keys.KeyW || i.keys.Space),
        (this.position.z = this.useSmash ? -1 : 0),
        this.clampPosition(),
        (this.sprite.position.x = this.position.x));
    this.webgl.game.canMove
      ? this.useMouse
        ? (this.alpha = this.isActive ? 0.5 : 0.1)
        : this.useTouch
        ? (this.alpha = this.isActive ? 0.5 : 0)
        : this.useKeyboard && (this.alpha = this.sprite.alpha = 0)
      : (this.alpha = 0),
      (this.sprite.alpha = yt(this.sprite.alpha, this.alpha, 0.1, e)),
      (this.sprite.rotation.z += e * -0.001),
      this.sprite.position.lerp(this.position, 1),
      this.sprite.color.copy(this.webgl.uniforms.colors.light.value);
  }
}
const G0 = `#define PHONG
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphatest_pars_fragment>
#include <specularmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <worldpos_pars>
uniform vec3 specular;uniform float shininess;uniform vec3 belowColor;uniform vec3 wallColor;varying float vType;varying float vAlpha;varying vec3 vPos;uniform vec3 colorBlockUnbreakable;uniform vec3 colorBlock1;uniform vec3 colorBlock2;uniform vec3 colorBlock3;uniform vec3 colorBlock4;uniform vec3 colorBlockBonus;void main(){vec3 blockColor=vec3(0.);if(vType<1.5){blockColor=colorBlockUnbreakable;}else if(vType<2.5){blockColor=colorBlock1;}else if(vType<3.5){blockColor=colorBlock2;}else if(vType<4.5){blockColor=colorBlock3;}else if(vType<5.5){blockColor=colorBlock4;}else if(vType>4.5){blockColor=colorBlockBonus;}float isUnbreakable=step(vType,1.5);float belowMult=step(0.,vWorldPos.y);float belowInv=1.-belowMult*2.;vec4 diffuseColor=vec4(blockColor,1.);vec3 emissive=vec3(0.);float pattern=smoothstep(0.23,0.27,abs(fract((vPos.x*belowInv+vPos.y+vPos.z*belowInv)*0.5)-0.5))*0.55;pattern+=smoothstep(0.23,0.27,abs(fract((+vPos.x*belowInv-vPos.y-vPos.z*belowInv)*0.5)-0.5))*0.55;diffuseColor+=mix(0.,0.01+pattern*0.051,isUnbreakable);float specularStrength=mix(0.8,0.5+pattern,isUnbreakable);diffuseColor.xyz=mix(mix(belowColor*0.8,diffuseColor.xyz*0.8,0.7),diffuseColor.xyz,smoothstep(-0.5,0.12,vPos.y*-belowInv));vec3 normal=normalize(vNormal);float patterna=(step(abs(vPos.x),abs(vPos.y))*vPos.x*0.4)*0.7;normal.x-=patterna*isUnbreakable;float demultDist=1.;float rimLightPower=mix(1.5,1.05,isUnbreakable);float rimLightStrength=mix(0.1,0.2,isUnbreakable)*0.8;vec3 rimColor=belowColor*8.2;float rightLight=rimLightPower*abs(dot(vNormal,normalize(vViewPosition)));rightLight=1.-smoothstep(.0,1.,rightLight);diffuseColor.rgb+=vec3(rightLight*rimLightStrength)*rimColor*demultDist;ReflectedLight reflectedLight=ReflectedLight(vec3(.0),vec3(.0),vec3(.0),vec3(.0));
#include <lights_phong_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
vec3 color=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+reflectedLight.directSpecular*(0.2+belowMult*0.8)+reflectedLight.indirectSpecular+emissive;color+=pattern*0.04*isUnbreakable;color*=1.1;float border=1.5;float add=max(max(smoothstep(LVL_WIDTH-border*0.5,LVL_WIDTH+0.8,vWorldPos.x),smoothstep(border*0.5,-0.8,vWorldPos.x)),smoothstep(LVL_DEPTH+0.9,LVL_DEPTH-0.4,vWorldPos.z))*0.6;color+=(belowColor*0.4+wallColor*5.)*add*smoothstep(2.2,0.,vWorldPos.y);color=mix(colorBlock1*10.,color,vAlpha);color=mix(color*2.,color,belowMult);color=mix(color,belowColor,smoothstep(0.5,-1.2,vWorldPos.y));gl_FragColor=vec4(color,1.);}`;
var V0 = ut(G0, "fragmentShader");
const H0 = `precision lowp float;
#define PHONG
#include <common>
#include <uv_pars_vertex>
#include <normal_pars_vertex>
#include <worldpos_pars>
uniform float blockScale;uniform float yMult;attribute vec3 translation;attribute float scale;attribute float type;attribute float alpha;varying vec3 vViewPosition;varying float vType;varying vec3 vPos;varying float vAlpha;void main(){
#include <uv_vertex>
#include <beginnormal_vertex>
#include <defaultnormal_vertex>
#include <normal_vertex>
#include <begin_vertex>
float a=smoothstep(0.12,1.,alpha);transformed*=blockScale;transformed.xz*=a;transformed.y*=(1.+(1.-a)*-0.2)*smoothstep(0.,0.7,alpha);transformed.xyz+=translation.xyz;transformed.y+=(1.-a)*yMult*sign(translation.y);
#include <project_vertex>
vViewPosition=-mvPosition.xyz;vType=type;vPos=position;vAlpha=a;
#include <worldpos_vertex_bis>
}`;
var W0 = ut(H0, "vertexShader");
let Fr = null;
class ca extends gt {
  constructor() {
    super();
    const e = tn(),
      t = (this.uniforms = nt(
        Re({}, $i.merge([Z.common, Z.specularmap, Z.lights])),
        {
          diffuse: { value: new L(16777215) },
          emissive: { value: new L(16777215) },
          specular: { value: new L(4210752) },
          shininess: { value: 30 },
          time: e.time,
          blockScale: { value: 1 },
          yMult: { value: 1.5 },
          colorBlockUnbreakable: e.colors.blockUnbreakable,
          colorBlockBonus: e.colors.blockBonus,
          colorBlock1: e.colors.block1,
          colorBlock2: e.colors.block2,
          colorBlock3: e.colors.block3,
          colorBlock4: e.colors.block4,
          belowColor: e.colors.inside,
          wallColor: e.colors.wall,
        }
      ));
    (this.defines = Re({}, en())),
      V0.use(this),
      W0.use(this),
      (this.map = t.map.value),
      (this.lights = !0),
      (this.fog = !1),
      (this.type = "ShaderMaterial"),
      (this.isShaderMaterial = !0);
  }
  show() {
    this.uniforms.yMult.value = 2.1;
  }
  hide() {
    this.uniforms.yMult.value = -3.5;
  }
}
ca.use = function () {
  return (Fr = Fr || new ca()), Fr;
};
const Bn = 13,
  pc = 11,
  qs = 4,
  q0 = { 1: 5, 2: 1, 3: 2, 4: 3, 5: 4 },
  zr = 1 + 8 + Bn * pc * qs;
class X0 {
  constructor({ type: e, row: t, height: i, column: n, neighbors: r }) {
    (this.neighbors = r),
      (this.type = e),
      (this.row = t),
      (this.height = i),
      (this.column = n),
      e === 1 && (this.isUnbreakable = !0),
      e > 1 && (this.breakable = !0);
  }
}
class j0 {
  constructor(e) {
    (this.blocks = []),
      (this.rawData = e),
      (this.isUnpacked = !1),
      (this.difficulty = Math.min(5, Math.max(0, this.rawData[0]))),
      (this.name = "");
    for (let t = 0; t < 8; t++) {
      const i = this.rawData[1 + t];
      if (i === 0) break;
      this.name += String.fromCharCode(i);
    }
  }
  unpack() {
    const e = [];
    if (!this.isUnpacked) {
      this.isUnpacked = !0;
      for (let t = pc - 1; t >= 0; t--)
        for (let i = Bn - 1; i >= 0; i--) {
          e.length = 0;
          for (let n = qs - 1; n >= 0; n--) {
            const r = t * Bn * qs + i * qs + n,
              a = this.rawData[r + 9];
            if (!a) continue;
            const o = new X0({
              type: a,
              row: i,
              height: n,
              column: t,
              neighbors: [...e],
            });
            e.push(o), this.blocks.push(o);
          }
        }
    }
  }
}
function $0(s) {
  return function (e) {
    const t = (s.levels = {}),
      i = (s.levelDifficulties = [[], [], [], []]),
      n = Math.floor(e.byteLength / zr);
    for (let r = 0; r < n; r++) {
      const a = new j0(new Uint8Array(e, zr * r, zr)),
        o = a.difficulty - 1;
      o >= 0 && i[o].push(a), (t[a.name] = a);
    }
  };
}
const ol = { autostart: !0, selfdestruct: !1, standalone: !1 };
function Y0() {
  const s = [];
  return { wait: e, create: t, clear: i, update: n };
  function e(r) {
    return t(r);
  }
  function t(r, a) {
    if (a) {
      const o = Pa(r, a, ol);
      return s.push(o), o;
    } else
      return new Promise((o) => {
        const l = Pa(r, o, ol);
        s.push(l);
      });
  }
  function i() {
    for (let r = 0, a = s.length; r < a; r++) {
      const o = s[r];
      o && o.dispose();
    }
    s.length = 0;
  }
  function n() {
    const r = ae.time.dt;
    let a = s.length;
    for (; a--; )
      s[a].update(r), s[a]._stopped && (s[a].dispose(), s.splice(a, 1));
  }
}
const Z0 = Ke([0.27, 0.01, 0, 1.005]),
  K0 = 0.0015,
  J0 = Ke([0.46, 0.045, 0.16, 0.955]),
  Q0 = 0.0012,
  eg = new C();
let Ve,
  Ur = 0,
  ll = 0;
class tg {
  constructor({ data: e, parent: t }) {
    Ve || (Ve = Qs()),
      (this._lastUsedIndex = this._lastSentScale = this._lastSentType = -1),
      (this._lastSentPos = new C().setScalar(-1e3)),
      (this._lastSentColor = new L()),
      (this.timers = Y0()),
      (Ur = (Ur + 1) | 0),
      (this.uid = Ur),
      (this.parent = t),
      (this.data = e),
      (this.colorType = "block1"),
      this.data.type === 3
        ? (this.colorType = "block2")
        : this.data.type === 4
        ? (this.colorType = "block3")
        : this.data.type === 5 && (this.colorType = "block4"),
      (this.type = 0),
      (this.position = new C()),
      (this.destroyed = !1),
      (this.visible = !0),
      (this.data.currentInstance = this),
      (this.isUnbreakable = e.isUnbreakable),
      (this.neighbors = e.neighbors);
    const i = Ve.stores.levelBlockScale,
      n = i * 0.5;
    (this.scale = i),
      (this.height = e.height),
      (this.position.x = e.row * i + n),
      (this.position.z = Ve.stores.levelDepth + (0 + e.column) * i + n),
      (this.position.y = this.height * i + n),
      (this.fallVelocity = 0),
      (this.ground = this.position.y),
      (this.alpha = 0),
      (this.showProgress = 0),
      (this.showDelay =
        this.data.row * 30 + this.data.column * 10 + this.data.height * 100),
      (this.hiding = !1),
      (this.hideProgress = 0),
      (this.hideDelay = this.data.row * 15 + (qs - this.data.height) * 50),
      this.data.isUnbreakable || this.parent.breakableInstances.add(this.uid),
      this.initBody();
  }
  initBody() {
    this.body ||
      this.position.y > 0.65 * this.scale ||
      ((this.body = Ve.physics.createComponent("Block", {
        position: [this.position.x, this.position.z],
        coords: [this.data.row, this.data.column],
        isUnbreakable: this.isUnbreakable,
      })),
      (this.body.onCollision = this.onCollision.bind(this)));
  }
  async levelDown(e) {
    await this.timers.wait(e ? 60 : 30),
      this.tellNeighborToFall(),
      (this.height -= 1),
      (this.ground = this.height * this.scale + this.scale * 0.5);
  }
  async tellNeighborToFall(e) {
    if (this.destroyed) return;
    const t = this.neighbors.length - 1,
      i = this.neighbors[t] && this.neighbors[t].currentInstance;
    !i || i.height <= this.height || i.levelDown(e);
  }
  onCollision(e) {
    const t = e === -1,
      i = Ve.game.bonuses.prebuilt,
      n = !t && i && i.isActive.value,
      a = Ve.stores.isAutoplay.value ? 0.35 : 1;
    if (this.isUnbreakable && !n && !t) {
      this.isProjectile ||
        Ve.playSound("sfx_ball_Impact_cubeHard", { throttle: 100, volume: a });
      return;
    }
    const o = !t && this.parent.scene.balls.instances[e],
      l = t ? 0.5 : o.body.normAddVel;
    !this.isUnbreakable &&
    this.parent.breakableInstances.size === 1 &&
    !this.parent.isLevelCleared
      ? (Ve.playSound("sfx_ball_Impact_cubeLast", { throttle: 80, volume: a }),
        Ve.scene.groundCircle(
          this.position.x,
          this.position.z,
          "groundMinor",
          900
        ),
        n && Ve.playSound("sfx_powerup_Fire_Impact", { throttle: 80 }))
      : (Ve.playSound("sfx_ball_Impact_cubeBreak", { throttle: 80, volume: a }),
        n && Ve.playSound("sfx_powerup_Fire_Impact", { throttle: 80 })),
      this.parent.scene.gameCam.shake(
        ke(350, 520, l),
        ke(0.014, 0.038, l),
        !0,
        !0,
        ke(1, 0.9, l)
      ),
      Ve.game.addPointsFromBrokenBlock(this.data),
      this.emitBrokenParticles(t),
      this.tellNeighborToFall(!0),
      Ve.game.bonuses.drop(this.position.x, this.position.z),
      (Ve.game.bonuses.blocksDestroyedSinceDrop += 1),
      this.destroy();
  }
  emitBrokenParticles(e) {
    const t = eg.copy(this.position),
      i = performance.now(),
      r = i - ll > 650,
      a = Ve.quality.current.value < 2;
    ll = i;
    let o = this.colorType,
      l = 1,
      c;
    e
      ? ((o = "power"), (l = -1), (c = 0.7))
      : Ve.game.bonuses.prebuilt &&
        Ve.game.bonuses.prebuilt.isActive.value &&
        ((o = "ball"), (c = 0.8), (l = 0.04)),
      Ve.particles.emit("flash", {
        position: t,
        scale: r ? 12 : 10,
        duration: r ? 1e3 : 500,
        alpha: r ? 1 : 0.7,
      });
    const h = Ve.quality.current.value >= 5,
      d = Ve.quality.fpsAverage.value > 57,
      u = h && d ? 1 : 0.5;
    a ||
      Ve.particles.emit("blockSmoke", {
        position: t,
        commonColor: o,
        scale: 1 * c,
        brightness: 0.2 * l,
        minAmount: 6 * u,
        maxAmount: 10 * u,
      }),
      h &&
        d &&
        Ve.particles.emit("blockExplode", {
          position: t,
          commonColor: o,
          brightness: 0.3 * l,
          largeAmount: r,
        }),
      Ve.particles.emit("blockWave", {
        position: t,
        commonColor: o,
        brightness: 0.3 * l,
        largeAmount: r,
      }),
      a ||
        Ve.particles.emit("impact", {
          position: t,
          maxDistance: fe.randomFloat(0.25, 0.8),
          minScale: 0.85,
          maxScale: 1.8,
          minAmount: (r ? 8 : 4) * u,
          maxAmount: (r ? 14 : 8) * u,
          minDuration: 1100,
          maxDuration: 1800,
          commonColor: o,
          yOffset: 0,
          minVelY: 0.06,
          maxVelY: 0.14,
          brightness: 0.3 * l,
          brightnessOffsetMax: 0.1,
        });
  }
  update() {
    if (this.destroyed) return;
    const e = Ve.time.dt;
    this.timers.update(e),
      this.initBody(),
      (this.fallVelocity = Math.max(this.fallVelocity - 6e-4 * e, -0.2)),
      (this.position.y += this.fallVelocity),
      this.position.y <= this.ground &&
        ((this.position.y = this.ground),
        this.fallVelocity < 0 &&
          (this.fallVelocity =
            Math.min(0, this.fallVelocity + 0.002 * e) * -0.9)),
      this.showProgress < 1
        ? (this.showDelay > 0
            ? (this.showDelay -= e)
            : (this.showProgress = Math.min(1, this.showProgress + K0 * e)),
          !this.hiding &&
            this.showProgress >= 1 &&
            this.parent.visibleInstances.add(this.uid))
        : this.hiding &&
          this.hideProgress < 1 &&
          (this.hideDelay > 0
            ? (this.hideDelay -= e)
            : (this.hideProgress = Math.min(1, this.hideProgress + Q0 * e))),
      (this.alpha = Z0(this.showProgress) * (1 - J0(this.hideProgress))),
      this.hiding &&
        this.alpha <= 0 &&
        (this.parent.hiddenInstances.add(this.uid), this.destroy());
  }
  hide() {
    (this.hiding = !0),
      (this.hideDelay =
        this.data.row * 15 + (this.parent.maxHeight - this.data.height) * 50);
  }
  destroy() {
    this.destroyed ||
      (this.data.currentInstance === this &&
        (this.data.currentInstancet = null),
      this.body && this.body.destroy(),
      this.timers.clear(),
      (this.data = null),
      (this.body = null),
      (this.destroyed = !0),
      (this.visible = !1),
      this.parent.instances.delete(this),
      this.parent.visibleInstances.delete(this.uid),
      this.parent.breakableInstances.delete(this.uid));
  }
}
class ig extends $e {
  init() {
    const e = this.webgl;
    (e.blocks = this), (this.maxCount = 11 * 11 * 4 * 2);
    const t = e.geometries.cube,
      i = (this.geo = new Js()),
      n = i.attributes;
    (i.index = t.index),
      (n.position = t.attributes.position),
      (n.normal = t.attributes.normal),
      (n.uv = t.attributes.uv),
      (this.alphas = new Float32Array(this.maxCount)),
      (n.alpha = new hi(this.alphas, 1)),
      n.alpha.setUsage(ys),
      (this.alphaNeedsUpdate = !0),
      (this.translations = new Float32Array(this.maxCount * 3)),
      (n.translation = new hi(this.translations, 3)),
      n.translation.setUsage(ys),
      (this.translationNeedsUpdate = !0),
      (this.types = new Uint8Array(this.maxCount)),
      (n.type = new hi(this.types, 1)),
      n.type.setUsage(ji),
      (this.typesNeedsUpdate = !0);
    const r = (this.mat = ca.use());
    (r.uniforms.blockScale.value = e.stores.levelBlockScale),
      (this.base = new rt(i, r)),
      (this.base.manualMatrixUpdate = !0),
      (this.base.frustumCulled = !1),
      (this.currentCount = 0),
      (this.updateAttributes = this.bind("updateAttributes", 1)),
      (this.currentLevel = null),
      (this.instances = new Set()),
      (this.visibleInstances = new Set()),
      (this.hiddenInstances = new Set()),
      (this.breakableInstances = new Set()),
      (this.isLevelCleared = !1),
      (this.showFinished = Promise.resolve()),
      (this.isShowFinished = !0),
      (this.hideFinished = Promise.resolve()),
      (this.isHideFinished = !0),
      (this.hiding = !0);
  }
  createLevel(e) {
    e.isUnpacked || e.unpack(),
      this.instances.forEach((n) => n.destroy()),
      (this.currentLevel = e.name),
      this.instances.clear(),
      this.visibleInstances.clear(),
      this.hiddenInstances.clear(),
      this.breakableInstances.clear(),
      (this.showFinished = Ra()),
      (this.isShowFinished = !1),
      (this.hideFinished = Ra()),
      (this.hiding = !1),
      (this.hideResolved = !1),
      (this.isHideFinished = !1),
      (this.isLevelCleared = !1),
      this.mat.show();
    const i = this.webgl.stores.isAutoplay.value ? 0.2 : 1;
    this.webgl.playSound("sfx_transition_levelStart_cubeAppear", {
      delay: 200,
      throttle: 500,
      volume: i,
    }),
      (this.maxHeight = 0);
    for (let n = 0; n < e.blocks.length; n++) {
      const r = e.blocks[n];
      r.height > this.maxHeight && (this.maxHeight = r.height),
        this.instances.add(new tg({ data: r, parent: this }));
    }
  }
  destroyCurrentLevel() {
    if (this.hiding) return this.hideFinished;
    const t = this.webgl.stores.isAutoplay.value ? 0.2 : 1;
    return (
      this.visibleInstances.size > 0 &&
        this.webgl.playSound("sfx_transition_levelEnd_cubeDisappear", {
          delay: 100,
          throttle: 500,
          volume: t,
        }),
      (this.hiding = !0),
      this.instances.forEach((i) => i.hide()),
      this.mat.hide(),
      this.hideFinished
    );
  }
  updateAttributes(e) {
    if ((e.update(), e.destroyed || !e.visible)) return;
    const t = this.currentCount++,
      i = this.currentCount++;
    t !== e._lastUsedIndex && ((this.needsUpdate = !0), (e._lastUsedIndex = t)),
      (this.alphas[t] = e.alpha),
      e.alpha !== e._lastSentAlpha &&
        ((this.alphaNeedsUpdate = !0), (e._lastSentAlpha = e.alpha)),
      (this.translations[t * 3 + 0] = e.position.x),
      (this.translations[t * 3 + 1] = e.position.y),
      (this.translations[t * 3 + 2] = e.position.z),
      e.position.equals(e._lastSentPos) ||
        ((this.translationNeedsUpdate = !0), e._lastSentPos.copy(e.position)),
      (this.types[t] = e.data.type),
      e.type !== e._lastSentType &&
        ((this.typesNeedsUpdate = !0), (e._lastSentType = e.type)),
      (this.alphas[i] = e.alpha),
      (this.types[i] = e.data.type),
      (this.translations[i * 3 + 0] = e.position.x),
      (this.translations[i * 3 + 1] = -e.position.y),
      (this.translations[i * 3 + 2] = e.position.z);
  }
  updateInstances() {
    const e = this.geo,
      t = this.geo.attributes;
    (this.currentCount = 0),
      this.instances.forEach(this.updateAttributes),
      (e.instanceCount = this.currentCount),
      (this.base.visible = this.currentCount !== 0),
      this.needsUpdate &&
        ((this.needsUpdate = !1),
        (this.alphaNeedsUpdate = !0),
        (this.translationNeedsUpdate = !0),
        (this.typesNeedsUpdate = !0)),
      this.alphaNeedsUpdate &&
        ((this.alphaNeedsUpdate = !1), (t.alpha.needsUpdate = !0)),
      this.translationNeedsUpdate &&
        ((this.translationNeedsUpdate = !1), (t.translation.needsUpdate = !0)),
      this.typesNeedsUpdate &&
        ((this.typesNeedsUpdate = !1), (t.type.needsUpdate = !0));
  }
  update() {
    this.updateInstances(),
      !this.hiding &&
        !this.isShowFinished &&
        this.visibleInstances.size >= this.instances.size &&
        (this.showFinished.resolve(), (this.isShowFinished = !0)),
      this.hiding &&
        !this.isHideFinished &&
        this.hiddenInstances.size >= this.instances.size &&
        (this.hideFinished.resolve(), (this.isHideFinished = !0)),
      !this.isLevelCleared &&
        this.breakableInstances.size === 0 &&
        ((this.isLevelCleared = !0),
        this.webgl.game.isRunning() &&
          !this.webgl.game.muteGridFinished &&
          this.webgl.game.setState(this.webgl.game.states.GRID_FINISHED));
  }
}
const sg = `#define PHONG
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphatest_pars_fragment>
#include <specularmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <worldpos_pars>
varying vec2 vUv;uniform float time;uniform vec3 specular;uniform float shininess;uniform vec3 groundColor;uniform vec3 belowColor;uniform vec3 ledColor;uniform float ledFlash;void main(){vec4 diffuseColor=vec4(1.);vec3 emissive=vec3(0.);float led=step(0.,-vUv.y);float ring=1.-step(0.185,abs(vUv.x));float led2=led;diffuseColor.xyz=mix(groundColor*2.1,groundColor*1.0,ring);diffuseColor.xyz*=1.-smoothstep(0.3,0.1,abs(vUv.x))*(1.-ring)*0.4;diffuseColor.xyz-=smoothstep(1.2,0.2,abs(vUv.x))*(1.-ring)*0.1;
#include <normal_fragment_begin>
float specularStrength=(1.+ring*0.2)-led*4.5;ReflectedLight reflectedLight=ReflectedLight(vec3(.0),vec3(.0),vec3(.0),vec3(.0));
#include <lights_phong_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
float belowMult=step(0.,vWorldPos.y);vec3 color=reflectedLight.directDiffuse*(0.3+belowMult*0.7)+reflectedLight.indirectDiffuse+reflectedLight.directSpecular*(0.3+belowMult*0.7)+reflectedLight.indirectSpecular+emissive;color=mix(color*2.,color,step(0.,vWorldPos.y));color=mix(color,belowColor,smoothstep(0.8,-1.1,vWorldPos.y));float ledPattern=cos(abs(vUv.x*3.)+time*-4.)*0.5+0.5;led+=(smoothstep(0.2+ledFlash*0.06,-0.03,abs(vUv.x))+smoothstep(0.2+ledFlash*0.03,-0.1,abs(vUv.y-0.27))*(1.-ring))*max(ledFlash,0.9*ledPattern);vec3 ledCol=mix(groundColor*0.3,ledColor,ledPattern);color=mix(color,mix(ledCol,vec3(1.),ledFlash),led);gl_FragColor=vec4(color,1.);}`;
var ng = ut(sg, "fragmentShader");
const rg = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <normal_pars_vertex>
#include <shadowmap_pars_vertex>
#include <worldpos_pars>
uniform float size;attribute float offset;varying vec2 vUv;void main(){
#include <uv_vertex>
#include <beginnormal_vertex>
#include <defaultnormal_vertex>
#include <normal_vertex>
#include <begin_vertex>
float sizeMult=step(0.5,abs(transformed.x))*sign(transformed.x);transformed.x+=sizeMult*size;transformed.y+=offset;vNormal.y*=step(transformed.y,0.)*-2.+1.;
#include <project_vertex>
vViewPosition=-mvPosition.xyz;vUv=vec2(position.x,position.y+step(0.9,uv.x)*-1.);
#include <worldpos_vertex_bis>
#include <envmap_vertex>
#include <shadowmap_vertex>
}`;
var ag = ut(rg, "vertexShader");
let Br = null;
class ha extends gt {
  constructor() {
    super();
    const e = tn(),
      t = (this.uniforms = nt(
        Re({}, $i.merge([Z.common, Z.specularmap, Z.lights])),
        {
          size: { value: 1 },
          diffuse: { value: new L(16777215) },
          emissive: { value: new L(16777215) },
          specular: { value: new L(3355477) },
          shininess: { value: 10 },
          ledColor: { value: new L(0) },
          ledFlash: { value: 0 },
          time: { value: 0 },
          groundColor: e.colors.ground,
          belowColor: e.colors.inside,
        }
      ));
    (this.defines = Re({}, en())),
      ng.use(this),
      ag.use(this),
      (this.map = t.map.value),
      (this.lights = !0),
      (this.fog = !1),
      (this.type = "ShaderMaterial"),
      (this.isShaderMaterial = !0);
  }
}
ha.use = function () {
  return (Br = Br || new ha()), Br;
};
new C();
const og = new L(16777215);
class lg extends $e {
  init() {
    const e = this.webgl.geometries.bar,
      t = new Js();
    (t.index = e.index),
      (t.attributes.position = e.attributes.position),
      (t.attributes.uv = e.attributes.uv),
      (t.attributes.normal = e.attributes.normal),
      (this.offset = new Float32Array([0, -e.boundingBox.max.y])),
      (t.attributes.offset = new hi(this.offset, 1)),
      t.attributes.offset.setUsage(ji);
    const i = (this.material = ha.use());
    (this.base = new rt(t, i)),
      (this.base.frustumCulled = !1),
      (this.baseZ = -1),
      (this.base.position.x = this.webgl.stores.levelCenter),
      (this.base.position.z = this.baseZ),
      (this.size = 1),
      (this.target = new me(this.base.position.x, this.base.position.z)),
      (this.isActive = !0),
      (this.ease = new me(0.3)),
      (this.body = this.webgl.physics.createComponent("Bar", {
        position: this.base.position.toArray(),
      })),
      (this.velocity = new C()),
      (this.color = this.material.uniforms.ledColor.value),
      (this.flash = 0),
      (this.xOffset = Ia()),
      (this.zOffset = Ia()),
      (this.time = 0),
      (this.halo = new Tt({
        batcher: "emissive",
        sprite: "flash",
        alpha: 0.15,
        billboard: !1,
        scale: new me(13, 6),
        rotation: new ht(Math.PI * -0.5, 0, 0),
        color: 16777215,
      })),
      (this.halo2 = new Tt({
        batcher: "emissiveTop",
        sprite: "flash",
        alpha: 0.3,
        billboard: !0,
        scale: new me(9, 9),
        color: 16777215,
      })),
      (this.halo2.color = this.halo.color),
      (this.halo.baseScaleX = this.halo.scale.x),
      (this.halo2.baseScaleX = this.halo2.scale.x),
      (this.bonusColor = new L(0)),
      (this.bonusInfluence = 0),
      this.webgl.game.bonuses.onPick.watch(this.onBonusPick, this);
  }
  onBonusPick(e) {
    (this.time = -0.7),
      (this.bonusInfluence = 1),
      this.bonusColor.set(e.color).multiplyScalar(1.5);
  }
  onBallLost() {
    (this.time = -0.7),
      (this.bonusInfluence = 0.3),
      this.bonusColor.set(16711680);
  }
  onBallCollision(e) {
    this.flash = ke(1.6, 0.9, this.bonusInfluence);
    const t = e.vel,
      i = Kt(this.velocity.x, 0, 0.1, 0.15, 0),
      n = Kt(this.velocity.z, 0, 0.1, 0.15, 0),
      r = Math.min(i, n);
    this.xOffset.setValue(Kt(t.x, -0.12, 0.12, -1, 1) * r * 0.5),
      this.zOffset.setValue(Kt(t.z, -0.12, 0.12, -1, 1) * r * 1);
  }
  update() {
    const e = this.webgl.time.dt,
      t = this.scene.controlTarget,
      i = this.base.position,
      n = (this.isActive = t.isActive);
    this.velocity.set(this.body.position.x, i.y, this.body.position.y).sub(i);
    const r = this.webgl.game.bonuses.scalability,
      a = r && r.isActive.value;
    (this.size = yt(this.size, a ? 1.7 : 1, 0.1, e)),
      n && ((this.target.x = t.position.x), (this.target.y = t.position.z - 1)),
      (this.ease.x = n ? 0.45 : 0.3),
      (this.ease.y = n ? 0.45 : 0.3),
      t.useKeyboard &&
        ((this.ease.x = n ? 1.2 : 0.7), (this.ease.y = t.useSmash ? 1.1 : 0.4)),
      this.xOffset.update(e),
      this.zOffset.update(e),
      (this.flash = yt(this.flash, 0, ke(0.09, 0.15, this.bonusInfluence), e)),
      (i.x = this.body.position.x + this.xOffset.value),
      (i.z = this.body.position.y + this.zOffset.value);
    const o = e * (0.0012 + this.bonusInfluence * 0.006);
    this.time += o;
    const c = this.webgl.uniforms.colors.normalBall.value;
    this.color.lerpColors(c, this.bonusColor, ct(this.bonusInfluence, 0, 0.05)),
      (this.bonusInfluence = yt(this.bonusInfluence, 0, 0.06, e)),
      (this.halo.scale.x = this.halo.baseScaleX * this.size),
      (this.halo2.scale.x = this.halo2.baseScaleX * this.size),
      this.halo.position.set(0, 0, 0.02).add(i),
      this.halo2.position.set(0, 0.5, 0.3).add(i);
    const h = Math.cos(this.time * -4) * 0.5 + 0.5;
    (this.halo.alpha = ke(
      ke(0.15, 0.19, this.bonusInfluence),
      0.15,
      Fa(0, 0.15, this.flash)
    )),
      (this.halo2.alpha = ke(h * 0.6, 0.45, Fa(0, 0.15, this.flash))),
      this.halo.color.lerpColors(this.color, og, this.flash);
  }
  afterUpdate() {
    this.webgl.game.needsBarReset &&
      ((this.target.x = this.webgl.stores.levelCenter),
      (this.target.y = -1),
      (this.webgl.game.needsBarReset = !1)),
      this.body.updateSize(this.size),
      this.body.updateTarget(this.target),
      this.body.updateEase(this.ease),
      this.body.updateActive(this.isActive),
      this.body.updateKeyboard(this.scene.controlTarget.useKeyboard),
      (this.material.uniforms.size.value = this.size - 1),
      (this.material.uniforms.ledFlash.value = this.flash),
      (this.material.uniforms.time.value = this.time);
    const e = this.scene.lights.barLight;
    e.position.copy(this.base.position),
      (e.position.z -= 0.1),
      (e.position.y += 0.2);
  }
}
const cg = `#define PHONG
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphatest_pars_fragment>
#include <specularmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <worldpos_pars>
#include <luma>
varying vec2 vUv;uniform vec3 specular;uniform float shininess;uniform vec3 ballColor;uniform vec3 belowColor;void main(){vec4 diffuseColor=vec4(0.5,0.5,0.5,1.);vec3 emissive=ballColor;
#include <normal_fragment_begin>
float specularStrength=1.;ReflectedLight reflectedLight=ReflectedLight(vec3(.0),vec3(.0),vec3(.0),vec3(.0));
#include <lights_phong_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
vec3 color=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+reflectedLight.directSpecular+reflectedLight.indirectSpecular+emissive;color=mix(color,vec3(luma(color)),0.75);color=emissive;float lim=0.06;float y=abs(vUv.y-0.5);float pattern=smoothstep(0.6,0.2,y)*0.9+smoothstep(0.3,0.1,y);color=mix(color*0.8,color*1.2,pattern);color=mix(vec3(1.),color,step(0.05,y));color=mix(color*1.2,color,step(0.,vWorldPos.y));color=mix(color,color*0.2,smoothstep(0.25,-0.1,abs(vWorldPos.y)));color=mix(color,belowColor,smoothstep(0.2,-0.45,vWorldPos.y));gl_FragColor=vec4(color,1.);}`;
var hg = ut(cg, "fragmentShader");
const ug = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <normal_pars_vertex>
#include <shadowmap_pars_vertex>
#include <worldpos_pars>
varying vec2 vUv;attribute vec3 translation;attribute vec4 quaternion;void main(){
#include <uv_vertex>
#include <beginnormal_vertex>
#include <defaultnormal_vertex>
#include <normal_vertex>
#include <begin_vertex>
transformed.xyz+=2.0*cross(quaternion.xyz,cross(quaternion.xyz,transformed)+quaternion.w*transformed);transformed.xyz+=translation.xyz;
#include <project_vertex>
vUv=uv;vViewPosition=-mvPosition.xyz;
#include <worldpos_vertex_bis>
#include <envmap_vertex>
#include <shadowmap_vertex>
}`;
var dg = ut(ug, "vertexShader");
let Nr = null;
class ua extends gt {
  constructor() {
    super();
    const e = tn(),
      t = (this.uniforms = nt(
        Re({}, $i.merge([Z.common, Z.specularmap, Z.lights])),
        {
          diffuse: { value: new L(16777215) },
          emissive: { value: new L(16777215) },
          specular: { value: new L(16777215) },
          shininess: { value: 10 },
          time: e.time,
          ballColor: e.colors.ball,
          belowColor: e.colors.inside,
        }
      ));
    (this.defines = Re({}, en())),
      hg.use(this),
      dg.use(this),
      (this.map = t.map.value),
      (this.lights = !0),
      (this.fog = !1),
      (this.type = "ShaderMaterial"),
      (this.isShaderMaterial = !0);
  }
}
ua.use = function () {
  return (Nr = Nr || new ua()), Nr;
};
let pe;
const et = new C(),
  Ln = new C(),
  fg = new C(),
  pg = new ht();
new Xe();
const zi = { Hidden: 0, Frozen: 1, Active: 2 };
class mg {
  constructor({ parent: e, size: t, index: i }) {
    pe || (pe = Qs()),
      (this._lastUsedIndex = this._lastSentAlpha = -1),
      (this._lastSentPos = new C().setScalar(-1e3)),
      (this._lastSentQt = new Xe(-1e3, 0, 0, 0)),
      (this.index = i),
      (this.isPrimary = i === 0),
      (this.isSecondary = i > 0),
      (this.visible = !1),
      (this.alpha = 1),
      (this.size = t),
      (this.parent = e),
      (this.scene = e.scene),
      (this.baseY = -4.5 * pe.stores.levelBlockScale),
      (this.basePosition = new C(pe.stores.levelCenter, 0, this.baseY)),
      (this.position = this.basePosition.clone()),
      (this.quaternion = new Xe()),
      (this.body = pe.physics.createComponent("Ball", { index: i })),
      (this.body.onWallCollision = this.onWallCollision.bind(this)),
      (this.body.onLimitCollision = this.onLimitCollision.bind(this)),
      (this.body.onBarCollision = this.onBarCollision.bind(this)),
      (this.body.onBlockCollision = this.onBlockCollision.bind(this)),
      (this.state = zi.Hidden),
      (this.unfrozeDelay = 0),
      (this.lastBarImpact = 0),
      (this.halo = new Tt({
        batcher: "emissive",
        sprite: "flash",
        alpha: 1,
        billboard: !0,
        scale: 10,
        color: 16777215,
      })),
      (this.dummy = new He()),
      (this.dummy2 = new He()),
      (this.dummy3 = new He()),
      (this.axis = new C()),
      (this.vel = new C()),
      (this.r = 0),
      this.initParticles();
  }
  isActive() {
    return this.state === zi.Active;
  }
  isFrozen() {
    return this.state === zi.Frozen;
  }
  isHidden() {
    return this.state === zi.Hidden;
  }
  onBlockCollision([e, t, i, n, r]) {
    if (i === 1) {
      this.lastUnbreakableCollide || (this.lastUnbreakableCollide = 0);
      const a = performance.now();
      if (a - this.lastUnbreakableCollide < 100) return;
      this.lastUnbreakableCollide = a;
      const o = fe.randomFloat(0, Math.PI * 2);
      if (pe.quality.current.value < 2) return;
      pe.particles.emit("flash", {
        batcherID: "emissive",
        parent: this.dummy2,
        position: et.set(0, 0.5, 0.4),
        duration: fe.randomFloat(200, 350),
        scale: new me(fe.randomFloat(3, 4), 0.25),
        alpha: 1.4,
        brightness: 0.22,
      }),
        pe.quality.current.value >= 4 &&
          (pe.particles.emit("flash", {
            batcherID: "emissive",
            parent: this.dummy2,
            position: et.set(0, 0.5, 0.4),
            duration: fe.randomFloat(200, 350),
            scale: new me(fe.randomFloat(3, 4), 0.3),
            angle: o + fe.randomFloat(1, 2),
            alpha: 1.4,
            brightness: 0.22,
          }),
          pe.particles.emit("flash", {
            batcherID: "emissive",
            parent: this.dummy2,
            position: et.set(0, 0.5, 0.4),
            duration: fe.randomFloat(200, 350),
            scale: new me(fe.randomFloat(3, 5), 0.2),
            angle: o + fe.randomFloat(-1.6, -0.6),
            alpha: 1.4,
            brightness: 0.22,
          }),
          pe.particles.emit("flash", {
            batcherID: "emissive",
            parent: this.dummy2,
            position: et.set(0, 0.5, 0.4),
            duration: 220,
            scale: 5.5,
            alpha: 1.8,
            angle: o,
            brightness: 0.22,
          })),
        pe.quality.current.value >= 5 &&
          pe.particles.emit("impact", {
            position: et.set(this.position.x, 0.2, this.position.z),
            maxDistance: 0.3 + this.body.normAddVel * 0.6,
            impactAngle: Math.atan2(r, n),
            angleSpread: Math.PI * 0.2,
            alpha: fe.randomFloat(0.4, 0.5),
            minAmount: 2,
            maxAmount: 4,
          });
    }
  }
  onBarCollision([e, t, i, n]) {
    const r = pe.time.pausedElapsed,
      a = r - this.lastBarImpact > 400;
    if (((this.lastBarImpact = r), !a)) return;
    const l = pe.stores.isAutoplay.value ? 0.4 : 1;
    pe.playSound("sfx_ball_Impact_paddle", { volume: l }),
      pe.particles.emit("flash", {
        batcherID: "emissiveTop",
        parent: this.dummy2,
        position: et.set(0, 0.2, 0),
        duration: 500,
        scale: 11,
        alpha: 1.6,
        commonColor: "ballLight",
        brightness: 0.22,
      }),
      pe.particles.emit("flash", {
        batcherID: "emissiveTop",
        parent: this.dummy2,
        position: et.set(0, 0.5, 0.4),
        duration: 900,
        scale: 7,
        alpha: 1.6,
        commonColor: "ball",
        brightness: 0.42,
      }),
      pe.particles.emit("impact", {
        position: et.set(e, 0, t),
        maxDistance: 0.7 + this.body.normAddVel * 1.2,
        impactAngle: Math.atan2(n, i),
        angleSpread: Math.PI * 0.1,
        brightnessOffsetMin: -0.2,
        minScale: 0.6,
        maxScale: 1.1,
        minAmount: 4,
        maxAmount: 10,
        commonColor: "ball",
      }),
      this.scene.bar.onBallCollision(this);
  }
  onWallCollision([e, t, i, n, r]) {
    const a = et.set(e, 0, t),
      l = pe.stores.isAutoplay.value ? 0.4 : 1;
    pe.playSound("sfx_ball_Impact_wall", { throttle: 100, volume: l }),
      pe.particles.emit("wallWave", {
        position: a,
        side: i,
        borderDepths: pe.scene.borders.mat.depthWrite,
      }),
      !(pe.quality.current.value < 2) &&
        pe.particles.emit("impact", {
          position: a,
          maxDistance: 0.8 + this.body.normAddVel * 1.4,
          impactAngle: Math.atan2(r, n),
          angleSpread: Math.PI * 0.15,
          brightnessOffsetMin: -0.2,
          minAmount: 2,
          maxAmount: pe.quality.current.value >= 5 ? 6 : 4,
          commonColor: "ball",
        });
  }
  onLimitCollision() {
    if ((this.hide(), !pe.game.isRunning())) return;
    if (this.parent.getActiveBallsCount() > 0) {
      pe.scene.groundCircle(
        this.position.x,
        this.position.z,
        "ballLostMinor",
        700
      );
      return;
    }
    pe.game.isRunning() &&
      pe.game.setState(pe.game.states.LOSE_LIFE, {
        ballPosition: this.position,
      });
  }
  activate() {
    if (this.isActive()) return;
    const t = pe.stores.isAutoplay.value ? 0.25 : 1;
    pe.scene.groundCircle(this.position.x, this.position.z - 0.5, "ground"),
      pe.playSound("sfx_ball_launch", { throttle: 100, volume: t }),
      (this.state = zi.Active);
  }
  repop(e = {}) {
    (this.manualUnfroze = e.frozen != null),
      (this.unfrozeDelay = e.unfrozeDelay || 100);
    const t = this.manualUnfroze ? e.frozen : this.unfrozeDelay > 0;
    t && !this.isFrozen()
      ? (this.state = zi.Frozen)
      : !t && !this.isActive() && this.activate();
  }
  hide() {
    (this.isMain = !1), !this.isHidden() && (this.state = zi.Hidden);
  }
  initParticles() {
    (this.lastSmoke = 1e4),
      (this.lastSparkle = 1e4),
      (this.lastFlame = 1e4),
      (this.smokeEase = Ke([0.37, 0.05, 0.85, 0.545])),
      (this.sparkleEase = Ke([0.37, 0.05, 0.85, 0.545]));
  }
  updatePrebuiltParticles() {
    const e = pe.time.dt,
      t = pe.quality.current.value < 2;
    this.lastSparkle += e;
    const i = pe.quality.current.value >= 5 ? 0 : 20,
      n = pe.quality.current.value >= 5 ? 50 : 120,
      r = this.sparkleEase(ct(this.lastSparkle, i, n));
    Math.random() < r &&
      ((this.lastSparkle = 0),
      pe.particles.emit("sparkle", {
        position: et.set(0, 0, 0).add(this.position),
        velocity: Ln.copy(this.vel).multiplyScalar(0.04),
        commonColor: "ball",
        brightness: 0.2,
      })),
      (this.lastFlame += e);
    const a = pe.quality.current.value >= 5 ? 0 : 20,
      o = pe.quality.current.value >= 5 ? 25 : 60,
      l = this.sparkleEase(ct(this.lastFlame, a, o));
    Math.random() < l &&
      ((this.lastFlame = 0),
      pe.particles.emit("flame", {
        position: et.set(0, 0.2, 0).add(this.position),
        velocity: Ln.copy(this.vel),
        commonColor: "ball",
        brightness: 0.2,
      })),
      (this.lastSmoke += e);
    const c = pe.quality.current.value >= 5 ? 0 : 20,
      h = pe.quality.current.value >= 5 ? 70 : 180,
      d = this.sparkleEase(ct(this.lastSmoke, c, h));
    Math.random() < d &&
      !t &&
      ((this.lastSmoke = 0),
      pe.particles.emit("blockSmoke", {
        position: et.set(0, 0, 0).add(this.position),
        commonColor: "ball",
        brightness: -0.2,
        sameColorTo: !0,
        alpha: fe.randomFloat(0.2, 0.6),
        scale: fe.randomFloat(0.4, 0.7),
        bigSmokeChance: 0.9,
        amountMin: 1,
        amountMax: 1,
        spread: 0.02,
        spreadVel: 0.025,
      }));
  }
  updateParticles() {
    if (!this.visible) return;
    const e = pe.game.bonuses.prebuilt;
    e && e.isActive.value && this.updatePrebuiltParticles();
  }
  animateIn() {
    const e = this.dummy2;
    (e.position.x === 0 && e.position.y === 0) ||
      (pe.particles.emit("wallWave", {
        parent: e,
        position: et.set(0, 0.15, 0),
        rotation: pg.set(Math.PI * -0.5, 0, 0),
        scaleFrom: 1.5,
        scaleTo: 14,
        alpha: 0.35,
      }),
      !(pe.quality.current.value < 4) &&
        (pe.particles.emit("sparkle", {
          parent: e,
          position: et.set(0, 0, 0),
          velocity: Ln.setScalar(0),
          commonColor: "ball",
          minAmount: 6,
          maxAmount: 10,
          brightness: 0.2,
        }),
        pe.particles.emit("blockExplode", {
          parent: e,
          position: et.set(0, 0, 0),
          commonColor: "ball",
          brightness: 0,
          largeAmount: !0,
          scale: 0.56,
          spread: 0.56,
        }),
        pe.particles.emit("flash", {
          batcherID: "emissiveTop",
          parent: e,
          position: et.set(0, 0, -0.1),
          commonColor: "ballLight",
          duration: 600,
          scale: 6,
          newAlpha: 1.2,
          brightness: 0.1,
        }),
        pe.particles.emit("flash", {
          batcherID: "emissiveTop",
          parent: e,
          position: et.set(0, 0, -0.1),
          commonColor: "ballLight",
          duration: 1200,
          scale: 8,
          newAlpha: 1,
          brightness: 0.1,
        })));
  }
  animateOut() {
    (this.position.x === 0 && this.position.y === 0) ||
      pe.quality.current.value < 4 ||
      (pe.particles.emit("blockExplode", {
        position: this.position,
        commonColor: "ball",
        brightness: 0,
        largeAmount: !0,
        scale: 0.63,
        spread: 0.62,
      }),
      pe.particles.emit("flash", {
        position: this.position,
        commonColor: "ballLight",
        duration: 800,
        scale: 12,
        newAlpha: 0.4,
        brightness: 0.1,
      }));
  }
  update() {
    const e = this.position,
      t = this.visible;
    this.visible = this.body.visible;
    const i = et.set(e.x, e.y, e.z);
    (e.x = this.body.position.x), (e.z = this.body.position.y);
    const n = Ln.set(e.x, e.y, e.z);
    if (
      (this.vel.copy(n).sub(i),
      this.dummy2.position.copy(n),
      this.dummy2.updateMatrixWorld(),
      (this.halo.position.x = n.x),
      (this.halo.position.y = n.y + 0.12),
      (this.halo.position.z = n.z + 0.05),
      (this.halo.alpha = this.visible ? 0.2 : 0),
      this.halo.color
        .copy(pe.uniforms.colors.ballLight.value)
        .offsetHSL(0, 0, 0.01),
      this.visible && !t && !this.isHidden()
        ? this.animateIn()
        : !this.visible && t && this.animateOut(),
      this.isFrozen() &&
        !this.manualUnfroze &&
        ((this.unfrozeDelay -= pe.time.dt),
        this.unfrozeDelay <= 0 && this.activate()),
      this.isActive())
    ) {
      const r = fg.copy(n).sub(i);
      this.dummy.lookAt(r.multiplyScalar(10)),
        (this.r += r.length() * 0.13),
        this.dummy.rotateX(this.r),
        this.updateParticles();
    } else this.dummy.rotation.set(0, 0, 0);
    this.quaternion.copy(this.dummy.quaternion),
      this.body.setBallState(this.state),
      this.light &&
        ((this.light.intensity = this.visible ? this.light.baseIntensity : 0),
        (this.light.position.x = this.position.x),
        (this.light.position.y = 0.5),
        (this.light.position.z = this.position.z));
  }
}
const gg = 2,
  vg = 500;
class _g extends $e {
  init() {
    this.ballSize = this.webgl.stores.levelBallSize;
    const e = new Vn(this.ballSize),
      t = (this.geo = new Js()),
      i = t.attributes;
    (t.index = e.index),
      (i.position = e.attributes.position),
      (i.normal = e.attributes.normal),
      (i.uv = e.attributes.uv),
      (this.maxCount = gg * 2),
      (this.currentCount = 0),
      (this.needsUpdate = !0),
      (this.translations = new Float32Array(this.maxCount * 3)),
      (this.translationNeedsUpdate = !0),
      (i.translation = new hi(this.translations, 3)),
      i.translation.setUsage(ys),
      (this.quaternions = new Float32Array(this.maxCount * 4)),
      (this.quaternionNeedsUpdate = !0),
      (i.quaternion = new hi(this.quaternions, 4)),
      i.quaternion.setUsage(ys),
      (this.alphas = new Float32Array(this.maxCount)),
      (this.alphaNeedsUpdate = !0),
      (i.alpha = new hi(this.alphas, 1)),
      i.alpha.setUsage(ys),
      (this.base = new rt(this.geo, ua.use())),
      (this.base.manualMatrixUpdate = !0),
      (this.base.frustumCulled = !1),
      (this.base.position.y += this.ballSize),
      (this.webgl.game.balls = this),
      (this.instances = []);
    for (let n = 0, r = this.maxCount / 2; n < r; n++) {
      const a = new mg({ parent: this, size: this.ballSize, index: n });
      this.instances.push(a);
    }
    this.webgl.game.bonuses.simultaneity &&
      this.webgl.game.bonuses.simultaneity.onPick.watch(() => {
        !this.webgl.game.isRunning() || this.addBall();
      });
  }
  addBall(e = {}) {
    for (let t = 0, i = this.instances.length; t < i; t++) {
      const n = this.instances[t];
      if (!!n.isHidden()) {
        n.repop(Re({ unfrozeDelay: vg }, e));
        return;
      }
    }
  }
  getMain() {
    for (let e = 0, t = this.instances.length; e < t; e++) {
      const i = this.instances[e];
      if (i.isMain) return i;
    }
  }
  keepMain(e = {}) {
    let t = this.instances[0];
    for (let i = 0, n = this.instances.length; i < n; i++) {
      const r = this.instances[i];
      r.isMain && (t = r);
    }
    for (let i = 0, n = this.instances.length; i < n; i++) {
      const r = this.instances[i];
      r !== t && r.hide();
    }
    (t.isMain = !0), t.repop(e);
  }
  clearAll() {
    for (let e = 0, t = this.instances.length; e < t; e++)
      this.instances[e].hide();
  }
  getActiveBallsCount() {
    let e = 0;
    for (let t = 0, i = this.instances.length; t < i; t++)
      !this.instances[t].isActive() || e++;
    return e;
  }
  updateAttributes(e) {
    if ((e.update(), e.destroyed || !e.visible)) return;
    const t = this.currentCount++,
      i = this.currentCount++;
    t !== e._lastUsedIndex && ((this.needsUpdate = !0), (e._lastUsedIndex = t)),
      (this.translations[t * 3 + 0] = e.position.x),
      (this.translations[t * 3 + 1] = e.position.y),
      (this.translations[t * 3 + 2] = e.position.z),
      e.position.equals(e._lastSentPos) ||
        ((this.translationNeedsUpdate = !0), e._lastSentPos.copy(e.position)),
      (this.quaternions[t * 4 + 0] = e.quaternion.x),
      (this.quaternions[t * 4 + 1] = e.quaternion.y),
      (this.quaternions[t * 4 + 2] = e.quaternion.z),
      (this.quaternions[t * 4 + 3] = e.quaternion.w),
      e.quaternion.equals(e._lastSentQt) ||
        ((this.quaternionNeedsUpdate = !0), e._lastSentQt.copy(e.quaternion)),
      (this.alphas[t] = e.alpha),
      e.alpha !== e._lastSentAlpha &&
        ((this.alphaNeedsUpdate = !0), (e._lastSentAlpha = e.alpha)),
      (this.alphas[i] = e.alpha),
      (this.translations[i * 3 + 0] = e.position.x),
      (this.translations[i * 3 + 1] = -this.ballSize * 2 - e.position.y),
      (this.translations[i * 3 + 2] = e.position.z),
      (this.quaternions[i * 4 + 0] = e.quaternion.x),
      (this.quaternions[i * 4 + 1] = e.quaternion.y),
      (this.quaternions[i * 4 + 2] = e.quaternion.z),
      (this.quaternions[i * 4 + 3] = e.quaternion.w);
  }
  update() {
    const e = this.geo,
      t = this.geo.attributes;
    this.currentCount = 0;
    for (let i = 0, n = this.instances.length; i < n; i++)
      this.updateAttributes(this.instances[i]);
    (e.instanceCount = this.currentCount),
      (this.base.visible = this.currentCount !== 0),
      this.needsUpdate &&
        ((this.needsUpdate = !1),
        (this.translationNeedsUpdate = !0),
        (this.alphaNeedsUpdate = !0)),
      this.translationNeedsUpdate &&
        ((this.translationNeedsUpdate = !1), (t.translation.needsUpdate = !0)),
      this.quaternionNeedsUpdate &&
        ((this.quaternionNeedsUpdate = !1), (t.quaternion.needsUpdate = !0)),
      this.alphaNeedsUpdate &&
        ((this.alphaNeedsUpdate = !1), (t.alpha.needsUpdate = !0));
  }
}
const xg = new C(),
  yg = ["quaternion", "position"];
class bg extends $e {
  init() {
    const { x: e, z: t } = this.props,
      i = this.webgl.game.bonuses,
      n = (this.type = i[this.props.type] || i.scalability);
    (this.dummy = new He()),
      (this.mirror = new He()),
      (this.color = new L(n.color)),
      (this.parts = [
        new Tt({
          batcher: "emissive",
          sprite: "outline_bonus_glow",
          alpha: 0.9,
          color: this.color,
        }),
        new Tt({ batcher: "sdf", sprite: "outline_bonus", color: this.color }),
        new Tt({
          batcher: "silhouette",
          sprite: "outline_bonus",
          color: 2171169,
        }),
        new Tt({ batcher: "silhouette", color: 3158064, sprite: n.sprite }),
        new Tt({ batcher: "sdf", sprite: n.sprite }),
      ]),
      (this.halo = new Tt({
        batcher: "emissive",
        sprite: "flash",
        color: this.color,
        alpha: 0.5,
        rotation: new ht(Math.PI * -0.5, 0, 0),
      })),
      this.parts.forEach((r) =>
        yg.forEach((a) => {
          (r[a] = this.dummy[a]), (r.visible = !1);
        })
      ),
      (this.size = 3 * this.webgl.stores.levelBlockScale),
      this.webgl.viewport.ratio.value < 0.8 && (this.size *= 1.25),
      this.halo.scale.set(this.size * 2.2, this.size * 1.6),
      (this.halo.visible = !1),
      (this.dummy.position.y = 0.2 * this.size),
      (this.body = this.webgl.physics.createComponent("Bonus", { x: e, y: t })),
      (this.body.onBonusPicked = this.onBonusPicked.bind(this)),
      (this.picked = !1),
      (this.visible = !1),
      this.webgl.playSound("sfx_powerup_generic_appear"),
      (this.loop = this.webgl.playSound("sfx_powerup_generic_moving_loop", {
        unique: !0,
        loop: !0,
      }));
  }
  onBonusPicked() {
    if (this.picked) return;
    (this.picked = !0), this.type.pick();
    const e = this.dummy.position;
    this.scene.groundCircle(e.x, e.z, this.type.id, 1e3);
  }
  update() {
    const e = this.webgl.time.pausedElapsed,
      t = this.webgl.scene.getCurrentCamera().cam;
    (this.dummy.position.x = this.body.position.x),
      (this.dummy.position.z = this.body.position.y),
      this.dummy.lookAt(t.position),
      (this.dummy.rotation.y = this.dummy.rotation.z = 0);
    for (let n = 0; n < this.parts.length; n++) {
      const r = this.parts[n],
        a = n < 3 ? Math.cos(e * 0.015) * 0.06 : 0;
      (r.scale.x = (this.size + a) * 2),
        (r.scale.y = (this.size + a) * 2),
        (r.visible = this.body.visible);
    }
    const i = this.dummy.localToWorld(xg.set(0, this.size * -0.08, 0));
    (this.halo.position.x = i.x),
      (this.halo.position.z = i.z),
      (this.halo.visible = this.body.visible),
      this.loop &&
        (this.loop.volume =
          Kt(this.dummy.position.z, 0.5, -0.5, 0, 1) *
          Kt(this.dummy.position.z, -6.5, -0.5, 0.55, 1)),
      this.body.destroyed && this.destroy();
  }
  destroy() {
    if (this.isDestroyed) return;
    for (let t = 0; t < this.parts.length; t++) this.parts[t].destroy();
    this.body && this.body.destroy(),
      this.halo.destroy(),
      this.scene.bonuses.delete(this),
      (this.body = null),
      this.webgl.stopSound("sfx_powerup_generic_moving_loop");
    const e = this.dummy;
    this.webgl.quality.current.value >= 4 &&
      e.position.x !== 0 &&
      e.position.y !== 0 &&
      (this.webgl.particles.emit("blockExplode", {
        position: e.position,
        commonColor: this.color,
        brightness: 0,
        largeAmount: !0,
        scale: 0.9,
        spread: 0.8,
      }),
      this.webgl.particles.emit("flash", {
        position: e.position,
        commonColor: this.color,
        duration: 600,
        scale: 7.5,
        newAlpha: 1.15,
        brightness: 0.1,
      }),
      this.webgl.particles.emit("flash", {
        position: e.position,
        commonColor: this.color,
        duration: 1e3,
        scale: 12,
        newAlpha: 0.8,
        brightness: 0.15,
      })),
      super.destroy();
  }
}
const wg =
  "precision lowp float;uniform vec3 color;varying float vFade;varying float vLight;varying vec2 vUv;void main(){vec2 uv=vUv;vec2 dist=uv-vec2(0.5);float sdf=smoothstep(1.,-1.,dot(dist,dist)*4.0)*smoothstep(1.,0.5,gl_FragCoord.w)*smoothstep(0.25,0.2,gl_FragCoord.w)*vFade;vec3 c=mix(color*0.3,color*1.3,vLight);gl_FragColor=vec4(c*sdf,1.);}";
var Sg = ut(wg, "fragmentShader");
const Mg = `precision highp float;attribute vec3 position;attribute vec2 uv;attribute vec3 translation;attribute float offset;uniform mat4 viewMatrix;uniform mat4 modelViewMatrix;uniform mat4 projectionMatrix;uniform float time;uniform float boxSize;uniform vec3 boxPosition;uniform vec4 light1;uniform vec4 light2;uniform vec4 light3;uniform vec4 light4;varying vec2 vUv;varying float vFade;varying float vLight;
#define DURATION 100.0
#define INV_DURATION 0.01
void main(){vUv=uv;vec3 bbRight=vec3(viewMatrix[0][0],viewMatrix[1][0],viewMatrix[2][0]);vec3 bbUp=vec3(viewMatrix[0][1],viewMatrix[1][1],viewMatrix[2][1]);vec3 billboard=bbRight*position.x+bbUp*position.y;vec3 t=translation;t.x+=cos(time*0.3+offset)*0.1;t.y+=cos(time*-0.33+offset*10.)*0.1;t.z+=sin(time*-0.22+offset*-6.-t.y)*0.12;vFade=1.;vLight=max(max(max(smoothstep(2.2,0.0,distance(light1.xyz,t)*0.5)*1.1*light1.w,smoothstep(2.2,0.0,distance(light2.xyz,t)*0.5)*1.7*light2.w),smoothstep(2.2,0.0,distance(light3.xyz,t)*0.5)*1.7*light3.w),smoothstep(2.2,0.0,distance(light4.xyz,t)*0.5)*1.7*light4.w)*1.;vec3 transformed=billboard+t.xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(transformed,1.);}`;
var Cg = ut(Mg, "vertexShader");
let kr = null;
class da extends cc {
  constructor() {
    super(),
      (this.uniforms = {
        time: ae.uniforms.time,
        boxSize: { value: 1 },
        boxPosition: { value: new C() },
        color: ae.uniforms.colors.lightBar,
        light1: { value: new Fe() },
        light2: { value: new Fe() },
        light3: { value: new Fe() },
        light4: { value: new Fe() },
      }),
      Sg.use(this),
      Cg.use(this),
      (this.blending = Ss),
      (this.depthTest = !0),
      (this.depthWrite = !1),
      (this.type = "RawShaderMaterial"),
      (this.isShaderMaterial = !0);
  }
}
da.use = function () {
  return (kr = kr || new da()), kr;
};
const Ag = 2200,
  Or = new Ks(),
  Gr = 0.042;
class Tg extends $e {
  init() {
    this.initGeometry(Ag),
      (this.mat = da.use()),
      (this.base = new rt(this.geo, this.mat)),
      (this.base.renderOrder = ae.stores.renderOrder.cloudParticles),
      (this.base.frustumCulled = !1),
      (this.base.visible = !0),
      (this.base.manualMatrixUpdate = !0),
      this.webgl.quality.current.watchImmediate((e) => {
        this.base.visible = e >= 4;
      });
  }
  initGeometry(e) {
    if (e === this.count) return;
    (this.count = e), this.geo && this.geo.dispose();
    const t = (this.geo = new Js());
    (this.geo.index = Or.index),
      (this.geo.attributes.position = Or.attributes.position),
      (this.geo.attributes.uv = Or.attributes.uv),
      this.geo.scale(Gr, Gr, Gr),
      (this.translations = new Float32Array(this.count * 3)),
      (t.attributes.translation = new hi(this.translations, 3)),
      t.attributes.translation.setUsage(ji),
      (this.offsets = new Float32Array(this.count * 3)),
      (t.attributes.offset = new hi(this.offsets, 1)),
      t.attributes.offset.setUsage(ji);
    const i = this.translations,
      n = this.offsets,
      r = this.webgl.stores.levelWidth,
      a = this.webgl.stores.levelDepth,
      o = this.webgl.stores.levelBottom,
      l = 12;
    for (let c = 0; c < this.count; c++)
      (i[c * 3 + 0] = fe.randomFloat(0 - l, r + l)),
        (i[c * 3 + 1] = fe.randomFloat(0, 12)),
        (i[c * 3 + 2] = fe.randomFloat(o + l, a - l)),
        (n[c] = fe.randomFloat(-1, 1));
    this.base && (this.base.geometry = this.geo);
  }
  update() {
    const e = this.scene.getCurrentCamera().cam,
      t = this.mat.uniforms.boxPosition.value;
    e.localToWorld(t.set(0, 0, -this.boxSize * 0.5));
  }
}
const cl = new C(),
  hl = new C();
new C();
const Eg = 500,
  Lg = 0.8;
let Dg = 1;
class fa extends $e {
  init() {
    (this.spawn = new He()),
      (this.dummy = new He()),
      (this.baseY = 0.3),
      (this.main = new Tt({
        batcher: "emissive",
        sprite: "projectile",
        alpha: 0.9,
        scale: new me(2.2, 3),
        position: new C(0, this.baseY, 0),
        rotation: new ht(Math.PI * -0.5, 0, 0),
      })),
      (this.halo = new Tt({
        batcher: "emissive",
        sprite: "projectile-halo",
        alpha: 0.42,
        color: 16711680,
        scale: new me(2.2, 3),
        position: new C(0, this.baseY, 0),
        rotation: new ht(Math.PI * -0.5, 0, 0),
      })),
      (this.halo.color = this.webgl.uniforms.colors.power.value),
      (this.halo.position = this.main.position),
      this.updateSprites(),
      (this.onCollision = this.onCollision.bind(this)),
      (this.onBonusDisable = this.onBonusDisable.bind(this)),
      (this.body = this.webgl.physics.createComponent("Projectile")),
      (this.body.onCollision = this.onCollision);
  }
  arm() {
    (this.lastSmoke = 1e5),
      this.main.scale.setScalar(0, 0.2),
      this.halo.scale.setScalar(0, 0.5),
      (this.alive = !0),
      (this.delay = 600),
      (this.spawnSide = Dg *= -1),
      this.webgl.game.bonuses.power.onDisable.watch(this.onBonusDisable),
      this.updateSprites();
  }
  wallAnimation() {
    const e = this.webgl.quality.current.value < 2,
      t = cl.set(this.dummy.position.x, 0, this.webgl.stores.levelDepth + 0.1);
    this.webgl.particles.emit("wallWave", { position: t, side: 0 }),
      e ||
        this.webgl.particles.emit("impact", {
          position: t,
          maxDistance: 0.7,
          impactAngle: Math.PI * 0.5,
          angleSpread: Math.PI * 0.15,
          brightnessOffsetMin: -0.2,
          commonColor: "power",
        });
  }
  onCollision([, , e]) {
    e === 1 && this.wallAnimation(), this.dispose();
  }
  updatePreshoot() {
    const e = this.webgl.time.dt;
    (this.delay -= e), this.delay <= 0 && this.shoot();
  }
  shoot() {
    (this.delay = 0), this.updateSpawnPosition(!0), this.updateSprites(!0);
    const e = this.webgl.quality.current.value < 2;
    this.body.shoot(this.spawn.position.x, this.spawn.position.z),
      this.webgl.playSound("sfx_powerup_Laser_shoot"),
      this.webgl.particles.emit("flash", {
        parent: this.dummy,
        position: hl.set(0, 0.1, 1.3),
        scale: 8,
        duration: 900,
        alpha: 2,
        commonColor: "power",
      });
    const t = this.webgl.quality.current.value >= 5,
      i = this.webgl.quality.fpsAverage.value > 57,
      n = t && i ? 1 : 0.5;
    e ||
      this.webgl.particles.emit("blockSmoke", {
        position: hl.set(this.spawn.position.x, 0.4, this.spawn.position.z),
        commonColor: "power",
        brightness: -0.3,
        alpha: 0.25,
        scale: 0.4,
        bigSmokeChance: 0.4,
        amountMin: 6 * n,
        amountMax: 12 * n,
        spread: 0.02,
        spreadVel: 0.025,
        sameColorTo: !0,
      });
  }
  updateActive() {
    const e = this.webgl.time.dt,
      t = 1.5;
    (this.main.scale.x = Math.min(1.2, this.main.scale.x + 0.15 * e * t)),
      (this.main.scale.y = Math.min(4, this.main.scale.y + 0.12 * e * t)),
      (this.halo.scale.x = Math.min(2.3, this.halo.scale.x + 0.16 * e * t)),
      (this.halo.scale.y = Math.min(7, this.halo.scale.y + 0.04 * e * t)),
      this.emitSmoke();
  }
  emitSmoke() {
    const e = this.webgl.time.dt;
    if (this.webgl.quality.current.value < 2) return;
    if (((this.lastSmoke += e), this.webgl.quality.current.value >= 5)) {
      if (Math.random() < ke(this.lastSmoke, 0, 250)) return;
    } else if (Math.random() < ke(this.lastSmoke, 20, 400)) return;
    this.lastSmoke = 0;
    const t = cl.set(0, 0, 0.1 * this.main.scale.y).add(this.main.position);
    this.webgl.particles.emit("blockSmoke", {
      position: t,
      commonColor: "power",
      brightness: -0.22,
      sameColorTo: !0,
      alpha: fe.randomFloat(0.02, 0.12),
      scale: fe.randomFloat(0.2, 0.4),
      bigSmokeChance: 0.8,
      amountMin: 1,
      amountMax: 1,
      spread: 0.02,
      spreadVel: 0.025,
    });
  }
  updateSpawnPosition() {
    const e = this.webgl.scene.bar;
    (this.spawn.position.x = e.base.position.x + e.size * Lg * this.spawnSide),
      (this.spawn.position.y = this.baseY),
      (this.spawn.position.z = e.base.position.z - 0.5),
      this.spawn.updateMatrixWorld();
  }
  updateSprites(e) {
    const t = !!(this.body && this.body.visible);
    if (((this.main.visible = this.halo.visible = t), !e && !this.body)) return;
    const i = e ? this.spawn : this.body;
    (this.main.position.x = i.position.x),
      (this.main.position.z = (e ? i.position.z : i.position.y) - 0.5),
      this.dummy.position.copy(this.main.position),
      this.dummy.updateMatrixWorld();
  }
  update() {
    !this.alive ||
      (this.updateSpawnPosition(),
      this.updateSprites(),
      this.delay > 0 ? this.updatePreshoot() : this.updateActive());
  }
  onBonusDisable() {
    this.dispose();
  }
  dispose() {
    !this.alive ||
      ((this.body.visible = !1),
      this.updateSprites(),
      this.body.cancel(),
      (this.alive = !1),
      this.webgl.game.bonuses.power.onDisable.unwatch(this.onBonusDisable),
      this.scene.projectilesPool.push(this));
  }
  beforeDestroy() {
    this.dispose();
  }
}
fa.PROJECTILE_DELAY = Eg * 0.001;
class Pg extends $e {
  init() {
    this.base = null;
    const e = this.webgl.playSound,
      t = this.webgl.stopSound;
    this.webgl.game;
    const i = this.webgl.game.bonuses,
      n = i.futureproof,
      r = i.simultaneity,
      a = i.scalability,
      o = i.mods,
      l = i.power,
      c = i.prebuilt;
    i.onPick.watch((h) => {
      !h ||
        e(
          h === a
            ? "sfx_powerup_extend_pickup"
            : h === r
            ? "sfx_powerup_multiBall_pickup"
            : h === o
            ? "sfx_powerup_rainbow_pickup"
            : h === l
            ? "sfx_powerup_Laser_pickup"
            : "sfx_powerup_shield_pickup"
        );
    }),
      n &&
        n.isActive.watch((h) => {
          h
            ? e("sfx_powerup_shield_active_loop", { unique: !0, loop: !0 })
            : h ||
              (e("sfx_powerup_shield_turnOff"),
              t("sfx_powerup_shield_active_loop"));
        }),
      c &&
        c.isActive.watch((h) => {
          h
            ? e("sfx_powerup_Fire_Loop", { unique: !0, loop: !0 })
            : h || t("sfx_powerup_Fire_Loop");
        }),
      o &&
        o.isActive.watch((h) => {
          this.webgl.setBgm({ rainbow: h });
        });
  }
}
const Vr = new L(),
  Rg = new L(),
  Ig = Ke([0, 0.7, 0.285, 0.975]),
  Fg = ["debugCamera"];
class zg extends n0 {
  get mixins() {
    return Fg;
  }
  init() {
    (this.base.matrixAutoUpdate = !1),
      (this.background = this.add(u0)),
      (this.ground = this.add(b0)),
      (this.walls = this.add(T0)),
      (this.borders = this.add(g0)),
      (this.controlTarget = this.add(O0)),
      (this.blocks = this.add(ig)),
      (this.bar = this.add(lg)),
      (this.balls = this.add(_g)),
      (this.lights = this.add(w0)),
      (this.gameCam = this.camera = this.add(U0)),
      (this.cloudParticles = this.add(Tg)),
      this.add(Pg),
      (this.webgl.uniforms.time.value = this.time = 0),
      this.base.updateMatrixWorld(!0),
      this.webgl.particles.addTo(this.base),
      (this.fireballInfluence = 0),
      (this.neonInfluence = 0),
      (this.bonuses = new Set()),
      (this.timeSinceLastBonus = 0),
      (this.blockSinceLastBonus = 0),
      (this.lastProjectileShoot = 0),
      (this.projectilesPool = [...new Array(8)].map(() => {
        const e = this.add(new fa());
        return this.remove(e), e;
      })),
      (this.flashScheme = null),
      (this.flashInfluence = 0),
      (this.gCircTime = 1e4),
      (this.gCircCenter = new me()),
      (this.gCircColor = new L()),
      (this.gCircDuration = 800),
      this.webgl.stores.isAutoplay.watchImmediate((e) => {
        this.webgl.physics.toggleAutoplay(e);
      });
  }
  flash(e) {
    (this.flashInfluence = 1),
      (this.flashScheme = this.webgl.stores.colorSchemes[e]);
  }
  onBallLost(e) {
    this.bar.onBallLost(),
      !this.webgl.stores.isAutoplay.value &&
        (this.flash("ballLost"),
        e && this.groundCircle(e.x, e.z, "ballLost", 1200, !0));
  }
  beforeUpdate() {
    this.updateColorScheme();
  }
  updateColorScheme() {
    const e = this.webgl.time.dt,
      t = this.webgl.time.pausedElapsed * 0.001,
      i = this.webgl.stores;
    let n = i.colorSchemeForce || i.colorScheme;
    const r = i.colorSchemes[n],
      a = this.webgl.uniforms.colors,
      o = this.webgl.game.bonuses.mods,
      l = o && o.isActive.value;
    this.neonInfluence = _s(this.neonInfluence, l ? 1 : 0, 0.08, e, 0.01);
    for (let c in r) {
      const h = a[c];
      if (!h) continue;
      const d = Vr.copy(r[c]);
      this.neonInfluence > 0 &&
        d.lerp(Rg.copy(d).offsetHSL(t, 0, -0.01), this.neonInfluence),
        h.value.lerp(d, 0.06);
    }
    if (this.flashInfluence > 0) {
      const c = this.flashScheme;
      for (let h in c) {
        const d = a[h];
        if (!d) continue;
        d.value.lerp(c[h], this.flashInfluence);
      }
      this.flashInfluence = _s(this.flashInfluence, 0, 0.08, e, 0.01);
    }
    a.ball.value.lerpColors(
      a.normalBall.value,
      a.fireBall.value,
      this.fireballInfluence
    ),
      a.ballLight.value.lerpColors(
        a.normalBallLight.value,
        a.fireBallLight.value,
        this.fireballInfluence
      );
  }
  update() {
    const e = this.webgl.time.dt;
    (this.time += e * 0.001),
      (this.webgl.uniforms.time.value = this.time),
      this.updateGroundCircle();
    const t = this.webgl.game.bonuses.prebuilt;
    this.fireballInfluence = yt(
      this.fireballInfluence,
      t && t.isActive.value ? 1 : 0,
      0.1,
      e
    );
    const i = this.webgl.game.bonuses.power;
    if (
      i &&
      i.isActive.value &&
      this.projectilesPool.length > 0 &&
      this.lastProjectileShoot + fa.PROJECTILE_DELAY < this.time
    ) {
      this.lastProjectileShoot = this.time;
      const n = this.projectilesPool.pop();
      this.add(n), n.arm();
    }
  }
  spawnBonus(e, t, i) {
    this.bonuses.add(this.add(bg, { type: e, x: t, z: i }));
  }
  removeBonuses() {
    Promise.resolve().then(() => {
      this.bonuses.forEach((e) => e.destroy());
    });
  }
  updateGroundCircle() {
    const e = this.ground.mat.uniforms,
      t = this.webgl.time.dt;
    if (this.gCircTime > this.gCircDuration + 50) return;
    const i = Jt(this.gCircTime / this.gCircDuration, 0, 1),
      n = Ig(i) * 5;
    (e.circRadius.needsUpdate = n !== e.circRadius.value),
      (e.circRadius.value = n);
    const r = 1 - i;
    (e.circAlpha.needsUpdate = r !== e.circAlpha.value),
      (e.circAlpha.value = r),
      this.gCircCenter.needsUpdate
        ? ((this.gCircCenter.needsUpdate = !1),
          e.circCenter.value.copy(this.gCircCenter),
          (e.circCenter.needsUpdate = !0))
        : (e.circCenter.needsUpdate = !1),
      this.gCircColor.needsUpdate
        ? ((this.gCircColor.needsUpdate = !1),
          e.circColor.value.copy(this.gCircColor),
          (e.circColor.needsUpdate = !0))
        : (e.circColor.needsUpdate = !1),
      (this.gCircTime += t);
  }
  groundCircle(e, t, i, n, r) {
    if (!r && this.gCircTime < this.gCircDuration - 50) return;
    n == null && (n = 900),
      (this.gCircDuration = n),
      (this.gCircTime = this.gCircRadius = 0),
      (this.gCircCenter.needsUpdate = !0),
      this.gCircCenter.set(
        e != null ? e : this.webgl.stores.levelWidth * 0.5,
        t != null ? t : this.webgl.stores.levelDepth * 0.5
      );
    let a;
    if (i === "ballLost") a = 16711680;
    else if (i === "ballLostMinor")
      a = Vr.set(16711680).offsetHSL(0, -0.1, -0.2).getHex();
    else if (i === "ground" || i === "groundMinor") {
      const o = i === "groundMinor" ? 0.2 : 0.32;
      a = Vr.copy(this.webgl.uniforms.colors.ground.value)
        .offsetHSL(0, 0.1, o)
        .getHex();
    } else {
      let o = this.webgl.game.bonuses.list[i];
      o || (o = Fc(Object.values(this.webgl.game.bonuses.list))), (a = o.color);
    }
    (this.gCircColor.needsUpdate = !0), this.gCircColor.set(a);
  }
}
Jm(He);
function Ug(s) {
  Object.assign(s, { init: t, preload: i, start: n, update: r, render: a }),
    Km();
  let e;
  async function t() {
    Object.assign(s.renderer.options, { antialias: !1, alpha: !0 }),
      await s.physics.init();
    const l = s.app.$device.browser === "safari";
    (s.renderer.forceWebGL1 = !!l),
      s.renderer.init(),
      Qm(s.renderer.instance),
      (s.uniforms = tn()),
      (s.defines = en()),
      s.renderer.instance.setClearColor(0, 1),
      (s.renderer.instance.shadowMap.enabled = !1),
      (s.renderer.instance.autoClear = !1),
      (s.time.clampTo60Fps = !1),
      s.stores.paused.watchImmediate((c) => {
        (s.time.isStarted = !c), s.physics.togglePause(c);
      });
  }
  async function i() {
    await s.resources.preload();
  }
  async function n() {
    const l = s.stores;
    s.game.init(),
      (s.controls = s.app.$controls),
      s.controls.listen(),
      s.particles.init(),
      (s.audio = s.app.$audio),
      (s.playSound = s.audio.playSound),
      (s.stopSound = s.audio.stopSound),
      (s.setBgm = s.audio.setBgm),
      s.app.$audio.init(),
      (s.defines.LVL_BLOCK_SCALE = Os(l.levelBlockScale)),
      (s.defines.LVL_BLOCK_INV_SCALE = Os(1 / l.levelBlockScale)),
      (s.defines.LVL_WIDTH = Os(l.levelWidth)),
      (s.defines.LVL_DEPTH = Os(l.levelDepth)),
      (s.defines.LVL_BOTTOM = Os(l.levelBottom)),
      await s.physics.setConfiguration({
        levelWidth: l.levelWidth,
        levelDepth: l.levelDepth,
        levelBallSize: l.levelBallSize,
        levelBlockScale: l.levelBlockScale,
      }),
      s.quality.current.watchImmediate(o),
      (e = s.scene = new zg()),
      s.scene.triggerInit(),
      s.renderer.resize(),
      s.time.init(),
      s.game.start(),
      (s.isJustAfterStart = !0);
  }
  function r() {
    s.game.update(),
      s.physics.poll(),
      s.controls.poll(),
      e && e.triggerUpdate(),
      s.physics.sync(),
      s.particles.update(),
      (s.isJustAfterStart = !1);
  }
  function a() {
    s.threeRenderer.clear(), e && e.triggerRender();
  }
  function o(l) {
    const c = s.renderer;
    s.stores;
    let h = s.app.$device.type.mobile,
      d = s.app.$device.type.phone;
    switch (l) {
      case 5:
        c.setMaxPixelCount(d ? "1080p" : h ? "1440p" : "3k"),
          c.setMaxPixelRatio(2),
          c.setMinPixelRatio(1.2);
        break;
      case 4:
        c.setMaxPixelCount(d ? "1080p" : "1440p"),
          c.setMaxPixelRatio(h ? 1.6 : 1.75),
          c.setMinPixelRatio(h ? 1 : 1.1);
        break;
      case 3:
        c.setMaxPixelCount(d ? "1080p" : "1440p"),
          c.setMaxPixelRatio(h ? 1.25 : 1.5),
          c.setMinPixelRatio(1);
        break;
      case 2:
        c.setMaxPixelCount("1080p"),
          c.setMaxPixelRatio(h ? 1 : 1.15),
          c.setMinPixelRatio(1);
        break;
      case 1:
        c.setMaxPixelCount("1080p"),
          c.setMaxPixelRatio(1),
          c.setMinPixelRatio(1);
        break;
      default:
        c.setMaxPixelCount("1080p"),
          c.setMaxPixelRatio(0.8),
          c.setMinPixelRatio(0.8);
        break;
    }
  }
}
const Bg = Number.MAX_SAFE_INTEGER,
  Ng = (1 / 27) * 1e3,
  kg = (1 / 33) * 1e3,
  Og = (1 / 57) * 1e3,
  Gg = (1 / 63) * 1e3,
  Vg = (1 / 110) * 1e3,
  Hg = (1 / 125) * 1e3;
function Wg(s) {
  let e = 16.67,
    t = !1,
    i = performance.now(),
    n = 16.6667,
    r = 0,
    a = 0,
    o = 0;
  const l = 13;
  let c = 0,
    h = 0,
    d = 0;
  s.hooks.afterInit.watchOnce(() => {
    s.viewport && s.viewport.visible.watch(() => (t = !0));
  }),
    s.hooks.afterFrame.watchOnce(() => {
      t = !0;
    });
  const u = (s.time = {
    dt: 0,
    limitedDt: 0,
    clampedDt: 0,
    stableDt: 16.6667,
    elapsed: 0,
    pausedElapsed: 0,
    frameNum: 0,
    isPaused: !0,
    isStarted: !0,
    init: m,
    start: f,
    stop: v,
    resume: g,
    pause: p,
    clampTo60Fps: !0,
    customLoop: null,
  });
  function m() {
    u.customLoop ? u.customLoop(w) : Tc.add(w),
      (u.isStarted = !0),
      (u.isPaused = !1);
  }
  function g() {
    u.isPaused = !1;
  }
  function p() {
    u.isPaused = !0;
  }
  function f() {
    u.isStarted = !0;
  }
  function v() {
    u.isStarted = !1;
  }
  function w(S) {
    const x = i;
    if (
      ((i = performance.now()),
      (S = i - x),
      S === 0 && (S = 16.6667),
      t &&
        ((S = 16.6667), (o = !0), (a = 0), (r = 0), (t = !1), (c = 0), (h = 0)),
      (u.limitedDt = S),
      u.clampTo60Fps)
    ) {
      if (
        ((c += S),
        h++,
        h > 1 ? (d = (d + S) / 2) : (d = S),
        !(c + d * 0.5 > l) && c < l)
      )
        return;
      h > 1 && (u.limitedDt = 16.666667), (S = c), (c = 0), (h = 0);
    }
    (a += S),
      a >= 1e3 ? ((o = !1), (n = (1 / r) * 1e3), (a = 0), (r = 0)) : r++,
      (e = Jt(o ? S : n, 4, 130)),
      e > kg && e < Ng
        ? (e = 33.3333334)
        : e > Gg && e < Og
        ? (e = 16.6666667)
        : e > Hg && e < Vg && (e = 8.3333334),
      (u.stableDt = ke(u.stableDt, e, t ? 1 : 0.08)),
      (u.clampedDt = Jt(S === void 0 ? 16.6667 : S, 1, 130)),
      (u.dt = S),
      (u.frameNum = (u.frameNum + 1) % Bg),
      (u.elapsed += S),
      u.isStarted && (u.isPaused || (u.pausedElapsed += S), s.frame());
  }
}
const ul = {
  "720p": 1280 * 720,
  "1080p": 1920 * 1080,
  "1440p": 2560 * 1440,
  "2k": 2560 * 1440,
  "3k": 2880 * 1620,
  "4k": 3840 * 2160,
  "5k": 5120 * 2880,
  "8k": 7680 * 4320,
};
function qg(s) {
  let e;
  const t = new L(16777215),
    i = it(new me()),
    n = it(1);
  let r = 1,
    a = 2,
    o = ul["3k"];
  const l = {
      antialias: !1,
      alpha: !1,
      depth: !0,
      stencil: !1,
      preserveDrawingBuffer: !1,
      powerPreference: "high-performance",
    },
    c = { beforeInit: Ti(), afterInit: Ti() },
    h = (s.renderer = {
      init: d,
      options: l,
      hooks: c,
      clearColor: t,
      resize: v,
      setMinPixelRatio: u,
      setMaxPixelRatio: m,
      setMaxPixelCount: g,
      drawingBufferSize: i,
      pixelRatio: n,
      forceWebGL1: !1,
    });
  function d() {
    (l.canvas = s.options.canvas), c.beforeInit.emit();
    const S = h.forceWebGL1 ? lc : oc;
    (e = new S(l)),
      (e.debug = { checkShaderErrors: !1 }),
      (s.renderer.instance = e),
      (s.threeRenderer = e),
      (h.isWebGL2 = !!e.capabilities.isWebGL2),
      e.getDrawingBufferSize(i.value),
      v(),
      e.setClearColor(t, 1),
      (e.autoClear = !1),
      (e.shadowMap.enabled = !1),
      (e.shadowMap.type = Wc),
      (e.info.autoReset = !1),
      s.hooks.beforeFrame.watch(() => e.info.reset()),
      c.afterInit.emit(),
      s.viewport.changed.watch(v);
  }
  function u(S) {
    r !== S && ((r = S), f());
  }
  function m(S) {
    a !== S && ((a = S), f());
  }
  function g(S) {
    if (typeof S == "string") {
      if (((S = ul[S.toLowerCase()]), !S)) return;
    } else S == null && (S = 0);
    (o = S), f();
  }
  let p = !1;
  function f() {
    p || ((p = !0), s.hooks.beforeFrame.watchOnce(v));
  }
  function v() {
    p = !1;
    let S = Jt(s.viewport.pixelRatio.value, r, a);
    const x = s.viewport.size.value,
      A = me.get();
    let D = S * x.x * x.y;
    o > 0 && D > o && (S /= D / o),
      e.getSize(A),
      e.getPixelRatio() !== S && e.setPixelRatio(S),
      A.equals(x) || e.setSize(x.x, x.y),
      w(),
      A.release();
  }
  function w() {
    const S = i.value,
      x = me.get();
    e.getDrawingBufferSize(x),
      Il(),
      x.equals(S) || i.set(S.copy(x), !0),
      n.set(e.getPixelRatio()),
      x.release(),
      Fl();
  }
}
function Xg(s) {
  const e = s.app.$viewport,
    t = it(new me(e.width, e.height)),
    i = it(t.value.x / t.value.y),
    n = it(e.pixelRatio),
    r = it(e.visible),
    a = Ti();
  s.viewport = {
    size: t,
    visible: r,
    ratio: i,
    pixelRatio: n,
    changed: a,
    frame: u,
  };
  let o = 0,
    l = 0,
    c = 0;
  const h = Ec(() => d(), 150);
  Lc(
    [e],
    () => {
      (s.options.canvas.style.width = e.width + "px"),
        (s.options.canvas.style.height = e.height + "px"),
        h();
    },
    { immediate: !0 }
  ),
    Dc(() => {
      r.set(e.visible);
    });
  function d() {
    (o = e.width), (l = e.height), (c = e.pixelRatio);
  }
  s.hooks.beforeFrame.watch(u);
  function u() {
    const m = t.value,
      g = m.x !== o || m.y !== l,
      p = n.value !== c;
    (!g && !p) ||
      (Il(),
      g && (m.set(o, l), t.set(m, !0), i.set(m.x / m.y)),
      p && n.set(c),
      a.emit(),
      Fl());
  }
}
function jg(s) {
  const e = "webgl_quality";
  let a = 58,
    o = 52,
    l = 30,
    c = 300,
    h = 300,
    d = 0,
    u = 0,
    m = !1,
    g = !1,
    p = 5,
    f = 5,
    v = 10;
  const w = new Float64Array(3);
  let S = 0;
  const x = new Float64Array([-1, -1, -1]);
  let A = 0,
    D = 0,
    R = !1;
  const b = it(60),
    E = it(60),
    k = it(1);
  s.hooks.afterInit.watchOnce(X), s.hooks.beforeStart.watchOnce(j);
  const B = (s.quality = {
    get pingPongScore() {
      return A;
    },
    get bigPingPongScore() {
      return D;
    },
    fps: b,
    fpsAverage: E,
    quality: k,
    current: k,
    pause: q,
    resume: G,
    reset: (Y = 300) => U(!1, Y),
    hardReset: (Y = 300) => U(!0, Y),
    updateQuality: he,
    limitQuality: (Y) => {
      (f = Jt(Y, 0, 5)), he();
    },
    setThresholds: ee,
  });
  function ee(Y = {}) {
    Y.high && (a = Y.high),
      Y.low && (o = Y.low),
      Y.critical && (l = Y.critical);
  }
  function re() {
    const Y = localStorage.getItem(e);
    return Y != null && !isNaN(Y) ? Y | 0 : null;
  }
  function I(Y) {
    localStorage.setItem(e, Y);
  }
  function q() {
    R = !0;
  }
  function G(Y = 150) {
    (R = !1), U(!1, Y);
  }
  function X() {
    const Y = s.app.$device,
      F = Y && Y.gpu ? Y.gpu.qualityIndex : 3,
      ze = re(),
      Me = ze != null ? ze : F;
    k.watch((we) => {
      Y && Y.updateQuality(we), I(we);
    }),
      se(Me),
      s.hooks.beforeFrame.watch(Q);
  }
  async function j() {
    s.viewport.visible.watch(() => U());
    const Y = s.viewport.size.value;
    let F = Y.x * Y.y;
    s.viewport.changed.watch(() => {
      const ze = s.viewport.size.value,
        Me = ze.x * ze.y;
      Math.abs(F - Me) < 2e5 ? U(!1, 300) : ((F = Me), U(!0, 300));
    });
  }
  function U(Y, F) {
    (m = !0), (g = g || Y), F && (c = F);
  }
  function V() {
    (d = 0),
      (u = 0),
      g && ((p = 5), (S = 0), (A = 0), (D = 0)),
      (h = c || 300),
      (m = g = !1),
      (c = 300);
  }
  function Q() {
    if (v > 0) return v--;
    const Y = s.time.limitedDt;
    if ((m && V(), h > 0)) return (h -= Y);
    (d += Y), u++, d >= 1e3 && $();
  }
  function $() {
    R || ((w[S++] = u), (S = S % (w.length + 1))),
      b.set(u),
      (u = 0),
      (d = d % 1e3),
      !R && S == w.length && he();
  }
  function se(Y) {
    (x[2] = x[1]), (x[1] = x[0]), (x[0] = Y), k.set(Y);
  }
  function he(Y) {
    let F = x[0];
    const ze = za(w);
    Y ? (F = Y) : ze <= l ? (F -= 2) : ze < o ? (F -= 1) : ze > a && (F += 1),
      (F = Jt(F, 0, Math.min(f, p))),
      F === x[0]
        ? ((A = Math.max(0, A - 0.2)), (D = Math.max(0, D - 0.2)))
        : F !== x[0] && F !== x[1]
        ? (A = 0)
        : F === x[1] && (A += 1),
      F === x[2] && F < x[0] && D++,
      A >= 2 && ((p = Math.min(x[1], x[0], p, f)), (A = 0)),
      D >= 2 && ((p = Math.min(za(x), p, f)), (D = 0)),
      (F = Math.min(F, p, f)),
      F !== k.value && se(F),
      E.set(ze);
  }
  return B;
}
function $g({
  renderer: s,
  format: e,
  depth: t,
  stencil: i,
  width: n,
  height: r,
}) {
  const a = me.get();
  n && r ? a.set(n, r) : s.getDrawingBufferSize(a);
  const o = new Ei(a.x, a.y, {
    minFilter: bt,
    magFilter: bt,
    format: e || Ot,
    depthBuffer: !!t,
    stencilBuffer: i !== null ? i : !!t,
  });
  return a.release(), (o.texture.generateMipmaps = !1), o;
}
const Yg = new ba(-1, 1, 1, -1, 0, 1);
Yg.parent = !0;
const Zg = new Float32Array([-2, 0, 0, -2, 2, 2]),
  Kg = new Vt();
Kg.setAttribute("position", new Et(Zg, 2));
const dl = () => {};
function Jg(s) {
  const e = { createBuffer: t, registerBuffer: dl, unregisterBuffer: dl };
  s.fbo = e;
  function t(i) {
    return $g(i);
  }
}
let $t = 0;
const fl = (s) => {
  let e = it();
  return Pc(() => e.set(s())), e;
};
function Qg(s) {
  const e = (s.stores = {
    isMenuOpen: fl(() => s.app.$stores.isMenuOpen),
    isRotateVisible: fl(() => s.app.$stores.isRotateVisible),
    isAutoplay: it(!1),
    currentIntroIndex: it(0),
    levelBallSize: 0.2,
    levelCenter: 0,
    levelBlockScale: 0,
    levelBlockBaseScale: 0.5,
    levelWidth: 0,
    levelDepth: 0,
    levelBottom: 0,
    renderOrder: {
      background: $t++,
      borders: $t++,
      bar: $t++,
      ball: $t++,
      block: $t++,
      ground: $t++,
      walls: $t++,
      cloudParticles: $t++,
      particles: $t++,
      particlesTop: $t++,
    },
    colorSchemes: ui,
    colorScheme: Object.keys(ui)[0],
    colorSchemeForce: !1,
  });
  e.paused = Rl([e.isMenuOpen, e.isRotateVisible], (t, i) => t || i);
}
var ev = "/assets/sprites.01850d5f11ae33ec.jpg",
  tv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ev },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  iv = JSON.parse(
    '{"frames":{"block_explodeA":{"frame":{"x":207,"y":938,"w":82,"h":83},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":82,"h":83},"sourceSize":{"w":82,"h":83},"anchor":{"x":0.5,"y":0.5}},"block_explodeB":{"frame":{"x":379,"y":930,"w":79,"h":92},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":79,"h":92},"sourceSize":{"w":79,"h":92},"anchor":{"x":0.5,"y":0.5}},"bonus_futureproof":{"frame":{"x":432,"y":836,"w":77,"h":82},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":77,"h":82},"sourceSize":{"w":77,"h":82},"anchor":{"x":0.5,"y":0.5}},"bonus_mods":{"frame":{"x":0,"y":636,"w":76,"h":77},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":76,"h":77},"sourceSize":{"w":76,"h":77},"anchor":{"x":0.5,"y":0.5}},"bonus_power":{"frame":{"x":195,"y":836,"w":59,"h":102},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":59,"h":102},"sourceSize":{"w":59,"h":102},"anchor":{"x":0.5,"y":0.5}},"bonus_prebuilt":{"frame":{"x":338,"y":836,"w":94,"h":94},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":94,"h":94},"sourceSize":{"w":94,"h":94},"anchor":{"x":0.5,"y":0.5}},"bonus_scalability":{"frame":{"x":122,"y":939,"w":85,"h":85},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":85,"h":85},"sourceSize":{"w":85,"h":85},"anchor":{"x":0.5,"y":0.5}},"bonus_simultaneity":{"frame":{"x":116,"y":836,"w":79,"h":103},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":79,"h":103},"sourceSize":{"w":79,"h":103},"anchor":{"x":0.5,"y":0.5}},"circle-glow":{"frame":{"x":76,"y":636,"w":73,"h":73},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":73,"h":73},"sourceSize":{"w":73,"h":73},"anchor":{"x":0.5,"y":0.5}},"circle-solid":{"frame":{"x":64,"y":952,"w":58,"h":58},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":58,"h":58},"sourceSize":{"w":58,"h":58},"anchor":{"x":0.5,"y":0.5}},"control_target":{"frame":{"x":388,"y":0,"w":346,"h":346},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":346,"h":346},"sourceSize":{"w":346,"h":346},"anchor":{"x":0.5,"y":0.5}},"flash":{"frame":{"x":0,"y":0,"w":388,"h":386},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":388,"h":386},"sourceSize":{"w":388,"h":386},"anchor":{"x":0.5,"y":0.5}},"outline_bonus":{"frame":{"x":571,"y":498,"w":149,"h":138},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":149,"h":138},"sourceSize":{"w":149,"h":138},"anchor":{"x":0.5,"y":0.5}},"outline_bonus_glow":{"frame":{"x":388,"y":346,"w":183,"h":174},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":183,"h":174},"sourceSize":{"w":183,"h":174},"anchor":{"x":0.5,"y":0.5}},"projectile-halo":{"frame":{"x":734,"y":250,"w":244,"h":331},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":244,"h":331},"sourceSize":{"w":244,"h":331},"anchor":{"x":0.495902,"y":0.263746}},"projectile":{"frame":{"x":254,"y":716,"w":84,"h":217},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":84,"h":217},"sourceSize":{"w":84,"h":217},"anchor":{"x":0.511905,"y":0.117051}},"smoke-tiny":{"frame":{"x":0,"y":952,"w":64,"h":59},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":3,"w":64,"h":59},"sourceSize":{"w":64,"h":64},"anchor":{"x":0.5,"y":0.5}},"smoke":{"frame":{"x":734,"y":0,"w":251,"h":250},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":251,"h":250},"sourceSize":{"w":251,"h":250},"anchor":{"x":0.5,"y":0.5}},"sparkleA":{"frame":{"x":978,"y":312,"w":42,"h":114},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":42,"h":114},"sourceSize":{"w":42,"h":114},"anchor":{"x":0.5,"y":0.5}},"sparkleB":{"frame":{"x":978,"y":250,"w":43,"h":62},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":43,"h":62},"sourceSize":{"w":43,"h":62},"anchor":{"x":0.5,"y":0.5}},"square-glow":{"frame":{"x":289,"y":933,"w":90,"h":90},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":90,"h":90},"sourceSize":{"w":90,"h":90},"anchor":{"x":0.5,"y":0.5}},"square-solid":{"frame":{"x":509,"y":520,"w":58,"h":58},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":58,"h":58},"sourceSize":{"w":58,"h":58},"anchor":{"x":0.5,"y":0.5}},"square-thin":{"frame":{"x":0,"y":836,"w":116,"h":116},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":116,"h":116},"sourceSize":{"w":116,"h":116},"anchor":{"x":0.5,"y":0.5}},"wave-glow":{"frame":{"x":720,"y":581,"w":135,"h":135},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":135,"h":135},"sourceSize":{"w":135,"h":135},"anchor":{"x":0.5,"y":0.5}},"wave-smoke":{"frame":{"x":571,"y":346,"w":153,"h":152},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":153,"h":152},"sourceSize":{"w":153,"h":152},"anchor":{"x":0.5,"y":0.5}},"wave-thin":{"frame":{"x":855,"y":711,"w":125,"h":125},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":125,"h":125},"sourceSize":{"w":125,"h":125},"anchor":{"x":0.5,"y":0.5}},"wave":{"frame":{"x":855,"y":581,"w":130,"h":130},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":130,"h":130},"sourceSize":{"w":130,"h":130},"anchor":{"x":0.5,"y":0.5}}},"meta":{"app":"https://www.codeandweb.com/texturepacker","version":"1.0","image":"sprites.jpg","format":"ALPHA","size":{"w":1024,"h":1024},"scale":"1","smartupdate":"$TexturePacker:SmartUpdate:00bdef6ab894236507cb8c38fed7905f:8ea6c5803fc0eba9e15af2c91c3894b6:542c44f83c6ad4bf02c7b1cf3a2122b1$"}}'
  ),
  sv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: iv },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  nv = "/assets/noise.bc6d914111ae33ec.png",
  rv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: nv },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function av() {
  let s = {};
  return { get: t, add: i, clear: n, list: e };
  function e() {
    return s;
  }
  function t(r, a = !0) {
    if (s[r]) return s[r];
    if (!!a) {
      for (const o in s) if (o.match(r)) return s[o];
    }
  }
  function i(r, a) {
    s[r] = a;
  }
  function n() {
    s = {};
  }
}
const sn = av();
function ov(s, e = {}) {
  return new Promise((t, i) => {
    const n = new XMLHttpRequest();
    (n.responseType = e.responseType || "arraybuffer"),
      (n.onreadystatechange = () => {
        n.readyState === 4 &&
          (n.readyState === 4 && n.status === 200
            ? (e.noCache || sn.add(s, n.response),
              e.onLoad && e.onLoad(n.response),
              t(n.response, n.status))
            : i(n.status));
      }),
      n.open("GET", s, !0),
      n.send();
  });
}
const $s = {},
  Dn = {};
function lv() {
  return sn.list();
}
function cv(s, e) {
  return sn.get(s, e);
}
function hv(s, e = {}) {
  if (sn.get(s)) return Promise.resolve();
  if (Dn[s]) return Dn[s];
  !s.startsWith("http") && !s.startsWith("/") && (s = "/" + s);
  let t;
  return (
    e.loader && $s[e.loader]
      ? (t = $s[e.loader].function(s, e))
      : (t = dv(s, e)),
    t && ((Dn[s] = t), t.then(() => (Dn[s] = null))),
    t
  );
}
function uv(s) {
  s.loader && (s = s.loader), ($s[s.name] = s);
}
function dv(s, e) {
  for (const t in $s) {
    const i = $s[t];
    if (i.extensions) {
      const n = i.extensions;
      for (let r = 0; r < n.length; r++) {
        const a = n[r];
        if (s.endsWith(a)) return i.function(s, e);
      }
    } else if (i.test && i.test(s, e)) return i.function(s, e);
  }
  return ov(s, e);
}
var Gs = { get: cv, list: lv, load: hv, registerLoader: uv };
function pa(s, e) {
  return new Promise((t) => {
    const i = new Image(),
      n = () => {
        const r = { node: i, url: s };
        e.onLoad && e.onLoad(r), sn.add(s, r), t(r);
      };
    (i.onload = n),
      (i.decoding = "async"),
      i.setAttribute("decoding", "async"),
      (i.src = s);
  });
}
pa.loader = {
  name: "image",
  extensions: [".jpg", ".png", ".webp", ".avif", ".gif", ".jpeg"],
  function: pa,
};
function fv(s) {
  return (e) => {
    const t = new Float32Array(e, 0, 1)[0],
      i = new Uint8Array(e, 4, t),
      n = new TextDecoder().decode(i),
      { struct: r, geometries: a } = JSON.parse(n);
    let o = 4 + t;
    for (let l in a) {
      let c = 0;
      const [h, d] = a[l],
        u = new Vt();
      u.name = h;
      for (let m = 0, g = r.length; m < g; m++) {
        const [p, f] = r[m],
          v = new Float32Array(e, o + m * 4, 1)[0],
          w = new Float32Array(e, o + g * 4 + c, v / 4);
        if (((c += v), p === "index")) u.setIndex([...w]);
        else {
          const S = new Gt(w, f);
          u.setAttribute(p, S);
        }
      }
      if (h === "ground") {
        u.computeBoundingBox();
        const m = u.attributes.position.array;
        let g = 0,
          p = 0,
          f = 0;
        for (let v = 0, w = m.length; v < w; v += 3) {
          const S = m[v],
            x = m[v + 2];
          S > g && (g = S), x < p && (p = x), x > f && (f = x);
        }
        (s.stores.levelCenter = g * 0.5),
          (s.stores.levelWidth = g),
          (s.stores.levelDepth = p),
          (s.stores.levelBottom = f),
          (s.stores.levelBlockScale = g / Bn);
      } else h === "bar" && u.computeBoundingBox();
      (s.geometries[h] = u), (o += d);
    }
  };
}
function pv(s) {
  const e = ae.threeRenderer.capabilities.isWebGL2,
    t = new Rt(s.img);
  return (
    s.flipY !== void 0 && (t.flipY = s.flipY),
    s.mipmaps !== void 0 && (t.generateMipmaps = !!s.mipmaps),
    s.red && (s.format = e ? Hl : Vl),
    s.alpha && (s.format = Gl),
    s.nearest && (t.magFilter = t.minFilter = mt),
    s.magFilter && (t.magFilter = s.magFilter),
    s.minFilter && (t.minFilter = s.minFilter),
    s.encoding && (t.encoding = s.encoding),
    s.mapping && (t.mapping = s.mapping),
    s.premultiplyAlpha && (t.premultiplyAlpha = !0),
    s.repeat
      ? ((t.wrapS = Xs), (t.wrapT = Xs))
      : (s.wrapS && (t.wrapS = s.wrapS), s.wrapT && (t.wrapT = s.wrapT)),
    s.format && (t.format = s.format),
    s.type && (t.type = s.type),
    (t.needsUpdate = !0),
    t
  );
}
function mv(s, e) {
  return function ({ node: t }) {
    const i = (s.textures[e[1]] = pv(Re({ img: t, flipY: !1 }, e[2])));
    s.uniforms.textures || (s.uniforms.textures = {}),
      (s.uniforms.textures[e[1]] = { value: i });
  };
}
var gv = "/assets/leveldesign.b38b6a9611ae33ec.dat",
  vv = "/assets/models.b7afae5b11ae33ec.dat",
  _v = "/assets/sprites.c4dd7af511ae33ec.json";
function pl(s, e, t, i = 0) {
  const n = e.size,
    r = e.scale / Math.max(n.w, n.h),
    a = {},
    o = s.anchor || s.pivot || { x: 0.5, y: 0.5 };
  t.split("_")[0] === "hint" && ((o.x = 0), (o.y = 0));
  const h = s.frame,
    d = s.sourceSize,
    u = s.spriteSourceSize;
  a.id = t;
  const m = t.split("/");
  (a.sequence = m.pop()),
    (a.group = m.join("/")),
    (a.frameIndex = i),
    (a.texCoords = new Float32Array([
      h.x / n.w,
      (n.h - h.y - h.h) / n.h,
      h.w / n.w,
      h.h / n.h,
    ])),
    (a.meshCoords = new Float32Array([
      u.w * 0.5 + u.x - d.w * o.x,
      -(u.h * 0.5 + u.y - d.h * o.y),
      u.w,
      u.h,
    ]));
  for (let g = 0, p = a.meshCoords.length; g < p; g++) a.meshCoords[g] *= r;
  return (
    (a.anchor = o),
    (a.sourceSize = s.sourceSize),
    (a.spriteSourceSize = s.spriteSourceSize),
    (a.vertices = s.vertices),
    (a.verticesUV = s.verticesUV),
    (a.triangles = s.triangles),
    a
  );
}
function xv(s) {
  const e = { sprites: {}, meta: s.meta },
    t = s.frames;
  s.animations || (s.animations = {});
  for (const i in s.animations) {
    const n = s.animations[i],
      r = (e.sprites[i] = []);
    for (let a = 0, o = n.length; a < o; a++) {
      const l = t[n[a]];
      delete t[n[a]], r.push(pl(l, s.meta, i, a));
    }
  }
  for (const i in t) {
    const n = t[i];
    let r = n.filename ? n.filename.toString() : i;
    r = r.split("/").pop();
    const a = r.replace(/[^a-zA-Z0-9-_-]/g, "").replace("png", ""),
      o = (e.sprites[a] = []);
    delete t[i], o.push(pl(n, s.meta, a));
  }
  return e;
}
const yv = Tl({ "/src/assets/canvas/noise.png": rv }),
  bv = Tl({
    "/src/assets/canvas/sprites.jpg": tv,
    "/src/assets/canvas/sprites.json": sv,
  }),
  ml = Al.select;
function wv(s) {
  (s.atlas = {}),
    (s.textures = {}),
    (s.geometries = {}),
    (s.resources = {
      preload: e,
      atlas: s.atlas,
      textures: s.textures,
      geometries: s.geometries,
    });
  async function e() {
    await Al.test(), Gs.registerLoader(pa);
    const t = [];
    t.push(Gs.load(vv, { onLoad: fv(s) })),
      t.push(
        Gs.load(_v, {
          responseType: "json",
          onLoad: (i) => {
            Object.assign(s.atlas, xv(i));
          },
        })
      ),
      t.push(
        ...[
          [ml(bv), "sprites", { red: !0 }],
          [ml(yv), "noise", { repeat: !0 }],
        ].map((i) => Gs.load(i[0], { onLoad: mv(s, i) }))
      ),
      t.push(Gs.load(gv, { onLoad: $0(s) })),
      t.forEach((i) => s.app.$preloader.task(i)),
      await Promise.all(t),
      (s.atlas.meta.image = s.textures.sprites),
      (s.atlas.texture = s.textures.sprites);
  }
}
const Sv = Math.PI * 2,
  Mv = new C(),
  Cv = new L(16777215);
var Av = {
  beforeEmit: Ev,
  beforeAlloc: Tv,
  particleEmitted: Lv,
  particleUpdated: Dv,
};
function Tv(s) {
  if (
    ((s.batcherName = "emissive"),
    (s.amount = s.largeAmount ? fe.randomInt(5, 15) : fe.randomInt(3, 9)),
    (s.brightness = s.brightness || 0),
    s.commonColor)
  ) {
    const e = ae.uniforms.colors[s.commonColor];
    e && (s.commonColor = e.value);
  }
}
function Ev(s = {}) {
  s.position || (s.position = Mv),
    (s.scale = s.scale || 1),
    (s.angOffset = fe.randomFloat(0, Sv));
}
function Lv(
  s,
  { position: e, colorFrom: t, scale: i = 1, spread: n = 1, largeAmount: r }
) {
  (s.billboard = !0),
    (s.spriteId = Math.random() > 0.4 ? "block_explodeA" : "block_explodeB"),
    (s.duration = fe.randomFloat(400, 900)),
    (s.angle = fe.randomFloat(0, Math.PI * 2)),
    (s.angVelocity = fe.randomFloat(0.01, 0.03));
  const a = fe.randomFloat(-1, 1) * n,
    o = fe.randomFloat(-1, 1) * n;
  (s.gravity.y = fe.randomFloat(0.004, 0.01)),
    s.velocity.set(a * 0.05, fe.randomFloat(-1, 1) * 0.09, o * 0.05),
    s.velocityDrag.setScalar(0.9),
    (s.useVelocityDragMult = !0),
    s.position.set(a * 0.2, fe.randomFloat(-0.3, 0.4), o * 0.2).add(e),
    s.scaleFrom.setScalar(
      (r ? fe.randomFloat(1, 3.2) : fe.randomFloat(0.9, 2)) * i
    ),
    s.scaleTo.setScalar(0),
    (s.alphaFrom = 1),
    (s.alphaTo = 1);
  const l = fe.randomFloat(0.2, 0.5);
  s.colorFrom.copy(t || Cv).multiplyScalar(l), s.colorTo.setScalar(0);
}
function Dv(s, e) {
  e.commonColor &&
    s.colorFrom.copy(e.commonColor).offsetHSL(0, 0, e.brightness);
}
var Pv = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Av }, Symbol.toStringTag, {
    value: "Module",
  })
);
const Rv = Math.PI * 2,
  Iv = new C(),
  Fv = new L(16777215);
var zv = {
  beforeEmit: Bv,
  beforeAlloc: Uv,
  particleEmitted: Nv,
  particleUpdated: kv,
};
function Uv(s) {
  if (
    ((s.batcherName = "normal"),
    (s.amount = fe.randomInt(s.amountMin || 6, s.amountMax || 10)),
    (s.brightness = s.brightness || 0),
    s.commonColor)
  ) {
    const e = ae.uniforms.colors[s.commonColor];
    e && (s.commonColor = e.value);
  }
}
function Bv(s = {}) {
  s.position || (s.position = Iv),
    (s.scale = s.scale || 1),
    (s.angOffset = fe.randomFloat(0, Rv));
}
function Nv(
  s,
  {
    position: e,
    colorFrom: t,
    alpha: i = 1,
    scale: n = 1,
    spread: r = 0.1,
    spreadVel: a = 0.03,
    bigSmokeChance: o = 0.6,
  }
) {
  const l = Math.random() <= o;
  (s.billboard = !0),
    (s.spriteId = l ? "smoke" : "smoke-tiny"),
    (s.duration = fe.randomFloat(900, 900)),
    (s.angle = fe.randomFloat(0, Math.PI * 2)),
    (s.angVelocity = fe.randomFloat(0.01, 0.03));
  const c = fe.randomFloat(-1, 1),
    h = fe.randomFloat(-1, 1);
  (s.gravity.y = fe.randomFloat(0.004, 0.01)),
    s.velocity.set(c * a, fe.randomFloat(-0.1, 1) * 0.1, h * a),
    s.velocityDrag.setScalar(0.87),
    (s.useVelocityDragMult = !0),
    s.position.set(c * r, fe.randomFloat(-0.3, 0.4) - 0.2, h * r).add(e);
  let d = l ? fe.randomFloat(5, 7) : fe.randomFloat(9, 13);
  (d *= n),
    s.scaleFrom.setScalar(d),
    s.scaleTo.setScalar(d * 1.5),
    (s.alphaFrom = (l ? 1 : 0.5) * i),
    (s.alphaTo = 0);
  const u = fe.randomFloat(0.5);
  s.colorFrom.copy(t || Fv).multiplyScalar(u), s.colorTo.copy(s.colorFrom);
}
function kv(s, e) {
  e.commonColor &&
    (s.colorFrom.copy(e.commonColor).offsetHSL(0, 0, e.brightness),
    s.colorTo.copy(s.colorFrom),
    e.sameColorTo || s.colorTo.offsetHSL(0, -0.2, 0.2));
}
var Ov = Object.freeze(
  Object.defineProperty({ __proto__: null, default: zv }, Symbol.toStringTag, {
    value: "Module",
  })
);
new C();
const Gv = new L(1, 1, 1),
  Vv = Ke([0, 0.965, 0.17, 0.985]),
  Hv = Ke([0.475, 0.105, 0.05, 0.97]);
var Wv = { beforeAlloc: qv, particleEmitted: Xv, particleUpdated: jv };
function qv(s) {
  if (
    ((s.amount = 1),
    (s.batcherName = "sdfEmissive"),
    (s.brightness = s.brightness || 0),
    s.commonColor)
  ) {
    const e = ae.uniforms.colors[s.commonColor];
    e && (s.commonColor = e.value);
  }
}
function Xv(
  s,
  {
    position: e,
    delay: t = 0,
    commonColor: i,
    brightness: n,
    largeAmount: r,
    isBorder: a = !1,
  }
) {
  (s.spriteId = a ? "square-thin" : "square-solid"),
    (s.duration = a ? 1500 : 700),
    s.rotation.set(Math.PI * -0.5, 0, 0),
    e && s.position.copy(e),
    (s.position.y -= 0.4),
    (s.scaleEase = Vv),
    a
      ? (s.scaleFrom.setScalar(3), s.scaleTo.setScalar(16))
      : (s.scaleFrom.setScalar(8), s.scaleTo.setScalar(26)),
    (s.alphaFrom = 1),
    (s.alphaTo = 1),
    (s.colorEase = Hv),
    s.colorFrom.copy(Gv).multiplyScalar(0.2),
    s.colorTo.copy(s.colorFrom).multiplyScalar(0),
    (s.delay = t),
    !a &&
      (ae.particles.emit("blockWave", {
        position: e,
        delay: t,
        brightness: n,
        commonColor: i,
        isBorder: !0,
      }),
      ae.particles.emit("flash", {
        position: s.position,
        rotation: s.rotation,
        duration: 900,
        scale: r ? 16 : 14,
        alpha: r ? 0.8 : 0.6,
      }));
}
function jv(s, e) {
  e.commonColor &&
    s.colorFrom.copy(e.commonColor).offsetHSL(0, 0, e.brightness);
}
var $v = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Wv }, Symbol.toStringTag, {
    value: "Module",
  })
);
const Hr = va();
new Xe();
new C();
new L(1, 1, 1);
Ke([0, 0.965, 0.17, 0.985]);
Ke([0.78, 0.015, 0.685, 0.99]);
var Yv = { beforeAlloc: Zv, particleEmitted: Kv, particleUpdated: Jv };
function Zv(s) {
  s.commonColor && (s.commonColor = ae.uniforms.colors[s.commonColor].value),
    (s.amount = fe.randomInt(s.minAmount || 1, s.maxAmount || 1)),
    (s.batcherName = Math.random() < 0.2 ? "emissive" : "normal"),
    (s.isEmissive = s.batcherName === "emissive"),
    s.brightness || (s.brightness = 0);
}
const gs = fe.randomFloat,
  fs = (s) => gs(-s, s);
function mc(s, e, t, i) {
  s.colorFrom.copy(e).multiplyScalar(0.4).offsetHSL(0, 0, 0.1),
    s.colorTo
      .copy(e)
      .multiplyScalar(i ? 0 : 0.4)
      .offsetHSL(-0.3, 0, 0);
}
function Kv(
  s,
  {
    position: e,
    velocity: t,
    isEmissive: i,
    brightness: n,
    commonColor: r,
    minDuration: a = 250,
    maxDuration: o = 900,
  }
) {
  (s.seed = Math.random() * 100),
    (s.spriteId = "flash"),
    (s.billboard = !0),
    (s.duration = gs(a, o));
  const l = ct(t.length(), 0, 0.3);
  s.duration = ke(s.duration, s.duration * 0.2, l);
  const c = 0.1;
  s.position.set(fs(c), fs(c), fs(0)).add(e),
    t && s.velocity.copy(t).multiplyScalar(0.25),
    (s.velocity.x += fs(0.01)),
    (s.velocity.y += fs(0.01)),
    (s.velocity.z += fs(0.01)),
    (s.angle = gs(0, Math.PI * 2)),
    (s.isIncoherent = Math.random() < 0.3),
    (s.sparkleRandFreq = gs(0.005, 0.01)),
    (s.sparkleRandAmp = gs(0.002, 0.006)),
    s.scaleFrom.setScalar(gs(1.8, 2.7)),
    (s.scaleTo = s.scaleFrom.clone().multiplyScalar(1.5));
  const h = 1.5;
  (s.alphaFrom = h), (s.alphaTo = i ? h : 0), mc(s, r, n, i);
}
function Jv(s, e) {
  e.commonColor && mc(s, e.commonColor, e.brightness, e.isEmissive);
  const t = s.sparkleRandFreq,
    i = s.sparkleRandAmp,
    n = ae.time.pausedElapsed;
  (s.position.x += Hr(s.seed * 2 + 9, n * t) * i),
    (s.position.y += Hr(s.seed + 50, 30 + n * t) * i),
    (s.position.z += Hr(-s.seed + 10, 3 + -n * t) * i);
}
var Qv = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Yv }, Symbol.toStringTag, {
    value: "Module",
  })
);
const e_ = new L(1, 1, 1),
  ma = new L(0, 0, 0),
  t_ = new C(),
  i_ = Rc.outCubic;
var s_ = { beforeAlloc: n_, particleEmitted: r_, particleUpdated: a_ };
function n_(s) {
  if (
    ((s.amount = 1),
    (s.batcherName = s.batcherName || s.batcherID || "emissive"),
    (s.brightness = s.brightness || 0),
    s.commonColor)
  ) {
    const e = ae.uniforms.colors[s.commonColor];
    e && (s.commonColor = e.value);
  }
}
function r_(
  s,
  {
    position: e,
    scale: t,
    color: i,
    commonColor: n,
    sprite: r,
    angle: a,
    rotation: o,
    duration: l,
    alpha: c = 1,
    newAlpha: h = 1,
  }
) {
  (s.spriteId = r || "flash"),
    (s.billboard = !o),
    (s.duration = l || 1e3),
    a && (s.angle = a),
    o && s.rotation.copy(o),
    s.position.copy(e || t_),
    (t = t || 1);
  const d = t.x || t,
    u = t.y || t;
  s.scaleFrom.set(d, u),
    s.scaleTo.copy(s.scaleFrom).multiplyScalar(1.5),
    (s.alphaFrom = 1),
    (s.alphaTo = 1),
    (s.colorEase = Ke(i_)),
    s.colorFrom.lerpColors(ma, n || i || e_, c * h),
    s.colorTo.copy(ma);
}
function a_(s, e) {
  e.commonColor &&
    (e.newAlpha
      ? s.colorFrom.lerpColors(ma, e.commonColor, e.newAlpha)
      : s.colorFrom.copy(e.commonColor),
    s.colorFrom.offsetHSL(0, 0, e.brightness));
}
var o_ = Object.freeze(
  Object.defineProperty({ __proto__: null, default: s_ }, Symbol.toStringTag, {
    value: "Module",
  })
);
new Xe();
new C();
const l_ = new L(1, 1, 1);
Ke([0, 0.965, 0.17, 0.985]);
const c_ = Ke([0.475, 0.105, 0.05, 0.97]);
var h_ = {
  beforeAlloc: u_,
  particleEmitted: f_,
  particleUpdated: p_,
  particleReleased: d_,
};
function u_(s) {
  s.commonColor && (s.commonColor = ae.uniforms.colors[s.commonColor].value),
    (s.amount = fe.randomInt(s.minAmount || 2, s.maxAmount || 6)),
    (s.batcherName = "sdfEmissive"),
    s.brightness || (s.brightness = 0);
}
function d_(s) {
  (s.angSign = 1), (s.bounce = 1), (s.brightnessOffset = 0);
}
function f_(
  s,
  {
    position: e,
    impactAngle: t,
    minScale: i = 0.5,
    maxScale: n = 1.1,
    angleSpread: r = 90,
    maxDistance: a = 1,
    brightnessOffsetMin: o = 0,
    brightnessOffsetMax: l = 0,
    yOffset: c = 0.15,
    minVelY: h = 0.04,
    maxVelY: d = 0.115,
    minDuration: u = 1800,
    maxDuration: m = 2200,
    alpha: g,
  }
) {
  (s.spriteId = "square-solid"),
    (s.duration = fe.randomFloat(u, m)),
    (s.billboard = !0),
    s.position.copy(e),
    (s.position.y += c),
    (s.angle = Math.random() * Math.PI),
    (s.angVelocity = 0);
  const p = fe.randomFloat(i, n);
  (s.bounce = ke(0.95, 0.8, ct(p, 0.5, 2.5))),
    s.scaleFrom.setScalar(p),
    s.scaleTo.setScalar(p),
    (s.brightnessOffset = fe.randomFloat(o, l));
  const f = 0.21,
    v = fe.randomFloat(0, 1) * a,
    w = fe.randomFloat(1, 2),
    S = t ? fe.randomFloat(t - r, t + r) : fe.randomFloat(0, Math.PI * 2);
  s.velocity.set(Math.cos(S) * v, w, Math.sin(S) * v),
    s.velocity.normalize().multiplyScalar(f),
    (s.velocity.y += fe.randomFloat(h, d)),
    (s.angSign = s.velocity.x > 0 ? -1 : 1),
    s.velocityDrag.setScalar(0.96),
    (s.useVelocityDragMult = !0),
    s.velocity.applyQuaternion,
    s.gravity.set(0, -0.2, 0),
    (s.alphaFrom = 1),
    (s.alphaTo = 1),
    (s.colorEase = c_),
    s.colorFrom.copy(l_).multiplyScalar(1),
    g && s.colorFrom.multiplyScalar(g),
    s.colorTo.copy(s.colorFrom).multiplyScalar(1),
    (s.delay = 0);
}
function p_(s, e) {
  const t = s.velocity.y + s.gravity.y;
  s.scale.multiplyScalar(1 - ct(s.progress, 0.7, 1)),
    e.commonColor &&
      (s.colorFrom
        .copy(e.commonColor)
        .offsetHSL(0, 0, s.brightnessOffset + e.brightness),
      e.alpha && s.colorFrom.multiplyScalar(e.alpha),
      s.colorTo.copy(s.colorFrom)),
    s.colorTo.multiplyScalar(1 - ct(s.progress, 0.8, 1)),
    s.position.y <= 0
      ? ((s.position.y = 0),
        (s.velocity.x *= 0.98),
        (s.velocity.y *= 0.98),
        t < 0 &&
          ((s.velocity.y = (t + s.gravity.y) * -s.bounce),
          (s.velocity.x *= 0.9),
          (s.velocity.z *= 0.9),
          s.velocity.y < 0.1 && (s.velocity.y = 0)))
      : (s.angle += Math.abs(s.velocity.y * 0.5) * s.angSign);
}
var m_ = Object.freeze(
  Object.defineProperty({ __proto__: null, default: h_ }, Symbol.toStringTag, {
    value: "Module",
  })
);
const Pn = va();
new Xe();
new C();
new L(1, 1, 1);
Ke([0, 0.965, 0.17, 0.985]);
const g_ = Ke([0.78, 0.015, 0.685, 0.99]);
var v_ = { beforeAlloc: __, particleEmitted: x_, particleUpdated: y_ };
function __(s) {
  s.commonColor && (s.commonColor = ae.uniforms.colors[s.commonColor].value),
    (s.amount = fe.randomInt(s.minAmount || 1, s.maxAmount || 1)),
    (s.batcherName = "emissive"),
    s.brightness || (s.brightness = 0);
}
const Nt = fe.randomFloat,
  Wr = (s) => Nt(-s, s);
function x_(
  s,
  { position: e, velocity: t, minDuration: i = 500, maxDuration: n = 1200 }
) {
  (s.seed = Math.random() * 100),
    (s.spriteId = "sparkleB"),
    (s.billboard = !0),
    (s.duration = Nt(i, n)),
    Math.random() < 0.04
      ? (s.duration += 1e3)
      : Math.random() < 0.1 && (s.duration += 500);
  const r = 0.2;
  s.position.set(Wr(r), 0.2 + Wr(r), Wr(r)).add(e),
    t && s.velocity.copy(t).multiplyScalar(Nt(0.9, 1.4)),
    (s.angle = Nt(0, Math.PI * 2)),
    (s.isIncoherent = Math.random() < 0.3),
    (s.sparkleRandFreq = Nt(0.0015, 0.004)),
    (s.sparkleRandAmp = Nt(0.002, 0.01)),
    s.scaleFrom.set(Nt(0.5, 0.7), Nt(0.4, 0.6)),
    s.scaleFrom.multiplyScalar(Nt(1.5, 2)),
    Math.random() < 0.3 && s.scaleFrom.multiplyScalar(1.6),
    (s.scaleTo = s.scaleFrom.clone()),
    (s.scaleTo.y += Nt(0.4, 0.6)),
    Math.random() < 0.4 && (s.scaleTo.y += Nt(0.5, 0.8)),
    (s.colorEase = g_),
    s.colorTo.copy(s.colorFrom).multiplyScalar(0);
}
function y_(s, e) {
  const n = ae.time.pausedElapsed;
  s.angle += Pn(s.seed, n * 0.1) * 0.02;
  const r = s.angle + Math.PI * 0.5;
  s.position.x += Math.cos(r) * 0.01;
  const a = Math.sin(r) * 0.01;
  s.isIncoherent ? (s.position.z += a) : (s.position.y += a);
  const o = s.sparkleRandFreq,
    l = s.sparkleRandAmp;
  (s.position.x += Pn(s.seed * 2 + 9, n * o) * l),
    (s.position.y += Pn(s.seed + 50, 30 + n * o) * l),
    (s.position.z += Pn(s.seed + 10, -20 + -n * o) * l),
    e.commonColor &&
      (s.colorFrom.copy(e.commonColor).offsetHSL(0, 0, e.brightness),
      s.colorTo.copy(s.colorFrom).multiplyScalar(0));
}
var b_ = Object.freeze(
  Object.defineProperty({ __proto__: null, default: v_ }, Symbol.toStringTag, {
    value: "Module",
  })
);
const gl = new C(),
  w_ = new L(1, 1, 1),
  S_ = Ke([0, 0.965, 0.17, 0.985]),
  M_ = Ke([0.475, 0.105, 0.05, 0.97]);
let vl = 0;
const _l = [
  { angle: 0, offset: new C(0, 0, 0.4) },
  { angle: -Math.PI * 0.5, offset: new C(-0.002, 0, 0) },
  { angle: 0, offset: new C(0, 0, -0.002) },
  { angle: Math.PI * 0.5, offset: new C(0.002, 0, 0) },
];
var C_ = { beforeAlloc: A_, particleEmitted: T_ };
function A_(s) {
  const e = performance.now();
  if (!s.rotation && e - vl < 120) {
    s.amount = 0;
    return;
  }
  (vl = e), (s.amount = 1), (s.batcherName = "sdfEmissive");
}
function T_(
  s,
  {
    position: e,
    side: t,
    scaleFrom: i = 2,
    scaleTo: n = 10,
    rotation: r,
    alpha: a = 1,
    delay: o = 0,
    borderDepths: l = !1,
  }
) {
  const c = _l[t] || _l[0];
  (s.spriteId = "wave-thin"),
    (s.duration = 900),
    (s.rotation.y = c.angle),
    r && s.rotation.copy(r),
    (s.fx = 1),
    e && s.position.copy(e),
    r || s.position.add(c.offset),
    r || (s.position.y += 0.2),
    (s.scaleEase = S_),
    s.scaleFrom.setScalar(i),
    s.scaleTo.setScalar(n),
    (s.alphaFrom = 1),
    (s.alphaTo = 1),
    (s.colorEase = M_),
    s.colorFrom.copy(w_).multiplyScalar(a),
    s.colorTo.copy(s.colorFrom).multiplyScalar(0),
    (s.delay = o),
    !r &&
      (l
        ? ae.particles.emit("flash", {
            position: gl.copy(s.position),
            rotation: s.rotation,
            duration: 700,
            scale: 10,
            alpha: 0.8,
          })
        : ae.particles.emit("flash", {
            position: gl.copy(s.position),
            duration: 900,
            scale: 12,
            alpha: 0.8,
          }));
}
var E_ = Object.freeze(
  Object.defineProperty({ __proto__: null, default: C_ }, Symbol.toStringTag, {
    value: "Module",
  })
);
const yi = (s) => Jt(s, 0, 1),
  xl = Ke([0.7, 0.3, 0.2, 0.2]),
  L_ = new Xe(),
  D_ = 1 / Number.MAX_SAFE_INTEGER,
  qr = {};
let Xr;
class P_ extends Tt {
  constructor(e) {
    (e.useEuler = !0),
      super(e),
      Xr || (Xr = Qs()),
      this.batcher && this.batcher.removeInstance(this),
      (this.spriteId = null),
      (this.spriteFrame = 0),
      (this.spriteFrameDuration = 50),
      (this.spriteLoop = !1),
      (this.spriteAutoplay = !1),
      (this.rotation = new ht()),
      (this.delay = 0),
      (this.duration = 0),
      (this.age = 0),
      (this.progress = 0),
      (this.onProgress = null),
      (this.onComplete = null),
      (this.onEnd = null),
      (this.angVelocity = 0),
      (this.angVelocityDrag = 0),
      (this.velocity = new C()),
      (this.velocityDrag = new C()),
      (this.velocityDragMult = new C()),
      (this.useVelocityDragMult = !1),
      (this.scaleWithVel = !1),
      (this.gravity = new C()),
      (this.scaleFrom = new me()),
      (this.scaleTo = new me()),
      (this.colorFrom = new L()),
      (this.colorTo = new L()),
      (this.alphaFrom = 1),
      (this.alphaTo = 1),
      (this.alive = !1),
      (this.killable = !1),
      (this.progressEase = yi),
      (this.scaleEase = yi),
      (this.alphaEase = yi),
      (this.colorEase = yi),
      (this.scaleVelEase = xl);
  }
  reset() {
    this.alive && this.onRelease && this.onRelease(),
      this.preset &&
        this.preset.particleReleased &&
        this.preset.particleReleased(this, this.presetOptions),
      (this.parent = null),
      (this.preset = qr),
      (this.spriteId = null),
      (this.spriteFrame = 0),
      (this.spriteFrameDuration = 50),
      (this.spriteLoop = !1),
      (this.spriteAutoplay = !1),
      (this.billboard = !1),
      (this.fx = 0),
      (this.angle = 0),
      this.quaternion.copy(L_),
      this.rotation.set(0, 0, 0),
      this.position.setScalar(0),
      this.scale.setScalar(1),
      (this.delay = 0),
      (this.duration = 1e3),
      (this.age = 0),
      (this.progress = 0),
      (this.onProgress = null),
      (this.onComplete = null),
      (this.onRelease = null),
      (this.angVelocity = 0),
      (this.angVelocityDrag = 0),
      this.velocity.setScalar(0),
      this.velocityDrag.setScalar(0),
      (this.useVelocityDragMult = !1),
      (this.scaleWithVel = !1),
      (this.scaleInOut = !1),
      this.gravity.setScalar(0),
      this.scaleFrom.setScalar(1),
      this.scaleTo.setScalar(1),
      this.colorFrom.set(16777215),
      this.colorTo.set(16777215),
      (this.alphaFrom = 1),
      (this.alphaTo = 1),
      (this.alphaInOut = !1),
      (this.progressEase = yi),
      (this.scaleEase = yi),
      (this.alphaEase = yi),
      (this.colorEase = yi),
      (this.scaleVelEase = xl);
  }
  emit(e, t, i, n) {
    this.reset(),
      (this.batcher = e),
      (this.spriteId = this.killable = !1),
      (this.alive = !0),
      (this.index = n),
      (this.billboard = i.billboard || !1),
      (this.fx = i.fx || 0),
      (this.parent = i.parent),
      (this.preset = t || qr),
      (this.presetOptions = i || qr),
      this.preset.particleEmitted &&
        this.preset.particleEmitted(this, this.presetOptions),
      this.sprite.setAtlas(this.batcher.atlas),
      this.sprite.change({
        id: this.spriteId,
        frame: this.spriteFrame,
        frameDuration: this.spriteFrameDuration,
        loop: this.spriteLoop,
        autoplay: this.spriteAutoplay,
      }),
      this.batcher.addInstance(this),
      this.sprite.update(1),
      this.update(0);
  }
  kill() {
    this.killable &&
      this.preset.particleKilled &&
      this.preset.particleKilled(this, this.presetOptions),
      this.killable && this.onComplete && this.onComplete(),
      this.batcher &&
        (this.batcher.removeInstance(this), (this.batcher = null)),
      this.reset(),
      (this.progress = 1),
      (this.alive = !1),
      (this.killable = !1);
  }
  update() {
    if (!this.alive || this.killable) return;
    if (this.progress >= 1) return (this.killable = !0);
    let e = Xr.time.stableDt;
    if (this.delay > 0)
      if (((this.delay -= e), this.delay > 0)) {
        (this.alpha = 0), this.scale.setScalar(D_);
        return;
      } else e = Math.max(0, e + this.delay);
    super.update(e);
    const t = Math.max(Math.min(e / 16.666666667, 1.5), 0.5);
    if (
      ((this.age += e),
      (this.progress = this.progressEase(Jt(this.age / this.duration, 0, 1))),
      this.preset.particleUpdate)
    )
      this.preset.particleUpdate(this, this.presetOptions);
    else {
      if (this.useVelocityDragMult)
        this.velocity.multiply(this.velocityDrag),
          this.velocity.lengthSq < 1e-4 && this.velocity.setScalar(0);
      else {
        if (this.velocity.x) {
          const i = Math.sign(this.velocity.x);
          (this.velocity.x -= i * this.velocityDrag.x * t),
            Math.sign(this.velocity.x) !== i && (this.velocity.x = 0);
        }
        if (this.velocity.y) {
          const i = Math.sign(this.velocity.y);
          (this.velocity.y -= i * this.velocityDrag.y * t),
            Math.sign(this.velocity.y) !== i && (this.velocity.y = 0);
        }
        if (this.velocity.z) {
          const i = Math.sign(this.velocity.z);
          (this.velocity.z -= i * this.velocityDrag.z * t),
            Math.sign(this.velocity.z) !== i && (this.velocity.z = 0);
        }
      }
      if (this.angVelocity) {
        const i = Math.sign(this.angVelocity);
        (this.angVelocity -= i * this.angVelocityDrag * t),
          Math.sign(this.angVelocity) !== i && (this.angVelocity = 0);
      }
      (this.position.x += (this.velocity.x + this.gravity.x) * t),
        (this.position.y += (this.velocity.y + this.gravity.y) * t),
        (this.position.z += (this.velocity.z + this.gravity.z) * t),
        this.billboard
          ? ((this.angle += this.angVelocity * t),
            this.angleTo &&
              (this.angle = ke(this.angleFrom, this.angleTo, this.progress)))
          : ((this.rotation.z += this.angVelocity * t),
            (this.rotation.y += this.angVelocity * t),
            (this.rotation.x += this.angVelocity * t)),
        this.scaleWithVel
          ? this.scale
              .copy(this.scaleFrom)
              .lerp(this.scaleTo, this.scaleVelEase(this.progress))
          : this.scaleInOut
          ? this.scale
              .copy(this.scaleFrom)
              .lerp(
                this.scaleTo,
                1 - Math.sin(this.scaleEase(this.progress) * Math.PI)
              )
          : this.scale
              .copy(this.scaleFrom)
              .lerp(this.scaleTo, this.scaleEase(this.progress)),
        this.color
          .copy(this.colorFrom)
          .lerp(this.colorTo, this.colorEase(this.progress)),
        this.alphaInOut
          ? (this.alpha = ke(
              this.alphaFrom,
              this.alphaTo,
              1 - Math.sin(this.progress * Math.PI)
            ))
          : (this.alpha = ke(
              this.alphaFrom,
              this.alphaTo,
              this.alphaEase(this.progress)
            ));
    }
    this.preset.particleUpdated &&
      this.preset.particleUpdated(this, this.presetOptions),
      this.onProgress && this.onProgress(this, this.progress);
  }
}
const R_ = 150,
  gc = {};
let I_ = 0,
  jr = 0;
function F_(s, e) {
  e || (e = {}), (gc[s] = e);
}
class z_ extends $e {
  constructor(e) {
    super(e),
      e.batcher && (e.batchers = { default: e.batcher }),
      (this.count = e.count || R_),
      (this.dead = new Array(this.count).fill(0).map(() => new P_({}))),
      (this.alive = []),
      (this.batchers = e.batchers || {}),
      I_++;
  }
  emit(e, t = {}, i) {
    typeof t == "number" && (t = { amount: t }), (t.amount = t.amount || 1);
    const n = gc[e];
    if (
      !n ||
      (n.beforeAlloc &&
        (n.beforeAlloc(t), t.batcherName && (i = t.batcherName)),
      t.amount <= 0)
    )
      return;
    const r = this.batchers[i] || this.batchers.default,
      a = this.alloc(t.amount);
    n.beforeEmit && n.beforeEmit(t, a);
    for (let o = a.length - 1; o >= 0; o--)
      a[o].alive || jr++, this.alive.push(a[o]), a[o].emit(r, n, t, o);
  }
  update(e) {
    const t = [];
    for (let i = this.alive.length - 1; i >= 0; i--) {
      const n = this.alive[i];
      n.update(e),
        n.killable &&
          (t.push(n), this.alive.splice(i, 1), this.dead.push(n), jr--);
    }
    for (let i = t.length - 1; i >= 0; i--) t[i].kill();
  }
  alloc(e) {
    const t = this.dead,
      i = this.alive;
    let n = [],
      r = e;
    return (
      t.length > 0 && (n = t.splice(0, r)),
      (r -= n.length),
      r > 0 && (n = n.concat(i.splice(0, r))),
      n
    );
  }
  killAll() {
    for (let e = this.alive.length - 1; e >= 0; e--)
      this.alive[e].kill(),
        this.dead.push(this.alive[e]),
        this.alive.splice(e, 1),
        jr--;
  }
  registerPreset(e, t) {
    F_(e, t);
  }
}
let U_ = 0;
const $r = new Ks(),
  Yr = new Map(),
  bi = new He(),
  B_ = new Xe(),
  N_ = { default: Ci, normal: Ci, additive: Ss },
  k_ = { double: Wi, front: ws, back: Pt };
class O_ extends $e {
  init() {
    (this.needsUpdate = !0),
      (this.atlas = this.props.atlas),
      (this.count = this.props.count || 200),
      (this.geo = new Js()),
      (this.geo.index = $r.index),
      (this.geo.attributes.position = $r.attributes.position),
      (this.geo.attributes.uv = $r.attributes.uv),
      this.initAttributes(),
      (this.instances = new Set()),
      this.setDynamic(this.props.dynamic);
    const e = this.getMaterial(this.props);
    (this.base = new rt(this.geo, e)),
      this.props.renderOrder &&
        (this.base.renderOrder = this.props.renderOrder),
      (this.base.frustumCulled = !!this.props.frustumCulled),
      (this.currentCount = 0),
      (this.updateAttributes = this.updateAttributes.bind(this));
  }
  setDynamic(e) {
    (this.dynamic = e == null ? !0 : !!e),
      this.interleavedBuffer.setUsage(this.dynamic ? ys : StaticDrawUsage),
      (this.interleavedBuffer.needsUpdate = !0),
      (this.needsUpdate = !0);
  }
  getMaterial(e) {
    const t = e.material;
    if (!t) return;
    Yr.has(t) || Yr.set(t, {});
    const i = Yr.get(t),
      n = e.atlas;
    if (!n) return;
    n.meta.atlasIndex == null && (n.meta.atlasIndex = ++U_);
    const r = e.depthWrite != null ? e.depthWrite : !0,
      a = e.depthTest != null ? e.depthTest : !0,
      o = e.blending != null ? e.blending : "default",
      l = e.transparent != null ? e.transparent : !1,
      c = e.alphaTest != null ? e.alphaTest : !1,
      h = e.side != null ? e.side : "front",
      d = [
        n.meta.atlasIndex,
        h + "",
        e.sdf ? "sdf" : "",
        r.toString(),
        a.toString(),
        o.toString(),
        l.toString(),
        c.toString(),
      ].join("_");
    if (i[d]) return i[d];
    const u = Re({}, e);
    return (
      delete u.material,
      (i[d] = new t(
        nt(Re({}, u), {
          atlas: n,
          side: k_[h],
          blending: typeof o == "function" ? o : N_[o],
          depthWrite: !!r,
          depthTest: !!a,
          transparent: !!l,
          alphaTest: !!c,
        })
      ))
    );
  }
  initAttributes() {
    (this.stride = 4 + 4 + 3 + 2 + 4 + 4),
      (this.buffer = new Float32Array(this.count * this.stride));
    const e = this.geo,
      t = (this.interleavedBuffer = new Nm(this.buffer, this.stride));
    e.setAttribute("texCoords", new Si(t, 4, 0, !1)),
      e.setAttribute("meshCoords", new Si(t, 4, 4, !1)),
      e.setAttribute("spritePos", new Si(t, 3, 8, !1)),
      e.setAttribute("decorators", new Si(t, 2, 11, !1)),
      e.setAttribute("spriteQt", new Si(t, 4, 13, !1)),
      e.setAttribute("spriteColor", new Si(t, 4, 17, !1)),
      (t.needsUpdate = !0);
  }
  updateAttributes(e) {
    if (!e || !e.visible || e.alpha < 0.001) return;
    const t = this.currentCount++,
      i = this.buffer,
      n = this.stride,
      r = e.sprite.frame;
    let a = t * n;
    e.useEuler && e.quaternion.setFromEuler(e.rotation);
    let o = e.position,
      l = e.quaternion,
      c = e.scale;
    if (e.parent) {
      const d = e.parent;
      bi.position.copy(o),
        bi.quaternion.copy(e.billboard ? B_ : l),
        bi.scale.set(c.x, c.y, 1),
        bi.applyMatrix4(d.matrixWorld),
        bi.updateMatrixWorld(),
        (o = bi.position),
        (l = bi.quaternion),
        (c = bi.scale);
    }
    const h = e.billboard ? e.angle : l.x;
    (i[a++] = r.texCoords[0]),
      (i[a++] = r.texCoords[1]),
      (i[a++] = r.texCoords[2]),
      (i[a++] = r.texCoords[3]),
      (i[a++] = r.meshCoords[0] * e.scale.x),
      (i[a++] = r.meshCoords[1] * e.scale.y),
      (i[a++] = r.meshCoords[2] * e.scale.x),
      (i[a++] = r.meshCoords[3] * e.scale.y),
      (i[a++] = o.x),
      (i[a++] = o.y),
      (i[a++] = o.z),
      (i[a++] = e.billboard ? 1 : 0),
      (i[a++] = e.fx),
      (i[a++] = h),
      (i[a++] = l.y),
      (i[a++] = l.z),
      (i[a++] = l.w),
      (i[a++] = e.color.r),
      (i[a++] = e.color.g),
      (i[a++] = e.color.b),
      (i[a++] = e.alpha);
  }
  addInstance(e) {
    this.instances.has(e) || this.instances.add(e);
  }
  removeInstance(e) {
    !this.instances.has(e) || this.instances.delete(e);
  }
  update() {
    !this.dynamic ||
      ((this.currentCount = 0),
      this.instances.forEach(this.updateAttributes),
      (this.geo.instanceCount = this.currentCount),
      (this.interleavedBuffer.needsUpdate = !0),
      (this.base.visible = this.currentCount !== 0));
  }
  clearInstances() {
    this.instances.clear();
  }
  destroy() {
    this.clearInstances(), this.geo.dispose(), super.destroy();
  }
}
var ps = O_,
  G_ = `precision highp float;attribute vec4 texCoords;attribute vec4 meshCoords;attribute vec3 spritePos;attribute vec4 spriteQt;attribute vec4 spriteColor;attribute vec2 decorators;varying vec2 vUv;varying vec4 vColor;varying float vY;
#include <get_instance_matrix>
void main(){vColor=spriteColor;vUv=uv*texCoords.zw+texCoords.xy;vUv.y=1.-vUv.y;vec3 transformed=position;transformed.xy=transformed.xy*meshCoords.zw+(meshCoords.xy*0.5);transformed.xy+=meshCoords.xy*0.5;mat4 instanceMatrix=getInstanceMatrix(spritePos,spriteQt,vec3(1.));vec4 mPosition=modelMatrix*instanceMatrix*vec4(transformed,1.);vec4 mvPosition=viewMatrix*mPosition;vec4 bbPosition=modelViewMatrix*instanceMatrix*vec4(0.0,0.0,0.0,1.0);bbPosition.x+=cos(spriteQt.x)*transformed.x-sin(spriteQt.x)*transformed.y;bbPosition.y+=sin(spriteQt.x)*transformed.x+cos(spriteQt.x)*transformed.y;mvPosition=mix(mvPosition,bbPosition,decorators.x);vY=mPosition.y+(1.-decorators.y)*1000.;gl_Position=projectionMatrix*mvPosition;}`,
  V_ = `precision lowp float;uniform sampler2D atlas;varying vec2 vUv;varying vec4 vColor;varying float vY;
#include <luma>
void main(){vec2 uv=vUv;float shape=texture2D(atlas,uv).r;
#ifdef USE_SDF
#ifdef IS_ADDITIVE_BLENDING
float l=vColor.a*luma(vColor.rgb)*1.;shape=max(smoothstep(0.48,0.52,shape),shape*l);
#else
shape=smoothstep(0.48,0.52,shape);
#endif
#endif
#ifdef IS_ADDITIVE_BLENDING
vec3 color=vColor.rgb*vColor.a*shape;color*=mix(0.2,1.,step(0.,vY));float alpha=1.;
#else
vec3 color=vColor.rgb;float alpha=vColor.a*shape;alpha*=mix(0.2,1.,step(0.,vY));
#endif
gl_FragColor=vec4(color,alpha);}`;
class H_ extends gt {
  constructor(e = {}) {
    e = Re({}, e);
    const t = e.atlas,
      i = e.sdf;
    delete e.sdf,
      delete e.renderOrder,
      delete e.count,
      delete e.atlas,
      delete e.renderOrder;
    const n = typeof e.blending == "function" && e.blending;
    n && delete e.blending,
      super(e),
      (this.uniforms = nt(Re(Re({}, $i.merge([Z.fog])), e.uniforms || {}), {
        atlas: { value: t.texture, type: "t" },
      }));
    const r = (this.defines = {});
    e.blending === Ss && (r.IS_ADDITIVE_BLENDING = !0),
      i && (r.USE_SDF = !0),
      (this.fog = !0),
      (this.forceOpaque = !0),
      (this.transparent = !0),
      n && n(this),
      (this.vertexShader = G_),
      (this.fragmentShader = V_);
  }
}
const W_ = {
    "/webgl/particlePresets/blockExplode.js": Pv,
    "/webgl/particlePresets/blockSmoke.js": Ov,
    "/webgl/particlePresets/blockWave.js": $v,
    "/webgl/particlePresets/flame.js": Qv,
    "/webgl/particlePresets/flash.js": o_,
    "/webgl/particlePresets/impact.js": m_,
    "/webgl/particlePresets/sparkle.js": b_,
    "/webgl/particlePresets/wallWave.js": E_,
  },
  q_ = Object.entries(W_).map(([s, e]) => ({
    id: s.split("/").pop().split(".js").shift(),
    module: e.default,
  }));
function X_(s) {
  let e,
    t,
    i = !1;
  const n = {},
    r = {
      init: a,
      emit: o,
      update: d,
      addTo: c,
      removeFromParent: h,
      batchers: n,
    };
  s.particles = r;
  function a() {
    if (i) return;
    i = !0;
    const u = {
      renderOrder: s.stores.renderOrder.particles,
      material: H_,
      atlas: s.atlas,
      blending: "additive",
      transparent: !1,
      depthTest: !0,
      depthWrite: !1,
    };
    Object.assign(n, {
      normal: new ps(nt(Re({}, u), { blending: "normal", count: 200 })),
      emissive: new ps(nt(Re({}, u), { count: 2e3 })),
      sdfEmissive: new ps(nt(Re({}, u), { count: 200, sdf: !0 })),
      silhouette: new ps(nt(Re({}, u), { count: 15, sdf: !0, depthTest: !1 })),
      sdf: new ps(nt(Re({}, u), { blending: "normal", count: 15, sdf: !0 })),
      emissiveTop: new ps(
        nt(Re({}, u), {
          count: 10,
          renderOrder: s.stores.renderOrder.particlesTop,
          depthTest: !1,
        })
      ),
    }),
      (e = Object.values(n));
    for (let m in n) n[m].triggerInit(n[m].props);
    (t = new z_({ batchers: n, count: 3e3 })),
      q_.forEach((m) => t.registerPreset(m.id, m.module));
  }
  function o(u, m = {}) {
    if (!t) return;
    const g = m.batcherID || "default";
    return t.emit(u, m, g);
  }
  function l() {
    t.killAll();
  }
  function c(u) {
    this.removeFromParent();
    for (let m = 0, g = e.length; m < g; m++) {
      const p = e[m].base;
      u.add(p), (p.manualMatrixUpdate = !0), p.updateMatrixWorld();
    }
  }
  function h() {
    for (let u = 0, m = e.length; u < m; u++) {
      const g = e[u];
      !g.base.parent || g.base.parent.remove(g.base);
    }
    l();
  }
  function d() {
    if (!!i) {
      for (let u = 0, m = e.length; u < m; u++) e[u].update();
      t.update();
    }
  }
}
function j_() {
  return new Worker("/assets/PhysicsWorker.8a1e2263.js", { type: "module" });
}
const Bi = { Update: 1, DirectCall: 2, DirectAnswer: 3 },
  ga = { Bar: 1, Ball: 2, Block: 3, Bonus: 4 },
  tt = {
    Init: 1,
    SetConfiguration: 6,
    UpdateTarget: 2,
    UpdatePosition: 3,
    UpdateQuaternion: 4,
    UpdateSize: 5,
    UpdateEaseX: 7,
    UpdateEaseY: 8,
    UpdateActive: 9,
    UpdateVisible: 10,
    RespawnBall: 11,
    Destroy: 12,
    OnCollision: 13,
    SetCanMove: 14,
    UpdateBallState: 15,
    OnBlockCollision: 16,
    OnWallCollision: 17,
    OnLimitCollision: 18,
    ToggleBonus: 19,
    SetFinishedLevelCount: 20,
    OnBonusPicked: 21,
    UpdateAdditionalVelocity: 22,
    OnBarCollision: 23,
    ProjectileShoot: 24,
    ProjectileCancel: 25,
    UpdateKeyboard: 26,
    TogglePause: 27,
    ToggleAutoplay: 28,
  },
  Aa = (s) => s.charAt(0).toLowerCase() + s.slice(1);
Object.entries(Bi).reduce((s, [e, t]) => ((s[t] = Aa(e)), s), {});
Object.entries(ga).reduce((s, [e, t]) => ((s[t] = Aa(e)), s), {});
const yl = Object.entries(tt).reduce((s, [e, t]) => ((s[t] = Aa(e)), s), {}),
  bl = typeof window == "undefined";
class $_ {
  constructor(e = {}) {
    (this.isWorker = e.isWorker),
      (this.onMessage = this.onMessage.bind(this)),
      (this.msgID = 0),
      (this.lastComponentID = 0),
      (this.callsQueue = []),
      (this.componentsClasses = {}),
      (this.components = new Map()),
      (this.answerResolvers = new Map()),
      (this.log = () => {}),
      (this.onUpdate = this.isWorker
        ? this.onUpdateWorker.bind(this)
        : this.onUpdateMain.bind(this)),
      (this.updatesReceived = []),
      (this.updateComponent = this.updateComponent.bind(this)),
      (this.timestep = bl ? e.timestep || 5 : e.timestep || 10),
      this.isWorker && bl && (self.onmessage = this.onMessage);
  }
  init() {}
  initWorker(e, t) {
    if (!this.worker)
      return (
        (this.worker = new e(this)),
        this.worker.isFullMainThread && (this.isFullMainThread = !0),
        (this.worker.queue = this.queue.bind(this)),
        (this.worker.directCall = this.directCall.bind(this)),
        (this.worker.onmessage = this.onMessage),
        this.worker.directCall("init", t)
      );
  }
  poll() {
    this.processQueue(this.updatesReceived);
  }
  sync() {
    this.sendQueueUpdate();
  }
  registerComponentClasses(e) {
    for (let t in e) {
      const i = ga[t] || t;
      this.componentsClasses[i] = e[t];
    }
  }
  createComponent(e, t, i) {
    Array.isArray(e) && ((t = e[1]), (i = e[2]), (e = e[0])), (e = ga[e] || e);
    const n = this.componentsClasses;
    if (!n[e]) return;
    const r = i != null;
    r
      ? i > this.lastComponentID && (this.lastComponentID = i)
      : (i = ++this.lastComponentID);
    const a = new n[e](Re({ id: i, physics: this }, t));
    if ((this.components.set(i, a), r)) a.created = Promise.resolve();
    else return (a.create = this.directCall("createComponent", [e, t, i])), a;
  }
  removeComponent(e) {
    e.id && (e = e.id);
    const t = this.components.get(e);
    !t || (this.components.delete(e), t.destroy());
  }
  postMessage(e) {
    this.isFullMainThread
      ? this.isWorker
        ? this.main.onMessage({ data: e })
        : this.worker.onMessage({ data: e })
      : this.worker
      ? this.worker.postMessage(e)
      : self.postMessage(e);
  }
  directCall(e, t, i) {
    const n = ++this.msgID,
      r = [Bi.DirectCall, n, e, t];
    i && r.push(i);
    const a = new Promise((o) => this.answerResolvers.set(n, o));
    return this.postMessage(r), a;
  }
  queue(e, t, i) {
    const n = [e, t];
    i && n.push(i), this.callsQueue.push(n);
  }
  onUpdateMain(e) {
    for (let t = 0, i = e.length; t < i; t++) this.updatesReceived.push(e[t]);
  }
  updateComponent(e) {
    this.isFirstTick && e.firstUpdate && e.firstUpdate(this.fullDt),
      e.update(this.dt),
      this.isLastTick && e.syncWorkerToThreadProps(this.dt);
  }
  onUpdateWorker(e) {
    this.processQueue(e);
    const t = performance.now();
    this.isFirstUpdate &&
      ((this.lastUpdate = t - this.timestep), (this.isFirstUpdate = !1));
    let i = Math.min(200, t - this.lastUpdate);
    for (this.fullDt = i, this.lastUpdate = t, this.isFirstTick = !0; i > 0; )
      (this.dt = Math.min(i, this.timestep)),
        (this.isLastTick = (i -= this.timestep) <= 0),
        this.components.forEach(this.updateComponent),
        (this.isFirstTick = !1);
    this.callsQueue.length && this.sendQueueUpdate();
  }
  processQueue(e) {
    for (let t = 0, i = e.length; t < i; t++) {
      let [n, r, a] = e[t];
      if (((n = yl[n] || n), a)) {
        const o = this.components.get(a);
        o && o[n] && o[n](r);
      } else this[n] && this[n](r);
    }
    e.length = 0;
  }
  sendQueueUpdate() {
    this.postMessage([Bi.Update, this.callsQueue]),
      (this.callsQueue.length = 0),
      (this.callsQueue = []);
  }
  async onDirectCall([e, t, i, n]) {
    t = yl[t] || t;
    let r = null;
    if (n) {
      const a = this.components[n];
      a && a[t] && (r = await a[t](i));
    } else this[t] && (r = await this[t](i));
    this.postMessage([Bi.DirectAnswer, e, r]);
  }
  onDirectAnswer([e, t]) {
    const i = this.answerResolvers.get(e);
    !i || (this.answerResolvers.delete(e), i(t));
  }
  onMessage(e) {
    const t = e.data;
    if (!t.shift) return;
    const i = t.shift();
    i === Bi.Update
      ? this.onUpdate(t[0])
      : i === Bi.DirectCall
      ? this.onDirectCall(t)
      : i === Bi.DirectAnswer && this.onDirectAnswer(t);
  }
}
class nn {
  constructor(e) {
    (this.id = e.id),
      (this.physics = e.physics),
      (this.log = this.physics.log),
      (this.isFirstUpdate = !0),
      (this.sendableFns = []),
      (this.destroyed = !1);
  }
  directCall(e, t) {
    return this.physics.directCall(e, t, this.id);
  }
  queue(e, t) {
    return this.physics.queue(e, t, this.id);
  }
  workerToThread(e, t, i) {
    const n = this,
      r = (this[e] = t),
      a = t.clone,
      o = this.sendableFns;
    if (a) {
      const l = t.clone();
      o.push(function () {
        (!n.isFirstUpdate && r.equals(l)) ||
          (l.copy(r), n.queue(i, r.toArray()));
      });
    } else {
      let l = t;
      o.push(function () {
        (!n.isFirstUpdate && n[e] === l) || ((l = n[e]), n.queue(i, l));
      });
    }
  }
  update() {}
  syncWorkerToThreadProps() {
    if (this.destroyed) return;
    const e = this.sendableFns;
    for (let t = 0, i = e.length; t < i; t++) e[t]();
    this.isFirstUpdate = !1;
  }
  destroy() {
    this.destroyed ||
      (this.syncWorkerToThreadProps(),
      this.bb && this.physics.removeBox(this.bb),
      (this.bb = null),
      (this.destroyed = !0),
      this.queue(tt.Destroy),
      this.physics.removeComponent(this.id),
      (this.physics = null));
  }
}
class Y_ extends nn {
  constructor(e) {
    super(e),
      (this.sentTarget = new me(-1e3, -1e3)),
      (this.sentSize = -1),
      (this.sentEaseX = -1),
      (this.sentEaseY = -1),
      (this.sentActive = -1),
      (this.position = new me());
  }
  updateSize(e) {
    e !== this.sentSize && (this.queue(tt.UpdateSize, e), (this.sentSize = e));
  }
  updateTarget(e) {
    e.equals(this.sentTarget) ||
      (this.queue(tt.UpdateTarget, [e.x, e.y]), this.sentTarget.copy(e));
  }
  updateKeyboard(e) {
    this.queue(tt.UpdateKeyboard, !!e);
  }
  updatePosition(e) {
    this.position.set(e[0], e[1]);
  }
  updateEase(e) {
    this.sentEaseX !== e.x && this.queue(tt.UpdateEaseX, e.x),
      this.sentEaseY !== e.y && this.queue(tt.UpdateEaseY, e.y),
      (this.sentEaseX = e.x),
      (this.sentEaseY = e.y);
  }
  updateActive(e) {
    this.sentActive !== e &&
      (this.queue(tt.UpdateActive, e), (this.sentActive = e));
  }
}
class Z_ extends nn {
  constructor(e) {
    super(e),
      (this.visible = !1),
      (this.position = new me()),
      (this._sentBallState = null);
  }
  updateAdditionalVelocity(e) {
    (this.addVel = e), (this.normAddVel = ct(e, 0, 0.005));
  }
  updateVisible(e) {
    this.visible = e;
  }
  updatePosition(e) {
    this.position.fromArray(e);
  }
  setBallState(e) {
    e !== this._sentBallState &&
      ((this._sentBallState = e), this.queue(tt.UpdateBallState, e));
  }
}
class K_ extends nn {
  constructor(e) {
    super(e),
      (this.isUnbreakable = e.isUnbreakable),
      (this.timescale = 1),
      (this.destroyed = !1);
  }
  onUpdate(e) {}
}
class J_ extends nn {
  constructor(e) {
    super(e), (this.position = new me());
  }
  updateVisible(e) {
    this.visible = e;
  }
  updatePosition(e) {
    this.position.set(e[0], e[1]);
  }
}
class Q_ extends nn {
  constructor(e) {
    super(e), (this.position = new me());
  }
  updateVisible(e) {
    this.visible = e;
  }
  updatePosition(e) {
    this.position.set(e[0], e[1]);
  }
  shoot(e, t) {
    this.queue(tt.ProjectileShoot, [e, t]);
  }
  cancel() {
    this.queue(tt.ProjectileCancel);
  }
}
const ex = () =>
  Ic(
    () => import("./PhysicsWorker.025d33d011ae33ec.js"),
    [
      "assets/PhysicsWorker.025d33d011ae33ec.js",
      "assets/vendor.4d25231d11ae33ec.js",
      "assets/vendor.605820b411ae33ec.css",
      "assets/main.fb1695dd11ae33ec.js",
      "assets/main.4a98444b11ae33ec.css",
    ]
  );
class tx extends $_ {
  constructor() {
    super(),
      this.registerComponentClasses({
        Bar: Y_,
        Ball: Z_,
        Block: K_,
        Bonus: J_,
        Projectile: Q_,
      }),
      (this._canMoveSent = -1);
  }
  async init() {
    if (ae.app.$device.os === "android") {
      const n = (await ex()).default;
      await this.initWorker(n);
    } else await this.initWorker(j_);
    ["prebuilt", "futureproof"].forEach((i) => {
      !ae.game.bonuses[i] ||
        ae.game.bonuses[i].isActive.watch((n) => {
          this.queue(tt.ToggleBonus, [i, !!n]);
        });
    }),
      ae.game.finishedLevelCount.watch((i) => {
        this.queue(tt.SetFinishedLevelCount, i);
      });
  }
  respawnBall() {
    this.queue(tt.RespawnBall);
  }
  togglePause(e) {
    return this.directCall(tt.TogglePause, !!e);
  }
  setConfiguration(e) {
    return this.directCall(tt.SetConfiguration, e);
  }
  toggleAutoplay(e) {
    if (this._autoplay !== e)
      return (this._autoplay = e), this.queue(tt.ToggleAutoplay, !!e);
  }
  setCanMove(e) {
    if (this._canMoveSent !== e)
      return (this._canMoveSent = e), this.queue(tt.SetCanMove, !!e);
  }
}
function ix(s) {
  s.physics = new tx();
}
function sx(s) {
  for (let e = s.length - 1; e > 0; e--) {
    const t = Math.floor(Math.random() * (e + 1)),
      i = s[e];
    (s[e] = s[t]), (s[t] = i);
  }
}
function nx(s) {
  const e = (v, w) => (t[v] = t.list[v] = rx(t, v, w)),
    t = (s.bonuses = {
      activeCount: 0,
      list: {},
      resetBonusQueue: h,
      disableAll: r,
      update: a,
      drop: p,
      clearDrops: f,
      timeSincePick: 0,
      timeSinceDrop: 0,
      blocksDestroyedSinceDrop: 0,
      onPick: Ti(),
    });
  t.onPick.watch((v) => {
    ae.app.$analytics.event("event_%s_hint", v.name);
  }),
    e("scalability", { color: "#fd3a3f", name: "scale" }),
    e("futureproof", { color: "#42f3fd", name: "futureShield" }),
    e("simultaneity", { color: "#fd0b9e", name: "simultaneity", infinite: !0 }),
    e("power", { color: "#4cfeaa", name: "power" }),
    e("prebuilt", { color: "#fff75e", name: "battleReady" }),
    e("mods", { color: "#fd94f0", name: "personalization" });
  const i = Object.values(t.list),
    n = i.length;
  function r() {
    for (let v = 0; v < n; v++) i[v].disable();
  }
  function a() {
    const v = ae.time.dt;
    (t.timeSinceDrop += v), (t.timeSincePick += v);
    for (let w = 0; w < n; w++) i[w].update(v);
  }
  let o = !1,
    l = null;
  const c = [];
  function h() {
    (t.timeSincePick = 0),
      (t.timeSinceDrop = 0),
      (t.blocksDestroyedSinceDrop = 0),
      (o = !1),
      (c.length = 0),
      (l = null);
    for (let v = 0; v < i.length; v++) i[v].pickedOnce = !1;
  }
  function d(v = 0) {
    const w = i.length;
    if (w === 0 || v > 3) return;
    if (!o) {
      for (let x = 0; x < w; x++)
        if (!i[x].pickedOnce) return (l = i[x]), i[x].id;
      o = !0;
    }
    if (!c.length) {
      for (let x = 0; x < w; x++) c.push(i[x]);
      sx(c), c[0] === l && c.push(c.shift());
    }
    const S = c.shift();
    if (!!S) {
      if (((l = S), S.id === "simultaneity")) {
        const x = ae.scene.balls;
        if (x.getActiveBallsCount() >= x.maxCount * 0.5) return d(v + 1);
      }
      return S.id;
    }
  }
  const u = Ke([0.505, 0.04, 0.44, 0.935]),
    m = Ke([0.865, 0.03, 0.97, 0.425]),
    g = Ke([0.465, 0.06, 0.945, 0.735]);
  function p(v, w) {
    if (
      ae.scene.bonuses.size >= 1 ||
      !s.isRunning() ||
      ae.stores.isAutoplay.value ||
      (!o && t.activeCount > 0)
    )
      return;
    const S = t.timeSinceDrop,
      x = m(ct(S, 3e3, 6e3)),
      A = t.timeSincePick,
      D = g(ct(A, 4e3, 8e3)),
      R = t.blocksDestroyedSinceDrop;
    let b = u(ct(R, 1, 5));
    b = ke(b, 1, ct(A, 2e3, 8e3));
    const E = ke(0.95, 1, ct(A, 8e3, 15e3)),
      k = x * D * b * E;
    if (Math.random() > k) return;
    const B = d();
    !B ||
      (ae.scene.spawnBonus(B, v, w),
      (t.timeSinceDrop = 0),
      (t.blocksDestroyedSinceDrop = 0));
  }
  function f() {
    (t.timeSinceDrop = 0), ae.scene.removeBonuses();
  }
}
function rx(s, e, t = {}) {
  const i = t.name || "Bonus",
    n = "bonus_" + e,
    r = t.color || "#fff75e",
    a = t.cooldown || 1e4,
    o = it(0),
    l = Rl([o], (g) => g > 0),
    c = Ti();
  t.infinite ||
    l.watch((g) => {
      const p = g ? 1 : -1;
      s.activeCount = Math.max(0, s.activeCount + p);
    });
  const h = {
    id: e,
    name: i,
    sprite: n,
    color: r,
    isActive: l,
    isInfinite: !!t.infinite,
    cooldown: o,
    onPick: c,
    pick: d,
    update: u,
    disable: m,
    onDisable: Ti(),
    pickedOnce: !1,
  };
  return h;
  function d() {
    (s.timeSincePick = 0),
      (h.pickedOnce = !0),
      h.onPick.emit(h),
      s.onPick.emit(h),
      h.cooldown.set(a);
  }
  function u(g) {
    h.isInfinite || o.set(Math.max(0, o.value - g));
  }
  function m() {
    o.set(0), h.onDisable.emit(h);
  }
}
function ax(s) {
  for (let e = s.length - 1; e > 0; e--) {
    const t = Math.floor(Math.random() * (e + 1)),
      i = s[e];
    (s[e] = s[t]), (s[t] = i);
  }
  return s;
}
function ox(s) {
  let e = 0;
  const t = it(0),
    i = ["invader", "spceship", "stars", "michel", "home1", "home2"];
  let n = [];
  Object.assign(s, {
    loadNewLevel: m,
    resetFinishedLevelCount: r,
    finishedLevelCount: t,
    finishLevel: c,
    ensureLevel: h,
    getCurrentDifficulty: u,
    addPointsFromFinishedLevel: l,
    destroyCurrentLevel: d,
    resetLevelColor: a,
    nextLevelColor: o,
  });
  function r() {
    t.set(0);
    for (let g = 0, p = ae.levelDifficulties.length; g < p; g++) {
      const f = ae.levelDifficulties[g];
      f.currentIndex = Math.floor(Math.random() * f.length);
    }
  }
  function a() {
    (e = 0), (ae.stores.colorScheme = Er[e]);
  }
  function o() {
    ae.stores.isAutoplay.value ? (e = 0) : (e = (e + 1) % Er.length),
      (ae.stores.colorScheme = Er[e]);
  }
  function l() {
    if (ae.stores.isAutoplay.value) return;
    const g = ae.blocks.currentLevel,
      p = g && ae.levels[g],
      f = Math.max(0, p ? p.difficulty - 1 : 0),
      v = Math.floor(10 + 7 * f + t.value * 4);
    s.score.set(s.score.value + v);
  }
  function c() {
    ae.stores.isAutoplay.value || (l(), t.set(s.finishedLevelCount.value + 1));
  }
  function h() {
    const g = ae.scene.blocks;
    (g.currentLevel != null && !g.hiding) || (d(), m());
  }
  function d() {
    ae.scene.blocks.destroyCurrentLevel();
  }
  function u() {
    const g = t.value;
    let p = 0;
    return g >= 7 ? (p = 3) : g >= 5 ? (p = 2) : g >= 3 && (p = 1), p;
  }
  function m() {
    const g = ae.scene.blocks;
    if (ae.stores.isAutoplay.value) {
      n.length === 0 && (n = ax([...i]));
      const w = ae.levels[n.pop()] || ae.levels.msint;
      g.createLevel(w);
      return;
    }
    if (t.value === 0) {
      g.createLevel(ae.levels.msint);
      return;
    }
    let p = u();
    const f = ae.levelDifficulties[p];
    f.currentIndex = (f.currentIndex + 1) % f.length;
    const v = f[f.currentIndex];
    g.createLevel(v);
  }
}
const Qt = {};
function Hn(s) {
  s.stores.colorScheme === "ballLost" && s.game.resetLevelColor();
}
let Li = 1;
function lx() {
  Li < 3 && Li++;
}
function Es() {
  ae.setBgm("GAME_" + Li);
}
Qt.DEFAULT = {
  start() {
    const { game: s } = this;
    (s.canMove = !1),
      s.setGameCameraTarget("IDLE_A"),
      s.bonuses.disableAll(),
      s.countdown.set(4),
      s.bonuses.clearDrops(),
      s.balls.clearAll(),
      Hn(this.webgl);
  },
  update() {},
  end() {},
};
const cx = [
  "scalability",
  "simultaneity",
  "power",
  "futureproof",
  "prebuilt",
  "mods",
];
function wl(s) {
  ae.game.setGameCameraTarget("INTRO_" + s);
  const e = ae.stores.levelWidth * 0.5,
    t = ae.stores.levelDepth * 0.3;
  ae.scene.groundCircle(e, t, cx[s], 900, !0);
}
Qt.INTRO = {
  start() {
    const { game: s, webgl: e } = this;
    (s.canMove = !1),
      s.resetBar(),
      s.setGameCameraTarget("INTRO_0"),
      s.bonuses.disableAll(),
      s.bonuses.resetBonusQueue(),
      s.bonuses.clearDrops(),
      s.destroyCurrentLevel(),
      s.countdown.set(4),
      s.life.set(s.MAX_LIFE),
      s.score.set(0),
      s.resetFinishedLevelCount(),
      s.balls.clearAll(),
      s.balls.keepMain({ frozen: !0 }),
      s.resetLevelColor(),
      e.setBgm("INTRO"),
      e.stores.currentIntroIndex.watchImmediate(wl);
  },
  update() {},
  end() {
    ae.stores.currentIntroIndex.unwatch(wl);
  },
};
Qt.AUTOPLAY = {
  start() {
    const { game: s, webgl: e, data: t } = this;
    e.stores.isAutoplay.set(!0),
      (s.canMove = !1),
      s.setState(s.states.START_GAME, { instant: t.instant }),
      e.setBgm("HOME"),
      s.setGameCameraTarget("IDLE_A");
  },
  update() {},
  end() {},
};
Qt.START_GAME = {
  start() {
    const { game: s, webgl: e, data: t } = this;
    (t.isAutoplay = e.stores.isAutoplay.value),
      e.app.$analytics.event("event_new_grid"),
      (s.canMove = !1),
      s.resetBar(),
      t.instant && (t.maxDelay = 800),
      t.isAutoplay || s.setGameCameraTarget(null),
      s.bonuses.disableAll(),
      s.destroyCurrentLevel(),
      s.countdown.set(4),
      s.life.set(s.MAX_LIFE),
      s.score.set(0),
      s.resetFinishedLevelCount(),
      s.bonuses.clearDrops(),
      s.bonuses.resetBonusQueue(),
      (s.muteGridFinished = !1),
      s.balls.keepMain({ frozen: !0 }),
      s.resetLevelColor(),
      (s.startsAt = e.time.pausedElapsed),
      !t.isAutoplay && (Li = 1);
  },
  update() {
    const { game: s, data: e } = this;
    (e.instant || s.blocks.isHideFinished) &&
      !e.loading &&
      ((e.loading = !0),
      e.maxDelay && (e.maxTime = this.time + e.maxDelay),
      s.loadNewLevel()),
      e.loading &&
        ((e.maxTime && this.timeReached(e.maxTime)) ||
          s.blocks.isShowFinished) &&
        ((e.loaded = !0), s.setState(s.states.COUNTDOWN));
  },
  end() {},
};
Qt.COUNTDOWN = {
  start() {
    const { game: s, data: e, webgl: t } = this;
    (e.isAutoplay = t.stores.isAutoplay.value),
      (s.canMove = !e.isAutoplay),
      (e.maxCount = 4),
      (e.delay = 400),
      (e.numberDuration = e.fast ? 700 : 1e3),
      e.isAutoplay || s.setGameCameraTarget(null),
      s.ensureLevel(),
      s.countdown.set(e.maxCount),
      s.balls.keepMain({ frozen: !0 }),
      Hn(this.webgl),
      !e.isAutoplay && (e.fast ? Es() : t.setBgm("COUNTDOWN"));
  },
  update() {
    const { webgl: s, game: e, data: t } = this;
    if (t.isAutoplay) this.timeReached(50) && e.setState(e.states.GAME_RUNNING);
    else {
      const i = e.countdown.value,
        n = (t.maxCount - i) * t.numberDuration + t.delay;
      this.timeReached(n) &&
        (e.countdown.value > 1
          ? s.playSound("sfx_countdown_single", { playbackRate: 1 })
          : s.playSound("sfx_countdown_single", { playbackRate: 2 }),
        e.countdown.set(e.countdown.value - 1),
        e.countdown.value <= 0 && e.setState(e.states.GAME_RUNNING));
    }
  },
  end() {},
};
function Sl() {
  lx(), Es();
}
Qt.GAME_RUNNING = {
  start() {
    const { game: s, webgl: e, data: t } = this;
    (t.autoSkipDelay = 8e3),
      (t.nextSkip = t.autoSkipDelay),
      (t.isAutoplay = e.stores.isAutoplay.value),
      (s.canMove = !t.isAutoplay),
      t.isAutoplay || s.setGameCameraTarget(null),
      s.ensureLevel(),
      s.countdown.set(-1),
      (s.muteGridFinished = !1),
      s.balls.keepMain({ frozen: !1 }),
      Hn(this.webgl),
      !t.isAutoplay && (Li < 1 && (Li = 1), Es(), s.bonuses.onPick.watch(Sl));
  },
  update() {},
  end() {
    const { game: s, webgl: e } = this;
    s.bonuses.onPick.unwatch(Sl);
  },
};
Qt.LOSE_LIFE = {
  start() {
    const { game: s, webgl: e, data: t } = this;
    (t.isAutoplay = e.stores.isAutoplay.value),
      (s.canMove = !t.isAutoplay),
      t.isAutoplay || s.setGameCameraTarget(null),
      s.ensureLevel(),
      s.countdown.set(-1),
      t.isAutoplay || s.life.set(Math.max(0, s.life.value - 1)),
      s.bonuses.clearDrops(),
      s.balls.clearAll(),
      s.bonuses.disableAll(),
      e.scene.onBallLost(this.data.ballPosition),
      !t.isAutoplay &&
        (e.playSound("sfx_fail_miss"),
        s.life.value <= 0 && (e.stores.colorScheme = "ballLost"),
        (Li = 0),
        Es());
  },
  update() {
    const { webgl: s, game: e, data: t } = this;
    !t.isAutoplay &&
      this.timeReached(0) &&
      s.scene.gameCam.shake(800, 0.11, !1, !0, 0.75),
      e.life.value > 0 && this.timeReached(900)
        ? e.setState(e.states.COUNTDOWN, { fast: !0 })
        : e.life.value <= 0 &&
          this.timeReached(1e3) &&
          e.setState(e.states.GAME_OVER);
  },
  end() {},
};
Qt.GRID_FINISHED = {
  start() {
    const { game: s, webgl: e, data: t } = this;
    (t.isAutoplay = e.stores.isAutoplay.value),
      (s.canMove = !t.isAutoplay),
      t.isAutoplay || e.app.$analytics.event("event_new_grid"),
      t.isAutoplay || s.setGameCameraTarget(null),
      s.countdown.set(-1);
    const i = s.bonuses.power;
    i && i.disable(),
      s.bonuses.clearDrops(),
      s.balls.clearAll(),
      Hn(this.webgl);
  },
  update() {
    const { webgl: s, game: e, data: t } = this;
    this.timeReached(400) &&
      ((t.hiding = !0),
      e.destroyCurrentLevel(),
      t.isAutoplay || ((Li = 0), Es())),
      this.timeReached(700) && e.balls.keepMain({ frozen: !0 }),
      this.timeReached(900) &&
        (t.nextColorDone || e.nextLevelColor(), (t.nextColorDone = !0)),
      t.hiding &&
        e.blocks.isHideFinished &&
        !t.loading &&
        (e.finishLevel(),
        (t.loading = !0),
        e.balls.keepMain({ frozen: !0 }),
        e.loadNewLevel(),
        (t.loadingTime = this.time),
        t.nextColorDone || e.nextLevelColor(),
        t.isAutoplay || Es(),
        (t.nextColorDone = !0)),
      t.loadingTime &&
        this.timeReached(t.loadingTime + 1100) &&
        e.setState(e.states.GAME_RUNNING);
  },
  end() {},
};
Qt.GAME_OVER = {
  start() {
    const { webgl: s, game: e } = this;
    (e.canMove = !1),
      e.countdown.set(-1),
      e.bonuses.clearDrops(),
      e.bonuses.disableAll(),
      e.balls.clearAll(),
      (s.stores.colorScheme = "gameOver");
    const t = Math.floor((s.time.pausedElapsed - e.startsAt) / 1e3);
    s.app.$analytics.event("event_game_duration_%s", t),
      (e.startsAt = s.time.pausedElapsed),
      s.setBgm("GAME_OVER");
  },
  update() {
    const { webgl: s, game: e } = this;
    this.timeReached(300) && e.setGameCameraTarget("IDLE_C"),
      this.timeReached(800) &&
        s.app.$route.name === "Game" &&
        s.app.$router.push({ name: "Results" });
  },
  end() {},
};
function hx(s) {
  let e = 0,
    t = 0;
  const i = { webgl: ae, game: s, timeReached: d, log: s.log },
    n = Object.entries(Qt).reduce(
      (m, [g, { meta: p, start: f, update: v, end: w }]) => {
        const S = nt(Re({}, i), {
          get time() {
            return e;
          },
          data: null,
        });
        return (
          (m[g] = {
            id: g,
            context: S,
            meta: p || {},
            start: f ? f.bind(S) : null,
            update: v ? v.bind(S) : noop,
            end: w ? w.bind(S) : null,
          }),
          m
        );
      },
      {}
    );
  (s.states = n), (s.setState = u);
  let r = !1,
    a = null;
  const o = Object.values(n)[0],
    l = it(o);
  (s.state = {
    start: c,
    states: n,
    current: l,
    set: u,
    update: h,
    timeReached: d,
    get time() {
      return e;
    },
  }),
    u(n.DEFAULT);
  function c() {
    (r = !0), a && u(a);
  }
  function h() {
    if (!r) return;
    const m = ae.time.dt;
    l.value.update(), (t = e), (e += m);
  }
  function d(m) {
    return t < m && e >= m;
  }
  function u(m, g = {}, p) {
    if ((typeof m == "string" && (m = n[m]), !r)) return (a = m);
    const f = l.value;
    (!p && m === f) ||
      (f && (f.end && f.end.call(f.context), (f.context.data = null)),
      (t = -1),
      (e = 0),
      (m.context.data = g),
      l.set(m, !0),
      m && m.start && m.start.call(m.context));
  }
}
let Ml = 3;
function ux(s) {
  const e = () => {};
  let t = !1,
    i = !1;
  const n = (s.game = {
    log: e,
    init: r,
    start: a,
    update: u,
    reset: d,
    resetBar: h,
    setGameCameraTarget: c,
    addPointsFromBrokenBlock: l,
    isRunning: m,
    get canMove() {
      return i;
    },
    set canMove(g) {
      t = g;
    },
    countdown: it(0),
    score: it(0),
    startsAt: 0,
    gameDuration: 0,
    life: it(Ml),
    MAX_LIFE: Ml,
  });
  nx(n), hx(n), ox(n);
  function r() {
    n.resetFinishedLevelCount();
  }
  function a() {
    (n.blocks = s.scene.blocks), n.state.start();
  }
  function o() {
    return t;
  }
  function l(g) {
    if (s.stores.isAutoplay.value) return;
    let p = Math.floor(q0[g.type] || 1),
      f = 1;
    n.bonuses.mods && n.bonuses.mods.isActive.value && (f = 2),
      (p = Math.floor(p * f)),
      n.score.set(n.score.value + p);
  }
  function c(g) {
    s.scene.gameCam.setTarget(g);
  }
  function h() {
    n.needsBarReset = !0;
  }
  function d() {
    n.game.life.set(3), n.points.set(0);
  }
  function u() {
    (i = o()), s.physics.setCanMove(i), n.state.update(), n.bonuses.update();
  }
  function m() {
    return n.state.current.value === n.states.GAME_RUNNING;
  }
}
var dx = [Wg, qg, Xg, jg, Jg, Qg, wv, X_, ix, ux];
function fx(s = {}) {
  return Vm(Re({ decorator: Ug, plugins: dx }, s));
}
var vx = Object.freeze(
  Object.defineProperty(
    { __proto__: null, loadWebGL: fx },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export { tt as C, nn as P, me as V, $_ as a, vx as w };
