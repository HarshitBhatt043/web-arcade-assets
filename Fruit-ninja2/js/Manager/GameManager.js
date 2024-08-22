FruitGame.GameManager = function () {
  function e() {
    if (g_GameData.model == GameModel.ARCADE) return Math.random() < 0.1;
    var e = 0.1 + 10 * g_GameData.gameLevel * 0.005;
    return e > 0.2 && (e = 0.2), Math.random() < e;
  }
  (this.Init = function () {
    g_WxMgr.bWx && g_WxMgr.Init(),
      (g_GameData = []),
      (g_PlayerData = []),
      (g_SceneMgr = new FruitGame.SceneManager()),
      g_SceneMgr.Init(),
      (g_NetWorkMgr = new FruitGame.NetWorkManager()),
      g_NetWorkMgr.GetPlayerData(),
      this.setKnifeEff(),
      (particleSystem = new SPP.ParticleSystem()),
      (bladeSystem = new SPP.ParticleSystem()),
      (fruitSystem = new SPP.ParticleSystem()),
      (bombSystem = new SPP.ParticleSystem()),
      particleSystem.start(),
      bladeSystem.start(),
      fruitSystem.start(),
      bombSystem.start(),
      (gravity = new SPP.Force()),
      gravity.init(0, 0.27),
      (gravityL = new SPP.Force()),
      gravityL.init(-0.07, 0.11),
      (gravityR = new SPP.Force()),
      gravityR.init(0.07, 0.11),
      (gravityU = new SPP.Force()),
      gravityU.init(0, 0.02),
      (g_GameData.gameState = GAME_READY),
      (g_PlayerData.curMoney = 0),
      (g_PlayerData.curScore = 0),
      (g_PlayerData.Hp = 3),
      (ui_gamelifeTexture = g_AssetsMgr["gamelife-3"]),
      (g_GameData.gameLevel = 0.1),
      g(),
      Laya.stage.on(Laya.Event.MOUSE_MOVE, this, t),
      Laya.stage.on(Laya.Event.MOUSE_DOWN, this, r),
      Laya.stage.on(Laya.Event.MOUSE_UP, this, i),
      g_SceneMgr.ChangeScene("StartPanel");
  }),
    (this.resetGameData = function () {
      (g_GameData.gameState = GAME_READY),
        (g_GameData.totalTime = 0),
        (g_PlayerData.reliveTimes =
          PlatformAPI.createReliveVideoAd &&
          PlatformAPI.getVideoAdPlayInfoToday("Relive").valid),
        (g_PlayerData.curMoney = 0),
        (g_PlayerData.curDiamond = 0),
        (g_PlayerData.curScore = 0),
        (g_PlayerData.Hp = 3),
        (ui_gamelifeTexture = g_AssetsMgr["gamelife-3"]),
        (g_GameData.gameLevel = 0.1),
        (slowdown = 1),
        (bDoublescore = 0),
        (bDoublecombo = 0),
        (doubleComboTimes = 0),
        (doubleScoreTimes = 0),
        (CutNum = 0),
        (CutPoint = null),
        (LastCutTime = 0),
        (BuffList = []),
        (wThrowFruit = 0),
        (curThrowTimes = 0),
        (g_PlayerData.hasGift = 0),
        (g_GameData.RedbagTime = 0);
    }),
    (this.saveGameData = function () {
      (g_PlayerData.money += parseInt(g_PlayerData.curMoney)),
        localStorage.setItem("money", g_PlayerData.money),
        (g_PlayerData.diamond += parseInt(g_PlayerData.curDiamond)),
        localStorage.setItem("diamond", g_PlayerData.diamond),
        g_PlayerData.curScore > g_PlayerData.highScore &&
          ((g_PlayerData.highScore = g_PlayerData.curScore),
          localStorage.setItem("highScore", g_PlayerData.curScore));
      var e = localStorage.getItem("weekScore")
        ? JSON.parse(localStorage.getItem("weekScore"))
        : { score: 0, time: new Date().getTime() };
      function a() {
        g_WxMgr.SendUserData({ score: g_PlayerData.curScore }),
          localStorage.setItem(
            "weekScore",
            JSON.stringify({ score: g_PlayerData.curScore, time: o })
          );
      }
      var t,
        r,
        i,
        n,
        o = new Date().getTime();
      (t = e.time),
        (r = o),
        (i = parseInt(t / 864e5)),
        (n = parseInt(r / 864e5)),
        parseInt((i + 4) / 7) == parseInt((n + 4) / 7)
          ? g_PlayerData.curScore > e.score && a()
          : a();
    }),
    (this.setKnifeEff = function () {
      if (knifeConfig[g_PlayerData.knife]) {
        trailing && trailing.parent && trailing.parent.removeChild(trailing),
          (bladeColor = knifeConfig[g_PlayerData.knife].color);
        var e = knifeConfig[g_PlayerData.knife].src;
        if (e) {
          (trailing = Laya.Sprite3D.load(e)), scene.addChild(trailing);
          var a = Math.abs(0.1);
          (trailing.transform.localScale = new Laya.Vector3(a, a, a)),
            (trailing.acitve = !0);
        }
      }
    }),
    (renderTimer = function () {
      if (
        !(g_GameData.gameState != GAME_PLAYING || (eff_bomb && eff_bomb.parent))
      ) {
        if (((timer += SPP.frameTime), g_GameData.model == GameModel.ARCADE)) {
          if (
            (1 == slowdown && (g_GameData.countdown -= SPP.frameTime),
            g_GameData.countdown > spacing)
          );
          else {
            if (g_GameData.countdown <= spacing && g_GameData.countdown > 2)
              return void (
                g_GameData.countdownfruit > 0 &&
                (throwFruit(4), (g_GameData.countdownfruit = 0))
              );
            if (g_GameData.countdown <= 2 && g_GameData.countdown > 1) {
              var a,
                t = fruitSystem.getParticles();
              for (var r in t)
                (a = t[r]).textureObj &&
                  "pomegranate" == a.textureObj.name &&
                  (buildHalfPomegranate(a),
                  (a.life = 0),
                  (g_GameData.countdown = 1));
            }
          }
          if (g_GameData.countdown < 1)
            return void (g_GameData.countdown < 0 && g_GameMgr.gameOver());
          if (g_GameData.countdown < 5) return;
        }
        g_GameData.RedbagTime > 0 &&
          ((g_GameData.RedbagTime -= SPP.frameTime),
          g_GameData.RedbagTime < 0 && throwFruit(3)),
          maxThrowTimes && curThrowTimes < maxThrowTimes[g_GameData.model - 1]
            ? timer >= intervalThrow[g_GameData.model - 1][curThrowTimes] &&
              ((timer = 0),
              throwClassicFruitWithTimes(curThrowTimes),
              curThrowTimes++)
            : wThrowFruit > 0
            ? timer >= 0.2 &&
              (throwFruit(1, (wThrowFruit % 2) + 1),
              wThrowFruit--,
              (timer = 0),
              0 == wThrowFruit &&
                (g_EventMgr.Event(Notifition.UpdateBuff),
                eff_xing_r &&
                  eff_xing_r.parent &&
                  eff_xing_r.parent.removeChild(eff_xing_r),
                eff_fire &&
                  eff_fire.parent &&
                  eff_fire.parent.removeChild(eff_fire)))
            : timer >= interval &&
              ((timer = 0),
              (function () {
                var a,
                  t = Math.random();
                a =
                  g_GameData.model == GameModel.CLASSIC
                    ? t < 0.4
                      ? 3 * Math.random() + 1
                      : t >= 0.2 && t < 0.8
                      ? 4 * Math.random() + 1
                      : 6 * Math.random() + 1
                    : t < 0.4
                    ? 3 * Math.random() + 1
                    : t >= 0.4 && t < 0.8
                    ? 4 * Math.random() + 1
                    : 5 * Math.random() + 2;
                for (var r = 1, i = 0; i < a; i++)
                  if (t < 0.4 && e() && r > 0) throwBomb(), r--;
                  else {
                    var n = Math.random() > 0.05;
                    throwFruit(n > 0 ? 1 : 2);
                  }
                SoundManager.playSound("sound/throw-fruit.mp3", 1);
              })()),
          g_PlayerData.Hp < 3 &&
            ((g_GameData.totalTime += SPP.frameTime),
            g_GameData.totalTime > 10 &&
              (g_PlayerData.Hp++,
              g_EventMgr.Event(Notifition.UpdateLife),
              (g_GameData.totalTime = 0)));
      }
    }),
    (this.slowdownFun = function () {
      (slowdown = 1), g_EventMgr.Event(Notifition.UpdateBuff);
    }),
    (this.gameRelive = function () {
      g_GameData.gameState == GAME_OVER &&
        ((g_PlayerData.reliveTimes = 0),
        g_PlayerData.curScore > 0 &&
          (g_PlayerData.curMoney -= parseInt(0.1 * g_PlayerData.curScore)),
        (g_GameData.gameState = GAME_PLAYING),
        (g_PlayerData.Hp = 3),
        g_EventMgr.Event(Notifition.UpdateLife),
        (g_GameData.totalTime = 0),
        g_SceneMgr.ChangeScene("GamePanel"));
    }),
    (this.gameOver = function () {
      if (
        g_GameData.gameState != GAME_OVER &&
        g_GameData.gameState != GAME_END
      ) {
        eff_ice &&
          eff_ice.parent &&
          (Laya.Tween.clearAll(eff_ice), eff_ice.parent.removeChild(eff_ice)),
          eff_xing_r &&
            eff_xing_r.parent &&
            eff_xing_r.parent.removeChild(eff_xing_r),
          eff_fire && eff_fire.parent && eff_fire.parent.removeChild(eff_fire),
          (wThrowFruit = 0);
        for (var e = fruitSystem.getParticles().length; e-- > 0; )
          fruitSystem.getParticles()[e].removeAllEventListeners();
        g_PlayerData.curScore > 0 &&
          (g_PlayerData.curMoney += parseInt(0.1 * g_PlayerData.curScore)),
          (g_PlayerData.Hp = 0),
          g_EventMgr.Event(Notifition.UpdateLife),
          (g_GameData.totalTime = 0),
          (g_GameData.gameState = GAME_OVER),
          g_GameData.model == GameModel.CLASSIC && g_PlayerData.reliveTimes > 0
            ? g_SceneMgr.ChangeScene("RelivePanel")
            : g_PlayerData.hasGift
            ? g_SceneMgr.ChangeScene("GiftPanel")
            : g_SceneMgr.ChangeScene("EndPanel");
      }
    });
  var a = new Laya.Vector3(0, 0, 0);
  function t(e) {
    if (trailing) {
      var t = (e.stageX / Laya.stage.width) * Laya.Render.canvas.width,
        r = (e.stageY / Laya.stage.height) * Laya.Render.canvas.height;
      camera.convertScreenCoordToOrthographicCoord(
        new Laya.Vector3(t, r, 0),
        a
      ),
        (trailing.transform.position = a),
        (trailing.acitve = !0);
    }
    buildBladeParticle(e.stageX, e.stageY), (LastTime = new Date().getTime());
  }
  function r(e) {
    LastTime = new Date().getTime();
  }
  function i(e) {
    LastTime = new Date().getTime();
  }
  var n = function () {
      if (g_GameData.model == GameModel.ARCADE) {
        var e,
          a = Laya.stage.height >> 1,
          t = fruitSystem.getParticles();
        for (var r in t)
          (e = t[r]).textureObj &&
            "pomegranate" == e.textureObj.name &&
            e.position.y <= a &&
            (e.removeAllForces(),
            e.velocity.reset(0, 0),
            e.velocity.rotate(0),
            e.rotationStep <= 0
              ? (e.rotationStep = -0.01)
              : e.rotationStep > 0 && (e.rotationStep = 0.01));
      }
    },
    o = 1;
  function g() {
    requestAnimationFrame(g),
      o % parseInt(slowdown) == 0 &&
        ((o = 0), middleContext.clear(), fruitSystem && fruitSystem.render()),
      n(),
      topContext.clear(),
      bottomContext.clear(),
      bombSystem && bombSystem.render(),
      particleSystem && particleSystem.render(),
      bladeSystem && bladeSystem.render(),
      buildColorBlade(bladeColor, bladeWidth),
      (g_GameData.gameLevel += levelStep),
      g_GameData.model == GameModel.CLASSIC &&
        interval > 1 &&
        (interval = 2.05 - 10 * g_GameData.gameLevel * 0.05),
      renderTimer(),
      collideTest(),
      bDoublescore--,
      bDoublescore <= 0 && g_EventMgr.Event(Notifition.UpdateBuff),
      bDoublecombo--,
      o++;
  }
};
