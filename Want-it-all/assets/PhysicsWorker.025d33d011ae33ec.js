//  Merci-Michel [R]
//  https://www.merci-michel.com/
//  Build 20220930-130257

import { V as c, P as w, C as b, a as L } from "./webgl.c47c235111ae33ec.js";
import {
  c as v,
  a2 as D,
  H as T,
  a3 as A,
  G as C,
  a5 as m,
} from "./vendor.4d25231d11ae33ec.js";
import "./main.fb1695dd11ae33ec.js";
const F = new c(),
  I = new c(),
  U = ["top", "right", "bottom", "left"];
function k(p, t) {
  return 0.5 * (p + t) * (p + t + 1) + t;
}
class M {
  constructor(t, i) {
    (this.boundingSphereCache = { start: new c(-1e5), end: new c(-1e5) }),
      (this.boundingSphere = { center: new c(), radius: 0 }),
      (this.start = t ? t.clone() : new c()),
      (this.end = i ? i.clone() : new c());
  }
  getLength() {
    return this.end.distanceTo(this.start);
  }
  set(t, i, o, s) {
    this.start.set(t, i), this.end.set(o, s);
  }
  fromPoints(t, i) {
    return this.start.copy(t), this.end.copy(i), this;
  }
  getDirection() {
    return F.copy(this.end).sub(this.start).normalize();
  }
  intersectLine(t, i) {
    const o = this.start.x,
      s = this.end.x,
      e = this.start.y,
      n = this.end.y,
      h = t.start.x,
      r = t.end.x,
      a = t.start.y,
      l = t.end.y,
      u = (l - a) * (s - o) - (r - h) * (n - e),
      d = (r - h) * (e - a) - (l - a) * (o - h),
      f = (s - o) * (e - a) - (n - e) * (o - h);
    if (u == 0) return !1;
    const y = d / u,
      x = f / u;
    return y >= 0 && y <= 1 && x >= 0 && x <= 1
      ? ((i.x = o + y * (s - o)), (i.y = e + y * (n - e)), !0)
      : !1;
  }
  intersectBox(t) {
    return t.intersectLine(this);
  }
  computeBoundingSphere() {
    const t = this.boundingSphereCache,
      i = this.boundingSphere;
    (t.start.equals(this.start) && t.end.equals(this.end)) ||
      (t.start.copy(this.start),
      t.end.copy(this.end),
      i.center.copy(this.start).add(this.end).multiplyScalar(0.5),
      (i.radius = this.getLength() * 0.5));
  }
}
const V = (p) => p.charAt(0).toUpperCase() + p.slice(1);
class q {
  constructor({
    center: t,
    width: i,
    height: o,
    border: s,
    isContainer: e,
  } = {}) {
    (this.sides = []),
      (this.min = new c()),
      (this.max = new c()),
      (this.center = t || new c()),
      (this.isContainer = e),
      (this.width = i || 1),
      (this.height = o || 1),
      (this.border = s || 0),
      (this.boundingSphere = { center: this.center, radius: 0 }),
      (this.intersectionResult = {
        box: this,
        insideBox: !1,
        intersects: !1,
        side: null,
        sqDist: Number.MAX_SAFE_INTEGER,
        point: new c(),
      }),
      U.forEach((n) => {
        const h = new M();
        (h.box = this),
          (h["is" + V(n)] = !0),
          (h.getDip = z(h)),
          this.sides.push((this[n] = h));
      }),
      this.refresh();
  }
  addFlag(t) {
    this[t] = !0;
    for (let i = 0, o = this.sides.length; i < o; i++) this.sides[i][t] = !0;
  }
  removeFlag(t) {
    this[t] = !1;
    for (let i = 0, o = this.sides.length; i < o; i++) this.sides[i][t] = !1;
  }
  updateFromPositions(t, i) {
    this.center = this.center.copy(i).add(t).multiplyScalar(0.5);
    const o = Math.abs(i.x - t.x),
      s = Math.abs(i.y - t.y);
    this.refresh(!1, o, s);
  }
  refresh(t, i = 0, o = 0) {
    const {
        min: s,
        max: e,
        center: n,
        width: h,
        height: r,
        border: a,
        top: l,
        right: u,
        bottom: d,
        left: f,
      } = this,
      y = (h + a + i) * 0.5,
      x = (r + a + o) * 0.5;
    (this.realwidth = y * 2),
      (this.realheight = x * 2),
      s.set(n.x - y, n.y - x),
      e.set(n.x + y, n.y + x),
      d.set(s.x, e.y, e.x, e.y),
      u.set(e.x, s.y, e.x, e.y),
      l.set(s.x, s.y, e.x, s.y),
      f.set(s.x, s.y, s.x, e.y),
      !t && (this.boundingSphere.radius = this.center.distanceTo(l.end));
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
    const i = I,
      o = this,
      s = this.intersectionResult;
    if (
      ((s.intersects = s.insideBox = !1),
      (s.sqDist = Number.MAX_SAFE_INTEGER),
      !this.isMoving && !this.isContainer)
    ) {
      t.computeBoundingSphere();
      const a = t.boundingSphere,
        l = o.boundingSphere,
        u = a.radius + l.radius,
        d = u * u;
      if (a.center.distanceToSquared(l.center) > d) return s;
    }
    const e = this.top.skip && this.top.skip(this, t),
      n = this.right.skip && this.right.skip(this, t),
      h = this.bottom.skip && this.bottom.skip(this, t),
      r = this.left.skip && this.left.skip(this, t);
    for (let a = 0, l = o.sides.length; a < l; a++) {
      const u = o.sides[a];
      if (u.isTop && e) continue;
      if (u.isRight && n) continue;
      if (u.isBottom && h) continue;
      if ((u.isLeft && r) || !t.intersectLine(u, i)) continue;
      const d = t.start.distanceToSquared(i);
      d >= s.sqDist ||
        d <= 0 ||
        ((s.intersects = !0), (s.sqDist = d), (s.side = u), s.point.copy(i));
    }
    if (!s.intersects) {
      let a, l;
      if (
        (e
          ? h || (l = l || this.bottom.getDip(t.end))
          : (l = this.top.getDip(t.end)),
        r
          ? n || (a = a || this.right.getDip(t.end))
          : (a = this.left.getDip(t.end)),
        this.isContainer && (a ? l || (l = a) : (a = l)),
        a && l)
      ) {
        const u = a.dip < l.dip ? a : l;
        (s.intersects = !0),
          (s.insideBox = !0),
          (s.side = u.side),
          (s.sqDist = u.dip * u.dip),
          s.point.copy(u.point);
      }
    }
    if (this.isBar && !s.intersects) {
      const a = this.left.start.x,
        l = this.right.start.x,
        u = this.top.start.y,
        d = this.bottom.start.y,
        f = t.end;
      f.x > a &&
        f.x < l &&
        f.y > u &&
        f.y < d &&
        ((s.intersects = !0),
        (s.insideBox = !0),
        (s.side = this.top),
        (s.sqDist = 0),
        s.point.copy(t.end));
    }
    return s;
  }
}
function z(p) {
  const t = p.box,
    i = t.isContainer;
  let o = p.end,
    s = { dip: 0, side: p, point: new c() },
    e = p.isRight || p.isTop ? -1 : 1;
  if ((i && (e *= -1), p.isTop || p.isBottom))
    return function (n) {
      let h = (n.y - o.y) * e;
      return (
        (!i && h > t.realheight) || h <= 0 ? (h = 0) : s.point.set(n.x, o.y),
        (s.dip = h),
        h > 0 ? s : !1
      );
    };
  if (p.isLeft || p.isRight)
    return function (n) {
      let h = (n.x - o.x) * e;
      return (
        (!i && h > t.realwidth) || h <= 0 ? (h = 0) : s.point.set(o.x, n.y),
        (s.dip = h),
        h > 0 ? s : !1
      );
    };
}
class E extends w {
  constructor(t) {
    super(t),
      (this.sentPos = new c()),
      (this.isActive = !1),
      (this.target = new c(0, 0)),
      (this.ease = new c(0.1, 0.1)),
      (this.size = 1),
      this.workerToThread("position", new c(), b.UpdatePosition),
      t.position && this.position.fromArray(t.position),
      (this.autoInfluence = 0),
      (this.randomOffset = 0),
      (this.autoPos = new c()),
      (this.playPos = new c()),
      (this.prevPos = new c()),
      (this.lastBounce = 0),
      (this.nextMove = 0),
      (this.autoEase = 0),
      (this.autoX = 0),
      (this.isActive = !1),
      (this.bb = this.physics.createBox({
        center: new c().clone(this.position),
        width: 2,
        height: 0.2,
        border: 0,
      })),
      this.bb.addFlag("isBar"),
      this.bb.addFlag("isMoving"),
      (this.tx = 0),
      (this.ty = 0),
      (this.vel = new c()),
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
      i = this.physics.balls.length;
    for (; t < i; ) {
      const o = this.physics.balls[t];
      if (o.state === 2) return o;
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
    const i = this.autoPos,
      o = performance.now();
    if (o - this.lastBounce > 300) {
      const s = this.getActiveBall();
      if (s) {
        const e = s.position,
          h = s.line.end.y > s.line.start.y ? D(e.y, -5.5, -1, 0, 0.9) : 0,
          r = this.clampToBounds(e.x + this.randomOffset * this.bb.width);
        if (h > 0.01) i.x = T(i.x, r, h, t);
        else {
          if (o > this.nextMove) {
            const a = Math.random(),
              l = a < 0.04,
              u = a < 0.15,
              d = Math.random() < 0.2 ? 1.2 : 0.6;
            (this.nextMove = l
              ? o + 750 + Math.random() * 500
              : u
              ? o + 150 + Math.random() * 150
              : o + 500 + Math.random() * 500),
              (this.autoEase = 0.03 + Math.random() * 0.04),
              (this.autoX = this.clampToBounds(
                A(
                  i.x,
                  r + (Math.random() * 2 - 1) * d,
                  0.4 + Math.random() * 0.4
                )
              ));
          }
          i.x = T(i.x, this.autoX, this.autoEase, t);
        }
      }
    }
  }
  firstUpdate(t) {
    const i = this.prevPos,
      o = this.playPos,
      s = this.autoPos,
      e = this.position;
    i.copy(e),
      (this.tx = this.target.x),
      (this.ty = this.isActive || !this.useKeyboard ? this.target.y : -1),
      (this.instant = T(this.instant, this.isActive ? 1 : 0, 0.08, t)),
      (!this.isActive || (this.useKeyboard && this.isActive)) &&
        (this.instant = 0),
      (o.x = A(C(o.x, this.tx, this.ease.x, t, 0.01), this.tx, this.instant)),
      (o.y = A(C(o.y, this.ty, this.ease.y, t, 0.01), this.ty, this.instant)),
      this.physics.isAutoplay
        ? this.updateAutoplay(t)
        : this.autoPos.set(this.physics.levelWidth * 0.5, -1),
      (this.autoInfluence = T(
        this.autoInfluence,
        this.physics.isAutoplay ? 1 : 0,
        0.1,
        t
      )),
      e.lerpVectors(o, s, this.autoInfluence),
      (e.x = this.clampToBounds(e.x)),
      this.vel.copy(e).sub(i);
    const n =
      0.2 +
      0.05 * m(Math.abs(this.vel.x), 0.05, 0.14) +
      0.06 * m(-this.vel.y, 0, 1);
    (this.bb.height = n),
      (this.bb.width =
        this.size * 2 +
        0.05 +
        0.1 * m(Math.abs(this.vel.x), 0.2, 0.5) +
        0.5 * m(-this.vel.y, 0, 1.5)),
      this.vel.y > 0
        ? this.bb.updateFromPositions(e, e)
        : this.bb.updateFromPositions(i, e);
  }
  update(t) {}
}
const O = new c(),
  R = new c(),
  _ = new c();
new c();
new M();
new M();
const P = Math.PI / 180,
  g = { Hidden: 0, Frozen: 1, Active: 2 },
  B = 1.15,
  N = 0.01 * B,
  X = 0.004 * B,
  S = { lvl1: 35e-5 * B, lvl2: 45e-5 * B, lvl3: 55e-5 * B, lvl4: 65e-5 * B },
  H = 0.6;
class j extends w {
  constructor(t) {
    super(t),
      this.physics.balls || (this.physics.balls = []),
      (this.index = t.index),
      this.physics.balls.push(this),
      this.workerToThread("visible", !1, b.UpdateVisible),
      this.workerToThread("addVel", 0, b.UpdateAdditionalVelocity),
      this.workerToThread("position", new c(), b.UpdatePosition),
      (this.previousPos = this.position.clone()),
      (this.direction = new c()),
      (this.addVel = 0),
      (this.state = 0),
      (this.boxPrev = 0),
      (this.boxPrevPrev = 0),
      (this.bounceScore = 0),
      (this.line = new M()),
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
    const i = this.state;
    (this.state = t),
      i !== g.Active &&
        t === g.Active &&
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
  bounceWall(t, i, o, s) {
    const e = t.side,
      n = this.physics.bonuses.futureproof,
      h = !n && e.isTop;
    let r = !1;
    if (
      (e.isTop && s.y > 0
        ? (h || (s.y = -Math.abs(s.y)),
          (r = !h || o.y > 0.7),
          h || (this.lastWasBottomWall = !0))
        : e.isBottom && s.y < 0
        ? ((s.y = Math.abs(s.y)), (r = !0), (this.lastWasBottomWall = !1))
        : e.isLeft && s.x < 0
        ? ((s.x = Math.abs(s.x)), (r = !0), (this.lastWasBottomWall = !1))
        : e.isRight &&
          s.x > 0 &&
          ((s.x = -Math.abs(s.x)), (r = !0), (this.lastWasBottomWall = !1)),
      r)
    ) {
      o.copy(t.point),
        s.normalize(),
        this.avoidBounceLock(t.box, s),
        this.clampDirectionAngle(s);
      let a = 0;
      e.isRight ? (a = 1) : e.isTop ? (a = 2) : e.isLeft && (a = 3),
        !n && e.isTop
          ? ((this.visible = !1),
            (this.state = g.Hidden),
            this.queue(b.OnLimitCollision, [t.point.x, t.point.y]))
          : this.queue(b.OnWallCollision, [t.point.x, t.point.y, a, s.x, s.y]);
    }
  }
  clampDirectionAngle(t) {
    let i = t.angle();
    const o = 270 * P,
      s = 90 * P,
      e = 70 * P;
    i > 180 * P ? (i = v(i, o - e, o + e)) : (i = v(i, s - e, s + e)),
      t.set(Math.cos(i), Math.sin(i));
  }
  offsetAngle(t) {
    let i = t.angle(),
      o = Math.sign(t.y) * this.bounceLockMult;
    (i += Math.min(10, this.bounceScore * 1 + 1) * P * o),
      t.set(Math.cos(i), Math.sin(i));
  }
  avoidBounceLock(t, i) {
    t !== this.boxPrev &&
      (t === this.boxPrevPrev ||
      t === this.boxPrevPrevPrev ||
      t === this.boxPrevPrevPrevPrev
        ? t.isBar || this.boxPrev.isBar
          ? ((this.bounceScore += 0.5),
            this.bounceScore >= 0.1 && this.offsetAngle(i))
          : ((this.bounceScore += 2),
            this.bounceScore >= 0 && this.offsetAngle(i))
        : (this.bounceScore = 0),
      (this.boxPrevPrevPrevPrev = this.boxPrevPrevPrev),
      (this.boxPrevPrevPrev = this.boxPrevPrev),
      (this.boxPrevPrev = this.boxPrev),
      (this.boxPrev = t));
  }
  bounceBlock(t, i, o, s) {
    const e = t.side,
      n = t.box.parent,
      h = this.physics.bonuses.prebuilt,
      r = n.isUnbreakable;
    if (
      ((this.lastWasBottomWall = !1),
      e.isBlock && e.box.parent.onCollision(this.index),
      h)
    )
      return;
    e.isBottom
      ? (s.y = Math.abs(s.y))
      : e.isTop
      ? (s.y = -Math.abs(s.y))
      : e.isRight
      ? (s.x = Math.abs(s.x))
      : e.isLeft && (s.x = -Math.abs(s.x)),
      o.copy(t.point);
    let a = 0;
    r && (a = 1),
      this.queue(b.OnBlockCollision, [t.point.x, t.point.y, a, s.x, s.y]),
      this.avoidBounceLock(t.box, s),
      this.clampDirectionAngle(s);
  }
  bounceBar(t, i, o, s) {
    const e = this.physics.bar,
      n = t.side,
      h = e.bb.border + e.bb.width,
      r = (e.position.x - t.point.x) / (h * 0.5),
      a = v(r, -1, 1),
      l = (Math.PI / 4) * a + Math.PI / 2,
      u = this.physics.bonuses.futureproof;
    if (
      (e.position.y > e.bb.top.end.y,
      o.y > e.position.y,
      e.onBallBounce(),
      this.lastWasBottomWall && e.vel.y >= -0.05 && u)
    )
      s.y < 0 &&
        e.vel.y >= -0.2 &&
        ((o.y = Math.max(o.y, t.box.bottom.end.y)), (s.y = Math.abs(s.y)));
    else {
      if (
        (e.vel.y < 0 &&
          o.add(_.copy(e.vel).multiplyScalar(0.2).clampLength(0, 0.05)),
        s.set(Math.cos(l), Math.sin(l)),
        (s.y = -Math.abs(s.y)),
        s.normalize(),
        !n.isTop || e.vel.y <= 0)
      ) {
        const y = e.vel.length(),
          x = m(y, 0.005, 0.05);
        s.lerp(e.vel, x * 0.915).normalize();
      }
      const f =
        Math.max(m(Math.abs(e.vel.x), 0.15, 0.5) * 0.5, m(-e.vel.y, 0.1, 0.5)) *
        X;
      (this.addVel = Math.max(this.addVel, f)),
        this.queue(b.OnBarCollision, [t.point.x, t.point.y, s.x, s.y]);
    }
    this.avoidBounceLock(t, s), this.clampDirectionAngle(s);
  }
  getAdditionalLevelSpeed() {
    const t = this.physics.finishedLevelCount,
      i = Math.max(0, t - 7),
      o = v(t - 5, 0, 2),
      s = v(t - 3, 0, 2),
      e = v(t - 0, 0, 3);
    return i * S.lvl4 + o * S.lvl3 + s * S.lvl2 + e * S.lvl1;
  }
  wallSafety(t) {
    const i = this.position,
      o = this.direction,
      s = this.physics.bonuses.futureproof,
      e = 0.1;
    i.x > this.physics.levelWidth + e
      ? ((i.x = this.physics.levelWidth - e),
        (o.x = -Math.abs(o.x)),
        (this.lastWasBottomWall = !1),
        this.avoidBounceLock(this.physics.bb, o))
      : i.x < -e
      ? ((i.x = e),
        (o.x = Math.abs(o.x)),
        this.avoidBounceLock(this.physics.bb, o))
      : i.y < this.physics.levelDepth - e
      ? ((i.y = this.physics.levelDepth + e),
        (o.y = Math.abs(o.y)),
        (this.lastWasBottomWall = !1),
        this.avoidBounceLock(this.physics.bb, o))
      : s && i.y > e
      ? ((i.y = -e),
        (o.y = -Math.abs(o.y)),
        (this.lastWasBottomWall = !0),
        this.avoidBounceLock(this.physics.bb, o))
      : !s &&
        i.y > 1 &&
        ((this.visible = !1),
        (this.state = g.Hidden),
        (this.lastWasBottomWall = !1),
        this.queue(b.OnLimitCollision, [i.x, i.y]));
  }
  updateActive(t) {
    this.visible = !0;
    let o = (N + this.getAdditionalLevelSpeed() + this.addVel) * t,
      s = 0;
    for (s = 0; s < 4 && o > 0; s++) {
      const e = O.copy(this.direction).normalize().multiplyScalar(o),
        n = R.copy(this.position).add(e);
      let h = this.line.fromPoints(this.position, n);
      const r =
        (Math.atan2(h.end.y - h.start.y, h.end.x - h.start.x) * 180) / Math.PI;
      (h.angle = r),
        (h.flags.top = r < 180 && r > 0),
        (h.flags.right = r < -90 || r > 90),
        (h.flags.bottom = r > -180 && r < 0),
        (h.flags.left = r > -90 && r < 90);
      const a = this.physics.boundingBoxes.length;
      let l = null;
      for (let f = a - 1; f >= 0; f--) {
        const y = this.physics.boundingBoxes[f],
          x = h.intersectBox(y);
        !x.intersects || ((l === null || x.sqDist < l.sqDist) && (l = x));
      }
      l &&
        (l.box.isBar
          ? this.bounceBar(l, h, n, this.direction)
          : l.box.isBlock
          ? this.bounceBlock(l, h, n, this.direction)
          : this.bounceWall(l, h, n, this.direction),
        this.lastIntersection !== l &&
          ((this.lastIntersection = l), (this.addVel *= H)));
      const u = this.direction.lengthSq() < 1e-5;
      (o -= this.position.distanceTo(n)),
        (u || o < 1e-9) && (o = 0),
        this.position.copy(n),
        this.wallSafety(t);
    }
  }
  updateHidden() {
    (this.visible = !1), (this.addVel = 0);
  }
  update(t) {
    this.state === g.Frozen
      ? this.updateFrozen(t)
      : this.state === g.Active
      ? this.updateActive(t)
      : this.updateHidden(t);
  }
}
class G extends w {
  constructor(t) {
    super(t);
    const i = (this.size = this.physics.levelBlockScale);
    (this.position = new c().fromArray(t.position)),
      (this.isUnbreakable = t.isUnbreakable),
      (this.bb = this.physics.createBox({
        center: this.position,
        width: i,
        height: i,
      })),
      this.bb.addFlag("isBlock"),
      (this.bb.parent = this);
    const o = t.coords[0],
      s = t.coords[1];
    (this.cantorID = k(o, s)),
      this.physics.blocks.set(this.cantorID, this),
      (this.leftBlock = k(o - 1, s)),
      (this.rightBlock = k(o + 1, s)),
      (this.topBlock = k(o, s - 1)),
      (this.bottomBlock = k(o, s + 1)),
      (this.bb.left.skip = (e, n) =>
        !!(
          (n.flags && !n.flags.left) ||
          (this.isUnbreakable && (o === 0 || this.hasBlock(this.leftBlock)))
        )),
      (this.bb.right.skip = (e, n) =>
        !!(
          (n.flags && !n.flags.right) ||
          (this.isUnbreakable && (o === 12 || this.hasBlock(this.rightBlock)))
        )),
      (this.bb.top.skip = (e, n) =>
        !!(
          (n.flags && !n.flags.top) ||
          (this.isUnbreakable && (s === 0 || this.hasBlock(this.topBlock)))
        )),
      (this.bb.bottom.skip = (e, n) =>
        !!(
          (n.flags && !n.flags.bottom) ||
          (this.isUnbreakable && this.hasBlock(this.bottomBlock))
        ));
  }
  hasBlock(t) {
    return this.physics.blocks.has(t);
  }
  onCollision(t) {
    this.queue(b.OnCollision, t), this.isUnbreakable || this.destroy();
  }
  destroy() {
    this.physics.blocks.get(this.cantorID) === this &&
      this.physics.blocks.delete(this.cantorID),
      super.destroy();
  }
}
const K = 0.0055 * 1.25;
class Y extends w {
  constructor(t) {
    super(t),
      this.workerToThread("position", new c(), b.UpdatePosition),
      this.workerToThread("visible", !0, b.UpdateVisible),
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
    const i = this.position;
    (i.y += K * t),
      this.bb.updateFromPositions(this.prevPos, i),
      this.prevPos.copy(i);
    const o = this.physics.bar;
    this.bb.intersectBox(o.bb)
      ? ((this.visible = !1), this.queue(b.OnBonusPicked), this.destroy())
      : i.y > this.physics.bb.top.end.y + 1 &&
        ((this.visible = !1), this.destroy());
  }
}
const $ = 0.04,
  J = new M();
let Q = -1;
class Z extends w {
  constructor(t) {
    super(t),
      this.workerToThread("position", new c(), b.UpdatePosition),
      this.workerToThread("visible", !1, b.UpdateVisible),
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
  projectileShoot([t, i]) {
    (Q *= -1),
      (this.visible = !0),
      this.position.set(t, i),
      this.prevPos.copy(this.position),
      this.bb.updateFromPositions(this.prevPos, this.position);
  }
  projectileCancel() {
    this.visible = !1;
  }
  onCollide({ side: t, box: i, point: o }) {
    const { x: s, y: e } = o;
    if (!this.visible || (t.isWalls && !t.isBottom)) return;
    let n = 0;
    t.isWalls ? (n = 1) : t.isBlock && (n = (i.parent.isUnbreakable, 3)),
      (this.visible = !1),
      this.queue(b.OnCollision, [s, e, n]),
      n >= 2 && i.parent.onCollision(-1);
  }
  update(t) {
    if (!this.visible) return;
    (this.position.y -= $ * t),
      this.bb.updateFromPositions(this.prevPos, this.position);
    let i = J.fromPoints(this.prevPos, this.position);
    this.prevPos.copy(this.position);
    const o = this.physics.boundingBoxes.length;
    let s = null;
    for (let e = o - 1; e >= 0; e--) {
      const n = this.physics.boundingBoxes[e];
      if (!n.isBlock && !n.isWalls) continue;
      const h = i.intersectBox(n);
      !h.intersects || ((s === null || h.sqDist < s.sqDist) && (s = h));
    }
    s && this.onCollide(s);
  }
}
class tt extends L {
  constructor() {
    super({ isWorker: !0 }),
      this.registerComponentClasses({
        Bar: E,
        Ball: j,
        Block: G,
        Bonus: Y,
        Projectile: Z,
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
  toggleBonus([t, i]) {
    this.bonuses[t] = !!i;
  }
  createBox(t = {}) {
    t.border == null && (t.border = this.levelBallSize * 1.5);
    const i = new q(t);
    return t.unregistered || this.boundingBoxes.push(i), i;
  }
  removeBox(t) {
    const i = this.boundingBoxes.indexOf(t);
    i > -1 && this.boundingBoxes.splice(i, 1);
  }
  setConfiguration(t) {
    for (let i in t) i in this && (this[i] = t[i]);
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
const W = new tt();
function ot(p) {
  (W.isFullMainThread = !0),
    (W.onmessage = () => {}),
    (W.main = p),
    (this.isFullMainThread = !0),
    (this.onMessage = W.onMessage);
}
export { ot as default };
