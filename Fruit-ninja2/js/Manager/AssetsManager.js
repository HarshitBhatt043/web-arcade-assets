(FruitGame.AssetsManager = function () {
  SPP.EventDispatcher.call(this);
  var t = this,
    a = 0,
    e = 0,
    r = ["w", "l", "r"];
  (this.fruitsObj = {}),
    (this.fruitsArray = []),
    (this.images = {}),
    (this.sounds = {});
  var s = function () {
    console.log("资源加载完成");
    var s = FruitGame.assets.fruits;
    for (a = 0; a < s.length; a++) {
      var n = {};
      for (e = 0; e < r.length; e++)
        n[r[e]] = Laya.loader.getRes("fruits/" + s[a] + "-" + r[e] + ".png");
      (n.name = s[a]),
        g_AssetsMgr.fruitsArray.push(n),
        (g_AssetsMgr.fruitsObj[s[a]] = n);
    }
    var i = FruitGame.assets.other;
    for (a = 0; a < i.length; a++)
      g_AssetsMgr[i[a].id] = Laya.loader.getRes(i[a].src);
    t.dispatchEvent(new SPP.Event("complete"));
  };
  (this.start = function () {
    var t = FruitGame.assets.fruits,
      n = [];
    for (a = 0; a < t.length; a++)
      for (e = 0; e < r.length; e++)
        n.push({
          id: t[a] + r[e],
          src: "fruits/" + t[a] + "-" + r[e] + ".png",
        });
    var i = [],
      o = [];
    for (a = 0; a < i.length; a++) i[a] && o.push(i[a].src);
    Laya.ResourceVersion.manifest;
    var u,
      f = FruitGame.assets.ui;
    for (a = 0; a < f.length; a++) (u = f[a]), o.push(u);
    var m = FruitGame.assets.atlas;
    for (a = 0; a < m.length; a++) (u = m[a]), o.push(u);
    var l = FruitGame.assets.music;
    for (a = 0; a < l.length; a++) (u = l[a]), o.push(u);
    registerBitmapFont("bitmapFont/num30.fnt", "num30"),
      registerBitmapFont("bitmapFont/num45.fnt", "num45"),
      registerBitmapFont("bitmapFont/num50.fnt", "num50"),
      registerBitmapFont("bitmapFont/num70.fnt", "num70"),
      Laya.Sprite3D.load("eff/eff_wujiaoxing.lh"),
      Laya.Sprite3D.load("eff/eff_zhadan.lh"),
      "FBInstant" == Laya.Browser.window.PlatformAPI.platform
        ? Laya.loader.load(
            o,
            Handler.create(null, () => {
              Laya.Browser.window.PlatformAPI.startGameAsync().then(s);
            }),
            Handler.create(null, (t) => {
              Laya.Browser.window.PlatformAPI.setLoadingProgress(
                Math.floor(100 * t)
              );
            })
          )
        : Laya.loader.load(o, Handler.create(null, s));
  }),
    (this.getRandomFruit = function (t = 1) {
      var a = this.fruitsArray[(this.fruitsArray.length * Math.random()) >> 0],
        e = JSON.parse(JSON.stringify(fruitConfig[a.name]));
      return e.type == t &&
        a.name &&
        a.w &&
        ((g_GameData.gameState == GAME_PLAYING &&
          (!e.scene || e.scene.indexOf(g_GameData.model) > -1)) ||
          g_GameData.gameState != GAME_PLAYING)
        ? a
        : this.getRandomFruit(t);
    });
}),
  SPP.inherit(FruitGame.AssetsManager, SPP.EventDispatcher);
