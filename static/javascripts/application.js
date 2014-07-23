!function(e){"use strict";e('a[rel*="external"]').click(function(){e(this).attr("target","_blank")}),e("a[href*=#]").click(function(t){var n=e(this).attr("href").replace("#","");e("html, body").animate({scrollTop:e("a[name="+n+"]").offset().top},1e3),t.preventDefault()})}(jQuery,window,document),+function(e){"use strict";var t=function(n,i){this.options=e.extend({},t.DEFAULTS,i),this.$window=e(window).on("scroll.bs.affix.data-api",e.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",e.proxy(this.checkPositionWithEventLoop,this)),this.$element=e(n),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};t.RESET="affix affix-top affix-bottom",t.DEFAULTS={offset:0},t.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(t.RESET).addClass("affix");var e=this.$window.scrollTop(),n=this.$element.offset();return this.pinnedOffset=n.top-e},t.prototype.checkPositionWithEventLoop=function(){setTimeout(e.proxy(this.checkPosition,this),1)},t.prototype.checkPosition=function(){if(this.$element.is(":visible")){var n=e(document).height(),i=this.$window.scrollTop(),a=this.$element.offset(),r=this.options.offset,s=r.top,o=r.bottom;"top"==this.affixed&&(a.top+=i),"object"!=typeof r&&(o=s=r),"function"==typeof s&&(s=r.top(this.$element)),"function"==typeof o&&(o=r.bottom(this.$element));var l=null!=this.unpin&&i+this.unpin<=a.top?!1:null!=o&&a.top+this.$element.height()>=n-o?"bottom":null!=s&&s>=i?"top":!1;if(this.affixed!==l){this.unpin&&this.$element.css("top","");var c="affix"+(l?"-"+l:""),g=e.Event(c+".bs.affix");this.$element.trigger(g),g.isDefaultPrevented()||(this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(t.RESET).addClass(c).trigger(e.Event(c.replace("affix","affixed"))),"bottom"==l&&this.$element.offset({top:n-o-this.$element.height()}))}}};var n=e.fn.affix;e.fn.affix=function(n){return this.each(function(){var i=e(this),a=i.data("bs.affix"),r="object"==typeof n&&n;a||i.data("bs.affix",a=new t(this,r)),"string"==typeof n&&a[n]()})},e.fn.affix.Constructor=t,e.fn.affix.noConflict=function(){return e.fn.affix=n,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),n=t.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),t.affix(n)})})}(jQuery),function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var i={};for(var a in e)e.hasOwnProperty(a)&&(i[a]=t.util.clone(e[a]));return i;case"Array":return e.slice()}return e}},languages:{extend:function(e,n){var i=t.util.clone(t.languages[e]);for(var a in n)i[a]=n[a];return i},insertBefore:function(e,n,i,a){a=a||t.languages;var r=a[e],s={};for(var o in r)if(r.hasOwnProperty(o)){if(o==n)for(var l in i)i.hasOwnProperty(l)&&(s[l]=i[l]);s[o]=r[o]}return a[e]=s},DFS:function(e,n){for(var i in e)n.call(e,i,e[i]),"Object"===t.util.type(e)&&t.languages.DFS(e[i],n)}},highlightAll:function(e,n){for(var i,a=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),r=0;i=a[r++];)t.highlightElement(i,e===!0,n)},highlightElement:function(i,a,r){for(var s,o,l=i;l&&!e.test(l.className);)l=l.parentNode;if(l&&(s=(l.className.match(e)||[,""])[1],o=t.languages[s]),o){i.className=i.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,l=i.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+s);var c=i.textContent;if(c){c=c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ");var g={element:i,language:s,grammar:o,code:c};if(t.hooks.run("before-highlight",g),a&&self.Worker){var f=new Worker(t.filename);f.onmessage=function(e){g.highlightedCode=n.stringify(JSON.parse(e.data),s),t.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,r&&r.call(g.element),t.hooks.run("after-highlight",g)},f.postMessage(JSON.stringify({language:g.language,code:g.code}))}else g.highlightedCode=t.highlight(g.code,g.grammar,g.language),t.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,r&&r.call(i),t.hooks.run("after-highlight",g)}}},highlight:function(e,i,a){return n.stringify(t.tokenize(e,i),a)},tokenize:function(e,n){var i=t.Token,a=[e],r=n.rest;if(r){for(var s in r)n[s]=r[s];delete n.rest}e:for(var s in n)if(n.hasOwnProperty(s)&&n[s]){var o=n[s],l=o.inside,c=!!o.lookbehind,g=0;o=o.pattern||o;for(var f=0;f<a.length;f++){var u=a[f];if(a.length>e.length)break e;if(!(u instanceof i)){o.lastIndex=0;var p=o.exec(u);if(p){c&&(g=p[1].length);var h=p.index-1+g,p=p[0].slice(g),d=p.length,m=h+d,y=u.slice(0,h+1),k=u.slice(m+1),b=[f,1];y&&b.push(y);var w=new i(s,l?t.tokenize(p,l):p);b.push(w),k&&b.push(k),Array.prototype.splice.apply(a,b)}}}}return a},hooks:{all:{},add:function(e,n){var i=t.hooks.all;i[e]=i[e]||[],i[e].push(n)},run:function(e,n){var i=t.hooks.all[e];if(i&&i.length)for(var a,r=0;a=i[r++];)a(n)}}},n=t.Token=function(e,t){this.type=e,this.content=t};if(n.stringify=function(e,i,a){if("string"==typeof e)return e;if("[object Array]"==Object.prototype.toString.call(e))return e.map(function(t){return n.stringify(t,i,e)}).join("");var r={type:e.type,content:n.stringify(e.content,i,a),tag:"span",classes:["token",e.type],attributes:{},language:i,parent:a};"comment"==r.type&&(r.attributes.spellcheck="true"),t.hooks.run("wrap",r);var s="";for(var o in r.attributes)s+=o+'="'+(r.attributes[o]||"")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'" '+s+">"+r.content+"</"+r.tag+">"},!self.document)return void self.addEventListener("message",function(e){var n=JSON.parse(e.data),i=n.language,a=n.code;self.postMessage(JSON.stringify(t.tokenize(a,t.languages[i]))),self.close()},!1);var i=document.getElementsByTagName("script");i=i[i.length-1],i&&(t.filename=i.src,document.addEventListener&&!i.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll))}(),Prism.languages.markup={comment:/&lt;!--[\w\W]*?-->/g,prolog:/&lt;\?.+?\?>/,doctype:/&lt;!DOCTYPE.+?>/,cdata:/&lt;!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/gi,inside:{tag:{pattern:/^&lt;\/?[\w:-]+/i,inside:{punctuation:/^&lt;\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|>|"/g}},punctuation:/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/&amp;#?[\da-z]{1,8};/gi},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*{))/gi,inside:{punctuation:/[;:]/g}},url:/url\((["']?).*?\1\)/gi,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/g,property:/(\b|\B)[\w-]+(?=\s*:)/gi,string:/("|')(\\?.)*?\1/g,important:/\B!important\b/gi,ignore:/&(lt|gt|amp);/gi,punctuation:/[\{\};:]/g},Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{style:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/gi,inside:{tag:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css}}}),Prism.languages.clike={comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g,lookbehind:!0},string:/("|')(\\?.)*?\1/g,"class-name":{pattern:/((?:class|interface|extends|implements|trait|instanceof|new)\s+)[a-z0-9_\.\\]+/gi,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,"function":{pattern:/[a-z0-9_]+\(/gi,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,operator:/[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|catch|finally|null|break|continue)\b/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/gi,inside:{tag:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript}}}),function(){if(self.Prism&&self.document&&document.querySelector){var e={js:"javascript",html:"markup",svg:"markup"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){var n=t.getAttribute("data-src"),i=(n.match(/\.(\w+)$/)||[,""])[1],a=e[i]||i,r=document.createElement("code");r.className="language-"+a,t.textContent="",r.textContent="Loading…",t.appendChild(r);var s=new XMLHttpRequest;s.open("GET",n,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(r.textContent=s.responseText,Prism.highlightElement(r)):r.textContent=s.status>=400?"✖ Error "+s.status+" while fetching file: "+s.statusText:"✖ Error: File does not exist or is empty")},s.send(null)})}}(),Prism.languages.php=Prism.languages.extend("clike",{keyword:/\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|extends|private|protected|parent|static|throw|null|echo|print|trait|namespace|use|final|yield|goto|instanceof|finally|try|catch)\b/gi,constant:/\b[A-Z0-9_]{2,}\b/g}),Prism.languages.insertBefore("php","keyword",{delimiter:/(\?>|&lt;\?php|&lt;\?)/gi,variable:/(\$\w+)\b/gi,"package":{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/g,lookbehind:!0,inside:{punctuation:/\\/}}}),Prism.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/g,lookbehind:!0}}),Prism.languages.markup&&(Prism.hooks.add("before-highlight",function(e){"php"===e.language&&(e.tokenStack=[],e.code=e.code.replace(/(?:&lt;\?php|&lt;\?|<\?php|<\?)[\w\W]*?(?:\?&gt;|\?>)/gi,function(t){return e.tokenStack.push(t),"{{{PHP"+e.tokenStack.length+"}}}"}))}),Prism.hooks.add("after-highlight",function(e){if("php"===e.language){for(var t,n=0;t=e.tokenStack[n];n++)e.highlightedCode=e.highlightedCode.replace("{{{PHP"+(n+1)+"}}}",Prism.highlight(t,e.grammar,"php"));e.element.innerHTML=e.highlightedCode}}),Prism.hooks.add("wrap",function(e){"php"===e.language&&"markup"===e.type&&(e.content=e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g,'<span class="token php">$1</span>'))}),Prism.languages.insertBefore("php","comment",{markup:{pattern:/(&lt;|<)[^?]\/?(.*?)(>|&gt;)/g,inside:Prism.languages.markup},php:/\{\{\{PHP[0-9]+\}\}\}/g}));