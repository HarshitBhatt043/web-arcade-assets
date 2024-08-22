/*
	SETTINGS
 */
const SDK_INTERFACE_SETTINGS = {
  isProd: true,
  debugLevel: 0,
  forceMockObject: false,

  // ads
  interstitial: {
    enabled: true, // enable/disable interstitial ads
    initial: true, // show initial ad
    preload: 250, // preload interval in ms
    retry: 2000, // timeout before retry after preload fail
    timout: 250, // timout before calling showRewarded()
    cooldown: 60, // time between ads
  },
  rewarded: {
    enabled: true, // enable/disable rewarded ads (provided that the "rewarded" feature is enabled)
    preload: 250, // preload interval in ms
    retry: 2000, // timeout before retry after preload fail
    timout: 250, // timout before calling showRewarded()
    // cooldown: 90, // time between ads
    reward: true, // reward when in doubt
  },

  // files to load
  externalFiles: ["html5games/gameapi/v2.js"],

  // features
  features: {
    auto_quality: false,
    copyright: false,
    credits: false,
    external_achievements: false,
    external_leaderboard: false,
    external_mute: false,
    external_pause: false,
    external_start: false,
    forced_mode: false,
    leaderboard: false,
    multiplayer: false,
    multiplayer_local: true,
    skip_title: false,
    skip_tutorial: false,
  },

  // forced mode
  forced_mode: {},

  // misc
  aid: "A1234-5", // affiliate id
  name: "YANDEX", // name of partner/customer
  branding_url: "",
  branding_image: "logo", // "logo" = transparent
  show_splash: false,
  menuless: true,
};

const SDK_INTERFACE_OVERRIDES = {
  famobi: {
    /*
		getCurrentLanguage: function() {
			return "en";
		},
		*/
    /*
		setPreloadProgress: function(progress) {

		},
		*/
    /*
		gameReady: function() {

		},

		playerReady: function(progress) {

		},
		*/
  },
  famobi_analytics: {
    trackEvent: function (event, params) {
      return new Promise(function (resolve, reject) {
        switch (event) {
          case "EVENT_LEVELFAIL":
            if (params.reason === "quit") {
              return window.famobi.showAd(function () {
                resolve();
              });
            }
            break;

          default:
          // nothing to do
        }
        return resolve(event, params);
      });
    },
  },
};

const SDK_INTERFACE_MOCK_OBJECT = function () {
  return new Promise(function (resolve, reject) {
    YaGames = {
      init: function () {
        return new Promise(function (resolve, reject) {
          const ysdk = {
            adv: {
              showFullscreenAdv: function (_callbacks) {
                try {
                  _callbacks.callbacks.onOpen();
                } catch (e) {
                  console.log(e);
                }

                alert("This is an ad");

                setTimeout(function () {
                  try {
                    _callbacks.callbacks.onClose();
                  } catch (e) {
                    console.log(e);
                  }
                }, 1000);
              },
              showRewardedVideo: function (_callbacks) {
                try {
                  _callbacks.callbacks.onOpen();
                } catch (e) {
                  console.log(e);
                }

                if (confirm("Rewarded ad ended. Should a reward be granted?")) {
                  try {
                    _callbacks.callbacks.onRewarded();
                    _callbacks.callbacks.onClose();
                  } catch (e) {
                    console.log(e);
                  }
                } else {
                  try {
                    _callbacks.callbacks.onClose();
                  } catch (e) {
                    console.log(e);
                  }
                }
              },
            },
          };
          resolve(ysdk);
        });
      },
    };
    resolve();
  });
};

const SDK_INTERFACE_PRELOAD_AD = function (type) {
  return new Promise(function (resolve, reject) {
    resolve(); // reject()
  });
};

const SDK_INTERFACE_SHOW_AD = function () {
  return new Promise(function (resolve, reject) {
    ysdk.adv.showFullscreenAdv({
      callbacks: {
        onOpen: function () {
          SDK_INTERFACE.getDebugLevel() &&
            console.log("[ysdk.adv.showFullscreenAdv] onOpen");
        },
        onClose: function (wasShown) {
          // some action after close
          SDK_INTERFACE.getDebugLevel() &&
            console.log("[ysdk.adv.showFullscreenAdv] onClose");
          resolve();
        },
        onError: function (error) {
          // some action on error
          SDK_INTERFACE.getDebugLevel() &&
            console.log("[ysdk.adv.showFullscreenAdv] onError");
          reject(error);
        },
        onOffline: function () {
          SDK_INTERFACE.getDebugLevel() &&
            console.log("[ysdk.adv.showFullscreenAdv] onOffline");
        },
      },
    });
  });
};

const SDK_INTERFACE_REWARDED_AD = function () {
  return new Promise(function (resolve, reject) {
    let rewardGranted = false;

    ysdk.adv.showRewardedVideo({
      callbacks: {
        onOpen: function () {
          SDK_INTERFACE.getDebugLevel() &&
            console.log("[ysdk.adv.showRewardedVideo] onOpen");
        },
        onClose: function (wasShown) {
          // some action after close
          SDK_INTERFACE.getDebugLevel() &&
            console.log("[ysdk.adv.showRewardedVideo] onClose");
          resolve(rewardGranted);
        },
        onError: function (error) {
          // some action on error
          SDK_INTERFACE.getDebugLevel() &&
            console.log("[ysdk.adv.showRewardedVideo] onError");
          reject(error);
        },
        onOffline: function () {
          SDK_INTERFACE.getDebugLevel() &&
            console.log("[ysdk.adv.showRewardedVideo] onOffline");
        },
        onRewarded: function () {
          SDK_INTERFACE.getDebugLevel() &&
            console.log("[ysdk.adv.showRewardedVideo] onRewarded");
          rewardGranted = true;
        },
      },
    });
  });
};

const SDK_INTERFACE_INIT = function () {
  return new Promise(function (resolve, reject) {
    YaGames.init().then((ysdk) => {
      SDK_INTERFACE.getDebugLevel() && console.log("Yandex SDK initialized");
      window.ysdk = ysdk;
      resolve();
    });
  });
};

SDK_INTERFACE.init(SDK_INTERFACE_SETTINGS);
