FruitGame.NetWorkManager = function () {
  (this.Init = function () {}),
    (this.GetPlayerData = function () {
      g_PlayerData || (g_PlayerData = []),
        (g_PlayerData.highScore =
          parseInt(localStorage.getItem("highScore")) || 0),
        (g_PlayerData.money = parseInt(localStorage.getItem("money")) || 0),
        (g_PlayerData.diamond = parseInt(localStorage.getItem("diamond")) || 0),
        (g_PlayerData.knife = parseInt(localStorage.getItem("knife")) || 0),
        (g_PlayerData.knifeList = localStorage.getItem("knifeList")
          ? JSON.parse(localStorage.getItem("knifeList"))
          : [1, 0, 0, 0, 0, 0, 0, 0, 0]),
        (g_PlayerData.bg = parseInt(localStorage.getItem("bg")) || 0),
        (g_PlayerData.bgList = localStorage.getItem("bgList")
          ? JSON.parse(localStorage.getItem("bgList"))
          : []),
        (g_PlayerData.tzList = localStorage.getItem("tzList")
          ? JSON.parse(localStorage.getItem("tzList"))
          : []),
        (g_PlayerData.buffList = localStorage.getItem("buffList")
          ? JSON.parse(localStorage.getItem("buffList"))
          : [0, 0, 0]);
    }),
    (this.AddItem = function (t, e) {
      if (1 == t)
        (g_PlayerData.money += parseInt(e)),
          localStorage.setItem("money", g_PlayerData.money),
          g_EventMgr.Event(Notifition.updateMoney);
      else if (2 == t)
        (g_PlayerData.diamond += parseInt(e)),
          localStorage.setItem("diamond", g_PlayerData.diamond);
      else if (3 == t)
        for (var a = 0; a < e.length; a++)
          (g_PlayerData.buffList[e[a][0]] = e[a][1]),
            localStorage.setItem(
              "buffList",
              JSON.stringify(g_PlayerData.buffList)
            );
    }),
    (this.AddKnife = function (t) {
      (g_PlayerData.knifeList[t] = 1),
        localStorage.setItem(
          "knifeList",
          JSON.stringify(g_PlayerData.knifeList)
        ),
        g_EventMgr.Event(Notifition.UpdateKnife);
    }),
    (this.SetKnife = function (t) {
      (g_PlayerData.knife = t),
        localStorage.setItem("knife", g_PlayerData.knife),
        g_GameMgr.setKnifeEff(),
        g_EventMgr.Event(Notifition.SetKnife);
    }),
    (this.AddBg = function (t) {});
};
