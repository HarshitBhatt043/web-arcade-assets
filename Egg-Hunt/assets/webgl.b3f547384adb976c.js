import {
  I as e,
  J as t,
  K as n,
  l as r,
  L as s,
  M as a,
  N as o,
  O as l,
  P as c,
  Q as h,
  R as u,
  S as d,
  T as p,
  U as m,
  V as f,
  W as g,
  X as v,
  Y as _,
  Z as x,
  $ as y,
  a0 as b,
  a1 as M,
  a2 as w,
  w as S,
  a3 as T,
  a4 as E,
  a5 as A,
  a6 as C,
  a7 as P,
  a8 as L,
  G as R,
} from "./vendor.1df9bf664adb976c.js";
let D = null;
function I(e) {
  if (null !== D && (D.property, 1)) {
    const e = D;
    return (D = I.prototype = null), e;
  }
  return (D = I.prototype = null == e ? Object.create(null) : e), new I();
}
for (let i = 0; i <= 10; i++) I();
function O(e, t, i = Number.MAX_SAFE_INTEGER) {
  const n = [];
  function r() {
    return new e();
  }
  return (
    "function" == typeof t && (e.prototype.onPoolReset = t),
    (e.prototype.release = function () {
      return e.release(this), this;
    }),
    (e.alloc = function (t) {
      if (!(t <= 0)) for (; t--; ) e.release(r());
    }),
    (e.get = function () {
      const e = n.pop() || r();
      return e.onPoolReset && e.onPoolReset(e), e;
    }),
    (e.release = function () {
      let e = arguments.length;
      for (; e--; ) n.length < i && n.push(arguments[e]);
    }),
    e
  );
}
const N = "146",
  z = 0,
  U = 1,
  F = 2,
  k = 0,
  B = 1,
  V = 2,
  H = 3,
  G = 0,
  W = 1,
  j = 2,
  q = 0,
  X = 1,
  Y = 2,
  K = 3,
  Z = 4,
  J = 5,
  Q = 100,
  $ = 101,
  ee = 102,
  te = 103,
  ie = 104,
  ne = 200,
  re = 201,
  se = 202,
  ae = 203,
  oe = 204,
  le = 205,
  ce = 206,
  he = 207,
  ue = 208,
  de = 209,
  pe = 210,
  me = 0,
  fe = 1,
  ge = 2,
  ve = 3,
  _e = 4,
  xe = 5,
  ye = 6,
  be = 7,
  Me = 0,
  we = 1,
  Se = 2,
  Te = 0,
  Ee = 1,
  Ae = 2,
  Ce = 3,
  Pe = 4,
  Le = 5,
  Re = 301,
  De = 302,
  Ie = 303,
  Oe = 304,
  Ne = 306,
  ze = 1e3,
  Ue = 1001,
  Fe = 1002,
  ke = 1003,
  Be = 1004,
  Ve = 1005,
  He = 1006,
  Ge = 1007,
  We = 1008,
  je = 1009,
  qe = 1010,
  Xe = 1011,
  Ye = 1012,
  Ke = 1013,
  Ze = 1014,
  Je = 1015,
  Qe = 1016,
  $e = 1017,
  et = 1018,
  tt = 1020,
  it = 1021,
  nt = 1022,
  rt = 1023,
  st = 1024,
  at = 1025,
  ot = 1026,
  lt = 1027,
  ct = 1028,
  ht = 1029,
  ut = 1030,
  dt = 1031,
  pt = 1033,
  mt = 33776,
  ft = 33777,
  gt = 33778,
  vt = 33779,
  _t = 35840,
  xt = 35841,
  yt = 35842,
  bt = 35843,
  Mt = 36196,
  wt = 37492,
  St = 37496,
  Tt = 37808,
  Et = 37809,
  At = 37810,
  Ct = 37811,
  Pt = 37812,
  Lt = 37813,
  Rt = 37814,
  Dt = 37815,
  It = 37816,
  Ot = 37817,
  Nt = 37818,
  zt = 37819,
  Ut = 37820,
  Ft = 37821,
  kt = 36492,
  Bt = 2300,
  Vt = 2301,
  Ht = 2302,
  Gt = 2,
  Wt = 3e3,
  jt = 3001,
  qt = 3201,
  Xt = 0,
  Yt = 1,
  Kt = "srgb",
  Zt = "srgb-linear",
  Jt = 7680,
  Qt = 35044,
  $t = "300 es",
  ei = 1035;
class ti {
  addEventListener(e, t) {
    void 0 === this._listeners && (this._listeners = {});
    const i = this._listeners;
    void 0 === i[e] && (i[e] = []), -1 === i[e].indexOf(t) && i[e].push(t);
  }
  hasEventListener(e, t) {
    if (void 0 === this._listeners) return !1;
    const i = this._listeners;
    return void 0 !== i[e] && -1 !== i[e].indexOf(t);
  }
  removeEventListener(e, t) {
    if (void 0 === this._listeners) return;
    const i = this._listeners[e];
    if (void 0 !== i) {
      const e = i.indexOf(t);
      -1 !== e && i.splice(e, 1);
    }
  }
  dispatchEvent(e) {
    if (void 0 === this._listeners) return;
    const t = this._listeners[e.type];
    if (void 0 !== t) {
      e.target = this;
      const i = t.slice(0);
      for (let t = 0, n = i.length; t < n; t++) i[t].call(this, e);
      e.target = null;
    }
  }
}
const ii = [
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
  ni = Math.PI / 180,
  ri = 180 / Math.PI;
function si() {
  const e = (4294967295 * Math.random()) | 0,
    t = (4294967295 * Math.random()) | 0,
    i = (4294967295 * Math.random()) | 0,
    n = (4294967295 * Math.random()) | 0;
  return (
    ii[255 & e] +
    ii[(e >> 8) & 255] +
    ii[(e >> 16) & 255] +
    ii[(e >> 24) & 255] +
    "-" +
    ii[255 & t] +
    ii[(t >> 8) & 255] +
    "-" +
    ii[((t >> 16) & 15) | 64] +
    ii[(t >> 24) & 255] +
    "-" +
    ii[(63 & i) | 128] +
    ii[(i >> 8) & 255] +
    "-" +
    ii[(i >> 16) & 255] +
    ii[(i >> 24) & 255] +
    ii[255 & n] +
    ii[(n >> 8) & 255] +
    ii[(n >> 16) & 255] +
    ii[(n >> 24) & 255]
  ).toLowerCase();
}
function ai(e, t, i) {
  return Math.max(t, Math.min(i, e));
}
function oi(e, t, i) {
  return (1 - i) * e + i * t;
}
function li(e) {
  return 0 == (e & (e - 1)) && 0 !== e;
}
function ci(e) {
  return Math.pow(2, Math.floor(Math.log(e) / Math.LN2));
}
function hi(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint16Array:
      return e / 65535;
    case Uint8Array:
      return e / 255;
    case Int16Array:
      return Math.max(e / 32767, -1);
    case Int8Array:
      return Math.max(e / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function ui(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint16Array:
      return Math.round(65535 * e);
    case Uint8Array:
      return Math.round(255 * e);
    case Int16Array:
      return Math.round(32767 * e);
    case Int8Array:
      return Math.round(127 * e);
    default:
      throw new Error("Invalid component type.");
  }
}
class di {
  constructor(e = 0, t = 0) {
    (di.prototype.isVector2 = !0), (this.x = e), (this.y = t);
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
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
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
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
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
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const i = Math.cos(t),
      n = Math.sin(t),
      r = this.x - e.x,
      s = this.y - e.y;
    return (this.x = r * i - s * n + e.x), (this.y = r * n + s * i + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class pi {
  constructor() {
    (pi.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
  }
  set(e, t, i, n, r, s, a, o, l) {
    const c = this.elements;
    return (
      (c[0] = e),
      (c[1] = n),
      (c[2] = a),
      (c[3] = t),
      (c[4] = r),
      (c[5] = o),
      (c[6] = i),
      (c[7] = s),
      (c[8] = l),
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
      s = i[0],
      a = i[3],
      o = i[6],
      l = i[1],
      c = i[4],
      h = i[7],
      u = i[2],
      d = i[5],
      p = i[8],
      m = n[0],
      f = n[3],
      g = n[6],
      v = n[1],
      _ = n[4],
      x = n[7],
      y = n[2],
      b = n[5],
      M = n[8];
    return (
      (r[0] = s * m + a * v + o * y),
      (r[3] = s * f + a * _ + o * b),
      (r[6] = s * g + a * x + o * M),
      (r[1] = l * m + c * v + h * y),
      (r[4] = l * f + c * _ + h * b),
      (r[7] = l * g + c * x + h * M),
      (r[2] = u * m + d * v + p * y),
      (r[5] = u * f + d * _ + p * b),
      (r[8] = u * g + d * x + p * M),
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
      s = e[4],
      a = e[5],
      o = e[6],
      l = e[7],
      c = e[8];
    return (
      t * s * c - t * a * l - i * r * c + i * a * o + n * r * l - n * s * o
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      i = e[1],
      n = e[2],
      r = e[3],
      s = e[4],
      a = e[5],
      o = e[6],
      l = e[7],
      c = e[8],
      h = c * s - a * l,
      u = a * o - c * r,
      d = l * r - s * o,
      p = t * h + i * u + n * d;
    if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const m = 1 / p;
    return (
      (e[0] = h * m),
      (e[1] = (n * l - c * i) * m),
      (e[2] = (a * i - n * s) * m),
      (e[3] = u * m),
      (e[4] = (c * t - n * o) * m),
      (e[5] = (n * r - a * t) * m),
      (e[6] = d * m),
      (e[7] = (i * o - l * t) * m),
      (e[8] = (s * t - i * r) * m),
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
  setUvTransform(e, t, i, n, r, s, a) {
    const o = Math.cos(r),
      l = Math.sin(r);
    return (
      this.set(
        i * o,
        i * l,
        -i * (o * s + l * a) + s + e,
        -n * l,
        n * o,
        -n * (-l * s + o * a) + a + t,
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
      s = n[3],
      a = n[6],
      o = n[1],
      l = n[4],
      c = n[7];
    return (
      (n[0] = t * r + i * o),
      (n[3] = t * s + i * l),
      (n[6] = t * a + i * c),
      (n[1] = -i * r + t * o),
      (n[4] = -i * s + t * l),
      (n[7] = -i * a + t * c),
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
function mi(e) {
  for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
  return !1;
}
function fi(e) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
function gi(e) {
  return e < 0.04045
    ? 0.0773993808 * e
    : Math.pow(0.9478672986 * e + 0.0521327014, 2.4);
}
function vi(e) {
  return e < 0.0031308 ? 12.92 * e : 1.055 * Math.pow(e, 0.41666) - 0.055;
}
const _i = { [Kt]: { [Zt]: gi }, [Zt]: { [Kt]: vi } },
  xi = {
    legacyMode: !0,
    get workingColorSpace() {
      return Zt;
    },
    set workingColorSpace(e) {
      console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
    },
    convert: function (e, t, i) {
      if (this.legacyMode || t === i || !t || !i) return e;
      if (_i[t] && void 0 !== _i[t][i]) {
        const n = _i[t][i];
        return (e.r = n(e.r)), (e.g = n(e.g)), (e.b = n(e.b)), e;
      }
      throw new Error("Unsupported color space conversion.");
    },
    fromWorkingColorSpace: function (e, t) {
      return this.convert(e, this.workingColorSpace, t);
    },
    toWorkingColorSpace: function (e, t) {
      return this.convert(e, t, this.workingColorSpace);
    },
  },
  yi = {
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
  bi = { r: 0, g: 0, b: 0 },
  Mi = { h: 0, s: 0, l: 0 },
  wi = { h: 0, s: 0, l: 0 };
function Si(e, t, i) {
  return (
    i < 0 && (i += 1),
    i > 1 && (i -= 1),
    i < 1 / 6
      ? e + 6 * (t - e) * i
      : i < 0.5
      ? t
      : i < 2 / 3
      ? e + 6 * (t - e) * (2 / 3 - i)
      : e
  );
}
function Ti(e, t) {
  return (t.r = e.r), (t.g = e.g), (t.b = e.b), t;
}
class Ei {
  constructor(e, t, i) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      void 0 === t && void 0 === i ? this.set(e) : this.setRGB(e, t, i)
    );
  }
  set(e) {
    return (
      e && e.isColor
        ? this.copy(e)
        : "number" == typeof e
        ? this.setHex(e)
        : "string" == typeof e && this.setStyle(e),
      this
    );
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = Kt) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (255 & e) / 255),
      xi.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, i, n = Zt) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = i),
      xi.toWorkingColorSpace(this, n),
      this
    );
  }
  setHSL(e, t, i, n = Zt) {
    var r;
    if (
      ((e = ((e % (r = 1)) + r) % r),
      (t = ai(t, 0, 1)),
      (i = ai(i, 0, 1)),
      0 === t)
    )
      this.r = this.g = this.b = i;
    else {
      const n = i <= 0.5 ? i * (1 + t) : i + t - i * t,
        r = 2 * i - n;
      (this.r = Si(r, n, e + 1 / 3)),
        (this.g = Si(r, n, e)),
        (this.b = Si(r, n, e - 1 / 3));
    }
    return xi.toWorkingColorSpace(this, n), this;
  }
  setStyle(e, t = Kt) {
    function i(t) {
      void 0 !== t &&
        parseFloat(t) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored."
        );
    }
    let n;
    if ((n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e))) {
      let e;
      const r = n[1],
        s = n[2];
      switch (r) {
        case "rgb":
        case "rgba":
          if (
            (e =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                s
              ))
          )
            return (
              (this.r = Math.min(255, parseInt(e[1], 10)) / 255),
              (this.g = Math.min(255, parseInt(e[2], 10)) / 255),
              (this.b = Math.min(255, parseInt(e[3], 10)) / 255),
              xi.toWorkingColorSpace(this, t),
              i(e[4]),
              this
            );
          if (
            (e =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                s
              ))
          )
            return (
              (this.r = Math.min(100, parseInt(e[1], 10)) / 100),
              (this.g = Math.min(100, parseInt(e[2], 10)) / 100),
              (this.b = Math.min(100, parseInt(e[3], 10)) / 100),
              xi.toWorkingColorSpace(this, t),
              i(e[4]),
              this
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (e =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                s
              ))
          ) {
            const n = parseFloat(e[1]) / 360,
              r = parseFloat(e[2]) / 100,
              s = parseFloat(e[3]) / 100;
            return i(e[4]), this.setHSL(n, r, s, t);
          }
      }
    } else if ((n = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const e = n[1],
        i = e.length;
      if (3 === i)
        return (
          (this.r = parseInt(e.charAt(0) + e.charAt(0), 16) / 255),
          (this.g = parseInt(e.charAt(1) + e.charAt(1), 16) / 255),
          (this.b = parseInt(e.charAt(2) + e.charAt(2), 16) / 255),
          xi.toWorkingColorSpace(this, t),
          this
        );
      if (6 === i)
        return (
          (this.r = parseInt(e.charAt(0) + e.charAt(1), 16) / 255),
          (this.g = parseInt(e.charAt(2) + e.charAt(3), 16) / 255),
          (this.b = parseInt(e.charAt(4) + e.charAt(5), 16) / 255),
          xi.toWorkingColorSpace(this, t),
          this
        );
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = Kt) {
    const i = yi[e.toLowerCase()];
    return (
      void 0 !== i
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
    return (this.r = gi(e.r)), (this.g = gi(e.g)), (this.b = gi(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = vi(e.r)), (this.g = vi(e.g)), (this.b = vi(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Kt) {
    return (
      xi.fromWorkingColorSpace(Ti(this, bi), e),
      (ai(255 * bi.r, 0, 255) << 16) ^
        (ai(255 * bi.g, 0, 255) << 8) ^
        (ai(255 * bi.b, 0, 255) << 0)
    );
  }
  getHexString(e = Kt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Zt) {
    xi.fromWorkingColorSpace(Ti(this, bi), t);
    const i = bi.r,
      n = bi.g,
      r = bi.b,
      s = Math.max(i, n, r),
      a = Math.min(i, n, r);
    let o, l;
    const c = (a + s) / 2;
    if (a === s) (o = 0), (l = 0);
    else {
      const e = s - a;
      switch (((l = c <= 0.5 ? e / (s + a) : e / (2 - s - a)), s)) {
        case i:
          o = (n - r) / e + (n < r ? 6 : 0);
          break;
        case n:
          o = (r - i) / e + 2;
          break;
        case r:
          o = (i - n) / e + 4;
      }
      o /= 6;
    }
    return (e.h = o), (e.s = l), (e.l = c), e;
  }
  getRGB(e, t = Zt) {
    return (
      xi.fromWorkingColorSpace(Ti(this, bi), t),
      (e.r = bi.r),
      (e.g = bi.g),
      (e.b = bi.b),
      e
    );
  }
  getStyle(e = Kt) {
    return (
      xi.fromWorkingColorSpace(Ti(this, bi), e),
      e !== Kt
        ? `color(${e} ${bi.r} ${bi.g} ${bi.b})`
        : `rgb(${(255 * bi.r) | 0},${(255 * bi.g) | 0},${(255 * bi.b) | 0})`
    );
  }
  offsetHSL(e, t, i) {
    return (
      this.getHSL(Mi),
      (Mi.h += e),
      (Mi.s += t),
      (Mi.l += i),
      this.setHSL(Mi.h, Mi.s, Mi.l),
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
    this.getHSL(Mi), e.getHSL(wi);
    const i = oi(Mi.h, wi.h, t),
      n = oi(Mi.s, wi.s, t),
      r = oi(Mi.l, wi.l, t);
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
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
let Ai;
Ei.NAMES = yi;
class Ci {
  static getDataURL(e) {
    if (/^data:/i.test(e.src)) return e.src;
    if ("undefined" == typeof HTMLCanvasElement) return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      void 0 === Ai && (Ai = fi("canvas")),
        (Ai.width = e.width),
        (Ai.height = e.height);
      const i = Ai.getContext("2d");
      e instanceof ImageData
        ? i.putImageData(e, 0, 0)
        : i.drawImage(e, 0, 0, e.width, e.height),
        (t = Ai);
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
      ("undefined" != typeof HTMLImageElement &&
        e instanceof HTMLImageElement) ||
      ("undefined" != typeof HTMLCanvasElement &&
        e instanceof HTMLCanvasElement) ||
      ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap)
    ) {
      const t = fi("canvas");
      (t.width = e.width), (t.height = e.height);
      const i = t.getContext("2d");
      i.drawImage(e, 0, 0, e.width, e.height);
      const n = i.getImageData(0, 0, e.width, e.height),
        r = n.data;
      for (let e = 0; e < r.length; e++) r[e] = 255 * gi(r[e] / 255);
      return i.putImageData(n, 0, 0), t;
    }
    if (e.data) {
      const t = e.data.slice(0);
      for (let e = 0; e < t.length; e++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[e] = Math.floor(255 * gi(t[e] / 255)))
          : (t[e] = gi(t[e]));
      return { data: t, width: e.width, height: e.height };
    }
    return (
      console.warn(
        "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
      ),
      e
    );
  }
}
class Pi {
  constructor(e = null) {
    (this.isSource = !0),
      (this.uuid = si()),
      (this.data = e),
      (this.version = 0);
  }
  set needsUpdate(e) {
    !0 === e && this.version++;
  }
  toJSON(e) {
    const t = void 0 === e || "string" == typeof e;
    if (!t && void 0 !== e.images[this.uuid]) return e.images[this.uuid];
    const i = { uuid: this.uuid, url: "" },
      n = this.data;
    if (null !== n) {
      let e;
      if (Array.isArray(n)) {
        e = [];
        for (let t = 0, i = n.length; t < i; t++)
          n[t].isDataTexture ? e.push(Li(n[t].image)) : e.push(Li(n[t]));
      } else e = Li(n);
      i.url = e;
    }
    return t || (e.images[this.uuid] = i), i;
  }
}
function Li(e) {
  return ("undefined" != typeof HTMLImageElement &&
    e instanceof HTMLImageElement) ||
    ("undefined" != typeof HTMLCanvasElement &&
      e instanceof HTMLCanvasElement) ||
    ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap)
    ? Ci.getDataURL(e)
    : e.data
    ? {
        data: Array.from(e.data),
        width: e.width,
        height: e.height,
        type: e.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Ri = 0;
class Di extends ti {
  constructor(
    e = Di.DEFAULT_IMAGE,
    t = Di.DEFAULT_MAPPING,
    i = Ue,
    n = Ue,
    r = He,
    s = We,
    a = rt,
    o = je,
    l = 1,
    c = Wt
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: Ri++ }),
      (this.uuid = si()),
      (this.name = ""),
      (this.source = new Pi(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.wrapS = i),
      (this.wrapT = n),
      (this.magFilter = r),
      (this.minFilter = s),
      (this.anisotropy = l),
      (this.format = a),
      (this.internalFormat = null),
      (this.type = o),
      (this.offset = new di(0, 0)),
      (this.repeat = new di(1, 1)),
      (this.center = new di(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new pi()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.encoding = c),
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
    const t = void 0 === e || "string" == typeof e;
    if (!t && void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
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
      "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData),
      t || (e.textures[this.uuid] = i),
      i
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (300 !== this.mapping) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case ze:
          e.x = e.x - Math.floor(e.x);
          break;
        case Ue:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Fe:
          1 === Math.abs(Math.floor(e.x) % 2)
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case ze:
          e.y = e.y - Math.floor(e.y);
          break;
        case Ue:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Fe:
          1 === Math.abs(Math.floor(e.y) % 2)
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    !0 === e && (this.version++, (this.source.needsUpdate = !0));
  }
}
(Di.DEFAULT_IMAGE = null), (Di.DEFAULT_MAPPING = 300);
class Ii {
  constructor(e = 0, t = 0, i = 0, n = 1) {
    (Ii.prototype.isVector4 = !0),
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
      (this.w = void 0 !== e.w ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
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
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
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
      s = e.elements;
    return (
      (this.x = s[0] * t + s[4] * i + s[8] * n + s[12] * r),
      (this.y = s[1] * t + s[5] * i + s[9] * n + s[13] * r),
      (this.z = s[2] * t + s[6] * i + s[10] * n + s[14] * r),
      (this.w = s[3] * t + s[7] * i + s[11] * n + s[15] * r),
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
    const s = 0.01,
      a = 0.1,
      o = e.elements,
      l = o[0],
      c = o[4],
      h = o[8],
      u = o[1],
      d = o[5],
      p = o[9],
      m = o[2],
      f = o[6],
      g = o[10];
    if (Math.abs(c - u) < s && Math.abs(h - m) < s && Math.abs(p - f) < s) {
      if (
        Math.abs(c + u) < a &&
        Math.abs(h + m) < a &&
        Math.abs(p + f) < a &&
        Math.abs(l + d + g - 3) < a
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const e = (l + 1) / 2,
        o = (d + 1) / 2,
        v = (g + 1) / 2,
        _ = (c + u) / 4,
        x = (h + m) / 4,
        y = (p + f) / 4;
      return (
        e > o && e > v
          ? e < s
            ? ((i = 0), (n = 0.707106781), (r = 0.707106781))
            : ((i = Math.sqrt(e)), (n = _ / i), (r = x / i))
          : o > v
          ? o < s
            ? ((i = 0.707106781), (n = 0), (r = 0.707106781))
            : ((n = Math.sqrt(o)), (i = _ / n), (r = y / n))
          : v < s
          ? ((i = 0.707106781), (n = 0.707106781), (r = 0))
          : ((r = Math.sqrt(v)), (i = x / r), (n = y / r)),
        this.set(i, n, r, t),
        this
      );
    }
    let v = Math.sqrt(
      (f - p) * (f - p) + (h - m) * (h - m) + (u - c) * (u - c)
    );
    return (
      Math.abs(v) < 0.001 && (v = 1),
      (this.x = (f - p) / v),
      (this.y = (h - m) / v),
      (this.z = (u - c) / v),
      (this.w = Math.acos((l + d + g - 1) / 2)),
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
  fromBufferAttribute(e, t) {
    return (
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
class Oi extends ti {
  constructor(e = 1, t = 1, i = {}) {
    super(),
      (this.isWebGLRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new Ii(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new Ii(0, 0, e, t));
    const n = { width: e, height: t, depth: 1 };
    (this.texture = new Di(
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
        void 0 !== i.generateMipmaps && i.generateMipmaps),
      (this.texture.internalFormat =
        void 0 !== i.internalFormat ? i.internalFormat : null),
      (this.texture.minFilter = void 0 !== i.minFilter ? i.minFilter : He),
      (this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer),
      (this.stencilBuffer = void 0 !== i.stencilBuffer && i.stencilBuffer),
      (this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null),
      (this.samples = void 0 !== i.samples ? i.samples : 0);
  }
  setSize(e, t, i = 1) {
    (this.width === e && this.height === t && this.depth === i) ||
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
      (this.texture.source = new Pi(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      null !== e.depthTexture && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Ni extends Di {
  constructor(e = null, t = 1, i = 1, n = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: i, depth: n }),
      (this.magFilter = ke),
      (this.minFilter = ke),
      (this.wrapR = Ue),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class zi extends Di {
  constructor(e = null, t = 1, i = 1, n = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: i, depth: n }),
      (this.magFilter = ke),
      (this.minFilter = ke),
      (this.wrapR = Ue),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Ui {
  constructor(e = 0, t = 0, i = 0, n = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = i),
      (this._w = n);
  }
  static slerpFlat(e, t, i, n, r, s, a) {
    let o = i[n + 0],
      l = i[n + 1],
      c = i[n + 2],
      h = i[n + 3];
    const u = r[s + 0],
      d = r[s + 1],
      p = r[s + 2],
      m = r[s + 3];
    if (0 === a)
      return (
        (e[t + 0] = o), (e[t + 1] = l), (e[t + 2] = c), void (e[t + 3] = h)
      );
    if (1 === a)
      return (
        (e[t + 0] = u), (e[t + 1] = d), (e[t + 2] = p), void (e[t + 3] = m)
      );
    if (h !== m || o !== u || l !== d || c !== p) {
      let e = 1 - a;
      const t = o * u + l * d + c * p + h * m,
        i = t >= 0 ? 1 : -1,
        n = 1 - t * t;
      if (n > Number.EPSILON) {
        const r = Math.sqrt(n),
          s = Math.atan2(r, t * i);
        (e = Math.sin(e * s) / r), (a = Math.sin(a * s) / r);
      }
      const r = a * i;
      if (
        ((o = o * e + u * r),
        (l = l * e + d * r),
        (c = c * e + p * r),
        (h = h * e + m * r),
        e === 1 - a)
      ) {
        const e = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
        (o *= e), (l *= e), (c *= e), (h *= e);
      }
    }
    (e[t] = o), (e[t + 1] = l), (e[t + 2] = c), (e[t + 3] = h);
  }
  static multiplyQuaternionsFlat(e, t, i, n, r, s) {
    const a = i[n],
      o = i[n + 1],
      l = i[n + 2],
      c = i[n + 3],
      h = r[s],
      u = r[s + 1],
      d = r[s + 2],
      p = r[s + 3];
    return (
      (e[t] = a * p + c * h + o * d - l * u),
      (e[t + 1] = o * p + c * u + l * h - a * d),
      (e[t + 2] = l * p + c * d + a * u - o * h),
      (e[t + 3] = c * p - a * h - o * u - l * d),
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
    const i = e._x,
      n = e._y,
      r = e._z,
      s = e._order,
      a = Math.cos,
      o = Math.sin,
      l = a(i / 2),
      c = a(n / 2),
      h = a(r / 2),
      u = o(i / 2),
      d = o(n / 2),
      p = o(r / 2);
    switch (s) {
      case "XYZ":
        (this._x = u * c * h + l * d * p),
          (this._y = l * d * h - u * c * p),
          (this._z = l * c * p + u * d * h),
          (this._w = l * c * h - u * d * p);
        break;
      case "YXZ":
        (this._x = u * c * h + l * d * p),
          (this._y = l * d * h - u * c * p),
          (this._z = l * c * p - u * d * h),
          (this._w = l * c * h + u * d * p);
        break;
      case "ZXY":
        (this._x = u * c * h - l * d * p),
          (this._y = l * d * h + u * c * p),
          (this._z = l * c * p + u * d * h),
          (this._w = l * c * h - u * d * p);
        break;
      case "ZYX":
        (this._x = u * c * h - l * d * p),
          (this._y = l * d * h + u * c * p),
          (this._z = l * c * p - u * d * h),
          (this._w = l * c * h + u * d * p);
        break;
      case "YZX":
        (this._x = u * c * h + l * d * p),
          (this._y = l * d * h + u * c * p),
          (this._z = l * c * p - u * d * h),
          (this._w = l * c * h - u * d * p);
        break;
      case "XZY":
        (this._x = u * c * h - l * d * p),
          (this._y = l * d * h - u * c * p),
          (this._z = l * c * p + u * d * h),
          (this._w = l * c * h + u * d * p);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s
        );
    }
    return !1 !== t && this._onChangeCallback(), this;
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
      s = t[1],
      a = t[5],
      o = t[9],
      l = t[2],
      c = t[6],
      h = t[10],
      u = i + a + h;
    if (u > 0) {
      const e = 0.5 / Math.sqrt(u + 1);
      (this._w = 0.25 / e),
        (this._x = (c - o) * e),
        (this._y = (r - l) * e),
        (this._z = (s - n) * e);
    } else if (i > a && i > h) {
      const e = 2 * Math.sqrt(1 + i - a - h);
      (this._w = (c - o) / e),
        (this._x = 0.25 * e),
        (this._y = (n + s) / e),
        (this._z = (r + l) / e);
    } else if (a > h) {
      const e = 2 * Math.sqrt(1 + a - i - h);
      (this._w = (r - l) / e),
        (this._x = (n + s) / e),
        (this._y = 0.25 * e),
        (this._z = (o + c) / e);
    } else {
      const e = 2 * Math.sqrt(1 + h - i - a);
      (this._w = (s - n) / e),
        (this._x = (r + l) / e),
        (this._y = (o + c) / e),
        (this._z = 0.25 * e);
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
    return 2 * Math.acos(Math.abs(ai(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const i = this.angleTo(e);
    if (0 === i) return this;
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
      0 === e
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
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const i = e._x,
      n = e._y,
      r = e._z,
      s = e._w,
      a = t._x,
      o = t._y,
      l = t._z,
      c = t._w;
    return (
      (this._x = i * c + s * a + n * l - r * o),
      (this._y = n * c + s * o + r * a - i * l),
      (this._z = r * c + s * l + i * o - n * a),
      (this._w = s * c - i * a - n * o - r * l),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (0 === t) return this;
    if (1 === t) return this.copy(e);
    const i = this._x,
      n = this._y,
      r = this._z,
      s = this._w;
    let a = s * e._w + i * e._x + n * e._y + r * e._z;
    if (
      (a < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (a = -a))
        : this.copy(e),
      a >= 1)
    )
      return (this._w = s), (this._x = i), (this._y = n), (this._z = r), this;
    const o = 1 - a * a;
    if (o <= Number.EPSILON) {
      const e = 1 - t;
      return (
        (this._w = e * s + t * this._w),
        (this._x = e * i + t * this._x),
        (this._y = e * n + t * this._y),
        (this._z = e * r + t * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    const l = Math.sqrt(o),
      c = Math.atan2(l, a),
      h = Math.sin((1 - t) * c) / l,
      u = Math.sin(t * c) / l;
    return (
      (this._w = s * h + this._w * u),
      (this._x = i * h + this._x * u),
      (this._y = n * h + this._y * u),
      (this._z = r * h + this._z * u),
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
class Fi {
  constructor(e = 0, t = 0, i = 0) {
    (Fi.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = i);
  }
  set(e, t, i) {
    return (
      void 0 === i && (i = this.z),
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
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
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
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
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
    return this.applyQuaternion(Bi.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Bi.setFromAxisAngle(e, t));
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
      s = 1 / (r[3] * t + r[7] * i + r[11] * n + r[15]);
    return (
      (this.x = (r[0] * t + r[4] * i + r[8] * n + r[12]) * s),
      (this.y = (r[1] * t + r[5] * i + r[9] * n + r[13]) * s),
      (this.z = (r[2] * t + r[6] * i + r[10] * n + r[14]) * s),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      i = this.y,
      n = this.z,
      r = e.x,
      s = e.y,
      a = e.z,
      o = e.w,
      l = o * t + s * n - a * i,
      c = o * i + a * t - r * n,
      h = o * n + r * i - s * t,
      u = -r * t - s * i - a * n;
    return (
      (this.x = l * o + u * -r + c * -a - h * -s),
      (this.y = c * o + u * -s + h * -r - l * -a),
      (this.z = h * o + u * -a + l * -s - c * -r),
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
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const i = e.x,
      n = e.y,
      r = e.z,
      s = t.x,
      a = t.y,
      o = t.z;
    return (
      (this.x = n * o - r * a),
      (this.y = r * s - i * o),
      (this.z = i * a - n * s),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (0 === t) return this.set(0, 0, 0);
    const i = e.dot(this) / t;
    return this.copy(e).multiplyScalar(i);
  }
  projectOnPlane(e) {
    return ki.copy(this).projectOnVector(e), this.sub(ki);
  }
  reflect(e) {
    return this.sub(ki.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (0 === t) return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(ai(i, -1, 1));
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
    return this.fromArray(e.elements, 4 * t);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, 3 * t);
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
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
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
    const e = 2 * (Math.random() - 0.5),
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
const ki = new Fi(),
  Bi = new Ui();
class Vi {
  constructor(
    e = new Fi(1 / 0, 1 / 0, 1 / 0),
    t = new Fi(-1 / 0, -1 / 0, -1 / 0)
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
      s = -1 / 0,
      a = -1 / 0;
    for (let o = 0, l = e.length; o < l; o += 3) {
      const l = e[o],
        c = e[o + 1],
        h = e[o + 2];
      l < t && (t = l),
        c < i && (i = c),
        h < n && (n = h),
        l > r && (r = l),
        c > s && (s = c),
        h > a && (a = h);
    }
    return this.min.set(t, i, n), this.max.set(r, s, a), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0,
      i = 1 / 0,
      n = 1 / 0,
      r = -1 / 0,
      s = -1 / 0,
      a = -1 / 0;
    for (let o = 0, l = e.count; o < l; o++) {
      const l = e.getX(o),
        c = e.getY(o),
        h = e.getZ(o);
      l < t && (t = l),
        c < i && (i = c),
        h < n && (n = h),
        l > r && (r = l),
        c > s && (s = c),
        h > a && (a = h);
    }
    return this.min.set(t, i, n), this.max.set(r, s, a), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const i = Gi.copy(t).multiplyScalar(0.5);
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
    if (void 0 !== i)
      if (t && null != i.attributes && void 0 !== i.attributes.position) {
        const t = i.attributes.position;
        for (let i = 0, n = t.count; i < n; i++)
          Gi.fromBufferAttribute(t, i).applyMatrix4(e.matrixWorld),
            this.expandByPoint(Gi);
      } else
        null === i.boundingBox && i.computeBoundingBox(),
          Wi.copy(i.boundingBox),
          Wi.applyMatrix4(e.matrixWorld),
          this.union(Wi);
    const n = e.children;
    for (let r = 0, s = n.length; r < s; r++) this.expandByObject(n[r], t);
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
      this.clampPoint(e.center, Gi),
      Gi.distanceToSquared(e.center) <= e.radius * e.radius
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
    this.getCenter(Ji),
      Qi.subVectors(this.max, Ji),
      ji.subVectors(e.a, Ji),
      qi.subVectors(e.b, Ji),
      Xi.subVectors(e.c, Ji),
      Yi.subVectors(qi, ji),
      Ki.subVectors(Xi, qi),
      Zi.subVectors(ji, Xi);
    let t = [
      0,
      -Yi.z,
      Yi.y,
      0,
      -Ki.z,
      Ki.y,
      0,
      -Zi.z,
      Zi.y,
      Yi.z,
      0,
      -Yi.x,
      Ki.z,
      0,
      -Ki.x,
      Zi.z,
      0,
      -Zi.x,
      -Yi.y,
      Yi.x,
      0,
      -Ki.y,
      Ki.x,
      0,
      -Zi.y,
      Zi.x,
      0,
    ];
    return (
      !!tn(t, ji, qi, Xi, Qi) &&
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      !!tn(t, ji, qi, Xi, Qi) &&
        ($i.crossVectors(Yi, Ki),
        (t = [$i.x, $i.y, $i.z]),
        tn(t, ji, qi, Xi, Qi)))
    );
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return Gi.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return (
      this.getCenter(e.center), (e.radius = 0.5 * this.getSize(Gi).length()), e
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
    return (
      this.isEmpty() ||
        (Hi[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        Hi[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        Hi[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        Hi[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        Hi[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        Hi[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        Hi[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        Hi[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(Hi)),
      this
    );
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Hi = [
    new Fi(),
    new Fi(),
    new Fi(),
    new Fi(),
    new Fi(),
    new Fi(),
    new Fi(),
    new Fi(),
  ],
  Gi = new Fi(),
  Wi = new Vi(),
  ji = new Fi(),
  qi = new Fi(),
  Xi = new Fi(),
  Yi = new Fi(),
  Ki = new Fi(),
  Zi = new Fi(),
  Ji = new Fi(),
  Qi = new Fi(),
  $i = new Fi(),
  en = new Fi();
function tn(e, t, i, n, r) {
  for (let s = 0, a = e.length - 3; s <= a; s += 3) {
    en.fromArray(e, s);
    const a =
        r.x * Math.abs(en.x) + r.y * Math.abs(en.y) + r.z * Math.abs(en.z),
      o = t.dot(en),
      l = i.dot(en),
      c = n.dot(en);
    if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > a) return !1;
  }
  return !0;
}
const nn = new Vi(),
  rn = new Fi(),
  sn = new Fi();
class an {
  constructor(e = new Fi(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const i = this.center;
    void 0 !== t ? i.copy(t) : nn.setFromPoints(e).getCenter(i);
    let n = 0;
    for (let r = 0, s = e.length; r < s; r++)
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
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    rn.subVectors(e, this.center);
    const t = rn.lengthSq();
    if (t > this.radius * this.radius) {
      const e = Math.sqrt(t),
        i = 0.5 * (e - this.radius);
      this.center.addScaledVector(rn, i / e), (this.radius += i);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(e), this)
      : (!0 === this.center.equals(e.center)
          ? (this.radius = Math.max(this.radius, e.radius))
          : (sn.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(rn.copy(e.center).add(sn)),
            this.expandByPoint(rn.copy(e.center).sub(sn))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const on = new Fi(),
  ln = new Fi(),
  cn = new Fi(),
  hn = new Fi(),
  un = new Fi(),
  dn = new Fi(),
  pn = new Fi();
class mn {
  constructor(e = new Fi(), t = new Fi(0, 0, -1)) {
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
    return this.origin.copy(this.at(e, on)), this;
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
    const t = on.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (on.copy(this.direction).multiplyScalar(t).add(this.origin),
        on.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, i, n) {
    ln.copy(e).add(t).multiplyScalar(0.5),
      cn.copy(t).sub(e).normalize(),
      hn.copy(this.origin).sub(ln);
    const r = 0.5 * e.distanceTo(t),
      s = -this.direction.dot(cn),
      a = hn.dot(this.direction),
      o = -hn.dot(cn),
      l = hn.lengthSq(),
      c = Math.abs(1 - s * s);
    let h, u, d, p;
    if (c > 0)
      if (((h = s * o - a), (u = s * a - o), (p = r * c), h >= 0))
        if (u >= -p)
          if (u <= p) {
            const e = 1 / c;
            (h *= e),
              (u *= e),
              (d = h * (h + s * u + 2 * a) + u * (s * h + u + 2 * o) + l);
          } else
            (u = r),
              (h = Math.max(0, -(s * u + a))),
              (d = -h * h + u * (u + 2 * o) + l);
        else
          (u = -r),
            (h = Math.max(0, -(s * u + a))),
            (d = -h * h + u * (u + 2 * o) + l);
      else
        u <= -p
          ? ((h = Math.max(0, -(-s * r + a))),
            (u = h > 0 ? -r : Math.min(Math.max(-r, -o), r)),
            (d = -h * h + u * (u + 2 * o) + l))
          : u <= p
          ? ((h = 0),
            (u = Math.min(Math.max(-r, -o), r)),
            (d = u * (u + 2 * o) + l))
          : ((h = Math.max(0, -(s * r + a))),
            (u = h > 0 ? r : Math.min(Math.max(-r, -o), r)),
            (d = -h * h + u * (u + 2 * o) + l));
    else
      (u = s > 0 ? -r : r),
        (h = Math.max(0, -(s * u + a))),
        (d = -h * h + u * (u + 2 * o) + l);
    return (
      i && i.copy(this.direction).multiplyScalar(h).add(this.origin),
      n && n.copy(cn).multiplyScalar(u).add(ln),
      d
    );
  }
  intersectSphere(e, t) {
    on.subVectors(e.center, this.origin);
    const i = on.dot(this.direction),
      n = on.dot(on) - i * i,
      r = e.radius * e.radius;
    if (n > r) return null;
    const s = Math.sqrt(r - n),
      a = i - s,
      o = i + s;
    return a < 0 && o < 0 ? null : a < 0 ? this.at(o, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (0 === t) return 0 === e.distanceToPoint(this.origin) ? 0 : null;
    const i = -(this.origin.dot(e.normal) + e.constant) / t;
    return i >= 0 ? i : null;
  }
  intersectPlane(e, t) {
    const i = this.distanceToPlane(e);
    return null === i ? null : this.at(i, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    if (0 === t) return !0;
    return e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let i, n, r, s, a, o;
    const l = 1 / this.direction.x,
      c = 1 / this.direction.y,
      h = 1 / this.direction.z,
      u = this.origin;
    return (
      l >= 0
        ? ((i = (e.min.x - u.x) * l), (n = (e.max.x - u.x) * l))
        : ((i = (e.max.x - u.x) * l), (n = (e.min.x - u.x) * l)),
      c >= 0
        ? ((r = (e.min.y - u.y) * c), (s = (e.max.y - u.y) * c))
        : ((r = (e.max.y - u.y) * c), (s = (e.min.y - u.y) * c)),
      i > s || r > n
        ? null
        : ((r > i || isNaN(i)) && (i = r),
          (s < n || isNaN(n)) && (n = s),
          h >= 0
            ? ((a = (e.min.z - u.z) * h), (o = (e.max.z - u.z) * h))
            : ((a = (e.max.z - u.z) * h), (o = (e.min.z - u.z) * h)),
          i > o || a > n
            ? null
            : ((a > i || i != i) && (i = a),
              (o < n || n != n) && (n = o),
              n < 0 ? null : this.at(i >= 0 ? i : n, t)))
    );
  }
  intersectsBox(e) {
    return null !== this.intersectBox(e, on);
  }
  intersectTriangle(e, t, i, n, r) {
    un.subVectors(t, e), dn.subVectors(i, e), pn.crossVectors(un, dn);
    let s,
      a = this.direction.dot(pn);
    if (a > 0) {
      if (n) return null;
      s = 1;
    } else {
      if (!(a < 0)) return null;
      (s = -1), (a = -a);
    }
    hn.subVectors(this.origin, e);
    const o = s * this.direction.dot(dn.crossVectors(hn, dn));
    if (o < 0) return null;
    const l = s * this.direction.dot(un.cross(hn));
    if (l < 0) return null;
    if (o + l > a) return null;
    const c = -s * hn.dot(pn);
    return c < 0 ? null : this.at(c / a, r);
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
class fn {
  constructor() {
    (fn.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }
  set(e, t, i, n, r, s, a, o, l, c, h, u, d, p, m, f) {
    const g = this.elements;
    return (
      (g[0] = e),
      (g[4] = t),
      (g[8] = i),
      (g[12] = n),
      (g[1] = r),
      (g[5] = s),
      (g[9] = a),
      (g[13] = o),
      (g[2] = l),
      (g[6] = c),
      (g[10] = h),
      (g[14] = u),
      (g[3] = d),
      (g[7] = p),
      (g[11] = m),
      (g[15] = f),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new fn().fromArray(this.elements);
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
      n = 1 / gn.setFromMatrixColumn(e, 0).length(),
      r = 1 / gn.setFromMatrixColumn(e, 1).length(),
      s = 1 / gn.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = i[0] * n),
      (t[1] = i[1] * n),
      (t[2] = i[2] * n),
      (t[3] = 0),
      (t[4] = i[4] * r),
      (t[5] = i[5] * r),
      (t[6] = i[6] * r),
      (t[7] = 0),
      (t[8] = i[8] * s),
      (t[9] = i[9] * s),
      (t[10] = i[10] * s),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      i = e.x,
      n = e.y,
      r = e.z,
      s = Math.cos(i),
      a = Math.sin(i),
      o = Math.cos(n),
      l = Math.sin(n),
      c = Math.cos(r),
      h = Math.sin(r);
    if ("XYZ" === e.order) {
      const e = s * c,
        i = s * h,
        n = a * c,
        r = a * h;
      (t[0] = o * c),
        (t[4] = -o * h),
        (t[8] = l),
        (t[1] = i + n * l),
        (t[5] = e - r * l),
        (t[9] = -a * o),
        (t[2] = r - e * l),
        (t[6] = n + i * l),
        (t[10] = s * o);
    } else if ("YXZ" === e.order) {
      const e = o * c,
        i = o * h,
        n = l * c,
        r = l * h;
      (t[0] = e + r * a),
        (t[4] = n * a - i),
        (t[8] = s * l),
        (t[1] = s * h),
        (t[5] = s * c),
        (t[9] = -a),
        (t[2] = i * a - n),
        (t[6] = r + e * a),
        (t[10] = s * o);
    } else if ("ZXY" === e.order) {
      const e = o * c,
        i = o * h,
        n = l * c,
        r = l * h;
      (t[0] = e - r * a),
        (t[4] = -s * h),
        (t[8] = n + i * a),
        (t[1] = i + n * a),
        (t[5] = s * c),
        (t[9] = r - e * a),
        (t[2] = -s * l),
        (t[6] = a),
        (t[10] = s * o);
    } else if ("ZYX" === e.order) {
      const e = s * c,
        i = s * h,
        n = a * c,
        r = a * h;
      (t[0] = o * c),
        (t[4] = n * l - i),
        (t[8] = e * l + r),
        (t[1] = o * h),
        (t[5] = r * l + e),
        (t[9] = i * l - n),
        (t[2] = -l),
        (t[6] = a * o),
        (t[10] = s * o);
    } else if ("YZX" === e.order) {
      const e = s * o,
        i = s * l,
        n = a * o,
        r = a * l;
      (t[0] = o * c),
        (t[4] = r - e * h),
        (t[8] = n * h + i),
        (t[1] = h),
        (t[5] = s * c),
        (t[9] = -a * c),
        (t[2] = -l * c),
        (t[6] = i * h + n),
        (t[10] = e - r * h);
    } else if ("XZY" === e.order) {
      const e = s * o,
        i = s * l,
        n = a * o,
        r = a * l;
      (t[0] = o * c),
        (t[4] = -h),
        (t[8] = l * c),
        (t[1] = e * h + r),
        (t[5] = s * c),
        (t[9] = i * h - n),
        (t[2] = n * h - i),
        (t[6] = a * c),
        (t[10] = r * h + e);
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
    return this.compose(_n, e, xn);
  }
  lookAt(e, t, i) {
    const n = this.elements;
    return (
      Mn.subVectors(e, t),
      0 === Mn.lengthSq() && (Mn.z = 1),
      Mn.normalize(),
      yn.crossVectors(i, Mn),
      0 === yn.lengthSq() &&
        (1 === Math.abs(i.z) ? (Mn.x += 1e-4) : (Mn.z += 1e-4),
        Mn.normalize(),
        yn.crossVectors(i, Mn)),
      yn.normalize(),
      bn.crossVectors(Mn, yn),
      (n[0] = yn.x),
      (n[4] = bn.x),
      (n[8] = Mn.x),
      (n[1] = yn.y),
      (n[5] = bn.y),
      (n[9] = Mn.y),
      (n[2] = yn.z),
      (n[6] = bn.z),
      (n[10] = Mn.z),
      this
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
      s = i[0],
      a = i[4],
      o = i[8],
      l = i[12],
      c = i[1],
      h = i[5],
      u = i[9],
      d = i[13],
      p = i[2],
      m = i[6],
      f = i[10],
      g = i[14],
      v = i[3],
      _ = i[7],
      x = i[11],
      y = i[15],
      b = n[0],
      M = n[4],
      w = n[8],
      S = n[12],
      T = n[1],
      E = n[5],
      A = n[9],
      C = n[13],
      P = n[2],
      L = n[6],
      R = n[10],
      D = n[14],
      I = n[3],
      O = n[7],
      N = n[11],
      z = n[15];
    return (
      (r[0] = s * b + a * T + o * P + l * I),
      (r[4] = s * M + a * E + o * L + l * O),
      (r[8] = s * w + a * A + o * R + l * N),
      (r[12] = s * S + a * C + o * D + l * z),
      (r[1] = c * b + h * T + u * P + d * I),
      (r[5] = c * M + h * E + u * L + d * O),
      (r[9] = c * w + h * A + u * R + d * N),
      (r[13] = c * S + h * C + u * D + d * z),
      (r[2] = p * b + m * T + f * P + g * I),
      (r[6] = p * M + m * E + f * L + g * O),
      (r[10] = p * w + m * A + f * R + g * N),
      (r[14] = p * S + m * C + f * D + g * z),
      (r[3] = v * b + _ * T + x * P + y * I),
      (r[7] = v * M + _ * E + x * L + y * O),
      (r[11] = v * w + _ * A + x * R + y * N),
      (r[15] = v * S + _ * C + x * D + y * z),
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
      s = e[1],
      a = e[5],
      o = e[9],
      l = e[13],
      c = e[2],
      h = e[6],
      u = e[10],
      d = e[14];
    return (
      e[3] *
        (+r * o * h -
          n * l * h -
          r * a * u +
          i * l * u +
          n * a * d -
          i * o * d) +
      e[7] *
        (+t * o * d -
          t * l * u +
          r * s * u -
          n * s * d +
          n * l * c -
          r * o * c) +
      e[11] *
        (+t * l * h -
          t * a * d -
          r * s * h +
          i * s * d +
          r * a * c -
          i * l * c) +
      e[15] *
        (-n * a * c - t * o * h + t * a * u + n * s * h - i * s * u + i * o * c)
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
      s = e[4],
      a = e[5],
      o = e[6],
      l = e[7],
      c = e[8],
      h = e[9],
      u = e[10],
      d = e[11],
      p = e[12],
      m = e[13],
      f = e[14],
      g = e[15],
      v = h * f * l - m * u * l + m * o * d - a * f * d - h * o * g + a * u * g,
      _ = p * u * l - c * f * l - p * o * d + s * f * d + c * o * g - s * u * g,
      x = c * m * l - p * h * l + p * a * d - s * m * d - c * a * g + s * h * g,
      y = p * h * o - c * m * o - p * a * u + s * m * u + c * a * f - s * h * f,
      b = t * v + i * _ + n * x + r * y;
    if (0 === b)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const M = 1 / b;
    return (
      (e[0] = v * M),
      (e[1] =
        (m * u * r -
          h * f * r -
          m * n * d +
          i * f * d +
          h * n * g -
          i * u * g) *
        M),
      (e[2] =
        (a * f * r -
          m * o * r +
          m * n * l -
          i * f * l -
          a * n * g +
          i * o * g) *
        M),
      (e[3] =
        (h * o * r -
          a * u * r -
          h * n * l +
          i * u * l +
          a * n * d -
          i * o * d) *
        M),
      (e[4] = _ * M),
      (e[5] =
        (c * f * r -
          p * u * r +
          p * n * d -
          t * f * d -
          c * n * g +
          t * u * g) *
        M),
      (e[6] =
        (p * o * r -
          s * f * r -
          p * n * l +
          t * f * l +
          s * n * g -
          t * o * g) *
        M),
      (e[7] =
        (s * u * r -
          c * o * r +
          c * n * l -
          t * u * l -
          s * n * d +
          t * o * d) *
        M),
      (e[8] = x * M),
      (e[9] =
        (p * h * r -
          c * m * r -
          p * i * d +
          t * m * d +
          c * i * g -
          t * h * g) *
        M),
      (e[10] =
        (s * m * r -
          p * a * r +
          p * i * l -
          t * m * l -
          s * i * g +
          t * a * g) *
        M),
      (e[11] =
        (c * a * r -
          s * h * r -
          c * i * l +
          t * h * l +
          s * i * d -
          t * a * d) *
        M),
      (e[12] = y * M),
      (e[13] =
        (c * m * n -
          p * h * n +
          p * i * u -
          t * m * u -
          c * i * f +
          t * h * f) *
        M),
      (e[14] =
        (p * a * n -
          s * m * n -
          p * i * o +
          t * m * o +
          s * i * f -
          t * a * f) *
        M),
      (e[15] =
        (s * h * n -
          c * a * n +
          c * i * o -
          t * h * o -
          s * i * u +
          t * a * u) *
        M),
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
      s = e.x,
      a = e.y,
      o = e.z,
      l = r * s,
      c = r * a;
    return (
      this.set(
        l * s + i,
        l * a - n * o,
        l * o + n * a,
        0,
        l * a + n * o,
        c * a + i,
        c * o - n * s,
        0,
        l * o - n * a,
        c * o + n * s,
        r * o * o + i,
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
  makeShear(e, t, i, n, r, s) {
    return this.set(1, i, r, 0, e, 1, s, 0, t, n, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, i) {
    const n = this.elements,
      r = t._x,
      s = t._y,
      a = t._z,
      o = t._w,
      l = r + r,
      c = s + s,
      h = a + a,
      u = r * l,
      d = r * c,
      p = r * h,
      m = s * c,
      f = s * h,
      g = a * h,
      v = o * l,
      _ = o * c,
      x = o * h,
      y = i.x,
      b = i.y,
      M = i.z;
    return (
      (n[0] = (1 - (m + g)) * y),
      (n[1] = (d + x) * y),
      (n[2] = (p - _) * y),
      (n[3] = 0),
      (n[4] = (d - x) * b),
      (n[5] = (1 - (u + g)) * b),
      (n[6] = (f + v) * b),
      (n[7] = 0),
      (n[8] = (p + _) * M),
      (n[9] = (f - v) * M),
      (n[10] = (1 - (u + m)) * M),
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
    let r = gn.set(n[0], n[1], n[2]).length();
    const s = gn.set(n[4], n[5], n[6]).length(),
      a = gn.set(n[8], n[9], n[10]).length();
    this.determinant() < 0 && (r = -r),
      (e.x = n[12]),
      (e.y = n[13]),
      (e.z = n[14]),
      vn.copy(this);
    const o = 1 / r,
      l = 1 / s,
      c = 1 / a;
    return (
      (vn.elements[0] *= o),
      (vn.elements[1] *= o),
      (vn.elements[2] *= o),
      (vn.elements[4] *= l),
      (vn.elements[5] *= l),
      (vn.elements[6] *= l),
      (vn.elements[8] *= c),
      (vn.elements[9] *= c),
      (vn.elements[10] *= c),
      t.setFromRotationMatrix(vn),
      (i.x = r),
      (i.y = s),
      (i.z = a),
      this
    );
  }
  makePerspective(e, t, i, n, r, s) {
    const a = this.elements,
      o = (2 * r) / (t - e),
      l = (2 * r) / (i - n),
      c = (t + e) / (t - e),
      h = (i + n) / (i - n),
      u = -(s + r) / (s - r),
      d = (-2 * s * r) / (s - r);
    return (
      (a[0] = o),
      (a[4] = 0),
      (a[8] = c),
      (a[12] = 0),
      (a[1] = 0),
      (a[5] = l),
      (a[9] = h),
      (a[13] = 0),
      (a[2] = 0),
      (a[6] = 0),
      (a[10] = u),
      (a[14] = d),
      (a[3] = 0),
      (a[7] = 0),
      (a[11] = -1),
      (a[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, i, n, r, s) {
    const a = this.elements,
      o = 1 / (t - e),
      l = 1 / (i - n),
      c = 1 / (s - r),
      h = (t + e) * o,
      u = (i + n) * l,
      d = (s + r) * c;
    return (
      (a[0] = 2 * o),
      (a[4] = 0),
      (a[8] = 0),
      (a[12] = -h),
      (a[1] = 0),
      (a[5] = 2 * l),
      (a[9] = 0),
      (a[13] = -u),
      (a[2] = 0),
      (a[6] = 0),
      (a[10] = -2 * c),
      (a[14] = -d),
      (a[3] = 0),
      (a[7] = 0),
      (a[11] = 0),
      (a[15] = 1),
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
const gn = new Fi(),
  vn = new fn(),
  _n = new Fi(0, 0, 0),
  xn = new Fi(1, 1, 1),
  yn = new Fi(),
  bn = new Fi(),
  Mn = new Fi(),
  wn = new fn(),
  Sn = new Ui();
class Tn {
  constructor(e = 0, t = 0, i = 0, n = Tn.DefaultOrder) {
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
      s = n[4],
      a = n[8],
      o = n[1],
      l = n[5],
      c = n[9],
      h = n[2],
      u = n[6],
      d = n[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(ai(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(-c, d)), (this._z = Math.atan2(-s, r)))
            : ((this._x = Math.atan2(u, l)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-ai(c, -1, 1))),
          Math.abs(c) < 0.9999999
            ? ((this._y = Math.atan2(a, d)), (this._z = Math.atan2(o, l)))
            : ((this._y = Math.atan2(-h, r)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(ai(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(-h, d)), (this._z = Math.atan2(-s, l)))
            : ((this._y = 0), (this._z = Math.atan2(o, r)));
        break;
      case "ZYX":
        (this._y = Math.asin(-ai(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._x = Math.atan2(u, d)), (this._z = Math.atan2(o, r)))
            : ((this._x = 0), (this._z = Math.atan2(-s, l)));
        break;
      case "YZX":
        (this._z = Math.asin(ai(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-c, l)), (this._y = Math.atan2(-h, r)))
            : ((this._x = 0), (this._y = Math.atan2(a, d)));
        break;
      case "XZY":
        (this._z = Math.asin(-ai(s, -1, 1))),
          Math.abs(s) < 0.9999999
            ? ((this._x = Math.atan2(u, l)), (this._y = Math.atan2(a, r)))
            : ((this._x = Math.atan2(-c, d)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t
        );
    }
    return (this._order = t), !0 === i && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, i) {
    return (
      wn.makeRotationFromQuaternion(e), this.setFromRotationMatrix(wn, t, i)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Sn.setFromEuler(this), this.setFromQuaternion(Sn, e);
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
      void 0 !== e[3] && (this._order = e[3]),
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
(Tn.DefaultOrder = "XYZ"),
  (Tn.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"]);
class En {
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
    return 0 != (this.mask & e.mask);
  }
  isEnabled(e) {
    return 0 != (this.mask & ((1 << e) | 0));
  }
}
let An = 0;
const Cn = new Fi(),
  Pn = new Ui(),
  Ln = new fn(),
  Rn = new Fi(),
  Dn = new Fi(),
  In = new Fi(),
  On = new Ui(),
  Nn = new Fi(1, 0, 0),
  zn = new Fi(0, 1, 0),
  Un = new Fi(0, 0, 1),
  Fn = { type: "added" },
  kn = { type: "removed" };
class Bn extends ti {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: An++ }),
      (this.uuid = si()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = Bn.DefaultUp.clone());
    const e = new Fi(),
      t = new Tn(),
      i = new Ui(),
      n = new Fi(1, 1, 1);
    t._onChange(function () {
      i.setFromEuler(t, !1);
    }),
      i._onChange(function () {
        t.setFromQuaternion(i, void 0, !1);
      }),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: i },
        scale: { configurable: !0, enumerable: !0, value: n },
        modelViewMatrix: { value: new fn() },
        normalMatrix: { value: new pi() },
      }),
      (this.matrix = new fn()),
      (this.matrixWorld = new fn()),
      (this.matrixAutoUpdate = Bn.DefaultMatrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = !1),
      (this.matrixWorldAutoUpdate = Bn.DefaultMatrixWorldAutoUpdate),
      (this.layers = new En()),
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
    return Pn.setFromAxisAngle(e, t), this.quaternion.multiply(Pn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Pn.setFromAxisAngle(e, t), this.quaternion.premultiply(Pn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Nn, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(zn, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Un, e);
  }
  translateOnAxis(e, t) {
    return (
      Cn.copy(e).applyQuaternion(this.quaternion),
      this.position.add(Cn.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Nn, e);
  }
  translateY(e) {
    return this.translateOnAxis(zn, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Un, e);
  }
  localToWorld(e) {
    return e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return e.applyMatrix4(Ln.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, i) {
    e.isVector3 ? Rn.copy(e) : Rn.set(e, t, i);
    const n = this.parent;
    this.updateWorldMatrix(!0, !1),
      Dn.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? Ln.lookAt(Dn, Rn, this.up)
        : Ln.lookAt(Rn, Dn, this.up),
      this.quaternion.setFromRotationMatrix(Ln),
      n &&
        (Ln.extractRotation(n.matrixWorld),
        Pn.setFromRotationMatrix(Ln),
        this.quaternion.premultiply(Pn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (null !== e.parent && e.parent.remove(e),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(Fn))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      -1 !== t &&
        ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(kn)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return null !== e && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      (t.parent = null), t.dispatchEvent(kn);
    }
    return (this.children.length = 0), this;
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      Ln.copy(this.matrixWorld).invert(),
      null !== e.parent &&
        (e.parent.updateWorldMatrix(!0, !1), Ln.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(Ln),
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
      const n = this.children[i].getObjectByProperty(e, t);
      if (void 0 !== n) return n;
    }
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Dn, e, In), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Dn, On, e), e
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
    if (!1 === this.visible) return;
    e(this);
    const t = this.children;
    for (let i = 0, n = t.length; i < n; i++) t[i].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    null !== t && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (null === this.parent
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let i = 0, n = t.length; i < n; i++) {
      const n = t[i];
      (!0 !== n.matrixWorldAutoUpdate && !0 !== e) || n.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const i = this.parent;
    if (
      (!0 === e &&
        null !== i &&
        !0 === i.matrixWorldAutoUpdate &&
        i.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      null === this.parent
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          ),
      !0 === t)
    ) {
      const e = this.children;
      for (let t = 0, i = e.length; t < i; t++) {
        const i = e[t];
        !0 === i.matrixWorldAutoUpdate && i.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = void 0 === e || "string" == typeof e,
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
    function r(t, i) {
      return void 0 === t[i.uuid] && (t[i.uuid] = i.toJSON(e)), i.uuid;
    }
    if (
      ((n.uuid = this.uuid),
      (n.type = this.type),
      "" !== this.name && (n.name = this.name),
      !0 === this.castShadow && (n.castShadow = !0),
      !0 === this.receiveShadow && (n.receiveShadow = !0),
      !1 === this.visible && (n.visible = !1),
      !1 === this.frustumCulled && (n.frustumCulled = !1),
      0 !== this.renderOrder && (n.renderOrder = this.renderOrder),
      "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
      (n.layers = this.layers.mask),
      (n.matrix = this.matrix.toArray()),
      !1 === this.matrixAutoUpdate && (n.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((n.type = "InstancedMesh"),
        (n.count = this.count),
        (n.instanceMatrix = this.instanceMatrix.toJSON()),
        null !== this.instanceColor &&
          (n.instanceColor = this.instanceColor.toJSON())),
      this.isScene)
    )
      this.background &&
        (this.background.isColor
          ? (n.background = this.background.toJSON())
          : this.background.isTexture &&
            (n.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          !0 !== this.environment.isRenderTargetTexture &&
          (n.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      n.geometry = r(e.geometries, this.geometry);
      const t = this.geometry.parameters;
      if (void 0 !== t && void 0 !== t.shapes) {
        const i = t.shapes;
        if (Array.isArray(i))
          for (let t = 0, n = i.length; t < n; t++) {
            const n = i[t];
            r(e.shapes, n);
          }
        else r(e.shapes, i);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((n.bindMode = this.bindMode),
        (n.bindMatrix = this.bindMatrix.toArray()),
        void 0 !== this.skeleton &&
          (r(e.skeletons, this.skeleton), (n.skeleton = this.skeleton.uuid))),
      void 0 !== this.material)
    )
      if (Array.isArray(this.material)) {
        const t = [];
        for (let i = 0, n = this.material.length; i < n; i++)
          t.push(r(e.materials, this.material[i]));
        n.material = t;
      } else n.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      n.children = [];
      for (let t = 0; t < this.children.length; t++)
        n.children.push(this.children[t].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      n.animations = [];
      for (let t = 0; t < this.animations.length; t++) {
        const i = this.animations[t];
        n.animations.push(r(e.animations, i));
      }
    }
    if (t) {
      const t = s(e.geometries),
        n = s(e.materials),
        r = s(e.textures),
        a = s(e.images),
        o = s(e.shapes),
        l = s(e.skeletons),
        c = s(e.animations),
        h = s(e.nodes);
      t.length > 0 && (i.geometries = t),
        n.length > 0 && (i.materials = n),
        r.length > 0 && (i.textures = r),
        a.length > 0 && (i.images = a),
        o.length > 0 && (i.shapes = o),
        l.length > 0 && (i.skeletons = l),
        c.length > 0 && (i.animations = c),
        h.length > 0 && (i.nodes = h);
    }
    return (i.object = n), i;
    function s(e) {
      const t = [];
      for (const i in e) {
        const n = e[i];
        delete n.metadata, t.push(n);
      }
      return t;
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
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      !0 === t)
    )
      for (let i = 0; i < e.children.length; i++) {
        const t = e.children[i];
        this.add(t.clone());
      }
    return this;
  }
}
(Bn.DefaultUp = new Fi(0, 1, 0)),
  (Bn.DefaultMatrixAutoUpdate = !0),
  (Bn.DefaultMatrixWorldAutoUpdate = !0);
const Vn = new Fi(),
  Hn = new Fi(),
  Gn = new Fi(),
  Wn = new Fi(),
  jn = new Fi(),
  qn = new Fi(),
  Xn = new Fi(),
  Yn = new Fi(),
  Kn = new Fi(),
  Zn = new Fi();
class Jn {
  constructor(e = new Fi(), t = new Fi(), i = new Fi()) {
    (this.a = e), (this.b = t), (this.c = i);
  }
  static getNormal(e, t, i, n) {
    n.subVectors(i, t), Vn.subVectors(e, t), n.cross(Vn);
    const r = n.lengthSq();
    return r > 0 ? n.multiplyScalar(1 / Math.sqrt(r)) : n.set(0, 0, 0);
  }
  static getBarycoord(e, t, i, n, r) {
    Vn.subVectors(n, t), Hn.subVectors(i, t), Gn.subVectors(e, t);
    const s = Vn.dot(Vn),
      a = Vn.dot(Hn),
      o = Vn.dot(Gn),
      l = Hn.dot(Hn),
      c = Hn.dot(Gn),
      h = s * l - a * a;
    if (0 === h) return r.set(-2, -1, -1);
    const u = 1 / h,
      d = (l * o - a * c) * u,
      p = (s * c - a * o) * u;
    return r.set(1 - d - p, p, d);
  }
  static containsPoint(e, t, i, n) {
    return (
      this.getBarycoord(e, t, i, n, Wn),
      Wn.x >= 0 && Wn.y >= 0 && Wn.x + Wn.y <= 1
    );
  }
  static getUV(e, t, i, n, r, s, a, o) {
    return (
      this.getBarycoord(e, t, i, n, Wn),
      o.set(0, 0),
      o.addScaledVector(r, Wn.x),
      o.addScaledVector(s, Wn.y),
      o.addScaledVector(a, Wn.z),
      o
    );
  }
  static isFrontFacing(e, t, i, n) {
    return Vn.subVectors(i, t), Hn.subVectors(e, t), Vn.cross(Hn).dot(n) < 0;
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
      Vn.subVectors(this.c, this.b),
      Hn.subVectors(this.a, this.b),
      0.5 * Vn.cross(Hn).length()
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Jn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Jn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, i, n, r) {
    return Jn.getUV(e, this.a, this.b, this.c, t, i, n, r);
  }
  containsPoint(e) {
    return Jn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Jn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const i = this.a,
      n = this.b,
      r = this.c;
    let s, a;
    jn.subVectors(n, i), qn.subVectors(r, i), Yn.subVectors(e, i);
    const o = jn.dot(Yn),
      l = qn.dot(Yn);
    if (o <= 0 && l <= 0) return t.copy(i);
    Kn.subVectors(e, n);
    const c = jn.dot(Kn),
      h = qn.dot(Kn);
    if (c >= 0 && h <= c) return t.copy(n);
    const u = o * h - c * l;
    if (u <= 0 && o >= 0 && c <= 0)
      return (s = o / (o - c)), t.copy(i).addScaledVector(jn, s);
    Zn.subVectors(e, r);
    const d = jn.dot(Zn),
      p = qn.dot(Zn);
    if (p >= 0 && d <= p) return t.copy(r);
    const m = d * l - o * p;
    if (m <= 0 && l >= 0 && p <= 0)
      return (a = l / (l - p)), t.copy(i).addScaledVector(qn, a);
    const f = c * p - d * h;
    if (f <= 0 && h - c >= 0 && d - p >= 0)
      return (
        Xn.subVectors(r, n),
        (a = (h - c) / (h - c + (d - p))),
        t.copy(n).addScaledVector(Xn, a)
      );
    const g = 1 / (f + m + u);
    return (
      (s = m * g),
      (a = u * g),
      t.copy(i).addScaledVector(jn, s).addScaledVector(qn, a)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let Qn = 0;
class $n extends ti {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: Qn++ }),
      (this.uuid = si()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = X),
      (this.side = G),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.blendSrc = oe),
      (this.blendDst = le),
      (this.blendEquation = Q),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = ve),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = 519),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = Jt),
      (this.stencilZFail = Jt),
      (this.stencilZPass = Jt),
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
    if (void 0 !== e)
      for (const t in e) {
        const i = e[t];
        if (void 0 === i) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        const n = this[t];
        void 0 !== n
          ? n && n.isColor
            ? n.set(i)
            : n && n.isVector3 && i && i.isVector3
            ? n.copy(i)
            : (this[t] = i)
          : console.warn(
              "THREE." +
                this.type +
                ": '" +
                t +
                "' is not a property of this material."
            );
      }
  }
  toJSON(e) {
    const t = void 0 === e || "string" == typeof e;
    t && (e = { textures: {}, images: {} });
    const i = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    function n(e) {
      const t = [];
      for (const i in e) {
        const n = e[i];
        delete n.metadata, t.push(n);
      }
      return t;
    }
    if (
      ((i.uuid = this.uuid),
      (i.type = this.type),
      "" !== this.name && (i.name = this.name),
      this.color && this.color.isColor && (i.color = this.color.getHex()),
      void 0 !== this.roughness && (i.roughness = this.roughness),
      void 0 !== this.metalness && (i.metalness = this.metalness),
      void 0 !== this.sheen && (i.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (i.sheenColor = this.sheenColor.getHex()),
      void 0 !== this.sheenRoughness &&
        (i.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (i.emissive = this.emissive.getHex()),
      this.emissiveIntensity &&
        1 !== this.emissiveIntensity &&
        (i.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (i.specular = this.specular.getHex()),
      void 0 !== this.specularIntensity &&
        (i.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (i.specularColor = this.specularColor.getHex()),
      void 0 !== this.shininess && (i.shininess = this.shininess),
      void 0 !== this.clearcoat && (i.clearcoat = this.clearcoat),
      void 0 !== this.clearcoatRoughness &&
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
      void 0 !== this.iridescence && (i.iridescence = this.iridescence),
      void 0 !== this.iridescenceIOR &&
        (i.iridescenceIOR = this.iridescenceIOR),
      void 0 !== this.iridescenceThicknessRange &&
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
        void 0 !== this.combine && (i.combine = this.combine)),
      void 0 !== this.envMapIntensity &&
        (i.envMapIntensity = this.envMapIntensity),
      void 0 !== this.reflectivity && (i.reflectivity = this.reflectivity),
      void 0 !== this.refractionRatio &&
        (i.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (i.gradientMap = this.gradientMap.toJSON(e).uuid),
      void 0 !== this.transmission && (i.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (i.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      void 0 !== this.thickness && (i.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (i.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      void 0 !== this.attenuationDistance &&
        this.attenuationDistance !== 1 / 0 &&
        (i.attenuationDistance = this.attenuationDistance),
      void 0 !== this.attenuationColor &&
        (i.attenuationColor = this.attenuationColor.getHex()),
      void 0 !== this.size && (i.size = this.size),
      null !== this.shadowSide && (i.shadowSide = this.shadowSide),
      void 0 !== this.sizeAttenuation &&
        (i.sizeAttenuation = this.sizeAttenuation),
      this.blending !== X && (i.blending = this.blending),
      this.side !== G && (i.side = this.side),
      this.vertexColors && (i.vertexColors = !0),
      this.opacity < 1 && (i.opacity = this.opacity),
      !0 === this.transparent && (i.transparent = this.transparent),
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
      void 0 !== this.rotation &&
        0 !== this.rotation &&
        (i.rotation = this.rotation),
      !0 === this.polygonOffset && (i.polygonOffset = !0),
      0 !== this.polygonOffsetFactor &&
        (i.polygonOffsetFactor = this.polygonOffsetFactor),
      0 !== this.polygonOffsetUnits &&
        (i.polygonOffsetUnits = this.polygonOffsetUnits),
      void 0 !== this.linewidth &&
        1 !== this.linewidth &&
        (i.linewidth = this.linewidth),
      void 0 !== this.dashSize && (i.dashSize = this.dashSize),
      void 0 !== this.gapSize && (i.gapSize = this.gapSize),
      void 0 !== this.scale && (i.scale = this.scale),
      !0 === this.dithering && (i.dithering = !0),
      this.alphaTest > 0 && (i.alphaTest = this.alphaTest),
      !0 === this.alphaToCoverage && (i.alphaToCoverage = this.alphaToCoverage),
      !0 === this.premultipliedAlpha &&
        (i.premultipliedAlpha = this.premultipliedAlpha),
      !0 === this.wireframe && (i.wireframe = this.wireframe),
      this.wireframeLinewidth > 1 &&
        (i.wireframeLinewidth = this.wireframeLinewidth),
      "round" !== this.wireframeLinecap &&
        (i.wireframeLinecap = this.wireframeLinecap),
      "round" !== this.wireframeLinejoin &&
        (i.wireframeLinejoin = this.wireframeLinejoin),
      !0 === this.flatShading && (i.flatShading = this.flatShading),
      !1 === this.visible && (i.visible = !1),
      !1 === this.toneMapped && (i.toneMapped = !1),
      !1 === this.fog && (i.fog = !1),
      "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData),
      t)
    ) {
      const t = n(e.textures),
        r = n(e.images);
      t.length > 0 && (i.textures = t), r.length > 0 && (i.images = r);
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
    if (null !== t) {
      const e = t.length;
      i = new Array(e);
      for (let n = 0; n !== e; ++n) i[n] = t[n].clone();
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
    !0 === e && this.version++;
  }
}
class er extends $n {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new Ei(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = Me),
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
const tr = new Fi(),
  ir = new di();
class nr {
  constructor(e, t, i) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = void 0 !== e ? e.length / t : 0),
      (this.normalized = !0 === i),
      (this.usage = Qt),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    !0 === e && this.version++;
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
  applyMatrix3(e) {
    if (2 === this.itemSize)
      for (let t = 0, i = this.count; t < i; t++)
        ir.fromBufferAttribute(this, t),
          ir.applyMatrix3(e),
          this.setXY(t, ir.x, ir.y);
    else if (3 === this.itemSize)
      for (let t = 0, i = this.count; t < i; t++)
        tr.fromBufferAttribute(this, t),
          tr.applyMatrix3(e),
          this.setXYZ(t, tr.x, tr.y, tr.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, i = this.count; t < i; t++)
      tr.fromBufferAttribute(this, t),
        tr.applyMatrix4(e),
        this.setXYZ(t, tr.x, tr.y, tr.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++)
      tr.fromBufferAttribute(this, t),
        tr.applyNormalMatrix(e),
        this.setXYZ(t, tr.x, tr.y, tr.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++)
      tr.fromBufferAttribute(this, t),
        tr.transformDirection(e),
        this.setXYZ(t, tr.x, tr.y, tr.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = hi(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = ui(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = hi(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = ui(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = hi(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = ui(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = hi(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = ui(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, i) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = ui(t, this.array)), (i = ui(i, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = i),
      this
    );
  }
  setXYZ(e, t, i, n) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = ui(t, this.array)),
        (i = ui(i, this.array)),
        (n = ui(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = i),
      (this.array[e + 2] = n),
      this
    );
  }
  setXYZW(e, t, i, n, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = ui(t, this.array)),
        (i = ui(i, this.array)),
        (n = ui(n, this.array)),
        (r = ui(r, this.array))),
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
      "" !== this.name && (e.name = this.name),
      this.usage !== Qt && (e.usage = this.usage),
      (0 === this.updateRange.offset && -1 === this.updateRange.count) ||
        (e.updateRange = this.updateRange),
      e
    );
  }
  copyColorsArray() {
    console.error(
      "THREE.BufferAttribute: copyColorsArray() was removed in r144."
    );
  }
  copyVector2sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector2sArray() was removed in r144."
    );
  }
  copyVector3sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector3sArray() was removed in r144."
    );
  }
  copyVector4sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector4sArray() was removed in r144."
    );
  }
}
class rr extends nr {
  constructor(e, t, i) {
    super(new Uint16Array(e), t, i);
  }
}
class sr extends nr {
  constructor(e, t, i) {
    super(new Uint32Array(e), t, i);
  }
}
class ar extends nr {
  constructor(e, t, i) {
    super(new Float32Array(e), t, i);
  }
}
let or = 0;
const lr = new fn(),
  cr = new Bn(),
  hr = new Fi(),
  ur = new Vi(),
  dr = new Vi(),
  pr = new Fi();
class mr extends ti {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: or++ }),
      (this.uuid = si()),
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
        ? (this.index = new (mi(e) ? sr : rr)(e, 1))
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
    return void 0 !== this.attributes[e];
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
    void 0 !== t && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const i = this.attributes.normal;
    if (void 0 !== i) {
      const t = new pi().getNormalMatrix(e);
      i.applyNormalMatrix(t), (i.needsUpdate = !0);
    }
    const n = this.attributes.tangent;
    return (
      void 0 !== n && (n.transformDirection(e), (n.needsUpdate = !0)),
      null !== this.boundingBox && this.computeBoundingBox(),
      null !== this.boundingSphere && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return lr.makeRotationFromQuaternion(e), this.applyMatrix4(lr), this;
  }
  rotateX(e) {
    return lr.makeRotationX(e), this.applyMatrix4(lr), this;
  }
  rotateY(e) {
    return lr.makeRotationY(e), this.applyMatrix4(lr), this;
  }
  rotateZ(e) {
    return lr.makeRotationZ(e), this.applyMatrix4(lr), this;
  }
  translate(e, t, i) {
    return lr.makeTranslation(e, t, i), this.applyMatrix4(lr), this;
  }
  scale(e, t, i) {
    return lr.makeScale(e, t, i), this.applyMatrix4(lr), this;
  }
  lookAt(e) {
    return cr.lookAt(e), cr.updateMatrix(), this.applyMatrix4(cr.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(hr).negate(),
      this.translate(hr.x, hr.y, hr.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let i = 0, n = e.length; i < n; i++) {
      const n = e[i];
      t.push(n.x, n.y, n.z || 0);
    }
    return this.setAttribute("position", new ar(t, 3)), this;
  }
  computeBoundingBox() {
    null === this.boundingBox && (this.boundingBox = new Vi());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute)
      return (
        console.error(
          'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
          this
        ),
        void this.boundingBox.set(
          new Fi(-1 / 0, -1 / 0, -1 / 0),
          new Fi(1 / 0, 1 / 0, 1 / 0)
        )
      );
    if (void 0 !== e) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let i = 0, n = t.length; i < n; i++) {
          const e = t[i];
          ur.setFromBufferAttribute(e),
            this.morphTargetsRelative
              ? (pr.addVectors(this.boundingBox.min, ur.min),
                this.boundingBox.expandByPoint(pr),
                pr.addVectors(this.boundingBox.max, ur.max),
                this.boundingBox.expandByPoint(pr))
              : (this.boundingBox.expandByPoint(ur.min),
                this.boundingBox.expandByPoint(ur.max));
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
    null === this.boundingSphere && (this.boundingSphere = new an());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute)
      return (
        console.error(
          'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
          this
        ),
        void this.boundingSphere.set(new Fi(), 1 / 0)
      );
    if (e) {
      const i = this.boundingSphere.center;
      if ((ur.setFromBufferAttribute(e), t))
        for (let e = 0, r = t.length; e < r; e++) {
          const i = t[e];
          dr.setFromBufferAttribute(i),
            this.morphTargetsRelative
              ? (pr.addVectors(ur.min, dr.min),
                ur.expandByPoint(pr),
                pr.addVectors(ur.max, dr.max),
                ur.expandByPoint(pr))
              : (ur.expandByPoint(dr.min), ur.expandByPoint(dr.max));
        }
      ur.getCenter(i);
      let n = 0;
      for (let t = 0, r = e.count; t < r; t++)
        pr.fromBufferAttribute(e, t),
          (n = Math.max(n, i.distanceToSquared(pr)));
      if (t)
        for (let r = 0, s = t.length; r < s; r++) {
          const s = t[r],
            a = this.morphTargetsRelative;
          for (let t = 0, r = s.count; t < r; t++)
            pr.fromBufferAttribute(s, t),
              a && (hr.fromBufferAttribute(e, t), pr.add(hr)),
              (n = Math.max(n, i.distanceToSquared(pr)));
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
      null === e ||
      void 0 === t.position ||
      void 0 === t.normal ||
      void 0 === t.uv
    )
      return void console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
    const i = e.array,
      n = t.position.array,
      r = t.normal.array,
      s = t.uv.array,
      a = n.length / 3;
    !1 === this.hasAttribute("tangent") &&
      this.setAttribute("tangent", new nr(new Float32Array(4 * a), 4));
    const o = this.getAttribute("tangent").array,
      l = [],
      c = [];
    for (let T = 0; T < a; T++) (l[T] = new Fi()), (c[T] = new Fi());
    const h = new Fi(),
      u = new Fi(),
      d = new Fi(),
      p = new di(),
      m = new di(),
      f = new di(),
      g = new Fi(),
      v = new Fi();
    function _(e, t, i) {
      h.fromArray(n, 3 * e),
        u.fromArray(n, 3 * t),
        d.fromArray(n, 3 * i),
        p.fromArray(s, 2 * e),
        m.fromArray(s, 2 * t),
        f.fromArray(s, 2 * i),
        u.sub(h),
        d.sub(h),
        m.sub(p),
        f.sub(p);
      const r = 1 / (m.x * f.y - f.x * m.y);
      isFinite(r) &&
        (g
          .copy(u)
          .multiplyScalar(f.y)
          .addScaledVector(d, -m.y)
          .multiplyScalar(r),
        v
          .copy(d)
          .multiplyScalar(m.x)
          .addScaledVector(u, -f.x)
          .multiplyScalar(r),
        l[e].add(g),
        l[t].add(g),
        l[i].add(g),
        c[e].add(v),
        c[t].add(v),
        c[i].add(v));
    }
    let x = this.groups;
    0 === x.length && (x = [{ start: 0, count: i.length }]);
    for (let T = 0, E = x.length; T < E; ++T) {
      const e = x[T],
        t = e.start;
      for (let n = t, r = t + e.count; n < r; n += 3)
        _(i[n + 0], i[n + 1], i[n + 2]);
    }
    const y = new Fi(),
      b = new Fi(),
      M = new Fi(),
      w = new Fi();
    function S(e) {
      M.fromArray(r, 3 * e), w.copy(M);
      const t = l[e];
      y.copy(t),
        y.sub(M.multiplyScalar(M.dot(t))).normalize(),
        b.crossVectors(w, t);
      const i = b.dot(c[e]) < 0 ? -1 : 1;
      (o[4 * e] = y.x),
        (o[4 * e + 1] = y.y),
        (o[4 * e + 2] = y.z),
        (o[4 * e + 3] = i);
    }
    for (let T = 0, E = x.length; T < E; ++T) {
      const e = x[T],
        t = e.start;
      for (let n = t, r = t + e.count; n < r; n += 3)
        S(i[n + 0]), S(i[n + 1]), S(i[n + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (void 0 !== t) {
      let i = this.getAttribute("normal");
      if (void 0 === i)
        (i = new nr(new Float32Array(3 * t.count), 3)),
          this.setAttribute("normal", i);
      else for (let e = 0, t = i.count; e < t; e++) i.setXYZ(e, 0, 0, 0);
      const n = new Fi(),
        r = new Fi(),
        s = new Fi(),
        a = new Fi(),
        o = new Fi(),
        l = new Fi(),
        c = new Fi(),
        h = new Fi();
      if (e)
        for (let u = 0, d = e.count; u < d; u += 3) {
          const d = e.getX(u + 0),
            p = e.getX(u + 1),
            m = e.getX(u + 2);
          n.fromBufferAttribute(t, d),
            r.fromBufferAttribute(t, p),
            s.fromBufferAttribute(t, m),
            c.subVectors(s, r),
            h.subVectors(n, r),
            c.cross(h),
            a.fromBufferAttribute(i, d),
            o.fromBufferAttribute(i, p),
            l.fromBufferAttribute(i, m),
            a.add(c),
            o.add(c),
            l.add(c),
            i.setXYZ(d, a.x, a.y, a.z),
            i.setXYZ(p, o.x, o.y, o.z),
            i.setXYZ(m, l.x, l.y, l.z);
        }
      else
        for (let e = 0, u = t.count; e < u; e += 3)
          n.fromBufferAttribute(t, e + 0),
            r.fromBufferAttribute(t, e + 1),
            s.fromBufferAttribute(t, e + 2),
            c.subVectors(s, r),
            h.subVectors(n, r),
            c.cross(h),
            i.setXYZ(e + 0, c.x, c.y, c.z),
            i.setXYZ(e + 1, c.x, c.y, c.z),
            i.setXYZ(e + 2, c.x, c.y, c.z);
      this.normalizeNormals(), (i.needsUpdate = !0);
    }
  }
  merge() {
    return (
      console.error(
        "THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."
      ),
      this
    );
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, i = e.count; t < i; t++)
      pr.fromBufferAttribute(e, t),
        pr.normalize(),
        e.setXYZ(t, pr.x, pr.y, pr.z);
  }
  toNonIndexed() {
    function e(e, t) {
      const i = e.array,
        n = e.itemSize,
        r = e.normalized,
        s = new i.constructor(t.length * n);
      let a = 0,
        o = 0;
      for (let l = 0, c = t.length; l < c; l++) {
        a = e.isInterleavedBufferAttribute
          ? t[l] * e.data.stride + e.offset
          : t[l] * n;
        for (let e = 0; e < n; e++) s[o++] = i[a++];
      }
      return new nr(s, n, r);
    }
    if (null === this.index)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new mr(),
      i = this.index.array,
      n = this.attributes;
    for (const a in n) {
      const r = e(n[a], i);
      t.setAttribute(a, r);
    }
    const r = this.morphAttributes;
    for (const a in r) {
      const n = [],
        s = r[a];
      for (let t = 0, r = s.length; t < r; t++) {
        const r = e(s[t], i);
        n.push(r);
      }
      t.morphAttributes[a] = n;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const s = this.groups;
    for (let a = 0, o = s.length; a < o; a++) {
      const e = s[a];
      t.addGroup(e.start, e.count, e.materialIndex);
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
      "" !== this.name && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      void 0 !== this.parameters)
    ) {
      const t = this.parameters;
      for (const i in t) void 0 !== t[i] && (e[i] = t[i]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    null !== t &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const i = this.attributes;
    for (const o in i) {
      const t = i[o];
      e.data.attributes[o] = t.toJSON(e.data);
    }
    const n = {};
    let r = !1;
    for (const o in this.morphAttributes) {
      const t = this.morphAttributes[o],
        i = [];
      for (let n = 0, r = t.length; n < r; n++) {
        const r = t[n];
        i.push(r.toJSON(e.data));
      }
      i.length > 0 && ((n[o] = i), (r = !0));
    }
    r &&
      ((e.data.morphAttributes = n),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const s = this.groups;
    s.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(s)));
    const a = this.boundingSphere;
    return (
      null !== a &&
        (e.data.boundingSphere = {
          center: a.center.toArray(),
          radius: a.radius,
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
    null !== i && this.setIndex(i.clone(t));
    const n = e.attributes;
    for (const l in n) {
      const e = n[l];
      this.setAttribute(l, e.clone(t));
    }
    const r = e.morphAttributes;
    for (const l in r) {
      const e = [],
        i = r[l];
      for (let n = 0, r = i.length; n < r; n++) e.push(i[n].clone(t));
      this.morphAttributes[l] = e;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const s = e.groups;
    for (let l = 0, c = s.length; l < c; l++) {
      const e = s[l];
      this.addGroup(e.start, e.count, e.materialIndex);
    }
    const a = e.boundingBox;
    null !== a && (this.boundingBox = a.clone());
    const o = e.boundingSphere;
    return (
      null !== o && (this.boundingSphere = o.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      void 0 !== e.parameters &&
        (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const fr = new fn(),
  gr = new mn(),
  vr = new an(),
  _r = new Fi(),
  xr = new Fi(),
  yr = new Fi(),
  br = new Fi(),
  Mr = new Fi(),
  wr = new Fi(),
  Sr = new Fi(),
  Tr = new Fi(),
  Er = new Fi(),
  Ar = new di(),
  Cr = new di(),
  Pr = new di(),
  Lr = new Fi(),
  Rr = new Fi();
class Dr extends Bn {
  constructor(e = new mr(), t = new er()) {
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
      void 0 !== e.morphTargetInfluences &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      void 0 !== e.morphTargetDictionary &&
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
    const e = this.geometry.morphAttributes,
      t = Object.keys(e);
    if (t.length > 0) {
      const i = e[t[0]];
      if (void 0 !== i) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let e = 0, t = i.length; e < t; e++) {
          const t = i[e].name || String(e);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[t] = e);
        }
      }
    }
  }
  raycast(e, t) {
    const i = this.geometry,
      n = this.material,
      r = this.matrixWorld;
    if (void 0 === n) return;
    if (
      (null === i.boundingSphere && i.computeBoundingSphere(),
      vr.copy(i.boundingSphere),
      vr.applyMatrix4(r),
      !1 === e.ray.intersectsSphere(vr))
    )
      return;
    if (
      (fr.copy(r).invert(),
      gr.copy(e.ray).applyMatrix4(fr),
      null !== i.boundingBox && !1 === gr.intersectsBox(i.boundingBox))
    )
      return;
    let s;
    const a = i.index,
      o = i.attributes.position,
      l = i.morphAttributes.position,
      c = i.morphTargetsRelative,
      h = i.attributes.uv,
      u = i.attributes.uv2,
      d = i.groups,
      p = i.drawRange;
    if (null !== a)
      if (Array.isArray(n))
        for (let m = 0, f = d.length; m < f; m++) {
          const i = d[m],
            r = n[i.materialIndex];
          for (
            let n = Math.max(i.start, p.start),
              d = Math.min(
                a.count,
                Math.min(i.start + i.count, p.start + p.count)
              );
            n < d;
            n += 3
          ) {
            const d = a.getX(n),
              p = a.getX(n + 1),
              m = a.getX(n + 2);
            (s = Ir(this, r, e, gr, o, l, c, h, u, d, p, m)),
              s &&
                ((s.faceIndex = Math.floor(n / 3)),
                (s.face.materialIndex = i.materialIndex),
                t.push(s));
          }
        }
      else {
        for (
          let i = Math.max(0, p.start),
            r = Math.min(a.count, p.start + p.count);
          i < r;
          i += 3
        ) {
          const r = a.getX(i),
            d = a.getX(i + 1),
            p = a.getX(i + 2);
          (s = Ir(this, n, e, gr, o, l, c, h, u, r, d, p)),
            s && ((s.faceIndex = Math.floor(i / 3)), t.push(s));
        }
      }
    else if (void 0 !== o)
      if (Array.isArray(n))
        for (let m = 0, f = d.length; m < f; m++) {
          const i = d[m],
            r = n[i.materialIndex];
          for (
            let n = Math.max(i.start, p.start),
              a = Math.min(
                o.count,
                Math.min(i.start + i.count, p.start + p.count)
              );
            n < a;
            n += 3
          ) {
            (s = Ir(this, r, e, gr, o, l, c, h, u, n, n + 1, n + 2)),
              s &&
                ((s.faceIndex = Math.floor(n / 3)),
                (s.face.materialIndex = i.materialIndex),
                t.push(s));
          }
        }
      else {
        for (
          let i = Math.max(0, p.start),
            r = Math.min(o.count, p.start + p.count);
          i < r;
          i += 3
        ) {
          (s = Ir(this, n, e, gr, o, l, c, h, u, i, i + 1, i + 2)),
            s && ((s.faceIndex = Math.floor(i / 3)), t.push(s));
        }
      }
  }
}
function Ir(e, t, i, n, r, s, a, o, l, c, h, u) {
  _r.fromBufferAttribute(r, c),
    xr.fromBufferAttribute(r, h),
    yr.fromBufferAttribute(r, u);
  const d = e.morphTargetInfluences;
  if (s && d) {
    Sr.set(0, 0, 0), Tr.set(0, 0, 0), Er.set(0, 0, 0);
    for (let e = 0, t = s.length; e < t; e++) {
      const t = d[e],
        i = s[e];
      0 !== t &&
        (br.fromBufferAttribute(i, c),
        Mr.fromBufferAttribute(i, h),
        wr.fromBufferAttribute(i, u),
        a
          ? (Sr.addScaledVector(br, t),
            Tr.addScaledVector(Mr, t),
            Er.addScaledVector(wr, t))
          : (Sr.addScaledVector(br.sub(_r), t),
            Tr.addScaledVector(Mr.sub(xr), t),
            Er.addScaledVector(wr.sub(yr), t)));
    }
    _r.add(Sr), xr.add(Tr), yr.add(Er);
  }
  e.isSkinnedMesh &&
    (e.boneTransform(c, _r), e.boneTransform(h, xr), e.boneTransform(u, yr));
  const p = (function (e, t, i, n, r, s, a, o) {
    let l;
    if (
      ((l =
        t.side === W
          ? n.intersectTriangle(a, s, r, !0, o)
          : n.intersectTriangle(r, s, a, t.side !== j, o)),
      null === l)
    )
      return null;
    Rr.copy(o), Rr.applyMatrix4(e.matrixWorld);
    const c = i.ray.origin.distanceTo(Rr);
    return c < i.near || c > i.far
      ? null
      : { distance: c, point: Rr.clone(), object: e };
  })(e, t, i, n, _r, xr, yr, Lr);
  if (p) {
    o &&
      (Ar.fromBufferAttribute(o, c),
      Cr.fromBufferAttribute(o, h),
      Pr.fromBufferAttribute(o, u),
      (p.uv = Jn.getUV(Lr, _r, xr, yr, Ar, Cr, Pr, new di()))),
      l &&
        (Ar.fromBufferAttribute(l, c),
        Cr.fromBufferAttribute(l, h),
        Pr.fromBufferAttribute(l, u),
        (p.uv2 = Jn.getUV(Lr, _r, xr, yr, Ar, Cr, Pr, new di())));
    const e = { a: c, b: h, c: u, normal: new Fi(), materialIndex: 0 };
    Jn.getNormal(_r, xr, yr, e.normal), (p.face = e);
  }
  return p;
}
class Or extends mr {
  constructor(e = 1, t = 1, i = 1, n = 1, r = 1, s = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: i,
        widthSegments: n,
        heightSegments: r,
        depthSegments: s,
      });
    const a = this;
    (n = Math.floor(n)), (r = Math.floor(r)), (s = Math.floor(s));
    const o = [],
      l = [],
      c = [],
      h = [];
    let u = 0,
      d = 0;
    function p(e, t, i, n, r, s, p, m, f, g, v) {
      const _ = s / f,
        x = p / g,
        y = s / 2,
        b = p / 2,
        M = m / 2,
        w = f + 1,
        S = g + 1;
      let T = 0,
        E = 0;
      const A = new Fi();
      for (let a = 0; a < S; a++) {
        const s = a * x - b;
        for (let o = 0; o < w; o++) {
          const u = o * _ - y;
          (A[e] = u * n),
            (A[t] = s * r),
            (A[i] = M),
            l.push(A.x, A.y, A.z),
            (A[e] = 0),
            (A[t] = 0),
            (A[i] = m > 0 ? 1 : -1),
            c.push(A.x, A.y, A.z),
            h.push(o / f),
            h.push(1 - a / g),
            (T += 1);
        }
      }
      for (let a = 0; a < g; a++)
        for (let e = 0; e < f; e++) {
          const t = u + e + w * a,
            i = u + e + w * (a + 1),
            n = u + (e + 1) + w * (a + 1),
            r = u + (e + 1) + w * a;
          o.push(t, i, r), o.push(i, n, r), (E += 6);
        }
      a.addGroup(d, E, v), (d += E), (u += T);
    }
    p("z", "y", "x", -1, -1, i, t, e, s, r, 0),
      p("z", "y", "x", 1, -1, i, t, -e, s, r, 1),
      p("x", "z", "y", 1, 1, e, i, t, n, s, 2),
      p("x", "z", "y", 1, -1, e, i, -t, n, s, 3),
      p("x", "y", "z", 1, -1, e, t, i, n, r, 4),
      p("x", "y", "z", -1, -1, e, t, -i, n, r, 5),
      this.setIndex(o),
      this.setAttribute("position", new ar(l, 3)),
      this.setAttribute("normal", new ar(c, 3)),
      this.setAttribute("uv", new ar(h, 2));
  }
  static fromJSON(e) {
    return new Or(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function Nr(e) {
  const t = {};
  for (const i in e) {
    t[i] = {};
    for (const n in e[i]) {
      const r = e[i][n];
      r &&
      (r.isColor ||
        r.isMatrix3 ||
        r.isMatrix4 ||
        r.isVector2 ||
        r.isVector3 ||
        r.isVector4 ||
        r.isTexture ||
        r.isQuaternion)
        ? (t[i][n] = r.clone())
        : Array.isArray(r)
        ? (t[i][n] = r.slice())
        : (t[i][n] = r);
    }
  }
  return t;
}
function zr(e) {
  const t = {};
  for (let i = 0; i < e.length; i++) {
    const n = Nr(e[i]);
    for (const e in n) t[e] = n[e];
  }
  return t;
}
const Ur = { clone: Nr, merge: zr };
class Fr extends $n {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader =
        "void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}"),
      (this.fragmentShader =
        "void main(){gl_FragColor=vec4(1.0,0.0,0.0,1.0);}"),
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
      void 0 !== e && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = Nr(e.uniforms)),
      (this.uniformsGroups = (function (e) {
        const t = [];
        for (let i = 0; i < e.length; i++) t.push(e[i].clone());
        return t;
      })(e.uniformsGroups)),
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
      const i = this.uniforms[n].value;
      i && i.isTexture
        ? (t.uniforms[n] = { type: "t", value: i.toJSON(e).uuid })
        : i && i.isColor
        ? (t.uniforms[n] = { type: "c", value: i.getHex() })
        : i && i.isVector2
        ? (t.uniforms[n] = { type: "v2", value: i.toArray() })
        : i && i.isVector3
        ? (t.uniforms[n] = { type: "v3", value: i.toArray() })
        : i && i.isVector4
        ? (t.uniforms[n] = { type: "v4", value: i.toArray() })
        : i && i.isMatrix3
        ? (t.uniforms[n] = { type: "m3", value: i.toArray() })
        : i && i.isMatrix4
        ? (t.uniforms[n] = { type: "m4", value: i.toArray() })
        : (t.uniforms[n] = { value: i });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader);
    const i = {};
    for (const n in this.extensions) !0 === this.extensions[n] && (i[n] = !0);
    return Object.keys(i).length > 0 && (t.extensions = i), t;
  }
}
class kr extends Bn {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new fn()),
      (this.projectionMatrix = new fn()),
      (this.projectionMatrixInverse = new fn());
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
class Br extends kr {
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
      (this.view = null === e.view ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = 2 * ri * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(0.5 * ni * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return 2 * ri * Math.atan(Math.tan(0.5 * ni * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, i, n, r, s) {
    (this.aspect = e / t),
      null === this.view &&
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
      (this.view.height = s),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    null !== this.view && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(0.5 * ni * this.fov)) / this.zoom,
      i = 2 * t,
      n = this.aspect * i,
      r = -0.5 * n;
    const s = this.view;
    if (null !== this.view && this.view.enabled) {
      const e = s.fullWidth,
        a = s.fullHeight;
      (r += (s.offsetX * n) / e),
        (t -= (s.offsetY * i) / a),
        (n *= s.width / e),
        (i *= s.height / a);
    }
    const a = this.filmOffset;
    0 !== a && (r += (e * a) / this.getFilmWidth()),
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
      null !== this.view && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const Vr = 90;
class Hr extends Bn {
  constructor(e, t, i) {
    super(), (this.type = "CubeCamera"), (this.renderTarget = i);
    const n = new Br(Vr, 1, e, t);
    (n.layers = this.layers),
      n.up.set(0, -1, 0),
      n.lookAt(new Fi(1, 0, 0)),
      this.add(n);
    const r = new Br(Vr, 1, e, t);
    (r.layers = this.layers),
      r.up.set(0, -1, 0),
      r.lookAt(new Fi(-1, 0, 0)),
      this.add(r);
    const s = new Br(Vr, 1, e, t);
    (s.layers = this.layers),
      s.up.set(0, 0, 1),
      s.lookAt(new Fi(0, 1, 0)),
      this.add(s);
    const a = new Br(Vr, 1, e, t);
    (a.layers = this.layers),
      a.up.set(0, 0, -1),
      a.lookAt(new Fi(0, -1, 0)),
      this.add(a);
    const o = new Br(Vr, 1, e, t);
    (o.layers = this.layers),
      o.up.set(0, -1, 0),
      o.lookAt(new Fi(0, 0, 1)),
      this.add(o);
    const l = new Br(Vr, 1, e, t);
    (l.layers = this.layers),
      l.up.set(0, -1, 0),
      l.lookAt(new Fi(0, 0, -1)),
      this.add(l);
  }
  update(e, t) {
    null === this.parent && this.updateMatrixWorld();
    const i = this.renderTarget,
      [n, r, s, a, o, l] = this.children,
      c = e.getRenderTarget(),
      h = e.toneMapping,
      u = e.xr.enabled;
    (e.toneMapping = Te), (e.xr.enabled = !1);
    const d = i.texture.generateMipmaps;
    (i.texture.generateMipmaps = !1),
      e.setRenderTarget(i, 0),
      e.render(t, n),
      e.setRenderTarget(i, 1),
      e.render(t, r),
      e.setRenderTarget(i, 2),
      e.render(t, s),
      e.setRenderTarget(i, 3),
      e.render(t, a),
      e.setRenderTarget(i, 4),
      e.render(t, o),
      (i.texture.generateMipmaps = d),
      e.setRenderTarget(i, 5),
      e.render(t, l),
      e.setRenderTarget(c),
      (e.toneMapping = h),
      (e.xr.enabled = u),
      (i.texture.needsPMREMUpdate = !0);
  }
}
class Gr extends Di {
  constructor(e, t, i, n, r, s, a, o, l, c) {
    super(
      (e = void 0 !== e ? e : []),
      (t = void 0 !== t ? t : Re),
      i,
      n,
      r,
      s,
      a,
      o,
      l,
      c
    ),
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
class Wr extends Oi {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const i = { width: e, height: e, depth: 1 },
      n = [i, i, i, i, i, i];
    (this.texture = new Gr(
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
        void 0 !== t.generateMipmaps && t.generateMipmaps),
      (this.texture.minFilter = void 0 !== t.minFilter ? t.minFilter : He);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.encoding = t.encoding),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const i = {
        uniforms: { tEquirect: { value: null } },
        vertexShader:
          "varying vec3 vWorldDirection;vec3 transformDirection(in vec3 dir,in mat4 matrix){return normalize((matrix*vec4(dir,0.0)).xyz);}void main(){vWorldDirection=transformDirection(position,modelMatrix);\n#include <begin_vertex>\n#include <project_vertex>\n}",
        fragmentShader:
          "uniform sampler2D tEquirect;varying vec3 vWorldDirection;\n#include <common>\nvoid main(){vec3 direction=normalize(vWorldDirection);vec2 sampleUV=equirectUv(direction);gl_FragColor=texture2D(tEquirect,sampleUV);}",
      },
      n = new Or(5, 5, 5),
      r = new Fr({
        name: "CubemapFromEquirect",
        uniforms: Nr(i.uniforms),
        vertexShader: i.vertexShader,
        fragmentShader: i.fragmentShader,
        side: W,
        blending: q,
      });
    r.uniforms.tEquirect.value = t;
    const s = new Dr(n, r),
      a = t.minFilter;
    t.minFilter === We && (t.minFilter = He);
    return (
      new Hr(1, 10, this).update(e, s),
      (t.minFilter = a),
      s.geometry.dispose(),
      s.material.dispose(),
      this
    );
  }
  clear(e, t, i, n) {
    const r = e.getRenderTarget();
    for (let s = 0; s < 6; s++) e.setRenderTarget(this, s), e.clear(t, i, n);
    e.setRenderTarget(r);
  }
}
const jr = new Fi(),
  qr = new Fi(),
  Xr = new pi();
class Yr {
  constructor(e = new Fi(1, 0, 0), t = 0) {
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
    const n = jr.subVectors(i, t).cross(qr.subVectors(e, t)).normalize();
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
    const i = e.delta(jr),
      n = this.normal.dot(i);
    if (0 === n)
      return 0 === this.distanceToPoint(e.start) ? t.copy(e.start) : null;
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
    const i = t || Xr.getNormalMatrix(e),
      n = this.coplanarPoint(jr).applyMatrix4(e),
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
const Kr = new an(),
  Zr = new Fi();
class Jr {
  constructor(
    e = new Yr(),
    t = new Yr(),
    i = new Yr(),
    n = new Yr(),
    r = new Yr(),
    s = new Yr()
  ) {
    this.planes = [e, t, i, n, r, s];
  }
  set(e, t, i, n, r, s) {
    const a = this.planes;
    return (
      a[0].copy(e),
      a[1].copy(t),
      a[2].copy(i),
      a[3].copy(n),
      a[4].copy(r),
      a[5].copy(s),
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
      s = i[2],
      a = i[3],
      o = i[4],
      l = i[5],
      c = i[6],
      h = i[7],
      u = i[8],
      d = i[9],
      p = i[10],
      m = i[11],
      f = i[12],
      g = i[13],
      v = i[14],
      _ = i[15];
    return (
      t[0].setComponents(a - n, h - o, m - u, _ - f).normalize(),
      t[1].setComponents(a + n, h + o, m + u, _ + f).normalize(),
      t[2].setComponents(a + r, h + l, m + d, _ + g).normalize(),
      t[3].setComponents(a - r, h - l, m - d, _ - g).normalize(),
      t[4].setComponents(a - s, h - c, m - p, _ - v).normalize(),
      t[5].setComponents(a + s, h + c, m + p, _ + v).normalize(),
      this
    );
  }
  intersectsObject(e) {
    const t = e.geometry;
    return (
      null === t.boundingSphere && t.computeBoundingSphere(),
      Kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Kr)
    );
  }
  intersectsSprite(e) {
    return (
      Kr.center.set(0, 0, 0),
      (Kr.radius = 0.7071067811865476),
      Kr.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Kr)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      i = e.center,
      n = -e.radius;
    for (let r = 0; r < 6; r++) {
      if (t[r].distanceToPoint(i) < n) return !1;
    }
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) {
      const n = t[i];
      if (
        ((Zr.x = n.normal.x > 0 ? e.max.x : e.min.x),
        (Zr.y = n.normal.y > 0 ? e.max.y : e.min.y),
        (Zr.z = n.normal.z > 0 ? e.max.z : e.min.z),
        n.distanceToPoint(Zr) < 0)
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
function Qr() {
  let e = null,
    t = !1,
    i = null,
    n = null;
  function r(t, s) {
    i(t, s), (n = e.requestAnimationFrame(r));
  }
  return {
    start: function () {
      !0 !== t && null !== i && ((n = e.requestAnimationFrame(r)), (t = !0));
    },
    stop: function () {
      e.cancelAnimationFrame(n), (t = !1);
    },
    setAnimationLoop: function (e) {
      i = e;
    },
    setContext: function (t) {
      e = t;
    },
  };
}
function $r(e, t) {
  const i = t.isWebGL2,
    n = new WeakMap();
  return {
    get: function (e) {
      return e.isInterleavedBufferAttribute && (e = e.data), n.get(e);
    },
    remove: function (t) {
      t.isInterleavedBufferAttribute && (t = t.data);
      const i = n.get(t);
      i && (e.deleteBuffer(i.buffer), n.delete(t));
    },
    update: function (t, r) {
      if (t.isGLBufferAttribute) {
        const e = n.get(t);
        return void (
          (!e || e.version < t.version) &&
          n.set(t, {
            buffer: t.buffer,
            type: t.type,
            bytesPerElement: t.elementSize,
            version: t.version,
          })
        );
      }
      t.isInterleavedBufferAttribute && (t = t.data);
      const s = n.get(t);
      void 0 === s
        ? n.set(
            t,
            (function (t, n) {
              const r = t.array,
                s = t.usage,
                a = e.createBuffer();
              let o;
              if (
                (e.bindBuffer(n, a),
                e.bufferData(n, r, s),
                t.onUploadCallback(),
                r instanceof Float32Array)
              )
                o = 5126;
              else if (r instanceof Uint16Array)
                if (t.isFloat16BufferAttribute) {
                  if (!i)
                    throw new Error(
                      "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
                    );
                  o = 5131;
                } else o = 5123;
              else if (r instanceof Int16Array) o = 5122;
              else if (r instanceof Uint32Array) o = 5125;
              else if (r instanceof Int32Array) o = 5124;
              else if (r instanceof Int8Array) o = 5120;
              else if (r instanceof Uint8Array) o = 5121;
              else {
                if (!(r instanceof Uint8ClampedArray))
                  throw new Error(
                    "THREE.WebGLAttributes: Unsupported buffer data format: " +
                      r
                  );
                o = 5121;
              }
              return {
                buffer: a,
                type: o,
                bytesPerElement: r.BYTES_PER_ELEMENT,
                version: t.version,
              };
            })(t, r)
          )
        : s.version < t.version &&
          (!(function (t, n, r) {
            const s = n.array,
              a = n.updateRange;
            e.bindBuffer(r, t),
              -1 === a.count
                ? e.bufferSubData(r, 0, s)
                : (i
                    ? e.bufferSubData(
                        r,
                        a.offset * s.BYTES_PER_ELEMENT,
                        s,
                        a.offset,
                        a.count
                      )
                    : e.bufferSubData(
                        r,
                        a.offset * s.BYTES_PER_ELEMENT,
                        s.subarray(a.offset, a.offset + a.count)
                      ),
                  (a.count = -1));
          })(s.buffer, t, r),
          (s.version = t.version));
    },
  };
}
class es extends mr {
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
      s = t / 2,
      a = Math.floor(i),
      o = Math.floor(n),
      l = a + 1,
      c = o + 1,
      h = e / a,
      u = t / o,
      d = [],
      p = [],
      m = [],
      f = [];
    for (let g = 0; g < c; g++) {
      const e = g * u - s;
      for (let t = 0; t < l; t++) {
        const i = t * h - r;
        p.push(i, -e, 0), m.push(0, 0, 1), f.push(t / a), f.push(1 - g / o);
      }
    }
    for (let g = 0; g < o; g++)
      for (let e = 0; e < a; e++) {
        const t = e + l * g,
          i = e + l * (g + 1),
          n = e + 1 + l * (g + 1),
          r = e + 1 + l * g;
        d.push(t, i, r), d.push(i, n, r);
      }
    this.setIndex(d),
      this.setAttribute("position", new ar(p, 3)),
      this.setAttribute("normal", new ar(m, 3)),
      this.setAttribute("uv", new ar(f, 2));
  }
  static fromJSON(e) {
    return new es(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
const ts = {
    alphamap_fragment:
      "#ifdef USE_ALPHAMAP\ndiffuseColor.a*=texture2D(alphaMap,vUv).g;\n#endif",
    alphamap_pars_fragment:
      "#ifdef USE_ALPHAMAP\nuniform sampler2D alphaMap;\n#endif",
    alphatest_fragment:
      "#ifdef USE_ALPHATEST\nif(diffuseColor.a<alphaTest)discard;\n#endif",
    alphatest_pars_fragment:
      "#ifdef USE_ALPHATEST\nuniform float alphaTest;\n#endif",
    aomap_fragment:
      "#ifdef USE_AOMAP\nfloat ambientOcclusion=(texture2D(aoMap,vUv2).r-1.0)*aoMapIntensity+1.0;reflectedLight.indirectDiffuse*=ambientOcclusion;\n#if defined(USE_ENVMAP)&&defined(STANDARD)\nfloat dotNV=saturate(dot(geometry.normal,geometry.viewDir));reflectedLight.indirectSpecular*=computeSpecularOcclusion(dotNV,ambientOcclusion,material.roughness);\n#endif\n#endif",
    aomap_pars_fragment:
      "#ifdef USE_AOMAP\nuniform sampler2D aoMap;uniform float aoMapIntensity;\n#endif",
    begin_vertex: "vec3 transformed=vec3(position);",
    beginnormal_vertex:
      "vec3 objectNormal=vec3(normal);\n#ifdef USE_TANGENT\nvec3 objectTangent=vec3(tangent.xyz);\n#endif",
    bsdfs:
      "vec3 BRDF_Lambert(const in vec3 diffuseColor){return RECIPROCAL_PI*diffuseColor;}vec3 F_Schlick(const in vec3 f0,const in float f90,const in float dotVH){float fresnel=exp2((-5.55473*dotVH-6.98316)*dotVH);return f0*(1.0-fresnel)+(f90*fresnel);}float F_Schlick(const in float f0,const in float f90,const in float dotVH){float fresnel=exp2((-5.55473*dotVH-6.98316)*dotVH);return f0*(1.0-fresnel)+(f90*fresnel);}vec3 Schlick_to_F0(const in vec3 f,const in float f90,const in float dotVH){float x=clamp(1.0-dotVH,0.0,1.0);float x2=x*x;float x5=clamp(x*x2*x2,0.0,0.9999);return(f-vec3(f90)*x5)/(1.0-x5);}float V_GGX_SmithCorrelated(const in float alpha,const in float dotNL,const in float dotNV){float a2=pow2(alpha);float gv=dotNL*sqrt(a2+(1.0-a2)*pow2(dotNV));float gl=dotNV*sqrt(a2+(1.0-a2)*pow2(dotNL));return 0.5/max(gv+gl,EPSILON);}float D_GGX(const in float alpha,const in float dotNH){float a2=pow2(alpha);float denom=pow2(dotNH)*(a2-1.0)+1.0;return RECIPROCAL_PI*a2/pow2(denom);}vec3 BRDF_GGX(const in vec3 lightDir,const in vec3 viewDir,const in vec3 normal,const in vec3 f0,const in float f90,const in float roughness){float alpha=pow2(roughness);vec3 halfDir=normalize(lightDir+viewDir);float dotNL=saturate(dot(normal,lightDir));float dotNV=saturate(dot(normal,viewDir));float dotNH=saturate(dot(normal,halfDir));float dotVH=saturate(dot(viewDir,halfDir));vec3 F=F_Schlick(f0,f90,dotVH);float V=V_GGX_SmithCorrelated(alpha,dotNL,dotNV);float D=D_GGX(alpha,dotNH);return F*(V*D);}\n#ifdef USE_IRIDESCENCE\nvec3 BRDF_GGX_Iridescence(const in vec3 lightDir,const in vec3 viewDir,const in vec3 normal,const in vec3 f0,const in float f90,const in float iridescence,const in vec3 iridescenceFresnel,const in float roughness){float alpha=pow2(roughness);vec3 halfDir=normalize(lightDir+viewDir);float dotNL=saturate(dot(normal,lightDir));float dotNV=saturate(dot(normal,viewDir));float dotNH=saturate(dot(normal,halfDir));float dotVH=saturate(dot(viewDir,halfDir));vec3 F=mix(F_Schlick(f0,f90,dotVH),iridescenceFresnel,iridescence);float V=V_GGX_SmithCorrelated(alpha,dotNL,dotNV);float D=D_GGX(alpha,dotNH);return F*(V*D);}\n#endif\nvec2 LTC_Uv(const in vec3 N,const in vec3 V,const in float roughness){const float LUT_SIZE=64.0;const float LUT_SCALE=(LUT_SIZE-1.0)/LUT_SIZE;const float LUT_BIAS=0.5/LUT_SIZE;float dotNV=saturate(dot(N,V));vec2 uv=vec2(roughness,sqrt(1.0-dotNV));uv=uv*LUT_SCALE+LUT_BIAS;return uv;}float LTC_ClippedSphereFormFactor(const in vec3 f){float l=length(f);return max((l*l+f.z)/(l+1.0),0.0);}vec3 LTC_EdgeVectorFormFactor(const in vec3 v1,const in vec3 v2){float x=dot(v1,v2);float y=abs(x);float a=0.8543985+(0.4965155+0.0145206*y)*y;float b=3.4175940+(4.1616724+y)*y;float v=a/b;float theta_sintheta=(x>0.0)?v:0.5*inversesqrt(max(1.0-x*x,1e-7))-v;return cross(v1,v2)*theta_sintheta;}vec3 LTC_Evaluate(const in vec3 N,const in vec3 V,const in vec3 P,const in mat3 mInv,const in vec3 rectCoords[4]){vec3 v1=rectCoords[1]-rectCoords[0];vec3 v2=rectCoords[3]-rectCoords[0];vec3 lightNormal=cross(v1,v2);if(dot(lightNormal,P-rectCoords[0])<0.0)return vec3(0.0);vec3 T1,T2;T1=normalize(V-N*dot(V,N));T2=-cross(N,T1);mat3 mat=mInv*transposeMat3(mat3(T1,T2,N));vec3 coords[4];coords[0]=mat*(rectCoords[0]-P);coords[1]=mat*(rectCoords[1]-P);coords[2]=mat*(rectCoords[2]-P);coords[3]=mat*(rectCoords[3]-P);coords[0]=normalize(coords[0]);coords[1]=normalize(coords[1]);coords[2]=normalize(coords[2]);coords[3]=normalize(coords[3]);vec3 vectorFormFactor=vec3(0.0);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[0],coords[1]);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[1],coords[2]);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[2],coords[3]);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[3],coords[0]);float result=LTC_ClippedSphereFormFactor(vectorFormFactor);return vec3(result);}float G_BlinnPhong_Implicit(){return 0.25;}float D_BlinnPhong(const in float shininess,const in float dotNH){return RECIPROCAL_PI*(shininess*0.5+1.0)*pow(dotNH,shininess);}vec3 BRDF_BlinnPhong(const in vec3 lightDir,const in vec3 viewDir,const in vec3 normal,const in vec3 specularColor,const in float shininess){vec3 halfDir=normalize(lightDir+viewDir);float dotNH=saturate(dot(normal,halfDir));float dotVH=saturate(dot(viewDir,halfDir));vec3 F=F_Schlick(specularColor,1.0,dotVH);float G=G_BlinnPhong_Implicit();float D=D_BlinnPhong(shininess,dotNH);return F*(G*D);}\n#if defined(USE_SHEEN)\nfloat D_Charlie(float roughness,float dotNH){float alpha=pow2(roughness);float invAlpha=1.0/alpha;float cos2h=dotNH*dotNH;float sin2h=max(1.0-cos2h,0.0078125);return(2.0+invAlpha)*pow(sin2h,invAlpha*0.5)/(2.0*PI);}float V_Neubelt(float dotNV,float dotNL){return saturate(1.0/(4.0*(dotNL+dotNV-dotNL*dotNV)));}vec3 BRDF_Sheen(const in vec3 lightDir,const in vec3 viewDir,const in vec3 normal,vec3 sheenColor,const in float sheenRoughness){vec3 halfDir=normalize(lightDir+viewDir);float dotNL=saturate(dot(normal,lightDir));float dotNV=saturate(dot(normal,viewDir));float dotNH=saturate(dot(normal,halfDir));float D=D_Charlie(sheenRoughness,dotNH);float V=V_Neubelt(dotNV,dotNL);return sheenColor*(D*V);}\n#endif",
    iridescence_fragment:
      "#ifdef USE_IRIDESCENCE\nconst mat3 XYZ_TO_REC709=mat3(3.2404542,-0.9692660,0.0556434,-1.5371385,1.8760108,-0.2040259,-0.4985314,0.0415560,1.0572252);vec3 Fresnel0ToIor(vec3 fresnel0){vec3 sqrtF0=sqrt(fresnel0);return(vec3(1.0)+sqrtF0)/(vec3(1.0)-sqrtF0);}vec3 IorToFresnel0(vec3 transmittedIor,float incidentIor){return pow2((transmittedIor-vec3(incidentIor))/(transmittedIor+vec3(incidentIor)));}float IorToFresnel0(float transmittedIor,float incidentIor){return pow2((transmittedIor-incidentIor)/(transmittedIor+incidentIor));}vec3 evalSensitivity(float OPD,vec3 shift){float phase=2.0*PI*OPD*1.0e-9;vec3 val=vec3(5.4856e-13,4.4201e-13,5.2481e-13);vec3 pos=vec3(1.6810e+06,1.7953e+06,2.2084e+06);vec3 var=vec3(4.3278e+09,9.3046e+09,6.6121e+09);vec3 xyz=val*sqrt(2.0*PI*var)*cos(pos*phase+shift)*exp(-pow2(phase)*var);xyz.x+=9.7470e-14*sqrt(2.0*PI*4.5282e+09)*cos(2.2399e+06*phase+shift[0])*exp(-4.5282e+09*pow2(phase));xyz/=1.0685e-7;vec3 rgb=XYZ_TO_REC709*xyz;return rgb;}vec3 evalIridescence(float outsideIOR,float eta2,float cosTheta1,float thinFilmThickness,vec3 baseF0){vec3 I;float iridescenceIOR=mix(outsideIOR,eta2,smoothstep(0.0,0.03,thinFilmThickness));float sinTheta2Sq=pow2(outsideIOR/iridescenceIOR)*(1.0-pow2(cosTheta1));float cosTheta2Sq=1.0-sinTheta2Sq;if(cosTheta2Sq<0.0){return vec3(1.0);}float cosTheta2=sqrt(cosTheta2Sq);float R0=IorToFresnel0(iridescenceIOR,outsideIOR);float R12=F_Schlick(R0,1.0,cosTheta1);float R21=R12;float T121=1.0-R12;float phi12=0.0;if(iridescenceIOR<outsideIOR)phi12=PI;float phi21=PI-phi12;vec3 baseIOR=Fresnel0ToIor(clamp(baseF0,0.0,0.9999));vec3 R1=IorToFresnel0(baseIOR,iridescenceIOR);vec3 R23=F_Schlick(R1,1.0,cosTheta2);vec3 phi23=vec3(0.0);if(baseIOR[0]<iridescenceIOR)phi23[0]=PI;if(baseIOR[1]<iridescenceIOR)phi23[1]=PI;if(baseIOR[2]<iridescenceIOR)phi23[2]=PI;float OPD=2.0*iridescenceIOR*thinFilmThickness*cosTheta2;vec3 phi=vec3(phi21)+phi23;vec3 R123=clamp(R12*R23,1e-5,0.9999);vec3 r123=sqrt(R123);vec3 Rs=pow2(T121)*R23/(vec3(1.0)-R123);vec3 C0=R12+Rs;I=C0;vec3 Cm=Rs-T121;for(int m=1;m<=2;++m){Cm*=r123;vec3 Sm=2.0*evalSensitivity(float(m)*OPD,float(m)*phi);I+=Cm*Sm;}return max(I,vec3(0.0));}\n#endif",
    bumpmap_pars_fragment:
      "#ifdef USE_BUMPMAP\nuniform sampler2D bumpMap;uniform float bumpScale;vec2 dHdxy_fwd(){vec2 dSTdx=dFdx(vUv);vec2 dSTdy=dFdy(vUv);float Hll=bumpScale*texture2D(bumpMap,vUv).x;float dBx=bumpScale*texture2D(bumpMap,vUv+dSTdx).x-Hll;float dBy=bumpScale*texture2D(bumpMap,vUv+dSTdy).x-Hll;return vec2(dBx,dBy);}vec3 perturbNormalArb(vec3 surf_pos,vec3 surf_norm,vec2 dHdxy,float faceDirection){vec3 vSigmaX=dFdx(surf_pos.xyz);vec3 vSigmaY=dFdy(surf_pos.xyz);vec3 vN=surf_norm;vec3 R1=cross(vSigmaY,vN);vec3 R2=cross(vN,vSigmaX);float fDet=dot(vSigmaX,R1)*faceDirection;vec3 vGrad=sign(fDet)*(dHdxy.x*R1+dHdxy.y*R2);return normalize(abs(fDet)*surf_norm-vGrad);}\n#endif",
    clipping_planes_fragment:
      "#if NUM_CLIPPING_PLANES>0\nvec4 plane;\n#pragma unroll_loop_start\nfor(int i=0;i<UNION_CLIPPING_PLANES;i++){plane=clippingPlanes[i];if(dot(vClipPosition,plane.xyz)>plane.w)discard;}\n#pragma unroll_loop_end\n#if UNION_CLIPPING_PLANES<NUM_CLIPPING_PLANES\nbool clipped=true;\n#pragma unroll_loop_start\nfor(int i=UNION_CLIPPING_PLANES;i<NUM_CLIPPING_PLANES;i++){plane=clippingPlanes[i];clipped=(dot(vClipPosition,plane.xyz)>plane.w)&&clipped;}\n#pragma unroll_loop_end\nif(clipped)discard;\n#endif\n#endif",
    clipping_planes_pars_fragment:
      "#if NUM_CLIPPING_PLANES>0\nvarying vec3 vClipPosition;uniform vec4 clippingPlanes[NUM_CLIPPING_PLANES];\n#endif",
    clipping_planes_pars_vertex:
      "#if NUM_CLIPPING_PLANES>0\nvarying vec3 vClipPosition;\n#endif",
    clipping_planes_vertex:
      "#if NUM_CLIPPING_PLANES>0\nvClipPosition=-mvPosition.xyz;\n#endif",
    color_fragment:
      "#if defined(USE_COLOR_ALPHA)\ndiffuseColor*=vColor;\n#elif defined(USE_COLOR)\ndiffuseColor.rgb*=vColor;\n#endif",
    color_pars_fragment:
      "#if defined(USE_COLOR_ALPHA)\nvarying vec4 vColor;\n#elif defined(USE_COLOR)\nvarying vec3 vColor;\n#endif",
    color_pars_vertex:
      "#if defined(USE_COLOR_ALPHA)\nvarying vec4 vColor;\n#elif defined(USE_COLOR)||defined(USE_INSTANCING_COLOR)\nvarying vec3 vColor;\n#endif",
    color_vertex:
      "#if defined(USE_COLOR_ALPHA)\nvColor=vec4(1.0);\n#elif defined(USE_COLOR)||defined(USE_INSTANCING_COLOR)\nvColor=vec3(1.0);\n#endif\n#ifdef USE_COLOR\nvColor*=color;\n#endif\n#ifdef USE_INSTANCING_COLOR\nvColor.xyz*=instanceColor.xyz;\n#endif",
    common:
      "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a)clamp(a,0.0,1.0)\n#endif\n#define whiteComplement(a)(1.0-saturate(a))\nfloat pow2(const in float x){return x*x;}vec3 pow2(const in vec3 x){return x*x;}float pow3(const in float x){return x*x*x;}float pow4(const in float x){float x2=x*x;return x2*x2;}float max3(const in vec3 v){return max(max(v.x,v.y),v.z);}float average(const in vec3 v){return dot(v,vec3(0.3333333));}highp float rand(const in vec2 uv){const highp float a=12.9898,b=78.233,c=43758.5453;highp float dt=dot(uv.xy,vec2(a,b)),sn=mod(dt,PI);return fract(sin(sn)*c);}\n#ifdef HIGH_PRECISION\nfloat precisionSafeLength(vec3 v){return length(v);}\n#else\nfloat precisionSafeLength(vec3 v){float maxComponent=max3(abs(v));return length(v/maxComponent)*maxComponent;}\n#endif\nstruct IncidentLight{vec3 color;vec3 direction;bool visible;};struct ReflectedLight{vec3 directDiffuse;vec3 directSpecular;vec3 indirectDiffuse;vec3 indirectSpecular;};struct GeometricContext{vec3 position;vec3 normal;vec3 viewDir;\n#ifdef USE_CLEARCOAT\nvec3 clearcoatNormal;\n#endif\n};vec3 transformDirection(in vec3 dir,in mat4 matrix){return normalize((matrix*vec4(dir,0.0)).xyz);}vec3 inverseTransformDirection(in vec3 dir,in mat4 matrix){return normalize((vec4(dir,0.0)*matrix).xyz);}mat3 transposeMat3(const in mat3 m){mat3 tmp;tmp[0]=vec3(m[0].x,m[1].x,m[2].x);tmp[1]=vec3(m[0].y,m[1].y,m[2].y);tmp[2]=vec3(m[0].z,m[1].z,m[2].z);return tmp;}float luminance(const in vec3 rgb){const vec3 weights=vec3(0.2126729,0.7151522,0.0721750);return dot(weights,rgb);}bool isPerspectiveMatrix(mat4 m){return m[2][3]==-1.0;}vec2 equirectUv(in vec3 dir){float u=atan(dir.z,dir.x)*RECIPROCAL_PI2+0.5;float v=asin(clamp(dir.y,-1.0,1.0))*RECIPROCAL_PI+0.5;return vec2(u,v);}",
    cube_uv_reflection_fragment:
      "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_minMipLevel 4.0\n#define cubeUV_minTileSize 16.0\nfloat getFace(vec3 direction){vec3 absDirection=abs(direction);float face=-1.0;if(absDirection.x>absDirection.z){if(absDirection.x>absDirection.y)face=direction.x>0.0?0.0:3.0;else face=direction.y>0.0?1.0:4.0;}else{if(absDirection.z>absDirection.y)face=direction.z>0.0?2.0:5.0;else face=direction.y>0.0?1.0:4.0;}return face;}vec2 getUV(vec3 direction,float face){vec2 uv;if(face==0.0){uv=vec2(direction.z,direction.y)/abs(direction.x);}else if(face==1.0){uv=vec2(-direction.x,-direction.z)/abs(direction.y);}else if(face==2.0){uv=vec2(-direction.x,direction.y)/abs(direction.z);}else if(face==3.0){uv=vec2(-direction.z,direction.y)/abs(direction.x);}else if(face==4.0){uv=vec2(-direction.x,direction.z)/abs(direction.y);}else{uv=vec2(direction.x,direction.y)/abs(direction.z);}return 0.5*(uv+1.0);}vec3 bilinearCubeUV(sampler2D envMap,vec3 direction,float mipInt){float face=getFace(direction);float filterInt=max(cubeUV_minMipLevel-mipInt,0.0);mipInt=max(mipInt,cubeUV_minMipLevel);float faceSize=exp2(mipInt);vec2 uv=getUV(direction,face)*(faceSize-2.0)+1.0;if(face>2.0){uv.y+=faceSize;face-=3.0;}uv.x+=face*faceSize;uv.x+=filterInt*3.0*cubeUV_minTileSize;uv.y+=4.0*(exp2(CUBEUV_MAX_MIP)-faceSize);uv.x*=CUBEUV_TEXEL_WIDTH;uv.y*=CUBEUV_TEXEL_HEIGHT;\n#ifdef texture2DGradEXT\nreturn texture2DGradEXT(envMap,uv,vec2(0.0),vec2(0.0)).rgb;\n#else\nreturn texture2D(envMap,uv).rgb;\n#endif\n}\n#define cubeUV_r0 1.0\n#define cubeUV_v0 0.339\n#define cubeUV_m0-2.0\n#define cubeUV_r1 0.8\n#define cubeUV_v1 0.276\n#define cubeUV_m1-1.0\n#define cubeUV_r4 0.4\n#define cubeUV_v4 0.046\n#define cubeUV_m4 2.0\n#define cubeUV_r5 0.305\n#define cubeUV_v5 0.016\n#define cubeUV_m5 3.0\n#define cubeUV_r6 0.21\n#define cubeUV_v6 0.0038\n#define cubeUV_m6 4.0\nfloat roughnessToMip(float roughness){float mip=0.0;if(roughness>=cubeUV_r1){mip=(cubeUV_r0-roughness)*(cubeUV_m1-cubeUV_m0)/(cubeUV_r0-cubeUV_r1)+cubeUV_m0;}else if(roughness>=cubeUV_r4){mip=(cubeUV_r1-roughness)*(cubeUV_m4-cubeUV_m1)/(cubeUV_r1-cubeUV_r4)+cubeUV_m1;}else if(roughness>=cubeUV_r5){mip=(cubeUV_r4-roughness)*(cubeUV_m5-cubeUV_m4)/(cubeUV_r4-cubeUV_r5)+cubeUV_m4;}else if(roughness>=cubeUV_r6){mip=(cubeUV_r5-roughness)*(cubeUV_m6-cubeUV_m5)/(cubeUV_r5-cubeUV_r6)+cubeUV_m5;}else{mip=-2.0*log2(1.16*roughness);}return mip;}vec4 textureCubeUV(sampler2D envMap,vec3 sampleDir,float roughness){float mip=clamp(roughnessToMip(roughness),cubeUV_m0,CUBEUV_MAX_MIP);float mipF=fract(mip);float mipInt=floor(mip);vec3 color0=bilinearCubeUV(envMap,sampleDir,mipInt);if(mipF==0.0){return vec4(color0,1.0);}else{vec3 color1=bilinearCubeUV(envMap,sampleDir,mipInt+1.0);return vec4(mix(color0,color1,mipF),1.0);}}\n#endif",
    defaultnormal_vertex:
      "vec3 transformedNormal=objectNormal;\n#ifdef USE_INSTANCING\nmat3 m=mat3(instanceMatrix);transformedNormal/=vec3(dot(m[0],m[0]),dot(m[1],m[1]),dot(m[2],m[2]));transformedNormal=m*transformedNormal;\n#endif\ntransformedNormal=normalMatrix*transformedNormal;\n#ifdef FLIP_SIDED\ntransformedNormal=-transformedNormal;\n#endif\n#ifdef USE_TANGENT\nvec3 transformedTangent=(modelViewMatrix*vec4(objectTangent,0.0)).xyz;\n#ifdef FLIP_SIDED\ntransformedTangent=-transformedTangent;\n#endif\n#endif",
    displacementmap_pars_vertex:
      "#ifdef USE_DISPLACEMENTMAP\nuniform sampler2D displacementMap;uniform float displacementScale;uniform float displacementBias;\n#endif",
    displacementmap_vertex:
      "#ifdef USE_DISPLACEMENTMAP\ntransformed+=normalize(objectNormal)*(texture2D(displacementMap,vUv).x*displacementScale+displacementBias);\n#endif",
    emissivemap_fragment:
      "#ifdef USE_EMISSIVEMAP\nvec4 emissiveColor=texture2D(emissiveMap,vUv);totalEmissiveRadiance*=emissiveColor.rgb;\n#endif",
    emissivemap_pars_fragment:
      "#ifdef USE_EMISSIVEMAP\nuniform sampler2D emissiveMap;\n#endif",
    encodings_fragment: "gl_FragColor=linearToOutputTexel(gl_FragColor);",
    encodings_pars_fragment:
      "vec4 LinearToLinear(in vec4 value){return value;}vec4 LinearTosRGB(in vec4 value){return vec4(mix(pow(value.rgb,vec3(0.41666))*1.055-vec3(0.055),value.rgb*12.92,vec3(lessThanEqual(value.rgb,vec3(0.0031308)))),value.a);}",
    envmap_fragment:
      "#ifdef USE_ENVMAP\n#ifdef ENV_WORLDPOS\nvec3 cameraToFrag;if(isOrthographic){cameraToFrag=normalize(vec3(-viewMatrix[0][2],-viewMatrix[1][2],-viewMatrix[2][2]));}else{cameraToFrag=normalize(vWorldPosition-cameraPosition);}vec3 worldNormal=inverseTransformDirection(normal,viewMatrix);\n#ifdef ENVMAP_MODE_REFLECTION\nvec3 reflectVec=reflect(cameraToFrag,worldNormal);\n#else\nvec3 reflectVec=refract(cameraToFrag,worldNormal,refractionRatio);\n#endif\n#else\nvec3 reflectVec=vReflect;\n#endif\n#ifdef ENVMAP_TYPE_CUBE\nvec4 envColor=textureCube(envMap,vec3(flipEnvMap*reflectVec.x,reflectVec.yz));\n#else\nvec4 envColor=vec4(0.0);\n#endif\n#ifdef ENVMAP_BLENDING_MULTIPLY\noutgoingLight=mix(outgoingLight,outgoingLight*envColor.xyz,specularStrength*reflectivity);\n#elif defined(ENVMAP_BLENDING_MIX)\noutgoingLight=mix(outgoingLight,envColor.xyz,specularStrength*reflectivity);\n#elif defined(ENVMAP_BLENDING_ADD)\noutgoingLight+=envColor.xyz*specularStrength*reflectivity;\n#endif\n#endif",
    envmap_common_pars_fragment:
      "#ifdef USE_ENVMAP\nuniform float envMapIntensity;uniform float flipEnvMap;\n#ifdef ENVMAP_TYPE_CUBE\nuniform samplerCube envMap;\n#else\nuniform sampler2D envMap;\n#endif\n#endif",
    envmap_pars_fragment:
      "#ifdef USE_ENVMAP\nuniform float reflectivity;\n#if defined(USE_BUMPMAP)||defined(USE_NORMALMAP)||defined(PHONG)||defined(LAMBERT)\n#define ENV_WORLDPOS\n#endif\n#ifdef ENV_WORLDPOS\nvarying vec3 vWorldPosition;uniform float refractionRatio;\n#else\nvarying vec3 vReflect;\n#endif\n#endif",
    envmap_pars_vertex:
      "#ifdef USE_ENVMAP\n#if defined(USE_BUMPMAP)||defined(USE_NORMALMAP)||defined(PHONG)||defined(LAMBERT)\n#define ENV_WORLDPOS\n#endif\n#ifdef ENV_WORLDPOS\nvarying vec3 vWorldPosition;\n#else\nvarying vec3 vReflect;uniform float refractionRatio;\n#endif\n#endif",
    envmap_physical_pars_fragment:
      "#if defined(USE_ENVMAP)\nvec3 getIBLIrradiance(const in vec3 normal){\n#if defined(ENVMAP_TYPE_CUBE_UV)\nvec3 worldNormal=inverseTransformDirection(normal,viewMatrix);vec4 envMapColor=textureCubeUV(envMap,worldNormal,1.0);return PI*envMapColor.rgb*envMapIntensity;\n#else\nreturn vec3(0.0);\n#endif\n}vec3 getIBLRadiance(const in vec3 viewDir,const in vec3 normal,const in float roughness){\n#if defined(ENVMAP_TYPE_CUBE_UV)\nvec3 reflectVec=reflect(-viewDir,normal);reflectVec=normalize(mix(reflectVec,normal,roughness*roughness));reflectVec=inverseTransformDirection(reflectVec,viewMatrix);vec4 envMapColor=textureCubeUV(envMap,reflectVec,roughness);return envMapColor.rgb*envMapIntensity;\n#else\nreturn vec3(0.0);\n#endif\n}\n#endif",
    envmap_vertex:
      "#ifdef USE_ENVMAP\n#ifdef ENV_WORLDPOS\nvWorldPosition=worldPosition.xyz;\n#else\nvec3 cameraToVertex;if(isOrthographic){cameraToVertex=normalize(vec3(-viewMatrix[0][2],-viewMatrix[1][2],-viewMatrix[2][2]));}else{cameraToVertex=normalize(worldPosition.xyz-cameraPosition);}vec3 worldNormal=inverseTransformDirection(transformedNormal,viewMatrix);\n#ifdef ENVMAP_MODE_REFLECTION\nvReflect=reflect(cameraToVertex,worldNormal);\n#else\nvReflect=refract(cameraToVertex,worldNormal,refractionRatio);\n#endif\n#endif\n#endif",
    fog_vertex: "#ifdef USE_FOG\nvFogDepth=-mvPosition.z;\n#endif",
    fog_pars_vertex: "#ifdef USE_FOG\nvarying float vFogDepth;\n#endif",
    fog_fragment:
      "#ifdef USE_FOG\n#ifdef FOG_EXP2\nfloat fogFactor=1.0-exp(-fogDensity*fogDensity*vFogDepth*vFogDepth);\n#else\nfloat fogFactor=smoothstep(fogNear,fogFar,vFogDepth);\n#endif\ngl_FragColor.rgb=mix(gl_FragColor.rgb,fogColor,fogFactor);\n#endif",
    fog_pars_fragment:
      "#ifdef USE_FOG\nuniform vec3 fogColor;varying float vFogDepth;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;uniform float fogFar;\n#endif\n#endif",
    gradientmap_pars_fragment:
      "#ifdef USE_GRADIENTMAP\nuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance(vec3 normal,vec3 lightDirection){float dotNL=dot(normal,lightDirection);vec2 coord=vec2(dotNL*0.5+0.5,0.0);\n#ifdef USE_GRADIENTMAP\nreturn vec3(texture2D(gradientMap,coord).r);\n#else\nvec2 fw=fwidth(coord)*0.5;return mix(vec3(0.7),vec3(1.0),smoothstep(0.7-fw.x,0.7+fw.x,coord.x));\n#endif\n}",
    lightmap_fragment:
      "#ifdef USE_LIGHTMAP\nvec4 lightMapTexel=texture2D(lightMap,vUv2);vec3 lightMapIrradiance=lightMapTexel.rgb*lightMapIntensity;reflectedLight.indirectDiffuse+=lightMapIrradiance;\n#endif",
    lightmap_pars_fragment:
      "#ifdef USE_LIGHTMAP\nuniform sampler2D lightMap;uniform float lightMapIntensity;\n#endif",
    lights_lambert_fragment:
      "LambertMaterial material;material.diffuseColor=diffuseColor.rgb;material.specularStrength=specularStrength;",
    lights_lambert_pars_fragment:
      "varying vec3 vViewPosition;struct LambertMaterial{vec3 diffuseColor;float specularStrength;};void RE_Direct_Lambert(const in IncidentLight directLight,const in GeometricContext geometry,const in LambertMaterial material,inout ReflectedLight reflectedLight){float dotNL=saturate(dot(geometry.normal,directLight.direction));vec3 irradiance=dotNL*directLight.color;reflectedLight.directDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}void RE_IndirectDiffuse_Lambert(const in vec3 irradiance,const in GeometricContext geometry,const in LambertMaterial material,inout ReflectedLight reflectedLight){reflectedLight.indirectDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}\n#define RE_Direct RE_Direct_Lambert\n#define RE_IndirectDiffuse RE_IndirectDiffuse_Lambert\n#define Material_LightProbeLOD(material)(0)",
    lights_pars_begin:
      "uniform bool receiveShadow;uniform vec3 ambientLightColor;uniform vec3 lightProbe[9];vec3 shGetIrradianceAt(in vec3 normal,in vec3 shCoefficients[9]){float x=normal.x,y=normal.y,z=normal.z;vec3 result=shCoefficients[0]*0.886227;result+=shCoefficients[1]*2.0*0.511664*y;result+=shCoefficients[2]*2.0*0.511664*z;result+=shCoefficients[3]*2.0*0.511664*x;result+=shCoefficients[4]*2.0*0.429043*x*y;result+=shCoefficients[5]*2.0*0.429043*y*z;result+=shCoefficients[6]*(0.743125*z*z-0.247708);result+=shCoefficients[7]*2.0*0.429043*x*z;result+=shCoefficients[8]*0.429043*(x*x-y*y);return result;}vec3 getLightProbeIrradiance(const in vec3 lightProbe[9],const in vec3 normal){vec3 worldNormal=inverseTransformDirection(normal,viewMatrix);vec3 irradiance=shGetIrradianceAt(worldNormal,lightProbe);return irradiance;}vec3 getAmbientLightIrradiance(const in vec3 ambientLightColor){vec3 irradiance=ambientLightColor;return irradiance;}float getDistanceAttenuation(const in float lightDistance,const in float cutoffDistance,const in float decayExponent){\n#if defined(PHYSICALLY_CORRECT_LIGHTS)\nfloat distanceFalloff=1.0/max(pow(lightDistance,decayExponent),0.01);if(cutoffDistance>0.0){distanceFalloff*=pow2(saturate(1.0-pow4(lightDistance/cutoffDistance)));}return distanceFalloff;\n#else\nif(cutoffDistance>0.0&&decayExponent>0.0){return pow(saturate(-lightDistance/cutoffDistance+1.0),decayExponent);}return 1.0;\n#endif\n}float getSpotAttenuation(const in float coneCosine,const in float penumbraCosine,const in float angleCosine){return smoothstep(coneCosine,penumbraCosine,angleCosine);}\n#if NUM_DIR_LIGHTS>0\nstruct DirectionalLight{vec3 direction;vec3 color;};uniform DirectionalLight directionalLights[NUM_DIR_LIGHTS];void getDirectionalLightInfo(const in DirectionalLight directionalLight,const in GeometricContext geometry,out IncidentLight light){light.color=directionalLight.color;light.direction=directionalLight.direction;light.visible=true;}\n#endif\n#if NUM_POINT_LIGHTS>0\nstruct PointLight{vec3 position;vec3 color;float distance;float decay;};uniform PointLight pointLights[NUM_POINT_LIGHTS];void getPointLightInfo(const in PointLight pointLight,const in GeometricContext geometry,out IncidentLight light){vec3 lVector=pointLight.position-geometry.position;light.direction=normalize(lVector);float lightDistance=length(lVector);light.color=pointLight.color;light.color*=getDistanceAttenuation(lightDistance,pointLight.distance,pointLight.decay);light.visible=(light.color!=vec3(0.0));}\n#endif\n#if NUM_SPOT_LIGHTS>0\nstruct SpotLight{vec3 position;vec3 direction;vec3 color;float distance;float decay;float coneCos;float penumbraCos;};uniform SpotLight spotLights[NUM_SPOT_LIGHTS];void getSpotLightInfo(const in SpotLight spotLight,const in GeometricContext geometry,out IncidentLight light){vec3 lVector=spotLight.position-geometry.position;light.direction=normalize(lVector);float angleCos=dot(light.direction,spotLight.direction);float spotAttenuation=getSpotAttenuation(spotLight.coneCos,spotLight.penumbraCos,angleCos);if(spotAttenuation>0.0){float lightDistance=length(lVector);light.color=spotLight.color*spotAttenuation;light.color*=getDistanceAttenuation(lightDistance,spotLight.distance,spotLight.decay);light.visible=(light.color!=vec3(0.0));}else{light.color=vec3(0.0);light.visible=false;}}\n#endif\n#if NUM_RECT_AREA_LIGHTS>0\nstruct RectAreaLight{vec3 color;vec3 position;vec3 halfWidth;vec3 halfHeight;};uniform sampler2D ltc_1;uniform sampler2D ltc_2;uniform RectAreaLight rectAreaLights[NUM_RECT_AREA_LIGHTS];\n#endif\n#if NUM_HEMI_LIGHTS>0\nstruct HemisphereLight{vec3 direction;vec3 skyColor;vec3 groundColor;};uniform HemisphereLight hemisphereLights[NUM_HEMI_LIGHTS];vec3 getHemisphereLightIrradiance(const in HemisphereLight hemiLight,const in vec3 normal){float dotNL=dot(normal,hemiLight.direction);float hemiDiffuseWeight=0.5*dotNL+0.5;vec3 irradiance=mix(hemiLight.groundColor,hemiLight.skyColor,hemiDiffuseWeight);return irradiance;}\n#endif",
    lights_toon_fragment:
      "ToonMaterial material;material.diffuseColor=diffuseColor.rgb;",
    lights_toon_pars_fragment:
      "varying vec3 vViewPosition;struct ToonMaterial{vec3 diffuseColor;};void RE_Direct_Toon(const in IncidentLight directLight,const in GeometricContext geometry,const in ToonMaterial material,inout ReflectedLight reflectedLight){vec3 irradiance=getGradientIrradiance(geometry.normal,directLight.direction)*directLight.color;reflectedLight.directDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}void RE_IndirectDiffuse_Toon(const in vec3 irradiance,const in GeometricContext geometry,const in ToonMaterial material,inout ReflectedLight reflectedLight){reflectedLight.indirectDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}\n#define RE_Direct RE_Direct_Toon\n#define RE_IndirectDiffuse RE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD(material)(0)",
    lights_phong_fragment:
      "BlinnPhongMaterial material;material.diffuseColor=diffuseColor.rgb;material.specularColor=specular;material.specularShininess=shininess;material.specularStrength=specularStrength;",
    lights_phong_pars_fragment:
      "varying vec3 vViewPosition;struct BlinnPhongMaterial{vec3 diffuseColor;vec3 specularColor;float specularShininess;float specularStrength;};void RE_Direct_BlinnPhong(const in IncidentLight directLight,const in GeometricContext geometry,const in BlinnPhongMaterial material,inout ReflectedLight reflectedLight){float dotNL=saturate(dot(geometry.normal,directLight.direction));vec3 irradiance=dotNL*directLight.color;reflectedLight.directDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);reflectedLight.directSpecular+=irradiance*BRDF_BlinnPhong(directLight.direction,geometry.viewDir,geometry.normal,material.specularColor,material.specularShininess)*material.specularStrength;}void RE_IndirectDiffuse_BlinnPhong(const in vec3 irradiance,const in GeometricContext geometry,const in BlinnPhongMaterial material,inout ReflectedLight reflectedLight){reflectedLight.indirectDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}\n#define RE_Direct RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse RE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD(material)(0)",
    lights_physical_fragment:
      "PhysicalMaterial material;material.diffuseColor=diffuseColor.rgb*(1.0-metalnessFactor);vec3 dxy=max(abs(dFdx(geometryNormal)),abs(dFdy(geometryNormal)));float geometryRoughness=max(max(dxy.x,dxy.y),dxy.z);material.roughness=max(roughnessFactor,0.0525);material.roughness+=geometryRoughness;material.roughness=min(material.roughness,1.0);\n#ifdef IOR\nmaterial.ior=ior;\n#ifdef SPECULAR\nfloat specularIntensityFactor=specularIntensity;vec3 specularColorFactor=specularColor;\n#ifdef USE_SPECULARINTENSITYMAP\nspecularIntensityFactor*=texture2D(specularIntensityMap,vUv).a;\n#endif\n#ifdef USE_SPECULARCOLORMAP\nspecularColorFactor*=texture2D(specularColorMap,vUv).rgb;\n#endif\nmaterial.specularF90=mix(specularIntensityFactor,1.0,metalnessFactor);\n#else\nfloat specularIntensityFactor=1.0;vec3 specularColorFactor=vec3(1.0);material.specularF90=1.0;\n#endif\nmaterial.specularColor=mix(min(pow2((material.ior-1.0)/(material.ior+1.0))*specularColorFactor,vec3(1.0))*specularIntensityFactor,diffuseColor.rgb,metalnessFactor);\n#else\nmaterial.specularColor=mix(vec3(0.04),diffuseColor.rgb,metalnessFactor);material.specularF90=1.0;\n#endif\n#ifdef USE_CLEARCOAT\nmaterial.clearcoat=clearcoat;material.clearcoatRoughness=clearcoatRoughness;material.clearcoatF0=vec3(0.04);material.clearcoatF90=1.0;\n#ifdef USE_CLEARCOATMAP\nmaterial.clearcoat*=texture2D(clearcoatMap,vUv).x;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\nmaterial.clearcoatRoughness*=texture2D(clearcoatRoughnessMap,vUv).y;\n#endif\nmaterial.clearcoat=saturate(material.clearcoat);material.clearcoatRoughness=max(material.clearcoatRoughness,0.0525);material.clearcoatRoughness+=geometryRoughness;material.clearcoatRoughness=min(material.clearcoatRoughness,1.0);\n#endif\n#ifdef USE_IRIDESCENCE\nmaterial.iridescence=iridescence;material.iridescenceIOR=iridescenceIOR;\n#ifdef USE_IRIDESCENCEMAP\nmaterial.iridescence*=texture2D(iridescenceMap,vUv).r;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\nmaterial.iridescenceThickness=(iridescenceThicknessMaximum-iridescenceThicknessMinimum)*texture2D(iridescenceThicknessMap,vUv).g+iridescenceThicknessMinimum;\n#else\nmaterial.iridescenceThickness=iridescenceThicknessMaximum;\n#endif\n#endif\n#ifdef USE_SHEEN\nmaterial.sheenColor=sheenColor;\n#ifdef USE_SHEENCOLORMAP\nmaterial.sheenColor*=texture2D(sheenColorMap,vUv).rgb;\n#endif\nmaterial.sheenRoughness=clamp(sheenRoughness,0.07,1.0);\n#ifdef USE_SHEENROUGHNESSMAP\nmaterial.sheenRoughness*=texture2D(sheenRoughnessMap,vUv).a;\n#endif\n#endif",
    lights_physical_pars_fragment:
      "struct PhysicalMaterial{vec3 diffuseColor;float roughness;vec3 specularColor;float specularF90;\n#ifdef USE_CLEARCOAT\nfloat clearcoat;float clearcoatRoughness;vec3 clearcoatF0;float clearcoatF90;\n#endif\n#ifdef USE_IRIDESCENCE\nfloat iridescence;float iridescenceIOR;float iridescenceThickness;vec3 iridescenceFresnel;vec3 iridescenceF0;\n#endif\n#ifdef USE_SHEEN\nvec3 sheenColor;float sheenRoughness;\n#endif\n#ifdef IOR\nfloat ior;\n#endif\n#ifdef USE_TRANSMISSION\nfloat transmission;float transmissionAlpha;float thickness;float attenuationDistance;vec3 attenuationColor;\n#endif\n};vec3 clearcoatSpecular=vec3(0.0);vec3 sheenSpecular=vec3(0.0);float IBLSheenBRDF(const in vec3 normal,const in vec3 viewDir,const in float roughness){float dotNV=saturate(dot(normal,viewDir));float r2=roughness*roughness;float a=roughness<0.25?-339.2*r2+161.4*roughness-25.9:-8.48*r2+14.3*roughness-9.95;float b=roughness<0.25?44.0*r2-23.7*roughness+3.26:1.97*r2-3.27*roughness+0.72;float DG=exp(a*dotNV+b)+(roughness<0.25?0.0:0.1*(roughness-0.25));return saturate(DG*RECIPROCAL_PI);}vec2 DFGApprox(const in vec3 normal,const in vec3 viewDir,const in float roughness){float dotNV=saturate(dot(normal,viewDir));const vec4 c0=vec4(-1,-0.0275,-0.572,0.022);const vec4 c1=vec4(1,0.0425,1.04,-0.04);vec4 r=roughness*c0+c1;float a004=min(r.x*r.x,exp2(-9.28*dotNV))*r.x+r.y;vec2 fab=vec2(-1.04,1.04)*a004+r.zw;return fab;}vec3 EnvironmentBRDF(const in vec3 normal,const in vec3 viewDir,const in vec3 specularColor,const in float specularF90,const in float roughness){vec2 fab=DFGApprox(normal,viewDir,roughness);return specularColor*fab.x+specularF90*fab.y;}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence(const in vec3 normal,const in vec3 viewDir,const in vec3 specularColor,const in float specularF90,const in float iridescence,const in vec3 iridescenceF0,const in float roughness,inout vec3 singleScatter,inout vec3 multiScatter){\n#else\nvoid computeMultiscattering(const in vec3 normal,const in vec3 viewDir,const in vec3 specularColor,const in float specularF90,const in float roughness,inout vec3 singleScatter,inout vec3 multiScatter){\n#endif\nvec2 fab=DFGApprox(normal,viewDir,roughness);\n#ifdef USE_IRIDESCENCE\nvec3 Fr=mix(specularColor,iridescenceF0,iridescence);\n#else\nvec3 Fr=specularColor;\n#endif\nvec3 FssEss=Fr*fab.x+specularF90*fab.y;float Ess=fab.x+fab.y;float Ems=1.0-Ess;vec3 Favg=Fr+(1.0-Fr)*0.047619;vec3 Fms=FssEss*Favg/(1.0-Ems*Favg);singleScatter+=FssEss;multiScatter+=Fms*Ems;}\n#if NUM_RECT_AREA_LIGHTS>0\nvoid RE_Direct_RectArea_Physical(const in RectAreaLight rectAreaLight,const in GeometricContext geometry,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){vec3 normal=geometry.normal;vec3 viewDir=geometry.viewDir;vec3 position=geometry.position;vec3 lightPos=rectAreaLight.position;vec3 halfWidth=rectAreaLight.halfWidth;vec3 halfHeight=rectAreaLight.halfHeight;vec3 lightColor=rectAreaLight.color;float roughness=material.roughness;vec3 rectCoords[4];rectCoords[0]=lightPos+halfWidth-halfHeight;rectCoords[1]=lightPos-halfWidth-halfHeight;rectCoords[2]=lightPos-halfWidth+halfHeight;rectCoords[3]=lightPos+halfWidth+halfHeight;vec2 uv=LTC_Uv(normal,viewDir,roughness);vec4 t1=texture2D(ltc_1,uv);vec4 t2=texture2D(ltc_2,uv);mat3 mInv=mat3(vec3(t1.x,0,t1.y),vec3(0,1,0),vec3(t1.z,0,t1.w));vec3 fresnel=(material.specularColor*t2.x+(vec3(1.0)-material.specularColor)*t2.y);reflectedLight.directSpecular+=lightColor*fresnel*LTC_Evaluate(normal,viewDir,position,mInv,rectCoords);reflectedLight.directDiffuse+=lightColor*material.diffuseColor*LTC_Evaluate(normal,viewDir,position,mat3(1.0),rectCoords);}\n#endif\nvoid RE_Direct_Physical(const in IncidentLight directLight,const in GeometricContext geometry,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){float dotNL=saturate(dot(geometry.normal,directLight.direction));vec3 irradiance=dotNL*directLight.color;\n#ifdef USE_CLEARCOAT\nfloat dotNLcc=saturate(dot(geometry.clearcoatNormal,directLight.direction));vec3 ccIrradiance=dotNLcc*directLight.color;clearcoatSpecular+=ccIrradiance*BRDF_GGX(directLight.direction,geometry.viewDir,geometry.clearcoatNormal,material.clearcoatF0,material.clearcoatF90,material.clearcoatRoughness);\n#endif\n#ifdef USE_SHEEN\nsheenSpecular+=irradiance*BRDF_Sheen(directLight.direction,geometry.viewDir,geometry.normal,material.sheenColor,material.sheenRoughness);\n#endif\n#ifdef USE_IRIDESCENCE\nreflectedLight.directSpecular+=irradiance*BRDF_GGX_Iridescence(directLight.direction,geometry.viewDir,geometry.normal,material.specularColor,material.specularF90,material.iridescence,material.iridescenceFresnel,material.roughness);\n#else\nreflectedLight.directSpecular+=irradiance*BRDF_GGX(directLight.direction,geometry.viewDir,geometry.normal,material.specularColor,material.specularF90,material.roughness);\n#endif\nreflectedLight.directDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}void RE_IndirectDiffuse_Physical(const in vec3 irradiance,const in GeometricContext geometry,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){reflectedLight.indirectDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}void RE_IndirectSpecular_Physical(const in vec3 radiance,const in vec3 irradiance,const in vec3 clearcoatRadiance,const in GeometricContext geometry,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){\n#ifdef USE_CLEARCOAT\nclearcoatSpecular+=clearcoatRadiance*EnvironmentBRDF(geometry.clearcoatNormal,geometry.viewDir,material.clearcoatF0,material.clearcoatF90,material.clearcoatRoughness);\n#endif\n#ifdef USE_SHEEN\nsheenSpecular+=irradiance*material.sheenColor*IBLSheenBRDF(geometry.normal,geometry.viewDir,material.sheenRoughness);\n#endif\nvec3 singleScattering=vec3(0.0);vec3 multiScattering=vec3(0.0);vec3 cosineWeightedIrradiance=irradiance*RECIPROCAL_PI;\n#ifdef USE_IRIDESCENCE\ncomputeMultiscatteringIridescence(geometry.normal,geometry.viewDir,material.specularColor,material.specularF90,material.iridescence,material.iridescenceFresnel,material.roughness,singleScattering,multiScattering);\n#else\ncomputeMultiscattering(geometry.normal,geometry.viewDir,material.specularColor,material.specularF90,material.roughness,singleScattering,multiScattering);\n#endif\nvec3 totalScattering=singleScattering+multiScattering;vec3 diffuse=material.diffuseColor*(1.0-max(max(totalScattering.r,totalScattering.g),totalScattering.b));reflectedLight.indirectSpecular+=radiance*singleScattering;reflectedLight.indirectSpecular+=multiScattering*cosineWeightedIrradiance;reflectedLight.indirectDiffuse+=diffuse*cosineWeightedIrradiance;}\n#define RE_Direct RE_Direct_Physical\n#define RE_Direct_RectArea RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion(const in float dotNV,const in float ambientOcclusion,const in float roughness){return saturate(pow(dotNV+ambientOcclusion,exp2(-16.0*roughness-1.0))-1.0+ambientOcclusion);}",
    lights_fragment_begin:
      "GeometricContext geometry;geometry.position=-vViewPosition;geometry.normal=normal;geometry.viewDir=(isOrthographic)?vec3(0,0,1):normalize(vViewPosition);\n#ifdef USE_CLEARCOAT\ngeometry.clearcoatNormal=clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\nfloat dotNVi=saturate(dot(normal,geometry.viewDir));if(material.iridescenceThickness==0.0){material.iridescence=0.0;}else{material.iridescence=saturate(material.iridescence);}if(material.iridescence>0.0){material.iridescenceFresnel=evalIridescence(1.0,material.iridescenceIOR,dotNVi,material.iridescenceThickness,material.specularColor);material.iridescenceF0=Schlick_to_F0(material.iridescenceFresnel,1.0,dotNVi);}\n#endif\nIncidentLight directLight;\n#if (NUM_POINT_LIGHTS>0)&&defined(RE_Direct)\nPointLight pointLight;\n#if defined(USE_SHADOWMAP)&&NUM_POINT_LIGHT_SHADOWS>0\nPointLightShadow pointLightShadow;\n#endif\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_POINT_LIGHTS;i++){pointLight=pointLights[i];getPointLightInfo(pointLight,geometry,directLight);\n#if defined(USE_SHADOWMAP)&&(UNROLLED_LOOP_INDEX<NUM_POINT_LIGHT_SHADOWS)\npointLightShadow=pointLightShadows[i];directLight.color*=all(bvec2(directLight.visible,receiveShadow))?getPointShadow(pointShadowMap[i],pointLightShadow.shadowMapSize,pointLightShadow.shadowBias,pointLightShadow.shadowRadius,vPointShadowCoord[i],pointLightShadow.shadowCameraNear,pointLightShadow.shadowCameraFar):1.0;\n#endif\nRE_Direct(directLight,geometry,material,reflectedLight);}\n#pragma unroll_loop_end\n#endif\n#if (NUM_SPOT_LIGHTS>0)&&defined(RE_Direct)\nSpotLight spotLight;vec4 spotColor;vec3 spotLightCoord;bool inSpotLightMap;\n#if defined(USE_SHADOWMAP)&&NUM_SPOT_LIGHT_SHADOWS>0\nSpotLightShadow spotLightShadow;\n#endif\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_SPOT_LIGHTS;i++){spotLight=spotLights[i];getSpotLightInfo(spotLight,geometry,directLight);\n#if (UNROLLED_LOOP_INDEX<NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS)\n#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n#elif (UNROLLED_LOOP_INDEX<NUM_SPOT_LIGHT_SHADOWS)\n#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n#else\n#define SPOT_LIGHT_MAP_INDEX(UNROLLED_LOOP_INDEX-NUM_SPOT_LIGHT_SHADOWS+NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS)\n#endif\n#if (SPOT_LIGHT_MAP_INDEX<NUM_SPOT_LIGHT_MAPS)\nspotLightCoord=vSpotLightCoord[i].xyz/vSpotLightCoord[i].w;inSpotLightMap=all(lessThan(abs(spotLightCoord*2.-1.),vec3(1.0)));spotColor=texture2D(spotLightMap[SPOT_LIGHT_MAP_INDEX],spotLightCoord.xy);directLight.color=inSpotLightMap?directLight.color*spotColor.rgb:directLight.color;\n#endif\n#undef SPOT_LIGHT_MAP_INDEX\n#if defined(USE_SHADOWMAP)&&(UNROLLED_LOOP_INDEX<NUM_SPOT_LIGHT_SHADOWS)\nspotLightShadow=spotLightShadows[i];directLight.color*=all(bvec2(directLight.visible,receiveShadow))?getShadow(spotShadowMap[i],spotLightShadow.shadowMapSize,spotLightShadow.shadowBias,spotLightShadow.shadowRadius,vSpotLightCoord[i]):1.0;\n#endif\nRE_Direct(directLight,geometry,material,reflectedLight);}\n#pragma unroll_loop_end\n#endif\n#if (NUM_DIR_LIGHTS>0)&&defined(RE_Direct)\nDirectionalLight directionalLight;\n#if defined(USE_SHADOWMAP)&&NUM_DIR_LIGHT_SHADOWS>0\nDirectionalLightShadow directionalLightShadow;\n#endif\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_DIR_LIGHTS;i++){directionalLight=directionalLights[i];getDirectionalLightInfo(directionalLight,geometry,directLight);\n#if defined(USE_SHADOWMAP)&&(UNROLLED_LOOP_INDEX<NUM_DIR_LIGHT_SHADOWS)\ndirectionalLightShadow=directionalLightShadows[i];directLight.color*=all(bvec2(directLight.visible,receiveShadow))?getShadow(directionalShadowMap[i],directionalLightShadow.shadowMapSize,directionalLightShadow.shadowBias,directionalLightShadow.shadowRadius,vDirectionalShadowCoord[i]):1.0;\n#endif\nRE_Direct(directLight,geometry,material,reflectedLight);}\n#pragma unroll_loop_end\n#endif\n#if (NUM_RECT_AREA_LIGHTS>0)&&defined(RE_Direct_RectArea)\nRectAreaLight rectAreaLight;\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_RECT_AREA_LIGHTS;i++){rectAreaLight=rectAreaLights[i];RE_Direct_RectArea(rectAreaLight,geometry,material,reflectedLight);}\n#pragma unroll_loop_end\n#endif\n#if defined(RE_IndirectDiffuse)\nvec3 iblIrradiance=vec3(0.0);vec3 irradiance=getAmbientLightIrradiance(ambientLightColor);irradiance+=getLightProbeIrradiance(lightProbe,geometry.normal);\n#if (NUM_HEMI_LIGHTS>0)\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_HEMI_LIGHTS;i++){irradiance+=getHemisphereLightIrradiance(hemisphereLights[i],geometry.normal);}\n#pragma unroll_loop_end\n#endif\n#endif\n#if defined(RE_IndirectSpecular)\nvec3 radiance=vec3(0.0);vec3 clearcoatRadiance=vec3(0.0);\n#endif",
    lights_fragment_maps:
      "#if defined(RE_IndirectDiffuse)\n#ifdef USE_LIGHTMAP\nvec4 lightMapTexel=texture2D(lightMap,vUv2);vec3 lightMapIrradiance=lightMapTexel.rgb*lightMapIntensity;irradiance+=lightMapIrradiance;\n#endif\n#if defined(USE_ENVMAP)&&defined(STANDARD)&&defined(ENVMAP_TYPE_CUBE_UV)\niblIrradiance+=getIBLIrradiance(geometry.normal);\n#endif\n#endif\n#if defined(USE_ENVMAP)&&defined(RE_IndirectSpecular)\nradiance+=getIBLRadiance(geometry.viewDir,geometry.normal,material.roughness);\n#ifdef USE_CLEARCOAT\nclearcoatRadiance+=getIBLRadiance(geometry.viewDir,geometry.clearcoatNormal,material.clearcoatRoughness);\n#endif\n#endif",
    lights_fragment_end:
      "#if defined(RE_IndirectDiffuse)\nRE_IndirectDiffuse(irradiance,geometry,material,reflectedLight);\n#endif\n#if defined(RE_IndirectSpecular)\nRE_IndirectSpecular(radiance,iblIrradiance,clearcoatRadiance,geometry,material,reflectedLight);\n#endif",
    logdepthbuf_fragment:
      "#if defined(USE_LOGDEPTHBUF)&&defined(USE_LOGDEPTHBUF_EXT)\ngl_FragDepthEXT=vIsPerspective==0.0?gl_FragCoord.z:log2(vFragDepth)*logDepthBufFC*0.5;\n#endif",
    logdepthbuf_pars_fragment:
      "#if defined(USE_LOGDEPTHBUF)&&defined(USE_LOGDEPTHBUF_EXT)\nuniform float logDepthBufFC;varying float vFragDepth;varying float vIsPerspective;\n#endif",
    logdepthbuf_pars_vertex:
      "#ifdef USE_LOGDEPTHBUF\n#ifdef USE_LOGDEPTHBUF_EXT\nvarying float vFragDepth;varying float vIsPerspective;\n#else\nuniform float logDepthBufFC;\n#endif\n#endif",
    logdepthbuf_vertex:
      "#ifdef USE_LOGDEPTHBUF\n#ifdef USE_LOGDEPTHBUF_EXT\nvFragDepth=1.0+gl_Position.w;vIsPerspective=float(isPerspectiveMatrix(projectionMatrix));\n#else\nif(isPerspectiveMatrix(projectionMatrix)){gl_Position.z=log2(max(EPSILON,gl_Position.w+1.0))*logDepthBufFC-1.0;gl_Position.z*=gl_Position.w;}\n#endif\n#endif",
    map_fragment:
      "#ifdef USE_MAP\nvec4 sampledDiffuseColor=texture2D(map,vUv);\n#ifdef DECODE_VIDEO_TEXTURE\nsampledDiffuseColor=vec4(mix(pow(sampledDiffuseColor.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),sampledDiffuseColor.rgb*0.0773993808,vec3(lessThanEqual(sampledDiffuseColor.rgb,vec3(0.04045)))),sampledDiffuseColor.w);\n#endif\ndiffuseColor*=sampledDiffuseColor;\n#endif",
    map_pars_fragment: "#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
    map_particle_fragment:
      "#if defined(USE_MAP)||defined(USE_ALPHAMAP)\nvec2 uv=(uvTransform*vec3(gl_PointCoord.x,1.0-gl_PointCoord.y,1)).xy;\n#endif\n#ifdef USE_MAP\ndiffuseColor*=texture2D(map,uv);\n#endif\n#ifdef USE_ALPHAMAP\ndiffuseColor.a*=texture2D(alphaMap,uv).g;\n#endif",
    map_particle_pars_fragment:
      "#if defined(USE_MAP)||defined(USE_ALPHAMAP)\nuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\nuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\nuniform sampler2D alphaMap;\n#endif",
    metalnessmap_fragment:
      "float metalnessFactor=metalness;\n#ifdef USE_METALNESSMAP\nvec4 texelMetalness=texture2D(metalnessMap,vUv);metalnessFactor*=texelMetalness.b;\n#endif",
    metalnessmap_pars_fragment:
      "#ifdef USE_METALNESSMAP\nuniform sampler2D metalnessMap;\n#endif",
    morphcolor_vertex:
      "#if defined(USE_MORPHCOLORS)&&defined(MORPHTARGETS_TEXTURE)\nvColor*=morphTargetBaseInfluence;for(int i=0;i<MORPHTARGETS_COUNT;i++){\n#if defined(USE_COLOR_ALPHA)\nif(morphTargetInfluences[i]!=0.0)vColor+=getMorph(gl_VertexID,i,2)*morphTargetInfluences[i];\n#elif defined(USE_COLOR)\nif(morphTargetInfluences[i]!=0.0)vColor+=getMorph(gl_VertexID,i,2).rgb*morphTargetInfluences[i];\n#endif\n}\n#endif",
    morphnormal_vertex:
      "#ifdef USE_MORPHNORMALS\nobjectNormal*=morphTargetBaseInfluence;\n#ifdef MORPHTARGETS_TEXTURE\nfor(int i=0;i<MORPHTARGETS_COUNT;i++){if(morphTargetInfluences[i]!=0.0)objectNormal+=getMorph(gl_VertexID,i,1).xyz*morphTargetInfluences[i];}\n#else\nobjectNormal+=morphNormal0*morphTargetInfluences[0];objectNormal+=morphNormal1*morphTargetInfluences[1];objectNormal+=morphNormal2*morphTargetInfluences[2];objectNormal+=morphNormal3*morphTargetInfluences[3];\n#endif\n#endif",
    morphtarget_pars_vertex:
      "#ifdef USE_MORPHTARGETS\nuniform float morphTargetBaseInfluence;\n#ifdef MORPHTARGETS_TEXTURE\nuniform float morphTargetInfluences[MORPHTARGETS_COUNT];uniform sampler2DArray morphTargetsTexture;uniform ivec2 morphTargetsTextureSize;vec4 getMorph(const in int vertexIndex,const in int morphTargetIndex,const in int offset){int texelIndex=vertexIndex*MORPHTARGETS_TEXTURE_STRIDE+offset;int y=texelIndex/morphTargetsTextureSize.x;int x=texelIndex-y*morphTargetsTextureSize.x;ivec3 morphUV=ivec3(x,y,morphTargetIndex);return texelFetch(morphTargetsTexture,morphUV,0);}\n#else\n#ifndef USE_MORPHNORMALS\nuniform float morphTargetInfluences[8];\n#else\nuniform float morphTargetInfluences[4];\n#endif\n#endif\n#endif",
    morphtarget_vertex:
      "#ifdef USE_MORPHTARGETS\ntransformed*=morphTargetBaseInfluence;\n#ifdef MORPHTARGETS_TEXTURE\nfor(int i=0;i<MORPHTARGETS_COUNT;i++){if(morphTargetInfluences[i]!=0.0)transformed+=getMorph(gl_VertexID,i,0).xyz*morphTargetInfluences[i];}\n#else\ntransformed+=morphTarget0*morphTargetInfluences[0];transformed+=morphTarget1*morphTargetInfluences[1];transformed+=morphTarget2*morphTargetInfluences[2];transformed+=morphTarget3*morphTargetInfluences[3];\n#ifndef USE_MORPHNORMALS\ntransformed+=morphTarget4*morphTargetInfluences[4];transformed+=morphTarget5*morphTargetInfluences[5];transformed+=morphTarget6*morphTargetInfluences[6];transformed+=morphTarget7*morphTargetInfluences[7];\n#endif\n#endif\n#endif",
    normal_fragment_begin:
      "float faceDirection=gl_FrontFacing?1.0:-1.0;\n#ifdef FLAT_SHADED\nvec3 fdx=dFdx(vViewPosition);vec3 fdy=dFdy(vViewPosition);vec3 normal=normalize(cross(fdx,fdy));\n#else\nvec3 normal=normalize(vNormal);\n#ifdef DOUBLE_SIDED\nnormal=normal*faceDirection;\n#endif\n#ifdef USE_TANGENT\nvec3 tangent=normalize(vTangent);vec3 bitangent=normalize(vBitangent);\n#ifdef DOUBLE_SIDED\ntangent=tangent*faceDirection;bitangent=bitangent*faceDirection;\n#endif\n#if defined(TANGENTSPACE_NORMALMAP)||defined(USE_CLEARCOAT_NORMALMAP)\nmat3 vTBN=mat3(tangent,bitangent,normal);\n#endif\n#endif\n#endif\nvec3 geometryNormal=normal;",
    normal_fragment_maps:
      "#ifdef OBJECTSPACE_NORMALMAP\nnormal=texture2D(normalMap,vUv).xyz*2.0-1.0;\n#ifdef FLIP_SIDED\nnormal=-normal;\n#endif\n#ifdef DOUBLE_SIDED\nnormal=normal*faceDirection;\n#endif\nnormal=normalize(normalMatrix*normal);\n#elif defined(TANGENTSPACE_NORMALMAP)\nvec3 mapN=texture2D(normalMap,vUv).xyz*2.0-1.0;mapN.xy*=normalScale;\n#ifdef USE_TANGENT\nnormal=normalize(vTBN*mapN);\n#else\nnormal=perturbNormal2Arb(-vViewPosition,normal,mapN,faceDirection);\n#endif\n#elif defined(USE_BUMPMAP)\nnormal=perturbNormalArb(-vViewPosition,normal,dHdxy_fwd(),faceDirection);\n#endif",
    normal_pars_fragment:
      "#ifndef FLAT_SHADED\nvarying vec3 vNormal;\n#ifdef USE_TANGENT\nvarying vec3 vTangent;varying vec3 vBitangent;\n#endif\n#endif",
    normal_pars_vertex:
      "#ifndef FLAT_SHADED\nvarying vec3 vNormal;\n#ifdef USE_TANGENT\nvarying vec3 vTangent;varying vec3 vBitangent;\n#endif\n#endif",
    normal_vertex:
      "#ifndef FLAT_SHADED\nvNormal=normalize(transformedNormal);\n#ifdef USE_TANGENT\nvTangent=normalize(transformedTangent);vBitangent=normalize(cross(vNormal,vTangent)*tangent.w);\n#endif\n#endif",
    normalmap_pars_fragment:
      "#ifdef USE_NORMALMAP\nuniform sampler2D normalMap;uniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\nuniform mat3 normalMatrix;\n#endif\n#if !defined(USE_TANGENT)&&(defined(TANGENTSPACE_NORMALMAP)||defined(USE_CLEARCOAT_NORMALMAP))\nvec3 perturbNormal2Arb(vec3 eye_pos,vec3 surf_norm,vec3 mapN,float faceDirection){vec3 q0=dFdx(eye_pos.xyz);vec3 q1=dFdy(eye_pos.xyz);vec2 st0=dFdx(vUv.st);vec2 st1=dFdy(vUv.st);vec3 N=surf_norm;vec3 q1perp=cross(q1,N);vec3 q0perp=cross(N,q0);vec3 T=q1perp*st0.x+q0perp*st1.x;vec3 B=q1perp*st0.y+q0perp*st1.y;float det=max(dot(T,T),dot(B,B));float scale=(det==0.0)?0.0:faceDirection*inversesqrt(det);return normalize(T*(mapN.x*scale)+B*(mapN.y*scale)+N*mapN.z);}\n#endif",
    clearcoat_normal_fragment_begin:
      "#ifdef USE_CLEARCOAT\nvec3 clearcoatNormal=geometryNormal;\n#endif",
    clearcoat_normal_fragment_maps:
      "#ifdef USE_CLEARCOAT_NORMALMAP\nvec3 clearcoatMapN=texture2D(clearcoatNormalMap,vUv).xyz*2.0-1.0;clearcoatMapN.xy*=clearcoatNormalScale;\n#ifdef USE_TANGENT\nclearcoatNormal=normalize(vTBN*clearcoatMapN);\n#else\nclearcoatNormal=perturbNormal2Arb(-vViewPosition,clearcoatNormal,clearcoatMapN,faceDirection);\n#endif\n#endif",
    clearcoat_pars_fragment:
      "#ifdef USE_CLEARCOATMAP\nuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\nuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\nuniform sampler2D clearcoatNormalMap;uniform vec2 clearcoatNormalScale;\n#endif",
    iridescence_pars_fragment:
      "#ifdef USE_IRIDESCENCEMAP\nuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\nuniform sampler2D iridescenceThicknessMap;\n#endif",
    output_fragment:
      "#ifdef OPAQUE\ndiffuseColor.a=1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a*=material.transmissionAlpha+0.1;\n#endif\ngl_FragColor=vec4(outgoingLight,diffuseColor.a);",
    packing:
      "vec3 packNormalToRGB(const in vec3 normal){return normalize(normal)*0.5+0.5;}vec3 unpackRGBToNormal(const in vec3 rgb){return 2.0*rgb.xyz-1.0;}const float PackUpscale=256./255.;const float UnpackDownscale=255./256.;const vec3 PackFactors=vec3(256.*256.*256.,256.*256.,256.);const vec4 UnpackFactors=UnpackDownscale/vec4(PackFactors,1.);const float ShiftRight8=1./256.;vec4 packDepthToRGBA(const in float v){vec4 r=vec4(fract(v*PackFactors),v);r.yzw-=r.xyz*ShiftRight8;return r*PackUpscale;}float unpackRGBAToDepth(const in vec4 v){return dot(v,UnpackFactors);}vec2 packDepthToRG(in highp float v){return packDepthToRGBA(v).yx;}float unpackRGToDepth(const in highp vec2 v){return unpackRGBAToDepth(vec4(v.xy,0.0,0.0));}vec4 pack2HalfToRGBA(vec2 v){vec4 r=vec4(v.x,fract(v.x*255.0),v.y,fract(v.y*255.0));return vec4(r.x-r.y/255.0,r.y,r.z-r.w/255.0,r.w);}vec2 unpackRGBATo2Half(vec4 v){return vec2(v.x+(v.y/255.0),v.z+(v.w/255.0));}float viewZToOrthographicDepth(const in float viewZ,const in float near,const in float far){return(viewZ+near)/(near-far);}float orthographicDepthToViewZ(const in float linearClipZ,const in float near,const in float far){return linearClipZ*(near-far)-near;}float viewZToPerspectiveDepth(const in float viewZ,const in float near,const in float far){return((near+viewZ)*far)/((far-near)*viewZ);}float perspectiveDepthToViewZ(const in float invClipZ,const in float near,const in float far){return(near*far)/((far-near)*invClipZ-far);}",
    premultiplied_alpha_fragment:
      "#ifdef PREMULTIPLIED_ALPHA\ngl_FragColor.rgb*=gl_FragColor.a;\n#endif",
    project_vertex:
      "vec4 mvPosition=vec4(transformed,1.0);\n#ifdef USE_INSTANCING\nmvPosition=instanceMatrix*mvPosition;\n#endif\nmvPosition=modelViewMatrix*mvPosition;gl_Position=projectionMatrix*mvPosition;",
    dithering_fragment:
      "#ifdef DITHERING\ngl_FragColor.rgb=dithering(gl_FragColor.rgb);\n#endif",
    dithering_pars_fragment:
      "#ifdef DITHERING\nvec3 dithering(vec3 color){float grid_position=rand(gl_FragCoord.xy);vec3 dither_shift_RGB=vec3(0.25/255.0,-0.25/255.0,0.25/255.0);dither_shift_RGB=mix(2.0*dither_shift_RGB,-2.0*dither_shift_RGB,grid_position);return color+dither_shift_RGB;}\n#endif",
    roughnessmap_fragment:
      "float roughnessFactor=roughness;\n#ifdef USE_ROUGHNESSMAP\nvec4 texelRoughness=texture2D(roughnessMap,vUv);roughnessFactor*=texelRoughness.g;\n#endif",
    roughnessmap_pars_fragment:
      "#ifdef USE_ROUGHNESSMAP\nuniform sampler2D roughnessMap;\n#endif",
    shadowmap_pars_fragment:
      "#if NUM_SPOT_LIGHT_COORDS>0\nvarying vec4 vSpotLightCoord[NUM_SPOT_LIGHT_COORDS];\n#endif\n#if NUM_SPOT_LIGHT_MAPS>0\nuniform sampler2D spotLightMap[NUM_SPOT_LIGHT_MAPS];\n#endif\n#ifdef USE_SHADOWMAP\n#if NUM_DIR_LIGHT_SHADOWS>0\nuniform sampler2D directionalShadowMap[NUM_DIR_LIGHT_SHADOWS];varying vec4 vDirectionalShadowCoord[NUM_DIR_LIGHT_SHADOWS];struct DirectionalLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;};uniform DirectionalLightShadow directionalLightShadows[NUM_DIR_LIGHT_SHADOWS];\n#endif\n#if NUM_SPOT_LIGHT_SHADOWS>0\nuniform sampler2D spotShadowMap[NUM_SPOT_LIGHT_SHADOWS];struct SpotLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;};uniform SpotLightShadow spotLightShadows[NUM_SPOT_LIGHT_SHADOWS];\n#endif\n#if NUM_POINT_LIGHT_SHADOWS>0\nuniform sampler2D pointShadowMap[NUM_POINT_LIGHT_SHADOWS];varying vec4 vPointShadowCoord[NUM_POINT_LIGHT_SHADOWS];struct PointLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;float shadowCameraNear;float shadowCameraFar;};uniform PointLightShadow pointLightShadows[NUM_POINT_LIGHT_SHADOWS];\n#endif\nfloat texture2DCompare(sampler2D depths,vec2 uv,float compare){return step(compare,unpackRGBAToDepth(texture2D(depths,uv)));}vec2 texture2DDistribution(sampler2D shadow,vec2 uv){return unpackRGBATo2Half(texture2D(shadow,uv));}float VSMShadow(sampler2D shadow,vec2 uv,float compare){float occlusion=1.0;vec2 distribution=texture2DDistribution(shadow,uv);float hard_shadow=step(compare,distribution.x);if(hard_shadow!=1.0){float distance=compare-distribution.x;float variance=max(0.00000,distribution.y*distribution.y);float softness_probability=variance/(variance+distance*distance);softness_probability=clamp((softness_probability-0.3)/(0.95-0.3),0.0,1.0);occlusion=clamp(max(hard_shadow,softness_probability),0.0,1.0);}return occlusion;}float getShadow(sampler2D shadowMap,vec2 shadowMapSize,float shadowBias,float shadowRadius,vec4 shadowCoord){float shadow=1.0;shadowCoord.xyz/=shadowCoord.w;shadowCoord.z+=shadowBias;bvec4 inFrustumVec=bvec4(shadowCoord.x>=0.0,shadowCoord.x<=1.0,shadowCoord.y>=0.0,shadowCoord.y<=1.0);bool inFrustum=all(inFrustumVec);bvec2 frustumTestVec=bvec2(inFrustum,shadowCoord.z<=1.0);bool frustumTest=all(frustumTestVec);if(frustumTest){\n#if defined(SHADOWMAP_TYPE_PCF)\nvec2 texelSize=vec2(1.0)/shadowMapSize;float dx0=-texelSize.x*shadowRadius;float dy0=-texelSize.y*shadowRadius;float dx1=+texelSize.x*shadowRadius;float dy1=+texelSize.y*shadowRadius;float dx2=dx0/2.0;float dy2=dy0/2.0;float dx3=dx1/2.0;float dy3=dy1/2.0;shadow=(texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx0,dy0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(0.0,dy0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx1,dy0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx2,dy2),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(0.0,dy2),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx3,dy2),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx0,0.0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx2,0.0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy,shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx3,0.0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx1,0.0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx2,dy3),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(0.0,dy3),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx3,dy3),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx0,dy1),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(0.0,dy1),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx1,dy1),shadowCoord.z))*(1.0/17.0);\n#elif defined(SHADOWMAP_TYPE_PCF_SOFT)\nvec2 texelSize=vec2(1.0)/shadowMapSize;float dx=texelSize.x;float dy=texelSize.y;vec2 uv=shadowCoord.xy;vec2 f=fract(uv*shadowMapSize+0.5);uv-=f*texelSize;shadow=(texture2DCompare(shadowMap,uv,shadowCoord.z)+texture2DCompare(shadowMap,uv+vec2(dx,0.0),shadowCoord.z)+texture2DCompare(shadowMap,uv+vec2(0.0,dy),shadowCoord.z)+texture2DCompare(shadowMap,uv+texelSize,shadowCoord.z)+mix(texture2DCompare(shadowMap,uv+vec2(-dx,0.0),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(2.0*dx,0.0),shadowCoord.z),f.x)+mix(texture2DCompare(shadowMap,uv+vec2(-dx,dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(2.0*dx,dy),shadowCoord.z),f.x)+mix(texture2DCompare(shadowMap,uv+vec2(0.0,-dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(0.0,2.0*dy),shadowCoord.z),f.y)+mix(texture2DCompare(shadowMap,uv+vec2(dx,-dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(dx,2.0*dy),shadowCoord.z),f.y)+mix(mix(texture2DCompare(shadowMap,uv+vec2(-dx,-dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(2.0*dx,-dy),shadowCoord.z),f.x),mix(texture2DCompare(shadowMap,uv+vec2(-dx,2.0*dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(2.0*dx,2.0*dy),shadowCoord.z),f.x),f.y))*(1.0/9.0);\n#elif defined(SHADOWMAP_TYPE_VSM)\nshadow=VSMShadow(shadowMap,shadowCoord.xy,shadowCoord.z);\n#else\nshadow=texture2DCompare(shadowMap,shadowCoord.xy,shadowCoord.z);\n#endif\n}return shadow;}vec2 cubeToUV(vec3 v,float texelSizeY){vec3 absV=abs(v);float scaleToCube=1.0/max(absV.x,max(absV.y,absV.z));absV*=scaleToCube;v*=scaleToCube*(1.0-2.0*texelSizeY);vec2 planar=v.xy;float almostATexel=1.5*texelSizeY;float almostOne=1.0-almostATexel;if(absV.z>=almostOne){if(v.z>0.0)planar.x=4.0-v.x;}else if(absV.x>=almostOne){float signX=sign(v.x);planar.x=v.z*signX+2.0*signX;}else if(absV.y>=almostOne){float signY=sign(v.y);planar.x=v.x+2.0*signY+2.0;planar.y=v.z*signY-2.0;}return vec2(0.125,0.25)*planar+vec2(0.375,0.75);}float getPointShadow(sampler2D shadowMap,vec2 shadowMapSize,float shadowBias,float shadowRadius,vec4 shadowCoord,float shadowCameraNear,float shadowCameraFar){vec2 texelSize=vec2(1.0)/(shadowMapSize*vec2(4.0,2.0));vec3 lightToPosition=shadowCoord.xyz;float dp=(length(lightToPosition)-shadowCameraNear)/(shadowCameraFar-shadowCameraNear);dp+=shadowBias;vec3 bd3D=normalize(lightToPosition);\n#if defined(SHADOWMAP_TYPE_PCF)||defined(SHADOWMAP_TYPE_PCF_SOFT)||defined(SHADOWMAP_TYPE_VSM)\nvec2 offset=vec2(-1,1)*shadowRadius*texelSize.y;return(texture2DCompare(shadowMap,cubeToUV(bd3D+offset.xyy,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.yyy,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.xyx,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.yyx,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.xxy,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.yxy,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.xxx,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.yxx,texelSize.y),dp))*(1.0/9.0);\n#else\nreturn texture2DCompare(shadowMap,cubeToUV(bd3D,texelSize.y),dp);\n#endif\n}\n#endif",
    shadowmap_pars_vertex:
      "#if NUM_SPOT_LIGHT_COORDS>0\nuniform mat4 spotLightMatrix[NUM_SPOT_LIGHT_COORDS];varying vec4 vSpotLightCoord[NUM_SPOT_LIGHT_COORDS];\n#endif\n#ifdef USE_SHADOWMAP\n#if NUM_DIR_LIGHT_SHADOWS>0\nuniform mat4 directionalShadowMatrix[NUM_DIR_LIGHT_SHADOWS];varying vec4 vDirectionalShadowCoord[NUM_DIR_LIGHT_SHADOWS];struct DirectionalLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;};uniform DirectionalLightShadow directionalLightShadows[NUM_DIR_LIGHT_SHADOWS];\n#endif\n#if NUM_SPOT_LIGHT_SHADOWS>0\nstruct SpotLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;};uniform SpotLightShadow spotLightShadows[NUM_SPOT_LIGHT_SHADOWS];\n#endif\n#if NUM_POINT_LIGHT_SHADOWS>0\nuniform mat4 pointShadowMatrix[NUM_POINT_LIGHT_SHADOWS];varying vec4 vPointShadowCoord[NUM_POINT_LIGHT_SHADOWS];struct PointLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;float shadowCameraNear;float shadowCameraFar;};uniform PointLightShadow pointLightShadows[NUM_POINT_LIGHT_SHADOWS];\n#endif\n#endif",
    shadowmap_vertex:
      "#if defined(USE_SHADOWMAP)||(NUM_SPOT_LIGHT_COORDS>0)\n#if NUM_DIR_LIGHT_SHADOWS>0||NUM_SPOT_LIGHT_COORDS>0||NUM_POINT_LIGHT_SHADOWS>0\nvec3 shadowWorldNormal=inverseTransformDirection(transformedNormal,viewMatrix);vec4 shadowWorldPosition;\n#endif\n#if NUM_DIR_LIGHT_SHADOWS>0\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_DIR_LIGHT_SHADOWS;i++){shadowWorldPosition=worldPosition+vec4(shadowWorldNormal*directionalLightShadows[i].shadowNormalBias,0);vDirectionalShadowCoord[i]=directionalShadowMatrix[i]*shadowWorldPosition;}\n#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHT_COORDS>0\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_SPOT_LIGHT_COORDS;i++){shadowWorldPosition=worldPosition;\n#if (defined(USE_SHADOWMAP)&&UNROLLED_LOOP_INDEX<NUM_SPOT_LIGHT_SHADOWS)\nshadowWorldPosition.xyz+=shadowWorldNormal*spotLightShadows[i].shadowNormalBias;\n#endif\nvSpotLightCoord[i]=spotLightMatrix[i]*shadowWorldPosition;}\n#pragma unroll_loop_end\n#endif\n#if NUM_POINT_LIGHT_SHADOWS>0\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_POINT_LIGHT_SHADOWS;i++){shadowWorldPosition=worldPosition+vec4(shadowWorldNormal*pointLightShadows[i].shadowNormalBias,0);vPointShadowCoord[i]=pointShadowMatrix[i]*shadowWorldPosition;}\n#pragma unroll_loop_end\n#endif\n#endif",
    shadowmask_pars_fragment:
      "float getShadowMask(){float shadow=1.0;\n#ifdef USE_SHADOWMAP\n#if NUM_DIR_LIGHT_SHADOWS>0\nDirectionalLightShadow directionalLight;\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_DIR_LIGHT_SHADOWS;i++){directionalLight=directionalLightShadows[i];shadow*=receiveShadow?getShadow(directionalShadowMap[i],directionalLight.shadowMapSize,directionalLight.shadowBias,directionalLight.shadowRadius,vDirectionalShadowCoord[i]):1.0;}\n#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHT_SHADOWS>0\nSpotLightShadow spotLight;\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_SPOT_LIGHT_SHADOWS;i++){spotLight=spotLightShadows[i];shadow*=receiveShadow?getShadow(spotShadowMap[i],spotLight.shadowMapSize,spotLight.shadowBias,spotLight.shadowRadius,vSpotLightCoord[i]):1.0;}\n#pragma unroll_loop_end\n#endif\n#if NUM_POINT_LIGHT_SHADOWS>0\nPointLightShadow pointLight;\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_POINT_LIGHT_SHADOWS;i++){pointLight=pointLightShadows[i];shadow*=receiveShadow?getPointShadow(pointShadowMap[i],pointLight.shadowMapSize,pointLight.shadowBias,pointLight.shadowRadius,vPointShadowCoord[i],pointLight.shadowCameraNear,pointLight.shadowCameraFar):1.0;}\n#pragma unroll_loop_end\n#endif\n#endif\nreturn shadow;}",
    skinbase_vertex:
      "#ifdef USE_SKINNING\nmat4 boneMatX=getBoneMatrix(skinIndex.x);mat4 boneMatY=getBoneMatrix(skinIndex.y);mat4 boneMatZ=getBoneMatrix(skinIndex.z);mat4 boneMatW=getBoneMatrix(skinIndex.w);\n#endif",
    skinning_pars_vertex:
      "#ifdef USE_SKINNING\nuniform mat4 bindMatrix;uniform mat4 bindMatrixInverse;uniform highp sampler2D boneTexture;uniform int boneTextureSize;mat4 getBoneMatrix(const in float i){float j=i*4.0;float x=mod(j,float(boneTextureSize));float y=floor(j/float(boneTextureSize));float dx=1.0/float(boneTextureSize);float dy=1.0/float(boneTextureSize);y=dy*(y+0.5);vec4 v1=texture2D(boneTexture,vec2(dx*(x+0.5),y));vec4 v2=texture2D(boneTexture,vec2(dx*(x+1.5),y));vec4 v3=texture2D(boneTexture,vec2(dx*(x+2.5),y));vec4 v4=texture2D(boneTexture,vec2(dx*(x+3.5),y));mat4 bone=mat4(v1,v2,v3,v4);return bone;}\n#endif",
    skinning_vertex:
      "#ifdef USE_SKINNING\nvec4 skinVertex=bindMatrix*vec4(transformed,1.0);vec4 skinned=vec4(0.0);skinned+=boneMatX*skinVertex*skinWeight.x;skinned+=boneMatY*skinVertex*skinWeight.y;skinned+=boneMatZ*skinVertex*skinWeight.z;skinned+=boneMatW*skinVertex*skinWeight.w;transformed=(bindMatrixInverse*skinned).xyz;\n#endif",
    skinnormal_vertex:
      "#ifdef USE_SKINNING\nmat4 skinMatrix=mat4(0.0);skinMatrix+=skinWeight.x*boneMatX;skinMatrix+=skinWeight.y*boneMatY;skinMatrix+=skinWeight.z*boneMatZ;skinMatrix+=skinWeight.w*boneMatW;skinMatrix=bindMatrixInverse*skinMatrix*bindMatrix;objectNormal=vec4(skinMatrix*vec4(objectNormal,0.0)).xyz;\n#ifdef USE_TANGENT\nobjectTangent=vec4(skinMatrix*vec4(objectTangent,0.0)).xyz;\n#endif\n#endif",
    specularmap_fragment:
      "float specularStrength;\n#ifdef USE_SPECULARMAP\nvec4 texelSpecular=texture2D(specularMap,vUv);specularStrength=texelSpecular.r;\n#else\nspecularStrength=1.0;\n#endif",
    specularmap_pars_fragment:
      "#ifdef USE_SPECULARMAP\nuniform sampler2D specularMap;\n#endif",
    tonemapping_fragment:
      "#if defined(TONE_MAPPING)\ngl_FragColor.rgb=toneMapping(gl_FragColor.rgb);\n#endif",
    tonemapping_pars_fragment:
      "#ifndef saturate\n#define saturate(a)clamp(a,0.0,1.0)\n#endif\nuniform float toneMappingExposure;vec3 LinearToneMapping(vec3 color){return toneMappingExposure*color;}vec3 ReinhardToneMapping(vec3 color){color*=toneMappingExposure;return saturate(color/(vec3(1.0)+color));}vec3 OptimizedCineonToneMapping(vec3 color){color*=toneMappingExposure;color=max(vec3(0.0),color-0.004);return pow((color*(6.2*color+0.5))/(color*(6.2*color+1.7)+0.06),vec3(2.2));}vec3 RRTAndODTFit(vec3 v){vec3 a=v*(v+0.0245786)-0.000090537;vec3 b=v*(0.983729*v+0.4329510)+0.238081;return a/b;}vec3 ACESFilmicToneMapping(vec3 color){const mat3 ACESInputMat=mat3(vec3(0.59719,0.07600,0.02840),vec3(0.35458,0.90834,0.13383),vec3(0.04823,0.01566,0.83777));const mat3 ACESOutputMat=mat3(vec3(1.60475,-0.10208,-0.00327),vec3(-0.53108,1.10813,-0.07276),vec3(-0.07367,-0.00605,1.07602));color*=toneMappingExposure/0.6;color=ACESInputMat*color;color=RRTAndODTFit(color);color=ACESOutputMat*color;return saturate(color);}vec3 CustomToneMapping(vec3 color){return color;}",
    transmission_fragment:
      "#ifdef USE_TRANSMISSION\nmaterial.transmission=transmission;material.transmissionAlpha=1.0;material.thickness=thickness;material.attenuationDistance=attenuationDistance;material.attenuationColor=attenuationColor;\n#ifdef USE_TRANSMISSIONMAP\nmaterial.transmission*=texture2D(transmissionMap,vUv).r;\n#endif\n#ifdef USE_THICKNESSMAP\nmaterial.thickness*=texture2D(thicknessMap,vUv).g;\n#endif\nvec3 pos=vWorldPosition;vec3 v=normalize(cameraPosition-pos);vec3 n=inverseTransformDirection(normal,viewMatrix);vec4 transmission=getIBLVolumeRefraction(n,v,material.roughness,material.diffuseColor,material.specularColor,material.specularF90,pos,modelMatrix,viewMatrix,projectionMatrix,material.ior,material.thickness,material.attenuationColor,material.attenuationDistance);material.transmissionAlpha=mix(material.transmissionAlpha,transmission.a,material.transmission);totalDiffuse=mix(totalDiffuse,transmission.rgb,material.transmission);\n#endif",
    transmission_pars_fragment:
      "#ifdef USE_TRANSMISSION\nuniform float transmission;uniform float thickness;uniform float attenuationDistance;uniform vec3 attenuationColor;\n#ifdef USE_TRANSMISSIONMAP\nuniform sampler2D transmissionMap;\n#endif\n#ifdef USE_THICKNESSMAP\nuniform sampler2D thicknessMap;\n#endif\nuniform vec2 transmissionSamplerSize;uniform sampler2D transmissionSamplerMap;uniform mat4 modelMatrix;uniform mat4 projectionMatrix;varying vec3 vWorldPosition;vec3 getVolumeTransmissionRay(const in vec3 n,const in vec3 v,const in float thickness,const in float ior,const in mat4 modelMatrix){vec3 refractionVector=refract(-v,normalize(n),1.0/ior);vec3 modelScale;modelScale.x=length(vec3(modelMatrix[0].xyz));modelScale.y=length(vec3(modelMatrix[1].xyz));modelScale.z=length(vec3(modelMatrix[2].xyz));return normalize(refractionVector)*thickness*modelScale;}float applyIorToRoughness(const in float roughness,const in float ior){return roughness*clamp(ior*2.0-2.0,0.0,1.0);}vec4 getTransmissionSample(const in vec2 fragCoord,const in float roughness,const in float ior){float framebufferLod=log2(transmissionSamplerSize.x)*applyIorToRoughness(roughness,ior);\n#ifdef texture2DLodEXT\nreturn texture2DLodEXT(transmissionSamplerMap,fragCoord.xy,framebufferLod);\n#else\nreturn texture2D(transmissionSamplerMap,fragCoord.xy,framebufferLod);\n#endif\n}vec3 applyVolumeAttenuation(const in vec3 radiance,const in float transmissionDistance,const in vec3 attenuationColor,const in float attenuationDistance){if(isinf(attenuationDistance)){return radiance;}else{vec3 attenuationCoefficient=-log(attenuationColor)/attenuationDistance;vec3 transmittance=exp(-attenuationCoefficient*transmissionDistance);return transmittance*radiance;}}vec4 getIBLVolumeRefraction(const in vec3 n,const in vec3 v,const in float roughness,const in vec3 diffuseColor,const in vec3 specularColor,const in float specularF90,const in vec3 position,const in mat4 modelMatrix,const in mat4 viewMatrix,const in mat4 projMatrix,const in float ior,const in float thickness,const in vec3 attenuationColor,const in float attenuationDistance){vec3 transmissionRay=getVolumeTransmissionRay(n,v,thickness,ior,modelMatrix);vec3 refractedRayExit=position+transmissionRay;vec4 ndcPos=projMatrix*viewMatrix*vec4(refractedRayExit,1.0);vec2 refractionCoords=ndcPos.xy/ndcPos.w;refractionCoords+=1.0;refractionCoords/=2.0;vec4 transmittedLight=getTransmissionSample(refractionCoords,roughness,ior);vec3 attenuatedColor=applyVolumeAttenuation(transmittedLight.rgb,length(transmissionRay),attenuationColor,attenuationDistance);vec3 F=EnvironmentBRDF(n,v,specularColor,specularF90,roughness);return vec4((1.0-F)*attenuatedColor*diffuseColor,transmittedLight.a);}\n#endif",
    uv_pars_fragment:
      "#if (defined(USE_UV)&&!defined(UVS_VERTEX_ONLY))\nvarying vec2 vUv;\n#endif",
    uv_pars_vertex:
      "#ifdef USE_UV\n#ifdef UVS_VERTEX_ONLY\nvec2 vUv;\n#else\nvarying vec2 vUv;\n#endif\nuniform mat3 uvTransform;\n#endif",
    uv_vertex: "#ifdef USE_UV\nvUv=(uvTransform*vec3(uv,1)).xy;\n#endif",
    uv2_pars_fragment:
      "#if defined(USE_LIGHTMAP)||defined(USE_AOMAP)\nvarying vec2 vUv2;\n#endif",
    uv2_pars_vertex:
      "#if defined(USE_LIGHTMAP)||defined(USE_AOMAP)\nattribute vec2 uv2;varying vec2 vUv2;uniform mat3 uv2Transform;\n#endif",
    uv2_vertex:
      "#if defined(USE_LIGHTMAP)||defined(USE_AOMAP)\nvUv2=(uv2Transform*vec3(uv2,1)).xy;\n#endif",
    worldpos_vertex:
      "#if defined(USE_ENVMAP)||defined(DISTANCE)||defined(USE_SHADOWMAP)||defined(USE_TRANSMISSION)||NUM_SPOT_LIGHT_COORDS>0\nvec4 worldPosition=vec4(transformed,1.0);\n#ifdef USE_INSTANCING\nworldPosition=instanceMatrix*worldPosition;\n#endif\nworldPosition=modelMatrix*worldPosition;\n#endif",
    background_vert:
      "varying vec2 vUv;uniform mat3 uvTransform;void main(){vUv=(uvTransform*vec3(uv,1)).xy;gl_Position=vec4(position.xy,1.0,1.0);}",
    background_frag:
      "uniform sampler2D t2D;varying vec2 vUv;void main(){gl_FragColor=texture2D(t2D,vUv);\n#ifdef DECODE_VIDEO_TEXTURE\ngl_FragColor=vec4(mix(pow(gl_FragColor.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),gl_FragColor.rgb*0.0773993808,vec3(lessThanEqual(gl_FragColor.rgb,vec3(0.04045)))),gl_FragColor.w);\n#endif\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n}",
    backgroundCube_vert:
      "varying vec3 vWorldDirection;\n#include <common>\nvoid main(){vWorldDirection=transformDirection(position,modelMatrix);\n#include <begin_vertex>\n#include <project_vertex>\ngl_Position.z=gl_Position.w;}",
    backgroundCube_frag:
      "#ifdef ENVMAP_TYPE_CUBE\nuniform samplerCube envMap;\n#elif defined(ENVMAP_TYPE_CUBE_UV)\nuniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;uniform float backgroundBlurriness;varying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main(){\n#ifdef ENVMAP_TYPE_CUBE\nvec4 texColor=textureCube(envMap,vec3(flipEnvMap*vWorldDirection.x,vWorldDirection.yz));\n#elif defined(ENVMAP_TYPE_CUBE_UV)\nvec4 texColor=textureCubeUV(envMap,vWorldDirection,backgroundBlurriness);\n#else\nvec4 texColor=vec4(0.0,0.0,0.0,1.0);\n#endif\ngl_FragColor=texColor;\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n}",
    cube_vert:
      "varying vec3 vWorldDirection;\n#include <common>\nvoid main(){vWorldDirection=transformDirection(position,modelMatrix);\n#include <begin_vertex>\n#include <project_vertex>\ngl_Position.z=gl_Position.w;}",
    cube_frag:
      "uniform samplerCube tCube;uniform float tFlip;uniform float opacity;varying vec3 vWorldDirection;void main(){vec4 texColor=textureCube(tCube,vec3(tFlip*vWorldDirection.x,vWorldDirection.yz));gl_FragColor=texColor;gl_FragColor.a*=opacity;\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n}",
    depth_vert:
      "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;void main(){\n#include <uv_vertex>\n#include <skinbase_vertex>\n#ifdef USE_DISPLACEMENTMAP\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinnormal_vertex>\n#endif\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\nvHighPrecisionZW=gl_Position.zw;}",
    depth_frag:
      "#if DEPTH_PACKING==3200\nuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;void main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(1.0);\n#if DEPTH_PACKING==3200\ndiffuseColor.a=opacity;\n#endif\n#include <map_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <logdepthbuf_fragment>\nfloat fragCoordZ=0.5*vHighPrecisionZW[0]/vHighPrecisionZW[1]+0.5;\n#if DEPTH_PACKING==3200\ngl_FragColor=vec4(vec3(1.0-fragCoordZ),opacity);\n#elif DEPTH_PACKING==3201\ngl_FragColor=packDepthToRGBA(fragCoordZ);\n#endif\n}",
    distanceRGBA_vert:
      "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <skinbase_vertex>\n#ifdef USE_DISPLACEMENTMAP\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinnormal_vertex>\n#endif\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <worldpos_vertex>\n#include <clipping_planes_vertex>\nvWorldPosition=worldPosition.xyz;}",
    distanceRGBA_frag:
      "#define DISTANCE\nuniform vec3 referencePosition;uniform float nearDistance;uniform float farDistance;varying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(1.0);\n#include <map_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\nfloat dist=length(vWorldPosition-referencePosition);dist=(dist-nearDistance)/(farDistance-nearDistance);dist=saturate(dist);gl_FragColor=packDepthToRGBA(dist);}",
    equirect_vert:
      "varying vec3 vWorldDirection;\n#include <common>\nvoid main(){vWorldDirection=transformDirection(position,modelMatrix);\n#include <begin_vertex>\n#include <project_vertex>\n}",
    equirect_frag:
      "uniform sampler2D tEquirect;varying vec3 vWorldDirection;\n#include <common>\nvoid main(){vec3 direction=normalize(vWorldDirection);vec2 sampleUV=equirectUv(direction);gl_FragColor=texture2D(tEquirect,sampleUV);\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n}",
    linedashed_vert:
      "uniform float scale;attribute float lineDistance;varying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){vLineDistance=scale*lineDistance;\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <fog_vertex>\n}",
    linedashed_frag:
      "uniform vec3 diffuse;uniform float opacity;uniform float dashSize;uniform float totalSize;varying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nif(mod(vLineDistance,totalSize)>dashSize){discard;}vec3 outgoingLight=vec3(0.0);vec4 diffuseColor=vec4(diffuse,opacity);\n#include <logdepthbuf_fragment>\n#include <color_fragment>\noutgoingLight=diffuseColor.rgb;\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n}",
    meshbasic_vert:
      "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <morphcolor_vertex>\n#if defined(USE_ENVMAP)||defined(USE_SKINNING)\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#endif\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <worldpos_vertex>\n#include <envmap_vertex>\n#include <fog_vertex>\n}",
    meshbasic_frag:
      "uniform vec3 diffuse;uniform float opacity;\n#ifndef FLAT_SHADED\nvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <specularmap_fragment>\nReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));\n#ifdef USE_LIGHTMAP\nvec4 lightMapTexel=texture2D(lightMap,vUv2);reflectedLight.indirectDiffuse+=lightMapTexel.rgb*lightMapIntensity*RECIPROCAL_PI;\n#else\nreflectedLight.indirectDiffuse+=vec3(1.0);\n#endif\n#include <aomap_fragment>\nreflectedLight.indirectDiffuse*=diffuseColor.rgb;vec3 outgoingLight=reflectedLight.indirectDiffuse;\n#include <envmap_fragment>\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}",
    meshlambert_vert:
      "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <normal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\nvViewPosition=-mvPosition.xyz;\n#include <worldpos_vertex>\n#include <envmap_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n}",
    meshlambert_frag:
      "#define LAMBERT\nuniform vec3 diffuse;uniform vec3 emissive;uniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <specularmap_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\n#include <emissivemap_fragment>\n#include <lights_lambert_fragment>\n#include <lights_fragment_begin>\n#include <lights_fragment_maps>\n#include <lights_fragment_end>\n#include <aomap_fragment>\nvec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+totalEmissiveRadiance;\n#include <envmap_fragment>\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}",
    meshmatcap_vert:
      "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <normal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <fog_vertex>\nvViewPosition=-mvPosition.xyz;}",
    meshmatcap_frag:
      "#define MATCAP\nuniform vec3 diffuse;uniform float opacity;uniform sampler2D matcap;varying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\nvec3 viewDir=normalize(vViewPosition);vec3 x=normalize(vec3(viewDir.z,0.0,-viewDir.x));vec3 y=cross(viewDir,x);vec2 uv=vec2(dot(x,normal),dot(y,normal))*0.495+0.5;\n#ifdef USE_MATCAP\nvec4 matcapColor=texture2D(matcap,uv);\n#else\nvec4 matcapColor=vec4(vec3(mix(0.2,0.8,uv.y)),1.0);\n#endif\nvec3 outgoingLight=diffuseColor.rgb*matcapColor.rgb;\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}",
    meshnormal_vert:
      "#define NORMAL\n#if defined(FLAT_SHADED)||defined(USE_BUMPMAP)||defined(TANGENTSPACE_NORMALMAP)\nvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <normal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#if defined(FLAT_SHADED)||defined(USE_BUMPMAP)||defined(TANGENTSPACE_NORMALMAP)\nvViewPosition=-mvPosition.xyz;\n#endif\n}",
    meshnormal_frag:
      "#define NORMAL\nuniform float opacity;\n#if defined(FLAT_SHADED)||defined(USE_BUMPMAP)||defined(TANGENTSPACE_NORMALMAP)\nvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\n#include <logdepthbuf_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\ngl_FragColor=vec4(packNormalToRGB(normal),opacity);\n#ifdef OPAQUE\ngl_FragColor.a=1.0;\n#endif\n}",
    meshphong_vert:
      "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <normal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\nvViewPosition=-mvPosition.xyz;\n#include <worldpos_vertex>\n#include <envmap_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n}",
    meshphong_frag:
      "#define PHONG\nuniform vec3 diffuse;uniform vec3 emissive;uniform vec3 specular;uniform float shininess;uniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <specularmap_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\n#include <emissivemap_fragment>\n#include <lights_phong_fragment>\n#include <lights_fragment_begin>\n#include <lights_fragment_maps>\n#include <lights_fragment_end>\n#include <aomap_fragment>\nvec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+reflectedLight.directSpecular+reflectedLight.indirectSpecular+totalEmissiveRadiance;\n#include <envmap_fragment>\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}",
    meshphysical_vert:
      "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\nvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <normal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\nvViewPosition=-mvPosition.xyz;\n#include <worldpos_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n#ifdef USE_TRANSMISSION\nvWorldPosition=worldPosition.xyz;\n#endif\n}",
    meshphysical_frag:
      "#define STANDARD\n#ifdef PHYSICAL\n#define IOR\n#define SPECULAR\n#endif\nuniform vec3 diffuse;uniform vec3 emissive;uniform float roughness;uniform float metalness;uniform float opacity;\n#ifdef IOR\nuniform float ior;\n#endif\n#ifdef SPECULAR\nuniform float specularIntensity;uniform vec3 specularColor;\n#ifdef USE_SPECULARINTENSITYMAP\nuniform sampler2D specularIntensityMap;\n#endif\n#ifdef USE_SPECULARCOLORMAP\nuniform sampler2D specularColorMap;\n#endif\n#endif\n#ifdef USE_CLEARCOAT\nuniform float clearcoat;uniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\nuniform float iridescence;uniform float iridescenceIOR;uniform float iridescenceThicknessMinimum;uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\nuniform vec3 sheenColor;uniform float sheenRoughness;\n#ifdef USE_SHEENCOLORMAP\nuniform sampler2D sheenColorMap;\n#endif\n#ifdef USE_SHEENROUGHNESSMAP\nuniform sampler2D sheenRoughnessMap;\n#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <roughnessmap_fragment>\n#include <metalnessmap_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\n#include <clearcoat_normal_fragment_begin>\n#include <clearcoat_normal_fragment_maps>\n#include <emissivemap_fragment>\n#include <lights_physical_fragment>\n#include <lights_fragment_begin>\n#include <lights_fragment_maps>\n#include <lights_fragment_end>\n#include <aomap_fragment>\nvec3 totalDiffuse=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse;vec3 totalSpecular=reflectedLight.directSpecular+reflectedLight.indirectSpecular;\n#include <transmission_fragment>\nvec3 outgoingLight=totalDiffuse+totalSpecular+totalEmissiveRadiance;\n#ifdef USE_SHEEN\nfloat sheenEnergyComp=1.0-0.157*max3(material.sheenColor);outgoingLight=outgoingLight*sheenEnergyComp+sheenSpecular;\n#endif\n#ifdef USE_CLEARCOAT\nfloat dotNVcc=saturate(dot(geometry.clearcoatNormal,geometry.viewDir));vec3 Fcc=F_Schlick(material.clearcoatF0,material.clearcoatF90,dotNVcc);outgoingLight=outgoingLight*(1.0-material.clearcoat*Fcc)+clearcoatSpecular*material.clearcoat;\n#endif\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}",
    meshtoon_vert:
      "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <normal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\nvViewPosition=-mvPosition.xyz;\n#include <worldpos_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n}",
    meshtoon_frag:
      "#define TOON\nuniform vec3 diffuse;uniform vec3 emissive;uniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\n#include <emissivemap_fragment>\n#include <lights_toon_fragment>\n#include <lights_fragment_begin>\n#include <lights_fragment_maps>\n#include <lights_fragment_end>\n#include <aomap_fragment>\nvec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+totalEmissiveRadiance;\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}",
    points_vert:
      "uniform float size;uniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <project_vertex>\ngl_PointSize=size;\n#ifdef USE_SIZEATTENUATION\nbool isPerspective=isPerspectiveMatrix(projectionMatrix);if(isPerspective)gl_PointSize*=(scale/-mvPosition.z);\n#endif\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <worldpos_vertex>\n#include <fog_vertex>\n}",
    points_frag:
      "uniform vec3 diffuse;uniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec3 outgoingLight=vec3(0.0);vec4 diffuseColor=vec4(diffuse,opacity);\n#include <logdepthbuf_fragment>\n#include <map_particle_fragment>\n#include <color_fragment>\n#include <alphatest_fragment>\noutgoingLight=diffuseColor.rgb;\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n}",
    shadow_vert:
      "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main(){\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <project_vertex>\n#include <worldpos_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n}",
    shadow_frag:
      "uniform vec3 color;uniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main(){gl_FragColor=vec4(color,opacity*(1.0-getShadowMask()));\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n}",
    sprite_vert:
      "uniform float rotation;uniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\nvec4 mvPosition=modelViewMatrix*vec4(0.0,0.0,0.0,1.0);vec2 scale;scale.x=length(vec3(modelMatrix[0].x,modelMatrix[0].y,modelMatrix[0].z));scale.y=length(vec3(modelMatrix[1].x,modelMatrix[1].y,modelMatrix[1].z));\n#ifndef USE_SIZEATTENUATION\nbool isPerspective=isPerspectiveMatrix(projectionMatrix);if(isPerspective)scale*=-mvPosition.z;\n#endif\nvec2 alignedPosition=(position.xy-(center-vec2(0.5)))*scale;vec2 rotatedPosition;rotatedPosition.x=cos(rotation)*alignedPosition.x-sin(rotation)*alignedPosition.y;rotatedPosition.y=sin(rotation)*alignedPosition.x+cos(rotation)*alignedPosition.y;mvPosition.xy+=rotatedPosition;gl_Position=projectionMatrix*mvPosition;\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <fog_vertex>\n}",
    sprite_frag:
      "uniform vec3 diffuse;uniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec3 outgoingLight=vec3(0.0);vec4 diffuseColor=vec4(diffuse,opacity);\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\noutgoingLight=diffuseColor.rgb;\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n}",
  },
  is = {
    common: {
      diffuse: { value: new Ei(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      uvTransform: { value: new pi() },
      uv2Transform: { value: new pi() },
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
      normalScale: { value: new di(1, 1) },
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
      fogColor: { value: new Ei(16777215) },
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
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
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
      diffuse: { value: new Ei(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new pi() },
    },
    sprite: {
      diffuse: { value: new Ei(16777215) },
      opacity: { value: 1 },
      center: { value: new di(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new pi() },
    },
  },
  ns = {
    basic: {
      uniforms: zr([
        is.common,
        is.specularmap,
        is.envmap,
        is.aomap,
        is.lightmap,
        is.fog,
      ]),
      vertexShader: ts.meshbasic_vert,
      fragmentShader: ts.meshbasic_frag,
    },
    lambert: {
      uniforms: zr([
        is.common,
        is.specularmap,
        is.envmap,
        is.aomap,
        is.lightmap,
        is.emissivemap,
        is.bumpmap,
        is.normalmap,
        is.displacementmap,
        is.fog,
        is.lights,
        { emissive: { value: new Ei(0) } },
      ]),
      vertexShader: ts.meshlambert_vert,
      fragmentShader: ts.meshlambert_frag,
    },
    phong: {
      uniforms: zr([
        is.common,
        is.specularmap,
        is.envmap,
        is.aomap,
        is.lightmap,
        is.emissivemap,
        is.bumpmap,
        is.normalmap,
        is.displacementmap,
        is.fog,
        is.lights,
        {
          emissive: { value: new Ei(0) },
          specular: { value: new Ei(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: ts.meshphong_vert,
      fragmentShader: ts.meshphong_frag,
    },
    standard: {
      uniforms: zr([
        is.common,
        is.envmap,
        is.aomap,
        is.lightmap,
        is.emissivemap,
        is.bumpmap,
        is.normalmap,
        is.displacementmap,
        is.roughnessmap,
        is.metalnessmap,
        is.fog,
        is.lights,
        {
          emissive: { value: new Ei(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: ts.meshphysical_vert,
      fragmentShader: ts.meshphysical_frag,
    },
    toon: {
      uniforms: zr([
        is.common,
        is.aomap,
        is.lightmap,
        is.emissivemap,
        is.bumpmap,
        is.normalmap,
        is.displacementmap,
        is.gradientmap,
        is.fog,
        is.lights,
        { emissive: { value: new Ei(0) } },
      ]),
      vertexShader: ts.meshtoon_vert,
      fragmentShader: ts.meshtoon_frag,
    },
    matcap: {
      uniforms: zr([
        is.common,
        is.bumpmap,
        is.normalmap,
        is.displacementmap,
        is.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: ts.meshmatcap_vert,
      fragmentShader: ts.meshmatcap_frag,
    },
    points: {
      uniforms: zr([is.points, is.fog]),
      vertexShader: ts.points_vert,
      fragmentShader: ts.points_frag,
    },
    dashed: {
      uniforms: zr([
        is.common,
        is.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: ts.linedashed_vert,
      fragmentShader: ts.linedashed_frag,
    },
    depth: {
      uniforms: zr([is.common, is.displacementmap]),
      vertexShader: ts.depth_vert,
      fragmentShader: ts.depth_frag,
    },
    normal: {
      uniforms: zr([
        is.common,
        is.bumpmap,
        is.normalmap,
        is.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: ts.meshnormal_vert,
      fragmentShader: ts.meshnormal_frag,
    },
    sprite: {
      uniforms: zr([is.sprite, is.fog]),
      vertexShader: ts.sprite_vert,
      fragmentShader: ts.sprite_frag,
    },
    background: {
      uniforms: { uvTransform: { value: new pi() }, t2D: { value: null } },
      vertexShader: ts.background_vert,
      fragmentShader: ts.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
      },
      vertexShader: ts.backgroundCube_vert,
      fragmentShader: ts.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: ts.cube_vert,
      fragmentShader: ts.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: ts.equirect_vert,
      fragmentShader: ts.equirect_frag,
    },
    distanceRGBA: {
      uniforms: zr([
        is.common,
        is.displacementmap,
        {
          referencePosition: { value: new Fi() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: ts.distanceRGBA_vert,
      fragmentShader: ts.distanceRGBA_frag,
    },
    shadow: {
      uniforms: zr([
        is.lights,
        is.fog,
        { color: { value: new Ei(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: ts.shadow_vert,
      fragmentShader: ts.shadow_frag,
    },
  };
function rs(e, t, i, n, r, s, a) {
  const o = new Ei(0);
  let l,
    c,
    h = !0 === s ? 0 : 1,
    u = null,
    d = 0,
    p = null;
  function m(e, t) {
    n.buffers.color.setClear(e.r, e.g, e.b, t, a);
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (e, t = 1) {
      o.set(e), (h = t), m(o, h);
    },
    getClearAlpha: function () {
      return h;
    },
    setClearAlpha: function (e) {
      (h = e), m(o, h);
    },
    render: function (n, s) {
      let a = !1,
        f = !0 === s.isScene ? s.background : null;
      if (f && f.isTexture) {
        f = (s.backgroundBlurriness > 0 ? i : t).get(f);
      }
      const g = e.xr,
        v = g.getSession && g.getSession();
      v && "additive" === v.environmentBlendMode && (f = null),
        null === f ? m(o, h) : f && f.isColor && (m(f, 1), (a = !0)),
        (e.autoClear || a) &&
          e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
        f && (f.isCubeTexture || f.mapping === Ne)
          ? (void 0 === c &&
              ((c = new Dr(
                new Or(1, 1, 1),
                new Fr({
                  name: "BackgroundCubeMaterial",
                  uniforms: Nr(ns.backgroundCube.uniforms),
                  vertexShader: ns.backgroundCube.vertexShader,
                  fragmentShader: ns.backgroundCube.fragmentShader,
                  side: W,
                  depthTest: !1,
                  depthWrite: !1,
                  fog: !1,
                })
              )),
              c.geometry.deleteAttribute("normal"),
              c.geometry.deleteAttribute("uv"),
              (c.onBeforeRender = function (e, t, i) {
                this.matrixWorld.copyPosition(i.matrixWorld);
              }),
              Object.defineProperty(c.material, "envMap", {
                get: function () {
                  return this.uniforms.envMap.value;
                },
              }),
              r.update(c)),
            (c.material.uniforms.envMap.value = f),
            (c.material.uniforms.flipEnvMap.value =
              f.isCubeTexture && !1 === f.isRenderTargetTexture ? -1 : 1),
            (c.material.uniforms.backgroundBlurriness.value =
              s.backgroundBlurriness),
            (u === f && d === f.version && p === e.toneMapping) ||
              ((c.material.needsUpdate = !0),
              (u = f),
              (d = f.version),
              (p = e.toneMapping)),
            c.layers.enableAll(),
            n.unshift(c, c.geometry, c.material, 0, 0, null))
          : f &&
            f.isTexture &&
            (void 0 === l &&
              ((l = new Dr(
                new es(2, 2),
                new Fr({
                  name: "BackgroundMaterial",
                  uniforms: Nr(ns.background.uniforms),
                  vertexShader: ns.background.vertexShader,
                  fragmentShader: ns.background.fragmentShader,
                  side: G,
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
              r.update(l)),
            (l.material.uniforms.t2D.value = f),
            !0 === f.matrixAutoUpdate && f.updateMatrix(),
            l.material.uniforms.uvTransform.value.copy(f.matrix),
            (u === f && d === f.version && p === e.toneMapping) ||
              ((l.material.needsUpdate = !0),
              (u = f),
              (d = f.version),
              (p = e.toneMapping)),
            l.layers.enableAll(),
            n.unshift(l, l.geometry, l.material, 0, 0, null));
    },
  };
}
function ss(e, t, i, n) {
  const r = e.getParameter(34921),
    s = n.isWebGL2 ? null : t.get("OES_vertex_array_object"),
    a = n.isWebGL2 || null !== s,
    o = {},
    l = p(null);
  let c = l,
    h = !1;
  function u(t) {
    return n.isWebGL2 ? e.bindVertexArray(t) : s.bindVertexArrayOES(t);
  }
  function d(t) {
    return n.isWebGL2 ? e.deleteVertexArray(t) : s.deleteVertexArrayOES(t);
  }
  function p(e) {
    const t = [],
      i = [],
      n = [];
    for (let s = 0; s < r; s++) (t[s] = 0), (i[s] = 0), (n[s] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: t,
      enabledAttributes: i,
      attributeDivisors: n,
      object: e,
      attributes: {},
      index: null,
    };
  }
  function m() {
    const e = c.newAttributes;
    for (let t = 0, i = e.length; t < i; t++) e[t] = 0;
  }
  function f(e) {
    g(e, 0);
  }
  function g(i, r) {
    const s = c.newAttributes,
      a = c.enabledAttributes,
      o = c.attributeDivisors;
    if (
      ((s[i] = 1),
      0 === a[i] && (e.enableVertexAttribArray(i), (a[i] = 1)),
      o[i] !== r)
    ) {
      (n.isWebGL2 ? e : t.get("ANGLE_instanced_arrays"))[
        n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
      ](i, r),
        (o[i] = r);
    }
  }
  function v() {
    const t = c.newAttributes,
      i = c.enabledAttributes;
    for (let n = 0, r = i.length; n < r; n++)
      i[n] !== t[n] && (e.disableVertexAttribArray(n), (i[n] = 0));
  }
  function _(t, i, r, s, a, o) {
    !0 !== n.isWebGL2 || (5124 !== r && 5125 !== r)
      ? e.vertexAttribPointer(t, i, r, s, a, o)
      : e.vertexAttribIPointer(t, i, r, a, o);
  }
  function x() {
    y(), (h = !0), c !== l && ((c = l), u(c.object));
  }
  function y() {
    (l.geometry = null), (l.program = null), (l.wireframe = !1);
  }
  return {
    setup: function (r, l, d, x, y) {
      let b = !1;
      if (a) {
        const t = (function (t, i, r) {
          const a = !0 === r.wireframe;
          let l = o[t.id];
          void 0 === l && ((l = {}), (o[t.id] = l));
          let c = l[i.id];
          void 0 === c && ((c = {}), (l[i.id] = c));
          let h = c[a];
          void 0 === h &&
            ((h = p(
              n.isWebGL2 ? e.createVertexArray() : s.createVertexArrayOES()
            )),
            (c[a] = h));
          return h;
        })(x, d, l);
        c !== t && ((c = t), u(c.object)),
          (b = (function (e, t, i, n) {
            const r = c.attributes,
              s = t.attributes;
            let a = 0;
            const o = i.getAttributes();
            for (const l in o) {
              if (o[l].location >= 0) {
                const t = r[l];
                let i = s[l];
                if (
                  (void 0 === i &&
                    ("instanceMatrix" === l &&
                      e.instanceMatrix &&
                      (i = e.instanceMatrix),
                    "instanceColor" === l &&
                      e.instanceColor &&
                      (i = e.instanceColor)),
                  void 0 === t)
                )
                  return !0;
                if (t.attribute !== i) return !0;
                if (i && t.data !== i.data) return !0;
                a++;
              }
            }
            return c.attributesNum !== a || c.index !== n;
          })(r, x, d, y)),
          b &&
            (function (e, t, i, n) {
              const r = {},
                s = t.attributes;
              let a = 0;
              const o = i.getAttributes();
              for (const l in o) {
                if (o[l].location >= 0) {
                  let t = s[l];
                  void 0 === t &&
                    ("instanceMatrix" === l &&
                      e.instanceMatrix &&
                      (t = e.instanceMatrix),
                    "instanceColor" === l &&
                      e.instanceColor &&
                      (t = e.instanceColor));
                  const i = {};
                  (i.attribute = t),
                    t && t.data && (i.data = t.data),
                    (r[l] = i),
                    a++;
                }
              }
              (c.attributes = r), (c.attributesNum = a), (c.index = n);
            })(r, x, d, y);
      } else {
        const e = !0 === l.wireframe;
        (c.geometry === x.id && c.program === d.id && c.wireframe === e) ||
          ((c.geometry = x.id),
          (c.program = d.id),
          (c.wireframe = e),
          (b = !0));
      }
      null !== y && i.update(y, 34963),
        (b || h) &&
          ((h = !1),
          (function (r, s, a, o) {
            if (
              !1 === n.isWebGL2 &&
              (r.isInstancedMesh || o.isInstancedBufferGeometry) &&
              null === t.get("ANGLE_instanced_arrays")
            )
              return;
            m();
            const l = o.attributes,
              c = a.getAttributes(),
              h = s.defaultAttributeValues;
            for (const t in c) {
              const n = c[t];
              if (n.location >= 0) {
                let s = l[t];
                if (
                  (void 0 === s &&
                    ("instanceMatrix" === t &&
                      r.instanceMatrix &&
                      (s = r.instanceMatrix),
                    "instanceColor" === t &&
                      r.instanceColor &&
                      (s = r.instanceColor)),
                  void 0 !== s)
                ) {
                  const t = s.normalized,
                    a = s.itemSize,
                    l = i.get(s);
                  if (void 0 === l) continue;
                  const c = l.buffer,
                    h = l.type,
                    u = l.bytesPerElement;
                  if (s.isInterleavedBufferAttribute) {
                    const i = s.data,
                      l = i.stride,
                      d = s.offset;
                    if (i.isInstancedInterleavedBuffer) {
                      for (let e = 0; e < n.locationSize; e++)
                        g(n.location + e, i.meshPerAttribute);
                      !0 !== r.isInstancedMesh &&
                        void 0 === o._maxInstanceCount &&
                        (o._maxInstanceCount = i.meshPerAttribute * i.count);
                    } else
                      for (let e = 0; e < n.locationSize; e++)
                        f(n.location + e);
                    e.bindBuffer(34962, c);
                    for (let e = 0; e < n.locationSize; e++)
                      _(
                        n.location + e,
                        a / n.locationSize,
                        h,
                        t,
                        l * u,
                        (d + (a / n.locationSize) * e) * u
                      );
                  } else {
                    if (s.isInstancedBufferAttribute) {
                      for (let e = 0; e < n.locationSize; e++)
                        g(n.location + e, s.meshPerAttribute);
                      !0 !== r.isInstancedMesh &&
                        void 0 === o._maxInstanceCount &&
                        (o._maxInstanceCount = s.meshPerAttribute * s.count);
                    } else
                      for (let e = 0; e < n.locationSize; e++)
                        f(n.location + e);
                    e.bindBuffer(34962, c);
                    for (let e = 0; e < n.locationSize; e++)
                      _(
                        n.location + e,
                        a / n.locationSize,
                        h,
                        t,
                        a * u,
                        (a / n.locationSize) * e * u
                      );
                  }
                } else if (void 0 !== h) {
                  const i = h[t];
                  if (void 0 !== i)
                    switch (i.length) {
                      case 2:
                        e.vertexAttrib2fv(n.location, i);
                        break;
                      case 3:
                        e.vertexAttrib3fv(n.location, i);
                        break;
                      case 4:
                        e.vertexAttrib4fv(n.location, i);
                        break;
                      default:
                        e.vertexAttrib1fv(n.location, i);
                    }
                }
              }
            }
            v();
          })(r, l, d, x),
          null !== y && e.bindBuffer(34963, i.get(y).buffer));
    },
    reset: x,
    resetDefaultState: y,
    dispose: function () {
      x();
      for (const e in o) {
        const t = o[e];
        for (const e in t) {
          const i = t[e];
          for (const e in i) d(i[e].object), delete i[e];
          delete t[e];
        }
        delete o[e];
      }
    },
    releaseStatesOfGeometry: function (e) {
      if (void 0 === o[e.id]) return;
      const t = o[e.id];
      for (const i in t) {
        const e = t[i];
        for (const t in e) d(e[t].object), delete e[t];
        delete t[i];
      }
      delete o[e.id];
    },
    releaseStatesOfProgram: function (e) {
      for (const t in o) {
        const i = o[t];
        if (void 0 === i[e.id]) continue;
        const n = i[e.id];
        for (const e in n) d(n[e].object), delete n[e];
        delete i[e.id];
      }
    },
    initAttributes: m,
    enableAttribute: f,
    disableUnusedAttributes: v,
  };
}
function as(e, t, i, n) {
  const r = n.isWebGL2;
  let s;
  (this.setMode = function (e) {
    s = e;
  }),
    (this.render = function (t, n) {
      e.drawArrays(s, t, n), i.update(n, s, 1);
    }),
    (this.renderInstances = function (n, a, o) {
      if (0 === o) return;
      let l, c;
      if (r) (l = e), (c = "drawArraysInstanced");
      else if (
        ((l = t.get("ANGLE_instanced_arrays")),
        (c = "drawArraysInstancedANGLE"),
        null === l)
      )
        return void console.error(
          "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
        );
      l[c](s, n, a, o), i.update(a, s, o);
    });
}
function os(e, t, i) {
  let n;
  function r(t) {
    if ("highp" === t) {
      if (
        e.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
        e.getShaderPrecisionFormat(35632, 36338).precision > 0
      )
        return "highp";
      t = "mediump";
    }
    return "mediump" === t &&
      e.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
      e.getShaderPrecisionFormat(35632, 36337).precision > 0
      ? "mediump"
      : "lowp";
  }
  const s =
    ("undefined" != typeof WebGL2RenderingContext &&
      e instanceof WebGL2RenderingContext) ||
    ("undefined" != typeof WebGL2ComputeRenderingContext &&
      e instanceof WebGL2ComputeRenderingContext);
  let a = void 0 !== i.precision ? i.precision : "highp";
  const o = r(a);
  o !== a &&
    (console.warn(
      "THREE.WebGLRenderer:",
      a,
      "not supported, using",
      o,
      "instead."
    ),
    (a = o));
  const l = s || t.has("WEBGL_draw_buffers"),
    c = !0 === i.logarithmicDepthBuffer,
    h = e.getParameter(34930),
    u = e.getParameter(35660),
    d = e.getParameter(3379),
    p = e.getParameter(34076),
    m = e.getParameter(34921),
    f = e.getParameter(36347),
    g = e.getParameter(36348),
    v = e.getParameter(36349),
    _ = u > 0,
    x = s || t.has("OES_texture_float");
  return {
    isWebGL2: s,
    drawBuffers: l,
    getMaxAnisotropy: function () {
      if (void 0 !== n) return n;
      if (!0 === t.has("EXT_texture_filter_anisotropic")) {
        const i = t.get("EXT_texture_filter_anisotropic");
        n = e.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      } else n = 0;
      return n;
    },
    getMaxPrecision: r,
    precision: a,
    logarithmicDepthBuffer: c,
    maxTextures: h,
    maxVertexTextures: u,
    maxTextureSize: d,
    maxCubemapSize: p,
    maxAttributes: m,
    maxVertexUniforms: f,
    maxVaryings: g,
    maxFragmentUniforms: v,
    vertexTextures: _,
    floatFragmentTextures: x,
    floatVertexTextures: _ && x,
    maxSamples: s ? e.getParameter(36183) : 0,
  };
}
function ls(e) {
  const t = this;
  let i = null,
    n = 0,
    r = !1,
    s = !1;
  const a = new Yr(),
    o = new pi(),
    l = { value: null, needsUpdate: !1 };
  function c() {
    l.value !== i && ((l.value = i), (l.needsUpdate = n > 0)),
      (t.numPlanes = n),
      (t.numIntersection = 0);
  }
  function h(e, i, n, r) {
    const s = null !== e ? e.length : 0;
    let c = null;
    if (0 !== s) {
      if (((c = l.value), !0 !== r || null === c)) {
        const t = n + 4 * s,
          r = i.matrixWorldInverse;
        o.getNormalMatrix(r),
          (null === c || c.length < t) && (c = new Float32Array(t));
        for (let i = 0, l = n; i !== s; ++i, l += 4)
          a.copy(e[i]).applyMatrix4(r, o),
            a.normal.toArray(c, l),
            (c[l + 3] = a.constant);
      }
      (l.value = c), (l.needsUpdate = !0);
    }
    return (t.numPlanes = s), (t.numIntersection = 0), c;
  }
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (e, t, s) {
      const a = 0 !== e.length || t || 0 !== n || r;
      return (r = t), (i = h(e, s, 0)), (n = e.length), a;
    }),
    (this.beginShadows = function () {
      (s = !0), h(null);
    }),
    (this.endShadows = function () {
      (s = !1), c();
    }),
    (this.setState = function (t, a, o) {
      const u = t.clippingPlanes,
        d = t.clipIntersection,
        p = t.clipShadows,
        m = e.get(t);
      if (!r || null === u || 0 === u.length || (s && !p)) s ? h(null) : c();
      else {
        const e = s ? 0 : n,
          t = 4 * e;
        let r = m.clippingState || null;
        (l.value = r), (r = h(u, a, t, o));
        for (let n = 0; n !== t; ++n) r[n] = i[n];
        (m.clippingState = r),
          (this.numIntersection = d ? this.numPlanes : 0),
          (this.numPlanes += e);
      }
    });
}
function cs(e) {
  let t = new WeakMap();
  function i(e, t) {
    return t === Ie ? (e.mapping = Re) : t === Oe && (e.mapping = De), e;
  }
  function n(e) {
    const i = e.target;
    i.removeEventListener("dispose", n);
    const r = t.get(i);
    void 0 !== r && (t.delete(i), r.dispose());
  }
  return {
    get: function (r) {
      if (r && r.isTexture && !1 === r.isRenderTargetTexture) {
        const s = r.mapping;
        if (s === Ie || s === Oe) {
          if (t.has(r)) {
            return i(t.get(r).texture, r.mapping);
          }
          {
            const s = r.image;
            if (s && s.height > 0) {
              const a = new Wr(s.height / 2);
              return (
                a.fromEquirectangularTexture(e, r),
                t.set(r, a),
                r.addEventListener("dispose", n),
                i(a.texture, r.mapping)
              );
            }
            return null;
          }
        }
      }
      return r;
    },
    dispose: function () {
      t = new WeakMap();
    },
  };
}
ns.physical = {
  uniforms: zr([
    ns.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: new di(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: new Ei(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: new di() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new Ei(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: new Ei(1, 1, 1) },
      specularColorMap: { value: null },
    },
  ]),
  vertexShader: ts.meshphysical_vert,
  fragmentShader: ts.meshphysical_frag,
};
class hs extends kr {
  constructor(e = -1, t = 1, i = 1, n = -1, r = 0.1, s = 2e3) {
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
      (this.far = s),
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
      (this.view = null === e.view ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, i, n, r, s) {
    null === this.view &&
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
      (this.view.height = s),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    null !== this.view && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      i = (this.right + this.left) / 2,
      n = (this.top + this.bottom) / 2;
    let r = i - e,
      s = i + e,
      a = n + t,
      o = n - t;
    if (null !== this.view && this.view.enabled) {
      const e = (this.right - this.left) / this.view.fullWidth / this.zoom,
        t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (r += e * this.view.offsetX),
        (s = r + e * this.view.width),
        (a -= t * this.view.offsetY),
        (o = a - t * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far),
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
      null !== this.view && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const us = 4,
  ds = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  ps = 20,
  ms = new hs(),
  fs = new Ei();
let gs = null;
const vs = (1 + Math.sqrt(5)) / 2,
  _s = 1 / vs,
  xs = [
    new Fi(1, 1, 1),
    new Fi(-1, 1, 1),
    new Fi(1, 1, -1),
    new Fi(-1, 1, -1),
    new Fi(0, vs, _s),
    new Fi(0, vs, -_s),
    new Fi(_s, 0, vs),
    new Fi(-_s, 0, vs),
    new Fi(vs, _s, 0),
    new Fi(-vs, _s, 0),
  ];
class ys {
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
    (gs = this._renderer.getRenderTarget()), this._setSize(256);
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
    null === this._cubemapMaterial &&
      ((this._cubemapMaterial = Ss()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    null === this._equirectMaterial &&
      ((this._equirectMaterial = ws()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      null !== this._cubemapMaterial && this._cubemapMaterial.dispose(),
      null !== this._equirectMaterial && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    null !== this._blurMaterial && this._blurMaterial.dispose(),
      null !== this._pingPongRenderTarget &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(gs),
      (e.scissorTest = !1),
      Ms(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Re || e.mapping === De
      ? this._setSize(
          0 === e.image.length ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (gs = this._renderer.getRenderTarget());
    const i = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, i), this._applyPMREM(i), this._cleanup(i), i
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      i = {
        magFilter: He,
        minFilter: He,
        generateMipmaps: !1,
        type: Qe,
        format: rt,
        encoding: Wt,
        depthBuffer: !1,
      },
      n = bs(e, t, i);
    if (
      null === this._pingPongRenderTarget ||
      this._pingPongRenderTarget.width !== e
    ) {
      null !== this._pingPongRenderTarget && this._dispose(),
        (this._pingPongRenderTarget = bs(e, t, i));
      const { _lodMax: n } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = (function (e) {
        const t = [],
          i = [],
          n = [];
        let r = e;
        const s = e - us + 1 + ds.length;
        for (let a = 0; a < s; a++) {
          const s = Math.pow(2, r);
          i.push(s);
          let o = 1 / s;
          a > e - us ? (o = ds[a - e + us - 1]) : 0 === a && (o = 0), n.push(o);
          const l = 1 / (s - 2),
            c = -l,
            h = 1 + l,
            u = [c, c, h, c, h, h, c, c, h, h, c, h],
            d = 6,
            p = 6,
            m = 3,
            f = 2,
            g = 1,
            v = new Float32Array(m * p * d),
            _ = new Float32Array(f * p * d),
            x = new Float32Array(g * p * d);
          for (let e = 0; e < d; e++) {
            const t = ((e % 3) * 2) / 3 - 1,
              i = e > 2 ? 0 : -1,
              n = [
                t,
                i,
                0,
                t + 2 / 3,
                i,
                0,
                t + 2 / 3,
                i + 1,
                0,
                t,
                i,
                0,
                t + 2 / 3,
                i + 1,
                0,
                t,
                i + 1,
                0,
              ];
            v.set(n, m * p * e), _.set(u, f * p * e);
            const r = [e, e, e, e, e, e];
            x.set(r, g * p * e);
          }
          const y = new mr();
          y.setAttribute("position", new nr(v, m)),
            y.setAttribute("uv", new nr(_, f)),
            y.setAttribute("faceIndex", new nr(x, g)),
            t.push(y),
            r > us && r--;
        }
        return { lodPlanes: t, sizeLods: i, sigmas: n };
      })(n)),
        (this._blurMaterial = (function (e, t, i) {
          const n = new Float32Array(ps),
            r = new Fi(0, 1, 0),
            s = new Fr({
              name: "SphericalGaussianBlur",
              defines: {
                n: ps,
                CUBEUV_TEXEL_WIDTH: 1 / t,
                CUBEUV_TEXEL_HEIGHT: 1 / i,
                CUBEUV_MAX_MIP: `${e}.0`,
              },
              uniforms: {
                envMap: { value: null },
                samples: { value: 1 },
                weights: { value: n },
                latitudinal: { value: !1 },
                dTheta: { value: 0 },
                mipInt: { value: 0 },
                poleAxis: { value: r },
              },
              vertexShader: Ts(),
              fragmentShader:
                "precision mediump float;precision mediump int;varying vec3 vOutputDirection;uniform sampler2D envMap;uniform int samples;uniform float weights[n];uniform bool latitudinal;uniform float dTheta;uniform float mipInt;uniform vec3 poleAxis;\n#define ENVMAP_TYPE_CUBE_UV\n#include <cube_uv_reflection_fragment>\nvec3 getSample(float theta,vec3 axis){float cosTheta=cos(theta);vec3 sampleDirection=vOutputDirection*cosTheta+cross(axis,vOutputDirection)*sin(theta)+axis*dot(axis,vOutputDirection)*(1.0-cosTheta);return bilinearCubeUV(envMap,sampleDirection,mipInt);}void main(){vec3 axis=latitudinal?poleAxis:cross(poleAxis,vOutputDirection);if(all(equal(axis,vec3(0.0)))){axis=vec3(vOutputDirection.z,0.0,-vOutputDirection.x);}axis=normalize(axis);gl_FragColor=vec4(0.0,0.0,0.0,1.0);gl_FragColor.rgb+=weights[0]*getSample(0.0,axis);for(int i=1;i<n;i++){if(i>=samples){break;}float theta=dTheta*float(i);gl_FragColor.rgb+=weights[i]*getSample(-1.0*theta,axis);gl_FragColor.rgb+=weights[i]*getSample(theta,axis);}}",
              blending: q,
              depthTest: !1,
              depthWrite: !1,
            });
          return s;
        })(n, e, t));
    }
    return n;
  }
  _compileMaterial(e) {
    const t = new Dr(this._lodPlanes[0], e);
    this._renderer.compile(t, ms);
  }
  _sceneToCubeUV(e, t, i, n) {
    const r = new Br(90, 1, t, i),
      s = [1, -1, 1, 1, 1, 1],
      a = [1, 1, 1, -1, -1, -1],
      o = this._renderer,
      l = o.autoClear,
      c = o.toneMapping;
    o.getClearColor(fs), (o.toneMapping = Te), (o.autoClear = !1);
    const h = new er({
        name: "PMREM.Background",
        side: W,
        depthWrite: !1,
        depthTest: !1,
      }),
      u = new Dr(new Or(), h);
    let d = !1;
    const p = e.background;
    p
      ? p.isColor && (h.color.copy(p), (e.background = null), (d = !0))
      : (h.color.copy(fs), (d = !0));
    for (let m = 0; m < 6; m++) {
      const t = m % 3;
      0 === t
        ? (r.up.set(0, s[m], 0), r.lookAt(a[m], 0, 0))
        : 1 === t
        ? (r.up.set(0, 0, s[m]), r.lookAt(0, a[m], 0))
        : (r.up.set(0, s[m], 0), r.lookAt(0, 0, a[m]));
      const i = this._cubeSize;
      Ms(n, t * i, m > 2 ? i : 0, i, i),
        o.setRenderTarget(n),
        d && o.render(u, r),
        o.render(e, r);
    }
    u.geometry.dispose(),
      u.material.dispose(),
      (o.toneMapping = c),
      (o.autoClear = l),
      (e.background = p);
  }
  _textureToCubeUV(e, t) {
    const i = this._renderer,
      n = e.mapping === Re || e.mapping === De;
    n
      ? (null === this._cubemapMaterial && (this._cubemapMaterial = Ss()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          !1 === e.isRenderTargetTexture ? -1 : 1))
      : null === this._equirectMaterial && (this._equirectMaterial = ws());
    const r = n ? this._cubemapMaterial : this._equirectMaterial,
      s = new Dr(this._lodPlanes[0], r);
    r.uniforms.envMap.value = e;
    const a = this._cubeSize;
    Ms(t, 0, 0, 3 * a, 2 * a), i.setRenderTarget(t), i.render(s, ms);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      i = t.autoClear;
    t.autoClear = !1;
    for (let n = 1; n < this._lodPlanes.length; n++) {
      const t = Math.sqrt(
          this._sigmas[n] * this._sigmas[n] -
            this._sigmas[n - 1] * this._sigmas[n - 1]
        ),
        i = xs[(n - 1) % xs.length];
      this._blur(e, n - 1, n, t, i);
    }
    t.autoClear = i;
  }
  _blur(e, t, i, n, r) {
    const s = this._pingPongRenderTarget;
    this._halfBlur(e, s, t, i, n, "latitudinal", r),
      this._halfBlur(s, e, i, i, n, "longitudinal", r);
  }
  _halfBlur(e, t, i, n, r, s, a) {
    const o = this._renderer,
      l = this._blurMaterial;
    "latitudinal" !== s &&
      "longitudinal" !== s &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    const c = new Dr(this._lodPlanes[n], l),
      h = l.uniforms,
      u = this._sizeLods[i] - 1,
      d = isFinite(r) ? Math.PI / (2 * u) : (2 * Math.PI) / (2 * ps - 1),
      p = r / d,
      m = isFinite(r) ? 1 + Math.floor(3 * p) : ps;
    m > ps &&
      console.warn(
        `sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ps}`
      );
    const f = [];
    let g = 0;
    for (let x = 0; x < ps; ++x) {
      const e = x / p,
        t = Math.exp((-e * e) / 2);
      f.push(t), 0 === x ? (g += t) : x < m && (g += 2 * t);
    }
    for (let x = 0; x < f.length; x++) f[x] = f[x] / g;
    (h.envMap.value = e.texture),
      (h.samples.value = m),
      (h.weights.value = f),
      (h.latitudinal.value = "latitudinal" === s),
      a && (h.poleAxis.value = a);
    const { _lodMax: v } = this;
    (h.dTheta.value = d), (h.mipInt.value = v - i);
    const _ = this._sizeLods[n];
    Ms(
      t,
      3 * _ * (n > v - us ? n - v + us : 0),
      4 * (this._cubeSize - _),
      3 * _,
      2 * _
    ),
      o.setRenderTarget(t),
      o.render(c, ms);
  }
}
function bs(e, t, i) {
  const n = new Oi(e, t, i);
  return (
    (n.texture.mapping = Ne),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function Ms(e, t, i, n, r) {
  e.viewport.set(t, i, n, r), e.scissor.set(t, i, n, r);
}
function ws() {
  return new Fr({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: Ts(),
    fragmentShader:
      "precision mediump float;precision mediump int;varying vec3 vOutputDirection;uniform sampler2D envMap;\n#include <common>\nvoid main(){vec3 outputDirection=normalize(vOutputDirection);vec2 uv=equirectUv(outputDirection);gl_FragColor=vec4(texture2D(envMap,uv).rgb,1.0);}",
    blending: q,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Ss() {
  return new Fr({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: Ts(),
    fragmentShader:
      "precision mediump float;precision mediump int;uniform float flipEnvMap;varying vec3 vOutputDirection;uniform samplerCube envMap;void main(){gl_FragColor=textureCube(envMap,vec3(flipEnvMap*vOutputDirection.x,vOutputDirection.yz));}",
    blending: q,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Ts() {
  return "precision mediump float;precision mediump int;attribute float faceIndex;varying vec3 vOutputDirection;vec3 getDirection(vec2 uv,float face){uv=2.0*uv-1.0;vec3 direction=vec3(uv,1.0);if(face==0.0){direction=direction.zyx;}else if(face==1.0){direction=direction.xzy;direction.xz*=-1.0;}else if(face==2.0){direction.x*=-1.0;}else if(face==3.0){direction=direction.zyx;direction.xz*=-1.0;}else if(face==4.0){direction=direction.xzy;direction.xy*=-1.0;}else if(face==5.0){direction.z*=-1.0;}return direction;}void main(){vOutputDirection=getDirection(uv,faceIndex);gl_Position=vec4(position,1.0);}";
}
function Es(e) {
  let t = new WeakMap(),
    i = null;
  function n(e) {
    const i = e.target;
    i.removeEventListener("dispose", n);
    const r = t.get(i);
    void 0 !== r && (t.delete(i), r.dispose());
  }
  return {
    get: function (r) {
      if (r && r.isTexture) {
        const s = r.mapping,
          a = s === Ie || s === Oe,
          o = s === Re || s === De;
        if (a || o) {
          if (r.isRenderTargetTexture && !0 === r.needsPMREMUpdate) {
            r.needsPMREMUpdate = !1;
            let n = t.get(r);
            return (
              null === i && (i = new ys(e)),
              (n = a ? i.fromEquirectangular(r, n) : i.fromCubemap(r, n)),
              t.set(r, n),
              n.texture
            );
          }
          if (t.has(r)) return t.get(r).texture;
          {
            const s = r.image;
            if (
              (a && s && s.height > 0) ||
              (o &&
                s &&
                (function (e) {
                  let t = 0;
                  const i = 6;
                  for (let n = 0; n < i; n++) void 0 !== e[n] && t++;
                  return t === i;
                })(s))
            ) {
              null === i && (i = new ys(e));
              const s = a ? i.fromEquirectangular(r) : i.fromCubemap(r);
              return t.set(r, s), r.addEventListener("dispose", n), s.texture;
            }
            return null;
          }
        }
      }
      return r;
    },
    dispose: function () {
      (t = new WeakMap()), null !== i && (i.dispose(), (i = null));
    },
  };
}
function As(e) {
  const t = {};
  function i(i) {
    if (void 0 !== t[i]) return t[i];
    let n;
    switch (i) {
      case "WEBGL_depth_texture":
        n =
          e.getExtension("WEBGL_depth_texture") ||
          e.getExtension("MOZ_WEBGL_depth_texture") ||
          e.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        n =
          e.getExtension("EXT_texture_filter_anisotropic") ||
          e.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        n =
          e.getExtension("WEBGL_compressed_texture_s3tc") ||
          e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        n =
          e.getExtension("WEBGL_compressed_texture_pvrtc") ||
          e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        n = e.getExtension(i);
    }
    return (t[i] = n), n;
  }
  return {
    has: function (e) {
      return null !== i(e);
    },
    init: function (e) {
      e.isWebGL2
        ? i("EXT_color_buffer_float")
        : (i("WEBGL_depth_texture"),
          i("OES_texture_float"),
          i("OES_texture_half_float"),
          i("OES_texture_half_float_linear"),
          i("OES_standard_derivatives"),
          i("OES_element_index_uint"),
          i("OES_vertex_array_object"),
          i("ANGLE_instanced_arrays")),
        i("OES_texture_float_linear"),
        i("EXT_color_buffer_half_float"),
        i("WEBGL_multisampled_render_to_texture");
    },
    get: function (e) {
      const t = i(e);
      return (
        null === t &&
          console.warn(
            "THREE.WebGLRenderer: " + e + " extension not supported."
          ),
        t
      );
    },
  };
}
function Cs(e, t, i, n) {
  const r = {},
    s = new WeakMap();
  function a(e) {
    const o = e.target;
    null !== o.index && t.remove(o.index);
    for (const i in o.attributes) t.remove(o.attributes[i]);
    o.removeEventListener("dispose", a), delete r[o.id];
    const l = s.get(o);
    l && (t.remove(l), s.delete(o)),
      n.releaseStatesOfGeometry(o),
      !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount,
      i.memory.geometries--;
  }
  function o(e) {
    const i = [],
      n = e.index,
      r = e.attributes.position;
    let a = 0;
    if (null !== n) {
      const e = n.array;
      a = n.version;
      for (let t = 0, n = e.length; t < n; t += 3) {
        const n = e[t + 0],
          r = e[t + 1],
          s = e[t + 2];
        i.push(n, r, r, s, s, n);
      }
    } else {
      const e = r.array;
      a = r.version;
      for (let t = 0, n = e.length / 3 - 1; t < n; t += 3) {
        const e = t + 0,
          n = t + 1,
          r = t + 2;
        i.push(e, n, n, r, r, e);
      }
    }
    const o = new (mi(i) ? sr : rr)(i, 1);
    o.version = a;
    const l = s.get(e);
    l && t.remove(l), s.set(e, o);
  }
  return {
    get: function (e, t) {
      return (
        !0 === r[t.id] ||
          (t.addEventListener("dispose", a),
          (r[t.id] = !0),
          i.memory.geometries++),
        t
      );
    },
    update: function (e) {
      const i = e.attributes;
      for (const r in i) t.update(i[r], 34962);
      const n = e.morphAttributes;
      for (const r in n) {
        const e = n[r];
        for (let i = 0, n = e.length; i < n; i++) t.update(e[i], 34962);
      }
    },
    getWireframeAttribute: function (e) {
      const t = s.get(e);
      if (t) {
        const i = e.index;
        null !== i && t.version < i.version && o(e);
      } else o(e);
      return s.get(e);
    },
  };
}
function Ps(e, t, i, n) {
  const r = n.isWebGL2;
  let s, a, o;
  (this.setMode = function (e) {
    s = e;
  }),
    (this.setIndex = function (e) {
      (a = e.type), (o = e.bytesPerElement);
    }),
    (this.render = function (t, n) {
      e.drawElements(s, n, a, t * o), i.update(n, s, 1);
    }),
    (this.renderInstances = function (n, l, c) {
      if (0 === c) return;
      let h, u;
      if (r) (h = e), (u = "drawElementsInstanced");
      else if (
        ((h = t.get("ANGLE_instanced_arrays")),
        (u = "drawElementsInstancedANGLE"),
        null === h)
      )
        return void console.error(
          "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
        );
      h[u](s, l, a, n * o, c), i.update(l, s, c);
    });
}
function Ls(e) {
  const t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  return {
    memory: { geometries: 0, textures: 0 },
    render: t,
    programs: null,
    autoReset: !0,
    reset: function () {
      t.frame++,
        (t.calls = 0),
        (t.triangles = 0),
        (t.points = 0),
        (t.lines = 0);
    },
    update: function (e, i, n) {
      switch ((t.calls++, i)) {
        case 4:
          t.triangles += n * (e / 3);
          break;
        case 1:
          t.lines += n * (e / 2);
          break;
        case 3:
          t.lines += n * (e - 1);
          break;
        case 2:
          t.lines += n * e;
          break;
        case 0:
          t.points += n * e;
          break;
        default:
          console.error("THREE.WebGLInfo: Unknown draw mode:", i);
      }
    },
  };
}
function Rs(e, t) {
  return e[0] - t[0];
}
function Ds(e, t) {
  return Math.abs(t[1]) - Math.abs(e[1]);
}
function Is(e, t, i) {
  const n = {},
    r = new Float32Array(8),
    s = new WeakMap(),
    a = new Ii(),
    o = [];
  for (let l = 0; l < 8; l++) o[l] = [l, 0];
  return {
    update: function (l, c, h, u) {
      const d = l.morphTargetInfluences;
      if (!0 === t.isWebGL2) {
        const n =
            c.morphAttributes.position ||
            c.morphAttributes.normal ||
            c.morphAttributes.color,
          r = void 0 !== n ? n.length : 0;
        let o = s.get(c);
        if (void 0 === o || o.count !== r) {
          let e = function () {
            v.dispose(), s.delete(c), c.removeEventListener("dispose", e);
          };
          void 0 !== o && o.texture.dispose();
          const i = void 0 !== c.morphAttributes.position,
            n = void 0 !== c.morphAttributes.normal,
            l = void 0 !== c.morphAttributes.color,
            h = c.morphAttributes.position || [],
            u = c.morphAttributes.normal || [],
            d = c.morphAttributes.color || [];
          let p = 0;
          !0 === i && (p = 1), !0 === n && (p = 2), !0 === l && (p = 3);
          let m = c.attributes.position.count * p,
            f = 1;
          m > t.maxTextureSize &&
            ((f = Math.ceil(m / t.maxTextureSize)), (m = t.maxTextureSize));
          const g = new Float32Array(m * f * 4 * r),
            v = new Ni(g, m, f, r);
          (v.type = Je), (v.needsUpdate = !0);
          const _ = 4 * p;
          for (let t = 0; t < r; t++) {
            const e = h[t],
              r = u[t],
              s = d[t],
              o = m * f * 4 * t;
            for (let t = 0; t < e.count; t++) {
              const c = t * _;
              !0 === i &&
                (a.fromBufferAttribute(e, t),
                (g[o + c + 0] = a.x),
                (g[o + c + 1] = a.y),
                (g[o + c + 2] = a.z),
                (g[o + c + 3] = 0)),
                !0 === n &&
                  (a.fromBufferAttribute(r, t),
                  (g[o + c + 4] = a.x),
                  (g[o + c + 5] = a.y),
                  (g[o + c + 6] = a.z),
                  (g[o + c + 7] = 0)),
                !0 === l &&
                  (a.fromBufferAttribute(s, t),
                  (g[o + c + 8] = a.x),
                  (g[o + c + 9] = a.y),
                  (g[o + c + 10] = a.z),
                  (g[o + c + 11] = 4 === s.itemSize ? a.w : 1));
            }
          }
          (o = { count: r, texture: v, size: new di(m, f) }),
            s.set(c, o),
            c.addEventListener("dispose", e);
        }
        let l = 0;
        for (let e = 0; e < d.length; e++) l += d[e];
        const h = c.morphTargetsRelative ? 1 : 1 - l;
        u.getUniforms().setValue(e, "morphTargetBaseInfluence", h),
          u.getUniforms().setValue(e, "morphTargetInfluences", d),
          u.getUniforms().setValue(e, "morphTargetsTexture", o.texture, i),
          u.getUniforms().setValue(e, "morphTargetsTextureSize", o.size);
      } else {
        const t = void 0 === d ? 0 : d.length;
        let i = n[c.id];
        if (void 0 === i || i.length !== t) {
          i = [];
          for (let e = 0; e < t; e++) i[e] = [e, 0];
          n[c.id] = i;
        }
        for (let e = 0; e < t; e++) {
          const t = i[e];
          (t[0] = e), (t[1] = d[e]);
        }
        i.sort(Ds);
        for (let e = 0; e < 8; e++)
          e < t && i[e][1]
            ? ((o[e][0] = i[e][0]), (o[e][1] = i[e][1]))
            : ((o[e][0] = Number.MAX_SAFE_INTEGER), (o[e][1] = 0));
        o.sort(Rs);
        const s = c.morphAttributes.position,
          a = c.morphAttributes.normal;
        let l = 0;
        for (let e = 0; e < 8; e++) {
          const t = o[e],
            i = t[0],
            n = t[1];
          i !== Number.MAX_SAFE_INTEGER && n
            ? (s &&
                c.getAttribute("morphTarget" + e) !== s[i] &&
                c.setAttribute("morphTarget" + e, s[i]),
              a &&
                c.getAttribute("morphNormal" + e) !== a[i] &&
                c.setAttribute("morphNormal" + e, a[i]),
              (r[e] = n),
              (l += n))
            : (s &&
                !0 === c.hasAttribute("morphTarget" + e) &&
                c.deleteAttribute("morphTarget" + e),
              a &&
                !0 === c.hasAttribute("morphNormal" + e) &&
                c.deleteAttribute("morphNormal" + e),
              (r[e] = 0));
        }
        const h = c.morphTargetsRelative ? 1 : 1 - l;
        u.getUniforms().setValue(e, "morphTargetBaseInfluence", h),
          u.getUniforms().setValue(e, "morphTargetInfluences", r);
      }
    },
  };
}
function Os(e, t, i, n) {
  let r = new WeakMap();
  function s(e) {
    const t = e.target;
    t.removeEventListener("dispose", s),
      i.remove(t.instanceMatrix),
      null !== t.instanceColor && i.remove(t.instanceColor);
  }
  return {
    update: function (e) {
      const a = n.render.frame,
        o = e.geometry,
        l = t.get(e, o);
      return (
        r.get(l) !== a && (t.update(l), r.set(l, a)),
        e.isInstancedMesh &&
          (!1 === e.hasEventListener("dispose", s) &&
            e.addEventListener("dispose", s),
          i.update(e.instanceMatrix, 34962),
          null !== e.instanceColor && i.update(e.instanceColor, 34962)),
        l
      );
    },
    dispose: function () {
      r = new WeakMap();
    },
  };
}
const Ns = new Di(),
  zs = new Ni(),
  Us = new zi(),
  Fs = new Gr(),
  ks = [],
  Bs = [],
  Vs = new Float32Array(16),
  Hs = new Float32Array(9),
  Gs = new Float32Array(4);
function Ws(e, t, i) {
  const n = e[0];
  if (n <= 0 || n > 0) return e;
  const r = t * i;
  let s = ks[r];
  if ((void 0 === s && ((s = new Float32Array(r)), (ks[r] = s)), 0 !== t)) {
    n.toArray(s, 0);
    for (let n = 1, r = 0; n !== t; ++n) (r += i), e[n].toArray(s, r);
  }
  return s;
}
function js(e, t) {
  if (e.length !== t.length) return !1;
  for (let i = 0, n = e.length; i < n; i++) if (e[i] !== t[i]) return !1;
  return !0;
}
function qs(e, t) {
  for (let i = 0, n = t.length; i < n; i++) e[i] = t[i];
}
function Xs(e, t) {
  let i = Bs[t];
  void 0 === i && ((i = new Int32Array(t)), (Bs[t] = i));
  for (let n = 0; n !== t; ++n) i[n] = e.allocateTextureUnit();
  return i;
}
function Ys(e, t) {
  const i = this.cache;
  i[0] !== t && (e.uniform1f(this.addr, t), (i[0] = t));
}
function Ks(e, t) {
  const i = this.cache;
  if (void 0 !== t.x)
    (i[0] === t.x && i[1] === t.y) ||
      (e.uniform2f(this.addr, t.x, t.y), (i[0] = t.x), (i[1] = t.y));
  else {
    if (js(i, t)) return;
    e.uniform2fv(this.addr, t), qs(i, t);
  }
}
function Zs(e, t) {
  const i = this.cache;
  if (void 0 !== t.x)
    (i[0] === t.x && i[1] === t.y && i[2] === t.z) ||
      (e.uniform3f(this.addr, t.x, t.y, t.z),
      (i[0] = t.x),
      (i[1] = t.y),
      (i[2] = t.z));
  else if (void 0 !== t.r)
    (i[0] === t.r && i[1] === t.g && i[2] === t.b) ||
      (e.uniform3f(this.addr, t.r, t.g, t.b),
      (i[0] = t.r),
      (i[1] = t.g),
      (i[2] = t.b));
  else {
    if (js(i, t)) return;
    e.uniform3fv(this.addr, t), qs(i, t);
  }
}
function Js(e, t) {
  const i = this.cache;
  if (void 0 !== t.x)
    (i[0] === t.x && i[1] === t.y && i[2] === t.z && i[3] === t.w) ||
      (e.uniform4f(this.addr, t.x, t.y, t.z, t.w),
      (i[0] = t.x),
      (i[1] = t.y),
      (i[2] = t.z),
      (i[3] = t.w));
  else {
    if (js(i, t)) return;
    e.uniform4fv(this.addr, t), qs(i, t);
  }
}
function Qs(e, t) {
  const i = this.cache,
    n = t.elements;
  if (void 0 === n) {
    if (js(i, t)) return;
    e.uniformMatrix2fv(this.addr, !1, t), qs(i, t);
  } else {
    if (js(i, n)) return;
    Gs.set(n), e.uniformMatrix2fv(this.addr, !1, Gs), qs(i, n);
  }
}
function $s(e, t) {
  const i = this.cache,
    n = t.elements;
  if (void 0 === n) {
    if (js(i, t)) return;
    e.uniformMatrix3fv(this.addr, !1, t), qs(i, t);
  } else {
    if (js(i, n)) return;
    Hs.set(n), e.uniformMatrix3fv(this.addr, !1, Hs), qs(i, n);
  }
}
function ea(e, t) {
  const i = this.cache,
    n = t.elements;
  if (void 0 === n) {
    if (js(i, t)) return;
    e.uniformMatrix4fv(this.addr, !1, t), qs(i, t);
  } else {
    if (js(i, n)) return;
    Vs.set(n), e.uniformMatrix4fv(this.addr, !1, Vs), qs(i, n);
  }
}
function ta(e, t) {
  const i = this.cache;
  i[0] !== t && (e.uniform1i(this.addr, t), (i[0] = t));
}
function ia(e, t) {
  const i = this.cache;
  if (void 0 !== t.x)
    (i[0] === t.x && i[1] === t.y) ||
      (e.uniform2i(this.addr, t.x, t.y), (i[0] = t.x), (i[1] = t.y));
  else {
    if (js(i, t)) return;
    e.uniform2iv(this.addr, t), qs(i, t);
  }
}
function na(e, t) {
  const i = this.cache;
  if (void 0 !== t.x)
    (i[0] === t.x && i[1] === t.y && i[2] === t.z) ||
      (e.uniform3i(this.addr, t.x, t.y, t.z),
      (i[0] = t.x),
      (i[1] = t.y),
      (i[2] = t.z));
  else {
    if (js(i, t)) return;
    e.uniform3iv(this.addr, t), qs(i, t);
  }
}
function ra(e, t) {
  const i = this.cache;
  if (void 0 !== t.x)
    (i[0] === t.x && i[1] === t.y && i[2] === t.z && i[3] === t.w) ||
      (e.uniform4i(this.addr, t.x, t.y, t.z, t.w),
      (i[0] = t.x),
      (i[1] = t.y),
      (i[2] = t.z),
      (i[3] = t.w));
  else {
    if (js(i, t)) return;
    e.uniform4iv(this.addr, t), qs(i, t);
  }
}
function sa(e, t) {
  const i = this.cache;
  i[0] !== t && (e.uniform1ui(this.addr, t), (i[0] = t));
}
function aa(e, t) {
  const i = this.cache;
  if (void 0 !== t.x)
    (i[0] === t.x && i[1] === t.y) ||
      (e.uniform2ui(this.addr, t.x, t.y), (i[0] = t.x), (i[1] = t.y));
  else {
    if (js(i, t)) return;
    e.uniform2uiv(this.addr, t), qs(i, t);
  }
}
function oa(e, t) {
  const i = this.cache;
  if (void 0 !== t.x)
    (i[0] === t.x && i[1] === t.y && i[2] === t.z) ||
      (e.uniform3ui(this.addr, t.x, t.y, t.z),
      (i[0] = t.x),
      (i[1] = t.y),
      (i[2] = t.z));
  else {
    if (js(i, t)) return;
    e.uniform3uiv(this.addr, t), qs(i, t);
  }
}
function la(e, t) {
  const i = this.cache;
  if (void 0 !== t.x)
    (i[0] === t.x && i[1] === t.y && i[2] === t.z && i[3] === t.w) ||
      (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w),
      (i[0] = t.x),
      (i[1] = t.y),
      (i[2] = t.z),
      (i[3] = t.w));
  else {
    if (js(i, t)) return;
    e.uniform4uiv(this.addr, t), qs(i, t);
  }
}
function ca(e, t, i) {
  const n = this.cache,
    r = i.allocateTextureUnit();
  n[0] !== r && (e.uniform1i(this.addr, r), (n[0] = r)),
    i.setTexture2D(t || Ns, r);
}
function ha(e, t, i) {
  const n = this.cache,
    r = i.allocateTextureUnit();
  n[0] !== r && (e.uniform1i(this.addr, r), (n[0] = r)),
    i.setTexture3D(t || Us, r);
}
function ua(e, t, i) {
  const n = this.cache,
    r = i.allocateTextureUnit();
  n[0] !== r && (e.uniform1i(this.addr, r), (n[0] = r)),
    i.setTextureCube(t || Fs, r);
}
function da(e, t, i) {
  const n = this.cache,
    r = i.allocateTextureUnit();
  n[0] !== r && (e.uniform1i(this.addr, r), (n[0] = r)),
    i.setTexture2DArray(t || zs, r);
}
function pa(e, t) {
  e.uniform1fv(this.addr, t);
}
function ma(e, t) {
  const i = Ws(t, this.size, 2);
  e.uniform2fv(this.addr, i);
}
function fa(e, t) {
  const i = Ws(t, this.size, 3);
  e.uniform3fv(this.addr, i);
}
function ga(e, t) {
  const i = Ws(t, this.size, 4);
  e.uniform4fv(this.addr, i);
}
function va(e, t) {
  const i = Ws(t, this.size, 4);
  e.uniformMatrix2fv(this.addr, !1, i);
}
function _a(e, t) {
  const i = Ws(t, this.size, 9);
  e.uniformMatrix3fv(this.addr, !1, i);
}
function xa(e, t) {
  const i = Ws(t, this.size, 16);
  e.uniformMatrix4fv(this.addr, !1, i);
}
function ya(e, t) {
  e.uniform1iv(this.addr, t);
}
function ba(e, t) {
  e.uniform2iv(this.addr, t);
}
function Ma(e, t) {
  e.uniform3iv(this.addr, t);
}
function wa(e, t) {
  e.uniform4iv(this.addr, t);
}
function Sa(e, t) {
  e.uniform1uiv(this.addr, t);
}
function Ta(e, t) {
  e.uniform2uiv(this.addr, t);
}
function Ea(e, t) {
  e.uniform3uiv(this.addr, t);
}
function Aa(e, t) {
  e.uniform4uiv(this.addr, t);
}
function Ca(e, t, i) {
  const n = this.cache,
    r = t.length,
    s = Xs(i, r);
  js(n, s) || (e.uniform1iv(this.addr, s), qs(n, s));
  for (let a = 0; a !== r; ++a) i.setTexture2D(t[a] || Ns, s[a]);
}
function Pa(e, t, i) {
  const n = this.cache,
    r = t.length,
    s = Xs(i, r);
  js(n, s) || (e.uniform1iv(this.addr, s), qs(n, s));
  for (let a = 0; a !== r; ++a) i.setTexture3D(t[a] || Us, s[a]);
}
function La(e, t, i) {
  const n = this.cache,
    r = t.length,
    s = Xs(i, r);
  js(n, s) || (e.uniform1iv(this.addr, s), qs(n, s));
  for (let a = 0; a !== r; ++a) i.setTextureCube(t[a] || Fs, s[a]);
}
function Ra(e, t, i) {
  const n = this.cache,
    r = t.length,
    s = Xs(i, r);
  js(n, s) || (e.uniform1iv(this.addr, s), qs(n, s));
  for (let a = 0; a !== r; ++a) i.setTexture2DArray(t[a] || zs, s[a]);
}
class Da {
  constructor(e, t, i) {
    (this.id = e),
      (this.addr = i),
      (this.cache = []),
      (this.setValue = (function (e) {
        switch (e) {
          case 5126:
            return Ys;
          case 35664:
            return Ks;
          case 35665:
            return Zs;
          case 35666:
            return Js;
          case 35674:
            return Qs;
          case 35675:
            return $s;
          case 35676:
            return ea;
          case 5124:
          case 35670:
            return ta;
          case 35667:
          case 35671:
            return ia;
          case 35668:
          case 35672:
            return na;
          case 35669:
          case 35673:
            return ra;
          case 5125:
            return sa;
          case 36294:
            return aa;
          case 36295:
            return oa;
          case 36296:
            return la;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return ca;
          case 35679:
          case 36299:
          case 36307:
            return ha;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return ua;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return da;
        }
      })(t.type));
  }
}
class Ia {
  constructor(e, t, i) {
    (this.id = e),
      (this.addr = i),
      (this.cache = []),
      (this.size = t.size),
      (this.setValue = (function (e) {
        switch (e) {
          case 5126:
            return pa;
          case 35664:
            return ma;
          case 35665:
            return fa;
          case 35666:
            return ga;
          case 35674:
            return va;
          case 35675:
            return _a;
          case 35676:
            return xa;
          case 5124:
          case 35670:
            return ya;
          case 35667:
          case 35671:
            return ba;
          case 35668:
          case 35672:
            return Ma;
          case 35669:
          case 35673:
            return wa;
          case 5125:
            return Sa;
          case 36294:
            return Ta;
          case 36295:
            return Ea;
          case 36296:
            return Aa;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return Ca;
          case 35679:
          case 36299:
          case 36307:
            return Pa;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return La;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return Ra;
        }
      })(t.type));
  }
}
class Oa {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, i) {
    const n = this.seq;
    for (let r = 0, s = n.length; r !== s; ++r) {
      const s = n[r];
      s.setValue(e, t[s.id], i);
    }
  }
}
const Na = /(\w+)(\])?(\[|\.)?/g;
function za(e, t) {
  e.seq.push(t), (e.map[t.id] = t);
}
function Ua(e, t, i) {
  const n = e.name,
    r = n.length;
  for (Na.lastIndex = 0; ; ) {
    const s = Na.exec(n),
      a = Na.lastIndex;
    let o = s[1];
    const l = "]" === s[2],
      c = s[3];
    if ((l && (o |= 0), void 0 === c || ("[" === c && a + 2 === r))) {
      za(i, void 0 === c ? new Da(o, e, t) : new Ia(o, e, t));
      break;
    }
    {
      let e = i.map[o];
      void 0 === e && ((e = new Oa(o)), za(i, e)), (i = e);
    }
  }
}
class Fa {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const i = e.getProgramParameter(t, 35718);
    for (let n = 0; n < i; ++n) {
      const i = e.getActiveUniform(t, n);
      Ua(i, e.getUniformLocation(t, i.name), this);
    }
  }
  setValue(e, t, i, n) {
    const r = this.map[t];
    void 0 !== r && r.setValue(e, i, n);
  }
  setOptional(e, t, i) {
    const n = t[i];
    void 0 !== n && this.setValue(e, i, n);
  }
  static upload(e, t, i, n) {
    for (let r = 0, s = t.length; r !== s; ++r) {
      const s = t[r],
        a = i[s.id];
      !1 !== a.needsUpdate && s.setValue(e, a.value, n);
    }
  }
  static seqWithValue(e, t) {
    const i = [];
    for (let n = 0, r = e.length; n !== r; ++n) {
      const r = e[n];
      r.id in t && i.push(r);
    }
    return i;
  }
}
function ka(e, t, i) {
  const n = e.createShader(t);
  return e.shaderSource(n, i), e.compileShader(n), n;
}
let Ba = 0;
function Va(e, t, i) {
  const n = e.getShaderParameter(t, 35713),
    r = e.getShaderInfoLog(t).trim();
  if (n && "" === r) return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const n = parseInt(s[1]);
    return (
      i.toUpperCase() +
      "\n\n" +
      r +
      "\n\n" +
      (function (e, t) {
        const i = e.split("\n"),
          n = [],
          r = Math.max(t - 6, 0),
          s = Math.min(t + 6, i.length);
        for (let a = r; a < s; a++) {
          const e = a + 1;
          n.push(`${e === t ? ">" : " "} ${e}: ${i[a]}`);
        }
        return n.join("\n");
      })(e.getShaderSource(t), n)
    );
  }
  return r;
}
function Ha(e, t) {
  const i = (function (e) {
    switch (e) {
      case Wt:
        return ["Linear", "( value )"];
      case jt:
        return ["sRGB", "( value )"];
      default:
        return (
          console.warn("THREE.WebGLProgram: Unsupported encoding:", e),
          ["Linear", "( value )"]
        );
    }
  })(t);
  return "vec4 " + e + "( vec4 value ) { return LinearTo" + i[0] + i[1] + "; }";
}
function Ga(e, t) {
  let i;
  switch (t) {
    case Ee:
      i = "Linear";
      break;
    case Ae:
      i = "Reinhard";
      break;
    case Ce:
      i = "OptimizedCineon";
      break;
    case Pe:
      i = "ACESFilmic";
      break;
    case Le:
      i = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t),
        (i = "Linear");
  }
  return (
    "vec3 " + e + "( vec3 color ) { return " + i + "ToneMapping( color ); }"
  );
}
function Wa(e) {
  return "" !== e;
}
function ja(e, t) {
  const i =
    t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return e
    .replace(/NUM_DIR_LIGHTS/g, t.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, i)
    .replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, t.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function qa(e, t) {
  return e
    .replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      t.numClippingPlanes - t.numClipIntersection
    );
}
const Xa = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ya(e) {
  return e.replace(Xa, Ka);
}
function Ka(e, t) {
  const i = ts[t];
  if (void 0 === i) throw new Error("Can not resolve #include <" + t + ">");
  return Ya(i);
}
const Za =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ja(e) {
  return e.replace(Za, Qa);
}
function Qa(e, t, i, n) {
  let r = "";
  for (let s = parseInt(t); s < parseInt(i); s++)
    r += n
      .replace(/\[\s*i\s*\]/g, "[ " + s + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function $a(e) {
  let t =
    "precision " + e.precision + " float;\nprecision " + e.precision + " int;";
  return (
    "highp" === e.precision
      ? (t += "\n#define HIGH_PRECISION")
      : "mediump" === e.precision
      ? (t += "\n#define MEDIUM_PRECISION")
      : "lowp" === e.precision && (t += "\n#define LOW_PRECISION"),
    t
  );
}
function eo(e, t, i, n) {
  const r = e.getContext(),
    s = i.defines;
  let a = i.vertexShader,
    o = i.fragmentShader;
  const l = (function (e) {
      let t = "SHADOWMAP_TYPE_BASIC";
      return (
        e.shadowMapType === B
          ? (t = "SHADOWMAP_TYPE_PCF")
          : e.shadowMapType === V
          ? (t = "SHADOWMAP_TYPE_PCF_SOFT")
          : e.shadowMapType === H && (t = "SHADOWMAP_TYPE_VSM"),
        t
      );
    })(i),
    c = (function (e) {
      let t = "ENVMAP_TYPE_CUBE";
      if (e.envMap)
        switch (e.envMapMode) {
          case Re:
          case De:
            t = "ENVMAP_TYPE_CUBE";
            break;
          case Ne:
            t = "ENVMAP_TYPE_CUBE_UV";
        }
      return t;
    })(i),
    h = (function (e) {
      let t = "ENVMAP_MODE_REFLECTION";
      e.envMap && e.envMapMode === De && (t = "ENVMAP_MODE_REFRACTION");
      return t;
    })(i),
    u = (function (e) {
      let t = "ENVMAP_BLENDING_NONE";
      if (e.envMap)
        switch (e.combine) {
          case Me:
            t = "ENVMAP_BLENDING_MULTIPLY";
            break;
          case we:
            t = "ENVMAP_BLENDING_MIX";
            break;
          case Se:
            t = "ENVMAP_BLENDING_ADD";
        }
      return t;
    })(i),
    d = (function (e) {
      const t = e.envMapCubeUVHeight;
      if (null === t) return null;
      const i = Math.log2(t) - 2,
        n = 1 / t;
      return {
        texelWidth: 1 / (3 * Math.max(Math.pow(2, i), 112)),
        texelHeight: n,
        maxMip: i,
      };
    })(i),
    p = i.isWebGL2
      ? ""
      : (function (e) {
          return [
            e.extensionDerivatives ||
            e.envMapCubeUVHeight ||
            e.bumpMap ||
            e.tangentSpaceNormalMap ||
            e.clearcoatNormalMap ||
            e.flatShading ||
            "physical" === e.shaderID
              ? "#extension GL_OES_standard_derivatives : enable"
              : "",
            (e.extensionFragDepth || e.logarithmicDepthBuffer) &&
            e.rendererExtensionFragDepth
              ? "#extension GL_EXT_frag_depth : enable"
              : "",
            e.extensionDrawBuffers && e.rendererExtensionDrawBuffers
              ? "#extension GL_EXT_draw_buffers : require"
              : "",
            (e.extensionShaderTextureLOD || e.envMap || e.transmission) &&
            e.rendererExtensionShaderTextureLod
              ? "#extension GL_EXT_shader_texture_lod : enable"
              : "",
          ]
            .filter(Wa)
            .join("\n");
        })(i),
    m = (function (e) {
      const t = [];
      for (const i in e) {
        const n = e[i];
        !1 !== n && t.push("#define " + i + " " + n);
      }
      return t.join("\n");
    })(s),
    f = r.createProgram();
  let g,
    v,
    _ = i.glslVersion ? "#version " + i.glslVersion + "\n" : "";
  i.isRawShaderMaterial
    ? ((g = [m].filter(Wa).join("\n")),
      g.length > 0 && (g += "\n"),
      (v = [p, m].filter(Wa).join("\n")),
      v.length > 0 && (v += "\n"))
    : ((g = [
        $a(i),
        "#define SHADER_NAME " + i.shaderName,
        m,
        i.instancing ? "#define USE_INSTANCING" : "",
        i.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        i.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
        i.useFog && i.fog ? "#define USE_FOG" : "",
        i.useFog && i.fogExp2 ? "#define FOG_EXP2" : "",
        i.map ? "#define USE_MAP" : "",
        i.envMap ? "#define USE_ENVMAP" : "",
        i.envMap ? "#define " + h : "",
        i.lightMap ? "#define USE_LIGHTMAP" : "",
        i.aoMap ? "#define USE_AOMAP" : "",
        i.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        i.bumpMap ? "#define USE_BUMPMAP" : "",
        i.normalMap ? "#define USE_NORMALMAP" : "",
        i.normalMap && i.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        i.normalMap && i.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        i.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        i.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        i.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        i.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        i.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        i.displacementMap && i.supportsVertexTextures
          ? "#define USE_DISPLACEMENTMAP"
          : "",
        i.specularMap ? "#define USE_SPECULARMAP" : "",
        i.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        i.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        i.metalnessMap ? "#define USE_METALNESSMAP" : "",
        i.alphaMap ? "#define USE_ALPHAMAP" : "",
        i.transmission ? "#define USE_TRANSMISSION" : "",
        i.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        i.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        i.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        i.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        i.vertexTangents ? "#define USE_TANGENT" : "",
        i.vertexColors ? "#define USE_COLOR" : "",
        i.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        i.vertexUvs ? "#define USE_UV" : "",
        i.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        i.flatShading ? "#define FLAT_SHADED" : "",
        i.skinning ? "#define USE_SKINNING" : "",
        i.morphTargets ? "#define USE_MORPHTARGETS" : "",
        i.morphNormals && !1 === i.flatShading
          ? "#define USE_MORPHNORMALS"
          : "",
        i.morphColors && i.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
        i.morphTargetsCount > 0 && i.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE"
          : "",
        i.morphTargetsCount > 0 && i.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + i.morphTextureStride
          : "",
        i.morphTargetsCount > 0 && i.isWebGL2
          ? "#define MORPHTARGETS_COUNT " + i.morphTargetsCount
          : "",
        i.doubleSided ? "#define DOUBLE_SIDED" : "",
        i.flipSided ? "#define FLIP_SIDED" : "",
        i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        i.shadowMapEnabled ? "#define " + l : "",
        i.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        i.logarithmicDepthBuffer && i.rendererExtensionFragDepth
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
        "\tattribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "\tattribute vec3 instanceColor;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_TANGENT",
        "\tattribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "\tattribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "\tattribute vec3 color;",
        "#endif",
        "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
        "\tattribute vec3 morphTarget0;",
        "\tattribute vec3 morphTarget1;",
        "\tattribute vec3 morphTarget2;",
        "\tattribute vec3 morphTarget3;",
        "\t#ifdef USE_MORPHNORMALS",
        "\t\tattribute vec3 morphNormal0;",
        "\t\tattribute vec3 morphNormal1;",
        "\t\tattribute vec3 morphNormal2;",
        "\t\tattribute vec3 morphNormal3;",
        "\t#else",
        "\t\tattribute vec3 morphTarget4;",
        "\t\tattribute vec3 morphTarget5;",
        "\t\tattribute vec3 morphTarget6;",
        "\t\tattribute vec3 morphTarget7;",
        "\t#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "\tattribute vec4 skinIndex;",
        "\tattribute vec4 skinWeight;",
        "#endif",
        "\n",
      ]
        .filter(Wa)
        .join("\n")),
      (v = [
        p,
        $a(i),
        "#define SHADER_NAME " + i.shaderName,
        m,
        i.useFog && i.fog ? "#define USE_FOG" : "",
        i.useFog && i.fogExp2 ? "#define FOG_EXP2" : "",
        i.map ? "#define USE_MAP" : "",
        i.matcap ? "#define USE_MATCAP" : "",
        i.envMap ? "#define USE_ENVMAP" : "",
        i.envMap ? "#define " + c : "",
        i.envMap ? "#define " + h : "",
        i.envMap ? "#define " + u : "",
        d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
        d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
        d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
        i.lightMap ? "#define USE_LIGHTMAP" : "",
        i.aoMap ? "#define USE_AOMAP" : "",
        i.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        i.bumpMap ? "#define USE_BUMPMAP" : "",
        i.normalMap ? "#define USE_NORMALMAP" : "",
        i.normalMap && i.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        i.normalMap && i.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        i.clearcoat ? "#define USE_CLEARCOAT" : "",
        i.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        i.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        i.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        i.iridescence ? "#define USE_IRIDESCENCE" : "",
        i.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        i.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        i.specularMap ? "#define USE_SPECULARMAP" : "",
        i.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        i.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        i.metalnessMap ? "#define USE_METALNESSMAP" : "",
        i.alphaMap ? "#define USE_ALPHAMAP" : "",
        i.alphaTest ? "#define USE_ALPHATEST" : "",
        i.sheen ? "#define USE_SHEEN" : "",
        i.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        i.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        i.transmission ? "#define USE_TRANSMISSION" : "",
        i.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        i.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        i.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        i.vertexTangents ? "#define USE_TANGENT" : "",
        i.vertexColors || i.instancingColor ? "#define USE_COLOR" : "",
        i.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        i.vertexUvs ? "#define USE_UV" : "",
        i.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        i.gradientMap ? "#define USE_GRADIENTMAP" : "",
        i.flatShading ? "#define FLAT_SHADED" : "",
        i.doubleSided ? "#define DOUBLE_SIDED" : "",
        i.flipSided ? "#define FLIP_SIDED" : "",
        i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        i.shadowMapEnabled ? "#define " + l : "",
        i.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        i.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
        i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        i.logarithmicDepthBuffer && i.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        i.toneMapping !== Te ? "#define TONE_MAPPING" : "",
        i.toneMapping !== Te ? ts.tonemapping_pars_fragment : "",
        i.toneMapping !== Te ? Ga("toneMapping", i.toneMapping) : "",
        i.dithering ? "#define DITHERING" : "",
        i.opaque ? "#define OPAQUE" : "",
        ts.encodings_pars_fragment,
        Ha("linearToOutputTexel", i.outputEncoding),
        i.useDepthPacking ? "#define DEPTH_PACKING " + i.depthPacking : "",
        "\n",
      ]
        .filter(Wa)
        .join("\n"))),
    (a = Ya(a)),
    (a = ja(a, i)),
    (a = qa(a, i)),
    (o = Ya(o)),
    (o = ja(o, i)),
    (o = qa(o, i)),
    (a = Ja(a)),
    (o = Ja(o)),
    i.isWebGL2 &&
      !0 !== i.isRawShaderMaterial &&
      ((_ = "#version 300 es\n"),
      (g =
        [
          "precision mediump sampler2DArray;",
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join("\n") +
        "\n" +
        g),
      (v =
        [
          "#define varying in",
          i.glslVersion === $t
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          i.glslVersion === $t ? "" : "#define gl_FragColor pc_fragColor",
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
        ].join("\n") +
        "\n" +
        v));
  const x = _ + v + o,
    y = ka(r, 35633, _ + g + a),
    b = ka(r, 35632, x);
  if (
    (r.attachShader(f, y),
    r.attachShader(f, b),
    void 0 !== i.index0AttributeName
      ? r.bindAttribLocation(f, 0, i.index0AttributeName)
      : !0 === i.morphTargets && r.bindAttribLocation(f, 0, "position"),
    r.linkProgram(f),
    e.debug.checkShaderErrors)
  ) {
    const e = r.getProgramInfoLog(f).trim(),
      t = r.getShaderInfoLog(y).trim(),
      i = r.getShaderInfoLog(b).trim();
    let n = !0,
      s = !0;
    if (!1 === r.getProgramParameter(f, 35714)) {
      n = !1;
      const t = Va(r, y, "vertex"),
        i = Va(r, b, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " +
          r.getError() +
          " - VALIDATE_STATUS " +
          r.getProgramParameter(f, 35715) +
          "\n\nProgram Info Log: " +
          e +
          "\n" +
          t +
          "\n" +
          i
      );
    } else
      "" !== e
        ? console.warn("THREE.WebGLProgram: Program Info Log:", e)
        : ("" !== t && "" !== i) || (s = !1);
    s &&
      (this.diagnostics = {
        runnable: n,
        programLog: e,
        vertexShader: { log: t, prefix: g },
        fragmentShader: { log: i, prefix: v },
      });
  }
  let M, w;
  return (
    r.deleteShader(y),
    r.deleteShader(b),
    (this.getUniforms = function () {
      return void 0 === M && (M = new Fa(r, f)), M;
    }),
    (this.getAttributes = function () {
      return (
        void 0 === w &&
          (w = (function (e, t) {
            const i = {},
              n = e.getProgramParameter(t, 35721);
            for (let r = 0; r < n; r++) {
              const n = e.getActiveAttrib(t, r),
                s = n.name;
              let a = 1;
              35674 === n.type && (a = 2),
                35675 === n.type && (a = 3),
                35676 === n.type && (a = 4),
                (i[s] = {
                  type: n.type,
                  location: e.getAttribLocation(t, s),
                  locationSize: a,
                });
            }
            return i;
          })(r, f)),
        w
      );
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        r.deleteProgram(f),
        (this.program = void 0);
    }),
    (this.name = i.shaderName),
    (this.id = Ba++),
    (this.cacheKey = t),
    (this.usedTimes = 1),
    (this.program = f),
    (this.vertexShader = y),
    (this.fragmentShader = b),
    this
  );
}
let to = 0;
class io {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      i = e.fragmentShader,
      n = this._getShaderStage(t),
      r = this._getShaderStage(i),
      s = this._getShaderCacheForMaterial(e);
    return (
      !1 === s.has(n) && (s.add(n), n.usedTimes++),
      !1 === s.has(r) && (s.add(r), r.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const i of t)
      i.usedTimes--, 0 === i.usedTimes && this.shaderCache.delete(i.code);
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
    let i = t.get(e);
    return void 0 === i && ((i = new Set()), t.set(e, i)), i;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let i = t.get(e);
    return void 0 === i && ((i = new no(e)), t.set(e, i)), i;
  }
}
class no {
  constructor(e) {
    (this.id = to++), (this.code = e), (this.usedTimes = 0);
  }
}
function ro(e, t, i, n, r, s, a) {
  const o = new En(),
    l = new io(),
    c = [],
    h = r.isWebGL2,
    u = r.logarithmicDepthBuffer,
    d = r.vertexTextures;
  let p = r.precision;
  const m = {
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
  return {
    getParameters: function (s, o, c, f, g) {
      const v = f.fog,
        _ = g.geometry,
        x = s.isMeshStandardMaterial ? f.environment : null,
        y = (s.isMeshStandardMaterial ? i : t).get(s.envMap || x),
        b = y && y.mapping === Ne ? y.image.height : null,
        M = m[s.type];
      null !== s.precision &&
        ((p = r.getMaxPrecision(s.precision)),
        p !== s.precision &&
          console.warn(
            "THREE.WebGLProgram.getParameters:",
            s.precision,
            "not supported, using",
            p,
            "instead."
          ));
      const w =
          _.morphAttributes.position ||
          _.morphAttributes.normal ||
          _.morphAttributes.color,
        S = void 0 !== w ? w.length : 0;
      let T,
        E,
        A,
        C,
        P = 0;
      if (
        (void 0 !== _.morphAttributes.position && (P = 1),
        void 0 !== _.morphAttributes.normal && (P = 2),
        void 0 !== _.morphAttributes.color && (P = 3),
        M)
      ) {
        const e = ns[M];
        (T = e.vertexShader), (E = e.fragmentShader);
      } else
        (T = s.vertexShader),
          (E = s.fragmentShader),
          l.update(s),
          (A = l.getVertexShaderID(s)),
          (C = l.getFragmentShaderID(s));
      const L = e.getRenderTarget(),
        R = s.alphaTest > 0,
        D = s.clearcoat > 0,
        I = s.iridescence > 0;
      return {
        isWebGL2: h,
        shaderID: M,
        shaderName: s.type,
        vertexShader: T,
        fragmentShader: E,
        defines: s.defines,
        customVertexShaderID: A,
        customFragmentShaderID: C,
        isRawShaderMaterial: !0 === s.isRawShaderMaterial,
        glslVersion: s.glslVersion,
        precision: p,
        instancing: !0 === g.isInstancedMesh,
        instancingColor: !0 === g.isInstancedMesh && null !== g.instanceColor,
        supportsVertexTextures: d,
        outputEncoding:
          null === L
            ? e.outputEncoding
            : !0 === L.isXRRenderTarget
            ? L.texture.encoding
            : Wt,
        map: !!s.map,
        matcap: !!s.matcap,
        envMap: !!y,
        envMapMode: y && y.mapping,
        envMapCubeUVHeight: b,
        lightMap: !!s.lightMap,
        aoMap: !!s.aoMap,
        emissiveMap: !!s.emissiveMap,
        bumpMap: !!s.bumpMap,
        normalMap: !!s.normalMap,
        objectSpaceNormalMap: s.normalMapType === Yt,
        tangentSpaceNormalMap: s.normalMapType === Xt,
        decodeVideoTexture:
          !!s.map && !0 === s.map.isVideoTexture && s.map.encoding === jt,
        clearcoat: D,
        clearcoatMap: D && !!s.clearcoatMap,
        clearcoatRoughnessMap: D && !!s.clearcoatRoughnessMap,
        clearcoatNormalMap: D && !!s.clearcoatNormalMap,
        iridescence: I,
        iridescenceMap: I && !!s.iridescenceMap,
        iridescenceThicknessMap: I && !!s.iridescenceThicknessMap,
        displacementMap: !!s.displacementMap,
        roughnessMap: !!s.roughnessMap,
        metalnessMap: !!s.metalnessMap,
        specularMap: !!s.specularMap,
        specularIntensityMap: !!s.specularIntensityMap,
        specularColorMap: !!s.specularColorMap,
        opaque: !1 === s.transparent && s.blending === X,
        alphaMap: !!s.alphaMap,
        alphaTest: R,
        gradientMap: !!s.gradientMap,
        sheen: s.sheen > 0,
        sheenColorMap: !!s.sheenColorMap,
        sheenRoughnessMap: !!s.sheenRoughnessMap,
        transmission: s.transmission > 0,
        transmissionMap: !!s.transmissionMap,
        thicknessMap: !!s.thicknessMap,
        combine: s.combine,
        vertexTangents: !!s.normalMap && !!_.attributes.tangent,
        vertexColors: s.vertexColors,
        vertexAlphas:
          !0 === s.vertexColors &&
          !!_.attributes.color &&
          4 === _.attributes.color.itemSize,
        vertexUvs: !!(
          s.map ||
          s.bumpMap ||
          s.normalMap ||
          s.specularMap ||
          s.alphaMap ||
          s.emissiveMap ||
          s.roughnessMap ||
          s.metalnessMap ||
          s.clearcoatMap ||
          s.clearcoatRoughnessMap ||
          s.clearcoatNormalMap ||
          s.iridescenceMap ||
          s.iridescenceThicknessMap ||
          s.displacementMap ||
          s.transmissionMap ||
          s.thicknessMap ||
          s.specularIntensityMap ||
          s.specularColorMap ||
          s.sheenColorMap ||
          s.sheenRoughnessMap
        ),
        uvsVertexOnly: !(
          s.map ||
          s.bumpMap ||
          s.normalMap ||
          s.specularMap ||
          s.alphaMap ||
          s.emissiveMap ||
          s.roughnessMap ||
          s.metalnessMap ||
          s.clearcoatNormalMap ||
          s.iridescenceMap ||
          s.iridescenceThicknessMap ||
          s.transmission > 0 ||
          s.transmissionMap ||
          s.thicknessMap ||
          s.specularIntensityMap ||
          s.specularColorMap ||
          s.sheen > 0 ||
          s.sheenColorMap ||
          s.sheenRoughnessMap ||
          !s.displacementMap
        ),
        fog: !!v,
        useFog: !0 === s.fog,
        fogExp2: v && v.isFogExp2,
        flatShading: !!s.flatShading,
        sizeAttenuation: s.sizeAttenuation,
        logarithmicDepthBuffer: u,
        skinning: !0 === g.isSkinnedMesh,
        morphTargets: void 0 !== _.morphAttributes.position,
        morphNormals: void 0 !== _.morphAttributes.normal,
        morphColors: void 0 !== _.morphAttributes.color,
        morphTargetsCount: S,
        morphTextureStride: P,
        numDirLights: o.directional.length,
        numPointLights: o.point.length,
        numSpotLights: o.spot.length,
        numSpotLightMaps: o.spotLightMap.length,
        numRectAreaLights: o.rectArea.length,
        numHemiLights: o.hemi.length,
        numDirLightShadows: o.directionalShadowMap.length,
        numPointLightShadows: o.pointShadowMap.length,
        numSpotLightShadows: o.spotShadowMap.length,
        numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps,
        numClippingPlanes: a.numPlanes,
        numClipIntersection: a.numIntersection,
        dithering: s.dithering,
        shadowMapEnabled: e.shadowMap.enabled && c.length > 0,
        shadowMapType: e.shadowMap.type,
        toneMapping: s.toneMapped ? e.toneMapping : Te,
        physicallyCorrectLights: e.physicallyCorrectLights,
        premultipliedAlpha: s.premultipliedAlpha,
        doubleSided: s.side === j,
        flipSided: s.side === W,
        useDepthPacking: !!s.depthPacking,
        depthPacking: s.depthPacking || 0,
        index0AttributeName: s.index0AttributeName,
        extensionDerivatives: s.extensions && s.extensions.derivatives,
        extensionFragDepth: s.extensions && s.extensions.fragDepth,
        extensionDrawBuffers: s.extensions && s.extensions.drawBuffers,
        extensionShaderTextureLOD:
          s.extensions && s.extensions.shaderTextureLOD,
        rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
        rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
        rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
        customProgramCacheKey: s.customProgramCacheKey(),
      };
    },
    getProgramCacheKey: function (t) {
      const i = [];
      if (
        (t.shaderID
          ? i.push(t.shaderID)
          : (i.push(t.customVertexShaderID), i.push(t.customFragmentShaderID)),
        void 0 !== t.defines)
      )
        for (const e in t.defines) i.push(e), i.push(t.defines[e]);
      return (
        !1 === t.isRawShaderMaterial &&
          (!(function (e, t) {
            e.push(t.precision),
              e.push(t.outputEncoding),
              e.push(t.envMapMode),
              e.push(t.envMapCubeUVHeight),
              e.push(t.combine),
              e.push(t.vertexUvs),
              e.push(t.fogExp2),
              e.push(t.sizeAttenuation),
              e.push(t.morphTargetsCount),
              e.push(t.morphAttributeCount),
              e.push(t.numDirLights),
              e.push(t.numPointLights),
              e.push(t.numSpotLights),
              e.push(t.numSpotLightMaps),
              e.push(t.numHemiLights),
              e.push(t.numRectAreaLights),
              e.push(t.numDirLightShadows),
              e.push(t.numPointLightShadows),
              e.push(t.numSpotLightShadows),
              e.push(t.numSpotLightShadowsWithMaps),
              e.push(t.shadowMapType),
              e.push(t.toneMapping),
              e.push(t.numClippingPlanes),
              e.push(t.numClipIntersection),
              e.push(t.depthPacking);
          })(i, t),
          (function (e, t) {
            o.disableAll(), t.isWebGL2 && o.enable(0);
            t.supportsVertexTextures && o.enable(1);
            t.instancing && o.enable(2);
            t.instancingColor && o.enable(3);
            t.map && o.enable(4);
            t.matcap && o.enable(5);
            t.envMap && o.enable(6);
            t.lightMap && o.enable(7);
            t.aoMap && o.enable(8);
            t.emissiveMap && o.enable(9);
            t.bumpMap && o.enable(10);
            t.normalMap && o.enable(11);
            t.objectSpaceNormalMap && o.enable(12);
            t.tangentSpaceNormalMap && o.enable(13);
            t.clearcoat && o.enable(14);
            t.clearcoatMap && o.enable(15);
            t.clearcoatRoughnessMap && o.enable(16);
            t.clearcoatNormalMap && o.enable(17);
            t.iridescence && o.enable(18);
            t.iridescenceMap && o.enable(19);
            t.iridescenceThicknessMap && o.enable(20);
            t.displacementMap && o.enable(21);
            t.specularMap && o.enable(22);
            t.roughnessMap && o.enable(23);
            t.metalnessMap && o.enable(24);
            t.gradientMap && o.enable(25);
            t.alphaMap && o.enable(26);
            t.alphaTest && o.enable(27);
            t.vertexColors && o.enable(28);
            t.vertexAlphas && o.enable(29);
            t.vertexUvs && o.enable(30);
            t.vertexTangents && o.enable(31);
            t.uvsVertexOnly && o.enable(32);
            e.push(o.mask), o.disableAll(), t.fog && o.enable(0);
            t.useFog && o.enable(1);
            t.flatShading && o.enable(2);
            t.logarithmicDepthBuffer && o.enable(3);
            t.skinning && o.enable(4);
            t.morphTargets && o.enable(5);
            t.morphNormals && o.enable(6);
            t.morphColors && o.enable(7);
            t.premultipliedAlpha && o.enable(8);
            t.shadowMapEnabled && o.enable(9);
            t.physicallyCorrectLights && o.enable(10);
            t.doubleSided && o.enable(11);
            t.flipSided && o.enable(12);
            t.useDepthPacking && o.enable(13);
            t.dithering && o.enable(14);
            t.specularIntensityMap && o.enable(15);
            t.specularColorMap && o.enable(16);
            t.transmission && o.enable(17);
            t.transmissionMap && o.enable(18);
            t.thicknessMap && o.enable(19);
            t.sheen && o.enable(20);
            t.sheenColorMap && o.enable(21);
            t.sheenRoughnessMap && o.enable(22);
            t.decodeVideoTexture && o.enable(23);
            t.opaque && o.enable(24);
            e.push(o.mask);
          })(i, t),
          i.push(e.outputEncoding)),
        i.push(t.customProgramCacheKey),
        i.join()
      );
    },
    getUniforms: function (e) {
      const t = m[e.type];
      let i;
      if (t) {
        const e = ns[t];
        i = Ur.clone(e.uniforms);
      } else i = e.uniforms;
      return i;
    },
    acquireProgram: function (t, i) {
      let n;
      for (let e = 0, r = c.length; e < r; e++) {
        const t = c[e];
        if (t.cacheKey === i) {
          (n = t), ++n.usedTimes;
          break;
        }
      }
      return void 0 === n && ((n = new eo(e, i, t, s)), c.push(n)), n;
    },
    releaseProgram: function (e) {
      if (0 == --e.usedTimes) {
        const t = c.indexOf(e);
        (c[t] = c[c.length - 1]), c.pop(), e.destroy();
      }
    },
    releaseShaderCache: function (e) {
      l.remove(e);
    },
    programs: c,
    dispose: function () {
      l.dispose();
    },
  };
}
function so() {
  let e = new WeakMap();
  return {
    get: function (t) {
      let i = e.get(t);
      return void 0 === i && ((i = {}), e.set(t, i)), i;
    },
    remove: function (t) {
      e.delete(t);
    },
    update: function (t, i, n) {
      e.get(t)[i] = n;
    },
    dispose: function () {
      e = new WeakMap();
    },
  };
}
function ao(e, t) {
  return e.groupOrder !== t.groupOrder
    ? e.groupOrder - t.groupOrder
    : e.renderOrder !== t.renderOrder
    ? e.renderOrder - t.renderOrder
    : e.material.id !== t.material.id
    ? e.material.id - t.material.id
    : e.z !== t.z
    ? e.z - t.z
    : e.id - t.id;
}
function oo(e, t) {
  return e.groupOrder !== t.groupOrder
    ? e.groupOrder - t.groupOrder
    : e.renderOrder !== t.renderOrder
    ? e.renderOrder - t.renderOrder
    : e.z !== t.z
    ? t.z - e.z
    : e.id - t.id;
}
function lo() {
  const e = [];
  let t = 0;
  const i = [],
    n = [],
    r = [];
  function s(i, n, r, s, a, o) {
    let l = e[t];
    return (
      void 0 === l
        ? ((l = {
            id: i.id,
            object: i,
            geometry: n,
            material: r,
            groupOrder: s,
            renderOrder: i.renderOrder,
            z: a,
            group: o,
          }),
          (e[t] = l))
        : ((l.id = i.id),
          (l.object = i),
          (l.geometry = n),
          (l.material = r),
          (l.groupOrder = s),
          (l.renderOrder = i.renderOrder),
          (l.z = a),
          (l.group = o)),
      t++,
      l
    );
  }
  return {
    opaque: i,
    transmissive: n,
    transparent: r,
    init: function () {
      (t = 0), (i.length = 0), (n.length = 0), (r.length = 0);
    },
    push: function (e, t, a, o, l, c) {
      const h = s(e, t, a, o, l, c);
      a.transmission > 0
        ? n.push(h)
        : !0 === a.transparent
        ? r.push(h)
        : i.push(h);
    },
    unshift: function (e, t, a, o, l, c) {
      const h = s(e, t, a, o, l, c);
      a.transmission > 0
        ? n.unshift(h)
        : !0 === a.transparent
        ? r.unshift(h)
        : i.unshift(h);
    },
    finish: function () {
      for (let i = t, n = e.length; i < n; i++) {
        const t = e[i];
        if (null === t.id) break;
        (t.id = null),
          (t.object = null),
          (t.geometry = null),
          (t.material = null),
          (t.group = null);
      }
    },
    sort: function (e, t) {
      i.length > 1 && i.sort(e || ao),
        n.length > 1 && n.sort(t || oo),
        r.length > 1 && r.sort(t || oo);
    },
  };
}
function co() {
  let e = new WeakMap();
  return {
    get: function (t, i) {
      const n = e.get(t);
      let r;
      return (
        void 0 === n
          ? ((r = new lo()), e.set(t, [r]))
          : i >= n.length
          ? ((r = new lo()), n.push(r))
          : (r = n[i]),
        r
      );
    },
    dispose: function () {
      e = new WeakMap();
    },
  };
}
function ho() {
  const e = {};
  return {
    get: function (t) {
      if (void 0 !== e[t.id]) return e[t.id];
      let i;
      switch (t.type) {
        case "DirectionalLight":
          i = { direction: new Fi(), color: new Ei() };
          break;
        case "SpotLight":
          i = {
            position: new Fi(),
            direction: new Fi(),
            color: new Ei(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          i = { position: new Fi(), color: new Ei(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          i = {
            direction: new Fi(),
            skyColor: new Ei(),
            groundColor: new Ei(),
          };
          break;
        case "RectAreaLight":
          i = {
            color: new Ei(),
            position: new Fi(),
            halfWidth: new Fi(),
            halfHeight: new Fi(),
          };
      }
      return (e[t.id] = i), i;
    },
  };
}
let uo = 0;
function po(e, t) {
  return (
    (t.castShadow ? 2 : 0) -
    (e.castShadow ? 2 : 0) +
    (t.map ? 1 : 0) -
    (e.map ? 1 : 0)
  );
}
function mo(e, t) {
  const i = new ho(),
    n = (function () {
      const e = {};
      return {
        get: function (t) {
          if (void 0 !== e[t.id]) return e[t.id];
          let i;
          switch (t.type) {
            case "DirectionalLight":
            case "SpotLight":
              i = {
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new di(),
              };
              break;
            case "PointLight":
              i = {
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new di(),
                shadowCameraNear: 1,
                shadowCameraFar: 1e3,
              };
          }
          return (e[t.id] = i), i;
        },
      };
    })(),
    r = {
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
        numSpotMaps: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
    };
  for (let l = 0; l < 9; l++) r.probe.push(new Fi());
  const s = new Fi(),
    a = new fn(),
    o = new fn();
  return {
    setup: function (s, a) {
      let o = 0,
        l = 0,
        c = 0;
      for (let e = 0; e < 9; e++) r.probe[e].set(0, 0, 0);
      let h = 0,
        u = 0,
        d = 0,
        p = 0,
        m = 0,
        f = 0,
        g = 0,
        v = 0,
        _ = 0,
        x = 0;
      s.sort(po);
      const y = !0 !== a ? Math.PI : 1;
      for (let e = 0, t = s.length; e < t; e++) {
        const t = s[e],
          a = t.color,
          b = t.intensity,
          M = t.distance,
          w = t.shadow && t.shadow.map ? t.shadow.map.texture : null;
        if (t.isAmbientLight)
          (o += a.r * b * y), (l += a.g * b * y), (c += a.b * b * y);
        else if (t.isLightProbe)
          for (let e = 0; e < 9; e++)
            r.probe[e].addScaledVector(t.sh.coefficients[e], b);
        else if (t.isDirectionalLight) {
          const e = i.get(t);
          if (
            (e.color.copy(t.color).multiplyScalar(t.intensity * y),
            t.castShadow)
          ) {
            const e = t.shadow,
              i = n.get(t);
            (i.shadowBias = e.bias),
              (i.shadowNormalBias = e.normalBias),
              (i.shadowRadius = e.radius),
              (i.shadowMapSize = e.mapSize),
              (r.directionalShadow[h] = i),
              (r.directionalShadowMap[h] = w),
              (r.directionalShadowMatrix[h] = t.shadow.matrix),
              f++;
          }
          (r.directional[h] = e), h++;
        } else if (t.isSpotLight) {
          const e = i.get(t);
          e.position.setFromMatrixPosition(t.matrixWorld),
            e.color.copy(a).multiplyScalar(b * y),
            (e.distance = M),
            (e.coneCos = Math.cos(t.angle)),
            (e.penumbraCos = Math.cos(t.angle * (1 - t.penumbra))),
            (e.decay = t.decay),
            (r.spot[d] = e);
          const s = t.shadow;
          if (
            (t.map &&
              ((r.spotLightMap[_] = t.map),
              _++,
              s.updateMatrices(t),
              t.castShadow && x++),
            (r.spotLightMatrix[d] = s.matrix),
            t.castShadow)
          ) {
            const e = n.get(t);
            (e.shadowBias = s.bias),
              (e.shadowNormalBias = s.normalBias),
              (e.shadowRadius = s.radius),
              (e.shadowMapSize = s.mapSize),
              (r.spotShadow[d] = e),
              (r.spotShadowMap[d] = w),
              v++;
          }
          d++;
        } else if (t.isRectAreaLight) {
          const e = i.get(t);
          e.color.copy(a).multiplyScalar(b),
            e.halfWidth.set(0.5 * t.width, 0, 0),
            e.halfHeight.set(0, 0.5 * t.height, 0),
            (r.rectArea[p] = e),
            p++;
        } else if (t.isPointLight) {
          const e = i.get(t);
          if (
            (e.color.copy(t.color).multiplyScalar(t.intensity * y),
            (e.distance = t.distance),
            (e.decay = t.decay),
            t.castShadow)
          ) {
            const e = t.shadow,
              i = n.get(t);
            (i.shadowBias = e.bias),
              (i.shadowNormalBias = e.normalBias),
              (i.shadowRadius = e.radius),
              (i.shadowMapSize = e.mapSize),
              (i.shadowCameraNear = e.camera.near),
              (i.shadowCameraFar = e.camera.far),
              (r.pointShadow[u] = i),
              (r.pointShadowMap[u] = w),
              (r.pointShadowMatrix[u] = t.shadow.matrix),
              g++;
          }
          (r.point[u] = e), u++;
        } else if (t.isHemisphereLight) {
          const e = i.get(t);
          e.skyColor.copy(t.color).multiplyScalar(b * y),
            e.groundColor.copy(t.groundColor).multiplyScalar(b * y),
            (r.hemi[m] = e),
            m++;
        }
      }
      p > 0 &&
        (t.isWebGL2 || !0 === e.has("OES_texture_float_linear")
          ? ((r.rectAreaLTC1 = is.LTC_FLOAT_1),
            (r.rectAreaLTC2 = is.LTC_FLOAT_2))
          : !0 === e.has("OES_texture_half_float_linear")
          ? ((r.rectAreaLTC1 = is.LTC_HALF_1), (r.rectAreaLTC2 = is.LTC_HALF_2))
          : console.error(
              "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
            )),
        (r.ambient[0] = o),
        (r.ambient[1] = l),
        (r.ambient[2] = c);
      const b = r.hash;
      (b.directionalLength === h &&
        b.pointLength === u &&
        b.spotLength === d &&
        b.rectAreaLength === p &&
        b.hemiLength === m &&
        b.numDirectionalShadows === f &&
        b.numPointShadows === g &&
        b.numSpotShadows === v &&
        b.numSpotMaps === _) ||
        ((r.directional.length = h),
        (r.spot.length = d),
        (r.rectArea.length = p),
        (r.point.length = u),
        (r.hemi.length = m),
        (r.directionalShadow.length = f),
        (r.directionalShadowMap.length = f),
        (r.pointShadow.length = g),
        (r.pointShadowMap.length = g),
        (r.spotShadow.length = v),
        (r.spotShadowMap.length = v),
        (r.directionalShadowMatrix.length = f),
        (r.pointShadowMatrix.length = g),
        (r.spotLightMatrix.length = v + _ - x),
        (r.spotLightMap.length = _),
        (r.numSpotLightShadowsWithMaps = x),
        (b.directionalLength = h),
        (b.pointLength = u),
        (b.spotLength = d),
        (b.rectAreaLength = p),
        (b.hemiLength = m),
        (b.numDirectionalShadows = f),
        (b.numPointShadows = g),
        (b.numSpotShadows = v),
        (b.numSpotMaps = _),
        (r.version = uo++));
    },
    setupView: function (e, t) {
      let i = 0,
        n = 0,
        l = 0,
        c = 0,
        h = 0;
      const u = t.matrixWorldInverse;
      for (let d = 0, p = e.length; d < p; d++) {
        const t = e[d];
        if (t.isDirectionalLight) {
          const e = r.directional[i];
          e.direction.setFromMatrixPosition(t.matrixWorld),
            s.setFromMatrixPosition(t.target.matrixWorld),
            e.direction.sub(s),
            e.direction.transformDirection(u),
            i++;
        } else if (t.isSpotLight) {
          const e = r.spot[l];
          e.position.setFromMatrixPosition(t.matrixWorld),
            e.position.applyMatrix4(u),
            e.direction.setFromMatrixPosition(t.matrixWorld),
            s.setFromMatrixPosition(t.target.matrixWorld),
            e.direction.sub(s),
            e.direction.transformDirection(u),
            l++;
        } else if (t.isRectAreaLight) {
          const e = r.rectArea[c];
          e.position.setFromMatrixPosition(t.matrixWorld),
            e.position.applyMatrix4(u),
            o.identity(),
            a.copy(t.matrixWorld),
            a.premultiply(u),
            o.extractRotation(a),
            e.halfWidth.set(0.5 * t.width, 0, 0),
            e.halfHeight.set(0, 0.5 * t.height, 0),
            e.halfWidth.applyMatrix4(o),
            e.halfHeight.applyMatrix4(o),
            c++;
        } else if (t.isPointLight) {
          const e = r.point[n];
          e.position.setFromMatrixPosition(t.matrixWorld),
            e.position.applyMatrix4(u),
            n++;
        } else if (t.isHemisphereLight) {
          const e = r.hemi[h];
          e.direction.setFromMatrixPosition(t.matrixWorld),
            e.direction.transformDirection(u),
            h++;
        }
      }
    },
    state: r,
  };
}
function fo(e, t) {
  const i = new mo(e, t),
    n = [],
    r = [];
  return {
    init: function () {
      (n.length = 0), (r.length = 0);
    },
    state: { lightsArray: n, shadowsArray: r, lights: i },
    setupLights: function (e) {
      i.setup(n, e);
    },
    setupLightsView: function (e) {
      i.setupView(n, e);
    },
    pushLight: function (e) {
      n.push(e);
    },
    pushShadow: function (e) {
      r.push(e);
    },
  };
}
function go(e, t) {
  let i = new WeakMap();
  return {
    get: function (n, r = 0) {
      const s = i.get(n);
      let a;
      return (
        void 0 === s
          ? ((a = new fo(e, t)), i.set(n, [a]))
          : r >= s.length
          ? ((a = new fo(e, t)), s.push(a))
          : (a = s[r]),
        a
      );
    },
    dispose: function () {
      i = new WeakMap();
    },
  };
}
class vo extends $n {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = 3200),
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
class _o extends $n {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.referencePosition = new Fi()),
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
const xo = "void main(){gl_Position=vec4(position,1.0);}",
  yo =
    "uniform sampler2D shadow_pass;uniform vec2 resolution;uniform float radius;\n#include <packing>\nvoid main(){const float samples=float(VSM_SAMPLES);float mean=0.0;float squared_mean=0.0;float uvStride=samples<=1.0?0.0:2.0/(samples-1.0);float uvStart=samples<=1.0?0.0:-1.0;for(float i=0.0;i<samples;i++){float uvOffset=uvStart+i*uvStride;\n#ifdef HORIZONTAL_PASS\nvec2 distribution=unpackRGBATo2Half(texture2D(shadow_pass,(gl_FragCoord.xy+vec2(uvOffset,0.0)*radius)/resolution));mean+=distribution.x;squared_mean+=distribution.y*distribution.y+distribution.x*distribution.x;\n#else\nfloat depth=unpackRGBAToDepth(texture2D(shadow_pass,(gl_FragCoord.xy+vec2(0.0,uvOffset)*radius)/resolution));mean+=depth;squared_mean+=depth*depth;\n#endif\n}mean=mean/samples;squared_mean=squared_mean/samples;float std_dev=sqrt(squared_mean-mean*mean);gl_FragColor=pack2HalfToRGBA(vec2(mean,std_dev));}";
function bo(e, t, i) {
  let n = new Jr();
  const r = new di(),
    s = new di(),
    a = new Ii(),
    o = new vo({ depthPacking: qt }),
    l = new _o(),
    c = {},
    h = i.maxTextureSize,
    u = { 0: W, 1: G, 2: j },
    d = new Fr({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new di() },
        radius: { value: 4 },
      },
      vertexShader: xo,
      fragmentShader: yo,
    }),
    p = d.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const m = new mr();
  m.setAttribute(
    "position",
    new nr(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const f = new Dr(m, d),
    g = this;
  function v(i, n) {
    const s = t.update(f);
    d.defines.VSM_SAMPLES !== i.blurSamples &&
      ((d.defines.VSM_SAMPLES = i.blurSamples),
      (p.defines.VSM_SAMPLES = i.blurSamples),
      (d.needsUpdate = !0),
      (p.needsUpdate = !0)),
      null === i.mapPass && (i.mapPass = new Oi(r.x, r.y)),
      (d.uniforms.shadow_pass.value = i.map.texture),
      (d.uniforms.resolution.value = i.mapSize),
      (d.uniforms.radius.value = i.radius),
      e.setRenderTarget(i.mapPass),
      e.clear(),
      e.renderBufferDirect(n, null, s, d, f, null),
      (p.uniforms.shadow_pass.value = i.mapPass.texture),
      (p.uniforms.resolution.value = i.mapSize),
      (p.uniforms.radius.value = i.radius),
      e.setRenderTarget(i.map),
      e.clear(),
      e.renderBufferDirect(n, null, s, p, f, null);
  }
  function _(t, i, n, r, s, a) {
    let h = null;
    const d =
      !0 === n.isPointLight ? t.customDistanceMaterial : t.customDepthMaterial;
    if (
      ((h = void 0 !== d ? d : !0 === n.isPointLight ? l : o),
      (e.localClippingEnabled &&
        !0 === i.clipShadows &&
        Array.isArray(i.clippingPlanes) &&
        0 !== i.clippingPlanes.length) ||
        (i.displacementMap && 0 !== i.displacementScale) ||
        (i.alphaMap && i.alphaTest > 0))
    ) {
      const e = h.uuid,
        t = i.uuid;
      let n = c[e];
      void 0 === n && ((n = {}), (c[e] = n));
      let r = n[t];
      void 0 === r && ((r = h.clone()), (n[t] = r)), (h = r);
    }
    return (
      (h.visible = i.visible),
      (h.wireframe = i.wireframe),
      (h.side =
        a === H
          ? null !== i.shadowSide
            ? i.shadowSide
            : i.side
          : null !== i.shadowSide
          ? i.shadowSide
          : u[i.side]),
      (h.alphaMap = i.alphaMap),
      (h.alphaTest = i.alphaTest),
      (h.clipShadows = i.clipShadows),
      (h.clippingPlanes = i.clippingPlanes),
      (h.clipIntersection = i.clipIntersection),
      (h.displacementMap = i.displacementMap),
      (h.displacementScale = i.displacementScale),
      (h.displacementBias = i.displacementBias),
      (h.wireframeLinewidth = i.wireframeLinewidth),
      (h.linewidth = i.linewidth),
      !0 === n.isPointLight &&
        !0 === h.isMeshDistanceMaterial &&
        (h.referencePosition.setFromMatrixPosition(n.matrixWorld),
        (h.nearDistance = r),
        (h.farDistance = s)),
      h
    );
  }
  function x(i, r, s, a, o) {
    if (!1 === i.visible) return;
    if (
      i.layers.test(r.layers) &&
      (i.isMesh || i.isLine || i.isPoints) &&
      (i.castShadow || (i.receiveShadow && o === H)) &&
      (!i.frustumCulled || n.intersectsObject(i))
    ) {
      i.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, i.matrixWorld);
      const n = t.update(i),
        r = i.material;
      if (Array.isArray(r)) {
        const t = n.groups;
        for (let l = 0, c = t.length; l < c; l++) {
          const c = t[l],
            h = r[c.materialIndex];
          if (h && h.visible) {
            const t = _(i, h, a, s.near, s.far, o);
            e.renderBufferDirect(s, null, n, t, i, c);
          }
        }
      } else if (r.visible) {
        const t = _(i, r, a, s.near, s.far, o);
        e.renderBufferDirect(s, null, n, t, i, null);
      }
    }
    const l = i.children;
    for (let e = 0, t = l.length; e < t; e++) x(l[e], r, s, a, o);
  }
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = B),
    (this.render = function (t, i, o) {
      if (!1 === g.enabled) return;
      if (!1 === g.autoUpdate && !1 === g.needsUpdate) return;
      if (0 === t.length) return;
      const l = e.getRenderTarget(),
        c = e.getActiveCubeFace(),
        u = e.getActiveMipmapLevel(),
        d = e.state;
      d.setBlending(q),
        d.buffers.color.setClear(1, 1, 1, 1),
        d.buffers.depth.setTest(!0),
        d.setScissorTest(!1);
      for (let p = 0, m = t.length; p < m; p++) {
        const l = t[p],
          c = l.shadow;
        if (void 0 === c) {
          console.warn("THREE.WebGLShadowMap:", l, "has no shadow.");
          continue;
        }
        if (!1 === c.autoUpdate && !1 === c.needsUpdate) continue;
        r.copy(c.mapSize);
        const u = c.getFrameExtents();
        if (
          (r.multiply(u),
          s.copy(c.mapSize),
          (r.x > h || r.y > h) &&
            (r.x > h &&
              ((s.x = Math.floor(h / u.x)),
              (r.x = s.x * u.x),
              (c.mapSize.x = s.x)),
            r.y > h &&
              ((s.y = Math.floor(h / u.y)),
              (r.y = s.y * u.y),
              (c.mapSize.y = s.y))),
          null === c.map)
        ) {
          const e = this.type !== H ? { minFilter: ke, magFilter: ke } : {};
          (c.map = new Oi(r.x, r.y, e)),
            (c.map.texture.name = l.name + ".shadowMap"),
            c.camera.updateProjectionMatrix();
        }
        e.setRenderTarget(c.map), e.clear();
        const m = c.getViewportCount();
        for (let e = 0; e < m; e++) {
          const t = c.getViewport(e);
          a.set(s.x * t.x, s.y * t.y, s.x * t.z, s.y * t.w),
            d.viewport(a),
            c.updateMatrices(l, e),
            (n = c.getFrustum()),
            x(i, o, c.camera, l, this.type);
        }
        !0 !== c.isPointLightShadow && this.type === H && v(c, o),
          (c.needsUpdate = !1);
      }
      (g.needsUpdate = !1), e.setRenderTarget(l, c, u);
    });
}
function Mo(e, t, i) {
  const n = i.isWebGL2;
  const r = new (function () {
      let t = !1;
      const i = new Ii();
      let n = null;
      const r = new Ii(0, 0, 0, 0);
      return {
        setMask: function (i) {
          n === i || t || (e.colorMask(i, i, i, i), (n = i));
        },
        setLocked: function (e) {
          t = e;
        },
        setClear: function (t, n, s, a, o) {
          !0 === o && ((t *= a), (n *= a), (s *= a)),
            i.set(t, n, s, a),
            !1 === r.equals(i) && (e.clearColor(t, n, s, a), r.copy(i));
        },
        reset: function () {
          (t = !1), (n = null), r.set(-1, 0, 0, 0);
        },
      };
    })(),
    s = new (function () {
      let t = !1,
        i = null,
        n = null,
        r = null;
      return {
        setTest: function (e) {
          e ? G(2929) : Me(2929);
        },
        setMask: function (n) {
          i === n || t || (e.depthMask(n), (i = n));
        },
        setFunc: function (t) {
          if (n !== t) {
            switch (t) {
              case me:
                e.depthFunc(512);
                break;
              case fe:
                e.depthFunc(519);
                break;
              case ge:
                e.depthFunc(513);
                break;
              case ve:
                e.depthFunc(515);
                break;
              case _e:
                e.depthFunc(514);
                break;
              case xe:
                e.depthFunc(518);
                break;
              case ye:
                e.depthFunc(516);
                break;
              case be:
                e.depthFunc(517);
                break;
              default:
                e.depthFunc(515);
            }
            n = t;
          }
        },
        setLocked: function (e) {
          t = e;
        },
        setClear: function (t) {
          r !== t && (e.clearDepth(t), (r = t));
        },
        reset: function () {
          (t = !1), (i = null), (n = null), (r = null);
        },
      };
    })(),
    a = new (function () {
      let t = !1,
        i = null,
        n = null,
        r = null,
        s = null,
        a = null,
        o = null,
        l = null,
        c = null;
      return {
        setTest: function (e) {
          t || (e ? G(2960) : Me(2960));
        },
        setMask: function (n) {
          i === n || t || (e.stencilMask(n), (i = n));
        },
        setFunc: function (t, i, a) {
          (n === t && r === i && s === a) ||
            (e.stencilFunc(t, i, a), (n = t), (r = i), (s = a));
        },
        setOp: function (t, i, n) {
          (a === t && o === i && l === n) ||
            (e.stencilOp(t, i, n), (a = t), (o = i), (l = n));
        },
        setLocked: function (e) {
          t = e;
        },
        setClear: function (t) {
          c !== t && (e.clearStencil(t), (c = t));
        },
        reset: function () {
          (t = !1),
            (i = null),
            (n = null),
            (r = null),
            (s = null),
            (a = null),
            (o = null),
            (l = null),
            (c = null);
        },
      };
    })(),
    o = new WeakMap(),
    l = new WeakMap();
  let c = {},
    h = {},
    u = new WeakMap(),
    d = [],
    p = null,
    m = !1,
    f = null,
    g = null,
    v = null,
    _ = null,
    x = null,
    y = null,
    b = null,
    M = !1,
    w = null,
    S = null,
    T = null,
    E = null,
    A = null;
  const C = e.getParameter(35661);
  let P = !1,
    L = 0;
  const R = e.getParameter(7938);
  -1 !== R.indexOf("WebGL")
    ? ((L = parseFloat(/^WebGL (\d)/.exec(R)[1])), (P = L >= 1))
    : -1 !== R.indexOf("OpenGL ES") &&
      ((L = parseFloat(/^OpenGL ES (\d)/.exec(R)[1])), (P = L >= 2));
  let D = null,
    I = {};
  const O = e.getParameter(3088),
    N = e.getParameter(2978),
    k = new Ii().fromArray(O),
    B = new Ii().fromArray(N);
  function V(t, i, n) {
    const r = new Uint8Array(4),
      s = e.createTexture();
    e.bindTexture(t, s),
      e.texParameteri(t, 10241, 9728),
      e.texParameteri(t, 10240, 9728);
    for (let a = 0; a < n; a++)
      e.texImage2D(i + a, 0, 6408, 1, 1, 0, 6408, 5121, r);
    return s;
  }
  const H = {};
  function G(t) {
    !0 !== c[t] && (e.enable(t), (c[t] = !0));
  }
  function Me(t) {
    !1 !== c[t] && (e.disable(t), (c[t] = !1));
  }
  (H[3553] = V(3553, 3553, 1)),
    (H[34067] = V(34067, 34069, 6)),
    r.setClear(0, 0, 0, 1),
    s.setClear(1),
    a.setClear(0),
    G(2929),
    s.setFunc(ve),
    Ee(!1),
    Ae(U),
    G(2884),
    Te(q);
  const we = { [Q]: 32774, [$]: 32778, [ee]: 32779 };
  if (n) (we[te] = 32775), (we[ie] = 32776);
  else {
    const e = t.get("EXT_blend_minmax");
    null !== e && ((we[te] = e.MIN_EXT), (we[ie] = e.MAX_EXT));
  }
  const Se = {
    [ne]: 0,
    [re]: 1,
    [se]: 768,
    [oe]: 770,
    [pe]: 776,
    [ue]: 774,
    [ce]: 772,
    [ae]: 769,
    [le]: 771,
    [de]: 775,
    [he]: 773,
  };
  function Te(t, i, n, r, s, a, o, l) {
    if (t !== q) {
      if ((!1 === m && (G(3042), (m = !0)), t === J))
        (s = s || i),
          (a = a || n),
          (o = o || r),
          (i === g && s === x) ||
            (e.blendEquationSeparate(we[i], we[s]), (g = i), (x = s)),
          (n === v && r === _ && a === y && o === b) ||
            (e.blendFuncSeparate(Se[n], Se[r], Se[a], Se[o]),
            (v = n),
            (_ = r),
            (y = a),
            (b = o)),
          (f = t),
          (M = null);
      else if (t !== f || l !== M) {
        if (
          ((g === Q && x === Q) || (e.blendEquation(32774), (g = Q), (x = Q)),
          l)
        )
          switch (t) {
            case X:
              e.blendFuncSeparate(1, 771, 1, 771);
              break;
            case Y:
              e.blendFunc(1, 1);
              break;
            case K:
              e.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Z:
              e.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", t);
          }
        else
          switch (t) {
            case X:
              e.blendFuncSeparate(770, 771, 1, 771);
              break;
            case Y:
              e.blendFunc(770, 1);
              break;
            case K:
              e.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Z:
              e.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", t);
          }
        (v = null), (_ = null), (y = null), (b = null), (f = t), (M = l);
      }
    } else !0 === m && (Me(3042), (m = !1));
  }
  function Ee(t) {
    w !== t && (t ? e.frontFace(2304) : e.frontFace(2305), (w = t));
  }
  function Ae(t) {
    t !== z
      ? (G(2884),
        t !== S &&
          (t === U
            ? e.cullFace(1029)
            : t === F
            ? e.cullFace(1028)
            : e.cullFace(1032)))
      : Me(2884),
      (S = t);
  }
  function Ce(t, i, n) {
    t
      ? (G(32823),
        (E === i && A === n) || (e.polygonOffset(i, n), (E = i), (A = n)))
      : Me(32823);
  }
  return {
    buffers: { color: r, depth: s, stencil: a },
    enable: G,
    disable: Me,
    bindFramebuffer: function (t, i) {
      return (
        h[t] !== i &&
        (e.bindFramebuffer(t, i),
        (h[t] = i),
        n && (36009 === t && (h[36160] = i), 36160 === t && (h[36009] = i)),
        !0)
      );
    },
    drawBuffers: function (n, r) {
      let s = d,
        a = !1;
      if (n)
        if (
          ((s = u.get(r)),
          void 0 === s && ((s = []), u.set(r, s)),
          n.isWebGLMultipleRenderTargets)
        ) {
          const e = n.texture;
          if (s.length !== e.length || 36064 !== s[0]) {
            for (let t = 0, i = e.length; t < i; t++) s[t] = 36064 + t;
            (s.length = e.length), (a = !0);
          }
        } else 36064 !== s[0] && ((s[0] = 36064), (a = !0));
      else 1029 !== s[0] && ((s[0] = 1029), (a = !0));
      a &&
        (i.isWebGL2
          ? e.drawBuffers(s)
          : t.get("WEBGL_draw_buffers").drawBuffersWEBGL(s));
    },
    useProgram: function (t) {
      return p !== t && (e.useProgram(t), (p = t), !0);
    },
    setBlending: Te,
    setMaterial: function (e, t) {
      e.side === j ? Me(2884) : G(2884);
      let i = e.side === W;
      t && (i = !i),
        Ee(i),
        e.blending === X && !1 === e.transparent
          ? Te(q)
          : Te(
              e.blending,
              e.blendEquation,
              e.blendSrc,
              e.blendDst,
              e.blendEquationAlpha,
              e.blendSrcAlpha,
              e.blendDstAlpha,
              e.premultipliedAlpha
            ),
        s.setFunc(e.depthFunc),
        s.setTest(e.depthTest),
        s.setMask(e.depthWrite),
        r.setMask(e.colorWrite);
      const n = e.stencilWrite;
      a.setTest(n),
        n &&
          (a.setMask(e.stencilWriteMask),
          a.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask),
          a.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)),
        Ce(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits),
        !0 === e.alphaToCoverage ? G(32926) : Me(32926);
    },
    setFlipSided: Ee,
    setCullFace: Ae,
    setLineWidth: function (t) {
      t !== T && (P && e.lineWidth(t), (T = t));
    },
    setPolygonOffset: Ce,
    setScissorTest: function (e) {
      e ? G(3089) : Me(3089);
    },
    activeTexture: function (t) {
      void 0 === t && (t = 33984 + C - 1),
        D !== t && (e.activeTexture(t), (D = t));
    },
    bindTexture: function (t, i, n) {
      void 0 === n && (n = null === D ? 33984 + C - 1 : D);
      let r = I[n];
      void 0 === r && ((r = { type: void 0, texture: void 0 }), (I[n] = r)),
        (r.type === t && r.texture === i) ||
          (D !== n && (e.activeTexture(n), (D = n)),
          e.bindTexture(t, i || H[t]),
          (r.type = t),
          (r.texture = i));
    },
    unbindTexture: function () {
      const t = I[D];
      void 0 !== t &&
        void 0 !== t.type &&
        (e.bindTexture(t.type, null), (t.type = void 0), (t.texture = void 0));
    },
    compressedTexImage2D: function () {
      try {
        e.compressedTexImage2D.apply(e, arguments);
      } catch (t) {
        console.error("THREE.WebGLState:", t);
      }
    },
    compressedTexImage3D: function () {
      try {
        e.compressedTexImage3D.apply(e, arguments);
      } catch (t) {
        console.error("THREE.WebGLState:", t);
      }
    },
    texImage2D: function () {
      try {
        e.texImage2D.apply(e, arguments);
      } catch (t) {
        console.error("THREE.WebGLState:", t);
      }
    },
    texImage3D: function () {
      try {
        e.texImage3D.apply(e, arguments);
      } catch (t) {
        console.error("THREE.WebGLState:", t);
      }
    },
    updateUBOMapping: function (t, i) {
      let n = l.get(i);
      void 0 === n && ((n = new WeakMap()), l.set(i, n));
      let r = n.get(t);
      void 0 === r && ((r = e.getUniformBlockIndex(i, t.name)), n.set(t, r));
    },
    uniformBlockBinding: function (t, i) {
      const n = l.get(i).get(t);
      o.get(t) !== n &&
        (e.uniformBlockBinding(i, n, t.__bindingPointIndex), o.set(t, n));
    },
    texStorage2D: function () {
      try {
        e.texStorage2D.apply(e, arguments);
      } catch (t) {
        console.error("THREE.WebGLState:", t);
      }
    },
    texStorage3D: function () {
      try {
        e.texStorage3D.apply(e, arguments);
      } catch (t) {
        console.error("THREE.WebGLState:", t);
      }
    },
    texSubImage2D: function () {
      try {
        e.texSubImage2D.apply(e, arguments);
      } catch (t) {
        console.error("THREE.WebGLState:", t);
      }
    },
    texSubImage3D: function () {
      try {
        e.texSubImage3D.apply(e, arguments);
      } catch (t) {
        console.error("THREE.WebGLState:", t);
      }
    },
    compressedTexSubImage2D: function () {
      try {
        e.compressedTexSubImage2D.apply(e, arguments);
      } catch (t) {
        console.error("THREE.WebGLState:", t);
      }
    },
    compressedTexSubImage3D: function () {
      try {
        e.compressedTexSubImage3D.apply(e, arguments);
      } catch (t) {
        console.error("THREE.WebGLState:", t);
      }
    },
    scissor: function (t) {
      !1 === k.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), k.copy(t));
    },
    viewport: function (t) {
      !1 === B.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), B.copy(t));
    },
    reset: function () {
      e.disable(3042),
        e.disable(2884),
        e.disable(2929),
        e.disable(32823),
        e.disable(3089),
        e.disable(2960),
        e.disable(32926),
        e.blendEquation(32774),
        e.blendFunc(1, 0),
        e.blendFuncSeparate(1, 0, 1, 0),
        e.colorMask(!0, !0, !0, !0),
        e.clearColor(0, 0, 0, 0),
        e.depthMask(!0),
        e.depthFunc(513),
        e.clearDepth(1),
        e.stencilMask(4294967295),
        e.stencilFunc(519, 0, 4294967295),
        e.stencilOp(7680, 7680, 7680),
        e.clearStencil(0),
        e.cullFace(1029),
        e.frontFace(2305),
        e.polygonOffset(0, 0),
        e.activeTexture(33984),
        e.bindFramebuffer(36160, null),
        !0 === n &&
          (e.bindFramebuffer(36009, null), e.bindFramebuffer(36008, null)),
        e.useProgram(null),
        e.lineWidth(1),
        e.scissor(0, 0, e.canvas.width, e.canvas.height),
        e.viewport(0, 0, e.canvas.width, e.canvas.height),
        (c = {}),
        (D = null),
        (I = {}),
        (h = {}),
        (u = new WeakMap()),
        (d = []),
        (p = null),
        (m = !1),
        (f = null),
        (g = null),
        (v = null),
        (_ = null),
        (x = null),
        (y = null),
        (b = null),
        (M = !1),
        (w = null),
        (S = null),
        (T = null),
        (E = null),
        (A = null),
        k.set(0, 0, e.canvas.width, e.canvas.height),
        B.set(0, 0, e.canvas.width, e.canvas.height),
        r.reset(),
        s.reset(),
        a.reset();
    },
  };
}
function wo(e, t, i, n, r, s, a) {
  const o = r.isWebGL2,
    l = r.maxTextures,
    c = r.maxCubemapSize,
    h = r.maxTextureSize,
    u = r.maxSamples,
    d = t.has("WEBGL_multisampled_render_to_texture")
      ? t.get("WEBGL_multisampled_render_to_texture")
      : null,
    p = /OculusBrowser/g.test(
      "undefined" == typeof navigator ? "" : navigator.userAgent
    ),
    m = new WeakMap();
  let f;
  const g = new WeakMap();
  let v = !1;
  try {
    v =
      "undefined" != typeof OffscreenCanvas &&
      null !== new OffscreenCanvas(1, 1).getContext("2d");
  } catch (H) {}
  function _(e, t) {
    return v ? new OffscreenCanvas(e, t) : fi("canvas");
  }
  function x(e, t, i, n) {
    let r = 1;
    if (
      ((e.width > n || e.height > n) && (r = n / Math.max(e.width, e.height)),
      r < 1 || !0 === t)
    ) {
      if (
        ("undefined" != typeof HTMLImageElement &&
          e instanceof HTMLImageElement) ||
        ("undefined" != typeof HTMLCanvasElement &&
          e instanceof HTMLCanvasElement) ||
        ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap)
      ) {
        const n = t ? ci : Math.floor,
          s = n(r * e.width),
          a = n(r * e.height);
        void 0 === f && (f = _(s, a));
        const o = i ? _(s, a) : f;
        (o.width = s), (o.height = a);
        return (
          o.getContext("2d").drawImage(e, 0, 0, s, a),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              e.width +
              "x" +
              e.height +
              ") to (" +
              s +
              "x" +
              a +
              ")."
          ),
          o
        );
      }
      return (
        "data" in e &&
          console.warn(
            "THREE.WebGLRenderer: Image in DataTexture is too big (" +
              e.width +
              "x" +
              e.height +
              ")."
          ),
        e
      );
    }
    return e;
  }
  function y(e) {
    return li(e.width) && li(e.height);
  }
  function b(e, t) {
    return e.generateMipmaps && t && e.minFilter !== ke && e.minFilter !== He;
  }
  function M(t) {
    e.generateMipmap(t);
  }
  function w(i, n, r, s, a = !1) {
    if (!1 === o) return n;
    if (null !== i) {
      if (void 0 !== e[i]) return e[i];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          i +
          "'"
      );
    }
    let l = n;
    return (
      6403 === n &&
        (5126 === r && (l = 33326),
        5131 === r && (l = 33325),
        5121 === r && (l = 33321)),
      33319 === n &&
        (5126 === r && (l = 33328),
        5131 === r && (l = 33327),
        5121 === r && (l = 33323)),
      6408 === n &&
        (5126 === r && (l = 34836),
        5131 === r && (l = 34842),
        5121 === r && (l = s === jt && !1 === a ? 35907 : 32856),
        32819 === r && (l = 32854),
        32820 === r && (l = 32855)),
      (33325 !== l &&
        33326 !== l &&
        33327 !== l &&
        33328 !== l &&
        34842 !== l &&
        34836 !== l) ||
        t.get("EXT_color_buffer_float"),
      l
    );
  }
  function S(e, t, i) {
    return !0 === b(e, i) ||
      (e.isFramebufferTexture && e.minFilter !== ke && e.minFilter !== He)
      ? Math.log2(Math.max(t.width, t.height)) + 1
      : void 0 !== e.mipmaps && e.mipmaps.length > 0
      ? e.mipmaps.length
      : e.isCompressedTexture && Array.isArray(e.image)
      ? t.mipmaps.length
      : 1;
  }
  function T(e) {
    return e === ke || e === Be || e === Ve ? 9728 : 9729;
  }
  function E(e) {
    const t = e.target;
    t.removeEventListener("dispose", E),
      (function (e) {
        const t = n.get(e);
        if (void 0 === t.__webglInit) return;
        const i = e.source,
          r = g.get(i);
        if (r) {
          const n = r[t.__cacheKey];
          n.usedTimes--,
            0 === n.usedTimes && C(e),
            0 === Object.keys(r).length && g.delete(i);
        }
        n.remove(e);
      })(t),
      t.isVideoTexture && m.delete(t);
  }
  function A(t) {
    const i = t.target;
    i.removeEventListener("dispose", A),
      (function (t) {
        const i = t.texture,
          r = n.get(t),
          s = n.get(i);
        void 0 !== s.__webglTexture &&
          (e.deleteTexture(s.__webglTexture), a.memory.textures--);
        t.depthTexture && t.depthTexture.dispose();
        if (t.isWebGLCubeRenderTarget)
          for (let n = 0; n < 6; n++)
            e.deleteFramebuffer(r.__webglFramebuffer[n]),
              r.__webglDepthbuffer &&
                e.deleteRenderbuffer(r.__webglDepthbuffer[n]);
        else {
          if (
            (e.deleteFramebuffer(r.__webglFramebuffer),
            r.__webglDepthbuffer && e.deleteRenderbuffer(r.__webglDepthbuffer),
            r.__webglMultisampledFramebuffer &&
              e.deleteFramebuffer(r.__webglMultisampledFramebuffer),
            r.__webglColorRenderbuffer)
          )
            for (let t = 0; t < r.__webglColorRenderbuffer.length; t++)
              r.__webglColorRenderbuffer[t] &&
                e.deleteRenderbuffer(r.__webglColorRenderbuffer[t]);
          r.__webglDepthRenderbuffer &&
            e.deleteRenderbuffer(r.__webglDepthRenderbuffer);
        }
        if (t.isWebGLMultipleRenderTargets)
          for (let o = 0, l = i.length; o < l; o++) {
            const t = n.get(i[o]);
            t.__webglTexture &&
              (e.deleteTexture(t.__webglTexture), a.memory.textures--),
              n.remove(i[o]);
          }
        n.remove(i), n.remove(t);
      })(i);
  }
  function C(t) {
    const i = n.get(t);
    e.deleteTexture(i.__webglTexture);
    const r = t.source;
    delete g.get(r)[i.__cacheKey], a.memory.textures--;
  }
  let P = 0;
  function L(e, t) {
    const r = n.get(e);
    if (
      (e.isVideoTexture &&
        (function (e) {
          const t = a.render.frame;
          m.get(e) !== t && (m.set(e, t), e.update());
        })(e),
      !1 === e.isRenderTargetTexture &&
        e.version > 0 &&
        r.__version !== e.version)
    ) {
      const i = e.image;
      if (null === i)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else {
        if (!1 !== i.complete) return void N(r, e, t);
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      }
    }
    i.bindTexture(3553, r.__webglTexture, 33984 + t);
  }
  const R = { [ze]: 10497, [Ue]: 33071, [Fe]: 33648 },
    D = {
      [ke]: 9728,
      [Be]: 9984,
      [Ve]: 9986,
      [He]: 9729,
      [Ge]: 9985,
      [We]: 9987,
    };
  function I(i, s, a) {
    if (
      (a
        ? (e.texParameteri(i, 10242, R[s.wrapS]),
          e.texParameteri(i, 10243, R[s.wrapT]),
          (32879 !== i && 35866 !== i) || e.texParameteri(i, 32882, R[s.wrapR]),
          e.texParameteri(i, 10240, D[s.magFilter]),
          e.texParameteri(i, 10241, D[s.minFilter]))
        : (e.texParameteri(i, 10242, 33071),
          e.texParameteri(i, 10243, 33071),
          (32879 !== i && 35866 !== i) || e.texParameteri(i, 32882, 33071),
          (s.wrapS === Ue && s.wrapT === Ue) ||
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
            ),
          e.texParameteri(i, 10240, T(s.magFilter)),
          e.texParameteri(i, 10241, T(s.minFilter)),
          s.minFilter !== ke &&
            s.minFilter !== He &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
            )),
      !0 === t.has("EXT_texture_filter_anisotropic"))
    ) {
      const a = t.get("EXT_texture_filter_anisotropic");
      if (s.type === Je && !1 === t.has("OES_texture_float_linear")) return;
      if (
        !1 === o &&
        s.type === Qe &&
        !1 === t.has("OES_texture_half_float_linear")
      )
        return;
      (s.anisotropy > 1 || n.get(s).__currentAnisotropy) &&
        (e.texParameterf(
          i,
          a.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(s.anisotropy, r.getMaxAnisotropy())
        ),
        (n.get(s).__currentAnisotropy = s.anisotropy));
    }
  }
  function O(t, i) {
    let n = !1;
    void 0 === t.__webglInit &&
      ((t.__webglInit = !0), i.addEventListener("dispose", E));
    const r = i.source;
    let s = g.get(r);
    void 0 === s && ((s = {}), g.set(r, s));
    const o = (function (e) {
      const t = [];
      return (
        t.push(e.wrapS),
        t.push(e.wrapT),
        t.push(e.wrapR || 0),
        t.push(e.magFilter),
        t.push(e.minFilter),
        t.push(e.anisotropy),
        t.push(e.internalFormat),
        t.push(e.format),
        t.push(e.type),
        t.push(e.generateMipmaps),
        t.push(e.premultiplyAlpha),
        t.push(e.flipY),
        t.push(e.unpackAlignment),
        t.push(e.encoding),
        t.join()
      );
    })(i);
    if (o !== t.__cacheKey) {
      void 0 === s[o] &&
        ((s[o] = { texture: e.createTexture(), usedTimes: 0 }),
        a.memory.textures++,
        (n = !0)),
        s[o].usedTimes++;
      const r = s[t.__cacheKey];
      void 0 !== r && (s[t.__cacheKey].usedTimes--, 0 === r.usedTimes && C(i)),
        (t.__cacheKey = o),
        (t.__webglTexture = s[o].texture);
    }
    return n;
  }
  function N(t, r, a) {
    let l = 3553;
    (r.isDataArrayTexture || r.isCompressedArrayTexture) && (l = 35866),
      r.isData3DTexture && (l = 32879);
    const c = O(t, r),
      u = r.source;
    i.bindTexture(l, t.__webglTexture, 33984 + a);
    const d = n.get(u);
    if (u.version !== d.__version || !0 === c) {
      i.activeTexture(33984 + a),
        e.pixelStorei(37440, r.flipY),
        e.pixelStorei(37441, r.premultiplyAlpha),
        e.pixelStorei(3317, r.unpackAlignment),
        e.pixelStorei(37443, 0);
      const t =
        (function (e) {
          return (
            !o &&
            (e.wrapS !== Ue ||
              e.wrapT !== Ue ||
              (e.minFilter !== ke && e.minFilter !== He))
          );
        })(r) && !1 === y(r.image);
      let n = x(r.image, t, !1, h);
      n = V(r, n);
      const p = y(n) || o,
        m = s.convert(r.format, r.encoding);
      let f,
        g = s.convert(r.type),
        v = w(r.internalFormat, m, g, r.encoding, r.isVideoTexture);
      I(l, r, p);
      const _ = r.mipmaps,
        T = o && !0 !== r.isVideoTexture,
        E = void 0 === d.__version || !0 === c,
        A = S(r, n, p);
      if (r.isDepthTexture)
        (v = 6402),
          o
            ? (v =
                r.type === Je
                  ? 36012
                  : r.type === Ze
                  ? 33190
                  : r.type === tt
                  ? 35056
                  : 33189)
            : r.type === Je &&
              console.error(
                "WebGLRenderer: Floating point depth texture requires WebGL2."
              ),
          r.format === ot &&
            6402 === v &&
            r.type !== Ye &&
            r.type !== Ze &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
            ),
            (r.type = Ze),
            (g = s.convert(r.type))),
          r.format === lt &&
            6402 === v &&
            ((v = 34041),
            r.type !== tt &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
              ),
              (r.type = tt),
              (g = s.convert(r.type)))),
          E &&
            (T
              ? i.texStorage2D(3553, 1, v, n.width, n.height)
              : i.texImage2D(3553, 0, v, n.width, n.height, 0, m, g, null));
      else if (r.isDataTexture)
        if (_.length > 0 && p) {
          T && E && i.texStorage2D(3553, A, v, _[0].width, _[0].height);
          for (let e = 0, t = _.length; e < t; e++)
            (f = _[e]),
              T
                ? i.texSubImage2D(
                    3553,
                    e,
                    0,
                    0,
                    f.width,
                    f.height,
                    m,
                    g,
                    f.data
                  )
                : i.texImage2D(3553, e, v, f.width, f.height, 0, m, g, f.data);
          r.generateMipmaps = !1;
        } else
          T
            ? (E && i.texStorage2D(3553, A, v, n.width, n.height),
              i.texSubImage2D(3553, 0, 0, 0, n.width, n.height, m, g, n.data))
            : i.texImage2D(3553, 0, v, n.width, n.height, 0, m, g, n.data);
      else if (r.isCompressedTexture)
        if (r.isCompressedArrayTexture) {
          T &&
            E &&
            i.texStorage3D(35866, A, v, _[0].width, _[0].height, n.depth);
          for (let e = 0, t = _.length; e < t; e++)
            (f = _[e]),
              r.format !== rt
                ? null !== m
                  ? T
                    ? i.compressedTexSubImage3D(
                        35866,
                        e,
                        0,
                        0,
                        0,
                        f.width,
                        f.height,
                        n.depth,
                        m,
                        f.data,
                        0,
                        0
                      )
                    : i.compressedTexImage3D(
                        35866,
                        e,
                        v,
                        f.width,
                        f.height,
                        n.depth,
                        0,
                        f.data,
                        0,
                        0
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : T
                ? i.texSubImage3D(
                    35866,
                    e,
                    0,
                    0,
                    0,
                    f.width,
                    f.height,
                    n.depth,
                    m,
                    g,
                    f.data
                  )
                : i.texImage3D(
                    35866,
                    e,
                    v,
                    f.width,
                    f.height,
                    n.depth,
                    0,
                    m,
                    g,
                    f.data
                  );
        } else {
          T && E && i.texStorage2D(3553, A, v, _[0].width, _[0].height);
          for (let e = 0, t = _.length; e < t; e++)
            (f = _[e]),
              r.format !== rt
                ? null !== m
                  ? T
                    ? i.compressedTexSubImage2D(
                        3553,
                        e,
                        0,
                        0,
                        f.width,
                        f.height,
                        m,
                        f.data
                      )
                    : i.compressedTexImage2D(
                        3553,
                        e,
                        v,
                        f.width,
                        f.height,
                        0,
                        f.data
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : T
                ? i.texSubImage2D(
                    3553,
                    e,
                    0,
                    0,
                    f.width,
                    f.height,
                    m,
                    g,
                    f.data
                  )
                : i.texImage2D(3553, e, v, f.width, f.height, 0, m, g, f.data);
        }
      else if (r.isDataArrayTexture)
        T
          ? (E && i.texStorage3D(35866, A, v, n.width, n.height, n.depth),
            i.texSubImage3D(
              35866,
              0,
              0,
              0,
              0,
              n.width,
              n.height,
              n.depth,
              m,
              g,
              n.data
            ))
          : i.texImage3D(
              35866,
              0,
              v,
              n.width,
              n.height,
              n.depth,
              0,
              m,
              g,
              n.data
            );
      else if (r.isData3DTexture)
        T
          ? (E && i.texStorage3D(32879, A, v, n.width, n.height, n.depth),
            i.texSubImage3D(
              32879,
              0,
              0,
              0,
              0,
              n.width,
              n.height,
              n.depth,
              m,
              g,
              n.data
            ))
          : i.texImage3D(
              32879,
              0,
              v,
              n.width,
              n.height,
              n.depth,
              0,
              m,
              g,
              n.data
            );
      else if (r.isFramebufferTexture) {
        if (E)
          if (T) i.texStorage2D(3553, A, v, n.width, n.height);
          else {
            let e = n.width,
              t = n.height;
            for (let n = 0; n < A; n++)
              i.texImage2D(3553, n, v, e, t, 0, m, g, null),
                (e >>= 1),
                (t >>= 1);
          }
      } else if (_.length > 0 && p) {
        T && E && i.texStorage2D(3553, A, v, _[0].width, _[0].height);
        for (let e = 0, t = _.length; e < t; e++)
          (f = _[e]),
            T
              ? i.texSubImage2D(3553, e, 0, 0, m, g, f)
              : i.texImage2D(3553, e, v, m, g, f);
        r.generateMipmaps = !1;
      } else
        T
          ? (E && i.texStorage2D(3553, A, v, n.width, n.height),
            i.texSubImage2D(3553, 0, 0, 0, m, g, n))
          : i.texImage2D(3553, 0, v, m, g, n);
      b(r, p) && M(l), (d.__version = u.version), r.onUpdate && r.onUpdate(r);
    }
    t.__version = r.version;
  }
  function z(t, r, a, o, l) {
    const c = s.convert(a.format, a.encoding),
      h = s.convert(a.type),
      u = w(a.internalFormat, c, h, a.encoding);
    n.get(r).__hasExternalTextures ||
      (32879 === l || 35866 === l
        ? i.texImage3D(l, 0, u, r.width, r.height, r.depth, 0, c, h, null)
        : i.texImage2D(l, 0, u, r.width, r.height, 0, c, h, null)),
      i.bindFramebuffer(36160, t),
      B(r)
        ? d.framebufferTexture2DMultisampleEXT(
            36160,
            o,
            l,
            n.get(a).__webglTexture,
            0,
            k(r)
          )
        : (3553 === l || (l >= 34069 && l <= 34074)) &&
          e.framebufferTexture2D(36160, o, l, n.get(a).__webglTexture, 0),
      i.bindFramebuffer(36160, null);
  }
  function U(t, i, n) {
    if ((e.bindRenderbuffer(36161, t), i.depthBuffer && !i.stencilBuffer)) {
      let r = 33189;
      if (n || B(i)) {
        const t = i.depthTexture;
        t &&
          t.isDepthTexture &&
          (t.type === Je ? (r = 36012) : t.type === Ze && (r = 33190));
        const n = k(i);
        B(i)
          ? d.renderbufferStorageMultisampleEXT(36161, n, r, i.width, i.height)
          : e.renderbufferStorageMultisample(36161, n, r, i.width, i.height);
      } else e.renderbufferStorage(36161, r, i.width, i.height);
      e.framebufferRenderbuffer(36160, 36096, 36161, t);
    } else if (i.depthBuffer && i.stencilBuffer) {
      const r = k(i);
      n && !1 === B(i)
        ? e.renderbufferStorageMultisample(36161, r, 35056, i.width, i.height)
        : B(i)
        ? d.renderbufferStorageMultisampleEXT(
            36161,
            r,
            35056,
            i.width,
            i.height
          )
        : e.renderbufferStorage(36161, 34041, i.width, i.height),
        e.framebufferRenderbuffer(36160, 33306, 36161, t);
    } else {
      const t = !0 === i.isWebGLMultipleRenderTargets ? i.texture : [i.texture];
      for (let r = 0; r < t.length; r++) {
        const a = t[r],
          o = s.convert(a.format, a.encoding),
          l = s.convert(a.type),
          c = w(a.internalFormat, o, l, a.encoding),
          h = k(i);
        n && !1 === B(i)
          ? e.renderbufferStorageMultisample(36161, h, c, i.width, i.height)
          : B(i)
          ? d.renderbufferStorageMultisampleEXT(36161, h, c, i.width, i.height)
          : e.renderbufferStorage(36161, c, i.width, i.height);
      }
    }
    e.bindRenderbuffer(36161, null);
  }
  function F(t) {
    const r = n.get(t),
      s = !0 === t.isWebGLCubeRenderTarget;
    if (t.depthTexture && !r.__autoAllocateDepthBuffer) {
      if (s)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      !(function (t, r) {
        if (r && r.isWebGLCubeRenderTarget)
          throw new Error(
            "Depth Texture with cube render targets is not supported"
          );
        if (
          (i.bindFramebuffer(36160, t),
          !r.depthTexture || !r.depthTexture.isDepthTexture)
        )
          throw new Error(
            "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
          );
        (n.get(r.depthTexture).__webglTexture &&
          r.depthTexture.image.width === r.width &&
          r.depthTexture.image.height === r.height) ||
          ((r.depthTexture.image.width = r.width),
          (r.depthTexture.image.height = r.height),
          (r.depthTexture.needsUpdate = !0)),
          L(r.depthTexture, 0);
        const s = n.get(r.depthTexture).__webglTexture,
          a = k(r);
        if (r.depthTexture.format === ot)
          B(r)
            ? d.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, s, 0, a)
            : e.framebufferTexture2D(36160, 36096, 3553, s, 0);
        else {
          if (r.depthTexture.format !== lt)
            throw new Error("Unknown depthTexture format");
          B(r)
            ? d.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, s, 0, a)
            : e.framebufferTexture2D(36160, 33306, 3553, s, 0);
        }
      })(r.__webglFramebuffer, t);
    } else if (s) {
      r.__webglDepthbuffer = [];
      for (let n = 0; n < 6; n++)
        i.bindFramebuffer(36160, r.__webglFramebuffer[n]),
          (r.__webglDepthbuffer[n] = e.createRenderbuffer()),
          U(r.__webglDepthbuffer[n], t, !1);
    } else
      i.bindFramebuffer(36160, r.__webglFramebuffer),
        (r.__webglDepthbuffer = e.createRenderbuffer()),
        U(r.__webglDepthbuffer, t, !1);
    i.bindFramebuffer(36160, null);
  }
  function k(e) {
    return Math.min(u, e.samples);
  }
  function B(e) {
    const i = n.get(e);
    return (
      o &&
      e.samples > 0 &&
      !0 === t.has("WEBGL_multisampled_render_to_texture") &&
      !1 !== i.__useRenderToTexture
    );
  }
  function V(e, i) {
    const n = e.encoding,
      r = e.format,
      s = e.type;
    return (
      !0 === e.isCompressedTexture ||
        !0 === e.isVideoTexture ||
        e.format === ei ||
        (n !== Wt &&
          (n === jt
            ? !1 === o
              ? !0 === t.has("EXT_sRGB") && r === rt
                ? ((e.format = ei),
                  (e.minFilter = He),
                  (e.generateMipmaps = !1))
                : (i = Ci.sRGBToLinear(i))
              : (r === rt && s === je) ||
                console.warn(
                  "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture encoding:",
                n
              ))),
      i
    );
  }
  (this.allocateTextureUnit = function () {
    const e = P;
    return (
      e >= l &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            e +
            " texture units while this GPU supports only " +
            l
        ),
      (P += 1),
      e
    );
  }),
    (this.resetTextureUnits = function () {
      P = 0;
    }),
    (this.setTexture2D = L),
    (this.setTexture2DArray = function (e, t) {
      const r = n.get(e);
      e.version > 0 && r.__version !== e.version
        ? N(r, e, t)
        : i.bindTexture(35866, r.__webglTexture, 33984 + t);
    }),
    (this.setTexture3D = function (e, t) {
      const r = n.get(e);
      e.version > 0 && r.__version !== e.version
        ? N(r, e, t)
        : i.bindTexture(32879, r.__webglTexture, 33984 + t);
    }),
    (this.setTextureCube = function (t, r) {
      const a = n.get(t);
      t.version > 0 && a.__version !== t.version
        ? (function (t, r, a) {
            if (6 !== r.image.length) return;
            const l = O(t, r),
              h = r.source;
            i.bindTexture(34067, t.__webglTexture, 33984 + a);
            const u = n.get(h);
            if (h.version !== u.__version || !0 === l) {
              i.activeTexture(33984 + a),
                e.pixelStorei(37440, r.flipY),
                e.pixelStorei(37441, r.premultiplyAlpha),
                e.pixelStorei(3317, r.unpackAlignment),
                e.pixelStorei(37443, 0);
              const t = r.isCompressedTexture || r.image[0].isCompressedTexture,
                n = r.image[0] && r.image[0].isDataTexture,
                d = [];
              for (let e = 0; e < 6; e++)
                (d[e] =
                  t || n
                    ? n
                      ? r.image[e].image
                      : r.image[e]
                    : x(r.image[e], !1, !0, c)),
                  (d[e] = V(r, d[e]));
              const p = d[0],
                m = y(p) || o,
                f = s.convert(r.format, r.encoding),
                g = s.convert(r.type),
                v = w(r.internalFormat, f, g, r.encoding),
                _ = o && !0 !== r.isVideoTexture,
                T = void 0 === u.__version || !0 === l;
              let E,
                A = S(r, p, m);
              if ((I(34067, r, m), t)) {
                _ && T && i.texStorage2D(34067, A, v, p.width, p.height);
                for (let e = 0; e < 6; e++) {
                  E = d[e].mipmaps;
                  for (let t = 0; t < E.length; t++) {
                    const n = E[t];
                    r.format !== rt
                      ? null !== f
                        ? _
                          ? i.compressedTexSubImage2D(
                              34069 + e,
                              t,
                              0,
                              0,
                              n.width,
                              n.height,
                              f,
                              n.data
                            )
                          : i.compressedTexImage2D(
                              34069 + e,
                              t,
                              v,
                              n.width,
                              n.height,
                              0,
                              n.data
                            )
                        : console.warn(
                            "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                          )
                      : _
                      ? i.texSubImage2D(
                          34069 + e,
                          t,
                          0,
                          0,
                          n.width,
                          n.height,
                          f,
                          g,
                          n.data
                        )
                      : i.texImage2D(
                          34069 + e,
                          t,
                          v,
                          n.width,
                          n.height,
                          0,
                          f,
                          g,
                          n.data
                        );
                  }
                }
              } else {
                (E = r.mipmaps),
                  _ &&
                    T &&
                    (E.length > 0 && A++,
                    i.texStorage2D(34067, A, v, d[0].width, d[0].height));
                for (let e = 0; e < 6; e++)
                  if (n) {
                    _
                      ? i.texSubImage2D(
                          34069 + e,
                          0,
                          0,
                          0,
                          d[e].width,
                          d[e].height,
                          f,
                          g,
                          d[e].data
                        )
                      : i.texImage2D(
                          34069 + e,
                          0,
                          v,
                          d[e].width,
                          d[e].height,
                          0,
                          f,
                          g,
                          d[e].data
                        );
                    for (let t = 0; t < E.length; t++) {
                      const n = E[t].image[e].image;
                      _
                        ? i.texSubImage2D(
                            34069 + e,
                            t + 1,
                            0,
                            0,
                            n.width,
                            n.height,
                            f,
                            g,
                            n.data
                          )
                        : i.texImage2D(
                            34069 + e,
                            t + 1,
                            v,
                            n.width,
                            n.height,
                            0,
                            f,
                            g,
                            n.data
                          );
                    }
                  } else {
                    _
                      ? i.texSubImage2D(34069 + e, 0, 0, 0, f, g, d[e])
                      : i.texImage2D(34069 + e, 0, v, f, g, d[e]);
                    for (let t = 0; t < E.length; t++) {
                      const n = E[t];
                      _
                        ? i.texSubImage2D(
                            34069 + e,
                            t + 1,
                            0,
                            0,
                            f,
                            g,
                            n.image[e]
                          )
                        : i.texImage2D(34069 + e, t + 1, v, f, g, n.image[e]);
                    }
                  }
              }
              b(r, m) && M(34067),
                (u.__version = h.version),
                r.onUpdate && r.onUpdate(r);
            }
            t.__version = r.version;
          })(a, t, r)
        : i.bindTexture(34067, a.__webglTexture, 33984 + r);
    }),
    (this.rebindTextures = function (e, t, i) {
      const r = n.get(e);
      void 0 !== t && z(r.__webglFramebuffer, e, e.texture, 36064, 3553),
        void 0 !== i && F(e);
    }),
    (this.setupRenderTarget = function (t) {
      const l = t.texture,
        c = n.get(t),
        h = n.get(l);
      t.addEventListener("dispose", A),
        !0 !== t.isWebGLMultipleRenderTargets &&
          (void 0 === h.__webglTexture &&
            (h.__webglTexture = e.createTexture()),
          (h.__version = l.version),
          a.memory.textures++);
      const u = !0 === t.isWebGLCubeRenderTarget,
        d = !0 === t.isWebGLMultipleRenderTargets,
        p = y(t) || o;
      if (u) {
        c.__webglFramebuffer = [];
        for (let t = 0; t < 6; t++)
          c.__webglFramebuffer[t] = e.createFramebuffer();
      } else {
        if (((c.__webglFramebuffer = e.createFramebuffer()), d))
          if (r.drawBuffers) {
            const i = t.texture;
            for (let t = 0, r = i.length; t < r; t++) {
              const r = n.get(i[t]);
              void 0 === r.__webglTexture &&
                ((r.__webglTexture = e.createTexture()), a.memory.textures++);
            }
          } else
            console.warn(
              "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
            );
        if (o && t.samples > 0 && !1 === B(t)) {
          const n = d ? l : [l];
          (c.__webglMultisampledFramebuffer = e.createFramebuffer()),
            (c.__webglColorRenderbuffer = []),
            i.bindFramebuffer(36160, c.__webglMultisampledFramebuffer);
          for (let i = 0; i < n.length; i++) {
            const r = n[i];
            (c.__webglColorRenderbuffer[i] = e.createRenderbuffer()),
              e.bindRenderbuffer(36161, c.__webglColorRenderbuffer[i]);
            const a = s.convert(r.format, r.encoding),
              o = s.convert(r.type),
              l = w(
                r.internalFormat,
                a,
                o,
                r.encoding,
                !0 === t.isXRRenderTarget
              ),
              h = k(t);
            e.renderbufferStorageMultisample(36161, h, l, t.width, t.height),
              e.framebufferRenderbuffer(
                36160,
                36064 + i,
                36161,
                c.__webglColorRenderbuffer[i]
              );
          }
          e.bindRenderbuffer(36161, null),
            t.depthBuffer &&
              ((c.__webglDepthRenderbuffer = e.createRenderbuffer()),
              U(c.__webglDepthRenderbuffer, t, !0)),
            i.bindFramebuffer(36160, null);
        }
      }
      if (u) {
        i.bindTexture(34067, h.__webglTexture), I(34067, l, p);
        for (let e = 0; e < 6; e++)
          z(c.__webglFramebuffer[e], t, l, 36064, 34069 + e);
        b(l, p) && M(34067), i.unbindTexture();
      } else if (d) {
        const e = t.texture;
        for (let r = 0, s = e.length; r < s; r++) {
          const s = e[r],
            a = n.get(s);
          i.bindTexture(3553, a.__webglTexture),
            I(3553, s, p),
            z(c.__webglFramebuffer, t, s, 36064 + r, 3553),
            b(s, p) && M(3553);
        }
        i.unbindTexture();
      } else {
        let e = 3553;
        (t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) &&
          (o
            ? (e = t.isWebGL3DRenderTarget ? 32879 : 35866)
            : console.error(
                "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
              )),
          i.bindTexture(e, h.__webglTexture),
          I(e, l, p),
          z(c.__webglFramebuffer, t, l, 36064, e),
          b(l, p) && M(e),
          i.unbindTexture();
      }
      t.depthBuffer && F(t);
    }),
    (this.updateRenderTargetMipmap = function (e) {
      const t = y(e) || o,
        r = !0 === e.isWebGLMultipleRenderTargets ? e.texture : [e.texture];
      for (let s = 0, a = r.length; s < a; s++) {
        const a = r[s];
        if (b(a, t)) {
          const t = e.isWebGLCubeRenderTarget ? 34067 : 3553,
            r = n.get(a).__webglTexture;
          i.bindTexture(t, r), M(t), i.unbindTexture();
        }
      }
    }),
    (this.updateMultisampleRenderTarget = function (t) {
      if (o && t.samples > 0 && !1 === B(t)) {
        const r = t.isWebGLMultipleRenderTargets ? t.texture : [t.texture],
          s = t.width,
          a = t.height;
        let o = 16384;
        const l = [],
          c = t.stencilBuffer ? 33306 : 36096,
          h = n.get(t),
          u = !0 === t.isWebGLMultipleRenderTargets;
        if (u)
          for (let t = 0; t < r.length; t++)
            i.bindFramebuffer(36160, h.__webglMultisampledFramebuffer),
              e.framebufferRenderbuffer(36160, 36064 + t, 36161, null),
              i.bindFramebuffer(36160, h.__webglFramebuffer),
              e.framebufferTexture2D(36009, 36064 + t, 3553, null, 0);
        i.bindFramebuffer(36008, h.__webglMultisampledFramebuffer),
          i.bindFramebuffer(36009, h.__webglFramebuffer);
        for (let i = 0; i < r.length; i++) {
          l.push(36064 + i), t.depthBuffer && l.push(c);
          const d = void 0 !== h.__ignoreDepthValues && h.__ignoreDepthValues;
          if (
            (!1 === d &&
              (t.depthBuffer && (o |= 256), t.stencilBuffer && (o |= 1024)),
            u &&
              e.framebufferRenderbuffer(
                36008,
                36064,
                36161,
                h.__webglColorRenderbuffer[i]
              ),
            !0 === d &&
              (e.invalidateFramebuffer(36008, [c]),
              e.invalidateFramebuffer(36009, [c])),
            u)
          ) {
            const t = n.get(r[i]).__webglTexture;
            e.framebufferTexture2D(36009, 36064, 3553, t, 0);
          }
          e.blitFramebuffer(0, 0, s, a, 0, 0, s, a, o, 9728),
            p && e.invalidateFramebuffer(36008, l);
        }
        if ((i.bindFramebuffer(36008, null), i.bindFramebuffer(36009, null), u))
          for (let t = 0; t < r.length; t++) {
            i.bindFramebuffer(36160, h.__webglMultisampledFramebuffer),
              e.framebufferRenderbuffer(
                36160,
                36064 + t,
                36161,
                h.__webglColorRenderbuffer[t]
              );
            const s = n.get(r[t]).__webglTexture;
            i.bindFramebuffer(36160, h.__webglFramebuffer),
              e.framebufferTexture2D(36009, 36064 + t, 3553, s, 0);
          }
        i.bindFramebuffer(36009, h.__webglMultisampledFramebuffer);
      }
    }),
    (this.setupDepthRenderbuffer = F),
    (this.setupFrameBufferTexture = z),
    (this.useMultisampledRTT = B);
}
function So(e, t, i) {
  const n = i.isWebGL2;
  return {
    convert: function (i, r = null) {
      let s;
      if (i === je) return 5121;
      if (i === $e) return 32819;
      if (i === et) return 32820;
      if (i === qe) return 5120;
      if (i === Xe) return 5122;
      if (i === Ye) return 5123;
      if (i === Ke) return 5124;
      if (i === Ze) return 5125;
      if (i === Je) return 5126;
      if (i === Qe)
        return n
          ? 5131
          : ((s = t.get("OES_texture_half_float")),
            null !== s ? s.HALF_FLOAT_OES : null);
      if (i === it) return 6406;
      if (i === rt) return 6408;
      if (i === st) return 6409;
      if (i === at) return 6410;
      if (i === ot) return 6402;
      if (i === lt) return 34041;
      if (i === ct) return 6403;
      if (i === nt)
        return (
          console.warn(
            "THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"
          ),
          6408
        );
      if (i === ei)
        return (s = t.get("EXT_sRGB")), null !== s ? s.SRGB_ALPHA_EXT : null;
      if (i === ht) return 36244;
      if (i === ut) return 33319;
      if (i === dt) return 33320;
      if (i === pt) return 36249;
      if (i === mt || i === ft || i === gt || i === vt)
        if (r === jt) {
          if (((s = t.get("WEBGL_compressed_texture_s3tc_srgb")), null === s))
            return null;
          if (i === mt) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (i === ft) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (i === gt) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (i === vt) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else {
          if (((s = t.get("WEBGL_compressed_texture_s3tc")), null === s))
            return null;
          if (i === mt) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (i === ft) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (i === gt) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (i === vt) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        }
      if (i === _t || i === xt || i === yt || i === bt) {
        if (((s = t.get("WEBGL_compressed_texture_pvrtc")), null === s))
          return null;
        if (i === _t) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (i === xt) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (i === yt) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (i === bt) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      }
      if (i === Mt)
        return (
          (s = t.get("WEBGL_compressed_texture_etc1")),
          null !== s ? s.COMPRESSED_RGB_ETC1_WEBGL : null
        );
      if (i === wt || i === St) {
        if (((s = t.get("WEBGL_compressed_texture_etc")), null === s))
          return null;
        if (i === wt)
          return r === jt ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (i === St)
          return r === jt
            ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : s.COMPRESSED_RGBA8_ETC2_EAC;
      }
      if (
        i === Tt ||
        i === Et ||
        i === At ||
        i === Ct ||
        i === Pt ||
        i === Lt ||
        i === Rt ||
        i === Dt ||
        i === It ||
        i === Ot ||
        i === Nt ||
        i === zt ||
        i === Ut ||
        i === Ft
      ) {
        if (((s = t.get("WEBGL_compressed_texture_astc")), null === s))
          return null;
        if (i === Tt)
          return r === jt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (i === Et)
          return r === jt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (i === At)
          return r === jt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (i === Ct)
          return r === jt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (i === Pt)
          return r === jt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (i === Lt)
          return r === jt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (i === Rt)
          return r === jt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (i === Dt)
          return r === jt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (i === It)
          return r === jt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (i === Ot)
          return r === jt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (i === Nt)
          return r === jt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (i === zt)
          return r === jt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (i === Ut)
          return r === jt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (i === Ft)
          return r === jt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      }
      if (i === kt) {
        if (((s = t.get("EXT_texture_compression_bptc")), null === s))
          return null;
        if (i === kt)
          return r === jt
            ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      }
      return i === tt
        ? n
          ? 34042
          : ((s = t.get("WEBGL_depth_texture")),
            null !== s ? s.UNSIGNED_INT_24_8_WEBGL : null)
        : void 0 !== e[i]
        ? e[i]
        : null;
    },
  };
}
class To extends Br {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class Eo extends Bn {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const Ao = { type: "move" };
class Co {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      null === this._hand &&
        ((this._hand = new Eo()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      null === this._targetRay &&
        ((this._targetRay = new Eo()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new Fi()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new Fi())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      null === this._grip &&
        ((this._grip = new Eo()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new Fi()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new Fi())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      null !== this._targetRay && this._targetRay.dispatchEvent(e),
      null !== this._grip && this._grip.dispatchEvent(e),
      null !== this._hand && this._hand.dispatchEvent(e),
      this
    );
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      null !== this._targetRay && (this._targetRay.visible = !1),
      null !== this._grip && (this._grip.visible = !1),
      null !== this._hand && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, i) {
    let n = null,
      r = null,
      s = null;
    const a = this._targetRay,
      o = this._grip,
      l = this._hand;
    if (e && "visible-blurred" !== t.session.visibilityState) {
      if (l && e.hand) {
        s = !0;
        for (const s of e.hand.values()) {
          const e = t.getJointPose(s, i);
          if (void 0 === l.joints[s.jointName]) {
            const e = new Eo();
            (e.matrixAutoUpdate = !1),
              (e.visible = !1),
              (l.joints[s.jointName] = e),
              l.add(e);
          }
          const n = l.joints[s.jointName];
          null !== e &&
            (n.matrix.fromArray(e.transform.matrix),
            n.matrix.decompose(n.position, n.rotation, n.scale),
            (n.jointRadius = e.radius)),
            (n.visible = null !== e);
        }
        const n = l.joints["index-finger-tip"],
          r = l.joints["thumb-tip"],
          a = n.position.distanceTo(r.position),
          o = 0.02,
          c = 0.005;
        l.inputState.pinching && a > o + c
          ? ((l.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !l.inputState.pinching &&
            a <= o - c &&
            ((l.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        null !== o &&
          e.gripSpace &&
          ((r = t.getPose(e.gripSpace, i)),
          null !== r &&
            (o.matrix.fromArray(r.transform.matrix),
            o.matrix.decompose(o.position, o.rotation, o.scale),
            r.linearVelocity
              ? ((o.hasLinearVelocity = !0),
                o.linearVelocity.copy(r.linearVelocity))
              : (o.hasLinearVelocity = !1),
            r.angularVelocity
              ? ((o.hasAngularVelocity = !0),
                o.angularVelocity.copy(r.angularVelocity))
              : (o.hasAngularVelocity = !1)));
      null !== a &&
        ((n = t.getPose(e.targetRaySpace, i)),
        null === n && null !== r && (n = r),
        null !== n &&
          (a.matrix.fromArray(n.transform.matrix),
          a.matrix.decompose(a.position, a.rotation, a.scale),
          n.linearVelocity
            ? ((a.hasLinearVelocity = !0),
              a.linearVelocity.copy(n.linearVelocity))
            : (a.hasLinearVelocity = !1),
          n.angularVelocity
            ? ((a.hasAngularVelocity = !0),
              a.angularVelocity.copy(n.angularVelocity))
            : (a.hasAngularVelocity = !1),
          this.dispatchEvent(Ao)));
    }
    return (
      null !== a && (a.visible = null !== n),
      null !== o && (o.visible = null !== r),
      null !== l && (l.visible = null !== s),
      this
    );
  }
}
class Po extends Di {
  constructor(e, t, i, n, r, s, a, o, l, c) {
    if ((c = void 0 !== c ? c : ot) !== ot && c !== lt)
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    void 0 === i && c === ot && (i = Ze),
      void 0 === i && c === lt && (i = tt),
      super(null, n, r, s, a, o, c, i, l),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = void 0 !== a ? a : ke),
      (this.minFilter = void 0 !== o ? o : ke),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
class Lo extends ti {
  constructor(e, t) {
    super();
    const i = this;
    let n = null,
      r = 1,
      s = null,
      a = "local-floor",
      o = null,
      l = null,
      c = null,
      h = null,
      u = null,
      d = null;
    const p = t.getContextAttributes();
    let m = null,
      f = null;
    const g = [],
      v = [],
      _ = new Br();
    _.layers.enable(1), (_.viewport = new Ii());
    const x = new Br();
    x.layers.enable(2), (x.viewport = new Ii());
    const y = [_, x],
      b = new To();
    b.layers.enable(1), b.layers.enable(2);
    let M = null,
      w = null;
    function S(e) {
      const t = v.indexOf(e.inputSource);
      if (-1 === t) return;
      const i = g[t];
      void 0 !== i && i.dispatchEvent({ type: e.type, data: e.inputSource });
    }
    function T() {
      n.removeEventListener("select", S),
        n.removeEventListener("selectstart", S),
        n.removeEventListener("selectend", S),
        n.removeEventListener("squeeze", S),
        n.removeEventListener("squeezestart", S),
        n.removeEventListener("squeezeend", S),
        n.removeEventListener("end", T),
        n.removeEventListener("inputsourceschange", E);
      for (let e = 0; e < g.length; e++) {
        const t = v[e];
        null !== t && ((v[e] = null), g[e].disconnect(t));
      }
      (M = null),
        (w = null),
        e.setRenderTarget(m),
        (u = null),
        (h = null),
        (c = null),
        (n = null),
        (f = null),
        R.stop(),
        (i.isPresenting = !1),
        i.dispatchEvent({ type: "sessionend" });
    }
    function E(e) {
      for (let t = 0; t < e.removed.length; t++) {
        const i = e.removed[t],
          n = v.indexOf(i);
        n >= 0 &&
          ((v[n] = null),
          g[n].dispatchEvent({ type: "disconnected", data: i }));
      }
      for (let t = 0; t < e.added.length; t++) {
        const i = e.added[t];
        let n = v.indexOf(i);
        if (-1 === n) {
          for (let e = 0; e < g.length; e++) {
            if (e >= v.length) {
              v.push(i), (n = e);
              break;
            }
            if (null === v[e]) {
              (v[e] = i), (n = e);
              break;
            }
          }
          if (-1 === n) break;
        }
        const r = g[n];
        r && r.dispatchEvent({ type: "connected", data: i });
      }
    }
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (e) {
        let t = g[e];
        return (
          void 0 === t && ((t = new Co()), (g[e] = t)), t.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (e) {
        let t = g[e];
        return void 0 === t && ((t = new Co()), (g[e] = t)), t.getGripSpace();
      }),
      (this.getHand = function (e) {
        let t = g[e];
        return void 0 === t && ((t = new Co()), (g[e] = t)), t.getHandSpace();
      }),
      (this.setFramebufferScaleFactor = function (e) {
        (r = e),
          !0 === i.isPresenting &&
            console.warn(
              "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
            );
      }),
      (this.setReferenceSpaceType = function (e) {
        (a = e),
          !0 === i.isPresenting &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return o || s;
      }),
      (this.setReferenceSpace = function (e) {
        o = e;
      }),
      (this.getBaseLayer = function () {
        return null !== h ? h : u;
      }),
      (this.getBinding = function () {
        return c;
      }),
      (this.getFrame = function () {
        return d;
      }),
      (this.getSession = function () {
        return n;
      }),
      (this.setSession = async function (l) {
        if (((n = l), null !== n)) {
          if (
            ((m = e.getRenderTarget()),
            n.addEventListener("select", S),
            n.addEventListener("selectstart", S),
            n.addEventListener("selectend", S),
            n.addEventListener("squeeze", S),
            n.addEventListener("squeezestart", S),
            n.addEventListener("squeezeend", S),
            n.addEventListener("end", T),
            n.addEventListener("inputsourceschange", E),
            !0 !== p.xrCompatible && (await t.makeXRCompatible()),
            void 0 === n.renderState.layers || !1 === e.capabilities.isWebGL2)
          ) {
            const i = {
              antialias: void 0 !== n.renderState.layers || p.antialias,
              alpha: p.alpha,
              depth: p.depth,
              stencil: p.stencil,
              framebufferScaleFactor: r,
            };
            (u = new XRWebGLLayer(n, t, i)),
              n.updateRenderState({ baseLayer: u }),
              (f = new Oi(u.framebufferWidth, u.framebufferHeight, {
                format: rt,
                type: je,
                encoding: e.outputEncoding,
                stencilBuffer: p.stencil,
              }));
          } else {
            let i = null,
              s = null,
              a = null;
            p.depth &&
              ((a = p.stencil ? 35056 : 33190),
              (i = p.stencil ? lt : ot),
              (s = p.stencil ? tt : Ze));
            const o = { colorFormat: 32856, depthFormat: a, scaleFactor: r };
            (c = new XRWebGLBinding(n, t)),
              (h = c.createProjectionLayer(o)),
              n.updateRenderState({ layers: [h] }),
              (f = new Oi(h.textureWidth, h.textureHeight, {
                format: rt,
                type: je,
                depthTexture: new Po(
                  h.textureWidth,
                  h.textureHeight,
                  s,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  i
                ),
                stencilBuffer: p.stencil,
                encoding: e.outputEncoding,
                samples: p.antialias ? 4 : 0,
              }));
            e.properties.get(f).__ignoreDepthValues = h.ignoreDepthValues;
          }
          (f.isXRRenderTarget = !0),
            this.setFoveation(1),
            (o = null),
            (s = await n.requestReferenceSpace(a)),
            R.setContext(n),
            R.start(),
            (i.isPresenting = !0),
            i.dispatchEvent({ type: "sessionstart" });
        }
      });
    const A = new Fi(),
      C = new Fi();
    function P(e, t) {
      null === t
        ? e.matrixWorld.copy(e.matrix)
        : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix),
        e.matrixWorldInverse.copy(e.matrixWorld).invert();
    }
    (this.updateCamera = function (e) {
      if (null === n) return;
      (b.near = x.near = _.near = e.near),
        (b.far = x.far = _.far = e.far),
        (M === b.near && w === b.far) ||
          (n.updateRenderState({ depthNear: b.near, depthFar: b.far }),
          (M = b.near),
          (w = b.far));
      const t = e.parent,
        i = b.cameras;
      P(b, t);
      for (let n = 0; n < i.length; n++) P(i[n], t);
      b.matrixWorld.decompose(b.position, b.quaternion, b.scale),
        e.matrix.copy(b.matrix),
        e.matrix.decompose(e.position, e.quaternion, e.scale);
      const r = e.children;
      for (let n = 0, s = r.length; n < s; n++) r[n].updateMatrixWorld(!0);
      2 === i.length
        ? (function (e, t, i) {
            A.setFromMatrixPosition(t.matrixWorld),
              C.setFromMatrixPosition(i.matrixWorld);
            const n = A.distanceTo(C),
              r = t.projectionMatrix.elements,
              s = i.projectionMatrix.elements,
              a = r[14] / (r[10] - 1),
              o = r[14] / (r[10] + 1),
              l = (r[9] + 1) / r[5],
              c = (r[9] - 1) / r[5],
              h = (r[8] - 1) / r[0],
              u = (s[8] + 1) / s[0],
              d = a * h,
              p = a * u,
              m = n / (-h + u),
              f = m * -h;
            t.matrixWorld.decompose(e.position, e.quaternion, e.scale),
              e.translateX(f),
              e.translateZ(m),
              e.matrixWorld.compose(e.position, e.quaternion, e.scale),
              e.matrixWorldInverse.copy(e.matrixWorld).invert();
            const g = a + m,
              v = o + m,
              _ = d - f,
              x = p + (n - f),
              y = ((l * o) / v) * g,
              b = ((c * o) / v) * g;
            e.projectionMatrix.makePerspective(_, x, y, b, g, v);
          })(b, _, x)
        : b.projectionMatrix.copy(_.projectionMatrix);
    }),
      (this.getCamera = function () {
        return b;
      }),
      (this.getFoveation = function () {
        return null !== h
          ? h.fixedFoveation
          : null !== u
          ? u.fixedFoveation
          : void 0;
      }),
      (this.setFoveation = function (e) {
        null !== h && (h.fixedFoveation = e),
          null !== u && void 0 !== u.fixedFoveation && (u.fixedFoveation = e);
      });
    let L = null;
    const R = new Qr();
    R.setAnimationLoop(function (t, i) {
      if (((l = i.getViewerPose(o || s)), (d = i), null !== l)) {
        const t = l.views;
        null !== u &&
          (e.setRenderTargetFramebuffer(f, u.framebuffer),
          e.setRenderTarget(f));
        let i = !1;
        t.length !== b.cameras.length && ((b.cameras.length = 0), (i = !0));
        for (let n = 0; n < t.length; n++) {
          const r = t[n];
          let s = null;
          if (null !== u) s = u.getViewport(r);
          else {
            const t = c.getViewSubImage(h, r);
            (s = t.viewport),
              0 === n &&
                (e.setRenderTargetTextures(
                  f,
                  t.colorTexture,
                  h.ignoreDepthValues ? void 0 : t.depthStencilTexture
                ),
                e.setRenderTarget(f));
          }
          let a = y[n];
          void 0 === a &&
            ((a = new Br()),
            a.layers.enable(n),
            (a.viewport = new Ii()),
            (y[n] = a)),
            a.matrix.fromArray(r.transform.matrix),
            a.projectionMatrix.fromArray(r.projectionMatrix),
            a.viewport.set(s.x, s.y, s.width, s.height),
            0 === n && b.matrix.copy(a.matrix),
            !0 === i && b.cameras.push(a);
        }
      }
      for (let e = 0; e < g.length; e++) {
        const t = v[e],
          n = g[e];
        null !== t && void 0 !== n && n.update(t, i, o || s);
      }
      L && L(t, i), (d = null);
    }),
      (this.setAnimationLoop = function (e) {
        L = e;
      }),
      (this.dispose = function () {});
  }
}
function Ro(e, t) {
  function i(i, n) {
    (i.opacity.value = n.opacity),
      n.color && i.diffuse.value.copy(n.color),
      n.emissive &&
        i.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),
      n.map && (i.map.value = n.map),
      n.alphaMap && (i.alphaMap.value = n.alphaMap),
      n.bumpMap &&
        ((i.bumpMap.value = n.bumpMap),
        (i.bumpScale.value = n.bumpScale),
        n.side === W && (i.bumpScale.value *= -1)),
      n.displacementMap &&
        ((i.displacementMap.value = n.displacementMap),
        (i.displacementScale.value = n.displacementScale),
        (i.displacementBias.value = n.displacementBias)),
      n.emissiveMap && (i.emissiveMap.value = n.emissiveMap),
      n.normalMap &&
        ((i.normalMap.value = n.normalMap),
        i.normalScale.value.copy(n.normalScale),
        n.side === W && i.normalScale.value.negate()),
      n.specularMap && (i.specularMap.value = n.specularMap),
      n.alphaTest > 0 && (i.alphaTest.value = n.alphaTest);
    const r = t.get(n).envMap;
    if (
      (r &&
        ((i.envMap.value = r),
        (i.flipEnvMap.value =
          r.isCubeTexture && !1 === r.isRenderTargetTexture ? -1 : 1),
        (i.reflectivity.value = n.reflectivity),
        (i.ior.value = n.ior),
        (i.refractionRatio.value = n.refractionRatio)),
      n.lightMap)
    ) {
      i.lightMap.value = n.lightMap;
      const t = !0 !== e.physicallyCorrectLights ? Math.PI : 1;
      i.lightMapIntensity.value = n.lightMapIntensity * t;
    }
    let s, a;
    n.aoMap &&
      ((i.aoMap.value = n.aoMap), (i.aoMapIntensity.value = n.aoMapIntensity)),
      n.map
        ? (s = n.map)
        : n.specularMap
        ? (s = n.specularMap)
        : n.displacementMap
        ? (s = n.displacementMap)
        : n.normalMap
        ? (s = n.normalMap)
        : n.bumpMap
        ? (s = n.bumpMap)
        : n.roughnessMap
        ? (s = n.roughnessMap)
        : n.metalnessMap
        ? (s = n.metalnessMap)
        : n.alphaMap
        ? (s = n.alphaMap)
        : n.emissiveMap
        ? (s = n.emissiveMap)
        : n.clearcoatMap
        ? (s = n.clearcoatMap)
        : n.clearcoatNormalMap
        ? (s = n.clearcoatNormalMap)
        : n.clearcoatRoughnessMap
        ? (s = n.clearcoatRoughnessMap)
        : n.iridescenceMap
        ? (s = n.iridescenceMap)
        : n.iridescenceThicknessMap
        ? (s = n.iridescenceThicknessMap)
        : n.specularIntensityMap
        ? (s = n.specularIntensityMap)
        : n.specularColorMap
        ? (s = n.specularColorMap)
        : n.transmissionMap
        ? (s = n.transmissionMap)
        : n.thicknessMap
        ? (s = n.thicknessMap)
        : n.sheenColorMap
        ? (s = n.sheenColorMap)
        : n.sheenRoughnessMap && (s = n.sheenRoughnessMap),
      void 0 !== s &&
        (s.isWebGLRenderTarget && (s = s.texture),
        !0 === s.matrixAutoUpdate && s.updateMatrix(),
        i.uvTransform.value.copy(s.matrix)),
      n.aoMap ? (a = n.aoMap) : n.lightMap && (a = n.lightMap),
      void 0 !== a &&
        (a.isWebGLRenderTarget && (a = a.texture),
        !0 === a.matrixAutoUpdate && a.updateMatrix(),
        i.uv2Transform.value.copy(a.matrix));
  }
  return {
    refreshFogUniforms: function (e, t) {
      e.fogColor.value.copy(t.color),
        t.isFog
          ? ((e.fogNear.value = t.near), (e.fogFar.value = t.far))
          : t.isFogExp2 && (e.fogDensity.value = t.density);
    },
    refreshMaterialUniforms: function (e, n, r, s, a) {
      n.isMeshBasicMaterial || n.isMeshLambertMaterial
        ? i(e, n)
        : n.isMeshToonMaterial
        ? (i(e, n),
          (function (e, t) {
            t.gradientMap && (e.gradientMap.value = t.gradientMap);
          })(e, n))
        : n.isMeshPhongMaterial
        ? (i(e, n),
          (function (e, t) {
            e.specular.value.copy(t.specular),
              (e.shininess.value = Math.max(t.shininess, 1e-4));
          })(e, n))
        : n.isMeshStandardMaterial
        ? (i(e, n),
          (function (e, i) {
            (e.roughness.value = i.roughness),
              (e.metalness.value = i.metalness),
              i.roughnessMap && (e.roughnessMap.value = i.roughnessMap);
            i.metalnessMap && (e.metalnessMap.value = i.metalnessMap);
            const n = t.get(i).envMap;
            n && (e.envMapIntensity.value = i.envMapIntensity);
          })(e, n),
          n.isMeshPhysicalMaterial &&
            (function (e, t, i) {
              (e.ior.value = t.ior),
                t.sheen > 0 &&
                  (e.sheenColor.value
                    .copy(t.sheenColor)
                    .multiplyScalar(t.sheen),
                  (e.sheenRoughness.value = t.sheenRoughness),
                  t.sheenColorMap && (e.sheenColorMap.value = t.sheenColorMap),
                  t.sheenRoughnessMap &&
                    (e.sheenRoughnessMap.value = t.sheenRoughnessMap));
              t.clearcoat > 0 &&
                ((e.clearcoat.value = t.clearcoat),
                (e.clearcoatRoughness.value = t.clearcoatRoughness),
                t.clearcoatMap && (e.clearcoatMap.value = t.clearcoatMap),
                t.clearcoatRoughnessMap &&
                  (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap),
                t.clearcoatNormalMap &&
                  (e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),
                  (e.clearcoatNormalMap.value = t.clearcoatNormalMap),
                  t.side === W && e.clearcoatNormalScale.value.negate()));
              t.iridescence > 0 &&
                ((e.iridescence.value = t.iridescence),
                (e.iridescenceIOR.value = t.iridescenceIOR),
                (e.iridescenceThicknessMinimum.value =
                  t.iridescenceThicknessRange[0]),
                (e.iridescenceThicknessMaximum.value =
                  t.iridescenceThicknessRange[1]),
                t.iridescenceMap && (e.iridescenceMap.value = t.iridescenceMap),
                t.iridescenceThicknessMap &&
                  (e.iridescenceThicknessMap.value =
                    t.iridescenceThicknessMap));
              t.transmission > 0 &&
                ((e.transmission.value = t.transmission),
                (e.transmissionSamplerMap.value = i.texture),
                e.transmissionSamplerSize.value.set(i.width, i.height),
                t.transmissionMap &&
                  (e.transmissionMap.value = t.transmissionMap),
                (e.thickness.value = t.thickness),
                t.thicknessMap && (e.thicknessMap.value = t.thicknessMap),
                (e.attenuationDistance.value = t.attenuationDistance),
                e.attenuationColor.value.copy(t.attenuationColor));
              (e.specularIntensity.value = t.specularIntensity),
                e.specularColor.value.copy(t.specularColor),
                t.specularIntensityMap &&
                  (e.specularIntensityMap.value = t.specularIntensityMap);
              t.specularColorMap &&
                (e.specularColorMap.value = t.specularColorMap);
            })(e, n, a))
        : n.isMeshMatcapMaterial
        ? (i(e, n),
          (function (e, t) {
            t.matcap && (e.matcap.value = t.matcap);
          })(e, n))
        : n.isMeshDepthMaterial
        ? i(e, n)
        : n.isMeshDistanceMaterial
        ? (i(e, n),
          (function (e, t) {
            e.referencePosition.value.copy(t.referencePosition),
              (e.nearDistance.value = t.nearDistance),
              (e.farDistance.value = t.farDistance);
          })(e, n))
        : n.isMeshNormalMaterial
        ? i(e, n)
        : n.isLineBasicMaterial
        ? ((function (e, t) {
            e.diffuse.value.copy(t.color), (e.opacity.value = t.opacity);
          })(e, n),
          n.isLineDashedMaterial &&
            (function (e, t) {
              (e.dashSize.value = t.dashSize),
                (e.totalSize.value = t.dashSize + t.gapSize),
                (e.scale.value = t.scale);
            })(e, n))
        : n.isPointsMaterial
        ? (function (e, t, i, n) {
            e.diffuse.value.copy(t.color),
              (e.opacity.value = t.opacity),
              (e.size.value = t.size * i),
              (e.scale.value = 0.5 * n),
              t.map && (e.map.value = t.map);
            t.alphaMap && (e.alphaMap.value = t.alphaMap);
            t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
            let r;
            t.map ? (r = t.map) : t.alphaMap && (r = t.alphaMap);
            void 0 !== r &&
              (!0 === r.matrixAutoUpdate && r.updateMatrix(),
              e.uvTransform.value.copy(r.matrix));
          })(e, n, r, s)
        : n.isSpriteMaterial
        ? (function (e, t) {
            e.diffuse.value.copy(t.color),
              (e.opacity.value = t.opacity),
              (e.rotation.value = t.rotation),
              t.map && (e.map.value = t.map);
            t.alphaMap && (e.alphaMap.value = t.alphaMap);
            t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
            let i;
            t.map ? (i = t.map) : t.alphaMap && (i = t.alphaMap);
            void 0 !== i &&
              (!0 === i.matrixAutoUpdate && i.updateMatrix(),
              e.uvTransform.value.copy(i.matrix));
          })(e, n)
        : n.isShadowMaterial
        ? (e.color.value.copy(n.color), (e.opacity.value = n.opacity))
        : n.isShaderMaterial && (n.uniformsNeedUpdate = !1);
    },
  };
}
function Do(e, t, i, n) {
  let r = {},
    s = {},
    a = [];
  const o = i.isWebGL2 ? e.getParameter(35375) : 0;
  function l(e, t, i) {
    const n = e.value;
    if (void 0 === i[t])
      return (i[t] = "number" == typeof n ? n : n.clone()), !0;
    if ("number" == typeof n) {
      if (i[t] !== n) return (i[t] = n), !0;
    } else {
      const e = i[t];
      if (!1 === e.equals(n)) return e.copy(n), !0;
    }
    return !1;
  }
  function c(e) {
    const t = e.value,
      i = { boundary: 0, storage: 0 };
    return (
      "number" == typeof t
        ? ((i.boundary = 4), (i.storage = 4))
        : t.isVector2
        ? ((i.boundary = 8), (i.storage = 8))
        : t.isVector3 || t.isColor
        ? ((i.boundary = 16), (i.storage = 12))
        : t.isVector4
        ? ((i.boundary = 16), (i.storage = 16))
        : t.isMatrix3
        ? ((i.boundary = 48), (i.storage = 48))
        : t.isMatrix4
        ? ((i.boundary = 64), (i.storage = 64))
        : t.isTexture
        ? console.warn(
            "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
          )
        : console.warn(
            "THREE.WebGLRenderer: Unsupported uniform value type.",
            t
          ),
      i
    );
  }
  function h(t) {
    const i = t.target;
    i.removeEventListener("dispose", h);
    const n = a.indexOf(i.__bindingPointIndex);
    a.splice(n, 1), e.deleteBuffer(r[i.id]), delete r[i.id], delete s[i.id];
  }
  return {
    bind: function (e, t) {
      const i = t.program;
      n.uniformBlockBinding(e, i);
    },
    update: function (i, u) {
      let d = r[i.id];
      void 0 === d &&
        (!(function (e) {
          const t = e.uniforms;
          let i = 0;
          const n = 16;
          let r = 0;
          for (let s = 0, a = t.length; s < a; s++) {
            const e = t[s],
              a = c(e);
            if (
              ((e.__data = new Float32Array(
                a.storage / Float32Array.BYTES_PER_ELEMENT
              )),
              (e.__offset = i),
              s > 0)
            ) {
              r = i % n;
              0 !== r &&
                n - r - a.boundary < 0 &&
                ((i += n - r), (e.__offset = i));
            }
            i += a.storage;
          }
          (r = i % n), r > 0 && (i += n - r);
          (e.__size = i), (e.__cache = {});
        })(i),
        (d = (function (t) {
          const i = (function () {
            for (let e = 0; e < o; e++)
              if (-1 === a.indexOf(e)) return a.push(e), e;
            return (
              console.error(
                "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
              ),
              0
            );
          })();
          t.__bindingPointIndex = i;
          const n = e.createBuffer(),
            r = t.__size,
            s = t.usage;
          return (
            e.bindBuffer(35345, n),
            e.bufferData(35345, r, s),
            e.bindBuffer(35345, null),
            e.bindBufferBase(35345, i, n),
            n
          );
        })(i)),
        (r[i.id] = d),
        i.addEventListener("dispose", h));
      const p = u.program;
      n.updateUBOMapping(i, p);
      const m = t.render.frame;
      s[i.id] !== m &&
        (!(function (t) {
          const i = r[t.id],
            n = t.uniforms,
            s = t.__cache;
          e.bindBuffer(35345, i);
          for (let r = 0, a = n.length; r < a; r++) {
            const t = n[r];
            if (!0 === l(t, r, s)) {
              const i = t.value,
                n = t.__offset;
              "number" == typeof i
                ? ((t.__data[0] = i), e.bufferSubData(35345, n, t.__data))
                : (t.value.isMatrix3
                    ? ((t.__data[0] = t.value.elements[0]),
                      (t.__data[1] = t.value.elements[1]),
                      (t.__data[2] = t.value.elements[2]),
                      (t.__data[3] = t.value.elements[0]),
                      (t.__data[4] = t.value.elements[3]),
                      (t.__data[5] = t.value.elements[4]),
                      (t.__data[6] = t.value.elements[5]),
                      (t.__data[7] = t.value.elements[0]),
                      (t.__data[8] = t.value.elements[6]),
                      (t.__data[9] = t.value.elements[7]),
                      (t.__data[10] = t.value.elements[8]),
                      (t.__data[11] = t.value.elements[0]))
                    : i.toArray(t.__data),
                  e.bufferSubData(35345, n, t.__data));
            }
          }
          e.bindBuffer(35345, null);
        })(i),
        (s[i.id] = m));
    },
    dispose: function () {
      for (const t in r) e.deleteBuffer(r[t]);
      (a = []), (r = {}), (s = {});
    },
  };
}
function Io(e = {}) {
  this.isWebGLRenderer = !0;
  const t =
      void 0 !== e.canvas
        ? e.canvas
        : (function () {
            const e = fi("canvas");
            return (e.style.display = "block"), e;
          })(),
    i = void 0 !== e.context ? e.context : null,
    n = void 0 === e.depth || e.depth,
    r = void 0 === e.stencil || e.stencil,
    s = void 0 !== e.antialias && e.antialias,
    a = void 0 === e.premultipliedAlpha || e.premultipliedAlpha,
    o = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer,
    l = void 0 !== e.powerPreference ? e.powerPreference : "default",
    c =
      void 0 !== e.failIfMajorPerformanceCaveat &&
      e.failIfMajorPerformanceCaveat;
  let h;
  h =
    null !== i ? i.getContextAttributes().alpha : void 0 !== e.alpha && e.alpha;
  let u = null,
    d = null;
  const p = [],
    m = [];
  (this.domElement = t),
    (this.debug = { checkShaderErrors: !0 }),
    (this.autoClear = !0),
    (this.autoClearColor = !0),
    (this.autoClearDepth = !0),
    (this.autoClearStencil = !0),
    (this.sortObjects = !0),
    (this.clippingPlanes = []),
    (this.localClippingEnabled = !1),
    (this.outputEncoding = Wt),
    (this.physicallyCorrectLights = !1),
    (this.toneMapping = Te),
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
  const f = this;
  let g = !1,
    v = 0,
    _ = 0,
    x = null,
    y = -1,
    b = null;
  const M = new Ii(),
    w = new Ii();
  let S = null,
    T = t.width,
    E = t.height,
    A = 1,
    C = null,
    P = null;
  const L = new Ii(0, 0, T, E),
    R = new Ii(0, 0, T, E);
  let D = !1;
  const I = new Jr();
  let O = !1,
    z = !1,
    U = null;
  const F = new fn(),
    k = new di(),
    B = new Fi(),
    V = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0,
    };
  function H() {
    return null === x ? A : 1;
  }
  let q,
    X,
    Y,
    K,
    Z,
    J,
    Q,
    $,
    ee,
    te,
    ie,
    ne,
    re,
    se,
    ae,
    oe,
    le,
    ce,
    he,
    ue,
    de,
    pe,
    me,
    fe,
    ge = i;
  function ve(e, i) {
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = t.getContext(r, i);
      if (null !== s) return s;
    }
    return null;
  }
  try {
    const e = {
      alpha: !0,
      depth: n,
      stencil: r,
      antialias: s,
      premultipliedAlpha: a,
      preserveDrawingBuffer: o,
      powerPreference: l,
      failIfMajorPerformanceCaveat: c,
    };
    if (
      ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${N}`),
      t.addEventListener("webglcontextlost", ye, !1),
      t.addEventListener("webglcontextrestored", be, !1),
      t.addEventListener("webglcontextcreationerror", Me, !1),
      null === ge)
    ) {
      const t = ["webgl2", "webgl", "experimental-webgl"];
      if (
        (!0 === f.isWebGL1Renderer && t.shift(), (ge = ve(t, e)), null === ge)
      )
        throw ve(t)
          ? new Error(
              "Error creating WebGL context with your selected attributes."
            )
          : new Error("Error creating WebGL context.");
    }
    void 0 === ge.getShaderPrecisionFormat &&
      (ge.getShaderPrecisionFormat = function () {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
  } catch (Ne) {
    throw (console.error("THREE.WebGLRenderer: " + Ne.message), Ne);
  }
  function _e() {
    (q = new As(ge)),
      (X = new os(ge, q, e)),
      q.init(X),
      (pe = new So(ge, q, X)),
      (Y = new Mo(ge, q, X)),
      (K = new Ls()),
      (Z = new so()),
      (J = new wo(ge, q, Y, Z, X, pe, K)),
      (Q = new cs(f)),
      ($ = new Es(f)),
      (ee = new $r(ge, X)),
      (me = new ss(ge, q, ee, X)),
      (te = new Cs(ge, ee, K, me)),
      (ie = new Os(ge, te, ee, K)),
      (he = new Is(ge, X, J)),
      (oe = new ls(Z)),
      (ne = new ro(f, Q, $, q, X, me, oe)),
      (re = new Ro(f, Z)),
      (se = new co()),
      (ae = new go(q, X)),
      (ce = new rs(f, Q, $, Y, ie, h, a)),
      (le = new bo(f, ie, X)),
      (fe = new Do(ge, K, X, Y)),
      (ue = new as(ge, q, K, X)),
      (de = new Ps(ge, q, K, X)),
      (K.programs = ne.programs),
      (f.capabilities = X),
      (f.extensions = q),
      (f.properties = Z),
      (f.renderLists = se),
      (f.shadowMap = le),
      (f.state = Y),
      (f.info = K);
  }
  _e();
  const xe = new Lo(f, ge);
  function ye(e) {
    e.preventDefault(),
      console.log("THREE.WebGLRenderer: Context Lost."),
      (g = !0);
  }
  function be() {
    console.log("THREE.WebGLRenderer: Context Restored."), (g = !1);
    const e = K.autoReset,
      t = le.enabled,
      i = le.autoUpdate,
      n = le.needsUpdate,
      r = le.type;
    _e(),
      (K.autoReset = e),
      (le.enabled = t),
      (le.autoUpdate = i),
      (le.needsUpdate = n),
      (le.type = r);
  }
  function Me(e) {
    console.error(
      "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
      e.statusMessage
    );
  }
  function we(e) {
    const t = e.target;
    t.removeEventListener("dispose", we),
      (function (e) {
        (function (e) {
          const t = Z.get(e).programs;
          void 0 !== t &&
            (t.forEach(function (e) {
              ne.releaseProgram(e);
            }),
            e.isShaderMaterial && ne.releaseShaderCache(e));
        })(e),
          Z.remove(e);
      })(t);
  }
  (this.xr = xe),
    (this.getContext = function () {
      return ge;
    }),
    (this.getContextAttributes = function () {
      return ge.getContextAttributes();
    }),
    (this.forceContextLoss = function () {
      const e = q.get("WEBGL_lose_context");
      e && e.loseContext();
    }),
    (this.forceContextRestore = function () {
      const e = q.get("WEBGL_lose_context");
      e && e.restoreContext();
    }),
    (this.getPixelRatio = function () {
      return A;
    }),
    (this.setPixelRatio = function (e) {
      void 0 !== e && ((A = e), this.setSize(T, E, !1));
    }),
    (this.getSize = function (e) {
      return e.set(T, E);
    }),
    (this.setSize = function (e, i, n) {
      xe.isPresenting
        ? console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting."
          )
        : ((T = e),
          (E = i),
          (t.width = Math.floor(e * A)),
          (t.height = Math.floor(i * A)),
          !1 !== n && ((t.style.width = e + "px"), (t.style.height = i + "px")),
          this.setViewport(0, 0, e, i));
    }),
    (this.getDrawingBufferSize = function (e) {
      return e.set(T * A, E * A).floor();
    }),
    (this.setDrawingBufferSize = function (e, i, n) {
      (T = e),
        (E = i),
        (A = n),
        (t.width = Math.floor(e * n)),
        (t.height = Math.floor(i * n)),
        this.setViewport(0, 0, e, i);
    }),
    (this.getCurrentViewport = function (e) {
      return e.copy(M);
    }),
    (this.getViewport = function (e) {
      return e.copy(L);
    }),
    (this.setViewport = function (e, t, i, n) {
      e.isVector4 ? L.set(e.x, e.y, e.z, e.w) : L.set(e, t, i, n),
        Y.viewport(M.copy(L).multiplyScalar(A).floor());
    }),
    (this.getScissor = function (e) {
      return e.copy(R);
    }),
    (this.setScissor = function (e, t, i, n) {
      e.isVector4 ? R.set(e.x, e.y, e.z, e.w) : R.set(e, t, i, n),
        Y.scissor(w.copy(R).multiplyScalar(A).floor());
    }),
    (this.getScissorTest = function () {
      return D;
    }),
    (this.setScissorTest = function (e) {
      Y.setScissorTest((D = e));
    }),
    (this.setOpaqueSort = function (e) {
      C = e;
    }),
    (this.setTransparentSort = function (e) {
      P = e;
    }),
    (this.getClearColor = function (e) {
      return e.copy(ce.getClearColor());
    }),
    (this.setClearColor = function () {
      ce.setClearColor.apply(ce, arguments);
    }),
    (this.getClearAlpha = function () {
      return ce.getClearAlpha();
    }),
    (this.setClearAlpha = function () {
      ce.setClearAlpha.apply(ce, arguments);
    }),
    (this.clear = function (e = !0, t = !0, i = !0) {
      let n = 0;
      e && (n |= 16384), t && (n |= 256), i && (n |= 1024), ge.clear(n);
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
      t.removeEventListener("webglcontextlost", ye, !1),
        t.removeEventListener("webglcontextrestored", be, !1),
        t.removeEventListener("webglcontextcreationerror", Me, !1),
        se.dispose(),
        ae.dispose(),
        Z.dispose(),
        Q.dispose(),
        $.dispose(),
        ie.dispose(),
        me.dispose(),
        fe.dispose(),
        ne.dispose(),
        xe.dispose(),
        xe.removeEventListener("sessionstart", Ee),
        xe.removeEventListener("sessionend", Ae),
        U && (U.dispose(), (U = null)),
        Ce.stop();
    }),
    (this.renderBufferDirect = function (e, t, i, n, r, s) {
      null === t && (t = V);
      const a = r.isMesh && r.matrixWorld.determinant() < 0,
        o = (function (e, t, i, n, r) {
          !0 !== t.isScene && (t = V);
          J.resetTextureUnits();
          const s = t.fog,
            a = n.isMeshStandardMaterial ? t.environment : null,
            o =
              null === x
                ? f.outputEncoding
                : !0 === x.isXRRenderTarget
                ? x.texture.encoding
                : Wt,
            l = (n.isMeshStandardMaterial ? $ : Q).get(n.envMap || a),
            c =
              !0 === n.vertexColors &&
              !!i.attributes.color &&
              4 === i.attributes.color.itemSize,
            h = !!n.normalMap && !!i.attributes.tangent,
            u = !!i.morphAttributes.position,
            p = !!i.morphAttributes.normal,
            m = !!i.morphAttributes.color,
            g = n.toneMapped ? f.toneMapping : Te,
            v =
              i.morphAttributes.position ||
              i.morphAttributes.normal ||
              i.morphAttributes.color,
            _ = void 0 !== v ? v.length : 0,
            M = Z.get(n),
            w = d.state.lights;
          if (!0 === O && (!0 === z || e !== b)) {
            const t = e === b && n.id === y;
            oe.setState(n, e, t);
          }
          let S = !1;
          n.version === M.__version
            ? (M.needsLights && M.lightsStateVersion !== w.state.version) ||
              M.outputEncoding !== o ||
              (r.isInstancedMesh && !1 === M.instancing)
              ? (S = !0)
              : r.isInstancedMesh || !0 !== M.instancing
              ? r.isSkinnedMesh && !1 === M.skinning
                ? (S = !0)
                : r.isSkinnedMesh || !0 !== M.skinning
                ? M.envMap !== l || (!0 === n.fog && M.fog !== s)
                  ? (S = !0)
                  : void 0 === M.numClippingPlanes ||
                    (M.numClippingPlanes === oe.numPlanes &&
                      M.numIntersection === oe.numIntersection)
                  ? (M.vertexAlphas !== c ||
                      M.vertexTangents !== h ||
                      M.morphTargets !== u ||
                      M.morphNormals !== p ||
                      M.morphColors !== m ||
                      M.toneMapping !== g ||
                      (!0 === X.isWebGL2 && M.morphTargetsCount !== _)) &&
                    (S = !0)
                  : (S = !0)
                : (S = !0)
              : (S = !0)
            : ((S = !0), (M.__version = n.version));
          let T = M.currentProgram;
          !0 === S && (T = Ie(n, t, r));
          let C = !1,
            P = !1,
            L = !1;
          const R = T.getUniforms(),
            D = M.uniforms;
          Y.useProgram(T.program) && ((C = !0), (P = !0), (L = !0));
          n.id !== y && ((y = n.id), (P = !0));
          if (C || b !== e) {
            if (
              (R.setValue(ge, "projectionMatrix", e.projectionMatrix),
              X.logarithmicDepthBuffer &&
                R.setValue(
                  ge,
                  "logDepthBufFC",
                  2 / (Math.log(e.far + 1) / Math.LN2)
                ),
              b !== e && ((b = e), (P = !0), (L = !0)),
              n.isShaderMaterial ||
                n.isMeshPhongMaterial ||
                n.isMeshToonMaterial ||
                n.isMeshStandardMaterial ||
                n.envMap)
            ) {
              const t = R.map.cameraPosition;
              void 0 !== t &&
                t.setValue(ge, B.setFromMatrixPosition(e.matrixWorld));
            }
            (n.isMeshPhongMaterial ||
              n.isMeshToonMaterial ||
              n.isMeshLambertMaterial ||
              n.isMeshBasicMaterial ||
              n.isMeshStandardMaterial ||
              n.isShaderMaterial) &&
              R.setValue(ge, "isOrthographic", !0 === e.isOrthographicCamera),
              (n.isMeshPhongMaterial ||
                n.isMeshToonMaterial ||
                n.isMeshLambertMaterial ||
                n.isMeshBasicMaterial ||
                n.isMeshStandardMaterial ||
                n.isShaderMaterial ||
                n.isShadowMaterial ||
                r.isSkinnedMesh) &&
                R.setValue(ge, "viewMatrix", e.matrixWorldInverse);
          }
          if (r.isSkinnedMesh) {
            R.setOptional(ge, r, "bindMatrix"),
              R.setOptional(ge, r, "bindMatrixInverse");
            const e = r.skeleton;
            e &&
              (X.floatVertexTextures
                ? (null === e.boneTexture && e.computeBoneTexture(),
                  R.setValue(ge, "boneTexture", e.boneTexture, J),
                  R.setValue(ge, "boneTextureSize", e.boneTextureSize))
                : console.warn(
                    "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
                  ));
          }
          const I = i.morphAttributes;
          (void 0 !== I.position ||
            void 0 !== I.normal ||
            (void 0 !== I.color && !0 === X.isWebGL2)) &&
            he.update(r, i, n, T);
          (P || M.receiveShadow !== r.receiveShadow) &&
            ((M.receiveShadow = r.receiveShadow),
            R.setValue(ge, "receiveShadow", r.receiveShadow));
          n.isMeshGouraudMaterial &&
            null !== n.envMap &&
            ((D.envMap.value = l),
            (D.flipEnvMap.value =
              l.isCubeTexture && !1 === l.isRenderTargetTexture ? -1 : 1));
          P &&
            (R.setValue(ge, "toneMappingExposure", f.toneMappingExposure),
            M.needsLights &&
              ((F = L),
              ((N = D).ambientLightColor.needsUpdate = F),
              (N.lightProbe.needsUpdate = F),
              (N.directionalLights.needsUpdate = F),
              (N.directionalLightShadows.needsUpdate = F),
              (N.pointLights.needsUpdate = F),
              (N.pointLightShadows.needsUpdate = F),
              (N.spotLights.needsUpdate = F),
              (N.spotLightShadows.needsUpdate = F),
              (N.rectAreaLights.needsUpdate = F),
              (N.hemisphereLights.needsUpdate = F)),
            s && !0 === n.fog && re.refreshFogUniforms(D, s),
            re.refreshMaterialUniforms(D, n, A, E, U),
            Fa.upload(ge, M.uniformsList, D, J));
          var N, F;
          n.isShaderMaterial &&
            !0 === n.uniformsNeedUpdate &&
            (Fa.upload(ge, M.uniformsList, D, J), (n.uniformsNeedUpdate = !1));
          n.isSpriteMaterial && R.setValue(ge, "center", r.center);
          n.isBunnyMaterial &&
            ((n.uniforms.bunnyData.value = r.bunnyData),
            R.setValue(ge, "bunnyData", r.bunnyData));
          if (
            (R.setValue(ge, "modelViewMatrix", r.modelViewMatrix),
            R.setValue(ge, "normalMatrix", r.normalMatrix),
            R.setValue(ge, "modelMatrix", r.matrixWorld),
            n.isShaderMaterial || n.isRawShaderMaterial)
          ) {
            const e = n.uniformsGroups;
            for (let t = 0, i = e.length; t < i; t++)
              if (X.isWebGL2) {
                const i = e[t];
                fe.update(i, T), fe.bind(i, T);
              } else
                console.warn(
                  "THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2."
                );
          }
          return T;
        })(e, t, i, n, r);
      Y.setMaterial(n, a);
      let l = i.index;
      const c = i.attributes.position;
      if (null === l) {
        if (void 0 === c || 0 === c.count) return;
      } else if (0 === l.count) return;
      let h,
        u = 1;
      !0 === n.wireframe && ((l = te.getWireframeAttribute(i)), (u = 2)),
        me.setup(r, n, o, i, l);
      let p = ue;
      null !== l && ((h = ee.get(l)), (p = de), p.setIndex(h));
      const m = null !== l ? l.count : c.count,
        g = i.drawRange.start * u,
        v = i.drawRange.count * u,
        _ = null !== s ? s.start * u : 0,
        M = null !== s ? s.count * u : 1 / 0,
        w = Math.max(g, _),
        S = Math.min(m, g + v, _ + M) - 1,
        T = Math.max(0, S - w + 1);
      if (0 !== T) {
        if (r.isMesh)
          !0 === n.wireframe
            ? (Y.setLineWidth(n.wireframeLinewidth * H()), p.setMode(1))
            : p.setMode(4);
        else if (r.isLine) {
          let e = n.linewidth;
          void 0 === e && (e = 1),
            Y.setLineWidth(e * H()),
            r.isLineSegments
              ? p.setMode(1)
              : r.isLineLoop
              ? p.setMode(2)
              : p.setMode(3);
        } else r.isPoints ? p.setMode(0) : r.isSprite && p.setMode(4);
        if (r.isInstancedMesh) p.renderInstances(w, T, r.count);
        else if (i.isInstancedBufferGeometry) {
          const e = Math.min(i.instanceCount, i._maxInstanceCount);
          p.renderInstances(w, T, e);
        } else p.render(w, T);
      }
    }),
    (this.compile = function (e, t) {
      function i(e, t, i) {
        !0 === e.transparent && e.side === j
          ? ((e.side = W),
            (e.needsUpdate = !0),
            Ie(e, t, i),
            (e.side = G),
            (e.needsUpdate = !0),
            Ie(e, t, i),
            (e.side = j))
          : Ie(e, t, i);
      }
      (d = ae.get(e)),
        d.init(),
        m.push(d),
        e.traverseVisible(function (e) {
          e.isLight &&
            e.layers.test(t.layers) &&
            (d.pushLight(e), e.castShadow && d.pushShadow(e));
        }),
        d.setupLights(f.physicallyCorrectLights),
        e.traverse(function (t) {
          const n = t.material;
          if (n)
            if (Array.isArray(n))
              for (let r = 0; r < n.length; r++) {
                i(n[r], e, t);
              }
            else i(n, e, t);
        }),
        m.pop(),
        (d = null);
    });
  let Se = null;
  function Ee() {
    Ce.stop();
  }
  function Ae() {
    Ce.start();
  }
  const Ce = new Qr();
  function Pe(e, t, i, n) {
    if (!1 === e.visible) return;
    if (e.layers.test(t.layers))
      if (e.isGroup) i = e.renderOrder;
      else if (e.isLOD) !0 === e.autoUpdate && e.update(t);
      else if (e.isLight) d.pushLight(e), e.castShadow && d.pushShadow(e);
      else if (e.isSprite) {
        if (!e.frustumCulled || I.intersectsSprite(e)) {
          n && B.setFromMatrixPosition(e.matrixWorld).applyMatrix4(F);
          const t = ie.update(e),
            r = e.material;
          r.visible && u.push(e, t, r, i, B.z, null);
        }
      } else if (
        (e.isMesh || e.isLine || e.isPoints) &&
        (e.isSkinnedMesh &&
          e.skeleton.frame !== K.render.frame &&
          (e.skeleton.update(), (e.skeleton.frame = K.render.frame)),
        !e.frustumCulled || I.intersectsObject(e))
      ) {
        n && B.setFromMatrixPosition(e.matrixWorld).applyMatrix4(F);
        const t = ie.update(e),
          r = e.material;
        if (Array.isArray(r)) {
          const n = t.groups;
          for (let s = 0, a = n.length; s < a; s++) {
            const a = n[s],
              o = r[a.materialIndex];
            o && o.visible && u.push(e, t, o, i, B.z, a);
          }
        } else r.visible && u.push(e, t, r, i, B.z, null);
      }
    const r = e.children;
    for (let s = 0, a = r.length; s < a; s++) Pe(r[s], t, i, n);
  }
  function Le(e, t, i, n) {
    const r = e.opaque,
      a = e.transmissive,
      o = e.transparent;
    d.setupLightsView(i),
      a.length > 0 &&
        (function (e, t, i) {
          const n = X.isWebGL2;
          null === U &&
            (U = new Oi(1, 1, {
              generateMipmaps: !0,
              type: q.has("EXT_color_buffer_half_float") ? Qe : je,
              minFilter: We,
              samples: n && !0 === s ? 4 : 0,
            }));
          f.getDrawingBufferSize(k),
            n ? U.setSize(k.x, k.y) : U.setSize(ci(k.x), ci(k.y));
          const r = f.getRenderTarget();
          f.setRenderTarget(U), f.clear();
          const a = f.toneMapping;
          (f.toneMapping = Te),
            Re(e, t, i),
            (f.toneMapping = a),
            J.updateMultisampleRenderTarget(U),
            J.updateRenderTargetMipmap(U),
            f.setRenderTarget(r);
        })(r, t, i),
      n && Y.viewport(M.copy(n)),
      r.length > 0 && Re(r, t, i),
      a.length > 0 && Re(a, t, i),
      o.length > 0 && Re(o, t, i),
      Y.buffers.depth.setTest(!0),
      Y.buffers.depth.setMask(!0),
      Y.buffers.color.setMask(!0),
      Y.setPolygonOffset(!1);
  }
  function Re(e, t, i) {
    const n = !0 === t.isScene ? t.overrideMaterial : null;
    for (let r = 0, s = e.length; r < s; r++) {
      const s = e[r],
        a = s.object,
        o = s.geometry,
        l = null === n ? s.material : n,
        c = s.group;
      a.layers.test(i.layers) && De(a, t, i, o, l, c);
    }
  }
  function De(e, t, i, n, r, s) {
    e.onBeforeRender(f, t, i, n, r, s),
      e.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, e.matrixWorld),
      e.normalMatrix.getNormalMatrix(e.modelViewMatrix),
      r.onBeforeRender(f, t, i, n, e, s),
      !0 === r.transparent && r.side === j
        ? ((r.side = W),
          (r.needsUpdate = !0),
          f.renderBufferDirect(i, t, n, r, e, s),
          (r.side = G),
          (r.needsUpdate = !0),
          f.renderBufferDirect(i, t, n, r, e, s),
          (r.side = j))
        : f.renderBufferDirect(i, t, n, r, e, s),
      e.onAfterRender(f, t, i, n, r, s);
  }
  function Ie(e, t, i) {
    !0 !== t.isScene && (t = V);
    const n = Z.get(e),
      r = d.state.lights,
      s = d.state.shadowsArray,
      a = r.state.version,
      o = ne.getParameters(e, r.state, s, t, i),
      l = ne.getProgramCacheKey(o);
    let c = n.programs;
    (n.environment = e.isMeshStandardMaterial ? t.environment : null),
      (n.fog = t.fog),
      (n.envMap = (e.isMeshStandardMaterial ? $ : Q).get(
        e.envMap || n.environment
      )),
      void 0 === c &&
        (e.addEventListener("dispose", we), (c = new Map()), (n.programs = c));
    let h = c.get(l);
    if (void 0 !== h) {
      if (n.currentProgram === h && n.lightsStateVersion === a)
        return Oe(e, o), h;
    } else
      (o.uniforms = ne.getUniforms(e)),
        e.onBuild(i, o, f),
        e.onBeforeCompile(o, f),
        (h = ne.acquireProgram(o, l)),
        c.set(l, h),
        (n.uniforms = o.uniforms);
    const u = n.uniforms;
    ((e.isShaderMaterial || e.isRawShaderMaterial) && !0 !== e.clipping) ||
      (u.clippingPlanes = oe.uniform),
      Oe(e, o),
      (n.needsLights = (function (e) {
        return (
          e.isMeshLambertMaterial ||
          e.isMeshToonMaterial ||
          e.isMeshPhongMaterial ||
          e.isMeshStandardMaterial ||
          e.isShadowMaterial ||
          (e.isShaderMaterial && !0 === e.lights)
        );
      })(e)),
      (n.lightsStateVersion = a),
      n.needsLights &&
        ((u.ambientLightColor.value = r.state.ambient),
        (u.lightProbe.value = r.state.probe),
        (u.directionalLights.value = r.state.directional),
        (u.directionalLightShadows.value = r.state.directionalShadow),
        (u.spotLights.value = r.state.spot),
        (u.spotLightShadows.value = r.state.spotShadow),
        (u.rectAreaLights.value = r.state.rectArea),
        (u.ltc_1.value = r.state.rectAreaLTC1),
        (u.ltc_2.value = r.state.rectAreaLTC2),
        (u.pointLights.value = r.state.point),
        (u.pointLightShadows.value = r.state.pointShadow),
        (u.hemisphereLights.value = r.state.hemi),
        (u.directionalShadowMap.value = r.state.directionalShadowMap),
        (u.directionalShadowMatrix.value = r.state.directionalShadowMatrix),
        (u.spotShadowMap.value = r.state.spotShadowMap),
        (u.spotLightMatrix.value = r.state.spotLightMatrix),
        (u.spotLightMap.value = r.state.spotLightMap),
        (u.pointShadowMap.value = r.state.pointShadowMap),
        (u.pointShadowMatrix.value = r.state.pointShadowMatrix));
    const p = h.getUniforms(),
      m = Fa.seqWithValue(p.seq, u);
    return (n.currentProgram = h), (n.uniformsList = m), h;
  }
  function Oe(e, t) {
    const i = Z.get(e);
    (i.outputEncoding = t.outputEncoding),
      (i.instancing = t.instancing),
      (i.skinning = t.skinning),
      (i.morphTargets = t.morphTargets),
      (i.morphNormals = t.morphNormals),
      (i.morphColors = t.morphColors),
      (i.morphTargetsCount = t.morphTargetsCount),
      (i.numClippingPlanes = t.numClippingPlanes),
      (i.numIntersection = t.numClipIntersection),
      (i.vertexAlphas = t.vertexAlphas),
      (i.vertexTangents = t.vertexTangents),
      (i.toneMapping = t.toneMapping);
  }
  Ce.setAnimationLoop(function (e) {
    Se && Se(e);
  }),
    "undefined" != typeof self && Ce.setContext(self),
    (this.setAnimationLoop = function (e) {
      (Se = e), xe.setAnimationLoop(e), null === e ? Ce.stop() : Ce.start();
    }),
    xe.addEventListener("sessionstart", Ee),
    xe.addEventListener("sessionend", Ae),
    (this.render = function (e, t) {
      if (void 0 !== t && !0 !== t.isCamera)
        return void console.error(
          "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
        );
      if (!0 === g) return;
      !0 === e.matrixWorldAutoUpdate && e.updateMatrixWorld(),
        null === t.parent &&
          !0 === t.matrixWorldAutoUpdate &&
          t.updateMatrixWorld(),
        !0 === xe.enabled &&
          !0 === xe.isPresenting &&
          (!0 === xe.cameraAutoUpdate && xe.updateCamera(t),
          (t = xe.getCamera())),
        !0 === e.isScene && e.onBeforeRender(f, e, t, x),
        (d = ae.get(e, m.length)),
        d.init(),
        m.push(d),
        F.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
        I.setFromProjectionMatrix(F),
        (z = this.localClippingEnabled),
        (O = oe.init(this.clippingPlanes, z, t)),
        (u = se.get(e, p.length)),
        u.init(),
        p.push(u),
        Pe(e, t, 0, f.sortObjects),
        u.finish(),
        !0 === f.sortObjects && u.sort(C, P),
        !0 === O && oe.beginShadows();
      const i = d.state.shadowsArray;
      if (
        (le.render(i, e, t),
        !0 === O && oe.endShadows(),
        !0 === this.info.autoReset && this.info.reset(),
        ce.render(u, e),
        d.setupLights(f.physicallyCorrectLights),
        t.isArrayCamera)
      ) {
        const i = t.cameras;
        for (let t = 0, n = i.length; t < n; t++) {
          const n = i[t];
          Le(u, e, n, n.viewport);
        }
      } else Le(u, e, t);
      null !== x &&
        (J.updateMultisampleRenderTarget(x), J.updateRenderTargetMipmap(x)),
        !0 === e.isScene && e.onAfterRender(f, e, t),
        me.resetDefaultState(),
        (y = -1),
        (b = null),
        m.pop(),
        (d = m.length > 0 ? m[m.length - 1] : null),
        p.pop(),
        (u = p.length > 0 ? p[p.length - 1] : null);
    }),
    (this.getActiveCubeFace = function () {
      return v;
    }),
    (this.getActiveMipmapLevel = function () {
      return _;
    }),
    (this.getRenderTarget = function () {
      return x;
    }),
    (this.setRenderTargetTextures = function (e, t, i) {
      (Z.get(e.texture).__webglTexture = t),
        (Z.get(e.depthTexture).__webglTexture = i);
      const n = Z.get(e);
      (n.__hasExternalTextures = !0),
        n.__hasExternalTextures &&
          ((n.__autoAllocateDepthBuffer = void 0 === i),
          n.__autoAllocateDepthBuffer ||
            (!0 === q.has("WEBGL_multisampled_render_to_texture") &&
              (console.warn(
                "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
              ),
              (n.__useRenderToTexture = !1))));
    }),
    (this.setRenderTargetFramebuffer = function (e, t) {
      const i = Z.get(e);
      (i.__webglFramebuffer = t), (i.__useDefaultFramebuffer = void 0 === t);
    }),
    (this.setRenderTarget = function (e, t = 0, i = 0) {
      (x = e), (v = t), (_ = i);
      let n = !0,
        r = null,
        s = !1,
        a = !1;
      if (e) {
        const i = Z.get(e);
        void 0 !== i.__useDefaultFramebuffer
          ? (Y.bindFramebuffer(36160, null), (n = !1))
          : void 0 === i.__webglFramebuffer
          ? J.setupRenderTarget(e)
          : i.__hasExternalTextures &&
            J.rebindTextures(
              e,
              Z.get(e.texture).__webglTexture,
              Z.get(e.depthTexture).__webglTexture
            );
        const o = e.texture;
        (o.isData3DTexture ||
          o.isDataArrayTexture ||
          o.isCompressedArrayTexture) &&
          (a = !0);
        const l = Z.get(e).__webglFramebuffer;
        e.isWebGLCubeRenderTarget
          ? ((r = l[t]), (s = !0))
          : (r =
              X.isWebGL2 && e.samples > 0 && !1 === J.useMultisampledRTT(e)
                ? Z.get(e).__webglMultisampledFramebuffer
                : l),
          M.copy(e.viewport),
          w.copy(e.scissor),
          (S = e.scissorTest);
      } else
        M.copy(L).multiplyScalar(A).floor(),
          w.copy(R).multiplyScalar(A).floor(),
          (S = D);
      if (
        (Y.bindFramebuffer(36160, r) &&
          X.drawBuffers &&
          n &&
          Y.drawBuffers(e, r),
        Y.viewport(M),
        Y.scissor(w),
        Y.setScissorTest(S),
        s)
      ) {
        const n = Z.get(e.texture);
        ge.framebufferTexture2D(36160, 36064, 34069 + t, n.__webglTexture, i);
      } else if (a) {
        const n = Z.get(e.texture),
          r = t || 0;
        ge.framebufferTextureLayer(36160, 36064, n.__webglTexture, i || 0, r);
      }
      y = -1;
    }),
    (this.readRenderTargetPixels = function (e, t, i, n, r, s, a) {
      if (!e || !e.isWebGLRenderTarget)
        return void console.error(
          "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
        );
      let o = Z.get(e).__webglFramebuffer;
      if ((e.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]), o)) {
        Y.bindFramebuffer(36160, o);
        try {
          const a = e.texture,
            o = a.format,
            l = a.type;
          if (o !== rt && pe.convert(o) !== ge.getParameter(35739))
            return void console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
            );
          const c =
            l === Qe &&
            (q.has("EXT_color_buffer_half_float") ||
              (X.isWebGL2 && q.has("EXT_color_buffer_float")));
          if (
            !(
              l === je ||
              pe.convert(l) === ge.getParameter(35738) ||
              (l === Je &&
                (X.isWebGL2 ||
                  q.has("OES_texture_float") ||
                  q.has("WEBGL_color_buffer_float"))) ||
              c
            )
          )
            return void console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
            );
          t >= 0 &&
            t <= e.width - n &&
            i >= 0 &&
            i <= e.height - r &&
            ge.readPixels(t, i, n, r, pe.convert(o), pe.convert(l), s);
        } finally {
          const e = null !== x ? Z.get(x).__webglFramebuffer : null;
          Y.bindFramebuffer(36160, e);
        }
      }
    }),
    (this.copyFramebufferToTexture = function (e, t, i = 0) {
      const n = Math.pow(2, -i),
        r = Math.floor(t.image.width * n),
        s = Math.floor(t.image.height * n);
      J.setTexture2D(t, 0),
        ge.copyTexSubImage2D(3553, i, 0, 0, e.x, e.y, r, s),
        Y.unbindTexture();
    }),
    (this.copyTextureToTexture = function (e, t, i, n = 0) {
      const r = t.image.width,
        s = t.image.height,
        a = pe.convert(i.format),
        o = pe.convert(i.type);
      J.setTexture2D(i, 0),
        ge.pixelStorei(37440, i.flipY),
        ge.pixelStorei(37441, i.premultiplyAlpha),
        ge.pixelStorei(3317, i.unpackAlignment),
        t.isDataTexture
          ? ge.texSubImage2D(3553, n, e.x, e.y, r, s, a, o, t.image.data)
          : t.isCompressedTexture
          ? ge.compressedTexSubImage2D(
              3553,
              n,
              e.x,
              e.y,
              t.mipmaps[0].width,
              t.mipmaps[0].height,
              a,
              t.mipmaps[0].data
            )
          : ge.texSubImage2D(3553, n, e.x, e.y, a, o, t.image),
        0 === n && i.generateMipmaps && ge.generateMipmap(3553),
        Y.unbindTexture();
    }),
    (this.copyTextureToTexture3D = function (e, t, i, n, r = 0) {
      if (f.isWebGL1Renderer)
        return void console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
        );
      const s = e.max.x - e.min.x + 1,
        a = e.max.y - e.min.y + 1,
        o = e.max.z - e.min.z + 1,
        l = pe.convert(n.format),
        c = pe.convert(n.type);
      let h;
      if (n.isData3DTexture) J.setTexture3D(n, 0), (h = 32879);
      else {
        if (!n.isDataArrayTexture)
          return void console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
          );
        J.setTexture2DArray(n, 0), (h = 35866);
      }
      ge.pixelStorei(37440, n.flipY),
        ge.pixelStorei(37441, n.premultiplyAlpha),
        ge.pixelStorei(3317, n.unpackAlignment);
      const u = ge.getParameter(3314),
        d = ge.getParameter(32878),
        p = ge.getParameter(3316),
        m = ge.getParameter(3315),
        g = ge.getParameter(32877),
        v = i.isCompressedTexture ? i.mipmaps[0] : i.image;
      ge.pixelStorei(3314, v.width),
        ge.pixelStorei(32878, v.height),
        ge.pixelStorei(3316, e.min.x),
        ge.pixelStorei(3315, e.min.y),
        ge.pixelStorei(32877, e.min.z),
        i.isDataTexture || i.isData3DTexture
          ? ge.texSubImage3D(h, r, t.x, t.y, t.z, s, a, o, l, c, v.data)
          : i.isCompressedArrayTexture
          ? (console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
            ),
            ge.compressedTexSubImage3D(h, r, t.x, t.y, t.z, s, a, o, l, v.data))
          : ge.texSubImage3D(h, r, t.x, t.y, t.z, s, a, o, l, c, v),
        ge.pixelStorei(3314, u),
        ge.pixelStorei(32878, d),
        ge.pixelStorei(3316, p),
        ge.pixelStorei(3315, m),
        ge.pixelStorei(32877, g),
        0 === r && n.generateMipmaps && ge.generateMipmap(h),
        Y.unbindTexture();
    }),
    (this.initTexture = function (e) {
      e.isCubeTexture
        ? J.setTextureCube(e, 0)
        : e.isData3DTexture
        ? J.setTexture3D(e, 0)
        : e.isDataArrayTexture || e.isCompressedArrayTexture
        ? J.setTexture2DArray(e, 0)
        : J.setTexture2D(e, 0),
        Y.unbindTexture();
    }),
    (this.resetState = function () {
      (v = 0), (_ = 0), (x = null), Y.reset(), me.reset();
    }),
    "undefined" != typeof __THREE_DEVTOOLS__ &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent("observe", { detail: this })
      );
}
class Oo extends Io {}
Oo.prototype.isWebGL1Renderer = !0;
let No = class extends Bn {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.overrideMaterial = null),
      "undefined" != typeof __THREE_DEVTOOLS__ &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      null !== e.background && (this.background = e.background.clone()),
      null !== e.environment && (this.environment = e.environment.clone()),
      null !== e.fog && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      null !== e.overrideMaterial &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      null !== this.fog && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.backgroundBlurriness = this.backgroundBlurriness),
      t
    );
  }
  get autoUpdate() {
    return (
      console.warn(
        "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
      ),
      this.matrixWorldAutoUpdate
    );
  }
  set autoUpdate(e) {
    console.warn(
      "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
    ),
      (this.matrixWorldAutoUpdate = e);
  }
};
class zo {
  constructor(e, t) {
    (this.isInterleavedBuffer = !0),
      (this.array = e),
      (this.stride = t),
      (this.count = void 0 !== e ? e.length / t : 0),
      (this.usage = Qt),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0),
      (this.uuid = si());
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    !0 === e && this.version++;
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
    void 0 === e.arrayBuffers && (e.arrayBuffers = {}),
      void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = si()),
      void 0 === e.arrayBuffers[this.array.buffer._uuid] &&
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
      void 0 === e.arrayBuffers && (e.arrayBuffers = {}),
      void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = si()),
      void 0 === e.arrayBuffers[this.array.buffer._uuid] &&
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
const Uo = new Fi();
class Fo {
  constructor(e, t, i, n = !1) {
    (this.isInterleavedBufferAttribute = !0),
      (this.name = ""),
      (this.data = e),
      (this.itemSize = t),
      (this.offset = i),
      (this.normalized = !0 === n);
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
      Uo.fromBufferAttribute(this, t),
        Uo.applyMatrix4(e),
        this.setXYZ(t, Uo.x, Uo.y, Uo.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++)
      Uo.fromBufferAttribute(this, t),
        Uo.applyNormalMatrix(e),
        this.setXYZ(t, Uo.x, Uo.y, Uo.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++)
      Uo.fromBufferAttribute(this, t),
        Uo.transformDirection(e),
        this.setXYZ(t, Uo.x, Uo.y, Uo.z);
    return this;
  }
  setX(e, t) {
    return (
      this.normalized && (t = ui(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset] = t),
      this
    );
  }
  setY(e, t) {
    return (
      this.normalized && (t = ui(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 1] = t),
      this
    );
  }
  setZ(e, t) {
    return (
      this.normalized && (t = ui(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 2] = t),
      this
    );
  }
  setW(e, t) {
    return (
      this.normalized && (t = ui(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 3] = t),
      this
    );
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = hi(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = hi(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = hi(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = hi(t, this.array)), t;
  }
  setXY(e, t, i) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized && ((t = ui(t, this.array)), (i = ui(i, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = i),
      this
    );
  }
  setXYZ(e, t, i, n) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized &&
        ((t = ui(t, this.array)),
        (i = ui(i, this.array)),
        (n = ui(n, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = i),
      (this.data.array[e + 2] = n),
      this
    );
  }
  setXYZW(e, t, i, n, r) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized &&
        ((t = ui(t, this.array)),
        (i = ui(i, this.array)),
        (n = ui(n, this.array)),
        (r = ui(r, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = i),
      (this.data.array[e + 2] = n),
      (this.data.array[e + 3] = r),
      this
    );
  }
  clone(e) {
    if (void 0 === e) {
      console.log(
        "THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data."
      );
      const e = [];
      for (let t = 0; t < this.count; t++) {
        const i = t * this.data.stride + this.offset;
        for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[i + t]);
      }
      return new nr(
        new this.array.constructor(e),
        this.itemSize,
        this.normalized
      );
    }
    return (
      void 0 === e.interleavedBuffers && (e.interleavedBuffers = {}),
      void 0 === e.interleavedBuffers[this.data.uuid] &&
        (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)),
      new Fo(
        e.interleavedBuffers[this.data.uuid],
        this.itemSize,
        this.offset,
        this.normalized
      )
    );
  }
  toJSON(e) {
    if (void 0 === e) {
      console.log(
        "THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data."
      );
      const e = [];
      for (let t = 0; t < this.count; t++) {
        const i = t * this.data.stride + this.offset;
        for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[i + t]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: e,
        normalized: this.normalized,
      };
    }
    return (
      void 0 === e.interleavedBuffers && (e.interleavedBuffers = {}),
      void 0 === e.interleavedBuffers[this.data.uuid] &&
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
const ko = new Fi(),
  Bo = new Ii(),
  Vo = new Ii(),
  Ho = new Fi(),
  Go = new fn();
class Wo extends Dr {
  constructor(e, t) {
    super(e, t),
      (this.isSkinnedMesh = !0),
      (this.type = "SkinnedMesh"),
      (this.bindMode = "attached"),
      (this.bindMatrix = new fn()),
      (this.bindMatrixInverse = new fn());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.bindMode = e.bindMode),
      this.bindMatrix.copy(e.bindMatrix),
      this.bindMatrixInverse.copy(e.bindMatrixInverse),
      (this.skeleton = e.skeleton),
      this
    );
  }
  bind(e, t) {
    (this.skeleton = e),
      void 0 === t &&
        (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(),
        (t = this.matrixWorld)),
      this.bindMatrix.copy(t),
      this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new Ii(),
      t = this.geometry.attributes.skinWeight;
    for (let i = 0, n = t.count; i < n; i++) {
      e.fromBufferAttribute(t, i);
      const n = 1 / e.manhattanLength();
      n !== 1 / 0 ? e.multiplyScalar(n) : e.set(1, 0, 0, 0),
        t.setXYZW(i, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      "attached" === this.bindMode
        ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
        : "detached" === this.bindMode
        ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
        : console.warn(
            "THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode
          );
  }
  boneTransform(e, t) {
    const i = this.skeleton,
      n = this.geometry;
    Bo.fromBufferAttribute(n.attributes.skinIndex, e),
      Vo.fromBufferAttribute(n.attributes.skinWeight, e),
      ko.copy(t).applyMatrix4(this.bindMatrix),
      t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const e = Vo.getComponent(r);
      if (0 !== e) {
        const n = Bo.getComponent(r);
        Go.multiplyMatrices(i.bones[n].matrixWorld, i.boneInverses[n]),
          t.addScaledVector(Ho.copy(ko).applyMatrix4(Go), e);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class jo extends Bn {
  constructor() {
    super(), (this.isBone = !0), (this.type = "Bone");
  }
}
class qo extends Di {
  constructor(e = null, t = 1, i = 1, n, r, s, a, o, l = ke, c = ke, h, u) {
    super(null, s, a, o, l, c, n, r, h, u),
      (this.isDataTexture = !0),
      (this.image = { data: e, width: t, height: i }),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
const Xo = new fn(),
  Yo = new fn();
class Ko {
  constructor(e = [], t = []) {
    (this.uuid = si()),
      (this.bones = e.slice(0)),
      (this.boneInverses = t),
      (this.boneMatrices = null),
      (this.boneTexture = null),
      (this.boneTextureSize = 0),
      (this.frame = -1),
      this.init();
  }
  init() {
    const e = this.bones,
      t = this.boneInverses;
    if (((this.boneMatrices = new Float32Array(16 * e.length)), 0 === t.length))
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn(
        "THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."
      ),
        (this.boneInverses = []);
      for (let e = 0, t = this.bones.length; e < t; e++)
        this.boneInverses.push(new fn());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const t = new fn();
      this.bones[e] && t.copy(this.bones[e].matrixWorld).invert(),
        this.boneInverses.push(t);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const t = this.bones[e];
      t && t.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const t = this.bones[e];
      t &&
        (t.parent && t.parent.isBone
          ? (t.matrix.copy(t.parent.matrixWorld).invert(),
            t.matrix.multiply(t.matrixWorld))
          : t.matrix.copy(t.matrixWorld),
        t.matrix.decompose(t.position, t.quaternion, t.scale));
    }
  }
  update() {
    const e = this.bones,
      t = this.boneInverses,
      i = this.boneMatrices,
      n = this.boneTexture;
    for (let r = 0, s = e.length; r < s; r++) {
      const n = e[r] ? e[r].matrixWorld : Yo;
      Xo.multiplyMatrices(n, t[r]), Xo.toArray(i, 16 * r);
    }
    null !== n && (n.needsUpdate = !0);
  }
  clone() {
    return new Ko(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(4 * this.bones.length);
    var t;
    (t = e),
      (e = Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))),
      (e = Math.max(e, 4));
    const i = new Float32Array(e * e * 4);
    i.set(this.boneMatrices);
    const n = new qo(i, e, e, rt, Je);
    return (
      (n.needsUpdate = !0),
      (this.boneMatrices = i),
      (this.boneTexture = n),
      (this.boneTextureSize = e),
      this
    );
  }
  getBoneByName(e) {
    for (let t = 0, i = this.bones.length; t < i; t++) {
      const i = this.bones[t];
      if (i.name === e) return i;
    }
  }
  dispose() {
    null !== this.boneTexture &&
      (this.boneTexture.dispose(), (this.boneTexture = null));
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let i = 0, n = e.bones.length; i < n; i++) {
      const n = e.bones[i];
      let r = t[n];
      void 0 === r &&
        (console.warn("THREE.Skeleton: No bone found with UUID:", n),
        (r = new jo())),
        this.bones.push(r),
        this.boneInverses.push(new fn().fromArray(e.boneInverses[i]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "Skeleton",
        generator: "Skeleton.toJSON",
      },
      bones: [],
      boneInverses: [],
    };
    e.uuid = this.uuid;
    const t = this.bones,
      i = this.boneInverses;
    for (let n = 0, r = t.length; n < r; n++) {
      const r = t[n];
      e.bones.push(r.uuid);
      const s = i[n];
      e.boneInverses.push(s.toArray());
    }
    return e;
  }
}
class Zo extends nr {
  constructor(e, t, i, n = 1) {
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
const Jo = new fn(),
  Qo = new fn(),
  $o = [],
  el = new fn(),
  tl = new Dr();
class il extends Dr {
  constructor(e, t, i) {
    super(e, t),
      (this.isInstancedMesh = !0),
      (this.instanceMatrix = new Zo(new Float32Array(16 * i), 16)),
      (this.instanceColor = null),
      (this.count = i),
      (this.frustumCulled = !1);
    for (let n = 0; n < i; n++) this.setMatrixAt(n, el);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.instanceMatrix.copy(e.instanceMatrix),
      null !== e.instanceColor &&
        (this.instanceColor = e.instanceColor.clone()),
      (this.count = e.count),
      this
    );
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, 3 * e);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, 16 * e);
  }
  raycast(e, t) {
    const i = this.matrixWorld,
      n = this.count;
    if (
      ((tl.geometry = this.geometry),
      (tl.material = this.material),
      void 0 !== tl.material)
    )
      for (let r = 0; r < n; r++) {
        this.getMatrixAt(r, Jo),
          Qo.multiplyMatrices(i, Jo),
          (tl.matrixWorld = Qo),
          tl.raycast(e, $o);
        for (let e = 0, i = $o.length; e < i; e++) {
          const i = $o[e];
          (i.instanceId = r), (i.object = this), t.push(i);
        }
        $o.length = 0;
      }
  }
  setColorAt(e, t) {
    null === this.instanceColor &&
      (this.instanceColor = new Zo(
        new Float32Array(3 * this.instanceMatrix.count),
        3
      )),
      t.toArray(this.instanceColor.array, 3 * e);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, 16 * e);
  }
  updateMorphTargets() {}
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class nl extends $n {
  constructor(e) {
    super(),
      (this.isLineBasicMaterial = !0),
      (this.type = "LineBasicMaterial"),
      (this.color = new Ei(16777215)),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.linewidth = e.linewidth),
      (this.linecap = e.linecap),
      (this.linejoin = e.linejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const rl = new Fi(),
  sl = new Fi(),
  al = new fn(),
  ol = new mn(),
  ll = new an();
let cl = class extends Bn {
  constructor(e = new mr(), t = new nl()) {
    super(),
      (this.isLine = !0),
      (this.type = "Line"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  computeLineDistances() {
    const e = this.geometry;
    if (null === e.index) {
      const t = e.attributes.position,
        i = [0];
      for (let e = 1, n = t.count; e < n; e++)
        rl.fromBufferAttribute(t, e - 1),
          sl.fromBufferAttribute(t, e),
          (i[e] = i[e - 1]),
          (i[e] += rl.distanceTo(sl));
      e.setAttribute("lineDistance", new ar(i, 1));
    } else
      console.warn(
        "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
  raycast(e, t) {
    const i = this.geometry,
      n = this.matrixWorld,
      r = e.params.Line.threshold,
      s = i.drawRange;
    if (
      (null === i.boundingSphere && i.computeBoundingSphere(),
      ll.copy(i.boundingSphere),
      ll.applyMatrix4(n),
      (ll.radius += r),
      !1 === e.ray.intersectsSphere(ll))
    )
      return;
    al.copy(n).invert(), ol.copy(e.ray).applyMatrix4(al);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      o = a * a,
      l = new Fi(),
      c = new Fi(),
      h = new Fi(),
      u = new Fi(),
      d = this.isLineSegments ? 2 : 1,
      p = i.index,
      m = i.attributes.position;
    if (null !== p) {
      for (
        let i = Math.max(0, s.start),
          n = Math.min(p.count, s.start + s.count) - 1;
        i < n;
        i += d
      ) {
        const n = p.getX(i),
          r = p.getX(i + 1);
        l.fromBufferAttribute(m, n), c.fromBufferAttribute(m, r);
        if (ol.distanceSqToSegment(l, c, u, h) > o) continue;
        u.applyMatrix4(this.matrixWorld);
        const s = e.ray.origin.distanceTo(u);
        s < e.near ||
          s > e.far ||
          t.push({
            distance: s,
            point: h.clone().applyMatrix4(this.matrixWorld),
            index: i,
            face: null,
            faceIndex: null,
            object: this,
          });
      }
    } else {
      for (
        let i = Math.max(0, s.start),
          n = Math.min(m.count, s.start + s.count) - 1;
        i < n;
        i += d
      ) {
        l.fromBufferAttribute(m, i), c.fromBufferAttribute(m, i + 1);
        if (ol.distanceSqToSegment(l, c, u, h) > o) continue;
        u.applyMatrix4(this.matrixWorld);
        const n = e.ray.origin.distanceTo(u);
        n < e.near ||
          n > e.far ||
          t.push({
            distance: n,
            point: h.clone().applyMatrix4(this.matrixWorld),
            index: i,
            face: null,
            faceIndex: null,
            object: this,
          });
      }
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes,
      t = Object.keys(e);
    if (t.length > 0) {
      const i = e[t[0]];
      if (void 0 !== i) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let e = 0, t = i.length; e < t; e++) {
          const t = i[e].name || String(e);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[t] = e);
        }
      }
    }
  }
};
const hl = new Fi(),
  ul = new Fi();
class dl extends cl {
  constructor(e, t) {
    super(e, t), (this.isLineSegments = !0), (this.type = "LineSegments");
  }
  computeLineDistances() {
    const e = this.geometry;
    if (null === e.index) {
      const t = e.attributes.position,
        i = [];
      for (let e = 0, n = t.count; e < n; e += 2)
        hl.fromBufferAttribute(t, e),
          ul.fromBufferAttribute(t, e + 1),
          (i[e] = 0 === e ? 0 : i[e - 1]),
          (i[e + 1] = i[e] + hl.distanceTo(ul));
      e.setAttribute("lineDistance", new ar(i, 1));
    } else
      console.warn(
        "THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
}
class pl extends cl {
  constructor(e, t) {
    super(e, t), (this.isLineLoop = !0), (this.type = "LineLoop");
  }
}
class ml extends $n {
  constructor(e) {
    super(),
      (this.isPointsMaterial = !0),
      (this.type = "PointsMaterial"),
      (this.color = new Ei(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.size = e.size),
      (this.sizeAttenuation = e.sizeAttenuation),
      (this.fog = e.fog),
      this
    );
  }
}
const fl = new fn(),
  gl = new mn(),
  vl = new an(),
  _l = new Fi();
class xl extends Bn {
  constructor(e = new mr(), t = new ml()) {
    super(),
      (this.isPoints = !0),
      (this.type = "Points"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  raycast(e, t) {
    const i = this.geometry,
      n = this.matrixWorld,
      r = e.params.Points.threshold,
      s = i.drawRange;
    if (
      (null === i.boundingSphere && i.computeBoundingSphere(),
      vl.copy(i.boundingSphere),
      vl.applyMatrix4(n),
      (vl.radius += r),
      !1 === e.ray.intersectsSphere(vl))
    )
      return;
    fl.copy(n).invert(), gl.copy(e.ray).applyMatrix4(fl);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      o = a * a,
      l = i.index,
      c = i.attributes.position;
    if (null !== l) {
      for (
        let i = Math.max(0, s.start), r = Math.min(l.count, s.start + s.count);
        i < r;
        i++
      ) {
        const r = l.getX(i);
        _l.fromBufferAttribute(c, r), yl(_l, r, o, n, e, t, this);
      }
    } else {
      for (
        let i = Math.max(0, s.start), r = Math.min(c.count, s.start + s.count);
        i < r;
        i++
      )
        _l.fromBufferAttribute(c, i), yl(_l, i, o, n, e, t, this);
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes,
      t = Object.keys(e);
    if (t.length > 0) {
      const i = e[t[0]];
      if (void 0 !== i) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let e = 0, t = i.length; e < t; e++) {
          const t = i[e].name || String(e);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[t] = e);
        }
      }
    }
  }
}
function yl(e, t, i, n, r, s, a) {
  const o = gl.distanceSqToPoint(e);
  if (o < i) {
    const i = new Fi();
    gl.closestPointToPoint(e, i), i.applyMatrix4(n);
    const l = r.ray.origin.distanceTo(i);
    if (l < r.near || l > r.far) return;
    s.push({
      distance: l,
      distanceToRay: Math.sqrt(o),
      point: i,
      index: t,
      face: null,
      object: a,
    });
  }
}
class bl extends mr {
  constructor(
    e = 1,
    t = 32,
    i = 16,
    n = 0,
    r = 2 * Math.PI,
    s = 0,
    a = Math.PI
  ) {
    super(),
      (this.type = "SphereGeometry"),
      (this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: i,
        phiStart: n,
        phiLength: r,
        thetaStart: s,
        thetaLength: a,
      }),
      (t = Math.max(3, Math.floor(t))),
      (i = Math.max(2, Math.floor(i)));
    const o = Math.min(s + a, Math.PI);
    let l = 0;
    const c = [],
      h = new Fi(),
      u = new Fi(),
      d = [],
      p = [],
      m = [],
      f = [];
    for (let g = 0; g <= i; g++) {
      const d = [],
        v = g / i;
      let _ = 0;
      0 == g && 0 == s
        ? (_ = 0.5 / t)
        : g == i && o == Math.PI && (_ = -0.5 / t);
      for (let i = 0; i <= t; i++) {
        const o = i / t;
        (h.x = -e * Math.cos(n + o * r) * Math.sin(s + v * a)),
          (h.y = e * Math.cos(s + v * a)),
          (h.z = e * Math.sin(n + o * r) * Math.sin(s + v * a)),
          p.push(h.x, h.y, h.z),
          u.copy(h).normalize(),
          m.push(u.x, u.y, u.z),
          f.push(o + _, 1 - v),
          d.push(l++);
      }
      c.push(d);
    }
    for (let g = 0; g < i; g++)
      for (let e = 0; e < t; e++) {
        const t = c[g][e + 1],
          n = c[g][e],
          r = c[g + 1][e],
          a = c[g + 1][e + 1];
        (0 !== g || s > 0) && d.push(t, n, a),
          (g !== i - 1 || o < Math.PI) && d.push(n, r, a);
      }
    this.setIndex(d),
      this.setAttribute("position", new ar(p, 3)),
      this.setAttribute("normal", new ar(m, 3)),
      this.setAttribute("uv", new ar(f, 2));
  }
  static fromJSON(e) {
    return new bl(
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
class Ml extends Fr {
  constructor(e) {
    super(e),
      (this.isRawShaderMaterial = !0),
      (this.type = "RawShaderMaterial");
  }
}
class wl extends $n {
  constructor(e) {
    super(),
      (this.isMeshStandardMaterial = !0),
      (this.defines = { STANDARD: "" }),
      (this.type = "MeshStandardMaterial"),
      (this.color = new Ei(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Ei(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = Xt),
      (this.normalScale = new di(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "" }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
class Sl extends wl {
  constructor(e) {
    super(),
      (this.isMeshPhysicalMaterial = !0),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.type = "MeshPhysicalMaterial"),
      (this.clearcoatMap = null),
      (this.clearcoatRoughness = 0),
      (this.clearcoatRoughnessMap = null),
      (this.clearcoatNormalScale = new di(1, 1)),
      (this.clearcoatNormalMap = null),
      (this.ior = 1.5),
      Object.defineProperty(this, "reflectivity", {
        get: function () {
          return ai((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
        },
        set: function (e) {
          this.ior = (1 + 0.4 * e) / (1 - 0.4 * e);
        },
      }),
      (this.iridescenceMap = null),
      (this.iridescenceIOR = 1.3),
      (this.iridescenceThicknessRange = [100, 400]),
      (this.iridescenceThicknessMap = null),
      (this.sheenColor = new Ei(0)),
      (this.sheenColorMap = null),
      (this.sheenRoughness = 1),
      (this.sheenRoughnessMap = null),
      (this.transmissionMap = null),
      (this.thickness = 0),
      (this.thicknessMap = null),
      (this.attenuationDistance = 1 / 0),
      (this.attenuationColor = new Ei(1, 1, 1)),
      (this.specularIntensity = 1),
      (this.specularIntensityMap = null),
      (this.specularColor = new Ei(1, 1, 1)),
      (this.specularColorMap = null),
      (this._sheen = 0),
      (this._clearcoat = 0),
      (this._iridescence = 0),
      (this._transmission = 0),
      this.setValues(e);
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, (this._sheen = e);
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, (this._clearcoat = e);
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, (this._iridescence = e);
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, (this._transmission = e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.clearcoat = e.clearcoat),
      (this.clearcoatMap = e.clearcoatMap),
      (this.clearcoatRoughness = e.clearcoatRoughness),
      (this.clearcoatRoughnessMap = e.clearcoatRoughnessMap),
      (this.clearcoatNormalMap = e.clearcoatNormalMap),
      this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
      (this.ior = e.ior),
      (this.iridescence = e.iridescence),
      (this.iridescenceMap = e.iridescenceMap),
      (this.iridescenceIOR = e.iridescenceIOR),
      (this.iridescenceThicknessRange = [...e.iridescenceThicknessRange]),
      (this.iridescenceThicknessMap = e.iridescenceThicknessMap),
      (this.sheen = e.sheen),
      this.sheenColor.copy(e.sheenColor),
      (this.sheenColorMap = e.sheenColorMap),
      (this.sheenRoughness = e.sheenRoughness),
      (this.sheenRoughnessMap = e.sheenRoughnessMap),
      (this.transmission = e.transmission),
      (this.transmissionMap = e.transmissionMap),
      (this.thickness = e.thickness),
      (this.thicknessMap = e.thicknessMap),
      (this.attenuationDistance = e.attenuationDistance),
      this.attenuationColor.copy(e.attenuationColor),
      (this.specularIntensity = e.specularIntensity),
      (this.specularIntensityMap = e.specularIntensityMap),
      this.specularColor.copy(e.specularColor),
      (this.specularColorMap = e.specularColorMap),
      this
    );
  }
}
class Tl extends $n {
  constructor(e) {
    super(),
      (this.isMeshPhongMaterial = !0),
      (this.type = "MeshPhongMaterial"),
      (this.color = new Ei(16777215)),
      (this.specular = new Ei(1118481)),
      (this.shininess = 30),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Ei(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = Xt),
      (this.normalScale = new di(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = Me),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      this.specular.copy(e.specular),
      (this.shininess = e.shininess),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
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
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
function El(e, t, i) {
  return Cl(e)
    ? new e.constructor(e.subarray(t, void 0 !== i ? i : e.length))
    : e.slice(t, i);
}
function Al(e, t, i) {
  return !e || (!i && e.constructor === t)
    ? e
    : "number" == typeof t.BYTES_PER_ELEMENT
    ? new t(e)
    : Array.prototype.slice.call(e);
}
function Cl(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Pl(e) {
  const t = e.length,
    i = new Array(t);
  for (let n = 0; n !== t; ++n) i[n] = n;
  return (
    i.sort(function (t, i) {
      return e[t] - e[i];
    }),
    i
  );
}
function Ll(e, t, i) {
  const n = e.length,
    r = new e.constructor(n);
  for (let s = 0, a = 0; a !== n; ++s) {
    const n = i[s] * t;
    for (let i = 0; i !== t; ++i) r[a++] = e[n + i];
  }
  return r;
}
function Rl(e, t, i, n) {
  let r = 1,
    s = e[0];
  for (; void 0 !== s && void 0 === s[n]; ) s = e[r++];
  if (void 0 === s) return;
  let a = s[n];
  if (void 0 !== a)
    if (Array.isArray(a))
      do {
        (a = s[n]),
          void 0 !== a && (t.push(s.time), i.push.apply(i, a)),
          (s = e[r++]);
      } while (void 0 !== s);
    else if (void 0 !== a.toArray)
      do {
        (a = s[n]),
          void 0 !== a && (t.push(s.time), a.toArray(i, i.length)),
          (s = e[r++]);
      } while (void 0 !== s);
    else
      do {
        (a = s[n]), void 0 !== a && (t.push(s.time), i.push(a)), (s = e[r++]);
      } while (void 0 !== s);
}
class Dl {
  constructor(e, t, i, n) {
    (this.parameterPositions = e),
      (this._cachedIndex = 0),
      (this.resultBuffer = void 0 !== n ? n : new t.constructor(i)),
      (this.sampleValues = t),
      (this.valueSize = i),
      (this.settings = null),
      (this.DefaultSettings_ = {});
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let i = this._cachedIndex,
      n = t[i],
      r = t[i - 1];
    e: {
      t: {
        let s;
        i: {
          n: if (!(e < n)) {
            for (let s = i + 2; ; ) {
              if (void 0 === n) {
                if (e < r) break n;
                return (
                  (i = t.length),
                  (this._cachedIndex = i),
                  this.copySampleValue_(i - 1)
                );
              }
              if (i === s) break;
              if (((r = n), (n = t[++i]), e < n)) break t;
            }
            s = t.length;
            break i;
          }
          if (e >= r) break e;
          {
            const a = t[1];
            e < a && ((i = 2), (r = a));
            for (let s = i - 2; ; ) {
              if (void 0 === r)
                return (this._cachedIndex = 0), this.copySampleValue_(0);
              if (i === s) break;
              if (((n = r), (r = t[--i - 1]), e >= r)) break t;
            }
            (s = i), (i = 0);
          }
        }
        for (; i < s; ) {
          const n = (i + s) >>> 1;
          e < t[n] ? (s = n) : (i = n + 1);
        }
        if (((n = t[i]), (r = t[i - 1]), void 0 === r))
          return (this._cachedIndex = 0), this.copySampleValue_(0);
        if (void 0 === n)
          return (
            (i = t.length),
            (this._cachedIndex = i),
            this.copySampleValue_(i - 1)
          );
      }
      (this._cachedIndex = i), this.intervalChanged_(i, r, n);
    }
    return this.interpolate_(i, r, e, n);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer,
      i = this.sampleValues,
      n = this.valueSize,
      r = e * n;
    for (let s = 0; s !== n; ++s) t[s] = i[r + s];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {}
}
class Il extends Dl {
  constructor(e, t, i, n) {
    super(e, t, i, n),
      (this._weightPrev = -0),
      (this._offsetPrev = -0),
      (this._weightNext = -0),
      (this._offsetNext = -0),
      (this.DefaultSettings_ = { endingStart: 2400, endingEnd: 2400 });
  }
  intervalChanged_(e, t, i) {
    const n = this.parameterPositions;
    let r = e - 2,
      s = e + 1,
      a = n[r],
      o = n[s];
    if (void 0 === a)
      switch (this.getSettings_().endingStart) {
        case 2401:
          (r = e), (a = 2 * t - i);
          break;
        case 2402:
          (r = n.length - 2), (a = t + n[r] - n[r + 1]);
          break;
        default:
          (r = e), (a = i);
      }
    if (void 0 === o)
      switch (this.getSettings_().endingEnd) {
        case 2401:
          (s = e), (o = 2 * i - t);
          break;
        case 2402:
          (s = 1), (o = i + n[1] - n[0]);
          break;
        default:
          (s = e - 1), (o = t);
      }
    const l = 0.5 * (i - t),
      c = this.valueSize;
    (this._weightPrev = l / (t - a)),
      (this._weightNext = l / (o - i)),
      (this._offsetPrev = r * c),
      (this._offsetNext = s * c);
  }
  interpolate_(e, t, i, n) {
    const r = this.resultBuffer,
      s = this.sampleValues,
      a = this.valueSize,
      o = e * a,
      l = o - a,
      c = this._offsetPrev,
      h = this._offsetNext,
      u = this._weightPrev,
      d = this._weightNext,
      p = (i - t) / (n - t),
      m = p * p,
      f = m * p,
      g = -u * f + 2 * u * m - u * p,
      v = (1 + u) * f + (-1.5 - 2 * u) * m + (-0.5 + u) * p + 1,
      _ = (-1 - d) * f + (1.5 + d) * m + 0.5 * p,
      x = d * f - d * m;
    for (let y = 0; y !== a; ++y)
      r[y] = g * s[c + y] + v * s[l + y] + _ * s[o + y] + x * s[h + y];
    return r;
  }
}
class Ol extends Dl {
  constructor(e, t, i, n) {
    super(e, t, i, n);
  }
  interpolate_(e, t, i, n) {
    const r = this.resultBuffer,
      s = this.sampleValues,
      a = this.valueSize,
      o = e * a,
      l = o - a,
      c = (i - t) / (n - t),
      h = 1 - c;
    for (let u = 0; u !== a; ++u) r[u] = s[l + u] * h + s[o + u] * c;
    return r;
  }
}
class Nl extends Dl {
  constructor(e, t, i, n) {
    super(e, t, i, n);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class zl {
  constructor(e, t, i, n) {
    if (void 0 === e)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (void 0 === t || 0 === t.length)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    (this.name = e),
      (this.times = Al(t, this.TimeBufferType)),
      (this.values = Al(i, this.ValueBufferType)),
      this.setInterpolation(n || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let i;
    if (t.toJSON !== this.toJSON) i = t.toJSON(e);
    else {
      i = {
        name: e.name,
        times: Al(e.times, Array),
        values: Al(e.values, Array),
      };
      const t = e.getInterpolation();
      t !== e.DefaultInterpolation && (i.interpolation = t);
    }
    return (i.type = e.ValueTypeName), i;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Nl(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Ol(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Il(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case Bt:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Vt:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Ht:
        t = this.InterpolantFactoryMethodSmooth;
    }
    if (void 0 === t) {
      const t =
        "unsupported interpolation for " +
        this.ValueTypeName +
        " keyframe track named " +
        this.name;
      if (void 0 === this.createInterpolant) {
        if (e === this.DefaultInterpolation) throw new Error(t);
        this.setInterpolation(this.DefaultInterpolation);
      }
      return console.warn("THREE.KeyframeTrack:", t), this;
    }
    return (this.createInterpolant = t), this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return Bt;
      case this.InterpolantFactoryMethodLinear:
        return Vt;
      case this.InterpolantFactoryMethodSmooth:
        return Ht;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (0 !== e) {
      const t = this.times;
      for (let i = 0, n = t.length; i !== n; ++i) t[i] += e;
    }
    return this;
  }
  scale(e) {
    if (1 !== e) {
      const t = this.times;
      for (let i = 0, n = t.length; i !== n; ++i) t[i] *= e;
    }
    return this;
  }
  trim(e, t) {
    const i = this.times,
      n = i.length;
    let r = 0,
      s = n - 1;
    for (; r !== n && i[r] < e; ) ++r;
    for (; -1 !== s && i[s] > t; ) --s;
    if ((++s, 0 !== r || s !== n)) {
      r >= s && ((s = Math.max(s, 1)), (r = s - 1));
      const e = this.getValueSize();
      (this.times = El(i, r, s)), (this.values = El(this.values, r * e, s * e));
    }
    return this;
  }
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) != 0 &&
      (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
      (e = !1));
    const i = this.times,
      n = this.values,
      r = i.length;
    0 === r &&
      (console.error("THREE.KeyframeTrack: Track is empty.", this), (e = !1));
    let s = null;
    for (let a = 0; a !== r; a++) {
      const t = i[a];
      if ("number" == typeof t && isNaN(t)) {
        console.error(
          "THREE.KeyframeTrack: Time is not a valid number.",
          this,
          a,
          t
        ),
          (e = !1);
        break;
      }
      if (null !== s && s > t) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, a, t, s),
          (e = !1);
        break;
      }
      s = t;
    }
    if (void 0 !== n && Cl(n))
      for (let a = 0, o = n.length; a !== o; ++a) {
        const t = n[a];
        if (isNaN(t)) {
          console.error(
            "THREE.KeyframeTrack: Value is not a valid number.",
            this,
            a,
            t
          ),
            (e = !1);
          break;
        }
      }
    return e;
  }
  optimize() {
    const e = El(this.times),
      t = El(this.values),
      i = this.getValueSize(),
      n = this.getInterpolation() === Ht,
      r = e.length - 1;
    let s = 1;
    for (let a = 1; a < r; ++a) {
      let r = !1;
      const o = e[a];
      if (o !== e[a + 1] && (1 !== a || o !== e[0]))
        if (n) r = !0;
        else {
          const e = a * i,
            n = e - i,
            s = e + i;
          for (let a = 0; a !== i; ++a) {
            const i = t[e + a];
            if (i !== t[n + a] || i !== t[s + a]) {
              r = !0;
              break;
            }
          }
        }
      if (r) {
        if (a !== s) {
          e[s] = e[a];
          const n = a * i,
            r = s * i;
          for (let e = 0; e !== i; ++e) t[r + e] = t[n + e];
        }
        ++s;
      }
    }
    if (r > 0) {
      e[s] = e[r];
      for (let e = r * i, n = s * i, a = 0; a !== i; ++a) t[n + a] = t[e + a];
      ++s;
    }
    return (
      s !== e.length
        ? ((this.times = El(e, 0, s)), (this.values = El(t, 0, s * i)))
        : ((this.times = e), (this.values = t)),
      this
    );
  }
  clone() {
    const e = El(this.times, 0),
      t = El(this.values, 0),
      i = new (0, this.constructor)(this.name, e, t);
    return (i.createInterpolant = this.createInterpolant), i;
  }
}
(zl.prototype.TimeBufferType = Float32Array),
  (zl.prototype.ValueBufferType = Float32Array),
  (zl.prototype.DefaultInterpolation = Vt);
class Ul extends zl {}
(Ul.prototype.ValueTypeName = "bool"),
  (Ul.prototype.ValueBufferType = Array),
  (Ul.prototype.DefaultInterpolation = Bt),
  (Ul.prototype.InterpolantFactoryMethodLinear = void 0),
  (Ul.prototype.InterpolantFactoryMethodSmooth = void 0);
class Fl extends zl {}
Fl.prototype.ValueTypeName = "color";
class kl extends zl {}
kl.prototype.ValueTypeName = "number";
class Bl extends Dl {
  constructor(e, t, i, n) {
    super(e, t, i, n);
  }
  interpolate_(e, t, i, n) {
    const r = this.resultBuffer,
      s = this.sampleValues,
      a = this.valueSize,
      o = (i - t) / (n - t);
    let l = e * a;
    for (let c = l + a; l !== c; l += 4) Ui.slerpFlat(r, 0, s, l - a, s, l, o);
    return r;
  }
}
class Vl extends zl {
  InterpolantFactoryMethodLinear(e) {
    return new Bl(this.times, this.values, this.getValueSize(), e);
  }
}
(Vl.prototype.ValueTypeName = "quaternion"),
  (Vl.prototype.DefaultInterpolation = Vt),
  (Vl.prototype.InterpolantFactoryMethodSmooth = void 0);
class Hl extends zl {}
(Hl.prototype.ValueTypeName = "string"),
  (Hl.prototype.ValueBufferType = Array),
  (Hl.prototype.DefaultInterpolation = Bt),
  (Hl.prototype.InterpolantFactoryMethodLinear = void 0),
  (Hl.prototype.InterpolantFactoryMethodSmooth = void 0);
class Gl extends zl {}
Gl.prototype.ValueTypeName = "vector";
class Wl {
  constructor(e, t = -1, i, n = 2500) {
    (this.name = e),
      (this.tracks = i),
      (this.duration = t),
      (this.blendMode = n),
      (this.uuid = si()),
      this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [],
      i = e.tracks,
      n = 1 / (e.fps || 1);
    for (let s = 0, a = i.length; s !== a; ++s) t.push(jl(i[s]).scale(n));
    const r = new this(e.name, e.duration, t, e.blendMode);
    return (r.uuid = e.uuid), r;
  }
  static toJSON(e) {
    const t = [],
      i = e.tracks,
      n = {
        name: e.name,
        duration: e.duration,
        tracks: t,
        uuid: e.uuid,
        blendMode: e.blendMode,
      };
    for (let r = 0, s = i.length; r !== s; ++r) t.push(zl.toJSON(i[r]));
    return n;
  }
  static CreateFromMorphTargetSequence(e, t, i, n) {
    const r = t.length,
      s = [];
    for (let a = 0; a < r; a++) {
      let e = [],
        o = [];
      e.push((a + r - 1) % r, a, (a + 1) % r), o.push(0, 1, 0);
      const l = Pl(e);
      (e = Ll(e, 1, l)),
        (o = Ll(o, 1, l)),
        n || 0 !== e[0] || (e.push(r), o.push(o[0])),
        s.push(
          new kl(".morphTargetInfluences[" + t[a].name + "]", e, o).scale(1 / i)
        );
    }
    return new this(e, -1, s);
  }
  static findByName(e, t) {
    let i = e;
    if (!Array.isArray(e)) {
      const t = e;
      i = (t.geometry && t.geometry.animations) || t.animations;
    }
    for (let n = 0; n < i.length; n++) if (i[n].name === t) return i[n];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, i) {
    const n = {},
      r = /^([\w-]*?)([\d]+)$/;
    for (let a = 0, o = e.length; a < o; a++) {
      const t = e[a],
        i = t.name.match(r);
      if (i && i.length > 1) {
        const e = i[1];
        let r = n[e];
        r || (n[e] = r = []), r.push(t);
      }
    }
    const s = [];
    for (const a in n)
      s.push(this.CreateFromMorphTargetSequence(a, n[a], t, i));
    return s;
  }
  static parseAnimation(e, t) {
    if (!e)
      return (
        console.error("THREE.AnimationClip: No animation in JSONLoader data."),
        null
      );
    const i = function (e, t, i, n, r) {
        if (0 !== i.length) {
          const s = [],
            a = [];
          Rl(i, s, a, n), 0 !== s.length && r.push(new e(t, s, a));
        }
      },
      n = [],
      r = e.name || "default",
      s = e.fps || 30,
      a = e.blendMode;
    let o = e.length || -1;
    const l = e.hierarchy || [];
    for (let c = 0; c < l.length; c++) {
      const e = l[c].keys;
      if (e && 0 !== e.length)
        if (e[0].morphTargets) {
          const t = {};
          let i;
          for (i = 0; i < e.length; i++)
            if (e[i].morphTargets)
              for (let n = 0; n < e[i].morphTargets.length; n++)
                t[e[i].morphTargets[n]] = -1;
          for (const r in t) {
            const t = [],
              s = [];
            for (let n = 0; n !== e[i].morphTargets.length; ++n) {
              const n = e[i];
              t.push(n.time), s.push(n.morphTarget === r ? 1 : 0);
            }
            n.push(new kl(".morphTargetInfluence[" + r + "]", t, s));
          }
          o = t.length * s;
        } else {
          const r = ".bones[" + t[c].name + "]";
          i(Gl, r + ".position", e, "pos", n),
            i(Vl, r + ".quaternion", e, "rot", n),
            i(Gl, r + ".scale", e, "scl", n);
        }
    }
    if (0 === n.length) return null;
    return new this(r, o, n, a);
  }
  resetDuration() {
    let e = 0;
    for (let t = 0, i = this.tracks.length; t !== i; ++t) {
      const i = this.tracks[t];
      e = Math.max(e, i.times[i.times.length - 1]);
    }
    return (this.duration = e), this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function jl(e) {
  if (void 0 === e.type)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const t = (function (e) {
    switch (e.toLowerCase()) {
      case "scalar":
      case "double":
      case "float":
      case "number":
      case "integer":
        return kl;
      case "vector":
      case "vector2":
      case "vector3":
      case "vector4":
        return Gl;
      case "color":
        return Fl;
      case "quaternion":
        return Vl;
      case "bool":
      case "boolean":
        return Ul;
      case "string":
        return Hl;
    }
    throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + e);
  })(e.type);
  if (void 0 === e.times) {
    const t = [],
      i = [];
    Rl(e.keys, t, i, "value"), (e.times = t), (e.values = i);
  }
  return void 0 !== t.parse
    ? t.parse(e)
    : new t(e.name, e.times, e.values, e.interpolation);
}
const ql = {
  enabled: !1,
  files: {},
  add: function (e, t) {
    !1 !== this.enabled && (this.files[e] = t);
  },
  get: function (e) {
    if (!1 !== this.enabled) return this.files[e];
  },
  remove: function (e) {
    delete this.files[e];
  },
  clear: function () {
    this.files = {};
  },
};
class Xl {
  constructor(e, t, i) {
    const n = this;
    let r,
      s = !1,
      a = 0,
      o = 0;
    const l = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = i),
      (this.itemStart = function (e) {
        o++, !1 === s && void 0 !== n.onStart && n.onStart(e, a, o), (s = !0);
      }),
      (this.itemEnd = function (e) {
        a++,
          void 0 !== n.onProgress && n.onProgress(e, a, o),
          a === o && ((s = !1), void 0 !== n.onLoad && n.onLoad());
      }),
      (this.itemError = function (e) {
        void 0 !== n.onError && n.onError(e);
      }),
      (this.resolveURL = function (e) {
        return r ? r(e) : e;
      }),
      (this.setURLModifier = function (e) {
        return (r = e), this;
      }),
      (this.addHandler = function (e, t) {
        return l.push(e, t), this;
      }),
      (this.removeHandler = function (e) {
        const t = l.indexOf(e);
        return -1 !== t && l.splice(t, 2), this;
      }),
      (this.getHandler = function (e) {
        for (let t = 0, i = l.length; t < i; t += 2) {
          const i = l[t],
            n = l[t + 1];
          if ((i.global && (i.lastIndex = 0), i.test(e))) return n;
        }
        return null;
      });
  }
}
const Yl = new Xl();
class Kl {
  constructor(e) {
    (this.manager = void 0 !== e ? e : Yl),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    const i = this;
    return new Promise(function (n, r) {
      i.load(e, n, t, r);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
const Zl = {};
class Jl extends Error {
  constructor(e, t) {
    super(e), (this.response = t);
  }
}
class Ql extends Kl {
  constructor(e) {
    super(e);
  }
  load(e, t, i, n) {
    void 0 === e && (e = ""),
      void 0 !== this.path && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const r = ql.get(e);
    if (void 0 !== r)
      return (
        this.manager.itemStart(e),
        setTimeout(() => {
          t && t(r), this.manager.itemEnd(e);
        }, 0),
        r
      );
    if (void 0 !== Zl[e])
      return void Zl[e].push({ onLoad: t, onProgress: i, onError: n });
    (Zl[e] = []), Zl[e].push({ onLoad: t, onProgress: i, onError: n });
    const s = new Request(e, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? "include" : "same-origin",
      }),
      a = this.mimeType,
      o = this.responseType;
    fetch(s)
      .then((t) => {
        if (200 === t.status || 0 === t.status) {
          if (
            (0 === t.status &&
              console.warn("THREE.FileLoader: HTTP Status 0 received."),
            "undefined" == typeof ReadableStream ||
              void 0 === t.body ||
              void 0 === t.body.getReader)
          )
            return t;
          const i = Zl[e],
            n = t.body.getReader(),
            r = t.headers.get("Content-Length"),
            s = r ? parseInt(r) : 0,
            a = 0 !== s;
          let o = 0;
          const l = new ReadableStream({
            start(e) {
              !(function t() {
                n.read().then(({ done: n, value: r }) => {
                  if (n) e.close();
                  else {
                    o += r.byteLength;
                    const n = new ProgressEvent("progress", {
                      lengthComputable: a,
                      loaded: o,
                      total: s,
                    });
                    for (let e = 0, t = i.length; e < t; e++) {
                      const t = i[e];
                      t.onProgress && t.onProgress(n);
                    }
                    e.enqueue(r), t();
                  }
                });
              })();
            },
          });
          return new Response(l);
        }
        throw new Jl(
          `fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,
          t
        );
      })
      .then((e) => {
        switch (o) {
          case "arraybuffer":
            return e.arrayBuffer();
          case "blob":
            return e.blob();
          case "document":
            return e.text().then((e) => new DOMParser().parseFromString(e, a));
          case "json":
            return e.json();
          default:
            if (void 0 === a) return e.text();
            {
              const t = /charset="?([^;"\s]*)"?/i.exec(a),
                i = t && t[1] ? t[1].toLowerCase() : void 0,
                n = new TextDecoder(i);
              return e.arrayBuffer().then((e) => n.decode(e));
            }
        }
      })
      .then((t) => {
        ql.add(e, t);
        const i = Zl[e];
        delete Zl[e];
        for (let e = 0, n = i.length; e < n; e++) {
          const n = i[e];
          n.onLoad && n.onLoad(t);
        }
      })
      .catch((t) => {
        const i = Zl[e];
        if (void 0 === i) throw (this.manager.itemError(e), t);
        delete Zl[e];
        for (let e = 0, n = i.length; e < n; e++) {
          const n = i[e];
          n.onError && n.onError(t);
        }
        this.manager.itemError(e);
      })
      .finally(() => {
        this.manager.itemEnd(e);
      }),
      this.manager.itemStart(e);
  }
  setResponseType(e) {
    return (this.responseType = e), this;
  }
  setMimeType(e) {
    return (this.mimeType = e), this;
  }
}
class $l extends Kl {
  constructor(e) {
    super(e);
  }
  load(e, t, i, n) {
    void 0 !== this.path && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const r = this,
      s = ql.get(e);
    if (void 0 !== s)
      return (
        r.manager.itemStart(e),
        setTimeout(function () {
          t && t(s), r.manager.itemEnd(e);
        }, 0),
        s
      );
    const a = fi("img");
    function o() {
      c(), ql.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function l(t) {
      c(), n && n(t), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function c() {
      a.removeEventListener("load", o, !1),
        a.removeEventListener("error", l, !1);
    }
    return (
      a.addEventListener("load", o, !1),
      a.addEventListener("error", l, !1),
      "data:" !== e.slice(0, 5) &&
        void 0 !== this.crossOrigin &&
        (a.crossOrigin = this.crossOrigin),
      r.manager.itemStart(e),
      (a.src = e),
      a
    );
  }
}
class ec extends Kl {
  constructor(e) {
    super(e);
  }
  load(e, t, i, n) {
    const r = new Di(),
      s = new $l(this.manager);
    return (
      s.setCrossOrigin(this.crossOrigin),
      s.setPath(this.path),
      s.load(
        e,
        function (e) {
          (r.image = e), (r.needsUpdate = !0), void 0 !== t && t(r);
        },
        i,
        n
      ),
      r
    );
  }
}
class tc extends Bn {
  constructor(e, t = 1) {
    super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new Ei(e)),
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
      void 0 !== this.groundColor &&
        (t.object.groundColor = this.groundColor.getHex()),
      void 0 !== this.distance && (t.object.distance = this.distance),
      void 0 !== this.angle && (t.object.angle = this.angle),
      void 0 !== this.decay && (t.object.decay = this.decay),
      void 0 !== this.penumbra && (t.object.penumbra = this.penumbra),
      void 0 !== this.shadow && (t.object.shadow = this.shadow.toJSON()),
      t
    );
  }
}
const ic = new fn(),
  nc = new Fi(),
  rc = new Fi();
class sc {
  constructor(e) {
    (this.camera = e),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new di(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new fn()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new Jr()),
      (this._frameExtents = new di(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new Ii(0, 0, 1, 1)]);
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
    nc.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(nc),
      rc.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(rc),
      t.updateMatrixWorld(),
      ic.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(ic),
      i.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      i.multiply(ic);
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
      0 !== this.bias && (e.bias = this.bias),
      0 !== this.normalBias && (e.normalBias = this.normalBias),
      1 !== this.radius && (e.radius = this.radius),
      (512 === this.mapSize.x && 512 === this.mapSize.y) ||
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
class ac extends sc {
  constructor() {
    super(new Br(50, 1, 0.5, 500)),
      (this.isSpotLightShadow = !0),
      (this.focus = 1);
  }
  updateMatrices(e) {
    const t = this.camera,
      i = 2 * ri * e.angle * this.focus,
      n = this.mapSize.width / this.mapSize.height,
      r = e.distance || t.far;
    (i === t.fov && n === t.aspect && r === t.far) ||
      ((t.fov = i), (t.aspect = n), (t.far = r), t.updateProjectionMatrix()),
      super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), (this.focus = e.focus), this;
  }
}
class oc extends tc {
  constructor(e, t, i = 0, n = Math.PI / 3, r = 0, s = 1) {
    super(e, t),
      (this.isSpotLight = !0),
      (this.type = "SpotLight"),
      this.position.copy(Bn.DefaultUp),
      this.updateMatrix(),
      (this.target = new Bn()),
      (this.distance = i),
      (this.angle = n),
      (this.penumbra = r),
      (this.decay = s),
      (this.map = null),
      (this.shadow = new ac());
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.angle = e.angle),
      (this.penumbra = e.penumbra),
      (this.decay = e.decay),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
const lc = new fn(),
  cc = new Fi(),
  hc = new Fi();
class uc extends sc {
  constructor() {
    super(new Br(90, 1, 0.5, 500)),
      (this.isPointLightShadow = !0),
      (this._frameExtents = new di(4, 2)),
      (this._viewportCount = 6),
      (this._viewports = [
        new Ii(2, 1, 1, 1),
        new Ii(0, 1, 1, 1),
        new Ii(3, 1, 1, 1),
        new Ii(1, 1, 1, 1),
        new Ii(3, 0, 1, 1),
        new Ii(1, 0, 1, 1),
      ]),
      (this._cubeDirections = [
        new Fi(1, 0, 0),
        new Fi(-1, 0, 0),
        new Fi(0, 0, 1),
        new Fi(0, 0, -1),
        new Fi(0, 1, 0),
        new Fi(0, -1, 0),
      ]),
      (this._cubeUps = [
        new Fi(0, 1, 0),
        new Fi(0, 1, 0),
        new Fi(0, 1, 0),
        new Fi(0, 1, 0),
        new Fi(0, 0, 1),
        new Fi(0, 0, -1),
      ]);
  }
  updateMatrices(e, t = 0) {
    const i = this.camera,
      n = this.matrix,
      r = e.distance || i.far;
    r !== i.far && ((i.far = r), i.updateProjectionMatrix()),
      cc.setFromMatrixPosition(e.matrixWorld),
      i.position.copy(cc),
      hc.copy(i.position),
      hc.add(this._cubeDirections[t]),
      i.up.copy(this._cubeUps[t]),
      i.lookAt(hc),
      i.updateMatrixWorld(),
      n.makeTranslation(-cc.x, -cc.y, -cc.z),
      lc.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(lc);
  }
}
class dc extends tc {
  constructor(e, t, i = 0, n = 1) {
    super(e, t),
      (this.isPointLight = !0),
      (this.type = "PointLight"),
      (this.distance = i),
      (this.decay = n),
      (this.shadow = new uc());
  }
  get power() {
    return 4 * this.intensity * Math.PI;
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
class pc extends sc {
  constructor() {
    super(new hs(-5, 5, 5, -5, 0.5, 500)), (this.isDirectionalLightShadow = !0);
  }
}
class mc extends tc {
  constructor(e, t) {
    super(e, t),
      (this.isDirectionalLight = !0),
      (this.type = "DirectionalLight"),
      this.position.copy(Bn.DefaultUp),
      this.updateMatrix(),
      (this.target = new Bn()),
      (this.shadow = new pc());
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
class fc extends tc {
  constructor(e, t) {
    super(e, t), (this.isAmbientLight = !0), (this.type = "AmbientLight");
  }
}
class gc {
  static decodeText(e) {
    if ("undefined" != typeof TextDecoder) return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, r = e.length; n < r; n++) t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch (i) {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return -1 === t ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return "string" != typeof e || "" === e
      ? ""
      : (/^https?:\/\//i.test(t) &&
          /^\//.test(e) &&
          (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
        /^(https?:)?\/\//i.test(e) ||
        /^data:.*,.*$/i.test(e) ||
        /^blob:.*$/i.test(e)
          ? e
          : t + e);
  }
}
class vc extends mr {
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
class _c extends Kl {
  constructor(e) {
    super(e),
      (this.isImageBitmapLoader = !0),
      "undefined" == typeof createImageBitmap &&
        console.warn(
          "THREE.ImageBitmapLoader: createImageBitmap() not supported."
        ),
      "undefined" == typeof fetch &&
        console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
      (this.options = { premultiplyAlpha: "none" });
  }
  setOptions(e) {
    return (this.options = e), this;
  }
  load(e, t, i, n) {
    void 0 === e && (e = ""),
      void 0 !== this.path && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const r = this,
      s = ql.get(e);
    if (void 0 !== s)
      return (
        r.manager.itemStart(e),
        setTimeout(function () {
          t && t(s), r.manager.itemEnd(e);
        }, 0),
        s
      );
    const a = {};
    (a.credentials =
      "anonymous" === this.crossOrigin ? "same-origin" : "include"),
      (a.headers = this.requestHeader),
      fetch(e, a)
        .then(function (e) {
          return e.blob();
        })
        .then(function (e) {
          return createImageBitmap(
            e,
            Object.assign(r.options, { colorSpaceConversion: "none" })
          );
        })
        .then(function (i) {
          ql.add(e, i), t && t(i), r.manager.itemEnd(e);
        })
        .catch(function (t) {
          n && n(t), r.manager.itemError(e), r.manager.itemEnd(e);
        }),
      r.manager.itemStart(e);
  }
}
const xc = "\\[\\]\\.:\\/",
  yc = new RegExp("[" + xc + "]", "g"),
  bc = "[^" + xc + "]",
  Mc = "[^" + xc.replace("\\.", "") + "]",
  wc = new RegExp(
    "^" +
      /((?:WC+[\/:])*)/.source.replace("WC", bc) +
      /(WCOD+)?/.source.replace("WCOD", Mc) +
      /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", bc) +
      /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", bc) +
      "$"
  ),
  Sc = ["material", "materials", "bones", "map"];
class Tc {
  constructor(e, t, i) {
    (this.path = t),
      (this.parsedPath = i || Tc.parseTrackName(t)),
      (this.node = Tc.findNode(e, this.parsedPath.nodeName) || e),
      (this.rootNode = e),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
  static create(e, t, i) {
    return e && e.isAnimationObjectGroup
      ? new Tc.Composite(e, t, i)
      : new Tc(e, t, i);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(yc, "");
  }
  static parseTrackName(e) {
    const t = wc.exec(e);
    if (null === t)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const i = {
        nodeName: t[2],
        objectName: t[3],
        objectIndex: t[4],
        propertyName: t[5],
        propertyIndex: t[6],
      },
      n = i.nodeName && i.nodeName.lastIndexOf(".");
    if (void 0 !== n && -1 !== n) {
      const e = i.nodeName.substring(n + 1);
      -1 !== Sc.indexOf(e) &&
        ((i.nodeName = i.nodeName.substring(0, n)), (i.objectName = e));
    }
    if (null === i.propertyName || 0 === i.propertyName.length)
      throw new Error(
        "PropertyBinding: can not parse propertyName from trackName: " + e
      );
    return i;
  }
  static findNode(e, t) {
    if (
      void 0 === t ||
      "" === t ||
      "." === t ||
      -1 === t ||
      t === e.name ||
      t === e.uuid
    )
      return e;
    if (e.skeleton) {
      const i = e.skeleton.getBoneByName(t);
      if (void 0 !== i) return i;
    }
    if (e.children) {
      const i = function (e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            if (r.name === t || r.uuid === t) return r;
            const s = i(r.children);
            if (s) return s;
          }
          return null;
        },
        n = i(e.children);
      if (n) return n;
    }
    return null;
  }
  _getValue_unavailable() {}
  _setValue_unavailable() {}
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const i = this.resolvedProperty;
    for (let n = 0, r = i.length; n !== r; ++n) e[t++] = i[n];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_array(e, t) {
    const i = this.resolvedProperty;
    for (let n = 0, r = i.length; n !== r; ++n) i[n] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const i = this.resolvedProperty;
    for (let n = 0, r = i.length; n !== r; ++n) i[n] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const i = this.resolvedProperty;
    for (let n = 0, r = i.length; n !== r; ++n) i[n] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), (this.targetObject.needsUpdate = !0);
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath,
      i = t.objectName,
      n = t.propertyName;
    let r = t.propertyIndex;
    if (
      (e ||
        ((e = Tc.findNode(this.rootNode, t.nodeName) || this.rootNode),
        (this.node = e)),
      (this.getValue = this._getValue_unavailable),
      (this.setValue = this._setValue_unavailable),
      !e)
    )
      return void console.error(
        "THREE.PropertyBinding: Trying to update node for track: " +
          this.path +
          " but it wasn't found."
      );
    if (i) {
      let n = t.objectIndex;
      switch (i) {
        case "materials":
          if (!e.material)
            return void console.error(
              "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
          if (!e.material.materials)
            return void console.error(
              "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
              this
            );
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton)
            return void console.error(
              "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
              this
            );
          e = e.skeleton.bones;
          for (let t = 0; t < e.length; t++)
            if (e[t].name === n) {
              n = t;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material)
            return void console.error(
              "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
          if (!e.material.map)
            return void console.error(
              "THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",
              this
            );
          e = e.material.map;
          break;
        default:
          if (void 0 === e[i])
            return void console.error(
              "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
              this
            );
          e = e[i];
      }
      if (void 0 !== n) {
        if (void 0 === e[n])
          return void console.error(
            "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
            this,
            e
          );
        e = e[n];
      }
    }
    const s = e[n];
    if (void 0 === s) {
      const i = t.nodeName;
      return void console.error(
        "THREE.PropertyBinding: Trying to update property for track: " +
          i +
          "." +
          n +
          " but it wasn't found.",
        e
      );
    }
    let a = this.Versioning.None;
    (this.targetObject = e),
      void 0 !== e.needsUpdate
        ? (a = this.Versioning.NeedsUpdate)
        : void 0 !== e.matrixWorldNeedsUpdate &&
          (a = this.Versioning.MatrixWorldNeedsUpdate);
    let o = this.BindingType.Direct;
    if (void 0 !== r) {
      if ("morphTargetInfluences" === n) {
        if (!e.geometry)
          return void console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
            this
          );
        if (!e.geometry.morphAttributes)
          return void console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
            this
          );
        void 0 !== e.morphTargetDictionary[r] &&
          (r = e.morphTargetDictionary[r]);
      }
      (o = this.BindingType.ArrayElement),
        (this.resolvedProperty = s),
        (this.propertyIndex = r);
    } else
      void 0 !== s.fromArray && void 0 !== s.toArray
        ? ((o = this.BindingType.HasFromToArray), (this.resolvedProperty = s))
        : Array.isArray(s)
        ? ((o = this.BindingType.EntireArray), (this.resolvedProperty = s))
        : (this.propertyName = n);
    (this.getValue = this.GetterByBindingType[o]),
      (this.setValue = this.SetterByBindingTypeAndVersioning[o][a]);
  }
  unbind() {
    (this.node = null),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
}
(Tc.Composite = class {
  constructor(e, t, i) {
    const n = i || Tc.parseTrackName(t);
    (this._targetGroup = e), (this._bindings = e.subscribe_(t, n));
  }
  getValue(e, t) {
    this.bind();
    const i = this._targetGroup.nCachedObjects_,
      n = this._bindings[i];
    void 0 !== n && n.getValue(e, t);
  }
  setValue(e, t) {
    const i = this._bindings;
    for (let n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n)
      i[n].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t)
      e[t].unbind();
  }
}),
  (Tc.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3,
  }),
  (Tc.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2,
  }),
  (Tc.prototype.GetterByBindingType = [
    Tc.prototype._getValue_direct,
    Tc.prototype._getValue_array,
    Tc.prototype._getValue_arrayElement,
    Tc.prototype._getValue_toArray,
  ]),
  (Tc.prototype.SetterByBindingTypeAndVersioning = [
    [
      Tc.prototype._setValue_direct,
      Tc.prototype._setValue_direct_setNeedsUpdate,
      Tc.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
    ],
    [
      Tc.prototype._setValue_array,
      Tc.prototype._setValue_array_setNeedsUpdate,
      Tc.prototype._setValue_array_setMatrixWorldNeedsUpdate,
    ],
    [
      Tc.prototype._setValue_arrayElement,
      Tc.prototype._setValue_arrayElement_setNeedsUpdate,
      Tc.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
    ],
    [
      Tc.prototype._setValue_fromArray,
      Tc.prototype._setValue_fromArray_setNeedsUpdate,
      Tc.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
    ],
  ]);
class Ec extends zo {
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
class Ac {
  constructor(e, t, i = 0, n = 1 / 0) {
    (this.ray = new mn(e, t)),
      (this.near = i),
      (this.far = n),
      (this.camera = null),
      (this.layers = new En()),
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
    return Pc(e, this, i, t), i.sort(Cc), i;
  }
  intersectObjects(e, t = !0, i = []) {
    for (let n = 0, r = e.length; n < r; n++) Pc(e[n], this, i, t);
    return i.sort(Cc), i;
  }
}
function Cc(e, t) {
  return e.distance - t.distance;
}
function Pc(e, t, i, n) {
  if ((e.layers.test(t.layers) && e.raycast(t, i), !0 === n)) {
    const n = e.children;
    for (let e = 0, r = n.length; e < r; e++) Pc(n[e], t, i, !0);
  }
}
O(Ui, (e) => e.set(0, 0, 0, 0)),
  O(Ei, (e) => e.setRGB(0, 0, 0)),
  O(di, (e) => e.setScalar(0)),
  O(Fi, (e) => e.setScalar(0)),
  O(Ii, (e) => e.setScalar(0)),
  O(Tn, (e) => e.set(0, 0, 0, "XYZ")),
  O(fn);
const Lc = (e) => e,
  Rc = (e) => e.charAt(0).toUpperCase() + e.slice(1);
let Dc = {},
  Ic = !1;
function Oc() {
  return Dc;
}
const Nc = new Proxy({}, { get: (e, t) => Dc[t] });
function zc(t = {}) {
  if (Ic) return Dc;
  Ic = !0;
  const i = t,
    n = i.app || {},
    r = Array.isArray(t.plugins) ? [...t.plugins] : [],
    s = {},
    a = [
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
      (t, i) => ((t["before" + i] = e()), (t["after" + i] = e()), t),
      {}
    );
  let o = {
    app: new Proxy(
      {},
      {
        get: function (e, t) {
          return n[t] ? n[t] : void 0;
        },
      }
    ),
    state: s,
    hooks: a,
    options: i,
    plugins: r,
    usePlugin: l,
    init: Lc,
    preload: Lc,
    load: Lc,
    start: Lc,
    prerender: () => Dc.frame(),
    frame: () => {
      Dc.update(), Dc.render();
    },
    registerMixin: function (...e) {
      for (let t = 0; t < e.length; t += 2) {
        const i = e[t],
          n = e[t + 1];
        if (!n) continue;
        const r = o.collection.mixins;
        r[i] || (r[i] = n);
      }
    },
    registerComponent: function (...e) {
      for (let t = 0; t < e.length; t += 2) {
        const i = e[t],
          n = e[t + 1];
        if (!n) continue;
        const r = o.collection.components;
        r[i] || (r[i] = n);
      }
    },
    update: Lc,
    render: Lc,
  };
  return (
    (o = Object.assign(Dc, o)),
    (o.collection = { mixins: {}, components: {} }),
    (t.decorator || Lc)(Dc),
    (Dc.log = () => {}),
    (Dc.usePlugin = l),
    h("init", !0, !0, () => {
      !(function () {
        a.beforePluginsInstall.emit();
        const e = o.plugins.filter(Boolean);
        o.usePlugin = c;
        for (const t of e) {
          const e = Array.isArray(t);
          c(e ? t[0] : t, e ? t[1] : {});
        }
        a.afterPluginsInstall.emit(),
          a.beforePluginsInstall.unwatchAll(),
          a.afterPluginsInstall.unwatchAll();
      })();
      const e = (e) => () => (s.prerendering = e);
      ["frame", "update", "render"].forEach((e) => h(e, !1)),
        ["preload", "start"].forEach((e) => h(e, !0, !0)),
        ["load"].forEach((e) => h(e, !0)),
        h("prerender", !0, !1, e(!0), e(!1));
    }),
    o
  );
  function l(e, t = {}) {
    r.includes(e) || r.push([e, t]);
  }
  function c(e, t = {}) {
    const i = { log: Lc };
    return (
      (t = Object.assign({}, i, t)),
      e.install
        ? e.install.call(o, o, t)
        : "function" == typeof e
        ? e.call(o, o, t)
        : void 0
    );
  }
  function h(e, t, i, n, r) {
    const s = o[e] || Lc,
      l = Rc(e),
      c = a["before" + l] || Lc,
      h = a["after" + l] || Lc;
    o[e] = t
      ? async function (e) {
          c.emit(),
            n && n(),
            await s(e),
            r && r(),
            h.emit(),
            i && (c.unwatchAll(), h.unwatchAll());
        }
      : function (e) {
          c.emit(),
            n && n(),
            s(e),
            r && r(),
            h.emit(),
            i && (c.unwatchAll(), h.unwatchAll());
        };
  }
}
const Uc = "string",
  Fc = {};
let kc = 0;
class Bc {
  constructor(e = {}) {
    (this.isComponent = !0), (this.props = e);
    ((this.usedMixins = []).dynamic = []),
      (this.static = !1),
      (this.webgl = Oc()),
      (this.scene = null),
      (this.parent = null),
      (this.base = null);
    ((this.children = []).dynamic = []),
      (this.isInit = !1),
      (this.isDestroyed = !1),
      (this.uid = ++kc),
      this.name ||
        (this.props.name
          ? (this.name = this.props.name)
          : this.props.id
          ? (this.name = this.props.id)
          : ((this.name = this.constructor.name),
            Fc[this.name] ? ++Fc[this.name] : (Fc[this.name] = 1),
            Fc[this.name] > 1 && (this.name += "_" + (Fc[this.name] - 1)))),
      (this.log = () => {});
  }
  triggerInit() {
    if (!this.isInit) {
      if ((this.beforeInit && this.beforeInit(), this.mixins)) {
        const e = this.mixins;
        if (Array.isArray(e))
          for (let t = 0; t < e.length; t++) {
            let i,
              n = e[t];
            Array.isArray(n) && ((i = n[1]), (n = n[0])), this.useMixin(n, i);
          }
      }
      this.init && this.init(),
        (this.isInit = !0),
        this.afterInit && this.afterInit();
    }
  }
  bind(e, t = 0) {
    return (
      (this[e] = (function (e, t, i = 0) {
        if (("string" == typeof e && (e = t[e]), 0 === i))
          return function () {
            return e.call(t);
          };
        if (1 === i)
          return function (i) {
            return e.call(t, i);
          };
        if (2 === i)
          return function (i, n) {
            return e.call(t, i, n);
          };
        if (3 === i)
          return function (i, n, r) {
            return e.call(t, i, n, r);
          };
        if (4 === i)
          return function (i, n, r, s) {
            return e.call(t, i, n, r, s);
          };
        if (5 === i)
          return function (i, n, r, s, a) {
            return e.call(t, i, n, r, s, a);
          };
        throw new Error("Too many arguments");
      })(e, this, t)),
      this[e]
    );
  }
  useMixin(e, t = {}) {
    typeof e === Uc && (e = this.webgl.collection.mixins[e]),
      e && (e.isMixin ? e : new e(t)).use(this);
  }
  unuseMixin(e) {
    e && e.unuse();
  }
  addObject3D(e) {
    return this.base && this.base.add(e), e;
  }
  removeObject3D(e) {
    return this.base && this.base.remove(e), null;
  }
  add(e, t = {}, i) {
    if ((typeof e === Uc && (e = this.webgl.collection.components[e]), !e))
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
        : (this.isAttached && Vc(this.scene, e), e)
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
      Hc(e),
      null
    );
  }
  triggerUpdate() {
    if (!this.isInit) return;
    this.beforeUpdate && this.beforeUpdate();
    const e = this.usedMixins.dynamic;
    for (let i = 0, n = e.length; i < n; i++) {
      const t = e[i];
      if ((t && t.update(), this.isDestroyed)) break;
      t.isDestroyed && (n--, i--);
    }
    if (this.isDestroyed) return;
    if ((this.update && this.update(), this.isDestroyed)) return;
    const t = this.children.dynamic;
    for (let i = 0, n = t.length; i < n; i++) {
      const e = t[i];
      e && e.triggerUpdate(), e.isDestroyed && (n--, i--);
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
function Vc(e, t) {
  const i = t.children,
    n = t.usedMixins;
  if (!t.isAttached) {
    (t.isAttached = !0), (t.scene = e), t.attached && t.attached();
    for (let e = n.length - 1; e >= 0; e--) n[e].componentAttached(t);
    for (let t = i.length - 1; t >= 0; t--) Vc(e, i[t]);
  }
}
function Hc(e) {
  const t = e.children,
    i = e.usedMixins;
  if (e.isAttached) {
    for (let e = t.length - 1; e >= 0; e--) Hc(t[e]);
    for (let t = i.length - 1; t >= 0; t--) i[t].componentDetached(e);
    (e.isAttached = !1), e.detached && e.detached(), (e.scene = null);
  } else e.scene = null;
}
(Bc.triggerAttached = Vc), (Bc.triggerDetached = Hc);
class Gc extends Bc {
  constructor(e = {}) {
    super(e), (this.isCamera = !0), (this.isUsed = !1);
  }
  afterInit() {
    this.cam && !this.base
      ? (this.base = this.cam)
      : this.cam ||
        (this.cam = (function () {
          const e = window.innerWidth / window.innerHeight;
          return new Br(55, e, 0.1, 100);
        })()),
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
    n(this.resizeSignal), super.destroy();
  }
}
function Wc(e, t) {
  e && e.isUsed != t && ((e.isUsed = !!t), e.isUsed ? e.used() : e.unused());
}
class jc extends Bc {
  constructor(e = {}) {
    (e.autoAttach = !!(e.autoAttach ?? 1)),
      super(e, !0),
      (this.isScene = !0),
      (this._cam = { current: !1, forced: !1 }),
      this.props || (this.props = e);
  }
  triggerInit() {
    this.isInit ||
      ((this.base = new No()),
      super.triggerInit(),
      this.camera || (this.camera = this.add(Gc)),
      this.props.autoAttach && this.attach());
  }
  attach() {
    Bc.triggerAttached(this, this);
  }
  detach() {
    Bc.triggerDetached(this, this);
  }
  update() {}
  init() {}
  get camera() {
    return this._cam.current;
  }
  set camera(e) {
    (e && e.isCamera) || (e = !1);
    const t = this._cam;
    t.current !== e &&
      (Wc(t.current, !1), (t.current = e), t.forced || Wc(t.current, !1));
  }
  get overrideCamera() {
    return this._cam.forced;
  }
  set overrideCamera(e) {
    (e && e.isCamera) || (e = !1);
    const t = this._cam;
    t.forced !== e &&
      (Wc(t.forced, !1), Wc(t.current, !1), (t.forced = e), Wc(t.forced, !0));
  }
  getCurrentCamera() {
    return this._cam.forced || this._cam.current;
  }
  render() {
    const e = this.webgl.threeRenderer,
      t = this.getCurrentCamera();
    t && e.render(this.base, t.cam);
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
const qc = {
    GAME_LINE_BLOCKS_PRESETS: {
      block_colors: {
        very_light: { chance: 0.1 },
        light: { chance: 0.8 },
        dark: { chance: 0.1 },
      },
      assets: { base: { chance: 1 } },
    },
    GAME_BLOCKS_PRESETS: {
      assets: { plant_1: { chance: 0.1 } },
      block_colors: {
        very_light: { chance: 0.2 },
        light: { chance: 0.4 },
        dark: { chance: 0.3 },
      },
    },
    BORDER_FIRST_BLOCKS_PRESETS: {
      assets: {
        plant_1: { chance: 0.1 },
        plant_2: { chance: 0.1 },
        tree_1: { chance: 0.07 },
        dirt_1: { chance: 0.03 },
      },
      block_colors: {
        very_light: { chance: 0.2 },
        light: { chance: 0.2 },
        dark: { chance: 0.2 },
      },
    },
    BORDER_SECOND_BLOCKS_PRESETS: {
      assets: {
        plant_1: { chance: 0.1 },
        plant_2: { chance: 0.2 },
        tree_1: { chance: 0.5 },
      },
    },
    MAIN_BLOCKS_PRESETS: {
      block_colors: {
        very_light: { chance: 0.1 },
        light: { chance: 0.1 },
        dark: { chance: 0.1 },
      },
      assets: {
        tree_1: { chance: 0.55 },
        plant_2: { chance: 0.15 },
        plant_1: { chance: 0.05 },
        dirt_1: { chance: 0.05 },
      },
    },
  },
  Xc = {
    main: {
      screenColor: 4770290,
      lineMainColor: 4881869,
      lineGlowColor: 5759440,
    },
    lose: {
      screenColor: 13704492,
      lineMainColor: 13704492,
      lineGlowColor: 16208994,
    },
    pink: {
      screenColor: 16718239,
      lineMainColor: 16718239,
      lineGlowColor: 16743881,
    },
    yellow: {
      screenColor: 16304244,
      lineMainColor: 16304244,
      lineGlowColor: 16772766,
    },
  },
  Yc = { height: 2, depth: 1.95, width: 1.95 },
  Kc = 10,
  Zc = 200,
  Jc = 6,
  Qc = { very_dark: 0, dark: 1, light: 2, very_light: 3 },
  $c = { purple: 0, yellow: 1, blue: 2, pink: 3 },
  eh = {
    rock_1: { atlas: "Rock_1" },
    rock_2: { atlas: "Rock_3" },
    rock_3: { atlas: "Rock_3" },
    rock_4: { atlas: "Rock_4" },
    rock_5: { atlas: "Rock_5" },
    none: { atlas: "None" },
  },
  th = {
    dirt_1: {
      atlas: "Dirt_1",
      decals: { rock_2: 0.05, rock_3: 0.03, rock_4: 0.03, rock_5: 0.03 },
    },
    tree_1: {
      atlas: "Tree_1",
      colors: { blue: 0.2, purple: 0.4, yellow: 0.1, pink: 0.2 },
      decals: { rock_1: 0.1, rock_2: 0.03, rock_3: 0.05, rock_4: 0.08 },
    },
    plant_1: {
      atlas: "Plant_1",
      colors: { blue: 0.2, purple: 0.2, yellow: 0.2, pink: 0.4 },
      decals: { rock_1: 0.05, rock_2: 0.1, rock_3: 0.05, rock_4: 0.05 },
    },
    plant_2: {
      atlas: "Plant_2",
      colors: { blue: 0.2, purple: 0.2, yellow: 0.2, pink: 0.4 },
      decals: { rock_1: 0.05, rock_2: 0.1 },
    },
    base: {
      atlas: "Base",
      decals: { rock_1: 0.02, rock_2: 0.02, rock_3: 0.02, rock_4: 0.02 },
    },
  },
  ih = {
    playerPos: { value: new Fi() },
    playerEasedPos: { value: new Fi() },
    blockSizes: { value: new Fi(Yc.WIDTH, Yc.HEIGHT, Yc.DEPTH) },
    time: { value: 0 },
    nextJumpPos: { value: 0 },
  },
  nh = {
    obstacles: {
      obstacle_01: { value: new Ii() },
      obstacle_23: { value: new Ii() },
    },
    egg: { eggPosition: { value: new Fi() } },
  };
let rh = 0;
function sh(e, t, i) {
  const n = () => {};
  return {
    c: ++rh,
    shader: e,
    use: (i) => {
      const n = i.material || i;
      return (n[t] = e), (n.needsUpdate = !0), i;
    },
    unuse: n,
    clear: n,
  };
}
const ah = sh(
    "#define STANDARD\n#ifdef PHYSICAL\n#define IOR\n#define SPECULAR\n#endif\nuniform vec3 diffuse;uniform vec3 emissive;uniform float roughness;uniform float metalness;uniform float opacity;varying vec2 vWorldPosition;varying float vDist;varying vec2 vAlphaUV;varying float vWave;varying float vWaveLose;varying float vWaveJump;varying vec4 vNeighbours;varying vec2 vUv2;uniform sampler2D dataMap;uniform sampler2D alphaMap;uniform vec3 playerEasedPos;uniform vec3 waveColor;uniform float time;varying float vShown;varying float vAssetsColor;varying float vBlockColor;varying float vTest;varying vec2 vInstancePos;varying float vBasePos;varying vec3 vPlayerPos;uniform vec4 obstacle_01;uniform vec4 obstacle_23;uniform vec3 eggPosition;uniform float nextJumpPos;uniform float isDead;\n#ifdef IOR\nuniform float ior;\n#endif\n#ifdef SPECULAR\nuniform float specularIntensity;uniform vec3 specularColor;\n#ifdef USE_SPECULARINTENSITYMAP\nuniform sampler2D specularIntensityMap;\n#endif\n#ifdef USE_SPECULARCOLORMAP\nuniform sampler2D specularColorMap;\n#endif\n#endif\n#ifdef USE_CLEARCOAT\nuniform float clearcoat;uniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\nuniform float iridescence;uniform float iridescenceIOR;uniform float iridescenceThicknessMinimum;uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\nuniform vec3 sheenColor;uniform float sheenRoughness;\n#ifdef USE_SHEENCOLORMAP\nuniform sampler2D sheenColorMap;\n#endif\n#ifdef USE_SHEENROUGHNESSMAP\nuniform sampler2D sheenRoughnessMap;\n#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nfloat mapFunction(float value,float min1,float max1,float min2,float max2){return min2+(value-min1)*(max2-min2)/(max1-min1);}uniform vec3 bottomBackgroundColor;const vec3 darkerBaseTerrain=vec3(0.1,0.2,0.52);vec3 colorBurn(vec3 target,vec3 blend){return 1.0-(1.0-target)/blend;}vec3 linearBurn(vec3 target,vec3 blend){return target+blend-1.0;}float addFakeAO(float ao,float u,float n){float nao=(smoothstep(0.1,1.9,u)*2.6+smoothstep(0.6,1.1,u)*1.)*min(0.23,n*8.)*step(vBasePos,0.0001);ao+=nao;return ao;}void main(){vec2 nextPos=vec2(0.,nextJumpPos);float landingCube=1.-smoothstep(0.,1.,distance(vInstancePos.xy,nextPos));\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;\n#include <logdepthbuf_fragment>\n#ifdef USE_MAP\nvec4 dataColor=texture2D(dataMap,vUv);float assetsColorOffset=(dataColor.r*vAssetsColor)/16.;float blockColorOffset=dataColor.g*(vBlockColor*(1.-landingCube)+(1.*(landingCube)))/16.;vec4 sampledDiffuseColor=texture2D(map,vec2(vUv.x+assetsColorOffset+blockColorOffset,vUv.y));\n#ifdef DECODE_VIDEO_TEXTURE\nsampledDiffuseColor=vec4(mix(pow(sampledDiffuseColor.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),sampledDiffuseColor.rgb*0.0773993808,vec3(lessThanEqual(sampledDiffuseColor.rgb,vec3(0.04045)))),sampledDiffuseColor.w);\n#endif\ndiffuseColor*=sampledDiffuseColor;\n#endif\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <roughnessmap_fragment>\n#include <metalnessmap_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\n#include <clearcoat_normal_fragment_begin>\n#include <clearcoat_normal_fragment_maps>\n#include <emissivemap_fragment>\n#include <lights_physical_fragment>\n#include <lights_fragment_begin>\n#include <lights_fragment_maps>\n#include <lights_fragment_end>\n#include <aomap_fragment>\nvec3 totalDiffuse=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse;vec3 totalSpecular=reflectedLight.directSpecular+reflectedLight.indirectSpecular;\n#include <transmission_fragment>\nvec3 outgoingLight=totalDiffuse+totalSpecular+totalEmissiveRadiance;\n#ifdef USE_SHEEN\nfloat sheenEnergyComp=1.0-0.157*max3(material.sheenColor);outgoingLight=outgoingLight*sheenEnergyComp+sheenSpecular;\n#endif\n#ifdef USE_CLEARCOAT\nfloat dotNVcc=saturate(dot(geometry.clearcoatNormal,geometry.viewDir));vec3 Fcc=F_Schlick(material.clearcoatF0,material.clearcoatF90,dotNVcc);outgoingLight=outgoingLight*(1.0-material.clearcoat*Fcc)+clearcoatSpecular*material.clearcoat;\n#endif\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\ngl_FragColor.xyz=mix(gl_FragColor.xyz*darkerBaseTerrain,gl_FragColor.xyz,(clamp(mapFunction(vBasePos,-1.,0.,0.,1.),0.0,1.)));vec3 baseColor=gl_FragColor.xyz;vec3 rose=waveColor;gl_FragColor.xyz+=rose*(vWaveJump*1.3);gl_FragColor.xyz=mix(gl_FragColor.xyz,baseColor+rose,clamp(vTest,0.,1.));gl_FragColor.xyz=mix(gl_FragColor.xyz,baseColor+vec3(.9,0.1,0.1),(vWaveLose));float shadows=mix(clamp(distance(vPlayerPos.xz,vWorldPosition.xy)*1.2,0.,1.),1.,(isDead));gl_FragColor.xyz=mix(gl_FragColor.xyz,gl_FragColor.xyz-vec3(.07,.05,.04)*3.,smoothstep(0.3,.7,1.-shadows)*(1.-isDead));shadows=mix(shadows,0.,1.-clamp(distance(obstacle_01.xy,vWorldPosition.xy)*.55,0.,1.));shadows=mix(shadows,0.,1.-clamp(distance(obstacle_01.zw,vWorldPosition.xy)*.55,0.,1.));shadows=mix(shadows,0.,1.-clamp(distance(obstacle_23.xy,vWorldPosition.xy)*.55,0.,1.));shadows=mix(shadows,0.,1.-clamp(distance(obstacle_23.zw,vWorldPosition.xy)*.55,0.,1.));shadows=mix(shadows,(eggPosition.y-2.)/3.,1.-clamp(distance(eggPosition.xz,vWorldPosition.xy)*1.2,0.,1.));shadows=1.-shadows;gl_FragColor.xyz=mix(gl_FragColor.xyz,gl_FragColor.xyz-vec3(0.125,0.125,0.125),smoothstep(0.1,.7,shadows));float zDist=smoothstep(0.,30.,distance(playerEasedPos.z,vWorldPosition.y));zDist+=smoothstep(0.,25.,distance(vPlayerPos.x,vWorldPosition.x));zDist=clamp(zDist,0.,1.);float landingDist=distance(vWorldPosition.xy,nextPos);float landingZone=landingDist;float maxRadius=1.;float radius=mod(-time,maxRadius);float lineWidth=.1;landingZone=1.-smoothstep(radius+lineWidth,radius+lineWidth*2.,landingDist);landingZone=mix(landingZone,smoothstep(radius,radius+lineWidth,landingDist),landingZone);landingZone*=sin(radius/maxRadius*3.1415);radius=mod(-time-.5,maxRadius);float ring2=1.-smoothstep(radius+lineWidth,radius+lineWidth*2.,landingDist);ring2=mix(ring2,smoothstep(radius,radius+lineWidth,landingDist),ring2);ring2*=sin(radius/maxRadius*3.1415);landingZone+=ring2;landingZone*=landingCube;landingZone*=(smoothstep(-.2,0.,vBasePos));landingZone=min(landingZone+landingCube/2.,1.);vec3 col=gl_FragColor.xyz;col=mix(col,col+vec3(1.,.3,.3)*.5,+(1.-clamp(distance(nextPos,vWorldPosition.xy)/4.,0.,1.)));col=mix(col,col+vec3(1.,.3,.3)*1.,landingZone);col=mix(col,col+rose,(1.-clamp(distance(vPlayerPos.xz,vWorldPosition.xy)/5.,0.,1.))*.6);col=mix(col,linearBurn(vec3(300.,196.,255.)/255.,col),zDist*.8);gl_FragColor.xyz=col;float fakeAO=0.;vec4 n=1.-vNeighbours;fakeAO=addFakeAO(fakeAO,-vUv2.x,n.x);fakeAO=addFakeAO(fakeAO,vUv2.x,n.y);fakeAO=addFakeAO(fakeAO,vUv2.y,n.z);fakeAO=addFakeAO(fakeAO,-vUv2.y,n.w);gl_FragColor.xyz=mix(gl_FragColor.xyz,gl_FragColor.xyz-mix(0.45,0.25,zDist),fakeAO);}",
    "fragmentShader"
  ),
  oh = sh(
    "#define STANDARD\nattribute vec3 instancePos;attribute vec4 instanceQuat;attribute vec4 texCoords;attribute vec4 texCoordsDecal;attribute vec2 alphaUV;attribute float assetsColor;attribute float blockColor;uniform sampler2D dataMap;uniform vec3 playerPos;uniform vec3 playerEasedPos;uniform vec3 wavePos;uniform vec3 waveLose;uniform vec3 waveJump;uniform float isGame;varying float vWave;varying float vWaveLose;varying float vWaveJump;uniform vec3 eggPosition;\n#include <get_instance_matrix>\n#include <get_instance_rotation_matrix>\nuniform sampler2D noise;uniform float time;varying float vShown;uniform sampler2D alphaMap;uniform float spring;uniform float nextJumpPos;varying vec3 vViewPosition;varying vec2 vWorldPosition;varying float vBasePos;varying vec2 vInstancePos;\n#include <common>\nvarying vec2 vUv;\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec3 vPlayerPos;varying vec2 vPos;varying vec2 vAlphaUV;varying float vDist;varying float vAssetsColor;varying float vBlockColor;varying float vTest;varying vec4 vNeighbours;varying vec2 vUv2;float wave(in vec3 waveData,in vec3 instancePos,in float circleRadius){float waveDist=distance(instancePos.xz,vec2(0,waveData.x));float radius=waveData.y;float waveRadiusIn=clamp(smoothstep(-circleRadius+radius,0.+radius,waveDist),0.,1.);float waveRadiusOut=clamp(smoothstep(-(circleRadius*2.)+radius,-circleRadius+radius,waveDist),0.,1.);float waveProgress=(1.-waveRadiusIn)*waveRadiusOut*waveData.z;return waveProgress;}float udSegment(in vec2 p,in vec2 a,in vec2 b){vec2 ba=b-a;vec2 pa=p-a;float h=clamp(dot(pa,ba)/dot(ba,ba),0.0,1.0);return length(pa-h*ba);}vec3 getElevation(in vec3 sourcePos){float noiseY=texture2D(noise,mod((sourcePos.xz+time*0.3333)/20.,1.)).x*1.;float waveLoseProgress=wave(waveLose,sourcePos,5.);float waveJumpProgress=wave(waveJump,sourcePos,10.);float waveJump=waveJumpProgress;float y=sourcePos.y;y+=max(waveLoseProgress,0.);y+=max(waveJumpProgress*1.25,0.);y+=mix(.5,noiseY,step(1.,distance(sourcePos.xz,eggPosition.xz)));vec2 v1=vec2(0.0,playerPos.z)+0.0;vec2 v2=vec2(0.0,playerEasedPos.z)+0.;float th=3.;float d=udSegment(sourcePos.xz,v1,v2)-th;d=(1.-(d));float test=smoothstep(.2,th+2.,d);y+=mix(0.,playerPos.y,test)*1.;y=clamp(y,0.,playerPos.y);th=5.;test=smoothstep(.2,th,d)/5.;y-=mix(0.,playerPos.y,test)*10.*spring;float nextJumpBlock=smoothstep(0.,1.,distance(sourcePos.xz,vec2(0.,nextJumpPos)));y+=abs((sourcePos.x))/3.5*isGame*nextJumpBlock;y+=(1.-nextJumpBlock)*.5;return vec3(y,test,waveJump);}float neighbour(in float baseY,in vec2 offset){float diff=getElevation(instancePos.xyz+vec3(offset.x,0.,offset.y)).x-baseY;diff=smoothstep(1.3,0.,diff);return diff;}void main(){vUv=uv;vAssetsColor=assetsColor;vBlockColor=blockColor;\n#include <uv2_vertex>\n#include <color_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <normal_vertex>\nmat3 instanceNormalMatrix=getInstanceRotationMatrix(instanceQuat);transformedNormal=instanceNormalMatrix*objectNormal;vNormal=transformedNormal;\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\nvec4 mvPosition=vec4(transformed,1.0);vAlphaUV=vec2(alphaUV.x,alphaUV.y)*texCoords.zw+texCoords.xy;vec2 pos=mvPosition.xy+instancePos.xy;vPos=pos;vec4 noiseTex=texture2D(noise,mod((pos+time)/7.,1.));vPlayerPos=playerPos;vDist=smoothstep(.2,.8,distance(vPos.xy,playerPos.xz)/7.);float distFromPlayer=distance(instancePos.xz,playerPos.xz);float clampedDist=clamp(distFromPlayer/5.5,0.,1.);vDist=smoothstep(.0,1.,(clampedDist));vec3 data=getElevation(instancePos);vec3 insPos=vec3(instancePos.x,data.x,instancePos.z);vTest=data.y*clamp(distance(playerPos.xz,playerEasedPos.xz),0.,1.)*15.;vWaveJump=data.z;vNeighbours=vec4(neighbour(insPos.y,vec2(-1.95,0.)),neighbour(insPos.y,vec2(1.95,0.)),neighbour(insPos.y,vec2(0.,1.95)),neighbour(insPos.y,vec2(0.,-1.95)));mat4 instanceMatrix=getInstanceMatrix(insPos,instanceQuat,vec3(1.));vUv2=(modelMatrix*instanceMatrix*mvPosition).xz-instancePos.xz;mvPosition=modelViewMatrix*instanceMatrix*mvPosition;vec2 alphaUVDecal=vec2(alphaUV.x,alphaUV.y)*texCoordsDecal.zw+texCoordsDecal.xy;vShown=texture2D(alphaMap,vAlphaUV).x+texture2D(alphaMap,alphaUVDecal).x;mvPosition.z-=10000.*(1.-vShown);gl_Position=projectionMatrix*mvPosition;\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\nvViewPosition=-mvPosition.xyz;\n#include <worldpos_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\nvec4 worldPos=instanceMatrix*vec4(transformed,1.0);vBasePos=transformed.y;vInstancePos=insPos.xz;vWorldPosition=worldPos.xz;}",
    "vertexShader"
  );
let lh;
class ch extends wl {
  constructor(e = {}) {
    super(e),
      (this.uniforms = {
        ...Ur.clone(ns.standard.uniforms),
        ...ih,
        noise: { value: Nc.resources.textures.noise },
        time: { value: 0 },
        alphaMap: { value: Nc.resources.textures.alphaMap },
        dataMap: { value: Nc.resources.textures.dataMap },
        bottomBackgroundColor: { value: new Ei(14148588) },
        waveColor: { value: new Ei(6710835) },
        waveJump: { value: new Fi() },
        waveLose: { value: new Fi() },
        wavePos: { value: new Fi() },
        ...nh.obstacles,
        ...nh.egg,
        spring: { value: 0 },
        isGame: { value: 0 },
        isDead: { value: 0 },
      }),
      (this.map = Nc.resources.textures.diffuse),
      (this.transparent = !0),
      (this.forceOpaque = !0),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.envMapIntensity = 1),
      (this.lights = !0),
      (this.fog = !0),
      (this.type = "StandardMaterial"),
      ah.use(this),
      oh.use(this);
  }
}
ch.get = (e) => (lh = lh || new ch(e));
const hh = eh.none;
class uh extends Bc {
  init() {
    (this.id = this.props.id || 0),
      (this.base = new Bn()),
      (this.base.position.x += this.id * Yc.width),
      this.reset(),
      this.update();
  }
  reset() {
    (this.asset = null),
      (this.color = 0),
      (this.assetsColor = 0),
      (this.decal = hh);
  }
  drop(e, t = !1) {
    if (!e) return null;
    const i = Object.keys(e);
    if (!i.length) return null;
    let n = this.webgl.stores.blockPrng.randomFloat(0, 1),
      r = 0,
      s = 0,
      a = null;
    for (let o = 0; o < i.length; o++) {
      const t = i[o];
      ("number" == typeof e[t] || e[t].chance) &&
        ("number" == typeof e[t] ? (s += e[t]) : (s += e[t].chance),
        n > r && n < s && (a = t),
        (r = s));
    }
    return t && console.log(e, a), a;
  }
  updatePosition(e = new Fi()) {
    (this.needsUpdate = !0), this.base.position.copy(e);
  }
  update(e) {
    this.reset(),
      (this.needsUpdate = !0),
      e && (this.preset = e),
      (e = e || this.preset || qc.MAIN_BLOCKS_PRESETS);
    let t = this.drop(e.assets);
    (t && th[t]) || (t = "base"), (this.asset = th[t]);
    const i = this.drop(e.block_colors);
    null !== i && Qc[i] && (this.color = Qc[i]);
    const n = this.drop(this.asset.decals);
    null !== n && eh[n] && (this.decal = eh[n]);
    const s = this.drop(this.asset.colors);
    null !== s && $c[s] && (this.assetsColor = $c[s]),
      this.base.quaternion.setFromAxisAngle(
        new Fi(0, 1, 0),
        (Math.PI / 2) * r.randomInt(0, 4)
      );
  }
}
class dh extends Bc {
  init() {
    (this.id = this.props.id || 0),
      (this.linesCount = this.props.linesCount || 20),
      (this.base = new Bn()),
      (this.basePosition = new Fi(0, 0, -this.id * Yc.depth)),
      this.reset(),
      this.createBlocks();
  }
  reset() {
    this.base.position.copy(this.basePosition);
  }
  createBlocks() {
    this.blocks = [];
    for (let e = 0; e < this.props.blocksCount; e++) {
      const t = this.add(uh, { line: this, id: e, prng: this.props.prng });
      this.blocks.push(t);
    }
  }
  updatePosition(e = new Fi()) {
    this.base.position.copy(e);
    for (let t = 0; t < this.blocks.length; t++) this.blocks[t].update();
  }
  update(e) {
    switch (e) {
      case "backwards":
        this.base.position.z -= Yc.depth * this.linesCount;
        break;
      case "forward":
        this.base.position.z += Yc.depth * this.linesCount;
    }
  }
}
let ph = null;
const mh = new Fi();
class fh extends Bc {
  init() {
    (ph = this.props.blueprint || this.webgl.geometries.block),
      (this.base = new Bn()),
      (this.rowCount = this.props.rowCount || 10),
      (this.columnCount = this.props.columnCount || 10),
      (this.count = this.rowCount * this.columnCount),
      (this.material = this.props.material || ch.get()),
      this.initGeometry(),
      (this.mesh = new Dr(this.geo, this.material)),
      (this.mesh.needsUpdate = !0),
      (this.mesh.matrixAutoUpdate = !0),
      (this.mesh.frustumCulled = !1),
      this.addObject3D(this.mesh),
      (this.time = 0);
  }
  initGeometry() {
    this.geo && this.geo.dispose(),
      (this.geo = new vc()),
      (this.geo.index = ph.index),
      (this.geo.attributes.position = ph.attributes.position),
      (this.geo.attributes.uv = ph.attributes.uv),
      (this.geo.attributes.alphaUV = ph.attributes.alphaUV),
      (this.geo.attributes.normal = ph.attributes.normal),
      (this.stride = 17),
      (this.buffer = new Float32Array(this.count * this.stride));
    const e = (this.interleavedBuffer = new Ec(this.buffer, this.stride));
    this.geo.setAttribute("instancePos", new Fo(e, 3, 0, !1)),
      this.geo.setAttribute("instanceQuat", new Fo(e, 4, 3, !1)),
      this.geo.setAttribute("texCoords", new Fo(e, 4, 7, !1)),
      this.geo.setAttribute("texCoordsDecal", new Fo(e, 4, 11, !1)),
      this.geo.setAttribute("assetsColor", new Fo(e, 1, 15, !1)),
      this.geo.setAttribute("blockColor", new Fo(e, 1, 16, !1)),
      new Fi(),
      new Ui(),
      (this.lines = []);
    for (let t = 0; t < this.columnCount; t++) {
      const e = new dh({
        id: t,
        linesCount: this.columnCount,
        blocksCount: this.rowCount,
      });
      e.init(), this.lines.push(e);
    }
    (this.interleavedBuffer.needsUpdate = !0),
      this.mesh &&
        ((this.mesh.geometry = this.geo), (this.mesh.needsUpdate = !0));
  }
  fill(
    e,
    t,
    i = 0,
    n = new Fi(),
    r = new Ui(),
    s = [0, 0, 0, 0],
    a = [0, 0, 0, 0],
    o = 0,
    l = 0
  ) {
    (e[t * this.stride + i + 0] = n.x),
      (e[t * this.stride + i + 1] = n.y),
      (e[t * this.stride + i + 2] = n.z),
      (e[t * this.stride + i + 3] = r.x),
      (e[t * this.stride + i + 4] = r.y),
      (e[t * this.stride + i + 5] = r.z),
      (e[t * this.stride + i + 6] = r.w),
      (e[t * this.stride + i + 7] = s[0]),
      (e[t * this.stride + i + 8] = 1 - (s[1] + s[3])),
      (e[t * this.stride + i + 9] = s[2]),
      (e[t * this.stride + i + 10] = s[3]),
      (e[t * this.stride + i + 11] = a[0]),
      (e[t * this.stride + i + 12] = 1 - (a[1] + a[3])),
      (e[t * this.stride + i + 13] = a[2]),
      (e[t * this.stride + i + 14] = a[3]),
      (e[t * this.stride + i + 15] = o),
      (e[t * this.stride + i + 16] = l);
  }
  update() {
    for (let e = 0; e < this.lines.length; e++) {
      const t = this.lines[e];
      for (let e = 0; e < t.blocks.length; e++) {
        const i = t.blocks[e];
        if (i.needsUpdate) {
          let n = t.id * this.rowCount + e;
          mh.copy(t.base.position), mh.add(i.base.position);
          const r = mh,
            s = i.base.quaternion,
            a = this.webgl.atlases.alphaMap.sprites,
            o = a[i.asset.atlas][0].texCoords,
            l = a[i.decal.atlas][0].texCoords;
          (i.needsUpdate = !1),
            this.fill(this.buffer, n, 0, r, s, o, l, i.assetsColor, i.color);
        }
      }
    }
    this.interleavedBuffer.needsUpdate = !0;
  }
}
const gh = new Fi();
class vh extends Bc {
  init() {
    (this.base = new Bn()), (this.count = 1560), (this.time = 0);
    const e = this.webgl.geometries.block,
      t = this.webgl.geometries.middleBlock;
    (this.material = ch.get()),
      (this.mainBlocks = new fh({
        material: this.material,
        blueprint: e,
        rowCount: 12,
        columnCount: 26,
      })),
      (this.gameBlocks = new fh({
        material: this.material,
        blueprint: t,
        rowCount: 5,
        columnCount: 26,
      })),
      (this.groundSize = { width: 16 * Yc.width, fullDepth: 26 * Yc.depth }),
      (this.groundSize.halfWidth = this.groundSize.width / 2),
      this.add(this.mainBlocks),
      this.add(this.gameBlocks),
      (this.spring = s()),
      this.spring.setTension(0.03),
      this.spring.setFriction(0.18),
      (this.springTarget = 0);
  }
  afterInit() {
    this.reset();
  }
  initGUI() {
    const e = this.webgl.guiFx;
    let t = (e.waveButton = e.addButton({ title: "Wave" }));
    t.on("click", () => {
      this.wave();
    }),
      (t = e.waveLoseButton = e.addButton({ title: "Wave Lose" })),
      t.on("click", () => {
        this.waveLose();
      });
  }
  wave() {
    var e, t;
    (this.material.uniforms.waveJump.value.x =
      ih.playerPos.value.z - Yc.depth * (Kc / 2)),
      (this.material.uniforms.waveJump.value.z = 1),
      null == (e = null == this ? void 0 : this.waveJumpYTween) || e.destroy(),
      null == (t = null == this ? void 0 : this.waveJumpZTween) || t.destroy(),
      (this.waveJumpYTween = a({
        target: this.material.uniforms.waveJump.value,
        property: "y",
        easing: "outExpo",
        from: 0,
        to: 60,
        duration: 3e3,
      })),
      (this.waveJumpZTween = a({
        target: this.material.uniforms.waveJump.value,
        property: "z",
        easing: "inOutSine",
        delay: 0,
        from: 1,
        to: 0,
        duration: 1300,
      }));
  }
  waveLose() {
    var e, t;
    (this.material.uniforms.waveLose.value.x = ih.playerPos.value.z),
      (this.material.uniforms.waveLose.value.z = 1),
      this.webgl.scene.mainCamera.shake(500, 0.2, !1, !0, 2),
      null == (e = null == this ? void 0 : this.waveLoseYTween) || e.destroy(),
      null == (t = null == this ? void 0 : this.waveLoseZTween) || t.destroy(),
      (this.waveLoseYTween = a({
        target: this.material.uniforms.waveLose.value,
        property: "y",
        easing: "outExpo",
        from: 0,
        to: 20,
        duration: 900,
      })),
      (this.waveLoseZTween = a({
        target: this.material.uniforms.waveLose.value,
        property: "z",
        easing: "outExpo",
        delay: 200,
        from: 1,
        to: 0,
        duration: 700,
      }));
  }
  reset() {
    const e = new Fi();
    for (let t = 0; t < this.mainBlocks.lines.length; t++) {
      const i = this.mainBlocks.lines[t];
      (gh.z = -t * Yc.depth), i.updatePosition(gh);
      for (let t = 0; t < i.blocks.length; t++) {
        const n = i.blocks[t];
        (e.x = Yc.width * t),
          t > i.blocks.length / 2 - 1 && (e.x += 5 * Yc.width),
          (e.x -= this.groundSize.halfWidth),
          n.updatePosition(e),
          (t != Math.floor(i.blocks.length / 2) &&
            t != Math.floor(i.blocks.length / 2) - 1) ||
            n.update(qc.BORDER_FIRST_BLOCKS_PRESETS);
      }
    }
    for (let t = 0; t < this.gameBlocks.lines.length; t++) {
      const i = this.gameBlocks.lines[t];
      (gh.z = -t * Yc.depth), i.updatePosition(gh);
      for (let t = 0; t < i.blocks.length; t++) {
        const n = i.blocks[t];
        (e.x = Yc.width * t),
          (e.x += 6 * Yc.width),
          (e.x -= this.groundSize.halfWidth),
          n.updatePosition(e),
          n.update(qc.GAME_BLOCKS_PRESETS),
          t == Math.ceil(i.blocks.length / 2) - 1 &&
            n.update(qc.GAME_LINE_BLOCKS_PRESETS);
      }
    }
  }
  updateLine(e) {
    e.base.position.z > this.webgl.player.base.position.z + 14 &&
      (gh.copy(e.base.position),
      (gh.z -= this.groundSize.fullDepth),
      (gh.z = gh.z.toFixed(1)),
      e.updatePosition(gh));
  }
  update() {
    (this.time += this.webgl.time.dt / 1e3),
      (this.material.uniforms.time.value = this.time),
      (this.material.uniforms.spring.value = this.spring.value),
      this.waveLoseYTween &&
        this.waveLoseYTween.update(this.webgl.time.stableDt),
      this.waveLoseZTween &&
        this.waveLoseZTween.update(this.webgl.time.stableDt),
      this.waveJumpYTween &&
        this.waveJumpYTween.update(this.webgl.time.stableDt),
      this.waveJumpZTween &&
        this.waveJumpZTween.update(this.webgl.time.stableDt);
    for (let e = 0; e < this.mainBlocks.lines.length; e++) {
      const t = this.mainBlocks.lines[e];
      this.updateLine(t);
    }
    (this.webgl.player.body.base.position.y = 0),
      (this.webgl.player.body.base.position.y -= Math.min(
        0.4,
        3.8 * this.spring.value
      )),
      this.spring.setTarget(this.springTarget),
      this.spring.update(this.webgl.time.stableDt);
    for (let e = 0; e < this.gameBlocks.lines.length; e++) {
      const t = this.gameBlocks.lines[e];
      this.updateLine(t);
    }
  }
}
class _h {
  constructor(e = {}) {
    (this.isMixin = !0),
      (this.isCreated = !1),
      (this.isDestroyed = !1),
      (this.options = e),
      (this.base = null),
      (this.webgl = Oc());
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
        ((this.static = null != this.static ? this.static : !this.update),
        (this.isCreated = !0),
        this.created(e, this.options)),
      t.push(this),
      this.static || t.dynamic.push(this),
      this.used(e));
  }
  unuse() {
    if (this.isDestroyed || !this.base) return;
    let e;
    this.unused(this.base),
      (e = this.base.usedMixins.indexOf(this)),
      e >= 0 && this.base.usedMixins.splice(e, 1),
      (e = this.base.usedMixins.dynamic.indexOf(this)),
      e >= 0 && this.base.usedMixins.dynamic.splice(e, 1),
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
      (this.options = null),
      (this.webgl = null);
  }
  extendProto(e, t, i) {
    const n = this.base.constructor.prototype;
    (!i && n[e]) || (n[e] = t);
  }
}
const xh = o();
class yh extends _h {
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
      (this.base.shake = Mh.bind(this.base)),
      (this.base.updateShake = bh.bind(this.base));
  }
}
function bh() {
  const e = this.shakeState;
  if (!e.shaking) return;
  const t = this.webgl.time.dt,
    i = 1 - e.currentDuration / e.maxDuration;
  let n = l(e.speed[0], e.speed[1], i);
  (n *= e.freqMult),
    (e.currentAmplitude = l(e.maxAmplitude, 0, i)),
    (e.pos[0] += t * n),
    (e.pos[1] += t * n),
    (e.value[0] = Math.cos(9 * e.pos[0]) * e.currentAmplitude * 0.6),
    (e.value[1] = xh(10, e.pos[1]) * e.currentAmplitude);
  const r = 0.9 * e.value[0],
    s = 0.3 * e.value[1],
    a = e.vertical ? s : r,
    o = e.vertical ? r : s;
  this.base.translateY(o),
    this.base.translateX(a),
    this.base.rotateZ(0.5 * o),
    this.base.rotateY(0.5 * a),
    (e.currentDuration = Math.max(0, e.currentDuration - t)),
    0 === e.currentDuration &&
      ((e.maxAmplitude = 0), (e.maxDuration = 0), (e.shaking = !1));
}
async function Mh(e = 500, t = 0.1, i = !1, n = !1, r = 1, s = 0) {
  await c(s);
  const a = this.shakeState;
  (t *= 1.07),
    (a.vertical = i),
    (n || !a.shaking || e > a.maxDuration) &&
      ((a.maxDuration = e), (a.currentDuration = e)),
    (n || !a.shaking || t > a.maxAmplitude) &&
      ((a.maxAmplitude = t), (a.currentAmplitude = t), (a.freqMult = r)),
    (e || t) && (a.shaking = !0),
    (a.pos[0] = 200 * Math.PI),
    (a.pos[1] = 500 * Math.random());
}
const wh = {
  from: { position: [], quaternion: [], fov: 39.55 },
  fromDesktop: {
    position: [-5.01783, 2.97447, -45.4409],
    quaternion: [853e-6, 0.995995, 0.009561, -0.08889],
    fov: 39.55,
  },
  fromMobile: {
    position: [-5.01783, 2.97447, -4.4409],
    quaternion: [853e-6, 0.995995, 0.009561, -0.08889],
    fov: 39.55,
  },
  to: {
    position: [4.94449, 2.52157, -21.98193],
    quaternion: [0.007408, 0.992517, -0.079856, 0.092073],
    fov: 39.55,
  },
  toMobile: {
    position: [4.40737, 1.2084, -21.17955],
    quaternion: [0.049262, 0.943807, -0.164721, 0.282258],
    fov: 39.55,
  },
  toDesktop: {
    position: [4.94449, 2.52157, -21.98193],
    quaternion: [0.007408, 0.992517, -0.079856, 0.092073],
    fov: 39.55,
  },
  toEnd: { position: [], quaternion: [], fov: 39.55 },
  toEndMobile: {
    position: [3.0422, 4.16381, -25.7967],
    quaternion: [-0.031344, 0.928216, 0.080392, 0.361896],
    fov: 37.85,
  },
  toEndDesktop: {
    position: [3.0422, 4.16381, -25.7967],
    quaternion: [-0.031344, 0.928216, 0.080392, 0.361896],
    fov: 37.85,
  },
};
for (let i in wh) {
  const e = wh[i];
  (e.position = new Fi(...e.position)),
    (e.quaternion = new Ui(...e.quaternion));
}
class Sh extends _h {
  created() {
    const e = this.base.registerState("home", {
        needsUpdate: !1,
        onEnter: Th,
        onUpdate: Ah,
        onUpdateAbsolute: Ph,
        leave: Ch,
      }),
      t = wh;
    Nc.stores.desktopInfluence.watchImmediate((i) => {
      (e.needsUpdate = e.isUsed),
        (t.from.fov = h(t.fromMobile.fov, t.fromDesktop.fov, i)),
        t.from.position.lerpVectors(
          t.fromMobile.position,
          t.fromDesktop.position,
          i
        ),
        t.from.quaternion.slerpQuaternions(
          t.fromMobile.quaternion,
          t.fromDesktop.quaternion,
          i
        ),
        (t.to.fov = h(t.toMobile.fov, t.toDesktop.fov, i)),
        t.to.position.lerpVectors(t.toMobile.position, t.toDesktop.position, i),
        t.to.quaternion.slerpQuaternions(
          t.toMobile.quaternion,
          t.toDesktop.quaternion,
          i
        ),
        t.toEnd.position.lerpVectors(
          t.toEndMobile.position,
          t.toEndDesktop.position,
          i
        ),
        t.toEnd.quaternion.slerpQuaternions(
          t.toEndMobile.quaternion,
          t.toEndDesktop.quaternion,
          i
        );
    });
  }
}
function Th() {
  const e = this.states.home;
  e.camTween && (e.camTween = e.camTween.destroy()),
    e.endTween && (e.endTween = e.endTween.destroy()),
    (e.endProgress = 0),
    (e.mouseInfluence = 0),
    (e.dollyProgress = 0),
    (e.mouseX = 0),
    (e.mouseY = 0),
    (e.ang = 0),
    (e.camTween = a({
      target: e,
      property: "dollyProgress",
      easing: "outQuart",
      from: 0,
      to: 1,
      duration: 3e3,
    }));
}
const Eh = new Ui();
function Ah() {
  const e = this.states.home,
    t = Nc.time.stableDt,
    i = Nc.app.$controls.touch;
  (e.isUsed &&
    e.mouseInfluence <= 0 &&
    e.dollyProgress >= 1 &&
    !e.needsUpdate) ||
    ((e.mouseInfluence = u(
      e.mouseInfluence,
      !e.isUsed || i.useTouch ? 0 : 0.2,
      0.1,
      t,
      0.001
    )),
    (e.needsUpdate = !1),
    e.isUsed &&
      (e.camTween && e.camTween.update(t),
      e.endTween && e.endTween.update(t),
      (this.base.fov = 40),
      this.base.position.lerpVectors(
        wh.from.position,
        wh.to.position,
        e.dollyProgress
      ),
      Eh.slerpQuaternions(
        wh.from.quaternion,
        wh.to.quaternion,
        e.dollyProgress
      ),
      this.base.quaternion.slerpQuaternions(
        Eh,
        wh.toEnd.quaternion,
        e.endProgress
      )));
}
function Ch() {
  const e = this.states.home;
  e.endTween && (e.endTween = e.endTween.destroy()),
    (e.endProgress = 0),
    (e.endTween = a({
      target: e,
      property: "endProgress",
      easing: "inExpo",
      from: 0,
      to: 1,
      duration: 600,
    }));
}
function Ph() {
  const e = this.states.home,
    t = Nc.time.elapsed,
    i = Nc.time.stableDt,
    n = Nc.app.$controls.touch;
  if (e.isUsed && e.mouseInfluence > 0) {
    const r = e.mouseInfluence * e.dollyProgress,
      s = n.normalizePos.x * r,
      a = n.normalizePos.y * r * 2,
      o = e.mouseX;
    let l = (e.mouseX = d(e.mouseX, s, 0.1, i)),
      c = (e.mouseY = d(e.mouseY, a, 0.1, i));
    const h = 3,
      u = 0.25 * r;
    (l += 0.2 * Math.sin(4e-4 * t * h) * u),
      (c += 0.3 * Math.cos(4e-4 * t * h) * u),
      (e.ang = d(e.ang, 0.5 * (l - o), 0.2, i)),
      (this.base.position.x += 0.1 * l),
      (this.base.position.y += 0.1 * c),
      (this.base.rotation.y += 0.1 * l),
      this.base.rotateZ(e.ang);
  }
}
const Lh = {
  from: {
    position: [7.34832, 8.28059, 4.30398],
    quaternion: [-0.227594, 0.40983, 0.106371, 0.876884],
    fov: 39.55,
  },
  to: {
    position: [-0, 10.12617, 5.89039],
    quaternion: [-0.269759, -0, -0, 0.962922],
    fov: 39,
  },
  toMobile: {
    position: [-0, 12.64792, 5.28001],
    quaternion: [-0.305695, -0, -0, 0.952129],
    fov: 39.55,
  },
  toDesktop: {
    position: [-0, 10.12617, 5.89039],
    quaternion: [-0.269759, -0, -0, 0.962922],
    fov: 39,
  },
};
for (let i in Lh) {
  const e = Lh[i];
  (e.position = new Fi(...e.position)),
    (e.quaternion = new Ui(...e.quaternion));
}
p(m.outSwift);
class Rh extends _h {
  created() {
    const e = this.base;
    this.lerpedPlayerZ = 0;
    const t = e.registerState("game", {
        needsUpdate: !1,
        onEnter: Dh,
        onUpdate: Oh,
        onUpdateAbsolute: Nh,
        reset: Ih,
      }),
      i = Lh;
    Nc.stores.desktopInfluence.watchImmediate((e) => {
      (t.needsUpdate = t.isUsed),
        (i.to.fov = h(i.toMobile.fov, i.toDesktop.fov, e)),
        i.to.position.lerpVectors(i.toMobile.position, i.toDesktop.position, e),
        i.to.quaternion.slerpQuaternions(
          i.toMobile.quaternion,
          i.toDesktop.quaternion,
          e
        );
    });
  }
}
function Dh() {
  const e = this.states.game;
  (this.temp = new Fi()),
    (this.lerpedPlayerZ = this.webgl.player.base.position.z),
    e.camTween && (e.camTween = e.camTween.destroy()),
    (e.mouseInfluence = 0),
    (e.dollyProgress = 0),
    (e.mouseX = 0),
    (e.mouseY = 0),
    (e.ang = 0),
    (e.camTween = a({
      target: e,
      property: "dollyProgress",
      easing: "outExpo",
      from: 0,
      to: 1,
      duration: 1400,
    })),
    (this.dist = 0);
}
function Ih() {
  this.lerpedPlayerZ = this.webgl.player.base.position.z;
}
function Oh() {
  const e = this.states.game,
    t = Nc.time.stableDt,
    i = Nc.app.$controls.touch;
  if (!e.isUsed && !e.needsUpdate) return;
  if (
    ((e.mouseInfluence = u(
      e.mouseInfluence,
      !e.isUsed || i.useTouch ? 0 : 1,
      0.1,
      t,
      0.001
    )),
    (e.needsUpdate = !1),
    !e.isUsed)
  )
    return;
  e.camTween && e.camTween.update(t), (this.base.fov = 39);
  const n = e.dollyProgress;
  this.temp.lerpVectors(Lh.from.position, Lh.to.position, n),
    this.base.position.copy(this.temp),
    (this.lerpedPlayerZ = l(
      this.lerpedPlayerZ,
      this.webgl.player.base.position.z,
      0.1
    )),
    (this.base.position.z += Math.min(
      this.webgl.player.base.position.z + 11,
      this.lerpedPlayerZ
    )),
    (this.base.position.z += 4),
    this.base.quaternion.slerpQuaternions(
      Lh.from.quaternion,
      Lh.to.quaternion,
      n
    );
}
function Nh() {}
const zh = {
  from: {
    position: [-2.12945, 2.23066, -17.75064],
    quaternion: [-0.008346, 0.98252, -0.045475, -0.180326],
    fov: 39.55,
  },
  to: {
    position: [-6.55544, 1.90423, -19.22179],
    quaternion: [0.142144, -0.576589, 0.102706, 0.797992],
    fov: 39.55,
  },
  toMain: {
    position: [-6.55544, 1.90423, -19.22179],
    quaternion: [0.142144, -0.576589, 0.102706, 0.797992],
    fov: 39.55,
  },
  toEnd: {
    position: [-2.82502, 3.99278, -24.84256],
    quaternion: [0.055196, 0.871333, 0.100817, -0.477041],
    fov: 37.85,
  },
};
for (let i in zh) {
  const e = zh[i];
  (e.position = new Fi(...e.position)),
    (e.quaternion = new Ui(...e.quaternion));
}
class Uh extends _h {
  created() {
    this.base.registerState("end", {
      needsUpdate: !1,
      onEnter: Fh,
      onUpdate: Bh,
      leave: kh,
      onUpdateAbsolute: Vh,
    });
  }
}
function Fh() {
  const e = this.states.end;
  e.camTween && (e.camTween = e.camTween.destroy()),
    e.endTween && (e.endTween = e.endTween.destroy()),
    (e.mouseInfluence = 0),
    (e.dollyProgress = 0),
    (e.endProgress = 0),
    (e.mouseX = 0),
    (e.mouseY = 0),
    (e.ang = 0),
    (e.zOffset = 0),
    (e.camTween = a({
      target: e,
      property: "dollyProgress",
      easing: "outSwift",
      delay: 1500,
      from: 0,
      to: 1,
      duration: 3e3,
    }));
}
function kh() {
  const e = this.states.end;
  e.endTween && (e.endTween = e.endTween.destroy()),
    (e.endProgress = 0),
    (e.endTween = a({
      target: e,
      property: "endProgress",
      easing: "inExpo",
      from: 0,
      to: 1,
      duration: 600,
    }));
}
function Bh() {
  const e = this.states.end,
    t = Nc.time.stableDt,
    i = Nc.app.$controls.touch;
  (e.isUsed &&
    e.mouseInfluence <= 0 &&
    e.dollyProgress >= 1 &&
    !e.needsUpdate) ||
    ((e.mouseInfluence = u(
      e.mouseInfluence,
      !e.isUsed || i.useTouch ? 0 : 0.2,
      0.1,
      t,
      0.001
    )),
    (e.needsUpdate = !1),
    e.isUsed &&
      (e.camTween && e.camTween.update(t),
      e.endTween && e.endTween.update(t),
      (this.base.fov = 40),
      zh.to.position.lerpVectors(
        zh.toMain.position,
        zh.toEnd.position,
        e.endProgress
      ),
      this.base.position.lerpVectors(
        zh.from.position,
        zh.to.position,
        e.dollyProgress
      ),
      (e.zOffset -= (t / 1e3) * 0.7 * (1 - e.dollyProgress)),
      (this.base.position.z += e.zOffset),
      zh.to.quaternion.slerpQuaternions(
        zh.toMain.quaternion,
        zh.toEnd.quaternion,
        e.endProgress
      ),
      this.base.quaternion.slerpQuaternions(
        zh.from.quaternion,
        zh.to.quaternion,
        e.dollyProgress
      )));
}
function Vh() {
  const e = this.states.end,
    t = Nc.time.elapsed,
    i = Nc.time.stableDt,
    n = Nc.app.$controls.touch;
  if (e.isUsed && e.mouseInfluence > 0) {
    const r = e.mouseInfluence * e.dollyProgress,
      s = n.normalizePos.x * r,
      a = n.normalizePos.y * r * 2,
      o = e.mouseX;
    let l = (e.mouseX = d(e.mouseX, s, 0.1, i)),
      c = (e.mouseY = d(e.mouseY, a, 0.1, i));
    const h = 3,
      u = 0.25 * r;
    (l += 0.2 * Math.sin(4e-4 * t * h) * u),
      (c += 0.3 * Math.cos(4e-4 * t * h) * u),
      (e.ang = d(e.ang, 0.5 * (l - o), 0.2, i)),
      (this.base.position.x += 0.1 * l),
      (this.base.position.y += 0.1 * c),
      (this.base.rotation.y += 0.1 * l),
      this.base.rotateZ(e.ang);
  }
}
const Hh = () => {};
class Gh extends Gc {
  get mixins() {
    return [yh, Sh, Uh, Rh];
  }
  init() {
    (this.base = this.cam = new Br()),
      (this.base.near = 0.2),
      (this.base.far = 1e3),
      (this.prevFov = this.base.fov),
      (this.accumPosition = new Fi()),
      (this.accumQuaternion = new Ui()),
      (this.previousGameState = 0);
  }
  registerState(e, t = {}) {
    this.states || (this.states = {}), (this.states[e] = t), (t.id = e);
    for (let i in t) "function" == typeof t[i] && (t[i] = t[i].bind(this));
    return (
      t.onEnter || (t.onEnter = Hh),
      t.onUpdate || (t.onUpdate = Hh),
      t.onUpdateAbsolute || (t.onUpdateAbsolute = Hh),
      t.onLeave || (t.onLeave = Hh),
      (t.isUsed = !1),
      (t.prevTime = -1),
      (t.time = 0),
      (t.hasReached = (e) => t.prevTime < e && t.time >= e),
      t
    );
  }
  setState(e, { force: t } = {}) {
    if (!this.states[e]) return;
    if (this.state === this.states[e] && !t) return;
    const i = this.state;
    i && (i.onLeave(), (i.isUsed = !1)),
      (this.state = this.states[e]),
      (this.state.isUsed = !0),
      (this.state.prevTime = -1),
      (this.state.time = 0),
      this.state.onEnter(i);
  }
  update() {
    const e = this.webgl.time.dt;
    this.prevFov !== this.base.fov &&
      (this.base.updateProjectionMatrix(), (this.prevFov = this.base.fov)),
      this.base.position.copy(this.accumPosition),
      this.base.quaternion.copy(this.accumQuaternion);
    for (let t in this.states) {
      const i = this.states[t];
      (i.prevTime = i.time), (i.time += e), i.onUpdate(e);
    }
    this.accumPosition.copy(this.base.position),
      this.accumQuaternion.copy(this.base.quaternion);
    for (let t in this.states) this.states[t].onUpdateAbsolute(e);
    this.base.updateProjectionMatrix(), this.updateShake();
  }
}
const Wh = sh(
    "varying vec2 vUv;varying vec2 vAOuv;uniform vec3 playerPos;uniform vec3 playerEasedPos;uniform sampler2D diffuseMap;uniform sampler2D aoMap;uniform vec3 bunnyData;varying vec3 vPos;uniform float time;uniform vec3 color1;uniform vec3 color2;void main(){vec4 diffuse=texture2D(diffuseMap,vUv);vec4 ao=texture2D(aoMap,vec2(vAOuv.x,vAOuv.y));float dist=distance(playerPos.z,playerEasedPos.z);vec3 color=diffuse.xyz*ao.x;vec3 speedColor=(color*vec3(.2,0.5,0.7)*dist)*.4;float linePos=.71;float lineHeight=.0;float lineStep=.06;float bottom=linePos-lineStep;float top=linePos+lineStep;float progress=((sin(vUv.y*3.1415+time/200.))+1.)/2.;float lines=progress;lines*=smoothstep(bottom-lineHeight,bottom,vPos.y)*1.-(smoothstep(top,top+lineHeight,vPos.y));lines*=(step(.5,vUv.x));lines*=1.-(step(.55,vUv.x));float linesTop=progress;linePos=.0;lineStep=.06;bottom=linePos-lineStep;top=linePos+lineStep;linesTop*=smoothstep(bottom-lineHeight,bottom,vPos.x)*1.-(smoothstep(top,top+lineHeight,vPos.x));linesTop*=(step(.5,vUv.x));linesTop*=1.-(step(.55,vUv.x));float glowLineTop=smoothstep(-.3,linePos,vPos.x)*1.-(smoothstep(linePos,.3,vPos.x));glowLineTop+=smoothstep(.71-.3,.71,vPos.y)*1.-(smoothstep(.71,.71+.3,vPos.y));glowLineTop*=(step(.40,vUv.x));glowLineTop*=1.-(step(.5,vUv.x));glowLineTop*=.2;float backGlow=1.-distance(vPos.xy,vec2(0.,.7));backGlow=smoothstep(.64,1.,backGlow);backGlow*=((sin(time/200.+3.))+1.)/2.+.4;float sideGlow=1.-distance(vPos.zy,vec2(0.,.7));sideGlow=smoothstep(.64,1.,sideGlow);sideGlow*=((sin(time/200.+1.))+1.)/2.+.4;vec3 blue=vec3(0.3,0.5,0.7);vec3 red=vec3(0.9,0.4,0.3);float lineVertical=(step(.5,vUv.x));lineVertical*=1.-(step(.55,vUv.x));vec3 col=mix(color1,color1+.5,1.-vUv.y);vec3 linesColor=mix(color,color2,step(.6,vUv.x)+(lineVertical*(1.-bunnyData.x)));linesColor=mix(linesColor,mix(col,color2,linesTop+lines),lineVertical*bunnyData.x);color=linesColor;color=mix(color,mix(color1*1.5,color2*1.8,((sin(time/200.+3.1415/2.))+1.)/2.),glowLineTop*bunnyData.x);color=mix(color,color2*1.3,backGlow*bunnyData.x*step(-vPos.z,0.));color=mix(color,color2*1.3,sideGlow*bunnyData.x);gl_FragColor=vec4(color+speedColor,1.);}",
    "fragmentShader"
  ),
  jh = sh(
    "attribute vec2 uv2;varying vec2 vUv;varying vec2 vAOuv;varying vec3 vPos;void main(){vUv=uv;vAOuv=uv2;vPos=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
    "vertexShader"
  );
class qh extends Fr {
  constructor(e) {
    super(e),
      (this.uniforms = {
        ...ih,
        diffuseMap: { value: Nc.textures.diffuse },
        aoMap: { value: Nc.textures.aoMap },
        bunnyData: { value: new Fi() },
        color1: { value: new Ei(4881869) },
        color2: { value: new Ei(5759440) },
      }),
      (this.isBunnyMaterial = !0),
      Wh.use(this),
      jh.use(this);
  }
}
const Xh = sh(
    "varying vec2 vUv;uniform float time;uniform sampler2D map;uniform vec3 mainColor;uniform vec3 secondColor;void main(){vec4 data=texture2D(map,vUv);vec3 color=mainColor*data.y;color+=secondColor*data.z;gl_FragColor=vec4(color,1.);}",
    "fragmentShader"
  ),
  Yh = sh(
    "attribute vec2 uv2;uniform vec4 texCoords;varying vec2 vUv;varying vec3 vPos;void main(){vUv=uv;vUv=vec2(vUv.x,vUv.y)*texCoords.zw+texCoords.xy;vPos=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
    "vertexShader"
  );
class Kh extends Fr {
  constructor(e) {
    super(e),
      (this.uniforms = {
        ...ih,
        map: { value: Nc.textures.bunnyFace },
        texCoords: { value: [] },
        mainColor: { value: new Ei(4770290) },
        secondColor: { value: new Ei(2786002) },
      }),
      (this.blending = Y),
      Xh.use(this),
      Yh.use(this);
  }
  async setCoords(e = 0) {
    const t = Nc.atlases.bunnyFace.sprites.BunnyFace[e].texCoords;
    this.uniforms.texCoords.value = [t[0], 1 - (t[1] + t[3]), t[2], t[3]];
  }
}
const Zh = function () {};
class Jh {
  constructor({
    atlas: e,
    id: t,
    group: i,
    sequence: n,
    loop: r,
    autoplay: s,
    frame: a,
    onUpdate: o,
    onEnd: l,
    onEndOnce: c,
    frameDuration: h,
    category: u,
  }) {
    (this.frames = []),
      (this.onUpdate = o || Zh),
      (this.onEndOnce = c || Zh),
      (this.onEnd = l || Zh),
      (this.id = void 0 !== t ? t : i + "/" + n),
      (this.group = ""),
      (this.sequence = ""),
      (this.loop = !!r),
      (this.autoplay = !!s),
      (this.frame = a || 0),
      (this.frameCount = 0),
      (this.frameDuration = h || 48),
      (this.frameTimer = 60 * Math.random()),
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
    e && (this.sprites = e.sprites || e);
  }
  change({
    id: e = "circle",
    group: t,
    sequence: i,
    frame: n,
    frameDuration: r,
    autoplay: s,
    loop: a,
  }) {
    if (this.sprites[e]) {
      if (void 0 !== e) {
        this.id = e;
        const t = this.id.split("/");
        (this.sequence = t.pop()), (this.group = t.join("/"));
      } else
        void 0 !== i &&
          (void 0 !== t && (this.group = t),
          (this.sequence = i),
          (this.id = this.group + "/" + this.sequence));
      (this.frames = this.sprites[this.id]),
        (this.frameCount = this.frames.length),
        (this.currentFrameIndex = Math.min(n || 0, this.frameCount - 1)),
        (this.frame = this.frames[this.currentFrameIndex]),
        (this.loop = !!a),
        (this.autoplay = !!s),
        (this.frameDuration = r || 48),
        (this.paused = !this.autoplay),
        this.frameCount < 2 ? this.end() : (this.ended = !1),
        this.onUpdate(this.frame);
    }
  }
  end() {
    (this.ended = !0),
      this.onEndOnce(this.frame),
      (this.onEndOnce = Zh),
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
    if (e >= this.frameCount) {
      if (!this.loop) return void this.end();
      e = 0;
    }
    e !== this.currentFrameIndex &&
      ((this.currentFrameIndex = e),
      (this.frame = this.frames[this.currentFrameIndex]),
      !this.loop && e + 1 >= this.frameCount && this.end());
  }
  previousFrame() {
    let e = this.currentFrameIndex - 1;
    if (e < 0) {
      if (!this.loop) return void this.end();
      e = this.frameCount;
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
const Qh = new Bn();
let $h;
class eu {
  constructor(e) {
    $h || ($h = Oc()),
      (this.isComponent = !0),
      e.batcher &&
        ((this.batcher =
          "string" == typeof e.batcher
            ? $h.particles.batchers[e.batcher]
            : e.batcher),
        (e.atlas = this.batcher.atlas),
        (e.batcher = null)),
      (this.dummy = Qh),
      (this.position = new Fi()),
      (this.scale = new di(1, 1)),
      (this.quaternion = new Ui()),
      (this.color = new Ei(16777215)),
      e.rotation
        ? ((this.useEuler = !0),
          (this.rotation = new Tn()),
          this.rotation.copy(e.rotation))
        : e.useEuler && ((this.useEuler = !0), (this.rotation = new Tn())),
      (this.alpha = null != e.alpha ? e.alpha : 1),
      (this.initialAlpha = this.alpha),
      (this.visible = !0),
      (this.parent = e.parent || null),
      (this.textured = !!e.textured),
      (this.billboard = !!e.billboard),
      (this.angle = e.angle || 0),
      e.position && this.position.copy(e.position),
      null != e.color &&
        ("number" == typeof e.color
          ? this.color.set(e.color)
          : this.color.copy(e.color)),
      e.scale &&
        ("number" == typeof e.scale
          ? this.scale.setScalar(e.scale)
          : this.scale.copy(e.scale)),
      e.quaternion && this.quaternion.copy(e.quaternion),
      (this.sprite = new Jh({ ...e, id: e.sprite || e.id })),
      this.batcher && this.batcher.addInstance(this),
      this.init(e),
      this.sprite.update(1);
  }
  init() {}
  update() {
    const e = $h.time.stableDt;
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
const tu = p(m.outQuart);
class iu extends Bc {
  init() {
    (this.player = this.props.player),
      (this.base = new Bn()),
      (this.material = new qh()),
      (this.body = new Dr(this.webgl.geometries.bunny.BODY, this.material)),
      this.body.position.copy(this.webgl.geometries.bunny.BODY.basePos),
      (this.body.bunnyData = new Fi(1, 0, 0)),
      this.addObject3D(this.body),
      (this.earLeftContainer = new Bn()),
      this.earLeftContainer.position.copy(
        this.webgl.geometries.bunny.LEFT.basePos
      ),
      this.earLeftContainer.rotation.copy(
        this.webgl.geometries.bunny.LEFT.baseRot
      ),
      this.addObject3D(this.earLeftContainer),
      (this.earLeft = new Dr(this.webgl.geometries.bunny.LEFT, this.material)),
      (this.earLeft.bunnyData = new Fi(0, 0, 0)),
      this.earLeftContainer.add(this.earLeft),
      (this.earRightContainer = new Bn()),
      this.earRightContainer.position.copy(
        this.webgl.geometries.bunny.RIGHT.basePos
      ),
      this.earRightContainer.rotation.copy(
        this.webgl.geometries.bunny.RIGHT.baseRot
      ),
      (this.earRightContainer.rotation.z = -this.earRightContainer.rotation.z),
      this.addObject3D(this.earRightContainer),
      (this.earRight = new Dr(this.webgl.geometries.bunny.LEFT, this.material)),
      (this.earRight.bunnyData = new Fi(0, 0, 0)),
      this.earRightContainer.add(this.earRight),
      this.base.scale.set(0.5, 0.5, 0.5),
      (this.earLeftSpring = s()),
      this.earLeftSpring.setTension(0.1),
      this.earLeftSpring.setFriction(0.15),
      (this.earRightSpring = s()),
      this.earRightSpring.setTension(0.11),
      this.earRightSpring.setFriction(0.15),
      (this.bodySpring = s()),
      this.bodySpring.setTension(0.2),
      this.bodySpring.setFriction(0.3),
      (this.halo = new eu({
        batcher: "noDepthEmissive",
        sprite: "flash",
        angle: 0,
        alpha: 1,
        scale: new di(20, 50),
        position: new Fi(0, 2, -10),
        billboard: !0,
        sortable: !0,
        color: 6710835,
      })),
      (this.halo2 = new eu({
        batcher: "noDepthEmissive",
        sprite: "flash",
        angle: 0,
        alpha: 0.1,
        scale: new di(4, 10),
        position: new Fi(0, 2, -10),
        billboard: !0,
        sortable: !0,
        color: 6710835,
      })),
      (this.screen = new Dr(this.webgl.geometries.bunny.SCREEN, new Kh())),
      (this.screen.position.z = -0.08),
      (this.screen.position.y = 0.7),
      this.base.add(this.screen),
      (this.haloBaseAlpha = 0),
      (this.haloBaseAlphaEased = 0);
  }
  async blinkScreen(e = 0) {
    this.blinkScreenRunning && (this.blinkScreenCancelled = !0),
      (this.blinkScreenRunning = !0),
      (this.screen.visible = !1),
      this.screen.material.setCoords(e),
      (this.earLeftSpring.value =
        r.randomFloat(0.15, 0.3) * Math.sign(r.tossCoin() - 0.5)),
      (this.earRightSpring.value =
        r.randomFloat(0.15, 0.3) * Math.sign(r.tossCoin() - 0.5)),
      (this.bodySpring.value = r.randomFloat(0.1, 0.15));
    let t = Xc.main;
    3 == e && (t = Xc.pink),
      2 == e && (t = Xc.yellow),
      1 == e && (t = Xc.lose),
      this.screen.material.uniforms.mainColor.value.setHex(t.screenColor),
      this.material.uniforms.color1.value.setHex(t.lineMainColor),
      this.material.uniforms.color2.value.setHex(t.lineGlowColor),
      await c(30),
      (this.screen.visible = !0),
      await c(20),
      (this.screen.visible = !1),
      await c(30),
      (this.screen.visible = !0),
      await c(10),
      (this.screen.visible = !1),
      await c(20),
      (this.screen.visible = !0),
      (this.blinkScreenCancelled = !1),
      (this.blinkScreenRunning = !1);
  }
  afterInit() {}
  prepareJump() {}
  update() {
    const e = this.webgl.time.stableDt;
    this.earLeftSpring.update(e),
      this.earRightSpring.update(e),
      this.bodySpring.update(e),
      this.earLeftSpring.setTarget(this.player.speed),
      this.earRightSpring.setTarget(this.player.speed),
      this.bodySpring.setTarget(this.player.speed),
      this.webgl.stores.readyJump
        ? (this.haloBaseAlpha += 0.08)
        : (this.haloBaseAlpha = 0);
    const t = tu(f(this.haloBaseAlpha, 0, 1));
    (this.haloBaseAlphaEased = l(this.haloBaseAlphaEased, t, 0.1)),
      (this.earLeft.rotation.x = Math.min(this.earLeftSpring.value, 1)),
      (this.earRight.rotation.x = Math.min(this.earRightSpring.value, 1)),
      (this.base.scale.z = Math.max(
        0.5 + 1.4 * this.bodySpring.value + 0.07 * this.haloBaseAlphaEased,
        0.1
      )),
      (this.base.scale.y = 0.5 - this.bodySpring.value / 5),
      (this.base.scale.x =
        0.5 - this.bodySpring.value / 14 - 0.02 * this.haloBaseAlphaEased),
      this.halo.position.copy(this.player.base.position),
      this.halo.position.add(this.base.position),
      (this.halo.position.z += 1),
      (this.halo.position.y += 0.3),
      this.halo2.position.copy(this.player.base.position),
      this.halo2.position.add(this.base.position),
      (this.halo2.position.z += 1),
      (this.halo2.position.y += 0.3);
    let i = ih.playerPos.value.distanceTo(ih.playerEasedPos.value);
    (this.halo.alpha = f(i, 0.5 * this.haloBaseAlphaEased, 1)),
      (this.halo2.alpa = this.halo.alpha);
  }
}
new Ei(16711680), new Ei(65280);
const nu = p(m.outQuart);
class ru extends Bc {
  init() {
    (this.webgl.player = this),
      (this.base = new Bn()),
      (this.body = this.add(iu, { player: this })),
      (this.base.position.y += 2),
      (this.currentBlockIndex = Jc),
      (this.raycaster = new Ac()),
      (this.raycaster.far = 20),
      (this.raycasterOrigin = new Fi()),
      (this.raycastPos = new Fi()),
      (this.raycasterDirection = new Fi(0, 0, -1)),
      (this.jumpProgress = 0),
      (this.pressedProgress = 0),
      (this.pressedProgressEased = 0);
  }
  initDebug() {
    const e = new nl({ color: 255 }),
      t = [];
    t.push(new Fi(-0, 0.5, 0)), t.push(new Fi(0, 0.5, -10));
    const i = new mr().setFromPoints(t);
    (this.raycasterHelperLeft = new cl(i, e)),
      (this.raycasterHelperRight = new cl(i, e.clone()));
  }
  afterInit() {
    this.reset();
  }
  jump(e = 10) {
    (this.currentBlockIndex += e),
      this.camTween && this.camTween.destroy(),
      (this.camTween = a({
        target: this,
        property: "jumpProgress",
        from: 0,
        easing: "linear",
        to: 1,
        duration: Zc,
      })),
      this.jumpPosition.copy(this.base.position),
      (this.jumpStart = !0),
      (this.jumpTiming = 0);
  }
  getLinePos(e) {
    return -e * Yc.depth;
  }
  setToLine(e = 0) {
    this.base.position.z = this.getLinePos(e);
  }
  reset() {
    (this.currentBlockIndex = Jc),
      (this.webgl.state.current && "Game" === this.webgl.state.current.id) ||
        (this.currentBlockIndex = 6),
      (this.collided = !1),
      this.setToLine(this.currentBlockIndex),
      this.raycasterOrigin.copy(this.base.position),
      ih.playerPos.value.copy(this.base.position),
      (this.jumpPosition = new Fi().copy(this.base.position)),
      (this.jumpStart = !1),
      this.setNextJumpPos();
  }
  setNextJumpPos() {
    ih.nextJumpPos.value != -(this.currentBlockIndex + Kc) * Yc.depth &&
      (ih.nextJumpPos.value = -(this.currentBlockIndex + Kc) * Yc.depth);
  }
  isInteresecting(e) {
    this.raycaster.set(this.raycasterOrigin, this.raycasterDirection);
    let t = [];
    const i = this.webgl.scene.obstacles;
    for (let a = 0; a < i.obstacles.length; a++)
      t.push(...i.obstacles[a].rocks);
    const n = this.raycaster.intersectObjects(t);
    let r = !1,
      s = null;
    for (let a = 0; a < n.length; a++)
      (s = n[a].distance),
        s < this.raycasterOrigin.distanceTo(this.raycastPos) + 0.5 &&
          (r = n[a]);
    return r;
  }
  update() {
    ih.playerPos.value.copy(this.base.position),
      (ih.playerEasedPos.value.y = ih.playerPos.value.y),
      (ih.playerEasedPos.value.z = l(
        ih.playerEasedPos.value.z,
        ih.playerPos.value.z,
        0.15
      ));
    const e = this.webgl.time.stableDt;
    this.camTween && this.camTween.update(e),
      this.collided ||
        (this.base.position.z = l(
          this.jumpPosition.z,
          this.getLinePos(this.currentBlockIndex),
          this.jumpProgress
        )),
      this.base.position.z < this.getLinePos(this.currentBlockIndex) + 2 &&
        this.setNextJumpPos(),
      (this.raycasterOrigin.y = 2),
      (this.raycasterOrigin.y += 0.55),
      (this.raycasterOrigin.x = 0.5),
      this.raycastPos.copy(this.base.position),
      (this.raycastPos.y = 2),
      (this.raycastPos.y += 0.55),
      (this.raycastPos.x = 0.5);
    let t = this.isInteresecting(this.raycasterHelperRight);
    (this.raycasterOrigin.x = -0.5),
      (this.raycastPos.x = -0.5),
      (this.isInteresecting(this.raycasterHelperLeft) || t) &&
        ((this.collided = !0), (this.base.position.z = this.raycasterOrigin.z)),
      (this.raycasterOrigin.x = 0),
      (this.raycasterOrigin.y = this.base.position.y),
      (this.speed = this.raycasterOrigin.distanceTo(this.base.position)),
      this.raycasterOrigin.copy(this.base.position),
      this.webgl.stores.readyJump
        ? (this.pressedProgress += 0.08)
        : (this.pressedProgress = 0);
    const i = nu(f(this.pressedProgress, 0, 1));
    (this.pressedProgressEased = l(this.pressedProgressEased, i, 0.1)),
      (this.base.position.y = 2 - 0.2 * this.pressedProgressEased);
  }
}
const su = sh(
    "#define PI 3.14159265359\nprecision lowp float;varying vec3 vPos;uniform float time;uniform vec3 color;uniform vec3 color2;uniform float darken;uniform sampler2D noise;void main(){vec3 c=mix(color,color2,smoothstep(0.8,-0.1,vPos.x));float nm=smoothstep(-280.,-190.,vPos.z);float t=time*0.0001;float na=texture2D(noise,vPos.xy*2.5+vec2(0.,t)).r;float nb=texture2D(noise,vPos.xy*2.+vec2(t*0.35+10.,0.)+na*0.2).r-.2;float n=nb*2.*nm;c=mix(color,color2,smoothstep(-20.,180.,vPos.z)*n);gl_FragColor=vec4(c*darken,1.);}",
    "fragmentShader"
  ),
  au = sh(
    "precision highp float;varying vec3 vPos;varying vec2 vUv;void main(){vec3 transformed=vec3(position);vec4 mvPosition=vec4(transformed,1.0);mvPosition=modelViewMatrix*mvPosition;gl_Position=projectionMatrix*mvPosition;vec4 worldPosition=modelMatrix*vec4(transformed,1.0);vPos=vec3(uv.x,uv.y,worldPosition.y);}",
    "vertexShader"
  );
let ou = null;
class lu extends Fr {
  constructor() {
    super(),
      (this.uniforms = {
        noise: { value: Nc.textures.noise },
        color: { value: new Ei(13690605).multiplyScalar(1) },
        color2: { value: new Ei(949147) },
        darken: { value: 1 },
        ...ih,
      }),
      su.use(this),
      au.use(this),
      (this.depthWrite = !1),
      (this.extensions = { derivatives: !0 }),
      (this.type = "RawShaderMaterial"),
      (this.isShaderMaterial = !0);
  }
}
lu.use = function () {
  return (ou = ou || new lu()), ou;
};
const cu = new bl(1, 32, 32).scale(-1, 1, 1);
class hu extends Bc {
  init() {
    const e = (this.mat = new lu());
    (this.base = new Dr(cu, e)),
      this.base.scale.setScalar(300),
      (this.base.rotation.y -= 0.5 * Math.PI),
      (this.base.manualMatrixUpdate = !0),
      (this.base.frustumCulled = !1),
      (this.base.renderOrder = 0);
  }
  update() {
    this.base.position.z = ih.playerPos.value.z;
  }
}
const uu = 0,
  du = 1,
  pu = [
    { type: uu, rocks: [{ row: 0 }, { row: 1 }] },
    { type: uu, rocks: [{ row: 0 }, { row: 3 }] },
    { type: uu, rocks: [{ row: 0 }, { row: 1 }, { row: 2 }, { row: 3 }] },
    {
      type: du,
      radius: 10,
      rocks: [{}, { reverse: !0, radius: 5 }, {}, { reverse: !0, radius: 5 }],
    },
    { type: du, radius: 10, rocks: [{}, {}, { reverse: !0, radius: 5 }] },
    { type: du, radius: 10, rocks: [{ reverse: !0, radius: 5 }] },
    {
      type: du,
      radius: 10,
      rocks: [
        { reverse: !0, radius: 5 },
        { reverse: !0, radius: 5 },
      ],
    },
  ];
class mu extends Bc {
  init() {
    (this.base = new Bn()),
      (this.base.position.y = 2.5),
      (this.rocks = []),
      (this.rockMaterial = new Tl({ map: this.webgl.textures.diffuse })),
      (this.speed = 4);
    for (let e = 0; e < 4; e++) {
      const e = new Dr(this.webgl.geometries.Obstacle_1, this.rockMaterial);
      this.rocks.push(e), this.addObject3D(e);
    }
    this.zPos = 0;
  }
  afterInit() {}
  updatePosition(e = 2) {
    this.reset();
    const t = r.randomInt(0, pu.length - 1);
    if (
      ((this.preset = { ...pu[t] }),
      (this.type = this.preset.type),
      (this.activeRocks = 0),
      this.type === uu)
    )
      for (let i = 0; i < this.preset.rocks.length; i++) {
        const e = this.preset.rocks[i];
        this.activeRocks++, (this.rocks[e.row].visible = !0);
      }
    else {
      this.preset.rotationSign = Math.sign(Math.random() - 0.5);
      for (let e = 0; e < this.preset.rocks.length; e++)
        this.activeRocks++, (this.rocks[e].visible = !0);
    }
    for (let i = 0; i < this.rocks.length; i++) {
      const e = this.rocks[i];
      e.scale.set(0.5, 0.5, 0.5),
        e.rotation.set(
          r.randomFloat(0, Math.PI / 8),
          r.randomFloat(0, 2 * Math.PI),
          r.randomFloat(0, Math.PI / 8)
        ),
        e.scale.multiplyScalar(r.randomFloat(3, 3)),
        (e.timeOffset =
          i % 2 == 0 ? 3 * Math.random() : this.rocks[i - 1].timeOffset),
        (e.rand = Math.random() * Math.PI * 2),
        (e.randSpeedX = r.randomFloat(0.4, 1)),
        (e.randSpeedY = r.randomFloat(0.4, 1)),
        (e.randSpeedZ = r.randomFloat(0.4, 1)),
        (e.geometry = this.webgl.geometries.Obstacle_1),
        e.visible ? (e.position.y = 0) : (e.position.y = 100);
    }
    (this.lineID = e), (this.time = 0), (this.base.position.z = -Yc.depth * e);
  }
  getRaycastables() {
    return this.rocks.filter((e) => e.visible);
  }
  kill() {
    (this.dead = !0), (this.preset = null);
  }
  reset() {
    for (let e = 0; e < this.rocks.length; e++) {
      this.rocks[e].visible = !1;
    }
  }
  update() {
    if (!this.webgl.state.current) return;
    if ("Game" !== this.webgl.state.current.id) return;
    const e = this.webgl.state.states.Game.data.difficulty.speed;
    if (null != this.type) {
      if (
        ((this.time += (this.webgl.time.stableDt / 1e3) * e), this.type === du)
      )
        for (let e = 0; e < this.activeRocks; e++) {
          const t = this.rocks[e];
          (t.position.x =
            4 *
            Math.cos(
              (e / this.activeRocks) * Math.PI * 2 +
                this.time * this.preset.rotationSign
            )),
            (t.position.z =
              4 *
              Math.sin(
                (e / this.activeRocks) * Math.PI * 2 +
                  this.time * this.preset.rotationSign
              ));
        }
      else if (this.type === uu)
        for (let e = 0; e < this.preset.rocks.length; e++) {
          const t = this.preset.rocks[e].row,
            i = this.rocks[t];
          0 === t
            ? (i.position.z = 5)
            : 1 === t
            ? (i.position.z = 3)
            : 2 === t
            ? (i.position.z = -3)
            : 3 === t && (i.position.z = -5),
            (i.position.x =
              Math.sign(g(t, 2) - 0.5) *
              Math.cos(this.time + i.timeOffset) *
              4);
        }
      for (let e = 0; e < this.rocks.length; e++) {
        const t = this.rocks[e];
        if (!t.visible) return;
        (t.rotation.y = Math.sin(this.time * t.randSpeedX + t.rand)),
          (t.rotation.x = Math.sin(this.time * t.randSpeedY + t.rand) / 4),
          (t.rotation.z = Math.sin(this.time * t.randSpeedZ + t.rand) / 4),
          (t.position.y = -0.2),
          (t.position.y += 0.8 * (1 - Math.cos(t.position.x / 3)));
      }
    }
  }
}
class fu extends Bc {
  init() {
    (this.base = new Bn()), (this.obstacles = []);
    for (let e = 0; e < 3; e++) {
      const e = this.add(mu);
      this.obstacles.push(e);
    }
    (this.base.visible = !1), this.reset();
  }
  afterInit() {}
  reset(e) {
    for (let t = 0; t < this.obstacles.length; t++)
      this.updateObstacle(t, Jc + Kc / 2 + Kc * t);
    (this.currentObstacleID = null), this.updateCurrentObstacle();
  }
  updateObstacle(e, t) {
    this.obstacles[e].updatePosition(t);
  }
  updateCurrentObstacle() {
    let e = null,
      t = null;
    for (let i = 0; i < this.obstacles.length; i++) {
      if (this.currentObstacleID === i) continue;
      const n = this.obstacles[i],
        r = n.base.position.z;
      (null !== e && e > r) ||
        ih.playerPos.value.z < r ||
        ((e = n.base.position.z), (t = i));
    }
    this.currentObstacleID = t;
  }
  update() {
    if (!this.webgl.state.current) return;
    if ("Game" !== this.webgl.state.current.id)
      return void (this.base.visible = !1);
    this.base.visible = !0;
    for (let i = 0; i < this.obstacles.length; i++) this.obstacles[i];
    if (null == this.currentObstacleID) return;
    const e = this.obstacles[this.currentObstacleID],
      t = ih.playerPos.value;
    e.base.position.z > t.z + (Kc / 2 - 1) * Yc.depth &&
      this.updateCurrentObstacle(),
      (nh.obstacles.obstacle_01.value.x = e.rocks[0].visible
        ? e.rocks[0].position.x
        : -100),
      (nh.obstacles.obstacle_01.value.y =
        e.rocks[0].position.z + e.base.position.z),
      (nh.obstacles.obstacle_01.value.z = e.rocks[1].visible
        ? e.rocks[1].position.x
        : -100),
      (nh.obstacles.obstacle_01.value.w =
        e.rocks[1].position.z + e.base.position.z),
      (nh.obstacles.obstacle_23.value.x = e.rocks[2].visible
        ? e.rocks[2].position.x
        : -100),
      (nh.obstacles.obstacle_23.value.y =
        e.rocks[2].position.z + e.base.position.z),
      (nh.obstacles.obstacle_23.value.z = e.rocks[3].visible
        ? e.rocks[3].position.x
        : -100),
      (nh.obstacles.obstacle_23.value.w =
        e.rocks[3].position.z + e.base.position.z);
    for (let i = 0; i < this.obstacles.length; i++) {
      const e = this.obstacles[i];
      e.base.position.z > t.z + Kc * Yc.depth &&
        e.updatePosition(e.lineID + 3 * Kc);
    }
  }
}
const gu = 1.3,
  vu = [
    [
      {
        position: new Fi(0, 0, 0).multiplyScalar(gu),
        rotation: new Fi(0, 0, 0).multiplyScalar(gu),
        scale: 0.52,
      },
    ],
    [
      {
        position: new Fi(0.1, -0.3, 0).multiplyScalar(gu),
        rotation: new Fi(0, 0, -0.5).multiplyScalar(gu),
        scale: 0.52,
      },
      {
        position: new Fi(-0.14, 0.2, 0).multiplyScalar(gu),
        rotation: new Fi(0, 0, 0.3).multiplyScalar(gu),
        scale: 0.312,
      },
    ],
    [
      {
        position: new Fi(0, 0, 0).multiplyScalar(1.2),
        rotation: new Fi(0, 0, 0).multiplyScalar(1.2),
        scale: 0.48,
      },
      {
        position: new Fi(-0.54, 0, 0).multiplyScalar(1.2),
        rotation: new Fi(0, 0, 0.4).multiplyScalar(1.2),
        scale: 0.36,
      },
      {
        position: new Fi(0.5, 0.2, 0).multiplyScalar(1.2),
        rotation: new Fi(0, 0, -0.6).multiplyScalar(1.2),
        scale: 0.288,
      },
    ],
  ],
  _u = new Fi(),
  xu = new Ei(16676362);
class yu extends Bc {
  init() {
    (this.base = new Bn()), (this.eggs = []);
    for (let e = 0; e < 3; e++) {
      const e = new Dr(this.webgl.geometries.Egg, this.webgl.materials.egg),
        t = { mesh: e, springPos: s(), springRot: s(), springScale: s() };
      this.eggs.push(t), this.base.add(e);
    }
    (this.base.visible = !1),
      (this.halo = new eu({
        batcher: "emissive",
        sprite: "flash",
        angle: 0,
        alpha: 0.8,
        scale: new di(20, 18),
        position: new Fi(0, 2, -10),
        billboard: !0,
        sortable: !0,
        color: 16676362,
      })),
      (this.basePos = new Fi(0, 2, 0)),
      (this.base.position.y = 2),
      this.reset(),
      (this.timer = 0);
  }
  reset() {
    (this.base.position.z = -Yc.depth * (Jc + Kc / 2)), (this.halo.alpha = 0);
  }
  pop() {
    const e = this.webgl.state.current.data.presetID;
    if (((this.halo.alpha = 0.8), null == e)) return;
    const t = vu[e];
    this.webgl.particles.emit("wave", {
      batcherID: "emissive",
      amount: 15,
      parent: this.base,
      position: _u.set(0, 0.5, 0),
      duration: r.randomFloat(350, 500),
      scale: new di(r.randomFloat(1, 1), r.randomFloat(1, 1)),
      alpha: 1.4,
      brightness: 0.22,
      color: xu,
    }),
      this.webgl.particles.emit("flash", {
        batcherID: "emissive",
        amount: 1,
        parent: this.base,
        position: _u.set(0, 0.5, 0.5),
        duration: r.randomFloat(350, 500),
        scale: new di(r.randomFloat(30, 30), r.randomFloat(30, 30)),
        alpha: 1.4,
        brightness: 0.22,
        color: xu,
      });
    for (let i = 0; i < this.eggs.length; i++) {
      const n = t[i];
      if (!n) continue;
      const s = this.eggs[i];
      (s.springScale.value = 0.5),
        s.springScale.setTarget(1),
        (s.springPos.value = 0),
        s.springPos.setTarget(1),
        (s.springRot.value = 0 == e ? -0.7 : 0),
        s.springRot.setTarget(n.rotation.z),
        s.springPos.setTension(r.randomFloat(0.1, 0.14)),
        s.springPos.setFriction(r.randomFloat(0.2, 0.3)),
        s.springRot.setTension(0.15),
        s.springRot.setFriction(0.1),
        s.springScale.setTension(r.randomFloat(0.04, 0.07)),
        s.springScale.setFriction(r.randomFloat(0.1, 0.15));
    }
  }
  updatePreset(e) {
    e ? this.presetID++ : this.presetID--,
      (this.presetID = f(this.presetID, 0, vu.length - 1));
  }
  update() {
    if (!this.webgl.state.current) return;
    if ("Game" !== this.webgl.state.current.id)
      return void (this.base.visible = !1);
    this.base.visible = !0;
    const e = this.webgl.time.stableDt;
    (this.base.position.y = this.basePos.y),
      (this.base.position.y += Math.sin(this.webgl.time.elapsed / 1e3) / 3),
      (this.timer += e),
      nh.egg.eggPosition.value.copy(this.base.position),
      this.webgl.player.base.position.z < this.base.position.z + 0.5 &&
        ((this.base.position.z -= Yc.depth * Kc),
        "Game" === this.webgl.state.current.id &&
          this.webgl.state.current.eggCollected());
    const t = this.webgl.state.current.data.presetID;
    if (null == t) {
      for (let e = 0; e < this.eggs.length; e++) {
        this.eggs[e].mesh.visible = !1;
      }
      return;
    }
    const i = vu[t];
    for (let n = 0; n < this.eggs.length; n++) {
      const t = i[n];
      if (!t) {
        this.eggs[n].mesh.visible = !1;
        continue;
      }
      const r = this.eggs[n];
      (r.mesh.visible = !0),
        r.springPos.update(e),
        r.springRot.update(e),
        r.springScale.update(e),
        r.mesh.scale.setScalar(t.scale * r.springScale.value),
        (r.mesh.position.x = t.position.x * r.springPos.value),
        (r.mesh.position.y = t.position.y * r.springPos.value),
        (r.mesh.position.z = t.position.z * r.springPos.value),
        (r.mesh.rotation.z = r.springRot.value);
    }
    this.halo.position.copy(this.base.position), (this.halo.position.z += -1);
  }
}
const bu = new Int8Array([-1, -1, 4, -1, -1, 4]);
new mr().setAttribute("position", new nr(bu, 2));
const Mu = [
    "precision highp float;",
    "attribute lowp vec2 position;",
    "varying highp vec2 vUv;",
    "void main() {",
    "vUv = position * 0.5 + 0.5;",
    "gl_Position =  vec4(position, 0., 1);",
    "}",
  ].join(""),
  wu = sh(
    "precision highp float;uniform float time;uniform vec2 res;uniform float radius;uniform vec3 color1;uniform vec3 color2;uniform vec3 color3;uniform sampler2D noiseTex;uniform float inProgress;uniform float outProgress;float sdRoundBox(in vec2 p,in vec2 b,in vec4 r){r.xy=(p.x>0.0)?r.xy:r.zw;r.x=(p.y>0.0)?r.x:r.y;vec2 q=abs(p)-b+r.x;return min(max(q.x,q.y),0.0)+length(max(q,0.0))-r.x;}void main(){vec2 mainUV=gl_FragCoord.xy/res;vec2 uv=(gl_FragCoord.xy/res-.5)*2.;uv.x*=res.x/res.y;float count=3.;vec2 grid=vec2(fract(uv.x*count),fract(uv.y*count));vec2 id=vec2(floor(count*uv.x)/count+1./6.,(ceil(count*(uv.y))/count+1.)/2.);float maxTime=2.5;float timeTest=mod(time/300.,maxTime*2.);float timer=inProgress;timer-=abs(id.x/2.);float timer2=outProgress;timer2-=abs(id.x/2.);vec2 noiseUV=((id+1.)/2.);float noise=texture2D(noiseTex,vec2(mod(noiseUV.x,1.),mod(noiseUV.y,1.))).x;float dist=1.-smoothstep(-1.+timer,0.+timer,id.y);float alpha=1.-smoothstep(.0,.01,sdRoundBox(grid-.5,vec2(dist)/2.,vec4((1.-smoothstep(0.98,1.,dist)))*.1));float dist2=1.-smoothstep(-1.+timer2,0.+timer2,id.y);alpha*=1.-smoothstep(.0,.01,sdRoundBox(grid-.5,vec2(1.-dist2)/2.,vec4((1.-smoothstep(0.98,1.,1.-dist2)))*.1));vec3 color=mix(color1,color2,step(.3,noise));color=mix(color,color3,step(.5,noise));color=mix(color,color1,smoothstep(.5,1.,dist*1.-dist2));color=mix(color,color+color*.3,mainUV.x);gl_FragColor=vec4(color,alpha);}",
    "fragmentShader"
  );
class Su extends Ml {
  constructor(e) {
    super(e),
      wu.use(this),
      (this.vertexShader = Mu),
      (this.transparent = !0),
      (this.uniforms = {
        ...ih,
        res: { value: new di() },
        color1: { value: new Ei(2786480) },
        color2: { value: new Ei(1471903) },
        color3: { value: new Ei(7713742) },
        noiseTex: { value: Nc.textures.noise },
        inProgress: { value: 0 },
        outProgress: { value: 0 },
      }),
      (this.depthTest = !1),
      (this.update = this.update.bind(this)),
      v.add(this.update, this);
  }
  async transitionIn() {
    var e, t;
    null == (e = null == this ? void 0 : this.outProgressTween) || e.destroy(),
      (this.uniforms.outProgress.value = 0),
      null == (t = null == this ? void 0 : this.inProgressTween) || t.destroy(),
      (this.uniforms.inProgress.value = 0),
      (this.inProgressTween = a({
        target: this.uniforms.inProgress,
        property: "value",
        easing: "inOutSine",
        from: 0,
        to: 3.5,
        duration: 1500,
      }));
  }
  async transitionOut() {
    var e;
    null == (e = null == this ? void 0 : this.outProgressTween) || e.destroy(),
      (this.uniforms.outProgress.value = 0),
      (this.outProgressTween = a({
        target: this.uniforms.outProgress,
        property: "value",
        easing: "inOutSine",
        from: 0,
        to: 3.5,
        duration: 1500,
      })),
      await this.outProgressTween.finished,
      (this.uniforms.inProgress.value = 0),
      (this.uniforms.outProgress.value = 0);
  }
  update() {
    this.outProgressTween && this.outProgressTween.update(Nc.time.stableDt),
      this.inProgressTween && this.inProgressTween.update(Nc.time.stableDt),
      (this.uniforms.res.value.x =
        Nc.viewport.size.value.x * Nc.viewport.pixelRatio.value),
      (this.uniforms.res.value.y =
        Nc.viewport.size.value.y * Nc.viewport.pixelRatio.value);
  }
}
const Tu = sh(
    "varying vec2 vUv;uniform sampler2D map;varying vec3 vPos;uniform float time;void main(){vec3 col=texture2D(map,vUv+vec2(.0,0.)).xyz;float wave=(smoothstep(.0+mod(time/1000.,2.4),.2+mod(time/1000.,2.4),2.5-vPos.y));wave=clamp(0.,1.,wave);gl_FragColor=vec4(col,1.);}",
    "fragmentShader"
  ),
  Eu = sh(
    "attribute vec2 uv2;varying vec2 vUv;varying vec2 vAOuv;varying vec3 vPos;void main(){vUv=uv;vAOuv=uv2;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);vPos=(position);}",
    "vertexShader"
  );
class Au extends Fr {
  constructor(e) {
    super(e),
      (this.uniforms = { ...ih, map: { value: Nc.textures.diffuse } }),
      Tu.use(this),
      Eu.use(this);
  }
}
const Cu = new Int8Array([-1, -1, 4, -1, -1, 4]),
  Pu = new mr();
Pu.setAttribute("position", new nr(Cu, 2));
class Lu extends jc {
  get mixins() {
    return ["debugCamera"];
  }
  init() {
    (this.camera = this.add(Gh)),
      (this.mainCamera = this.camera),
      this.camera.base.position.set(0, 0.2, 1).multiplyScalar(5),
      this.camera.base.lookAt(0, 0, 0),
      (this.base.background = new Ei(1052688)),
      (this.ambient = new fc(16777215, 1)),
      this.addObject3D(this.ambient),
      (this.directional = new mc(16777215, 0.1)),
      (this.directional.position.x = 1),
      (this.directional.position.z = 1),
      (this.directional.position.y = 1),
      this.addObject3D(this.directional),
      (this.point = new dc(16761133, 1.3, 7)),
      (this.point.position.x = 10.5),
      (this.point.position.z = 5),
      (this.point.position.y = 5),
      (this.background = this.add(hu)),
      (this.ground = this.add(vh)),
      (this.player = this.add(ru)),
      (this.obstacles = this.add(fu)),
      (this.egg = this.add(yu)),
      (this.homeEgg = new Dr(
        this.webgl.geometries.Egg,
        this.webgl.materials.egg
      )),
      this.homeEgg.scale.setScalar(0.6),
      (this.homeEgg.rotation.z = Math.PI / 6),
      this.addObject3D(this.homeEgg),
      (this.homeEgg.rotation.y -= 1.1 * Math.PI),
      (this.homeEgg.position.z -= 4 * Yc.depth),
      (this.homeEgg.position.x = 3 * Yc.width),
      (this.homeEgg.position.y = 0.4);
    const e = new Fi().copy(this.homeEgg.position);
    (e.x += 0.3),
      nh.egg.eggPosition.value.copy(e),
      (this.halo1 = new eu({
        batcher: "noDepthEmissive",
        sprite: "flash",
        angle: 0,
        alpha: 0.15,
        scale: new di(15, 15),
        position: new Fi(0.3, 1, 0).add(this.homeEgg.position),
        billboard: !0,
        sortable: !0,
        color: 16697668,
      })),
      (this.halo2 = new eu({
        batcher: "noDepthEmissive",
        sprite: "smoke",
        angle: 0,
        alpha: 0.2,
        scale: new di(15, 15),
        position: new Fi(0.3, 1, 0).add(this.homeEgg.position),
        billboard: !0,
        sortable: !0,
        color: 16697668,
      })),
      (Pu.boundingSphere = new an(new Fi(), 0)),
      (this.layer = new Dr(Pu, new Su())),
      (this.layer.frustumCulled = !1),
      (this.layer.renderOrder = 1e3),
      this.addObject3D(this.layer),
      (this.arrow = new Dr(this.webgl.geometries.Arrow, new Au())),
      this.arrow.scale.setScalar(0.7),
      (this.haloArrow = new eu({
        batcher: "emissive",
        sprite: "flash",
        angle: 0,
        alpha: 0,
        scale: new di(15, 30),
        billboard: !0,
        sortable: !0,
        color: 13421772,
      })),
      (this.arrow.visible = !1),
      this.addObject3D(this.arrow),
      Nc.particles.addTo(this.base);
  }
  toggleHomeEgg(e) {
    e
      ? ((this.halo1.alpha = 0.15),
        (this.halo2.alpha = 0.2),
        (this.homeEgg.visible = !0))
      : ((this.halo1.alpha = 0),
        (this.halo2.alpha = 0),
        (this.homeEgg.visible = !1));
  }
  update() {
    if (!this.webgl.state.current) return;
    _(ih.playerPos.value.z, 0, this.arrow.position.z, 0) < 5
      ? ((this.scalar = 0.01), (this.yArrowPos = 1.3))
      : ((this.scalar = 0.7), (this.yArrowPos = 1.3)),
      (this.yArrowPos += (Math.sin(this.webgl.time.elapsed / 400) + 1) / 3),
      (this.arrow.position.z = -Yc.depth * (Kc + Jc)),
      (this.arrow.position.y = this.yArrowPos),
      (this.arrow.scale.x = l(this.arrow.scale.x, this.scalar, 0.2)),
      (this.arrow.scale.y = l(this.arrow.scale.y, this.scalar, 0.2)),
      (this.arrow.scale.z = l(this.arrow.scale.z, this.scalar, 0.2)),
      this.haloArrow.position.copy(this.arrow.position),
      (this.haloArrow.position.y += 1),
      (this.haloArrow.position.x -= 0.12),
      (this.haloArrow.position.z -= 0.5),
      (this.arrow.visible =
        "Game" == this.webgl.state.current.id && this.arrow.scale.x > 0.03),
      (this.haloArrow.alpha =
        "Game" == this.webgl.state.current.id && this.arrow.scale.x > 0.03
          ? 0.5
          : 0),
      (this.layer.visible =
        this.layer.material.uniforms.inProgress.value > 0 ||
        this.layer.material.uniforms.outProgress.value > 0);
  }
}
function Ru(e) {
  !(function (e) {
    const t = e.renderLists;
    if (t._patched) return;
    t._patched = !0;
    const i = t.get;
    t.get = function (e, t) {
      const n = i(e, t);
      return (
        n._patched ||
          (function (e) {
            e._patched = !0;
            const t = e.push,
              i = e.unshift;
            (e.push = function (e, i, n, r, s, a) {
              const o = n.transparent && n.forceOpaque;
              o && (n.transparent = !1),
                t(e, i, n, r, s, a),
                o && (n.transparent = !0);
            }),
              (e.unshift = function (e, t, n, r, s, a) {
                const o = n.transparent && n.forceOpaque;
                o && (n.transparent = !1),
                  i(e, t, n, r, s, a),
                  o && (n.transparent = !0);
              });
          })(n),
        n
      );
    };
  })(e);
}
const Du = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default:
          "vec2 bgUV=bgRot(gl_FragCoord.xy/res.xy,bgCamRotation.y);vec3 bgColor=mix(bgTopColor,bgBottomColor,smoothstep(0.8,-0.1,bgUV.x));float nm=smoothstep(-280.,-190.,bgUV.y);\n#ifdef IS_MOBILE\nfloat n=0.;\n#else\nfloat t=time*0.0001;float na=texture2D(noise,bgUV.xy+vec2(0.,t)).r;float nb=texture2D(noise,bgUV.xy/2.+vec2(t*0.35+10.,0.)+na*0.2).r;float n=nb*2.*nm;\n#endif\nbgColor=mix(bgColor,bgColor*.6,smoothstep(-150.,-50.,bgUV.x)-n);",
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Iu = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default:
          "float _fogNear=fogNear;\n#ifdef NEON\n_fogNear+=(fogFar-fogNear)*0.6*neonIntensity;\n#endif\nfloat fogFactor=smoothstep(_fogNear,fogFar,vFogDepth);\n#ifdef STRUCTURE\nfogFactor=max(fogFactor,smoothstep(-90.,-143.,vY)+smoothstep(75.,112.,vY));\n#endif\n#include <bg>\n#ifdef NEON\ngl_FragColor.a=mix(gl_FragColor.a,1.,fogFactor);\n#endif\ngl_FragColor.rgb=mix(gl_FragColor.rgb,bgColor,fogFactor);",
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ou = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default:
          "uniform float fogNear;uniform float fogFar;varying float vFogDepth;\n#ifdef STRUCTURE\nvarying float vY;\n#endif\n#include <bg_pars>",
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Nu = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default:
          "uniform vec2 res;uniform vec2 bgCamRotation;const vec3 bgTopColor=vec3(2.,34.,54.)/255.*0.5;const vec3 bgBottomColor=vec3(2.,34.,54.)/255.;uniform sampler2D noise;uniform float time;\n#define PI 3.14159265359\nvec2 bgRot(vec2 v,float a){float s=sin(a);float c=cos(a);mat2 m=mat2(c,-s,s,c);return(m*v-0.5)+0.5;}",
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  zu = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default:
          "vec2 coords=gl_FragCoord.xy/res;vec2 uv=clamp(vec2(0.),vec2(1.),coords);vec2 transitionUv=uv*texCoords.zw;transitionUv+=texCoords.xy;gl_FragColor=vec4(gl_FragColor.rgb,mix(1.,1.-getAlpha(transitionUv),progress));",
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Uu = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default:
          "uniform float pixelRatio;uniform vec2 res;uniform sampler2D transitionTexture;uniform vec4 texCoords;uniform float progress;const vec3 overlay=vec3(1.);float getAlpha(vec2 coordinates){float texelColor=texture2D(transitionTexture,coordinates).r;float signedDistance=texelColor-.5;float smoothing=fwidth(signedDistance);float alpha=smoothstep(-smoothing,smoothing,signedDistance);return alpha;}",
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Fu = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default:
          "float blendOverlay(float base,float blend){return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));}vec3 blendOverlay(vec3 base,vec3 blend){return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));}vec3 blendOverlay(vec3 base,vec3 blend,float opacity){return(blendOverlay(base,blend)*opacity+base*(1.0-opacity));}",
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ku = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default:
          "float between(float x,vec2 hit){return min(1.,smoothstep(hit.x+0.25,hit.x-0.25,x)+smoothstep(hit.y-0.25,hit.y+0.25,x));}float when_gt(float x,float y){return max(sign(x-y),0.0);}float when_lt(float x,float y){return max(sign(y-x),0.0);}",
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Bu = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default:
          "#ifndef PI\n#define PI 3.141592653589793\n#endif\n#ifndef HALF_PI\n#define HALF_PI 1.5707963267948966\n#endif\nfloat backInOut(const in float t){float f=t<.5?2.*t:1.-(2.*t-1.);float g=pow(f,3.)-f*sin(f*PI);return t<.5?.5*g:.5*(1.-g)+.5;}float backIn(float t){return pow(t,3.)-t*sin(t*PI);}float backOut(float t){float f=1.-t;return 1.-(pow(f,3.)-f*sin(f*PI));}float bounceOut(float t){const float a=4./11.;const float b=8./11.;const float c=9./10.;const float ca=4356./361.;const float cb=35442./1805.;const float cc=16061./1805.;float t2=t*t;return t<a?7.5625*t2:t<b?9.075*t2-9.9*t+3.4:t<c?ca*t2-cb*t+cc:10.8*t*t-20.52*t+10.72;}float bounceInOut(float t){return t<.5?.5*(1.-bounceOut(1.-t*2.)):.5*bounceOut(t*2.-1.)+.5;}float bounceIn(float t){return 1.-bounceOut(1.-t);}float circularIn(float t){return 1.-sqrt(1.-t*t);}float circularOut(float t){return sqrt((2.-t)*t);}float circularInOut(float t){return t<.5?.5*(1.-sqrt(1.-4.*t*t)):.5*(sqrt((3.-2.*t)*(2.*t-1.))+1.);}float cubicInOut(float t){return t<.5?4.*t*t*t:.5*pow(2.*t-2.0,3.)+1.;}float cubicIn(float t){return t*t*t;}float cubicOut(float t){float f=t-1.;return f*f*f+1.;}float elasticIn(float t){return sin(13.*t*HALF_PI)*pow(2.0,10.*(t-1.));}float elasticOut(float t){return sin(-13.*(t+1.)*HALF_PI)*pow(2.0,-10.*t)+1.;}float elasticInOut(float t){return t<.5?.5*sin(+13.*HALF_PI*2.*t)*pow(2.0,10.*(2.*t-1.)):.5*sin(-13.*HALF_PI*((2.*t-1.)+1.))*pow(2.0,-10.*(2.*t-1.))+1.;}float exponentialIn(float t){return t==.0?t:pow(2.0,10.*(t-1.));}float exponentialOut(float t){return t==1.?t:1.-pow(2.0,-10.*t);}float exponentialInOut(float t){return t==.0||t==1.?t:t<.5?+0.5*pow(2.0,(20.*t)-10.):-0.5*pow(2.0,10.-(t*20.))+1.;}float quadraticIn(float t){return t*t;}float quadraticOut(float t){return-t*(t-2.);}float quadraticInOut(float t){float p=2.*t*t;return t<.5?p:-p+(4.*t)-1.;}float quarticIn(float t){return pow(t,4.);}float quarticOut(float t){return pow(t-1.0,3.)*(1.-t)+1.;}float quarticInOut(float t){return t<.5?+8.*pow(t,4.):-8.*pow(t-1.0,4.)+1.;}float qinticIn(float t){return pow(t,5.);}float qinticOut(float t){return 1.-(pow(t-1.0,5.));}float qinticInOut(float t){return t<.5?+16.*pow(t,5.):-.5*pow(2.*t-2.0,5.)+1.;}float sineInOut(float t){return-0.5*(cos(PI*t)-1.);}float sineIn(float t){return sin((t-1.)*HALF_PI)+1.;}float sineOut(float t){return sin(t*HALF_PI);}float linear(float t){return t;}",
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Vu = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default:
          "mat4 getInstanceMatrix(vec3 p,vec4 q,vec3 s){mat4 m;float x=q.x;float y=q.y;float z=q.z;float w=q.w;float x2=x+x;float y2=y+y;float z2=z+z;float xx=x*x2;float xy=x*y2;float xz=x*z2;float yy=y*y2;float yz=y*z2;float zz=z*z2;float wx=w*x2;float wy=w*y2;float wz=w*z2;float sx=s.x;float sy=s.y;float sz=s.z;m[0][0]=(1.-(yy+zz))*sx;m[0][1]=(xy+wz)*sx;m[0][2]=(xz-wy)*sx;m[0][3]=0.;m[1][0]=(xy-wz)*sy;m[1][1]=(1.-(xx+zz))*sy;m[1][2]=(yz+wx)*sy;m[1][3]=0.;m[2][0]=(xz+wy)*sz;m[2][1]=(yz-wx)*sz;m[2][2]=(1.-(xx+yy))*sz;m[2][3]=0.;m[3][0]=p.x;m[3][1]=p.y;m[3][2]=p.z;m[3][3]=1.;return m;}",
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Hu = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default:
          "mat3 getInstanceRotationMatrix(vec4 q){mat3 m;float x=q.x;float y=q.y;float z=q.z;float w=q.w;float x2=x+x;float y2=y+y;float z2=z+z;float xx=x*x2;float xy=x*y2;float xz=x*z2;float yy=y*y2;float yz=y*z2;float zz=z*z2;float wx=w*x2;float wy=w*y2;float wz=w*z2;m[0][0]=(1.-(yy+zz));m[0][1]=(xy+wz);m[0][2]=(xz-wy);m[1][0]=(xy-wz);m[1][1]=(1.-(xx+zz));m[1][2]=(yz+wx);m[2][0]=(xz+wy);m[2][1]=(yz-wx);m[2][2]=(1.-(xx+yy));return m;}",
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Gu = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default:
          "vec2 coords=gl_FragCoord.xy/res;float transi=step(coords.y,mix(-.5,1.3,homeTransitionProgress));gl_FragColor.rgb=mix(gl_FragColor.rgb,vec3(2.,34.,54.)/255.,1.-transi);gl_FragColor.a=transi;",
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Wu = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default:
          "uniform float homeTransitionProgress;const vec2 edges=vec2(1.3,-1.);",
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ju = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default:
          "float linearstep(float start,float end,float value){return(clamp(value,start,end)-start)/(end-start);}",
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  qu = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default:
          "float luma(vec3 color){return dot(color,vec3(0.299,0.587,0.114));}",
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Xu = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default:
          "float sat(float t){return clamp(t,0.0,1.0);}float remap(float t,float a,float b){return sat((t-a)/(b-a));}float linterp(float t){return sat(1.0-abs(2.0*t-1.0));}vec4 spectrum_offset(float t){vec4 ret;float lo=step(t,0.5);float hi=1.0-lo;float w=linterp(remap(t,1.0/6.0,5.0/6.0));ret=vec4(lo,1.0,hi,1.)*vec4(1.0-w,w,1.0-w,1.);return pow(ret,vec4(1.0/2.2));}",
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Yu = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: "vWorldPos=modelMatrix*vec4(transformed,1.);",
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ku = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: "varying vec4 vWorldPos;" },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Zu = Object.assign({
    "./bg.glsl": Du,
    "./bg_fog.glsl": Iu,
    "./bg_fog_pars.glsl": Ou,
    "./bg_pars.glsl": Nu,
    "./bg_transition.glsl": zu,
    "./bg_transition_pars.glsl": Uu,
    "./blend_modes.glsl": Fu,
    "./conditionals.glsl": ku,
    "./eases.glsl": Bu,
    "./get_instance_matrix.glsl": Vu,
    "./get_instance_rotation_matrix.glsl": Hu,
    "./home_transition.glsl": Gu,
    "./home_transition_pars.glsl": Wu,
    "./linear_step.glsl": ju,
    "./luma.glsl": qu,
    "./spectrumOffset.glsl": Xu,
    "./world_pos.glsl": Yu,
    "./world_pos_pars.glsl": Ku,
  });
function Ju(e) {
  let t;
  !(function () {
    for (const e in Zu) {
      const t = e.split("/").pop().slice(0, -".glsl".length);
      ts[t] = Zu[e].default;
    }
  })(),
    Object.assign(e, {
      init: async function () {
        const { renderer: t, time: i } = e;
        Object.assign(t.options, { alias: !1, antialias: !1 }),
          t.init(),
          Ru(t.instance),
          t.instance.setClearColor(8618883, 0);
      },
      preload: async function () {
        await e.resources.preload(),
          e.state.init(),
          e.particles.init(),
          (t = e.scene = new Lu()),
          e.scene.triggerInit();
      },
      start: async function () {
        const { renderer: t, time: i } = e;
        t.resize(), i.init();
      },
      update: async function () {
        if (
          (e.app.$controls.touch.poll(), (ih.time.value = e.time.elapsed), !t)
        )
          return;
        t.triggerUpdate(), e.particles.update();
      },
      render: async function () {
        if (!t) return;
        t.triggerRender();
      },
    });
}
const Qu = Number.MAX_SAFE_INTEGER,
  $u = x(20),
  ed = x(6),
  td = [30, 60, 120, 144, 240].map((e) => [(e = 1e3 / e) + 0.75, e, e - 0.75]);
const id = {
  "720p": 921600,
  "1080p": 2073600,
  "1440p": 3686400,
  "2k": 3686400,
  "3k": 4665600,
  "4k": 8294400,
  "5k": 14745600,
  "8k": 33177600,
};
let nd,
  rd = 1;
function sd({
  format: e = rt,
  name: t,
  depth: i = !0,
  stencil: n = null,
  width: r,
  height: s,
  scale: a = 1,
  generateMipmaps: o = !1,
} = {}) {
  nd || (nd = Oc());
  const l = nd.renderer.drawingBufferSize;
  null == t && (t = "RenderTarget." + rd++);
  let c,
    h = !1,
    u = !1;
  r && s && m(r, s),
    (r && s) || f(a),
    (c = new Oi(r, s, {
      minFilter: He,
      magFilter: He,
      format: e,
      depthBuffer: !!i,
      stencilBuffer: !!(n ?? i),
    })),
    (c.texture.generateMipmaps = !!o);
  const d = c.setSize.bind(c);
  (c.setSize = m), (c.setScale = f);
  const p = c.dispose.bind(c);
  function m(e = 0, t = 0) {
    t || (t = e), e <= 0 || ((r = e), (s = t), g(), c && v());
  }
  function f(e = 0) {
    e <= 0 ||
      ((a = e),
      (function () {
        if (u) return;
        (u = !0), l.watch(_);
      })(),
      _());
  }
  function g() {
    u && ((u = !1), l.unwatch(_));
  }
  function v() {
    (c.texture.width === r && c.texture.height === s) ||
      ((h = !0), d(r, s), (h = !1));
  }
  function _() {
    (r = Math.floor(l.value.x * a)), (s = Math.floor(l.value.y * a)), c && v();
  }
  return (
    (c.dispose = function () {
      if ((p(), h)) return;
      g();
    }),
    (c.texture.name = t),
    (c.clone = function () {
      console.warn("clone() is disabled for RTs created with createBuffer()");
    }),
    c
  );
}
new kr();
const ad = () => {};
const od = r.create();
od.setSeed(3405817515877.474), new Fi();
const ld = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: function (e, t) {
        Nc.postprocess,
          (e.onEnter = async (t) => {
            (ch.get().uniforms.isGame.value = 0), e.uid;
            const i = Nc.scene.mainCamera;
            Nc.scene.toggleHomeEgg(!1),
              i.setState("end", { force: !0 }),
              Nc.scene.player.body.blinkScreen(1),
              await c(1300),
              Nc.scene.player.body.blinkScreen(0);
          }),
          (e.onUpdate = () => {}),
          (e.onLeave = () => {});
      },
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
let cd = [
  { speed: { from: 1, to: 1 }, max: 2 },
  { speed: { from: 1, to: 1.3 }, max: 10 },
  { speed: { from: 1.5, to: 1.8 }, max: 20 },
  { speed: { from: 1.8, to: 2.4 }, max: 30 },
  { speed: { from: 2.4, to: 3 }, max: 35 },
];
const hd = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: function (e, t) {
        e.init = () => {
          e.data.difficulty = { speed: 1 };
        };
        let i = !1,
          n = !1,
          s = 0,
          a = null;
        function o(t) {
          t
            ? e.data.presetID++
            : (e.data.presetID--,
              1 == e.data.presetID
                ? Nc.app.$audio.playSound("sfx_EggMerge_ToDouble")
                : Nc.app.$audio.playSound("sfx_EggMerge_ToSingle")),
            (e.data.presetID = f(e.data.presetID, 0, 2));
        }
        e.onEnter = async (t) => {
          e.uid;
          const i = Nc.scene.mainCamera;
          (e.data.lose = !1),
            Nc.scene.toggleHomeEgg(!1),
            (Nc.app.$store.lose = !1),
            Nc.scene.player.body.blinkScreen(0),
            (e.data.difficulty = { speed: 1 }),
            (ch.get().uniforms.isGame.value = 1),
            (e.data.presetID = null),
            i.setState("game", { force: !0 }),
            (Nc.app.$store.lastScore = Nc.app.$store.score),
            (Nc.app.$store.score = 0),
            u(),
            await c(1e3),
            (e.data.presetID = 0),
            (e.data.started = !0),
            Nc.scene.egg.pop();
        };
        let l = 0,
          h = null;
        function u() {
          (l = 0),
            (Nc.stores.readyJump = i || n),
            ch.get().uniforms.waveColor.value.setHex(6710835),
            (ch.get().uniforms.isDead.value = 0),
            (e.data.lose = !1),
            (e.data.eggCollected = 0),
            (i = !1),
            (Nc.scene.player.base.visible = !0),
            (n = !1),
            (s = 0),
            (Nc.scene.ground.spring.value = 0),
            (Nc.scene.ground.springTarget = 0),
            Nc.player.reset(),
            "game" === Nc.scene.mainCamera.state.id &&
              Nc.scene.mainCamera.state.reset &&
              Nc.scene.mainCamera.state.reset(),
            Nc.stores.blockPrng.setSeed(7993225837815),
            Nc.scene.ground.reset(),
            Nc.scene.obstacles.reset(),
            Nc.scene.egg.reset();
        }
        async function d() {
          (l = 0),
            e.data.lose ||
              (h && h.stop(),
              (h = Nc.app.$audio.playSound("sfx_Dash")),
              Nc.player.jump(),
              (Nc.scene.ground.spring.value = 1),
              (Nc.scene.ground.springTarget = 1),
              await c(110),
              e.data.lose ||
                (Nc.scene.ground.wave(), (Nc.scene.ground.springTarget = 0)));
        }
        (e.onUpdate = () => {
          if (!e.data.started) return;
          if (Nc.app.$store.isMenuVisible) return;
          if (
            ((l += Nc.time.stableDt),
            Nc.player.collided &&
              !e.data.lose &&
              (async function () {
                (Nc.app.$store.tutoVisible = !1),
                  (Nc.app.$store.isCounterVisible = !1),
                  (e.data.lose = !0);
                const t = new Fi();
                (ch.get().uniforms.isDead.value = 1),
                  ch.get().uniforms.waveColor.value.setHex(15416123),
                  Nc.scene.player.body.blinkScreen(1),
                  (Nc.scene.ground.springTarget = 0),
                  (Nc.scene.player.base.visible = !1),
                  Nc.particles.emit("flash", {
                    batcherID: "noDepthEmissive",
                    amount: 1,
                    sprite: "flash",
                    position: t.copy(ih.playerPos.value),
                    duration: 1e3,
                    scale: new di(r.randomFloat(35, 35), r.randomFloat(35, 35)),
                    alpha: 1.4,
                    color: new Ei(16777215),
                    brightness: 0.22,
                  }),
                  Nc.particles.emit("death", {
                    batcherID: "normal",
                    amount: 30,
                    sprite: "square-solid",
                    position: t.copy(ih.playerPos.value),
                    duration: r.randomFloat(300, 500),
                    scale: new di(r.randomFloat(20, 20), r.randomFloat(20, 20)),
                    alpha: 1.4,
                    color: new Ei(16777215),
                    brightness: 0.22,
                  }),
                  (Nc.app.$store.lose = !0),
                  Nc.app.$audio.playSound("sfx_Death", { volume: 2 }),
                  Nc.scene.ground.waveLose(),
                  await c(400),
                  Nc.scene.layer.material.transitionIn(),
                  await c(880),
                  Nc.scene.layer.material.transitionOut(),
                  Nc.app.$router.push({ name: "End" }),
                  u(),
                  Nc.app.$user.register();
              })(),
            e.data.lose)
          )
            return;
          !i && Nc.app.$controls.touch.pressed && (i = !0),
            i && !Nc.app.$controls.touch.pressed && ((i = !1), d()),
            !n && Nc.app.$controls.keyboard.keys.Space && (n = !0),
            n && !Nc.app.$controls.keyboard.keys.Space && ((n = !1), d());
          for (let e = 0; e < cd.length; e++) {
            if (!(cd[e].max < s)) {
              a = e;
              break;
            }
          }
          const t = e.data.presetID;
          l > 800 && 0 !== t && (o(), (l = 0), Nc.scene.egg.pop());
          const h = cd[a];
          let p = h.speed.from || 1,
            m = h.speed.to || 1,
            f = A(s, 0 === a ? 0 : cd[a - 1].max, h.max, 0, 1);
          (e.data.difficulty.speed = C(p, m, f)),
            (Nc.stores.readyJump = i || n);
        }),
          (e.eggCollected = function () {
            0 !== e.data.presetID &&
              Nc.app.$audio.playSound("sfx_Pickup_DoubleEgg_RobotVoice"),
              (e.data.eggCollected += 1),
              (e.data.eggCollected += e.data.presetID || 0),
              (Nc.app.$store.score = e.data.eggCollected),
              (Nc.app.$store.tutoVisible = !1),
              (Nc.app.$store.isCounterVisible = !0),
              s++,
              o(!0),
              Nc.scene.egg.pop();
          }),
          (e.onLeave = () => {
            u();
          });
      },
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
const ud = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: function (e, t) {
          Nc.postprocess,
            (e.onEnter = async (t) => {
              (ch.get().uniforms.isGame.value = 0), e.uid;
              Nc.scene.mainCamera.setState("home", { force: !0 }),
                Nc.scene.toggleHomeEgg(!0),
                await c(700),
                Nc.player.body.blinkScreen();
            }),
            (e.onUpdate = () => {}),
            (e.onLeave = () => {});
        },
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  dd = (e) => e,
  pd = {};
let md = 0;
const fd = {},
  gd = Object.assign({
    "./stateEnd.js": ld,
    "./stateGame.js": hd,
    "./stateHome.js": ud,
  });
for (let i in gd) {
  const e = i.split("/").pop().slice(5, -3);
  fd[e] = gd[i].default;
}
const vd = {},
  _d = (e, t, i, n) => (vd[e] = { default: t, webp: i, avif: n });
_d("noise", "/assets/noise.bc6d91414adb976c.png"),
  _d("sprites", "/assets/sprites.142d7c8b4adb976c.jpg"),
  _d("aoMap", "/assets/aoMap.c895073d4adb976c.jpg"),
  _d("diffuse", "/assets/diffuse.c5ecd34f4adb976c.png"),
  _d("alphaMap", "/assets/alpha-map.267fe00d4adb976c.png"),
  _d("bunnyFace", "/assets/bunny-face.49b1a2a54adb976c.png"),
  _d("dataMap", "/assets/dataMap.2016fce54adb976c.png"),
  _d("egg", "/assets/egg.39cfee924adb976c.png");
function xd() {
  let e = {};
  return {
    get: function (t) {
      return e[t];
    },
    add: function (t, i) {
      e[t] = i;
    },
    remove: function (t) {
      delete e[t];
    },
    removeAll: function () {
      e = {};
    },
  };
}
const yd = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing",
};
class bd {
  constructor(e) {
    (this.parser = e),
      (this.name = yd.KHR_LIGHTS_PUNCTUAL),
      (this.cache = { refs: {}, uses: {} });
  }
  _markDefs() {
    const e = this.parser,
      t = this.parser.json.nodes || [];
    for (let i = 0, n = t.length; i < n; i++) {
      const n = t[i];
      n.extensions &&
        n.extensions[this.name] &&
        void 0 !== n.extensions[this.name].light &&
        e._addNodeRef(this.cache, n.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser,
      i = "light:" + e;
    let n = t.cache.get(i);
    if (n) return n;
    const r = t.json,
      s = (((r.extensions && r.extensions[this.name]) || {}).lights || [])[e];
    let a;
    const o = new Ei(16777215);
    void 0 !== s.color && o.fromArray(s.color);
    const l = void 0 !== s.range ? s.range : 0;
    switch (s.type) {
      case "directional":
        (a = new mc(o)), a.target.position.set(0, 0, -1), a.add(a.target);
        break;
      case "point":
        (a = new dc(o)), (a.distance = l);
        break;
      case "spot":
        (a = new oc(o)),
          (a.distance = l),
          (s.spot = s.spot || {}),
          (s.spot.innerConeAngle =
            void 0 !== s.spot.innerConeAngle ? s.spot.innerConeAngle : 0),
          (s.spot.outerConeAngle =
            void 0 !== s.spot.outerConeAngle
              ? s.spot.outerConeAngle
              : Math.PI / 4),
          (a.angle = s.spot.outerConeAngle),
          (a.penumbra = 1 - s.spot.innerConeAngle / s.spot.outerConeAngle),
          a.target.position.set(0, 0, -1),
          a.add(a.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + s.type);
    }
    return (
      a.position.set(0, 0, 0),
      (a.decay = 2),
      void 0 !== s.intensity && (a.intensity = s.intensity),
      (a.name = t.createUniqueName(s.name || "light_" + e)),
      (n = Promise.resolve(a)),
      t.cache.add(i, n),
      n
    );
  }
  createNodeAttachment(e) {
    const t = this,
      i = this.parser,
      n = i.json.nodes[e],
      r = ((n.extensions && n.extensions[this.name]) || {}).light;
    return void 0 === r
      ? null
      : this._loadLight(r).then(function (e) {
          return i._getNodeRef(t.cache, r, e);
        });
  }
}
class Md {
  constructor() {
    this.name = yd.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return er;
  }
  extendParams(e, t, i) {
    const n = [];
    (e.color = new Ei(1, 1, 1)), (e.opacity = 1);
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const t = r.baseColorFactor;
        e.color.fromArray(t), (e.opacity = t[3]);
      }
      void 0 !== r.baseColorTexture &&
        n.push(i.assignTexture(e, "map", r.baseColorTexture, jt));
    }
    return Promise.all(n);
  }
}
class wd {
  constructor(e) {
    (this.parser = e), (this.name = yd.KHR_MATERIALS_EMISSIVE_STRENGTH);
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const n = i.extensions[this.name].emissiveStrength;
    return void 0 !== n && (t.emissiveIntensity = n), Promise.resolve();
  }
}
class Sd {
  constructor(e) {
    (this.parser = e), (this.name = yd.KHR_MATERIALS_CLEARCOAT);
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    return t.extensions && t.extensions[this.name] ? Sl : null;
  }
  extendMaterialParams(e, t) {
    const i = this.parser,
      n = i.json.materials[e];
    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
    const r = [],
      s = n.extensions[this.name];
    if (
      (void 0 !== s.clearcoatFactor && (t.clearcoat = s.clearcoatFactor),
      void 0 !== s.clearcoatTexture &&
        r.push(i.assignTexture(t, "clearcoatMap", s.clearcoatTexture)),
      void 0 !== s.clearcoatRoughnessFactor &&
        (t.clearcoatRoughness = s.clearcoatRoughnessFactor),
      void 0 !== s.clearcoatRoughnessTexture &&
        r.push(
          i.assignTexture(
            t,
            "clearcoatRoughnessMap",
            s.clearcoatRoughnessTexture
          )
        ),
      void 0 !== s.clearcoatNormalTexture &&
        (r.push(
          i.assignTexture(t, "clearcoatNormalMap", s.clearcoatNormalTexture)
        ),
        void 0 !== s.clearcoatNormalTexture.scale))
    ) {
      const e = s.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new di(e, e);
    }
    return Promise.all(r);
  }
}
class Td {
  constructor(e) {
    (this.parser = e), (this.name = yd.KHR_MATERIALS_IRIDESCENCE);
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    return t.extensions && t.extensions[this.name] ? Sl : null;
  }
  extendMaterialParams(e, t) {
    const i = this.parser,
      n = i.json.materials[e];
    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
    const r = [],
      s = n.extensions[this.name];
    return (
      void 0 !== s.iridescenceFactor && (t.iridescence = s.iridescenceFactor),
      void 0 !== s.iridescenceTexture &&
        r.push(i.assignTexture(t, "iridescenceMap", s.iridescenceTexture)),
      void 0 !== s.iridescenceIor && (t.iridescenceIOR = s.iridescenceIor),
      void 0 === t.iridescenceThicknessRange &&
        (t.iridescenceThicknessRange = [100, 400]),
      void 0 !== s.iridescenceThicknessMinimum &&
        (t.iridescenceThicknessRange[0] = s.iridescenceThicknessMinimum),
      void 0 !== s.iridescenceThicknessMaximum &&
        (t.iridescenceThicknessRange[1] = s.iridescenceThicknessMaximum),
      void 0 !== s.iridescenceThicknessTexture &&
        r.push(
          i.assignTexture(
            t,
            "iridescenceThicknessMap",
            s.iridescenceThicknessTexture
          )
        ),
      Promise.all(r)
    );
  }
}
class Ed {
  constructor(e) {
    (this.parser = e), (this.name = yd.KHR_MATERIALS_SHEEN);
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    return t.extensions && t.extensions[this.name] ? Sl : null;
  }
  extendMaterialParams(e, t) {
    const i = this.parser,
      n = i.json.materials[e];
    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
    const r = [];
    (t.sheenColor = new Ei(0, 0, 0)), (t.sheenRoughness = 0), (t.sheen = 1);
    const s = n.extensions[this.name];
    return (
      void 0 !== s.sheenColorFactor &&
        t.sheenColor.fromArray(s.sheenColorFactor),
      void 0 !== s.sheenRoughnessFactor &&
        (t.sheenRoughness = s.sheenRoughnessFactor),
      void 0 !== s.sheenColorTexture &&
        r.push(i.assignTexture(t, "sheenColorMap", s.sheenColorTexture, jt)),
      void 0 !== s.sheenRoughnessTexture &&
        r.push(
          i.assignTexture(t, "sheenRoughnessMap", s.sheenRoughnessTexture)
        ),
      Promise.all(r)
    );
  }
}
class Ad {
  constructor(e) {
    (this.parser = e), (this.name = yd.KHR_MATERIALS_TRANSMISSION);
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    return t.extensions && t.extensions[this.name] ? Sl : null;
  }
  extendMaterialParams(e, t) {
    const i = this.parser,
      n = i.json.materials[e];
    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
    const r = [],
      s = n.extensions[this.name];
    return (
      void 0 !== s.transmissionFactor &&
        (t.transmission = s.transmissionFactor),
      void 0 !== s.transmissionTexture &&
        r.push(i.assignTexture(t, "transmissionMap", s.transmissionTexture)),
      Promise.all(r)
    );
  }
}
class Cd {
  constructor(e) {
    (this.parser = e), (this.name = yd.KHR_MATERIALS_VOLUME);
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    return t.extensions && t.extensions[this.name] ? Sl : null;
  }
  extendMaterialParams(e, t) {
    const i = this.parser,
      n = i.json.materials[e];
    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
    const r = [],
      s = n.extensions[this.name];
    (t.thickness = void 0 !== s.thicknessFactor ? s.thicknessFactor : 0),
      void 0 !== s.thicknessTexture &&
        r.push(i.assignTexture(t, "thicknessMap", s.thicknessTexture)),
      (t.attenuationDistance = s.attenuationDistance || 1 / 0);
    const a = s.attenuationColor || [1, 1, 1];
    return (t.attenuationColor = new Ei(a[0], a[1], a[2])), Promise.all(r);
  }
}
class Pd {
  constructor(e) {
    (this.parser = e), (this.name = yd.KHR_MATERIALS_IOR);
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    return t.extensions && t.extensions[this.name] ? Sl : null;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const n = i.extensions[this.name];
    return (t.ior = void 0 !== n.ior ? n.ior : 1.5), Promise.resolve();
  }
}
class Ld {
  constructor(e) {
    (this.parser = e), (this.name = yd.KHR_MATERIALS_SPECULAR);
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    return t.extensions && t.extensions[this.name] ? Sl : null;
  }
  extendMaterialParams(e, t) {
    const i = this.parser,
      n = i.json.materials[e];
    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
    const r = [],
      s = n.extensions[this.name];
    (t.specularIntensity = void 0 !== s.specularFactor ? s.specularFactor : 1),
      void 0 !== s.specularTexture &&
        r.push(i.assignTexture(t, "specularIntensityMap", s.specularTexture));
    const a = s.specularColorFactor || [1, 1, 1];
    return (
      (t.specularColor = new Ei(a[0], a[1], a[2])),
      void 0 !== s.specularColorTexture &&
        r.push(
          i.assignTexture(t, "specularColorMap", s.specularColorTexture, jt)
        ),
      Promise.all(r)
    );
  }
}
class Rd {
  constructor(e) {
    (this.parser = e), (this.name = yd.KHR_TEXTURE_BASISU);
  }
  loadTexture(e) {
    const t = this.parser,
      i = t.json,
      n = i.textures[e];
    if (!n.extensions || !n.extensions[this.name]) return null;
    const r = n.extensions[this.name],
      s = t.options.ktx2Loader;
    if (!s) {
      if (i.extensionsRequired && i.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error(
          "THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures"
        );
      return null;
    }
    return t.loadTextureImage(e, r.source, s);
  }
}
class Dd {
  constructor(e) {
    (this.parser = e),
      (this.name = yd.EXT_TEXTURE_WEBP),
      (this.isSupported = null);
  }
  loadTexture(e) {
    const t = this.name,
      i = this.parser,
      n = i.json,
      r = n.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const s = r.extensions[t],
      a = n.images[s.source];
    let o = i.textureLoader;
    if (a.uri) {
      const e = i.options.manager.getHandler(a.uri);
      null !== e && (o = e);
    }
    return this.detectSupport().then(function (r) {
      if (r) return i.loadTextureImage(e, s.source, o);
      if (n.extensionsRequired && n.extensionsRequired.indexOf(t) >= 0)
        throw new Error(
          "THREE.GLTFLoader: WebP required by asset but unsupported."
        );
      return i.loadTexture(e);
    });
  }
  detectSupport() {
    return (
      this.isSupported ||
        (this.isSupported = new Promise(function (e) {
          const t = new Image();
          (t.src =
            "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"),
            (t.onload = t.onerror =
              function () {
                e(1 === t.height);
              });
        })),
      this.isSupported
    );
  }
}
class Id {
  constructor(e) {
    (this.name = yd.EXT_MESHOPT_COMPRESSION), (this.parser = e);
  }
  loadBufferView(e) {
    const t = this.parser.json,
      i = t.bufferViews[e];
    if (i.extensions && i.extensions[this.name]) {
      const e = i.extensions[this.name],
        n = this.parser.getDependency("buffer", e.buffer),
        r = this.parser.options.meshoptDecoder;
      if (!r || !r.supported) {
        if (
          t.extensionsRequired &&
          t.extensionsRequired.indexOf(this.name) >= 0
        )
          throw new Error(
            "THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files"
          );
        return null;
      }
      return n.then(function (t) {
        const i = e.byteOffset || 0,
          n = e.byteLength || 0,
          s = e.count,
          a = e.byteStride,
          o = new Uint8Array(t, i, n);
        return r.decodeGltfBufferAsync
          ? r
              .decodeGltfBufferAsync(s, a, o, e.mode, e.filter)
              .then(function (e) {
                return e.buffer;
              })
          : r.ready.then(function () {
              const t = new ArrayBuffer(s * a);
              return (
                r.decodeGltfBuffer(
                  new Uint8Array(t),
                  s,
                  a,
                  o,
                  e.mode,
                  e.filter
                ),
                t
              );
            });
      });
    }
    return null;
  }
}
class Od {
  constructor(e) {
    (this.name = yd.EXT_MESH_GPU_INSTANCING), (this.parser = e);
  }
  createNodeMesh(e) {
    const t = this.parser.json,
      i = t.nodes[e];
    if (!i.extensions || !i.extensions[this.name] || void 0 === i.mesh)
      return null;
    const n = t.meshes[i.mesh];
    for (const o of n.primitives)
      if (
        o.mode !== Xd.TRIANGLES &&
        o.mode !== Xd.TRIANGLE_STRIP &&
        o.mode !== Xd.TRIANGLE_FAN &&
        void 0 !== o.mode
      )
        return null;
    const r = i.extensions[this.name].attributes,
      s = [],
      a = {};
    for (const o in r)
      s.push(
        this.parser
          .getDependency("accessor", r[o])
          .then((e) => ((a[o] = e), a[o]))
      );
    return s.length < 1
      ? null
      : (s.push(this.parser.createNodeMesh(e)),
        Promise.all(s).then((e) => {
          const t = e.pop(),
            i = t.isGroup ? t.children : [t],
            n = e[0].count,
            r = [];
          for (const s of i) {
            const e = new fn(),
              t = new Fi(),
              i = new Ui(),
              o = new Fi(1, 1, 1),
              l = new il(s.geometry, s.material, n);
            for (let r = 0; r < n; r++)
              a.TRANSLATION && t.fromBufferAttribute(a.TRANSLATION, r),
                a.ROTATION && i.fromBufferAttribute(a.ROTATION, r),
                a.SCALE && o.fromBufferAttribute(a.SCALE, r),
                l.setMatrixAt(r, e.compose(t, i, o));
            for (const n in a)
              "TRANSLATION" !== n &&
                "ROTATION" !== n &&
                "SCALE" !== n &&
                s.geometry.setAttribute(n, a[n]);
            Bn.prototype.copy.call(l, s),
              (l.frustumCulled = !1),
              this.parser.assignFinalMaterial(l),
              r.push(l);
          }
          return t.isGroup ? (t.clear(), t.add(...r), t) : r[0];
        }));
  }
}
const Nd = "glTF",
  zd = 1313821514,
  Ud = 5130562;
class Fd {
  constructor(e) {
    (this.name = yd.KHR_BINARY_GLTF), (this.content = null), (this.body = null);
    const t = new DataView(e, 0, 12);
    if (
      ((this.header = {
        magic: gc.decodeText(new Uint8Array(e.slice(0, 4))),
        version: t.getUint32(4, !0),
        length: t.getUint32(8, !0),
      }),
      this.header.magic !== Nd)
    )
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - 12,
      n = new DataView(e, 12);
    let r = 0;
    for (; r < i; ) {
      const t = n.getUint32(r, !0);
      r += 4;
      const i = n.getUint32(r, !0);
      if (((r += 4), i === zd)) {
        const i = new Uint8Array(e, 12 + r, t);
        this.content = gc.decodeText(i);
      } else if (i === Ud) {
        const i = 12 + r;
        this.body = e.slice(i, i + t);
      }
      r += t;
    }
    if (null === this.content)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class kd {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    (this.name = yd.KHR_DRACO_MESH_COMPRESSION),
      (this.json = e),
      (this.dracoLoader = t),
      this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const i = this.json,
      n = this.dracoLoader,
      r = e.extensions[this.name].bufferView,
      s = e.extensions[this.name].attributes,
      a = {},
      o = {},
      l = {};
    for (const c in s) {
      const e = Qd[c] || c.toLowerCase();
      a[e] = s[c];
    }
    for (const c in e.attributes) {
      const t = Qd[c] || c.toLowerCase();
      if (void 0 !== s[c]) {
        const n = i.accessors[e.attributes[c]],
          r = Yd[n.componentType];
        (l[t] = r.name), (o[t] = !0 === n.normalized);
      }
    }
    return t.getDependency("bufferView", r).then(function (e) {
      return new Promise(function (t) {
        n.decodeDracoFile(
          e,
          function (e) {
            for (const t in e.attributes) {
              const i = e.attributes[t],
                n = o[t];
              void 0 !== n && (i.normalized = n);
            }
            t(e);
          },
          a,
          l
        );
      });
    });
  }
}
class Bd {
  constructor() {
    this.name = yd.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (
      void 0 !== t.texCoord &&
        console.warn(
          'THREE.GLTFLoader: Custom UV sets in "' +
            this.name +
            '" extension not yet supported.'
        ),
      (void 0 === t.offset && void 0 === t.rotation && void 0 === t.scale) ||
        ((e = e.clone()),
        void 0 !== t.offset && e.offset.fromArray(t.offset),
        void 0 !== t.rotation && (e.rotation = t.rotation),
        void 0 !== t.scale && e.repeat.fromArray(t.scale),
        (e.needsUpdate = !0)),
      e
    );
  }
}
class Vd extends wl {
  constructor(e) {
    super(), (this.isGLTFSpecularGlossinessMaterial = !0);
    const t = [
        "#ifdef USE_SPECULARMAP",
        "\tuniform sampler2D specularMap;",
        "#endif",
      ].join("\n"),
      i = [
        "#ifdef USE_GLOSSINESSMAP",
        "\tuniform sampler2D glossinessMap;",
        "#endif",
      ].join("\n"),
      n = [
        "vec3 specularFactor = specular;",
        "#ifdef USE_SPECULARMAP",
        "\tvec4 texelSpecular = texture2D( specularMap, vUv );",
        "\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture",
        "\tspecularFactor *= texelSpecular.rgb;",
        "#endif",
      ].join("\n"),
      r = [
        "float glossinessFactor = glossiness;",
        "#ifdef USE_GLOSSINESSMAP",
        "\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );",
        "\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture",
        "\tglossinessFactor *= texelGlossiness.a;",
        "#endif",
      ].join("\n"),
      s = [
        "PhysicalMaterial material;",
        "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );",
        "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );",
        "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );",
        "material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.",
        "material.roughness += geometryRoughness;",
        "material.roughness = min( material.roughness, 1.0 );",
        "material.specularColor = specularFactor;",
      ].join("\n"),
      a = {
        specular: { value: new Ei().setHex(16777215) },
        glossiness: { value: 1 },
        specularMap: { value: null },
        glossinessMap: { value: null },
      };
    (this._extraUniforms = a),
      (this.onBeforeCompile = function (e) {
        for (const t in a) e.uniforms[t] = a[t];
        e.fragmentShader = e.fragmentShader
          .replace("uniform float roughness;", "uniform vec3 specular;")
          .replace("uniform float metalness;", "uniform float glossiness;")
          .replace("#include <roughnessmap_pars_fragment>", t)
          .replace("#include <metalnessmap_pars_fragment>", i)
          .replace("#include <roughnessmap_fragment>", n)
          .replace("#include <metalnessmap_fragment>", r)
          .replace("#include <lights_physical_fragment>", s);
      }),
      Object.defineProperties(this, {
        specular: {
          get: function () {
            return a.specular.value;
          },
          set: function (e) {
            a.specular.value = e;
          },
        },
        specularMap: {
          get: function () {
            return a.specularMap.value;
          },
          set: function (e) {
            (a.specularMap.value = e),
              e
                ? (this.defines.USE_SPECULARMAP = "")
                : delete this.defines.USE_SPECULARMAP;
          },
        },
        glossiness: {
          get: function () {
            return a.glossiness.value;
          },
          set: function (e) {
            a.glossiness.value = e;
          },
        },
        glossinessMap: {
          get: function () {
            return a.glossinessMap.value;
          },
          set: function (e) {
            (a.glossinessMap.value = e),
              e
                ? ((this.defines.USE_GLOSSINESSMAP = ""),
                  (this.defines.USE_UV = ""))
                : (delete this.defines.USE_GLOSSINESSMAP,
                  delete this.defines.USE_UV);
          },
        },
      }),
      delete this.metalness,
      delete this.roughness,
      delete this.metalnessMap,
      delete this.roughnessMap,
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.specularMap = e.specularMap),
      this.specular.copy(e.specular),
      (this.glossinessMap = e.glossinessMap),
      (this.glossiness = e.glossiness),
      delete this.metalness,
      delete this.roughness,
      delete this.metalnessMap,
      delete this.roughnessMap,
      this
    );
  }
}
class Hd {
  constructor() {
    (this.name = yd.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS),
      (this.specularGlossinessParams = [
        "color",
        "map",
        "lightMap",
        "lightMapIntensity",
        "aoMap",
        "aoMapIntensity",
        "emissive",
        "emissiveIntensity",
        "emissiveMap",
        "bumpMap",
        "bumpScale",
        "normalMap",
        "normalMapType",
        "displacementMap",
        "displacementScale",
        "displacementBias",
        "specularMap",
        "specular",
        "glossinessMap",
        "glossiness",
        "alphaMap",
        "envMap",
        "envMapIntensity",
      ]);
  }
  getMaterialType() {
    return Vd;
  }
  extendParams(e, t, i) {
    const n = t.extensions[this.name];
    (e.color = new Ei(1, 1, 1)), (e.opacity = 1);
    const r = [];
    if (Array.isArray(n.diffuseFactor)) {
      const t = n.diffuseFactor;
      e.color.fromArray(t), (e.opacity = t[3]);
    }
    if (
      (void 0 !== n.diffuseTexture &&
        r.push(i.assignTexture(e, "map", n.diffuseTexture, jt)),
      (e.emissive = new Ei(0, 0, 0)),
      (e.glossiness = void 0 !== n.glossinessFactor ? n.glossinessFactor : 1),
      (e.specular = new Ei(1, 1, 1)),
      Array.isArray(n.specularFactor) && e.specular.fromArray(n.specularFactor),
      void 0 !== n.specularGlossinessTexture)
    ) {
      const t = n.specularGlossinessTexture;
      r.push(i.assignTexture(e, "glossinessMap", t)),
        r.push(i.assignTexture(e, "specularMap", t, jt));
    }
    return Promise.all(r);
  }
  createMaterial(e) {
    const t = new Vd(e);
    return (
      (t.fog = !0),
      (t.color = e.color),
      (t.map = void 0 === e.map ? null : e.map),
      (t.lightMap = null),
      (t.lightMapIntensity = 1),
      (t.aoMap = void 0 === e.aoMap ? null : e.aoMap),
      (t.aoMapIntensity = 1),
      (t.emissive = e.emissive),
      (t.emissiveIntensity =
        void 0 === e.emissiveIntensity ? 1 : e.emissiveIntensity),
      (t.emissiveMap = void 0 === e.emissiveMap ? null : e.emissiveMap),
      (t.bumpMap = void 0 === e.bumpMap ? null : e.bumpMap),
      (t.bumpScale = 1),
      (t.normalMap = void 0 === e.normalMap ? null : e.normalMap),
      (t.normalMapType = Xt),
      e.normalScale && (t.normalScale = e.normalScale),
      (t.displacementMap = null),
      (t.displacementScale = 1),
      (t.displacementBias = 0),
      (t.specularMap = void 0 === e.specularMap ? null : e.specularMap),
      (t.specular = e.specular),
      (t.glossinessMap = void 0 === e.glossinessMap ? null : e.glossinessMap),
      (t.glossiness = e.glossiness),
      (t.alphaMap = null),
      (t.envMap = void 0 === e.envMap ? null : e.envMap),
      (t.envMapIntensity = 1),
      t
    );
  }
}
class Gd {
  constructor() {
    this.name = yd.KHR_MESH_QUANTIZATION;
  }
}
class Wd extends Dl {
  constructor(e, t, i, n) {
    super(e, t, i, n);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer,
      i = this.sampleValues,
      n = this.valueSize,
      r = e * n * 3 + n;
    for (let s = 0; s !== n; s++) t[s] = i[r + s];
    return t;
  }
  interpolate_(e, t, i, n) {
    const r = this.resultBuffer,
      s = this.sampleValues,
      a = this.valueSize,
      o = 2 * a,
      l = 3 * a,
      c = n - t,
      h = (i - t) / c,
      u = h * h,
      d = u * h,
      p = e * l,
      m = p - l,
      f = -2 * d + 3 * u,
      g = d - u,
      v = 1 - f,
      _ = g - u + h;
    for (let x = 0; x !== a; x++) {
      const e = s[m + x + a],
        t = s[m + x + o] * c,
        i = s[p + x + a],
        n = s[p + x] * c;
      r[x] = v * e + _ * t + f * i + g * n;
    }
    return r;
  }
}
const jd = new Ui();
class qd extends Wd {
  interpolate_(e, t, i, n) {
    const r = super.interpolate_(e, t, i, n);
    return jd.fromArray(r).normalize().toArray(r), r;
  }
}
const Xd = {
    FLOAT: 5126,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    LINEAR: 9729,
    REPEAT: 10497,
    SAMPLER_2D: 35678,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_SHORT: 5123,
  },
  Yd = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array,
  },
  Kd = { 9728: ke, 9729: He, 9984: Be, 9985: Ge, 9986: Ve, 9987: We },
  Zd = { 33071: Ue, 33648: Fe, 10497: ze },
  Jd = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
  Qd = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv2",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex",
  },
  $d = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences",
  },
  ep = { CUBICSPLINE: void 0, LINEAR: Vt, STEP: Bt },
  tp = "OPAQUE",
  ip = "MASK",
  np = "BLEND";
function rp(e, t, i) {
  for (const n in i.extensions)
    void 0 === e[n] &&
      ((t.userData.gltfExtensions = t.userData.gltfExtensions || {}),
      (t.userData.gltfExtensions[n] = i.extensions[n]));
}
function sp(e, t) {
  void 0 !== t.extras &&
    ("object" == typeof t.extras
      ? Object.assign(e.userData, t.extras)
      : console.warn(
          "THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras
        ));
}
function ap(e, t) {
  if ((e.updateMorphTargets(), void 0 !== t.weights))
    for (let i = 0, n = t.weights.length; i < n; i++)
      e.morphTargetInfluences[i] = t.weights[i];
  if (t.extras && Array.isArray(t.extras.targetNames)) {
    const i = t.extras.targetNames;
    if (e.morphTargetInfluences.length === i.length) {
      e.morphTargetDictionary = {};
      for (let t = 0, n = i.length; t < n; t++)
        e.morphTargetDictionary[i[t]] = t;
    } else
      console.warn(
        "THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names."
      );
  }
}
function op(e) {
  const t = e.extensions && e.extensions[yd.KHR_DRACO_MESH_COMPRESSION];
  let i;
  return (
    (i = t
      ? "draco:" + t.bufferView + ":" + t.indices + ":" + lp(t.attributes)
      : e.indices + ":" + lp(e.attributes) + ":" + e.mode),
    i
  );
}
function lp(e) {
  let t = "";
  const i = Object.keys(e).sort();
  for (let n = 0, r = i.length; n < r; n++) t += i[n] + ":" + e[i[n]] + ";";
  return t;
}
function cp(e) {
  switch (e) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error(
        "THREE.GLTFLoader: Unsupported normalized accessor component type."
      );
  }
}
class hp {
  constructor(e = {}, t = {}) {
    (this.json = e),
      (this.extensions = {}),
      (this.plugins = {}),
      (this.options = t),
      (this.cache = new xd()),
      (this.associations = new Map()),
      (this.primitiveCache = {}),
      (this.meshCache = { refs: {}, uses: {} }),
      (this.cameraCache = { refs: {}, uses: {} }),
      (this.lightCache = { refs: {}, uses: {} }),
      (this.sourceCache = {}),
      (this.textureCache = {}),
      (this.nodeNamesUsed = {});
    const i = !0 === /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
      n = navigator.userAgent.indexOf("Firefox") > -1,
      r = n ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1;
    "undefined" == typeof createImageBitmap || i || (n && r < 98)
      ? (this.textureLoader = new ec(this.options.manager))
      : (this.textureLoader = new _c(this.options.manager)),
      this.textureLoader.setCrossOrigin(this.options.crossOrigin),
      this.textureLoader.setRequestHeader(this.options.requestHeader),
      (this.fileLoader = new Ql(this.options.manager)),
      this.fileLoader.setResponseType("arraybuffer"),
      "use-credentials" === this.options.crossOrigin &&
        this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const i = this,
      n = this.json,
      r = this.extensions;
    this.cache.removeAll(),
      this._invokeAll(function (e) {
        return e._markDefs && e._markDefs();
      }),
      Promise.all(
        this._invokeAll(function (e) {
          return e.beforeRoot && e.beforeRoot();
        })
      )
        .then(function () {
          return Promise.all([
            i.getDependencies("scene"),
            i.getDependencies("animation"),
            i.getDependencies("camera"),
          ]);
        })
        .then(function (t) {
          const s = {
            scene: t[0][n.scene || 0],
            scenes: t[0],
            animations: t[1],
            cameras: t[2],
            asset: n.asset,
            parser: i,
            userData: {},
          };
          rp(r, s, n),
            sp(s, n),
            Promise.all(
              i._invokeAll(function (e) {
                return e.afterRoot && e.afterRoot(s);
              })
            ).then(function () {
              e(s);
            });
        })
        .catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [],
      t = this.json.skins || [],
      i = this.json.meshes || [];
    for (let n = 0, r = t.length; n < r; n++) {
      const i = t[n].joints;
      for (let t = 0, n = i.length; t < n; t++) e[i[t]].isBone = !0;
    }
    for (let n = 0, r = e.length; n < r; n++) {
      const t = e[n];
      void 0 !== t.mesh &&
        (this._addNodeRef(this.meshCache, t.mesh),
        void 0 !== t.skin && (i[t.mesh].isSkinnedMesh = !0)),
        void 0 !== t.camera && this._addNodeRef(this.cameraCache, t.camera);
    }
  }
  _addNodeRef(e, t) {
    void 0 !== t &&
      (void 0 === e.refs[t] && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, i) {
    if (e.refs[t] <= 1) return i;
    const n = i.clone(),
      r = (e, t) => {
        const i = this.associations.get(e);
        null != i && this.associations.set(t, i);
        for (const [n, s] of e.children.entries()) r(s, t.children[n]);
      };
    return r(i, n), (n.name += "_instance_" + e.uses[t]++), n;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let i = 0; i < t.length; i++) {
      const n = e(t[i]);
      if (n) return n;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const i = [];
    for (let n = 0; n < t.length; n++) {
      const r = e(t[n]);
      r && i.push(r);
    }
    return i;
  }
  getDependency(e, t) {
    const i = e + ":" + t;
    let n = this.cache.get(i);
    if (!n) {
      switch (e) {
        case "scene":
          n = this.loadScene(t);
          break;
        case "node":
          n = this.loadNode(t);
          break;
        case "mesh":
          n = this._invokeOne(function (e) {
            return e.loadMesh && e.loadMesh(t);
          });
          break;
        case "accessor":
          n = this.loadAccessor(t);
          break;
        case "bufferView":
          n = this._invokeOne(function (e) {
            return e.loadBufferView && e.loadBufferView(t);
          });
          break;
        case "buffer":
          n = this.loadBuffer(t);
          break;
        case "material":
          n = this._invokeOne(function (e) {
            return e.loadMaterial && e.loadMaterial(t);
          });
          break;
        case "texture":
          n = this._invokeOne(function (e) {
            return e.loadTexture && e.loadTexture(t);
          });
          break;
        case "skin":
          n = this.loadSkin(t);
          break;
        case "animation":
          n = this._invokeOne(function (e) {
            return e.loadAnimation && e.loadAnimation(t);
          });
          break;
        case "camera":
          n = this.loadCamera(t);
          break;
        default:
          throw new Error("Unknown type: " + e);
      }
      this.cache.add(i, n);
    }
    return n;
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const i = this,
        n = this.json[e + ("mesh" === e ? "es" : "s")] || [];
      (t = Promise.all(
        n.map(function (t, n) {
          return i.getDependency(e, n);
        })
      )),
        this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e],
      i = this.fileLoader;
    if (t.type && "arraybuffer" !== t.type)
      throw new Error(
        "THREE.GLTFLoader: " + t.type + " buffer type is not supported."
      );
    if (void 0 === t.uri && 0 === e)
      return Promise.resolve(this.extensions[yd.KHR_BINARY_GLTF].body);
    const n = this.options;
    return new Promise(function (e, r) {
      i.load(gc.resolveURL(t.uri, n.path), e, void 0, function () {
        r(
          new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".')
        );
      });
    });
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function (e) {
      const i = t.byteLength || 0,
        n = t.byteOffset || 0;
      return e.slice(n, n + i);
    });
  }
  loadAccessor(e) {
    const t = this,
      i = this.json,
      n = this.json.accessors[e];
    if (void 0 === n.bufferView && void 0 === n.sparse)
      return Promise.resolve(null);
    const r = [];
    return (
      void 0 !== n.bufferView
        ? r.push(this.getDependency("bufferView", n.bufferView))
        : r.push(null),
      void 0 !== n.sparse &&
        (r.push(this.getDependency("bufferView", n.sparse.indices.bufferView)),
        r.push(this.getDependency("bufferView", n.sparse.values.bufferView))),
      Promise.all(r).then(function (e) {
        const r = e[0],
          s = Jd[n.type],
          a = Yd[n.componentType],
          o = a.BYTES_PER_ELEMENT,
          l = o * s,
          c = n.byteOffset || 0,
          h =
            void 0 !== n.bufferView
              ? i.bufferViews[n.bufferView].byteStride
              : void 0,
          u = !0 === n.normalized;
        let d, p;
        if (h && h !== l) {
          const e = Math.floor(c / h),
            i =
              "InterleavedBuffer:" +
              n.bufferView +
              ":" +
              n.componentType +
              ":" +
              e +
              ":" +
              n.count;
          let l = t.cache.get(i);
          l ||
            ((d = new a(r, e * h, (n.count * h) / o)),
            (l = new zo(d, h / o)),
            t.cache.add(i, l)),
            (p = new Fo(l, s, (c % h) / o, u));
        } else (d = null === r ? new a(n.count * s) : new a(r, c, n.count * s)), (p = new nr(d, s, u));
        if (void 0 !== n.sparse) {
          const t = Jd.SCALAR,
            i = Yd[n.sparse.indices.componentType],
            o = n.sparse.indices.byteOffset || 0,
            l = n.sparse.values.byteOffset || 0,
            c = new i(e[1], o, n.sparse.count * t),
            h = new a(e[2], l, n.sparse.count * s);
          null !== r && (p = new nr(p.array.slice(), p.itemSize, p.normalized));
          for (let e = 0, n = c.length; e < n; e++) {
            const t = c[e];
            if (
              (p.setX(t, h[e * s]),
              s >= 2 && p.setY(t, h[e * s + 1]),
              s >= 3 && p.setZ(t, h[e * s + 2]),
              s >= 4 && p.setW(t, h[e * s + 3]),
              s >= 5)
            )
              throw new Error(
                "THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute."
              );
          }
        }
        return p;
      })
    );
  }
  loadTexture(e) {
    const t = this.json,
      i = this.options,
      n = t.textures[e].source,
      r = t.images[n];
    let s = this.textureLoader;
    if (r.uri) {
      const e = i.manager.getHandler(r.uri);
      null !== e && (s = e);
    }
    return this.loadTextureImage(e, n, s);
  }
  loadTextureImage(e, t, i) {
    const n = this,
      r = this.json,
      s = r.textures[e],
      a = r.images[t],
      o = (a.uri || a.bufferView) + ":" + s.sampler;
    if (this.textureCache[o]) return this.textureCache[o];
    const l = this.loadImageSource(t, i)
      .then(function (t) {
        (t.flipY = !1), (t.name = s.name || a.name || "");
        const i = (r.samplers || {})[s.sampler] || {};
        return (
          (t.magFilter = Kd[i.magFilter] || He),
          (t.minFilter = Kd[i.minFilter] || We),
          (t.wrapS = Zd[i.wrapS] || ze),
          (t.wrapT = Zd[i.wrapT] || ze),
          n.associations.set(t, { textures: e }),
          t
        );
      })
      .catch(function () {
        return null;
      });
    return (this.textureCache[o] = l), l;
  }
  loadImageSource(e, t) {
    const i = this,
      n = this.json,
      r = this.options;
    if (void 0 !== this.sourceCache[e])
      return this.sourceCache[e].then((e) => e.clone());
    const s = n.images[e],
      a = self.URL || self.webkitURL;
    let o = s.uri || "",
      l = !1;
    if (void 0 !== s.bufferView)
      o = i.getDependency("bufferView", s.bufferView).then(function (e) {
        l = !0;
        const t = new Blob([e], { type: s.mimeType });
        return (o = a.createObjectURL(t)), o;
      });
    else if (void 0 === s.uri)
      throw new Error(
        "THREE.GLTFLoader: Image " + e + " is missing URI and bufferView"
      );
    const c = Promise.resolve(o)
      .then(function (e) {
        return new Promise(function (i, n) {
          let s = i;
          !0 === t.isImageBitmapLoader &&
            (s = function (e) {
              const t = new Di(e);
              (t.needsUpdate = !0), i(t);
            }),
            t.load(gc.resolveURL(e, r.path), s, void 0, n);
        });
      })
      .then(function (e) {
        var t;
        return (
          !0 === l && a.revokeObjectURL(o),
          (e.userData.mimeType =
            s.mimeType ||
            ((t = s.uri).search(/\.jpe?g($|\?)/i) > 0 ||
            0 === t.search(/^data\:image\/jpeg/)
              ? "image/jpeg"
              : t.search(/\.webp($|\?)/i) > 0 ||
                0 === t.search(/^data\:image\/webp/)
              ? "image/webp"
              : "image/png")),
          e
        );
      })
      .catch(function (e) {
        throw (console.error("THREE.GLTFLoader: Couldn't load texture", o), e);
      });
    return (this.sourceCache[e] = c), c;
  }
  assignTexture(e, t, i, n) {
    const r = this;
    return this.getDependency("texture", i.index).then(function (s) {
      if (
        (void 0 === i.texCoord ||
          0 == i.texCoord ||
          ("aoMap" === t && 1 == i.texCoord) ||
          console.warn(
            "THREE.GLTFLoader: Custom UV set " +
              i.texCoord +
              " for texture " +
              t +
              " not yet supported."
          ),
        r.extensions[yd.KHR_TEXTURE_TRANSFORM])
      ) {
        const e =
          void 0 !== i.extensions
            ? i.extensions[yd.KHR_TEXTURE_TRANSFORM]
            : void 0;
        if (e) {
          const t = r.associations.get(s);
          (s = r.extensions[yd.KHR_TEXTURE_TRANSFORM].extendTexture(s, e)),
            r.associations.set(s, t);
        }
      }
      return void 0 !== n && (s.encoding = n), (e[t] = s), s;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let i = e.material;
    const n = void 0 === t.attributes.tangent,
      r = void 0 !== t.attributes.color,
      s = void 0 === t.attributes.normal;
    if (e.isPoints) {
      const e = "PointsMaterial:" + i.uuid;
      let t = this.cache.get(e);
      t ||
        ((t = new ml()),
        $n.prototype.copy.call(t, i),
        t.color.copy(i.color),
        (t.map = i.map),
        (t.sizeAttenuation = !1),
        this.cache.add(e, t)),
        (i = t);
    } else if (e.isLine) {
      const e = "LineBasicMaterial:" + i.uuid;
      let t = this.cache.get(e);
      t ||
        ((t = new nl()),
        $n.prototype.copy.call(t, i),
        t.color.copy(i.color),
        this.cache.add(e, t)),
        (i = t);
    }
    if (n || r || s) {
      let e = "ClonedMaterial:" + i.uuid + ":";
      i.isGLTFSpecularGlossinessMaterial && (e += "specular-glossiness:"),
        n && (e += "derivative-tangents:"),
        r && (e += "vertex-colors:"),
        s && (e += "flat-shading:");
      let t = this.cache.get(e);
      t ||
        ((t = i.clone()),
        r && (t.vertexColors = !0),
        s && (t.flatShading = !0),
        n &&
          (t.normalScale && (t.normalScale.y *= -1),
          t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)),
        this.cache.add(e, t),
        this.associations.set(t, this.associations.get(i))),
        (i = t);
    }
    i.aoMap &&
      void 0 === t.attributes.uv2 &&
      void 0 !== t.attributes.uv &&
      t.setAttribute("uv2", t.attributes.uv),
      (e.material = i);
  }
  getMaterialType() {
    return wl;
  }
  loadMaterial(e) {
    const t = this,
      i = this.json,
      n = this.extensions,
      r = i.materials[e];
    let s;
    const a = {},
      o = r.extensions || {},
      l = [];
    if (o[yd.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
      const e = n[yd.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
      (s = e.getMaterialType()), l.push(e.extendParams(a, r, t));
    } else if (o[yd.KHR_MATERIALS_UNLIT]) {
      const e = n[yd.KHR_MATERIALS_UNLIT];
      (s = e.getMaterialType()), l.push(e.extendParams(a, r, t));
    } else {
      const i = r.pbrMetallicRoughness || {};
      if (
        ((a.color = new Ei(1, 1, 1)),
        (a.opacity = 1),
        Array.isArray(i.baseColorFactor))
      ) {
        const e = i.baseColorFactor;
        a.color.fromArray(e), (a.opacity = e[3]);
      }
      void 0 !== i.baseColorTexture &&
        l.push(t.assignTexture(a, "map", i.baseColorTexture, jt)),
        (a.metalness = void 0 !== i.metallicFactor ? i.metallicFactor : 1),
        (a.roughness = void 0 !== i.roughnessFactor ? i.roughnessFactor : 1),
        void 0 !== i.metallicRoughnessTexture &&
          (l.push(
            t.assignTexture(a, "metalnessMap", i.metallicRoughnessTexture)
          ),
          l.push(
            t.assignTexture(a, "roughnessMap", i.metallicRoughnessTexture)
          )),
        (s = this._invokeOne(function (t) {
          return t.getMaterialType && t.getMaterialType(e);
        })),
        l.push(
          Promise.all(
            this._invokeAll(function (t) {
              return t.extendMaterialParams && t.extendMaterialParams(e, a);
            })
          )
        );
    }
    !0 === r.doubleSided && (a.side = j);
    const c = r.alphaMode || tp;
    if (
      (c === np
        ? ((a.transparent = !0), (a.depthWrite = !1))
        : ((a.transparent = !1),
          c === ip &&
            (a.alphaTest = void 0 !== r.alphaCutoff ? r.alphaCutoff : 0.5)),
      void 0 !== r.normalTexture &&
        s !== er &&
        (l.push(t.assignTexture(a, "normalMap", r.normalTexture)),
        (a.normalScale = new di(1, 1)),
        void 0 !== r.normalTexture.scale))
    ) {
      const e = r.normalTexture.scale;
      a.normalScale.set(e, e);
    }
    return (
      void 0 !== r.occlusionTexture &&
        s !== er &&
        (l.push(t.assignTexture(a, "aoMap", r.occlusionTexture)),
        void 0 !== r.occlusionTexture.strength &&
          (a.aoMapIntensity = r.occlusionTexture.strength)),
      void 0 !== r.emissiveFactor &&
        s !== er &&
        (a.emissive = new Ei().fromArray(r.emissiveFactor)),
      void 0 !== r.emissiveTexture &&
        s !== er &&
        l.push(t.assignTexture(a, "emissiveMap", r.emissiveTexture, jt)),
      Promise.all(l).then(function () {
        let i;
        return (
          (i =
            s === Vd
              ? n[yd.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a)
              : new s(a)),
          r.name && (i.name = r.name),
          sp(i, r),
          t.associations.set(i, { materials: e }),
          r.extensions && rp(n, i, r),
          i
        );
      })
    );
  }
  createUniqueName(e) {
    const t = Tc.sanitizeNodeName(e || "");
    let i = t;
    for (let n = 1; this.nodeNamesUsed[i]; ++n) i = t + "_" + n;
    return (this.nodeNamesUsed[i] = !0), i;
  }
  loadGeometries(e) {
    const t = this,
      i = this.extensions,
      n = this.primitiveCache;
    function r(e) {
      return i[yd.KHR_DRACO_MESH_COMPRESSION]
        .decodePrimitive(e, t)
        .then(function (i) {
          return dp(i, e, t);
        });
    }
    const s = [];
    for (let a = 0, o = e.length; a < o; a++) {
      const i = e[a],
        o = op(i),
        l = n[o];
      if (l) s.push(l.promise);
      else {
        let e;
        (e =
          i.extensions && i.extensions[yd.KHR_DRACO_MESH_COMPRESSION]
            ? r(i)
            : dp(new mr(), i, t)),
          (n[o] = { primitive: i, promise: e }),
          s.push(e);
      }
    }
    return Promise.all(s);
  }
  loadMesh(e) {
    const t = this,
      i = this.json,
      n = this.extensions,
      r = i.meshes[e],
      s = r.primitives,
      a = [];
    for (let l = 0, c = s.length; l < c; l++) {
      const e =
        void 0 === s[l].material
          ? (void 0 === (o = this.cache).DefaultMaterial &&
              (o.DefaultMaterial = new wl({
                color: 16777215,
                emissive: 0,
                metalness: 1,
                roughness: 1,
                transparent: !1,
                depthTest: !0,
                side: G,
              })),
            o.DefaultMaterial)
          : this.getDependency("material", s[l].material);
      a.push(e);
    }
    var o;
    return (
      a.push(t.loadGeometries(s)),
      Promise.all(a).then(function (i) {
        const a = i.slice(0, i.length - 1),
          o = i[i.length - 1],
          l = [];
        for (let h = 0, u = o.length; h < u; h++) {
          const i = o[h],
            c = s[h];
          let u;
          const d = a[h];
          if (
            c.mode === Xd.TRIANGLES ||
            c.mode === Xd.TRIANGLE_STRIP ||
            c.mode === Xd.TRIANGLE_FAN ||
            void 0 === c.mode
          )
            (u = !0 === r.isSkinnedMesh ? new Wo(i, d) : new Dr(i, d)),
              !0 !== u.isSkinnedMesh ||
                u.geometry.attributes.skinWeight.normalized ||
                u.normalizeSkinWeights(),
              c.mode === Xd.TRIANGLE_STRIP
                ? (u.geometry = pp(u.geometry, 1))
                : c.mode === Xd.TRIANGLE_FAN &&
                  (u.geometry = pp(u.geometry, Gt));
          else if (c.mode === Xd.LINES) u = new dl(i, d);
          else if (c.mode === Xd.LINE_STRIP) u = new cl(i, d);
          else if (c.mode === Xd.LINE_LOOP) u = new pl(i, d);
          else {
            if (c.mode !== Xd.POINTS)
              throw new Error(
                "THREE.GLTFLoader: Primitive mode unsupported: " + c.mode
              );
            u = new xl(i, d);
          }
          Object.keys(u.geometry.morphAttributes).length > 0 && ap(u, r),
            (u.name = t.createUniqueName(r.name || "mesh_" + e)),
            sp(u, r),
            c.extensions && rp(n, u, c),
            t.assignFinalMaterial(u),
            l.push(u);
        }
        for (let n = 0, r = l.length; n < r; n++)
          t.associations.set(l[n], { meshes: e, primitives: n });
        if (1 === l.length) return l[0];
        const c = new Eo();
        t.associations.set(c, { meshes: e });
        for (let e = 0, t = l.length; e < t; e++) c.add(l[e]);
        return c;
      })
    );
  }
  loadCamera(e) {
    let t;
    const i = this.json.cameras[e],
      n = i[i.type];
    if (n)
      return (
        "perspective" === i.type
          ? (t = new Br(
              n.yfov * ri,
              n.aspectRatio || 1,
              n.znear || 1,
              n.zfar || 2e6
            ))
          : "orthographic" === i.type &&
            (t = new hs(-n.xmag, n.xmag, n.ymag, -n.ymag, n.znear, n.zfar)),
        i.name && (t.name = this.createUniqueName(i.name)),
        sp(t, i),
        Promise.resolve(t)
      );
    console.warn("THREE.GLTFLoader: Missing camera parameters.");
  }
  loadSkin(e) {
    const t = this.json.skins[e],
      i = { joints: t.joints };
    return void 0 === t.inverseBindMatrices
      ? Promise.resolve(i)
      : this.getDependency("accessor", t.inverseBindMatrices).then(function (
          e
        ) {
          return (i.inverseBindMatrices = e), i;
        });
  }
  loadAnimation(e) {
    const t = this.json.animations[e],
      i = [],
      n = [],
      r = [],
      s = [],
      a = [];
    for (let o = 0, l = t.channels.length; o < l; o++) {
      const e = t.channels[o],
        l = t.samplers[e.sampler],
        c = e.target,
        h = c.node,
        u = void 0 !== t.parameters ? t.parameters[l.input] : l.input,
        d = void 0 !== t.parameters ? t.parameters[l.output] : l.output;
      i.push(this.getDependency("node", h)),
        n.push(this.getDependency("accessor", u)),
        r.push(this.getDependency("accessor", d)),
        s.push(l),
        a.push(c);
    }
    return Promise.all([
      Promise.all(i),
      Promise.all(n),
      Promise.all(r),
      Promise.all(s),
      Promise.all(a),
    ]).then(function (i) {
      const n = i[0],
        r = i[1],
        s = i[2],
        a = i[3],
        o = i[4],
        l = [];
      for (let e = 0, t = n.length; e < t; e++) {
        const t = n[e],
          i = r[e],
          c = s[e],
          h = a[e],
          u = o[e];
        if (void 0 === t) continue;
        let d;
        switch ((t.updateMatrix(), $d[u.path])) {
          case $d.weights:
            d = kl;
            break;
          case $d.rotation:
            d = Vl;
            break;
          default:
            d = Gl;
        }
        const p = t.name ? t.name : t.uuid,
          m = void 0 !== h.interpolation ? ep[h.interpolation] : Vt,
          f = [];
        $d[u.path] === $d.weights
          ? t.traverse(function (e) {
              e.morphTargetInfluences && f.push(e.name ? e.name : e.uuid);
            })
          : f.push(p);
        let g = c.array;
        if (c.normalized) {
          const e = cp(g.constructor),
            t = new Float32Array(g.length);
          for (let i = 0, n = g.length; i < n; i++) t[i] = g[i] * e;
          g = t;
        }
        for (let e = 0, n = f.length; e < n; e++) {
          const t = new d(f[e] + "." + $d[u.path], i.array, g, m);
          "CUBICSPLINE" === h.interpolation &&
            ((t.createInterpolant = function (e) {
              return new (this instanceof Vl ? qd : Wd)(
                this.times,
                this.values,
                this.getValueSize() / 3,
                e
              );
            }),
            (t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline =
              !0)),
            l.push(t);
        }
      }
      const c = t.name ? t.name : "animation_" + e;
      return new Wl(c, void 0, l);
    });
  }
  createNodeMesh(e) {
    const t = this.json,
      i = this,
      n = t.nodes[e];
    return void 0 === n.mesh
      ? null
      : i.getDependency("mesh", n.mesh).then(function (e) {
          const t = i._getNodeRef(i.meshCache, n.mesh, e);
          return (
            void 0 !== n.weights &&
              t.traverse(function (e) {
                if (e.isMesh)
                  for (let t = 0, i = n.weights.length; t < i; t++)
                    e.morphTargetInfluences[t] = n.weights[t];
              }),
            t
          );
        });
  }
  loadNode(e) {
    const t = this.json,
      i = this.extensions,
      n = this,
      r = t.nodes[e],
      s = r.name ? n.createUniqueName(r.name) : "";
    return (function () {
      const t = [],
        i = n._invokeOne(function (t) {
          return t.createNodeMesh && t.createNodeMesh(e);
        });
      return (
        i && t.push(i),
        void 0 !== r.camera &&
          t.push(
            n.getDependency("camera", r.camera).then(function (e) {
              return n._getNodeRef(n.cameraCache, r.camera, e);
            })
          ),
        n
          ._invokeAll(function (t) {
            return t.createNodeAttachment && t.createNodeAttachment(e);
          })
          .forEach(function (e) {
            t.push(e);
          }),
        Promise.all(t)
      );
    })().then(function (t) {
      let a;
      if (
        ((a =
          !0 === r.isBone
            ? new jo()
            : t.length > 1
            ? new Eo()
            : 1 === t.length
            ? t[0]
            : new Bn()),
        a !== t[0])
      )
        for (let e = 0, i = t.length; e < i; e++) a.add(t[e]);
      if (
        (r.name && ((a.userData.name = r.name), (a.name = s)),
        sp(a, r),
        r.extensions && rp(i, a, r),
        void 0 !== r.matrix)
      ) {
        const e = new fn();
        e.fromArray(r.matrix), a.applyMatrix4(e);
      } else void 0 !== r.translation && a.position.fromArray(r.translation), void 0 !== r.rotation && a.quaternion.fromArray(r.rotation), void 0 !== r.scale && a.scale.fromArray(r.scale);
      return (
        n.associations.has(a) || n.associations.set(a, {}),
        (n.associations.get(a).nodes = e),
        a
      );
    });
  }
  loadScene(e) {
    const t = this.json,
      i = this.extensions,
      n = this.json.scenes[e],
      r = this,
      s = new Eo();
    n.name && (s.name = r.createUniqueName(n.name)),
      sp(s, n),
      n.extensions && rp(i, s, n);
    const a = n.nodes || [],
      o = [];
    for (let l = 0, c = a.length; l < c; l++) o.push(up(a[l], s, t, r));
    return Promise.all(o).then(function () {
      return (
        (r.associations = ((e) => {
          const t = new Map();
          for (const [i, n] of r.associations)
            (i instanceof $n || i instanceof Di) && t.set(i, n);
          return (
            e.traverse((e) => {
              const i = r.associations.get(e);
              null != i && t.set(e, i);
            }),
            t
          );
        })(s)),
        s
      );
    });
  }
}
function up(e, t, i, n) {
  const r = i.nodes[e];
  return n
    .getDependency("node", e)
    .then(function (e) {
      if (void 0 === r.skin) return e;
      let t;
      return n
        .getDependency("skin", r.skin)
        .then(function (e) {
          t = e;
          const i = [];
          for (let r = 0, s = t.joints.length; r < s; r++)
            i.push(n.getDependency("node", t.joints[r]));
          return Promise.all(i);
        })
        .then(function (i) {
          return (
            e.traverse(function (e) {
              if (!e.isMesh) return;
              const n = [],
                r = [];
              for (let s = 0, a = i.length; s < a; s++) {
                const e = i[s];
                if (e) {
                  n.push(e);
                  const i = new fn();
                  void 0 !== t.inverseBindMatrices &&
                    i.fromArray(t.inverseBindMatrices.array, 16 * s),
                    r.push(i);
                } else
                  console.warn(
                    'THREE.GLTFLoader: Joint "%s" could not be found.',
                    t.joints[s]
                  );
              }
              e.bind(new Ko(n, r), e.matrixWorld);
            }),
            e
          );
        });
    })
    .then(function (e) {
      t.add(e);
      const s = [];
      if (r.children) {
        const t = r.children;
        for (let r = 0, a = t.length; r < a; r++) {
          const a = t[r];
          s.push(up(a, e, i, n));
        }
      }
      return Promise.all(s);
    });
}
function dp(e, t, i) {
  const n = t.attributes,
    r = [];
  function s(t, n) {
    return i.getDependency("accessor", t).then(function (t) {
      e.setAttribute(n, t);
    });
  }
  for (const a in n) {
    const t = Qd[a] || a.toLowerCase();
    t in e.attributes || r.push(s(n[a], t));
  }
  if (void 0 !== t.indices && !e.index) {
    const n = i.getDependency("accessor", t.indices).then(function (t) {
      e.setIndex(t);
    });
    r.push(n);
  }
  return (
    sp(e, t),
    (function (e, t, i) {
      const n = t.attributes,
        r = new Vi();
      if (void 0 === n.POSITION) return;
      {
        const e = i.json.accessors[n.POSITION],
          t = e.min,
          s = e.max;
        if (void 0 === t || void 0 === s)
          return void console.warn(
            "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
          );
        if (
          (r.set(new Fi(t[0], t[1], t[2]), new Fi(s[0], s[1], s[2])),
          e.normalized)
        ) {
          const t = cp(Yd[e.componentType]);
          r.min.multiplyScalar(t), r.max.multiplyScalar(t);
        }
      }
      const s = t.targets;
      if (void 0 !== s) {
        const e = new Fi(),
          t = new Fi();
        for (let n = 0, r = s.length; n < r; n++) {
          const r = s[n];
          if (void 0 !== r.POSITION) {
            const n = i.json.accessors[r.POSITION],
              s = n.min,
              a = n.max;
            if (void 0 !== s && void 0 !== a) {
              if (
                (t.setX(Math.max(Math.abs(s[0]), Math.abs(a[0]))),
                t.setY(Math.max(Math.abs(s[1]), Math.abs(a[1]))),
                t.setZ(Math.max(Math.abs(s[2]), Math.abs(a[2]))),
                n.normalized)
              ) {
                const e = cp(Yd[n.componentType]);
                t.multiplyScalar(e);
              }
              e.max(t);
            } else
              console.warn(
                "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
              );
          }
        }
        r.expandByVector(e);
      }
      e.boundingBox = r;
      const a = new an();
      r.getCenter(a.center),
        (a.radius = r.min.distanceTo(r.max) / 2),
        (e.boundingSphere = a);
    })(e, t, i),
    Promise.all(r).then(function () {
      return void 0 !== t.targets
        ? (function (e, t, i) {
            let n = !1,
              r = !1,
              s = !1;
            for (let c = 0, h = t.length; c < h; c++) {
              const e = t[c];
              if (
                (void 0 !== e.POSITION && (n = !0),
                void 0 !== e.NORMAL && (r = !0),
                void 0 !== e.COLOR_0 && (s = !0),
                n && r && s)
              )
                break;
            }
            if (!n && !r && !s) return Promise.resolve(e);
            const a = [],
              o = [],
              l = [];
            for (let c = 0, h = t.length; c < h; c++) {
              const h = t[c];
              if (n) {
                const t =
                  void 0 !== h.POSITION
                    ? i.getDependency("accessor", h.POSITION)
                    : e.attributes.position;
                a.push(t);
              }
              if (r) {
                const t =
                  void 0 !== h.NORMAL
                    ? i.getDependency("accessor", h.NORMAL)
                    : e.attributes.normal;
                o.push(t);
              }
              if (s) {
                const t =
                  void 0 !== h.COLOR_0
                    ? i.getDependency("accessor", h.COLOR_0)
                    : e.attributes.color;
                l.push(t);
              }
            }
            return Promise.all([
              Promise.all(a),
              Promise.all(o),
              Promise.all(l),
            ]).then(function (t) {
              const i = t[0],
                a = t[1],
                o = t[2];
              return (
                n && (e.morphAttributes.position = i),
                r && (e.morphAttributes.normal = a),
                s && (e.morphAttributes.color = o),
                (e.morphTargetsRelative = !0),
                e
              );
            });
          })(e, t.targets, i)
        : e;
    })
  );
}
function pp(e, t) {
  let i = e.getIndex();
  if (null === i) {
    const t = [],
      n = e.getAttribute("position");
    if (void 0 === n)
      return (
        console.error(
          "THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
        ),
        e
      );
    for (let e = 0; e < n.count; e++) t.push(e);
    e.setIndex(t), (i = e.getIndex());
  }
  const n = i.count - 2,
    r = [];
  if (t === Gt)
    for (let a = 1; a <= n; a++)
      r.push(i.getX(0)), r.push(i.getX(a)), r.push(i.getX(a + 1));
  else
    for (let a = 0; a < n; a++)
      a % 2 == 0
        ? (r.push(i.getX(a)), r.push(i.getX(a + 1)), r.push(i.getX(a + 2)))
        : (r.push(i.getX(a + 2)), r.push(i.getX(a + 1)), r.push(i.getX(a)));
  r.length / 3 !== n &&
    console.error(
      "THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
    );
  const s = e.clone();
  return s.setIndex(r), s;
}
const mp = new (class extends Kl {
  constructor(e) {
    super(e),
      (this.dracoLoader = null),
      (this.ktx2Loader = null),
      (this.meshoptDecoder = null),
      (this.pluginCallbacks = []),
      this.register(function (e) {
        return new Sd(e);
      }),
      this.register(function (e) {
        return new Rd(e);
      }),
      this.register(function (e) {
        return new Dd(e);
      }),
      this.register(function (e) {
        return new Ed(e);
      }),
      this.register(function (e) {
        return new Ad(e);
      }),
      this.register(function (e) {
        return new Cd(e);
      }),
      this.register(function (e) {
        return new Pd(e);
      }),
      this.register(function (e) {
        return new wd(e);
      }),
      this.register(function (e) {
        return new Ld(e);
      }),
      this.register(function (e) {
        return new Td(e);
      }),
      this.register(function (e) {
        return new bd(e);
      }),
      this.register(function (e) {
        return new Id(e);
      }),
      this.register(function (e) {
        return new Od(e);
      });
  }
  load(e, t, i, n) {
    const r = this;
    let s;
    (s =
      "" !== this.resourcePath
        ? this.resourcePath
        : "" !== this.path
        ? this.path
        : gc.extractUrlBase(e)),
      this.manager.itemStart(e);
    const a = function (t) {
        n ? n(t) : console.error(t),
          r.manager.itemError(e),
          r.manager.itemEnd(e);
      },
      o = new Ql(this.manager);
    o.setPath(this.path),
      o.setResponseType("arraybuffer"),
      o.setRequestHeader(this.requestHeader),
      o.setWithCredentials(this.withCredentials),
      o.load(
        e,
        function (i) {
          try {
            r.parse(
              i,
              s,
              function (i) {
                t(i), r.manager.itemEnd(e);
              },
              a
            );
          } catch (n) {
            a(n);
          }
        },
        i,
        a
      );
  }
  setDRACOLoader(e) {
    return (this.dracoLoader = e), this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(e) {
    return (this.ktx2Loader = e), this;
  }
  setMeshoptDecoder(e) {
    return (this.meshoptDecoder = e), this;
  }
  register(e) {
    return (
      -1 === this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.push(e),
      this
    );
  }
  unregister(e) {
    return (
      -1 !== this.pluginCallbacks.indexOf(e) &&
        this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
      this
    );
  }
  parse(e, t, i, n) {
    let r;
    const s = {},
      a = {};
    if ("string" == typeof e) r = JSON.parse(e);
    else if (e instanceof ArrayBuffer) {
      if (gc.decodeText(new Uint8Array(e, 0, 4)) === Nd) {
        try {
          s[yd.KHR_BINARY_GLTF] = new Fd(e);
        } catch (l) {
          return void (n && n(l));
        }
        r = JSON.parse(s[yd.KHR_BINARY_GLTF].content);
      } else r = JSON.parse(gc.decodeText(new Uint8Array(e)));
    } else r = e;
    if (void 0 === r.asset || r.asset.version[0] < 2)
      return void (
        n &&
        n(
          new Error(
            "THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."
          )
        )
      );
    const o = new hp(r, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder,
    });
    o.fileLoader.setRequestHeader(this.requestHeader);
    for (let c = 0; c < this.pluginCallbacks.length; c++) {
      const e = this.pluginCallbacks[c](o);
      (a[e.name] = e), (s[e.name] = !0);
    }
    if (r.extensionsUsed)
      for (let c = 0; c < r.extensionsUsed.length; ++c) {
        const e = r.extensionsUsed[c],
          t = r.extensionsRequired || [];
        switch (e) {
          case yd.KHR_MATERIALS_UNLIT:
            s[e] = new Md();
            break;
          case yd.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
            s[e] = new Hd();
            break;
          case yd.KHR_DRACO_MESH_COMPRESSION:
            s[e] = new kd(r, this.dracoLoader);
            break;
          case yd.KHR_TEXTURE_TRANSFORM:
            s[e] = new Bd();
            break;
          case yd.KHR_MESH_QUANTIZATION:
            s[e] = new Gd();
            break;
          default:
            t.indexOf(e) >= 0 &&
              void 0 === a[e] &&
              console.warn('THREE.GLTFLoader: Unknown extension "' + e + '".');
        }
      }
    o.setExtensions(s), o.setPlugins(a), o.parse(i, n);
  }
  parseAsync(e, t) {
    const i = this;
    return new Promise(function (n, r) {
      i.parse(e, t, n, r);
    });
  }
})();
async function fp(e, t = {}) {
  return new Promise((i, n) => {
    mp.load(
      e,
      (n) => {
        P.add(e, n), t.onLoad && t.onLoad(n), i(n);
      },
      null,
      n
    );
  });
}
fp.loader = { name: "gltf", extensions: [".gltf", ".glb"], function: fp };
const gp = "/assets/Bloc_V1.36671cf24adb976c.glb",
  vp = "/assets/Bunny.a10498b94adb976c.glb";
let _p = new Fi(),
  xp = new Fi(),
  yp = new Ui(),
  bp = new fn();
function Mp({ attributes: e } = {}) {
  e || (e = ["position", "normal", "uv"]);
  let t = null,
    i = 0;
  const n = [],
    r = new an(),
    s = new Vi(),
    a = {};
  return (
    e.forEach((e) => {
      a[e] = { length: 0, arrays: [] };
    }),
    {
      add: function (e, { transforms: t, matrix: o } = {}) {
        o
          ? (e = e.clone()).applyMatrix4(o)
          : t &&
            ((e = e.clone()),
            _p.fromArray(t, 0),
            xp.fromArray(t, 3),
            yp.fromArray(t, 6),
            bp.compose(_p, yp, xp),
            e.applyMatrix4(bp));
        e.boundingSphere && r.union(e.boundingSphere);
        e.boundingBox && s.union(e.boundingBox);
        for (let i in a) {
          const t = e.attributes[i].array,
            n = a[i];
          n.arrays.push(t), (n.length += t.length);
        }
        const l = e.index;
        for (let r = 0; r < l.count; ++r) n.push(l.getX(r) + i);
        i += e.attributes.position.count;
      },
      merge: function () {
        if (t) return t;
        if (((t = new mr()), a.position)) {
          const e = o("position"),
            i = new nr(e, 3, !1);
          t.setAttribute("position", i);
        }
        if (a.normal) {
          const e = o("normal"),
            i = new nr(e, 3, !1);
          t.setAttribute("normal", i);
        }
        if (a.uv) {
          const e = o("uv"),
            i = new nr(e, 2, !1);
          t.setAttribute("uv", i);
        }
        if (a.uv2) {
          const e = o("uv2"),
            i = new nr(e, 2, !1);
          t.setAttribute("alphaUV", i);
        }
        if (a.alphaUV) {
          const e = o("alphaUV"),
            i = new nr(e, 2, !1);
          t.setAttribute("alphaUV", i);
        }
        return (
          t.setIndex(n),
          (t.boundingBox = s.clone()),
          (t.boundingSphere = r.clone()),
          t
        );
      },
      getPositionLength: function () {
        return a.position.length;
      },
      getIndexLength: function () {
        return n.length;
      },
    }
  );
  function o(e) {
    const t = a[e],
      i = new Float32Array(t.length);
    let n = 0;
    for (let r = 0, s = t.arrays.length; r < s; r++)
      i.set(t.arrays[r], n), (n += t.arrays[r].length);
    return i;
  }
}
const wp = "/assets/alpha-map.a7f0707d4adb976c.json",
  Sp = "/assets/bunny-face.570c18234adb976c.json",
  Tp = "/assets/sprites.473b79104adb976c.json";
function Ep(e, t, i, n = 0) {
  const r = t.size,
    s = t.scale / Math.max(r.w, r.h),
    a = {},
    o = e.anchor || e.pivot || { x: 0.5, y: 0.5 };
  "hint" === i.split("_")[0] && ((o.x = 0), (o.y = 0));
  const l = e.frame,
    c = e.sourceSize,
    h = e.spriteSourceSize;
  a.id = i;
  const u = i.split("/");
  (a.sequence = u.pop()),
    (a.group = u.join("/")),
    (a.frameIndex = n),
    (a.texCoords = new Float32Array([
      l.x / r.w,
      (r.h - l.y - l.h) / r.h,
      l.w / r.w,
      l.h / r.h,
    ])),
    (a.meshCoords = new Float32Array([
      0.5 * h.w + h.x - c.w * o.x,
      -(0.5 * h.h + h.y - c.h * o.y),
      h.w,
      h.h,
    ]));
  for (let d = 0, p = a.meshCoords.length; d < p; d++) a.meshCoords[d] *= s;
  return (
    (a.anchor = o),
    (a.sourceSize = e.sourceSize),
    (a.spriteSourceSize = e.spriteSourceSize),
    (a.vertices = e.vertices),
    (a.verticesUV = e.verticesUV),
    (a.triangles = e.triangles),
    a
  );
}
function Ap(e) {
  const t = { sprites: {}, meta: e.meta },
    i = e.frames;
  e.animations || (e.animations = {});
  for (const n in e.animations) {
    const r = e.animations[n],
      s = (t.sprites[n] = []);
    for (let t = 0, a = r.length; t < a; t++) {
      const a = i[r[t]];
      delete i[r[t]], s.push(Ep(a, e.meta, n, t));
    }
  }
  for (const n in i) {
    const r = i[n],
      s = (r.filename ? r.filename.toString() : n)
        .replace(/[^a-zA-Z0-9-_-]/g, "")
        .replace("png", ""),
      a = (t.sprites[s] = []);
    delete i[n], a.push(Ep(r, e.meta, s));
  }
  return t;
}
async function Cp(e, t = {}) {
  const i = await fetch(e),
    n = await i.json();
  return P.add(e, n), t.onLoad && t.onLoad(n), n;
}
Cp.loader = { name: "json", extensions: [".json"], function: Cp };
const Pp = sh(
    "varying vec2 vUv;uniform sampler2D map;varying vec3 vPos;void main(){vec3 col=texture2D(map,vUv).xyz;float fakeShadow=1.-smoothstep(0.5,.9,vPos.y);col=mix(col,col-vec3(.2,0.3,0.2),fakeShadow+1.-smoothstep(0.41,.62,vPos.y));gl_FragColor=vec4(col,1.);}",
    "fragmentShader"
  ),
  Lp = sh(
    "attribute vec2 uv2;varying vec2 vUv;varying vec2 vAOuv;varying vec3 vPos;void main(){vUv=uv;vAOuv=uv2;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);vPos=(modelMatrix*vec4(position,1.)).xyz;}",
    "vertexShader"
  );
class Rp extends Fr {
  constructor(e) {
    super(e),
      (this.uniforms = { ...ih, map: { value: Nc.textures.egg } }),
      Pp.use(this),
      Lp.use(this);
  }
}
const Dp = ["Rock_1", "Rock_2", "Rock_3", "Rock_4", "Plant_1"];
function Ip(e, t) {
  const i = (t.textures = e.textures = {}),
    n = (t.geometries = e.geometries = {}),
    r = (t.atlases = e.atlases = {}),
    s = (t.materials = e.materials = {});
  (e.assets = {}),
    (t.preload = async function () {
      L.registerLoader(R), L.registerLoader(fp), L.registerLoader(Cp);
      const t = [];
      t.push(
        ...[
          [vd.noise.default, "noise", {}],
          [vd.sprites.default, "sprites", {}],
          [vd.diffuse.default, "diffuse", {}],
          [vd.aoMap.default, "aoMap", {}],
          [vd.alphaMap.default, "alphaMap", {}],
          [vd.dataMap.default, "dataMap", {}],
          [vd.bunnyFace.default, "bunnyFace", {}],
          [vd.egg.default, "egg", {}],
        ].map((e) =>
          L.load(e[0], {
            onLoad: ({ node: t }) => {
              i[e[1]] = (function (e) {
                const t = Nc.threeRenderer.capabilities.isWebGL2,
                  i = new Di(e.img);
                return (
                  void 0 !== e.flipY && (i.flipY = e.flipY),
                  void 0 !== e.mipmaps && (i.generateMipmaps = !!e.mipmaps),
                  e.red && (e.format = t ? ct : st),
                  e.alpha && (e.format = it),
                  e.nearest && (i.magFilter = i.minFilter = ke),
                  e.magFilter && (i.magFilter = e.magFilter),
                  e.minFilter && (i.minFilter = e.minFilter),
                  e.encoding && (i.encoding = e.encoding),
                  e.mapping && (i.mapping = e.mapping),
                  e.premultiplyAlpha && (i.premultiplyAlpha = !0),
                  e.repeat
                    ? ((i.wrapS = ze), (i.wrapT = ze))
                    : (e.wrapS && (i.wrapS = e.wrapS),
                      e.wrapT && (i.wrapT = e.wrapT)),
                  e.format && (i.format = e.format),
                  e.type && (i.type = e.type),
                  (i.needsUpdate = !0),
                  i
                );
              })({ img: t, premultiplyAlpha: !1, flipY: !1, ...e[2] });
            },
          })
        )
      ),
        t.push(
          L.load(vp, {
            onLoad: (t) => {
              const i = t.scene.children;
              e.geometries.bunny = {};
              for (let n = 0; n < i.length; n++) {
                const t = i[n];
                (e.geometries.bunny[t.name] = t.geometry.clone()),
                  (e.geometries.bunny[t.name].basePos = t.position),
                  (e.geometries.bunny[t.name].baseRot = t.rotation);
              }
            },
          })
        ),
        t.push(
          L.load(gp, {
            onLoad: (e) => {
              const t = e.scene.children,
                i = Mp({ attributes: ["position", "normal", "uv", "uv2"] }),
                r = Mp({ attributes: ["position", "normal", "uv", "uv2"] });
              let s = t.filter((e) => "Base" === e.name)[0];
              const a = [...s.position, ...s.scale, ...s.quaternion];
              i.add(s.geometry, { transforms: a }),
                r.add(s.geometry, { transforms: a });
              for (let c = 0; c < t.length; c++) {
                const e = t[c],
                  a = [...e.position, ...e.scale, ...e.quaternion];
                e.name.startsWith("Obstacle") ||
                e.name.startsWith("Arrow") ||
                e.name.startsWith("Egg")
                  ? (n[e.name] = e.geometry)
                  : (Dp.includes(e.name) &&
                      r.add(e.geometry, { transforms: a }),
                    "Base" !== e.name
                      ? i.add(e.geometry, { transforms: a })
                      : (s = e));
              }
              let o = i.merge();
              n.block = o;
              let l = r.merge();
              n.middleBlock = l;
            },
          })
        ),
        t.push(
          L.load(wp, {
            onLoad: (e) => {
              r.alphaMap = Ap(e);
            },
          })
        ),
        t.push(
          L.load(Sp, {
            onLoad: (e) => {
              r.bunnyFace = Ap(e);
            },
          })
        ),
        t.push(
          L.load(Tp, {
            onLoad: (e) => {
              r.sprites = Ap(e);
            },
          })
        ),
        await Promise.all(t),
        (s.egg = new Rp()),
        (i.alphaMap.minFilter = ke),
        (i.alphaMap.magFilter = ke),
        (i.bunnyFace.minFilter = ke),
        (i.bunnyFace.magFilter = ke);
    }),
    (t.load = L.load);
}
const Op = new Ei(1, 1, 1),
  Np = new Ei(0, 0, 0),
  zp = new Fi(),
  Up = m.outCubic,
  Fp = {
    beforeAlloc: function (e) {
      if (
        ((e.amount = 1),
        (e.batcherName = e.batcherName || e.batcherID || "emissive"),
        (e.brightness = e.brightness || 0),
        e.commonColor)
      ) {
        const t = Nc.uniforms.colors[e.commonColor];
        t && (e.commonColor = t.value);
      }
    },
    particleEmitted: function (
      e,
      {
        position: t,
        scale: i,
        color: n,
        commonColor: s,
        sprite: a,
        angle: o,
        rotation: l,
        duration: c,
        alpha: h = 1,
        newAlpha: u = 1,
        amount: d,
      }
    ) {
      (e.spriteId = a || "flash"),
        (e.billboard = !0),
        (e.duration = c || 1e3),
        o && (e.angle = o);
      l && e.rotation.copy(l);
      const m = (2 * Math.PI) / 30,
        f = e.index * m + r.randomFloat(-0.2, 0.2),
        g = r.randomFloat(0, 0.5),
        v = new Fi().copy(t);
      (v.x += Math.cos(f) * g),
        (v.z += Math.sin(f) * g),
        e.position.copy(v || zp),
        (e.delay = e.index * m * 70 + 200 * Math.random()),
        (i = i || 1).x,
        i.y,
        e.scaleFrom.set(0, 0),
        e.scaleTo.copy(e.scaleFrom).multiplyScalar(1.5),
        (e.rand = new Ii(
          r.randomFloat(0.8, 1.3),
          r.randomFloat(0.5, 1.3),
          r.randomFloat(0.12, 0.15),
          0
        )),
        (e.alphaFrom = 1),
        (e.alphaTo = 1),
        (e.colorEase = p(Up)),
        e.colorFrom.lerpColors(Np, s || n || Op, h * u),
        e.colorTo.copy(n),
        Nc.particles.emit("deathFlash", {
          batcherID: "noDepthEmissive",
          amount: 1,
          sprite: "flash",
          position: v,
          duration: e.duration,
          scale: new di(r.randomFloat(20, 20), r.randomFloat(20, 20)),
          alpha: 1.4,
          brightness: 0.22,
          rand: e.rand,
          delay: e.delay,
          color: n,
        });
    },
    particleUpdated: function (e, t) {
      (e.scaleTo.y = 40 * Math.sin(e.progress * Math.PI) * e.rand.x),
        (e.scaleTo.x = 2 * f(2 * e.progress, 0, 1) * e.rand.y),
        (e.velocity.y = 0.1 * Math.sin(e.progress * Math.PI) * e.rand.x);
    },
  };
const kp = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Fp },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Bp = new Ei(1, 1, 1),
  Vp = new Ei(0, 0, 0),
  Hp = new Fi(),
  Gp = m.outCubic,
  Wp = {
    beforeAlloc: function (e) {
      if (
        ((e.amount = 1),
        (e.batcherName = e.batcherName || e.batcherID || "emissive"),
        (e.brightness = e.brightness || 0),
        e.commonColor)
      ) {
        const t = Nc.uniforms.colors[e.commonColor];
        t && (e.commonColor = t.value);
      }
    },
    particleEmitted: function (
      e,
      {
        position: t,
        scale: i,
        color: n,
        commonColor: r,
        sprite: s,
        angle: a,
        rotation: o,
        duration: l,
        alpha: c = 1,
        newAlpha: h = 1,
        delay: u,
        rand: d,
      }
    ) {
      (e.spriteId = s || "flash"),
        (e.billboard = !0),
        (e.duration = l || 1e3),
        a && (e.angle = a);
      o && e.rotation.copy(o);
      e.position.copy(t || Hp),
        (e.delay = u),
        (e.rotation.x = -Math.PI / 2),
        (i = i || 1).x,
        i.y,
        e.scaleFrom.set(0, 0),
        e.scaleTo.copy(e.scaleFrom).multiplyScalar(1.5),
        (e.rand = d),
        (e.alphaFrom = 0.6),
        (e.alphaTo = 0.6),
        (e.colorEase = p(Gp)),
        e.colorFrom.lerpColors(Vp, r || n || Bp, c * h),
        e.colorTo.copy(n);
    },
    particleUpdated: function (e, t) {
      (e.scaleTo.y = 17 * Math.sin(e.progress * Math.PI) * e.rand.x),
        (e.scaleTo.x = 2 * f(2 * e.progress, 0, 1) * e.rand.y),
        (e.velocity.y = 0.1 * Math.sin(e.progress * Math.PI) * e.rand.x);
    },
  };
const jp = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Wp },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  qp = new Ei(1, 1, 1),
  Xp = new Ei(0, 0, 0),
  Yp = new Fi(),
  Kp = m.outCubic,
  Zp = {
    beforeAlloc: function (e) {
      if (
        ((e.amount = 1),
        (e.batcherName = e.batcherName || e.batcherID || "emissive"),
        (e.brightness = e.brightness || 0),
        e.commonColor)
      ) {
        const t = Nc.uniforms.colors[e.commonColor];
        t && (e.commonColor = t.value);
      }
    },
    particleEmitted: function (
      e,
      {
        position: t,
        scale: i,
        color: n,
        commonColor: r,
        sprite: s,
        angle: a,
        rotation: o,
        duration: l,
        alpha: c = 1,
        newAlpha: h = 1,
      }
    ) {
      (e.spriteId = s || "flash"),
        (e.billboard = !o),
        (e.duration = l || 1e3),
        a && (e.angle = a);
      o && e.rotation.copy(o);
      e.position.copy(t || Yp);
      const u = (i = i || 1).x || i,
        d = i.y || i;
      e.scaleFrom.set(u, d),
        e.scaleTo.copy(e.scaleFrom).multiplyScalar(1.5),
        (e.alphaFrom = 1),
        (e.alphaTo = 1),
        (e.colorEase = p(Kp)),
        e.colorFrom.lerpColors(Xp, r || n || qp, c * h),
        e.colorTo.copy(Xp);
    },
    particleUpdated: function (e, t) {
      t.commonColor &&
        (t.newAlpha
          ? e.colorFrom.lerpColors(Xp, t.commonColor, t.newAlpha)
          : e.colorFrom.copy(t.commonColor),
        e.colorFrom.offsetHSL(0, 0, t.brightness));
    },
  };
const Jp = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Zp },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Qp = new Ei(1, 1, 1),
  $p = new Ei(0, 0, 0),
  em = new Fi(),
  tm = m.outCubic,
  im = {
    beforeAlloc: function (e) {
      if (
        ((e.amount = 1),
        (e.batcherName = e.batcherName || e.batcherID || "emissive"),
        (e.brightness = e.brightness || 0),
        e.commonColor)
      ) {
        const t = Nc.uniforms.colors[e.commonColor];
        t && (e.commonColor = t.value);
      }
    },
    particleEmitted: function (
      e,
      {
        position: t,
        scale: i,
        color: n,
        commonColor: r,
        sprite: s,
        angle: a,
        rotation: o,
        duration: l,
        alpha: c = 1,
        newAlpha: h = 1,
      }
    ) {
      (e.spriteId = s || "flash"),
        (e.billboard = !1),
        (e.duration = l || 1e3),
        a && (e.angle = a);
      o && e.rotation.copy(o);
      e.position.copy(t || em),
        (e.rotation.x = -Math.PI / 2),
        (i = i || 1).x,
        i.y,
        e.scaleFrom.set(0, 0),
        e.scaleTo.copy(e.scaleFrom).multiplyScalar(1.5),
        (e.alphaFrom = 1),
        (e.alphaTo = 1),
        (e.colorEase = p(tm)),
        e.colorFrom.lerpColors($p, r || n || Qp, c * h),
        e.colorTo.copy(Qp);
    },
    particleUpdated: function (e, t) {
      (e.scaleTo.y = 40 * Math.sin(e.progress * Math.PI)),
        (e.scaleTo.x = 2 * f(2 * e.progress, 0, 1)),
        (e.velocity.z = 0.1 * -Math.sin(e.progress * Math.PI)),
        console.log(e.scaleTo.x),
        console.log(e.progress);
    },
  };
const nm = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: im },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  rm = 2 * Math.PI;
new Ei(1, 1, 1);
const sm = new Fi(),
  am = p(m.outSine);
new Ei(16777215);
const om = {
    beforeAlloc: function (e = {}) {
      e.position || (e.position = sm),
        (e.scale = e.scale || 1),
        (e.angOffset = r.randomFloat(0, rm));
    },
    particleEmitted: function (
      e,
      {
        angOffset: t,
        position: i,
        scale: n,
        velDrag: s = 0.92,
        durationMin: a,
        durationMax: o,
        sprite: l,
        color: c,
        amount: h,
        billboard: u,
        velocity: d,
        opacity: p,
        gravity: m = 0,
        speed: f,
      }
    ) {
      const g = rm / h,
        v = e.index * g + r.randomFloat(-0.2, 0.2) + t;
      let _ = 0.1 + r.randomFloat(0.03, 0.06);
      (e.billboard = !0),
        (e.angVelocity = 0),
        (e.spriteId = l || "flash"),
        (e.velocity.x = Math.sin(v) * r.randomFloat(0.08, 0.11)),
        (e.velocity.y = Math.cos(v) * r.randomFloat(0.08, 0.11)),
        (e.velocity.z =
          (0.07 + r.randomFloat(0.02, 0.04)) * Math.sign(r.tossCoin() - 0.5)),
        (e.rotation.x = Math.PI / -2),
        (e.rotation.z = _ * e.velocity.x * Math.cos(v)),
        (e.angle = Math.random() * Math.PI * 2),
        e.velocityDrag.setScalar(s || 0.98),
        (e.useVelocityDragMult = !0),
        (e.gravity.y = 0),
        e.position.copy(i),
        (e.duration = r.randomFloat(a || 200, o || 300)),
        (e.scaleInOut = !0),
        e.scaleTo.setScalar(0),
        e.scaleFrom.copy(n).multiplyScalar(1),
        (e.alpha = 1),
        e.colorFrom.copy(c).multiplyScalar(1),
        e.colorTo.copy(c).multiplyScalar(1),
        (e.colorEase = am);
    },
  },
  lm = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: om },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  cm = new Ui(),
  hm = 1 / Number.MAX_SAFE_INTEGER,
  um = {};
let dm;
new Bn();
class pm extends eu {
  constructor(e) {
    (e.useEuler = !0),
      super(e),
      dm || (dm = Oc()),
      this.batcher && this.batcher.removeInstance(this),
      (this.spriteId = null),
      (this.spriteFrame = 0),
      (this.spriteFrameDuration = 50),
      (this.spriteLoop = !1),
      (this.spriteAutoplay = !1),
      (this.rotation = new Tn()),
      (this.delay = 0),
      (this.duration = 0),
      (this.age = 0),
      (this.progress = 0),
      (this.onProgress = null),
      (this.onComplete = null),
      (this.onEnd = null),
      (this.angVelocity = 0),
      (this.angVelocityDrag = 0),
      (this.velocity = new Fi()),
      (this.velocityDrag = new Fi()),
      (this.velocityDragMult = new Fi()),
      (this.useVelocityDragMult = !1),
      (this.scaleWithVel = !1),
      (this.gravity = new Fi()),
      (this.scaleFrom = new di()),
      (this.scaleTo = new di()),
      (this.colorFrom = new Ei()),
      (this.colorTo = new Ei()),
      (this.alphaFrom = 1),
      (this.alphaTo = 1),
      (this.alive = !1),
      (this.killable = !1),
      (this.progressEase = p()),
      (this.scaleEase = p()),
      (this.alphaEase = p()),
      (this.colorEase = p()),
      (this.scaleVelEase = p([0, 1, 0.5, 1]));
  }
  reset() {
    this.alive && this.onRelease && this.onRelease(),
      this.preset &&
        this.preset.particleReleased &&
        this.preset.particleReleased(this, this.presetOptions),
      (this.parent = null),
      (this.preset = um),
      (this.spriteId = null),
      (this.spriteFrame = 0),
      (this.spriteFrameDuration = 50),
      (this.spriteLoop = !1),
      (this.spriteAutoplay = !1),
      (this.billboard = !1),
      (this.angle = 0),
      this.quaternion.copy(cm),
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
      this.colorFrom.setRGB(255, 255, 255),
      this.colorTo.setRGB(255, 255, 255),
      (this.alphaFrom = 1),
      (this.alphaTo = 1),
      (this.alphaInOut = !1),
      (this.progressEase = p()),
      (this.scaleEase = p()),
      (this.alphaEase = p()),
      (this.colorEase = p()),
      (this.scaleVelEase = p([0.7, 0.3, 0.2, 0.2]));
  }
  emit(e, t, i, n) {
    this.reset(),
      (this.batcher = e),
      (this.spriteId = this.killable = !1),
      (this.alive = !0),
      (this.index = n),
      (this.billboard = i.billboard || !1),
      (this.parent = i.parent),
      (this.preset = t || um),
      (this.presetOptions = i || um),
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
    let e = dm.time.stableDt;
    if (this.delay > 0) {
      if (((this.delay -= e), this.delay > 0))
        return (this.alpha = 0), void this.scale.setScalar(hm);
      e = Math.max(0, e + this.delay);
    }
    super.update(e);
    const t = Math.max(Math.min(e / 16.666666667, 1.5), 0.5);
    if (
      ((this.age += e),
      (this.progress = this.progressEase(f(this.age / this.duration, 0, 1))),
      this.preset.particleUpdate)
    )
      this.preset.particleUpdate(this, this.presetOptions);
    else {
      if (this.useVelocityDragMult)
        this.velocity.multiply(this.velocityDrag),
          this.velocity.lengthSq < 1e-4 && this.velocity.setScalar(0);
      else {
        if (this.velocity.x) {
          const e = Math.sign(this.velocity.x);
          (this.velocity.x -= e * this.velocityDrag.x * t),
            Math.sign(this.velocity.x) !== e && (this.velocity.x = 0);
        }
        if (this.velocity.y) {
          const e = Math.sign(this.velocity.y);
          (this.velocity.y -= e * this.velocityDrag.y * t),
            Math.sign(this.velocity.y) !== e && (this.velocity.y = 0);
        }
        if (this.velocity.z) {
          const e = Math.sign(this.velocity.z);
          (this.velocity.z -= e * this.velocityDrag.z * t),
            Math.sign(this.velocity.z) !== e && (this.velocity.z = 0);
        }
      }
      if (this.angVelocity) {
        const e = Math.sign(this.angVelocity);
        (this.angVelocity -= e * this.angVelocityDrag * t),
          Math.sign(this.angVelocity) !== e && (this.angVelocity = 0);
      }
      (this.position.x += (this.velocity.x + this.gravity.x) * t),
        (this.position.y += (this.velocity.y + this.gravity.y) * t),
        (this.position.z += (this.velocity.z + this.gravity.z) * t),
        this.billboard
          ? ((this.angle += this.angVelocity * t),
            this.angleTo &&
              (this.angle = l(this.angleFrom, this.angleTo, this.progress)))
          : (this.rotation.z += this.angVelocity * t),
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
          ? (this.alpha = l(
              this.alphaFrom,
              this.alphaTo,
              1 - Math.sin(this.progress * Math.PI)
            ))
          : (this.alpha = l(
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
const mm = {};
class fm extends Bc {
  constructor(e) {
    super(e),
      e.batcher && (e.batchers = { default: e.batcher }),
      (this.count = e.count || 150),
      (this.dead = new Array(this.count).fill(0).map(() => new pm({}))),
      (this.alive = []),
      (this.batchers = e.batchers || {});
  }
  emit(e, t = {}, i) {
    "number" == typeof t && (t = { amount: t });
    const n = (t.amount = t.amount || 1),
      r = mm[e];
    if (!r) return;
    if ((r.beforeAlloc && r.beforeAlloc(t), t.amount <= 0)) return;
    const s = this.batchers[i] || this.batchers.default,
      a = this.alloc(n);
    r.beforeEmit && r.beforeEmit(t, a);
    for (let o = a.length - 1; o >= 0; o--)
      a[o].alive || 0, this.alive.push(a[o]), a[o].emit(s, r, t, o);
  }
  update(e) {
    const t = [];
    for (let i = this.alive.length - 1; i >= 0; i--) {
      const n = this.alive[i];
      n.update(e),
        n.killable && (t.push(n), this.alive.splice(i, 1), this.dead.push(n));
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
        this.alive.splice(e, 1);
  }
  registerPreset(e, t) {
    !(function (e, t) {
      t || (t = {}), (mm[e] = t);
    })(e, t);
  }
}
let gm = 0;
const vm = new es(),
  _m = new Map(),
  xm = new Bn(),
  ym = new Ui(),
  bm = { default: X, normal: X, additive: Y },
  Mm = { double: j, front: G, back: W };
const wm = class extends Bc {
  init() {
    (this.needsUpdate = !0),
      (this.atlas = this.props.atlas),
      (this.count = this.props.count || 200),
      (this.geo = new vc()),
      (this.geo.index = vm.index),
      (this.geo.attributes.position = vm.attributes.position),
      (this.geo.attributes.uv = vm.attributes.uv),
      this.initAttributes(),
      (this.instances = new Set()),
      this.setDynamic(this.props.dynamic);
    const e = this.getMaterial(this.props);
    (this.base = new Dr(this.geo, e)),
      this.props.renderOrder &&
        (this.base.renderOrder = this.props.renderOrder),
      (this.base.frustumCulled = !!this.props.frustumCulled),
      (this.currentCount = 0),
      (this.updateAttributes = this.updateAttributes.bind(this));
  }
  setDynamic(e) {
    (this.dynamic = null == e || !!e),
      this.interleavedBuffer.setUsage(this.dynamic ? 35048 : StaticDrawUsage),
      (this.interleavedBuffer.needsUpdate = !0),
      (this.needsUpdate = !0);
  }
  getMaterial(e) {
    const t = e.material;
    if (!t) return;
    _m.has(t) || _m.set(t, {});
    const i = _m.get(t),
      n = e.atlas;
    if (!n) return;
    null == n.meta.atlasIndex && (n.meta.atlasIndex = ++gm);
    const r = null == e.depthWrite || e.depthWrite,
      s = null == e.depthTest || e.depthTest,
      a = null != e.blending ? e.blending : "default",
      o = null != e.transparent && e.transparent,
      l = null != e.alphaTest && e.alphaTest,
      c = null != e.side ? e.side : "front",
      h = [
        n.meta.atlasIndex,
        c + "",
        r.toString(),
        s.toString(),
        a.toString(),
        o.toString(),
        l.toString(),
      ].join("_");
    if (i[h]) return i[h];
    const u = { ...e };
    return (
      delete u.material,
      (i[h] = new t({
        ...u,
        atlas: n,
        side: Mm[c],
        blending: "function" == typeof a ? a : bm[a],
        depthWrite: !!r,
        depthTest: !!s,
        transparent: !!o,
        alphaTest: !!l,
      }))
    );
  }
  initAttributes() {
    (this.stride = 21),
      (this.buffer = new Float32Array(this.count * this.stride));
    const e = this.geo,
      t = (this.interleavedBuffer = new Ec(this.buffer, this.stride));
    e.setAttribute("texCoords", new Fo(t, 4, 0, !1)),
      e.setAttribute("meshCoords", new Fo(t, 4, 4, !1)),
      e.setAttribute("spritePos", new Fo(t, 3, 8, !1)),
      e.setAttribute("decorators", new Fo(t, 2, 11, !1)),
      e.setAttribute("spriteQt", new Fo(t, 4, 13, !1)),
      e.setAttribute("spriteColor", new Fo(t, 4, 17, !1)),
      (t.needsUpdate = !0);
  }
  updateAttributes(e) {
    if (!e || !e.visible) return;
    const t = this.currentCount++,
      i = this.buffer,
      n = this.stride,
      r = e.sprite.frame;
    let s = t * n;
    e.useEuler && e.quaternion.setFromEuler(e.rotation);
    let a = e.position,
      o = e.quaternion,
      l = e.scale;
    if (e.parent) {
      const t = e.parent;
      xm.position.copy(a),
        xm.quaternion.copy(e.billboard ? ym : o),
        xm.scale.set(l.x, l.y, 1),
        xm.applyMatrix4(t.matrixWorld),
        xm.updateMatrixWorld(),
        (a = xm.position),
        (o = xm.quaternion),
        (l = xm.scale);
    }
    const c = e.billboard ? e.angle : o.x;
    (i[s++] = r.texCoords[0]),
      (i[s++] = r.texCoords[1]),
      (i[s++] = r.texCoords[2]),
      (i[s++] = r.texCoords[3]),
      (i[s++] = r.meshCoords[0] * e.scale.x),
      (i[s++] = r.meshCoords[1] * e.scale.y),
      (i[s++] = r.meshCoords[2] * e.scale.x),
      (i[s++] = r.meshCoords[3] * e.scale.y),
      (i[s++] = a.x),
      (i[s++] = a.y),
      (i[s++] = a.z),
      (i[s++] = e.billboard ? 1 : 0),
      (i[s++] = e.textured ? 1 : 0),
      (i[s++] = c),
      (i[s++] = o.y),
      (i[s++] = o.z),
      (i[s++] = o.w),
      (i[s++] = e.color.r),
      (i[s++] = e.color.g),
      (i[s++] = e.color.b),
      (i[s++] = e.alpha);
  }
  addInstance(e) {
    this.instances.has(e) || this.instances.add(e);
  }
  removeInstance(e) {
    this.instances.has(e) && this.instances.delete(e);
  }
  update() {
    this.dynamic &&
      ((this.currentCount = 0),
      this.instances.forEach(this.updateAttributes),
      (this.geo.instanceCount = this.currentCount),
      (this.interleavedBuffer.needsUpdate = !0),
      (this.base.visible = 0 !== this.currentCount));
  }
  clearInstances() {
    this.instances.clear();
  }
  destroy() {
    this.clearInstances(), this.geo.dispose(), super.destroy();
  }
};
class Sm extends Fr {
  constructor(e = {}) {
    const t = (e = { ...e }).useAlphaSDF;
    e.atlas,
      delete e.renderOrder,
      delete e.useAlphaSDF,
      delete e.count,
      delete e.atlas,
      delete e.renderOrder;
    const i = "function" == typeof e.blending && e.blending;
    i && delete e.blending,
      super(e),
      (this.uniforms = {
        ...Ur.merge([is.fog]),
        ...(e.uniforms || {}),
        atlas: { value: Nc.textures.sprites, type: "t" },
      });
    const n = (this.defines = {});
    this.forceOpaque = !0;
    e.blending === Y && (n.IS_ADDITIVE_BLENDING = !0),
      t && (n.USE_ALPHA_SDF = !0),
      (this.fog = !0),
      i && i(this),
      (this.vertexShader =
        "precision highp float;attribute vec4 texCoords;attribute vec4 meshCoords;attribute vec3 spritePos;attribute vec4 spriteQt;attribute vec4 spriteColor;attribute vec2 decorators;varying vec2 vUv;varying vec4 vColor;\n#include <fog_pars_vertex>\n#include <get_instance_matrix>\nvoid main(){vColor=spriteColor;vUv=uv*texCoords.zw+texCoords.xy;vUv.y=1.-vUv.y;vec3 transformed=position;transformed.xy=transformed.xy*meshCoords.zw+(meshCoords.xy*0.5);transformed.xy+=meshCoords.xy*0.5;mat4 instanceMatrix=getInstanceMatrix(spritePos,spriteQt,vec3(1.));vec4 mvPosition=modelViewMatrix*instanceMatrix*vec4(transformed,1.);\n#include <fog_vertex>\nvec4 bbPosition=modelViewMatrix*instanceMatrix*vec4(0.0,0.0,0.0,1.0);bbPosition.x+=cos(spriteQt.x)*transformed.x-sin(spriteQt.x)*transformed.y;bbPosition.y+=sin(spriteQt.x)*transformed.x+cos(spriteQt.x)*transformed.y;mvPosition=mix(mvPosition,bbPosition,decorators.x);gl_Position=projectionMatrix*mvPosition;}"),
      (this.fragmentShader =
        "precision highp float;uniform sampler2D atlas;varying vec2 vUv;varying vec4 vColor;\n#include <fog_pars_fragment>\nconst vec3 fogCol=vec3(0.9,1.0,1.0);float luma(vec3 color){return dot(color,vec3(0.299,0.587,0.114));}void main(){vec2 uv=vUv;vec4 color=texture2D(atlas,uv);float shape=color.r;\n#ifdef USE_ALPHA_SDF\n#ifdef IS_ADDITIVE_BLENDING\nfloat l=vColor.a*luma(vColor.rgb)*1.;shape=max(smoothstep(0.48,0.52,shape),shape*l);\n#else\nshape=smoothstep(0.48,0.52,shape);\n#endif\n#endif\nfloat alpha=color.a*vColor.a;vec3 col=vColor.rgb*vColor.a*shape;gl_FragColor=vec4(col,alpha*shape);\n#ifdef USE_FOG\n#ifndef IS_ADDITIVE_BLENDING\nfloat fogFactor=smoothstep(fogNear,fogFar,vFogDepth);gl_FragColor.rgb=mix(gl_FragColor.rgb,fogCol,clamp(fogFactor*0.65,0.,1.));\n#endif\n#endif\n}");
  }
}
const Tm = Object.assign({
    "/webgl/components/particlePresets/death.js": kp,
    "/webgl/components/particlePresets/deathFlash.js": jp,
    "/webgl/components/particlePresets/flash.js": Jp,
    "/webgl/components/particlePresets/jumb.js": nm,
    "/webgl/components/particlePresets/wave.js": lm,
  }),
  Em = Object.entries(Tm).map(([e, t]) => ({
    id: e.split("/").pop().split(".js").shift(),
    module: t.default,
  }));
const Am = [
  function (e) {
    let t = !1,
      i = performance.now();
    const n = 13;
    let r = 0,
      s = 0,
      a = 0;
    e.hooks.afterInit.watchOnce(() => {
      e.viewport && e.viewport.visible.watch(() => (t = !0));
    }),
      e.hooks.afterFrame.watchOnce(() => {
        t = !0;
      });
    const o = (e.time = {
      dt: 0,
      limitedDt: 0,
      clampedDt: 0,
      stableDt: 16.6667,
      smoothDt: 60,
      elapsed: 0,
      pausedElapsed: 0,
      frameNum: 0,
      isPaused: !0,
      isStarted: !0,
      init: function () {
        o.customLoop ? o.customLoop(l) : v.add(l);
        (o.isStarted = !0), (o.isPaused = !1);
      },
      start: function () {
        o.isStarted = !0;
      },
      stop: function () {
        o.isStarted = !1;
      },
      resume: function () {
        o.isPaused = !1;
      },
      pause: function () {
        o.isPaused = !0;
      },
      clampTo60Fps: !0,
      customLoop: null,
    });
    function l(l) {
      const c = i;
      if (
        ((i = performance.now()),
        0 === (l = i - c) && (l = 16.6667),
        t &&
          ((l = 16.6667), (t = !1), (r = 0), (s = 0), $u.reset(), ed.reset()),
        (o.limitedDt = l),
        o.clampTo60Fps)
      ) {
        (r += l), s++, (a = s > 1 ? (a + l) / 2 : l);
        if (!(r + 0.5 * a > n) && r < n) return;
        s > 1 && (o.limitedDt = 16.666667), (l = r), (r = 0), (s = 0);
      }
      (o.clampedDt = f(void 0 === l ? 16.6667 : l, 1, 130)),
        (o.averageDt = $u.push(l));
      let h = o.averageDt;
      for (let e = 0, t = td.length; e < t; e++) {
        const t = td[e];
        if (h >= t[2]) {
          h <= t[0] && (h = t[1]);
          break;
        }
      }
      (o.stableDt = ed.push(h)),
        (o.dt = l),
        (o.frameNum = (o.frameNum + 1) % Qu),
        (o.elapsed += l),
        o.isStarted && (o.isPaused || (o.pausedElapsed += l), e.frame());
    }
  },
  function (t) {
    let i;
    const n = new Ei(16777215),
      r = y(new di()),
      s = y(1);
    let a = 1,
      o = 2,
      l = id["3k"];
    const c = {
        antialias: !1,
        alpha: !1,
        depth: !0,
        stencil: !1,
        preserveDrawingBuffer: !1,
        powerPreference: "high-performance",
      },
      h = { beforeInit: e(), afterInit: e() },
      u = (t.renderer = {
        init: function () {
          (c.canvas = t.options.canvas), h.beforeInit.emit();
          const e = u.forceWebGL1 ? Oo : Io;
          (i = new e(c)),
            (i.debug = { checkShaderErrors: !1 }),
            (t.renderer.instance = i),
            (t.threeRenderer = i),
            (u.isWebGL2 = !!i.capabilities.isWebGL2),
            i.getDrawingBufferSize(r.value),
            m(),
            i.setClearColor(n, 1),
            (i.autoClear = !1),
            (i.shadowMap.enabled = !1),
            (i.shadowMap.type = k),
            (i.info.autoReset = !1),
            t.hooks.beforeFrame.watch(() => i.info.reset()),
            h.afterInit.emit(),
            t.viewport.changed.watch(m);
        },
        options: c,
        hooks: h,
        clearColor: n,
        resize: m,
        setMinPixelRatio: function (e) {
          if (a === e) return;
          (a = e), p();
        },
        setMaxPixelRatio: function (e) {
          if (o === e) return;
          (o = e), p();
        },
        setMaxPixelCount: function (e) {
          if ("string" == typeof e) {
            if (!(e = id[e.toLowerCase()])) return;
          } else null == e && (e = 0);
          (l = e), p();
        },
        drawingBufferSize: r,
        pixelRatio: s,
        forceWebGL1: !1,
      });
    let d = !1;
    function p() {
      d || ((d = !0), t.hooks.beforeFrame.watchOnce(m));
    }
    function m() {
      d = !1;
      let e = f(t.viewport.pixelRatio.value, a, o);
      const n = t.viewport.size.value,
        c = di.get();
      let h = e * n.x * n.y;
      l > 0 && h > l && (e /= h / l),
        i.getSize(c),
        i.getPixelRatio() !== e && i.setPixelRatio(e),
        c.equals(n) || i.setSize(n.x, n.y),
        (function () {
          const e = r.value,
            t = di.get();
          i.getDrawingBufferSize(t), b(), t.equals(e) || r.set(e.copy(t), !0);
          s.set(i.getPixelRatio()), t.release(), M();
        })(),
        c.release();
    }
  },
  function (t) {
    const i = t.app.$viewport,
      n = y(new di(i.width, i.height)),
      r = y(n.value.x / n.value.y),
      s = y(i.pixelRatio),
      a = y(i.visible),
      o = e();
    t.viewport = {
      size: n,
      visible: a,
      ratio: r,
      pixelRatio: s,
      changed: o,
      frame: d,
    };
    let l = 0,
      c = 0,
      h = 0;
    const u = w(
      () => ((l = i.width), (c = i.height), void (h = i.pixelRatio)),
      150
    );
    function d() {
      const e = n.value,
        t = e.x !== l || e.y !== c,
        i = s.value !== h;
      (t || i) &&
        (b(),
        t && (e.set(l, c), n.set(e, !0), r.set(e.x / e.y)),
        i && s.set(h),
        o.emit(),
        M());
    }
    S(
      [i],
      () => {
        (t.options.canvas.style.width = i.width + "px"),
          (t.options.canvas.style.height = i.height + "px"),
          u();
      },
      { immediate: !0 }
    ),
      T(() => {
        a.set(i.visible);
      }),
      t.hooks.beforeFrame.watch(d);
  },
  function (e) {
    const t = "webgl_quality",
      i = 300,
      n = 2,
      r = 5;
    let s = 58,
      a = 52,
      o = 30,
      l = i,
      c = i,
      h = 0,
      u = 0,
      d = !1,
      p = !1,
      m = r,
      g = r,
      v = 10;
    const _ = new Float64Array(3);
    let x = 0;
    const b = new Float64Array([-1, -1, -1]);
    let M = 0,
      w = 0,
      S = !1;
    const T = y(60),
      A = y(60),
      C = y(1);
    function P(e, t) {
      (d = !0), (p = p || e), t && (l = t);
    }
    function L() {
      if (v > 0) return v--;
      const t = e.time.limitedDt;
      if (
        (d &&
          ((h = 0),
          (u = 0),
          p && ((m = r), (x = 0), (M = 0), (w = 0)),
          (c = l || i),
          (d = p = !1),
          (l = i)),
        c > 0)
      )
        return (c -= t);
      (h += t),
        u++,
        h >= 1e3 &&
          (function () {
            S || ((_[x++] = u), (x %= _.length + 1));
            T.set(u), (u = 0), (h %= 1e3), S || x != _.length || D();
          })();
    }
    function R(e) {
      (b[2] = b[1]), (b[1] = b[0]), (b[0] = e), C.set(e);
    }
    function D(e) {
      let t = b[0];
      const i = E(_);
      e ? (t = e) : i <= o ? (t -= 2) : i < a ? (t -= 1) : i > s && (t += 1),
        (t = f(t, 0, Math.min(g, m))),
        t === b[0]
          ? ((M = Math.max(0, M - 0.2)), (w = Math.max(0, w - 0.2)))
          : t !== b[0] && t !== b[1]
          ? (M = 0)
          : t === b[1] && (M += 1),
        t === b[2] && t < b[0] && w++,
        M >= n && ((m = Math.min(b[1], b[0], m, g)), (M = 0)),
        w >= n && ((m = Math.min(E(b), m, g)), (w = 0)),
        (t = Math.min(t, m, g)),
        t !== C.value && R(t),
        A.set(i);
    }
    return (
      e.hooks.afterInit.watchOnce(function () {
        const i = e.app.$device,
          n = i && i.gpu ? i.gpu.qualityIndex : 3,
          r = (function () {
            const e = localStorage.getItem(t);
            return null == e || isNaN(e) ? null : 0 | e;
          })(),
          s = null != r ? r : n;
        C.watch((e) => {
          i && i.updateQuality(e),
            (function (e) {
              localStorage.setItem(t, e);
            })(e);
        }),
          R(s),
          e.hooks.beforeFrame.watch(L);
      }),
      e.hooks.beforeStart.watchOnce(async function () {
        e.viewport.visible.watch(() => P());
        const t = e.viewport.size.value;
        let n = t.x * t.y;
        e.viewport.changed.watch(() => {
          const t = e.viewport.size.value,
            r = t.x * t.y;
          Math.abs(n - r) < 2e5 ? P(!1, i) : ((n = r), P(!0, i));
        });
      }),
      (e.quality = {
        get pingPongScore() {
          return M;
        },
        get bigPingPongScore() {
          return w;
        },
        fps: T,
        fpsAverage: A,
        quality: C,
        current: C,
        pause: function () {
          S = !0;
        },
        resume: function (e = 150) {
          (S = !1), P(!1, e);
        },
        reset: (e = 300) => P(!1, e),
        hardReset: (e = 300) => P(!0, e),
        updateQuality: D,
        limitQuality: (e) => {
          (g = f(e, 0, r)), D();
        },
        setThresholds: function (e = {}) {
          e.high && (s = e.high);
          e.low && (a = e.low);
          e.critical && (o = e.critical);
        },
      })
    );
  },
  function (e) {
    const t = {
      createBuffer: function (e) {
        return sd(e);
      },
      registerBuffer: ad,
      unregisterBuffer: ad,
    };
    e.fbo = t;
  },
  function (e) {
    const t =
      (e.stores =
      e.store =
        {
          renderOrder: { sprites: 1 },
          colors: {},
          blockPrng: od,
          readyJump: !1,
        });
    return (
      (t.desktopInfluence = y(0)),
      e.viewport.ratio.watchImmediate((e) => {
        const i = e > 1 ? 1 : 0;
        t.desktopInfluence.set(i);
      }),
      (t.preloaderFinished = y(!1)),
      S(
        () => e.app.$preloader.finished,
        (e) => t.preloaderFinished.set(e)
      ),
      t
    );
  },
  function (e, { log: t }) {
    (e.state = (function (e = {}, t = {}) {
      let n = 0,
        r = 0,
        s = null,
        a = !1,
        o = {};
      const l = {},
        c = {
          get time() {
            return n;
          },
          get stateTime() {
            return stateTime;
          },
          get current() {
            return s;
          },
          hasReached: (e) => n >= e && r < e,
          start: function () {
            a ||
              ((a = !0),
              o.id && (d(o.id, o.params), (o.id = null), (o.params = null)));
          },
          logger: dd,
          log: dd,
          isState: h,
          setState: d,
          getState: u,
          is: h,
          set: d,
          get: u,
          states: l,
          update: function (e) {
            (r = n), (n += e), s && s._update(e);
          },
        };
      for (let p in e) {
        let t = e[p];
        const n = {
          machine: c,
          id: p,
          uid: 0,
          isActive: !1,
          time: 0,
          data: {},
          prevTime: -1,
          logger: dd,
          _init: () => {
            n.init && n.init();
          },
          log: dd.log || dd,
          isReached: (e) => n.time >= e && n.prevTime < e,
          schedule: (e, t) => {
            const r = {
              startsAt: n.time + e,
              finished: !1,
              callback: (e) => {
                if (!n.isActive || r.finished) return;
                const s = n.time - r.startsAt;
                t(s, e, n) && (n.scheduled[i].finished = !0);
              },
            };
            n._scheduledActions.push(r);
          },
          _scheduledActions: [],
          _update: (e) => {
            if (!n.isActive) return;
            (n.prevTime = n.time), (n.time += e);
            const t = n._scheduledActions;
            for (let i = 0; i < t.length; i++) {
              const r = t[i];
              if (
                !(
                  r.finished ||
                  r.startsAt > n.time ||
                  (r.callback(e), r.isActive)
                )
              )
                return;
            }
            n.onUpdate && n.onUpdate(e);
          },
        };
        "function" == typeof t && (t = t(n)),
          "object" == typeof res && Object.assign(n, res),
          (l[p] = n);
      }
      function h(e) {
        return s && s.id === e;
      }
      function u() {
        return s;
      }
      function d(e, { force: t, ...i } = {}) {
        if (!a) return (o.id = e), void (o.params = { force: t, ...i });
        if (!l[e]) return;
        if (!t && (null == s ? void 0 : s.id) === e) return;
        const n = s,
          r = l[e];
        n &&
          (n.onLeave && n.isActive && n.onLeave(r.id, i),
          (n.isActive = !1),
          (n.params = pd),
          (n.data = pd),
          (n.uid = -1)),
          (s = l[e]),
          (r.uid = ++md % 1e6),
          (r.isActive = !0),
          (r.prevTime = -1),
          (r._scheduledActions.length = 0),
          (r.time = 0),
          (r.params = i),
          (r.data = {}),
          r.onEnter && r.onEnter(n, i);
      }
      return t.initial && d(t.initial), c;
    })(fd, { initial: "Home" })),
      (e.setState = e.state.setState),
      (e.state.init = () => {
        for (let t in fd) e.state.states[t]._init();
        requestAnimationFrame(() => {
          e.state.start(),
            e.hooks.beforeUpdate.watch(() => {
              const t = e.time.dt;
              e.state.update(t);
            });
        });
      });
  },
  function (e) {
    const t = (e.resources = {
      manifest: {},
      assets: {},
      scenes: {},
      textures: {},
    });
    Ip(e, t);
  },
  function (e) {
    let t,
      i,
      n = !1;
    const r = {},
      s = {
        init: function () {
          if (n) return;
          n = !0;
          const s = {
            renderOrder: e.store.renderOrder.sprites,
            material: Sm,
            atlas: e.atlases.sprites,
            blending: "normal",
            transparent: !0,
            depthWrite: !1,
            depthTest: !1,
          };
          Object.assign(r, {
            normal: new wm({
              ...s,
              blending: "normal",
              depthTest: !1,
              depthWrite: !1,
              useAlphaSDF: !0,
              count: 1e3,
              renderOrder: 10,
            }),
            emissive: new wm({
              ...s,
              blending: "additive",
              depthTest: !0,
              depthWrite: !1,
              count: 1e3,
              renderOrder: 1,
            }),
            noDepthEmissive: new wm({
              ...s,
              blending: "additive",
              renderOrder: 1,
            }),
            noDepth: new wm({ ...s }),
          }),
            (t = Object.values(r));
          for (let e in r) r[e].triggerInit(r[e].props);
          (i = new fm({ batchers: r, count: 3e3 })),
            Em.forEach((e) => i.registerPreset(e.id, e.module));
        },
        emit: function (e, t = {}) {
          if (!i) return;
          const n = t.batcherID || "default";
          return i.emit(e, t, n);
        },
        update: function () {
          if (!n) return;
          for (let e = 0, i = t.length; e < i; e++) t[e].update();
          i.update();
        },
        addTo: function (e) {
          this.removeFromParent();
          for (let i = 0, n = t.length; i < n; i++) {
            const n = t[i].base;
            e.add(n), (n.manualMatrixUpdate = !0), n.updateMatrixWorld();
          }
        },
        removeFromParent: function () {
          for (let e = 0, i = t.length; e < i; e++) {
            const i = t[e];
            i.base.parent && i.base.parent.remove(i.base);
          }
          i.killAll();
        },
        batchers: r,
      };
    e.particles = s;
  },
];
function Cm(e = {}) {
  return zc({ decorator: Ju, plugins: Am, ...e });
}
export { Cm as loadWebGL };
