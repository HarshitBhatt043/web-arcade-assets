var CLASS$ = Laya.class,
  STATICATTR$ = Laya.static,
  View = laya.ui.View,
  Dialog = laya.ui.Dialog,
  EndUI = (function (e) {
    function t() {
      (this.end = null), t.__super.call(this);
    }
    return (
      CLASS$(t, "ui.View.EndUI", View),
      (t.prototype.createChildren = function () {
        laya.ui.Component.prototype.createChildren.call(this),
          this.createView(t.uiView);
      }),
      (t.uiView = {
        type: "View",
        props: { width: 1280, height: 720 },
        child: [
          { type: "Image", props: { y: 0, x: 0, skin: "ui/bg.jpg" } },
          {
            type: "Image",
            props: {
              x: 624,
              var: "end",
              skin: "ui1/gameover.png",
              centerY: 0,
              anchorY: 0.5,
              anchorX: 0.5,
            },
          },
        ],
      }),
      t
    );
  })(),
  EquipUI = (function (e) {
    function t() {
      (this.txtDiamond = null),
        (this.txtMoney = null),
        (this.equipList = null),
        (this.bgList = null),
        (this.btnEquipL = null),
        (this.btnBgL = null),
        (this.btnEquipR = null),
        (this.btnBgR = null),
        (this.btnClose = null),
        t.__super.call(this);
    }
    return (
      CLASS$(t, "ui.View.EquipUI", View),
      (t.prototype.createChildren = function () {
        laya.ui.Component.prototype.createChildren.call(this),
          this.createView(t.uiView);
      }),
      (t.uiView = {
        type: "View",
        props: { width: 1280, height: 720 },
        child: [
          { type: "Image", props: { y: 0, x: 0, skin: "ui/bg.jpg" } },
          {
            type: "Image",
            props: { y: 33, x: 442, skin: "ui1/zhuangbeibiaoti.png" },
          },
          { type: "Image", props: { y: 54, x: 1302, skin: "ui/huobilan.png" } },
          { type: "Image", props: { y: -9, x: -1, skin: "ui/huobilan.png" } },
          { type: "Image", props: { y: 71, x: 1311, skin: "ui/shuijing.png" } },
          { type: "Image", props: { y: 3, x: 11, skin: "ui/gold.png" } },
          {
            type: "Label",
            props: {
              y: 81,
              x: 1373,
              width: 137,
              var: "txtDiamond",
              text: "钻石",
              height: 28,
              fontSize: 20,
              font: "Microsoft YaHei",
              color: "#ecdfdf",
              align: "left",
            },
          },
          {
            type: "Label",
            props: {
              y: 8,
              x: 73,
              width: 165,
              var: "txtMoney",
              text: "金币",
              height: 52,
              fontSize: 35,
              font: "Microsoft YaHei",
              color: "#ecdfdf",
              align: "left",
            },
          },
          {
            type: "List",
            props: {
              y: 148,
              x: 174,
              width: 920,
              var: "equipList",
              spaceX: 0,
              selectEnable: !0,
              repeatY: 1,
              repeatX: 4,
              height: 247,
            },
            child: [
              {
                type: "Box",
                props: { name: "render" },
                child: [
                  {
                    type: "Image",
                    props: {
                      y: 6,
                      x: 2,
                      skin: "ui1/zhuangbeikuang.png",
                      name: "img",
                    },
                  },
                  {
                    type: "Image",
                    props: {
                      y: 83,
                      x: 54,
                      width: 129,
                      name: "imgShow",
                      height: 120,
                    },
                  },
                  {
                    type: "Label",
                    props: {
                      y: 16,
                      x: 28,
                      width: 172,
                      text: "label",
                      name: "txtName",
                      height: 35,
                      fontSize: 30,
                      font: "Microsoft YaHei",
                      color: "#64400a",
                      align: "center",
                    },
                  },
                  {
                    type: "Image",
                    props: {
                      y: 134,
                      x: 110,
                      skin: "ui/shiyongzhong.png",
                      name: "imgUse",
                    },
                  },
                ],
              },
            ],
          },
          {
            type: "List",
            props: { y: 328, x: 126, width: 678, var: "bgList", height: 201 },
            child: [
              {
                type: "Box",
                props: { scaleY: 0.8, scaleX: 0.8, name: "render" },
                child: [
                  {
                    type: "Image",
                    props: { y: 6, x: 2, skin: "ui1/zhuangbeikuang.png" },
                  },
                  {
                    type: "Label",
                    props: {
                      y: 11,
                      x: 1,
                      width: 224,
                      text: "label",
                      name: "txtName",
                      height: 46,
                      fontSize: 40,
                      color: "#64400a",
                      align: "center",
                    },
                  },
                  {
                    type: "Image",
                    props: {
                      y: 132,
                      x: 104,
                      skin: "ui/shiyongzhong.png",
                      name: "imgUse",
                    },
                  },
                ],
              },
            ],
          },
          {
            type: "Image",
            props: {
              y: 230,
              x: 47,
              var: "btnEquipL",
              skin: "ui/zuojiantou.png",
            },
          },
          {
            type: "Image",
            props: { y: 396, x: 13, var: "btnBgL", skin: "ui/zuojiantou.png" },
          },
          {
            type: "Image",
            props: {
              y: 249,
              x: 1138,
              var: "btnEquipR",
              skin: "ui/youjiantou.png",
            },
          },
          {
            type: "Image",
            props: { y: 398, x: 834, var: "btnBgR", skin: "ui/youjiantou.png" },
          },
          {
            type: "Button",
            props: {
              y: 88,
              x: 1204,
              var: "btnClose",
              stateNum: 1,
              skin: "ui/chahao.png",
            },
          },
        ],
      }),
      t
    );
  })(),
  EquipChildUI = (function (e) {
    function t() {
      (this.btnClose = null),
        (this.imgShow = null),
        (this.txtName = null),
        (this.btnUnlock = null),
        (this.btnRandom = null),
        (this.btnEquip = null),
        (this.txtUnlock = null),
        (this.txtCondition = null),
        (this.txtEff = null),
        (this.txtDes = null),
        t.__super.call(this);
    }
    return (
      CLASS$(t, "ui.View.EquipChildUI", View),
      (t.prototype.createChildren = function () {
        laya.ui.Component.prototype.createChildren.call(this),
          this.createView(t.uiView);
      }),
      (t.uiView = {
        type: "View",
        props: { width: 1280, height: 720 },
        child: [
          { type: "Image", props: { y: 0, x: 0, skin: "ui/bg.jpg" } },
          {
            type: "Image",
            props: {
              x: 307,
              width: 655,
              skin: "ui1/zhuangbeixiangqingkuang.png",
              height: 537,
              centerY: 0,
            },
          },
          {
            type: "Image",
            props: { y: 92, x: 908, var: "btnClose", skin: "ui/chahao.png" },
          },
          {
            type: "Image",
            props: {
              x: 387,
              width: 130,
              var: "imgShow",
              height: 130,
              centerY: -101,
            },
          },
          {
            type: "Label",
            props: {
              x: 358,
              width: 181,
              var: "txtName",
              valign: "middle",
              text: "label",
              height: 45,
              fontSize: 30,
              font: "Microsoft YaHei",
              color: "#64400a",
              centerY: 36,
              align: "center",
            },
          },
          {
            type: "Button",
            props: {
              x: 370,
              var: "btnUnlock",
              stateNum: 1,
              skin: "ui/jiesuo.png",
              centerY: 168,
            },
          },
          {
            type: "Button",
            props: {
              x: 662,
              var: "btnRandom",
              stateNum: 1,
              skin: "ui/suiyuanjiesuo.png",
              centerY: 168,
            },
          },
          {
            type: "Button",
            props: {
              x: 516,
              var: "btnEquip",
              stateNum: 1,
              skin: "ui/zhuangbei.png",
              centerY: 168,
            },
          },
          {
            type: "Label",
            props: {
              x: 601,
              width: 206,
              var: "txtUnlock",
              text: "Watch video to unlock probability",
              height: 37,
              fontSize: 20,
              color: "#8b5d0b",
              centerY: 106,
              bold: !0,
            },
          },
          {
            type: "Label",
            props: {
              x: 344,
              width: 206,
              var: "txtCondition",
              text: "解锁条件",
              height: 37,
              fontSize: 20,
              font: "Microsoft YaHei",
              color: "#8b5d0b",
              centerY: 99,
              bold: !0,
              align: "center",
            },
          },
          {
            type: "Label",
            props: {
              x: 584,
              wordWrap: !0,
              width: 323,
              var: "txtEff",
              valign: "middle",
              text: "物品效果",
              height: 119,
              fontSize: 25,
              font: "Microsoft YaHei",
              color: "#996407",
              centerY: 9,
              align: "center",
            },
          },
          {
            type: "Label",
            props: {
              x: 585,
              wordWrap: !0,
              width: 319,
              var: "txtDes",
              valign: "middle",
              text: "物品描述",
              pivotY: 1,
              height: 119,
              fontSize: 25,
              font: "Microsoft YaHei",
              color: "#996407",
              centerY: -127,
              align: "center",
            },
          },
        ],
      }),
      t
    );
  })(),
  GameUI = (function (e) {
    function t() {
      (this.bg = null),
        (this.life0 = null),
        (this.life1 = null),
        (this.life2 = null),
        (this.life3 = null),
        (this.curScore = null),
        (this.highScore = null),
        (this.txtCountdown = null),
        (this.btnPause = null),
        (this.imgFire = null),
        (this.imgIce = null),
        (this.imgDouble = null),
        (this.txtTip = null),
        t.__super.call(this);
    }
    return (
      CLASS$(t, "ui.View.GameUI", View),
      (t.prototype.createChildren = function () {
        laya.ui.Component.prototype.createChildren.call(this),
          this.createView(t.uiView);
      }),
      (t.uiView = {
        type: "View",
        props: { width: 1280, height: 720 },
        child: [
          {
            type: "Image",
            props: { y: 0, x: 0, var: "bg", skin: "ui/bg.jpg" },
          },
          {
            type: "Image",
            props: { y: 70, x: 1100, var: "life0", skin: "ui/gamelife-3.png" },
          },
          {
            type: "Image",
            props: { y: 70, x: 1100, var: "life1", skin: "ui/gamelife-2.png" },
          },
          {
            type: "Image",
            props: { y: 70, x: 1100, var: "life2", skin: "ui/gamelife-1.png" },
          },
          {
            type: "Image",
            props: { y: 70, x: 1100, var: "life3", skin: "ui/gamelife-0.png" },
          },
          {
            type: "Label",
            props: {
              y: 8,
              x: 74,
              width: 169,
              var: "curScore",
              text: "0123",
              strokeColor: "#f8e9e7",
              height: 56,
              fontSize: 60,
              font: "num70",
              color: "#f90501",
              align: "left",
            },
          },
          {
            type: "Label",
            props: {
              y: 68,
              x: 79,
              width: 97,
              var: "highScore",
              text: "0123",
              height: 33,
              fontSize: 25,
              font: "num30",
              color: "#ee3411",
              align: "left",
            },
          },
          {
            type: "Label",
            props: {
              y: 75,
              x: 1127,
              var: "txtCountdown",
              text: "00:00",
              fontSize: 50,
              font: "num45",
              color: "#5df408",
            },
          },
          {
            type: "Button",
            props: {
              y: 626,
              x: 25,
              var: "btnPause",
              stateNum: 1,
              skin: "ui/zanting.png",
            },
          },
          {
            type: "Image",
            props: { y: 17, x: 269, var: "imgFire", skin: "ui/kuangre.png" },
          },
          {
            type: "Image",
            props: { y: 18, x: 542, var: "imgIce", skin: "ui/dongjie.png" },
          },
          {
            type: "Image",
            props: {
              y: 18,
              x: 815,
              var: "imgDouble",
              skin: "ui/shuangbeidefen.png",
            },
          },
          {
            type: "Label",
            props: {
              y: 120,
              x: 1114,
              width: 155,
              var: "txtTip",
              text: "每15秒加1血",
              strokeColor: "#ea9920",
              stroke: 2,
              height: 36,
              fontSize: 25,
              font: "Microsoft YaHei",
              color: "#f1351b",
              align: "left",
            },
          },
          {
            type: "Image",
            props: { y: 1, x: 9, width: 60, skin: "ui/score.png", height: 60 },
          },
          {
            type: "Image",
            props: { y: 68, x: 6, width: 66, skin: "ui/best.png", height: 26 },
          },
        ],
      }),
      t
    );
  })(),
  GiftUI = (function (e) {
    function t() {
      (this.imgShan = null),
        (this.btnGet = null),
        (this.btnClose = null),
        (this.imgGift = null),
        (this.imgItem = null),
        (this.txtItem = null),
        t.__super.call(this);
    }
    return (
      CLASS$(t, "ui.View.GiftUI", View),
      (t.prototype.createChildren = function () {
        laya.ui.Component.prototype.createChildren.call(this),
          this.createView(t.uiView);
      }),
      (t.uiView = {
        type: "View",
        props: { width: 1280, height: 720 },
        child: [
          { type: "Image", props: { y: 0, x: 0, skin: "ui/bg.jpg" } },
          {
            type: "Image",
            props: {
              y: 342,
              var: "imgShan",
              skin: "ui/shanguang.png",
              centerX: 0,
              anchorY: 0.5,
              anchorX: 0.5,
            },
          },
          {
            type: "Image",
            props: {
              skin: "ui/caizhi.png",
              scaleY: 1.3,
              scaleX: 1.3,
              centerY: 0,
              centerX: 0,
            },
          },
          {
            type: "Button",
            props: {
              var: "btnGet",
              stateNum: 1,
              skin: "ui/guankanlingqu.png",
              centerY: 171,
              centerX: 0,
            },
          },
          {
            type: "Button",
            props: {
              x: 778,
              var: "btnClose",
              stateNum: 1,
              skin: "ui/chahao.png",
              labelSize: 50,
              centerY: 172,
            },
          },
          {
            type: "Image",
            props: {
              var: "imgGift",
              skin: "ui/liwu.png",
              scaleY: 2,
              scaleX: 2,
              centerY: 0,
              centerX: 0,
              anchorY: 0.5,
              anchorX: 0.5,
            },
          },
          {
            type: "Image",
            props: {
              y: 336,
              var: "imgItem",
              centerX: 0,
              anchorY: 0.5,
              anchorX: 0.5,
            },
          },
          {
            type: "Label",
            props: {
              width: 116,
              var: "txtItem",
              text: "121",
              height: 59,
              font: "num70",
              centerY: 93,
              centerX: 0,
              align: "center",
            },
          },
        ],
      }),
      t
    );
  })(),
  HelpUI = (function (e) {
    function t() {
      (this.list = null), (this.posReturn = null), t.__super.call(this);
    }
    return (
      CLASS$(t, "ui.View.HelpUI", View),
      (t.prototype.createChildren = function () {
        laya.ui.Component.prototype.createChildren.call(this),
          this.createView(t.uiView);
      }),
      (t.uiView = {
        type: "View",
        props: { width: 960, height: 540 },
        child: [
          { type: "Image", props: { y: 0, x: 0, skin: "ui/bg.jpg" } },
          {
            type: "List",
            props: {
              width: 812,
              var: "list",
              spaceY: 30,
              repeatX: 1,
              height: 573,
              centerY: 52,
              centerX: 85,
            },
            child: [
              {
                type: "Box",
                props: { y: 0, x: 0, width: 588, name: "render", height: 100 },
                child: [
                  {
                    type: "Image",
                    props: {
                      y: 4,
                      x: 56,
                      width: 100,
                      name: "imgHead",
                      height: 100,
                    },
                  },
                  {
                    type: "Label",
                    props: {
                      y: 34,
                      x: 258,
                      wordWrap: !0,
                      width: 501,
                      text: "普通水果",
                      name: "txtDes",
                      height: 50,
                      fontSize: 25,
                      font: "Microsoft YaHei",
                      color: "#ffffff",
                      bold: !0,
                    },
                  },
                ],
              },
            ],
          },
          {
            type: "Sprite",
            props: { y: 532, x: 1129, width: 47, var: "posReturn", height: 37 },
          },
        ],
      }),
      t
    );
  })(),
  PrepareUI = (function (e) {
    function t() {
      (this.btnGet = null),
        (this.btnStart = null),
        (this.txtDiamond = null),
        (this.txtMoney = null),
        (this.item0 = null),
        (this.btnEquip = null),
        (this.item1 = null),
        (this.item2 = null),
        (this.imgModel0 = null),
        (this.imgModel1 = null),
        (this.posReturn = null),
        (this.posHelp = null),
        (this.imgKnife = null),
        t.__super.call(this);
    }
    return (
      CLASS$(t, "ui.View.PrepareUI", View),
      (t.prototype.createChildren = function () {
        laya.ui.Component.prototype.createChildren.call(this),
          this.createView(t.uiView);
      }),
      (t.uiView = {
        type: "View",
        props: { width: 1280, height: 720 },
        child: [
          { type: "Image", props: { y: 0, x: 0, skin: "ui/bg.jpg" } },
          {
            type: "Button",
            props: {
              var: "btnGet",
              stateNum: 1,
              skin: "ui/suijidaoju.png",
              centerY: 180,
              centerX: -165,
            },
          },
          {
            type: "Button",
            props: {
              x: 632,
              var: "btnStart",
              stateNum: 1,
              skin: "ui/kaishiyouxi.png",
              centerY: 180,
            },
          },
          { type: "Image", props: { y: 75, x: 1305, skin: "ui/huobilan.png" } },
          { type: "Image", props: { y: 10, x: 1, skin: "ui/huobilan.png" } },
          { type: "Image", props: { y: 93, x: 1312, skin: "ui/shuijing.png" } },
          { type: "Image", props: { y: 18, x: 10, skin: "ui/gold.png" } },
          {
            type: "Label",
            props: {
              y: 103,
              x: 1374,
              width: 137,
              var: "txtDiamond",
              text: "钻石",
              height: 28,
              fontSize: 20,
              font: "Microsoft YaHei",
              color: "#ecdfdf",
              align: "left",
            },
          },
          {
            type: "Label",
            props: {
              y: 27,
              x: 66,
              width: 155,
              var: "txtMoney",
              text: "金币",
              height: 50,
              fontSize: 35,
              font: "Microsoft YaHei",
              color: "#ecdfdf",
              align: "left",
            },
          },
          {
            type: "Sprite",
            props: { y: 152, x: 236, width: 238, var: "item0", height: 259 },
            child: [
              {
                type: "Image",
                props: { y: 0, x: 0, skin: "ui1/daojudiban.png", height: 262 },
              },
              {
                type: "Image",
                props: { y: 282, x: 2, skin: "ui/jinbidiban.png", height: 65 },
              },
              {
                type: "Image",
                props: {
                  y: 292,
                  x: 15,
                  width: 50,
                  skin: "ui/gold.png",
                  height: 50,
                },
              },
              {
                type: "Label",
                props: {
                  y: 296,
                  x: 70,
                  width: 145,
                  text: "999",
                  name: "txtPrice",
                  height: 35,
                  fontSize: 35,
                  color: "#f3efee",
                  align: "left",
                },
              },
              {
                type: "Image",
                props: { y: 81, x: 62, skin: "ui/daojutubiao_1.png" },
              },
              {
                type: "Image",
                props: { y: 189, x: 28, skin: "ui/wenzi_1.png" },
              },
              {
                type: "Image",
                props: {
                  y: 158,
                  x: 133,
                  skin: "ui/shiyongzhong.png",
                  name: "imgUse",
                },
              },
            ],
          },
          {
            type: "Image",
            props: { y: 59, x: 1007, skin: "ui1/zhuangbeibg.png" },
          },
          {
            type: "Button",
            props: {
              y: 535,
              x: 1025,
              var: "btnEquip",
              stateNum: 1,
              skin: "ui/genghuanzhuangbei.png",
            },
          },
          {
            type: "Sprite",
            props: { y: 152, x: 495, width: 235, var: "item1", height: 259 },
            child: [
              {
                type: "Image",
                props: { y: 0, x: 0, skin: "ui1/daojudiban.png", height: 262 },
              },
              {
                type: "Image",
                props: { y: 283, x: 8, skin: "ui/jinbidiban.png", height: 65 },
              },
              {
                type: "Image",
                props: {
                  y: 292,
                  x: 19,
                  width: 50,
                  skin: "ui/gold.png",
                  height: 50,
                },
              },
              {
                type: "Label",
                props: {
                  y: 296,
                  x: 75,
                  width: 146,
                  text: "999",
                  name: "txtPrice",
                  height: 35,
                  fontSize: 35,
                  color: "#f3efee",
                  align: "left",
                },
              },
              {
                type: "Image",
                props: { y: 86, x: 76, skin: "ui/daojutubiao_2.png" },
              },
              {
                type: "Image",
                props: { y: 193, x: 22, skin: "ui/wenzi_2.png" },
              },
              {
                type: "Image",
                props: {
                  y: 159,
                  x: 131,
                  skin: "ui/shiyongzhong.png",
                  name: "imgUse",
                },
              },
            ],
          },
          {
            type: "Sprite",
            props: { y: 146, x: 753, width: 236, var: "item2", height: 267 },
            child: [
              {
                type: "Image",
                props: { y: 7, x: 1, skin: "ui1/daojudiban.png", height: 262 },
              },
              {
                type: "Image",
                props: { y: 281, x: 6, skin: "ui/jinbidiban.png", height: 65 },
              },
              {
                type: "Image",
                props: {
                  y: 290,
                  x: 17,
                  width: 50,
                  skin: "ui/gold.png",
                  height: 50,
                },
              },
              {
                type: "Label",
                props: {
                  y: 296,
                  x: 69,
                  width: 151,
                  text: "999",
                  name: "txtPrice",
                  height: 35,
                  fontSize: 35,
                  color: "#f3efee",
                  align: "left",
                },
              },
              {
                type: "Image",
                props: { y: 94, x: 86, skin: "ui/daojutubiao_3.png" },
              },
              {
                type: "Image",
                props: { y: 199, x: 25, skin: "ui/wenzi_3.png" },
              },
              {
                type: "Image",
                props: {
                  y: 165,
                  x: 133,
                  skin: "ui/shiyongzhong.png",
                  name: "imgUse",
                },
              },
            ],
          },
          {
            type: "Image",
            props: {
              y: 15,
              x: 476,
              width: 397,
              skin: "ui1/zhandouzhunbei.png",
              height: 89,
            },
          },
          {
            type: "Image",
            props: {
              y: 98,
              x: 570,
              var: "imgModel0",
              skin: "ui1/jingdianmoshi.png",
            },
          },
          {
            type: "Image",
            props: {
              y: 98,
              x: 571,
              var: "imgModel1",
              skin: "ui1/jiejimoshi.png",
            },
          },
          { type: "Sprite", props: { y: 230, x: 118, var: "posReturn" } },
          { type: "Sprite", props: { y: 480, x: 122, var: "posHelp" } },
          {
            type: "Image",
            props: {
              y: 136,
              x: 1060,
              width: 128,
              var: "imgKnife",
              height: 120,
            },
          },
          {
            type: "Label",
            props: {
              y: 414,
              x: 1082,
              width: 69,
              text: "Not open",
              height: 29,
              fontSize: 20,
              font: "Microsoft YaHei",
              color: "#8b5c0b",
              bold: !0,
            },
          },
        ],
      }),
      t
    );
  })(),
  RankUI = (function (e) {
    function t() {
      (this.posClose = null),
        (this.posShare = null),
        (this.btnPrep = null),
        (this.btnNext = null),
        (this.list = null),
        t.__super.call(this);
    }
    return (
      CLASS$(t, "ui.View.RankUI", View),
      (t.prototype.createChildren = function () {
        laya.ui.Component.prototype.createChildren.call(this),
          this.createView(t.uiView);
      }),
      (t.uiView = {
        type: "View",
        props: { width: 1280, height: 720 },
        child: [
          { type: "Image", props: { y: 0, x: 0, skin: "ui/bg.jpg" } },
          {
            type: "Image",
            props: {
              y: 57,
              x: 311,
              width: 649,
              skin: "ui1/paihangbg.png",
              height: 552,
            },
          },
          {
            type: "Sprite",
            props: { y: 396, x: 150, width: 43, var: "posClose", height: 16 },
          },
          {
            type: "Sprite",
            props: {
              y: 146,
              x: 142,
              width: 36,
              var: "posShare",
              pivotY: -15,
              pivotX: -7,
              height: 16,
            },
          },
          {
            type: "Image",
            props: {
              y: 148,
              x: 1058,
              var: "btnPrep",
              skin: "ui/zuojiantou.png",
              rotation: -270,
              mouseEnabled: !0,
              layoutEnabled: !0,
              hitTestPrior: !0,
            },
          },
          {
            type: "Image",
            props: {
              y: 436,
              x: 1059,
              var: "btnNext",
              skin: "ui/youjiantou.png",
              rotation: 90,
            },
          },
          {
            type: "List",
            props: {
              y: 156,
              x: 336,
              width: 600,
              var: "list",
              spaceY: 7,
              repeatX: 1,
              height: 384,
            },
            child: [
              {
                type: "Box",
                props: {
                  y: 0,
                  x: 0,
                  width: 619,
                  visible: !1,
                  renderType: "render",
                  name: "render",
                  height: 70,
                },
                child: [
                  {
                    type: "Image",
                    props: {
                      y: 5,
                      x: 30,
                      width: 65,
                      name: "imgRank",
                      mouseThrough: !0,
                      mouseEnabled: !1,
                      height: 65,
                    },
                  },
                  {
                    type: "Label",
                    props: {
                      y: 18,
                      x: 202,
                      width: 145,
                      text: "name",
                      skin: "comp/label.png",
                      overflow: "hidden",
                      name: "txtName",
                      mouseThrough: !0,
                      mouseEnabled: !1,
                      height: 40,
                      fontSize: 40,
                      color: "#935f16",
                      align: "left",
                    },
                  },
                  {
                    type: "Label",
                    props: {
                      y: 18,
                      width: 139,
                      text: "score",
                      skin: "comp/label.png",
                      right: 57,
                      overflow: "visible",
                      name: "txtScore",
                      mouseThrough: !0,
                      mouseEnabled: !1,
                      height: 40,
                      fontSize: 40,
                      color: "#935f16",
                      align: "right",
                    },
                  },
                  {
                    type: "Label",
                    props: {
                      y: 17,
                      x: 49,
                      width: 76,
                      text: "1",
                      skin: "comp/label.png",
                      name: "txtRank",
                      mouseThrough: !0,
                      mouseEnabled: !1,
                      height: 20,
                      fontSize: 40,
                      color: "#935f16",
                      align: "left",
                    },
                  },
                  {
                    type: "Image",
                    props: {
                      y: 3,
                      x: 105,
                      width: 70,
                      name: "imgHead",
                      mouseThrough: !0,
                      mouseEnabled: !1,
                      height: 70,
                    },
                  },
                ],
              },
            ],
          },
        ],
      }),
      t
    );
  })(),
  ReliveUI = (function (e) {
    function t() {
      (this.posReturn = null), (this.posRelive = null), t.__super.call(this);
    }
    return (
      CLASS$(t, "ui.View.ReliveUI", View),
      (t.prototype.createChildren = function () {
        laya.ui.Component.prototype.createChildren.call(this),
          this.createView(t.uiView);
      }),
      (t.uiView = {
        type: "View",
        props: { width: 1280, height: 720 },
        child: [
          { type: "Image", props: { skin: "ui/bg.jpg" } },
          {
            type: "Image",
            props: { y: 69, x: 409, skin: "ui1/shifoufuhuo.png" },
          },
          {
            type: "Sprite",
            props: { y: 373, x: 372, width: 16, var: "posReturn", height: 16 },
          },
          { type: "Sprite", props: { y: 378, x: 970, var: "posRelive" } },
        ],
      }),
      t
    );
  })(),
  ResultUI = (function (e) {
    function t() {
      (this.curScore = null),
        (this.curMoney = null),
        (this.highScore = null),
        (this.btnDouble = null),
        (this.posReturn = null),
        (this.posAgain = null),
        (this.posRank = null),
        (this.posShare = null),
        t.__super.call(this);
    }
    return (
      CLASS$(t, "ui.View.ResultUI", View),
      (t.prototype.createChildren = function () {
        View.regComponent("Text", laya.display.Text),
          laya.ui.Component.prototype.createChildren.call(this),
          this.createView(t.uiView);
      }),
      (t.uiView = {
        type: "View",
        props: { y: 0, x: 0, width: 1280, height: 720 },
        child: [
          { type: "Image", props: { y: 0, x: 0, skin: "ui/bg.jpg" } },
          {
            type: "Image",
            props: {
              y: 66,
              x: 410,
              width: 417,
              skin: "ui1/daojudiban.png",
              height: 268,
            },
          },
          {
            type: "Text",
            props: {
              y: 149,
              x: 471,
              width: 290,
              var: "curScore",
              text: "0123456",
              height: 52,
              font: "num50",
              color: "#fffbfb",
              align: "center",
            },
          },
          {
            type: "Text",
            props: {
              y: 353,
              x: 592,
              width: 288,
              var: "curMoney",
              text: "×545",
              height: 53,
              fontSize: 40,
              font: "num45",
              color: "#f3f2ef",
              bold: !0,
              align: "left",
            },
          },
          {
            type: "Text",
            props: {
              y: 258,
              x: 477,
              width: 288,
              var: "highScore",
              text: "最佳:545",
              height: 38,
              fontSize: 30,
              font: "Microsoft YaHei",
              color: "#7d390d",
              bold: !0,
              align: "center",
            },
          },
          {
            type: "Button",
            props: {
              y: 421,
              x: 491,
              var: "btnDouble",
              stateNum: 1,
              skin: "ui/guangkanshuangbei.png",
              labelSize: 20,
            },
          },
          {
            type: "Sprite",
            props: { y: 494, x: 172, width: 44, var: "posReturn", height: 40 },
          },
          {
            type: "Sprite",
            props: { y: 501, x: 1054, width: 34, var: "posAgain", height: 36 },
          },
          {
            type: "Sprite",
            props: { y: 258, x: 1052, width: 46, var: "posRank", height: 32 },
          },
          {
            type: "Sprite",
            props: { y: 237, x: 169, width: 40, var: "posShare", height: 34 },
          },
          {
            type: "Image",
            props: { y: 34, x: 416, skin: "ui1/benjudefen.png" },
          },
          {
            type: "Text",
            props: {
              y: 220,
              x: 474,
              width: 288,
              text: "Best Score",
              height: 38,
              fontSize: 25,
              font: "Microsoft YaHei",
              color: "#7d390d",
              bold: !0,
              align: "center",
            },
          },
          {
            type: "Image",
            props: {
              y: 341,
              x: 516,
              width: 70,
              skin: "ui/jinbi.png",
              height: 70,
            },
          },
        ],
      }),
      t
    );
  })(),
  SettingUI = (function (e) {
    function t() {
      (this.btnMusic = null),
        (this.btnSound = null),
        (this.btnReturn = null),
        (this.btnClose = null),
        t.__super.call(this);
    }
    return (
      CLASS$(t, "ui.View.SettingUI", View),
      (t.prototype.createChildren = function () {
        laya.ui.Component.prototype.createChildren.call(this),
          this.createView(t.uiView);
      }),
      (t.uiView = {
        type: "View",
        props: { width: 960, height: 540 },
        child: [
          {
            type: "Label",
            props: {
              y: 52,
              x: 336,
              width: 201,
              text: "设置界面",
              height: 55,
              fontSize: 50,
              color: "#9dc51e",
            },
          },
          { type: "Sprite", props: { y: 249, x: 149, var: "btnMusic" } },
          { type: "Sprite", props: { y: 251, x: 311, var: "btnSound" } },
          { type: "Sprite", props: { y: 255, x: 515, var: "btnReturn" } },
          { type: "Sprite", props: { y: 259, x: 727, var: "btnClose" } },
        ],
      }),
      t
    );
  })(),
  StartUI = (function (e) {
    function t() {
      (this.bg = null),
        (this.posRank = null),
        (this.posEquip = null),
        (this.posArcade = null),
        (this.posClassic = null),
        (this.posChallenge = null),
        (this.btnSetting = null),
        (this.txtDiamond = null),
        (this.txtMoney = null),
        (this.imgLogo = null),
        t.__super.call(this);
    }
    return (
      CLASS$(t, "ui.View.StartUI", View),
      (t.prototype.createChildren = function () {
        laya.ui.Component.prototype.createChildren.call(this),
          this.createView(t.uiView);
      }),
      (t.uiView = {
        type: "View",
        props: { width: 1280, height: 720 },
        child: [
          {
            type: "Image",
            props: { y: 0, x: 0, var: "bg", skin: "ui/bg2.jpg" },
          },
          {
            type: "Sprite",
            props: {
              y: 351,
              x: 267,
              width: 39,
              var: "posRank",
              pivotY: 5,
              pivotX: -2,
              height: 31,
            },
          },
          {
            type: "Sprite",
            props: { y: 358, x: 1e3, width: 40, var: "posEquip", height: 36 },
          },
          {
            type: "Sprite",
            props: { y: 425, x: 364, width: 34, var: "posArcade", height: 32 },
          },
          {
            type: "Sprite",
            props: { y: 441, x: 512, width: 27, var: "posClassic", height: 26 },
          },
          {
            type: "Sprite",
            props: {
              y: 442,
              x: 754,
              width: 22,
              var: "posChallenge",
              height: 32,
            },
          },
          {
            type: "Button",
            props: {
              y: 555,
              x: 1118,
              var: "btnSetting",
              stateNum: 1,
              skin: "ui/shezhi.png",
            },
          },
          { type: "Image", props: { y: 64, x: 1300, skin: "ui/huobilan.png" } },
          { type: "Image", props: { y: 2, x: -2, skin: "ui/huobilan.png" } },
          { type: "Image", props: { y: 81, x: 1309, skin: "ui/shuijing.png" } },
          { type: "Image", props: { y: 14, x: 10, skin: "ui/gold.png" } },
          {
            type: "Label",
            props: {
              y: 91,
              x: 1371,
              width: 137,
              var: "txtDiamond",
              text: "钻石",
              height: 28,
              fontSize: 20,
              font: "Microsoft YaHei",
              color: "#ecdfdf",
              align: "left",
            },
          },
          {
            type: "Label",
            props: {
              y: 13,
              x: 63,
              width: 167,
              var: "txtMoney",
              valign: "middle",
              text: "123456789",
              height: 49,
              fontSize: 35,
              font: "Microsoft YaHei",
              color: "#ecdfdf",
              align: "left",
            },
          },
          {
            type: "Image",
            props: { x: 315, var: "imgLogo", top: 65, skin: "ui/logo.png" },
          },
        ],
      }),
      t
    );
  })();
