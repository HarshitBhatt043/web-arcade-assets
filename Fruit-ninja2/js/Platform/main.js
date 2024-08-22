!(function e(t, n, o) {
  function a(r, c) {
    if (!n[r]) {
      if (!t[r]) {
        var s = "function" == typeof require && require;
        if (!c && s) return s(r, !0);
        if (i) return i(r, !0);
        var l = new Error("Cannot find module '" + r + "'");
        throw ((l.code = "MODULE_NOT_FOUND"), l);
      }
      var u = (n[r] = { exports: {} });
      t[r][0].call(
        u.exports,
        function (e) {
          return a(t[r][1][e] || e);
        },
        u,
        u.exports,
        e,
        t,
        n,
        o
      );
    }
    return n[r].exports;
  }
  for (
    var i = "function" == typeof require && require, r = 0;
    r < o.length;
    r++
  )
    a(o[r]);
  return a;
})(
  {
    1: [
      function (e, t, n) {
        "use strict";
        n.__esModule = !0;
        var o,
          a,
          i = [
            "af_ZA",
            "ar_AR",
            "az_AZ",
            "be_BY",
            "bg_BG",
            "bn_IN",
            "bs_BA",
            "ca_ES",
            "cs_CZ",
            "cx_PH",
            "cy_GB",
            "da_DK",
            "de_DE",
            "el_GR",
            "en_GB",
            "en_PI",
            "en_UD",
            "en_US",
            "eo_EO",
            "es_ES",
            "es_LA",
            "et_EE",
            "eu_ES",
            "fa_IR",
            "fb_LT",
            "fi_FI",
            "fo_FO",
            "fr_CA",
            "fr_FR",
            "fy_NL",
            "ga_IE",
            "gl_ES",
            "gn_PY",
            "he_IL",
            "hi_IN",
            "hr_HR",
            "hu_HU",
            "hy_AM",
            "id_ID",
            "is_IS",
            "it_IT",
            "ja_JP",
            "jv_ID",
            "ka_GE",
            "km_KH",
            "kn_IN",
            "ko_KR",
            "ku_TR",
            "la_VA",
            "lt_LT",
            "lv_LV",
            "mk_MK",
            "ml_IN",
            "ms_MY",
            "nb_NO",
            "ne_NP",
            "nl_NL",
            "nn_NO",
            "pa_IN",
            "pl_PL",
            "ps_AF",
            "pt_BR",
            "pt_PT",
            "ro_RO",
            "ru_RU",
            "si_LK",
            "sk_SK",
            "sl_SI",
            "sq_AL",
            "sr_RS",
            "sv_SE",
            "sw_KE",
            "ta_IN",
            "te_IN",
            "th_TH",
            "tl_PH",
            "tr_TR",
            "uk_UA",
            "ur_PK",
            "vi_VN",
            "zh_CN",
            "zh_HK",
            "zh_TW",
          ];
        !(function (e) {
          (e[(e.UNLOAD = 0)] = "UNLOAD"),
            (e[(e.LOADING = 1)] = "LOADING"),
            (e[(e.LOADED = 2)] = "LOADED");
        })(o || (o = {})),
          (function (e) {
            (e[(e.REWARD = 0)] = "REWARD"),
              (e[(e.INTERSTITIAL = 1)] = "INTERSTITIAL");
          })(a || (a = {}));
        var r = {};
        (r[a.REWARD] = { id: "", list: [] }),
          (r[a.INTERSTITIAL] = { id: "", list: [] });
        for (
          var c = 0,
            s = function () {
              return c++, { status: o.UNLOAD, instance: null, index: c };
            },
            l = 0;
          l < 3;
          l++
        )
          r[a.REWARD].list.push(s()), r[a.INTERSTITIAL].list.push(s());
        var u = function (e) {
            if (r[e].id) {
              var t = null;
              return (
                r[e].list.forEach(function (n, i) {
                  switch (n.status) {
                    case o.UNLOAD:
                      (n.status = o.LOADING),
                        setTimeout(function () {
                          !(function (e, t) {
                            var n = r[t].id,
                              i = null,
                              c = "";
                            t === a.REWARD
                              ? ((c = "视频"),
                                (i =
                                  FBInstant.getRewardedVideoAsync.bind(
                                    FBInstant
                                  )))
                              : ((c = "插屏"),
                                (i =
                                  FBInstant.getInterstitialAdAsync.bind(
                                    FBInstant
                                  )));
                            var s = function () {
                              e.instance
                                .loadAsync()
                                .then(function () {
                                  console.log(
                                    "加载" + c + "广告成功!" + e.index
                                  ),
                                    (e.status = o.LOADED);
                                })
                                .catch(function (t) {
                                  (e.status = o.UNLOAD),
                                    console.log(
                                      "加载" + c + "广告失败! " + e.index
                                    ),
                                    console.error(t);
                                });
                            };
                            e.instance
                              ? s()
                              : i(n)
                                  .then(function (t) {
                                    (e.instance = t), s();
                                  })
                                  .catch(function (t) {
                                    (e.status = o.UNLOAD),
                                      console.log(
                                        "初始化" + c + "广告失败! " + e.index
                                      ),
                                      console.error(t);
                                  });
                          })(n, e);
                        }, 1e4 * i);
                      break;
                    case o.LOADING:
                      break;
                    case o.LOADED:
                      t = t || n;
                  }
                }),
                t
              );
            }
          },
          d = function (e, t) {
            var n = u(e),
              i = e === a.REWARD,
              r = i ? "视频" : "插屏";
            n
              ? ((n.status = o.UNLOAD),
                n.instance
                  .showAsync()
                  .then(function () {
                    delete n.instance, u(e), t();
                  })
                  .catch(function (a) {
                    "RATE_LIMITED" !== a.code
                      ? delete n.instance
                      : ((n.status = o.LOADING),
                        setTimeout(function () {
                          n.status = o.LOADED;
                        }, 1e4)),
                      console.error(r, "广告播放失败!", a),
                      console.log("尝试获取另一个" + r + "广告"),
                      d(e, t);
                  }))
              : (console.error("没有已加载完毕的" + r + "广告!"),
                console.log(i ? "即将播放插屏广告!" : "即将直接发放奖励!"),
                i ? d(a.INTERSTITIAL, t) : t(1));
          },
          f = 0,
          g = function (e) {
            var t = e.callback;
            if (!FBInstant.context.getID()) return t && t(!1, "没有环境");
            var n = e.score + "";
            PlatformAPI.makeChallengeImage({
              imageUrl: "./fbcdn/shareImage.png",
              score: n,
              callback: function (e) {
                var o = PlatformAPI.challengeText.replace("{0}", n),
                  a = {};
                i.forEach(function (e) {
                  a[e] = o;
                });
                var r = {
                  action: "CUSTOM",
                  image: e,
                  text: { default: o, localizations: a },
                  template: "",
                  notification: "PUSH",
                };
                FBInstant.updateAsync(r)
                  .then(function () {
                    t && t(!0);
                  })
                  .catch(function (e) {
                    t && t(!1, e);
                  });
              },
            });
          },
          m = {
            platform: "FBInstant",
            share: function (e) {
              void 0 === e && (e = function () {}),
                (function (e, t) {
                  var n = e.includes("https") ? PlatformAPI.getItem(e) : "";
                  n
                    ? t(n)
                    : PlatformAPI.getBase64Async(e, function (e) {
                        t(e);
                      });
                })("./fbcdn/shareImage.png", function (t) {
                  FBInstant.shareAsync({
                    intent: "REQUEST",
                    image: t,
                    text: "Let's play this amazing game!",
                    data: {},
                  })
                    .then(function (t) {
                      console.log("shareResult", t), e();
                    })
                    .catch(function (e) {
                      console.error("shareResult", e);
                    });
                });
            },
            onHide: function (e) {
              FBInstant.onPause(e);
            },
            createShortcut: function () {
              FBInstant.canCreateShortcutAsync().then(function (e) {
                e && FBInstant.createShortcutAsync();
              });
            },
            createVideoAd: function (e, t) {
              d(a.REWARD, t);
            },
            createInterstitialAd: function (e, t) {
              d(a.INTERSTITIAL, t);
            },
            initAd: function (e) {
              var t,
                n = e.fb_site.img_ad,
                o = e.fb_site.video_ad;
              (f = +e.fb_site.banner_to_interstitial_probability),
                console.log("RewardedVideoId:", o || "视频广告未配置"),
                console.log("InterstitialAdId:", n || "插屏广告未配置"),
                console.log("BannerToInterstitialProbability:", f),
                o &&
                  -1 !==
                    FBInstant.getSupportedAPIs().indexOf(
                      "getRewardedVideoAsync"
                    ) &&
                  ((t = o), (r[a.REWARD].id = t), u(a.REWARD)),
                n &&
                  -1 !==
                    FBInstant.getSupportedAPIs().indexOf(
                      "getInterstitialAdAsync"
                    ) &&
                  (function (e) {
                    (r[a.INTERSTITIAL].id = e), u(a.INTERSTITIAL);
                  })(n),
                m.createShortcut();
            },
            chooseAsync: function (e, t) {
              FBInstant.context
                .chooseAsync({ filter: ["NEW_CONTEXT_ONLY"] })
                .then(function () {
                  g({ score: e, callback: t });
                })
                .catch(function () {
                  t && t(!1);
                });
            },
            getLocaleType: function () {
              return "zh_CN" === FBInstant.getLocale() ? "zh" : "en";
            },
            shareAppMessage: function (e) {
              m.share(e.success);
            },
            navigateToMiniProgram: function (e) {
              PlatformAPI.request({
                method: "POST",
                url: "https:///game/fb/sharelog.html",
                data: {
                  fb: PlatformAPI.gameId,
                  index: e.btnIndex,
                  type: 1,
                  player_id: FBInstant.player.getID(),
                },
              }),
                FBInstant.switchGameAsync(e.appId, e.extraData)
                  .then(function () {
                    PlatformAPI.request({
                      method: "POST",
                      url: "https:///game/fb/sharelog.html",
                      data: {
                        fb: PlatformAPI.gameId,
                        index: e.btnIndex,
                        type: 2,
                        player_id: FBInstant.player.getID(),
                      },
                    }),
                      e.success && e.success();
                  })
                  .catch(function (t) {
                    e.fail && e.fail();
                  });
            },
            setUserCloudStorage: function (e) {
              var t = {};
              e.KVDataList.forEach(function (e) {
                t[e.key] = e.value;
              }),
                FBInstant.player.setStatsAsync(t).then(e.success);
            },
            getPlayerInfo: function () {
              if (FBInstant.player.getName())
                return {
                  nickName: FBInstant.player.getName(),
                  nickname: FBInstant.player.getName(),
                  avatarUrl: FBInstant.player.getPhoto(),
                };
              var e = {};
              return (
                Object.defineProperty(e, "nickName", {
                  get: function () {
                    return FBInstant.player.getName();
                  },
                }),
                Object.defineProperty(e, "nickname", {
                  get: function () {
                    return FBInstant.player.getName();
                  },
                }),
                Object.defineProperty(e, "avatarUrl", {
                  get: function () {
                    return FBInstant.player.getPhoto();
                  },
                }),
                e
              );
            },
            setCloudStats: function (e, t) {
              FBInstant.player.setStatsAsync(e).then(function () {
                t && t();
              });
            },
            getCloudStats: function (e) {},
            shareWithImage: function (e, t, n) {
              "function" != typeof n && (n = function () {}),
                FBInstant.shareAsync({
                  intent: "REQUEST",
                  image: e,
                  text: "Let's play this amazing game!",
                  data: {},
                })
                  .then(function (e) {
                    console.log("shareResult", e), n({});
                  })
                  .catch(function (e) {
                    console.error("shareResult", e);
                  });
            },
            updateLeaderboard: function (e, t, n) {
              m.updateScoreToContext(t);
              var o = void 0;
              if (void 0 !== n) {
                if (typeof n != typeof {})
                  return void console.error("extraData必须是一个Object");
                o = JSON.stringify(n);
              }
              FBInstant.getLeaderboardAsync(e)
                .then(function (e) {
                  return e.setScoreAsync(t, o);
                })
                .catch(function (e) {
                  console.error(e);
                });
            },
            createBannerAd: function (e) {
              return (
                console.log("banner 转 插屏几率", f),
                f &&
                  Math.random() < f / 100 &&
                  PlatformAPI.createInterstitialAd(e, function () {}),
                new Proxy(
                  {},
                  {
                    get: function (e, t) {
                      return function () {};
                    },
                  }
                )
              );
            },
            createAsync: function (e) {
              var t = e.callback,
                n = e.id;
              FBInstant.context
                .createAsync(n)
                .then(function () {
                  g(e);
                })
                .catch(function (e) {
                  t && t(!1, e);
                });
            },
            updateScoreToContext: function (e, t) {
              void 0 === t && (t = function () {}),
                g({ score: e, callback: t });
            },
          };
        n.default = m;
      },
      {},
    ],
    2: [
      function (e, t, n) {
        "use strict";
        n.__esModule = !0;
        var o = e("./ToastAndModal"),
          a = e("./SSSGameConfig"),
          i = {
            initializeAsync: () =>
              new Promise((e) => {
                e();
              }),
            startGameAsync: () =>
              new Promise((e) => {
                e();
              }),
            platform: "H5",
            toast: null,
            showToast: function (e) {
              "string" == typeof e
                ? o.default.showToast({ content: e })
                : (e.title && !e.content && (e.content = e.title),
                  o.default.showToast(e));
            },
            showModal: function (e) {
              o.default.showModal(e);
            },
            getItem: function (e) {
              return localStorage.getItem(e);
            },
            setItem: function (e, t) {
              return localStorage.setItem(e, t);
            },
            requestOpenId: function () {
              return "";
            },
            createVideoAd: function (e, t) {
              console.log("视频播放回调"), t && t();
            },
            createInterstitialAd: function (e, t) {
              console.log("插屏回调"), t && t();
            },
            initAd: function (e, t) {
              console.log("initAd--data", e), t && t();
            },
            getLocaleType: function () {
              return "zh";
            },
            setStorageSync: function (e, t) {
              localStorage.setItem(e, JSON.stringify(t));
            },
            setStorage: function (e) {
              var t = e.key,
                n = e.data,
                o = e.success;
              setTimeout(function () {
                localStorage.setItem(t, JSON.stringify(n)),
                  o && o({ errMsg: "setStorage:ok" });
              }, 0);
            },
            getOpenDataContext: function () {
              return {
                postMessage: function (e) {
                  console.log("open data context post message : ", e);
                },
                canvas: i.createCanvas(),
              };
            },
            getSystemInfo: function (e) {
              setTimeout(function () {
                e && e.success(i.getSystemInfoSync());
              }, 0);
            },
            getSystemInfoSync: function () {
              return new Proxy(window, {
                get: function (e, t) {
                  return {
                    errMsg: "getSystemInfo:ok",
                    screenWidth: window.innerWidth,
                    screenHeight: window.innerHeight,
                    windowWidth: window.innerWidth,
                    windowHeight: window.innerHeight,
                    SDKVersion: "9.9.9",
                    system: "",
                  }[t];
                },
              });
            },
            getLaunchOptionsSync: function () {
              return { query: {} };
            },
            clearStorage: function (e) {
              setTimeout(function () {
                localStorage.clear(), e.success && e.success();
              }, 0);
            },
            clearStorageSync: function () {
              localStorage.clear();
            },
            getStorage: function (e) {
              var t = e.key,
                n = e.success;
              setTimeout(function () {
                var e = localStorage.getItem(t);
                try {
                  n && n({ errMsg: "getStorage:ok", data: JSON.parse(e) });
                } catch (t) {
                  n && n({ errMsg: "getStorage:ok", data: e });
                }
              }, 0);
            },
            getStorageSync: function (e) {
              var t = localStorage.getItem(e);
              try {
                return JSON.parse(t);
              } catch (e) {
                return t;
              }
            },
            removeStorage: function (e) {
              var t = e.key,
                n = e.success;
              setTimeout(function () {
                localStorage.removeItem(t), n && n();
              }, 0);
            },
            removeStorageSync: function (e) {
              localStorage.removeItem(e);
            },
            getStorageInfo: function (e) {
              var t = e.success;
              console.error("已废弃, 使用PlatformAPI.getStorage代替"),
                setTimeout(function () {
                  t && t({});
                }, 0);
            },
            getStorageInfoSync: function () {
              return (
                console.error("已废弃, 使用PlatformAPI.getStorageSync代替"), {}
              );
            },
            request: function (e) {
              var t = void 0 === e.tryTimes ? 3 : e.tryTimes,
                n = e.url,
                o = e.success,
                a = e.fail,
                r = e.complete,
                c = new XMLHttpRequest();
              (c.onreadystatechange = function () {
                var s;
                try {
                  s = JSON.parse(c.responseText);
                } catch (e) {
                  s = c.responseText;
                }
                if (4 == c.readyState) {
                  var l = {};
                  if (
                    (c
                      .getAllResponseHeaders()
                      .trim()
                      .split(/[\r\n]+/)
                      .forEach(function (e) {
                        var t = e.split(": "),
                          n = t.shift(),
                          o = t.join(": ");
                        l[n] = o;
                      }),
                    200 <= c.status && 400 > c.status)
                  ) {
                    var u = { data: s, header: l, statusCode: c.status };
                    o && o(u), r && r(u);
                  } else
                    t > 0
                      ? (console.log(
                          "请求失败, 正在进行重试...剩余重试次数:" + (t - 1)
                        ),
                        (e.tryTimes = t - 1),
                        i.request(e))
                      : ((u = {
                          url: n,
                          method: e.method || "GET",
                          data: s,
                          statusCode: c.status,
                          header: l,
                          errMsg: c.statusText,
                        }),
                        a && a(u),
                        r && r(u));
                }
              }),
                c.open(e.method || "GET", n),
                c.send(JSON.stringify(e.data));
            },
            getVideoAdPlayInfoToday: function () {
              return { playTimes: -1, maxTimes: -1, valid: !1 };
            },
            updateShareMenu: function (e) {
              e && e.success && e.success({});
            },
            getPlayerInfo: function () {
              return { nickname: "test", nickName: "test", avatarUrl: "" };
            },
            setCloudStats: function (e, t) {
              i.setStorageSync("__cloudObject", JSON.stringify(e)), t && t();
            },
            getCloudStats: function (e) {
              e.success && e.success(i.getStorageSync("__cloudObject"));
            },
            login: function (e) {
              e.success && e.success({ errMsg: "login:ok", code: "1" });
            },
            getUserInfo: function (e) {
              e.success &&
                e.success({ userInfo: window.PlatformAPI.getPlayerInfo() });
            },
            shareAppMessage: function (e) {
              e.success && e.success({});
            },
            onShow: function (e, t) {
              if ((void 0 === t && (t = !0), window.cc)) {
                var n = window.cc;
                n.game.on(n.game.EVENT_SHOW, function () {
                  e({ query: {} });
                });
              } else if (window.Laya || window.laya)
                var o = window.Laya,
                  a = setInterval(function () {
                    o.stage
                      ? (clearInterval(a),
                        console.log("regist Laya onShow"),
                        o.stage.on(
                          o.Event.VISIBILITY_CHANGE,
                          null,
                          function (t) {
                            o.stage._isVisibility && e({ query: {} });
                          }
                        ))
                      : console.log(
                          "Laya.stage is not initialied, wait 100 ms to recheck"
                        );
                  }, 100);
              else if (window.egret)
                var r = setInterval(function () {
                  var t = window.egret;
                  t.lifecycle && t.lifecycle.stage
                    ? (console.log("regist egret onShow"),
                      clearInterval(r),
                      t.lifecycle.stage.addEventListener(
                        t.Event.ACTIVATE,
                        function () {
                          e({ query: {} });
                        }
                      ))
                    : console.log(
                        "egret.lifecycle.stage is not initialied, wait 100 ms to recheck"
                      );
                }, 100);
              else
                t
                  ? (console.error("未知引擎, 将在一秒后重试"),
                    setTimeout(function () {
                      i.onShow(e, !1);
                    }, 1e3))
                  : console.error(
                      "未知引擎, 需要在此处手动添加某种监听返回前台的方法!"
                    );
            },
            getWXUserInfo: function () {
              return { userInfo: window.PlatformAPI.getPlayerInfo() };
            },
            createInnerAudioContext: function () {
              var e = new Audio();
              (e.autoplay = !0), (e.preload = "preload");
              var t = [],
                n = {
                  play: function () {
                    try {
                      e.play();
                    } catch (e) {
                      console.error(e);
                    }
                    for (var n = 0; n < t.length; n++) t[n] && t[n]();
                  },
                  pause: function () {
                    e.pause();
                  },
                  stop: function () {
                    e.pause();
                  },
                  onEnded: function () {
                    console.warn("未实现的方法");
                  },
                  onPlay: function (e) {
                    t.push(e);
                  },
                };
              return (
                Object.defineProperty(n, "src", {
                  set: function (t) {
                    e.src = t;
                  },
                  get: function () {
                    return e.src;
                  },
                }),
                n
              );
            },
            createCanvas: function () {
              return document.createElement("canvas");
            },
            createImage: function () {
              return new Image();
            },
            toTempFilePath: function (e) {
              var t = window.cc,
                n = function () {
                  t && t.director.off(t.Director.EVENT_AFTER_DRAW, n);
                  var o = document.querySelectorAll("canvas")[0];
                  if (o) {
                    var a = o.toDataURL("image/png"),
                      i = new Image();
                    (i.onload = function () {
                      var t = document.createElement("canvas");
                      (t.width = e.destWidth),
                        (t.height = e.destHeight),
                        t
                          .getContext("2d")
                          .drawImage(
                            i,
                            e.x,
                            e.y,
                            e.width,
                            e.height,
                            0,
                            0,
                            t.width,
                            t.height
                          );
                      var n = t.toDataURL("image/png");
                      e.success && e.success(n);
                    }),
                      (i.src = a);
                  } else
                    console.error(
                      "查找canvas失败, 请修改上方代码, 手动定位主canvas"
                    );
                };
              t ? t.director.on(t.Director.EVENT_AFTER_DRAW, n) : n();
            },
            toTempFilePathSync: function (e) {
              i.toTempFilePath(e);
            },
            getSetting: function (e) {
              e &&
                e.success &&
                e.success({ authSetting: { "scope.userInfo": !0 } });
            },
            getBase64Async: function (e, t) {
              if (e.includes("fbcdn")) {
                var n = new XMLHttpRequest();
                n.open("get", e, !0),
                  (n.responseType = "blob"),
                  (n.onload = function () {
                    if (200 == this.status) {
                      var n = this.response,
                        o = new FileReader();
                      (o.onloadend = function (e) {
                        var n = e.target.result;
                        t && t(n);
                      }),
                        o.readAsDataURL(n);
                    } else console.error("加载图片失败!", e);
                  }),
                  n.setRequestHeader("Access-Control-Allow-Origin", "*"),
                  n.send();
              } else
                PlatformAPI.request({
                  url:
                    "https://fb.sanshengshi.xyz/event/fb/image.html?url=" + e,
                  success: function (e) {
                    console.log(e);
                    var n = e.data.message;
                    t && t(n);
                  },
                });
            },
            vibrateShort: function () {
              navigator && navigator.vibrate && navigator.vibrate(15);
            },
            vibrateLong: function () {
              navigator && navigator.vibrate && navigator.vibrate(400);
            },
            getUpdateManager: function () {
              return {
                onCheckForUpdate: function (e) {
                  console.warn(
                    "empty function called: getUpdateManager().onCheckForUpdate() "
                  ),
                    e && e({ hasUpdate: !1 });
                },
                onUpdateReady: function () {
                  console.warn(
                    "empty function called: getUpdateManager().onUpdateReady() "
                  );
                },
                onUpdateFailed: function () {
                  console.warn(
                    "empty function called: getUpdateManager().onUpdateFailed() "
                  );
                },
                applyUpdate: function () {
                  console.warn(
                    "empty function called: getUpdateManager().applyUpdate() "
                  );
                },
              };
            },
            getNetworkType: function (e) {
              setTimeout(function () {
                e &&
                  e.success &&
                  e.success({
                    errMsg: "getNetworkType:ok",
                    networkType: "wifi",
                  });
              }, 0);
            },
            checkSession: function (e) {
              setTimeout(function () {
                e && e.success && e.success();
              }, 0);
            },
            init: function (e) {
              (PlatformAPI.gameId = e), a.default(e);
            },
            getLocale: function () {
              return "zh_CN";
            },
            makeChallengeImage: function (e) {
              var t = e.imageUrl,
                n = e.score,
                o = void 0 !== n,
                a = e.callback,
                r = i.createCanvas(),
                c = r.getContext("2d"),
                s = 2,
                l = [],
                u = FBInstant.player.getPhoto(),
                d = function (e) {
                  var t = e.src,
                    i = e.onload,
                    u = new Image();
                  (u.crossOrigin = "Anoymous"),
                    (u.onload = function () {
                      i && i(u),
                        0 == --s &&
                          (l.forEach(function (e) {
                            var t = e.options,
                              n = t.x || 0,
                              o = t.y || 0,
                              a = t.destWidth || e.img.width,
                              i = t.destHeight || e.img.height;
                            c.drawImage(e.img, n, o, a, i);
                          }),
                          (function (e, t, n) {
                            var o = function (e, t) {
                                return { x: e, y: t };
                              },
                              a = o(e.x + 20, e.y),
                              i = o(e.x + e.width, e.y),
                              r = o(e.x + e.width, e.y + e.height),
                              c = o(e.x, e.y + e.height),
                              s = o(e.x, e.y);
                            n.beginPath(),
                              (n.lineWidth = 6),
                              (n.strokeStyle = "#FFFFFF"),
                              n.moveTo(a.x, a.y),
                              n.arcTo(i.x, i.y, r.x, r.y, 20),
                              n.arcTo(r.x, r.y, c.x, c.y, 20),
                              n.arcTo(c.x, c.y, s.x, s.y, 20),
                              n.arcTo(s.x, s.y, a.x, a.y, 20),
                              (n.shadowColor = "rgba(0, 0, 0, 0.0)"),
                              n.stroke();
                          })(
                            { x: f - 3, y: h - 3, width: g + 6, height: m + 6 },
                            0,
                            c
                          ),
                          (c.shadowColor = "rgba(0, 0, 0, 0.7)"),
                          (c.shadowOffsetX = 5),
                          (c.shadowOffsetY = 5),
                          (c.shadowBlur = 2),
                          (c.font = "bold 40px Helvetica"),
                          (c.fillStyle = "#ffffff"),
                          (c.textAlign = "center"),
                          (c.textBaseline = "middle"),
                          o
                            ? (c.fillText("SCORE", 450, 120),
                              c.fillText(n + "", 450, 190))
                            : (c.fillText("YOUR", 440, 125),
                              c.fillText("TURN!", 480, 190)),
                          c.restore(),
                          a && a(r.toDataURL()));
                    }),
                    (u.src = t),
                    l.push({ img: u, options: e });
                };
              d({
                src: t,
                onload: function (e) {
                  (r.width = e.width), (r.height = e.height);
                },
              });
              var f = 50,
                g = 140,
                m = g,
                h = 150 - m / 2;
              d({ src: u, x: f, y: h, destWidth: g, destHeight: m });
            },
          };
        n.default = i;
      },
      { "./SSSGameConfig": 3, "./ToastAndModal": 4 },
    ],
    3: [
      function (e, t, n) {
        "use strict";
        (n.__esModule = !0),
          (n.default = function (e) {
            window.PlatformAPI ||
              console.error("先引用PlatformAPI, 再引用SSSGameConfig!");
            var t,
              n,
              o,
              a,
              i,
              r,
              c,
              s = !1,
              l = null,
              u = null,
              d = null,
              f = null,
              g = null,
              m = null,
              h = function (e, t, n, o, a, i, r) {
                (l = t), (u = n), (d = o), (f = a), (g = i), (m = r);
              },
              y = {};
            (window.INeedUserInfo = function () {}),
              (window.initSSSGameConfig = function (n, o) {
                if (
                  (void 0 === n &&
                    (n = function () {
                      console.log("initSSSGameConfig Done");
                    }),
                  void 0 === o &&
                    (o = function () {
                      console.log("onLoadFromNet Done");
                    }),
                  s)
                )
                  return o(), void n();
                s = !0;
                var a = function () {
                  wx.request({
                    url:
                      "https://raw.githubusercontent.com/zty8023ys/configServer/master/" +
                      e +
                      ".json?r=" +
                      Math.random(),
                    success: function (e) {
                      if (
                        (console.log("game config", e),
                        e.data && 1 === e.data.status)
                      ) {
                        var i = e.data;
                        t(i, n, o);
                      } else a();
                    },
                    failed: function () {
                      a();
                    },
                    complete: function () {
                      console.log("sdk request complete!");
                    },
                  });
                };
                a();
              }),
              (t = function (e, t, s) {
                a(e), n(e), o(e), i(e, t), c(e.fb_share.share), r(), s();
              }),
              (r = function () {
                var e = {};
                for (var t in y)
                  (e[t] = y[t]),
                    console.log("add SSSGameConfig function : " + t);
                for (var t in {
                  getRandomShareUnit: !0,
                  createBrandSprite: !0,
                  setSSSmoregameBtn: !0,
                  createMoreGameBtn: !0,
                  getSwitchState: !0,
                  loadMygameUrlJosn: !0,
                  getGameConfig: !0,
                })
                  e[t] = e[t] || function () {};
                window.SSSGameConfig = e;
              }),
              (a = function (e) {
                y.getSwitchState = function () {
                  return !0;
                };
              }),
              (i = function (e, t) {
                var n =
                  "undefined" != typeof window && window.cc
                    ? window.cc.DEFAULT_ENGINE
                      ? (console.log(
                          "%c \n\n================================\n\n " +
                            window.cc.DEFAULT_ENGINE +
                            " Project\n\n================================\n\n",
                          "color:#ff0000"
                        ),
                        function () {
                          var e = window.ccui,
                            n = window.cc;
                          h(
                            0,
                            function (e, t, o) {
                              !(function (e, t, o) {
                                var a = 0,
                                  i = function (i) {
                                    if (
                                      "string" != typeof e[i] ||
                                      -1 == e[i].indexOf("https")
                                    )
                                      return "continue";
                                    var r = e[i];
                                    a++,
                                      n.loader.loadImg(
                                        r,
                                        function () {},
                                        function (e, r) {
                                          var c = new n.Texture2D();
                                          c.initWithElement(r),
                                            c.handleLoadedTexture(),
                                            (t[i] = c),
                                            0 == --a && o && o();
                                        }
                                      );
                                  };
                                for (var r in e) i(r);
                              })(e, t, function () {
                                for (var n in e) t[n] = e[n];
                                o();
                              });
                            },
                            function (t, n, o) {
                              var a = e.Button.create();
                              return (
                                a.setTouchEnabled(!0),
                                a.loadTextures(t, "", ""),
                                n.addChild(a),
                                a.setPosition(o),
                                a
                              );
                            },
                            function (e, t) {
                              e.addClickEventListener(t);
                            },
                            function (e, t) {
                              e.loadTextureNormal(t);
                            },
                            function (e, t) {
                              var n = e.getChildByName(t);
                              n && e.removeChild(n);
                            },
                            function (e) {
                              e.runAction(
                                n.repeatForever(
                                  n.sequence(
                                    n.scaleTo(1, 1.1),
                                    n.delayTime(0.8),
                                    n.scaleTo(1.5, 0.9)
                                  )
                                )
                              );
                            }
                          ),
                            setTimeout(function () {
                              t();
                            }, 0);
                        })
                      : (console.log(
                          "%c \n\n================================\n\n Cocos Creator Project\n\n================================\n\n",
                          "color:#ff0000"
                        ),
                        function (e) {
                          var t = window.cc;
                          h(
                            0,
                            function (e, n, o) {
                              var a = 0,
                                i = function (i) {
                                  if (
                                    "string" != typeof e[i] ||
                                    -1 == e[i].indexOf("https")
                                  )
                                    return "continue";
                                  var r = e[i];
                                  a++,
                                    t.loader.load(r, function (e, t) {
                                      (n[i] = t), 0 == --a && o && o();
                                    });
                                };
                              for (var r in e) i(r);
                            },
                            function (e, n, o) {
                              var a = new t.Node(),
                                i = new t.SpriteFrame();
                              return (
                                (a.addComponent(t.Sprite).spriteFrame = i),
                                n && n.addChild(a),
                                o && (a.position = o),
                                i.setTexture(e),
                                a
                              );
                            },
                            function (e, t) {
                              e.on("touchstart", t);
                            },
                            function (e, n) {
                              e.getComponent(t.Sprite).spriteFrame.setTexture(
                                n
                              );
                            },
                            function (e, t) {
                              var n = e.getChildByName(t);
                              n && n.destroy();
                            },
                            function (e) {
                              e.runAction(
                                t.repeatForever(
                                  t.sequence(
                                    t.scaleTo(1, 1.1),
                                    t.delayTime(0.8),
                                    t.scaleTo(1.5, 0.9)
                                  )
                                )
                              );
                            }
                          ),
                            setTimeout(function () {
                              e();
                            }, 0);
                        })
                    : "undefined" != typeof window && window.egret
                    ? (console.log(
                        "%c \n\n================================\n\n Egret Project\n\n================================\n\n",
                        "color:#ff0000"
                      ),
                      function (e) {
                        var t = window.egret,
                          n = window.eui,
                          o = window.RES;
                        h(
                          0,
                          function (e, t, n) {
                            var a = 0,
                              i = function (i) {
                                if (
                                  "string" != typeof e[i] ||
                                  -1 == e[i].indexOf("https")
                                )
                                  return "continue";
                                var r = e[i];
                                a++,
                                  o.getResByUrl(
                                    r,
                                    function (e) {
                                      (t[i] = e), 0 == --a && n && n();
                                    },
                                    null,
                                    o.ResourceItem.TYPE_IMAGE
                                  );
                              };
                            for (var r in e) i(r);
                          },
                          function (e, t, o) {
                            var a = new n.Image(e);
                            return (
                              (a.anchorOffsetX = e.textureWidth / 2),
                              (a.anchorOffsetY = e.textureHeight / 2),
                              o && ((a.x = o.x), (a.y = o.y)),
                              t && t.addChild(a),
                              a
                            );
                          },
                          function (e, n) {
                            e.addEventListener(
                              t.TouchEvent.TOUCH_BEGIN,
                              function () {
                                n();
                              },
                              e
                            );
                          },
                          function (e, t) {
                            e.source = t;
                          },
                          function (e, t) {
                            var n = e.getChildByName(t);
                            n && e.removeChild(n);
                          },
                          function (e) {
                            t.Tween.get(e, { loop: !0 })
                              .to({ scaleX: 1.1, scaleY: 1.1 }, 500)
                              .wait(800)
                              .to({ scaleX: 0.9, scaleY: 0.9 }, 1500)
                              .to({ scaleX: 1, scaleY: 1 }, 500);
                          }
                        ),
                          setTimeout(function () {
                            e();
                          }, 0);
                      })
                    : "undefined" != typeof window &&
                      (window.laya || window.Laya)
                    ? (console.log(
                        "%c \n\n================================\n\n Laya Project\n\n================================\n\n",
                        "color:#ff0000"
                      ),
                      function (e) {
                        var t = window.Laya,
                          n = function (e, n, o, a) {
                            void 0 !== a && (o = { x: o, y: a });
                            var i = t.loader.getRes(e);
                            if (!i)
                              return console.error("加载图片失败! ", e), null;
                            var r = new t.Sprite();
                            return (
                              r.graphics.drawTexture(i, 0, 0),
                              (r.width = i._w),
                              (r.height = i._h),
                              r.pivot(r.width / 2, r.height / 2),
                              n && n.addChild(r),
                              o &&
                                (function (e, t) {
                                  (e.x = t.x), (e.y = t.y);
                                })(r, o),
                              r
                            );
                          };
                        (u = n),
                          h(
                            0,
                            function (e, n, o) {
                              var a = [];
                              e.forEach(function (e, t) {
                                (n[t] = e), a.push({ url: e, type: "image" });
                              }),
                                t.loader.load(a, t.Handler.create(this, o));
                            },
                            n,
                            function (e, t) {
                              e.on("mousedown", null, t);
                            },
                            function (e, n) {
                              var o = t.loader.getRes(n);
                              e.graphics.clear(),
                                e.graphics.drawTexture(o, 0, 0),
                                (e.width = o._w),
                                (e.height = o._h);
                            },
                            function (e, t) {
                              var n = e.getChildByName(t);
                              n && n.destroy();
                            },
                            function (e) {
                              e.timerLoop(3300, e, function () {
                                t.Tween.to(
                                  e,
                                  { scaleX: 1.1, scaleY: 1.1 },
                                  1e3,
                                  null,
                                  t.Handler.create(e, function () {
                                    t.Tween.to(
                                      e,
                                      {},
                                      800,
                                      null,
                                      t.Handler.create(e, function () {
                                        t.Tween.to(
                                          e,
                                          { scaleX: 0.9, scaleY: 0.9 },
                                          1500
                                        );
                                      })
                                    );
                                  })
                                );
                              });
                            }
                          ),
                          setTimeout(function () {
                            e();
                          }, 0);
                      })
                    : (console.log(
                        "%c \n\n================================\n\nUnkonw Project!!!\n\nUtils Load Failed!!!\n\n================================\n\n",
                        "color:#ff0000"
                      ),
                      function (e) {
                        setTimeout(function () {
                          console.error(
                            "未知引擎, 导量可能无法正常使用, 需要手动添加代码"
                          );
                          var t = function (e) {
                            return function () {
                              console.error(
                                "未知引擎, 调用方法:" + e + " 失败!"
                              );
                            };
                          };
                          h(
                            t("createBrandSprite"),
                            t("loadFromNet"),
                            t("newSprite"),
                            t("setClickCallbackFunc"),
                            t("changeSpriteFunc"),
                            t("removeOldSpriteFunc"),
                            t("setScaleAnimationFunc")
                          ),
                            e();
                        }, 100);
                      });
                n && n(t);
              }),
              (n = function (e) {
                PlatformAPI.initAd(e);
              }),
              (o = function (e) {
                (PlatformAPI.challengeText =
                  e.fb_site.challenge_text ||
                  "Your friend sent you a new challenge just now!"),
                  (y.getRandomShareUnit = function () {
                    return { title: "", imageUrl: "" };
                  });
              }),
              (c = function (e) {
                y.loadMygameUrlJosn = function () {};
                var t = null;
                (y.setSSSmoregameBtn = function (n) {
                  if (g) {
                    var o = function () {
                      var e = function (e, t, n, o, a) {
                        var i = "__SSSMoreGame_" + n;
                        g(e, i);
                        var r = [],
                          c = t.icon_image.length;
                        0 != c &&
                          l(t.icon_image, r, function () {
                            var s = u(r[0], e, {
                              x: isNaN(o) ? t.icon_image_x : o,
                              y: isNaN(a) ? t.icon_image_y : a,
                            });
                            if (
                              ((s.name = i),
                              m(s),
                              d(s, function () {
                                wx.navigateToMiniProgram({
                                  appId: t.jump_appid,
                                  btnIndex: n,
                                  extraData: { appid: t.appid },
                                });
                              }),
                              t.icon_space)
                            )
                              var l = 0,
                                g = setInterval(function () {
                                  try {
                                    f(s, r[l]);
                                  } catch (e) {
                                    console.log("change frame fail! ", e),
                                      clearInterval(g);
                                  }
                                  ++l == c && (l = 0);
                                }, t.icon_space);
                          });
                      };
                      t.forEach(function (t, o) {
                        e(n, t, o);
                      }),
                        (window.createMoreGameBtn = function (n, o, a, i) {
                          e(n, t[o], o, a, i);
                        });
                    };
                    t
                      ? o()
                      : setTimeout(function () {
                          var n = [];
                          e.forEach(function (e, t) {
                            n.push({
                              bind_id: 0,
                              type: 1,
                              icon_image: [e.icon_image],
                              icon_image_x: +e.icon_image_x,
                              icon_image_y: +e.icon_image_y,
                              jump_appid: e.appid,
                              index: t,
                            });
                          }),
                            (t = n),
                            console.log(t),
                            o();
                        }, 0);
                  }
                }),
                  (y.createMoreGameBtn = function () {
                    console.error("创建单个MoreGameBtn调用太早了!");
                  });
              });
          });
      },
      {},
    ],
    4: [
      function (e, t, n) {
        "use strict";
        n.__esModule = !0;
        var o = {
          showToast: function (e) {
            var t = this,
              n = 3e3;
            if ((e.duration && (n = e.duration), e.content)) {
              !(function () {
                var e = t.getValidMetaWidthScale(),
                  n = document.getElementsByTagName("body")[0],
                  o = document.createElement("div");
                (o.id = "vhs-main-toast"),
                  (o.style.visibility = "hidden"),
                  (o.style.minWidth = "45%"),
                  (o.style.maxWidth = "55%"),
                  (o.style.left = "0"),
                  (o.style.right = "0"),
                  (o.style.marginLeft = "auto"),
                  (o.style.marginRight = "auto"),
                  (o.style.backgroundColor = "#333"),
                  (o.style.color = "#fff"),
                  (o.style.textAlign = "center"),
                  (o.style.borderRadius = 5 * e + "px"),
                  (o.style.padding = 10 * e + "px"),
                  (o.style.position = "fixed"),
                  (o.style.zIndex = "10"),
                  (o.style.top = "35%"),
                  (o.style.fontSize = 16 * e + "px"),
                  n.appendChild(o);
              })();
              var o = document.getElementById("vhs-main-toast");
              (o.innerHTML = e.content),
                (o.style.visibility = "visible"),
                setTimeout(function () {
                  var t;
                  (t =
                    document.getElementById(
                      "vhs-main-toast"
                    )).parentNode.removeChild(t),
                    e.complete && e.complete();
                }, n);
            }
          },
          getValidMetaWidthScale: function () {
            for (
              var e = 1,
                t = document.getElementsByTagName("meta"),
                n = 0,
                o = t.length - 1;
              o >= 0;
              o--
            ) {
              var a = t[o].getAttribute("content");
              if (null != a && -1 != a.indexOf("width") && "null" != a) {
                for (var i = a.split(","), r = 0, c = i.length; r < c; r++) {
                  var s = i[r];
                  if (-1 != s.indexOf("width")) {
                    var l = s.split("=");
                    n = +l[l.length - 1];
                  }
                }
                if (n > 0) break;
              }
            }
            return 0 != n && (e = n / 375), e;
          },
          showModal: function (e) {
            var t,
              n,
              o,
              a = this,
              i = function () {
                var e = document.getElementById("vhs-modal-bg-cover");
                e.parentNode.removeChild(e);
              };
            if (e.content) {
              !(function () {
                var e = a.getValidMetaWidthScale(),
                  t = document.getElementsByTagName("body")[0],
                  n = document.createElement("div");
                (n.id = "vhs-modal-bg-cover"),
                  (n.style.backgroundColor = "rgba(51, 51, 51, 0.85)"),
                  (n.style.width = "100%"),
                  (n.style.height = "100%"),
                  (n.style.position = "fixed"),
                  (n.style.zIndex = "999"),
                  (n.style.top = "0"),
                  t.appendChild(n);
                var o = document.createElement("div");
                (o.id = "vhs-modal-warp"),
                  (o.style.visibility = "visible"),
                  (o.style.minWidth = "50%"),
                  (o.style.maxWidth = "66.8%"),
                  (o.style.backgroundColor = "#fff"),
                  (o.style.color = "#333"),
                  (o.style.textAlign = "center"),
                  (o.style.borderRadius = 5 * e + "px"),
                  (o.style.paddingTop = 10 * e + "px"),
                  (o.style.position = "fixed"),
                  (o.style.zIndex = "10"),
                  (o.style.left = "0"),
                  (o.style.right = "0"),
                  (o.style.marginLeft = "auto"),
                  (o.style.marginRight = "auto"),
                  (o.style.top = "44%"),
                  (o.style.fontSize = 15 * e + "px"),
                  (o.style.borderStyle = "solid"),
                  (o.style.borderColor = "#e1e0e4"),
                  (o.style.borderWidth = 1 * e + "px"),
                  n.appendChild(o);
                var i = document.createElement("div");
                o.appendChild(i);
                var r = document.createElement("p");
                (r.id = "vhs-modal-title"),
                  (r.style.fontSize = 16 * e + "px"),
                  (r.style.marginTop = "0px"),
                  (r.style.marginBottom = "0px"),
                  i.appendChild(r);
                var c = document.createElement("div");
                (c.id = "vhs-modal-content"),
                  (c.style.paddingTop = 10 * e + "px"),
                  (c.style.paddingBottom = 15 * e + "px"),
                  (c.style.paddingLeft = 10 * e + "px"),
                  (c.style.paddingRight = 10 * e + "px"),
                  (c.style.fontSize = 14 * e + "px"),
                  (c.style.color = "rgb(95, 92, 92)"),
                  i.appendChild(c);
                var s = document.createElement("div");
                (s.id = "vhs-modal-action"),
                  (s.style.bottom = 9 * e + "px"),
                  (s.style.width = "100%"),
                  (s.style.borderTop = "1px solid rgb(191, 190, 190)"),
                  (s.style.height = 41 * e + "px"),
                  o.appendChild(s);
                var l = document.createElement("div");
                (l.id = "vhs-modal-cancel"),
                  (l.style.float = "left"),
                  (l.style.width = "50%"),
                  (l.style.color = "red"),
                  (l.style.height = 41 * e + "px"),
                  (l.style.lineHeight = 41 * e + "px"),
                  s.appendChild(l);
                var u = document.createElement("div");
                (u.id = "vhs-modal-confirm"),
                  (u.style.float = "right"),
                  (u.style.width = "49%"),
                  (u.style.height = 41 * e + "px"),
                  (u.style.lineHeight = 41 * e + "px"),
                  (u.style.borderLeft = "1px solid rgb(191, 190, 190)"),
                  s.appendChild(u);
              })(),
                (document.getElementById("vhs-modal-title").innerText =
                  e.title || "Tips"),
                (document.getElementById("vhs-modal-content").innerText =
                  e.content);
              var r = document.getElementById("vhs-modal-cancel");
              (r.innerHTML = e.cancelTitle || "Cancel"),
                (t = a.getValidMetaWidthScale()),
                (n = document.getElementById("vhs-modal-warp")),
                (o = window.outerHeight),
                (n.style.top = (o * t - n.clientHeight) / 2 + "px"),
                console.log((o * t - n.clientHeight) / 2 + "px"),
                (r.onclick = function () {
                  e.cancel && e.cancel(),
                    e.success && e.success({ cancel: !0 }),
                    e.complete && e.complete({ cancel: !0 }),
                    i();
                });
              var c = document.getElementById("vhs-modal-confirm");
              (c.innerHTML = e.confirmTitle || "Confirm"),
                (c.onclick = function () {
                  e.confirm && e.confirm(),
                    e.success && e.success({ confirm: !0 }),
                    e.complete && e.complete({ confirm: !0 }),
                    i();
                });
            }
          },
        };
        n.default = o;
      },
      {},
    ],
    5: [
      function (e, t, n) {
        "use strict";
        n.__esModule = !0;
        var o,
          a = e("./H5/H5"),
          i = e("./FBInstant/FBInstant");
        !(function (e) {
          (e[(e.FBINSTANT = 0)] = "FBINSTANT"), (e[(e.H5 = 1)] = "H5");
        })(o || (o = {}));
        var r,
          c,
          s = function () {
            return window.FBInstant ? o.FBINSTANT : o.H5;
          },
          l = s();
        switch ((console.log("platform::::", l), (window.getPlatform = s), l)) {
          case o.H5:
            r = a.default;
            break;
          case o.FBINSTANT:
            r = Object.assign(
              ((c = i.default), Object.assign(a.default, c)),
              window.FBInstant
            );
        }
        (r = new Proxy(r, {
          get: function (e, t) {
            var n = Reflect.get(e, t);
            return (
              void 0 === n &&
                (n = function () {
                  for (var e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n];
                  return (
                    console.log("empty functions:", t, "args:", e),
                    new Proxy(
                      {},
                      {
                        get: function (e, t) {
                          return function () {
                            for (var e = [], n = 0; n < arguments.length; n++)
                              e[n] = arguments[n];
                            console.log("call empty functions:", t, e);
                          };
                        },
                      }
                    )
                  );
                }),
              n
            );
          },
        })),
          (window.oldWx = window.wx),
          (window.wx = window.wx || r),
          (window.FBInstant = window.FBInstant || r),
          (window.PlatformAPI = r),
          (window.initSSSGameConfig = function () {
            console.error("需要先调用 PlatformAPI.init !!!");
          });
      },
      { "./FBInstant/FBInstant": 1, "./H5/H5": 2 },
    ],
  },
  {},
  [5]
);
