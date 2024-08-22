!(function () {
  Laya.timer;
  var e = Laya.SoundManager,
    a = ["red", "orange", "yellow", "green", "purple", "white", "money"],
    t = function () {
      (this.scale -= 0.01),
        this.scale < 0 && ((this.scale = 0), (this.life = 0));
    },
    i = function () {
      (this.scale -= 0.007),
        this.scale < 0 && ((this.scale = 0), (this.life = 0));
    },
    o = function () {
      (this.alpha -= 0.01),
        this.alpha < 0 && ((this.alpha = 0), (this.life = 0));
    },
    n = function () {
      (this.alpha -= 0.005),
        this.alpha < 0 && ((this.alpha = 0), (this.life = 0));
    },
    r = function () {
      (this.scale -= 0.02),
        this.scale < 0 && ((this.scale = 0), (this.life = 0));
    };
  buildHalfPomegranate = function (a) {
    e.playSound("sound/splatter.mp3", 1);
    for (var t, i, o = 6 + 3 * Math.random(), n = 0; n < 10; n++)
      (i = "fruits/pomegranate-" + parseInt(9 * Math.random() + 1) + ".png"),
        (t = particleSystem.createParticle(FruitGame.Fruit)).init(
          a.position.x,
          a.position.y,
          1 / 0,
          Laya.loader.getRes(i),
          g_AssetsMgr.shadow,
          topContext
        ),
        t.velocity.reset(0, -o),
        t.velocity.rotate(36 * n + 20 * Math.random()),
        t.damp.reset(0, 0),
        (t.rotation = a.rotation),
        (t.bottomY = gameHeight + a.textureObj.r.height),
        t.addForce("g", gravity),
        g_GameData.gameState == GAME_PLAYING && (t.scale = 1.2);
  };
  var g = function () {
      (this.alpha -= 0.01),
        this.alpha < 0 && ((this.alpha = 0), (this.life = 0));
    },
    s = new Laya.Vector3(0, 0, 0);
  (playXingEff = function (e) {
    eff_xing_r || (eff_xing_r = Laya.Sprite3D.load("eff/eff_wujiaoxing.lh")),
      uiScene.addChild(eff_xing_r),
      (eff_xing_r.transform.position = s);
  }),
    (playFireEff = function (e) {
      img_fire ||
        ((img_fire = new Laya.Image("ui/word_kuangre.png")),
        (img_fire.x = Laya.stage.width / 2 - img_fire.width / 2),
        (img_fire.y = Laya.stage.height / 2 - img_fire.height / 2)),
        (img_fire.alpha = 1),
        Laya.stage.addChild(img_fire),
        Laya.Tween.to(
          img_fire,
          { alpha: 0 },
          2e3,
          null,
          Laya.Handler.create(this, function () {
            img_fire &&
              img_fire.parent &&
              img_fire.parent.removeChild(img_fire);
          })
        ),
        null == eff_fire && (eff_fire = new Laya.Image("ui/fire.png")),
        bottomCanvas.addChild(eff_fire),
        (eff_fire.width = 1280),
        (eff_fire.height = 720),
        (eff_fire.alpha = 0),
        Laya.Tween.to(
          eff_fire,
          { alpha: 1 },
          2e3,
          null,
          Laya.Handler.create(
            this,
            function (e) {
              Laya.timer.once(5e3, this, function () {
                Laya.Tween.to(
                  e,
                  { alpha: 0 },
                  3e3,
                  null,
                  Laya.Handler.create(
                    this,
                    function (e) {
                      e && e.parent && e.parent.removeChild(e);
                    },
                    [e]
                  )
                );
              });
            },
            [eff_fire]
          )
        );
    }),
    (playIceEff = function (e) {
      img_ice ||
        ((img_ice = new Laya.Image("ui/word_dongjie.png")),
        (img_ice.x = Laya.stage.width / 2 - img_ice.width / 2),
        (img_ice.y = Laya.stage.height / 2 - img_ice.height / 2)),
        (img_ice.alpha = 1),
        Laya.stage.addChild(img_ice),
        Laya.Tween.to(
          img_ice,
          { alpha: 0 },
          2e3,
          null,
          Laya.Handler.create(this, function () {
            img_ice && img_ice.parent && img_ice.parent.removeChild(img_ice);
          })
        ),
        null == eff_ice && (eff_ice = new Laya.Image("ui/bingdong.png")),
        bottomCanvas.addChild(eff_ice),
        (eff_ice.width = 1280),
        (eff_ice.height = 720),
        (eff_ice.alpha = 0),
        Laya.Tween.to(
          eff_ice,
          { alpha: 1 },
          2e3,
          null,
          Laya.Handler.create(
            this,
            function (e) {
              Laya.timer.once(5e3, this, function () {
                Laya.Tween.to(
                  e,
                  { alpha: 0 },
                  3e3,
                  null,
                  Laya.Handler.create(
                    this,
                    function (e) {
                      e && e.parent && e.parent.removeChild(e);
                    },
                    [e]
                  )
                );
              });
            },
            [eff_ice]
          )
        );
    }),
    (throwFruit = function (e = 1, a = 0) {
      var t = g_AssetsMgr.getRandomFruit(e),
        i = fruitSystem.createParticle(FruitGame.Fruit);
      (i.config = null),
        1 == a
          ? (i.init(
              -200,
              gameHeight + t.w.height,
              1 / 0,
              t.w,
              g_AssetsMgr.shadow,
              middleContext
            ),
            i.velocity.reset(0, -(10 + 3 * Math.random())),
            i.velocity.rotate(8),
            i.damp.reset(0, 0),
            i.addForce("g", gravityR))
          : 2 == a
          ? (i.init(
              Laya.stage.width + 200,
              gameHeight + t.w.height,
              1 / 0,
              t.w,
              g_AssetsMgr.shadow,
              middleContext
            ),
            i.velocity.reset(0, -(10 + 3 * Math.random())),
            i.velocity.rotate(-8),
            i.damp.reset(0, 0),
            i.addForce("g", gravityL))
          : ((i.config = deepClone(fruitConfig[t.name])),
            "jademelon" == t.name ||
            "icebanana" == t.name ||
            "vitalitybanana" == t.name ||
            "goldpitaya" == t.name
              ? (i.init(
                  0.5 * Laya.stage.width + 200 * (1 - 2 * Math.random()),
                  -t.w.height,
                  1 / 0,
                  t.w,
                  g_AssetsMgr.shadow,
                  middleContext
                ),
                i.velocity.reset(0, 5 + 3 * Math.random()),
                i.velocity.rotate(8 - 16 * Math.random()),
                i.damp.reset(0, 0),
                i.addForce("g", gravityU))
              : "pomegranate" == t.name
              ? (i.init(
                  0.5 * Laya.stage.width,
                  gameHeight + t.w.height,
                  1 / 0,
                  t.w,
                  g_AssetsMgr.shadow,
                  middleContext
                ),
                i.velocity.reset(0, 0),
                i.damp.reset(0, 0),
                Laya.Tween.to(
                  i.position,
                  { y: Laya.stage.height / 2 },
                  1e3,
                  Laya.Ease.circOut
                ))
              : (i.init(
                  0.5 * Laya.stage.width + 200 * (1 - 2 * Math.random()),
                  gameHeight + t.w.height,
                  1 / 0,
                  t.w,
                  g_AssetsMgr.shadow,
                  middleContext
                ),
                i.velocity.reset(0, -(18 + 3 * Math.random())),
                i.velocity.rotate(8 - 16 * Math.random()),
                i.damp.reset(0, 0),
                (gravity.y += Math.random() / (Math.random() > 0.5 ? 10 : -7)),
                i.addForce("g", gravity))),
        i.addEventListener("dead", missHandler),
        (i.textureObj = t),
        (i.bottomY = gameHeight + t.w.height),
        (i.bCut = 0),
        (i.scale = fruitSize);
    });
  var l = [];
  (s = new Laya.Vector3(0, 0, 0)),
    new Laya.Vector4(0, 0, 0, 0),
    (cutFruit = function (g, s) {
      if (!(null == g || g.life <= 0)) {
        if (
          ("pomegranate" == g.textureObj.name
            ? (e.playSound("sound/1.mp3", 1),
              (g.scale = 1.1 * fruitSize),
              Laya.timer.once(100, g, function () {
                this.scale = fruitSize;
              }))
            : e.playSound("sound/splatter.mp3", 1),
          g_GameData.gameState == GAME_PLAYING)
        ) {
          var c = l.shift() || new Laya.Image("ui2/eff_cut.png");
          topCanvas.addChild(c),
            c.pos(g.position.x, g.position.y),
            (c.anchorX = c.anchorY = 0.5),
            (c.rotation = s),
            (c.scaleX = c.scaleY = 0),
            Laya.Tween.to(
              c,
              { scaleX: 1, scaleY: 1.5 },
              100,
              null,
              Laya.Handler.create(
                this,
                function (e) {
                  Laya.timer.once(100, this, function (a) {
                    e && e.parent && e.parent.removeChild(e),
                      l.length < 15 && l.push(e);
                  });
                },
                [c]
              )
            );
        }
        if (
          (g.config &&
            3 == g.config.type &&
            ((g_PlayerData.hasGift = 0),
            (function () {
              e.playSound("sound/cutgift.mp3", 1);
              var a = new Laya.Image("fruits/gift-w.png");
              (a.x = g.position.x),
                (a.y = g.position.y),
                (a.anchorX = a.anchorY = 0.5),
                (a.scaleX = a.scaleY = 1),
                topCanvas.addChild(a),
                Laya.Tween.to(
                  a,
                  { scaleX: 2, scaleY: 2 },
                  200,
                  null,
                  Laya.Handler.create(
                    this,
                    function (e) {
                      Laya.Tween.to(
                        e,
                        { scaleX: 1.2, scaleY: 1.2 },
                        300,
                        null,
                        Laya.Handler.create(
                          this,
                          function (e) {
                            Laya.Tween.to(
                              e,
                              { x: 1, y: Laya.stage.height },
                              1500,
                              null,
                              Laya.Handler.create(
                                this,
                                function (e) {
                                  e && e.parent && e.parent.removeChild(e);
                                },
                                [e]
                              )
                            );
                          },
                          [e]
                        )
                      );
                    },
                    [a]
                  )
                );
            })(),
            (function (e) {
              for (var a = 0; a < 60; a++) {
                var t = particleSystem.createParticle(SPP.SpriteImage);
                t.init(
                  e.position.x,
                  e.position.y,
                  1 / 0,
                  Laya.loader.getRes(
                    "ui3/gift_" + parseInt(7 * Math.random() + 1) + ".png"
                  ),
                  topContext
                ),
                  (t.onUpdate = r),
                  (t.scale = 1.3),
                  t.damp.reset(0, 0),
                  t.velocity.reset(0, -(3 + 7 * Math.random())),
                  t.velocity.rotate(360 * Math.random()),
                  t.addForce("g", gravity);
              }
            })(g)),
          g_GameData.gameState == GAME_PLAYING)
        ) {
          g.config && g.config.score
            ? (g_PlayerData.curScore +=
                g.config.score * (bDoublescore > 0 ? 2 : 1))
            : (g_PlayerData.curScore += bDoublescore > 0 ? 2 : 1),
            g_EventMgr.Event(Notifition.UpdateScore);
          var m = new Date().getTime();
          if (m - LastCutTime < 300) {
            CutNum || (CutNum = 1), CutNum++, e.playSound("sound/1.mp3", 1);
            const a = { x: g.position.x, y: g.position.y };
            Laya.timer.once(
              320,
              this,
              (a) => {
                if (CutNum < 3) CutNum = 0;
                else {
                  var t = CutNum + 1;
                  t > 6 && (t = 6),
                    doubleComboTimes > 0 &&
                      ((g_PlayerData.curScore += 2 * t), doubleComboTimes--),
                    g_PlayerData.useBuffList[1] > 0 &&
                      (g_PlayerData.curScore += 1),
                    (g_PlayerData.curScore += t * (bDoublecombo > 0 ? 2 : 1)),
                    g_EventMgr.Event(Notifition.UpdateScore);
                  var i = particleSystem.createParticle(SPP.SpriteImage);
                  e.playSound("sound/Bingo_" + CutNum + ".mp3", 1),
                    i.init(
                      a.x,
                      a.y,
                      1 / 0,
                      g_AssetsMgr["combo" + CutNum],
                      topContext
                    ),
                    (i.scale = 0),
                    TweenLite.to(i, 0.2, {
                      scale: 1.6,
                      onComplete: function () {
                        Laya.timer.once(500, this, function () {
                          TweenLite.to(i, 0.2, {
                            scale: 0,
                            onComplete: function () {
                              i.life = 0;
                            },
                          });
                        });
                      },
                    }),
                    (CutNum = 0);
                }
              },
              [a]
            );
          } else LastCutTime = m;
        }
        if (
          g_GameData.gameState == GAME_PLAYING &&
          g.config &&
          g.config.special
        ) {
          var d = g.config.special;
          d.doublescore &&
            ((bDoublescore = 350),
            g_EventMgr.Event(Notifition.UpdateBuff),
            img_double ||
              ((img_double = new Laya.Image("ui/word_shuangbeidefen.png")),
              (img_double.x = Laya.stage.width / 2 - img_double.width / 2),
              (img_double.y = Laya.stage.height / 2 - img_double.height / 2)),
            (img_double.alpha = 1),
            Laya.stage.addChild(img_double),
            Laya.Tween.to(
              img_double,
              { alpha: 0 },
              2e3,
              null,
              Laya.Handler.create(this, function () {
                img_double &&
                  img_double.parent &&
                  img_double.parent.removeChild(img_double);
              })
            )),
            d.doublecombo && (bDoublecombo = 350),
            d.doublecombotimes && (doubleComboTimes += d.doublecombotimes),
            d.doublescoretimes && (doubleScoreTimes += d.doublescoretimes),
            d.ignorebomb && (BuffList.ignorebomb = d.ignorebomb),
            d.throwfruit &&
              ((wThrowFruit = d.throwfruit),
              g_EventMgr.Event(Notifition.UpdateBuff),
              playXingEff(g),
              playFireEff(g)),
            d.addmoney &&
              (e.playSound("sound/cutmoney.mp3", 1),
              (g_PlayerData.curMoney += d.addmoney)),
            d.adddiamond && (g_PlayerData.curDiamond += d.adddiamond);
        }
        if (
          (g_GameData.gameState == GAME_PLAYING &&
            g.config &&
            g.config.special &&
            g.config.special.slowdown &&
            (playIceEff(),
            (slowdown = 1 / g.config.special.slowdown),
            g_EventMgr.Event(Notifition.UpdateBuff),
            Laya.timer.once(1e4, this, function () {
              g_GameMgr.slowdownFun();
            })),
          g_GameData.gameState == GAME_PLAYING &&
            g.config &&
            g.config.special &&
            g.config.special.maxcut > 0)
        )
          g.bCut <= 0 && (g.config.special.maxcut--, (g.bCut += 180));
        else {
          if ((g.removeEventListener("dead", missHandler), g.textureObj))
            if (g.textureObj.r)
              !(function (e) {
                var a = 6 + 3 * Math.random(),
                  t = particleSystem.createParticle(FruitGame.Fruit);
                t.init(
                  e.position.x,
                  e.position.y,
                  1 / 0,
                  e.textureObj.r,
                  g_AssetsMgr.shadow,
                  topContext
                ),
                  t.velocity.reset(0, -a),
                  t.velocity.rotate(20 * Math.random()),
                  t.damp.reset(0, 0),
                  (t.rotation = e.rotation),
                  (t.bottomY = gameHeight + e.textureObj.r.height),
                  t.addForce("g", gravity);
                var i = particleSystem.createParticle(FruitGame.Fruit);
                i.init(
                  e.position.x,
                  e.position.y,
                  1 / 0,
                  e.textureObj.l,
                  g_AssetsMgr.shadow,
                  topContext
                ),
                  i.velocity.reset(0, -a),
                  i.velocity.rotate(-20 * Math.random()),
                  i.damp.reset(0, 0),
                  (i.rotation = e.rotation),
                  (i.bottomY = gameHeight + e.textureObj.l.height),
                  i.addForce("g", gravity),
                  g_GameData.gameState == GAME_PLAYING &&
                    (t.scale = i.scale = fruitSize);
              })(g);
            else if ("money" == g.textureObj.name);
            else {
              var f = particleSystem.createParticle(FruitGame.Fruit);
              f.init(
                g.position.x,
                g.position.y,
                1 / 0,
                g.textureObj.w,
                topContext
              ),
                f.velocity.reset(0, -(4 + 4 * Math.random())),
                f.velocity.rotate(360 * Math.random()),
                f.addForce("g", gravity),
                (f.bottomY = gameHeight + g.textureObj.w.height);
            }
          g.life = 0;
        }
        g.config &&
          g.config.color > 0 &&
          ((function (e, o) {
            var n = Laya.loader.getRes(
              "juice/" + a[e.config.color - 1] + "-j.png"
            );
            7 == e.config.color && (o = 10),
              "pomegranate" == e.textureObj.name && (o = 20);
            for (var r = 0; r < o; r++) {
              var g = particleSystem.createParticle(SPP.SpriteImage);
              g.init(e.position.x, e.position.y, 1 / 0, n, topContext),
                (g.onUpdate = "pomegranate" == e.textureObj.name ? i : t),
                (g.scale =
                  0.3 * Math.random() + 0.4 + (7 == e.config.color ? 0.9 : 0)),
                g.damp.reset(0, 0),
                g.velocity.reset(0, -(4 + 4 * Math.random())),
                g.velocity.rotate(360 * Math.random()),
                g.addForce("g", gravity);
            }
          })(g, 5 + ((5 * Math.random()) >> 0)),
          g_GameData.gameState == GAME_PLAYING &&
            ((function (e) {
              var t = Laya.loader.getRes(
                  "juice/" + a[e.config.color - 1] + "-f.png"
                ),
                i = particleSystem.createParticle(SPP.SpriteImage);
              i.init(e.position.x, e.position.y, 1 / 0, t, bottomContext),
                (i.onUpdate = n),
                (i.scale = 1 + Math.random()),
                (i.rotation = 2 * Math.PI * Math.random()),
                (i.alpha = 1);
            })(g),
            (function (e) {
              var t = Laya.loader.getRes(
                  "juice/" + a[e.config.color - 1] + "-u.png"
                ),
                i = particleSystem.createParticle(SPP.SpriteImage);
              i.init(e.position.x, e.position.y, 1 / 0, t, bottomContext),
                (i.onUpdate = o),
                (i.scale = 0.5 + Math.random() / 6),
                (i.rotation = 2 * Math.PI * Math.random()),
                (i.alpha = 1);
            })(g)));
      }
    }),
    (missHandler = function (e) {
      var a, t, i;
      e.target.removeEventListener("dead", missHandler),
        g_GameData.gameState != GAME_OVER &&
          (e.target.config &&
            3 == e.target.config.type &&
            (g_GameData.RedbagTime =
              Math.random() > 0.5 ? 20 * Math.random() + 10 : 0),
          g_PlayerData.useBuffList[2] > 0
            ? g_PlayerData.useBuffList[2]--
            : g_GameData.gameState == GAME_PLAYING &&
              e.target.config &&
              e.target.config.special &&
              e.target.config.special.canmiss > 0
            ? e.target.config.special.canmiss--
            : g_GameData.model == GameModel.ARCADE ||
              ((a = e.target),
              (t = particleSystem.createParticle(SPP.SpriteImage)),
              (i = a.position.x) <= 0 && (i = 40),
              i > gameWidth && (i = gameWidth - 40),
              t.init(
                i,
                gameHeight - g_AssetsMgr.miss.height,
                1 / 0,
                g_AssetsMgr.miss,
                topContext
              ),
              t.velocity.reset(0, -1),
              t.damp.reset(0.01, 0.01),
              (t.onUpdate = g),
              g_PlayerData.Hp--,
              0 == g_PlayerData.Hp && g_GameMgr.gameOver(),
              g_PlayerData.Hp < 0 && (g_PlayerData.Hp = 0),
              g_EventMgr.Event(Notifition.UpdateLife),
              (g_GameData.totalTime = 0)));
    });
})();
