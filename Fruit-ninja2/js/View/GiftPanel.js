function GiftPanel() {
  var t = Laya.Event;
  GiftPanel.super(this),
    (this.OpenPanel = function () {
      (this.btnGet.skin =
        PlatformAPI.createGiftVideoAd &&
        PlatformAPI.getVideoAdPlayInfoToday("Gift").valid
          ? "ui/guankanlingqu.png"
          : "ui3/fenxianglingqu.png"),
        this.btnClose.on(t.CLICK, this, this.onClose),
        this.btnGet.on(t.CLICK, this, this.onLottery),
        g_EventMgr.On(Notifition.GetLottery, this, this.getLottery),
        Laya.timer.loop(100, this.imgShan, function () {
          this.rotation += 2;
        }),
        (this.imgItem.skin = ""),
        (this.txtItem.text = ""),
        (this.btnGet.visible = !0),
        (this.imgGift.scaleX = this.imgGift.scaleY = 1),
        (this.btnClose.visible = !1),
        Laya.timer.once(3e3, this.btnClose, function () {
          this.visible = !0;
        });
    }),
    (this.onLottery = function () {
      Lottery(),
        "ui/guankanlingqu.png" == this.btnGet.skin
          ? PlatformAPI.createVideoAd("Gift", Lottery)
          : g_WxMgr.ShareGame(2, Lottery);
    }),
    (this.getLottery = function (t) {
      var i;
      if (((this.btnGet.visible = !1), t.money)) i = ["ui/jinbi.png", t.money];
      else if (t.diamond) i = ["ui/shuijing.png", t.diamond];
      else if (t.item) {
        var e = t.item,
          n = "ui/daojutubiao_" + (e[0][0] + 1) + ".png";
        i = [n, e[0][1]];
      }
      Laya.Tween.to(
        this.imgGift,
        { scaleX: 0, scaleY: 0 },
        500,
        null,
        Laya.Handler.create(this, function () {
          (this.imgItem.skin = i[0]),
            (this.txtItem.text = i[1]),
            (this.imgItem.scaleX = this.imgItem.sacleY = 0),
            Laya.Tween.to(
              this.imgItem,
              { scaleX: 1, scaleY: 1 },
              500,
              null,
              Laya.Handler.create(this, function () {})
            );
        })
      );
    }),
    (this.ClosePanel = function () {
      (this.imgItem.skin = ""),
        (this.txtItem.text = ""),
        Laya.timer.clearAll(this.btnClose);
    }),
    (this.onClose = function () {
      Laya.timer.clearAll(this.imgShan),
        g_EventMgr.Off(Notifition.GetLottery, this, this.getLottery),
        g_SceneMgr.ChangeScene("EndPanel");
    });
}
Laya.class(GiftPanel, "GiftPanel", GiftUI);
