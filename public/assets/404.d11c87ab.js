import {
    g as i,
    u as _,
    h as p,
    r as f,
    o as k,
    c as v,
    d as o,
    t as c,
    e as L,
    w as g,
    i as l,
    f as x,
} from "./app.fffb5d3d.js";
const B = { class: "theme-container" },
    N = { class: "theme-default-content" },
    T = o("h1", null, "404", -1),
    b = i({
        setup(C) {
            var a, s, n;
            const u = _(),
                e = p(),
                t = (a = e.value.notFound) != null ? a : ["Not Found"],
                r = () => t[Math.floor(Math.random() * t.length)],
                h = (s = e.value.home) != null ? s : u.value,
                m = (n = e.value.backToHome) != null ? n : "Back to home";
            return (M, R) => {
                const d = f("RouterLink");
                return (
                    k(),
                    v("div", B, [
                        o("div", N, [
                            T,
                            o("blockquote", null, c(r()), 1),
                            L(
                                d,
                                { to: l(h) },
                                { default: g(() => [x(c(l(m)), 1)]), _: 1 },
                                8,
                                ["to"]
                            ),
                        ]),
                    ])
                );
            };
        },
    });
export { b as default };
