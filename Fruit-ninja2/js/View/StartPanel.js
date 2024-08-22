function StartPanel() {
  var e,
    t,
    n,
    a,
    i = laya.events.Event;
  StartPanel.super(this),
    (this.OpenPanel = function () {
      (this.btnSetting.visible = !1),
        g_WxMgr.bWx &&
          (SSSGameConfig.createBrandSprite(this, 150, Laya.stage.height - 30),
          SSSGameConfig.setSSSmoregameBtn(this)),
        g_EventMgr.On(Notifition.UpdateScore, this, this.onUpdate),
        g_EventMgr.On(Notifition.updateMoney, this, this.updateMoney),
        this.btnSetting.on(i.CLICK, this, this.onSetting),
        this.showStartGameUI(),
        this.updateMoney(),
        Laya.timer.loop(1e3, this, this.playFingerAni),
        (LastTime = new Date().getTime()),
        bgMusic
          ? console.log("恢复")
          : ((bgMusic = SoundManager.playMusic("sound/menu.mp3")),
            console.log("开始")),
        g_WxMgr.bWx &&
          innerWidth / innerHeight < 17 / 9 &&
          PlatformAPI.createBannerAd("Start");
      const e = new Laya.Image("");
      (e.scaleX = e.scaleY = 0.1), (e.x = 900), (e.y = 600), this.addChild(e);
    }),
    (this.createCollect = function () {
      null == a && (a = new Laya.Image("ui3/tianjiaxiaochengxu.png")),
        (a.anchorX = 0.5),
        Laya.stage.addChild(a),
        (a.x = Laya.stage.width - 360),
        (a.y = 25),
        this.aniLeft();
    }),
    (this.aniLeft = function () {
      Laya.Tween.to(
        a,
        { x: Laya.stage.width - 360 },
        500,
        null,
        Laya.Handler.create(this, this.aniRight)
      );
    }),
    (this.aniRight = function () {
      Laya.Tween.to(
        a,
        { x: Laya.stage.width - 390 },
        500,
        null,
        Laya.Handler.create(this, this.aniLeft)
      );
    }),
    (this.playFingerAni = function () {
      new Date().getTime() - LastTime > 5e3
        ? (imgFinger || (imgFinger = new Laya.Image("ui/finger.png")),
          imgFinger.parent ||
            (Laya.stage.addChild(imgFinger),
            imgFinger.pos(360, 300),
            (imgFinger.visible = !0),
            this.up()))
        : (imgFinger &&
            imgFinger.parent &&
            imgFinger.parent.removeChild(imgFinger),
          Laya.Tween.clearAll(imgFinger));
    }),
    (this.up = function () {
      Laya.Tween.to(
        imgFinger,
        { x: 560, y: 200 },
        1e3,
        null,
        Laya.Handler.create(this, this.down)
      );
    }),
    (this.down = function () {
      Laya.Tween.to(
        imgFinger,
        { x: 360, y: 300 },
        700,
        null,
        Laya.Handler.create(this, this.up)
      );
    }),
    (this.onUpdate = function (e) {}),
    (this.ClosePanel = function () {
      Laya.timer.clearAll(this),
        imgFinger &&
          imgFinger.parent &&
          imgFinger.parent.removeChild(imgFinger),
        Laya.Tween.clearAll(imgFinger),
        a && a.parent && a.parent.removeChild(a),
        Laya.Tween.clearAll(a),
        this.hideStartGameUI(),
        g_EventMgr.Off(Notifition.UpdateScore, this, this.onUpdate),
        g_EventMgr.Off(Notifition.updateMoney, this, this.updateMoney),
        g_WxMgr.bWx && PlatformAPI.closeCurrentBannerAd();
    }),
    (this.startGame = function () {
      (g_GameData.model = GameModel.CLASSIC),
        g_SceneMgr.ChangeScene("PreparePanel");
    }),
    (this.onArcade = function () {
      (g_GameData.model = GameModel.ARCADE),
        g_SceneMgr.ChangeScene("PreparePanel");
    }),
    (this.onChallenge = function () {
      MessageBox("该功能暂未开放!"), (void 0).ResetFruit();
    }),
    (this.onShare = function () {
      g_WxMgr.ShareGame(), (void 0).ResetFruit();
    }),
    (this.onRank = function () {
      g_SceneMgr.ChangeScene("RankPanel", 1);
    }),
    (this.onSetting = function () {
      g_SceneMgr.ChangeScene("SettingPanel");
    }),
    (this.onEquip = function () {
      g_SceneMgr.ChangeScene("EquipPanel", 1);
    }),
    (this.updateMoney = function () {
      (this.txtMoney.text = parseInt(g_PlayerData.money) + ""),
        (this.txtDiamond.text = parseInt(g_PlayerData.diamond) + "");
    }),
    (this.showStartGameUI = function () {
      (g_GameData.gameState = GAME_READY),
        (e = CreateFruitButton(
          this.posClassic,
          g_AssetsMgr.huanghuan,
          Laya.loader.getRes("ui3/kaishi.png"),
          this.startGame,
          topContext
        )).Show(),
        (t = CreateFruitButton(
          this.posRank,
          g_AssetsMgr.huanghuan,
          g_AssetsMgr.jieji,
          this.onArcade,
          topContext
        )).Show(),
        (n = CreateFruitButton(
          this.posChallenge,
          g_AssetsMgr.honghuan,
          g_AssetsMgr.zhuangbei,
          this.onEquip,
          topContext
        )).Show();
    }),
    (this.hideStartGameUI = function () {
      t.Hide(), e.Hide(), n.Hide();
    });
}
Laya.class(StartPanel, "StartPanel", StartUI);
