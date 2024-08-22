!(function () {
  var t = Laya.SoundManager,
    e = function () {
      (this.scale -= 0.03),
        this.scale < 0 && ((this.scale = 0), (this.life = 0));
    },
    a = function () {
      var t = particleSystem.createParticle(SPP.SpriteImage),
        a = 1.42 * g_AssetsMgr.bomb.width * 0.5,
        o =
          this.position.x +
          a * Math.cos(this.rotation - SPP.MathUtils.toRadian(90)),
        i =
          this.position.y +
          a * Math.sin(this.rotation - SPP.MathUtils.toRadian(90));
      t.init(o, i, 1 / 0, g_AssetsMgr.star, topContext),
        (t.onUpdate = e),
        (t.scale = 0.8),
        t.damp.reset(0, 0),
        t.velocity.reset(0, -(1 + 1 * Math.random())),
        t.velocity.rotate(360 * Math.random()),
        t.addForce("g", gravity);
    },
    o = function () {
      (this.scale -= 0.02),
        this.scale < 0 && ((this.scale = 0), (this.life = 0));
    };
  (throwBomb = function () {
    var e = bombSystem.createParticle(FruitGame.Fruit);
    e.init(
      0.5 * gameWidth + 300 * (1 - 2 * Math.random()),
      gameHeight + g_AssetsMgr.bomb.height,
      1 / 0,
      g_AssetsMgr.bomb,
      g_AssetsMgr.shadow,
      middleContext
    ),
      e.velocity.reset(0, -(18 + 3 * Math.random())),
      e.velocity.rotate(8 - 16 * Math.random()),
      e.damp.reset(0, 0),
      e.addForce("g", gravity),
      (e.onUpdate = a),
      e.addEventListener("dead", missBomb),
      (e.bottomY = gameHeight + g_AssetsMgr.bomb.height),
      t.playMusic("sound/throw-bomb.mp3"),
      t.playSound("sound/throwbomb.mp3", 1);
  }),
    (cutBomb = function (e) {
      t.stopMusic("sound/throw-bomb.mp3");
      var a = function () {
        var t = particleSystem.createParticle(SPP.SpriteImage);
        t.init(
          e.position.x,
          e.position.y,
          1 / 0,
          Laya.loader.getRes("ui/qipao.png"),
          topContext
        ),
          (t.scale = 0.7),
          t.velocity.reset(0, -(4 + 4 * Math.random())),
          t.velocity.rotate(360 * Math.random()),
          t.addForce("g", gravity);
      };
      if (g_PlayerData.useBuffList[0] > 0)
        a(), g_PlayerData.useBuffList[0]--, (e.life = 0);
      else if (BuffList && BuffList.ignorebomb)
        a(), BuffList.ignorebomb--, (e.life = 0);
      else if (g_GameData.model == GameModel.ARCADE)
        (g_PlayerData.curScore -= 10),
          g_PlayerData.curScore < 0 && (g_PlayerData.curScore = 0),
          g_EventMgr.Event(Notifition.UpdateScore),
          t.playSound("sound/bomb-explode.mp3", 1),
          (function (t) {
            for (var e = 0; e < 150; e++) {
              var a = particleSystem.createParticle(SPP.SpriteImage);
              a.init(
                t.position.x,
                t.position.y,
                1 / 0,
                g_AssetsMgr.star,
                topContext
              ),
                (a.onUpdate = o),
                (a.scale = 2),
                a.damp.reset(0, 0),
                a.velocity.reset(0, -(3 + 7 * Math.random())),
                a.velocity.rotate(360 * Math.random()),
                a.addForce("g", gravity);
            }
          })(e),
          (e.life = 0);
      else {
        var i = e.rotation;
        e.removeAllForces(),
          e.init(
            e.position.x,
            e.position.y,
            1 / 0,
            g_AssetsMgr.bomb,
            g_AssetsMgr.shadow,
            middleContext
          ),
          (e.rotation = i),
          (e.rotationStep = 0),
          playBombEff(e);
      }
    }),
    (missBomb = function (e) {
      t.stopMusic("sound/throw-bomb.mp3");
    });
  var i = new Laya.Vector3(0, 0, 0);
  playBombEff = function (e) {
    if (!img_bomb || !img_bomb.parent) {
      t.playSound("sound/bomb-explode.mp3", 1),
        null == img_bomb &&
          ((img_bomb = new Laya.Image()),
          (img_bomb.skin = "ui/baise.png"),
          (img_bomb.width = 1280),
          (img_bomb.height = 720)),
        (img_bomb.alpha = 0),
        bottomCanvas.addChild(img_bomb),
        (eff_bomb = uiScene.addChild(Laya.Sprite3D.load("eff/eff_zhadan.lh")));
      var a = (e.position.x / Laya.stage.width) * Laya.Render.canvas.width,
        o = (e.position.y / Laya.stage.height) * Laya.Render.canvas.height;
      camera.convertScreenCoordToOrthographicCoord(
        new Laya.Vector3(a, o, 0),
        i
      ),
        (eff_bomb.transform.position = i),
        Laya.Tween.to(
          img_bomb,
          { alpha: 1 },
          1500,
          Laya.Ease.backInOut,
          Laya.Handler.create(this, function () {
            (e.life = 0),
              img_bomb &&
                img_bomb.parent &&
                img_bomb.parent.removeChild(img_bomb),
              eff_bomb &&
                eff_bomb.parent &&
                eff_bomb.parent.removeChild(eff_bomb),
              g_GameMgr.gameOver();
          })
        );
    }
  };
})();
