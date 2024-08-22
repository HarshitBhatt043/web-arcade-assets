function PreparePanel() {
  PreparePanel.super(this), Laya.Tween, Laya.Ease;
  var e,
    t,
    a,
    i,
    n,
    s,
    o = Laya.Event;
  this.imgModel0,
    this.imgModel1,
    (this.OpenPanel = function () {
      (this.imgModel0.visible = g_GameData.model == GameModel.CLASSIC),
        (this.imgModel1.visible = g_GameData.model == GameModel.ARCADE),
        g_EventMgr.On(Notifition.SetKnife, this, this.setKnife),
        g_EventMgr.On(Notifition.UpdateMoney, this, this.updateMoney),
        (e = CreateFruitButton(
          this.posReturn,
          g_AssetsMgr.zihuan,
          g_AssetsMgr.fanhuizhuye,
          this.onReturn,
          topContext
        )).Show(),
        (t = CreateFruitButton(
          this.posHelp,
          g_AssetsMgr.qinghuan,
          g_AssetsMgr.bangzhushuoming,
          this.onHelp,
          topContext
        )).Show(),
        (g_PlayerData.useBuffList = [0, 0, 0]),
        (i = []),
        (a = []),
        (a = [this.item0, this.item1, this.item2]);
      for (var n = 0; n < 3; n++)
        (a[n].getChildByName("txtPrice").text = g_PlayerData.buffList[n]
          ? "Free"
          : itemConfig[n].price + ""),
          (a[n].getChildByName("imgUse").visible = g_PlayerData.buffList[n]
            ? 1
            : 0),
          a[n].on(o.CLICK, a[n], g),
          i.push(a[n].getChildByName("imgUse"));
      this.updateMoney(),
        this.btnStart.on(o.CLICK, this, this.startGame),
        this.btnGet.on(o.CLICK, this, this.getAwd),
        this.btnEquip.on(o.CLICK, this, this.onEquip),
        (this.btnGet.visible =
          PlatformAPI.createPrepareVideoAd &&
          PlatformAPI.getVideoAdPlayInfoToday("Prepare").valid),
        this.setKnife(),
        bgMusic && bgMusic.isStopped && bgMusic.resume();
    }),
    (this.setKnife = function () {
      knifeConfig[g_PlayerData.knife] &&
        (this.imgKnife.skin = knifeConfig[g_PlayerData.knife].image);
    }),
    (this.updateMoney = function () {
      (this.txtMoney.text = parseInt(g_PlayerData.money) + ""),
        (this.txtDiamond.text = parseInt(g_PlayerData.diamond) + "");
    }),
    (this.onEquip = function () {
      g_SceneMgr.ChangeScene("EquipPanel", 2);
    });
  var g = function (e) {
    SoundManager.playSound("sound/selectitem.mp3", 1);
    var t = 0,
      a = i.indexOf(e.target.getChildByName("imgUse"));
    if (
      e.target.getChildByName("imgUse").visible ||
      "Free" === e.target.getChildByName("txtPrice").text
    )
      e.target.getChildByName("imgUse").visible =
        !e.target.getChildByName("imgUse").visible;
    else {
      (t = 0),
        (a = i.indexOf(e.target.getChildByName("imgUse"))),
        (t += itemConfig[a].price);
      for (var n = 0; n < i.length; n++)
        i[n].visible &&
          (g_PlayerData.buffList[n] || (t += itemConfig[n].price));
      if (g_PlayerData.money < t)
        return (
          MessageBox("Gold  coins inadequate!"),
          void Laya.SoundManager.playSound("sound/nomoney.mp3", 1)
        );
      e.target.getChildByName("imgUse").visible =
        !e.target.getChildByName("imgUse").visible;
    }
  };
  (this.onClick = function (e) {}),
    (this.onUpdate = function () {}),
    (this.ClosePanel = function () {
      for (var i = 0; i < 3; i++) a[i].off(o.CLICK, a[i], g);
      g_EventMgr.Off(Notifition.UpdateMoney, this, this.updateMoney),
        g_EventMgr.Off(Notifition.SetKnife, this, this.setKnife),
        e.Hide(),
        t.Hide();
    }),
    (this.updateMoney = function () {
      (this.txtMoney.text = parseInt(g_PlayerData.money) + ""),
        (this.txtDiamond.text = parseInt(g_PlayerData.diamond) + "");
    }),
    (this.getAwd = function () {
      PlatformAPI.createVideoAd("Prepare", function () {
        var e = parseInt(3 * Math.random());
        (g_PlayerData.buffList[e] = 1),
          localStorage.setItem(
            "buffList",
            JSON.stringify(g_PlayerData.buffList)
          ),
          (a[e].getChildByName("txtPrice").text = g_PlayerData.buffList[e]
            ? "Free"
            : itemConfig[e].price + ""),
          (i[e].visible = 1);
      });
    }),
    (this.startGame = function () {
      var e = localStorage.getItem("guide");
      if (!e || "1" != e.charAt(g_GameData.model - 1))
        return (
          n || (n = new Laya.Image()),
          s || (s = new Laya.Image()),
          (s.skin = "ui/bg.jpg"),
          (n.skin =
            "ui/xinshouyindao_" +
            (g_GameData.model == GameModel.CLASSIC ? 1 : 2) +
            ".png"),
          (n.anchorY = 0.5),
          (n.y = Laya.stage.height / 2),
          Laya.stage.addChild(s),
          Laya.stage.addChild(n),
          e || (e = "00"),
          (e = e.split("")).splice(g_GameData.model - 1, 1, "1"),
          (e = e.join("")),
          localStorage.setItem("guide", e),
          this.ClosePanel(),
          this.parent && this.parent.removeChild(this),
          s.on(o.CLICK, this, this.startGame),
          void n.on(o.CLICK, this, this.startGame)
        );
      n && n.parent && n.parent.removeChild(n),
        s && s.parent && s.parent.removeChild(s),
        g_GameData.model == GameModel.ARCADE &&
          ((g_GameData.countdown = totalARCADETime + spacing),
          (g_GameData.countdownfruit = 1)),
        g_GameMgr.resetGameData(),
        (g_GameData.gameState = GAME_PLAYING),
        g_SceneMgr.ChangeScene("GamePanel"),
        g_EventMgr.Event(Notifition.UpdateScore, [1, 2, 3]),
        (function () {
          for (var e = 0; e < i.length; e++)
            i[e].visible
              ? (g_PlayerData.buffList[e]
                  ? (g_PlayerData.buffList[e] = 0)
                  : (g_PlayerData.money -= parseInt(itemConfig[e].price)),
                0 == e
                  ? (g_PlayerData.useBuffList[e] = 3)
                  : 1 == e
                  ? (g_PlayerData.useBuffList[e] = 1)
                  : 2 == e && (g_PlayerData.useBuffList[e] = 3))
              : (g_PlayerData.useBuffList[e] = 0);
          localStorage.setItem(
            "buffList",
            JSON.stringify(g_PlayerData.buffList)
          ),
            localStorage.setItem("money", g_PlayerData.money);
        })();
    }),
    (this.onReturn = function () {
      g_SceneMgr.ChangeScene("StartPanel");
    }),
    (this.onHelp = function () {
      g_SceneMgr.ChangeScene("HelpPanel");
    });
}
Laya.class(PreparePanel, "PreparePanel", PrepareUI);
