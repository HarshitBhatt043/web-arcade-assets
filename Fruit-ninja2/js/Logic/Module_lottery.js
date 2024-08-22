!(function () {
  Lottery = function () {
    var e = t(),
      r = deepClone(giftConfig),
      a = [],
      o = localStorage.getItem("lottery")
        ? JSON.parse(localStorage.getItem("lottery"))
        : {};
    for (var n in o) n != e && (o[n] = null);
    for (var n in (o[e] || (o[e] = {}), r)) {
      let t = r[n];
      t && (!t.max || !o[e][n] || o[e][n] < t.max) && a.push([n, t.chance]);
    }
    for (var g = 0, i = [], l = 0; l < a.length; l++) (g += a[l][1]), i.push(g);
    var c = 0,
      f = Math.random() * g;
    for (l = 0; l < i.length; l++)
      if (f <= i[l]) {
        c = l;
        break;
      }
    var m = parseInt(a[c][0]),
      s = (o[e][m] ? o[e][m] : 0) + 1;
    o[e] || (o[e] = {}),
      (o[e][m] = s),
      (o = JSON.stringify(o)),
      localStorage.setItem("lottery", o);
    var d = r[m].awd;
    if ((g_EventMgr.Event(Notifition.GetLottery, [d]), d))
      for (var n in d)
        switch (n) {
          case "money":
            g_NetWorkMgr.AddItem(1, d[n]);
            break;
          case "diamond":
            g_NetWorkMgr.AddItem(2, d[n]);
            break;
          case "item":
            g_NetWorkMgr.AddItem(3, d[n]);
        }
  };
  const t = () => {
    const t = new Date();
    return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
  };
})();
