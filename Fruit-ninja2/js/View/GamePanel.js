function GamePanel() {
  var t;
  GamePanel.super(this);
  var e = [this.imgFire, this.imgIce, this.imgDouble];
  (this.btnPause.visible = !1),
    (this.OpenPanel = function () {
      (this.txtTip.visible = !1),
        this.updateScore(),
        g_EventMgr.On(Notifition.UpdateScore, this, this.updateScore),
        g_EventMgr.On(Notifition.UpdateLife, this, this.updateLife),
        g_EventMgr.On(Notifition.UpdateBuff, this, this.updateBuff),
        (t = [this.life3, this.life2, this.life1, this.life0]),
        this.updateLife(),
        g_GameData.model == GameModel.ARCADE
          ? (this.updateTime(), Laya.timer.frameLoop(10, this, this.updateTime))
          : (Laya.timer.clearAll(this), (this.txtCountdown.text = "")),
        this.updateBuff(),
        bgMusic && bgMusic.stop(),
        SoundManager.playSound("sound/start.mp3", 1);
    }),
    (this.updateBuff = function () {
      (e[1].visible = 1 != slowdown),
        (e[0].visible = wThrowFruit > 0),
        (e[2].visible = bDoublescore > 0);
      for (var t = [], i = 0; i < 3; i++) e[i].visible && t.push(e[i]);
      var a = Laya.stage.width / 2 - (e[0].width / 2) * t.length;
      for (i = 0; i < t.length; i++) t[i].x = a + e[0].width * i;
    }),
    (this.updateTime = function () {
      var t = g_GameData.countdown - spacing;
      this.txtCountdown.text =
        t < 10 ? (t > 0 ? "0" + parseInt(t) : "00") : parseInt(t);
    }),
    (this.ClosePanel = function () {
      Laya.timer.clearAll(this),
        g_EventMgr.Off(Notifition.UpdateScore, this, this.updateScore),
        g_EventMgr.Off(Notifition.UpdateLife, this, this.updateLife),
        g_EventMgr.Off(Notifition.UpdateItem, this, this.updateBuff);
    }),
    (this.updateLife = function () {
      if (g_GameData.model == GameModel.ARCADE)
        for (var e = 0; e < t.length; e++) t[e].visible = !1;
      else for (e = 0; e < t.length; e++) t[e].visible = g_PlayerData.Hp == e;
    }),
    (this.updateScore = function () {
      g_GameData.gameState == GAME_PLAYING &&
        ((this.curScore.text = parseInt(g_PlayerData.curScore) + ""),
        (this.highScore.text = parseInt(g_PlayerData.highScore) + ""));
    });
}
Laya.class(GamePanel, "GamePanel", GameUI);
