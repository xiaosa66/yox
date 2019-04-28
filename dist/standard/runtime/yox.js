!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Yox=e()}(this,function(){"use strict";var t=!0,e=!1,n=null,r=void 0,i="component",o="transition",u="length",c="function",a="undefined"!=typeof window?window:r,f="undefined"!=typeof document?document:r,s=function(){},p={},v=[],d="";function h(t){return t!==r}var l=Object.prototype.toString;function m(t,e){return"numeric"===e?w(t):l.call(t).toLowerCase()==="[object "+e+"]"}function y(t){return typeof t===c}function g(t){return Array.isArray(t)}function x(t){return t!==n&&"object"==typeof t}function $(t){return"string"==typeof t}function b(t){return"number"==typeof t}function k(t){return"boolean"==typeof t}function w(t){return b(t)||$(t)&&!isNaN(parseFloat(t))&&isFinite(t)}var C=Object.freeze({is:m,func:y,array:g,object:x,string:$,number:b,boolean:k,numeric:w});function T(t,e,n){if(y(t))return g(n)?t.apply(e,n):h(e)?t.call(e,n):h(n)?t(n):t()}var E=function(t,e){this.type=t,this.originalEvent=e};function A(t,n,r){var i=t.length;if(i)if(r)for(var o=i-1;o>=0&&n(t[o],o,t)!==e;o--);else for(var u=0;u<i&&n(t[u],u,t)!==e;u++);}function O(t,e){return t.join(e)}function P(t,e){t[t.length]=e}function S(t,e){t.unshift(e)}function j(t,e,n){g(e)?A(e,function(e){n(t,e)}):n(t,e)}function z(t,e){j(t,e,P)}function L(t,e){j(t,e,S)}function N(t){return g(t)?t:T([].slice,t)}function q(t,e,n){var r={};return A(t,function(t){r[e?t[e]:t]=n||t}),r}function M(t,n,r){var i=-1;return A(t,function(t,o){if(r===e?t==n:t===n)return i=o,e}),i}function I(t,e,n){return M(t,e,n)>=0}function D(t){var e=t.length;if(e>0)return t[e-1]}function U(t){return t.pop()}function Y(n,r,i){var o=0;return A(n,function(t,u){(i===e?t==r:t===r)&&(n.splice(u,1),o++)},t),o}function K(t){return!g(t)||!t.length}E.prototype.preventDefault=function(){if(!this.isPrevented){var e=this.originalEvent;e&&e.preventDefault(),this.isPrevented=t}return this},E.prototype.stopPropagation=function(){if(!this.isStoped){var e=this.originalEvent;e&&e.stopPropagation(),this.isStoped=t}return this},E.prototype.prevent=function(){return this.preventDefault()},E.prototype.stop=function(){return this.stopPropagation()};var B=Object.freeze({each:A,join:O,push:z,unshift:L,toArray:N,toObject:q,indexOf:M,has:I,last:D,pop:U,remove:Y,falsy:K}),F=/-([a-z])/gi,H=/\B([A-Z])/g,W={},G={};function J(t,e,n){return b(n)?e===n?d:t.slice(e,n):t.slice(e)}function R(t,e,n){return t.indexOf(e,h(n)?n:0)}function Z(t,e,n){return t.lastIndexOf(e,h(n)?n:t.length)}function _(t,e){return R(t,e)>=0}function Q(t,e){return 0===R(t,e)}function V(t,e){return t.charCodeAt(e||0)}function X(t){return!$(t)||!t.length}var tt=Object.freeze({camelize:function(t){return W[t]||(W[t]=t.replace(F,function(t,e){return e.toUpperCase()})),W[t]},hyphenate:function(t){return G[t]||(G[t]=t.replace(H,function(t,e){return"-"+e.toLowerCase()})),G[t]},trim:function(t){return X(t)?d:t.trim()},slice:J,indexOf:R,lastIndexOf:Z,has:_,startsWith:Q,endsWith:function(t,e){var n=t.length-e.length;return n>=0&&Z(t,e)===n},charAt:function(t,e){return t.charAt(e||0)},codeAt:V,falsy:X}),et=".",nt={},rt={};function it(t,e){return t===e?e.length:Q(t,e+=et)?e.length:-1}function ot(t,n){for(var r=$(nt[t])?nt[t]:nt[t]=t.split(et),i=0,o=r.length-1;i<=o&&n(r[i],i===o)!==e;i++);}function ut(t,e){return t&&e?t+et+e:t||e}function ct(t){return _(t,"*")}function at(t,e){var n=rt[e];n||(n=e.replace(/\./g,"\\.").replace(/\*\*/g,"([.\\w]+?)").replace(/\*/g,"(\\w+)"),n=rt[e]=new RegExp("^"+n+"$"));var r=t.match(n);if(r)return r[1]}function ft(t){return Object.keys(t)}function st(t){return!x(t)||g(t)||!ft(t).length}function pt(t,e){return t.length-e.length}function vt(t,e){return e.length-t.length}function dt(t,e){return ft(t).sort(e?vt:pt)}function ht(t,n){for(var r in t)if(n(t[r],r)===e)break}function lt(t,e){return h(t[e])||t.hasOwnProperty(e)}function mt(t){ht(t,function(e,n){delete t[n]})}function yt(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];return A(e,function(e){ht(e,function(e,n){t[n]=e})}),t}function gt(t,e){var n=t;return g(t)?e?(n=[],A(t,function(t,r){n[r]=gt(t,e)})):n=t.slice():x(t)&&(n={},ht(t,function(t,r){n[r]=e?gt(t,e):t})),n}var xt={};function $t(t,i){return ot(i,function(i,o){if(t==n)return t=r,e;var u=t[i],c=h(u)||t.hasOwnProperty(i);u&&y(u.get)&&(u=u.get()),o?c?(xt.value=u,t=xt):t=r:t=u}),t}function bt(t,n,r,i){ot(n,function(n,o){if(o)t[n]=r;else if(t[n])t=t[n];else{if(!i)return e;t=t[n]={}}})}var kt=Object.freeze({keys:ft,falsy:st,sort:dt,each:ht,has:lt,clear:mt,extend:yt,copy:gt,get:$t,set:bt});function wt(t,e){return t!=n&&t.toString?t.toString():h(e)?e:d}var Ct="undefined"!=typeof console?console:n,Tt=/yox/.test(wt(s));function Et(){if(a){var t=a.DEBUG;if(k(t))return t}return Tt}function At(t){Ct&&Et()&&Ct.warn("[Yox warn]: "+t)}var Ot=Object.freeze({log:function(t){Ct&&Et()&&Ct.log("[Yox log]: "+t)},warn:At,error:function(t){Ct&&Ct.error("[Yox error]: "+t)},fatal:function(t){throw new Error("[Yox fatal]: "+t)}}),Pt=function(t){this.ns=t||e,this.listeners={}};function St(t,e){var n={name:e,ns:d};if(t){var r=R(e,".");r>=0&&(n.name=J(e,0,r),n.ns=J(e,r+1))}return n}function jt(e){return x(e)?function(t){return e===t}:y(e)?function(t){return e===t.fn}:function(e){return t}}function zt(t,e){return!t.length||t===e.ns}function Lt(t){return y(t)&&/native code/.test(wt(t))}Pt.prototype.fire=function(n,r,i){var o,u,c;n instanceof E?(o=n,u=n.type,c=x(r)?[o,r]:o):(u=n,r&&(c=r));var a=this,f=St(a.ns,u),s=f.name,p=f.ns,v=a.listeners[s],d=t;return v&&A(gt(v),function(t,n,f){if((i?i(t,r):zt(p,t))&&I(f,t)){o&&(o.listener=t.fn);var s=T(t.fn,t.ctx,c);return t.num=t.num?t.num+1:1,t.num===t.max&&a.off(u,t),o&&(s===e?o.prevent().stop():o.isStoped&&(s=e)),s===e?d=e:void 0}}),d},Pt.prototype.has=function(n,r){var i=this.listeners,o=St(this.ns,n),u=o.name,c=o.ns,a=t,f=jt(r),s=function(t){return A(t,function(t){if(f(t)&&zt(c,t))return a=e}),a};return u?i[u]&&s(i[u]):c&&ht(i,s),!a},Pt.prototype.on=function(t,e,n){var r=this,i=r.listeners,o=function(t,e){if(t){var o=y(t)?{fn:t}:t;if(x(o)&&y(o.fn)){n&&yt(o,n);var u=St(r.ns,e),c=u.name,a=u.ns;return o.ns=a,void z(i[c]||(i[c]=[]),o)}}};$(t)?o(e,t):ht(t,o)},Pt.prototype.off=function(e,n){var r=this.listeners;if(e){var i=St(this.ns,e),o=i.name,u=i.ns,c=jt(n),a=function(e,n){A(e,function(t,e,n){c(t)&&zt(u,t)&&n.splice(e,1)},t),e.length||delete r[n]};o?r[o]&&a(r[o],o):u&&ht(r,a)}else this.listeners={}},typeof setImmediate===c&&Lt(setImmediate)&&setImmediate;var Nt,qt=typeof MessageChannel===c&&Lt(MessageChannel)?function(t){var e=new MessageChannel;e.port1.onmessage=t,e.port2.postMessage(1)}:setTimeout,Mt=function(){this.nextTasks=[]};Mt.shared=function(){return Nt||(Nt=new Mt),Nt},Mt.prototype.append=function(t){z(this.nextTasks,t),this.start()},Mt.prototype.prepend=function(t){L(this.nextTasks,t),this.start()},Mt.prototype.start=function(){var t=this;1===t.nextTasks.length&&qt(function(){t.run()})},Mt.prototype.clear=function(){this.nextTasks.length=0},Mt.prototype.run=function(){var t=this.nextTasks;t.length&&(this.nextTasks=[],A(t,T))};var It="$slot_",Dt="lazy",Ut="model",Yt="event",Kt="binding",Bt="$id",Ft="$vnode",Ht="$loading",Wt="$component",Gt="$leaving";function Jt(t,e,n){var r=e.node,i=e.nativeAttrs,o=n&&n.nativeAttrs;if(i||o){var u=i||p,c=o||p;ht(u,function(e,n){c[n]&&e.value===c[n].value||t.attr(r,n,e.value)}),ht(c,function(e,n){u[n]||t.removeAttr(r,n)})}}function Rt(t,e,n){var r=e.node,i=e.nativeProps,o=n&&n.nativeProps;if(i||o){var u=i||p,c=o||p;ht(u,function(e,n){c[n]&&e.value===c[n].value||t.prop(r,n,e.value)}),ht(c,function(e,n){u[n]||t.removeProp(r,n,e.hint)})}}function Zt(t,e){var n=t.data,r=t.directives,i=e&&e.directives;if(r||i){var o=n[Wt]||t.node,u=e&&t.keypath!==e.keypath,c=r||p,a=i||p;ht(c,function(n,r){var i=n.hooks,c=i.bind,f=i.unbind;a[r]?(n.value!==a[r].value||u)&&(f&&f(o,a[r],e),c(o,n,t)):c(o,n,t)}),ht(a,function(t,n){if(!c[n]){var r=t.hooks.unbind;r&&r(o,t,e)}})}}function _t(t){var e=t.directives;if(e){var n=t.data[Wt]||t.node;ht(e,function(e){var r=e.hooks.unbind;r&&r(n,e,t)})}}function Qt(t,e){var n,r=t.data,i=t.ref,o=t.props,u=t.slots,c=t.context;if(t.isComponent?(n=r[Wt],e&&(o&&n.set(n.checkPropTypes(o)),u&&n.set(u))):n=t.node,i){var a=c.$refs;a&&(a[i]=n)}}function Vt(t,e){return t.tag===e.tag&&t.key===e.key}function Xt(t,e,n){for(var r,i,o;e<=n;)(i=t[e])&&(o=i.key)&&(r||(r={}),r[o]=e),e++;return r||p}function te(t,e,n,r){r?t.before(e,n,r):t.append(e,n)}function ee(t,n){if(n){var r=(t.parent||t.context).create(n,t,t.node),i=r.$el;return i&&(t.node=i),t.data[Wt]=r,t.data[Ht]=e,Qt(t),Zt(t),r}}var ne=0;function re(){var t={};return t[Bt]=++ne,t}function ie(n,r){var o=r.tag,u=r.node,c=r.data,a=r.isComponent,f=r.isComment,s=r.isText,p=r.isStyle,v=r.children,d=r.text,l=r.html,m=r.context;if(!u||!c)if(c=re(),r.data=c,s)r.node=n.createText(d);else if(f)r.node=n.createComment(d);else if(a){var y=t;m.component(o,function(t){h(c[Ht])?c[Ht]&&(c[Ft]&&(r=c[Ft],delete c[Ft]),se(r,ee(r,t))):(ee(r,t),y=e)}),y&&(r.node=n.createComment(i),c[Ht]=t)}else u=r.node=n.createElement(r.tag),v?oe(n,u,v):d?n.text(u,d,p):l&&n.html(u,l,p),Jt(n,r),Rt(n,r),Qt(r),Zt(r)}function oe(t,e,n,r,i,o){for(var u,c=r||0,a=h(i)?i:n.length-1;c<=a;)ie(t,u=n[c]),ue(t,e,u,o),c++}function ue(e,n,r,i){var o=r.node,u=r.data,c=r.context,a=e.parent(o);if(i?e.before(n,o,i.node):e.append(n,o),!a){var f;if(r.isComponent){var s=u[Wt];s&&(f=function(){se(r,s)})}else r.isStatic||r.isText||r.isComment||(f=function(){se(r)});f&&c.nextTick(f,t)}}function ce(t,e,n,r,i){for(var o,u=r||0,c=h(i)?i:n.length-1;u<=c;)(o=n[u])&&ae(t,e,o),u++}function ae(t,e,n){var i=n.node;if(n.isStatic||n.isText||n.isComment)t.remove(e,i);else{var o,u=function(){fe(t,n),t.remove(e,i)};if(n.isComponent&&!(o=n.data[Wt]))return void u();!function(t,e,n){var i=t.data,o=t.transition;e&&!o&&(o=e.$vnode.transition);if(o){var u=o.leave;if(u)return void u(t.node,i[Gt]=function(){i[Gt]&&(n(),i[Gt]=r)})}n()}(n,o,u)}}function fe(t,n){var r=n.data,i=n.children,o=n.parent;n.context;if(!o||!o.$vnode||o===n.context)if(n.isComponent){var u=r[Wt];u?(_t(n),u.destroy()):r[Ht]=e}else _t(n),i&&A(i,function(e){fe(t,e)})}function se(t,e){var n=t.data,r=t.transition;if(e&&!r&&(r=e.$vnode.transition),T(n[Gt]),r){var i=r.enter;if(i)return void i(t.node,s)}}function pe(t,e,n){if(e!==n){var i=n.node,o=n.data;if(!Vt(e,n)){var u=t.parent(i);return ie(t,e),void(u&&(ue(t,u,e,n),ae(t,u,n)))}if(e.node=i,e.data=o,n.isComponent&&o[Ht])o[Ft]=e;else if(!e.isStatic||!n.isStatic){Jt(t,e,n),Rt(t,e,n),Qt(e,n),Zt(e,n);var c=e.text,a=e.html,f=e.children,s=e.isStyle,p=n.text,v=n.html,l=n.children;$(c)?c!==p&&t.text(i,c,s):$(a)?a!==v&&t.html(i,a,s):f&&l?f!==l&&function(t,e,n,i){for(var o,u,c=0,a=n.length-1,f=n[c],s=n[a],p=0,v=i.length-1,d=i[p],l=i[v];p<=v&&c<=a;)f?s?d?l?Vt(f,d)?(pe(t,f,d),f=n[++c],d=i[++p]):Vt(s,l)?(pe(t,s,l),s=n[--a],l=i[--v]):Vt(s,d)?(pe(t,s,d),te(t,e,d.node,t.next(l.node)),s=n[--a],d=i[++p]):Vt(f,l)?(pe(t,f,l),te(t,e,l.node,d.node),f=n[++c],l=i[--v]):(o||(o=Xt(i,p,v)),h(u=f.key?o[f.key]:r)?(pe(t,f,i[u]),i[u]=r):ie(t,f),ue(t,e,f,d),f=n[++c]):l=i[--v]:d=i[++p]:s=n[--a]:f=n[++c];p>v?oe(t,e,n,c,a,n[a+1]):c>a&&ce(t,e,i,p,v)}(t,i,f,l):f?(($(p)||$(v))&&t.text(i,d,s),oe(t,i,f)):l?ce(t,i,l):($(p)||$(v))&&t.text(i,d,s)}}}function ve(t,e){return w(t)?+t:h(e)?e:0}var de={"+":{exec:function(t){return+t}},"-":{exec:function(t){return-t}},"~":{exec:function(t){return~t}},"!":{exec:function(t){return!t}},"!!":{exec:function(t){return!!t}}},he={"*":{prec:14,exec:function(t,e){return t*e}},"/":{prec:14,exec:function(t,e){return t/e}},"%":{prec:14,exec:function(t,e){return t%e}},"+":{prec:13,exec:function(t,e){return t+e}},"-":{prec:13,exec:function(t,e){return t-e}},"<<":{prec:12,exec:function(t,e){return t<<e}},">>":{prec:12,exec:function(t,e){return t>>e}},">>>":{prec:12,exec:function(t,e){return t>>>e}},"<":{prec:11,exec:function(t,e){return t<e}},"<=":{prec:11,exec:function(t,e){return t<=e}},">":{prec:11,exec:function(t,e){return t>e}},">=":{prec:11,exec:function(t,e){return t>=e}},"==":{prec:10,exec:function(t,e){return t==e}},"!=":{prec:10,exec:function(t,e){return t!=e}},"===":{prec:10,exec:function(t,e){return t===e}},"!==":{prec:10,exec:function(t,e){return t!==e}},"&":{prec:9,exec:function(t,e){return t&e}},"^":{prec:8,exec:function(t,e){return t^e}},"|":{prec:7,exec:function(t,e){return t|e}},"&&":{prec:6,exec:function(t,e){return t&&e}},"||":{prec:5,exec:function(t,e){return t||e}},"->":{prec:0,exec:function(t,e){return t>e?function(n){for(var r=t,i=0;r>e;r--)n(r,i++)}:function(n){for(var r=t,i=0;r<e;r++)n(r,i++)}}},"=>":{prec:0,exec:function(t,e){return t>e?function(n){for(var r=t,i=0;r>=e;r--)n(r,i++)}:function(n){for(var r=t,i=0;r<=e;r++)n(r,i++)}}}},le=2,me=3,ye=4,ge=13;function xe(t){return t===r}$e=d,JSON.stringify($e),O(["c","d","e","f","g","a","h","i","b"],",");var $e,be={};function ke(t,e,n){return be[t.type](t,e,n)}function we(t,e,n,r){(t[e]||(t[e]={}))[n]=r}function Ce(n,i,u,c,a,f){var s,v=d,h={$keypath:v},l=[v,h],m=[],$={},b=function(t,r,o,u,c,a){var f=ut(t[r],o),p=t[r+1];if(u.ak=f,xe(a)&&(a=f),s&&lt(s,o))return s[o];if(lt(p,o))return p[o];if(lt(p,"$item")){if(p=p.$item,o===d)return p;if(p&&lt(p,o))return p[o]}var v=n.get(f,b,c);if(v===b){if(u.lookup!==e&&r>1)return b(t,r-=2,o,u,c,a);if(!(v=$t(i,o)))return u.ak=a,void At("data ["+u.raw+"] is not found.");v=v.value}return v},k=function(t,e,r){var i=r||l,o=i.length;return ke(t,function(t,n){return b(i,o-2*((n.offset||0)+1),t,n,e)},n)},w=function(e,n){var r=n.expr,i=k(r,t),o=ut(Kt,n.name),u=c[Kt];return u&&we(e,"directives",o,{ns:Kt,name:n.name,key:o,hooks:u,binding:r.ak,hint:n.hint}),i},C=function(t){return function(e,r){e.type!==t&&(e=new E(t,e)),n.fire(e,r)}},O=function(t,i,o){return function(u,c){var a,f=n[t];u instanceof E?(i?(s={$event:u,$data:c},a=T(f,n,i(o)),s=r):a=T(f,n,c?[u,c]:u),a===e&&u.prevent().stop()):T(f,n,i?i(o):r)}},P=function(t,e){return function(){return t(e)}},S=function(t,e){var n=k(t);return e?wt(n):n},j=function(t,e){return k(t,r,e)},L=function(t,e){N(S(t,e))},N=function(e){var r=D(m);if(r){var i=D(r);i&&i.isText?i.text+=e:z(r,{isText:t,text:e,context:n,keypath:v})}},q=function(e,r,i,u){if(r&&(A(r,function(n){var r=n.name,i=n.value;switch(n.type){case le:n.binding&&(i=w(e,n)),e.isComponent?we(e,"props",r,i):we(e,"nativeAttrs",r,{name:r,value:i});break;case ye:we(e,"nativeProps",r,{name:r,value:n.binding?w(e,n):i,hint:n.hint});break;case me:!function(e,n){var r,i,u,f,s,p=n.ns,v=n.name,d=n.value,h=ut(p,v);switch(p){case Yt:i=c[Yt],f=n.event?C(n.event):O(n.method,n.args,l);break;case o:return void((s=a[d])&&(e.transition=s));case Ut:i=c[Ut],e.model=k(n.expr,t),r=n.expr.ak;break;case Dt:return void we(e,"lazy",v,d);default:i=c[v],n.method?f=O(n.method,n.args,l):n.getter&&(u=P(n.getter,l))}i&&we(e,"directives",h,{ns:p,name:v,key:h,value:d,binding:r,hooks:i,getter:u,handler:f})}(e,n);break;case ge:!function(t,e){var n=e.expr,r=k(n,e.binding);if(x(r)&&!g(r)){ht(r,function(e,n){we(t,"props",n,e)});var i=n.ak;if(i){var o=ut(Kt,i),u=c[Kt];u&&we(t,"directives",o,{ns:Kt,name:d,key:o,hooks:u,binding:ut(i,"*")})}}else At("["+n.raw+"] 不是对象，延展个毛啊")}(e,n)}}),e.directives&&!e.lazy&&(e.lazy=p)),i)m.push(e.children=[]),i(),U(m);else if(u){var f={};ht(u,function(t,e){m.push([]),t(),f[e]=U(m)}),e.slots=f}e.context=n,e.keypath=v;var s=D(m);return s&&z(s,e),e},M=function(t,e){var r=D(m),i=n.get(t);i?A(i,function(t){z(r,t),t.parent=n}):e&&e()},I=function(t,e){$[t]=e},Y=function(t){if($[t])$[t]();else{var e=u[t];e&&e(S,j,L,N,q,M,I,Y,K)}},K=function(t,e,n){var i,o;y(e)?(o=e,i=r):(o=n,i=e);var u=k(t),c=t.ak,a=c||ut(v,t.raw),f=function(t,e){var n=v,r=h,u=l;v=ut(a,wt(e)),h={},z(l=gt(l),v),z(l,h),h.$keypath=v,c||(h.$item=t),i&&(h[i]=e),o(t,e),v=n,h=r,l=u};g(u)?A(u,f):x(u)?ht(u,f):y(u)&&u(f)};return f(S,j,L,N,q,M,I,Y,K)}be[1]=function(t){return t.value},be[2]=function(t,e){return e(t.name,t)},be[3]=function(t,e,n){var i,o,u=t.sk,c=t.props;if(xe(u)){2===(i=c[0]).type?u=i.name:(u=d,o=ke(i,e,n));for(var a=1,f=c.length;a<f;a++)u=ut(u,ke(c[a],e,n))}return h(o)?(o=$t(o,u))?o.value:r:e?e(u,t):void 0},be[4]=function(t,e,n){return de[t.op].exec(ke(t.a,e,n))},be[5]=function(t,e,n){return he[t.op].exec(ke(t.a,e,n),ke(t.b,e,n))},be[6]=function(t,e,n){return ke(t.test,e,n)?ke(t.yes,e,n):ke(t.no,e,n)},be[7]=function(t,e,n){return t.nodes.map(function(t){return ke(t,e,n)})},be[8]=function(t,e,n){var r={};return A(t.keys,function(i,o){r[i]=ke(t.values[o],e,n)}),r},be[9]=function(t,e,n){return T(ke(t.name,e,n),n,t.args.map(function(t){return ke(t,e,n)}))};var Te=function(e,n,r,i,o,u,c){var a=this;a.keypath=e,a.cache=r,a.deps=[],a.context=o.context,a.observer=o,a.getter=u,a.setter=c,a.unique={},a.watcher=function(n,r,i){var u=a.value,c=a.get(t);c!==u&&o.diff(e,c,u)},a.watcherOptions={sync:n,watcher:a.watcher},(a.fixed=!K(i))&&(A(i,function(t){a.add(t)}),a.bind())};function Ee(t,n){var r;return A(t,function(t){var i=it(n,t);if(i>=0)return r={name:t,prop:J(n,i)},e}),r}function Ae(t,e){if(t==n||e===d)return t;var r=$t(t,e);return r?r.value:void 0}function Oe(e,n,i,o,c){var a=function(t,n,r){if(n!==r){var i=ut(e,t);A(o,function(t){h(at(i,t))&&c(t,i,n,r)}),Oe(i,n,r,o,c)}};(function(e,n,i){var o=$(e),c=$(n);if(o||c)return i(u,o?e.length:r,c?n.length:r),t})(n,i,a)||function(e,n,i){var o=g(e),c=g(n);if(o||c){var a=o?e.length:r,f=c?n.length:r;i(u,a,f);for(var s=0,p=Math.max(a||0,f||0);s<p;s++)i(""+s,e?e[s]:r,n?n[s]:r);return t}}(n,i,a)||function(t,e,n){var r=x(t),i=x(e);(r||i)&&(t=r?t:p,e=i?e:p,r&&ht(t,function(t,r){t!==e[r]&&n(r,t,e[r])}),i&&ht(e,function(e,r){e!==t[r]&&n(r,t[r],e)}))}(n,i,a)}function Pe(t,e,n,r,i,o){var u;ht(r,function(r,c){if(ct(c))h(at(t,c))?o(c,t,e,n):i&&(u?z(u,c):u=[c]);else{var a=it(c,t);if(a>=0){var f=J(c,a),s=Ae(e,f),p=Ae(n,f);s!==p&&o(c,c,s,p)}}}),u&&Oe(t,e,n,u,o)}function Se(t,e){if(t.count&&e)return t.count--,e[0]!==e[1]}function je(e,n){return y(e)?{watcher:e,immediate:n===t}:e&&e.watcher?e:void 0}Te.build=function(e,n,r){var i,o,u=t,c=t,a=v;if(y(r)?i=r:x(r)&&(k(r.cache)&&(u=r.cache),k(r.sync)&&(c=r.sync),g(r.deps)&&(a=r.deps),y(r.get)&&(i=r.get),y(r.set)&&(o=r.set)),i)return new Te(e,c,u,a,n,i,o)},Te.prototype.get=function(t){var e=this.getter,n=this.context;if(this.cache){if(t||!lt(this,"value"))if(this.fixed)this.value=T(e,n);else{this.unbind();var r=Te.current;Te.current=this,this.value=T(e,n),this.bind(),Te.current=r}}else this.value=T(e,n);return this.value},Te.prototype.set=function(t){var e=this.setter,n=this.context;e&&e.call(n,t)},Te.prototype.add=function(e){this.unique[e]=t},Te.prototype.bind=function(){var t=this.unique,e=this.deps,n=this.observer,r=this.watcherOptions;ht(t,function(t,i){z(e,i),n.watch(i,r)}),this.unique={}},Te.prototype.unbind=function(){var e=this.deps,n=this.observer,r=this.watcher;A(e,function(t){n.unwatch(t,r)},t),e.length=0};var ze=function(t,e){this.data=t||{},this.context=e||this,this.nextTask=new Mt,this.syncEmitter=new Pt,this.asyncEmitter=new Pt,this.asyncChanges={}};ze.prototype.get=function(t,e,n){var r,i,o=Te.current,u=this.data,c=this.computed,a=this.reversedComputedKeys;if(t===d)return u;if(o&&!n&&o.add(t),c){if(i=c[t])return i.get();if(a){var f=Ee(a,t);f&&f.prop&&(r=$t(c[f.name].get(),f.prop))}}return r||(r=$t(u,t)),r?r.value:e},ze.prototype.set=function(t,e){var n=this,r=n.data,i=n.computed,o=n.reversedComputedKeys,u=function(t,e){var u=n.get(e);if(t!==u){var c;if(i&&((c=i[e])&&c.set(t),o)){var a=Ee(o,e);if(a&&a.prop&&(c=i[a.name])){var f=c.get();(x(f)||g(f))&&bt(f,a.prop,t)}}c||bt(r,e,t),n.diff(e,t,u)}};$(t)?u(e,t):x(t)&&ht(t,u)},ze.prototype.diff=function(e,n,i){var o=this,u=o.syncEmitter,c=o.asyncEmitter,a=o.asyncChanges,f=36!==V(e);Pe(e,n,i,u.listeners,f,function(t,e,n,r){u.fire(t,[n,r,e])}),Pe(e,n,i,c.listeners,f,function(e,n,i,u){A(c.listeners[e],function(t){t.count++});var f=(a[n]||(a[n]={value:u,list:[]})).list;I(f,e)||z(f,e),o.pending||(o.pending=t,o.nextTask.append(function(){o.pending&&(o.pending=r,o.diffAsync())}))})},ze.prototype.diffAsync=function(){var t=this,e=t.asyncEmitter,n=t.asyncChanges;t.asyncChanges={},ht(n,function(n,r){var i=[t.get(r),n.value,r];A(n.list,function(t){e.fire(t,i,Se)})})},ze.prototype.addComputed=function(e,n){var r=Te.build(e,this,n);if(r)return this.computed||(this.computed={}),this.computed[e]=r,this.reversedComputedKeys=dt(this.computed,t),r},ze.prototype.removeComputed=function(e){var n=this.computed;n&&lt(n,e)&&(delete n[e],this.reversedComputedKeys=dt(n,t))},ze.prototype.watch=function(t,e,n){var i=this,o=i.context,u=i.syncEmitter,c=i.asyncEmitter,a=function(t,e){var n=e.sync?u:c,a={fn:e.watcher,ctx:o,count:0};e.once&&(a.max=1),n.on(t,a),e.immediate&&T(e.watcher,o,[i.get(t),r,t])};$(t)?a(t,je(e,n)):ht(t,function(t,e){a(e,je(t))})},ze.prototype.unwatch=function(t,e){this.syncEmitter.off(t,e),this.asyncEmitter.off(t,e)},ze.prototype.toggle=function(t){var e=!this.get(t);return this.set(t,e),e},ze.prototype.increase=function(t,e,n){var r=ve(this.get(t),0)+(e||1);if(!b(n)||r<=n)return this.set(t,r),r},ze.prototype.decrease=function(t,e,n){var r=ve(this.get(t),0)-(e||1);if(!b(n)||r>=n)return this.set(t,r),r},ze.prototype.insert=function(n,r,i){var o=this.get(n),u=(o=g(o)?gt(o):[]).length;if(i===t||i===u)o.push(r);else if(i===e||0===i)o.unshift(r);else{if(!(i>0&&i<u))return;o.splice(i,0,r)}return this.set(n,o),t},ze.prototype.append=function(e,n){return this.insert(e,n,t)},ze.prototype.prepend=function(t,n){return this.insert(t,n,e)},ze.prototype.removeAt=function(e,n){var r=this.get(e);if(g(r)&&n>=0&&n<r.length)return(r=gt(r)).splice(n,1),this.set(e,r),t},ze.prototype.remove=function(e,n){var r=this.get(e);if(g(r)&&Y(r=gt(r),n))return this.set(e,r),t},ze.prototype.copy=function(t,e){return gt(t,e)},ze.prototype.destroy=function(){this.syncEmitter.off(),this.asyncEmitter.off(),this.nextTask.clear(),mt(this)};var Le=f,Ne=function(t,n,r){t.addEventListener(n,r,e)},qe=function(t,n,r){t.removeEventListener(n,r,e)},Me=function(t,e){t.classList.add(e)},Ie=function(t,e){t.classList.remove(e)};Le&&(Le.body.classList||(Me=function(t,e){var n=t.className.split(De);I(n,e)||(z(n,e),t.className=O(n,De))},Ie=function(t,e){var n=t.className.split(De);Y(n,e)&&(t.className=O(n,De))}));var De=" ",Ue={svg:"http://www.w3.org/2000/svg"},Ye={},Ke={createElement:function(t,e){return e?Le.createElementNS(Ue.svg,t):Le.createElement(t)},createText:function(t){return Le.createTextNode(t)},createComment:function(t){return Le.createComment(t)},prop:function(t,n,r){if(!h(r))return $t(t,n);bt(t,n,r,e)},removeProp:function(t,n,r){bt(t,n,3===r?e:d,e)},attr:function(t,e,r){if(h(r))t.setAttribute(e,r);else{var i=t.getAttribute(e);if(i!=n)return i}},removeAttr:function(t,e){t.removeAttribute(e)},before:function(t,e,n){t.insertBefore(e,n)},append:function(t,e){t.appendChild(e)},replace:function(t,e,n){t.replaceChild(e,n)},remove:function(t,e){t.removeChild(e)},parent:function(t){var e=t.parentNode;if(e)return e},next:function(t){var e=t.nextSibling;if(e)return e},find:function(t){var e=Le.querySelector(t);if(e)return e},tag:function(t){if(1===t.nodeType)return t.tagName.toLowerCase()},text:function(t,e,n){if(!h(e))return t.textContent;t.textContent=e},html:function(t,e,n){if(!h(e))return t.innerHTML;t.innerHTML=e},addClass:Me,removeClass:Ie,on:function(t,e,n,r){var i=t.$emitter||(t.$emitter=new Pt),o=i.nativeListeners||(i.nativeListeners={});if(!o[e]){var u=Ye[e],c=function(t){i.fire(t instanceof E?t:new E(t.type,function(t,e){return t}(t)))};o[e]=c,u?u.on(t,c):Ne(t,e,c)}i.on(e,{fn:n,ctx:r})},off:function(t,e,n){var i=t.$emitter,o=i.listeners,u=i.nativeListeners;if(i.off(e,n),u&&!i.has(e)){var c=Ye[e],a=u[e];c?c.off(t,a):qe(t,e,a),delete u[e]}st(o)&&(t.$emitter=r)},specialEvents:Ye};function Be(t,e,n){var i;return function(){if(!i){var o=N(arguments);n&&T(t,r,o),i=setTimeout(function(){i=r,n||T(t,r,o)},e)}}}Ye.input={on:function(n,r){var i=e;Ke.on(n,"compositionstart",r.compositionstart=function(){i=t}),Ke.on(n,"compositionend",r.compositionend=function(t){i=e,t.type="input",r(t)}),Ne(n,"input",r.input=function(t){i||r(t)})},off:function(t,e){Ke.off(t,"compositionstart",e.compositionstart),Ke.off(t,"compositionend",e.compositionend),qe(t,"input",e.input),e.compositionstart=e.compositionend=e.input=r}};var Fe=q(["click","tap"]),He={bind:function(e,n,r){var i=n.name,o=n.handler,u=r.lazy[i]||r.lazy[d];if(o)if(u&&(u===t?i="change":o=Be(o,u,Fe[i])),r.isComponent){var c=e;c.on(i,o),r.data[n.key]=function(){c.off(i,o)}}else{var a=e;Ke.on(a,i,o),r.data[n.key]=function(){Ke.off(a,i,o)}}},unbind:function(t,e,n){T(n.data[e.key])}};function We(t){return h(t.value)?t.value:t.text}var Ge={set:function(t,e,n){t.value=wt(n.get(e))},sync:function(t,e,n){n.set(e,t.value)},name:"value"},Je={set:function(t,e,n){t.set(t.$model,n.get(e))},sync:function(t,e,n){n.set(e,t.get(t.$model))},name:"value"},Re={radio:{set:function(t,e,n){t.checked=t.value===wt(n.get(e))},sync:function(t,e,n){t.checked&&n.set(e,t.value)},name:"checked"},checkbox:{set:function(t,n,r){var i=r.get(n);t.checked=g(i)?I(i,t.value,e):k(i)?i:!!i},sync:function(t,n,r){var i=r.get(n);g(i)?t.checked?r.append(n,t.value):r.removeAt(n,M(i,t.value,e)):r.set(n,t.checked)},name:"checked"},select:{set:function(t,n,r){var i=r.get(n);A(N(t.options),t.multiple?function(t){t.selected=I(i,We(t),e)}:function(n,r){if(We(n)==i)return t.selectedIndex=r,e})},sync:function(t,e,n){var r=N(t.options);if(t.multiple){var i=[];A(r,function(t){t.selected&&z(i,We(t))}),K(i)&&K(n.get(e))||n.set(e,i)}else n.set(e,We(r[t.selectedIndex]))},name:"value"}},Ze={bind:function(n,r,i){var o,u,c,a,f=r.binding,s=i.context,p=i.nativeProps,v=i.lazy[Ut]||i.lazy[d],h=function(){m||c.set(o||u,f,s)},l=function(){m=t,c.sync(o||u,f,s),m=e},m=e;v&&v!==t&&(l=Be(l,v)),i.isComponent?(c=Je,(o=n).watch(o.$model,l)):(c=Re[(u=n).type]||Re[Ke.tag(u)],a="change",c||(c=Ge,v!==t&&(a="input")),p&&lt(p,c.name)||h(),Ke.on(u,a,l)),s.watch(f,{watcher:h,sync:t}),i.data[r.key]=function(){i.isComponent?o.unwatch(o.$model,l):Ke.off(u,a,l),s.unwatch(f,h)}},unbind:function(t,e,n){T(n.data[e.key])}},_e={bind:function(t,e,n){var r=e.binding;if(r){var i=ct(r),o=function(o,u,c){var a=i?at(c,r):e.name;n.isComponent?t.set(a,o):h(e.hint)?Ke.prop(t,a,o):Ke.attr(t,a,o)};n.context.watch(r,o),n.data[e.key]=function(){n.context.unwatch(r,o)}}},unbind:function(t,e,n){T(n.data[e.key])}};var Qe={},Ve={},Xe={},tn={},en={},nn=/^[#.][-\w+]+$/,rn=function n(u){var c=this;x(u)||(u=p),c.$options=u,T(u.beforeCreate,c,u);var a=u.el,f=u.data,s=u.props,v=u.model,h=u.parent,l=u.replace,m=u.computed,g=u.template,b=u.transitions,k=u.components,w=u.directives,C=u.partials,E=u.filters,A=u.slots,O=u.events,P=u.methods,S=u.watchers,j=u.extensions;j&&yt(c,j),v&&(c.$model=v);var z=s?c.checkPropTypes(s):{};A&&yt(z,A),s&&x(f)&&At('"data" option expected to be a function.');var L=c.$observer=new ze(z,c);m&&ht(m,function(t,e){L.addComputed(e,t)});var N=y(f)?T(f,c,u):f;x(N)&&ht(N,function(t,e){lt(z,e)?At('"'+e+'" is already defined as a prop. Use prop default value instead.'):z[e]=t}),c.$emitter=new Pt(t);var q,M=e;if($(g)?nn.test(g)&&(q=Ke.find(g))&&(g=Ke.html(q),q=r):g=r,a)if($(a)){var I=a;nn.test(I)&&(q=Ke.find(I))}else q=a;q&&!l&&(M=t,Ke.append(q,q=Ke.createComment(d))),h&&(c.$parent=h),on(c,o,b),on(c,i,k),on(c,"directive",w),on(c,"partial",C),on(c,"filter",E),P&&ht(P,function(t,e){c[e]=t}),T(u.afterCreate,c),g&&(c.$template=n.compile(g),L.addComputed("$template",{sync:e,get:function(){return c.render()}}),(S=S?gt(S):{}).$template=function(t){c.update(t,c.$vnode)},q||(M=t,q=Ke.createComment(d)),c.update(c.get("$template"),function(t,e,n,r,i){return{tag:t.tag(e),data:re(),isComment:n,node:e,context:r,keypath:i}}(Ke,q,M,c,d))),O&&c.on(O),S&&L.nextTask.prepend(function(){c.$observer&&c.watch(S)})};function on(t,e,n){y(n)?t[e](T(n,t)):x(n)&&t[e](n)}function un(e,n,i){if(e&&lt(e,n)){var o=e[n];if(y(o)){var u=o.$queue;u?z(u,i):(u=o.$queue=[i],o(function(t){o.$queue=r,e[n]=t,A(u,function(e){e(t)})}))}else i(o);return t}}function cn(t,e,n){return t&&t[e]?t[e]:n?n(e):void 0}function an(t,e,n,r){$(e)?t[e]=r?r(n):n:ht(e,function(e,n){t[n]=r?r(e):e})}function fn(t,e){return t&&e?yt({},e,t):t||e}return rn.use=function(t){t.install(rn)},rn.nextTick=function(t){Mt.shared().append(t)},rn.compile=function(t,e){return new Function("return "+t)()},rn.directive=function(t,e){if($(t)&&!e)return cn(Qe,t);an(Qe,t,e)},rn.transition=function(t,e){if($(t)&&!e)return cn(Ve,t);an(Ve,t,e)},rn.component=function(t,e){if($(t)){if(!e)return cn(Xe,t);if(y(e))return void un(Xe,t,e)}an(Xe,t,e)},rn.partial=function(t,e){if($(t)&&!e)return cn(tn,t);an(tn,t,e,rn.compile)},rn.filter=function(t,e){if($(t)&&!e)return cn(en,t);an(en,t,e)},rn.checkPropTypes=function(n,r){var i=gt(n);return ht(r,function(r,o){var u,a=r.type,f=r.value,s=r.required,p=n[o];(y(s)&&(s=s(n)),h(p))?a?(X(a)?K(a)||A(a,function(n){if(m(p,n))return u=t,e}):u=m(p,a),u!==t&&At('The prop "'+o+'" type is not matched.')):At('The prop "'+o+'" in propTypes has no type.'):s?At('The prop "'+o+'" is marked as required, but its value is not found.'):h(f)&&(i[o]=a===c?f:y(f)?f(n):f)}),i},rn.prototype.addComputed=function(t,e){return this.$observer.addComputed(t,e)},rn.prototype.removeComputed=function(t){this.$observer.removeComputed(t)},rn.prototype.get=function(t,e,n){return this.$observer.get(t,e,n)},rn.prototype.set=function(t,e){var n=this.$observer;n&&n.set(t,e)},rn.prototype.on=function(t,e){return this.$emitter.on(t,e,{ctx:this}),this},rn.prototype.once=function(t,e){return this.$emitter.on(t,e,{ctx:this,max:1}),this},rn.prototype.off=function(t,e){return this.$emitter.off(t,e),this},rn.prototype.fire=function(e,n,r){var i,o,u=e instanceof E?e:new E(e);return u.target||(u.target=this),x(n)?i=n:n===t&&(r=t),(o=this.$emitter.fire(u,i))&&(r?this.$children&&A(this.$children,function(e){return o=e.fire(u,n,t)}):this.$parent&&(o=this.$parent.fire(u,n))),o},rn.prototype.watch=function(t,e,n){return this.$observer.watch(t,e,n),this},rn.prototype.unwatch=function(t,e){return this.$observer.unwatch(t,e),this},rn.prototype.directive=function(t,e){var n=this.$directives;if($(t)&&!e)return cn(n,t,rn.directive);an(n||(this.$directives={}),t,e)},rn.prototype.transition=function(t,e){var n=this.$transitions;if($(t)&&!e)return cn(n,t,rn.transition);an(n||(this.$transitions={}),t,e)},rn.prototype.component=function(t,e){var n=this.$components;if($(t)){if(!e)return cn(n,t,rn.component);if(y(e))return void(un(n,t,e)||un(Xe,t,e))}an(n||(this.$components={}),t,e)},rn.prototype.partial=function(t,e){var n=this.$partials;if($(t)&&!e)return cn(n,t,rn.partial);an(n||(this.$partials={}),t,e,rn.compile)},rn.prototype.filter=function(t,e){var n=this.$filters;if($(t)&&!e)return cn(n,t,rn.filter);an(n||(this.$filters={}),t,e)},rn.prototype.forceUpdate=function(){var e=this.$vnode,n=this.$observer;if(e){var r=n.computed.$template,i=r.get();n.nextTask.run(),i===r.get()&&this.update(r.get(t),e)}},rn.prototype.render=function(){return Ce(this,fn(this.$filters,en),fn(this.$partials,tn),fn(this.$directives,Qe),fn(this.$transitions,Ve),this.$template)},rn.prototype.update=function(t,e){var n,r=this,i=r.$vnode,o=r.$options;r.$refs={},i?(T(o.beforeUpdate,r),pe(Ke,t,e),n=o.afterUpdate):(T(o.beforeMount,r),pe(Ke,t,e),r.$el=t.node,n=o.afterMount),r.$vnode=t,n&&r.nextTick(function(){r.$vnode&&T(n,r)})},rn.prototype.checkPropTypes=function(t){var e=this.$options.propTypes;return e?rn.checkPropTypes(t,e):t},rn.prototype.create=function(e,n,r){if((e=gt(e)).parent=this,n){r&&(e.el=r,e.replace=t);var i=n.slots,o=n.props,u=n.model;if(i&&(e.slots=i),h(u)){o||(o={});var c=e.model||"value";lt(o,c)||(o[c]=u),e.model=c}e.props=o}var a=new rn(e);return z(this.$children||(this.$children=[]),a),a},rn.prototype.destroy=function(){var t=this.$options,e=this.$emitter,n=this.$observer;T(t.beforeDestroy,this);var r=this.$vnode,i=this.$parent;i&&i.$children&&Y(i.$children,this),r&&(delete this.$vnode,function(t,e,n){if(n){var r=t.parent(e.node);r&&ae(t,r,e)}else fe(t,e)}(Ke,r,!i)),e.off(),n.destroy(),mt(this),T(t.afterDestroy,this)},rn.prototype.nextTick=function(t,e){var n=this.$observer.nextTask;e?n.prepend(t):n.append(t)},rn.prototype.toggle=function(t){return this.$observer.toggle(t)},rn.prototype.increase=function(t,e,n){return this.$observer.increase(t,e,n)},rn.prototype.decrease=function(t,e,n){return this.$observer.decrease(t,e,n)},rn.prototype.insert=function(t,e,n){return this.$observer.insert(t,e,n)},rn.prototype.append=function(t,e){return this.$observer.append(t,e)},rn.prototype.prepend=function(t,e){return this.$observer.prepend(t,e)},rn.prototype.removeAt=function(t,e){return this.$observer.removeAt(t,e)},rn.prototype.remove=function(t,e){return this.$observer.remove(t,e)},rn.prototype.copy=function(t,e){return this.$observer.copy(t,e)},rn.version="1.0.0-alpha",rn.is=C,rn.array=B,rn.object=kt,rn.string=tt,rn.logger=Ot,rn.Event=E,rn.Emitter=Pt,rn.dom=Ke,rn.directive({event:He,model:Ze,binding:_e}),rn.filter({hasSlot:function(t){return h(this.get(It+t))}}),rn});
//# sourceMappingURL=yox.js.map