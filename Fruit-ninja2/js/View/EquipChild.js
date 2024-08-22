function EquipChild() {
  var t,
    i = Laya.Event;
  EquipChild.super(this),
    (this.OpenPanel = function (n) {
      t = n;
      var e = knifeConfig[n];
      (this.txtName.text = e.name),
        (this.txtDes.text = e.des),
        (this.txtEff.text = e.eff),
        (this.imgShow.skin = e.image),
        this.btnClose.on(i.CLICK, this, this.onClose),
        this.btnUnlock.on(i.CLICK, this, this.onUnlock),
        this.btnEquip.on(i.CLICK, this, this.onEquip),
        (this.btnRandom.visible = !1),
        (this.btnRandom = {}),
        g_EventMgr.On(Notifition.SetKnife, this, this.setState),
        g_EventMgr.On(Notifition.UpdateKnife, this, this.setState),
        (this.txtUnlock.visible = this.btnRandom.visible = !1),
        this.setState();
    }),
    (this.onRandom = function () {
      PlatformAPI.createVideoAd("Knife", function () {
        var i = Math.random();
        i < 0.001
          ? (MessageBox("Unlock success!"), g_NetWorkMgr.AddKnife(t))
          : ((i = parseInt(40 * Math.random() + 10)),
            g_NetWorkMgr.AddItem(1, i),
            MessageBox("Unlock failed, but you got " + i + " gold coins！"));
      });
    }),
    (this.onUnlock = function () {
      var i = !0,
        n = "Need ",
        e = knifeConfig[t].condition;
      e.money &&
        ((n = "Gold coins inadequate"),
        g_PlayerData.money < e.money && (i = !1)),
        e.diamond &&
          ((n += "钻石" + e.diamond),
          g_PlayerData.diamond < e.diamond && (i = !1)),
        i
          ? (g_NetWorkMgr.AddItem(1, -e.money),
            g_NetWorkMgr.AddItem(2, -e.diamond),
            g_NetWorkMgr.AddKnife(t))
          : (Laya.SoundManager.playSound("sound/nomoney.mp3", 1),
            MessageBox(n));
    }),
    (this.onEquip = function () {
      g_NetWorkMgr.SetKnife(t);
    }),
    (this.setState = function () {
      if (g_PlayerData.knifeList[t])
        (this.btnEquip.visible = !0),
          (this.btnEquip.disabled = g_PlayerData.knife == t),
          (this.txtUnlock.visible =
            this.btnUnlock.visible =
            this.btnRandom.visible =
              !1),
          (this.txtCondition.text = "");
      else {
        (this.btnEquip.visible = !1),
          (this.txtUnlock.visible =
            this.btnUnlock.visible =
            this.btnRandom.visible =
              !0);
        var i = "Need ",
          n = knifeConfig[t].condition;
        n.money && (i += n.money + " gold coins"),
          n.diamond && (i += "钻石" + n.diamond),
          (this.txtCondition.text = i);
      }
    }),
    (this.ClosePanel = function () {
      g_EventMgr.Off(Notifition.SetKnife, this, this.setState),
        g_EventMgr.Off(Notifition.UpdateKnife, this, this.setState);
    }),
    (this.onClose = function () {
      g_SceneMgr.ChangeScene("EquipPanel");
    });
}
Laya.class(EquipChild, "EquipChild", EquipChildUI);
