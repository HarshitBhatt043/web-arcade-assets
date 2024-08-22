//  Merci-Michel [R]
//  https://www.merci-michel.com/
//  Build 20230208-113313

import { o as e, j as t, k as o } from "./vendor.58ed9051274a7243.js";
var a = {
  RemoteLeftUp: "remoteLeftUp",
  RemoteLeftDown: "remoteLeftDown",
  RemoteRightUp: "remoteRightUp",
  RemoteRightDown: "remoteRightDown",
  RemoteReady: "remoteReady",
  DisplayFinish: "displayFinish",
};
const l = window;
function n() {
  l.gaDataLayer.push(arguments);
}
function s(e) {
  for (const t in e) null == e[t] && delete e[t];
  return e;
}
(l.gtmDataLayer = l.gtmDataLayer || []), (l.gaDataLayer = l.gaDataLayer || []);
const r = { ga4ID: "G-2420S1FXNZ", debug: !0 },
  i = r.gtmID || null,
  p = r.ga4ID || null,
  c = {
    send_page_view: !1,
    restricted_data_processing: !0,
    anonymize_ip: !0,
    cookie_prefix: "analytics_ga4",
    cookie_update: !1,
    cookie_expires: 15552e3,
  };
let g = !1;
const u = [];
function d(e = {}) {
  let t = null;
  const o = {
    install: function (t) {
      (t.config.globalProperties.$stats = o),
        t.provide("stats", o),
        e.autoInit && a();
      delete o.install;
    },
    init: a,
    pageview: function e({ title: o, url: a }) {
      var l, r;
      window.ga && !g && (g = !0);
      if (!g) return void u.push(() => e({ title: o, url: a }));
      if ((a = (a + "").split("?")[0]) === t) return;
      t = a;
      const i = s({
          page_location: (a += document.location.search),
          page_title: o,
        }),
        c =
          null == (r = null == (l = window.__DATA) ? void 0 : l.site)
            ? void 0
            : r.locale;
      c && (i.locale = c);
      n("event", "page_view", Object.assign({ send_to: p }, i)),
        window.ga && ga("send", "pageview", { page: a, title: o });
    },
    event: function e(t = {}) {
      var o, a;
      if ("string" != typeof t.name || t.name.length < 1) return;
      if (!g) return void u.push(() => e(t));
      const r = s({
          event_category: t.category,
          event_label: t.label,
          value: t.value,
        }),
        c =
          null == (a = null == (o = window.__DATA) ? void 0 : o.site)
            ? void 0
            : a.locale;
      c && (r.locale = c);
      t.name,
        r.category,
        r.label,
        r.value,
        i &&
          ((d = Object.assign({ event: t.name }, r)), l.gtmDataLayer.push(d));
      var d;
      p && n("event", t.name, Object.assign({ send_to: p }, r));
    },
  };
  return o;
  function a() {
    if (!g) {
      g = !0;
      {
        n("js", new Date()),
          n("config", p, c),
          n("set", "allow_ad_personalization_signals", !1),
          n("set", "allow_google_signals", !1);
        const e = document.createElement("script");
        (e.type = "text/javascript"),
          (e.async = !0),
          (e.src =
            "https://www.googletagmanager.com/gtag/js?l=gaDataLayer&id=" + p),
          document.head.appendChild(e);
      }
      u.forEach((e) => e()), (u.length = 0);
    }
  }
}
var f = "/assets/logo_mb.a8d9b211274a7243.svg";
const v = {
    viewBox: "0 0 1726 596",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  m = { opacity: ".75", "stroke-width": "3" },
  w = ["stroke"],
  y = ["stroke"],
  _ = ["stroke"],
  h = ["stop-color"],
  D = ["stop-color"],
  x = ["stop-color"],
  L = ["stop-color"],
  b = ["stop-color"],
  k = ["stop-color"];
var R = {
  props: { color: { type: String, default: "#fff" } },
  setup(a) {
    const l = a.color.slice(1),
      n = l + "_a",
      s = l + "_b",
      r = l + "_c";
    return (a, l) => (
      e(),
      t("svg", v, [
        o("g", m, [
          o(
            "path",
            {
              d: "M1199.13 297.991 856.044 2H528.217l327.827 295.991-327.827 295.99h327.827l343.086-295.99Z",
              stroke: "url(#" + n + ")",
            },
            null,
            8,
            w
          ),
          o(
            "path",
            {
              d: "M675.062 297.991 331.977 2H4.15l327.827 295.991L4.15 593.981h327.827l343.085-295.99Z",
              stroke: "url(#" + s + ")",
            },
            null,
            8,
            y
          ),
          o(
            "path",
            {
              d: "M1723.2 297.991 1380.11 2h-327.83l327.83 295.991-327.83 295.99h327.83l343.09-295.99Z",
              stroke: "url(#" + r + ")",
            },
            null,
            8,
            _
          ),
        ]),
        o("defs", null, [
          o(
            "linearGradient",
            {
              id: n,
              x1: "1230.85",
              y1: "296.745",
              x2: "576.441",
              y2: "312.539",
              gradientUnits: "userSpaceOnUse",
            },
            [
              o("stop", { "stop-color": a.$props.color }, null, 8, h),
              o(
                "stop",
                {
                  offset: "1",
                  "stop-color": a.$props.color,
                  "stop-opacity": "0",
                },
                null,
                8,
                D
              ),
            ]
          ),
          o(
            "linearGradient",
            {
              id: s,
              x1: "692.21",
              y1: "299.489",
              x2: "4.15",
              y2: "297.991",
              gradientUnits: "userSpaceOnUse",
            },
            [
              o("stop", { "stop-color": a.$props.color }, null, 8, x),
              o(
                "stop",
                {
                  offset: "1",
                  "stop-color": a.$props.color,
                  "stop-opacity": "0",
                },
                null,
                8,
                L
              ),
            ]
          ),
          o(
            "linearGradient",
            {
              id: r,
              x1: "1723.2",
              y1: "297.991",
              x2: "1130.8",
              y2: "301.943",
              gradientUnits: "userSpaceOnUse",
            },
            [
              o("stop", { "stop-color": a.$props.color }, null, 8, b),
              o(
                "stop",
                {
                  offset: "1",
                  "stop-color": a.$props.color,
                  "stop-opacity": "0",
                },
                null,
                8,
                k
              ),
            ]
          ),
        ]),
      ])
    );
  },
};
export { R as I, a as M, f as _, d as c };
