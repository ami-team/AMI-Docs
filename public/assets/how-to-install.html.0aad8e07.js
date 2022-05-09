import { a } from "./app.fffb5d3d.js";
import { _ as e } from "./plugin-vue_export-helper.21dcd24c.js";
const s = {},
    n = a(
        `<h1 id="how-to-install-ami-web-framework" tabindex="-1"><a class="header-anchor" href="#how-to-install-ami-web-framework" aria-hidden="true">#</a> How to install AMI Web Framework</h1><p>First, create a new directory that will contain your future project :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> myproject <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> myproject
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Then, you will need to get the AMI Setup file, to do this, run :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -L https://raw.githubusercontent.com/ami-team/awfwebpack/master/tools/awf_stub.py <span class="token operator">&gt;</span> awf.py
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>This curl command should download for you a little script that will help you with the generation of your application.</p><div class="custom-container tip"><p class="custom-container-title">Information</p><p>Depending on your system, it may be necessary to grant more rights to the script you just downloaded. To do this you can run the following command:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chmod</span> +x awf.py
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><p>Now you should be able to run the script by running this command in your terminal.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>python ./awf.py
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>(On UNIX system you can just do ./awf.py)</p><p>If you get welcomed by an AMI ascii art, you are <strong>ready</strong> to go !</p>`,
        11
    );
function t(o, r) {
    return n;
}
var c = e(s, [["render", t]]);
export { c as default };
