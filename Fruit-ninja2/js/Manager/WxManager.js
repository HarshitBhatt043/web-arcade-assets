FruitGame.WxManager = function () {
  var e = Laya.Browser.window.wx;
  (this.bWx = !0),
    (this.Init = function () {
      e.showShareMenu({ withShareTicket: !0 });
      var a = SSSGameConfig.getRandomShareUnit();
      e.onShareAppMessage(function () {
        return {
          title: a.title,
          imageUrl: a.imageUrl,
          query: "uid=" + g_PlayerData.uid,
        };
      });
    }),
    (this.PostMessage = function (a, t, i) {
      void 0 != e &&
        (e.getOpenDataContext().postMessage(a),
        i &&
          Laya.timer.once(400, this, function () {
            null == t || void 0 == t ? i(a) : t.callback(a);
          }));
    }),
    (this.SendUserData = function (a) {
      void 0 != e &&
        e.setUserCloudStorage({
          KVDataList: [
            { key: "score", value: String(a.score) },
            { key: "updateTime", value: String(new Date().getTime()) },
          ],
          success: function () {},
          fail: function () {},
        });
    }),
    (this.ShareGame = function (a, t) {
      void 0 != e &&
        e.updateShareMenu({
          withShareTicket: 2 == a,
          success: function () {
            var i = SSSGameConfig.getRandomShareUnit();
            e.shareAppMessage({
              title: i.title,
              imageUrl: i.imageUrl,
              query: g_PlayerData.uid,
              success: function (e) {
                console.log("分享成功"), 2 != a || (e.shareTickets && t());
              },
            });
          },
        });
    });
};
var RankType = { Resize: 0, Friend: 1, Group: 2, World: 3, Page: 4 };
