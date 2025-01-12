import{j as T,k as rt,b as ee,B as te}from"./index-uXjfszPq.js";import{c as st,a as ne,u as ot,I as it}from"./formik.esm-DxGJtXBs.js";import{c as at,u as ct,P as lt,T as ut,I as ft}from"./useTranslation-DjAqwgvE.js";import{C as dt,T as re,B as pt,S as ht,A as mt}from"./TextField-CFRbq1Vu.js";import{m as yt}from"./proxy-9R1HBaCq.js";import{A as bt}from"./Avatar-CHxa6nJI.js";const wt=at([T.jsx("circle",{cx:"12",cy:"12",r:"3.2"},"0"),T.jsx("path",{d:"M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5"},"1")],"PhotoCamera");function je(e,t){return function(){return e.apply(t,arguments)}}const{toString:gt}=Object.prototype,{getPrototypeOf:he}=Object,K=(e=>t=>{const n=gt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),P=e=>(e=e.toLowerCase(),t=>K(t)===e),X=e=>t=>typeof t===e,{isArray:U}=Array,v=X("undefined");function Et(e){return e!==null&&!v(e)&&e.constructor!==null&&!v(e.constructor)&&C(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Le=P("ArrayBuffer");function St(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Le(e.buffer),t}const Rt=X("string"),C=X("function"),De=X("number"),G=e=>e!==null&&typeof e=="object",Tt=e=>e===!0||e===!1,z=e=>{if(K(e)!=="object")return!1;const t=he(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},xt=P("Date"),Ot=P("File"),At=P("Blob"),Ct=P("FileList"),Pt=e=>G(e)&&C(e.pipe),_t=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||C(e.append)&&((t=K(e))==="formdata"||t==="object"&&C(e.toString)&&e.toString()==="[object FormData]"))},Nt=P("URLSearchParams"),[Ft,Bt,jt,Lt]=["ReadableStream","Request","Response","Headers"].map(P),Dt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function I(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),U(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Ue(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const j=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ke=e=>!v(e)&&e!==j;function ce(){const{caseless:e}=ke(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ue(t,s)||s;z(t[o])&&z(r)?t[o]=ce(t[o],r):z(r)?t[o]=ce({},r):U(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&I(arguments[r],n);return t}const Ut=(e,t,n,{allOwnKeys:r}={})=>(I(t,(s,o)=>{n&&C(s)?e[o]=je(s,n):e[o]=s},{allOwnKeys:r}),e),kt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),qt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},vt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&he(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},It=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ht=e=>{if(!e)return null;if(U(e))return e;let t=e.length;if(!De(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Mt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&he(Uint8Array)),zt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Jt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Vt=P("HTMLFormElement"),Wt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ge=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),$t=P("RegExp"),qe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};I(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Kt=e=>{qe(e,(t,n)=>{if(C(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(C(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Xt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return U(e)?r(e):r(String(e).split(t)),n},Gt=()=>{},Qt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,se="abcdefghijklmnopqrstuvwxyz",Ee="0123456789",ve={DIGIT:Ee,ALPHA:se,ALPHA_DIGIT:se+se.toUpperCase()+Ee},Zt=(e=16,t=ve.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Yt(e){return!!(e&&C(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const en=e=>{const t=new Array(10),n=(r,s)=>{if(G(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=U(r)?[]:{};return I(r,(i,c)=>{const d=n(i,s+1);!v(d)&&(o[c]=d)}),t[s]=void 0,o}}return r};return n(e,0)},tn=P("AsyncFunction"),nn=e=>e&&(G(e)||C(e))&&C(e.then)&&C(e.catch),Ie=((e,t)=>e?setImmediate:t?((n,r)=>(j.addEventListener("message",({source:s,data:o})=>{s===j&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),j.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",C(j.postMessage)),rn=typeof queueMicrotask<"u"?queueMicrotask.bind(j):typeof process<"u"&&process.nextTick||Ie,a={isArray:U,isArrayBuffer:Le,isBuffer:Et,isFormData:_t,isArrayBufferView:St,isString:Rt,isNumber:De,isBoolean:Tt,isObject:G,isPlainObject:z,isReadableStream:Ft,isRequest:Bt,isResponse:jt,isHeaders:Lt,isUndefined:v,isDate:xt,isFile:Ot,isBlob:At,isRegExp:$t,isFunction:C,isStream:Pt,isURLSearchParams:Nt,isTypedArray:Mt,isFileList:Ct,forEach:I,merge:ce,extend:Ut,trim:Dt,stripBOM:kt,inherits:qt,toFlatObject:vt,kindOf:K,kindOfTest:P,endsWith:It,toArray:Ht,forEachEntry:zt,matchAll:Jt,isHTMLForm:Vt,hasOwnProperty:ge,hasOwnProp:ge,reduceDescriptors:qe,freezeMethods:Kt,toObjectSet:Xt,toCamelCase:Wt,noop:Gt,toFiniteNumber:Qt,findKey:Ue,global:j,isContextDefined:ke,ALPHABET:ve,generateString:Zt,isSpecCompliantForm:Yt,toJSONObject:en,isAsyncFn:tn,isThenable:nn,setImmediate:Ie,asap:rn};function y(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}});const He=y.prototype,Me={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Me[e]={value:e}});Object.defineProperties(y,Me);Object.defineProperty(He,"isAxiosError",{value:!0});y.from=(e,t,n,r,s,o)=>{const i=Object.create(He);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),y.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const sn=null;function le(e){return a.isPlainObject(e)||a.isArray(e)}function ze(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Se(e,t,n){return e?e.concat(t).map(function(s,o){return s=ze(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function on(e){return a.isArray(e)&&!e.some(le)}const an=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Q(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,h){return!a.isUndefined(h[m])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!d&&a.isBlob(p))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?d&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,m,h){let g=p;if(p&&!h&&typeof p=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&on(p)||(a.isFileList(p)||a.endsWith(m,"[]"))&&(g=a.toArray(p)))return m=ze(m),g.forEach(function(R,N){!(a.isUndefined(R)||R===null)&&t.append(i===!0?Se([m],N,o):i===null?m:m+"[]",l(R))}),!1}return le(p)?!0:(t.append(Se(h,m,o),l(p)),!1)}const f=[],b=Object.assign(an,{defaultVisitor:u,convertValue:l,isVisitable:le});function w(p,m){if(!a.isUndefined(p)){if(f.indexOf(p)!==-1)throw Error("Circular reference detected in "+m.join("."));f.push(p),a.forEach(p,function(g,E){(!(a.isUndefined(g)||g===null)&&s.call(t,g,a.isString(E)?E.trim():E,m,b))===!0&&w(g,m?m.concat(E):[E])}),f.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return w(e),t}function Re(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function me(e,t){this._pairs=[],e&&Q(e,this,t)}const Je=me.prototype;Je.append=function(t,n){this._pairs.push([t,n])};Je.toString=function(t){const n=t?function(r){return t.call(this,r,Re)}:Re;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function cn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ve(e,t,n){if(!t)return e;const r=n&&n.encode||cn;a.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new me(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Te{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const We={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ln=typeof URLSearchParams<"u"?URLSearchParams:me,un=typeof FormData<"u"?FormData:null,fn=typeof Blob<"u"?Blob:null,dn={isBrowser:!0,classes:{URLSearchParams:ln,FormData:un,Blob:fn},protocols:["http","https","file","blob","url","data"]},ye=typeof window<"u"&&typeof document<"u",ue=typeof navigator=="object"&&navigator||void 0,pn=ye&&(!ue||["ReactNative","NativeScript","NS"].indexOf(ue.product)<0),hn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",mn=ye&&window.location.href||"http://localhost",yn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ye,hasStandardBrowserEnv:pn,hasStandardBrowserWebWorkerEnv:hn,navigator:ue,origin:mn},Symbol.toStringTag,{value:"Module"})),x={...yn,...dn};function bn(e,t){return Q(e,new x.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return x.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function wn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function gn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function $e(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=gn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(wn(r),s,n,0)}),n}return null}function En(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const H={transitional:We,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify($e(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return bn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Q(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),En(t)):t}],transformResponse:[function(t){const n=this.transitional||H.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?y.from(c,y.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:x.classes.FormData,Blob:x.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{H.headers[e]={}});const Sn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Rn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Sn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},xe=Symbol("internals");function q(e){return e&&String(e).trim().toLowerCase()}function J(e){return e===!1||e==null?e:a.isArray(e)?e.map(J):String(e)}function Tn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const xn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function oe(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function On(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function An(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class A{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,d,l){const u=q(d);if(!u)throw new Error("header name must be a non-empty string");const f=a.findKey(s,u);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||d]=J(c))}const i=(c,d)=>a.forEach(c,(l,u)=>o(l,u,d));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!xn(t))i(Rn(t),n);else if(a.isHeaders(t))for(const[c,d]of t.entries())o(d,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=q(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Tn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=q(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||oe(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=q(i),i){const c=a.findKey(r,i);c&&(!n||oe(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||oe(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=J(s),delete n[o];return}const c=t?On(o):String(o).trim();c!==o&&delete n[o],n[c]=J(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[xe]=this[xe]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=q(i);r[c]||(An(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}A.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(A.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(A);function ie(e,t){const n=this||H,r=t||n,s=A.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ke(e){return!!(e&&e.__CANCEL__)}function k(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(k,y,{__CANCEL__:!0});function Xe(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Cn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Pn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const l=Date.now(),u=r[o];i||(i=l),n[s]=d,r[s]=l;let f=o,b=0;for(;f!==s;)b+=n[f++],f=f%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const w=u&&l-u;return w?Math.round(b*1e3/w):void 0}}function _n(e,t){let n=0,r=1e3/t,s,o;const i=(l,u=Date.now())=>{n=u,s=null,o&&(clearTimeout(o),o=null),e.apply(null,l)};return[(...l)=>{const u=Date.now(),f=u-n;f>=r?i(l,u):(s=l,o||(o=setTimeout(()=>{o=null,i(s)},r-f)))},()=>s&&i(s)]}const W=(e,t,n=3)=>{let r=0;const s=Pn(50,250);return _n(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,d=i-r,l=s(d),u=i<=c;r=i;const f={loaded:i,total:c,progress:c?i/c:void 0,bytes:d,rate:l||void 0,estimated:l&&c&&u?(c-i)/l:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(f)},n)},Oe=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Ae=e=>(...t)=>a.asap(()=>e(...t)),Nn=x.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,x.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(x.origin),x.navigator&&/(msie|trident)/i.test(x.navigator.userAgent)):()=>!0,Fn=x.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Bn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function jn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ge(e,t){return e&&!Bn(t)?jn(e,t):t}const Ce=e=>e instanceof A?{...e}:e;function D(e,t){t=t||{};const n={};function r(l,u,f,b){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:b},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(l,u,f,b){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,f,b)}else return r(l,u,f,b)}function o(l,u){if(!a.isUndefined(u))return r(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,f){if(f in t)return r(l,u);if(f in e)return r(void 0,l)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u,f)=>s(Ce(l),Ce(u),f,!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const f=d[u]||s,b=f(e[u],t[u],u);a.isUndefined(b)&&f!==c||(n[u]=b)}),n}const Qe=e=>{const t=D({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=A.from(i),t.url=Ve(Ge(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let d;if(a.isFormData(n)){if(x.hasStandardBrowserEnv||x.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((d=i.getContentType())!==!1){const[l,...u]=d?d.split(";").map(f=>f.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...u].join("; "))}}if(x.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&Nn(t.url))){const l=s&&o&&Fn.read(o);l&&i.set(s,l)}return t},Ln=typeof XMLHttpRequest<"u",Dn=Ln&&function(e){return new Promise(function(n,r){const s=Qe(e);let o=s.data;const i=A.from(s.headers).normalize();let{responseType:c,onUploadProgress:d,onDownloadProgress:l}=s,u,f,b,w,p;function m(){w&&w(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let h=new XMLHttpRequest;h.open(s.method.toUpperCase(),s.url,!0),h.timeout=s.timeout;function g(){if(!h)return;const R=A.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),O={data:!c||c==="text"||c==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:R,config:e,request:h};Xe(function(B){n(B),m()},function(B){r(B),m()},O),h=null}"onloadend"in h?h.onloadend=g:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(g)},h.onabort=function(){h&&(r(new y("Request aborted",y.ECONNABORTED,e,h)),h=null)},h.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let N=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const O=s.transitional||We;s.timeoutErrorMessage&&(N=s.timeoutErrorMessage),r(new y(N,O.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,h)),h=null},o===void 0&&i.setContentType(null),"setRequestHeader"in h&&a.forEach(i.toJSON(),function(N,O){h.setRequestHeader(O,N)}),a.isUndefined(s.withCredentials)||(h.withCredentials=!!s.withCredentials),c&&c!=="json"&&(h.responseType=s.responseType),l&&([b,p]=W(l,!0),h.addEventListener("progress",b)),d&&h.upload&&([f,w]=W(d),h.upload.addEventListener("progress",f),h.upload.addEventListener("loadend",w)),(s.cancelToken||s.signal)&&(u=R=>{h&&(r(!R||R.type?new k(null,e,h):R),h.abort(),h=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const E=Cn(s.url);if(E&&x.protocols.indexOf(E)===-1){r(new y("Unsupported protocol "+E+":",y.ERR_BAD_REQUEST,e));return}h.send(o||null)})},Un=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const o=function(l){if(!s){s=!0,c();const u=l instanceof Error?l:this.reason;r.abort(u instanceof y?u:new k(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{i=null,o(new y(`timeout ${t} of ms exceeded`,y.ETIMEDOUT))},t);const c=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(o):l.removeEventListener("abort",o)}),e=null)};e.forEach(l=>l.addEventListener("abort",o));const{signal:d}=r;return d.unsubscribe=()=>a.asap(c),d}},kn=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},qn=async function*(e,t){for await(const n of vn(e))yield*kn(n,t)},vn=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Pe=(e,t,n,r)=>{const s=qn(e,t);let o=0,i,c=d=>{i||(i=!0,r&&r(d))};return new ReadableStream({async pull(d){try{const{done:l,value:u}=await s.next();if(l){c(),d.close();return}let f=u.byteLength;if(n){let b=o+=f;n(b)}d.enqueue(new Uint8Array(u))}catch(l){throw c(l),l}},cancel(d){return c(d),s.return()}},{highWaterMark:2})},Z=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ze=Z&&typeof ReadableStream=="function",In=Z&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Ye=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Hn=Ze&&Ye(()=>{let e=!1;const t=new Request(x.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),_e=64*1024,fe=Ze&&Ye(()=>a.isReadableStream(new Response("").body)),$={stream:fe&&(e=>e.body)};Z&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!$[t]&&($[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new y(`Response type '${t}' is not supported`,y.ERR_NOT_SUPPORT,r)})})})(new Response);const Mn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(x.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await In(e)).byteLength},zn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??Mn(t)},Jn=Z&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:d,responseType:l,headers:u,withCredentials:f="same-origin",fetchOptions:b}=Qe(e);l=l?(l+"").toLowerCase():"text";let w=Un([s,o&&o.toAbortSignal()],i),p;const m=w&&w.unsubscribe&&(()=>{w.unsubscribe()});let h;try{if(d&&Hn&&n!=="get"&&n!=="head"&&(h=await zn(u,r))!==0){let O=new Request(t,{method:"POST",body:r,duplex:"half"}),F;if(a.isFormData(r)&&(F=O.headers.get("content-type"))&&u.setContentType(F),O.body){const[B,M]=Oe(h,W(Ae(d)));r=Pe(O.body,_e,B,M)}}a.isString(f)||(f=f?"include":"omit");const g="credentials"in Request.prototype;p=new Request(t,{...b,signal:w,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:g?f:void 0});let E=await fetch(p);const R=fe&&(l==="stream"||l==="response");if(fe&&(c||R&&m)){const O={};["status","statusText","headers"].forEach(we=>{O[we]=E[we]});const F=a.toFiniteNumber(E.headers.get("content-length")),[B,M]=c&&Oe(F,W(Ae(c),!0))||[];E=new Response(Pe(E.body,_e,B,()=>{M&&M(),m&&m()}),O)}l=l||"text";let N=await $[a.findKey($,l)||"text"](E,e);return!R&&m&&m(),await new Promise((O,F)=>{Xe(O,F,{data:N,headers:A.from(E.headers),status:E.status,statusText:E.statusText,config:e,request:p})})}catch(g){throw m&&m(),g&&g.name==="TypeError"&&/fetch/i.test(g.message)?Object.assign(new y("Network Error",y.ERR_NETWORK,e,p),{cause:g.cause||g}):y.from(g,g&&g.code,e,p)}}),de={http:sn,xhr:Dn,fetch:Jn};a.forEach(de,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ne=e=>`- ${e}`,Vn=e=>a.isFunction(e)||e===null||e===!1,et={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Vn(n)&&(r=de[(i=String(n)).toLowerCase()],r===void 0))throw new y(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Ne).join(`
`):" "+Ne(o[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:de};function ae(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new k(null,e)}function Fe(e){return ae(e),e.headers=A.from(e.headers),e.data=ie.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),et.getAdapter(e.adapter||H.adapter)(e).then(function(r){return ae(e),r.data=ie.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return Ke(r)||(ae(e),r&&r.response&&(r.response.data=ie.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const tt="1.7.9",Y={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Y[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Be={};Y.transitional=function(t,n,r){function s(o,i){return"[Axios v"+tt+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new y(s(i," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!Be[i]&&(Be[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};Y.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function Wn(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],d=c===void 0||i(c,o,e);if(d!==!0)throw new y("option "+o+" must be "+d,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+o,y.ERR_BAD_OPTION)}}const V={assertOptions:Wn,validators:Y},_=V.validators;class L{constructor(t){this.defaults=t,this.interceptors={request:new Te,response:new Te}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=D(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&V.assertOptions(r,{silentJSONParsing:_.transitional(_.boolean),forcedJSONParsing:_.transitional(_.boolean),clarifyTimeoutError:_.transitional(_.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:V.assertOptions(s,{encode:_.function,serialize:_.function},!0)),V.assertOptions(n,{baseUrl:_.spelling("baseURL"),withXsrfToken:_.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),n.headers=A.concat(i,o);const c=[];let d=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(d=d&&m.synchronous,c.unshift(m.fulfilled,m.rejected))});const l=[];this.interceptors.response.forEach(function(m){l.push(m.fulfilled,m.rejected)});let u,f=0,b;if(!d){const p=[Fe.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,l),b=p.length,u=Promise.resolve(n);f<b;)u=u.then(p[f++],p[f++]);return u}b=c.length;let w=n;for(f=0;f<b;){const p=c[f++],m=c[f++];try{w=p(w)}catch(h){m.call(this,h);break}}try{u=Fe.call(this,w)}catch(p){return Promise.reject(p)}for(f=0,b=l.length;f<b;)u=u.then(l[f++],l[f++]);return u}getUri(t){t=D(this.defaults,t);const n=Ge(t.baseURL,t.url);return Ve(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){L.prototype[t]=function(n,r){return this.request(D(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(D(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}L.prototype[t]=n(),L.prototype[t+"Form"]=n(!0)});class be{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new k(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new be(function(s){t=s}),cancel:t}}}function $n(e){return function(n){return e.apply(null,n)}}function Kn(e){return a.isObject(e)&&e.isAxiosError===!0}const pe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(pe).forEach(([e,t])=>{pe[t]=e});function nt(e){const t=new L(e),n=je(L.prototype.request,t);return a.extend(n,L.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return nt(D(e,s))},n}const S=nt(H);S.Axios=L;S.CanceledError=k;S.CancelToken=be;S.isCancel=Ke;S.VERSION=tt;S.toFormData=Q;S.AxiosError=y;S.Cancel=S.CanceledError;S.all=function(t){return Promise.all(t)};S.spread=$n;S.isAxiosError=Kn;S.mergeConfig=D;S.AxiosHeaders=A;S.formToJSON=e=>$e(a.isHTMLForm(e)?new FormData(e):e);S.getAdapter=et.getAdapter;S.HttpStatusCode=pe;S.default=S;function tr(){const{user:e,login:t}=rt(),{t:n}=ct(),[r,s]=ee.useState(!1),[o,i]=ee.useState(""),[c,d]=ee.useState("success"),l=(w,p)=>{p!=="clickaway"&&s(!1)},u=st({name:ne().required(n("profile.name_required")),email:ne().email(n("profile.email_invalid")).required(n("profile.email_required")),avatar:ne().url(n("profile.avatar_invalid")).optional()}),f=ot({initialValues:{name:(e==null?void 0:e.name)||"",email:(e==null?void 0:e.email)||"",avatar:(e==null?void 0:e.avatar)||""},validationSchema:u,onSubmit:async w=>{try{const m=(await S.put("/api/profile",w,{headers:{"Content-Type":"application/json"}})).data;t(m),i(n("profile.profile_updated_success")),d("success"),s(!0)}catch(p){console.error(p),i(n("common.error_occurred")),d("error"),s(!0)}}}),b=async w=>{const p=w.target.files[0];if(p){if(!["image/jpeg","image/png","image/jpg"].includes(p.type)){i(n("profile.invalid_file_type")),d("error"),s(!0);return}const h=2*1024*1024;if(p.size>h){i(n("profile.file_too_large")),d("error"),s(!0);return}const g=new FormData;g.append("avatar",p);try{const R=(await S.post("/api/upload-avatar",g,{headers:{"Content-Type":"multipart/form-data"}})).data.avatarUrl;f.setFieldValue("avatar",R),i(n("profile.avatar_uploaded_success")),d("success"),s(!0)}catch(E){console.error(E),i(n("profile.avatar_upload_failed")),d("error"),s(!0)}}};return T.jsx(dt,{component:"main",maxWidth:"sm",children:T.jsx(te,{sx:{mt:4},children:T.jsxs(yt.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[T.jsx(lt,{elevation:3,sx:{padding:4,mt:8},children:T.jsxs(te,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[T.jsx(bt,{alt:f.values.name,src:f.values.avatar,sx:{width:100,height:100,mb:2}}),T.jsx(ut,{component:"h1",variant:"h5",children:n("profile.title")}),T.jsxs(te,{component:"form",onSubmit:f.handleSubmit,sx:{mt:3},children:[T.jsx(re,{margin:"normal",required:!0,fullWidth:!0,id:"name",name:"name",label:n("profile.name"),value:f.values.name,onChange:f.handleChange,error:f.touched.name&&!!f.errors.name,helperText:f.touched.name&&f.errors.name}),T.jsx(re,{margin:"normal",required:!0,fullWidth:!0,id:"email",name:"email",label:n("profile.email"),type:"email",value:f.values.email,onChange:f.handleChange,error:f.touched.email&&!!f.errors.email,helperText:f.touched.email&&f.errors.email}),T.jsx(re,{margin:"normal",fullWidth:!0,id:"avatar",name:"avatar",label:n("profile.avatar"),type:"url",value:f.values.avatar,onChange:f.handleChange,error:f.touched.avatar&&!!f.errors.avatar,helperText:f.touched.avatar&&f.errors.avatar,InputProps:{endAdornment:T.jsx(it,{position:"end",children:T.jsxs(ft,{color:"primary","aria-label":"upload picture",component:"label",children:[T.jsx("input",{hidden:!0,accept:"image/*",type:"file",onChange:b}),T.jsx(wt,{})]})})}}),T.jsx(pt,{type:"submit",variant:"contained",color:"primary",sx:{mt:3,mb:2},children:n("profile.save")})]})]})}),T.jsx(ht,{open:r,autoHideDuration:6e3,onClose:l,anchorOrigin:{vertical:"bottom",horizontal:"center"},children:T.jsx(mt,{onClose:l,severity:c,sx:{width:"100%"},children:o})})]})})})}export{tr as default};
