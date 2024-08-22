function RankPanel() {
  RankPanel.super(this), Laya.Tween, Laya.Ease;
  var t,
    e,
    n = Laya.Event,
    a = 0;
  let i = 1,
    s = !0,
    r = !0,
    o = RankType.GLOBAL;
  this.OpenPanel = function (h) {
    (a = h),
      (t = CreateFruitButton(
        this.posClose,
        g_AssetsMgr.zihuan,
        g_AssetsMgr.fanhuizhuye,
        c,
        topContext
      )).Show(),
      (e = CreateFruitButton(
        this.posShare,
        g_AssetsMgr.lvhuan,
        g_AssetsMgr.xianyaofenxiang,
        this.onShare,
        topContext
      )).Show(),
      g_WxMgr.PostMessage({ cmd: RankType.Friend }, null, () => {
        this.DrawRank();
      }),
      this.btnPrep.on(n.CLICK, this, this.onPrep),
      this.btnNext.on(n.CLICK, this, this.onNext),
      (i = 1),
      (s = !0),
      (r = !0),
      (o = RankType.GLOBAL),
      u([]),
      l(0);
  };
  const h = (t) => {
      (r = !0), (s = t);
    },
    l = (t) => {
      r &&
        ((r = !1),
        (s = !1),
        ((t, e, n, a, i) => {
          FBInstant.getLeaderboardAsync("globalRank")
            .then((t) => t.getEntriesAsync.call(t, 5, 5 * (n - 1)))
            .then((t) => {
              a(5 === t.length), u(t.map(g));
            })
            .catch((t) => {
              console.error(t),
                i(),
                a(!0),
                PlatformAPI.showModal({
                  title: "RATE_LIMITED",
                  content: "Too frequently! Try again later!",
                });
            });
        })(0, 0, i, h, () => {
          i += t;
        }));
    };
  (this.onPrep = function () {
    Laya.SoundManager.playSound("sound/clickbtn.mp3", 1);
    const t = i;
    (i = Math.max(1, i - 1)) != t && l(1);
  }),
    (this.onNext = function () {
      Laya.SoundManager.playSound("sound/clickbtn.mp3", 1), s && (i++, l(-1));
    }),
    (this.onUpdate = function () {}),
    (this.ClosePanel = function () {
      t.Hide(), e.Hide();
    }),
    (this.DrawRank = function () {}),
    (this.updateRank = function () {
      d();
    }),
    (this.gameOverComplete = function () {
      g_SceneMgr.ChangeScene("StartPanel");
    });
  var c = function () {
    g_SceneMgr.ChangeScene(1 == a ? "StartPanel" : "ResultPanel");
  };
  this.onShare = function () {
    g_WxMgr.ShareGame(), e.ResetFruit();
  };
  const g = (t) => {
    const e = t.getRank(),
      n = t.getPlayer();
    return {
      nickname: n.getName(),
      score: t.getScore(),
      rank: e,
      avatarUrl: n.getPhoto(),
    };
  };
  (this.index = 0), (this.maxIndex = 0);
  var u = (t) => {
    (this.list.vScrollBarSkin = ""),
      (this.list.renderHandler = new Handler(this, d)),
      (this.list.array = t),
      this.list.scrollTo(this.index * this.list.repeatX),
      (this.maxIndex =
        (this.list.length - this.list.repeatX) / this.list.repeatX + 1);
  };
  function d(t) {
    var e = t.dataSource;
    (t.getChildByName("txtScore").text = e.score),
      (t.getChildByName("txtName").text = e.nickname),
      (t.getChildByName("imgHead").skin = e.avatarUrl),
      (t.getChildByName("txtRank").text = e.rank > 3 ? e.rank : ""),
      (t.getChildByName("imgRank").skin =
        e.rank <= 3 ? "ui1/rank" + e.rank + ".png" : "");
  }
}
Laya.class(RankPanel, "RankPanel", RankUI);
