var FruitGame = FruitGame || {};
const gameWidth = 1280,
  gameHeight = 720,
  GameModel = { CLASSIC: 1, ARCADE: 2 };
var topCanvas,
  topContext,
  middleCanvas,
  middleContext,
  bottomCanvas,
  bottomContext,
  uiCanvas,
  adCanvas,
  imgFinger,
  LastTime,
  eff_bomb,
  eff_xing_l,
  eff_xing_r,
  eff_ice,
  eff_fire,
  img_ice,
  img_fire,
  img_double,
  img_bomb,
  particleSystem,
  fruitSystem,
  bombSystem,
  bladeSystem,
  bgMusic,
  gravity,
  gravityL,
  gravityR,
  bladeColor,
  bladeWidth,
  g_PlayerData,
  g_GameData,
  isPlaying,
  ui_startFruit,
  ui_scoreIcon,
  ui_gameLife,
  ui_gamelifeTexture,
  ui_gameover,
  collide,
  g_GameMgr,
  g_AssetsMgr,
  g_SceneMgr,
  g_NetWorkMgr,
  g_EventMgr,
  g_WxMgr,
  fruitSize = 1.5,
  timer = 0,
  interval = 2.4,
  spacing = 6,
  totalARCADETime = 60,
  GAME_READY = 1,
  GAME_PLAYING = 2,
  GAME_OVER = 3,
  GAME_END = 4,
  levelStep = 1e-4,
  slowdown = 1,
  bDoublescore = 0,
  bDoublecombo = 0,
  doubleComboTimes = 0,
  doubleScoreTimes = 0,
  CutNum = 0,
  CutPoint = null,
  LastCutTime = 0,
  ItemList = null,
  BuffList = null,
  wThrowFruit = 0,
  m_tipList = [];
function MessageBox(e) {
  var t = function (e) {
    e &&
      e.parent &&
      (e.parent.removeChild(e), m_tipList.length < 10 && m_tipList.push(e));
  };
  !(function (e, i = "#FFFFFF", a = "#FF0000") {
    var s = m_tipList.shift() || new Laya.Label();
    (s.font = "Microsoft YaHei"),
      (s.text = e),
      (s.fontSize = 30),
      (s.color = i),
      a && ((s.stroke = 4), (s.strokeColor = a)),
      (s.alpha = 1),
      (s.anchorX = s.anchorY = 0.5),
      Laya.stage.addChild(s),
      s.pos(Laya.stage.width / 2, Laya.stage.height / 2),
      Laya.Tween.to(
        s,
        { y: 100, alpha: 0 },
        1500,
        Laya.Ease.backInOut,
        Laya.Handler.create(this, t, [s]),
        1e3
      );
  })(e);
}
function ParseAward(e) {}
function CreateFruitButton(e, t, i, a, s) {
  console.log("createbtn", t.url);
  var r = particleSystem.createParticle(SPP.SpriteImage);
  r.init(e.x, e.y, 1 / 0, t, s),
    (r.scale = 3),
    (r.alpha = 0),
    (r.onUpdate = function () {
      this.rotation += 0.01;
    });
  var l = particleSystem.createParticle(SPP.SpriteImage);
  l.init(e.x, e.y, 1 / 0, i, s),
    (l.scale = 3),
    (l.alpha = 0),
    (l.onUpdate = function () {
      this.rotation += 0.01;
    });
  var o = fruitSystem.createParticle(FruitGame.Fruit),
    n = g_AssetsMgr.getRandomFruit();
  return (
    o.init(e.x, e.y, 1 / 0, n.w, g_AssetsMgr.shadow, middleContext),
    (o.life = 0),
    {
      buttonself: r,
      imageself: l,
      fruitself: o,
      ResetFruit: function () {
        this.fruitself.removeAllEventListeners(),
          Laya.timer.once(500, this, function () {
            this.fruitself = fruitSystem.createParticle(FruitGame.Fruit);
            var t = g_AssetsMgr.getRandomFruit();
            this.fruitself.init(
              e.x,
              e.y,
              1 / 0,
              t.w,
              g_AssetsMgr.shadow,
              middleContext
            ),
              (this.fruitself.rotationStep = -0.02),
              (this.fruitself.scale = 0),
              (this.fruitself.alpha = 0),
              (this.fruitself.textureObj = t),
              (this.fruitself.config = { color: fruitConfig[t.name].color }),
              this.fruitself.addEventListener("dead", a),
              TweenLite.to(this.fruitself, 1, {
                scale: 1,
                alpha: 1,
                ease: Back.easeOut,
              });
          });
      },
      Show: function () {
        Laya.timer.once(200, this, function () {
          this.ResetFruit();
        }),
          TweenLite.to(this.buttonself, 0.8, {
            scale: 1,
            alpha: 1,
            ease: Back.easeOut,
          }),
          TweenLite.to(this.imageself, 0.8, {
            scale: 1,
            alpha: 1,
            ease: Back.easeOut,
          });
      },
      Hide: function () {
        this.fruitself.removeAllEventListeners(),
          Laya.timer.clearAll(this),
          (this.buttonself.life = 0),
          (this.imageself.life = 0),
          (this.fruitself.life = 0);
      },
    }
  );
}
function deepClone(e) {
  var t,
    i = isClass(e);
  if ("Object" === i) t = {};
  else {
    if ("Array" !== i) return e;
    t = [];
  }
  for (key in e) {
    var a = e[key];
    "Object" == isClass(a)
      ? (t[key] = arguments.callee(a))
      : "Array" == isClass(a)
      ? (t[key] = arguments.callee(a))
      : (t[key] = e[key]);
  }
  return t;
}
function isClass(e) {
  return null === e
    ? "Null"
    : void 0 === e
    ? "Undefined"
    : Object.prototype.toString.call(e).slice(8, -1);
}
