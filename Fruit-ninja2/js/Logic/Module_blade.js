!(function () {
  (bladeColor = "#00ff00"), (bladeWidth = 10);
  var t = function (t) {
    for (
      var e = bladeSystem.getParticles().length, o = t, i = t / (e - 1);
      e-- > 1;

    ) {
      topContext.lineWidth = 1 == e ? 1 : o;
      var l = bladeSystem.getParticles()[e],
        a = bladeSystem.getParticles()[e - 1];
      topContext.drawLine(
        l.position.x,
        l.position.y,
        a.position.x,
        a.position.y,
        bladeColor,
        o
      ),
        (o -= i) <= 0 && (o = 1);
    }
  };
  (buildColorBlade = function (e, o) {
    (topContext.strokeStyle = e),
      t(o),
      (topContext.strokeStyle = "#ff0000"),
      t(0.6 * o);
  }),
    (buildBladeParticle = function (t, e) {
      bladeSystem.createParticle(SPP.Particle).init(t, e, 0.2);
    });
})();
