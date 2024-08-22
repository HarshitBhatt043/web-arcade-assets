function HelpPanel() {
  var e;
  function n(e, n) {
    var t = e.dataSource,
      i = fruitConfig[t];
    (e.getChildByName("txtDes").text = i.des),
      (e.getChildByName("imgHead").skin = "fruits/" + t + "-w.png");
  }
  laya.events.Event,
    HelpPanel.super(this),
    (this.OpenPanel = function () {
      (e = CreateFruitButton(
        this.posReturn,
        g_AssetsMgr.zihuan,
        g_AssetsMgr.fanhuizhuye,
        this.onReturn,
        topContext
      )).Show(),
        this.ShowRender();
    }),
    (this.ClosePanel = function () {
      e.Hide();
    }),
    (this.onReturn = function () {
      g_SceneMgr.ChangeScene("PreparePanel");
    }),
    (this.ShowRender = function (e) {
      for (var t in ((this.list.vScrollBarSkin = ""),
      (this.list.renderHandler = new Handler(this, n)),
      (e = []),
      fruitConfig))
        "airbubbles" != t && "gift" != t && e.push(t);
      this.list.array = e;
    });
}
Laya.class(HelpPanel, "HelpPanel", HelpUI);
