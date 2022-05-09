import {
    r as o,
    o as s,
    c as d,
    d as e,
    e as a,
    w as l,
    F as i,
    f as t,
    a as c,
} from "./app.fffb5d3d.js";
import { _ as h } from "./plugin-vue_export-helper.21dcd24c.js";
const p = {},
    u = e(
        "h1",
        { id: "generate-a-control", tabindex: "-1" },
        [
            e(
                "a",
                {
                    class: "header-anchor",
                    href: "#generate-a-control",
                    "aria-hidden": "true",
                },
                "#"
            ),
            t(" Generate a control"),
        ],
        -1
    ),
    f = e(
        "h2",
        { id: "synopsis", tabindex: "-1" },
        [
            e(
                "a",
                {
                    class: "header-anchor",
                    href: "#synopsis",
                    "aria-hidden": "true",
                },
                "#"
            ),
            t(" Synopsis"),
        ],
        -1
    ),
    m = t(
        "A control (commonly called a component) is a set of reusable custom elements. (It's the same concept as the "
    ),
    _ = {
        href: "https://developer.mozilla.org/en-US/docs/Web/Web_Components",
        target: "_blank",
        rel: "noopener noreferrer",
    },
    b = t("Web Component"),
    g = t(")."),
    y = e(
        "p",
        null,
        "To get started with controls, run the following command in your terminal :",
        -1
    ),
    w = e(
        "div",
        { class: "language-bash ext-sh line-numbers-mode" },
        [
            e("pre", { class: "language-bash" }, [
                e(
                    "code",
                    null,
                    `./awf.py --create-control
`
                ),
            ]),
            e("div", { class: "line-numbers", "aria-hidden": "true" }, [
                e("span", { class: "line-number" }, "1"),
                e("br"),
            ]),
        ],
        -1
    ),
    v = t("As for the "),
    x = t("subapps"),
    k = t(
        ", you will be prompted for a title, and the command will automatically generate necessary files for you :"
    ),
    C = c(
        '<ul><li>Creates a new folder in the subapp folder (located in the root of your project). This new folder is named like your subapp.</li><li>Inside this new folder, 3 files are generated, a Javascript file and a folder asset containing a CSS file and a TWIG file.</li><li>Modifies the SUBAPPS.json file. (Learn more here)</li><li>Updates the webpack.config.js file to build the new subapp.</li></ul><h2 id="command-reference" tabindex="-1"><a class="header-anchor" href="#command-reference" aria-hidden="true">#</a> Command Reference</h2><table><thead><tr><th>Parameter</th><th>Shorthand</th><th>Description</th></tr></thead><tbody><tr><td>--create-control</td><td></td><td>Generate a new control</td></tr><tr><td>--bootstrap-version</td><td>-v</td><td>Specify the bootstrap version for your subapp (4/5)</td></tr><tr><td>--source-code-flavour</td><td>-f</td><td>Choose the source code flavour (legacy/module/vue-js)</td></tr></tbody></table>',
        3
    );
function S(I, L) {
    const n = o("ExternalLinkIcon"),
        r = o("RouterLink");
    return (
        s(),
        d(
            i,
            null,
            [
                u,
                f,
                e("p", null, [m, e("a", _, [b, a(n)]), g]),
                y,
                w,
                e("p", null, [
                    v,
                    a(
                        r,
                        {
                            to: "/documentation/getting-started/generate-subapp.html/",
                        },
                        { default: l(() => [x]), _: 1 }
                    ),
                    k,
                ]),
                C,
            ],
            64
        )
    );
}
var N = h(p, [["render", S]]);
export { N as default };
