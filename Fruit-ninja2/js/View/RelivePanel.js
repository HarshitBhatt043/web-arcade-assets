function RelivePanel() {
  var e, n;
  function t() {
    g_PlayerData.hasGift
      ? g_SceneMgr.ChangeScene("GiftPanel")
      : g_SceneMgr.ChangeScene("EndPanel");
  }
  function a() {
    PlatformAPI.createVideoAd("Relive", g_GameMgr.gameRelive.bind(g_GameMgr));
  }
  Laya.Event,
    RelivePanel.super(this),
    (this.OpenPanel = function () {
      (n = CreateFruitButton(
        this.posRelive,
        g_AssetsMgr.juhuan,
        g_AssetsMgr.fuhuo,
        a,
        topContext
      )).Show(),
        (e = CreateFruitButton(
          this.posReturn,
          g_AssetsMgr.honghuan,
          g_AssetsMgr.fanhui,
          t,
          topContext
        )).Show(),
        PlatformAPI.createBannerAd("Relive");
    }),
    (this.ClosePanel = function () {
      n.Hide(), e.Hide(), g_WxMgr.bWx && PlatformAPI.closeCurrentBannerAd();
    });
}
Laya.class(RelivePanel, "RelivePanel", ReliveUI);
