function EquipPanel() {
  EquipPanel.super(this), Laya.Tween, Laya.Ease;
  var i = Laya.Event,
    e = 0;
  (this.equipIndex = 0),
    (this.OpenPanel = function (a) {
      (e = a),
        this.btnClose.on(i.CLICK, this, t),
        g_EventMgr.On(Notifition.UpdateMoney, this, this.updateMoney),
        g_EventMgr.On(Notifition.SetKnife, this, this.setKnife),
        (this.btnBgL.visible = this.btnBgR.visible = this.bgList.visible = !1),
        (this.equipList.hScrollBarSkin = ""),
        (this.equipList.selectEnable = !0),
        (this.equipList.selectHandler = new Handler(this, s)),
        (this.equipList.renderHandler = new Handler(this, n));
      var h = [];
      for (var o in knifeConfig) h.push(knifeConfig[o]);
      (this.equipList.array = h),
        this.btnEquipL.on(i.CLICK, this, this.onEquipL),
        this.btnEquipR.on(i.CLICK, this, this.onEquipR),
        this.equipList.scrollTo(this.equipIndex),
        (this.equipMaxIndex = this.equipList.length - this.equipList.repeatX),
        this.updateMoney();
    }),
    (this.updateMoney = function () {
      (this.txtMoney.text = parseInt(g_PlayerData.money) + ""),
        (this.txtDiamond.text = parseInt(g_PlayerData.diamond) + "");
    }),
    (this.onEquipL = function () {
      this.equipIndex > 0 &&
        (this.equipIndex--, this.equipList.scrollTo(this.equipIndex)),
        Laya.SoundManager.playSound("sound/clickbtn.mp3", 1);
    }),
    (this.onEquipR = function () {
      this.equipIndex < this.equipMaxIndex &&
        (this.equipIndex++, this.equipList.scrollTo(this.equipIndex)),
        Laya.SoundManager.playSound("sound/clickbtn.mp3", 1);
    }),
    (this.onUpdate = function () {});
  var t = function () {
    g_SceneMgr.ChangeScene(1 == e ? "StartPanel" : "PreparePanel"),
      g_EventMgr.Off(Notifition.UpdateMoney, this, this.updateMoney),
      g_EventMgr.Off(Notifition.SetKnife, this, this.setKnife);
  };
  function n(i, e) {
    var t = i.dataSource;
    (i.getChildByName("txtName").text = t.name),
      (i.getChildByName("imgShow").skin = t.image),
      (i.getChildByName("imgUse").visible = g_PlayerData.knife == e),
      (i.gray = !g_PlayerData.knifeList[e]);
  }
  function s(i) {
    i >= 0 && g_SceneMgr.ChangeScene("EquipChild", i),
      (this.equipList.selectedIndex = -1);
  }
  this.ClosePanel = function () {};
}
Laya.class(EquipPanel, "EquipPanel", EquipUI);
