var Lt = Object.defineProperty,
    Ot = Object.defineProperties;
var Et = Object.getOwnPropertyDescriptors;
var rt = Object.getOwnPropertySymbols;
var St = Object.prototype.hasOwnProperty,
    Tt = Object.prototype.propertyIsEnumerable;
var nt = (I, k, y) =>
        k in I
            ? Lt(I, k, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: y,
              })
            : (I[k] = y),
    Ge = (I, k) => {
        for (var y in k || (k = {})) St.call(k, y) && nt(I, y, k[y]);
        if (rt) for (var y of rt(k)) Tt.call(k, y) && nt(I, y, k[y]);
        return I;
    },
    We = (I, k) => Ot(I, Et(k));
import {
    r as we,
    o as O,
    c as V,
    e as Z,
    g as oe,
    j as ke,
    k as U,
    l as at,
    i as x,
    F as ve,
    m as ge,
    d as X,
    t as ce,
    n as ne,
    p as Ae,
    q as ze,
    b as se,
    w as fe,
    s as ot,
    v as re,
    f as je,
    x as Me,
    y as jt,
    z as $t,
    A as Ct,
    B as Ue,
    C as Ye,
    D as ye,
    E as $e,
    G as st,
    H as ct,
    u as ut,
    h as he,
    T as lt,
    I as Dt,
    J as At,
    K as Mt,
    L as Le,
    M as Nt,
    N as Ce,
    O as De,
    P as Pt,
    Q as It,
    R as qe,
    S as ft,
    U as dt,
    a as Ht,
    V as pt,
    W as Vt,
    X as Te,
    Y as Ke,
    Z as Rt,
    _ as Bt,
    $ as Ft,
    a0 as Gt,
} from "./app.fffb5d3d.js";
import { _ as Wt } from "./plugin-vue_export-helper.21dcd24c.js";
const zt = {},
    Ut = { class: "theme-default-content custom" };
function Yt(I, k) {
    const y = we("Content");
    return O(), V("div", Ut, [Z(y)]);
}
var qt = Wt(zt, [["render", Yt]]);
const Kt = { key: 0, class: "features" },
    Xt = oe({
        setup(I) {
            const k = ke(),
                y = U(() => (at(k.value.features) ? k.value.features : []));
            return (o, u) =>
                x(y).length
                    ? (O(),
                      V("div", Kt, [
                          (O(!0),
                          V(
                              ve,
                              null,
                              ge(
                                  x(y),
                                  (e) => (
                                      O(),
                                      V(
                                          "div",
                                          { key: e.title, class: "feature" },
                                          [
                                              X("h2", null, ce(e.title), 1),
                                              X("p", null, ce(e.details), 1),
                                          ]
                                      )
                                  )
                              ),
                              128
                          )),
                      ]))
                    : ne("", !0);
        },
    }),
    Jt = ["innerHTML"],
    Qt = ["textContent"],
    Zt = oe({
        setup(I) {
            const k = ke(),
                y = U(() => k.value.footer),
                o = U(() => k.value.footerHtml);
            return (u, e) =>
                x(y)
                    ? (O(),
                      V(
                          ve,
                          { key: 0 },
                          [
                              x(o)
                                  ? (O(),
                                    V(
                                        "div",
                                        {
                                            key: 0,
                                            class: "footer",
                                            innerHTML: x(y),
                                        },
                                        null,
                                        8,
                                        Jt
                                    ))
                                  : (O(),
                                    V(
                                        "div",
                                        {
                                            key: 1,
                                            class: "footer",
                                            textContent: ce(x(y)),
                                        },
                                        null,
                                        8,
                                        Qt
                                    )),
                          ],
                          64
                      ))
                    : ne("", !0);
        },
    }),
    er = ["href", "rel", "target", "aria-label"],
    tr = oe({ inheritAttrs: !1 }),
    _e = oe(
        We(Ge({}, tr), {
            props: { item: { type: Object, required: !0 } },
            setup(I) {
                const k = I,
                    y = Ae(),
                    o = Ct(),
                    { item: u } = ze(k),
                    e = U(() => Me(u.value.link)),
                    t = U(() => jt(u.value.link) || $t(u.value.link)),
                    r = U(() => {
                        if (!t.value) {
                            if (u.value.target) return u.value.target;
                            if (e.value) return "_blank";
                        }
                    }),
                    n = U(() => r.value === "_blank"),
                    i = U(() => !e.value && !t.value && !n.value),
                    a = U(() => {
                        if (!t.value) {
                            if (u.value.rel) return u.value.rel;
                            if (n.value) return "noopener noreferrer";
                        }
                    }),
                    s = U(() => u.value.ariaLabel || u.value.text),
                    c = U(() => {
                        const f = Object.keys(o.value.locales);
                        return f.length
                            ? !f.some((v) => v === u.value.link)
                            : u.value.link !== "/";
                    }),
                    l = U(() =>
                        c.value ? y.path.startsWith(u.value.link) : !1
                    ),
                    d = U(() =>
                        i.value
                            ? u.value.activeMatch
                                ? new RegExp(u.value.activeMatch).test(y.path)
                                : l.value
                            : !1
                    );
                return (f, v) => {
                    const h = we("RouterLink"),
                        E = we("ExternalLinkIcon");
                    return x(i)
                        ? (O(),
                          se(
                              h,
                              ot(
                                  {
                                      key: 0,
                                      class: { "router-link-active": x(d) },
                                      to: x(u).link,
                                      "aria-label": x(s),
                                  },
                                  f.$attrs
                              ),
                              {
                                  default: fe(() => [
                                      re(f.$slots, "before"),
                                      je(" " + ce(x(u).text) + " ", 1),
                                      re(f.$slots, "after"),
                                  ]),
                                  _: 3,
                              },
                              16,
                              ["class", "to", "aria-label"]
                          ))
                        : (O(),
                          V(
                              "a",
                              ot(
                                  {
                                      key: 1,
                                      class: "external-link",
                                      href: x(u).link,
                                      rel: x(a),
                                      target: x(r),
                                      "aria-label": x(s),
                                  },
                                  f.$attrs
                              ),
                              [
                                  re(f.$slots, "before"),
                                  je(" " + ce(x(u).text) + " ", 1),
                                  x(n) ? (O(), se(E, { key: 0 })) : ne("", !0),
                                  re(f.$slots, "after"),
                              ],
                              16,
                              er
                          ));
                };
            },
        })
    ),
    rr = { class: "hero" },
    nr = { key: 0, id: "main-title" },
    or = { key: 1, class: "description" },
    ir = { key: 2, class: "actions" },
    ar = oe({
        setup(I) {
            const k = ke(),
                y = Ue(),
                o = Ye(),
                u = U(() =>
                    o.value && k.value.heroImageDark !== void 0
                        ? k.value.heroImageDark
                        : k.value.heroImage
                ),
                e = U(() =>
                    k.value.heroText === null
                        ? null
                        : k.value.heroText || y.value.title || "Hello"
                ),
                t = U(() => k.value.heroAlt || e.value || "hero"),
                r = U(() =>
                    k.value.tagline === null
                        ? null
                        : k.value.tagline ||
                          y.value.description ||
                          "Welcome to your VuePress site"
                ),
                n = U(() =>
                    at(k.value.actions)
                        ? k.value.actions.map(
                              ({ text: a, link: s, type: c = "primary" }) => ({
                                  text: a,
                                  link: s,
                                  type: c,
                              })
                          )
                        : []
                ),
                i = () => {
                    if (!u.value) return null;
                    const a = $e("img", { src: st(u.value), alt: t.value });
                    return k.value.heroImageDark === void 0
                        ? a
                        : $e(ct, () => a);
                };
            return (a, s) => (
                O(),
                V("header", rr, [
                    Z(i),
                    x(e) ? (O(), V("h1", nr, ce(x(e)), 1)) : ne("", !0),
                    x(r) ? (O(), V("p", or, ce(x(r)), 1)) : ne("", !0),
                    x(n).length
                        ? (O(),
                          V("p", ir, [
                              (O(!0),
                              V(
                                  ve,
                                  null,
                                  ge(
                                      x(n),
                                      (c) => (
                                          O(),
                                          se(
                                              _e,
                                              {
                                                  key: c.text,
                                                  class: ye([
                                                      "action-button",
                                                      [c.type],
                                                  ]),
                                                  item: c,
                                              },
                                              null,
                                              8,
                                              ["class", "item"]
                                          )
                                      )
                                  ),
                                  128
                              )),
                          ]))
                        : ne("", !0),
                ])
            );
        },
    }),
    sr = { class: "home" },
    cr = oe({
        setup(I) {
            return (k, y) => (O(), V("main", sr, [Z(ar), Z(Xt), Z(qt), Z(Zt)]));
        },
    }),
    ur = oe({
        setup(I) {
            const k = ut(),
                y = Ue(),
                o = he(),
                u = Ye(),
                e = U(() => o.value.home || k.value),
                t = U(() => y.value.title),
                r = U(() =>
                    u.value && o.value.logoDark !== void 0
                        ? o.value.logoDark
                        : o.value.logo
                ),
                n = () => {
                    if (!r.value) return null;
                    const i = $e("img", {
                        class: "logo",
                        src: st(r.value),
                        alt: t.value,
                    });
                    return o.value.logoDark === void 0 ? i : $e(ct, () => i);
                };
            return (i, a) => {
                const s = we("RouterLink");
                return (
                    O(),
                    se(
                        s,
                        { to: x(e) },
                        {
                            default: fe(() => [
                                Z(n),
                                x(t)
                                    ? (O(),
                                      V(
                                          "span",
                                          {
                                              key: 0,
                                              class: ye([
                                                  "site-name",
                                                  { "can-hide": x(r) },
                                              ]),
                                          },
                                          ce(x(t)),
                                          3
                                      ))
                                    : ne("", !0),
                            ]),
                            _: 1,
                        },
                        8,
                        ["to"]
                    )
                );
            };
        },
    }),
    vt = oe({
        setup(I) {
            const k = (o) => {
                    o.style.height = o.scrollHeight + "px";
                },
                y = (o) => {
                    o.style.height = "";
                };
            return (o, u) => (
                O(),
                se(
                    lt,
                    {
                        name: "dropdown",
                        onEnter: k,
                        onAfterEnter: y,
                        onBeforeLeave: k,
                    },
                    { default: fe(() => [re(o.$slots, "default")]), _: 3 }
                )
            );
        },
    });
var ht = { exports: {} },
    lr = Dt(At);
