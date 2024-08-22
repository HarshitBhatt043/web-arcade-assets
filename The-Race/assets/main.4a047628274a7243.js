//  Merci-Michel [R]
//  https://www.merci-michel.com/
//  Build 20230208-113313

var e = Object.defineProperty,
  t = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  n = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  r = (t, a, n) =>
    a in t
      ? e(t, a, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[a] = n);
import {
  r as l,
  c as i,
  w as c,
  a as u,
  b as d,
  d as m,
  e as p,
  f as v,
  g as f,
  h as b,
  i as g,
  _ as h,
  o as w,
  j as y,
  k,
  n as _,
  l as $,
  p as O,
  m as L,
  q as M,
  u as T,
  s as I,
  t as R,
  v as j,
  x as D,
  y as C,
  z as A,
  A as H,
  F as P,
  B as S,
  C as E,
  D as x,
  E as U,
  G as q,
  H as F,
  M as V,
  I as Z,
  J as B,
  K as X,
  L as G,
  N as J,
  O as z,
  P as K,
  Q as N,
  R as W,
  S as Y,
  T as Q,
} from "./vendor.58ed9051274a7243.js";
import {
  M as ee,
  c as te,
  _ as ae,
  I as ne,
} from "./IconArrowTrans.19ab1b96274a7243.js";
let se = location.origin + window.__DATA.config.basepath;
const oe = window.__DATA.site.locale;
!!window.__DATA.site.locales[oe].default || (se += "/" + oe + "/");
function re(e = {}) {
  let u,
    d,
    m = null,
    p = 0;
  const v = l(null),
    f = l(!1),
    b = i(),
    g = {
      sendFinish: (e, t) => {
        L(),
          b.sendMessage(
            ee.DisplayFinish,
            JSON.stringify({ score: Math.round(e), best: Math.round(t) })
          ),
          (d = setTimeout(() => b.close(), 1500));
      },
    },
    h = {
      left: !1,
      right: !1,
      state: 0,
      reset: () => {
        h.update(!1, !1), h.update(!0, !1);
      },
      update: (e, t) => {
        e ? (h.right = t) : (h.left = t),
          (h.state = t
            ? e
              ? 1
              : -1
            : e
            ? h.left
              ? -1
              : 0
            : h.right
            ? 1
            : 0);
      },
    },
    w =
      ((y = ((e, t) => {
        for (var a in t || (t = {})) s.call(t, a) && r(e, a, t[a]);
        if (n) for (var a of n(t)) o.call(t, a) && r(e, a, t[a]);
        return e;
      })(
        {
          install: function (e) {
            b.install(e),
              e.provide("rtcDisplay", w),
              (u = e.config.globalProperties),
              (u.$rtcDisplay = w),
              b.config({
                apiKey: "AIzaSyCxxnDuXA-OXZm7pj0mV8b0xtFX2CJXUpM",
                authDomain: "montblanc-race.firebaseapp.com",
                databaseURL:
                  "https://montblanc-race-default-rtdb.europe-west1.firebasedatabase.app/",
                projectId: "montblanc-race",
                storageBucket: "montblanc-race.appspot.com",
                messagingSenderId: "540821151036",
                appId: "1:540821151036:web:1577948aedadeab9bdd239",
              }),
              b.watch(_),
              b.watchStatus(M);
          },
          rtc: b,
          webRTC: b,
          createRoom: async function () {
            return (m = await b.createRoom()), m;
          },
          controls: h,
          error: v,
          throwError: O,
          cancelError: L,
          enabled: f,
          enable: function () {
            (u.$stores.menuOpen = !1), (f.value = !0);
          },
          disable: function () {
            (u.$stores.menuOpen = !1), (f.value = !1);
          },
          reset: k,
        },
        g
      )),
      t(
        y,
        a({
          get roomURL() {
            return se + "remote/?c=" + (m || "");
          },
          get roomID() {
            return m;
          },
        })
      ));
  var y;
  return w;
  function k() {
    clearTimeout(d), L(), h.reset(), u.$router.push({ name: "qrcode-home" });
  }
  function _(e) {
    const t = u.$route && u.$route.name;
    switch (e) {
      case "remoteReady":
      case ee.RemoteReady:
        "qrcode-home" === t && u.$router.push({ name: "game" });
        break;
      case ee.RemoteLeftUp:
        h.update(!1, !1);
        break;
      case ee.RemoteLeftDown:
        h.update(!1, !0);
        break;
      case ee.RemoteRightUp:
        h.update(!0, !1);
        break;
      case ee.RemoteRightDown:
        h.update(!0, !0);
    }
  }
  function $() {
    k();
  }
  function O() {
    c.game.state.isGameRunning() &&
      (v.value || ((v.value = !0), (p = setTimeout($, 1e4))));
  }
  function L() {
    (v.value = !1), clearTimeout(p);
  }
  function M(e) {
    "error" === e || "close" === e ? O() : "connect" === e && L();
  }
}
const le = [
  ((e) => (O("data-v-12b2ca22"), (e = e()), L(), e))(() =>
    k("div", { class: "burgermenu-lines" }, null, -1)
  ),
];
var ie = h(
  {
    setup(e) {
      function t() {
        c.audio.playSound("UI_Hover_Tiny");
      }
      function a() {
        c.audio.playSound("UI_Validate_Small"),
          ($.$stores.menuOpen = !$.$stores.menuOpen);
      }
      return (e, n) => (
        w(),
        y(
          "button",
          {
            class: _(["menubtn", { hidden: e.$rtcDisplay.enabled.value }]),
            "aria-label": "menu",
            onMouseenter: t,
            onClick: a,
          },
          [
            k(
              "div",
              {
                class: _([
                  "burgermenu",
                  {
                    menuOpen: e.$stores.menuOpen,
                    menuPause: "game" === e.$route.name,
                  },
                ]),
              },
              le,
              2
            ),
          ],
          34
        )
      );
    },
  },
  [["__scopeId", "data-v-12b2ca22"]]
);
const ce = [
  ((e) => (O("data-v-5e5f33e6"), (e = e()), L(), e))(() =>
    k(
      "img",
      { src: ae, draggable: "false", alt: "Montblanc Legend Red" },
      null,
      -1
    )
  ),
];
var ue = h(
  {
    setup(e) {
      const t = ["game"],
        a = M(() => {
          const e = $.$route && $.$route.name;
          return !!$.$stores.menuOpen || !t.includes(e);
        }),
        n = M(() => $.$rtcDisplay.enabled.value || "home" === $.$route.name);
      return (e, t) => (
        w(),
        y(
          "figure",
          { class: _(["mbLogo", { visible: T(a) }]) },
          [
            k(
              "button",
              {
                class: _({ visible: T(a), inactive: T(n) }),
                onClick:
                  t[0] || (t[0] = (t) => e.$router.push({ name: "home" })),
              },
              ce,
              2
            ),
          ],
          2
        )
      );
    },
  },
  [["__scopeId", "data-v-5e5f33e6"]]
);
const de = { class: "header" };
var me = h({ setup: (e) => (e, t) => (w(), y("header", de, [I(ue), I(ie)])) }, [
  ["__scopeId", "data-v-0fcb5028"],
]);
const pe = { class: "menu-cta__text" },
  ve = ["innerHTML"],
  fe = ["innerHTML"],
  be = { class: "menu-cta__picture" },
  ge = ["innerHTML"],
  he = ["innerHTML"];
