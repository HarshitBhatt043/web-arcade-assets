var EventManager = (function (e) {
    function t() {
      t.super(this);
    }
    return (
      Laya.class(t, "EventManager", e),
      (t.EventDispatcher = new Laya.EventDispatcher()),
      (t.Event = function (e, n) {
        t.EventDispatcher.event(e, n);
      }),
      (t.On = function (e, n, a, i) {
        t.EventDispatcher.on(e, n, a, null == i ? null : [i]);
      }),
      (t.Off = function (e, n, a) {
        t.EventDispatcher.off(e, n, a);
      }),
      t
    );
  })(Laya.EventDispatcher),
  Notifition = {
    UpdateScore: 0,
    UpdateLife: 1,
    UpdateItem: 2,
    UpdateKnife: 3,
    SetKnife: 4,
    UpdateBuff: 5,
    GetLottery: 6,
  };
