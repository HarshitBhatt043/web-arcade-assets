(collide = new FruitGame.Collide()),
  new Laya.Vector2(0, 0),
  (collideTest = function () {
    if (g_GameData.gameState != GAME_END)
      for (
        var i,
          o,
          t,
          s,
          e,
          a,
          n,
          l,
          p,
          r,
          c = fruitSystem.getParticles(),
          y = bombSystem.getParticles(),
          f = bladeSystem.getParticles(),
          u = f.length;
        u-- > 1;

      ) {
        for (var h in ((b = f[u]), (d = f[u - 1]), c))
          (i = c[h]).life > 0 &&
            (i.bCut > 0
              ? i.bCut--
              : collide.lineInEllipse(
                  [b.position.x, b.position.y],
                  [d.position.x, d.position.y],
                  [i.position.x, i.position.y],
                  i.radius
                ) &&
                cutFruit(
                  i,
                  ((t = b.position.x),
                  (s = b.position.y),
                  (e = d.position.x),
                  (a = d.position.y),
                  (n = Math.abs(t - e)),
                  (p =
                    (l = Math.abs(s - a)) /
                    Math.sqrt(Math.pow(n, 2) + Math.pow(l, 2))),
                  (r = Math.acos(p)),
                  Math.floor(180 / (Math.PI / r)))
                ));
        for (var M in y)
          if ((o = y[M]).life > 0) {
            var b = f[u],
              d = f[u - 1];
            collide.lineInEllipse(
              [b.position.x, b.position.y],
              [d.position.x, d.position.y],
              [o.position.x, o.position.y],
              o.radius
            ) && cutBomb(o);
          }
      }
  });
