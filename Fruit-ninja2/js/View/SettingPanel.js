function SettingPanel() {
  SettingPanel.super(this),
    Laya.Tween,
    Laya.Ease,
    Laya.Event,
    (this.OpenPanel = function () {}),
    (this.onUpdate = function () {}),
    (this.ClosePanel = function () {});
}
Laya.class(SettingPanel, "SettingPanel", SettingUI);
