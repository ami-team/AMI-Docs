import {
    r as o,
    o as r,
    c as s,
    d as e,
    e as n,
    w as d,
    F as i,
    f as t,
    a as c,
} from "./app.fffb5d3d.js";
import { _ as p } from "./plugin-vue_export-helper.21dcd24c.js";
const l = {},
    h = e(
        "h1",
        { id: "generate-a-subapp", tabindex: "-1" },
        [
            e(
                "a",
                {
                    class: "header-anchor",
                    href: "#generate-a-subapp",
                    "aria-hidden": "true",
                },
                "#"
            ),
            t(" Generate a subapp"),
        ],
        -1
    ),
    u = e(
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
    f = t(
        "A subapp represents a page of your website. A subapp is often composed of different "
    ),
    m = t("controls"),
    b = t(" ("),
    _ = e("em", null, "web components", -1),
    g = t(") embeded in a single page."),
    y = c(
        `<p>When you create a new subapp, the router will automatically take care of creating the corresponding route. For example, if you create a subapp called &quot;MyApp&quot;, you can access it at : <code>https://yourdomain.com/?subapp=MyApp</code>.</p><p>To get started with subapps, you can run the following command in your favorite terminal :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./awf.py --create-subapp
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>You will then be prompted to enter a title.</p><p>This command does the following :</p><ul><li>Creates a new folder in the subapp folder (located in the root of your project). This new folder is named like your subapp.</li><li>Inside this new folder, 3 files are generated, a Javascript file and a folder asset containing a CSS file and a TWIG file.</li><li>Modifies the SUBAPPS.json file. (Learn more here)</li><li>Updates the webpack.config.js file to build the new subapp.</li></ul><h2 id="command-reference" tabindex="-1"><a class="header-anchor" href="#command-reference" aria-hidden="true">#</a> Command Reference</h2><table><thead><tr><th>Parameter</th><th>Shorthand</th><th>Description</th></tr></thead><tbody><tr><td>--create-subapp</td><td></td><td>Generate a new subapp</td></tr><tr><td>--bootstrap-version</td><td>-v</td><td>Specify the bootstrap version for your subapp (4/5)</td></tr><tr><td>--source-code-flavour</td><td>-f</td><td>Choose the source code flavour (legacy/module/vue-js)</td></tr></tbody></table>`,
        8
    );
function w(v, x) {
    const a = o("RouterLink");
    return (
        r(),
        s(
            i,
            null,
            [
                h,
                u,
                e("p", null, [
                    f,
                    n(
                        a,
                        {
                            to: "/documentation/getting-started/generate-control.html/",
                        },
                        { default: d(() => [m]), _: 1 }
                    ),
                    b,
                    _,
                    g,
                ]),
                y,
            ],
            64
        )
    );
}
var C = p(l, [["render", w]]);
export { C as default };