var we = h(
  {
    setup(e) {
      const t = R(),
        a = j(),
        n = "game" === t.currentRoute.value.name;
      function s() {
        (a.menuOpen = !1),
          "game" !== t.currentRoute.value.name
            ? t.push({ name: "game" })
            : c.game.replay();
      }
      return (e, t) => (
        w(),
        y("button", { class: "menu-cta", onClick: s }, [
          k("div", pe, [
            n
              ? (w(),
                y(
                  "span",
                  { key: 0, innerHTML: e.$l("menu.cta.restart") },
                  null,
                  8,
                  ve
                ))
              : (w(),
                y(
                  "span",
                  { key: 1, innerHTML: e.$l("menu.cta.play") },
                  null,
                  8,
                  fe
                )),
          ]),
          k("div", be, [
            n
              ? (w(),
                y(
                  "div",
                  {
                    key: 0,
                    class: "icon",
                    innerHTML: T(
                      '<svg width="28" height="33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.368 8.584c.65-.162 1.46-.162 2.272-.162 6.329 0 11.36 5.03 11.36 11.36 0 6.329-5.031 11.36-11.36 11.36S3.28 26.11 3.28 19.781" stroke="#fff" stroke-width="3" stroke-miterlimit="10"/><path d="M14.64 16.536 4.5 8.422 14.64.308v16.228Z" fill="#fff"/><path d="M10 17 0 8.5 10 0v17Z" fill="#fff" fill-opacity=".33"/></svg>\n'
                    ),
                  },
                  null,
                  8,
                  ge
                ))
              : (w(),
                y(
                  "div",
                  {
                    key: 1,
                    class: "icon restart",
                    innerHTML: T(
                      '<svg width="32" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.597 13.146a1 1 0 0 1 0 1.708L1.52 27.074A1 1 0 0 1 0 26.222V1.779A1 1 0 0 1 1.52.925l20.077 12.22Z" fill="#fff"/><path opacity=".33" d="M30.597 13.146a1 1 0 0 1 0 1.708L10.52 27.074A1 1 0 0 1 9 26.222V1.779a1 1 0 0 1 1.52-.854l20.077 12.22Z" fill="#fff"/></svg>\n'
                    ),
                  },
                  null,
                  8,
                  he
                )),
          ]),
        ])
      );
    },
  },
  [["__scopeId", "data-v-b3e66172"]]
);
var ye = h(
  {
    setup(e) {
      const t = j(),
        a = [];
      let n,
        s = 0,
        o = 0;
      const r = (e) => {
        e && a.push({ el: e, offset: 10 * (Math.random() + 1) });
      };
      function l(e) {
        if (t.menuOpen) {
          o += e;
          for (let r = 0; r < a.length; r++) {
            const l = a[r],
              i = l.offset;
            (s = H(s, t.muted ? 0 : 1, 0.01, e)),
              (n = 0.6 * (Math.sin(o * (0.007 + 6e-5 * i) + 30 * i) + 1)),
              (l.el.style.transform = `scaleY(${0.5 + n * s})`);
          }
        }
      }
      function i() {
        t.muted = !t.muted;
      }
      return (
        D(() => {
          C.add(l), l(1e3);
        }),
        A(() => {
          (a.length = 0), C.remove(l);
        }),
        (e, t) => (
          w(),
          y("button", { class: "sound", onClick: i }, [
            (w(),
            y(
              P,
              null,
              S(10, (e, t) =>
                k(
                  "div",
                  { key: t, ref: r, class: _(["sound__bar", `bar${t + 1}`]) },
                  null,
                  2
                )
              ),
              64
            )),
          ])
        )
      );
    },
  },
  [["__scopeId", "data-v-4a2627ec"]]
);
const ke = { class: "menu-content" },
  _e = ["href"],
  $e = ["href"],
  Oe = { key: 0 },
  Le = ["href"],
  Me = { class: "sound-lang" };
