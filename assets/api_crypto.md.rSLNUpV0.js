import{_ as l,c as n,j as e,a as s,G as i,a2 as r,B as p,o as d}from"./chunks/framework.BQmytedh.js";const C=JSON.parse('{"title":"Crypto","description":"","frontmatter":{"title":"Crypto","order":6},"headers":[],"relativePath":"api/crypto.md","filePath":"en/api/crypto.md","lastUpdated":1733444151000}'),o={name:"api/crypto.md"},h={id:"encrypt",tabindex:"-1"},k={id:"decrypt",tabindex:"-1"},u={id:"objectid",tabindex:"-1"},b={id:"md5hash",tabindex:"-1"},c={id:"sha1hash",tabindex:"-1"},g={id:"sha256hash",tabindex:"-1"},m={id:"encodebase64",tabindex:"-1"},y={id:"decodebase64",tabindex:"-1"},E={id:"strtonumberhash",tabindex:"-1"};function x(v,a,f,q,P,F){const t=p("Badge");return d(),n("div",null,[a[36]||(a[36]=e("h1",{id:"api-crypto",tabindex:"-1"},[s("API: Crypto "),e("a",{class:"header-anchor",href:"#api-crypto","aria-label":'Permalink to "API: Crypto"'},"​")],-1)),e("h2",h,[a[0]||(a[0]=e("code",null,"encrypt",-1)),a[1]||(a[1]=s()),i(t,{type:"tip",text:"JavaScript"}),a[2]||(a[2]=s()),a[3]||(a[3]=e("a",{class:"header-anchor",href:"#encrypt","aria-label":'Permalink to "`encrypt` <Badge type="tip" text="JavaScript" />"'},"​",-1))]),a[37]||(a[37]=r('<p>Encrypt with the algorithm of your choice (algorithm default: <code>aes-256-cbc</code>, ivSize default: <code>16</code>) using a string and a secret (secret).</p><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><ul><li><code>str::string</code></li><li><code>secret::string</code></li><li><code>algorithm::string || &#39;aes-256-cbc&#39;</code></li><li><code>ivSize::number || 16</code></li></ul><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><blockquote><p>string</p></blockquote><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">encrypt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;secret-key&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>',7)),e("h2",k,[a[4]||(a[4]=e("code",null,"decrypt",-1)),a[5]||(a[5]=s()),i(t,{type:"tip",text:"JavaScript"}),a[6]||(a[6]=s()),a[7]||(a[7]=e("a",{class:"header-anchor",href:"#decrypt","aria-label":'Permalink to "`decrypt` <Badge type="tip" text="JavaScript" />"'},"​",-1))]),a[38]||(a[38]=r('<p>Decrypt with the specified algorithm (default: <code>aes-256-cbc</code>) using a string and a secret (secret).</p><h3 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><ul><li><code>str::string</code></li><li><code>secret::string</code></li><li><code>algorithm::string || &#39;aes-256-cbc&#39;</code></li></ul><h3 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><blockquote><p>string</p></blockquote><h3 id="examples-1" tabindex="-1">Examples <a class="header-anchor" href="#examples-1" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">decrypt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;61ba43b65fc...&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;secret-key&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>',7)),e("h2",u,[a[8]||(a[8]=e("code",null,"objectId",-1)),a[9]||(a[9]=s()),i(t,{type:"tip",text:"JavaScript"}),i(t,{type:"info",text:"Dart"}),a[10]||(a[10]=s()),a[11]||(a[11]=e("a",{class:"header-anchor",href:"#objectid","aria-label":'Permalink to "`objectId` <Badge type="tip" text="JavaScript" /><Badge type="info" text="Dart" />"'},"​",-1))]),a[39]||(a[39]=r('<p>Returns a random string hash of the ObjectId format (primarily utilized by MongoDB).</p><h3 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>No parameters required</p><h3 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><blockquote><p>string</p></blockquote><h3 id="examples-2" tabindex="-1">Examples <a class="header-anchor" href="#examples-2" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">objectId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Returns &#39;651372605b49507aea707488&#39;</span></span></code></pre></div>',7)),e("h2",b,[a[12]||(a[12]=e("code",null,"md5Hash",-1)),a[13]||(a[13]=s()),i(t,{type:"tip",text:"JavaScript"}),i(t,{type:"info",text:"Dart"}),a[14]||(a[14]=s()),a[15]||(a[15]=e("a",{class:"header-anchor",href:"#md5hash","aria-label":'Permalink to "`md5Hash` <Badge type="tip" text="JavaScript" /><Badge type="info" text="Dart" />"'},"​",-1))]),a[40]||(a[40]=r('<p>Converts String data to md5 hash value and returns it.</p><h3 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><ul><li><code>str::string</code></li></ul><h3 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><blockquote><p>string</p></blockquote><h3 id="examples-3" tabindex="-1">Examples <a class="header-anchor" href="#examples-3" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">md5Hash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Returns &#39;098f6bcd4621d373cade4e832627b4f6&#39;</span></span></code></pre></div>',7)),e("h2",c,[a[16]||(a[16]=e("code",null,"sha1Hash",-1)),a[17]||(a[17]=s()),i(t,{type:"tip",text:"JavaScript"}),i(t,{type:"info",text:"Dart"}),a[18]||(a[18]=s()),a[19]||(a[19]=e("a",{class:"header-anchor",href:"#sha1hash","aria-label":'Permalink to "`sha1Hash` <Badge type="tip" text="JavaScript" /><Badge type="info" text="Dart" />"'},"​",-1))]),a[41]||(a[41]=r('<p>Converts String data to sha1 hash value and returns it.</p><h3 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><ul><li><code>str::string</code></li></ul><h3 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><blockquote><p>string</p></blockquote><h3 id="examples-4" tabindex="-1">Examples <a class="header-anchor" href="#examples-4" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sha1Hash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Returns &#39;a94a8fe5ccb19ba61c4c0873d391e987982fbbd3&#39;</span></span></code></pre></div>',7)),e("h2",g,[a[20]||(a[20]=e("code",null,"sha256Hash",-1)),a[21]||(a[21]=s()),i(t,{type:"tip",text:"JavaScript"}),i(t,{type:"info",text:"Dart"}),a[22]||(a[22]=s()),a[23]||(a[23]=e("a",{class:"header-anchor",href:"#sha256hash","aria-label":'Permalink to "`sha256Hash` <Badge type="tip" text="JavaScript" /><Badge type="info" text="Dart" />"'},"​",-1))]),a[42]||(a[42]=r('<p>Converts String data to sha256 hash value and returns it.</p><h3 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><ul><li><code>str::string</code></li></ul><h3 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><blockquote><p>string</p></blockquote><h3 id="examples-5" tabindex="-1">Examples <a class="header-anchor" href="#examples-5" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sha256Hash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Returns &#39;9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08&#39;</span></span></code></pre></div>',7)),e("h2",m,[a[24]||(a[24]=e("code",null,"encodeBase64",-1)),a[25]||(a[25]=s()),i(t,{type:"tip",text:"JavaScript"}),i(t,{type:"info",text:"Dart"}),a[26]||(a[26]=s()),a[27]||(a[27]=e("a",{class:"header-anchor",href:"#encodebase64","aria-label":'Permalink to "`encodeBase64` <Badge type="tip" text="JavaScript" /><Badge type="info" text="Dart" />"'},"​",-1))]),a[43]||(a[43]=r('<p>Base64-encode the given string.</p><h3 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><ul><li><code>str::string</code></li></ul><h3 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><blockquote><p>string</p></blockquote><h3 id="examples-6" tabindex="-1">Examples <a class="header-anchor" href="#examples-6" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">encodeBase64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;this is test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Returns &#39;dGhpcyBpcyB0ZXN0&#39;</span></span></code></pre></div>',7)),e("h2",y,[a[28]||(a[28]=e("code",null,"decodeBase64",-1)),a[29]||(a[29]=s()),i(t,{type:"tip",text:"JavaScript"}),i(t,{type:"info",text:"Dart"}),a[30]||(a[30]=s()),a[31]||(a[31]=e("a",{class:"header-anchor",href:"#decodebase64","aria-label":'Permalink to "`decodeBase64` <Badge type="tip" text="JavaScript" /><Badge type="info" text="Dart" />"'},"​",-1))]),a[44]||(a[44]=r('<p>Decodes an encoded base64 string to a plain string.</p><h3 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><ul><li><code>encodedStr::string</code></li></ul><h3 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><blockquote><p>string</p></blockquote><h3 id="examples-7" tabindex="-1">Examples <a class="header-anchor" href="#examples-7" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">decodeBase64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;dGhpcyBpcyB0ZXN0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Returns &#39;this is test&#39;</span></span></code></pre></div>',7)),e("h2",E,[a[32]||(a[32]=e("code",null,"strToNumberHash",-1)),a[33]||(a[33]=s()),i(t,{type:"tip",text:"JavaScript"}),i(t,{type:"info",text:"Dart"}),a[34]||(a[34]=s()),a[35]||(a[35]=e("a",{class:"header-anchor",href:"#strtonumberhash","aria-label":'Permalink to "`strToNumberHash` <Badge type="tip" text="JavaScript" /><Badge type="info" text="Dart" />"'},"​",-1))]),a[45]||(a[45]=r(`<p>Returns the specified string as a hash value of type number. The return value can also be negative.</p><h3 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><ul><li><code>str::string</code></li></ul><h3 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><blockquote><p>number</p></blockquote><h3 id="examples-8" tabindex="-1">Examples <a class="header-anchor" href="#examples-8" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">strToNumberHash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;abc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Returns 96354</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">strToNumberHash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Hello&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Returns 69609650</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">strToNumberHash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hello&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Returns 99162322</span></span></code></pre></div>`,7))])}const D=l(o,[["render",x]]);export{C as __pageData,D as default};
