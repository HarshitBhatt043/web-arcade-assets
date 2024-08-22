var uiScene,
  uiCamera,
  scene,
  camera,
  trailing,
  Loader = laya.net.Loader,
  Handler = laya.utils.Handler,
  SoundManager = Laya.SoundManager,
  Particle2D = Laya.Particle2D,
  Utils3D = Laya.Utils3D;
function loadAssets() {
  (g_WxMgr = new FruitGame.WxManager()),
    "FBInstant" == Laya.Browser.window.PlatformAPI.platform &&
      FBInstant.initializeAsync()
        .then(() => {})
        .catch((a) => {
          console.log(a);
        }),
    initSSSGameConfig(() => {
      (Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH),
        console.log("执行loadRes"),
        (g_AssetsMgr = new FruitGame.AssetsManager()),
        g_AssetsMgr.addEventListener("complete", loadAssetsComplete),
        g_AssetsMgr.start();
    });
}
function registerBitmapFont(a, e) {
  var t = new Laya.BitmapFont();
  t.loadFont(
    a,
    new Laya.Handler(this, function () {
      Laya.Text.registerBitmapFont(e, t);
    })
  );
}
function loadAssetsComplete() {
  console.log("loadAssetsComplete"),
    (g_EventMgr = EventManager),
    (g_GameMgr = new FruitGame.GameManager()),
    g_GameMgr.Init();
}
console.log("ttttttsssssssasaaa"),
  Laya.MiniAdpter.init(!0),
  Laya3D.init(gameWidth, gameHeight),
  (Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO),
  (Laya.stage.screenMode = Laya.Stage.SCREEN_NONE),
  (Laya.MouseManager.multiTouchEnabled = !1),
  (RES_VERSION = "1.0"),
  (window.onload = loadAssets);
