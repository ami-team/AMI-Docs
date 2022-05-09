import {
    r as o,
    o as n,
    c as s,
    d as e,
    e as a,
    F as i,
    a as d,
    f as t,
} from "./app.fffb5d3d.js";
import { _ as c } from "./plugin-vue_export-helper.21dcd24c.js";
const l = {},
    g = d(
        '<h1 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h1><p><strong>AMI</strong> which stands for <strong>A</strong>TLAS <strong>M</strong>etadata <strong>I</strong>nterface is a lightweight Javascript frontend library, designed to help developers create user interfaces easily.</p><p>Originally developed for the ATLAS experiment at the CERN Large Hadron Collider (LHC), ATLAS Metadata Interface (<strong>AMI</strong>) is a generic ecosystem for metadata aggregation, transformation and database storing. Benefiting from about 20 years of feedback, it provides a wide array of tools (command line tools, lightweight clients) and Web interfaces for searching data by metadata criteria.</p><h2 id="ami-ecosystem" tabindex="-1"><a class="header-anchor" href="#ami-ecosystem" aria-hidden="true">#</a> AMI Ecosystem</h2><p><strong>AMI</strong> is an ecosystem of pieces of software dedicated to metadata in a big data context. It consists of:</p><ul><li><p><strong>AMI Java Core</strong>: the server-side core library. It contains high-level primitives for aggregating, processing and storing metadata and for searching data by metadata criteria.</p></li><li><p><strong>AMI Web Core</strong>: based on <strong>AMI</strong> Java Core and Java servlet, it provides a proprietary HTTP service and an alternative REST API for accessing the whole AMIcontent.</p></li><li><p><strong>AMI Task Server</strong>: a handy scheduler for running metadata aggregation / processing tasks from heterogeneous primary data sources in a distributed way.</p></li><li><p><strong>AMI Web Framework</strong>: a Web framework for developing metadata-oriented applications. It is designed to be used with the <strong>AMI</strong> Web Core or in a standalone way.</p></li><li><p>A set of lightweight clients for accessing the <strong>AMI</strong> HTTP service from anywhere (C, C++, Java, JavaScript, Python..)</p></li></ul><h2 id="prerequisites-for-ami-web-framework" tabindex="-1"><a class="header-anchor" href="#prerequisites-for-ami-web-framework" aria-hidden="true">#</a> Prerequisites for AMI Web Framework</h2>',
        7
    ),
    h = {
        href: "https://nodejs.org/en/",
        target: "_blank",
        rel: "noopener noreferrer",
    },
    f = t("NPM"),
    p = t(" (> version 6)"),
    m = {
        href: "https://git-scm.com/",
        target: "_blank",
        rel: "noopener noreferrer",
    },
    _ = t("Git"),
    u = {
        href: "https://www.python.org/",
        target: "_blank",
        rel: "noopener noreferrer",
    },
    b = t("Python 2"),
    y = t(" (Python 3 is prefered)");
function v(I, w) {
    const r = o("ExternalLinkIcon");
    return (
        n(),
        s(
            i,
            null,
            [
                g,
                e("ul", null, [
                    e("li", null, [e("a", h, [f, a(r)]), p]),
                    e("li", null, [e("a", m, [_, a(r)])]),
                    e("li", null, [e("a", u, [b, a(r)]), y]),
                ]),
            ],
            64
        )
    );
}
var k = c(l, [["render", v]]);
export { k as default };
