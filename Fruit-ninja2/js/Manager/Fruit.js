(FruitGame.Fruit = function () {
  SPP.Particle.call(this),
    (this.drawTexture = function (t, i, e, h) {
      t.drawTexture(i, 0.5 * -i.width, 0.5 * -i.height);
    });
}),
  SPP.inherit(FruitGame.Fruit, SPP.Particle),
  (FruitGame.Fruit.prototype.update = function () {
    null == this.position ||
    (this.position.y > this.bottomY && null != this.bottomY)
      ? (this.life = 0)
      : ((this.rotation += this.rotationStep),
        null == this.context ||
          null == this.texture ||
          (this.context.save(),
          (this.context.alpha = this.alpha),
          this.context.translate(this.position.x, this.position.y),
          this.context.rotate(this.rotation),
          this.context.scale(this.scale, this.scale),
          this.context.drawTexture(
            this.texture,
            -this.texture.width / 2,
            -this.texture.height / 2,
            0,
            0,
            null,
            this.alpha
          ),
          this.context.restore()));
  }),
  (FruitGame.Fruit.prototype.init = function (t, i, e, h, s, o) {
    SPP.Particle.prototype.init.apply(this, [t, i, e]),
      (this.context = o),
      (this.texture = h),
      (this.shadow = s),
      (this.rotation = 0),
      (this.scale = 1),
      (this.radius = h.width >= h.height ? 0.5 * h.width : 0.5 * h.height),
      (this.radius *= this.scale),
      (this.bottomY = null),
      (this.rotationStep = 0.1 * (1 - 2 * Math.random())),
      this.rotationStep <= 0
        ? (this.rotationStep = -0.07)
        : this.rotationStep > 0 && (this.rotationStep = 0.07),
      this.texture &&
        this.texture.url.indexOf("pomegranate") > -1 &&
        (this.rotationStep = -0.01);
  });