(function (I, k) {
    (function (y, o) {
        I.exports = o(lr);
    })(typeof self != "undefined" ? self : Mt, function (y) {
        return (function (o) {
            var u = {};
            function e(t) {
                if (u[t]) return u[t].exports;
                var r = (u[t] = { i: t, l: !1, exports: {} });
                return (
                    o[t].call(r.exports, r, r.exports, e), (r.l = !0), r.exports
                );
            }
            return (
                (e.m = o),
                (e.c = u),
                (e.d = function (t, r, n) {
                    e.o(t, r) ||
                        Object.defineProperty(t, r, { enumerable: !0, get: n });
                }),
                (e.r = function (t) {
                    typeof Symbol != "undefined" &&
                        Symbol.toStringTag &&
                        Object.defineProperty(t, Symbol.toStringTag, {
                            value: "Module",
                        }),
                        Object.defineProperty(t, "__esModule", { value: !0 });
                }),
                (e.t = function (t, r) {
                    if (
                        (1 & r && (t = e(t)),
                        8 & r ||
                            (4 & r &&
                                typeof t == "object" &&
                                t &&
                                t.__esModule))
                    )
                        return t;
                    var n = Object.create(null);
                    if (
                        (e.r(n),
                        Object.defineProperty(n, "default", {
                            enumerable: !0,
                            value: t,
                        }),
                        2 & r && typeof t != "string")
                    )
                        for (var i in t)
                            e.d(
                                n,
                                i,
                                function (a) {
                                    return t[a];
                                }.bind(null, i)
                            );
                    return n;
                }),
                (e.n = function (t) {
                    var r =
                        t && t.__esModule
                            ? function () {
                                  return t.default;
                              }
                            : function () {
                                  return t;
                              };
                    return e.d(r, "a", r), r;
                }),
                (e.o = function (t, r) {
                    return Object.prototype.hasOwnProperty.call(t, r);
                }),
                (e.p = ""),
                e((e.s = "fb15"))
            );
        })({
            "00ee": function (o, u, e) {
                var t = e("b622"),
                    r = t("toStringTag"),
                    n = {};
                (n[r] = "z"), (o.exports = String(n) === "[object z]");
            },
            "0366": function (o, u, e) {
                var t = e("1c0b");
                o.exports = function (r, n, i) {
                    if ((t(r), n === void 0)) return r;
                    switch (i) {
                        case 0:
                            return function () {
                                return r.call(n);
                            };
                        case 1:
                            return function (a) {
                                return r.call(n, a);
                            };
                        case 2:
                            return function (a, s) {
                                return r.call(n, a, s);
                            };
                        case 3:
                            return function (a, s, c) {
                                return r.call(n, a, s, c);
                            };
                    }
                    return function () {
                        return r.apply(n, arguments);
                    };
                };
            },
            "057f": function (o, u, e) {
                var t = e("fc6a"),
                    r = e("241c").f,
                    n = {}.toString,
                    i =
                        typeof window == "object" &&
                        window &&
                        Object.getOwnPropertyNames
                            ? Object.getOwnPropertyNames(window)
                            : [],
                    a = function (s) {
                        try {
                            return r(s);
                        } catch {
                            return i.slice();
                        }
                    };
                o.exports.f = function (s) {
                    return i && n.call(s) == "[object Window]" ? a(s) : r(t(s));
                };
            },
            "06cf": function (o, u, e) {
                var t = e("83ab"),
                    r = e("d1e7"),
                    n = e("5c6c"),
                    i = e("fc6a"),
                    a = e("a04b"),
                    s = e("5135"),
                    c = e("0cfb"),
                    l = Object.getOwnPropertyDescriptor;
                u.f = t
                    ? l
                    : function (d, f) {
                          if (((d = i(d)), (f = a(f)), c))
                              try {
                                  return l(d, f);
                              } catch {}
                          if (s(d, f)) return n(!r.f.call(d, f), d[f]);
                      };
            },
            "0b42": function (o, u, e) {
                var t = e("861d"),
                    r = e("e8b5"),
                    n = e("b622"),
                    i = n("species");
                o.exports = function (a) {
                    var s;
                    return (
                        r(a) &&
                            ((s = a.constructor),
                            typeof s != "function" ||
                            (s !== Array && !r(s.prototype))
                                ? t(s) &&
                                  ((s = s[i]), s === null && (s = void 0))
                                : (s = void 0)),
                        s === void 0 ? Array : s
                    );
                };
            },
            "0cfb": function (o, u, e) {
                var t = e("83ab"),
                    r = e("d039"),
                    n = e("cc12");
                o.exports =
                    !t &&
                    !r(function () {
                        return (
                            Object.defineProperty(n("div"), "a", {
                                get: function () {
                                    return 7;
                                },
                            }).a != 7
                        );
                    });
            },
            "159b": function (o, u, e) {
                var t = e("da84"),
                    r = e("fdbc"),
                    n = e("17c2"),
                    i = e("9112");
                for (var a in r) {
                    var s = t[a],
                        c = s && s.prototype;
                    if (c && c.forEach !== n)
                        try {
                            i(c, "forEach", n);
                        } catch {
                            c.forEach = n;
                        }
                }
            },
            "17c2": function (o, u, e) {
                var t = e("b727").forEach,
                    r = e("a640"),
                    n = r("forEach");
                o.exports = n
                    ? [].forEach
                    : function (i) {
                          return t(
                              this,
                              i,
                              arguments.length > 1 ? arguments[1] : void 0
                          );
                      };
            },
            "1be4": function (o, u, e) {
                var t = e("d066");
                o.exports = t("document", "documentElement");
            },
            "1c0b": function (o, u) {
                o.exports = function (e) {
                    if (typeof e != "function")
                        throw TypeError(String(e) + " is not a function");
                    return e;
                };
            },
            "1c7e": function (o, u, e) {
                var t = e("b622"),
                    r = t("iterator"),
                    n = !1;
                try {
                    var i = 0,
                        a = {
                            next: function () {
                                return { done: !!i++ };
                            },
                            return: function () {
                                n = !0;
                            },
                        };
                    (a[r] = function () {
                        return this;
                    }),
                        Array.from(a, function () {
                            throw 2;
                        });
                } catch {}
                o.exports = function (s, c) {
                    if (!c && !n) return !1;
                    var l = !1;
                    try {
                        var d = {};
                        (d[r] = function () {
                            return {
                                next: function () {
                                    return { done: (l = !0) };
                                },
                            };
                        }),
                            s(d);
                    } catch {}
                    return l;
                };
            },
            "1d80": function (o, u) {
                o.exports = function (e) {
                    if (e == null) throw TypeError("Can't call method on " + e);
                    return e;
                };
            },
            "1dde": function (o, u, e) {
                var t = e("d039"),
                    r = e("b622"),
                    n = e("2d00"),
                    i = r("species");
                o.exports = function (a) {
                    return (
                        n >= 51 ||
                        !t(function () {
                            var s = [],
                                c = (s.constructor = {});
                            return (
                                (c[i] = function () {
                                    return { foo: 1 };
                                }),
                                s[a](Boolean).foo !== 1
                            );
                        })
                    );
                };
            },
            "1e53": function (o, u, e) {
                var t = e("8bbf"),
                    r = Object(t.createVNode)(
                        "div",
                        { class: "vsm-mob__hamburger" },
                        [
                            Object(t.createVNode)("div", {
                                class: "vsm-mob-line",
                            }),
                            Object(t.createVNode)("div", {
                                class: "vsm-mob-line",
                            }),
                            Object(t.createVNode)("div", {
                                class: "vsm-mob-line",
                            }),
                        ],
                        -1
                    ),
                    n = { class: "vsm-mob-content" },
                    i = { class: "vsm-mob-content__wrap" };
                function a(c, l, d, f, v, h) {
                    return (
                        Object(t.openBlock)(),
                        Object(t.createBlock)(
                            "li",
                            {
                                class: [
                                    "vsm-mob-container",
                                    "vsm-mob-show",
                                    { "vsm-open": v.active },
                                ],
                            },
                            [
                                Object(t.createVNode)(
                                    "div",
                                    {
                                        class: "vsm-mob",
                                        onClick:
                                            l[1] ||
                                            (l[1] = function () {
                                                return (
                                                    h.onClickHamburger &&
                                                    h.onClickHamburger.apply(
                                                        h,
                                                        arguments
                                                    )
                                                );
                                            }),
                                    },
                                    [
                                        Object(t.renderSlot)(
                                            c.$slots,
                                            "hamburger",
                                            {},
                                            function () {
                                                return [r];
                                            }
                                        ),
                                    ]
                                ),
                                Object(t.createVNode)("div", n, [
                                    Object(t.createVNode)(
                                        t.Transition,
                                        { name: "vsm-mob-anim" },
                                        {
                                            default: Object(t.withCtx)(
                                                function () {
                                                    return [
                                                        Object(
                                                            t.withDirectives
                                                        )(
                                                            Object(
                                                                t.createVNode
                                                            )(
                                                                "div",
                                                                i,
                                                                [
                                                                    Object(
                                                                        t.renderSlot
                                                                    )(
                                                                        c.$slots,
                                                                        "close",
                                                                        {},
                                                                        function () {
                                                                            return [
                                                                                Object(
                                                                                    t.createVNode
                                                                                )(
                                                                                    "div",
                                                                                    {
                                                                                        class: "vsm-mob-close",
                                                                                        onClick:
                                                                                            l[2] ||
                                                                                            (l[2] =
                                                                                                function () {
                                                                                                    return (
                                                                                                        h.onClickHamburger &&
                                                                                                        h.onClickHamburger.apply(
                                                                                                            h,
                                                                                                            arguments
                                                                                                        )
                                                                                                    );
                                                                                                }),
                                                                                    }
                                                                                ),
                                                                            ];
                                                                        }
                                                                    ),
                                                                    Object(
                                                                        t.renderSlot
                                                                    )(
                                                                        c.$slots,
                                                                        "default"
                                                                    ),
                                                                ],
                                                                512
                                                            ),
                                                            [
                                                                [
                                                                    t.vShow,
                                                                    v.active,
                                                                ],
                                                            ]
                                                        ),
                                                    ];
                                                }
                                            ),
                                            _: 3,
                                        }
                                    ),
                                ]),
                            ],
                            2
                        )
                    );
                }
                var s = {
                    name: "VsmMob",
                    props: { value: { type: Boolean, default: !1 } },
                    emits: ["input", "update:modelValue"],
                    data: function () {
                        return { active: this.value };
                    },
                    watch: {
                        value: function (c) {
                            this.active !== c && (this.active = c);
                        },
                        active: function (c) {
                            c ? this.registerEvent() : this.unregisterEvent();
                        },
                    },
                    mounted: function () {
                        var c =
                            "ontouchstart" in window ||
                            navigator.maxTouchPoints;
                        this._touchEvent = c ? "touchend" : "click";
                    },
                    beforeUnmount: function () {
                        this.unregisterEvent();
                    },
                    methods: {
                        closeDropdown: function () {
                            this.emitValue(!1);
                        },
                        onClickHamburger: function () {
                            this.emitValue(!this.active);
                        },
                        registerEvent: function () {
                            document.body.addEventListener(
                                this._touchEvent,
                                this.eventEndHandler
                            );
                        },
                        unregisterEvent: function () {
                            document.body.removeEventListener(
                                this._touchEvent,
                                this.eventEndHandler
                            );
                        },
                        emitValue: function (c) {
                            (this.active = c),
                                this.$emit("input", c),
                                this.$emit("update:modelValue", c);
                        },
                        eventEndHandler: function (c) {
                            this.$el === c.target ||
                                this.$el.contains(c.target) ||
                                this.emitValue(!1);
                        },
                    },
                };
                (s.render = a), (u.a = s);
            },
            "23cb": function (o, u, e) {
                var t = e("a691"),
                    r = Math.max,
                    n = Math.min;
                o.exports = function (i, a) {
                    var s = t(i);
                    return s < 0 ? r(s + a, 0) : n(s, a);
                };
            },
            "23e7": function (o, u, e) {
                var t = e("da84"),
                    r = e("06cf").f,
                    n = e("9112"),
                    i = e("6eeb"),
                    a = e("ce4e"),
                    s = e("e893"),
                    c = e("94ca");
                o.exports = function (l, d) {
                    var f,
                        v,
                        h,
                        E,
                        D,
                        A,
                        _ = l.target,
                        P = l.global,
                        R = l.stat;
                    if (
                        ((v = P
                            ? t
                            : R
                            ? t[_] || a(_, {})
                            : (t[_] || {}).prototype),
                        v)
                    )
                        for (h in d) {
                            if (
                                ((D = d[h]),
                                l.noTargetGet
                                    ? ((A = r(v, h)), (E = A && A.value))
                                    : (E = v[h]),
                                (f = c(
                                    P ? h : _ + (R ? "." : "#") + h,
                                    l.forced
                                )),
                                !f && E !== void 0)
                            ) {
                                if (typeof D == typeof E) continue;
                                s(D, E);
                            }
                            (l.sham || (E && E.sham)) && n(D, "sham", !0),
                                i(v, h, D, l);
                        }
                };
            },
            "241c": function (o, u, e) {
                var t = e("ca84"),
                    r = e("7839"),
                    n = r.concat("length", "prototype");
                u.f =
                    Object.getOwnPropertyNames ||
                    function (i) {
                        return t(i, n);
                    };
            },
            "2a62": function (o, u, e) {
                var t = e("825a");
                o.exports = function (r) {
                    var n = r.return;
                    if (n !== void 0) return t(n.call(r)).value;
                };
            },
            "2d00": function (o, u, e) {
                var t,
                    r,
                    n = e("da84"),
                    i = e("342f"),
                    a = n.process,
                    s = n.Deno,
                    c = (a && a.versions) || (s && s.version),
                    l = c && c.v8;
                l
                    ? ((t = l.split(".")), (r = t[0] < 4 ? 1 : t[0] + t[1]))
                    : i &&
                      ((t = i.match(/Edge\/(\d+)/)),
                      (!t || t[1] >= 74) &&
                          ((t = i.match(/Chrome\/(\d+)/)), t && (r = t[1]))),
                    (o.exports = r && +r);
            },
            "342f": function (o, u, e) {
                var t = e("d066");
                o.exports = t("navigator", "userAgent") || "";
            },
            "35a1": function (o, u, e) {
                var t = e("f5df"),
                    r = e("3f8c"),
                    n = e("b622"),
                    i = n("iterator");
                o.exports = function (a) {
                    if (a != null) return a[i] || a["@@iterator"] || r[t(a)];
                };
            },
            "37e8": function (o, u, e) {
                var t = e("83ab"),
                    r = e("9bf2"),
                    n = e("825a"),
                    i = e("df75");
                o.exports = t
                    ? Object.defineProperties
                    : function (a, s) {
                          n(a);
                          for (var c, l = i(s), d = l.length, f = 0; d > f; )
                              r.f(a, (c = l[f++]), s[c]);
                          return a;
                      };
            },
            "3bbe": function (o, u, e) {
                var t = e("861d");
                o.exports = function (r) {
                    if (!t(r) && r !== null)
                        throw TypeError(
                            "Can't set " + String(r) + " as a prototype"
                        );
                    return r;
                };
            },
            "3ca3": function (o, u, e) {
                var t = e("6547").charAt,
                    r = e("577e"),
                    n = e("69f3"),
                    i = e("7dd0"),
                    a = "String Iterator",
                    s = n.set,
                    c = n.getterFor(a);
                i(
                    String,
                    "String",
                    function (l) {
                        s(this, { type: a, string: r(l), index: 0 });
                    },
                    function () {
                        var l,
                            d = c(this),
                            f = d.string,
                            v = d.index;
                        return v >= f.length
                            ? { value: void 0, done: !0 }
                            : ((l = t(f, v)),
                              (d.index += l.length),
                              { value: l, done: !1 });
                    }
                );
            },
            "3f8c": function (o, u) {
                o.exports = {};
            },
            "428f": function (o, u, e) {
                var t = e("da84");
                o.exports = t;
            },
            "44ad": function (o, u, e) {
                var t = e("d039"),
                    r = e("c6b6"),
                    n = "".split;
                o.exports = t(function () {
                    return !Object("z").propertyIsEnumerable(0);
                })
                    ? function (i) {
                          return r(i) == "String" ? n.call(i, "") : Object(i);
                      }
                    : Object;
            },
            "44d2": function (o, u, e) {
                var t = e("b622"),
                    r = e("7c73"),
                    n = e("9bf2"),
                    i = t("unscopables"),
                    a = Array.prototype;
                a[i] == null && n.f(a, i, { configurable: !0, value: r(null) }),
                    (o.exports = function (s) {
                        a[i][s] = !0;
                    });
            },
            "485a": function (o, u, e) {
                var t = e("861d");
                o.exports = function (r, n) {
                    var i, a;
                    if (
                        (n === "string" &&
                            typeof (i = r.toString) == "function" &&
                            !t((a = i.call(r)))) ||
                        (typeof (i = r.valueOf) == "function" &&
                            !t((a = i.call(r)))) ||
                        (n !== "string" &&
                            typeof (i = r.toString) == "function" &&
                            !t((a = i.call(r))))
                    )
                        return a;
                    throw TypeError("Can't convert object to primitive value");
                };
            },
            4930: function (o, u, e) {
                var t = e("2d00"),
                    r = e("d039");
                o.exports =
                    !!Object.getOwnPropertySymbols &&
                    !r(function () {
                        var n = Symbol();
                        return (
                            !String(n) ||
                            !(Object(n) instanceof Symbol) ||
                            (!Symbol.sham && t && t < 41)
                        );
                    });
            },
            "4d64": function (o, u, e) {
                var t = e("fc6a"),
                    r = e("50c4"),
                    n = e("23cb"),
                    i = function (a) {
                        return function (s, c, l) {
                            var d,
                                f = t(s),
                                v = r(f.length),
                                h = n(l, v);
                            if (a && c != c) {
                                for (; v > h; )
                                    if (((d = f[h++]), d != d)) return !0;
                            } else
                                for (; v > h; h++)
                                    if ((a || h in f) && f[h] === c)
                                        return a || h || 0;
                            return !a && -1;
                        };
                    };
                o.exports = { includes: i(!0), indexOf: i(!1) };
            },
            "4de4": function (o, u, e) {
                var t = e("23e7"),
                    r = e("b727").filter,
                    n = e("1dde"),
                    i = n("filter");
                t(
                    { target: "Array", proto: !0, forced: !i },
                    {
                        filter: function (a) {
                            return r(
                                this,
                                a,
                                arguments.length > 1 ? arguments[1] : void 0
                            );
                        },
                    }
                );
            },
            "4df4": function (o, u, e) {
                var t = e("0366"),
                    r = e("7b0b"),
                    n = e("9bdd"),
                    i = e("e95a"),
                    a = e("50c4"),
                    s = e("8418"),
                    c = e("35a1");
                o.exports = function (l) {
                    var d,
                        f,
                        v,
                        h,
                        E,
                        D,
                        A = r(l),
                        _ = typeof this == "function" ? this : Array,
                        P = arguments.length,
                        R = P > 1 ? arguments[1] : void 0,
                        $ = R !== void 0,
                        S = c(A),
                        w = 0;
                    if (
                        ($ && (R = t(R, P > 2 ? arguments[2] : void 0, 2)),
                        S == null || (_ == Array && i(S)))
                    )
                        for (d = a(A.length), f = new _(d); d > w; w++)
                            (D = $ ? R(A[w], w) : A[w]), s(f, w, D);
                    else
                        for (
                            h = S.call(A), E = h.next, f = new _();
                            !(v = E.call(h)).done;
                            w++
                        )
                            (D = $ ? n(h, R, [v.value, w], !0) : v.value),
                                s(f, w, D);
                    return (f.length = w), f;
                };
            },
            "4fad": function (o, u, e) {
                var t = e("23e7"),
                    r = e("6f53").entries;
                t(
                    { target: "Object", stat: !0 },
                    {
                        entries: function (n) {
                            return r(n);
                        },
                    }
                );
            },
            "50c4": function (o, u, e) {
                var t = e("a691"),
                    r = Math.min;
                o.exports = function (n) {
                    return n > 0 ? r(t(n), 9007199254740991) : 0;
                };
            },
            5135: function (o, u, e) {
                var t = e("7b0b"),
                    r = {}.hasOwnProperty;
                o.exports =
                    Object.hasOwn ||
                    function (n, i) {
                        return r.call(t(n), i);
                    };
            },
            5692: function (o, u, e) {
                var t = e("c430"),
                    r = e("c6cd");
                (o.exports = function (n, i) {
                    return r[n] || (r[n] = i !== void 0 ? i : {});
                })("versions", []).push({
                    version: "3.16.0",
                    mode: t ? "pure" : "global",
                    copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
                });
            },
            "56d7": function (o, u, e) {
                (function (t) {
                    var r = e("fb62");
                    e.d(u, "a", function () {
                        return r.a;
                    });
                    var n = e("1e53");
                    e.d(u, "b", function () {
                        return n.a;
                    }),
                        e("8594");
                    var i = {
                            install: function (s) {
                                i.installed ||
                                    ((i.installed = !0),
                                    s.component("VsmMenu", r.a),
                                    s.component("VsmMob", n.a));
                            },
                        },
                        a = null;
                    typeof window != "undefined"
                        ? (a = window.Vue)
                        : typeof t != "undefined" && (a = t.Vue),
                        a && a.use(i),
                        (u.c = i);
                }.call(this, e("c8ba")));
            },
            "56ef": function (o, u, e) {
                var t = e("d066"),
                    r = e("241c"),
                    n = e("7418"),
                    i = e("825a");
                o.exports =
                    t("Reflect", "ownKeys") ||
                    function (a) {
                        var s = r.f(i(a)),
                            c = n.f;
                        return c ? s.concat(c(a)) : s;
                    };
            },
            "577e": function (o, u, e) {
                var t = e("d9b5");
                o.exports = function (r) {
                    if (t(r))
                        throw TypeError(
                            "Cannot convert a Symbol value to a string"
                        );
                    return String(r);
                };
            },
            5899: function (o, u) {
                o.exports = `	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`;
            },
            "58a8": function (o, u, e) {
                var t = e("1d80"),
                    r = e("577e"),
                    n = e("5899"),
                    i = "[" + n + "]",
                    a = RegExp("^" + i + i + "*"),
                    s = RegExp(i + i + "*$"),
                    c = function (l) {
                        return function (d) {
                            var f = r(t(d));
                            return (
                                1 & l && (f = f.replace(a, "")),
                                2 & l && (f = f.replace(s, "")),
                                f
                            );
                        };
                    };
                o.exports = { start: c(1), end: c(2), trim: c(3) };
            },
            "5c6c": function (o, u) {
                o.exports = function (e, t) {
                    return {
                        enumerable: !(1 & e),
                        configurable: !(2 & e),
                        writable: !(4 & e),
                        value: t,
                    };
                };
            },
            6547: function (o, u, e) {
                var t = e("a691"),
                    r = e("577e"),
                    n = e("1d80"),
                    i = function (a) {
                        return function (s, c) {
                            var l,
                                d,
                                f = r(n(s)),
                                v = t(c),
                                h = f.length;
                            return v < 0 || v >= h
                                ? a
                                    ? ""
                                    : void 0
                                : ((l = f.charCodeAt(v)),
                                  l < 55296 ||
                                  l > 56319 ||
                                  v + 1 === h ||
                                  (d = f.charCodeAt(v + 1)) < 56320 ||
                                  d > 57343
                                      ? a
                                          ? f.charAt(v)
                                          : l
                                      : a
                                      ? f.slice(v, v + 2)
                                      : d -
                                        56320 +
                                        ((l - 55296) << 10) +
                                        65536);
                        };
                    };
                o.exports = { codeAt: i(!1), charAt: i(!0) };
            },
            "65f0": function (o, u, e) {
                var t = e("0b42");
                o.exports = function (r, n) {
                    return new (t(r))(n === 0 ? 0 : n);
                };
            },
            "69f3": function (o, u, e) {
                var t,
                    r,
                    n,
                    i = e("7f9a"),
                    a = e("da84"),
                    s = e("861d"),
                    c = e("9112"),
                    l = e("5135"),
                    d = e("c6cd"),
                    f = e("f772"),
                    v = e("d012"),
                    h = "Object already initialized",
                    E = a.WeakMap,
                    D = function (w) {
                        return n(w) ? r(w) : t(w, {});
                    },
                    A = function (w) {
                        return function (W) {
                            var q;
                            if (!s(W) || (q = r(W)).type !== w)
                                throw TypeError(
                                    "Incompatible receiver, " + w + " required"
                                );
                            return q;
                        };
                    };
                if (i || d.state) {
                    var _ = d.state || (d.state = new E()),
                        P = _.get,
                        R = _.has,
                        $ = _.set;
                    (t = function (w, W) {
                        if (R.call(_, w)) throw new TypeError(h);
                        return (W.facade = w), $.call(_, w, W), W;
                    }),
                        (r = function (w) {
                            return P.call(_, w) || {};
                        }),
                        (n = function (w) {
                            return R.call(_, w);
                        });
                } else {
                    var S = f("state");
                    (v[S] = !0),
                        (t = function (w, W) {
                            if (l(w, S)) throw new TypeError(h);
                            return (W.facade = w), c(w, S, W), W;
                        }),
                        (r = function (w) {
                            return l(w, S) ? w[S] : {};
                        }),
                        (n = function (w) {
                            return l(w, S);
                        });
                }
                o.exports = {
                    set: t,
                    get: r,
                    has: n,
                    enforce: D,
                    getterFor: A,
                };
            },
            "6eeb": function (o, u, e) {
                var t = e("da84"),
                    r = e("9112"),
                    n = e("5135"),
                    i = e("ce4e"),
                    a = e("8925"),
                    s = e("69f3"),
                    c = s.get,
                    l = s.enforce,
                    d = String(String).split("String");
                (o.exports = function (f, v, h, E) {
                    var D,
                        A = !!E && !!E.unsafe,
                        _ = !!E && !!E.enumerable,
                        P = !!E && !!E.noTargetGet;
                    typeof h == "function" &&
                        (typeof v != "string" ||
                            n(h, "name") ||
                            r(h, "name", v),
                        (D = l(h)),
                        D.source ||
                            (D.source = d.join(typeof v == "string" ? v : ""))),
                        f !== t
                            ? (A ? !P && f[v] && (_ = !0) : delete f[v],
                              _ ? (f[v] = h) : r(f, v, h))
                            : _
                            ? (f[v] = h)
                            : i(v, h);
                })(Function.prototype, "toString", function () {
                    return (
                        (typeof this == "function" && c(this).source) || a(this)
                    );
                });
            },
            "6f53": function (o, u, e) {
                var t = e("83ab"),
                    r = e("df75"),
                    n = e("fc6a"),
                    i = e("d1e7").f,
                    a = function (s) {
                        return function (c) {
                            for (
                                var l,
                                    d = n(c),
                                    f = r(d),
                                    v = f.length,
                                    h = 0,
                                    E = [];
                                v > h;

                            )
                                (l = f[h++]),
                                    (t && !i.call(d, l)) ||
                                        E.push(s ? [l, d[l]] : d[l]);
                            return E;
                        };
                    };
                o.exports = { entries: a(!0), values: a(!1) };
            },
            7156: function (o, u, e) {
                var t = e("861d"),
                    r = e("d2bb");
                o.exports = function (n, i, a) {
                    var s, c;
                    return (
                        r &&
                            typeof (s = i.constructor) == "function" &&
                            s !== a &&
                            t((c = s.prototype)) &&
                            c !== a.prototype &&
                            r(n, c),
                        n
                    );
                };
            },
            7418: function (o, u) {
                u.f = Object.getOwnPropertySymbols;
            },
            "746f": function (o, u, e) {
                var t = e("428f"),
                    r = e("5135"),
                    n = e("e538"),
                    i = e("9bf2").f;
                o.exports = function (a) {
                    var s = t.Symbol || (t.Symbol = {});
                    r(s, a) || i(s, a, { value: n.f(a) });
                };
            },
            7839: function (o, u) {
                o.exports = [
                    "constructor",
                    "hasOwnProperty",
                    "isPrototypeOf",
                    "propertyIsEnumerable",
                    "toLocaleString",
                    "toString",
                    "valueOf",
                ];
            },
            "7b0b": function (o, u, e) {
                var t = e("1d80");
                o.exports = function (r) {
                    return Object(t(r));
                };
            },
            "7c73": function (o, u, e) {
                var t,
                    r = e("825a"),
                    n = e("37e8"),
                    i = e("7839"),
                    a = e("d012"),
                    s = e("1be4"),
                    c = e("cc12"),
                    l = e("f772"),
                    d = ">",
                    f = "<",
                    v = "prototype",
                    h = "script",
                    E = l("IE_PROTO"),
                    D = function () {},
                    A = function ($) {
                        return f + h + d + $ + f + "/" + h + d;
                    },
                    _ = function ($) {
                        $.write(A("")), $.close();
                        var S = $.parentWindow.Object;
                        return ($ = null), S;
                    },
                    P = function () {
                        var $,
                            S = c("iframe"),
                            w = "java" + h + ":";
                        if (S.style)
                            return (
                                (S.style.display = "none"),
                                s.appendChild(S),
                                (S.src = String(w)),
                                ($ = S.contentWindow.document),
                                $.open(),
                                $.write(A("document.F=Object")),
                                $.close(),
                                $.F
                            );
                    },
                    R = function () {
                        try {
                            t = new ActiveXObject("htmlfile");
                        } catch {}
                        R = document.domain && t ? _(t) : P() || _(t);
                        for (var $ = i.length; $--; ) delete R[v][i[$]];
                        return R();
                    };
                (a[E] = !0),
                    (o.exports =
                        Object.create ||
                        function ($, S) {
                            var w;
                            return (
                                $ !== null
                                    ? ((D[v] = r($)),
                                      (w = new D()),
                                      (D[v] = null),
                                      (w[E] = $))
                                    : (w = R()),
                                S === void 0 ? w : n(w, S)
                            );
                        });
            },
            "7dd0": function (o, u, e) {
                var t = e("23e7"),
                    r = e("9ed3"),
                    n = e("e163"),
                    i = e("d2bb"),
                    a = e("d44e"),
                    s = e("9112"),
                    c = e("6eeb"),
                    l = e("b622"),
                    d = e("c430"),
                    f = e("3f8c"),
                    v = e("ae93"),
                    h = v.IteratorPrototype,
                    E = v.BUGGY_SAFARI_ITERATORS,
                    D = l("iterator"),
                    A = "keys",
                    _ = "values",
                    P = "entries",
                    R = function () {
                        return this;
                    };
                o.exports = function ($, S, w, W, q, p, C) {
                    r(w, S, W);
                    var m,
                        M,
                        T,
                        z = function (L) {
                            if (L === q && b) return b;
                            if (!E && L in K) return K[L];
                            switch (L) {
                                case A:
                                    return function () {
                                        return new w(this, L);
                                    };
                                case _:
                                    return function () {
                                        return new w(this, L);
                                    };
                                case P:
                                    return function () {
                                        return new w(this, L);
                                    };
                            }
                            return function () {
                                return new w(this);
                            };
                        },
                        H = S + " Iterator",
                        B = !1,
                        K = $.prototype,
                        te = K[D] || K["@@iterator"] || (q && K[q]),
                        b = (!E && te) || z(q),
                        g = (S == "Array" && K.entries) || te;
                    if (
                        (g &&
                            ((m = n(g.call(new $()))),
                            h !== Object.prototype &&
                                m.next &&
                                (d ||
                                    n(m) === h ||
                                    (i
                                        ? i(m, h)
                                        : typeof m[D] != "function" &&
                                          s(m, D, R)),
                                a(m, H, !0, !0),
                                d && (f[H] = R))),
                        q == _ &&
                            te &&
                            te.name !== _ &&
                            ((B = !0),
                            (b = function () {
                                return te.call(this);
                            })),
                        (d && !C) || K[D] === b || s(K, D, b),
                        (f[S] = b),
                        q)
                    )
                        if (
                            ((M = {
                                values: z(_),
                                keys: p ? b : z(A),
                                entries: z(P),
                            }),
                            C)
                        )
                            for (T in M) (E || B || !(T in K)) && c(K, T, M[T]);
                        else t({ target: S, proto: !0, forced: E || B }, M);
                    return M;
                };
            },
            "7f9a": function (o, u, e) {
                var t = e("da84"),
                    r = e("8925"),
                    n = t.WeakMap;
                o.exports = typeof n == "function" && /native code/.test(r(n));
            },
            "825a": function (o, u, e) {
                var t = e("861d");
                o.exports = function (r) {
                    if (!t(r)) throw TypeError(String(r) + " is not an object");
                    return r;
                };
            },
            "83ab": function (o, u, e) {
                var t = e("d039");
                o.exports = !t(function () {
                    return (
                        Object.defineProperty({}, 1, {
                            get: function () {
                                return 7;
                            },
                        })[1] != 7
                    );
                });
            },
            8418: function (o, u, e) {
                var t = e("a04b"),
                    r = e("9bf2"),
                    n = e("5c6c");
                o.exports = function (i, a, s) {
                    var c = t(a);
                    c in i ? r.f(i, c, n(0, s)) : (i[c] = s);
                };
            },
            8594: function (o, u, e) {},
            "861d": function (o, u) {
                o.exports = function (e) {
                    return typeof e == "object"
                        ? e !== null
                        : typeof e == "function";
                };
            },
            8875: function (o, u, e) {
                var t, r, n;
                (function (i, a) {
                    (r = []),
                        (t = a),
                        (n = typeof t == "function" ? t.apply(u, r) : t),
                        n === void 0 || (o.exports = n);
                })(typeof self != "undefined" && self, function () {
                    function i() {
                        var a = Object.getOwnPropertyDescriptor(
                            document,
                            "currentScript"
                        );
                        if (
                            (!a &&
                                "currentScript" in document &&
                                document.currentScript) ||
                            (a && a.get !== i && document.currentScript)
                        )
                            return document.currentScript;
                        try {
                            throw new Error();
                        } catch (P) {
                            var s,
                                c,
                                l,
                                d = /.*at [^(]*\((.*):(.+):(.+)\)$/gi,
                                f = /@([^@]*):(\d+):(\d+)\s*$/gi,
                                v = d.exec(P.stack) || f.exec(P.stack),
                                h = (v && v[1]) || !1,
                                E = (v && v[2]) || !1,
                                D = document.location.href.replace(
                                    document.location.hash,
                                    ""
                                ),
                                A = document.getElementsByTagName("script");
                            h === D &&
                                ((s = document.documentElement.outerHTML),
                                (c = new RegExp(
                                    "(?:[^\\n]+?\\n){0," +
                                        (E - 2) +
                                        "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*",
                                    "i"
                                )),
                                (l = s.replace(c, "$1").trim()));
                            for (var _ = 0; _ < A.length; _++)
                                if (
                                    A[_].readyState === "interactive" ||
                                    A[_].src === h ||
                                    (h === D &&
                                        A[_].innerHTML &&
                                        A[_].innerHTML.trim() === l)
                                )
                                    return A[_];
                            return null;
                        }
                    }
                    return i;
                });
            },
            8925: function (o, u, e) {
                var t = e("c6cd"),
                    r = Function.toString;
                typeof t.inspectSource != "function" &&
                    (t.inspectSource = function (n) {
                        return r.call(n);
                    }),
                    (o.exports = t.inspectSource);
            },
            "8bbf": function (o, u) {
                o.exports = y;
            },
            "90e3": function (o, u) {
                var e = 0,
                    t = Math.random();
                o.exports = function (r) {
                    return (
                        "Symbol(" +
                        String(r === void 0 ? "" : r) +
                        ")_" +
                        (++e + t).toString(36)
                    );
                };
            },
            9112: function (o, u, e) {
                var t = e("83ab"),
                    r = e("9bf2"),
                    n = e("5c6c");
                o.exports = t
                    ? function (i, a, s) {
                          return r.f(i, a, n(1, s));
                      }
                    : function (i, a, s) {
                          return (i[a] = s), i;
                      };
            },
            "94ca": function (o, u, e) {
                var t = e("d039"),
                    r = /#|\.prototype\./,
                    n = function (l, d) {
                        var f = a[i(l)];
                        return (
                            f == c ||
                            (f != s && (typeof d == "function" ? t(d) : !!d))
                        );
                    },
                    i = (n.normalize = function (l) {
                        return String(l).replace(r, ".").toLowerCase();
                    }),
                    a = (n.data = {}),
                    s = (n.NATIVE = "N"),
                    c = (n.POLYFILL = "P");
                o.exports = n;
            },
            "96cf": function (o, u, e) {
                var t = (function (r) {
                    var n,
                        i = Object.prototype,
                        a = i.hasOwnProperty,
                        s = typeof Symbol == "function" ? Symbol : {},
                        c = s.iterator || "@@iterator",
                        l = s.asyncIterator || "@@asyncIterator",
                        d = s.toStringTag || "@@toStringTag";
                    function f(b, g, L) {
                        return (
                            Object.defineProperty(b, g, {
                                value: L,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                            }),
                            b[g]
                        );
                    }
                    try {
                        f({}, "");
                    } catch {
                        f = function (g, L, F) {
                            return (g[L] = F);
                        };
                    }
                    function v(b, g, L, F) {
                        var j = g && g.prototype instanceof R ? g : R,
                            Q = Object.create(j.prototype),
                            ee = new B(F || []);
                        return (Q._invoke = M(b, L, ee)), Q;
                    }
                    function h(b, g, L) {
                        try {
                            return { type: "normal", arg: b.call(g, L) };
                        } catch (F) {
                            return { type: "throw", arg: F };
                        }
                    }
                    r.wrap = v;
                    var E = "suspendedStart",
                        D = "suspendedYield",
                        A = "executing",
                        _ = "completed",
                        P = {};
                    function R() {}
                    function $() {}
                    function S() {}
                    var w = {};
                    f(w, c, function () {
                        return this;
                    });
                    var W = Object.getPrototypeOf,
                        q = W && W(W(K([])));
                    q && q !== i && a.call(q, c) && (w = q);
                    var p = (S.prototype = R.prototype = Object.create(w));
                    function C(b) {
                        ["next", "throw", "return"].forEach(function (g) {
                            f(b, g, function (L) {
                                return this._invoke(g, L);
                            });
                        });
                    }
                    function m(b, g) {
                        function L(Q, ee, ae, ue) {
                            var me = h(b[Q], b, ee);
                            if (me.type !== "throw") {
                                var le = me.arg,
                                    ie = le.value;
                                return ie &&
                                    typeof ie == "object" &&
                                    a.call(ie, "__await")
                                    ? g.resolve(ie.__await).then(
                                          function (pe) {
                                              L("next", pe, ae, ue);
                                          },
                                          function (pe) {
                                              L("throw", pe, ae, ue);
                                          }
                                      )
                                    : g.resolve(ie).then(
                                          function (pe) {
                                              (le.value = pe), ae(le);
                                          },
                                          function (pe) {
                                              return L("throw", pe, ae, ue);
                                          }
                                      );
                            }
                            ue(me.arg);
                        }
                        var F;
                        function j(Q, ee) {
                            function ae() {
                                return new g(function (ue, me) {
                                    L(Q, ee, ue, me);
                                });
                            }
                            return (F = F ? F.then(ae, ae) : ae());
                        }
                        this._invoke = j;
                    }
                    function M(b, g, L) {
                        var F = E;
                        return function (j, Q) {
                            if (F === A)
                                throw new Error("Generator is already running");
                            if (F === _) {
                                if (j === "throw") throw Q;
                                return te();
                            }
                            for (L.method = j, L.arg = Q; ; ) {
                                var ee = L.delegate;
                                if (ee) {
                                    var ae = T(ee, L);
                                    if (ae) {
                                        if (ae === P) continue;
                                        return ae;
                                    }
                                }
                                if (L.method === "next")
                                    L.sent = L._sent = L.arg;
                                else if (L.method === "throw") {
                                    if (F === E) throw ((F = _), L.arg);
                                    L.dispatchException(L.arg);
                                } else
                                    L.method === "return" &&
                                        L.abrupt("return", L.arg);
                                F = A;
                                var ue = h(b, g, L);
                                if (ue.type === "normal") {
                                    if (((F = L.done ? _ : D), ue.arg === P))
                                        continue;
                                    return { value: ue.arg, done: L.done };
                                }
                                ue.type === "throw" &&
                                    ((F = _),
                                    (L.method = "throw"),
                                    (L.arg = ue.arg));
                            }
                        };
                    }
                    function T(b, g) {
                        var L = b.iterator[g.method];
                        if (L === n) {
                            if (((g.delegate = null), g.method === "throw")) {
                                if (
                                    b.iterator.return &&
                                    ((g.method = "return"),
                                    (g.arg = n),
                                    T(b, g),
                                    g.method === "throw")
                                )
                                    return P;
                                (g.method = "throw"),
                                    (g.arg = new TypeError(
                                        "The iterator does not provide a 'throw' method"
                                    ));
                            }
                            return P;
                        }
                        var F = h(L, b.iterator, g.arg);
                        if (F.type === "throw")
                            return (
                                (g.method = "throw"),
                                (g.arg = F.arg),
                                (g.delegate = null),
                                P
                            );
                        var j = F.arg;
                        return j
                            ? j.done
                                ? ((g[b.resultName] = j.value),
                                  (g.next = b.nextLoc),
                                  g.method !== "return" &&
                                      ((g.method = "next"), (g.arg = n)),
                                  (g.delegate = null),
                                  P)
                                : j
                            : ((g.method = "throw"),
                              (g.arg = new TypeError(
                                  "iterator result is not an object"
                              )),
                              (g.delegate = null),
                              P);
                    }
                    function z(b) {
                        var g = { tryLoc: b[0] };
                        1 in b && (g.catchLoc = b[1]),
                            2 in b &&
                                ((g.finallyLoc = b[2]), (g.afterLoc = b[3])),
                            this.tryEntries.push(g);
                    }
                    function H(b) {
                        var g = b.completion || {};
                        (g.type = "normal"), delete g.arg, (b.completion = g);
                    }
                    function B(b) {
                        (this.tryEntries = [{ tryLoc: "root" }]),
                            b.forEach(z, this),
                            this.reset(!0);
                    }
                    function K(b) {
                        if (b) {
                            var g = b[c];
                            if (g) return g.call(b);
                            if (typeof b.next == "function") return b;
                            if (!isNaN(b.length)) {
                                var L = -1,
                                    F = function j() {
                                        for (; ++L < b.length; )
                                            if (a.call(b, L))
                                                return (
                                                    (j.value = b[L]),
                                                    (j.done = !1),
                                                    j
                                                );
                                        return (j.value = n), (j.done = !0), j;
                                    };
                                return (F.next = F);
                            }
                        }
                        return { next: te };
                    }
                    function te() {
                        return { value: n, done: !0 };
                    }
                    return (
                        ($.prototype = S),
                        f(p, "constructor", S),
                        f(S, "constructor", $),
                        ($.displayName = f(S, d, "GeneratorFunction")),
                        (r.isGeneratorFunction = function (b) {
                            var g = typeof b == "function" && b.constructor;
                            return (
                                !!g &&
                                (g === $ ||
                                    (g.displayName || g.name) ===
                                        "GeneratorFunction")
                            );
                        }),
                        (r.mark = function (b) {
                            return (
                                Object.setPrototypeOf
                                    ? Object.setPrototypeOf(b, S)
                                    : ((b.__proto__ = S),
                                      f(b, d, "GeneratorFunction")),
                                (b.prototype = Object.create(p)),
                                b
                            );
                        }),
                        (r.awrap = function (b) {
                            return { __await: b };
                        }),
                        C(m.prototype),
                        f(m.prototype, l, function () {
                            return this;
                        }),
                        (r.AsyncIterator = m),
                        (r.async = function (b, g, L, F, j) {
                            j === void 0 && (j = Promise);
                            var Q = new m(v(b, g, L, F), j);
                            return r.isGeneratorFunction(g)
                                ? Q
                                : Q.next().then(function (ee) {
                                      return ee.done ? ee.value : Q.next();
                                  });
                        }),
                        C(p),
                        f(p, d, "Generator"),
                        f(p, c, function () {
                            return this;
                        }),
                        f(p, "toString", function () {
                            return "[object Generator]";
                        }),
                        (r.keys = function (b) {
                            var g = [];
                            for (var L in b) g.push(L);
                            return (
                                g.reverse(),
                                function F() {
                                    for (; g.length; ) {
                                        var j = g.pop();
                                        if (j in b)
                                            return (
                                                (F.value = j), (F.done = !1), F
                                            );
                                    }
                                    return (F.done = !0), F;
                                }
                            );
                        }),
                        (r.values = K),
                        (B.prototype = {
                            constructor: B,
                            reset: function (b) {
                                if (
                                    ((this.prev = 0),
                                    (this.next = 0),
                                    (this.sent = this._sent = n),
                                    (this.done = !1),
                                    (this.delegate = null),
                                    (this.method = "next"),
                                    (this.arg = n),
                                    this.tryEntries.forEach(H),
                                    !b)
                                )
                                    for (var g in this)
                                        g.charAt(0) === "t" &&
                                            a.call(this, g) &&
                                            !isNaN(+g.slice(1)) &&
                                            (this[g] = n);
                            },
                            stop: function () {
                                this.done = !0;
                                var b = this.tryEntries[0],
                                    g = b.completion;
                                if (g.type === "throw") throw g.arg;
                                return this.rval;
                            },
                            dispatchException: function (b) {
                                if (this.done) throw b;
                                var g = this;
                                function L(ue, me) {
                                    return (
                                        (Q.type = "throw"),
                                        (Q.arg = b),
                                        (g.next = ue),
                                        me &&
                                            ((g.method = "next"), (g.arg = n)),
                                        !!me
                                    );
                                }
                                for (
                                    var F = this.tryEntries.length - 1;
                                    F >= 0;
                                    --F
                                ) {
                                    var j = this.tryEntries[F],
                                        Q = j.completion;
                                    if (j.tryLoc === "root") return L("end");
                                    if (j.tryLoc <= this.prev) {
                                        var ee = a.call(j, "catchLoc"),
                                            ae = a.call(j, "finallyLoc");
                                        if (ee && ae) {
                                            if (this.prev < j.catchLoc)
                                                return L(j.catchLoc, !0);
                                            if (this.prev < j.finallyLoc)
                                                return L(j.finallyLoc);
                                        } else if (ee) {
                                            if (this.prev < j.catchLoc)
                                                return L(j.catchLoc, !0);
                                        } else {
                                            if (!ae)
                                                throw new Error(
                                                    "try statement without catch or finally"
                                                );
                                            if (this.prev < j.finallyLoc)
                                                return L(j.finallyLoc);
                                        }
                                    }
                                }
                            },
                            abrupt: function (b, g) {
                                for (
                                    var L = this.tryEntries.length - 1;
                                    L >= 0;
                                    --L
                                ) {
                                    var F = this.tryEntries[L];
                                    if (
                                        F.tryLoc <= this.prev &&
                                        a.call(F, "finallyLoc") &&
                                        this.prev < F.finallyLoc
                                    ) {
                                        var j = F;
                                        break;
                                    }
                                }
                                j &&
                                    (b === "break" || b === "continue") &&
                                    j.tryLoc <= g &&
                                    g <= j.finallyLoc &&
                                    (j = null);
                                var Q = j ? j.completion : {};
                                return (
                                    (Q.type = b),
                                    (Q.arg = g),
                                    j
                                        ? ((this.method = "next"),
                                          (this.next = j.finallyLoc),
                                          P)
                                        : this.complete(Q)
                                );
                            },
                            complete: function (b, g) {
                                if (b.type === "throw") throw b.arg;
                                return (
                                    b.type === "break" || b.type === "continue"
                                        ? (this.next = b.arg)
                                        : b.type === "return"
                                        ? ((this.rval = this.arg = b.arg),
                                          (this.method = "return"),
                                          (this.next = "end"))
                                        : b.type === "normal" &&
                                          g &&
                                          (this.next = g),
                                    P
                                );
                            },
                            finish: function (b) {
                                for (
                                    var g = this.tryEntries.length - 1;
                                    g >= 0;
                                    --g
                                ) {
                                    var L = this.tryEntries[g];
                                    if (L.finallyLoc === b)
                                        return (
                                            this.complete(
                                                L.completion,
                                                L.afterLoc
                                            ),
                                            H(L),
                                            P
                                        );
                                }
                            },
                            catch: function (b) {
                                for (
                                    var g = this.tryEntries.length - 1;
                                    g >= 0;
                                    --g
                                ) {
                                    var L = this.tryEntries[g];
                                    if (L.tryLoc === b) {
                                        var F = L.completion;
                                        if (F.type === "throw") {
                                            var j = F.arg;
                                            H(L);
                                        }
                                        return j;
                                    }
                                }
                                throw new Error("illegal catch attempt");
                            },
                            delegateYield: function (b, g, L) {
                                return (
                                    (this.delegate = {
                                        iterator: K(b),
                                        resultName: g,
                                        nextLoc: L,
                                    }),
                                    this.method === "next" && (this.arg = n),
                                    P
                                );
                            },
                        }),
                        r
                    );
                })(o.exports);
                try {
                    regeneratorRuntime = t;
                } catch {
                    typeof globalThis == "object"
                        ? (globalThis.regeneratorRuntime = t)
                        : Function("r", "regeneratorRuntime = r")(t);
                }
            },
            "99af": function (o, u, e) {
                var t = e("23e7"),
                    r = e("d039"),
                    n = e("e8b5"),
                    i = e("861d"),
                    a = e("7b0b"),
                    s = e("50c4"),
                    c = e("8418"),
                    l = e("65f0"),
                    d = e("1dde"),
                    f = e("b622"),
                    v = e("2d00"),
                    h = f("isConcatSpreadable"),
                    E = 9007199254740991,
                    D = "Maximum allowed index exceeded",
                    A =
                        v >= 51 ||
                        !r(function () {
                            var $ = [];
                            return ($[h] = !1), $.concat()[0] !== $;
                        }),
                    _ = d("concat"),
                    P = function ($) {
                        if (!i($)) return !1;
                        var S = $[h];
                        return S !== void 0 ? !!S : n($);
                    },
                    R = !A || !_;
                t(
                    { target: "Array", proto: !0, forced: R },
                    {
                        concat: function ($) {
                            var S,
                                w,
                                W,
                                q,
                                p,
                                C = a(this),
                                m = l(C, 0),
                                M = 0;
                            for (S = -1, W = arguments.length; S < W; S++)
                                if (((p = S === -1 ? C : arguments[S]), P(p))) {
                                    if (((q = s(p.length)), M + q > E))
                                        throw TypeError(D);
                                    for (w = 0; w < q; w++, M++)
                                        w in p && c(m, M, p[w]);
                                } else {
                                    if (M >= E) throw TypeError(D);
                                    c(m, M++, p);
                                }
                            return (m.length = M), m;
                        },
                    }
                );
            },
            "9bdd": function (o, u, e) {
                var t = e("825a"),
                    r = e("2a62");
                o.exports = function (n, i, a, s) {
                    try {
                        return s ? i(t(a)[0], a[1]) : i(a);
                    } catch (c) {
                        throw (r(n), c);
                    }
                };
            },
            "9bf2": function (o, u, e) {
                var t = e("83ab"),
                    r = e("0cfb"),
                    n = e("825a"),
                    i = e("a04b"),
                    a = Object.defineProperty;
                u.f = t
                    ? a
                    : function (s, c, l) {
                          if ((n(s), (c = i(c)), n(l), r))
                              try {
                                  return a(s, c, l);
                              } catch {}
                          if ("get" in l || "set" in l)
                              throw TypeError("Accessors not supported");
                          return "value" in l && (s[c] = l.value), s;
                      };
            },
            "9ed3": function (o, u, e) {
                var t = e("ae93").IteratorPrototype,
                    r = e("7c73"),
                    n = e("5c6c"),
                    i = e("d44e"),
                    a = e("3f8c"),
                    s = function () {
                        return this;
                    };
                o.exports = function (c, l, d) {
                    var f = l + " Iterator";
                    return (
                        (c.prototype = r(t, { next: n(1, d) })),
                        i(c, f, !1, !0),
                        (a[f] = s),
                        c
                    );
                };
            },
            a04b: function (o, u, e) {
                var t = e("c04e"),
                    r = e("d9b5");
                o.exports = function (n) {
                    var i = t(n, "string");
                    return r(i) ? i : String(i);
                };
            },
            a4d3: function (o, u, e) {
                var t = e("23e7"),
                    r = e("da84"),
                    n = e("d066"),
                    i = e("c430"),
                    a = e("83ab"),
                    s = e("4930"),
                    c = e("d039"),
                    l = e("5135"),
                    d = e("e8b5"),
                    f = e("861d"),
                    v = e("d9b5"),
                    h = e("825a"),
                    E = e("7b0b"),
                    D = e("fc6a"),
                    A = e("a04b"),
                    _ = e("577e"),
                    P = e("5c6c"),
                    R = e("7c73"),
                    $ = e("df75"),
                    S = e("241c"),
                    w = e("057f"),
                    W = e("7418"),
                    q = e("06cf"),
                    p = e("9bf2"),
                    C = e("d1e7"),
                    m = e("9112"),
                    M = e("6eeb"),
                    T = e("5692"),
                    z = e("f772"),
                    H = e("d012"),
                    B = e("90e3"),
                    K = e("b622"),
                    te = e("e538"),
                    b = e("746f"),
                    g = e("d44e"),
                    L = e("69f3"),
                    F = e("b727").forEach,
                    j = z("hidden"),
                    Q = "Symbol",
                    ee = "prototype",
                    ae = K("toPrimitive"),
                    ue = L.set,
                    me = L.getterFor(Q),
                    le = Object[ee],
                    ie = r.Symbol,
                    pe = n("JSON", "stringify"),
                    Xe = q.f,
                    xe = p.f,
                    Je = w.f,
                    yt = C.f,
                    be = T("symbols"),
                    Oe = T("op-symbols"),
                    Ne = T("string-to-symbol-registry"),
                    Pe = T("symbol-to-string-registry"),
                    _t = T("wks"),
                    Ie = r.QObject,
                    He = !Ie || !Ie[ee] || !Ie[ee].findChild,
                    Ve =
                        a &&
                        c(function () {
                            return (
                                R(
                                    xe({}, "a", {
                                        get: function () {
                                            return xe(this, "a", { value: 7 })
                                                .a;
                                        },
                                    })
                                ).a != 7
                            );
                        })
                            ? function (N, G, Y) {
                                  var J = Xe(le, G);
                                  J && delete le[G],
                                      xe(N, G, Y),
                                      J && N !== le && xe(le, G, J);
                              }
                            : xe,
                    Re = function (N, G) {
                        var Y = (be[N] = R(ie[ee]));
                        return (
                            ue(Y, { type: Q, tag: N, description: G }),
                            a || (Y.description = G),
                            Y
                        );
                    },
                    Ee = function (N, G, Y) {
                        N === le && Ee(Oe, G, Y), h(N);
                        var J = A(G);
                        return (
                            h(Y),
                            l(be, J)
                                ? (Y.enumerable
                                      ? (l(N, j) && N[j][J] && (N[j][J] = !1),
                                        (Y = R(Y, { enumerable: P(0, !1) })))
                                      : (l(N, j) || xe(N, j, P(1, {})),
                                        (N[j][J] = !0)),
                                  Ve(N, J, Y))
                                : xe(N, J, Y)
                        );
                    },
                    Qe = function (N, G) {
                        h(N);
                        var Y = D(G),
                            J = $(Y).concat(Fe(Y));
                        return (
                            F(J, function (de) {
                                (a && !Be.call(Y, de)) || Ee(N, de, Y[de]);
                            }),
                            N
                        );
                    },
                    wt = function (N, G) {
                        return G === void 0 ? R(N) : Qe(R(N), G);
                    },
                    Be = function (N) {
                        var G = A(N),
                            Y = yt.call(this, G);
                        return (
                            !(this === le && l(be, G) && !l(Oe, G)) &&
                            (!(
                                Y ||
                                !l(this, G) ||
                                !l(be, G) ||
                                (l(this, j) && this[j][G])
                            ) ||
                                Y)
                        );
                    },
                    Ze = function (N, G) {
                        var Y = D(N),
                            J = A(G);
                        if (Y !== le || !l(be, J) || l(Oe, J)) {
                            var de = Xe(Y, J);
                            return (
                                !de ||
                                    !l(be, J) ||
                                    (l(Y, j) && Y[j][J]) ||
                                    (de.enumerable = !0),
                                de
                            );
                        }
                    },
                    et = function (N) {
                        var G = Je(D(N)),
                            Y = [];
                        return (
                            F(G, function (J) {
                                l(be, J) || l(H, J) || Y.push(J);
                            }),
                            Y
                        );
                    },
                    Fe = function (N) {
                        var G = N === le,
                            Y = Je(G ? Oe : D(N)),
                            J = [];
                        return (
                            F(Y, function (de) {
                                !l(be, de) ||
                                    (G && !l(le, de)) ||
                                    J.push(be[de]);
                            }),
                            J
                        );
                    };
                if (
                    (s ||
                        ((ie = function () {
                            if (this instanceof ie)
                                throw TypeError("Symbol is not a constructor");
                            var N =
                                    arguments.length && arguments[0] !== void 0
                                        ? _(arguments[0])
                                        : void 0,
                                G = B(N),
                                Y = function (J) {
                                    this === le && Y.call(Oe, J),
                                        l(this, j) &&
                                            l(this[j], G) &&
                                            (this[j][G] = !1),
                                        Ve(this, G, P(1, J));
                                };
                            return (
                                a &&
                                    He &&
                                    Ve(le, G, { configurable: !0, set: Y }),
                                Re(G, N)
                            );
                        }),
                        M(ie[ee], "toString", function () {
                            return me(this).tag;
                        }),
                        M(ie, "withoutSetter", function (N) {
                            return Re(B(N), N);
                        }),
                        (C.f = Be),
                        (p.f = Ee),
                        (q.f = Ze),
                        (S.f = w.f = et),
                        (W.f = Fe),
                        (te.f = function (N) {
                            return Re(K(N), N);
                        }),
                        a &&
                            (xe(ie[ee], "description", {
                                configurable: !0,
                                get: function () {
                                    return me(this).description;
                                },
                            }),
                            i ||
                                M(le, "propertyIsEnumerable", Be, {
                                    unsafe: !0,
                                }))),
                    t(
                        { global: !0, wrap: !0, forced: !s, sham: !s },
                        { Symbol: ie }
                    ),
                    F($(_t), function (N) {
                        b(N);
                    }),
                    t(
                        { target: Q, stat: !0, forced: !s },
                        {
                            for: function (N) {
                                var G = _(N);
                                if (l(Ne, G)) return Ne[G];
                                var Y = ie(G);
                                return (Ne[G] = Y), (Pe[Y] = G), Y;
                            },
                            keyFor: function (N) {
                                if (!v(N))
                                    throw TypeError(N + " is not a symbol");
                                if (l(Pe, N)) return Pe[N];
                            },
                            useSetter: function () {
                                He = !0;
                            },
                            useSimple: function () {
                                He = !1;
                            },
                        }
                    ),
                    t(
                        { target: "Object", stat: !0, forced: !s, sham: !a },
                        {
                            create: wt,
                            defineProperty: Ee,
                            defineProperties: Qe,
                            getOwnPropertyDescriptor: Ze,
                        }
                    ),
                    t(
                        { target: "Object", stat: !0, forced: !s },
                        { getOwnPropertyNames: et, getOwnPropertySymbols: Fe }
                    ),
                    t(
                        {
                            target: "Object",
                            stat: !0,
                            forced: c(function () {
                                W.f(1);
                            }),
                        },
                        {
                            getOwnPropertySymbols: function (N) {
                                return W.f(E(N));
                            },
                        }
                    ),
                    pe)
                ) {
                    var xt =
                        !s ||
                        c(function () {
                            var N = ie();
                            return (
                                pe([N]) != "[null]" ||
                                pe({ a: N }) != "{}" ||
                                pe(Object(N)) != "{}"
                            );
                        });
                    t(
                        { target: "JSON", stat: !0, forced: xt },
                        {
                            stringify: function (N, G, Y) {
                                for (
                                    var J, de = [N], tt = 1;
                                    arguments.length > tt;

                                )
                                    de.push(arguments[tt++]);
                                if (((J = G), (f(G) || N !== void 0) && !v(N)))
                                    return (
                                        d(G) ||
                                            (G = function (kt, Se) {
                                                if (
                                                    (typeof J == "function" &&
                                                        (Se = J.call(
                                                            this,
                                                            kt,
                                                            Se
                                                        )),
                                                    !v(Se))
                                                )
                                                    return Se;
                                            }),
                                        (de[1] = G),
                                        pe.apply(null, de)
                                    );
                            },
                        }
                    );
                }
                ie[ee][ae] || m(ie[ee], ae, ie[ee].valueOf),
                    g(ie, Q),
                    (H[j] = !0);
            },
            a630: function (o, u, e) {
                var t = e("23e7"),
                    r = e("4df4"),
                    n = e("1c7e"),
                    i = !n(function (a) {
                        Array.from(a);
                    });
                t({ target: "Array", stat: !0, forced: i }, { from: r });
            },
            a640: function (o, u, e) {
                var t = e("d039");
                o.exports = function (r, n) {
                    var i = [][r];
                    return (
                        !!i &&
                        t(function () {
                            i.call(
                                null,
                                n ||
                                    function () {
                                        throw 1;
                                    },
                                1
                            );
                        })
                    );
                };
            },
            a691: function (o, u) {
                var e = Math.ceil,
                    t = Math.floor;
                o.exports = function (r) {
                    return isNaN((r = +r)) ? 0 : (r > 0 ? t : e)(r);
                };
            },
            a9e3: function (o, u, e) {
                var t = e("83ab"),
                    r = e("da84"),
                    n = e("94ca"),
                    i = e("6eeb"),
                    a = e("5135"),
                    s = e("c6b6"),
                    c = e("7156"),
                    l = e("d9b5"),
                    d = e("c04e"),
                    f = e("d039"),
                    v = e("7c73"),
                    h = e("241c").f,
                    E = e("06cf").f,
                    D = e("9bf2").f,
                    A = e("58a8").trim,
                    _ = "Number",
                    P = r[_],
                    R = P.prototype,
                    $ = s(v(R)) == _,
                    S = function (C) {
                        if (l(C))
                            throw TypeError(
                                "Cannot convert a Symbol value to a number"
                            );
                        var m,
                            M,
                            T,
                            z,
                            H,
                            B,
                            K,
                            te,
                            b = d(C, "number");
                        if (typeof b == "string" && b.length > 2) {
                            if (
                                ((b = A(b)),
                                (m = b.charCodeAt(0)),
                                m === 43 || m === 45)
                            ) {
                                if (
                                    ((M = b.charCodeAt(2)),
                                    M === 88 || M === 120)
                                )
                                    return NaN;
                            } else if (m === 48) {
                                switch (b.charCodeAt(1)) {
                                    case 66:
                                    case 98:
                                        (T = 2), (z = 49);
                                        break;
                                    case 79:
                                    case 111:
                                        (T = 8), (z = 55);
                                        break;
                                    default:
                                        return +b;
                                }
                                for (
                                    H = b.slice(2), B = H.length, K = 0;
                                    K < B;
                                    K++
                                )
                                    if (
                                        ((te = H.charCodeAt(K)),
                                        te < 48 || te > z)
                                    )
                                        return NaN;
                                return parseInt(H, T);
                            }
                        }
                        return +b;
                    };
                if (n(_, !P(" 0o1") || !P("0b1") || P("+0x1"))) {
                    for (
                        var w,
                            W = function (C) {
                                var m = arguments.length < 1 ? 0 : C,
                                    M = this;
                                return M instanceof W &&
                                    ($
                                        ? f(function () {
                                              R.valueOf.call(M);
                                          })
                                        : s(M) != _)
                                    ? c(new P(S(m)), M, W)
                                    : S(m);
                            },
                            q = t
                                ? h(P)
                                : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(
                                      ","
                                  ),
                            p = 0;
                        q.length > p;
                        p++
                    )
                        a(P, (w = q[p])) && !a(W, w) && D(W, w, E(P, w));
                    (W.prototype = R), (R.constructor = W), i(r, _, W);
                }
            },
            ae93: function (o, u, e) {
                var t,
                    r,
                    n,
                    i = e("d039"),
                    a = e("e163"),
                    s = e("9112"),
                    c = e("5135"),
                    l = e("b622"),
                    d = e("c430"),
                    f = l("iterator"),
                    v = !1,
                    h = function () {
                        return this;
                    };
                [].keys &&
                    ((n = [].keys()),
                    "next" in n
                        ? ((r = a(a(n))), r !== Object.prototype && (t = r))
                        : (v = !0));
                var E =
                    t == null ||
                    i(function () {
                        var D = {};
                        return t[f].call(D) !== D;
                    });
                E && (t = {}),
                    (d && !E) || c(t, f) || s(t, f, h),
                    (o.exports = {
                        IteratorPrototype: t,
                        BUGGY_SAFARI_ITERATORS: v,
                    });
            },
            b041: function (o, u, e) {
                var t = e("00ee"),
                    r = e("f5df");
                o.exports = t
                    ? {}.toString
                    : function () {
                          return "[object " + r(this) + "]";
                      };
            },
            b0c0: function (o, u, e) {
                var t = e("83ab"),
                    r = e("9bf2").f,
                    n = Function.prototype,
                    i = n.toString,
                    a = /^\s*function ([^ (]*)/,
                    s = "name";
                t &&
                    !(s in n) &&
                    r(n, s, {
                        configurable: !0,
                        get: function () {
                            try {
                                return i.call(this).match(a)[1];
                            } catch {
                                return "";
                            }
                        },
                    });
            },
            b622: function (o, u, e) {
                var t = e("da84"),
                    r = e("5692"),
                    n = e("5135"),
                    i = e("90e3"),
                    a = e("4930"),
                    s = e("fdbf"),
                    c = r("wks"),
                    l = t.Symbol,
                    d = s ? l : (l && l.withoutSetter) || i;
                o.exports = function (f) {
                    return (
                        (n(c, f) && (a || typeof c[f] == "string")) ||
                            (a && n(l, f)
                                ? (c[f] = l[f])
                                : (c[f] = d("Symbol." + f))),
                        c[f]
                    );
                };
            },
            b727: function (o, u, e) {
                var t = e("0366"),
                    r = e("44ad"),
                    n = e("7b0b"),
                    i = e("50c4"),
                    a = e("65f0"),
                    s = [].push,
                    c = function (l) {
                        var d = l == 1,
                            f = l == 2,
                            v = l == 3,
                            h = l == 4,
                            E = l == 6,
                            D = l == 7,
                            A = l == 5 || E;
                        return function (_, P, R, $) {
                            for (
                                var S,
                                    w,
                                    W = n(_),
                                    q = r(W),
                                    p = t(P, R, 3),
                                    C = i(q.length),
                                    m = 0,
                                    M = $ || a,
                                    T = d ? M(_, C) : f || D ? M(_, 0) : void 0;
                                C > m;
                                m++
                            )
                                if (
                                    (A || m in q) &&
                                    ((S = q[m]), (w = p(S, m, W)), l)
                                )
                                    if (d) T[m] = w;
                                    else if (w)
                                        switch (l) {
                                            case 3:
                                                return !0;
                                            case 5:
                                                return S;
                                            case 6:
                                                return m;
                                            case 2:
                                                s.call(T, S);
                                        }
                                    else
                                        switch (l) {
                                            case 4:
                                                return !1;
                                            case 7:
                                                s.call(T, S);
                                        }
                            return E ? -1 : v || h ? h : T;
                        };
                    };
                o.exports = {
                    forEach: c(0),
                    map: c(1),
                    filter: c(2),
                    some: c(3),
                    every: c(4),
                    find: c(5),
                    findIndex: c(6),
                    filterReject: c(7),
                };
            },
            c04e: function (o, u, e) {
                var t = e("861d"),
                    r = e("d9b5"),
                    n = e("485a"),
                    i = e("b622"),
                    a = i("toPrimitive");
                o.exports = function (s, c) {
                    if (!t(s) || r(s)) return s;
                    var l,
                        d = s[a];
                    if (d !== void 0) {
                        if (
                            (c === void 0 && (c = "default"),
                            (l = d.call(s, c)),
                            !t(l) || r(l))
                        )
                            return l;
                        throw TypeError(
                            "Can't convert object to primitive value"
                        );
                    }
                    return c === void 0 && (c = "number"), n(s, c);
                };
            },
            c430: function (o, u) {
                o.exports = !1;
            },
            c6b6: function (o, u) {
                var e = {}.toString;
                o.exports = function (t) {
                    return e.call(t).slice(8, -1);
                };
            },
            c6cd: function (o, u, e) {
                var t = e("da84"),
                    r = e("ce4e"),
                    n = "__core-js_shared__",
                    i = t[n] || r(n, {});
                o.exports = i;
            },
            c8ba: function (o, u) {
                var e;
                e = (function () {
                    return this;
                })();
                try {
                    e = e || new Function("return this")();
                } catch {
                    typeof window == "object" && (e = window);
                }
                o.exports = e;
            },
            ca84: function (o, u, e) {
                var t = e("5135"),
                    r = e("fc6a"),
                    n = e("4d64").indexOf,
                    i = e("d012");
                o.exports = function (a, s) {
                    var c,
                        l = r(a),
                        d = 0,
                        f = [];
                    for (c in l) !t(i, c) && t(l, c) && f.push(c);
                    for (; s.length > d; )
                        t(l, (c = s[d++])) && (~n(f, c) || f.push(c));
                    return f;
                };
            },
            caad: function (o, u, e) {
                var t = e("23e7"),
                    r = e("4d64").includes,
                    n = e("44d2");
                t(
                    { target: "Array", proto: !0 },
                    {
                        includes: function (i) {
                            return r(
                                this,
                                i,
                                arguments.length > 1 ? arguments[1] : void 0
                            );
                        },
                    }
                ),
                    n("includes");
            },
            cc12: function (o, u, e) {
                var t = e("da84"),
                    r = e("861d"),
                    n = t.document,
                    i = r(n) && r(n.createElement);
                o.exports = function (a) {
                    return i ? n.createElement(a) : {};
                };
            },
            ce4e: function (o, u, e) {
                var t = e("da84");
                o.exports = function (r, n) {
                    try {
                        Object.defineProperty(t, r, {
                            value: n,
                            configurable: !0,
                            writable: !0,
                        });
                    } catch {
                        t[r] = n;
                    }
                    return n;
                };
            },
            d012: function (o, u) {
                o.exports = {};
            },
            d039: function (o, u) {
                o.exports = function (e) {
                    try {
                        return !!e();
                    } catch {
                        return !0;
                    }
                };
            },
            d066: function (o, u, e) {
                var t = e("da84"),
                    r = function (n) {
                        return typeof n == "function" ? n : void 0;
                    };
                o.exports = function (n, i) {
                    return arguments.length < 2 ? r(t[n]) : t[n] && t[n][i];
                };
            },
            d1e7: function (o, u, e) {
                var t = {}.propertyIsEnumerable,
                    r = Object.getOwnPropertyDescriptor,
                    n = r && !t.call({ 1: 2 }, 1);
                u.f = n
                    ? function (i) {
                          var a = r(this, i);
                          return !!a && a.enumerable;
                      }
                    : t;
            },
            d28b: function (o, u, e) {
                var t = e("746f");
                t("iterator");
            },
            d2bb: function (o, u, e) {
                var t = e("825a"),
                    r = e("3bbe");
                o.exports =
                    Object.setPrototypeOf ||
                    ("__proto__" in {}
                        ? (function () {
                              var n,
                                  i = !1,
                                  a = {};
                              try {
                                  (n = Object.getOwnPropertyDescriptor(
                                      Object.prototype,
                                      "__proto__"
                                  ).set),
                                      n.call(a, []),
                                      (i = a instanceof Array);
                              } catch {}
                              return function (s, c) {
                                  return (
                                      t(s),
                                      r(c),
                                      i ? n.call(s, c) : (s.__proto__ = c),
                                      s
                                  );
                              };
                          })()
                        : void 0);
            },
            d3b7: function (o, u, e) {
                var t = e("00ee"),
                    r = e("6eeb"),
                    n = e("b041");
                t || r(Object.prototype, "toString", n, { unsafe: !0 });
            },
            d44e: function (o, u, e) {
                var t = e("9bf2").f,
                    r = e("5135"),
                    n = e("b622"),
                    i = n("toStringTag");
                o.exports = function (a, s, c) {
                    a &&
                        !r((a = c ? a : a.prototype), i) &&
                        t(a, i, { configurable: !0, value: s });
                };
            },
            d81d: function (o, u, e) {
                var t = e("23e7"),
                    r = e("b727").map,
                    n = e("1dde"),
                    i = n("map");
                t(
                    { target: "Array", proto: !0, forced: !i },
                    {
                        map: function (a) {
                            return r(
                                this,
                                a,
                                arguments.length > 1 ? arguments[1] : void 0
                            );
                        },
                    }
                );
            },
            d9b5: function (o, u, e) {
                var t = e("d066"),
                    r = e("fdbf");
                o.exports = r
                    ? function (n) {
                          return typeof n == "symbol";
                      }
                    : function (n) {
                          var i = t("Symbol");
                          return (
                              typeof i == "function" && Object(n) instanceof i
                          );
                      };
            },
            da84: function (o, u, e) {
                (function (t) {
                    var r = function (n) {
                        return n && n.Math == Math && n;
                    };
                    o.exports =
                        r(typeof globalThis == "object" && globalThis) ||
                        r(typeof window == "object" && window) ||
                        r(typeof self == "object" && self) ||
                        r(typeof t == "object" && t) ||
                        (function () {
                            return this;
                        })() ||
                        Function("return this")();
                }.call(this, e("c8ba")));
            },
            ddb0: function (o, u, e) {
                var t = e("da84"),
                    r = e("fdbc"),
                    n = e("e260"),
                    i = e("9112"),
                    a = e("b622"),
                    s = a("iterator"),
                    c = a("toStringTag"),
                    l = n.values;
                for (var d in r) {
                    var f = t[d],
                        v = f && f.prototype;
                    if (v) {
                        if (v[s] !== l)
                            try {
                                i(v, s, l);
                            } catch {
                                v[s] = l;
                            }
                        if ((v[c] || i(v, c, d), r[d])) {
                            for (var h in n)
                                if (v[h] !== n[h])
                                    try {
                                        i(v, h, n[h]);
                                    } catch {
                                        v[h] = n[h];
                                    }
                        }
                    }
                }
            },
            df75: function (o, u, e) {
                var t = e("ca84"),
                    r = e("7839");
                o.exports =
                    Object.keys ||
                    function (n) {
                        return t(n, r);
                    };
            },
            e01a: function (o, u, e) {
                var t = e("23e7"),
                    r = e("83ab"),
                    n = e("da84"),
                    i = e("5135"),
                    a = e("861d"),
                    s = e("9bf2").f,
                    c = e("e893"),
                    l = n.Symbol;
                if (
                    r &&
                    typeof l == "function" &&
                    (!("description" in l.prototype) ||
                        l().description !== void 0)
                ) {
                    var d = {},
                        f = function () {
                            var A =
                                    arguments.length < 1 ||
                                    arguments[0] === void 0
                                        ? void 0
                                        : String(arguments[0]),
                                _ =
                                    this instanceof f
                                        ? new l(A)
                                        : A === void 0
                                        ? l()
                                        : l(A);
                            return A === "" && (d[_] = !0), _;
                        };
                    c(f, l);
                    var v = (f.prototype = l.prototype);
                    v.constructor = f;
                    var h = v.toString,
                        E = String(l("test")) == "Symbol(test)",
                        D = /^Symbol\((.*)\)[^)]+$/;
                    s(v, "description", {
                        configurable: !0,
                        get: function () {
                            var A = a(this) ? this.valueOf() : this,
                                _ = h.call(A);
                            if (i(d, A)) return "";
                            var P = E ? _.slice(7, -1) : _.replace(D, "$1");
                            return P === "" ? void 0 : P;
                        },
                    }),
                        t({ global: !0, forced: !0 }, { Symbol: f });
                }
            },
            e163: function (o, u, e) {
                var t = e("5135"),
                    r = e("7b0b"),
                    n = e("f772"),
                    i = e("e177"),
                    a = n("IE_PROTO"),
                    s = Object.prototype;
                o.exports = i
                    ? Object.getPrototypeOf
                    : function (c) {
                          return (
                              (c = r(c)),
                              t(c, a)
                                  ? c[a]
                                  : typeof c.constructor == "function" &&
                                    c instanceof c.constructor
                                  ? c.constructor.prototype
                                  : c instanceof Object
                                  ? s
                                  : null
                          );
                      };
            },
            e177: function (o, u, e) {
                var t = e("d039");
                o.exports = !t(function () {
                    function r() {}
                    return (
                        (r.prototype.constructor = null),
                        Object.getPrototypeOf(new r()) !== r.prototype
                    );
                });
            },
            e260: function (o, u, e) {
                var t = e("fc6a"),
                    r = e("44d2"),
                    n = e("3f8c"),
                    i = e("69f3"),
                    a = e("7dd0"),
                    s = "Array Iterator",
                    c = i.set,
                    l = i.getterFor(s);
                (o.exports = a(
                    Array,
                    "Array",
                    function (d, f) {
                        c(this, { type: s, target: t(d), index: 0, kind: f });
                    },
                    function () {
                        var d = l(this),
                            f = d.target,
                            v = d.kind,
                            h = d.index++;
                        return !f || h >= f.length
                            ? ((d.target = void 0), { value: void 0, done: !0 })
                            : v == "keys"
                            ? { value: h, done: !1 }
                            : v == "values"
                            ? { value: f[h], done: !1 }
                            : { value: [h, f[h]], done: !1 };
                    },
                    "values"
                )),
                    (n.Arguments = n.Array),
                    r("keys"),
                    r("values"),
                    r("entries");
            },
            e538: function (o, u, e) {
                var t = e("b622");
                u.f = t;
            },
            e893: function (o, u, e) {
                var t = e("5135"),
                    r = e("56ef"),
                    n = e("06cf"),
                    i = e("9bf2");
                o.exports = function (a, s) {
                    for (
                        var c = r(s), l = i.f, d = n.f, f = 0;
                        f < c.length;
                        f++
                    ) {
                        var v = c[f];
                        t(a, v) || l(a, v, d(s, v));
                    }
                };
            },
            e8b5: function (o, u, e) {
                var t = e("c6b6");
                o.exports =
                    Array.isArray ||
                    function (r) {
                        return t(r) == "Array";
                    };
            },
            e95a: function (o, u, e) {
                var t = e("b622"),
                    r = e("3f8c"),
                    n = t("iterator"),
                    i = Array.prototype;
                o.exports = function (a) {
                    return a !== void 0 && (r.Array === a || i[n] === a);
                };
            },
            f5df: function (o, u, e) {
                var t = e("00ee"),
                    r = e("c6b6"),
                    n = e("b622"),
                    i = n("toStringTag"),
                    a =
                        r(
                            (function () {
                                return arguments;
                            })()
                        ) == "Arguments",
                    s = function (c, l) {
                        try {
                            return c[l];
                        } catch {}
                    };
                o.exports = t
                    ? r
                    : function (c) {
                          var l, d, f;
                          return c === void 0
                              ? "Undefined"
                              : c === null
                              ? "Null"
                              : typeof (d = s((l = Object(c)), i)) == "string"
                              ? d
                              : a
                              ? r(l)
                              : (f = r(l)) == "Object" &&
                                typeof l.callee == "function"
                              ? "Arguments"
                              : f;
                      };
            },
            f772: function (o, u, e) {
                var t = e("5692"),
                    r = e("90e3"),
                    n = t("keys");
                o.exports = function (i) {
                    return n[i] || (n[i] = r(i));
                };
            },
            fb15: function (o, u, e) {
                if (
                    (e.r(u),
                    e.d(u, "VsmMenu", function () {
                        return i.a;
                    }),
                    e.d(u, "VsmMob", function () {
                        return i.b;
                    }),
                    typeof window != "undefined")
                ) {
                    var t = window.document.currentScript,
                        r = e("8875");
                    (t = r()),
                        "currentScript" in document ||
                            Object.defineProperty(document, "currentScript", {
                                get: r,
                            });
                    var n = t && t.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
                    n && (e.p = n[1]);
                }
                var i = e("56d7");
                u.default = i.c;
            },
            fb62: function (o, u, e) {
                var t = e("8bbf"),
                    r = { class: "vsm-nav" },
                    n = { ref: "root", class: "vsm-root" },
                    i = {
                        ref: "linkContainer",
                        class: "vsm-link-container vsm-mob-hide",
                    },
                    a = { class: "vsm-dropdown vsm-mob-hide" },
                    s = { ref: "background", class: "vsm-background" },
                    c = { ref: "backgroundAlt", class: "vsm-background-alt" },
                    l = { ref: "arrow", class: "vsm-arrow" },
                    d = {
                        ref: "dropdownContainer",
                        class: "vsm-dropdown-container",
                    },
                    f = { class: "vsm-dropdown-content" };
                function v(p, C, m, M, T, z) {
                    return (
                        Object(t.openBlock)(),
                        Object(t.createBlock)(
                            Object(t.resolveDynamicComponent)(m.element),
                            { class: "vsm-menu vsm-no-transition" },
                            {
                                default: Object(t.withCtx)(function () {
                                    return [
                                        Object(t.createVNode)("nav", r, [
                                            Object(t.createVNode)(
                                                "ul",
                                                n,
                                                [
                                                    Object(t.renderSlot)(
                                                        p.$slots,
                                                        "before-nav"
                                                    ),
                                                    Object(t.createVNode)(
                                                        "li",
                                                        i,
                                                        [
                                                            (Object(
                                                                t.openBlock
                                                            )(!0),
                                                            Object(
                                                                t.createBlock
                                                            )(
                                                                t.Fragment,
                                                                null,
                                                                Object(
                                                                    t.renderList
                                                                )(
                                                                    m.menu,
                                                                    function (
                                                                        H,
                                                                        B
                                                                    ) {
                                                                        return (
                                                                            Object(
                                                                                t.openBlock
                                                                            )(),
                                                                            Object(
                                                                                t.createBlock
                                                                            )(
                                                                                Object(
                                                                                    t.resolveDynamicComponent
                                                                                )(
                                                                                    H.element ||
                                                                                        (H.dropdown
                                                                                            ? "button"
                                                                                            : "a")
                                                                                ),
                                                                                Object(
                                                                                    t.mergeProps
                                                                                )(
                                                                                    {
                                                                                        key: B,
                                                                                        class: [
                                                                                            "vsm-link",
                                                                                            H.attributes
                                                                                                ? H
                                                                                                      .attributes
                                                                                                      .class
                                                                                                : null,
                                                                                            {
                                                                                                "vsm-has-dropdown":
                                                                                                    H.dropdown,
                                                                                            },
                                                                                        ],
                                                                                        "data-dropdown":
                                                                                            H.dropdown,
                                                                                        "data-align":
                                                                                            H.align,
                                                                                        "aria-haspopup":
                                                                                            H.dropdown &&
                                                                                            "true",
                                                                                        "aria-expanded":
                                                                                            H.dropdown &&
                                                                                            "false",
                                                                                        tabindex:
                                                                                            "0",
                                                                                    },
                                                                                    H.attributes,
                                                                                    Object(
                                                                                        t.toHandlers
                                                                                    )(
                                                                                        H.listeners ||
                                                                                            {}
                                                                                    )
                                                                                ),
                                                                                {
                                                                                    default:
                                                                                        Object(
                                                                                            t.withCtx
                                                                                        )(
                                                                                            function () {
                                                                                                return [
                                                                                                    Object(
                                                                                                        t.renderSlot
                                                                                                    )(
                                                                                                        p.$slots,
                                                                                                        "title",
                                                                                                        {
                                                                                                            item: H,
                                                                                                            index: B,
                                                                                                        },
                                                                                                        function () {
                                                                                                            return [
                                                                                                                Object(
                                                                                                                    t.createVNode
                                                                                                                )(
                                                                                                                    "span",
                                                                                                                    null,
                                                                                                                    Object(
                                                                                                                        t.toDisplayString
                                                                                                                    )(
                                                                                                                        H.title
                                                                                                                    ),
                                                                                                                    1
                                                                                                                ),
                                                                                                            ];
                                                                                                        }
                                                                                                    ),
                                                                                                ];
                                                                                            }
                                                                                        ),
                                                                                    _: 2,
                                                                                },
                                                                                1040,
                                                                                [
                                                                                    "class",
                                                                                    "data-dropdown",
                                                                                    "data-align",
                                                                                    "aria-haspopup",
                                                                                    "aria-expanded",
                                                                                ]
                                                                            )
                                                                        );
                                                                    }
                                                                ),
                                                                128
                                                            )),
                                                        ],
                                                        512
                                                    ),
                                                    Object(t.renderSlot)(
                                                        p.$slots,
                                                        "after-nav"
                                                    ),
                                                ],
                                                512
                                            ),
                                        ]),
                                        Object(t.createVNode)("div", a, [
                                            Object(t.createVNode)(
                                                "div",
                                                s,
                                                [
                                                    Object(t.createVNode)(
                                                        "div",
                                                        c,
                                                        null,
                                                        512
                                                    ),
                                                ],
                                                512
                                            ),
                                            Object(t.createVNode)(
                                                "div",
                                                l,
                                                null,
                                                512
                                            ),
                                            Object(t.createVNode)(
                                                "div",
                                                d,
                                                [
                                                    (Object(t.openBlock)(!0),
                                                    Object(t.createBlock)(
                                                        t.Fragment,
                                                        null,
                                                        Object(t.renderList)(
                                                            z.itemsWithDropdown,
                                                            function (H, B) {
                                                                return (
                                                                    Object(
                                                                        t.openBlock
                                                                    )(),
                                                                    Object(
                                                                        t.createBlock
                                                                    )(
                                                                        "div",
                                                                        {
                                                                            key: B,
                                                                            class: "vsm-dropdown-section",
                                                                            "data-dropdown":
                                                                                H.dropdown,
                                                                            "data-align":
                                                                                H.align,
                                                                            "aria-hidden":
                                                                                "false",
                                                                        },
                                                                        [
                                                                            Object(
                                                                                t.createVNode
                                                                            )(
                                                                                "div",
                                                                                f,
                                                                                [
                                                                                    Object(
                                                                                        t.renderSlot
                                                                                    )(
                                                                                        p.$slots,
                                                                                        "default",
                                                                                        {
                                                                                            item: H,
                                                                                            index: B,
                                                                                        }
                                                                                    ),
                                                                                ]
                                                                            ),
                                                                        ],
                                                                        8,
                                                                        [
                                                                            "data-dropdown",
                                                                            "data-align",
                                                                        ]
                                                                    )
                                                                );
                                                            }
                                                        ),
                                                        128
                                                    )),
                                                ],
                                                512
                                            ),
                                        ]),
                                    ];
                                }),
                                _: 3,
                            }
                        )
                    );
                }
                function h(p, C, m) {
                    return (
                        C in p
                            ? Object.defineProperty(p, C, {
                                  value: m,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                              })
                            : (p[C] = m),
                        p
                    );
                }
                function E(p) {
                    if (Array.isArray(p)) return p;
                }
                e("a4d3"),
                    e("e01a"),
                    e("d3b7"),
                    e("d28b"),
                    e("3ca3"),
                    e("ddb0");
                function D(p, C) {
                    var m =
                        p == null
                            ? null
                            : (typeof Symbol != "undefined" &&
                                  p[Symbol.iterator]) ||
                              p["@@iterator"];
                    if (m != null) {
                        var M,
                            T,
                            z = [],
                            H = !0,
                            B = !1;
                        try {
                            for (
                                m = m.call(p);
                                !(H = (M = m.next()).done) &&
                                (z.push(M.value), !(C && z.length === C));
                                H = !0
                            );
                        } catch (K) {
                            (B = !0), (T = K);
                        } finally {
                            try {
                                H || m.return == null || m.return();
                            } finally {
                                if (B) throw T;
                            }
                        }
                        return z;
                    }
                }
                e("fb6a"), e("b0c0"), e("a630");
                function A(p, C) {
                    (C == null || C > p.length) && (C = p.length);
                    for (var m = 0, M = new Array(C); m < C; m++) M[m] = p[m];
                    return M;
                }
                function _(p, C) {
                    if (p) {
                        if (typeof p == "string") return A(p, C);
                        var m = Object.prototype.toString.call(p).slice(8, -1);
                        return (
                            m === "Object" &&
                                p.constructor &&
                                (m = p.constructor.name),
                            m === "Map" || m === "Set"
                                ? Array.from(p)
                                : m === "Arguments" ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      m
                                  )
                                ? A(p, C)
                                : void 0
                        );
                    }
                }
                function P() {
                    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                }
                function R(p, C) {
                    return E(p) || D(p, C) || _(p, C) || P();
                }
                function $(p, C, m, M, T, z, H) {
                    try {
                        var B = p[z](H),
                            K = B.value;
                    } catch (te) {
                        return void m(te);
                    }
                    B.done ? C(K) : Promise.resolve(K).then(M, T);
                }
                function S(p) {
                    return function () {
                        var C = this,
                            m = arguments;
                        return new Promise(function (M, T) {
                            var z = p.apply(C, m);
                            function H(K) {
                                $(z, M, T, H, B, "next", K);
                            }
                            function B(K) {
                                $(z, M, T, H, B, "throw", K);
                            }
                            H(void 0);
                        });
                    };
                }
                e("96cf"),
                    e("a9e3"),
                    e("caad"),
                    e("4de4"),
                    e("159b"),
                    e("99af"),
                    e("4fad"),
                    e("d81d");
                var w = 380,
                    W = 400,
                    q = {
                        name: "VsmMenu",
                        props: {
                            menu: { type: Array, required: !0 },
                            element: {
                                type: String,
                                default: "header",
                                validator: function (p) {
                                    return !!p;
                                },
                            },
                            screenOffset: {
                                type: [Number, String],
                                default: 10,
                                validator: function (p) {
                                    return +p >= 0;
                                },
                            },
                            dropdownOffset: {
                                type: [Number, String],
                                default: 0,
                                validator: function (p) {
                                    return +p >= 0;
                                },
                            },
                            handler: {
                                type: String,
                                default: "hover",
                                validator: function (p) {
                                    return ["hover", "click"].includes(p);
                                },
                            },
                            transitionTimeout: {
                                type: [Number, String],
                                default: 250,
                            },
                            align: {
                                type: String,
                                default: "center",
                                validator: function (p) {
                                    return ["left", "center", "right"].includes(
                                        p
                                    );
                                },
                            },
                        },
                        emits: ["open-dropdown", "close-dropdown"],
                        data: function () {
                            return {
                                elementsWithDropdown: [],
                                dropdownContainerItems: [],
                            };
                        },
                        computed: {
                            itemsWithDropdown: function () {
                                return this.menu.filter(function (p) {
                                    return p.dropdown;
                                });
                            },
                        },
                        watch: {
                            element: function () {
                                var p = this;
                                return S(
                                    regeneratorRuntime.mark(function C() {
                                        return regeneratorRuntime.wrap(
                                            function (m) {
                                                for (;;)
                                                    switch ((m.prev = m.next)) {
                                                        case 0:
                                                            return (
                                                                (m.next = 2),
                                                                p.$nextTick()
                                                            );
                                                        case 2:
                                                            p.updateDataElements(),
                                                                p.registerDropdownElementsEvents();
                                                        case 4:
                                                        case "end":
                                                            return m.stop();
                                                    }
                                            },
                                            C
                                        );
                                    })
                                )();
                            },
                            handler: function () {
                                this.registerDropdownElementsEvents(!0),
                                    this.registerDropdownContainerEvents(!0);
                            },
                            menu: {
                                handler: function () {
                                    var p = this;
                                    return S(
                                        regeneratorRuntime.mark(function C() {
                                            return regeneratorRuntime.wrap(
                                                function (m) {
                                                    for (;;)
                                                        switch (
                                                            (m.prev = m.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (m.next = 2),
                                                                    p.$nextTick()
                                                                );
                                                            case 2:
                                                                p.updateDataElements(),
                                                                    p.registerDropdownElementsEvents();
                                                            case 4:
                                                            case "end":
                                                                return m.stop();
                                                        }
                                                },
                                                C
                                            );
                                        })
                                    )();
                                },
                                deep: !0,
                            },
                        },
                        mounted: function () {
                            this.identifyPointerEvents(),
                                this.registerGlobalListeners(),
                                this.updateDataElements(),
                                this.registerDropdownElementsEvents(),
                                this.registerDropdownContainerEvents();
                        },
                        beforeUnmount: function () {
                            this.removeGlobalListeners();
                        },
                        methods: {
                            toggleDropdown: function (p) {
                                this._activeDropdown === p
                                    ? this.closeDropdown()
                                    : this.openDropdown(p);
                            },
                            openDropdown: function (p) {
                                var C = this;
                                if (this._activeDropdown !== p) {
                                    this.$emit("open-dropdown", p),
                                        this.$el.classList.add(
                                            "vsm-overlay-active",
                                            "vsm-dropdown-active"
                                        ),
                                        (this._activeDropdown = p),
                                        this._activeDropdown.setAttribute(
                                            "aria-expanded",
                                            "true"
                                        ),
                                        this.elementsWithDropdown.forEach(
                                            function (T) {
                                                return T.classList.remove(
                                                    "vsm-active"
                                                );
                                            }
                                        ),
                                        p.classList.add("vsm-active");
                                    var m = p.getAttribute("data-dropdown"),
                                        M = "vsm-left";
                                    this.dropdownContainerItems.forEach(
                                        function (T) {
                                            T.el.classList.remove(
                                                "vsm-active",
                                                "vsm-left",
                                                "vsm-right"
                                            ),
                                                T.name === m
                                                    ? (T.el.setAttribute(
                                                          "aria-hidden",
                                                          "false"
                                                      ),
                                                      T.el.classList.add(
                                                          "vsm-active"
                                                      ),
                                                      (M = "vsm-right"),
                                                      (C._activeContainerItem =
                                                          T))
                                                    : (T.el.setAttribute(
                                                          "aria-hidden",
                                                          "true"
                                                      ),
                                                      T.el.classList.add(M));
                                        }
                                    ),
                                        this.resizeDropdown();
                                }
                            },
                            closeDropdown: function () {
                                this._activeDropdown &&
                                    (this.$emit(
                                        "close-dropdown",
                                        this._activeDropdown
                                    ),
                                    this.elementsWithDropdown.forEach(function (
                                        p
                                    ) {
                                        return p.classList.remove("vsm-active");
                                    }),
                                    this._activeContainerItem.el.setAttribute(
                                        "aria-hidden",
                                        "true"
                                    ),
                                    this.clearEnableTransitionTimeout(),
                                    this.startDisableTransitionTimeout(),
                                    this.$el.classList.remove(
                                        "vsm-overlay-active",
                                        "vsm-dropdown-active"
                                    ),
                                    this._activeDropdown.setAttribute(
                                        "aria-expanded",
                                        "false"
                                    ),
                                    (this._activeContainerItem = void 0),
                                    (this._activeDropdown = void 0));
                            },
                            resizeDropdown: function () {
                                if (this._activeContainerItem) {
                                    var p =
                                            document.documentElement
                                                .offsetWidth,
                                        C = this.$el.getBoundingClientRect(),
                                        m =
                                            this._activeDropdown.getBoundingClientRect(),
                                        M = this._activeContainerItem.content,
                                        T = M.offsetHeight,
                                        z = M.offsetWidth,
                                        H = m.left - C.left,
                                        B = null;
                                    switch (
                                        this._activeContainerItem.align ||
                                        this.align
                                    ) {
                                        case "left":
                                            B = H;
                                            break;
                                        case "right":
                                            B = H - z + m.width;
                                            break;
                                        default:
                                            B = H - z / 2 + m.width / 2;
                                    }
                                    B + C.left < +this.screenOffset &&
                                        (B = +this.screenOffset - C.left);
                                    var K = B + C.left + z;
                                    K > p - +this.screenOffset &&
                                        ((B -= K - p + +this.screenOffset),
                                        B < +this.screenOffset - C.left &&
                                            ((B = +this.screenOffset - C.left),
                                            (z = p - 2 * +this.screenOffset))),
                                        (B = Math.round(B));
                                    var te =
                                            +this.dropdownOffset +
                                            this._activeDropdown.offsetTop,
                                        b = z / w,
                                        g = T / W;
                                    this.clearDisableTransitionTimeout(),
                                        this.startEnableTransitionTimeout(),
                                        (this.$refs.dropdownContainer.style.transform =
                                            "translate("
                                                .concat(B, "px, ")
                                                .concat(te, "px)")),
                                        (this.$refs.dropdownContainer.style.width =
                                            "".concat(z, "px")),
                                        (this.$refs.dropdownContainer.style.height =
                                            "".concat(T, "px")),
                                        (this.$refs.arrow.style.transform =
                                            "translate("
                                                .concat(H + m.width / 2, "px, ")
                                                .concat(
                                                    te,
                                                    "px) rotate(45deg)"
                                                )),
                                        (this.$refs.background.style.transform =
                                            "translate("
                                                .concat(B, "px, ")
                                                .concat(te, "px) scaleX(")
                                                .concat(b, ") scaleY(")
                                                .concat(g, ")")),
                                        (this.$refs.backgroundAlt.style.transform =
                                            "translateY(".concat(
                                                this._activeContainerItem
                                                    .content.firstElementChild
                                                    .offsetHeight / g,
                                                "px)"
                                            ));
                                }
                            },
                            startCloseDropdownTimeout: function () {
                                var p = this;
                                this._closeDropdownTimeout = setTimeout(
                                    function () {
                                        return p.closeDropdown();
                                    },
                                    50
                                );
                            },
                            clearCloseDropdownTimeout: function () {
                                clearTimeout(this._closeDropdownTimeout);
                            },
                            startEnableTransitionTimeout: function () {
                                var p = this;
                                this._enableTransitionTimeout = setTimeout(
                                    function () {
                                        return p.$el.classList.remove(
                                            "vsm-no-transition"
                                        );
                                    },
                                    50
                                );
                            },
                            clearEnableTransitionTimeout: function () {
                                clearTimeout(this._enableTransitionTimeout);
                            },
                            startDisableTransitionTimeout: function () {
                                var p = this;
                                this._disableTransitionTimeout = setTimeout(
                                    function () {
                                        return p.$el.classList.add(
                                            "vsm-no-transition"
                                        );
                                    },
                                    +this.transitionTimeout
                                );
                            },
                            clearDisableTransitionTimeout: function () {
                                clearTimeout(this._disableTransitionTimeout);
                            },
                            registerDropdownElementsEvents: function () {
                                var p = this,
                                    C =
                                        arguments.length > 0 &&
                                        arguments[0] !== void 0 &&
                                        arguments[0];
                                this.elementsWithDropdown.forEach(function (m) {
                                    if (!m._vsmMenu || C) {
                                        var M;
                                        m._vsmMenuHandlers &&
                                            Object.entries(
                                                m._vsmMenuHandlers
                                            ).forEach(function (T) {
                                                var z = R(T, 2),
                                                    H = z[0],
                                                    B = z[1];
                                                m.removeEventListener(H, B);
                                            }),
                                            p.handler === "hover"
                                                ? (m._vsmMenuHandlers =
                                                      ((M = {
                                                          focusin: function () {
                                                              p.clearCloseDropdownTimeout(),
                                                                  p.openDropdown(
                                                                      m
                                                                  );
                                                          },
                                                      }),
                                                      h(
                                                          M,
                                                          p._pointerEvent.enter,
                                                          function (T) {
                                                              T.pointerType !==
                                                                  "touch" &&
                                                                  (p.clearCloseDropdownTimeout(),
                                                                  p.openDropdown(
                                                                      m
                                                                  ));
                                                          }
                                                      ),
                                                      h(
                                                          M,
                                                          p._pointerEvent.leave,
                                                          function (T) {
                                                              T.pointerType !==
                                                                  "touch" &&
                                                                  p.startCloseDropdownTimeout();
                                                          }
                                                      ),
                                                      M))
                                                : (m._vsmMenuHandlers = {}),
                                            (m._vsmMenuHandlers[
                                                p._pointerEvent.end
                                            ] = function (T) {
                                                T.preventDefault(),
                                                    T.stopPropagation(),
                                                    p.toggleDropdown(m);
                                            }),
                                            Object.entries(
                                                m._vsmMenuHandlers
                                            ).forEach(function (T) {
                                                var z = R(T, 2),
                                                    H = z[0],
                                                    B = z[1];
                                                m.addEventListener(H, B);
                                            }),
                                            (m._vsmMenu = !0);
                                    }
                                });
                            },
                            registerDropdownContainerEvents: function () {
                                var p = this,
                                    C =
                                        arguments.length > 0 &&
                                        arguments[0] !== void 0 &&
                                        arguments[0],
                                    m = this.$refs.dropdownContainer;
                                if (!m._vsmMenu || C) {
                                    var M;
                                    m._vsmMenuHandlers &&
                                        Object.entries(
                                            m._vsmMenuHandlers
                                        ).forEach(function (T) {
                                            var z = R(T, 2),
                                                H = z[0],
                                                B = z[1];
                                            m.removeEventListener(H, B);
                                        }),
                                        this.handler === "hover"
                                            ? (m._vsmMenuHandlers =
                                                  ((M = {}),
                                                  h(
                                                      M,
                                                      this._pointerEvent.enter,
                                                      function (T) {
                                                          T.pointerType !==
                                                              "touch" &&
                                                              p.clearCloseDropdownTimeout();
                                                      }
                                                  ),
                                                  h(
                                                      M,
                                                      this._pointerEvent.leave,
                                                      function (T) {
                                                          T.pointerType !==
                                                              "touch" &&
                                                              p.startCloseDropdownTimeout();
                                                      }
                                                  ),
                                                  M))
                                            : (m._vsmMenuHandlers = {}),
                                        (m._vsmMenuHandlers[
                                            this._pointerEvent.end
                                        ] = function (T) {
                                            T.stopPropagation();
                                        }),
                                        Object.entries(
                                            m._vsmMenuHandlers
                                        ).forEach(function (T) {
                                            var z = R(T, 2),
                                                H = z[0],
                                                B = z[1];
                                            m.addEventListener(H, B);
                                        }),
                                        (m._vsmMenu = !0);
                                }
                            },
                            registerGlobalListeners: function () {
                                window.addEventListener(
                                    "resize",
                                    this.windowResizeHandler
                                ),
                                    document.addEventListener(
                                        "touchmove",
                                        this.documentTouchMoveHandler
                                    ),
                                    document.addEventListener(
                                        "touchstart",
                                        this.documentTouchStartHandler
                                    ),
                                    document.body.addEventListener(
                                        this._pointerEvent.end,
                                        this.documentEventEndHandler
                                    );
                            },
                            removeGlobalListeners: function () {
                                window.removeEventListener(
                                    "resize",
                                    this.windowResizeHandler
                                ),
                                    document.removeEventListener(
                                        "touchmove",
                                        this.documentTouchMoveHandler
                                    ),
                                    document.removeEventListener(
                                        "touchstart",
                                        this.documentTouchStartHandler
                                    ),
                                    document.body.removeEventListener(
                                        this._pointerEvent.end,
                                        this.documentEventEndHandler
                                    );
                            },
                            windowResizeHandler: function () {
                                var p = this;
                                if (
                                    this._lastWindowWidth !== window.innerWidth
                                ) {
                                    if (
                                        ((this._lastWindowWidth =
                                            window.innerWidth),
                                        this._activeDropdown)
                                    )
                                        return (
                                            this.$el.classList.add(
                                                "vsm-no-transition"
                                            ),
                                            void this.resizeDropdown()
                                        );
                                    this.$refs.background.getAttribute(
                                        "style"
                                    ) &&
                                        (this.$el.classList.add(
                                            "vsm-no-transition",
                                            "vsm-no-transition_dropdown"
                                        ),
                                        setTimeout(function () {
                                            return p.$el.classList.remove(
                                                "vsm-no-transition_dropdown"
                                            );
                                        }),
                                        this.closeDropdown(),
                                        this.clearAllStyles());
                                }
                            },
                            documentTouchMoveHandler: function () {
                                this._isDragging = !0;
                            },
                            documentTouchStartHandler: function () {
                                this._isDragging = !1;
                            },
                            documentEventEndHandler: function () {
                                this._isDragging || this.closeDropdown();
                            },
                            identifyPointerEvents: function () {
                                this._pointerEvent = window.PointerEvent
                                    ? {
                                          end: "pointerup",
                                          enter: "pointerenter",
                                          leave: "pointerleave",
                                      }
                                    : {
                                          end: "touchend",
                                          enter: "mouseenter",
                                          leave: "mouseleave",
                                      };
                            },
                            updateDataElements: function () {
                                (this.elementsWithDropdown = Array.from(
                                    this.$refs.linkContainer.children
                                ).filter(function (p) {
                                    return p.classList.contains(
                                        "vsm-has-dropdown"
                                    );
                                })),
                                    (this.dropdownContainerItems = Array.from(
                                        this.$refs.dropdownContainer.children
                                    ).map(function (p) {
                                        return {
                                            el: p,
                                            name: p.getAttribute(
                                                "data-dropdown"
                                            ),
                                            align: p.getAttribute("data-align"),
                                            content: p.firstElementChild,
                                        };
                                    }));
                            },
                            clearAllStyles: function () {
                                this.$refs.dropdownContainer.removeAttribute(
                                    "style"
                                ),
                                    this.$refs.arrow.removeAttribute("style"),
                                    this.$refs.background.removeAttribute(
                                        "style"
                                    ),
                                    this.$refs.backgroundAlt.removeAttribute(
                                        "style"
                                    );
                            },
                        },
                    };
                (q.render = v), (u.a = q);
            },
            fb6a: function (o, u, e) {
                var t = e("23e7"),
                    r = e("861d"),
                    n = e("e8b5"),
                    i = e("23cb"),
                    a = e("50c4"),
                    s = e("fc6a"),
                    c = e("8418"),
                    l = e("b622"),
                    d = e("1dde"),
                    f = d("slice"),
                    v = l("species"),
                    h = [].slice,
                    E = Math.max;
                t(
                    { target: "Array", proto: !0, forced: !f },
                    {
                        slice: function (D, A) {
                            var _,
                                P,
                                R,
                                $ = s(this),
                                S = a($.length),
                                w = i(D, S),
                                W = i(A === void 0 ? S : A, S);
                            if (
                                n($) &&
                                ((_ = $.constructor),
                                typeof _ != "function" ||
                                (_ !== Array && !n(_.prototype))
                                    ? r(_) &&
                                      ((_ = _[v]), _ === null && (_ = void 0))
                                    : (_ = void 0),
                                _ === Array || _ === void 0)
                            )
                                return h.call($, w, W);
                            for (
                                P = new (_ === void 0 ? Array : _)(E(W - w, 0)),
                                    R = 0;
                                w < W;
                                w++, R++
                            )
                                w in $ && c(P, R, $[w]);
                            return (P.length = R), P;
                        },
                    }
                );
            },
            fc6a: function (o, u, e) {
                var t = e("44ad"),
                    r = e("1d80");
                o.exports = function (n) {
                    return t(r(n));
                };
            },
            fdbc: function (o, u) {
                o.exports = {
                    CSSRuleList: 0,
                    CSSStyleDeclaration: 0,
                    CSSValueList: 0,
                    ClientRectList: 0,
                    DOMRectList: 0,
                    DOMStringList: 0,
                    DOMTokenList: 1,
                    DataTransferItemList: 0,
                    FileList: 0,
                    HTMLAllCollection: 0,
                    HTMLCollection: 0,
                    HTMLFormElement: 0,
                    HTMLSelectElement: 0,
                    MediaList: 0,
                    MimeTypeArray: 0,
                    NamedNodeMap: 0,
                    NodeList: 1,
                    PaintRequestList: 0,
                    Plugin: 0,
                    PluginArray: 0,
                    SVGLengthList: 0,
                    SVGNumberList: 0,
                    SVGPathSegList: 0,
                    SVGPointList: 0,
                    SVGStringList: 0,
                    SVGTransformList: 0,
                    SourceBufferList: 0,
                    StyleSheetList: 0,
                    TextTrackCueList: 0,
                    TextTrackList: 0,
                    TouchList: 0,
                };
            },
            fdbf: function (o, u, e) {
                var t = e("4930");
                o.exports =
                    t && !Symbol.sham && typeof Symbol.iterator == "symbol";
            },
        });
    });
})(ht);
const fr = { style: { padding: "10px 10px 10px 30px" } },
    dr = { style: { display: "inline-flex", "align-items": "center" } },
    pr = ["src"],
    vr = { style: { width: "300px", "padding-left": "20px" } },
    hr = X("span", { style: { color: "#8892a2" } }, null, -1),
    mr = ["aria-label"],
    br = { class: "title" },
    gr = X("span", { class: "arrow down" }, null, -1),
    yr = ["aria-label"],
    _r = { class: "title" },
    wr = { class: "navbar-dropdown" },
    xr = { class: "navbar-dropdown-subtitle" },
    kr = { key: 1 },
    Lr = { class: "navbar-dropdown-subitem-wrapper" },
    Or = oe({
        props: { item: { type: Object, required: !0 } },
        setup(I) {
            const k = I,
                { item: y } = ze(k),
                o = U(() => y.value.ariaLabel || y.value.text),
                u = Le(!1),
                e = Ae();
            Nt(
                () => e.path,
                () => {
                    u.value = !1;
                }
            );
            const t = x(y).children.map((a) => ({
                    title: a.text,
                    dropdown: `${a.text}-dropdown`,
                    icon:
                        a.icon || "/ami-docs/images/icons/apple-touch-icon.png",
                    link: a.link || "#",
                })),
                r = Le([
                    {
                        title: "Projects",
                        dropdown: "projects-dropdown",
                        element: "a",
                    },
                ]),
                n = (a) => {
                    a.detail === 0 ? (u.value = !u.value) : (u.value = !1);
                },
                i = (a, s) => s[s.length - 1] === a;
            return (a, s) => {
                const c = we("router-link");
                return (
                    O(),
                    V(
                        "div",
                        {
                            class: ye([
                                "navbar-dropdown-wrapper",
                                { open: u.value },
                            ]),
                        },
                        [
                            Z(
                                x(ht.exports.VsmMenu),
                                { menu: r.value, style: { color: "black" } },
                                {
                                    default: fe(({ item: l }) => [
                                        (O(!0),
                                        V(
                                            ve,
                                            null,
                                            ge(
                                                x(t),
                                                (d) => (
                                                    O(),
                                                    V("div", fr, [
                                                        Z(
                                                            c,
                                                            { to: `${d.link}` },
                                                            {
                                                                default: fe(
                                                                    () => [
                                                                        X(
                                                                            "div",
                                                                            dr,
                                                                            [
                                                                                X(
                                                                                    "span",
                                                                                    null,
                                                                                    [
                                                                                        X(
                                                                                            "img",
                                                                                            {
                                                                                                style: {
                                                                                                    padding:
                                                                                                        "10px",
                                                                                                },
                                                                                                src: d.icon,
                                                                                                alt: "Project icon",
                                                                                            },
                                                                                            null,
                                                                                            8,
                                                                                            pr
                                                                                        ),
                                                                                    ]
                                                                                ),
                                                                                X(
                                                                                    "div",
                                                                                    vr,
                                                                                    ce(
                                                                                        d.title
                                                                                    ),
                                                                                    1
                                                                                ),
                                                                            ]
                                                                        ),
                                                                        hr,
                                                                    ]
                                                                ),
                                                                _: 2,
                                                            },
                                                            1032,
                                                            ["to"]
                                                        ),
                                                    ])
                                                )
                                            ),
                                            256
                                        )),
                                    ]),
                                    "after-nav": fe(() => [
                                        X(
                                            "div",
                                            {
                                                class: ye([
                                                    "vsm-mob-show navbar-dropdown-wrapper",
                                                    { open: u.value },
                                                ]),
                                            },
                                            [
                                                X(
                                                    "button",
                                                    {
                                                        class: "navbar-dropdown-title",
                                                        type: "button",
                                                        "aria-label": x(o),
                                                        onClick: n,
                                                    },
                                                    [
                                                        X(
                                                            "span",
                                                            br,
                                                            ce(x(y).text),
                                                            1
                                                        ),
                                                        gr,
                                                    ],
                                                    8,
                                                    mr
                                                ),
                                                X(
                                                    "button",
                                                    {
                                                        class: "navbar-dropdown-title-mobile",
                                                        type: "button",
                                                        "aria-label": x(o),
                                                        onClick:
                                                            s[0] ||
                                                            (s[0] = (l) =>
                                                                (u.value =
                                                                    !u.value)),
                                                    },
                                                    [
                                                        X(
                                                            "span",
                                                            _r,
                                                            ce(x(y).text),
                                                            1
                                                        ),
                                                        X(
                                                            "span",
                                                            {
                                                                class: ye([
                                                                    "arrow",
                                                                    u.value
                                                                        ? "down"
                                                                        : "right",
                                                                ]),
                                                            },
                                                            null,
                                                            2
                                                        ),
                                                    ],
                                                    8,
                                                    yr
                                                ),
                                                Z(vt, null, {
                                                    default: fe(() => [
                                                        Ce(
                                                            X(
                                                                "ul",
                                                                wr,
                                                                [
                                                                    (O(!0),
                                                                    V(
                                                                        ve,
                                                                        null,
                                                                        ge(
                                                                            x(y)
                                                                                .children,
                                                                            (
                                                                                l
                                                                            ) => (
                                                                                O(),
                                                                                V(
                                                                                    "li",
                                                                                    {
                                                                                        key: l.text,
                                                                                        class: "navbar-dropdown-item",
                                                                                    },
                                                                                    [
                                                                                        l.children
                                                                                            ? (O(),
                                                                                              V(
                                                                                                  ve,
                                                                                                  {
                                                                                                      key: 0,
                                                                                                  },
                                                                                                  [
                                                                                                      X(
                                                                                                          "h4",
                                                                                                          xr,
                                                                                                          [
                                                                                                              l.link
                                                                                                                  ? (O(),
                                                                                                                    se(
                                                                                                                        _e,
                                                                                                                        {
                                                                                                                            key: 0,
                                                                                                                            item: l,
                                                                                                                            onFocusout:
                                                                                                                                (
                                                                                                                                    d
                                                                                                                                ) =>
                                                                                                                                    i(
                                                                                                                                        l,
                                                                                                                                        x(
                                                                                                                                            y
                                                                                                                                        )
                                                                                                                                            .children
                                                                                                                                    ) &&
                                                                                                                                    l
                                                                                                                                        .children
                                                                                                                                        .length ===
                                                                                                                                        0 &&
                                                                                                                                    (u.value =
                                                                                                                                        !1),
                                                                                                                        },
                                                                                                                        null,
                                                                                                                        8,
                                                                                                                        [
                                                                                                                            "item",
                                                                                                                            "onFocusout",
                                                                                                                        ]
                                                                                                                    ))
                                                                                                                  : (O(),
                                                                                                                    V(
                                                                                                                        "span",
                                                                                                                        kr,
                                                                                                                        ce(
                                                                                                                            l.text
                                                                                                                        ),
                                                                                                                        1
                                                                                                                    )),
                                                                                                          ]
                                                                                                      ),
                                                                                                      X(
                                                                                                          "ul",
                                                                                                          Lr,
                                                                                                          [
                                                                                                              (O(
                                                                                                                  !0
                                                                                                              ),
                                                                                                              V(
                                                                                                                  ve,
                                                                                                                  null,
                                                                                                                  ge(
                                                                                                                      l.children,
                                                                                                                      (
                                                                                                                          d
                                                                                                                      ) => (
                                                                                                                          O(),
                                                                                                                          V(
                                                                                                                              "li",
                                                                                                                              {
                                                                                                                                  key: d.link,
                                                                                                                                  class: "navbar-dropdown-subitem",
                                                                                                                              },
                                                                                                                              [
                                                                                                                                  Z(
                                                                                                                                      _e,
                                                                                                                                      {
                                                                                                                                          item: d,
                                                                                                                                          onFocusout:
                                                                                                                                              (
                                                                                                                                                  f
                                                                                                                                              ) =>
                                                                                                                                                  i(
                                                                                                                                                      d,
                                                                                                                                                      l.children
                                                                                                                                                  ) &&
                                                                                                                                                  i(
                                                                                                                                                      l,
                                                                                                                                                      x(
                                                                                                                                                          y
                                                                                                                                                      )
                                                                                                                                                          .children
                                                                                                                                                  ) &&
                                                                                                                                                  (u.value =
                                                                                                                                                      !1),
                                                                                                                                      },
                                                                                                                                      null,
                                                                                                                                      8,
                                                                                                                                      [
                                                                                                                                          "item",
                                                                                                                                          "onFocusout",
                                                                                                                                      ]
                                                                                                                                  ),
                                                                                                                              ]
                                                                                                                          )
                                                                                                                      )
                                                                                                                  ),
                                                                                                                  128
                                                                                                              )),
                                                                                                          ]
                                                                                                      ),
                                                                                                  ],
                                                                                                  64
                                                                                              ))
                                                                                            : (O(),
                                                                                              se(
                                                                                                  _e,
                                                                                                  {
                                                                                                      key: 1,
                                                                                                      item: l,
                                                                                                      onFocusout:
                                                                                                          (
                                                                                                              d
                                                                                                          ) =>
                                                                                                              i(
                                                                                                                  l,
                                                                                                                  x(
                                                                                                                      y
                                                                                                                  )
                                                                                                                      .children
                                                                                                              ) &&
                                                                                                              (u.value =
                                                                                                                  !1),
                                                                                                  },
                                                                                                  null,
                                                                                                  8,
                                                                                                  [
                                                                                                      "item",
                                                                                                      "onFocusout",
                                                                                                  ]
                                                                                              )),
                                                                                    ]
                                                                                )
                                                                            )
                                                                        ),
                                                                        128
                                                                    )),
                                                                ],
                                                                512
                                                            ),
                                                            [[De, u.value]]
                                                        ),
                                                    ]),
                                                    _: 1,
                                                }),
                                            ],
                                            2
                                        ),
                                    ]),
                                    _: 1,
                                },
                                8,
                                ["menu"]
                            ),
                        ],
                        2
                    )
                );
            };
        },
    }),
    it = (I) =>
        decodeURI(I)
            .replace(/#.*$/, "")
            .replace(/(index)?\.(md|html)$/, ""),
    Er = (I, k) => {
        if (k.hash === I) return !0;
        const y = it(k.path),
            o = it(I);
        return y === o;
    },
    mt = (I, k) =>
        I.link && Er(I.link, k)
            ? !0
            : I.children
            ? I.children.some((y) => mt(y, k))
            : !1,
    bt = (I) =>
        !Me(I) || /github\.com/.test(I)
            ? "GitHub"
            : /bitbucket\.org/.test(I)
            ? "Bitbucket"
            : /gitlab\.com/.test(I)
            ? "GitLab"
            : /gitee\.com/.test(I)
            ? "Gitee"
            : null,
    Sr = {
        GitHub: ":repo/edit/:branch/:path",
        GitLab: ":repo/-/edit/:branch/:path",
        Gitee: ":repo/edit/:branch/:path",
        Bitbucket:
            ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default",
    },
    Tr = ({ docsRepo: I, editLinkPattern: k }) => {
        if (k) return k;
        const y = bt(I);
        return y !== null ? Sr[y] : null;
    },
    jr = ({
        docsRepo: I,
        docsBranch: k,
        docsDir: y,
        filePathRelative: o,
        editLinkPattern: u,
    }) => {
        if (!o) return null;
        const e = Tr({ docsRepo: I, editLinkPattern: u });
        return e
            ? e
                  .replace(/:repo/, Me(I) ? I : `https://github.com/${I}`)
                  .replace(/:branch/, k)
                  .replace(/:path/, Pt(`${It(y)}/${o}`))
            : null;
    },
    $r = { key: 0, class: "navbar-items" },
    gt = oe({
        setup(I) {
            const k = () => {
                    const i = qe(),
                        a = ut(),
                        s = Ue(),
                        c = he();
                    return U(() => {
                        var h, E;
                        const l = Object.keys(s.value.locales);
                        if (l.length < 2) return [];
                        const d = i.currentRoute.value.path,
                            f = i.currentRoute.value.fullPath;
                        return [
                            {
                                text:
                                    (h = c.value.selectLanguageText) != null
                                        ? h
                                        : "unknown language",
                                ariaLabel:
                                    (E = c.value.selectLanguageAriaLabel) !=
                                    null
                                        ? E
                                        : "unkown language",
                                children: l.map((D) => {
                                    var S, w, W, q, p, C;
                                    const A =
                                            (w =
                                                (S = s.value.locales) == null
                                                    ? void 0
                                                    : S[D]) != null
                                                ? w
                                                : {},
                                        _ =
                                            (q =
                                                (W = c.value.locales) == null
                                                    ? void 0
                                                    : W[D]) != null
                                                ? q
                                                : {},
                                        P = `${A.lang}`,
                                        R =
                                            (p = _.selectLanguageName) != null
                                                ? p
                                                : P;
                                    let $;
                                    if (P === s.value.lang) $ = f;
                                    else {
                                        const m = d.replace(a.value, D);
                                        i.getRoutes().some((M) => M.path === m)
                                            ? ($ = m)
                                            : ($ =
                                                  (C = _.home) != null ? C : D);
                                    }
                                    return { text: R, link: $ };
                                }),
                            },
                        ];
                    });
                },
                y = () => {
                    const i = he(),
                        a = U(() => i.value.repo),
                        s = U(() => (a.value ? bt(a.value) : null)),
                        c = U(() =>
                            a.value && !Me(a.value)
                                ? `https://github.com/${a.value}`
                                : a.value
                        ),
                        l = U(() =>
                            c.value
                                ? i.value.repoLabel
                                    ? i.value.repoLabel
                                    : s.value === null
                                    ? "Source"
                                    : s.value
                                : null
                        );
                    return U(() =>
                        !c.value || !l.value
                            ? []
                            : [{ text: l.value, link: c.value }]
                    );
                },
                o = (i) =>
                    ft(i)
                        ? dt(i)
                        : i.children
                        ? We(Ge({}, i), { children: i.children.map(o) })
                        : i,
                e = (() => {
                    const i = he();
                    return U(() => (i.value.navbar || []).map(o));
                })(),
                t = k(),
                r = y(),
                n = U(() => [...e.value, ...t.value, ...r.value]);
            return (i, a) =>
                x(n).length
                    ? (O(),
                      V("nav", $r, [
                          (O(!0),
                          V(
                              ve,
                              null,
                              ge(
                                  x(n),
                                  (s) => (
                                      O(),
                                      V(
                                          "div",
                                          { key: s.text, class: "navbar-item" },
                                          [
                                              s.children
                                                  ? (O(),
                                                    se(
                                                        Or,
                                                        { key: 0, item: s },
                                                        null,
                                                        8,
                                                        ["item"]
                                                    ))
                                                  : (O(),
                                                    se(
                                                        _e,
                                                        { key: 1, item: s },
                                                        null,
                                                        8,
                                                        ["item"]
                                                    )),
                                          ]
                                      )
                                  )
                              ),
                              128
                          )),
                      ]))
                    : ne("", !0);
        },
    }),
    Cr = ["title"],
    Dr = { class: "icon", focusable: "false", viewBox: "0 0 32 32" },
    Ar = Ht(
        '<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',
        9
    ),
    Mr = [Ar],
    Nr = { class: "icon", focusable: "false", viewBox: "0 0 32 32" },
    Pr = X(
        "path",
        {
            d: "M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",
            fill: "currentColor",
        },
        null,
        -1
    ),
    Ir = [Pr],
    Hr = oe({
        setup(I) {
            const k = he(),
                y = Ye(),
                o = () => {
                    y.value = !y.value;
                };
            return (u, e) => (
                O(),
                V(
                    "button",
                    {
                        class: "toggle-dark-button",
                        title: x(k).toggleDarkMode,
                        onClick: o,
                    },
                    [
                        Ce((O(), V("svg", Dr, Mr, 512)), [[De, !x(y)]]),
                        Ce((O(), V("svg", Nr, Ir, 512)), [[De, x(y)]]),
                    ],
                    8,
                    Cr
                )
            );
        },
    }),
    Vr = ["title"],
    Rr = X(
        "div",
        { class: "icon", "aria-hidden": "true" },
        [X("span"), X("span"), X("span")],
        -1
    ),
    Br = [Rr],
    Fr = oe({
        emits: ["toggle"],
        setup(I) {
            const k = he();
            return (y, o) => (
                O(),
                V(
                    "div",
                    {
                        class: "toggle-sidebar-button",
                        title: x(k).toggleSidebar,
                        "aria-expanded": "false",
                        role: "button",
                        tabindex: "0",
                        onClick: o[0] || (o[0] = (u) => y.$emit("toggle")),
                    },
                    Br,
                    8,
                    Vr
                )
            );
        },
    }),
    Gr = oe({
        emits: ["toggle-sidebar"],
        setup(I) {
            const k = he(),
                y = Le(null),
                o = Le(null),
                u = Le(0),
                e = U(() => (u.value ? { maxWidth: u.value + "px" } : {})),
                t = U(() => k.value.darkMode);
            pt(() => {
                const i =
                        r(y.value, "paddingLeft") + r(y.value, "paddingRight"),
                    a = () => {
                        var s;
                        window.innerWidth <= 719
                            ? (u.value = 0)
                            : (u.value =
                                  y.value.offsetWidth -
                                  i -
                                  (((s = o.value) == null
                                      ? void 0
                                      : s.offsetWidth) || 0));
                    };
                a(),
                    window.addEventListener("resize", a, !1),
                    window.addEventListener("orientationchange", a, !1);
            });
            function r(n, i) {
                var c, l, d;
                const a =
                        (d =
                            (l =
                                (c = n == null ? void 0 : n.ownerDocument) ==
                                null
                                    ? void 0
                                    : c.defaultView) == null
                                ? void 0
                                : l.getComputedStyle(n, null)) == null
                            ? void 0
                            : d[i],
                    s = Number.parseInt(a, 10);
                return Number.isNaN(s) ? 0 : s;
            }
            return (n, i) => {
                const a = we("NavbarSearch");
                return (
                    O(),
                    V(
                        "header",
                        { ref_key: "navbar", ref: y, class: "navbar" },
                        [
                            Z(Fr, {
                                onToggle:
                                    i[0] ||
                                    (i[0] = (s) => n.$emit("toggle-sidebar")),
                            }),
                            X(
                                "span",
                                { ref_key: "navbarBrand", ref: o },
                                [Z(ur)],
                                512
                            ),
                            X(
                                "div",
                                {
                                    class: "navbar-items-wrapper",
                                    style: Vt(x(e)),
                                },
                                [
                                    re(n.$slots, "before"),
                                    Z(gt, { class: "can-hide" }),
                                    re(n.$slots, "after"),
                                    x(t)
                                        ? (O(), se(Hr, { key: 0 }))
                                        : ne("", !0),
                                    Z(a),
                                ],
                                4
                            ),
                        ],
                        512
                    )
                );
            };
        },
    }),
    Wr = { class: "page-meta" },
    zr = { key: 0, class: "meta-item edit-link" },
    Ur = { key: 1, class: "meta-item last-updated" },
    Yr = { class: "meta-item-label" },
    qr = { class: "meta-item-info" },
    Kr = { key: 2, class: "meta-item contributors" },
    Xr = { class: "meta-item-label" },
    Jr = { class: "meta-item-info" },
    Qr = ["title"],
    Zr = je(", "),
    en = oe({
        setup(I) {
            const k = () => {
                    const n = he(),
                        i = Te(),
                        a = ke();
                    return U(() => {
                        var E, D, A;
                        if (
                            !((D =
                                (E = a.value.editLink) != null
                                    ? E
                                    : n.value.editLink) != null
                                ? D
                                : !0)
                        )
                            return null;
                        const {
                            repo: c,
                            docsRepo: l = c,
                            docsBranch: d = "main",
                            docsDir: f = "",
                            editLinkText: v,
                        } = n.value;
                        if (!l) return null;
                        const h = jr({
                            docsRepo: l,
                            docsBranch: d,
                            docsDir: f,
                            filePathRelative: i.value.filePathRelative,
                            editLinkPattern:
                                (A = a.value.editLinkPattern) != null
                                    ? A
                                    : n.value.editLinkPattern,
                        });
                        return h
                            ? {
                                  text: v != null ? v : "Edit this page",
                                  link: h,
                              }
                            : null;
                    });
                },
                y = () => {
                    const n = he(),
                        i = Te(),
                        a = ke();
                    return U(() => {
                        var l, d, f, v;
                        return !((d =
                            (l = a.value.lastUpdated) != null
                                ? l
                                : n.value.lastUpdated) != null
                            ? d
                            : !0) ||
                            !((f = i.value.git) != null && f.updatedTime)
                            ? null
                            : new Date(
                                  (v = i.value.git) == null
                                      ? void 0
                                      : v.updatedTime
                              ).toLocaleString();
                    });
                },
                o = () => {
                    const n = he(),
                        i = Te(),
                        a = ke();
                    return U(() => {
                        var c, l, d, f;
                        return ((l =
                            (c = a.value.contributors) != null
                                ? c
                                : n.value.contributors) != null
                            ? l
                            : !0) &&
                            (f =
                                (d = i.value.git) == null
                                    ? void 0
                                    : d.contributors) != null
                            ? f
                            : null;
                    });
                },
                u = he(),
                e = k(),
                t = y(),
                r = o();
            return (n, i) => {
                const a = we("ClientOnly");
                return (
                    O(),
                    V("footer", Wr, [
                        x(e)
                            ? (O(),
                              V("div", zr, [
                                  Z(
                                      _e,
                                      { class: "meta-item-label", item: x(e) },
                                      null,
                                      8,
                                      ["item"]
                                  ),
                              ]))
                            : ne("", !0),
                        x(t)
                            ? (O(),
                              V("div", Ur, [
                                  X(
                                      "span",
                                      Yr,
                                      ce(x(u).lastUpdatedText) + ": ",
                                      1
                                  ),
                                  Z(a, null, {
                                      default: fe(() => [
                                          X("span", qr, ce(x(t)), 1),
                                      ]),
                                      _: 1,
                                  }),
                              ]))
                            : ne("", !0),
                        x(r) && x(r).length
                            ? (O(),
                              V("div", Kr, [
                                  X(
                                      "span",
                                      Xr,
                                      ce(x(u).contributorsText) + ": ",
                                      1
                                  ),
                                  X("span", Jr, [
                                      (O(!0),
                                      V(
                                          ve,
                                          null,
                                          ge(
                                              x(r),
                                              (s, c) => (
                                                  O(),
                                                  V(
                                                      ve,
                                                      { key: c },
                                                      [
                                                          X(
                                                              "span",
                                                              {
                                                                  class: "contributor",
                                                                  title: `email: ${s.email}`,
                                                              },
                                                              ce(s.name),
                                                              9,
                                                              Qr
                                                          ),
                                                          c !== x(r).length - 1
                                                              ? (O(),
                                                                V(
                                                                    ve,
                                                                    { key: 0 },
                                                                    [Zr],
                                                                    64
                                                                ))
                                                              : ne("", !0),
                                                      ],
                                                      64
                                                  )
                                              )
                                          ),
                                          128
                                      )),
                                  ]),
                              ]))
                            : ne("", !0),
                    ])
                );
            };
        },
    }),
    tn = { key: 0, class: "page-nav" },
    rn = { class: "inner" },
    nn = { key: 0, class: "prev" },
    on = { key: 1, class: "next" },
    an = oe({
        setup(I) {
            const k = (n) => (n === !1 ? null : ft(n) ? dt(n) : Rt(n) ? n : !1),
                y = (n, i, a) => {
                    const s = n.findIndex((c) => c.link === i);
                    if (s !== -1) {
                        const c = n[s + a];
                        return c != null && c.link ? c : null;
                    }
                    for (const c of n)
                        if (c.children) {
                            const l = y(c.children, i, a);
                            if (l) return l;
                        }
                    return null;
                },
                o = ke(),
                u = Ke(),
                e = Ae(),
                t = U(() => {
                    const n = k(o.value.prev);
                    return n !== !1 ? n : y(u.value, e.path, -1);
                }),
                r = U(() => {
                    const n = k(o.value.next);
                    return n !== !1 ? n : y(u.value, e.path, 1);
                });
            return (n, i) =>
                x(t) || x(r)
                    ? (O(),
                      V("nav", tn, [
                          X("p", rn, [
                              x(t)
                                  ? (O(),
                                    V("span", nn, [
                                        Z(_e, { item: x(t) }, null, 8, [
                                            "item",
                                        ]),
                                    ]))
                                  : ne("", !0),
                              x(r)
                                  ? (O(),
                                    V("span", on, [
                                        Z(_e, { item: x(r) }, null, 8, [
                                            "item",
                                        ]),
                                    ]))
                                  : ne("", !0),
                          ]),
                      ]))
                    : ne("", !0);
        },
    }),
    sn = { class: "page" },
    cn = { class: "theme-default-content" },
    un = oe({
        setup(I) {
            return (k, y) => {
                const o = we("Content");
                return (
                    O(),
                    V("main", sn, [
                        re(k.$slots, "top"),
                        X("div", cn, [Z(o)]),
                        Z(en),
                        Z(an),
                        re(k.$slots, "bottom"),
                    ])
                );
            };
        },
    }),
    ln = { class: "sidebar-item-children" },
    fn = oe({
        props: {
            item: { type: Object, required: !0 },
            depth: { type: Number, required: !1, default: 0 },
        },
        setup(I) {
            const k = I,
                { item: y, depth: o } = ze(k),
                u = Ae(),
                e = qe(),
                t = U(() => mt(y.value, u)),
                r = U(() => ({
                    "sidebar-item": !0,
                    "sidebar-heading": o.value === 0,
                    active: t.value,
                    collapsible: y.value.collapsible,
                })),
                n = Le(!0),
                i = Le(void 0);
            return (
                y.value.collapsible &&
                    ((n.value = t.value),
                    (i.value = () => {
                        n.value = !n.value;
                    }),
                    e.afterEach(() => {
                        n.value = t.value;
                    })),
                (a, s) => {
                    var l;
                    const c = we("SidebarItem", !0);
                    return (
                        O(),
                        V("li", null, [
                            x(y).link
                                ? (O(),
                                  se(
                                      _e,
                                      { key: 0, class: ye(x(r)), item: x(y) },
                                      null,
                                      8,
                                      ["class", "item"]
                                  ))
                                : (O(),
                                  V(
                                      "p",
                                      {
                                          key: 1,
                                          tabindex: "0",
                                          class: ye(x(r)),
                                          onClick:
                                              s[0] ||
                                              (s[0] = (...d) =>
                                                  i.value && i.value(...d)),
                                          onKeydown:
                                              s[1] ||
                                              (s[1] = Bt(
                                                  (...d) =>
                                                      i.value && i.value(...d),
                                                  ["enter"]
                                              )),
                                      },
                                      [
                                          je(ce(x(y).text) + " ", 1),
                                          x(y).collapsible
                                              ? (O(),
                                                V(
                                                    "span",
                                                    {
                                                        key: 0,
                                                        class: ye([
                                                            "arrow",
                                                            n.value
                                                                ? "down"
                                                                : "right",
                                                        ]),
                                                    },
                                                    null,
                                                    2
                                                ))
                                              : ne("", !0),
                                      ],
                                      34
                                  )),
                            (l = x(y).children) != null && l.length
                                ? (O(),
                                  se(
                                      vt,
                                      { key: 2 },
                                      {
                                          default: fe(() => [
                                              Ce(
                                                  X(
                                                      "ul",
                                                      ln,
                                                      [
                                                          (O(!0),
                                                          V(
                                                              ve,
                                                              null,
                                                              ge(
                                                                  x(y).children,
                                                                  (d) => (
                                                                      O(),
                                                                      se(
                                                                          c,
                                                                          {
                                                                              key: `${x(
                                                                                  o
                                                                              )}${
                                                                                  d.text
                                                                              }${
                                                                                  d.link
                                                                              }`,
                                                                              item: d,
                                                                              depth:
                                                                                  x(
                                                                                      o
                                                                                  ) +
                                                                                  1,
                                                                          },
                                                                          null,
                                                                          8,
                                                                          [
                                                                              "item",
                                                                              "depth",
                                                                          ]
                                                                      )
                                                                  )
                                                              ),
                                                              128
                                                          )),
                                                      ],
                                                      512
                                                  ),
                                                  [[De, n.value]]
                                              ),
                                          ]),
                                          _: 1,
                                      }
                                  ))
                                : ne("", !0),
                        ])
                    );
                }
            );
        },
    }),
    dn = { key: 0, class: "sidebar-items" },
    pn = oe({
        setup(I) {
            const k = Ke();
            return (y, o) =>
                x(k).length
                    ? (O(),
                      V("ul", dn, [
                          (O(!0),
                          V(
                              ve,
                              null,
                              ge(
                                  x(k),
                                  (u) => (
                                      O(),
                                      se(
                                          fn,
                                          { key: u.link || u.text, item: u },
                                          null,
                                          8,
                                          ["item"]
                                      )
                                  )
                              ),
                              128
                          )),
                      ]))
                    : ne("", !0);
        },
    }),
    vn = { class: "sidebar" },
    hn = oe({
        setup(I) {
            return (k, y) => (
                O(),
                V("aside", vn, [
                    Z(gt),
                    re(k.$slots, "top"),
                    Z(pn),
                    re(k.$slots, "bottom"),
                ])
            );
        },
    }),
    yn = oe({
        setup(I) {
            const k = Te(),
                y = ke(),
                o = he(),
                u = U(() => y.value.navbar !== !1 && o.value.navbar !== !1),
                e = Ke(),
                t = Le(!1),
                r = (v) => {
                    t.value = typeof v == "boolean" ? v : !t.value;
                },
                n = { x: 0, y: 0 },
                i = (v) => {
                    (n.x = v.changedTouches[0].clientX),
                        (n.y = v.changedTouches[0].clientY);
                },
                a = (v) => {
                    const h = v.changedTouches[0].clientX - n.x,
                        E = v.changedTouches[0].clientY - n.y;
                    Math.abs(h) > Math.abs(E) &&
                        Math.abs(h) > 40 &&
                        (h > 0 && n.x <= 80 ? r(!0) : r(!1));
                },
                s = U(() => [
                    {
                        "no-navbar": !u.value,
                        "no-sidebar": !e.value.length,
                        "sidebar-open": t.value,
                    },
                    y.value.pageClass,
                ]);
            let c;
            pt(() => {
                c = qe().afterEach(() => {
                    r(!1);
                });
            }),
                Ft(() => {
                    c();
                });
            const l = Gt(),
                d = l.resolve,
                f = l.pending;
            return (v, h) => (
                O(),
                V(
                    "div",
                    {
                        class: ye(["theme-container", x(s)]),
                        onTouchstart: i,
                        onTouchend: a,
                    },
                    [
                        re(v.$slots, "navbar", {}, () => [
                            x(u)
                                ? (O(),
                                  se(
                                      Gr,
                                      { key: 0, onToggleSidebar: r },
                                      {
                                          before: fe(() => [
                                              re(v.$slots, "navbar-before"),
                                          ]),
                                          after: fe(() => [
                                              re(v.$slots, "navbar-after"),
                                          ]),
                                          _: 3,
                                      }
                                  ))
                                : ne("", !0),
                        ]),
                        X("div", {
                            class: "sidebar-mask",
                            onClick: h[0] || (h[0] = (E) => r(!1)),
                        }),
                        re(v.$slots, "sidebar", {}, () => [
                            Z(hn, null, {
                                top: fe(() => [re(v.$slots, "sidebar-top")]),
                                bottom: fe(() => [
                                    re(v.$slots, "sidebar-bottom"),
                                ]),
                                _: 3,
                            }),
                        ]),
                        re(v.$slots, "page", {}, () => [
                            x(y).home
                                ? (O(), se(cr, { key: 0 }))
                                : (O(),
                                  se(
                                      lt,
                                      {
                                          key: 1,
                                          name: "fade-slide-y",
                                          mode: "out-in",
                                          onBeforeEnter: x(d),
                                          onBeforeLeave: x(f),
                                      },
                                      {
                                          default: fe(() => [
                                              (O(),
                                              se(
                                                  un,
                                                  { key: x(k).path },
                                                  {
                                                      top: fe(() => [
                                                          re(
                                                              v.$slots,
                                                              "page-top"
                                                          ),
                                                      ]),
                                                      bottom: fe(() => [
                                                          re(
                                                              v.$slots,
                                                              "page-bottom"
                                                          ),
                                                      ]),
                                                      _: 3,
                                                  }
                                              )),
                                          ]),
                                          _: 3,
                                      },
                                      8,
                                      ["onBeforeEnter", "onBeforeLeave"]
                                  )),
                        ]),
                    ],
                    34
                )
            );
        },
    });
export { yn as default };
