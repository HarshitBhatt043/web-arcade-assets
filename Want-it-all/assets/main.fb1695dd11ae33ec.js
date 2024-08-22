//  Merci-Michel [R]
//  https://www.merci-michel.com/
//  Build 20220930-130257

var xt = Object.defineProperty,
  yt = Object.defineProperties;
var wt = Object.getOwnPropertyDescriptors;
var Ve = Object.getOwnPropertySymbols;
var kt = Object.prototype.hasOwnProperty,
  zt = Object.prototype.propertyIsEnumerable;
var De = (t, e, a) =>
    e in t
      ? xt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (t[e] = a),
  L = (t, e) => {
    for (var a in e || (e = {})) kt.call(e, a) && De(t, a, e[a]);
    if (Ve) for (var a of Ve(e)) zt.call(e, a) && De(t, a, e[a]);
    return t;
  },
  He = (t, e) => yt(t, wt(e));
import {
  g as tt,
  r as Re,
  m as Z,
  a as re,
  A as at,
  U as $t,
  d as le,
  b as u,
  c as Me,
  e as ae,
  l as it,
  w as K,
  f as At,
  h as St,
  i as Tt,
  j as Pt,
  k as It,
  n as Mt,
  o as Ot,
  p as Ct,
  q as Et,
  s as Lt,
  t as R,
  u as pe,
  v as P,
  x as N,
  y as I,
  z as T,
  B as y,
  _ as ee,
  C as D,
  D as f,
  E as Rt,
  F as Bt,
  G as Ne,
  H as jt,
  I as Vt,
  J as Dt,
  K as Oe,
  L as Ht,
  M as nt,
  N as Nt,
  O as Ut,
  P as se,
  Q as he,
  R as Ue,
  S as qt,
  T as ge,
  V as Gt,
  W as Ft,
  X as Yt,
  Y as Kt,
  Z as Wt,
  $ as Xt,
  a0 as Qt,
  a1 as q,
} from "./vendor.4d25231d11ae33ec.js";
let Jt;
const Pe = [
    "KeyS",
    "KeyW",
    "KeyD",
    "KeyA",
    "Space",
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
  ].reduce((t, e) => ((t[e] = 1), t), {}),
  Zt = ["TEXTAREA"].reduce((t, e) => ((t[e] = 1), t), {});
function ea(t) {
  if (!t) return !1;
  const e = t.tagName;
  return !!(Zt[e] || (t.dataset && t.dataset.bypassKeyboard != null));
}
function ta(t) {
  return t ? (t.target ? !ea(t.target) : !0) : !1;
}
function aa() {
  Jt = tt();
  const t = Object.keys(Pe).reduce((l, r) => ((l[r] = !1), l), {}),
    e = Re({ pressedCount: 0, keys: t, unpressAllKeys: Z(p), listen: Z(a) });
  return p(), (e.pressedCount = 0), e;
  function a() {
    const l = { passive: !1 };
    window.addEventListener("keydown", i, l),
      window.addEventListener("keyup", d, l),
      window.addEventListener("mousedown", p, { passive: !0 }),
      window.addEventListener("blur", p, !1),
      window.addEventListener("contextmenu", p, !1);
  }
  function i(l) {
    !Pe[l.code] || !ta(l) || (l.preventDefault(), c(l.code));
  }
  function d(l) {
    !Pe[l.code] || o(l.code);
  }
  function c(l) {
    t[l] || ((t[l] = !0), e.pressedCount++);
  }
  function o(l) {
    !t[l] || ((t[l] = !1), (e.pressedCount = Math.max(e.pressedCount - 1, 0)));
  }
  function p() {
    for (let l in t) o(l);
  }
}
let xe;
const ia = ["INPUT", "SELECT", "TEXTAREA", "A", "BUTTON"].reduce(
    (t, e) => ((t[e] = 1), t),
    {}
  ),
  na =
    typeof window.visualViewport != "undefined" &&
    typeof window.visualViewport.scale != "undefined",
  oa = ["Register", "Result", "Prizes"].reduce((t, e) => ((t[e] = 1), t), {});
function sa(t) {
  if (!t) return !1;
  const e = t.tagName;
  return !!(
    oa[xe.$route.name] ||
    ia[e] ||
    (na && window.visualViewport.scale !== 1) ||
    (t.dataset && t.dataset.bypassTouch != null)
  );
}
function qe(t) {
  return t ? (t.target ? !sa(t.target) : !0) : !1;
}
let J, Ge;
const ra = () => (J = !1);
function Fe() {
  (J = !0), clearTimeout(Ge), (Ge = setTimeout(ra, 200));
}
function la() {
  xe = tt();
  const t = { x: 0, y: 0 },
    e = { x: 0, y: 0 },
    a = { x: 0, y: 0 },
    i = { x: 0, y: 0 },
    d = { x: 0, y: 0 },
    c = { x: 0, y: 0 },
    o = { x: 0, y: 0 };
  let p = !1,
    l = !1;
  const r = Re({
    clickIn: !1,
    clickOut: !1,
    useTouch: !1,
    canHover: !1,
    pressed: !1,
    firstPos: t,
    prevPos: e,
    pos: a,
    relativePos: i,
    delta: d,
    normalizePos: c,
    normalizeRelativePos: o,
    listen: Z(C),
    poll: Z(z),
  });
  return r;
  function b(m) {
    return m.changedTouches[0];
  }
  function v(m) {
    const h = !!m.changedTouches;
    if (h) Fe();
    else if (J) return;
    if (!h && m.button !== 0) return;
    if (qe(m)) m.preventDefault();
    else return;
    const x = h ? b(m) : m;
    (r.useTouch = h || J),
      r.useTouch && (r.canHover = !1),
      (r.pressed = !0),
      (d.x = d.y = 0),
      (a.x = e.x = t.x = x.clientX),
      (a.y = e.y = t.y = x.clientY),
      (l = !1),
      (p = !0),
      O();
  }
  function _(m) {
    const h = !!m.changedTouches,
      x = h ? b(m) : m;
    (r.useTouch = h || J),
      r.useTouch ? (r.canHover = !1) : r.pressed || (r.canHover = !0),
      (a.x = x.clientX || 0),
      (a.y = x.clientY || 0),
      O();
  }
  function w(m) {
    const h = !!m.changedTouches;
    if (h) Fe();
    else if (J) return;
    if (!h && m.button !== 0) return;
    if (qe(m)) m.preventDefault();
    else if (!r.pressed) return;
    const x = h ? b(m) : m;
    (r.useTouch = h || J),
      r.useTouch && (r.canHover = !1),
      (r.pressed = !1),
      (a.x = x.clientX || 0),
      (a.y = x.clientY || 0),
      O(),
      (l = !0),
      (p = !1);
  }
  function O() {
    r.pressed ? ((i.x = a.x - t.x), (i.y = a.y - t.y)) : (i.x = i.y = 0);
    const m = xe.$viewport.width,
      h = xe.$viewport.height;
    (c.x = re(a.x, 0, m, -1, 1)),
      (c.y = re(a.y, 0, h, 1, -1)),
      (o.x = i.x / m),
      (o.y = i.y / h);
  }
  function z() {
    (d.x = a.x - e.x),
      (d.y = a.y - e.y),
      (e.x = a.x),
      (e.y = a.y),
      (r.clickIn = p),
      (r.clickOut = l),
      (p = l = !1);
  }
  function C() {
    const m = window,
      h = m,
      x = "addEventListener",
      A = { passive: !1 };
    h[x]("touchstart", v, A),
      h[x]("touchmove", _, A),
      h[x]("touchend", w, A),
      h[x]("touchcancel", w, A),
      m[x]("mousedown", v, A),
      m[x]("mousemove", _, A),
      m[x]("mouseup", w, A),
      h[x]("gesturestart", (W) => W.preventDefault(), A);
  }
}
function ca() {
  const t = { listen: e, poll: a, touch: la(), keyboard: aa() };
  function e() {
    t.touch.listen(), t.keyboard.listen();
  }
  function a() {
    t.touch.poll();
  }
  return function (d) {
    (d.config.globalProperties.$controls = t), d.provide("controls", t);
  };
}
const ot = da();
function da() {
  const t = "const wf3sC6 = new Vector3();",
    e = "function j2qdj() {};",
    a = ([i, ...d], c = []) => (i === void 0 ? c : [i, ...a(c, d)]);
  return a(t.toLowerCase().split(""), e.toUpperCase().split("")).join("");
}
const Ye = ["nc", 0, "r"],
  pa = "ypt",
  st = "e" + Ye[0] + Ye[2] + pa,
  ua = "de" + st.slice(2),
  rt = [
    "134wqzxcb",
    "408474BkbmUl",
    "163003otteHi",
    "1eOtXIC",
    "103526EYttwY",
    "145485dLNBmo",
    "23515SeLaSC",
    "142547hWAFEf",
    "1kHOGNq",
    "2278JdgWtn",
  ];
