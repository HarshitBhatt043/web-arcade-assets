//  Merci-Michel [R]
//  https://www.merci-michel.com/
//  Build 20220930-130257

var ut = Object.defineProperty;
var E = Object.getOwnPropertySymbols;
var pt = Object.prototype.hasOwnProperty,
  dt = Object.prototype.propertyIsEnumerable;
var V = (b, x, d) =>
    x in b
      ? ut(b, x, { enumerable: !0, configurable: !0, writable: !0, value: d })
      : (b[x] = d),
  O = (b, x) => {
    for (var d in x || (x = {})) pt.call(x, d) && V(b, d, x[d]);
    if (E) for (var d of E(x)) dt.call(x, d) && V(b, d, x[d]);
    return b;
  };
(function () {
  "use strict";
  const b = { Update: 1, DirectCall: 2, DirectAnswer: 3 },
    x = { Bar: 1, Ball: 2, Block: 3, Bonus: 4 },
    d = {
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
    D = (r) => r.charAt(0).toLowerCase() + r.slice(1);
  Object.entries(b).reduce((r, [t, s]) => ((r[s] = D(t)), r), {}),
    Object.entries(x).reduce((r, [t, s]) => ((r[s] = D(t)), r), {});
  const W = Object.entries(d).reduce((r, [t, s]) => ((r[s] = D(t)), r), {}),
    L = typeof window == "undefined";
  class R {
    constructor(t = {}) {
      (this.isWorker = t.isWorker),
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
        (this.timestep = L ? t.timestep || 5 : t.timestep || 10),
        this.isWorker && L && (self.onmessage = this.onMessage);
    }
    init() {}
    initWorker(t, s) {
      if (!this.worker)
        return (
          (this.worker = new t(this)),
          this.worker.isFullMainThread && (this.isFullMainThread = !0),
          (this.worker.queue = this.queue.bind(this)),
          (this.worker.directCall = this.directCall.bind(this)),
          (this.worker.onmessage = this.onMessage),
          this.worker.directCall("init", s)
        );
    }
    poll() {
      this.processQueue(this.updatesReceived);
    }
    sync() {
      this.sendQueueUpdate();
    }
    registerComponentClasses(t) {
      for (let s in t) {
        const e = x[s] || s;
        this.componentsClasses[e] = t[s];
      }
    }
    createComponent(t, s, e) {
      Array.isArray(t) && ((s = t[1]), (e = t[2]), (t = t[0])), (t = x[t] || t);
      const i = this.componentsClasses;
      if (!i[t]) return;
      const o = e != null;
      o
        ? e > this.lastComponentID && (this.lastComponentID = e)
        : (e = ++this.lastComponentID);
      const n = new i[t](O({ id: e, physics: this }, s));
      if ((this.components.set(e, n), o)) n.created = Promise.resolve();
      else return (n.create = this.directCall("createComponent", [t, s, e])), n;
    }
    removeComponent(t) {
      t.id && (t = t.id);
      const s = this.components.get(t);
      !s || (this.components.delete(t), s.destroy());
    }
    postMessage(t) {
      this.isFullMainThread
        ? this.isWorker
          ? this.main.onMessage({ data: t })
          : this.worker.onMessage({ data: t })
        : this.worker
        ? this.worker.postMessage(t)
        : self.postMessage(t);
    }
    directCall(t, s, e) {
      const i = ++this.msgID,
        o = [b.DirectCall, i, t, s];
      e && o.push(e);
      const n = new Promise((h) => this.answerResolvers.set(i, h));
      return this.postMessage(o), n;
    }
    queue(t, s, e) {
      const i = [t, s];
      e && i.push(e), this.callsQueue.push(i);
    }
    onUpdateMain(t) {
      for (let s = 0, e = t.length; s < e; s++) this.updatesReceived.push(t[s]);
    }
    updateComponent(t) {
      this.isFirstTick && t.firstUpdate && t.firstUpdate(this.fullDt),
        t.update(this.dt),
        this.isLastTick && t.syncWorkerToThreadProps(this.dt);
    }
    onUpdateWorker(t) {
      this.processQueue(t);
      const s = performance.now();
      this.isFirstUpdate &&
        ((this.lastUpdate = s - this.timestep), (this.isFirstUpdate = !1));
      let e = Math.min(200, s - this.lastUpdate);
      for (this.fullDt = e, this.lastUpdate = s, this.isFirstTick = !0; e > 0; )
        (this.dt = Math.min(e, this.timestep)),
          (this.isLastTick = (e -= this.timestep) <= 0),
          this.components.forEach(this.updateComponent),
          (this.isFirstTick = !1);
      this.callsQueue.length && this.sendQueueUpdate();
    }
    processQueue(t) {
      for (let s = 0, e = t.length; s < e; s++) {
        let [i, o, n] = t[s];
        if (((i = W[i] || i), n)) {
          const h = this.components.get(n);
          h && h[i] && h[i](o);
        } else this[i] && this[i](o);
      }
      t.length = 0;
    }
    sendQueueUpdate() {
      this.postMessage([b.Update, this.callsQueue]),
        (this.callsQueue.length = 0),
        (this.callsQueue = []);
    }
    async onDirectCall([t, s, e, i]) {
      s = W[s] || s;
      let o = null;
      if (i) {
        const n = this.components[i];
        n && n[s] && (o = await n[s](e));
      } else this[s] && (o = await this[s](e));
      this.postMessage([b.DirectAnswer, t, o]);
    }
    onDirectAnswer([t, s]) {
      const e = this.answerResolvers.get(t);
      !e || (this.answerResolvers.delete(t), e(s));
    }
    onMessage(t) {
      const s = t.data;
      if (!s.shift) return;
      const e = s.shift();
      e === b.Update
        ? this.onUpdate(s[0])
        : e === b.DirectCall
        ? this.onDirectCall(s)
        : e === b.DirectAnswer && this.onDirectAnswer(s);
    }
  }
  class k {
    constructor(t) {
      (this.id = t.id),
        (this.physics = t.physics),
        (this.log = this.physics.log),
        (this.isFirstUpdate = !0),
        (this.sendableFns = []),
        (this.destroyed = !1);
    }
    directCall(t, s) {
      return this.physics.directCall(t, s, this.id);
    }
    queue(t, s) {
      return this.physics.queue(t, s, this.id);
    }
    workerToThread(t, s, e) {
      const i = this,
        o = (this[t] = s),
        n = s.clone,
        h = this.sendableFns;
      if (n) {
        const c = s.clone();
        h.push(function () {
          (!i.isFirstUpdate && o.equals(c)) ||
            (c.copy(o), i.queue(e, o.toArray()));
        });
      } else {
        let c = s;
        h.push(function () {
          (!i.isFirstUpdate && i[t] === c) || ((c = i[t]), i.queue(e, c));
        });
      }
    }
    update() {}
    syncWorkerToThreadProps() {
      if (this.destroyed) return;
      const t = this.sendableFns;
      for (let s = 0, e = t.length; s < e; s++) t[s]();
      this.isFirstUpdate = !1;
    }
    destroy() {
      this.destroyed ||
        (this.syncWorkerToThreadProps(),
        this.bb && this.physics.removeBox(this.bb),
        (this.bb = null),
        (this.destroyed = !0),
        this.queue(d.Destroy),
        this.physics.removeComponent(this.id),
        (this.physics = null));
    }
  }
  class p {
    constructor(t = 0, s = 0) {
      (p.prototype.isVector2 = !0), (this.x = t), (this.y = s);
    }
    get width() {
      return this.x;
    }
    set width(t) {
      this.x = t;
    }
    get height() {
      return this.y;
    }
    set height(t) {
      this.y = t;
    }
    set(t, s) {
      return (this.x = t), (this.y = s), this;
    }
    setScalar(t) {
      return (this.x = t), (this.y = t), this;
    }
    setX(t) {
      return (this.x = t), this;
    }
    setY(t) {
      return (this.y = t), this;
    }
    setComponent(t, s) {
      switch (t) {
        case 0:
          this.x = s;
          break;
        case 1:
          this.y = s;
          break;
        default:
          throw new Error("index is out of range: " + t);
      }
      return this;
    }
    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + t);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(t) {
      return (this.x = t.x), (this.y = t.y), this;
    }
    add(t, s) {
      return s !== void 0
        ? (console.warn(
            "THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
          ),
          this.addVectors(t, s))
        : ((this.x += t.x), (this.y += t.y), this);
    }
    addScalar(t) {
      return (this.x += t), (this.y += t), this;
    }
    addVectors(t, s) {
      return (this.x = t.x + s.x), (this.y = t.y + s.y), this;
    }
    addScaledVector(t, s) {
      return (this.x += t.x * s), (this.y += t.y * s), this;
    }
    sub(t, s) {
      return s !== void 0
        ? (console.warn(
            "THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
          ),
          this.subVectors(t, s))
        : ((this.x -= t.x), (this.y -= t.y), this);
    }
    subScalar(t) {
      return (this.x -= t), (this.y -= t), this;
    }
    subVectors(t, s) {
      return (this.x = t.x - s.x), (this.y = t.y - s.y), this;
    }
    multiply(t) {
      return (this.x *= t.x), (this.y *= t.y), this;
    }
    multiplyScalar(t) {
      return (this.x *= t), (this.y *= t), this;
    }
    divide(t) {
      return (this.x /= t.x), (this.y /= t.y), this;
    }
    divideScalar(t) {
      return this.multiplyScalar(1 / t);
    }
    applyMatrix3(t) {
      const s = this.x,
        e = this.y,
        i = t.elements;
      return (
        (this.x = i[0] * s + i[3] * e + i[6]),
        (this.y = i[1] * s + i[4] * e + i[7]),
        this
      );
    }
    min(t) {
      return (
        (this.x = Math.min(this.x, t.x)), (this.y = Math.min(this.y, t.y)), this
      );
    }
    max(t) {
      return (
        (this.x = Math.max(this.x, t.x)), (this.y = Math.max(this.y, t.y)), this
      );
    }
    clamp(t, s) {
      return (
        (this.x = Math.max(t.x, Math.min(s.x, this.x))),
        (this.y = Math.max(t.y, Math.min(s.y, this.y))),
        this
      );
    }
    clampScalar(t, s) {
      return (
        (this.x = Math.max(t, Math.min(s, this.x))),
        (this.y = Math.max(t, Math.min(s, this.y))),
        this
      );
    }
    clampLength(t, s) {
      const e = this.length();
      return this.divideScalar(e || 1).multiplyScalar(
        Math.max(t, Math.min(s, e))
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
    dot(t) {
      return this.x * t.x + this.y * t.y;
    }
    cross(t) {
      return this.x * t.y - this.y * t.x;
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
    distanceTo(t) {
      return Math.sqrt(this.distanceToSquared(t));
    }
    distanceToSquared(t) {
      const s = this.x - t.x,
        e = this.y - t.y;
      return s * s + e * e;
    }
    manhattanDistanceTo(t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
    }
    setLength(t) {
      return this.normalize().multiplyScalar(t);
    }
    lerp(t, s) {
      return (
        (this.x += (t.x - this.x) * s), (this.y += (t.y - this.y) * s), this
      );
    }
    lerpVectors(t, s, e) {
      return (
        (this.x = t.x + (s.x - t.x) * e), (this.y = t.y + (s.y - t.y) * e), this
      );
    }
    equals(t) {
      return t.x === this.x && t.y === this.y;
    }
    fromArray(t, s = 0) {
      return (this.x = t[s]), (this.y = t[s + 1]), this;
    }
    toArray(t = [], s = 0) {
      return (t[s] = this.x), (t[s + 1] = this.y), t;
    }
    fromBufferAttribute(t, s, e) {
      return (
        e !== void 0 &&
          console.warn(
            "THREE.Vector2: offset has been removed from .fromBufferAttribute()."
          ),
        (this.x = t.getX(s)),
        (this.y = t.getY(s)),
        this
      );
    }
    rotateAround(t, s) {
      const e = Math.cos(s),
        i = Math.sin(s),
        o = this.x - t.x,
        n = this.y - t.y;
      return (
        (this.x = o * e - n * i + t.x), (this.y = o * i + n * e + t.y), this
      );
    }
    random() {
      return (this.x = Math.random()), (this.y = Math.random()), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y;
    }
  }
  const z = new p(),
    _ = new p(),
    Q = ["top", "right", "bottom", "left"];
  function P(r, t) {
    return 0.5 * (r + t) * (r + t + 1) + t;
  }
  class C {
    constructor(t, s) {
      (this.boundingSphereCache = { start: new p(-1e5), end: new p(-1e5) }),
        (this.boundingSphere = { center: new p(), radius: 0 }),
        (this.start = t ? t.clone() : new p()),
        (this.end = s ? s.clone() : new p());
    }
    getLength() {
      return this.end.distanceTo(this.start);
    }
    set(t, s, e, i) {
      this.start.set(t, s), this.end.set(e, i);
    }
    fromPoints(t, s) {
      return this.start.copy(t), this.end.copy(s), this;
    }
    getDirection() {
      return z.copy(this.end).sub(this.start).normalize();
    }
    intersectLine(t, s) {
      const e = this.start.x,
        i = this.end.x,
        o = this.start.y,
        n = this.end.y,
        h = t.start.x,
        c = t.end.x,
        l = t.start.y,
        a = t.end.y,
        u = (a - l) * (i - e) - (c - h) * (n - o),
        f = (c - h) * (o - l) - (a - l) * (e - h),
        y = (i - e) * (o - l) - (n - o) * (e - h);
      if (u == 0) return !1;
      const m = f / u,
        g = y / u;
      return m >= 0 && m <= 1 && g >= 0 && g <= 1
        ? ((s.x = e + m * (i - e)), (s.y = o + m * (n - o)), !0)
        : !1;
    }
    intersectBox(t) {
      return t.intersectLine(this);
    }
    computeBoundingSphere() {
      const t = this.boundingSphereCache,
        s = this.boundingSphere;
      (t.start.equals(this.start) && t.end.equals(this.end)) ||
        (t.start.copy(this.start),
        t.end.copy(this.end),
        s.center.copy(this.start).add(this.end).multiplyScalar(0.5),
        (s.radius = this.getLength() * 0.5));
    }
  }
  const N = (r) => r.charAt(0).toUpperCase() + r.slice(1);
  class X {
    constructor({
      center: t,
      width: s,
      height: e,
      border: i,
      isContainer: o,
    } = {}) {
      (this.sides = []),
        (this.min = new p()),
        (this.max = new p()),
        (this.center = t || new p()),
        (this.isContainer = o),
        (this.width = s || 1),
        (this.height = e || 1),
        (this.border = i || 0),
        (this.boundingSphere = { center: this.center, radius: 0 }),
        (this.intersectionResult = {
          box: this,
          insideBox: !1,
          intersects: !1,
          side: null,
          sqDist: Number.MAX_SAFE_INTEGER,
          point: new p(),
        }),
        Q.forEach((n) => {
          const h = new C();
          (h.box = this),
            (h["is" + N(n)] = !0),
            (h.getDip = j(h)),
            this.sides.push((this[n] = h));
        }),
        this.refresh();
    }
    addFlag(t) {
      this[t] = !0;
      for (let s = 0, e = this.sides.length; s < e; s++) this.sides[s][t] = !0;
    }
    removeFlag(t) {
      this[t] = !1;
      for (let s = 0, e = this.sides.length; s < e; s++) this.sides[s][t] = !1;
    }
    updateFromPositions(t, s) {
      this.center = this.center.copy(s).add(t).multiplyScalar(0.5);
      const e = Math.abs(s.x - t.x),
        i = Math.abs(s.y - t.y);
      this.refresh(!1, e, i);
    }
    refresh(t, s = 0, e = 0) {
      const {
          min: i,
          max: o,
          center: n,
          width: h,
          height: c,
          border: l,
          top: a,
          right: u,
          bottom: f,
          left: y,
        } = this,
        m = (h + l + s) * 0.5,
        g = (c + l + e) * 0.5;
      (this.realwidth = m * 2),
        (this.realheight = g * 2),
        i.set(n.x - m, n.y - g),
        o.set(n.x + m, n.y + g),
        f.set(i.x, o.y, o.x, o.y),
        u.set(o.x, i.y, o.x, o.y),
        a.set(i.x, i.y, o.x, i.y),
        y.set(i.x, i.y, i.x, o.y),
        !t && (this.boundingSphere.radius = this.center.distanceTo(a.end));
    }
    intersectBox(t) {
      return !(
        t.max.x < this.min.x ||
        t.min.x > this.max.x ||
        t.max.y < this.min.y ||
        t.min.y > this.max.y
      );
    }
    intersectLine(t) {
      const s = _,
        e = this,
        i = this.intersectionResult;
      if (
        ((i.intersects = i.insideBox = !1),
        (i.sqDist = Number.MAX_SAFE_INTEGER),
        !this.isMoving && !this.isContainer)
      ) {
        t.computeBoundingSphere();
        const l = t.boundingSphere,
          a = e.boundingSphere,
          u = l.radius + a.radius,
          f = u * u;
        if (l.center.distanceToSquared(a.center) > f) return i;
      }
      const o = this.top.skip && this.top.skip(this, t),
        n = this.right.skip && this.right.skip(this, t),
        h = this.bottom.skip && this.bottom.skip(this, t),
        c = this.left.skip && this.left.skip(this, t);
      for (let l = 0, a = e.sides.length; l < a; l++) {
        const u = e.sides[l];
        if (u.isTop && o) continue;
        if (u.isRight && n) continue;
        if (u.isBottom && h) continue;
        if ((u.isLeft && c) || !t.intersectLine(u, s)) continue;
        const f = t.start.distanceToSquared(s);
        f >= i.sqDist ||
          f <= 0 ||
          ((i.intersects = !0), (i.sqDist = f), (i.side = u), i.point.copy(s));
      }
      if (!i.intersects) {
        let l, a;
        if (
          (o
            ? h || (a = a || this.bottom.getDip(t.end))
            : (a = this.top.getDip(t.end)),
          c
            ? n || (l = l || this.right.getDip(t.end))
            : (l = this.left.getDip(t.end)),
          this.isContainer && (l ? a || (a = l) : (l = a)),
          l && a)
        ) {
          const u = l.dip < a.dip ? l : a;
          (i.intersects = !0),
            (i.insideBox = !0),
            (i.side = u.side),
            (i.sqDist = u.dip * u.dip),
            i.point.copy(u.point);
        }
      }
      if (this.isBar && !i.intersects) {
        const l = this.left.start.x,
          a = this.right.start.x,
          u = this.top.start.y,
          f = this.bottom.start.y,
          y = t.end;
        y.x > l &&
          y.x < a &&
          y.y > u &&
          y.y < f &&
          ((i.intersects = !0),
          (i.insideBox = !0),
          (i.side = this.top),
          (i.sqDist = 0),
          i.point.copy(t.end));
      }
      return i;
    }
  }
  function j(r) {
    const t = r.box,
      s = t.isContainer;
    let e = r.end,
      i = { dip: 0, side: r, point: new p() },
      o = r.isRight || r.isTop ? -1 : 1;
    if ((s && (o *= -1), r.isTop || r.isBottom))
      return function (n) {
        let h = (n.y - e.y) * o;
        return (
          (!s && h > t.realheight) || h <= 0 ? (h = 0) : i.point.set(n.x, e.y),
          (i.dip = h),
          h > 0 ? i : !1
        );
      };
    if (r.isLeft || r.isRight)
      return function (n) {
        let h = (n.x - e.x) * o;
        return (
          (!s && h > t.realwidth) || h <= 0 ? (h = 0) : i.point.set(e.x, n.y),
          (i.dip = h),
          h > 0 ? i : !1
        );
      };
  }
  function v(r, t = 0, s = 1) {
    return Math.min(Math.max(r, t), s);
  }
  function B(r, t = 0, s = 1) {
    return Math.max(0, Math.min(1, (r - t) / (s - t)));
  }
  function H(r, t, s, e, i) {
    const o = e + (i - e) * ((r - t) / (s - t));
    return Math.max(e, Math.min(i, o));
  }
  function F(r) {
    function t(i) {
      (r = (i | 0) % 2147483647) <= 0 && (r += 2147483646);
    }
    function s() {
      return (r = (r * 48271) % 2147483647);
    }
    function e() {
      return (s() - 1) / 2147483646;
    }
    return t(r), { seed: t, nextInt: s, nextFloat: e };
  }
  function I(r = 0) {
    let t = F(r);
    return (
      t.nextFloat(),
      t.nextFloat(),
      {
        setSeed: s,
        random: e,
        randomFloat: i,
        randomInt: o,
        hash2d: c,
        hash2dInt: l,
      }
    );
    function s(a) {
      (r = a), (t = F(r));
    }
    function e() {
      return t.nextFloat();
    }
    function i(a = 0, u = 1) {
      return t.nextFloat() * (u - a) + a;
    }
    function o(a, u) {
      return Math.floor(t.nextFloat() * (u - a + 1)) + a;
    }
    function n(a) {
      return a - Math.floor(a);
    }
    function h(a, u, f, y) {
      return a * y - f * u;
    }
    function c(a, u) {
      return n(Math.sin(h(a, u, 12.9898, 78.233)) * 43758.5453);
    }
    function l(a, u, f, y) {
      return Math.floor(c(a, u) * (y - f + 1)) + f;
    }
  }
  const K = I(Date.now());
  K.create = I;
  function S(r, t, s) {
    return r * (1 - s) + t * s;
  }
  function Y(r, t, s, e = 0.001) {
    const i = r * (1 - s) + t * s;
    return Math.abs(t - i) < e ? t : i;
  }
  function A(r, t, s, e) {
    return S(r, t, 1 - Math.exp(-s * 0.05 * e));
  }
  function q(r, t, s, e, i) {
    return Y(r, t, 1 - Math.exp(-s * 0.05 * e), i);
  }
  class G extends k {
    constructor(t) {
      super(t),
        (this.sentPos = new p()),
        (this.isActive = !1),
        (this.target = new p(0, 0)),
        (this.ease = new p(0.1, 0.1)),
        (this.size = 1),
        this.workerToThread("position", new p(), d.UpdatePosition),
        t.position && this.position.fromArray(t.position),
        (this.autoInfluence = 0),
        (this.randomOffset = 0),
        (this.autoPos = new p()),
        (this.playPos = new p()),
        (this.prevPos = new p()),
        (this.lastBounce = 0),
        (this.nextMove = 0),
        (this.autoEase = 0),
        (this.autoX = 0),
        (this.isActive = !1),
        (this.bb = this.physics.createBox({
          center: new p().clone(this.position),
          width: 2,
          height: 0.2,
          border: 0,
        })),
        this.bb.addFlag("isBar"),
        this.bb.addFlag("isMoving"),
        (this.tx = 0),
        (this.ty = 0),
        (this.vel = new p()),
        (this.physics.bar = this),
        (this.instant = 0),
        this.physics.isFullMainThread &&
          ((window.hasDebugBox = !0),
          (window.debugBoxData = { x: 0, z: 0, width: 0, height: 0 }));
    }
    updateSize(t) {
      (this.size = t), (this.bb.width = this.size * 2 + 0.05);
    }
    updateTarget(t) {
      this.target.set(t[0], t[1]);
    }
    updateEaseX(t) {
      this.ease.x = t;
    }
    updateEaseY(t) {
      this.ease.y = t;
    }
    updateActive(t) {
      this.isActive = t;
    }
    updateKeyboard(t) {
      this.useKeyboard = t;
    }
    getActiveBall() {
      let t = 0,
        s = this.physics.balls.length;
      for (; t < s; ) {
        const e = this.physics.balls[t];
        if (e.state === 2) return e;
        t++;
      }
    }
    onBallBounce() {
      const t = performance.now();
      (this.lastBounce = t),
        (this.randomOffset = (Math.random() * 2 - 1) * 0.2),
        (this.nextMove = 0);
    }
    clampToBounds(t) {
      return v(t, 0 + this.size, this.physics.levelWidth - this.size);
    }
    updateAutoplay(t) {
      const s = this.autoPos,
        e = performance.now();
      if (e - this.lastBounce > 300) {
        const i = this.getActiveBall();
        if (i) {
          const o = i.position,
            h = i.line.end.y > i.line.start.y ? H(o.y, -5.5, -1, 0, 0.9) : 0,
            c = this.clampToBounds(o.x + this.randomOffset * this.bb.width);
          if (h > 0.01) s.x = A(s.x, c, h, t);
          else {
            if (e > this.nextMove) {
              const l = Math.random(),
                a = l < 0.04,
                u = l < 0.15,
                f = Math.random() < 0.2 ? 1.2 : 0.6;
              (this.nextMove = a
                ? e + 750 + Math.random() * 500
                : u
                ? e + 150 + Math.random() * 150
                : e + 500 + Math.random() * 500),
                (this.autoEase = 0.03 + Math.random() * 0.04),
                (this.autoX = this.clampToBounds(
                  S(
                    s.x,
                    c + (Math.random() * 2 - 1) * f,
                    0.4 + Math.random() * 0.4
                  )
                ));
            }
            s.x = A(s.x, this.autoX, this.autoEase, t);
          }
        }
      }
    }
    firstUpdate(t) {
      const s = this.prevPos,
        e = this.playPos,
        i = this.autoPos,
        o = this.position;
      s.copy(o),
        (this.tx = this.target.x),
        (this.ty = this.isActive || !this.useKeyboard ? this.target.y : -1),
        (this.instant = A(this.instant, this.isActive ? 1 : 0, 0.08, t)),
        (!this.isActive || (this.useKeyboard && this.isActive)) &&
          (this.instant = 0),
        (e.x = S(q(e.x, this.tx, this.ease.x, t, 0.01), this.tx, this.instant)),
        (e.y = S(q(e.y, this.ty, this.ease.y, t, 0.01), this.ty, this.instant)),
        this.physics.isAutoplay
          ? this.updateAutoplay(t)
          : this.autoPos.set(this.physics.levelWidth * 0.5, -1),
        (this.autoInfluence = A(
          this.autoInfluence,
          this.physics.isAutoplay ? 1 : 0,
          0.1,
          t
        )),
        o.lerpVectors(e, i, this.autoInfluence),
        (o.x = this.clampToBounds(o.x)),
        this.vel.copy(o).sub(s);
      const n =
        0.2 +
        0.05 * B(Math.abs(this.vel.x), 0.05, 0.14) +
        0.06 * B(-this.vel.y, 0, 1);
      (this.bb.height = n),
        (this.bb.width =
          this.size * 2 +
          0.05 +
          0.1 * B(Math.abs(this.vel.x), 0.2, 0.5) +
          0.5 * B(-this.vel.y, 0, 1.5)),
        this.vel.y > 0
          ? this.bb.updateFromPositions(o, o)
          : this.bb.updateFromPositions(s, o);
    }
    update(t) {}
  }
  const $ = new p(),
    Z = new p(),
    J = new p();
  new p(), new C(), new C();
  const T = Math.PI / 180,
    M = { Hidden: 0, Frozen: 1, Active: 2 },
    w = 1.15,
    tt = 0.01 * w,
    st = 0.004 * w,
    U = { lvl1: 35e-5 * w, lvl2: 45e-5 * w, lvl3: 55e-5 * w, lvl4: 65e-5 * w },
    it = 0.6;
  class et extends k {
    constructor(t) {
      super(t),
        this.physics.balls || (this.physics.balls = []),
        (this.index = t.index),
        this.physics.balls.push(this),
        this.workerToThread("visible", !1, d.UpdateVisible),
        this.workerToThread("addVel", 0, d.UpdateAdditionalVelocity),
        this.workerToThread("position", new p(), d.UpdatePosition),
        (this.previousPos = this.position.clone()),
        (this.direction = new p()),
        (this.addVel = 0),
        (this.state = 0),
        (this.boxPrev = 0),
        (this.boxPrevPrev = 0),
        (this.bounceScore = 0),
        (this.line = new C()),
        (this.line.flags = { top: !1, bottom: !1, left: !1, right: !1 }),
        (this.bounceLockMult = this.index % 2 ? 1 : -1);
    }
    respawn() {
      (this.lastWasBottomWall = !1),
        (this.visible = !0),
        (this.position.x = this.physics.levelCenter),
        (this.position.y = -4.5),
        this.direction.set(Math.random() * 0.5, 1).normalize();
    }
    updateBallState(t) {
      this.lastWasBottomWall = !1;
      const s = this.state;
      (this.state = t),
        s !== M.Active &&
          t === M.Active &&
          (this.stickToBar(), this.direction.set(0, -1).normalize());
    }
    stickToBar() {
      const t = this.physics.bar;
      (this.position.x = t.position.x),
        (this.position.y = t.position.y - 0.55),
        (this.addVel = 0);
    }
    updateFrozen(t) {
      (this.visible = !0), this.stickToBar();
    }
    bounceWall(t, s, e, i) {
      const o = t.side,
        n = this.physics.bonuses.futureproof,
        h = !n && o.isTop;
      let c = !1;
      if (
        (o.isTop && i.y > 0
          ? (h || (i.y = -Math.abs(i.y)),
            (c = !h || e.y > 0.7),
            h || (this.lastWasBottomWall = !0))
          : o.isBottom && i.y < 0
          ? ((i.y = Math.abs(i.y)), (c = !0), (this.lastWasBottomWall = !1))
          : o.isLeft && i.x < 0
          ? ((i.x = Math.abs(i.x)), (c = !0), (this.lastWasBottomWall = !1))
          : o.isRight &&
            i.x > 0 &&
            ((i.x = -Math.abs(i.x)), (c = !0), (this.lastWasBottomWall = !1)),
        c)
      ) {
        e.copy(t.point),
          i.normalize(),
          this.avoidBounceLock(t.box, i),
          this.clampDirectionAngle(i);
        let l = 0;
        o.isRight ? (l = 1) : o.isTop ? (l = 2) : o.isLeft && (l = 3),
          !n && o.isTop
            ? ((this.visible = !1),
              (this.state = M.Hidden),
              this.queue(d.OnLimitCollision, [t.point.x, t.point.y]))
            : this.queue(d.OnWallCollision, [
                t.point.x,
                t.point.y,
                l,
                i.x,
                i.y,
              ]);
      }
    }
    clampDirectionAngle(t) {
      let s = t.angle();
      const e = 270 * T,
        i = 90 * T,
        o = 70 * T;
      s > 180 * T ? (s = v(s, e - o, e + o)) : (s = v(s, i - o, i + o)),
        t.set(Math.cos(s), Math.sin(s));
    }
    offsetAngle(t) {
      let s = t.angle(),
        e = Math.sign(t.y) * this.bounceLockMult;
      (s += Math.min(10, this.bounceScore * 1 + 1) * T * e),
        t.set(Math.cos(s), Math.sin(s));
    }
    avoidBounceLock(t, s) {
      t !== this.boxPrev &&
        (t === this.boxPrevPrev ||
        t === this.boxPrevPrevPrev ||
        t === this.boxPrevPrevPrevPrev
          ? t.isBar || this.boxPrev.isBar
            ? ((this.bounceScore += 0.5),
              this.bounceScore >= 0.1 && this.offsetAngle(s))
            : ((this.bounceScore += 2),
              this.bounceScore >= 0 && this.offsetAngle(s))
          : (this.bounceScore = 0),
        (this.boxPrevPrevPrevPrev = this.boxPrevPrevPrev),
        (this.boxPrevPrevPrev = this.boxPrevPrev),
        (this.boxPrevPrev = this.boxPrev),
        (this.boxPrev = t));
    }
    bounceBlock(t, s, e, i) {
      const o = t.side,
        n = t.box.parent,
        h = this.physics.bonuses.prebuilt,
        c = n.isUnbreakable;
      if (
        ((this.lastWasBottomWall = !1),
        o.isBlock && o.box.parent.onCollision(this.index),
        h)
      )
        return;
      o.isBottom
        ? (i.y = Math.abs(i.y))
        : o.isTop
        ? (i.y = -Math.abs(i.y))
        : o.isRight
        ? (i.x = Math.abs(i.x))
        : o.isLeft && (i.x = -Math.abs(i.x)),
        e.copy(t.point);
      let l = 0;
      c && (l = 1),
        this.queue(d.OnBlockCollision, [t.point.x, t.point.y, l, i.x, i.y]),
        this.avoidBounceLock(t.box, i),
        this.clampDirectionAngle(i);
    }
    bounceBar(t, s, e, i) {
      const o = this.physics.bar,
        n = t.side,
        h = o.bb.border + o.bb.width,
        c = (o.position.x - t.point.x) / (h * 0.5),
        l = v(c, -1, 1),
        a = (Math.PI / 4) * l + Math.PI / 2,
        u = this.physics.bonuses.futureproof;
      if (
        (o.position.y > o.bb.top.end.y,
        e.y > o.position.y,
        o.onBallBounce(),
        this.lastWasBottomWall && o.vel.y >= -0.05 && u)
      )
        i.y < 0 &&
          o.vel.y >= -0.2 &&
          ((e.y = Math.max(e.y, t.box.bottom.end.y)), (i.y = Math.abs(i.y)));
      else {
        if (
          (o.vel.y < 0 &&
            e.add(J.copy(o.vel).multiplyScalar(0.2).clampLength(0, 0.05)),
          i.set(Math.cos(a), Math.sin(a)),
          (i.y = -Math.abs(i.y)),
          i.normalize(),
          !n.isTop || o.vel.y <= 0)
        ) {
          const m = o.vel.length(),
            g = B(m, 0.005, 0.05);
          i.lerp(o.vel, g * 0.915).normalize();
        }
        const y =
          Math.max(
            B(Math.abs(o.vel.x), 0.15, 0.5) * 0.5,
            B(-o.vel.y, 0.1, 0.5)
          ) * st;
        (this.addVel = Math.max(this.addVel, y)),
          this.queue(d.OnBarCollision, [t.point.x, t.point.y, i.x, i.y]);
      }
      this.avoidBounceLock(t, i), this.clampDirectionAngle(i);
    }
    getAdditionalLevelSpeed() {
      const t = this.physics.finishedLevelCount,
        s = Math.max(0, t - 7),
        e = v(t - 5, 0, 2),
        i = v(t - 3, 0, 2),
        o = v(t - 0, 0, 3);
      return s * U.lvl4 + e * U.lvl3 + i * U.lvl2 + o * U.lvl1;
    }
    wallSafety(t) {
      const s = this.position,
        e = this.direction,
        i = this.physics.bonuses.futureproof,
        o = 0.1;
      s.x > this.physics.levelWidth + o
        ? ((s.x = this.physics.levelWidth - o),
          (e.x = -Math.abs(e.x)),
          (this.lastWasBottomWall = !1),
          this.avoidBounceLock(this.physics.bb, e))
        : s.x < -o
        ? ((s.x = o),
          (e.x = Math.abs(e.x)),
          this.avoidBounceLock(this.physics.bb, e))
        : s.y < this.physics.levelDepth - o
        ? ((s.y = this.physics.levelDepth + o),
          (e.y = Math.abs(e.y)),
          (this.lastWasBottomWall = !1),
          this.avoidBounceLock(this.physics.bb, e))
        : i && s.y > o
        ? ((s.y = -o),
          (e.y = -Math.abs(e.y)),
          (this.lastWasBottomWall = !0),
          this.avoidBounceLock(this.physics.bb, e))
        : !i &&
          s.y > 1 &&
          ((this.visible = !1),
          (this.state = M.Hidden),
          (this.lastWasBottomWall = !1),
          this.queue(d.OnLimitCollision, [s.x, s.y]));
    }
    updateActive(t) {
      this.visible = !0;
      let e = (tt + this.getAdditionalLevelSpeed() + this.addVel) * t,
        i = 0;
      for (i = 0; i < 4 && e > 0; i++) {
        const o = $.copy(this.direction).normalize().multiplyScalar(e),
          n = Z.copy(this.position).add(o);
        let h = this.line.fromPoints(this.position, n);
        const c =
          (Math.atan2(h.end.y - h.start.y, h.end.x - h.start.x) * 180) /
          Math.PI;
        (h.angle = c),
          (h.flags.top = c < 180 && c > 0),
          (h.flags.right = c < -90 || c > 90),
          (h.flags.bottom = c > -180 && c < 0),
          (h.flags.left = c > -90 && c < 90);
        const l = this.physics.boundingBoxes.length;
        let a = null;
        for (let y = l - 1; y >= 0; y--) {
          const m = this.physics.boundingBoxes[y],
            g = h.intersectBox(m);
          !g.intersects || ((a === null || g.sqDist < a.sqDist) && (a = g));
        }
        a &&
          (a.box.isBar
            ? this.bounceBar(a, h, n, this.direction)
            : a.box.isBlock
            ? this.bounceBlock(a, h, n, this.direction)
            : this.bounceWall(a, h, n, this.direction),
          this.lastIntersection !== a &&
            ((this.lastIntersection = a), (this.addVel *= it)));
        const u = this.direction.lengthSq() < 1e-5;
        (e -= this.position.distanceTo(n)),
          (u || e < 1e-9) && (e = 0),
          this.position.copy(n),
          this.wallSafety(t);
      }
    }
    updateHidden() {
      (this.visible = !1), (this.addVel = 0);
    }
    update(t) {
      this.state === M.Frozen
        ? this.updateFrozen(t)
        : this.state === M.Active
        ? this.updateActive(t)
        : this.updateHidden(t);
    }
  }
  class ot extends k {
    constructor(t) {
      super(t);
      const s = (this.size = this.physics.levelBlockScale);
      (this.position = new p().fromArray(t.position)),
        (this.isUnbreakable = t.isUnbreakable),
        (this.bb = this.physics.createBox({
          center: this.position,
          width: s,
          height: s,
        })),
        this.bb.addFlag("isBlock"),
        (this.bb.parent = this);
      const e = t.coords[0],
        i = t.coords[1];
      (this.cantorID = P(e, i)),
        this.physics.blocks.set(this.cantorID, this),
        (this.leftBlock = P(e - 1, i)),
        (this.rightBlock = P(e + 1, i)),
        (this.topBlock = P(e, i - 1)),
        (this.bottomBlock = P(e, i + 1)),
        (this.bb.left.skip = (o, n) =>
          !!(
            (n.flags && !n.flags.left) ||
            (this.isUnbreakable && (e === 0 || this.hasBlock(this.leftBlock)))
          )),
        (this.bb.right.skip = (o, n) =>
          !!(
            (n.flags && !n.flags.right) ||
            (this.isUnbreakable && (e === 12 || this.hasBlock(this.rightBlock)))
          )),
        (this.bb.top.skip = (o, n) =>
          !!(
            (n.flags && !n.flags.top) ||
            (this.isUnbreakable && (i === 0 || this.hasBlock(this.topBlock)))
          )),
        (this.bb.bottom.skip = (o, n) =>
          !!(
            (n.flags && !n.flags.bottom) ||
            (this.isUnbreakable && this.hasBlock(this.bottomBlock))
          ));
    }
    hasBlock(t) {
      return this.physics.blocks.has(t);
    }
    onCollision(t) {
      this.queue(d.OnCollision, t), this.isUnbreakable || this.destroy();
    }
    destroy() {
      this.physics.blocks.get(this.cantorID) === this &&
        this.physics.blocks.delete(this.cantorID),
        super.destroy();
    }
  }
  const nt = 0.0055 * 1.25;
  class ht extends k {
    constructor(t) {
      super(t),
        this.workerToThread("position", new p(), d.UpdatePosition),
        this.workerToThread("visible", !0, d.UpdateVisible),
        this.position.set(t.x, t.y),
        (this.prevPos = this.position.clone()),
        (this.bb = this.physics.createBox({
          center: this.position,
          width: 0.5,
          height: 0.3,
          border: 0,
          unregistered: !0,
        }));
    }
    update(t) {
      const s = this.position;
      (s.y += nt * t),
        this.bb.updateFromPositions(this.prevPos, s),
        this.prevPos.copy(s);
      const e = this.physics.bar;
      this.bb.intersectBox(e.bb)
        ? ((this.visible = !1), this.queue(d.OnBonusPicked), this.destroy())
        : s.y > this.physics.bb.top.end.y + 1 &&
          ((this.visible = !1), this.destroy());
    }
  }
  const rt = 0.04,
    at = new C();
  class lt extends k {
    constructor(t) {
      super(t),
        this.workerToThread("position", new p(), d.UpdatePosition),
        this.workerToThread("visible", !1, d.UpdateVisible),
        this.position.setScalar(0),
        (this.prevPos = this.position.clone()),
        (this.bb = this.physics.createBox({
          center: this.position,
          width: 0.3,
          height: 0.3,
          border: 0,
          unregistered: !0,
        }));
    }
    projectileShoot([t, s]) {
      (this.visible = !0),
        this.position.set(t, s),
        this.prevPos.copy(this.position),
        this.bb.updateFromPositions(this.prevPos, this.position);
    }
    projectileCancel() {
      this.visible = !1;
    }
    onCollide({ side: t, box: s, point: e }) {
      const { x: i, y: o } = e;
      if (!this.visible || (t.isWalls && !t.isBottom)) return;
      let n = 0;
      t.isWalls ? (n = 1) : t.isBlock && (n = (s.parent.isUnbreakable, 3)),
        (this.visible = !1),
        this.queue(d.OnCollision, [i, o, n]),
        n >= 2 && s.parent.onCollision(-1);
    }
    update(t) {
      if (!this.visible) return;
      (this.position.y -= rt * t),
        this.bb.updateFromPositions(this.prevPos, this.position);
      let s = at.fromPoints(this.prevPos, this.position);
      this.prevPos.copy(this.position);
      const e = this.physics.boundingBoxes.length;
      let i = null;
      for (let o = e - 1; o >= 0; o--) {
        const n = this.physics.boundingBoxes[o];
        if (!n.isBlock && !n.isWalls) continue;
        const h = s.intersectBox(n);
        !h.intersects || ((i === null || h.sqDist < i.sqDist) && (i = h));
      }
      i && this.onCollide(i);
    }
  }
  class ct extends R {
    constructor() {
      super({ isWorker: !0 }),
        this.registerComponentClasses({
          Bar: G,
          Ball: et,
          Block: ot,
          Bonus: ht,
          Projectile: lt,
        }),
        (this.levelWidth = 0),
        (this.levelCenter = 0),
        (this.levelDepth = 0),
        (this.levelBallSize = 0),
        (this.levelBlockScale = 0),
        (this.isFirstUpdate = !0),
        (this.lastUpdateDate = 0),
        (this.dt = 0),
        (this.boundingBoxes = []),
        (this.canMove = !1),
        (this.bb = this.createBox({ isContainer: !0 })),
        this.bb.addFlag("isWalls"),
        (this.bb.bottom.isLimit = !0),
        (this.finishedLevelCount = 0),
        (this.paused = !1),
        (this.bonuses = {}),
        (this.blocks = new Map()),
        (this.isAutoplay = !1);
    }
    togglePause(t) {
      t !== this.paused &&
        ((this.paused = t), (this.lastUpdate = 0), (this.isFirstUpdate = !0));
    }
    toggleAutoplay(t) {
      this.isAutoplay = t;
    }
    setFinishedLevelCount(t) {
      this.finishedLevelCount = t;
    }
    toggleBonus([t, s]) {
      this.bonuses[t] = !!s;
    }
    createBox(t = {}) {
      t.border == null && (t.border = this.levelBallSize * 1.5);
      const s = new X(t);
      return t.unregistered || this.boundingBoxes.push(s), s;
    }
    removeBox(t) {
      const s = this.boundingBoxes.indexOf(t);
      s > -1 && this.boundingBoxes.splice(s, 1);
    }
    setConfiguration(t) {
      for (let s in t) s in this && (this[s] = t[s]);
      (this.levelCenter = this.levelWidth / 2),
        this.bb.center.set(this.levelWidth * 0.5, this.levelDepth * 0.5),
        (this.bb.width = this.levelWidth),
        (this.bb.height = this.levelDepth),
        (this.bb.border = -this.levelBallSize),
        this.bb.refresh();
    }
    setCanMove(t) {
      this.canMove = t;
    }
    respawnBall() {
      this.balls[0] && this.balls[0].respawn(),
        this.balls[1] && this.balls[1].respawn();
    }
  }
  new ct();
})();
