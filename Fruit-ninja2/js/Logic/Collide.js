FruitGame.Collide = function () {
  function n(n) {
    return n * n;
  }
  function r(n) {
    return n < 0 ? -1 : n > 0 ? 1 : 0;
  }
  this.lineInEllipse = function (t, i, u, e, f) {
    var l = (function (t, i, u, e, f) {
      if (!(e <= 0)) {
        var l,
          o = e,
          c = e * (f = void 0 === f ? 1 : f);
        if (
          ((a = n(c) * n(t[0] - i[0]) + n(o) * n(t[1] - i[1])),
          !(a <= 0) &&
            ((b =
              2 * n(c) * (i[0] - t[0]) * (t[0] - u[0]) +
              2 * n(o) * (i[1] - t[1]) * (t[1] - u[1])),
            (u = n(c) * n(t[0] - u[0]) + n(o) * n(t[1] - u[1]) - n(o) * n(c)),
            (l = (function (n, r, t) {
              if (0 != n) {
                var i = r * r - 4 * n * t;
                return 0 == i
                  ? [(-1 * r) / (2 * n), (-1 * r) / (2 * n)]
                  : i > 0
                  ? [
                      (-1 * r + Math.sqrt(i)) / (2 * n),
                      (-1 * r - Math.sqrt(i)) / (2 * n),
                    ]
                  : void 0;
              }
            })(a, b, u))))
        ) {
          var v = [
            [t[0] + l[0] * (i[0] - t[0]), t[1] + l[0] * (i[1] - t[1])],
            [t[0] + l[1] * (i[0] - t[0]), t[1] + l[1] * (i[1] - t[1])],
          ];
          return (
            (r(v[0][0] - t[0]) * r(v[0][0] - i[0]) <= 0 &&
              r(v[0][1] - t[1]) * r(v[0][1] - i[1]) <= 0) ||
              (v[0] = null),
            (r(v[1][0] - t[0]) * r(v[1][0] - i[0]) <= 0 &&
              r(v[1][1] - t[1]) * r(v[1][1] - i[1]) <= 0) ||
              (v[1] = null),
            v
          );
        }
      }
    })(t, i, u, e, f);
    return l && (l[0] || l[1]);
  };
};
