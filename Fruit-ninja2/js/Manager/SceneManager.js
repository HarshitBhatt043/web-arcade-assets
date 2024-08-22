FruitGame.SceneManager = function () {
  var a,
    e,
    n,
    i = Laya.stage;
  (this.Init = function () {
    Laya.Browser.window.sharedCanvas &&
      ((Laya.Browser.window.sharedCanvas.width = Laya.stage.width),
      (Laya.Browser.window.sharedCanvas.height = Laya.stage.height),
      g_WxMgr.PostMessage({
        cmd: RankType.Resize,
        url: "",
        data: { width: 600, height: 480, matrix: Laya.stage._canvasTransform },
        isLoad: !1,
      })),
      (uiCanvas = new Laya.Sprite()),
      i.addChild(uiCanvas),
      (bottomCanvas = new Laya.Sprite()),
      (bottomCanvas.mouseThrough = !0),
      i.addChild(bottomCanvas),
      bottomCanvas.size(gameWidth, gameHeight),
      (bottomContext = bottomCanvas.graphics),
      (uiScene = Laya.stage.addChild(new Laya.Scene())),
      (uiCamera = uiScene.addChild(new Laya.Camera(0, 0.1, 1e3))),
      (uiCamera.orthographic = !0),
      (uiCamera.orthographicVerticalSize = 1),
      (middleCanvas = new Laya.Sprite()),
      (middleCanvas.mouseThrough = !0),
      i.addChild(middleCanvas),
      middleCanvas.size(gameWidth, gameHeight),
      (middleContext = middleCanvas.graphics),
      (topCanvas = new Laya.Sprite()),
      (topCanvas.mouseThrough = !0),
      i.addChild(topCanvas),
      topCanvas.size(gameWidth, gameHeight),
      (topContext = topCanvas.graphics),
      (adCanvas = new Laya.Sprite()),
      (adCanvas.mouseThrough = !0),
      i.addChild(adCanvas),
      (scene = Laya.stage.addChild(new Laya.Scene())),
      (camera = scene.addChild(new Laya.Camera(0, 0.1, 1e3))),
      (camera.orthographic = !0),
      (camera.orthographicVerticalSize = 1),
      ((a = []).StartPanel = new StartPanel()),
      (a.GamePanel = new GamePanel()),
      (a.EndPanel = new EndPanel()),
      (a.ResultPanel = new ResultPanel()),
      (a.RankPanel = new RankPanel()),
      (a.PreparePanel = new PreparePanel()),
      (a.SettingPanel = new SettingPanel()),
      (a.EquipPanel = new EquipPanel()),
      (a.EquipChild = new EquipChild()),
      (a.RelivePanel = new RelivePanel()),
      (a.HelpPanel = new HelpPanel()),
      (a.GiftPanel = new GiftPanel());
  }),
    (this.ChangeScene = function (i, t) {
      null == i && console.error("场景切换失败，切换场景参数为空!"),
        n == i && console.error("场景切换失败，当前已是该场景!"),
        a && a[i]
          ? (e && (e.ClosePanel(), e.parent && e.parent.removeChild(e)),
            (n = i),
            (e = a[i]),
            uiCanvas.addChild(e),
            e.OpenPanel(t),
            console.log("当前面板=", i))
          : console.error("场景切换失败，未找到该场景!");
    }),
    (this.AddScene = function (n, i) {
      a && a[n]
        ? (uiCanvas.addChild(e), e.OpenPanel(i))
        : console.error("场景切换失败，未找到该场景!");
    }),
    (this.RemoveScene = function (e, n) {
      a && a[e]
        ? (e.ClosePanel(), e.parent && e.parent.removeChild(e))
        : console.error("场景切换失败，未找到该场景!");
    });
};
