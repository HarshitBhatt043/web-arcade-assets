function EndPanel() {
  EndPanel.super(this);
  var a = Laya.Tween,
    e = Laya.Ease,
    t = Laya.Event;
  (this.OpenPanel = function () {
    (g_GameData.gameState = GAME_END),
      (this.end.scaleX = this.end.scaleY = 0),
      a.to(
        this.end,
        { scaleX: 1, scaleY: 1 },
        800,
        e.backOut,
        Laya.Handler.create(this, this.gameOverComplete)
      ),
      Laya.timer.once(3e3, this, this.replay);
  }),
    (this.onUpdate = function () {}),
    (this.ClosePanel = function () {
      Laya.stage.off(t.CLICK, this, this.replay), Laya.timer.clearAll(this);
    }),
    (this.gameOverComplete = function () {
      ShowYaBanner(), Laya.stage.on(t.CLICK, this, this.replay);
    }),
    (this.replay = function (a) {
      Laya.timer.clearAll(this), g_SceneMgr.ChangeScene("ResultPanel");
    });
}
Laya.class(EndPanel, "EndPanel", EndUI);
