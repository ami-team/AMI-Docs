import { a as e } from "./app.fffb5d3d.js";
import { _ as a } from "./plugin-vue_export-helper.21dcd24c.js";
const t = {},
    o = e(
        `<h1 id="generate-a-homepage" tabindex="-1"><a class="header-anchor" href="#generate-a-homepage" aria-hidden="true">#</a> Generate a homepage</h1><h2 id="synopsis" tabindex="-1"><a class="header-anchor" href="#synopsis" aria-hidden="true">#</a> Synopsis</h2><p>To create a new Homepage, you can use the <code>--create-home-page</code> command. You will be prompted for a title and an endpoint that should host an instance of the AMI Server.</p><p>For example :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./awf.py --create-home-page
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>If you would like to <strong>automate</strong> this process (to use with <em>Docker</em> for example) you can also specify the title and the endpoint thanks to the <code>--home-page-title</code> and <code>--home-page-endpoint</code> parameters :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./awf.py --create-home-page --home-page-title<span class="token operator">=</span>Home --home-page-endpoint<span class="token operator">=</span>https://my-ami-backend-url.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>By default, when using this command it will generate a homepage with Bootstrap 5, but you can choose which version of Bootstrap you would like to use by specifying the <code>--bootstrap-version</code>.</p><p>For example :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./awf.py --create-home-page --bootstrap-version<span class="token operator">=</span><span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="command-reference" tabindex="-1"><a class="header-anchor" href="#command-reference" aria-hidden="true">#</a> Command Reference</h2><table><thead><tr><th>Parameter</th><th>Shorthand</th><th>Description</th></tr></thead><tbody><tr><td>--create-home-page</td><td></td><td>Generate a new homepage</td></tr><tr><td>--home-page-title</td><td>-t</td><td>Fill in the title through the CLI</td></tr><tr><td>--home-page-endpoint</td><td>-p</td><td>Fill in the endpoint URL through the CLI</td></tr><tr><td>--bootstrap-version</td><td>-v</td><td>Specify the bootstrap version (4/5)</td></tr><tr><td>--verbose</td><td></td><td>Make the command verbose</td></tr></tbody></table>`,
        12
    );
function n(r, s) {
    return o;
}
var i = a(t, [["render", n]]);
export { i as default };
