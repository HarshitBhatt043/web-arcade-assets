function ResultPanel() {
  ResultPanel.super(this), Laya.Tween, Laya.Ease;
  var e,
    t,
    a = Laya.Event;
  (this.OpenPanel = function () {
    (g_GameData.gameState = GAME_READY),
      (this.curScore.text = parseInt(g_PlayerData.curScore)),
      (this.highScore.text = parseInt(
        g_PlayerData.highScore > g_PlayerData.curScore
          ? g_PlayerData.highScore
          : g_PlayerData.curScore
      )),
      (this.curMoney.text = "×" + parseInt(g_PlayerData.curMoney)),
      (this.btnDouble.visible = !1),
      (this.btnDouble.skin =
        PlatformAPI.createResultVideoAd &&
        PlatformAPI.getVideoAdPlayInfoToday("Result").valid
          ? "ui/video.png"
          : "ui/share.png"),
      this.btnDouble.on(a.CLICK, this, this.onDouble),
      this.showResultUI(),
      PlatformAPI.createBannerAd("Result"),
      (bgMusic = SoundManager.playMusic("sound/menu.mp3")),
      PlatformAPI.updateLeaderboard(
        "globalRank",
        parseInt(g_PlayerData.curScore)
      );
  }),
    (this.onUpdate = function () {}),
    (this.ClosePanel = function () {
      this.hideResultUI(),
        g_GameMgr.saveGameData(),
        g_WxMgr.bWx && PlatformAPI.closeCurrentBannerAd();
    }),
    (this.onAgain = function () {
      g_GameMgr.saveGameData(), g_SceneMgr.ChangeScene("PreparePanel");
    }),
    (this.onReturn = function (e) {
      g_SceneMgr.ChangeScene("StartPanel");
    }),
    (this.onShare = function () {
      g_WxMgr.ShareGame(), btnShare.ResetFruit();
    }),
    (this.onDouble = function () {
      var e = () => {
        (g_PlayerData.curMoney *= 2),
          (this.curMoney.text = "×" + parseInt(g_PlayerData.curMoney)),
          (this.btnDouble.visible = !1);
      };
      g_WxMgr.bWx ? PlatformAPI.createVideoAd("Result", e) : e();
    }),
    (this.onRank = function () {
      g_SceneMgr.ChangeScene("RankPanel", 2);
    }),
    (this.showResultUI = function () {
      (e = CreateFruitButton(
        this.posAgain,
        g_AssetsMgr.huanghuan,
        g_AssetsMgr.zailaiyiju,
        this.onAgain,
        topContext
      )).Show(),
        (t = CreateFruitButton(
          this.posReturn,
          g_AssetsMgr.zihuan,
          g_AssetsMgr.fanhuizhuye,
          this.onReturn,
          topContext
        )).Show();
    }),
    (this.hideResultUI = function () {
      e.Hide(), t.Hide();
    });
}
Laya.class(ResultPanel, "ResultPanel", ResultUI);