var Te = h(
  {
    setup(e) {
      const { wait: t } = E(),
        { $l: a } = x(),
        n = j(),
        s = l(!1),
        o = l(!1),
        r = l(),
        i = l(),
        u = l();
      let d,
        m = 0;
      async function p() {
        const e = ++m,
          a = n.menuOpen;
        a && ((s.value = !0), c.audio.playSound("UI_Pause")),
          a
            ? await (async function () {
                document.documentElement.classList.add("menuOpen"),
                  await Z(),
                  r.value && r.value.getBoundingClientRect();
                o.value = !0;
              })()
            : await (async function () {
                document.documentElement.classList.remove("menuOpen"),
                  (o.value = !1),
                  await t(1200);
              })(),
          e === m && (n.menuOpen || (s.value = !1));
      }
      return (
        D(() => {
          d = U(() => n.menuOpen, p, { immediate: !0 });
        }),
        A(() => {
          d && d();
        }),
        (e, t) =>
          s.value
            ? (w(),
              y(
                "div",
                {
                  key: 0,
                  ref: (e, t) => {
                    (t.base = e), (r.value = e);
                  },
                  class: _(["menu", { menuOpen: o.value }]),
                },
                [
                  k(
                    "div",
                    {
                      ref: (e, t) => {
                        (t.topArrow = e), (i.value = e);
                      },
                      class: "menu-arrowTop",
                    },
                    [I(ne, { color: "#ff2222" })],
                    512
                  ),
                  k(
                    "div",
                    {
                      ref: (e, t) => {
                        (t.botArrow = e), (u.value = e);
                      },
                      class: "menu-arrowBot",
                    },
                    [I(ne, { color: "#ff2222" })],
                    512
                  ),
                  k("div", ke, [
                    I(we),
                    k("ul", null, [
                      k("li", null, [
                        k(
                          "a",
                          {
                            href: T(a)("menu.cta.product.link"),
                            rel: "noopener noreferrer",
                            target: "_blank",
                            onClick:
                              t[0] ||
                              (t[0] = (t) => {
                                e.$stats.event({ name: "click_product" });
                              }),
                          },
                          q(T(a)("menu.cta.product.text")),
                          9,
                          _e
                        ),
                      ]),
                      k("li", null, [
                        k(
                          "a",
                          {
                            href: T(a)("menu.cta.termslink"),
                            rel: "noopener noreferrer",
                            target: "_blank",
                            onClick:
                              t[1] ||
                              (t[1] = (t) => {
                                e.$stats.event({ name: "click_legals" });
                              }),
                          },
                          q(T(a)("menu.cta.terms")),
                          9,
                          $e
                        ),
                      ]),
                      e.$stores.noCookie
                        ? F("", !0)
                        : (w(),
                          y("li", Oe, [
                            k(
                              "a",
                              {
                                href: T(a)("menu.cta.privacylink"),
                                rel: "noopener noreferrer",
                                target: "_blank",
                                onClick:
                                  t[2] ||
                                  (t[2] = (t) => {
                                    e.$stats.event({ name: "click_privacy" });
                                  }),
                              },
                              q(T(a)("menu.cta.cookies")),
                              9,
                              Le
                            ),
                          ])),
                    ]),
                    k("div", Me, [I(ye), I(V)]),
                  ]),
                ],
                2
              ))
            : F("", !0)
      );
    },
  },
  [["__scopeId", "data-v-cef51d22"]]
);
var Ie = {
  setup(e) {
    const t = { passive: !0 },
      a = l(),
      n = M(() => $.$route && "register" === $.$route.name && a.value);
    function s(e) {
      a.value = window.scrollY > 50;
    }
    return (
      D(() => {
        window.addEventListener("scroll", s, t);
      }),
      A(() => {
        window.removeEventListener("scroll", s, t);
      }),
      (e, t) => (
        w(), y("div", { class: _(["gradient", { visible: T(n) }]) }, null, 2)
      )
    );
  },
};
var Re = h(
  {
    setup(e) {
      const t = x(),
        a = [
          "result",
          "register",
          "confirmation",
          "qrcode-home",
          "qrcode-pairing",
          "qrcode-error",
        ],
        n = M(() => t.$stores.gameTutorialVisible || a.includes(t.$route.name));
      return (e, t) => (
        w(),
        y("div", { class: _(["blackOverlay", { visible: T(n) }]) }, null, 2)
      );
    },
  },
  [["__scopeId", "data-v-834be4d6"]]
);
var je = h(
  {
    setup(e) {
      const t = l(),
        a = l(),
        n = l(),
        s = M(() => "game" !== $.$route.name || !$.$stores.keysVisible),
        o = M(() => $.$stores.gameTutorialVisible);
      let r;
      return (
        D(() => {
          r = c.controls.direction.watchImmediate((e) => {
            (a.value = e < 0), (n.value = e > 0);
          });
        }),
        A(() => {
          c.controls.direction.unwatch(r);
        }),
        (e, r) => (
          w(),
          y(
            "div",
            {
              ref: (e, a) => {
                (a.keys = e), (t.value = e);
              },
              class: _(["keys", { hidden: T(s), presentation: T(o) }]),
            },
            [
              k(
                "div",
                {
                  class: _(["keys__left", { active: a.value }]),
                  "aria-label": "left",
                },
                [I(B)],
                2
              ),
              k(
                "div",
                {
                  class: _(["keys__right", { active: n.value }]),
                  "aria-label": "right",
                },
                [I(B)],
                2
              ),
            ],
            2
          )
        )
      );
    },
  },
  [["__scopeId", "data-v-19eeacac"]]
);
const De = ["innerHTML"],
  Ce = { class: "webrtc-error__title" };
