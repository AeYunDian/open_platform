import{_ as s,H as n,f as t,i as e}from"./chunks/framework.DLd0CbzH.js";const d=JSON.parse('{"title":"平台简介","description":"","frontmatter":{},"headers":[],"relativePath":"guide/index.md","filePath":"guide/index.md","lastUpdated":1780719479000}'),p={name:"guide/index.md"};function o(i,a,l,u,q,c){return n(),t("div",null,[...a[0]||(a[0]=[e(`<h1 id="平台简介" tabindex="-1">平台简介 <a class="header-anchor" href="#平台简介" aria-label="Permalink to &quot;平台简介&quot;">​</a></h1><p>Ay开放平台是一个为个人开发者打造的统一API服务平台，提供稳定、易用的HTTP API接口。 Ay开放平台主打无限制，秉持三个不，不限制次数、不限制频率、不需认证。</p><h2 id="服务列表" tabindex="-1">服务列表 <a class="header-anchor" href="#服务列表" aria-label="Permalink to &quot;服务列表&quot;">​</a></h2><table tabindex="0"><thead><tr><th>API名称</th><th>描述</th><th>状态</th></tr></thead><tbody><tr><td>短链解析</td><td>自定义短链服务，将短链码还原为原始完整URL</td><td>🟢 运行</td></tr><tr><td>添加QQ好友</td><td>生成QQ好友添加链接，双端一键拉起QQ并跳转至添加页面</td><td>🟢 运行</td></tr><tr><td>IP归属地</td><td>获取IPv4/IPv6地址及IP的地理位置信息（国家、省份、城市、运营商）</td><td>🟢 运行</td></tr><tr><td>文本分享</td><td>文本暂存服务，保存、更新、删除文本，自动生成唯一访问ID，Base64编码存储</td><td>🟢 运行</td></tr><tr><td>二维码生成</td><td>生成二维码，直接返回 PNG / SVG / PDF 二进制数据</td><td>🟢 运行</td></tr><tr><td>邮件验证码</td><td>向指定邮箱发送验证码（目前暂停服务）</td><td>🔴 暂停</td></tr></tbody></table><blockquote><p>更多服务敬请期待，您也可以<a href="https://github.com/AeYunDian/open_platform/issues/new?template=feature_request.md" target="_blank" rel="noreferrer">点击这里</a>向我提交需求</p></blockquote><h2 id="api-基础信息" tabindex="-1">API 基础信息 <a class="header-anchor" href="#api-基础信息" aria-label="Permalink to &quot;API 基础信息&quot;">​</a></h2><h3 id="服务地址" tabindex="-1">服务地址 <a class="header-anchor" href="#服务地址" aria-label="Permalink to &quot;服务地址&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://api.undz.cn</span></span>
<span class="line"><span>https://api.io.hb.cn</span></span></code></pre></div><h3 id="请求格式" tabindex="-1">请求格式 <a class="header-anchor" href="#请求格式" aria-label="Permalink to &quot;请求格式&quot;">​</a></h3><p>大部分API请求和响应使用 <strong>JSON</strong> 格式，但请以接口文档界面为主。</p><h2 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h2><h3 id="_1-寻找您感兴趣的api" tabindex="-1">1. 寻找您感兴趣的API <a class="header-anchor" href="#_1-寻找您感兴趣的api" aria-label="Permalink to &quot;1. 寻找您感兴趣的API&quot;">​</a></h3><p>在 <a href="#服务列表">服务列表</a> 内寻找您感兴趣的API</p><h3 id="_2-查看接口详细信息" tabindex="-1">2. 查看接口详细信息 <a class="header-anchor" href="#_2-查看接口详细信息" aria-label="Permalink to &quot;2. 查看接口详细信息&quot;">​</a></h3><p>选择API后（此处使用 <a href="/api/ip.html">IP归属地</a> 示范）</p><h3 id="_3-发起第一个请求" tabindex="-1">3. 发起第一个请求 <a class="header-anchor" href="#_3-发起第一个请求" aria-label="Permalink to &quot;3. 发起第一个请求&quot;">​</a></h3><p>在命令行中尝试调用IP归属地API：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GET</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://api.undz.cn/ip</span></span></code></pre></div><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Invoke-RestMethod</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Uri </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://api.undz.cn/ip&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Method GET</span></span></code></pre></div><p>返回示例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;code&quot;: 200,</span></span>
<span class="line"><span>  &quot;ip&quot;: &quot;1234:123:1234:1234:1234:1234:1234:1233&quot;,</span></span>
<span class="line"><span>  &quot;httpProtocol&quot;: &quot;HTTP/2&quot;,</span></span>
<span class="line"><span>  &quot;clientAcceptEncoding&quot;: &quot;gzip, deflate, br&quot;,</span></span>
<span class="line"><span>  &quot;requestPriority&quot;: &quot;weight=256;exclusive=1&quot;,</span></span>
<span class="line"><span>  &quot;edgeRequestKeepAliveStatus&quot;: 1,</span></span>
<span class="line"><span>  &quot;requestHeaderNames&quot;: {</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;clientTcpRtt&quot;: 242,</span></span>
<span class="line"><span>  &quot;clientQuicRtt&quot;: 0,</span></span>
<span class="line"><span>  &quot;colo&quot;: &quot;AMS&quot;,</span></span>
<span class="line"><span>  &quot;asn&quot;: 4134,</span></span>
<span class="line"><span>  &quot;asOrganization&quot;: &quot;Chinatelecom IPv6 address for fixed broadband&quot;,</span></span>
<span class="line"><span>  &quot;country&quot;: &quot;CN&quot;,</span></span>
<span class="line"><span>  &quot;isEUCountry&quot;: false,</span></span>
<span class="line"><span>  &quot;city&quot;: &quot;Xiaogan&quot;,</span></span>
<span class="line"><span>  &quot;continent&quot;: &quot;AS&quot;,</span></span>
<span class="line"><span>  &quot;region&quot;: &quot;Hubei&quot;,</span></span>
<span class="line"><span>  &quot;regionCode&quot;: &quot;HB&quot;,</span></span>
<span class="line"><span>  &quot;timezone&quot;: &quot;Asia/Shanghai&quot;,</span></span>
<span class="line"><span>  &quot;longitude&quot;: &quot;114.26667&quot;,</span></span>
<span class="line"><span>  &quot;latitude&quot;: &quot;30.58333&quot;,</span></span>
<span class="line"><span>  &quot;postalCode&quot;: &quot;430000&quot;,</span></span>
<span class="line"><span>  &quot;tlsVersion&quot;: &quot;TLSv1.3&quot;,</span></span>
<span class="line"><span>  &quot;tlsCipher&quot;: &quot;AEAD-AES128-GCM-SHA256&quot;,</span></span>
<span class="line"><span>  &quot;tlsClientRandom&quot;: &quot;xugU+B2gqofwmBtN/Z+f1QrFuelut4jRl7ToyBsQvR4=&quot;,</span></span>
<span class="line"><span>  &quot;tlsClientCiphersSha1&quot;: &quot;cG3ksVXz5z5aMztJKpmN9By5SR8=&quot;,</span></span>
<span class="line"><span>  &quot;tlsClientExtensionsSha1&quot;: &quot;diWqP03GCE33buU7R6gv3FcVht0=&quot;,</span></span>
<span class="line"><span>  &quot;tlsClientExtensionsSha1Le&quot;: &quot;JX/K0EUV3q2Ntt2FDmFgR7yh6mk=&quot;,</span></span>
<span class="line"><span>  &quot;tlsExportedAuthenticator&quot;: {</span></span>
<span class="line"><span>    &quot;clientHandshake&quot;: &quot;8657248af6040de556bfe380a20dc3b1a79e1d44f78572eb15e0d31797dcfabb&quot;,</span></span>
<span class="line"><span>    &quot;serverHandshake&quot;: &quot;60006d6c306d36be90ca929b37f4716e4f6e111fe0930dcdf36ef4e764a8442d&quot;,</span></span>
<span class="line"><span>    &quot;clientFinished&quot;: &quot;3ec2ce63e15e8609db9cf89f2748d5a020a464c742ef203f581a60cc5a5d2dba&quot;,</span></span>
<span class="line"><span>    &quot;serverFinished&quot;: &quot;84247b644360dc90b7a64ea8c2fd49414c463d5e07f7e3ba6aa0a78e9878ea24&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;tlsClientHelloLength&quot;: &quot;1758&quot;,</span></span>
<span class="line"><span>  &quot;tlsClientAuth&quot;: {</span></span>
<span class="line"><span>    &quot;certPresented&quot;: &quot;0&quot;,</span></span>
<span class="line"><span>    &quot;certVerified&quot;: &quot;NONE&quot;,</span></span>
<span class="line"><span>    &quot;certRevoked&quot;: &quot;0&quot;,</span></span>
<span class="line"><span>    &quot;certIssuerDN&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;certSubjectDN&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;certIssuerDNRFC2253&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;certSubjectDNRFC2253&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;certIssuerDNLegacy&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;certSubjectDNLegacy&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;certSerial&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;certIssuerSerial&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;certSKI&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;certIssuerSKI&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;certFingerprintSHA1&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;certFingerprintSHA256&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;certNotBefore&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;certNotAfter&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;certRFC9440&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;certRFC9440TooLarge&quot;: false,</span></span>
<span class="line"><span>    &quot;certChainRFC9440&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;certChainRFC9440TooLarge&quot;: false</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;verifiedBotCategory&quot;: &quot;&quot;,</span></span>
<span class="line"><span>  &quot;edgeL4&quot;: {</span></span>
<span class="line"><span>    &quot;deliveryRate&quot;: 16677</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="下一步" tabindex="-1">下一步 <a class="header-anchor" href="#下一步" aria-label="Permalink to &quot;下一步&quot;">​</a></h2><ul><li>查看 <a href="/api/">API 参考</a>了解各接口详细说明</li><li>遇到问题请参考 <a href="/guide/faq.html">常见问题</a>或在GitHub提交Issue</li></ul><h2 id="相关链接" tabindex="-1">相关链接 <a class="header-anchor" href="#相关链接" aria-label="Permalink to &quot;相关链接&quot;">​</a></h2><ul><li><a href="https://github.com/AeYunDian/api" target="_blank" rel="noreferrer">GitHub 仓库</a></li></ul>`,25)])])}const h=s(p,[["render",o]]);export{d as __pageData,h as default};
