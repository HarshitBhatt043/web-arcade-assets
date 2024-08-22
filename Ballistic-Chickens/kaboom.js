var kaboom = (() => {
  var Ve = Object.defineProperty;
  var ss = Object.getOwnPropertyDescriptor;
  var os = Object.getOwnPropertyNames;
  var as = Object.prototype.hasOwnProperty;
  var us = (i, n, u) =>
    n in i
      ? Ve(i, n, { enumerable: !0, configurable: !0, writable: !0, value: u })
      : (i[n] = u);
  var cs = (i) => Ve(i, "__esModule", { value: !0 }),
    a = (i, n) => Ve(i, "name", { value: n, configurable: !0 });
  var ls = (i, n) => {
      for (var u in n) Ve(i, u, { get: n[u], enumerable: !0 });
    },
    ds = (i, n, u, c) => {
      if ((n && typeof n == "object") || typeof n == "function")
        for (let U of os(n))
          !as.call(i, U) &&
            (u || U !== "default") &&
            Ve(i, U, {
              get: () => n[U],
              enumerable: !(c = ss(n, U)) || c.enumerable,
            });
      return i;
    };
  var hs = (
    (i) => (n, u) =>
      (i && i.get(n)) || ((u = ds(cs({}), n, 1)), i && i.set(n, u), u)
  )(typeof WeakMap != "undefined" ? new WeakMap() : 0);
  var G = (i, n, u) => (us(i, typeof n != "symbol" ? n + "" : n, u), u);
  var Nn = (() => {
    for (var i = new Uint8Array(128), n = 0; n < 64; n++)
      i[n < 26 ? n + 65 : n < 52 ? n + 71 : n < 62 ? n - 4 : n * 4 - 205] = n;
    return (u) => {
      for (
        var c = u.length,
          U = new Uint8Array(
            (((c - (u[c - 1] == "=") - (u[c - 2] == "=")) * 3) / 4) | 0
          ),
          p = 0,
          S = 0;
        p < c;

      ) {
        var D = i[u.charCodeAt(p++)],
          R = i[u.charCodeAt(p++)],
          P = i[u.charCodeAt(p++)],
          B = i[u.charCodeAt(p++)];
        (U[S++] = (D << 2) | (R >> 4)),
          (U[S++] = (R << 4) | (P >> 2)),
          (U[S++] = (P << 6) | B);
      }
      return U;
    };
  })();
  var $s = {};
  ls($s, { default: () => Xs });
  function ce(i) {
    return (i * Math.PI) / 180;
  }
  a(ce, "deg2rad");
  function Wt(i) {
    return (i * 180) / Math.PI;
  }
  a(Wt, "rad2deg");
  function Y(i, n, u) {
    return n > u ? Y(i, u, n) : Math.min(Math.max(i, n), u);
  }
  a(Y, "clamp");
  function _e(i, n, u) {
    return i + (n - i) * u;
  }
  a(_e, "lerp");
  function ut(i, n, u, c, U) {
    return c + ((i - n) / (u - n)) * (U - c);
  }
  a(ut, "map");
  function Gn(i, n, u, c, U) {
    return Y(ut(i, n, u, c, U), c, U);
  }
  a(Gn, "mapc");
  var _ = class {
      x = 0;
      y = 0;
      constructor(n = 0, u = n) {
        (this.x = n), (this.y = u);
      }
      static fromAngle(n) {
        let u = ce(n);
        return new _(Math.cos(u), Math.sin(u));
      }
      clone() {
        return new _(this.x, this.y);
      }
      add(...n) {
        let u = f(...n);
        return new _(this.x + u.x, this.y + u.y);
      }
      sub(...n) {
        let u = f(...n);
        return new _(this.x - u.x, this.y - u.y);
      }
      scale(...n) {
        let u = f(...n);
        return new _(this.x * u.x, this.y * u.y);
      }
      dist(...n) {
        let u = f(...n);
        return Math.sqrt(
          (this.x - u.x) * (this.x - u.x) + (this.y - u.y) * (this.y - u.y)
        );
      }
      len() {
        return this.dist(new _(0, 0));
      }
      unit() {
        return this.scale(1 / this.len());
      }
      normal() {
        return new _(this.y, -this.x);
      }
      dot(n) {
        return this.x * n.x + this.y * n.y;
      }
      angle(...n) {
        let u = f(...n);
        return Wt(Math.atan2(this.y - u.y, this.x - u.x));
      }
      lerp(n, u) {
        return new _(_e(this.x, n.x, u), _e(this.y, n.y, u));
      }
      toFixed(n) {
        return new _(Number(this.x.toFixed(n)), Number(this.y.toFixed(n)));
      }
      eq(n) {
        return this.x === n.x && this.y === n.y;
      }
      toString() {
        return `vec2(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
      }
    },
    q = _;
  a(q, "Vec2"),
    G(q, "LEFT", new _(-1, 0)),
    G(q, "RIGHT", new _(1, 0)),
    G(q, "UP", new _(0, -1)),
    G(q, "DOWN", new _(0, 1));
  function f(...i) {
    if (i.length === 1) {
      if (i[0] instanceof q) return f(i[0].x, i[0].y);
      if (Array.isArray(i[0]) && i[0].length === 2) return f(...i[0]);
    }
    return new q(...i);
  }
  a(f, "vec2");
  var Ne = class {
    x = 0;
    y = 0;
    z = 0;
    constructor(n, u, c) {
      (this.x = n), (this.y = u), (this.z = c);
    }
    xy() {
      return f(this.x, this.y);
    }
  };
  a(Ne, "Vec3");
  var le = a((i, n, u) => new Ne(i, n, u), "vec3"),
    oe = class {
      r = 255;
      g = 255;
      b = 255;
      constructor(n, u, c) {
        (this.r = Y(n, 0, 255)),
          (this.g = Y(u, 0, 255)),
          (this.b = Y(c, 0, 255));
      }
      static fromArray(n) {
        return new oe(n[0], n[1], n[2]);
      }
      clone() {
        return new oe(this.r, this.g, this.b);
      }
      lighten(n) {
        return new oe(this.r + n, this.g + n, this.b + n);
      }
      darken(n) {
        return this.lighten(-n);
      }
      invert() {
        return new oe(255 - this.r, 255 - this.g, 255 - this.b);
      }
      mult(n) {
        return new oe(
          (this.r * n.r) / 255,
          (this.g * n.g) / 255,
          (this.b * n.b) / 255
        );
      }
      eq(n) {
        return this.r === n.r && this.g === n.g && this.b === n.b;
      }
      toString() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
      }
      static fromHSL(n, u, c) {
        if (u == 0) return T(255 * c, 255 * c, 255 * c);
        let U = a(
            (B, x, g) => (
              g < 0 && (g += 1),
              g > 1 && (g -= 1),
              g < 1 / 6
                ? B + (x - B) * 6 * g
                : g < 1 / 2
                ? x
                : g < 2 / 3
                ? B + (x - B) * (2 / 3 - g) * 6
                : B
            ),
            "hue2rgb"
          ),
          p = c < 0.5 ? c * (1 + u) : c + u - c * u,
          S = 2 * c - p,
          D = U(S, p, n + 1 / 3),
          R = U(S, p, n),
          P = U(S, p, n - 1 / 3);
        return new oe(
          Math.round(D * 255),
          Math.round(R * 255),
          Math.round(P * 255)
        );
      }
    },
    v = oe;
  a(v, "Color"),
    G(v, "RED", T(255, 0, 0)),
    G(v, "GREEN", T(0, 255, 0)),
    G(v, "BLUE", T(0, 0, 255)),
    G(v, "YELLOW", T(255, 255, 0)),
    G(v, "MAGENTA", T(255, 0, 255)),
    G(v, "CYAN", T(0, 255, 255)),
    G(v, "WHITE", T(255, 255, 255)),
    G(v, "BLACK", T(0, 0, 0));
  function T(...i) {
    if (i.length === 0) return new v(255, 255, 255);
    if (i.length === 1) {
      if (i[0] instanceof v) return i[0].clone();
      if (Array.isArray(i[0]) && i[0].length === 3) return v.fromArray(i[0]);
    }
    return new v(...i);
  }
  a(T, "rgb");
  var jn = a((i, n, u) => v.fromHSL(i, n, u), "hsl2rgb"),
    I = class {
      x = 0;
      y = 0;
      w = 1;
      h = 1;
      constructor(n, u, c, U) {
        (this.x = n), (this.y = u), (this.w = c), (this.h = U);
      }
      scale(n) {
        return new I(
          this.x + this.w * n.x,
          this.y + this.h * n.y,
          this.w * n.w,
          this.h * n.h
        );
      }
      clone() {
        return new I(this.x, this.y, this.w, this.h);
      }
      eq(n) {
        return (
          this.x === n.x && this.y === n.y && this.w === n.w && this.h === n.h
        );
      }
      toString() {
        return `quad(${this.x}, ${this.y}, ${this.w}, ${this.h})`;
      }
    };
  a(I, "Quad");
  function Xn(i, n, u, c) {
    return new I(i, n, u, c);
  }
  a(Xn, "quad");
  var M = class {
    m = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    constructor(n) {
      n && (this.m = n);
    }
    clone() {
      return new M(this.m);
    }
    mult(n) {
      let u = [];
      for (let c = 0; c < 4; c++)
        for (let U = 0; U < 4; U++)
          u[c * 4 + U] =
            this.m[0 * 4 + U] * n.m[c * 4 + 0] +
            this.m[1 * 4 + U] * n.m[c * 4 + 1] +
            this.m[2 * 4 + U] * n.m[c * 4 + 2] +
            this.m[3 * 4 + U] * n.m[c * 4 + 3];
      return new M(u);
    }
    multVec4(n) {
      return {
        x:
          n.x * this.m[0] +
          n.y * this.m[4] +
          n.z * this.m[8] +
          n.w * this.m[12],
        y:
          n.x * this.m[1] +
          n.y * this.m[5] +
          n.z * this.m[9] +
          n.w * this.m[13],
        z:
          n.x * this.m[2] +
          n.y * this.m[6] +
          n.z * this.m[10] +
          n.w * this.m[14],
        w:
          n.x * this.m[3] +
          n.y * this.m[7] +
          n.z * this.m[11] +
          n.w * this.m[15],
      };
    }
    multVec3(n) {
      let u = this.multVec4({ x: n.x, y: n.y, z: n.z, w: 1 });
      return le(u.x, u.y, u.z);
    }
    multVec2(n) {
      return f(
        n.x * this.m[0] + n.y * this.m[4] + 0 * this.m[8] + 1 * this.m[12],
        n.x * this.m[1] + n.y * this.m[5] + 0 * this.m[9] + 1 * this.m[13]
      );
    }
    static translate(n) {
      return new M([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, n.x, n.y, 0, 1]);
    }
    static scale(n) {
      return new M([n.x, 0, 0, 0, 0, n.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    static rotateX(n) {
      return (
        (n = ce(-n)),
        new M([
          1,
          0,
          0,
          0,
          0,
          Math.cos(n),
          -Math.sin(n),
          0,
          0,
          Math.sin(n),
          Math.cos(n),
          0,
          0,
          0,
          0,
          1,
        ])
      );
    }
    static rotateY(n) {
      return (
        (n = ce(-n)),
        new M([
          Math.cos(n),
          0,
          Math.sin(n),
          0,
          0,
          1,
          0,
          0,
          -Math.sin(n),
          0,
          Math.cos(n),
          0,
          0,
          0,
          0,
          1,
        ])
      );
    }
    static rotateZ(n) {
      return (
        (n = ce(-n)),
        new M([
          Math.cos(n),
          -Math.sin(n),
          0,
          0,
          Math.sin(n),
          Math.cos(n),
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1,
        ])
      );
    }
    translate(n) {
      return this.mult(M.translate(n));
    }
    scale(n) {
      return this.mult(M.scale(n));
    }
    rotateX(n) {
      return this.mult(M.rotateX(n));
    }
    rotateY(n) {
      return this.mult(M.rotateY(n));
    }
    rotateZ(n) {
      return this.mult(M.rotateZ(n));
    }
    invert() {
      let n = [],
        u = this.m[10] * this.m[15] - this.m[14] * this.m[11],
        c = this.m[9] * this.m[15] - this.m[13] * this.m[11],
        U = this.m[9] * this.m[14] - this.m[13] * this.m[10],
        p = this.m[8] * this.m[15] - this.m[12] * this.m[11],
        S = this.m[8] * this.m[14] - this.m[12] * this.m[10],
        D = this.m[8] * this.m[13] - this.m[12] * this.m[9],
        R = this.m[6] * this.m[15] - this.m[14] * this.m[7],
        P = this.m[5] * this.m[15] - this.m[13] * this.m[7],
        B = this.m[5] * this.m[14] - this.m[13] * this.m[6],
        x = this.m[4] * this.m[15] - this.m[12] * this.m[7],
        g = this.m[4] * this.m[14] - this.m[12] * this.m[6],
        Me = this.m[5] * this.m[15] - this.m[13] * this.m[7],
        ee = this.m[4] * this.m[13] - this.m[12] * this.m[5],
        Ke = this.m[6] * this.m[11] - this.m[10] * this.m[7],
        Ue = this.m[5] * this.m[11] - this.m[9] * this.m[7],
        be = this.m[5] * this.m[10] - this.m[9] * this.m[6],
        He = this.m[4] * this.m[11] - this.m[8] * this.m[7],
        ze = this.m[4] * this.m[10] - this.m[8] * this.m[6],
        ye = this.m[4] * this.m[9] - this.m[8] * this.m[5];
      (n[0] = this.m[5] * u - this.m[6] * c + this.m[7] * U),
        (n[4] = -(this.m[4] * u - this.m[6] * p + this.m[7] * S)),
        (n[8] = this.m[4] * c - this.m[5] * p + this.m[7] * D),
        (n[12] = -(this.m[4] * U - this.m[5] * S + this.m[6] * D)),
        (n[1] = -(this.m[1] * u - this.m[2] * c + this.m[3] * U)),
        (n[5] = this.m[0] * u - this.m[2] * p + this.m[3] * S),
        (n[9] = -(this.m[0] * c - this.m[1] * p + this.m[3] * D)),
        (n[13] = this.m[0] * U - this.m[1] * S + this.m[2] * D),
        (n[2] = this.m[1] * R - this.m[2] * P + this.m[3] * B),
        (n[6] = -(this.m[0] * R - this.m[2] * x + this.m[3] * g)),
        (n[10] = this.m[0] * Me - this.m[1] * x + this.m[3] * ee),
        (n[14] = -(this.m[0] * B - this.m[1] * g + this.m[2] * ee)),
        (n[3] = -(this.m[1] * Ke - this.m[2] * Ue + this.m[3] * be)),
        (n[7] = this.m[0] * Ke - this.m[2] * He + this.m[3] * ze),
        (n[11] = -(this.m[0] * Ue - this.m[1] * He + this.m[3] * ye)),
        (n[15] = this.m[0] * be - this.m[1] * ze + this.m[2] * ye);
      let gt =
        this.m[0] * n[0] +
        this.m[1] * n[4] +
        this.m[2] * n[8] +
        this.m[3] * n[12];
      for (let ne = 0; ne < 4; ne++)
        for (let xe = 0; xe < 4; xe++) n[ne * 4 + xe] *= 1 / gt;
      return new M(n);
    }
    toString() {
      return this.m.toString();
    }
  };
  a(M, "Mat4");
  function qt(i, n, u, c = Math.sin) {
    return i + ((c(u) + 1) / 2) * (n - i);
  }
  a(qt, "wave");
  var fs = 1103515245,
    ms = 12345,
    kn = 2147483648,
    ke = class {
      seed;
      constructor(n) {
        this.seed = n;
      }
      gen() {
        return (this.seed = (fs * this.seed + ms) % kn), this.seed / kn;
      }
      genNumber(n, u) {
        return n + this.gen() * (u - n);
      }
      genVec2(n, u) {
        return new q(this.genNumber(n.x, u.x), this.genNumber(n.y, u.y));
      }
      genColor(n, u) {
        return new v(
          this.genNumber(n.r, u.r),
          this.genNumber(n.g, u.g),
          this.genNumber(n.b, u.b)
        );
      }
      genAny(...n) {
        if (n.length === 0) return this.gen();
        if (n.length === 1) {
          if (typeof n[0] == "number") return this.genNumber(0, n[0]);
          if (n[0] instanceof q) return this.genVec2(f(0, 0), n[0]);
          if (n[0] instanceof v) return this.genColor(T(0, 0, 0), n[0]);
        } else if (n.length === 2) {
          if (typeof n[0] == "number" && typeof n[1] == "number")
            return this.genNumber(n[0], n[1]);
          if (n[0] instanceof q && n[1] instanceof q)
            return this.genVec2(n[0], n[1]);
          if (n[0] instanceof v && n[1] instanceof v)
            return this.genColor(n[0], n[1]);
        }
      }
    };
  a(ke, "RNG");
  var Mt = new ke(Date.now());
  function $n(i) {
    return i != null && (Mt.seed = i), Mt.seed;
  }
  a($n, "randSeed");
  function je(...i) {
    return Mt.genAny(...i);
  }
  a(je, "rand");
  function Pt(...i) {
    return Math.floor(je(...i));
  }
  a(Pt, "randi");
  function Yn(i) {
    return je() <= i;
  }
  a(Yn, "chance");
  function Kn(i) {
    return i[Pt(i.length)];
  }
  a(Kn, "choose");
  function Hn(i, n) {
    return (
      i.p2.x >= n.p1.x &&
      i.p1.x <= n.p2.x &&
      i.p2.y >= n.p1.y &&
      i.p1.y <= n.p2.y
    );
  }
  a(Hn, "testRectRect2");
  function Ft(i, n) {
    return (
      i.p2.x > n.p1.x && i.p1.x < n.p2.x && i.p2.y > n.p1.y && i.p1.y < n.p2.y
    );
  }
  a(Ft, "testRectRect");
  function Ot(i, n) {
    if (
      (i.p1.x === i.p2.x && i.p1.y === i.p2.y) ||
      (n.p1.x === n.p2.x && n.p1.y === n.p2.y)
    )
      return null;
    let u =
      (n.p2.y - n.p1.y) * (i.p2.x - i.p1.x) -
      (n.p2.x - n.p1.x) * (i.p2.y - i.p1.y);
    if (u === 0) return null;
    let c =
        ((n.p2.x - n.p1.x) * (i.p1.y - n.p1.y) -
          (n.p2.y - n.p1.y) * (i.p1.x - n.p1.x)) /
        u,
      U =
        ((i.p2.x - i.p1.x) * (i.p1.y - n.p1.y) -
          (i.p2.y - i.p1.y) * (i.p1.x - n.p1.x)) /
        u;
    return c < 0 || c > 1 || U < 0 || U > 1 ? null : c;
  }
  a(Ot, "testLineLineT");
  function ae(i, n) {
    let u = Ot(i, n);
    return u
      ? f(i.p1.x + u * (i.p2.x - i.p1.x), i.p1.y + u * (i.p2.y - i.p1.y))
      : null;
  }
  a(ae, "testLineLine");
  function ct(i, n) {
    return re(i, n.p1) || re(i, n.p2)
      ? !0
      : !!ae(n, new ue(i.p1, f(i.p2.x, i.p1.y))) ||
          !!ae(n, new ue(f(i.p2.x, i.p1.y), i.p2)) ||
          !!ae(n, new ue(i.p2, f(i.p1.x, i.p2.y))) ||
          !!ae(n, new ue(f(i.p1.x, i.p2.y), i.p1));
  }
  a(ct, "testRectLine");
  function re(i, n) {
    return n.x > i.p1.x && n.x < i.p2.x && n.y > i.p1.y && n.y < i.p2.y;
  }
  a(re, "testRectPoint");
  function zn(i, n) {
    let u = Math.max(i.p1.x, Math.min(n.center.x, i.p2.x)),
      c = Math.max(i.p1.y, Math.min(n.center.y, i.p2.y));
    return f(u, c).dist(n.center) <= n.radius;
  }
  a(zn, "testRectCircle");
  function Qn(i, n) {
    return nr(n, [i.p1, f(i.p2.x, i.p1.y), i.p2, f(i.p1.x, i.p2.y)]);
  }
  a(Qn, "testRectPolygon");
  function Jn(i, n) {
    return !1;
  }
  a(Jn, "testLinePoint");
  function Zn(i, n) {
    return !1;
  }
  a(Zn, "testLineCircle");
  function It(i, n) {
    if (ot(n, i.p1) || ot(n, i.p2)) return !0;
    for (let u = 0; u < n.length; u++) {
      let c = n[u],
        U = n[(u + 1) % n.length];
      if (ae(i, { p1: c, p2: U })) return !0;
    }
    return !1;
  }
  a(It, "testLinePolygon");
  function er(i, n) {
    return i.center.dist(n) < i.radius;
  }
  a(er, "testCirclePoint");
  function ps(i, n) {
    return i.center.dist(n.center) < i.radius + n.radius;
  }
  a(ps, "testCircleCircle");
  function tr(i, n) {
    return !1;
  }
  a(tr, "testCirclePolygon");
  function nr(i, n) {
    for (let u = 0; u < i.length; u++) {
      let c = { p1: i[u], p2: i[(u + 1) % i.length] };
      if (It(c, n)) return !0;
    }
    return !1;
  }
  a(nr, "testPolygonPolygon");
  function ot(i, n) {
    let u = !1;
    for (let c = 0, U = i.length - 1; c < i.length; U = c++)
      i[c].y > n.y != i[U].y > n.y &&
        n.x <
          ((i[U].x - i[c].x) * (n.y - i[c].y)) / (i[U].y - i[c].y) + i[c].x &&
        (u = !u);
    return u;
  }
  a(ot, "testPolygonPoint");
  function gs(i, n) {
    return i.eq(n);
  }
  a(gs, "testPointPoint");
  function Bt(i, n) {
    switch (i.shape) {
      case "rect":
        return Ft(n, i);
      case "line":
        return ct(n, i);
      case "circle":
        return zn(n, i);
      case "polygon":
        return Qn(n, i.pts);
      case "point":
        return re(n, i.pt);
    }
    throw new Error(`Unknown area shape: ${i.shape}`);
  }
  a(Bt, "testAreaRect");
  function ws(i, n) {
    switch (i.shape) {
      case "rect":
        return ct(i, n);
      case "line":
        return Boolean(ae(i, n));
      case "circle":
        return Zn(n, i);
      case "polygon":
        return It(n, i.pts);
      case "point":
        return Jn(n, i.pt);
    }
    throw new Error(`Unknown area shape: ${i.shape}`);
  }
  a(ws, "testAreaLine");
  function Us(i, n) {
    switch (i.shape) {
      case "rect":
        return zn(i, n);
      case "line":
        return Zn(i, n);
      case "circle":
        return ps(i, n);
      case "polygon":
        return tr(n, i.pts);
      case "point":
        return er(n, i.pt);
    }
    throw new Error(`Unknown area shape: ${i.shape}`);
  }
  a(Us, "testAreaCircle");
  function bs(i, n) {
    switch (i.shape) {
      case "rect":
        return Qn(i, n);
      case "line":
        return It(i, n);
      case "circle":
        return tr(i, n);
      case "polygon":
        return nr(n, i.pts);
      case "point":
        return ot(n, i.pt);
    }
    throw new Error(`Unknown area shape: ${i.shape}`);
  }
  a(bs, "testAreaPolygon");
  function Vt(i, n) {
    switch (i.shape) {
      case "rect":
        return re(i, n);
      case "line":
        return Jn(i, n);
      case "circle":
        return er(i, n);
      case "polygon":
        return ot(i.pts, n);
      case "point":
        return gs(i.pt, n);
    }
    throw new Error(`Unknown area shape: ${i.shape}`);
  }
  a(Vt, "testAreaPoint");
  function rr(i, n) {
    switch (n.shape) {
      case "rect":
        return Bt(i, n);
      case "line":
        return ws(i, n);
      case "circle":
        return Us(i, n);
      case "polygon":
        return bs(i, n.pts);
      case "point":
        return Vt(i, n.pt);
    }
    throw new Error(`Unknown area shape: ${n.shape}`);
  }
  a(rr, "testAreaArea");
  function lt(i, n) {
    return {
      p1: f(i.p1.x - n.p2.x, i.p1.y - n.p2.y),
      p2: f(i.p2.x - n.p1.x, i.p2.y - n.p1.y),
    };
  }
  a(lt, "minkDiff");
  var ue = class {
    p1;
    p2;
    constructor(n, u) {
      (this.p1 = n), (this.p2 = u);
    }
  };
  a(ue, "Line");
  var Ge = class {
    p1;
    p2;
    constructor(n, u) {
      (this.p1 = n), (this.p2 = u);
    }
  };
  a(Ge, "Rect");
  var at = class {
    center;
    radius;
    constructor(n, u) {
      (this.center = n), (this.radius = u);
    }
  };
  a(at, "Circle");
  var de = class extends Map {
    lastID;
    constructor(...n) {
      super(...n);
      this.lastID = 0;
    }
    push(n) {
      let u = this.lastID;
      return this.set(u, n), this.lastID++, u;
    }
    pushd(n) {
      let u = this.push(n);
      return () => this.delete(u);
    }
  };
  a(de, "IDList");
  var Z = class {
    handlers = new de();
    add(n) {
      return this.handlers.pushd(n);
    }
    addOnce(n) {
      let u = this.add((...c) => {
        n(...c), u();
      });
      return u;
    }
    trigger(...n) {
      this.handlers.forEach((u) => u(...n));
    }
    numListeners() {
      return this.handlers.size;
    }
  };
  a(Z, "Event");
  var he = class {
    handlers = new Map();
    on(n, u) {
      return (
        this.handlers.get(n) || this.handlers.set(n, new Z()),
        this.handlers.get(n).add(u)
      );
    }
    onOnce(n, u) {
      let c = this.on(n, (...U) => {
        u(...U), c();
      });
      return c;
    }
    trigger(n, ...u) {
      this.handlers.get(n) && this.handlers.get(n).trigger(...u);
    }
    remove(n) {
      this.handlers.delete(n);
    }
    clear() {
      this.handlers = new Map();
    }
    numListeners(n) {
      return this.handlers.get(n)?.numListeners() ?? 0;
    }
  };
  a(he, "EventHandler");
  function _t(i, n) {
    let u = typeof i,
      c = typeof n;
    if (u !== c) return !1;
    if (u === "object" && c === "object") {
      let U = Object.keys(i),
        p = Object.keys(n);
      if (U.length !== p.length) return !1;
      for (let S of U) {
        let D = i[S],
          R = n[S];
        if (!(typeof D == "function" && typeof R == "function") && !_t(D, R))
          return !1;
      }
      return !0;
    }
    return i === n;
  }
  a(_t, "deepEq");
  function ys(i) {
    let n = window.atob(i),
      u = n.length,
      c = new Uint8Array(u);
    for (let U = 0; U < u; U++) c[U] = n.charCodeAt(U);
    return c.buffer;
  }
  a(ys, "base64ToArrayBuffer");
  function ir(i) {
    return ys(i.split(",")[1]);
  }
  a(ir, "dataURLToArrayBuffer");
  function Xe(i, n) {
    let u = document.createElement("a");
    (u.href = n), (u.download = i), u.click();
  }
  a(Xe, "download");
  function Nt(i, n) {
    Xe(i, "data:text/plain;charset=utf-8," + n);
  }
  a(Nt, "downloadText");
  function sr(i, n) {
    Nt(i, JSON.stringify(n));
  }
  a(sr, "downloadJSON");
  function kt(i, n) {
    let u = URL.createObjectURL(n);
    Xe(i, u), URL.revokeObjectURL(u);
  }
  a(kt, "downloadBlob");
  function Gt(i) {
    return i.match(/^data:\w+\/\w+;base64,.+/);
  }
  a(Gt, "isDataURL");
  var or = (() => {
    let i = 0;
    return () => i++;
  })();
  var $e = class {
    dts = [];
    timer = 0;
    fps = 0;
    tick(n) {
      this.dts.push(n),
        (this.timer += n),
        this.timer >= 1 &&
          ((this.timer = 0),
          (this.fps = Math.round(
            1 / (this.dts.reduce((u, c) => u + c) / this.dts.length)
          )),
          (this.dts = []));
    }
  };
  a($e, "FPSCounter");
  var fe = class {
    time;
    action;
    finished = !1;
    paused = !1;
    constructor(n, u) {
      (this.time = n), (this.action = u);
    }
    tick(n) {
      return this.finished || this.paused
        ? !1
        : ((this.time -= n),
          this.time <= 0
            ? (this.action(), (this.finished = !0), (this.time = 0), !0)
            : !1);
    }
    reset(n) {
      (this.time = n), (this.finished = !1);
    }
  };
  a(fe, "Timer");
  var ar =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA1cAAAFyCAMAAAAu4tBuAAAAAXNSR0IArs4c6QAAAE5QTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////kJcbLQAAABl0Uk5TABAgLzBAUF9gb3B/gI+Qn6CvsL/Az9Df77brr10AAEaZSURBVHja7V3ZgqQosxaO2JRJuSS/Dbz/i54LN9QICEytrJwmrma6LAshvtiIpSgyZcqUKVOmTJkyZcqUKVOmTJkyZcqUKYE4y3uQKdPFqDLOfedtyJTpUtLOOSffvgyhlOTv341SiETtXRJWXWaL4J8j45xz7dth5ZxzJsZ+rJJyx/fXcqx2zpkkeD+cFbFnvhPf+W/ZSzzj6mZcuTJ8Ato555xruW/EmvLCM3apyvvhnNOEb8vAgunLOtfzfxpXZbV8PxfsFlyJ2BGMZKv53zrnnGXvw9XDOedM5CHpMrBCW+OafxlXD+dsufwngU0eZlgf+jKaxXHFYyw80wSsKoZGJptW61ZV/BZc0diitCQj9591QiLcx8s095SxT8IVc4vFw0ky5ts59/RBUb+Eq8qHlbN8XTuuLoRef0PL63HFrXPO/SXCr88wgjcmIBhZrUeh1ArqO7+se5AspGYw1hrdVOyduOIrriTlN7jP8tw551RIpH8755xTdYXJJuOcc1bxUtoF1jIIA/a9gSJFxSbiSlMNvMa5mGD5h9VVQDCa9fiIXtgj7qcXRVFI7832m/8KXCnKb3TOOTf4cqkOCCWf/4dWIvpsZGFunXM2qq74X7cjW16LKxn3CTcItNkSBNWVJJn+zv657EyYTha5P4CrhvIbg/MiZUPoYyuzB4Az1f4h5R2AmkTSuIeYGjzAarEeL8IVM3Sfe7QY2wwlSF0xEqxICn88kxiuuEkXuT+Aq47wG8z36Mf/YSRrbfpOBqk/7ukuMR8LD8pC51opFn2or8TVI0XS1XTd9s/Q5DJjnPR1ZAtBOpPoc2dE7i/BlfAFjMDtNfbXgcTjuJLBU5lEkhEbnciuw9UoGmXSNusMpr1xjApGPl2r2EZKNT1qSOcXw9UDYjj9Gbiq/Xte5fzYILS3E6lWDzBaas/k+x5fHVRXfGc4T6dUXYcrSbm62gua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";
  var ur =
    "data:image/png;base64,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";
  var cr =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAACAAQMAAADOEv75AAAAAXNSR0IArs4c6QAAAAZQTFRFAAAA////pdmf3QAAAAF0Uk5TAEDm2GYAAASQSURBVDjLVZVNTBtHFMffrk0YHLc21JVQuwrrdQOOFdVwa0NktlYl3FRVCRLnUvWSICJhuKStIoa1CYs5uAdOyELWlqTWumoFB4RItXJIJCMqxe2x4mIKjRGH2imHGkzsvlljKHPY3Z//M+9rnp7hBBrrKYXXWZd7w4THBlR1I5y1dzuM0iMKtaJx/PNiaFNTH6Jy3agUEfTfo6iMJMYUezfR0tMGGiDuLIDD2H6Dwrlpu/n8urDIXg4VaAd90XtPpCbk7y+ubt8bU0g4l4Cj1yurN3fKkfZYlwC145WH2w88RSP2gwBHZWO19yv3M1QCkJ/8pVariXhmIwDU2TDNBwCi82KnvSeGtnkG33xilfsJgBXBSIaI/LlqAnWNRUHuD1jyKNLANRuVb6HiRCuuVy0gy6SbAXVJnbSHgpMXz7IB9hmeCVwuBMIZIFYBVFVpI1JMxG0SqDTqyfExiXh2eEhN2UPe6LgIMkRBVXjVG53Ng8gRUKPSsVdVpfa3/gSYKCZasiScIcRKztywWGAsLhwWE3O7muJNwGxIixFJpVpkVIN1bzJGRJUuKT8i+MW53Ptluqb4NIjsJ9k2dUm5poHiNc+oGoNxv3C4L8wV0HUCLqxXOeHYq8f8axEFIObVJAQxKU8zSCIMukVZpfCPX5Cu+txBkV2e4lUQBqKik0FIkySfqpowlUq4N1xqfO0yDVz0002AWCilyTwrJIIVKIisoq2/CndzC8uRx55PBYDr2sJ7nZt0TcLkuP3k3B6mvSSlNOBHtQXrFawBAy4t3H3Oz+1r7zTyEaD5gj/BQ93sLZsVFadbYTl9xcz0OzHWBlujyaCZHMg2zFQIXvVJklOkdti6wyPc3kNwwXLq5oeYjz/hoW1AzVbgMvhwQ8vQCDYa+4WWAGz6pTpMlSH4aKSlDpETpjiVvnzVEvm3imdkMUhExSrPVFGhsoRAxHgNz8i0rQGoAN8ADnwAJjhqwCv6JThTmnwOMK3VlY547qRqoWh6qMnXlzH7qbkKuqJP5k3AcFCplUzgyqDTBmAKb3+ROS+eLfm/Sp4qjsy5YqllefxwOQ46cBDUMiIMAwFfB+0zoWQq8dopMKUO6HRoADqmSrsYHosgaUKWsAhOlU2Vy5QaSk7dzQ+DfHsA3uze3aKWYYCkmGKwSVkEp0qOsls5VTLAyXUFr4MNB8lUcNA5jMoBZcq7EbqT02JdhCmpj+lhwTXom2cR/Kaplb+EiQJhEXyJHb+vl3GmoLLiveHMGWVFYgrrt8ZKEb5eE7w5bsBmAci4BvHejiAV7BK4lzd0hLGpAbnLsBTXY0zZ4nFUnkJlrwniRmsuwc5UDninEvhghkgI4edNTl64r2CfcWcTSOAdT9FZO5fxi83COPkIRl78NJGH8gxh8OT7dj3Zi9NRR6i8tFd2YKyujOSMcL//j1vzEgK6h0tUbZIGGTQL4HgCTTDITGPBzDtmTnsiQrogcM/sDL7NGse6PrG3GGQpFH1p/GtITa4jlP8OhD/T0vsPWKaVoqHatKPQJNsWzvrQ+mxo8jyF7TuTWKr/ABVF/mebwsnnAAAAAElFTkSuQmCC";
  var lr =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAA8AgMAAADTWFpWAAAAAXNSR0IArs4c6QAAAAlQTFRFAAAAAAAA////g93P0gAAAAF0Uk5TAEDm2GYAAANeSURBVDjLjVVLruQoEMQLfAMsuU7DEVgklux1YulxGi84AgftiAS/eeqZUTcl47IJ8hMZpJ1zPgYJyUcnIfrkU4hZ3Dv4b4277s8mWa+0PtvzSbcCbmPRCTjb1Usrj3/2FJ6rrS+gTUDtt+SnpDXtbnlqP2CajvxjgCCw0LZ0io8EXK1253htyQB8OHSPNzwScOshPtHCTlcM6Gy1nVLgkTFkWeP6cOV008L+HKnoBQvMgkv0vsbipgXyIBIYFniwbQb7h5B/jZcJ7A0xMCDJwjue08thwKq72icyrQVcXGDgQsIvhztWXNEtFs3qW5GCQPlDiNG3LBueneoaubxJRaoZy3yzxi3VDtAA+La2U7m4wMGwsKOmCzYaYEtcFOz1D9joEADfCTYmxHAIOESI9L7Ca8CWD6zWvlElzICxQw2NZUZWzcctLpplRyyOuTN7ZwzAuPGAIhkP33T9PsKPv9iVsStPS4LZC4bjZEwiY3ivMxZFuGtHQo5BG5NnG/yBSSFNEAvpcl/9C3d3W3okAUQnQhC5loYV/aIhAmojo/Wpzw03axStiS5u8ySk6NsCyYpqFjB3AmYFGQN3MYb5BABiuB4Yn1ngybIYs44sLPPJg4ynycbk4Y9j7GZFON45Q885WiWGf9YU8Vli9F9xImq0g/fmcMgAMA/IB2fqiGczgFpSlj0AJN6DBWqhqLkYaRJwtltxxlE+xbkGozxYg6hs/O0PLQASFZ1hNhGw19QIxglJ9/gnJS7tiNZEwB6iGGpcERZVzixw0qxvQHrBGKMaeQm6DHlwvFyWPzPp02iGnLzwxo5JHieArUZHtG7rvFFR6uo3AHUouIIGdLmAE45+C3Ue0DprhHw/7QZRl7Iel97oF2svEN6XvXcL9lK9VA/OKJS8Ra8V1N/2Hk4u0ySP7+6GJqlqAlgnkt2nBdkBpiaFMLmtjLSgM4Znd8HUwJ3eZutXwTTJb0Zwn0Y9XZiX/9bkePEXUrUzH/+vI2B8oIYazRL8Mwb0qZ+q3qEnaJKfE2TALPqr6mJ5nKjImm5aAAfkARZe0ULVrdgHwaIYB/Vqu3tFS+kNCxYOLajLuoPsIdqrnzMGAzAGVL9t3T5rjY209pGFAVB/hX6Sl1eTn5blBw8yFfc7m+/4BR+d4KDrSif0AAAAAElFTkSuQmCC";
  var dr =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA2CAMAAABAzG8wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEyUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcPCw4ICA4dFw4eFg4eFxAQEBUsIhUtIhwPDxwQEBw8LR07LR08LSAgICNKOCNLOCRKOCRLOCoXFypZQypaQytZQytaQzAwMDFoTjFoTzFpTzgfHzh3WTh3Wjh4Wjl3WTl3Wjl4Wj+GZUBAQECGZECGZUCHZUYnJ0aVcEeVcE2ke06ke06kfFBQUFQuLlSzhlUuLlWzhlvCkVzCkVzCkmBgYGM2NmPRnWrgqHA+PnBwcHHvs35FRYCAgIxNTY1NTZCQkJtUVJtVVZ+fn6CgoKlcXKldXbdkZL+/v8Vra8VsbNDQ0NNzc9/f3+F7e////ysmAfQAAAAVdFJOUwAQIDBAUGBvcH+AkJ+gr7C/z9Df74JQjt0AAAO5SURBVEjHnVfrQtowFKaADC1qu9I6YSBecIKoOHAD2bhssMpc6zqn010c0/H+r7CcJG2TFAru/LCYnu/kO9ekkUiIxBJyStXSOhJNVeRkPPIIiS8qGMlJWklE50PLQbArKzN5SIuaHiraQjjc3/zZ7lHHtGwHiTXs1XYz7ovUdEc8uLHfsRxRhq1MOIn4U4reMZ0pYpaIyuIk/BMKP7GdELEyUyxIK/PAQU4mWogS+ocz4RALTCLJ749zZ5ghMLteMHQ9VzapG2kuF5h/Dgfe7lbQe6NQ5dJgFbz0rlvOEJnSFTZ9GI/p1w1Ps+ybeGOwtVR3Tnknoh5+mNF5TSJVoRrLzgtwQnINaIQY2kisW2KhzKwcUHIGQyEBSx2k+JpVbNK96P7ZLFk/v9uGh/mKiQIQKAl4/WB8SzTJ8vYDNZAdP8DjnQ1/o34EkQNd/P7WtTAe32EDFsGPvfVror/l+QAEXiICEL/sH19xfA6hcdrwT/Nh7DLAVBBh8CHlRgAiiHfSL8dN14VLEhobZ3D7+j1Zb4JjBiWssgQwJ6RJwqx//4yLxm8fVk4dsqGG8As0AkgOWR0cQQO/sLYEPN7PgV/IwDJNAUhH2MvoTXxB8NSARFLlVnyJVVwf+q1QMgJWiYEEdTSoKUwGu7P7HOZky12lMVhFjyO+b3tHm5ub+61Zk8EkpZhmPXiUtHAdxIDrf+GdIoImcAh2/guPeyEWkdHfWrimdWa2G7VKpVDkRlSbxFCBxgpiLLPdrlUrhVyGnUQ5VgeKS45EVPT46K8OKkUew9eVkAPoZkiCny8r/FgtCQRWUSHDOu9XQDY2jvv9Pb9jfM14wECXxVx8ufr26/f9X5BRnieAGxQPA94AdoFiOPngTl0qZW+eaTwziN+PIP7KnQFU8JRcwuNM5dMIzdgP4EdrfMcNdDpL6DRoCMkZifi8N1qIowZzMibR7wKTHQjOMY+/3+MdIBNugT3UmMbt6aITBH/on+2GHwAQqOWqUCD62xHPnylicvj5eHKsDZkmwwTzX+n2F2v+uQ1vqyKeHqx24A6U79/8vPm0pnP4YS6Ij8Q5lUnHQMl2ryjkwpsQbkeyLpQZvUW5LXjK3zG0WOB6pmK9BjeaM8Jotut0RZYmXG9Vcgq0bWE0o6suWRpU6YzQJl+1JZluV+4GZ7k9qLp00kvStDtywruh54q1rnvDPus2Kjn/a2E6HCpyOXwYzYBjE0vTvxPSSnzOLxV10geGHJfm/1aS4klZUQgXTVtJJWeA/wFPmR833RRQSAAAAABJRU5ErkJggg==";
  var hr = Nn(
    "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L5QNSqT5iiySS9Ja2SV//5ME0ak//+4KgAAABgQBAADAMDgYCAEgCteQ0fZH6+ICXA357+MPfhR/+ywRf/U///LVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5JknQAFoWhGLm5gBClBmT3GiAAAAAGkHAAAIAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
  );
  var fr =
    "data:image/png;base64,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";
  var mr =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAABtCAMAAACiL7JvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACNUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHByAODjAVFUAcHFAjI18qKmAqKm8xMXAxMX84OIA4OI8/P5A/P59GRqBGRq9NTbBNTb9UVM9bW9BbW99iYu9paf9wcHVJCesAAAAXdFJOUwAQIDBAUF9gb3B/gI+Qn6CvsL/P0N/vIiFUiwAABV9JREFUaN7Nm+l2ozgQhQ3GQxzaS3DM6qFtxsvgBt7/8RpJLMJoKYyluH4k58Tk8OVSdSWqlNkMFB/73Xz2DmH6vu++BcmmIvGtN5FEJorl6Hh8W0wiFOWz+lw9yoKAiERBIL6tnGRf3SUQivLhayGx0V3yuPqy5lzxj6+HBEmSlBm6lyECUU6Clc/LEonisC6Ye3pITCJJWV6q757BAwnVk/xCt6kkKcuAKYqJQU6JchJsaicEUqYsUbBk1QXqSZDPhxikLBiiNCDqSbAkV0JCRGGDqCfZdpLUothMkJeQfGxXS2su8PlGEiKK+wjyu3wRiV2bwW67si2DYWpxC1LmPcs3MMi/5atIHJ8Oz906i7nR8/mOBN+vEcX4pkBeQWL6jNi7+Ik1ptZG1olCQKISSmJYa3cBECXweUFLQiyfiLLGIAWMxLBdj79utVeha5Iiu6WHeAjUk4QS5QFERGIs3WZlkmxAl+iarC7U7HyMow4k7EtCRFmTNaD3IY+kwqCyUJYqbr9CqrgjoKD1+UdRjM8BJZPE/HR7An/JSKy+a7RRZPnwh0iw76FcQxKLxghPaLFeziCihEUJigv7uT2QWJ/7DiM+5WQll2+58cqewkjKgJlANIm18iiMc9481T3Q3oIcRpL6rItbkgeMgvqtLwAJqWQYCVoHgz8li6Ryrw4j6DDqmrPBq08GQ7lF0QAEk+xojEsv7wr0QxNk+sNKHhcJVaxBkhWM4t/Dlh9eJY8mCY4ZowqPgrcl1p4oKJ4mOTYY7I+RCy2ga/KYSh5GHlbuxU20EWkyspKZLILP/kf5DN6o4C3YoVQSKItWI/eRmRKScGRLamol8x+cfJfEqOSzApLL6IbhZlolc+OAt8budr1yHNu2LMs01VayME0G4e13FJz54koWbiTEsWBU8uuT9hLKSb5Yr58KKrnI71l2u5zTNEniOA6HaGttlcyFO2CQb1NbJfPiD04i19BXyZy4YkU23I1kqgvkjEEcwXtyrgckFYGoqmT+9mopHhhkGkDwjtOzJWtypL6KcSPAm//ImtzbKWCQvWQpXKFKVgwSQkDodrAqPwvZxspqvf2nEiTjGms/dqolERjrcGd9/TE/G8y43gDkU7HbH6HzMdNTKwkx1gVwfx/mah+NB5lxm4rT9QDxszZdVVbwGfqGjCv4ppAE2jUwVFcw7qR4s5+v4Pp9cA5L15PaRfgA6porruA2ZdegrsVVLQjuh+5+uoK75p8BqOC78v2rvNNlKq/gbuFZSg9V6HjjkqasjgqGtfA3OtIVkrI4XcO4iyikI0q1pexO1n3KdKWsJyOJdKXsUtqSE7yeXhKeM+dxlDyqeZekrGn1wuyFuNGU8jljMgO7FSNdVjyxTEVbUzZn1k1Jr51VRVOOuDp8UcjrC5vzQD/eenIMcdmnxrhpM//LOTMMl5qmR3g6dwbOjuUHMoYtO86Qqj7CY60omDDJ7vBBKc9wYs67ts0eUuXdy96cPvwRTEnZehuVsUE4re2k97ebtiuYGIwJRvetBSGcN64k7SGhTeugy9k0Uc5sEObBkYSZDtaGJM3qeZJBH50GIZuKVCxJC1Nl8N6cQPJgb9d+92HgOImoQozZpOjd7AGEcB4hkrwg6JtdB/2Yh35/Os00IPZ2Z4M8HJLMFR9nbuztxmqV9RznAu6TTLI3MqdyRJO7ENbUm2ZvMQeEfptVLUl9s4DXxdy09haOOIMzwd647dR2Bn8ZdfLlyeO0nmxyhxxHgyS1bThix9EhCWnFORLH0SJJ9XwWlqQHE2iRBFRceiSBOM47SNKI8gaSvNH/DuJKfo//p5wt3O0zWfIXmcC88FUsLZkAAAAASUVORK5CYII=";
  var pr = {
      ArrowLeft: "left",
      ArrowRight: "right",
      ArrowUp: "up",
      ArrowDown: "down",
      " ": "space",
    },
    gr = ["left", "middle", "right", "back", "forward"],
    Cs = [
      "space",
      "left",
      "right",
      "up",
      "down",
      "tab",
      "f1",
      "f2",
      "f3",
      "f4",
      "f5",
      "f6",
      "f7",
      "f8",
      "f9",
      "f10",
      "f11",
      "s",
    ],
    wr =
      " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~",
    Ls =
      " \u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xB6\xA7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5\u20A7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\u2310\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xDF\u0393\u03C0\u03A3\u03C3\xB5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xB1\u2265\u2264\u2320\u2321\xF7\u2248\xB0\u2219\xB7\u221A\u207F\xB2\u25A0",
    Ur = 0,
    br = 3,
    Ms = 0,
    Ws = 3,
    qs = -1200,
    Ps = 1200,
    dt = "topleft",
    yr = 1600,
    xr = 64,
    Fs = "apl386o",
    ht = "sink",
    vr = 64,
    ft = 1024,
    mt = 0.05,
    Os = 1,
    Ar = [
      { name: "a_pos", size: 3 },
      { name: "a_uv", size: 2 },
      { name: "a_color", size: 4 },
    ],
    pt = Ar.reduce((i, n) => i + n.size, 0),
    Rr = 2048,
    Er = Rr * 4 * pt,
    Tr = Rr * 6,
    Is = `
attribute vec3 a_pos;
attribute vec2 a_uv;
attribute vec4 a_color;

varying vec3 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

vec4 def_vert() {
	return vec4(a_pos, 1.0);
}

{{user}}

void main() {
	vec4 pos = vert(a_pos, a_uv, a_color);
	v_pos = a_pos;
	v_uv = a_uv;
	v_color = a_color;
	gl_Position = pos;
}
`,
    Bs = `
precision mediump float;

varying vec3 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

uniform sampler2D u_tex;

vec4 def_frag() {
	return v_color * texture2D(u_tex, v_uv);
}

{{user}}

void main() {
	gl_FragColor = frag(v_pos, v_uv, v_color, u_tex);
	if (gl_FragColor.a == 0.0) {
		discard;
	}
}
`,
    jt = `
vec4 vert(vec3 pos, vec2 uv, vec4 color) {
	return def_vert();
}
`,
    Xt = `
vec4 frag(vec3 pos, vec2 uv, vec4 color, sampler2D tex) {
	return def_frag();
}
`,
    Vs = new Set(["id", "require"]),
    _s = new Set(["add", "load", "update", "draw", "destroy", "inspect"]);
  function Sr(i) {
    return i === "pressed" || i === "rpressed"
      ? "down"
      : i === "released"
      ? "up"
      : i;
  }
  a(Sr, "processButtonState");
  function Ns(i) {
    i.requestFullscreen
      ? i.requestFullscreen()
      : i.webkitRequestFullscreen && i.webkitRequestFullscreen();
  }
  a(Ns, "enterFullscreen");
  function ks() {
    document.exitFullscreen
      ? document.exitFullscreen()
      : document.webkitExitFullScreen && document.webkitExitFullScreen();
  }
  a(ks, "exitFullscreen");
  function Gs() {
    return document.fullscreenElement || document.webkitFullscreenElement;
  }
  a(Gs, "getFullscreenElement");
  function Ye(i) {
    switch (i) {
      case "topleft":
        return f(-1, -1);
      case "top":
        return f(0, -1);
      case "topright":
        return f(1, -1);
      case "left":
        return f(-1, 0);
      case "center":
        return f(0, 0);
      case "right":
        return f(1, 0);
      case "botleft":
        return f(-1, 1);
      case "bot":
        return f(0, 1);
      case "botright":
        return f(1, 1);
      default:
        return i;
    }
  }
  a(Ye, "originPt");
  function js(i) {
    switch (i) {
      case "left":
        return 0;
      case "center":
        return 0.5;
      case "right":
        return 1;
      default:
        return 0;
    }
  }
  a(js, "alignPt");
  function $t() {
    return new AudioBuffer({
      length: 1,
      numberOfChannels: 1,
      sampleRate: 44100,
    });
  }
  a($t, "createEmptyAudioBuffer");
  var Xs = a((i = {}) => {
    let n = [],
      u = (() => {
        let e = i.root ?? document.body;
        e === document.body &&
          ((document.body.style.width = "100%"),
          (document.body.style.height = "100%"),
          (document.body.style.margin = "0px"),
          (document.documentElement.style.width = "100%"),
          (document.documentElement.style.height = "100%"));
        let t =
            i.canvas ??
            (() => {
              let h = document.createElement("canvas");
              return e.appendChild(h), h;
            })(),
          r = i.scale ?? 1;
        i.width && i.height && !i.stretch && !i.letterbox
          ? ((t.width = i.width * r), (t.height = i.height * r))
          : ((t.width = t.parentElement.offsetWidth),
            (t.height = t.parentElement.offsetHeight));
        let o = t.width,
          d = t.height,
          s = i.pixelDensity || window.devicePixelRatio;
        (t.width *= s), (t.height *= s);
        let l = [
          `width: ${o}px`,
          `height: ${d}px`,
          "outline: none",
          "cursor: default",
        ];
        return (
          i.crisp &&
            (l.push("image-rendering: pixelated"),
            l.push("image-rendering: crisp-edges")),
          (t.style = l.join(";")),
          t.setAttribute("tabindex", "0"),
          {
            canvas: t,
            canvas2: t.cloneNode(),
            scale: r,
            pixelDensity: s,
            keyStates: {},
            mouseStates: {},
            charInputted: [],
            numKeyDown: 0,
            isMouseMoved: !1,
            isKeyPressed: !1,
            isKeyPressedRepeat: !1,
            isKeyReleased: !1,
            mouseStarted: !1,
            mousePos: f(0, 0),
            mouseDeltaPos: f(0, 0),
            time: 0,
            realTime: 0,
            skipTime: !1,
            dt: 0,
            numFrames: 0,
            isTouch: "ontouchstart" in window || navigator.maxTouchPoints > 0,
            loopID: null,
            stopped: !1,
            paused: !1,
            fpsCounter: new $e(),
          }
        );
      })(),
      c = u.canvas.getContext("webgl", {
        antialias: !0,
        depth: !0,
        stencil: !0,
        alpha: !0,
        preserveDrawingBuffer: !0,
      });
    class U {
      glTex;
      width;
      height;
      constructor(t, r, o = {}) {
        (this.glTex = c.createTexture()),
          n.push(() => this.free()),
          this.bind(),
          t &&
            r &&
            c.texImage2D(
              c.TEXTURE_2D,
              0,
              c.RGBA,
              t,
              r,
              0,
              c.RGBA,
              c.UNSIGNED_BYTE,
              null
            ),
          (this.width = t),
          (this.height = r);
        let d = (() => {
            switch (o.filter ?? i.texFilter) {
              case "linear":
                return c.LINEAR;
              case "nearest":
                return c.NEAREST;
              default:
                return c.NEAREST;
            }
          })(),
          s = (() => {
            switch (o.wrap) {
              case "repeat":
                return c.REPEAT;
              case "clampToEdge":
                return c.CLAMP_TO_EDGE;
              default:
                return c.CLAMP_TO_EDGE;
            }
          })();
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, d),
          c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, d),
          c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, s),
          c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, s),
          this.unbind();
      }
      static fromImage(t, r = {}) {
        let o = new U(0, 0, r);
        return (
          o.bind(),
          c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, c.RGBA, c.UNSIGNED_BYTE, t),
          (o.width = t.width),
          (o.height = t.height),
          o.unbind(),
          o
        );
      }
      update(t, r, o) {
        this.bind(),
          c.texSubImage2D(c.TEXTURE_2D, 0, t, r, c.RGBA, c.UNSIGNED_BYTE, o),
          this.unbind();
      }
      bind() {
        c.bindTexture(c.TEXTURE_2D, this.glTex);
      }
      unbind() {
        c.bindTexture(c.TEXTURE_2D, null);
      }
      free() {
        c.deleteTexture(this.glTex);
      }
    }
    a(U, "Texture");
    let p = (() => {
      let e = wt(jt, Xt),
        t = U.fromImage(
          new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1)
        );
      if (i.background) {
        let s = v.fromArray(i.background);
        c.clearColor(s.r / 255, s.g / 255, s.b / 255, 1);
      }
      c.enable(c.BLEND),
        c.enable(c.SCISSOR_TEST),
        c.blendFuncSeparate(
          c.SRC_ALPHA,
          c.ONE_MINUS_SRC_ALPHA,
          c.ONE,
          c.ONE_MINUS_SRC_ALPHA
        );
      let r = c.createBuffer();
      c.bindBuffer(c.ARRAY_BUFFER, r),
        c.bufferData(c.ARRAY_BUFFER, Er * 4, c.DYNAMIC_DRAW),
        Ar.reduce(
          (s, l, h) => (
            c.vertexAttribPointer(h, l.size, c.FLOAT, !1, pt * 4, s),
            c.enableVertexAttribArray(h),
            s + l.size * 4
          ),
          0
        ),
        c.bindBuffer(c.ARRAY_BUFFER, null);
      let o = c.createBuffer();
      c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, o),
        c.bufferData(c.ELEMENT_ARRAY_BUFFER, Tr * 4, c.DYNAMIC_DRAW),
        c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, null);
      let d = U.fromImage(
        new ImageData(
          new Uint8ClampedArray([
            128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128,
            128, 128, 255,
          ]),
          2,
          2
        ),
        { wrap: "repeat", filter: "nearest" }
      );
      return {
        drawCalls: 0,
        lastDrawCalls: 0,
        defShader: e,
        curShader: e,
        defTex: t,
        curTex: t,
        curUniform: {},
        vbuf: r,
        ibuf: o,
        vqueue: [],
        iqueue: [],
        transform: new M(),
        transformStack: [],
        bgTex: d,
        width: i.width,
        height: i.height,
        viewport: {
          x: 0,
          y: 0,
          width: c.drawingBufferWidth,
          height: c.drawingBufferHeight,
        },
      };
    })();
    ln();
    class S {
      tex;
      frames = [new I(0, 0, 1, 1)];
      anims = {};
      constructor(t, r, o = {}) {
        (this.tex = t), r && (this.frames = r), (this.anims = o);
      }
      static from(t, r = {}) {
        return typeof t == "string"
          ? S.fromURL(t, r)
          : Promise.resolve(S.fromImage(t, r));
      }
      static fromImage(t, r = {}) {
        return new S(
          U.fromImage(t, r),
          xe(r.sliceX || 1, r.sliceY || 1),
          r.anims ?? {}
        );
      }
      static fromURL(t, r = {}) {
        return ye(t).then((o) => S.fromImage(o, r));
      }
    }
    a(S, "SpriteData");
    class D {
      buf;
      constructor(t) {
        this.buf = t;
      }
      static fromArrayBuffer(t) {
        return new Promise((r, o) => R.ctx.decodeAudioData(t, r, o)).then(
          (r) => new D(r)
        );
      }
      static fromURL(t) {
        return Gt(t)
          ? D.fromArrayBuffer(ir(t))
          : ze(t).then((r) => D.fromArrayBuffer(r));
      }
    }
    a(D, "SoundData");
    let R = (() => {
      let e = new (window.AudioContext || window.webkitAudioContext)(),
        t = e.createGain();
      t.connect(e.destination);
      let r = new D($t());
      return (
        e.decodeAudioData(
          hr.buffer.slice(0),
          (o) => {
            r.buf = o;
          },
          () => {
            throw new Error("Failed to load burp.");
          }
        ),
        { ctx: e, masterNode: t, burpSnd: r }
      );
    })();
    class P {
      done = !1;
      data = null;
      error = null;
      onLoadEvents = new Z();
      onErrorEvents = new Z();
      onFinishEvents = new Z();
      constructor(t) {
        t.then((r) => {
          (this.data = r), this.onLoadEvents.trigger(r);
        })
          .catch((r) => {
            if (((this.error = r), this.onErrorEvents.numListeners() > 0))
              this.onErrorEvents.trigger(r);
            else throw r;
          })
          .finally(() => {
            this.onFinishEvents.trigger(), (this.done = !0);
          });
      }
      static loaded(t) {
        let r = new P(Promise.resolve(t));
        return (r.data = t), (r.done = !0), r;
      }
      onLoad(t) {
        return this.onLoadEvents.add(t), this;
      }
      onError(t) {
        return this.onErrorEvents.add(t), this;
      }
      onFinish(t) {
        return this.onFinishEvents.add(t), this;
      }
      then(t) {
        return this.onLoad(t);
      }
      catch(t) {
        return this.onError(t);
      }
      finally(t) {
        return this.onFinish(t);
      }
    }
    a(P, "Asset");
    class B {
      assets = new Map();
      lastUID = 0;
      add(t, r) {
        let o = t ?? this.lastUID++ + "",
          d = new P(r);
        return this.assets.set(o, d), d;
      }
      addLoaded(t, r) {
        let o = t ?? this.lastUID++ + "",
          d = P.loaded(r);
        this.assets.set(o, d);
      }
      get(t) {
        return this.assets.get(t);
      }
      progress() {
        if (this.assets.size === 0) return 1;
        let t = 0;
        return (
          this.assets.forEach((r) => {
            r.done && t++;
          }),
          t / this.assets.size
        );
      }
    }
    a(B, "AssetBucket");
    let x = {
        urlPrefix: "",
        sprites: new B(),
        fonts: new B(),
        bitmapFonts: new B(),
        sounds: new B(),
        shaders: new B(),
        custom: new B(),
        loaded: !1,
      },
      g = {
        ev: new he(),
        objEvents: new he(),
        root: At([]),
        timers: new de(),
        gravity: yr,
        scenes: {},
        logs: [],
        cam: { pos: st(), scale: f(1), angle: 0, shake: 0, transform: new M() },
      };
    function Me(e) {
      return x.custom.add(null, e);
    }
    a(Me, "load");
    function ee() {
      let e = [
        x.sprites,
        x.sounds,
        x.shaders,
        x.fonts,
        x.bitmapFonts,
        x.custom,
      ];
      return e.reduce((t, r) => t + r.progress(), 0) / e.length;
    }
    a(ee, "loadProgress");
    function Ke(e) {
      return e !== void 0 && (x.urlPrefix = e), x.urlPrefix;
    }
    a(Ke, "loadRoot");
    function Ue(e) {
      let t = x.urlPrefix + e;
      return fetch(t).then((r) => {
        if (!r.ok) throw new Error(`Failed to fetch ${t}`);
        return r;
      });
    }
    a(Ue, "fetchURL");
    function be(e) {
      return Ue(e).then((t) => t.json());
    }
    a(be, "fetchJSON");
    function He(e) {
      return Ue(e).then((t) => t.text());
    }
    a(He, "fetchText");
    function ze(e) {
      return Ue(e).then((t) => t.arrayBuffer());
    }
    a(ze, "fetchArrayBuffer");
    function ye(e) {
      let t = new Image();
      return (
        (t.src = Gt(e) ? e : x.urlPrefix + e),
        (t.crossOrigin = "anonymous"),
        new Promise((r, o) => {
          (t.onload = () => r(t)),
            (t.onerror = () =>
              o(new Error(`Failed to load image from "${e}"`)));
        })
      );
    }
    a(ye, "loadImg");
    function gt(e, t) {
      let r = new FontFace(e, typeof t == "string" ? `url(${t})` : t);
      return (
        document.fonts.add(r),
        x.fonts.add(
          e,
          r.load().catch(() => {
            throw new Error(`Failed to load font from "${t}"`);
          })
        )
      );
    }
    a(gt, "loadFont");
    function ne(e, t, r, o, d = {}) {
      return x.bitmapFonts.add(
        e,
        ye(t).then((s) => Ir(U.fromImage(s, d), r, o, d.chars ?? wr))
      );
    }
    a(ne, "loadBitmapFont");
    function xe(e = 1, t = 1, r = 0, o = 0, d = 1, s = 1) {
      let l = [],
        h = d / e,
        w = s / t;
      for (let m = 0; m < t; m++)
        for (let b = 0; b < e; b++) l.push(new I(r + b * h, o + m * w, h, w));
      return l;
    }
    a(xe, "slice");
    function Yt(e, t) {
      return Me(
        typeof t == "string"
          ? new Promise((r, o) => {
              be(t).then((d) => {
                Yt(e, d).onLoad(r).onError(o);
              });
            })
          : S.from(e).then((r) => {
              let o = {};
              for (let d in t) {
                let s = r.tex.width,
                  l = r.tex.height,
                  h = t[d],
                  w = new S(
                    r.tex,
                    xe(
                      h.sliceX,
                      h.sliceY,
                      h.x / s,
                      h.y / l,
                      h.width / s,
                      h.height / l
                    ),
                    h.anims
                  );
                x.sprites.addLoaded(d, w), (o[d] = w);
              }
              return o;
            })
      );
    }
    a(Yt, "loadSpriteAtlas");
    function ve(e, t, r = { sliceX: 1, sliceY: 1, anims: {} }) {
      return x.sprites.add(
        e,
        typeof t == "string"
          ? S.fromURL(t, r)
          : Promise.resolve(S.fromImage(t, r))
      );
    }
    a(ve, "loadSprite");
    function Dr(e, t) {
      return x.sprites.add(
        e,
        new Promise(async (r) => {
          let o = typeof t == "string" ? await be(t) : t,
            d = await Promise.all(o.frames.map(ye)),
            s = document.createElement("canvas");
          (s.width = o.width), (s.height = o.height * o.frames.length);
          let l = s.getContext("2d");
          d.forEach((w, m) => {
            l.drawImage(w, 0, m * o.height);
          });
          let h = await ve(null, s, {
            sliceY: o.frames.length,
            anims: o.anims,
          });
          r(h);
        })
      );
    }
    a(Dr, "loadPedit");
    function Cr(e, t, r) {
      return x.sprites.add(
        e,
        new Promise(async (o) => {
          let d = await ve(null, t),
            s = typeof r == "string" ? await be(r) : r,
            l = s.meta.size;
          d.frames = s.frames.map(
            (h) =>
              new I(
                h.frame.x / l.w,
                h.frame.y / l.h,
                h.frame.w / l.w,
                h.frame.h / l.h
              )
          );
          for (let h of s.meta.frameTags)
            h.from === h.to
              ? (d.anims[h.name] = h.from)
              : (d.anims[h.name] = {
                  from: h.from,
                  to: h.to,
                  speed: 10,
                  loop: !0,
                });
          o(d);
        })
      );
    }
    a(Cr, "loadAseprite");
    function Lr(e, t, r, o = !1) {
      return x.shaders.add(
        e,
        new Promise((d, s) => {
          let l = a(
            (h) => (h ? He(h) : new Promise((w) => w(null))),
            "resolveUrl"
          );
          if (o)
            Promise.all([l(t), l(r)])
              .then(([h, w]) => {
                d(wt(h, w));
              })
              .catch(s);
          else
            try {
              d(wt(t, r));
            } catch (h) {
              s(h);
            }
        })
      );
    }
    a(Lr, "loadShader");
    function Mr(e, t) {
      return x.sounds.add(
        e,
        typeof t == "string" ? D.fromURL(t) : D.fromArrayBuffer(t)
      );
    }
    a(Mr, "loadSound");
    function Wr(e = "bean") {
      return ve(e, dr);
    }
    a(Wr, "loadBean");
    function Kt(e) {
      return x.sprites.get(e);
    }
    a(Kt, "getSprite");
    function Ht(e) {
      return x.sounds.get(e);
    }
    a(Ht, "getSound");
    function qr(e) {
      return x.fonts.get(e);
    }
    a(qr, "getFont");
    function zt(e) {
      return x.bitmapFonts.get(e);
    }
    a(zt, "getBitmapFont");
    function Qt(e) {
      return x.shaders.get(e);
    }
    a(Qt, "getShader");
    function Jt(e) {
      if (typeof e == "string") {
        let t = Kt(e);
        if (t) return t;
        if (ee() < 1) return null;
        throw new Error(`Sprite not found: ${e}`);
      } else {
        if (e instanceof S) return P.loaded(e);
        if (e instanceof P) return e;
        throw new Error(`Invalid sprite: ${e}`);
      }
    }
    a(Jt, "resolveSprite");
    function Pr(e) {
      if (typeof e == "string") {
        let t = Ht(e);
        if (t) return t.data ? t.data : t;
        if (ee() < 1) return null;
        throw new Error(`Sound not found: ${e}`);
      } else {
        if (e instanceof D) return e;
        if (e instanceof P) return e.data ? e.data : e;
        throw new Error(`Invalid sound: ${e}`);
      }
    }
    a(Pr, "resolveSound");
    function Fr(e) {
      if (!e) return p.defShader;
      if (typeof e == "string") {
        let t = Qt(e);
        if (t) return t.data ? t.data : t;
        if (ee() < 1) return null;
        throw new Error(`Shader not found: ${e}`);
      } else if (e instanceof P) return e.data ? e.data : e;
      return e;
    }
    a(Fr, "resolveShader");
    function Zt(e) {
      if (!e) return Zt(i.font ?? Fs);
      if (typeof e == "string") {
        let t = zt(e);
        if (t) return t.data ? t.data : t;
        if (document.fonts.check(`${vr}px ${e}`)) return e;
        if (ee() < 1) return null;
        throw new Error(`Font not found: ${e}`);
      } else if (e instanceof P) return e.data ? e.data : e;
      return e;
    }
    a(Zt, "resolveFont");
    function Or(e) {
      return (
        e !== void 0 && (R.masterNode.gain.value = Y(e, Ur, br)),
        R.masterNode.gain.value
      );
    }
    a(Or, "volume");
    function We(e, t = { loop: !1, volume: 1, speed: 1, detune: 0, seek: 0 }) {
      let r = Pr(e);
      if (r instanceof P) {
        let y = We(new D($t())),
          C = a((W) => {
            let Q = We(W, t);
            for (let $ in Q) y[$] = Q[$];
          }, "doPlay");
        return r.onLoad(C), y;
      } else if (r === null) {
        let y = We(new D($t()));
        return it(() => {}), y;
      }
      let o = R.ctx,
        d = !1,
        s = o.createBufferSource();
      (s.buffer = r.buf), (s.loop = !!t.loop);
      let l = o.createGain();
      s.connect(l), l.connect(R.masterNode);
      let h = t.seek ?? 0;
      s.start(0, h);
      let w = o.currentTime - h,
        m = null,
        b = {
          stop() {
            d || (this.pause(), (w = o.currentTime));
          },
          play(y) {
            if (!d) return;
            let C = s;
            (s = o.createBufferSource()),
              (s.buffer = C.buffer),
              (s.loop = C.loop),
              (s.playbackRate.value = C.playbackRate.value),
              s.detune && (s.detune.value = C.detune.value),
              s.connect(l);
            let W = y ?? this.time();
            s.start(0, W), (w = o.currentTime - W), (d = !1), (m = null);
          },
          pause() {
            d || (s.stop(), (d = !0), (m = o.currentTime));
          },
          isPaused() {
            return d;
          },
          isStopped() {
            return d;
          },
          speed(y) {
            return (
              y !== void 0 && (s.playbackRate.value = Y(y, Ms, Ws)),
              s.playbackRate.value
            );
          },
          detune(y) {
            return s.detune
              ? (y !== void 0 && (s.detune.value = Y(y, qs, Ps)),
                s.detune.value)
              : 0;
          },
          volume(y) {
            return y !== void 0 && (l.gain.value = Y(y, Ur, br)), l.gain.value;
          },
          loop() {
            s.loop = !0;
          },
          unloop() {
            s.loop = !1;
          },
          duration() {
            return r.buf.duration;
          },
          time() {
            return d ? m - w : o.currentTime - w;
          },
        };
      return b.speed(t.speed), b.detune(t.detune), b.volume(t.volume), b;
    }
    a(We, "play");
    function en(e) {
      return We(R.burpSnd, e);
    }
    a(en, "burp");
    function wt(e = jt, t = Xt) {
      let r = Is.replace("{{user}}", e ?? jt),
        o = Bs.replace("{{user}}", t ?? Xt),
        d = c.createShader(c.VERTEX_SHADER),
        s = c.createShader(c.FRAGMENT_SHADER);
      c.shaderSource(d, r),
        c.shaderSource(s, o),
        c.compileShader(d),
        c.compileShader(s);
      let l = c.createProgram();
      if (
        (n.push(() => c.deleteProgram(l)),
        c.attachShader(l, d),
        c.attachShader(l, s),
        c.bindAttribLocation(l, 0, "a_pos"),
        c.bindAttribLocation(l, 1, "a_uv"),
        c.bindAttribLocation(l, 2, "a_color"),
        c.linkProgram(l),
        !c.getProgramParameter(l, c.LINK_STATUS))
      ) {
        let h = a((y) => {
            let C = /^ERROR:\s0:(?<line>\d+):\s(?<msg>.+)/,
              W = y.match(C);
            return {
              line: Number(W.groups.line),
              msg: W.groups.msg.replace(/\n\0$/, ""),
            };
          }, "formatShaderError"),
          w = c.getShaderInfoLog(d),
          m = c.getShaderInfoLog(s),
          b = "";
        if (w) {
          let y = h(w);
          b += `Vertex shader line ${y.line - 14}: ${y.msg}`;
        }
        if (m) {
          let y = h(m);
          b += `Fragment shader line ${y.line - 14}: ${y.msg}`;
        }
        throw new Error(b);
      }
      return (
        c.deleteShader(d),
        c.deleteShader(s),
        {
          bind() {
            c.useProgram(l);
          },
          unbind() {
            c.useProgram(null);
          },
          free() {
            c.deleteProgram(l);
          },
          send(h) {
            for (let w in h) {
              let m = h[w],
                b = c.getUniformLocation(l, w);
              typeof m == "number"
                ? c.uniform1f(b, m)
                : m instanceof M
                ? c.uniformMatrix4fv(b, !1, new Float32Array(m.m))
                : m instanceof v
                ? c.uniform4f(b, m.r, m.g, m.b, m.a)
                : m instanceof Ne
                ? c.uniform3f(b, m.x, m.y, m.z)
                : m instanceof q && c.uniform2f(b, m.x, m.y);
            }
          },
        }
      );
    }
    a(wt, "makeShader");
    function Ir(e, t, r, o) {
      let d = e.width / t,
        s = {},
        l = o.split("").entries();
      for (let [h, w] of l)
        s[w] = new I((h % d) * t, Math.floor(h / d) * r, t, r);
      return { tex: e, map: s, size: r };
    }
    a(Ir, "makeFont");
    function Ut(e, t, r, o = p.defTex, d = p.defShader, s = {}) {
      let l = Fr(d);
      if (!(!l || l instanceof P)) {
        (o !== p.curTex ||
          l !== p.curShader ||
          !_t(p.curUniform, s) ||
          p.vqueue.length + e.length * pt > Er ||
          p.iqueue.length + t.length > Tr) &&
          ie();
        for (let h of e) {
          let w = r ? p.transform : g.cam.transform.mult(p.transform),
            m = _r(w.multVec2(h.pos.xy()));
          p.vqueue.push(
            m.x,
            m.y,
            h.pos.z,
            h.uv.x,
            h.uv.y,
            h.color.r / 255,
            h.color.g / 255,
            h.color.b / 255,
            h.opacity
          );
        }
        for (let h of t) p.iqueue.push(h + p.vqueue.length / pt - e.length);
        (p.curTex = o), (p.curShader = l), (p.curUniform = s);
      }
    }
    a(Ut, "drawRaw");
    function ie() {
      !p.curTex ||
        !p.curShader ||
        p.vqueue.length === 0 ||
        p.iqueue.length === 0 ||
        (c.bindBuffer(c.ARRAY_BUFFER, p.vbuf),
        c.bufferSubData(c.ARRAY_BUFFER, 0, new Float32Array(p.vqueue)),
        c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, p.ibuf),
        c.bufferSubData(c.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(p.iqueue)),
        p.curShader.bind(),
        p.curShader.send(p.curUniform),
        p.curTex.bind(),
        c.drawElements(c.TRIANGLES, p.iqueue.length, c.UNSIGNED_SHORT, 0),
        p.curTex.unbind(),
        p.curShader.unbind(),
        c.bindBuffer(c.ARRAY_BUFFER, null),
        c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, null),
        (p.vqueue = []),
        (p.iqueue = []),
        p.drawCalls++);
    }
    a(ie, "flush");
    function Br() {
      c.clear(c.COLOR_BUFFER_BIT),
        i.background ||
          se(() => {
            Te({
              width: V(),
              height: N(),
              quad: new I(0, 0, V() / xr, N() / xr),
              tex: p.bgTex,
              fixed: !0,
            });
          }),
        (p.drawCalls = 0),
        (p.transformStack = []),
        (p.transform = new M());
    }
    a(Br, "frameStart");
    function Vr() {
      ie(), (p.lastDrawCalls = p.drawCalls);
    }
    a(Vr, "frameEnd");
    function _r(e) {
      return f((e.x / V()) * 2 - 1, (-e.y / N()) * 2 + 1);
    }
    a(_r, "screen2ndc");
    function Nr(e) {
      p.transform = e.clone();
    }
    a(Nr, "pushMatrix");
    function O(...e) {
      if (e[0] === void 0) return;
      let t = f(...e);
      (t.x === 0 && t.y === 0) || (p.transform = p.transform.translate(t));
    }
    a(O, "pushTranslate");
    function Qe(...e) {
      if (e[0] === void 0) return;
      let t = f(...e);
      (t.x === 1 && t.y === 1) || (p.transform = p.transform.scale(t));
    }
    a(Qe, "pushScale");
    function kr(e) {
      !e || (p.transform = p.transform.rotateX(e));
    }
    a(kr, "pushRotateX");
    function Gr(e) {
      !e || (p.transform = p.transform.rotateY(e));
    }
    a(Gr, "pushRotateY");
    function Ee(e) {
      !e || (p.transform = p.transform.rotateZ(e));
    }
    a(Ee, "pushRotateZ");
    let jr = Ee;
    function te() {
      p.transformStack.push(p.transform.clone());
    }
    a(te, "pushTransform");
    function K() {
      p.transformStack.length > 0 && (p.transform = p.transformStack.pop());
    }
    a(K, "popTransform");
    function Te(e) {
      if (e.width === void 0 || e.height === void 0)
        throw new Error('drawUVQuad() requires property "width" and "height".');
      if (e.width <= 0 || e.height <= 0) return;
      let t = e.width,
        r = e.height,
        d = Ye(e.origin || dt).scale(f(t, r).scale(-0.5)),
        s = e.quad || new I(0, 0, 1, 1),
        l = e.color || T(255, 255, 255),
        h = e.opacity ?? 1;
      te(),
        O(e.pos),
        Ee(e.angle),
        Qe(e.scale),
        O(d),
        Ut(
          [
            {
              pos: le(-t / 2, r / 2, 0),
              uv: f(e.flipX ? s.x + s.w : s.x, e.flipY ? s.y : s.y + s.h),
              color: l,
              opacity: h,
            },
            {
              pos: le(-t / 2, -r / 2, 0),
              uv: f(e.flipX ? s.x + s.w : s.x, e.flipY ? s.y + s.h : s.y),
              color: l,
              opacity: h,
            },
            {
              pos: le(t / 2, -r / 2, 0),
              uv: f(e.flipX ? s.x : s.x + s.w, e.flipY ? s.y + s.h : s.y),
              color: l,
              opacity: h,
            },
            {
              pos: le(t / 2, r / 2, 0),
              uv: f(e.flipX ? s.x : s.x + s.w, e.flipY ? s.y : s.y + s.h),
              color: l,
              opacity: h,
            },
          ],
          [0, 1, 3, 1, 2, 3],
          e.fixed,
          e.tex,
          e.shader,
          e.uniform
        ),
        K();
    }
    a(Te, "drawUVQuad");
    function Xr(e) {
      if (!e.tex) throw new Error('drawTexture() requires property "tex".');
      let t = e.quad ?? new I(0, 0, 1, 1),
        r = e.tex.width * t.w,
        o = e.tex.height * t.h,
        d = f(1);
      if (e.tiled) {
        let s = Math.ceil((e.width || r) / r),
          l = Math.ceil((e.height || o) / o),
          w = Ye(e.origin || dt)
            .add(f(1, 1))
            .scale(0.5)
            .scale(s * r, l * o);
        for (let m = 0; m < s; m++)
          for (let b = 0; b < l; b++)
            Te({
              ...e,
              pos: (e.pos || f(0)).add(f(r * m, o * b)).sub(w),
              scale: d.scale(e.scale || f(1)),
              tex: e.tex,
              quad: t,
              width: r,
              height: o,
              origin: "topleft",
            });
      } else
        e.width && e.height
          ? ((d.x = e.width / r), (d.y = e.height / o))
          : e.width
          ? ((d.x = e.width / r), (d.y = d.x))
          : e.height && ((d.y = e.height / o), (d.x = d.y)),
          Te({
            ...e,
            scale: d.scale(e.scale || f(1)),
            tex: e.tex,
            quad: t,
            width: r,
            height: o,
          });
    }
    a(Xr, "drawTexture");
    function tn(e) {
      if (!e.sprite) throw new Error('drawSprite() requires property "sprite"');
      let t = Jt(e.sprite);
      if (!t || !t.data) return;
      let r = t.data.frames[e.frame ?? 0];
      if (!r) throw new Error(`Frame not found: ${e.frame ?? 0}`);
      Xr({ ...e, tex: t.data.tex, quad: r.scale(e.quad || new I(0, 0, 1, 1)) });
    }
    a(tn, "drawSprite");
    function qe(e, t, r, o, d, s = 1) {
      (o = ce(o % 360)), (d = ce(d % 360)), d <= o && (d += Math.PI * 2);
      let l = Math.ceil(Math.max(Math.sqrt(t + r) * 3 * (s || 1), 16)),
        h = (d - o) / l,
        w = [];
      for (let m = o; m < d; m += h)
        w.push(e.add(t * Math.cos(m), r * Math.sin(m)));
      return w.push(e.add(t * Math.cos(d), r * Math.sin(d))), w;
    }
    a(qe, "getArcPts");
    function j(e) {
      if (e.width === void 0 || e.height === void 0)
        throw new Error('drawRect() requires property "width" and "height".');
      if (e.width <= 0 || e.height <= 0) return;
      let t = e.width,
        r = e.height,
        d = Ye(e.origin || dt)
          .add(1, 1)
          .scale(f(t, r).scale(-0.5)),
        s = [f(0, 0), f(t, 0), f(t, r), f(0, r)];
      if (e.radius) {
        let l = Math.min(Math.min(t, r) / 2, e.radius);
        s = [
          f(l, 0),
          f(t - l, 0),
          ...qe(f(t - l, l), l, l, 270, 360),
          f(t, l),
          f(t, r - l),
          ...qe(f(t - l, r - l), l, l, 0, 90),
          f(t - l, r),
          f(l, r),
          ...qe(f(l, r - l), l, l, 90, 180),
          f(0, r - l),
          f(0, l),
          ...qe(f(l, l), l, l, 180, 270),
        ];
      }
      Se({
        ...e,
        offset: d,
        pts: s,
        ...(e.gradient
          ? {
              colors: e.horizontal
                ? [e.gradient[0], e.gradient[1], e.gradient[1], e.gradient[0]]
                : [e.gradient[0], e.gradient[0], e.gradient[1], e.gradient[1]],
            }
          : {}),
      });
    }
    a(j, "drawRect");
    function Pe(e) {
      let { p1: t, p2: r } = e;
      if (!t || !r)
        throw new Error('drawLine() requires properties "p1" and "p2".');
      let o = e.width || 1,
        d = r
          .sub(t)
          .unit()
          .normal()
          .scale(o * 0.5),
        s = [t.sub(d), t.add(d), r.add(d), r.sub(d)].map((l) => ({
          pos: le(l.x, l.y, 0),
          uv: f(0),
          color: e.color ?? v.WHITE,
          opacity: e.opacity ?? 1,
        }));
      Ut(s, [0, 1, 3, 1, 2, 3], e.fixed, p.defTex, e.shader, e.uniform);
    }
    a(Pe, "drawLine");
    function nn(e) {
      let t = e.pts;
      if (!t) throw new Error('drawLines() requires property "pts".');
      if (!(t.length < 2))
        if (e.radius && t.length >= 3) {
          let r = t[0].dist(t[1]);
          for (let d = 1; d < t.length - 1; d++)
            r = Math.min(t[d].dist(t[d + 1]), r);
          let o = Math.min(e.radius, r / 2);
          Pe({ ...e, p1: t[0], p2: t[1] });
          for (let d = 1; d < t.length - 2; d++) {
            let s = t[d],
              l = t[d + 1];
            Pe({ ...e, p1: s, p2: l });
          }
          Pe({ ...e, p1: t[t.length - 2], p2: t[t.length - 1] });
        } else
          for (let r = 0; r < t.length - 1; r++)
            Pe({ ...e, p1: t[r], p2: t[r + 1] });
    }
    a(nn, "drawLines");
    function rn(e) {
      if (!e.p1 || !e.p2 || !e.p3)
        throw new Error(
          'drawPolygon() requires properties "p1", "p2" and "p3".'
        );
      return Se({ ...e, pts: [e.p1, e.p2, e.p3] });
    }
    a(rn, "drawTriangle");
    function bt(e) {
      if (!e.radius)
        throw new Error('drawCircle() requires property "radius".');
      e.radius !== 0 &&
        sn({ ...e, radiusX: e.radius, radiusY: e.radius, angle: 0 });
    }
    a(bt, "drawCircle");
    function sn(e) {
      if (e.radiusX === void 0 || e.radiusY === void 0)
        throw new Error(
          'drawEllipse() requires properties "radiusX" and "radiusY".'
        );
      if (e.radiusX === 0 || e.radiusY === 0) return;
      let t = e.start ?? 0,
        r = e.end ?? 360,
        o = qe(f(0), e.radiusX, e.radiusY, t, r, e.resolution);
      o.unshift(f(0));
      let d = {
        ...e,
        pts: o,
        radius: 0,
        ...(e.gradient
          ? {
              colors: [
                e.gradient[0],
                ...Array(o.length - 1).fill(e.gradient[1]),
              ],
            }
          : {}),
      };
      if (r - t >= 360 && e.outline) {
        e.fill !== !1 && Se({ ...d, outline: null }),
          Se({ ...d, pts: o.slice(1), fill: !1 });
        return;
      }
      Se(d);
    }
    a(sn, "drawEllipse");
    function Se(e) {
      if (!e.pts) throw new Error('drawPolygon() requires property "pts".');
      let t = e.pts.length;
      if (!(t < 3)) {
        if (
          (te(), O(e.pos), Qe(e.scale), Ee(e.angle), O(e.offset), e.fill !== !1)
        ) {
          let r = e.color ?? v.WHITE,
            o = e.pts.map((s, l) => ({
              pos: le(s.x, s.y, 0),
              uv: f(0, 0),
              color: e.colors ? e.colors[l] ?? r : r,
              opacity: e.opacity ?? 1,
            })),
            d = [...Array(t - 2).keys()].map((s) => [0, s + 1, s + 2]).flat();
          Ut(o, e.indices ?? d, e.fixed, p.defTex, e.shader, e.uniform);
        }
        e.outline &&
          nn({
            pts: [...e.pts, e.pts[0]],
            radius: e.radius,
            width: e.outline.width,
            color: e.outline.color,
            uniform: e.uniform,
            fixed: e.fixed,
          }),
          K();
      }
    }
    a(Se, "drawPolygon");
    function on(e, t, r) {
      ie(),
        c.clear(c.STENCIL_BUFFER_BIT),
        c.enable(c.STENCIL_TEST),
        c.stencilFunc(c.NEVER, 1, 255),
        c.stencilOp(c.REPLACE, c.REPLACE, c.REPLACE),
        t(),
        ie(),
        c.stencilFunc(r, 1, 255),
        c.stencilOp(c.KEEP, c.KEEP, c.KEEP),
        e(),
        ie(),
        c.disable(c.STENCIL_TEST);
    }
    a(on, "drawStenciled");
    function $r(e, t) {
      on(e, t, c.EQUAL);
    }
    a($r, "drawMasked");
    function Yr(e, t) {
      on(e, t, c.NOTEQUAL);
    }
    a(Yr, "drawSubtracted");
    function se(e) {
      ie();
      let t = p.width,
        r = p.height;
      (p.width = p.viewport.width),
        (p.height = p.viewport.height),
        e(),
        ie(),
        (p.width = t),
        (p.height = r);
    }
    a(se, "drawUnscaled");
    function an(e, t) {
      t.pos && (e.pos = e.pos.add(t.pos)),
        t.scale && (e.scale = e.scale.scale(f(t.scale))),
        t.angle && (e.angle += t.angle),
        t.color && (e.color = e.color.mult(t.color)),
        t.opacity && (e.opacity *= t.opacity);
    }
    a(an, "applyCharTransform");
    let un = /\[(?<text>[^\]]*)\]\.(?<style>[\w\.]+)+/g;
    function Kr(e) {
      let t = {},
        r = e.replace(un, "$1"),
        o = 0;
      for (let d of e.matchAll(un)) {
        let s = d.groups.style.split("."),
          l = d.index - o;
        for (let h = l; h < d.index + d.groups.text.length; h++)
          t[h] = { localIdx: h - l, styles: s };
        o += 3 + d.groups.style.length;
      }
      return { charStyleMap: t, text: r };
    }
    a(Kr, "compileStyledText");
    let yt = {};
    function me(e) {
      if (e.text === void 0)
        throw new Error('formatText() requires property "text".');
      let t = Zt(e.font);
      if (e.text === "" || t instanceof P || !t)
        return { width: 0, height: 0, chars: [], opt: e };
      let { charStyleMap: r, text: o } = Kr(e.text + ""),
        d = o.split("");
      if (t instanceof FontFace || typeof t == "string") {
        let L = t instanceof FontFace ? t.family : t,
          E = yt[L] ?? {
            font: { tex: new U(ft, ft), map: {}, size: vr },
            cursor: f(0),
          };
        yt[L] || (yt[L] = E), (t = E.font);
        for (let F of d)
          if (!E.font.map[F]) {
            let J = u.canvas2.getContext("2d");
            (J.font = `${t.size}px ${L}`),
              J.clearRect(0, 0, u.canvas2.width, u.canvas2.height),
              (J.textBaseline = "top"),
              (J.textAlign = "left"),
              (J.fillStyle = "rgb(255, 255, 255)"),
              J.fillText(F, 0, 0);
            let Be = J.measureText(F),
              Ce = Math.ceil(Be.width),
              Le = J.getImageData(0, 0, Ce, t.size);
            if (
              E.cursor.x + Ce > ft &&
              ((E.cursor.x = 0), (E.cursor.y += t.size), E.cursor.y > ft)
            )
              throw new Error("Font atlas exceeds character limit");
            t.tex.update(E.cursor.x, E.cursor.y, Le),
              (t.map[F] = new I(E.cursor.x, E.cursor.y, Ce, t.size)),
              (E.cursor.x += Ce);
          }
      }
      let s = e.size || t.size,
        l = f(e.scale ?? 1).scale(s / t.size),
        h = e.lineSpacing ?? 0,
        w = e.letterSpacing ?? 0,
        m = 0,
        b = 0,
        y = 0,
        C = [],
        W = [],
        Q = 0,
        $ = null,
        we = null;
      for (; Q < d.length; ) {
        let L = d[Q];
        if (
          L ===
          `
`
        )
          (y += s + h),
            C.push({ width: m - w, chars: W }),
            ($ = null),
            (we = null),
            (m = 0),
            (W = []);
        else {
          let E = t.map[L],
            F = E.w * l.x;
          E &&
            (e.width &&
              m + F > e.width &&
              ((y += s + h),
              $ != null &&
                ((Q -= W.length - $),
                (L = d[Q]),
                (E = t.map[L]),
                (F = E.w * l.x),
                (W = W.slice(0, $ - 1)),
                (m = we)),
              ($ = null),
              (we = null),
              C.push({ width: m - w, chars: W }),
              (m = 0),
              (W = [])),
            W.push({
              tex: t.tex,
              width: E.w,
              height: E.h,
              quad: new I(
                (E.x + mt) / t.tex.width,
                (E.y + mt) / t.tex.height,
                (E.w - mt * 2) / t.tex.width,
                (E.h - mt * 2) / t.tex.height
              ),
              ch: L,
              pos: f(m, y),
              opacity: e.opacity ?? 1,
              color: e.color ?? v.WHITE,
              scale: f(l),
              angle: 0,
            }),
            L === " " && (($ = W.length), (we = m)),
            (m += F),
            (b = Math.max(b, m)),
            (m += w));
        }
        Q++;
      }
      C.push({ width: m - w, chars: W }), (y += s), e.width && (b = e.width);
      let De = [];
      for (let L of C) {
        let E = (b - L.width) * js(e.align ?? "left");
        for (let F of L.chars) {
          let J = t.map[F.ch],
            Be = De.length,
            Ce = new q(J.w * l.x * 0.5, J.h * l.y * 0.5);
          if (((F.pos = F.pos.add(E, 0).add(Ce)), e.transform)) {
            let Le =
              typeof e.transform == "function"
                ? e.transform(Be, F.ch)
                : e.transform;
            Le && an(F, Le);
          }
          if (r[Be]) {
            let { styles: Le, localIdx: rs } = r[Be];
            for (let is of Le) {
              let Lt = e.styles[is],
                _n = typeof Lt == "function" ? Lt(rs, F.ch) : Lt;
              _n && an(F, _n);
            }
          }
          De.push(F);
        }
      }
      return { width: b, height: y, chars: De, opt: e };
    }
    a(me, "formatText");
    function cn(e) {
      pe(me(e));
    }
    a(cn, "drawText");
    function pe(e) {
      te(),
        O(e.opt.pos),
        Ee(e.opt.angle),
        O(
          Ye(e.opt.origin ?? "topleft")
            .add(1, 1)
            .scale(e.width, e.height)
            .scale(-0.5)
        ),
        e.chars.forEach((t) => {
          Te({
            tex: t.tex,
            width: t.width,
            height: t.height,
            pos: t.pos,
            scale: t.scale,
            angle: t.angle,
            color: t.color,
            opacity: t.opacity,
            quad: t.quad,
            origin: "center",
            uniform: e.opt.uniform,
            shader: e.opt.shader,
            fixed: e.opt.fixed,
          });
        }),
        K();
    }
    a(pe, "drawFormattedText");
    function ln() {
      let e = u.pixelDensity,
        t = c.drawingBufferWidth / e,
        r = c.drawingBufferHeight / e;
      if (wn()) {
        let o = window.innerWidth,
          d = window.innerHeight,
          s = o / d,
          l = t / r;
        if (s > l) {
          let h = window.innerHeight * l;
          p.viewport = { x: (o - h) / 2, y: 0, width: h, height: d };
        } else {
          let h = window.innerWidth / l;
          p.viewport = { x: 0, y: (d - h) / 2, width: o, height: h };
        }
        return;
      }
      if (i.letterbox) {
        if (!i.width || !i.height)
          throw new Error("Letterboxing requires width and height defined.");
        let o = t / r,
          d = i.width / i.height;
        if (o > d) {
          i.stretch || ((p.width = r * d), (p.height = r));
          let s = r * d,
            l = r,
            h = (t - s) / 2;
          c.scissor(h * e, 0, s * e, l * e),
            c.viewport(h * e, 0, s * e, r * e),
            (p.viewport = { x: h, y: 0, width: s, height: r });
        } else {
          i.stretch || ((p.width = t), (p.height = t / d));
          let s = t,
            l = t / d,
            h = (r - l) / 2;
          c.scissor(0, h * e, s * e, l * e),
            c.viewport(0, h * e, t * e, l * e),
            (p.viewport = { x: 0, y: h, width: t, height: l });
        }
        return;
      }
      if (i.stretch) {
        if (!i.width || !i.height)
          throw new Error("Stretching requires width and height defined.");
        c.viewport(0, 0, t * e, r * e),
          (p.viewport = { x: 0, y: 0, width: t, height: r });
        return;
      }
      (p.width = t / u.scale),
        (p.height = r / u.scale),
        c.viewport(0, 0, t * e, r * e),
        (p.viewport = { x: 0, y: 0, width: t, height: r });
    }
    a(ln, "updateViewport");
    function V() {
      return p.width;
    }
    a(V, "width");
    function N() {
      return p.height;
    }
    a(N, "height");
    let k = {},
      Fe = {},
      ge = {};
    function Je(e) {
      return f(
        ((e.x - p.viewport.x) * V()) / p.viewport.width,
        ((e.y - p.viewport.y) * N()) / p.viewport.height
      );
    }
    a(Je, "windowToContent");
    function Hr(e) {
      return f(
        (e.x * p.viewport.width) / p.width,
        (e.y * p.viewport.height) / p.height
      );
    }
    a(Hr, "contentToView");
    function xt(e, t) {
      let r = Je(f(e, t));
      u.mouseStarted && (u.mouseDeltaPos = r.sub(u.mousePos)),
        (u.mousePos = r),
        (u.mouseStarted = !0),
        (u.isMouseMoved = !0);
    }
    a(xt, "setMousePos"),
      (k.mousemove = (e) => {
        xt(e.offsetX, e.offsetY);
      }),
      (k.mousedown = (e) => {
        let t = gr[e.button];
        t && (u.mouseStates[t] = "pressed");
      }),
      (k.mouseup = (e) => {
        let t = gr[e.button];
        t && (u.mouseStates[t] = "released");
      }),
      (k.keydown = (e) => {
        let t = pr[e.key] || e.key.toLowerCase();
        Cs.includes(t) && e.preventDefault(),
          t.length === 1 && u.charInputted.push(e.key),
          t === "space" && u.charInputted.push(" "),
          e.repeat
            ? ((u.isKeyPressedRepeat = !0), (u.keyStates[t] = "rpressed"))
            : ((u.isKeyPressed = !0), (u.keyStates[t] = "pressed")),
          u.numKeyDown++;
      }),
      (k.keyup = (e) => {
        let t = pr[e.key] || e.key.toLowerCase();
        (u.keyStates[t] = "released"), (u.isKeyReleased = !0), u.numKeyDown--;
      }),
      (k.touchstart = (e) => {
        e.preventDefault();
        let t = [...e.changedTouches];
        t.forEach((r) => {
          g.ev.trigger("onTouchStart", Je(f(r.clientX, r.clientY)), r);
        }),
          i.touchToMouse !== !1 &&
            (xt(t[0].clientX, t[0].clientY), (u.mouseStates.left = "pressed"));
      }),
      (k.touchmove = (e) => {
        e.preventDefault();
        let t = [...e.changedTouches];
        t.forEach((r) => {
          g.ev.trigger("onTouchMove", Je(f(r.clientX, r.clientY)), r);
        }),
          i.touchToMouse !== !1 && xt(t[0].clientX, t[0].clientY);
      }),
      (k.touchend = (e) => {
        [...e.changedTouches].forEach((r) => {
          g.ev.trigger("onTouchEnd", Je(f(r.clientX, r.clientY)), r);
        }),
          i.touchToMouse !== !1 && (u.mouseStates.left = "released");
      }),
      (k.touchcancel = () => {
        i.touchToMouse !== !1 && (u.mouseStates.left = "released");
      }),
      (k.contextmenu = function (e) {
        e.preventDefault();
      }),
      (Fe.visibilitychange = () => {
        switch (document.visibilityState) {
          case "visible":
            (u.skipTime = !0), A.paused || R.ctx.resume();
            break;
          case "hidden":
            R.ctx.suspend();
            break;
        }
      }),
      (ge.resize = () => {}),
      (ge.error = (e) => Bn(e.error)),
      (ge.unhandledrejection = (e) => Bn(e.reason));
    for (let e in k) u.canvas.addEventListener(e, k[e]);
    for (let e in Fe) document.addEventListener(e, Fe[e]);
    for (let e in ge) window.addEventListener(e, ge[e]);
    function H() {
      return u.mousePos.clone();
    }
    a(H, "mousePos");
    function dn() {
      return u.mouseDeltaPos.clone();
    }
    a(dn, "mouseDeltaPos");
    function Ze(e = "left") {
      return u.mouseStates[e] === "pressed";
    }
    a(Ze, "isMousePressed");
    function vt(e = "left") {
      return u.mouseStates[e] === "pressed" || u.mouseStates[e] === "down";
    }
    a(vt, "isMouseDown");
    function Et(e = "left") {
      return u.mouseStates[e] === "released";
    }
    a(Et, "isMouseReleased");
    function hn() {
      return u.isMouseMoved;
    }
    a(hn, "isMouseMoved");
    function et(e) {
      return e === void 0 ? u.isKeyPressed : u.keyStates[e] === "pressed";
    }
    a(et, "isKeyPressed");
    function fn(e) {
      return e === void 0
        ? u.isKeyPressedRepeat
        : u.keyStates[e] === "pressed" || u.keyStates[e] === "rpressed";
    }
    a(fn, "isKeyPressedRepeat");
    function mn(e) {
      return e === void 0
        ? u.numKeyDown > 0
        : u.keyStates[e] === "pressed" ||
            u.keyStates[e] === "rpressed" ||
            u.keyStates[e] === "down";
    }
    a(mn, "isKeyDown");
    function Tt(e) {
      return e === void 0 ? u.isKeyReleased : u.keyStates[e] === "released";
    }
    a(Tt, "isKeyReleased");
    function zr() {
      return [...u.charInputted];
    }
    a(zr, "charInputted");
    function St() {
      return u.time;
    }
    a(St, "time");
    function pn() {
      return u.canvas.toDataURL();
    }
    a(pn, "screenshot");
    function gn(e) {
      return e && (u.canvas.style.cursor = e), u.canvas.style.cursor;
    }
    a(gn, "cursor");
    function Qr(e = !0) {
      e ? Ns(u.canvas) : ks();
    }
    a(Qr, "fullscreen");
    function wn() {
      return Boolean(Gs());
    }
    a(wn, "isFullscreen");
    let A = {
      inspect: !1,
      timeScale: 1,
      showLog: !0,
      fps: () => u.fpsCounter.fps,
      numFrames: () => u.numFrames,
      objCount() {
        let e = a(
          (t) => t.children.length + t.children.reduce((r, o) => r + e(o), 0),
          "count"
        );
        return e(g.root);
      },
      stepFrame: On,
      drawCalls: () => p.drawCalls,
      clearLog: () => (g.logs = []),
      log: (e) =>
        g.logs.unshift(
          `${i.logTime ? `[${St().toFixed(2)}].time ` : ""}[${
            e?.toString ? e.toString() : e
          }].${e instanceof Error ? "error" : "info"}`
        ),
      error: (e) => A.log(new Error(e.toString ? e.toString() : e)),
      curRecording: null,
      get paused() {
        return u.paused;
      },
      set paused(e) {
        (u.paused = e), e ? R.ctx.suspend() : R.ctx.resume();
      },
    };
    function X() {
      return u.dt * A.timeScale;
    }
    a(X, "dt");
    function Jr(...e) {
      return e.length > 0 && (g.cam.pos = f(...e)), g.cam.pos.clone();
    }
    a(Jr, "camPos");
    function Zr(...e) {
      return e.length > 0 && (g.cam.scale = f(...e)), g.cam.scale.clone();
    }
    a(Zr, "camScale");
    function ei(e) {
      return e !== void 0 && (g.cam.angle = e), g.cam.angle;
    }
    a(ei, "camRot");
    function ti(e = 12) {
      g.cam.shake = e;
    }
    a(ti, "shake");
    function tt(e) {
      return g.cam.transform.multVec2(e);
    }
    a(tt, "toScreen");
    function Un(e) {
      return g.cam.transform.invert().multVec2(e);
    }
    a(Un, "toWorld");
    function At(e) {
      let t = new Map(),
        r = {},
        o = new he(),
        d = {
          _id: or(),
          hidden: !1,
          paused: !1,
          children: [],
          parent: null,
          add(s) {
            let l = (() => {
              if (Array.isArray(s)) return At(s);
              if (s.parent)
                throw new Error(
                  "Cannot add a game obj that already has a parent."
                );
              return s;
            })();
            return (
              (l.parent = this),
              l.trigger("add", this),
              it(() => l.trigger("load")),
              this.children.push(l),
              l
            );
          },
          readd(s) {
            return this.remove(s), this.children.push(s), s;
          },
          remove(s) {
            let l = this.children.indexOf(s);
            l !== -1 &&
              ((s.parent = null),
              s.trigger("destroy"),
              this.children.splice(l, 1));
          },
          removeAll(s) {
            this.every(s, (l) => this.remove(l));
          },
          update() {
            this.paused ||
              (this.every((s) => s.update()), this.trigger("update"));
          },
          draw() {
            this.hidden ||
              (te(),
              O(this.pos),
              Qe(this.scale),
              Ee(this.angle),
              this.every((s) => s.draw()),
              this.trigger("draw"),
              K());
          },
          use(s) {
            if (!s) return;
            if (typeof s == "string") return this.use({ id: s });
            s.id && (this.unuse(s.id), t.set(s.id, {}));
            let l = s.id ? t.get(s.id) : r;
            l.cleanups = [];
            for (let w in s)
              if (!Vs.has(w)) {
                if (typeof s[w] == "function") {
                  let m = s[w].bind(this);
                  if (_s.has(w)) {
                    l.cleanups.push(this.on(w, m)), (l[w] = m);
                    continue;
                  } else l[w] = m;
                } else l[w] = s[w];
                this[w] === void 0 &&
                  Object.defineProperty(this, w, {
                    get: () => l[w],
                    set: (m) => (l[w] = m),
                    configurable: !0,
                    enumerable: !0,
                  });
              }
            let h = a(() => {
              if (!!s.require) {
                for (let w of s.require)
                  if (!this.c(w))
                    throw new Error(
                      `Component '${s.id}' requires component '${w}'`
                    );
              }
            }, "checkDeps");
            this.exists()
              ? (s.add && s.add.call(this),
                s.load && it(() => s.load.call(this)),
                h())
              : s.require && l.cleanups.push(this.on("add", h));
          },
          unuse(s) {
            if (t.has(s)) {
              let l = t.get(s);
              l.cleanups.forEach((h) => h());
              for (let h in l) delete l[h];
            }
            t.delete(s);
          },
          c(s) {
            return t.get(s);
          },
          get(s) {
            return this.children
              .filter((l) => (s ? l.is(s) : !0))
              .sort((l, h) => (l.z ?? 0) - (h.z ?? 0));
          },
          every(s, l) {
            if (typeof s == "function" && l === void 0)
              return this.get().forEach((h) => s(h));
            if (typeof s == "string" || Array.isArray(s))
              return this.get(s).forEach((h) => l(h));
          },
          revery(s, l) {
            if (typeof s == "function" && l === void 0)
              return this.get()
                .reverse()
                .forEach((h) => s(h));
            if (typeof s == "string" || Array.isArray(s))
              return this.get(s)
                .reverse()
                .forEach((h) => l(h));
          },
          isAncestorOf(s) {
            return s.parent
              ? s.parent === this || this.isAncestorOf(s.parent)
              : !1;
          },
          exists() {
            return g.root.isAncestorOf(this);
          },
          is(s) {
            if (s === "*") return !0;
            if (Array.isArray(s)) {
              for (let l of s) if (!this.c(l)) return !1;
              return !0;
            } else return this.c(s) != null;
          },
          on(s, l) {
            return o.on(s, l.bind(this));
          },
          trigger(s, ...l) {
            o.trigger(s, ...l), g.objEvents.trigger(s, this, ...l);
          },
          destroy() {
            this.parent?.remove(this);
          },
          inspect() {
            let s = {};
            for (let [l, h] of t) s[l] = h.inspect ? h.inspect() : null;
            return s;
          },
          onUpdate(s) {
            return this.on("update", s);
          },
          onDraw(s) {
            return this.on("draw", s);
          },
          onDestroy(s) {
            return this.on("destroy", s);
          },
          clearEvents() {
            o.clear();
          },
        };
      for (let s of e) d.use(s);
      return d;
    }
    a(At, "make");
    function Oe(e, t, r) {
      return (
        g.objEvents[e] || (g.objEvents[e] = new de()),
        g.objEvents.on(e, (o, ...d) => {
          o.is(t) && r(o, ...d);
        })
      );
    }
    a(Oe, "on");
    function nt(e, t) {
      if (typeof e == "function" && t === void 0) return g.root.onUpdate(e);
      if (typeof e == "string") return Oe("update", e, t);
    }
    a(nt, "onUpdate");
    function ni(e, t) {
      if (typeof e == "function" && t === void 0) return g.root.onDraw(e);
      if (typeof e == "string") return Oe("draw", e, t);
    }
    a(ni, "onDraw");
    function ri(e, t, r) {
      let o = Oe("collide", e, (l, h, w) => h.is(t) && r(l, h, w)),
        d = Oe("collide", t, (l, h, w) => h.is(e) && r(h, l, w)),
        s = nt(e, (l) => {
          if (!l.area)
            throw new Error(
              "onCollide() requires the object to have area() component"
            );
          l._checkCollisions(t, (h) => {
            r(l, h);
          });
        });
      return () => [o, d, s].forEach((l) => l());
    }
    a(ri, "onCollide");
    function ii(e, t) {
      return typeof e == "function"
        ? En(e)
        : nt(e, (r) => {
            if (!r.area)
              throw new Error(
                "onClick() requires the object to have area() component"
              );
            r.isClicked() && t(r);
          });
    }
    a(ii, "onClick");
    function si(e, t, r) {
      return nt(e, (o) => {
        if (!o.area)
          throw new Error(
            "onHover() requires the object to have area() component"
          );
        o.isHovering() ? t(o) : r && r(o);
      });
    }
    a(si, "onHover");
    function bn(e, t) {
      return new Promise((r) => {
        g.timers.push(
          new fe(e, () => {
            t && t(), r();
          })
        );
      });
    }
    a(bn, "wait");
    function oi(e, t) {
      let r = !1,
        o = a(() => {
          r || (t(), bn(e, o));
        }, "newF");
      return o(), () => (r = !0);
    }
    a(oi, "loop");
    function yn(e, t) {
      if (Array.isArray(e)) {
        let r = e.map((o) => yn(o, t));
        return () => r.forEach((o) => o());
      }
      return g.ev.on("input", () => mn(e) && t());
    }
    a(yn, "onKeyDown");
    function z(e, t) {
      if (Array.isArray(e)) {
        let r = e.map((o) => z(o, t));
        return () => r.forEach((o) => o());
      } else
        return typeof e == "function"
          ? g.ev.on("input", () => et() && e())
          : g.ev.on("input", () => et(e) && t());
    }
    a(z, "onKeyPress");
    function xn(e, t) {
      if (Array.isArray(e)) {
        let r = e.map((o) => xn(o, t));
        return () => r.forEach((o) => o());
      } else
        return typeof e == "function"
          ? g.ev.on("input", () => et() && e())
          : g.ev.on("input", () => fn(e) && t());
    }
    a(xn, "onKeyPressRepeat");
    function vn(e, t) {
      if (Array.isArray(e)) {
        let r = e.map((o) => vn(o, t));
        return () => r.forEach((o) => o());
      } else
        return typeof e == "function"
          ? g.ev.on("input", () => Tt() && e())
          : g.ev.on("input", () => Tt(e) && t());
    }
    a(vn, "onKeyRelease");
    function ai(e, t) {
      return typeof e == "function"
        ? g.ev.on("input", () => vt() && e(H()))
        : g.ev.on("input", () => vt(e) && t(H()));
    }
    a(ai, "onMouseDown");
    function En(e, t) {
      return typeof e == "function"
        ? g.ev.on("input", () => Ze() && e(H()))
        : g.ev.on("input", () => Ze(e) && t(H()));
    }
    a(En, "onMousePress");
    function ui(e, t) {
      return typeof e == "function"
        ? g.ev.on("input", () => Et() && e(H()))
        : g.ev.on("input", () => Et(e) && t(H()));
    }
    a(ui, "onMouseRelease");
    function ci(e) {
      return g.ev.on("input", () => hn() && e(H(), dn()));
    }
    a(ci, "onMouseMove");
    function li(e) {
      return g.ev.on("input", () => zr().forEach((t) => e(t)));
    }
    a(li, "onCharInput");
    function di(e) {
      return g.ev.on("onTouchStart", e);
    }
    a(di, "onTouchStart");
    function hi(e) {
      return g.ev.on("onTouchMove", e);
    }
    a(hi, "onTouchMove");
    function fi(e) {
      return g.ev.on("onTouchEnd", e);
    }
    a(fi, "onTouchEnd");
    function Tn() {
      z("f1", () => {
        A.inspect = !A.inspect;
      }),
        z("f2", () => {
          A.clearLog();
        }),
        z("f8", () => {
          A.paused = !A.paused;
        }),
        z("f7", () => {
          A.timeScale = Ae(Y(A.timeScale - 0.2, 0, 2), 1);
        }),
        z("f9", () => {
          A.timeScale = Ae(Y(A.timeScale + 0.2, 0, 2), 1);
        }),
        z("f10", () => {
          A.stepFrame();
        }),
        z("f5", () => {
          g.ev.onOnce("frameEnd", () => Xe("kaboom.png", pn()));
        }),
        z("f6", () => {
          A.curRecording
            ? (A.curRecording.download(), (A.curRecording = null))
            : (A.curRecording = qn());
        });
    }
    a(Tn, "enterDebugMode");
    function Sn() {
      z("b", en);
    }
    a(Sn, "enterBurpMode");
    function An(e) {
      return e !== void 0 && (g.gravity = e), g.gravity;
    }
    a(An, "gravity");
    function Rn(e, t) {
      return {
        target: e,
        displacement: t,
        isTop: () => t.y > 0,
        isBottom: () => t.y < 0,
        isLeft: () => t.x > 0,
        isRight: () => t.x < 0,
      };
    }
    a(Rn, "makeCollision");
    function Rt(...e) {
      return {
        id: "pos",
        pos: f(...e),
        moveBy(...t) {
          let r = f(...t),
            o = r.x,
            d = r.y,
            s = null;
          if (this.solid && this.area?.shape === "rect") {
            let l = this.worldArea();
            g.root.every((h) => {
              if (
                !this.exists() ||
                h === this ||
                !h.solid ||
                h.area?.shape !== "rect"
              )
                return;
              let w = h.worldArea(),
                m = lt(w, l);
              if (re(m, f(0))) {
                let L = Math.min(
                    Math.abs(m.p1.x),
                    Math.abs(m.p2.x),
                    Math.abs(m.p1.y),
                    Math.abs(m.p2.y)
                  ),
                  E = (() => {
                    switch (L) {
                      case Math.abs(m.p1.x):
                        return f(L, 0);
                      case Math.abs(m.p2.x):
                        return f(-L, 0);
                      case Math.abs(m.p1.y):
                        return f(0, L);
                      case Math.abs(m.p2.y):
                        return f(0, -L);
                    }
                  })();
                (this.pos = this.pos.sub(E)),
                  (l = this.worldArea()),
                  (m = lt(w, l));
              }
              let b = { p1: f(0), p2: f(o, d) },
                y = 1,
                C = m.p1,
                W = f(m.p1.x, m.p2.y),
                Q = m.p2,
                $ = f(m.p2.x, m.p1.y),
                we = 0,
                De = {
                  right: { p1: C, p2: W },
                  top: { p1: W, p2: Q },
                  left: { p1: Q, p2: $ },
                  bottom: { p1: $, p2: C },
                };
              for (let L in De) {
                let E = De[L];
                if (
                  (o === 0 && E.p1.x === 0 && E.p2.x === 0) ||
                  (d === 0 && E.p1.y === 0 && E.p2.y === 0)
                ) {
                  y = 1;
                  break;
                }
                let F = Ot(b, E);
                F != null && (we++, F < y && (y = F));
              }
              if (y < 1 && !(y === 0 && we == 1 && !re(m, f(o, d)))) {
                let L = f(-o * (1 - y), -d * (1 - y));
                (o *= y), (d *= y), (s = Rn(h, L));
              }
            });
          }
          return (
            (this.pos.x += o),
            (this.pos.y += d),
            s &&
              (this.trigger("collide", s.target, s),
              s.target.trigger(
                "collide",
                this,
                Rn(this, s.displacement.scale(-1))
              )),
            s
          );
        },
        move(...t) {
          return this.moveBy(f(...t).scale(X()));
        },
        moveTo(...t) {
          if (typeof t[0] == "number" && typeof t[1] == "number")
            return this.moveTo(f(t[0], t[1]), t[2]);
          let r = t[0],
            o = t[1];
          if (o === void 0) {
            this.pos = f(r);
            return;
          }
          let d = r.sub(this.pos);
          if (d.len() <= o * X()) {
            this.pos = f(r);
            return;
          }
          this.move(d.unit().scale(o));
        },
        screenPos() {
          return this.fixed ? this.pos : tt(this.pos);
        },
        inspect() {
          return `(${Math.round(this.pos.x)}, ${Math.round(this.pos.y)})`;
        },
      };
    }
    a(Rt, "pos");
    function rt(...e) {
      return e.length === 0
        ? rt(1)
        : {
            id: "scale",
            scale: f(...e),
            scaleTo(...t) {
              this.scale = f(...t);
            },
            inspect() {
              return typeof this.scale == "number"
                ? `${Ae(this.scale, 2)}`
                : `(${Ae(this.scale.x, 2)}, ${Ae(this.scale.y, 2)})`;
            },
          };
    }
    a(rt, "scale");
    function mi(e) {
      return {
        id: "rotate",
        angle: e ?? 0,
        inspect() {
          return `${Math.round(this.angle)}`;
        },
      };
    }
    a(mi, "rotate");
    function pi(...e) {
      return {
        id: "color",
        color: T(...e),
        inspect() {
          return this.color.toString();
        },
      };
    }
    a(pi, "color");
    function Ae(e, t) {
      return Number(e.toFixed(t));
    }
    a(Ae, "toFixed");
    function gi(e) {
      return {
        id: "opacity",
        opacity: e ?? 1,
        inspect() {
          return `${Ae(this.opacity, 2)}`;
        },
      };
    }
    a(gi, "opacity");
    function Dt(e) {
      if (!e) throw new Error("Please define an origin");
      return {
        id: "origin",
        origin: e,
        inspect() {
          return typeof this.origin == "string"
            ? this.origin
            : this.origin.toString();
        },
      };
    }
    a(Dt, "origin");
    function wi(e) {
      return {
        id: "z",
        z: e,
        inspect() {
          return `${this.z}`;
        },
      };
    }
    a(wi, "z");
    function Ui(e, t) {
      return {
        id: "follow",
        require: ["pos"],
        follow: { obj: e, offset: t ?? f(0) },
        add() {
          e.exists() &&
            (this.pos = this.follow.obj.pos.add(this.follow.offset));
        },
        update() {
          e.exists() &&
            (this.pos = this.follow.obj.pos.add(this.follow.offset));
        },
      };
    }
    a(Ui, "follow");
    function bi(e, t) {
      let r = typeof e == "number" ? q.fromAngle(e) : e.unit();
      return {
        id: "move",
        require: ["pos"],
        update() {
          this.move(r.scale(t));
        },
      };
    }
    a(bi, "move");
    function Dn(e = {}) {
      let t = 0,
        r = !1;
      return {
        id: "outview",
        require: ["pos", "area"],
        isOutOfView() {
          let o = f(e.offset ?? 0),
            d = new Ge(f(0, 0).sub(o), f(V(), N()).add(o));
          return !Bt(this.screenArea(), d);
        },
        onExitView(o) {
          return this.on("exitView", o);
        },
        onEnterView(o) {
          return this.on("enterView", o);
        },
        update() {
          if (this.isOutOfView()) {
            if (
              (r || (this.trigger("exitView"), (r = !0)),
              e.delay && ((t += X()), t < e.delay))
            )
              return;
            e.hide && (this.hidden = !0),
              e.pause && (this.paused = !0),
              e.destroy && this.destroy();
          } else
            r && (this.trigger("enterView"), (r = !1)),
              (t = 0),
              e.hide && (this.hidden = !1),
              e.pause && (this.paused = !1);
        },
        inspect() {
          return this.isOutOfView();
        },
      };
    }
    a(Dn, "outview");
    function yi(e = {}) {
      return {
        ...Dn({
          destroy: !0,
          onExitView: e.onCleanup,
          offset: e.offset,
          delay: e.delay,
        }),
        id: "cleanup",
      };
    }
    a(yi, "cleanup");
    function xi(e = {}) {
      let t = {};
      return {
        id: "area",
        add() {
          this.area.cursor && this.onHover(() => gn(this.area.cursor));
        },
        area: {
          shape: "rect",
          offset: e.offset ?? f(0),
          width: e.width,
          height: e.height,
          scale: e.scale ?? f(1),
          cursor: e.cursor,
        },
        isClicked() {
          return Ze() && this.isHovering();
        },
        isHovering() {
          let r = this.fixed ? H() : Un(H());
          return this.hasPoint(r);
        },
        isColliding(r) {
          if (!r.area || !r.exists()) return !1;
          let o = this.worldArea(),
            d = r.worldArea();
          return rr(o, d);
        },
        isTouching(r) {
          if (!r.area || !r.exists()) return !1;
          let o = this.worldArea(),
            d = r.worldArea();
          return Hn(o, d);
        },
        onClick(r) {
          return this.onUpdate(() => {
            this.isClicked() && r();
          });
        },
        onHover(r, o) {
          return this.onUpdate(() => {
            this.isHovering() ? r() : o && o();
          });
        },
        onCollide(r, o) {
          let d = this.onUpdate(() => this._checkCollisions(r, o)),
            s = this.on("collide", (l, h) => l.is(r) && o(l, h));
          return () => [d, s].forEach((l) => l());
        },
        hasPoint(r) {
          return Vt(this.worldArea(), r);
        },
        pushOut(r) {
          if (r === this || r.area?.shape !== "rect") return null;
          let o = this.worldArea(),
            d = r.worldArea(),
            s = lt(o, d);
          if (!re(s, f(0))) return null;
          let l = Math.min(
              Math.abs(s.p1.x),
              Math.abs(s.p2.x),
              Math.abs(s.p1.y),
              Math.abs(s.p2.y)
            ),
            h = (() => {
              switch (l) {
                case Math.abs(s.p1.x):
                  return f(l, 0);
                case Math.abs(s.p2.x):
                  return f(-l, 0);
                case Math.abs(s.p1.y):
                  return f(0, l);
                case Math.abs(s.p2.y):
                  return f(0, -l);
              }
            })();
          this.pos = this.pos.add(h);
        },
        pushOutAll() {
          g.root.every(this.pushOut);
        },
        _checkCollisions(r) {
          g.root.every(r, (o) => {
            this === o ||
              !this.exists() ||
              t[o._id] ||
              (this.isColliding(o) &&
                (this.trigger("collide", o, null), (t[o._id] = o)));
          });
          for (let o in t) {
            let d = t[o];
            this.isColliding(d) || delete t[o];
          }
        },
        worldArea() {
          let r = this.area.width ?? this.width,
            o = this.area.height ?? this.height;
          if (r == null || o == null)
            throw new Error("Failed to get area dimension");
          let d = f(this.scale ?? 1).scale(this.area.scale);
          (r *= d.x), (o *= d.y);
          let s = Ye(this.origin || dt),
            l = (this.pos ?? f(0))
              .add(this.area.offset)
              .sub(s.add(1, 1).scale(0.5).scale(r, o));
          return { shape: "rect", p1: l, p2: f(l.x + r, l.y + o) };
        },
        screenArea() {
          let r = this.worldArea();
          return this.fixed ? r : { shape: "rect", p1: tt(r.p1), p2: tt(r.p2) };
        },
      };
    }
    a(xi, "area");
    function Ie(e) {
      return {
        color: e.color,
        opacity: e.opacity,
        origin: e.origin,
        outline: e.outline,
        fixed: e.fixed,
        shader: e.shader,
        uniform: e.uniform,
      };
    }
    a(Ie, "getRenderProps");
    function Ct(e, t = {}) {
      let r = null,
        o = null;
      if (!e)
        throw new Error("Please pass the resource name or data to sprite()");
      let d = a((s, l, h, w) => {
        let m = f(1, 1);
        return (
          h && w
            ? ((m.x = h / (s.width * l.w)), (m.y = w / (s.height * l.h)))
            : h
            ? ((m.x = h / (s.width * l.w)), (m.y = m.x))
            : w && ((m.y = w / (s.height * l.h)), (m.x = m.y)),
          m
        );
      }, "calcTexScale");
      return {
        id: "sprite",
        width: 0,
        height: 0,
        frame: t.frame || 0,
        quad: t.quad || new I(0, 0, 1, 1),
        animSpeed: t.animSpeed ?? 1,
        draw() {
          !r ||
            tn({
              ...Ie(this),
              sprite: r,
              frame: this.frame,
              quad: this.quad,
              flipX: t.flipX,
              flipY: t.flipY,
              tiled: t.tiled,
              width: t.width,
              height: t.height,
            });
        },
        update() {
          if (!r) {
            let l = Jt(e);
            if (!l || !l.data) return;
            let h = l.data.frames[0].clone();
            t.quad && (h = h.scale(t.quad));
            let w = d(l.data.tex, h, t.width, t.height);
            (this.width = l.data.tex.width * h.w * w.x),
              (this.height = l.data.tex.height * h.h * w.y),
              t.anim && this.play(t.anim),
              (r = l.data),
              this.trigger("spriteLoaded", r);
          }
          if (!o) return;
          let s = r.anims[o.name];
          if (typeof s == "number") {
            this.frame = s;
            return;
          }
          if (s.speed === 0) throw new Error("Sprite anim speed cannot be 0");
          (o.timer += X() * this.animSpeed),
            o.timer >= 1 / o.speed &&
              ((o.timer = 0),
              s.from > s.to
                ? (this.frame--,
                  this.frame < s.to &&
                    (o.loop
                      ? (this.frame = s.from)
                      : (this.frame++, o.onEnd(), this.stop())))
                : (this.frame++,
                  this.frame > s.to &&
                    (o.loop
                      ? (this.frame = s.from)
                      : (this.frame--, o.onEnd(), this.stop()))));
        },
        play(s, l = {}) {
          if (!r) {
            this.on("spriteLoaded", () => {
              this.play(s, l);
            });
            return;
          }
          let h = r.anims[s];
          if (!h) throw new Error(`Anim not found: ${s}`);
          o && this.stop(),
            (o =
              typeof h == "number"
                ? {
                    name: s,
                    timer: 0,
                    loop: !1,
                    pingpong: !1,
                    speed: 0,
                    onEnd: () => {},
                  }
                : {
                    name: s,
                    timer: 0,
                    loop: l.loop ?? h.loop ?? !1,
                    pingpong: l.pingpong ?? h.pingpong ?? !1,
                    speed: l.speed ?? h.speed ?? 10,
                    onEnd: l.onEnd ?? (() => {}),
                  }),
            (this.frame = typeof h == "number" ? h : h.from),
            this.trigger("animStart", s);
        },
        stop() {
          if (!o) return;
          let s = o.name;
          (o = null), this.trigger("animEnd", s);
        },
        numFrames() {
          return r ? r.frames.length : 0;
        },
        curAnim() {
          return o?.name;
        },
        flipX(s) {
          t.flipX = s;
        },
        flipY(s) {
          t.flipY = s;
        },
        onAnimEnd(s, l) {
          return this.on("animEnd", (h) => {
            h === s && l();
          });
        },
        onAnimStart(s, l) {
          return this.on("animStart", (h) => {
            h === s && l();
          });
        },
        inspect() {
          if (typeof e == "string") return `"${e}"`;
        },
      };
    }
    a(Ct, "sprite");
    function vi(e, t = {}) {
      function r(o) {
        let d = me({
          ...Ie(o),
          text: o.text + "",
          size: o.textSize,
          font: o.font,
          width: t.width && o.width,
          align: o.align,
          letterSpacing: o.letterSpacing,
          lineSpacing: o.lineSpacing,
          transform: o.transform,
          styles: o.styles,
        });
        return (
          t.width || (o.width = d.width / (o.scale?.x || 1)),
          (o.height = d.height / (o.scale?.y || 1)),
          d
        );
      }
      return (
        a(r, "update"),
        {
          id: "text",
          text: e,
          textSize: t.size,
          font: t.font,
          width: t.width,
          height: 0,
          align: t.align,
          lineSpacing: t.lineSpacing,
          letterSpacing: t.letterSpacing,
          transform: t.transform,
          styles: t.styles,
          load() {
            r(this);
          },
          draw() {
            pe(r(this));
          },
        }
      );
    }
    a(vi, "text");
    function Ei(e, t, r = {}) {
      return {
        id: "rect",
        width: e,
        height: t,
        radius: r.radius || 0,
        draw() {
          j({
            ...Ie(this),
            width: this.width,
            height: this.height,
            radius: this.radius,
          });
        },
        inspect() {
          return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
        },
      };
    }
    a(Ei, "rect");
    function Ti(e, t) {
      return {
        id: "rect",
        width: e,
        height: t,
        draw() {
          Te({ ...Ie(this), width: this.width, height: this.height });
        },
        inspect() {
          return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
        },
      };
    }
    a(Ti, "uvquad");
    function Si(e) {
      return {
        id: "circle",
        radius: e,
        draw() {
          bt({ ...Ie(this), radius: this.radius });
        },
        inspect() {
          return `${Math.ceil(this.radius)}`;
        },
      };
    }
    a(Si, "circle");
    function Ai(e = 1, t = T(0, 0, 0)) {
      return { id: "outline", outline: { width: e, color: t } };
    }
    a(Ai, "outline");
    function Cn(e, t) {
      let r = new de();
      return (
        e && t && r.pushd(new fe(e, t)),
        {
          id: "timer",
          wait(o, d) {
            return r.pushd(new fe(o, d));
          },
          update() {
            r.forEach((o, d) => {
              o.tick(X()) && r.delete(d);
            });
          },
        }
      );
    }
    a(Cn, "timer");
    let Ri = 640,
      Di = 65536;
    function Ci(e = {}) {
      let t = 0,
        r = null,
        o = null,
        d = !0;
      return {
        id: "body",
        require: ["pos", "area"],
        jumpForce: e.jumpForce ?? Ri,
        weight: e.weight ?? 1,
        solid: e.solid ?? !0,
        update() {
          let s = !1;
          if (r) {
            let l = this.worldArea(),
              h = r.worldArea(),
              w = l.p2.y,
              m = h.p1.y,
              b = l.p1.x,
              y = l.p2.x,
              C = h.p1.x,
              W = h.p2.x;
            !r.exists() || w !== m || y < C || b > W
              ? (this.trigger("fall", r), (r = null), (o = null), (s = !0))
              : o &&
                r.pos &&
                ((this.pos = this.pos.add(r.pos.sub(o))), (o = r.pos.clone()));
          }
          if (!r) {
            let l = this.move(0, t);
            l &&
              (l.isBottom()
                ? ((r = l.target),
                  (t = 0),
                  r.pos && (o = r.pos.clone()),
                  s || (this.trigger("ground", r), (d = !0)))
                : l.isTop() && ((t = 0), this.trigger("headbutt", l.target))),
              (t += An() * this.weight * X()),
              (t = Math.min(t, e.maxVel ?? Di));
          }
        },
        curPlatform() {
          return r;
        },
        isGrounded() {
          return r !== null;
        },
        isFalling() {
          return t > 0;
        },
        jump(s) {
          (r = null), (o = null), (t = -s || -this.jumpForce);
        },
        doubleJump(s) {
          this.isGrounded()
            ? this.jump(s)
            : d && ((d = !1), this.jump(s), this.trigger("doubleJump"));
        },
        onGround(s) {
          return this.on("ground", s);
        },
        onFall(s) {
          return this.on("fall", s);
        },
        onHeadbutt(s) {
          return this.on("headbutt", s);
        },
        onDoubleJump(s) {
          return this.on("doubleJump", s);
        },
      };
    }
    a(Ci, "body");
    function Li(e, t = {}) {
      return { id: "shader", shader: e, uniform: t };
    }
    a(Li, "shader");
    function Mi() {
      return { id: "solid", require: ["area"], solid: !0 };
    }
    a(Mi, "solid");
    function Wi() {
      return { id: "fixed", fixed: !0 };
    }
    a(Wi, "fixed");
    function Ln() {
      return { id: "stay", stay: !0 };
    }
    a(Ln, "stay");
    function qi(e) {
      if (e == null)
        throw new Error("health() requires the initial amount of hp");
      return {
        id: "health",
        hurt(t = 1) {
          this.setHP(e - t), this.trigger("hurt");
        },
        heal(t = 1) {
          this.setHP(e + t), this.trigger("heal");
        },
        hp() {
          return e;
        },
        setHP(t) {
          (e = t), e <= 0 && this.trigger("death");
        },
        onHurt(t) {
          return this.on("hurt", t);
        },
        onHeal(t) {
          return this.on("heal", t);
        },
        onDeath(t) {
          return this.on("death", t);
        },
        inspect() {
          return `${e}`;
        },
      };
    }
    a(qi, "health");
    function Pi(e, t = {}) {
      if (e == null) throw new Error("lifespan() requires time");
      let r = 0,
        o = t.fade ?? 0,
        d = Math.max(e - o, 0);
      return {
        id: "lifespan",
        update() {
          (r += X()),
            r >= d && (this.opacity = ut(r, d, e, 1, 0)),
            r >= e && this.destroy();
        },
      };
    }
    a(Pi, "lifespan");
    function Fi(e, t, r) {
      if (!e) throw new Error("state() requires an initial state");
      let o = {};
      function d(w) {
        o[w] ||
          (o[w] = {
            enter: new Z(),
            leave: new Z(),
            update: new Z(),
            draw: new Z(),
          });
      }
      a(d, "initStateEvents");
      function s(w, m, b) {
        return d(m), o[m][w].add(b);
      }
      a(s, "on");
      function l(w, m, ...b) {
        d(m), o[m][w].trigger(...b);
      }
      a(l, "trigger");
      let h = !1;
      return {
        id: "state",
        state: e,
        enterState(w, ...m) {
          if (((h = !0), t && !t.includes(w)))
            throw new Error(`State not found: ${w}`);
          let b = this.state;
          if (r) {
            if (!r?.[b]) return;
            let y = typeof r[b] == "string" ? [r[b]] : r[b];
            if (!y.includes(w))
              throw new Error(
                `Cannot transition state from "${b}" to "${w}". Available transitions: ${y
                  .map((C) => `"${C}"`)
                  .join(", ")}`
              );
          }
          l("leave", b, ...m),
            (this.state = w),
            l("enter", w, ...m),
            l("enter", `${b} -> ${w}`, ...m);
        },
        onStateTransition(w, m, b) {
          return s("enter", `${w} -> ${m}`, b);
        },
        onStateEnter(w, m) {
          return s("enter", w, m);
        },
        onStateUpdate(w, m) {
          return s("update", w, m);
        },
        onStateDraw(w, m) {
          return s("draw", w, m);
        },
        onStateLeave(w, m) {
          return s("leave", w, m);
        },
        update() {
          h || (l("enter", e), (h = !0)), l("update", this.state);
        },
        draw() {
          l("draw", this.state);
        },
        inspect() {
          return this.state;
        },
      };
    }
    a(Fi, "state");
    function it(e) {
      x.loaded ? e() : g.ev.on("load", e);
    }
    a(it, "onLoad");
    function Oi(e, t) {
      g.scenes[e] = t;
    }
    a(Oi, "scene");
    function Ii(e, ...t) {
      if (!g.scenes[e]) throw new Error(`Scene not found: ${e}`);
      g.ev.onOnce("frameEnd", () => {
        (g.ev = new he()),
          (g.objEvents = new he()),
          g.root.every((r) => {
            r.stay || g.root.remove(r);
          }),
          g.root.clearEvents(),
          (g.timers = new de()),
          (g.cam = {
            pos: st(),
            scale: f(1),
            angle: 0,
            shake: 0,
            transform: new M(),
          }),
          (g.gravity = yr),
          g.scenes[e](...t),
          i.debug !== !1 && Tn(),
          i.burp && Sn();
      });
    }
    a(Ii, "go");
    function Bi(e, t) {
      try {
        return JSON.parse(window.localStorage[e]);
      } catch {
        return t ? (Mn(e, t), t) : null;
      }
    }
    a(Bi, "getData");
    function Mn(e, t) {
      window.localStorage[e] = JSON.stringify(t);
    }
    a(Mn, "setData");
    function Wn(e) {
      let t = e(Re);
      for (let r in t) (Re[r] = t[r]), i.global !== !1 && (window[r] = t[r]);
      return Re;
    }
    a(Wn, "plug");
    function st() {
      return f(V() / 2, N() / 2);
    }
    a(st, "center");
    function Vi(e, t) {
      return {
        id: "grid",
        gridPos: t.clone(),
        setGridPos(...r) {
          let o = f(...r);
          (this.gridPos = o.clone()),
            (this.pos = f(
              e.offset().x + this.gridPos.x * e.gridWidth(),
              e.offset().y + this.gridPos.y * e.gridHeight()
            ));
        },
        moveLeft() {
          this.setGridPos(this.gridPos.add(f(-1, 0)));
        },
        moveRight() {
          this.setGridPos(this.gridPos.add(f(1, 0)));
        },
        moveUp() {
          this.setGridPos(this.gridPos.add(f(0, -1)));
        },
        moveDown() {
          this.setGridPos(this.gridPos.add(f(0, 1)));
        },
      };
    }
    a(Vi, "grid");
    function _i(e, t) {
      if (!t.width || !t.height)
        throw new Error("Must provide level grid width & height.");
      let r = [],
        o = f(t.pos || f(0)),
        d = 0,
        s = {
          offset() {
            return o.clone();
          },
          gridWidth() {
            return t.width;
          },
          gridHeight() {
            return t.height;
          },
          getPos(...l) {
            let h = f(...l);
            return f(o.x + h.x * t.width, o.y + h.y * t.height);
          },
          spawn(l, ...h) {
            let w = f(...h),
              m = (() => {
                if (t[l]) {
                  if (typeof t[l] != "function")
                    throw new Error(
                      "Level symbol def must be a function returning a component list"
                    );
                  return t[l](w);
                } else if (t.any) return t.any(l, w);
              })();
            if (!m) return;
            let b = f(o.x + w.x * t.width, o.y + w.y * t.height);
            for (let C of m)
              if (C.id === "pos") {
                (b.x += C.pos.x), (b.y += C.pos.y);
                break;
              }
            m.push(Rt(b)), m.push(Vi(this, w));
            let y = g.root.add(m);
            return r.push(y), y;
          },
          width() {
            return d * t.width;
          },
          height() {
            return e.length * t.height;
          },
          destroy() {
            for (let l of r) l.destroy();
          },
        };
      return (
        e.forEach((l, h) => {
          let w = l.split("");
          (d = Math.max(w.length, d)),
            w.forEach((m, b) => {
              s.spawn(m, f(b, h));
            });
        }),
        s
      );
    }
    a(_i, "addLevel");
    function qn(e) {
      let t = u.canvas.captureStream(e),
        r = R.ctx.createMediaStreamDestination();
      R.masterNode.connect(r);
      let o = new MediaRecorder(t),
        d = [];
      return (
        (o.ondataavailable = (s) => {
          s.data.size > 0 && d.push(s.data);
        }),
        (o.onerror = () => {
          R.masterNode.disconnect(r), t.getTracks().forEach((s) => s.stop());
        }),
        o.start(),
        {
          resume() {
            o.resume();
          },
          pause() {
            o.pause();
          },
          stop() {
            return (
              o.stop(),
              R.masterNode.disconnect(r),
              t.getTracks().forEach((s) => s.stop()),
              new Promise((s) => {
                o.onstop = () => {
                  s(new Blob(d, { type: "video/mp4" }));
                };
              })
            );
          },
          download(s = "kaboom.mp4") {
            this.stop().then((l) => kt(s, l));
          },
        }
      );
    }
    a(qn, "record");
    function Ni() {
      return document.activeElement === u.canvas;
    }
    a(Ni, "isFocused");
    let Pn = g.root.add.bind(g.root),
      ki = g.root.readd.bind(g.root),
      Gi = g.root.remove.bind(g.root),
      ji = g.root.removeAll.bind(g.root),
      Xi = g.root.get.bind(g.root),
      $i = g.root.every.bind(g.root),
      Yi = g.root.revery.bind(g.root);
    function Fn(e = 2, t = 1) {
      let r = 0;
      return {
        id: "explode",
        require: ["scale"],
        update() {
          let o = Math.sin(r * e) * t;
          o < 0 && this.destroy(), (this.scale = f(o)), (r += X());
        },
      };
    }
    a(Fn, "explode");
    let Ki = ve(null, fr),
      Hi = ve(null, mr);
    function zi(e, t = {}) {
      let r = Pn([Rt(e), Ln()]),
        o = (t.speed || 1) * 5,
        d = t.scale || 1;
      r.add([
        Ct(Hi),
        rt(0),
        Dt("center"),
        Fn(o, d),
        ...(t.boomComps ?? (() => []))(),
      ]);
      let s = r.add([
        Ct(Ki),
        rt(0),
        Dt("center"),
        Cn(0.4 / o, () => s.use(Fn(o, d))),
        ...(t.kaComps ?? (() => []))(),
      ]);
      return s.onDestroy(() => r.destroy()), r;
    }
    a(zi, "addKaboom");
    function On() {
      g.timers.forEach((e, t) => {
        (e.time -= X()), e.time <= 0 && (e.action(), g.timers.delete(t));
      }),
        g.root.update();
    }
    a(On, "updateFrame");
    function Qi() {
      let e = g.cam,
        t = q.fromAngle(je(0, 360)).scale(e.shake);
      (e.shake = _e(e.shake, 0, 5 * X())),
        (e.transform = new M()
          .translate(st())
          .scale(e.scale)
          .rotateZ(e.angle)
          .translate(e.pos.scale(-1).add(t))),
        g.root.draw(),
        ie();
    }
    a(Qi, "drawFrame");
    function Ji() {
      let e = ee();
      se(() => {
        let t = V() / 2,
          r = 24,
          o = f(V() / 2, N() / 2).sub(f(t / 2, r / 2));
        j({ pos: f(0), width: V(), height: N(), color: T(0, 0, 0) }),
          j({ pos: o, width: t, height: r, fill: !1, outline: { width: 4 } }),
          j({ pos: o, width: t * e, height: r });
      }),
        g.ev.trigger("loading", e);
    }
    a(Ji, "drawLoadScreen");
    function In(e, t) {
      se(() => {
        let r = f(8);
        te(), O(e);
        let o = me({
            text: t,
            font: ht,
            size: 16,
            pos: r,
            color: T(255, 255, 255),
            fixed: !0,
          }),
          d = o.width + r.x * 2,
          s = o.height + r.x * 2;
        e.x + d >= V() && O(f(-d, 0)),
          e.y + s >= N() && O(f(0, -s)),
          j({
            width: d,
            height: s,
            color: T(0, 0, 0),
            radius: 4,
            opacity: 0.8,
            fixed: !0,
          }),
          pe(o),
          K();
      });
    }
    a(In, "drawInspectText");
    function Zi() {
      if (A.inspect) {
        let e = null,
          t = v.fromArray(i.inspectColor ?? [0, 0, 255]);
        if (
          (g.root.every((r) => {
            if (!r.area || r.hidden) return;
            e || (r.isHovering() && (e = r));
            let o = e === r ? 8 : 4,
              d = r.worldArea(),
              s = d.p2.x - d.p1.x,
              l = d.p2.y - d.p1.y;
            j({
              pos: d.p1,
              width: s,
              height: l,
              outline: { width: o, color: t },
              fill: !1,
              fixed: r.fixed,
            });
          }),
          e)
        ) {
          let r = [],
            o = e.inspect();
          for (let d in o) o[d] ? r.push(`${d}: ${o[d]}`) : r.push(`${d}`);
          In(
            Hr(H()),
            r.join(`
`)
          );
        }
        In(f(8), `FPS: ${A.fps()}`);
      }
      A.paused &&
        se(() => {
          te(), O(V(), 0), O(-8, 8);
          let e = 32;
          j({
            width: e,
            height: e,
            origin: "topright",
            color: T(0, 0, 0),
            opacity: 0.8,
            radius: 4,
            fixed: !0,
          });
          for (let t = 1; t <= 2; t++)
            j({
              width: 4,
              height: e * 0.6,
              origin: "center",
              pos: f((-e / 3) * t, e * 0.5),
              color: T(255, 255, 255),
              radius: 2,
              fixed: !0,
            });
          K();
        }),
        A.timeScale !== 1 &&
          se(() => {
            te(), O(V(), N()), O(-8, -8);
            let e = 8,
              t = me({
                text: A.timeScale.toFixed(1),
                font: ht,
                size: 16,
                color: T(255, 255, 255),
                pos: f(-e),
                origin: "botright",
                fixed: !0,
              });
            j({
              width: t.width + e * 2 + e * 4,
              height: t.height + e * 2,
              origin: "botright",
              color: T(0, 0, 0),
              opacity: 0.8,
              radius: 4,
              fixed: !0,
            });
            for (let r = 0; r < 2; r++) {
              let o = A.timeScale < 1;
              rn({
                p1: f(-t.width - e * (o ? 2 : 3.5), -e),
                p2: f(-t.width - e * (o ? 2 : 3.5), -e - t.height),
                p3: f(-t.width - e * (o ? 3.5 : 2), -e - t.height / 2),
                pos: f(-r * e * 1 + (o ? -e * 0.5 : 0), 0),
                color: T(255, 255, 255),
                fixed: !0,
              });
            }
            pe(t), K();
          }),
        A.curRecording &&
          se(() => {
            te(),
              O(0, N()),
              O(24, -24),
              bt({
                radius: 12,
                color: T(255, 0, 0),
                opacity: qt(0, 1, St() * 4),
                fixed: !0,
              }),
              K();
          }),
        A.showLog &&
          g.logs.length > 0 &&
          se(() => {
            te(), O(0, N()), O(8, -8);
            let e = 8,
              t = i.logMax ?? Os;
            g.logs.length > t && (g.logs = g.logs.slice(0, t));
            let r = me({
              text: g.logs.join(`
`),
              font: ht,
              pos: f(e, -e),
              origin: "botleft",
              size: 16,
              width: V() * 0.6,
              lineSpacing: e / 2,
              fixed: !0,
              styles: {
                time: { color: T(127, 127, 127) },
                info: { color: T(255, 255, 255) },
                error: { color: T(255, 0, 127) },
              },
            });
            j({
              width: r.width + e * 2,
              height: r.height + e * 2,
              origin: "botleft",
              color: T(0, 0, 0),
              radius: 4,
              opacity: 0.8,
              fixed: !0,
            }),
              pe(r),
              K();
          });
    }
    a(Zi, "drawDebug"), i.debug !== !1 && Tn(), i.burp && Sn();
    function es(e) {
      g.ev.on("loading", e);
    }
    a(es, "onLoading");
    function ts(e) {
      g.ev.on("error", e);
    }
    a(ts, "onError");
    function Bn(e) {
      Vn(() => {
        se(() => {
          let o = V(),
            d = N(),
            s = {
              size: 24,
              width: o - 32 * 2,
              letterSpacing: 4,
              lineSpacing: 4,
              font: ht,
            };
          j({ width: o, height: d, color: T(0, 0, 255) });
          let l = me({ ...s, text: e.name, pos: f(32), color: T(255, 128, 0) });
          pe(l),
            cn({ ...s, text: e.message, pos: f(32, 32 + l.height + 16) }),
            K(),
            g.ev.trigger("error", e);
        });
      });
    }
    a(Bn, "handleErr");
    function Vn(e) {
      u.loopID !== null && cancelAnimationFrame(u.loopID);
      let t = a((r) => {
        if (u.stopped) return;
        if (document.visibilityState !== "visible") {
          u.loopID = requestAnimationFrame(t);
          return;
        }
        let o = r / 1e3,
          d = o - u.realTime;
        (u.realTime = o),
          u.skipTime || ((u.dt = d), (u.time += X()), u.fpsCounter.tick(u.dt)),
          (u.skipTime = !1),
          u.numFrames++,
          Br(),
          e(),
          Vr();
        for (let s in u.keyStates) u.keyStates[s] = Sr(u.keyStates[s]);
        for (let s in u.mouseStates) u.mouseStates[s] = Sr(u.mouseStates[s]);
        (u.charInputted = []),
          (u.isMouseMoved = !1),
          (u.isKeyPressed = !1),
          (u.isKeyPressedRepeat = !1),
          (u.isKeyReleased = !1),
          (u.loopID = requestAnimationFrame(t)),
          g.ev.trigger("frameEnd");
      }, "frame");
      t(0);
    }
    a(Vn, "run");
    function ns() {
      g.ev.onOnce("frameEnd", () => {
        (u.stopped = !0),
          c.clear(
            c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT | c.STENCIL_BUFFER_BIT
          );
        let e = c.getParameter(c.MAX_TEXTURE_IMAGE_UNITS);
        for (let t = 0; t < e; t++)
          c.activeTexture(c.TEXTURE0 + t),
            c.bindTexture(c.TEXTURE_2D, null),
            c.bindTexture(c.TEXTURE_CUBE_MAP, null);
        c.bindBuffer(c.ARRAY_BUFFER, null),
          c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, null),
          c.bindRenderbuffer(c.RENDERBUFFER, null),
          c.bindFramebuffer(c.FRAMEBUFFER, null),
          n.forEach((t) => t()),
          c.deleteBuffer(p.vbuf),
          c.deleteBuffer(p.ibuf);
        for (let t in k) u.canvas.removeEventListener(t, k[t]);
        for (let t in Fe) document.removeEventListener(t, Fe[t]);
        for (let t in ge) window.removeEventListener(t, ge[t]);
      });
    }
    a(ns, "quit"),
      ne("apl386", ar, 45, 74),
      ne("apl386o", ur, 45, 74),
      ne("sink", cr, 6, 8, {
        chars:
          "\u2588\u263A\u263B\u2665\u2666\u2663\u2660\u25CF\u25CB\u25AA\u25A1\u25A0\u25D8\u266A\u266B\u2261\u25BA\u25C4\u2302\xDE\xC0\xDF\xD7\xA5\u2191\u2193\u2192\u2190\u25CC\u25CF\u25BC\u25B2 !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u03A7\u2591\u2592\u2593\u1E00\u1E01\u1E02\u2502\u252C\u2524\u250C\u2510\u1E03\u1E04\u253C\u1E05\u1E06\u1E07\u1E08\u1E09\u1E0A\u1E0B\u1E0C\u2500\u251C\u2534\u2514\u2518\u1E0D\u1E0E\u205E\u1E0F\u1E10\u1E11\u1E12\u1E13\u1E14\u1E15\u1E16\u1E17\u1E18\u2584\u1E19\u1E1A\u1E1B\u1E1C\u2026\u1E1D\u1E1E\u1E1F\u1E20\u1E21\u1E22\u1E23\u1E24\u1E25\u1E26\u258C\u2590\u1E27\u1E28\u1E29\u1E2A\u1E2B\u1E2C\u1E2D\u1E2E\u1E2F\u1E30\u1E31\u1E32\u1E33\u1E34\u1E35\u1E36\u1E37\u1E38\u1E39\u1E3A\u1E3B\u1E3C\u1E3D\u1E3E\u1E3F\u1E40\u1E41\u1E42\u1E43\u1E44\u1E45\u1E46\u1E47\u1E48\u1E49\u1E4A\u1E4B\u1E4C\u1E4D\u1E4E\u1E4F\u1E50\u1E51\u1E52\u1E53\u1E54\u1E55\u1E56\u1E57\u1E58\u1E59\u1E5A\u1E5B\u1E5C\u1E5D\u1E5E\u1E5F\u1E60\u1E61\u1E62\u1E63\u1E64\u1E65\u1E66\u1E67\u1E68\u1E69\u1E6A\u1E6B\u1E6C\u1E6D\u1E6E\u1E6F\u1E70\u1E71\u1E72\u1E73\u1E74\u1E75\u1E76\u1E77\u1E78\u1E79\u1E7A\u1E7B\u1E7C",
      }),
      ne("sinko", lr, 8, 10),
      Vn(() => {
        ln();
        let e = ee();
        x.loaded || (e === 1 && ((x.loaded = !0), g.ev.trigger("load"))),
          !x.loaded && i.loadingScreen !== !1
            ? Ji()
            : (g.ev.trigger("input"),
              A.paused || On(),
              Qi(),
              i.debug !== !1 && Zi());
      });
    let Re = {
      loadRoot: Ke,
      loadProgress: ee,
      loadSprite: ve,
      loadSpriteAtlas: Yt,
      loadSound: Mr,
      loadBitmapFont: ne,
      loadFont: gt,
      loadShader: Lr,
      loadAseprite: Cr,
      loadPedit: Dr,
      loadBean: Wr,
      load: Me,
      getSprite: Kt,
      getSound: Ht,
      getFont: qr,
      getBitmapFont: zt,
      getShader: Qt,
      Asset: P,
      SpriteData: S,
      SoundData: D,
      width: V,
      height: N,
      center: st,
      dt: X,
      time: St,
      screenshot: pn,
      record: qn,
      isFocused: Ni,
      cursor: gn,
      fullscreen: Qr,
      isFullscreen: wn,
      onLoad: it,
      onLoading: es,
      onError: ts,
      isTouch: () => u.isTouch,
      camPos: Jr,
      camScale: Zr,
      camRot: ei,
      shake: ti,
      toScreen: tt,
      toWorld: Un,
      gravity: An,
      add: Pn,
      make: At,
      destroy: Gi,
      destroyAll: ji,
      get: Xi,
      every: $i,
      revery: Yi,
      readd: ki,
      pos: Rt,
      scale: rt,
      rotate: mi,
      color: pi,
      opacity: gi,
      origin: Dt,
      area: xi,
      sprite: Ct,
      text: vi,
      rect: Ei,
      circle: Si,
      uvquad: Ti,
      outline: Ai,
      body: Ci,
      shader: Li,
      timer: Cn,
      solid: Mi,
      fixed: Wi,
      stay: Ln,
      health: qi,
      lifespan: Pi,
      z: wi,
      move: bi,
      outview: Dn,
      cleanup: yi,
      follow: Ui,
      state: Fi,
      on: Oe,
      onUpdate: nt,
      onDraw: ni,
      onCollide: ri,
      onClick: ii,
      onHover: si,
      onKeyDown: yn,
      onKeyPress: z,
      onKeyPressRepeat: xn,
      onKeyRelease: vn,
      onMouseDown: ai,
      onMousePress: En,
      onMouseRelease: ui,
      onMouseMove: ci,
      onCharInput: li,
      onTouchStart: di,
      onTouchMove: hi,
      onTouchEnd: fi,
      mousePos: H,
      mouseDeltaPos: dn,
      isKeyDown: mn,
      isKeyPressed: et,
      isKeyPressedRepeat: fn,
      isKeyReleased: Tt,
      isMouseDown: vt,
      isMousePressed: Ze,
      isMouseReleased: Et,
      isMouseMoved: hn,
      loop: oi,
      wait: bn,
      play: We,
      volume: Or,
      burp: en,
      audioCtx: R.ctx,
      Timer: fe,
      Line: ue,
      Rect: Ge,
      Circle: at,
      Vec2: q,
      Color: v,
      Mat4: M,
      Quad: I,
      RNG: ke,
      rand: je,
      randi: Pt,
      randSeed: $n,
      vec2: f,
      rgb: T,
      hsl2rgb: jn,
      quad: Xn,
      choose: Kn,
      chance: Yn,
      lerp: _e,
      map: ut,
      mapc: Gn,
      wave: qt,
      deg2rad: ce,
      rad2deg: Wt,
      testLineLine: ae,
      testRectRect: Ft,
      testRectLine: ct,
      testRectPoint: re,
      drawSprite: tn,
      drawText: cn,
      formatText: me,
      drawRect: j,
      drawLine: Pe,
      drawLines: nn,
      drawTriangle: rn,
      drawCircle: bt,
      drawEllipse: sn,
      drawUVQuad: Te,
      drawPolygon: Se,
      drawFormattedText: pe,
      drawMasked: $r,
      drawSubtracted: Yr,
      pushTransform: te,
      popTransform: K,
      pushTranslate: O,
      pushScale: Qe,
      pushRotate: jr,
      pushRotateX: kr,
      pushRotateY: Gr,
      pushRotateZ: Ee,
      pushMatrix: Nr,
      debug: A,
      scene: Oi,
      go: Ii,
      addLevel: _i,
      getData: Bi,
      setData: Mn,
      download: Xe,
      downloadJSON: sr,
      downloadText: Nt,
      downloadBlob: kt,
      plug: Wn,
      ASCII_CHARS: wr,
      CP437_CHARS: Ls,
      canvas: u.canvas,
      addKaboom: zi,
      LEFT: q.LEFT,
      RIGHT: q.RIGHT,
      UP: q.UP,
      DOWN: q.DOWN,
      RED: v.RED,
      GREEN: v.GREEN,
      BLUE: v.BLUE,
      YELLOW: v.YELLOW,
      MAGENTA: v.MAGENTA,
      CYAN: v.CYAN,
      WHITE: v.WHITE,
      BLACK: v.BLACK,
      quit: ns,
    };
    if ((i.plugins && i.plugins.forEach(Wn), i.global !== !1))
      for (let e in Re) window[e] = Re[e];
    return Re;
  }, "default");
  return hs($s);
})();
window.kaboom = kaboom.default;
//# sourceMappingURL=kaboom.js.map
