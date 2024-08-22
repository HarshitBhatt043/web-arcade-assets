!(function () {
  (curThrowTimes = 0),
    (maxThrowTimes = [15, 0]),
    (intervalThrow = [
      [2.8, 2.8, 2.8, 2.8, 2.8, 2.8, 2.8, 2.6, 2.8, 2.6, 2.6, 2.6, 2.6, 2.8, 3],
    ]),
    (throwArr = [
      [
        [1],
        [1],
        [2],
        [2],
        [[1, 2], 0],
        [2],
        [[1, 2], 0],
        [2],
        [6, 0, [-12, 6, 450]],
        [[1, 3], 0],
        [[2, 4]],
        [[2, 4]],
        [[1, 4], 0],
        [8, 0, [12, -4, 450]],
      ],
    ]),
    (throwClassicFruitWithTimes = function (e) {
      if ((console.log("波次=", e), !throwArr))
        return (
          (curThrowTimes = maxThrowTimes),
          void console.error("未找到出水果配置")
        );
      if (!throwArr[g_GameData.model - 1])
        return (
          (curThrowTimes = maxThrowTimes),
          void console.error("未发现模式", g_GameData.model, "配置")
        );
      var t = throwArr[g_GameData.model - 1][e];
      if (!t)
        return (
          (curThrowTimes = maxThrowTimes),
          void console.error(
            "配置异常！",
            "模式=",
            g_GameData.model,
            "波次=",
            e
          )
        );
      console.log("本波配置为", g_GameData.model, e, t);
      var o = t[0],
        a = t[1],
        i = t[2];
      (o = "number" == typeof o ? o : Math.random() * (o[1] - o[0] + 1) + o[0]),
        r(o, a, i);
    });
  var r = function (r, t = 0, o = null) {
      if ((Math.random() < t && (throwBomb(), r--), o))
        for (var a = o[0], i = o[1], m = o[2], n = 0; n < r; n++) {
          var s = m * n,
            h = a + i * n;
          Laya.timer.once(
            s,
            this,
            function (r) {
              g_GameData.gameState == GAME_PLAYING && e(r);
            },
            [h]
          );
        }
      else for (n = 0; n < r; n++) throwFruit(1);
      SoundManager.playSound("sound/throw-fruit.mp3", 1);
    },
    e = function (r) {
      var e = g_AssetsMgr.getRandomFruit(1),
        t = fruitSystem.createParticle(FruitGame.Fruit);
      (t.config = null),
        t.init(
          0.5 * Laya.stage.width,
          gameHeight + e.w.height,
          1 / 0,
          e.w,
          g_AssetsMgr.shadow,
          middleContext
        ),
        t.velocity.reset(0, -18),
        t.velocity.rotate(r),
        t.damp.reset(0, 0),
        (gravity.y += Math.random() / (Math.random() > 0.5 ? 10 : -7)),
        t.addForce("g", gravity),
        t.addEventListener("dead", missHandler),
        (t.textureObj = e),
        (t.bottomY = gameHeight + e.w.height),
        (t.bCut = 0),
        (t.scale = fruitSize);
    };
})();
