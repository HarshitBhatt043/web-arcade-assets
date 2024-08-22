import {
  _ as e,
  r as a,
  w as s,
  a as t,
  o as n,
  c as l,
  b as i,
  n as o,
  u as r,
  F as u,
  d as c,
  e as m,
  f as d,
  g as p,
  h as v,
  p as b,
  i as $,
  j as _,
  k as g,
  l as y,
  E as f,
  m as k,
  t as h,
  s as w,
  q as M,
  v as V,
  x as C,
  y as I,
  z as N,
  A as S,
  B as x,
  C as L,
  D as P,
  G as A,
  H as B,
} from "./vendor.1df9bf664adb976c.js";
const E = ["aria-label"],
  G = e(
    {
      __name: "MenuBtn",
      setup(e) {
        const d = a(),
          p = a();
        let v;
        function b() {
          t.$store.isMenuVisible
            ? (t.$analytics.event({
                name: "close_menu",
                clickButtonName: "close_menu",
              }),
              (t.$store.isMenuVisible = !1),
              (t.$store.isBigEggVisible = !1))
            : (t.$analytics.event({
                name: "open_menu",
                clickButtonName: "open_menu",
              }),
              (t.$store.isMenuVisible = !0),
              (t.$store.isBigEggVisible = !0));
        }
        return (
          s(
            () => t.$store.isMenuVisible,
            (e) => {
              d.value = e ? t.$l("aria.label.close") : t.$l("aria.label.menu");
            },
            { immediate: !0 }
          ),
          (e, a) => (
            n(),
            l(
              "button",
              {
                class: o([
                  "menu-btn",
                  [
                    { "menu-btn-game": "Game" === r(t).$route.name },
                    { "menu-is-open-btn": r(t).$store.isMenuVisible },
                  ],
                ]),
                "aria-label": d.value,
                onClick: b,
                onMouseenter:
                  a[0] ||
                  (a[0] = (e) => {
                    v = m({
                      target: p.value,
                      name: "shakeScale",
                      duration: 600,
                      easing: "cubic-bezier(0.1, 0, 0.1, 1)",
                    });
                  }),
                onMouseleave:
                  a[1] ||
                  (a[1] = (e) => {
                    null == v || v.destroy();
                  }),
              },
              [
                i(
                  "div",
                  { ref_key: "cta", ref: p, class: "cta-inner" },
                  [
                    i(
                      "div",
                      {
                        class: o([
                          { "is-visible": !r(t).$store.isMenuVisible },
                          "bars bars-open",
                        ]),
                      },
                      [
                        (n(),
                        l(
                          u,
                          null,
                          c(3, (e) =>
                            i(
                              "span",
                              { key: e, class: o(["bar", ["bar-" + e]]) },
                              null,
                              2
                            )
                          ),
                          64
                        )),
                      ],
                      2
                    ),
                    i(
                      "div",
                      {
                        class: o([
                          { "is-visible": r(t).$store.isMenuVisible },
                          "bars bars-close",
                        ]),
                      },
                      [
                        (n(),
                        l(
                          u,
                          null,
                          c(2, (e) =>
                            i(
                              "span",
                              { key: e, class: o(["bar", ["bar-" + e]]) },
                              null,
                              2
                            )
                          ),
                          64
                        )),
                      ],
                      2
                    ),
                  ],
                  512
                ),
              ],
              42,
              E
            )
          )
        );
      },
    },
    [["__scopeId", "data-v-e956c6a1"]]
  ),
  H = ["aria-label"],
  R = e(
    {
      __name: "MsiLogo",
      setup: (e) => (e, a) => {
        const s = d("SvgIcon");
        return (
          n(),
          l(
            "button",
            {
              class: "msi-logo",
              "aria-label": e.$l("aria.label.msi"),
              onClick:
                a[0] ||
                (a[0] = (e) => {
                  "Home" !== t.$route.name
                    ? (t.$router.push({ name: "Home" }),
                      t.$store.isMenuVisible && (t.$store.isMenuVisible = !1))
                    : t.$store.isMenuVisible && (t.$store.isMenuVisible = !1);
                }),
            },
            [p(s, { id: "msi-logo" })],
            8,
            H
          )
        );
      },
    },
    [["__scopeId", "data-v-9fba8d8c"]]
  ),
  D = ["aria-label"],
  j = { class: "waves" },
  z = e(
    {
      __name: "Volume",
      setup(e) {
        const s = a();
        let r;
        function u(e) {
          e.preventDefault(),
            e.stopPropagation(),
            (t.$store.isAudioMuted = !t.$store.isAudioMuted);
        }
        return (e, a) => {
          const t = d("SvgIcon");
          return (
            n(),
            l(
              "button",
              {
                class: o(["volume-btn", { "is-muted": e.$store.isAudioMuted }]),
                "aria-label": e.$l("aria.label.sound"),
                onClick: u,
                onMouseenter:
                  a[0] ||
                  (a[0] = (e) => {
                    r = m({
                      target: s.value,
                      name: "shakeScale",
                      duration: 600,
                      easing: "cubic-bezier(0.1, 0, 0.1, 1)",
                    });
                  }),
                onMouseleave:
                  a[1] ||
                  (a[1] = (e) => {
                    null == r || r.destroy();
                  }),
              },
              [
                i(
                  "div",
                  { ref_key: "cta", ref: s, class: "volume-inner" },
                  [
                    p(t, { id: "volume" }),
                    i("div", j, [
                      p(t, { id: "waves", class: "icon-sound" }),
                      p(t, { id: "wave-close", class: "icon-sound" }),
                    ]),
                  ],
                  512
                ),
              ],
              42,
              D
            )
          );
        };
      },
    },
    [["__scopeId", "data-v-4be8f648"]]
  ),
  O = { class: "buttons" },
  T = e(
    {
      __name: "AppHeader",
      setup: (e) => (e, a) => (
        n(),
        l(
          "header",
          {
            class: o([
              "header",
              { "header-game": "Game" === r(t).$route.name },
            ]),
          },
          [p(R), i("div", O, [p(z), p(G)])],
          2
        )
      ),
    },
    [["__scopeId", "data-v-68d981c5"]]
  ),
  F = { key: 0, class: "rotate-device" },
  U = ((e) => (b("data-v-54c4aff0"), (e = e()), $(), e))(() =>
    i("div", { class: "rotate-background" }, null, -1)
  ),
  q = { class: "rotate-wrapper" },
  W = { class: "icon-wrapper" },
  J = { class: "icon-rotate" },
  K = e(
    {
      __name: "RotateDevice",
      setup(e) {
        const o = a();
        return (
          s(
            t.$viewport,
            () =>
              (o.value = matchMedia(
                "only screen and (max-width: 1024px) and (orientation: landscape)"
              ).matches),
            { immediate: !0 }
          ),
          (e, a) => {
            const s = d("SvgIcon");
            return o.value
              ? (n(),
                l("div", F, [
                  U,
                  i("div", q, [
                    i("div", W, [
                      i("div", J, [
                        p(s, { id: "arrow-rotate", class: "arrow-left" }),
                        p(s, { id: "mobile", class: "rotate-mobile" }),
                        p(s, { id: "arrow-rotate", class: "arrow-right" }),
                      ]),
                    ]),
                  ]),
                ]))
              : v("", !0);
          }
        );
      },
    },
    [["__scopeId", "data-v-54c4aff0"]]
  ),
  Q = ((e) => (b("data-v-9eaf8a22"), (e = e()), $(), e))(() =>
    i("div", { class: "menu-background" }, null, -1)
  ),
  X = { class: "menu-container" },
  Y = { class: "char-animation" },
  Z = ["textContent"],
  ee = { class: "char-animation" },
  ae = ["textContent"],
  se = ["href", "onClick"],
  te = ["innerHTML"],
  ne = e(
    {
      __name: "Menu",
      setup(e) {
        const m = a(),
          d = a(),
          b = a(),
          $ = a(),
          { csstween: w } = _(),
          M = [
            t.$l("menu.msi.link"),
            t.$l("menu.cookies.link"),
            t.$l("menu.legals.link"),
            t.$l("menu.rules.link"),
          ],
          V = [
            t.$l("menu.msi.label"),
            t.$l("menu.cookies.label"),
            t.$l("menu.legals.label"),
            t.$l("menu.rules.label"),
          ];
        let C;
        const I = [...t.$l("menu.play")],
          N = [...t.$l("menu.replay")];
        function S() {
          t.$analytics.event({
            name: "menu_play",
            clickButtonName: "menu_play",
          }),
            "Game" === t.$route.name
              ? (x(), (t.$store.isMenuVisible = !1))
              : ((t.$store.isMenuVisible = !1),
                t.$router.push({ name: "Game" }));
        }
        async function x() {
          null == C || C.destroy();
        }
        return (
          s(
            () => t.$store.isMenuVisible,
            (e) => {
              e
                ? (async function () {
                    if (
                      (t.$analytics.pageview({ title: "Menu", path: "/menu" }),
                      !t.$store.isMenuVisible)
                    )
                      return;
                    if (m.value)
                      for (let a = 0; a < m.value.length; a++) {
                        m.value[a].style.opacity = 0;
                      }
                    let e = 150;
                    if (m.value)
                      for (let a = 0; a < m.value.length; a++) {
                        const s = m.value[a];
                        C = w({
                          target: s,
                          transform: [
                            `rotate(${y.randomFloat(-60, 60)}deg) scale(0)`,
                            "",
                          ],
                          duration: 700,
                          ease: "cubic-bezier(0.17, 0.89, 0.32, 1.27)",
                          delay: y.randomFloat(e, e + 200),
                          opacity: [0, ""],
                        });
                      }
                  })()
                : x();
            },
            { immediate: !1 }
          ),
          g(() => {
            ($.value = Array.from(d.value.querySelectorAll(".char-animation"))),
              (function (e) {
                const a = Math.max(...e.map((e) => e.childNodes.length));
                a <= 8
                  ? d.value.style.setProperty("--title-demult", 0.8)
                  : a > 8 && a <= 12
                  ? d.value.style.setProperty("--title-demult", 0.65)
                  : a > 12 && d.value.style.setProperty("--title-demult", 0.55);
              })($.value);
          }),
          (e, a) => (
            n(),
            l(
              "aside",
              {
                class: o([
                  "menu",
                  [
                    { "menu-game": "Game" === r(t).$route.name },
                    { "menu-open": r(t).$store.isMenuVisible },
                  ],
                ]),
              },
              [
                Q,
                p(f),
                i("div", X, [
                  "End" === r(t).$route.name
                    ? (n(),
                      l(
                        "button",
                        {
                          key: 0,
                          ref_key: "title",
                          ref: d,
                          class: "title",
                          onClick: a[0] || (a[0] = (e) => S()),
                        },
                        [
                          i("div", Y, [
                            (n(),
                            l(
                              u,
                              null,
                              c(N, (e) =>
                                i(
                                  "span",
                                  {
                                    key: e,
                                    ref_for: !0,
                                    ref_key: "chars",
                                    ref: m,
                                    class: o([
                                      "char",
                                      { "is-space": " " === e },
                                    ]),
                                    textContent: h(e),
                                  },
                                  null,
                                  10,
                                  Z
                                )
                              ),
                              64
                            )),
                          ]),
                        ],
                        512
                      ))
                    : v("", !0),
                  "End" !== r(t).$route.name
                    ? (n(),
                      l(
                        "button",
                        {
                          key: 1,
                          ref_key: "title",
                          ref: d,
                          class: "title play",
                          onClick: a[1] || (a[1] = (e) => S()),
                        },
                        [
                          i("div", ee, [
                            (n(),
                            l(
                              u,
                              null,
                              c(I, (e) =>
                                i(
                                  "span",
                                  {
                                    key: e,
                                    ref_for: !0,
                                    ref_key: "chars",
                                    ref: m,
                                    class: o([
                                      "char",
                                      { "is-space": " " === e },
                                    ]),
                                    textContent: h(e),
                                  },
                                  null,
                                  10,
                                  ae
                                )
                              ),
                              64
                            )),
                          ]),
                        ],
                        512
                      ))
                    : v("", !0),
                  i(
                    "ul",
                    { ref_key: "items", ref: b, class: "msi-links" },
                    [
                      (n(),
                      l(
                        u,
                        null,
                        c(4, (e) =>
                          i(
                            "li",
                            {
                              key: e,
                              ref_for: !0,
                              ref_key: "items",
                              ref: b,
                              class: o(["msi-items", ["items-" + e]]),
                            },
                            [
                              i(
                                "a",
                                {
                                  href: M[e - 1],
                                  class: "msi-item",
                                  target: "_blank",
                                  rel: "noreferrer noopener",
                                  onClick: (a) =>
                                    (function (e) {
                                      let a;
                                      switch (e) {
                                        case 1:
                                          a = "menu_msi_reward_program";
                                          break;
                                        case 2:
                                          a = "menu_cookies";
                                          break;
                                        case 3:
                                          a = "menu_legals";
                                          break;
                                        case 4:
                                          a = "menu_rules";
                                      }
                                      t.$analytics.event({
                                        name: a,
                                        clickButtonName: a,
                                      });
                                    })(e),
                                },
                                [
                                  i(
                                    "span",
                                    { innerHTML: V[e - 1] },
                                    null,
                                    8,
                                    te
                                  ),
                                ],
                                8,
                                se
                              ),
                            ],
                            2
                          )
                        ),
                        64
                      )),
                    ],
                    512
                  ),
                  p(k),
                ]),
              ],
              2
            )
          )
        );
      },
    },
    [["__scopeId", "data-v-9eaf8a22"]]
  ),
  le = { class: "ui" },
  ie = N({
    __name: "App",
    setup(e) {
      const { setInterval: a } = I();
      a(() => t.$store.counter++, 1e3);
      const o = w(t.$audio.unlocked);
      let c = null,
        m = null;
      return (
        s(
          () => [t.$route.name, t.$store.lose, o.value],
          ([e, a, s]) => {
            const n = s && "Game" === e && !a;
            s &&
              !m &&
              (m = t.$audio.playSound("sfx_Amb_Loop", {
                volume: 1.5,
                loop: !0,
              })),
              n && !c
                ? (c = t.$audio.playSound("music_Loop", {
                    volume: 1.5,
                    loop: !0,
                  }))
                : !n && c && (c && c.stop(), (c = null));
          }
        ),
        (e, a) => {
          const s = d("NiceRouterView"),
            t = d("WebGL");
          return (
            n(),
            l(
              u,
              null,
              [
                i("main", le, [
                  p(
                    M,
                    {
                      "text-html": e.$l("cookies.description"),
                      "accept-html": e.$l("cookies.button.accept"),
                      "decline-html": e.$l("cookies.button.discard"),
                    },
                    null,
                    8,
                    ["text-html", "accept-html", "decline-html"]
                  ),
                  p(T),
                  p(ne),
                  e.$device.type.mobile ? (n(), V(K, { key: 0 })) : v("", !0),
                  p(s),
                ]),
                p(t),
                (n(), V(C(r(null)))),
              ],
              64
            )
          );
        }
      );
    },
  });