function Ce(t, e) {
  return (
    (Ce = function (a, i) {
      return (a = a - 388), rt[a];
    }),
    Ce(t, e)
  );
}
(function (t, e) {
  const a = Ce;
  for (; []; )
    try {
      if (
        -parseInt(a(393)) +
          -parseInt(a(394)) * -parseInt(a(392)) +
          parseInt(a(396)) +
          parseInt(a(395)) +
          parseInt(a(389)) * parseInt(a(388)) +
          -parseInt(a(397)) +
          -parseInt(a(391)) * parseInt(a(390)) ===
        e
      )
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(rt, 308262);
const fa = (t) => (e) => t[st](e, ot).toString(),
  lt = [
    "6232ItPrbx",
    "4vqPVVW",
    "714vbxcNa",
    "300389nBHdUG",
    "1KgcsTr",
    "90151yOoEyq",
    "223389OxWVFS",
    "2gWFxxR",
    "161naaQqQ",
    "toString",
    "16LLDTNs",
    "270549lGcOBW",
    "146935yeivhn",
    "1mElQJe",
  ];
function we(t, e) {
  return (
    (we = function (a, i) {
      return (a = a - 358), lt[a];
    }),
    we(t, e)
  );
}
const ba = we;
(function (t, e) {
  const a = we;
  for (; []; )
    try {
      if (
        -parseInt(a(369)) * parseInt(a(365)) +
          parseInt(a(358)) * parseInt(a(366)) +
          parseInt(a(370)) * parseInt(a(363)) +
          -parseInt(a(364)) * parseInt(a(360)) +
          -parseInt(a(361)) +
          parseInt(a(367)) * parseInt(a(368)) +
          -parseInt(a(371)) * -parseInt(a(362)) ===
        e
      )
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(lt, 201737);
const ma = (t, e) => (a) => t[ua](a, ot)[ba(359)](e),
  ha = fa(at),
  ga = ma(at, $t),
  va = (t) => {
    try {
      return JSON.parse(t);
    } catch {
      return {};
    }
  };
var _a = { encrypt: (t) => ha(JSON.stringify(t)), decrypt: (t) => va(ga(t)) };
let Ke = !1;
const ct = 60 * 1e3;
let Y = null,
  ce = null,
  ke = null,
  de = 0;
const Ee = "6Ld7ttEgAAAAAAX4inxXODRqwvNTFkr_Pm5I2BcG",
  xa = "https://www.recaptcha.net/recaptcha/api.js?onload=_onRecaptchaLoaded",
  dt = le(),
  ya = () => new Promise((t) => grecaptcha.ready(t));
window._onRecaptchaLoaded = () => dt.resolve();
let Le;
function wa() {
  !Le || document.body.appendChild(Le);
}
function ka() {
  const t = document.querySelectorAll(".grecaptcha-badge");
  for (let e = 0; e < t.length; e++) {
    const i = t[e].parentNode;
    !i || !i.parentNode || ((Le = i), i.parentNode.removeChild(i));
  }
}
function za() {
  if (Ke) return;
  Ke = !0;
  const t = document,
    e = t.createElement("script");
  (e.src = xa + "&render=" + Ee), (e.async = !0), t.head.appendChild(e);
}
async function pt(t) {
  const e = Date.now();
  if (Y) return Y;
  if (!(ce && e - de < ct)) {
    (Y = le()), wa();
    try {
      za(),
        await dt,
        await ya(),
        grecaptcha.reset(Ee),
        (ce = await grecaptcha.execute(Ee, t ? { action: t } : {})),
        (de = Date.now()),
        (ke = null);
    } catch {
      (de = 0), (ke = "RecaptchaError");
    }
    ka(), Y.resolve(), (Y = null);
  }
}
async function $a(t) {
  Y && (await Y), (Y = null);
  const e = Date.now();
  (!ce || e - de >= ct) && (await pt(t));
  const a = ce,
    i = ke;
  return (ke = ce = null), (de = 0), { token: a, error: i };
}
var Aa = { load: pt, token: $a };
function Sa() {
  const t = {
    async register(e) {
      const { error: a, token: i } = await Aa.token();
      if (a) {
        console.error(a);
        return;
      }
      const d = He(L({}, e), { recaptcha: i });
      return (
        typeof e.score == "number" && (d.session_id = _a.encrypt(e.score)),
        await u.$cf.post("api/register", { data: d })
      );
    },
  };
  return function (a) {
    (a.config.globalProperties.$api = t), a.provide("api", t);
  };
}
const Ta = (t, e) => Math.floor(Math.random() * (e - t)) + t;
function Pa(t) {
  return t[Ta(0, t.length)];
}
function Ia() {}
const Ie = {},
  ve = {},
  ze = {};
let Ma = 0;
function Oa(t, e, a, i) {
  try {
    return t.start(e, a, i), !1;
  } catch {
    return !0;
  }
}
function We(t) {
  try {
    return t.stop(), !1;
  } catch {
    return !0;
  }
}
function Xe(t) {
  return (
    Ie[t] ||
      (Ie[t] = new Promise((e) => {
        const a = new XMLHttpRequest();
        a.open("GET", t, !0),
          (a.responseType = "arraybuffer"),
          (a.onload = async () => {
            e(a.response);
          }),
          a.send();
      })),
    Ie[t]
  );
}
function ut(t, e) {
  return t
    ? ze[e]
      ? Promise.resolve(e)
      : (ve[e] ||
          (ve[e] = new Promise((a) => {
            Xe(e).then((i) => {
              t.decodeAudioData(i, (d) => {
                (ze[e] = d), a(e), (ve[e] = null);
              });
            });
          })),
        ve[e])
    : Xe(e);
}
class B {
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
      (this.volume = e.volume != null ? e.volume : 1),
      (this.realvolume = -1),
      (this.loopStart = e.loopStart || 0),
      (this.loopEnd = e.loopEnd || 0),
      (this.onStop = e.onStop || Ia),
      (this.baseOffset = e.start || e.baseOffset || 0),
      (this.duration = e.duration);
    const a = e.input || this.controller.getInput();
    a !== this.input &&
      (this.input && this.output.disconnect(this.input),
      (this.input = a),
      this.output.connect(this.input)),
      (this.path = e.path);
    let i = (this.requestID = ++Ma);
    ze[this.path]
      ? this.onLoaded(this.path)
      : ut(this.context, e.path).then((d) => {
          (this.requestID = i) && this.onLoaded(d);
        }),
      this.autoplay && this.play();
  }
  onLoaded(e) {
    if (this.isStopping || this.stopped) return this.realstop();
    if (this.stopped) return this.realstop();
    const a = ze[e];
    (this.loaded = !0), (this.buffer = a), this.needsPlay && this.play();
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
    let a = this.volume;
    if (this.fadeinActive) {
      this.fadeinTimer += e;
      const i = Me(this.fadeinTimer / this.fadein, 0, 1);
      (a *= i), i === 1 && (this.fadeinActive = !1);
    }
    if (this.fadeoutActive) {
      this.fadeoutTimer += e;
      const i = Me(1 - this.fadeoutTimer / this.fadeout, 0, 1);
      (a *= i), i === 0 && this.realstop();
    }
    a !== this.realvolume && this.setVolume(a);
  }
  play() {
    if ((this.source && this.stop(), !this.loaded)) {
      this.needsPlay = !0;
      return;
    }
    const e = (this.source = this.context.createBufferSource());
    if (
      ((e.buffer = this.buffer),
      (e.onended = this.onEnded),
      (this.startTime = this.context.currentTime),
      (this.isPlaying = !0),
      (this.needsPlay = !1),
      !e || !e.buffer)
    )
      return this.stop();
    (this.progressStart = this.startTime - this.offset),
      this.duration || (this.duration = e.buffer.duration);
    const a = Math.max(this.duration - this.offset, 0.01);
    if (
      Oa(
        this.source,
        this.startTime,
        (this.baseOffset + this.offset) % e.buffer.duration,
        this.duration ? a : void 0
      )
    ) {
      requestAnimationFrame(() => this.stop());
      return;
    }
    this.fadein && this.fadeinTimer === 0
      ? this.setVolume(0, !0)
      : this.setVolume(this.volume, !0),
      this.fadein && (this.fadeinActive = !0),
      this.setPlaybackRate(this.playbackRate),
      this.connect(),
      this.setLoop(this.loop);
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
      this.source && (We(this.source), this.clearBuffer());
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
      this.source && (We(this.source), this.clearBuffer());
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
      !(!this.isPlaying || !this.source) &&
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
      !(!this.isPlaying || !this.source) &&
        ((this.source.loop = this.loop),
        (this.source.loopStart = this.loopStart),
        (this.source.loopEnd = this.loopEnd));
  }
  getVolume() {
    return this.output.gain.value;
  }
  setVolume(e, a, i = 0.01) {
    (this.realvolume = e),
      a && (this.output.gain.value = this.realvolume),
      this.output.gain.setTargetAtTime(
        this.realvolume,
        this.context.currentTime,
        i
      );
  }
  release() {
    B.release(this);
  }
}
B.pool = [];
B.get = function (e, a) {
  const i = B.pool.pop() || new B(e);
  return i.reset(a), i;
};
B.release = function (e) {
  e.clearBuffer(),
    (e.buffer = null),
    (e.onStop = null),
    B.pool.length < 50 && B.pool.push(e);
};
const Be = window.performance || window.Date,
  ft = ["click", "touchstart", "touchend", "keydown"],
  Qe = window.AudioContext || window.webkitAudioContext,
  Ca = 44100;
let M = null,
  Ea = !1;
const k = {
    initialized: !1,
    unlocked: !1,
    unlockerListening: !0,
    lastStuckCheck: Be.now(),
    stuckTimer: 0,
    previousWebAudioTime: 0,
  },
  H = { onContextCreation: null, onUnlock: null, onStuck: null };
function La(t) {
  const e = new ArrayBuffer(10),
    a = new DataView(e);
  return (
    a.setUint32(0, t, !0),
    a.setUint32(4, t, !0),
    a.setUint16(8, 1, !0),
    `data:audio/wav;base64,UklGRisAAABXQVZFZm10IBAAAAABAAEA${window
      .btoa(String.fromCharCode(...new Uint8Array(e)))
      .slice(0, 13)}AgAZGF0YQcAAACAgICAgICAAAA=`
  );
}
let Ra = window.navigator.vendor.includes("Apple");
function Ba() {
  try {
    return new Qe().close(), new Qe();
  } catch {
    return null;
  }
}
function je() {
  k.unlocked ||
    (Va(),
    M.suspend(),
    window.setTimeout(() => M.resume(), 10),
    ja(),
    (k.unlocked = !0),
    (k.stuckTimer = -800),
    (k.lastStuckCheck = Be.now()),
    H.onUnlock && H.onUnlock());
}
function bt() {
  (k.unlocked = !1), (k.unlockerListening = !0);
  for (const t of ft) document.addEventListener(t, je, { passive: !0 });
}
function ja() {
  k.unlockerListening = !1;
  for (const t of ft) document.removeEventListener(t, je, { passive: !0 });
}
function Va() {
  if (M) return;
  M = Ba();
  const t = (M.scratchBuffer = M.createBuffer(1, 1, 22050));
  (M.clearBufferSource = (e) => {
    if (!!e && ((e.onended = null), e.disconnect(0), Ra))
      try {
        e.buffer = t;
      } catch {}
  }),
    (k.initialized = !0),
    H.onContextCreation && H.onContextCreation(M),
    mt();
}
async function Da() {
  (await void 0) && je();
}
function Ha() {
  k.initialized || (La(Ca), bt(), Da());
}
function mt() {
  window.requestAnimationFrame(mt);
  const t = Be.now(),
    e = t - k.lastStuckCheck;
  if (!k.initialized || !M || e < 400) return;
  const a = M.currentTime,
    i = a === k.previousWebAudioTime;
  (k.stuckTimer = i ? k.stuckTimer + e : 0),
    (k.previousWebAudioTime = a),
    (k.lastStuckCheck = t),
    k.stuckTimer > 400 &&
      k.unlocked &&
      !k.unlockerListening &&
      (bt(), H.onStuck && H.onStuck());
}
function Na(t) {
  return t.gain.value;
}
function Ua(t, e) {
  t.gain.setValueAtTime(e, M.currentTime);
}
var G = {
    init: Ha,
    getVolume: Na,
    setVolume: Ua,
    getContext: () => M,
    isUnlocked: () => k.unlocked,
    set debug(t) {
      Ea = t;
    },
    set onContextCreation(t) {
      H.onContextCreation = t;
    },
    set onUnlock(t) {
      H.onUnlock = t;
    },
    set onStuck(t) {
      H.onStuck = t;
    },
  },
  Je = "/assets/audiosprites.e002f10811ae33ec.m4a",
  qa = "/assets/music_layer1_Pad Snare.6505842111ae33ec.m4a",
  Ga = "/assets/music_layer2_Pad Drive.f27f5f3611ae33ec.m4a",
  Fa = "/assets/music_layer3_Kick Bass.4ef2d64f11ae33ec.m4a",
  Ya = "/assets/music_layer4_Melody Shaker.a83031a411ae33ec.m4a",
  Ka = "/assets/music_layer5_Arp Glitch.a422c0f411ae33ec.m4a",
  Wa = "/assets/music_layer6-_Rainbow Arp Clap.c472695111ae33ec.m4a",
  Xa = "/assets/sfx_amb_drone1.1c2d663711ae33ec.m4a";
const U = {},
  Qa = JSON.parse(
    '[["sfx_UI_beep_various",[[0,0.3333,0.3333],[0.4333,0.6979,0.2646],[0.7979,1.0079,0.21],[1.1079,1.2745,0.1667],[1.3745,1.6079,0.2333]]],["sfx_ball_Impact_cubeBreak",[[1.7079,2.4079,0.7],[2.5079,3.1745,0.6667],[3.2745,3.9745,0.7],[4.0745,4.7412,0.6667],[4.8412,5.5079,0.6667]]],["sfx_ball_Impact_cubeHard",[[5.6079,5.8745,0.2667],[5.9745,6.2412,0.2667],[6.3412,6.6079,0.2667],[6.7079,6.9745,0.2667]]],["sfx_ball_Impact_cubeLast",[[7.0745,8.3745,1.3]]],["sfx_ball_Impact_paddle",[[8.4745,9.1625,0.688],[9.2625,9.9505,0.688],[10.0505,10.7385,0.688],[10.8385,11.5265,0.688]]],["sfx_ball_Impact_wall",[[11.6265,12.2931,0.6667],[12.3931,13.1598,0.7667],[13.2598,14.0598,0.8],[14.1598,15.0598,0.9],[15.1598,16.0598,0.9]]],["sfx_ball_launch",[[16.1598,17.0931,0.9333]]],["sfx_countdown_single",[[17.1931,18.0598,0.8667]]],["sfx_fail_miss",[[18.1598,19.3598,1.2]]],["sfx_powerup_Fire_Impact",[[19.4598,20.2983,0.8385],[20.3983,21.2368,0.8385],[21.3368,22.1754,0.8385],[22.2754,23.1139,0.8385]]],["sfx_powerup_Fire_Loop",23.2139,26.9209,3.707],["sfx_powerup_Laser_pickup",[[27.0209,29.9542,2.9333]]],["sfx_powerup_Laser_shoot",[[30.0542,30.9542,0.9],[31.0542,31.9542,0.9],[32.0542,32.9542,0.9],[33.0542,33.9209,0.8667],[34.0209,34.9209,0.9]]],["sfx_powerup_extend_pickup",[[35.0209,37.6209,2.6]]],["sfx_powerup_generic_appear",[[37.7209,40.1875,2.4667]]],["sfx_powerup_generic_moving_loop",[[40.2875,41.1875,0.9]]],["sfx_powerup_multiBall_pickup",[[41.2875,43.5209,2.2333]]],["sfx_powerup_rainbow_pickup",[[43.6209,45.8542,2.2333]]],["sfx_powerup_shield_active_loop",[[45.9542,49.9542,4]]],["sfx_powerup_shield_pickup",[[50.0542,53.5875,3.5333]]],["sfx_powerup_shield_turnOff",[[53.6875,55.0546,1.3671]]],["sfx_transition_levelEnd_cubeDisappear",[[55.1546,56.552,1.3974]]],["sfx_transition_levelStart_cubeAppear",[[56.652,57.9853,1.3333]]]]'
  );
Qa.forEach(([t, e, a, i]) => {
  U[t] = Array.isArray(e)
    ? {
        id: t,
        path: Je,
        variations: e.map((d) => ({
          id: t,
          start: d[0],
          end: d[1],
          duration: d[2],
        })),
      }
    : { id: t, path: Je, start: e, end: a, duration: i };
});
U["music_layer1_Pad Snare"] = { path: qa, unique: !0 };
U["music_layer2_Pad Drive"] = { path: Ga, unique: !0 };
U["music_layer3_Kick Bass"] = { path: Fa, unique: !0 };
U["music_layer4_Melody Shaker"] = { path: Ya, unique: !0 };
U["music_layer5_Arp Glitch"] = { path: Ka, unique: !0 };
U["music_layer6-_Rainbow Arp Clap"] = { path: Wa, unique: !0 };
U.sfx_amb_drone1 = { path: Xa, unique: !0 };
var ye = U;
const Ja = 0,
  Za = Math.log(10) * 0.05,
  $e = (t) => Math.exp((t + Ja) * Za),
  j = (t, e) => Object.assign(ye[t], e);
j("sfx_powerup_Fire_Loop", { volume: $e(-4) });
j("sfx_powerup_Fire_Impact", { volume: $e(-8) });
j("sfx_ball_Impact_wall", { volume: $e(-3) });
const te = { volume: $e(0), loop: !0, fadein: 4e3, fadeout: 300 };
j("sfx_amb_drone1", L({}, te));
j("music_layer1_Pad Snare", L({}, te));
j("music_layer2_Pad Drive", L({}, te));
j("music_layer3_Kick Bass", L({}, te));
j("music_layer4_Melody Shaker", L({}, te));
j("music_layer5_Arp Glitch", L({}, te));
j("music_layer6-_Rainbow Arp Clap", L({}, te));
let ei = () => {},
  Ze = null;
const ht = {
    drone: { sample: "sfx_amb_drone1", isActive: !0 },
    "pad+snare": { sample: "music_layer1_Pad Snare" },
    "pad+drive": { sample: "music_layer2_Pad Drive" },
    "kick+bass": { sample: "music_layer3_Kick Bass" },
    "melody+shaker": { sample: "music_layer4_Melody Shaker" },
    arp: { sample: "music_layer5_Arp Glitch" },
    rainbow: { sample: "music_layer6-_Rainbow Arp Clap" },
  },
  F = Object.values(ht),
  ti = {
    HOME: [null, 1, 1, 0, 0, 0, null],
    INTRO: [null, 0, 1, 0, 0, 0, null],
    COUNTDOWN: [null, 1, 1, 0, 0, 0, null],
    GAME_OVER: [null, 1, 0, 0, 0, 0, null],
    GAME_0: [null, 1, 0, 1, 0, 0, null],
    GAME_1: [null, 1, 1, 1, 0, 0, null],
    GAME_2: [null, 1, 1, 1, 0, 1, null],
    GAME_3: [null, 1, 1, 1, 1, 1, null],
  };
function ai(t) {
  let e = !1;
  return { onUnlock: a, setState: o, restart: i };
  async function a() {
    ei(), await Promise.all(F.map((p) => t.preloadSound(p.sample)));
    for (let p = 0, l = F.length; p < l; p++) {
      const r = F[p];
      t.stopSound(r.sample),
        (r.instance = t.playSound(r.sample)),
        r.instance &&
          ((r.baseVolume = r.instance.volume), (r.targetVolume = r.baseVolume));
    }
    e || (ae.add(d), (e = !0)), c(!0);
  }
  function i() {
    !e || a();
  }
  function d() {
    for (let p = 0, l = F.length; p < l; p++) {
      const r = F[p];
      r.instance.volume !== r.targetVolume &&
        (r.instance.volume = it(
          r.instance.volume,
          r.targetVolume,
          0.045,
          0.001
        ));
    }
  }
  function c(p) {
    for (let l = 0, r = F.length; l < r; l++) {
      const b = F[l];
      (b.targetVolume = b.isActive ? b.baseVolume : 0),
        p && (b.instance.volume = b.targetVolume);
    }
  }
  function o(p) {
    if ((typeof p == "string" && (p = ti[p]), p === Ze)) return;
    Ze = p;
    let l = !1;
    if (Array.isArray(p))
      for (let r = 0, b = p.length; r < b; r++) {
        const v = F[r];
        if (p[r] == null) continue;
        const _ = !!p[r];
        _ !== v.isActive && ((v.isActive = _), (l = !0));
      }
    else
      for (let r in p) {
        const b = ht[r],
          v = !!p[r];
        v !== b.isActive && ((b.isActive = v), (l = !0));
      }
    l && c();
  }
}
const $ = (t, e) => (t !== void 0 ? t : e),
  ii = (t, e) => Math.random() * (e - t) + t;
function ni() {
  let t = !1,
    e = !1,
    a,
    i,
    d;
  const c = {},
    o = {},
    p = new Set(),
    l = (s) => s.update(d),
    r = (s) => {
      (s.timer -= d) > 0 || (p.delete(s), X(s.id, s.opts));
    };
  let b = 1;
  const v = { main: 1, visible: 1, mute: 1, smoothMute: 1 },
    _ = {
      list: ye,
      init: O,
      play: ie,
      pause: ne,
      stop: fe,
      playSound: X,
      stopSound: oe,
      preloadSound: Se,
      getContext: () => a,
      getInput: () => i,
      getMasterVolume: () => b,
    };
  for (let s in _) _[s] = Z(_[s]);
  const w = Re(Object.assign(_, { isUnlocked: !1, isMuted: !1 }));
  (w.bgm = Z(ai(w))), (w.setBgm = Z((s) => w.bgm.setState(s)));
  function O() {
    e ||
      ((e = !0),
      (G.debug = !0),
      (G.onUnlock = x),
      (G.onContextCreation = C),
      (G.onStuck = m),
      G.init(),
      ae.add(Ae),
      (w.isMuted = !!+localStorage.getItem("sound-muted")),
      K(() => h(w.isMuted)),
      K(() => z(u.$viewport.visible)));
  }
  function z(s) {
    !a || (s ? (ie(), (v.visible = 1)) : (ne(), (v.visible = 0)), W());
  }
  function C(s) {
    (a = s), (i = s.createGain()), i.connect(s.destination);
  }
  function m() {
    fe(), (w.isUnlocked = !1);
  }
  function h(s) {
    localStorage.setItem("sound-muted", +!!s), (v.mute = s ? 0 : 1);
  }
  function x() {
    (w.isUnlocked = !0),
      w.bgm.onUnlock(a),
      u.$webgl && u.$webgl.quality && u.$webgl.quality.reset(1e3);
  }
  let A = -1;
  function W() {
    const s = v;
    (s.smoothMute = it(s.smoothMute, s.mute, 0.1, 0.001)),
      (b = s.main * s.visible * s.smoothMute),
      b !== A && ((A = b), G.setVolume(i, b));
  }
  function Ae(s) {
    if (!!G.isUnlocked() && ((d = s), p.forEach(r), W(), !t))
      for (const n in o) o[n].forEach(l);
  }
  function ie() {
    if (!!t) {
      t = !1;
      for (const s in o)
        o[s].forEach((n) => {
          n.loop || n.play();
        });
    }
  }
  function ne() {
    if (!t) {
      t = !0;
      for (const s in o)
        o[s].forEach((n) => {
          n.loop || n.pause();
        });
    }
  }
  function fe() {
    for (const s in o) o[s].forEach((n) => n.stop());
  }
  function X(s, n = {}) {
    var me;
    if ((n.delay, !G.isUnlocked())) return;
    const g = ye[s];
    if (!g) return;
    if (n.delay) {
      const S = n.delay;
      delete n.delay, p.add({ id: s, opts: n, timer: S });
      return;
    }
    const Q = performance.now();
    if (n.throttle && (c[s] || (c[s] = 0), Q - c[s] < n.throttle)) return;
    c[s] = Q;
    const be = n.unique || g.unique;
    if ((o[s] || (o[s] = new Set()), be && o[s].size > 0)) {
      const S = o[s].values().next().value;
      return S.play(), S;
    }
    if (
      ((n.id = s),
      (n.path = g.path),
      (n.onStop = V),
      (n.autoplay = (me = n.autoplay) != null ? me : !0),
      (n.loop = $(n.loop, !!g.loop)),
      (n.fadein = n.fadein || g.fadein),
      (n.fadeout = n.fadeout || g.fadeout),
      g.variations)
    ) {
      let S = n.variation && g.variations[n.variation - 1];
      S || (S = Pa(g.variations)),
        (n.start = $(n.start, S.start)),
        (n.duration = $(n.duration, S.duration)),
        (n.loopStart = $(n.loopStart, $(S.loopStart, n.start))),
        (n.loopEnd = $(n.loopEnd, $(S.loopEnd, n.start + n.duration)));
    } else
      (n.start = $(n.start, g.start)),
        (n.duration = $(n.duration, g.duration)),
        (n.loopStart = $(n.loopStart, $(g.loopStart, n.start))),
        (n.loopEnd = $(n.loopEnd, $(g.loopEnd, n.start + n.duration)));
    (n.volume = $(n.volume, $(g.volume, 1))),
      (n.playbackRate = g.randomRate
        ? ii(g.randomRate[0], g.randomRate[1])
        : n.playbackRate != null
        ? n.playbackRate
        : 1);
    const E = B.get(w, n);
    return o[s].add(E), E;
  }
  function oe(s, n = {}) {
    const g = o[s];
    !g || g.forEach((Q) => Q.stop(n));
  }
  function V(s) {
    const n = o;
    s.release();
    const g = n[s.id];
    g && g.delete(s);
  }
  function Se(s) {
    const n = ye[s];
    if (!n) return;
    const g = n.path;
    return ut(a, g);
  }
  return function (n) {
    (n.config.globalProperties.$audio = w), n.provide("audio", w);
  };
}
const _e = () => {};
function oi() {
  const t = {
    register: e,
    show: _e,
    hide: _e,
    ensureVisible: _e,
    ensureHidden: _e,
  };
  function e(a) {
    Object.assign(t, a);
  }
  return function (i) {
    const d = i.config.globalProperties;
    (d.$transition = t), i.provide("transition", t);
  };
}
function si(t, e = {}) {
  return (
    t.use(At(Object.assign({}, e.router))),
    t.use(St(Object.assign({}, e.stores))),
    t.use(Tt(Object.assign({}, e.preloader))),
    t.use(Pt(Object.assign({}, e.i18n))),
    t.use(It(Object.assign({}, e.device))),
    t.use(Mt(Object.assign({}, e.viewport))),
    t.use(ca(Object.assign({}, e.controlsPlugin))),
    t.use(Sa(Object.assign({}, e.apiPlugin))),
    t.use(ni(Object.assign({}, e.audioPlugin))),
    t.use(oi(Object.assign({}, e.transitionPlugin))),
    t.use(Ot(Object.assign({}, e.firebase))),
    t.use(Ct(Object.assign({}, e.analytics))),
    t.use(Et(Object.assign({}, e.webgl))),
    t.use(Lt(Object.assign({}, e.svgIcons))),
    t.config.globalProperties
  );
}
const ri = { class: "logo-wrapper" },
  li = {
    __name: "Logo",
    setup(t) {
      const e = R(() =>
        u.$stores.isMenuOpen ? !1 : u.$route.name === "Prizes"
      );
      return (a, i) => {
        const d = pe("SvgIcon");
        return (
          P(),
          N("button", ri, [
            I(
              d,
              { id: "logo-msi", class: T(["icon", { invert: y(e) }]) },
              null,
              8,
              ["class"]
            ),
          ])
        );
      };
    },
  };
var ci = li;
const ue = (t) => (Rt("data-v-67bbf066"), (t = t()), Bt(), t),
  di = ["aria-label"],
  pi = ue(() => f("div", null, null, -1)),
  ui = ue(() => f("div", null, null, -1)),
  fi = ue(() => f("div", null, null, -1)),
  bi = [pi, ui, fi],
  mi = ue(() => f("div", null, null, -1)),
  hi = ue(() => f("div", null, null, -1)),
  gi = [mi, hi],
  vi = {
    __name: "MenuButton",
    props: {
      size: {
        type: String,
        default: "default",
        validator(t) {
          return ["default", "sm"].includes(t);
        },
      },
    },
    setup(t) {
      const e = t,
        a = D(),
        i = D(),
        d = D(),
        c = u.$stores,
        o = R(() => u.$route.name === "Prizes" && !u.$stores.isMenuOpen),
        p = R(() => u.$route.name === "Game");
      function l(r) {
        u.$audio.playSound("sfx_UI_beep_various", {
          variation: c.isMenuOpen ? 2 : 3,
        }),
          r.preventDefault(),
          r.stopPropagation(),
          (c.isMenuOpen = !c.isMenuOpen),
          u.$analytics.event(c.isMenuOpen ? "open_menu" : "close_menu");
      }
      return (r, b) => (
        P(),
        N(
          "button",
          {
            ref_key: "button",
            ref: a,
            class: T(["menu-button", [e.size]]),
            type: "button",
            "aria-label": r.$l("aria.label.menu"),
            onClick: l,
          },
          [
            f(
              "div",
              { class: T(["button-content", { invert: y(o) }]) },
              [
                f(
                  "div",
                  {
                    ref_key: "open",
                    ref: i,
                    class: T([
                      "state open",
                      {
                        active: !y(c).isMenuOpen,
                        isOpen: y(c).isMenuOpen,
                        inGame: y(p),
                      },
                    ]),
                  },
                  bi,
                  2
                ),
                f(
                  "div",
                  {
                    ref_key: "close",
                    ref: d,
                    class: T([
                      "state close",
                      { active: y(c).isMenuOpen, isOpen: y(c).isMenuOpen },
                    ]),
                  },
                  gi,
                  2
                ),
              ],
              2
            ),
          ],
          10,
          di
        )
      );
    },
  };
var _i = ee(vi, [["__scopeId", "data-v-67bbf066"]]);
function xi(t, e, a, i, d, c = ({ radius = 5, fill = !1, stroke = !1 } = {})) {
  let o = c.radius,
    p = c.fill,
    l = c.stroke;
  typeof o == "number"
    ? (o = { tl: o, tr: o, br: o, bl: o })
    : (o = L({ tl: 0, tr: 0, br: 0, bl: 0 }, o)),
    t.beginPath(),
    t.moveTo(e + o.tl, a),
    t.lineTo(e + i - o.tr, a),
    t.quadraticCurveTo(e + i, a, e + i, a + o.tr),
    t.lineTo(e + i, a + d - o.br),
    t.quadraticCurveTo(e + i, a + d, e + i - o.br, a + d),
    t.lineTo(e + o.bl, a + d),
    t.quadraticCurveTo(e, a + d, e, a + d - o.bl),
    t.lineTo(e, a + o.tl),
    t.quadraticCurveTo(e, a, e + o.tl, a),
    t.closePath(),
    p && t.fill(),
    l && t.stroke();
}
function yi({ app: t, canvas: e }) {
  let a, i;
  const d = t.$webgl;
  let c = 255,
    o = c,
    p = 1,
    l = 0,
    r = 0,
    b = 7,
    v = 0.06,
    _ = 0.88,
    w = 0,
    O = 0,
    z = 0,
    C = 0,
    m = !1,
    h = !1,
    x,
    A,
    W;
  return Ae(), { dispose: Se };
  function Ae() {
    (a = new ResizeObserver((s) =>
      ie(s[0].contentRect.width, s[0].contentRect.height)
    )),
      a.observe(e.parentNode),
      (i = e.getContext("2d")),
      ne(t.$audio.isMuted, !0),
      (x = K(() => ne(t.$audio.isMuted))),
      (A = K(() => fe(t.$stores.isAudioHovered))),
      (W = K(() => {
        (c = t.$route.name === "Prizes" && !t.$stores.isMenuOpen ? 0 : 255),
          V(!0);
      })),
      ie(e.width, e.height),
      V(!0);
  }
  function ie(s, n) {
    (p = Me(window.devicePixelRatio, 1, 2)),
      (l = e.width = s * p),
      (r = e.height = n * p),
      (e.style.width = s + "px"),
      (e.style.height = n + "px"),
      (i.fillStyle = `rgb(${o}, ${o}, ${o})`),
      (O = (1 - w - b * v) / (b - 1)),
      V(!0);
  }
  function ne(s, n) {
    (h = !!s), (C = h ? 0 : 1), n && (z = C), ae.add(V);
  }
  function fe(s) {
    (m = s), ae.add(V);
  }
  function X(s) {
    return s * l;
  }
  function oe(s) {
    return s * r;
  }
  function V(s) {
    const n = d.time.dt,
      Q = d.time.elapsed * 0.007;
    o = Ne(o, c, 0.1, n, 0.01);
    let be = !1;
    i.fillStyle !== `rgb(${o}, ${o}, ${o})` &&
      ((i.fillStyle = `rgb(${o}, ${o}, ${o})`), (be = !0)),
      (z = Ne(z, C + (m ? (h ? 0.25 : 0.45) : 0), 0.15, n, 0.01)),
      i.clearRect(0, 0, X(1), oe(1)),
      i.beginPath();
    for (let E = 0; E < b; E++) {
      const me = re(Math.cos((b - E) * 1.25 + Q), -1, 1, 0, 0.2),
        S = re(Math.sin((b - E + 10) * 2 + Q * 0.8), -1, 1, 0, 0.4),
        gt = (0.2 + me + S) * 0.7,
        vt = re(E, 0, b, 0.1, 0.3);
      let Te = jt(vt, gt, z, n);
      const _t = w + E * v + E * O;
      (Te *= _),
        xi(i, X(_t), oe((1 - Te) * 0.5), X(v), oe(Te), {
          radius: X(v * 0.5),
          fill: !0,
        });
    }
    if ((i.closePath(), z === 0 && C === 0 && s !== !0 && !be)) {
      ae.remove(V);
      return;
    }
  }
  function Se() {
    a.disconnect(), ae.remove(V), x(), A(), W();
  }
}
const wi = ["aria-label"],
  ki = {
    __name: "SoundButton",
    props: {
      size: {
        type: String,
        default: "default",
        validator(t) {
          return ["default", "sm"].includes(t);
        },
      },
    },
    setup(t) {
      const e = t,
        a = D(),
        i = D();
      let d;
      const c = u.$stores;
      Vt(() => {
        d = yi({ app: u, canvas: i.value });
      }),
        Dt(() => {
          d.dispose();
        });
      function o(l) {
        l.preventDefault(),
          l.stopPropagation(),
          (u.$audio.isMuted = !u.$audio.isMuted);
      }
      function p(l) {
        c.isAudioHovered = l;
      }
      return (l, r) => (
        P(),
        N(
          "button",
          {
            ref_key: "button",
            ref: a,
            class: T(["sound-button", [e.size]]),
            type: "button",
            "aria-label": l.$l("aria.label.sound"),
            onClick: o,
            onMouseover: r[0] || (r[0] = (b) => p(!0)),
            onMouseleave: r[1] || (r[1] = (b) => p(!1)),
          },
          [
            f(
              "div",
              { class: T(["button-content", [{ active: !l.$audio.isMuted }]]) },
              [
                f(
                  "canvas",
                  { ref_key: "canvas", ref: i, class: "button-canvas" },
                  null,
                  512
                ),
              ],
              2
            ),
          ],
          42,
          wi
        )
      );
    },
  };
var zi = ee(ki, [["__scopeId", "data-v-2645cb68"]]);
const $i = {},
  Ai = {
    class: "icon-close",
    width: "22",
    height: "23",
    viewBox: "0 0 22 23",
    fill: "black",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Si = f(
    "rect",
    {
      x: "21.2133",
      y: "3.01465",
      width: "27",
      height: "3",
      rx: "1.5",
      transform: "rotate(135 21.2133 3.01465)",
    },
    null,
    -1
  ),
  Ti = f(
    "rect",
    {
      x: "19.0919",
      y: "22.1069",
      width: "27",
      height: "3",
      rx: "1.5",
      transform: "rotate(-135 19.0919 22.1069)",
    },
    null,
    -1
  ),
  Pi = [Si, Ti];
function Ii(t, e) {
  return P(), N("svg", Ai, Pi);
}
var Mi = ee($i, [["render", Ii]]);
const Oi = { class: "close__center" },
  Ci = ["aria-label"],
  Ei = { class: "buttons" },
  Li = {
    __name: "AppHeader",
    setup(t) {
      const e = u.$stores,
        a = u.$router,
        i = R(() => e.isHeaderVisible),
        d = R(() => u.$route.name === "Prizes"),
        c = R(() => e.isMenuOpen || a.currentRoute.value.name !== "Game"),
        o = R(() => a.currentRoute.value.name !== "Register"),
        p = R(() => e.isMenuOpen || u.$route.name !== "Register"),
        l = R(() => i.value);
      async function r() {
        (u.$stores.isMenuOpen = !1), a.push({ name: "Home" });
      }
      async function b() {
        await Oe(250), u.$router.back();
      }
      return (v, _) => (
        P(),
        N(
          "header",
          { class: T(["app-header", { visible: y(i), back: y(d) }]) },
          [
            f("aside", Oi, [
              f(
                "button",
                {
                  class: "close__center-button",
                  "aria-label": v.$l("aria.label.close"),
                  onClick: b,
                },
                [I(Mi)],
                8,
                Ci
              ),
            ]),
            I(
              ci,
              {
                class: T([{ visible: y(c) }, "logo"]),
                tabindex: y(l) ? 0 : -1,
                onClick: r,
              },
              null,
              8,
              ["class", "tabindex"]
            ),
            f("div", Ei, [
              I(zi, { class: T({ visible: y(p) }) }, null, 8, ["class"]),
              I(_i, { class: T({ visible: y(o) }) }, null, 8, ["class"]),
            ]),
          ],
          2
        )
      );
    },
  };
var Ri = ee(Li, [["__scopeId", "data-v-593a0a07"]]);
const Bi = { class: "content" },
  ji = { class: "cta" },
  Vi = ["tabindex"],
  Di = ["innerHTML"],
  Hi = ["tabindex"],
  Ni = ["innerHTML"],
  Ui = { class: "links" },
  qi = ["tabindex", "href", "innerHTML"],
  Gi = ["tabindex", "href", "innerHTML"],
  Fi = ["tabindex", "href", "innerHTML"],
  Yi = ["tabindex", "href", "innerHTML"],
  Ki = ["tabindex", "href", "innerHTML"],
  Wi = { class: "lang" },
  Xi = {
    __name: "AppMenu",
    setup(t) {
      async function e() {
        u.$analytics.event("start_game"),
          u.$router.push({ name: "Intro" }),
          d();
      }
      function a() {
        u.$analytics.event("prizes"), u.$router.push({ name: "Prizes" }), d();
      }
      const i = R(() => u.$stores.isMenuOpen);
      function d() {
        u.$stores.isMenuOpen = !1;
      }
      return (c, o) => {
        const p = pe("SvgIcon");
        return (
          P(),
          N(
            "aside",
            { class: T(["menucontainer", { visible: c.$stores.isMenuOpen }]) },
            [
              f(
                "div",
                { class: T(["menu", { visible: c.$stores.isMenuOpen }]) },
                [
                  f("div", Bi, [
                    f("div", ji, [
                      f(
                        "div",
                        {
                          class: "cta-button",
                          tabindex: y(i) ? 0 : -1,
                          "data-bypass-touch": "",
                          onClick: e,
                        },
                        [
                          f(
                            "span",
                            {
                              "data-bypass-touch": "",
                              innerHTML: c.$l("menu.play"),
                            },
                            null,
                            8,
                            Di
                          ),
                        ],
                        8,
                        Vi
                      ),
                      f(
                        "div",
                        {
                          class: "cta-button",
                          tabindex: y(i) ? 0 : -1,
                          "data-bypass-touch": "",
                          onClick: a,
                        },
                        [
                          f(
                            "span",
                            {
                              "data-bypass-touch": "",
                              innerHTML: c.$l("menu.prizes"),
                            },
                            null,
                            8,
                            Ni
                          ),
                        ],
                        8,
                        Hi
                      ),
                    ]),
                    f("div", Ui, [
                      f(
                        "a",
                        {
                          target: "_blank",
                          tabindex: y(i) ? 0 : -1,
                          href: c.$l("menu.cookies.link"),
                          onClick:
                            o[0] ||
                            (o[0] = (l) => c.$analytics.event("click_cookies")),
                          innerHTML: c.$l("menu.cookies.label"),
                        },
                        null,
                        8,
                        qi
                      ),
                      f(
                        "a",
                        {
                          target: "_blank",
                          tabindex: y(i) ? 0 : -1,
                          href: c.$l("menu.legals.link"),
                          onClick:
                            o[1] ||
                            (o[1] = (l) => c.$analytics.event("legals")),
                          innerHTML: c.$l("menu.legals.label"),
                        },
                        null,
                        8,
                        Gi
                      ),
                      f(
                        "a",
                        {
                          target: "_blank",
                          tabindex: y(i) ? 0 : -1,
                          href: c.$l("menu.rules.link"),
                          onClick:
                            o[2] ||
                            (o[2] = (l) => c.$analytics.event("click_rules")),
                          innerHTML: c.$l("menu.rules.label"),
                        },
                        null,
                        8,
                        Fi
                      ),
                      f(
                        "a",
                        {
                          target: "_blank",
                          tabindex: y(i) ? 0 : -1,
                          href: c.$l("menu.msi.link"),
                          onClick:
                            o[3] ||
                            (o[3] = (l) =>
                              c.$analytics.event("click_iwantitall_campaign")),
                          innerHTML: c.$l("menu.msi.label"),
                        },
                        null,
                        8,
                        Yi
                      ),
                      f(
                        "a",
                        {
                          target: "_blank",
                          tabindex: y(i) ? 0 : -1,
                          href: c.$l("menu.desktop.link"),
                          onClick:
                            o[4] ||
                            (o[4] = (l) =>
                              c.$analytics.event("click_best_desktop")),
                          innerHTML: c.$l("menu.desktop.label"),
                        },
                        null,
                        8,
                        Ki
                      ),
                    ]),
                    f("div", Wi, [
                      I(p, { id: "language-planet" }),
                      I(Ht, { tabindex: y(i) ? 0 : -1 }, null, 8, ["tabindex"]),
                    ]),
                  ]),
                  f(
                    "div",
                    {
                      class: T([
                        "background",
                        { visible: c.$stores.isMenuOpen },
                      ]),
                    },
                    null,
                    2
                  ),
                ],
                2
              ),
              f("div", {
                class: "menu-overlay",
                "data-bypass-touch": "",
                onClick: d,
              }),
            ],
            2
          )
        );
      };
    },
  };
var Qi = ee(Xi, [["__scopeId", "data-v-f5bee8ee"]]),
  Ji = "/assets/rotate-background.f91ed36e11ae33ec.avif",
  Zi = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ji },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  en = "/assets/rotate-background.a702ac4b11ae33ec.jpg",
  tn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: en },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  an = "/assets/rotate-background.1804561a11ae33ec.webp",
  nn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: an },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const on = { key: 0, class: "rotate-device" },
  sn = ["src"],
  rn = { class: "rotate-wrapper" },
  ln = { class: "icon-wrapper" },
  cn = { class: "icon-rotate" },
  dn = {
    __name: "RotateDevice",
    setup(t) {
      const e = nt.select(
          Nt({
            "/src/assets/images/rotate-background.avif": Zi,
            "/src/assets/images/rotate-background.jpg": tn,
            "/src/assets/images/rotate-background.webp": nn,
          })
        ),
        a = "only screen and (max-width: 1024px) and (orientation: landscape)";
      return (
        Ut(
          u.$viewport,
          () => (u.$stores.isRotateVisible = matchMedia(a).matches),
          { immediate: !0 }
        ),
        (i, d) => {
          const c = pe("SvgIcon");
          return i.$stores.isRotateVisible
            ? (P(),
              N("div", on, [
                f("img", { src: y(e) }, null, 8, sn),
                f("div", rn, [
                  f("div", ln, [
                    f("div", cn, [
                      I(c, { id: "arrow-rotate", class: "arrow-left" }),
                      I(c, { id: "mobile", class: "rotate-mobile" }),
                      I(c, { id: "arrow-rotate", class: "arrow-right" }),
                    ]),
                  ]),
                ]),
              ]))
            : se("", !0);
        }
      );
    },
  };
var pn = ee(dn, [["__scopeId", "data-v-2eb4872a"]]);
const un = {
  __name: "PageTransition",
  setup(t) {
    const e = [],
      a = D(),
      i = D(),
      d = D(),
      c = D();
    let o = null,
      p = null,
      l = null,
      r = 0;
    u.$transition.register({
      ensureVisible: () => o,
      ensureHidden: () => p,
      ensureAlmostHidden: () => l,
    }),
      u.$router.beforeResolve((v, _) => {
        (v.name !== "Prizes" && _.name !== "Prizes") || b(_.name === "Prizes");
      });
    async function b(v) {
      if (!a.value) return;
      const _ = ++r;
      (o = le()),
        (p = le()),
        (l = le()),
        (e[0] = v ? d.value : i.value),
        (e[1] = v ? i.value : d.value),
        (e[0].style.zIndex = 1),
        (e[1].style.zIndex = 2),
        (u.$stores.isTransitionShowing = !0),
        a.value.classList.remove("hidden"),
        a.value.classList.add("active"),
        he({ target: c.value, opacity: 1, duration: 300 });
      const w = e.map(
        (z, C) => (
          (z.style.transformOrigin = "top left"),
          he({
            target: z,
            transform: ["scaleY(0)", "scaleY(1)"],
            duration: 500,
            ease: "inQuart",
            delay: C * 160,
          }).finished
        )
      );
      if ((await Promise.all(w), _ !== r || (o.resolve(), await Ue(), _ !== r)))
        return;
      (u.$stores.isTransitionShowing = !1),
        he({ target: c.value, opacity: 0, duration: 500 });
      const O = e.map(
        (z) => (
          (z.style.transformOrigin = "bottom right"),
          he({
            target: z,
            transform: ["scaleY(1)", "scaleY(0)"],
            duration: 900,
            ease: "outQuart",
            delay: 10,
          }).finished
        )
      );
      Oe(150).then(() => _ === r && l.resolve()),
        await Promise.all(O),
        _ === r &&
          (p.resolve(),
          await Ue(),
          _ === r &&
            (a.value.classList.remove("active"),
            (o = null),
            (p = null),
            (l = null),
            Oe(500).then(() => {
              _ === r && a.value.classList.add("hidden");
            })));
    }
    return (v, _) => (
      P(),
      N(
        "aside",
        { ref_key: "base", ref: a, class: "transition-overlay" },
        [
          f(
            "figure",
            { ref_key: "fill", ref: i, class: "layer fill" },
            null,
            512
          ),
          f(
            "figure",
            { ref_key: "gradient", ref: d, class: "layer gradient" },
            null,
            512
          ),
          f(
            "figure",
            { ref_key: "overlay", ref: c, class: "overlay" },
            null,
            512
          ),
        ],
        512
      )
    );
  },
};
var fn = ee(un, [["__scopeId", "data-v-12372552"]]);
const bn = { class: "ui" },
  mn = {
    __name: "App",
    setup(t) {
      return (
        qt(() => {
          K(() =>
            document.body.classList.toggle("menuOpened", !!u.$stores.isMenuOpen)
          ),
            K(() => {
              const { name: e, params: a } = u.$route;
              document.body.classList.toggle(
                "scrollable",
                (e === "Prizes" ||
                  (e === "Register" && a.step === "details")) &&
                  !u.$stores.isTransitionShowing
              );
            }),
            K(() => {
              const { name: e } = u.$route;
              document.body.classList.toggle(
                "white-header",
                e === "Prizes" && !u.$stores.isTransitionShowing
              );
            });
        }),
        (e, a) => {
          const i = pe("NextRouterView"),
            d = pe("WebGL");
          return (
            P(),
            N(
              Kt,
              null,
              [
                f("main", bn, [
                  e.$preloader.finished
                    ? (P(), ge(Ri, { key: 0 }))
                    : se("", !0),
                  e.$preloader.finished
                    ? (P(), ge(Qi, { key: 1 }))
                    : se("", !0),
                  I(
                    Gt,
                    {
                      "text-html": e.$l("cookies.description"),
                      "accept-html": e.$l("cookies.button.accept"),
                      "decline-html": e.$l("cookies.button.discard"),
                    },
                    null,
                    8,
                    ["text-html", "accept-html", "decline-html"]
                  ),
                  e.$preloader.finished
                    ? (P(), ge(fn, { key: 2 }))
                    : se("", !0),
                  I(i),
                ]),
                I(d),
                e.$preloader.finished && e.$device.type.phone
                  ? (P(), ge(pn, { key: 0 }))
                  : se("", !0),
                Ft(" " + Yt(), 1),
              ],
              64
            )
          );
        }
      );
    },
  };
var hn = mn;
const et = Wt(hn);
Xt(async () => {
  window.__DATA.project.locales[window.__DATA.page.locale].systemFonts &&
    document.documentElement.classList.add("use-system-fonts"),
    await nt.test();
  const e = await si(et, { router: { historyMode: Qt } });
  e.$preloader.task(
    Promise.all(
      [
        new q("DINPro", { weight: 400 }),
        new q("DINPro", { weight: 700 }),
        new q("Exo2", { weight: 100 }),
        new q("Exo2", { weight: 300 }),
        new q("Exo2", { weight: 400 }),
        new q("Exo2", { weight: 700 }),
        new q("Exo", { weight: 400 }),
        new q("Roboto", { weight: 700 }),
      ].map((a) => a.load())
    )
  ),
    (e.$analytics.pageview = (a, i = "") => {
      !a ||
        e.$analytics.rawEvent({
          event: "spaPageview",
          campaignSiteName: "iwantitall",
          pagePath: a.trim(),
          pageTitle: i.trim(),
        });
    }),
    (e.$analytics.event = (a = "", i) => {
      e.$analytics.rawEvent({
        event: "campaignClick",
        campaignSiteName: "iwantitall",
        clickButtonName: a.trim().replace("%s", i),
      });
    }),
    await Promise.resolve(),
    et.mount("#app");
});
export { Pa as r };