var Ae = h(
  {
    setup(e) {
      const t = M(() => !!$.$rtcDisplay.error.value);
      return (e, a) => (
        w(),
        y(
          "section",
          { class: _(["webrtc-error", { visible: T(t) }]) },
          [
            k(
              "div",
              { class: "webrtc-error__icon", innerHTML: T(X) },
              null,
              8,
              De
            ),
            k("div", Ce, [
              k("p", null, q(e.$l("webRTC.pairing.borne.fail")), 1),
            ]),
          ],
          2
        )
      );
    },
  },
  [["__scopeId", "data-v-2fc4c7b1"]]
);
const He = { class: "ui" };
const Pe = W({
  setup: (e) => (
    D(() => {
      let e = null;
      G(() => {
        const t = document.documentElement,
          a = $.$route;
        null !== e && t.classList.remove(e);
        const n = (e = "site-page-" + a.name);
        t.classList.add(n);
      }),
        $.$stores.noCookie && $.$stats.init();
    }),
    "orientation" in screen &&
      (window.screen.orientation.onchange = function () {
        this.type.startsWith("landscape") &&
        document.documentElement.classList.contains("android")
          ? document.body.webkitRequestFullscreen({ navigationUI: "hide" })
          : document.webkitCancelFullScreen && document.webkitExitFullscreen();
      }),
    (e, t) => {
      const a = J("AnimatedRouterView"),
        n = J("WebGL");
      return (
        w(),
        y(
          P,
          null,
          [
            k("main", He, [
              I(me),
              I(Ie),
              I(Te),
              e.$rtcDisplay.enabled.value
                ? F("", !0)
                : (w(), z(je, { key: 0 })),
              e.$rtcDisplay.enabled.value || e.$stores.noCookie
                ? F("", !0)
                : (w(),
                  z(
                    K,
                    {
                      key: 1,
                      "text-html": e.$l("cookies.description"),
                      "accept-html": e.$l("cookies.button.accept"),
                      "decline-html": e.$l("cookies.button.discard"),
                    },
                    null,
                    8,
                    ["text-html", "accept-html", "decline-html"]
                  )),
              e.$rtcDisplay.enabled.value
                ? (w(), z(Ae, { key: 2 }))
                : F("", !0),
              I(a),
              I(Re),
            ]),
            I(n),
            N(" " + q(), 1),
          ],
          64
        )
      );
    }
  ),
});
Y(async () => {
  await (async function (e, t = {}) {
    const a = await u(Object.assign({}, t.appHooks));
    e.use(a);
    const n = await d(Object.assign({}, t.router));
    e.use(n);
    const s = await m(Object.assign({}, t.stores));
    e.use(s);
    const o = await p(Object.assign({}, t.preloader));
    e.use(o);
    const r = await v(Object.assign({}, t.i18n));
    e.use(r);
    const l = await f(Object.assign({}, t.device));
    e.use(l);
    const i = await b(Object.assign({}, t.viewport));
    e.use(i);
    const c = await g(Object.assign({}, t.webgl));
    e.use(c);
    const h = await re(Object.assign({}, t.rtcDisplay));
    e.use(h);
    const w = await te(Object.assign({}, t.statsPlugin));
    e.use(w);
  })(Pe, { router: { historyMode: Q } });
  const e = Pe.config.globalProperties.$router;
  Pe.config.globalProperties.$rtcDisplay.enabled.value &&
    e.push({ name: "qrcode-home" });
  const t = new Set(["register", "confirmation"]);
  e.beforeEach((e, a) => {
    if (Pe.config.globalProperties.$stores.noForm && t.has(e.name)) return !1;
  }),
    Pe.mount("#app");
});