S(async () => {
  await ie.usePreview();
  const e = await x(
      () => import("./assets.c43423314adb976c.js"),
      [
        "assets/assets.c43423314adb976c.js",
        "assets/vendor.1df9bf664adb976c.js",
        "assets/vendor.6855c7734adb976c.css",
      ]
    ).then((e) => e.default),
    a = (function () {
      const e = new URLSearchParams(location.search),
        a = e.has("uid") && e.get("uid");
      return (
        window.history.replaceState(
          {},
          document.title,
          document.location.pathname
        ),
        a
      );
    })();
  ie.pluginManager.setOptions("user", { userID: a }),
    ie.pluginManager.setOptions("router", { historyMode: L });
  const s = await ie.pluginManager.install();
  s.$assets = await e.list;
  for (const t in s.$assets) s.$assets[t].chosenURL = P.select(s.$assets[t]);
  s.$preloader.task(
    Promise.all([
      ...Object.values(s.$assets).map((e) =>
        A(e.chosenURL, {
          onLoad: (a) => {
            e.node = a.node;
          },
        })
      ),
    ])
  ),
    (s.$analytics.pageview = ({ path: e, title: a = "" }) => {
      e &&
        s.$analytics.rawEvent({
          event: "spaPageview",
          campaignSiteName: "egghunt",
          pagePath: e.trim(),
          pageTitle: a.trim(),
        });
    }),
    (s.$analytics.event = ({ name: e, clickButtonName: a }) => {
      s.$analytics.rawEvent({
        event: "campaignClick",
        campaignSiteName: "egghunt",
        clickButtonName: a,
        name: e,
      });
    }),
    s.$user.init(),
    s.$controls.listen(),
    s.$preloader.task(
      Promise.all(
        [
          new B("Nunito", { weight: 700 }),
          new B("Nunito", { weight: 900 }),
          new B("Grauna", { weight: 400 }),
        ].map((e) => e.load())
      )
    ),
    ie.mount("#app");
});
